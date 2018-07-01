// Things to cache

let cache_name = 'currency-v1';
let cache_urls = [
    '/',
    'index.html',
    'style.css',
    'app.js'
    ];

    // For the install
self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(cache_name)
        .then((cache) => cache.addAll(cache_urls) 
    )
    )
});

// for the fetch
self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request)
        })
    )
})