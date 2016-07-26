$(document).ready(function() {
	// $("img").click(function() {
	// 	$("#cf2 img.top").toggleClass("transparent");
	// });
	var controller = new ScrollMagic.Controller();

	// var tween = TweenMax.to("#img-2", 12000, {css: {opacity: 0}});

	var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 2000, triggerHook: "onLeave"})
								// .setTween("#img-2", {css: {opacity: 0}})
								.setPin("#section-1", {pushFollowers: true})
								.addIndicators({name: "1 (duration: 12000)"}) // add indicators (requires plugin)
								.addTo(controller);
	// debugger
	// var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 12000})
	// 							.setTween("#img-2", {opacity: 0})
	// 							// .triggerHook("onLeave")
	// 							.addIndicators({name: "1 (duration: 12000)"}) // add indicators (requires plugin)
	// 							.addTo(controller);
	// // var scene = new ScrollMagic.Scene({triggerElement: "#trigger2"})
	// // 							.setPin("#section-2")
	// // 							.triggerHook("onLeave")
	// // 							.addIndicators({name: "2 (duration: 500)"}) // add indicators (requires plugin)
	// // 							.addTo(controller);
	});