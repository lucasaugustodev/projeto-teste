// Mobile menu toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navActions = document.querySelector('.nav-actions');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
  menuOpen = !menuOpen;
  menuBtn.classList.toggle('active', menuOpen);

  if (menuOpen) {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '72px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'rgba(10,10,15,0.95)';
    navLinks.style.padding = '24px';
    navLinks.style.gap = '16px';
    navLinks.style.backdropFilter = 'blur(20px)';
    navLinks.style.borderBottom = '1px solid var(--border)';

    navActions.style.display = 'flex';
    navActions.style.position = 'absolute';
    navActions.style.top = 'calc(72px + ' + navLinks.offsetHeight + 'px)';
    navActions.style.left = '0';
    navActions.style.right = '0';
    navActions.style.background = 'rgba(10,10,15,0.95)';
    navActions.style.padding = '0 24px 24px';
    navActions.style.backdropFilter = 'blur(20px)';
    navActions.style.borderBottom = '1px solid var(--border)';
  } else {
    navLinks.style = '';
    navActions.style = '';
  }
});

// Scroll animations - reveal elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.feature-card, .agent-card, .step, .price-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Add revealed class styles
const style = document.createElement('style');
style.textContent = '.revealed { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);

// Stagger animations for grid items
document.querySelectorAll('.features-grid, .agents-grid, .pricing-grid').forEach(grid => {
  const gridObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const children = entry.target.children;
        Array.from(children).forEach((child, i) => {
          child.style.transitionDelay = `${i * 0.1}s`;
        });
        gridObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  gridObserver.observe(grid);
});

// Header background on scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.style.borderBottomColor = 'rgba(30,30,46,0.8)';
  } else {
    header.style.borderBottomColor = 'var(--border)';
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu if open
      if (menuOpen) {
        menuOpen = false;
        menuBtn.classList.remove('active');
        navLinks.style = '';
        navActions.style = '';
      }
    }
  });
});
