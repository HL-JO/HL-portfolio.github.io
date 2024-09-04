// Hent elementer
const nav = document.querySelector('#navbar');
const navbar = document.querySelector('#navbar-nav');
const toggle = document.querySelector('#navbar-toggle');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

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

// oppdaterer høyden på navbar-wrapper funksjon som skal automatisk oppdatere høyden på css klassen .navbar-wrapper når høyden på .navbar endres
// NB! den beregner ikke med margin, altså den tar innholdet i .navbar høyde inkludert padding og border
function updateNavbarWrapperHeight() {
  const navbar = document.querySelector('.navbar');
  const navbarHeight = navbar.offsetHeight + 'px';
  const navbarWrapper = document.querySelector('.navbar-wrapper');
  
  navbarWrapper.style.height = navbarHeight;
}

window.onload = updateNavbarWrapperHeight;
window.onresize = updateNavbarWrapperHeight;

// hamburger menu
document.addEventListener('DOMContentLoaded', (event) => {
  const toggle = document.querySelector('#ham_menu');
  const navbar = document.querySelector('#navbar-nav');
  const nav = document.querySelector('#navbar');
  
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navbar.classList.toggle('show');
    nav.classList.toggle('show');
  });
});

// Når blar nedover så skal navbaren få en skygge og komprimeres
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY;

  if (scrollPos) {
    if (scrollPos > 10) {
      nav.classList.add('scroll');
    } else {
      nav.classList.remove('scroll');
    }
  }
});

// Expand section kode som gjør at det kommer elementer når du klikker på en knapp (brukt i navbar navigasjon og utleie sider)
document.addEventListener("DOMContentLoaded", () => {
  const expandButtons = document.querySelectorAll(".expand");

  expandButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const content = button.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        button.classList.remove('expanded');
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        button.classList.add('expanded');
      }
    });
  });
});
