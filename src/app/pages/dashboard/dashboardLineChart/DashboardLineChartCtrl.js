/**
 * @author v.lugovksy
 * created on 04.07.2018
 */
(function () {
  'use strict';

  angular.module('Agartha.pages.dashboard')
      .controller('DashboardLineChartCtrl', DashboardLineChartCtrl);

  /** @ngInject */
  function DashboardLineChartCtrl() {
    var apiUrl = "assets/json/ticket-analysis.json";
    var plotData = null;

    Plotly.d3.json(apiUrl, function (err, data) {


        plotData = data.tables;

        data.layout.paper_bgcolor = 'rgba(0,0,0,0)';
        data.layout.plot_bgcolor = 'rgba(0,0,0,0)';

        data.layout.font = {
            family: 'Courier New, monospace',
            size: 18,
            color: '#C4E0E5'
            
        };


        data.layout.xaxis.titlefont = {
            family: 'Courier New, monospace',
            size: 18,
            color: 'rgb(198, 66, 110)'
        };

        data.layout.yaxis.titlefont = {
            family: 'Courier New, monospace',
            size: 18,
            color: 'rgb(198, 66, 110)'
            
        };

        console.log(data);
        data.layout.sliders[0].pad.t=100;
        data.layout.updatemenus[0].pad.t=130;

        var loadCon = document.getElementById('holdon-overlay');
        var modalContainer = document.getElementById('id01');

        loadCon.setAttribute("style", "display: none;");
        var myPlot = document.getElementById('myDiv');
        // Create the plot:
        Plotly.plot('myDiv', {
            data: data.data,
            layout: data.layout,
            frames: data.frames
        });


        document.getElementById("showData").addEventListener('click', clickLinkHandler);

        function clickLinkHandler(event) {

            var objDataSet = Object.assign({}, event.target.dataset);

            if (objDataSet.hasOwnProperty('frame')) {

                var arrSplit = objDataSet.matrix.split('--');
                if (objDataSet.hasOwnProperty('allheading')) {
                    // console.log(plotData[objDataSet.frame]);

                    if (arrSplit[0] == 0) {
                        var currentrow = plotData[objDataSet.frame];
                        var str = '';
                        for (i = 1; i < currentrow.length; i++) {
                            var eachrow = currentrow[i]['row'][arrSplit[1]];
                            if (eachrow.length !== 0) {
                                str += '<div class="main-continer"><div class="card-header">' + currentrow[i]['row'][0] + '</div>';
                                for (var k = 0; k < eachrow.length; k++) {
                                    str += '<a href="/ticket/getTicketDetail/?id=' + eachrow[k] + '"  target="_blank" class="btn btn-primary ' + currentrow[arrSplit[0]]['row'][arrSplit[1]].toLowerCase() + '">' + eachrow[k] + '</a>';
                                }

                                str += "<br><br></div>";
                            }
                        }
                        modalContainer.style.display = 'block';
                        document.getElementsByClassName('overlay-title')[0].innerHTML = "" + plotData[objDataSet.frame][arrSplit[0]]['row'][arrSplit[1]] + " Tickets";
                        document.getElementsByClassName('overlaycontainer')[0].innerHTML = str;

                    } else {

                        var currentrow = plotData[objDataSet.frame][arrSplit[0]]['row'];
                        var str = '';
                        for (i = 1; i < currentrow.length; i++) {
                            if (currentrow[i].length !== 0) {
                                str += '<div class="main-continer"><div class="card-header">' + plotData[objDataSet.frame][0]['row'][i] + '</div>';

                                for (var k = 0; k < currentrow[i].length; k++) {
                                    str += '<a href="/ticket/getTicketDetail/?id=' + currentrow[i][k] + '"  target="_blank" class="btn btn-primary ' + plotData[objDataSet.frame][0]['row'][i].toLowerCase() + '">' + currentrow[i][k] + '</a>';
                                }
                                str += "<br><br></div>";
                            }


                        }
                        modalContainer.style.display = 'block';
                        document.getElementsByClassName('overlay-title')[0].innerHTML = "" + currentrow[0] + " Tickets";
                        document.getElementsByClassName('overlaycontainer')[0].innerHTML = str;
                    }



                } else {

                    var list = plotData[objDataSet.frame][arrSplit[0]]['row'][arrSplit[1]];
                    var str = '<div class="main-continer">';
                    for (var i = 0; i < list.length; i++) {
                        str += '<a href="/ticket/getTicketDetail/?id=' + list[i] + '"  target="_blank" class="btn btn-primary ' + objDataSet.col.toLowerCase() + '">' + list[i] + '</a>';
                    }
                    str += "</div>";
                    document.getElementsByClassName('overlay-title')[0].innerHTML = objDataSet.row + " " + objDataSet.col + " on " + plotData[objDataSet.frame][0]['row'][0] + "<b> (" + list.length + ")</b>";
                    document.getElementsByClassName('overlaycontainer')[0].innerHTML = str;
                    modalContainer.style.display = 'block';
                }

            }
        }


        /**
         * plotly_relayout
         * plotly_afterplot
         * plotly_animatingframe
         */



        myPlot.on('plotly_animatingframe', function (eventdata) {
            CreateTableFromJSON(data.tables[eventdata.name], eventdata.name);
        });

        myPlot.on('plotly_click', function (eventdata) {
            console.log(eventdata.points[0].text);
            if (eventdata.points[0].text !== null) {
                window.open('/ticket/getTicketDetail/?id=' + eventdata.points[0].text, '_blank');
            }
        });



        function CreateTableFromJSON(getData, frameIndex) {

            var heading = getData[0].row;
            var tableId = document.getElementById("table-id");
            var table = document.createElement("table");
            table.id = "table-id";
            if (tableId) {
                tableId.remove();
            }
            var col = [];

            for (var key in getData) {
                if (col.indexOf(key) === -1) {
                    col.push(getData[key].row);
                }
            }

            var tr = table.insertRow(-1);

            for (var i = 0; i < col.length; i++) {
                for (var k = 0; k < col[i].length; k++) {
                    if (i === 0) {
                        var th = document.createElement("th");
                    } else {
                        var th = document.createElement("td");
                    }
                    var str;
                    if (typeof col[i][k] == "string") {
                        if (i === 0 && k === 0) {
                            str = col[i][k];
                        } else {
                            str = '<a class="table-link"  data-matrix="' + i + "--" + k + '"  href="javascript:void(0)" data-frame=' + frameIndex + ' data-allheading=' + col[i][k] + '>' + col[i][k] + '</a>';
                        }

                    } else {
                        if (col[i][k].length == 0) {
                            str = '<img src="./img/thumbup.jpg" style=height:25px;width:25px>';
                        } else {
                            str = '<a class="table-link" data-matrix="' + i + "--" + k + '" data-frame=' + frameIndex + ' data-row=' + col[i][0] + ' data-col=' + heading[k] + ' href="javascript:void(0)">' + col[i][k].length + '</a>'
                        }
                    }

                    th.innerHTML = str;
                    tr.appendChild(th);
                }
                tr = table.insertRow(-1);
            }


            var divContainer = document.getElementById("showData");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
        }

    });
  }
})();