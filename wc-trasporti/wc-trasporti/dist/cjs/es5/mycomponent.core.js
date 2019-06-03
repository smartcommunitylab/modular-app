"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * mycomponent: Core, es5
 * Built with http://stenciljs.com
 */
function n(n, t) { return "sc-" + n.t + (t && t !== c ? "-" + t : ""); }
function t(n, t) { return n + (t ? "-h" : "-s"); }
function e(n, t) { for (var e, r, i = null, o = !1, u = !1, f = arguments.length; f-- > 2;)
    k.push(arguments[f]); for (; k.length > 0;) {
    var c = k.pop();
    if (c && void 0 !== c.pop)
        for (f = c.length; f--;)
            k.push(c[f]);
    else
        "boolean" == typeof c && (c = null), (u = "function" != typeof n) && (null == c ? c = "" : "number" == typeof c ? c = String(c) : "string" != typeof c && (u = !1)), u && o ? i[i.length - 1].vtext += c : null === i ? i = [u ? { vtext: c } : c] : i.push(u ? { vtext: c } : c), o = u;
} if (null != t) {
    if (t.className && (t.class = t.className), "object" == typeof t.class) {
        for (f in t.class)
            t.class[f] && k.push(f);
        t.class = k.join(" "), k.length = 0;
    }
    null != t.key && (e = t.key), null != t.name && (r = t.name);
} return "function" == typeof n ? n(t, i || [], $) : { vtag: n, vchildren: i, vtext: void 0, vattrs: t, vkey: e, vname: r, i: void 0, o: !1 }; }
exports.h = e;
function r(n, t, e) { void 0 === e && (e = {}); var r = Array.isArray(t) ? t : [t], i = n.document, o = e.hydratedCssClass || "hydrated", u = e.exclude; u && (r = r.filter(function (n) { return -1 === u.indexOf(n[0]); })); var c = r.map(function (n) { return n[0]; }); if (c.length > 0) {
    var a = i.createElement("style");
    a.innerHTML = c.join() + "{visibility:hidden}." + o + "{visibility:inherit}", a.setAttribute("data-styles", ""), i.head.insertBefore(a, i.head.firstChild);
} var s = e.namespace || "mycomponent"; return O || (O = !0, function l(n, t, e) { (n["s-apps"] = n["s-apps"] || []).push(t), e.componentOnReady || (e.componentOnReady = function t() { function e(t) { if (r.nodeName.indexOf("-") > 0) {
    for (var e = n["s-apps"], i = 0, o = 0; o < e.length; o++)
        if (n[e[o]].componentOnReady) {
            if (n[e[o]].componentOnReady(r, t))
                return;
            i++;
        }
    if (i < e.length)
        return void (n["s-cr"] = n["s-cr"] || []).push([r, t]);
} t(null); } var r = this; return n.Promise ? new n.Promise(e) : { then: e }; }); }(n, s, n.HTMLElement.prototype)), applyPolyfills(n).then(function () { function t() { r.forEach(function (t) { var e; !function r(n) { return /\{\s*\[native code\]\s*\}/.test("" + n); }(n.customElements.define) ? (e = function (t) { return n.HTMLElement.call(this, t); }).prototype = Object.create(n.HTMLElement.prototype, { constructor: { value: e, configurable: !0 } }) : e = new Function("w", "return class extends w.HTMLElement{}")(n), P[s].u(function i(n) { var t = E(n), e = t.s, r = p(n[0]); return t.s = function (n) { var t = n.mode, i = n.scoped; return function o(n, t, e) { return Promise.resolve().then(function () { return require("./build/" + n + (t ? ".sc" : "") + ".entry.js"); }).then(function (n) { return n[e]; }); }("string" == typeof e ? e : e[t], i, r); }, t; }(t), e); }); } if (!P[s]) {
    var u = {}, c = e.resourcesUrl || "./";
    f(s, u, n, i, c, o), P[s] = x(s, u, n, i, c, o, r);
} if (window.customStyleShim)
    return P[s].l = window.customStyleShim, P[s].l.initShim().then(t); t(); }); }
exports.defineCustomElement = r;
this && this.v;
var i = this && this.p || function (n, t, e, r) { return new (e || (e = Promise))(function (i, o) { function u(n) { try {
    c(r.next(n));
}
catch (n) {
    o(n);
} } function f(n) { try {
    c(r.throw(n));
}
catch (n) {
    o(n);
} } function c(n) { n.done ? i(n.value) : new e(function (t) { t(n.value); }).then(u, f); } c((r = r.apply(n, t || [])).next()); }); }, o = this && this.m || function (n, t) { function e(e) { return function (u) { return function c(e) { if (r)
    throw new TypeError("Generator is already executing."); for (; f;)
    try {
        if (r = 1, i && (o = 2 & e[0] ? i.return : e[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, e[1])).done)
            return o;
        switch (i = 0, o && (e = [2 & e[0], o.value]), e[0]) {
            case 0:
            case 1:
                o = e;
                break;
            case 4: return f.label++, { value: e[1], done: !1 };
            case 5:
                f.label++, i = e[1], e = [0];
                continue;
            case 7:
                e = f.M.pop(), f.g.pop();
                continue;
            default:
                if (!(o = (o = f.g).length > 0 && o[o.length - 1]) && (6 === e[0] || 2 === e[0])) {
                    f = 0;
                    continue;
                }
                if (3 === e[0] && (!o || e[1] > o[0] && e[1] < o[3])) {
                    f.label = e[1];
                    break;
                }
                if (6 === e[0] && f.label < o[1]) {
                    f.label = o[1], o = e;
                    break;
                }
                if (o && f.label < o[2]) {
                    f.label = o[2], f.M.push(e);
                    break;
                }
                o[2] && f.M.pop(), f.g.pop();
                continue;
        }
        e = t.call(n, f);
    }
    catch (n) {
        e = [6, n], i = 0;
    }
    finally {
        r = o = 0;
    } if (5 & e[0])
    throw e[1]; return { value: e[0] ? e[1] : void 0, done: !0 }; }([e, u]); }; } var r, i, o, u, f = { label: 0, k: function () { if (1 & o[0])
        throw o[1]; return o[1]; }, g: [], M: [] }; return u = { next: e(0), throw: e(1), return: e(2) }, "function" == typeof Symbol && (u[Symbol.iterator] = function () { return this; }), u; }, u = this, f = function () { };
function applyPolyfills(n) { n.A = function () { function t() { var n = setTimeout; return function () { return n(e, 1); }; } function e() { for (var n = 0; n < m; n += 2)
    (0, S[n])(S[n + 1]), S[n] = void 0, S[n + 1] = void 0; m = 0; } function r(n, t) { var e = this, r = new this.constructor(o); void 0 === r[W] && h(r); var i = e.j; if (i) {
    var u = arguments[i - 1];
    g(function () { return d(i, r, u, e.C); });
}
else
    v(e, r, n, t); return r; } function i(n) { if (n && "object" == typeof n && n.constructor === this)
    return n; var t = new this(o); return c(t, n), t; } function o() { } function u(n) { try {
    return n.then;
}
catch (n) {
    return T.error = n, T;
} } function f(n, t, e) { t.constructor === n.constructor && e === r && t.constructor.resolve === i ? function (n, t) { t.j === P ? s(n, t.C) : t.j === O ? l(n, t.C) : v(t, void 0, function (t) { return c(n, t); }, function (t) { return l(n, t); }); }(n, t) : e === T ? (l(n, T.error), T.error = null) : void 0 === e ? s(n, t) : "function" == typeof e ? function (n, t, e) { g(function (n) { var r = !1, i = function (n, t, e, r) { try {
    n.call(t, e, r);
}
catch (n) {
    return n;
} }(e, t, function (e) { r || (r = !0, t !== e ? c(n, e) : s(n, e)); }, function (t) { r || (r = !0, l(n, t)); }, n.S); !r && i && (r = !0, l(n, i)); }, n); }(n, t, e) : s(n, t); } function c(n, t) { if (n === t)
    l(n, new TypeError("cannot resolve promise w/ itself"));
else {
    var e = typeof t;
    null === t || "object" !== e && "function" !== e ? s(n, t) : f(n, t, u(t));
} } function a(n) { n._ && n._(n.C), p(n); } function s(n, t) { n.j === x && (n.C = t, n.j = P, 0 !== n.W.length && g(p, n)); } function l(n, t) { n.j === x && (n.j = O, n.C = t, g(a, n)); } function v(n, t, e, r) { var i = n.W, o = i.length; n._ = null, i[o] = t, i[o + P] = e, i[o + O] = r, 0 === o && n.j && g(p, n); } function p(n) { var t = n.W, e = n.j; if (0 !== t.length) {
    for (var r, i, o = n.C, u = 0; u < t.length; u += 3)
        r = t[u], i = t[u + e], r ? d(e, r, i, o) : i(o);
    n.W.length = 0;
} } function d(n, t, e, r) { var i = "function" == typeof e, o = void 0, u = void 0, f = void 0, a = void 0; if (i) {
    try {
        o = e(r);
    }
    catch (n) {
        T.error = n, o = T;
    }
    if (o === T ? (a = !0, u = o.error, o.error = null) : f = !0, t === o)
        return void l(t, new TypeError("Cannot return same promise"));
}
else
    o = r, f = !0; t.j === x && (i && f ? c(t, o) : a ? l(t, u) : n === P ? s(t, o) : n === O && l(t, o)); } function h(n) { n[W] = N++, n.j = void 0, n.C = void 0, n.W = []; } var y, w = Array.isArray ? Array.isArray : function (n) { return "[object Array]" === Object.prototype.toString.call(n); }, m = 0, b = void 0, M = void 0, g = function (n, t) { S[m] = n, S[m + 1] = t, 2 === (m += 2) && (M ? M(e) : _()); }, k = (y = void 0 !== n ? n : void 0) || {}, $ = k.MutationObserver || k.WebKitMutationObserver; k = "undefined" == typeof self; var E, A, j, C = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, S = Array(1e3), _ = void 0; _ = $ ? (E = 0, A = new $(e), j = document.createTextNode(""), A.observe(j, { characterData: !0 }), function () { j.data = E = ++E % 2; }) : C ? function () { var n = new MessageChannel; return n.port1.onmessage = e, function () { return n.port2.postMessage(0); }; }() : void 0 === y && "function" == typeof require ? function () { try {
    var n = Function("return this")().require("vertx");
    return void 0 !== (b = n.P || n.O) ? function () { b(e); } : t();
}
catch (n) {
    return t();
} }() : t(); var W = Math.random().toString(36).substring(2), x = void 0, P = 1, O = 2, T = { error: null }, N = 0, R = function () { function n(n, t) { this.T = n, this.N = new n(o), this.N[W] || h(this.N), w(t) ? (this.R = this.length = t.length, this.C = Array(this.length), 0 === this.length ? s(this.N, this.C) : (this.length = this.length || 0, this.L(t), 0 === this.R && s(this.N, this.C))) : l(this.N, Error("Array Methods must be provided an Array")); } return n.prototype.L = function (n) { for (var t = 0; this.j === x && t < n.length; t++)
    this.D(n[t], t); }, n.prototype.D = function (n, t) { var e = this.T, c = e.resolve; c === i ? (c = u(n)) === r && n.j !== x ? this.F(n.j, t, n.C) : "function" != typeof c ? (this.R--, this.C[t] = n) : e === L ? (f(e = new e(o), n, c), this.H(e, t)) : this.H(new e(function (t) { return t(n); }), t) : this.H(c(n), t); }, n.prototype.F = function (n, t, e) { var r = this.N; r.j === x && (this.R--, n === O ? l(r, e) : this.C[t] = e), 0 === this.R && s(r, this.C); }, n.prototype.H = function (n, t) { var e = this; v(n, void 0, function (n) { return e.F(P, t, n); }, function (n) { return e.F(O, t, n); }); }, n; }(), L = function () { function n(t) { if (this[W] = N++, this.C = this.j = void 0, this.W = [], o !== t) {
    if ("function" != typeof t)
        throw new TypeError("Must pass a resolver fn as 1st arg");
    if (!(this instanceof n))
        throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");
    !function (n, t) { try {
        t(function (t) { c(n, t); }, function (t) { l(n, t); });
    }
    catch (t) {
        l(n, t);
    } }(this, t);
} } return n.prototype.catch = function (n) { return this.then(null, n); }, n.prototype.finally = function (n) { var t = this.constructor; return this.then(function (e) { return t.resolve(n()).then(function () { return e; }); }, function (e) { return t.resolve(n()).then(function () { throw e; }); }); }, n; }(); return L.prototype.then = r, L.all = function (n) { return new R(this, n).N; }, L.race = function (n) { var t = this; return w(n) ? new t(function (e, r) { for (var i = n.length, o = 0; o < i; o++)
    t.resolve(n[o]).then(e, r); }) : new t(function (n, t) { return t(new TypeError("Must pass array to race")); }); }, L.resolve = i, L.reject = function (n) { var t = new this(o); return l(t, n), t; }, L.q = function (n) { M = n; }, L.U = function (n) { g = n; }, L.B = g, L.I = function () { var n = void 0; if ("undefined" != typeof global)
    n = global;
else if ("undefined" != typeof self)
    n = self;
else
    try {
        n = Function("return this")();
    }
    catch (n) {
        throw Error("polyfill failed");
    } var t = n.Promise; if (t) {
    var e = null;
    try {
        e = Object.prototype.toString.call(t.resolve());
    }
    catch (n) { }
    if ("[object Promise]" === e && !t.cast)
        return;
} n.Promise = L; }, L.Promise = L, L.I(), L; }(); var t = []; return n.customElements && (!n.Element || n.Element.prototype.closest && n.Element.prototype.matches && n.Element.prototype.remove) || t.push(Promise.resolve().then(function () { return require("./polyfills/dom.js"); })), "function" == typeof Object.assign && Object.entries || t.push(Promise.resolve().then(function () { return require("./polyfills/object.js"); })), Array.prototype.find && Array.prototype.includes || t.push(Promise.resolve().then(function () { return require("./polyfills/array.js"); })), String.prototype.startsWith && String.prototype.endsWith || t.push(Promise.resolve().then(function () { return require("./polyfills/string.js"); })), n.fetch || t.push(Promise.resolve().then(function () { return require("./polyfills/fetch.js"); })), "undefined" != typeof WeakMap && n.CSS && n.CSS.supports && n.CSS.supports("color", "var(--c)") || t.push(Promise.resolve().then(function () { return require("./polyfills/css-shim.js"); })), function e() { try {
    var n = new URL("b", "http://a");
    return n.pathname = "c%20d", "http://a/c%20d" === n.href && n.searchParams;
}
catch (n) {
    return !1;
} } || t.push(Promise.resolve().then(function () { return require("./polyfills/url.js"); })), Promise.all(t).then(function (t) { t.forEach(function (t) { try {
    t.applyPolyfill(n, n.document);
}
catch (n) {
    console.error(n);
} }); }); }
var c = "$", a = {}, s = function (t, e, r, i) { var o = r.t + c, u = r[o]; if ((2 === r.G || 1 === r.G && !t.Z.Y) && (i["s-sc"] = u ? n(r, i.mode) : n(r)), u) {
    var f = e.J.head;
    if (e.Y)
        if (1 === r.G)
            f = i.shadowRoot;
        else {
            var a = i.getRootNode();
            a.host && (f = a);
        }
    var s = t.K.get(f);
    if (s || t.K.set(f, s = {}), !s[o]) {
        var l = void 0;
        if (t.l ? l = t.l.createHostStyle(i, o, u) : ((l = e.V("style")).innerHTML = u, s[o] = !0), l) {
            var v = f.querySelectorAll("[data-styles]");
            e.X(f, l, v.length && v[v.length - 1].nextSibling || f.firstChild);
        }
    }
} }, l = function (n) { return null != n; }, v = function (n) { return n.toLowerCase(); }, p = function (n) { return v(n).split("-").map(function (n) { return n.charAt(0).toUpperCase() + n.slice(1); }).join(""); }, d = "http://www.w3.org/1999/xlink", h = function (n, t, e, r, i, o) { if ("class" !== e || o)
    if ("style" === e)
        for (var u in i)
            r && i[u] === r[u] || (/-/.test(u) ? t.style.setProperty(u, i[u]) : t.style[u] = i[u]);
    else
        "o" !== e[0] || "n" !== e[1] || !/[A-Z]/.test(e[2]) || e in t ? "list" !== e && "type" !== e && !o && (e in t || -1 !== ["object", "function"].indexOf(typeof i) && null !== i) ? (n.nn(t), "ref" !== e && (y(t, e, null == i ? "" : i), null != i && !1 !== i || n.Z.tn(t, e))) : null != i && "key" !== e ? function (n, t, e, r, i) { void 0 === r && (r = "boolean" == typeof e), i = t !== (t = t.replace(/^xlink\:?/, "")), null == e || r && (!e || "false" === e) ? i ? n.removeAttributeNS(d, v(t)) : n.removeAttribute(t) : "function" != typeof e && (e = r ? "" : e.toString(), i ? n.setAttributeNS(d, v(t), e) : n.setAttribute(t, e)); }(t, e, i) : (o || n.Z.en(t, e) && (null == i || !1 === i)) && n.Z.tn(t, e) : (e = v(e) in t ? v(e.substring(2)) : v(e[2]) + e.substring(3), i && i !== r && n.Z.rn(t, e, i, 0));
else
    t.className = i; }, y = function (n, t, e) { try {
    n[t] = e;
}
catch (n) { } }, w = function (n, t, e, r, i) { var o = 11 === e.i.nodeType && e.i.host ? e.i.host : e.i, u = t && t.vattrs || a, f = e.vattrs || a; for (i in f)
    i in u && f[i] === ("value" === i || "checked" === i ? o[i] : u[i]) || h(n, o, i, u[i], f[i], r, e.o); }, m = !1, b = function (n, t) { var e, r, i, o, u, f, c, a = function (i, v, p, d, h, y, b, M, g) { if (M = v.vchildren[p], e || (o = !0, "slot" === M.vtag && (r && t.in(d, r + "-s"), M.vchildren ? M.on = !0 : M.un = !0)), l(M.vtext))
    M.i = t.fn(M.vtext);
else if (M.un)
    M.i = t.fn("");
else {
    if (y = M.i = m || "svg" === M.vtag ? t.cn("http://www.w3.org/2000/svg", M.vtag) : t.V(M.on ? "slot-fb" : M.vtag), n.an(y) && n.sn.delete(c), m = "svg" === M.vtag || "foreignObject" !== M.vtag && m, w(n, null, M, m), l(r) && y["s-si"] !== r && t.in(y, y["s-si"] = r), M.vchildren)
        for (h = 0; h < M.vchildren.length; ++h)
            (b = a(i, M, h, y)) && t.ln(y, b);
    "svg" === M.vtag && (m = !1);
} return M.i["s-hn"] = f, (M.on || M.un) && (M.i["s-sr"] = !0, M.i["s-cr"] = u, M.i["s-sn"] = M.vname || "", (g = i && i.vchildren && i.vchildren[p]) && g.vtag === M.vtag && i.i && s(i.i)), M.i; }, s = function (e, r, i, u) { n.vn = !0; var c = t.pn(e); for (i = c.length - 1; i >= 0; i--)
    (u = c[i])["s-hn"] !== f && u["s-ol"] && (t.dn(u), t.X(p(u), u, v(u)), t.dn(u["s-ol"]), u["s-ol"] = null, o = !0), r && s(u, r); n.vn = !1; }, v = function (n) { return n && n["s-ol"] ? n["s-ol"] : n; }, p = function (n) { return t.hn(n["s-ol"] ? n["s-ol"] : n); }, d = function (n, e, r, i, o, u, f, c) { for (i = 0, o = (r = t.pn(n)).length; i < o; i++)
    if (e = r[i], 1 === t.yn(e)) {
        if (e["s-sr"])
            for (f = e["s-sn"], e.hidden = !1, u = 0; u < o; u++)
                if (r[u]["s-hn"] !== e["s-hn"])
                    if (c = t.yn(r[u]), "" !== f) {
                        if (1 === c && f === t.wn(r[u], "slot")) {
                            e.hidden = !0;
                            break;
                        }
                    }
                    else if (1 === c || 3 === c && "" !== t.mn(r[u]).trim()) {
                        e.hidden = !0;
                        break;
                    }
        d(e);
    } }, h = [], y = function (n, e, r, o, u, f, c, a, s, l) { for (u = 0, f = (e = t.pn(n)).length; u < f; u++) {
    if ((r = e[u])["s-sr"] && (o = r["s-cr"]))
        for (a = t.pn(t.hn(o)), s = r["s-sn"], c = a.length - 1; c >= 0; c--)
            (o = a[c])["s-cn"] || o["s-nr"] || o["s-hn"] === r["s-hn"] || ((3 === (l = t.yn(o)) || 8 === l) && "" === s || 1 === l && null === t.wn(o, "slot") && "" === s || 1 === l && t.wn(o, "slot") === s) && (h.some(function (n) { return n.bn === o; }) || (i = !0, o["s-sn"] = s, h.push({ Mn: r, bn: o })));
    1 === t.yn(r) && y(r);
} }; return function (s, p, b, M, g, k, $, E, A, j, C, S) { if (c = s, f = t.gn(c), u = c["s-cr"], e = M, r = c["s-sc"], o = i = !1, function (e, r, i) { var o = r.i = e.i, u = (e.vchildren, r.vchildren); m = r.i && l(t.kn(r.i)) && void 0 !== r.i.ownerSVGElement, m = "svg" === r.vtag || "foreignObject" !== r.vtag && m, l(r.vtext) ? (i = o["s-cr"]) ? t.$n(t.hn(i), r.vtext) : e.vtext !== r.vtext && t.$n(o, r.vtext) : ("slot" !== r.vtag && w(n, e, r, m), l(u) && function (n, e, r, i, o, u, c, s) { var p = n["s-cr"]; for ((c = p && t.hn(p) || n).shadowRoot && t.gn(c) === f && (c = c.shadowRoot); o <= u; ++o)
    i[o] && (s = l(i[o].vtext) ? t.fn(i[o].vtext) : a(null, r, o, n)) && (i[o].i = s, t.X(c, s, v(null))); }(o, 0, r, u, 0, u.length - 1)), m && "svg" === r.vtag && (m = !1); }(p, b), o) {
    for (y(b.i), $ = 0; $ < h.length; $++)
        (E = h[$]).bn["s-ol"] || ((A = t.fn(""))["s-nr"] = E.bn, t.X(t.hn(E.bn), E.bn["s-ol"] = A, E.bn));
    for (n.vn = !0, $ = 0; $ < h.length; $++) {
        for (E = h[$], C = t.hn(E.Mn), S = t.En(E.Mn), A = E.bn["s-ol"]; A = t.An(A);)
            if ((j = A["s-nr"]) && j && j["s-sn"] === E.bn["s-sn"] && C === t.hn(j) && (j = t.En(j)) && j && !j["s-nr"]) {
                S = j;
                break;
            }
        (!S && C !== t.hn(E.bn) || t.En(E.bn) !== S) && E.bn !== S && (t.dn(E.bn), t.X(C, E.bn, S));
    }
    n.vn = !1;
} return i && d(b.i), h.length = 0, b; }; }, M = function (n, t) { n && (n.vattrs && n.vattrs.ref && n.vattrs.ref(t ? null : n.i), n.vchildren && n.vchildren.forEach(function (n) { M(n, t); })); }, g = function (n, t) { var e = Promise.resolve(), r = function (n) { e.then(function () { try {
    n(t.performance.now());
}
catch (n) {
    console.error(n);
} }); }; return { tick: r, read: r, write: r }; }, k = [], $ = { forEach: function (n, t) { return n.forEach(t); }, map: function (n, t) { return n.map(t); } }, E = function (n) { var t = n[0], e = n[1], r = (n[3], n[4]), i = n[5]; return { t: t, s: e, jn: Object.assign({}, { color: { Cn: "color" } }), G: r, Sn: i ? i.map(A) : void 0 }; }, A = function (n) { return { _n: n[0], Wn: n[1], xn: !!n[2], Pn: !!n[3], On: !!n[4] }; }, j = function (n, t, e) { n.Tn.add(t), n.Nn.has(t) || (n.Nn.set(t, !0), n.Rn ? n.queue.write(function () { return C(n, t, e); }) : n.queue.tick(function () { return C(n, t, e); })); }, C = function (n, r, f, c, a, s) { return i(u, void 0, void 0, function () { var i, u; return o(this, function (o) { switch (o.label) {
    case 0: return n.Nn.delete(r), n.Ln.has(r) ? [3, 12] : (a = n.Dn.get(r)) ? [3, 6] : (s = n.Fn.get(r)) && !s["s-rn"] ? ((s["s-rc"] = s["s-rc"] || []).push(function () { C(n, r, f); }), [2]) : (a = S(n, r, n.Hn.get(r), f), [3, 5]);
    case 1: return o.g.push([1, 4, , 5]), a.componentWillLoad ? [4, a.componentWillLoad()] : [3, 3];
    case 2: o.k(), o.label = 3;
    case 3: return [3, 5];
    case 4: return i = o.k(), n.qn(i, 3, r), [3, 5];
    case 5:
    case 6: return [3, 11];
    case 7: return o.g.push([7, 10, , 11]), a.componentWillUpdate ? [4, a.componentWillUpdate()] : [3, 9];
    case 8: o.k(), o.label = 9;
    case 9: return [3, 11];
    case 10: return u = o.k(), n.qn(u, 5, r), [3, 11];
    case 11: (function (n, r, i, o) { try {
        var u = r.Un.host, f = r.Un.encapsulation, c = "shadow" === f && n.Z.Y, a = i;
        if (c && (a = i.shadowRoot), !i["s-rn"]) {
            n.Bn(n, n.Z, r, i);
            var s = i["s-sc"];
            s && (n.Z.in(i, t(s, !0)), "scoped" === f && n.Z.in(i, t(s)));
        }
        if (o.render || o.hostData || u) {
            n.In = !0;
            var l = o.render && o.render();
            n.In = !1;
            var v = e(null, void 0, l), p = n.Gn.get(i) || {};
            p.i = a, n.Gn.set(i, n.render(i, p, v, c, f));
        }
        n.l && n.l.updateHost(i), i["s-rn"] = !0, i["s-rc"] && (i["s-rc"].forEach(function (n) { return n(); }), i["s-rc"] = null);
    }
    catch (t) {
        n.In = !1, n.qn(t, 8, i, !0);
    } })(n, n.nn(r), r, a), r["s-init"](), o.label = 12;
    case 12: return [2];
} }); }); }, S = function (n, t, e, r, i, o) { try {
    i = new (o = n.nn(t).Un), function (n, t, e, r) { n.Qn.set(r, e), n.Yn.has(e) || n.Yn.set(e, {}), Object.entries(Object.assign({ color: { type: String } }, t.properties, { mode: { type: String } })).forEach(function (n) { n[0], n[1]; }); }(n, o, t, i);
}
catch (e) {
    i = {}, n.qn(e, 7, t, !0);
} return n.Dn.set(t, i), i; }, _ = function (n, t) { for (var e = 0; e < t.childNodes.length; e++) {
    var r = t.childNodes[e];
    if (1 === r.nodeType) {
        if (n.nn(r) && !n.Zn.has(r))
            return !1;
        if (!_(n, r))
            return !1;
    }
} return !0; }, W = function (n, t, e, r, i, o) { if (n.Tn.delete(t), (i = n.Fn.get(t)) && ((r = i["s-ld"]) && ((e = r.indexOf(t)) > -1 && r.splice(e, 1), r.length || i["s-init"] && i["s-init"]()), n.Fn.delete(t)), n.zn.length && !n.Tn.size)
    for (; o = n.zn.shift();)
        o(); }, x = function (n, t, r, i, o, u) { var f = r.performance, a = { html: {} }, l = r[n] = r[n] || {}, p = function (n, t, e) { var r = new WeakMap, i = { J: e, Y: !!e.documentElement.attachShadow, Jn: !1, yn: function (n) { return n.nodeType; }, V: function (n) { return e.createElement(n); }, cn: function (n, t) { return e.createElementNS(n, t); }, fn: function (n) { return e.createTextNode(n); }, Kn: function (n) { return e.createComment(n); }, X: function (n, t, e) { return n.insertBefore(t, e); }, dn: function (n) { return n.remove(); }, ln: function (n, t) { return n.appendChild(t); }, in: function (n, t) { if (n.classList)
        n.classList.add(t);
    else if ("svg" === n.nodeName.toLowerCase()) {
        var e = n.getAttribute("class") || "";
        e.split(" ").includes(t) || (e += " " + t), n.setAttribute("class", e.trim());
    } }, pn: function (n) { return n.childNodes; }, hn: function (n) { return n.parentNode; }, En: function (n) { return n.nextSibling; }, An: function (n) { return n.previousSibling; }, gn: function (n) { return v(n.nodeName); }, mn: function (n) { return n.textContent; }, $n: function (n, t) { return n.textContent = t; }, wn: function (n, t) { return n.getAttribute(t); }, Vn: function (n, t, e) { return n.setAttribute(t, e); }, tn: function (n, t) { return n.removeAttribute(t); }, en: function (n, t) { return n.hasAttribute(t); }, Xn: function (t) { return t.getAttribute("mode") || (n.Context || {}).mode; }, nt: function (n, r) { return "child" === r ? n.firstElementChild : "parent" === r ? i.kn(n) : "body" === r ? e.body : "document" === r ? e : "window" === r ? t : n; }, rn: function (t, e, o, u, f, c, a, s, l, v) { var p = t, d = o, h = r.get(t); v = e + u, h && h[v] && h[v](), "object" == typeof a && (p = a), p && (s = i.Jn ? { capture: !!f, passive: !!c } : !!f, n.ael(p, e, d, s), h || r.set(t, h = {}), h[v] = function () { p && n.rel(p, e, d, s), h[v] = null; }); }, tt: function (n, t, e, i) { (i = r.get(n)) && (t ? i[t + e] && i[t + e]() : Object.keys(i).forEach(function (n) { i[n] && i[n](); })); }, et: function (n, e, r, i) { return i = new t.CustomEvent(e, r), n && n.dispatchEvent(i), i; }, kn: function (n, t) { return (t = i.hn(n)) && 11 === i.yn(t) ? t.host : t; }, rt: function (n, t, e, r) { return n.setAttributeNS(t, e, r); }, it: function (n, t) { return n.attachShadow(t); } }; return "function" != typeof t.CustomEvent && (t.CustomEvent = function (n, t, r) { return t = t || {}, (r = e.createEvent("CustomEvent")).initCustomEvent(n, t.bubbles, t.cancelable, t.detail), r; }, t.CustomEvent.prototype = t.Event.prototype), n.ael || (n.ael = function (n, t, e, r) { return n.addEventListener(t, e, r); }, n.rel = function (n, t, e, r) { return n.removeEventListener(t, e, r); }), i; }(l, r, i), d = p.J.documentElement, h = r["s-defined"] = r["s-defined"] || {}, y = { Z: p, u: function (n, t) { r.customElements.get(n.t) || (function (n, t, e, r, i) { e.connectedCallback = function () { (function (n, t, e) { n.Ln.delete(e), n.Zn.has(e) || (n.ot = !0, n.Tn.add(e), n.Zn.set(e, !0), function (n, t, e) { for (e = t; e = n.Z.kn(e);)
        if (n.an(e)) {
            n.sn.has(t) || (n.Fn.set(t, e), (e["s-ld"] = e["s-ld"] || []).push(t));
            break;
        } }(n, e), n.queue.tick(function () { n.Hn.set(e, function (n, t, e) { if (e.mode || (e.mode = n.Xn(e)), e["s-cr"] || n.wn(e, "ssrv") || n.Y && 1 === t.G || (e["s-cr"] = n.fn(""), e["s-cr"]["s-cn"] = !0, n.X(e, e["s-cr"], n.pn(e)[0])), !n.Y && 1 === t.G)
        try {
            !window.HTMLElement || "shadowRoot" in window.HTMLElement.prototype || (e.shadowRoot = e);
        }
        catch (n) { } return 1 === t.G && n.Y && !e.shadowRoot && n.it(e, { mode: "open" }), { ut: {} }; }(n.Z, t, e)), n.ft(t, e); })); })(n, t, this); }, e.disconnectedCallback = function () { (function (n, t) { !n.vn && function (n, t) { for (; t;) {
        if (!n.hn(t))
            return 9 !== n.yn(t);
        t = n.hn(t);
    } }(n.Z, t) && (n.Ln.set(t, !0), W(n, t), M(n.Gn.get(t), !0), n.Z.tt(t), n.ct.delete(t), n.l && n.l.removeHost(t), [n.Fn, n.at, n.Hn].forEach(function (n) { return n.delete(t); })); })(n, this); }, e["s-init"] = function () { (function (n, t, e, r, i, o) { if (_(n, t) && n.Dn.get(t) && !n.Ln.has(t) && (!t["s-ld"] || !t["s-ld"].length)) {
        n.sn.set(t, !0), n.st.has(t) || (n.st.set(t, !0), t["s-ld"] = void 0, n.Z.in(t, e));
        try {
            M(n.Gn.get(t)), (o = n.at.get(t)) && (o.forEach(function (n) { return n(t); }), n.at.delete(t));
        }
        catch (e) {
            n.qn(e, 4, t);
        }
        W(n, t);
    } })(n, this, r); }, e.forceUpdate = function () { j(n, this, i); }; }(y, a[n.t] = n, t.prototype, u, f), r.customElements.define(n.t, t)); }, nn: function (n) { return a[p.gn(n)]; }, lt: function (n) { return t[n]; }, isClient: !0, an: function (n) { return !(!h[p.gn(n)] && !y.nn(n)); }, qn: function (n, t, e) { return console.error(n, t, e && e.tagName); }, queue: t.queue = g(0, r), ft: function (n, t) { var e = !p.Y, r = { mode: t.mode, scoped: e }; n.s(r).then(function (e) { try {
        n.Un = e, function r(n, t, e, i, o) { if (i) {
            var u = t.t + (o || c);
            t[u] || (t[u] = i);
        } }(0, n, n.G, e.style, e.styleMode);
    }
    catch (t) {
        console.error(t), n.Un = function i() { };
    } j(y, t, f); }); }, In: !1, Rn: !1, vn: !1, Bn: s, Fn: new WeakMap, K: new WeakMap, Zn: new WeakMap, ct: new WeakMap, st: new WeakMap, sn: new WeakMap, Qn: new WeakMap, Hn: new WeakMap, Dn: new WeakMap, Ln: new WeakMap, Nn: new WeakMap, at: new WeakMap, vt: new WeakMap, Gn: new WeakMap, Yn: new WeakMap, Tn: new Set, zn: [] }; return t.isServer = t.isPrerender = !(t.isClient = !0), t.window = r, t.location = r.location, t.document = i, t.resourcesUrl = t.publicPath = o, l.h = e, l.Context = t, l.onReady = function () { return new Promise(function (n) { return y.queue.write(function () { return y.Tn.size ? y.zn.push(n) : n(); }); }); }, y.render = b(y, p), d["s-ld"] = [], d["s-rn"] = !0, d["s-init"] = function () { y.sn.set(d, l.loaded = y.Rn = !0), p.et(r, "appload", { detail: { namespace: n } }); }, function (n, t, e, r, i, o) { if (t.componentOnReady = function (t, e) { if (!t.nodeName.includes("-"))
    return e(null), !1; var r = n.nn(t); if (r)
    if (n.sn.has(t))
        e(t);
    else {
        var i = n.at.get(t) || [];
        i.push(e), n.at.set(t, i);
    } return !!r; }, i) {
    for (o = i.length - 1; o >= 0; o--)
        t.componentOnReady(i[o][0], i[o][1]) && i.splice(o, 1);
    for (o = 0; o < r.length; o++)
        if (!e[r[o]].componentOnReady)
            return;
    for (o = 0; o < i.length; o++)
        i[o][1](null);
    i.length = 0;
} }(y, l, r, r["s-apps"], r["s-cr"]), l.initialized = !0, y; }, P = {}, O = !1;
