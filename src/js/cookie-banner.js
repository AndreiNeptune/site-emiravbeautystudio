export function initCookieBanner() {
  const cookieName = 'elysia_cookies_accepted';
  const hasConsented = localStorage.getItem(cookieName);

  if (hasConsented) return;

  const bannerHTML = `
    <div class="cookie-banner" id="cookie-banner">
      <div class="cookie-banner__content">
        <p>Folosim cookie-uri pentru a vă asigura cea mai bună experiență pe site-ul nostru. Pentru mai multe detalii, vă rugăm să consultați <a href="/politica-cookie">Politica de Cookie-uri</a>.</p>
      </div>
      <div class="cookie-banner__actions">
        <button class="cookie-banner__btn cookie-banner__btn--reject" id="cookie-reject">Refuză</button>
        <button class="cookie-banner__btn cookie-banner__btn--accept" id="cookie-accept">Acceptă</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', bannerHTML);

  const banner = document.getElementById('cookie-banner');
  const btnAccept = document.getElementById('cookie-accept');
  const btnReject = document.getElementById('cookie-reject');

  // Show banner with a small delay for animation
  setTimeout(() => {
    banner.classList.add('show');
  }, 500);

  btnAccept.addEventListener('click', () => {
    localStorage.setItem(cookieName, 'true');
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function() { window.dataLayer.push(arguments); };
    window.gtag('consent', 'update', {
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted',
      'analytics_storage': 'granted'
    });
    hideBanner();
  });

  btnReject.addEventListener('click', () => {
    localStorage.setItem(cookieName, 'false');
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function() { window.dataLayer.push(arguments); };
    window.gtag('consent', 'update', {
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'analytics_storage': 'denied'
    });
    hideBanner();
  });

  function hideBanner() {
    banner.classList.remove('show');
    setTimeout(() => {
      banner.remove();
    }, 300); // Wait for transition to finish
  }
}
