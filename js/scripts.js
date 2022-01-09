/* ------------MOBILE MENU------------ */
const btnMenu = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-menu');

let menuOpen = false;

const openMenu = () => {
  if (!menuOpen) {
    btnMenu.src = 'assets/images/icon-close.svg';
    menu.style.display = 'block';
    document.body.style.overflow = 'hidden';
    menuOpen = true;
  } else {
    btnMenu.src = 'assets/images/icon-hamburger.svg';
    menu.style.display = 'none';
    document.body.style.overflow = 'visible';
    menuOpen = false;
    //recarga la página, tambien "window.location.reload()"
    window.location.href = window.location.href;
  }
};

btnMenu.addEventListener('click', openMenu);