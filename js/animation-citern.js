jQuery(document).ready(function($) 
{
	var stepCitern = 500,
		$citernFull = $('.citern-anim #citern-full'),
		$citernOnly = $('.citern-anim #citern-only'),
		$citernIn1 = $('.citern-anim #citern-in1'),
		$citernIn2 = $('.citern-anim #citern-in2'),
		$citernIn3 = $('.citern-anim #citern-in3'),
		$citernIn4 = $('.citern-anim #citern-in4'),
		$citernIn5 = $('.citern-anim #citern-in5'),
		$citernIn6 = $('.citern-anim #citern-in6'),
		$citernTextIntro = $('.citerntextintro'),
		$citernText1 = $('.citerntext1'),
		$citernText2 = $('.citerntext2'),
		$citernText3 = $('.citerntext3'),
		$citernText4 = $('.citerntext4'),
		$citernText5 = $('.citerntext5'),
		$citernText6 = $('.citerntext6');

	var controllerCitern = new ScrollMagic.Controller();
	TweenMax.defaultOverwrite = false;
	TweenLite.defaultOverwrite = false;

	// $('.citerntext').hide();
	// $citernTextIntro.show();

	// Paragraphs animation
    $('section.citern .citerntext').css('opacity', '0');
    $('section.citern .citerntextintro').css('opacity', '1');

	//$($citernIn1, $citernIn2, $citernIn3, $citernIn4, $citernIn5, $citernIn6).css('opacity', '0.5');

		new ScrollMagic.Scene({
				triggerElement: 'section.citern', 
				triggerHook: 0,
				duration: (stepCitern * 10)
			})
			.setPin('section.citern', {pushFollowers: true})
			.offset( 0 ) //tip top
			.addTo(controllerCitern);

		new ScrollMagic.Scene({
				triggerElement: 'section.citern', 
				triggerHook: 0
			})			
			.setTween($citernFull, 0.2, {autoAlpha: 0, ease: Power0.easeInOut}) 
			.offset( stepCitern ) //tip top
			.addTo(controllerCitern);

				new ScrollMagic.Scene({
						triggerElement: 'section.citern', 
						triggerHook: 0
					})			
					.setTween($citernOnly, 0.2, {autoAlpha: 0, ease: Power0.easeInOut}) 
					.offset( stepCitern * 2 ) //tip top
					.addTo(controllerCitern);

				new ScrollMagic.Scene({
						triggerElement: 'section.citern', 
						triggerHook: 0
					})			
					.setTween([$citernIn2, $citernIn3, $citernIn4, $citernIn5, $citernIn6], 0.2, {autoAlpha: 0.2, ease: Power0.easeInOut}) 
					.offset( stepCitern * 2 ) //tip top
					.addTo(controllerCitern);

				new ScrollMagic.Scene({
						triggerElement: 'section.citern', 
						triggerHook: 0
					})			
					.setTween($citernText1, 0.2, {autoAlpha: 1, ease: Power0.easeInOut}) 
					.offset( stepCitern * 2 ) //tip top
					.addTo(controllerCitern);

		new ScrollMagic.Scene({
				triggerElement: 'section.citern', 
				triggerHook: 0
			})			
			.setTween($citernIn2, 0.2, {autoAlpha: 1, ease: Power0.easeInOut}) 
			.offset( stepCitern * 3 ) //tip top
			.addTo(controllerCitern);

		new ScrollMagic.Scene({
				triggerElement: 'section.citern', 
				triggerHook: 0
			})			
			.setTween([$citernIn1, $citernIn3, $citernIn4, $citernIn5, $citernIn6], 0.2, {autoAlpha: 0.2, ease: Power0.easeInOut}) 
			.offset( stepCitern * 3 ) //tip top
			.addTo(controllerCitern);

		new ScrollMagic.Scene({
				triggerElement: 'section.citern', 
				triggerHook: 0
			})			
			.setTween($citernText2, 0.2, {autoAlpha: 1, ease: Power0.easeInOut}) 
			.offset( stepCitern * 3 ) //tip top
			.addTo(controllerCitern);

				new ScrollMagic.Scene({
						triggerElement: 'section.citern', 
						triggerHook: 0
					})			
					.setTween($citernIn3, 0.2, {autoAlpha: 1, ease: Power0.easeInOut}) 
					.offset( stepCitern * 4 ) //tip top
					.addTo(controllerCitern);

				new ScrollMagic.Scene({
						triggerElement: 'section.citern', 
						triggerHook: 0
					})			
					.setTween([$citernIn1, $citernIn2, $citernIn4, $citernIn5, $citernIn6], 0.2, {autoAlpha: 0.2, ease: Power0.easeInOut}) 
					.offset( stepCitern * 4 ) //tip top
					.addTo(controllerCitern);

				new ScrollMagic.Scene({
						triggerElement: 'section.citern', 
						triggerHook: 0
					})			
					.setTween($citernText3, 0.2, {autoAlpha: 1, ease: Power0.easeInOut}) 
					.offset( stepCitern * 4 ) //tip top
					.addTo(controllerCitern);

		new ScrollMagic.Scene({
				triggerElement: 'section.citern', 
				triggerHook: 0
			})			
			.setTween($citernIn4, 0.2, {autoAlpha: 1, ease: Power0.easeInOut}) 
			.offset( stepCitern * 5 ) //tip top
			.addTo(controllerCitern);

		new ScrollMagic.Scene({
				triggerElement: 'section.citern', 
				triggerHook: 0
			})			
			.setTween([$citernIn1, $citernIn2, $citernIn3, $citernIn5, $citernIn6], 0.2, {autoAlpha: 0.2, ease: Power0.easeInOut}) 
			.offset( stepCitern * 5 ) //tip top
			.addTo(controllerCitern);

		new ScrollMagic.Scene({
				triggerElement: 'section.citern', 
				triggerHook: 0
			})			
			.setTween($citernText4, 0.2, {autoAlpha: 1, ease: Power0.easeInOut}) 
			.offset( stepCitern * 5 ) //tip top
			.addTo(controllerCitern);

				new ScrollMagic.Scene({
				triggerElement: 'section.citern', 
				triggerHook: 0
					})			
					.setTween($citernIn5, 0.2, {autoAlpha: 1, ease: Power0.easeInOut}) 
					.offset( stepCitern * 6 ) //tip top
					.addTo(controllerCitern);

				new ScrollMagic.Scene({
						triggerElement: 'section.citern', 
						triggerHook: 0
					})			
					.setTween([$citernIn1, $citernIn2, $citernIn3, $citernIn4, $citernIn6], 0.2, {autoAlpha: 0.2, ease: Power0.easeInOut}) 
					.offset( stepCitern * 6 ) //tip top
					.addTo(controllerCitern);

				new ScrollMagic.Scene({
						triggerElement: 'section.citern', 
						triggerHook: 0
					})			
					.setTween($citernText5, 0.2, {autoAlpha: 1, ease: Power0.easeInOut}) 
					.offset( stepCitern * 6 ) //tip top
					.addTo(controllerCitern);

		new ScrollMagic.Scene({
				triggerElement: 'section.citern', 
				triggerHook: 0
			})			
			.setTween($citernIn6, 0.2, {autoAlpha: 1, ease: Power0.easeInOut}) 
			.offset( stepCitern * 7 ) //tip top
			.addTo(controllerCitern);

		new ScrollMagic.Scene({
				triggerElement: 'section.citern', 
				triggerHook: 0
			})			
			.setTween([$citernIn1, $citernIn2, $citernIn3, $citernIn5, $citernIn4], 0.2, {autoAlpha: 0.2, ease: Power0.easeInOut}) 
			.offset( stepCitern * 7 ) //tip top
			.addTo(controllerCitern);

		new ScrollMagic.Scene({
				triggerElement: 'section.citern', 
				triggerHook: 0
			})			
			.setTween($citernText6, 0.2, {autoAlpha: 1, ease: Power0.easeInOut}) 
			.offset( stepCitern * 7 ) //tip top
			.addTo(controllerCitern);

		new ScrollMagic.Scene({
				triggerElement: 'section.citern', 
				triggerHook: 0
			})			
			.setTween($citernFull, 0.2, {autoAlpha: 1, ease: Power0.easeInOut}) 
			.offset( stepCitern * 9 ) //tip top
			.addTo(controllerCitern);
});