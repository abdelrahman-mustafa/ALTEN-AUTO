var Mocha = require('mocha');
var glob = require('glob');
var test_files = glob.sync('./*/test/*.test.js');

var mocha = new Mocha({
    
    reporter: 'list'
});

test_files.forEach((file)=>{
    mocha.addFile(file);
});

mocha.run((failures)=>{
    process.exitCode = failures ? process.exit(1): process.exit(0);  // exit with non-zero status if there were failures
});