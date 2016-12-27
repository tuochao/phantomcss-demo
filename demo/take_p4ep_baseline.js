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

casper.test.begin( 'take p4ep baseline', function ( test ) {    /*
        The test scenario
    */
    //capture screenshot from prod env as every test
    casper.start('https://www.realestate.com.au/property/10-4-wetherill-st-narrabeen-nsw-2101');

    //specify the size of browser
    casper.viewport( 1280, 1024 );

    casper.then( function () {
        //phantomcss.screenshot( '#my-property > main > div', 'p4ep_page' );
        phantomcss.screenshot({'p4ep_page': {selector: '#my-property > main', ignore: '#my-property > main > div > div.alternative-bg__item.rui-clearfix > section > div.ad-wrapper.medrec1 > div'}});
    })

    casper.then( function () {
        phantomcss.screenshot( '#property-header', 'property_header' );
    } );

    casper.then( function () {
        phantomcss.screenshot( '#my-property > main > div > div:nth-child(1) > div', 'property_history' );
    } );

    casper.then( function () {
        phantomcss.screenshot( '#about-property', 'property_attributes' );
    } );

    casper.then( function () {
        phantomcss.screenshot( '#energy-score-ui-container', 'energy_score' );
    } );

    casper.then( function () {
        phantomcss.screenshot( '#location-map', 'house_location' );
    } );

    casper.then( function () {
        phantomcss.screenshot( '#comparable-properties > section', 'similar_home' );
    } );

    casper.then( function () {
        phantomcss.screenshot( '#related-properties-cards', 'neighbouring_property' );
    } );

    casper.then( function () {
        phantomcss.screenshot( '#investor-insights', 'investment_insights' );
    } );

    casper.then( function () {
        phantomcss.screenshot( '#my-property > main > div > div:nth-child(8) > div', 'market_trends' );
    } );

    casper.then( function () {
        phantomcss.screenshot( '#nearby-schools > section', 'nearby_schools' );
    } );

	/*
	Casper runs tests
	*/
	casper.run( function () {
		console.log( '\nTHE END.' );
		// phantomcss.getExitStatus() // pass or fail?
		casper.test.done();
	} );
} );
