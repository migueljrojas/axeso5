'use strict';

var Gamecard = require('../gamecard');

describe('Gamecard View', function() {

  beforeEach(function() {
    this.gamecard = new Gamecard();
  });

  it('Should run a few assertions', function() {
    expect(this.gamecard);
  });

});
