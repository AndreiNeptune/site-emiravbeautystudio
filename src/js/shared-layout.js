/* ═══════════════════════════════════════════════════════
   Shared Layout — Injects navbar and footer into pages
   ═══════════════════════════════════════════════════════ */

export function initSharedLayout() {
  // Insert navbar
  const navPlaceholder = document.getElementById('shared-nav');
  if (navPlaceholder) {
    navPlaceholder.outerHTML = getNavbarHTML();
  }

  // Insert mobile drawer
  const drawerPlaceholder = document.getElementById('shared-drawer');
  if (drawerPlaceholder) {
    drawerPlaceholder.outerHTML = getDrawerHTML();
  }

  // Insert footer
  const footerPlaceholder = document.getElementById('shared-footer');
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = getFooterHTML();
  }
}

function getNavbarHTML() {
  return `
  <nav class="navbar" id="navbar">
    <div class="container">
      <div class="navbar__inner">
        <a href="/" class="navbar__logo" aria-label="Emira V Beauty Studio - Acasă">
          <img src="/images/gallery/Asset-1-sm.webp" alt="Emira V Beauty Studio" width="108" height="40" style="height: 40px; width: auto; object-fit: contain;">
        </a>
        <div class="navbar__mobile-brand">Emira V<br>Beauty Studio</div>
        <div class="navbar__links">
          <a href="/" class="navbar__link">Acasă</a>
          <div class="navbar__services-trigger">
            <span class="navbar__link">Servicii <span class="chevron"></span></span>
            <div class="mega-menu">
              <a href="/manichiura" class="mega-menu__item">
                <div class="mega-menu__text"><h4>Manichiură</h4><p>Clasic, semi, gel, construcție</p></div>
              </a>
              <a href="/pedichiura" class="mega-menu__item">
                <div class="mega-menu__text"><h4>Pedichiură</h4><p>Pedichiură clasică și SPA</p></div>
              </a>
              <a href="/epilare-cu-ceara" class="mega-menu__item">
                <div class="mega-menu__text"><h4>Epilare cu Ceară</h4><p>Full Body 230 RON</p></div>
              </a>
              <a href="/cosmetica" class="mega-menu__item">
                <div class="mega-menu__text"><h4>Cosmetică & Tratamente Faciale</h4><p>Pensat, vopsit, Hifu, Microneedling</p></div>
              </a>
              <a href="/spalat-coafat" class="mega-menu__item">
                <div class="mega-menu__text"><h4>Coafor — Spălat & Coafat</h4><p>Spălat profesional, uscat și coafat</p></div>
              </a>
              <a href="/vopsit-tratamente" class="mega-menu__item">
                <div class="mega-menu__text"><h4>Coafor — Vopsit & Tratamente Păr</h4><p>Vopsit, decolorare, suvițe, balayage</p></div>
              </a>
            </div>
          </div>
          <a href="/galerie" class="navbar__link">Galerie</a>
          <a href="/despre-noi" class="navbar__link">Despre Noi</a>
          <a href="/contact" class="navbar__link">Contact</a>
        </div>
        <div class="navbar__cta">
          <a href="https://cal.com/emira-v-beauty" target="_blank" rel="noopener" class="btn btn--gold">Programează-te</a>
        </div>
        <button class="navbar__burger" id="burger" aria-label="Deschide meniul" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>`;
}

function getDrawerHTML() {
  return `
  <div class="mobile-drawer" id="mobile-drawer">
    <div class="mobile-drawer__overlay"></div>
    <div class="mobile-drawer__panel">
      <button class="mobile-drawer__close" aria-label="Închide meniul">✕</button>
      <div class="mobile-drawer__logo"><img src="/images/gallery/Asset-1-sm.webp" alt="Emira V Beauty Studio" width="108" height="40" style="height: 40px; width: auto; object-fit: contain;"></div>
      <nav class="mobile-drawer__nav">
        <a href="/" class="mobile-drawer__link">Acasă</a>
        
        <div class="mobile-drawer__accordion-item">
          <button class="mobile-drawer__services-trigger" aria-expanded="false">
            <span>Servicii</span>
            <span class="chevron"></span>
          </button>
          <div class="mobile-drawer__submenu">
            <div class="mobile-drawer__submenu-inner">
              <a href="/manichiura">Manichiură</a>
              <a href="/pedichiura">Pedichiură</a>
              <a href="/epilare-cu-ceara">Epilare cu Ceară</a>
              <a href="/cosmetica">Cosmetică & Tratamente Faciale</a>
              <a href="/spalat-coafat">Coafor — Spălat & Coafat</a>
              <a href="/vopsit-tratamente">Coafor — Vopsit & Tratamente Păr</a>
            </div>
          </div>
        </div>

        <a href="/galerie" class="mobile-drawer__link">Galerie</a>
        <a href="/despre-noi" class="mobile-drawer__link">Despre Noi</a>
        <a href="/contact" class="mobile-drawer__link">Contact</a>
      </nav>
      <div class="mobile-drawer__cta">
        <a href="https://cal.com/emira-v-beauty" target="_blank" rel="noopener" class="btn btn--gold" style="width:100%;">Programează-te</a>
      </div>
      <div class="mobile-drawer__contact">
        <p><strong>Adresă:</strong> Str. Grădinarilor 30, Pantelimon, Ilfov</p>
        <p><strong>Telefon:</strong> <a href="tel:+40751666222">0751 666 222</a></p>
        <p><strong>Program:</strong> L–S: 10:00–21:00 · D: Închis</p>
      </div>
    </div>
  </div>`;
}

function getFooterHTML() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <img src="/images/gallery/Asset-1-sm.webp" alt="Emira V Beauty Studio" width="108" height="40" style="height: 40px; width: auto; object-fit: contain;">
          <p>Salon de înfrumusețare: manichiură & pedichiură, coafor & vopsit, cosmetică, tratamente faciale, epilare cu ceară.</p>
          <div class="social-links" style="margin-top: 1.5rem;">
            <a href="https://www.instagram.com/emiravbeautystudio/" target="_blank" rel="noopener" aria-label="Instagram" style="color: var(--color-accent); font-size: 1.5rem; display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
          <div style="margin-top: 1.5rem; border-radius: 8px; overflow: hidden; height: 160px; max-width: 250px;">
            <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=Strada%20Gradinarilor%2030%2C%20Pantelimon&t=&z=15&ie=UTF8&iwloc=&output=embed" title="Harta Google Maps - Emira V Beauty Studio"></iframe>
          </div>
        </div>
        <div>
          <p class="footer__title">Servicii</p>
          <div class="footer__links">
            <a href="/manichiura">Manichiură</a>
            <a href="/pedichiura">Pedichiură</a>
            <a href="/epilare-cu-ceara">Epilare cu Ceară</a>
            <a href="/cosmetica">Cosmetică & Tratamente Faciale</a>
            <a href="/spalat-coafat">Coafor — Spălat & Coafat</a>
            <a href="/vopsit-tratamente">Coafor — Vopsit & Tratamente Păr</a>
          </div>
        </div>
        <div>
          <p class="footer__title">Legal</p>
          <div class="footer__links">
            <a href="/politica-de-confidentialitate">Politica de Confidențialitate</a>
            <a href="/politica-cookie">Politica de Cookie-uri</a>
            <a href="/termeni-si-conditii">Termeni și Condiții</a>
            <div class="footer__legal-badges">
              <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="nofollow noopener"><img src="/images/anpc-sal.svg" alt="SAL" width="180" height="60"></a>
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="nofollow noopener"><img src="/images/anpc-sol.svg" alt="SOL" width="180" height="60"></a>
            </div>
          </div>
        </div>
        <div class="footer__contact">
          <p class="footer__title">Contact</p>
          <p><strong>Telefon:</strong> <a href="tel:+40751666222">0751 666 222</a></p>
          <p><strong>Adresă:</strong> Str. Grădinarilor 30, Pantelimon, Ilfov</p>
          <p><strong>Program L–S:</strong> 10:00–21:00</p>
          <p><strong>Program D:</strong> Închis</p>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__legal-info">
          <p>© 2025 Emira V Beauty Studio | Sediu: Str. Grădinarilor 30, 077145 Pantelimon</p>
        </div>
        <div class="footer__attribution">
          <p><a href="https://upscaleinnovation.com/" target="_blank" rel="noopener">Powered by Upscale Innovation Group</a></p>
        </div>
      </div>
    </div>
  </footer>
  
  <!-- Floating WhatsApp Button -->
  <a onclick="dataLayer.push({'event': 'btn_whatsapp'});" href="https://wa.me/40751666222" class="floating-wa" target="_blank" rel="noopener" aria-label="Contactează-ne pe WhatsApp">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133-.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  </a>`;
}
