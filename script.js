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
  $(".menu-btn").click(function () {
    $(".menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "sender@email_address.com",
    Password: "Enter your password",
    To: "joshikaran392@gmail.com",
    From: "joshikaran392@gmail.com",
    Subject: "Sending Email using javascript",
    Body: "Well that was easy!!",
  }).then(function (message) {
    alert("mail sent successfully");
  });
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


function preloader() {
  const preloader = document.getElementById("preloader")
  preloader.style.display = "none"
}
