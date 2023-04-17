var animating = false;
$('.hamburger-box').on('click touch', function () {
  if (!animating) {
    animating = true;
    $(this).toggleClass('open');
    $('.loop-glass-box').toggleClass('disable');
    $('.menu-wrapper').toggleClass('open open-menu');
    $('body').toggleClass('visibilty');
    $('header .navbar .loop-glass').toggleClass('hidden');
    setTimeout(function () {
      animating = false;
    }, 300);
  }
});

$('.menu-wrapper .menu ul li a').on('click', function () {
  $('.menu-wrapper').toggleClass('open open-menu');
  $('.hamburger-box').toggleClass('open');
  $('body').toggleClass('visibilty');
  $('header .navbar .loop-glass').toggleClass('hidden');
})
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 20) {
    $("header").addClass("darkHeader");
  }
  else $("header").removeClass("darkHeader");
});

jQuery('.user-logo-slider').slick({
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 490,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});

jQuery('.client-logo-slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  arrows: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        centerMode: true,
        centerPadding: '15px',
        slidesToShow: 1,

      }
    }
  ]
});

$('.meet-the-team a').simpleLightbox();

var copyrightYear = new Date().getFullYear();
$("#newyear").replaceWith(copyrightYear);
