/**
 * @author v.lugovksy
 * created on 04.07.2018
 */
(function () {
  'use strict';

  angular.module('Agartha.theme.components')
      .directive('sidebar', sidebar);

  /** @ngInject */
  function sidebar() {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/sidebar/sidebar.html',
      controller: 'SidebarCtrl'
    };
  }

})();