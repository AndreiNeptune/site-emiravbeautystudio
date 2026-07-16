export function initLoadMore() {
  const grids = document.querySelectorAll('.service-grid');

  grids.forEach(grid => {
    const items = Array.from(grid.querySelectorAll('.service-grid__item'));
    const loadMoreContainer = grid.nextElementSibling?.classList.contains('load-more-container') 
      ? grid.nextElementSibling 
      : null;
    const loadMoreBtn = loadMoreContainer ? loadMoreContainer.querySelector('.load-more-btn') : null;

    if (!items.length) return;

    let visibleCount = 5;

    // Show initial 5 items
    items.forEach((item, index) => {
      if (index < visibleCount) {
        item.classList.add('visible');
      }
    });

    // Show load more container if more than 5 items
    if (items.length > visibleCount && loadMoreContainer) {
      loadMoreContainer.style.display = 'block';
    }

    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        const nextCount = visibleCount + 5;

        // Show next batch
        items.forEach((item, index) => {
          if (index >= visibleCount && index < nextCount) {
            item.classList.add('visible');
          }
        });

        visibleCount = nextCount;

        // Hide button if all items are visible
        if (visibleCount >= items.length) {
          loadMoreContainer.style.display = 'none';
        }
      });
    }
  });
}
