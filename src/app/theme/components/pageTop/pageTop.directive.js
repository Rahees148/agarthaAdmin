/**
 * @author v.lugovksy
 * created on 04.07.2018
 */
(function () {
  'use strict';

  angular.module('Agartha.theme.components')
      .directive('pageTop', pageTop);

  /** @ngInject */
  function pageTop() {
    return {
      restrict: 'E',
      scope: {
        isMenuCollapsed: '=',
      },
      templateUrl: 'app/theme/components/pageTop/pageTop.html'
    };
  }

})();