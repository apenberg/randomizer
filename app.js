$(function(){
  var database = firebase.database();
  var rsvpRef = database.ref('/rsvp-names');

  navigator.geolocation.getCurrentPosition(function(pos) {
      var lat = pos.coords.latitude;
      var long = pos.coords.longitude;
console.log(lat,long)
      // add functionality for adding items to firebase when a btn is clicked
      $('#add-item-btn').on('click', function(e) {
          e.preventDefault();

alert("Thanks for entering! Check out your local foodspo");
          var baseURL="https://developers.zomato.com/api/v2.1/geocode"; 
          var yourGeo= baseURL + "?lat="+ lat + "&lon=" + long; 
var options = {
  "async": true,
  "crossDomain": true,
  "url": yourGeo,
  "method": "GET",
  "headers": { "user-key": "6aceaf19433010725f0c1068d95ca40d" }
}

$.ajax(options).done(function(response) {
  for(var i = 0; i < 9; i++) {
    var photo = response.nearby_restaurants[i].restaurant.featured_image;
    //var newImg = $('<img href='+photo+'>')
    var url = response.nearby_restaurants[i].restaurant.events_url;
  $('#photoSpace'+i).attr('src',photo).appendTo($('#photoSpace'))
  $('.link-to-'+i).attr('href',url).appendTo($('.link-to'))
    //$('#restaurants').append(photo);

    //$('#restaurants').append(url);
                //var photo= response.results[6].photos_url;
  }
  //console.log(response);
  //console.log(photo);
  //console.log(link);
});
//var options = {headers: {"Accept": "application/json","user-key": "6aceaf19433010725f0c1068d95ca40d"}}
              //$.ajax(yourGeo, options,function(response) {
                //var restaurant= response.results[5].name;
                //var link= response.results[5].url;
                // // var addr= response.results[5].address; 
                // // var food= response.results[6].cuisines; 
                //var photo= response.results[6].photos_url;
    //console.log(yourGeo)  
    //console.log(response);
        //     $('#restaurants').html(restaurant + ', ' + addr + ', ' + food);
              //});
                var slackName = $('#slack-name').val();
                var fullName = $('#name').val();

                console.log("Values", slackName, fullName);

                var newItem = rsvpRef.push();
                newItem.set({ name: fullName, description: slackName });
//if(indexOf(slackName)='-1'){
//   alert("Thanks for entering! Check out your local foodspo");
// }
// else (alert("You already RSVPed, Silly!"))
      });//25
   });


  //  load all of the items from firebase on page load and when it changes
    rsvpRef.on('value', function(items){
    $('#rsvp-list').empty();

    items.forEach(function(item){
      var id = item.key;
      var name = item.val().name;
      var description = item.val().description;
      var completedAt = item.val().completedAt;

      var completedText = "";
      if(completedAt !== undefined){
        var parsedDate = new Date(completedAt);
        completedText = parsedDate.toDateString();
      };//53
      });//46
    });//43

});//1
