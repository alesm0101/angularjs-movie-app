'use strict';

/**
 * @ngdoc filter
 * @name movieappApp.filter:roundnumber.filter
 * @function
 * @description
 * # roundnumber.filter
 * Filter in the movieappApp.
 */
function roundnumber() {
  return function (input) {
    return input >= 0 ? Math.floor(input) : 0;
  };
}
angular.module('movieappApp').filter('roundnumber', roundnumber );
