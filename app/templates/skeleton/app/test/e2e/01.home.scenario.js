'use strict';

/*jshint undef:false */
(function() {
  var utils = require('../utils');
  describe('app', function() {
    var ptor;
    beforeEach(function() {
      ptor = protractor.getInstance();
      console.info('\nrunning:', jasmine.getEnv().currentSpec.description);
    });

    afterEach(function() {
      if (!jasmine.getEnv().currentSpec.results().passed()) {
        utils.takeScreenshot(browser, jasmine.getEnv().currentSpec.description.replace(/ /g, '-'));
      }
    });

    it('should load the homepage', function() {
      ptor.get('/');
      expect(ptor.isElementPresent(by.css('body'))).toBe(true);
    });

    it('should navigate to the docs page when clicking', function() {
      element(by.css('a[ui-sref="root.getting-started"]')).click();
      expect(ptor.getCurrentUrl()).toMatch(/\/getting-started/);
    });

  });
})();