/* main.js – Simple navigation toggle for mobile */

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('show');
    });
  }

  // Close the mobile menu when a link is clicked (optional)
  const links = navLinks ? navLinks.querySelectorAll('a') : [];
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
      }
    });
  });
});
