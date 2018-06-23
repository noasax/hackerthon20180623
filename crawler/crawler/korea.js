const cheerio = require('cheerio')
const Crawler = require("simplecrawler");

var myCrawler = new Crawler("http://gall.dcinside.com/board/lists/?id=bitcoins");
myCrawler.on("fetchcomplete", function(queueItem, responseBuffer, response) {
  const $ = cheerio.load(responseBuffer.toString());
  
  const list = $(".list_tbody .t_subject");
  list.each(function(){
    console.log($(this).find("a").text());
  });
  // console.log($('.list_tbody .t_subject a').text());
});

myCrawler.start();
module.exports = myCrawler;
