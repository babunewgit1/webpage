(function ($) {
  $(document).ready(function () {
    $(".products-slider").owlCarousel({
      loop: true,
      margin: 180,
      center: true,
      nav: false,
      // rtl: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 2000000,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        960: {
          items: 1.6,
          margin: 120,
        },
        1200: {
          items: 1.6,
        },
        1920: {
          items: 1.6,
        },
      },
    });

    var owl = $(".products-slider");
    owl.owlCarousel();
    $("#right").click(function () {
      owl.trigger("next.owl.carousel");
    });
    $("#left").click(function () {
      owl.trigger("prev.owl.carousel", [300]);
    });
  });
})(jQuery);
