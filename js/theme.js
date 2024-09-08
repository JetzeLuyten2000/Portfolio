/////////////////////////////////////////////////////////////////////
// jQuery for page scrolling feature - requires jQuery Easing plugin
/////////////////////////////////////////////////////////////////////

$('.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top -64
    }, 1500, 'easeInOutExpo');
    
    event.preventDefault();
});

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    
    if (pos > 100) {
      scrollProgress.style.display = "grid"; // Show the circular progress when scrolling
    } else {
      scrollProgress.style.display = "none"; // Hide it when not needed
    }
    
    // On click, scroll back to the top
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    
    // Update the circular progress background
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
  
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);

    // Place the particle at the mouse's page position
    particle.style.left = `${x - 5}px`; // Offset to center the particle
    particle.style.top = `${y + 15 - 5}px`; // Verplaats de particle 20px naar beneden

    // Remove the particle after 1 second (after the animation)
    setTimeout(() => {
      particle.remove();
    }, 1000);
  }

  // Event listener for mouse movement
  window.addEventListener('mousemove', (e) => {
    createParticle(e.pageX, e.pageY); // Use pageX and pageY to account for scrolling
  });


////////////////////////////////////////////////////////////////////////
// On-Scroll Animated Header: https://github.com/codrops/AnimatedHeader
////////////////////////////////////////////////////////////////////////

var cbpAnimatedHeader = (function() {

    var docElem = document.documentElement,
        header = document.querySelector( '.navbar-fixed-top' ),
        didScroll = false,
        changeHeaderOn = 10;

    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }

    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            classie.add( header, 'navbar-shrink' );
        }
        else {
            classie.remove( header, 'navbar-shrink' );
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();



//////////////////////////////////////////////
// Highlight the top nav as scrolling occurs
//////////////////////////////////////////////

$('body').scrollspy({
    target: '.navbar',
    offset: 65
})



///////////////////////////////////////////
// Display loading image while page loads
///////////////////////////////////////////

// Wait for window load
$(window).load(function() {
    // Animate loader off screen
    $(".page-loader").fadeOut("slow");
});



////////////////////////////////////////////////////
// OWL Carousel: http://owlgraphic.com/owlcarousel
////////////////////////////////////////////////////

// Intro text carousel
$("#owl-intro-text").owlCarousel({
    singleItem : true,
    autoPlay : 6000,
    stopOnHover : true,
    navigation : false,
    navigationText : false,
    pagination : true
})


// Partner carousel
$("#owl-partners").owlCarousel({
    items : 4,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,2],
    autoPlay : 5000,
    stopOnHover : true,
    pagination : false
})

// Testimonials carousel
$("#owl-testimonial").owlCarousel({
    singleItem : true,
    pagination : true,
    autoHeight : true
})


////////////////////////////////////////////////////////////////////
// Stellar (parallax): https://github.com/markdalgleish/stellar.js
////////////////////////////////////////////////////////////////////

$.stellar({
    // Set scrolling to be in either one or both directions
    horizontalScrolling: false,
    verticalScrolling: true,
});



///////////////////////////////////////////////////////////
// WOW animation scroll: https://github.com/matthieua/WOW
///////////////////////////////////////////////////////////

new WOW().init();



////////////////////////////////////////////////////////////////////////////////////////////
// Counter-Up (requires jQuery waypoints.js plugin): https://github.com/bfintal/Counter-Up
////////////////////////////////////////////////////////////////////////////////////////////

const counterUp = window.counterUp.default

const callback = entries => {
    entries.forEach( entry => {
        const el = entry.target
        if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
            counterUp( el, {
                duration: 2000,
                delay: 16,
            } )
            el.classList.add( 'is-visible' )
        }
    } )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

const elLines = document.querySelector( '.counterLines' )
const elCoffee = document.querySelector( '.counterCoffee' )
const elProjects = document.querySelector( '.counterProjects' )
IO.observe( elLines )
IO.observe( elCoffee )
IO.observe( elProjects )


////////////////////////////////////////////////////////////////////////////////////////////
// Isotop Package
////////////////////////////////////////////////////////////////////////////////////////////
$(window).load(function() {
    $('.closebtn').css('visibility', 'hidden');
$('.portfolio_menu ul li').click(function(){
	$('.portfolio_menu ul li').removeClass('active_prot_menu');
	$(this).addClass('active_prot_menu');
});

var $container = $('#portfolio');
$container.isotope({
  itemSelector: '.col-sm-4',
  layoutMode: 'fitRows'
});
$('#filters').on( 'click', 'a', function() {
  var filterValue = $(this).attr('data-filter');
  $container.isotope({ filter: filterValue });
  return false;
});
});



/////////////////////////
// Scroll to top button
/////////////////////////

// Check to see if the window is top if not then display button
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrolltotop').fadeIn();
    } else {
        $('.scrolltotop').fadeOut();
    }
});

// Click event to scroll to top
$('.scrolltotop').click(function(){
    $('html, body').animate({scrollTop : 0}, 1500, 'easeInOutExpo');
    return false;
});



////////////////////////////////////////////////////////////////////
// Close mobile menu when click menu link (Bootstrap default menu)
////////////////////////////////////////////////////////////////////

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

function openNav() {
    $('body').css('overflow', 'hidden');
    $('.scrolltotop').css('visibility', 'hidden');
    $('.closebtn').css('visibility', 'visible');
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    $('body').css('overflow', 'auto')
    $('.scrolltotop').css('visibility', 'visible');
    $('.closebtn').css('visibility', 'hidden');
    document.getElementById("myNav").style.width = "0%";
}

function openCare(){
    $('body').css('overflow', 'hidden');
    $('.scrolltotop').css('visibility', 'hidden');
    $('.closebtn').css('visibility', 'visible');
    document.getElementById("myCare").style.width = "100%";
}

function closeCare(){
    $('body').css('overflow', 'auto')
    $('.scrolltotop').css('visibility', 'visible');
    $('.closebtn').css('visibility', 'hidden');
    document.getElementById("myCare").style.width = "0%";
}

function openPhp(){
    $('body').css('overflow', 'hidden');
    $('.scrolltotop').css('visibility', 'hidden');
    $('.closebtn').css('visibility', 'visible');
    document.getElementById("myPhp").style.width = "100%";
}

function closePhp(){
    $('body').css('overflow', 'auto')
    $('.scrolltotop').css('visibility', 'visible');
    $('.closebtn').css('visibility', 'hidden');
    document.getElementById("myPhp").style.width = "0%";
}

function openCordova(){
    $('body').css('overflow', 'hidden');
    $('.scrolltotop').css('visibility', 'hidden');
    $('.closebtn').css('visibility', 'visible');
    document.getElementById("myCordova").style.width = "100%";
}

function closeCordova(){
    $('body').css('overflow', 'auto')
    $('.scrolltotop').css('visibility', 'visible');
    $('.closebtn').css('visibility', 'hidden');
    document.getElementById("myCordova").style.width = "0%";
}

function openProject40(){
    $('body').css('overflow', 'hidden');
    $('.scrolltotop').css('visibility', 'hidden');
    $('.closebtn').css('visibility', 'visible');
    document.getElementById("myProject40").style.width = "100%";
}

function closeProject40(){
    $('body').css('overflow', 'auto')
    $('.scrolltotop').css('visibility', 'visible');
    $('.closebtn').css('visibility', 'hidden');
    document.getElementById("myProject40").style.width = "0%";
}

function openDataScienceR(){
    $('body').css('overflow', 'hidden');
    $('.scrolltotop').css('visibility', 'hidden');
    $('.closebtn').css('visibility', 'visible');
    document.getElementById("myDataScienceR").style.width = "100%";
}

function closeDataScienceR(){
    $('body').css('overflow', 'auto')
    $('.scrolltotop').css('visibility', 'visible');
    $('.closebtn').css('visibility', 'hidden');
    document.getElementById("myDataScienceR").style.width = "0%";
}

function openBigData(){
    $('body').css('overflow', 'hidden');
    $('.scrolltotop').css('visibility', 'hidden');
    $('.closebtn').css('visibility', 'visible');
    document.getElementById("myBigData").style.width = "100%";
}

function closeBigData(){
    $('body').css('overflow', 'auto')
    $('.scrolltotop').css('visibility', 'visible');
    $('.closebtn').css('visibility', 'hidden');
    document.getElementById("myBigData").style.width = "0%";
}