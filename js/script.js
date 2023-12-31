const title = new SplitType('#title');

gsap.to('.char',  {
  y:0,
  stagger: 0.05,
  delay: 0.2,
  duration: 0.1
});

window.onscroll = function() {
  let navbar = document.getElementById('nav'); // Replace 'yourNavbarID' with the actual ID of your navbar

  // Get the scroll position
  let scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Set the opacity based on the scroll position
  navbar.style.opacity = scrollPosition > 100 ? "1" : "0"; // Adjust the scroll position value as needed
};


  var navLinks = document.querySelectorAll('nav ul li a');
  var sections = document.querySelectorAll('main section');

  function highlightNav() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    sections.forEach(function(section, index) {
      var top = section.offsetTop;
      var bottom = top + Math.max(section.offsetHeight, 50);
      console.log(section.offsetHeight);

      if (scrollPosition >= top && scrollPosition < bottom) {
        navLinks.forEach(function(link) {
          link.classList.remove('active');
        });
        navLinks[index].classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', highlightNav);
