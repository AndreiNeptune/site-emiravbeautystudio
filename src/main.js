import '@fontsource/marcellus';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/outfit/300.css';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/500.css';
import '@fontsource/outfit/600.css';
import '@fontsource/outfit/700.css';
/* ═══════════════════════════════════════════════════════
   EMIRA V BEAUTY STUDIO — Main Entry Point
   ═══════════════════════════════════════════════════════ */

import './style.css';
import { initNavigation } from './js/navigation.js';
import { initAccordion } from './js/accordion.js';
import { initGallery } from './js/gallery.js';
import { initAnimations } from './js/animations.js';
import { initReviewsCarousel } from './js/reviews.js';
import { initCookieBanner } from './js/cookie-banner.js';
import { initLoadMore } from './js/load-more.js';

function init() {
  // Set current year in footer
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Initialize modules
  initNavigation();
  initAccordion();
  initGallery();
  initReviewsCarousel();
  initLoadMore();
  initAnimations();
  initCookieBanner();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
