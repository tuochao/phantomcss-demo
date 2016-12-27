var webpage = require('webpage').create();

// open scotch.io
webpage.open('https://www.realestate.com.au', function(status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        var title = webpage.evaluate(function() {
            return document.title;
        });

     // log the title
        console.log(title);
        console.log(title === 'Real Estate, Property & Homes For Sale - realestate.com.au');
    }

    phantom.exit();
});