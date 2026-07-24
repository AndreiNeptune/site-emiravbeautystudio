/* ═══════════════════════════════════════════════════════
   Inner Pages Entry Point — Loads shared layout + modules
   ═══════════════════════════════════════════════════════ */

import './style.css';
import { initSharedLayout } from './js/shared-layout.js';
import { initNavigation } from './js/navigation.js';
import { initAccordion } from './js/accordion.js';
import { initGallery } from './js/gallery.js';
import { initAnimations } from './js/animations.js';
import { initReviewsCarousel } from './js/reviews.js';
import { initCookieBanner } from './js/cookie-banner.js';
import { initLoadMore } from './js/load-more.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inject shared layout (nav, drawer, footer)
  initSharedLayout();

  // Set current year
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
});
