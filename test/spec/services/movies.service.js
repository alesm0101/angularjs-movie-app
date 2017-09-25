'use strict';

describe('Service: movies.service', function () {

  // load the service's module
  beforeEach(module('movieappApp'));

  // instantiate service
  var movies.service;
  beforeEach(inject(function (_movies.service_) {
    movies.service = _movies.service_;
  }));

  it('should do something', function () {
    expect(!!movies.service).toBe(true);
  });

});
