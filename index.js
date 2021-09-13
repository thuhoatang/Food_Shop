$(document).ready(function () {
  
  handleScrollTo();
  handleStickyHeader();
});


const handleScrollTo = () => {
  $(".header__nav-home").click(() => {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
  $(".header__nav-about").click(() => {
    $("html, body").animate(
      { scrollTop: $(".about").offset().top - 150 },
      1000
    );
  });
  $(".header__nav-prevent").click(() => {
    $("html, body").animate(
      { scrollTop: $(".things").offset().top - 150 },
      1000
    );
  });
  $(".header__nav-contact").click(() => {
    $("html, body").animate(
      { scrollTop: $(".doctors").offset().top - 150 },
      1000
    );
  });
};

const handleStickyHeader = () => {
  const header = $(".header");
  let isHide = true;

  $(window).scroll(() => {
    const scrollTop = $(window).scrollTop();
    if (scrollTop === 0) isHide = true;

    if (scrollTop > 400) {
      header.removeClass("hide");
      header.addClass("show");
    } else if (scrollTop > header.innerHeight() && isHide) {
      header.removeClass("show");
      header.addClass("hide");
      isHide = false;
    }
  });
};


window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }

}

