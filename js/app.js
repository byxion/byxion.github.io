const container = document.querySelector(".container")
const phones = [
    { name: "IphoneX", image: "images/phone1.jpg" },
    { name: "IphoneXS", image: "images/phone2.jpg" },
    { name: "Iphone11", image: "images/phone3.jpg" },
    { name: "Iphone11Pro", image: "images/phone4.jpg" },
    { name: "Iphone12", image: "images/phone5.jpg" },
    { name: "Iphone12Pro", image: "images/phone6.jpg" },
    { name: "Iphone13", image: "images/phone7.jpg" },
    { name: "Iphone13Pro", image: "images/phone8.jpg" },
    { name: "Iphone14", image: "images/phone9.jpg" },
]

const showPhones = () => {
    let output = ""
    phones.forEach(
        ({ name, image }) =>
            (output += `
              <div class="card">
                <img class="card--avatar" src=${image} alt="phone" />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Technology</a>
              </div>
              `)
    )
    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showPhones)

// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;

function showInstallPromotion() {

}

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can install the PWA
    showInstallPromotion();
    // Optionally, send analytics event that PWA install promo was shown.
    console.log(`'beforeinstallprompt' event was fired.`);
});

// Déclenchez l'installation (par exemple, en réponse à un clic sur un bouton)
document.getElementById('bouton-installation').addEventListener('click', (e) => {
    e.preventDefault();
    deferredPrompt.prompt();
});
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered", res))
            .catch(err => console.log("service worker not registered", err))
    })
}