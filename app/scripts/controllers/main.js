'use strict';

/**
 * @ngdoc function
 * @name movieappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieappApp
 */

function mainCtrl(moviesService, dataInit) {
    const self = this;
    function search (){
      if(self.query){
        const askForPromise = moviesService.searchMovies(self.query);
        askForPromise.then(
            (answer) => { // OnSuccess function
              self.dataResult = answer.data;
              console.log(answer.data);
            },
            (reason) => {  throw new Error("Whoops!" + reason );  } // OnFailure function
        );
      }
    }

    self.query = '';
    self.dataInit = dataInit;
    self.search = search;
    self.dataResult = '';
}
mainCtrl.$inject = ['moviesService', 'dataInit'];
angular.module('movieappApp').controller('MainCtrl', mainCtrl);
