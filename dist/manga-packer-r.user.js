// ==UserScript==
// @name         Manga Packer R
// @namespace    com.undsf.tmus.mgpk
// @version      1.7.0-dev
// @author       Arathi of Nebnizilla
// @icon         https://vitejs.dev/logo.svg
// @homepageURL  https://github.com/Arathi/manga-packer-r
// @downloadURL  https://github.com/Arathi/manga-packer-r/raw/master/dist/manga-packer-r.user.js
// @updateURL    https://github.com/Arathi/manga-packer-r/raw/master/dist/manga-packer-r.user.js
// @match        https://telegra.ph/*
// @match        https://nhentai.net/g/*/
// @match        https://nhentai.xxx/g/*/
// @match        https://e-hentai.org/g/*/*/
// @require      https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js
// @require      https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// ==/UserScript==

(r=>{if(typeof GM_addStyle=="function"){GM_addStyle(r);return}const o=document.createElement("style");o.textContent=r,document.head.append(o)})(" .mgpk-button{padding:5px 10px 1px}.progress-bar{border:1px solid gray}.progress-bar .blocks{width:100%}.progress-bar .blocks .progress-block-pending{background-color:#dadada}.progress-bar .blocks .progress-block-running{background-color:#165dff}.progress-bar .blocks .progress-block-success{background-color:#00b42a}.progress-bar .blocks .progress-block-error{background-color:#f53f3f}.task-view .task-file-name{width:64px;-webkit-user-select:none;user-select:none}.task-list{padding-right:2px;overflow-x:hidden;overflow-y:scroll}.task-list::-webkit-scrollbar{width:2px}.task-list::-webkit-scrollbar-thumb{background-color:#0006}.task-list::-webkit-scrollbar-track{background-color:#0000001a}.task-filter{border:1px solid gray;border-radius:0;font-size:12px}.task-filter .task-filter-item{padding:3px;border-left:1px solid gray;-webkit-user-select:none;user-select:none}.task-filter .task-filter-item:first-child{border-left:unset}.task-filter .task-filter-item-all-active{background:linear-gradient(to right,#dadada,#165dff,#f53f3f,#00b42a);color:#fff}.task-filter .task-filter-item-pending-active{background-color:#dadada;color:#000}.task-filter .task-filter-item-running-active{background-color:#165dff;color:#fff}.task-filter .task-filter-item-error-active{background-color:#f53f3f;color:#fff}.task-filter .task-filter-item-success-active{background-color:#00b42a;color:#fff}.task-panel{position:fixed;width:400px;top:8px;right:8px;background-color:#ffffffe6;border:solid 1px rgba(127,127,127,.8);border-radius:5px;padding:8px;font-size:16px;font-weight:400;color:#000} ");

(function (require$$0, require$$0$1) {
  'use strict';

  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var f$1 = require$$0, k$1 = Symbol.for("react.element"), l$2 = Symbol.for("react.fragment"), m$2 = Object.prototype.hasOwnProperty, n$2 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$2 = { key: true, ref: true, __self: true, __source: true };
  function q$1(c2, a2, g) {
    var b, d = {}, e2 = null, h2 = null;
    void 0 !== g && (e2 = "" + g);
    void 0 !== a2.key && (e2 = "" + a2.key);
    void 0 !== a2.ref && (h2 = a2.ref);
    for (b in a2) m$2.call(a2, b) && !p$2.hasOwnProperty(b) && (d[b] = a2[b]);
    if (c2 && c2.defaultProps) for (b in a2 = c2.defaultProps, a2) void 0 === d[b] && (d[b] = a2[b]);
    return { $$typeof: k$1, type: c2, key: e2, ref: h2, props: d, _owner: n$2.current };
  }
  reactJsxRuntime_production_min.Fragment = l$2;
  reactJsxRuntime_production_min.jsx = q$1;
  reactJsxRuntime_production_min.jsxs = q$1;
  {
    jsxRuntime.exports = reactJsxRuntime_production_min;
  }
  var jsxRuntimeExports = jsxRuntime.exports;
  var client = {};
  var m$1 = require$$0$1;
  {
    client.createRoot = m$1.createRoot;
    client.hydrateRoot = m$1.hydrateRoot;
  }
  const e$1 = Symbol(), t$1 = Symbol(), r$1 = "a", n$1 = "w";
  let o = (e2, t2) => new Proxy(e2, t2);
  const s = Object.getPrototypeOf, c = /* @__PURE__ */ new WeakMap(), l$1 = (e2) => e2 && (c.has(e2) ? c.get(e2) : s(e2) === Object.prototype || s(e2) === Array.prototype), f = (e2) => "object" == typeof e2 && null !== e2, i$1 = (e2) => {
    if (Array.isArray(e2)) return Array.from(e2);
    const t2 = Object.getOwnPropertyDescriptors(e2);
    return Object.values(t2).forEach((e3) => {
      e3.configurable = true;
    }), Object.create(s(e2), t2);
  }, u$1 = (e2) => e2[t$1] || e2, a = (s2, c2, f2, p2) => {
    if (!l$1(s2)) return s2;
    let g = p2 && p2.get(s2);
    if (!g) {
      const e2 = u$1(s2);
      g = ((e3) => Object.values(Object.getOwnPropertyDescriptors(e3)).some((e4) => !e4.configurable && !e4.writable))(e2) ? [e2, i$1(e2)] : [e2], null == p2 || p2.set(s2, g);
    }
    const [y2, h2] = g;
    let w2 = f2 && f2.get(y2);
    return w2 && w2[1].f === !!h2 || (w2 = ((o2, s3) => {
      const c3 = { f: s3 };
      let l2 = false;
      const f3 = (e2, t2) => {
        if (!l2) {
          let s4 = c3[r$1].get(o2);
          if (s4 || (s4 = {}, c3[r$1].set(o2, s4)), e2 === n$1) s4[n$1] = true;
          else {
            let r2 = s4[e2];
            r2 || (r2 = /* @__PURE__ */ new Set(), s4[e2] = r2), r2.add(t2);
          }
        }
      }, i = { get: (e2, n2) => n2 === t$1 ? o2 : (f3("k", n2), a(Reflect.get(e2, n2), c3[r$1], c3.c, c3.t)), has: (t2, n2) => n2 === e$1 ? (l2 = true, c3[r$1].delete(o2), true) : (f3("h", n2), Reflect.has(t2, n2)), getOwnPropertyDescriptor: (e2, t2) => (f3("o", t2), Reflect.getOwnPropertyDescriptor(e2, t2)), ownKeys: (e2) => (f3(n$1), Reflect.ownKeys(e2)) };
      return s3 && (i.set = i.deleteProperty = () => false), [i, c3];
    })(y2, !!h2), w2[1].p = o(h2 || y2, w2[0]), f2 && f2.set(y2, w2)), w2[1][r$1] = c2, w2[1].c = f2, w2[1].t = p2, w2[1].p;
  }, p$1 = (e2, t2, r2, o2, s2 = Object.is) => {
    if (s2(e2, t2)) return false;
    if (!f(e2) || !f(t2)) return true;
    const c2 = r2.get(u$1(e2));
    if (!c2) return true;
    if (o2) {
      const r3 = o2.get(e2);
      if (r3 && r3.n === t2) return r3.g;
      o2.set(e2, { n: t2, g: false });
    }
    let l2 = null;
    try {
      for (const r3 of c2.h || []) if (l2 = Reflect.has(e2, r3) !== Reflect.has(t2, r3), l2) return l2;
      if (true === c2[n$1]) {
        if (l2 = ((e3, t3) => {
          const r3 = Reflect.ownKeys(e3), n2 = Reflect.ownKeys(t3);
          return r3.length !== n2.length || r3.some((e4, t4) => e4 !== n2[t4]);
        })(e2, t2), l2) return l2;
      } else for (const r3 of c2.o || []) if (l2 = !!Reflect.getOwnPropertyDescriptor(e2, r3) != !!Reflect.getOwnPropertyDescriptor(t2, r3), l2) return l2;
      for (const n2 of c2.k || []) if (l2 = p$1(e2[n2], t2[n2], r2, o2, s2), l2) return l2;
      return null === l2 && (l2 = true), l2;
    } finally {
      o2 && o2.set(e2, { n: t2, g: l2 });
    }
  }, y = (e2) => l$1(e2) && e2[t$1] || null, h$1 = (e2, t2 = true) => {
    c.set(e2, t2);
  }, w = (e2, t2, r2) => {
    const o2 = [], s2 = /* @__PURE__ */ new WeakSet(), c2 = (e3, l2) => {
      if (s2.has(e3)) return;
      f(e3) && s2.add(e3);
      const i = f(e3) && t2.get(u$1(e3));
      if (i) {
        var a2, p2;
        if (null == (a2 = i.h) || a2.forEach((e4) => {
          const t3 = `:has(${String(e4)})`;
          o2.push(l2 ? [...l2, t3] : [t3]);
        }), true === i[n$1]) {
          const e4 = ":ownKeys";
          o2.push(l2 ? [...l2, e4] : [e4]);
        } else {
          var g;
          null == (g = i.o) || g.forEach((e4) => {
            const t3 = `:hasOwn(${String(e4)})`;
            o2.push(l2 ? [...l2, t3] : [t3]);
          });
        }
        null == (p2 = i.k) || p2.forEach((t3) => {
          !("value" in (Object.getOwnPropertyDescriptor(e3, t3) || {})) || c2(e3[t3], l2 ? [...l2, t3] : [t3]);
        });
      } else l2 && o2.push(l2);
    };
    return c2(e2), o2;
  };
  const __vite_import_meta_env__$1 = { "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SSR": false };
  const isObject = (x) => typeof x === "object" && x !== null;
  const proxyStateMap = /* @__PURE__ */ new WeakMap();
  const refSet = /* @__PURE__ */ new WeakSet();
  const buildProxyFunction = (objectIs = Object.is, newProxy = (target, handler) => new Proxy(target, handler), canProxy = (x) => isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer), defaultHandlePromise = (promise) => {
    switch (promise.status) {
      case "fulfilled":
        return promise.value;
      case "rejected":
        throw promise.reason;
      default:
        throw promise;
    }
  }, snapCache = /* @__PURE__ */ new WeakMap(), createSnapshot = (target, version, handlePromise = defaultHandlePromise) => {
    const cache = snapCache.get(target);
    if ((cache == null ? void 0 : cache[0]) === version) {
      return cache[1];
    }
    const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
    h$1(snap, true);
    snapCache.set(target, [version, snap]);
    Reflect.ownKeys(target).forEach((key) => {
      if (Object.getOwnPropertyDescriptor(snap, key)) {
        return;
      }
      const value = Reflect.get(target, key);
      const { enumerable } = Reflect.getOwnPropertyDescriptor(
        target,
        key
      );
      const desc = {
        value,
        enumerable,
        // This is intentional to avoid copying with proxy-compare.
        // It's still non-writable, so it avoids assigning a value.
        configurable: true
      };
      if (refSet.has(value)) {
        h$1(value, false);
      } else if (value instanceof Promise) {
        delete desc.value;
        desc.get = () => handlePromise(value);
      } else if (proxyStateMap.has(value)) {
        const [target2, ensureVersion] = proxyStateMap.get(
          value
        );
        desc.value = createSnapshot(
          target2,
          ensureVersion(),
          handlePromise
        );
      }
      Object.defineProperty(snap, key, desc);
    });
    return Object.preventExtensions(snap);
  }, proxyCache = /* @__PURE__ */ new WeakMap(), versionHolder = [1, 1], proxyFunction = (initialObject) => {
    if (!isObject(initialObject)) {
      throw new Error("object required");
    }
    const found = proxyCache.get(initialObject);
    if (found) {
      return found;
    }
    let version = versionHolder[0];
    const listeners = /* @__PURE__ */ new Set();
    const notifyUpdate = (op, nextVersion = ++versionHolder[0]) => {
      if (version !== nextVersion) {
        version = nextVersion;
        listeners.forEach((listener) => listener(op, nextVersion));
      }
    };
    let checkVersion = versionHolder[1];
    const ensureVersion = (nextCheckVersion = ++versionHolder[1]) => {
      if (checkVersion !== nextCheckVersion && !listeners.size) {
        checkVersion = nextCheckVersion;
        propProxyStates.forEach(([propProxyState]) => {
          const propVersion = propProxyState[1](nextCheckVersion);
          if (propVersion > version) {
            version = propVersion;
          }
        });
      }
      return version;
    };
    const createPropListener = (prop) => (op, nextVersion) => {
      const newOp = [...op];
      newOp[1] = [prop, ...newOp[1]];
      notifyUpdate(newOp, nextVersion);
    };
    const propProxyStates = /* @__PURE__ */ new Map();
    const addPropListener = (prop, propProxyState) => {
      if ((__vite_import_meta_env__$1 ? "production" : void 0) !== "production" && propProxyStates.has(prop)) {
        throw new Error("prop listener already exists");
      }
      if (listeners.size) {
        const remove = propProxyState[3](createPropListener(prop));
        propProxyStates.set(prop, [propProxyState, remove]);
      } else {
        propProxyStates.set(prop, [propProxyState]);
      }
    };
    const removePropListener = (prop) => {
      var _a2;
      const entry = propProxyStates.get(prop);
      if (entry) {
        propProxyStates.delete(prop);
        (_a2 = entry[1]) == null ? void 0 : _a2.call(entry);
      }
    };
    const addListener = (listener) => {
      listeners.add(listener);
      if (listeners.size === 1) {
        propProxyStates.forEach(([propProxyState, prevRemove], prop) => {
          if ((__vite_import_meta_env__$1 ? "production" : void 0) !== "production" && prevRemove) {
            throw new Error("remove already exists");
          }
          const remove = propProxyState[3](createPropListener(prop));
          propProxyStates.set(prop, [propProxyState, remove]);
        });
      }
      const removeListener = () => {
        listeners.delete(listener);
        if (listeners.size === 0) {
          propProxyStates.forEach(([propProxyState, remove], prop) => {
            if (remove) {
              remove();
              propProxyStates.set(prop, [propProxyState]);
            }
          });
        }
      };
      return removeListener;
    };
    const baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));
    const handler = {
      deleteProperty(target, prop) {
        const prevValue = Reflect.get(target, prop);
        removePropListener(prop);
        const deleted = Reflect.deleteProperty(target, prop);
        if (deleted) {
          notifyUpdate(["delete", [prop], prevValue]);
        }
        return deleted;
      },
      set(target, prop, value, receiver) {
        const hasPrevValue = Reflect.has(target, prop);
        const prevValue = Reflect.get(target, prop, receiver);
        if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {
          return true;
        }
        removePropListener(prop);
        if (isObject(value)) {
          value = y(value) || value;
        }
        let nextValue = value;
        if (value instanceof Promise) {
          value.then((v) => {
            value.status = "fulfilled";
            value.value = v;
            notifyUpdate(["resolve", [prop], v]);
          }).catch((e2) => {
            value.status = "rejected";
            value.reason = e2;
            notifyUpdate(["reject", [prop], e2]);
          });
        } else {
          if (!proxyStateMap.has(value) && canProxy(value)) {
            nextValue = proxyFunction(value);
          }
          const childProxyState = !refSet.has(nextValue) && proxyStateMap.get(nextValue);
          if (childProxyState) {
            addPropListener(prop, childProxyState);
          }
        }
        Reflect.set(target, prop, nextValue, receiver);
        notifyUpdate(["set", [prop], value, prevValue]);
        return true;
      }
    };
    const proxyObject = newProxy(baseObject, handler);
    proxyCache.set(initialObject, proxyObject);
    const proxyState = [
      baseObject,
      ensureVersion,
      createSnapshot,
      addListener
    ];
    proxyStateMap.set(proxyObject, proxyState);
    Reflect.ownKeys(initialObject).forEach((key) => {
      const desc = Object.getOwnPropertyDescriptor(
        initialObject,
        key
      );
      if ("value" in desc) {
        proxyObject[key] = initialObject[key];
        delete desc.value;
        delete desc.writable;
      }
      Object.defineProperty(baseObject, key, desc);
    });
    return proxyObject;
  }) => [
    // public functions
    proxyFunction,
    // shared state
    proxyStateMap,
    refSet,
    // internal things
    objectIs,
    newProxy,
    canProxy,
    defaultHandlePromise,
    snapCache,
    createSnapshot,
    proxyCache,
    versionHolder
  ];
  const [defaultProxyFunction] = buildProxyFunction();
  function proxy(initialObject = {}) {
    return defaultProxyFunction(initialObject);
  }
  function subscribe(proxyObject, callback, notifyInSync) {
    const proxyState = proxyStateMap.get(proxyObject);
    if ((__vite_import_meta_env__$1 ? "production" : void 0) !== "production" && !proxyState) {
      console.warn("Please use proxy object");
    }
    let promise;
    const ops = [];
    const addListener = proxyState[3];
    let isListenerActive = false;
    const listener = (op) => {
      ops.push(op);
      if (!promise) {
        promise = Promise.resolve().then(() => {
          promise = void 0;
          if (isListenerActive) {
            callback(ops.splice(0));
          }
        });
      }
    };
    const removeListener = addListener(listener);
    isListenerActive = true;
    return () => {
      isListenerActive = false;
      removeListener();
    };
  }
  function snapshot(proxyObject, handlePromise) {
    const proxyState = proxyStateMap.get(proxyObject);
    if ((__vite_import_meta_env__$1 ? "production" : void 0) !== "production" && !proxyState) {
      console.warn("Please use proxy object");
    }
    const [target, ensureVersion, createSnapshot] = proxyState;
    return createSnapshot(target, ensureVersion(), handlePromise);
  }
  var shim = { exports: {} };
  var useSyncExternalStoreShim_production_min = {};
  /**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var e = require$$0;
  function h(a2, b) {
    return a2 === b && (0 !== a2 || 1 / a2 === 1 / b) || a2 !== a2 && b !== b;
  }
  var k = "function" === typeof Object.is ? Object.is : h, l = e.useState, m = e.useEffect, n = e.useLayoutEffect, p = e.useDebugValue;
  function q(a2, b) {
    var d = b(), f2 = l({ inst: { value: d, getSnapshot: b } }), c2 = f2[0].inst, g = f2[1];
    n(function() {
      c2.value = d;
      c2.getSnapshot = b;
      r(c2) && g({ inst: c2 });
    }, [a2, d, b]);
    m(function() {
      r(c2) && g({ inst: c2 });
      return a2(function() {
        r(c2) && g({ inst: c2 });
      });
    }, [a2]);
    p(d);
    return d;
  }
  function r(a2) {
    var b = a2.getSnapshot;
    a2 = a2.value;
    try {
      var d = b();
      return !k(a2, d);
    } catch (f2) {
      return true;
    }
  }
  function t(a2, b) {
    return b();
  }
  var u = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t : q;
  useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : u;
  {
    shim.exports = useSyncExternalStoreShim_production_min;
  }
  var shimExports = shim.exports;
  const useSyncExternalStoreExports = /* @__PURE__ */ getDefaultExportFromCjs(shimExports);
  const __vite_import_meta_env__ = { "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SSR": false };
  const { use } = require$$0;
  const { useSyncExternalStore } = useSyncExternalStoreExports;
  const useAffectedDebugValue = (state, affected) => {
    const pathList = require$$0.useRef();
    require$$0.useEffect(() => {
      pathList.current = w(state, affected);
    });
    require$$0.useDebugValue(pathList.current);
  };
  const targetCache = /* @__PURE__ */ new WeakMap();
  function useSnapshot(proxyObject, options) {
    const notifyInSync = void 0;
    const lastSnapshot = require$$0.useRef();
    const lastAffected = require$$0.useRef();
    let inRender = true;
    const currSnapshot = useSyncExternalStore(
      require$$0.useCallback(
        (callback) => {
          const unsub = subscribe(proxyObject, callback);
          callback();
          return unsub;
        },
        [proxyObject, notifyInSync]
      ),
      () => {
        const nextSnapshot = snapshot(proxyObject, use);
        try {
          if (!inRender && lastSnapshot.current && lastAffected.current && !p$1(
            lastSnapshot.current,
            nextSnapshot,
            lastAffected.current,
            /* @__PURE__ */ new WeakMap()
          )) {
            return lastSnapshot.current;
          }
        } catch (e2) {
        }
        return nextSnapshot;
      },
      () => snapshot(proxyObject, use)
    );
    inRender = false;
    const currAffected = /* @__PURE__ */ new WeakMap();
    require$$0.useEffect(() => {
      lastSnapshot.current = currSnapshot;
      lastAffected.current = currAffected;
    });
    if ((__vite_import_meta_env__ ? "production" : void 0) !== "production") {
      useAffectedDebugValue(currSnapshot, currAffected);
    }
    const proxyCache = require$$0.useMemo(() => /* @__PURE__ */ new WeakMap(), []);
    return a(
      currSnapshot,
      currAffected,
      proxyCache,
      targetCache
    );
  }
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var u8 = Uint8Array, u16 = Uint16Array, i32 = Int32Array;
  var fleb = new u8([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    /* unused */
    0,
    0,
    /* impossible */
    0
  ]);
  var fdeb = new u8([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    /* unused */
    0,
    0
  ]);
  var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  var freb = function(eb, start) {
    var b = new u16(31);
    for (var i = 0; i < 31; ++i) {
      b[i] = start += 1 << eb[i - 1];
    }
    var r2 = new i32(b[30]);
    for (var i = 1; i < 30; ++i) {
      for (var j = b[i]; j < b[i + 1]; ++j) {
        r2[j] = j - b[i] << 5 | i;
      }
    }
    return { b, r: r2 };
  };
  var _a = freb(fleb, 2), fl = _a.b, revfl = _a.r;
  fl[28] = 258, revfl[258] = 28;
  var _b = freb(fdeb, 0), revfd = _b.r;
  var rev = new u16(32768);
  for (var i = 0; i < 32768; ++i) {
    var x = (i & 43690) >> 1 | (i & 21845) << 1;
    x = (x & 52428) >> 2 | (x & 13107) << 2;
    x = (x & 61680) >> 4 | (x & 3855) << 4;
    rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
  }
  var hMap = function(cd, mb, r2) {
    var s2 = cd.length;
    var i = 0;
    var l2 = new u16(mb);
    for (; i < s2; ++i) {
      if (cd[i])
        ++l2[cd[i] - 1];
    }
    var le = new u16(mb);
    for (i = 1; i < mb; ++i) {
      le[i] = le[i - 1] + l2[i - 1] << 1;
    }
    var co;
    {
      co = new u16(s2);
      for (i = 0; i < s2; ++i) {
        if (cd[i]) {
          co[i] = rev[le[cd[i] - 1]++] >> 15 - cd[i];
        }
      }
    }
    return co;
  };
  var flt = new u8(288);
  for (var i = 0; i < 144; ++i)
    flt[i] = 8;
  for (var i = 144; i < 256; ++i)
    flt[i] = 9;
  for (var i = 256; i < 280; ++i)
    flt[i] = 7;
  for (var i = 280; i < 288; ++i)
    flt[i] = 8;
  var fdt = new u8(32);
  for (var i = 0; i < 32; ++i)
    fdt[i] = 5;
  var flm = /* @__PURE__ */ hMap(flt, 9);
  var fdm = /* @__PURE__ */ hMap(fdt, 5);
  var shft = function(p2) {
    return (p2 + 7) / 8 | 0;
  };
  var slc = function(v, s2, e2) {
    if (e2 == null || e2 > v.length)
      e2 = v.length;
    return new u8(v.subarray(s2, e2));
  };
  var ec = [
    "unexpected EOF",
    "invalid block type",
    "invalid length/literal",
    "invalid distance",
    "stream finished",
    "no stream handler",
    ,
    "no callback",
    "invalid UTF-8 data",
    "extra field too long",
    "date not in range 1980-2099",
    "filename too long",
    "stream finishing",
    "invalid zip data"
    // determined by unknown compression method
  ];
  var err = function(ind, msg, nt) {
    var e2 = new Error(msg || ec[ind]);
    e2.code = ind;
    if (Error.captureStackTrace)
      Error.captureStackTrace(e2, err);
    if (!nt)
      throw e2;
    return e2;
  };
  var wbits = function(d, p2, v) {
    v <<= p2 & 7;
    var o2 = p2 / 8 | 0;
    d[o2] |= v;
    d[o2 + 1] |= v >> 8;
  };
  var wbits16 = function(d, p2, v) {
    v <<= p2 & 7;
    var o2 = p2 / 8 | 0;
    d[o2] |= v;
    d[o2 + 1] |= v >> 8;
    d[o2 + 2] |= v >> 16;
  };
  var hTree = function(d, mb) {
    var t2 = [];
    for (var i = 0; i < d.length; ++i) {
      if (d[i])
        t2.push({ s: i, f: d[i] });
    }
    var s2 = t2.length;
    var t22 = t2.slice();
    if (!s2)
      return { t: et, l: 0 };
    if (s2 == 1) {
      var v = new u8(t2[0].s + 1);
      v[t2[0].s] = 1;
      return { t: v, l: 1 };
    }
    t2.sort(function(a2, b) {
      return a2.f - b.f;
    });
    t2.push({ s: -1, f: 25001 });
    var l2 = t2[0], r2 = t2[1], i0 = 0, i1 = 1, i2 = 2;
    t2[0] = { s: -1, f: l2.f + r2.f, l: l2, r: r2 };
    while (i1 != s2 - 1) {
      l2 = t2[t2[i0].f < t2[i2].f ? i0++ : i2++];
      r2 = t2[i0 != i1 && t2[i0].f < t2[i2].f ? i0++ : i2++];
      t2[i1++] = { s: -1, f: l2.f + r2.f, l: l2, r: r2 };
    }
    var maxSym = t22[0].s;
    for (var i = 1; i < s2; ++i) {
      if (t22[i].s > maxSym)
        maxSym = t22[i].s;
    }
    var tr = new u16(maxSym + 1);
    var mbt = ln(t2[i1 - 1], tr, 0);
    if (mbt > mb) {
      var i = 0, dt = 0;
      var lft = mbt - mb, cst = 1 << lft;
      t22.sort(function(a2, b) {
        return tr[b.s] - tr[a2.s] || a2.f - b.f;
      });
      for (; i < s2; ++i) {
        var i2_1 = t22[i].s;
        if (tr[i2_1] > mb) {
          dt += cst - (1 << mbt - tr[i2_1]);
          tr[i2_1] = mb;
        } else
          break;
      }
      dt >>= lft;
      while (dt > 0) {
        var i2_2 = t22[i].s;
        if (tr[i2_2] < mb)
          dt -= 1 << mb - tr[i2_2]++ - 1;
        else
          ++i;
      }
      for (; i >= 0 && dt; --i) {
        var i2_3 = t22[i].s;
        if (tr[i2_3] == mb) {
          --tr[i2_3];
          ++dt;
        }
      }
      mbt = mb;
    }
    return { t: new u8(tr), l: mbt };
  };
  var ln = function(n2, l2, d) {
    return n2.s == -1 ? Math.max(ln(n2.l, l2, d + 1), ln(n2.r, l2, d + 1)) : l2[n2.s] = d;
  };
  var lc = function(c2) {
    var s2 = c2.length;
    while (s2 && !c2[--s2])
      ;
    var cl = new u16(++s2);
    var cli = 0, cln = c2[0], cls = 1;
    var w2 = function(v) {
      cl[cli++] = v;
    };
    for (var i = 1; i <= s2; ++i) {
      if (c2[i] == cln && i != s2)
        ++cls;
      else {
        if (!cln && cls > 2) {
          for (; cls > 138; cls -= 138)
            w2(32754);
          if (cls > 2) {
            w2(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
            cls = 0;
          }
        } else if (cls > 3) {
          w2(cln), --cls;
          for (; cls > 6; cls -= 6)
            w2(8304);
          if (cls > 2)
            w2(cls - 3 << 5 | 8208), cls = 0;
        }
        while (cls--)
          w2(cln);
        cls = 1;
        cln = c2[i];
      }
    }
    return { c: cl.subarray(0, cli), n: s2 };
  };
  var clen = function(cf, cl) {
    var l2 = 0;
    for (var i = 0; i < cl.length; ++i)
      l2 += cf[i] * cl[i];
    return l2;
  };
  var wfblk = function(out, pos, dat) {
    var s2 = dat.length;
    var o2 = shft(pos + 2);
    out[o2] = s2 & 255;
    out[o2 + 1] = s2 >> 8;
    out[o2 + 2] = out[o2] ^ 255;
    out[o2 + 3] = out[o2 + 1] ^ 255;
    for (var i = 0; i < s2; ++i)
      out[o2 + i + 4] = dat[i];
    return (o2 + 4 + s2) * 8;
  };
  var wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p2) {
    wbits(out, p2++, final);
    ++lf[256];
    var _a2 = hTree(lf, 15), dlt = _a2.t, mlb = _a2.l;
    var _b2 = hTree(df, 15), ddt = _b2.t, mdb = _b2.l;
    var _c = lc(dlt), lclt = _c.c, nlc = _c.n;
    var _d = lc(ddt), lcdt = _d.c, ndc = _d.n;
    var lcfreq = new u16(19);
    for (var i = 0; i < lclt.length; ++i)
      ++lcfreq[lclt[i] & 31];
    for (var i = 0; i < lcdt.length; ++i)
      ++lcfreq[lcdt[i] & 31];
    var _e = hTree(lcfreq, 7), lct = _e.t, mlcb = _e.l;
    var nlcc = 19;
    for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
      ;
    var flen = bl + 5 << 3;
    var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
    var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + 2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18];
    if (bs >= 0 && flen <= ftlen && flen <= dtlen)
      return wfblk(out, p2, dat.subarray(bs, bs + bl));
    var lm, ll, dm, dl;
    wbits(out, p2, 1 + (dtlen < ftlen)), p2 += 2;
    if (dtlen < ftlen) {
      lm = hMap(dlt, mlb), ll = dlt, dm = hMap(ddt, mdb), dl = ddt;
      var llm = hMap(lct, mlcb);
      wbits(out, p2, nlc - 257);
      wbits(out, p2 + 5, ndc - 1);
      wbits(out, p2 + 10, nlcc - 4);
      p2 += 14;
      for (var i = 0; i < nlcc; ++i)
        wbits(out, p2 + 3 * i, lct[clim[i]]);
      p2 += 3 * nlcc;
      var lcts = [lclt, lcdt];
      for (var it = 0; it < 2; ++it) {
        var clct = lcts[it];
        for (var i = 0; i < clct.length; ++i) {
          var len = clct[i] & 31;
          wbits(out, p2, llm[len]), p2 += lct[len];
          if (len > 15)
            wbits(out, p2, clct[i] >> 5 & 127), p2 += clct[i] >> 12;
        }
      }
    } else {
      lm = flm, ll = flt, dm = fdm, dl = fdt;
    }
    for (var i = 0; i < li; ++i) {
      var sym = syms[i];
      if (sym > 255) {
        var len = sym >> 18 & 31;
        wbits16(out, p2, lm[len + 257]), p2 += ll[len + 257];
        if (len > 7)
          wbits(out, p2, sym >> 23 & 31), p2 += fleb[len];
        var dst = sym & 31;
        wbits16(out, p2, dm[dst]), p2 += dl[dst];
        if (dst > 3)
          wbits16(out, p2, sym >> 5 & 8191), p2 += fdeb[dst];
      } else {
        wbits16(out, p2, lm[sym]), p2 += ll[sym];
      }
    }
    wbits16(out, p2, lm[256]);
    return p2 + ll[256];
  };
  var deo = /* @__PURE__ */ new i32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
  var et = /* @__PURE__ */ new u8(0);
  var dflt = function(dat, lvl, plvl, pre, post, st) {
    var s2 = st.z || dat.length;
    var o2 = new u8(pre + s2 + 5 * (1 + Math.ceil(s2 / 7e3)) + post);
    var w2 = o2.subarray(pre, o2.length - post);
    var lst = st.l;
    var pos = (st.r || 0) & 7;
    if (lvl) {
      if (pos)
        w2[0] = st.r >> 3;
      var opt = deo[lvl - 1];
      var n2 = opt >> 13, c2 = opt & 8191;
      var msk_1 = (1 << plvl) - 1;
      var prev = st.p || new u16(32768), head = st.h || new u16(msk_1 + 1);
      var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
      var hsh = function(i2) {
        return (dat[i2] ^ dat[i2 + 1] << bs1_1 ^ dat[i2 + 2] << bs2_1) & msk_1;
      };
      var syms = new i32(25e3);
      var lf = new u16(288), df = new u16(32);
      var lc_1 = 0, eb = 0, i = st.i || 0, li = 0, wi = st.w || 0, bs = 0;
      for (; i + 2 < s2; ++i) {
        var hv = hsh(i);
        var imod = i & 32767, pimod = head[hv];
        prev[imod] = pimod;
        head[hv] = imod;
        if (wi <= i) {
          var rem = s2 - i;
          if ((lc_1 > 7e3 || li > 24576) && (rem > 423 || !lst)) {
            pos = wblk(dat, w2, 0, syms, lf, df, eb, li, bs, i - bs, pos);
            li = lc_1 = eb = 0, bs = i;
            for (var j = 0; j < 286; ++j)
              lf[j] = 0;
            for (var j = 0; j < 30; ++j)
              df[j] = 0;
          }
          var l2 = 2, d = 0, ch_1 = c2, dif = imod - pimod & 32767;
          if (rem > 2 && hv == hsh(i - dif)) {
            var maxn = Math.min(n2, rem) - 1;
            var maxd = Math.min(32767, i);
            var ml = Math.min(258, rem);
            while (dif <= maxd && --ch_1 && imod != pimod) {
              if (dat[i + l2] == dat[i + l2 - dif]) {
                var nl = 0;
                for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)
                  ;
                if (nl > l2) {
                  l2 = nl, d = dif;
                  if (nl > maxn)
                    break;
                  var mmd = Math.min(dif, nl - 2);
                  var md = 0;
                  for (var j = 0; j < mmd; ++j) {
                    var ti = i - dif + j & 32767;
                    var pti = prev[ti];
                    var cd = ti - pti & 32767;
                    if (cd > md)
                      md = cd, pimod = ti;
                  }
                }
              }
              imod = pimod, pimod = prev[imod];
              dif += imod - pimod & 32767;
            }
          }
          if (d) {
            syms[li++] = 268435456 | revfl[l2] << 18 | revfd[d];
            var lin = revfl[l2] & 31, din = revfd[d] & 31;
            eb += fleb[lin] + fdeb[din];
            ++lf[257 + lin];
            ++df[din];
            wi = i + l2;
            ++lc_1;
          } else {
            syms[li++] = dat[i];
            ++lf[dat[i]];
          }
        }
      }
      for (i = Math.max(i, wi); i < s2; ++i) {
        syms[li++] = dat[i];
        ++lf[dat[i]];
      }
      pos = wblk(dat, w2, lst, syms, lf, df, eb, li, bs, i - bs, pos);
      if (!lst) {
        st.r = pos & 7 | w2[pos / 8 | 0] << 3;
        pos -= 7;
        st.h = head, st.p = prev, st.i = i, st.w = wi;
      }
    } else {
      for (var i = st.w || 0; i < s2 + lst; i += 65535) {
        var e2 = i + 65535;
        if (e2 >= s2) {
          w2[pos / 8 | 0] = lst;
          e2 = s2;
        }
        pos = wfblk(w2, pos + 1, dat.subarray(i, e2));
      }
      st.i = s2;
    }
    return slc(o2, 0, pre + shft(pos) + post);
  };
  var crct = /* @__PURE__ */ function() {
    var t2 = new Int32Array(256);
    for (var i = 0; i < 256; ++i) {
      var c2 = i, k2 = 9;
      while (--k2)
        c2 = (c2 & 1 && -306674912) ^ c2 >>> 1;
      t2[i] = c2;
    }
    return t2;
  }();
  var crc = function() {
    var c2 = -1;
    return {
      p: function(d) {
        var cr = c2;
        for (var i = 0; i < d.length; ++i)
          cr = crct[cr & 255 ^ d[i]] ^ cr >>> 8;
        c2 = cr;
      },
      d: function() {
        return ~c2;
      }
    };
  };
  var dopt = function(dat, opt, pre, post, st) {
    if (!st) {
      st = { l: 1 };
      if (opt.dictionary) {
        var dict = opt.dictionary.subarray(-32768);
        var newDat = new u8(dict.length + dat.length);
        newDat.set(dict);
        newDat.set(dat, dict.length);
        dat = newDat;
        st.w = dict.length;
      }
    }
    return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? st.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 20 : 12 + opt.mem, pre, post, st);
  };
  var mrg = function(a2, b) {
    var o2 = {};
    for (var k2 in a2)
      o2[k2] = a2[k2];
    for (var k2 in b)
      o2[k2] = b[k2];
    return o2;
  };
  var wbytes = function(d, b, v) {
    for (; v; ++b)
      d[b] = v, v >>>= 8;
  };
  function deflateSync(data, opts) {
    return dopt(data, opts || {}, 0, 0);
  }
  var fltn = function(d, p2, t2, o2) {
    for (var k2 in d) {
      var val = d[k2], n2 = p2 + k2, op = o2;
      if (Array.isArray(val))
        op = mrg(o2, val[1]), val = val[0];
      if (val instanceof u8)
        t2[n2] = [val, op];
      else {
        t2[n2 += "/"] = [new u8(0), op];
        fltn(val, n2, t2, o2);
      }
    }
  };
  var te = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
  var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
  var tds = 0;
  try {
    td.decode(et, { stream: true });
    tds = 1;
  } catch (e2) {
  }
  function strToU8(str, latin1) {
    var i;
    if (te)
      return te.encode(str);
    var l2 = str.length;
    var ar = new u8(str.length + (str.length >> 1));
    var ai = 0;
    var w2 = function(v) {
      ar[ai++] = v;
    };
    for (var i = 0; i < l2; ++i) {
      if (ai + 5 > ar.length) {
        var n2 = new u8(ai + 8 + (l2 - i << 1));
        n2.set(ar);
        ar = n2;
      }
      var c2 = str.charCodeAt(i);
      if (c2 < 128 || latin1)
        w2(c2);
      else if (c2 < 2048)
        w2(192 | c2 >> 6), w2(128 | c2 & 63);
      else if (c2 > 55295 && c2 < 57344)
        c2 = 65536 + (c2 & 1023 << 10) | str.charCodeAt(++i) & 1023, w2(240 | c2 >> 18), w2(128 | c2 >> 12 & 63), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
      else
        w2(224 | c2 >> 12), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
    }
    return slc(ar, 0, ai);
  }
  var exfl = function(ex) {
    var le = 0;
    if (ex) {
      for (var k2 in ex) {
        var l2 = ex[k2].length;
        if (l2 > 65535)
          err(9);
        le += l2 + 4;
      }
    }
    return le;
  };
  var wzh = function(d, b, f2, fn, u2, c2, ce, co) {
    var fl2 = fn.length, ex = f2.extra, col = co && co.length;
    var exl = exfl(ex);
    wbytes(d, b, ce != null ? 33639248 : 67324752), b += 4;
    if (ce != null)
      d[b++] = 20, d[b++] = f2.os;
    d[b] = 20, b += 2;
    d[b++] = f2.flag << 1 | (c2 < 0 && 8), d[b++] = u2 && 8;
    d[b++] = f2.compression & 255, d[b++] = f2.compression >> 8;
    var dt = new Date(f2.mtime == null ? Date.now() : f2.mtime), y2 = dt.getFullYear() - 1980;
    if (y2 < 0 || y2 > 119)
      err(10);
    wbytes(d, b, y2 << 25 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >> 1), b += 4;
    if (c2 != -1) {
      wbytes(d, b, f2.crc);
      wbytes(d, b + 4, c2 < 0 ? -c2 - 2 : c2);
      wbytes(d, b + 8, f2.size);
    }
    wbytes(d, b + 12, fl2);
    wbytes(d, b + 14, exl), b += 16;
    if (ce != null) {
      wbytes(d, b, col);
      wbytes(d, b + 6, f2.attrs);
      wbytes(d, b + 10, ce), b += 14;
    }
    d.set(fn, b);
    b += fl2;
    if (exl) {
      for (var k2 in ex) {
        var exf = ex[k2], l2 = exf.length;
        wbytes(d, b, +k2);
        wbytes(d, b + 2, l2);
        d.set(exf, b + 4), b += 4 + l2;
      }
    }
    if (col)
      d.set(co, b), b += col;
    return b;
  };
  var wzf = function(o2, b, c2, d, e2) {
    wbytes(o2, b, 101010256);
    wbytes(o2, b + 8, c2);
    wbytes(o2, b + 10, c2);
    wbytes(o2, b + 12, d);
    wbytes(o2, b + 16, e2);
  };
  function zipSync(data, opts) {
    if (!opts)
      opts = {};
    var r2 = {};
    var files2 = [];
    fltn(data, "", r2, opts);
    var o2 = 0;
    var tot = 0;
    for (var fn in r2) {
      var _a2 = r2[fn], file = _a2[0], p2 = _a2[1];
      var compression = p2.level == 0 ? 0 : 8;
      var f2 = strToU8(fn), s2 = f2.length;
      var com = p2.comment, m2 = com && strToU8(com), ms = m2 && m2.length;
      var exl = exfl(p2.extra);
      if (s2 > 65535)
        err(11);
      var d = compression ? deflateSync(file, p2) : file, l2 = d.length;
      var c2 = crc();
      c2.p(file);
      files2.push(mrg(p2, {
        size: file.length,
        crc: c2.d(),
        c: d,
        f: f2,
        m: m2,
        u: s2 != fn.length || m2 && com.length != ms,
        o: o2,
        compression
      }));
      o2 += 30 + s2 + exl + l2;
      tot += 76 + 2 * (s2 + exl) + (ms || 0) + l2;
    }
    var out = new u8(tot + 22), oe = o2, cdl = tot - o2;
    for (var i = 0; i < files2.length; ++i) {
      var f2 = files2[i];
      wzh(out, f2.o, f2, f2.f, f2.u, f2.c.length);
      var badd = 30 + f2.f.length + exfl(f2.extra);
      out.set(f2.c, f2.o + badd);
      wzh(out, o2, f2, f2.f, f2.u, f2.c.length, f2.o, f2.m), o2 += 16 + badd + (f2.m ? f2.m.length : 0);
    }
    wzf(out, o2, files2.length, cdl, oe);
    return out;
  }
  var FileSaver_min = { exports: {} };
  (function(module, exports) {
    (function(a2, b) {
      b();
    })(commonjsGlobal, function() {
      function b(a3, b2) {
        return "undefined" == typeof b2 ? b2 = { autoBom: false } : "object" != typeof b2 && (console.warn("Deprecated: Expected third argument to be a object"), b2 = { autoBom: !b2 }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a3.type) ? new Blob(["\uFEFF", a3], { type: a3.type }) : a3;
      }
      function c2(a3, b2, c3) {
        var d2 = new XMLHttpRequest();
        d2.open("GET", a3), d2.responseType = "blob", d2.onload = function() {
          g(d2.response, b2, c3);
        }, d2.onerror = function() {
          console.error("could not download file");
        }, d2.send();
      }
      function d(a3) {
        var b2 = new XMLHttpRequest();
        b2.open("HEAD", a3, false);
        try {
          b2.send();
        } catch (a4) {
        }
        return 200 <= b2.status && 299 >= b2.status;
      }
      function e2(a3) {
        try {
          a3.dispatchEvent(new MouseEvent("click"));
        } catch (c3) {
          var b2 = document.createEvent("MouseEvents");
          b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a3.dispatchEvent(b2);
        }
      }
      var f2 = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof commonjsGlobal && commonjsGlobal.global === commonjsGlobal ? commonjsGlobal : void 0, a2 = f2.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f2.saveAs || ("object" != typeof window || window !== f2 ? function() {
      } : "download" in HTMLAnchorElement.prototype && !a2 ? function(b2, g2, h2) {
        var i = f2.URL || f2.webkitURL, j = document.createElement("a");
        g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", "string" == typeof b2 ? (j.href = b2, j.origin === location.origin ? e2(j) : d(j.href) ? c2(b2, g2, h2) : e2(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
          i.revokeObjectURL(j.href);
        }, 4e4), setTimeout(function() {
          e2(j);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function(f3, g2, h2) {
        if (g2 = g2 || f3.name || "download", "string" != typeof f3) navigator.msSaveOrOpenBlob(b(f3, h2), g2);
        else if (d(f3)) c2(f3, g2, h2);
        else {
          var i = document.createElement("a");
          i.href = f3, i.target = "_blank", setTimeout(function() {
            e2(i);
          });
        }
      } : function(b2, d2, e3, g2) {
        if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), "string" == typeof b2) return c2(b2, d2, e3);
        var h2 = "application/octet-stream" === b2.type, i = /constructor/i.test(f2.HTMLElement) || f2.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((j || h2 && i || a2) && "undefined" != typeof FileReader) {
          var k2 = new FileReader();
          k2.onloadend = function() {
            var a3 = k2.result;
            a3 = j ? a3 : a3.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a3 : location = a3, g2 = null;
          }, k2.readAsDataURL(b2);
        } else {
          var l2 = f2.URL || f2.webkitURL, m2 = l2.createObjectURL(b2);
          g2 ? g2.location = m2 : location.href = m2, g2 = null, setTimeout(function() {
            l2.revokeObjectURL(m2);
          }, 4e4);
        }
      });
      f2.saveAs = g.saveAs = g, module.exports = g;
    });
  })(FileSaver_min);
  var FileSaver_minExports = FileSaver_min.exports;
  class AbstractAdapter {
    generateGallery() {
      throw new Error(`生成Gallery方法未实现`);
    }
  }
  var TaskStatus = /* @__PURE__ */ ((TaskStatus2) => {
    TaskStatus2[TaskStatus2["Pending"] = 0] = "Pending";
    TaskStatus2[TaskStatus2["Running"] = 1] = "Running";
    TaskStatus2[TaskStatus2["Success"] = 2] = "Success";
    TaskStatus2[TaskStatus2["Error"] = 3] = "Error";
    return TaskStatus2;
  })(TaskStatus || {});
  function getStatusName(status = 0) {
    switch (status) {
      case 0:
        return "pending";
      case 1:
        return "running";
      case 2:
        return "success";
      case 3:
        return "error";
    }
  }
  function getStatusText(status = 0) {
    switch (status) {
      case 0:
        return "等待";
      case 1:
        return "下载";
      case 2:
        return "成功";
      case 3:
        return "错误";
    }
  }
  class TelegraphAdapter extends AbstractAdapter {
    async generateGallery() {
      const { T: t2 } = _unsafeWindow;
      const tasks = {};
      const imgs = _unsafeWindow.document.querySelectorAll("img");
      imgs.forEach((img, key) => {
        const pageNo = `${key + 1}`.padStart(3, "0");
        const id = `${t2.pageId}-${pageNo}`;
        const url = img.src;
        const lastDotIndex = url.lastIndexOf(".");
        const extName = url.substring(lastDotIndex);
        tasks[id] = {
          id,
          url,
          status: TaskStatus.Pending,
          fileName: `${pageNo}${extName}`
        };
      });
      const header = _unsafeWindow.document.querySelector(
        ".tl_article_header > h1"
      );
      if (header === null) {
        throw new Error(`未获取到标题`);
      }
      return {
        id: t2.pageId,
        name: header.innerHTML,
        tasks
      };
    }
  }
  class NHentaiNetAdapter extends AbstractAdapter {
    async generateGallery() {
      const { _gallery: nhGallery, _n_app: nhApp } = _unsafeWindow;
      const tasks = {};
      const serverId = nhApp.options.media_server;
      const mediaId = nhGallery.media_id;
      nhGallery.images.pages.forEach((image, index) => {
        const pageNo = `${index + 1}`;
        const id = `${nhGallery.id}-${pageNo.padStart(3, "0")}`;
        let extName = ``;
        switch (image.t) {
          case "j":
            extName = "jpg";
            break;
          case "p":
            extName = "png";
            break;
          default:
            extName = "img";
            break;
        }
        const fileName = `${pageNo}.${extName}`;
        tasks[id] = {
          id,
          url: `https://i${serverId}.nhentai.net/galleries/${mediaId}/${pageNo}.${extName}`,
          fileName,
          status: TaskStatus.Pending
        };
      });
      return {
        id: nhGallery.id,
        name: nhGallery.title.japanese,
        tasks
      };
    }
  }
  const Button = ({ children, onClick }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mgpk-button", onClick, children });
  };
  const Flex = (props) => {
    const { className, direction, justify, align, gap, flex, style, onClick } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className,
        style: {
          display: "flex",
          flexDirection: direction,
          justifyContent: justify,
          alignItems: align,
          gap,
          flex,
          ...style
        },
        onClick,
        children: props.children
      }
    );
  };
  const DefaultStyle = {
    width: 16,
    height: 16
  };
  const IconDown = ({ style = DefaultStyle }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "8642",
        width: "200",
        height: "200",
        style,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3 0.1-12.7-6.4-12.7z",
            "p-id": "8643"
          }
        )
      }
    );
  };
  const IconDownload = ({ style = DefaultStyle }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "8936",
        width: "200",
        height: "200",
        style,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M505.7 661c3.2 4.1 9.4 4.1 12.6 0l112-141.7c4.1-5.2 0.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z",
              "p-id": "8937"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z",
              "p-id": "8938"
            }
          )
        ]
      }
    );
  };
  const IconSave = ({ style = DefaultStyle }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "9084",
        width: "200",
        height: "200",
        style,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M296 392h64v64h-64zM296 582v160h128V582h-64v-62h-64v62z m80 48v64h-32v-64h32zM360 328h64v64h-64zM296 264h64v64h-64zM360 456h64v64h-64zM360 200h64v64h-64z",
              "p-id": "9085"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326z m1.8 562H232V136h64v64h64v-64h174v216c0 23.2 18.8 42 42 42h216v494z",
              "p-id": "9086"
            }
          )
        ]
      }
    );
  };
  const IconUp = ({ style = DefaultStyle }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "8789",
        width: "200",
        height: "200",
        style,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3c-3.8 5.3-0.1 12.7 6.5 12.7h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z",
            "p-id": "8790"
          }
        )
      }
    );
  };
  const Progress = ({
    flex = 1,
    height = 20,
    min = 0,
    max = 100,
    value,
    status,
    statusList = []
  }) => {
    let blocks = [];
    if (value !== void 0 && status !== void 0) {
      const delta = max - min;
      const actualValue = value - min;
      const percent = actualValue * 100 / delta;
      const statusName = getStatusName(status);
      if (percent >= 100) {
        blocks.push(
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Flex,
            {
              className: `progress-block-${statusName}`,
              flex: 100
            },
            `block-success`
          )
        );
      } else if (percent > 0 && percent < 100) {
        blocks.push(
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Flex,
            {
              className: `progress-block-${statusName}`,
              flex: percent
            },
            `block-running`
          )
        );
        blocks.push(
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Flex,
            {
              className: `progress-block-pending`,
              flex: 100 - percent
            },
            `block-pending`
          )
        );
      } else {
        blocks.push(
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Flex,
            {
              className: `progress-block-pending`,
              flex: 100
            },
            `block-pending`
          )
        );
      }
      blocks.push();
    } else {
      blocks = statusList.map((status2, index) => {
        const statusName = getStatusName(status2);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Flex,
          {
            className: `progress-block progress-block-${statusName}`,
            flex: 1
          },
          `block-${index}`
        );
      });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Flex, { className: "progress-bar", flex, style: { height }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flex, { className: "blocks", children: blocks }) });
  };
  function innerSize() {
    return {
      width: _unsafeWindow.innerWidth,
      height: _unsafeWindow.innerHeight,
      scale: _unsafeWindow.devicePixelRatio
    };
  }
  const useWindowSize = () => {
    const [size, setSize] = require$$0.useState(innerSize());
    require$$0.useEffect(() => {
      setSize(innerSize());
    }, []);
    return size;
  };
  const store = proxy({
    gallery: void 0,
    status: void 0
  });
  const TaskView = ({ task }) => {
    const { id, fileName = `${id}.png`, status, total, loaded } = task;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { className: "task-view", gap: 8, align: "center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Flex, { className: "task-file-name", justify: "end", children: fileName }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Progress,
        {
          className: "task-progress-bar",
          min: 0,
          max: total,
          value: loaded,
          status,
          height: 16
        }
      )
    ] });
  };
  const TaskList = ({ tasks = [], style }) => {
    const taskViews = tasks.map((task) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(TaskView, { task }, `task-${task.id}`);
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Flex, { className: "task-list", direction: "column", gap: 4, style, children: taskViews });
  };
  const TaskStatusList = [
    TaskStatus.Pending,
    TaskStatus.Running,
    TaskStatus.Error,
    TaskStatus.Success
  ];
  const TaskFilter = ({ status, onChange }) => {
    const items = TaskStatusList.map((s2) => {
      const statusName = getStatusName(s2);
      const classNames = [
        "task-filter-item",
        `task-filter-item-${statusName}`
      ];
      if (status === s2) {
        classNames.push(`task-filter-item-${statusName}-active`);
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Flex,
        {
          className: classNames.join(" "),
          flex: 1,
          justify: "center",
          align: "center",
          onClick: () => onChange(s2),
          children: [
            getStatusText(s2),
            " (999)"
          ]
        },
        `${s2}`
      );
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { className: "task-filter", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Flex,
        {
          className: [
            "task-filter-item",
            "task-filter-item-all",
            status === void 0 ? "task-filter-item-all-active" : void 0
          ].join(" "),
          flex: 1,
          justify: "center",
          align: "center",
          onClick: () => onChange(void 0),
          children: "全部 (999)"
        }
      ),
      items
    ] });
  };
  const files = {};
  const TaskPanel = (props) => {
    const windowSize = useWindowSize();
    const { margin = 8, padding = 8, border = 1 } = props;
    const panelHeight = windowSize.height - 2 * (margin + padding + border);
    const [minimized, setMinimized] = require$$0.useState(false);
    const snap = useSnapshot(store);
    const tasks = [];
    if (snap.gallery !== void 0) {
      for (const key in snap.gallery.tasks) {
        const task = snap.gallery.tasks[key];
        if (task !== void 0) {
          tasks.push(task);
        }
      }
    }
    const statusList = [];
    const filteredTasks = [];
    for (const task of tasks) {
      const taskStatus = task.status ?? TaskStatus.Pending;
      statusList.push(taskStatus);
      if (snap.status === void 0 || snap.status === taskStatus) {
        filteredTasks.push(task);
      }
    }
    const sizeToggleIcon = minimized ? /* @__PURE__ */ jsxRuntimeExports.jsx(IconDown, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(IconUp, {});
    function onDownloadAllClick() {
      console.debug(`点击下载按钮`);
      for (const task of tasks) {
        if (task.status !== TaskStatus.Success) {
          download(task);
        }
      }
    }
    function onSaveClick() {
      console.debug(`点击保存按钮`);
      if (snap.gallery !== void 0) {
        const zipBytes = zipSync(files);
        const zipBlob = new Blob([zipBytes], {
          type: "application/zip"
        });
        const zipName = `${snap.gallery.name}.zip`;
        FileSaver_minExports.saveAs(zipBlob, zipName);
      }
    }
    function onToggleClick() {
      console.debug(`切换 minimized = ${!minimized}`);
      setMinimized(!minimized);
    }
    function onTaskFilterChange(status) {
      store.status = status;
    }
    function download(task) {
      console.debug(`任务 ${task.id} 开始下载：`, task.url);
      _GM_xmlhttpRequest({
        method: "GET",
        url: task.url,
        responseType: "blob",
        onprogress: (event) => {
          console.info(
            `任务 ${task.id} 下载进度更新：${event.loaded} / ${event.total}`
          );
          updateTask({
            id: task.id,
            status: TaskStatus.Running,
            loaded: event.loaded,
            total: event.total
          });
        },
        onload: async (event) => {
          const blob = event.response;
          console.info(
            `任务 ${task.id} 下载完成，状态码：${event.status}（${event.statusText}），长度：${blob.size}`
          );
          if (event.status === 200) {
            updateTask({
              id: task.id,
              status: TaskStatus.Success,
              loaded: blob.size,
              total: blob.size
            });
            const buffer = await blob.arrayBuffer();
            files[task.fileName] = new Uint8Array(buffer);
          } else {
            updateTask({
              id: task.id,
              status: TaskStatus.Error
            });
          }
        },
        onerror: (event) => {
          console.error(`任务 ${task.id} 下载失败：`, event);
          updateTask({
            id: task.id,
            status: TaskStatus.Error
          });
        }
      });
    }
    function updateTask(patch) {
      if (store.gallery !== void 0 && patch.id !== void 0) {
        const id = patch.id;
        const task = store.gallery.tasks[id];
        if (task !== void 0) {
          store.gallery.tasks[id] = {
            ...task,
            ...patch
          };
        }
      }
    }
    async function init() {
      if (snap.gallery === void 0) {
        console.info("当前站点：", _unsafeWindow.location.host);
        let adapter = void 0;
        switch (_unsafeWindow.location.host) {
          case "telegra.ph":
            adapter = new TelegraphAdapter();
            break;
          case "nhentai.net":
            adapter = new NHentaiNetAdapter();
            break;
        }
        if (adapter !== void 0) {
          console.info(`正在生成gallery`);
          const gallery = await adapter.generateGallery();
          store.gallery = gallery;
        }
      }
    }
    require$$0.useEffect(() => {
      init();
    }, []);
    const hidable = minimized ? null : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TaskFilter, { status: snap.status, onChange: onTaskFilterChange }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TaskList,
        {
          tasks: filteredTasks,
          style: {
            // backgroundColor: "#cccccc",
            height: panelHeight - 99
          }
        }
      )
    ] });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Flex,
      {
        className: "task-panel",
        direction: "column",
        gap: 8,
        style: {
          top: margin,
          right: margin,
          padding,
          borderWidth: border,
          height: minimized ? void 0 : panelHeight
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { className: "buttons-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { className: "buttons-left", justify: "start", gap: 8, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "btn-download", onClick: onDownloadAllClick, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconDownload, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "btn-save", onClick: onSaveClick, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconSave, {}) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flex, { className: "buttons-right", flex: 1, justify: "end", gap: 8, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "btn-toggle", onClick: onToggleClick, children: sizeToggleIcon }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flex, { className: "total-progress-row", align: "center", gap: 8, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { flex: 1, statusList }) }),
          hidable
        ]
      }
    );
  };
  client.createRoot(
    (() => {
      const app = document.createElement("div");
      app.className = "app";
      app.id = "mgpk";
      document.body.append(app);
      return app;
    })()
  ).render(/* @__PURE__ */ jsxRuntimeExports.jsx(TaskPanel, { margin: 8, padding: 8 }));

})(React, ReactDOM);