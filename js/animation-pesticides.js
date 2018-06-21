jQuery(document).ready(function($) 
{
    mainTl = new TimelineMax(),
    $scene = $('svg.scene-pesticides'),
    $sceneBg = $scene.find('#bg'),
    $scenePlant = $scene.find('#plant'),
    $sceneGuy = $scene.find('#guy'),
    $sceneBubble1 = $scene.find('#bubble1'),
    $sceneBubble2 = $scene.find('#bubble2'),
    $sceneBubble3 = $scene.find('#bubble3'),
    $sceneBubble4 = $scene.find('#bubble4'),
    $sceneBubble5 = $scene.find('#bubble5'),
    $sceneBubble6 = $scene.find('#bubble6'),
    $sceneBubble7 = $scene.find('#bubble7'),
    $sceneBubble8 = $scene.find('#bubble8'),
    $sceneBubble9 = $scene.find('#bubble9'),
    $sceneBubble10 = $scene.find('#bubble10'),
    $sceneFleche1 = $scene.find('#fleche1'),
    $sceneFleche2 = $scene.find('#fleche2'),
    $sceneFleche3 = $scene.find('#fleche3'),
    $sceneFleche4 = $scene.find('#fleche4'),
    $sceneFleche5 = $scene.find('#fleche5'),
    $sceneBullet1 = $scene.find('#bullet1'),
    $sceneBullet2 = $scene.find('#bullet2'),
    $sceneBullet3 = $scene.find('#bullet3'),
    $sceneBullet4 = $scene.find('#bullet4'),
    $sceneBullet5 = $scene.find('#bullet5'),
    $sceneTextBullet = $('.scene-text-bullet'),
    $sceneTextTitle = $('.scene-text-title'),
    $sceneTextContent = $('.scene-text-content'),
    $sceneTextScroller = $('.scene-text-scroller'),
    $sceneProgress = $('.scene-progress');

    clearStage();
    function clearStage(){
      var clearTl = new TimelineMax();

      clearTl
            .set($scene, { autoAlpha: 1, transformOrigin: "center center" })
            .set($sceneBg, { autoAlpha: 0, transformOrigin: "center center" })
            .set($scenePlant, { autoAlpha: 1, y: '-=50px', scale: 2.75, transformOrigin: "center center" })
            .set($sceneGuy, { autoAlpha: 0, x: '-=80px', transformOrigin: "center center" })
            .set($sceneBubble1, { autoAlpha: 1, y: "-=80px", scale: 0, transformOrigin: "center center" })
            .set($sceneBubble2, { autoAlpha: 1, y: "-=80px", scale: 0, transformOrigin: "center center" })
            .set($sceneBubble3, { autoAlpha: 1, y: "-=80px", scale: 0, transformOrigin: "center center" })
            .set($sceneBubble4, { autoAlpha: 1, y: "-=80px", scale: 0, transformOrigin: "center center" })
            .set($sceneBubble5, { autoAlpha: 1, y: "+=120px", scale: 0, transformOrigin: "center center" })
            .set($sceneBubble6, { autoAlpha: 1, y: "+=120px", scale: 0, transformOrigin: "center center" })
            .set($sceneBubble7, { autoAlpha: 1, y: "+=120px", scale: 0, transformOrigin: "center center" })
            .set($sceneBubble8, { autoAlpha: 1, y: "+=120px", scale: 0, transformOrigin: "center center" })
            .set($sceneBubble9, { autoAlpha: 1, y: "+=120px", scale: 0, transformOrigin: "center center" })
            .set($sceneBubble10, { autoAlpha: 1, y: "+=120px", scale: 0, transformOrigin: "center center" })
            .set($sceneFleche1, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneFleche2, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneFleche3, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneFleche4, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneFleche5, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneBullet1, { autoAlpha: 1, scale: 0, transformOrigin: "center center" })
            .set($sceneBullet2, { autoAlpha: 1, scale: 0, transformOrigin: "center center" })
            .set($sceneBullet3, { autoAlpha: 1, scale: 0, transformOrigin: "center center" })
            .set($sceneBullet4, { autoAlpha: 1, scale: 0, transformOrigin: "center center" })
            .set($sceneBullet5, { autoAlpha: 1, scale: 0, transformOrigin: "center center" })
            .set($sceneTextBullet, { autoAlpha: 0, marginLeft: -50, scale: 0, transformOrigin: "center center" })
            .set($sceneProgress, { autoAlpha: 0, transformOrigin: "center center" });
			

		return clearTl;
    }

    // init controller
    var controller = new ScrollMagic.Controller();
    var step = 1000;
    var textTitle0 = "Comment les pesticides se répandent-ils dans la nature?";
    var textContent0 = "Les pesticides sont le plus souvent pulvérisés sous forme liquide sur les plantes et le sol mais peuvent aussi être incorporés directement au sol sous forme de granulés. Lors de l’épandage et après, ces produits gagnent le sol, l’air et les eaux par différents canaux.";
    var textTitle1 = "Dans l’atmosphère";
    var textContent1 = "Une partie des matières actives s’évapore et gagne l’atmosphère. Elles peuvent ensuite regagner le sol lors de précipitations.";
    var textTitle2 = "Dans l'air";
    var textContent2 = "Lors de l’épandage, et en particulier lorsqu’il y a du vent, certaines substances dérivent et parcourent de courtes à moyennes distances en suspension dans l’air.";
    var textTitle3 = "Dans les cours d'eau";
    var textContent3 = "Une proportion significative des substances phytosanitaires ruisselle le long des pentes et aboutit dans les cours d’eau.";
    var textTitle4 = "Dans les sols";
    var textContent4 = "Les pesticides qui atteignent le sol y sont en partie dégradés par les microorganismes, ce qui peut donner lieu à des sous-produits plus ou moins toxiques.";
    var textTitle5 = " Dans les nappes d’eau souterraines";
    var textContent5 = "À plus long terme, les pesticides ou leurs sous-produits sont lessivés à travers le sol et gagnent les nappes d’eau souterraines.";
    
    // build scene
	new ScrollMagic.Scene({
        triggerElement: 'section.scene', 
        triggerHook: 0,
        duration: 17000
    })
        .setPin('section.scene', {pushFollowers: true})
        .offset( 0 ) 
        .addTo(controller);

    // progress control
	new ScrollMagic.Scene({
        triggerElement: "section.scene",
        triggerHook: 0,
        duration: 17000
    })
        //.setTween($sceneProgress, { width: "100%", backgroundColor: "#a5d080", ease: Power0.easeNone })
        .offset(0) //tip top$
        .on("progress", function(e) {
          $sceneProgress.text(Math.ceil((e.progress.toFixed(3)) * 100) + "%");
          //console.log(      Math.ceil((e.progress.toFixed(3))*100) + "%"    )
        })
        .addTo(controller);

  // hack to remove white space under footer
  var whiteSpaceRemoved = false;
	new ScrollMagic.Scene({
        triggerElement: "footer",
        triggerHook: 0.5,
        duration: 100
    })
        .on('enter', function (e) {
          if(whiteSpaceRemoved == false)
          {
            $('footer').nextAll('div').css('display', 'none');
            whiteSpaceRemoved = true;
          }
        })
        //.addIndicators()
        .offset(0) //tip top
        .addTo(controller);

//------------------------------------------------------------------------------------------------------------//
//--PLANT
//------------------------------------------------------------------------------------------------------------//

    new ScrollMagic.Scene({
        triggerElement: "section.scene",
        triggerHook: 0,
        duration: step
    })
        .setTween($scenePlant, { y: "+=50px", scale: 1, ease: Power0.easeNone })
        .offset(step) //tip top
        .addTo(controller);

//------------------------------------------------------------------------------------------------------------//
//--BG IN
//------------------------------------------------------------------------------------------------------------//
    
    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneBg, { autoAlpha: 1, ease: Power0.easeNone })
      .offset(step*2) //tip top
      .addTo(controller);

//------------------------------------------------------------------------------------------------------------//
//--GUY IN
//------------------------------------------------------------------------------------------------------------//

    new ScrollMagic.Scene({
       triggerElement: "section.scene",
       triggerHook: 0,
       duration: step
    })
       .setTween($sceneGuy, { autoAlpha: 1, x: '+=80px', ease: Power0.easeNone })
       .offset(step*3) //tip top
       .addTo(controller);

//------------------------------------------------------------------------------------------------------------//
//--BUBBLES IN
//------------------------------------------------------------------------------------------------------------//

    new ScrollMagic.Scene({
       triggerElement: "section.scene",
       triggerHook: 0,
       duration: step/5
    })
       .setTween($sceneBubble2, { autoAlpha: 1, y: "+=80px", scale: 1, ease: Back.easeOut.config(2) })
       .offset(step*4) //tip top
       .addTo(controller);

    new ScrollMagic.Scene({
       triggerElement: "section.scene",
       triggerHook: 0,
       duration: step/5
    })
       .setTween($sceneBubble4, { autoAlpha: 1, y: "+=80px", scale: 1, ease: Back.easeOut.config(2) })
       .offset(step*4.2) //tip top
       .addTo(controller);

    new ScrollMagic.Scene({
       triggerElement: "section.scene",
       triggerHook: 0,
       duration: step/5
    })
       .setTween($sceneBubble1, { autoAlpha: 1, y: "+=80px", scale: 1, ease: Back.easeOut.config(2) })
       .offset(step*4.4) //tip top
       .addTo(controller);

    new ScrollMagic.Scene({
       triggerElement: "section.scene",
       triggerHook: 0,
       duration: step/5
    })
       .setTween($sceneBubble3, { autoAlpha: 1, y: "+=80px", scale: 1, ease: Back.easeOut.config(2) })
       .offset(step*4.6) //tip top
       .addTo(controller);

    new ScrollMagic.Scene({
       triggerElement: "section.scene",
       triggerHook: 0,
       duration: step/5
    })
       .setTween($sceneBubble5, { autoAlpha: 1, y: "-=120px", scale: 1, ease: Power4.easeOut })
       .offset(step*4.8) //tip top
       .addTo(controller);

    new ScrollMagic.Scene({
       triggerElement: "section.scene",
       triggerHook: 0,
       duration: step/5
    })
       .setTween($sceneBubble6, { autoAlpha: 1, y: "-=120px", scale: 1, ease: Power4.easeOut })
       .offset(step*5) //tip top
       .addTo(controller);

    new ScrollMagic.Scene({
       triggerElement: "section.scene",
       triggerHook: 0,
       duration: step/5
    })
       .setTween($sceneBubble10, { autoAlpha: 1, y: "-=120px", scale: 1, ease: Power4.easeOut })
       .offset(step*5.2) //tip top
       .addTo(controller);

    new ScrollMagic.Scene({
       triggerElement: "section.scene",
       triggerHook: 0,
       duration: step/5
    })
       .setTween($sceneBubble7, { autoAlpha: 1, y: "-=120px", scale: 1, ease: Power4.easeOut })
       .offset(step*5.4) //tip top
       .addTo(controller);

    new ScrollMagic.Scene({
       triggerElement: "section.scene",
       triggerHook: 0,
       duration: step/5
    })
       .setTween($sceneBubble8, { autoAlpha: 1, y: "-=120px", scale: 1, ease: Power4.easeOut })
       .offset(step*5.6) //tip top
       .addTo(controller);

     new ScrollMagic.Scene({
       triggerElement: "section.scene",
       triggerHook: 0,
       duration: step/5
    })
       .setTween($sceneBubble9, { autoAlpha: 1, y: "-=120px", scale: 1, ease: Power4.easeOut })
       .offset(step*5.8) //tip top
       .addTo(controller);
       
//------------------------------------------------------------------------------------------------------------//
//--GUY OUT
//------------------------------------------------------------------------------------------------------------//

    new ScrollMagic.Scene({
       triggerElement: "section.scene",
       triggerHook: 0,
       duration: step
    })
       .setTween($sceneGuy, { autoAlpha: 0, x: '-=80px', ease: Power0.easeNone })
       .offset(step*6) //tip top
       .addTo(controller);

//------------------------------------------------------------------------------------------------------------//
//--FLECHE1 + BULLET1 IN THEN OUT + TEXT1 IN
//------------------------------------------------------------------------------------------------------------//

    new ScrollMagic.Scene({
       triggerElement: "section.scene",
       triggerHook: 0,
       duration: step
    })
       .setTween($sceneFleche1, { autoAlpha: 1, ease: Power0.easeNone })
       .offset(step*7) //tip top
       .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneTextTitle, { autoAlpha: 0, ease: Power0.easeNone })
      .offset(step * 7) //tip top
      .on('start end', function (e) {
          if (e.type == 'end') {
              if (e.target.controller().info('scrollDirection') === 'REVERSE') {
                mainTl.set($sceneTextBullet, { scale: 0 });
                $sceneTextTitle.text(textTitle0);
                $sceneTextContent.text(textContent0);
              }else{
                mainTl.set($sceneTextBullet, { scale: 0.5 });
                $sceneTextTitle.text(textTitle1);
                $sceneTextContent.text(textContent1);
              }
          }
      })
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneTextContent, { autoAlpha: 0, ease: Power0.easeNone })
      .offset(step * 7) //tip top
      //.addIndicators()
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneTextScroller, { autoAlpha: 0, ease: Power0.easeNone })
      .offset(step * 7) //tip top
      .on('enter leave', function(e){
          console.log(e.type);
      })
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneProgress, { autoAlpha: 1, ease: Power0.easeNone })
      .offset(step * 7) //tip top
      .on('enter leave', function (e) {
        console.log(e.type);
      })
      .addTo(controller);

  




    new ScrollMagic.Scene({
       triggerElement: "section.scene",
       triggerHook: 0,
       duration: step
    })
       .setTween($sceneBullet1, { scale: 1, ease: Back.easeOut.config(2) })
       .offset(step*8) //tip top
       .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneTextBullet, { autoAlpha: 1, ease: Power0.easeNone })
      .offset(step * 8) //tip top
      //.addIndicators()
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneTextTitle, { autoAlpha: 1, ease: Power0.easeNone })
      .offset(step * 8) //tip top
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneTextContent, { autoAlpha: 1, ease: Power0.easeNone })
      .offset(step * 8) //tip top
      .addTo(controller);






    new ScrollMagic.Scene({
       triggerElement: "section.scene",
       triggerHook: 0,
       duration: step
    })
       .setTween($sceneFleche1, { autoAlpha: 0, ease: Power0.easeNone })
       .offset(step*9) //tip top
       .addTo(controller);

    
//------------------------------------------------------------------------------------------------------------//
//--FLECHE2 + BULLET2 IN THEN OUT + TEXT2 IN
//------------------------------------------------------------------------------------------------------------//

    new ScrollMagic.Scene({
       triggerElement: "section.scene",
       triggerHook: 0,
       duration: step
    })
       .setTween($sceneFleche2, { autoAlpha: 1, ease: Power0.easeNone })
       .offset(step*9) //tip top
       .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneTextTitle, { autoAlpha: 0, ease: Power0.easeNone })
      .offset(step * 9) //tip top
      .on('start end', function (e) {
        if (e.type == 'end') {
          if (e.target.controller().info('scrollDirection') === 'REVERSE') {
            $sceneTextBullet.text('1');
            $sceneTextTitle.text(textTitle1);
            $sceneTextContent.text(textContent1);
          } else {
            $sceneTextBullet.text('2');
            $sceneTextTitle.text(textTitle2);
            $sceneTextContent.text(textContent2);
          }
        }
      })
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneTextContent, { autoAlpha: 0, ease: Power0.easeNone })
      .offset(step * 9) //tip top
      .addTo(controller);






    new ScrollMagic.Scene({
       triggerElement: "section.scene",
       triggerHook: 0,
       duration: step
    })
       .setTween($sceneBullet2, { scale: 1, ease: Back.easeOut.config(2) })
       .offset(step * 10) //tip top
       .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneTextTitle, { autoAlpha: 1, ease: Power0.easeNone })
      .offset(step * 10) //tip top
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneTextContent, { autoAlpha: 1, ease: Power0.easeNone })
      .offset(step * 10) //tip top
      .addTo(controller);



    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneFleche2, { autoAlpha: 0, ease: Power0.easeNone })
      .offset(step * 11) //tip top
      .addTo(controller);



//------------------------------------------------------------------------------------------------------------//
//--FLECHE3 + BULLET3 IN THEN OUT + TEXT3 IN
//------------------------------------------------------------------------------------------------------------//

    new ScrollMagic.Scene({
       triggerElement: "section.scene",
       triggerHook: 0,
       duration: step
    })
       .setTween($sceneFleche3, { autoAlpha: 1, ease: Power0.easeNone })
       .offset(step * 11) //tip top
       .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneTextTitle, { autoAlpha: 0, ease: Power0.easeNone })
      .offset(step * 11) //tip top
      .on('start end', function (e) {
        if (e.type == 'end') {
          if (e.target.controller().info('scrollDirection') === 'REVERSE') {
            $sceneTextBullet.text('2');
            $sceneTextTitle.text(textTitle2);
            $sceneTextContent.text(textContent2);
          } else {
            $sceneTextBullet.text('3');
            $sceneTextTitle.text(textTitle3);
            $sceneTextContent.text(textContent3);
          }
        }
      })
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneTextContent, { autoAlpha: 0, ease: Power0.easeNone })
      .offset(step * 11) //tip top
      .addTo(controller);






    new ScrollMagic.Scene({
       triggerElement: "section.scene",
       triggerHook: 0,
       duration: step
    })
       .setTween($sceneBullet3, { scale: 1, ease: Back.easeOut.config(2) })
       .offset(step * 12) //tip top
       .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneTextTitle, { autoAlpha: 1, ease: Power0.easeNone })
      .offset(step * 12) //tip top
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneTextContent, { autoAlpha: 1, ease: Power0.easeNone })
      .offset(step * 12) //tip top
      .addTo(controller);




    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneFleche3, { autoAlpha: 0, ease: Power0.easeNone })
      .offset(step * 13) //tip top
      .addTo(controller);





//------------------------------------------------------------------------------------------------------------//
//--FLECHE4 + BULLET4 IN THEN OUT + TEXT4 IN
//------------------------------------------------------------------------------------------------------------//

    new ScrollMagic.Scene({
       triggerElement: "section.scene",
       triggerHook: 0,
       duration: step
    })
       .setTween($sceneFleche4, { autoAlpha: 1, ease: Power0.easeNone })
       .offset(step * 13) //tip top
       .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneTextTitle, { autoAlpha: 0, ease: Power0.easeNone })
      .offset(step * 13) //tip top
      .on('start end', function (e) {
        if (e.type == 'end') {
          if (e.target.controller().info('scrollDirection') === 'REVERSE') {
            $sceneTextBullet.text('3');
            $sceneTextTitle.text(textTitle3);
            $sceneTextContent.text(textContent3);
          } else {
            $sceneTextBullet.text('4');
            $sceneTextTitle.text(textTitle4);
            $sceneTextContent.text(textContent4);
          }
        }
      })
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneTextContent, { autoAlpha: 0, ease: Power0.easeNone })
      .offset(step * 13) //tip top
      .addTo(controller);






    new ScrollMagic.Scene({
       triggerElement: "section.scene",
       triggerHook: 0,
       duration: step
    })
       .setTween($sceneBullet4, { scale: 1, ease: Back.easeOut.config(2) })
       .offset(step * 14) //tip top
       .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneTextTitle, { autoAlpha: 1, ease: Power0.easeNone })
      .offset(step * 14) //tip top
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneTextContent, { autoAlpha: 1, ease: Power0.easeNone })
      .offset(step * 14) //tip top
      .addTo(controller);




    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneFleche4, { autoAlpha: 0, ease: Power0.easeNone })
      .offset(step * 15) //tip top
      .addTo(controller);




//------------------------------------------------------------------------------------------------------------//
//--FLECHE5 + BULLET5 IN THEN OUT + TEXT5 IN
//------------------------------------------------------------------------------------------------------------//

    new ScrollMagic.Scene({
       triggerElement: "section.scene",
       triggerHook: 0,
       duration: step
    })
       .setTween($sceneFleche5, { autoAlpha: 1, ease: Power0.easeNone })
       .offset(step * 15) //tip top
       .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneTextTitle, { autoAlpha: 0, ease: Power0.easeNone })
      .offset(step * 15) //tip top
      .on('start end', function (e) {
        if (e.type == 'end') {
          if (e.target.controller().info('scrollDirection') === 'REVERSE') {
            $sceneTextBullet.text('4');
            $sceneTextTitle.text(textTitle4);
            $sceneTextContent.text(textContent4);
          } else {
            $sceneTextBullet.text('5');
            $sceneTextTitle.text(textTitle5);
            $sceneTextContent.text(textContent5);
          }
        }
      })
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneTextContent, { autoAlpha: 0, ease: Power0.easeNone })
      .offset(step * 15) //tip top
      .addTo(controller);






    new ScrollMagic.Scene({
       triggerElement: "section.scene",
       triggerHook: 0,
       duration: step
    })
       .setTween($sceneBullet5, { scale: 1, ease: Back.easeOut.config(2) })
       .offset(step * 16) //tip top
       .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneTextTitle, { autoAlpha: 1, ease: Power0.easeNone })
      .offset(step * 16) //tip top
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneTextContent, { autoAlpha: 1, ease: Power0.easeNone })
      .offset(step * 16) //tip top
      .addTo(controller);




    new ScrollMagic.Scene({
      triggerElement: "section.scene",
      triggerHook: 0,
      duration: step
    })
      .setTween($sceneFleche5, { autoAlpha: 0, ease: Power0.easeNone })
      .offset(step * 17) //tip top
      .addTo(controller);


});