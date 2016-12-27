var fs = require( 'fs' );
var path = fs.absolute( fs.workingDirectory + '/phantomcss.js' );
var phantomcss = require( path );

phantomcss.init( {
    rebase: casper.cli.get( "rebase" ),
    // SlimerJS needs explicit knowledge of this Casper, and lots of absolute paths
    casper: casper,
    libraryRoot: fs.absolute( fs.workingDirectory + '' ),
    screenshotRoot: fs.absolute( fs.workingDirectory + '/screenshots' ),
    failedComparisonsRoot: fs.absolute( fs.workingDirectory + '/demo/failures' ),
    addLabelToFailedImage: false,
} );

casper.test.begin( 'take landing page baseline', function ( test ) {    /*
        The test scenario
    */
    //capture screenshot from prod env as every test
    casper.start('https://www.realestate.com.au/property');

    //specify the size of browser
    casper.viewport( 1280, 1024 );

    casper.then( function () {
        phantomcss.screenshot( '#my-property', 'landing_page' );
    })

	/*
	Casper runs tests
	*/
	casper.run( function () {
		console.log( '\nTHE END.' );
		// phantomcss.getExitStatus() // pass or fail?
		casper.test.done();
	} );
} );
