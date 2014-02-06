/*
    jQuery Mobile Site Builder v1.0
    Author: Sam Deering 2012
    Site: jquery4u.com
*/

(function($,W,D,undefined)
{

    //twitter page tweets
    // $('#twitter, #twitter-feed').live('pageinit',function(event)
    // {


    /**
      * Calculates the Twitter time since the tweet was created
      * @param datetime returned by Twitter API in created_at
      * @return time since in html
      */
    function calculateSince(datetime)
    {
        var tTime=new Date(datetime);
        var cTime=new Date();
        var sinceMin=Math.round((cTime-tTime)/60000);
        if(sinceMin==0)
        {
            var sinceSec=Math.round((cTime-tTime)/1000);
            if(sinceSec<10)
              var since='less than 10 seconds ago';
            else if(sinceSec<20)
              var since='less than 20 seconds ago';
            else
              var since='half a minute ago';
        }
        else if(sinceMin==1)
        {
            var sinceSec=Math.round((cTime-tTime)/1000);
            if(sinceSec==30)
              var since='half a minute ago';
            else if(sinceSec<60)
              var since='less than a minute ago';
            else
              var since='1 minute ago';
        }
        else if(sinceMin<45)
            var since=sinceMin+' minutes ago';
        else if(sinceMin>44&&sinceMin<60)
            var since='about 1 hour ago';
        else if(sinceMin<1440){
            var sinceHr=Math.round(sinceMin/60);
        if(sinceHr==1)
          var since='about 1 hour ago';
        else
          var since='about '+sinceHr+' hours ago';
        }
        else if(sinceMin>1439&&sinceMin<2880)
            var since='1 day ago';
        else
        {
            var sinceDay=Math.round(sinceMin/1440);
            var since=sinceDay+' days ago';
        }
        return since;
    };

    //link helper functions
    String.prototype.linkify=function(){
      return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&;\?\/.=]+/g,function(m){
        return m.link(m);
      });
    };
    String.prototype.linkuser=function(){
      return this.replace(/[@]+[A-Za-z0-9-_]+/g,function(u){
        return u.link("http://twitter.com/"+u.replace("@",""));
      });
    };
    String.prototype.linktag=function(){
      return this.replace(/[]+[A-Za-z0-9-_]+/,function(t){
        return t;
      });
    };


        // console.log('init twitter feed...');

        //settings
        var $container = $('#twitter-feed'),
            // tweetFilter = '@jQuery4u',  //#hashtag, @user, keyphrase (override here)
            tweetFilter = JQMB.twitter.username,  //@user
            numTweets = 10,
            lang = 'en'; //english

        //request
        var requestUrl = 'http://search.twitter.com/search.json?q='+encodeURIComponent(tweetFilter)+'&result_type=recent&rpp='+numTweets+'&lang='+lang;

        //display loading image
        $container.html('<p><img src="css/images/ajax-loader.gif" /></p>');

        //get the tweets from Twitter API
        var tweetArray = Array();
        $.getJSON(requestUrl+'&callback=?', function(data)
        {
            // console.log(data);

            //catch ajax error
            if (data.error)
            {
                return false;
            }
            else
            {

                var tweetsHTML = ''; //tweets html
                $(data.results).each(function(i,v)
                {
                    var since = calculateSince(Date.parse(this.created_at)), //calculate time since html
                        tweetBy='<a class="tweet-user" tweet_id="'+this.id_str+'" created_at="'+this.created_at+'"" target="_blank" href="http://twitter.com/'+this.from_user+'">@'+this.from_user+'</a> <span class="tweet-time">'+since+'</span>',
                        tweet='<li class="tweet"><div class="tweet-left"><a target="_blank" href="http://twitter.com/'+this.from_user+'"><img width="48" height="48" alt="'+this.from_user+' on Twitter" src="'+this.profile_image_url+'" /></a></div><div class="tweet-right"><p class="text">'+this.text.linkify().linkuser().linktag().replace(/<a/g,'<a target="_blank"')+'<div class="tweet-by">'+tweetBy+'</p></div></li><div style="clear: both;" /></div>';
                    // console.log(tweet);

                    //cache the user img
                    $(tweet).find('img').hide().appendTo($container).one('load', function()
                    {
                       $(this).remove();
                    });

                    //check the tweet is not already in display
                    if (tweetsHTML.indexOf(this.id_str) == -1)
                    {
                        tweetArray[i] = tweet; //store the tweet
                    }
                });

                //output tweets to page
                $container.html('<p>Showing latest tweets.</p>');
                // console.log(tweetArray);
                tweetArray.reverse(); //reverse tweets so new ones appear first
                $.each(tweetArray, function(i,v)
                {
                    $container.append(v);
                });
            }

        });

    // });


})(jQuery,window,document);