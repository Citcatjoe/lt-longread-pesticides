jQuery(document).ready(function($) 
{


	var smilIntro = $('.smil-wrapper');
		smilBg = smilIntro.find('.layer-bg'),
		$smilClouds = smilIntro.find('.layer-clouds'),
		$smilMsc = smilIntro.find('.layer-msc'),
		$smilSmoke1 = smilIntro.find('.layer-smoke1'),
		$smilSmoke2 = smilIntro.find('.layer-smoke2'),
		$smilSpeedboat = smilIntro.find('.layer-speedboat'),
		$smilFishboat = smilIntro.find('.layer-fishboat'),
		tlSmil = new TimelineMax({paused: false});

		tlSmil
			.set([$smilClouds], {yPercent: '-10%'})
			.set([$smilMsc, $smilSmoke1, $smilSmoke2], {xPercent: '-50%'})
			.set([$smilSpeedboat], {xPercent: '40%'})
			.to($smilClouds, 1, {yPercent: '0%', ease: Back.easeOut.config(1.7), y: 0}, '+=1.7') 
			.to([$smilMsc, $smilSmoke1], 15, {xPercent: '0%', ease: Sine.easeOut, y: 0}, '-=2.0')
			.to($smilSmoke2, 18, {xPercent: '5%', ease: Sine.easeOut, y: 0}, '-=15.0')
			.to($smilSmoke2, 1, {autoAlpha: 0, ease: Sine.easeOut, y: 0})
			.to($smilSmoke1, 1, {autoAlpha: 0, ease: Sine.easeOut, y: 0})
			//.to($smilSmoke2, 3, {xPercent: '5%', ease: Sine.easeOut, y: 0})
			.to($smilSpeedboat, 10, {xPercent: '-100', ease:Linear.easeNone}, '-=19.0');


	



});