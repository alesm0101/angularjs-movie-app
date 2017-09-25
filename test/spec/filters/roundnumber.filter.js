'use strict';

describe('Filter: roundnumber.filter', function () {

  // load the filter's module
  beforeEach(module('movieappApp'));

  // initialize a new instance of the filter before each test
  var roundnumber.filter;
  beforeEach(inject(function ($filter) {
    roundnumber.filter = $filter('roundnumber.filter');
  }));

  it('should return the input prefixed with "roundnumber.filter filter:"', function () {
    var text = 'angularjs';
    expect(roundnumber.filter(text)).toBe('roundnumber.filter filter: ' + text);
  });

});
