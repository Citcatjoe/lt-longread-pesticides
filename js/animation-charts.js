jQuery(document).ready(function($) 
{
    chart1Tl = new TimelineMax({ paused: true }),
    $chart1 = $('svg.chart1'),
    $chart1Champis = $chart1.find('#fongicide_x5F_leg'),
    $chart1Herbes = $chart1.find('#herbicide_x5F_leg'),
    $chart1Insectes = $chart1.find('#insecticide_x5F_leg'),
    $chart1Slurps = $chart1.find('#molluscicide_x5F_leg'),
    $chart1Plantes = $chart1.find('#regulateur_x5F_leg'),
    $chart1Rats = $chart1.find('#autre_x5F_leg');
    
    clearChart1();

    function clearChart1() {
      var clearChart1Tl = new TimelineMax();

      clearChart1Tl
        .set($chart1Champis, { autoAlpha: 0, transformOrigin: "center center" })
        .set($chart1Herbes, { autoAlpha: 0, transformOrigin: "center center" })
        .set($chart1Insectes, { autoAlpha: 0, transformOrigin: "center center" })
        .set($chart1Slurps, { autoAlpha: 0, transformOrigin: "center center" })
        .set($chart1Plantes, { autoAlpha: 0, transformOrigin: "center center" })
        .set($chart1Rats, { autoAlpha: 0, transformOrigin: "center center" });
        
      return clearChart1Tl;
    }

  // init controller
  var chartController = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: ".chart1",
    triggerHook: 0.5,
    duration: 1
  })
    .offset(0) //tip top
    .on('enter', function (e) {
      //alert('coucou');
      chart1Tl.play();
    })
    //.addIndicators()
    .addTo(chartController);

  chart1Tl
    .to($chart1Champis, 0.7, { autoAlpha: 1, ease: Power4.easeOut })
    .to($chart1Herbes, 0.7, { autoAlpha: 1, ease: Power4.easeOut })
    .to($chart1Insectes, 0.7, { autoAlpha: 1, ease: Power4.easeOut })
    .to($chart1Slurps, 0.7, { autoAlpha: 1, ease: Power4.easeOut })
    .to($chart1Plantes, 0.7, { autoAlpha: 1, ease: Power4.easeOut })
    .to($chart1Rats, 0.7, { autoAlpha: 1, ease: Power4.easeOut });

  //-----------------------------------------------------------------------------
   //-----------------------------------------------------------------------------
    //-----------------------------------------------------------------------------

    chart3Tl = new TimelineMax({ paused: true }),
    $chart3 = $('svg.chart3'),
    $chart3Pyramide1 = $chart3.find('#folpet_x5F_pyramide'),
    $chart3Chiffre1 = $chart3.find('#folpet_x5F_chiffre'),
    $chart3Leg1 = $chart3.find('#folpet_x5F_leg'),
    $chart3Pyramide2 = $chart3.find('#glyphosate_x5F_pyramide'),
    $chart3Chiffre2 = $chart3.find('#glyphosate_x5F_chiffre'),
    $chart3Leg2 = $chart3.find('#glyphosate_x5F_leg')
    $chart3Pyramide3 = $chart3.find('#paraffine_x5F_pyramide'),
    $chart3Chiffre3 = $chart3.find('#paraffine_x5F_chiffre'),
    $chart3Leg3 = $chart3.find('#paraffine_x5F_leg'),
    $chart3Pyramide4 = $chart3.find('#soufre_x5F_pyramide'),
    $chart3Chiffre4 = $chart3.find('#soufre_x5F_chiffre'),
    $chart3Leg4 = $chart3.find('#soufre_x5F_leg');



    

  clearChart3();

  function clearChart3() {
    var clearChart3Tl = new TimelineMax();

    clearChart3Tl
      .set($chart3Pyramide1, { autoAlpha: 0.5, scale: 0, transformOrigin: "center bottom" })
      .set($chart3Chiffre1, { autoAlpha: 0, transformOrigin: "center bottom" })
      .set($chart3Leg1, { autoAlpha: 0, transformOrigin: "center bottom" })
      .set($chart3Pyramide2, { autoAlpha: 0.5, scale: 0, transformOrigin: "center bottom" })
      .set($chart3Chiffre2, { autoAlpha: 0, transformOrigin: "center bottom" })
      .set($chart3Leg2, { autoAlpha: 0, transformOrigin: "center bottom" })
      .set($chart3Pyramide3, { autoAlpha: 0.5, scale: 0, transformOrigin: "center bottom" })
      .set($chart3Chiffre3, { autoAlpha: 0, transformOrigin: "center bottom" })
      .set($chart3Leg3, { autoAlpha: 0, transformOrigin: "center bottom" })
      .set($chart3Pyramide4, { autoAlpha: 0.5, scale: 0, transformOrigin: "center bottom" })
      .set($chart3Chiffre4, { autoAlpha: 0, transformOrigin: "center bottom" })
      .set($chart3Leg4, { autoAlpha: 0, transformOrigin: "center bottom" });
      

    return clearChart3Tl;
  }

  // init controller
  //var chartController = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: ".chart3",
    triggerHook: 0.5,
    duration: 1
  })
    .offset(0) 
    .on('enter', function (e) {
      chart3Tl.play();
    })
    //.addIndicators()
    .addTo(chartController);

  chart3Tl
    .to([$chart3Pyramide1, $chart3Pyramide2, $chart3Pyramide3, $chart3Pyramide4], 2, { autoAlpha: 1, scale: 1, ease: Power4.easeOut })
    .to([$chart3Chiffre1, $chart3Chiffre2, $chart3Chiffre3, $chart3Chiffre4], 0.7, { autoAlpha: 1, ease: Power4.easeOut })
    .to([$chart3Leg1, $chart3Leg2, $chart3Leg3, $chart3Leg4], 0.7, { autoAlpha: 1, ease: Power4.easeOut });

  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------

    chart4Tl = new TimelineMax({ paused: true }),
    $chart4 = $('svg.chart4'),
    $chart4Picto1 = $chart4.find('#betterave_x5F_picto'),
    $chart4Baril1 = $chart4.find('#betterave_x5F_baril'),
    $chart4Leg1 = $chart4.find('#betterave_x5F_leg'),
    $chart4Ombre1 = $chart4.find('#betterave_x5F_ombre')
    
    $chart4Picto2 = $chart4.find('#cerise_x5F_picto'),
    $chart4Baril2 = $chart4.find('#cerise_x5F_baril'),
    $chart4Leg2 = $chart4.find('#cerise_x5F_leg'),
    $chart4Ombre2 = $chart4.find('#cerise_x5F_ombre')
    
    $chart4Picto3 = $chart4.find('#patate_x5F_picto'),
    $chart4Baril3 = $chart4.find('#patate_x5F_baril'),
    $chart4Leg3 = $chart4.find('#patate_x5F_leg'),
    $chart4Ombre3 = $chart4.find('#patate_x5F_ombre')
    
    $chart4Picto4 = $chart4.find('#raisin_x5F_picto'),
    $chart4Baril4 = $chart4.find('#raisin_x5F_baril'),
    $chart4Leg4 = $chart4.find('#raisin_x5F_leg'),
    $chart4Ombre4 = $chart4.find('#raisin_x5F_ombre')
    
    $chart4Picto5 = $chart4.find('#pomme_x5F_picto'),
    $chart4Baril5 = $chart4.find('#pomme_x5F_baril'),
    $chart4Leg5 = $chart4.find('#pomme_x5F_leg'),
    $chart4Ombre5 = $chart4.find('#pomme_x5F_ombre');
   


  


  clearChart4();

  function clearChart4() {
    var clearChart4Tl = new TimelineMax();

    clearChart4Tl
      .set($chart4Picto1, { autoAlpha: 1, y: "+=57px", transformOrigin: "center center" })
      .set($chart4Baril1, { autoAlpha: 0, transformOrigin: "center center" })
      .set($chart4Leg1, { autoAlpha: 0, transformOrigin: "center center" })
      .set($chart4Ombre1, { autoAlpha: 0.75, scale: 0.75, transformOrigin: "center center" })
      
      .set($chart4Picto2, { autoAlpha: 1, y: "+=62px", transformOrigin: "center center" })
      .set($chart4Baril2, { autoAlpha: 0, transformOrigin: "center center" })
      .set($chart4Leg2, { autoAlpha: 0, transformOrigin: "center center" })
      .set($chart4Ombre2, { autoAlpha: 0.75, scale: 1, transformOrigin: "center center" })
      
      .set($chart4Picto3, { autoAlpha: 1, y: "+=85px", transformOrigin: "center center" })
      .set($chart4Baril3, { autoAlpha: 0, transformOrigin: "center center" })
      .set($chart4Leg3, { autoAlpha: 0, transformOrigin: "center center" })
      .set($chart4Ombre3, { autoAlpha: 0.75, scale: 1, transformOrigin: "center center" })
      
      .set($chart4Picto4, { autoAlpha: 1, y: "+=115px", transformOrigin: "center center" })
      .set($chart4Baril4, { autoAlpha: 0, transformOrigin: "center center" })
      .set($chart4Leg4, { autoAlpha: 0, transformOrigin: "center center" })
      .set($chart4Ombre4, { autoAlpha: 0.75, scale: 1.2, transformOrigin: "center center" })
      
      .set($chart4Picto5, { autoAlpha: 1, y: "+=135px", transformOrigin: "center center" })
      .set($chart4Baril5, { autoAlpha: 0, transformOrigin: "center center" })
      .set($chart4Leg5, { autoAlpha: 0, transformOrigin: "center center" })
      .set($chart4Ombre5, { autoAlpha: 0.75, scale: 1, transformOrigin: "center center" });
     


    return clearChart4Tl;
  }

  // init controller
  //var chartController = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: ".chart4",
    triggerHook: 0.5,
    duration: 1
  }) 
    .offset(0)
    .on('enter', function (e) {
      chart4Tl.play();
    })
    .addIndicators()
    .addTo(chartController);

  chart4Tl
    .to($chart4Picto1, 1.2, { y: "-=55px", ease: Back.easeOut.config(2) })
    .to($chart4Ombre1, 1.2, { autoAlpha: 0, scale: 0, ease: Power4.easeOut }, "-=1.2")
    .to($chart4Baril1, 0.7, { autoAlpha: 1, ease: Power4.easeOut }, "-=0.2")
    .to($chart4Leg1, 0.7, { autoAlpha: 1, ease: Power4.easeOut })
    
    .to($chart4Picto2, 1.2, { y: "-=62px", ease: Back.easeOut.config(3) })
    .to($chart4Ombre2, 1.2, { autoAlpha: 0, scale: 0, ease: Power4.easeOut }, "-=1.2")
    .to($chart4Baril2, 0.7, { autoAlpha: 1, ease: Power4.easeOut }, "-=0.2")
    .to($chart4Leg2, 0.7, { autoAlpha: 1, ease: Power4.easeOut })
    
    .to($chart4Picto3, 1.2, { y: "-=85px", ease: Back.easeOut.config(4) })
    .to($chart4Ombre3, 1.2, { autoAlpha: 0, scale: 0, ease: Power4.easeOut }, "-=1.2")
    .to($chart4Baril3, 0.7, { autoAlpha: 1, ease: Power4.easeOut }, "-=0.2")
    .to($chart4Leg3, 0.7, { autoAlpha: 1, ease: Power4.easeOut })
    
    .to($chart4Picto4, 1.2, { y: "-=115px", ease: Back.easeOut.config(5) })
    .to($chart4Ombre4, 1.2, { autoAlpha: 0, scale: 0, ease: Power4.easeOut }, "-=1.2")
    .to($chart4Baril4, 0.7, { autoAlpha: 1, ease: Power4.easeOut }, "-=0.2")
    .to($chart4Leg4, 0.7, { autoAlpha: 1, ease: Power4.easeOut })
    
    .to($chart4Picto5, 1.2, { y: "-=135px", ease: Back.easeOut.config(6) })
    .to($chart4Ombre5, 1.2, { autoAlpha: 0, scale: 0, ease: Power4.easeOut }, "-=1.2")
    .to($chart4Baril5, 0.7, { autoAlpha: 1, ease: Power4.easeOut }, "-=0.2")
    .to($chart4Leg5, 0.7, { autoAlpha: 1, ease: Power4.easeOut });
    

    

});