jQuery(document).ready(function($) 
{
	// INITIALISATION DU SLIDER
	$('.bxslider').bxSlider({
		//mode: 'fade'
	});

	// ZOOM SUR LES IMAGES DISPOSANT DE LA CLASSE ZOOM
	if ($(window).width() > 1200 )
	{
		$(".zoom").click(function() 
		{
			zoom.to({
				element: $(this)[0]
			});
		});
	} 	

	// SCROLL WHEN CLICK ON SCROLL INDICATOR
	$(".scroll-indicator").click(function(){
		$('html, body').animate({
		   scrollTop:$('section:eq(0)').offset().top -80
		}, 1000);
	});

});
