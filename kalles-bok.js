// hent elementer
const nav = document.getElementById('navbar');
const navbar = document.getElementById('navbar-wrapper');


// tab eller klikk funksjon som skal skille mellom tastatur focus (tab tastetrykk) og mus focus (klikk) sån at ramen for tastatur navigerere skal kun vises ved tab tastetrykk
function tabPress(press) {
    if (press.key === 'Tab') {
      document.body.classList.add('keyboard-focus');
      window.removeEventListener('keydown', tabPress);
      window.addEventListener('mousedown', mouseClick);
    }
  }
  
  function mouseClick() {
    document.body.classList.remove('keyboard-focus');
    window.addEventListener('keydown', tabPress);
    window.removeEventListener('mousedown', mouseClick);
  }
  
  window.addEventListener('keydown', tabPress);

  // oppdaterer høyden på navbar-wrapper er en funksjon som skal automatisk oppdatere høyden på .navbar-wrapper når høyden på .navbar emdres under loading og resizing av vinduet
  function updateNavbarWrapperHeight() {
  
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.offsetHeight + 'px';
    const navbarWrapper = document.querySelector('.navbar-wrapper');
    
    navbarWrapper.style.height = navbarHeight;
  }
  
  window.onload = updateNavbarWrapperHeight;
  
  window.onresize = updateNavbarWrapperHeight;

  // Når blar nedover så skal navbaren få en skygge og komprimeres
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY;

  if(scrollPos) {
    if(scrollPos > 10) {
      nav.classList.add('scroll');
    } else {
      nav.classList.remove('scroll');
    }
  }
})