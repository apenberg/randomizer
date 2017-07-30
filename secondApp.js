$(function(){
  var database = firebase.database();
  var rsvpRef = database.ref('/rsvp-names');

  // add functionality for adding items to firebase when a btn is clicked
  $('#add-item-btn').on('click', function(e){
    e.preventDefault();

    //var slackName = $('#slack-name').val();
    //var fullName = $('#name').val();

    //console.log("Values", slackName, fullName);

    //var newItem = rsvpRef.push();
    //newItem.set({ name: fullName, description: slackName });


  //  load all of the items from firebase on page load and when it changes
  rsvpRef.on('value', function(items){
    $('#rsvp-list').empty();

    var allSlacks = [];
    items.forEach(function(item){
      var id = item.key;
      var name = item.val().name;
      var description = item.val().description;
      allSlacks.push(description);
      var completedAt = item.val().completedAt;

      var completedText = "";
      if(completedAt !== undefined){
        var parsedDate = new Date(completedAt);
        completedText = parsedDate.toDateString();
      }

    //console.log(allSlacks.length)

      //$('#rsvp-list').append(allSlacks.length);
      
    });
    //console.log(allSlacks);
  var newGroup = [];
  while(allSlacks.length > 4) {
  for(i=0; i < 4; i++) {
    
    var group = Math.floor(Math.random()*allSlacks.length);
    allSlacks[group];
    newGroup.push(allSlacks[group]);
    allSlacks.splice(group, 1);
    //console.log(allSlacks);
    }
    }
   
  
    // console.log(allSlacks.join(", "));
    // console.log("---")
    // console.log(newGroup.join(", "));
    //$('#rsvp-list').append(newGroup);
  
  //for (i=0;i=newGroup.length; i++){
    //var grouping = newGroup[0];
    //newGroup.shift();
    //var finalGroups;
    //for(finalGroups=1;finalGroups=newGroup.length/4;finalGroups++){

    //console.log(finalGroups+grouping)
  //}}
 
  //
  
  var ericGroups = [];

  while(newGroup.length){

  //console.log("Group " + newGroup.splice(0,4));
  //$('#rsvp-list').append("<br>" + "Group " + newGroup.splice(0,4)+ "<br>");
  ericGroups.push(newGroup.splice(0,4));

};

  //});
if (allSlacks.length>0) {
  //$('#rsvp-list').append("<br>" + "Group " + allSlacks+ "<br>");
  for(var i=0; i<allSlacks.length; i++) {
  ericGroups[i].push(allSlacks[i]);
    
  }
}

for(var i = 0; i < ericGroups.length; i++ ){ 
  var group = ericGroups[i];

  $('#rsvp-list').append("<br>"+ "Group: ")
  for(var m = 0; m < group.length; m++) {
    $('#rsvp-list').append(group[m]);
  }
}

//console.log("<br>" + "Group " + ericGroups.splice(0,4)+ "<br>");
//else ($('#rsvp-list').append("<br>" + "Choose Your Own Group! " + allSlacks+ "<br>"))
  //});
  
  // add click event handler to "mark as completed" links
  //$('#rsvp-list').on('click', 'a.mark-completed', function(event) {
   // var id = $(this).data('item-id');
    //var itemRef = database.ref("/rsvp-names/" + id);

    //var now = new Date();

   // itemRef.update({ completedAt: now.getTime()})
  })
})
})


// var ericGroups = [
//   [ 'robert', 'robert', 'robert', 'amber', 'doug' ],
//   [ 'robert', 'robert', 'robert', 'amber', 'doug' ],
// ]

// for(var i = 0; i < ericGroups.length; i++ ){ 
//   var group = ericGroups[i];

//   $('<h1>Group</h1>').appendTo
//   for(var m = 0; m < group.length; m++) {
//     group[m];

//   }
// }
