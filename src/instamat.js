(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], module);
  } else if (typeof module === 'object' && module.exports) {
    // Node
    module.exports = factory();
  } else {
    // Window
    root.Instamat = factory();
  }
}(this, function() {
  'use strict';

  /**
    @global
    @constructor
    @param {object} media -
      Media JSON representation from the Instagram API.
    @param {object} [options] -
      Options hash.
  */
  function Instamat(media, options) {
    options = options || {};

    this.media = media;
    this.options = options;
  }

  return Instamat;
}));
