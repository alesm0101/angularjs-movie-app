'use strict';

/**
 * @ngdoc function
 * @name movieappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movieappApp
 */

function aboutCtrl() {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
}

aboutCtrl.$inject = [];
angular.module('movieappApp').controller('AboutCtrl', aboutCtrl);
