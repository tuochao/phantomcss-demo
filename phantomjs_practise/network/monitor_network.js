var page = require('webpage').create();

// hook into initial request
page.onResourceRequested = function(request) {
    console.log('Request ' + JSON.stringify(request, undefined, 4));
};

// hook to response
page.onResourceReceived = function(response) {
    console.log('Receive ' + JSON.stringify(response, undefined, 4));
};

page.open('http://www.google.com');
phantom.exit();