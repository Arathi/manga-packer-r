// ==UserScript==
// @name         Manga Packer R
// @namespace    com.undsf.tmus.mgpk
// @version      1.10.0
// @author       Arathi of Nebnizilla
// @icon         https://vitejs.dev/logo.svg
// @homepageURL  https://github.com/Arathi/manga-packer-r
// @downloadURL  https://github.com/Arathi/manga-packer-r/raw/master/dist/manga-packer-r.user.js
// @updateURL    https://github.com/Arathi/manga-packer-r/raw/master/dist/manga-packer-r.user.js
// @match        https://telegra.ph/*
// @match        https://graph.org/*
// @match        https://nhentai.net/g/*/
// @match        https://nhentai.xxx/g/*/
// @match        https://e-hentai.org/g/*/*/
// @match        https://www.wnacg.com/photos-slide-aid-*.html
// @match        https://www.manhuagui.com/comic/*/*.html
// @require      https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js
// @require      https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// ==/UserScript==

(function (require$$0, require$$0$1) {
  'use strict';

  const d$1=new Set;const importCSS = async e=>{d$1.has(e)||(d$1.add(e),(t=>{typeof GM_addStyle=="function"?GM_addStyle(t):(document.head||document.documentElement).appendChild(document.createElement("style")).append(t);})(e));};

  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  var hasRequiredReactJsxRuntime_production_min;
  function requireReactJsxRuntime_production_min() {
    if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
    hasRequiredReactJsxRuntime_production_min = 1;
    var f2 = require$$0, k = Symbol.for("react.element"), l2 = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n2 = f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p2 = { key: true, ref: true, __self: true, __source: true };
    function q(c, a2, g2) {
      var b2, d2 = {}, e2 = null, h2 = null;
      void 0 !== g2 && (e2 = "" + g2);
      void 0 !== a2.key && (e2 = "" + a2.key);
      void 0 !== a2.ref && (h2 = a2.ref);
      for (b2 in a2) m.call(a2, b2) && !p2.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
      if (c && c.defaultProps) for (b2 in a2 = c.defaultProps, a2) void 0 === d2[b2] && (d2[b2] = a2[b2]);
      return { $$typeof: k, type: c, key: e2, ref: h2, props: d2, _owner: n2.current };
    }
    reactJsxRuntime_production_min.Fragment = l2;
    reactJsxRuntime_production_min.jsx = q;
    reactJsxRuntime_production_min.jsxs = q;
    return reactJsxRuntime_production_min;
  }
  var hasRequiredJsxRuntime;
  function requireJsxRuntime() {
    if (hasRequiredJsxRuntime) return jsxRuntime.exports;
    hasRequiredJsxRuntime = 1;
    {
      jsxRuntime.exports = requireReactJsxRuntime_production_min();
    }
    return jsxRuntime.exports;
  }
  var jsxRuntimeExports = requireJsxRuntime();
  var client = {};
  var hasRequiredClient;
  function requireClient() {
    if (hasRequiredClient) return client;
    hasRequiredClient = 1;
    var m = require$$0$1;
    {
      client.createRoot = m.createRoot;
      client.hydrateRoot = m.hydrateRoot;
    }
    return client;
  }
  var clientExports = requireClient();
  const ReactDOM = getDefaultExportFromCjs(clientExports);
  "stream" in Blob.prototype || Object.defineProperty(Blob.prototype, "stream", { value() {
    return new Response(this).body;
  } }), "setBigUint64" in DataView.prototype || Object.defineProperty(DataView.prototype, "setBigUint64", { value(e2, n2, t2) {
    const i2 = Number(0xffffffffn & n2), r2 = Number(n2 >> 32n);
    this.setUint32(e2 + (t2 ? 0 : 4), i2, t2), this.setUint32(e2 + (t2 ? 4 : 0), r2, t2);
  } });
  var e = (e2) => new DataView(new ArrayBuffer(e2)), n = (e2) => new Uint8Array(e2.buffer || e2), t = (e2) => new TextEncoder().encode(String(e2)), i = (e2) => Math.min(4294967295, Number(e2)), r = (e2) => Math.min(65535, Number(e2));
  function o(e2, i2, r2) {
    void 0 === i2 || i2 instanceof Date || (i2 = new Date(i2));
    const o2 = void 0 !== e2;
    if (r2 || (r2 = o2 ? 436 : 509), e2 instanceof File) return { isFile: o2, t: i2 || new Date(e2.lastModified), bytes: e2.stream(), mode: r2 };
    if (e2 instanceof Response) return { isFile: o2, t: i2 || new Date(e2.headers.get("Last-Modified") || Date.now()), bytes: e2.body, mode: r2 };
    if (void 0 === i2) i2 = new Date();
    else if (isNaN(i2)) throw new Error("Invalid modification date.");
    if (!o2) return { isFile: o2, t: i2, mode: r2 };
    if ("string" == typeof e2) return { isFile: o2, t: i2, bytes: t(e2), mode: r2 };
    if (e2 instanceof Blob) return { isFile: o2, t: i2, bytes: e2.stream(), mode: r2 };
    if (e2 instanceof Uint8Array || e2 instanceof ReadableStream) return { isFile: o2, t: i2, bytes: e2, mode: r2 };
    if (e2 instanceof ArrayBuffer || ArrayBuffer.isView(e2)) return { isFile: o2, t: i2, bytes: n(e2), mode: r2 };
    if (Symbol.asyncIterator in e2) return { isFile: o2, t: i2, bytes: f(e2[Symbol.asyncIterator]()), mode: r2 };
    throw new TypeError("Unsupported input format.");
  }
  function f(e2, n2 = e2) {
    return new ReadableStream({ async pull(n3) {
      let t2 = 0;
      for (; n3.desiredSize > t2; ) {
        const i2 = await e2.next();
        if (!i2.value) {
          n3.close();
          break;
        }
        {
          const e3 = a(i2.value);
          n3.enqueue(e3), t2 += e3.byteLength;
        }
      }
    }, cancel(e3) {
      n2.throw?.(e3);
    } });
  }
  function a(e2) {
    return "string" == typeof e2 ? t(e2) : e2 instanceof Uint8Array ? e2 : n(e2);
  }
  function s(e2, i2, r2) {
    let [o2, f2] = (function(e3) {
      return e3 ? e3 instanceof Uint8Array ? [e3, 1] : ArrayBuffer.isView(e3) || e3 instanceof ArrayBuffer ? [n(e3), 1] : [t(e3), 0] : [void 0, 0];
    })(i2);
    if (e2 instanceof File) return { i: d(o2 || t(e2.name)), o: BigInt(e2.size), u: f2 };
    if (e2 instanceof Response) {
      const n2 = e2.headers.get("content-disposition"), i3 = n2 && n2.match(/;\s*filename\*?\s*=\s*(?:UTF-\d+''|)["']?([^;"'\r\n]*)["']?(?:;|$)/i), a2 = i3 && i3[1] || e2.url && new URL(e2.url).pathname.split("/").findLast(Boolean), s2 = a2 && decodeURIComponent(a2), u2 = r2 || +e2.headers.get("content-length");
      return { i: d(o2 || t(s2)), o: BigInt(u2), u: f2 };
    }
    return o2 = d(o2, void 0 !== e2 || void 0 !== r2), "string" == typeof e2 ? { i: o2, o: BigInt(t(e2).length), u: f2 } : e2 instanceof Blob ? { i: o2, o: BigInt(e2.size), u: f2 } : e2 instanceof ArrayBuffer || ArrayBuffer.isView(e2) ? { i: o2, o: BigInt(e2.byteLength), u: f2 } : { i: o2, o: u(e2, r2), u: f2 };
  }
  function u(e2, n2) {
    return n2 > -1 ? BigInt(n2) : e2 ? void 0 : 0n;
  }
  function d(e2, n2 = 1) {
    if (!e2 || e2.every(((c) => 47 === c))) throw new Error("The file must have a name.");
    if (n2) for (; 47 === e2[e2.length - 1]; ) e2 = e2.subarray(0, -1);
    else 47 !== e2[e2.length - 1] && (e2 = new Uint8Array([...e2, 47]));
    return e2;
  }
  var l = new Uint32Array(256);
  for (let e2 = 0; e2 < 256; ++e2) {
    let n2 = e2;
    for (let e3 = 0; e3 < 8; ++e3) n2 = n2 >>> 1 ^ (1 & n2 && 3988292384);
    l[e2] = n2;
  }
  function y(e2, n2 = 0) {
    n2 = ~n2;
    for (var t2 = 0, i2 = e2.length; t2 < i2; t2++) n2 = n2 >>> 8 ^ l[255 & n2 ^ e2[t2]];
    return ~n2 >>> 0;
  }
  function w(e2, n2, t2 = 0) {
    const i2 = e2.getSeconds() >> 1 | e2.getMinutes() << 5 | e2.getHours() << 11, r2 = e2.getDate() | e2.getMonth() + 1 << 5 | e2.getFullYear() - 1980 << 9;
    n2.setUint16(t2, i2, 1), n2.setUint16(t2 + 2, r2, 1);
  }
  function B({ i: e2, u: n2 }, t2) {
    return 8 * (!n2 || (t2 ?? (function(e3) {
      try {
        b.decode(e3);
      } catch {
        return 0;
      }
      return 1;
    })(e2)));
  }
  var b = new TextDecoder("utf8", { fatal: 1 });
  function p(t2, i2 = 0) {
    const r2 = e(30);
    return r2.setUint32(0, 1347093252), r2.setUint32(4, 754976768 | i2), w(t2.t, r2, 10), r2.setUint16(26, t2.i.length, 1), n(r2);
  }
  async function* g(e2) {
    let { bytes: n2 } = e2;
    if ("then" in n2 && (n2 = await n2), n2 instanceof Uint8Array) yield n2, e2.l = y(n2, 0), e2.o = BigInt(n2.length);
    else {
      e2.o = 0n;
      const t2 = n2.getReader();
      for (; ; ) {
        const { value: n3, done: i2 } = await t2.read();
        if (i2) break;
        e2.l = y(n3, e2.l), e2.o += BigInt(n3.length), yield n3;
      }
    }
  }
  function I(t2, r2) {
    const o2 = e(16 + (r2 ? 8 : 0));
    return o2.setUint32(0, 1347094280), o2.setUint32(4, t2.isFile ? t2.l : 0, 1), r2 ? (o2.setBigUint64(8, t2.o, 1), o2.setBigUint64(16, t2.o, 1)) : (o2.setUint32(8, i(t2.o), 1), o2.setUint32(12, i(t2.o), 1)), n(o2);
  }
  function v(t2, r2, o2 = 0, f2 = 0) {
    const a2 = e(46);
    return a2.setUint32(0, 1347092738), a2.setUint32(4, 755182848), a2.setUint16(8, 2048 | o2), w(t2.t, a2, 12), a2.setUint32(16, t2.isFile ? t2.l : 0, 1), a2.setUint32(20, i(t2.o), 1), a2.setUint32(24, i(t2.o), 1), a2.setUint16(28, t2.i.length, 1), a2.setUint16(30, f2, 1), a2.setUint16(40, t2.mode | (t2.isFile ? 32768 : 16384), 1), a2.setUint32(42, i(r2), 1), n(a2);
  }
  function h(t2, i2, r2) {
    const o2 = e(r2);
    return o2.setUint16(0, 1, 1), o2.setUint16(2, r2 - 4, 1), 16 & r2 && (o2.setBigUint64(4, t2.o, 1), o2.setBigUint64(12, t2.o, 1)), o2.setBigUint64(r2 - 8, i2, 1), n(o2);
  }
  function D(e2) {
    return e2 instanceof File || e2 instanceof Response ? [[e2], [e2]] : [[e2.input, e2.name, e2.size], [e2.input, e2.lastModified, e2.mode]];
  }
  var S = (e2) => (function(e3) {
    let n2 = BigInt(22), t2 = 0n, i2 = 0;
    for (const r2 of e3) {
      if (!r2.i) throw new Error("Every file must have a non-empty name.");
      if (void 0 === r2.o) throw new Error(`Missing size for file "${new TextDecoder().decode(r2.i)}".`);
      const e4 = r2.o >= 0xffffffffn, o2 = t2 >= 0xffffffffn;
      t2 += BigInt(46 + r2.i.length + (e4 && 8)) + r2.o, n2 += BigInt(r2.i.length + 46 + (12 * o2 | 28 * e4)), i2 || (i2 = e4);
    }
    return (i2 || t2 >= 0xffffffffn) && (n2 += BigInt(76)), n2 + t2;
  })((function* (e3) {
    for (const n2 of e3) yield s(...D(n2)[0]);
  })(e2));
  function A(e2, n2 = {}) {
    const t2 = { "Content-Type": "application/zip", "Content-Disposition": "attachment" };
    return ("bigint" == typeof n2.length || Number.isInteger(n2.length)) && n2.length > 0 && (t2["Content-Length"] = String(n2.length)), n2.metadata && (t2["Content-Length"] = String(S(n2.metadata))), new Response(N(e2, n2), { headers: t2 });
  }
  function N(t2, a2 = {}) {
    const u2 = (function(e2) {
      const n2 = e2[Symbol.iterator in e2 ? Symbol.iterator : Symbol.asyncIterator]();
      return { async next() {
        const e3 = await n2.next();
        if (e3.done) return e3;
        const [t3, i2] = D(e3.value);
        return { done: 0, value: Object.assign(o(...i2), s(...t3)) };
      }, throw: n2.throw?.bind(n2), [Symbol.asyncIterator]() {
        return this;
      } };
    })(t2);
    return f((async function* (t3, o2) {
      const f2 = [];
      let a3 = 0n, s2 = 0n, u3 = 0;
      for await (const e2 of t3) {
        const n2 = B(e2, o2.buffersAreUTF8);
        yield p(e2, n2), yield new Uint8Array(e2.i), e2.isFile && (yield* g(e2));
        const t4 = e2.o >= 0xffffffffn, i2 = 12 * (a3 >= 0xffffffffn) | 28 * t4;
        yield I(e2, t4), f2.push(v(e2, a3, n2, i2)), f2.push(e2.i), i2 && f2.push(h(e2, a3, i2)), t4 && (a3 += 8n), s2++, a3 += BigInt(46 + e2.i.length) + e2.o, u3 || (u3 = t4);
      }
      let d2 = 0n;
      for (const e2 of f2) yield e2, d2 += BigInt(e2.length);
      if (u3 || a3 >= 0xffffffffn) {
        const t4 = e(76);
        t4.setUint32(0, 1347094022), t4.setBigUint64(4, BigInt(44), 1), t4.setUint32(12, 755182848), t4.setBigUint64(24, s2, 1), t4.setBigUint64(32, s2, 1), t4.setBigUint64(40, d2, 1), t4.setBigUint64(48, a3, 1), t4.setUint32(56, 1347094023), t4.setBigUint64(64, a3 + d2, 1), t4.setUint32(72, 1, 1), yield n(t4);
      }
      const l2 = e(22);
      l2.setUint32(0, 1347093766), l2.setUint16(8, r(s2), 1), l2.setUint16(10, r(s2), 1), l2.setUint32(12, i(d2), 1), l2.setUint32(16, i(a3), 1), yield n(l2);
    })(u2, a2), u2);
  }
  var FileSaver_min$1 = { exports: {} };
  var FileSaver_min = FileSaver_min$1.exports;
  var hasRequiredFileSaver_min;
  function requireFileSaver_min() {
    if (hasRequiredFileSaver_min) return FileSaver_min$1.exports;
    hasRequiredFileSaver_min = 1;
    (function(module, exports$1) {
      (function(a2, b2) {
        b2();
      })(FileSaver_min, function() {
        function b2(a3, b3) {
          return "undefined" == typeof b3 ? b3 = { autoBom: false } : "object" != typeof b3 && (console.warn("Deprecated: Expected third argument to be a object"), b3 = { autoBom: !b3 }), b3.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a3.type) ? new Blob(["\uFEFF", a3], { type: a3.type }) : a3;
        }
        function c(a3, b3, c2) {
          var d3 = new XMLHttpRequest();
          d3.open("GET", a3), d3.responseType = "blob", d3.onload = function() {
            g2(d3.response, b3, c2);
          }, d3.onerror = function() {
            console.error("could not download file");
          }, d3.send();
        }
        function d2(a3) {
          var b3 = new XMLHttpRequest();
          b3.open("HEAD", a3, false);
          try {
            b3.send();
          } catch (a4) {
          }
          return 200 <= b3.status && 299 >= b3.status;
        }
        function e2(a3) {
          try {
            a3.dispatchEvent(new MouseEvent("click"));
          } catch (c2) {
            var b3 = document.createEvent("MouseEvents");
            b3.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a3.dispatchEvent(b3);
          }
        }
        var f2 = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof commonjsGlobal && commonjsGlobal.global === commonjsGlobal ? commonjsGlobal : void 0, a2 = f2.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g2 = f2.saveAs || ("object" != typeof window || window !== f2 ? function() {
        } : "download" in HTMLAnchorElement.prototype && !a2 ? function(b3, g3, h2) {
          var i2 = f2.URL || f2.webkitURL, j = document.createElement("a");
          g3 = g3 || b3.name || "download", j.download = g3, j.rel = "noopener", "string" == typeof b3 ? (j.href = b3, j.origin === location.origin ? e2(j) : d2(j.href) ? c(b3, g3, h2) : e2(j, j.target = "_blank")) : (j.href = i2.createObjectURL(b3), setTimeout(function() {
            i2.revokeObjectURL(j.href);
          }, 4e4), setTimeout(function() {
            e2(j);
          }, 0));
        } : "msSaveOrOpenBlob" in navigator ? function(f3, g3, h2) {
          if (g3 = g3 || f3.name || "download", "string" != typeof f3) navigator.msSaveOrOpenBlob(b2(f3, h2), g3);
          else if (d2(f3)) c(f3, g3, h2);
          else {
            var i2 = document.createElement("a");
            i2.href = f3, i2.target = "_blank", setTimeout(function() {
              e2(i2);
            });
          }
        } : function(b3, d3, e3, g3) {
          if (g3 = g3 || open("", "_blank"), g3 && (g3.document.title = g3.document.body.innerText = "downloading..."), "string" == typeof b3) return c(b3, d3, e3);
          var h2 = "application/octet-stream" === b3.type, i2 = /constructor/i.test(f2.HTMLElement) || f2.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
          if ((j || h2 && i2 || a2) && "undefined" != typeof FileReader) {
            var k = new FileReader();
            k.onloadend = function() {
              var a3 = k.result;
              a3 = j ? a3 : a3.replace(/^data:[^;]*;/, "data:attachment/file;"), g3 ? g3.location.href = a3 : location = a3, g3 = null;
            }, k.readAsDataURL(b3);
          } else {
            var l2 = f2.URL || f2.webkitURL, m = l2.createObjectURL(b3);
            g3 ? g3.location = m : location.href = m, g3 = null, setTimeout(function() {
              l2.revokeObjectURL(m);
            }, 4e4);
          }
        });
        f2.saveAs = g2.saveAs = g2, module.exports = g2;
      });
    })(FileSaver_min$1);
    return FileSaver_min$1.exports;
  }
  var FileSaver_minExports = requireFileSaver_min();
  const TRACK_MEMO_SYMBOL = Symbol();
  const GET_ORIGINAL_SYMBOL = Symbol();
  const AFFECTED_PROPERTY = "a";
  const IS_TARGET_COPIED_PROPERTY = "f";
  const PROXY_PROPERTY = "p";
  const PROXY_CACHE_PROPERTY = "c";
  const TARGET_CACHE_PROPERTY = "t";
  const HAS_KEY_PROPERTY = "h";
  const ALL_OWN_KEYS_PROPERTY = "w";
  const HAS_OWN_KEY_PROPERTY = "o";
  const KEYS_PROPERTY = "k";
  let newProxy$1 = (target, handler) => new Proxy(target, handler);
  const getProto = Object.getPrototypeOf;
  const objectsToTrack = new WeakMap();
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
    const state2 = {
      [IS_TARGET_COPIED_PROPERTY]: isTargetCopied
    };
    let trackObject = false;
    const recordUsage = (type, key) => {
      if (!trackObject) {
        let used = state2[AFFECTED_PROPERTY].get(origObj);
        if (!used) {
          used = {};
          state2[AFFECTED_PROPERTY].set(origObj, used);
        }
        if (type === ALL_OWN_KEYS_PROPERTY) {
          used[ALL_OWN_KEYS_PROPERTY] = true;
        } else {
          let set = used[type];
          if (!set) {
            set = new Set();
            used[type] = set;
          }
          set.add(key);
        }
      }
    };
    const recordObjectAsUsed = () => {
      trackObject = true;
      state2[AFFECTED_PROPERTY].delete(origObj);
    };
    const handler = {
      get(target, key) {
        if (key === GET_ORIGINAL_SYMBOL) {
          return origObj;
        }
        recordUsage(KEYS_PROPERTY, key);
        return createProxy(Reflect.get(target, key), state2[AFFECTED_PROPERTY], state2[PROXY_CACHE_PROPERTY], state2[TARGET_CACHE_PROPERTY]);
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
    return [handler, state2];
  };
  const getOriginalObject = (obj) => (
obj[GET_ORIGINAL_SYMBOL] ||
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
    return prevKeys.length !== nextKeys.length || prevKeys.some((k, i2) => k !== nextKeys[i2]);
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
      if (hit === nextObj) {
        return false;
      }
      cache.set(prevObj, nextObj);
    }
    let changed = null;
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
      throw new Error("invalid used");
    return changed;
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
    const seen = new WeakSet();
    const walk = (x, path) => {
      var _a, _b, _c;
      if (seen.has(x)) {
        return;
      }
      if (isObject$1(x)) {
        seen.add(x);
      }
      const used = isObject$1(x) && affected.get(getOriginalObject(x));
      if (used) {
        (_a = used[HAS_KEY_PROPERTY]) === null || _a === void 0 ? void 0 : _a.forEach((key) => {
          const segment = `:has(${String(key)})`;
          list.push(path ? [...path, segment] : [segment]);
        });
        if (used[ALL_OWN_KEYS_PROPERTY] === true) {
          const segment = ":ownKeys";
          list.push(path ? [...path, segment] : [segment]);
        } else {
          (_b = used[HAS_OWN_KEY_PROPERTY]) === null || _b === void 0 ? void 0 : _b.forEach((key) => {
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
  const __vite_import_meta_env__$1 = {};
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

configurable: true
      };
      if (refSet.has(value)) {
        markToTrack(value, false);
      } else if (proxyStateMap.has(value)) {
        const [target2, ensureVersion] = proxyStateMap.get(
          value
        );
        desc.value = createSnapshotDefault(target2, ensureVersion());
      }
      Object.defineProperty(snap, key, desc);
    });
    return Object.preventExtensions(snap);
  };
  const createHandlerDefault = (isInitializing, addPropListener, removePropListener, notifyUpdate) => ({
    deleteProperty(target, prop) {
      Reflect.get(target, prop);
      removePropListener(prop);
      const deleted = Reflect.deleteProperty(target, prop);
      if (deleted) {
        notifyUpdate(void 0);
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
      notifyUpdate(void 0);
      return true;
    }
  });
  const proxyStateMap = new WeakMap();
  const refSet = new WeakSet();
  const snapCache = new WeakMap();
  const versionHolder = [1];
  const proxyCache = new WeakMap();
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
    const listeners = new Set();
    const notifyUpdate = (op, nextVersion = ++versionHolder[0]) => {
      if (version2 !== nextVersion) {
        checkVersion = version2 = nextVersion;
        listeners.forEach((listener) => listener(op, nextVersion));
      }
    };
    let checkVersion = version2;
    const ensureVersion = (nextCheckVersion = versionHolder[0]) => {
      if (checkVersion !== nextCheckVersion) {
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
      let newOp;
      if (op) {
        newOp = [...op];
        newOp[1] = [prop, ...newOp[1]];
      }
      notifyUpdate(newOp, nextVersion);
    };
    const propProxyStates = new Map();
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
      var _a;
      const entry = propProxyStates.get(prop);
      if (entry) {
        propProxyStates.delete(prop);
        (_a = entry[1]) == null ? void 0 : _a.call(entry);
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
      if (op) {
        ops.push(op);
      }
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
  const __vite_import_meta_env__ = {};
  const useAffectedDebugValue = (state2, affected) => {
    const pathList = require$$0.useRef(void 0);
    require$$0.useEffect(() => {
      pathList.current = affectedToPathList(state2, affected);
    });
    require$$0.useDebugValue(pathList.current);
  };
  const condUseAffectedDebugValue = useAffectedDebugValue;
  const targetCache = new WeakMap();
  function useSnapshot(proxyObject, options) {
    const notifyInSync = void 0;
    const affected = require$$0.useMemo(
      () => proxyObject && new WeakMap(),
      [proxyObject]
    );
    const lastSnapshot = require$$0.useRef(void 0);
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
new WeakMap()
          )) {
            return lastSnapshot.current;
          }
        } catch (e2) {
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
    const proxyCache2 = require$$0.useMemo(() => new WeakMap(), []);
    return createProxy(currSnapshot, affected, proxyCache2, targetCache);
  }
  var _GM_xmlhttpRequest = (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  class AbstractAdapter {
    generateGallery() {
      throw new Error(`生成Gallery方法未实现`);
    }
  }
  var TaskStatus = ((TaskStatus2) => {
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
      const { T: t2 } = _unsafeWindow;
      const tasks = {};
      const imgs = _unsafeWindow.document.querySelectorAll("img");
      imgs.forEach((img, key) => {
        const pageNo = `${key + 1}`.padStart(3, "0");
        const id = `${t2.pageId}-${pageNo}`;
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
        id: t2.pageId,
        name: header.innerHTML,
        tasks
      };
    }
  }
  const API_BASE_URL = "https://nhentai.net";
  const PATH_PATTERN = new RegExp(`^/g/([0-9]+)`);
  class NHentaiNetApiAdapter extends AbstractAdapter {
    async generateGallery() {
      let matches = PATH_PATTERN.exec(window.location.pathname);
      if (matches == null) {
        throw new Error("找不到gallery id");
      }
      const configResponse = await fetch(`${API_BASE_URL}/api/v2/config`);
      const config = await configResponse.json();
      console.info("图片服务器：", config.image_servers);
      const id = Number.parseInt(matches[1], 10);
      const galleryResponse = await fetch(`${API_BASE_URL}/api/v2/galleries/${id}`);
      const gallery = await galleryResponse.json();
      const name = gallery.title.english ?? gallery.title.japanese ?? `nhentai-${id}`;
      const tasks = await this.generateTasks(config, gallery);
      return {
        id,
        name,
        tasks
      };
    }
    async generateTasks(config, gallery) {
      const tasks = {};
      const imageServer = config.image_servers[0];
      for (let page of gallery.pages) {
        const name = `${page.number}`.padStart(3, "0");
        const id = `nh-${gallery.id}-${name}`;
        tasks[id] = {
          id,
          url: `${imageServer}/${page.path}`,
          name,
          status: TaskStatus.Pending
};
      }
      return tasks;
    }
  }
  const REGEX_EVAL = /window\["\\x65\\x76\\x61\\x6c"\]\((.*)\)/;
  const REGEX_IMG_DATA = /SMH\.imgData\(({.*})\)\.preInit\(\);/;
  class ManHuaGuiAdapter extends AbstractAdapter {
    async getImageData() {
      const script = window.document.querySelector("body > script:not([src])")?.innerText;
      if (script === void 0) {
        throw new Error("");
      }
      let matched = REGEX_EVAL.exec(script);
      if (matched === null) {
        throw new Error("");
      }
      const packed = matched[1];
      window.eval(`manhuagui_image_data = ${packed}`);
      matched = REGEX_IMG_DATA.exec(manhuagui_image_data);
      if (matched === null) {
        throw new Error("");
      }
      const json = matched[1];
      const imgData = JSON.parse(json);
      return imgData;
    }
    async generateGallery() {
      const smh = _unsafeWindow.SMH;
      const currentHost = smh.picserv.getCurHost();
      const pictureServer = smh.picserv.getHostName(currentHost);
      const imgData = await this.getImageData();
      console.info(imgData);
      const galleryId = `mhg-${imgData.bid}`;
      const tasks = {};
      const sl = "";
      imgData.files.forEach((file, index) => {
        const name = `${index + 1}`.padStart(3, "0");
        const taskId = `${galleryId}-${name}`;
        const uri = `${imgData.path}/${file}${sl}`;
        const url = smh.utils.getPath(pictureServer, uri);
        const task = {
          id: taskId,
          url,
          name,
          status: TaskStatus.Pending,
          referer: "https://www.manhuagui.com/"
        };
        tasks[taskId] = task;
      });
      return {
        id: galleryId,
        name: `${imgData.bname}-${imgData.cname}`,
        tasks
      };
    }
  }
  const URL_REGEX = /aid-(\d+)\.html/;
  class WnacgAdapter extends AbstractAdapter {
    async generateGallery() {
      let url = _unsafeWindow.location.href;
      let matches = URL_REGEX.exec(url);
      let galleryId;
      if (matches == null || matches.length !== 2) {
        console.error("任务获取失败！");
        throw new Error("任务获取失败");
      }
      galleryId = matches[1];
      let title = _unsafeWindow.document.title;
      let suffixIndex = title.indexOf(" - 列表");
      let name = title.substring(0, suffixIndex);
      let tasks = {};
      while (_unsafeWindow.imglist == void 0) {
        console.info("等待图片列表加载完成");
      }
      let imgList = _unsafeWindow.imglist;
      for (let i2 = 0; i2 < imgList.length; i2++) {
        let pageNo = `${i2 + 1}`.padStart(3, "0");
        let taskId = `${galleryId}-${pageNo}`;
        let task = {
          id: taskId,
          url: imgList[i2].url,
          name: pageNo,
          status: TaskStatus.Pending,
          referer: url
        };
        tasks[taskId] = task;
      }
      let gallery = {
        id: `htmg-${galleryId}`,
        name,
        tasks
      };
      console.info("gallery = ", gallery);
      return gallery;
    }
  }
  const indexLess$5 = ".mgpk-button{padding:5px 10px 1px}";
  importCSS(indexLess$5);
  const Button = ({ children, onClick }) => {
    return jsxRuntimeExports.jsx("button", { className: "mgpk-button", onClick, children });
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
    return jsxRuntimeExports.jsx(
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
    return jsxRuntimeExports.jsx(
      "svg",
      {
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "8642",
        width: "200",
        height: "200",
        style,
        children: jsxRuntimeExports.jsx(
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
    return jsxRuntimeExports.jsxs(
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
jsxRuntimeExports.jsx(
            "path",
            {
              d: "M505.7 661c3.2 4.1 9.4 4.1 12.6 0l112-141.7c4.1-5.2 0.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z",
              "p-id": "8937"
            }
          ),
jsxRuntimeExports.jsx(
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
    return jsxRuntimeExports.jsxs(
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
jsxRuntimeExports.jsx(
            "path",
            {
              d: "M296 392h64v64h-64zM296 582v160h128V582h-64v-62h-64v62z m80 48v64h-32v-64h32zM360 328h64v64h-64zM296 264h64v64h-64zM360 456h64v64h-64zM360 200h64v64h-64z",
              "p-id": "9085"
            }
          ),
jsxRuntimeExports.jsx(
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
    return jsxRuntimeExports.jsx(
      "svg",
      {
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "8789",
        width: "200",
        height: "200",
        style,
        children: jsxRuntimeExports.jsx(
          "path",
          {
            d: "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3c-3.8 5.3-0.1 12.7 6.5 12.7h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z",
            "p-id": "8790"
          }
        )
      }
    );
  };
  const indexLess$4 = ".progress-bar{border:1px solid gray}.progress-bar .blocks{width:100%}.progress-bar .blocks .progress-block-pending{background-color:#dadada}.progress-bar .blocks .progress-block-running{background-color:#165dff}.progress-bar .blocks .progress-block-success{background-color:#00b42a}.progress-bar .blocks .progress-block-error{background-color:#f53f3f}";
  importCSS(indexLess$4);
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
jsxRuntimeExports.jsx(
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
jsxRuntimeExports.jsx(
            Flex,
            {
              className: `progress-block-${statusName}`,
              flex: percent
            },
            `block-running`
          )
        );
        blocks.push(
jsxRuntimeExports.jsx(
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
jsxRuntimeExports.jsx(
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
        return jsxRuntimeExports.jsx(
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
    return jsxRuntimeExports.jsxs(Flex, { className: "progress-bar", direction: "column", flex, children: [
jsxRuntimeExports.jsx(Flex, { className: "blocks", style: { height }, children: blocks }),
jsxRuntimeExports.jsx(
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
  const useWindowSize = () => {
    const [size, setSize] = require$$0.useState({
      width: _unsafeWindow.innerWidth,
      height: _unsafeWindow.innerHeight
    });
    require$$0.useEffect(() => {
      addEventListener("resize", () => {
        setSize({
          width: _unsafeWindow.innerWidth,
          height: _unsafeWindow.innerHeight
        });
      });
    }, []);
    return size;
  };
  const state = proxy({
gallery: void 0,
    status: void 0,

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
      return this.tasks.filter((t2) => t2.status === this.status);
    },
    get statusList() {
      const results = this.tasks.map((t2) => t2.status);
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
});
  const indexLess$3 = ".task-view .task-file-name{width:40px;-webkit-user-select:none;user-select:none}";
  importCSS(indexLess$3);
  const TaskView = ({ task }) => {
    const { id, name, status, total, loaded } = task;
    return jsxRuntimeExports.jsxs(Flex, { className: "task-view", gap: 8, align: "center", children: [
jsxRuntimeExports.jsx(Flex, { className: "task-name", justify: "end", children: name }),
jsxRuntimeExports.jsx(
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
  const indexLess$2 = ".task-list{padding-right:2px;overflow-x:hidden;overflow-y:scroll}.task-list::-webkit-scrollbar{width:2px}.task-list::-webkit-scrollbar-thumb{background-color:#0006}.task-list::-webkit-scrollbar-track{background-color:#0000001a}";
  importCSS(indexLess$2);
  const TaskList = ({ tasks = [], style }) => {
    const taskViews = tasks.map((task) => {
      return jsxRuntimeExports.jsx(TaskView, { task }, `task-${task.id}`);
    });
    return jsxRuntimeExports.jsx(Flex, { className: "task-list", direction: "column", gap: 4, style, children: taskViews });
  };
  const indexLess$1 = ".task-filter{border:1px solid gray;border-radius:0;font-size:12px}.task-filter .task-filter-item{padding:3px;border-left:1px solid gray;-webkit-user-select:none;user-select:none}.task-filter .task-filter-item:first-child{border-left:unset}.task-filter .task-filter-item-all-active{background:linear-gradient(to right,#dadada,#165dff,#f53f3f,#00b42a);color:#fff}.task-filter .task-filter-item-pending-active{background-color:#dadada;color:#000}.task-filter .task-filter-item-running-active{background-color:#165dff;color:#fff}.task-filter .task-filter-item-error-active{background-color:#f53f3f;color:#fff}.task-filter .task-filter-item-success-active{background-color:#00b42a;color:#fff}";
  importCSS(indexLess$1);
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
      return jsxRuntimeExports.jsxs(
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
    return jsxRuntimeExports.jsxs(Flex, { className: "task-filter", children: [
jsxRuntimeExports.jsx(
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
  const version = "1.10.0";
  function RadioGroup({ value, items = [], onChange }) {
    const radios = items.map(
      ({ value: radioValue, element }) => {
        const children = element ?? `${radioValue}`;
        const backgroundColor = value === radioValue ? "rgba(128, 128, 128, 0.3)" : void 0;
        return jsxRuntimeExports.jsx(
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
    return jsxRuntimeExports.jsx(Flex, { flex: 1, children: radios });
  }
  const indexLess = ".task-panel{position:fixed;width:400px;top:8px;right:8px;background-color:#ffffffe6;border:solid 1px rgba(127,127,127,.8);border-radius:5px;padding:8px;font-size:16px;font-weight:400;color:#000}";
  importCSS(indexLess);
  const files = {};
  const TaskPanel = (props) => {
    const windowSize = useWindowSize();
    const { margin = 8, padding = 8, border = 1 } = props;
    const panelHeight = windowSize.height - 2 * (margin + padding + border);
    const [minimized, setMinimized] = require$$0.useState(false);
    const snap = useSnapshot(state);
    const sizeToggleIcon = minimized ? jsxRuntimeExports.jsx(IconDown, {}) : jsxRuntimeExports.jsx(IconUp, {});
    function onDownloadAllClick() {
      console.debug(`点击下载按钮`);
      for (const task of snap.tasks) {
        if (task.status !== TaskStatus.Success) {
          download(task);
        }
      }
    }
    async function onSaveClick() {
      console.debug(`点击保存按钮`);
      if (snap.gallery === void 0) {
        console.warn("gallery不存在");
        return;
      }
      const inputs = [];
      for (const fileName in files) {
        const file = files[fileName];
        inputs.push({
          name: fileName,
          input: file
        });
      }
      const zipBlob = await A(inputs).blob();
      const zipName = `${snap.gallery.name}.cbz`;
      FileSaver_minExports.saveAs(zipBlob, zipName);
    }
    function onToggleClick() {
      console.debug(`切换 minimized = ${!minimized}`);
      setMinimized(!minimized);
    }
    function onTaskFilterChange(status) {
      state.status = status;
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
          console.info(`任务 ${task.id} 下载进度更新：${event.loaded} / ${event.total}`);
          updateTask({
            id: task.id,
            status: TaskStatus.Running,
            loaded: event.loaded,
            total: event.total
          });
        },
        onload: async (event) => {
          const blob = event.response;
          const url = event.finalUrl;
          console.info(`任务 ${task.id} 下载完成`, {
            size: blob.size,
            type: blob.type,
            url
          });
          if (event.status === 200) {
            updateTask({
              id: task.id,
              status: TaskStatus.Success,
              loaded: blob.size,
              total: blob.size
            });
            const buffer = await blob.arrayBuffer();
            let extName = void 0;
            const slash = url.lastIndexOf("/");
            if (slash > 0) {
              const fileName2 = url.substring(slash + 1);
              const dot = fileName2.lastIndexOf(".");
              if (dot > 0) {
                extName = fileName2.substring(dot + 1);
              }
            }
            if (extName === void 0) {
              console.warn("无法从url获取扩展名：", url);
              switch (blob.type) {
                case "image/jpeg":
                  extName = "jpg";
                  break;
                case "image/png":
                  extName = "png";
                  break;
                case "image/webp":
                  extName = "webp";
                  break;
                default:
                  console.warn(`未知的blob类型：${blob.type}`);
                  if (blob.type.startsWith("image/")) {
                    extName = blob.type.substring(6);
                  }
                  break;
              }
            }
            if (extName === void 0) {
              console.warn("无法从blob获取扩展名", blob.type);
              extName = "jpg";
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
      if (state.gallery !== void 0 && patch.id !== void 0) {
        const id = patch.id;
        const task = state.gallery.tasks[id];
        if (task !== void 0) {
          state.gallery.tasks[id] = {
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
          case "graph.org":
            adapter = new TelegraphAdapter();
            break;
          case "nhentai.net":
            adapter = new NHentaiNetApiAdapter();
            break;
          case "www.wnacg.com":
            adapter = new WnacgAdapter();
            break;
          case "www.manhuagui.com":
            adapter = new ManHuaGuiAdapter();
            break;
        }
        if (adapter !== void 0) {
          console.info(`正在生成gallery`);
          const gallery = await adapter.generateGallery();
          state.gallery = gallery;
        }
      }
    }
    require$$0.useEffect(() => {
      init();
    }, []);
jsxRuntimeExports.jsx(TaskFilter, { status: snap.status, onChange: onTaskFilterChange });
    const hidable = minimized ? null : jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
jsxRuntimeExports.jsx(
        RadioGroup,
        {
          value: state.status,
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
            state.status = value;
          }
        }
      ),
jsxRuntimeExports.jsx(
        TaskList,
        {
          tasks: state.filtered,
          style: {
            height: panelHeight - 99
          }
        }
      )
    ] });
    return jsxRuntimeExports.jsxs(
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
jsxRuntimeExports.jsxs(Flex, { className: "buttons-row", children: [
jsxRuntimeExports.jsxs(Flex, { className: "buttons-left", justify: "start", gap: 8, children: [
jsxRuntimeExports.jsx(Button, { className: "btn-download", onClick: onDownloadAllClick, children: jsxRuntimeExports.jsx(IconDownload, {}) }),
jsxRuntimeExports.jsx(Button, { className: "btn-save", onClick: onSaveClick, children: jsxRuntimeExports.jsx(IconSave, {}) })
            ] }),
jsxRuntimeExports.jsxs(Flex, { className: "buttons-right", flex: 1, justify: "end", align: "center", gap: 8, children: [
jsxRuntimeExports.jsx("span", { children: version }),
jsxRuntimeExports.jsx(Button, { className: "btn-toggle", onClick: onToggleClick, children: sizeToggleIcon })
            ] })
          ] }),
jsxRuntimeExports.jsx(Flex, { className: "total-progress-row", align: "center", gap: 8, children: jsxRuntimeExports.jsx(ProgressBar, { flex: 1, statusList: state.statusList }) }),
          hidable
        ]
      }
    );
  };
  const root = document.createElement("div");
  root.className = "app";
  root.id = "mgpk";
  document.body.append(root);
  ReactDOM.createRoot(root).render( jsxRuntimeExports.jsx(TaskPanel, { margin: 8, padding: 8 }));

})(React, ReactDOM);