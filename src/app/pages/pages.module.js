/**
 * @author Rayees N
 * created on 04.07.2018
 */
(function () {
  'use strict';

  angular.module('Agartha.pages', [
    'ui.router',

    'Agartha.pages.dashboard',
    'Agartha.pages.ui',
    'Agartha.pages.form',
    'Agartha.pages.tables',
    'Agartha.pages.profile',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');
  }

})();
