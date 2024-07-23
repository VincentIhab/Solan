// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lbHt5":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "df07f787b3710369";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bnLOQ":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded", function() {
    class PageHandler {
        constructor(){
            this.loadingBar = document.getElementById("loading-bar");
            this.spinnerContainer = document.getElementById("spinner-container");
            this.videoContainer = document.getElementById("video-container");
            this.backgroundVideo = document.getElementById("background-video");
            this.navVideo = document.getElementById("navVideo");
            this.navigationButton = document.querySelector(".navigation__button");
            this.navbar = document.getElementById("navbar");
            this.navBtn = document.getElementById("btn-desk");
            this.newParent = document.getElementById("header_container");
            this.oldParent = document.getElementById("header");
            this.box2 = document.querySelector(".box2");
            this.scrollThreshold = 100;
            this.mobileVideoSrc = "mobile-Land-video.mp4";
            this.desktopVideoSrc = "video (2).mp4";
            this.navVideoSrc = "nav-cam.mp4";
            this.currentVideo = "";
            this.videoLoaded = false;
            this.scrolling = false;
            this.isFirstTime = true;
            this.init();
        }
        init() {
            this.startLoadingBar();
            this.selectVideo();
            this.navVideo.src = this.navVideoSrc;
            this.navVideo.type = "video/mp4";
            window.addEventListener("resize", this.selectVideo.bind(this));
            window.addEventListener("scroll", this.throttleScroll.bind(this));
            this.createIntersectionObserver();
            this.initOverlay();
            this.initIntroAnimation();
            this.initFeatureBoxVideo();
        }
        startLoadingBar() {
            let interval = setInterval(()=>{
                const images = document.images;
                let loadedImages = 0;
                for(let i = 0; i < images.length; i++)if (images[i].complete) loadedImages++;
                let progress = Math.floor(loadedImages / images.length * 100);
                this.loadingBar.style.width = progress + "%";
                this.loadingBar.style.backgroundColor = `rgb(${255 - progress * 2.55}, ${255 - progress * 2.55}, ${255 - progress * 2.55})`;
                if (progress === 100) {
                    clearInterval(interval);
                    this.loadingBar.style.width = "100%";
                    this.loadingBar.style.backgroundColor = "black";
                }
            }, 100);
        }
        selectVideo() {
            const videoElement = this.backgroundVideo;
            videoElement.muted = true;
            videoElement.playsinline = true;
            if (window.innerWidth <= 768 && this.currentVideo !== "mobile") {
                videoElement.src = this.mobileVideoSrc;
                videoElement.type = "video/mp4";
                this.videoContainer.classList.remove("bg-video--desktop");
                videoElement.classList.remove("bg-video--desktop__content_desk");
                this.videoContainer.classList.add("bg-video--mobile");
                videoElement.classList.add("bg-video--mobile__content_mobile");
                videoElement.loop = false;
                this.oldParent.insertBefore(this.videoContainer, this.oldParent.firstChild);
                this.currentVideo = "mobile";
            } else if (window.innerWidth > 768 && this.currentVideo !== "desktop") {
                videoElement.src = this.desktopVideoSrc;
                videoElement.type = "video/mp4";
                this.videoContainer.classList.remove("bg-video--mobile");
                videoElement.classList.remove("bg-video--mobile__content_mobile");
                this.videoContainer.classList.add("bg-video--desktop");
                videoElement.classList.add("bg-video--desktop__content_desk");
                this.newParent.insertBefore(this.videoContainer, this.newParent.firstChild);
                this.currentVideo = "desktop";
            }
            videoElement.onloadeddata = this.videoLoadSuccess.bind(this);
            videoElement.onerror = this.videoLoadError.bind(this);
        }
        videoLoadSuccess() {
            this.videoLoaded = true;
            this.spinnerContainer.classList.add("hidden");
            this.videoContainer.style.display = "block";
        }
        videoLoadError() {
            this.selectVideo();
        }
        throttleScroll() {
            if (!this.scrolling) {
                this.scrolling = true;
                window.requestAnimationFrame(()=>{
                    this.handleScroll();
                    this.scrolling = false;
                });
            }
        }
        handleScroll() {
            if (window.scrollY > this.scrollThreshold) {
                this.navbar.classList.add("scrolled");
                this.navBtn.classList.replace("btn-light", "btn-dark");
            } else {
                this.navbar.classList.remove("scrolled");
                this.navBtn.classList.replace("btn-dark", "btn-light");
            }
        }
        createIntersectionObserver() {
            const observer = new IntersectionObserver(this.animateElement.bind(this), {
                threshold: 0.1
            });
            const elementsToAnimate = document.querySelectorAll(".target");
            elementsToAnimate.forEach((element)=>{
                let delay = 0;
                if (element.classList.contains("box1")) delay = 0;
                else if (element.classList.contains("box2")) delay = 1000;
                else if (element.classList.contains("box3")) delay = 1000;
                else if (element.classList.contains("box4")) delay = 1000;
                element.setAttribute("data-delay", delay);
                observer.observe(element);
            });
        }
        animateElement(entries, observer) {
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    const delay = parseInt(entry.target.getAttribute("data-delay")) || 0;
                    setTimeout(()=>{
                        const animationClass = entry.target.getAttribute("data-class");
                        entry.target.classList.add(animationClass);
                        observer.unobserve(entry.target);
                        this.box2.classList.add("box2__fadeImg");
                    }, delay);
                }
            });
        }
        initOverlay() {
            const checkbox = document.getElementById("navi-toggle");
            const overlay = document.createElement("div");
            overlay.classList.add("overlay");
            checkbox.addEventListener("change", ()=>{
                if (checkbox.checked) {
                    document.body.appendChild(overlay);
                    setTimeout(()=>overlay.classList.add("show"), 10);
                } else {
                    overlay.classList.remove("show");
                    overlay.addEventListener("transitionend", ()=>{
                        if (!overlay.classList.contains("show")) overlay.remove();
                    }, {
                        once: true
                    });
                }
            });
            overlay.addEventListener("click", ()=>{
                checkbox.checked = false;
                overlay.classList.remove("show");
                overlay.addEventListener("transitionend", ()=>{
                    if (!overlay.classList.contains("show")) overlay.remove();
                }, {
                    once: true
                });
            });
        }
        initIntroAnimation() {
            const timeline = gsap.timeline();
            timeline.to(".header", {
                duration: 2.5,
                x: 0,
                opacity: 1,
                ease: "power2.out"
            }, "-=0.4").to(".header__spans", {
                duration: 1,
                x: 0,
                opacity: 1,
                ease: "power2.out"
            }, "-=0.4").to(".header__title", {
                duration: 1.1,
                x: 0,
                opacity: 1,
                ease: "power2.out"
            }, "-=0.4").to(".header__buttons", {
                duration: 1.1,
                x: 0,
                opacity: 1,
                ease: "power2.out"
            }, "-=0.4").to(".header__paragraph", {
                duration: 1.2,
                x: 0,
                opacity: 1,
                ease: "power2.out"
            }, "-=0.4");
        }
        initFeatureBoxVideo() {
            const page2Trigger = document.querySelector(".box1");
            this.featureBoxVideoContainer = document.getElementById("feature-box");
            const videoSource = this.featureBoxVideoContainer.querySelector("source");
            let isVideoLoaded = false;
            this.isFirstTime = true;
            const loadVideo = ()=>{
                if (!videoSource.src) {
                    videoSource.src = videoSource.dataset.src;
                    this.featureBoxVideoContainer.load();
                    isVideoLoaded = true;
                }
            };
            const debounce = (func, delay)=>{
                let inDebounce;
                return function() {
                    clearTimeout(inDebounce);
                    inDebounce = setTimeout(()=>func.apply(this, arguments), delay);
                };
            };
            const handleVideoPlayback = (entries)=>{
                entries.forEach((entry)=>{
                    if (entry.isIntersecting) {
                        loadVideo();
                        if (this.isFirstTime && !this.isMobileDevice()) {
                            this.debouncePlayVideo();
                            this.isFirstTime = false;
                        } else if (this.isMobileDevice()) this.featureBoxVideoContainer.play();
                    } else this.featureBoxVideoContainer.pause();
                });
            };
            const observer = new IntersectionObserver(handleVideoPlayback, {
                threshold: 0.5
            });
            observer.observe(page2Trigger);
            if (!this.isMobileDevice()) {
                page2Trigger.addEventListener("mouseover", debounce(()=>{
                    this.featureBoxVideoContainer.play();
                }, 100));
                page2Trigger.addEventListener("mouseleave", debounce(()=>{
                    this.featureBoxVideoContainer.pause();
                }, 100));
            } else {
                this.featureBoxVideoContainer.loop = true;
                observer.observe(this.featureBoxVideoContainer);
            }
        }
        isMobileDevice() {
            return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        }
        debouncePlayVideo() {
            setTimeout(()=>{
                this.featureBoxVideoContainer.play();
                setTimeout(()=>{
                    this.featureBoxVideoContainer.pause();
                }, this.featureBoxVideoContainer.duration / 2 * 1000); // Pause at half the duration
            }, 500);
        }
        debouncePauseVideo() {
            setTimeout(()=>{
                this.featureBoxVideoContainer.pause();
            }, 500);
        }
    }
    new PageHandler();
});
document.addEventListener("DOMContentLoaded", ()=>{
    const solutionsItem = document.querySelector(".Solutions");
    const dropdownMenu = solutionsItem.querySelector(".dropdown-menu");
    const overlay = document.getElementById("overlay");
    const solutionslink = document.querySelector(".Solutions-link");
    const solutionslinkarrow = document.querySelector(".Solutions-arrow");
    const navigation = document.querySelector(".navigation");
    const dropdownItem = document.querySelectorAll(".dropdown--item");
    solutionsItem.addEventListener("mouseenter", ()=>{
        overlay.style.opacity = "1";
        overlay.style.visibility = "visible";
        solutionslink.style.color = "#fff";
        solutionslinkarrow.style.fill = "#fff";
    // on hold for add a overlay for the navigation
    // navigation.classList.add('onhoveronsolutions')
    });
    solutionsItem.addEventListener("mouseleave", ()=>{
        overlay.style.opacity = "0";
        overlay.style.visibility = "hidden";
        solutionslink.style.color = "inherit";
        solutionslinkarrow.style.fill = "#000";
    // on hold for add a overlay for the navigation
    // navigation.classList.remove('onhoveronsolutions')
    });
    dropdownItem.forEach((el)=>{
        el.addEventListener("mouseenter", ()=>{
            dropdownMenu.classList.add("wide-dropdownMenu");
        });
    });
    dropdownMenu.addEventListener("mouseleave", ()=>{
        dropdownMenu.classList.remove("wide-dropdownMenu");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Initialize ScrollMagic Controller
    const controller = new ScrollMagic.Controller();
    // GSAP animation for fading in and scaling up
    const fadeInAnimation = gsap.fromTo("#work-process", {
        opacity: 0,
        y: 50
    }, {
        duration: 0.5,
        scale: 1,
        opacity: 1,
        y: 0,
        ease: "sine.out"
    });
    // GSAP animation for fading out and moving up
    const fadeOutAnimation = gsap.to("#work-process", {
        duration: 0.2,
        opacity: 0,
        y: -50,
        ease: "sine.out"
    });
    // Create ScrollMagic Scene for fading in
    new ScrollMagic.Scene({
        triggerElement: "#work-process",
        triggerHook: 0.11 // Trigger when 25% of the element is visible
    }).setTween(fadeInAnimation).addTo(controller);
    // Create ScrollMagic Scene for fading out
    new ScrollMagic.Scene({
        triggerElement: "#work-process",
        triggerHook: 0.50,
        offset: document.querySelector("#work-process").offsetHeight // Offset to ensure the trigger happens at the bottom of the element
    }).setTween(fadeOutAnimation).addTo(controller);
    // Intersection Observer for background and text color changes
    const sections = document.querySelectorAll(".st1, .st2, .st3, .st4, .work-process__title_con");
    const workProcess = document.getElementById("work-process");
    const workProcessBackground = document.querySelector(".work-process__background");
    const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("work-process__title_con")) workProcess.style.backgroundColor = "#F7F7F7"; // Use solid color
                else if (entry.target.classList.contains("st1")) {
                    workProcess.style.backgroundColor = "#000"; // Use solid color
                    workProcess.style.color = "#E2E5E4";
                } else if (entry.target.classList.contains("st2")) {
                    workProcess.style.backgroundColor = "#183D3D"; // Use solid color
                    workProcess.style.color = "#E2E5E4";
                    workProcessBackground.style.opacity = "0";
                    workProcessBackground.style.display = "none";
                } else if (entry.target.classList.contains("st3")) {
                    workProcess.style.backgroundColor = "#ffffff"; // Use solid color
                    workProcess.style.color = "#000";
                } else if (entry.target.classList.contains("st4")) {
                    workProcess.style.backgroundColor = "#ffffff"; // Use solid color
                    workProcess.style.color = "#000";
                    workProcessBackground.style.display = "block";
                    setTimeout(()=>{
                        workProcessBackground.style.opacity = "1";
                    }, 100);
                }
                entry.target.style.opacity = "1";
            } else // Reset animation when out of view
            entry.target.style.opacity = "0";
        });
    }, {
        root: null,
        threshold: 0.3 // Adjust the threshold as needed
    });
    sections.forEach((section)=>{
        observer.observe(section);
    });
    // Handle line color and height
    const lines = document.querySelectorAll(".line");
    const handleScroll = ()=>{
        const windowHeight = window.innerHeight;
        const lineHeight = 1584; // 70rem in pixels
        const speedFactor = 0.5; // Adjust this value to slow down the line height growth
        lines.forEach((line)=>{
            const rect = line.getBoundingClientRect();
            const startColor = line.dataset.colorStart;
            const endColor = line.dataset.colorEnd;
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                const visibleHeight = Math.min(windowHeight - rect.top, lineHeight);
                const adjustedHeight = visibleHeight * speedFactor; // Adjust the visible height by the speed factor
                const newHeight = adjustedHeight / lineHeight * lineHeight;
                line.style.height = `${newHeight}px`;
                const progress = visibleHeight / lineHeight;
                line.style.backgroundColor = interpolateColor(startColor, endColor, progress);
            } else {
                line.style.height = "0";
                line.style.backgroundColor = startColor;
            }
        });
    };
    const interpolateColor = (color1, color2, factor)=>{
        const result = color1.slice(1).match(/.{2}/g).map((c, i)=>{
            const value = Math.round(parseInt(c, 16) * (1 - factor) + parseInt(color2.slice(1).match(/.{2}/g)[i], 16) * factor);
            return value.toString(16).padStart(2, "0");
        }).join("");
        return `#${result}`;
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Initial check on page load
    // Create animations for descriptions
    function createAnimations(section) {
        const leftPs = section.querySelectorAll(".work-process__decription--left");
        const rightPs = section.querySelectorAll(".work-process__decription--right");
        if (leftPs.length === 0 || rightPs.length === 0) {
            console.warn("No left or right p elements found in the section.");
            return;
        }
        leftPs.forEach((leftP, index)=>{
            const rightP = rightPs[index];
            if (rightP) {
                // Animation for left p element
                const leftPAnimationIn = gsap.fromTo(leftP, {
                    opacity: 0,
                    x: -100
                }, {
                    opacity: 1,
                    x: 0,
                    duration: 0.5
                });
                const leftPAnimationOut = gsap.to(leftP, {
                    opacity: 0,
                    x: -100,
                    duration: 0.5
                });
                // Animation for right p element
                const rightPAnimationIn = gsap.fromTo(rightP, {
                    opacity: 0,
                    x: 100
                }, {
                    opacity: 1,
                    x: 0,
                    duration: 0.5
                });
                const rightPAnimationOut = gsap.to(rightP, {
                    opacity: 0,
                    x: 100,
                    duration: 0.5
                });
                // Create ScrollMagic Scene for left p element
                new ScrollMagic.Scene({
                    triggerElement: section,
                    triggerHook: 0.5,
                    duration: section.offsetHeight
                }).setTween(leftPAnimationIn).on("enter", ()=>{
                    rightPAnimationOut.play();
                }).on("leave", ()=>{
                    leftPAnimationOut.play();
                }).addTo(controller);
                // Create ScrollMagic Scene for right p element
                new ScrollMagic.Scene({
                    triggerElement: section,
                    triggerHook: 0.5,
                    duration: section.offsetHeight
                }).setTween(rightPAnimationIn).on("enter", ()=>{
                    leftPAnimationOut.play();
                }).on("leave", ()=>{
                    rightPAnimationOut.play();
                }).addTo(controller);
            }
        });
    }
    // Apply animations to each section
    const sectionsToAnimate = document.querySelectorAll(".st1, .st2, .st3, .st4");
    sectionsToAnimate.forEach(createAnimations);
});
///////////////
/////////////
// JavaScript Code
const form = document.getElementById("multiStepForm");
const nextButton = form.querySelector(".next");
const backButton = form.querySelector(".back");
const progressBarSteps = document.querySelectorAll(".progress-bar__step");
const formSteps = document.querySelectorAll(".form-step");
let currentStep = 0;
const showStep = (step)=>{
    formSteps.forEach((formStep, index)=>{
        formStep.classList.remove("form-step--active");
        if (index === step) formStep.classList.add("form-step--active");
        if (currentStep < 1) backButton.style.display = "none";
        else if (currentStep >= 1) backButton.style.display = "flex";
    });
    progressBarSteps.forEach((progressStep, index)=>{
        progressStep.classList.remove("progress-bar__step--active");
        if (index <= step) progressStep.classList.add("progress-bar__step--active");
    });
};
const validateStep = (step)=>{
    const inputs = formSteps[step].querySelectorAll("input[required]");
    let valid = true;
    inputs.forEach((input)=>{
        if (!input.value) {
            input.classList.add("error");
            valid = false;
        } else input.classList.remove("error");
    });
    return valid;
};
const animateStepTransition = (direction)=>{
    gsap.to(formSteps[currentStep], {
        duration: 0.5,
        x: direction === "next" ? "-100%" : "100%",
        opacity: 0,
        onComplete: ()=>{
            currentStep += direction === "next" ? 1 : -1;
            showStep(currentStep);
            gsap.fromTo(formSteps[currentStep], {
                x: direction === "next" ? "100%" : "-100%",
                opacity: 0
            }, {
                duration: 0.5,
                x: "0%",
                opacity: 1
            });
        }
    });
};
nextButton.addEventListener("click", ()=>{
    if (validateStep(currentStep)) animateStepTransition("next");
    if (currentStep === 2) nextButton.textContent = "Send";
});
backButton.addEventListener("click", ()=>{
    animateStepTransition("back");
    if (currentStep <= 3) nextButton.textContent = "Next";
});
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    if (validateStep(currentStep)) // Handle form submission
    alert("Form submitted!");
});
showStep(currentStep);
// scripts.js
// scripts.js
document.addEventListener("DOMContentLoaded", ()=>{
    // Initialize ScrollMagic Controller
    const controller = new ScrollMagic.Controller();
    // Create a scene to change the background color of the body
    const bgColorScene = new ScrollMagic.Scene({
        triggerElement: ".form-page",
        triggerHook: 0.5,
        duration: "100%" // Maintain the background color change throughout the form-page
    }).on("enter", ()=>{
        gsap.to(document.body, {
            backgroundColor: "#27343d",
            duration: 0.5
        });
    }).on("leave", ()=>{
        gsap.to(document.body, {
            backgroundColor: "#fff",
            duration: 0.5
        });
    }).addTo(controller);
    // Create a scene to animate the form popping up
    const formScene = new ScrollMagic.Scene({
        triggerElement: ".form-page",
        triggerHook: 0.5
    }).setTween(gsap.to(".form-page-container", {
        opacity: 1,
        scale: 1,
        duration: 0.5
    })).addTo(controller);
});
////////////////////////
////////////////////////
////////////////////////
////////////////////////
/////map////
document.addEventListener("DOMContentLoaded", ()=>{
    const location = [
        51.505,
        -0.09
    ]; // Replace with your desired location [latitude, longitude]
    const map = L.map("map").setView(location, 13); // Adjust zoom level as needed
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19 // Adjust max zoom level as needed
    }).addTo(map);
    const popupContent = '<a href="#" onclick="window.open(`https://www.openstreetmap.org/?mlat=${location[0]}&mlon=${location[1]}&zoom=13`, `_blank`); return false;">view on Map &#129106;</a>';
    const marker = L.marker(location).addTo(map).bindPopup(popupContent, {
        className: "custom-popup"
    }).openPopup();
    marker.on("click", function() {
        window.open(`https://www.openstreetmap.org/?mlat=${location[0]}&mlon=${location[1]}&zoom=13`, "_blank");
    });
    map.on("click", function() {
        window.open(`https://www.openstreetmap.org/?mlat=${location[0]}&mlon=${location[1]}&zoom=13`, "_blank");
    });
});

},{}]},["lbHt5","bnLOQ"], "bnLOQ", "parcelRequire2ad4")

//# sourceMappingURL=index.b3710369.js.map
