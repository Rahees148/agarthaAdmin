/**
 * @author v.lugovksy
 * created on 15.12.2015
 */
(function () {
  'use strict';

  angular.module('Agartha.theme')
    .run(themeRun);

  /** @ngInject */
  function themeRun($timeout, $rootScope, layoutSizes, layoutPaths, preloader, $q) {

    $rootScope.$isMobile =  (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase());
    var whatToWait = [
      $timeout(500)
    ];

    if ($rootScope.$isMobile) {
      whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg-mobile.jpg'));
    } else {
      whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg.jpg'));
      whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg-blurred.jpg'));
    }

    $q.all(whatToWait).then(function () {
      $rootScope.$pageFinishedLoading = true;
    });

    $timeout(function () {
      if (!$rootScope.$pageFinishedLoading) {
        $rootScope.$pageFinishedLoading = true;
      }
    }, 7000);

    $rootScope.$isMenuCollapsed = window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
  }

})();