/* ═══════════════════════════════════════════════════════
   Animations — Scroll Reveal via Intersection Observer
   ═══════════════════════════════════════════════════════ */

export function initAnimations() {
  // Reveal elements on scroll
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: show everything
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // Parallax on hero (subtle)
  const heroBg = document.querySelector('.hero__bg img');
  const hero = document.querySelector('.hero');
  
  if (heroBg && hero) {
    let heroHeight = hero.offsetHeight;
    
    // Update height on resize
    window.addEventListener('resize', () => {
      heroHeight = hero.offsetHeight;
    }, { passive: true });

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (scrollY <= heroHeight) {
            heroBg.style.transform = `translateY(${scrollY * 0.15}px) scale(1.05)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
}
