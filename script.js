// ===== Particles background =====
try {
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: '#ffae00' },
      shape: { type: 'circle' },
      opacity: { value: 0.7 },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: '#ffae00', opacity: 0.6, width: 1 },
      move: { enable: true, speed: 3, out_mode: 'out' }
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
      modes: { grab: { distance: 160, line_linked: { opacity: 1 } }, push: { particles_nb: 3 } }
    },
    retina_detect: true
  });
} catch (err) {}

// ===== Mobile menu =====
const nav = document.getElementById('nav');
document.getElementById('menu').addEventListener('click', () => nav.classList.toggle('open'));
nav.addEventListener('click', () => nav.classList.remove('open'));

// ===== Typing effect =====
const words = ['Web Development', 'Android Development', 'Graphic Designing', 'AI Automation'];
let wordIndex = 0, charIndex = 0, deleting = false;
const typingEl = document.getElementById('ty');

(function type() {
  const word = words[wordIndex];
  typingEl.textContent = word.slice(0, charIndex);
  if (!deleting && charIndex === word.length) {
    deleting = true;
    return setTimeout(type, 1200);
  }
  if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }
  charIndex += deleting ? -1 : 1;
  setTimeout(type, deleting ? 40 : 90);
})();

// ===== Scroll-to-top button =====
const upBtn = document.getElementById('up');
window.addEventListener('scroll', () => {
  upBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
});

// ===== Certificate preview =====
const previewBox = document.getElementById('pv');
const previewImg = document.getElementById('pi');
document.querySelectorAll('[data-preview]').forEach(card => {
  card.addEventListener('click', () => {
    previewImg.src = card.querySelector('img').src;
    previewBox.style.display = 'flex';
  });
});
previewBox.addEventListener('click', () => { previewBox.style.display = 'none'; });

// ===== Contact form -> WhatsApp =====
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const text =
    'Name: ' + document.getElementById('n').value +
    '\nEmail: ' + document.getElementById('e').value +
    '\nPhone: ' + document.getElementById('p').value +
    '\nMessage: ' + document.getElementById('m').value;
  window.open('https://wa.me/923045423672?text=' + encodeURIComponent(text), '_blank');
});