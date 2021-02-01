
$(document).ready(function () {
  let scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 20) {
      $(".navbar").css("background-color", "red");
      $(".navbar").css("padding", "10px 0px");
    } else {
      $(".navbar").css("background", "none");
    }
  });
});
function toggle() {
  let menu = document.querySelector(".menu")
  let bar = document.querySelector(".menu-btn i")
  menu.classList.toggle("active")
  bar.classList.toggle("active")
}

$("#scroll").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#home").offset().top,
    }
  );
});



var typed = new Typed(".typing", {
  strings: ["Web Developer", "Student", "Coder", "Learner"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});



window.onload = function () {
  lax.init()

  // Add a driver that we use to control our animations
  lax.addDriver('scrollY', function () {
    return window.scrollY
  })


}