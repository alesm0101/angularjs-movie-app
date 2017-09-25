'use strict';

describe('Service: generalDataMovies.services', function () {

  // load the service's module
  beforeEach(module('movieappApp'));

  // instantiate service
  var generalDataMovies.services;
  beforeEach(inject(function (_generalDataMovies.services_) {
    generalDataMovies.services = _generalDataMovies.services_;
  }));

  it('should do something', function () {
    expect(!!generalDataMovies.services).toBe(true);
  });

});
