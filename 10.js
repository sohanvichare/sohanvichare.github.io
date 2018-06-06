
$(function() {
	name = ""

	var config = {
		apiKey: "AIzaSyB7OmimUnmFeBmbqBfep19INkSUFOhur60",
		authDomain: "assassin-2109b.firebaseapp.com",
		databaseURL: "https://assassin-2109b.firebaseio.com",
		projectId: "assassin-2109b",
		storageBucket: "assassin-2109b.appspot.com",
		messagingSenderId: "525676260292"
	};
	firebase.initializeApp(config);

	var database = firebase.database();


	$( "#start").click(function() {
		console.log("here")
		return firebase.database().ref('/users').once('value').then(function(snapshot) {
			var names = new Array();
			var objects = new Array();
			var new_obj = [];

			for (var key in snapshot.val()) {
			    names.push(key);
			    objects.push(snapshot.val()[key].object);
			}
			
			console.log("here")


		 new_obj = shuffle(objects)

	var foo = [];

		for (var i = 1; i <= names.length; i++) {
			  foo.push(i);
		}
		foo = shuffle(foo)

		for (var i = 0; i < names.length; i++) {
				var s = '/users/' + names[i].toString() + '/number'
				var updates = {};
				updates[s] = foo[i];
			 firebase.database().ref().update( updates)
		}


		

		 var r = {},
		    i,
		    keys = names,
		    values = new_obj;

		for (i = 0; i < keys.length; i++) {
		    r[keys[i]] = values[i];
		}


		firebase.database().ref('game/').set(r);
console.log("here")

		});


	});

	function remove(array, element) {
	    const index = array.indexOf(element);

	    if (index !== -1) {
	        array.splice(index, 1);
	    }
	}

	function shuffle(array) {
		  var currentIndex = array.length, temporaryValue, randomIndex;

		  // While there remain elements to shuffle...
		  while (0 !== currentIndex) {

		    // Pick a remaining element...
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;

		    // And swap it with the current element.
		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;
		  }

		  return array;
	}


});
