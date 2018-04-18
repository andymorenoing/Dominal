"use strict";
var autoplay;




$(document).ready(function () {

	autoplay = $("#jquery_jplayer_1")

	$("#jquery_jplayer_1").jPlayer({
        ready: function(event) {
            $(this).jPlayer("setMedia", {
				title: "Dominal",
				m4a: "audio/dominal.mp3",
				oga: "audio/dominal.ogg"
            });
        },
		play: function() { // To avoid multiple jPlayers playing together.
			$(this).jPlayer("pauseOthers", 0);
		},
        supplied: "mp3, oga",
		wmode: "window",
		cssSelectorAncestor: "#jp_container_1",
		useStateClassSkin: false,
		autoBlur: false,
		keyEnabled: true
    });

	$("#jquery_jplayer_2").jPlayer({
        ready: function(event) {
            $(this).jPlayer("setMedia", {
				title: "Dominal",
				m4a: "audio/frank.mp3",
				oga: "audio/frank.ogg"
            });
        },
		play: function() { // To avoid multiple jPlayers playing together.
			$(this).jPlayer("pauseOthers", 0);
		},
        supplied: "mp3, oga",
		cssSelectorAncestor: "#jp_container_2",
		wmode: "window",
		useStateClassSkin: false,
		autoBlur: false,
		keyEnabled: true
    });

	$("#jquery_jplayer_3").jPlayer({
        ready: function(event) {
            $(this).jPlayer("setMedia", {
				title: "Dominal",
				m4a: "audio/morticia.mp3",
				oga: "audio/morticia.ogg"
            });
        },
		play: function() { // To avoid multiple jPlayers playing together.
			$(this).jPlayer("pauseOthers", 0);
		},
        supplied: "mp3, oga",
		cssSelectorAncestor: "#jp_container_3",
		wmode: "window",
		useStateClassSkin: false,
		autoBlur: false,
		keyEnabled: true
    });

	$("#jquery_jplayer_4").jPlayer({
        ready: function(event) {
            $(this).jPlayer("setMedia", {
				title: "Dominal",
				m4a: "audio/lobo.mp3",
				oga: "audio/lobo.ogg"
            });
        },
		play: function() { // To avoid multiple jPlayers playing together.
			$(this).jPlayer("pauseOthers", 0);
		},
        supplied: "mp3, oga",
		cssSelectorAncestor: "#jp_container_4",
		wmode: "window",
		useStateClassSkin: false,
		autoBlur: false,
		keyEnabled: true
    });

	$("#jquery_jplayer_5").jPlayer({
        ready: function(event) {
            $(this).jPlayer("setMedia", {
				title: "Dominal",
				m4a: "audio/momia.mp3",
				oga: "audio/momia.ogg"
            });
        },
		play: function() { // To avoid multiple jPlayers playing together.
			$(this).jPlayer("pauseOthers", 0);
		},
        supplied: "mp3, oga",
		cssSelectorAncestor: "#jp_container_5",
		wmode: "window",
		useStateClassSkin: false,
		autoBlur: false,
		keyEnabled: true
    });

	$("#jquery_jplayer_6").jPlayer({
        ready: function(event) {
            $(this).jPlayer("setMedia", {
				title: "Dominal",
				m4a: "audio/doctor.mp3",
				oga: "audio/doctor.ogg"
            });
        },
		play: function() { // To avoid multiple jPlayers playing together.
			$(this).jPlayer("pauseOthers", 0);
		},
        supplied: "mp3, oga",
		cssSelectorAncestor: "#jp_container_6",
		wmode: "window",
		useStateClassSkin: false,
		autoBlur: false,
		keyEnabled: true
    });


	/* Video Lightbox */
	if (!!$.prototype.simpleLightboxVideo) {
		$('.video').simpleLightboxVideo();
	}

	/*ScrollUp*/
	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	/*Responsive Navigation*/



	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").on("click",function() {
		if (!$("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		} else {
			$("nav#nav-mobile ul").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		}
	});


	// $("#nav-mobile").html($("#nav-main").html());
	// $("#nav-mobile ul a").on("click",function() {
	// 	if ($("nav#nav-mobile ul").hasClass("expanded")) {
	// 		$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
	// 		$("#nav-trigger span").removeClass("open");
	// 	}
	// });



		   //En este script estaba el problema de los a:link

	/* Sticky Navigation */
	if (!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

			//En este script estaba el problema de los a:link, habian colocado dos negaciones en vez de una, es decir "!!" en vez de "!" att: VengadorWeb


	$('#content').waypoint(function (direction) {
		if (direction === 'down') {
			$('#header').addClass('nav-solid fadeInDown');
		}
		else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});



});





$(document).on('click','.hitarea', function(event) {
    event.preventDefault();
    var target = this.getAttribute('href');
    window.open(target);
    /*
    var target = this.getAttribute('href');
    window.open($(target));
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1000);*/
});









/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow-y': 'visible'});
	autoplay.jPlayer("play", 1);

	/* WOW Elements */
	if (typeof WOW == 'function') {
		new WOW().init();
	}

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}

});
