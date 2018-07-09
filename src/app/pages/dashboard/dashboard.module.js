/**
 * @author Rayees N
 * created on 04.07.2018
 */
(function () {
  'use strict';

  angular.module('Agartha.pages.dashboard', [])
      .config(routeConfig)
      .controller('ModalInstanceCtrl', function ( items, $scope ) {
        var $ctrl = this,
        index = items.index.split(',');
        $scope.dependancy = items[index[0]].row[index[1]]
        console.log('items call', items[index[0]].row[index[1]])
      });
  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'app/pages/dashboard/dashboard.html',
          title: 'Dashboard',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
          },
        });
  }

})();
