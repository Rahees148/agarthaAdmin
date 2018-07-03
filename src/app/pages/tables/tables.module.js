/**
 * @author Rayees N
 * created on 04.07.2018
 */
(function () {
  'use strict';

  angular.module('Agartha.pages.tables', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('projects', {
          url: '/projects',
          templateUrl: 'app/pages/tables/smart/tables.html',
          controller: 'TablesPageCtrl',
          title: 'Projects',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300,
          },
        });
   // $urlRouterProvider.when('/projects','/projects/list');
  }

  // /** @ngInject */
  // function routeConfig($stateProvider, $urlRouterProvider) {
  //   $stateProvider
  //       .state('tables', {
  //         url: '/tables',
  //         template : '<ui-view></ui-view>',
  //         abstract: true,
  //         controller: 'TablesPageCtrl',
  //         title: 'Tables',
  //         sidebarMeta: {
  //           icon: 'ion-grid',
  //           order: 300,
  //         },
  //       }).state('tables.basic', {
  //         url: '/basic',
  //         templateUrl: 'app/pages/tables/basic/tables.html',
  //         title: 'Basic Tables',
  //         sidebarMeta: {
  //           order: 0,
  //         },
  //       }).state('tables.smart', {
  //         url: '/smart',
  //         templateUrl: 'app/pages/tables/smart/tables.html',
  //         title: 'Smart Tables',
  //         sidebarMeta: {
  //           order: 100,
  //         },
  //       });
  //   $urlRouterProvider.when('/tables','/tables/basic');
  // }

})();
