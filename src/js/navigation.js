/* ═══════════════════════════════════════════════════════
   Navigation — Sticky Navbar, Mega Menu, Mobile Drawer
   ═══════════════════════════════════════════════════════ */

export function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const burger = document.querySelector('.navbar__burger');
  const drawer = document.querySelector('.mobile-drawer');
  const closeBtn = document.querySelector('.mobile-drawer__close');
  const overlay = document.querySelector('.mobile-drawer__overlay');
  const drawerLinks = document.querySelectorAll('.mobile-drawer__link, .mobile-drawer__submenu a');
  const servicesTrigger = document.querySelector('.navbar__services-trigger');

  // Sticky navbar on scroll
  if (navbar) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // Mobile drawer
  function openDrawer() {
    drawer?.classList.add('open');
    burger?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer?.classList.remove('open');
    burger?.classList.remove('open');
    document.body.style.overflow = '';
  }

  burger?.addEventListener('click', () => {
    if (drawer?.classList.contains('open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  closeBtn?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer?.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Mega menu (desktop) toggle on click
  if (servicesTrigger) {
    const triggerLink = servicesTrigger.querySelector('.navbar__link');
    
    servicesTrigger.addEventListener('click', (e) => {
      // Prevent link from navigating if we click the trigger
      if (e.target.closest('.navbar__link') === triggerLink) {
        e.preventDefault();
      }
      servicesTrigger.classList.toggle('open');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!servicesTrigger.contains(e.target)) {
        servicesTrigger.classList.remove('open');
      }
    });
  }

  // Active nav link based on URL
  const currentPath = window.location.pathname;
  document.querySelectorAll('.navbar__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '/' && href === '/index.html') || (currentPath === '/index.html' && href === '/')) {
      link.classList.add('active');
    }
  });
}
