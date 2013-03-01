
//TWITTER API-------------------------------------------------------------------------

$(document).ready(function(){
                  $.getJSON("http://search.twitter.com/search.json?q=rihannastay&rpp=8&include_entities=true&result_type=popular&callback=?",
                            function(data){
                            console.log(data);
                            for (i=0, j=data.results.length; i<j; i++){
                            $("#output")
                            .append("<li>" + "<p>" + "<img src='" + data.results[i].profile_image_url + "' /><br />" +
                                    data.results[i].text + ", <em>" + data.results[i].created_at + "</em>" + "</p>" + "</li>" + "</hr>");
                            }
                            });
                  });


// WEATHER API-------------------------------------------------------------------------

$(document).ready(function(){
  $.ajax({
         url : "http://api.wunderground.com/api/e9f12166a760671a/geolookup/conditions/q/TX/San_Antonio.json",
         dataType : "jsonp",
         success : function(parsed_json) {
         var location = parsed_json['location']['city'];
         var temp_f = parsed_json['current_observation']['temp_f'];
         alert("Current forecast for " + location + " is: " + temp_f);
         }
         });
  });