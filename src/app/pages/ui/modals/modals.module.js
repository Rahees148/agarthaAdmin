/**
 * @author Rayees N
 * created on 04.07.2018
 */
(function () {
  'use strict';

  angular.module('Agartha.pages.ui.modals', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.modals', {
          url: '/modals',
          templateUrl: 'app/pages/ui/modals/modals.html',
          controller: 'ModalsPageCtrl',
          title: 'Modals',
          sidebarMeta: {
            order: 300,
          },
        });
  }

})();
