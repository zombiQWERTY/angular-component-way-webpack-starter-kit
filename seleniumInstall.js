var cb           = require('cb');
var selenium     = require('selenium-standalone');
var chromedriver = require('chromedriver');

selenium.install({
  version: '2.53.0',
  baseURL: 'https://selenium-release.storage.googleapis.com',
  drivers: {
    chrome: {
      version: chromedriver.version,
      arch:    process.arch,
      baseURL: 'https://chromedriver.storage.googleapis.com'
    }
  }
}, cb);
