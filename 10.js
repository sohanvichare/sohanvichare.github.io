
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
			var counts = {};
			objects.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });

			for (var key in counts) {
				if (counts[key] > 1) {
					alert("Infinte loop because two of same object")
				}
			}
			console.log("here")


		 new_obj = objects.reverse()

		 if (new_obj.length % 2 != 0) {
			 var t = new_obj[Math.floor(new_obj.length/2)]
			 new_obj[Math.floor(new_obj.length/2)] = new_obj[0]
			 new_obj[0] = t
		 }

		 var foo = [];

		for (var i = 1; i <= names.length; i++) {
			  foo.push(i);
		}
		foo = foo.reverse()
		if (foo.length % 2 != 0) {
			var t = foo[Math.floor(new_obj.length/2)]
			foo[Math.floor(new_obj.length/2)] = new_obj[0]
			foo[0] = t
		}

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
		console.log("here")

		firebase.database().ref('game/').set(r);

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
