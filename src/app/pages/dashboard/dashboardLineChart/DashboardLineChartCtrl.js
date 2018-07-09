/**
 * @author v.lugovksy
 * created on 04.07.2018
 */
(function () {
    'use strict';

    angular.module('Agartha.pages.dashboard')
        .controller('DashboardLineChartCtrl', DashboardLineChartCtrl);

    /** @ngInject */
    function DashboardLineChartCtrl($scope, $http, $uibModal) {
        var apiUrl = "/assets/json/ticket-analysis.json";
        //var apiUrl = "/ticket/ticketAnalysis";


        $http({
            method: 'GET',
            url: apiUrl
        }).then(function successCallback(response) {
            var data = response.data;
            $scope.title = data.layout.title;
            var myPlot = document.getElementById('myDiv');
            // Create the plot:
            Plotly.plot('myDiv', {
                data: data.data,
                layout: data.layout,
                frames: data.frames
            });
            $scope.projectHealth = data.tables[0];
            // $scope.projectHealth = data.tables[data.tables.length - 1];
            myPlot.on('plotly_animatingframe', function (eventdata) {
                $scope.projectHealth = data.tables[eventdata.name];
                $scope.$apply();
            });

            myPlot.on('plotly_click', function (eventdata) {
                console.log(eventdata.points[0].text);
                if (eventdata.points[0].text !== null) {
                    window.open('/ticket/getTicketDetail/?id=' + eventdata.points[0].text, '_blank');
                }
            });
           
        }, function errorCallback(response) {
            console.log(response)
        });

        $scope.open = function (page, size, data) {
            $scope.projectHealth.index = data;
            $uibModal.open({
                animation: true,
                templateUrl: page,
                size: size,
                controller: 'ModalInstanceCtrl',
                controllerAs : '$ctrl',
                resolve: {
                items: function () {
                    return $scope.projectHealth;
                }
                }
            });
        };

    }
})();