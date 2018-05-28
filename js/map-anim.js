jQuery(document).ready(function($) 
{

	var $segmentAnim1 = $('.fixed-map-wrapper svg #path-phoenix-nogales path');
	var $dotAnim1 = $('.fixed-map-wrapper svg #nogales-dot #step1-dot_2_ circle');
	

	var controllerMapAnim = new ScrollMagic.Controller();
	TweenMax.defaultOverwrite = false;
	TweenLite.defaultOverwrite = false;

	

	new ScrollMagic.Scene({
			triggerElement: 'h4', 
			triggerHook: 0.5
			//duration: (stepCitern * 10)
		})
		//.setPin('section.citern', {pushFollowers: true})
		.setClassToggle(".fixed-map-wrapper svg #path-phoenix-nogales path", "is-drawn")
		//.setTween(tween)
		//.setClassToggle(".fixed-map-wrapper svg #sandiego-dot path", "is-hidden")
		.offset( 0 ) //tip top
		.addIndicators() // add indicators (requires plugin)
		.addTo(controllerMapAnim);

	new ScrollMagic.Scene({
			triggerElement: 'h4', 
			triggerHook: 0.5
			//duration: (stepCitern * 10)
		})
		//.setPin('section.citern', {pushFollowers: true})
		.setTween($dotAnim1, 0.5, {scale: 1.3, transformOrigin:'50% 50%', delay: 1.3,  ease: Bounce.easeOut}) 
		//.setClassToggle(".fixed-map-wrapper svg #nogales-dot #step1-dot_2_ circle", "is-blue")
		//.setTween(tween)
		//.setClassToggle(".fixed-map-wrapper svg #sandiego-dot path", "is-hidden")
		.offset( 0 ) //tip top
		.addIndicators() // add indicators (requires plugin)
		.addTo(controllerMapAnim);

// ---------------------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------------------//

	var $segmentAnim2 = $('.fixed-map-wrapper svg #path-nogales-tombstone-elpaso path');
	var $dotAnim2 = $('.fixed-map-wrapper svg #tombstone-dot #step1-dot_3_ circle');
	var $dotAnim2b = $('.fixed-map-wrapper svg #elpaso-dot #step1-dot circle');

	// $segmentAnim2.hide();
	// $dotAnim2.hide();
	// $dotAnim2b.hide();

	new ScrollMagic.Scene({
			triggerElement: 'h3#anim-step2', 
			triggerHook: 0.5
		})
		//.setTween(".fixed-map-wrapper svg #path-phoenix-nogales path", {autoAlpha: 0, yPercent: '30%', ease: Power0.easeInOut})
		.setClassToggle(".fixed-map-wrapper svg #path-phoenix-nogales path", "st12") 
		.offset( 0 ) //tip top
		.addIndicators() // add indicators (requires plugin)
		.addTo(controllerMapAnim);

	new ScrollMagic.Scene({
			triggerElement: 'h3#anim-step2', 
			triggerHook: 0.5
		})
		.setClassToggle(".fixed-map-wrapper svg #path-nogales-tombstone-elpaso path", "is-drawn2")
		.offset( 0 ) //tip top
		.addIndicators() // add indicators (requires plugin)
		.addTo(controllerMapAnim);

	new ScrollMagic.Scene({
			triggerElement: 'h3#anim-step2', 
			triggerHook: 0.5
			//duration: (stepCitern * 10)
		})
		//.setPin('section.citern', {pushFollowers: true})
		.setTween($dotAnim2b, 0.5, {scale: 1.3, transformOrigin:'50% 50%', delay: 1.3,  ease: Bounce.easeOut}) 
		//.setTween(tween)
		//.setClassToggle(".fixed-map-wrapper svg #sandiego-dot path", "is-hidden")
		.offset( 0 ) //tip top
		.addIndicators() // add indicators (requires plugin)
		.addTo(controllerMapAnim);

// ---------------------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------------------//

	var $segmentAnim3 = $('.fixed-map-wrapper svg #path-elpaso-tucson-sells path');
	var $dotAnim3 = $('.fixed-map-wrapper svg #tucson-dot #step1-dot_4_ circle');
	var $dotAnim3b = $('.fixed-map-wrapper svg #sells-dot #step1-dot_5_ circle');

	new ScrollMagic.Scene({
			triggerElement: 'h3#anim-step3', 
			triggerHook: 0.5
		})
		//.setTween(".fixed-map-wrapper svg #path-phoenix-nogales path", {autoAlpha: 0, yPercent: '30%', ease: Power0.easeInOut})
		.setClassToggle(".fixed-map-wrapper svg #path-nogales-tombstone-elpaso path", "st12") 
		.offset( 0 ) //tip top
		.addIndicators() // add indicators (requires plugin)
		.addTo(controllerMapAnim);

	new ScrollMagic.Scene({
			triggerElement: 'h3#anim-step3', 
			triggerHook: 0.5
		})
		.setClassToggle(".fixed-map-wrapper svg #path-elpaso-tucson-sells path", "is-drawn3")
		.offset( 0 ) //tip top
		.addIndicators() // add indicators (requires plugin)
		.addTo(controllerMapAnim);

	new ScrollMagic.Scene({
			triggerElement: 'h3#anim-step3', 
			triggerHook: 0.5
			//duration: (stepCitern * 10)
		})
		//.setPin('section.citern', {pushFollowers: true})
		.setTween($dotAnim3b, 0.5, {scale: 1.3, transformOrigin:'50% 50%', delay: 1.3,  ease: Bounce.easeOut}) 
		//.setTween(tween)
		//.setClassToggle(".fixed-map-wrapper svg #sandiego-dot path", "is-hidden")
		.offset( 0 ) //tip top
		.addIndicators() // add indicators (requires plugin)
		.addTo(controllerMapAnim);

// ---------------------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------------------//

	var $segmentAnim4 = $('.fixed-map-wrapper svg #path-sells-yuma path');
	var $dotAnim4 = $('.fixed-map-wrapper svg #ajo-dot #step1-dot_1_ circle');
	var $dotAnim4b = $('.fixed-map-wrapper svg #yuma-dot #step1-dot_7_ ellipse');

	new ScrollMagic.Scene({
			triggerElement: 'h3#anim-step4', 
			triggerHook: 0.5
		})
		//.setTween(".fixed-map-wrapper svg #path-phoenix-nogales path", {autoAlpha: 0, yPercent: '30%', ease: Power0.easeInOut})
		.setClassToggle(".fixed-map-wrapper svg #path-elpaso-tucson-sells path", "st12") 
		.offset( 0 ) //tip top
		.addIndicators() // add indicators (requires plugin)
		.addTo(controllerMapAnim);

	new ScrollMagic.Scene({
			triggerElement: 'h3#anim-step4', 
			triggerHook: 0.5
		})
		.setClassToggle(".fixed-map-wrapper svg #path-sells-yuma path", "is-drawn4")
		.offset( 0 ) //tip top
		.addIndicators() // add indicators (requires plugin)
		.addTo(controllerMapAnim);

	new ScrollMagic.Scene({
			triggerElement: 'h3#anim-step4', 
			triggerHook: 0.5
			//duration: (stepCitern * 10)
		})
		//.setPin('section.citern', {pushFollowers: true})
		.setTween($dotAnim4b, 0.5, {scale: 1.3, transformOrigin:'50% 50%', delay: 1.3,  ease: Bounce.easeOut}) 
		//.setTween(tween)
		//.setClassToggle(".fixed-map-wrapper svg #sandiego-dot path", "is-hidden")
		.offset( 0 ) //tip top
		.addIndicators() // add indicators (requires plugin)
		.addTo(controllerMapAnim);

// ---------------------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------------------//

	var $segmentAnim5 = $('.fixed-map-wrapper svg #path-yuma-sandiego path');
	var $dotAnim5 = $('.fixed-map-wrapper svg #sandiego-dot #step1-dot_8_ circle');

	new ScrollMagic.Scene({
			triggerElement: 'h3#anim-step5', 
			triggerHook: 0.5
		})
		//.setTween(".fixed-map-wrapper svg #path-phoenix-nogales path", {autoAlpha: 0, yPercent: '30%', ease: Power0.easeInOut})
		.setClassToggle(".fixed-map-wrapper svg #path-sells-yuma path", "st12") 
		.offset( 0 ) //tip top
		.addIndicators() // add indicators (requires plugin)
		.addTo(controllerMapAnim);

	new ScrollMagic.Scene({
			triggerElement: 'h3#anim-step5', 
			triggerHook: 0.5
		})
		.setClassToggle(".fixed-map-wrapper svg #path-yuma-sandiego path", "is-drawn5")
		.offset( 0 ) //tip top
		.addIndicators() // add indicators (requires plugin)
		.addTo(controllerMapAnim);

	new ScrollMagic.Scene({
			triggerElement: 'h3#anim-step5', 
			triggerHook: 0.5
			//duration: (stepCitern * 10)
		})
		//.setPin('section.citern', {pushFollowers: true})
		.setTween($dotAnim5, 0.5, {scale: 1.3, transformOrigin:'50% 50%', delay: 1.3,  ease: Bounce.easeOut}) 
		//.setTween(tween)
		//.setClassToggle(".fixed-map-wrapper svg #sandiego-dot path", "is-hidden")
		.offset( 0 ) //tip top
		.addIndicators() // add indicators (requires plugin)
		.addTo(controllerMapAnim);

});