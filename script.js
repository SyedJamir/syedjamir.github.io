// mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

// scroll reveal
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      // trigger meter fills within this section
      entry.target.querySelectorAll('.meter-fill').forEach(el => {
        el.style.width = el.dataset.fill + '%';
      });
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => io.observe(el));
