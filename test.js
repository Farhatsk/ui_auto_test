const Mocha = require('mocha');
const path = require('path');

// Create a new instance of Mocha
const mocha = new Mocha();

// Add the test files to the suite
mocha.addFile(path.join(__dirname, 'tests', 'Login.js'));
mocha.addFile(path.join(__dirname, 'tests', 'Profile.js'));

// Run the tests
mocha.run(function(failures) {
  process.exitCode = failures ? 1 : 0;
});
