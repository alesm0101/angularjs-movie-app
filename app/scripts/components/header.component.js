'use strict';

/**
 * @ngdoc function
 * @name movieappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieappApp
 */
function cheaderCtrl ($location) {
    function getPage(page) {
      return page === $location.url();
    }
    // this.text = increment;
    this.getPage = getPage;
    this.projectTitle= 'Movie App';
}
const cheaderCmpnt = {
  bindings: {
    //page: '<'
  },
  require: {
    // parent: '^^parentComponent'
  },
  controller: cheaderCtrl,
  controllerAs: 'cheader', // $ctrl
  templateUrl: '/templates/header.html'
};

cheaderCtrl.$inject = ['$location']
angular.module('movieappApp').component('cheader', cheaderCmpnt);
