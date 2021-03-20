const menuBtn = document.getElementById('mobileMenu');
const navBar = document.getElementById('navigation');

const toggleNav = () => {
  if(navBar.offsetParent != null) {
    navBar.classList.add("mobileHidden");
    menuBtn.innerHTML = 'Menu';
    return;
  }
  navBar.classList.remove("mobileHidden");
  menuBtn.innerHTML = 'Close';
  return;
};

menuBtn.addEventListener("click", toggleNav);
