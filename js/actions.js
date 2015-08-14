// ------------------------------//
// ------ Smooth Scrolling ------//
// ------------------------------//


$(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    $('li a.nav').click(function(){
        $('a.nav').removeClass("active");
        $(this).addClass("active");
    });

// ------------------------------//
// ------ Headroom Script -----//
// ------------------------------//

$("header").headroom({
  "offset": 375,
  "tolerance": 5,
  "classes": {
    "initial": "animated",
    "pinned": "slide--Down",
    "unpinned": "slide--Up"
  }
});

// to destroy
$("#header").headroom("destroy");