"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/Janeth-Portafolio/index.html","a630e1ab2e2db558263d87d51d7d5cc4"],["/Janeth-Portafolio/static/css/main.45a36e46.css","dfc8c3cbf011126f513ac46dc4b54c70"],["/Janeth-Portafolio/static/js/main.26d6c66b.js","877f771316d34a6376a11d489b2d4675"],["/Janeth-Portafolio/static/media/cinco.7a669536.png","7a669536a2156721f1b028a2a7b4ff22"],["/Janeth-Portafolio/static/media/cuatro.150577ea.png","150577eaeee524275ee4a92758fbe5af"],["/Janeth-Portafolio/static/media/dos.0cd69d31.png","0cd69d3163a1022e417e5abe7b637b31"],["/Janeth-Portafolio/static/media/hacka.af192949.jpg","af1929499a108c117d7fba45563f0d72"],["/Janeth-Portafolio/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/Janeth-Portafolio/static/media/ocho.e884e137.png","e884e13787744dfef63ed720881a0db0"],["/Janeth-Portafolio/static/media/portada3.374b38a7.jpeg","374b38a72eca61c0240875676a44edd4"],["/Janeth-Portafolio/static/media/portada5.821093d3.jpeg","821093d3451de6257464efed39a78022"],["/Janeth-Portafolio/static/media/seis.2485bdbd.png","2485bdbdeec906c32515248869b64ef5"],["/Janeth-Portafolio/static/media/siete.9b7adc4c.png","9b7adc4c8196853aa26b26e04b102d5f"],["/Janeth-Portafolio/static/media/tres.168c0c7b.png","168c0c7b59a6b1e83ddcdcaab646d195"],["/Janeth-Portafolio/static/media/uno.ee72a536.png","ee72a53605160aad991a65823e46002a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/Janeth-Portafolio/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});