
var creative = {};

var fadeInQuoteTime = .8;
var fadeOutQuoteTime = .8;
var tweenTypeIn = Sine.easeIn;
var tweenTypeOut = Sine.easeOut;

/**
 * Window onload handler.
 */
function preInit() {
  setupDom();

  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      init
    );
  }
  
  WebFont.load({
    google: {
      families: ['Roboto:400'],
      text: 'abcdedfghijklmopqrstuvwxyz!'
    }, loading: function () {
      console.log('loading')
    }, active: function () {
      console.log('active')
    }, inactive: function () {
      console.log('inactive')
    }, fontloading: function (familyName, fvd) {
      console.log(familyName, 'font loading')
    }, fontactive: function (familyName, fvd) {
      console.log(familyName, 'font active')
    }, fontinactive: function (familyName, fvd) {
      console.log(familyName, 'font inactive')
    }
  })

}

/**
 * Initializes the ad components
 */
function setupDom() {
  creative.dom = {};
  creative.dom.mainContainer = document.getElementById('main-container');
  creative.dom.exit = document.getElementById('exit');
  creative.dom.iphone = document.getElementById('iphone');
  creative.dom.photoStory = document.getElementById('photo-story');
  creative.dom.fanfold = document.getElementById('fanfold');
  creative.dom.fanfoldPages = document.getElementById('fanfold-pages');
  
  creative.dom.texture0 = document.getElementById('texture-bg-img-0');
  creative.dom.greyOverlay0 = document.getElementById("grey-overlay");
  creative.dom.quotes0 = document.getElementById("quotes");
  creative.dom.endQuote0 = document.getElementById("end-quote");
  creative.dom.endImg0 = document.getElementById("end-img-0");

  creative.dom.imageFly0 = document.getElementById("photo-story-img-4");
  creative.dom.imageFly1 = document.getElementById("photo-story-img-5");
  creative.dom.imageFly2 = document.getElementById("photo-story-img-6");
  creative.dom.imageFly3 = document.getElementById("photo-story-img-7");

  creative.dom.dropImg0 = document.getElementById("fanfold-drop-img-0");
  creative.dom.dropImg1 = document.getElementById("fanfold-drop-img-1");
  creative.dom.dropImg2 = document.getElementById("fanfold-drop-img-2");
  creative.dom.dropImg3 = document.getElementById("fanfold-drop-img-3");

  creative.dom.photoStoryQuote0 = document.getElementById('photo-story-quote-0');
}

/**
 * Ad initialisation.
 */
function init() {

  addListeners();

  // Polite loading
  if (Enabler.isPageLoaded()) {
    show();
  }
  else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, show);
  }
}

/**
 * Adds appropriate listeners at initialization time
 */
function addListeners() {
  creative.dom.exit.addEventListener('click', exitClickHandler);
}

/**
 *  Shows the ad.
 */
function show() {
  creative.dom.exit.style.display = "block";
  creative.dom.iphone.style.visibility  = 'visible';
  creative.dom.texture0.style.visibility  = 'visible';
  creative.dom.photoStory.style.visibility  = 'visible';
  creative.dom.greyOverlay0.style.visibility  = 'visible';
  creative.dom.quotes0.style.visibility  = 'visible';
  creative.dom.endImg0.style.visibility  = 'visible';
  
  startAnimation();
}
//--------------- animations ------------------------

function startAnimation(){
  // beautiful story
  TweenLite.to( creative.dom.quotes0, fadeInQuoteTime, { opacity:1.00, ease:tweenTypeIn});
  TweenLite.delayedCall(2.4,  showPhotoStrip);
}    


function showPhotoStrip()
{
  TweenLite.to( creative.dom.quotes0, fadeOutQuoteTime, { opacity:.0, ease:tweenTypeOut, onComplete:function(){ 
    TweenLite.to( creative.dom.greyOverlay0, fadeOutQuoteTime, { opacity:.0, ease:tweenTypeOut });
      TweenLite.delayedCall( 1, flyImages );
    } 
  });
}


function flyImages()
{
  var ease = Circ.easeIn;
  var scaleX = 2;
  var scaleY = 2;

  TweenLite.to( creative.dom.imageFly0, 1.2, {bezier:[ {x:150, y:-130}, {x:550, y:0}], delay: 0, scaleX: scaleX, scaleY:scaleY, orientToBezier:false, ease:ease });
  TweenLite.to( creative.dom.imageFly1, 1.1, {bezier:[ {x:175, y:-120}, {x:500, y:0}], delay: .3, scaleX: scaleX, scaleY:scaleY, orientToBezier:false, ease:ease });
  TweenLite.to( creative.dom.imageFly2, 1, {bezier:[ {x:200, y:-110}, {x:480, y:0}], delay: .6, scaleX: scaleX, scaleY:scaleY, orientToBezier:false, ease:ease });
  TweenLite.to( creative.dom.imageFly3, 1, {bezier:[ {x:250, y:-100}, {x:480, y:0}], delay: .9, scaleX: scaleX, scaleY:scaleY, orientToBezier:false, ease:ease, onStart:function(){
        //iphone.photoStory.photoShine3.visible = false;
    }, onComplete:function(){ 
    
      hideFlyImages();
    }
  });

  TweenLite.to( creative.dom.photoStoryQuote0, .2, { opacity:1,  delay:.3, ease:Linear.ease });
  TweenLite.delayedCall( 1, showfanfold );
}

function hideFlyImages()
{
  creative.dom.imageFly0.style.visibility = 'hidden'; 
  creative.dom.imageFly1.style.visibility = 'hidden';
  creative.dom.imageFly2.style.visibility = 'hidden';
  creative.dom.imageFly3.style.visibility = 'hidden';
}

function showfanfold()
{
  var time = 1.4;
  var ease = Power1.easeIn;
  
  TweenLite.to( creative.dom.photoStory, time, { x:-278, ease:ease, onComplete:function(){ 
      creative.dom.photoStory.style.visibility  = 'hidden';
    }
  });
  TweenLite.to( creative.dom.fanfold, time,{ x:-278, ease:ease, onComplete:function(){
      showDragAndDrop();
      TweenLite.to( creative.dom.fanfoldPages, 2.5, { x:-385, ease:Power1.easeOut });
    }
  });
}

function showDragAndDrop()
{
  var ease = Sine.easeIn;
  var scaleX = 1;
  var scaleY = 1;
  
  TweenLite.to( creative.dom.dropImg0, .6, {bezier:[ {x:110, y:-250}, {x:192, y:225}], scaleX: scaleX, scaleY:scaleY, delay: 0, orientToBezier:false, ease:ease });
  TweenLite.to( creative.dom.dropImg1, .8, {bezier:[ {x:180, y:-250}, {x:192, y:225}], scaleX: scaleX, scaleY:scaleY, delay: .3, orientToBezier:false, ease:ease });
  TweenLite.to( creative.dom.dropImg2, 1, {bezier:[ {x:275, y:-100}, {x:285, y:220}], scaleX: scaleX, scaleY:scaleY, delay: .6, orientToBezier:false, ease:ease });
  TweenLite.to( creative.dom.dropImg3, 1.2, {bezier:[ {x:275, y:-100}, {x:285, y:235}], scaleX: scaleX, scaleY:scaleY, delay: .9, orientToBezier:false, ease:ease });
  TweenLite.delayedCall( 2.5, scaleDowniPhone);
}

function scaleDowniPhone()
{
  TweenLite.to( creative.dom.iphone, .8, { scaleX:.71, scaleY:.71, x:65, y:-35, ease:tweenTypeOut });
  TweenLite.to( creative.dom.endQuote0, fadeInQuoteTime, { opacity:1.00, ease:tweenTypeIn});
  
  //TweenLite.to( this.iphone.blur, .6, { alpha:0, ease:tweenTypeIn });
  TweenLite.delayedCall( 3, slidePhone);
}

function slidePhone()
{
  TweenLite.to( creative.dom.iphone, 1, { scaleX:.75, scaleY:.75, x:-110, y:-20, ease:tweenTypeOut });
  TweenLite.to( creative.dom.endQuote0, fadeOutQuoteTime, { opacity:.0, ease:tweenTypeOut });
  TweenLite.to( creative.dom.endImg0, 1, { opacity: 1.0, delay:1, ease:tweenTypeIn, onComplete:activateReplay });
}

function activateReplay()
{
  //this.replay.visible = true;
  //TweenLite.to(this.replay, 1, { alpha:.6, ease:tweenTypeIn }); 
}


// ---------------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------------

function exitClickHandler() {
  Enabler.exit('BackgroundExit');
}

/**
 *  Main onload handler
 */
window.addEventListener('load', preInit);