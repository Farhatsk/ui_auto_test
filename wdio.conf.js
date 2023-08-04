exports.config = {
    specs: ['./tests/**/*.js'],
    capabilities: [
      {
        maxInstances: 1,
        browserName: 'chrome',
      },
      {
        maxInstances: 1,
        browserName: 'firefox',
      },
      {
        maxInstances: 1,
        browserName: 'safari',
      },
      {
        maxInstances: 1,
        browserName: 'MicrosoftEdge',
      },
    ],
    logLevel: 'warn',
    outputDir: './logs',
    reporters: ['spec'],
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000,
      require: ['@babel/register'],
    },
    before: function (capabilities, specs) {
      const chai = require('chai');
      chai.use(require('chai-as-promised'));
      global.expect = chai.expect;
    },
  };
  