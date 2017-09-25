'use strict';

describe('Filter: posterImage', function () {

  // load the filter's module
  beforeEach(module('movieappApp'));

  // initialize a new instance of the filter before each test
  var posterImage;
  beforeEach(inject(function ($filter) {
    posterImage = $filter('posterImage');
  }));

  it('should return the input prefixed with "posterImage filter:"', function () {
    var text = 'angularjs';
    expect(posterImage(text)).toBe('posterImage filter: ' + text);
  });

});
