$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 550) {
      $(".navbar").addClass("solid");
    } else {
      $(".navbar").removeClass("solid");
    }
  });
});

$(document).ready(function () {
  $("a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
