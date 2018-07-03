/**
 * @author Rayees N
 * created on 04.07.2018
 */
(function () {
  'use strict';

  angular.module('Agartha.pages.components.mail')
      .controller('MailTabCtrl', MailTabCtrl);

  /** @ngInject */
  function MailTabCtrl(composeModal, mailMessages) {

    var vm = this;
    vm.navigationCollapsed = true;
    vm.showCompose = function(subject, to , text){
      composeModal.open({
        subject : subject,
        to: to,
        text: text
      })
    };

    vm.tabs = mailMessages.getTabs();
  }

})();
