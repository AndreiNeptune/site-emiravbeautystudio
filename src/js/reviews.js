import { reviews } from '../data/reviews.js';

export function initReviewsCarousel() {
  const containers = document.querySelectorAll('.reviews-container-wrapper');
  if (containers.length === 0) return;

  const starsSvg = `
    <svg viewBox="0 0 24 24" fill="currentColor" class="review-star">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  `;

  const googleSvg = `
    <svg viewBox="0 0 48 48" class="google-logo" width="24" height="24">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  `;

  const verifiedSvg = `
    <svg viewBox="0 0 24 24" fill="currentColor" class="verified-icon" width="16" height="16">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#4285F4"/>
    </svg>
  `;

  const generateStars = (count) => {
    return Array(count).fill(starsSvg).join('');
  };

  const getInitials = (name) => {
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  containers.forEach(wrapper => {
    let cardsHtml = '';

    reviews.forEach(review => {
      const isLongText = review.text.length > 150;
      const initialText = isLongText ? review.text.substring(0, 150) + '...' : review.text;
      
      cardsHtml += `
        <div class="review-card">
          <div class="review-header">
            <div class="review-avatar">${getInitials(review.name)}</div>
            <div class="review-meta">
              <h3 class="review-name">${review.name}</h3>
              <div class="review-time">${review.time}</div>
            </div>
            <div class="review-google-icon">${googleSvg}</div>
          </div>
          <div class="review-rating">
            <div class="stars">${generateStars(review.rating)}</div>
            ${verifiedSvg}
          </div>
          <div class="review-content">
            <p class="review-text-short">${initialText}</p>
            ${isLongText ? `<p class="review-text-full" style="display:none;">${review.text}</p>` : ''}
            ${isLongText ? `<button class="read-more-btn">Mai mult</button>` : ''}
          </div>
        </div>
      `;
    });

    wrapper.innerHTML = `
      <div class="reviews-section-header">
        <h2 class="section-title">Clienți mulțumiți</h2>
      </div>
      <div class="reviews-carousel">
        ${cardsHtml}
      </div>
    `;
    
    // Add event listeners for read more buttons
    const readMoreBtns = wrapper.querySelectorAll('.read-more-btn');
    readMoreBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const contentDiv = e.target.closest('.review-content');
        const shortText = contentDiv.querySelector('.review-text-short');
        const fullText = contentDiv.querySelector('.review-text-full');
        
        if (shortText.style.display === 'none') {
          shortText.style.display = 'block';
          fullText.style.display = 'none';
          e.target.textContent = 'Mai mult';
        } else {
          shortText.style.display = 'none';
          fullText.style.display = 'block';
          e.target.textContent = 'Mai puțin';
        }
      });
    });
  });
}
