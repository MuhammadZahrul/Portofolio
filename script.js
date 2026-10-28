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
