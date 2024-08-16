const rigtOpen = document.querySelector(".right");
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    rigtOpen.classList.add('right-open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    rigtOpen.classList.remove('right-open');
    menuOpen = false;
  }
});