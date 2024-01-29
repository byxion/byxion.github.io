const staticPhoneStore = "phone-store-site-v1"
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/phone1.jpg",
    "/images/phone2.jpg",
    "/images/phone3.jpg",
    "/images/phone4.jpg",
    "/images/phone5.jpg",
    "/images/phone6.jpg",
    "/images/phone7.jpg",
    "/images/phone8.jpg",
    "/images/phone9.jpg",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticPhoneStore).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})