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

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // Affichez un bouton ou une indication visuelle pour permettre à l'utilisateur de déclencher l'installation.

});

// Dans votre fichier JavaScript
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

// Detects if device is on iOS
const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test( userAgent );
}
// Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

// Checks if should display install popup notification:
if (isIos() && !isInStandaloneMode()) {
    this.setState({ showInstallMessage: true });
}