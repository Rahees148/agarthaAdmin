/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('Agartha.pages.ui', [
    'Agartha.pages.ui.typography',
    'Agartha.pages.ui.buttons',
    'Agartha.pages.ui.icons',
    'Agartha.pages.ui.modals',
    'Agartha.pages.ui.grid',
    'Agartha.pages.ui.alerts',
    'Agartha.pages.ui.progressBars',
    'Agartha.pages.ui.notifications',
    'Agartha.pages.ui.tabs',
    'Agartha.pages.ui.slider',
    'Agartha.pages.ui.panels',
  ]);
    //  .config(routeConfig);

  /** @ngInject */
  // function routeConfig($stateProvider) {
  //   $stateProvider
  //       .state('ui', {
  //         url: '/ui',
  //         template : '<ui-view></ui-view>',
  //         abstract: true,
  //         title: 'UI Features',
  //         sidebarMeta: {
  //           icon: 'ion-android-laptop',
  //           order: 200,
  //         },
  //       });
  // }

})();
