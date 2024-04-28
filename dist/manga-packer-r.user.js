// ==UserScript==
// @name       manga-packer-r
// @namespace  com.undsf.tmus.mgpk
// @version    1.2.2
// @author     monkey
// @icon       https://vitejs.dev/logo.svg
// @match      https://telegra.ph/*
// @match      https://nhentai.net/g/*/
// @require    https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js
// @require    https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js
// @grant      GM_addStyle
// @grant      GM_xmlhttpRequest
// @grant      unsafeWindow
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const e=document.createElement("style");e.textContent=t,document.head.append(e)})(" .task-panel .total-progress,.task-list{color:#000}.task-list::-webkit-scrollbar{width:3px}.task-list::-webkit-scrollbar-thumb{background-color:#7878784d}.task-list .task-view .file-name{color:#000} ");

(function (React, ReactDOM__default) {
  'use strict';

  function _interopNamespaceDefault(e) {
    const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (e) {
      for (const k in e) {
        if (k !== 'default') {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }

  const React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);
  const ReactDOM__default__namespace = /*#__PURE__*/_interopNamespaceDefault(ReactDOM__default);

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
  var f$1 = React, k$1 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$2 = Object.prototype.hasOwnProperty, n$1 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
  function q$1(c2, a, g2) {
    var b2, d2 = {}, e2 = null, h2 = null;
    void 0 !== g2 && (e2 = "" + g2);
    void 0 !== a.key && (e2 = "" + a.key);
    void 0 !== a.ref && (h2 = a.ref);
    for (b2 in a)
      m$2.call(a, b2) && !p$1.hasOwnProperty(b2) && (d2[b2] = a[b2]);
    if (c2 && c2.defaultProps)
      for (b2 in a = c2.defaultProps, a)
        void 0 === d2[b2] && (d2[b2] = a[b2]);
    return { $$typeof: k$1, type: c2, key: e2, ref: h2, props: d2, _owner: n$1.current };
  }
  reactJsxRuntime_production_min.Fragment = l$1;
  reactJsxRuntime_production_min.jsx = q$1;
  reactJsxRuntime_production_min.jsxs = q$1;
  {
    jsxRuntime.exports = reactJsxRuntime_production_min;
  }
  var jsxRuntimeExports = jsxRuntime.exports;
  var client = {};
  var m$1 = ReactDOM__default;
  {
    client.createRoot = m$1.createRoot;
    client.hydrateRoot = m$1.hydrateRoot;
  }
  var define_import_meta_env_default$1 = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: false };
  let keyCount = 0;
  function atom(read, write) {
    const key = `atom${++keyCount}`;
    const config = {
      toString: () => key
    };
    if (typeof read === "function") {
      config.read = read;
    } else {
      config.init = read;
      config.read = defaultRead;
      config.write = defaultWrite;
    }
    if (write) {
      config.write = write;
    }
    return config;
  }
  function defaultRead(get2) {
    return get2(this);
  }
  function defaultWrite(get2, set2, arg) {
    return set2(
      this,
      typeof arg === "function" ? arg(get2(this)) : arg
    );
  }
  const isSelfAtom = (atom2, a) => atom2.unstable_is ? atom2.unstable_is(a) : a === atom2;
  const hasInitialValue = (atom2) => "init" in atom2;
  const isActuallyWritableAtom = (atom2) => !!atom2.write;
  const cancelPromiseMap = /* @__PURE__ */ new WeakMap();
  const registerCancelPromise = (promise, cancel) => {
    cancelPromiseMap.set(promise, cancel);
    promise.catch(() => {
    }).finally(() => cancelPromiseMap.delete(promise));
  };
  const cancelPromise = (promise, next2) => {
    const cancel = cancelPromiseMap.get(promise);
    if (cancel) {
      cancelPromiseMap.delete(promise);
      cancel(next2);
    }
  };
  const resolvePromise = (promise, value) => {
    promise.status = "fulfilled";
    promise.value = value;
  };
  const rejectPromise = (promise, e2) => {
    promise.status = "rejected";
    promise.reason = e2;
  };
  const isPromiseLike$1 = (x) => typeof (x == null ? void 0 : x.then) === "function";
  const isEqualAtomValue = (a, b2) => !!a && "v" in a && "v" in b2 && Object.is(a.v, b2.v);
  const isEqualAtomError = (a, b2) => !!a && "e" in a && "e" in b2 && Object.is(a.e, b2.e);
  const hasPromiseAtomValue = (a) => !!a && "v" in a && a.v instanceof Promise;
  const isEqualPromiseAtomValue = (a, b2) => "v" in a && "v" in b2 && a.v.orig && a.v.orig === b2.v.orig;
  const returnAtomValue = (atomState) => {
    if ("e" in atomState) {
      throw atomState.e;
    }
    return atomState.v;
  };
  const createStore$1 = () => {
    const atomStateMap = /* @__PURE__ */ new WeakMap();
    const mountedMap = /* @__PURE__ */ new WeakMap();
    const pendingStack = [];
    const pendingMap = /* @__PURE__ */ new WeakMap();
    let devListenersRev2;
    let mountedAtoms;
    if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
      devListenersRev2 = /* @__PURE__ */ new Set();
      mountedAtoms = /* @__PURE__ */ new Set();
    }
    const getAtomState = (atom2) => atomStateMap.get(atom2);
    const addPendingDependent = (atom2, atomState) => {
      atomState.d.forEach((_, a) => {
        var _a2;
        if (!pendingMap.has(a)) {
          const aState = getAtomState(a);
          (_a2 = pendingStack[pendingStack.length - 1]) == null ? void 0 : _a2.add(a);
          pendingMap.set(a, [aState, /* @__PURE__ */ new Set()]);
          if (aState) {
            addPendingDependent(a, aState);
          }
        }
        pendingMap.get(a)[1].add(atom2);
      });
    };
    const setAtomState = (atom2, atomState) => {
      var _a2;
      if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
        Object.freeze(atomState);
      }
      const prevAtomState = getAtomState(atom2);
      atomStateMap.set(atom2, atomState);
      if (!pendingMap.has(atom2)) {
        (_a2 = pendingStack[pendingStack.length - 1]) == null ? void 0 : _a2.add(atom2);
        pendingMap.set(atom2, [prevAtomState, /* @__PURE__ */ new Set()]);
        addPendingDependent(atom2, atomState);
      }
      if (hasPromiseAtomValue(prevAtomState)) {
        const next2 = "v" in atomState ? atomState.v instanceof Promise ? atomState.v : Promise.resolve(atomState.v) : Promise.reject(atomState.e);
        if (prevAtomState.v !== next2) {
          cancelPromise(prevAtomState.v, next2);
        }
      }
    };
    const updateDependencies = (atom2, nextAtomState, nextDependencies, keepPreviousDependencies) => {
      const dependencies = new Map(
        keepPreviousDependencies ? nextAtomState.d : null
      );
      let changed = false;
      nextDependencies.forEach((aState, a) => {
        if (!aState && isSelfAtom(atom2, a)) {
          aState = nextAtomState;
        }
        if (aState) {
          dependencies.set(a, aState);
          if (nextAtomState.d.get(a) !== aState) {
            changed = true;
          }
        } else if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
          console.warn("[Bug] atom state not found");
        }
      });
      if (changed || nextAtomState.d.size !== dependencies.size) {
        nextAtomState.d = dependencies;
      }
    };
    const setAtomValue = (atom2, value, nextDependencies, keepPreviousDependencies) => {
      const prevAtomState = getAtomState(atom2);
      const nextAtomState = {
        d: (prevAtomState == null ? void 0 : prevAtomState.d) || /* @__PURE__ */ new Map(),
        v: value
      };
      if (nextDependencies) {
        updateDependencies(
          atom2,
          nextAtomState,
          nextDependencies,
          keepPreviousDependencies
        );
      }
      if (isEqualAtomValue(prevAtomState, nextAtomState) && prevAtomState.d === nextAtomState.d) {
        return prevAtomState;
      }
      if (hasPromiseAtomValue(prevAtomState) && hasPromiseAtomValue(nextAtomState) && isEqualPromiseAtomValue(prevAtomState, nextAtomState)) {
        if (prevAtomState.d === nextAtomState.d) {
          return prevAtomState;
        } else {
          nextAtomState.v = prevAtomState.v;
        }
      }
      setAtomState(atom2, nextAtomState);
      return nextAtomState;
    };
    const setAtomValueOrPromise = (atom2, valueOrPromise, nextDependencies, abortPromise) => {
      if (isPromiseLike$1(valueOrPromise)) {
        let continuePromise;
        const updatePromiseDependencies = () => {
          const prevAtomState = getAtomState(atom2);
          if (!hasPromiseAtomValue(prevAtomState) || prevAtomState.v !== promise) {
            return;
          }
          const nextAtomState = setAtomValue(
            atom2,
            promise,
            nextDependencies
          );
          if (mountedMap.has(atom2) && prevAtomState.d !== nextAtomState.d) {
            mountDependencies(atom2, nextAtomState, prevAtomState.d);
          }
        };
        const promise = new Promise((resolve, reject) => {
          let settled = false;
          valueOrPromise.then(
            (v2) => {
              if (!settled) {
                settled = true;
                resolvePromise(promise, v2);
                resolve(v2);
                updatePromiseDependencies();
              }
            },
            (e2) => {
              if (!settled) {
                settled = true;
                rejectPromise(promise, e2);
                reject(e2);
                updatePromiseDependencies();
              }
            }
          );
          continuePromise = (next2) => {
            if (!settled) {
              settled = true;
              next2.then(
                (v2) => resolvePromise(promise, v2),
                (e2) => rejectPromise(promise, e2)
              );
              resolve(next2);
            }
          };
        });
        promise.orig = valueOrPromise;
        promise.status = "pending";
        registerCancelPromise(promise, (next2) => {
          if (next2) {
            continuePromise(next2);
          }
          abortPromise == null ? void 0 : abortPromise();
        });
        return setAtomValue(atom2, promise, nextDependencies, true);
      }
      return setAtomValue(atom2, valueOrPromise, nextDependencies);
    };
    const setAtomError = (atom2, error, nextDependencies) => {
      const prevAtomState = getAtomState(atom2);
      const nextAtomState = {
        d: (prevAtomState == null ? void 0 : prevAtomState.d) || /* @__PURE__ */ new Map(),
        e: error
      };
      if (nextDependencies) {
        updateDependencies(atom2, nextAtomState, nextDependencies);
      }
      if (isEqualAtomError(prevAtomState, nextAtomState) && prevAtomState.d === nextAtomState.d) {
        return prevAtomState;
      }
      setAtomState(atom2, nextAtomState);
      return nextAtomState;
    };
    const readAtomState = (atom2, force) => {
      const atomState = getAtomState(atom2);
      if (!force && atomState) {
        if (mountedMap.has(atom2)) {
          return atomState;
        }
        if (Array.from(atomState.d).every(([a, s]) => {
          if (a === atom2) {
            return true;
          }
          const aState = readAtomState(a);
          return aState === s || isEqualAtomValue(aState, s);
        })) {
          return atomState;
        }
      }
      const nextDependencies = /* @__PURE__ */ new Map();
      let isSync = true;
      const getter = (a) => {
        if (isSelfAtom(atom2, a)) {
          const aState2 = getAtomState(a);
          if (aState2) {
            nextDependencies.set(a, aState2);
            return returnAtomValue(aState2);
          }
          if (hasInitialValue(a)) {
            nextDependencies.set(a, void 0);
            return a.init;
          }
          throw new Error("no atom init");
        }
        const aState = readAtomState(a);
        nextDependencies.set(a, aState);
        return returnAtomValue(aState);
      };
      let controller;
      let setSelf;
      const options = {
        get signal() {
          if (!controller) {
            controller = new AbortController();
          }
          return controller.signal;
        },
        get setSelf() {
          if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production" && !isActuallyWritableAtom(atom2)) {
            console.warn("setSelf function cannot be used with read-only atom");
          }
          if (!setSelf && isActuallyWritableAtom(atom2)) {
            setSelf = (...args) => {
              if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production" && isSync) {
                console.warn("setSelf function cannot be called in sync");
              }
              if (!isSync) {
                return writeAtom(atom2, ...args);
              }
            };
          }
          return setSelf;
        }
      };
      try {
        const valueOrPromise = atom2.read(getter, options);
        return setAtomValueOrPromise(
          atom2,
          valueOrPromise,
          nextDependencies,
          () => controller == null ? void 0 : controller.abort()
        );
      } catch (error) {
        return setAtomError(atom2, error, nextDependencies);
      } finally {
        isSync = false;
      }
    };
    const readAtom = (atom2) => returnAtomValue(readAtomState(atom2));
    const recomputeDependents = (atom2) => {
      const getDependents = (a) => {
        var _a2, _b2;
        const dependents = new Set((_a2 = mountedMap.get(a)) == null ? void 0 : _a2.t);
        (_b2 = pendingMap.get(a)) == null ? void 0 : _b2[1].forEach((dependent) => {
          dependents.add(dependent);
        });
        return dependents;
      };
      const topsortedAtoms = new Array();
      const markedAtoms = /* @__PURE__ */ new Set();
      const visit = (n2) => {
        if (markedAtoms.has(n2)) {
          return;
        }
        markedAtoms.add(n2);
        for (const m2 of getDependents(n2)) {
          if (n2 !== m2) {
            visit(m2);
          }
        }
        topsortedAtoms.push(n2);
      };
      visit(atom2);
      const changedAtoms = /* @__PURE__ */ new Set([atom2]);
      for (let i = topsortedAtoms.length - 1; i >= 0; --i) {
        const a = topsortedAtoms[i];
        const prevAtomState = getAtomState(a);
        if (!prevAtomState) {
          continue;
        }
        let hasChangedDeps = false;
        for (const dep of prevAtomState.d.keys()) {
          if (dep !== a && changedAtoms.has(dep)) {
            hasChangedDeps = true;
            break;
          }
        }
        if (hasChangedDeps) {
          const nextAtomState = readAtomState(a, true);
          if (!isEqualAtomValue(prevAtomState, nextAtomState)) {
            changedAtoms.add(a);
          }
        }
      }
    };
    const writeAtomState = (atom2, ...args) => {
      const getter = (a) => returnAtomValue(readAtomState(a));
      const setter = (a, ...args2) => {
        const isSync = pendingStack.length > 0;
        if (!isSync) {
          pendingStack.push(/* @__PURE__ */ new Set([a]));
        }
        let r;
        if (isSelfAtom(atom2, a)) {
          if (!hasInitialValue(a)) {
            throw new Error("atom not writable");
          }
          const prevAtomState = getAtomState(a);
          const nextAtomState = setAtomValueOrPromise(a, args2[0]);
          if (!isEqualAtomValue(prevAtomState, nextAtomState)) {
            recomputeDependents(a);
          }
        } else {
          r = writeAtomState(a, ...args2);
        }
        if (!isSync) {
          const flushed = flushPending(pendingStack.pop());
          if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
            devListenersRev2.forEach(
              (l2) => l2({ type: "async-write", flushed })
            );
          }
        }
        return r;
      };
      const result = atom2.write(getter, setter, ...args);
      return result;
    };
    const writeAtom = (atom2, ...args) => {
      pendingStack.push(/* @__PURE__ */ new Set([atom2]));
      const result = writeAtomState(atom2, ...args);
      const flushed = flushPending(pendingStack.pop());
      if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
        devListenersRev2.forEach((l2) => l2({ type: "write", flushed }));
      }
      return result;
    };
    const mountAtom = (atom2, initialDependent, onMountQueue) => {
      var _a2;
      const existingMount = mountedMap.get(atom2);
      if (existingMount) {
        if (initialDependent) {
          existingMount.t.add(initialDependent);
        }
        return existingMount;
      }
      const queue = onMountQueue || [];
      (_a2 = getAtomState(atom2)) == null ? void 0 : _a2.d.forEach((_, a) => {
        if (a !== atom2) {
          mountAtom(a, atom2, queue);
        }
      });
      readAtomState(atom2);
      const mounted = {
        t: new Set(initialDependent && [initialDependent]),
        l: /* @__PURE__ */ new Set()
      };
      mountedMap.set(atom2, mounted);
      if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
        mountedAtoms.add(atom2);
      }
      if (isActuallyWritableAtom(atom2) && atom2.onMount) {
        const { onMount } = atom2;
        queue.push(() => {
          const onUnmount = onMount((...args) => writeAtom(atom2, ...args));
          if (onUnmount) {
            mounted.u = onUnmount;
          }
        });
      }
      if (!onMountQueue) {
        queue.forEach((f2) => f2());
      }
      return mounted;
    };
    const canUnmountAtom = (atom2, mounted) => !mounted.l.size && (!mounted.t.size || mounted.t.size === 1 && mounted.t.has(atom2));
    const tryUnmountAtom = (atom2, mounted) => {
      if (!canUnmountAtom(atom2, mounted)) {
        return;
      }
      const onUnmount = mounted.u;
      if (onUnmount) {
        onUnmount();
      }
      mountedMap.delete(atom2);
      if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
        mountedAtoms.delete(atom2);
      }
      const atomState = getAtomState(atom2);
      if (atomState) {
        if (hasPromiseAtomValue(atomState)) {
          cancelPromise(atomState.v);
        }
        atomState.d.forEach((_, a) => {
          if (a !== atom2) {
            const mountedDep = mountedMap.get(a);
            if (mountedDep) {
              mountedDep.t.delete(atom2);
              tryUnmountAtom(a, mountedDep);
            }
          }
        });
      } else if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
        console.warn("[Bug] could not find atom state to unmount", atom2);
      }
    };
    const mountDependencies = (atom2, atomState, prevDependencies) => {
      const depSet = new Set(atomState.d.keys());
      const maybeUnmountAtomSet = /* @__PURE__ */ new Set();
      prevDependencies == null ? void 0 : prevDependencies.forEach((_, a) => {
        if (depSet.has(a)) {
          depSet.delete(a);
          return;
        }
        maybeUnmountAtomSet.add(a);
        const mounted = mountedMap.get(a);
        if (mounted) {
          mounted.t.delete(atom2);
        }
      });
      depSet.forEach((a) => {
        mountAtom(a, atom2);
      });
      maybeUnmountAtomSet.forEach((a) => {
        const mounted = mountedMap.get(a);
        if (mounted) {
          tryUnmountAtom(a, mounted);
        }
      });
    };
    const flushPending = (pendingAtoms) => {
      let flushed;
      if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
        flushed = /* @__PURE__ */ new Set();
      }
      const pending = [];
      const collectPending = (pendingAtom) => {
        var _a2;
        if (!pendingMap.has(pendingAtom)) {
          return;
        }
        const [prevAtomState, dependents] = pendingMap.get(pendingAtom);
        pendingMap.delete(pendingAtom);
        pending.push([pendingAtom, prevAtomState]);
        dependents.forEach(collectPending);
        (_a2 = getAtomState(pendingAtom)) == null ? void 0 : _a2.d.forEach((_, a) => collectPending(a));
      };
      pendingAtoms.forEach(collectPending);
      pending.forEach(([atom2, prevAtomState]) => {
        const atomState = getAtomState(atom2);
        if (!atomState) {
          if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
            console.warn("[Bug] no atom state to flush");
          }
          return;
        }
        if (atomState !== prevAtomState) {
          const mounted = mountedMap.get(atom2);
          if (mounted && atomState.d !== (prevAtomState == null ? void 0 : prevAtomState.d)) {
            mountDependencies(atom2, atomState, prevAtomState == null ? void 0 : prevAtomState.d);
          }
          if (mounted && !// TODO This seems pretty hacky. Hope to fix it.
          // Maybe we could `mountDependencies` in `setAtomState`?
          (!hasPromiseAtomValue(prevAtomState) && (isEqualAtomValue(prevAtomState, atomState) || isEqualAtomError(prevAtomState, atomState)))) {
            mounted.l.forEach((listener) => listener());
            if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
              flushed.add(atom2);
            }
          }
        }
      });
      if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
        return flushed;
      }
    };
    const subscribeAtom = (atom2, listener) => {
      const mounted = mountAtom(atom2);
      const flushed = flushPending([atom2]);
      const listeners = mounted.l;
      listeners.add(listener);
      if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
        devListenersRev2.forEach(
          (l2) => l2({ type: "sub", flushed })
        );
      }
      return () => {
        listeners.delete(listener);
        tryUnmountAtom(atom2, mounted);
        if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
          devListenersRev2.forEach((l2) => l2({ type: "unsub" }));
        }
      };
    };
    if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
      return {
        get: readAtom,
        set: writeAtom,
        sub: subscribeAtom,
        // store dev methods (these are tentative and subject to change without notice)
        dev_subscribe_store: (l2) => {
          devListenersRev2.add(l2);
          return () => {
            devListenersRev2.delete(l2);
          };
        },
        dev_get_mounted_atoms: () => mountedAtoms.values(),
        dev_get_atom_state: (a) => atomStateMap.get(a),
        dev_get_mounted: (a) => mountedMap.get(a),
        dev_restore_atoms: (values) => {
          pendingStack.push(/* @__PURE__ */ new Set());
          for (const [atom2, valueOrPromise] of values) {
            if (hasInitialValue(atom2)) {
              setAtomValueOrPromise(atom2, valueOrPromise);
              recomputeDependents(atom2);
            }
          }
          const flushed = flushPending(pendingStack.pop());
          devListenersRev2.forEach(
            (l2) => l2({ type: "restore", flushed })
          );
        }
      };
    }
    return {
      get: readAtom,
      set: writeAtom,
      sub: subscribeAtom
    };
  };
  let defaultStore;
  const getDefaultStore$1 = () => {
    if (!defaultStore) {
      defaultStore = createStore$1();
      if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production") {
        globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = defaultStore);
        if (globalThis.__JOTAI_DEFAULT_STORE__ !== defaultStore) {
          console.warn(
            "Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"
          );
        }
      }
    }
    return defaultStore;
  };
  const createStore = createStore$1;
  const getDefaultStore = getDefaultStore$1;
  var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: false };
  const StoreContext = React.createContext(
    void 0
  );
  const useStore = (options) => {
    const store = React.useContext(StoreContext);
    return store || getDefaultStore();
  };
  const Provider = ({
    children,
    store
  }) => {
    const storeRef = React.useRef();
    if (!store && !storeRef.current) {
      storeRef.current = createStore();
    }
    return React.createElement(
      StoreContext.Provider,
      {
        value: store || storeRef.current
      },
      children
    );
  };
  const isPromiseLike = (x) => typeof (x == null ? void 0 : x.then) === "function";
  const use = React.use || ((promise) => {
    if (promise.status === "pending") {
      throw promise;
    } else if (promise.status === "fulfilled") {
      return promise.value;
    } else if (promise.status === "rejected") {
      throw promise.reason;
    } else {
      promise.status = "pending";
      promise.then(
        (v2) => {
          promise.status = "fulfilled";
          promise.value = v2;
        },
        (e2) => {
          promise.status = "rejected";
          promise.reason = e2;
        }
      );
      throw promise;
    }
  });
  function useAtomValue(atom2, options) {
    const store = useStore();
    const [[valueFromReducer, storeFromReducer, atomFromReducer], rerender] = React.useReducer(
      (prev2) => {
        const nextValue = store.get(atom2);
        if (Object.is(prev2[0], nextValue) && prev2[1] === store && prev2[2] === atom2) {
          return prev2;
        }
        return [nextValue, store, atom2];
      },
      void 0,
      () => [store.get(atom2), store, atom2]
    );
    let value = valueFromReducer;
    if (storeFromReducer !== store || atomFromReducer !== atom2) {
      rerender();
      value = store.get(atom2);
    }
    const delay = void 0;
    React.useEffect(() => {
      const unsub = store.sub(atom2, () => {
        rerender();
      });
      rerender();
      return unsub;
    }, [store, atom2, delay]);
    React.useDebugValue(value);
    return isPromiseLike(value) ? use(value) : value;
  }
  function useSetAtom(atom2, options) {
    const store = useStore();
    const setAtom = React.useCallback(
      (...args) => {
        if ((define_import_meta_env_default ? "production" : void 0) !== "production" && !("write" in atom2)) {
          throw new Error("not writable atom");
        }
        return store.set(atom2, ...args);
      },
      [store, atom2]
    );
    return setAtom;
  }
  function useAtom(atom2, options) {
    return [
      useAtomValue(atom2),
      // We do wrong type assertion here, which results in throwing an error.
      useSetAtom(atom2)
    ];
  }
  var IconContext = /* @__PURE__ */ React.createContext({});
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _iterableToArrayLimit(r, l2) {
    var t2 = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t2) {
      var e2, n2, i, u2, a = [], f2 = true, o = false;
      try {
        if (i = (t2 = t2.call(r)).next, 0 === l2) {
          if (Object(t2) !== t2)
            return;
          f2 = false;
        } else
          for (; !(f2 = (e2 = i.call(t2)).done) && (a.push(e2.value), a.length !== l2); f2 = true)
            ;
      } catch (r2) {
        o = true, n2 = r2;
      } finally {
        try {
          if (!f2 && null != t2["return"] && (u2 = t2["return"](), Object(u2) !== u2))
            return;
        } finally {
          if (o)
            throw n2;
        }
      }
      return a;
    }
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++)
      arr2[i] = arr[i];
    return arr2;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n2 = Object.prototype.toString.call(o).slice(8, -1);
    if (n2 === "Object" && o.constructor)
      n2 = o.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray(o, minLen);
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof(o);
  }
  function toPrimitive(t2, r) {
    if ("object" != _typeof(t2) || !t2)
      return t2;
    var e2 = t2[Symbol.toPrimitive];
    if (void 0 !== e2) {
      var i = e2.call(t2, r || "default");
      if ("object" != _typeof(i))
        return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t2);
  }
  function toPropertyKey(t2) {
    var i = toPrimitive(t2, "string");
    return "symbol" == _typeof(i) ? i : i + "";
  }
  function _defineProperty(obj, key, value) {
    key = toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null)
      return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key))
          continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  var classnames = { exports: {} };
  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
  (function(module) {
    (function() {
      var hasOwn = {}.hasOwnProperty;
      function classNames2() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames2.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames2.default = classNames2;
        module.exports = classNames2;
      } else {
        window.classNames = classNames2;
      }
    })();
  })(classnames);
  var classnamesExports = classnames.exports;
  const classNames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
  function bound01(n2, max) {
    if (isOnePointZero(n2)) {
      n2 = "100%";
    }
    var isPercent = isPercentage(n2);
    n2 = max === 360 ? n2 : Math.min(max, Math.max(0, parseFloat(n2)));
    if (isPercent) {
      n2 = parseInt(String(n2 * max), 10) / 100;
    }
    if (Math.abs(n2 - max) < 1e-6) {
      return 1;
    }
    if (max === 360) {
      n2 = (n2 < 0 ? n2 % max + max : n2 % max) / parseFloat(String(max));
    } else {
      n2 = n2 % max / parseFloat(String(max));
    }
    return n2;
  }
  function clamp01(val) {
    return Math.min(1, Math.max(0, val));
  }
  function isOnePointZero(n2) {
    return typeof n2 === "string" && n2.indexOf(".") !== -1 && parseFloat(n2) === 1;
  }
  function isPercentage(n2) {
    return typeof n2 === "string" && n2.indexOf("%") !== -1;
  }
  function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
      a = 1;
    }
    return a;
  }
  function convertToPercentage(n2) {
    if (n2 <= 1) {
      return "".concat(Number(n2) * 100, "%");
    }
    return n2;
  }
  function pad2(c2) {
    return c2.length === 1 ? "0" + c2 : String(c2);
  }
  function rgbToRgb(r, g2, b2) {
    return {
      r: bound01(r, 255) * 255,
      g: bound01(g2, 255) * 255,
      b: bound01(b2, 255) * 255
    };
  }
  function rgbToHsl(r, g2, b2) {
    r = bound01(r, 255);
    g2 = bound01(g2, 255);
    b2 = bound01(b2, 255);
    var max = Math.max(r, g2, b2);
    var min = Math.min(r, g2, b2);
    var h2 = 0;
    var s = 0;
    var l2 = (max + min) / 2;
    if (max === min) {
      s = 0;
      h2 = 0;
    } else {
      var d2 = max - min;
      s = l2 > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
      switch (max) {
        case r:
          h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
          break;
        case g2:
          h2 = (b2 - r) / d2 + 2;
          break;
        case b2:
          h2 = (r - g2) / d2 + 4;
          break;
      }
      h2 /= 6;
    }
    return { h: h2, s, l: l2 };
  }
  function hue2rgb(p2, q2, t2) {
    if (t2 < 0) {
      t2 += 1;
    }
    if (t2 > 1) {
      t2 -= 1;
    }
    if (t2 < 1 / 6) {
      return p2 + (q2 - p2) * (6 * t2);
    }
    if (t2 < 1 / 2) {
      return q2;
    }
    if (t2 < 2 / 3) {
      return p2 + (q2 - p2) * (2 / 3 - t2) * 6;
    }
    return p2;
  }
  function hslToRgb(h2, s, l2) {
    var r;
    var g2;
    var b2;
    h2 = bound01(h2, 360);
    s = bound01(s, 100);
    l2 = bound01(l2, 100);
    if (s === 0) {
      g2 = l2;
      b2 = l2;
      r = l2;
    } else {
      var q2 = l2 < 0.5 ? l2 * (1 + s) : l2 + s - l2 * s;
      var p2 = 2 * l2 - q2;
      r = hue2rgb(p2, q2, h2 + 1 / 3);
      g2 = hue2rgb(p2, q2, h2);
      b2 = hue2rgb(p2, q2, h2 - 1 / 3);
    }
    return { r: r * 255, g: g2 * 255, b: b2 * 255 };
  }
  function rgbToHsv(r, g2, b2) {
    r = bound01(r, 255);
    g2 = bound01(g2, 255);
    b2 = bound01(b2, 255);
    var max = Math.max(r, g2, b2);
    var min = Math.min(r, g2, b2);
    var h2 = 0;
    var v2 = max;
    var d2 = max - min;
    var s = max === 0 ? 0 : d2 / max;
    if (max === min) {
      h2 = 0;
    } else {
      switch (max) {
        case r:
          h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
          break;
        case g2:
          h2 = (b2 - r) / d2 + 2;
          break;
        case b2:
          h2 = (r - g2) / d2 + 4;
          break;
      }
      h2 /= 6;
    }
    return { h: h2, s, v: v2 };
  }
  function hsvToRgb(h2, s, v2) {
    h2 = bound01(h2, 360) * 6;
    s = bound01(s, 100);
    v2 = bound01(v2, 100);
    var i = Math.floor(h2);
    var f2 = h2 - i;
    var p2 = v2 * (1 - s);
    var q2 = v2 * (1 - f2 * s);
    var t2 = v2 * (1 - (1 - f2) * s);
    var mod = i % 6;
    var r = [v2, q2, p2, p2, t2, v2][mod];
    var g2 = [t2, v2, v2, q2, p2, p2][mod];
    var b2 = [p2, p2, t2, v2, v2, q2][mod];
    return { r: r * 255, g: g2 * 255, b: b2 * 255 };
  }
  function rgbToHex(r, g2, b2, allow3Char) {
    var hex = [
      pad2(Math.round(r).toString(16)),
      pad2(Math.round(g2).toString(16)),
      pad2(Math.round(b2).toString(16))
    ];
    if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join("");
  }
  function rgbaToHex(r, g2, b2, a, allow4Char) {
    var hex = [
      pad2(Math.round(r).toString(16)),
      pad2(Math.round(g2).toString(16)),
      pad2(Math.round(b2).toString(16)),
      pad2(convertDecimalToHex(a))
    ];
    if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join("");
  }
  function convertDecimalToHex(d2) {
    return Math.round(parseFloat(d2) * 255).toString(16);
  }
  function convertHexToDecimal(h2) {
    return parseIntFromHex(h2) / 255;
  }
  function parseIntFromHex(val) {
    return parseInt(val, 16);
  }
  function numberInputToObject(color) {
    return {
      r: color >> 16,
      g: (color & 65280) >> 8,
      b: color & 255
    };
  }
  var names = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };
  function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v2 = null;
    var l2 = null;
    var ok = false;
    var format = false;
    if (typeof color === "string") {
      color = stringInputToObject(color);
    }
    if (typeof color === "object") {
      if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
        rgb = rgbToRgb(color.r, color.g, color.b);
        ok = true;
        format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
        s = convertToPercentage(color.s);
        v2 = convertToPercentage(color.v);
        rgb = hsvToRgb(color.h, s, v2);
        ok = true;
        format = "hsv";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
        s = convertToPercentage(color.s);
        l2 = convertToPercentage(color.l);
        rgb = hslToRgb(color.h, s, l2);
        ok = true;
        format = "hsl";
      }
      if (Object.prototype.hasOwnProperty.call(color, "a")) {
        a = color.a;
      }
    }
    a = boundAlpha(a);
    return {
      ok,
      format: color.format || format,
      r: Math.min(255, Math.max(rgb.r, 0)),
      g: Math.min(255, Math.max(rgb.g, 0)),
      b: Math.min(255, Math.max(rgb.b, 0)),
      a
    };
  }
  var CSS_INTEGER = "[-\\+]?\\d+%?";
  var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
  var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
  var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
  var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
  var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
    rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
    hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
    hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
    hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
    hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
  function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
      return false;
    }
    var named = false;
    if (names[color]) {
      color = names[color];
      named = true;
    } else if (color === "transparent") {
      return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }
    var match2 = matchers.rgb.exec(color);
    if (match2) {
      return { r: match2[1], g: match2[2], b: match2[3] };
    }
    match2 = matchers.rgba.exec(color);
    if (match2) {
      return { r: match2[1], g: match2[2], b: match2[3], a: match2[4] };
    }
    match2 = matchers.hsl.exec(color);
    if (match2) {
      return { h: match2[1], s: match2[2], l: match2[3] };
    }
    match2 = matchers.hsla.exec(color);
    if (match2) {
      return { h: match2[1], s: match2[2], l: match2[3], a: match2[4] };
    }
    match2 = matchers.hsv.exec(color);
    if (match2) {
      return { h: match2[1], s: match2[2], v: match2[3] };
    }
    match2 = matchers.hsva.exec(color);
    if (match2) {
      return { h: match2[1], s: match2[2], v: match2[3], a: match2[4] };
    }
    match2 = matchers.hex8.exec(color);
    if (match2) {
      return {
        r: parseIntFromHex(match2[1]),
        g: parseIntFromHex(match2[2]),
        b: parseIntFromHex(match2[3]),
        a: convertHexToDecimal(match2[4]),
        format: named ? "name" : "hex8"
      };
    }
    match2 = matchers.hex6.exec(color);
    if (match2) {
      return {
        r: parseIntFromHex(match2[1]),
        g: parseIntFromHex(match2[2]),
        b: parseIntFromHex(match2[3]),
        format: named ? "name" : "hex"
      };
    }
    match2 = matchers.hex4.exec(color);
    if (match2) {
      return {
        r: parseIntFromHex(match2[1] + match2[1]),
        g: parseIntFromHex(match2[2] + match2[2]),
        b: parseIntFromHex(match2[3] + match2[3]),
        a: convertHexToDecimal(match2[4] + match2[4]),
        format: named ? "name" : "hex8"
      };
    }
    match2 = matchers.hex3.exec(color);
    if (match2) {
      return {
        r: parseIntFromHex(match2[1] + match2[1]),
        g: parseIntFromHex(match2[2] + match2[2]),
        b: parseIntFromHex(match2[3] + match2[3]),
        format: named ? "name" : "hex"
      };
    }
    return false;
  }
  function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
  }
  var TinyColor = (
    /** @class */
    function() {
      function TinyColor2(color, opts) {
        if (color === void 0) {
          color = "";
        }
        if (opts === void 0) {
          opts = {};
        }
        var _a2;
        if (color instanceof TinyColor2) {
          return color;
        }
        if (typeof color === "number") {
          color = numberInputToObject(color);
        }
        this.originalInput = color;
        var rgb = inputToRGB(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a2 = opts.format) !== null && _a2 !== void 0 ? _a2 : rgb.format;
        this.gradientType = opts.gradientType;
        if (this.r < 1) {
          this.r = Math.round(this.r);
        }
        if (this.g < 1) {
          this.g = Math.round(this.g);
        }
        if (this.b < 1) {
          this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
      }
      TinyColor2.prototype.isDark = function() {
        return this.getBrightness() < 128;
      };
      TinyColor2.prototype.isLight = function() {
        return !this.isDark();
      };
      TinyColor2.prototype.getBrightness = function() {
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
      };
      TinyColor2.prototype.getLuminance = function() {
        var rgb = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
          R = RsRGB / 12.92;
        } else {
          R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
          G = GsRGB / 12.92;
        } else {
          G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
          B = BsRGB / 12.92;
        } else {
          B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
      };
      TinyColor2.prototype.getAlpha = function() {
        return this.a;
      };
      TinyColor2.prototype.setAlpha = function(alpha) {
        this.a = boundAlpha(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
      };
      TinyColor2.prototype.isMonochrome = function() {
        var s = this.toHsl().s;
        return s === 0;
      };
      TinyColor2.prototype.toHsv = function() {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
      };
      TinyColor2.prototype.toHsvString = function() {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        var h2 = Math.round(hsv.h * 360);
        var s = Math.round(hsv.s * 100);
        var v2 = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(".concat(h2, ", ").concat(s, "%, ").concat(v2, "%)") : "hsva(".concat(h2, ", ").concat(s, "%, ").concat(v2, "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toHsl = function() {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
      };
      TinyColor2.prototype.toHslString = function() {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        var h2 = Math.round(hsl.h * 360);
        var s = Math.round(hsl.s * 100);
        var l2 = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(".concat(h2, ", ").concat(s, "%, ").concat(l2, "%)") : "hsla(".concat(h2, ", ").concat(s, "%, ").concat(l2, "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toHex = function(allow3Char) {
        if (allow3Char === void 0) {
          allow3Char = false;
        }
        return rgbToHex(this.r, this.g, this.b, allow3Char);
      };
      TinyColor2.prototype.toHexString = function(allow3Char) {
        if (allow3Char === void 0) {
          allow3Char = false;
        }
        return "#" + this.toHex(allow3Char);
      };
      TinyColor2.prototype.toHex8 = function(allow4Char) {
        if (allow4Char === void 0) {
          allow4Char = false;
        }
        return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
      };
      TinyColor2.prototype.toHex8String = function(allow4Char) {
        if (allow4Char === void 0) {
          allow4Char = false;
        }
        return "#" + this.toHex8(allow4Char);
      };
      TinyColor2.prototype.toHexShortString = function(allowShortChar) {
        if (allowShortChar === void 0) {
          allowShortChar = false;
        }
        return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
      };
      TinyColor2.prototype.toRgb = function() {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a
        };
      };
      TinyColor2.prototype.toRgbString = function() {
        var r = Math.round(this.r);
        var g2 = Math.round(this.g);
        var b2 = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(r, ", ").concat(g2, ", ").concat(b2, ")") : "rgba(".concat(r, ", ").concat(g2, ", ").concat(b2, ", ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toPercentageRgb = function() {
        var fmt = function(x) {
          return "".concat(Math.round(bound01(x, 255) * 100), "%");
        };
        return {
          r: fmt(this.r),
          g: fmt(this.g),
          b: fmt(this.b),
          a: this.a
        };
      };
      TinyColor2.prototype.toPercentageRgbString = function() {
        var rnd = function(x) {
          return Math.round(bound01(x, 255) * 100);
        };
        return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toName = function() {
        if (this.a === 0) {
          return "transparent";
        }
        if (this.a < 1) {
          return false;
        }
        var hex = "#" + rgbToHex(this.r, this.g, this.b, false);
        for (var _i = 0, _a2 = Object.entries(names); _i < _a2.length; _i++) {
          var _b2 = _a2[_i], key = _b2[0], value = _b2[1];
          if (hex === value) {
            return key;
          }
        }
        return false;
      };
      TinyColor2.prototype.toString = function(format) {
        var formatSet = Boolean(format);
        format = format !== null && format !== void 0 ? format : this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith("hex") || format === "name");
        if (needsAlphaFormat) {
          if (format === "name" && this.a === 0) {
            return this.toName();
          }
          return this.toRgbString();
        }
        if (format === "rgb") {
          formattedString = this.toRgbString();
        }
        if (format === "prgb") {
          formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
          formattedString = this.toHexString();
        }
        if (format === "hex3") {
          formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
          formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
          formattedString = this.toHex8String();
        }
        if (format === "name") {
          formattedString = this.toName();
        }
        if (format === "hsl") {
          formattedString = this.toHslString();
        }
        if (format === "hsv") {
          formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
      };
      TinyColor2.prototype.toNumber = function() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
      };
      TinyColor2.prototype.clone = function() {
        return new TinyColor2(this.toString());
      };
      TinyColor2.prototype.lighten = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.brighten = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor2(rgb);
      };
      TinyColor2.prototype.darken = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.tint = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        return this.mix("white", amount);
      };
      TinyColor2.prototype.shade = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        return this.mix("black", amount);
      };
      TinyColor2.prototype.desaturate = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.saturate = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.greyscale = function() {
        return this.desaturate(100);
      };
      TinyColor2.prototype.spin = function(amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.mix = function(color, amount) {
        if (amount === void 0) {
          amount = 50;
        }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor2(color).toRgb();
        var p2 = amount / 100;
        var rgba = {
          r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
          g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
          b: (rgb2.b - rgb1.b) * p2 + rgb1.b,
          a: (rgb2.a - rgb1.a) * p2 + rgb1.a
        };
        return new TinyColor2(rgba);
      };
      TinyColor2.prototype.analogous = function(results, slices) {
        if (results === void 0) {
          results = 6;
        }
        if (slices === void 0) {
          slices = 30;
        }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
          hsl.h = (hsl.h + part) % 360;
          ret.push(new TinyColor2(hsl));
        }
        return ret;
      };
      TinyColor2.prototype.complement = function() {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.monochromatic = function(results) {
        if (results === void 0) {
          results = 6;
        }
        var hsv = this.toHsv();
        var h2 = hsv.h;
        var s = hsv.s;
        var v2 = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
          res.push(new TinyColor2({ h: h2, s, v: v2 }));
          v2 = (v2 + modification) % 1;
        }
        return res;
      };
      TinyColor2.prototype.splitcomplement = function() {
        var hsl = this.toHsl();
        var h2 = hsl.h;
        return [
          this,
          new TinyColor2({ h: (h2 + 72) % 360, s: hsl.s, l: hsl.l }),
          new TinyColor2({ h: (h2 + 216) % 360, s: hsl.s, l: hsl.l })
        ];
      };
      TinyColor2.prototype.onBackground = function(background) {
        var fg = this.toRgb();
        var bg = new TinyColor2(background).toRgb();
        var alpha = fg.a + bg.a * (1 - fg.a);
        return new TinyColor2({
          r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
          g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
          b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
          a: alpha
        });
      };
      TinyColor2.prototype.triad = function() {
        return this.polyad(3);
      };
      TinyColor2.prototype.tetrad = function() {
        return this.polyad(4);
      };
      TinyColor2.prototype.polyad = function(n2) {
        var hsl = this.toHsl();
        var h2 = hsl.h;
        var result = [this];
        var increment = 360 / n2;
        for (var i = 1; i < n2; i++) {
          result.push(new TinyColor2({ h: (h2 + i * increment) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
      };
      TinyColor2.prototype.equals = function(color) {
        return this.toRgbString() === new TinyColor2(color).toRgbString();
      };
      return TinyColor2;
    }()
  );
  var hueStep = 2;
  var saturationStep = 0.16;
  var saturationStep2 = 0.05;
  var brightnessStep1 = 0.05;
  var brightnessStep2 = 0.15;
  var lightColorCount = 5;
  var darkColorCount = 4;
  var darkColorMap = [{
    index: 7,
    opacity: 0.15
  }, {
    index: 6,
    opacity: 0.25
  }, {
    index: 5,
    opacity: 0.3
  }, {
    index: 5,
    opacity: 0.45
  }, {
    index: 5,
    opacity: 0.65
  }, {
    index: 5,
    opacity: 0.85
  }, {
    index: 4,
    opacity: 0.9
  }, {
    index: 3,
    opacity: 0.95
  }, {
    index: 2,
    opacity: 0.97
  }, {
    index: 1,
    opacity: 0.98
  }];
  function toHsv(_ref) {
    var r = _ref.r, g2 = _ref.g, b2 = _ref.b;
    var hsv = rgbToHsv(r, g2, b2);
    return {
      h: hsv.h * 360,
      s: hsv.s,
      v: hsv.v
    };
  }
  function toHex(_ref2) {
    var r = _ref2.r, g2 = _ref2.g, b2 = _ref2.b;
    return "#".concat(rgbToHex(r, g2, b2, false));
  }
  function mix(rgb1, rgb2, amount) {
    var p2 = amount / 100;
    var rgb = {
      r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
      g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
      b: (rgb2.b - rgb1.b) * p2 + rgb1.b
    };
    return rgb;
  }
  function getHue(hsv, i, light) {
    var hue;
    if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
      hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
    } else {
      hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
    }
    if (hue < 0) {
      hue += 360;
    } else if (hue >= 360) {
      hue -= 360;
    }
    return hue;
  }
  function getSaturation(hsv, i, light) {
    if (hsv.h === 0 && hsv.s === 0) {
      return hsv.s;
    }
    var saturation;
    if (light) {
      saturation = hsv.s - saturationStep * i;
    } else if (i === darkColorCount) {
      saturation = hsv.s + saturationStep;
    } else {
      saturation = hsv.s + saturationStep2 * i;
    }
    if (saturation > 1) {
      saturation = 1;
    }
    if (light && i === lightColorCount && saturation > 0.1) {
      saturation = 0.1;
    }
    if (saturation < 0.06) {
      saturation = 0.06;
    }
    return Number(saturation.toFixed(2));
  }
  function getValue(hsv, i, light) {
    var value;
    if (light) {
      value = hsv.v + brightnessStep1 * i;
    } else {
      value = hsv.v - brightnessStep2 * i;
    }
    if (value > 1) {
      value = 1;
    }
    return Number(value.toFixed(2));
  }
  function generate$1(color) {
    var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var patterns = [];
    var pColor = inputToRGB(color);
    for (var i = lightColorCount; i > 0; i -= 1) {
      var hsv = toHsv(pColor);
      var colorString = toHex(inputToRGB({
        h: getHue(hsv, i, true),
        s: getSaturation(hsv, i, true),
        v: getValue(hsv, i, true)
      }));
      patterns.push(colorString);
    }
    patterns.push(toHex(pColor));
    for (var _i = 1; _i <= darkColorCount; _i += 1) {
      var _hsv = toHsv(pColor);
      var _colorString = toHex(inputToRGB({
        h: getHue(_hsv, _i),
        s: getSaturation(_hsv, _i),
        v: getValue(_hsv, _i)
      }));
      patterns.push(_colorString);
    }
    if (opts.theme === "dark") {
      return darkColorMap.map(function(_ref3) {
        var index2 = _ref3.index, opacity = _ref3.opacity;
        var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index2]), opacity * 100));
        return darkColorString;
      });
    }
    return patterns;
  }
  var presetPrimaryColors = {
    red: "#F5222D",
    volcano: "#FA541C",
    orange: "#FA8C16",
    gold: "#FAAD14",
    yellow: "#FADB14",
    lime: "#A0D911",
    green: "#52C41A",
    cyan: "#13C2C2",
    blue: "#1677FF",
    geekblue: "#2F54EB",
    purple: "#722ED1",
    magenta: "#EB2F96",
    grey: "#666666"
  };
  var presetPalettes = {};
  var presetDarkPalettes = {};
  Object.keys(presetPrimaryColors).forEach(function(key) {
    presetPalettes[key] = generate$1(presetPrimaryColors[key]);
    presetPalettes[key].primary = presetPalettes[key][5];
    presetDarkPalettes[key] = generate$1(presetPrimaryColors[key], {
      theme: "dark",
      backgroundColor: "#141414"
    });
    presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
  });
  var blue = presetPalettes.blue;
  function ownKeys(e2, r) {
    var t2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e2);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e2, r2).enumerable;
      })), t2.push.apply(t2, o);
    }
    return t2;
  }
  function _objectSpread2(e2) {
    for (var r = 1; r < arguments.length; r++) {
      var t2 = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t2), true).forEach(function(r2) {
        _defineProperty(e2, r2, t2[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r2) {
        Object.defineProperty(e2, r2, Object.getOwnPropertyDescriptor(t2, r2));
      });
    }
    return e2;
  }
  function canUseDom() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
  }
  function contains(root, n2) {
    if (!root) {
      return false;
    }
    if (root.contains) {
      return root.contains(n2);
    }
    var node2 = n2;
    while (node2) {
      if (node2 === root) {
        return true;
      }
      node2 = node2.parentNode;
    }
    return false;
  }
  var APPEND_ORDER = "data-rc-order";
  var APPEND_PRIORITY = "data-rc-priority";
  var MARK_KEY = "rc-util-key";
  var containerCache = /* @__PURE__ */ new Map();
  function getMark() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, mark = _ref.mark;
    if (mark) {
      return mark.startsWith("data-") ? mark : "data-".concat(mark);
    }
    return MARK_KEY;
  }
  function getContainer(option) {
    if (option.attachTo) {
      return option.attachTo;
    }
    var head = document.querySelector("head");
    return head || document.body;
  }
  function getOrder(prepend) {
    if (prepend === "queue") {
      return "prependQueue";
    }
    return prepend ? "prepend" : "append";
  }
  function findStyles(container) {
    return Array.from((containerCache.get(container) || container).children).filter(function(node2) {
      return node2.tagName === "STYLE";
    });
  }
  function injectCSS(css) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!canUseDom()) {
      return null;
    }
    var csp = option.csp, prepend = option.prepend, _option$priority = option.priority, priority = _option$priority === void 0 ? 0 : _option$priority;
    var mergedOrder = getOrder(prepend);
    var isPrependQueue = mergedOrder === "prependQueue";
    var styleNode = document.createElement("style");
    styleNode.setAttribute(APPEND_ORDER, mergedOrder);
    if (isPrependQueue && priority) {
      styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
    }
    if (csp !== null && csp !== void 0 && csp.nonce) {
      styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
    }
    styleNode.innerHTML = css;
    var container = getContainer(option);
    var firstChild = container.firstChild;
    if (prepend) {
      if (isPrependQueue) {
        var existStyle = (option.styles || findStyles(container)).filter(function(node2) {
          if (!["prepend", "prependQueue"].includes(node2.getAttribute(APPEND_ORDER))) {
            return false;
          }
          var nodePriority = Number(node2.getAttribute(APPEND_PRIORITY) || 0);
          return priority >= nodePriority;
        });
        if (existStyle.length) {
          container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
          return styleNode;
        }
      }
      container.insertBefore(styleNode, firstChild);
    } else {
      container.appendChild(styleNode);
    }
    return styleNode;
  }
  function findExistNode(key) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var container = getContainer(option);
    return (option.styles || findStyles(container)).find(function(node2) {
      return node2.getAttribute(getMark(option)) === key;
    });
  }
  function removeCSS(key) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var existNode = findExistNode(key, option);
    if (existNode) {
      var container = getContainer(option);
      container.removeChild(existNode);
    }
  }
  function syncRealContainer(container, option) {
    var cachedRealContainer = containerCache.get(container);
    if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
      var placeholderStyle = injectCSS("", option);
      var parentNode = placeholderStyle.parentNode;
      containerCache.set(container, parentNode);
      container.removeChild(placeholderStyle);
    }
  }
  function updateCSS(css, key) {
    var originOption = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var container = getContainer(originOption);
    var styles = findStyles(container);
    var option = _objectSpread2(_objectSpread2({}, originOption), {}, {
      styles
    });
    syncRealContainer(container, option);
    var existNode = findExistNode(key, option);
    if (existNode) {
      var _option$csp, _option$csp2;
      if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
        var _option$csp3;
        existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
      }
      if (existNode.innerHTML !== css) {
        existNode.innerHTML = css;
      }
      return existNode;
    }
    var newNode = injectCSS(css, option);
    newNode.setAttribute(getMark(option), key);
    return newNode;
  }
  function getRoot(ele) {
    var _ele$getRootNode;
    return ele === null || ele === void 0 || (_ele$getRootNode = ele.getRootNode) === null || _ele$getRootNode === void 0 ? void 0 : _ele$getRootNode.call(ele);
  }
  function inShadow(ele) {
    return getRoot(ele) instanceof ShadowRoot;
  }
  function getShadowRoot(ele) {
    return inShadow(ele) ? getRoot(ele) : null;
  }
  var warned = {};
  var preMessage = function preMessage2(fn) {
  };
  function warning$1(valid, message) {
  }
  function note(valid, message) {
  }
  function resetWarned() {
    warned = {};
  }
  function call(method, valid, message) {
    if (!valid && !warned[message]) {
      method(false, message);
      warned[message] = true;
    }
  }
  function warningOnce(valid, message) {
    call(warning$1, valid, message);
  }
  function noteOnce(valid, message) {
    call(note, valid, message);
  }
  warningOnce.preMessage = preMessage;
  warningOnce.resetWarned = resetWarned;
  warningOnce.noteOnce = noteOnce;
  function camelCase(input) {
    return input.replace(/-(.)/g, function(match2, g2) {
      return g2.toUpperCase();
    });
  }
  function warning(valid, message) {
    warningOnce(valid, "[@ant-design/icons] ".concat(message));
  }
  function isIconDefinition(target) {
    return _typeof(target) === "object" && typeof target.name === "string" && typeof target.theme === "string" && (_typeof(target.icon) === "object" || typeof target.icon === "function");
  }
  function normalizeAttrs() {
    var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Object.keys(attrs).reduce(function(acc, key) {
      var val = attrs[key];
      switch (key) {
        case "class":
          acc.className = val;
          delete acc.class;
          break;
        default:
          delete acc[key];
          acc[camelCase(key)] = val;
      }
      return acc;
    }, {});
  }
  function generate(node2, key, rootProps) {
    if (!rootProps) {
      return /* @__PURE__ */ React.createElement(node2.tag, _objectSpread2({
        key
      }, normalizeAttrs(node2.attrs)), (node2.children || []).map(function(child, index2) {
        return generate(child, "".concat(key, "-").concat(node2.tag, "-").concat(index2));
      }));
    }
    return /* @__PURE__ */ React.createElement(node2.tag, _objectSpread2(_objectSpread2({
      key
    }, normalizeAttrs(node2.attrs)), rootProps), (node2.children || []).map(function(child, index2) {
      return generate(child, "".concat(key, "-").concat(node2.tag, "-").concat(index2));
    }));
  }
  function getSecondaryColor(primaryColor) {
    return generate$1(primaryColor)[0];
  }
  function normalizeTwoToneColors(twoToneColor) {
    if (!twoToneColor) {
      return [];
    }
    return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
  }
  var iconStyles = "\n.anticon {\n  display: inline-flex;\n  alignItems: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
  var useInsertStyles = function useInsertStyles2(eleRef) {
    var _useContext = React.useContext(IconContext), csp = _useContext.csp, prefixCls = _useContext.prefixCls;
    var mergedStyleStr = iconStyles;
    if (prefixCls) {
      mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
    }
    React.useEffect(function() {
      var ele = eleRef.current;
      var shadowRoot = getShadowRoot(ele);
      updateCSS(mergedStyleStr, "@ant-design-icons", {
        prepend: true,
        csp,
        attachTo: shadowRoot
      });
    }, []);
  };
  var _excluded$7 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
  var twoToneColorPalette = {
    primaryColor: "#333",
    secondaryColor: "#E6E6E6",
    calculated: false
  };
  function setTwoToneColors(_ref) {
    var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
    twoToneColorPalette.primaryColor = primaryColor;
    twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
    twoToneColorPalette.calculated = !!secondaryColor;
  }
  function getTwoToneColors() {
    return _objectSpread2({}, twoToneColorPalette);
  }
  var IconBase = function IconBase2(props) {
    var icon = props.icon, className = props.className, onClick = props.onClick, style2 = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = _objectWithoutProperties(props, _excluded$7);
    var svgRef = React__namespace.useRef();
    var colors = twoToneColorPalette;
    if (primaryColor) {
      colors = {
        primaryColor,
        secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
      };
    }
    useInsertStyles(svgRef);
    warning(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
    if (!isIconDefinition(icon)) {
      return null;
    }
    var target = icon;
    if (target && typeof target.icon === "function") {
      target = _objectSpread2(_objectSpread2({}, target), {}, {
        icon: target.icon(colors.primaryColor, colors.secondaryColor)
      });
    }
    return generate(target.icon, "svg-".concat(target.name), _objectSpread2(_objectSpread2({
      className,
      onClick,
      style: style2,
      "data-icon": target.name,
      width: "1em",
      height: "1em",
      fill: "currentColor",
      "aria-hidden": "true"
    }, restProps), {}, {
      ref: svgRef
    }));
  };
  IconBase.displayName = "IconReact";
  IconBase.getTwoToneColors = getTwoToneColors;
  IconBase.setTwoToneColors = setTwoToneColors;
  function setTwoToneColor(twoToneColor) {
    var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
    return IconBase.setTwoToneColors({
      primaryColor,
      secondaryColor
    });
  }
  function getTwoToneColor() {
    var colors = IconBase.getTwoToneColors();
    if (!colors.calculated) {
      return colors.primaryColor;
    }
    return [colors.primaryColor, colors.secondaryColor];
  }
  var _excluded$6 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
  setTwoToneColor(blue.primary);
  var Icon = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
    var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = _objectWithoutProperties(props, _excluded$6);
    var _React$useContext = React__namespace.useContext(IconContext), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre, rootClassName = _React$useContext.rootClassName;
    var classString = classNames(rootClassName, prefixCls, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), "".concat(prefixCls, "-spin"), !!spin || icon.name === "loading"), className);
    var iconTabIndex = tabIndex;
    if (iconTabIndex === void 0 && onClick) {
      iconTabIndex = -1;
    }
    var svgStyle = rotate ? {
      msTransform: "rotate(".concat(rotate, "deg)"),
      transform: "rotate(".concat(rotate, "deg)")
    } : void 0;
    var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
    return /* @__PURE__ */ React__namespace.createElement("span", _extends({
      role: "img",
      "aria-label": icon.name
    }, restProps, {
      ref,
      tabIndex: iconTabIndex,
      onClick,
      className: classString
    }), /* @__PURE__ */ React__namespace.createElement(IconBase, {
      icon,
      primaryColor,
      secondaryColor,
      style: svgStyle
    }));
  });
  Icon.displayName = "AntdIcon";
  Icon.getTwoToneColor = getTwoToneColor;
  Icon.setTwoToneColor = setTwoToneColor;
  var CheckCircleFilled$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, "name": "check-circle", "theme": "filled" };
  var CheckCircleFilled = function CheckCircleFilled2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: CheckCircleFilled$1
    }));
  };
  var RefIcon$8 = /* @__PURE__ */ React__namespace.forwardRef(CheckCircleFilled);
  var CheckOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };
  var CheckOutlined = function CheckOutlined2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: CheckOutlined$1
    }));
  };
  var RefIcon$7 = /* @__PURE__ */ React__namespace.forwardRef(CheckOutlined);
  var CloseCircleFilled$1 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, "name": "close-circle", "theme": "filled" };
  var CloseCircleFilled = function CloseCircleFilled2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: CloseCircleFilled$1
    }));
  };
  var RefIcon$6 = /* @__PURE__ */ React__namespace.forwardRef(CloseCircleFilled);
  var CloseOutlined$1 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, "name": "close", "theme": "outlined" };
  var CloseOutlined = function CloseOutlined2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: CloseOutlined$1
    }));
  };
  var RefIcon$5 = /* @__PURE__ */ React__namespace.forwardRef(CloseOutlined);
  var DownloadOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, "name": "download", "theme": "outlined" };
  var DownloadOutlined = function DownloadOutlined2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: DownloadOutlined$1
    }));
  };
  var RefIcon$4 = /* @__PURE__ */ React__namespace.forwardRef(DownloadOutlined);
  var FileZipOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M296 392h64v64h-64zm0 190v160h128V582h-64v-62h-64v62zm80 48v64h-32v-64h32zm-16-302h64v64h-64zm-64-64h64v64h-64zm64 192h64v64h-64zm0-256h64v64h-64zm494.6 88.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h64v64h64v-64h174v216a42 42 0 0042 42h216v494z" } }] }, "name": "file-zip", "theme": "outlined" };
  var FileZipOutlined = function FileZipOutlined2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: FileZipOutlined$1
    }));
  };
  var RefIcon$3 = /* @__PURE__ */ React__namespace.forwardRef(FileZipOutlined);
  var LoadingOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
  var LoadingOutlined = function LoadingOutlined2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: LoadingOutlined$1
    }));
  };
  var RefIcon$2 = /* @__PURE__ */ React__namespace.forwardRef(LoadingOutlined);
  var RedoOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z" } }] }, "name": "redo", "theme": "outlined" };
  var RedoOutlined = function RedoOutlined2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: RedoOutlined$1
    }));
  };
  var RefIcon$1 = /* @__PURE__ */ React__namespace.forwardRef(RedoOutlined);
  var SettingOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z" } }] }, "name": "setting", "theme": "outlined" };
  var SettingOutlined = function SettingOutlined2(props, ref) {
    return /* @__PURE__ */ React__namespace.createElement(Icon, _extends({}, props, {
      ref,
      icon: SettingOutlined$1
    }));
  };
  var RefIcon = /* @__PURE__ */ React__namespace.forwardRef(SettingOutlined);
  var reactIs = { exports: {} };
  var reactIs_production_min = {};
  /**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var b = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), k = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), u;
  u = Symbol.for("react.module.reference");
  function v(a) {
    if ("object" === typeof a && null !== a) {
      var r = a.$$typeof;
      switch (r) {
        case b:
          switch (a = a.type, a) {
            case d:
            case f:
            case e:
            case m:
            case n:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case h:
                case l:
                case q:
                case p:
                case g:
                  return a;
                default:
                  return r;
              }
          }
        case c:
          return r;
      }
    }
  }
  reactIs_production_min.ContextConsumer = h;
  reactIs_production_min.ContextProvider = g;
  reactIs_production_min.Element = b;
  reactIs_production_min.ForwardRef = l;
  reactIs_production_min.Fragment = d;
  reactIs_production_min.Lazy = q;
  reactIs_production_min.Memo = p;
  reactIs_production_min.Portal = c;
  reactIs_production_min.Profiler = f;
  reactIs_production_min.StrictMode = e;
  reactIs_production_min.Suspense = m;
  reactIs_production_min.SuspenseList = n;
  reactIs_production_min.isAsyncMode = function() {
    return false;
  };
  reactIs_production_min.isConcurrentMode = function() {
    return false;
  };
  reactIs_production_min.isContextConsumer = function(a) {
    return v(a) === h;
  };
  reactIs_production_min.isContextProvider = function(a) {
    return v(a) === g;
  };
  reactIs_production_min.isElement = function(a) {
    return "object" === typeof a && null !== a && a.$$typeof === b;
  };
  reactIs_production_min.isForwardRef = function(a) {
    return v(a) === l;
  };
  reactIs_production_min.isFragment = function(a) {
    return v(a) === d;
  };
  reactIs_production_min.isLazy = function(a) {
    return v(a) === q;
  };
  reactIs_production_min.isMemo = function(a) {
    return v(a) === p;
  };
  reactIs_production_min.isPortal = function(a) {
    return v(a) === c;
  };
  reactIs_production_min.isProfiler = function(a) {
    return v(a) === f;
  };
  reactIs_production_min.isStrictMode = function(a) {
    return v(a) === e;
  };
  reactIs_production_min.isSuspense = function(a) {
    return v(a) === m;
  };
  reactIs_production_min.isSuspenseList = function(a) {
    return v(a) === n;
  };
  reactIs_production_min.isValidElementType = function(a) {
    return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? true : false;
  };
  reactIs_production_min.typeOf = v;
  {
    reactIs.exports = reactIs_production_min;
  }
  var reactIsExports = reactIs.exports;
  function useMemo(getValue2, condition, shouldUpdate) {
    var cacheRef = React__namespace.useRef({});
    if (!("value" in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
      cacheRef.current.value = getValue2();
      cacheRef.current.condition = condition;
    }
    return cacheRef.current.value;
  }
  function fillRef(ref, node2) {
    if (typeof ref === "function") {
      ref(node2);
    } else if (_typeof(ref) === "object" && ref && "current" in ref) {
      ref.current = node2;
    }
  }
  function composeRef() {
    for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
      refs[_key] = arguments[_key];
    }
    var refList = refs.filter(function(ref) {
      return ref;
    });
    if (refList.length <= 1) {
      return refList[0];
    }
    return function(node2) {
      refs.forEach(function(ref) {
        fillRef(ref, node2);
      });
    };
  }
  function useComposeRef() {
    for (var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      refs[_key2] = arguments[_key2];
    }
    return useMemo(function() {
      return composeRef.apply(void 0, refs);
    }, refs, function(prev2, next2) {
      return prev2.length !== next2.length || prev2.every(function(ref, i) {
        return ref !== next2[i];
      });
    });
  }
  function supportRef(nodeOrComponent) {
    var _type$prototype, _nodeOrComponent$prot;
    var type = reactIsExports.isMemo(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;
    if (typeof type === "function" && !((_type$prototype = type.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render) && type.$$typeof !== reactIsExports.ForwardRef) {
      return false;
    }
    if (typeof nodeOrComponent === "function" && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render) && nodeOrComponent.$$typeof !== reactIsExports.ForwardRef) {
      return false;
    }
    return true;
  }
  function toArray$2(children) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var ret = [];
    React.Children.forEach(children, function(child) {
      if ((child === void 0 || child === null) && !option.keepEmpty) {
        return;
      }
      if (Array.isArray(child)) {
        ret = ret.concat(toArray$2(child));
      } else if (reactIsExports.isFragment(child) && child.props) {
        ret = ret.concat(toArray$2(child.props.children, option));
      } else {
        ret.push(child);
      }
    });
    return ret;
  }
  function isDOM(node2) {
    return node2 instanceof HTMLElement || node2 instanceof SVGElement;
  }
  function findDOMNode(node2) {
    if (isDOM(node2)) {
      return node2;
    }
    if (node2 instanceof React.Component) {
      return ReactDOM__default.findDOMNode(node2);
    }
    return null;
  }
  var CollectionContext = /* @__PURE__ */ React__namespace.createContext(null);
  function Collection(_ref) {
    var children = _ref.children, onBatchResize = _ref.onBatchResize;
    var resizeIdRef = React__namespace.useRef(0);
    var resizeInfosRef = React__namespace.useRef([]);
    var onCollectionResize = React__namespace.useContext(CollectionContext);
    var onResize2 = React__namespace.useCallback(function(size, element, data) {
      resizeIdRef.current += 1;
      var currentId = resizeIdRef.current;
      resizeInfosRef.current.push({
        size,
        element,
        data
      });
      Promise.resolve().then(function() {
        if (currentId === resizeIdRef.current) {
          onBatchResize === null || onBatchResize === void 0 || onBatchResize(resizeInfosRef.current);
          resizeInfosRef.current = [];
        }
      });
      onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(size, element, data);
    }, [onBatchResize, onCollectionResize]);
    return /* @__PURE__ */ React__namespace.createElement(CollectionContext.Provider, {
      value: onResize2
    }, children);
  }
  var MapShim = function() {
    if (typeof Map !== "undefined") {
      return Map;
    }
    function getIndex(arr, key) {
      var result = -1;
      arr.some(function(entry, index2) {
        if (entry[0] === key) {
          result = index2;
          return true;
        }
        return false;
      });
      return result;
    }
    return (
      /** @class */
      function() {
        function class_1() {
          this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
          /**
           * @returns {boolean}
           */
          get: function() {
            return this.__entries__.length;
          },
          enumerable: true,
          configurable: true
        });
        class_1.prototype.get = function(key) {
          var index2 = getIndex(this.__entries__, key);
          var entry = this.__entries__[index2];
          return entry && entry[1];
        };
        class_1.prototype.set = function(key, value) {
          var index2 = getIndex(this.__entries__, key);
          if (~index2) {
            this.__entries__[index2][1] = value;
          } else {
            this.__entries__.push([key, value]);
          }
        };
        class_1.prototype.delete = function(key) {
          var entries = this.__entries__;
          var index2 = getIndex(entries, key);
          if (~index2) {
            entries.splice(index2, 1);
          }
        };
        class_1.prototype.has = function(key) {
          return !!~getIndex(this.__entries__, key);
        };
        class_1.prototype.clear = function() {
          this.__entries__.splice(0);
        };
        class_1.prototype.forEach = function(callback, ctx) {
          if (ctx === void 0) {
            ctx = null;
          }
          for (var _i = 0, _a2 = this.__entries__; _i < _a2.length; _i++) {
            var entry = _a2[_i];
            callback.call(ctx, entry[1], entry[0]);
          }
        };
        return class_1;
      }()
    );
  }();
  var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
  var global$1 = function() {
    if (typeof global !== "undefined" && global.Math === Math) {
      return global;
    }
    if (typeof self !== "undefined" && self.Math === Math) {
      return self;
    }
    if (typeof window !== "undefined" && window.Math === Math) {
      return window;
    }
    return Function("return this")();
  }();
  var requestAnimationFrame$1 = function() {
    if (typeof requestAnimationFrame === "function") {
      return requestAnimationFrame.bind(global$1);
    }
    return function(callback) {
      return setTimeout(function() {
        return callback(Date.now());
      }, 1e3 / 60);
    };
  }();
  var trailingTimeout = 2;
  function throttle(callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    function resolvePending() {
      if (leadingCall) {
        leadingCall = false;
        callback();
      }
      if (trailingCall) {
        proxy();
      }
    }
    function timeoutCallback() {
      requestAnimationFrame$1(resolvePending);
    }
    function proxy() {
      var timeStamp = Date.now();
      if (leadingCall) {
        if (timeStamp - lastCallTime < trailingTimeout) {
          return;
        }
        trailingCall = true;
      } else {
        leadingCall = true;
        trailingCall = false;
        setTimeout(timeoutCallback, delay);
      }
      lastCallTime = timeStamp;
    }
    return proxy;
  }
  var REFRESH_DELAY = 20;
  var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
  var mutationObserverSupported = typeof MutationObserver !== "undefined";
  var ResizeObserverController = (
    /** @class */
    function() {
      function ResizeObserverController2() {
        this.connected_ = false;
        this.mutationEventsAdded_ = false;
        this.mutationsObserver_ = null;
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
      }
      ResizeObserverController2.prototype.addObserver = function(observer) {
        if (!~this.observers_.indexOf(observer)) {
          this.observers_.push(observer);
        }
        if (!this.connected_) {
          this.connect_();
        }
      };
      ResizeObserverController2.prototype.removeObserver = function(observer) {
        var observers2 = this.observers_;
        var index2 = observers2.indexOf(observer);
        if (~index2) {
          observers2.splice(index2, 1);
        }
        if (!observers2.length && this.connected_) {
          this.disconnect_();
        }
      };
      ResizeObserverController2.prototype.refresh = function() {
        var changesDetected = this.updateObservers_();
        if (changesDetected) {
          this.refresh();
        }
      };
      ResizeObserverController2.prototype.updateObservers_ = function() {
        var activeObservers = this.observers_.filter(function(observer) {
          return observer.gatherActive(), observer.hasActive();
        });
        activeObservers.forEach(function(observer) {
          return observer.broadcastActive();
        });
        return activeObservers.length > 0;
      };
      ResizeObserverController2.prototype.connect_ = function() {
        if (!isBrowser || this.connected_) {
          return;
        }
        document.addEventListener("transitionend", this.onTransitionEnd_);
        window.addEventListener("resize", this.refresh);
        if (mutationObserverSupported) {
          this.mutationsObserver_ = new MutationObserver(this.refresh);
          this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        } else {
          document.addEventListener("DOMSubtreeModified", this.refresh);
          this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
      };
      ResizeObserverController2.prototype.disconnect_ = function() {
        if (!isBrowser || !this.connected_) {
          return;
        }
        document.removeEventListener("transitionend", this.onTransitionEnd_);
        window.removeEventListener("resize", this.refresh);
        if (this.mutationsObserver_) {
          this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
          document.removeEventListener("DOMSubtreeModified", this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
      };
      ResizeObserverController2.prototype.onTransitionEnd_ = function(_a2) {
        var _b2 = _a2.propertyName, propertyName = _b2 === void 0 ? "" : _b2;
        var isReflowProperty = transitionKeys.some(function(key) {
          return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
          this.refresh();
        }
      };
      ResizeObserverController2.getInstance = function() {
        if (!this.instance_) {
          this.instance_ = new ResizeObserverController2();
        }
        return this.instance_;
      };
      ResizeObserverController2.instance_ = null;
      return ResizeObserverController2;
    }()
  );
  var defineConfigurable = function(target, props) {
    for (var _i = 0, _a2 = Object.keys(props); _i < _a2.length; _i++) {
      var key = _a2[_i];
      Object.defineProperty(target, key, {
        value: props[key],
        enumerable: false,
        writable: false,
        configurable: true
      });
    }
    return target;
  };
  var getWindowOf = function(target) {
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    return ownerGlobal || global$1;
  };
  var emptyRect = createRectInit(0, 0, 0, 0);
  function toFloat(value) {
    return parseFloat(value) || 0;
  }
  function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function(size, position2) {
      var value = styles["border-" + position2 + "-width"];
      return size + toFloat(value);
    }, 0);
  }
  function getPaddings(styles) {
    var positions = ["top", "right", "bottom", "left"];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
      var position2 = positions_1[_i];
      var value = styles["padding-" + position2];
      paddings[position2] = toFloat(value);
    }
    return paddings;
  }
  function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
  }
  function getHTMLElementContentRect(target) {
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    if (!clientWidth && !clientHeight) {
      return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    var width = toFloat(styles.width), height = toFloat(styles.height);
    if (styles.boxSizing === "border-box") {
      if (Math.round(width + horizPad) !== clientWidth) {
        width -= getBordersSize(styles, "left", "right") + horizPad;
      }
      if (Math.round(height + vertPad) !== clientHeight) {
        height -= getBordersSize(styles, "top", "bottom") + vertPad;
      }
    }
    if (!isDocumentElement(target)) {
      var vertScrollbar = Math.round(width + horizPad) - clientWidth;
      var horizScrollbar = Math.round(height + vertPad) - clientHeight;
      if (Math.abs(vertScrollbar) !== 1) {
        width -= vertScrollbar;
      }
      if (Math.abs(horizScrollbar) !== 1) {
        height -= horizScrollbar;
      }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
  }
  var isSVGGraphicsElement = function() {
    if (typeof SVGGraphicsElement !== "undefined") {
      return function(target) {
        return target instanceof getWindowOf(target).SVGGraphicsElement;
      };
    }
    return function(target) {
      return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
    };
  }();
  function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
  }
  function getContentRect(target) {
    if (!isBrowser) {
      return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
      return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
  }
  function createReadOnlyRect(_a2) {
    var x = _a2.x, y = _a2.y, width = _a2.width, height = _a2.height;
    var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    defineConfigurable(rect, {
      x,
      y,
      width,
      height,
      top: y,
      right: x + width,
      bottom: height + y,
      left: x
    });
    return rect;
  }
  function createRectInit(x, y, width, height) {
    return { x, y, width, height };
  }
  var ResizeObservation = (
    /** @class */
    function() {
      function ResizeObservation2(target) {
        this.broadcastWidth = 0;
        this.broadcastHeight = 0;
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
      }
      ResizeObservation2.prototype.isActive = function() {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
      };
      ResizeObservation2.prototype.broadcastRect = function() {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
      };
      return ResizeObservation2;
    }()
  );
  var ResizeObserverEntry = (
    /** @class */
    /* @__PURE__ */ function() {
      function ResizeObserverEntry2(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        defineConfigurable(this, { target, contentRect });
      }
      return ResizeObserverEntry2;
    }()
  );
  var ResizeObserverSPI = (
    /** @class */
    function() {
      function ResizeObserverSPI2(callback, controller, callbackCtx) {
        this.activeObservations_ = [];
        this.observations_ = new MapShim();
        if (typeof callback !== "function") {
          throw new TypeError("The callback provided as parameter 1 is not a function.");
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
      }
      ResizeObserverSPI2.prototype.observe = function(target) {
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        if (typeof Element === "undefined" || !(Element instanceof Object)) {
          return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        if (observations.has(target)) {
          return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        this.controller_.refresh();
      };
      ResizeObserverSPI2.prototype.unobserve = function(target) {
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        if (typeof Element === "undefined" || !(Element instanceof Object)) {
          return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        if (!observations.has(target)) {
          return;
        }
        observations.delete(target);
        if (!observations.size) {
          this.controller_.removeObserver(this);
        }
      };
      ResizeObserverSPI2.prototype.disconnect = function() {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
      };
      ResizeObserverSPI2.prototype.gatherActive = function() {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function(observation) {
          if (observation.isActive()) {
            _this.activeObservations_.push(observation);
          }
        });
      };
      ResizeObserverSPI2.prototype.broadcastActive = function() {
        if (!this.hasActive()) {
          return;
        }
        var ctx = this.callbackCtx_;
        var entries = this.activeObservations_.map(function(observation) {
          return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
      };
      ResizeObserverSPI2.prototype.clearActive = function() {
        this.activeObservations_.splice(0);
      };
      ResizeObserverSPI2.prototype.hasActive = function() {
        return this.activeObservations_.length > 0;
      };
      return ResizeObserverSPI2;
    }()
  );
  var observers = typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : new MapShim();
  var ResizeObserver$2 = (
    /** @class */
    /* @__PURE__ */ function() {
      function ResizeObserver2(callback) {
        if (!(this instanceof ResizeObserver2)) {
          throw new TypeError("Cannot call a class as a function.");
        }
        if (!arguments.length) {
          throw new TypeError("1 argument required, but only 0 present.");
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
      }
      return ResizeObserver2;
    }()
  );
  [
    "observe",
    "unobserve",
    "disconnect"
  ].forEach(function(method) {
    ResizeObserver$2.prototype[method] = function() {
      var _a2;
      return (_a2 = observers.get(this))[method].apply(_a2, arguments);
    };
  });
  var index = function() {
    if (typeof global$1.ResizeObserver !== "undefined") {
      return global$1.ResizeObserver;
    }
    return ResizeObserver$2;
  }();
  var elementListeners = /* @__PURE__ */ new Map();
  function onResize(entities) {
    entities.forEach(function(entity) {
      var _elementListeners$get;
      var target = entity.target;
      (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 || _elementListeners$get.forEach(function(listener) {
        return listener(target);
      });
    });
  }
  var resizeObserver = new index(onResize);
  function observe(element, callback) {
    if (!elementListeners.has(element)) {
      elementListeners.set(element, /* @__PURE__ */ new Set());
      resizeObserver.observe(element);
    }
    elementListeners.get(element).add(callback);
  }
  function unobserve(element, callback) {
    if (elementListeners.has(element)) {
      elementListeners.get(element).delete(callback);
      if (!elementListeners.get(element).size) {
        resizeObserver.unobserve(element);
        elementListeners.delete(element);
      }
    }
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _setPrototypeOf(o, p2) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
      o2.__proto__ = p3;
      return o2;
    };
    return _setPrototypeOf(o, p2);
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _isNativeReflectConstruct() {
    try {
      var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (t3) {
    }
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
      return !!t2;
    })();
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _possibleConstructorReturn(self2, call2) {
    if (call2 && (_typeof(call2) === "object" || typeof call2 === "function")) {
      return call2;
    } else if (call2 !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self2);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  var DomWrapper$1 = /* @__PURE__ */ function(_React$Component) {
    _inherits(DomWrapper2, _React$Component);
    var _super = _createSuper(DomWrapper2);
    function DomWrapper2() {
      _classCallCheck(this, DomWrapper2);
      return _super.apply(this, arguments);
    }
    _createClass(DomWrapper2, [{
      key: "render",
      value: function render2() {
        return this.props.children;
      }
    }]);
    return DomWrapper2;
  }(React__namespace.Component);
  function SingleObserver(props, ref) {
    var children = props.children, disabled = props.disabled;
    var elementRef = React__namespace.useRef(null);
    var wrapperRef = React__namespace.useRef(null);
    var onCollectionResize = React__namespace.useContext(CollectionContext);
    var isRenderProps = typeof children === "function";
    var mergedChildren = isRenderProps ? children(elementRef) : children;
    var sizeRef = React__namespace.useRef({
      width: -1,
      height: -1,
      offsetWidth: -1,
      offsetHeight: -1
    });
    var canRef = !isRenderProps && /* @__PURE__ */ React__namespace.isValidElement(mergedChildren) && supportRef(mergedChildren);
    var originRef = canRef ? mergedChildren.ref : null;
    var mergedRef = useComposeRef(originRef, elementRef);
    var getDom = function getDom2() {
      var _elementRef$current;
      return findDOMNode(elementRef.current) || // Support `nativeElement` format
      (elementRef.current && _typeof(elementRef.current) === "object" ? findDOMNode((_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.nativeElement) : null) || findDOMNode(wrapperRef.current);
    };
    React__namespace.useImperativeHandle(ref, function() {
      return getDom();
    });
    var propsRef = React__namespace.useRef(props);
    propsRef.current = props;
    var onInternalResize = React__namespace.useCallback(function(target) {
      var _propsRef$current = propsRef.current, onResize2 = _propsRef$current.onResize, data = _propsRef$current.data;
      var _target$getBoundingCl = target.getBoundingClientRect(), width = _target$getBoundingCl.width, height = _target$getBoundingCl.height;
      var offsetWidth = target.offsetWidth, offsetHeight = target.offsetHeight;
      var fixedWidth = Math.floor(width);
      var fixedHeight = Math.floor(height);
      if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
        var size = {
          width: fixedWidth,
          height: fixedHeight,
          offsetWidth,
          offsetHeight
        };
        sizeRef.current = size;
        var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
        var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
        var sizeInfo = _objectSpread2(_objectSpread2({}, size), {}, {
          offsetWidth: mergedOffsetWidth,
          offsetHeight: mergedOffsetHeight
        });
        onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(sizeInfo, target, data);
        if (onResize2) {
          Promise.resolve().then(function() {
            onResize2(sizeInfo, target);
          });
        }
      }
    }, []);
    React__namespace.useEffect(function() {
      var currentElement = getDom();
      if (currentElement && !disabled) {
        observe(currentElement, onInternalResize);
      }
      return function() {
        return unobserve(currentElement, onInternalResize);
      };
    }, [elementRef.current, disabled]);
    return /* @__PURE__ */ React__namespace.createElement(DomWrapper$1, {
      ref: wrapperRef
    }, canRef ? /* @__PURE__ */ React__namespace.cloneElement(mergedChildren, {
      ref: mergedRef
    }) : mergedChildren);
  }
  var RefSingleObserver = /* @__PURE__ */ React__namespace.forwardRef(SingleObserver);
  var INTERNAL_PREFIX_KEY = "rc-observer-key";
  function ResizeObserver$1(props, ref) {
    var children = props.children;
    var childNodes = typeof children === "function" ? [children] : toArray$2(children);
    return childNodes.map(function(child, index2) {
      var key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(INTERNAL_PREFIX_KEY, "-").concat(index2);
      return /* @__PURE__ */ React__namespace.createElement(RefSingleObserver, _extends({}, props, {
        key,
        ref: index2 === 0 ? ref : void 0
      }), child);
    });
  }
  var RefResizeObserver = /* @__PURE__ */ React__namespace.forwardRef(ResizeObserver$1);
  RefResizeObserver.Collection = Collection;
  function omit(obj, fields) {
    var clone = _objectSpread2({}, obj);
    if (Array.isArray(fields)) {
      fields.forEach(function(key) {
        delete clone[key];
      });
    }
    return clone;
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  var raf = function raf2(callback) {
    return +setTimeout(callback, 16);
  };
  var caf = function caf2(num) {
    return clearTimeout(num);
  };
  if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
    raf = function raf3(callback) {
      return window.requestAnimationFrame(callback);
    };
    caf = function caf3(handle) {
      return window.cancelAnimationFrame(handle);
    };
  }
  var rafUUID = 0;
  var rafIds = /* @__PURE__ */ new Map();
  function cleanup(id) {
    rafIds.delete(id);
  }
  var wrapperRaf = function wrapperRaf2(callback) {
    var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    rafUUID += 1;
    var id = rafUUID;
    function callRef(leftTimes) {
      if (leftTimes === 0) {
        cleanup(id);
        callback();
      } else {
        var realId = raf(function() {
          callRef(leftTimes - 1);
        });
        rafIds.set(id, realId);
      }
    }
    callRef(times);
    return id;
  };
  wrapperRaf.cancel = function(id) {
    var realId = rafIds.get(id);
    cleanup(id);
    return caf(realId);
  };
  function murmur2(str) {
    var h2 = 0;
    var k2, i = 0, len = str.length;
    for (; len >= 4; ++i, len -= 4) {
      k2 = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
      k2 = /* Math.imul(k, m): */
      (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
      k2 ^= /* k >>> r: */
      k2 >>> 24;
      h2 = /* Math.imul(k, m): */
      (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
      (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
    }
    switch (len) {
      case 3:
        h2 ^= (str.charCodeAt(i + 2) & 255) << 16;
      case 2:
        h2 ^= (str.charCodeAt(i + 1) & 255) << 8;
      case 1:
        h2 ^= str.charCodeAt(i) & 255;
        h2 = /* Math.imul(h, m): */
        (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
    }
    h2 ^= h2 >>> 13;
    h2 = /* Math.imul(h, m): */
    (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
    return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
  }
  function isEqual(obj1, obj2) {
    var shallow = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var refSet = /* @__PURE__ */ new Set();
    function deepEqual(a, b2) {
      var level = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
      var circular = refSet.has(a);
      warningOnce(!circular, "Warning: There may be circular references");
      if (circular) {
        return false;
      }
      if (a === b2) {
        return true;
      }
      if (shallow && level > 1) {
        return false;
      }
      refSet.add(a);
      var newLevel = level + 1;
      if (Array.isArray(a)) {
        if (!Array.isArray(b2) || a.length !== b2.length) {
          return false;
        }
        for (var i = 0; i < a.length; i++) {
          if (!deepEqual(a[i], b2[i], newLevel)) {
            return false;
          }
        }
        return true;
      }
      if (a && b2 && _typeof(a) === "object" && _typeof(b2) === "object") {
        var keys2 = Object.keys(a);
        if (keys2.length !== Object.keys(b2).length) {
          return false;
        }
        return keys2.every(function(key) {
          return deepEqual(a[key], b2[key], newLevel);
        });
      }
      return false;
    }
    return deepEqual(obj1, obj2);
  }
  var SPLIT = "%";
  function pathKey(keys2) {
    return keys2.join(SPLIT);
  }
  var Entity = /* @__PURE__ */ function() {
    function Entity2(instanceId) {
      _classCallCheck(this, Entity2);
      _defineProperty(this, "instanceId", void 0);
      _defineProperty(this, "cache", /* @__PURE__ */ new Map());
      this.instanceId = instanceId;
    }
    _createClass(Entity2, [{
      key: "get",
      value: function get2(keys2) {
        return this.opGet(pathKey(keys2));
      }
      /** A fast get cache with `get` concat. */
    }, {
      key: "opGet",
      value: function opGet(keyPathStr) {
        return this.cache.get(keyPathStr) || null;
      }
    }, {
      key: "update",
      value: function update(keys2, valueFn) {
        return this.opUpdate(pathKey(keys2), valueFn);
      }
      /** A fast get cache with `get` concat. */
    }, {
      key: "opUpdate",
      value: function opUpdate(keyPathStr, valueFn) {
        var prevValue = this.cache.get(keyPathStr);
        var nextValue = valueFn(prevValue);
        if (nextValue === null) {
          this.cache.delete(keyPathStr);
        } else {
          this.cache.set(keyPathStr, nextValue);
        }
      }
    }]);
    return Entity2;
  }();
  var ATTR_TOKEN = "data-token-hash";
  var ATTR_MARK = "data-css-hash";
  var CSS_IN_JS_INSTANCE = "__cssinjs_instance__";
  function createCache() {
    var cssinjsInstanceId = Math.random().toString(12).slice(2);
    if (typeof document !== "undefined" && document.head && document.body) {
      var styles = document.body.querySelectorAll("style[".concat(ATTR_MARK, "]")) || [];
      var firstChild = document.head.firstChild;
      Array.from(styles).forEach(function(style2) {
        style2[CSS_IN_JS_INSTANCE] = style2[CSS_IN_JS_INSTANCE] || cssinjsInstanceId;
        if (style2[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
          document.head.insertBefore(style2, firstChild);
        }
      });
      var styleHash = {};
      Array.from(document.querySelectorAll("style[".concat(ATTR_MARK, "]"))).forEach(function(style2) {
        var hash = style2.getAttribute(ATTR_MARK);
        if (styleHash[hash]) {
          if (style2[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
            var _style$parentNode;
            (_style$parentNode = style2.parentNode) === null || _style$parentNode === void 0 || _style$parentNode.removeChild(style2);
          }
        } else {
          styleHash[hash] = true;
        }
      });
    }
    return new Entity(cssinjsInstanceId);
  }
  var StyleContext = /* @__PURE__ */ React__namespace.createContext({
    hashPriority: "low",
    cache: createCache(),
    defaultCache: true
  });
  function sameDerivativeOption(left, right) {
    if (left.length !== right.length) {
      return false;
    }
    for (var i = 0; i < left.length; i++) {
      if (left[i] !== right[i]) {
        return false;
      }
    }
    return true;
  }
  var ThemeCache = /* @__PURE__ */ function() {
    function ThemeCache2() {
      _classCallCheck(this, ThemeCache2);
      _defineProperty(this, "cache", void 0);
      _defineProperty(this, "keys", void 0);
      _defineProperty(this, "cacheCallTimes", void 0);
      this.cache = /* @__PURE__ */ new Map();
      this.keys = [];
      this.cacheCallTimes = 0;
    }
    _createClass(ThemeCache2, [{
      key: "size",
      value: function size() {
        return this.keys.length;
      }
    }, {
      key: "internalGet",
      value: function internalGet(derivativeOption) {
        var _cache2, _cache3;
        var updateCallTimes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var cache = {
          map: this.cache
        };
        derivativeOption.forEach(function(derivative2) {
          if (!cache) {
            cache = void 0;
          } else {
            var _cache;
            cache = (_cache = cache) === null || _cache === void 0 || (_cache = _cache.map) === null || _cache === void 0 ? void 0 : _cache.get(derivative2);
          }
        });
        if ((_cache2 = cache) !== null && _cache2 !== void 0 && _cache2.value && updateCallTimes) {
          cache.value[1] = this.cacheCallTimes++;
        }
        return (_cache3 = cache) === null || _cache3 === void 0 ? void 0 : _cache3.value;
      }
    }, {
      key: "get",
      value: function get2(derivativeOption) {
        var _this$internalGet;
        return (_this$internalGet = this.internalGet(derivativeOption, true)) === null || _this$internalGet === void 0 ? void 0 : _this$internalGet[0];
      }
    }, {
      key: "has",
      value: function has(derivativeOption) {
        return !!this.internalGet(derivativeOption);
      }
    }, {
      key: "set",
      value: function set2(derivativeOption, value) {
        var _this = this;
        if (!this.has(derivativeOption)) {
          if (this.size() + 1 > ThemeCache2.MAX_CACHE_SIZE + ThemeCache2.MAX_CACHE_OFFSET) {
            var _this$keys$reduce = this.keys.reduce(function(result, key) {
              var _result = _slicedToArray(result, 2), callTimes = _result[1];
              if (_this.internalGet(key)[1] < callTimes) {
                return [key, _this.internalGet(key)[1]];
              }
              return result;
            }, [this.keys[0], this.cacheCallTimes]), _this$keys$reduce2 = _slicedToArray(_this$keys$reduce, 1), targetKey = _this$keys$reduce2[0];
            this.delete(targetKey);
          }
          this.keys.push(derivativeOption);
        }
        var cache = this.cache;
        derivativeOption.forEach(function(derivative2, index2) {
          if (index2 === derivativeOption.length - 1) {
            cache.set(derivative2, {
              value: [value, _this.cacheCallTimes++]
            });
          } else {
            var cacheValue = cache.get(derivative2);
            if (!cacheValue) {
              cache.set(derivative2, {
                map: /* @__PURE__ */ new Map()
              });
            } else if (!cacheValue.map) {
              cacheValue.map = /* @__PURE__ */ new Map();
            }
            cache = cache.get(derivative2).map;
          }
        });
      }
    }, {
      key: "deleteByPath",
      value: function deleteByPath(currentCache, derivatives) {
        var cache = currentCache.get(derivatives[0]);
        if (derivatives.length === 1) {
          var _cache$value;
          if (!cache.map) {
            currentCache.delete(derivatives[0]);
          } else {
            currentCache.set(derivatives[0], {
              map: cache.map
            });
          }
          return (_cache$value = cache.value) === null || _cache$value === void 0 ? void 0 : _cache$value[0];
        }
        var result = this.deleteByPath(cache.map, derivatives.slice(1));
        if ((!cache.map || cache.map.size === 0) && !cache.value) {
          currentCache.delete(derivatives[0]);
        }
        return result;
      }
    }, {
      key: "delete",
      value: function _delete(derivativeOption) {
        if (this.has(derivativeOption)) {
          this.keys = this.keys.filter(function(item) {
            return !sameDerivativeOption(item, derivativeOption);
          });
          return this.deleteByPath(this.cache, derivativeOption);
        }
        return void 0;
      }
    }]);
    return ThemeCache2;
  }();
  _defineProperty(ThemeCache, "MAX_CACHE_SIZE", 20);
  _defineProperty(ThemeCache, "MAX_CACHE_OFFSET", 5);
  var uuid$3 = 0;
  var Theme = /* @__PURE__ */ function() {
    function Theme2(derivatives) {
      _classCallCheck(this, Theme2);
      _defineProperty(this, "derivatives", void 0);
      _defineProperty(this, "id", void 0);
      this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
      this.id = uuid$3;
      if (derivatives.length === 0) {
        warning$1(derivatives.length > 0);
      }
      uuid$3 += 1;
    }
    _createClass(Theme2, [{
      key: "getDerivativeToken",
      value: function getDerivativeToken(token2) {
        return this.derivatives.reduce(function(result, derivative2) {
          return derivative2(token2, result);
        }, void 0);
      }
    }]);
    return Theme2;
  }();
  var cacheThemes = new ThemeCache();
  function createTheme(derivatives) {
    var derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
    if (!cacheThemes.has(derivativeArr)) {
      cacheThemes.set(derivativeArr, new Theme(derivativeArr));
    }
    return cacheThemes.get(derivativeArr);
  }
  var resultCache = /* @__PURE__ */ new WeakMap();
  var RESULT_VALUE = {};
  function memoResult(callback, deps) {
    var current = resultCache;
    for (var i = 0; i < deps.length; i += 1) {
      var dep = deps[i];
      if (!current.has(dep)) {
        current.set(dep, /* @__PURE__ */ new WeakMap());
      }
      current = current.get(dep);
    }
    if (!current.has(RESULT_VALUE)) {
      current.set(RESULT_VALUE, callback());
    }
    return current.get(RESULT_VALUE);
  }
  var flattenTokenCache = /* @__PURE__ */ new WeakMap();
  function flattenToken(token2) {
    var hashed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var str = flattenTokenCache.get(token2) || "";
    if (!str) {
      Object.keys(token2).forEach(function(key) {
        var value = token2[key];
        str += key;
        if (value instanceof Theme) {
          str += value.id;
        } else if (value && _typeof(value) === "object") {
          str += flattenToken(value, hashed);
        } else {
          str += value;
        }
      });
      if (hashed) {
        str = murmur2(str);
      }
      flattenTokenCache.set(token2, str);
    }
    return str;
  }
  function token2key(token2, salt) {
    return murmur2("".concat(salt, "_").concat(flattenToken(token2, true)));
  }
  var isClientSide = canUseDom();
  function unit$1(num) {
    if (typeof num === "number") {
      return "".concat(num, "px");
    }
    return num;
  }
  function toStyleStr(style2, tokenKey, styleId) {
    var _objectSpread2$1;
    var customizeAttrs = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    var plain = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    if (plain) {
      return style2;
    }
    var attrs = _objectSpread2(_objectSpread2({}, customizeAttrs), {}, (_objectSpread2$1 = {}, _defineProperty(_objectSpread2$1, ATTR_TOKEN, tokenKey), _defineProperty(_objectSpread2$1, ATTR_MARK, styleId), _objectSpread2$1));
    var attrStr = Object.keys(attrs).map(function(attr) {
      var val = attrs[attr];
      return val ? "".concat(attr, '="').concat(val, '"') : null;
    }).filter(function(v2) {
      return v2;
    }).join(" ");
    return "<style ".concat(attrStr, ">").concat(style2, "</style>");
  }
  var token2CSSVar = function token2CSSVar2(token2) {
    var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return "--".concat(prefix ? "".concat(prefix, "-") : "").concat(token2).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
  };
  var serializeCSSVar = function serializeCSSVar2(cssVars, hashId, options) {
    if (!Object.keys(cssVars).length) {
      return "";
    }
    return ".".concat(hashId).concat(options !== null && options !== void 0 && options.scope ? ".".concat(options.scope) : "", "{").concat(Object.entries(cssVars).map(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
      return "".concat(key, ":").concat(value, ";");
    }).join(""), "}");
  };
  var transformToken = function transformToken2(token2, themeKey, config) {
    var cssVars = {};
    var result = {};
    Object.entries(token2).forEach(function(_ref3) {
      var _config$preserve, _config$ignore;
      var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0], value = _ref4[1];
      if (config !== null && config !== void 0 && (_config$preserve = config.preserve) !== null && _config$preserve !== void 0 && _config$preserve[key]) {
        result[key] = value;
      } else if ((typeof value === "string" || typeof value === "number") && !(config !== null && config !== void 0 && (_config$ignore = config.ignore) !== null && _config$ignore !== void 0 && _config$ignore[key])) {
        var _config$unitless;
        var cssVar = token2CSSVar(key, config === null || config === void 0 ? void 0 : config.prefix);
        cssVars[cssVar] = typeof value === "number" && !(config !== null && config !== void 0 && (_config$unitless = config.unitless) !== null && _config$unitless !== void 0 && _config$unitless[key]) ? "".concat(value, "px") : String(value);
        result[key] = "var(".concat(cssVar, ")");
      }
    });
    return [result, serializeCSSVar(cssVars, themeKey, {
      scope: config === null || config === void 0 ? void 0 : config.scope
    })];
  };
  var useInternalLayoutEffect = canUseDom() ? React__namespace.useLayoutEffect : React__namespace.useEffect;
  var useLayoutEffect = function useLayoutEffect2(callback, deps) {
    var firstMountRef = React__namespace.useRef(true);
    useInternalLayoutEffect(function() {
      return callback(firstMountRef.current);
    }, deps);
    useInternalLayoutEffect(function() {
      firstMountRef.current = false;
      return function() {
        firstMountRef.current = true;
      };
    }, []);
  };
  var useLayoutUpdateEffect = function useLayoutUpdateEffect2(callback, deps) {
    useLayoutEffect(function(firstMount) {
      if (!firstMount) {
        return callback();
      }
    }, deps);
  };
  var fullClone$3 = _objectSpread2({}, React__namespace);
  var useInsertionEffect$1 = fullClone$3.useInsertionEffect;
  var useInsertionEffectPolyfill = function useInsertionEffectPolyfill2(renderEffect, effect, deps) {
    React__namespace.useMemo(renderEffect, deps);
    useLayoutEffect(function() {
      return effect(true);
    }, deps);
  };
  var useCompatibleInsertionEffect = useInsertionEffect$1 ? function(renderEffect, effect, deps) {
    return useInsertionEffect$1(function() {
      renderEffect();
      return effect();
    }, deps);
  } : useInsertionEffectPolyfill;
  var fullClone$2 = _objectSpread2({}, React__namespace);
  var useInsertionEffect = fullClone$2.useInsertionEffect;
  var useCleanupRegister = function useCleanupRegister2(deps) {
    var effectCleanups = [];
    var cleanupFlag = false;
    function register(fn) {
      if (cleanupFlag) {
        return;
      }
      effectCleanups.push(fn);
    }
    React__namespace.useEffect(function() {
      cleanupFlag = false;
      return function() {
        cleanupFlag = true;
        if (effectCleanups.length) {
          effectCleanups.forEach(function(fn) {
            return fn();
          });
        }
      };
    }, deps);
    return register;
  };
  var useRun = function useRun2() {
    return function(fn) {
      fn();
    };
  };
  var useEffectCleanupRegister = typeof useInsertionEffect !== "undefined" ? useCleanupRegister : useRun;
  function useGlobalCache(prefix, keyPath, cacheFn, onCacheRemove, onCacheEffect) {
    var _React$useContext = React__namespace.useContext(StyleContext), globalCache = _React$useContext.cache;
    var fullPath = [prefix].concat(_toConsumableArray(keyPath));
    var fullPathStr = pathKey(fullPath);
    var register = useEffectCleanupRegister([fullPathStr]);
    var buildCache = function buildCache2(updater) {
      globalCache.opUpdate(fullPathStr, function(prevCache) {
        var _ref = prevCache || [void 0, void 0], _ref2 = _slicedToArray(_ref, 2), _ref2$ = _ref2[0], times = _ref2$ === void 0 ? 0 : _ref2$, cache = _ref2[1];
        var tmpCache = cache;
        var mergedCache = tmpCache || cacheFn();
        var data = [times, mergedCache];
        return updater ? updater(data) : data;
      });
    };
    React__namespace.useMemo(
      function() {
        buildCache();
      },
      /* eslint-disable react-hooks/exhaustive-deps */
      [fullPathStr]
      /* eslint-enable */
    );
    var cacheEntity = globalCache.opGet(fullPathStr);
    var cacheContent = cacheEntity[1];
    useCompatibleInsertionEffect(function() {
      onCacheEffect === null || onCacheEffect === void 0 || onCacheEffect(cacheContent);
    }, function(polyfill) {
      buildCache(function(_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2), times = _ref4[0], cache = _ref4[1];
        if (polyfill && times === 0) {
          onCacheEffect === null || onCacheEffect === void 0 || onCacheEffect(cacheContent);
        }
        return [times + 1, cache];
      });
      return function() {
        globalCache.opUpdate(fullPathStr, function(prevCache) {
          var _ref5 = prevCache || [], _ref6 = _slicedToArray(_ref5, 2), _ref6$ = _ref6[0], times = _ref6$ === void 0 ? 0 : _ref6$, cache = _ref6[1];
          var nextCount = times - 1;
          if (nextCount === 0) {
            register(function() {
              if (polyfill || !globalCache.opGet(fullPathStr)) {
                onCacheRemove === null || onCacheRemove === void 0 || onCacheRemove(cache, false);
              }
            });
            return null;
          }
          return [times - 1, cache];
        });
      };
    }, [fullPathStr]);
    return cacheContent;
  }
  var EMPTY_OVERRIDE = {};
  var hashPrefix = "css";
  var tokenKeys = /* @__PURE__ */ new Map();
  function recordCleanToken(tokenKey) {
    tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
  }
  function removeStyleTags(key, instanceId) {
    if (typeof document !== "undefined") {
      var styles = document.querySelectorAll("style[".concat(ATTR_TOKEN, '="').concat(key, '"]'));
      styles.forEach(function(style2) {
        if (style2[CSS_IN_JS_INSTANCE] === instanceId) {
          var _style$parentNode;
          (_style$parentNode = style2.parentNode) === null || _style$parentNode === void 0 || _style$parentNode.removeChild(style2);
        }
      });
    }
  }
  var TOKEN_THRESHOLD = 0;
  function cleanTokenStyle(tokenKey, instanceId) {
    tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
    var tokenKeyList = Array.from(tokenKeys.keys());
    var cleanableKeyList = tokenKeyList.filter(function(key) {
      var count = tokenKeys.get(key) || 0;
      return count <= 0;
    });
    if (tokenKeyList.length - cleanableKeyList.length > TOKEN_THRESHOLD) {
      cleanableKeyList.forEach(function(key) {
        removeStyleTags(key, instanceId);
        tokenKeys.delete(key);
      });
    }
  }
  var getComputedToken$1 = function getComputedToken2(originToken, overrideToken, theme, format) {
    var derivativeToken = theme.getDerivativeToken(originToken);
    var mergedDerivativeToken = _objectSpread2(_objectSpread2({}, derivativeToken), overrideToken);
    if (format) {
      mergedDerivativeToken = format(mergedDerivativeToken);
    }
    return mergedDerivativeToken;
  };
  var TOKEN_PREFIX = "token";
  function useCacheToken(theme, tokens) {
    var option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var _useContext = React.useContext(StyleContext), instanceId = _useContext.cache.instanceId, container = _useContext.container;
    var _option$salt = option.salt, salt = _option$salt === void 0 ? "" : _option$salt, _option$override = option.override, override = _option$override === void 0 ? EMPTY_OVERRIDE : _option$override, formatToken2 = option.formatToken, compute = option.getComputedToken, cssVar = option.cssVar;
    var mergedToken = memoResult(function() {
      return Object.assign.apply(Object, [{}].concat(_toConsumableArray(tokens)));
    }, tokens);
    var tokenStr = flattenToken(mergedToken);
    var overrideTokenStr = flattenToken(override);
    var cssVarStr = cssVar ? flattenToken(cssVar) : "";
    var cachedToken = useGlobalCache(TOKEN_PREFIX, [salt, theme.id, tokenStr, overrideTokenStr, cssVarStr], function() {
      var _cssVar$key;
      var mergedDerivativeToken = compute ? compute(mergedToken, override, theme) : getComputedToken$1(mergedToken, override, theme, formatToken2);
      var actualToken = _objectSpread2({}, mergedDerivativeToken);
      var cssVarsStr = "";
      if (!!cssVar) {
        var _transformToken = transformToken(mergedDerivativeToken, cssVar.key, {
          prefix: cssVar.prefix,
          ignore: cssVar.ignore,
          unitless: cssVar.unitless,
          preserve: cssVar.preserve
        });
        var _transformToken2 = _slicedToArray(_transformToken, 2);
        mergedDerivativeToken = _transformToken2[0];
        cssVarsStr = _transformToken2[1];
      }
      var tokenKey = token2key(mergedDerivativeToken, salt);
      mergedDerivativeToken._tokenKey = tokenKey;
      actualToken._tokenKey = token2key(actualToken, salt);
      var themeKey = (_cssVar$key = cssVar === null || cssVar === void 0 ? void 0 : cssVar.key) !== null && _cssVar$key !== void 0 ? _cssVar$key : tokenKey;
      mergedDerivativeToken._themeKey = themeKey;
      recordCleanToken(themeKey);
      var hashId = "".concat(hashPrefix, "-").concat(murmur2(tokenKey));
      mergedDerivativeToken._hashId = hashId;
      return [mergedDerivativeToken, hashId, actualToken, cssVarsStr, (cssVar === null || cssVar === void 0 ? void 0 : cssVar.key) || ""];
    }, function(cache) {
      cleanTokenStyle(cache[0]._themeKey, instanceId);
    }, function(_ref) {
      var _ref2 = _slicedToArray(_ref, 4), token2 = _ref2[0], cssVarsStr = _ref2[3];
      if (cssVar && cssVarsStr) {
        var style2 = updateCSS(cssVarsStr, murmur2("css-variables-".concat(token2._themeKey)), {
          mark: ATTR_MARK,
          prepend: "queue",
          attachTo: container,
          priority: -999
        });
        style2[CSS_IN_JS_INSTANCE] = instanceId;
        style2.setAttribute(ATTR_TOKEN, token2._themeKey);
      }
    });
    return cachedToken;
  }
  var extract$2 = function extract2(cache, effectStyles, options) {
    var _cache = _slicedToArray(cache, 5), realToken = _cache[2], styleStr = _cache[3], cssVarKey = _cache[4];
    var _ref3 = options || {}, plain = _ref3.plain;
    if (!styleStr) {
      return null;
    }
    var styleId = realToken._tokenKey;
    var order = -999;
    var sharedAttrs = {
      "data-rc-order": "prependQueue",
      "data-rc-priority": "".concat(order)
    };
    var styleText = toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
    return [order, styleId, styleText];
  };
  var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };
  var COMMENT = "comm";
  var RULESET = "rule";
  var DECLARATION = "decl";
  var IMPORT = "@import";
  var KEYFRAMES = "@keyframes";
  var LAYER = "@layer";
  var abs = Math.abs;
  var from = String.fromCharCode;
  function trim(value) {
    return value.trim();
  }
  function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
  }
  function indexof(value, search, position2) {
    return value.indexOf(search, position2);
  }
  function charat(value, index2) {
    return value.charCodeAt(index2) | 0;
  }
  function substr(value, begin, end) {
    return value.slice(begin, end);
  }
  function strlen(value) {
    return value.length;
  }
  function sizeof(value) {
    return value.length;
  }
  function append(value, array) {
    return array.push(value), value;
  }
  var line = 1;
  var column = 1;
  var length = 0;
  var position = 0;
  var character = 0;
  var characters = "";
  function node(value, root, parent, type, props, children, length2, siblings) {
    return { value, root, parent, type, props, children, line, column, length: length2, return: "", siblings };
  }
  function char() {
    return character;
  }
  function prev() {
    character = position > 0 ? charat(characters, --position) : 0;
    if (column--, character === 10)
      column = 1, line--;
    return character;
  }
  function next() {
    character = position < length ? charat(characters, position++) : 0;
    if (column++, character === 10)
      column = 1, line++;
    return character;
  }
  function peek() {
    return charat(characters, position);
  }
  function caret() {
    return position;
  }
  function slice(begin, end) {
    return substr(characters, begin, end);
  }
  function token(type) {
    switch (type) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function alloc(value) {
    return line = column = 1, length = strlen(characters = value), position = 0, [];
  }
  function dealloc(value) {
    return characters = "", value;
  }
  function delimit(type) {
    return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
  }
  function whitespace(type) {
    while (character = peek())
      if (character < 33)
        next();
      else
        break;
    return token(type) > 2 || token(character) > 3 ? "" : " ";
  }
  function escaping(index2, count) {
    while (--count && next())
      if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
        break;
    return slice(index2, caret() + (count < 6 && peek() == 32 && next() == 32));
  }
  function delimiter(type) {
    while (next())
      switch (character) {
        case type:
          return position;
        case 34:
        case 39:
          if (type !== 34 && type !== 39)
            delimiter(character);
          break;
        case 40:
          if (type === 41)
            delimiter(type);
          break;
        case 92:
          next();
          break;
      }
    return position;
  }
  function commenter(type, index2) {
    while (next())
      if (type + character === 47 + 10)
        break;
      else if (type + character === 42 + 42 && peek() === 47)
        break;
    return "/*" + slice(index2, position - 1) + "*" + from(type === 47 ? type : next());
  }
  function identifier(index2) {
    while (!token(peek()))
      next();
    return slice(index2, position);
  }
  function compile(value) {
    return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
  }
  function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index2 = 0;
    var offset = 0;
    var length2 = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character2 = 0;
    var type = "";
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters2 = type;
    while (scanning)
      switch (previous = character2, character2 = next()) {
        case 40:
          if (previous != 108 && charat(characters2, length2 - 1) == 58) {
            if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f", abs(index2 ? points[index2 - 1] : 0)) != -1)
              ampersand = -1;
            break;
          }
        case 34:
        case 39:
        case 91:
          characters2 += delimit(character2);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          characters2 += whitespace(previous);
          break;
        case 92:
          characters2 += escaping(caret() - 1, 7);
          continue;
        case 47:
          switch (peek()) {
            case 42:
            case 47:
              append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
              break;
            default:
              characters2 += "/";
          }
          break;
        case 123 * variable:
          points[index2++] = strlen(characters2) * ampersand;
        case 125 * variable:
        case 59:
        case 0:
          switch (character2) {
            case 0:
            case 125:
              scanning = 0;
            case 59 + offset:
              if (ampersand == -1)
                characters2 = replace(characters2, /\f/g, "");
              if (property > 0 && strlen(characters2) - length2)
                append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
              break;
            case 59:
              characters2 += ";";
            default:
              append(reference = ruleset(characters2, root, parent, index2, offset, rules, points, type, props = [], children = [], length2, rulesets), rulesets);
              if (character2 === 123)
                if (offset === 0)
                  parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
                else
                  switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                      break;
                    default:
                      parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                  }
          }
          index2 = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
          break;
        case 58:
          length2 = 1 + strlen(characters2), property = previous;
        default:
          if (variable < 1) {
            if (character2 == 123)
              --variable;
            else if (character2 == 125 && variable++ == 0 && prev() == 125)
              continue;
          }
          switch (characters2 += from(character2), character2 * variable) {
            case 38:
              ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
              break;
            case 44:
              points[index2++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
              break;
            case 64:
              if (peek() === 45)
                characters2 += delimit(next());
              atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
              break;
            case 45:
              if (previous === 45 && strlen(characters2) == 2)
                variable = 0;
          }
      }
    return rulesets;
  }
  function ruleset(value, root, parent, index2, offset, rules, points, type, props, children, length2, siblings) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [""];
    var size = sizeof(rule);
    for (var i = 0, j = 0, k2 = 0; i < index2; ++i)
      for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
        if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
          props[k2++] = z;
    return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2, siblings);
  }
  function comment(value, root, parent, siblings) {
    return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
  }
  function declaration(value, root, parent, length2, siblings) {
    return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
  }
  function serialize(children, callback) {
    var output = "";
    for (var i = 0; i < children.length; i++)
      output += callback(children[i], i, children, callback) || "";
    return output;
  }
  function stringify(element, index2, children, callback) {
    switch (element.type) {
      case LAYER:
        if (element.children.length)
          break;
      case IMPORT:
      case DECLARATION:
        return element.return = element.return || element.value;
      case COMMENT:
        return "";
      case KEYFRAMES:
        return element.return = element.value + "{" + serialize(element.children, callback) + "}";
      case RULESET:
        if (!strlen(element.value = element.props.join(",")))
          return "";
    }
    return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
  }
  var ATTR_CACHE_MAP = "data-ant-cssinjs-cache-path";
  var CSS_FILE_STYLE = "_FILE_STYLE__";
  var cachePathMap;
  var fromCSSFile = true;
  function prepare() {
    if (!cachePathMap) {
      cachePathMap = {};
      if (canUseDom()) {
        var div = document.createElement("div");
        div.className = ATTR_CACHE_MAP;
        div.style.position = "fixed";
        div.style.visibility = "hidden";
        div.style.top = "-9999px";
        document.body.appendChild(div);
        var content = getComputedStyle(div).content || "";
        content = content.replace(/^"/, "").replace(/"$/, "");
        content.split(";").forEach(function(item) {
          var _item$split = item.split(":"), _item$split2 = _slicedToArray(_item$split, 2), path = _item$split2[0], hash = _item$split2[1];
          cachePathMap[path] = hash;
        });
        var inlineMapStyle = document.querySelector("style[".concat(ATTR_CACHE_MAP, "]"));
        if (inlineMapStyle) {
          var _inlineMapStyle$paren;
          fromCSSFile = false;
          (_inlineMapStyle$paren = inlineMapStyle.parentNode) === null || _inlineMapStyle$paren === void 0 || _inlineMapStyle$paren.removeChild(inlineMapStyle);
        }
        document.body.removeChild(div);
      }
    }
  }
  function existPath(path) {
    prepare();
    return !!cachePathMap[path];
  }
  function getStyleAndHash(path) {
    var hash = cachePathMap[path];
    var styleStr = null;
    if (hash && canUseDom()) {
      if (fromCSSFile) {
        styleStr = CSS_FILE_STYLE;
      } else {
        var _style = document.querySelector("style[".concat(ATTR_MARK, '="').concat(cachePathMap[path], '"]'));
        if (_style) {
          styleStr = _style.innerHTML;
        } else {
          delete cachePathMap[path];
        }
      }
    }
    return [styleStr, hash];
  }
  var SKIP_CHECK = "_skip_check_";
  var MULTI_VALUE = "_multi_value_";
  function normalizeStyle(styleStr) {
    var serialized = serialize(compile(styleStr), stringify);
    return serialized.replace(/\{%%%\:[^;];}/g, ";");
  }
  function isCompoundCSSProperty(value) {
    return _typeof(value) === "object" && value && (SKIP_CHECK in value || MULTI_VALUE in value);
  }
  function injectSelectorHash(key, hashId, hashPriority) {
    if (!hashId) {
      return key;
    }
    var hashClassName = ".".concat(hashId);
    var hashSelector = hashPriority === "low" ? ":where(".concat(hashClassName, ")") : hashClassName;
    var keys2 = key.split(",").map(function(k2) {
      var _firstPath$match;
      var fullPath = k2.trim().split(/\s+/);
      var firstPath = fullPath[0] || "";
      var htmlElement = ((_firstPath$match = firstPath.match(/^\w+/)) === null || _firstPath$match === void 0 ? void 0 : _firstPath$match[0]) || "";
      firstPath = "".concat(htmlElement).concat(hashSelector).concat(firstPath.slice(htmlElement.length));
      return [firstPath].concat(_toConsumableArray(fullPath.slice(1))).join(" ");
    });
    return keys2.join(",");
  }
  var parseStyle = function parseStyle2(interpolation) {
    var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
      root: true,
      parentSelectors: []
    }, root = _ref.root, injectHash = _ref.injectHash, parentSelectors = _ref.parentSelectors;
    var hashId = config.hashId, layer = config.layer;
    config.path;
    var hashPriority = config.hashPriority, _config$transformers = config.transformers, transformers = _config$transformers === void 0 ? [] : _config$transformers;
    config.linters;
    var styleStr = "";
    var effectStyle = {};
    function parseKeyframes(keyframes) {
      var animationName = keyframes.getName(hashId);
      if (!effectStyle[animationName]) {
        var _parseStyle = parseStyle2(keyframes.style, config, {
          root: false,
          parentSelectors
        }), _parseStyle2 = _slicedToArray(_parseStyle, 1), _parsedStr = _parseStyle2[0];
        effectStyle[animationName] = "@keyframes ".concat(keyframes.getName(hashId)).concat(_parsedStr);
      }
    }
    function flattenList(list) {
      var fullList = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      list.forEach(function(item) {
        if (Array.isArray(item)) {
          flattenList(item, fullList);
        } else if (item) {
          fullList.push(item);
        }
      });
      return fullList;
    }
    var flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
    flattenStyleList.forEach(function(originStyle) {
      var style2 = typeof originStyle === "string" && !root ? {} : originStyle;
      if (typeof style2 === "string") {
        styleStr += "".concat(style2, "\n");
      } else if (style2._keyframe) {
        parseKeyframes(style2);
      } else {
        var mergedStyle = transformers.reduce(function(prev2, trans) {
          var _trans$visit;
          return (trans === null || trans === void 0 || (_trans$visit = trans.visit) === null || _trans$visit === void 0 ? void 0 : _trans$visit.call(trans, prev2)) || prev2;
        }, style2);
        Object.keys(mergedStyle).forEach(function(key) {
          var value = mergedStyle[key];
          if (_typeof(value) === "object" && value && (key !== "animationName" || !value._keyframe) && !isCompoundCSSProperty(value)) {
            var subInjectHash = false;
            var mergedKey = key.trim();
            var nextRoot = false;
            if ((root || injectHash) && hashId) {
              if (mergedKey.startsWith("@")) {
                subInjectHash = true;
              } else {
                mergedKey = injectSelectorHash(key, hashId, hashPriority);
              }
            } else if (root && !hashId && (mergedKey === "&" || mergedKey === "")) {
              mergedKey = "";
              nextRoot = true;
            }
            var _parseStyle3 = parseStyle2(value, config, {
              root: nextRoot,
              injectHash: subInjectHash,
              parentSelectors: [].concat(_toConsumableArray(parentSelectors), [mergedKey])
            }), _parseStyle4 = _slicedToArray(_parseStyle3, 2), _parsedStr2 = _parseStyle4[0], childEffectStyle = _parseStyle4[1];
            effectStyle = _objectSpread2(_objectSpread2({}, effectStyle), childEffectStyle);
            styleStr += "".concat(mergedKey).concat(_parsedStr2);
          } else {
            let appendStyle = function(cssKey, cssValue) {
              var styleName = cssKey.replace(/[A-Z]/g, function(match2) {
                return "-".concat(match2.toLowerCase());
              });
              var formatValue = cssValue;
              if (!unitlessKeys[cssKey] && typeof formatValue === "number" && formatValue !== 0) {
                formatValue = "".concat(formatValue, "px");
              }
              if (cssKey === "animationName" && cssValue !== null && cssValue !== void 0 && cssValue._keyframe) {
                parseKeyframes(cssValue);
                formatValue = cssValue.getName(hashId);
              }
              styleStr += "".concat(styleName, ":").concat(formatValue, ";");
            };
            var _value;
            var actualValue = (_value = value === null || value === void 0 ? void 0 : value.value) !== null && _value !== void 0 ? _value : value;
            if (_typeof(value) === "object" && value !== null && value !== void 0 && value[MULTI_VALUE] && Array.isArray(actualValue)) {
              actualValue.forEach(function(item) {
                appendStyle(key, item);
              });
            } else {
              appendStyle(key, actualValue);
            }
          }
        });
      }
    });
    if (!root) {
      styleStr = "{".concat(styleStr, "}");
    } else if (layer) {
      styleStr = "@layer ".concat(layer.name, " {").concat(styleStr, "}");
      if (layer.dependencies) {
        effectStyle["@layer ".concat(layer.name)] = layer.dependencies.map(function(deps) {
          return "@layer ".concat(deps, ", ").concat(layer.name, ";");
        }).join("\n");
      }
    }
    return [styleStr, effectStyle];
  };
  function uniqueHash(path, styleStr) {
    return murmur2("".concat(path.join("%")).concat(styleStr));
  }
  function Empty$2() {
    return null;
  }
  var STYLE_PREFIX = "style";
  function useStyleRegister(info, styleFn) {
    var token2 = info.token, path = info.path, hashId = info.hashId, layer = info.layer, nonce = info.nonce, clientOnly = info.clientOnly, _info$order = info.order, order = _info$order === void 0 ? 0 : _info$order;
    var _React$useContext = React__namespace.useContext(StyleContext), autoClear = _React$useContext.autoClear;
    _React$useContext.mock;
    var defaultCache = _React$useContext.defaultCache, hashPriority = _React$useContext.hashPriority, container = _React$useContext.container, ssrInline = _React$useContext.ssrInline, transformers = _React$useContext.transformers, linters = _React$useContext.linters, cache = _React$useContext.cache, enableLayer = _React$useContext.layer;
    var tokenKey = token2._tokenKey;
    var fullPath = [tokenKey];
    if (enableLayer) {
      fullPath.push("layer");
    }
    fullPath.push.apply(fullPath, _toConsumableArray(path));
    var isMergedClientSide = isClientSide;
    var _useGlobalCache = useGlobalCache(
      STYLE_PREFIX,
      fullPath,
      // Create cache if needed
      function() {
        var cachePath = fullPath.join("|");
        if (existPath(cachePath)) {
          var _getStyleAndHash = getStyleAndHash(cachePath), _getStyleAndHash2 = _slicedToArray(_getStyleAndHash, 2), inlineCacheStyleStr = _getStyleAndHash2[0], styleHash = _getStyleAndHash2[1];
          if (inlineCacheStyleStr) {
            return [inlineCacheStyleStr, tokenKey, styleHash, {}, clientOnly, order];
          }
        }
        var styleObj = styleFn();
        var _parseStyle5 = parseStyle(styleObj, {
          hashId,
          hashPriority,
          layer: enableLayer ? layer : void 0,
          path: path.join("-"),
          transformers,
          linters
        }), _parseStyle6 = _slicedToArray(_parseStyle5, 2), parsedStyle = _parseStyle6[0], effectStyle = _parseStyle6[1];
        var styleStr = normalizeStyle(parsedStyle);
        var styleId = uniqueHash(fullPath, styleStr);
        return [styleStr, tokenKey, styleId, effectStyle, clientOnly, order];
      },
      // Remove cache if no need
      function(_ref2, fromHMR) {
        var _ref3 = _slicedToArray(_ref2, 3), styleId = _ref3[2];
        if ((fromHMR || autoClear) && isClientSide) {
          removeCSS(styleId, {
            mark: ATTR_MARK
          });
        }
      },
      // Effect: Inject style here
      function(_ref4) {
        var _ref5 = _slicedToArray(_ref4, 4), styleStr = _ref5[0];
        _ref5[1];
        var styleId = _ref5[2], effectStyle = _ref5[3];
        if (isMergedClientSide && styleStr !== CSS_FILE_STYLE) {
          var mergedCSSConfig = {
            mark: ATTR_MARK,
            prepend: enableLayer ? false : "queue",
            attachTo: container,
            priority: order
          };
          var nonceStr = typeof nonce === "function" ? nonce() : nonce;
          if (nonceStr) {
            mergedCSSConfig.csp = {
              nonce: nonceStr
            };
          }
          var effectLayerKeys = [];
          var effectRestKeys = [];
          Object.keys(effectStyle).forEach(function(key) {
            if (key.startsWith("@layer")) {
              effectLayerKeys.push(key);
            } else {
              effectRestKeys.push(key);
            }
          });
          effectLayerKeys.forEach(function(effectKey) {
            updateCSS(normalizeStyle(effectStyle[effectKey]), "_layer-".concat(effectKey), _objectSpread2(_objectSpread2({}, mergedCSSConfig), {}, {
              prepend: true
            }));
          });
          var style2 = updateCSS(styleStr, styleId, mergedCSSConfig);
          style2[CSS_IN_JS_INSTANCE] = cache.instanceId;
          style2.setAttribute(ATTR_TOKEN, tokenKey);
          effectRestKeys.forEach(function(effectKey) {
            updateCSS(normalizeStyle(effectStyle[effectKey]), "_effect-".concat(effectKey), mergedCSSConfig);
          });
        }
      }
    ), _useGlobalCache2 = _slicedToArray(_useGlobalCache, 3), cachedStyleStr = _useGlobalCache2[0], cachedTokenKey = _useGlobalCache2[1], cachedStyleId = _useGlobalCache2[2];
    return function(node2) {
      var styleNode;
      if (!ssrInline || isMergedClientSide || !defaultCache) {
        styleNode = /* @__PURE__ */ React__namespace.createElement(Empty$2, null);
      } else {
        var _ref6;
        styleNode = /* @__PURE__ */ React__namespace.createElement("style", _extends({}, (_ref6 = {}, _defineProperty(_ref6, ATTR_TOKEN, cachedTokenKey), _defineProperty(_ref6, ATTR_MARK, cachedStyleId), _ref6), {
          dangerouslySetInnerHTML: {
            __html: cachedStyleStr
          }
        }));
      }
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, styleNode, node2);
    };
  }
  var extract$1 = function extract22(cache, effectStyles, options) {
    var _cache = _slicedToArray(cache, 6), styleStr = _cache[0], tokenKey = _cache[1], styleId = _cache[2], effectStyle = _cache[3], clientOnly = _cache[4], order = _cache[5];
    var _ref7 = options || {}, plain = _ref7.plain;
    if (clientOnly) {
      return null;
    }
    var keyStyleText = styleStr;
    var sharedAttrs = {
      "data-rc-order": "prependQueue",
      "data-rc-priority": "".concat(order)
    };
    keyStyleText = toStyleStr(styleStr, tokenKey, styleId, sharedAttrs, plain);
    if (effectStyle) {
      Object.keys(effectStyle).forEach(function(effectKey) {
        if (!effectStyles[effectKey]) {
          effectStyles[effectKey] = true;
          var effectStyleStr = normalizeStyle(effectStyle[effectKey]);
          var effectStyleHTML = toStyleStr(effectStyleStr, tokenKey, "_effect-".concat(effectKey), sharedAttrs, plain);
          if (effectKey.startsWith("@layer")) {
            keyStyleText = effectStyleHTML + keyStyleText;
          } else {
            keyStyleText += effectStyleHTML;
          }
        }
      });
    }
    return [order, styleId, keyStyleText];
  };
  var CSS_VAR_PREFIX = "cssVar";
  var useCSSVarRegister = function useCSSVarRegister2(config, fn) {
    var key = config.key, prefix = config.prefix, unitless2 = config.unitless, ignore2 = config.ignore, token2 = config.token, _config$scope = config.scope, scope = _config$scope === void 0 ? "" : _config$scope;
    var _useContext = React.useContext(StyleContext), instanceId = _useContext.cache.instanceId, container = _useContext.container;
    var tokenKey = token2._tokenKey;
    var stylePath = [].concat(_toConsumableArray(config.path), [key, scope, tokenKey]);
    var cache = useGlobalCache(CSS_VAR_PREFIX, stylePath, function() {
      var originToken = fn();
      var _transformToken = transformToken(originToken, key, {
        prefix,
        unitless: unitless2,
        ignore: ignore2,
        scope
      }), _transformToken2 = _slicedToArray(_transformToken, 2), mergedToken = _transformToken2[0], cssVarsStr = _transformToken2[1];
      var styleId = uniqueHash(stylePath, cssVarsStr);
      return [mergedToken, cssVarsStr, styleId, key];
    }, function(_ref) {
      var _ref2 = _slicedToArray(_ref, 3), styleId = _ref2[2];
      if (isClientSide) {
        removeCSS(styleId, {
          mark: ATTR_MARK
        });
      }
    }, function(_ref3) {
      var _ref4 = _slicedToArray(_ref3, 3), cssVarsStr = _ref4[1], styleId = _ref4[2];
      if (!cssVarsStr) {
        return;
      }
      var style2 = updateCSS(cssVarsStr, styleId, {
        mark: ATTR_MARK,
        prepend: "queue",
        attachTo: container,
        priority: -999
      });
      style2[CSS_IN_JS_INSTANCE] = instanceId;
      style2.setAttribute(ATTR_TOKEN, key);
    });
    return cache;
  };
  var extract = function extract3(cache, effectStyles, options) {
    var _cache = _slicedToArray(cache, 4), styleStr = _cache[1], styleId = _cache[2], cssVarKey = _cache[3];
    var _ref5 = options || {}, plain = _ref5.plain;
    if (!styleStr) {
      return null;
    }
    var order = -999;
    var sharedAttrs = {
      "data-rc-order": "prependQueue",
      "data-rc-priority": "".concat(order)
    };
    var styleText = toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
    return [order, styleId, styleText];
  };
  var _ExtractStyleFns;
  _ExtractStyleFns = {}, _defineProperty(_ExtractStyleFns, STYLE_PREFIX, extract$1), _defineProperty(_ExtractStyleFns, TOKEN_PREFIX, extract$2), _defineProperty(_ExtractStyleFns, CSS_VAR_PREFIX, extract);
  var Keyframe = /* @__PURE__ */ function() {
    function Keyframe2(name, style2) {
      _classCallCheck(this, Keyframe2);
      _defineProperty(this, "name", void 0);
      _defineProperty(this, "style", void 0);
      _defineProperty(this, "_keyframe", true);
      this.name = name;
      this.style = style2;
    }
    _createClass(Keyframe2, [{
      key: "getName",
      value: function getName() {
        var hashId = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        return hashId ? "".concat(hashId, "-").concat(this.name) : this.name;
      }
    }]);
    return Keyframe2;
  }();
  function noSplit(list) {
    list.notSplit = true;
    return list;
  }
  ({
    // Inset
    inset: ["top", "right", "bottom", "left"],
    insetBlock: ["top", "bottom"],
    insetBlockStart: ["top"],
    insetBlockEnd: ["bottom"],
    insetInline: ["left", "right"],
    insetInlineStart: ["left"],
    insetInlineEnd: ["right"],
    // Margin
    marginBlock: ["marginTop", "marginBottom"],
    marginBlockStart: ["marginTop"],
    marginBlockEnd: ["marginBottom"],
    marginInline: ["marginLeft", "marginRight"],
    marginInlineStart: ["marginLeft"],
    marginInlineEnd: ["marginRight"],
    // Padding
    paddingBlock: ["paddingTop", "paddingBottom"],
    paddingBlockStart: ["paddingTop"],
    paddingBlockEnd: ["paddingBottom"],
    paddingInline: ["paddingLeft", "paddingRight"],
    paddingInlineStart: ["paddingLeft"],
    paddingInlineEnd: ["paddingRight"],
    // Border
    borderBlock: noSplit(["borderTop", "borderBottom"]),
    borderBlockStart: noSplit(["borderTop"]),
    borderBlockEnd: noSplit(["borderBottom"]),
    borderInline: noSplit(["borderLeft", "borderRight"]),
    borderInlineStart: noSplit(["borderLeft"]),
    borderInlineEnd: noSplit(["borderRight"]),
    // Border width
    borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
    borderBlockStartWidth: ["borderTopWidth"],
    borderBlockEndWidth: ["borderBottomWidth"],
    borderInlineWidth: ["borderLeftWidth", "borderRightWidth"],
    borderInlineStartWidth: ["borderLeftWidth"],
    borderInlineEndWidth: ["borderRightWidth"],
    // Border style
    borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
    borderBlockStartStyle: ["borderTopStyle"],
    borderBlockEndStyle: ["borderBottomStyle"],
    borderInlineStyle: ["borderLeftStyle", "borderRightStyle"],
    borderInlineStartStyle: ["borderLeftStyle"],
    borderInlineEndStyle: ["borderRightStyle"],
    // Border color
    borderBlockColor: ["borderTopColor", "borderBottomColor"],
    borderBlockStartColor: ["borderTopColor"],
    borderBlockEndColor: ["borderBottomColor"],
    borderInlineColor: ["borderLeftColor", "borderRightColor"],
    borderInlineStartColor: ["borderLeftColor"],
    borderInlineEndColor: ["borderRightColor"],
    // Border radius
    borderStartStartRadius: ["borderTopLeftRadius"],
    borderStartEndRadius: ["borderTopRightRadius"],
    borderEndStartRadius: ["borderBottomLeftRadius"],
    borderEndEndRadius: ["borderBottomRightRadius"]
  });
  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
  }
  function get(entity, path) {
    var current = entity;
    for (var i = 0; i < path.length; i += 1) {
      if (current === null || current === void 0) {
        return void 0;
      }
      current = current[path[i]];
    }
    return current;
  }
  function internalSet(entity, paths, value, removeIfUndefined) {
    if (!paths.length) {
      return value;
    }
    var _paths = _toArray(paths), path = _paths[0], restPath = _paths.slice(1);
    var clone;
    if (!entity && typeof path === "number") {
      clone = [];
    } else if (Array.isArray(entity)) {
      clone = _toConsumableArray(entity);
    } else {
      clone = _objectSpread2({}, entity);
    }
    if (removeIfUndefined && value === void 0 && restPath.length === 1) {
      delete clone[path][restPath[0]];
    } else {
      clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
    }
    return clone;
  }
  function set(entity, paths, value) {
    var removeIfUndefined = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    if (paths.length && removeIfUndefined && value === void 0 && !get(entity, paths.slice(0, -1))) {
      return entity;
    }
    return internalSet(entity, paths, value, removeIfUndefined);
  }
  function isObject(obj) {
    return _typeof(obj) === "object" && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
  }
  function createEmpty(source) {
    return Array.isArray(source) ? [] : {};
  }
  var keys = typeof Reflect === "undefined" ? Object.keys : Reflect.ownKeys;
  function merge$1() {
    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }
    var clone = createEmpty(sources[0]);
    sources.forEach(function(src) {
      function internalMerge(path, parentLoopSet) {
        var loopSet = new Set(parentLoopSet);
        var value = get(src, path);
        var isArr = Array.isArray(value);
        if (isArr || isObject(value)) {
          if (!loopSet.has(value)) {
            loopSet.add(value);
            var originValue = get(clone, path);
            if (isArr) {
              clone = set(clone, path, []);
            } else if (!originValue || _typeof(originValue) !== "object") {
              clone = set(clone, path, createEmpty(value));
            }
            keys(value).forEach(function(key) {
              internalMerge([].concat(_toConsumableArray(path), [key]), loopSet);
            });
          }
        } else {
          clone = set(clone, path, value);
        }
      }
      internalMerge([]);
    });
    return clone;
  }
  function noop$1() {
  }
  const WarningContext = /* @__PURE__ */ React__namespace.createContext({});
  const devUseWarning = () => {
    const noopWarning = () => {
    };
    noopWarning.deprecated = noop$1;
    return noopWarning;
  };
  const ValidateMessagesContext = /* @__PURE__ */ React.createContext(void 0);
  var locale$3 = {
    // Options
    items_per_page: "/ page",
    jump_to: "Go to",
    jump_to_confirm: "confirm",
    page: "Page",
    // Pagination
    prev_page: "Previous Page",
    next_page: "Next Page",
    prev_5: "Previous 5 Pages",
    next_5: "Next 5 Pages",
    prev_3: "Previous 3 Pages",
    next_3: "Next 3 Pages",
    page_size: "Page Size"
  };
  var locale$2 = {
    locale: "en_US",
    today: "Today",
    now: "Now",
    backToToday: "Back to today",
    ok: "OK",
    clear: "Clear",
    month: "Month",
    year: "Year",
    timeSelect: "select time",
    dateSelect: "select date",
    weekSelect: "Choose a week",
    monthSelect: "Choose a month",
    yearSelect: "Choose a year",
    decadeSelect: "Choose a decade",
    yearFormat: "YYYY",
    dateFormat: "M/D/YYYY",
    dayFormat: "D",
    dateTimeFormat: "M/D/YYYY HH:mm:ss",
    monthBeforeYear: true,
    previousMonth: "Previous month (PageUp)",
    nextMonth: "Next month (PageDown)",
    previousYear: "Last year (Control + left)",
    nextYear: "Next year (Control + right)",
    previousDecade: "Last decade",
    nextDecade: "Next decade",
    previousCentury: "Last century",
    nextCentury: "Next century"
  };
  const locale$1 = {
    placeholder: "Select time",
    rangePlaceholder: ["Start time", "End time"]
  };
  const locale = {
    lang: Object.assign({
      placeholder: "Select date",
      yearPlaceholder: "Select year",
      quarterPlaceholder: "Select quarter",
      monthPlaceholder: "Select month",
      weekPlaceholder: "Select week",
      rangePlaceholder: ["Start date", "End date"],
      rangeYearPlaceholder: ["Start year", "End year"],
      rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
      rangeMonthPlaceholder: ["Start month", "End month"],
      rangeWeekPlaceholder: ["Start week", "End week"]
    }, locale$2),
    timePickerLocale: Object.assign({}, locale$1)
  };
  const typeTemplate = "${label} is not a valid ${type}";
  const localeValues = {
    locale: "en",
    Pagination: locale$3,
    DatePicker: locale,
    TimePicker: locale$1,
    Calendar: locale,
    global: {
      placeholder: "Please select"
    },
    Table: {
      filterTitle: "Filter menu",
      filterConfirm: "OK",
      filterReset: "Reset",
      filterEmptyText: "No filters",
      filterCheckall: "Select all items",
      filterSearchPlaceholder: "Search in filters",
      emptyText: "No data",
      selectAll: "Select current page",
      selectInvert: "Invert current page",
      selectNone: "Clear all data",
      selectionAll: "Select all data",
      sortTitle: "Sort",
      expand: "Expand row",
      collapse: "Collapse row",
      triggerDesc: "Click to sort descending",
      triggerAsc: "Click to sort ascending",
      cancelSort: "Click to cancel sorting"
    },
    Tour: {
      Next: "Next",
      Previous: "Previous",
      Finish: "Finish"
    },
    Modal: {
      okText: "OK",
      cancelText: "Cancel",
      justOkText: "OK"
    },
    Popconfirm: {
      okText: "OK",
      cancelText: "Cancel"
    },
    Transfer: {
      titles: ["", ""],
      searchPlaceholder: "Search here",
      itemUnit: "item",
      itemsUnit: "items",
      remove: "Remove",
      selectCurrent: "Select current page",
      removeCurrent: "Remove current page",
      selectAll: "Select all data",
      deselectAll: "Deselect all data",
      removeAll: "Remove all data",
      selectInvert: "Invert current page"
    },
    Upload: {
      uploading: "Uploading...",
      removeFile: "Remove file",
      uploadError: "Upload error",
      previewFile: "Preview file",
      downloadFile: "Download file"
    },
    Empty: {
      description: "No data"
    },
    Icon: {
      icon: "icon"
    },
    Text: {
      edit: "Edit",
      copy: "Copy",
      copied: "Copied",
      expand: "Expand",
      collapse: "Collapse"
    },
    Form: {
      optional: "(optional)",
      defaultValidateMessages: {
        default: "Field validation error for ${label}",
        required: "Please enter ${label}",
        enum: "${label} must be one of [${enum}]",
        whitespace: "${label} cannot be a blank character",
        date: {
          format: "${label} date format is invalid",
          parse: "${label} cannot be converted to a date",
          invalid: "${label} is an invalid date"
        },
        types: {
          string: typeTemplate,
          method: typeTemplate,
          array: typeTemplate,
          object: typeTemplate,
          number: typeTemplate,
          date: typeTemplate,
          boolean: typeTemplate,
          integer: typeTemplate,
          float: typeTemplate,
          regexp: typeTemplate,
          email: typeTemplate,
          url: typeTemplate,
          hex: typeTemplate
        },
        string: {
          len: "${label} must be ${len} characters",
          min: "${label} must be at least ${min} characters",
          max: "${label} must be up to ${max} characters",
          range: "${label} must be between ${min}-${max} characters"
        },
        number: {
          len: "${label} must be equal to ${len}",
          min: "${label} must be minimum ${min}",
          max: "${label} must be maximum ${max}",
          range: "${label} must be between ${min}-${max}"
        },
        array: {
          len: "Must be ${len} ${label}",
          min: "At least ${min} ${label}",
          max: "At most ${max} ${label}",
          range: "The amount of ${label} must be between ${min}-${max}"
        },
        pattern: {
          mismatch: "${label} does not match the pattern ${pattern}"
        }
      }
    },
    Image: {
      preview: "Preview"
    },
    QRCode: {
      expired: "QR code expired",
      refresh: "Refresh",
      scanned: "Scanned"
    },
    ColorPicker: {
      presetEmpty: "Empty"
    }
  };
  Object.assign({}, localeValues.Modal);
  let localeList = [];
  const generateLocale = () => localeList.reduce((merged, locale2) => Object.assign(Object.assign({}, merged), locale2), localeValues.Modal);
  function changeConfirmLocale(newLocale) {
    if (newLocale) {
      const cloneLocale = Object.assign({}, newLocale);
      localeList.push(cloneLocale);
      generateLocale();
      return () => {
        localeList = localeList.filter((locale2) => locale2 !== cloneLocale);
        generateLocale();
      };
    }
    Object.assign({}, localeValues.Modal);
  }
  const LocaleContext = /* @__PURE__ */ React.createContext(void 0);
  const useLocale = (componentName, defaultLocale) => {
    const fullLocale = React__namespace.useContext(LocaleContext);
    const getLocale = React__namespace.useMemo(() => {
      var _a2;
      const locale2 = localeValues[componentName];
      const localeFromContext = (_a2 = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale[componentName]) !== null && _a2 !== void 0 ? _a2 : {};
      return Object.assign(Object.assign({}, typeof locale2 === "function" ? locale2() : locale2), localeFromContext || {});
    }, [componentName, defaultLocale, fullLocale]);
    const getLocaleCode = React__namespace.useMemo(() => {
      const localeCode = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.locale;
      if ((fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.exist) && !localeCode) {
        return localeValues.locale;
      }
      return localeCode;
    }, [fullLocale]);
    return [getLocale, getLocaleCode];
  };
  const ANT_MARK = "internalMark";
  const LocaleProvider = (props) => {
    const {
      locale: locale2 = {},
      children,
      _ANT_MARK__
    } = props;
    React__namespace.useEffect(() => {
      const clearLocale = changeConfirmLocale(locale2 && locale2.Modal);
      return clearLocale;
    }, [locale2]);
    const getMemoizedContextValue = React__namespace.useMemo(() => Object.assign(Object.assign({}, locale2), {
      exist: true
    }), [locale2]);
    return /* @__PURE__ */ React__namespace.createElement(LocaleContext.Provider, {
      value: getMemoizedContextValue
    }, children);
  };
  const defaultPresetColors = {
    blue: "#1677ff",
    purple: "#722ED1",
    cyan: "#13C2C2",
    green: "#52C41A",
    magenta: "#EB2F96",
    pink: "#eb2f96",
    red: "#F5222D",
    orange: "#FA8C16",
    yellow: "#FADB14",
    volcano: "#FA541C",
    geekblue: "#2F54EB",
    gold: "#FAAD14",
    lime: "#A0D911"
  };
  const seedToken = Object.assign(Object.assign({}, defaultPresetColors), {
    // Color
    colorPrimary: "#1677ff",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorInfo: "#1677ff",
    colorLink: "",
    colorTextBase: "",
    colorBgBase: "",
    // Font
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
    fontSize: 14,
    // Line
    lineWidth: 1,
    lineType: "solid",
    // Motion
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
    motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
    motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
    motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
    // Radius
    borderRadius: 6,
    // Size
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    // Control Base
    controlHeight: 32,
    // zIndex
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    // Image
    opacityImage: 1,
    // Wireframe
    wireframe: false,
    // Motion
    motion: true
  });
  function genColorMapToken(seed, _ref) {
    let {
      generateColorPalettes: generateColorPalettes2,
      generateNeutralColorPalettes: generateNeutralColorPalettes2
    } = _ref;
    const {
      colorSuccess: colorSuccessBase,
      colorWarning: colorWarningBase,
      colorError: colorErrorBase,
      colorInfo: colorInfoBase,
      colorPrimary: colorPrimaryBase,
      colorBgBase,
      colorTextBase
    } = seed;
    const primaryColors = generateColorPalettes2(colorPrimaryBase);
    const successColors = generateColorPalettes2(colorSuccessBase);
    const warningColors = generateColorPalettes2(colorWarningBase);
    const errorColors = generateColorPalettes2(colorErrorBase);
    const infoColors = generateColorPalettes2(colorInfoBase);
    const neutralColors = generateNeutralColorPalettes2(colorBgBase, colorTextBase);
    const colorLink = seed.colorLink || seed.colorInfo;
    const linkColors = generateColorPalettes2(colorLink);
    return Object.assign(Object.assign({}, neutralColors), {
      colorPrimaryBg: primaryColors[1],
      colorPrimaryBgHover: primaryColors[2],
      colorPrimaryBorder: primaryColors[3],
      colorPrimaryBorderHover: primaryColors[4],
      colorPrimaryHover: primaryColors[5],
      colorPrimary: primaryColors[6],
      colorPrimaryActive: primaryColors[7],
      colorPrimaryTextHover: primaryColors[8],
      colorPrimaryText: primaryColors[9],
      colorPrimaryTextActive: primaryColors[10],
      colorSuccessBg: successColors[1],
      colorSuccessBgHover: successColors[2],
      colorSuccessBorder: successColors[3],
      colorSuccessBorderHover: successColors[4],
      colorSuccessHover: successColors[4],
      colorSuccess: successColors[6],
      colorSuccessActive: successColors[7],
      colorSuccessTextHover: successColors[8],
      colorSuccessText: successColors[9],
      colorSuccessTextActive: successColors[10],
      colorErrorBg: errorColors[1],
      colorErrorBgHover: errorColors[2],
      colorErrorBorder: errorColors[3],
      colorErrorBorderHover: errorColors[4],
      colorErrorHover: errorColors[5],
      colorError: errorColors[6],
      colorErrorActive: errorColors[7],
      colorErrorTextHover: errorColors[8],
      colorErrorText: errorColors[9],
      colorErrorTextActive: errorColors[10],
      colorWarningBg: warningColors[1],
      colorWarningBgHover: warningColors[2],
      colorWarningBorder: warningColors[3],
      colorWarningBorderHover: warningColors[4],
      colorWarningHover: warningColors[4],
      colorWarning: warningColors[6],
      colorWarningActive: warningColors[7],
      colorWarningTextHover: warningColors[8],
      colorWarningText: warningColors[9],
      colorWarningTextActive: warningColors[10],
      colorInfoBg: infoColors[1],
      colorInfoBgHover: infoColors[2],
      colorInfoBorder: infoColors[3],
      colorInfoBorderHover: infoColors[4],
      colorInfoHover: infoColors[4],
      colorInfo: infoColors[6],
      colorInfoActive: infoColors[7],
      colorInfoTextHover: infoColors[8],
      colorInfoText: infoColors[9],
      colorInfoTextActive: infoColors[10],
      colorLinkHover: linkColors[4],
      colorLink: linkColors[6],
      colorLinkActive: linkColors[7],
      colorBgMask: new TinyColor("#000").setAlpha(0.45).toRgbString(),
      colorWhite: "#fff"
    });
  }
  const genRadius = (radiusBase) => {
    let radiusLG = radiusBase;
    let radiusSM = radiusBase;
    let radiusXS = radiusBase;
    let radiusOuter = radiusBase;
    if (radiusBase < 6 && radiusBase >= 5) {
      radiusLG = radiusBase + 1;
    } else if (radiusBase < 16 && radiusBase >= 6) {
      radiusLG = radiusBase + 2;
    } else if (radiusBase >= 16) {
      radiusLG = 16;
    }
    if (radiusBase < 7 && radiusBase >= 5) {
      radiusSM = 4;
    } else if (radiusBase < 8 && radiusBase >= 7) {
      radiusSM = 5;
    } else if (radiusBase < 14 && radiusBase >= 8) {
      radiusSM = 6;
    } else if (radiusBase < 16 && radiusBase >= 14) {
      radiusSM = 7;
    } else if (radiusBase >= 16) {
      radiusSM = 8;
    }
    if (radiusBase < 6 && radiusBase >= 2) {
      radiusXS = 1;
    } else if (radiusBase >= 6) {
      radiusXS = 2;
    }
    if (radiusBase > 4 && radiusBase < 8) {
      radiusOuter = 4;
    } else if (radiusBase >= 8) {
      radiusOuter = 6;
    }
    return {
      borderRadius: radiusBase,
      borderRadiusXS: radiusXS,
      borderRadiusSM: radiusSM,
      borderRadiusLG: radiusLG,
      borderRadiusOuter: radiusOuter
    };
  };
  function genCommonMapToken(token2) {
    const {
      motionUnit,
      motionBase,
      borderRadius,
      lineWidth
    } = token2;
    return Object.assign({
      // motion
      motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
      motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
      motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
      // line
      lineWidthBold: lineWidth + 1
    }, genRadius(borderRadius));
  }
  const genControlHeight = (token2) => {
    const {
      controlHeight
    } = token2;
    return {
      controlHeightSM: controlHeight * 0.75,
      controlHeightXS: controlHeight * 0.5,
      controlHeightLG: controlHeight * 1.25
    };
  };
  function getLineHeight(fontSize) {
    return (fontSize + 8) / fontSize;
  }
  function getFontSizes(base) {
    const fontSizes = new Array(10).fill(null).map((_, index2) => {
      const i = index2 - 1;
      const baseSize = base * Math.pow(2.71828, i / 5);
      const intSize = index2 > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
      return Math.floor(intSize / 2) * 2;
    });
    fontSizes[1] = base;
    return fontSizes.map((size) => ({
      size,
      lineHeight: getLineHeight(size)
    }));
  }
  const genFontMapToken = (fontSize) => {
    const fontSizePairs = getFontSizes(fontSize);
    const fontSizes = fontSizePairs.map((pair) => pair.size);
    const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);
    const fontSizeMD = fontSizes[1];
    const fontSizeSM = fontSizes[0];
    const fontSizeLG = fontSizes[2];
    const lineHeight = lineHeights[1];
    const lineHeightSM = lineHeights[0];
    const lineHeightLG = lineHeights[2];
    return {
      fontSizeSM,
      fontSize: fontSizeMD,
      fontSizeLG,
      fontSizeXL: fontSizes[3],
      fontSizeHeading1: fontSizes[6],
      fontSizeHeading2: fontSizes[5],
      fontSizeHeading3: fontSizes[4],
      fontSizeHeading4: fontSizes[3],
      fontSizeHeading5: fontSizes[2],
      lineHeight,
      lineHeightLG,
      lineHeightSM,
      fontHeight: Math.round(lineHeight * fontSizeMD),
      fontHeightLG: Math.round(lineHeightLG * fontSizeLG),
      fontHeightSM: Math.round(lineHeightSM * fontSizeSM),
      lineHeightHeading1: lineHeights[6],
      lineHeightHeading2: lineHeights[5],
      lineHeightHeading3: lineHeights[4],
      lineHeightHeading4: lineHeights[3],
      lineHeightHeading5: lineHeights[2]
    };
  };
  function genSizeMapToken(token2) {
    const {
      sizeUnit,
      sizeStep
    } = token2;
    return {
      sizeXXL: sizeUnit * (sizeStep + 8),
      // 48
      sizeXL: sizeUnit * (sizeStep + 4),
      // 32
      sizeLG: sizeUnit * (sizeStep + 2),
      // 24
      sizeMD: sizeUnit * (sizeStep + 1),
      // 20
      sizeMS: sizeUnit * sizeStep,
      // 16
      size: sizeUnit * sizeStep,
      // 16
      sizeSM: sizeUnit * (sizeStep - 1),
      // 12
      sizeXS: sizeUnit * (sizeStep - 2),
      // 8
      sizeXXS: sizeUnit * (sizeStep - 3)
      // 4
    };
  }
  const getAlphaColor$1 = (baseColor, alpha) => new TinyColor(baseColor).setAlpha(alpha).toRgbString();
  const getSolidColor = (baseColor, brightness) => {
    const instance = new TinyColor(baseColor);
    return instance.darken(brightness).toHexString();
  };
  const generateColorPalettes = (baseColor) => {
    const colors = generate$1(baseColor);
    return {
      1: colors[0],
      2: colors[1],
      3: colors[2],
      4: colors[3],
      5: colors[4],
      6: colors[5],
      7: colors[6],
      8: colors[4],
      9: colors[5],
      10: colors[6]
      // 8: colors[7],
      // 9: colors[8],
      // 10: colors[9],
    };
  };
  const generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
    const colorBgBase = bgBaseColor || "#fff";
    const colorTextBase = textBaseColor || "#000";
    return {
      colorBgBase,
      colorTextBase,
      colorText: getAlphaColor$1(colorTextBase, 0.88),
      colorTextSecondary: getAlphaColor$1(colorTextBase, 0.65),
      colorTextTertiary: getAlphaColor$1(colorTextBase, 0.45),
      colorTextQuaternary: getAlphaColor$1(colorTextBase, 0.25),
      colorFill: getAlphaColor$1(colorTextBase, 0.15),
      colorFillSecondary: getAlphaColor$1(colorTextBase, 0.06),
      colorFillTertiary: getAlphaColor$1(colorTextBase, 0.04),
      colorFillQuaternary: getAlphaColor$1(colorTextBase, 0.02),
      colorBgLayout: getSolidColor(colorBgBase, 4),
      colorBgContainer: getSolidColor(colorBgBase, 0),
      colorBgElevated: getSolidColor(colorBgBase, 0),
      colorBgSpotlight: getAlphaColor$1(colorTextBase, 0.85),
      colorBgBlur: "transparent",
      colorBorder: getSolidColor(colorBgBase, 15),
      colorBorderSecondary: getSolidColor(colorBgBase, 6)
    };
  };
  function derivative(token2) {
    const colorPalettes = Object.keys(defaultPresetColors).map((colorKey) => {
      const colors = generate$1(token2[colorKey]);
      return new Array(10).fill(1).reduce((prev2, _, i) => {
        prev2[`${colorKey}-${i + 1}`] = colors[i];
        prev2[`${colorKey}${i + 1}`] = colors[i];
        return prev2;
      }, {});
    }).reduce((prev2, cur) => {
      prev2 = Object.assign(Object.assign({}, prev2), cur);
      return prev2;
    }, {});
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, token2), colorPalettes), genColorMapToken(token2, {
      generateColorPalettes,
      generateNeutralColorPalettes
    })), genFontMapToken(token2.fontSize)), genSizeMapToken(token2)), genControlHeight(token2)), genCommonMapToken(token2));
  }
  const defaultTheme = createTheme(derivative);
  const defaultConfig = {
    token: seedToken,
    override: {
      override: seedToken
    },
    hashed: true
  };
  const DesignTokenContext = /* @__PURE__ */ React.createContext(defaultConfig);
  const defaultIconPrefixCls = "anticon";
  const defaultGetPrefixCls = (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    return suffixCls ? `ant-${suffixCls}` : "ant";
  };
  const ConfigContext = /* @__PURE__ */ React__namespace.createContext({
    // We provide a default function for Context without provider
    getPrefixCls: defaultGetPrefixCls,
    iconPrefixCls: defaultIconPrefixCls
  });
  const dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`;
  function getStyle(globalPrefixCls2, theme) {
    const variables = {};
    const formatColor = (color, updater) => {
      let clone = color.clone();
      clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
      return clone.toRgbString();
    };
    const fillColor = (colorVal, type) => {
      const baseColor = new TinyColor(colorVal);
      const colorPalettes = generate$1(baseColor.toRgbString());
      variables[`${type}-color`] = formatColor(baseColor);
      variables[`${type}-color-disabled`] = colorPalettes[1];
      variables[`${type}-color-hover`] = colorPalettes[4];
      variables[`${type}-color-active`] = colorPalettes[6];
      variables[`${type}-color-outline`] = baseColor.clone().setAlpha(0.2).toRgbString();
      variables[`${type}-color-deprecated-bg`] = colorPalettes[0];
      variables[`${type}-color-deprecated-border`] = colorPalettes[2];
    };
    if (theme.primaryColor) {
      fillColor(theme.primaryColor, "primary");
      const primaryColor = new TinyColor(theme.primaryColor);
      const primaryColors = generate$1(primaryColor.toRgbString());
      primaryColors.forEach((color, index2) => {
        variables[`primary-${index2 + 1}`] = color;
      });
      variables["primary-color-deprecated-l-35"] = formatColor(primaryColor, (c2) => c2.lighten(35));
      variables["primary-color-deprecated-l-20"] = formatColor(primaryColor, (c2) => c2.lighten(20));
      variables["primary-color-deprecated-t-20"] = formatColor(primaryColor, (c2) => c2.tint(20));
      variables["primary-color-deprecated-t-50"] = formatColor(primaryColor, (c2) => c2.tint(50));
      variables["primary-color-deprecated-f-12"] = formatColor(primaryColor, (c2) => c2.setAlpha(c2.getAlpha() * 0.12));
      const primaryActiveColor = new TinyColor(primaryColors[0]);
      variables["primary-color-active-deprecated-f-30"] = formatColor(primaryActiveColor, (c2) => c2.setAlpha(c2.getAlpha() * 0.3));
      variables["primary-color-active-deprecated-d-02"] = formatColor(primaryActiveColor, (c2) => c2.darken(2));
    }
    if (theme.successColor) {
      fillColor(theme.successColor, "success");
    }
    if (theme.warningColor) {
      fillColor(theme.warningColor, "warning");
    }
    if (theme.errorColor) {
      fillColor(theme.errorColor, "error");
    }
    if (theme.infoColor) {
      fillColor(theme.infoColor, "info");
    }
    const cssList = Object.keys(variables).map((key) => `--${globalPrefixCls2}-${key}: ${variables[key]};`);
    return `
  :root {
    ${cssList.join("\n")}
  }
  `.trim();
  }
  function registerTheme(globalPrefixCls2, theme) {
    const style2 = getStyle(globalPrefixCls2, theme);
    if (canUseDom()) {
      updateCSS(style2, `${dynamicStyleMark}-dynamic-theme`);
    }
  }
  const DisabledContext = /* @__PURE__ */ React__namespace.createContext(false);
  const DisabledContextProvider = (_ref) => {
    let {
      children,
      disabled
    } = _ref;
    const originDisabled = React__namespace.useContext(DisabledContext);
    return /* @__PURE__ */ React__namespace.createElement(DisabledContext.Provider, {
      value: disabled !== null && disabled !== void 0 ? disabled : originDisabled
    }, children);
  };
  const SizeContext = /* @__PURE__ */ React__namespace.createContext(void 0);
  const SizeContextProvider = (_ref) => {
    let {
      children,
      size
    } = _ref;
    const originSize = React__namespace.useContext(SizeContext);
    return /* @__PURE__ */ React__namespace.createElement(SizeContext.Provider, {
      value: size || originSize
    }, children);
  };
  function useConfig() {
    const componentDisabled = React.useContext(DisabledContext);
    const componentSize = React.useContext(SizeContext);
    return {
      componentDisabled,
      componentSize
    };
  }
  const PresetColors = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];
  const version$1 = "5.16.4";
  function isStableColor(color) {
    return color >= 0 && color <= 255;
  }
  function getAlphaColor(frontColor, backgroundColor) {
    const {
      r: fR,
      g: fG,
      b: fB,
      a: originAlpha
    } = new TinyColor(frontColor).toRgb();
    if (originAlpha < 1) {
      return frontColor;
    }
    const {
      r: bR,
      g: bG,
      b: bB
    } = new TinyColor(backgroundColor).toRgb();
    for (let fA = 0.01; fA <= 1; fA += 0.01) {
      const r = Math.round((fR - bR * (1 - fA)) / fA);
      const g2 = Math.round((fG - bG * (1 - fA)) / fA);
      const b2 = Math.round((fB - bB * (1 - fA)) / fA);
      if (isStableColor(r) && isStableColor(g2) && isStableColor(b2)) {
        return new TinyColor({
          r,
          g: g2,
          b: b2,
          a: Math.round(fA * 100) / 100
        }).toRgbString();
      }
    }
    return new TinyColor({
      r: fR,
      g: fG,
      b: fB,
      a: 1
    }).toRgbString();
  }
  var __rest$c = function(s, e2) {
    var t2 = {};
    for (var p2 in s)
      if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
          t2[p2[i]] = s[p2[i]];
      }
    return t2;
  };
  function formatToken(derivativeToken) {
    const {
      override
    } = derivativeToken, restToken = __rest$c(derivativeToken, ["override"]);
    const overrideTokens = Object.assign({}, override);
    Object.keys(seedToken).forEach((token2) => {
      delete overrideTokens[token2];
    });
    const mergedToken = Object.assign(Object.assign({}, restToken), overrideTokens);
    const screenXS = 480;
    const screenSM = 576;
    const screenMD = 768;
    const screenLG = 992;
    const screenXL = 1200;
    const screenXXL = 1600;
    if (mergedToken.motion === false) {
      const fastDuration = "0s";
      mergedToken.motionDurationFast = fastDuration;
      mergedToken.motionDurationMid = fastDuration;
      mergedToken.motionDurationSlow = fastDuration;
    }
    const aliasToken = Object.assign(Object.assign(Object.assign({}, mergedToken), {
      // ============== Background ============== //
      colorFillContent: mergedToken.colorFillSecondary,
      colorFillContentHover: mergedToken.colorFill,
      colorFillAlter: mergedToken.colorFillQuaternary,
      colorBgContainerDisabled: mergedToken.colorFillTertiary,
      // ============== Split ============== //
      colorBorderBg: mergedToken.colorBgContainer,
      colorSplit: getAlphaColor(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
      // ============== Text ============== //
      colorTextPlaceholder: mergedToken.colorTextQuaternary,
      colorTextDisabled: mergedToken.colorTextQuaternary,
      colorTextHeading: mergedToken.colorText,
      colorTextLabel: mergedToken.colorTextSecondary,
      colorTextDescription: mergedToken.colorTextTertiary,
      colorTextLightSolid: mergedToken.colorWhite,
      colorHighlight: mergedToken.colorError,
      colorBgTextHover: mergedToken.colorFillSecondary,
      colorBgTextActive: mergedToken.colorFill,
      colorIcon: mergedToken.colorTextTertiary,
      colorIconHover: mergedToken.colorText,
      colorErrorOutline: getAlphaColor(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
      colorWarningOutline: getAlphaColor(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
      // Font
      fontSizeIcon: mergedToken.fontSizeSM,
      // Line
      lineWidthFocus: mergedToken.lineWidth * 4,
      // Control
      lineWidth: mergedToken.lineWidth,
      controlOutlineWidth: mergedToken.lineWidth * 2,
      // Checkbox size and expand icon size
      controlInteractiveSize: mergedToken.controlHeight / 2,
      controlItemBgHover: mergedToken.colorFillTertiary,
      controlItemBgActive: mergedToken.colorPrimaryBg,
      controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
      controlItemBgActiveDisabled: mergedToken.colorFill,
      controlTmpOutline: mergedToken.colorFillQuaternary,
      controlOutline: getAlphaColor(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
      lineType: mergedToken.lineType,
      borderRadius: mergedToken.borderRadius,
      borderRadiusXS: mergedToken.borderRadiusXS,
      borderRadiusSM: mergedToken.borderRadiusSM,
      borderRadiusLG: mergedToken.borderRadiusLG,
      fontWeightStrong: 600,
      opacityLoading: 0.65,
      linkDecoration: "none",
      linkHoverDecoration: "none",
      linkFocusDecoration: "none",
      controlPaddingHorizontal: 12,
      controlPaddingHorizontalSM: 8,
      paddingXXS: mergedToken.sizeXXS,
      paddingXS: mergedToken.sizeXS,
      paddingSM: mergedToken.sizeSM,
      padding: mergedToken.size,
      paddingMD: mergedToken.sizeMD,
      paddingLG: mergedToken.sizeLG,
      paddingXL: mergedToken.sizeXL,
      paddingContentHorizontalLG: mergedToken.sizeLG,
      paddingContentVerticalLG: mergedToken.sizeMS,
      paddingContentHorizontal: mergedToken.sizeMS,
      paddingContentVertical: mergedToken.sizeSM,
      paddingContentHorizontalSM: mergedToken.size,
      paddingContentVerticalSM: mergedToken.sizeXS,
      marginXXS: mergedToken.sizeXXS,
      marginXS: mergedToken.sizeXS,
      marginSM: mergedToken.sizeSM,
      margin: mergedToken.size,
      marginMD: mergedToken.sizeMD,
      marginLG: mergedToken.sizeLG,
      marginXL: mergedToken.sizeXL,
      marginXXL: mergedToken.sizeXXL,
      boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      screenXS,
      screenXSMin: screenXS,
      screenXSMax: screenSM - 1,
      screenSM,
      screenSMMin: screenSM,
      screenSMMax: screenMD - 1,
      screenMD,
      screenMDMin: screenMD,
      screenMDMax: screenLG - 1,
      screenLG,
      screenLGMin: screenLG,
      screenLGMax: screenXL - 1,
      screenXL,
      screenXLMin: screenXL,
      screenXLMax: screenXXL - 1,
      screenXXL,
      screenXXLMin: screenXXL,
      boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
      boxShadowCard: `
      0 1px 2px -2px ${new TinyColor("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new TinyColor("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new TinyColor("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
      boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
    }), overrideTokens);
    return aliasToken;
  }
  var __rest$b = function(s, e2) {
    var t2 = {};
    for (var p2 in s)
      if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
          t2[p2[i]] = s[p2[i]];
      }
    return t2;
  };
  const unitless = {
    lineHeight: true,
    lineHeightSM: true,
    lineHeightLG: true,
    lineHeightHeading1: true,
    lineHeightHeading2: true,
    lineHeightHeading3: true,
    lineHeightHeading4: true,
    lineHeightHeading5: true,
    opacityLoading: true,
    fontWeightStrong: true,
    zIndexPopupBase: true,
    zIndexBase: true
  };
  const ignore = {
    size: true,
    sizeSM: true,
    sizeLG: true,
    sizeMD: true,
    sizeXS: true,
    sizeXXS: true,
    sizeMS: true,
    sizeXL: true,
    sizeXXL: true,
    sizeUnit: true,
    sizeStep: true,
    motionBase: true,
    motionUnit: true
  };
  const preserve = {
    screenXS: true,
    screenXSMin: true,
    screenXSMax: true,
    screenSM: true,
    screenSMMin: true,
    screenSMMax: true,
    screenMD: true,
    screenMDMin: true,
    screenMDMax: true,
    screenLG: true,
    screenLGMin: true,
    screenLGMax: true,
    screenXL: true,
    screenXLMin: true,
    screenXLMax: true,
    screenXXL: true,
    screenXXLMin: true
  };
  const getComputedToken = (originToken, overrideToken, theme) => {
    const derivativeToken = theme.getDerivativeToken(originToken);
    const {
      override
    } = overrideToken, components = __rest$b(overrideToken, ["override"]);
    let mergedDerivativeToken = Object.assign(Object.assign({}, derivativeToken), {
      override
    });
    mergedDerivativeToken = formatToken(mergedDerivativeToken);
    if (components) {
      Object.entries(components).forEach((_ref) => {
        let [key, value] = _ref;
        const {
          theme: componentTheme
        } = value, componentTokens = __rest$b(value, ["theme"]);
        let mergedComponentToken = componentTokens;
        if (componentTheme) {
          mergedComponentToken = getComputedToken(Object.assign(Object.assign({}, mergedDerivativeToken), componentTokens), {
            override: componentTokens
          }, componentTheme);
        }
        mergedDerivativeToken[key] = mergedComponentToken;
      });
    }
    return mergedDerivativeToken;
  };
  function useToken() {
    const {
      token: rootDesignToken,
      hashed,
      theme,
      override,
      cssVar
    } = React.useContext(DesignTokenContext);
    const salt = `${version$1}-${hashed || ""}`;
    const mergedTheme = theme || defaultTheme;
    const [token2, hashId, realToken] = useCacheToken(mergedTheme, [seedToken, rootDesignToken], {
      salt,
      override,
      getComputedToken,
      // formatToken will not be consumed after 1.15.0 with getComputedToken.
      // But token will break if @ant-design/cssinjs is under 1.15.0 without it
      formatToken,
      cssVar: cssVar && {
        prefix: cssVar.prefix,
        key: cssVar.key,
        unitless,
        ignore,
        preserve
      }
    });
    return [mergedTheme, realToken, hashed ? hashId : "", token2, cssVar];
  }
  function _callSuper(t2, o, e2) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t2, _isNativeReflectConstruct() ? Reflect.construct(o, [], _getPrototypeOf(t2).constructor) : o.apply(t2, e2));
  }
  let AbstractCalculator = /* @__PURE__ */ _createClass(function AbstractCalculator2() {
    _classCallCheck(this, AbstractCalculator2);
  });
  const CALC_UNIT = "CALC_UNIT";
  const regexp = new RegExp(CALC_UNIT, "g");
  function unit(value) {
    if (typeof value === "number") {
      return `${value}${CALC_UNIT}`;
    }
    return value;
  }
  let CSSCalculator = /* @__PURE__ */ function(_AbstractCalculator) {
    function CSSCalculator2(num) {
      var _this;
      _classCallCheck(this, CSSCalculator2);
      _this = _callSuper(this, CSSCalculator2);
      _this.result = "";
      if (num instanceof CSSCalculator2) {
        _this.result = `(${num.result})`;
      } else if (typeof num === "number") {
        _this.result = unit(num);
      } else if (typeof num === "string") {
        _this.result = num;
      }
      return _this;
    }
    _inherits(CSSCalculator2, _AbstractCalculator);
    return _createClass(CSSCalculator2, [{
      key: "add",
      value: function add(num) {
        if (num instanceof CSSCalculator2) {
          this.result = `${this.result} + ${num.getResult()}`;
        } else if (typeof num === "number" || typeof num === "string") {
          this.result = `${this.result} + ${unit(num)}`;
        }
        this.lowPriority = true;
        return this;
      }
    }, {
      key: "sub",
      value: function sub(num) {
        if (num instanceof CSSCalculator2) {
          this.result = `${this.result} - ${num.getResult()}`;
        } else if (typeof num === "number" || typeof num === "string") {
          this.result = `${this.result} - ${unit(num)}`;
        }
        this.lowPriority = true;
        return this;
      }
    }, {
      key: "mul",
      value: function mul(num) {
        if (this.lowPriority) {
          this.result = `(${this.result})`;
        }
        if (num instanceof CSSCalculator2) {
          this.result = `${this.result} * ${num.getResult(true)}`;
        } else if (typeof num === "number" || typeof num === "string") {
          this.result = `${this.result} * ${num}`;
        }
        this.lowPriority = false;
        return this;
      }
    }, {
      key: "div",
      value: function div(num) {
        if (this.lowPriority) {
          this.result = `(${this.result})`;
        }
        if (num instanceof CSSCalculator2) {
          this.result = `${this.result} / ${num.getResult(true)}`;
        } else if (typeof num === "number" || typeof num === "string") {
          this.result = `${this.result} / ${num}`;
        }
        this.lowPriority = false;
        return this;
      }
    }, {
      key: "getResult",
      value: function getResult(force) {
        return this.lowPriority || force ? `(${this.result})` : this.result;
      }
    }, {
      key: "equal",
      value: function equal(options) {
        const {
          unit: cssUnit = true
        } = options || {};
        this.result = this.result.replace(regexp, cssUnit ? "px" : "");
        if (typeof this.lowPriority !== "undefined") {
          return `calc(${this.result})`;
        }
        return this.result;
      }
    }]);
  }(AbstractCalculator);
  let NumCalculator = /* @__PURE__ */ function(_AbstractCalculator) {
    function NumCalculator2(num) {
      var _this;
      _classCallCheck(this, NumCalculator2);
      _this = _callSuper(this, NumCalculator2);
      _this.result = 0;
      if (num instanceof NumCalculator2) {
        _this.result = num.result;
      } else if (typeof num === "number") {
        _this.result = num;
      }
      return _this;
    }
    _inherits(NumCalculator2, _AbstractCalculator);
    return _createClass(NumCalculator2, [{
      key: "add",
      value: function add(num) {
        if (num instanceof NumCalculator2) {
          this.result += num.result;
        } else if (typeof num === "number") {
          this.result += num;
        }
        return this;
      }
    }, {
      key: "sub",
      value: function sub(num) {
        if (num instanceof NumCalculator2) {
          this.result -= num.result;
        } else if (typeof num === "number") {
          this.result -= num;
        }
        return this;
      }
    }, {
      key: "mul",
      value: function mul(num) {
        if (num instanceof NumCalculator2) {
          this.result *= num.result;
        } else if (typeof num === "number") {
          this.result *= num;
        }
        return this;
      }
    }, {
      key: "div",
      value: function div(num) {
        if (num instanceof NumCalculator2) {
          this.result /= num.result;
        } else if (typeof num === "number") {
          this.result /= num;
        }
        return this;
      }
    }, {
      key: "equal",
      value: function equal() {
        return this.result;
      }
    }]);
  }(AbstractCalculator);
  const genCalc = (type) => {
    const Calculator = type === "css" ? CSSCalculator : NumCalculator;
    return (num) => new Calculator(num);
  };
  function useEvent(callback) {
    var fnRef = React__namespace.useRef();
    fnRef.current = callback;
    var memoFn = React__namespace.useCallback(function() {
      var _fnRef$current;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
    }, []);
    return memoFn;
  }
  function useSafeState(defaultValue) {
    var destroyRef = React__namespace.useRef(false);
    var _React$useState = React__namespace.useState(defaultValue), _React$useState2 = _slicedToArray(_React$useState, 2), value = _React$useState2[0], setValue = _React$useState2[1];
    React__namespace.useEffect(function() {
      destroyRef.current = false;
      return function() {
        destroyRef.current = true;
      };
    }, []);
    function safeSetState(updater, ignoreDestroy) {
      if (ignoreDestroy && destroyRef.current) {
        return;
      }
      setValue(updater);
    }
    return [value, safeSetState];
  }
  function hasValue(value) {
    return value !== void 0;
  }
  function useMergedState(defaultStateValue, option) {
    var _ref = option || {}, defaultValue = _ref.defaultValue, value = _ref.value, onChange = _ref.onChange, postState = _ref.postState;
    var _useState = useSafeState(function() {
      if (hasValue(value)) {
        return value;
      } else if (hasValue(defaultValue)) {
        return typeof defaultValue === "function" ? defaultValue() : defaultValue;
      } else {
        return typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
      }
    }), _useState2 = _slicedToArray(_useState, 2), innerValue = _useState2[0], setInnerValue = _useState2[1];
    var mergedValue = value !== void 0 ? value : innerValue;
    var postMergedValue = postState ? postState(mergedValue) : mergedValue;
    var onChangeFn = useEvent(onChange);
    var _useState3 = useSafeState([mergedValue]), _useState4 = _slicedToArray(_useState3, 2), prevValue = _useState4[0], setPrevValue = _useState4[1];
    useLayoutUpdateEffect(function() {
      var prev2 = prevValue[0];
      if (innerValue !== prev2) {
        onChangeFn(innerValue, prev2);
      }
    }, [prevValue]);
    useLayoutUpdateEffect(function() {
      if (!hasValue(value)) {
        setInnerValue(value);
      }
    }, [value]);
    var triggerChange = useEvent(function(updater, ignoreDestroy) {
      setInnerValue(updater, ignoreDestroy);
      setPrevValue([mergedValue], ignoreDestroy);
    });
    return [postMergedValue, triggerChange];
  }
  const textEllipsis = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  };
  const resetComponent = function(token2) {
    let needInheritFontFamily = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      color: token2.colorText,
      fontSize: token2.fontSize,
      // font-variant: @font-variant-base;
      lineHeight: token2.lineHeight,
      listStyle: "none",
      // font-feature-settings: @font-feature-settings-base;
      fontFamily: needInheritFontFamily ? "inherit" : token2.fontFamily
    };
  };
  const resetIcon = () => ({
    display: "inline-flex",
    alignItems: "center",
    color: "inherit",
    fontStyle: "normal",
    lineHeight: 0,
    textAlign: "center",
    textTransform: "none",
    // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
    verticalAlign: "-0.125em",
    textRendering: "optimizeLegibility",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    "> *": {
      lineHeight: 1
    },
    svg: {
      display: "inline-block"
    }
  });
  const genLinkStyle = (token2) => ({
    a: {
      color: token2.colorLink,
      textDecoration: token2.linkDecoration,
      backgroundColor: "transparent",
      // remove the gray background on active links in IE 10.
      outline: "none",
      cursor: "pointer",
      transition: `color ${token2.motionDurationSlow}`,
      "-webkit-text-decoration-skip": "objects",
      // remove gaps in links underline in iOS 8+ and Safari 8+.
      "&:hover": {
        color: token2.colorLinkHover
      },
      "&:active": {
        color: token2.colorLinkActive
      },
      [`&:active,
  &:hover`]: {
        textDecoration: token2.linkHoverDecoration,
        outline: 0
      },
      // https://github.com/ant-design/ant-design/issues/22503
      "&:focus": {
        textDecoration: token2.linkFocusDecoration,
        outline: 0
      },
      "&[disabled]": {
        color: token2.colorTextDisabled,
        cursor: "not-allowed"
      }
    }
  });
  const genCommonStyle = (token2, componentPrefixCls, rootCls, resetFont) => {
    const prefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
    const rootPrefixSelector = rootCls ? `.${rootCls}` : prefixSelector;
    const resetStyle = {
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      }
    };
    let resetFontStyle = {};
    if (resetFont !== false) {
      resetFontStyle = {
        fontFamily: token2.fontFamily,
        fontSize: token2.fontSize
      };
    }
    return {
      [rootPrefixSelector]: Object.assign(Object.assign(Object.assign({}, resetFontStyle), resetStyle), {
        [prefixSelector]: resetStyle
      })
    };
  };
  const genFocusOutline = (token2) => ({
    outline: `${unit$1(token2.lineWidthFocus)} solid ${token2.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: "outline-offset 0s, outline 0s"
  });
  const genFocusStyle = (token2) => ({
    "&:focus-visible": Object.assign({}, genFocusOutline(token2))
  });
  function genMaxMin(type) {
    if (type === "js") {
      return {
        max: Math.max,
        min: Math.min
      };
    }
    return {
      max: function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return `max(${args.map((value) => unit$1(value)).join(",")})`;
      },
      min: function() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return `min(${args.map((value) => unit$1(value)).join(",")})`;
      }
    };
  }
  const enableStatistic = typeof CSSINJS_STATISTIC !== "undefined";
  let recording = true;
  function merge() {
    for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
      objs[_key] = arguments[_key];
    }
    if (!enableStatistic) {
      return Object.assign.apply(Object, [{}].concat(objs));
    }
    recording = false;
    const ret = {};
    objs.forEach((obj) => {
      const keys2 = Object.keys(obj);
      keys2.forEach((key) => {
        Object.defineProperty(ret, key, {
          configurable: true,
          enumerable: true,
          get: () => obj[key]
        });
      });
    });
    recording = true;
    return ret;
  }
  const statistic = {};
  function noop() {
  }
  const statisticToken = (token2) => {
    let tokenKeys2;
    let proxy = token2;
    let flush = noop;
    if (enableStatistic && typeof Proxy !== "undefined") {
      tokenKeys2 = /* @__PURE__ */ new Set();
      proxy = new Proxy(token2, {
        get(obj, prop) {
          if (recording) {
            tokenKeys2.add(prop);
          }
          return obj[prop];
        }
      });
      flush = (componentName, componentToken) => {
        var _a2;
        statistic[componentName] = {
          global: Array.from(tokenKeys2),
          component: Object.assign(Object.assign({}, (_a2 = statistic[componentName]) === null || _a2 === void 0 ? void 0 : _a2.component), componentToken)
        };
      };
    }
    return {
      token: proxy,
      keys: tokenKeys2,
      flush
    };
  };
  const useResetIconStyle = (iconPrefixCls, csp) => {
    const [theme, token2] = useToken();
    return useStyleRegister({
      theme,
      token: token2,
      hashId: "",
      path: ["ant-design-icons", iconPrefixCls],
      nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce
    }, () => [{
      [`.${iconPrefixCls}`]: Object.assign(Object.assign({}, resetIcon()), {
        [`.${iconPrefixCls} .${iconPrefixCls}-icon`]: {
          display: "block"
        }
      })
    }]);
  };
  const getDefaultComponentToken = (component, token2, getDefaultToken) => {
    var _a2;
    if (typeof getDefaultToken === "function") {
      return getDefaultToken(merge(token2, (_a2 = token2[component]) !== null && _a2 !== void 0 ? _a2 : {}));
    }
    return getDefaultToken !== null && getDefaultToken !== void 0 ? getDefaultToken : {};
  };
  const getComponentToken = (component, token2, defaultToken, options) => {
    const customToken = Object.assign({}, token2[component]);
    if (options === null || options === void 0 ? void 0 : options.deprecatedTokens) {
      const {
        deprecatedTokens
      } = options;
      deprecatedTokens.forEach((_ref) => {
        let [oldTokenKey, newTokenKey] = _ref;
        var _a2;
        if ((customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey]) || (customToken === null || customToken === void 0 ? void 0 : customToken[newTokenKey])) {
          (_a2 = customToken[newTokenKey]) !== null && _a2 !== void 0 ? _a2 : customToken[newTokenKey] = customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey];
        }
      });
    }
    const mergedToken = Object.assign(Object.assign({}, defaultToken), customToken);
    Object.keys(mergedToken).forEach((key) => {
      if (mergedToken[key] === token2[key]) {
        delete mergedToken[key];
      }
    });
    return mergedToken;
  };
  const getCompVarPrefix = (component, prefix) => `${[prefix, component.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
  function genComponentStyleHook(componentName, styleFn, getDefaultToken) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const cells = Array.isArray(componentName) ? componentName : [componentName, componentName];
    const [component] = cells;
    const concatComponent = cells.join("-");
    return function(prefixCls) {
      let rootCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : prefixCls;
      const [theme, realToken, hashId, token2, cssVar] = useToken();
      const {
        getPrefixCls,
        iconPrefixCls,
        csp
      } = React.useContext(ConfigContext);
      const rootPrefixCls = getPrefixCls();
      const type = cssVar ? "css" : "js";
      const calc = genCalc(type);
      const {
        max,
        min
      } = genMaxMin(type);
      const sharedConfig = {
        theme,
        token: token2,
        hashId,
        nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce,
        clientOnly: options.clientOnly,
        // antd is always at top of styles
        order: options.order || -999
      };
      useStyleRegister(Object.assign(Object.assign({}, sharedConfig), {
        clientOnly: false,
        path: ["Shared", rootPrefixCls]
      }), () => [{
        // Link
        "&": genLinkStyle(token2)
      }]);
      useResetIconStyle(iconPrefixCls, csp);
      const wrapSSR = useStyleRegister(Object.assign(Object.assign({}, sharedConfig), {
        path: [concatComponent, prefixCls, iconPrefixCls]
      }), () => {
        if (options.injectStyle === false) {
          return [];
        }
        const {
          token: proxyToken,
          flush
        } = statisticToken(token2);
        const defaultComponentToken = getDefaultComponentToken(component, realToken, getDefaultToken);
        const componentCls = `.${prefixCls}`;
        const componentToken = getComponentToken(component, realToken, defaultComponentToken, {
          deprecatedTokens: options.deprecatedTokens
        });
        if (cssVar) {
          Object.keys(defaultComponentToken).forEach((key) => {
            defaultComponentToken[key] = `var(${token2CSSVar(key, getCompVarPrefix(component, cssVar.prefix))})`;
          });
        }
        const mergedToken = merge(proxyToken, {
          componentCls,
          prefixCls,
          iconCls: `.${iconPrefixCls}`,
          antCls: `.${rootPrefixCls}`,
          calc,
          // @ts-ignore
          max,
          // @ts-ignore
          min
        }, cssVar ? defaultComponentToken : componentToken);
        const styleInterpolation = styleFn(mergedToken, {
          hashId,
          prefixCls,
          rootPrefixCls,
          iconPrefixCls
        });
        flush(component, componentToken);
        return [options.resetStyle === false ? null : genCommonStyle(mergedToken, prefixCls, rootCls, options.resetFont), styleInterpolation];
      });
      return [wrapSSR, hashId];
    };
  }
  const genSubStyleComponent = (componentName, styleFn, getDefaultToken, options) => {
    const useStyle2 = genComponentStyleHook(componentName, styleFn, getDefaultToken, Object.assign({
      resetStyle: false,
      // Sub Style should default after root one
      order: -998
    }, options));
    const StyledComponent = (_ref2) => {
      let {
        prefixCls,
        rootCls = prefixCls
      } = _ref2;
      useStyle2(prefixCls, rootCls);
      return null;
    };
    return StyledComponent;
  };
  const genCSSVarRegister = (component, getDefaultToken, options) => {
    function prefixToken(key) {
      return `${component}${key.slice(0, 1).toUpperCase()}${key.slice(1)}`;
    }
    const {
      unitless: originUnitless = {},
      injectStyle = true
    } = options !== null && options !== void 0 ? options : {};
    const compUnitless = {
      [prefixToken("zIndexPopup")]: true
    };
    Object.keys(originUnitless).forEach((key) => {
      compUnitless[prefixToken(key)] = originUnitless[key];
    });
    const CSSVarRegister = (_ref3) => {
      let {
        rootCls,
        cssVar
      } = _ref3;
      const [, realToken] = useToken();
      useCSSVarRegister({
        path: [component],
        prefix: cssVar.prefix,
        key: cssVar === null || cssVar === void 0 ? void 0 : cssVar.key,
        unitless: Object.assign(Object.assign({}, unitless), compUnitless),
        ignore,
        token: realToken,
        scope: rootCls
      }, () => {
        const defaultToken = getDefaultComponentToken(component, realToken, getDefaultToken);
        const componentToken = getComponentToken(component, realToken, defaultToken, {
          deprecatedTokens: options === null || options === void 0 ? void 0 : options.deprecatedTokens
        });
        Object.keys(defaultToken).forEach((key) => {
          componentToken[prefixToken(key)] = componentToken[key];
          delete componentToken[key];
        });
        return componentToken;
      });
      return null;
    };
    const useCSSVar = (rootCls) => {
      const [, , , , cssVar] = useToken();
      return [(node2) => injectStyle && cssVar ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CSSVarRegister, {
        rootCls,
        cssVar,
        component
      }), node2) : node2, cssVar === null || cssVar === void 0 ? void 0 : cssVar.key];
    };
    return useCSSVar;
  };
  const genStyleHooks = (component, styleFn, getDefaultToken, options) => {
    const useStyle2 = genComponentStyleHook(component, styleFn, getDefaultToken, options);
    const useCSSVar = genCSSVarRegister(Array.isArray(component) ? component[0] : component, getDefaultToken, options);
    return function(prefixCls) {
      let rootCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : prefixCls;
      const [, hashId] = useStyle2(prefixCls, rootCls);
      const [wrapCSSVar, cssVarCls] = useCSSVar(rootCls);
      return [wrapCSSVar, hashId, cssVarCls];
    };
  };
  function genPresetColor(token2, genCss) {
    return PresetColors.reduce((prev2, colorKey) => {
      const lightColor = token2[`${colorKey}1`];
      const lightBorderColor = token2[`${colorKey}3`];
      const darkColor = token2[`${colorKey}6`];
      const textColor = token2[`${colorKey}7`];
      return Object.assign(Object.assign({}, prev2), genCss(colorKey, {
        lightColor,
        lightBorderColor,
        darkColor,
        textColor
      }));
    }, {});
  }
  const fullClone$1 = Object.assign({}, React__namespace);
  const {
    useId: useId$2
  } = fullClone$1;
  const useEmptyId = () => "";
  const useThemeKey = typeof useId$2 === "undefined" ? useEmptyId : useId$2;
  function useTheme(theme, parentTheme, config) {
    var _a2;
    devUseWarning();
    const themeConfig = theme || {};
    const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? Object.assign(Object.assign({}, defaultConfig), {
      hashed: (_a2 = parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.hashed) !== null && _a2 !== void 0 ? _a2 : defaultConfig.hashed,
      cssVar: parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.cssVar
    }) : parentTheme;
    const themeKey = useThemeKey();
    return useMemo(() => {
      var _a22, _b2;
      if (!theme) {
        return parentTheme;
      }
      const mergedComponents = Object.assign({}, parentThemeConfig.components);
      Object.keys(theme.components || {}).forEach((componentName) => {
        mergedComponents[componentName] = Object.assign(Object.assign({}, mergedComponents[componentName]), theme.components[componentName]);
      });
      const cssVarKey = `css-var-${themeKey.replace(/:/g, "")}`;
      const mergedCssVar = ((_a22 = themeConfig.cssVar) !== null && _a22 !== void 0 ? _a22 : parentThemeConfig.cssVar) && Object.assign(Object.assign(Object.assign({
        prefix: config === null || config === void 0 ? void 0 : config.prefixCls
      }, typeof parentThemeConfig.cssVar === "object" ? parentThemeConfig.cssVar : {}), typeof themeConfig.cssVar === "object" ? themeConfig.cssVar : {}), {
        key: typeof themeConfig.cssVar === "object" && ((_b2 = themeConfig.cssVar) === null || _b2 === void 0 ? void 0 : _b2.key) || cssVarKey
      });
      return Object.assign(Object.assign(Object.assign({}, parentThemeConfig), themeConfig), {
        token: Object.assign(Object.assign({}, parentThemeConfig.token), themeConfig.token),
        components: mergedComponents,
        cssVar: mergedCssVar
      });
    }, [themeConfig, parentThemeConfig], (prev2, next2) => prev2.some((prevTheme, index2) => {
      const nextTheme = next2[index2];
      return !isEqual(prevTheme, nextTheme, true);
    }));
  }
  var _excluded$5 = ["children"];
  var Context = /* @__PURE__ */ React__namespace.createContext({});
  function MotionProvider(_ref) {
    var children = _ref.children, props = _objectWithoutProperties(_ref, _excluded$5);
    return /* @__PURE__ */ React__namespace.createElement(Context.Provider, {
      value: props
    }, children);
  }
  var DomWrapper = /* @__PURE__ */ function(_React$Component) {
    _inherits(DomWrapper2, _React$Component);
    var _super = _createSuper(DomWrapper2);
    function DomWrapper2() {
      _classCallCheck(this, DomWrapper2);
      return _super.apply(this, arguments);
    }
    _createClass(DomWrapper2, [{
      key: "render",
      value: function render2() {
        return this.props.children;
      }
    }]);
    return DomWrapper2;
  }(React__namespace.Component);
  var STATUS_NONE = "none";
  var STATUS_APPEAR = "appear";
  var STATUS_ENTER = "enter";
  var STATUS_LEAVE = "leave";
  var STEP_NONE = "none";
  var STEP_PREPARE = "prepare";
  var STEP_START = "start";
  var STEP_ACTIVE = "active";
  var STEP_ACTIVATED = "end";
  var STEP_PREPARED = "prepared";
  function makePrefixMap(styleProp, eventName) {
    var prefixes = {};
    prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
    prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
    prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
    prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
    prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
    return prefixes;
  }
  function getVendorPrefixes(domSupport, win) {
    var prefixes = {
      animationend: makePrefixMap("Animation", "AnimationEnd"),
      transitionend: makePrefixMap("Transition", "TransitionEnd")
    };
    if (domSupport) {
      if (!("AnimationEvent" in win)) {
        delete prefixes.animationend.animation;
      }
      if (!("TransitionEvent" in win)) {
        delete prefixes.transitionend.transition;
      }
    }
    return prefixes;
  }
  var vendorPrefixes = getVendorPrefixes(canUseDom(), typeof window !== "undefined" ? window : {});
  var style = {};
  if (canUseDom()) {
    var _document$createEleme = document.createElement("div");
    style = _document$createEleme.style;
  }
  var prefixedEventNames = {};
  function getVendorPrefixedEventName(eventName) {
    if (prefixedEventNames[eventName]) {
      return prefixedEventNames[eventName];
    }
    var prefixMap = vendorPrefixes[eventName];
    if (prefixMap) {
      var stylePropList = Object.keys(prefixMap);
      var len = stylePropList.length;
      for (var i = 0; i < len; i += 1) {
        var styleProp = stylePropList[i];
        if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
          prefixedEventNames[eventName] = prefixMap[styleProp];
          return prefixedEventNames[eventName];
        }
      }
    }
    return "";
  }
  var internalAnimationEndName = getVendorPrefixedEventName("animationend");
  var internalTransitionEndName = getVendorPrefixedEventName("transitionend");
  var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
  var animationEndName = internalAnimationEndName || "animationend";
  var transitionEndName = internalTransitionEndName || "transitionend";
  function getTransitionName$1(transitionName, transitionType) {
    if (!transitionName)
      return null;
    if (_typeof(transitionName) === "object") {
      var type = transitionType.replace(/-\w/g, function(match2) {
        return match2[1].toUpperCase();
      });
      return transitionName[type];
    }
    return "".concat(transitionName, "-").concat(transitionType);
  }
  const useDomMotionEvents = function(callback) {
    var cacheElementRef = React.useRef();
    var callbackRef = React.useRef(callback);
    callbackRef.current = callback;
    var onInternalMotionEnd = React__namespace.useCallback(function(event) {
      callbackRef.current(event);
    }, []);
    function removeMotionEvents(element) {
      if (element) {
        element.removeEventListener(transitionEndName, onInternalMotionEnd);
        element.removeEventListener(animationEndName, onInternalMotionEnd);
      }
    }
    function patchMotionEvents(element) {
      if (cacheElementRef.current && cacheElementRef.current !== element) {
        removeMotionEvents(cacheElementRef.current);
      }
      if (element && element !== cacheElementRef.current) {
        element.addEventListener(transitionEndName, onInternalMotionEnd);
        element.addEventListener(animationEndName, onInternalMotionEnd);
        cacheElementRef.current = element;
      }
    }
    React__namespace.useEffect(function() {
      return function() {
        removeMotionEvents(cacheElementRef.current);
      };
    }, []);
    return [patchMotionEvents, removeMotionEvents];
  };
  var useIsomorphicLayoutEffect = canUseDom() ? React.useLayoutEffect : React.useEffect;
  const useNextFrame = function() {
    var nextFrameRef = React__namespace.useRef(null);
    function cancelNextFrame() {
      wrapperRaf.cancel(nextFrameRef.current);
    }
    function nextFrame(callback) {
      var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
      cancelNextFrame();
      var nextFrameId = wrapperRaf(function() {
        if (delay <= 1) {
          callback({
            isCanceled: function isCanceled() {
              return nextFrameId !== nextFrameRef.current;
            }
          });
        } else {
          nextFrame(callback, delay - 1);
        }
      });
      nextFrameRef.current = nextFrameId;
    }
    React__namespace.useEffect(function() {
      return function() {
        cancelNextFrame();
      };
    }, []);
    return [nextFrame, cancelNextFrame];
  };
  var FULL_STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
  var SIMPLE_STEP_QUEUE = [STEP_PREPARE, STEP_PREPARED];
  var SkipStep = false;
  var DoStep = true;
  function isActive(step) {
    return step === STEP_ACTIVE || step === STEP_ACTIVATED;
  }
  const useStepQueue = function(status, prepareOnly, callback) {
    var _useState = useSafeState(STEP_NONE), _useState2 = _slicedToArray(_useState, 2), step = _useState2[0], setStep = _useState2[1];
    var _useNextFrame = useNextFrame(), _useNextFrame2 = _slicedToArray(_useNextFrame, 2), nextFrame = _useNextFrame2[0], cancelNextFrame = _useNextFrame2[1];
    function startQueue() {
      setStep(STEP_PREPARE, true);
    }
    var STEP_QUEUE = prepareOnly ? SIMPLE_STEP_QUEUE : FULL_STEP_QUEUE;
    useIsomorphicLayoutEffect(function() {
      if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
        var index2 = STEP_QUEUE.indexOf(step);
        var nextStep = STEP_QUEUE[index2 + 1];
        var result = callback(step);
        if (result === SkipStep) {
          setStep(nextStep, true);
        } else if (nextStep) {
          nextFrame(function(info) {
            function doNext() {
              if (info.isCanceled())
                return;
              setStep(nextStep, true);
            }
            if (result === true) {
              doNext();
            } else {
              Promise.resolve(result).then(doNext);
            }
          });
        }
      }
    }, [status, step]);
    React__namespace.useEffect(function() {
      return function() {
        cancelNextFrame();
      };
    }, []);
    return [startQueue, step];
  };
  function useStatus(supportMotion, visible, getElement, _ref) {
    var _ref$motionEnter = _ref.motionEnter, motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter, _ref$motionAppear = _ref.motionAppear, motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear, _ref$motionLeave = _ref.motionLeave, motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave, motionDeadline = _ref.motionDeadline, motionLeaveImmediately = _ref.motionLeaveImmediately, onAppearPrepare = _ref.onAppearPrepare, onEnterPrepare = _ref.onEnterPrepare, onLeavePrepare = _ref.onLeavePrepare, onAppearStart = _ref.onAppearStart, onEnterStart = _ref.onEnterStart, onLeaveStart = _ref.onLeaveStart, onAppearActive = _ref.onAppearActive, onEnterActive = _ref.onEnterActive, onLeaveActive = _ref.onLeaveActive, onAppearEnd = _ref.onAppearEnd, onEnterEnd = _ref.onEnterEnd, onLeaveEnd = _ref.onLeaveEnd, onVisibleChanged = _ref.onVisibleChanged;
    var _useState = useSafeState(), _useState2 = _slicedToArray(_useState, 2), asyncVisible = _useState2[0], setAsyncVisible = _useState2[1];
    var _useState3 = useSafeState(STATUS_NONE), _useState4 = _slicedToArray(_useState3, 2), status = _useState4[0], setStatus = _useState4[1];
    var _useState5 = useSafeState(null), _useState6 = _slicedToArray(_useState5, 2), style2 = _useState6[0], setStyle = _useState6[1];
    var mountedRef = React.useRef(false);
    var deadlineRef = React.useRef(null);
    function getDomElement() {
      return getElement();
    }
    var activeRef = React.useRef(false);
    function updateMotionEndStatus() {
      setStatus(STATUS_NONE, true);
      setStyle(null, true);
    }
    function onInternalMotionEnd(event) {
      var element = getDomElement();
      if (event && !event.deadline && event.target !== element) {
        return;
      }
      var currentActive = activeRef.current;
      var canEnd;
      if (status === STATUS_APPEAR && currentActive) {
        canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
      } else if (status === STATUS_ENTER && currentActive) {
        canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
      } else if (status === STATUS_LEAVE && currentActive) {
        canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
      }
      if (status !== STATUS_NONE && currentActive && canEnd !== false) {
        updateMotionEndStatus();
      }
    }
    var _useDomMotionEvents = useDomMotionEvents(onInternalMotionEnd), _useDomMotionEvents2 = _slicedToArray(_useDomMotionEvents, 1), patchMotionEvents = _useDomMotionEvents2[0];
    var getEventHandlers = function getEventHandlers2(targetStatus) {
      var _ref2, _ref3, _ref4;
      switch (targetStatus) {
        case STATUS_APPEAR:
          return _ref2 = {}, _defineProperty(_ref2, STEP_PREPARE, onAppearPrepare), _defineProperty(_ref2, STEP_START, onAppearStart), _defineProperty(_ref2, STEP_ACTIVE, onAppearActive), _ref2;
        case STATUS_ENTER:
          return _ref3 = {}, _defineProperty(_ref3, STEP_PREPARE, onEnterPrepare), _defineProperty(_ref3, STEP_START, onEnterStart), _defineProperty(_ref3, STEP_ACTIVE, onEnterActive), _ref3;
        case STATUS_LEAVE:
          return _ref4 = {}, _defineProperty(_ref4, STEP_PREPARE, onLeavePrepare), _defineProperty(_ref4, STEP_START, onLeaveStart), _defineProperty(_ref4, STEP_ACTIVE, onLeaveActive), _ref4;
        default:
          return {};
      }
    };
    var eventHandlers = React__namespace.useMemo(function() {
      return getEventHandlers(status);
    }, [status]);
    var _useStepQueue = useStepQueue(status, !supportMotion, function(newStep) {
      if (newStep === STEP_PREPARE) {
        var onPrepare = eventHandlers[STEP_PREPARE];
        if (!onPrepare) {
          return SkipStep;
        }
        return onPrepare(getDomElement());
      }
      if (step in eventHandlers) {
        var _eventHandlers$step;
        setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
      }
      if (step === STEP_ACTIVE) {
        patchMotionEvents(getDomElement());
        if (motionDeadline > 0) {
          clearTimeout(deadlineRef.current);
          deadlineRef.current = setTimeout(function() {
            onInternalMotionEnd({
              deadline: true
            });
          }, motionDeadline);
        }
      }
      if (step === STEP_PREPARED) {
        updateMotionEndStatus();
      }
      return DoStep;
    }), _useStepQueue2 = _slicedToArray(_useStepQueue, 2), startStep = _useStepQueue2[0], step = _useStepQueue2[1];
    var active = isActive(step);
    activeRef.current = active;
    useIsomorphicLayoutEffect(function() {
      setAsyncVisible(visible);
      var isMounted = mountedRef.current;
      mountedRef.current = true;
      var nextStatus;
      if (!isMounted && visible && motionAppear) {
        nextStatus = STATUS_APPEAR;
      }
      if (isMounted && visible && motionEnter) {
        nextStatus = STATUS_ENTER;
      }
      if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
        nextStatus = STATUS_LEAVE;
      }
      var nextEventHandlers = getEventHandlers(nextStatus);
      if (nextStatus && (supportMotion || nextEventHandlers[STEP_PREPARE])) {
        setStatus(nextStatus);
        startStep();
      } else {
        setStatus(STATUS_NONE);
      }
    }, [visible]);
    React.useEffect(function() {
      if (
        // Cancel appear
        status === STATUS_APPEAR && !motionAppear || // Cancel enter
        status === STATUS_ENTER && !motionEnter || // Cancel leave
        status === STATUS_LEAVE && !motionLeave
      ) {
        setStatus(STATUS_NONE);
      }
    }, [motionAppear, motionEnter, motionLeave]);
    React.useEffect(function() {
      return function() {
        mountedRef.current = false;
        clearTimeout(deadlineRef.current);
      };
    }, []);
    var firstMountChangeRef = React__namespace.useRef(false);
    React.useEffect(function() {
      if (asyncVisible) {
        firstMountChangeRef.current = true;
      }
      if (asyncVisible !== void 0 && status === STATUS_NONE) {
        if (firstMountChangeRef.current || asyncVisible) {
          onVisibleChanged === null || onVisibleChanged === void 0 ? void 0 : onVisibleChanged(asyncVisible);
        }
        firstMountChangeRef.current = true;
      }
    }, [asyncVisible, status]);
    var mergedStyle = style2;
    if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
      mergedStyle = _objectSpread2({
        transition: "none"
      }, mergedStyle);
    }
    return [status, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
  }
  function genCSSMotion(config) {
    var transitionSupport = config;
    if (_typeof(config) === "object") {
      transitionSupport = config.transitionSupport;
    }
    function isSupportTransition(props, contextMotion) {
      return !!(props.motionName && transitionSupport && contextMotion !== false);
    }
    var CSSMotion2 = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
      var _props$visible = props.visible, visible = _props$visible === void 0 ? true : _props$visible, _props$removeOnLeave = props.removeOnLeave, removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave, forceRender = props.forceRender, children = props.children, motionName = props.motionName, leavedClassName = props.leavedClassName, eventProps = props.eventProps;
      var _React$useContext = React__namespace.useContext(Context), contextMotion = _React$useContext.motion;
      var supportMotion = isSupportTransition(props, contextMotion);
      var nodeRef = React.useRef();
      var wrapperNodeRef = React.useRef();
      function getDomElement() {
        try {
          return nodeRef.current instanceof HTMLElement ? nodeRef.current : findDOMNode(wrapperNodeRef.current);
        } catch (e2) {
          return null;
        }
      }
      var _useStatus = useStatus(supportMotion, visible, getDomElement, props), _useStatus2 = _slicedToArray(_useStatus, 4), status = _useStatus2[0], statusStep = _useStatus2[1], statusStyle = _useStatus2[2], mergedVisible = _useStatus2[3];
      var renderedRef = React__namespace.useRef(mergedVisible);
      if (mergedVisible) {
        renderedRef.current = true;
      }
      var setNodeRef = React__namespace.useCallback(function(node2) {
        nodeRef.current = node2;
        fillRef(ref, node2);
      }, [ref]);
      var motionChildren;
      var mergedProps = _objectSpread2(_objectSpread2({}, eventProps), {}, {
        visible
      });
      if (!children) {
        motionChildren = null;
      } else if (status === STATUS_NONE) {
        if (mergedVisible) {
          motionChildren = children(_objectSpread2({}, mergedProps), setNodeRef);
        } else if (!removeOnLeave && renderedRef.current && leavedClassName) {
          motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
            className: leavedClassName
          }), setNodeRef);
        } else if (forceRender || !removeOnLeave && !leavedClassName) {
          motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
            style: {
              display: "none"
            }
          }), setNodeRef);
        } else {
          motionChildren = null;
        }
      } else {
        var _classNames;
        var statusSuffix;
        if (statusStep === STEP_PREPARE) {
          statusSuffix = "prepare";
        } else if (isActive(statusStep)) {
          statusSuffix = "active";
        } else if (statusStep === STEP_START) {
          statusSuffix = "start";
        }
        var motionCls = getTransitionName$1(motionName, "".concat(status, "-").concat(statusSuffix));
        motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
          className: classNames(getTransitionName$1(motionName, status), (_classNames = {}, _defineProperty(_classNames, motionCls, motionCls && statusSuffix), _defineProperty(_classNames, motionName, typeof motionName === "string"), _classNames)),
          style: statusStyle
        }), setNodeRef);
      }
      if (/* @__PURE__ */ React__namespace.isValidElement(motionChildren) && supportRef(motionChildren)) {
        var _ref = motionChildren, originNodeRef = _ref.ref;
        if (!originNodeRef) {
          motionChildren = /* @__PURE__ */ React__namespace.cloneElement(motionChildren, {
            ref: setNodeRef
          });
        }
      }
      return /* @__PURE__ */ React__namespace.createElement(DomWrapper, {
        ref: wrapperNodeRef
      }, motionChildren);
    });
    CSSMotion2.displayName = "CSSMotion";
    return CSSMotion2;
  }
  const CSSMotion = genCSSMotion(supportTransition);
  var STATUS_ADD = "add";
  var STATUS_KEEP = "keep";
  var STATUS_REMOVE = "remove";
  var STATUS_REMOVED = "removed";
  function wrapKeyToObject(key) {
    var keyObj;
    if (key && _typeof(key) === "object" && "key" in key) {
      keyObj = key;
    } else {
      keyObj = {
        key
      };
    }
    return _objectSpread2(_objectSpread2({}, keyObj), {}, {
      key: String(keyObj.key)
    });
  }
  function parseKeys() {
    var keys2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return keys2.map(wrapKeyToObject);
  }
  function diffKeys() {
    var prevKeys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var currentKeys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var list = [];
    var currentIndex = 0;
    var currentLen = currentKeys.length;
    var prevKeyObjects = parseKeys(prevKeys);
    var currentKeyObjects = parseKeys(currentKeys);
    prevKeyObjects.forEach(function(keyObj) {
      var hit = false;
      for (var i = currentIndex; i < currentLen; i += 1) {
        var currentKeyObj = currentKeyObjects[i];
        if (currentKeyObj.key === keyObj.key) {
          if (currentIndex < i) {
            list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function(obj) {
              return _objectSpread2(_objectSpread2({}, obj), {}, {
                status: STATUS_ADD
              });
            }));
            currentIndex = i;
          }
          list.push(_objectSpread2(_objectSpread2({}, currentKeyObj), {}, {
            status: STATUS_KEEP
          }));
          currentIndex += 1;
          hit = true;
          break;
        }
      }
      if (!hit) {
        list.push(_objectSpread2(_objectSpread2({}, keyObj), {}, {
          status: STATUS_REMOVE
        }));
      }
    });
    if (currentIndex < currentLen) {
      list = list.concat(currentKeyObjects.slice(currentIndex).map(function(obj) {
        return _objectSpread2(_objectSpread2({}, obj), {}, {
          status: STATUS_ADD
        });
      }));
    }
    var keys2 = {};
    list.forEach(function(_ref) {
      var key = _ref.key;
      keys2[key] = (keys2[key] || 0) + 1;
    });
    var duplicatedKeys = Object.keys(keys2).filter(function(key) {
      return keys2[key] > 1;
    });
    duplicatedKeys.forEach(function(matchKey) {
      list = list.filter(function(_ref2) {
        var key = _ref2.key, status = _ref2.status;
        return key !== matchKey || status !== STATUS_REMOVE;
      });
      list.forEach(function(node2) {
        if (node2.key === matchKey) {
          node2.status = STATUS_KEEP;
        }
      });
    });
    return list;
  }
  var _excluded$4 = ["component", "children", "onVisibleChanged", "onAllRemoved"], _excluded2 = ["status"];
  var MOTION_PROP_NAMES = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
  function genCSSMotionList(transitionSupport) {
    var CSSMotion$1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : CSSMotion;
    var CSSMotionList = /* @__PURE__ */ function(_React$Component) {
      _inherits(CSSMotionList2, _React$Component);
      var _super = _createSuper(CSSMotionList2);
      function CSSMotionList2() {
        var _this;
        _classCallCheck(this, CSSMotionList2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "state", {
          keyEntities: []
        });
        _defineProperty(_assertThisInitialized(_this), "removeKey", function(removeKey) {
          var keyEntities = _this.state.keyEntities;
          var nextKeyEntities = keyEntities.map(function(entity) {
            if (entity.key !== removeKey)
              return entity;
            return _objectSpread2(_objectSpread2({}, entity), {}, {
              status: STATUS_REMOVED
            });
          });
          _this.setState({
            keyEntities: nextKeyEntities
          });
          return nextKeyEntities.filter(function(_ref) {
            var status = _ref.status;
            return status !== STATUS_REMOVED;
          }).length;
        });
        return _this;
      }
      _createClass(CSSMotionList2, [{
        key: "render",
        value: function render2() {
          var _this2 = this;
          var keyEntities = this.state.keyEntities;
          var _this$props = this.props, component = _this$props.component, children = _this$props.children, _onVisibleChanged = _this$props.onVisibleChanged, onAllRemoved = _this$props.onAllRemoved, restProps = _objectWithoutProperties(_this$props, _excluded$4);
          var Component = component || React__namespace.Fragment;
          var motionProps = {};
          MOTION_PROP_NAMES.forEach(function(prop) {
            motionProps[prop] = restProps[prop];
            delete restProps[prop];
          });
          delete restProps.keys;
          return /* @__PURE__ */ React__namespace.createElement(Component, restProps, keyEntities.map(function(_ref2, index2) {
            var status = _ref2.status, eventProps = _objectWithoutProperties(_ref2, _excluded2);
            var visible = status === STATUS_ADD || status === STATUS_KEEP;
            return /* @__PURE__ */ React__namespace.createElement(CSSMotion$1, _extends({}, motionProps, {
              key: eventProps.key,
              visible,
              eventProps,
              onVisibleChanged: function onVisibleChanged(changedVisible) {
                _onVisibleChanged === null || _onVisibleChanged === void 0 ? void 0 : _onVisibleChanged(changedVisible, {
                  key: eventProps.key
                });
                if (!changedVisible) {
                  var restKeysCount = _this2.removeKey(eventProps.key);
                  if (restKeysCount === 0 && onAllRemoved) {
                    onAllRemoved();
                  }
                }
              }
            }), function(props, ref) {
              return children(_objectSpread2(_objectSpread2({}, props), {}, {
                index: index2
              }), ref);
            });
          }));
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(_ref3, _ref4) {
          var keys2 = _ref3.keys;
          var keyEntities = _ref4.keyEntities;
          var parsedKeyObjects = parseKeys(keys2);
          var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
          return {
            keyEntities: mixedKeyEntities.filter(function(entity) {
              var prevEntity = keyEntities.find(function(_ref5) {
                var key = _ref5.key;
                return entity.key === key;
              });
              if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) {
                return false;
              }
              return true;
            })
          };
        }
      }]);
      return CSSMotionList2;
    }(React__namespace.Component);
    _defineProperty(CSSMotionList, "defaultProps", {
      component: "div"
    });
    return CSSMotionList;
  }
  genCSSMotionList(supportTransition);
  function MotionWrapper(props) {
    const {
      children
    } = props;
    const [, token2] = useToken();
    const {
      motion
    } = token2;
    const needWrapMotionProviderRef = React__namespace.useRef(false);
    needWrapMotionProviderRef.current = needWrapMotionProviderRef.current || motion === false;
    if (needWrapMotionProviderRef.current) {
      return /* @__PURE__ */ React__namespace.createElement(MotionProvider, {
        motion
      }, children);
    }
    return children;
  }
  const PropWarning = () => null;
  var __rest$a = function(s, e2) {
    var t2 = {};
    for (var p2 in s)
      if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
          t2[p2[i]] = s[p2[i]];
      }
    return t2;
  };
  const PASSED_PROPS = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
  const defaultPrefixCls = "ant";
  let globalPrefixCls;
  function getGlobalPrefixCls() {
    return globalPrefixCls || defaultPrefixCls;
  }
  function isLegacyTheme(theme) {
    return Object.keys(theme).some((key) => key.endsWith("Color"));
  }
  const setGlobalConfig = (props) => {
    const {
      prefixCls,
      iconPrefixCls,
      theme,
      holderRender
    } = props;
    if (prefixCls !== void 0) {
      globalPrefixCls = prefixCls;
    }
    if (theme) {
      if (isLegacyTheme(theme)) {
        registerTheme(getGlobalPrefixCls(), theme);
      }
    }
  };
  const ProviderChildren = (props) => {
    const {
      children,
      csp: customCsp,
      autoInsertSpaceInButton,
      alert,
      anchor,
      form,
      locale: locale2,
      componentSize,
      direction,
      space,
      virtual,
      dropdownMatchSelectWidth,
      popupMatchSelectWidth,
      popupOverflow,
      legacyLocale,
      parentContext,
      iconPrefixCls: customIconPrefixCls,
      theme,
      componentDisabled,
      segmented,
      statistic: statistic2,
      spin,
      calendar,
      carousel,
      cascader,
      collapse,
      typography,
      checkbox,
      descriptions,
      divider,
      drawer,
      skeleton,
      steps,
      image,
      layout,
      list,
      mentions,
      modal,
      progress,
      result,
      slider,
      breadcrumb,
      menu,
      pagination,
      input,
      textArea,
      empty,
      badge,
      radio,
      rate,
      switch: SWITCH,
      transfer,
      avatar,
      message,
      tag,
      table,
      card,
      tabs,
      timeline,
      timePicker,
      upload,
      notification,
      tree,
      colorPicker,
      datePicker,
      rangePicker,
      flex,
      wave,
      dropdown,
      warning: warningConfig,
      tour,
      floatButtonGroup
    } = props;
    const getPrefixCls = React__namespace.useCallback((suffixCls, customizePrefixCls) => {
      const {
        prefixCls
      } = props;
      if (customizePrefixCls) {
        return customizePrefixCls;
      }
      const mergedPrefixCls = prefixCls || parentContext.getPrefixCls("");
      return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
    }, [parentContext.getPrefixCls, props.prefixCls]);
    const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || defaultIconPrefixCls;
    const csp = customCsp || parentContext.csp;
    useResetIconStyle(iconPrefixCls, csp);
    const mergedTheme = useTheme(theme, parentContext.theme, {
      prefixCls: getPrefixCls("")
    });
    const baseConfig = {
      csp,
      autoInsertSpaceInButton,
      alert,
      anchor,
      locale: locale2 || legacyLocale,
      direction,
      space,
      virtual,
      popupMatchSelectWidth: popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth,
      popupOverflow,
      getPrefixCls,
      iconPrefixCls,
      theme: mergedTheme,
      segmented,
      statistic: statistic2,
      spin,
      calendar,
      carousel,
      cascader,
      collapse,
      typography,
      checkbox,
      descriptions,
      divider,
      drawer,
      skeleton,
      steps,
      image,
      input,
      textArea,
      layout,
      list,
      mentions,
      modal,
      progress,
      result,
      slider,
      breadcrumb,
      menu,
      pagination,
      empty,
      badge,
      radio,
      rate,
      switch: SWITCH,
      transfer,
      avatar,
      message,
      tag,
      table,
      card,
      tabs,
      timeline,
      timePicker,
      upload,
      notification,
      tree,
      colorPicker,
      datePicker,
      rangePicker,
      flex,
      wave,
      dropdown,
      warning: warningConfig,
      tour,
      floatButtonGroup
    };
    const config = Object.assign({}, parentContext);
    Object.keys(baseConfig).forEach((key) => {
      if (baseConfig[key] !== void 0) {
        config[key] = baseConfig[key];
      }
    });
    PASSED_PROPS.forEach((propName) => {
      const propValue = props[propName];
      if (propValue) {
        config[propName] = propValue;
      }
    });
    const memoedConfig = useMemo(() => config, config, (prevConfig, currentConfig) => {
      const prevKeys = Object.keys(prevConfig);
      const currentKeys = Object.keys(currentConfig);
      return prevKeys.length !== currentKeys.length || prevKeys.some((key) => prevConfig[key] !== currentConfig[key]);
    });
    const memoIconContextValue = React__namespace.useMemo(() => ({
      prefixCls: iconPrefixCls,
      csp
    }), [iconPrefixCls, csp]);
    let childNode = /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(PropWarning, {
      dropdownMatchSelectWidth
    }), children);
    const validateMessages = React__namespace.useMemo(() => {
      var _a2, _b2, _c, _d;
      return merge$1(((_a2 = localeValues.Form) === null || _a2 === void 0 ? void 0 : _a2.defaultValidateMessages) || {}, ((_c = (_b2 = memoedConfig.locale) === null || _b2 === void 0 ? void 0 : _b2.Form) === null || _c === void 0 ? void 0 : _c.defaultValidateMessages) || {}, ((_d = memoedConfig.form) === null || _d === void 0 ? void 0 : _d.validateMessages) || {}, (form === null || form === void 0 ? void 0 : form.validateMessages) || {});
    }, [memoedConfig, form === null || form === void 0 ? void 0 : form.validateMessages]);
    if (Object.keys(validateMessages).length > 0) {
      childNode = /* @__PURE__ */ React__namespace.createElement(ValidateMessagesContext.Provider, {
        value: validateMessages
      }, childNode);
    }
    if (locale2) {
      childNode = /* @__PURE__ */ React__namespace.createElement(LocaleProvider, {
        locale: locale2,
        _ANT_MARK__: ANT_MARK
      }, childNode);
    }
    if (iconPrefixCls || csp) {
      childNode = /* @__PURE__ */ React__namespace.createElement(IconContext.Provider, {
        value: memoIconContextValue
      }, childNode);
    }
    if (componentSize) {
      childNode = /* @__PURE__ */ React__namespace.createElement(SizeContextProvider, {
        size: componentSize
      }, childNode);
    }
    childNode = /* @__PURE__ */ React__namespace.createElement(MotionWrapper, null, childNode);
    const memoTheme = React__namespace.useMemo(() => {
      const _a2 = mergedTheme || {}, {
        algorithm,
        token: token2,
        components,
        cssVar
      } = _a2, rest = __rest$a(_a2, ["algorithm", "token", "components", "cssVar"]);
      const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? createTheme(algorithm) : defaultTheme;
      const parsedComponents = {};
      Object.entries(components || {}).forEach((_ref) => {
        let [componentName, componentToken] = _ref;
        const parsedToken = Object.assign({}, componentToken);
        if ("algorithm" in parsedToken) {
          if (parsedToken.algorithm === true) {
            parsedToken.theme = themeObj;
          } else if (Array.isArray(parsedToken.algorithm) || typeof parsedToken.algorithm === "function") {
            parsedToken.theme = createTheme(parsedToken.algorithm);
          }
          delete parsedToken.algorithm;
        }
        parsedComponents[componentName] = parsedToken;
      });
      const mergedToken = Object.assign(Object.assign({}, seedToken), token2);
      return Object.assign(Object.assign({}, rest), {
        theme: themeObj,
        token: mergedToken,
        components: parsedComponents,
        override: Object.assign({
          override: mergedToken
        }, parsedComponents),
        cssVar
      });
    }, [mergedTheme]);
    if (theme) {
      childNode = /* @__PURE__ */ React__namespace.createElement(DesignTokenContext.Provider, {
        value: memoTheme
      }, childNode);
    }
    if (memoedConfig.warning) {
      childNode = /* @__PURE__ */ React__namespace.createElement(WarningContext.Provider, {
        value: memoedConfig.warning
      }, childNode);
    }
    if (componentDisabled !== void 0) {
      childNode = /* @__PURE__ */ React__namespace.createElement(DisabledContextProvider, {
        disabled: componentDisabled
      }, childNode);
    }
    return /* @__PURE__ */ React__namespace.createElement(ConfigContext.Provider, {
      value: memoedConfig
    }, childNode);
  };
  const ConfigProvider = (props) => {
    const context = React__namespace.useContext(ConfigContext);
    const antLocale = React__namespace.useContext(LocaleContext);
    return /* @__PURE__ */ React__namespace.createElement(ProviderChildren, Object.assign({
      parentContext: context,
      legacyLocale: antLocale
    }, props));
  };
  ConfigProvider.ConfigContext = ConfigContext;
  ConfigProvider.SizeContext = SizeContext;
  ConfigProvider.config = setGlobalConfig;
  ConfigProvider.useConfig = useConfig;
  Object.defineProperty(ConfigProvider, "SizeContext", {
    get: () => {
      return SizeContext;
    }
  });
  var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
  var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
  var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
  var ariaPrefix = "aria-";
  var dataPrefix = "data-";
  function match(key, prefix) {
    return key.indexOf(prefix) === 0;
  }
  function pickAttrs(props) {
    var ariaOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var mergedConfig;
    if (ariaOnly === false) {
      mergedConfig = {
        aria: true,
        data: true,
        attr: true
      };
    } else if (ariaOnly === true) {
      mergedConfig = {
        aria: true
      };
    } else {
      mergedConfig = _objectSpread2({}, ariaOnly);
    }
    var attrs = {};
    Object.keys(props).forEach(function(key) {
      if (
        // Aria
        mergedConfig.aria && (key === "role" || match(key, ariaPrefix)) || // Data
        mergedConfig.data && match(key, dataPrefix) || // Attr
        mergedConfig.attr && propList.includes(key)
      ) {
        attrs[key] = props[key];
      }
    });
    return attrs;
  }
  function isFragment(child) {
    return child && /* @__PURE__ */ React.isValidElement(child) && child.type === React.Fragment;
  }
  const replaceElement = (element, replacement, props) => {
    if (!/* @__PURE__ */ React.isValidElement(element)) {
      return replacement;
    }
    return /* @__PURE__ */ React.cloneElement(element, typeof props === "function" ? props(element.props || {}) : props);
  };
  function cloneElement(element, props) {
    return replaceElement(element, element, props);
  }
  const zIndexContext = /* @__PURE__ */ React.createContext(void 0);
  const CONTAINER_OFFSET = 100;
  const CONTAINER_OFFSET_MAX_COUNT = 10;
  const CONTAINER_MAX_OFFSET = CONTAINER_OFFSET * CONTAINER_OFFSET_MAX_COUNT;
  const containerBaseZIndexOffset = {
    Modal: CONTAINER_OFFSET,
    Drawer: CONTAINER_OFFSET,
    Popover: CONTAINER_OFFSET,
    Popconfirm: CONTAINER_OFFSET,
    Tooltip: CONTAINER_OFFSET,
    Tour: CONTAINER_OFFSET
  };
  const consumerBaseZIndexOffset = {
    SelectLike: 50,
    Dropdown: 50,
    DatePicker: 50,
    Menu: 50,
    ImagePreview: 1
  };
  function isContainerType(type) {
    return type in containerBaseZIndexOffset;
  }
  function useZIndex(componentType, customZIndex) {
    const [, token2] = useToken();
    const parentZIndex = React.useContext(zIndexContext);
    const isContainer = isContainerType(componentType);
    if (customZIndex !== void 0) {
      return [customZIndex, customZIndex];
    }
    let zIndex = parentZIndex !== null && parentZIndex !== void 0 ? parentZIndex : 0;
    if (isContainer) {
      zIndex += // Use preset token zIndex by default but not stack when has parent container
      (parentZIndex ? 0 : token2.zIndexPopupBase) + // Container offset
      containerBaseZIndexOffset[componentType];
      zIndex = Math.min(zIndex, token2.zIndexPopupBase + CONTAINER_MAX_OFFSET);
    } else {
      zIndex += consumerBaseZIndexOffset[componentType];
    }
    return [parentZIndex === void 0 ? customZIndex : zIndex, zIndex];
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function _regeneratorRuntime2() {
      return e2;
    };
    var t2, e2 = {}, r = Object.prototype, n2 = r.hasOwnProperty, o = Object.defineProperty || function(t3, e3, r2) {
      t3[e3] = r2.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c2 = i.asyncIterator || "@@asyncIterator", u2 = i.toStringTag || "@@toStringTag";
    function define(t3, e3, r2) {
      return Object.defineProperty(t3, e3, {
        value: r2,
        enumerable: true,
        configurable: true,
        writable: true
      }), t3[e3];
    }
    try {
      define({}, "");
    } catch (t3) {
      define = function define2(t4, e3, r2) {
        return t4[e3] = r2;
      };
    }
    function wrap(t3, e3, r2, n3) {
      var i2 = e3 && e3.prototype instanceof Generator ? e3 : Generator, a2 = Object.create(i2.prototype), c3 = new Context2(n3 || []);
      return o(a2, "_invoke", {
        value: makeInvokeMethod(t3, r2, c3)
      }), a2;
    }
    function tryCatch(t3, e3, r2) {
      try {
        return {
          type: "normal",
          arg: t3.call(e3, r2)
        };
      } catch (t4) {
        return {
          type: "throw",
          arg: t4
        };
      }
    }
    e2.wrap = wrap;
    var h2 = "suspendedStart", l2 = "suspendedYield", f2 = "executing", s = "completed", y = {};
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    var p2 = {};
    define(p2, a, function() {
      return this;
    });
    var d2 = Object.getPrototypeOf, v2 = d2 && d2(d2(values([])));
    v2 && v2 !== r && n2.call(v2, a) && (p2 = v2);
    var g2 = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p2);
    function defineIteratorMethods(t3) {
      ["next", "throw", "return"].forEach(function(e3) {
        define(t3, e3, function(t4) {
          return this._invoke(e3, t4);
        });
      });
    }
    function AsyncIterator(t3, e3) {
      function invoke(r3, o2, i2, a2) {
        var c3 = tryCatch(t3[r3], t3, o2);
        if ("throw" !== c3.type) {
          var u3 = c3.arg, h3 = u3.value;
          return h3 && "object" == _typeof(h3) && n2.call(h3, "__await") ? e3.resolve(h3.__await).then(function(t4) {
            invoke("next", t4, i2, a2);
          }, function(t4) {
            invoke("throw", t4, i2, a2);
          }) : e3.resolve(h3).then(function(t4) {
            u3.value = t4, i2(u3);
          }, function(t4) {
            return invoke("throw", t4, i2, a2);
          });
        }
        a2(c3.arg);
      }
      var r2;
      o(this, "_invoke", {
        value: function value(t4, n3) {
          function callInvokeWithMethodAndArg() {
            return new e3(function(e4, r3) {
              invoke(t4, n3, e4, r3);
            });
          }
          return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e3, r2, n3) {
      var o2 = h2;
      return function(i2, a2) {
        if (o2 === f2)
          throw Error("Generator is already running");
        if (o2 === s) {
          if ("throw" === i2)
            throw a2;
          return {
            value: t2,
            done: true
          };
        }
        for (n3.method = i2, n3.arg = a2; ; ) {
          var c3 = n3.delegate;
          if (c3) {
            var u3 = maybeInvokeDelegate(c3, n3);
            if (u3) {
              if (u3 === y)
                continue;
              return u3;
            }
          }
          if ("next" === n3.method)
            n3.sent = n3._sent = n3.arg;
          else if ("throw" === n3.method) {
            if (o2 === h2)
              throw o2 = s, n3.arg;
            n3.dispatchException(n3.arg);
          } else
            "return" === n3.method && n3.abrupt("return", n3.arg);
          o2 = f2;
          var p3 = tryCatch(e3, r2, n3);
          if ("normal" === p3.type) {
            if (o2 = n3.done ? s : l2, p3.arg === y)
              continue;
            return {
              value: p3.arg,
              done: n3.done
            };
          }
          "throw" === p3.type && (o2 = s, n3.method = "throw", n3.arg = p3.arg);
        }
      };
    }
    function maybeInvokeDelegate(e3, r2) {
      var n3 = r2.method, o2 = e3.iterator[n3];
      if (o2 === t2)
        return r2.delegate = null, "throw" === n3 && e3.iterator["return"] && (r2.method = "return", r2.arg = t2, maybeInvokeDelegate(e3, r2), "throw" === r2.method) || "return" !== n3 && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n3 + "' method")), y;
      var i2 = tryCatch(o2, e3.iterator, r2.arg);
      if ("throw" === i2.type)
        return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
      var a2 = i2.arg;
      return a2 ? a2.done ? (r2[e3.resultName] = a2.value, r2.next = e3.nextLoc, "return" !== r2.method && (r2.method = "next", r2.arg = t2), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
    }
    function pushTryEntry(t3) {
      var e3 = {
        tryLoc: t3[0]
      };
      1 in t3 && (e3.catchLoc = t3[1]), 2 in t3 && (e3.finallyLoc = t3[2], e3.afterLoc = t3[3]), this.tryEntries.push(e3);
    }
    function resetTryEntry(t3) {
      var e3 = t3.completion || {};
      e3.type = "normal", delete e3.arg, t3.completion = e3;
    }
    function Context2(t3) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t3.forEach(pushTryEntry, this), this.reset(true);
    }
    function values(e3) {
      if (e3 || "" === e3) {
        var r2 = e3[a];
        if (r2)
          return r2.call(e3);
        if ("function" == typeof e3.next)
          return e3;
        if (!isNaN(e3.length)) {
          var o2 = -1, i2 = function next2() {
            for (; ++o2 < e3.length; )
              if (n2.call(e3, o2))
                return next2.value = e3[o2], next2.done = false, next2;
            return next2.value = t2, next2.done = true, next2;
          };
          return i2.next = i2;
        }
      }
      throw new TypeError(_typeof(e3) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g2, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: true
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: true
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u2, "GeneratorFunction"), e2.isGeneratorFunction = function(t3) {
      var e3 = "function" == typeof t3 && t3.constructor;
      return !!e3 && (e3 === GeneratorFunction || "GeneratorFunction" === (e3.displayName || e3.name));
    }, e2.mark = function(t3) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t3, GeneratorFunctionPrototype) : (t3.__proto__ = GeneratorFunctionPrototype, define(t3, u2, "GeneratorFunction")), t3.prototype = Object.create(g2), t3;
    }, e2.awrap = function(t3) {
      return {
        __await: t3
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c2, function() {
      return this;
    }), e2.AsyncIterator = AsyncIterator, e2.async = function(t3, r2, n3, o2, i2) {
      void 0 === i2 && (i2 = Promise);
      var a2 = new AsyncIterator(wrap(t3, r2, n3, o2), i2);
      return e2.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t4) {
        return t4.done ? t4.value : a2.next();
      });
    }, defineIteratorMethods(g2), define(g2, u2, "Generator"), define(g2, a, function() {
      return this;
    }), define(g2, "toString", function() {
      return "[object Generator]";
    }), e2.keys = function(t3) {
      var e3 = Object(t3), r2 = [];
      for (var n3 in e3)
        r2.push(n3);
      return r2.reverse(), function next2() {
        for (; r2.length; ) {
          var t4 = r2.pop();
          if (t4 in e3)
            return next2.value = t4, next2.done = false, next2;
        }
        return next2.done = true, next2;
      };
    }, e2.values = values, Context2.prototype = {
      constructor: Context2,
      reset: function reset(e3) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t2, this.done = false, this.delegate = null, this.method = "next", this.arg = t2, this.tryEntries.forEach(resetTryEntry), !e3)
          for (var r2 in this)
            "t" === r2.charAt(0) && n2.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t2);
      },
      stop: function stop() {
        this.done = true;
        var t3 = this.tryEntries[0].completion;
        if ("throw" === t3.type)
          throw t3.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e3) {
        if (this.done)
          throw e3;
        var r2 = this;
        function handle(n3, o3) {
          return a2.type = "throw", a2.arg = e3, r2.next = n3, o3 && (r2.method = "next", r2.arg = t2), !!o3;
        }
        for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
          var i2 = this.tryEntries[o2], a2 = i2.completion;
          if ("root" === i2.tryLoc)
            return handle("end");
          if (i2.tryLoc <= this.prev) {
            var c3 = n2.call(i2, "catchLoc"), u3 = n2.call(i2, "finallyLoc");
            if (c3 && u3) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, true);
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            } else if (c3) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, true);
            } else {
              if (!u3)
                throw Error("try statement without catch or finally");
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t3, e3) {
        for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
          var o2 = this.tryEntries[r2];
          if (o2.tryLoc <= this.prev && n2.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
            var i2 = o2;
            break;
          }
        }
        i2 && ("break" === t3 || "continue" === t3) && i2.tryLoc <= e3 && e3 <= i2.finallyLoc && (i2 = null);
        var a2 = i2 ? i2.completion : {};
        return a2.type = t3, a2.arg = e3, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
      },
      complete: function complete(t3, e3) {
        if ("throw" === t3.type)
          throw t3.arg;
        return "break" === t3.type || "continue" === t3.type ? this.next = t3.arg : "return" === t3.type ? (this.rval = this.arg = t3.arg, this.method = "return", this.next = "end") : "normal" === t3.type && e3 && (this.next = e3), y;
      },
      finish: function finish(t3) {
        for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
          var r2 = this.tryEntries[e3];
          if (r2.finallyLoc === t3)
            return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
        }
      },
      "catch": function _catch(t3) {
        for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
          var r2 = this.tryEntries[e3];
          if (r2.tryLoc === t3) {
            var n3 = r2.completion;
            if ("throw" === n3.type) {
              var o2 = n3.arg;
              resetTryEntry(r2);
            }
            return o2;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e3, r2, n3) {
        return this.delegate = {
          iterator: values(e3),
          resultName: r2,
          nextLoc: n3
        }, "next" === this.method && (this.arg = t2), y;
      }
    }, e2;
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err2) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err2);
        }
        _next(void 0);
      });
    };
  }
  var fullClone = _objectSpread2({}, ReactDOM__default__namespace);
  var version = fullClone.version, reactRender = fullClone.render, unmountComponentAtNode = fullClone.unmountComponentAtNode;
  var createRoot;
  try {
    var mainVersion = Number((version || "").split(".")[0]);
    if (mainVersion >= 18) {
      createRoot = fullClone.createRoot;
    }
  } catch (e2) {
  }
  function toggleWarning(skip) {
    var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && _typeof(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === "object") {
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
    }
  }
  var MARK = "__rc_react_root__";
  function modernRender(node2, container) {
    toggleWarning(true);
    var root = container[MARK] || createRoot(container);
    toggleWarning(false);
    root.render(node2);
    container[MARK] = root;
  }
  function legacyRender(node2, container) {
    reactRender(node2, container);
  }
  function render(node2, container) {
    if (createRoot) {
      modernRender(node2, container);
      return;
    }
    legacyRender(node2, container);
  }
  function modernUnmount(_x) {
    return _modernUnmount.apply(this, arguments);
  }
  function _modernUnmount() {
    _modernUnmount = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(container) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1)
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", Promise.resolve().then(function() {
                var _container$MARK;
                (_container$MARK = container[MARK]) === null || _container$MARK === void 0 || _container$MARK.unmount();
                delete container[MARK];
              }));
            case 1:
            case "end":
              return _context.stop();
          }
      }, _callee);
    }));
    return _modernUnmount.apply(this, arguments);
  }
  function legacyUnmount(container) {
    unmountComponentAtNode(container);
  }
  function unmount(_x2) {
    return _unmount.apply(this, arguments);
  }
  function _unmount() {
    _unmount = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee2(container) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1)
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(createRoot !== void 0)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return", modernUnmount(container));
            case 2:
              legacyUnmount(container);
            case 3:
            case "end":
              return _context2.stop();
          }
      }, _callee2);
    }));
    return _unmount.apply(this, arguments);
  }
  const getTransitionName = (rootPrefixCls, motion, transitionName) => {
    if (transitionName !== void 0) {
      return transitionName;
    }
    return `${rootPrefixCls}-${motion}`;
  };
  const isVisible = function(element) {
    if (!element) {
      return false;
    }
    if (element instanceof Element) {
      if (element.offsetParent) {
        return true;
      }
      if (element.getBBox) {
        var _getBBox = element.getBBox(), width = _getBBox.width, height = _getBBox.height;
        if (width || height) {
          return true;
        }
      }
      if (element.getBoundingClientRect) {
        var _element$getBoundingC = element.getBoundingClientRect(), _width = _element$getBoundingC.width, _height = _element$getBoundingC.height;
        if (_width || _height) {
          return true;
        }
      }
    }
    return false;
  };
  const genWaveStyle = (token2) => {
    const {
      componentCls,
      colorPrimary
    } = token2;
    return {
      [componentCls]: {
        position: "absolute",
        background: "transparent",
        pointerEvents: "none",
        boxSizing: "border-box",
        color: `var(--wave-color, ${colorPrimary})`,
        boxShadow: `0 0 0 0 currentcolor`,
        opacity: 0.2,
        // =================== Motion ===================
        "&.wave-motion-appear": {
          transition: [`box-shadow 0.4s ${token2.motionEaseOutCirc}`, `opacity 2s ${token2.motionEaseOutCirc}`].join(","),
          "&-active": {
            boxShadow: `0 0 0 6px currentcolor`,
            opacity: 0
          },
          "&.wave-quick": {
            transition: [`box-shadow ${token2.motionDurationSlow} ${token2.motionEaseInOut}`, `opacity ${token2.motionDurationSlow} ${token2.motionEaseInOut}`].join(",")
          }
        }
      }
    };
  };
  const useStyle$7 = genComponentStyleHook("Wave", (token2) => [genWaveStyle(token2)]);
  const TARGET_CLS = "ant-wave-target";
  function isNotGrey(color) {
    const match2 = (color || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
    if (match2 && match2[1] && match2[2] && match2[3]) {
      return !(match2[1] === match2[2] && match2[2] === match2[3]);
    }
    return true;
  }
  function isValidWaveColor(color) {
    return color && color !== "#fff" && color !== "#ffffff" && color !== "rgb(255, 255, 255)" && color !== "rgba(255, 255, 255, 1)" && isNotGrey(color) && !/rgba\((?:\d*, ){3}0\)/.test(color) && // any transparent rgba color
    color !== "transparent";
  }
  function getTargetWaveColor(node2) {
    const {
      borderTopColor,
      borderColor,
      backgroundColor
    } = getComputedStyle(node2);
    if (isValidWaveColor(borderTopColor)) {
      return borderTopColor;
    }
    if (isValidWaveColor(borderColor)) {
      return borderColor;
    }
    if (isValidWaveColor(backgroundColor)) {
      return backgroundColor;
    }
    return null;
  }
  function validateNum(value) {
    return Number.isNaN(value) ? 0 : value;
  }
  const WaveEffect = (props) => {
    const {
      className,
      target,
      component
    } = props;
    const divRef = React__namespace.useRef(null);
    const [color, setWaveColor] = React__namespace.useState(null);
    const [borderRadius, setBorderRadius] = React__namespace.useState([]);
    const [left, setLeft] = React__namespace.useState(0);
    const [top, setTop] = React__namespace.useState(0);
    const [width, setWidth] = React__namespace.useState(0);
    const [height, setHeight] = React__namespace.useState(0);
    const [enabled, setEnabled] = React__namespace.useState(false);
    const waveStyle = {
      left,
      top,
      width,
      height,
      borderRadius: borderRadius.map((radius) => `${radius}px`).join(" ")
    };
    if (color) {
      waveStyle["--wave-color"] = color;
    }
    function syncPos() {
      const nodeStyle = getComputedStyle(target);
      setWaveColor(getTargetWaveColor(target));
      const isStatic = nodeStyle.position === "static";
      const {
        borderLeftWidth,
        borderTopWidth
      } = nodeStyle;
      setLeft(isStatic ? target.offsetLeft : validateNum(-parseFloat(borderLeftWidth)));
      setTop(isStatic ? target.offsetTop : validateNum(-parseFloat(borderTopWidth)));
      setWidth(target.offsetWidth);
      setHeight(target.offsetHeight);
      const {
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius
      } = nodeStyle;
      setBorderRadius([borderTopLeftRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius].map((radius) => validateNum(parseFloat(radius))));
    }
    React__namespace.useEffect(() => {
      if (target) {
        const id = wrapperRaf(() => {
          syncPos();
          setEnabled(true);
        });
        let resizeObserver2;
        if (typeof ResizeObserver !== "undefined") {
          resizeObserver2 = new ResizeObserver(syncPos);
          resizeObserver2.observe(target);
        }
        return () => {
          wrapperRaf.cancel(id);
          resizeObserver2 === null || resizeObserver2 === void 0 ? void 0 : resizeObserver2.disconnect();
        };
      }
    }, []);
    if (!enabled) {
      return null;
    }
    const isSmallComponent = (component === "Checkbox" || component === "Radio") && (target === null || target === void 0 ? void 0 : target.classList.contains(TARGET_CLS));
    return /* @__PURE__ */ React__namespace.createElement(CSSMotion, {
      visible: true,
      motionAppear: true,
      motionName: "wave-motion",
      motionDeadline: 5e3,
      onAppearEnd: (_, event) => {
        var _a2;
        if (event.deadline || event.propertyName === "opacity") {
          const holder = (_a2 = divRef.current) === null || _a2 === void 0 ? void 0 : _a2.parentElement;
          unmount(holder).then(() => {
            holder === null || holder === void 0 ? void 0 : holder.remove();
          });
        }
        return false;
      }
    }, (_ref) => {
      let {
        className: motionClassName
      } = _ref;
      return /* @__PURE__ */ React__namespace.createElement("div", {
        ref: divRef,
        className: classNames(className, {
          "wave-quick": isSmallComponent
        }, motionClassName),
        style: waveStyle
      });
    });
  };
  const showWaveEffect = (target, info) => {
    var _a2;
    const {
      component
    } = info;
    if (component === "Checkbox" && !((_a2 = target.querySelector("input")) === null || _a2 === void 0 ? void 0 : _a2.checked)) {
      return;
    }
    const holder = document.createElement("div");
    holder.style.position = "absolute";
    holder.style.left = "0px";
    holder.style.top = "0px";
    target === null || target === void 0 ? void 0 : target.insertBefore(holder, target === null || target === void 0 ? void 0 : target.firstChild);
    render(/* @__PURE__ */ React__namespace.createElement(WaveEffect, Object.assign({}, info, {
      target
    })), holder);
  };
  const useWave = (nodeRef, className, component) => {
    const {
      wave
    } = React__namespace.useContext(ConfigContext);
    const [, token2, hashId] = useToken();
    const showWave = useEvent((event) => {
      const node2 = nodeRef.current;
      if ((wave === null || wave === void 0 ? void 0 : wave.disabled) || !node2) {
        return;
      }
      const targetNode = node2.querySelector(`.${TARGET_CLS}`) || node2;
      const {
        showEffect
      } = wave || {};
      (showEffect || showWaveEffect)(targetNode, {
        className,
        token: token2,
        component,
        event,
        hashId
      });
    });
    const rafId = React__namespace.useRef();
    const showDebounceWave = (event) => {
      wrapperRaf.cancel(rafId.current);
      rafId.current = wrapperRaf(() => {
        showWave(event);
      });
    };
    return showDebounceWave;
  };
  const Wave = (props) => {
    const {
      children,
      disabled,
      component
    } = props;
    const {
      getPrefixCls
    } = React.useContext(ConfigContext);
    const containerRef = React.useRef(null);
    const prefixCls = getPrefixCls("wave");
    const [, hashId] = useStyle$7(prefixCls);
    const showWave = useWave(containerRef, classNames(prefixCls, hashId), component);
    React.useEffect(() => {
      const node2 = containerRef.current;
      if (!node2 || node2.nodeType !== 1 || disabled) {
        return;
      }
      const onClick = (e2) => {
        if (!isVisible(e2.target) || // No need wave
        !node2.getAttribute || node2.getAttribute("disabled") || node2.disabled || node2.className.includes("disabled") || node2.className.includes("-leave")) {
          return;
        }
        showWave(e2);
      };
      node2.addEventListener("click", onClick, true);
      return () => {
        node2.removeEventListener("click", onClick, true);
      };
    }, [disabled]);
    if (!/* @__PURE__ */ React.isValidElement(children)) {
      return children !== null && children !== void 0 ? children : null;
    }
    const ref = supportRef(children) ? composeRef(children.ref, containerRef) : containerRef;
    return cloneElement(children, {
      ref
    });
  };
  const useSize = (customSize) => {
    const size = React.useContext(SizeContext);
    const mergedSize = React.useMemo(() => {
      if (!customSize) {
        return size;
      }
      if (typeof customSize === "string") {
        return customSize !== null && customSize !== void 0 ? customSize : size;
      }
      if (customSize instanceof Function) {
        return customSize(size);
      }
      return size;
    }, [customSize, size]);
    return mergedSize;
  };
  const SpaceCompactItemContext = /* @__PURE__ */ React__namespace.createContext(null);
  const useCompactItemContext = (prefixCls, direction) => {
    const compactItemContext = React__namespace.useContext(SpaceCompactItemContext);
    const compactItemClassnames = React__namespace.useMemo(() => {
      if (!compactItemContext) {
        return "";
      }
      const {
        compactDirection,
        isFirstItem,
        isLastItem
      } = compactItemContext;
      const separator = compactDirection === "vertical" ? "-vertical-" : "-";
      return classNames(`${prefixCls}-compact${separator}item`, {
        [`${prefixCls}-compact${separator}first-item`]: isFirstItem,
        [`${prefixCls}-compact${separator}last-item`]: isLastItem,
        [`${prefixCls}-compact${separator}item-rtl`]: direction === "rtl"
      });
    }, [prefixCls, direction, compactItemContext]);
    return {
      compactSize: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize,
      compactDirection: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection,
      compactItemClassnames
    };
  };
  const NoCompactStyle = (_ref) => {
    let {
      children
    } = _ref;
    return /* @__PURE__ */ React__namespace.createElement(SpaceCompactItemContext.Provider, {
      value: null
    }, children);
  };
  var __rest$9 = function(s, e2) {
    var t2 = {};
    for (var p2 in s)
      if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
          t2[p2[i]] = s[p2[i]];
      }
    return t2;
  };
  const GroupSizeContext = /* @__PURE__ */ React__namespace.createContext(void 0);
  const ButtonGroup = (props) => {
    const {
      getPrefixCls,
      direction
    } = React__namespace.useContext(ConfigContext);
    const {
      prefixCls: customizePrefixCls,
      size,
      className
    } = props, others = __rest$9(props, ["prefixCls", "size", "className"]);
    const prefixCls = getPrefixCls("btn-group", customizePrefixCls);
    const [, , hashId] = useToken();
    let sizeCls = "";
    switch (size) {
      case "large":
        sizeCls = "lg";
        break;
      case "small":
        sizeCls = "sm";
        break;
    }
    const classes = classNames(prefixCls, {
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-rtl`]: direction === "rtl"
    }, className, hashId);
    return /* @__PURE__ */ React__namespace.createElement(GroupSizeContext.Provider, {
      value: size
    }, /* @__PURE__ */ React__namespace.createElement("div", Object.assign({}, others, {
      className: classes
    })));
  };
  const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
  const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
  function isString(str) {
    return typeof str === "string";
  }
  function isUnBorderedButtonType(type) {
    return type === "text" || type === "link";
  }
  function splitCNCharsBySpace(child, needInserted) {
    if (child === null || child === void 0) {
      return;
    }
    const SPACE = needInserted ? " " : "";
    if (typeof child !== "string" && typeof child !== "number" && isString(child.type) && isTwoCNChar(child.props.children)) {
      return cloneElement(child, {
        children: child.props.children.split("").join(SPACE)
      });
    }
    if (isString(child)) {
      return isTwoCNChar(child) ? /* @__PURE__ */ React.createElement("span", null, child.split("").join(SPACE)) : /* @__PURE__ */ React.createElement("span", null, child);
    }
    if (isFragment(child)) {
      return /* @__PURE__ */ React.createElement("span", null, child);
    }
    return child;
  }
  function spaceChildren(children, needInserted) {
    let isPrevChildPure = false;
    const childList = [];
    React.Children.forEach(children, (child) => {
      const type = typeof child;
      const isCurrentChildPure = type === "string" || type === "number";
      if (isPrevChildPure && isCurrentChildPure) {
        const lastIndex = childList.length - 1;
        const lastChild = childList[lastIndex];
        childList[lastIndex] = `${lastChild}${child}`;
      } else {
        childList.push(child);
      }
      isPrevChildPure = isCurrentChildPure;
    });
    return React.Children.map(childList, (child) => splitCNCharsBySpace(child, needInserted));
  }
  const IconWrapper = /* @__PURE__ */ React.forwardRef((props, ref) => {
    const {
      className,
      style: style2,
      children,
      prefixCls
    } = props;
    const iconWrapperCls = classNames(`${prefixCls}-icon`, className);
    return /* @__PURE__ */ React.createElement("span", {
      ref,
      className: iconWrapperCls,
      style: style2
    }, children);
  });
  const InnerLoadingIcon = /* @__PURE__ */ React.forwardRef((_ref, ref) => {
    let {
      prefixCls,
      className,
      style: style2,
      iconClassName
    } = _ref;
    const mergedIconCls = classNames(`${prefixCls}-loading-icon`, className);
    return /* @__PURE__ */ React.createElement(IconWrapper, {
      prefixCls,
      className: mergedIconCls,
      style: style2,
      ref
    }, /* @__PURE__ */ React.createElement(RefIcon$2, {
      className: iconClassName
    }));
  });
  const getCollapsedWidth = () => ({
    width: 0,
    opacity: 0,
    transform: "scale(0)"
  });
  const getRealWidth = (node2) => ({
    width: node2.scrollWidth,
    opacity: 1,
    transform: "scale(1)"
  });
  const LoadingIcon = (props) => {
    const {
      prefixCls,
      loading,
      existIcon,
      className,
      style: style2
    } = props;
    const visible = !!loading;
    if (existIcon) {
      return /* @__PURE__ */ React.createElement(InnerLoadingIcon, {
        prefixCls,
        className,
        style: style2
      });
    }
    return /* @__PURE__ */ React.createElement(CSSMotion, {
      visible,
      // We do not really use this motionName
      motionName: `${prefixCls}-loading-icon-motion`,
      motionLeave: visible,
      removeOnLeave: true,
      onAppearStart: getCollapsedWidth,
      onAppearActive: getRealWidth,
      onEnterStart: getCollapsedWidth,
      onEnterActive: getRealWidth,
      onLeaveStart: getRealWidth,
      onLeaveActive: getCollapsedWidth
    }, (_ref2, ref) => {
      let {
        className: motionCls,
        style: motionStyle
      } = _ref2;
      return /* @__PURE__ */ React.createElement(InnerLoadingIcon, {
        prefixCls,
        className,
        style: Object.assign(Object.assign({}, style2), motionStyle),
        ref,
        iconClassName: motionCls
      });
    });
  };
  const genButtonBorderStyle = (buttonTypeCls, borderColor) => ({
    // Border
    [`> span, > ${buttonTypeCls}`]: {
      "&:not(:last-child)": {
        [`&, & > ${buttonTypeCls}`]: {
          "&:not(:disabled)": {
            borderInlineEndColor: borderColor
          }
        }
      },
      "&:not(:first-child)": {
        [`&, & > ${buttonTypeCls}`]: {
          "&:not(:disabled)": {
            borderInlineStartColor: borderColor
          }
        }
      }
    }
  });
  const genGroupStyle = (token2) => {
    const {
      componentCls,
      fontSize,
      lineWidth,
      groupBorderColor,
      colorErrorHover
    } = token2;
    return {
      [`${componentCls}-group`]: [
        {
          position: "relative",
          display: "inline-flex",
          // Border
          [`> span, > ${componentCls}`]: {
            "&:not(:last-child)": {
              [`&, & > ${componentCls}`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0
              }
            },
            "&:not(:first-child)": {
              marginInlineStart: token2.calc(lineWidth).mul(-1).equal(),
              [`&, & > ${componentCls}`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0
              }
            }
          },
          [componentCls]: {
            position: "relative",
            zIndex: 1,
            [`&:hover,
          &:focus,
          &:active`]: {
              zIndex: 2
            },
            "&[disabled]": {
              zIndex: 0
            }
          },
          [`${componentCls}-icon-only`]: {
            fontSize
          }
        },
        // Border Color
        genButtonBorderStyle(`${componentCls}-primary`, groupBorderColor),
        genButtonBorderStyle(`${componentCls}-danger`, colorErrorHover)
      ]
    };
  };
  const prepareToken$1 = (token2) => {
    const {
      paddingInline,
      onlyIconSize,
      paddingBlock
    } = token2;
    const buttonToken = merge(token2, {
      buttonPaddingHorizontal: paddingInline,
      buttonPaddingVertical: paddingBlock,
      buttonIconOnlyFontSize: onlyIconSize
    });
    return buttonToken;
  };
  const prepareComponentToken$5 = (token2) => {
    var _a2, _b2, _c, _d, _e, _f;
    const contentFontSize = (_a2 = token2.contentFontSize) !== null && _a2 !== void 0 ? _a2 : token2.fontSize;
    const contentFontSizeSM = (_b2 = token2.contentFontSizeSM) !== null && _b2 !== void 0 ? _b2 : token2.fontSize;
    const contentFontSizeLG = (_c = token2.contentFontSizeLG) !== null && _c !== void 0 ? _c : token2.fontSizeLG;
    const contentLineHeight = (_d = token2.contentLineHeight) !== null && _d !== void 0 ? _d : getLineHeight(contentFontSize);
    const contentLineHeightSM = (_e = token2.contentLineHeightSM) !== null && _e !== void 0 ? _e : getLineHeight(contentFontSizeSM);
    const contentLineHeightLG = (_f = token2.contentLineHeightLG) !== null && _f !== void 0 ? _f : getLineHeight(contentFontSizeLG);
    return {
      fontWeight: 400,
      defaultShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.controlTmpOutline}`,
      primaryShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.controlOutline}`,
      dangerShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.colorErrorOutline}`,
      primaryColor: token2.colorTextLightSolid,
      dangerColor: token2.colorTextLightSolid,
      borderColorDisabled: token2.colorBorder,
      defaultGhostColor: token2.colorBgContainer,
      ghostBg: "transparent",
      defaultGhostBorderColor: token2.colorBgContainer,
      paddingInline: token2.paddingContentHorizontal - token2.lineWidth,
      paddingInlineLG: token2.paddingContentHorizontal - token2.lineWidth,
      paddingInlineSM: 8 - token2.lineWidth,
      onlyIconSize: token2.fontSizeLG,
      onlyIconSizeSM: token2.fontSizeLG - 2,
      onlyIconSizeLG: token2.fontSizeLG + 2,
      groupBorderColor: token2.colorPrimaryHover,
      linkHoverBg: "transparent",
      textHoverBg: token2.colorBgTextHover,
      defaultColor: token2.colorText,
      defaultBg: token2.colorBgContainer,
      defaultBorderColor: token2.colorBorder,
      defaultBorderColorDisabled: token2.colorBorder,
      defaultHoverBg: token2.colorBgContainer,
      defaultHoverColor: token2.colorPrimaryHover,
      defaultHoverBorderColor: token2.colorPrimaryHover,
      defaultActiveBg: token2.colorBgContainer,
      defaultActiveColor: token2.colorPrimaryActive,
      defaultActiveBorderColor: token2.colorPrimaryActive,
      contentFontSize,
      contentFontSizeSM,
      contentFontSizeLG,
      contentLineHeight,
      contentLineHeightSM,
      contentLineHeightLG,
      paddingBlock: Math.max((token2.controlHeight - contentFontSize * contentLineHeight) / 2 - token2.lineWidth, 0),
      paddingBlockSM: Math.max((token2.controlHeightSM - contentFontSizeSM * contentLineHeightSM) / 2 - token2.lineWidth, 0),
      paddingBlockLG: Math.max((token2.controlHeightLG - contentFontSizeLG * contentLineHeightLG) / 2 - token2.lineWidth, 0)
    };
  };
  const genSharedButtonStyle = (token2) => {
    const {
      componentCls,
      iconCls,
      fontWeight
    } = token2;
    return {
      [componentCls]: {
        outline: "none",
        position: "relative",
        display: "inline-block",
        fontWeight,
        whiteSpace: "nowrap",
        textAlign: "center",
        backgroundImage: "none",
        background: "transparent",
        border: `${unit$1(token2.lineWidth)} ${token2.lineType} transparent`,
        cursor: "pointer",
        transition: `all ${token2.motionDurationMid} ${token2.motionEaseInOut}`,
        userSelect: "none",
        touchAction: "manipulation",
        color: token2.colorText,
        "&:disabled > *": {
          pointerEvents: "none"
        },
        "> span": {
          display: "inline-block"
        },
        [`${componentCls}-icon`]: {
          lineHeight: 0
        },
        // Leave a space between icon and text.
        [`> ${iconCls} + span, > span + ${iconCls}`]: {
          marginInlineStart: token2.marginXS
        },
        [`&:not(${componentCls}-icon-only) > ${componentCls}-icon`]: {
          [`&${componentCls}-loading-icon, &:not(:last-child)`]: {
            marginInlineEnd: token2.marginXS
          }
        },
        "> a": {
          color: "currentColor"
        },
        "&:not(:disabled)": Object.assign({}, genFocusStyle(token2)),
        [`&${componentCls}-two-chinese-chars::first-letter`]: {
          letterSpacing: "0.34em"
        },
        [`&${componentCls}-two-chinese-chars > *:not(${iconCls})`]: {
          marginInlineEnd: "-0.34em",
          letterSpacing: "0.34em"
        },
        // make `btn-icon-only` not too narrow
        [`&-icon-only${componentCls}-compact-item`]: {
          flex: "none"
        }
      }
    };
  };
  const genHoverActiveButtonStyle = (btnCls, hoverStyle, activeStyle) => ({
    [`&:not(:disabled):not(${btnCls}-disabled)`]: {
      "&:hover": hoverStyle,
      "&:active": activeStyle
    }
  });
  const genCircleButtonStyle = (token2) => ({
    minWidth: token2.controlHeight,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    borderRadius: "50%"
  });
  const genRoundButtonStyle = (token2) => ({
    borderRadius: token2.controlHeight,
    paddingInlineStart: token2.calc(token2.controlHeight).div(2).equal(),
    paddingInlineEnd: token2.calc(token2.controlHeight).div(2).equal()
  });
  const genDisabledStyle = (token2) => ({
    cursor: "not-allowed",
    borderColor: token2.borderColorDisabled,
    color: token2.colorTextDisabled,
    background: token2.colorBgContainerDisabled,
    boxShadow: "none"
  });
  const genGhostButtonStyle = (btnCls, background, textColor, borderColor, textColorDisabled, borderColorDisabled, hoverStyle, activeStyle) => ({
    [`&${btnCls}-background-ghost`]: Object.assign(Object.assign({
      color: textColor || void 0,
      background,
      borderColor: borderColor || void 0,
      boxShadow: "none"
    }, genHoverActiveButtonStyle(btnCls, Object.assign({
      background
    }, hoverStyle), Object.assign({
      background
    }, activeStyle))), {
      "&:disabled": {
        cursor: "not-allowed",
        color: textColorDisabled || void 0,
        borderColor: borderColorDisabled || void 0
      }
    })
  });
  const genSolidDisabledButtonStyle = (token2) => ({
    [`&:disabled, &${token2.componentCls}-disabled`]: Object.assign({}, genDisabledStyle(token2))
  });
  const genSolidButtonStyle = (token2) => Object.assign({}, genSolidDisabledButtonStyle(token2));
  const genPureDisabledButtonStyle = (token2) => ({
    [`&:disabled, &${token2.componentCls}-disabled`]: {
      cursor: "not-allowed",
      color: token2.colorTextDisabled
    }
  });
  const genDefaultButtonStyle = (token2) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genSolidButtonStyle(token2)), {
    background: token2.defaultBg,
    borderColor: token2.defaultBorderColor,
    color: token2.defaultColor,
    boxShadow: token2.defaultShadow
  }), genHoverActiveButtonStyle(token2.componentCls, {
    color: token2.defaultHoverColor,
    borderColor: token2.defaultHoverBorderColor,
    background: token2.defaultHoverBg
  }, {
    color: token2.defaultActiveColor,
    borderColor: token2.defaultActiveBorderColor,
    background: token2.defaultActiveBg
  })), genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.defaultGhostColor, token2.defaultGhostBorderColor, token2.colorTextDisabled, token2.colorBorder)), {
    [`&${token2.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
      color: token2.colorError,
      borderColor: token2.colorError
    }, genHoverActiveButtonStyle(token2.componentCls, {
      color: token2.colorErrorHover,
      borderColor: token2.colorErrorBorderHover
    }, {
      color: token2.colorErrorActive,
      borderColor: token2.colorErrorActive
    })), genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.colorError, token2.colorError, token2.colorTextDisabled, token2.colorBorder)), genSolidDisabledButtonStyle(token2))
  });
  const genPrimaryButtonStyle = (token2) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genSolidButtonStyle(token2)), {
    color: token2.primaryColor,
    background: token2.colorPrimary,
    boxShadow: token2.primaryShadow
  }), genHoverActiveButtonStyle(token2.componentCls, {
    color: token2.colorTextLightSolid,
    background: token2.colorPrimaryHover
  }, {
    color: token2.colorTextLightSolid,
    background: token2.colorPrimaryActive
  })), genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.colorPrimary, token2.colorPrimary, token2.colorTextDisabled, token2.colorBorder, {
    color: token2.colorPrimaryHover,
    borderColor: token2.colorPrimaryHover
  }, {
    color: token2.colorPrimaryActive,
    borderColor: token2.colorPrimaryActive
  })), {
    [`&${token2.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
      background: token2.colorError,
      boxShadow: token2.dangerShadow,
      color: token2.dangerColor
    }, genHoverActiveButtonStyle(token2.componentCls, {
      background: token2.colorErrorHover
    }, {
      background: token2.colorErrorActive
    })), genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.colorError, token2.colorError, token2.colorTextDisabled, token2.colorBorder, {
      color: token2.colorErrorHover,
      borderColor: token2.colorErrorHover
    }, {
      color: token2.colorErrorActive,
      borderColor: token2.colorErrorActive
    })), genSolidDisabledButtonStyle(token2))
  });
  const genDashedButtonStyle = (token2) => Object.assign(Object.assign({}, genDefaultButtonStyle(token2)), {
    borderStyle: "dashed"
  });
  const genLinkButtonStyle = (token2) => Object.assign(Object.assign(Object.assign({
    color: token2.colorLink
  }, genHoverActiveButtonStyle(token2.componentCls, {
    color: token2.colorLinkHover,
    background: token2.linkHoverBg
  }, {
    color: token2.colorLinkActive
  })), genPureDisabledButtonStyle(token2)), {
    [`&${token2.componentCls}-dangerous`]: Object.assign(Object.assign({
      color: token2.colorError
    }, genHoverActiveButtonStyle(token2.componentCls, {
      color: token2.colorErrorHover
    }, {
      color: token2.colorErrorActive
    })), genPureDisabledButtonStyle(token2))
  });
  const genTextButtonStyle = (token2) => Object.assign(Object.assign(Object.assign({}, genHoverActiveButtonStyle(token2.componentCls, {
    color: token2.colorText,
    background: token2.textHoverBg
  }, {
    color: token2.colorText,
    background: token2.colorBgTextActive
  })), genPureDisabledButtonStyle(token2)), {
    [`&${token2.componentCls}-dangerous`]: Object.assign(Object.assign({
      color: token2.colorError
    }, genPureDisabledButtonStyle(token2)), genHoverActiveButtonStyle(token2.componentCls, {
      color: token2.colorErrorHover,
      background: token2.colorErrorBg
    }, {
      color: token2.colorErrorHover,
      background: token2.colorErrorBg
    }))
  });
  const genTypeButtonStyle = (token2) => {
    const {
      componentCls
    } = token2;
    return {
      [`${componentCls}-default`]: genDefaultButtonStyle(token2),
      [`${componentCls}-primary`]: genPrimaryButtonStyle(token2),
      [`${componentCls}-dashed`]: genDashedButtonStyle(token2),
      [`${componentCls}-link`]: genLinkButtonStyle(token2),
      [`${componentCls}-text`]: genTextButtonStyle(token2),
      [`${componentCls}-ghost`]: genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.colorBgContainer, token2.colorBgContainer, token2.colorTextDisabled, token2.colorBorder)
    };
  };
  const genButtonStyle = function(token2) {
    let prefixCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const {
      componentCls,
      controlHeight,
      fontSize,
      lineHeight,
      borderRadius,
      buttonPaddingHorizontal,
      iconCls,
      buttonPaddingVertical
    } = token2;
    const iconOnlyCls = `${componentCls}-icon-only`;
    return [
      {
        [`${prefixCls}`]: {
          fontSize,
          lineHeight,
          height: controlHeight,
          padding: `${unit$1(buttonPaddingVertical)} ${unit$1(buttonPaddingHorizontal)}`,
          borderRadius,
          [`&${iconOnlyCls}`]: {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: controlHeight,
            paddingInlineStart: 0,
            paddingInlineEnd: 0,
            [`&${componentCls}-round`]: {
              width: "auto"
            },
            [iconCls]: {
              fontSize: token2.buttonIconOnlyFontSize
            }
          },
          // Loading
          [`&${componentCls}-loading`]: {
            opacity: token2.opacityLoading,
            cursor: "default"
          },
          [`${componentCls}-loading-icon`]: {
            transition: `width ${token2.motionDurationSlow} ${token2.motionEaseInOut}, opacity ${token2.motionDurationSlow} ${token2.motionEaseInOut}`
          }
        }
      },
      // Shape - patch prefixCls again to override solid border radius style
      {
        [`${componentCls}${componentCls}-circle${prefixCls}`]: genCircleButtonStyle(token2)
      },
      {
        [`${componentCls}${componentCls}-round${prefixCls}`]: genRoundButtonStyle(token2)
      }
    ];
  };
  const genSizeBaseButtonStyle = (token2) => {
    const baseToken = merge(token2, {
      fontSize: token2.contentFontSize,
      lineHeight: token2.contentLineHeight
    });
    return genButtonStyle(baseToken, token2.componentCls);
  };
  const genSizeSmallButtonStyle = (token2) => {
    const smallToken = merge(token2, {
      controlHeight: token2.controlHeightSM,
      fontSize: token2.contentFontSizeSM,
      lineHeight: token2.contentLineHeightSM,
      padding: token2.paddingXS,
      buttonPaddingHorizontal: token2.paddingInlineSM,
      buttonPaddingVertical: token2.paddingBlockSM,
      borderRadius: token2.borderRadiusSM,
      buttonIconOnlyFontSize: token2.onlyIconSizeSM
    });
    return genButtonStyle(smallToken, `${token2.componentCls}-sm`);
  };
  const genSizeLargeButtonStyle = (token2) => {
    const largeToken = merge(token2, {
      controlHeight: token2.controlHeightLG,
      fontSize: token2.contentFontSizeLG,
      lineHeight: token2.contentLineHeightLG,
      buttonPaddingHorizontal: token2.paddingInlineLG,
      buttonPaddingVertical: token2.paddingBlockLG,
      borderRadius: token2.borderRadiusLG,
      buttonIconOnlyFontSize: token2.onlyIconSizeLG
    });
    return genButtonStyle(largeToken, `${token2.componentCls}-lg`);
  };
  const genBlockButtonStyle = (token2) => {
    const {
      componentCls
    } = token2;
    return {
      [componentCls]: {
        [`&${componentCls}-block`]: {
          width: "100%"
        }
      }
    };
  };
  const useStyle$6 = genStyleHooks("Button", (token2) => {
    const buttonToken = prepareToken$1(token2);
    return [
      // Shared
      genSharedButtonStyle(buttonToken),
      // Size
      genSizeBaseButtonStyle(buttonToken),
      genSizeSmallButtonStyle(buttonToken),
      genSizeLargeButtonStyle(buttonToken),
      // Block
      genBlockButtonStyle(buttonToken),
      // Group (type, ghost, danger, loading)
      genTypeButtonStyle(buttonToken),
      // Button Group
      genGroupStyle(buttonToken)
    ];
  }, prepareComponentToken$5, {
    unitless: {
      fontWeight: true,
      contentLineHeight: true,
      contentLineHeightSM: true,
      contentLineHeightLG: true
    }
  });
  function compactItemBorder(token2, parentCls, options) {
    const {
      focusElCls,
      focus,
      borderElCls
    } = options;
    const childCombinator = borderElCls ? "> *" : "";
    const hoverEffects = ["hover", focus ? "focus" : null, "active"].filter(Boolean).map((n2) => `&:${n2} ${childCombinator}`).join(",");
    return {
      [`&-item:not(${parentCls}-last-item)`]: {
        marginInlineEnd: token2.calc(token2.lineWidth).mul(-1).equal()
      },
      "&-item": Object.assign(Object.assign({
        [hoverEffects]: {
          zIndex: 2
        }
      }, focusElCls ? {
        [`&${focusElCls}`]: {
          zIndex: 2
        }
      } : {}), {
        [`&[disabled] ${childCombinator}`]: {
          zIndex: 0
        }
      })
    };
  }
  function compactItemBorderRadius(prefixCls, parentCls, options) {
    const {
      borderElCls
    } = options;
    const childCombinator = borderElCls ? `> ${borderElCls}` : "";
    return {
      [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
        borderRadius: 0
      },
      [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
        [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0
        }
      },
      [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
        [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0
        }
      }
    };
  }
  function genCompactItemStyle(token2) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      focus: true
    };
    const {
      componentCls
    } = token2;
    const compactCls = `${componentCls}-compact`;
    return {
      [compactCls]: Object.assign(Object.assign({}, compactItemBorder(token2, compactCls, options)), compactItemBorderRadius(componentCls, compactCls, options))
    };
  }
  function compactItemVerticalBorder(token2, parentCls) {
    return {
      // border collapse
      [`&-item:not(${parentCls}-last-item)`]: {
        marginBottom: token2.calc(token2.lineWidth).mul(-1).equal()
      },
      "&-item": {
        "&:hover,&:focus,&:active": {
          zIndex: 2
        },
        "&[disabled]": {
          zIndex: 0
        }
      }
    };
  }
  function compactItemBorderVerticalRadius(prefixCls, parentCls) {
    return {
      [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item)`]: {
        borderRadius: 0
      },
      [`&-item${parentCls}-first-item:not(${parentCls}-last-item)`]: {
        [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
          borderEndEndRadius: 0,
          borderEndStartRadius: 0
        }
      },
      [`&-item${parentCls}-last-item:not(${parentCls}-first-item)`]: {
        [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
          borderStartStartRadius: 0,
          borderStartEndRadius: 0
        }
      }
    };
  }
  function genCompactItemVerticalStyle(token2) {
    const compactCls = `${token2.componentCls}-compact-vertical`;
    return {
      [compactCls]: Object.assign(Object.assign({}, compactItemVerticalBorder(token2, compactCls)), compactItemBorderVerticalRadius(token2.componentCls, compactCls))
    };
  }
  const genButtonCompactStyle = (token2) => {
    const {
      componentCls,
      calc
    } = token2;
    return {
      [componentCls]: {
        // Special styles for Primary Button
        [`&-compact-item${componentCls}-primary`]: {
          [`&:not([disabled]) + ${componentCls}-compact-item${componentCls}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: calc(token2.lineWidth).mul(-1).equal(),
              insetInlineStart: calc(token2.lineWidth).mul(-1).equal(),
              display: "inline-block",
              width: token2.lineWidth,
              height: `calc(100% + ${unit$1(token2.lineWidth)} * 2)`,
              backgroundColor: token2.colorPrimaryHover,
              content: '""'
            }
          }
        },
        // Special styles for Primary Button
        "&-compact-vertical-item": {
          [`&${componentCls}-primary`]: {
            [`&:not([disabled]) + ${componentCls}-compact-vertical-item${componentCls}-primary:not([disabled])`]: {
              position: "relative",
              "&:before": {
                position: "absolute",
                top: calc(token2.lineWidth).mul(-1).equal(),
                insetInlineStart: calc(token2.lineWidth).mul(-1).equal(),
                display: "inline-block",
                width: `calc(100% + ${unit$1(token2.lineWidth)} * 2)`,
                height: token2.lineWidth,
                backgroundColor: token2.colorPrimaryHover,
                content: '""'
              }
            }
          }
        }
      }
    };
  };
  const CompactCmp = genSubStyleComponent(["Button", "compact"], (token2) => {
    const buttonToken = prepareToken$1(token2);
    return [
      // Space Compact
      genCompactItemStyle(buttonToken),
      genCompactItemVerticalStyle(buttonToken),
      genButtonCompactStyle(buttonToken)
    ];
  }, prepareComponentToken$5);
  var __rest$8 = function(s, e2) {
    var t2 = {};
    for (var p2 in s)
      if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
          t2[p2[i]] = s[p2[i]];
      }
    return t2;
  };
  function getLoadingConfig(loading) {
    if (typeof loading === "object" && loading) {
      let delay = loading === null || loading === void 0 ? void 0 : loading.delay;
      delay = !Number.isNaN(delay) && typeof delay === "number" ? delay : 0;
      return {
        loading: delay <= 0,
        delay
      };
    }
    return {
      loading: !!loading,
      delay: 0
    };
  }
  const InternalCompoundedButton = /* @__PURE__ */ React.forwardRef((props, ref) => {
    var _a2, _b2;
    const {
      loading = false,
      prefixCls: customizePrefixCls,
      type,
      danger,
      shape = "default",
      size: customizeSize,
      styles,
      disabled: customDisabled,
      className,
      rootClassName,
      children,
      icon,
      ghost = false,
      block = false,
      // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
      htmlType = "button",
      classNames: customClassNames,
      style: customStyle = {}
    } = props, rest = __rest$8(props, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]);
    const mergedType = type || "default";
    const {
      getPrefixCls,
      autoInsertSpaceInButton,
      direction,
      button
    } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("btn", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$6(prefixCls);
    const disabled = React.useContext(DisabledContext);
    const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
    const groupSize = React.useContext(GroupSizeContext);
    const loadingOrDelay = React.useMemo(() => getLoadingConfig(loading), [loading]);
    const [innerLoading, setLoading] = React.useState(loadingOrDelay.loading);
    const [hasTwoCNChar, setHasTwoCNChar] = React.useState(false);
    const internalRef = /* @__PURE__ */ React.createRef();
    const buttonRef = composeRef(ref, internalRef);
    const needInserted = React.Children.count(children) === 1 && !icon && !isUnBorderedButtonType(mergedType);
    React.useEffect(() => {
      let delayTimer = null;
      if (loadingOrDelay.delay > 0) {
        delayTimer = setTimeout(() => {
          delayTimer = null;
          setLoading(true);
        }, loadingOrDelay.delay);
      } else {
        setLoading(loadingOrDelay.loading);
      }
      function cleanupTimer() {
        if (delayTimer) {
          clearTimeout(delayTimer);
          delayTimer = null;
        }
      }
      return cleanupTimer;
    }, [loadingOrDelay]);
    React.useEffect(() => {
      if (!buttonRef || !buttonRef.current || autoInsertSpaceInButton === false) {
        return;
      }
      const buttonText = buttonRef.current.textContent;
      if (needInserted && isTwoCNChar(buttonText)) {
        if (!hasTwoCNChar) {
          setHasTwoCNChar(true);
        }
      } else if (hasTwoCNChar) {
        setHasTwoCNChar(false);
      }
    }, [buttonRef]);
    const handleClick = (e2) => {
      const {
        onClick
      } = props;
      if (innerLoading || mergedDisabled) {
        e2.preventDefault();
        return;
      }
      onClick === null || onClick === void 0 ? void 0 : onClick(e2);
    };
    const autoInsertSpace = autoInsertSpaceInButton !== false;
    const {
      compactSize,
      compactItemClassnames
    } = useCompactItemContext(prefixCls, direction);
    const sizeClassNameMap = {
      large: "lg",
      small: "sm",
      middle: void 0
    };
    const sizeFullName = useSize((ctxSize) => {
      var _a22, _b22;
      return (_b22 = (_a22 = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a22 !== void 0 ? _a22 : groupSize) !== null && _b22 !== void 0 ? _b22 : ctxSize;
    });
    const sizeCls = sizeFullName ? sizeClassNameMap[sizeFullName] || "" : "";
    const iconType = innerLoading ? "loading" : icon;
    const linkButtonRestProps = omit(rest, ["navigate"]);
    const classes = classNames(prefixCls, hashId, cssVarCls, {
      [`${prefixCls}-${shape}`]: shape !== "default" && shape,
      [`${prefixCls}-${mergedType}`]: mergedType,
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-icon-only`]: !children && children !== 0 && !!iconType,
      [`${prefixCls}-background-ghost`]: ghost && !isUnBorderedButtonType(mergedType),
      [`${prefixCls}-loading`]: innerLoading,
      [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar && autoInsertSpace && !innerLoading,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-dangerous`]: !!danger,
      [`${prefixCls}-rtl`]: direction === "rtl"
    }, compactItemClassnames, className, rootClassName, button === null || button === void 0 ? void 0 : button.className);
    const fullStyle = Object.assign(Object.assign({}, button === null || button === void 0 ? void 0 : button.style), customStyle);
    const iconClasses = classNames(customClassNames === null || customClassNames === void 0 ? void 0 : customClassNames.icon, (_a2 = button === null || button === void 0 ? void 0 : button.classNames) === null || _a2 === void 0 ? void 0 : _a2.icon);
    const iconStyle = Object.assign(Object.assign({}, (styles === null || styles === void 0 ? void 0 : styles.icon) || {}), ((_b2 = button === null || button === void 0 ? void 0 : button.styles) === null || _b2 === void 0 ? void 0 : _b2.icon) || {});
    const iconNode = icon && !innerLoading ? /* @__PURE__ */ React.createElement(IconWrapper, {
      prefixCls,
      className: iconClasses,
      style: iconStyle
    }, icon) : /* @__PURE__ */ React.createElement(LoadingIcon, {
      existIcon: !!icon,
      prefixCls,
      loading: !!innerLoading
    });
    const kids = children || children === 0 ? spaceChildren(children, needInserted && autoInsertSpace) : null;
    if (linkButtonRestProps.href !== void 0) {
      return wrapCSSVar(/* @__PURE__ */ React.createElement("a", Object.assign({}, linkButtonRestProps, {
        className: classNames(classes, {
          [`${prefixCls}-disabled`]: mergedDisabled
        }),
        href: mergedDisabled ? void 0 : linkButtonRestProps.href,
        style: fullStyle,
        onClick: handleClick,
        ref: buttonRef,
        tabIndex: mergedDisabled ? -1 : 0
      }), iconNode, kids));
    }
    let buttonNode = /* @__PURE__ */ React.createElement("button", Object.assign({}, rest, {
      type: htmlType,
      className: classes,
      style: fullStyle,
      onClick: handleClick,
      disabled: mergedDisabled,
      ref: buttonRef
    }), iconNode, kids, !!compactItemClassnames && /* @__PURE__ */ React.createElement(CompactCmp, {
      key: "compact",
      prefixCls
    }));
    if (!isUnBorderedButtonType(mergedType)) {
      buttonNode = /* @__PURE__ */ React.createElement(Wave, {
        component: "Button",
        disabled: !!innerLoading
      }, buttonNode);
    }
    return wrapCSSVar(buttonNode);
  });
  const Button = InternalCompoundedButton;
  Button.Group = ButtonGroup;
  Button.__ANT_BUTTON = true;
  var OrderContext = /* @__PURE__ */ React__namespace.createContext(null);
  var EMPTY_LIST = [];
  function useDom(render2, debug) {
    var _React$useState = React__namespace.useState(function() {
      if (!canUseDom()) {
        return null;
      }
      var defaultEle = document.createElement("div");
      return defaultEle;
    }), _React$useState2 = _slicedToArray(_React$useState, 1), ele = _React$useState2[0];
    var appendedRef = React__namespace.useRef(false);
    var queueCreate = React__namespace.useContext(OrderContext);
    var _React$useState3 = React__namespace.useState(EMPTY_LIST), _React$useState4 = _slicedToArray(_React$useState3, 2), queue = _React$useState4[0], setQueue = _React$useState4[1];
    var mergedQueueCreate = queueCreate || (appendedRef.current ? void 0 : function(appendFn) {
      setQueue(function(origin) {
        var newQueue = [appendFn].concat(_toConsumableArray(origin));
        return newQueue;
      });
    });
    function append2() {
      if (!ele.parentElement) {
        document.body.appendChild(ele);
      }
      appendedRef.current = true;
    }
    function cleanup2() {
      var _ele$parentElement;
      (_ele$parentElement = ele.parentElement) === null || _ele$parentElement === void 0 ? void 0 : _ele$parentElement.removeChild(ele);
      appendedRef.current = false;
    }
    useLayoutEffect(function() {
      if (render2) {
        if (queueCreate) {
          queueCreate(append2);
        } else {
          append2();
        }
      } else {
        cleanup2();
      }
      return cleanup2;
    }, [render2]);
    useLayoutEffect(function() {
      if (queue.length) {
        queue.forEach(function(appendFn) {
          return appendFn();
        });
        setQueue(EMPTY_LIST);
      }
    }, [queue]);
    return [ele, mergedQueueCreate];
  }
  function measureScrollbarSize(ele) {
    var randomId = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7));
    var measureEle = document.createElement("div");
    measureEle.id = randomId;
    var measureStyle = measureEle.style;
    measureStyle.position = "absolute";
    measureStyle.left = "0";
    measureStyle.top = "0";
    measureStyle.width = "100px";
    measureStyle.height = "100px";
    measureStyle.overflow = "scroll";
    var fallbackWidth;
    var fallbackHeight;
    if (ele) {
      var targetStyle = getComputedStyle(ele);
      measureStyle.scrollbarColor = targetStyle.scrollbarColor;
      measureStyle.scrollbarWidth = targetStyle.scrollbarWidth;
      var webkitScrollbarStyle = getComputedStyle(ele, "::-webkit-scrollbar");
      var width = parseInt(webkitScrollbarStyle.width, 10);
      var height = parseInt(webkitScrollbarStyle.height, 10);
      try {
        var widthStyle = width ? "width: ".concat(webkitScrollbarStyle.width, ";") : "";
        var heightStyle = height ? "height: ".concat(webkitScrollbarStyle.height, ";") : "";
        updateCSS("\n#".concat(randomId, "::-webkit-scrollbar {\n").concat(widthStyle, "\n").concat(heightStyle, "\n}"), randomId);
      } catch (e2) {
        console.error(e2);
        fallbackWidth = width;
        fallbackHeight = height;
      }
    }
    document.body.appendChild(measureEle);
    var scrollWidth = ele && fallbackWidth && !isNaN(fallbackWidth) ? fallbackWidth : measureEle.offsetWidth - measureEle.clientWidth;
    var scrollHeight = ele && fallbackHeight && !isNaN(fallbackHeight) ? fallbackHeight : measureEle.offsetHeight - measureEle.clientHeight;
    document.body.removeChild(measureEle);
    removeCSS(randomId);
    return {
      width: scrollWidth,
      height: scrollHeight
    };
  }
  function getTargetScrollBarSize(target) {
    if (typeof document === "undefined" || !target || !(target instanceof Element)) {
      return {
        width: 0,
        height: 0
      };
    }
    return measureScrollbarSize(target);
  }
  function isBodyOverflowing() {
    return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
  }
  var UNIQUE_ID = "rc-util-locker-".concat(Date.now());
  var uuid$2 = 0;
  function useScrollLocker(lock) {
    var mergedLock = !!lock;
    var _React$useState = React__namespace.useState(function() {
      uuid$2 += 1;
      return "".concat(UNIQUE_ID, "_").concat(uuid$2);
    }), _React$useState2 = _slicedToArray(_React$useState, 1), id = _React$useState2[0];
    useLayoutEffect(function() {
      if (mergedLock) {
        var scrollbarSize = getTargetScrollBarSize(document.body).width;
        var isOverflow = isBodyOverflowing();
        updateCSS("\nhtml body {\n  overflow-y: hidden;\n  ".concat(isOverflow ? "width: calc(100% - ".concat(scrollbarSize, "px);") : "", "\n}"), id);
      } else {
        removeCSS(id);
      }
      return function() {
        removeCSS(id);
      };
    }, [mergedLock, id]);
  }
  var inline = false;
  function inlineMock(nextInline) {
    return inline;
  }
  var getPortalContainer = function getPortalContainer2(getContainer2) {
    if (getContainer2 === false) {
      return false;
    }
    if (!canUseDom() || !getContainer2) {
      return null;
    }
    if (typeof getContainer2 === "string") {
      return document.querySelector(getContainer2);
    }
    if (typeof getContainer2 === "function") {
      return getContainer2();
    }
    return getContainer2;
  };
  var Portal = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
    var open2 = props.open, autoLock = props.autoLock, getContainer2 = props.getContainer;
    props.debug;
    var _props$autoDestroy = props.autoDestroy, autoDestroy = _props$autoDestroy === void 0 ? true : _props$autoDestroy, children = props.children;
    var _React$useState = React__namespace.useState(open2), _React$useState2 = _slicedToArray(_React$useState, 2), shouldRender = _React$useState2[0], setShouldRender = _React$useState2[1];
    var mergedRender = shouldRender || open2;
    React__namespace.useEffect(function() {
      if (autoDestroy || open2) {
        setShouldRender(open2);
      }
    }, [open2, autoDestroy]);
    var _React$useState3 = React__namespace.useState(function() {
      return getPortalContainer(getContainer2);
    }), _React$useState4 = _slicedToArray(_React$useState3, 2), innerContainer = _React$useState4[0], setInnerContainer = _React$useState4[1];
    React__namespace.useEffect(function() {
      var customizeContainer = getPortalContainer(getContainer2);
      setInnerContainer(customizeContainer !== null && customizeContainer !== void 0 ? customizeContainer : null);
    });
    var _useDom = useDom(mergedRender && !innerContainer), _useDom2 = _slicedToArray(_useDom, 2), defaultContainer = _useDom2[0], queueCreate = _useDom2[1];
    var mergedContainer = innerContainer !== null && innerContainer !== void 0 ? innerContainer : defaultContainer;
    useScrollLocker(autoLock && open2 && canUseDom() && (mergedContainer === defaultContainer || mergedContainer === document.body));
    var childRef = null;
    if (children && supportRef(children) && ref) {
      var _ref = children;
      childRef = _ref.ref;
    }
    var mergedRef = useComposeRef(childRef, ref);
    if (!mergedRender || !canUseDom() || innerContainer === void 0) {
      return null;
    }
    var renderInline = mergedContainer === false || inlineMock();
    var reffedChildren = children;
    if (ref) {
      reffedChildren = /* @__PURE__ */ React__namespace.cloneElement(children, {
        ref: mergedRef
      });
    }
    return /* @__PURE__ */ React__namespace.createElement(OrderContext.Provider, {
      value: queueCreate
    }, renderInline ? reffedChildren : /* @__PURE__ */ ReactDOM__default.createPortal(reffedChildren, mergedContainer));
  });
  function getUseId() {
    var fullClone2 = _objectSpread2({}, React__namespace);
    return fullClone2.useId;
  }
  var uuid$1 = 0;
  var useOriginId = getUseId();
  const useId$1 = useOriginId ? (
    // Use React `useId`
    function useId(id) {
      var reactId = useOriginId();
      if (id) {
        return id;
      }
      return reactId;
    }
  ) : (
    // Use compatible of `useId`
    function useCompatId(id) {
      var _React$useState = React__namespace.useState("ssr-id"), _React$useState2 = _slicedToArray(_React$useState, 2), innerId = _React$useState2[0], setInnerId = _React$useState2[1];
      React__namespace.useEffect(function() {
        var nextId = uuid$1;
        uuid$1 += 1;
        setInnerId("rc_unique_".concat(nextId));
      }, []);
      if (id) {
        return id;
      }
      return innerId;
    }
  );
  function pickClosable(context) {
    if (!context) {
      return void 0;
    }
    return {
      closable: context.closable,
      closeIcon: context.closeIcon
    };
  }
  function useClosableConfig(closableCollection) {
    const {
      closable,
      closeIcon
    } = closableCollection || {};
    return React.useMemo(() => {
      if (
        // If `closable`, whatever rest be should be true
        !closable && (closable === false || closeIcon === false || closeIcon === null)
      ) {
        return false;
      }
      if (closable === void 0 && closeIcon === void 0) {
        return null;
      }
      let closableConfig = {
        closeIcon: typeof closeIcon !== "boolean" && closeIcon !== null ? closeIcon : void 0
      };
      if (closable && typeof closable === "object") {
        closableConfig = Object.assign(Object.assign({}, closableConfig), closable);
      }
      return closableConfig;
    }, [closable, closeIcon]);
  }
  function assignWithoutUndefined() {
    const target = {};
    for (var _len = arguments.length, objList = new Array(_len), _key = 0; _key < _len; _key++) {
      objList[_key] = arguments[_key];
    }
    objList.forEach((obj) => {
      if (obj) {
        Object.keys(obj).forEach((key) => {
          if (obj[key] !== void 0) {
            target[key] = obj[key];
          }
        });
      }
    });
    return target;
  }
  const EmptyFallbackCloseCollection = {};
  function useClosable(propCloseCollection, contextCloseCollection) {
    let fallbackCloseCollection = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : EmptyFallbackCloseCollection;
    const propCloseConfig = useClosableConfig(propCloseCollection);
    const contextCloseConfig = useClosableConfig(contextCloseCollection);
    const mergedFallbackCloseCollection = React.useMemo(() => Object.assign({
      closeIcon: /* @__PURE__ */ React.createElement(RefIcon$5, null)
    }, fallbackCloseCollection), [fallbackCloseCollection]);
    const mergedClosableConfig = React.useMemo(() => {
      if (propCloseConfig === false) {
        return false;
      }
      if (propCloseConfig) {
        return assignWithoutUndefined(mergedFallbackCloseCollection, contextCloseConfig, propCloseConfig);
      }
      if (contextCloseConfig === false) {
        return false;
      }
      if (contextCloseConfig) {
        return assignWithoutUndefined(mergedFallbackCloseCollection, contextCloseConfig);
      }
      return !mergedFallbackCloseCollection.closable ? false : mergedFallbackCloseCollection;
    }, [propCloseConfig, contextCloseConfig, mergedFallbackCloseCollection]);
    return React.useMemo(() => {
      if (mergedClosableConfig === false) {
        return [false, null];
      }
      const {
        closeIconRender
      } = mergedFallbackCloseCollection;
      const {
        closeIcon
      } = mergedClosableConfig;
      let mergedCloseIcon = closeIcon;
      if (mergedCloseIcon !== null && mergedCloseIcon !== void 0) {
        if (closeIconRender) {
          mergedCloseIcon = closeIconRender(closeIcon);
        }
        const ariaProps = pickAttrs(mergedClosableConfig, true);
        if (Object.keys(ariaProps).length) {
          mergedCloseIcon = /* @__PURE__ */ React.isValidElement(mergedCloseIcon) ? /* @__PURE__ */ React.cloneElement(mergedCloseIcon, ariaProps) : /* @__PURE__ */ React.createElement("span", Object.assign({}, ariaProps), mergedCloseIcon);
        }
      }
      return [true, mergedCloseIcon];
    }, [mergedClosableConfig, mergedFallbackCloseCollection]);
  }
  const initMotionCommon = (duration) => ({
    animationDuration: duration,
    animationFillMode: "both"
  });
  const initMotionCommonLeave = (duration) => ({
    animationDuration: duration,
    animationFillMode: "both"
  });
  const initMotion = function(motionCls, inKeyframes, outKeyframes, duration) {
    let sameLevel = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    const sameLevelPrefix = sameLevel ? "&" : "";
    return {
      [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: Object.assign(Object.assign({}, initMotionCommon(duration)), {
        animationPlayState: "paused"
      }),
      [`${sameLevelPrefix}${motionCls}-leave`]: Object.assign(Object.assign({}, initMotionCommonLeave(duration)), {
        animationPlayState: "paused"
      }),
      [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
        animationName: inKeyframes,
        animationPlayState: "running"
      },
      [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
        animationName: outKeyframes,
        animationPlayState: "running",
        pointerEvents: "none"
      }
    };
  };
  const zoomIn = new Keyframe("antZoomIn", {
    "0%": {
      transform: "scale(0.2)",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      opacity: 1
    }
  });
  const zoomOut = new Keyframe("antZoomOut", {
    "0%": {
      transform: "scale(1)"
    },
    "100%": {
      transform: "scale(0.2)",
      opacity: 0
    }
  });
  const zoomBigIn = new Keyframe("antZoomBigIn", {
    "0%": {
      transform: "scale(0.8)",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      opacity: 1
    }
  });
  const zoomBigOut = new Keyframe("antZoomBigOut", {
    "0%": {
      transform: "scale(1)"
    },
    "100%": {
      transform: "scale(0.8)",
      opacity: 0
    }
  });
  const zoomUpIn = new Keyframe("antZoomUpIn", {
    "0%": {
      transform: "scale(0.8)",
      transformOrigin: "50% 0%",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      transformOrigin: "50% 0%"
    }
  });
  const zoomUpOut = new Keyframe("antZoomUpOut", {
    "0%": {
      transform: "scale(1)",
      transformOrigin: "50% 0%"
    },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "50% 0%",
      opacity: 0
    }
  });
  const zoomLeftIn = new Keyframe("antZoomLeftIn", {
    "0%": {
      transform: "scale(0.8)",
      transformOrigin: "0% 50%",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      transformOrigin: "0% 50%"
    }
  });
  const zoomLeftOut = new Keyframe("antZoomLeftOut", {
    "0%": {
      transform: "scale(1)",
      transformOrigin: "0% 50%"
    },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "0% 50%",
      opacity: 0
    }
  });
  const zoomRightIn = new Keyframe("antZoomRightIn", {
    "0%": {
      transform: "scale(0.8)",
      transformOrigin: "100% 50%",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      transformOrigin: "100% 50%"
    }
  });
  const zoomRightOut = new Keyframe("antZoomRightOut", {
    "0%": {
      transform: "scale(1)",
      transformOrigin: "100% 50%"
    },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "100% 50%",
      opacity: 0
    }
  });
  const zoomDownIn = new Keyframe("antZoomDownIn", {
    "0%": {
      transform: "scale(0.8)",
      transformOrigin: "50% 100%",
      opacity: 0
    },
    "100%": {
      transform: "scale(1)",
      transformOrigin: "50% 100%"
    }
  });
  const zoomDownOut = new Keyframe("antZoomDownOut", {
    "0%": {
      transform: "scale(1)",
      transformOrigin: "50% 100%"
    },
    "100%": {
      transform: "scale(0.8)",
      transformOrigin: "50% 100%",
      opacity: 0
    }
  });
  const zoomMotion = {
    zoom: {
      inKeyframes: zoomIn,
      outKeyframes: zoomOut
    },
    "zoom-big": {
      inKeyframes: zoomBigIn,
      outKeyframes: zoomBigOut
    },
    "zoom-big-fast": {
      inKeyframes: zoomBigIn,
      outKeyframes: zoomBigOut
    },
    "zoom-left": {
      inKeyframes: zoomLeftIn,
      outKeyframes: zoomLeftOut
    },
    "zoom-right": {
      inKeyframes: zoomRightIn,
      outKeyframes: zoomRightOut
    },
    "zoom-up": {
      inKeyframes: zoomUpIn,
      outKeyframes: zoomUpOut
    },
    "zoom-down": {
      inKeyframes: zoomDownIn,
      outKeyframes: zoomDownOut
    }
  };
  const initZoomMotion = (token2, motionName) => {
    const {
      antCls
    } = token2;
    const motionCls = `${antCls}-${motionName}`;
    const {
      inKeyframes,
      outKeyframes
    } = zoomMotion[motionName];
    return [initMotion(motionCls, inKeyframes, outKeyframes, token2.motionDurationFast), {
      [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
        transform: "scale(0)",
        opacity: 0,
        animationTimingFunction: token2.motionEaseOutCirc,
        "&-prepare": {
          transform: "none"
        }
      },
      [`${motionCls}-leave`]: {
        animationTimingFunction: token2.motionEaseInOutCirc
      }
    }];
  };
  const isMobile = function() {
    if (typeof navigator === "undefined" || typeof window === "undefined") {
      return false;
    }
    var agent = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4));
  };
  function Arrow(props) {
    var prefixCls = props.prefixCls, align = props.align, arrow = props.arrow, arrowPos = props.arrowPos;
    var _ref = arrow || {}, className = _ref.className, content = _ref.content;
    var _arrowPos$x = arrowPos.x, x = _arrowPos$x === void 0 ? 0 : _arrowPos$x, _arrowPos$y = arrowPos.y, y = _arrowPos$y === void 0 ? 0 : _arrowPos$y;
    var arrowRef = React__namespace.useRef();
    if (!align || !align.points) {
      return null;
    }
    var alignStyle = {
      position: "absolute"
    };
    if (align.autoArrow !== false) {
      var popupPoints = align.points[0];
      var targetPoints = align.points[1];
      var popupTB = popupPoints[0];
      var popupLR = popupPoints[1];
      var targetTB = targetPoints[0];
      var targetLR = targetPoints[1];
      if (popupTB === targetTB || !["t", "b"].includes(popupTB)) {
        alignStyle.top = y;
      } else if (popupTB === "t") {
        alignStyle.top = 0;
      } else {
        alignStyle.bottom = 0;
      }
      if (popupLR === targetLR || !["l", "r"].includes(popupLR)) {
        alignStyle.left = x;
      } else if (popupLR === "l") {
        alignStyle.left = 0;
      } else {
        alignStyle.right = 0;
      }
    }
    return /* @__PURE__ */ React__namespace.createElement("div", {
      ref: arrowRef,
      className: classNames("".concat(prefixCls, "-arrow"), className),
      style: alignStyle
    }, content);
  }
  function Mask(props) {
    var prefixCls = props.prefixCls, open2 = props.open, zIndex = props.zIndex, mask = props.mask, motion = props.motion;
    if (!mask) {
      return null;
    }
    return /* @__PURE__ */ React__namespace.createElement(CSSMotion, _extends({}, motion, {
      motionAppear: true,
      visible: open2,
      removeOnLeave: true
    }), function(_ref) {
      var className = _ref.className;
      return /* @__PURE__ */ React__namespace.createElement("div", {
        style: {
          zIndex
        },
        className: classNames("".concat(prefixCls, "-mask"), className)
      });
    });
  }
  var PopupContent = /* @__PURE__ */ React__namespace.memo(function(_ref) {
    var children = _ref.children;
    return children;
  }, function(_, next2) {
    return next2.cache;
  });
  var Popup$1 = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
    var popup = props.popup, className = props.className, prefixCls = props.prefixCls, style2 = props.style, target = props.target, _onVisibleChanged = props.onVisibleChanged, open2 = props.open, keepDom = props.keepDom, fresh = props.fresh, onClick = props.onClick, mask = props.mask, arrow = props.arrow, arrowPos = props.arrowPos, align = props.align, motion = props.motion, maskMotion = props.maskMotion, forceRender = props.forceRender, getPopupContainer = props.getPopupContainer, autoDestroy = props.autoDestroy, Portal2 = props.portal, zIndex = props.zIndex, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, onPointerEnter = props.onPointerEnter, ready = props.ready, offsetX = props.offsetX, offsetY = props.offsetY, offsetR = props.offsetR, offsetB = props.offsetB, onAlign = props.onAlign, onPrepare = props.onPrepare, stretch = props.stretch, targetWidth = props.targetWidth, targetHeight = props.targetHeight;
    var childNode = typeof popup === "function" ? popup() : popup;
    var isNodeVisible = open2 || keepDom;
    var getPopupContainerNeedParams = (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.length) > 0;
    var _React$useState = React__namespace.useState(!getPopupContainer || !getPopupContainerNeedParams), _React$useState2 = _slicedToArray(_React$useState, 2), show = _React$useState2[0], setShow = _React$useState2[1];
    useLayoutEffect(function() {
      if (!show && getPopupContainerNeedParams && target) {
        setShow(true);
      }
    }, [show, getPopupContainerNeedParams, target]);
    if (!show) {
      return null;
    }
    var AUTO = "auto";
    var offsetStyle = {
      left: "-1000vw",
      top: "-1000vh",
      right: AUTO,
      bottom: AUTO
    };
    if (ready || !open2) {
      var _experimental;
      var points = align.points;
      var dynamicInset = align.dynamicInset || ((_experimental = align._experimental) === null || _experimental === void 0 ? void 0 : _experimental.dynamicInset);
      var alignRight = dynamicInset && points[0][1] === "r";
      var alignBottom = dynamicInset && points[0][0] === "b";
      if (alignRight) {
        offsetStyle.right = offsetR;
        offsetStyle.left = AUTO;
      } else {
        offsetStyle.left = offsetX;
        offsetStyle.right = AUTO;
      }
      if (alignBottom) {
        offsetStyle.bottom = offsetB;
        offsetStyle.top = AUTO;
      } else {
        offsetStyle.top = offsetY;
        offsetStyle.bottom = AUTO;
      }
    }
    var miscStyle = {};
    if (stretch) {
      if (stretch.includes("height") && targetHeight) {
        miscStyle.height = targetHeight;
      } else if (stretch.includes("minHeight") && targetHeight) {
        miscStyle.minHeight = targetHeight;
      }
      if (stretch.includes("width") && targetWidth) {
        miscStyle.width = targetWidth;
      } else if (stretch.includes("minWidth") && targetWidth) {
        miscStyle.minWidth = targetWidth;
      }
    }
    if (!open2) {
      miscStyle.pointerEvents = "none";
    }
    return /* @__PURE__ */ React__namespace.createElement(Portal2, {
      open: forceRender || isNodeVisible,
      getContainer: getPopupContainer && function() {
        return getPopupContainer(target);
      },
      autoDestroy
    }, /* @__PURE__ */ React__namespace.createElement(Mask, {
      prefixCls,
      open: open2,
      zIndex,
      mask,
      motion: maskMotion
    }), /* @__PURE__ */ React__namespace.createElement(RefResizeObserver, {
      onResize: onAlign,
      disabled: !open2
    }, function(resizeObserverRef) {
      return /* @__PURE__ */ React__namespace.createElement(CSSMotion, _extends({
        motionAppear: true,
        motionEnter: true,
        motionLeave: true,
        removeOnLeave: false,
        forceRender,
        leavedClassName: "".concat(prefixCls, "-hidden")
      }, motion, {
        onAppearPrepare: onPrepare,
        onEnterPrepare: onPrepare,
        visible: open2,
        onVisibleChanged: function onVisibleChanged(nextVisible) {
          var _motion$onVisibleChan;
          motion === null || motion === void 0 || (_motion$onVisibleChan = motion.onVisibleChanged) === null || _motion$onVisibleChan === void 0 || _motion$onVisibleChan.call(motion, nextVisible);
          _onVisibleChanged(nextVisible);
        }
      }), function(_ref, motionRef) {
        var motionClassName = _ref.className, motionStyle = _ref.style;
        var cls = classNames(prefixCls, motionClassName, className);
        return /* @__PURE__ */ React__namespace.createElement("div", {
          ref: composeRef(resizeObserverRef, ref, motionRef),
          className: cls,
          style: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({
            "--arrow-x": "".concat(arrowPos.x || 0, "px"),
            "--arrow-y": "".concat(arrowPos.y || 0, "px")
          }, offsetStyle), miscStyle), motionStyle), {}, {
            boxSizing: "border-box",
            zIndex
          }, style2),
          onMouseEnter,
          onMouseLeave,
          onPointerEnter,
          onClick
        }, arrow && /* @__PURE__ */ React__namespace.createElement(Arrow, {
          prefixCls,
          arrow,
          arrowPos,
          align
        }), /* @__PURE__ */ React__namespace.createElement(PopupContent, {
          cache: !open2 && !fresh
        }, childNode));
      });
    }));
  });
  var TriggerWrapper = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
    var children = props.children, getTriggerDOMNode = props.getTriggerDOMNode;
    var canUseRef = supportRef(children);
    var setRef = React__namespace.useCallback(function(node2) {
      fillRef(ref, getTriggerDOMNode ? getTriggerDOMNode(node2) : node2);
    }, [getTriggerDOMNode]);
    var mergedRef = useComposeRef(setRef, children.ref);
    return canUseRef ? /* @__PURE__ */ React__namespace.cloneElement(children, {
      ref: mergedRef
    }) : children;
  });
  var TriggerContext = /* @__PURE__ */ React__namespace.createContext(null);
  function toArray$1(val) {
    return val ? Array.isArray(val) ? val : [val] : [];
  }
  function useAction(mobile, action, showAction, hideAction) {
    return React__namespace.useMemo(function() {
      var mergedShowAction = toArray$1(showAction !== null && showAction !== void 0 ? showAction : action);
      var mergedHideAction = toArray$1(hideAction !== null && hideAction !== void 0 ? hideAction : action);
      var showActionSet = new Set(mergedShowAction);
      var hideActionSet = new Set(mergedHideAction);
      if (mobile) {
        if (showActionSet.has("hover")) {
          showActionSet.delete("hover");
          showActionSet.add("click");
        }
        if (hideActionSet.has("hover")) {
          hideActionSet.delete("hover");
          hideActionSet.add("click");
        }
      }
      return [showActionSet, hideActionSet];
    }, [mobile, action, showAction, hideAction]);
  }
  function isPointsEq() {
    var a1 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var a2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var isAlignPoint = arguments.length > 2 ? arguments[2] : void 0;
    if (isAlignPoint) {
      return a1[0] === a2[0];
    }
    return a1[0] === a2[0] && a1[1] === a2[1];
  }
  function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
    var points = align.points;
    var placements2 = Object.keys(builtinPlacements);
    for (var i = 0; i < placements2.length; i += 1) {
      var _builtinPlacements$pl;
      var placement = placements2[i];
      if (isPointsEq((_builtinPlacements$pl = builtinPlacements[placement]) === null || _builtinPlacements$pl === void 0 ? void 0 : _builtinPlacements$pl.points, points, isAlignPoint)) {
        return "".concat(prefixCls, "-placement-").concat(placement);
      }
    }
    return "";
  }
  function getMotion(prefixCls, motion, animation, transitionName) {
    if (motion) {
      return motion;
    }
    if (animation) {
      return {
        motionName: "".concat(prefixCls, "-").concat(animation)
      };
    }
    if (transitionName) {
      return {
        motionName: transitionName
      };
    }
    return null;
  }
  function getWin(ele) {
    return ele.ownerDocument.defaultView;
  }
  function collectScroller(ele) {
    var scrollerList = [];
    var current = ele === null || ele === void 0 ? void 0 : ele.parentElement;
    var scrollStyle = ["hidden", "scroll", "clip", "auto"];
    while (current) {
      var _getWin$getComputedSt = getWin(current).getComputedStyle(current), overflowX = _getWin$getComputedSt.overflowX, overflowY = _getWin$getComputedSt.overflowY, overflow = _getWin$getComputedSt.overflow;
      if ([overflowX, overflowY, overflow].some(function(o) {
        return scrollStyle.includes(o);
      })) {
        scrollerList.push(current);
      }
      current = current.parentElement;
    }
    return scrollerList;
  }
  function toNum(num) {
    var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    return Number.isNaN(num) ? defaultValue : num;
  }
  function getPxValue(val) {
    return toNum(parseFloat(val), 0);
  }
  function getVisibleArea(initArea, scrollerList) {
    var visibleArea = _objectSpread2({}, initArea);
    (scrollerList || []).forEach(function(ele) {
      if (ele instanceof HTMLBodyElement || ele instanceof HTMLHtmlElement) {
        return;
      }
      var _getWin$getComputedSt2 = getWin(ele).getComputedStyle(ele), overflow = _getWin$getComputedSt2.overflow, overflowClipMargin = _getWin$getComputedSt2.overflowClipMargin, borderTopWidth = _getWin$getComputedSt2.borderTopWidth, borderBottomWidth = _getWin$getComputedSt2.borderBottomWidth, borderLeftWidth = _getWin$getComputedSt2.borderLeftWidth, borderRightWidth = _getWin$getComputedSt2.borderRightWidth;
      var eleRect = ele.getBoundingClientRect();
      var eleOutHeight = ele.offsetHeight, eleInnerHeight = ele.clientHeight, eleOutWidth = ele.offsetWidth, eleInnerWidth = ele.clientWidth;
      var borderTopNum = getPxValue(borderTopWidth);
      var borderBottomNum = getPxValue(borderBottomWidth);
      var borderLeftNum = getPxValue(borderLeftWidth);
      var borderRightNum = getPxValue(borderRightWidth);
      var scaleX = toNum(Math.round(eleRect.width / eleOutWidth * 1e3) / 1e3);
      var scaleY = toNum(Math.round(eleRect.height / eleOutHeight * 1e3) / 1e3);
      var eleScrollWidth = (eleOutWidth - eleInnerWidth - borderLeftNum - borderRightNum) * scaleX;
      var eleScrollHeight = (eleOutHeight - eleInnerHeight - borderTopNum - borderBottomNum) * scaleY;
      var scaledBorderTopWidth = borderTopNum * scaleY;
      var scaledBorderBottomWidth = borderBottomNum * scaleY;
      var scaledBorderLeftWidth = borderLeftNum * scaleX;
      var scaledBorderRightWidth = borderRightNum * scaleX;
      var clipMarginWidth = 0;
      var clipMarginHeight = 0;
      if (overflow === "clip") {
        var clipNum = getPxValue(overflowClipMargin);
        clipMarginWidth = clipNum * scaleX;
        clipMarginHeight = clipNum * scaleY;
      }
      var eleLeft = eleRect.x + scaledBorderLeftWidth - clipMarginWidth;
      var eleTop = eleRect.y + scaledBorderTopWidth - clipMarginHeight;
      var eleRight = eleLeft + eleRect.width + 2 * clipMarginWidth - scaledBorderLeftWidth - scaledBorderRightWidth - eleScrollWidth;
      var eleBottom = eleTop + eleRect.height + 2 * clipMarginHeight - scaledBorderTopWidth - scaledBorderBottomWidth - eleScrollHeight;
      visibleArea.left = Math.max(visibleArea.left, eleLeft);
      visibleArea.top = Math.max(visibleArea.top, eleTop);
      visibleArea.right = Math.min(visibleArea.right, eleRight);
      visibleArea.bottom = Math.min(visibleArea.bottom, eleBottom);
    });
    return visibleArea;
  }
  function getUnitOffset(size) {
    var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var offsetStr = "".concat(offset);
    var cells = offsetStr.match(/^(.*)\%$/);
    if (cells) {
      return size * (parseFloat(cells[1]) / 100);
    }
    return parseFloat(offsetStr);
  }
  function getNumberOffset(rect, offset) {
    var _ref = offset || [], _ref2 = _slicedToArray(_ref, 2), offsetX = _ref2[0], offsetY = _ref2[1];
    return [getUnitOffset(rect.width, offsetX), getUnitOffset(rect.height, offsetY)];
  }
  function splitPoints() {
    var points = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return [points[0], points[1]];
  }
  function getAlignPoint(rect, points) {
    var topBottom = points[0];
    var leftRight = points[1];
    var x;
    var y;
    if (topBottom === "t") {
      y = rect.y;
    } else if (topBottom === "b") {
      y = rect.y + rect.height;
    } else {
      y = rect.y + rect.height / 2;
    }
    if (leftRight === "l") {
      x = rect.x;
    } else if (leftRight === "r") {
      x = rect.x + rect.width;
    } else {
      x = rect.x + rect.width / 2;
    }
    return {
      x,
      y
    };
  }
  function reversePoints(points, index2) {
    var reverseMap = {
      t: "b",
      b: "t",
      l: "r",
      r: "l"
    };
    return points.map(function(point, i) {
      if (i === index2) {
        return reverseMap[point] || "c";
      }
      return point;
    }).join("");
  }
  function useAlign(open2, popupEle, target, placement, builtinPlacements, popupAlign, onPopupAlign) {
    var _React$useState = React__namespace.useState({
      ready: false,
      offsetX: 0,
      offsetY: 0,
      offsetR: 0,
      offsetB: 0,
      arrowX: 0,
      arrowY: 0,
      scaleX: 1,
      scaleY: 1,
      align: builtinPlacements[placement] || {}
    }), _React$useState2 = _slicedToArray(_React$useState, 2), offsetInfo = _React$useState2[0], setOffsetInfo = _React$useState2[1];
    var alignCountRef = React__namespace.useRef(0);
    var scrollerList = React__namespace.useMemo(function() {
      if (!popupEle) {
        return [];
      }
      return collectScroller(popupEle);
    }, [popupEle]);
    var prevFlipRef = React__namespace.useRef({});
    var resetFlipCache = function resetFlipCache2() {
      prevFlipRef.current = {};
    };
    if (!open2) {
      resetFlipCache();
    }
    var onAlign = useEvent(function() {
      if (popupEle && target && open2) {
        let getIntersectionVisibleArea = function(offsetX, offsetY) {
          var area = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : visibleArea;
          var l2 = popupRect.x + offsetX;
          var t2 = popupRect.y + offsetY;
          var r = l2 + popupWidth;
          var b2 = t2 + popupHeight;
          var visibleL = Math.max(l2, area.left);
          var visibleT = Math.max(t2, area.top);
          var visibleR = Math.min(r, area.right);
          var visibleB = Math.min(b2, area.bottom);
          return Math.max(0, (visibleR - visibleL) * (visibleB - visibleT));
        }, syncNextPopupPosition = function() {
          nextPopupY = popupRect.y + nextOffsetY;
          nextPopupBottom = nextPopupY + popupHeight;
          nextPopupX = popupRect.x + nextOffsetX;
          nextPopupRight = nextPopupX + popupWidth;
        };
        var _popupElement$parentE, _popupElement$parentE2;
        var popupElement = popupEle;
        var doc = popupElement.ownerDocument;
        var win = getWin(popupElement);
        var _win$getComputedStyle = win.getComputedStyle(popupElement), width = _win$getComputedStyle.width, height = _win$getComputedStyle.height, popupPosition = _win$getComputedStyle.position;
        var originLeft = popupElement.style.left;
        var originTop = popupElement.style.top;
        var originRight = popupElement.style.right;
        var originBottom = popupElement.style.bottom;
        var originOverflow = popupElement.style.overflow;
        var placementInfo = _objectSpread2(_objectSpread2({}, builtinPlacements[placement]), popupAlign);
        var placeholderElement = doc.createElement("div");
        (_popupElement$parentE = popupElement.parentElement) === null || _popupElement$parentE === void 0 || _popupElement$parentE.appendChild(placeholderElement);
        placeholderElement.style.left = "".concat(popupElement.offsetLeft, "px");
        placeholderElement.style.top = "".concat(popupElement.offsetTop, "px");
        placeholderElement.style.position = popupPosition;
        placeholderElement.style.height = "".concat(popupElement.offsetHeight, "px");
        placeholderElement.style.width = "".concat(popupElement.offsetWidth, "px");
        popupElement.style.left = "0";
        popupElement.style.top = "0";
        popupElement.style.right = "auto";
        popupElement.style.bottom = "auto";
        popupElement.style.overflow = "hidden";
        var targetRect;
        if (Array.isArray(target)) {
          targetRect = {
            x: target[0],
            y: target[1],
            width: 0,
            height: 0
          };
        } else {
          var rect = target.getBoundingClientRect();
          targetRect = {
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height
          };
        }
        var popupRect = popupElement.getBoundingClientRect();
        var _doc$documentElement = doc.documentElement, clientWidth = _doc$documentElement.clientWidth, clientHeight = _doc$documentElement.clientHeight, scrollWidth = _doc$documentElement.scrollWidth, scrollHeight = _doc$documentElement.scrollHeight, scrollTop = _doc$documentElement.scrollTop, scrollLeft = _doc$documentElement.scrollLeft;
        var popupHeight = popupRect.height;
        var popupWidth = popupRect.width;
        var targetHeight = targetRect.height;
        var targetWidth = targetRect.width;
        var visibleRegion = {
          left: 0,
          top: 0,
          right: clientWidth,
          bottom: clientHeight
        };
        var scrollRegion = {
          left: -scrollLeft,
          top: -scrollTop,
          right: scrollWidth - scrollLeft,
          bottom: scrollHeight - scrollTop
        };
        var htmlRegion = placementInfo.htmlRegion;
        var VISIBLE = "visible";
        var VISIBLE_FIRST = "visibleFirst";
        if (htmlRegion !== "scroll" && htmlRegion !== VISIBLE_FIRST) {
          htmlRegion = VISIBLE;
        }
        var isVisibleFirst = htmlRegion === VISIBLE_FIRST;
        var scrollRegionArea = getVisibleArea(scrollRegion, scrollerList);
        var visibleRegionArea = getVisibleArea(visibleRegion, scrollerList);
        var visibleArea = htmlRegion === VISIBLE ? visibleRegionArea : scrollRegionArea;
        var adjustCheckVisibleArea = isVisibleFirst ? visibleRegionArea : visibleArea;
        popupElement.style.left = "auto";
        popupElement.style.top = "auto";
        popupElement.style.right = "0";
        popupElement.style.bottom = "0";
        var popupMirrorRect = popupElement.getBoundingClientRect();
        popupElement.style.left = originLeft;
        popupElement.style.top = originTop;
        popupElement.style.right = originRight;
        popupElement.style.bottom = originBottom;
        popupElement.style.overflow = originOverflow;
        (_popupElement$parentE2 = popupElement.parentElement) === null || _popupElement$parentE2 === void 0 || _popupElement$parentE2.removeChild(placeholderElement);
        var _scaleX = toNum(Math.round(popupWidth / parseFloat(width) * 1e3) / 1e3);
        var _scaleY = toNum(Math.round(popupHeight / parseFloat(height) * 1e3) / 1e3);
        if (_scaleX === 0 || _scaleY === 0 || isDOM(target) && !isVisible(target)) {
          return;
        }
        var offset = placementInfo.offset, targetOffset2 = placementInfo.targetOffset;
        var _getNumberOffset = getNumberOffset(popupRect, offset), _getNumberOffset2 = _slicedToArray(_getNumberOffset, 2), popupOffsetX = _getNumberOffset2[0], popupOffsetY = _getNumberOffset2[1];
        var _getNumberOffset3 = getNumberOffset(targetRect, targetOffset2), _getNumberOffset4 = _slicedToArray(_getNumberOffset3, 2), targetOffsetX = _getNumberOffset4[0], targetOffsetY = _getNumberOffset4[1];
        targetRect.x -= targetOffsetX;
        targetRect.y -= targetOffsetY;
        var _ref3 = placementInfo.points || [], _ref4 = _slicedToArray(_ref3, 2), popupPoint = _ref4[0], targetPoint = _ref4[1];
        var targetPoints = splitPoints(targetPoint);
        var popupPoints = splitPoints(popupPoint);
        var targetAlignPoint = getAlignPoint(targetRect, targetPoints);
        var popupAlignPoint = getAlignPoint(popupRect, popupPoints);
        var nextAlignInfo = _objectSpread2({}, placementInfo);
        var nextOffsetX = targetAlignPoint.x - popupAlignPoint.x + popupOffsetX;
        var nextOffsetY = targetAlignPoint.y - popupAlignPoint.y + popupOffsetY;
        var originIntersectionVisibleArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY);
        var originIntersectionRecommendArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY, visibleRegionArea);
        var targetAlignPointTL = getAlignPoint(targetRect, ["t", "l"]);
        var popupAlignPointTL = getAlignPoint(popupRect, ["t", "l"]);
        var targetAlignPointBR = getAlignPoint(targetRect, ["b", "r"]);
        var popupAlignPointBR = getAlignPoint(popupRect, ["b", "r"]);
        var overflow = placementInfo.overflow || {};
        var adjustX = overflow.adjustX, adjustY = overflow.adjustY, shiftX = overflow.shiftX, shiftY = overflow.shiftY;
        var supportAdjust = function supportAdjust2(val) {
          if (typeof val === "boolean") {
            return val;
          }
          return val >= 0;
        };
        var nextPopupY;
        var nextPopupBottom;
        var nextPopupX;
        var nextPopupRight;
        syncNextPopupPosition();
        var needAdjustY = supportAdjust(adjustY);
        var sameTB = popupPoints[0] === targetPoints[0];
        if (needAdjustY && popupPoints[0] === "t" && (nextPopupBottom > adjustCheckVisibleArea.bottom || prevFlipRef.current.bt)) {
          var tmpNextOffsetY = nextOffsetY;
          if (sameTB) {
            tmpNextOffsetY -= popupHeight - targetHeight;
          } else {
            tmpNextOffsetY = targetAlignPointTL.y - popupAlignPointBR.y - popupOffsetY;
          }
          var newVisibleArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY);
          var newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY, visibleRegionArea);
          if (
            // Of course use larger one
            newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
            newVisibleRecommendArea >= originIntersectionRecommendArea)
          ) {
            prevFlipRef.current.bt = true;
            nextOffsetY = tmpNextOffsetY;
            popupOffsetY = -popupOffsetY;
            nextAlignInfo.points = [reversePoints(popupPoints, 0), reversePoints(targetPoints, 0)];
          } else {
            prevFlipRef.current.bt = false;
          }
        }
        if (needAdjustY && popupPoints[0] === "b" && (nextPopupY < adjustCheckVisibleArea.top || prevFlipRef.current.tb)) {
          var _tmpNextOffsetY = nextOffsetY;
          if (sameTB) {
            _tmpNextOffsetY += popupHeight - targetHeight;
          } else {
            _tmpNextOffsetY = targetAlignPointBR.y - popupAlignPointTL.y - popupOffsetY;
          }
          var _newVisibleArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY);
          var _newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY, visibleRegionArea);
          if (
            // Of course use larger one
            _newVisibleArea > originIntersectionVisibleArea || _newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
            _newVisibleRecommendArea >= originIntersectionRecommendArea)
          ) {
            prevFlipRef.current.tb = true;
            nextOffsetY = _tmpNextOffsetY;
            popupOffsetY = -popupOffsetY;
            nextAlignInfo.points = [reversePoints(popupPoints, 0), reversePoints(targetPoints, 0)];
          } else {
            prevFlipRef.current.tb = false;
          }
        }
        var needAdjustX = supportAdjust(adjustX);
        var sameLR = popupPoints[1] === targetPoints[1];
        if (needAdjustX && popupPoints[1] === "l" && (nextPopupRight > adjustCheckVisibleArea.right || prevFlipRef.current.rl)) {
          var tmpNextOffsetX = nextOffsetX;
          if (sameLR) {
            tmpNextOffsetX -= popupWidth - targetWidth;
          } else {
            tmpNextOffsetX = targetAlignPointTL.x - popupAlignPointBR.x - popupOffsetX;
          }
          var _newVisibleArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY);
          var _newVisibleRecommendArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY, visibleRegionArea);
          if (
            // Of course use larger one
            _newVisibleArea2 > originIntersectionVisibleArea || _newVisibleArea2 === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
            _newVisibleRecommendArea2 >= originIntersectionRecommendArea)
          ) {
            prevFlipRef.current.rl = true;
            nextOffsetX = tmpNextOffsetX;
            popupOffsetX = -popupOffsetX;
            nextAlignInfo.points = [reversePoints(popupPoints, 1), reversePoints(targetPoints, 1)];
          } else {
            prevFlipRef.current.rl = false;
          }
        }
        if (needAdjustX && popupPoints[1] === "r" && (nextPopupX < adjustCheckVisibleArea.left || prevFlipRef.current.lr)) {
          var _tmpNextOffsetX = nextOffsetX;
          if (sameLR) {
            _tmpNextOffsetX += popupWidth - targetWidth;
          } else {
            _tmpNextOffsetX = targetAlignPointBR.x - popupAlignPointTL.x - popupOffsetX;
          }
          var _newVisibleArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY);
          var _newVisibleRecommendArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY, visibleRegionArea);
          if (
            // Of course use larger one
            _newVisibleArea3 > originIntersectionVisibleArea || _newVisibleArea3 === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
            _newVisibleRecommendArea3 >= originIntersectionRecommendArea)
          ) {
            prevFlipRef.current.lr = true;
            nextOffsetX = _tmpNextOffsetX;
            popupOffsetX = -popupOffsetX;
            nextAlignInfo.points = [reversePoints(popupPoints, 1), reversePoints(targetPoints, 1)];
          } else {
            prevFlipRef.current.lr = false;
          }
        }
        syncNextPopupPosition();
        var numShiftX = shiftX === true ? 0 : shiftX;
        if (typeof numShiftX === "number") {
          if (nextPopupX < visibleRegionArea.left) {
            nextOffsetX -= nextPopupX - visibleRegionArea.left - popupOffsetX;
            if (targetRect.x + targetWidth < visibleRegionArea.left + numShiftX) {
              nextOffsetX += targetRect.x - visibleRegionArea.left + targetWidth - numShiftX;
            }
          }
          if (nextPopupRight > visibleRegionArea.right) {
            nextOffsetX -= nextPopupRight - visibleRegionArea.right - popupOffsetX;
            if (targetRect.x > visibleRegionArea.right - numShiftX) {
              nextOffsetX += targetRect.x - visibleRegionArea.right + numShiftX;
            }
          }
        }
        var numShiftY = shiftY === true ? 0 : shiftY;
        if (typeof numShiftY === "number") {
          if (nextPopupY < visibleRegionArea.top) {
            nextOffsetY -= nextPopupY - visibleRegionArea.top - popupOffsetY;
            if (targetRect.y + targetHeight < visibleRegionArea.top + numShiftY) {
              nextOffsetY += targetRect.y - visibleRegionArea.top + targetHeight - numShiftY;
            }
          }
          if (nextPopupBottom > visibleRegionArea.bottom) {
            nextOffsetY -= nextPopupBottom - visibleRegionArea.bottom - popupOffsetY;
            if (targetRect.y > visibleRegionArea.bottom - numShiftY) {
              nextOffsetY += targetRect.y - visibleRegionArea.bottom + numShiftY;
            }
          }
        }
        var popupLeft = popupRect.x + nextOffsetX;
        var popupRight = popupLeft + popupWidth;
        var popupTop = popupRect.y + nextOffsetY;
        var popupBottom = popupTop + popupHeight;
        var targetLeft = targetRect.x;
        var targetRight = targetLeft + targetWidth;
        var targetTop = targetRect.y;
        var targetBottom = targetTop + targetHeight;
        var maxLeft = Math.max(popupLeft, targetLeft);
        var minRight = Math.min(popupRight, targetRight);
        var xCenter = (maxLeft + minRight) / 2;
        var nextArrowX = xCenter - popupLeft;
        var maxTop = Math.max(popupTop, targetTop);
        var minBottom = Math.min(popupBottom, targetBottom);
        var yCenter = (maxTop + minBottom) / 2;
        var nextArrowY = yCenter - popupTop;
        onPopupAlign === null || onPopupAlign === void 0 || onPopupAlign(popupEle, nextAlignInfo);
        var offsetX4Right = popupMirrorRect.right - popupRect.x - (nextOffsetX + popupRect.width);
        var offsetY4Bottom = popupMirrorRect.bottom - popupRect.y - (nextOffsetY + popupRect.height);
        setOffsetInfo({
          ready: true,
          offsetX: nextOffsetX / _scaleX,
          offsetY: nextOffsetY / _scaleY,
          offsetR: offsetX4Right / _scaleX,
          offsetB: offsetY4Bottom / _scaleY,
          arrowX: nextArrowX / _scaleX,
          arrowY: nextArrowY / _scaleY,
          scaleX: _scaleX,
          scaleY: _scaleY,
          align: nextAlignInfo
        });
      }
    });
    var triggerAlign = function triggerAlign2() {
      alignCountRef.current += 1;
      var id = alignCountRef.current;
      Promise.resolve().then(function() {
        if (alignCountRef.current === id) {
          onAlign();
        }
      });
    };
    var resetReady = function resetReady2() {
      setOffsetInfo(function(ori) {
        return _objectSpread2(_objectSpread2({}, ori), {}, {
          ready: false
        });
      });
    };
    useLayoutEffect(resetReady, [placement]);
    useLayoutEffect(function() {
      if (!open2) {
        resetReady();
      }
    }, [open2]);
    return [offsetInfo.ready, offsetInfo.offsetX, offsetInfo.offsetY, offsetInfo.offsetR, offsetInfo.offsetB, offsetInfo.arrowX, offsetInfo.arrowY, offsetInfo.scaleX, offsetInfo.scaleY, offsetInfo.align, triggerAlign];
  }
  function useWatch(open2, target, popup, onAlign, onScroll) {
    useLayoutEffect(function() {
      if (open2 && target && popup) {
        let notifyScroll = function() {
          onAlign();
          onScroll();
        };
        var targetElement = target;
        var popupElement = popup;
        var targetScrollList = collectScroller(targetElement);
        var popupScrollList = collectScroller(popupElement);
        var win = getWin(popupElement);
        var mergedList = new Set([win].concat(_toConsumableArray(targetScrollList), _toConsumableArray(popupScrollList)));
        mergedList.forEach(function(scroller) {
          scroller.addEventListener("scroll", notifyScroll, {
            passive: true
          });
        });
        win.addEventListener("resize", notifyScroll, {
          passive: true
        });
        onAlign();
        return function() {
          mergedList.forEach(function(scroller) {
            scroller.removeEventListener("scroll", notifyScroll);
            win.removeEventListener("resize", notifyScroll);
          });
        };
      }
    }, [open2, target, popup]);
  }
  function useWinClick(open2, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen) {
    var openRef = React__namespace.useRef(open2);
    openRef.current = open2;
    React__namespace.useEffect(function() {
      if (clickToHide && popupEle && (!mask || maskClosable)) {
        var onTriggerClose = function onTriggerClose2(_ref) {
          var target = _ref.target;
          if (openRef.current && !inPopupOrChild(target)) {
            triggerOpen(false);
          }
        };
        var win = getWin(popupEle);
        win.addEventListener("mousedown", onTriggerClose, true);
        win.addEventListener("contextmenu", onTriggerClose, true);
        var targetShadowRoot = getShadowRoot(targetEle);
        if (targetShadowRoot) {
          targetShadowRoot.addEventListener("mousedown", onTriggerClose, true);
          targetShadowRoot.addEventListener("contextmenu", onTriggerClose, true);
        }
        return function() {
          win.removeEventListener("mousedown", onTriggerClose, true);
          win.removeEventListener("contextmenu", onTriggerClose, true);
          if (targetShadowRoot) {
            targetShadowRoot.removeEventListener("mousedown", onTriggerClose, true);
            targetShadowRoot.removeEventListener("contextmenu", onTriggerClose, true);
          }
        };
      }
    }, [clickToHide, targetEle, popupEle, mask, maskClosable]);
  }
  var _excluded$3 = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
  function generateTrigger() {
    var PortalComponent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Portal;
    var Trigger2 = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
      var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-trigger-popup" : _props$prefixCls, children = props.children, _props$action = props.action, action = _props$action === void 0 ? "hover" : _props$action, showAction = props.showAction, hideAction = props.hideAction, popupVisible = props.popupVisible, defaultPopupVisible = props.defaultPopupVisible, onPopupVisibleChange = props.onPopupVisibleChange, afterPopupVisibleChange = props.afterPopupVisibleChange, mouseEnterDelay = props.mouseEnterDelay, _props$mouseLeaveDela = props.mouseLeaveDelay, mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela, focusDelay = props.focusDelay, blurDelay = props.blurDelay, mask = props.mask, _props$maskClosable = props.maskClosable, maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable, getPopupContainer = props.getPopupContainer, forceRender = props.forceRender, autoDestroy = props.autoDestroy, destroyPopupOnHide = props.destroyPopupOnHide, popup = props.popup, popupClassName = props.popupClassName, popupStyle = props.popupStyle, popupPlacement = props.popupPlacement, _props$builtinPlaceme = props.builtinPlacements, builtinPlacements = _props$builtinPlaceme === void 0 ? {} : _props$builtinPlaceme, popupAlign = props.popupAlign, zIndex = props.zIndex, stretch = props.stretch, getPopupClassNameFromAlign = props.getPopupClassNameFromAlign, fresh = props.fresh, alignPoint = props.alignPoint, onPopupClick = props.onPopupClick, onPopupAlign = props.onPopupAlign, arrow = props.arrow, popupMotion = props.popupMotion, maskMotion = props.maskMotion, popupTransitionName = props.popupTransitionName, popupAnimation = props.popupAnimation, maskTransitionName = props.maskTransitionName, maskAnimation = props.maskAnimation, className = props.className, getTriggerDOMNode = props.getTriggerDOMNode, restProps = _objectWithoutProperties(props, _excluded$3);
      var mergedAutoDestroy = autoDestroy || destroyPopupOnHide || false;
      var _React$useState = React__namespace.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), mobile = _React$useState2[0], setMobile = _React$useState2[1];
      useLayoutEffect(function() {
        setMobile(isMobile());
      }, []);
      var subPopupElements = React__namespace.useRef({});
      var parentContext = React__namespace.useContext(TriggerContext);
      var context = React__namespace.useMemo(function() {
        return {
          registerSubPopup: function registerSubPopup(id2, subPopupEle) {
            subPopupElements.current[id2] = subPopupEle;
            parentContext === null || parentContext === void 0 || parentContext.registerSubPopup(id2, subPopupEle);
          }
        };
      }, [parentContext]);
      var id = useId$1();
      var _React$useState3 = React__namespace.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), popupEle = _React$useState4[0], setPopupEle = _React$useState4[1];
      var externalPopupRef = React__namespace.useRef(null);
      var setPopupRef = useEvent(function(node2) {
        externalPopupRef.current = node2;
        if (isDOM(node2) && popupEle !== node2) {
          setPopupEle(node2);
        }
        parentContext === null || parentContext === void 0 || parentContext.registerSubPopup(id, node2);
      });
      var _React$useState5 = React__namespace.useState(null), _React$useState6 = _slicedToArray(_React$useState5, 2), targetEle = _React$useState6[0], setTargetEle = _React$useState6[1];
      var externalForwardRef = React__namespace.useRef(null);
      var setTargetRef = useEvent(function(node2) {
        if (isDOM(node2) && targetEle !== node2) {
          setTargetEle(node2);
          externalForwardRef.current = node2;
        }
      });
      var child = React__namespace.Children.only(children);
      var originChildProps = (child === null || child === void 0 ? void 0 : child.props) || {};
      var cloneProps = {};
      var inPopupOrChild = useEvent(function(ele) {
        var _getShadowRoot, _getShadowRoot2;
        var childDOM = targetEle;
        return (childDOM === null || childDOM === void 0 ? void 0 : childDOM.contains(ele)) || ((_getShadowRoot = getShadowRoot(childDOM)) === null || _getShadowRoot === void 0 ? void 0 : _getShadowRoot.host) === ele || ele === childDOM || (popupEle === null || popupEle === void 0 ? void 0 : popupEle.contains(ele)) || ((_getShadowRoot2 = getShadowRoot(popupEle)) === null || _getShadowRoot2 === void 0 ? void 0 : _getShadowRoot2.host) === ele || ele === popupEle || Object.values(subPopupElements.current).some(function(subPopupEle) {
          return (subPopupEle === null || subPopupEle === void 0 ? void 0 : subPopupEle.contains(ele)) || ele === subPopupEle;
        });
      });
      var mergePopupMotion = getMotion(prefixCls, popupMotion, popupAnimation, popupTransitionName);
      var mergeMaskMotion = getMotion(prefixCls, maskMotion, maskAnimation, maskTransitionName);
      var _React$useState7 = React__namespace.useState(defaultPopupVisible || false), _React$useState8 = _slicedToArray(_React$useState7, 2), internalOpen = _React$useState8[0], setInternalOpen = _React$useState8[1];
      var mergedOpen = popupVisible !== null && popupVisible !== void 0 ? popupVisible : internalOpen;
      var setMergedOpen = useEvent(function(nextOpen) {
        if (popupVisible === void 0) {
          setInternalOpen(nextOpen);
        }
      });
      useLayoutEffect(function() {
        setInternalOpen(popupVisible || false);
      }, [popupVisible]);
      var openRef = React__namespace.useRef(mergedOpen);
      openRef.current = mergedOpen;
      var lastTriggerRef = React__namespace.useRef([]);
      lastTriggerRef.current = [];
      var internalTriggerOpen = useEvent(function(nextOpen) {
        var _lastTriggerRef$curre;
        setMergedOpen(nextOpen);
        if (((_lastTriggerRef$curre = lastTriggerRef.current[lastTriggerRef.current.length - 1]) !== null && _lastTriggerRef$curre !== void 0 ? _lastTriggerRef$curre : mergedOpen) !== nextOpen) {
          lastTriggerRef.current.push(nextOpen);
          onPopupVisibleChange === null || onPopupVisibleChange === void 0 || onPopupVisibleChange(nextOpen);
        }
      });
      var delayRef = React__namespace.useRef();
      var clearDelay = function clearDelay2() {
        clearTimeout(delayRef.current);
      };
      var triggerOpen = function triggerOpen2(nextOpen) {
        var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        clearDelay();
        if (delay === 0) {
          internalTriggerOpen(nextOpen);
        } else {
          delayRef.current = setTimeout(function() {
            internalTriggerOpen(nextOpen);
          }, delay * 1e3);
        }
      };
      React__namespace.useEffect(function() {
        return clearDelay;
      }, []);
      var _React$useState9 = React__namespace.useState(false), _React$useState10 = _slicedToArray(_React$useState9, 2), inMotion = _React$useState10[0], setInMotion = _React$useState10[1];
      useLayoutEffect(function(firstMount) {
        if (!firstMount || mergedOpen) {
          setInMotion(true);
        }
      }, [mergedOpen]);
      var _React$useState11 = React__namespace.useState(null), _React$useState12 = _slicedToArray(_React$useState11, 2), motionPrepareResolve = _React$useState12[0], setMotionPrepareResolve = _React$useState12[1];
      var _React$useState13 = React__namespace.useState([0, 0]), _React$useState14 = _slicedToArray(_React$useState13, 2), mousePos = _React$useState14[0], setMousePos = _React$useState14[1];
      var setMousePosByEvent = function setMousePosByEvent2(event) {
        setMousePos([event.clientX, event.clientY]);
      };
      var _useAlign = useAlign(mergedOpen, popupEle, alignPoint ? mousePos : targetEle, popupPlacement, builtinPlacements, popupAlign, onPopupAlign), _useAlign2 = _slicedToArray(_useAlign, 11), ready = _useAlign2[0], offsetX = _useAlign2[1], offsetY = _useAlign2[2], offsetR = _useAlign2[3], offsetB = _useAlign2[4], arrowX = _useAlign2[5], arrowY = _useAlign2[6], scaleX = _useAlign2[7], scaleY = _useAlign2[8], alignInfo = _useAlign2[9], onAlign = _useAlign2[10];
      var _useAction = useAction(mobile, action, showAction, hideAction), _useAction2 = _slicedToArray(_useAction, 2), showActions = _useAction2[0], hideActions = _useAction2[1];
      var clickToShow = showActions.has("click");
      var clickToHide = hideActions.has("click") || hideActions.has("contextMenu");
      var triggerAlign = useEvent(function() {
        if (!inMotion) {
          onAlign();
        }
      });
      var onScroll = function onScroll2() {
        if (openRef.current && alignPoint && clickToHide) {
          triggerOpen(false);
        }
      };
      useWatch(mergedOpen, targetEle, popupEle, triggerAlign, onScroll);
      useLayoutEffect(function() {
        triggerAlign();
      }, [mousePos, popupPlacement]);
      useLayoutEffect(function() {
        if (mergedOpen && !(builtinPlacements !== null && builtinPlacements !== void 0 && builtinPlacements[popupPlacement])) {
          triggerAlign();
        }
      }, [JSON.stringify(popupAlign)]);
      var alignedClassName = React__namespace.useMemo(function() {
        var baseClassName = getAlignPopupClassName(builtinPlacements, prefixCls, alignInfo, alignPoint);
        return classNames(baseClassName, getPopupClassNameFromAlign === null || getPopupClassNameFromAlign === void 0 ? void 0 : getPopupClassNameFromAlign(alignInfo));
      }, [alignInfo, getPopupClassNameFromAlign, builtinPlacements, prefixCls, alignPoint]);
      React__namespace.useImperativeHandle(ref, function() {
        return {
          nativeElement: externalForwardRef.current,
          popupElement: externalPopupRef.current,
          forceAlign: triggerAlign
        };
      });
      var _React$useState15 = React__namespace.useState(0), _React$useState16 = _slicedToArray(_React$useState15, 2), targetWidth = _React$useState16[0], setTargetWidth = _React$useState16[1];
      var _React$useState17 = React__namespace.useState(0), _React$useState18 = _slicedToArray(_React$useState17, 2), targetHeight = _React$useState18[0], setTargetHeight = _React$useState18[1];
      var syncTargetSize = function syncTargetSize2() {
        if (stretch && targetEle) {
          var rect = targetEle.getBoundingClientRect();
          setTargetWidth(rect.width);
          setTargetHeight(rect.height);
        }
      };
      var onTargetResize = function onTargetResize2() {
        syncTargetSize();
        triggerAlign();
      };
      var onVisibleChanged = function onVisibleChanged2(visible) {
        setInMotion(false);
        onAlign();
        afterPopupVisibleChange === null || afterPopupVisibleChange === void 0 || afterPopupVisibleChange(visible);
      };
      var onPrepare = function onPrepare2() {
        return new Promise(function(resolve) {
          syncTargetSize();
          setMotionPrepareResolve(function() {
            return resolve;
          });
        });
      };
      useLayoutEffect(function() {
        if (motionPrepareResolve) {
          onAlign();
          motionPrepareResolve();
          setMotionPrepareResolve(null);
        }
      }, [motionPrepareResolve]);
      function wrapperAction(eventName, nextOpen, delay, preEvent) {
        cloneProps[eventName] = function(event) {
          var _originChildProps$eve;
          preEvent === null || preEvent === void 0 || preEvent(event);
          triggerOpen(nextOpen, delay);
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          (_originChildProps$eve = originChildProps[eventName]) === null || _originChildProps$eve === void 0 || _originChildProps$eve.call.apply(_originChildProps$eve, [originChildProps, event].concat(args));
        };
      }
      if (clickToShow || clickToHide) {
        cloneProps.onClick = function(event) {
          var _originChildProps$onC;
          if (openRef.current && clickToHide) {
            triggerOpen(false);
          } else if (!openRef.current && clickToShow) {
            setMousePosByEvent(event);
            triggerOpen(true);
          }
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          (_originChildProps$onC = originChildProps.onClick) === null || _originChildProps$onC === void 0 || _originChildProps$onC.call.apply(_originChildProps$onC, [originChildProps, event].concat(args));
        };
      }
      useWinClick(mergedOpen, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen);
      var hoverToShow = showActions.has("hover");
      var hoverToHide = hideActions.has("hover");
      var onPopupMouseEnter;
      var onPopupMouseLeave;
      if (hoverToShow) {
        wrapperAction("onMouseEnter", true, mouseEnterDelay, function(event) {
          setMousePosByEvent(event);
        });
        wrapperAction("onPointerEnter", true, mouseEnterDelay, function(event) {
          setMousePosByEvent(event);
        });
        onPopupMouseEnter = function onPopupMouseEnter2(event) {
          if ((mergedOpen || inMotion) && popupEle !== null && popupEle !== void 0 && popupEle.contains(event.target)) {
            triggerOpen(true, mouseEnterDelay);
          }
        };
        if (alignPoint) {
          cloneProps.onMouseMove = function(event) {
            var _originChildProps$onM;
            (_originChildProps$onM = originChildProps.onMouseMove) === null || _originChildProps$onM === void 0 || _originChildProps$onM.call(originChildProps, event);
          };
        }
      }
      if (hoverToHide) {
        wrapperAction("onMouseLeave", false, mouseLeaveDelay);
        wrapperAction("onPointerLeave", false, mouseLeaveDelay);
        onPopupMouseLeave = function onPopupMouseLeave2() {
          triggerOpen(false, mouseLeaveDelay);
        };
      }
      if (showActions.has("focus")) {
        wrapperAction("onFocus", true, focusDelay);
      }
      if (hideActions.has("focus")) {
        wrapperAction("onBlur", false, blurDelay);
      }
      if (showActions.has("contextMenu")) {
        cloneProps.onContextMenu = function(event) {
          var _originChildProps$onC2;
          if (openRef.current && hideActions.has("contextMenu")) {
            triggerOpen(false);
          } else {
            setMousePosByEvent(event);
            triggerOpen(true);
          }
          event.preventDefault();
          for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args[_key3 - 1] = arguments[_key3];
          }
          (_originChildProps$onC2 = originChildProps.onContextMenu) === null || _originChildProps$onC2 === void 0 || _originChildProps$onC2.call.apply(_originChildProps$onC2, [originChildProps, event].concat(args));
        };
      }
      if (className) {
        cloneProps.className = classNames(originChildProps.className, className);
      }
      var mergedChildrenProps = _objectSpread2(_objectSpread2({}, originChildProps), cloneProps);
      var passedProps = {};
      var passedEventList = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
      passedEventList.forEach(function(eventName) {
        if (restProps[eventName]) {
          passedProps[eventName] = function() {
            var _mergedChildrenProps$;
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }
            (_mergedChildrenProps$ = mergedChildrenProps[eventName]) === null || _mergedChildrenProps$ === void 0 || _mergedChildrenProps$.call.apply(_mergedChildrenProps$, [mergedChildrenProps].concat(args));
            restProps[eventName].apply(restProps, args);
          };
        }
      });
      var triggerNode = /* @__PURE__ */ React__namespace.cloneElement(child, _objectSpread2(_objectSpread2({}, mergedChildrenProps), passedProps));
      var arrowPos = {
        x: arrowX,
        y: arrowY
      };
      var innerArrow = arrow ? _objectSpread2({}, arrow !== true ? arrow : {}) : null;
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(RefResizeObserver, {
        disabled: !mergedOpen,
        ref: setTargetRef,
        onResize: onTargetResize
      }, /* @__PURE__ */ React__namespace.createElement(TriggerWrapper, {
        getTriggerDOMNode
      }, triggerNode)), /* @__PURE__ */ React__namespace.createElement(TriggerContext.Provider, {
        value: context
      }, /* @__PURE__ */ React__namespace.createElement(Popup$1, {
        portal: PortalComponent,
        ref: setPopupRef,
        prefixCls,
        popup,
        className: classNames(popupClassName, alignedClassName),
        style: popupStyle,
        target: targetEle,
        onMouseEnter: onPopupMouseEnter,
        onMouseLeave: onPopupMouseLeave,
        onPointerEnter: onPopupMouseEnter,
        zIndex,
        open: mergedOpen,
        keepDom: inMotion,
        fresh,
        onClick: onPopupClick,
        mask,
        motion: mergePopupMotion,
        maskMotion: mergeMaskMotion,
        onVisibleChanged,
        onPrepare,
        forceRender,
        autoDestroy: mergedAutoDestroy,
        getPopupContainer,
        align: alignInfo,
        arrow: innerArrow,
        arrowPos,
        ready,
        offsetX,
        offsetY,
        offsetR,
        offsetB,
        onAlign: triggerAlign,
        stretch,
        targetWidth: targetWidth / scaleX,
        targetHeight: targetHeight / scaleY
      })));
    });
    return Trigger2;
  }
  const Trigger = generateTrigger(Portal);
  const Empty$1 = () => {
    const [, token2] = useToken();
    const bgColor = new TinyColor(token2.colorBgBase);
    const themeStyle = bgColor.toHsl().l < 0.5 ? {
      opacity: 0.65
    } : {};
    return /* @__PURE__ */ React__namespace.createElement("svg", {
      style: themeStyle,
      width: "184",
      height: "152",
      viewBox: "0 0 184 152",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React__namespace.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /* @__PURE__ */ React__namespace.createElement("g", {
      transform: "translate(24 31.67)"
    }, /* @__PURE__ */ React__namespace.createElement("ellipse", {
      fillOpacity: ".8",
      fill: "#F5F5F7",
      cx: "67.797",
      cy: "106.89",
      rx: "67.797",
      ry: "12.668"
    }), /* @__PURE__ */ React__namespace.createElement("path", {
      d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
      fill: "#AEB8C2"
    }), /* @__PURE__ */ React__namespace.createElement("path", {
      d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
      fill: "url(#linearGradient-1)",
      transform: "translate(13.56)"
    }), /* @__PURE__ */ React__namespace.createElement("path", {
      d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
      fill: "#F5F5F7"
    }), /* @__PURE__ */ React__namespace.createElement("path", {
      d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
      fill: "#DCE0E6"
    })), /* @__PURE__ */ React__namespace.createElement("path", {
      d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
      fill: "#DCE0E6"
    }), /* @__PURE__ */ React__namespace.createElement("g", {
      transform: "translate(149.65 15.383)",
      fill: "#FFF"
    }, /* @__PURE__ */ React__namespace.createElement("ellipse", {
      cx: "20.654",
      cy: "3.167",
      rx: "2.849",
      ry: "2.815"
    }), /* @__PURE__ */ React__namespace.createElement("path", {
      d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
    }))));
  };
  const Simple = () => {
    const [, token2] = useToken();
    const {
      colorFill,
      colorFillTertiary,
      colorFillQuaternary,
      colorBgContainer
    } = token2;
    const {
      borderColor,
      shadowColor,
      contentColor
    } = React.useMemo(() => ({
      borderColor: new TinyColor(colorFill).onBackground(colorBgContainer).toHexShortString(),
      shadowColor: new TinyColor(colorFillTertiary).onBackground(colorBgContainer).toHexShortString(),
      contentColor: new TinyColor(colorFillQuaternary).onBackground(colorBgContainer).toHexShortString()
    }), [colorFill, colorFillTertiary, colorFillQuaternary, colorBgContainer]);
    return /* @__PURE__ */ React__namespace.createElement("svg", {
      width: "64",
      height: "41",
      viewBox: "0 0 64 41",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React__namespace.createElement("g", {
      transform: "translate(0 1)",
      fill: "none",
      fillRule: "evenodd"
    }, /* @__PURE__ */ React__namespace.createElement("ellipse", {
      fill: shadowColor,
      cx: "32",
      cy: "33",
      rx: "32",
      ry: "7"
    }), /* @__PURE__ */ React__namespace.createElement("g", {
      fillRule: "nonzero",
      stroke: borderColor
    }, /* @__PURE__ */ React__namespace.createElement("path", {
      d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }), /* @__PURE__ */ React__namespace.createElement("path", {
      d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
      fill: contentColor
    }))));
  };
  const genSharedEmptyStyle = (token2) => {
    const {
      componentCls,
      margin,
      marginXS,
      marginXL,
      fontSize,
      lineHeight
    } = token2;
    return {
      [componentCls]: {
        marginInline: marginXS,
        fontSize,
        lineHeight,
        textAlign: "center",
        // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
        [`${componentCls}-image`]: {
          height: token2.emptyImgHeight,
          marginBottom: marginXS,
          opacity: token2.opacityImage,
          img: {
            height: "100%"
          },
          svg: {
            maxWidth: "100%",
            height: "100%",
            margin: "auto"
          }
        },
        [`${componentCls}-description`]: {
          color: token2.colorText
        },
        // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
        [`${componentCls}-footer`]: {
          marginTop: margin
        },
        "&-normal": {
          marginBlock: marginXL,
          color: token2.colorTextDescription,
          [`${componentCls}-description`]: {
            color: token2.colorTextDescription
          },
          [`${componentCls}-image`]: {
            height: token2.emptyImgHeightMD
          }
        },
        "&-small": {
          marginBlock: marginXS,
          color: token2.colorTextDescription,
          [`${componentCls}-image`]: {
            height: token2.emptyImgHeightSM
          }
        }
      }
    };
  };
  const useStyle$5 = genStyleHooks("Empty", (token2) => {
    const {
      componentCls,
      controlHeightLG,
      calc
    } = token2;
    const emptyToken = merge(token2, {
      emptyImgCls: `${componentCls}-img`,
      emptyImgHeight: calc(controlHeightLG).mul(2.5).equal(),
      emptyImgHeightMD: controlHeightLG,
      emptyImgHeightSM: calc(controlHeightLG).mul(0.875).equal()
    });
    return [genSharedEmptyStyle(emptyToken)];
  });
  var __rest$7 = function(s, e2) {
    var t2 = {};
    for (var p2 in s)
      if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
          t2[p2[i]] = s[p2[i]];
      }
    return t2;
  };
  const defaultEmptyImg = /* @__PURE__ */ React__namespace.createElement(Empty$1, null);
  const simpleEmptyImg = /* @__PURE__ */ React__namespace.createElement(Simple, null);
  const Empty = (_a2) => {
    var {
      className,
      rootClassName,
      prefixCls: customizePrefixCls,
      image = defaultEmptyImg,
      description,
      children,
      imageStyle,
      style: style2
    } = _a2, restProps = __rest$7(_a2, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle", "style"]);
    const {
      getPrefixCls,
      direction,
      empty
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("empty", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$5(prefixCls);
    const [locale2] = useLocale("Empty");
    const des = typeof description !== "undefined" ? description : locale2 === null || locale2 === void 0 ? void 0 : locale2.description;
    const alt = typeof des === "string" ? des : "empty";
    let imageNode = null;
    if (typeof image === "string") {
      imageNode = /* @__PURE__ */ React__namespace.createElement("img", {
        alt,
        src: image
      });
    } else {
      imageNode = image;
    }
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", Object.assign({
      className: classNames(hashId, cssVarCls, prefixCls, empty === null || empty === void 0 ? void 0 : empty.className, {
        [`${prefixCls}-normal`]: image === simpleEmptyImg,
        [`${prefixCls}-rtl`]: direction === "rtl"
      }, className, rootClassName),
      style: Object.assign(Object.assign({}, empty === null || empty === void 0 ? void 0 : empty.style), style2)
    }, restProps), /* @__PURE__ */ React__namespace.createElement("div", {
      className: `${prefixCls}-image`,
      style: imageStyle
    }, imageNode), des && /* @__PURE__ */ React__namespace.createElement("div", {
      className: `${prefixCls}-description`
    }, des), children && /* @__PURE__ */ React__namespace.createElement("div", {
      className: `${prefixCls}-footer`
    }, children)));
  };
  Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
  Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
  function Popup(props) {
    var children = props.children, prefixCls = props.prefixCls, id = props.id, overlayInnerStyle = props.overlayInnerStyle, className = props.className, style2 = props.style;
    return /* @__PURE__ */ React__namespace.createElement("div", {
      className: classNames("".concat(prefixCls, "-content"), className),
      style: style2
    }, /* @__PURE__ */ React__namespace.createElement("div", {
      className: "".concat(prefixCls, "-inner"),
      id,
      role: "tooltip",
      style: overlayInnerStyle
    }, typeof children === "function" ? children() : children));
  }
  var autoAdjustOverflowTopBottom = {
    shiftX: 64,
    adjustY: 1
  };
  var autoAdjustOverflowLeftRight = {
    adjustX: 1,
    shiftY: true
  };
  var targetOffset = [0, 0];
  var placements = {
    left: {
      points: ["cr", "cl"],
      overflow: autoAdjustOverflowLeftRight,
      offset: [-4, 0],
      targetOffset
    },
    right: {
      points: ["cl", "cr"],
      overflow: autoAdjustOverflowLeftRight,
      offset: [4, 0],
      targetOffset
    },
    top: {
      points: ["bc", "tc"],
      overflow: autoAdjustOverflowTopBottom,
      offset: [0, -4],
      targetOffset
    },
    bottom: {
      points: ["tc", "bc"],
      overflow: autoAdjustOverflowTopBottom,
      offset: [0, 4],
      targetOffset
    },
    topLeft: {
      points: ["bl", "tl"],
      overflow: autoAdjustOverflowTopBottom,
      offset: [0, -4],
      targetOffset
    },
    leftTop: {
      points: ["tr", "tl"],
      overflow: autoAdjustOverflowLeftRight,
      offset: [-4, 0],
      targetOffset
    },
    topRight: {
      points: ["br", "tr"],
      overflow: autoAdjustOverflowTopBottom,
      offset: [0, -4],
      targetOffset
    },
    rightTop: {
      points: ["tl", "tr"],
      overflow: autoAdjustOverflowLeftRight,
      offset: [4, 0],
      targetOffset
    },
    bottomRight: {
      points: ["tr", "br"],
      overflow: autoAdjustOverflowTopBottom,
      offset: [0, 4],
      targetOffset
    },
    rightBottom: {
      points: ["bl", "br"],
      overflow: autoAdjustOverflowLeftRight,
      offset: [4, 0],
      targetOffset
    },
    bottomLeft: {
      points: ["tl", "bl"],
      overflow: autoAdjustOverflowTopBottom,
      offset: [0, 4],
      targetOffset
    },
    leftBottom: {
      points: ["br", "bl"],
      overflow: autoAdjustOverflowLeftRight,
      offset: [-4, 0],
      targetOffset
    }
  };
  var _excluded$2 = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"];
  var Tooltip$1 = function Tooltip(props, ref) {
    var overlayClassName = props.overlayClassName, _props$trigger = props.trigger, trigger = _props$trigger === void 0 ? ["hover"] : _props$trigger, _props$mouseEnterDela = props.mouseEnterDelay, mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0 : _props$mouseEnterDela, _props$mouseLeaveDela = props.mouseLeaveDelay, mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela, overlayStyle = props.overlayStyle, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-tooltip" : _props$prefixCls, children = props.children, onVisibleChange = props.onVisibleChange, afterVisibleChange = props.afterVisibleChange, transitionName = props.transitionName, animation = props.animation, motion = props.motion, _props$placement = props.placement, placement = _props$placement === void 0 ? "right" : _props$placement, _props$align = props.align, align = _props$align === void 0 ? {} : _props$align, _props$destroyTooltip = props.destroyTooltipOnHide, destroyTooltipOnHide = _props$destroyTooltip === void 0 ? false : _props$destroyTooltip, defaultVisible = props.defaultVisible, getTooltipContainer = props.getTooltipContainer, overlayInnerStyle = props.overlayInnerStyle;
    props.arrowContent;
    var overlay = props.overlay, id = props.id, _props$showArrow = props.showArrow, showArrow = _props$showArrow === void 0 ? true : _props$showArrow, restProps = _objectWithoutProperties(props, _excluded$2);
    var triggerRef = React.useRef(null);
    React.useImperativeHandle(ref, function() {
      return triggerRef.current;
    });
    var extraProps = _objectSpread2({}, restProps);
    if ("visible" in props) {
      extraProps.popupVisible = props.visible;
    }
    var getPopupElement = function getPopupElement2() {
      return /* @__PURE__ */ React__namespace.createElement(Popup, {
        key: "content",
        prefixCls,
        id,
        overlayInnerStyle
      }, overlay);
    };
    return /* @__PURE__ */ React__namespace.createElement(Trigger, _extends({
      popupClassName: overlayClassName,
      prefixCls,
      popup: getPopupElement,
      action: trigger,
      builtinPlacements: placements,
      popupPlacement: placement,
      ref: triggerRef,
      popupAlign: align,
      getPopupContainer: getTooltipContainer,
      onPopupVisibleChange: onVisibleChange,
      afterPopupVisibleChange: afterVisibleChange,
      popupTransitionName: transitionName,
      popupAnimation: animation,
      popupMotion: motion,
      defaultPopupVisible: defaultVisible,
      autoDestroy: destroyTooltipOnHide,
      mouseLeaveDelay,
      popupStyle: overlayStyle,
      mouseEnterDelay,
      arrow: showArrow
    }, extraProps), children);
  };
  const Tooltip$2 = /* @__PURE__ */ React.forwardRef(Tooltip$1);
  function getArrowToken(token2) {
    const {
      sizePopupArrow,
      borderRadiusXS,
      borderRadiusOuter
    } = token2;
    const unitWidth = sizePopupArrow / 2;
    const ax = 0;
    const ay = unitWidth;
    const bx = borderRadiusOuter * 1 / Math.sqrt(2);
    const by = unitWidth - borderRadiusOuter * (1 - 1 / Math.sqrt(2));
    const cx = unitWidth - borderRadiusXS * (1 / Math.sqrt(2));
    const cy = borderRadiusOuter * (Math.sqrt(2) - 1) + borderRadiusXS * (1 / Math.sqrt(2));
    const dx = 2 * unitWidth - cx;
    const dy = cy;
    const ex = 2 * unitWidth - bx;
    const ey = by;
    const fx = 2 * unitWidth - ax;
    const fy = ay;
    const shadowWidth = unitWidth * Math.sqrt(2) + borderRadiusOuter * (Math.sqrt(2) - 2);
    const polygonOffset = borderRadiusOuter * (Math.sqrt(2) - 1);
    const arrowPolygon = `polygon(${polygonOffset}px 100%, 50% ${polygonOffset}px, ${2 * unitWidth - polygonOffset}px 100%, ${polygonOffset}px 100%)`;
    const arrowPath = `path('M ${ax} ${ay} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${bx} ${by} L ${cx} ${cy} A ${borderRadiusXS} ${borderRadiusXS} 0 0 1 ${dx} ${dy} L ${ex} ${ey} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${fx} ${fy} Z')`;
    return {
      arrowShadowWidth: shadowWidth,
      arrowPath,
      arrowPolygon
    };
  }
  const genRoundedArrow = (token2, bgColor, boxShadow) => {
    const {
      sizePopupArrow,
      arrowPolygon,
      arrowPath,
      arrowShadowWidth,
      borderRadiusXS,
      calc
    } = token2;
    return {
      pointerEvents: "none",
      width: sizePopupArrow,
      height: sizePopupArrow,
      overflow: "hidden",
      "&::before": {
        position: "absolute",
        bottom: 0,
        insetInlineStart: 0,
        width: sizePopupArrow,
        height: calc(sizePopupArrow).div(2).equal(),
        background: bgColor,
        clipPath: {
          _multi_value_: true,
          value: [arrowPolygon, arrowPath]
        },
        content: '""'
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: arrowShadowWidth,
        height: arrowShadowWidth,
        bottom: 0,
        insetInline: 0,
        margin: "auto",
        borderRadius: {
          _skip_check_: true,
          value: `0 0 ${unit$1(borderRadiusXS)} 0`
        },
        transform: "translateY(50%) rotate(-135deg)",
        boxShadow,
        zIndex: 0,
        background: "transparent"
      }
    };
  };
  const MAX_VERTICAL_CONTENT_RADIUS = 8;
  function getArrowOffsetToken(options) {
    const {
      contentRadius,
      limitVerticalRadius
    } = options;
    const arrowOffset = contentRadius > 12 ? contentRadius + 2 : 12;
    const arrowOffsetVertical = limitVerticalRadius ? MAX_VERTICAL_CONTENT_RADIUS : arrowOffset;
    return {
      arrowOffsetHorizontal: arrowOffset,
      arrowOffsetVertical
    };
  }
  function isInject(valid, code) {
    if (!valid) {
      return {};
    }
    return code;
  }
  function getArrowStyle(token2, colorBg, options) {
    const {
      componentCls,
      boxShadowPopoverArrow,
      arrowOffsetVertical,
      arrowOffsetHorizontal
    } = token2;
    const {
      arrowDistance = 0,
      arrowPlacement = {
        left: true,
        right: true,
        top: true,
        bottom: true
      }
    } = {};
    return {
      [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({
        // ============================ Basic ============================
        [`${componentCls}-arrow`]: [Object.assign(Object.assign({
          position: "absolute",
          zIndex: 1,
          display: "block"
        }, genRoundedArrow(token2, colorBg, boxShadowPopoverArrow)), {
          "&:before": {
            background: colorBg
          }
        })]
      }, isInject(!!arrowPlacement.top, {
        [[`&-placement-top > ${componentCls}-arrow`, `&-placement-topLeft > ${componentCls}-arrow`, `&-placement-topRight > ${componentCls}-arrow`].join(",")]: {
          bottom: arrowDistance,
          transform: "translateY(100%) rotate(180deg)"
        },
        [`&-placement-top > ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: "50%"
          },
          transform: "translateX(-50%) translateY(100%) rotate(180deg)"
        },
        [`&-placement-topLeft > ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        },
        [`&-placement-topRight > ${componentCls}-arrow`]: {
          right: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        }
      })), isInject(!!arrowPlacement.bottom, {
        [[`&-placement-bottom > ${componentCls}-arrow`, `&-placement-bottomLeft > ${componentCls}-arrow`, `&-placement-bottomRight > ${componentCls}-arrow`].join(",")]: {
          top: arrowDistance,
          transform: `translateY(-100%)`
        },
        [`&-placement-bottom > ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: "50%"
          },
          transform: `translateX(-50%) translateY(-100%)`
        },
        [`&-placement-bottomLeft > ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        },
        [`&-placement-bottomRight > ${componentCls}-arrow`]: {
          right: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        }
      })), isInject(!!arrowPlacement.left, {
        [[`&-placement-left > ${componentCls}-arrow`, `&-placement-leftTop > ${componentCls}-arrow`, `&-placement-leftBottom > ${componentCls}-arrow`].join(",")]: {
          right: {
            _skip_check_: true,
            value: arrowDistance
          },
          transform: "translateX(100%) rotate(90deg)"
        },
        [`&-placement-left > ${componentCls}-arrow`]: {
          top: {
            _skip_check_: true,
            value: "50%"
          },
          transform: "translateY(-50%) translateX(100%) rotate(90deg)"
        },
        [`&-placement-leftTop > ${componentCls}-arrow`]: {
          top: arrowOffsetVertical
        },
        [`&-placement-leftBottom > ${componentCls}-arrow`]: {
          bottom: arrowOffsetVertical
        }
      })), isInject(!!arrowPlacement.right, {
        [[`&-placement-right > ${componentCls}-arrow`, `&-placement-rightTop > ${componentCls}-arrow`, `&-placement-rightBottom > ${componentCls}-arrow`].join(",")]: {
          left: {
            _skip_check_: true,
            value: arrowDistance
          },
          transform: "translateX(-100%) rotate(-90deg)"
        },
        [`&-placement-right > ${componentCls}-arrow`]: {
          top: {
            _skip_check_: true,
            value: "50%"
          },
          transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
        },
        [`&-placement-rightTop > ${componentCls}-arrow`]: {
          top: arrowOffsetVertical
        },
        [`&-placement-rightBottom > ${componentCls}-arrow`]: {
          bottom: arrowOffsetVertical
        }
      }))
    };
  }
  function getOverflowOptions(placement, arrowOffset, arrowWidth, autoAdjustOverflow) {
    if (autoAdjustOverflow === false) {
      return {
        adjustX: false,
        adjustY: false
      };
    }
    const overflow = autoAdjustOverflow && typeof autoAdjustOverflow === "object" ? autoAdjustOverflow : {};
    const baseOverflow = {};
    switch (placement) {
      case "top":
      case "bottom":
        baseOverflow.shiftX = arrowOffset.arrowOffsetHorizontal * 2 + arrowWidth;
        baseOverflow.shiftY = true;
        baseOverflow.adjustY = true;
        break;
      case "left":
      case "right":
        baseOverflow.shiftY = arrowOffset.arrowOffsetVertical * 2 + arrowWidth;
        baseOverflow.shiftX = true;
        baseOverflow.adjustX = true;
        break;
    }
    const mergedOverflow = Object.assign(Object.assign({}, baseOverflow), overflow);
    if (!mergedOverflow.shiftX) {
      mergedOverflow.adjustX = true;
    }
    if (!mergedOverflow.shiftY) {
      mergedOverflow.adjustY = true;
    }
    return mergedOverflow;
  }
  const PlacementAlignMap = {
    left: {
      points: ["cr", "cl"]
    },
    right: {
      points: ["cl", "cr"]
    },
    top: {
      points: ["bc", "tc"]
    },
    bottom: {
      points: ["tc", "bc"]
    },
    topLeft: {
      points: ["bl", "tl"]
    },
    leftTop: {
      points: ["tr", "tl"]
    },
    topRight: {
      points: ["br", "tr"]
    },
    rightTop: {
      points: ["tl", "tr"]
    },
    bottomRight: {
      points: ["tr", "br"]
    },
    rightBottom: {
      points: ["bl", "br"]
    },
    bottomLeft: {
      points: ["tl", "bl"]
    },
    leftBottom: {
      points: ["br", "bl"]
    }
  };
  const ArrowCenterPlacementAlignMap = {
    topLeft: {
      points: ["bl", "tc"]
    },
    leftTop: {
      points: ["tr", "cl"]
    },
    topRight: {
      points: ["br", "tc"]
    },
    rightTop: {
      points: ["tl", "cr"]
    },
    bottomRight: {
      points: ["tr", "bc"]
    },
    rightBottom: {
      points: ["bl", "cr"]
    },
    bottomLeft: {
      points: ["tl", "bc"]
    },
    leftBottom: {
      points: ["br", "cl"]
    }
  };
  const DisableAutoArrowList = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
  function getPlacements(config) {
    const {
      arrowWidth,
      autoAdjustOverflow,
      arrowPointAtCenter,
      offset,
      borderRadius,
      visibleFirst
    } = config;
    const halfArrowWidth = arrowWidth / 2;
    const placementMap = {};
    Object.keys(PlacementAlignMap).forEach((key) => {
      const template = arrowPointAtCenter && ArrowCenterPlacementAlignMap[key] || PlacementAlignMap[key];
      const placementInfo = Object.assign(Object.assign({}, template), {
        offset: [0, 0],
        dynamicInset: true
      });
      placementMap[key] = placementInfo;
      if (DisableAutoArrowList.has(key)) {
        placementInfo.autoArrow = false;
      }
      switch (key) {
        case "top":
        case "topLeft":
        case "topRight":
          placementInfo.offset[1] = -halfArrowWidth - offset;
          break;
        case "bottom":
        case "bottomLeft":
        case "bottomRight":
          placementInfo.offset[1] = halfArrowWidth + offset;
          break;
        case "left":
        case "leftTop":
        case "leftBottom":
          placementInfo.offset[0] = -halfArrowWidth - offset;
          break;
        case "right":
        case "rightTop":
        case "rightBottom":
          placementInfo.offset[0] = halfArrowWidth + offset;
          break;
      }
      const arrowOffset = getArrowOffsetToken({
        contentRadius: borderRadius,
        limitVerticalRadius: true
      });
      if (arrowPointAtCenter) {
        switch (key) {
          case "topLeft":
          case "bottomLeft":
            placementInfo.offset[0] = -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
            break;
          case "topRight":
          case "bottomRight":
            placementInfo.offset[0] = arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
            break;
          case "leftTop":
          case "rightTop":
            placementInfo.offset[1] = -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
            break;
          case "leftBottom":
          case "rightBottom":
            placementInfo.offset[1] = arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
            break;
        }
      }
      placementInfo.overflow = getOverflowOptions(key, arrowOffset, arrowWidth, autoAdjustOverflow);
      if (visibleFirst) {
        placementInfo.htmlRegion = "visibleFirst";
      }
    });
    return placementMap;
  }
  const genTooltipStyle = (token2) => {
    const {
      componentCls,
      // ant-tooltip
      tooltipMaxWidth,
      tooltipColor,
      tooltipBg,
      tooltipBorderRadius,
      zIndexPopup,
      controlHeight,
      boxShadowSecondary,
      paddingSM,
      paddingXS
    } = token2;
    return [
      {
        [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token2)), {
          position: "absolute",
          zIndex: zIndexPopup,
          display: "block",
          width: "max-content",
          maxWidth: tooltipMaxWidth,
          visibility: "visible",
          transformOrigin: `var(--arrow-x, 50%) var(--arrow-y, 50%)`,
          "&-hidden": {
            display: "none"
          },
          "--antd-arrow-background-color": tooltipBg,
          // Wrapper for the tooltip content
          [`${componentCls}-inner`]: {
            minWidth: controlHeight,
            minHeight: controlHeight,
            padding: `${unit$1(token2.calc(paddingSM).div(2).equal())} ${unit$1(paddingXS)}`,
            color: tooltipColor,
            textAlign: "start",
            textDecoration: "none",
            wordWrap: "break-word",
            backgroundColor: tooltipBg,
            borderRadius: tooltipBorderRadius,
            boxShadow: boxShadowSecondary,
            boxSizing: "border-box"
          },
          // Limit left and right placement radius
          [[`&-placement-left`, `&-placement-leftTop`, `&-placement-leftBottom`, `&-placement-right`, `&-placement-rightTop`, `&-placement-rightBottom`].join(",")]: {
            [`${componentCls}-inner`]: {
              borderRadius: token2.min(tooltipBorderRadius, MAX_VERTICAL_CONTENT_RADIUS)
            }
          },
          [`${componentCls}-content`]: {
            position: "relative"
          }
        }), genPresetColor(token2, (colorKey, _ref) => {
          let {
            darkColor
          } = _ref;
          return {
            [`&${componentCls}-${colorKey}`]: {
              [`${componentCls}-inner`]: {
                backgroundColor: darkColor
              },
              [`${componentCls}-arrow`]: {
                "--antd-arrow-background-color": darkColor
              }
            }
          };
        })), {
          // RTL
          "&-rtl": {
            direction: "rtl"
          }
        })
      },
      // Arrow Style
      getArrowStyle(token2, "var(--antd-arrow-background-color)"),
      // Pure Render
      {
        [`${componentCls}-pure`]: {
          position: "relative",
          maxWidth: "none",
          margin: token2.sizePopupArrow
        }
      }
    ];
  };
  const prepareComponentToken$4 = (token2) => Object.assign(Object.assign({
    zIndexPopup: token2.zIndexPopupBase + 70
  }, getArrowOffsetToken({
    contentRadius: token2.borderRadius,
    limitVerticalRadius: true
  })), getArrowToken(merge(token2, {
    borderRadiusOuter: Math.min(token2.borderRadiusOuter, 4)
  })));
  const useStyle$4 = function(prefixCls) {
    let injectStyle = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    const useStyle2 = genStyleHooks("Tooltip", (token2) => {
      const {
        borderRadius,
        colorTextLightSolid,
        colorBgSpotlight
      } = token2;
      const TooltipToken = merge(token2, {
        // default variables
        tooltipMaxWidth: 250,
        tooltipColor: colorTextLightSolid,
        tooltipBorderRadius: borderRadius,
        tooltipBg: colorBgSpotlight
      });
      return [genTooltipStyle(TooltipToken), initZoomMotion(token2, "zoom-big-fast")];
    }, prepareComponentToken$4, {
      resetStyle: false,
      // Popover use Tooltip as internal component. We do not need to handle this.
      injectStyle
    });
    return useStyle2(prefixCls);
  };
  const inverseColors = PresetColors.map((color) => `${color}-inverse`);
  const PresetStatusColorTypes = ["success", "processing", "error", "default", "warning"];
  function isPresetColor(color) {
    let includeInverse = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (includeInverse) {
      return [].concat(_toConsumableArray(inverseColors), _toConsumableArray(PresetColors)).includes(color);
    }
    return PresetColors.includes(color);
  }
  function isPresetStatusColor(color) {
    return PresetStatusColorTypes.includes(color);
  }
  function parseColor(prefixCls, color) {
    const isInternalColor = isPresetColor(color);
    const className = classNames({
      [`${prefixCls}-${color}`]: color && isInternalColor
    });
    const overlayStyle = {};
    const arrowStyle = {};
    if (color && !isInternalColor) {
      overlayStyle.background = color;
      arrowStyle["--antd-arrow-background-color"] = color;
    }
    return {
      className,
      overlayStyle,
      arrowStyle
    };
  }
  const PurePanel = (props) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      placement = "top",
      title,
      color,
      overlayInnerStyle
    } = props;
    const {
      getPrefixCls
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("tooltip", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$4(prefixCls);
    const colorInfo = parseColor(prefixCls, color);
    const arrowContentStyle = colorInfo.arrowStyle;
    const formattedOverlayInnerStyle = Object.assign(Object.assign({}, overlayInnerStyle), colorInfo.overlayStyle);
    const cls = classNames(hashId, cssVarCls, prefixCls, `${prefixCls}-pure`, `${prefixCls}-placement-${placement}`, className, colorInfo.className);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", {
      className: cls,
      style: arrowContentStyle
    }, /* @__PURE__ */ React__namespace.createElement("div", {
      className: `${prefixCls}-arrow`
    }), /* @__PURE__ */ React__namespace.createElement(Popup, Object.assign({}, props, {
      className: hashId,
      prefixCls,
      overlayInnerStyle: formattedOverlayInnerStyle
    }), title)));
  };
  var __rest$6 = function(s, e2) {
    var t2 = {};
    for (var p2 in s)
      if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
          t2[p2[i]] = s[p2[i]];
      }
    return t2;
  };
  const InternalTooltip = /* @__PURE__ */ React__namespace.forwardRef((props, ref) => {
    var _a2, _b2;
    const {
      prefixCls: customizePrefixCls,
      openClassName,
      getTooltipContainer,
      overlayClassName,
      color,
      overlayInnerStyle,
      children,
      afterOpenChange,
      afterVisibleChange,
      destroyTooltipOnHide,
      arrow = true,
      title,
      overlay,
      builtinPlacements,
      arrowPointAtCenter = false,
      autoAdjustOverflow = true
    } = props;
    const mergedShowArrow = !!arrow;
    const [, token2] = useToken();
    const {
      getPopupContainer: getContextPopupContainer,
      getPrefixCls,
      direction
    } = React__namespace.useContext(ConfigContext);
    const warning2 = devUseWarning();
    const tooltipRef = React__namespace.useRef(null);
    const forceAlign = () => {
      var _a22;
      (_a22 = tooltipRef.current) === null || _a22 === void 0 ? void 0 : _a22.forceAlign();
    };
    React__namespace.useImperativeHandle(ref, () => ({
      forceAlign,
      forcePopupAlign: () => {
        warning2.deprecated(false, "forcePopupAlign", "forceAlign");
        forceAlign();
      }
    }));
    const [open2, setOpen] = useMergedState(false, {
      value: (_a2 = props.open) !== null && _a2 !== void 0 ? _a2 : props.visible,
      defaultValue: (_b2 = props.defaultOpen) !== null && _b2 !== void 0 ? _b2 : props.defaultVisible
    });
    const noTitle = !title && !overlay && title !== 0;
    const onOpenChange = (vis) => {
      var _a22, _b22;
      setOpen(noTitle ? false : vis);
      if (!noTitle) {
        (_a22 = props.onOpenChange) === null || _a22 === void 0 ? void 0 : _a22.call(props, vis);
        (_b22 = props.onVisibleChange) === null || _b22 === void 0 ? void 0 : _b22.call(props, vis);
      }
    };
    const tooltipPlacements = React__namespace.useMemo(() => {
      var _a22, _b22;
      let mergedArrowPointAtCenter = arrowPointAtCenter;
      if (typeof arrow === "object") {
        mergedArrowPointAtCenter = (_b22 = (_a22 = arrow.pointAtCenter) !== null && _a22 !== void 0 ? _a22 : arrow.arrowPointAtCenter) !== null && _b22 !== void 0 ? _b22 : arrowPointAtCenter;
      }
      return builtinPlacements || getPlacements({
        arrowPointAtCenter: mergedArrowPointAtCenter,
        autoAdjustOverflow,
        arrowWidth: mergedShowArrow ? token2.sizePopupArrow : 0,
        borderRadius: token2.borderRadius,
        offset: token2.marginXXS,
        visibleFirst: true
      });
    }, [arrowPointAtCenter, arrow, builtinPlacements, token2]);
    const memoOverlay = React__namespace.useMemo(() => {
      if (title === 0) {
        return title;
      }
      return overlay || title || "";
    }, [overlay, title]);
    const memoOverlayWrapper = /* @__PURE__ */ React__namespace.createElement(NoCompactStyle, null, typeof memoOverlay === "function" ? memoOverlay() : memoOverlay);
    const {
      getPopupContainer,
      placement = "top",
      mouseEnterDelay = 0.1,
      mouseLeaveDelay = 0.1,
      overlayStyle,
      rootClassName
    } = props, otherProps = __rest$6(props, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]);
    const prefixCls = getPrefixCls("tooltip", customizePrefixCls);
    const rootPrefixCls = getPrefixCls();
    const injectFromPopover = props["data-popover-inject"];
    let tempOpen = open2;
    if (!("open" in props) && !("visible" in props) && noTitle) {
      tempOpen = false;
    }
    const child = /* @__PURE__ */ React__namespace.isValidElement(children) && !isFragment(children) ? children : /* @__PURE__ */ React__namespace.createElement("span", null, children);
    const childProps = child.props;
    const childCls = !childProps.className || typeof childProps.className === "string" ? classNames(childProps.className, openClassName || `${prefixCls}-open`) : childProps.className;
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$4(prefixCls, !injectFromPopover);
    const colorInfo = parseColor(prefixCls, color);
    const arrowContentStyle = colorInfo.arrowStyle;
    const formattedOverlayInnerStyle = Object.assign(Object.assign({}, overlayInnerStyle), colorInfo.overlayStyle);
    const customOverlayClassName = classNames(overlayClassName, {
      [`${prefixCls}-rtl`]: direction === "rtl"
    }, colorInfo.className, rootClassName, hashId, cssVarCls);
    const [zIndex, contextZIndex] = useZIndex("Tooltip", otherProps.zIndex);
    const content = /* @__PURE__ */ React__namespace.createElement(Tooltip$2, Object.assign({}, otherProps, {
      zIndex,
      showArrow: mergedShowArrow,
      placement,
      mouseEnterDelay,
      mouseLeaveDelay,
      prefixCls,
      overlayClassName: customOverlayClassName,
      overlayStyle: Object.assign(Object.assign({}, arrowContentStyle), overlayStyle),
      getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
      ref: tooltipRef,
      builtinPlacements: tooltipPlacements,
      overlay: memoOverlayWrapper,
      visible: tempOpen,
      onVisibleChange: onOpenChange,
      afterVisibleChange: afterOpenChange !== null && afterOpenChange !== void 0 ? afterOpenChange : afterVisibleChange,
      overlayInnerStyle: formattedOverlayInnerStyle,
      arrowContent: /* @__PURE__ */ React__namespace.createElement("span", {
        className: `${prefixCls}-arrow-content`
      }),
      motion: {
        motionName: getTransitionName(rootPrefixCls, "zoom-big-fast", props.transitionName),
        motionDeadline: 1e3
      },
      destroyTooltipOnHide: !!destroyTooltipOnHide
    }), tempOpen ? cloneElement(child, {
      className: childCls
    }) : child);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement(zIndexContext.Provider, {
      value: contextZIndex
    }, content));
  });
  const Tooltip2 = InternalTooltip;
  Tooltip2._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
  function isPresetSize(size) {
    return ["small", "middle", "large"].includes(size);
  }
  const flexWrapValues = ["wrap", "nowrap", "wrap-reverse"];
  const justifyContentValues = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"];
  const alignItemsValues = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"];
  const genClsWrap = (prefixCls, props) => {
    const wrapCls = {};
    flexWrapValues.forEach((cssKey) => {
      wrapCls[`${prefixCls}-wrap-${cssKey}`] = props.wrap === cssKey;
    });
    return wrapCls;
  };
  const genClsAlign = (prefixCls, props) => {
    const alignCls = {};
    alignItemsValues.forEach((cssKey) => {
      alignCls[`${prefixCls}-align-${cssKey}`] = props.align === cssKey;
    });
    alignCls[`${prefixCls}-align-stretch`] = !props.align && !!props.vertical;
    return alignCls;
  };
  const genClsJustify = (prefixCls, props) => {
    const justifyCls = {};
    justifyContentValues.forEach((cssKey) => {
      justifyCls[`${prefixCls}-justify-${cssKey}`] = props.justify === cssKey;
    });
    return justifyCls;
  };
  function createFlexClassNames(prefixCls, props) {
    return classNames(Object.assign(Object.assign(Object.assign({}, genClsWrap(prefixCls, props)), genClsAlign(prefixCls, props)), genClsJustify(prefixCls, props)));
  }
  const genFlexStyle = (token2) => {
    const {
      componentCls
    } = token2;
    return {
      [componentCls]: {
        display: "flex",
        "&-vertical": {
          flexDirection: "column"
        },
        "&-rtl": {
          direction: "rtl"
        },
        "&:empty": {
          display: "none"
        }
      }
    };
  };
  const genFlexGapStyle = (token2) => {
    const {
      componentCls
    } = token2;
    return {
      [componentCls]: {
        "&-gap-small": {
          gap: token2.flexGapSM
        },
        "&-gap-middle": {
          gap: token2.flexGap
        },
        "&-gap-large": {
          gap: token2.flexGapLG
        }
      }
    };
  };
  const genFlexWrapStyle = (token2) => {
    const {
      componentCls
    } = token2;
    const wrapStyle = {};
    flexWrapValues.forEach((value) => {
      wrapStyle[`${componentCls}-wrap-${value}`] = {
        flexWrap: value
      };
    });
    return wrapStyle;
  };
  const genAlignItemsStyle = (token2) => {
    const {
      componentCls
    } = token2;
    const alignStyle = {};
    alignItemsValues.forEach((value) => {
      alignStyle[`${componentCls}-align-${value}`] = {
        alignItems: value
      };
    });
    return alignStyle;
  };
  const genJustifyContentStyle = (token2) => {
    const {
      componentCls
    } = token2;
    const justifyStyle = {};
    justifyContentValues.forEach((value) => {
      justifyStyle[`${componentCls}-justify-${value}`] = {
        justifyContent: value
      };
    });
    return justifyStyle;
  };
  const prepareComponentToken$3 = () => ({});
  const useStyle$3 = genStyleHooks("Flex", (token2) => {
    const {
      paddingXS,
      padding,
      paddingLG
    } = token2;
    const flexToken = merge(token2, {
      flexGapSM: paddingXS,
      flexGap: padding,
      flexGapLG: paddingLG
    });
    return [genFlexStyle(flexToken), genFlexGapStyle(flexToken), genFlexWrapStyle(flexToken), genAlignItemsStyle(flexToken), genJustifyContentStyle(flexToken)];
  }, prepareComponentToken$3, {
    // Flex component don't apply extra font style
    // https://github.com/ant-design/ant-design/issues/46403
    resetStyle: false
  });
  var __rest$5 = function(s, e2) {
    var t2 = {};
    for (var p2 in s)
      if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
          t2[p2[i]] = s[p2[i]];
      }
    return t2;
  };
  const Flex = /* @__PURE__ */ React.forwardRef((props, ref) => {
    const {
      prefixCls: customizePrefixCls,
      rootClassName,
      className,
      style: style2,
      flex,
      gap,
      children,
      vertical = false,
      component: Component = "div"
    } = props, othersProps = __rest$5(props, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]);
    const {
      flex: ctxFlex,
      direction: ctxDirection,
      getPrefixCls
    } = React.useContext(ConfigContext);
    const prefixCls = getPrefixCls("flex", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$3(prefixCls);
    const mergedVertical = vertical !== null && vertical !== void 0 ? vertical : ctxFlex === null || ctxFlex === void 0 ? void 0 : ctxFlex.vertical;
    const mergedCls = classNames(className, rootClassName, ctxFlex === null || ctxFlex === void 0 ? void 0 : ctxFlex.className, prefixCls, hashId, cssVarCls, createFlexClassNames(prefixCls, props), {
      [`${prefixCls}-rtl`]: ctxDirection === "rtl",
      [`${prefixCls}-gap-${gap}`]: isPresetSize(gap),
      [`${prefixCls}-vertical`]: mergedVertical
    });
    const mergedStyle = Object.assign(Object.assign({}, ctxFlex === null || ctxFlex === void 0 ? void 0 : ctxFlex.style), style2);
    if (flex) {
      mergedStyle.flex = flex;
    }
    if (gap && !isPresetSize(gap)) {
      mergedStyle.gap = gap;
    }
    return wrapCSSVar(/* @__PURE__ */ React.createElement(Component, Object.assign({
      ref,
      className: mergedCls,
      style: mergedStyle
    }, omit(othersProps, ["justify", "wrap", "align"])), children));
  });
  var defaultProps = {
    percent: 0,
    prefixCls: "rc-progress",
    strokeColor: "#2db7f5",
    strokeLinecap: "round",
    strokeWidth: 1,
    trailColor: "#D9D9D9",
    trailWidth: 1,
    gapPosition: "bottom"
  };
  var useTransitionDuration = function useTransitionDuration2() {
    var pathsRef = React.useRef([]);
    var prevTimeStamp = React.useRef(null);
    React.useEffect(function() {
      var now = Date.now();
      var updated = false;
      pathsRef.current.forEach(function(path) {
        if (!path) {
          return;
        }
        updated = true;
        var pathStyle = path.style;
        pathStyle.transitionDuration = ".3s, .3s, .3s, .06s";
        if (prevTimeStamp.current && now - prevTimeStamp.current < 100) {
          pathStyle.transitionDuration = "0s, 0s";
        }
      });
      if (updated) {
        prevTimeStamp.current = Date.now();
      }
    });
    return pathsRef.current;
  };
  var uuid = 0;
  var isBrowserClient = canUseDom();
  function getUUID() {
    var retId;
    if (isBrowserClient) {
      retId = uuid;
      uuid += 1;
    } else {
      retId = "TEST_OR_SSR";
    }
    return retId;
  }
  const useId2 = function(id) {
    var _React$useState = React__namespace.useState(), _React$useState2 = _slicedToArray(_React$useState, 2), innerId = _React$useState2[0], setInnerId = _React$useState2[1];
    React__namespace.useEffect(function() {
      setInnerId("rc_progress_".concat(getUUID()));
    }, []);
    return id || innerId;
  };
  var Block = function Block2(_ref) {
    var bg = _ref.bg, children = _ref.children;
    return /* @__PURE__ */ React__namespace.createElement("div", {
      style: {
        width: "100%",
        height: "100%",
        background: bg
      }
    }, children);
  };
  function getPtgColors(color, scale) {
    return Object.keys(color).map(function(key) {
      var parsedKey = parseFloat(key);
      var ptgKey = "".concat(Math.floor(parsedKey * scale), "%");
      return "".concat(color[key], " ").concat(ptgKey);
    });
  }
  var PtgCircle = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
    var prefixCls = props.prefixCls, color = props.color, gradientId = props.gradientId, radius = props.radius, circleStyleForStack = props.style, ptg = props.ptg, strokeLinecap = props.strokeLinecap, strokeWidth = props.strokeWidth, size = props.size, gapDegree = props.gapDegree;
    var isGradient = color && _typeof(color) === "object";
    var stroke = isGradient ? "#FFF" : void 0;
    var halfSize = size / 2;
    var circleNode = /* @__PURE__ */ React__namespace.createElement("circle", {
      className: "".concat(prefixCls, "-circle-path"),
      r: radius,
      cx: halfSize,
      cy: halfSize,
      stroke,
      strokeLinecap,
      strokeWidth,
      opacity: ptg === 0 ? 0 : 1,
      style: circleStyleForStack,
      ref
    });
    if (!isGradient) {
      return circleNode;
    }
    var maskId = "".concat(gradientId, "-conic");
    var fromDeg = gapDegree ? "".concat(180 + gapDegree / 2, "deg") : "0deg";
    var conicColors = getPtgColors(color, (360 - gapDegree) / 360);
    var linearColors = getPtgColors(color, 1);
    var conicColorBg = "conic-gradient(from ".concat(fromDeg, ", ").concat(conicColors.join(", "), ")");
    var linearColorBg = "linear-gradient(to ".concat(gapDegree ? "bottom" : "top", ", ").concat(linearColors.join(", "), ")");
    return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement("mask", {
      id: maskId
    }, circleNode), /* @__PURE__ */ React__namespace.createElement("foreignObject", {
      x: 0,
      y: 0,
      width: size,
      height: size,
      mask: "url(#".concat(maskId, ")")
    }, /* @__PURE__ */ React__namespace.createElement(Block, {
      bg: linearColorBg
    }, /* @__PURE__ */ React__namespace.createElement(Block, {
      bg: conicColorBg
    }))));
  });
  var VIEW_BOX_SIZE = 100;
  var getCircleStyle = function getCircleStyle2(perimeter, perimeterWithoutGap, offset, percent, rotateDeg, gapDegree, gapPosition, strokeColor, strokeLinecap, strokeWidth) {
    var stepSpace = arguments.length > 10 && arguments[10] !== void 0 ? arguments[10] : 0;
    var offsetDeg = offset / 100 * 360 * ((360 - gapDegree) / 360);
    var positionDeg = gapDegree === 0 ? 0 : {
      bottom: 0,
      top: 180,
      left: 90,
      right: -90
    }[gapPosition];
    var strokeDashoffset = (100 - percent) / 100 * perimeterWithoutGap;
    if (strokeLinecap === "round" && percent !== 100) {
      strokeDashoffset += strokeWidth / 2;
      if (strokeDashoffset >= perimeterWithoutGap) {
        strokeDashoffset = perimeterWithoutGap - 0.01;
      }
    }
    var halfSize = VIEW_BOX_SIZE / 2;
    return {
      stroke: typeof strokeColor === "string" ? strokeColor : void 0,
      strokeDasharray: "".concat(perimeterWithoutGap, "px ").concat(perimeter),
      strokeDashoffset: strokeDashoffset + stepSpace,
      transform: "rotate(".concat(rotateDeg + offsetDeg + positionDeg, "deg)"),
      transformOrigin: "".concat(halfSize, "px ").concat(halfSize, "px"),
      transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",
      fillOpacity: 0
    };
  };
  var _excluded$1 = ["id", "prefixCls", "steps", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "style", "className", "strokeColor", "percent"];
  function toArray(value) {
    var mergedValue = value !== null && value !== void 0 ? value : [];
    return Array.isArray(mergedValue) ? mergedValue : [mergedValue];
  }
  var Circle$1 = function Circle2(props) {
    var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps), props), id = _defaultProps$props.id, prefixCls = _defaultProps$props.prefixCls, steps = _defaultProps$props.steps, strokeWidth = _defaultProps$props.strokeWidth, trailWidth = _defaultProps$props.trailWidth, _defaultProps$props$g = _defaultProps$props.gapDegree, gapDegree = _defaultProps$props$g === void 0 ? 0 : _defaultProps$props$g, gapPosition = _defaultProps$props.gapPosition, trailColor = _defaultProps$props.trailColor, strokeLinecap = _defaultProps$props.strokeLinecap, style2 = _defaultProps$props.style, className = _defaultProps$props.className, strokeColor = _defaultProps$props.strokeColor, percent = _defaultProps$props.percent, restProps = _objectWithoutProperties(_defaultProps$props, _excluded$1);
    var halfSize = VIEW_BOX_SIZE / 2;
    var mergedId = useId2(id);
    var gradientId = "".concat(mergedId, "-gradient");
    var radius = halfSize - strokeWidth / 2;
    var perimeter = Math.PI * 2 * radius;
    var rotateDeg = gapDegree > 0 ? 90 + gapDegree / 2 : -90;
    var perimeterWithoutGap = perimeter * ((360 - gapDegree) / 360);
    var _ref = _typeof(steps) === "object" ? steps : {
      count: steps,
      gap: 2
    }, stepCount = _ref.count, stepGap = _ref.gap;
    var percentList = toArray(percent);
    var strokeColorList = toArray(strokeColor);
    var gradient = strokeColorList.find(function(color) {
      return color && _typeof(color) === "object";
    });
    var isConicGradient = gradient && _typeof(gradient) === "object";
    var mergedStrokeLinecap = isConicGradient ? "butt" : strokeLinecap;
    var circleStyle = getCircleStyle(perimeter, perimeterWithoutGap, 0, 100, rotateDeg, gapDegree, gapPosition, trailColor, mergedStrokeLinecap, strokeWidth);
    var paths = useTransitionDuration();
    var getStokeList = function getStokeList2() {
      var stackPtg = 0;
      return percentList.map(function(ptg, index2) {
        var color = strokeColorList[index2] || strokeColorList[strokeColorList.length - 1];
        var circleStyleForStack = getCircleStyle(perimeter, perimeterWithoutGap, stackPtg, ptg, rotateDeg, gapDegree, gapPosition, color, mergedStrokeLinecap, strokeWidth);
        stackPtg += ptg;
        return /* @__PURE__ */ React__namespace.createElement(PtgCircle, {
          key: index2,
          color,
          ptg,
          radius,
          prefixCls,
          gradientId,
          style: circleStyleForStack,
          strokeLinecap: mergedStrokeLinecap,
          strokeWidth,
          gapDegree,
          ref: function ref(elem) {
            paths[index2] = elem;
          },
          size: VIEW_BOX_SIZE
        });
      }).reverse();
    };
    var getStepStokeList = function getStepStokeList2() {
      var current = Math.round(stepCount * (percentList[0] / 100));
      var stepPtg = 100 / stepCount;
      var stackPtg = 0;
      return new Array(stepCount).fill(null).map(function(_, index2) {
        var color = index2 <= current - 1 ? strokeColorList[0] : trailColor;
        var stroke = color && _typeof(color) === "object" ? "url(#".concat(gradientId, ")") : void 0;
        var circleStyleForStack = getCircleStyle(perimeter, perimeterWithoutGap, stackPtg, stepPtg, rotateDeg, gapDegree, gapPosition, color, "butt", strokeWidth, stepGap);
        stackPtg += (perimeterWithoutGap - circleStyleForStack.strokeDashoffset + stepGap) * 100 / perimeterWithoutGap;
        return /* @__PURE__ */ React__namespace.createElement("circle", {
          key: index2,
          className: "".concat(prefixCls, "-circle-path"),
          r: radius,
          cx: halfSize,
          cy: halfSize,
          stroke,
          strokeWidth,
          opacity: 1,
          style: circleStyleForStack,
          ref: function ref(elem) {
            paths[index2] = elem;
          }
        });
      });
    };
    return /* @__PURE__ */ React__namespace.createElement("svg", _extends({
      className: classNames("".concat(prefixCls, "-circle"), className),
      viewBox: "0 0 ".concat(VIEW_BOX_SIZE, " ").concat(VIEW_BOX_SIZE),
      style: style2,
      id,
      role: "presentation"
    }, restProps), !stepCount && /* @__PURE__ */ React__namespace.createElement("circle", {
      className: "".concat(prefixCls, "-circle-trail"),
      r: radius,
      cx: halfSize,
      cy: halfSize,
      stroke: trailColor,
      strokeLinecap: mergedStrokeLinecap,
      strokeWidth: trailWidth || strokeWidth,
      style: circleStyle
    }), stepCount ? getStepStokeList() : getStokeList());
  };
  function validProgress(progress) {
    if (!progress || progress < 0) {
      return 0;
    }
    if (progress > 100) {
      return 100;
    }
    return progress;
  }
  function getSuccessPercent(_ref) {
    let {
      success,
      successPercent
    } = _ref;
    let percent = successPercent;
    if (success && "progress" in success) {
      percent = success.progress;
    }
    if (success && "percent" in success) {
      percent = success.percent;
    }
    return percent;
  }
  const getPercentage = (_ref2) => {
    let {
      percent,
      success,
      successPercent
    } = _ref2;
    const realSuccessPercent = validProgress(getSuccessPercent({
      success,
      successPercent
    }));
    return [realSuccessPercent, validProgress(validProgress(percent) - realSuccessPercent)];
  };
  const getStrokeColor = (_ref3) => {
    let {
      success = {},
      strokeColor
    } = _ref3;
    const {
      strokeColor: successColor
    } = success;
    return [successColor || presetPrimaryColors.green, strokeColor || null];
  };
  const getSize = (size, type, extra) => {
    var _a2, _b2, _c, _d;
    let width = -1;
    let height = -1;
    if (type === "step") {
      const steps = extra.steps;
      const strokeWidth = extra.strokeWidth;
      if (typeof size === "string" || typeof size === "undefined") {
        width = size === "small" ? 2 : 14;
        height = strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 8;
      } else if (typeof size === "number") {
        [width, height] = [size, size];
      } else {
        [width = 14, height = 8] = size;
      }
      width *= steps;
    } else if (type === "line") {
      const strokeWidth = extra === null || extra === void 0 ? void 0 : extra.strokeWidth;
      if (typeof size === "string" || typeof size === "undefined") {
        height = strokeWidth || (size === "small" ? 6 : 8);
      } else if (typeof size === "number") {
        [width, height] = [size, size];
      } else {
        [width = -1, height = 8] = size;
      }
    } else if (type === "circle" || type === "dashboard") {
      if (typeof size === "string" || typeof size === "undefined") {
        [width, height] = size === "small" ? [60, 60] : [120, 120];
      } else if (typeof size === "number") {
        [width, height] = [size, size];
      } else {
        width = (_b2 = (_a2 = size[0]) !== null && _a2 !== void 0 ? _a2 : size[1]) !== null && _b2 !== void 0 ? _b2 : 120;
        height = (_d = (_c = size[0]) !== null && _c !== void 0 ? _c : size[1]) !== null && _d !== void 0 ? _d : 120;
      }
    }
    return [width, height];
  };
  const CIRCLE_MIN_STROKE_WIDTH = 3;
  const getMinPercent = (width) => CIRCLE_MIN_STROKE_WIDTH / width * 100;
  const Circle = (props) => {
    const {
      prefixCls,
      trailColor = null,
      strokeLinecap = "round",
      gapPosition,
      gapDegree,
      width: originWidth = 120,
      type,
      children,
      success,
      size = originWidth,
      steps
    } = props;
    const [width, height] = getSize(size, "circle");
    let {
      strokeWidth
    } = props;
    if (strokeWidth === void 0) {
      strokeWidth = Math.max(getMinPercent(width), 6);
    }
    const circleStyle = {
      width,
      height,
      fontSize: width * 0.15 + 6
    };
    const realGapDegree = React__namespace.useMemo(() => {
      if (gapDegree || gapDegree === 0) {
        return gapDegree;
      }
      if (type === "dashboard") {
        return 75;
      }
      return void 0;
    }, [gapDegree, type]);
    const percentArray = getPercentage(props);
    const gapPos = gapPosition || type === "dashboard" && "bottom" || void 0;
    const isGradient = Object.prototype.toString.call(props.strokeColor) === "[object Object]";
    const strokeColor = getStrokeColor({
      success,
      strokeColor: props.strokeColor
    });
    const wrapperClassName = classNames(`${prefixCls}-inner`, {
      [`${prefixCls}-circle-gradient`]: isGradient
    });
    const circleContent = /* @__PURE__ */ React__namespace.createElement(Circle$1, {
      steps,
      percent: steps ? percentArray[1] : percentArray,
      strokeWidth,
      trailWidth: strokeWidth,
      strokeColor: steps ? strokeColor[1] : strokeColor,
      strokeLinecap,
      trailColor,
      prefixCls,
      gapDegree: realGapDegree,
      gapPosition: gapPos
    });
    return /* @__PURE__ */ React__namespace.createElement("div", {
      className: wrapperClassName,
      style: circleStyle
    }, width <= 20 ? /* @__PURE__ */ React__namespace.createElement(Tooltip2, {
      title: children
    }, /* @__PURE__ */ React__namespace.createElement("span", null, circleContent)) : /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, circleContent, children));
  };
  const LineStrokeColorVar = "--progress-line-stroke-color";
  const Percent = "--progress-percent";
  const genAntProgressActive = (isRtl) => {
    const direction = isRtl ? "100%" : "-100%";
    return new Keyframe(`antProgress${isRtl ? "RTL" : "LTR"}Active`, {
      "0%": {
        transform: `translateX(${direction}) scaleX(0)`,
        opacity: 0.1
      },
      "20%": {
        transform: `translateX(${direction}) scaleX(0)`,
        opacity: 0.5
      },
      to: {
        transform: "translateX(0) scaleX(1)",
        opacity: 0
      }
    });
  };
  const genBaseStyle$1 = (token2) => {
    const {
      componentCls: progressCls,
      iconCls: iconPrefixCls
    } = token2;
    return {
      [progressCls]: Object.assign(Object.assign({}, resetComponent(token2)), {
        display: "inline-block",
        "&-rtl": {
          direction: "rtl"
        },
        "&-line": {
          position: "relative",
          width: "100%",
          fontSize: token2.fontSize
        },
        [`${progressCls}-outer`]: {
          display: "inline-block",
          width: "100%"
        },
        [`&${progressCls}-show-info`]: {
          [`${progressCls}-outer`]: {
            marginInlineEnd: `calc(-2em - ${unit$1(token2.marginXS)})`,
            paddingInlineEnd: `calc(2em + ${unit$1(token2.paddingXS)})`
          }
        },
        [`${progressCls}-inner`]: {
          position: "relative",
          display: "inline-block",
          width: "100%",
          overflow: "hidden",
          verticalAlign: "middle",
          backgroundColor: token2.remainingColor,
          borderRadius: token2.lineBorderRadius
        },
        [`${progressCls}-inner:not(${progressCls}-circle-gradient)`]: {
          [`${progressCls}-circle-path`]: {
            stroke: token2.defaultColor
          }
        },
        [`${progressCls}-success-bg, ${progressCls}-bg`]: {
          position: "relative",
          background: token2.defaultColor,
          borderRadius: token2.lineBorderRadius,
          transition: `all ${token2.motionDurationSlow} ${token2.motionEaseInOutCirc}`
        },
        [`${progressCls}-bg`]: {
          overflow: "hidden",
          "&::after": {
            content: '""',
            background: {
              _multi_value_: true,
              value: ["inherit", `var(${LineStrokeColorVar})`]
            },
            height: "100%",
            width: `calc(1 / var(${Percent}) * 100%)`,
            display: "block"
          }
        },
        [`${progressCls}-success-bg`]: {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineStart: 0,
          backgroundColor: token2.colorSuccess
        },
        [`${progressCls}-text`]: {
          display: "inline-block",
          width: "2em",
          marginInlineStart: token2.marginXS,
          color: token2.colorText,
          lineHeight: 1,
          whiteSpace: "nowrap",
          textAlign: "start",
          verticalAlign: "middle",
          wordBreak: "normal",
          [iconPrefixCls]: {
            fontSize: token2.fontSize
          }
        },
        [`&${progressCls}-status-active`]: {
          [`${progressCls}-bg::before`]: {
            position: "absolute",
            inset: 0,
            backgroundColor: token2.colorBgContainer,
            borderRadius: token2.lineBorderRadius,
            opacity: 0,
            animationName: genAntProgressActive(),
            animationDuration: token2.progressActiveMotionDuration,
            animationTimingFunction: token2.motionEaseOutQuint,
            animationIterationCount: "infinite",
            content: '""'
          }
        },
        [`&${progressCls}-rtl${progressCls}-status-active`]: {
          [`${progressCls}-bg::before`]: {
            animationName: genAntProgressActive(true)
          }
        },
        [`&${progressCls}-status-exception`]: {
          [`${progressCls}-bg`]: {
            backgroundColor: token2.colorError
          },
          [`${progressCls}-text`]: {
            color: token2.colorError
          }
        },
        [`&${progressCls}-status-exception ${progressCls}-inner:not(${progressCls}-circle-gradient)`]: {
          [`${progressCls}-circle-path`]: {
            stroke: token2.colorError
          }
        },
        [`&${progressCls}-status-success`]: {
          [`${progressCls}-bg`]: {
            backgroundColor: token2.colorSuccess
          },
          [`${progressCls}-text`]: {
            color: token2.colorSuccess
          }
        },
        [`&${progressCls}-status-success ${progressCls}-inner:not(${progressCls}-circle-gradient)`]: {
          [`${progressCls}-circle-path`]: {
            stroke: token2.colorSuccess
          }
        }
      })
    };
  };
  const genCircleStyle = (token2) => {
    const {
      componentCls: progressCls,
      iconCls: iconPrefixCls
    } = token2;
    return {
      [progressCls]: {
        [`${progressCls}-circle-trail`]: {
          stroke: token2.remainingColor
        },
        [`&${progressCls}-circle ${progressCls}-inner`]: {
          position: "relative",
          lineHeight: 1,
          backgroundColor: "transparent"
        },
        [`&${progressCls}-circle ${progressCls}-text`]: {
          position: "absolute",
          insetBlockStart: "50%",
          insetInlineStart: 0,
          width: "100%",
          margin: 0,
          padding: 0,
          color: token2.circleTextColor,
          fontSize: token2.circleTextFontSize,
          lineHeight: 1,
          whiteSpace: "normal",
          textAlign: "center",
          transform: "translateY(-50%)",
          [iconPrefixCls]: {
            fontSize: token2.circleIconFontSize
          }
        },
        [`${progressCls}-circle&-status-exception`]: {
          [`${progressCls}-text`]: {
            color: token2.colorError
          }
        },
        [`${progressCls}-circle&-status-success`]: {
          [`${progressCls}-text`]: {
            color: token2.colorSuccess
          }
        }
      },
      [`${progressCls}-inline-circle`]: {
        lineHeight: 1,
        [`${progressCls}-inner`]: {
          verticalAlign: "bottom"
        }
      }
    };
  };
  const genStepStyle = (token2) => {
    const {
      componentCls: progressCls
    } = token2;
    return {
      [progressCls]: {
        [`${progressCls}-steps`]: {
          display: "inline-block",
          "&-outer": {
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          },
          "&-item": {
            flexShrink: 0,
            minWidth: token2.progressStepMinWidth,
            marginInlineEnd: token2.progressStepMarginInlineEnd,
            backgroundColor: token2.remainingColor,
            transition: `all ${token2.motionDurationSlow}`,
            "&-active": {
              backgroundColor: token2.defaultColor
            }
          }
        }
      }
    };
  };
  const genSmallLine = (token2) => {
    const {
      componentCls: progressCls,
      iconCls: iconPrefixCls
    } = token2;
    return {
      [progressCls]: {
        [`${progressCls}-small&-line, ${progressCls}-small&-line ${progressCls}-text ${iconPrefixCls}`]: {
          fontSize: token2.fontSizeSM
        }
      }
    };
  };
  const prepareComponentToken$2 = (token2) => ({
    circleTextColor: token2.colorText,
    defaultColor: token2.colorInfo,
    remainingColor: token2.colorFillSecondary,
    lineBorderRadius: 100,
    // magic for capsule shape, should be a very large number
    circleTextFontSize: "1em",
    circleIconFontSize: `${token2.fontSize / token2.fontSizeSM}em`
  });
  const useStyle$2 = genStyleHooks("Progress", (token2) => {
    const progressStepMarginInlineEnd = token2.calc(token2.marginXXS).div(2).equal();
    const progressToken = merge(token2, {
      progressStepMarginInlineEnd,
      progressStepMinWidth: progressStepMarginInlineEnd,
      progressActiveMotionDuration: "2.4s"
    });
    return [genBaseStyle$1(progressToken), genCircleStyle(progressToken), genStepStyle(progressToken), genSmallLine(progressToken)];
  }, prepareComponentToken$2);
  var __rest$4 = function(s, e2) {
    var t2 = {};
    for (var p2 in s)
      if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
          t2[p2[i]] = s[p2[i]];
      }
    return t2;
  };
  const sortGradient = (gradients) => {
    let tempArr = [];
    Object.keys(gradients).forEach((key) => {
      const formattedKey = parseFloat(key.replace(/%/g, ""));
      if (!isNaN(formattedKey)) {
        tempArr.push({
          key: formattedKey,
          value: gradients[key]
        });
      }
    });
    tempArr = tempArr.sort((a, b2) => a.key - b2.key);
    return tempArr.map((_ref) => {
      let {
        key,
        value
      } = _ref;
      return `${value} ${key}%`;
    }).join(", ");
  };
  const handleGradient = (strokeColor, directionConfig) => {
    const {
      from: from2 = presetPrimaryColors.blue,
      to = presetPrimaryColors.blue,
      direction = directionConfig === "rtl" ? "to left" : "to right"
    } = strokeColor, rest = __rest$4(strokeColor, ["from", "to", "direction"]);
    if (Object.keys(rest).length !== 0) {
      const sortedGradients = sortGradient(rest);
      const background2 = `linear-gradient(${direction}, ${sortedGradients})`;
      return {
        background: background2,
        [LineStrokeColorVar]: background2
      };
    }
    const background = `linear-gradient(${direction}, ${from2}, ${to})`;
    return {
      background,
      [LineStrokeColorVar]: background
    };
  };
  const Line = (props) => {
    const {
      prefixCls,
      direction: directionConfig,
      percent,
      size,
      strokeWidth,
      strokeColor,
      strokeLinecap = "round",
      children,
      trailColor = null,
      success
    } = props;
    const backgroundProps = strokeColor && typeof strokeColor !== "string" ? handleGradient(strokeColor, directionConfig) : {
      [LineStrokeColorVar]: strokeColor,
      background: strokeColor
    };
    const borderRadius = strokeLinecap === "square" || strokeLinecap === "butt" ? 0 : void 0;
    const mergedSize = size !== null && size !== void 0 ? size : [-1, strokeWidth || (size === "small" ? 6 : 8)];
    const [width, height] = getSize(mergedSize, "line", {
      strokeWidth
    });
    const trailStyle = {
      backgroundColor: trailColor || void 0,
      borderRadius
    };
    const percentStyle = Object.assign(Object.assign({
      width: `${validProgress(percent)}%`,
      height,
      borderRadius
    }, backgroundProps), {
      [Percent]: validProgress(percent) / 100
    });
    const successPercent = getSuccessPercent(props);
    const successPercentStyle = {
      width: `${validProgress(successPercent)}%`,
      height,
      borderRadius,
      backgroundColor: success === null || success === void 0 ? void 0 : success.strokeColor
    };
    const outerStyle = {
      width: width < 0 ? "100%" : width,
      height
    };
    return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement("div", {
      className: `${prefixCls}-outer`,
      style: outerStyle
    }, /* @__PURE__ */ React__namespace.createElement("div", {
      className: `${prefixCls}-inner`,
      style: trailStyle
    }, /* @__PURE__ */ React__namespace.createElement("div", {
      className: `${prefixCls}-bg`,
      style: percentStyle
    }), successPercent !== void 0 ? /* @__PURE__ */ React__namespace.createElement("div", {
      className: `${prefixCls}-success-bg`,
      style: successPercentStyle
    }) : null)), children);
  };
  const Steps = (props) => {
    const {
      size,
      steps,
      percent = 0,
      strokeWidth = 8,
      strokeColor,
      trailColor = null,
      prefixCls,
      children
    } = props;
    const current = Math.round(steps * (percent / 100));
    const stepWidth = size === "small" ? 2 : 14;
    const mergedSize = size !== null && size !== void 0 ? size : [stepWidth, strokeWidth];
    const [width, height] = getSize(mergedSize, "step", {
      steps,
      strokeWidth
    });
    const unitWidth = width / steps;
    const styledSteps = new Array(steps);
    for (let i = 0; i < steps; i++) {
      const color = Array.isArray(strokeColor) ? strokeColor[i] : strokeColor;
      styledSteps[i] = /* @__PURE__ */ React__namespace.createElement("div", {
        key: i,
        className: classNames(`${prefixCls}-steps-item`, {
          [`${prefixCls}-steps-item-active`]: i <= current - 1
        }),
        style: {
          backgroundColor: i <= current - 1 ? color : trailColor,
          width: unitWidth,
          height
        }
      });
    }
    return /* @__PURE__ */ React__namespace.createElement("div", {
      className: `${prefixCls}-steps-outer`
    }, styledSteps, children);
  };
  var __rest$3 = function(s, e2) {
    var t2 = {};
    for (var p2 in s)
      if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
          t2[p2[i]] = s[p2[i]];
      }
    return t2;
  };
  const ProgressStatuses = ["normal", "exception", "active", "success"];
  const Progress = /* @__PURE__ */ React__namespace.forwardRef((props, ref) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      steps,
      strokeColor,
      percent = 0,
      size = "default",
      showInfo = true,
      type = "line",
      status,
      format,
      style: style2
    } = props, restProps = __rest$3(props, ["prefixCls", "className", "rootClassName", "steps", "strokeColor", "percent", "size", "showInfo", "type", "status", "format", "style"]);
    const percentNumber = React__namespace.useMemo(() => {
      var _a2, _b2;
      const successPercent = getSuccessPercent(props);
      return parseInt(successPercent !== void 0 ? (_a2 = successPercent !== null && successPercent !== void 0 ? successPercent : 0) === null || _a2 === void 0 ? void 0 : _a2.toString() : (_b2 = percent !== null && percent !== void 0 ? percent : 0) === null || _b2 === void 0 ? void 0 : _b2.toString(), 10);
    }, [percent, props.success, props.successPercent]);
    const progressStatus = React__namespace.useMemo(() => {
      if (!ProgressStatuses.includes(status) && percentNumber >= 100) {
        return "success";
      }
      return status || "normal";
    }, [status, percentNumber]);
    const {
      getPrefixCls,
      direction,
      progress: progressStyle
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("progress", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$2(prefixCls);
    const progressInfo = React__namespace.useMemo(() => {
      if (!showInfo) {
        return null;
      }
      const successPercent = getSuccessPercent(props);
      let text;
      const textFormatter = format || ((number) => `${number}%`);
      const isLineType = type === "line";
      if (format || progressStatus !== "exception" && progressStatus !== "success") {
        text = textFormatter(validProgress(percent), validProgress(successPercent));
      } else if (progressStatus === "exception") {
        text = isLineType ? /* @__PURE__ */ React__namespace.createElement(RefIcon$6, null) : /* @__PURE__ */ React__namespace.createElement(RefIcon$5, null);
      } else if (progressStatus === "success") {
        text = isLineType ? /* @__PURE__ */ React__namespace.createElement(RefIcon$8, null) : /* @__PURE__ */ React__namespace.createElement(RefIcon$7, null);
      }
      return /* @__PURE__ */ React__namespace.createElement("span", {
        className: `${prefixCls}-text`,
        title: typeof text === "string" ? text : void 0
      }, text);
    }, [showInfo, percent, percentNumber, progressStatus, type, prefixCls, format]);
    const strokeColorNotArray = Array.isArray(strokeColor) ? strokeColor[0] : strokeColor;
    const strokeColorNotGradient = typeof strokeColor === "string" || Array.isArray(strokeColor) ? strokeColor : void 0;
    let progress;
    if (type === "line") {
      progress = steps ? /* @__PURE__ */ React__namespace.createElement(Steps, Object.assign({}, props, {
        strokeColor: strokeColorNotGradient,
        prefixCls,
        steps: typeof steps === "object" ? steps.count : steps
      }), progressInfo) : /* @__PURE__ */ React__namespace.createElement(Line, Object.assign({}, props, {
        strokeColor: strokeColorNotArray,
        prefixCls,
        direction
      }), progressInfo);
    } else if (type === "circle" || type === "dashboard") {
      progress = /* @__PURE__ */ React__namespace.createElement(Circle, Object.assign({}, props, {
        strokeColor: strokeColorNotArray,
        prefixCls,
        progressStatus
      }), progressInfo);
    }
    const classString = classNames(prefixCls, `${prefixCls}-status-${progressStatus}`, {
      [`${prefixCls}-${type === "dashboard" && "circle" || type}`]: type !== "line",
      [`${prefixCls}-inline-circle`]: type === "circle" && getSize(size, "circle")[0] <= 20,
      [`${prefixCls}-line`]: !steps && type === "line",
      [`${prefixCls}-steps`]: steps,
      [`${prefixCls}-show-info`]: showInfo,
      [`${prefixCls}-${size}`]: typeof size === "string",
      [`${prefixCls}-rtl`]: direction === "rtl"
    }, progressStyle === null || progressStyle === void 0 ? void 0 : progressStyle.className, className, rootClassName, hashId, cssVarCls);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("div", Object.assign({
      ref,
      style: Object.assign(Object.assign({}, progressStyle === null || progressStyle === void 0 ? void 0 : progressStyle.style), style2),
      className: classString,
      role: "progressbar",
      "aria-valuenow": percentNumber
    }, omit(restProps, ["trailColor", "strokeWidth", "width", "gapDegree", "gapPosition", "strokeLinecap", "success", "successPercent"])), progress));
  });
  var calcThumbStyle = function calcThumbStyle2(targetElement) {
    return targetElement ? {
      left: targetElement.offsetLeft,
      right: targetElement.parentElement.clientWidth - targetElement.clientWidth - targetElement.offsetLeft,
      width: targetElement.clientWidth
    } : null;
  };
  var toPX = function toPX2(value) {
    return value !== void 0 ? "".concat(value, "px") : void 0;
  };
  function MotionThumb(props) {
    var prefixCls = props.prefixCls, containerRef = props.containerRef, value = props.value, getValueIndex = props.getValueIndex, motionName = props.motionName, onMotionStart = props.onMotionStart, onMotionEnd = props.onMotionEnd, direction = props.direction;
    var thumbRef = React__namespace.useRef(null);
    var _React$useState = React__namespace.useState(value), _React$useState2 = _slicedToArray(_React$useState, 2), prevValue = _React$useState2[0], setPrevValue = _React$useState2[1];
    var findValueElement = function findValueElement2(val) {
      var _containerRef$current;
      var index2 = getValueIndex(val);
      var ele = (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.querySelectorAll(".".concat(prefixCls, "-item"))[index2];
      return (ele === null || ele === void 0 ? void 0 : ele.offsetParent) && ele;
    };
    var _React$useState3 = React__namespace.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), prevStyle = _React$useState4[0], setPrevStyle = _React$useState4[1];
    var _React$useState5 = React__namespace.useState(null), _React$useState6 = _slicedToArray(_React$useState5, 2), nextStyle = _React$useState6[0], setNextStyle = _React$useState6[1];
    useLayoutEffect(function() {
      if (prevValue !== value) {
        var prev2 = findValueElement(prevValue);
        var next2 = findValueElement(value);
        var calcPrevStyle = calcThumbStyle(prev2);
        var calcNextStyle = calcThumbStyle(next2);
        setPrevValue(value);
        setPrevStyle(calcPrevStyle);
        setNextStyle(calcNextStyle);
        if (prev2 && next2) {
          onMotionStart();
        } else {
          onMotionEnd();
        }
      }
    }, [value]);
    var thumbStart = React__namespace.useMemo(function() {
      return direction === "rtl" ? toPX(-(prevStyle === null || prevStyle === void 0 ? void 0 : prevStyle.right)) : toPX(prevStyle === null || prevStyle === void 0 ? void 0 : prevStyle.left);
    }, [direction, prevStyle]);
    var thumbActive = React__namespace.useMemo(function() {
      return direction === "rtl" ? toPX(-(nextStyle === null || nextStyle === void 0 ? void 0 : nextStyle.right)) : toPX(nextStyle === null || nextStyle === void 0 ? void 0 : nextStyle.left);
    }, [direction, nextStyle]);
    var onAppearStart = function onAppearStart2() {
      return {
        transform: "translateX(var(--thumb-start-left))",
        width: "var(--thumb-start-width)"
      };
    };
    var onAppearActive = function onAppearActive2() {
      return {
        transform: "translateX(var(--thumb-active-left))",
        width: "var(--thumb-active-width)"
      };
    };
    var onVisibleChanged = function onVisibleChanged2() {
      setPrevStyle(null);
      setNextStyle(null);
      onMotionEnd();
    };
    if (!prevStyle || !nextStyle) {
      return null;
    }
    return /* @__PURE__ */ React__namespace.createElement(CSSMotion, {
      visible: true,
      motionName,
      motionAppear: true,
      onAppearStart,
      onAppearActive,
      onVisibleChanged
    }, function(_ref, ref) {
      var motionClassName = _ref.className, motionStyle = _ref.style;
      var mergedStyle = _objectSpread2(_objectSpread2({}, motionStyle), {}, {
        "--thumb-start-left": thumbStart,
        "--thumb-start-width": toPX(prevStyle === null || prevStyle === void 0 ? void 0 : prevStyle.width),
        "--thumb-active-left": thumbActive,
        "--thumb-active-width": toPX(nextStyle === null || nextStyle === void 0 ? void 0 : nextStyle.width)
      });
      var motionProps = {
        ref: composeRef(thumbRef, ref),
        style: mergedStyle,
        className: classNames("".concat(prefixCls, "-thumb"), motionClassName)
      };
      return /* @__PURE__ */ React__namespace.createElement("div", motionProps);
    });
  }
  var _excluded = ["prefixCls", "direction", "options", "disabled", "defaultValue", "value", "onChange", "className", "motionName"];
  function getValidTitle(option) {
    if (typeof option.title !== "undefined") {
      return option.title;
    }
    if (_typeof(option.label) !== "object") {
      var _option$label;
      return (_option$label = option.label) === null || _option$label === void 0 ? void 0 : _option$label.toString();
    }
  }
  function normalizeOptions(options) {
    return options.map(function(option) {
      if (_typeof(option) === "object" && option !== null) {
        var validTitle = getValidTitle(option);
        return _objectSpread2(_objectSpread2({}, option), {}, {
          title: validTitle
        });
      }
      return {
        label: option === null || option === void 0 ? void 0 : option.toString(),
        title: option === null || option === void 0 ? void 0 : option.toString(),
        value: option
      };
    });
  }
  var InternalSegmentedOption = function InternalSegmentedOption2(_ref) {
    var prefixCls = _ref.prefixCls, className = _ref.className, disabled = _ref.disabled, checked = _ref.checked, label = _ref.label, title = _ref.title, value = _ref.value, onChange = _ref.onChange;
    var handleChange = function handleChange2(event) {
      if (disabled) {
        return;
      }
      onChange(event, value);
    };
    return /* @__PURE__ */ React__namespace.createElement("label", {
      className: classNames(className, _defineProperty({}, "".concat(prefixCls, "-item-disabled"), disabled))
    }, /* @__PURE__ */ React__namespace.createElement("input", {
      className: "".concat(prefixCls, "-item-input"),
      type: "radio",
      disabled,
      checked,
      onChange: handleChange
    }), /* @__PURE__ */ React__namespace.createElement("div", {
      className: "".concat(prefixCls, "-item-label"),
      title
    }, label));
  };
  var Segmented$1 = /* @__PURE__ */ React__namespace.forwardRef(function(props, ref) {
    var _segmentedOptions$, _classNames2;
    var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-segmented" : _props$prefixCls, direction = props.direction, _props$options = props.options, options = _props$options === void 0 ? [] : _props$options, disabled = props.disabled, defaultValue = props.defaultValue, value = props.value, onChange = props.onChange, _props$className = props.className, className = _props$className === void 0 ? "" : _props$className, _props$motionName = props.motionName, motionName = _props$motionName === void 0 ? "thumb-motion" : _props$motionName, restProps = _objectWithoutProperties(props, _excluded);
    var containerRef = React__namespace.useRef(null);
    var mergedRef = React__namespace.useMemo(function() {
      return composeRef(containerRef, ref);
    }, [containerRef, ref]);
    var segmentedOptions = React__namespace.useMemo(function() {
      return normalizeOptions(options);
    }, [options]);
    var _useMergedState = useMergedState((_segmentedOptions$ = segmentedOptions[0]) === null || _segmentedOptions$ === void 0 ? void 0 : _segmentedOptions$.value, {
      value,
      defaultValue
    }), _useMergedState2 = _slicedToArray(_useMergedState, 2), rawValue = _useMergedState2[0], setRawValue = _useMergedState2[1];
    var _React$useState = React__namespace.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), thumbShow = _React$useState2[0], setThumbShow = _React$useState2[1];
    var handleChange = function handleChange2(event, val) {
      if (disabled) {
        return;
      }
      setRawValue(val);
      onChange === null || onChange === void 0 || onChange(val);
    };
    var divProps = omit(restProps, ["children"]);
    return /* @__PURE__ */ React__namespace.createElement("div", _extends({}, divProps, {
      className: classNames(prefixCls, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-rtl"), direction === "rtl"), _defineProperty(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _classNames2), className),
      ref: mergedRef
    }), /* @__PURE__ */ React__namespace.createElement("div", {
      className: "".concat(prefixCls, "-group")
    }, /* @__PURE__ */ React__namespace.createElement(MotionThumb, {
      prefixCls,
      value: rawValue,
      containerRef,
      motionName: "".concat(prefixCls, "-").concat(motionName),
      direction,
      getValueIndex: function getValueIndex(val) {
        return segmentedOptions.findIndex(function(n2) {
          return n2.value === val;
        });
      },
      onMotionStart: function onMotionStart() {
        setThumbShow(true);
      },
      onMotionEnd: function onMotionEnd() {
        setThumbShow(false);
      }
    }), segmentedOptions.map(function(segmentedOption) {
      return /* @__PURE__ */ React__namespace.createElement(InternalSegmentedOption, _extends({}, segmentedOption, {
        key: segmentedOption.value,
        prefixCls,
        className: classNames(segmentedOption.className, "".concat(prefixCls, "-item"), _defineProperty({}, "".concat(prefixCls, "-item-selected"), segmentedOption.value === rawValue && !thumbShow)),
        checked: segmentedOption.value === rawValue,
        onChange: handleChange,
        disabled: !!disabled || !!segmentedOption.disabled
      }));
    })));
  });
  var TypedSegmented = Segmented$1;
  function getItemDisabledStyle(cls, token2) {
    return {
      [`${cls}, ${cls}:hover, ${cls}:focus`]: {
        color: token2.colorTextDisabled,
        cursor: "not-allowed"
      }
    };
  }
  function getItemSelectedStyle(token2) {
    return {
      backgroundColor: token2.itemSelectedBg,
      boxShadow: token2.boxShadowTertiary
    };
  }
  const segmentedTextEllipsisCss = Object.assign({
    overflow: "hidden"
  }, textEllipsis);
  const genSegmentedStyle = (token2) => {
    const {
      componentCls
    } = token2;
    const labelHeight = token2.calc(token2.controlHeight).sub(token2.calc(token2.trackPadding).mul(2)).equal();
    const labelHeightLG = token2.calc(token2.controlHeightLG).sub(token2.calc(token2.trackPadding).mul(2)).equal();
    const labelHeightSM = token2.calc(token2.controlHeightSM).sub(token2.calc(token2.trackPadding).mul(2)).equal();
    return {
      [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token2)), {
        display: "inline-block",
        padding: token2.trackPadding,
        color: token2.itemColor,
        background: token2.trackBg,
        borderRadius: token2.borderRadius,
        transition: `all ${token2.motionDurationMid} ${token2.motionEaseInOut}`,
        [`${componentCls}-group`]: {
          position: "relative",
          display: "flex",
          alignItems: "stretch",
          justifyItems: "flex-start",
          width: "100%"
        },
        // RTL styles
        [`&${componentCls}-rtl`]: {
          direction: "rtl"
        },
        // block styles
        [`&${componentCls}-block`]: {
          display: "flex"
        },
        [`&${componentCls}-block ${componentCls}-item`]: {
          flex: 1,
          minWidth: 0
        },
        // item styles
        [`${componentCls}-item`]: {
          position: "relative",
          textAlign: "center",
          cursor: "pointer",
          transition: `color ${token2.motionDurationMid} ${token2.motionEaseInOut}`,
          borderRadius: token2.borderRadiusSM,
          // Fix Safari render bug
          // https://github.com/ant-design/ant-design/issues/45250
          transform: "translateZ(0)",
          "&-selected": Object.assign(Object.assign({}, getItemSelectedStyle(token2)), {
            color: token2.itemSelectedColor
          }),
          "&::after": {
            content: '""',
            position: "absolute",
            zIndex: -1,
            width: "100%",
            height: "100%",
            top: 0,
            insetInlineStart: 0,
            borderRadius: "inherit",
            transition: `background-color ${token2.motionDurationMid}`,
            // This is mandatory to make it not clickable or hoverable
            // Ref: https://github.com/ant-design/ant-design/issues/40888
            pointerEvents: "none"
          },
          [`&:hover:not(${componentCls}-item-selected):not(${componentCls}-item-disabled)`]: {
            color: token2.itemHoverColor,
            "&::after": {
              backgroundColor: token2.itemHoverBg
            }
          },
          [`&:active:not(${componentCls}-item-selected):not(${componentCls}-item-disabled)`]: {
            color: token2.itemHoverColor,
            "&::after": {
              backgroundColor: token2.itemActiveBg
            }
          },
          "&-label": Object.assign({
            minHeight: labelHeight,
            lineHeight: unit$1(labelHeight),
            padding: `0 ${unit$1(token2.segmentedPaddingHorizontal)}`
          }, segmentedTextEllipsisCss),
          // syntactic sugar to add `icon` for Segmented Item
          "&-icon + *": {
            marginInlineStart: token2.calc(token2.marginSM).div(2).equal()
          },
          "&-input": {
            position: "absolute",
            insetBlockStart: 0,
            insetInlineStart: 0,
            width: 0,
            height: 0,
            opacity: 0,
            pointerEvents: "none"
          }
        },
        // thumb styles
        [`${componentCls}-thumb`]: Object.assign(Object.assign({}, getItemSelectedStyle(token2)), {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineStart: 0,
          width: 0,
          height: "100%",
          padding: `${unit$1(token2.paddingXXS)} 0`,
          borderRadius: token2.borderRadiusSM,
          [`& ~ ${componentCls}-item:not(${componentCls}-item-selected):not(${componentCls}-item-disabled)::after`]: {
            backgroundColor: "transparent"
          }
        }),
        // size styles
        [`&${componentCls}-lg`]: {
          borderRadius: token2.borderRadiusLG,
          [`${componentCls}-item-label`]: {
            minHeight: labelHeightLG,
            lineHeight: unit$1(labelHeightLG),
            padding: `0 ${unit$1(token2.segmentedPaddingHorizontal)}`,
            fontSize: token2.fontSizeLG
          },
          [`${componentCls}-item, ${componentCls}-thumb`]: {
            borderRadius: token2.borderRadius
          }
        },
        [`&${componentCls}-sm`]: {
          borderRadius: token2.borderRadiusSM,
          [`${componentCls}-item-label`]: {
            minHeight: labelHeightSM,
            lineHeight: unit$1(labelHeightSM),
            padding: `0 ${unit$1(token2.segmentedPaddingHorizontalSM)}`
          },
          [`${componentCls}-item, ${componentCls}-thumb`]: {
            borderRadius: token2.borderRadiusXS
          }
        }
      }), getItemDisabledStyle(`&-disabled ${componentCls}-item`, token2)), getItemDisabledStyle(`${componentCls}-item-disabled`, token2)), {
        // transition effect when `appear-active`
        [`${componentCls}-thumb-motion-appear-active`]: {
          transition: `transform ${token2.motionDurationSlow} ${token2.motionEaseInOut}, width ${token2.motionDurationSlow} ${token2.motionEaseInOut}`,
          willChange: "transform, width"
        }
      })
    };
  };
  const prepareComponentToken$1 = (token2) => {
    const {
      colorTextLabel,
      colorText,
      colorFillSecondary,
      colorBgElevated,
      colorFill,
      lineWidthBold,
      colorBgLayout
    } = token2;
    return {
      trackPadding: lineWidthBold,
      trackBg: colorBgLayout,
      itemColor: colorTextLabel,
      itemHoverColor: colorText,
      itemHoverBg: colorFillSecondary,
      itemSelectedBg: colorBgElevated,
      itemActiveBg: colorFill,
      itemSelectedColor: colorText
    };
  };
  const useStyle$1 = genStyleHooks("Segmented", (token2) => {
    const {
      lineWidth,
      calc
    } = token2;
    const segmentedToken = merge(token2, {
      segmentedPaddingHorizontal: calc(token2.controlPaddingHorizontal).sub(lineWidth).equal(),
      segmentedPaddingHorizontalSM: calc(token2.controlPaddingHorizontalSM).sub(lineWidth).equal()
    });
    return [genSegmentedStyle(segmentedToken)];
  }, prepareComponentToken$1);
  var __rest$2 = function(s, e2) {
    var t2 = {};
    for (var p2 in s)
      if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
          t2[p2[i]] = s[p2[i]];
      }
    return t2;
  };
  function isSegmentedLabeledOptionWithIcon(option) {
    return typeof option === "object" && !!(option === null || option === void 0 ? void 0 : option.icon);
  }
  const InternalSegmented = /* @__PURE__ */ React__namespace.forwardRef((props, ref) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      block,
      options = [],
      size: customSize = "middle",
      style: style2
    } = props, restProps = __rest$2(props, ["prefixCls", "className", "rootClassName", "block", "options", "size", "style"]);
    const {
      getPrefixCls,
      direction,
      segmented
    } = React__namespace.useContext(ConfigContext);
    const prefixCls = getPrefixCls("segmented", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle$1(prefixCls);
    const mergedSize = useSize(customSize);
    const extendedOptions = React__namespace.useMemo(() => options.map((option) => {
      if (isSegmentedLabeledOptionWithIcon(option)) {
        const {
          icon,
          label
        } = option, restOption = __rest$2(option, ["icon", "label"]);
        return Object.assign(Object.assign({}, restOption), {
          label: /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement("span", {
            className: `${prefixCls}-item-icon`
          }, icon), label && /* @__PURE__ */ React__namespace.createElement("span", null, label))
        });
      }
      return option;
    }), [options, prefixCls]);
    const cls = classNames(className, rootClassName, segmented === null || segmented === void 0 ? void 0 : segmented.className, {
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-sm`]: mergedSize === "small",
      [`${prefixCls}-lg`]: mergedSize === "large"
    }, hashId, cssVarCls);
    const mergedStyle = Object.assign(Object.assign({}, segmented === null || segmented === void 0 ? void 0 : segmented.style), style2);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement(TypedSegmented, Object.assign({}, restProps, {
      className: cls,
      style: mergedStyle,
      options: extendedOptions,
      ref,
      prefixCls,
      direction
    })));
  });
  const Segmented = InternalSegmented;
  const genBaseStyle = (token2) => {
    const {
      paddingXXS,
      lineWidth,
      tagPaddingHorizontal,
      componentCls,
      calc
    } = token2;
    const paddingInline = calc(tagPaddingHorizontal).sub(lineWidth).equal();
    const iconMarginInline = calc(paddingXXS).sub(lineWidth).equal();
    return {
      // Result
      [componentCls]: Object.assign(Object.assign({}, resetComponent(token2)), {
        display: "inline-block",
        height: "auto",
        // https://github.com/ant-design/ant-design/pull/47504
        marginInlineEnd: token2.marginXS,
        paddingInline,
        fontSize: token2.tagFontSize,
        lineHeight: token2.tagLineHeight,
        whiteSpace: "nowrap",
        background: token2.defaultBg,
        border: `${unit$1(token2.lineWidth)} ${token2.lineType} ${token2.colorBorder}`,
        borderRadius: token2.borderRadiusSM,
        opacity: 1,
        transition: `all ${token2.motionDurationMid}`,
        textAlign: "start",
        position: "relative",
        // RTL
        [`&${componentCls}-rtl`]: {
          direction: "rtl"
        },
        "&, a, a:hover": {
          color: token2.defaultColor
        },
        [`${componentCls}-close-icon`]: {
          marginInlineStart: iconMarginInline,
          fontSize: token2.tagIconSize,
          color: token2.colorTextDescription,
          cursor: "pointer",
          transition: `all ${token2.motionDurationMid}`,
          "&:hover": {
            color: token2.colorTextHeading
          }
        },
        [`&${componentCls}-has-color`]: {
          borderColor: "transparent",
          [`&, a, a:hover, ${token2.iconCls}-close, ${token2.iconCls}-close:hover`]: {
            color: token2.colorTextLightSolid
          }
        },
        [`&-checkable`]: {
          backgroundColor: "transparent",
          borderColor: "transparent",
          cursor: "pointer",
          [`&:not(${componentCls}-checkable-checked):hover`]: {
            color: token2.colorPrimary,
            backgroundColor: token2.colorFillSecondary
          },
          "&:active, &-checked": {
            color: token2.colorTextLightSolid
          },
          "&-checked": {
            backgroundColor: token2.colorPrimary,
            "&:hover": {
              backgroundColor: token2.colorPrimaryHover
            }
          },
          "&:active": {
            backgroundColor: token2.colorPrimaryActive
          }
        },
        [`&-hidden`]: {
          display: "none"
        },
        // To ensure that a space will be placed between character and `Icon`.
        [`> ${token2.iconCls} + span, > span + ${token2.iconCls}`]: {
          marginInlineStart: paddingInline
        }
      }),
      [`${componentCls}-borderless`]: {
        borderColor: "transparent",
        background: token2.tagBorderlessBg
      }
    };
  };
  const prepareToken = (token2) => {
    const {
      lineWidth,
      fontSizeIcon,
      calc
    } = token2;
    const tagFontSize = token2.fontSizeSM;
    const tagToken = merge(token2, {
      tagFontSize,
      tagLineHeight: unit$1(calc(token2.lineHeightSM).mul(tagFontSize).equal()),
      tagIconSize: calc(fontSizeIcon).sub(calc(lineWidth).mul(2)).equal(),
      // Tag icon is much smaller
      tagPaddingHorizontal: 8,
      // Fixed padding.
      tagBorderlessBg: token2.defaultBg
    });
    return tagToken;
  };
  const prepareComponentToken = (token2) => ({
    defaultBg: new TinyColor(token2.colorFillQuaternary).onBackground(token2.colorBgContainer).toHexString(),
    defaultColor: token2.colorText
  });
  const useStyle = genStyleHooks("Tag", (token2) => {
    const tagToken = prepareToken(token2);
    return genBaseStyle(tagToken);
  }, prepareComponentToken);
  var __rest$1 = function(s, e2) {
    var t2 = {};
    for (var p2 in s)
      if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
          t2[p2[i]] = s[p2[i]];
      }
    return t2;
  };
  const CheckableTag = /* @__PURE__ */ React__namespace.forwardRef((props, ref) => {
    const {
      prefixCls: customizePrefixCls,
      style: style2,
      className,
      checked,
      onChange,
      onClick
    } = props, restProps = __rest$1(props, ["prefixCls", "style", "className", "checked", "onChange", "onClick"]);
    const {
      getPrefixCls,
      tag
    } = React__namespace.useContext(ConfigContext);
    const handleClick = (e2) => {
      onChange === null || onChange === void 0 ? void 0 : onChange(!checked);
      onClick === null || onClick === void 0 ? void 0 : onClick(e2);
    };
    const prefixCls = getPrefixCls("tag", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);
    const cls = classNames(prefixCls, `${prefixCls}-checkable`, {
      [`${prefixCls}-checkable-checked`]: checked
    }, tag === null || tag === void 0 ? void 0 : tag.className, className, hashId, cssVarCls);
    return wrapCSSVar(/* @__PURE__ */ React__namespace.createElement("span", Object.assign({}, restProps, {
      ref,
      style: Object.assign(Object.assign({}, style2), tag === null || tag === void 0 ? void 0 : tag.style),
      className: cls,
      onClick: handleClick
    })));
  });
  const genPresetStyle = (token2) => genPresetColor(token2, (colorKey, _ref) => {
    let {
      textColor,
      lightBorderColor,
      lightColor,
      darkColor
    } = _ref;
    return {
      [`${token2.componentCls}${token2.componentCls}-${colorKey}`]: {
        color: textColor,
        background: lightColor,
        borderColor: lightBorderColor,
        // Inverse color
        "&-inverse": {
          color: token2.colorTextLightSolid,
          background: darkColor,
          borderColor: darkColor
        },
        [`&${token2.componentCls}-borderless`]: {
          borderColor: "transparent"
        }
      }
    };
  });
  const PresetCmp = genSubStyleComponent(["Tag", "preset"], (token2) => {
    const tagToken = prepareToken(token2);
    return genPresetStyle(tagToken);
  }, prepareComponentToken);
  function capitalize(str) {
    if (typeof str !== "string") {
      return str;
    }
    const ret = str.charAt(0).toUpperCase() + str.slice(1);
    return ret;
  }
  const genTagStatusStyle = (token2, status, cssVariableType) => {
    const capitalizedCssVariableType = capitalize(cssVariableType);
    return {
      [`${token2.componentCls}${token2.componentCls}-${status}`]: {
        color: token2[`color${cssVariableType}`],
        background: token2[`color${capitalizedCssVariableType}Bg`],
        borderColor: token2[`color${capitalizedCssVariableType}Border`],
        [`&${token2.componentCls}-borderless`]: {
          borderColor: "transparent"
        }
      }
    };
  };
  const StatusCmp = genSubStyleComponent(["Tag", "status"], (token2) => {
    const tagToken = prepareToken(token2);
    return [genTagStatusStyle(tagToken, "success", "Success"), genTagStatusStyle(tagToken, "processing", "Info"), genTagStatusStyle(tagToken, "error", "Error"), genTagStatusStyle(tagToken, "warning", "Warning")];
  }, prepareComponentToken);
  var __rest = function(s, e2) {
    var t2 = {};
    for (var p2 in s)
      if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
        t2[p2] = s[p2];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
        if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
          t2[p2[i]] = s[p2[i]];
      }
    return t2;
  };
  const InternalTag = /* @__PURE__ */ React__namespace.forwardRef((tagProps, ref) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      style: style2,
      children,
      icon,
      color,
      onClose,
      bordered = true,
      visible: deprecatedVisible
    } = tagProps, props = __rest(tagProps, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "bordered", "visible"]);
    const {
      getPrefixCls,
      direction,
      tag: tagContext
    } = React__namespace.useContext(ConfigContext);
    const [visible, setVisible] = React__namespace.useState(true);
    const domProps = omit(props, ["closeIcon", "closable"]);
    React__namespace.useEffect(() => {
      if (deprecatedVisible !== void 0) {
        setVisible(deprecatedVisible);
      }
    }, [deprecatedVisible]);
    const isPreset = isPresetColor(color);
    const isStatus = isPresetStatusColor(color);
    const isInternalColor = isPreset || isStatus;
    const tagStyle = Object.assign(Object.assign({
      backgroundColor: color && !isInternalColor ? color : void 0
    }, tagContext === null || tagContext === void 0 ? void 0 : tagContext.style), style2);
    const prefixCls = getPrefixCls("tag", customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);
    const tagClassName = classNames(prefixCls, tagContext === null || tagContext === void 0 ? void 0 : tagContext.className, {
      [`${prefixCls}-${color}`]: isInternalColor,
      [`${prefixCls}-has-color`]: color && !isInternalColor,
      [`${prefixCls}-hidden`]: !visible,
      [`${prefixCls}-rtl`]: direction === "rtl",
      [`${prefixCls}-borderless`]: !bordered
    }, className, rootClassName, hashId, cssVarCls);
    const handleCloseClick = (e2) => {
      e2.stopPropagation();
      onClose === null || onClose === void 0 ? void 0 : onClose(e2);
      if (e2.defaultPrevented) {
        return;
      }
      setVisible(false);
    };
    const [, mergedCloseIcon] = useClosable(pickClosable(tagProps), pickClosable(tagContext), {
      closable: false,
      closeIconRender: (iconNode2) => {
        const replacement = /* @__PURE__ */ React__namespace.createElement("span", {
          className: `${prefixCls}-close-icon`,
          onClick: handleCloseClick
        }, iconNode2);
        return replaceElement(iconNode2, replacement, (originProps) => ({
          onClick: (e2) => {
            var _a2;
            (_a2 = originProps === null || originProps === void 0 ? void 0 : originProps.onClick) === null || _a2 === void 0 ? void 0 : _a2.call(originProps, e2);
            handleCloseClick(e2);
          },
          className: classNames(originProps === null || originProps === void 0 ? void 0 : originProps.className, `${prefixCls}-close-icon`)
        }));
      }
    });
    const isNeedWave = typeof props.onClick === "function" || children && children.type === "a";
    const iconNode = icon || null;
    const kids = iconNode ? /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, iconNode, children && /* @__PURE__ */ React__namespace.createElement("span", null, children)) : children;
    const tagNode = /* @__PURE__ */ React__namespace.createElement("span", Object.assign({}, domProps, {
      ref,
      className: tagClassName,
      style: tagStyle
    }), kids, mergedCloseIcon, isPreset && /* @__PURE__ */ React__namespace.createElement(PresetCmp, {
      key: "preset",
      prefixCls
    }), isStatus && /* @__PURE__ */ React__namespace.createElement(StatusCmp, {
      key: "status",
      prefixCls
    }));
    return wrapCSSVar(isNeedWave ? /* @__PURE__ */ React__namespace.createElement(Wave, {
      component: "Tag"
    }, tagNode) : tagNode);
  });
  const Tag = InternalTag;
  Tag.CheckableTag = CheckableTag;
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
    var b2 = new u16(31);
    for (var i = 0; i < 31; ++i) {
      b2[i] = start += 1 << eb[i - 1];
    }
    var r = new i32(b2[30]);
    for (var i = 1; i < 30; ++i) {
      for (var j = b2[i]; j < b2[i + 1]; ++j) {
        r[j] = j - b2[i] << 5 | i;
      }
    }
    return { b: b2, r };
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
  var slc = function(v2, s, e2) {
    if (e2 == null || e2 > v2.length)
      e2 = v2.length;
    return new u8(v2.subarray(s, e2));
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
  var wbits = function(d2, p2, v2) {
    v2 <<= p2 & 7;
    var o = p2 / 8 | 0;
    d2[o] |= v2;
    d2[o + 1] |= v2 >> 8;
  };
  var wbits16 = function(d2, p2, v2) {
    v2 <<= p2 & 7;
    var o = p2 / 8 | 0;
    d2[o] |= v2;
    d2[o + 1] |= v2 >> 8;
    d2[o + 2] |= v2 >> 16;
  };
  var hTree = function(d2, mb) {
    var t2 = [];
    for (var i = 0; i < d2.length; ++i) {
      if (d2[i])
        t2.push({ s: i, f: d2[i] });
    }
    var s = t2.length;
    var t22 = t2.slice();
    if (!s)
      return { t: et, l: 0 };
    if (s == 1) {
      var v2 = new u8(t2[0].s + 1);
      v2[t2[0].s] = 1;
      return { t: v2, l: 1 };
    }
    t2.sort(function(a, b2) {
      return a.f - b2.f;
    });
    t2.push({ s: -1, f: 25001 });
    var l2 = t2[0], r = t2[1], i0 = 0, i1 = 1, i2 = 2;
    t2[0] = { s: -1, f: l2.f + r.f, l: l2, r };
    while (i1 != s - 1) {
      l2 = t2[t2[i0].f < t2[i2].f ? i0++ : i2++];
      r = t2[i0 != i1 && t2[i0].f < t2[i2].f ? i0++ : i2++];
      t2[i1++] = { s: -1, f: l2.f + r.f, l: l2, r };
    }
    var maxSym = t22[0].s;
    for (var i = 1; i < s; ++i) {
      if (t22[i].s > maxSym)
        maxSym = t22[i].s;
    }
    var tr = new u16(maxSym + 1);
    var mbt = ln(t2[i1 - 1], tr, 0);
    if (mbt > mb) {
      var i = 0, dt = 0;
      var lft = mbt - mb, cst = 1 << lft;
      t22.sort(function(a, b2) {
        return tr[b2.s] - tr[a.s] || a.f - b2.f;
      });
      for (; i < s; ++i) {
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
  var ln = function(n2, l2, d2) {
    return n2.s == -1 ? Math.max(ln(n2.l, l2, d2 + 1), ln(n2.r, l2, d2 + 1)) : l2[n2.s] = d2;
  };
  var lc = function(c2) {
    var s = c2.length;
    while (s && !c2[--s])
      ;
    var cl = new u16(++s);
    var cli = 0, cln = c2[0], cls = 1;
    var w = function(v2) {
      cl[cli++] = v2;
    };
    for (var i = 1; i <= s; ++i) {
      if (c2[i] == cln && i != s)
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
        cln = c2[i];
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
      var n2 = opt >> 13, c2 = opt & 8191;
      var msk_1 = (1 << plvl) - 1;
      var prev2 = st.p || new u16(32768), head = st.h || new u16(msk_1 + 1);
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
        prev2[imod] = pimod;
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
          var l2 = 2, d2 = 0, ch_1 = c2, dif = imod - pimod & 32767;
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
                  l2 = nl, d2 = dif;
                  if (nl > maxn)
                    break;
                  var mmd = Math.min(dif, nl - 2);
                  var md = 0;
                  for (var j = 0; j < mmd; ++j) {
                    var ti = i - dif + j & 32767;
                    var pti = prev2[ti];
                    var cd = ti - pti & 32767;
                    if (cd > md)
                      md = cd, pimod = ti;
                  }
                }
              }
              imod = pimod, pimod = prev2[imod];
              dif += imod - pimod & 32767;
            }
          }
          if (d2) {
            syms[li++] = 268435456 | revfl[l2] << 18 | revfd[d2];
            var lin = revfl[l2] & 31, din = revfd[d2] & 31;
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
        st.h = head, st.p = prev2, st.i = i, st.w = wi;
      }
    } else {
      for (var i = st.w || 0; i < s + lst; i += 65535) {
        var e2 = i + 65535;
        if (e2 >= s) {
          w[pos / 8 | 0] = lst;
          e2 = s;
        }
        pos = wfblk(w, pos + 1, dat.subarray(i, e2));
      }
      st.i = s;
    }
    return slc(o, 0, pre + shft(pos) + post);
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
      p: function(d2) {
        var cr = c2;
        for (var i = 0; i < d2.length; ++i)
          cr = crct[cr & 255 ^ d2[i]] ^ cr >>> 8;
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
  var mrg = function(a, b2) {
    var o = {};
    for (var k2 in a)
      o[k2] = a[k2];
    for (var k2 in b2)
      o[k2] = b2[k2];
    return o;
  };
  var wbytes = function(d2, b2, v2) {
    for (; v2; ++b2)
      d2[b2] = v2, v2 >>>= 8;
  };
  function deflateSync(data, opts) {
    return dopt(data, opts || {}, 0, 0);
  }
  var fltn = function(d2, p2, t2, o) {
    for (var k2 in d2) {
      var val = d2[k2], n2 = p2 + k2, op = o;
      if (Array.isArray(val))
        op = mrg(o, val[1]), val = val[0];
      if (val instanceof u8)
        t2[n2] = [val, op];
      else {
        t2[n2 += "/"] = [new u8(0), op];
        fltn(val, n2, t2, o);
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
    var w = function(v2) {
      ar[ai++] = v2;
    };
    for (var i = 0; i < l2; ++i) {
      if (ai + 5 > ar.length) {
        var n2 = new u8(ai + 8 + (l2 - i << 1));
        n2.set(ar);
        ar = n2;
      }
      var c2 = str.charCodeAt(i);
      if (c2 < 128 || latin1)
        w(c2);
      else if (c2 < 2048)
        w(192 | c2 >> 6), w(128 | c2 & 63);
      else if (c2 > 55295 && c2 < 57344)
        c2 = 65536 + (c2 & 1023 << 10) | str.charCodeAt(++i) & 1023, w(240 | c2 >> 18), w(128 | c2 >> 12 & 63), w(128 | c2 >> 6 & 63), w(128 | c2 & 63);
      else
        w(224 | c2 >> 12), w(128 | c2 >> 6 & 63), w(128 | c2 & 63);
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
  var wzh = function(d2, b2, f2, fn, u2, c2, ce, co) {
    var fl2 = fn.length, ex = f2.extra, col = co && co.length;
    var exl = exfl(ex);
    wbytes(d2, b2, ce != null ? 33639248 : 67324752), b2 += 4;
    if (ce != null)
      d2[b2++] = 20, d2[b2++] = f2.os;
    d2[b2] = 20, b2 += 2;
    d2[b2++] = f2.flag << 1 | (c2 < 0 && 8), d2[b2++] = u2 && 8;
    d2[b2++] = f2.compression & 255, d2[b2++] = f2.compression >> 8;
    var dt = new Date(f2.mtime == null ? Date.now() : f2.mtime), y = dt.getFullYear() - 1980;
    if (y < 0 || y > 119)
      err(10);
    wbytes(d2, b2, y << 25 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >> 1), b2 += 4;
    if (c2 != -1) {
      wbytes(d2, b2, f2.crc);
      wbytes(d2, b2 + 4, c2 < 0 ? -c2 - 2 : c2);
      wbytes(d2, b2 + 8, f2.size);
    }
    wbytes(d2, b2 + 12, fl2);
    wbytes(d2, b2 + 14, exl), b2 += 16;
    if (ce != null) {
      wbytes(d2, b2, col);
      wbytes(d2, b2 + 6, f2.attrs);
      wbytes(d2, b2 + 10, ce), b2 += 14;
    }
    d2.set(fn, b2);
    b2 += fl2;
    if (exl) {
      for (var k2 in ex) {
        var exf = ex[k2], l2 = exf.length;
        wbytes(d2, b2, +k2);
        wbytes(d2, b2 + 2, l2);
        d2.set(exf, b2 + 4), b2 += 4 + l2;
      }
    }
    if (col)
      d2.set(co, b2), b2 += col;
    return b2;
  };
  var wzf = function(o, b2, c2, d2, e2) {
    wbytes(o, b2, 101010256);
    wbytes(o, b2 + 8, c2);
    wbytes(o, b2 + 10, c2);
    wbytes(o, b2 + 12, d2);
    wbytes(o, b2 + 16, e2);
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
      var d2 = compression ? deflateSync(file, p2) : file, l2 = d2.length;
      var c2 = crc();
      c2.p(file);
      files2.push(mrg(p2, {
        size: file.length,
        crc: c2.d(),
        c: d2,
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
    (function(a, b2) {
      b2();
    })(commonjsGlobal, function() {
      function b2(a2, b3) {
        return "undefined" == typeof b3 ? b3 = { autoBom: false } : "object" != typeof b3 && (console.warn("Deprecated: Expected third argument to be a object"), b3 = { autoBom: !b3 }), b3.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], { type: a2.type }) : a2;
      }
      function c2(a2, b3, c3) {
        var d3 = new XMLHttpRequest();
        d3.open("GET", a2), d3.responseType = "blob", d3.onload = function() {
          g2(d3.response, b3, c3);
        }, d3.onerror = function() {
          console.error("could not download file");
        }, d3.send();
      }
      function d2(a2) {
        var b3 = new XMLHttpRequest();
        b3.open("HEAD", a2, false);
        try {
          b3.send();
        } catch (a3) {
        }
        return 200 <= b3.status && 299 >= b3.status;
      }
      function e2(a2) {
        try {
          a2.dispatchEvent(new MouseEvent("click"));
        } catch (c3) {
          var b3 = document.createEvent("MouseEvents");
          b3.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b3);
        }
      }
      var f2 = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof commonjsGlobal && commonjsGlobal.global === commonjsGlobal ? commonjsGlobal : void 0, a = f2.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g2 = f2.saveAs || ("object" != typeof window || window !== f2 ? function() {
      } : "download" in HTMLAnchorElement.prototype && !a ? function(b3, g3, h2) {
        var i = f2.URL || f2.webkitURL, j = document.createElement("a");
        g3 = g3 || b3.name || "download", j.download = g3, j.rel = "noopener", "string" == typeof b3 ? (j.href = b3, j.origin === location.origin ? e2(j) : d2(j.href) ? c2(b3, g3, h2) : e2(j, j.target = "_blank")) : (j.href = i.createObjectURL(b3), setTimeout(function() {
          i.revokeObjectURL(j.href);
        }, 4e4), setTimeout(function() {
          e2(j);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function(f3, g3, h2) {
        if (g3 = g3 || f3.name || "download", "string" != typeof f3)
          navigator.msSaveOrOpenBlob(b2(f3, h2), g3);
        else if (d2(f3))
          c2(f3, g3, h2);
        else {
          var i = document.createElement("a");
          i.href = f3, i.target = "_blank", setTimeout(function() {
            e2(i);
          });
        }
      } : function(b3, d3, e3, g3) {
        if (g3 = g3 || open("", "_blank"), g3 && (g3.document.title = g3.document.body.innerText = "downloading..."), "string" == typeof b3)
          return c2(b3, d3, e3);
        var h2 = "application/octet-stream" === b3.type, i = /constructor/i.test(f2.HTMLElement) || f2.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((j || h2 && i || a) && "undefined" != typeof FileReader) {
          var k2 = new FileReader();
          k2.onloadend = function() {
            var a2 = k2.result;
            a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g3 ? g3.location.href = a2 : location = a2, g3 = null;
          }, k2.readAsDataURL(b3);
        } else {
          var l2 = f2.URL || f2.webkitURL, m2 = l2.createObjectURL(b3);
          g3 ? g3.location = m2 : location.href = m2, g3 = null, setTimeout(function() {
            l2.revokeObjectURL(m2);
          }, 4e4);
        }
      });
      f2.saveAs = g2.saveAs = g2, module.exports = g2;
    });
  })(FileSaver_min);
  var FileSaver_minExports = FileSaver_min.exports;
  class Adapter {
  }
  class GenericAdapter extends Adapter {
    constructor() {
      super();
    }
    fetchGallery() {
      return {
        id: "",
        title: "",
        referer: window.location.href,
        tasks: []
      };
    }
    fetchTasks(gallery2) {
      return [];
    }
  }
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var TaskStatus = /* @__PURE__ */ ((TaskStatus2) => {
    TaskStatus2[TaskStatus2["Pending"] = 0] = "Pending";
    TaskStatus2[TaskStatus2["Running"] = 1] = "Running";
    TaskStatus2[TaskStatus2["Error"] = 2] = "Error";
    TaskStatus2[TaskStatus2["Done"] = 3] = "Done";
    TaskStatus2[TaskStatus2["All"] = 9] = "All";
    return TaskStatus2;
  })(TaskStatus || {});
  class TelegraphAdapter extends GenericAdapter {
    constructor() {
      super();
    }
    fetchGallery() {
      const tgGallery = _unsafeWindow.T;
      const header = document.querySelector("header.tl_article_header h1");
      const title = (header == null ? void 0 : header.innerText) ?? tgGallery.pageId;
      const gallery2 = {
        id: tgGallery.pageId,
        title,
        referer: window.location.href,
        tasks: []
      };
      this.fetchTasks(gallery2);
      return gallery2;
    }
    fetchTasks(gallery2) {
      const imgs = document.querySelectorAll("figure img");
      let index2 = 0;
      for (let img of imgs) {
        let pageNumber = `${++index2}`.padStart(3, "0");
        let dotIndex = img.src.lastIndexOf(".");
        const extName = img.src.substring(dotIndex);
        gallery2.tasks.push({
          id: `tg-${gallery2.id}-${pageNumber}`,
          url: img.src,
          fileName: `${pageNumber}${extName}`,
          status: TaskStatus.Pending
        });
      }
      return gallery2.tasks;
    }
  }
  class NHentaiAdapter extends GenericAdapter {
    constructor() {
      super();
    }
    fetchGallery() {
      const nhGallery = _unsafeWindow._gallery;
      const gallery2 = {
        id: `${nhGallery.id}`,
        title: nhGallery.title.japanese ?? nhGallery.id,
        subtitle: nhGallery.title.english,
        referer: window.location.href,
        tasks: []
      };
      this.fetchTasks(gallery2);
      return gallery2;
    }
    fetchTasks(gallery2) {
      const nhGallery = _unsafeWindow._gallery;
      const nhOptions = window._n_app.options;
      gallery2.tasks = nhGallery.images.pages.map((page, index2) => {
        const pageNumber = `${index2 + 1}`;
        const serverId = nhOptions.media_server;
        const mediaId = nhGallery.media_id;
        let extName = "jpg";
        let status = TaskStatus.Pending;
        switch (page.t) {
          case "j":
            extName = "jpg";
            break;
          case "p":
            extName = "png";
            break;
          default:
            console.warn(`未知的文件类型描述符：${page.t}`);
            status = TaskStatus.Error;
        }
        const fileName = `${pageNumber.padStart(3, "0")}.${extName}`;
        return {
          id: `nh-${gallery2.id}-${pageNumber}`,
          url: `https://i${serverId}.nhentai.net/galleries/${mediaId}/${index2 + 1}.${extName}`,
          fileName,
          status
        };
      });
      return gallery2.tasks;
    }
  }
  class EHentaiAdapter extends GenericAdapter {
    constructor() {
      super();
    }
  }
  class AdapterFactory {
    static create() {
      const domain = window.location.host;
      switch (domain) {
        case "telegra.ph":
          return new TelegraphAdapter();
        case "nhentai.net":
          return new NHentaiAdapter();
        case "e-hentai.net":
          return new EHentaiAdapter();
      }
      return new GenericAdapter();
    }
  }
  class Downloader {
  }
  class DownloaderMonkey extends Downloader {
    async download(task, onProgress) {
      return new Promise((resolve, reject) => {
        const request = {
          method: "GET",
          url: task.url,
          responseType: "blob",
          onload: async (event) => {
            const blob = event.response;
            const buffer = await event.response.arrayBuffer();
            const bytes = new Uint8Array(buffer);
            resolve({
              ...task,
              ...{
                mime: blob.type,
                bytes
              }
            });
          },
          onerror: (event) => {
            reject(event);
          },
          onprogress: (event) => {
            if (onProgress !== void 0) {
              onProgress(task.id, event.done, event.total);
            }
          }
        };
        _GM_xmlhttpRequest(request);
      });
    }
  }
  class DownloaderFactory {
    static getInstance() {
      return new DownloaderMonkey();
    }
  }
  const tasksAtom = atom([]);
  const taskStatusAtom = atom(TaskStatus.Pending);
  const titleAtom = atom("");
  const totalProgressAtom = atom((get2) => {
    const tasks = get2(tasksAtom);
    if (tasks.length > 0) {
      let sum = tasks.map((task) => {
        if (task.status == TaskStatus.Error)
          return 0;
        if (task.status == TaskStatus.Done)
          return 1;
        if (task.completed == void 0)
          return 0;
        if (task.total == void 0)
          return 0;
        let progress = task.completed / task.total;
        if (progress < 0)
          return 0;
        if (progress > 1)
          return 1;
        return progress;
      }).reduce((prev2, current) => prev2 + current, 0);
      return sum * 100 / tasks.length;
    }
  });
  const patchTaskAtom = atom(null, (get2, set2, patch) => {
    const tasks = get2(tasksAtom);
    const updated = tasks.map((task) => {
      if (task.id === patch.id) {
        return {
          ...task,
          ...patch
        };
      }
      return task;
    });
    set2(tasksAtom, updated);
  });
  const taskAmountsAtom = atom((get2) => {
    const tasks = get2(tasksAtom);
    const result = {};
    result[TaskStatus.All] = tasks.length;
    result[TaskStatus.Pending] = 0;
    result[TaskStatus.Running] = 0;
    result[TaskStatus.Error] = 0;
    result[TaskStatus.Done] = 0;
    tasks.forEach((task) => result[task.status]++);
    return result;
  });
  const useWindowSize = () => {
    const [windowSize, setWindowSize] = React.useState({
      width: window.innerWidth,
      height: window.innerHeight,
      scale: window.devicePixelRatio
    });
    React.useEffect(() => {
      const updateWindowSize = () => setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        scale: window.devicePixelRatio
      });
      window.addEventListener("resize", updateWindowSize);
      return () => window.removeEventListener("resize", updateWindowSize);
    }, []);
    return windowSize;
  };
  const DefaultStyle$1 = {};
  const TaskView = ({
    taskAtom,
    fileName,
    status,
    completed,
    total,
    onDownload,
    style: style2
  }) => {
    const taskStatus = useAtomValue(taskStatusAtom);
    let percent = 0;
    if (total !== void 0 && total > 0) {
      if (completed !== void 0 && completed > 0) {
        percent = completed * 100 / total;
      }
    }
    let statusName = "未知";
    let statusColor = "warning";
    if (status !== void 0) {
      switch (status) {
        case TaskStatus.Pending:
          statusName = "等待";
          statusColor = "default";
          break;
        case TaskStatus.Running:
          statusName = "下载";
          statusColor = "processing";
          break;
        case TaskStatus.Error:
          statusName = "错误";
          statusColor = "error";
          break;
        case TaskStatus.Done:
          statusName = "完成";
          statusColor = "success";
          break;
      }
    }
    if (taskStatus !== TaskStatus.All && status != taskStatus) {
      return null;
    }
    const styleMerged = {
      ...DefaultStyle$1,
      ...style2
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Flex,
      {
        className: "task-view",
        gap: 8,
        align: "center",
        style: styleMerged,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flex, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "file-name", children: fileName }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: statusColor, bordered: true, children: statusName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flex, { flex: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { percent }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flex, { gap: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onDownload, size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefIcon$4, {}) }) })
        ]
      }
    );
  };
  const adapter = AdapterFactory.create();
  const downloader = DownloaderFactory.getInstance();
  const gallery = adapter.fetchGallery();
  const files = {};
  const DefaultStyle = {
    position: "fixed",
    right: 10,
    top: 10,
    width: 400,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
    boxShadow: "1px 1px 3px gray",
    opacity: 0.9,
    padding: 12
  };
  const TaskPanel = ({
    style: style2 = DefaultStyle
  }) => {
    const windowSize = useWindowSize();
    const [tasks, setTasks] = useAtom(tasksAtom);
    const [taskStatus, setTaskStatus] = useAtom(taskStatusAtom);
    const totalProgress = useAtomValue(totalProgressAtom);
    const taskAmounts = useAtomValue(taskAmountsAtom);
    const patchTask = useSetAtom(patchTaskAtom);
    const [title, setTitle] = useAtom(titleAtom);
    const mergedStyle = {
      ...DefaultStyle,
      ...style2
    };
    function fetchTasks() {
      const { title: title2, tasks: tasks2 } = gallery;
      setTitle(title2);
      setTasks(tasks2);
    }
    function downloadAll() {
      tasks.forEach((task) => download(task));
    }
    function download(task) {
      downloader.download(task, onProgress).then(onComplete);
    }
    function onProgress(id, completed, total) {
      console.info(`任务${id}下载进度更新：${completed} / ${total}`);
      patchTask({
        id,
        completed,
        total
      });
    }
    function onComplete(result) {
      const { id, fileName, mime, bytes } = result;
      console.info(
        `${id}下载完成，文件类型：${mime}，缓存长度：${(bytes == null ? void 0 : bytes.length) ?? 0}`
      );
      const status = TaskStatus.Done;
      patchTask({
        id,
        status
      });
      if (fileName !== void 0 && bytes !== void 0) {
        files[fileName] = bytes;
      }
    }
    function pack() {
      const zipBytes = zipSync(files, { level: 0 });
      console.info(`压缩后字节数：${zipBytes.length}`);
      const zipBlob = new Blob([zipBytes], {
        type: "application/zip"
      });
      console.info(`创建Blob：`, zipBlob);
      FileSaver_minExports.saveAs(zipBlob, `${title}.zip`);
    }
    function setting() {
    }
    React.useEffect(() => {
      fetchTasks();
    }, []);
    let taskViews = [];
    taskViews = tasks.map((task) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      TaskView,
      {
        fileName: task.fileName,
        status: task.status,
        completed: task.completed,
        total: task.total,
        onDownload: () => download(task)
      },
      `${task.id}`
    ));
    const taskStatusOptions = [{
      label: `所有(${taskAmounts[TaskStatus.All]})`,
      value: TaskStatus.All
    }, {
      label: `等待(${taskAmounts[TaskStatus.Pending]})`,
      value: TaskStatus.Pending
    }, {
      label: `下载(${taskAmounts[TaskStatus.Running]})`,
      value: TaskStatus.Running
    }, {
      label: `错误(${taskAmounts[TaskStatus.Error]})`,
      value: TaskStatus.Error
    }, {
      label: `完成(${taskAmounts[TaskStatus.Done]})`,
      value: TaskStatus.Done
    }];
    if (taskStatus !== TaskStatus.All) {
      const amount = tasks.map(
        (t2) => t2.status === taskStatus ? 1 : 0
      ).reduce(
        (prev2, current) => prev2 + current,
        0
      );
      if (amount === 0) {
        taskViews.push(/* @__PURE__ */ jsxRuntimeExports.jsx(Empty, { description: "未获取任务" }, gallery.id));
      }
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Flex,
      {
        className: "task-panel",
        gap: 8,
        vertical: true,
        style: mergedStyle,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { justify: "start", gap: 16, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "small",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RefIcon$1, {}),
                disabled: tasks.length > 0,
                onClick: fetchTasks
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "small",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RefIcon$4, {}),
                onClick: downloadAll
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "small",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RefIcon$3, {}),
                disabled: tasks.length > 0 && tasks.length !== Object.keys(files).length,
                onClick: pack
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "small",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RefIcon, {}),
                onClick: setting
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { align: "center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flex, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "total-progress", children: "总下载进度：" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flex, { flex: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Progress,
              {
                percent: totalProgress,
                format: (percent) => `${(percent == null ? void 0 : percent.toFixed(0)) ?? "0"}%`
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Segmented,
            {
              options: taskStatusOptions,
              value: taskStatus,
              onChange: (value) => {
                console.info(`选择任务状态: ${value}`);
                setTaskStatus(value);
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Flex,
            {
              className: "task-list",
              vertical: true,
              gap: 3,
              style: {
                height: windowSize.height - 150,
                overflowX: "hidden",
                overflowY: "auto"
              },
              children: taskViews
            }
          )
        ]
      }
    );
  };
  const MangaPacker = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TaskPanel, {});
  };
  client.createRoot(
    (() => {
      const app = document.createElement("div");
      document.body.append(app);
      return app;
    })()
  ).render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(Provider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MangaPacker, {}) })
  );

})(React, ReactDOM);