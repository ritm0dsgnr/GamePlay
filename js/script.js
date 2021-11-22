$(function() {
    
$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("html, body").animate({
        scrollTop:  blockOffset
    }, 600);
});

$(".burger").on("click", function(event) {
    $(".burger").toggleClass("active");
    $(".nav").toggleClass("active");
    $(".nav__link").toggleClass("active");
    $("body").toggleClass("lock");
});

$(".nav__link").on("click", function(event) {
    $(".burger").removeClass("active");
    $(".nav").removeClass("active");
    $(".nav__link").removeClass("active");
    $("body").removeClass("lock");
});

$("[data-slider]").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
        breakpoint: 1200,
        settings: {
        arrows: false,
        dots: true,
    }
    },
    ]
    });

$('a').click(function () {});
$("a").removeAttr("href");

function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
        change.target.classList.add('anim-show');
    }
    else {
        change.target.classList.remove('anim-show');
    }
    });
    }
    let options = {
      threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.anim');

    for (let elm of elements) {
      observer.observe(elm);
    }
    });
