document.addEventListener('DOMContentLoaded', function (event) {
  var dataText = ["¡Hola! Soy Janeth.", "Soy Soñadora.", "Soy Fortaleza.", "Soy Mujer.", "¡Hola! Soy Janeth."];
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
      document.querySelector("h1").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character 
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

///    control scrol

// Sticky Header
$(window).scroll(function () {

  if ($(window).scrollTop() > 100) {
    $('.main_h').addClass('sticky');
  } else {
    $('.main_h').removeClass('sticky');
  }
});

// Mobile Navigation
$('.mobile-toggle').click(function () {
  if ($('.main_h').hasClass('open-nav')) {
    $('.main_h').removeClass('open-nav');
  } else {
    $('.main_h').addClass('open-nav');
  }
});

$('.main_h li a').click(function () {
  if ($('.main_h').hasClass('open-nav')) {
    $('.navigation').removeClass('open-nav');
    $('.main_h').removeClass('open-nav');
  }
});

// navigation scroll lijepo radi materem
$('nav a').click(function (event) {
  var id = $(this).attr("href");
  var offset = 70;
  var target = $(id).offset().top - offset;
  $('html, body').animate({
    scrollTop: target
  }, 1000);
  event.preventDefault();
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip({ trigger: 'manual' }).tooltip('show');
});

$(window).scroll(function () {
  // if($( window ).scrollTop() > 10){   scroll down abit and get the action   
  $(".progress-bar").each(function () {
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  });

  //  }  
});

/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
