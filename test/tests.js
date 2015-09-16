var assert = require('assert');
var sinon = require('sinon');
var mediaImage = require('./fixtures/media-image.json');
var mediaVideo = require('./fixtures/media-video.json');
var Instamat = require('../src/instamat.js');

describe('Instamat', function() {
  'use strict';

  it('is a function', function() {
    assert.equal('function', typeof Instamat);
  });

  it('accepts a "media" object argument', function() {
    var instamat = new Instamat(mediaImage);
    assert.equal(true, !!instamat.media);
  });

  it('accepts an "options" object argument', function() {
    var instamat = new Instamat(mediaImage, { linkToBlank: true });
    assert.equal(true, !!instamat.options.linkToBlank);
  });
});
