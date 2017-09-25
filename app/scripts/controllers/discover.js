'use strict';

/**
 * @ngdoc function
 * @name movieappApp.controller:DiscoverCtrl
 * @description
 * # DiscoverCtrl
 * Controller of the movieappApp
 */

function discoverCtrl(moviesService, dataInit) {
  const self = this;
  function getDiscover (){
    let promise = moviesService.getDiscover();
    promise.then(
      (answer) => {
        self.dataResult = answer.data;
        console.log(answer.data);
      },
      (reason) => {
        throw new Error("Whoops!" + reason );
      }
    );
  }
  self.getDiscover = getDiscover;
  self.dataResult = '';
  self.dataInit = dataInit;
  self.getDiscover();
}
discoverCtrl.$injection = ['moviesService', 'dataInit'];
angular.module('movieappApp').controller('DiscoverCtrl', discoverCtrl );
