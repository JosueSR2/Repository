// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
});

function animCursor() {
  cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
  requestAnimationFrame(animCursor);
}

animCursor();

// Scroll fade-in
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

// Nav active
window.addEventListener('scroll', () => {
  document.querySelectorAll('nav a').forEach(a => {
    const sec = document.querySelector(a.getAttribute('href'));
    if (!sec) return;
    const r = sec.getBoundingClientRect();
    if (r.top <= 120 && r.bottom >= 0) {
      a.style.color = 'var(--text)';
    } else {
      a.style.color = '';
    }
  });
});
