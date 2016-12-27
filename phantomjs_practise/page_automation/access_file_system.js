var page = require("webpage").create();
var fs = require("fs");
var homePage = "https://www.realestate.com.au/property/1-joy-ave-burleigh-waters-qld-4220";

page.open(homePage);
page.onLoadFinished = function(status) {
  var file = fs.open("output.htm", "w");

  file.write(page.content);
  file.close();
  phantom.exit();
};