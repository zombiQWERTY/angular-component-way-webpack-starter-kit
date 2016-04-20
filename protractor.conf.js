var chromedriver = require('chromedriver');

if (!chromedriver.path) { throw 'error: chomedriver is not installed'; }

exports.config = {
  baseUrl: 'http://localhost:8080/',

  /** use `npm run e2e` */
  specs: [
    './src/**/*.e2e.js'
  ],
  exclude: [],

  framework: 'jasmine',

  allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },
  directConnect: true,

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true', '--disable-extensions']
    }
  },

  onPrepare: function() {
    browser.ignoreSynchronization = true;
  },

  chromeDriver: chromedriver.path,

  seleniumServerJar: './node_modules/selenium-standalone/.selenium/selenium-server/2.53.0-server.jar'
};
