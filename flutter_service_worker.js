'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "93408699fa5da00e503841ba5177099e",
"/main.dart.js": "25f12451510a5d9f459b80dabc2889c9",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "b1972d39cf680fc1b18fc8709df25335",
"/assets/res/images/dashboard-shift-empty-state.svg": "f8f2d280b34e350b84f802fa6a3963fb",
"/assets/res/images/coffee-shop-background.jpg": "1fa278aaeaad3d1ae136b277a38f20e8",
"/assets/res/images/shift-check-action-illustration.svg": "dfac6dc86b975370f05ff64dbdb58b04",
"/assets/res/images/shift-break-illustration.svg": "edd32b5a5e89e4cae93b410f852f81d1",
"/assets/res/images/logo.svg": "a4b8a4dcb1ce2f4bbd8b26fe79cc6044",
"/assets/res/fonts/AvenirNext-DemiBold.ttf": "3a4f6e40f9bfeaa4789739bdaaf741a1",
"/assets/res/fonts/AvenirNext-Regular.ttf": "1b897b3b4aab41a7239cdfecc7dfa831",
"/assets/res/fonts/AvenirNext-Heavy.ttf": "adacd99af5c095f3d4b37d4dff6c04c1",
"/assets/res/fonts/AvenirNext-Medium.ttf": "13dc2711ff71c79de4a1445e2f4e8a4d",
"/assets/res/fonts/AvenirNext-Bold.ttf": "cb9660fe5af02eadbe46cc9f819587e7",
"/assets/res/fonts/AvenirNext-Light.ttf": "e90a773f5d3ad65cc77f224c8de7be57",
"/assets/LICENSE": "f820a078f8784bee11afc155ffcffc6b",
"/assets/AssetManifest.json": "dd2ad676ce9ee78f37d163c201948fc0",
"/assets/FontManifest.json": "b9fcc3902b30ae3a41bf48ee292f17bd",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/open_iconic_flutter/assets/open-iconic.woff": "3cf97837524dd7445e9d1462e3c4afe2",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
