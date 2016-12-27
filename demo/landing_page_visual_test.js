/*
	Require and initialise PhantomCSS module
	Paths are relative to CasperJs directory
*/

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
    /*
    screenshotRoot: '/screenshots',
    failedComparisonsRoot: '/failures'
    casper: specific_instance_of_casper,
    libraryRoot: '/phantomcss',
    fileNameGetter: function overide_file_naming(){},
    onPass: function passCallback(){},
    onFail: function failCallback(){},
    onTimeout: function timeoutCallback(){},
    onComplete: function completeCallback(){},
    hideElements: '#thing.selector',
    addLabelToFailedImage: true,
    outputSettings: {
        errorColor: {
            red: 255,
            green: 255,
            blue: 0
        },
        errorType: 'movement',
        transparency: 0.3
    }*/
} );

casper.test.begin( 'landing page visual test', function ( test ) {
    casper.on( 'remote.message', function ( msg ) {
        this.echo( msg );
    } );

    casper.on( 'error', function ( err ) {
        this.die( "PhantomJS has errored: " + err );
    } );

    casper.on( 'resource.error', function ( err ) {
        casper.log( 'Resource load error: ' + err, 'warning' );
    } );

    /*
        The test scenario
    */
    //capture screenshot from staging env as every test
    casper.start('https://p4ep:p4ep@www.e2e.realestate.com.au/property')

    //specify the size of browser
    casper.viewport( 1280, 1024 );

    casper.then( function () {
        phantomcss.screenshot( '#my-property', 'landing_page' );
    } );

    casper.then( function () {
        //compare screenshots
        phantomcss.compareAll();
        //phantomcss.compareFiles('../screenshots/property_0.png', '../screenshots/property_0.diff.png');
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
