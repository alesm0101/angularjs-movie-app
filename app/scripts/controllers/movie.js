'use strict';

/**
 * @ngdoc function
 * @name movieappApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the movieappApp
 */
function MovieCtrl($routeParams, moviesService, dataInit) {
    const self = this;
    function getMovie(){
        const askForPromise = moviesService.getMovie(self.id);
        askForPromise.then(
            (answer) => { // OnSuccess function
              self.data = answer.data;
              console.log(answer.data);
            },
            (reason) => {  throw new Error("Whoops!" + reason );  } // OnFailure function
        );
    }
    self.id = $routeParams.id;
    self.dataInit = dataInit;
    self.getMovie = getMovie;
    self.data = '';
    self.getMovie();
}
MovieCtrl.$inject = ['$routeParams', 'moviesService', 'dataInit'];
angular.module('movieappApp').controller('MovieCtrl', MovieCtrl);
