$(document).ready(function() {
	// $("img").click(function() {
	// 	$("#cf2 img.top").toggleClass("transparent");
	// });
	var controller = new ScrollMagic.Controller();
	var scene = new ScrollMagic.Scene({triggerElement: "#section1"})
		// trigger animation by adding a css class
		.setClassToggle("#img-2", "fade")
		.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
		.addTo(controller);
	});