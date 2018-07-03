/**
 * @author Rayees N
 * created on 04.07.2018
 */
(function () {
  'use strict';

  angular.module('Agartha.pages.ui.grid', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.grid', {
          url: '/grid',
          templateUrl: 'app/pages/ui/grid/grid.html',
          title: 'Grid',
          sidebarMeta: {
            order: 400,
          },
        });
  }

})();
