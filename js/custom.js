/*
    jQuery Mobile Site Builder v1.0
    Author: Sam Deering 2012
    Site: jquery4u.com
*/

(function($,W,D,undefined)
{
    //global settings obj
    W.JQMB = {};

    //dynamically script loading when required
    function showPageLoading()
    {
        $.mobile.loading('show', {
            text: 'Loading',
            textVisible: true,
            theme: 'd',
            html: ""
        });
    }

    //contact page form validation
    $('#contact, #contact-us').live('pageinit',function(event)
    {
        showPageLoading();
        $.getScript('js/jquery.validate.min.js', function()
        {
            $.getScript('js/contact-form.js', function()
            {
                $.mobile.hidePageLoadingMsg();
            });
        });
    });

    //twitter page load tweets
    $('#twitter, #twitter-feed').live('pageinit',function(event)
    {
        showPageLoading();
        $.getScript('js/twitter-feed.js', function()
        {
            $.mobile.hidePageLoadingMsg();
        });
    });

    //rss feed page loading
    $('#rss, #rss-feed, #news, #blog').live('pageinit',function(e)
    {
        showPageLoading();
        $.getScript('js/rss-feed.js', function()
        {
            $.mobile.hidePageLoadingMsg();
        });
    });

})(jQuery, window, document);