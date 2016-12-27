phantom.casperTest = true;
var path = fs.absolute( fs.workingDirectory + '/phantomcss.js' );
var phantomcss = require( path );

casper.test.begin( 'baidu visual tests', function ( test ) {
    casper.start('http://www.baidu.com');
//    casper.viewport( 1024, 768 );
//    casper.then(function() {
//      phantomcss.screenshot('.site-header', 'site-header');
//    });
//    casper.run( function () {
//        console.log( '\nTHE END.' );
//        // phantomcss.getExitStatus() // pass or fail?
//        casper.test.done();
//    } );
    test.assert(true);
    console.log("test finished")
    test.done();
} );