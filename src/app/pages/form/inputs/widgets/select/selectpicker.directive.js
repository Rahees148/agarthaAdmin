/**
 * @author v.lugovksy
 * created on 04.07.2018
 */
(function () {
  'use strict';

  angular.module('Agartha.pages.form')
      .directive('selectpicker', selectpicker);

  /** @ngInject */
  function selectpicker() {
    return {
      restrict: 'A',
      link: function( $scope, elem) {
        setTimeout(function() {
          elem.selectpicker({dropupAuto: false});
        }, 0);
      }
    };
  }


})();