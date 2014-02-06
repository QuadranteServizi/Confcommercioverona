/*
    jQuery Mobile Site Builder v1.0
    Author: Sam Deering 2012
    Site: jquery4u.com
*/

(function($,W,D,undefined)
{

    //rss feed loading
    // $('#rss, #rss-feed, #news, #blog').live('pageinit',function(e)
    // {

        // console.log('init rss feed...');

        //settings
        var $container = $('#rss-feed'),
            // feedName = 'jQuery4u Blog', //override here
            // feedAddress = 'http://feeds.feedburner.com/Jquery4u', //override here
            feedName = JQMB.rss.name,
            feedAddress = JQMB.rss.url,
            numShow = 10;

        var newsfeed=new gfeedfetcher("rss-feed", "_blank")
        newsfeed.addFeed(feedName, feedAddress);
        newsfeed.displayoptions("label datetime snippet");
        newsfeed.setentrycontainer("p");
        newsfeed.filterfeed(numShow, "date");
        newsfeed.init();

    // });

})(jQuery,window,document);