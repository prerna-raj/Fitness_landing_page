const menuIcon = document.querySelector('.fa-bars');
const navItems = document.querySelector('.nav-items');

menuIcon.addEventListener('click', () => {
  navItems.classList.toggle('active');
});
