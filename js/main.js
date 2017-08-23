$(function() {
	"use strict";

	/*--------------------------------------------------------------
	Header full screen background image
    ---------------------------------------------------------------- */

	$(window).on( "load", function() {
		$(".fill-screen").css("height", window.innerHeight);
	});


	/*--------------------------------------------------------------
	animating the numbers for counting up for the achievement section
    ---------------------------------------------------------------- */

	$('.counter').counterUp({
        delay: 100,
        time: 3000
    });

	/*--------------------------------------------------------------
	Closes the Responsive Menu on Menu Item Click
    ---------------------------------------------------------------- */

    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

	/*--------------------------------------------------------------
	accordian on events section
    ---------------------------------------------------------------- */
     
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
			$(this).find('>.panel-heading').removeClass('active');
			});

		$(this).closest('.panel-heading').toggleClass('active');
	});


	/*--------------------------------------------------------------
	client carouel
	---------------------------------------------------------------- */

	$("#client-carousel").owlCarousel({

		autoPlay: 3000, //Set AutoPlay to 3 seconds
		navigation: false,
		pagination: false,
		items : 6,
		itemsDesktop : [1199,6],
		itemsDesktopSmall : [991,5],
		itemsTablet : [767,5],
		itemsTabletSmall : [599,4],
		itemsMobile : [420, 3]

	});




	/*--------------------------------------------------------------
	Isotope Js for Portfolio Section
    ---------------------------------------------------------------- */

	// cache container
	var $isocontainer = $('.portfolio-wrapper');

	// initialize isotope

	$isocontainer.imagesLoaded( function(){
		$isocontainer.isotope({
			filter: "*",
			animationOptions: {
		            duration: 750,
		            easing: 'linear',
		            queue: false
		        }
		});
	});

	$(".portfolio-filter ul li").click(function(){
		$(".portfolio-filter ul li").removeClass("active");
		$(this).addClass("active");

		var selector = $(this).attr('data-filter');
		$isocontainer.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			},
			isResizeBound: true
		});
		return false;
	});  //isotope finished

	/*--------------------------------------------------------------
	Activating Magnific Pop Up
    ---------------------------------------------------------------- */

	  $('.img-pop-up').magnificPopup({
	    type: 'image',
	    gallery:{
	            enabled:true
	            },

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'mfp-fade'

	  });


    /*--------------------------------------------------------------
    scrollUp button (Go to top) at the right bottom corner of window
    ---------------------------------------------------------------- */

    $(window).on('scroll',function () {
        if($(window).scrollTop()>200) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });

    $("#toTop").on('click', function() {
        $("html,body").animate({
            scrollTop:0
        }, 500)
    });  //scrollup finished


    /*--------------------------------------------------------------
    smooth scrolling
    ---------------------------------------------------------------- */
	
	$('.nav li a, .slider-btn, .explore').bind('click', function() {
		$('html, body').stop().animate({
			scrollTop: $($(this).attr('href')).offset().top - 90
		}, 1000, 'easeOutCubic');
		event.preventDefault();
	});



    /*--------------------------------------------------------------
	ScrollsPy
    ---------------------------------------------------------------- */
	$('body').scrollspy({
		target: '.navbar',
		offset: 150
	});

	//scrollspy finished



    /*--------------------------------------------------------------
	Activating parallex js
    ---------------------------------------------------------------- */

	$('.concept').parallax({imageSrc: 'images/concept-bg.jpg'});



    /*--------------------------------------------------------------
	Activating site loader
    ---------------------------------------------------------------- */

	jQuery(window).load(function() { 
	    jQuery(".spinner").delay(400).fadeOut("slow");
	    jQuery(".title-load").delay(400).fadeOut("slow");
	    jQuery("#loader").delay(800).fadeOut("slow"); 

	});

	// home version 2 all unic js 

	// full screen slider 

  	var Height = $(window).height(); 
	$(".slider-item").height(Height);
	$(".header.fill-screen").height(Height);
	$(".header.blog").height();
	
	// wow js 
	var wow = new WOW(
	  {
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       90,          // distance to the element when triggering the animation (default is 0)
	    mobile:       true,       // trigger animations on mobile devices (default is true)
	    live:         true,       // act on asynchronously loaded content (default is true)
	    callback:     function(box) {
	      // the callback is fired every time an animation is started
	      // the argument that is passed in is the DOM node being animated
	    },
	    scrollContainer: null,    // optional scroll container selector, otherwise use window,
	    resetAnimation: true,     // reset animation on end (default is true)
	  }
	);
	wow.init();
	// full screen slider 

	$(".slider").owlCarousel({
		autoplay: true, //Set AutoPlay to 2 seconds
		loop:true,
		nav:true,
		dots: false,
		navigation:true,
		pagination:false,
		items : 1,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	});

		/*--------------------------------------------------------------
	client carouel
	---------------------------------------------------------------- */

	$("#client-carousel-rv2").owlCarousel({

		autoPlay: true, //Set AutoPlay to 3 seconds
		navigation: false,
		pagination: false,
		margin:180,
		items : 5,
		responsive:{
		    0:{
		        items:2,
		        margin:80

		    },
		    600:{
		        items:4,
		        margin:100
		    },
		    1000:{
		        items:5,
		        margin:100
		    }
		}

	});

	$(".client-comment-curosel").owlCarousel({
		loop:true,
		nav:false,
		autoplay:true,
		responsive:{
		    0:{
		        items:1
		    },
		    600:{
		        items:2
		    },
		    1000:{
		        items:2
		    }
		}

	});
	    


function form_validation(id_or_class){
 	$(id_or_class).validate({

        rules: {
            name: {
                required: true,
                minlength: 2
            },

            email: {
                required: true,
                email: true
            },

            subject: {
                required: true,
                minlength: 5
            },
            message:{
            	required: true,
            	minlength: 5
            }
        },

        messages: {
            author: "Please provide a valid name",
            email: "Please provide a valid email",
            comment: "Comments needs to be at least 5 characters"
        },

        errorElement: "div",
        errorPlacement: function(error, element) {
            element.after(error);
        }

    });	
}

form_validation('.newsletter-validatation');
form_validation('.form-validatation');
form_validation('.form-validate');

});
