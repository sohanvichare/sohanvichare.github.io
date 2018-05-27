
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


	$(".info").hide()

	$( "#lockIn").click(function() {
		name = $("#nameInput").val()
		object = $("#objectInput").val()


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
