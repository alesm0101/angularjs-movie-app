'use strict';

describe('Service: basic.service', function () {

  // load the service's module
  beforeEach(module('movieappApp'));

  // instantiate service
  var basic.service;
  beforeEach(inject(function (_basic.service_) {
    basic.service = _basic.service_;
  }));

  it('should do something', function () {
    expect(!!basic.service).toBe(true);
  });

});
