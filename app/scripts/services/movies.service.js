'use strict';

/**
 * @ngdoc service
 * @name movieappApp.movies.service
 * @description
 * # movies.service
 * Factory in the movieappApp.
 */

function moviesService($http, $q, basic){
    let deferObject = '';
    let deferMovieObject = '';
    let deferDiscoverObject = '';
    const movieUrl = 'movie/'; // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
    const searchUrl = 'search/movie';
    const discoverUrl = 'discover/movie'; // https://api.themoviedb.org/3/discover/movie?api_key=c537cee3676e94b5080db01815dd2ff1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
    const intMethods = {
      searchMovies(param) {
        const promise = $http.get(
          basic.baseUrl + searchUrl,
          { cache: false, params: { api_key : basic.apiKey, query : param } }
        );
        deferObject = $q.defer();

        promise.then(
          ((answer) => { deferObject.resolve(answer); }),  // success
          ((reason) => { deferObject.reject(reason); })  // error
          );
        return deferObject.promise;
      },
      getMovie(id) {
        const promise = $http.get(
          basic.baseUrl + movieUrl + id,
          { cache: false, params: { api_key : basic.apiKey} }
        );
        deferMovieObject = $q.defer();
        promise.then(
          ((answer) => { deferMovieObject.resolve(answer); }),  // success
          ((reason) => { deferMovieObject.reject(reason); })  // error
          );
        return deferMovieObject.promise;
      },
      getDiscover(){
        const promise = $http.get(
          basic.baseUrl + discoverUrl,
          { cache: true, params: { api_key : basic.apiKey, language : 'en-US', page: 1, sort_by: 'vote_average.desc', year: new Date().getFullYear(), include_adult: false, include_video: false } }
        );
        deferDiscoverObject = deferDiscoverObject || $q.defer();
        promise.then(
          ((answer) => { deferDiscoverObject.resolve(answer); }),  // success
          ((reason) => { deferDiscoverObject.reject(reason); })  // error
          );
        return deferDiscoverObject.promise;
      }
    };
    // Public API here
    return intMethods;
    // return {
      // someMethod: function () {
      //  return meaningOfLife;
      // }
    // };
}
moviesService.$inject = ['$http', '$q', 'basic'];

angular.module('movieappApp').service('moviesService', moviesService);