/**
 * @author Rayees N
 * created on 04.07.2018
 */
(function () {
  'use strict';

  angular.module('Agartha.pages.tables')
    .controller('TablesPageCtrl', TablesPageCtrl);

  /** @ngInject */
  function TablesPageCtrl($http, $scope, $uibModal) {
    $http({
      method: 'GET',
      url: 'assets/json/project-list.json'
    }).then(function successCallback(response) {
      $scope.projecctList = response.data;
    }, function errorCallback(response) {
      console.log(response)
    });

    $scope.open = function (page, size) {
      $uibModal.open({
        animation: true,
        templateUrl: page,
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    };
  }
})();
