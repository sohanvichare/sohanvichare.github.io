
$(function() {

var f = false;

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



	$(".info").hide()

	$( "#lockIn").click(function() {
		name = $("#nameInput").val()
		object = $("#objectInput").val()


		var starCountRef = firebase.database().ref('game/');
			starCountRef.on('value', function(snapshot) {

				var objects = []
				var names = []
				for (var key in snapshot.val()) {
					names.push(key);
							objects.push(snapshot.val()[key]);
				}
				n = 0;
				return firebase.database().ref('/users').once('value').then(function(snapshot) {
					if (f) {
						n = snapshot.val()[name].number
						$("#data").text("PERSON TO GIVE TO: " + names[n-1] + ", OBJECT TRYING TO GIVE: " + objects[n - 1])
						console.log()
					} else {
						f = true;
					}

				});


			});

		if (name != null && object != null) {

			name = name.toLowerCase().trim()
			object = object.toLowerCase().trim()

			if (name.length > 0 && object.length > 0) {
				$( ".opening" ).addClass( "animated fadeOut" );
				$(".opening").hide()
				$(".info").show("slow")
				$("#nameLi").text("Name: " + name)
				$("#objectLi").text("Object: " + object)


				firebase.database().ref('users/' + name.replace(/\s/g, '')).set({
			    name: name,
			   	object: object,
					number: 0
			  });

			}

		}

	});

	$( "#change").click(function() {
		$(".info").hide()
		$(".opening").removeClass("animated")
		$(".opening").show("slow")



	});

});
