'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "619b8bdd658e8c4b2dbe858f2b383736",
"assets/assets/icons/cart.svg": "1e15eba83d04c0c7be4362f5008331ca",
"assets/assets/icons/setting.svg": "3de4e437b76baf71d9d10b4c9f3296b6",
"assets/assets/icons/user.svg": "f176efd029cd406c90fb175ff3a334bf",
"assets/assets/img/1.jpg": "b08d813c342a6cf65848910b0e61a57c",
"assets/assets/img/banner-imag.jpg": "99fcc4f5ee58fbde35af1dcaf21dc3d6",
"assets/assets/img/BeautyFashionLogo600x120.png": "67d097ffb43af9e71e40e3fe304cdeab",
"assets/assets/img/BFS-makeup-bg-Mobile%25201.png": "671f44133a0fe43d6922264d947259c6",
"assets/assets/img/BFS-makeup-bg-with-logo.jpg": "0372f162f82b204ed1f803618648da5b",
"assets/assets/img/boj_1600x.jpg": "ca5c5d527f5365174a093b8245f2e955",
"assets/assets/img/btif-sale-logo%25202.png": "0949bd4b4750ca31b7025f1097a12b39",
"assets/assets/img/Group%25202.png": "c738a12f54f6e28daa286ad34afe86a1",
"assets/assets/img/Hair-care%2520(1).png": "3b834875259e477e9a25ddae6f39b655",
"assets/assets/img/Hair-care.png": "92a6cad647e820e039cd38ef6c942191",
"assets/assets/img/image%2520(1).png": "d7c31843ef2d01f40ad4d94bfa8bf58c",
"assets/assets/img/image%252013.png": "c9548e9472111071f8902603870463b2",
"assets/assets/img/image%25209.png": "973cf968b2e55f7d5586ec49820a2c7e",
"assets/assets/img/menu-banner.jpg": "cef0c0007976a5a3366277c16e5852d3",
"assets/assets/img/Rectangle%25203.png": "2570e5ee7ce3784f4b8634b2da1fee57",
"assets/assets/img/Rectangle%252033.png": "69044be7766eb0abae2f7dd5dd5ffbd3",
"assets/assets/img/Rectangle%252034.png": "bd96496b79dfe1e6edb09ba3f37bb5d3",
"assets/assets/img/Rectangle%252035.png": "8b40bac0285c942f1208b8a12696108c",
"assets/assets/img/Rectangle%25204.png": "30f1b890c9df1fb3cfe15b972c3a61d5",
"assets/assets/img/Rectangle%252042%2520(1).png": "7bec87ce7fcd412040e889214adf2f3b",
"assets/assets/img/Rectangle%252042%2520(2).png": "f09aa1c314d062350168bdefa70e9a39",
"assets/assets/img/Rectangle%252042%2520(3).png": "6a6c45aac7978005bdec29c6dfb0db95",
"assets/assets/img/Rectangle%252042%2520(4).png": "91ebca6ae5e0edc01949eb690261ad68",
"assets/assets/img/Rectangle%252042.png": "f3530c603b8c80a9401fb0fa7c1007d6",
"assets/assets/img/Rectangle%25205.png": "09522ae155a28c0feffe58205575b8af",
"assets/assets/img/skin-care.png": "803ad3373260122478d288e1e5ec780e",
"assets/assets/img/unnamed.jpg": "8532a9feec24dca592e5e92fd7e4e457",
"assets/assets/img/women.jpg": "32f506c8627b0ab00396ca08929ca01f",
"assets/assets/lotties/check-dark-green.json": "7fbb467a78409050a2d96028a2a013ed",
"assets/assets/Svg/image%25209.svg": "d862e7cf533c463e34d33b108c9e81be",
"assets/assets/website/index.html": "267108b27a6d702b8822847d3a7e2386",
"/": "331abe62caf3b58a64bb86c0109fe230",
"assets/assets/website/script.js": "0769e73c3db8bfb657d9a8cbc25b17be",
"assets/assets/website/style.css": "73efffd30e4db5151e8eed10ae9bf3ae",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "132fb5c5ab092dc65df2188a027551f7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "dd74f11e425603c7adb66100f161b2a5",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "331abe62caf3b58a64bb86c0109fe230",
"main.dart.js": "2940db1de186396c7e4c1b9fb61d1143",
"manifest.json": "4fc5935f4be59b83a0f7bc64e03fecc3",
"version.json": "e99042ddaa61e033835fd4222caab906"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
