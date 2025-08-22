document.addEventListener('DOMContentLoaded', function () {
  const searchToggle = document.querySelector('.header__search-toggle');
  const searchContainer = document.querySelector('.header__search-container');
  const searchInput = searchContainer.querySelector('.search__input');

  searchToggle.addEventListener('click', function () {
    const isExpanded = searchToggle.getAttribute('aria-expanded') === 'true';
    searchToggle.setAttribute('aria-expanded', !isExpanded);
    searchContainer.hidden = isExpanded;
    if (!isExpanded) {
      searchInput.focus();
    }
  });
});