/*=========================================

Template Name: nahid - One Page Personal Portnahid Template
Author: theme_mh
Version: 1.0
Design and Developed by: theme_mh

NOTE: This is the custom jQuery file for the template

=========================================*/


(function ($) {
	"use strict";
    
    var $window = $(window),
            $body = $('body');
    
    $(document).ready(function($){

 /*=======================================
            DEMO PANLE JS
    =======================================*/
        $("span.red_color").on("click", function(){
            $("body").addClass("red_color_theme").removeClass("green_color_theme yellow_color_theme blue_color_theme pink_color_theme purple_color_theme sky_color_theme lime_color_theme gold_color_theme");
        });
        $("span.green_color").on("click", function(){
            $("body").addClass("green_color_theme").removeClass("red_color_theme yellow_color_theme blue_color_theme pink_color_theme purple_color_theme sky_color_theme lime_color_theme gold_color_theme");
        });
    $("span.yellow_color").on("click", function(){
            $("body").addClass("yellow_color_theme").removeClass("green_color_theme red_color_theme blue_color_theme pink_color_theme purple_color_theme sky_color_theme lime_color_theme gold_color_theme");
        });
    $("span.blue_color").on("click", function(){
            $("body").addClass("blue_color_theme").removeClass("yellow_color_theme green_color_theme red_color_theme pink_color_theme purple_color_theme sky_color_theme lime_color_theme gold_color_theme");
        });
    $("span.pink_color").on("click", function(){
            $("body").addClass("pink_color_theme").removeClass("green_color_theme red_color_theme yellow_color_theme purple_color_theme blue_color_theme sky_color_theme lime_color_theme gold_color_theme");
        });
    $("span.purple_color").on("click", function(){
            $("body").addClass("purple_color_theme").removeClass("green_color_theme red_color_theme yellow_color_theme blue_color_theme pink_color_theme sky_color_theme lime_color_theme gold_color_theme");
        });
        
        $("span.sky_color").on("click", function(){
            $("body").addClass("sky_color_theme").removeClass("green_color_theme red_color_theme yellow_color_theme blue_color_theme pink_color_theme purple_color_theme lime_color_theme gold_color_theme");
        });
        
        $("span.lime_color").on("click", function(){
            $("body").addClass("lime_color_theme").removeClass("green_color_theme red_color_theme yellow_color_theme blue_color_theme pink_color_theme purple_color_theme sky_color_theme gold_color_theme");
        });
        
        $("span.gold_color").on("click", function(){
            $("body").addClass("gold_color_theme").removeClass("green_color_theme red_color_theme yellow_color_theme blue_color_theme pink_color_theme, purple_color_theme, sky_color_theme, lime_color_theme");
        });
    
    	$(".spiner_button").on("click", function(event){
            event.preventDefault();
            if ( $(this).hasClass("slide_in_out") ) {
            $(".demo_panel_box").stop().animate({left:"-180px"}, 500);
            } else {
            $(".demo_panel_box").stop().animate({left:"0px"}, 500);
            }
            $(this).toggleClass("slide_in_out");
            return false;
        });

    
    
    /*=============================
                Sticky header
    ==============================*/
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });

        $window.on('scroll', function() {
          if ($(".navbar").offset().top > 100) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
              } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
              }
        });
      
        
     /*=============================
                Smoothscroll js
        ==============================*/
        $(function() {
          $('a.smoth-scroll').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
          });
        });  
            
        
    /*======================================
        jquery scroll spy
    ========================================*/
        $body.scrollspy({
        
            target : ".navbar-collapse",
            offset : 95
        
        });
        $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
        
     /*=================================
            Bootstrap menu fix
     ==================================*/
        $(".navbar-toggle").on("click", function(){
        
            $body.addClass("mobile-menu-activated");
        
        });
        
        $("ul.nav.navbar-nav li a").on("click", function(){
        
            $(".navbar-collapse").removeClass("in");
        
        });
        
        
    /*====================================================
        background-image flickering solution for mobile
        =======================================================*/
         var bg = jQuery("#home");
        function resizeBackground() {
            bg.height(jQuery(window).height() + 60);
      }
      resizeBackground();
        
    
    /*==========================
        Intro typer
    ============================*/
    var element = $(".element");

        $(function() {
            element.typed({
                strings: ["John Doe.", "Designer.", "Developer."],
                typeSpeed: 100,
                loop: true,
            });
        });
        
        
     /*=============================
            Parallax
    ==============================*/
    $window.stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });
        
        
    /*=============================
        Magnific Popup
    ==============================*/
    $('.work-popup').magnificPopup({type:'image'});
        
    /*=============================
        CounterUp
    ==============================*/
   $('.stat-area').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.counter').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
        
    /*=============================
            WOW js
    ==============================*/
        new WOW({ mobile: false }).init();
        
        
    /*=========================================
                jQuery mixItUp
    =======================================*/
    
    $('.work-inner').mixItUp();
    
    
    /*===================================
            owl carousel testimonial
     ====================================*/
    $(".testimonial-list").owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots:false,
        autoplay:false,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    

    });
    
   
    $window.on('load', function(){
          /*=============================
                Preloder
        ==============================*/
         $('.spinner').fadeOut(); 
        $('.preloader').delay(350).fadeOut(500);
        $body.delay(350).css({'overflow':'visible'});
            
        });


    

}(jQuery));	

