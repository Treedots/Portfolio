$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
  const dd = new Date();
  const yy = dd.getFullYear() - 2009;
  $(".target-name").text(`Hi there, I'm Ridhwan. Nice to meet you.`)
  $(".target").text(`My journey as a programmer started ${yy} year ago. Various programming languages i have dabble and learned during my Journey. From C, C++, C#, Java, Javascript, and Python. I'm quiet most of the time but enthusiastic when talking things i love. Currently looking out to pursue and focus career path as Software Engineer/Developer.`);
});