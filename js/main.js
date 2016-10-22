
/* ANIMATE SCROLL BRAND TO CONTENT HOME */
$(".navbar-collapse ul li a[href^='#']").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();
   // store hash
   var hash = this.hash;
   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top -50
     }, 700, function(){
       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });
});

/* ANIMATE SCROLL LINK TO CONTENT */
$("a.navbar-brand[href^='#']").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();
   // store hash
   var hash = this.hash;
   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top -50
     }, 700, function(){
       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });
});

/* SCROLL BACK TO TOP */
$("#back-to-top a[href^='#']").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();
   // store hash
   var hash = this.hash;
   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top -50
     }, 700, function(){
       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });
});