'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "033634e0b4c48cb7a4a05b513314eab2",
"assets/AssetManifest.bin.json": "d53abe0876f9d4bc5e062d3cc92a7275",
"assets/AssetManifest.json": "0b078726e25461603fbfdcc3c8132991",
"assets/assets/CV-Beshoy-Reda-Aug.pdf": "1cd3e0dadc4a20f29619862a526a101d",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/icons/c-plus-plus-50.png": "2af2fb1cd7db7a5d57e4ac3c50083725",
"assets/assets/icons/dart.png": "918e7c35823c7ad268ba831c6e7eaa64",
"assets/assets/icons/firebase.png": "615d981501dfe5ae041209a6036a69a0",
"assets/assets/icons/flutter.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/assets/icons/icons8-app-store-50.png": "d9e83a321d18fdc54085aef1aa9f9d92",
"assets/assets/icons/icons8-git-48.png": "5b2255699fcb506b570720cdbc8ade1b",
"assets/assets/icons/icons8-github-50.png": "add631b638f2680caf976d349e2db7e0",
"assets/assets/icons/icons8-google-play-store-50.png": "c1852044abf7a16f0b138e4a6f0ffe98",
"assets/assets/icons/icons8-linux-48.png": "e1e82f42a889005f38806051f50b58c9",
"assets/assets/icons/icons8-nestjs-48.png": "619aac0de811fa585a0cc99cce9fabee",
"assets/assets/icons/icons8-python-48.png": "6841951dd3623f17a3f6a880c3f4f0a0",
"assets/assets/icons/icons8-sql-48.png": "9236a01770375143ba19a0b37209ae75",
"assets/assets/icons/icons8-typescript-50.png": "3c03f055d0114a8b53f1cbf23b0fb70c",
"assets/assets/icons/icons8-video-48.png": "8c95e0b6cf17cca047714d67ebd52306",
"assets/assets/icons/java.png": "7013d3cd840b6bed9697daf954c4c3e2",
"assets/assets/icons/python.png": "6841951dd3623f17a3f6a880c3f4f0a0",
"assets/assets/images/1.png": "75b6e84f8f2c37934adbe0669b085436",
"assets/assets/images/desktop.png": "510deea38b7862484a8e26586f362152",
"assets/assets/images/exam_app_launcher_icon.png": "d4e5b00f720ac4cf8d247060d330784f",
"assets/assets/images/fitness.png": "f891e99eb1a2166696de3099b8735c23",
"assets/assets/images/flowery_tracking_icon_launcher.png": "e30a4edc58a6d3a780095ab5ed915212",
"assets/assets/images/flower_app_icon.png": "10b61052da4ca86e57d2fb6946bea93f",
"assets/assets/images/ms.png": "d4d834ea505bc694318d12a2a136dac6",
"assets/assets/images/profile.png": "3b5d544b0907bf4de9db1a74fc037910",
"assets/assets/lottie/hand_wave.json": "2d27b677f9e5cda3a91bd25f9f788cc0",
"assets/FontManifest.json": "9389a5761946733a6e5b1d3bf7ad0f39",
"assets/fonts/MaterialIcons-Regular.otf": "4b28bf2bde792459293e99466335cf93",
"assets/NOTICES": "95be87797520a5991d41111c380fd6ab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/enefty_icons/lib/assets/fonts/icons/EneftyIcons.ttf": "fbe1330e9a1fb21b67a9545a1e28dde0",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/packages/panara_dialogs/assets/confirm.png": "acf806139cb7c12e09fc5ca1185b8a2f",
"assets/packages/panara_dialogs/assets/info.png": "e4bb5858c90ab48c72f11ba44bb26b5b",
"assets/packages/reactive_theme/assets/moon-fill.png": "6477d78f34d92d97a54ba60daf7ac99d",
"assets/packages/reactive_theme/assets/sun-fill.png": "9f18372ccd39a91d08d3e3975c0085a7",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "d60f5f900a5d0f36d213b6cfd105e7cd",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "c4531925e4c5eca9d3086a82c6e3ee8b",
"icons/Icon-192.png": "605cff31e7d95caa1d1f3bdd44397469",
"icons/Icon-512.png": "99f31c9b6545a691aaf09e891a9b89be",
"icons/Icon-maskable-192.png": "605cff31e7d95caa1d1f3bdd44397469",
"icons/Icon-maskable-512.png": "99f31c9b6545a691aaf09e891a9b89be",
"index.html": "02c95a6b9a2ad9da7a33feb08c18beeb",
"/": "02c95a6b9a2ad9da7a33feb08c18beeb",
"main.dart.js": "02afc78e5dc2bcec59dbe0a65388e52f",
"manifest.json": "c98a1011da474c5fafbcfeb7d393120a",
"version.json": "9b818ca9511483c901bed1545384376c"};
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
