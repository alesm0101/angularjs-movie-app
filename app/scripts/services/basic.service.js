'use strict';

/**
 * @ngdoc service
 * @name movieappApp.basic.service
 * @description
 * # basic.service
 * Constant in the movieappApp.
 */

const basic = {
	apiKey: '00000000000000000',
	baseUrl:'https://api.themoviedb.org/3/'
};

angular.module('movieappApp').constant('basic', basic);
