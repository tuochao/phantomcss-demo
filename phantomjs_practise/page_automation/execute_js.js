var page = require("webpage").create();
var homePage = "http://www.google.com/";

page.open(homePage);
page.onLoadFinished = function(status) {
  var url = page.url;
  console.log("HomePage: " + homePage);

  console.log("Status:  " + status);
  console.log("Loaded:  " + url);

  page.evaluate(function() {
  var searchBox = document.querySelector(".lst");
  console.log(searchBox);
  var searchForm = document.querySelector("form");
  console.log(searchForm);

  searchBox.value = "PhantomJS";
  searchForm.submit();
  page.render("results.png");

//  if (url == homePage) {
//    page.evaluate(function() {
//      var searchBox = document.querySelector(".lst");
//      console.log(searchBox);
//      var searchForm = document.querySelector("form");
//      console.log(searchForm);
//
//      searchBox.value = "PhantomJS";
//      searchForm.submit();
//      page.render("results.png");
//    });
//  } else {
//    //page.render("results.png");
//    phantom.exit();
//  }
};