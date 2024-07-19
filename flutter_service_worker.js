'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1ba91b8b480fb952f040d859dcf6813f",
"index.html": "c3387bf5e168cd9a41c6902c1393a7f3",
"/": "c3387bf5e168cd9a41c6902c1393a7f3",
"firebase-messaging-sw.js": "0cf3da066e35cf60f9e58da284751326",
"main.dart.js": "049f4f1bbd7cb9bbfe1a771551264138",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"README.md": "5a72585d949206b3245bf2d5de315227",
"favicon.png": "76022f5cb3ba8f2529843308cb0e146b",
"icons/Icon-192.png": "c681a93f6623f41435ab3d620c7a0887",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "ac4a307b28d8b0ccb5febb88a4e47b9e",
"manifest.json": "1d784698403498dfd9b0ad024a2763f3",
".git/config": "2fa34571a6ee590f48de9336c33c0a01",
".git/objects/pack/pack-e0ba401fb15ebc463835094246b722da8dfabdab.pack": "d018d383c02c0723d58e01a1466f567c",
".git/objects/pack/pack-e0ba401fb15ebc463835094246b722da8dfabdab.idx": "448c5f803781f2f7c795d1f9e631e1c6",
".git/objects/pack/pack-e0ba401fb15ebc463835094246b722da8dfabdab.rev": "129ab18a6d14247fd89b3ce9c673a8b3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ed330cd3cb8f941f963407c3ec321147",
".git/logs/refs/heads/main": "ed330cd3cb8f941f963407c3ec321147",
".git/logs/refs/remotes/origin/HEAD": "ed330cd3cb8f941f963407c3ec321147",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "75bbed424d7a91ff49f713cd0d0415b3",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/index": "916468e72633ff7f390f966812a73a0a",
".git/packed-refs": "58ae98a83a7e59073919cff6eb5dab21",
"assets/dotenv": "58ebe20f6d143a887ac7e33a3e0fe26e",
"assets/AssetManifest.json": "50066d7c3c96575a37714c64b11ff484",
"assets/NOTICES": "37ad438dc944dec31ecf26cea8b8d241",
"assets/FontManifest.json": "0994731c066581070391c077bd607e19",
"assets/AssetManifest.bin.json": "2ee105e7e3f02e8fda6e4842ec87d658",
"assets/packages/iamport_flutter/assets/images/iamport-logo.png": "2face5c40217bba082ef64aa5c66e9b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "90730740554e1885b95314105f02c665",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "78736212556cc9a82f076f9a7a9e4d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bf9098238b47cb0cb60e251e89d56786",
"assets/packages/flutter_credit_card/icons/discover.png": "62ea19837dd4902e0ae26249afe36f94",
"assets/packages/flutter_credit_card/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/flutter_credit_card/icons/visa.png": "f6301ad368219611958eff9bb815abfe",
"assets/packages/flutter_credit_card/icons/hipercard.png": "921660ec64a89da50a7c82e89d56bac9",
"assets/packages/flutter_credit_card/icons/elo.png": "ffd639816704b9f20b73815590c67791",
"assets/packages/flutter_credit_card/icons/amex.png": "f75cabd609ccde52dfc6eef7b515c547",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/unionpay.png": "87176915b4abdb3fcc138d23e4c8a58a",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5bf8ef128c472328a30f803ce6e506cb",
"assets/fonts/MaterialIcons-Regular.otf": "77391301ba011852287a7b8b434b15da",
"assets/assets/images/Rectangle_10.png": "2214e498d4b8b9f0a73f94c9045fd657",
"assets/assets/images/Rectangle_7_(1).png": "c62bf1d1c7d454bda3504b186baacc58",
"assets/assets/images/soomin1.jpeg": "7bf9bcf57aa443789623b2aa237e381e",
"assets/assets/images/Rectangle_7.png": "c62bf1d1c7d454bda3504b186baacc58",
"assets/assets/images/Main2.png": "8361fff8b3099bdc039deeb5e8ed585c",
"assets/assets/images/Main3.png": "a5ec4357ba3c271efd9f6a87604054f4",
"assets/assets/images/Main1.png": "2a08b9bdf6d44c6d65a6b3d6a9fce1bd",
"assets/assets/images/Frame_26.png": "43b02c682c09cf7b4fed90012caf234a",
"assets/assets/images/Rectangle_8_(1).png": "c62bf1d1c7d454bda3504b186baacc58",
"assets/assets/images/logo.png": "76022f5cb3ba8f2529843308cb0e146b",
"assets/assets/images/Rectangle_9.png": "57417a468d515420c99c3725f408aed9",
"assets/assets/images/Rectangle_8.png": "c62bf1d1c7d454bda3504b186baacc58",
"assets/assets/images/uploadImage.png": "80a639a2cabf74333a3b8c8a7c282d32",
"assets/assets/images/Animation_-_1710997538305.gif": "4a112db326fbcee3a1be6a387eb475dc",
"assets/assets/images/soomin2.jpeg": "87016f0558ed803234b1156e9e7b7550",
"assets/assets/images/Rectangle_19.png": "62f22d1739d453b162d11d6f25fca759",
"assets/assets/lottie/vs.json": "7418369c6841cb355a416b9e2a19346b",
"assets/assets/lottie/sword.json": "fddbcc3304c4b0fdf2be064abaa88556",
"assets/assets/fonts/NanumGothicBold.ttf": "0c2ca147bcb8d81b0c38f7a321dda093",
"assets/assets/data/firebase.json": "fa54be24c8177c7d42a3fca4fb5a0021",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
