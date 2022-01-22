;(function () {
    "use strict"

    // define variables
    var items = document.querySelectorAll(".timeline li")

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect()
        return (
            rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view")
            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc)
    window.addEventListener("resize", callbackFunc)
    window.addEventListener("scroll", callbackFunc)
})()

// -----

$(function() {

	$(".track").each(function(index, el) {
		init($(this));
	});

	function init(card) {
		card.children(".cover").append('<button class="play"></button><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"><path id="circle" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" d="M50,2.9L50,2.9C76,2.9,97.1,24,97.1,50v0C97.1,76,76,97.1,50,97.1h0C24,97.1,2.9,76,2.9,50v0C2.9,24,24,2.9,50,2.9z"/></svg>');

		var audio = card.find("audio"),
			play = card.find('.play'),
			circle = card.find('#circle'),
			getCircle = circle.get(0),
			totalLength = getCircle.getTotalLength();

		circle.attr({
				'stroke-dasharray': totalLength,
				'stroke-dashoffset': totalLength
		});

		play.on('click', function() {
			if (audio[0].paused) {
				$("audio").each(function(index, el) {
					$("audio")[index].pause();
				});
				$(".track").removeClass('playing');
				audio[0].play();
				card.addClass('playing');
			} else {
				audio[0].pause();
				card.removeClass('playing');
			}
		});

		audio.on('timeupdate', function() {
			var currentTime = audio[0].currentTime,
				maxduration = audio[0].duration,
				calc = totalLength - ( currentTime / maxduration * totalLength );

			circle.attr('stroke-dashoffset', calc);
		});

		audio.on('ended', function() {
			card.removeClass('playing');
			circle.attr('stroke-dashoffset', totalLength);
		});
		
	}

});


// ----
// ----

// -----

$(function() {

	$(".track").each(function(index, el) {
		init($(this));
	});

	function init(card) {
		card.children(".cover").append('<button class="play"></button><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"><path id="circle" fill="none" stroke="#FFFFFF" stroke-miterlimit="10" d="M50,2.9L50,2.9C76,2.9,97.1,24,97.1,50v0C97.1,76,76,97.1,50,97.1h0C24,97.1,2.9,76,2.9,50v0C2.9,24,24,2.9,50,2.9z"/></svg>');

		var audio = card.find("audio"),
			play = card.find('.play'),
			circle = card.find('#circle'),
			getCircle = circle.get(0),
			totalLength = getCircle.getTotalLength();

		circle.attr({
				'stroke-dasharray': totalLength,
				'stroke-dashoffset': totalLength
		});

		play.on('click', function() {
			if (audio[0].paused) {
				$("audio").each(function(index, el) {
					$("audio")[index].pause();
				});
				$(".track").removeClass('playing');
				audio[0].play();
				card.addClass('playing');
			} else {
				audio[0].pause();
				card.removeClass('playing');
			}
		});

		audio.on('timeupdate', function() {
			var currentTime = audio[0].currentTime,
				maxduration = audio[0].duration,
				calc = totalLength - ( currentTime / maxduration * totalLength );

			circle.attr('stroke-dashoffset', calc);
		});

		audio.on('ended', function() {
			card.removeClass('playing');
			circle.attr('stroke-dashoffset', totalLength);
		});
		
	}

});


$(".track").click(function() {
	$(".timeline").addClass("timeline-show");
	$('html, body').css('overflowY', 'auto'); 
  });


$('.track').click(function() {
	jQuery(document).ready(function($){

  
		$(document).snowFlurry({
			  maxSize: 20,
			  numberOfFlakes: 200,
			  minSpeed: 100,
			  maxSpeed: 150,
			  color: '#fff',
			  timeout: 0
		  });
		
	  });
	
	
	
})




  