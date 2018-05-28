jQuery(document).ready(function($) 
{
	var $ship = $('.ship-anim #ship'),
		$lineIn = $('.ship-anim #line-in rect'),
		$dot2 = $('.ship-anim #dot2 circle'),
		$dot3 = $('.ship-anim #dot3 circle'),
		$dot4 = $('.ship-anim #dot4 circle'),
		$dot2Legend = $('.ship-anim #dot2-legend path'),
		$dot3Legend = $('.ship-anim #dot3-legend path'),
		$dot4Legend = $('.ship-anim #dot4-legend path'),
		$bar1 = $('section.animation').find('.bar1'),
		$bar1Val = $('section.animation').find('.bar1 span'),
		$bar2 = $('section.animation').find('.bar2'),
		$bar2Val = $('section.animation').find('.bar2 span'),
		$dotSegmentPx = $( '.ship-anim #line-out rect' ).attr('width') / 4,
		$shipText1 = $('section.animation .shiptext1');
		$shipText2 = $('section.animation .shiptext2');
		$shipText3 = $('section.animation .shiptext3');
		$shipText4 = $('section.animation .shiptext4');
		$step = 140;

		//$dotSegmentPx = ($( window ).height() * 1.5) / 4;



		//alert($dotSegmentPx);

	// init controller
	var controllerShip = new ScrollMagic.Controller();
	var controllerLineIn = new ScrollMagic.Controller();
	//alert('yo');

	// build scene
	new ScrollMagic.Scene({
				triggerElement: 'section.animation', 
				triggerHook: 0,
				duration: 2000
				//duration: duration//good
			})
			//.reverse(false)
			.setPin('section.animation', {pushFollowers: true})
			//.setTween($('.ship-anim #ship'), {xPercent: '405%', ease: Power0.easeInOut}) 
			.offset( 0 ) //tip top
			
			//.addIndicators() 
			.addTo(controllerShip);

	new ScrollMagic.Scene({
				triggerElement: 'section.animation', 
				triggerHook: 0,
				duration: 1500
				//duration: duration//good
			})
			//.reverse(false)
			
			.setTween($ship, {xPercent: '410%', ease: Power0.easeInOut}) 
			.offset( 0 ) //tip top
			
			//.addIndicators() 
			.addTo(controllerShip);

	new ScrollMagic.Scene({
				triggerElement: 'section.animation', 
				triggerHook: 0,
				duration: 1500
				//duration: duration//good
			})
			//.reverse(false)
			
			.setTween($lineIn, {attr:{ width: 5100, x: 668.333 }, ease: Power0.easeInOut}) 
			.offset( 0 ) //tip top
			
			//.addIndicators() 
			.addTo(controllerLineIn);

	new ScrollMagic.Scene({
				triggerElement: 'section.animation', 
				triggerHook: 0
				//duration: '150%'
			})
			//.reverse(false)
			
			.setTween($dot2, 0.2, {fill: '#2AA2D1', ease: Power0.easeInOut}) 
			.offset( 500 ) //tip top
			
			//.addIndicators() 
			.addTo(controllerLineIn);

	new ScrollMagic.Scene({
				triggerElement: 'section.animation', 
				triggerHook: 0
				//duration: '150%'
			})
			//.reverse(false)
			
			.setTween($dot2Legend, 0.2, {fill: '#222222', ease: Power0.easeInOut}) 
			.offset( 500 ) //tip top
			
			//.addIndicators() 
			.addTo(controllerLineIn);

	new ScrollMagic.Scene({
				triggerElement: 'section.animation', 
				triggerHook: 0
				//duration: '150%'
			})
			//.reverse(false)
			
			.setTween($dot3, 0.2, {fill: '#2AA2D1', ease: Power0.easeInOut}) 
			.offset( 1000 ) //tip top
			
			//.addIndicators() 
			.addTo(controllerLineIn);

	new ScrollMagic.Scene({
				triggerElement: 'section.animation', 
				triggerHook: 0
				//duration: '150%'
			})
			//.reverse(false)
			
			.setTween($dot3Legend, 0.2, {fill: '#222222', ease: Power0.easeInOut}) 
			.offset( 1000 ) //tip top
			
			//.addIndicators() 
			.addTo(controllerLineIn);

	new ScrollMagic.Scene({
				triggerElement: 'section.animation', 
				triggerHook: 0
				//duration: '150%'
			})
			//.reverse(false)
			
			.setTween($dot4, 0.2, {fill: '#2AA2D1', ease: Power0.easeInOut}) 
			.offset( 1500 ) //tip top
			
			//.addIndicators() 
			.addTo(controllerLineIn);

	new ScrollMagic.Scene({
				triggerElement: 'section.animation', 
				triggerHook: 0
				//duration: '150%'
			})
			//.reverse(false)
			
			.setTween($dot4Legend, 0.2, {fill: '#222222', ease: Power0.easeInOut}) 
			.offset( 1500 ) //tip top
			
			//.addIndicators() 
			.addTo(controllerLineIn);

	new ScrollMagic.Scene({
				triggerElement: 'section.animation', 
				triggerHook: 0,
				duration: 500
				//duration: duration//good
			})
			//.reverse(false)
			
			.setTween($bar1, {width: 70, ease: Power0.easeInOut}) 
			.offset( 0 ) //tip top
			
			//.addIndicators() 
			.addTo(controllerShip);

	new ScrollMagic.Scene({
				triggerElement: 'section.animation', 
				triggerHook: 0,
				duration: 1000
				//duration: duration//good
			})
			//.reverse(false)
			
			.setTween($bar2, {width: 350, backgroundColor: '#a02f32', ease: Power0.easeInOut}) 
			.offset( $dotSegmentPx/3 ) //tip top
			
			//.addIndicators() 
			.addTo(controllerShip);

	// THIS IS DONE AT EVERY SCROLL
	$(window).scroll(function (event) {
		//$bar1Val.html(Math.round($bar1.width()*3.59));
		$bar1Val.html(2 * $bar1.width() + 't.');
		$bar2Val.html(Math.round(3.6 * $bar2.width()) + 't.');
    });
    //alert($('section.animation .left').css('width'));


    // Paragraphs animation
    $('section.animation .shiptext').css('opacity', '0');
    $('section.animation .shiptext1').css('opacity', '1');

    new ScrollMagic.Scene({
				triggerElement: 'section.animation', 
				triggerHook: 0
				//duration: '150%'
			})
			//.reverse(false)
			
			.setTween($shipText2, 0.2, {autoAlpha: 1, ease: Power0.easeInOut}) 
			.offset( 500 ) //tip top
			
			//.addIndicators() 
			.addTo(controllerLineIn);

	new ScrollMagic.Scene({
				triggerElement: 'section.animation', 
				triggerHook: 0
				//duration: '150%'
			})
			//.reverse(false)
			
			.setTween($shipText3, 0.2, {autoAlpha: 1, ease: Power0.easeInOut}) 
			.offset( 1000 ) //tip top
			
			//.addIndicators() 
			.addTo(controllerLineIn);

	new ScrollMagic.Scene({
				triggerElement: 'section.animation', 
				triggerHook: 0
				//duration: '150%'
			})
			//.reverse(false)
			
			.setTween($shipText4, 0.2, {autoAlpha: 1, ease: Power0.easeInOut}) 
			.offset( 1500 ) //tip top
			
			//.addIndicators() 
			.addTo(controllerLineIn);

	new ScrollMagic.Scene({
				triggerElement: 'section.animation', 
				triggerHook: 0
				//duration: '150%'
			})
			//.reverse(false)
			
			.setTween([$shipText4, $shipText3, $shipText2, $shipText1], 0.2, {autoAlpha: 0, ease: Power0.easeInOut}) 
			.offset( 2000 ) //tip top
			
			//.addIndicators() 
			.addTo(controllerLineIn);

});