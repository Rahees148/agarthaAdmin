/**
 * @author v.lugovksy
 * created on 04.07.2018
 */
(function () {
  'use strict';

  angular.module('Agartha.pages.form')
      .directive('switch', switchDirective);

  /** @ngInject */
  function switchDirective($timeout) {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        ngModel: '='
      },
      template: '<div class="switch-container {{color}}"><input type="checkbox" ng-model="ngModel"></div>',
      link: function (scope, elem, attr) {
        $timeout(function(){
          scope.color = attr.color;
          $(elem).find('input').bootstrapSwitch({
            size: 'small',
            onColor: attr.color
          });
        });
      }
    };
  }
})();