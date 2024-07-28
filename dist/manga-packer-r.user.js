// ==UserScript==
// @name         Manga Packer R
// @namespace    com.undsf.tmus.mgpk
// @version      1.6.5
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

(r=>{if(typeof GM_addStyle=="function"){GM_addStyle(r);return}const o=document.createElement("style");o.textContent=r,document.head.append(o)})(' .arco-btn{display:inline-block;position:relative;outline:none;font-weight:400;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;user-select:none;cursor:pointer;white-space:nowrap;transition:all .1s cubic-bezier(0,0,1,1);box-sizing:border-box;line-height:1.5715}.arco-btn>a:only-child{color:currentColor}.arco-btn:active{transition:none}.arco-btn:empty{display:inline-block;vertical-align:bottom}.arco-btn-long{display:block;width:100%}.arco-btn-link{display:inline-flex;align-items:center;justify-content:center;text-decoration:none}.arco-btn-link:not([href]){color:var(--color-text-4)}.arco-btn-link:hover{text-decoration:none}.arco-btn-loading{cursor:default;position:relative}.arco-btn-loading:before{content:"";position:absolute;top:-1px;right:-1px;bottom:-1px;left:-1px;z-index:1;display:block;background:#fff;border-radius:inherit;opacity:.4;transition:opacity .1s cubic-bezier(0,0,1,1);pointer-events:none}.arco-btn-loading-fixed-width{transition:none}.arco-btn-two-chinese-chars>*:not(svg){letter-spacing:.3em;margin-right:-.3em}a.arco-btn-icon-only{display:inline-flex;align-items:center;justify-content:center;vertical-align:top}.arco-btn-outline:not(.arco-btn-disabled){background-color:transparent;color:rgb(var(--primary-6));border:1px solid rgb(var(--primary-6))}.arco-btn-outline:not(.arco-btn-disabled):not(.arco-btn-loading):hover{border-color:rgb(var(--primary-5));color:rgb(var(--primary-5));background-color:transparent}.arco-btn-outline:not(.arco-btn-disabled):not(.arco-btn-loading):active{border-color:rgb(var(--primary-7));color:rgb(var(--primary-7));background-color:transparent}.arco-btn-outline:not(.arco-btn-disabled):focus-visible{box-shadow:0 0 0 2px rgb(var(--primary-3))}.arco-btn-outline.arco-btn-disabled{background-color:transparent;color:var(--color-primary-light-3);border:1px solid var(--color-primary-light-3);cursor:not-allowed}.arco-btn-outline.arco-btn-status-warning:not(.arco-btn-disabled){background-color:transparent;color:rgb(var(--warning-6));border-color:rgb(var(--warning-6))}.arco-btn-outline.arco-btn-status-warning:not(.arco-btn-disabled):not(.arco-btn-loading):hover{border-color:rgb(var(--warning-5));color:rgb(var(--warning-5));background-color:transparent}.arco-btn-outline.arco-btn-status-warning:not(.arco-btn-disabled):not(.arco-btn-loading):active{border-color:rgb(var(--warning-7));color:rgb(var(--warning-7));background-color:transparent}.arco-btn-outline.arco-btn-status-warning:not(.arco-btn-disabled):focus-visible{box-shadow:0 0 0 2px rgb(var(--warning-3))}.arco-btn-outline.arco-btn-status-warning.arco-btn-disabled{color:var(--color-warning-light-3);background-color:transparent;border:1px solid var(--color-warning-light-3)}.arco-btn-outline.arco-btn-status-danger:not(.arco-btn-disabled){background-color:transparent;color:rgb(var(--danger-6));border-color:rgb(var(--danger-6))}.arco-btn-outline.arco-btn-status-danger:not(.arco-btn-disabled):not(.arco-btn-loading):hover{border-color:rgb(var(--danger-5));color:rgb(var(--danger-5));background-color:transparent}.arco-btn-outline.arco-btn-status-danger:not(.arco-btn-disabled):not(.arco-btn-loading):active{border-color:rgb(var(--danger-7));color:rgb(var(--danger-7));background-color:transparent}.arco-btn-outline.arco-btn-status-danger:not(.arco-btn-disabled):focus-visible{box-shadow:0 0 0 2px rgb(var(--danger-3))}.arco-btn-outline.arco-btn-status-danger.arco-btn-disabled{color:var(--color-danger-light-3);background-color:transparent;border:1px solid var(--color-danger-light-3)}.arco-btn-outline.arco-btn-status-success:not(.arco-btn-disabled){background-color:transparent;color:rgb(var(--success-6));border-color:rgb(var(--success-6))}.arco-btn-outline.arco-btn-status-success:not(.arco-btn-disabled):not(.arco-btn-loading):hover{border-color:rgb(var(--success-5));color:rgb(var(--success-5));background-color:transparent}.arco-btn-outline.arco-btn-status-success:not(.arco-btn-disabled):not(.arco-btn-loading):active{border-color:rgb(var(--success-7));color:rgb(var(--success-7));background-color:transparent}.arco-btn-outline.arco-btn-status-success:not(.arco-btn-disabled):focus-visible{box-shadow:0 0 0 2px rgb(var(--success-3))}.arco-btn-outline.arco-btn-status-success.arco-btn-disabled{color:var(--color-success-light-3);background-color:transparent;border:1px solid var(--color-success-light-3)}.arco-btn-primary:not(.arco-btn-disabled){background-color:rgb(var(--primary-6));color:#fff;border:1px solid transparent}.arco-btn-primary:not(.arco-btn-disabled):not(.arco-btn-loading):hover{border-color:transparent;color:#fff;background-color:rgb(var(--primary-5))}.arco-btn-primary:not(.arco-btn-disabled):not(.arco-btn-loading):active{border-color:transparent;color:#fff;background-color:rgb(var(--primary-7))}.arco-btn-primary:not(.arco-btn-disabled):focus-visible{box-shadow:0 0 0 2px rgb(var(--primary-3))}.arco-btn-primary.arco-btn-disabled{background-color:var(--color-primary-light-3);color:#fff;border:1px solid transparent;cursor:not-allowed}.arco-btn-primary.arco-btn-status-warning:not(.arco-btn-disabled){background-color:rgb(var(--warning-6));color:#fff;border-color:transparent}.arco-btn-primary.arco-btn-status-warning:not(.arco-btn-disabled):not(.arco-btn-loading):hover{border-color:transparent;color:#fff;background-color:rgb(var(--warning-5))}.arco-btn-primary.arco-btn-status-warning:not(.arco-btn-disabled):not(.arco-btn-loading):active{border-color:transparent;color:#fff;background-color:rgb(var(--warning-7))}.arco-btn-primary.arco-btn-status-warning:not(.arco-btn-disabled):focus-visible{box-shadow:0 0 0 2px rgb(var(--warning-3))}.arco-btn-primary.arco-btn-status-warning.arco-btn-disabled{color:#fff;background-color:var(--color-warning-light-3);border:1px solid transparent}.arco-btn-primary.arco-btn-status-danger:not(.arco-btn-disabled){background-color:rgb(var(--danger-6));color:#fff;border-color:transparent}.arco-btn-primary.arco-btn-status-danger:not(.arco-btn-disabled):not(.arco-btn-loading):hover{border-color:transparent;color:#fff;background-color:rgb(var(--danger-5))}.arco-btn-primary.arco-btn-status-danger:not(.arco-btn-disabled):not(.arco-btn-loading):active{border-color:transparent;color:#fff;background-color:rgb(var(--danger-7))}.arco-btn-primary.arco-btn-status-danger:not(.arco-btn-disabled):focus-visible{box-shadow:0 0 0 2px rgb(var(--danger-3))}.arco-btn-primary.arco-btn-status-danger.arco-btn-disabled{color:#fff;background-color:var(--color-danger-light-3);border:1px solid transparent}.arco-btn-primary.arco-btn-status-success:not(.arco-btn-disabled){background-color:rgb(var(--success-6));color:#fff;border-color:transparent}.arco-btn-primary.arco-btn-status-success:not(.arco-btn-disabled):not(.arco-btn-loading):hover{border-color:transparent;color:#fff;background-color:rgb(var(--success-5))}.arco-btn-primary.arco-btn-status-success:not(.arco-btn-disabled):not(.arco-btn-loading):active{border-color:transparent;color:#fff;background-color:rgb(var(--success-7))}.arco-btn-primary.arco-btn-status-success:not(.arco-btn-disabled):focus-visible{box-shadow:0 0 0 2px rgb(var(--success-3))}.arco-btn-primary.arco-btn-status-success.arco-btn-disabled{color:#fff;background-color:var(--color-success-light-3);border:1px solid transparent}.arco-btn-secondary:not(.arco-btn-disabled){background-color:var(--color-secondary);color:var(--color-text-2);border:1px solid transparent}.arco-btn-secondary:not(.arco-btn-disabled):not(.arco-btn-loading):hover{border-color:transparent;color:var(--color-text-2);background-color:var(--color-secondary-hover)}.arco-btn-secondary:not(.arco-btn-disabled):not(.arco-btn-loading):active{border-color:transparent;color:var(--color-text-2);background-color:var(--color-secondary-active)}.arco-btn-secondary:not(.arco-btn-disabled):focus-visible{box-shadow:0 0 0 2px var(--color-neutral-4)}.arco-btn-secondary.arco-btn-disabled{background-color:var(--color-secondary-disabled);color:var(--color-text-4);border:1px solid transparent;cursor:not-allowed}.arco-btn-secondary.arco-btn-status-warning:not(.arco-btn-disabled){background-color:var(--color-warning-light-1);color:rgb(var(--warning-6));border-color:transparent}.arco-btn-secondary.arco-btn-status-warning:not(.arco-btn-disabled):not(.arco-btn-loading):hover{border-color:transparent;color:rgb(var(--warning-6));background-color:var(--color-warning-light-2)}.arco-btn-secondary.arco-btn-status-warning:not(.arco-btn-disabled):not(.arco-btn-loading):active{border-color:transparent;color:rgb(var(--warning-6));background-color:var(--color-warning-light-3)}.arco-btn-secondary.arco-btn-status-warning:not(.arco-btn-disabled):focus-visible{box-shadow:0 0 0 2px rgb(var(--warning-3))}.arco-btn-secondary.arco-btn-status-warning.arco-btn-disabled{color:var(--color-warning-light-3);background-color:var(--color-warning-light-1);border:1px solid transparent}.arco-btn-secondary.arco-btn-status-danger:not(.arco-btn-disabled){background-color:var(--color-danger-light-1);color:rgb(var(--danger-6));border-color:transparent}.arco-btn-secondary.arco-btn-status-danger:not(.arco-btn-disabled):not(.arco-btn-loading):hover{border-color:transparent;color:rgb(var(--danger-6));background-color:var(--color-danger-light-2)}.arco-btn-secondary.arco-btn-status-danger:not(.arco-btn-disabled):not(.arco-btn-loading):active{border-color:transparent;color:rgb(var(--danger-6));background-color:var(--color-danger-light-3)}.arco-btn-secondary.arco-btn-status-danger:not(.arco-btn-disabled):focus-visible{box-shadow:0 0 0 2px rgb(var(--danger-3))}.arco-btn-secondary.arco-btn-status-danger.arco-btn-disabled{color:var(--color-danger-light-3);background-color:var(--color-danger-light-1);border:1px solid transparent}.arco-btn-secondary.arco-btn-status-success:not(.arco-btn-disabled){background-color:var(--color-success-light-1);color:rgb(var(--success-6));border-color:transparent}.arco-btn-secondary.arco-btn-status-success:not(.arco-btn-disabled):not(.arco-btn-loading):hover{border-color:transparent;color:rgb(var(--success-6));background-color:var(--color-success-light-2)}.arco-btn-secondary.arco-btn-status-success:not(.arco-btn-disabled):not(.arco-btn-loading):active{border-color:transparent;color:rgb(var(--success-6));background-color:var(--color-success-light-3)}.arco-btn-secondary.arco-btn-status-success:not(.arco-btn-disabled):focus-visible{box-shadow:0 0 0 2px rgb(var(--success-3))}.arco-btn-secondary.arco-btn-status-success.arco-btn-disabled{color:var(--color-success-light-3);background-color:var(--color-success-light-1);border:1px solid transparent}.arco-btn-dashed:not(.arco-btn-disabled){background-color:var(--color-fill-2);color:var(--color-text-2);border:1px dashed var(--color-neutral-3)}.arco-btn-dashed:not(.arco-btn-disabled):not(.arco-btn-loading):hover{border-color:var(--color-neutral-4);color:var(--color-text-2);background-color:var(--color-fill-3)}.arco-btn-dashed:not(.arco-btn-disabled):not(.arco-btn-loading):active{border-color:var(--color-neutral-5);color:var(--color-text-2);background-color:var(--color-fill-4)}.arco-btn-dashed:not(.arco-btn-disabled):focus-visible{box-shadow:0 0 0 2px var(--color-neutral-4)}.arco-btn-dashed.arco-btn-disabled{background-color:var(--color-fill-2);color:var(--color-text-4);border:1px dashed var(--color-neutral-3);cursor:not-allowed}.arco-btn-dashed.arco-btn-status-warning:not(.arco-btn-disabled){background-color:var(--color-warning-light-1);color:rgb(var(--warning-6));border-color:var(--color-warning-light-2)}.arco-btn-dashed.arco-btn-status-warning:not(.arco-btn-disabled):not(.arco-btn-loading):hover{border-color:var(--color-warning-light-3);color:rgb(var(--warning-6));background-color:var(--color-warning-light-2)}.arco-btn-dashed.arco-btn-status-warning:not(.arco-btn-disabled):not(.arco-btn-loading):active{border-color:var(--color-warning-light-4);color:rgb(var(--warning-6));background-color:var(--color-warning-light-3)}.arco-btn-dashed.arco-btn-status-warning:not(.arco-btn-disabled):focus-visible{box-shadow:0 0 0 2px rgb(var(--warning-3))}.arco-btn-dashed.arco-btn-status-warning.arco-btn-disabled{color:var(--color-warning-light-3);background-color:var(--color-warning-light-1);border:1px dashed var(--color-warning-light-2)}.arco-btn-dashed.arco-btn-status-danger:not(.arco-btn-disabled){background-color:var(--color-danger-light-1);color:rgb(var(--danger-6));border-color:var(--color-danger-light-2)}.arco-btn-dashed.arco-btn-status-danger:not(.arco-btn-disabled):not(.arco-btn-loading):hover{border-color:var(--color-danger-light-3);color:rgb(var(--danger-6));background-color:var(--color-danger-light-2)}.arco-btn-dashed.arco-btn-status-danger:not(.arco-btn-disabled):not(.arco-btn-loading):active{border-color:var(--color-danger-light-4);color:rgb(var(--danger-6));background-color:var(--color-danger-light-3)}.arco-btn-dashed.arco-btn-status-danger:not(.arco-btn-disabled):focus-visible{box-shadow:0 0 0 2px rgb(var(--danger-3))}.arco-btn-dashed.arco-btn-status-danger.arco-btn-disabled{color:var(--color-danger-light-3);background-color:var(--color-danger-light-1);border:1px dashed var(--color-danger-light-2)}.arco-btn-dashed.arco-btn-status-success:not(.arco-btn-disabled){background-color:var(--color-success-light-1);color:rgb(var(--success-6));border-color:var(--color-success-light-2)}.arco-btn-dashed.arco-btn-status-success:not(.arco-btn-disabled):not(.arco-btn-loading):hover{border-color:var(--color-success-light-3);color:rgb(var(--success-6));background-color:var(--color-success-light-2)}.arco-btn-dashed.arco-btn-status-success:not(.arco-btn-disabled):not(.arco-btn-loading):active{border-color:var(--color-success-light-4);color:rgb(var(--success-6));background-color:var(--color-success-light-3)}.arco-btn-dashed.arco-btn-status-success:not(.arco-btn-disabled):focus-visible{box-shadow:0 0 0 2px rgb(var(--success-3))}.arco-btn-dashed.arco-btn-status-success.arco-btn-disabled{color:var(--color-success-light-3);background-color:var(--color-success-light-1);border:1px dashed var(--color-success-light-2)}.arco-btn-text:not(.arco-btn-disabled){background-color:transparent;color:rgb(var(--primary-6));border:1px solid transparent}.arco-btn-text:not(.arco-btn-disabled):not(.arco-btn-loading):hover{border-color:transparent;color:rgb(var(--primary-6));background-color:var(--color-fill-2)}.arco-btn-text:not(.arco-btn-disabled):not(.arco-btn-loading):active{border-color:transparent;color:rgb(var(--primary-6));background-color:var(--color-fill-3)}.arco-btn-text:not(.arco-btn-disabled):focus-visible{box-shadow:0 0 0 2px var(--color-neutral-4)}.arco-btn-text.arco-btn-disabled{background-color:transparent;color:var(--color-primary-light-3);border:1px solid transparent;cursor:not-allowed}.arco-btn-text.arco-btn-status-warning:not(.arco-btn-disabled){background-color:transparent;color:rgb(var(--warning-6));border-color:transparent}.arco-btn-text.arco-btn-status-warning:not(.arco-btn-disabled):not(.arco-btn-loading):hover{border-color:transparent;color:rgb(var(--warning-6));background-color:var(--color-fill-2)}.arco-btn-text.arco-btn-status-warning:not(.arco-btn-disabled):not(.arco-btn-loading):active{border-color:transparent;color:rgb(var(--warning-6));background-color:var(--color-fill-3)}.arco-btn-text.arco-btn-status-warning:not(.arco-btn-disabled):focus-visible{box-shadow:0 0 0 2px rgb(var(--warning-3))}.arco-btn-text.arco-btn-status-warning.arco-btn-disabled{color:var(--color-warning-light-3);background-color:transparent;border:1px solid transparent}.arco-btn-text.arco-btn-status-danger:not(.arco-btn-disabled){background-color:transparent;color:rgb(var(--danger-6));border-color:transparent}.arco-btn-text.arco-btn-status-danger:not(.arco-btn-disabled):not(.arco-btn-loading):hover{border-color:transparent;color:rgb(var(--danger-6));background-color:var(--color-fill-2)}.arco-btn-text.arco-btn-status-danger:not(.arco-btn-disabled):not(.arco-btn-loading):active{border-color:transparent;color:rgb(var(--danger-6));background-color:var(--color-fill-3)}.arco-btn-text.arco-btn-status-danger:not(.arco-btn-disabled):focus-visible{box-shadow:0 0 0 2px rgb(var(--danger-3))}.arco-btn-text.arco-btn-status-danger.arco-btn-disabled{color:var(--color-danger-light-3);background-color:transparent;border:1px solid transparent}.arco-btn-text.arco-btn-status-success:not(.arco-btn-disabled){background-color:transparent;color:rgb(var(--success-6));border-color:transparent}.arco-btn-text.arco-btn-status-success:not(.arco-btn-disabled):not(.arco-btn-loading):hover{border-color:transparent;color:rgb(var(--success-6));background-color:var(--color-fill-2)}.arco-btn-text.arco-btn-status-success:not(.arco-btn-disabled):not(.arco-btn-loading):active{border-color:transparent;color:rgb(var(--success-6));background-color:var(--color-fill-3)}.arco-btn-text.arco-btn-status-success:not(.arco-btn-disabled):focus-visible{box-shadow:0 0 0 2px rgb(var(--success-3))}.arco-btn-text.arco-btn-status-success.arco-btn-disabled{color:var(--color-success-light-3);background-color:transparent;border:1px solid transparent}.arco-btn-size-mini{padding:0 11px;font-size:12px;height:24px;border-radius:var(--border-radius-small)}.arco-btn-size-mini>svg+span,.arco-btn-size-mini>span+svg{margin-left:4px}.arco-btn-size-mini svg{vertical-align:-2px}.arco-btn-size-mini.arco-btn-rtl>svg+span,.arco-btn-size-mini.arco-btn-rtl>span+svg{margin-left:0;margin-right:4px}.arco-btn-size-mini.arco-btn-loading-fixed-width.arco-btn-loading{padding-left:3px;padding-right:3px}.arco-btn-size-mini.arco-btn-icon-only{width:24px;height:24px;padding:0}.arco-btn-size-mini.arco-btn-shape-circle{width:24px;height:24px;padding:0;text-align:center;border-radius:var(--border-radius-circle)}.arco-btn-size-mini.arco-btn-shape-round{border-radius:12px}.arco-btn-group .arco-btn-size-mini:first-child{border-radius:var(--border-radius-small) 0 0 var(--border-radius-small)}.arco-btn-group .arco-btn-size-mini:last-child{border-radius:0 var(--border-radius-small) var(--border-radius-small) 0}.arco-btn-group .arco-btn-size-mini:first-child:last-child{border-radius:var(--border-radius-small)}.arco-btn-group .arco-btn-size-mini.arco-btn-shape-round:first-child{border-radius:12px 0 0 12px}.arco-btn-group .arco-btn-size-mini.arco-btn-shape-round:last-child{border-radius:0 12px 12px 0}.arco-btn-group .arco-btn-size-mini.arco-btn-shape-round:first-child:last-child{border-radius:12px}.arco-btn-group .arco-btn-rtl.arco-btn-size-mini:first-child{border-radius:0 var(--border-radius-small) var(--border-radius-small) 0}.arco-btn-group .arco-btn-rtl.arco-btn-size-mini:last-child{border-radius:var(--border-radius-small) 0 0 var(--border-radius-small)}.arco-btn-group .arco-btn-rtl.arco-btn-size-mini:first-child:last-child{border-radius:var(--border-radius-small)}.arco-btn-group .arco-btn-rtl.arco-btn-size-mini.arco-btn-shape-round:first-child{border-radius:0 12px 12px 0}.arco-btn-group .arco-btn-rtl.arco-btn-size-mini.arco-btn-shape-round:last-child{border-radius:12px 0 0 12px}.arco-btn-group .arco-btn-rtl.arco-btn-size-mini.arco-btn-shape-round:first-child:last-child{border-radius:12px}.arco-btn-size-small{padding:0 15px;font-size:14px;height:28px;border-radius:var(--border-radius-small)}.arco-btn-size-small>svg+span,.arco-btn-size-small>span+svg{margin-left:6px}.arco-btn-size-small svg{vertical-align:-2px}.arco-btn-size-small.arco-btn-rtl>svg+span,.arco-btn-size-small.arco-btn-rtl>span+svg{margin-left:0;margin-right:6px}.arco-btn-size-small.arco-btn-loading-fixed-width.arco-btn-loading{padding-left:5px;padding-right:5px}.arco-btn-size-small.arco-btn-icon-only{width:28px;height:28px;padding:0}.arco-btn-size-small.arco-btn-shape-circle{width:28px;height:28px;padding:0;text-align:center;border-radius:var(--border-radius-circle)}.arco-btn-size-small.arco-btn-shape-round{border-radius:14px}.arco-btn-group .arco-btn-size-small:first-child{border-radius:var(--border-radius-small) 0 0 var(--border-radius-small)}.arco-btn-group .arco-btn-size-small:last-child{border-radius:0 var(--border-radius-small) var(--border-radius-small) 0}.arco-btn-group .arco-btn-size-small:first-child:last-child{border-radius:var(--border-radius-small)}.arco-btn-group .arco-btn-size-small.arco-btn-shape-round:first-child{border-radius:14px 0 0 14px}.arco-btn-group .arco-btn-size-small.arco-btn-shape-round:last-child{border-radius:0 14px 14px 0}.arco-btn-group .arco-btn-size-small.arco-btn-shape-round:first-child:last-child{border-radius:14px}.arco-btn-group .arco-btn-rtl.arco-btn-size-small:first-child{border-radius:0 var(--border-radius-small) var(--border-radius-small) 0}.arco-btn-group .arco-btn-rtl.arco-btn-size-small:last-child{border-radius:var(--border-radius-small) 0 0 var(--border-radius-small)}.arco-btn-group .arco-btn-rtl.arco-btn-size-small:first-child:last-child{border-radius:var(--border-radius-small)}.arco-btn-group .arco-btn-rtl.arco-btn-size-small.arco-btn-shape-round:first-child{border-radius:0 14px 14px 0}.arco-btn-group .arco-btn-rtl.arco-btn-size-small.arco-btn-shape-round:last-child{border-radius:14px 0 0 14px}.arco-btn-group .arco-btn-rtl.arco-btn-size-small.arco-btn-shape-round:first-child:last-child{border-radius:14px}.arco-btn-size-default{padding:0 15px;font-size:14px;height:32px;border-radius:var(--border-radius-small)}.arco-btn-size-default>svg+span,.arco-btn-size-default>span+svg{margin-left:8px}.arco-btn-size-default svg{vertical-align:-2px}.arco-btn-size-default.arco-btn-rtl>svg+span,.arco-btn-size-default.arco-btn-rtl>span+svg{margin-left:0;margin-right:8px}.arco-btn-size-default.arco-btn-loading-fixed-width.arco-btn-loading{padding-left:4px;padding-right:4px}.arco-btn-size-default.arco-btn-icon-only{width:32px;height:32px;padding:0}.arco-btn-size-default.arco-btn-shape-circle{width:32px;height:32px;padding:0;text-align:center;border-radius:var(--border-radius-circle)}.arco-btn-size-default.arco-btn-shape-round{border-radius:16px}.arco-btn-group .arco-btn-size-default:first-child{border-radius:var(--border-radius-small) 0 0 var(--border-radius-small)}.arco-btn-group .arco-btn-size-default:last-child{border-radius:0 var(--border-radius-small) var(--border-radius-small) 0}.arco-btn-group .arco-btn-size-default:first-child:last-child{border-radius:var(--border-radius-small)}.arco-btn-group .arco-btn-size-default.arco-btn-shape-round:first-child{border-radius:16px 0 0 16px}.arco-btn-group .arco-btn-size-default.arco-btn-shape-round:last-child{border-radius:0 16px 16px 0}.arco-btn-group .arco-btn-size-default.arco-btn-shape-round:first-child:last-child{border-radius:16px}.arco-btn-group .arco-btn-rtl.arco-btn-size-default:first-child{border-radius:0 var(--border-radius-small) var(--border-radius-small) 0}.arco-btn-group .arco-btn-rtl.arco-btn-size-default:last-child{border-radius:var(--border-radius-small) 0 0 var(--border-radius-small)}.arco-btn-group .arco-btn-rtl.arco-btn-size-default:first-child:last-child{border-radius:var(--border-radius-small)}.arco-btn-group .arco-btn-rtl.arco-btn-size-default.arco-btn-shape-round:first-child{border-radius:0 16px 16px 0}.arco-btn-group .arco-btn-rtl.arco-btn-size-default.arco-btn-shape-round:last-child{border-radius:16px 0 0 16px}.arco-btn-group .arco-btn-rtl.arco-btn-size-default.arco-btn-shape-round:first-child:last-child{border-radius:16px}.arco-btn-size-large{padding:0 19px;font-size:14px;height:36px;border-radius:var(--border-radius-small)}.arco-btn-size-large>svg+span,.arco-btn-size-large>span+svg{margin-left:8px}.arco-btn-size-large svg{vertical-align:-2px}.arco-btn-size-large.arco-btn-rtl>svg+span,.arco-btn-size-large.arco-btn-rtl>span+svg{margin-left:0;margin-right:8px}.arco-btn-size-large.arco-btn-loading-fixed-width.arco-btn-loading{padding-left:8px;padding-right:8px}.arco-btn-size-large.arco-btn-icon-only{width:36px;height:36px;padding:0}.arco-btn-size-large.arco-btn-shape-circle{width:36px;height:36px;padding:0;text-align:center;border-radius:var(--border-radius-circle)}.arco-btn-size-large.arco-btn-shape-round{border-radius:18px}.arco-btn-group .arco-btn-size-large:first-child{border-radius:var(--border-radius-small) 0 0 var(--border-radius-small)}.arco-btn-group .arco-btn-size-large:last-child{border-radius:0 var(--border-radius-small) var(--border-radius-small) 0}.arco-btn-group .arco-btn-size-large:first-child:last-child{border-radius:var(--border-radius-small)}.arco-btn-group .arco-btn-size-large.arco-btn-shape-round:first-child{border-radius:18px 0 0 18px}.arco-btn-group .arco-btn-size-large.arco-btn-shape-round:last-child{border-radius:0 18px 18px 0}.arco-btn-group .arco-btn-size-large.arco-btn-shape-round:first-child:last-child{border-radius:18px}.arco-btn-group .arco-btn-rtl.arco-btn-size-large:first-child{border-radius:0 var(--border-radius-small) var(--border-radius-small) 0}.arco-btn-group .arco-btn-rtl.arco-btn-size-large:last-child{border-radius:var(--border-radius-small) 0 0 var(--border-radius-small)}.arco-btn-group .arco-btn-rtl.arco-btn-size-large:first-child:last-child{border-radius:var(--border-radius-small)}.arco-btn-group .arco-btn-rtl.arco-btn-size-large.arco-btn-shape-round:first-child{border-radius:0 18px 18px 0}.arco-btn-group .arco-btn-rtl.arco-btn-size-large.arco-btn-shape-round:last-child{border-radius:18px 0 0 18px}.arco-btn-group .arco-btn-rtl.arco-btn-size-large.arco-btn-shape-round:first-child:last-child{border-radius:18px}.arco-btn-group{display:inline-block}.arco-btn-group .arco-btn-outline:not(:first-child),.arco-btn-group .arco-btn-dashed:not(:first-child){margin-left:-1px}.arco-btn-group .arco-btn-primary:not(:last-child){border-right:1px solid rgb(var(--primary-5))}.arco-btn-group .arco-btn-secondary:not(:last-child){border-right:1px solid var(--color-secondary-hover)}.arco-btn-group .arco-btn-text:not(:last-child){border-right:1px solid transparent}.arco-btn-group .arco-btn-status-warning:not(:last-child){border-right:1px solid rgb(var(--warning-5))}.arco-btn-group .arco-btn-status-warning:not(:last-child).arco-btn-text{border-right:1px solid var(--color-fill-2)}.arco-btn-group .arco-btn-status-danger:not(:last-child){border-right:1px solid rgb(var(--danger-5))}.arco-btn-group .arco-btn-status-danger:not(:last-child).arco-btn-text{border-right:1px solid var(--color-fill-2)}.arco-btn-group .arco-btn-status-success:not(:last-child){border-right:1px solid rgb(var(--success-5))}.arco-btn-group .arco-btn-status-success:not(:last-child).arco-btn-text{border-right:1px solid var(--color-fill-2)}.arco-btn-group .arco-btn-rtl.arco-btn-outline:not(:first-child),.arco-btn-group .arco-btn-rtl.arco-btn-dashed:not(:first-child){margin-left:0;margin-right:-1px}.arco-btn-group .arco-btn-rtl.arco-btn-primary:not(:last-child){border-left:1px solid rgb(var(--primary-5));border-right:0}.arco-btn-group .arco-btn-rtl.arco-btn-secondary:not(:last-child){border-left:1px solid var(--color-secondary-hover);border-right:0}.arco-btn-group .arco-btn-rtl.arco-btn-text:not(:last-child){border-left:1px solid transparent;border-right:0}.arco-btn-group .arco-btn-rtl.arco-btn-status-warning:not(:last-child){border-left:1px solid rgb(var(--warning-5));border-right:0}.arco-btn-group .arco-btn-rtl.arco-btn-status-warning:not(:last-child).arco-btn-text{border-left:1px solid var(--color-fill-2)}.arco-btn-group .arco-btn-rtl.arco-btn-status-danger:not(:last-child){border-left:1px solid rgb(var(--danger-5));border-right:0}.arco-btn-group .arco-btn-rtl.arco-btn-status-danger:not(:last-child).arco-btn-text{border-left:1px solid var(--color-fill-2)}.arco-btn-group .arco-btn-rtl.arco-btn-status-success:not(:last-child){border-left:1px solid rgb(var(--success-5));border-right:0}.arco-btn-group .arco-btn-rtl.arco-btn-status-success:not(:last-child).arco-btn-text{border-left:1px solid var(--color-fill-2)}.arco-btn-group .arco-btn-outline:hover,.arco-btn-group .arco-btn-dashed:hover,.arco-btn-group .arco-btn-outline:active,.arco-btn-group .arco-btn-dashed:active{z-index:2}.arco-btn-group .arco-btn:not(:first-child):not(:last-child){border-radius:0}.arco-btn-rtl{direction:rtl}body[arco-theme=dark] .arco-btn-primary.arco-btn-disabled{color:#ffffff4d}.arco-radio>input[type=radio],.arco-radio-button>input[type=radio]{opacity:0;width:0;height:0;position:absolute;top:0;left:0}.arco-radio>input[type=radio]:focus-visible+.arco-radio-icon-hover:before,.arco-radio-button>input[type=radio]:focus-visible+.arco-radio-icon-hover:before{background-color:var(--color-fill-2);opacity:1}.arco-radio>input[type=radio]:focus-visible+.arco-radio-button-inner,.arco-radio-button>input[type=radio]:focus-visible+.arco-radio-button-inner{box-shadow:inset 0 0 0 2px rgb(var(--primary-6));border-radius:inherit}.arco-icon-hover.arco-radio-icon-hover:before{width:24px;height:24px}.arco-radio{position:relative;cursor:pointer;padding-left:5px;display:inline-block;font-size:14px;line-height:unset}.arco-radio-text{color:var(--color-text-1);margin-left:8px}.arco-radio-mask-wrapper{vertical-align:middle;top:-.09em;position:relative;line-height:1}.arco-radio-mask{display:block;border:2px solid var(--color-neutral-3);box-sizing:border-box;height:14px;width:14px;border-radius:var(--border-radius-circle);position:relative;line-height:14px}.arco-radio-mask:after{display:inline-block;box-sizing:border-box;position:absolute;content:"";border-radius:var(--border-radius-circle);background-color:var(--color-bg-2);width:10px;height:10px;top:0;left:0;transform:scale(1);transition:transform .3s cubic-bezier(.3,1.3,.3,1)}.arco-radio:hover .arco-radio-mask{border-color:var(--color-neutral-3)}.arco-radio-checked .arco-radio-mask{background-color:rgb(var(--primary-6));border-color:rgb(var(--primary-6))}.arco-radio-checked .arco-radio-mask:after{transform:scale(.4);background-color:var(--color-white)}.arco-radio-checked:hover .arco-radio-mask{border-color:rgb(var(--primary-6))}.arco-radio-disabled,.arco-radio-disabled .arco-radio-icon-hover{cursor:not-allowed}.arco-radio-disabled .arco-radio-text{color:var(--color-text-4)}.arco-radio-disabled .arco-radio-mask{border-color:var(--color-neutral-3)}.arco-radio-disabled .arco-radio-mask:after{background-color:var(--color-fill-2)}.arco-radio-disabled:hover .arco-radio-mask{border-color:var(--color-neutral-3)}.arco-radio-checked.arco-radio-disabled .arco-radio-mask,.arco-radio-checked.arco-radio-disabled:hover .arco-radio-mask{border-color:transparent;background-color:var(--color-primary-light-3)}.arco-radio-checked.arco-radio-disabled .arco-radio-mask:after{background-color:var(--color-fill-2)}.arco-radio-checked.arco-radio-disabled .arco-radio-text{color:var(--color-text-4)}.arco-radio:hover .arco-radio-icon-hover:before{background-color:var(--color-fill-2)}.arco-radio-group{display:inline-block;box-sizing:border-box}.arco-radio-group .arco-radio{margin-right:20px}.arco-radio-group-type-button{position:relative;z-index:0;padding:1.5px;line-height:26px}.arco-radio-button{display:inline-block;position:relative;margin:1.5px;border-radius:var(--border-radius-small);font-size:14px;line-height:26px;color:var(--color-text-2);background-color:transparent;cursor:pointer;transition:all .1s cubic-bezier(0,0,1,1)}.arco-radio-button-inner{display:block;position:relative;padding:0 12px}.arco-radio-button:not(:first-of-type):before{position:absolute;top:50%;left:-2px;transform:translateY(-50%);display:block;height:14px;width:1px;background-color:var(--color-neutral-3);content:"";transition:all .1s cubic-bezier(0,0,1,1)}.arco-radio-button:hover:before,.arco-radio-button:hover+.arco-radio-button:before,.arco-radio-button.arco-radio-checked:before,.arco-radio-button.arco-radio-checked+.arco-radio-button:before{opacity:0}.arco-radio-button:after{content:" ";display:block;position:absolute;left:-3px;top:-3px;right:-3px;bottom:-3px;background-color:var(--color-fill-2);pointer-events:none;z-index:-1}.arco-radio-button:first-of-type:after{border-top-left-radius:var(--border-radius-small);border-bottom-left-radius:var(--border-radius-small)}.arco-radio-button:last-of-type:after{border-top-right-radius:var(--border-radius-small);border-bottom-right-radius:var(--border-radius-small)}.arco-radio-button:hover{background-color:var(--color-bg-5);color:var(--color-text-1)}.arco-radio-button.arco-radio-checked{background-color:var(--color-bg-5);color:rgb(var(--primary-6));font-weight:500}.arco-radio-button.arco-radio-disabled{cursor:not-allowed;background-color:transparent;color:var(--color-text-4)}.arco-radio-button.arco-radio-disabled.arco-radio-checked{background-color:var(--color-bg-5);color:var(--color-primary-light-3)}.arco-radio-size-small{line-height:28px}.arco-radio-size-small.arco-radio-group-type-button,.arco-radio-size-small .arco-radio-button{font-size:14px;line-height:22px}.arco-radio-size-large{line-height:36px}.arco-radio-size-large.arco-radio-group-type-button,.arco-radio-size-large .arco-radio-button{font-size:14px;line-height:30px}.arco-radio-size-mini{line-height:24px}.arco-radio-size-mini.arco-radio-group-type-button,.arco-radio-size-mini .arco-radio-button{font-size:12px;line-height:18px}.arco-radio-group-direction-vertical .arco-radio{display:block;line-height:32px;margin-right:0}body[arco-theme=dark] .arco-radio-button.arco-radio-checked,body[arco-theme=dark] .arco-radio-button:not(.arco-radio-disabled):hover{background-color:var(--color-fill-3)}body[arco-theme=dark] .arco-radio-button:after{background-color:var(--color-bg-3)}.arco-radio-rtl{padding-left:0;padding-right:5px}.arco-radio-rtl .arco-radio-text{margin-left:0;margin-right:8px}.arco-radio-group-rtl .arco-radio{margin-right:0;margin-left:20px}.arco-radio-group-rtl.arco-radio-group-direction-vertical .arco-radio{margin-right:unset;margin-left:0}.task-panel{z-index:10}.task-panel .plugin-version{color:gray}.task-panel .total-progress,.task-list{color:#000}.task-list::-webkit-scrollbar{width:3px}.task-list::-webkit-scrollbar-thumb{background-color:#7878784d}.task-list .task-view .file-name{color:#000} ');

(function (React, ReactDOM) {
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
  var m$1 = ReactDOM;
  {
    client.createRoot = m$1.createRoot;
    client.hydrateRoot = m$1.hydrateRoot;
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
      var opt2 = deo[lvl - 1];
      var n2 = opt2 >> 13, c2 = opt2 & 8191;
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
        st.h = head, st.p = prev, st.i = i, st.w = wi;
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
  var dopt = function(dat, opt2, pre, post, st) {
    if (!st) {
      st = { l: 1 };
      if (opt2.dictionary) {
        var dict = opt2.dictionary.subarray(-32768);
        var newDat = new u8(dict.length + dat.length);
        newDat.set(dict);
        newDat.set(dat, dict.length);
        dat = newDat;
        st.w = dict.length;
      }
    }
    return dflt(dat, opt2.level == null ? 6 : opt2.level, opt2.mem == null ? st.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 20 : 12 + opt2.mem, pre, post, st);
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
    async fetchGallery() {
      return {
        id: "",
        title: "",
        referer: window.location.href,
        pageAmount: 0
      };
    }
    async fetchTasks(galleryId, onProgress) {
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
    async fetchGallery() {
      const tgGallery = _unsafeWindow.T;
      const header = document.querySelector(
        "header.tl_article_header h1"
      );
      const title = (header == null ? void 0 : header.innerText) ?? tgGallery.pageId;
      const imgs = document.querySelectorAll("figure img");
      const gallery = {
        id: tgGallery.pageId,
        title,
        referer: window.location.href,
        pageAmount: imgs.length
      };
      return gallery;
    }
    async fetchTasks(galleryId, onProgress) {
      const imgs = document.querySelectorAll("figure img");
      let index = 0;
      const tasks = [];
      for (let img of imgs) {
        let pageNumber = `${++index}`.padStart(3, "0");
        let dotIndex = img.src.lastIndexOf(".");
        const extName = img.src.substring(dotIndex);
        const task = {
          id: `tg-${galleryId}-${pageNumber}`,
          url: img.src,
          fileName: `${pageNumber}${extName}`,
          status: TaskStatus.Pending
        };
        if (onProgress !== void 0) {
          onProgress(task);
        }
        tasks.push(task);
      }
      return tasks;
    }
  }
  class NHentaiAdapter extends GenericAdapter {
    constructor() {
      super();
    }
    async fetchGallery() {
      const nhGallery = _unsafeWindow._gallery;
      const gallery = {
        id: `${nhGallery.id}`,
        title: nhGallery.title.japanese ?? nhGallery.id,
        subtitle: nhGallery.title.english,
        referer: window.location.href,
        pageAmount: nhGallery.num_pages
      };
      return gallery;
    }
    async fetchTasks(galleryId, onProgress) {
      const win = _unsafeWindow;
      const nhGallery = win._gallery;
      const nhOptions = win._n_app.options;
      const tasks = nhGallery.images.pages.map((page, index) => {
        const pageNumber = `${index + 1}`;
        const serverId = nhOptions.media_server;
        const mediaId = nhGallery.media_id;
        let extName = ".img";
        let status = TaskStatus.Pending;
        switch (page.t) {
          case "j":
            extName = ".jpg";
            break;
          case "p":
            extName = ".png";
            break;
          default:
            console.warn(`未知的文件类型描述符：${page.t}`);
            status = TaskStatus.Error;
        }
        const fileName = `${pageNumber.padStart(3, "0")}.${extName}`;
        const task = {
          id: `nh-${galleryId}-${pageNumber}`,
          url: `https://i${serverId}.nhentai.net/galleries/${mediaId}/${pageNumber}${extName}`,
          fileName,
          status
        };
        if (onProgress !== void 0) {
          onProgress(task);
        }
        return task;
      });
      return tasks;
    }
  }
  function parseImage(merged) {
    const splitted = merged.split(",");
    if (splitted.length != 3) {
      return null;
    }
    const [type, w, h2] = splitted;
    const width = parseInt(w, 10);
    const height = parseInt(h2, 10);
    return {
      type,
      width,
      height
    };
  }
  class NHentaiXAdapter extends GenericAdapter {
    constructor() {
      super();
    }
    select(selector) {
      const element = _unsafeWindow.document.querySelector(selector);
      return element;
    }
    async fetchGallery() {
      const gth = await this.wait("g_th", 10, 3e4);
      const header = this.select(".info h1");
      const galleryIdInput = this.select("input#gallery_id");
      let parseSuccess = false;
      do {
        if (header == null) {
          console.warn(`未找到input#load_server`);
          break;
        }
        if (galleryIdInput == null) {
          console.warn(`未找到input#load_dir`);
          break;
        }
        parseSuccess = true;
      } while (false);
      if (!parseSuccess) {
        throw `页面解析失败`;
      }
      const id = galleryIdInput.value;
      const title = header.innerText;
      const gallery = {
        id,
        title,
        referer: window.location.href,
        pageAmount: Object.keys(gth.fl).length
      };
      return gallery;
    }
    async wait(key, interval = 10, timeout = 3e3) {
      return new Promise((resolve, reject) => {
        const startAt = (/* @__PURE__ */ new Date()).getTime();
        const timer = setInterval(() => {
          const res = _unsafeWindow[key];
          if (res !== void 0) {
            clearInterval(timer);
            resolve(res);
          }
          const current = (/* @__PURE__ */ new Date()).getTime();
          const duration = current - startAt;
          if (duration > timeout) {
            clearInterval(timer);
            reject(`等待资源超时：${key}`);
          }
        }, interval);
      });
    }
    async fetchTasks(galleryId, onProgress) {
      const gth = await this.wait("g_th", 10, 3e4);
      const loadServerInput = this.select("input#load_server");
      const loadDirInput = this.select("input#load_dir");
      const loadIdInput = this.select("input#load_id");
      let parseSuccess = false;
      do {
        if (loadServerInput == null) {
          console.warn(`未找到input#load_server`);
          break;
        }
        if (loadDirInput == null) {
          console.warn(`未找到input#load_dir`);
          break;
        }
        if (loadIdInput == null) {
          console.warn(`未找到input#load_id`);
          break;
        }
        parseSuccess = true;
      } while (false);
      if (!parseSuccess) {
        return [];
      }
      const loadServer = loadServerInput.value;
      const loadDir = loadDirInput.value;
      const loadId = loadIdInput.value;
      const keys = Object.keys(gth.fl);
      const tasks = [];
      keys.forEach((key) => {
        const pageNumber = key.padStart(3, "0");
        const merged = gth.fl[key];
        const page = parseImage(merged);
        if (page == null) {
          return;
        }
        let extName = "jpg";
        let status = TaskStatus.Pending;
        switch (page.type) {
          case "j":
            extName = "jpg";
            break;
          case "p":
            extName = "png";
            break;
          default:
            console.warn(`未知的文件类型描述符：${page.type}`);
            status = TaskStatus.Error;
        }
        const dir = `${loadDir}/${loadId}`;
        const fileName = `${pageNumber}.${extName}`;
        const task = {
          id: `nhx-${galleryId}-${pageNumber}`,
          url: `https://i${loadServer}.nhentaimg.com/${dir}/${key}.${extName}`,
          fileName,
          status
        };
        if (onProgress !== void 0) {
          onProgress(task);
        }
        tasks.push(task);
      });
      return tasks;
    }
  }
  function xmlHttpRequest(method, url, responseType, onProgress, options) {
    const taskName = `${method} ${url}`;
    return new Promise((resolve, reject) => {
      _GM_xmlhttpRequest({
        method,
        url,
        responseType,
        onprogress: (event) => {
          const { done, lengthComputable, loaded, position, total, totalSize } = event;
          console.info(`XHR任务(${taskName})进度更新：`, event);
          if (onProgress !== void 0) {
            onProgress({
              lengthComputable,
              loaded,
              total
            });
          }
        },
        onload: (event) => {
          const { status, statusText, response } = event;
          if (status !== 200) {
            reject(`XHR任务(${taskName})失败，状态码：${status} (${statusText})`);
          }
          resolve(response);
        },
        ontimeout: () => {
          console.warn(`XHR任务(${taskName})超时`);
          reject(`XHR任务(${taskName})超时`);
        },
        onerror: (event) => {
          const { error } = event;
          console.error(`XHR任务(${taskName})发生错误：`, error);
          reject(error);
        },
        ...options
      });
    });
  }
  class EHentaiAdapter extends GenericAdapter {
    constructor() {
      super();
    }
    async fetchGallery() {
      const href = _unsafeWindow.location.href;
      const { gid, token, apikey, api_url } = _unsafeWindow;
      console.debug(`gallery.id = ${gid}`);
      const reqBody = {
        method: "gdata",
        gidlist: [[gid, token]],
        namespace: 1
      };
      const resp = await xmlHttpRequest(
        "POST",
        api_url,
        "json",
        void 0,
        {
          url: api_url,
          data: JSON.stringify(reqBody)
        }
      );
      const { gmetadata: metadataList } = resp;
      const { title, title_jpn: subtitle, filecount } = metadataList[0];
      const fileCount = parseInt(filecount);
      const gallery = {
        id: `${gid}`,
        title,
        subtitle,
        referer: href,
        pageAmount: fileCount
      };
      console.info(`获取到gallery：`, gallery);
      return gallery;
    }
    async fetchTasks(galleryId, onProgress) {
      const gdt = _unsafeWindow.document.querySelector("div#gdt");
      if (gdt !== null) {
        this.fetchTasksInGDT(galleryId, gdt, 1, onProgress);
      }
      return [];
    }
    async fetchTasksInGDT(galleryId, gdt, startAt, onProgress) {
      const tasks = [];
      const anchors = gdt.querySelectorAll("div.gdtm div a");
      for (let index = 0; index < anchors.length; index++) {
        const anchor = anchors[index];
        const href = anchor.href;
        const pageNumber = `${startAt + index}`.padStart(3, "0");
        const task = await this.fetchTask(galleryId, pageNumber, href);
        if (onProgress !== void 0) {
          onProgress(task);
        }
        tasks.push(task);
      }
      return tasks;
    }
    async fetchTask(galleryId, pageNumber, url) {
      const doc = await xmlHttpRequest("GET", url, "document");
      const img = doc.querySelector("div#i3 img");
      if (img === null) {
        throw new Error(`获取${url}内容失败`);
      }
      const src = img.src;
      const extIndex = src.lastIndexOf(".");
      let extName = "";
      if (extIndex >= 0) {
        extName = src.substring(extIndex);
      }
      const fileName = `${pageNumber}${extName}`;
      const task = {
        id: `eh-${galleryId}-${pageNumber}`,
        url: src,
        fileName,
        status: TaskStatus.Pending
      };
      console.info(`获取第${pageNumber}页任务：`, task);
      return task;
    }
    async fetchNextPage() {
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
        case "nhentai.xxx":
          return new NHentaiXAdapter();
        case "e-hentai.org":
          return new EHentaiAdapter();
      }
      return new GenericAdapter();
    }
  }
  const version = "1.6.5";
  const Flex = ({
    direction,
    justify,
    align,
    gap,
    flex,
    className,
    children,
    style
  }) => {
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
        children
      }
    );
  };
  function Progress({
    success = 0,
    running = 0,
    error = 0,
    pending = 100,
    height = 16,
    colors = ["#00B42A", "#165DFF", "#F53F3F", "#E5E6EB"]
  }) {
    const [successColor, runningColor, errorColor, pendingColor] = colors;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Flex,
      {
        flex: 1,
        style: {
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "gray"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Flex,
            {
              flex: success,
              style: {
                backgroundColor: successColor,
                height
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Flex,
            {
              flex: running,
              style: {
                backgroundColor: runningColor,
                height
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Flex,
            {
              flex: error,
              style: {
                backgroundColor: errorColor,
                height
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Flex,
            {
              flex: pending,
              style: {
                backgroundColor: pendingColor,
                height
              }
            }
          )
        ]
      }
    );
  }
  function Tag({
    color,
    bordered,
    children
  }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      display: "flex",
      alignItems: "center",
      padding: "3px 5px 0 5px",
      borderWidth: bordered ? 1 : void 0,
      borderStyle: bordered ? "solid" : void 0,
      borderColor: bordered ? color : void 0,
      borderRadius: 4,
      fontSize: "0.7em",
      color
    }, children });
  }
  const DefaultStyle$2 = {};
  const TaskView = ({ task, selectedStatus, style }) => {
    const { total, completed, status, fileName } = task;
    let success = 0;
    let pending = 0;
    let statusName = "未知";
    let statusColor = void 0;
    if (status !== void 0) {
      switch (status) {
        case TaskStatus.Pending:
          statusName = "等待";
          statusColor = "gray";
          pending = 100;
          break;
        case TaskStatus.Running:
          statusName = "下载";
          statusColor = "blue";
          pending = total - completed;
          break;
        case TaskStatus.Error:
          statusName = "错误";
          statusColor = "red";
          pending = total - completed;
          break;
        case TaskStatus.Done:
          statusName = "完成";
          statusColor = "green";
          success = 100;
          break;
      }
    }
    if (selectedStatus !== TaskStatus.All && status != selectedStatus) {
      return null;
    }
    const styleMerged = {
      ...DefaultStyle$2,
      ...style
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { className: "task-view", gap: 8, align: "center", style: styleMerged, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Flex, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "file-name", children: fileName }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { color: statusColor, bordered: true, children: statusName }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { success, pending })
    ] });
  };
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
  var IconContext = React.createContext({
    prefixCls: "arco"
  });
  var opt = Object.prototype.toString;
  function isArray(obj) {
    return opt.call(obj) === "[object Array]";
  }
  function isObject(obj) {
    return opt.call(obj) === "[object Object]";
  }
  function isString(obj) {
    return opt.call(obj) === "[object String]";
  }
  function isUndefined(obj) {
    return obj === void 0;
  }
  function isNullOrUndefined(obj) {
    return obj === null || obj === void 0;
  }
  function isFunction(obj) {
    return typeof obj === "function";
  }
  var __read$3 = function(o, n2) {
    var m2 = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m2)
      return o;
    var i = m2.call(o), r, ar = [], e2;
    try {
      while ((n2 === void 0 || n2-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e2 = { error };
    } finally {
      try {
        if (r && !r.done && (m2 = i["return"]))
          m2.call(i);
      } finally {
        if (e2)
          throw e2.error;
      }
    }
    return ar;
  };
  var __spreadArray = function(to, from, pack) {
    if (arguments.length === 2)
      for (var i = 0, l2 = from.length, ar; i < l2; i++) {
        if (ar || !(i in from)) {
          if (!ar)
            ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
  function cs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var length = args.length;
    var classNames = [];
    var _loop_1 = function(i2) {
      var v2 = args[i2];
      if (!v2) {
        return "continue";
      }
      if (isString(v2)) {
        classNames.push(v2);
      } else if (isArray(v2)) {
        classNames = classNames.concat(v2);
      } else if (isObject(v2)) {
        Object.keys(v2).forEach(function(k2) {
          if (v2[k2]) {
            classNames.push(k2);
          }
        });
      } else
        ;
    };
    for (var i = 0; i < length; i++) {
      _loop_1(i);
    }
    return __spreadArray([], __read$3(new Set(classNames)), false).join(" ");
  }
  var __assign$7 = function() {
    __assign$7 = Object.assign || function(t2) {
      for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
        s = arguments[i];
        for (var p2 in s)
          if (Object.prototype.hasOwnProperty.call(s, p2))
            t2[p2] = s[p2];
      }
      return t2;
    };
    return __assign$7.apply(this, arguments);
  };
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
  function IconHover(props) {
    var _a2;
    var children = props.children, className = props.className, disabled = props.disabled, prefix = props.prefix, _b2 = props.size, size = _b2 === void 0 ? "default" : _b2, rest = __rest$2(props, ["children", "className", "disabled", "prefix", "size"]);
    var getPrefixCls = React.useContext(ConfigContext).getPrefixCls;
    var prefixCls = getPrefixCls("icon-hover");
    return React.createElement("span", __assign$7({ className: cs(prefixCls, (_a2 = {}, _a2[prefix + "-icon-hover"] = prefix, _a2[prefixCls + "-size-" + size] = size && size !== "default", _a2[prefixCls + "-disabled"] = disabled, _a2), className), onClick: props.onClick }, rest), children);
  }
  var zhCn = { exports: {} };
  var dayjs_min = { exports: {} };
  (function(module, exports) {
    !function(t2, e2) {
      module.exports = e2();
    }(commonjsGlobal, function() {
      var t2 = 1e3, e2 = 6e4, n2 = 36e5, r = "millisecond", i = "second", s = "minute", u2 = "hour", a = "day", o = "week", c2 = "month", f2 = "quarter", h2 = "year", d2 = "date", l2 = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t3) {
        var e3 = ["th", "st", "nd", "rd"], n3 = t3 % 100;
        return "[" + t3 + (e3[(n3 - 20) % 10] || e3[n3] || e3[0]) + "]";
      } }, m2 = function(t3, e3, n3) {
        var r2 = String(t3);
        return !r2 || r2.length >= e3 ? t3 : "" + Array(e3 + 1 - r2.length).join(n3) + t3;
      }, v2 = { s: m2, z: function(t3) {
        var e3 = -t3.utcOffset(), n3 = Math.abs(e3), r2 = Math.floor(n3 / 60), i2 = n3 % 60;
        return (e3 <= 0 ? "+" : "-") + m2(r2, 2, "0") + ":" + m2(i2, 2, "0");
      }, m: function t3(e3, n3) {
        if (e3.date() < n3.date())
          return -t3(n3, e3);
        var r2 = 12 * (n3.year() - e3.year()) + (n3.month() - e3.month()), i2 = e3.clone().add(r2, c2), s2 = n3 - i2 < 0, u3 = e3.clone().add(r2 + (s2 ? -1 : 1), c2);
        return +(-(r2 + (n3 - i2) / (s2 ? i2 - u3 : u3 - i2)) || 0);
      }, a: function(t3) {
        return t3 < 0 ? Math.ceil(t3) || 0 : Math.floor(t3);
      }, p: function(t3) {
        return { M: c2, y: h2, w: o, d: a, D: d2, h: u2, m: s, s: i, ms: r, Q: f2 }[t3] || String(t3 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t3) {
        return void 0 === t3;
      } }, g2 = "en", D = {};
      D[g2] = M;
      var p2 = "$isDayjsObject", S = function(t3) {
        return t3 instanceof _ || !(!t3 || !t3[p2]);
      }, w = function t3(e3, n3, r2) {
        var i2;
        if (!e3)
          return g2;
        if ("string" == typeof e3) {
          var s2 = e3.toLowerCase();
          D[s2] && (i2 = s2), n3 && (D[s2] = n3, i2 = s2);
          var u3 = e3.split("-");
          if (!i2 && u3.length > 1)
            return t3(u3[0]);
        } else {
          var a2 = e3.name;
          D[a2] = e3, i2 = a2;
        }
        return !r2 && i2 && (g2 = i2), i2 || !r2 && g2;
      }, O = function(t3, e3) {
        if (S(t3))
          return t3.clone();
        var n3 = "object" == typeof e3 ? e3 : {};
        return n3.date = t3, n3.args = arguments, new _(n3);
      }, b2 = v2;
      b2.l = w, b2.i = S, b2.w = function(t3, e3) {
        return O(t3, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
      };
      var _ = function() {
        function M2(t3) {
          this.$L = w(t3.locale, null, true), this.parse(t3), this.$x = this.$x || t3.x || {}, this[p2] = true;
        }
        var m3 = M2.prototype;
        return m3.parse = function(t3) {
          this.$d = function(t4) {
            var e3 = t4.date, n3 = t4.utc;
            if (null === e3)
              return /* @__PURE__ */ new Date(NaN);
            if (b2.u(e3))
              return /* @__PURE__ */ new Date();
            if (e3 instanceof Date)
              return new Date(e3);
            if ("string" == typeof e3 && !/Z$/i.test(e3)) {
              var r2 = e3.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n3 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e3);
          }(t3), this.init();
        }, m3.init = function() {
          var t3 = this.$d;
          this.$y = t3.getFullYear(), this.$M = t3.getMonth(), this.$D = t3.getDate(), this.$W = t3.getDay(), this.$H = t3.getHours(), this.$m = t3.getMinutes(), this.$s = t3.getSeconds(), this.$ms = t3.getMilliseconds();
        }, m3.$utils = function() {
          return b2;
        }, m3.isValid = function() {
          return !(this.$d.toString() === l2);
        }, m3.isSame = function(t3, e3) {
          var n3 = O(t3);
          return this.startOf(e3) <= n3 && n3 <= this.endOf(e3);
        }, m3.isAfter = function(t3, e3) {
          return O(t3) < this.startOf(e3);
        }, m3.isBefore = function(t3, e3) {
          return this.endOf(e3) < O(t3);
        }, m3.$g = function(t3, e3, n3) {
          return b2.u(t3) ? this[e3] : this.set(n3, t3);
        }, m3.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m3.valueOf = function() {
          return this.$d.getTime();
        }, m3.startOf = function(t3, e3) {
          var n3 = this, r2 = !!b2.u(e3) || e3, f3 = b2.p(t3), l3 = function(t4, e4) {
            var i2 = b2.w(n3.$u ? Date.UTC(n3.$y, e4, t4) : new Date(n3.$y, e4, t4), n3);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t4, e4) {
            return b2.w(n3.toDate()[t4].apply(n3.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n3);
          }, y2 = this.$W, M3 = this.$M, m4 = this.$D, v3 = "set" + (this.$u ? "UTC" : "");
          switch (f3) {
            case h2:
              return r2 ? l3(1, 0) : l3(31, 11);
            case c2:
              return r2 ? l3(1, M3) : l3(0, M3 + 1);
            case o:
              var g3 = this.$locale().weekStart || 0, D2 = (y2 < g3 ? y2 + 7 : y2) - g3;
              return l3(r2 ? m4 - D2 : m4 + (6 - D2), M3);
            case a:
            case d2:
              return $2(v3 + "Hours", 0);
            case u2:
              return $2(v3 + "Minutes", 1);
            case s:
              return $2(v3 + "Seconds", 2);
            case i:
              return $2(v3 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m3.endOf = function(t3) {
          return this.startOf(t3, false);
        }, m3.$set = function(t3, e3) {
          var n3, o2 = b2.p(t3), f3 = "set" + (this.$u ? "UTC" : ""), l3 = (n3 = {}, n3[a] = f3 + "Date", n3[d2] = f3 + "Date", n3[c2] = f3 + "Month", n3[h2] = f3 + "FullYear", n3[u2] = f3 + "Hours", n3[s] = f3 + "Minutes", n3[i] = f3 + "Seconds", n3[r] = f3 + "Milliseconds", n3)[o2], $2 = o2 === a ? this.$D + (e3 - this.$W) : e3;
          if (o2 === c2 || o2 === h2) {
            var y2 = this.clone().set(d2, 1);
            y2.$d[l3]($2), y2.init(), this.$d = y2.set(d2, Math.min(this.$D, y2.daysInMonth())).$d;
          } else
            l3 && this.$d[l3]($2);
          return this.init(), this;
        }, m3.set = function(t3, e3) {
          return this.clone().$set(t3, e3);
        }, m3.get = function(t3) {
          return this[b2.p(t3)]();
        }, m3.add = function(r2, f3) {
          var d3, l3 = this;
          r2 = Number(r2);
          var $2 = b2.p(f3), y2 = function(t3) {
            var e3 = O(l3);
            return b2.w(e3.date(e3.date() + Math.round(t3 * r2)), l3);
          };
          if ($2 === c2)
            return this.set(c2, this.$M + r2);
          if ($2 === h2)
            return this.set(h2, this.$y + r2);
          if ($2 === a)
            return y2(1);
          if ($2 === o)
            return y2(7);
          var M3 = (d3 = {}, d3[s] = e2, d3[u2] = n2, d3[i] = t2, d3)[$2] || 1, m4 = this.$d.getTime() + r2 * M3;
          return b2.w(m4, this);
        }, m3.subtract = function(t3, e3) {
          return this.add(-1 * t3, e3);
        }, m3.format = function(t3) {
          var e3 = this, n3 = this.$locale();
          if (!this.isValid())
            return n3.invalidDate || l2;
          var r2 = t3 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b2.z(this), s2 = this.$H, u3 = this.$m, a2 = this.$M, o2 = n3.weekdays, c3 = n3.months, f3 = n3.meridiem, h3 = function(t4, n4, i3, s3) {
            return t4 && (t4[n4] || t4(e3, r2)) || i3[n4].slice(0, s3);
          }, d3 = function(t4) {
            return b2.s(s2 % 12 || 12, t4, "0");
          }, $2 = f3 || function(t4, e4, n4) {
            var r3 = t4 < 12 ? "AM" : "PM";
            return n4 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, function(t4, r3) {
            return r3 || function(t5) {
              switch (t5) {
                case "YY":
                  return String(e3.$y).slice(-2);
                case "YYYY":
                  return b2.s(e3.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b2.s(a2 + 1, 2, "0");
                case "MMM":
                  return h3(n3.monthsShort, a2, c3, 3);
                case "MMMM":
                  return h3(c3, a2);
                case "D":
                  return e3.$D;
                case "DD":
                  return b2.s(e3.$D, 2, "0");
                case "d":
                  return String(e3.$W);
                case "dd":
                  return h3(n3.weekdaysMin, e3.$W, o2, 2);
                case "ddd":
                  return h3(n3.weekdaysShort, e3.$W, o2, 3);
                case "dddd":
                  return o2[e3.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b2.s(s2, 2, "0");
                case "h":
                  return d3(1);
                case "hh":
                  return d3(2);
                case "a":
                  return $2(s2, u3, true);
                case "A":
                  return $2(s2, u3, false);
                case "m":
                  return String(u3);
                case "mm":
                  return b2.s(u3, 2, "0");
                case "s":
                  return String(e3.$s);
                case "ss":
                  return b2.s(e3.$s, 2, "0");
                case "SSS":
                  return b2.s(e3.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            }(t4) || i2.replace(":", "");
          });
        }, m3.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m3.diff = function(r2, d3, l3) {
          var $2, y2 = this, M3 = b2.p(d3), m4 = O(r2), v3 = (m4.utcOffset() - this.utcOffset()) * e2, g3 = this - m4, D2 = function() {
            return b2.m(y2, m4);
          };
          switch (M3) {
            case h2:
              $2 = D2() / 12;
              break;
            case c2:
              $2 = D2();
              break;
            case f2:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g3 - v3) / 6048e5;
              break;
            case a:
              $2 = (g3 - v3) / 864e5;
              break;
            case u2:
              $2 = g3 / n2;
              break;
            case s:
              $2 = g3 / e2;
              break;
            case i:
              $2 = g3 / t2;
              break;
            default:
              $2 = g3;
          }
          return l3 ? $2 : b2.a($2);
        }, m3.daysInMonth = function() {
          return this.endOf(c2).$D;
        }, m3.$locale = function() {
          return D[this.$L];
        }, m3.locale = function(t3, e3) {
          if (!t3)
            return this.$L;
          var n3 = this.clone(), r2 = w(t3, e3, true);
          return r2 && (n3.$L = r2), n3;
        }, m3.clone = function() {
          return b2.w(this.$d, this);
        }, m3.toDate = function() {
          return new Date(this.valueOf());
        }, m3.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m3.toISOString = function() {
          return this.$d.toISOString();
        }, m3.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), k2 = _.prototype;
      return O.prototype = k2, [["$ms", r], ["$s", i], ["$m", s], ["$H", u2], ["$W", a], ["$M", c2], ["$y", h2], ["$D", d2]].forEach(function(t3) {
        k2[t3[1]] = function(e3) {
          return this.$g(e3, t3[0], t3[1]);
        };
      }), O.extend = function(t3, e3) {
        return t3.$i || (t3(e3, _, O), t3.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t3) {
        return O(1e3 * t3);
      }, O.en = D[g2], O.Ls = D, O.p = {}, O;
    });
  })(dayjs_min);
  var dayjs_minExports = dayjs_min.exports;
  (function(module, exports) {
    !function(e2, _) {
      module.exports = _(dayjs_minExports);
    }(commonjsGlobal, function(e2) {
      function _(e3) {
        return e3 && "object" == typeof e3 && "default" in e3 ? e3 : { default: e3 };
      }
      var t2 = _(e2), d2 = { name: "zh-cn", weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(e3, _2) {
        return "W" === _2 ? e3 + "周" : e3 + "日";
      }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日Ah点mm分", LLLL: "YYYY年M月D日ddddAh点mm分", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, meridiem: function(e3, _2) {
        var t3 = 100 * e3 + _2;
        return t3 < 600 ? "凌晨" : t3 < 900 ? "早上" : t3 < 1100 ? "上午" : t3 < 1300 ? "中午" : t3 < 1800 ? "下午" : "晚上";
      } };
      return t2.default.locale(d2, null, true), d2;
    });
  })(zhCn);
  var Calendar = {
    formatYear: "YYYY 年",
    formatMonth: "YYYY 年 MM 月",
    // 月份在前
    monthBeforeYear: false,
    today: "今天",
    view: {
      month: "月",
      year: "年",
      week: "周",
      day: "日"
    },
    month: {
      long: {
        January: "一月",
        February: "二月",
        March: "三月",
        April: "四月",
        May: "五月",
        June: "六月",
        July: "七月",
        August: "八月",
        September: "九月",
        October: "十月",
        November: "十一月",
        December: "十二月"
      },
      short: {
        January: "一月",
        February: "二月",
        March: "三月",
        April: "四月",
        May: "五月",
        June: "六月",
        July: "七月",
        August: "八月",
        September: "九月",
        October: "十月",
        November: "十一月",
        December: "十二月"
      }
    },
    week: {
      long: {
        self: "周",
        monday: "周一",
        tuesday: "周二",
        wednesday: "周三",
        thursday: "周四",
        friday: "周五",
        saturday: "周六",
        sunday: "周日"
      },
      short: {
        self: "周",
        monday: "一",
        tuesday: "二",
        wednesday: "三",
        thursday: "四",
        friday: "五",
        saturday: "六",
        sunday: "日"
      }
    }
  };
  const zhCN = {
    locale: "zh-CN",
    dayjsLocale: "zh-cn",
    Calendar,
    DatePicker: {
      Calendar,
      placeholder: {
        date: "请选择日期",
        week: "请选择周",
        month: "请选择月份",
        year: "请选择年份",
        quarter: "请选择季度"
      },
      placeholders: {
        date: ["开始日期", "结束日期"],
        week: ["开始周", "结束周"],
        month: ["开始月份", "结束月份"],
        year: ["开始年份", "结束年份"],
        quarter: ["开始季度", "结束季度"]
      },
      selectTime: "选择时间",
      selectDate: "选择日期",
      today: "今天",
      now: "此刻",
      ok: "确定"
    },
    Drawer: {
      okText: "确定",
      cancelText: "取消"
    },
    Empty: {
      noData: "暂无数据"
    },
    Modal: {
      okText: "确定",
      cancelText: "取消"
    },
    Pagination: {
      goto: "前往",
      page: "页",
      countPerPage: "条/页",
      total: "共 {0} 条",
      prev: "上一页",
      next: "下一页",
      currentPage: "第 {0} 页",
      prevSomePages: "向前 {0} 页",
      nextSomePages: "向后 {0} 页",
      pageSize: "页码"
    },
    Popconfirm: {
      okText: "确定",
      cancelText: "取消"
    },
    Table: {
      okText: "确定",
      resetText: "重置",
      sortAscend: "点击升序",
      sortDescend: "点击降序",
      cancelSort: "取消排序"
    },
    TimePicker: {
      ok: "确定",
      placeholder: "请选择时间",
      placeholders: ["开始时间", "结束时间"],
      now: "此刻"
    },
    Progress: {
      success: "完成",
      error: "失败"
    },
    Upload: {
      start: "开始",
      cancel: "取消",
      delete: "删除",
      reupload: "点击重试",
      upload: "点击上传",
      preview: "预览",
      drag: "点击或拖拽文件到此处上传",
      dragHover: "释放文件并开始上传",
      error: "上传失败"
    },
    Typography: {
      copy: "复制",
      copied: "已复制",
      edit: "编辑",
      fold: "折叠",
      unfold: "展开"
    },
    Transfer: {
      resetText: "重置"
    },
    ImagePreview: {
      fullScreen: "全屏",
      rotateRight: "向右旋转",
      rotateLeft: "向左旋转",
      zoomIn: "放大",
      zoomOut: "缩小",
      originalSize: "原始尺寸"
    },
    Form: {
      validateMessages: {
        required: "#{field} 是必填项",
        type: {
          string: "#{field} 不是合法的文本类型",
          number: "#{field} 不是合法的数字类型",
          boolean: "#{field} 不是合法的布尔类型",
          array: "#{field} 不是合法的数组类型",
          object: "#{field} 不是合法的对象类型",
          url: "#{field} 不是合法的 url 地址",
          email: "#{field} 不是合法的邮箱地址",
          ip: "#{field} 不是合法的 IP 地址"
        },
        number: {
          min: "`#{value}` 小于最小值 `#{min}`",
          max: "`#{value}` 大于最大值 `#{max}`",
          equal: "`#{value}` 不等于 `#{equal}`",
          range: "`#{value}` 不在 `#{min} ~ #{max}` 范围内",
          positive: "`#{value}` 不是正数",
          negative: "`#{value}` 不是负数"
        },
        array: {
          length: "`#{field}` 个数不等于 #{length}",
          minLength: "`#{field}` 个数最少为 #{minLength}",
          maxLength: "`#{field}` 个数最多为 #{maxLength}",
          includes: "#{field} 不包含 #{includes}",
          deepEqual: "#{field} 不等于 #{deepEqual}",
          empty: "`#{field}` 不是空数组"
        },
        string: {
          minLength: "字符数最少为 #{minLength}",
          maxLength: "字符数最多为 #{maxLength}",
          length: "字符数必须是 #{length}",
          match: "`#{value}` 不符合模式 #{pattern}",
          uppercase: "`#{value}` 必须全大写",
          lowercase: "`#{value}` 必须全小写"
        },
        object: {
          deepEqual: "`#{field}` 不等于期望值",
          hasKeys: "`#{field}` 不包含必须字段",
          empty: "`#{field}` 不是对象"
        },
        boolean: {
          true: "期望是 `true`",
          false: "期望是 `false`"
        }
      }
    },
    ColorPicker: {
      history: "最近使用颜色",
      preset: "系统预设颜色",
      empty: "暂无"
    }
  };
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function IconEmptyComponent(iconProps, ref) {
    var _useContext = React.useContext(IconContext), _useContext$prefixCls = _useContext.prefixCls, prefixCls = _useContext$prefixCls === void 0 ? "arco" : _useContext$prefixCls;
    var spin = iconProps.spin, className = iconProps.className;
    var props = _objectSpread(_objectSpread({
      "aria-hidden": true,
      focusable: false,
      ref
    }, iconProps), {}, {
      className: "".concat(className ? className + " " : "").concat(prefixCls, "-icon ").concat(prefixCls, "-icon-empty")
    });
    if (spin) {
      props.className = "".concat(props.className, " ").concat(prefixCls, "-icon-loading");
    }
    delete props.spin;
    delete props.isIcon;
    return /* @__PURE__ */ React.createElement("svg", _extends({
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "4",
      viewBox: "0 0 48 48"
    }, props), /* @__PURE__ */ React.createElement("path", {
      d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"
    }));
  }
  var IconEmpty = /* @__PURE__ */ React.forwardRef(IconEmptyComponent);
  IconEmpty.defaultProps = {
    isIcon: true
  };
  IconEmpty.displayName = "IconEmpty";
  var __assign$6 = function() {
    __assign$6 = Object.assign || function(t2) {
      for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
        s = arguments[i];
        for (var p2 in s)
          if (Object.prototype.hasOwnProperty.call(s, p2))
            t2[p2] = s[p2];
      }
      return t2;
    };
    return __assign$6.apply(this, arguments);
  };
  function omit(obj, keys) {
    var clone = __assign$6({}, obj);
    keys.forEach(function(key) {
      if (key in clone) {
        delete clone[key];
      }
    });
    return clone;
  }
  var __assign$5 = function() {
    __assign$5 = Object.assign || function(t2) {
      for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
        s = arguments[i];
        for (var p2 in s)
          if (Object.prototype.hasOwnProperty.call(s, p2))
            t2[p2] = s[p2];
      }
      return t2;
    };
    return __assign$5.apply(this, arguments);
  };
  function useMergeProps(componentProps, defaultProps2, globalComponentConfig) {
    var _ignorePropsFromGlobal = componentProps._ignorePropsFromGlobal;
    var _defaultProps = React.useMemo(function() {
      return __assign$5(__assign$5({}, defaultProps2), _ignorePropsFromGlobal ? {} : globalComponentConfig);
    }, [defaultProps2, globalComponentConfig, _ignorePropsFromGlobal]);
    var props = React.useMemo(function() {
      var mProps = omit(componentProps, ["_ignorePropsFromGlobal"]);
      for (var propName in _defaultProps) {
        if (mProps[propName] === void 0) {
          mProps[propName] = _defaultProps[propName];
        }
      }
      return mProps;
    }, [componentProps, _defaultProps]);
    return props;
  }
  var __assign$4 = function() {
    __assign$4 = Object.assign || function(t2) {
      for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
        s = arguments[i];
        for (var p2 in s)
          if (Object.prototype.hasOwnProperty.call(s, p2))
            t2[p2] = s[p2];
      }
      return t2;
    };
    return __assign$4.apply(this, arguments);
  };
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
  function Empty(baseProps, ref) {
    var _a2 = React.useContext(ConfigContext), getPrefixCls = _a2.getPrefixCls, globalLocale = _a2.locale, componentConfig = _a2.componentConfig;
    var props = useMergeProps(baseProps, {}, componentConfig === null || componentConfig === void 0 ? void 0 : componentConfig.Empty);
    var style = props.style, className = props.className, description = props.description, icon = props.icon, imgSrc = props.imgSrc, rest = __rest$1(props, ["style", "className", "description", "icon", "imgSrc"]);
    var prefixCls = getPrefixCls("empty");
    var classNames = cs(prefixCls, className);
    var noData = globalLocale.Empty.noData;
    var alt = typeof description === "string" ? description : "empty";
    return React.createElement(
      "div",
      __assign$4({ ref, className: classNames, style }, rest),
      React.createElement(
        "div",
        { className: prefixCls + "-wrapper" },
        React.createElement("div", { className: prefixCls + "-image" }, imgSrc ? React.createElement("img", { alt, src: imgSrc }) : icon || React.createElement(IconEmpty, null)),
        React.createElement("div", { className: prefixCls + "-description" }, description || noData)
      )
    );
  }
  var EmptyComponent = React.forwardRef(Empty);
  EmptyComponent.displayName = "Empty";
  const Empty$1 = React.memo(EmptyComponent);
  var __assign$3 = function() {
    __assign$3 = Object.assign || function(t2) {
      for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
        s = arguments[i];
        for (var p2 in s)
          if (Object.prototype.hasOwnProperty.call(s, p2))
            t2[p2] = s[p2];
      }
      return t2;
    };
    return __assign$3.apply(this, arguments);
  };
  function renderEmpty(componentName) {
    switch (componentName) {
      default:
        return React.createElement(Empty$1, null);
    }
  }
  var DefaultConfigProviderProps = {
    locale: zhCN,
    prefixCls: "arco",
    getPopupContainer: function() {
      return document.body;
    },
    size: "default",
    renderEmpty,
    focusLock: {
      modal: { autoFocus: true },
      drawer: { autoFocus: true }
    }
  };
  var ConfigContext = React.createContext(__assign$3({ getPrefixCls: function(componentName, customPrefix) {
    return (customPrefix || "arco") + "-" + componentName;
  } }, DefaultConfigProviderProps));
  ConfigContext.Consumer;
  function pick(obj, keys) {
    var clone = {};
    keys.forEach(function(key) {
      var k2 = key;
      if (key in obj) {
        clone[k2] = obj[k2];
      }
    });
    return clone;
  }
  function pickDataAttributes(obj) {
    var clone = {};
    obj && Object.keys(obj).forEach(function(key) {
      var k2 = String(key);
      if (k2.indexOf("data-") === 0) {
        clone[k2] = obj[k2];
      }
      if (k2.indexOf("aria-") === 0) {
        clone[k2] = obj[k2];
      }
    });
    return clone;
  }
  function pickTriggerPropsFromRest(rest) {
    return pick(rest, [
      "onMouseEnter",
      "onMouseLeave",
      "onMouseMove",
      "onContextMenu",
      "onClick",
      "onFocus",
      "onBlur",
      "tabIndex"
    ]);
  }
  function usePrevious(value) {
    var ref = React.useRef();
    React.useEffect(function() {
      ref.current = value;
    });
    return ref.current;
  }
  var __read$2 = function(o, n2) {
    var m2 = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m2)
      return o;
    var i = m2.call(o), r, ar = [], e2;
    try {
      while ((n2 === void 0 || n2-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e2 = { error };
    } finally {
      try {
        if (r && !r.done && (m2 = i["return"]))
          m2.call(i);
      } finally {
        if (e2)
          throw e2.error;
      }
    }
    return ar;
  };
  function useMergeValue(defaultStateValue, props) {
    var _a2 = props || {}, defaultValue = _a2.defaultValue, value = _a2.value;
    var firstRenderRef = React.useRef(true);
    var prevPropsValue = usePrevious(value);
    var _b2 = __read$2(React.useState(!isUndefined(value) ? value : !isUndefined(defaultValue) ? defaultValue : defaultStateValue), 2), stateValue = _b2[0], setStateValue = _b2[1];
    React.useEffect(function() {
      if (firstRenderRef.current) {
        firstRenderRef.current = false;
        return;
      }
      if (value === void 0 && prevPropsValue !== value) {
        setStateValue(value);
      }
    }, [value]);
    var mergedValue = isUndefined(value) ? stateValue : value;
    return [mergedValue, setStateValue, stateValue];
  }
  var __assign$1 = function() {
    __assign$1 = Object.assign || function(t2) {
      for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
        s = arguments[i];
        for (var p2 in s)
          if (Object.prototype.hasOwnProperty.call(s, p2))
            t2[p2] = s[p2];
      }
      return t2;
    };
    return __assign$1.apply(this, arguments);
  };
  var __read$1 = function(o, n2) {
    var m2 = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m2)
      return o;
    var i = m2.call(o), r, ar = [], e2;
    try {
      while ((n2 === void 0 || n2-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e2 = { error };
    } finally {
      try {
        if (r && !r.done && (m2 = i["return"]))
          m2.call(i);
      } finally {
        if (e2)
          throw e2.error;
      }
    }
    return ar;
  };
  var defaultContextValue = {
    type: "radio"
  };
  var defaultProps = {
    type: "radio",
    mode: "outline",
    direction: "horizontal"
  };
  var RadioGroupContext = React.createContext(defaultContextValue);
  function Group(baseProps) {
    var _a2;
    var _b2 = React.useContext(ConfigContext), getPrefixCls = _b2.getPrefixCls, ctxSize = _b2.size, componentConfig = _b2.componentConfig, rtl = _b2.rtl;
    var props = useMergeProps(baseProps, defaultProps, componentConfig === null || componentConfig === void 0 ? void 0 : componentConfig["Radio.Group"]);
    var style = props.style, className = props.className, name = props.name, children = props.children, direction = props.direction, type = props.type, mode = props.mode, options = props.options, disabled = props.disabled;
    var _c = __read$1(useMergeValue(void 0, {
      defaultValue: props.defaultValue,
      value: props.value
    }), 2), value = _c[0], setValue = _c[1];
    var size = props.size || ctxSize;
    var prefixCls = getPrefixCls("radio");
    var classNames = cs(prefixCls + "-group", (_a2 = {}, _a2[prefixCls + "-group-type-button"] = type !== "radio", _a2[prefixCls + "-size-" + size] = !!size, _a2[prefixCls + "-mode-" + mode] = !!mode, _a2[prefixCls + "-group-disabled"] = disabled, _a2[prefixCls + "-group-direction-vertical"] = direction === "vertical", _a2[prefixCls + "-group-rtl"] = rtl, _a2), className);
    var onChangeValue = function(v2, event) {
      var onChange = props.onChange;
      if (v2 !== value) {
        if (!("value" in props)) {
          setValue(v2);
        }
        onChange && onChange(v2, event);
      }
    };
    var contextProp = {
      onChangeValue,
      type,
      value,
      disabled,
      group: true,
      name
    };
    return React.createElement(
      RadioGroupContext.Provider,
      { value: contextProp },
      React.createElement("div", __assign$1({ className: classNames, role: "radiogroup", style }, pickTriggerPropsFromRest(props), pickDataAttributes(props)), options && isArray(options) ? options.map(function(option, index) {
        if (isObject(option)) {
          return React.createElement(Radio, { key: option.value, disabled: disabled || option.disabled, value: option.value }, option.label);
        }
        return React.createElement(Radio, { key: index, value: option, disabled }, option);
      }) : children)
    );
  }
  Group.displayName = "RadioGroup";
  var __assign = function() {
    __assign = Object.assign || function(t2) {
      for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
        s = arguments[i];
        for (var p2 in s)
          if (Object.prototype.hasOwnProperty.call(s, p2))
            t2[p2] = s[p2];
      }
      return t2;
    };
    return __assign.apply(this, arguments);
  };
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
  var __read = function(o, n2) {
    var m2 = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m2)
      return o;
    var i = m2.call(o), r, ar = [], e2;
    try {
      while ((n2 === void 0 || n2-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e2 = { error };
    } finally {
      try {
        if (r && !r.done && (m2 = i["return"]))
          m2.call(i);
      } finally {
        if (e2)
          throw e2.error;
      }
    }
    return ar;
  };
  function Radio(baseProps) {
    var _a2;
    var inputRef = React.useRef(null);
    var _b2 = React.useContext(ConfigContext), getPrefixCls = _b2.getPrefixCls, componentConfig = _b2.componentConfig, rtl = _b2.rtl;
    var props = useMergeProps(baseProps, {}, componentConfig === null || componentConfig === void 0 ? void 0 : componentConfig.Radio);
    var context = React.useContext(RadioGroupContext);
    var prefixCls = getPrefixCls("radio");
    var mergeProps = __assign({}, props);
    if (context.group) {
      mergeProps.checked = context.value === props.value;
      mergeProps.disabled = "disabled" in props ? props.disabled : context.disabled;
    }
    var disabled = mergeProps.disabled, children = mergeProps.children, value = mergeProps.value, style = mergeProps.style, className = mergeProps.className, rest = __rest(mergeProps, ["disabled", "children", "value", "style", "className"]);
    var _c = __read(useMergeValue(false, {
      value: mergeProps.checked,
      defaultValue: mergeProps.defaultChecked
    }), 2), checked = _c[0], setChecked = _c[1];
    var classNames = cs("" + prefixCls + (context.type === "button" ? "-button" : ""), (_a2 = {}, _a2[prefixCls + "-checked"] = checked, _a2[prefixCls + "-disabled"] = disabled, _a2[prefixCls + "-rtl"] = rtl, _a2), className);
    var onChange = function(event) {
      var onChange2 = mergeProps.onChange, value2 = mergeProps.value;
      if (disabled) {
        return;
      }
      if (context.group) {
        context.onChangeValue && context.onChangeValue(value2, event);
      } else if (!("checked" in props) && !checked) {
        setChecked(true);
      }
      !checked && onChange2 && onChange2(true, event);
    };
    var onLabelClick = React.useCallback(function(e2) {
      if (isFunction(props.children)) {
        e2.preventDefault();
        inputRef.current && inputRef.current.click();
      }
      rest.onClick && rest.onClick(e2);
    }, [props.children, rest.onClick]);
    return React.createElement(
      "label",
      __assign({}, omit(rest, ["checked", "onChange"]), { onClick: onLabelClick, style, className: classNames }),
      React.createElement("input", __assign({ ref: inputRef, disabled, value: value || "", type: "radio" }, context.name ? { name: context.name } : {}, { checked, onChange: function(event) {
        event.persist();
        onChange(event);
      }, onClick: function(e2) {
        e2.stopPropagation();
      } })),
      isFunction(children) ? children({ checked }) : context.type === "radio" ? React.createElement(
        React.Fragment,
        null,
        React.createElement(
          IconHover,
          { prefix: prefixCls, className: prefixCls + "-mask-wrapper", disabled: checked || disabled },
          React.createElement("div", { className: prefixCls + "-mask" })
        ),
        !isNullOrUndefined(children) && React.createElement("span", { className: prefixCls + "-text" }, children)
      ) : context.type === "button" && React.createElement("span", { className: prefixCls + "-button-inner" }, children)
    );
  }
  Radio.__BYTE_RADIO = true;
  Radio.displayName = "Radio";
  Radio.Group = Group;
  Radio.GroupContext = RadioGroupContext;
  const useWindowSize = () => {
    const [windowSize, setWindowSize] = React.useState({
      width: 0,
      height: 0,
      scale: 0
    });
    function update() {
      const {
        innerWidth: width,
        innerHeight: height,
        devicePixelRatio: scale
      } = window;
      console.info(`发生变化：${width}x${height}@${scale}x`);
      setWindowSize({
        width,
        height,
        scale
      });
    }
    React.useEffect(() => {
      update();
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }, []);
    return windowSize;
  };
  const TaskList = ({ tasks, onDownload }) => {
    const windowSize = useWindowSize();
    const [taskStatus, setTaskStatus] = React.useState(TaskStatus.Pending);
    const taskAmounts = React.useMemo(() => {
      const amounts = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        9: tasks.length
      };
      tasks.forEach((t2) => amounts[t2.status]++);
      return amounts;
    }, [tasks]);
    const taskStatusOptions = [
      {
        label: `所有(${taskAmounts[TaskStatus.All]})`,
        value: TaskStatus.All
      },
      {
        label: `等待(${taskAmounts[TaskStatus.Pending]})`,
        value: TaskStatus.Pending
      },
      {
        label: `下载(${taskAmounts[TaskStatus.Running]})`,
        value: TaskStatus.Running
      },
      {
        label: `错误(${taskAmounts[TaskStatus.Error]})`,
        value: TaskStatus.Error
      },
      {
        label: `完成(${taskAmounts[TaskStatus.Done]})`,
        value: TaskStatus.Done
      }
    ];
    let taskViews = [];
    taskViews = tasks.map((task) => /* @__PURE__ */ jsxRuntimeExports.jsx(TaskView, { task, selectedStatus: taskStatus }, `${task.id}`));
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Radio.Group,
        {
          type: "button",
          size: "mini",
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
          direction: "column",
          gap: 3,
          style: {
            height: windowSize.height - 150,
            overflowX: "hidden",
            overflowY: "auto"
          },
          children: taskViews
        }
      )
    ] });
  };
  function Button({
    type = "default",
    size = "default",
    icon,
    className,
    onClick,
    children,
    style,
    disabled
  }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className, disabled, onClick, children: [
      icon,
      children
    ] });
  }
  const DefaultStyle$1 = {
    width: 16,
    height: 16
  };
  const IconUp = ({ style = DefaultStyle$1 }) => {
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
  const IconDown = ({ style = DefaultStyle$1 }) => {
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
  const IconDownload = ({ style = DefaultStyle$1 }) => {
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
  const IconSave = ({ style = DefaultStyle$1 }) => {
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
  const adapter = AdapterFactory.create();
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
  const TaskPanel = ({ style }) => {
    const [step, setStep] = React.useState(
      0
      /* Pending */
    );
    const [title, setTitle] = React.useState("");
    const [taskAmount, setTaskAmount] = React.useState(0);
    const [taskMap, setTaskMap] = React.useState({});
    const [minimized, setMinimized] = React.useState(false);
    const tasks = React.useMemo(() => {
      const list = [];
      for (let id in taskMap) {
        const task = taskMap[id];
        if (task !== void 0) {
          list.push(task);
        }
      }
      return list;
    }, [taskMap]);
    async function fetchGallery() {
      const gallery = await adapter.fetchGallery();
      setTitle(gallery.title);
      setTaskAmount(gallery.pageAmount);
      adapter.fetchTasks(gallery.id, addTask);
    }
    function addTask(task) {
      taskMap[task.id] = task;
      setTaskMap({
        ...taskMap
      });
    }
    function patchTask(patch) {
      const task = taskMap[patch.id];
      if (task !== void 0) {
        taskMap[patch.id] = {
          ...task,
          ...patch
        };
        setTaskMap({ ...taskMap });
      }
    }
    function downloadAll() {
      for (const id in tasks) {
        const task = tasks[id];
        if (task !== void 0) {
          download(task);
        }
      }
    }
    function download(task) {
      xmlHttpRequest("GET", task.url, "blob", (event) => {
        const { lengthComputable, loaded, total } = event;
        console.info(`下载进度更新：`, event);
        onProgress(task.id, loaded, total);
      }).then(async (blob) => {
        const mime = blob.type;
        const buffer = await blob.arrayBuffer();
        const bytes = new Uint8Array(buffer);
        onComplete({
          ...task,
          mime,
          bytes
        });
      });
    }
    function onProgress(id, completed, total) {
      console.info(`任务${id}下载进度更新：${completed} / ${total}`);
      const status = TaskStatus.Running;
      patchTask({
        id,
        status,
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
    function sizeToggle() {
      setMinimized(!minimized);
    }
    React.useEffect(() => {
      setStep(
        1
        /* Fetch */
      );
      fetchGallery();
    }, []);
    let taskList = null;
    if (!minimized) {
      taskList = /* @__PURE__ */ jsxRuntimeExports.jsx(TaskList, { tasks, onDownload: download });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Flex,
      {
        className: "task-panel",
        gap: 8,
        direction: "column",
        style: {
          ...DefaultStyle,
          ...style
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { justify: "start", gap: 12, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "primary",
                size: "small",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconDownload, {}),
                onClick: downloadAll
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "primary",
                size: "small",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconSave, {}),
                disabled: tasks.length > 0 && tasks.length !== Object.keys(files).length,
                onClick: pack
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { flex: 1, justify: "end", align: "center", gap: 12, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "plugin-version", children: [
                "v",
                version
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "small",
                  icon: minimized ? /* @__PURE__ */ jsxRuntimeExports.jsx(IconDown, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(IconUp, {}),
                  onClick: sizeToggle
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Flex, { align: "center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flex, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "total-progress", children: "下载进度：" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Progress,
              {
                success: tasks.filter((t2) => t2.status === TaskStatus.Done).length,
                running: tasks.filter((t2) => t2.status === TaskStatus.Running).length,
                error: tasks.filter((t2) => t2.status === TaskStatus.Error).length,
                pending: tasks.filter((t2) => t2.status === TaskStatus.Pending).length
              }
            )
          ] }),
          taskList
        ]
      }
    );
  };
  const container = document.createElement("div");
  container.id = "mgpk-container";
  document.body.append(container);
  client.createRoot(container).render(/* @__PURE__ */ jsxRuntimeExports.jsx(TaskPanel, {}));

})(React, ReactDOM);