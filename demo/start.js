var casper = require('casper').create();
casper.start('http://casperjs.org/');

casper.then(function() {
    //this.echo('First Page: ' + this.getTitle());
    console.log('First Page: ' + this.getTitle());

});

casper.thenOpen('http://phantomjs.org', function() {
    //this.echo('Second Page: ' + this.getTitle());
    console.log('Second Page: ' + this.getTitle());
});

casper.run();