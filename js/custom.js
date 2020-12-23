// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = 'navLinkFade 0.5s ease forwards ' + (index / 7 + 0.3) + 's';
            }
        });

        burger.classList.toggle('toggle');
    });
}


$(document).ready(function () {
    "use strict";

    // scroll menu
    navSlide();
    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    var statSection = $("#stats"),
        stats = $(".stat-count");
    statSection.waypoint({
    	handler: function(direction) {
       	if (direction === "down") {
 			   stats.each(function () {
 				   var $this = $(this);
 				   $({ Counter: 0 }).animate({ Counter: $this.text() }, {
 				   	duration: 4000,
 				   	easing: 'swing',
 				   	step: function (curValue) {
 				      	$this.text(Math.ceil(curValue));
 				    	}
 				  	});
 				});
        	}
        	// trigger once only
        	this.destroy();
 		},
 		offset: "90%"
 	});

    $('.counter').counterUp({
		delay: 10,
		time: 1000
	});

    $(".skill_main").each(function() {
        $(this).waypoint(function() {
            var progressBar = $(".progress-bar");
            progressBar.each(function(indx){
                $(this).css("width", $(this).attr("aria-valuenow") + "%")
            })
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'
        });
    });

    //animatedModal
    //$("#demo02,#demo03,#demo04,#demo05,#demo06,#demo07,#demo08,#demo09").animatedModal();

	$("#demo01").animatedModal({
		modalTarget: 'animatedModal01'
	});

	$("#demo02").animatedModal({
		modalTarget: 'animatedModal02'
	});

	$("#demo03").animatedModal({
		modalTarget: 'animatedModal03'
	});

	$("#demo04").animatedModal({
		modalTarget: 'animatedModal04'
	});

	$("#demo05").animatedModal({
		modalTarget: 'animatedModal05'
	});

	$("#demo06").animatedModal({
		modalTarget: 'animatedModal06'
	});

	$("#demo07").animatedModal({
		modalTarget: 'animatedModal07'
	});

	$("#demo08").animatedModal({
		modalTarget: 'animatedModal08'
	});

	$("#demo09").animatedModal({
		modalTarget: 'animatedModal09'
	});

    // Contact Form

    // validate contact form
    $(function () {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true
                },
                phone: {
                    required: false
                },
                message: {
                    required: true
                }

            },
            messages: {
                name: {
                    required: "This field is required",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "This field is required"
                },
                message: {
                    required: "This field is required"
                }
            },
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "process.php",
                    success: function () {
                        $('#contact :input').attr('disabled', 'disabled');
                        $('#contact').fadeTo("slow", 1, function () {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#success').fadeIn();
                        });
                    },
                    error: function () {
                        $('#contact').fadeTo("slow", 1, function () {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });

    });
});
