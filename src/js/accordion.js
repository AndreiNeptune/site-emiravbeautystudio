/* ═══════════════════════════════════════════════════════
   Accordion — Expand/Collapse Price Tables
   ═══════════════════════════════════════════════════════ */

export function initAccordion() {
  const headers = document.querySelectorAll('.accordion__header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion__item');
      const content = item.querySelector('.accordion__content');
      const inner = content.querySelector('.accordion__inner');
      const isOpen = item.classList.contains('open');

      // Close all other items in the same accordion
      const accordion = item.closest('.accordion');
      accordion.querySelectorAll('.accordion__item.open').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.accordion__content').style.maxHeight = '0';
        }
      });

      // Toggle current
      if (isOpen) {
        item.classList.remove('open');
        content.style.maxHeight = '0';
      } else {
        item.classList.add('open');
        content.style.maxHeight = inner.scrollHeight + 'px';
      }
    });
  });

  // Auto-open first item
  document.querySelectorAll('.accordion').forEach(accordion => {
    const firstItem = accordion.querySelector('.accordion__item');
    if (firstItem) {
      firstItem.classList.add('open');
      const content = firstItem.querySelector('.accordion__content');
      const inner = content.querySelector('.accordion__inner');
      // Use setTimeout to avoid forced synchronous layout (reflow thrashing) during initial paint
      setTimeout(() => {
        content.style.maxHeight = inner.scrollHeight + 'px';
      }, 0);
    }
  });
}
