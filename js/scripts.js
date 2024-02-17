(function ($) {
  $(document).ready(function () {
    //home page slider
    $(".products-slider").owlCarousel({
      loop: true,
      margin: 180,
      center: true,
      nav: false,
      // rtl: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 50000,
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

    //resedence page slider
    $(".res_one").owlCarousel({
      loop: true,
      margin: 0,
      center: false,
      nav: false,
      // rtl: true,
      dots: true,
      autoplay: false,
      autoplayTimeout: 5000,
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
          items: 1,
        },
        1200: {
          items: 1,
        },
        1920: {
          items: 1,
        },
      },
    });

    var resOne = $(".res_one");
    resOne.owlCarousel();
    $("#res_one_right").click(function () {
      resOne.trigger("next.owl.carousel");
    });
    $("#res_one_left").click(function () {
      resOne.trigger("prev.owl.carousel", [300]);
    });

    $(".res_two").owlCarousel({
      loop: true,
      margin: 0,
      center: false,
      nav: false,
      // rtl: true,
      dots: true,
      autoplay: false,
      autoplayTimeout: 5000,
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
          items: 1,
        },
        1200: {
          items: 1,
        },
        1920: {
          items: 1,
        },
      },
    });

    var resTwo = $(".res_two");
    resTwo.owlCarousel();
    $(".resnavRightOne").click(function () {
      resTwo.trigger("next.owl.carousel");
    });
    $(".resnavLeftOne").click(function () {
      resTwo.trigger("prev.owl.carousel", [300]);
    });

    $(".resnai_slider").owlCarousel({
      loop: true,
      margin: 0,
      center: false,
      nav: false,
      // rtl: true,
      dots: true,
      autoplay: false,
      autoplayTimeout: 5000,
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
          items: 1,
        },
        1200: {
          items: 1,
        },
        1920: {
          items: 1,
        },
      },
    });

    //service page slider
    $(".svproduct").owlCarousel({
      loop: true,
      margin: 15,
      center: false,
      nav: false,
      // rtl: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 200000,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 3,
        },
        960: {
          items: 3,
        },
        1200: {
          items: 4,
        },
        1920: {
          items: 4,
        },
      },
    });
  });
})(jQuery);
