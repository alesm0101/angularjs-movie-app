'use strict';

/**
 * @ngdoc filter
 * @name movieappApp.filter:posterImage
 * @function
 * @description
 * # posterImage
 * Filter in the movieappApp.
 */
function posterImage() {
    return function (input, dataInit) {
      let image = 'https://via.placeholder.com/200x300?text=Not%20found';
      if(input && dataInit && dataInit.images && dataInit.images.poster_sizes.length > 0){
        let size = dataInit.images.poster_sizes[1] ? dataInit.images.poster_sizes[1] : dataInit.images.poster_sizes[0];
        image = dataInit.images.secure_base_url + size + input;
      }
      return image
    };
  }
angular.module('movieappApp').filter('posterimage', posterImage);
