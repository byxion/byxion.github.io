// TypeWriter effect
const animh1 = document.getElementById('toWrite');

new Typewriter(animh1, {
})
.pauseFor(1300)
.changeDelay(50)
.typeString("Dév Full-Stack ")
.pauseFor(200)
.deleteChars(11)
.typeString("<span style='color: #FF5154'>HTML</span> / <span style='color: #2D7DD2'>CSS</span> ")
.pauseFor(200)
.deleteChars(11)
.typeString("<span style='color: #FAFF7F'>JavaScript</span> ")
.pauseFor(200)
.deleteChars(11)
.typeString("<span style='color: #91A6FF'>PHP</span>.")
.pauseFor(200)
.start()

const welcome = document.querySelector('.welcome');
const followCircle = document.querySelector('.followCircle');
const nameToAdd = document.querySelector('#int');

let isHovering = false; 

welcome.addEventListener('mousemove', e => {
  let x = e.pageX - followCircle.clientWidth / 2;
  let y = e.pageY - followCircle.clientHeight / 2;
  
  // Vérifie que le cercle ne dépasse pas la limite de l'écran
  const maxX = welcome.clientWidth - followCircle.clientWidth;
  const maxY = welcome.clientHeight - followCircle.clientHeight;
  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  followCircle.style.left = `${x}px`;
  followCircle.style.top = `${y}px`;

  nameToAdd.addEventListener('mouseover', e => {
    followCircle.style.opacity = `0.4`;
  });
});

welcome.addEventListener('mouseleave', e => {
  followCircle.style.left = `-200px`;
  followCircle.style.top = `-200px`;
});

const toAboutButton = document.querySelector('.toAbout');
const toAbout = document.querySelector('.about');

toAboutButton.addEventListener('click', e => {
  toAbout.scrollIntoView({behavior: "smooth"});
})


// nameToAdd.addEventListener("mouseenter", function() {
//   nameToAdd.style.animation = "m";
// });

