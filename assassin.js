
$(function() {

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

			}

		}

	});

	$( "#change").click(function() {
		$(".info").hide()
		$(".opening").removeClass("animated")
		$(".opening").show("slow")


	});

});
