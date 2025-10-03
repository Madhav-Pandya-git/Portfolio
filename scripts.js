// scripts.js

// Wait for DOM and external scripts to load
window.addEventListener('load', () => {
  // Hide loading screen
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.classList.add('fade-out');
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 1000);

  // Initialize Vanta.js NET background
  if (window.VANTA) {
    VANTA.NET({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x0fffea,
      backgroundColor: 0x0a0a0a,
      points: 15.00,
      maxDistance: 20.00,
      spacing: 18.00,
      showDots: true,
      // subtle glow effect
      THREE: window.THREE
    });
  }

  // Initialize skill charts
  initSkillCharts();

  // Setup smooth scrolling for nav links
  setupSmoothScrolling();

  // Setup mobile nav toggle
  setupNavToggle();

  // Setup contact form submission
  setupContactForm();
});

/**
 * Animate radial skill charts using Canvas API
 */
function initSkillCharts() {
  const charts = document.querySelectorAll('.skill-chart');

  charts.forEach(chart => {
    const canvas = chart.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const percent = parseInt(chart.getAttribute('data-percent'), 10);
    const skillName = chart.getAttribute('data-skill');

    // Set canvas size
    const size = 140;
    canvas.width = size * 2;
    canvas.height = size * 2;
    ctx.translate(size, size); // center

    const radius = size - 20;
    const lineWidth = 12;

    // Draw background circle
    function drawBackground() {
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = '#003333';
      ctx.lineWidth = lineWidth;
      ctx.shadowColor = 'transparent';
      ctx.stroke();
    }

    // Draw progress arc
    function drawProgress(progress) {
      const endAngle = (progress / 100) * 2 * Math.PI - 0.5 * Math.PI;
      ctx.beginPath();
      ctx.arc(0, 0, radius, -0.5 * Math.PI, endAngle, false);
      const gradient = ctx.createLinearGradient(-radius, 0, radius, 0);
      gradient.addColorStop(0, '#00ffe7');
      gradient.addColorStop(1, '#ff00ff');
      ctx.strokeStyle = gradient;
      ctx.lineWidth = lineWidth;
      ctx.shadowColor = '#ff00ff';
      ctx.shadowBlur = 15;
      ctx.lineCap = 'round';
      ctx.stroke();
    }

    // Animate from 0 to percent
    let current = 0;
    function animate() {
      ctx.clearRect(-size, -size, size * 2, size * 2);
      drawBackground();
      drawProgress(current);
      // Draw text
      ctx.font = 'bold 28px Orbitron, sans-serif';
      ctx.fillStyle = '#00ffe7';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = '#00ffe7';
      ctx.shadowBlur = 10;
      ctx.fillText(`${Math.round(current)}%`, 0, 0);

      if (current < percent) {
        current += 1.5;
        requestAnimationFrame(animate);
      } else {
        // Draw skill name below canvas (already in HTML)
      }
    }
    animate();
  });
}

/**
 * Smooth scrolling for nav links
 */
function setupSmoothScrolling() {
  const links = document.querySelectorAll('a.nav-link, a.btn');

  links.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile nav if open
        const navToggle = document.getElementById('nav-toggle');
        const navLinks = document.querySelector('.nav-links');
        if (navToggle.classList.contains('active')) {
          navToggle.classList.remove('active');
          navLinks.style.display = 'none';
        }
      }
    });
  });
}

/**
 * Mobile navigation toggle
 */
function setupNavToggle() {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    if (navToggle.classList.contains('active')) {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.background = 'rgba(0, 15, 25, 0.95)';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '60px';
      navLinks.style.right = '1.5rem';
      navLinks.style.borderRadius = '8px';
      navLinks.style.padding = '1rem 2rem';
      navLinks.style.boxShadow = '0 0 15px #00ffe7aa';
      navLinks.style.zIndex = '999';
    } else {
      navLinks.style.display = 'none';
    }
  });

  // Hide nav on resize if desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'row';
      navLinks.style.position = 'static';
      navLinks.style.background = 'transparent';
      navLinks.style.padding = '0';
      navLinks.style.boxShadow = 'none';
      navToggle.classList.remove('active');
    } else {
      navLinks.style.display = 'none';
      navToggle.classList.remove('active');
    }
  });
}

/**
 * Contact form submission handler (mock)
 */
function setupContactForm() {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', e => {
    e.preventDefault();

    // Simple validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Animate button and show success message
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    setTimeout(() => {
      alert(`Thank you, ${name}! Your message has been sent.`);
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }, 1500);
  });
}
