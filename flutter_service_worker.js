'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-512.png": "70e9989024de98e3f3bca2cd0bfcb309",
"icons/Icon-maskable-512.png": "70e9989024de98e3f3bca2cd0bfcb309",
"icons/Icon-192.png": "cfc43960aa07cbe0ffa873e920f7c83c",
"icons/Icon-maskable-192.png": "cfc43960aa07cbe0ffa873e920f7c83c",
"manifest.json": "9c73788c2293c6274d188e7a7a1ab396",
"index.html": "e33cb965eb0bf65a5e2ef51edeef237d",
"/": "e33cb965eb0bf65a5e2ef51edeef237d",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "0e908d61be6c5f5628c15f7728aecbad",
"assets/assets/CV-Beshoy-Reda-Aug.pdf": "1cd3e0dadc4a20f29619862a526a101d",
"assets/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/AssetManifest.bin.json": "d53abe0876f9d4bc5e062d3cc92a7275",
"assets/assets/assets/icons/postman.svg": "617725c21054c907cb491a8d0be1b59c",
"assets/assets/assets/icons/dart.svg": "b1f48f6713cd7c04178b6ec674dadc74",
"assets/assets/assets/icons/github.svg": "ec752cadf7039a5172a2baabcd344fdb",
"assets/assets/assets/icons/flutter.svg": "c508056d2febf9247180823d24623208",
"assets/assets/assets/icons/figma.svg": "89dbeb0ea93fc76e09cd89878002e5a1",
"assets/assets/assets/icons/git.svg": "1be52e2977ef5c6bbf729e64eb62d707",
"assets/assets/assets/icons/firebase.svg": "fe27e7ef702fe392d7852d5092df5154",
"assets/assets/assets/CV-Beshoy-Reda-Aug.pdf": "1cd3e0dadc4a20f29619862a526a101d",
"assets/assets/assets/images/exam.png": "d4e5b00f720ac4cf8d247060d330784f",
"assets/assets/assets/images/fitness.png": "f891e99eb1a2166696de3099b8735c23",
"assets/assets/assets/images/flowery_tracking.png": "e30a4edc58a6d3a780095ab5ed915212",
"assets/assets/assets/images/behavior_student.png": "b4737eefd044ffd5aa1628c99255bce0",
"assets/assets/assets/images/flower.png": "10b61052da4ca86e57d2fb6946bea93f",
"assets/assets/assets/images/profile.png": "75b6e84f8f2c37934adbe0669b085436",
"assets/assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/assets/lottie/hand_wave.json": "2f91e276cee0fa2546ae0356b664fae7",
"assets/assets/fonts/MaterialIcons-Regular.otf": "4b28bf2bde792459293e99466335cf93",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/lottie/hand_wave.json": "2d27b677f9e5cda3a91bd25f9f788cc0",
"assets/assets/NOTICES": "4fbd33e73be20f4f72b6bdfef6b174f5",
"assets/assets/FontManifest.json": "9290dbaf22d7c08d4e05012515ff3036",
"assets/assets/AssetManifest.bin": "2fd46f830daac4e7cff97517a55f426b",
"assets/assets/AssetManifest.json": "954166e53b5909f1332ae660b786eca0",
"assets/fonts/MaterialIcons-Regular.otf": "4b28bf2bde792459293e99466335cf93",
"assets/NOTICES": "950e878302d4055b4a69be96af0b4f92",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/panara_dialogs/assets/info.png": "e4bb5858c90ab48c72f11ba44bb26b5b",
"assets/packages/panara_dialogs/assets/confirm.png": "acf806139cb7c12e09fc5ca1185b8a2f",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/reactive_theme/assets/moon-fill.png": "6477d78f34d92d97a54ba60daf7ac99d",
"assets/packages/reactive_theme/assets/sun-fill.png": "9f18372ccd39a91d08d3e3975c0085a7",
"assets/packages/enefty_icons/lib/assets/fonts/icons/EneftyIcons.ttf": "fbe1330e9a1fb21b67a9545a1e28dde0",
"assets/FontManifest.json": "9389a5761946733a6e5b1d3bf7ad0f39",
"assets/AssetManifest.bin": "b829b8d54c53ca55ac0682cb5ea30910",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"favicon.png": "5f2e54b1dde4c9b80512699b9919682b",
"flutter_bootstrap.js": "88c48c98a93993bdbf073c7bc86289ec",
"version.json": "9b818ca9511483c901bed1545384376c",
"main.dart.js": "3cc703c605acbcd0004639103def57bc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
