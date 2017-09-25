'use strict';

/**
 * @ngdoc overview
 * @name movieappApp
 * @description
 * # movieappApp
 *
 * Main module of the application.
 */
angular
  .module('movieappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

  .config(['$routeProvider', '$locationProvider', movieappApp]);

  function movieappApp ($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('!'); // reset
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          dataInit: function(generalDataMovies){
            return generalDataMovies.getData();
          }
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      
      .when('/movie/:id', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl',
        controllerAs: 'movie',
        resolve: {
          dataInit: function(generalDataMovies){
            return generalDataMovies.getData();
          }
        }
      })
      .when('/discover', {
        templateUrl: 'views/discover.html',
        controller: 'DiscoverCtrl',
        controllerAs: 'discover',
        resolve: {
          dataInit: function(generalDataMovies){
            return generalDataMovies.getData();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }
