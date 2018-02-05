'use strict';

var AxnewsScroller = require('../axnews-scroller');

describe('AxnewsScroller View', function() {

  beforeEach(function() {
    this.axnewsScroller = new AxnewsScroller();
  });

  it('Should run a few assertions', function() {
    expect(this.axnewsScroller);
  });

});
