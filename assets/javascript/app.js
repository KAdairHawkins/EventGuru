 var config = {
    apiKey: "AIzaSyAMUimYAFDg4Bw-b3hLlYtPYCZW2QGtNE0",
    authDomain: "event-guru-13a23.firebaseapp.com",
    databaseURL: "https://event-guru-13a23.firebaseio.com",
    projectId: "event-guru-13a23",
    storageBucket: "",
    messagingSenderId: "924347251636"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var name = "";
  var location = "";
  var date = "";

$("#log-in").on("click", function(){
	event.preventDefault();
	name = $("#name").val().trim();
	location = $("#location").val().trim();
	date = $("#date").val().trim();
	
	var userToAdd = {
		username: name,
		location: location,
		date: date	
	}

	database.ref().push(userToAdd);

});


function newEvent (place, time, date) {
	this.place = place;
	this.time = time;
	this.date = date;
}

$("#create-event").on("click", function(){
	var calEvent = new newEvent(x,y,z);
});

