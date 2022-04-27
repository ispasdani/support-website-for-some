const redirect = document.querySelector(".redirect");
redirect.addEventListener("click", function () {
  location.href = "./pages/page1.html";
});

const signOutBtn = document.getElementById("sign-out-btn");
signOutBtn.addEventListener("click", function () {
  location.href = "../../index.html";
});

const contentCalendar = document.getElementById("content-calendar-btn");
contentCalendar.addEventListener("click", function () {
  location.href = "../contentCalendarPost/contentCalendar.html";
});

const somePurpose = document.getElementById("some-purpose");
somePurpose.addEventListener("click", function () {
  location.href = "../somePurpose/some.html";
});
