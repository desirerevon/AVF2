
//My API was working but I am getting a syntax error for the undefined $
//@nd syntax error is that I cant get the data to show 
//Planning on using instagram as well for my second API


$(function() {
  
  $.getJSON("http://search.twitter.com/search.json?q=rihannas%20stay&rpp=5&include_entities=true&result_type=popular&callback=?",
            function(tweet){
            console.log(tweet);
            alert(tweet.completed_in);
            
            $("#tweetsSearch").html("<p>Data Retreived!</p>");
            
            for (i=0, j=tweet.results.length; i<j; i++){
            
            $("#tweet-output")
            .append("<li>" + "<p>" + "<img src='" + tweet.results[i].profile_image_url + "'/><br />" + tweet.results[i].text + " ,<em>" +
                    tweet.results[i].created_at + "</em>" + "</p>" + "</li>");
            }
            
            });
  
  });





