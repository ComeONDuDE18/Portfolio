const modal = {
  overlay: document.querySelector('.modal-overlay'),
  openBtn: document.querySelector('.menu-btn'),
  closeBtn: document.querySelector('.modal-close-btn'),
  menuItems: document.querySelectorAll('.menu-item'),
};

const dropdown = {
  menu: document.querySelector('.dropdown'),
  toggleBtn: document.querySelector('.menu-tab'),
};

const showModal = () => (modal.overlay.style.display = 'block');
const hideModal = () => (modal.overlay.style.display = 'none');

modal.openBtn.addEventListener('click', showModal);
modal.closeBtn.addEventListener('click', hideModal);
modal.overlay.addEventListener('click', event => {
  if (event.target === modal.overlay) hideModal();
});
modal.menuItems.forEach(item => item.addEventListener('click', hideModal));

const toggleDropdown = () => dropdown.menu.classList.toggle('hidden');
const hideDropdown = () => dropdown.menu.classList.add('hidden');

dropdown.toggleBtn.addEventListener('click', toggleDropdown);
dropdown.menu.addEventListener('click', toggleDropdown);
document.addEventListener('click', event => {
  if (
    !dropdown.toggleBtn.contains(event.target) &&
    !dropdown.menu.contains(event.target)
  ) {
    hideDropdown();
  }
});
