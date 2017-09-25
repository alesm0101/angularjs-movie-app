'use strict';

/**
 * @ngdoc function
 * @name movieappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieappApp
 */

const cfooterCmpnt = {
  bindings: {
    // count: '<'
  },
  require: {
    // parent: '^^parentComponent'
  },
  controller: function () { // $ctrl
    function increment() {
      this.count++;
    }
    this.text = increment;
    this.projectName = 'themoviedb';
  },
  controllerAs: 'cfooter',
  template: '<div class="footer"><div class="container"><p><span class="glyphicon glyphicon-heart"></span> {{cfooter.projectName}}</p></div></div>'
};

angular.module('movieappApp').component('cfooter', cfooterCmpnt);
