// ===== Slideshow =====
(function() {
  var slides = document.querySelectorAll('.slide_area .slide');
  var current = 0;
  if (!slides.length) return;
  slides[0].classList.add('active');
  setInterval(function() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 8000);
})();

// ===== SP Menu =====
var hamburger = document.querySelector('.hamburger_btn');
var spNav = document.querySelector('.sp_nav');
var spClose = document.querySelector('.sp_nav_close');

if (hamburger) {
  hamburger.addEventListener('click', function() {
    spNav.classList.add('open');
  });
}
if (spClose) {
  spClose.addEventListener('click', function() {
    spNav.classList.remove('open');
  });
}
document.querySelectorAll('.sp_nav a').forEach(function(a) {
  a.addEventListener('click', function() {
    spNav.classList.remove('open');
  });
});

// ===== Page top smooth =====
var pagetop = document.querySelector('.pagetop_area a');
if (pagetop) {
  pagetop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
