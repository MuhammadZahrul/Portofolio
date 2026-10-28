/**
 * MUHAMMAD ZAHRUL ATH THARIQ - CLEAN PORTFOLIO INTERACTION LOGIC
 * Minimalist & essential: Scrollspy, Mobile Drawer, Back to Top smooth scroll
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Header Scroll Effect & Scrollspy ---
  const header = document.getElementById('header');
  const backToTopBtn = document.getElementById('back-to-top');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Header styling on scroll
    if (scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Back to top visibility
    if (scrollY > 350) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }

    // Active navigation link tracking
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Back to Top smooth scroll
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // --- 2. Mobile Navigation Drawer ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  mobileToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('open');
    const icon = mobileToggle.querySelector('i');
    if (navMenu?.classList.contains('open')) {
      icon?.classList.replace('fa-bars', 'fa-xmark');
    } else {
      icon?.classList.replace('fa-xmark', 'fa-bars');
    }
  });

  // Close mobile nav when clicking any link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('open');
      mobileToggle?.querySelector('i')?.classList.replace('fa-xmark', 'fa-bars');
    });
  });
});

// ==========================================================================
// LIGHTBOX FUNCTIONS (Gallery Documentation)
// ==========================================================================

/**
 * Opens the fullscreen lightbox with the given image source and caption.
 * @param {string} src - Image URL
 * @param {string} caption - Caption text
 */
function openLightbox(src, caption) {
  const overlay = document.getElementById('lightbox-overlay');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');

  if (!overlay || !img || !cap) return;

  img.src = src;
  img.alt = caption;
  cap.textContent = caption;
  overlay.classList.add('is-active');
  document.body.style.overflow = 'hidden';
}

/**
 * Closes the lightbox modal.
 */
function closeLightbox() {
  const overlay = document.getElementById('lightbox-overlay');
  if (!overlay) return;
  overlay.classList.remove('is-active');
  document.body.style.overflow = '';

  // Clear src after transition to reset
  setTimeout(() => {
    const img = document.getElementById('lightbox-img');
    if (img) img.src = '';
  }, 300);
}

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});
