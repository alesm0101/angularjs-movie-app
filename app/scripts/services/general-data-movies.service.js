'use strict';

/**
 * @ngdoc service
 * @name movieappApp.generalDataMovies
 * @description
 * # generalDataMovies
 * Service in the movieappApp.
 */
function generalDataMovies ($http, $q, basic) {
    let defer = '';
    const configurationUrl = 'configuration';
    const obj = {
      getData() {
        const promise = $http.get(
          basic.baseUrl + configurationUrl,
          { cache: true, params: { api_key : basic.apiKey} }
        );
        defer = defer || $q.defer();

        promise.then(
          ((answer) => { defer.resolve(answer.data); }),  // success
          ((reason) => { defer.reject(reason); })  // error
          );
        return defer.promise
      },
    }
    return obj;
}
generalDataMovies.$inject = ['$http', '$q', 'basic']
angular.module('movieappApp').service('generalDataMovies', generalDataMovies);
