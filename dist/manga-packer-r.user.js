// ==UserScript==
// @name         Manga Packer R
// @namespace    com.undsf.tmus.mgpk
// @version      1.7.0
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

(r=>{if(typeof GM_addStyle=="function"){GM_addStyle(r);return}const o=document.createElement("style");o.textContent=r,document.head.append(o)})(" .mgpk-button{padding:5px 10px 1px}.progress-bar{border:1px solid gray}.progress-bar .blocks{width:100%}.progress-bar .blocks .progress-block-pending{background-color:#dadada}.progress-bar .blocks .progress-block-running{background-color:#165dff}.progress-bar .blocks .progress-block-success{background-color:#00b42a}.progress-bar .blocks .progress-block-error{background-color:#f53f3f}.task-view .task-file-name{width:40px;-webkit-user-select:none;user-select:none}.task-list{padding-right:2px;overflow-x:hidden;overflow-y:scroll}.task-list::-webkit-scrollbar{width:2px}.task-list::-webkit-scrollbar-thumb{background-color:#0006}.task-list::-webkit-scrollbar-track{background-color:#0000001a}.task-filter{border:1px solid gray;border-radius:0;font-size:12px}.task-filter .task-filter-item{padding:3px;border-left:1px solid gray;-webkit-user-select:none;user-select:none}.task-filter .task-filter-item:first-child{border-left:unset}.task-filter .task-filter-item-all-active{background:linear-gradient(to right,#dadada,#165dff,#f53f3f,#00b42a);color:#fff}.task-filter .task-filter-item-pending-active{background-color:#dadada;color:#000}.task-filter .task-filter-item-running-active{background-color:#165dff;color:#fff}.task-filter .task-filter-item-error-active{background-color:#f53f3f;color:#fff}.task-filter .task-filter-item-success-active{background-color:#00b42a;color:#fff}.task-panel{position:fixed;width:400px;top:8px;right:8px;background-color:#ffffffe6;border:solid 1px rgba(127,127,127,.8);border-radius:5px;padding:8px;font-size:16px;font-weight:400;color:#000} ");

(function (require$$0, require$$0$1) {
  'use strict';

  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
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
  var f = require$$0, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a) m$1.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  {
    jsxRuntime.exports = reactJsxRuntime_production_min;
  }
  var jsxRuntimeExports = jsxRuntime.exports;
  var client = {};
  var m = require$$0$1;
  {
    client.createRoot = m.createRoot;
    client.hydrateRoot = m.hydrateRoot;
  }
  const TRACK_MEMO_SYMBOL = Symbol();
  const GET_ORIGINAL_SYMBOL = Symbol();
  const AFFECTED_PROPERTY = "a";
  const IS_TARGET_COPIED_PROPERTY = "f";
  const PROXY_PROPERTY = "p";
  const PROXY_CACHE_PROPERTY = "c";
  const TARGET_CACHE_PROPERTY = "t";
  const NEXT_OBJECT_PROPERTY = "n";
  const CHANGED_PROPERTY = "g";
  const HAS_KEY_PROPERTY = "h";
  const ALL_OWN_KEYS_PROPERTY = "w";
  const HAS_OWN_KEY_PROPERTY = "o";
  const KEYS_PROPERTY = "k";
  let newProxy$1 = (target, handler) => new Proxy(target, handler);
  const getProto = Object.getPrototypeOf;
  const objectsToTrack = /* @__PURE__ */ new WeakMap();
  const isObjectToTrack = (obj) => obj && (objectsToTrack.has(obj) ? objectsToTrack.get(obj) : getProto(obj) === Object.prototype || getProto(obj) === Array.prototype);
  const isObject$1 = (x) => typeof x === "object" && x !== null;
  const needsToCopyTargetObject = (obj) => Object.values(Object.getOwnPropertyDescriptors(obj)).some((descriptor) => !descriptor.configurable && !descriptor.writable);
  const copyTargetObject = (obj) => {
    if (Array.isArray(obj)) {
      return Array.from(obj);
    }
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    Object.values(descriptors).forEach((desc) => {
      desc.configurable = true;
    });
    return Object.create(getProto(obj), descriptors);
  };
  const createProxyHandler = (origObj, isTargetCopied) => {
    const state = {
      [IS_TARGET_COPIED_PROPERTY]: isTargetCopied
    };
    let trackObject = false;
    const recordUsage = (type, key) => {
      if (!trackObject) {
        let used = state[AFFECTED_PROPERTY].get(origObj);
        if (!used) {
          used = {};
          state[AFFECTED_PROPERTY].set(origObj, used);
        }
        if (type === ALL_OWN_KEYS_PROPERTY) {
          used[ALL_OWN_KEYS_PROPERTY] = true;
        } else {
          let set = used[type];
          if (!set) {
            set = /* @__PURE__ */ new Set();
            used[type] = set;
          }
          set.add(key);
        }
      }
    };
    const recordObjectAsUsed = () => {
      trackObject = true;
      state[AFFECTED_PROPERTY].delete(origObj);
    };
    const handler = {
      get(target, key) {
        if (key === GET_ORIGINAL_SYMBOL) {
          return origObj;
        }
        recordUsage(KEYS_PROPERTY, key);
        return createProxy(Reflect.get(target, key), state[AFFECTED_PROPERTY], state[PROXY_CACHE_PROPERTY], state[TARGET_CACHE_PROPERTY]);
      },
      has(target, key) {
        if (key === TRACK_MEMO_SYMBOL) {
          recordObjectAsUsed();
          return true;
        }
        recordUsage(HAS_KEY_PROPERTY, key);
        return Reflect.has(target, key);
      },
      getOwnPropertyDescriptor(target, key) {
        recordUsage(HAS_OWN_KEY_PROPERTY, key);
        return Reflect.getOwnPropertyDescriptor(target, key);
      },
      ownKeys(target) {
        recordUsage(ALL_OWN_KEYS_PROPERTY);
        return Reflect.ownKeys(target);
      }
    };
    if (isTargetCopied) {
      handler.set = handler.deleteProperty = () => false;
    }
    return [handler, state];
  };
  const getOriginalObject = (obj) => (
    // unwrap proxy
    obj[GET_ORIGINAL_SYMBOL] || // otherwise
    obj
  );
  const createProxy = (obj, affected, proxyCache2, targetCache2) => {
    if (!isObjectToTrack(obj))
      return obj;
    let targetAndCopied = targetCache2 && targetCache2.get(obj);
    if (!targetAndCopied) {
      const target2 = getOriginalObject(obj);
      if (needsToCopyTargetObject(target2)) {
        targetAndCopied = [target2, copyTargetObject(target2)];
      } else {
        targetAndCopied = [target2];
      }
      targetCache2 === null || targetCache2 === void 0 ? void 0 : targetCache2.set(obj, targetAndCopied);
    }
    const [target, copiedTarget] = targetAndCopied;
    let handlerAndState = proxyCache2 && proxyCache2.get(target);
    if (!handlerAndState || handlerAndState[1][IS_TARGET_COPIED_PROPERTY] !== !!copiedTarget) {
      handlerAndState = createProxyHandler(target, !!copiedTarget);
      handlerAndState[1][PROXY_PROPERTY] = newProxy$1(copiedTarget || target, handlerAndState[0]);
      if (proxyCache2) {
        proxyCache2.set(target, handlerAndState);
      }
    }
    handlerAndState[1][AFFECTED_PROPERTY] = affected;
    handlerAndState[1][PROXY_CACHE_PROPERTY] = proxyCache2;
    handlerAndState[1][TARGET_CACHE_PROPERTY] = targetCache2;
    return handlerAndState[1][PROXY_PROPERTY];
  };
  const isAllOwnKeysChanged = (prevObj, nextObj) => {
    const prevKeys = Reflect.ownKeys(prevObj);
    const nextKeys = Reflect.ownKeys(nextObj);
    return prevKeys.length !== nextKeys.length || prevKeys.some((k2, i) => k2 !== nextKeys[i]);
  };
  const isChanged = (prevObj, nextObj, affected, cache, isEqual = Object.is) => {
    if (isEqual(prevObj, nextObj)) {
      return false;
    }
    if (!isObject$1(prevObj) || !isObject$1(nextObj))
      return true;
    const used = affected.get(getOriginalObject(prevObj));
    if (!used)
      return true;
    if (cache) {
      const hit = cache.get(prevObj);
      if (hit && hit[NEXT_OBJECT_PROPERTY] === nextObj) {
        return hit[CHANGED_PROPERTY];
      }
      cache.set(prevObj, {
        [NEXT_OBJECT_PROPERTY]: nextObj,
        [CHANGED_PROPERTY]: false
      });
    }
    let changed = null;
    try {
      for (const key of used[HAS_KEY_PROPERTY] || []) {
        changed = Reflect.has(prevObj, key) !== Reflect.has(nextObj, key);
        if (changed)
          return changed;
      }
      if (used[ALL_OWN_KEYS_PROPERTY] === true) {
        changed = isAllOwnKeysChanged(prevObj, nextObj);
        if (changed)
          return changed;
      } else {
        for (const key of used[HAS_OWN_KEY_PROPERTY] || []) {
          const hasPrev = !!Reflect.getOwnPropertyDescriptor(prevObj, key);
          const hasNext = !!Reflect.getOwnPropertyDescriptor(nextObj, key);
          changed = hasPrev !== hasNext;
          if (changed)
            return changed;
        }
      }
      for (const key of used[KEYS_PROPERTY] || []) {
        changed = isChanged(prevObj[key], nextObj[key], affected, cache, isEqual);
        if (changed)
          return changed;
      }
      if (changed === null)
        changed = true;
      return changed;
    } finally {
      if (cache) {
        cache.set(prevObj, {
          [NEXT_OBJECT_PROPERTY]: nextObj,
          [CHANGED_PROPERTY]: changed
        });
      }
    }
  };
  const getUntracked = (obj) => {
    if (isObjectToTrack(obj)) {
      return obj[GET_ORIGINAL_SYMBOL] || null;
    }
    return null;
  };
  const markToTrack = (obj, mark = true) => {
    objectsToTrack.set(obj, mark);
  };
  const affectedToPathList = (obj, affected, onlyWithValues) => {
    const list = [];
    const seen = /* @__PURE__ */ new WeakSet();
    const walk = (x, path) => {
      var _a2, _b2, _c;
      if (seen.has(x)) {
        return;
      }
      if (isObject$1(x)) {
        seen.add(x);
      }
      const used = isObject$1(x) && affected.get(getOriginalObject(x));
      if (used) {
        (_a2 = used[HAS_KEY_PROPERTY]) === null || _a2 === void 0 ? void 0 : _a2.forEach((key) => {
          const segment = `:has(${String(key)})`;
          list.push(path ? [...path, segment] : [segment]);
        });
        if (used[ALL_OWN_KEYS_PROPERTY] === true) {
          const segment = ":ownKeys";
          list.push(path ? [...path, segment] : [segment]);
        } else {
          (_b2 = used[HAS_OWN_KEY_PROPERTY]) === null || _b2 === void 0 ? void 0 : _b2.forEach((key) => {
            const segment = `:hasOwn(${String(key)})`;
            list.push(path ? [...path, segment] : [segment]);
          });
        }
        (_c = used[KEYS_PROPERTY]) === null || _c === void 0 ? void 0 : _c.forEach((key) => {
          if ("value" in (Object.getOwnPropertyDescriptor(x, key) || {})) {
            walk(x[key], path ? [...path, key] : [key]);
          }
        });
      } else if (path) {
        list.push(path);
      }
    };
    walk(obj);
    return list;
  };
  const __vite_import_meta_env__$1 = { "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SSR": false };
  const isObject = (x) => typeof x === "object" && x !== null;
  const canProxyDefault = (x) => isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer) && !(x instanceof Promise);
  const createSnapshotDefault = (target, version2) => {
    const cache = snapCache.get(target);
    if ((cache == null ? void 0 : cache[0]) === version2) {
      return cache[1];
    }
    const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
    markToTrack(snap, true);
    snapCache.set(target, [version2, snap]);
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
        markToTrack(value, false);
      } else if (proxyStateMap.has(value)) {
        const [target2, ensureVersion] = proxyStateMap.get(
          value
        );
        desc.value = createSnapshot(target2, ensureVersion());
      }
      Object.defineProperty(snap, key, desc);
    });
    return Object.preventExtensions(snap);
  };
  const createHandlerDefault = (isInitializing, addPropListener, removePropListener, notifyUpdate) => ({
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
      const hasPrevValue = !isInitializing() && Reflect.has(target, prop);
      const prevValue = Reflect.get(target, prop, receiver);
      if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {
        return true;
      }
      removePropListener(prop);
      if (isObject(value)) {
        value = getUntracked(value) || value;
      }
      const nextValue = !proxyStateMap.has(value) && canProxy(value) ? proxy(value) : value;
      addPropListener(prop, nextValue);
      Reflect.set(target, prop, nextValue, receiver);
      notifyUpdate(["set", [prop], value, prevValue]);
      return true;
    }
  });
  const proxyStateMap = /* @__PURE__ */ new WeakMap();
  const refSet = /* @__PURE__ */ new WeakSet();
  const snapCache = /* @__PURE__ */ new WeakMap();
  const versionHolder = [1, 1];
  const proxyCache = /* @__PURE__ */ new WeakMap();
  let objectIs = Object.is;
  let newProxy = (target, handler) => new Proxy(target, handler);
  let canProxy = canProxyDefault;
  let createSnapshot = createSnapshotDefault;
  let createHandler = createHandlerDefault;
  function proxy(baseObject = {}) {
    if (!isObject(baseObject)) {
      throw new Error("object required");
    }
    const found = proxyCache.get(baseObject);
    if (found) {
      return found;
    }
    let version2 = versionHolder[0];
    const listeners = /* @__PURE__ */ new Set();
    const notifyUpdate = (op, nextVersion = ++versionHolder[0]) => {
      if (version2 !== nextVersion) {
        version2 = nextVersion;
        listeners.forEach((listener) => listener(op, nextVersion));
      }
    };
    let checkVersion = versionHolder[1];
    const ensureVersion = (nextCheckVersion = ++versionHolder[1]) => {
      if (checkVersion !== nextCheckVersion && !listeners.size) {
        checkVersion = nextCheckVersion;
        propProxyStates.forEach(([propProxyState]) => {
          const propVersion = propProxyState[1](nextCheckVersion);
          if (propVersion > version2) {
            version2 = propVersion;
          }
        });
      }
      return version2;
    };
    const createPropListener = (prop) => (op, nextVersion) => {
      const newOp = [...op];
      newOp[1] = [prop, ...newOp[1]];
      notifyUpdate(newOp, nextVersion);
    };
    const propProxyStates = /* @__PURE__ */ new Map();
    const addPropListener = (prop, propValue) => {
      const propProxyState = !refSet.has(propValue) && proxyStateMap.get(propValue);
      if (propProxyState) {
        if ((__vite_import_meta_env__$1 ? "production" : void 0) !== "production" && propProxyStates.has(prop)) {
          throw new Error("prop listener already exists");
        }
        if (listeners.size) {
          const remove = propProxyState[2](createPropListener(prop));
          propProxyStates.set(prop, [propProxyState, remove]);
        } else {
          propProxyStates.set(prop, [propProxyState]);
        }
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
          const remove = propProxyState[2](createPropListener(prop));
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
    let initializing = true;
    const handler = createHandler(
      () => initializing,
      addPropListener,
      removePropListener,
      notifyUpdate
    );
    const proxyObject = newProxy(baseObject, handler);
    proxyCache.set(baseObject, proxyObject);
    const proxyState = [baseObject, ensureVersion, addListener];
    proxyStateMap.set(proxyObject, proxyState);
    Reflect.ownKeys(baseObject).forEach((key) => {
      const desc = Object.getOwnPropertyDescriptor(
        baseObject,
        key
      );
      if ("value" in desc && desc.writable) {
        proxyObject[key] = baseObject[key];
      }
    });
    initializing = false;
    return proxyObject;
  }
  function subscribe(proxyObject, callback, notifyInSync) {
    const proxyState = proxyStateMap.get(proxyObject);
    if ((__vite_import_meta_env__$1 ? "production" : void 0) !== "production" && !proxyState) {
      console.warn("Please use proxy object");
    }
    let promise;
    const ops = [];
    const addListener = proxyState[2];
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
  function snapshot(proxyObject) {
    const proxyState = proxyStateMap.get(proxyObject);
    if ((__vite_import_meta_env__$1 ? "production" : void 0) !== "production" && !proxyState) {
      console.warn("Please use proxy object");
    }
    const [target, ensureVersion] = proxyState;
    return createSnapshot(target, ensureVersion());
  }
  const __vite_import_meta_env__ = { "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SSR": false };
  const useAffectedDebugValue = (state, affected) => {
    const pathList = require$$0.useRef();
    require$$0.useEffect(() => {
      pathList.current = affectedToPathList(state, affected);
    });
    require$$0.useDebugValue(pathList.current);
  };
  const condUseAffectedDebugValue = useAffectedDebugValue;
  const targetCache = /* @__PURE__ */ new WeakMap();
  function useSnapshot(proxyObject, options) {
    const notifyInSync = void 0;
    const affected = require$$0.useMemo(
      () => proxyObject && /* @__PURE__ */ new WeakMap(),
      [proxyObject]
    );
    const lastSnapshot = require$$0.useRef();
    let inRender = true;
    const currSnapshot = require$$0.useSyncExternalStore(
      require$$0.useCallback(
        (callback) => {
          const unsub = subscribe(proxyObject, callback);
          callback();
          return unsub;
        },
        [proxyObject, notifyInSync]
      ),
      () => {
        const nextSnapshot = snapshot(proxyObject);
        try {
          if (!inRender && lastSnapshot.current && !isChanged(
            lastSnapshot.current,
            nextSnapshot,
            affected,
            /* @__PURE__ */ new WeakMap()
          )) {
            return lastSnapshot.current;
          }
        } catch (e) {
        }
        return nextSnapshot;
      },
      () => snapshot(proxyObject)
    );
    inRender = false;
    require$$0.useLayoutEffect(() => {
      lastSnapshot.current = currSnapshot;
    });
    if ((__vite_import_meta_env__ ? "production" : void 0) !== "production") {
      condUseAffectedDebugValue(currSnapshot, affected);
    }
    const proxyCache2 = require$$0.useMemo(() => /* @__PURE__ */ new WeakMap(), []);
    return createProxy(currSnapshot, affected, proxyCache2, targetCache);
  }
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
    var r = new i32(b[30]);
    for (var i = 1; i < 30; ++i) {
      for (var j = b[i]; j < b[i + 1]; ++j) {
        r[j] = j - b[i] << 5 | i;
      }
    }
    return { b, r };
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
  var hMap = function(cd, mb, r) {
    var s = cd.length;
    var i = 0;
    var l2 = new u16(mb);
    for (; i < s; ++i) {
      if (cd[i])
        ++l2[cd[i] - 1];
    }
    var le = new u16(mb);
    for (i = 1; i < mb; ++i) {
      le[i] = le[i - 1] + l2[i - 1] << 1;
    }
    var co;
    {
      co = new u16(s);
      for (i = 0; i < s; ++i) {
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
  var slc = function(v, s, e) {
    if (e == null || e > v.length)
      e = v.length;
    return new u8(v.subarray(s, e));
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
    var e = new Error(msg || ec[ind]);
    e.code = ind;
    if (Error.captureStackTrace)
      Error.captureStackTrace(e, err);
    if (!nt)
      throw e;
    return e;
  };
  var wbits = function(d, p2, v) {
    v <<= p2 & 7;
    var o = p2 / 8 | 0;
    d[o] |= v;
    d[o + 1] |= v >> 8;
  };
  var wbits16 = function(d, p2, v) {
    v <<= p2 & 7;
    var o = p2 / 8 | 0;
    d[o] |= v;
    d[o + 1] |= v >> 8;
    d[o + 2] |= v >> 16;
  };
  var hTree = function(d, mb) {
    var t = [];
    for (var i = 0; i < d.length; ++i) {
      if (d[i])
        t.push({ s: i, f: d[i] });
    }
    var s = t.length;
    var t2 = t.slice();
    if (!s)
      return { t: et, l: 0 };
    if (s == 1) {
      var v = new u8(t[0].s + 1);
      v[t[0].s] = 1;
      return { t: v, l: 1 };
    }
    t.sort(function(a, b) {
      return a.f - b.f;
    });
    t.push({ s: -1, f: 25001 });
    var l2 = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
    t[0] = { s: -1, f: l2.f + r.f, l: l2, r };
    while (i1 != s - 1) {
      l2 = t[t[i0].f < t[i2].f ? i0++ : i2++];
      r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
      t[i1++] = { s: -1, f: l2.f + r.f, l: l2, r };
    }
    var maxSym = t2[0].s;
    for (var i = 1; i < s; ++i) {
      if (t2[i].s > maxSym)
        maxSym = t2[i].s;
    }
    var tr = new u16(maxSym + 1);
    var mbt = ln(t[i1 - 1], tr, 0);
    if (mbt > mb) {
      var i = 0, dt = 0;
      var lft = mbt - mb, cst = 1 << lft;
      t2.sort(function(a, b) {
        return tr[b.s] - tr[a.s] || a.f - b.f;
      });
      for (; i < s; ++i) {
        var i2_1 = t2[i].s;
        if (tr[i2_1] > mb) {
          dt += cst - (1 << mbt - tr[i2_1]);
          tr[i2_1] = mb;
        } else
          break;
      }
      dt >>= lft;
      while (dt > 0) {
        var i2_2 = t2[i].s;
        if (tr[i2_2] < mb)
          dt -= 1 << mb - tr[i2_2]++ - 1;
        else
          ++i;
      }
      for (; i >= 0 && dt; --i) {
        var i2_3 = t2[i].s;
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
  var lc = function(c) {
    var s = c.length;
    while (s && !c[--s])
      ;
    var cl = new u16(++s);
    var cli = 0, cln = c[0], cls = 1;
    var w = function(v) {
      cl[cli++] = v;
    };
    for (var i = 1; i <= s; ++i) {
      if (c[i] == cln && i != s)
        ++cls;
      else {
        if (!cln && cls > 2) {
          for (; cls > 138; cls -= 138)
            w(32754);
          if (cls > 2) {
            w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
            cls = 0;
          }
        } else if (cls > 3) {
          w(cln), --cls;
          for (; cls > 6; cls -= 6)
            w(8304);
          if (cls > 2)
            w(cls - 3 << 5 | 8208), cls = 0;
        }
        while (cls--)
          w(cln);
        cls = 1;
        cln = c[i];
      }
    }
    return { c: cl.subarray(0, cli), n: s };
  };
  var clen = function(cf, cl) {
    var l2 = 0;
    for (var i = 0; i < cl.length; ++i)
      l2 += cf[i] * cl[i];
    return l2;
  };
  var wfblk = function(out, pos, dat) {
    var s = dat.length;
    var o = shft(pos + 2);
    out[o] = s & 255;
    out[o + 1] = s >> 8;
    out[o + 2] = out[o] ^ 255;
    out[o + 3] = out[o + 1] ^ 255;
    for (var i = 0; i < s; ++i)
      out[o + i + 4] = dat[i];
    return (o + 4 + s) * 8;
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
    var s = st.z || dat.length;
    var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7e3)) + post);
    var w = o.subarray(pre, o.length - post);
    var lst = st.l;
    var pos = (st.r || 0) & 7;
    if (lvl) {
      if (pos)
        w[0] = st.r >> 3;
      var opt = deo[lvl - 1];
      var n2 = opt >> 13, c = opt & 8191;
      var msk_1 = (1 << plvl) - 1;
      var prev = st.p || new u16(32768), head = st.h || new u16(msk_1 + 1);
      var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
      var hsh = function(i2) {
        return (dat[i2] ^ dat[i2 + 1] << bs1_1 ^ dat[i2 + 2] << bs2_1) & msk_1;
      };
      var syms = new i32(25e3);
      var lf = new u16(288), df = new u16(32);
      var lc_1 = 0, eb = 0, i = st.i || 0, li = 0, wi = st.w || 0, bs = 0;
      for (; i + 2 < s; ++i) {
        var hv = hsh(i);
        var imod = i & 32767, pimod = head[hv];
        prev[imod] = pimod;
        head[hv] = imod;
        if (wi <= i) {
          var rem = s - i;
          if ((lc_1 > 7e3 || li > 24576) && (rem > 423 || !lst)) {
            pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
            li = lc_1 = eb = 0, bs = i;
            for (var j = 0; j < 286; ++j)
              lf[j] = 0;
            for (var j = 0; j < 30; ++j)
              df[j] = 0;
          }
          var l2 = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
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
      for (i = Math.max(i, wi); i < s; ++i) {
        syms[li++] = dat[i];
        ++lf[dat[i]];
      }
      pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
      if (!lst) {
        st.r = pos & 7 | w[pos / 8 | 0] << 3;
        pos -= 7;
        st.h = head, st.p = prev, st.i = i, st.w = wi;
      }
    } else {
      for (var i = st.w || 0; i < s + lst; i += 65535) {
        var e = i + 65535;
        if (e >= s) {
          w[pos / 8 | 0] = lst;
          e = s;
        }
        pos = wfblk(w, pos + 1, dat.subarray(i, e));
      }
      st.i = s;
    }
    return slc(o, 0, pre + shft(pos) + post);
  };
  var crct = /* @__PURE__ */ function() {
    var t = new Int32Array(256);
    for (var i = 0; i < 256; ++i) {
      var c = i, k2 = 9;
      while (--k2)
        c = (c & 1 && -306674912) ^ c >>> 1;
      t[i] = c;
    }
    return t;
  }();
  var crc = function() {
    var c = -1;
    return {
      p: function(d) {
        var cr = c;
        for (var i = 0; i < d.length; ++i)
          cr = crct[cr & 255 ^ d[i]] ^ cr >>> 8;
        c = cr;
      },
      d: function() {
        return ~c;
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
  var mrg = function(a, b) {
    var o = {};
    for (var k2 in a)
      o[k2] = a[k2];
    for (var k2 in b)
      o[k2] = b[k2];
    return o;
  };
  var wbytes = function(d, b, v) {
    for (; v; ++b)
      d[b] = v, v >>>= 8;
  };
  function deflateSync(data, opts) {
    return dopt(data, opts || {}, 0, 0);
  }
  var fltn = function(d, p2, t, o) {
    for (var k2 in d) {
      var val = d[k2], n2 = p2 + k2, op = o;
      if (Array.isArray(val))
        op = mrg(o, val[1]), val = val[0];
      if (val instanceof u8)
        t[n2] = [val, op];
      else {
        t[n2 += "/"] = [new u8(0), op];
        fltn(val, n2, t, o);
      }
    }
  };
  var te = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
  var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
  var tds = 0;
  try {
    td.decode(et, { stream: true });
    tds = 1;
  } catch (e) {
  }
  function strToU8(str, latin1) {
    var i;
    if (te)
      return te.encode(str);
    var l2 = str.length;
    var ar = new u8(str.length + (str.length >> 1));
    var ai = 0;
    var w = function(v) {
      ar[ai++] = v;
    };
    for (var i = 0; i < l2; ++i) {
      if (ai + 5 > ar.length) {
        var n2 = new u8(ai + 8 + (l2 - i << 1));
        n2.set(ar);
        ar = n2;
      }
      var c = str.charCodeAt(i);
      if (c < 128 || latin1)
        w(c);
      else if (c < 2048)
        w(192 | c >> 6), w(128 | c & 63);
      else if (c > 55295 && c < 57344)
        c = 65536 + (c & 1023 << 10) | str.charCodeAt(++i) & 1023, w(240 | c >> 18), w(128 | c >> 12 & 63), w(128 | c >> 6 & 63), w(128 | c & 63);
      else
        w(224 | c >> 12), w(128 | c >> 6 & 63), w(128 | c & 63);
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
  var wzh = function(d, b, f2, fn, u, c, ce, co) {
    var fl2 = fn.length, ex = f2.extra, col = co && co.length;
    var exl = exfl(ex);
    wbytes(d, b, ce != null ? 33639248 : 67324752), b += 4;
    if (ce != null)
      d[b++] = 20, d[b++] = f2.os;
    d[b] = 20, b += 2;
    d[b++] = f2.flag << 1 | (c < 0 && 8), d[b++] = u && 8;
    d[b++] = f2.compression & 255, d[b++] = f2.compression >> 8;
    var dt = new Date(f2.mtime == null ? Date.now() : f2.mtime), y = dt.getFullYear() - 1980;
    if (y < 0 || y > 119)
      err(10);
    wbytes(d, b, y << 25 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >> 1), b += 4;
    if (c != -1) {
      wbytes(d, b, f2.crc);
      wbytes(d, b + 4, c < 0 ? -c - 2 : c);
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
  var wzf = function(o, b, c, d, e) {
    wbytes(o, b, 101010256);
    wbytes(o, b + 8, c);
    wbytes(o, b + 10, c);
    wbytes(o, b + 12, d);
    wbytes(o, b + 16, e);
  };
  function zipSync(data, opts) {
    if (!opts)
      opts = {};
    var r = {};
    var files2 = [];
    fltn(data, "", r, opts);
    var o = 0;
    var tot = 0;
    for (var fn in r) {
      var _a2 = r[fn], file = _a2[0], p2 = _a2[1];
      var compression = p2.level == 0 ? 0 : 8;
      var f2 = strToU8(fn), s = f2.length;
      var com = p2.comment, m2 = com && strToU8(com), ms = m2 && m2.length;
      var exl = exfl(p2.extra);
      if (s > 65535)
        err(11);
      var d = compression ? deflateSync(file, p2) : file, l2 = d.length;
      var c = crc();
      c.p(file);
      files2.push(mrg(p2, {
        size: file.length,
        crc: c.d(),
        c: d,
        f: f2,
        m: m2,
        u: s != fn.length || m2 && com.length != ms,
        o,
        compression
      }));
      o += 30 + s + exl + l2;
      tot += 76 + 2 * (s + exl) + (ms || 0) + l2;
    }
    var out = new u8(tot + 22), oe = o, cdl = tot - o;
    for (var i = 0; i < files2.length; ++i) {
      var f2 = files2[i];
      wzh(out, f2.o, f2, f2.f, f2.u, f2.c.length);
      var badd = 30 + f2.f.length + exfl(f2.extra);
      out.set(f2.c, f2.o + badd);
      wzh(out, o, f2, f2.f, f2.u, f2.c.length, f2.o, f2.m), o += 16 + badd + (f2.m ? f2.m.length : 0);
    }
    wzf(out, o, files2.length, cdl, oe);
    return out;
  }
  var FileSaver_min = { exports: {} };
  (function(module, exports) {
    (function(a, b) {
      b();
    })(commonjsGlobal, function() {
      function b(a2, b2) {
        return "undefined" == typeof b2 ? b2 = { autoBom: false } : "object" != typeof b2 && (console.warn("Deprecated: Expected third argument to be a object"), b2 = { autoBom: !b2 }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], { type: a2.type }) : a2;
      }
      function c(a2, b2, c2) {
        var d2 = new XMLHttpRequest();
        d2.open("GET", a2), d2.responseType = "blob", d2.onload = function() {
          g(d2.response, b2, c2);
        }, d2.onerror = function() {
          console.error("could not download file");
        }, d2.send();
      }
      function d(a2) {
        var b2 = new XMLHttpRequest();
        b2.open("HEAD", a2, false);
        try {
          b2.send();
        } catch (a3) {
        }
        return 200 <= b2.status && 299 >= b2.status;
      }
      function e(a2) {
        try {
          a2.dispatchEvent(new MouseEvent("click"));
        } catch (c2) {
          var b2 = document.createEvent("MouseEvents");
          b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
        }
      }
      var f2 = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof commonjsGlobal && commonjsGlobal.global === commonjsGlobal ? commonjsGlobal : void 0, a = f2.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f2.saveAs || ("object" != typeof window || window !== f2 ? function() {
      } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h) {
        var i = f2.URL || f2.webkitURL, j = document.createElement("a");
        g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", "string" == typeof b2 ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
          i.revokeObjectURL(j.href);
        }, 4e4), setTimeout(function() {
          e(j);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function(f3, g2, h) {
        if (g2 = g2 || f3.name || "download", "string" != typeof f3) navigator.msSaveOrOpenBlob(b(f3, h), g2);
        else if (d(f3)) c(f3, g2, h);
        else {
          var i = document.createElement("a");
          i.href = f3, i.target = "_blank", setTimeout(function() {
            e(i);
          });
        }
      } : function(b2, d2, e2, g2) {
        if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), "string" == typeof b2) return c(b2, d2, e2);
        var h = "application/octet-stream" === b2.type, i = /constructor/i.test(f2.HTMLElement) || f2.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((j || h && i || a) && "undefined" != typeof FileReader) {
          var k2 = new FileReader();
          k2.onloadend = function() {
            var a2 = k2.result;
            a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
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
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
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
    TaskStatus2[TaskStatus2["All"] = 9] = "All";
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
      case 9:
        return "all";
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
      case 9:
        return "全部";
    }
  }
  class TelegraphAdapter extends AbstractAdapter {
    async generateGallery() {
      const { origin } = _unsafeWindow.location;
      const { T: t } = _unsafeWindow;
      const tasks = {};
      const imgs = _unsafeWindow.document.querySelectorAll("img");
      imgs.forEach((img, key) => {
        const pageNo = `${key + 1}`.padStart(3, "0");
        const id = `${t.pageId}-${pageNo}`;
        const url = img.src;
        tasks[id] = {
          id,
          url,
          status: TaskStatus.Pending,
          name: `${pageNo}`,
          referer: origin
        };
      });
      const header = _unsafeWindow.document.querySelector(
        ".tl_article_header > h1"
      );
      if (header === null) {
        throw new Error(`未获取到标题`);
      }
      return {
        id: t.pageId,
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
      const baseUrl = `https://i${serverId}.nhentai.net`;
      nhGallery.images.pages.forEach((image, index) => {
        const pageNo = `${index + 1}`;
        const id = `${nhGallery.id}-${pageNo.padStart(3, "0")}`;
        let extName = ``;
        switch (image.t) {
          case "j":
            extName = ".jpg";
            break;
          case "p":
            extName = ".png";
            break;
          default:
            console.warn(`未知的图片文件类型：${image.t}`);
            break;
        }
        const uri = `/galleries/${mediaId}/${pageNo}${extName}`;
        tasks[id] = {
          id,
          url: `${baseUrl}${uri}`,
          name: `${pageNo.padStart(3, "0")}`,
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
    const {
      className,
      direction,
      justify,
      align,
      gap,
      flex,
      children,
      style,
      onClick
    } = props;
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
        children
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
  const ProgressBar = ({
    flex = 1,
    height = 20,
    min = 0,
    max = 100,
    value,
    status,
    statusList = []
  }) => {
    let blocks = [];
    let text = "";
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
      if (max > 0) {
        text = `${value}/${max} (${percent.toFixed(2)}%)`;
      }
    } else {
      let succ = 0;
      blocks = statusList.map((status2, index) => {
        if (status2 === TaskStatus.Success) {
          succ++;
        }
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
      const total = statusList.length;
      let percent = succ * 100 / total;
      if (total > 0) {
        text = `${succ}/${total} (${percent.toFixed(2)}%)`;
      }
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { className: "progress-bar", direction: "column", flex, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Flex, { className: "blocks", style: { height }, children: blocks }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Flex,
        {
          className: "text",
          justify: "center",
          style: { height, marginTop: -height, fontSize: height * 0.7 },
          children: text
        }
      )
    ] });
  };
  function getSize() {
    return {
      width: _unsafeWindow.innerWidth,
      height: _unsafeWindow.innerHeight
    };
  }
  const useWindowSize = () => {
    const [size, setSize] = require$$0.useState(getSize());
    require$$0.useEffect(() => {
      setSize(getSize());
    }, []);
    return size;
  };
  const store = proxy({
    // #region state
    gallery: void 0,
    status: void 0,
    // #endregion
    // #region computed
    get tasks() {
      const results = [];
      if (this.gallery !== void 0) {
        const tasks = this.gallery.tasks;
        for (const id in tasks) {
          const task = tasks[id];
          if (task !== void 0) {
            results.push(task);
          }
        }
      }
      return results;
    },
    get filtered() {
      if (this.status === void 0 || this.status === TaskStatus.All) {
        return this.tasks;
      }
      return this.tasks.filter((t) => t.status === this.status);
    },
    get statusList() {
      const results = this.tasks.map((t) => t.status);
      return results;
    },
    get statusAmounts() {
      const amounts = {
        [TaskStatus.Pending]: 0,
        [TaskStatus.Running]: 0,
        [TaskStatus.Success]: 0,
        [TaskStatus.Error]: 0,
        [TaskStatus.All]: 0
      };
      for (const task of this.tasks) {
        amounts[task.status]++;
        amounts[TaskStatus.All]++;
      }
      return amounts;
    }
    // #endregion
  });
  const TaskView = ({ task }) => {
    const { id, name, status, total, loaded } = task;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { className: "task-view", gap: 8, align: "center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Flex, { className: "task-name", justify: "end", children: name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ProgressBar,
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
    const items = TaskStatusList.map((s) => {
      const statusName = getStatusName(s);
      const classNames = [
        "task-filter-item",
        `task-filter-item-${statusName}`
      ];
      if (status === s) {
        classNames.push(`task-filter-item-${statusName}-active`);
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Flex,
        {
          className: classNames.join(" "),
          flex: 1,
          justify: "center",
          align: "center",
          onClick: () => onChange(s),
          children: [
            getStatusText(s),
            " (999)"
          ]
        },
        `${s}`
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
  const version = "1.7.0";
  function RadioGroup({ value, items = [], onChange }) {
    const radios = items.map(
      ({ value: radioValue, element }) => {
        const children = element ?? `${radioValue}`;
        const backgroundColor = value === radioValue ? "rgba(128, 128, 128, 0.3)" : void 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Flex,
          {
            flex: 1,
            justify: "center",
            style: {
              backgroundColor,
              borderRadius: 5
            },
            onClick: () => {
              if (onChange !== void 0) {
                onChange(radioValue);
              }
            },
            children
          },
          `radio-${radioValue}`
        );
      }
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Flex, { flex: 1, children: radios });
  }
  const files = {};
  const TaskPanel = (props) => {
    const windowSize = useWindowSize();
    const { margin = 8, padding = 8, border = 1 } = props;
    const panelHeight = windowSize.height - 2 * (margin + padding + border);
    const [minimized, setMinimized] = require$$0.useState(false);
    const snap = useSnapshot(store);
    const sizeToggleIcon = minimized ? /* @__PURE__ */ jsxRuntimeExports.jsx(IconDown, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(IconUp, {});
    function onDownloadAllClick() {
      console.debug(`点击下载按钮`);
      for (const task of snap.tasks) {
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
      const headers = {};
      if (task.referer !== void 0) {
        headers.Referer = task.referer;
      }
      _GM_xmlhttpRequest({
        method: "GET",
        url: task.url,
        headers,
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
            `任务 ${task.id} 下载完成，状态码：${event.status}，长度：${blob.size}，类型：${blob.type}`
          );
          if (event.status === 200) {
            updateTask({
              id: task.id,
              status: TaskStatus.Success,
              loaded: blob.size,
              total: blob.size
            });
            const buffer = await blob.arrayBuffer();
            let extName = "img";
            switch (blob.type) {
              case "image/jpeg":
                extName = "jpg";
                break;
              case "image/png":
                extName = "png";
                break;
              default:
                console.warn(`未知的blob类型：${blob.type}`);
                break;
            }
            const fileName = `${task.name}.${extName}`;
            files[fileName] = new Uint8Array(buffer);
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(TaskFilter, { status: snap.status, onChange: onTaskFilterChange });
    const hidable = minimized ? null : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        RadioGroup,
        {
          value: store.status,
          items: [
            {
              value: TaskStatus.All,
              element: `全部 (${snap.statusAmounts[TaskStatus.All]})`
            },
            {
              value: TaskStatus.Pending,
              element: `等待 (${snap.statusAmounts[TaskStatus.Pending]})`
            },
            {
              value: TaskStatus.Running,
              element: `下载 (${snap.statusAmounts[TaskStatus.Running]})`
            },
            {
              value: TaskStatus.Error,
              element: `错误 (${snap.statusAmounts[TaskStatus.Error]})`
            },
            {
              value: TaskStatus.Success,
              element: `完成 (${snap.statusAmounts[TaskStatus.Success]})`
            }
          ],
          onChange: (value) => {
            console.info(`任务状态过滤器切换为：`, value);
            store.status = value;
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TaskList,
        {
          tasks: store.filtered,
          style: {
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
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Flex,
              {
                className: "buttons-right",
                flex: 1,
                justify: "end",
                align: "center",
                gap: 8,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: version }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "btn-toggle", onClick: onToggleClick, children: sizeToggleIcon })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flex, { className: "total-progress-row", align: "center", gap: 8, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { flex: 1, statusList: store.statusList }) }),
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