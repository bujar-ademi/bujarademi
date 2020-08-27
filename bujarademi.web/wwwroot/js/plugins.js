/*============= Popper Javascript =============*/

/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function (e, t) { 'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t() })(this, function () { 'use strict'; function e(e) { return e && '[object Function]' === {}.toString.call(e) } function t(e, t) { if (1 !== e.nodeType) return []; var o = getComputedStyle(e, null); return t ? o[t] : o } function o(e) { return 'HTML' === e.nodeName ? e : e.parentNode || e.host } function n(e) { if (!e) return document.body; switch (e.nodeName) { case 'HTML': case 'BODY': return e.ownerDocument.body; case '#document': return e.body; }var i = t(e), r = i.overflow, p = i.overflowX, s = i.overflowY; return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e)) } function r(e) { return 11 === e ? re : 10 === e ? pe : re || pe } function p(e) { if (!e) return document.documentElement; for (var o = r(10) ? document.body : null, n = e.offsetParent; n === o && e.nextElementSibling;)n = (e = e.nextElementSibling).offsetParent; var i = n && n.nodeName; return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement } function s(e) { var t = e.nodeName; return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e) } function d(e) { return null === e.parentNode ? e : d(e.parentNode) } function a(e, t) { if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement; var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, n = o ? e : t, i = o ? t : e, r = document.createRange(); r.setStart(n, 0), r.setEnd(i, 0); var l = r.commonAncestorContainer; if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l); var f = d(e); return f.host ? a(f.host, t) : a(e, d(t).host) } function l(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top', o = 'top' === t ? 'scrollTop' : 'scrollLeft', n = e.nodeName; if ('BODY' === n || 'HTML' === n) { var i = e.ownerDocument.documentElement, r = e.ownerDocument.scrollingElement || i; return r[o] } return e[o] } function f(e, t) { var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n = l(t, 'top'), i = l(t, 'left'), r = o ? -1 : 1; return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e } function m(e, t) { var o = 'x' === t ? 'Left' : 'Top', n = 'Left' == o ? 'Right' : 'Bottom'; return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10) } function h(e, t, o, n) { return $(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? o['offset' + e] + n['margin' + ('Height' === e ? 'Top' : 'Left')] + n['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0) } function c() { var e = document.body, t = document.documentElement, o = r(10) && getComputedStyle(t); return { height: h('Height', e, t, o), width: h('Width', e, t, o) } } function g(e) { return le({}, e, { right: e.left + e.width, bottom: e.top + e.height }) } function u(e) { var o = {}; try { if (r(10)) { o = e.getBoundingClientRect(); var n = l(e, 'top'), i = l(e, 'left'); o.top += n, o.left += i, o.bottom += n, o.right += i } else o = e.getBoundingClientRect() } catch (t) { } var p = { left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top }, s = 'HTML' === e.nodeName ? c() : {}, d = s.width || e.clientWidth || p.right - p.left, a = s.height || e.clientHeight || p.bottom - p.top, f = e.offsetWidth - d, h = e.offsetHeight - a; if (f || h) { var u = t(e); f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h } return g(p) } function b(e, o) { var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], p = r(10), s = 'HTML' === o.nodeName, d = u(e), a = u(o), l = n(e), m = t(o), h = parseFloat(m.borderTopWidth, 10), c = parseFloat(m.borderLeftWidth, 10); i && 'HTML' === o.nodeName && (a.top = $(a.top, 0), a.left = $(a.left, 0)); var b = g({ top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height }); if (b.marginTop = 0, b.marginLeft = 0, !p && s) { var y = parseFloat(m.marginTop, 10), w = parseFloat(m.marginLeft, 10); b.top -= h - y, b.bottom -= h - y, b.left -= c - w, b.right -= c - w, b.marginTop = y, b.marginLeft = w } return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b } function y(e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = e.ownerDocument.documentElement, n = b(e, o), i = $(o.clientWidth, window.innerWidth || 0), r = $(o.clientHeight, window.innerHeight || 0), p = t ? 0 : l(o), s = t ? 0 : l(o, 'left'), d = { top: p - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r }; return g(d) } function w(e) { var n = e.nodeName; return 'BODY' === n || 'HTML' === n ? !1 : 'fixed' === t(e, 'position') || w(o(e)) } function E(e) { if (!e || !e.parentElement || r()) return document.documentElement; for (var o = e.parentElement; o && 'none' === t(o, 'transform');)o = o.parentElement; return o || document.documentElement } function v(e, t, i, r) { var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], s = { top: 0, left: 0 }, d = p ? E(e) : a(e, t); if ('viewport' === r) s = y(d, p); else { var l; 'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r; var f = b(l, d, p); if ('HTML' === l.nodeName && !w(d)) { var m = c(), h = m.height, g = m.width; s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left } else s = f } return s.left += i, s.top += i, s.right -= i, s.bottom -= i, s } function x(e) { var t = e.width, o = e.height; return t * o } function O(e, t, o, n, i) { var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0; if (-1 === e.indexOf('auto')) return e; var p = v(o, n, r, i), s = { top: { width: p.width, height: t.top - p.top }, right: { width: p.right - t.right, height: p.height }, bottom: { width: p.width, height: p.bottom - t.bottom }, left: { width: t.left - p.left, height: p.height } }, d = Object.keys(s).map(function (e) { return le({ key: e }, s[e], { area: x(s[e]) }) }).sort(function (e, t) { return t.area - e.area }), a = d.filter(function (e) { var t = e.width, n = e.height; return t >= o.clientWidth && n >= o.clientHeight }), l = 0 < a.length ? a[0].key : d[0].key, f = e.split('-')[1]; return l + (f ? '-' + f : '') } function L(e, t, o) { var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null, i = n ? E(t) : a(t, o); return b(o, i, n) } function S(e) { var t = getComputedStyle(e), o = parseFloat(t.marginTop) + parseFloat(t.marginBottom), n = parseFloat(t.marginLeft) + parseFloat(t.marginRight), i = { width: e.offsetWidth + n, height: e.offsetHeight + o }; return i } function T(e) { var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }; return e.replace(/left|right|bottom|top/g, function (e) { return t[e] }) } function C(e, t, o) { o = o.split('-')[0]; var n = S(e), i = { width: n.width, height: n.height }, r = -1 !== ['right', 'left'].indexOf(o), p = r ? 'top' : 'left', s = r ? 'left' : 'top', d = r ? 'height' : 'width', a = r ? 'width' : 'height'; return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i } function D(e, t) { return Array.prototype.find ? e.find(t) : e.filter(t)[0] } function N(e, t, o) { if (Array.prototype.findIndex) return e.findIndex(function (e) { return e[t] === o }); var n = D(e, function (e) { return e[t] === o }); return e.indexOf(n) } function P(t, o, n) { var i = void 0 === n ? t : t.slice(0, N(t, 'name', n)); return i.forEach(function (t) { t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!'); var n = t['function'] || t.fn; t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t)) }), o } function k() { if (!this.state.isDestroyed) { var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} }; e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e)) } } function W(e, t) { return e.some(function (e) { var o = e.name, n = e.enabled; return n && o === t }) } function B(e) { for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) { var i = t[n], r = i ? '' + i + o : e; if ('undefined' != typeof document.body.style[r]) return r } return null } function H() { return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this } function A(e) { var t = e.ownerDocument; return t ? t.defaultView : window } function M(e, t, o, i) { var r = 'BODY' === e.nodeName, p = r ? e.ownerDocument.defaultView : e; p.addEventListener(t, o, { passive: !0 }), r || M(n(p.parentNode), t, o, i), i.push(p) } function I(e, t, o, i) { o.updateBound = i, A(e).addEventListener('resize', o.updateBound, { passive: !0 }); var r = n(e); return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o } function F() { this.state.eventsEnabled || (this.state = I(this.reference, this.options, this.state, this.scheduleUpdate)) } function R(e, t) { return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) { e.removeEventListener('scroll', t.updateBound) }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t } function U() { this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state)) } function Y(e) { return '' !== e && !isNaN(parseFloat(e)) && isFinite(e) } function j(e, t) { Object.keys(t).forEach(function (o) { var n = ''; -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n }) } function K(e, t) { Object.keys(t).forEach(function (o) { var n = t[o]; !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]) }) } function q(e, t, o) { var n = D(e, function (e) { var o = e.name; return o === t }), i = !!n && e.some(function (e) { return e.name === o && e.enabled && e.order < n.order }); if (!i) { var r = '`' + t + '`'; console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!') } return i } function G(e) { return 'end' === e ? 'start' : 'start' === e ? 'end' : e } function z(e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = me.indexOf(e), n = me.slice(o + 1).concat(me.slice(0, o)); return t ? n.reverse() : n } function V(e, t, o, n) { var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +i[1], p = i[2]; if (!r) return e; if (0 === p.indexOf('%')) { var s; switch (p) { case '%p': s = o; break; case '%': case '%r': default: s = n; }var d = g(s); return d[t] / 100 * r } if ('vh' === p || 'vw' === p) { var a; return a = 'vh' === p ? $(document.documentElement.clientHeight, window.innerHeight || 0) : $(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r } return r } function _(e, t, o, n) { var i = [0, 0], r = -1 !== ['right', 'left'].indexOf(n), p = e.split(/(\+|\-)/).map(function (e) { return e.trim() }), s = p.indexOf(D(p, function (e) { return -1 !== e.search(/,|\s/) })); p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.'); var d = /\s*,\s*|\s+/, a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))]; return a = a.map(function (e, n) { var i = (1 === n ? !r : r) ? 'height' : 'width', p = !1; return e.reduce(function (e, t) { return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t) }, []).map(function (e) { return V(e, i, t, o) }) }), a.forEach(function (e, t) { e.forEach(function (o, n) { Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1)) }) }), i } function X(e, t) { var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = i.split('-')[0]; return o = Y(+n) ? [+n, 0] : _(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e } for (var J = Math.min, Q = Math.round, Z = Math.floor, $ = Math.max, ee = 'undefined' != typeof window && 'undefined' != typeof document, te = ['Edge', 'Trident', 'Firefox'], oe = 0, ne = 0; ne < te.length; ne += 1)if (ee && 0 <= navigator.userAgent.indexOf(te[ne])) { oe = 1; break } var i = ee && window.Promise, ie = i ? function (e) { var t = !1; return function () { t || (t = !0, window.Promise.resolve().then(function () { t = !1, e() })) } } : function (e) { var t = !1; return function () { t || (t = !0, setTimeout(function () { t = !1, e() }, oe)) } }, re = ee && !!(window.MSInputMethodContext && document.documentMode), pe = ee && /MSIE 10/.test(navigator.userAgent), se = function (e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function') }, de = function () { function e(e, t) { for (var o, n = 0; n < t.length; n++)o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } return function (t, o, n) { return o && e(t.prototype, o), n && e(t, n), t } }(), ae = function (e, t, o) { return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e }, le = Object.assign || function (e) { for (var t, o = 1; o < arguments.length; o++)for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e }, fe = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'], me = fe.slice(3), he = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' }, ce = function () { function t(o, n) { var i = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}; se(this, t), this.scheduleUpdate = function () { return requestAnimationFrame(i.update) }, this.update = ie(this.update.bind(this)), this.options = le({}, t.Defaults, r), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) { i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) { return le({ name: e }, i.options.modifiers[e]) }).sort(function (e, t) { return e.order - t.order }), this.modifiers.forEach(function (t) { t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state) }), this.update(); var p = this.options.eventsEnabled; p && this.enableEventListeners(), this.state.eventsEnabled = p } return de(t, [{ key: 'update', value: function () { return k.call(this) } }, { key: 'destroy', value: function () { return H.call(this) } }, { key: 'enableEventListeners', value: function () { return F.call(this) } }, { key: 'disableEventListeners', value: function () { return U.call(this) } }]), t }(); return ce.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ce.placements = fe, ce.Defaults = { placement: 'bottom', positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () { }, onUpdate: function () { }, modifiers: { shift: { order: 100, enabled: !0, fn: function (e) { var t = e.placement, o = t.split('-')[0], n = t.split('-')[1]; if (n) { var i = e.offsets, r = i.reference, p = i.popper, s = -1 !== ['bottom', 'top'].indexOf(o), d = s ? 'left' : 'top', a = s ? 'width' : 'height', l = { start: ae({}, d, r[d]), end: ae({}, d, r[d] + r[a] - p[a]) }; e.offsets.popper = le({}, p, l[n]) } return e } }, offset: { order: 200, enabled: !0, fn: X, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function (e, t) { var o = t.boundariesElement || p(e.instance.popper); e.instance.reference === o && (o = p(o)); var n = B('transform'), i = e.instance.popper.style, r = i.top, s = i.left, d = i[n]; i.top = '', i.left = '', i[n] = ''; var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed); i.top = r, i.left = s, i[n] = d, t.boundaries = a; var l = t.priority, f = e.offsets.popper, m = { primary: function (e) { var o = f[e]; return f[e] < a[e] && !t.escapeWithReference && (o = $(f[e], a[e])), ae({}, e, o) }, secondary: function (e) { var o = 'right' === e ? 'left' : 'top', n = f[o]; return f[e] > a[e] && !t.escapeWithReference && (n = J(f[o], a[e] - ('right' === e ? f.width : f.height))), ae({}, o, n) } }; return l.forEach(function (e) { var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary'; f = le({}, f, m[t](e)) }), e.offsets.popper = f, e }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent' }, keepTogether: { order: 400, enabled: !0, fn: function (e) { var t = e.offsets, o = t.popper, n = t.reference, i = e.placement.split('-')[0], r = Z, p = -1 !== ['top', 'bottom'].indexOf(i), s = p ? 'right' : 'bottom', d = p ? 'left' : 'top', a = p ? 'width' : 'height'; return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e } }, arrow: { order: 500, enabled: !0, fn: function (e, o) { var n; if (!q(e.instance.modifiers, 'arrow', 'keepTogether')) return e; var i = o.element; if ('string' == typeof i) { if (i = e.instance.popper.querySelector(i), !i) return e; } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e; var r = e.placement.split('-')[0], p = e.offsets, s = p.popper, d = p.reference, a = -1 !== ['left', 'right'].indexOf(r), l = a ? 'height' : 'width', f = a ? 'Top' : 'Left', m = f.toLowerCase(), h = a ? 'left' : 'top', c = a ? 'bottom' : 'right', u = S(i)[l]; d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper); var b = d[m] + d[l] / 2 - u / 2, y = t(e.instance.popper), w = parseFloat(y['margin' + f], 10), E = parseFloat(y['border' + f + 'Width'], 10), v = b - e.offsets.popper[m] - w - E; return v = $(J(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, ae(n, m, Q(v)), ae(n, h, ''), n), e }, element: '[x-arrow]' }, flip: { order: 600, enabled: !0, fn: function (e, t) { if (W(e.instance.modifiers, 'inner')) return e; if (e.flipped && e.placement === e.originalPlacement) return e; var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed), n = e.placement.split('-')[0], i = T(n), r = e.placement.split('-')[1] || '', p = []; switch (t.behavior) { case he.FLIP: p = [n, i]; break; case he.CLOCKWISE: p = z(n); break; case he.COUNTERCLOCKWISE: p = z(n, !0); break; default: p = t.behavior; }return p.forEach(function (s, d) { if (n !== s || p.length === d + 1) return e; n = e.placement.split('-')[0], i = T(n); var a = e.offsets.popper, l = e.offsets.reference, f = Z, m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom), h = f(a.left) < f(o.left), c = f(a.right) > f(o.right), g = f(a.top) < f(o.top), u = f(a.bottom) > f(o.bottom), b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u, y = -1 !== ['top', 'bottom'].indexOf(n), w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u); (m || b || w) && (e.flipped = !0, (m || b) && (n = p[d + 1]), w && (r = G(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip')) }), e }, behavior: 'flip', padding: 5, boundariesElement: 'viewport' }, inner: { order: 700, enabled: !1, fn: function (e) { var t = e.placement, o = t.split('-')[0], n = e.offsets, i = n.popper, r = n.reference, p = -1 !== ['left', 'right'].indexOf(o), s = -1 === ['top', 'left'].indexOf(o); return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e } }, hide: { order: 800, enabled: !0, fn: function (e) { if (!q(e.instance.modifiers, 'hide', 'preventOverflow')) return e; var t = e.offsets.reference, o = D(e.instance.modifiers, function (e) { return 'preventOverflow' === e.name }).boundaries; if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) { if (!0 === e.hide) return e; e.hide = !0, e.attributes['x-out-of-boundaries'] = '' } else { if (!1 === e.hide) return e; e.hide = !1, e.attributes['x-out-of-boundaries'] = !1 } return e } }, computeStyle: { order: 850, enabled: !0, fn: function (e, t) { var o = t.x, n = t.y, i = e.offsets.popper, r = D(e.instance.modifiers, function (e) { return 'applyStyle' === e.name }).gpuAcceleration; void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'); var s, d, a = void 0 === r ? t.gpuAcceleration : r, l = p(e.instance.popper), f = u(l), m = { position: i.position }, h = { left: Z(i.left), top: Q(i.top), bottom: Q(i.bottom), right: Z(i.right) }, c = 'bottom' === o ? 'top' : 'bottom', g = 'right' === n ? 'left' : 'right', b = B('transform'); if (d = 'bottom' == c ? -f.height + h.bottom : h.top, s = 'right' == g ? -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform'; else { var y = 'bottom' == c ? -1 : 1, w = 'right' == g ? -1 : 1; m[c] = d * y, m[g] = s * w, m.willChange = c + ', ' + g } var E = { "x-placement": e.placement }; return e.attributes = le({}, E, e.attributes), e.styles = le({}, m, e.styles), e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles), e }, gpuAcceleration: !0, x: 'bottom', y: 'right' }, applyStyle: { order: 900, enabled: !0, fn: function (e) { return j(e.instance.popper, e.styles), K(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e }, onLoad: function (e, t, o, n, i) { var r = L(i, t, e, o.positionFixed), p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding); return t.setAttribute('x-placement', p), j(t, { position: o.positionFixed ? 'fixed' : 'absolute' }), o }, gpuAcceleration: void 0 } } }, ce });
//# sourceMappingURL=popper.min.js.map

/*========== Bootstrap Javascript ==========*/
/* Bootstrap v4.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper) }(this, function (t, e, h) { "use strict"; function i(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } function s(t, e, n) { return e && i(t.prototype, e), n && i(t, n), t } function l(r) { for (var t = 1; t < arguments.length; t++) { var o = null != arguments[t] ? arguments[t] : {}, e = Object.keys(o); "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter(function (t) { return Object.getOwnPropertyDescriptor(o, t).enumerable }))), e.forEach(function (t) { var e, n, i; e = r, i = o[n = t], n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i }) } return r } e = e && e.hasOwnProperty("default") ? e.default : e, h = h && h.hasOwnProperty("default") ? h.default : h; var r, n, o, a, c, u, f, d, g, _, m, p, v, y, E, C, T, b, S, I, A, D, w, N, O, k, P, j, H, L, R, x, W, U, q, F, K, M, Q, B, V, Y, z, J, Z, G, $, X, tt, et, nt, it, rt, ot, st, at, lt, ct, ht, ut, ft, dt, gt, _t, mt, pt, vt, yt, Et, Ct, Tt, bt, St, It, At, Dt, wt, Nt, Ot, kt, Pt, jt, Ht, Lt, Rt, xt, Wt, Ut, qt, Ft, Kt, Mt, Qt, Bt, Vt, Yt, zt, Jt, Zt, Gt, $t, Xt, te, ee, ne, ie, re, oe, se, ae, le, ce, he, ue, fe, de, ge, _e, me, pe, ve, ye, Ee, Ce, Te, be, Se, Ie, Ae, De, we, Ne, Oe, ke, Pe, je, He, Le, Re, xe, We, Ue, qe, Fe, Ke, Me, Qe, Be, Ve, Ye, ze, Je, Ze, Ge, $e, Xe, tn, en, nn, rn, on, sn, an, ln, cn, hn, un, fn, dn, gn, _n, mn, pn, vn, yn, En, Cn, Tn, bn, Sn, In, An, Dn, wn, Nn, On, kn, Pn, jn, Hn, Ln, Rn, xn, Wn, Un, qn, Fn = function (i) { var e = "transitionend"; function t(t) { var e = this, n = !1; return i(this).one(l.TRANSITION_END, function () { n = !0 }), setTimeout(function () { n || l.triggerTransitionEnd(e) }, t), this } var l = { TRANSITION_END: "bsTransitionEnd", getUID: function (t) { for (; t += ~~(1e6 * Math.random()), document.getElementById(t);); return t }, getSelectorFromElement: function (t) { var e = t.getAttribute("data-target"); e && "#" !== e || (e = t.getAttribute("href") || ""); try { return document.querySelector(e) ? e : null } catch (t) { return null } }, getTransitionDurationFromElement: function (t) { if (!t) return 0; var e = i(t).css("transition-duration"); return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0 }, reflow: function (t) { return t.offsetHeight }, triggerTransitionEnd: function (t) { i(t).trigger(e) }, supportsTransitionEnd: function () { return Boolean(e) }, isElement: function (t) { return (t[0] || t).nodeType }, typeCheckConfig: function (t, e, n) { for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) { var r = n[i], o = e[i], s = o && l.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase()); if (!new RegExp(r).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".') } var a } }; return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = { bindType: e, delegateType: e, handle: function (t) { if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments) } }, l }(e), Kn = (n = "alert", a = "." + (o = "bs.alert"), c = (r = e).fn[n], u = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" }, f = "alert", d = "fade", g = "show", _ = function () { function i(t) { this._element = t } var t = i.prototype; return t.close = function (t) { var e = this._element; t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e) }, t.dispose = function () { r.removeData(this._element, o), this._element = null }, t._getRootElement = function (t) { var e = Fn.getSelectorFromElement(t), n = !1; return e && (n = document.querySelector(e)), n || (n = r(t).closest("." + f)[0]), n }, t._triggerCloseEvent = function (t) { var e = r.Event(u.CLOSE); return r(t).trigger(e), e }, t._removeElement = function (e) { var n = this; if (r(e).removeClass(g), r(e).hasClass(d)) { var t = Fn.getTransitionDurationFromElement(e); r(e).one(Fn.TRANSITION_END, function (t) { return n._destroyElement(e, t) }).emulateTransitionEnd(t) } else this._destroyElement(e) }, t._destroyElement = function (t) { r(t).detach().trigger(u.CLOSED).remove() }, i._jQueryInterface = function (n) { return this.each(function () { var t = r(this), e = t.data(o); e || (e = new i(this), t.data(o, e)), "close" === n && e[n](this) }) }, i._handleDismiss = function (e) { return function (t) { t && t.preventDefault(), e.close(this) } }, s(i, null, [{ key: "VERSION", get: function () { return "4.1.3" } }]), i }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', _._handleDismiss(new _)), r.fn[n] = _._jQueryInterface, r.fn[n].Constructor = _, r.fn[n].noConflict = function () { return r.fn[n] = c, _._jQueryInterface }, _), Mn = (p = "button", y = "." + (v = "bs.button"), E = ".data-api", C = (m = e).fn[p], T = "active", b = "btn", I = '[data-toggle^="button"]', A = '[data-toggle="buttons"]', D = "input", w = ".active", N = ".btn", O = { CLICK_DATA_API: "click" + y + E, FOCUS_BLUR_DATA_API: (S = "focus") + y + E + " blur" + y + E }, k = function () { function n(t) { this._element = t } var t = n.prototype; return t.toggle = function () { var t = !0, e = !0, n = m(this._element).closest(A)[0]; if (n) { var i = this._element.querySelector(D); if (i) { if ("radio" === i.type) if (i.checked && this._element.classList.contains(T)) t = !1; else { var r = n.querySelector(w); r && m(r).removeClass(T) } if (t) { if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return; i.checked = !this._element.classList.contains(T), m(i).trigger("change") } i.focus(), e = !1 } } e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(T)), t && m(this._element).toggleClass(T) }, t.dispose = function () { m.removeData(this._element, v), this._element = null }, n._jQueryInterface = function (e) { return this.each(function () { var t = m(this).data(v); t || (t = new n(this), m(this).data(v, t)), "toggle" === e && t[e]() }) }, s(n, null, [{ key: "VERSION", get: function () { return "4.1.3" } }]), n }(), m(document).on(O.CLICK_DATA_API, I, function (t) { t.preventDefault(); var e = t.target; m(e).hasClass(b) || (e = m(e).closest(N)), k._jQueryInterface.call(m(e), "toggle") }).on(O.FOCUS_BLUR_DATA_API, I, function (t) { var e = m(t.target).closest(N)[0]; m(e).toggleClass(S, /^focus(in)?$/.test(t.type)) }), m.fn[p] = k._jQueryInterface, m.fn[p].Constructor = k, m.fn[p].noConflict = function () { return m.fn[p] = C, k._jQueryInterface }, k), Qn = (j = "carousel", L = "." + (H = "bs.carousel"), R = ".data-api", x = (P = e).fn[j], W = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 }, U = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" }, q = "next", F = "prev", K = "left", M = "right", Q = { SLIDE: "slide" + L, SLID: "slid" + L, KEYDOWN: "keydown" + L, MOUSEENTER: "mouseenter" + L, MOUSELEAVE: "mouseleave" + L, TOUCHEND: "touchend" + L, LOAD_DATA_API: "load" + L + R, CLICK_DATA_API: "click" + L + R }, B = "carousel", V = "active", Y = "slide", z = "carousel-item-right", J = "carousel-item-left", Z = "carousel-item-next", G = "carousel-item-prev", $ = ".active", X = ".active.carousel-item", tt = ".carousel-item", et = ".carousel-item-next, .carousel-item-prev", nt = ".carousel-indicators", it = "[data-slide], [data-slide-to]", rt = '[data-ride="carousel"]', ot = function () { function o(t, e) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = P(t)[0], this._indicatorsElement = this._element.querySelector(nt), this._addEventListeners() } var t = o.prototype; return t.next = function () { this._isSliding || this._slide(q) }, t.nextWhenVisible = function () { !document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next() }, t.prev = function () { this._isSliding || this._slide(F) }, t.pause = function (t) { t || (this._isPaused = !0), this._element.querySelector(et) && (Fn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, t.cycle = function (t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, t.to = function (t) { var e = this; this._activeElement = this._element.querySelector(X); var n = this._getItemIndex(this._activeElement); if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) P(this._element).one(Q.SLID, function () { return e.to(t) }); else { if (n === t) return this.pause(), void this.cycle(); var i = n < t ? q : F; this._slide(i, this._items[t]) } }, t.dispose = function () { P(this._element).off(L), P.removeData(this._element, H), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, t._getConfig = function (t) { return t = l({}, W, t), Fn.typeCheckConfig(j, t, U), t }, t._addEventListeners = function () { var e = this; this._config.keyboard && P(this._element).on(Q.KEYDOWN, function (t) { return e._keydown(t) }), "hover" === this._config.pause && (P(this._element).on(Q.MOUSEENTER, function (t) { return e.pause(t) }).on(Q.MOUSELEAVE, function (t) { return e.cycle(t) }), "ontouchstart" in document.documentElement && P(this._element).on(Q.TOUCHEND, function () { e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) { return e.cycle(t) }, 500 + e._config.interval) })) }, t._keydown = function (t) { if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) { case 37: t.preventDefault(), this.prev(); break; case 39: t.preventDefault(), this.next() } }, t._getItemIndex = function (t) { return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(tt)) : [], this._items.indexOf(t) }, t._getItemByDirection = function (t, e) { var n = t === q, i = t === F, r = this._getItemIndex(e), o = this._items.length - 1; if ((i && 0 === r || n && r === o) && !this._config.wrap) return e; var s = (r + (t === F ? -1 : 1)) % this._items.length; return -1 === s ? this._items[this._items.length - 1] : this._items[s] }, t._triggerSlideEvent = function (t, e) { var n = this._getItemIndex(t), i = this._getItemIndex(this._element.querySelector(X)), r = P.Event(Q.SLIDE, { relatedTarget: t, direction: e, from: i, to: n }); return P(this._element).trigger(r), r }, t._setActiveIndicatorElement = function (t) { if (this._indicatorsElement) { var e = [].slice.call(this._indicatorsElement.querySelectorAll($)); P(e).removeClass(V); var n = this._indicatorsElement.children[this._getItemIndex(t)]; n && P(n).addClass(V) } }, t._slide = function (t, e) { var n, i, r, o = this, s = this._element.querySelector(X), a = this._getItemIndex(s), l = e || s && this._getItemByDirection(t, s), c = this._getItemIndex(l), h = Boolean(this._interval); if (t === q ? (n = J, i = Z, r = K) : (n = z, i = G, r = M), l && P(l).hasClass(V)) this._isSliding = !1; else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) { this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l); var u = P.Event(Q.SLID, { relatedTarget: l, direction: r, from: a, to: c }); if (P(this._element).hasClass(Y)) { P(l).addClass(i), Fn.reflow(l), P(s).addClass(n), P(l).addClass(n); var f = Fn.getTransitionDurationFromElement(s); P(s).one(Fn.TRANSITION_END, function () { P(l).removeClass(n + " " + i).addClass(V), P(s).removeClass(V + " " + i + " " + n), o._isSliding = !1, setTimeout(function () { return P(o._element).trigger(u) }, 0) }).emulateTransitionEnd(f) } else P(s).removeClass(V), P(l).addClass(V), this._isSliding = !1, P(this._element).trigger(u); h && this.cycle() } }, o._jQueryInterface = function (i) { return this.each(function () { var t = P(this).data(H), e = l({}, W, P(this).data()); "object" == typeof i && (e = l({}, e, i)); var n = "string" == typeof i ? i : e.slide; if (t || (t = new o(this, e), P(this).data(H, t)), "number" == typeof i) t.to(i); else if ("string" == typeof n) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n]() } else e.interval && (t.pause(), t.cycle()) }) }, o._dataApiClickHandler = function (t) { var e = Fn.getSelectorFromElement(this); if (e) { var n = P(e)[0]; if (n && P(n).hasClass(B)) { var i = l({}, P(n).data(), P(this).data()), r = this.getAttribute("data-slide-to"); r && (i.interval = !1), o._jQueryInterface.call(P(n), i), r && P(n).data(H).to(r), t.preventDefault() } } }, s(o, null, [{ key: "VERSION", get: function () { return "4.1.3" } }, { key: "Default", get: function () { return W } }]), o }(), P(document).on(Q.CLICK_DATA_API, it, ot._dataApiClickHandler), P(window).on(Q.LOAD_DATA_API, function () { for (var t = [].slice.call(document.querySelectorAll(rt)), e = 0, n = t.length; e < n; e++) { var i = P(t[e]); ot._jQueryInterface.call(i, i.data()) } }), P.fn[j] = ot._jQueryInterface, P.fn[j].Constructor = ot, P.fn[j].noConflict = function () { return P.fn[j] = x, ot._jQueryInterface }, ot), Bn = (at = "collapse", ct = "." + (lt = "bs.collapse"), ht = (st = e).fn[at], ut = { toggle: !0, parent: "" }, ft = { toggle: "boolean", parent: "(string|element)" }, dt = { SHOW: "show" + ct, SHOWN: "shown" + ct, HIDE: "hide" + ct, HIDDEN: "hidden" + ct, CLICK_DATA_API: "click" + ct + ".data-api" }, gt = "show", _t = "collapse", mt = "collapsing", pt = "collapsed", vt = "width", yt = "height", Et = ".show, .collapsing", Ct = '[data-toggle="collapse"]', Tt = function () { function a(e, t) { this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = st.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')); for (var n = [].slice.call(document.querySelectorAll(Ct)), i = 0, r = n.length; i < r; i++) { var o = n[i], s = Fn.getSelectorFromElement(o), a = [].slice.call(document.querySelectorAll(s)).filter(function (t) { return t === e }); null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(o)) } this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() } var t = a.prototype; return t.toggle = function () { st(this._element).hasClass(gt) ? this.hide() : this.show() }, t.show = function () { var t, e, n = this; if (!this._isTransitioning && !st(this._element).hasClass(gt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Et)).filter(function (t) { return t.getAttribute("data-parent") === n._config.parent })).length && (t = null), !(t && (e = st(t).not(this._selector).data(lt)) && e._isTransitioning))) { var i = st.Event(dt.SHOW); if (st(this._element).trigger(i), !i.isDefaultPrevented()) { t && (a._jQueryInterface.call(st(t).not(this._selector), "hide"), e || st(t).data(lt, null)); var r = this._getDimension(); st(this._element).removeClass(_t).addClass(mt), this._element.style[r] = 0, this._triggerArray.length && st(this._triggerArray).removeClass(pt).attr("aria-expanded", !0), this.setTransitioning(!0); var o = "scroll" + (r[0].toUpperCase() + r.slice(1)), s = Fn.getTransitionDurationFromElement(this._element); st(this._element).one(Fn.TRANSITION_END, function () { st(n._element).removeClass(mt).addClass(_t).addClass(gt), n._element.style[r] = "", n.setTransitioning(!1), st(n._element).trigger(dt.SHOWN) }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px" } } }, t.hide = function () { var t = this; if (!this._isTransitioning && st(this._element).hasClass(gt)) { var e = st.Event(dt.HIDE); if (st(this._element).trigger(e), !e.isDefaultPrevented()) { var n = this._getDimension(); this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Fn.reflow(this._element), st(this._element).addClass(mt).removeClass(_t).removeClass(gt); var i = this._triggerArray.length; if (0 < i) for (var r = 0; r < i; r++) { var o = this._triggerArray[r], s = Fn.getSelectorFromElement(o); if (null !== s) st([].slice.call(document.querySelectorAll(s))).hasClass(gt) || st(o).addClass(pt).attr("aria-expanded", !1) } this.setTransitioning(!0); this._element.style[n] = ""; var a = Fn.getTransitionDurationFromElement(this._element); st(this._element).one(Fn.TRANSITION_END, function () { t.setTransitioning(!1), st(t._element).removeClass(mt).addClass(_t).trigger(dt.HIDDEN) }).emulateTransitionEnd(a) } } }, t.setTransitioning = function (t) { this._isTransitioning = t }, t.dispose = function () { st.removeData(this._element, lt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, t._getConfig = function (t) { return (t = l({}, ut, t)).toggle = Boolean(t.toggle), Fn.typeCheckConfig(at, t, ft), t }, t._getDimension = function () { return st(this._element).hasClass(vt) ? vt : yt }, t._getParent = function () { var n = this, t = null; Fn.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent); var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', i = [].slice.call(t.querySelectorAll(e)); return st(i).each(function (t, e) { n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]) }), t }, t._addAriaAndCollapsedClass = function (t, e) { if (t) { var n = st(t).hasClass(gt); e.length && st(e).toggleClass(pt, !n).attr("aria-expanded", n) } }, a._getTargetFromElement = function (t) { var e = Fn.getSelectorFromElement(t); return e ? document.querySelector(e) : null }, a._jQueryInterface = function (i) { return this.each(function () { var t = st(this), e = t.data(lt), n = l({}, ut, t.data(), "object" == typeof i && i ? i : {}); if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(lt, e)), "string" == typeof i) { if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"'); e[i]() } }) }, s(a, null, [{ key: "VERSION", get: function () { return "4.1.3" } }, { key: "Default", get: function () { return ut } }]), a }(), st(document).on(dt.CLICK_DATA_API, Ct, function (t) { "A" === t.currentTarget.tagName && t.preventDefault(); var n = st(this), e = Fn.getSelectorFromElement(this), i = [].slice.call(document.querySelectorAll(e)); st(i).each(function () { var t = st(this), e = t.data(lt) ? "toggle" : n.data(); Tt._jQueryInterface.call(t, e) }) }), st.fn[at] = Tt._jQueryInterface, st.fn[at].Constructor = Tt, st.fn[at].noConflict = function () { return st.fn[at] = ht, Tt._jQueryInterface }, Tt), Vn = (St = "dropdown", At = "." + (It = "bs.dropdown"), Dt = ".data-api", wt = (bt = e).fn[St], Nt = new RegExp("38|40|27"), Ot = { HIDE: "hide" + At, HIDDEN: "hidden" + At, SHOW: "show" + At, SHOWN: "shown" + At, CLICK: "click" + At, CLICK_DATA_API: "click" + At + Dt, KEYDOWN_DATA_API: "keydown" + At + Dt, KEYUP_DATA_API: "keyup" + At + Dt }, kt = "disabled", Pt = "show", jt = "dropup", Ht = "dropright", Lt = "dropleft", Rt = "dropdown-menu-right", xt = "position-static", Wt = '[data-toggle="dropdown"]', Ut = ".dropdown form", qt = ".dropdown-menu", Ft = ".navbar-nav", Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Mt = "top-start", Qt = "top-end", Bt = "bottom-start", Vt = "bottom-end", Yt = "right-start", zt = "left-start", Jt = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" }, Zt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" }, Gt = function () { function c(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() } var t = c.prototype; return t.toggle = function () { if (!this._element.disabled && !bt(this._element).hasClass(kt)) { var t = c._getParentFromElement(this._element), e = bt(this._menu).hasClass(Pt); if (c._clearMenus(), !e) { var n = { relatedTarget: this._element }, i = bt.Event(Ot.SHOW, n); if (bt(t).trigger(i), !i.isDefaultPrevented()) { if (!this._inNavbar) { if ("undefined" == typeof h) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)"); var r = this._element; "parent" === this._config.reference ? r = t : Fn.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && bt(t).addClass(xt), this._popper = new h(r, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === bt(t).closest(Ft).length && bt(document.body).children().on("mouseover", null, bt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), bt(this._menu).toggleClass(Pt), bt(t).toggleClass(Pt).trigger(bt.Event(Ot.SHOWN, n)) } } } }, t.dispose = function () { bt.removeData(this._element, It), bt(this._element).off(At), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null) }, t.update = function () { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, t._addEventListeners = function () { var e = this; bt(this._element).on(Ot.CLICK, function (t) { t.preventDefault(), t.stopPropagation(), e.toggle() }) }, t._getConfig = function (t) { return t = l({}, this.constructor.Default, bt(this._element).data(), t), Fn.typeCheckConfig(St, t, this.constructor.DefaultType), t }, t._getMenuElement = function () { if (!this._menu) { var t = c._getParentFromElement(this._element); t && (this._menu = t.querySelector(qt)) } return this._menu }, t._getPlacement = function () { var t = bt(this._element.parentNode), e = Bt; return t.hasClass(jt) ? (e = Mt, bt(this._menu).hasClass(Rt) && (e = Qt)) : t.hasClass(Ht) ? e = Yt : t.hasClass(Lt) ? e = zt : bt(this._menu).hasClass(Rt) && (e = Vt), e }, t._detectNavbar = function () { return 0 < bt(this._element).closest(".navbar").length }, t._getPopperConfig = function () { var e = this, t = {}; "function" == typeof this._config.offset ? t.fn = function (t) { return t.offsets = l({}, t.offsets, e._config.offset(t.offsets) || {}), t } : t.offset = this._config.offset; var n = { placement: this._getPlacement(), modifiers: { offset: t, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n }, c._jQueryInterface = function (e) { return this.each(function () { var t = bt(this).data(It); if (t || (t = new c(this, "object" == typeof e ? e : null), bt(this).data(It, t)), "string" == typeof e) { if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"'); t[e]() } }) }, c._clearMenus = function (t) { if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = [].slice.call(document.querySelectorAll(Wt)), n = 0, i = e.length; n < i; n++) { var r = c._getParentFromElement(e[n]), o = bt(e[n]).data(It), s = { relatedTarget: e[n] }; if (t && "click" === t.type && (s.clickEvent = t), o) { var a = o._menu; if (bt(r).hasClass(Pt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && bt.contains(r, t.target))) { var l = bt.Event(Ot.HIDE, s); bt(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && bt(document.body).children().off("mouseover", null, bt.noop), e[n].setAttribute("aria-expanded", "false"), bt(a).removeClass(Pt), bt(r).removeClass(Pt).trigger(bt.Event(Ot.HIDDEN, s))) } } } }, c._getParentFromElement = function (t) { var e, n = Fn.getSelectorFromElement(t); return n && (e = document.querySelector(n)), e || t.parentNode }, c._dataApiKeydownHandler = function (t) { if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || bt(t.target).closest(qt).length)) : Nt.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !bt(this).hasClass(kt))) { var e = c._getParentFromElement(this), n = bt(e).hasClass(Pt); if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) { var i = [].slice.call(e.querySelectorAll(Kt)); if (0 !== i.length) { var r = i.indexOf(t.target); 38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus() } } else { if (27 === t.which) { var o = e.querySelector(Wt); bt(o).trigger("focus") } bt(this).trigger("click") } } }, s(c, null, [{ key: "VERSION", get: function () { return "4.1.3" } }, { key: "Default", get: function () { return Jt } }, { key: "DefaultType", get: function () { return Zt } }]), c }(), bt(document).on(Ot.KEYDOWN_DATA_API, Wt, Gt._dataApiKeydownHandler).on(Ot.KEYDOWN_DATA_API, qt, Gt._dataApiKeydownHandler).on(Ot.CLICK_DATA_API + " " + Ot.KEYUP_DATA_API, Gt._clearMenus).on(Ot.CLICK_DATA_API, Wt, function (t) { t.preventDefault(), t.stopPropagation(), Gt._jQueryInterface.call(bt(this), "toggle") }).on(Ot.CLICK_DATA_API, Ut, function (t) { t.stopPropagation() }), bt.fn[St] = Gt._jQueryInterface, bt.fn[St].Constructor = Gt, bt.fn[St].noConflict = function () { return bt.fn[St] = wt, Gt._jQueryInterface }, Gt), Yn = (Xt = "modal", ee = "." + (te = "bs.modal"), ne = ($t = e).fn[Xt], ie = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }, re = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, oe = { HIDE: "hide" + ee, HIDDEN: "hidden" + ee, SHOW: "show" + ee, SHOWN: "shown" + ee, FOCUSIN: "focusin" + ee, RESIZE: "resize" + ee, CLICK_DISMISS: "click.dismiss" + ee, KEYDOWN_DISMISS: "keydown.dismiss" + ee, MOUSEUP_DISMISS: "mouseup.dismiss" + ee, MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee, CLICK_DATA_API: "click" + ee + ".data-api" }, se = "modal-scrollbar-measure", ae = "modal-backdrop", le = "modal-open", ce = "fade", he = "show", ue = ".modal-dialog", fe = '[data-toggle="modal"]', de = '[data-dismiss="modal"]', ge = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", _e = ".sticky-top", me = function () { function r(t, e) { this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(ue), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0 } var t = r.prototype; return t.toggle = function (t) { return this._isShown ? this.hide() : this.show(t) }, t.show = function (t) { var e = this; if (!this._isTransitioning && !this._isShown) { $t(this._element).hasClass(ce) && (this._isTransitioning = !0); var n = $t.Event(oe.SHOW, { relatedTarget: t }); $t(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), $t(document.body).addClass(le), this._setEscapeEvent(), this._setResizeEvent(), $t(this._element).on(oe.CLICK_DISMISS, de, function (t) { return e.hide(t) }), $t(this._dialog).on(oe.MOUSEDOWN_DISMISS, function () { $t(e._element).one(oe.MOUSEUP_DISMISS, function (t) { $t(t.target).is(e._element) && (e._ignoreBackdropClick = !0) }) }), this._showBackdrop(function () { return e._showElement(t) })) } }, t.hide = function (t) { var e = this; if (t && t.preventDefault(), !this._isTransitioning && this._isShown) { var n = $t.Event(oe.HIDE); if ($t(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) { this._isShown = !1; var i = $t(this._element).hasClass(ce); if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), $t(document).off(oe.FOCUSIN), $t(this._element).removeClass(he), $t(this._element).off(oe.CLICK_DISMISS), $t(this._dialog).off(oe.MOUSEDOWN_DISMISS), i) { var r = Fn.getTransitionDurationFromElement(this._element); $t(this._element).one(Fn.TRANSITION_END, function (t) { return e._hideModal(t) }).emulateTransitionEnd(r) } else this._hideModal() } } }, t.dispose = function () { $t.removeData(this._element, te), $t(window, document, this._element, this._backdrop).off(ee), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null }, t.handleUpdate = function () { this._adjustDialog() }, t._getConfig = function (t) { return t = l({}, ie, t), Fn.typeCheckConfig(Xt, t, re), t }, t._showElement = function (t) { var e = this, n = $t(this._element).hasClass(ce); this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Fn.reflow(this._element), $t(this._element).addClass(he), this._config.focus && this._enforceFocus(); var i = $t.Event(oe.SHOWN, { relatedTarget: t }), r = function () { e._config.focus && e._element.focus(), e._isTransitioning = !1, $t(e._element).trigger(i) }; if (n) { var o = Fn.getTransitionDurationFromElement(this._element); $t(this._dialog).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o) } else r() }, t._enforceFocus = function () { var e = this; $t(document).off(oe.FOCUSIN).on(oe.FOCUSIN, function (t) { document !== t.target && e._element !== t.target && 0 === $t(e._element).has(t.target).length && e._element.focus() }) }, t._setEscapeEvent = function () { var e = this; this._isShown && this._config.keyboard ? $t(this._element).on(oe.KEYDOWN_DISMISS, function (t) { 27 === t.which && (t.preventDefault(), e.hide()) }) : this._isShown || $t(this._element).off(oe.KEYDOWN_DISMISS) }, t._setResizeEvent = function () { var e = this; this._isShown ? $t(window).on(oe.RESIZE, function (t) { return e.handleUpdate(t) }) : $t(window).off(oe.RESIZE) }, t._hideModal = function () { var t = this; this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () { $t(document.body).removeClass(le), t._resetAdjustments(), t._resetScrollbar(), $t(t._element).trigger(oe.HIDDEN) }) }, t._removeBackdrop = function () { this._backdrop && ($t(this._backdrop).remove(), this._backdrop = null) }, t._showBackdrop = function (t) { var e = this, n = $t(this._element).hasClass(ce) ? ce : ""; if (this._isShown && this._config.backdrop) { if (this._backdrop = document.createElement("div"), this._backdrop.className = ae, n && this._backdrop.classList.add(n), $t(this._backdrop).appendTo(document.body), $t(this._element).on(oe.CLICK_DISMISS, function (t) { e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide()) }), n && Fn.reflow(this._backdrop), $t(this._backdrop).addClass(he), !t) return; if (!n) return void t(); var i = Fn.getTransitionDurationFromElement(this._backdrop); $t(this._backdrop).one(Fn.TRANSITION_END, t).emulateTransitionEnd(i) } else if (!this._isShown && this._backdrop) { $t(this._backdrop).removeClass(he); var r = function () { e._removeBackdrop(), t && t() }; if ($t(this._element).hasClass(ce)) { var o = Fn.getTransitionDurationFromElement(this._backdrop); $t(this._backdrop).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o) } else r() } else t && t() }, t._adjustDialog = function () { var t = this._element.scrollHeight > document.documentElement.clientHeight; !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, t._resetAdjustments = function () { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, t._checkScrollbar = function () { var t = document.body.getBoundingClientRect(); this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, t._setScrollbar = function () { var r = this; if (this._isBodyOverflowing) { var t = [].slice.call(document.querySelectorAll(ge)), e = [].slice.call(document.querySelectorAll(_e)); $t(t).each(function (t, e) { var n = e.style.paddingRight, i = $t(e).css("padding-right"); $t(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px") }), $t(e).each(function (t, e) { var n = e.style.marginRight, i = $t(e).css("margin-right"); $t(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px") }); var n = document.body.style.paddingRight, i = $t(document.body).css("padding-right"); $t(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px") } }, t._resetScrollbar = function () { var t = [].slice.call(document.querySelectorAll(ge)); $t(t).each(function (t, e) { var n = $t(e).data("padding-right"); $t(e).removeData("padding-right"), e.style.paddingRight = n || "" }); var e = [].slice.call(document.querySelectorAll("" + _e)); $t(e).each(function (t, e) { var n = $t(e).data("margin-right"); "undefined" != typeof n && $t(e).css("margin-right", n).removeData("margin-right") }); var n = $t(document.body).data("padding-right"); $t(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "" }, t._getScrollbarWidth = function () { var t = document.createElement("div"); t.className = se, document.body.appendChild(t); var e = t.getBoundingClientRect().width - t.clientWidth; return document.body.removeChild(t), e }, r._jQueryInterface = function (n, i) { return this.each(function () { var t = $t(this).data(te), e = l({}, ie, $t(this).data(), "object" == typeof n && n ? n : {}); if (t || (t = new r(this, e), $t(this).data(te, t)), "string" == typeof n) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n](i) } else e.show && t.show(i) }) }, s(r, null, [{ key: "VERSION", get: function () { return "4.1.3" } }, { key: "Default", get: function () { return ie } }]), r }(), $t(document).on(oe.CLICK_DATA_API, fe, function (t) { var e, n = this, i = Fn.getSelectorFromElement(this); i && (e = document.querySelector(i)); var r = $t(e).data(te) ? "toggle" : l({}, $t(e).data(), $t(this).data()); "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(); var o = $t(e).one(oe.SHOW, function (t) { t.isDefaultPrevented() || o.one(oe.HIDDEN, function () { $t(n).is(":visible") && n.focus() }) }); me._jQueryInterface.call($t(e), r, this) }), $t.fn[Xt] = me._jQueryInterface, $t.fn[Xt].Constructor = me, $t.fn[Xt].noConflict = function () { return $t.fn[Xt] = ne, me._jQueryInterface }, me), zn = (ve = "tooltip", Ee = "." + (ye = "bs.tooltip"), Ce = (pe = e).fn[ve], Te = "bs-tooltip", be = new RegExp("(^|\\s)" + Te + "\\S+", "g"), Ae = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !(Ie = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }), selector: !(Se = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" }), placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" }, we = "out", Ne = { HIDE: "hide" + Ee, HIDDEN: "hidden" + Ee, SHOW: (De = "show") + Ee, SHOWN: "shown" + Ee, INSERTED: "inserted" + Ee, CLICK: "click" + Ee, FOCUSIN: "focusin" + Ee, FOCUSOUT: "focusout" + Ee, MOUSEENTER: "mouseenter" + Ee, MOUSELEAVE: "mouseleave" + Ee }, Oe = "fade", ke = "show", Pe = ".tooltip-inner", je = ".arrow", He = "hover", Le = "focus", Re = "click", xe = "manual", We = function () { function i(t, e) { if ("undefined" == typeof h) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)"); this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners() } var t = i.prototype; return t.enable = function () { this._isEnabled = !0 }, t.disable = function () { this._isEnabled = !1 }, t.toggleEnabled = function () { this._isEnabled = !this._isEnabled }, t.toggle = function (t) { if (this._isEnabled) if (t) { var e = this.constructor.DATA_KEY, n = pe(t.currentTarget).data(e); n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), pe(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n) } else { if (pe(this.getTipElement()).hasClass(ke)) return void this._leave(null, this); this._enter(null, this) } }, t.dispose = function () { clearTimeout(this._timeout), pe.removeData(this.element, this.constructor.DATA_KEY), pe(this.element).off(this.constructor.EVENT_KEY), pe(this.element).closest(".modal").off("hide.bs.modal"), this.tip && pe(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, t.show = function () { var e = this; if ("none" === pe(this.element).css("display")) throw new Error("Please use show on visible elements"); var t = pe.Event(this.constructor.Event.SHOW); if (this.isWithContent() && this._isEnabled) { pe(this.element).trigger(t); var n = pe.contains(this.element.ownerDocument.documentElement, this.element); if (t.isDefaultPrevented() || !n) return; var i = this.getTipElement(), r = Fn.getUID(this.constructor.NAME); i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && pe(i).addClass(Oe); var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement, s = this._getAttachment(o); this.addAttachmentClass(s); var a = !1 === this.config.container ? document.body : pe(document).find(this.config.container); pe(i).data(this.constructor.DATA_KEY, this), pe.contains(this.element.ownerDocument.documentElement, this.tip) || pe(i).appendTo(a), pe(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new h(this.element, i, { placement: s, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: je }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function (t) { t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t) }, onUpdate: function (t) { e._handlePopperPlacementChange(t) } }), pe(i).addClass(ke), "ontouchstart" in document.documentElement && pe(document.body).children().on("mouseover", null, pe.noop); var l = function () { e.config.animation && e._fixTransition(); var t = e._hoverState; e._hoverState = null, pe(e.element).trigger(e.constructor.Event.SHOWN), t === we && e._leave(null, e) }; if (pe(this.tip).hasClass(Oe)) { var c = Fn.getTransitionDurationFromElement(this.tip); pe(this.tip).one(Fn.TRANSITION_END, l).emulateTransitionEnd(c) } else l() } }, t.hide = function (t) { var e = this, n = this.getTipElement(), i = pe.Event(this.constructor.Event.HIDE), r = function () { e._hoverState !== De && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), pe(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t() }; if (pe(this.element).trigger(i), !i.isDefaultPrevented()) { if (pe(n).removeClass(ke), "ontouchstart" in document.documentElement && pe(document.body).children().off("mouseover", null, pe.noop), this._activeTrigger[Re] = !1, this._activeTrigger[Le] = !1, this._activeTrigger[He] = !1, pe(this.tip).hasClass(Oe)) { var o = Fn.getTransitionDurationFromElement(n); pe(n).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o) } else r(); this._hoverState = "" } }, t.update = function () { null !== this._popper && this._popper.scheduleUpdate() }, t.isWithContent = function () { return Boolean(this.getTitle()) }, t.addAttachmentClass = function (t) { pe(this.getTipElement()).addClass(Te + "-" + t) }, t.getTipElement = function () { return this.tip = this.tip || pe(this.config.template)[0], this.tip }, t.setContent = function () { var t = this.getTipElement(); this.setElementContent(pe(t.querySelectorAll(Pe)), this.getTitle()), pe(t).removeClass(Oe + " " + ke) }, t.setElementContent = function (t, e) { var n = this.config.html; "object" == typeof e && (e.nodeType || e.jquery) ? n ? pe(e).parent().is(t) || t.empty().append(e) : t.text(pe(e).text()) : t[n ? "html" : "text"](e) }, t.getTitle = function () { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, t._getAttachment = function (t) { return Ie[t.toUpperCase()] }, t._setListeners = function () { var i = this; this.config.trigger.split(" ").forEach(function (t) { if ("click" === t) pe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) { return i.toggle(t) }); else if (t !== xe) { var e = t === He ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN, n = t === He ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT; pe(i.element).on(e, i.config.selector, function (t) { return i._enter(t) }).on(n, i.config.selector, function (t) { return i._leave(t) }) } pe(i.element).closest(".modal").on("hide.bs.modal", function () { return i.hide() }) }), this.config.selector ? this.config = l({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle() }, t._fixTitle = function () { var t = typeof this.element.getAttribute("data-original-title"); (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", "")) }, t._enter = function (t, e) { var n = this.constructor.DATA_KEY; (e = e || pe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), pe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Le : He] = !0), pe(e.getTipElement()).hasClass(ke) || e._hoverState === De ? e._hoverState = De : (clearTimeout(e._timeout), e._hoverState = De, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () { e._hoverState === De && e.show() }, e.config.delay.show) : e.show()) }, t._leave = function (t, e) { var n = this.constructor.DATA_KEY; (e = e || pe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), pe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Le : He] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = we, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () { e._hoverState === we && e.hide() }, e.config.delay.hide) : e.hide()) }, t._isWithActiveTrigger = function () { for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0; return !1 }, t._getConfig = function (t) { return "number" == typeof (t = l({}, this.constructor.Default, pe(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), Fn.typeCheckConfig(ve, t, this.constructor.DefaultType), t }, t._getDelegateConfig = function () { var t = {}; if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]); return t }, t._cleanTipClass = function () { var t = pe(this.getTipElement()), e = t.attr("class").match(be); null !== e && e.length && t.removeClass(e.join("")) }, t._handlePopperPlacementChange = function (t) { var e = t.instance; this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement)) }, t._fixTransition = function () { var t = this.getTipElement(), e = this.config.animation; null === t.getAttribute("x-placement") && (pe(t).removeClass(Oe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e) }, i._jQueryInterface = function (n) { return this.each(function () { var t = pe(this).data(ye), e = "object" == typeof n && n; if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), pe(this).data(ye, t)), "string" == typeof n)) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n]() } }) }, s(i, null, [{ key: "VERSION", get: function () { return "4.1.3" } }, { key: "Default", get: function () { return Ae } }, { key: "NAME", get: function () { return ve } }, { key: "DATA_KEY", get: function () { return ye } }, { key: "Event", get: function () { return Ne } }, { key: "EVENT_KEY", get: function () { return Ee } }, { key: "DefaultType", get: function () { return Se } }]), i }(), pe.fn[ve] = We._jQueryInterface, pe.fn[ve].Constructor = We, pe.fn[ve].noConflict = function () { return pe.fn[ve] = Ce, We._jQueryInterface }, We), Jn = (qe = "popover", Ke = "." + (Fe = "bs.popover"), Me = (Ue = e).fn[qe], Qe = "bs-popover", Be = new RegExp("(^|\\s)" + Qe + "\\S+", "g"), Ve = l({}, zn.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), Ye = l({}, zn.DefaultType, { content: "(string|element|function)" }), ze = "fade", Ze = ".popover-header", Ge = ".popover-body", $e = { HIDE: "hide" + Ke, HIDDEN: "hidden" + Ke, SHOW: (Je = "show") + Ke, SHOWN: "shown" + Ke, INSERTED: "inserted" + Ke, CLICK: "click" + Ke, FOCUSIN: "focusin" + Ke, FOCUSOUT: "focusout" + Ke, MOUSEENTER: "mouseenter" + Ke, MOUSELEAVE: "mouseleave" + Ke }, Xe = function (t) { var e, n; function i() { return t.apply(this, arguments) || this } n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n; var r = i.prototype; return r.isWithContent = function () { return this.getTitle() || this._getContent() }, r.addAttachmentClass = function (t) { Ue(this.getTipElement()).addClass(Qe + "-" + t) }, r.getTipElement = function () { return this.tip = this.tip || Ue(this.config.template)[0], this.tip }, r.setContent = function () { var t = Ue(this.getTipElement()); this.setElementContent(t.find(Ze), this.getTitle()); var e = this._getContent(); "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Ge), e), t.removeClass(ze + " " + Je) }, r._getContent = function () { return this.element.getAttribute("data-content") || this.config.content }, r._cleanTipClass = function () { var t = Ue(this.getTipElement()), e = t.attr("class").match(Be); null !== e && 0 < e.length && t.removeClass(e.join("")) }, i._jQueryInterface = function (n) { return this.each(function () { var t = Ue(this).data(Fe), e = "object" == typeof n ? n : null; if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), Ue(this).data(Fe, t)), "string" == typeof n)) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n]() } }) }, s(i, null, [{ key: "VERSION", get: function () { return "4.1.3" } }, { key: "Default", get: function () { return Ve } }, { key: "NAME", get: function () { return qe } }, { key: "DATA_KEY", get: function () { return Fe } }, { key: "Event", get: function () { return $e } }, { key: "EVENT_KEY", get: function () { return Ke } }, { key: "DefaultType", get: function () { return Ye } }]), i }(zn), Ue.fn[qe] = Xe._jQueryInterface, Ue.fn[qe].Constructor = Xe, Ue.fn[qe].noConflict = function () { return Ue.fn[qe] = Me, Xe._jQueryInterface }, Xe), Zn = (en = "scrollspy", rn = "." + (nn = "bs.scrollspy"), on = (tn = e).fn[en], sn = { offset: 10, method: "auto", target: "" }, an = { offset: "number", method: "string", target: "(string|element)" }, ln = { ACTIVATE: "activate" + rn, SCROLL: "scroll" + rn, LOAD_DATA_API: "load" + rn + ".data-api" }, cn = "dropdown-item", hn = "active", un = '[data-spy="scroll"]', fn = ".active", dn = ".nav, .list-group", gn = ".nav-link", _n = ".nav-item", mn = ".list-group-item", pn = ".dropdown", vn = ".dropdown-item", yn = ".dropdown-toggle", En = "offset", Cn = "position", Tn = function () { function n(t, e) { var n = this; this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + gn + "," + this._config.target + " " + mn + "," + this._config.target + " " + vn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, tn(this._scrollElement).on(ln.SCROLL, function (t) { return n._process(t) }), this.refresh(), this._process() } var t = n.prototype; return t.refresh = function () { var e = this, t = this._scrollElement === this._scrollElement.window ? En : Cn, r = "auto" === this._config.method ? t : this._config.method, o = r === Cn ? this._getScrollTop() : 0; this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) { var e, n = Fn.getSelectorFromElement(t); if (n && (e = document.querySelector(n)), e) { var i = e.getBoundingClientRect(); if (i.width || i.height) return [tn(e)[r]().top + o, n] } return null }).filter(function (t) { return t }).sort(function (t, e) { return t[0] - e[0] }).forEach(function (t) { e._offsets.push(t[0]), e._targets.push(t[1]) }) }, t.dispose = function () { tn.removeData(this._element, nn), tn(this._scrollElement).off(rn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, t._getConfig = function (t) { if ("string" != typeof (t = l({}, sn, "object" == typeof t && t ? t : {})).target) { var e = tn(t.target).attr("id"); e || (e = Fn.getUID(en), tn(t.target).attr("id", e)), t.target = "#" + e } return Fn.typeCheckConfig(en, t, an), t }, t._getScrollTop = function () { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, t._getScrollHeight = function () { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, t._getOffsetHeight = function () { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, t._process = function () { var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), n = this._config.offset + e - this._getOffsetHeight(); if (this._scrollHeight !== e && this.refresh(), n <= t) { var i = this._targets[this._targets.length - 1]; this._activeTarget !== i && this._activate(i) } else { if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear(); for (var r = this._offsets.length; r--;) { this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]) } } }, t._activate = function (e) { this._activeTarget = e, this._clear(); var t = this._selector.split(","); t = t.map(function (t) { return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]' }); var n = tn([].slice.call(document.querySelectorAll(t.join(",")))); n.hasClass(cn) ? (n.closest(pn).find(yn).addClass(hn), n.addClass(hn)) : (n.addClass(hn), n.parents(dn).prev(gn + ", " + mn).addClass(hn), n.parents(dn).prev(_n).children(gn).addClass(hn)), tn(this._scrollElement).trigger(ln.ACTIVATE, { relatedTarget: e }) }, t._clear = function () { var t = [].slice.call(document.querySelectorAll(this._selector)); tn(t).filter(fn).removeClass(hn) }, n._jQueryInterface = function (e) { return this.each(function () { var t = tn(this).data(nn); if (t || (t = new n(this, "object" == typeof e && e), tn(this).data(nn, t)), "string" == typeof e) { if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"'); t[e]() } }) }, s(n, null, [{ key: "VERSION", get: function () { return "4.1.3" } }, { key: "Default", get: function () { return sn } }]), n }(), tn(window).on(ln.LOAD_DATA_API, function () { for (var t = [].slice.call(document.querySelectorAll(un)), e = t.length; e--;) { var n = tn(t[e]); Tn._jQueryInterface.call(n, n.data()) } }), tn.fn[en] = Tn._jQueryInterface, tn.fn[en].Constructor = Tn, tn.fn[en].noConflict = function () { return tn.fn[en] = on, Tn._jQueryInterface }, Tn), Gn = (In = "." + (Sn = "bs.tab"), An = (bn = e).fn.tab, Dn = { HIDE: "hide" + In, HIDDEN: "hidden" + In, SHOW: "show" + In, SHOWN: "shown" + In, CLICK_DATA_API: "click" + In + ".data-api" }, wn = "dropdown-menu", Nn = "active", On = "disabled", kn = "fade", Pn = "show", jn = ".dropdown", Hn = ".nav, .list-group", Ln = ".active", Rn = "> li > .active", xn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Wn = ".dropdown-toggle", Un = "> .dropdown-menu .active", qn = function () { function i(t) { this._element = t } var t = i.prototype; return t.show = function () { var n = this; if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && bn(this._element).hasClass(Nn) || bn(this._element).hasClass(On))) { var t, i, e = bn(this._element).closest(Hn)[0], r = Fn.getSelectorFromElement(this._element); if (e) { var o = "UL" === e.nodeName ? Rn : Ln; i = (i = bn.makeArray(bn(e).find(o)))[i.length - 1] } var s = bn.Event(Dn.HIDE, { relatedTarget: this._element }), a = bn.Event(Dn.SHOW, { relatedTarget: i }); if (i && bn(i).trigger(s), bn(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) { r && (t = document.querySelector(r)), this._activate(this._element, e); var l = function () { var t = bn.Event(Dn.HIDDEN, { relatedTarget: n._element }), e = bn.Event(Dn.SHOWN, { relatedTarget: i }); bn(i).trigger(t), bn(n._element).trigger(e) }; t ? this._activate(t, t.parentNode, l) : l() } } }, t.dispose = function () { bn.removeData(this._element, Sn), this._element = null }, t._activate = function (t, e, n) { var i = this, r = ("UL" === e.nodeName ? bn(e).find(Rn) : bn(e).children(Ln))[0], o = n && r && bn(r).hasClass(kn), s = function () { return i._transitionComplete(t, r, n) }; if (r && o) { var a = Fn.getTransitionDurationFromElement(r); bn(r).one(Fn.TRANSITION_END, s).emulateTransitionEnd(a) } else s() }, t._transitionComplete = function (t, e, n) { if (e) { bn(e).removeClass(Pn + " " + Nn); var i = bn(e.parentNode).find(Un)[0]; i && bn(i).removeClass(Nn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1) } if (bn(t).addClass(Nn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Fn.reflow(t), bn(t).addClass(Pn), t.parentNode && bn(t.parentNode).hasClass(wn)) { var r = bn(t).closest(jn)[0]; if (r) { var o = [].slice.call(r.querySelectorAll(Wn)); bn(o).addClass(Nn) } t.setAttribute("aria-expanded", !0) } n && n() }, i._jQueryInterface = function (n) { return this.each(function () { var t = bn(this), e = t.data(Sn); if (e || (e = new i(this), t.data(Sn, e)), "string" == typeof n) { if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"'); e[n]() } }) }, s(i, null, [{ key: "VERSION", get: function () { return "4.1.3" } }]), i }(), bn(document).on(Dn.CLICK_DATA_API, xn, function (t) { t.preventDefault(), qn._jQueryInterface.call(bn(this), "show") }), bn.fn.tab = qn._jQueryInterface, bn.fn.tab.Constructor = qn, bn.fn.tab.noConflict = function () { return bn.fn.tab = An, qn._jQueryInterface }, qn); !function (t) { if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var e = t.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(e), t.Util = Fn, t.Alert = Kn, t.Button = Mn, t.Carousel = Qn, t.Collapse = Bn, t.Dropdown = Vn, t.Modal = Yn, t.Popover = Jn, t.Scrollspy = Zn, t.Tab = Gn, t.Tooltip = zn, Object.defineProperty(t, "__esModule", { value: !0 }) });
//# sourceMappingURL=bootstrap.min.js.map

var PageTransitions = (function () {

    var $main = $('#main'),
        $pages = $main.children('.pt-page'),
        $navLinks = $('.nav-menu .pt-link'),
        animcursor = 1,
        pagesCount = $pages.length,
        current = 0,
        isAnimating = false,
        endCurrPage = false,
        endNextPage = false,
        animEndEventNames = {
            'WebkitAnimation': 'webkitAnimationEnd',
            'OAnimation': 'oAnimationEnd',
            'msAnimation': 'MSAnimationEnd',
            'animation': 'animationend'
        },
        // animation end event name
        animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],
        // support css animations
        support = Modernizr.cssanimations;

    var animation = 0;

    (function () {
        var links = [],
            hash = location.hash;
        var currentPage = location.pathname;

        $navLinks.each(function () {
            links.push($(this).attr('href'));
        });

        $navLinks.removeClass('active');
        $('.blog-link').removeClass('active');
        
        if (links.indexOf(hash) >= 0) {
            current = links.indexOf(hash);
            $navLinks.removeClass('active');
            $navLinks.eq(links.indexOf(hash)).addClass('active');
        } else {
            if (currentPage.includes('Blog')) {
                $('.blog-link').addClass('active');
            }

            if (currentPage === '/' || currentPage.includes('Index')) {
                $('.home-link').addClass('active');
            }
        }

    })();

    function init() {

        $pages.each(function () {
            var $page = $(this);
            $page.data('originalClassList', $page.attr('class'));
        });

        $pages.eq(current).addClass('page-active');


        if ($navLinks.length > 0) {
            window.onhashchange = function () {
                var hash = location.hash,
                    links = [];

                $('.blog-link').removeClass('active');
                console.log('loading partial view for: ' + hash);
                ajaxLoadContent(hash);
                console.log('partial view loaded for: ' + hash);

                $navLinks.each(function () {
                    links.push($(this).attr('href'));                    
                });
                
                if (links.indexOf(hash) >= 0) {

                    $nextPageIndex = $(hash).index() - 1;
                    console.log($nextPageIndex);
                    if (animcursor > 67) {
                        animcursor = 1;
                    }

                    $navLinks.removeClass('active');
                    $navLinks.eq(links.indexOf(hash)).addClass('active');

                    nextPage($nextPageIndex);
                    animcursor++;
                }
            };

            $navLinks.on('click', function (e) {
                if (isAnimating) {
                    return false;
                }
                $navLinks.removeClass('active');
                $(this).addClass('active');
                //var hash = $(this).attr('href');
                
            });
        }
    }

    function nextPage(nextPageIndex) {

        var randomAnimation = $('html').data('randomAnimation'),
            animNumber = $('html').data('animation'),
            prevAnimation,
            nextAnimation;

        if (current === nextPageIndex) {
            return false;
        }


        isAnimating = true;


        if (!randomAnimation) {
            switch (animNumber) {
                case 1:
                    prevAnimation = 1;
                    nextAnimation = 2;
                    break;
                case 2:
                    prevAnimation = 3;
                    nextAnimation = 4;
                    break;
                case 3:
                    prevAnimation = 5;
                    nextAnimation = 6;
                    break;
                case 4:
                    prevAnimation = 7;
                    nextAnimation = 8;
                    break;
                case 5:
                    prevAnimation = 9;
                    nextAnimation = 10;
                    break;
                case 6:
                    prevAnimation = 11;
                    nextAnimation = 12;
                    break;
                case 7:
                    prevAnimation = 13;
                    nextAnimation = 14;
                    break;
                case 8:
                    prevAnimation = 15;
                    nextAnimation = 16;
                    break;
                case 9:
                    prevAnimation = 17;
                    nextAnimation = 18;
                    break;
                case 10:
                    prevAnimation = 19;
                    nextAnimation = 20;
                    break;
                case 11:
                    prevAnimation = 21;
                    nextAnimation = 22;
                    break;
                case 12:
                    prevAnimation = 23;
                    nextAnimation = 24;
                    break;
                case 13:
                    prevAnimation = 25;
                    nextAnimation = 26;
                    break;
                case 14:
                    prevAnimation = 27;
                    nextAnimation = 27;
                    break;
                case 15:
                    prevAnimation = 28;
                    nextAnimation = 29;
                    break;
                case 16:
                    prevAnimation = 31;
                    nextAnimation = 30;
                    break;
                case 17:
                    prevAnimation = 32;
                    nextAnimation = 33;
                    break;
                case 18:
                    prevAnimation = 34;
                    nextAnimation = 35;
                    break;
                case 19:
                    prevAnimation = 36;
                    nextAnimation = 36;
                    break;
                case 20:
                    prevAnimation = 37;
                    nextAnimation = 37;
                    break;
                case 21:
                    prevAnimation = 38;
                    nextAnimation = 39;
                    break;
                case 22:
                    prevAnimation = 40;
                    nextAnimation = 41;
                    break;
                case 23:
                    prevAnimation = 42;
                    nextAnimation = 43;
                    break;
                case 24:
                    prevAnimation = 44;
                    nextAnimation = 45;
                    break;
                case 25:
                    prevAnimation = 46;
                    nextAnimation = 47;
                    break;
                case 26:
                    prevAnimation = 48;
                    nextAnimation = 49;
                    break;
                case 27:
                    prevAnimation = 51;
                    nextAnimation = 50;
                    break;
                case 28:
                    prevAnimation = 53;
                    nextAnimation = 52;
                    break;
                case 29:
                    prevAnimation = 54;
                    nextAnimation = 55;
                    break;
                case 30:
                    prevAnimation = 56;
                    nextAnimation = 57;
                    break;
                case 31:
                    prevAnimation = 58;
                    nextAnimation = 59;
                    break;
                case 32:
                    prevAnimation = 60;
                    nextAnimation = 61;
                    break;
                case 33:
                    prevAnimation = 62;
                    nextAnimation = 63;
                    break;
                case 34:
                    prevAnimation = 64;
                    nextAnimation = 65;
                    break;
                case 35:
                    prevAnimation = 66;
                    nextAnimation = 66;
                    break;
                case 36:
                    prevAnimation = 67;
                    nextAnimation = 68;
                    break;
                default:
                    prevAnimation = 1;
                    nextAnimation = 2;
            }
        }


        if (!randomAnimation) {
            if (current < nextPageIndex) {
                animation = prevAnimation;
            }
            else if (current > nextPageIndex) {
                animation = nextAnimation;
            }
        } else {
            animation = animcursor;
        }

        var $currPage = $pages.eq(current);

        current = nextPageIndex;

        var $nextPage = $pages.eq(current).addClass('page-active'),
            outClass = '', inClass = '';

        switch (animation) {

            case 1:
                outClass = 'pt-page-moveToLeft';
                inClass = 'pt-page-moveFromRight';
                break;
            case 2:
                outClass = 'pt-page-moveToRight';
                inClass = 'pt-page-moveFromLeft';
                break;
            case 3:
                outClass = 'pt-page-moveToTop';
                inClass = 'pt-page-moveFromBottom';
                break;
            case 4:
                outClass = 'pt-page-moveToBottom';
                inClass = 'pt-page-moveFromTop';
                break;
            case 5:
                outClass = 'pt-page-fade';
                inClass = 'pt-page-moveFromRight pt-page-ontop';
                break;
            case 6:
                outClass = 'pt-page-fade';
                inClass = 'pt-page-moveFromLeft pt-page-ontop';
                break;
            case 7:
                outClass = 'pt-page-fade';
                inClass = 'pt-page-moveFromBottom pt-page-ontop';
                break;
            case 8:
                outClass = 'pt-page-fade';
                inClass = 'pt-page-moveFromTop pt-page-ontop';
                break;
            case 9:
                outClass = 'pt-page-moveToLeftFade';
                inClass = 'pt-page-moveFromRightFade';
                break;
            case 10:
                outClass = 'pt-page-moveToRightFade';
                inClass = 'pt-page-moveFromLeftFade';
                break;
            case 11:
                outClass = 'pt-page-moveToTopFade';
                inClass = 'pt-page-moveFromBottomFade';
                break;
            case 12:
                outClass = 'pt-page-moveToBottomFade';
                inClass = 'pt-page-moveFromTopFade';
                break;
            case 13:
                outClass = 'pt-page-moveToLeftEasing pt-page-ontop';
                inClass = 'pt-page-moveFromRight';
                break;
            case 14:
                outClass = 'pt-page-moveToRightEasing pt-page-ontop';
                inClass = 'pt-page-moveFromLeft';
                break;
            case 15:
                outClass = 'pt-page-moveToTopEasing pt-page-ontop';
                inClass = 'pt-page-moveFromBottom';
                break;
            case 16:
                outClass = 'pt-page-moveToBottomEasing pt-page-ontop';
                inClass = 'pt-page-moveFromTop';
                break;
            case 17:
                outClass = 'pt-page-scaleDown';
                inClass = 'pt-page-moveFromRight pt-page-ontop';
                break;
            case 18:
                outClass = 'pt-page-scaleDown';
                inClass = 'pt-page-moveFromLeft pt-page-ontop';
                break;
            case 19:
                outClass = 'pt-page-scaleDown';
                inClass = 'pt-page-moveFromBottom pt-page-ontop';
                break;
            case 20:
                outClass = 'pt-page-scaleDown';
                inClass = 'pt-page-moveFromTop pt-page-ontop';
                break;
            case 21:
                outClass = 'pt-page-scaleDown';
                inClass = 'pt-page-scaleUpDown pt-page-delay300';
                break;
            case 22:
                outClass = 'pt-page-scaleDownUp';
                inClass = 'pt-page-scaleUp pt-page-delay300';
                break;
            case 23:
                outClass = 'pt-page-moveToLeft pt-page-ontop';
                inClass = 'pt-page-scaleUp';
                break;
            case 24:
                outClass = 'pt-page-moveToRight pt-page-ontop';
                inClass = 'pt-page-scaleUp';
                break;
            case 25:
                outClass = 'pt-page-moveToTop pt-page-ontop';
                inClass = 'pt-page-scaleUp';
                break;
            case 26:
                outClass = 'pt-page-moveToBottom pt-page-ontop';
                inClass = 'pt-page-scaleUp';
                break;
            case 27:
                outClass = 'pt-page-scaleDownCenter';
                inClass = 'pt-page-scaleUpCenter pt-page-delay400';
                break;
            case 28:
                outClass = 'pt-page-rotateRightSideFirst';
                inClass = 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop';
                break;
            case 29:
                outClass = 'pt-page-rotateLeftSideFirst';
                inClass = 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop';
                break;
            case 30:
                outClass = 'pt-page-rotateTopSideFirst';
                inClass = 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop';
                break;
            case 31:
                outClass = 'pt-page-rotateBottomSideFirst';
                inClass = 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop';
                break;
            case 32:
                outClass = 'pt-page-flipOutRight';
                inClass = 'pt-page-flipInLeft pt-page-delay500';
                break;
            case 33:
                outClass = 'pt-page-flipOutLeft';
                inClass = 'pt-page-flipInRight pt-page-delay500';
                break;
            case 34:
                outClass = 'pt-page-flipOutTop';
                inClass = 'pt-page-flipInBottom pt-page-delay500';
                break;
            case 35:
                outClass = 'pt-page-flipOutBottom';
                inClass = 'pt-page-flipInTop pt-page-delay500';
                break;
            case 36:
                outClass = 'pt-page-rotateFall pt-page-ontop';
                inClass = 'pt-page-scaleUp';
                break;
            case 37:
                outClass = 'pt-page-rotateOutNewspaper';
                inClass = 'pt-page-rotateInNewspaper pt-page-delay500';
                break;
            case 38:
                outClass = 'pt-page-rotatePushLeft';
                inClass = 'pt-page-moveFromRight';
                break;
            case 39:
                outClass = 'pt-page-rotatePushRight';
                inClass = 'pt-page-moveFromLeft pt-page-ontop';
                break;
            case 40:
                outClass = 'pt-page-rotatePushTop ';
                inClass = 'pt-page-moveFromBottom';
                break;
            case 41:
                outClass = 'pt-page-rotatePushBottom ';
                inClass = 'pt-page-moveFromTop pt-page-ontop';
                break;
            case 42:
                outClass = 'pt-page-rotatePushLeft';
                inClass = 'pt-page-rotatePullRight pt-page-delay180';
                break;
            case 43:
                outClass = 'pt-page-rotatePushRight';
                inClass = 'pt-page-rotatePullLeft pt-page-delay180';
                break;
            case 44:
                outClass = 'pt-page-rotatePushTop';
                inClass = 'pt-page-rotatePullBottom pt-page-delay180';
                break;
            case 45:
                outClass = 'pt-page-rotatePushBottom';
                inClass = 'pt-page-rotatePullTop pt-page-delay180';
                break;
            case 46:
                outClass = 'pt-page-rotateFoldLeft';
                inClass = 'pt-page-moveFromRightFade';
                break;
            case 47:
                outClass = 'pt-page-rotateFoldRight';
                inClass = 'pt-page-moveFromLeftFade';
                break;
            case 48:
                outClass = 'pt-page-rotateFoldTop';
                inClass = 'pt-page-moveFromBottomFade';
                break;
            case 49:
                outClass = 'pt-page-rotateFoldBottom';
                inClass = 'pt-page-moveFromTopFade';
                break;
            case 50:
                outClass = 'pt-page-moveToRightFade';
                inClass = 'pt-page-rotateUnfoldLeft';
                break;
            case 51:
                outClass = 'pt-page-moveToLeftFade';
                inClass = 'pt-page-rotateUnfoldRight';
                break;
            case 52:
                outClass = 'pt-page-moveToBottomFade';
                inClass = 'pt-page-rotateUnfoldTop';
                break;
            case 53:
                outClass = 'pt-page-moveToTopFade';
                inClass = 'pt-page-rotateUnfoldBottom';
                break;
            case 54:
                outClass = 'pt-page-rotateRoomLeftOut pt-page-ontop';
                inClass = 'pt-page-rotateRoomLeftIn';
                break;
            case 55:
                outClass = 'pt-page-rotateRoomRightOut pt-page-ontop';
                inClass = 'pt-page-rotateRoomRightIn';
                break;
            case 56:
                outClass = 'pt-page-rotateRoomTopOut pt-page-ontop';
                inClass = 'pt-page-rotateRoomTopIn';
                break;
            case 57:
                outClass = 'pt-page-rotateRoomBottomOut pt-page-ontop';
                inClass = 'pt-page-rotateRoomBottomIn';
                break;
            case 58:
                outClass = 'pt-page-rotateCubeLeftOut pt-page-ontop';
                inClass = 'pt-page-rotateCubeLeftIn';
                break;
            case 59:
                outClass = 'pt-page-rotateCubeRightOut pt-page-ontop';
                inClass = 'pt-page-rotateCubeRightIn';
                break;
            case 60:
                outClass = 'pt-page-rotateCubeTopOut pt-page-ontop';
                inClass = 'pt-page-rotateCubeTopIn';
                break;
            case 61:
                outClass = 'pt-page-rotateCubeBottomOut pt-page-ontop';
                inClass = 'pt-page-rotateCubeBottomIn';
                break;
            case 62:
                outClass = 'pt-page-rotateCarouselLeftOut pt-page-ontop';
                inClass = 'pt-page-rotateCarouselLeftIn';
                break;
            case 63:
                outClass = 'pt-page-rotateCarouselRightOut pt-page-ontop';
                inClass = 'pt-page-rotateCarouselRightIn';
                break;
            case 64:
                outClass = 'pt-page-rotateCarouselTopOut pt-page-ontop';
                inClass = 'pt-page-rotateCarouselTopIn';
                break;
            case 65:
                outClass = 'pt-page-rotateCarouselBottomOut pt-page-ontop';
                inClass = 'pt-page-rotateCarouselBottomIn';
                break;
            case 66:
                outClass = 'pt-page-rotateSidesOut';
                inClass = 'pt-page-rotateSidesIn pt-page-delay200';
                break;
            case 67:
                outClass = 'pt-page-rotateSlideOutToLeft';
                inClass = 'pt-page-rotateSlideInFromRight';
                break;
            case 68:
                outClass = 'pt-page-rotateSlideOutToRight';
                inClass = 'pt-page-rotateSlideInFromLeft';
                break;

        }

        $currPage.addClass(outClass).on(animEndEventName, function () {
            $currPage.off(animEndEventName);
            endCurrPage = true;
            if (endNextPage) {
                onEndAnimation($currPage, $nextPage);
            }
        });

        $nextPage.addClass(inClass).on(animEndEventName, function () {
            $nextPage.off(animEndEventName);
            endNextPage = true;
            if (endCurrPage) {
                onEndAnimation($currPage, $nextPage);
            }
        });

        if (!support) {
            onEndAnimation($currPage, $nextPage);
        }
    }

    function onEndAnimation($outpage, $inpage) {
        endCurrPage = false;
        endNextPage = false;
        resetPage($outpage, $inpage);
        isAnimating = false;
    }

    function resetPage($outpage, $inpage) {
        $outpage.attr('class', $outpage.data('originalClassList'));
        $inpage.attr('class', $inpage.data('originalClassList') + ' page-active');
    }

    init();

    return { init: init };

})();


jQuery(document).ready(function ($) {
    //set animation timing
    var animationDelay = 2500,
        //loading bar effect
        barAnimationDelay = 3800,
        barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
        //letters effect
        lettersDelay = 50,
        //type effect
        typeLettersDelay = 150,
        selectionDuration = 500,
        typeAnimationDelay = selectionDuration + 800,
        //clip effect 
        revealDuration = 600,
        revealAnimationDelay = 1500;

    initHeadline();


    function initHeadline() {
        //insert <i> element for each letter of a changing word
        singleLetters($('.cd-headline.letters').find('b'));
        //initialise headline animation
        animateHeadline($('.cd-headline'));
    }

    function singleLetters($words) {
        $words.each(function () {
            var word = $(this),
                letters = word.text().split(''),
                selected = word.hasClass('is-visible');
            for (i in letters) {
                if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
                letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
            }
            var newLetters = letters.join('');
            word.html(newLetters).css('opacity', 1);
        });
    }

    function animateHeadline($headlines) {
        var duration = animationDelay;
        $headlines.each(function () {
            var headline = $(this);

            if (headline.hasClass('loading-bar')) {
                duration = barAnimationDelay;
                setTimeout(function () { headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
            } else if (headline.hasClass('clip')) {
                var spanWrapper = headline.find('.cd-words-wrapper'),
                    newWidth = spanWrapper.width() + 10
                spanWrapper.css('width', newWidth);
            } else if (!headline.hasClass('type')) {
                //assign to .cd-words-wrapper the width of its longest word
                var words = headline.find('.cd-words-wrapper b'),
                    width = 0;
                words.each(function () {
                    var wordWidth = $(this).width();
                    if (wordWidth > width) width = wordWidth;
                });
                headline.find('.cd-words-wrapper').css('width', width);
            };

            //trigger animation
            setTimeout(function () { hideWord(headline.find('.is-visible').eq(0)) }, duration);
        });
    }

    function hideWord($word) {
        var nextWord = takeNext($word);

        if ($word.parents('.cd-headline').hasClass('type')) {
            var parentSpan = $word.parent('.cd-words-wrapper');
            parentSpan.addClass('selected').removeClass('waiting');
            setTimeout(function () {
                parentSpan.removeClass('selected');
                $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
            }, selectionDuration);
            setTimeout(function () { showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);

        } else if ($word.parents('.cd-headline').hasClass('letters')) {
            var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
            hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
            showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

        } else if ($word.parents('.cd-headline').hasClass('clip')) {
            $word.parents('.cd-words-wrapper').animate({ width: '2px' }, revealDuration, function () {
                switchWord($word, nextWord);
                showWord(nextWord);
            });

        } else if ($word.parents('.cd-headline').hasClass('loading-bar')) {
            $word.parents('.cd-words-wrapper').removeClass('is-loading');
            switchWord($word, nextWord);
            setTimeout(function () { hideWord(nextWord) }, barAnimationDelay);
            setTimeout(function () { $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

        } else {
            switchWord($word, nextWord);
            setTimeout(function () { hideWord(nextWord) }, animationDelay);
        }
    }

    function showWord($word, $duration) {
        if ($word.parents('.cd-headline').hasClass('type')) {
            showLetter($word.find('i').eq(0), $word, false, $duration);
            $word.addClass('is-visible').removeClass('is-hidden');

        } else if ($word.parents('.cd-headline').hasClass('clip')) {
            $word.parents('.cd-words-wrapper').animate({ 'width': $word.width() + 10 }, revealDuration, function () {
                setTimeout(function () { hideWord($word) }, revealAnimationDelay);
            });
        }
    }

    function hideLetter($letter, $word, $bool, $duration) {
        $letter.removeClass('in').addClass('out');

        if (!$letter.is(':last-child')) {
            setTimeout(function () { hideLetter($letter.next(), $word, $bool, $duration); }, $duration);
        } else if ($bool) {
            setTimeout(function () { hideWord(takeNext($word)) }, animationDelay);
        }

        if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
            var nextWord = takeNext($word);
            switchWord($word, nextWord);
        }
    }

    function showLetter($letter, $word, $bool, $duration) {
        $letter.addClass('in').removeClass('out');

        if (!$letter.is(':last-child')) {
            setTimeout(function () { showLetter($letter.next(), $word, $bool, $duration); }, $duration);
        } else {
            if ($word.parents('.cd-headline').hasClass('type')) { setTimeout(function () { $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200); }
            if (!$bool) { setTimeout(function () { hideWord($word) }, animationDelay) }
        }
    }

    function takeNext($word) {
        return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
    }

    function takePrev($word) {
        return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
    }

    function switchWord($oldWord, $newWord) {
        $oldWord.removeClass('is-visible').addClass('is-hidden');
        $newWord.removeClass('is-hidden').addClass('is-visible');
    }
});

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function (a, b, c, d) { function e(b, c) { this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) { this._handlers[c] = a.proxy(this[c], this) }, this)), a.each(e.Plugins, a.proxy(function (a, b) { this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this) }, this)), a.each(e.Workers, a.proxy(function (b, c) { this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) }) }, this)), this.setup(), this.initialize() } e.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, checkVisibility: !0, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, fallbackEasing: "swing", slideTransition: "", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Type = { Event: "event", State: "state" }, e.Plugins = {}, e.Workers = [{ filter: ["width", "settings"], run: function () { this._width = this.$element.width() } }, { filter: ["width", "items", "settings"], run: function (a) { a.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function () { this.$stage.children(".cloned").remove() } }, { filter: ["width", "items", "settings"], run: function (a) { var b = this.settings.margin || "", c = !this.settings.autoWidth, d = this.settings.rtl, e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b }; !c && this.$stage.children().css(e), a.css = e } }, { filter: ["width", "items", "settings"], run: function (a) { var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, c = null, d = this._items.length, e = !this.settings.autoWidth, f = []; for (a.items = { merge: !1, width: b }; d--;)c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width(); this._widths = f } }, { filter: ["items", "settings"], run: function () { var b = [], c = this._items, d = this.settings, e = Math.max(2 * d.items, 4), f = 2 * Math.ceil(c.length / 2), g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0, h = "", i = ""; for (g /= 2; g > 0;)b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, g -= 1; this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage) } }, { filter: ["width", "items", "settings"], run: function () { for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;)d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a); this._coordinates = f } }, { filter: ["width", "items", "settings"], run: function () { var a = this.settings.stagePadding, b = this._coordinates, c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" }; this.$stage.css(c) } }, { filter: ["width", "items", "settings"], run: function (a) { var b = this._coordinates.length, c = !this.settings.autoWidth, d = this.$stage.children(); if (c && a.items.merge) for (; b--;)a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css); else c && (a.css.width = a.items.width, d.css(a.css)) } }, { filter: ["items"], run: function () { this._coordinates.length < 1 && this.$stage.removeAttr("style") } }, { filter: ["width", "items", "settings"], run: function (a) { a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current) } }, { filter: ["position"], run: function () { this.animate(this.coordinates(this._current)) } }, { filter: ["width", "position", "items", "settings"], run: function () { var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = []; for (c = 0, d = this._coordinates.length; c < d; c++)a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c); this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center") } }], e.prototype.initializeStage = function () { this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ">", { class: this.settings.stageClass }).wrap(a("<div/>", { class: this.settings.stageOuterClass })), this.$element.append(this.$stage.parent())) }, e.prototype.initializeItems = function () { var b = this.$element.find(".owl-item"); if (b.length) return this._items = b.get().map(function (b) { return a(b) }), this._mergers = this._items.map(function () { return 1 }), void this.refresh(); this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass) }, e.prototype.initialize = function () { if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) { var a, b, c; a = this.$element.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.$element.children(b).width(), a.length && c <= 0 && this.preloadAutoWidthImages(a) } this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized") }, e.prototype.isVisible = function () { return !this.settings.checkVisibility || this.$element.is(":visible") }, e.prototype.setup = function () { var b = this.viewport(), c = this.options.responsive, d = -1, e = null; c ? (a.each(c, function (a) { a <= b && a > d && (d = Number(a)) }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: e } }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } }) }, e.prototype.optionsLogic = function () { this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, e.prototype.prepare = function (b) { var c = this.trigger("prepare", { content: b }); return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", { content: c.data }), c.data }, e.prototype.update = function () { for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) { return this[a] }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++; this._invalidated = {}, !this.is("valid") && this.enter("valid") }, e.prototype.width = function (a) { switch (a = a || e.Width.Default) { case e.Width.Inner: case e.Width.Outer: return this._width; default: return this._width - 2 * this.settings.stagePadding + this.settings.margin } }, e.prototype.refresh = function () { this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed") }, e.prototype.onThrottledResize = function () { b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate) }, e.prototype.onResize = function () { return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))))) }, e.prototype.registerEventHandlers = function () { a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () { return !1 })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this))) }, e.prototype.onDragStart = function (b) { var d = null; 3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }) : (d = this.$stage.position(), d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) { var d = this.difference(this._drag.pointer, this.pointer(b)); a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag")) }, this))) }, e.prototype.onDragMove = function (a) { var b = null, c = null, d = null, e = this.difference(this._drag.pointer, this.pointer(a)), f = this.difference(this._drag.stage.start, e); this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x)) }, e.prototype.onDragEnd = function (b) { var d = this.difference(this._drag.pointer, this.pointer(b)), e = this._drag.stage.current, f = d.x > 0 ^ this.settings.rtl ? "left" : "right"; a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () { return !1 })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged")) }, e.prototype.closest = function (b, c) { var e = -1, f = 30, g = this.width(), h = this.coordinates(); return this.settings.freeDrag || a.each(h, a.proxy(function (a, i) { return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e }, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), e }, e.prototype.animate = function (b) { var c = this.speed() > 0; this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "") }) : c ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: b + "px" }) }, e.prototype.is = function (a) { return this._states.current[a] && this._states.current[a] > 0 }, e.prototype.current = function (a) { if (a === d) return this._current; if (0 === this._items.length) return d; if (a = this.normalize(a), this._current !== a) { var b = this.trigger("change", { property: { name: "position", value: a } }); b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } }) } return this._current }, e.prototype.invalidate = function (b) { return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) { return b }) }, e.prototype.reset = function (a) { (a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"])) }, e.prototype.normalize = function (a, b) { var c = this._items.length, e = b ? 0 : this._clones.length; return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a }, e.prototype.relative = function (a) { return a -= this._clones.length / 2, this.normalize(a, !0) }, e.prototype.maximum = function (a) { var b, c, d, e = this.settings, f = this._coordinates.length; if (e.loop) f = this._clones.length / 2 + this._items.length - 1; else if (e.autoWidth || e.merge) { if (b = this._items.length) for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d);); f = b + 1 } else f = e.center ? this._items.length - 1 : this._items.length - e.items; return a && (f -= this._clones.length / 2), Math.max(f, 0) }, e.prototype.minimum = function (a) { return a ? 0 : this._clones.length / 2 }, e.prototype.items = function (a) { return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]) }, e.prototype.mergers = function (a) { return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]) }, e.prototype.clones = function (b) { var c = this._clones.length / 2, e = c + this._items.length, f = function (a) { return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2 }; return b === d ? a.map(this._clones, function (a, b) { return f(b) }) : a.map(this._clones, function (a, c) { return a === b ? f(c) : null }) }, e.prototype.speed = function (a) { return a !== d && (this._speed = a), this._speed }, e.prototype.coordinates = function (b) { var c, e = 1, f = b - 1; return b === d ? a.map(this._coordinates, a.proxy(function (a, b) { return this.coordinates(b) }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c)) }, e.prototype.duration = function (a, b, c) { return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed) }, e.prototype.to = function (a, b) { var c = this.current(), d = null, e = a - this.relative(c), f = (e > 0) - (e < 0), g = this._items.length, h = this.minimum(), i = this.maximum(); this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update() }, e.prototype.next = function (a) { a = a || !1, this.to(this.relative(this.current()) + 1, a) }, e.prototype.prev = function (a) { a = a || !1, this.to(this.relative(this.current()) - 1, a) }, e.prototype.onTransitionEnd = function (a) { if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1; this.leave("animating"), this.trigger("translated") }, e.prototype.viewport = function () { var d; return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d }, e.prototype.replace = function (b) { this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () { return 1 === this.nodeType }).each(a.proxy(function (a, b) { b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, e.prototype.add = function (b, c) { var e = this.relative(this._current); c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", { content: b, position: c }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", { content: b, position: c }) }, e.prototype.remove = function (a) { (a = this.normalize(a, !0)) !== d && (this.trigger("remove", { content: this._items[a], position: a }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a })) }, e.prototype.preloadAutoWidthImages = function (b) { b.each(a.proxy(function (b, c) { this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function (a) { c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh() }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina")) }, this)) }, e.prototype.destroy = function () { this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize)); for (var d in this._plugins) this._plugins[d].destroy(); this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel") }, e.prototype.op = function (a, b, c) { var d = this.settings.rtl; switch (b) { case "<": return d ? a > c : a < c; case ">": return d ? a < c : a > c; case ">=": return d ? a <= c : a >= c; case "<=": return d ? a >= c : a <= c } }, e.prototype.on = function (a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c) }, e.prototype.off = function (a, b, c, d) { a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c) }, e.prototype.trigger = function (b, c, d, f, g) { var h = { item: { count: this._items.length, index: this.current() } }, i = a.camelCase(a.grep(["on", b, d], function (a) { return a }).join("-").toLowerCase()), j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c)); return this._supress[b] || (a.each(this._plugins, function (a, b) { b.onTrigger && b.onTrigger(j) }), this.register({ type: e.Type.Event, name: b }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j }, e.prototype.enter = function (b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) { this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++ }, this)) }, e.prototype.leave = function (b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) { this._states.current[b]-- }, this)) }, e.prototype.register = function (b) { if (b.type === e.Type.Event) { if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) { var c = a.event.special[b.name]._default; a.event.special[b.name]._default = function (a) { return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments) }, a.event.special[b.name].owl = !0 } } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) { return a.inArray(c, this._states.tags[b.name]) === d }, this))) }, e.prototype.suppress = function (b) { a.each(b, a.proxy(function (a, b) { this._supress[b] = !0 }, this)) }, e.prototype.release = function (b) { a.each(b, a.proxy(function (a, b) { delete this._supress[b] }, this)) }, e.prototype.pointer = function (a) { var c = { x: null, y: null }; return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c }, e.prototype.isNumeric = function (a) { return !isNaN(parseFloat(a)) }, e.prototype.difference = function (a, b) { return { x: a.x - b.x, y: a.y - b.y } }, a.fn.owlCarousel = function (b) { var c = Array.prototype.slice.call(arguments, 1); return this.each(function () { var d = a(this), f = d.data("owl.carousel"); f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) { f.register({ type: e.Type.Event, name: c }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) { a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c])) }, f)) })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c) }) }, a.fn.owlCarousel.Constructor = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { var e = function (b) { this._core = b, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": a.proxy(function (a) { a.namespace && this._core.settings.autoRefresh && this.watch() }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) }; e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }, e.prototype.watch = function () { this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)) }, e.prototype.refresh = function () { this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh()) }, e.prototype.destroy = function () { var a, c; b.clearInterval(this._interval); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { var e = function (b) { this._core = b, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) { if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) { var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && -1 * e || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) { this.load(b) }, this); for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager, c.loop && (g -= c.lazyLoadEager, e++)); f++ < e;)this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++ } }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) }; e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }, e.prototype.load = function (c) { var d = this._core.$stage.children().eq(c), e = d && d.find(".owl-lazy"); !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) { var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset"); this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () { f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function () { this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this)).attr("srcset", g) : (e = new Image, e.onload = a.proxy(function () { f.css({ "background-image": 'url("' + g + '")', opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this), e.src = g) }, this)), this._loaded.push(d.get(0))) }, e.prototype.destroy = function () { var a, b; for (a in this.handlers) this._core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { var e = function (c) { this._core = c, this._previousHeight = null, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) { a.namespace && this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": a.proxy(function (a) { a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update() }, this), "loaded.owl.lazy": a.proxy(function (a) { a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update() }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null; var d = this; a(b).on("load", function () { d._core.settings.autoHeight && d.update() }), a(b).resize(function () { d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), d._intervalId = setTimeout(function () { d.update() }, 250)) }) }; e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, e.prototype.update = function () { var b = this._core._current, c = b + this._core.settings.items, d = this._core.settings.lazyLoad, e = this._core.$stage.children().toArray().slice(b, c), f = [], g = 0; a.each(e, function (b, c) { f.push(a(c).height()) }), g = Math.max.apply(null, f), g <= 1 && d && this._previousHeight && (g = this._previousHeight), this._previousHeight = g, this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass) }, e.prototype.destroy = function () { var a, b; for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { var e = function (b) { this._core = b, this._videos = {}, this._playing = null, this._handlers = { "initialized.owl.carousel": a.proxy(function (a) { a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] }) }, this), "resize.owl.carousel": a.proxy(function (a) { a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault() }, this), "refreshed.owl.carousel": a.proxy(function (a) { a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove() }, this), "changed.owl.carousel": a.proxy(function (a) { a.namespace && "position" === a.property.name && this._playing && this.stop() }, this), "prepared.owl.carousel": a.proxy(function (b) { if (b.namespace) { var c = a(b.content).find(".owl-video"); c.length && (c.css("display", "none"), this.fetch(c, a(b.content))) } }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) { this.play(a) }, this)) }; e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, e.prototype.fetch = function (a, b) { var c = function () { return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube" }(), d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"), e = a.attr("data-width") || this._core.settings.videoWidth, f = a.attr("data-height") || this._core.settings.videoHeight, g = a.attr("href"); if (!g) throw new Error("Missing video URL."); if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube"; else if (d[3].indexOf("vimeo") > -1) c = "vimeo"; else { if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported."); c = "vzaar" } d = d[6], this._videos[g] = { type: c, id: d, width: e, height: f }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]) }, e.prototype.thumbnail = function (b, c) { var d, e, f, g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function (c) { e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? a("<div/>", { class: "owl-video-tn " + j, srcType: c }) : a("<div/>", { class: "owl-video-tn", style: "opacity:1;background-image:url(" + c + ")" }), b.after(d), b.after(e) }; if (b.wrap(a("<div/>", { class: "owl-video-wrapper", style: g })), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1; "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function (a) { f = a[0].thumbnail_large, l(f) } }) : "vzaar" === c.type && a.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function (a) { f = a.framegrab_url, l(f) } }) }, e.prototype.stop = function () { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video") }, e.prototype.play = function (b) { var c, d = a(b.target), e = d.closest("." + this._core.settings.itemClass), f = this._videos[e.attr("data-video")], g = f.width || "100%", h = f.height || this._core.$stage.height(); this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), c.attr("height", h), c.attr("width", g), "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"), a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing")) }, e.prototype.isInFullScreen = function () { var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement; return b && a(b).parent().hasClass("owl-video-frame") }, e.prototype.destroy = function () { var a, b; this._core.$element.off("click.owl.video"); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Video = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) { this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function (a) { a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) { a.namespace && (this.swapping = "translated" == a.type) }, this), "translate.owl.carousel": a.proxy(function (a) { a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) }; e.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, e.prototype.swap = function () { if (1 === this.core.settings.items && a.support.animation && a.support.transition) { this.core.speed(0); var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut; this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f)) } }, e.prototype.clear = function (b) { a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd() }, e.prototype.destroy = function () { var a, b; for (a in this.handlers) this.core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { var e = function (b) { this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = { "changed.owl.carousel": a.proxy(function (a) { a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0) }, this), "initialized.owl.carousel": a.proxy(function (a) { a.namespace && this._core.settings.autoplay && this.play() }, this), "play.owl.autoplay": a.proxy(function (a, b, c) { a.namespace && this.play(b, c) }, this), "stop.owl.autoplay": a.proxy(function (a) { a.namespace && this.stop() }, this), "mouseover.owl.autoplay": a.proxy(function () { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "mouseleave.owl.autoplay": a.proxy(function () { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play() }, this), "touchstart.owl.core": a.proxy(function () { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "touchend.owl.core": a.proxy(function () { this._core.settings.autoplayHoverPause && this.play() }, this) }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options) }; e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, e.prototype._next = function (d) { this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed) }, e.prototype.read = function () { return (new Date).getTime() - this._time }, e.prototype.play = function (c, d) { var e; this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e) }, e.prototype.stop = function () { this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), this._core.leave("rotating")) }, e.prototype.pause = function () { this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, b.clearTimeout(this._call)) }, e.prototype.destroy = function () { var a, b; this.stop(); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { "use strict"; var e = function (b) { this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": a.proxy(function (b) { b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>") }, this), "added.owl.carousel": a.proxy(function (a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop()) }, this), "remove.owl.carousel": a.proxy(function (a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1) }, this), "changed.owl.carousel": a.proxy(function (a) { a.namespace && "position" == a.property.name && this.draw() }, this), "initialized.owl.carousel": a.proxy(function (a) { a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation")) }, this), "refreshed.owl.carousel": a.proxy(function (a) { a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")) }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers) }; e.Defaults = { nav: !1, navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'], navSpeed: !1, navElement: 'button type="button" role="presentation"', navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 }, e.prototype.initialize = function () { var b, c = this._core.settings; this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) { this.prev(c.navSpeed) }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) { this.next(c.navSpeed) }, this)), c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", a.proxy(function (b) { var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index(); b.preventDefault(), this.to(d, c.dotsSpeed) }, this)); for (b in this._overrides) this._core[b] = a.proxy(this[b], this) }, e.prototype.destroy = function () { var a, b, c, d, e; e = this._core.settings; for (a in this._handlers) this.$element.off(a, this._handlers[a]); for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove(); for (d in this.overides) this._core[d] = this._overrides[d]; for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, e.prototype.update = function () { var a, b, c, d = this._core.clones().length / 2, e = d + this._core.items().length, f = this._core.maximum(!0), g = this._core.settings, h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items; if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) { if (b >= h || 0 === b) { if (this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f) break; b = 0, ++c } b += this._core.mergers(this._core.relative(a)) } }, e.prototype.draw = function () { var b, c = this._core.settings, d = this._core.items().length <= c.items, e = this._core.relative(this._core.current()), f = c.loop || c.rewind; this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active")) }, e.prototype.onTrigger = function (b) { var c = this._core.settings; b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) } }, e.prototype.current = function () { var b = this._core.relative(this._core.current()); return a.grep(this._pages, a.proxy(function (a, c) { return a.start <= b && a.end >= b }, this)).pop() }, e.prototype.getPosition = function (b) { var c, d, e = this._core.settings; return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c }, e.prototype.next = function (b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b) }, e.prototype.prev = function (b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b) }, e.prototype.to = function (b, c, d) { var e; !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c) }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { "use strict"; var e = function (c) { this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": a.proxy(function (c) { c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation") }, this), "prepared.owl.carousel": a.proxy(function (b) { if (b.namespace) { var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash"); if (!c) return; this._hashes[c] = b.content } }, this), "changed.owl.carousel": a.proxy(function (c) { if (c.namespace && "position" === c.property.name) { var d = this._core.items(this._core.relative(this._core.current())), e = a.map(this._hashes, function (a, b) { return a === d ? b : null }).join(); if (!e || b.location.hash.slice(1) === e) return; b.location.hash = e } }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) { var c = b.location.hash.substring(1), e = this._core.$stage.children(), f = this._hashes[c] && e.index(this._hashes[c]); f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0) }, this)) }; e.Defaults = { URLhashListener: !1 }, e.prototype.destroy = function () { var c, d; a(b).off("hashchange.owl.navigation"); for (c in this._handlers) this._core.$element.off(c, this._handlers[c]); for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null) }, a.fn.owlCarousel.Constructor.Plugins.Hash = e }(window.Zepto || window.jQuery, window, document), function (a, b, c, d) { function e(b, c) { var e = !1, f = b.charAt(0).toUpperCase() + b.slice(1); return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) { if (g[b] !== d) return e = !c || b, !1 }), e } function f(a) { return e(a, !0) } var g = a("<support>").get(0).style, h = "Webkit Moz O ms".split(" "), i = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } }, j = { csstransforms: function () { return !!e("transform") }, csstransforms3d: function () { return !!e("perspective") }, csstransitions: function () { return !!e("transition") }, cssanimations: function () { return !!e("animation") } }; j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d()) }(window.Zepto || window.jQuery, window, document);
/*
 * fitty v2.2.5 - Snugly resizes text to fit its parent container
 * Copyright (c) 2017 Rik Schennink <hello@rikschennink.nl> (http://rikschennink.nl/)
 */
!function (e, t) { if ("function" == typeof define && define.amd) define(["module", "exports"], t); else if ("undefined" != typeof exports) t(module, exports); else { var n = { exports: {} }; t(n, n.exports), e.fitty = n.exports } }(this, function (e, t) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var n = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]) } return e }; t.default = function (e) { function t(e, t) { var i = n({}, F, t), r = e.map(function (e) { var t = n({}, i, { element: e }); return S(t), T(t), { element: e, fit: b(t, o.DIRTY), unsubscribe: w(t) } }); return l(), r } function i(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return "string" == typeof e ? t(r(document.querySelectorAll(e)), n) : t([e], n)[0] } if (e) { var r = function (e) { return [].slice.call(e) }, o = { IDLE: 0, DIRTY_CONTENT: 1, DIRTY_LAYOUT: 2, DIRTY: 3 }, u = [], a = null, l = "requestAnimationFrame" in e ? function () { e.cancelAnimationFrame(a), a = e.requestAnimationFrame(function () { s(u.filter(function (e) { return e.dirty })) }) } : function () { }, c = function (e) { return function () { u.forEach(function (t) { t.dirty = e }), l() } }, s = function (e) { e.filter(function (e) { return !e.styleComputed }).forEach(function (e) { e.styleComputed = p(e) }), e.filter(m).forEach(y), e.filter(d).forEach(f), e.forEach(v), e.forEach(h) }, f = function (e) { e.availableWidth = e.element.parentNode.clientWidth, e.currentWidth = e.element.scrollWidth, e.previousFontSize = e.currentFontSize, e.currentFontSize = Math.min(Math.max(e.minSize, e.availableWidth / e.currentWidth * e.previousFontSize), e.maxSize), e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? "normal" : "nowrap" }, d = function (e) { return e.dirty !== o.DIRTY_LAYOUT || e.dirty === o.DIRTY_LAYOUT && e.element.parentNode.clientWidth !== e.availableWidth }, p = function (t) { var n = e.getComputedStyle(t.element, null); t.currentFontSize = parseInt(n.getPropertyValue("font-size"), 10), t.display = n.getPropertyValue("display"), t.whiteSpace = n.getPropertyValue("white-space") }, m = function (e) { var t = !1; return /inline-/.test(e.display) || (t = !0, e.display = "inline-block"), "nowrap" !== e.whiteSpace && (t = !0, e.whiteSpace = "nowrap"), t }, v = function (e) { y(e), e.dirty = o.IDLE }, y = function (e) { e.originalStyle || (e.originalStyle = e.element.getAttribute("style") || ""), e.element.style.cssText = e.originalStyle + ";white-space:" + e.whiteSpace + ";display:" + e.display + ";font-size:" + e.currentFontSize + "px" }, h = function (e) { e.element.dispatchEvent(new CustomEvent("fit", { detail: { oldValue: e.previousFontSize, newValue: e.currentFontSize, scaleFactor: e.currentFontSize / e.previousFontSize } })) }, b = function (e, t) { return function () { e.dirty = t, l() } }, S = function (e) { e.newbie = !0, e.dirty = !0, u.push(e) }, w = function (e) { return function () { u = u.filter(function (t) { return t.element !== e.element }), e.observeMutations && e.observer.disconnect(), e.element.style.cssText = e.originalStyle } }, T = function (e) { e.observeMutations && (e.observer = new MutationObserver(b(e, o.DIRTY_CONTENT)), e.observer.observe(e.element, e.observeMutations)) }, z = { subtree: !0, childList: !0, characterData: !0 }, F = { minSize: 16, maxSize: 512, multiLine: !0, observeMutations: "MutationObserver" in e && z }, g = null, D = function () { e.clearTimeout(g), g = e.setTimeout(c(o.DIRTY_LAYOUT), i.observeWindowDelay) }, E = ["resize", "orientationchange"]; return Object.defineProperty(i, "observeWindow", { set: function (t) { var n = (t ? "add" : "remove") + "EventListener"; E.forEach(function (t) { e[n](t, D) }) } }), i.observeWindow = !0, i.observeWindowDelay = 100, i.fitAll = c(o.DIRTY), i } }("undefined" == typeof window ? null : window), e.exports = t.default });
/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

!function (a) { function b() { } function c(a) { function c(b) { b.prototype.option || (b.prototype.option = function (b) { a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b)) }) } function e(b, c) { a.fn[b] = function (e) { if ("string" == typeof e) { for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) { var j = this[h], k = a.data(j, b); if (k) if (a.isFunction(k[e]) && "_" !== e.charAt(0)) { var l = k[e].apply(k, g); if (void 0 !== l) return l } else f("no such method '" + e + "' for " + b + " instance"); else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'") } return this } return this.each(function () { var d = a.data(this, b); d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d)) }) } } if (a) { var f = "undefined" == typeof console ? b : function (a) { console.error(a) }; return a.bridget = function (a, b) { c(b), e(a, b) }, a.bridget } } var d = Array.prototype.slice; "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery) }(window), function (a) { function b(b) { var c = a.event; return c.target = c.target || c.srcElement || b, c } var c = document.documentElement, d = function () { }; c.addEventListener ? d = function (a, b, c) { a.addEventListener(b, c, !1) } : c.attachEvent && (d = function (a, c, d) { a[c + d] = d.handleEvent ? function () { var c = b(a); d.handleEvent.call(d, c) } : function () { var c = b(a); d.call(a, c) }, a.attachEvent("on" + c, a[c + d]) }); var e = function () { }; c.removeEventListener ? e = function (a, b, c) { a.removeEventListener(b, c, !1) } : c.detachEvent && (e = function (a, b, c) { a.detachEvent("on" + b, a[b + c]); try { delete a[b + c] } catch (d) { a[b + c] = void 0 } }); var f = { bind: d, unbind: e }; "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f }(window), function () { "use strict"; function a() { } function b(a, b) { for (var c = a.length; c--;)if (a[c].listener === b) return c; return -1 } function c(a) { return function () { return this[a].apply(this, arguments) } } var d = a.prototype, e = this, f = e.EventEmitter; d.getListeners = function (a) { var b, c, d = this._getEvents(); if (a instanceof RegExp) { b = {}; for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c]) } else b = d[a] || (d[a] = []); return b }, d.flattenListeners = function (a) { var b, c = []; for (b = 0; b < a.length; b += 1)c.push(a[b].listener); return c }, d.getListenersAsObject = function (a) { var b, c = this.getListeners(a); return c instanceof Array && (b = {}, b[a] = c), b || c }, d.addListener = function (a, c) { var d, e = this.getListenersAsObject(a), f = "object" == typeof c; for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : { listener: c, once: !1 }); return this }, d.on = c("addListener"), d.addOnceListener = function (a, b) { return this.addListener(a, { listener: b, once: !0 }) }, d.once = c("addOnceListener"), d.defineEvent = function (a) { return this.getListeners(a), this }, d.defineEvents = function (a) { for (var b = 0; b < a.length; b += 1)this.defineEvent(a[b]); return this }, d.removeListener = function (a, c) { var d, e, f = this.getListenersAsObject(a); for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1)); return this }, d.off = c("removeListener"), d.addListeners = function (a, b) { return this.manipulateListeners(!1, a, b) }, d.removeListeners = function (a, b) { return this.manipulateListeners(!0, a, b) }, d.manipulateListeners = function (a, b, c) { var d, e, f = a ? this.removeListener : this.addListener, g = a ? this.removeListeners : this.addListeners; if ("object" != typeof b || b instanceof RegExp) for (d = c.length; d--;)f.call(this, b, c[d]); else for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e)); return this }, d.removeEvent = function (a) { var b, c = typeof a, d = this._getEvents(); if ("string" === c) delete d[a]; else if (a instanceof RegExp) for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b]; else delete this._events; return this }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) { var c, d, e, f, g = this.getListenersAsObject(a); for (e in g) if (g.hasOwnProperty(e)) for (d = g[e].length; d--;)c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener); return this }, d.trigger = c("emitEvent"), d.emit = function (a) { var b = Array.prototype.slice.call(arguments, 1); return this.emitEvent(a, b) }, d.setOnceReturnValue = function (a) { return this._onceReturnValue = a, this }, d._getOnceReturnValue = function () { return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0 }, d._getEvents = function () { return this._events || (this._events = {}) }, a.noConflict = function () { return e.EventEmitter = f, a }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () { return a }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a }.call(this), function (a) { function b(a) { if (a) { if ("string" == typeof d[a]) return a; a = a.charAt(0).toUpperCase() + a.slice(1); for (var b, e = 0, f = c.length; f > e; e++)if (b = c[e] + a, "string" == typeof d[b]) return b } } var c = "Webkit Moz ms Ms O".split(" "), d = document.documentElement.style; "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () { return b }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b }(window), function (a, b) { function c(a) { var b = parseFloat(a), c = -1 === a.indexOf("%") && !isNaN(b); return c && b } function d() { } function e() { for (var a = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, b = 0, c = h.length; c > b; b++) { var d = h[b]; a[d] = 0 } return a } function f(b) { function d() { if (!m) { m = !0; var d = a.getComputedStyle; if (j = function () { var a = d ? function (a) { return d(a, null) } : function (a) { return a.currentStyle }; return function (b) { var c = a(b); return c || g("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c } }(), k = b("boxSizing")) { var e = document.createElement("div"); e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box"; var f = document.body || document.documentElement; f.appendChild(e); var h = j(e); l = 200 === c(h.width), f.removeChild(e) } } } function f(a) { if (d(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) { var b = j(a); if ("none" === b.display) return e(); var f = {}; f.width = a.offsetWidth, f.height = a.offsetHeight; for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) { var o = h[m], p = b[o]; p = i(a, p); var q = parseFloat(p); f[o] = isNaN(q) ? 0 : q } var r = f.paddingLeft + f.paddingRight, s = f.paddingTop + f.paddingBottom, t = f.marginLeft + f.marginRight, u = f.marginTop + f.marginBottom, v = f.borderLeftWidth + f.borderRightWidth, w = f.borderTopWidth + f.borderBottomWidth, x = g && l, y = c(b.width); y !== !1 && (f.width = y + (x ? 0 : r + v)); var z = c(b.height); return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f } } function i(b, c) { if (a.getComputedStyle || -1 === c.indexOf("%")) return c; var d = b.style, e = d.left, f = b.runtimeStyle, g = f && f.left; return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c } var j, k, l, m = !1; return f } var g = "undefined" == typeof console ? d : function (a) { console.error(a) }, h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"]; "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], f) : "object" == typeof exports ? module.exports = f(require("desandro-get-style-property")) : a.getSize = f(a.getStyleProperty) }(window), function (a) { function b(a) { "function" == typeof a && (b.isReady ? a() : g.push(a)) } function c(a) { var c = "readystatechange" === a.type && "complete" !== f.readyState; b.isReady || c || d() } function d() { b.isReady = !0; for (var a = 0, c = g.length; c > a; a++) { var d = g[a]; d() } } function e(e) { return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b } var f = a.document, g = []; b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie) }(window), function (a) { "use strict"; function b(a, b) { return a[g](b) } function c(a) { if (!a.parentNode) { var b = document.createDocumentFragment(); b.appendChild(a) } } function d(a, b) { c(a); for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)if (d[e] === a) return !0; return !1 } function e(a, d) { return c(a), b(a, d) } var f, g = function () { if (a.matches) return "matches"; if (a.matchesSelector) return "matchesSelector"; for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) { var e = b[c], f = e + "MatchesSelector"; if (a[f]) return f } }(); if (g) { var h = document.createElement("div"), i = b(h, "div"); f = i ? b : e } else f = d; "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () { return f }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f }(Element.prototype), function (a, b) { "use strict"; "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (c, d) { return b(a, c, d) }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector) }(window, function (a, b, c) { var d = {}; d.extend = function (a, b) { for (var c in b) a[c] = b[c]; return a }, d.modulo = function (a, b) { return (a % b + b) % b }; var e = Object.prototype.toString; d.isArray = function (a) { return "[object Array]" == e.call(a) }, d.makeArray = function (a) { var b = []; if (d.isArray(a)) b = a; else if (a && "number" == typeof a.length) for (var c = 0, e = a.length; e > c; c++)b.push(a[c]); else b.push(a); return b }, d.indexOf = Array.prototype.indexOf ? function (a, b) { return a.indexOf(b) } : function (a, b) { for (var c = 0, d = a.length; d > c; c++)if (a[c] === b) return c; return -1 }, d.removeFrom = function (a, b) { var c = d.indexOf(a, b); -1 != c && a.splice(c, 1) }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (a) { return a instanceof HTMLElement } : function (a) { return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName }, d.setText = function () { function a(a, c) { b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c } var b; return a }(), d.getParent = function (a, b) { for (; a != document.body;)if (a = a.parentNode, c(a, b)) return a }, d.getQueryElement = function (a) { return "string" == typeof a ? document.querySelector(a) : a }, d.handleEvent = function (a) { var b = "on" + a.type; this[b] && this[b](a) }, d.filterFindElements = function (a, b) { a = d.makeArray(a); for (var e = [], f = 0, g = a.length; g > f; f++) { var h = a[f]; if (d.isElement(h)) if (b) { c(h, b) && e.push(h); for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++)e.push(i[j]) } else e.push(h) } return e }, d.debounceMethod = function (a, b, c) { var d = a.prototype[b], e = b + "Timeout"; a.prototype[b] = function () { var a = this[e]; a && clearTimeout(a); var b = arguments, f = this; this[e] = setTimeout(function () { d.apply(f, b), delete f[e] }, c || 100) } }, d.toDashed = function (a) { return a.replace(/(.)([A-Z])/g, function (a, b, c) { return b + "-" + c }).toLowerCase() }; var f = a.console; return d.htmlInit = function (c, e) { b(function () { for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) { var k, l = g[i], m = l.getAttribute(h); try { k = m && JSON.parse(m) } catch (n) { f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n); continue } var o = new c(l, k), p = a.jQuery; p && p.data(l, e, o) } }) }, d }), function (a, b) { "use strict"; "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (c, d, e, f) { return b(a, c, d, e, f) }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils)) }(window, function (a, b, c, d, e) { "use strict"; function f(a) { for (var b in a) return !1; return b = null, !0 } function g(a, b) { a && (this.element = a, this.layout = b, this.position = { x: 0, y: 0 }, this._create()) } function h(a) { return a.replace(/([A-Z])/g, function (a) { return "-" + a.toLowerCase() }) } var i = a.getComputedStyle, j = i ? function (a) { return i(a, null) } : function (a) { return a.currentStyle }, k = d("transition"), l = d("transform"), m = k && l, n = !!d("perspective"), o = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend" }[k], p = ["transform", "transition", "transitionDuration", "transitionProperty"], q = function () { for (var a = {}, b = 0, c = p.length; c > b; b++) { var e = p[b], f = d(e); f && f !== e && (a[e] = f) } return a }(); e.extend(g.prototype, b.prototype), g.prototype._create = function () { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, g.prototype.handleEvent = function (a) { var b = "on" + a.type; this[b] && this[b](a) }, g.prototype.getSize = function () { this.size = c(this.element) }, g.prototype.css = function (a) { var b = this.element.style; for (var c in a) { var d = q[c] || c; b[d] = a[c] } }, g.prototype.getPosition = function () { var a = j(this.element), b = this.layout.options, c = b.isOriginLeft, d = b.isOriginTop, e = a[c ? "left" : "right"], f = a[d ? "top" : "bottom"], g = this.layout.size, h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10), i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10); h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i }, g.prototype.layoutPosition = function () { var a = this.layout.size, b = this.layout.options, c = {}, d = b.isOriginLeft ? "paddingLeft" : "paddingRight", e = b.isOriginLeft ? "left" : "right", f = b.isOriginLeft ? "right" : "left", g = this.position.x + a[d]; c[e] = this.getXValue(g), c[f] = ""; var h = b.isOriginTop ? "paddingTop" : "paddingBottom", i = b.isOriginTop ? "top" : "bottom", j = b.isOriginTop ? "bottom" : "top", k = this.position.y + a[h]; c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this]) }, g.prototype.getXValue = function (a) { var b = this.layout.options; return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px" }, g.prototype.getYValue = function (a) { var b = this.layout.options; return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px" }, g.prototype._transitionTo = function (a, b) { this.getPosition(); var c = this.position.x, d = this.position.y, e = parseInt(a, 10), f = parseInt(b, 10), g = e === this.position.x && f === this.position.y; if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition(); var h = a - c, i = b - d, j = {}; j.transform = this.getTranslate(h, i), this.transition({ to: j, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 }) }, g.prototype.getTranslate = function (a, b) { var c = this.layout.options; return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)" }, g.prototype.goTo = function (a, b) { this.setPosition(a, b), this.layoutPosition() }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function (a, b) { this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10) }, g.prototype._nonTransition = function (a) { this.css(a.to), a.isCleaning && this._removeStyles(a.to); for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this) }, g.prototype._transition = function (a) { if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a); var b = this._transn; for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c]; for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0); if (a.from) { this.css(a.from); var d = this.element.offsetHeight; d = null } this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0 }; var r = "opacity," + h(q.transform || "transform"); g.prototype.enableTransition = function () { this.isTransitioning || (this.css({ transitionProperty: r, transitionDuration: this.layout.options.transitionDuration }), this.element.addEventListener(o, this, !1)) }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function (a) { this.ontransitionend(a) }, g.prototype.onotransitionend = function (a) { this.ontransitionend(a) }; var s = { "-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform" }; g.prototype.ontransitionend = function (a) { if (a.target === this.element) { var b = this._transn, c = s[a.propertyName] || a.propertyName; if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) { var d = b.onEnd[c]; d.call(this), delete b.onEnd[c] } this.emitEvent("transitionEnd", [this]) } }, g.prototype.disableTransition = function () { this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1 }, g.prototype._removeStyles = function (a) { var b = {}; for (var c in a) b[c] = ""; this.css(b) }; var t = { transitionProperty: "", transitionDuration: "" }; return g.prototype.removeTransitionStyles = function () { this.css(t) }, g.prototype.removeElem = function () { this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]) }, g.prototype.remove = function () { if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem(); var a = this; this.once("transitionEnd", function () { a.removeElem() }), this.hide() }, g.prototype.reveal = function () { delete this.isHidden, this.css({ display: "" }); var a = this.layout.options, b = {}, c = this.getHideRevealTransitionEndProperty("visibleStyle"); b[c] = this.onRevealTransitionEnd, this.transition({ from: a.hiddenStyle, to: a.visibleStyle, isCleaning: !0, onTransitionEnd: b }) }, g.prototype.onRevealTransitionEnd = function () { this.isHidden || this.emitEvent("reveal") }, g.prototype.getHideRevealTransitionEndProperty = function (a) { var b = this.layout.options[a]; if (b.opacity) return "opacity"; for (var c in b) return c }, g.prototype.hide = function () { this.isHidden = !0, this.css({ display: "" }); var a = this.layout.options, b = {}, c = this.getHideRevealTransitionEndProperty("hiddenStyle"); b[c] = this.onHideTransitionEnd, this.transition({ from: a.visibleStyle, to: a.hiddenStyle, isCleaning: !0, onTransitionEnd: b }) }, g.prototype.onHideTransitionEnd = function () { this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide")) }, g.prototype.destroy = function () { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, g }), function (a, b) { "use strict"; "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (c, d, e, f, g) { return b(a, c, d, e, f, g) }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item) }(window, function (a, b, c, d, e, f) { "use strict"; function g(a, b) { var c = e.getQueryElement(a); if (!c) return void (h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a))); this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b); var d = ++k; this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout() } var h = a.console, i = a.jQuery, j = function () { }, k = 0, l = {}; return g.namespace = "outlayer", g.Item = f, g.defaults = { containerStyle: { position: "relative" }, isInitLayout: !0, isOriginLeft: !0, isOriginTop: !0, isResizeBound: !0, isResizingContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } }, e.extend(g.prototype, c.prototype), g.prototype.option = function (a) { e.extend(this.options, a) }, g.prototype._create = function () { this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize() }, g.prototype.reloadItems = function () { this.items = this._itemize(this.element.children) }, g.prototype._itemize = function (a) { for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) { var g = b[e], h = new c(g, this); d.push(h) } return d }, g.prototype._filterFindItemElements = function (a) { return e.filterFindElements(a, this.options.itemSelector) }, g.prototype.getItemElements = function () { for (var a = [], b = 0, c = this.items.length; c > b; b++)a.push(this.items[b].element); return a }, g.prototype.layout = function () { this._resetLayout(), this._manageStamps(); var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited; this.layoutItems(this.items, a), this._isLayoutInited = !0 }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function () { this.getSize() }, g.prototype.getSize = function () { this.size = d(this.element) }, g.prototype._getMeasurement = function (a, b) { var c, f = this.options[a]; f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0 }, g.prototype.layoutItems = function (a, b) { a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout() }, g.prototype._getItemsForLayout = function (a) { for (var b = [], c = 0, d = a.length; d > c; c++) { var e = a[c]; e.isIgnored || b.push(e) } return b }, g.prototype._layoutItems = function (a, b) { if (this._emitCompleteOnItems("layout", a), a && a.length) { for (var c = [], d = 0, e = a.length; e > d; d++) { var f = a[d], g = this._getItemLayoutPosition(f); g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g) } this._processLayoutQueue(c) } }, g.prototype._getItemLayoutPosition = function () { return { x: 0, y: 0 } }, g.prototype._processLayoutQueue = function (a) { for (var b = 0, c = a.length; c > b; b++) { var d = a[b]; this._positionItem(d.item, d.x, d.y, d.isInstant) } }, g.prototype._positionItem = function (a, b, c, d) { d ? a.goTo(b, c) : a.moveTo(b, c) }, g.prototype._postLayout = function () { this.resizeContainer() }, g.prototype.resizeContainer = function () { if (this.options.isResizingContainer) { var a = this._getContainerSize(); a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1)) } }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function (a, b) { if (void 0 !== a) { var c = this.size; c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px" } }, g.prototype._emitCompleteOnItems = function (a, b) { function c() { e.dispatchEvent(a + "Complete", null, [b]) } function d() { g++, g === f && c() } var e = this, f = b.length; if (!b || !f) return void c(); for (var g = 0, h = 0, i = b.length; i > h; h++) { var j = b[h]; j.once(a, d) } }, g.prototype.dispatchEvent = function (a, b, c) { var d = b ? [b].concat(c) : c; if (this.emitEvent(a, d), i) if (this.$element = this.$element || i(this.element), b) { var e = i.Event(b); e.type = a, this.$element.trigger(e, c) } else this.$element.trigger(a, c) }, g.prototype.ignore = function (a) { var b = this.getItem(a); b && (b.isIgnored = !0) }, g.prototype.unignore = function (a) { var b = this.getItem(a); b && delete b.isIgnored }, g.prototype.stamp = function (a) { if (a = this._find(a)) { this.stamps = this.stamps.concat(a); for (var b = 0, c = a.length; c > b; b++) { var d = a[b]; this.ignore(d) } } }, g.prototype.unstamp = function (a) { if (a = this._find(a)) for (var b = 0, c = a.length; c > b; b++) { var d = a[b]; e.removeFrom(this.stamps, d), this.unignore(d) } }, g.prototype._find = function (a) { return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0 }, g.prototype._manageStamps = function () { if (this.stamps && this.stamps.length) { this._getBoundingRect(); for (var a = 0, b = this.stamps.length; b > a; a++) { var c = this.stamps[a]; this._manageStamp(c) } } }, g.prototype._getBoundingRect = function () { var a = this.element.getBoundingClientRect(), b = this.size; this._boundingRect = { left: a.left + b.paddingLeft + b.borderLeftWidth, top: a.top + b.paddingTop + b.borderTopWidth, right: a.right - (b.paddingRight + b.borderRightWidth), bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth) } }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function (a) { var b = a.getBoundingClientRect(), c = this._boundingRect, e = d(a), f = { left: b.left - c.left - e.marginLeft, top: b.top - c.top - e.marginTop, right: c.right - b.right - e.marginRight, bottom: c.bottom - b.bottom - e.marginBottom }; return f }, g.prototype.handleEvent = function (a) { var b = "on" + a.type; this[b] && this[b](a) }, g.prototype.bindResize = function () { this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0) }, g.prototype.unbindResize = function () { this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1 }, g.prototype.onresize = function () { function a() { b.resize(), delete b.resizeTimeout } this.resizeTimeout && clearTimeout(this.resizeTimeout); var b = this; this.resizeTimeout = setTimeout(a, 100) }, g.prototype.resize = function () { this.isResizeBound && this.needsResizeLayout() && this.layout() }, g.prototype.needsResizeLayout = function () { var a = d(this.element), b = this.size && a; return b && a.innerWidth !== this.size.innerWidth }, g.prototype.addItems = function (a) { var b = this._itemize(a); return b.length && (this.items = this.items.concat(b)), b }, g.prototype.appended = function (a) { var b = this.addItems(a); b.length && (this.layoutItems(b, !0), this.reveal(b)) }, g.prototype.prepended = function (a) { var b = this._itemize(a); if (b.length) { var c = this.items.slice(0); this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c) } }, g.prototype.reveal = function (a) { this._emitCompleteOnItems("reveal", a); for (var b = a && a.length, c = 0; b && b > c; c++) { var d = a[c]; d.reveal() } }, g.prototype.hide = function (a) { this._emitCompleteOnItems("hide", a); for (var b = a && a.length, c = 0; b && b > c; c++) { var d = a[c]; d.hide() } }, g.prototype.revealItemElements = function (a) { var b = this.getItems(a); this.reveal(b) }, g.prototype.hideItemElements = function (a) { var b = this.getItems(a); this.hide(b) }, g.prototype.getItem = function (a) { for (var b = 0, c = this.items.length; c > b; b++) { var d = this.items[b]; if (d.element === a) return d } }, g.prototype.getItems = function (a) { a = e.makeArray(a); for (var b = [], c = 0, d = a.length; d > c; c++) { var f = a[c], g = this.getItem(f); g && b.push(g) } return b }, g.prototype.remove = function (a) { var b = this.getItems(a); if (this._emitCompleteOnItems("remove", b), b && b.length) for (var c = 0, d = b.length; d > c; c++) { var f = b[c]; f.remove(), e.removeFrom(this.items, f) } }, g.prototype.destroy = function () { var a = this.element.style; a.height = "", a.position = "", a.width = ""; for (var b = 0, c = this.items.length; c > b; b++) { var d = this.items[b]; d.destroy() } this.unbindResize(); var e = this.element.outlayerGUID; delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace) }, g.data = function (a) { a = e.getQueryElement(a); var b = a && a.outlayerGUID; return b && l[b] }, g.create = function (a, b) { function c() { g.apply(this, arguments) } return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function () { f.apply(this, arguments) }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c }, g.Item = f, g }), function (a, b) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer)) }(window, function (a) { "use strict"; function b() { a.Item.apply(this, arguments) } b.prototype = new a.Item, b.prototype._create = function () { this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {} }, b.prototype.updateSortData = function () { if (!this.isIgnored) { this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random(); var a = this.layout.options.getSortData, b = this.layout._sorters; for (var c in a) { var d = b[c]; this.sortData[c] = d(this.element, this) } } }; var c = b.prototype.destroy; return b.prototype.destroy = function () { c.apply(this, arguments), this.css({ display: "" }) }, b }), function (a, b) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer)) }(window, function (a, b) { "use strict"; function c(a) { this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size) } return function () { function a(a) { return function () { return b.prototype[a].apply(this.isotope, arguments) } } for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) { var g = d[e]; c.prototype[g] = a(g) } }(), c.prototype.needsVerticalResizeLayout = function () { var b = a(this.isotope.element), c = this.isotope.size && b; return c && b.innerHeight != this.isotope.size.innerHeight }, c.prototype._getMeasurement = function () { this.isotope._getMeasurement.apply(this, arguments) }, c.prototype.getColumnWidth = function () { this.getSegmentSize("column", "Width") }, c.prototype.getRowHeight = function () { this.getSegmentSize("row", "Height") }, c.prototype.getSegmentSize = function (a, b) { var c = a + b, d = "outer" + b; if (this._getMeasurement(c, d), !this[c]) { var e = this.getFirstItemSize(); this[c] = e && e[d] || this.isotope.size["inner" + b] } }, c.prototype.getFirstItemSize = function () { var b = this.isotope.filteredItems[0]; return b && b.element && a(b.element) }, c.prototype.layout = function () { this.isotope.layout.apply(this.isotope, arguments) }, c.prototype.getSize = function () { this.isotope.getSize(), this.size = this.isotope.size }, c.modes = {}, c.create = function (a, b) { function d() { c.apply(this, arguments) } return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d }, c }), function (a, b) { "use strict"; "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils) }(window, function (a, b, c) { var d = a.create("masonry"); return d.prototype._resetLayout = function () { this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(); var a = this.cols; for (this.colYs = []; a--;)this.colYs.push(0); this.maxY = 0 }, d.prototype.measureColumns = function () { if (this.getContainerWidth(), !this.columnWidth) { var a = this.items[0], c = a && a.element; this.columnWidth = c && b(c).outerWidth || this.containerWidth } var d = this.columnWidth += this.gutter, e = this.containerWidth + this.gutter, f = e / d, g = d - e % d, h = g && 1 > g ? "round" : "floor"; f = Math[h](f), this.cols = Math.max(f, 1) }, d.prototype.getContainerWidth = function () { var a = this.options.isFitWidth ? this.element.parentNode : this.element, c = b(a); this.containerWidth = c && c.innerWidth }, d.prototype._getItemLayoutPosition = function (a) { a.getSize(); var b = a.size.outerWidth % this.columnWidth, d = b && 1 > b ? "round" : "ceil", e = Math[d](a.size.outerWidth / this.columnWidth); e = Math.min(e, this.cols); for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = { x: this.columnWidth * h, y: g }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++)this.colYs[h + l] = j; return i }, d.prototype._getColGroup = function (a) { if (2 > a) return this.colYs; for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) { var e = this.colYs.slice(d, d + a); b[d] = Math.max.apply(Math, e) } return b }, d.prototype._manageStamp = function (a) { var c = b(a), d = this._getElementOffset(a), e = this.options.isOriginLeft ? d.left : d.right, f = e + c.outerWidth, g = Math.floor(e / this.columnWidth); g = Math.max(0, g); var h = Math.floor(f / this.columnWidth); h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h); for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++)this.colYs[j] = Math.max(i, this.colYs[j]) }, d.prototype._getContainerSize = function () { this.maxY = Math.max.apply(Math, this.colYs); var a = { height: this.maxY }; return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a }, d.prototype._getContainerFitWidth = function () { for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];)a++; return (this.cols - a) * this.columnWidth - this.gutter }, d.prototype.needsResizeLayout = function () { var a = this.containerWidth; return this.getContainerWidth(), a !== this.containerWidth }, d }), function (a, b) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry) }(window, function (a, b) {
    "use strict"; function c(a, b) { for (var c in b) a[c] = b[c]; return a } var d = a.create("masonry"), e = d.prototype._getElementOffset, f = d.prototype.layout, g = d.prototype._getMeasurement;
    c(d.prototype, b.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g; var h = d.prototype.measureColumns; d.prototype.measureColumns = function () { this.items = this.isotope.filteredItems, h.call(this) }; var i = d.prototype._manageStamp; return d.prototype._manageStamp = function () { this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments) }, d
}), function (a, b) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode) }(window, function (a) { "use strict"; var b = a.create("fitRows"); return b.prototype._resetLayout = function () { this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth") }, b.prototype._getItemLayoutPosition = function (a) { a.getSize(); var b = a.size.outerWidth + this.gutter, c = this.isotope.size.innerWidth + this.gutter; 0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY); var d = { x: this.x, y: this.y }; return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d }, b.prototype._getContainerSize = function () { return { height: this.maxY } }, b }), function (a, b) { "use strict"; "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode) }(window, function (a) { "use strict"; var b = a.create("vertical", { horizontalAlignment: 0 }); return b.prototype._resetLayout = function () { this.y = 0 }, b.prototype._getItemLayoutPosition = function (a) { a.getSize(); var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment, c = this.y; return this.y += a.size.outerHeight, { x: b, y: c } }, b.prototype._getContainerSize = function () { return { height: this.y } }, b }), function (a, b) { "use strict"; "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (c, d, e, f, g, h) { return b(a, c, d, e, f, g, h) }) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode) }(window, function (a, b, c, d, e, f, g) { function h(a, b) { return function (c, d) { for (var e = 0, f = a.length; f > e; e++) { var g = a[e], h = c.sortData[g], i = d.sortData[g]; if (h > i || i > h) { var j = void 0 !== b[g] ? b[g] : b, k = j ? 1 : -1; return (h > i ? 1 : -1) * k } } return 0 } } var i = a.jQuery, j = String.prototype.trim ? function (a) { return a.trim() } : function (a) { return a.replace(/^\s+|\s+$/g, "") }, k = document.documentElement, l = k.textContent ? function (a) { return a.textContent } : function (a) { return a.innerText }, m = b.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 }); m.Item = f, m.LayoutMode = g, m.prototype._create = function () { this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"]; for (var a in g.modes) this._initLayoutMode(a) }, m.prototype.reloadItems = function () { this.itemGUID = 0, b.prototype.reloadItems.call(this) }, m.prototype._itemize = function () { for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) { var e = a[c]; e.id = this.itemGUID++ } return this._updateItemsSortData(a), a }, m.prototype._initLayoutMode = function (a) { var b = g.modes[a], c = this.options[a] || {}; this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this) }, m.prototype.layout = function () { return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout() }, m.prototype._layout = function () { var a = this._getIsInstant(); this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0 }, m.prototype.arrange = function (a) { function b() { d.reveal(c.needReveal), d.hide(c.needHide) } this.option(a), this._getIsInstant(); var c = this._filter(this.items); this.filteredItems = c.matches; var d = this; this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout() }, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function () { var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited; return this._isInstant = a, a }, m.prototype._bindArrangeComplete = function () { function a() { b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems]) } var b, c, d, e = this; this.once("layoutComplete", function () { b = !0, a() }), this.once("hideComplete", function () { c = !0, a() }), this.once("revealComplete", function () { d = !0, a() }) }, m.prototype._filter = function (a) { var b = this.options.filter; b = b || "*"; for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) { var i = a[g]; if (!i.isIgnored) { var j = f(i); j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i) } } return { matches: c, needReveal: d, needHide: e } }, m.prototype._getFilterTest = function (a) { return i && this.options.isJQueryFiltering ? function (b) { return i(b.element).is(a) } : "function" == typeof a ? function (b) { return a(b.element) } : function (b) { return d(b.element, a) } }, m.prototype.updateSortData = function (a) { var b; a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b) }, m.prototype._getSorters = function () { var a = this.options.getSortData; for (var b in a) { var c = a[b]; this._sorters[b] = n(c) } }, m.prototype._updateItemsSortData = function (a) { for (var b = a && a.length, c = 0; b && b > c; c++) { var d = a[c]; d.updateSortData() } }; var n = function () { function a(a) { if ("string" != typeof a) return a; var c = j(a).split(" "), d = c[0], e = d.match(/^\[(.+)\]$/), f = e && e[1], g = b(f, d), h = m.sortDataParsers[c[1]]; return a = h ? function (a) { return a && h(g(a)) } : function (a) { return a && g(a) } } function b(a, b) { var c; return c = a ? function (b) { return b.getAttribute(a) } : function (a) { var c = a.querySelector(b); return c && l(c) } } return a }(); m.sortDataParsers = { parseInt: function (a) { return parseInt(a, 10) }, parseFloat: function (a) { return parseFloat(a) } }, m.prototype._sort = function () { var a = this.options.sortBy; if (a) { var b = [].concat.apply(a, this.sortHistory), c = h(b, this.options.sortAscending); this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a) } }, m.prototype._mode = function () { var a = this.options.layoutMode, b = this.modes[a]; if (!b) throw new Error("No layout mode: " + a); return b.options = this.options[a], b }, m.prototype._resetLayout = function () { b.prototype._resetLayout.call(this), this._mode()._resetLayout() }, m.prototype._getItemLayoutPosition = function (a) { return this._mode()._getItemLayoutPosition(a) }, m.prototype._manageStamp = function (a) { this._mode()._manageStamp(a) }, m.prototype._getContainerSize = function () { return this._mode()._getContainerSize() }, m.prototype.needsResizeLayout = function () { return this._mode().needsResizeLayout() }, m.prototype.appended = function (a) { var b = this.addItems(a); if (b.length) { var c = this._filterRevealAdded(b); this.filteredItems = this.filteredItems.concat(c) } }, m.prototype.prepended = function (a) { var b = this._itemize(a); if (b.length) { this._resetLayout(), this._manageStamps(); var c = this._filterRevealAdded(b); this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items) } }, m.prototype._filterRevealAdded = function (a) { var b = this._filter(a); return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches }, m.prototype.insert = function (a) { var b = this.addItems(a); if (b.length) { var c, d, e = b.length; for (c = 0; e > c; c++)d = b[c], this.element.appendChild(d.element); var f = this._filter(b).matches; for (c = 0; e > c; c++)b[c].isLayoutInstant = !0; for (this.arrange(), c = 0; e > c; c++)delete b[c].isLayoutInstant; this.reveal(f) } }; var o = m.prototype.remove; return m.prototype.remove = function (a) { a = e.makeArray(a); var b = this.getItems(a); o.call(this, a); var c = b && b.length; if (c) for (var d = 0; c > d; d++) { var f = b[d]; e.removeFrom(this.filteredItems, f) } }, m.prototype.shuffle = function () { for (var a = 0, b = this.items.length; b > a; a++) { var c = this.items[a]; c.sortData.random = Math.random() } this.options.sortBy = "random", this._sort(), this._layout() }, m.prototype._noTransition = function (a) { var b = this.options.transitionDuration; this.options.transitionDuration = 0; var c = a.call(this); return this.options.transitionDuration = b, c }, m.prototype.getFilteredItemElements = function () { for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++)a.push(this.filteredItems[b].element); return a }, m });
/**
 * moduloColumns layout mode for Isotope 2
 * This layout mode does currently not support stamping
 * @author Michiel de Wit <mail@michieldewit.nl>
 */
(function (window) {

    'use strict';

    function moduloColumnsLayoutModeDefinition(LayoutMode) {
        var ModuloColumns = LayoutMode.create('moduloColumns');

        /**
         * Called every time the layout if reevaluated
         */
        ModuloColumns.prototype._resetLayout = function () {
            // Get column width and gutter size
            this.getColumnWidth();
            this._getMeasurement('gutter', 'outerHeight');
            this.getSize()

            // Add gutter and adjust column width/count accordingly
            var gutter = this.options.gutter || 0;
            var containerWidth = this.size.innerWidth;
            this.columnWidth += gutter;
            var cols = this.cols = Math.floor((containerWidth + gutter) / this.columnWidth) || 1;

            // Initialize column heights to zero
            this.columnHeights = [];
            while (cols--) this.columnHeights.push(0);
            this.currentColumn = 0;
        };

        /**
         * Determines the position for each consecutive element
         * @param item Item to be positioned.
         * @returns {{x: number, y: number}}
         */
        ModuloColumns.prototype._getItemLayoutPosition = function (item) {
            // Determine item size
            item.getSize();
            var itemWidth = item.size.outerWidth, itemHeight = item.size.outerHeight;
            var itemCols = Math.min(this.cols, Math.ceil(itemWidth / this.columnWidth));

            // See if item still fits in current column; otherwise go back to column 0
            if (this.currentColumn + itemCols > this.cols) {
                this.currentColumn = 0;
            }

            // Find longest column as use length
            var maxHeight = 0;
            for (var offset = 0; offset < itemCols; offset++) {
                maxHeight = Math.max(maxHeight, this.columnHeights[this.currentColumn + offset]);
            }

            // Update column heights with new height
            var newColumnHeight = maxHeight + itemHeight;
            for (offset = 0; offset < itemCols; offset++) {
                this.columnHeights[this.currentColumn + offset] = newColumnHeight;
            }

            // Got all we need
            var position = {
                x: this.currentColumn * this.columnWidth,
                y: maxHeight
            };

            // Update column pointer
            this.currentColumn += itemCols;
            if (this.currentColumn > this.cols) {
                this.currentColumn = 0;
            }

            return position;
        };

        /**
         * Calculates the size of the container
         * @returns {{height: number}}
         */
        ModuloColumns.prototype._getContainerSize = function () {
            return {
                height: Math.max.apply(Math, this.columnHeights)
            }
        };

    }

    // Load definition, either synchronously or asynchronously
    if ('function' === typeof define && define.amd) {
        // Use Asynchronous Module Definition (AMD)
        define(
            [   // Dependencies
                'isotope/js/layout-mode'
            ],
            moduloColumnsLayoutModeDefinition
        )
    } else {
        // Load synchronously
        moduloColumnsLayoutModeDefinition(
            (window.Isotope.LayoutMode)
        );
    }

})(window);


/*! Magnific Popup - v1.0.1 - 2015-12-30
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */
!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function (a) { var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function () { }, u = !!window.jQuery, v = a(window), w = function (a, c) { b.ev.on(o + a + p, c) }, x = function (b, c, d, e) { var f = document.createElement("div"); return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f }, y = function (c, d) { b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d])) }, z = function (c) { return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn }, A = function () { a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b) }, B = function () { var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"]; if (void 0 !== a.transition) return !0; for (; b.length;)if (b.pop() + "Transition" in a) return !0; return !1 }; t.prototype = { constructor: t, init: function () { var c = navigator.appVersion; b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {} }, open: function (c) { var e; if (c.isObj === !1) { b.items = c.items.toArray(), b.index = 0; var g, h = c.items; for (e = 0; e < h.length; e++)if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) { b.index = e; break } } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0; if (b.isOpen) return void b.updateItemHTML(); b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () { b.close() }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) { b._checkIfClose(a.target) && b.close() }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading)); var i = a.magnificPopup.modules; for (e = 0; e < i.length; e++) { var j = i[e]; j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b) } y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) { c.close_replaceWith = z(d.type) }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) { 27 === a.keyCode && b.close() }), v.on("resize" + p, function () { b.updateSize() }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f); var k = b.wH = v.height(), n = {}; if (b.fixedContentPos && b._hasScrollBar(k)) { var o = b._getScrollbarSize(); o && (n.marginRight = o) } b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden"); var r = b.st.mainClass; return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () { b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn) }, 16), b.isOpen = !0, b.updateSize(k), y(m), c }, close: function () { b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () { b._close() }, b.st.removalDelay)) : b._close()) }, _close: function () { y(h); var c = r + " " + q + " "; if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) { var e = { marginRight: "" }; b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e) } d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j) }, updateSize: function (a) { if (b.isIOS) { var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight * c; b.wrap.css("height", d), b.wH = d } else b.wH = a || v.height(); b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize") }, updateItemHTML: function () { var c = b.items[b.index]; b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index)); var d = c.type; if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) { var f = b.st[d] ? b.st[d].markup : !1; y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0 } e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder"); var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]); b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange") }, appendContent: function (a, c) { b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content) }, parseEl: function (c) { var d, e = b.items[c]; if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) { for (var f = b.types, g = 0; g < f.length; g++)if (e.el.hasClass("mfp-" + f[g])) { d = f[g]; break } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href")) } return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c] }, addGroup: function (a, c) { var d = function (d) { d.mfpEl = this, b._openClick(d, a, c) }; c || (c = {}); var e = "click.magnificPopup"; c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d))) }, _openClick: function (c, d, e) { var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick; if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) { var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn; if (g) if (a.isFunction(g)) { if (!g.call(b)) return !0 } else if (v.width() < g) return !0; c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e) } }, updateStatus: function (a, d) { if (b.preloader) { c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading); var e = { status: a, text: d }; y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) { a.stopImmediatePropagation() }), b.container.addClass("mfp-s-" + a), c = a } }, _checkIfClose: function (c) { if (!a(c).hasClass(s)) { var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick; if (d && e) return !0; if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0; if (c === b.content[0] || a.contains(b.content[0], c)) { if (d) return !0 } else if (e && a.contains(document, c)) return !0; return !1 } }, _addClassToMFP: function (a) { b.bgOverlay.addClass(a), b.wrap.addClass(a) }, _removeClassFromMFP: function (a) { this.bgOverlay.removeClass(a), b.wrap.removeClass(a) }, _hasScrollBar: function (a) { return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height()) }, _setFocus: function () { (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus() }, _onFocusIn: function (c) { return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1) }, _parseMarkup: function (b, c, d) { var e; d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (a, c) { if (void 0 === c || c === !1) return !0; if (e = a.split("_"), e.length > 1) { var d = b.find(p + "-" + e[0]); if (d.length > 0) { var f = e[1]; "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c) } } else b.find(p + "-" + a).html(c) }) }, _getScrollbarSize: function () { if (void 0 === b.scrollbarSize) { var a = document.createElement("div"); a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a) } return b.scrollbarSize } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function (b, c) { return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b) }, close: function () { return a.magnificPopup.instance && a.magnificPopup.instance.close() }, registerModule: function (b, c) { c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, a.fn.magnificPopup = function (c) { A(); var d = a(this); if ("string" == typeof c) if ("open" === c) { var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0; f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f) } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1)); else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c); return d }; var C, D, E, F = "inline", G = function () { E && (D.after(E.addClass(C)).detach(), E = null) }; a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function () { b.types.push(F), w(h + "." + F, function () { G() }) }, getInline: function (c, d) { if (G(), c.src) { var e = b.st.inline, f = a(c.src); if (f.length) { var g = f[0].parentNode; g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready") } else b.updateStatus("error", e.tNotFound), f = a("<div>"); return c.inlineElement = f, f } return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d } } }); var H, I = "ajax", J = function () { H && a(document.body).removeClass(H) }, K = function () { J(), b.req && b.req.abort() }; a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function () { b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K) }, getAjax: function (c) { H && a(document.body).addClass(H), b.updateStatus("loading"); var d = a.extend({ url: c.src, success: function (d, e, f) { var g = { data: d, xhr: f }; y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () { b.wrap.addClass(q) }, 16), b.updateStatus("ready"), y("AjaxContentAdded") }, error: function () { J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src)) } }, b.st.ajax.settings); return b.req = a.ajax(d), "" } } }); var L, M = function (c) { if (c.data && void 0 !== c.data.title) return c.data.title; var d = b.st.image.titleSrc; if (d) { if (a.isFunction(d)) return d.call(b, c); if (c.el) return c.el.attr(d) || "" } return "" }; a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function () { var c = b.st.image, d = ".image"; b.types.push("image"), w(m + d, function () { "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor) }), w(h + d, function () { c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p) }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage) }, resizeImage: function () { var a = b.currItem; if (a && a.img && b.st.image.verticalFit) { var c = 0; b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c) } }, _onImageHasSize: function (a) { a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1)) }, findImageSize: function (a) { var c = 0, d = a.img[0], e = function (f) { L && clearInterval(L), L = setInterval(function () { return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500))) }, f) }; e(1) }, getImage: function (c, d) { var e = 0, f = function () { c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g())) }, g = function () { c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0) }, h = b.st.image, i = d.find(".mfp-img"); if (i.length) { var j = document.createElement("img"); j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1) } return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d) } } }); var N, O = function () { return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N }; a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function (a) { return a.is("img") ? a : a.find("img") } }, proto: { initZoom: function () { var a, c = b.st.zoom, d = ".zoom"; if (c.enabled && b.supportsTransition) { var e, f, g = c.duration, j = function (a) { var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d = "all " + c.duration / 1e3 + "s " + c.easing, e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" }, f = "transition"; return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b }, k = function () { b.content.css("visibility", "visible") }; w("BuildControls" + d, function () { if (b._allowZoom()) { if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k(); f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () { f.css(b._getOffset(!0)), e = setTimeout(function () { k(), setTimeout(function () { f.remove(), a = f = null, y("ZoomAnimationEnded") }, 16) }, g) }, 16) } }), w(i + d, function () { if (b._allowZoom()) { if (clearTimeout(e), b.st.removalDelay = g, !a) { if (a = b._getItemToZoom(), !a) return; f = j(a) } f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () { f.css(b._getOffset()) }, 16) } }), w(h + d, function () { b._allowZoom() && (k(), f && f.remove(), a = null) }) } }, _allowZoom: function () { return "image" === b.currItem.type }, _getItemToZoom: function () { return b.currItem.hasSize ? b.currItem.img : !1 }, _getOffset: function (c) { var d; d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem); var e = d.offset(), f = parseInt(d.css("padding-top"), 10), g = parseInt(d.css("padding-bottom"), 10); e.top -= a(window).scrollTop() - f; var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f }; return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h } } }); var P = "iframe", Q = "//about:blank", R = function (a) { if (b.currTemplate[P]) { var c = b.currTemplate[P].find("iframe"); c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none")) } }; a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function () { b.types.push(P), w("BeforeChange", function (a, b, c) { b !== c && (b === P ? R() : c === P && R(!0)) }), w(h + "." + P, function () { R() }) }, getIframe: function (c, d) { var e = c.src, f = b.st.iframe; a.each(f.patterns, function () { return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0 }); var g = {}; return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d } } }); var S = function (a) { var c = b.items.length; return a > c - 1 ? a - c : 0 > a ? c + a : a }, T = function (a, b, c) { return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c) }; a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function () { var c = b.st.gallery, e = ".mfp-gallery", g = Boolean(a.fn.mfpFastClick); return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () { c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () { return b.items.length > 1 ? (b.next(), !1) : void 0 }), d.on("keydown" + e, function (a) { 37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next() }) }), w("UpdateStatus" + e, function (a, c) { c.text && (c.text = T(c.text, b.currItem.index, b.items.length)) }), w(l + e, function (a, d, e, f) { var g = b.items.length; e.counter = g > 1 ? T(c.tCounter, f.index, g) : "" }), w("BuildControls" + e, function () { if (b.items.length > 1 && c.arrows && !b.arrowLeft) { var d = c.arrowMarkup, e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s), f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s), h = g ? "mfpFastClick" : "click"; e[h](function () { b.prev() }), f[h](function () { b.next() }), b.isIE7 && (x("b", e[0], !1, !0), x("a", e[0], !1, !0), x("b", f[0], !1, !0), x("a", f[0], !1, !0)), b.container.append(e.add(f)) } }), w(n + e, function () { b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () { b.preloadNearbyImages(), b._preloadTimeout = null }, 16) }), void w(h + e, function () { d.off(e), b.wrap.off("click" + e), b.arrowLeft && g && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null })) : !1 }, next: function () { b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML() }, prev: function () { b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML() }, goTo: function (a) { b.direction = a >= b.index, b.index = a, b.updateItemHTML() }, preloadNearbyImages: function () { var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length); for (a = 1; a <= (b.direction ? e : d); a++)b._preloadItem(b.index + a); for (a = 1; a <= (b.direction ? d : e); a++)b._preloadItem(b.index - a) }, _preloadItem: function (c) { if (c = S(c), !b.items[c].preloaded) { var d = b.items[c]; d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () { d.hasSize = !0 }).on("error.mfploader", function () { d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d) }).attr("src", d.src)), d.preloaded = !0 } } } }); var U = "retina"; a.magnificPopup.registerModule(U, { options: { replaceSrc: function (a) { return a.src.replace(/\.\w+$/, function (a) { return "@2x" + a }) }, ratio: 1 }, proto: { initRetina: function () { if (window.devicePixelRatio > 1) { var a = b.st.retina, c = a.ratio; c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) { b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" }) }), w("ElementParse." + U, function (b, d) { d.src = a.replaceSrc(d, c) })) } } } }), function () { var b = 1e3, c = "ontouchstart" in window, d = function () { v.off("touchmove" + f + " touchend" + f) }, e = "mfpFastClick", f = "." + e; a.fn.mfpFastClick = function (e) { return a(this).each(function () { var g, h = a(this); if (c) { var i, j, k, l, m, n; h.on("touchstart" + f, function (a) { l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, v.on("touchmove" + f, function (a) { m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d()) }).on("touchend" + f, function (a) { d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function () { g = !1 }, b), e()) }) }) } h.on("click" + f, function () { g || e() }) }) }, a.fn.destroyMfpFastClick = function () { a(this).off("touchstart" + f + " click" + f), c && v.off("touchmove" + f + " touchend" + f) } }(), A() });
/**
 * SimpleBar.js - v3.0.0-beta.0
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 * 
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.SimpleBar = factory());
}(this, (function () {
    'use strict';

    var _isObject = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function';
    };

    var _anObject = function (it) {
        if (!_isObject(it)) throw TypeError(it + ' is not an object!');
        return it;
    };

    var _fails = function (exec) {
        try {
            return !!exec();
        } catch (e) {
            return true;
        }
    };

    // Thank's IE8 for his funny defineProperty
    var _descriptors = !_fails(function () {
        return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
    });

    var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
        return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var _global = createCommonjsModule(function (module) {
        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = module.exports = typeof window != 'undefined' && window.Math == Math
            ? window : typeof self != 'undefined' && self.Math == Math ? self
                // eslint-disable-next-line no-new-func
                : Function('return this')();
        if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
    });

    var document$1 = _global.document;
    // typeof document.createElement is 'object' in old IE
    var is = _isObject(document$1) && _isObject(document$1.createElement);
    var _domCreate = function (it) {
        return is ? document$1.createElement(it) : {};
    };

    var _ie8DomDefine = !_descriptors && !_fails(function () {
        return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
    });

    // 7.1.1 ToPrimitive(input [, PreferredType])

    // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string
    var _toPrimitive = function (it, S) {
        if (!_isObject(it)) return it;
        var fn, val;
        if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
        if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
        if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
        throw TypeError("Can't convert object to primitive value");
    };

    var dP = Object.defineProperty;

    var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
        _anObject(O);
        P = _toPrimitive(P, true);
        _anObject(Attributes);
        if (_ie8DomDefine) try {
            return dP(O, P, Attributes);
        } catch (e) { /* empty */ }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
        if ('value' in Attributes) O[P] = Attributes.value;
        return O;
    };

    var _objectDp = {
        f: f
    };

    var _propertyDesc = function (bitmap, value) {
        return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
        };
    };

    var _hide = _descriptors ? function (object, key, value) {
        return _objectDp.f(object, key, _propertyDesc(1, value));
    } : function (object, key, value) {
        object[key] = value;
        return object;
    };

    var hasOwnProperty = {}.hasOwnProperty;
    var _has = function (it, key) {
        return hasOwnProperty.call(it, key);
    };

    var id = 0;
    var px = Math.random();
    var _uid = function (key) {
        return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
    };

    var _core = createCommonjsModule(function (module) {
        var core = module.exports = { version: '2.5.6' };
        if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
    });
    var _core_1 = _core.version;

    var _redefine = createCommonjsModule(function (module) {
        var SRC = _uid('src');
        var TO_STRING = 'toString';
        var $toString = Function[TO_STRING];
        var TPL = ('' + $toString).split(TO_STRING);

        _core.inspectSource = function (it) {
            return $toString.call(it);
        };

        (module.exports = function (O, key, val, safe) {
            var isFunction = typeof val == 'function';
            if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
            if (O[key] === val) return;
            if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
            if (O === _global) {
                O[key] = val;
            } else if (!safe) {
                delete O[key];
                _hide(O, key, val);
            } else if (O[key]) {
                O[key] = val;
            } else {
                _hide(O, key, val);
            }
            // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        })(Function.prototype, TO_STRING, function toString() {
            return typeof this == 'function' && this[SRC] || $toString.call(this);
        });
    });

    // 7.2.1 RequireObjectCoercible(argument)
    var _defined = function (it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it);
        return it;
    };

    var _library = false;

    var _shared = createCommonjsModule(function (module) {
        var SHARED = '__core-js_shared__';
        var store = _global[SHARED] || (_global[SHARED] = {});

        (module.exports = function (key, value) {
            return store[key] || (store[key] = value !== undefined ? value : {});
        })('versions', []).push({
            version: _core.version,
            mode: _library ? 'pure' : 'global',
            copyright: 'Â© 2018 Denis Pushkarev (zloirock.ru)'
        });
    });

    var _wks = createCommonjsModule(function (module) {
        var store = _shared('wks');

        var Symbol = _global.Symbol;
        var USE_SYMBOL = typeof Symbol == 'function';

        var $exports = module.exports = function (name) {
            return store[name] || (store[name] =
                USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
        };

        $exports.store = store;
    });

    var _fixReWks = function (KEY, length, exec) {
        var SYMBOL = _wks(KEY);
        var fns = exec(_defined, SYMBOL, ''[KEY]);
        var strfn = fns[0];
        var rxfn = fns[1];
        if (_fails(function () {
            var O = {};
            O[SYMBOL] = function () { return 7; };
            return ''[KEY](O) != 7;
        })) {
            _redefine(String.prototype, KEY, strfn);
            _hide(RegExp.prototype, SYMBOL, length == 2
                // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
                // 21.2.5.11 RegExp.prototype[@@split](string, limit)
                ? function (string, arg) { return rxfn.call(string, this, arg); }
                // 21.2.5.6 RegExp.prototype[@@match](string)
                // 21.2.5.9 RegExp.prototype[@@search](string)
                : function (string) { return rxfn.call(string, this); }
            );
        }
    };

    // @@replace logic
    _fixReWks('replace', 2, function (defined, REPLACE, $replace) {
        // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
        return [function replace(searchValue, replaceValue) {
            var O = defined(this);
            var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
            return fn !== undefined
                ? fn.call(searchValue, O, replaceValue)
                : $replace.call(String(O), searchValue, replaceValue);
        }, $replace];
    });

    var dP$1 = _objectDp.f;
    var FProto = Function.prototype;
    var nameRE = /^\s*function ([^ (]*)/;
    var NAME = 'name';

    // 19.2.4.2 name
    NAME in FProto || _descriptors && dP$1(FProto, NAME, {
        configurable: true,
        get: function () {
            try {
                return ('' + this).match(nameRE)[1];
            } catch (e) {
                return '';
            }
        }
    });

    // @@match logic
    _fixReWks('match', 1, function (defined, MATCH, $match) {
        // 21.1.3.11 String.prototype.match(regexp)
        return [function match(regexp) {
            var O = defined(this);
            var fn = regexp == undefined ? undefined : regexp[MATCH];
            return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
        }, $match];
    });

    // 22.1.3.31 Array.prototype[@@unscopables]
    var UNSCOPABLES = _wks('unscopables');
    var ArrayProto = Array.prototype;
    if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});
    var _addToUnscopables = function (key) {
        ArrayProto[UNSCOPABLES][key] = true;
    };

    var _iterStep = function (done, value) {
        return { value: value, done: !!done };
    };

    var _iterators = {};

    var toString = {}.toString;

    var _cof = function (it) {
        return toString.call(it).slice(8, -1);
    };

    // fallback for non-array-like ES3 and non-enumerable old V8 strings

    // eslint-disable-next-line no-prototype-builtins
    var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
        return _cof(it) == 'String' ? it.split('') : Object(it);
    };

    // to indexed object, toObject with fallback for non-array-like ES3 strings


    var _toIobject = function (it) {
        return _iobject(_defined(it));
    };

    var _aFunction = function (it) {
        if (typeof it != 'function') throw TypeError(it + ' is not a function!');
        return it;
    };

    // optional / simple context binding

    var _ctx = function (fn, that, length) {
        _aFunction(fn);
        if (that === undefined) return fn;
        switch (length) {
            case 1: return function (a) {
                return fn.call(that, a);
            };
            case 2: return function (a, b) {
                return fn.call(that, a, b);
            };
            case 3: return function (a, b, c) {
                return fn.call(that, a, b, c);
            };
        }
        return function (/* ...args */) {
            return fn.apply(that, arguments);
        };
    };

    var PROTOTYPE = 'prototype';

    var $export = function (type, name, source) {
        var IS_FORCED = type & $export.F;
        var IS_GLOBAL = type & $export.G;
        var IS_STATIC = type & $export.S;
        var IS_PROTO = type & $export.P;
        var IS_BIND = type & $export.B;
        var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
        var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
        var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
        var key, own, out, exp;
        if (IS_GLOBAL) source = name;
        for (key in source) {
            // contains in native
            own = !IS_FORCED && target && target[key] !== undefined;
            // export native or passed
            out = (own ? target : source)[key];
            // bind timers to global for call from export context
            exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
            // extend global
            if (target) _redefine(target, key, out, type & $export.U);
            // export
            if (exports[key] != out) _hide(exports, key, exp);
            if (IS_PROTO && expProto[key] != out) expProto[key] = out;
        }
    };
    _global.core = _core;
    // type bitmap
    $export.F = 1;   // forced
    $export.G = 2;   // global
    $export.S = 4;   // static
    $export.P = 8;   // proto
    $export.B = 16;  // bind
    $export.W = 32;  // wrap
    $export.U = 64;  // safe
    $export.R = 128; // real proto method for `library`
    var _export = $export;

    // 7.1.4 ToInteger
    var ceil = Math.ceil;
    var floor = Math.floor;
    var _toInteger = function (it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };

    // 7.1.15 ToLength

    var min = Math.min;
    var _toLength = function (it) {
        return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
    };

    var max = Math.max;
    var min$1 = Math.min;
    var _toAbsoluteIndex = function (index, length) {
        index = _toInteger(index);
        return index < 0 ? max(index + length, 0) : min$1(index, length);
    };

    // false -> Array#indexOf
    // true  -> Array#includes



    var _arrayIncludes = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
            var O = _toIobject($this);
            var length = _toLength(O.length);
            var index = _toAbsoluteIndex(fromIndex, length);
            var value;
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare
            if (IS_INCLUDES && el != el) while (length > index) {
                value = O[index++];
                // eslint-disable-next-line no-self-compare
                if (value != value) return true;
                // Array#indexOf ignores holes, Array#includes - not
            } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
                if (O[index] === el) return IS_INCLUDES || index || 0;
            } return !IS_INCLUDES && -1;
        };
    };

    var shared = _shared('keys');

    var _sharedKey = function (key) {
        return shared[key] || (shared[key] = _uid(key));
    };

    var arrayIndexOf = _arrayIncludes(false);
    var IE_PROTO = _sharedKey('IE_PROTO');

    var _objectKeysInternal = function (object, names) {
        var O = _toIobject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
        // Don't enum bug & hidden keys
        while (names.length > i) if (_has(O, key = names[i++])) {
            ~arrayIndexOf(result, key) || result.push(key);
        }
        return result;
    };

    // IE 8- don't enum bug keys
    var _enumBugKeys = (
        'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
    ).split(',');

    // 19.1.2.14 / 15.2.3.14 Object.keys(O)



    var _objectKeys = Object.keys || function keys(O) {
        return _objectKeysInternal(O, _enumBugKeys);
    };

    var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
        _anObject(O);
        var keys = _objectKeys(Properties);
        var length = keys.length;
        var i = 0;
        var P;
        while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
        return O;
    };

    var document$2 = _global.document;
    var _html = document$2 && document$2.documentElement;

    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



    var IE_PROTO$1 = _sharedKey('IE_PROTO');
    var Empty = function () { /* empty */ };
    var PROTOTYPE$1 = 'prototype';

    // Create object with fake `null` prototype: use iframe Object with cleared prototype
    var createDict = function () {
        // Thrash, waste and sodomy: IE GC bug
        var iframe = _domCreate('iframe');
        var i = _enumBugKeys.length;
        var lt = '<';
        var gt = '>';
        var iframeDocument;
        iframe.style.display = 'none';
        _html.appendChild(iframe);
        iframe.src = 'javascript:'; // eslint-disable-line no-script-url
        // createDict = iframe.contentWindow.Object;
        // html.removeChild(iframe);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
        iframeDocument.close();
        createDict = iframeDocument.F;
        while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
        return createDict();
    };

    var _objectCreate = Object.create || function create(O, Properties) {
        var result;
        if (O !== null) {
            Empty[PROTOTYPE$1] = _anObject(O);
            result = new Empty();
            Empty[PROTOTYPE$1] = null;
            // add "__proto__" for Object.getPrototypeOf polyfill
            result[IE_PROTO$1] = O;
        } else result = createDict();
        return Properties === undefined ? result : _objectDps(result, Properties);
    };

    var def = _objectDp.f;

    var TAG = _wks('toStringTag');

    var _setToStringTag = function (it, tag, stat) {
        if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
    };

    var IteratorPrototype = {};

    // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
    _hide(IteratorPrototype, _wks('iterator'), function () { return this; });

    var _iterCreate = function (Constructor, NAME, next) {
        Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
        _setToStringTag(Constructor, NAME + ' Iterator');
    };

    // 7.1.13 ToObject(argument)

    var _toObject = function (it) {
        return Object(_defined(it));
    };

    // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


    var IE_PROTO$2 = _sharedKey('IE_PROTO');
    var ObjectProto = Object.prototype;

    var _objectGpo = Object.getPrototypeOf || function (O) {
        O = _toObject(O);
        if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
        if (typeof O.constructor == 'function' && O instanceof O.constructor) {
            return O.constructor.prototype;
        } return O instanceof Object ? ObjectProto : null;
    };

    var ITERATOR = _wks('iterator');
    var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
    var FF_ITERATOR = '@@iterator';
    var KEYS = 'keys';
    var VALUES = 'values';

    var returnThis = function () { return this; };

    var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
        _iterCreate(Constructor, NAME, next);
        var getMethod = function (kind) {
            if (!BUGGY && kind in proto) return proto[kind];
            switch (kind) {
                case KEYS: return function keys() { return new Constructor(this, kind); };
                case VALUES: return function values() { return new Constructor(this, kind); };
            } return function entries() { return new Constructor(this, kind); };
        };
        var TAG = NAME + ' Iterator';
        var DEF_VALUES = DEFAULT == VALUES;
        var VALUES_BUG = false;
        var proto = Base.prototype;
        var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
        var $default = $native || getMethod(DEFAULT);
        var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
        var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
        var methods, key, IteratorPrototype;
        // Fix native
        if ($anyNative) {
            IteratorPrototype = _objectGpo($anyNative.call(new Base()));
            if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                // Set @@toStringTag to native iterators
                _setToStringTag(IteratorPrototype, TAG, true);
                // fix for some old engines
                if (typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
            }
        }
        // fix Array#{values, @@iterator}.name in V8 / FF
        if (DEF_VALUES && $native && $native.name !== VALUES) {
            VALUES_BUG = true;
            $default = function values() { return $native.call(this); };
        }
        // Define iterator
        if (BUGGY || VALUES_BUG || !proto[ITERATOR]) {
            _hide(proto, ITERATOR, $default);
        }
        // Plug for library
        _iterators[NAME] = $default;
        _iterators[TAG] = returnThis;
        if (DEFAULT) {
            methods = {
                values: DEF_VALUES ? $default : getMethod(VALUES),
                keys: IS_SET ? $default : getMethod(KEYS),
                entries: $entries
            };
            if (FORCED) for (key in methods) {
                if (!(key in proto)) _redefine(proto, key, methods[key]);
            } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
        }
        return methods;
    };

    // 22.1.3.4 Array.prototype.entries()
    // 22.1.3.13 Array.prototype.keys()
    // 22.1.3.29 Array.prototype.values()
    // 22.1.3.30 Array.prototype[@@iterator]()
    var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
        this._t = _toIobject(iterated); // target
        this._i = 0;                   // next index
        this._k = kind;                // kind
        // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
    }, function () {
        var O = this._t;
        var kind = this._k;
        var index = this._i++;
        if (!O || index >= O.length) {
            this._t = undefined;
            return _iterStep(1);
        }
        if (kind == 'keys') return _iterStep(0, index);
        if (kind == 'values') return _iterStep(0, O[index]);
        return _iterStep(0, [index, O[index]]);
    }, 'values');

    // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
    _iterators.Arguments = _iterators.Array;

    _addToUnscopables('keys');
    _addToUnscopables('values');
    _addToUnscopables('entries');

    var ITERATOR$1 = _wks('iterator');
    var TO_STRING_TAG = _wks('toStringTag');
    var ArrayValues = _iterators.Array;

    var DOMIterables = {
        CSSRuleList: true, // TODO: Not spec compliant, should be false.
        CSSStyleDeclaration: false,
        CSSValueList: false,
        ClientRectList: false,
        DOMRectList: false,
        DOMStringList: false,
        DOMTokenList: true,
        DataTransferItemList: false,
        FileList: false,
        HTMLAllCollection: false,
        HTMLCollection: false,
        HTMLFormElement: false,
        HTMLSelectElement: false,
        MediaList: true, // TODO: Not spec compliant, should be false.
        MimeTypeArray: false,
        NamedNodeMap: false,
        NodeList: true,
        PaintRequestList: false,
        Plugin: false,
        PluginArray: false,
        SVGLengthList: false,
        SVGNumberList: false,
        SVGPathSegList: false,
        SVGPointList: false,
        SVGStringList: false,
        SVGTransformList: false,
        SourceBufferList: false,
        StyleSheetList: true, // TODO: Not spec compliant, should be false.
        TextTrackCueList: false,
        TextTrackList: false,
        TouchList: false
    };

    for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
        var NAME$1 = collections[i];
        var explicit = DOMIterables[NAME$1];
        var Collection = _global[NAME$1];
        var proto = Collection && Collection.prototype;
        var key;
        if (proto) {
            if (!proto[ITERATOR$1]) _hide(proto, ITERATOR$1, ArrayValues);
            if (!proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME$1);
            _iterators[NAME$1] = ArrayValues;
            if (explicit) for (key in es6_array_iterator) if (!proto[key]) _redefine(proto, key, es6_array_iterator[key], true);
        }
    }

    // call something on iterator step with safe closing on error

    var _iterCall = function (iterator, fn, value, entries) {
        try {
            return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
            // 7.4.6 IteratorClose(iterator, completion)
        } catch (e) {
            var ret = iterator['return'];
            if (ret !== undefined) _anObject(ret.call(iterator));
            throw e;
        }
    };

    // check on default Array iterator

    var ITERATOR$2 = _wks('iterator');
    var ArrayProto$1 = Array.prototype;

    var _isArrayIter = function (it) {
        return it !== undefined && (_iterators.Array === it || ArrayProto$1[ITERATOR$2] === it);
    };

    var _createProperty = function (object, index, value) {
        if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
        else object[index] = value;
    };

    // getting tag from 19.1.3.6 Object.prototype.toString()

    var TAG$1 = _wks('toStringTag');
    // ES3 wrong here
    var ARG = _cof(function () { return arguments; }()) == 'Arguments';

    // fallback for IE11 Script Access Denied error
    var tryGet = function (it, key) {
        try {
            return it[key];
        } catch (e) { /* empty */ }
    };

    var _classof = function (it) {
        var O, T, B;
        return it === undefined ? 'Undefined' : it === null ? 'Null'
            // @@toStringTag case
            : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
                // builtinTag case
                : ARG ? _cof(O)
                    // ES3 arguments fallback
                    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
    };

    var ITERATOR$3 = _wks('iterator');

    var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
        if (it != undefined) return it[ITERATOR$3]
            || it['@@iterator']
            || _iterators[_classof(it)];
    };

    var ITERATOR$4 = _wks('iterator');
    var SAFE_CLOSING = false;

    try {
        var riter = [7][ITERATOR$4]();
        riter['return'] = function () { SAFE_CLOSING = true; };
    } catch (e) { /* empty */ }

    var _iterDetect = function (exec, skipClosing) {
        if (!skipClosing && !SAFE_CLOSING) return false;
        var safe = false;
        try {
            var arr = [7];
            var iter = arr[ITERATOR$4]();
            iter.next = function () { return { done: safe = true }; };
            arr[ITERATOR$4] = function () { return iter; };
            exec(arr);
        } catch (e) { /* empty */ }
        return safe;
    };

    _export(_export.S + _export.F * !_iterDetect(function (iter) { }), 'Array', {
        // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
        from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
            var O = _toObject(arrayLike);
            var C = typeof this == 'function' ? this : Array;
            var aLen = arguments.length;
            var mapfn = aLen > 1 ? arguments[1] : undefined;
            var mapping = mapfn !== undefined;
            var index = 0;
            var iterFn = core_getIteratorMethod(O);
            var length, result, step, iterator;
            if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
            // if object isn't iterable or it's array with default iterator - use simple case
            if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
                for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
                    _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
                }
            } else {
                length = _toLength(O.length);
                for (result = new C(length); length > index; index++) {
                    _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
                }
            }
            result.length = index;
            return result;
        }
    });

    var f$1 = Object.getOwnPropertySymbols;

    var _objectGops = {
        f: f$1
    };

    var f$2 = {}.propertyIsEnumerable;

    var _objectPie = {
        f: f$2
    };

    // 19.1.2.1 Object.assign(target, source, ...)





    var $assign = Object.assign;

    // should work with symbols and should have deterministic property order (V8 bug)
    var _objectAssign = !$assign || _fails(function () {
        var A = {};
        var B = {};
        // eslint-disable-next-line no-undef
        var S = Symbol();
        var K = 'abcdefghijklmnopqrst';
        A[S] = 7;
        K.split('').forEach(function (k) { B[k] = k; });
        return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
    }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
        var T = _toObject(target);
        var aLen = arguments.length;
        var index = 1;
        var getSymbols = _objectGops.f;
        var isEnum = _objectPie.f;
        while (aLen > index) {
            var S = _iobject(arguments[index++]);
            var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
            var length = keys.length;
            var j = 0;
            var key;
            while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
        } return T;
    } : $assign;

    // 19.1.3.1 Object.assign(target, source)


    _export(_export.S + _export.F, 'Object', { assign: _objectAssign });

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
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }

    var scrollbarWidth = createCommonjsModule(function (module, exports) {
        /*! scrollbarWidth.js v0.1.3 | felixexter | MIT | https://github.com/felixexter/scrollbarWidth */
        (function (root, factory) {
            {
                module.exports = factory();
            }
        }(commonjsGlobal, function () {

            function scrollbarWidth() {
                if (typeof document === 'undefined') {
                    return 0
                }

                var
                    body = document.body,
                    box = document.createElement('div'),
                    boxStyle = box.style,
                    width;

                boxStyle.position = 'absolute';
                boxStyle.top = boxStyle.left = '-9999px';
                boxStyle.width = boxStyle.height = '100px';
                boxStyle.overflow = 'scroll';

                body.appendChild(box);

                width = box.offsetWidth - box.clientWidth;

                body.removeChild(box);

                return width;
            }

            return scrollbarWidth;
        }));
    });

    /**
     * lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright jQuery Foundation and other contributors <https://jquery.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */

    /** Used as the `TypeError` message for "Functions" methods. */
    var FUNC_ERROR_TEXT = 'Expected a function';

    /** Used as references for various `Number` constants. */
    var NAN = 0 / 0;

    /** `Object#toString` result references. */
    var symbolTag = '[object Symbol]';

    /** Used to match leading and trailing whitespace. */
    var reTrim = /^\s+|\s+$/g;

    /** Used to detect bad signed hexadecimal string values. */
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

    /** Used to detect binary string values. */
    var reIsBinary = /^0b[01]+$/i;

    /** Used to detect octal string values. */
    var reIsOctal = /^0o[0-7]+$/i;

    /** Built-in method references without a dependency on `root`. */
    var freeParseInt = parseInt;

    /** Detect free variable `global` from Node.js. */
    var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

    /** Detect free variable `self`. */
    var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

    /** Used as a reference to the global object. */
    var root = freeGlobal || freeSelf || Function('return this')();

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeMax = Math.max,
        nativeMin = Math.min;

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = function () {
        return root.Date.now();
    };

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
        var lastArgs,
            lastThis,
            maxWait,
            result,
            timerId,
            lastCallTime,
            lastInvokeTime = 0,
            leading = false,
            maxing = false,
            trailing = true;

        if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
            leading = !!options.leading;
            maxing = 'maxWait' in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = 'trailing' in options ? !!options.trailing : trailing;
        }

        function invokeFunc(time) {
            var args = lastArgs,
                thisArg = lastThis;

            lastArgs = lastThis = undefined;
            lastInvokeTime = time;
            result = func.apply(thisArg, args);
            return result;
        }

        function leadingEdge(time) {
            // Reset any `maxWait` timer.
            lastInvokeTime = time;
            // Start the timer for the trailing edge.
            timerId = setTimeout(timerExpired, wait);
            // Invoke the leading edge.
            return leading ? invokeFunc(time) : result;
        }

        function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime,
                timeSinceLastInvoke = time - lastInvokeTime,
                result = wait - timeSinceLastCall;

            return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
        }

        function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime,
                timeSinceLastInvoke = time - lastInvokeTime;

            // Either this is the first call, activity has stopped and we're at the
            // trailing edge, the system time has gone backwards and we're treating
            // it as the trailing edge, or we've hit the `maxWait` limit.
            return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
                (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
        }

        function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
                return trailingEdge(time);
            }
            // Restart the timer.
            timerId = setTimeout(timerExpired, remainingWait(time));
        }

        function trailingEdge(time) {
            timerId = undefined;

            // Only invoke if we have `lastArgs` which means `func` has been
            // debounced at least once.
            if (trailing && lastArgs) {
                return invokeFunc(time);
            }
            lastArgs = lastThis = undefined;
            return result;
        }

        function cancel() {
            if (timerId !== undefined) {
                clearTimeout(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined;
        }

        function flush() {
            return timerId === undefined ? result : trailingEdge(now());
        }

        function debounced() {
            var time = now(),
                isInvoking = shouldInvoke(time);

            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;

            if (isInvoking) {
                if (timerId === undefined) {
                    return leadingEdge(lastCallTime);
                }
                if (maxing) {
                    // Handle invocations in a tight loop.
                    timerId = setTimeout(timerExpired, wait);
                    return invokeFunc(lastCallTime);
                }
            }
            if (timerId === undefined) {
                timerId = setTimeout(timerExpired, wait);
            }
            return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
        var leading = true,
            trailing = true;

        if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
        }
        if (isObject(options)) {
            leading = 'leading' in options ? !!options.leading : leading;
            trailing = 'trailing' in options ? !!options.trailing : trailing;
        }
        return debounce(func, wait, {
            'leading': leading,
            'maxWait': wait,
            'trailing': trailing
        });
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
        var type = typeof value;
        return !!value && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
        return !!value && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
        return typeof value == 'symbol' ||
            (isObjectLike(value) && objectToString.call(value) == symbolTag);
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
        if (typeof value == 'number') {
            return value;
        }
        if (isSymbol(value)) {
            return NAN;
        }
        if (isObject(value)) {
            var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
            value = isObject(other) ? (other + '') : other;
        }
        if (typeof value != 'string') {
            return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, '');
        var isBinary = reIsBinary.test(value);
        return (isBinary || reIsOctal.test(value))
            ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
            : (reIsBadHex.test(value) ? NAN : +value);
    }

    var lodash_throttle = throttle;

    /**
     * A collection of shims that provide minimal functionality of the ES6 collections.
     *
     * These implementations are not meant to be used outside of the ResizeObserver
     * modules as they cover only a limited range of use cases.
     */
    /* eslint-disable require-jsdoc, valid-jsdoc */
    var MapShim = (function () {
        if (typeof Map !== 'undefined') {
            return Map;
        }

        /**
         * Returns index in provided array that matches the specified key.
         *
         * @param {Array<Array>} arr
         * @param {*} key
         * @returns {number}
         */
        function getIndex(arr, key) {
            var result = -1;

            arr.some(function (entry, index) {
                if (entry[0] === key) {
                    result = index;

                    return true;
                }

                return false;
            });

            return result;
        }

        return (function () {
            function anonymous() {
                this.__entries__ = [];
            }

            var prototypeAccessors = { size: { configurable: true } };

            /**
             * @returns {boolean}
             */
            prototypeAccessors.size.get = function () {
                return this.__entries__.length;
            };

            /**
             * @param {*} key
             * @returns {*}
             */
            anonymous.prototype.get = function (key) {
                var index = getIndex(this.__entries__, key);
                var entry = this.__entries__[index];

                return entry && entry[1];
            };

            /**
             * @param {*} key
             * @param {*} value
             * @returns {void}
             */
            anonymous.prototype.set = function (key, value) {
                var index = getIndex(this.__entries__, key);

                if (~index) {
                    this.__entries__[index][1] = value;
                } else {
                    this.__entries__.push([key, value]);
                }
            };

            /**
             * @param {*} key
             * @returns {void}
             */
            anonymous.prototype.delete = function (key) {
                var entries = this.__entries__;
                var index = getIndex(entries, key);

                if (~index) {
                    entries.splice(index, 1);
                }
            };

            /**
             * @param {*} key
             * @returns {void}
             */
            anonymous.prototype.has = function (key) {
                return !!~getIndex(this.__entries__, key);
            };

            /**
             * @returns {void}
             */
            anonymous.prototype.clear = function () {
                this.__entries__.splice(0);
            };

            /**
             * @param {Function} callback
             * @param {*} [ctx=null]
             * @returns {void}
             */
            anonymous.prototype.forEach = function (callback, ctx) {
                var this$1 = this;
                if (ctx === void 0) ctx = null;

                for (var i = 0, list = this$1.__entries__; i < list.length; i += 1) {
                    var entry = list[i];

                    callback.call(ctx, entry[1], entry[0]);
                }
            };

            Object.defineProperties(anonymous.prototype, prototypeAccessors);

            return anonymous;
        }());
    })();

    /**
     * Detects whether window and document objects are available in current environment.
     */
    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

    // Returns global object of a current environment.
    var global$1 = (function () {
        if (typeof global !== 'undefined' && global.Math === Math) {
            return global;
        }

        if (typeof self !== 'undefined' && self.Math === Math) {
            return self;
        }

        if (typeof window !== 'undefined' && window.Math === Math) {
            return window;
        }

        // eslint-disable-next-line no-new-func
        return Function('return this')();
    })();

    /**
     * A shim for the requestAnimationFrame which falls back to the setTimeout if
     * first one is not supported.
     *
     * @returns {number} Requests' identifier.
     */
    var requestAnimationFrame$1 = (function () {
        if (typeof requestAnimationFrame === 'function') {
            // It's required to use a bounded function because IE sometimes throws
            // an "Invalid calling object" error if rAF is invoked without the global
            // object on the left hand side.
            return requestAnimationFrame.bind(global$1);
        }

        return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
    })();

    // Defines minimum timeout before adding a trailing call.
    var trailingTimeout = 2;

    /**
     * Creates a wrapper function which ensures that provided callback will be
     * invoked only once during the specified delay period.
     *
     * @param {Function} callback - Function to be invoked after the delay period.
     * @param {number} delay - Delay after which to invoke callback.
     * @returns {Function}
     */
    var throttle$1 = function (callback, delay) {
        var leadingCall = false,
            trailingCall = false,
            lastCallTime = 0;

        /**
         * Invokes the original callback function and schedules new invocation if
         * the "proxy" was called during current request.
         *
         * @returns {void}
         */
        function resolvePending() {
            if (leadingCall) {
                leadingCall = false;

                callback();
            }

            if (trailingCall) {
                proxy();
            }
        }

        /**
         * Callback invoked after the specified delay. It will further postpone
         * invocation of the original function delegating it to the
         * requestAnimationFrame.
         *
         * @returns {void}
         */
        function timeoutCallback() {
            requestAnimationFrame$1(resolvePending);
        }

        /**
         * Schedules invocation of the original function.
         *
         * @returns {void}
         */
        function proxy() {
            var timeStamp = Date.now();

            if (leadingCall) {
                // Reject immediately following calls.
                if (timeStamp - lastCallTime < trailingTimeout) {
                    return;
                }

                // Schedule new call to be in invoked when the pending one is resolved.
                // This is important for "transitions" which never actually start
                // immediately so there is a chance that we might miss one if change
                // happens amids the pending invocation.
                trailingCall = true;
            } else {
                leadingCall = true;
                trailingCall = false;

                setTimeout(timeoutCallback, delay);
            }

            lastCallTime = timeStamp;
        }

        return proxy;
    };

    // Minimum delay before invoking the update of observers.
    var REFRESH_DELAY = 20;

    // A list of substrings of CSS properties used to find transition events that
    // might affect dimensions of observed elements.
    var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];

    // Check if MutationObserver is available.
    var mutationObserverSupported = typeof MutationObserver !== 'undefined';

    /**
     * Singleton controller class which handles updates of ResizeObserver instances.
     */
    var ResizeObserverController = function () {
        this.connected_ = false;
        this.mutationEventsAdded_ = false;
        this.mutationsObserver_ = null;
        this.observers_ = [];

        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle$1(this.refresh.bind(this), REFRESH_DELAY);
    };

    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */


    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */


    /**
     * Keeps reference to the instance of MutationObserver.
     *
     * @private {MutationObserver}
     */

    /**
     * Indicates whether DOM listeners have been added.
     *
     * @private {boolean}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }

        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };

    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);

        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }

        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };

    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();

        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };

    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *  dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });

        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });

        return activeObservers.length > 0;
    };

    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }

        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);

        window.addEventListener('resize', this.refresh);

        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);

            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        } else {
            document.addEventListener('DOMSubtreeModified', this.refresh);

            this.mutationEventsAdded_ = true;
        }

        this.connected_ = true;
    };

    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }

        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);

        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }

        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }

        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };

    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (ref) {
        var propertyName = ref.propertyName; if (propertyName === void 0) propertyName = '';

        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });

        if (isReflowProperty) {
            this.refresh();
        }
    };

    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }

        return this.instance_;
    };

    ResizeObserverController.instance_ = null;

    /**
     * Defines non-writable/enumerable properties of the provided target object.
     *
     * @param {Object} target - Object for which to define properties.
     * @param {Object} props - Properties to be defined.
     * @returns {Object} Target object.
     */
    var defineConfigurable = (function (target, props) {
        for (var i = 0, list = Object.keys(props); i < list.length; i += 1) {
            var key = list[i];

            Object.defineProperty(target, key, {
                value: props[key],
                enumerable: false,
                writable: false,
                configurable: true
            });
        }

        return target;
    });

    /**
     * Returns the global object associated with provided element.
     *
     * @param {Object} target
     * @returns {Object}
     */
    var getWindowOf = (function (target) {
        // Assume that the element is an instance of Node, which means that it
        // has the "ownerDocument" property from which we can retrieve a
        // corresponding global object.
        var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;

        // Return the local global object if it's not possible extract one from
        // provided element.
        return ownerGlobal || global$1;
    });

    // Placeholder of an empty content rectangle.
    var emptyRect = createRectInit(0, 0, 0, 0);

    /**
     * Converts provided string to a number.
     *
     * @param {number|string} value
     * @returns {number}
     */
    function toFloat(value) {
        return parseFloat(value) || 0;
    }

    /**
     * Extracts borders size from provided styles.
     *
     * @param {CSSStyleDeclaration} styles
     * @param {...string} positions - Borders positions (top, right, ...)
     * @returns {number}
     */
    function getBordersSize(styles) {
        var positions = [], len = arguments.length - 1;
        while (len-- > 0) positions[len] = arguments[len + 1];

        return positions.reduce(function (size, position) {
            var value = styles['border-' + position + '-width'];

            return size + toFloat(value);
        }, 0);
    }

    /**
     * Extracts paddings sizes from provided styles.
     *
     * @param {CSSStyleDeclaration} styles
     * @returns {Object} Paddings box.
     */
    function getPaddings(styles) {
        var positions = ['top', 'right', 'bottom', 'left'];
        var paddings = {};

        for (var i = 0, list = positions; i < list.length; i += 1) {
            var position = list[i];

            var value = styles['padding-' + position];

            paddings[position] = toFloat(value);
        }

        return paddings;
    }

    /**
     * Calculates content rectangle of provided SVG element.
     *
     * @param {SVGGraphicsElement} target - Element content rectangle of which needs
     *      to be calculated.
     * @returns {DOMRectInit}
     */
    function getSVGContentRect(target) {
        var bbox = target.getBBox();

        return createRectInit(0, 0, bbox.width, bbox.height);
    }

    /**
     * Calculates content rectangle of provided HTMLElement.
     *
     * @param {HTMLElement} target - Element for which to calculate the content rectangle.
     * @returns {DOMRectInit}
     */
    function getHTMLElementContentRect(target) {
        // Client width & height properties can't be
        // used exclusively as they provide rounded values.
        var clientWidth = target.clientWidth;
        var clientHeight = target.clientHeight;

        // By this condition we can catch all non-replaced inline, hidden and
        // detached elements. Though elements with width & height properties less
        // than 0.5 will be discarded as well.
        //
        // Without it we would need to implement separate methods for each of
        // those cases and it's not possible to perform a precise and performance
        // effective test for hidden elements. E.g. even jQuery's ':visible' filter
        // gives wrong results for elements with width & height less than 0.5.
        if (!clientWidth && !clientHeight) {
            return emptyRect;
        }

        var styles = getWindowOf(target).getComputedStyle(target);
        var paddings = getPaddings(styles);
        var horizPad = paddings.left + paddings.right;
        var vertPad = paddings.top + paddings.bottom;

        // Computed styles of width & height are being used because they are the
        // only dimensions available to JS that contain non-rounded values. It could
        // be possible to utilize the getBoundingClientRect if only it's data wasn't
        // affected by CSS transformations let alone paddings, borders and scroll bars.
        var width = toFloat(styles.width),
            height = toFloat(styles.height);

        // Width & height include paddings and borders when the 'border-box' box
        // model is applied (except for IE).
        if (styles.boxSizing === 'border-box') {
            // Following conditions are required to handle Internet Explorer which
            // doesn't include paddings and borders to computed CSS dimensions.
            //
            // We can say that if CSS dimensions + paddings are equal to the "client"
            // properties then it's either IE, and thus we don't need to subtract
            // anything, or an element merely doesn't have paddings/borders styles.
            if (Math.round(width + horizPad) !== clientWidth) {
                width -= getBordersSize(styles, 'left', 'right') + horizPad;
            }

            if (Math.round(height + vertPad) !== clientHeight) {
                height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
            }
        }

        // Following steps can't be applied to the document's root element as its
        // client[Width/Height] properties represent viewport area of the window.
        // Besides, it's as well not necessary as the <html> itself neither has
        // rendered scroll bars nor it can be clipped.
        if (!isDocumentElement(target)) {
            // In some browsers (only in Firefox, actually) CSS width & height
            // include scroll bars size which can be removed at this step as scroll
            // bars are the only difference between rounded dimensions + paddings
            // and "client" properties, though that is not always true in Chrome.
            var vertScrollbar = Math.round(width + horizPad) - clientWidth;
            var horizScrollbar = Math.round(height + vertPad) - clientHeight;

            // Chrome has a rather weird rounding of "client" properties.
            // E.g. for an element with content width of 314.2px it sometimes gives
            // the client width of 315px and for the width of 314.7px it may give
            // 314px. And it doesn't happen all the time. So just ignore this delta
            // as a non-relevant.
            if (Math.abs(vertScrollbar) !== 1) {
                width -= vertScrollbar;
            }

            if (Math.abs(horizScrollbar) !== 1) {
                height -= horizScrollbar;
            }
        }

        return createRectInit(paddings.left, paddings.top, width, height);
    }

    /**
     * Checks whether provided element is an instance of the SVGGraphicsElement.
     *
     * @param {Element} target - Element to be checked.
     * @returns {boolean}
     */
    var isSVGGraphicsElement = (function () {
        // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
        // interface.
        if (typeof SVGGraphicsElement !== 'undefined') {
            return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
        }

        // If it's so, then check that element is at least an instance of the
        // SVGElement and that it has the "getBBox" method.
        // eslint-disable-next-line no-extra-parens
        return function (target) { return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function'; };
    })();

    /**
     * Checks whether provided element is a document element (<html>).
     *
     * @param {Element} target - Element to be checked.
     * @returns {boolean}
     */
    function isDocumentElement(target) {
        return target === getWindowOf(target).document.documentElement;
    }

    /**
     * Calculates an appropriate content rectangle for provided html or svg element.
     *
     * @param {Element} target - Element content rectangle of which needs to be calculated.
     * @returns {DOMRectInit}
     */
    function getContentRect(target) {
        if (!isBrowser) {
            return emptyRect;
        }

        if (isSVGGraphicsElement(target)) {
            return getSVGContentRect(target);
        }

        return getHTMLElementContentRect(target);
    }

    /**
     * Creates rectangle with an interface of the DOMRectReadOnly.
     * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
     *
     * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
     * @returns {DOMRectReadOnly}
     */
    function createReadOnlyRect(ref) {
        var x = ref.x;
        var y = ref.y;
        var width = ref.width;
        var height = ref.height;

        // If DOMRectReadOnly is available use it as a prototype for the rectangle.
        var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
        var rect = Object.create(Constr.prototype);

        // Rectangle's properties are not writable and non-enumerable.
        defineConfigurable(rect, {
            x: x, y: y, width: width, height: height,
            top: y,
            right: x + width,
            bottom: height + y,
            left: x
        });

        return rect;
    }

    /**
     * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
     * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
     *
     * @param {number} x - X coordinate.
     * @param {number} y - Y coordinate.
     * @param {number} width - Rectangle's width.
     * @param {number} height - Rectangle's height.
     * @returns {DOMRectInit}
     */
    function createRectInit(x, y, width, height) {
        return { x: x, y: y, width: width, height: height };
    }

    /**
     * Class that is responsible for computations of the content rectangle of
     * provided DOM element and for keeping track of it's changes.
     */
    var ResizeObservation = function (target) {
        this.broadcastWidth = 0;
        this.broadcastHeight = 0;
        this.contentRect_ = createRectInit(0, 0, 0, 0);

        this.target = target;
    };

    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */


    /**
     * Reference to the last observed content rectangle.
     *
     * @private {DOMRectInit}
     */


    /**
     * Broadcasted width of content rectangle.
     *
     * @type {number}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);

        this.contentRect_ = rect;

        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
    };

    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;

        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;

        return rect;
    };

    var ResizeObserverEntry = function (target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);

        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    };

    var ResizeObserverSPI = function (callback, controller, callbackCtx) {
        this.activeObservations_ = [];
        this.observations_ = new MapShim();

        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }

        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    };

    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */


    /**
     * Registry of the ResizeObservation instances.
     *
     * @private {Map<Element, ResizeObservation>}
     */


    /**
     * Public ResizeObserver instance which will be passed to the callback
     * function and used as a value of it's "this" binding.
     *
     * @private {ResizeObserver}
     */

    /**
     * Collection of resize observations that have detected changes in dimensions
     * of elements.
     *
     * @private {Array<ResizeObservation>}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }

        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }

        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }

        var observations = this.observations_;

        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }

        observations.set(target, new ResizeObservation(target));

        this.controller_.addObserver(this);

        // Force the update of observations.
        this.controller_.refresh();
    };

    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }

        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }

        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }

        var observations = this.observations_;

        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }

        observations.delete(target);

        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };

    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };

    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var this$1 = this;

        this.clearActive();

        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                this$1.activeObservations_.push(observation);
            }
        });
    };

    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }

        var ctx = this.callbackCtx_;

        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });

        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };

    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };

    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };

    // Registry of internal observers. If WeakMap is not available use current shim
    // for the Map collection as it has all required methods and because WeakMap
    // can't be fully polyfilled anyway.
    var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();

    /**
     * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
     * exposing only those methods and properties that are defined in the spec.
     */
    var ResizeObserver = function (callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }

        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);

        observers.set(this, observer);
    };

    // Expose public methods of ResizeObserver.
    ['observe', 'unobserve', 'disconnect'].forEach(function (method) {
        ResizeObserver.prototype[method] = function () {
            return (ref = observers.get(this))[method].apply(ref, arguments);
            var ref;
        };
    });

    var index = (function () {
        // Export existing implementation if available.
        if (typeof global$1.ResizeObserver !== 'undefined') {
            return global$1.ResizeObserver;
        }

        return ResizeObserver;
    })();

    var canUseDOM = !!(
        typeof window !== 'undefined' &&
        window.document &&
        window.document.createElement
    );

    var canUseDom = canUseDOM;

    var SimpleBar =
        /*#__PURE__*/
        function () {
            function SimpleBar(element, options) {
                var _this = this;

                _classCallCheck(this, SimpleBar);

                this.onScrollX = function () {
                    if (!_this.scrollXTicking) {
                        window.requestAnimationFrame(_this.scrollX);
                        _this.scrollXTicking = true;
                    }
                };

                this.onScrollY = function () {
                    if (!_this.scrollYTicking) {
                        window.requestAnimationFrame(_this.scrollY);
                        _this.scrollYTicking = true;
                    }
                };

                this.scrollX = function () {
                    _this.showScrollbar('x');

                    _this.positionScrollbar('x');

                    _this.scrollXTicking = false;
                };

                this.scrollY = function () {
                    _this.showScrollbar('y');

                    _this.positionScrollbar('y');

                    _this.scrollYTicking = false;
                };

                this.onMouseEnter = function () {
                    _this.showScrollbar('x');

                    _this.showScrollbar('y');
                };

                this.onWindowResize = function () {
                    _this.hideNativeScrollbar();
                };

                this.hideScrollbars = function () {
                    _this.scrollbarX.classList.remove('visible');

                    _this.scrollbarY.classList.remove('visible');

                    _this.isVisible.x = false;
                    _this.isVisible.y = false;
                    window.clearTimeout(_this.flashTimeout);
                };

                this.onMouseDown = function (e) {
                    var bbox = _this.scrollbarY.getBoundingClientRect();

                    if (e.pageX >= bbox.x && e.clientX <= bbox.x + bbox.width && e.clientY >= bbox.y && e.clientY <= bbox.y + bbox.height) {
                        e.preventDefault();

                        _this.onDrag(e, 'y');
                    }
                };

                this.drag = function (e) {
                    var eventOffset, track, scrollEl;
                    e.preventDefault();

                    if (_this.currentAxis === 'y') {
                        eventOffset = e.pageY;
                        track = _this.trackY;
                        scrollEl = _this.scrollContentEl;
                    } else {
                        eventOffset = e.pageX;
                        track = _this.trackX;
                        scrollEl = _this.contentEl;
                    } // Calculate how far the user's mouse is from the top/left of the scrollbar (minus the dragOffset).


                    var dragPos = eventOffset - track.getBoundingClientRect()[_this.offsetAttr[_this.currentAxis]] - _this.dragOffset[_this.currentAxis]; // Convert the mouse position into a percentage of the scrollbar height/width.


                    var dragPerc = dragPos / track[_this.sizeAttr[_this.currentAxis]]; // Scroll the content by the same percentage.

                    var scrollPos = dragPerc * _this.contentEl[_this.scrollSizeAttr[_this.currentAxis]];
                    scrollEl[_this.scrollOffsetAttr[_this.currentAxis]] = scrollPos;
                };

                this.onEndDrag = function () {
                    document.removeEventListener('mousemove', _this.drag);
                    document.removeEventListener('mouseup', _this.onEndDrag);
                };

                this.el = element;
                this.flashTimeout;
                this.contentEl;
                this.scrollContentEl;
                this.dragOffset = {
                    x: 0,
                    y: 0
                };
                this.isEnabled = {
                    x: true,
                    y: true
                };
                this.isVisible = {
                    x: false,
                    y: false
                };
                this.scrollOffsetAttr = {
                    x: 'scrollLeft',
                    y: 'scrollTop'
                };
                this.sizeAttr = {
                    x: 'offsetWidth',
                    y: 'offsetHeight'
                };
                this.scrollSizeAttr = {
                    x: 'scrollWidth',
                    y: 'scrollHeight'
                };
                this.offsetAttr = {
                    x: 'left',
                    y: 'top'
                };
                this.globalObserver;
                this.mutationObserver;
                this.resizeObserver;
                this.currentAxis;
                this.scrollbarWidth;
                this.options = Object.assign({}, SimpleBar.defaultOptions, options);
                this.isRtl = this.options.direction === 'rtl';
                this.classNames = this.options.classNames;
                this.offsetSize = 20;
                this.recalculate = lodash_throttle(this.recalculate.bind(this), 1000);
                this.init();
            }

            _createClass(SimpleBar, [{
                key: "init",
                value: function init() {
                    // Save a reference to the instance, so we know this DOM node has already been instancied
                    this.el.SimpleBar = this;
                    this.initDOM(); // We stop here on server-side

                    if (canUseDom) {
                        // Calculate content size
                        this.hideNativeScrollbar();
                        this.render();
                        this.initListeners();
                    }
                }
            }, {
                key: "initDOM",
                value: function initDOM() {
                    var _this2 = this;

                    // make sure this element doesn't have the elements yet
                    if (Array.from(this.el.children).filter(function (child) {
                        return child.classList.contains(_this2.classNames.scrollContent);
                    }).length) {
                        // assume that element has his DOM already initiated
                        this.trackX = this.el.querySelector(".".concat(this.classNames.track, ".horizontal"));
                        this.trackY = this.el.querySelector(".".concat(this.classNames.track, ".vertical"));
                        this.scrollContentEl = this.el.querySelector(".".concat(this.classNames.scrollContent));
                        this.contentEl = this.el.querySelector(".".concat(this.classNames.content));
                    } else {
                        // Prepare DOM
                        this.scrollContentEl = document.createElement('div');
                        this.contentEl = document.createElement('div');
                        this.scrollContentEl.classList.add(this.classNames.scrollContent);
                        this.contentEl.classList.add(this.classNames.content);

                        while (this.el.firstChild) {
                            this.contentEl.appendChild(this.el.firstChild);
                        }

                        this.scrollContentEl.appendChild(this.contentEl);
                        this.el.appendChild(this.scrollContentEl);
                    }

                    if (!this.trackX || !this.trackY) {
                        var track = document.createElement('div');
                        var scrollbar = document.createElement('div');
                        track.classList.add(this.classNames.track);
                        scrollbar.classList.add(this.classNames.scrollbar);

                        if (!this.options.autoHide) {
                            scrollbar.classList.add('visible');
                        }

                        track.appendChild(scrollbar);
                        this.trackX = track.cloneNode(true);
                        this.trackX.classList.add('horizontal');
                        this.trackY = track.cloneNode(true);
                        this.trackY.classList.add('vertical');
                        this.el.insertBefore(this.trackX, this.el.firstChild);
                        this.el.insertBefore(this.trackY, this.el.firstChild);
                    }

                    this.scrollbarX = this.trackX.querySelector(".".concat(this.classNames.scrollbar));
                    this.scrollbarY = this.trackY.querySelector(".".concat(this.classNames.scrollbar));
                    this.el.setAttribute('data-simplebar', 'init');
                }
            }, {
                key: "initListeners",
                value: function initListeners() {
                    var _this3 = this;

                    // Event listeners
                    if (this.options.autoHide) {
                        this.el.addEventListener('mouseenter', this.onMouseEnter);
                    }

                    this.el.addEventListener('mousedown', this.onMouseDown);
                    this.contentEl.addEventListener('scroll', this.onScrollX);
                    this.scrollContentEl.addEventListener('scroll', this.onScrollY); // Browser zoom triggers a window resize

                    window.addEventListener('resize', this.onWindowResize); // MutationObserver is IE11+

                    if (typeof MutationObserver !== 'undefined') {
                        // create an observer instance
                        this.mutationObserver = new MutationObserver(function (mutations) {
                            mutations.forEach(function (mutation) {
                                if (_this3.isChildNode(mutation.target) || mutation.addedNodes.length) {
                                    _this3.recalculate();
                                }
                            });
                        }); // pass in the target node, as well as the observer options

                        this.mutationObserver.observe(this.el, {
                            attributes: true,
                            childList: true,
                            characterData: true,
                            subtree: true
                        });
                    }

                    this.resizeObserver = new index(this.recalculate);
                    this.resizeObserver.observe(this.el);
                }
                /**
                 * Recalculate scrollbar
                 */

            }, {
                key: "recalculate",
                value: function recalculate() {
                    this.render();
                }
            }, {
                key: "render",
                value: function render() {
                    this.contentSizeX = this.contentEl[this.scrollSizeAttr['x']];
                    this.contentSizeY = this.contentEl[this.scrollSizeAttr['y']] - (this.scrollbarWidth || this.offsetSize);
                    this.trackXSize = this.trackX[this.sizeAttr['x']];
                    this.trackYSize = this.trackY[this.sizeAttr['y']]; // Set isEnabled to false if scrollbar is not necessary (content is shorter than wrapper)

                    this.isEnabled['x'] = this.trackXSize < this.contentSizeX;
                    this.isEnabled['y'] = this.trackYSize < this.contentSizeY;
                    this.resizeScrollbar('x');
                    this.resizeScrollbar('y');
                    this.positionScrollbar('x');
                    this.positionScrollbar('y');
                    this.toggleTrackVisibility('x');
                    this.toggleTrackVisibility('y');
                }
                /**
                 * Resize scrollbar
                 */

            }, {
                key: "resizeScrollbar",
                value: function resizeScrollbar() {
                    var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'y';
                    var scrollbar;
                    var contentSize;
                    var trackSize;

                    if (!this.isEnabled[axis] && !this.options.forceVisible) {
                        return;
                    }

                    if (axis === 'x') {
                        scrollbar = this.scrollbarX;
                        contentSize = this.contentSizeX;
                        trackSize = this.trackXSize;
                    } else {
                        // 'y'
                        scrollbar = this.scrollbarY;
                        contentSize = this.contentSizeY;
                        trackSize = this.trackYSize;
                    }

                    var scrollbarRatio = trackSize / contentSize; // Calculate new height/position of drag handle.

                    this.handleSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);

                    if (this.options.scrollbarMaxSize) {
                        this.handleSize = Math.min(this.handleSize, this.options.scrollbarMaxSize);
                    }

                    if (axis === 'x') {
                        scrollbar.style.width = "".concat(this.handleSize, "px");
                    } else {
                        scrollbar.style.height = "".concat(this.handleSize, "px");
                    }
                }
            }, {
                key: "positionScrollbar",
                value: function positionScrollbar() {
                    var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'y';
                    var scrollbar;
                    var scrollOffset;
                    var contentSize;
                    var trackSize;

                    if (axis === 'x') {
                        scrollbar = this.scrollbarX;
                        scrollOffset = this.contentEl[this.scrollOffsetAttr[axis]]; // Either scrollTop() or scrollLeft().

                        contentSize = this.contentSizeX;
                        trackSize = this.trackXSize;
                    } else {
                        // 'y'
                        scrollbar = this.scrollbarY;
                        scrollOffset = this.scrollContentEl[this.scrollOffsetAttr[axis]]; // Either scrollTop() or scrollLeft().

                        contentSize = this.contentSizeY;
                        trackSize = this.trackYSize;
                    }

                    var scrollPourcent = scrollOffset / (contentSize - trackSize);
                    var handleOffset = ~~((trackSize - this.handleSize) * scrollPourcent);

                    if (this.isEnabled[axis] || this.options.forceVisible) {
                        if (axis === 'x') {
                            scrollbar.style.transform = "translate3d(".concat(handleOffset, "px, 0, 0)");
                        } else {
                            scrollbar.style.transform = "translate3d(0, ".concat(handleOffset, "px, 0)");
                        }
                    }
                }
            }, {
                key: "toggleTrackVisibility",
                value: function toggleTrackVisibility() {
                    var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'y';
                    var track = axis === 'y' ? this.trackY : this.trackX;
                    var scrollbar = axis === 'y' ? this.scrollbarY : this.scrollbarX;

                    if (this.isEnabled[axis] || this.options.forceVisible) {
                        track.style.visibility = 'visible';
                    } else {
                        track.style.visibility = 'hidden';
                    } // Even if forceVisible is enabled, scrollbar itself should be hidden


                    if (this.options.forceVisible) {
                        if (this.isEnabled[axis]) {
                            scrollbar.style.visibility = 'visible';
                        } else {
                            scrollbar.style.visibility = 'hidden';
                        }
                    }
                }
            }, {
                key: "hideNativeScrollbar",
                value: function hideNativeScrollbar() {
                    // Recalculate scrollbarWidth in case it's a zoom
                    this.scrollbarWidth = scrollbarWidth();
                    this.scrollContentEl.style[this.isRtl ? 'paddingLeft' : 'paddingRight'] = "".concat(this.scrollbarWidth || this.offsetSize, "px");
                    this.scrollContentEl.style.marginBottom = "-".concat(this.scrollbarWidth * 2 || this.offsetSize, "px");
                    this.contentEl.style.paddingBottom = "".concat(this.scrollbarWidth || this.offsetSize, "px");

                    if (this.scrollbarWidth !== 0) {
                        this.contentEl.style[this.isRtl ? 'marginLeft' : 'marginRight'] = "-".concat(this.scrollbarWidth, "px");
                    }
                }
                /**
                 * On scroll event handling
                 */

            }, {
                key: "showScrollbar",

                /**
                 * Show scrollbar
                 */
                value: function showScrollbar() {
                    var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'y';
                    var scrollbar; // Scrollbar already visible

                    if (this.isVisible[axis]) {
                        return;
                    }

                    if (axis === 'x') {
                        scrollbar = this.scrollbarX;
                    } else {
                        // 'y'
                        scrollbar = this.scrollbarY;
                    }

                    if (this.isEnabled[axis]) {
                        scrollbar.classList.add('visible');
                        this.isVisible[axis] = true;
                    }

                    if (!this.options.autoHide) {
                        return;
                    }

                    this.flashTimeout = window.setTimeout(this.hideScrollbars, this.options.timeout);
                }
                /**
                 * Hide Scrollbar
                 */

            }, {
                key: "onDrag",

                /**
                 * on scrollbar handle drag
                 */
                value: function onDrag(e) {
                    var axis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'y';
                    // Preventing the event's default action stops text being
                    // selectable during the drag.
                    e.preventDefault();
                    var scrollbar = axis === 'y' ? this.scrollbarY : this.scrollbarX; // Measure how far the user's mouse is from the top of the scrollbar drag handle.

                    var eventOffset = axis === 'y' ? e.pageY : e.pageX;
                    this.dragOffset[axis] = eventOffset - scrollbar.getBoundingClientRect()[this.offsetAttr[axis]];
                    this.currentAxis = axis;
                    document.addEventListener('mousemove', this.drag);
                    document.addEventListener('mouseup', this.onEndDrag);
                }
                /**
                 * Drag scrollbar handle
                 */

            }, {
                key: "getScrollElement",

                /**
                 * Getter for original scrolling element
                 */
                value: function getScrollElement() {
                    var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'y';
                    return axis === 'y' ? this.scrollContentEl : this.contentEl;
                }
                /**
                 * Getter for content element
                 */

            }, {
                key: "getContentElement",
                value: function getContentElement() {
                    return this.contentEl;
                }
            }, {
                key: "removeListeners",
                value: function removeListeners() {
                    // Event listeners
                    if (this.options.autoHide) {
                        this.el.removeEventListener('mouseenter', this.onMouseEnter);
                    }

                    this.scrollContentEl.removeEventListener('scroll', this.onScrollY);
                    this.contentEl.removeEventListener('scroll', this.onScrollX);
                    this.mutationObserver.disconnect();
                    this.resizeObserver.disconnect();
                }
                /**
                 * UnMount mutation observer and delete SimpleBar instance from DOM element
                 */

            }, {
                key: "unMount",
                value: function unMount() {
                    this.removeListeners();
                    this.el.SimpleBar = null;
                }
                /**
                 * Recursively walks up the parent nodes looking for this.el
                 */

            }, {
                key: "isChildNode",
                value: function isChildNode(el) {
                    if (el === null) return false;
                    if (el === this.el) return true;
                    return this.isChildNode(el.parentNode);
                }
            }], [{
                key: "initHtmlApi",
                value: function initHtmlApi() {
                    this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this); // MutationObserver is IE11+

                    if (typeof MutationObserver !== 'undefined') {
                        // Mutation observer to observe dynamically added elements
                        this.globalObserver = new MutationObserver(function (mutations) {
                            mutations.forEach(function (mutation) {
                                Array.from(mutation.addedNodes).forEach(function (addedNode) {
                                    if (addedNode.nodeType === 1) {
                                        if (addedNode.hasAttribute('data-simplebar')) {
                                            !addedNode.SimpleBar && new SimpleBar(addedNode, SimpleBar.getElOptions(addedNode));
                                        } else {
                                            Array.from(addedNode.querySelectorAll('[data-simplebar]')).forEach(function (el) {
                                                !el.SimpleBar && new SimpleBar(el, SimpleBar.getElOptions(el));
                                            });
                                        }
                                    }
                                });
                                Array.from(mutation.removedNodes).forEach(function (removedNode) {
                                    if (removedNode.nodeType === 1) {
                                        if (removedNode.hasAttribute('data-simplebar')) {
                                            removedNode.SimpleBar && removedNode.SimpleBar.unMount();
                                        } else {
                                            Array.from(removedNode.querySelectorAll('[data-simplebar]')).forEach(function (el) {
                                                el.SimpleBar && el.SimpleBar.unMount();
                                            });
                                        }
                                    }
                                });
                            });
                        });
                        this.globalObserver.observe(document, {
                            childList: true,
                            subtree: true
                        });
                    } // Taken from jQuery `ready` function
                    // Instantiate elements already present on the page


                    if (document.readyState === 'complete' || document.readyState !== 'loading' && !document.documentElement.doScroll) {
                        // Handle it asynchronously to allow scripts the opportunity to delay init
                        window.setTimeout(this.initDOMLoadedElements);
                    } else {
                        document.addEventListener('DOMContentLoaded', this.initDOMLoadedElements);
                        window.addEventListener('load', this.initDOMLoadedElements);
                    }
                } // Helper function to retrieve options from element attributes

            }, {
                key: "getElOptions",
                value: function getElOptions(el) {
                    var options = Array.from(el.attributes).reduce(function (acc, attribute) {
                        var option = attribute.name.match(/data-simplebar-(.+)/);

                        if (option) {
                            var key = option[1].replace(/\W+(.)/g, function (x, chr) {
                                return chr.toUpperCase();
                            });

                            switch (attribute.value) {
                                case 'true':
                                    acc[key] = true;
                                    break;

                                case 'false':
                                    acc[key] = false;
                                    break;

                                case undefined:
                                    acc[key] = true;
                                    break;

                                default:
                                    acc[key] = attribute.value;
                            }
                        }

                        return acc;
                    }, {});
                    return options;
                }
            }, {
                key: "removeObserver",
                value: function removeObserver() {
                    this.globalObserver.disconnect();
                }
            }, {
                key: "initDOMLoadedElements",
                value: function initDOMLoadedElements() {
                    document.removeEventListener('DOMContentLoaded', this.initDOMLoadedElements);
                    window.removeEventListener('load', this.initDOMLoadedElements);
                    Array.from(document.querySelectorAll('[data-simplebar]')).forEach(function (el) {
                        if (!el.SimpleBar) new SimpleBar(el, SimpleBar.getElOptions(el));
                    });
                }
            }, {
                key: "defaultOptions",
                get: function get() {
                    return {
                        autoHide: true,
                        forceVisible: false,
                        classNames: {
                            content: 'simplebar-content',
                            scrollContent: 'simplebar-scroll-content',
                            scrollbar: 'simplebar-scrollbar',
                            track: 'simplebar-track'
                        },
                        scrollbarMinSize: 25,
                        scrollbarMaxSize: 0,
                        direction: 'ltr',
                        timeout: 1000
                    };
                }
            }]);

            return SimpleBar;
        }();

    if (canUseDom) {
        SimpleBar.initHtmlApi();
    }

    return SimpleBar;

})));

"use strict"; var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }; !function (t) { "function" == typeof define && define.amd ? define(["jquery"], t) : "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = function (i, s) { return void 0 === s && (s = "undefined" != typeof window ? require("jquery") : require("jquery")(i)), t(s), s } : t(jQuery) }(function (t) { return t.fn.tilt = function (i) { var s = function () { this.ticking || (requestAnimationFrame(g.bind(this)), this.ticking = !0) }, e = function () { var i = this; t(this).on("mousemove", o), t(this).on("mouseenter", a), this.settings.reset && t(this).on("mouseleave", l), this.settings.glare && t(window).on("resize", d.bind(i)) }, n = function () { var i = this; void 0 !== this.timeout && clearTimeout(this.timeout), t(this).css({ transition: this.settings.speed + "ms " + this.settings.easing }), this.settings.glare && this.glareElement.css({ transition: "opacity " + this.settings.speed + "ms " + this.settings.easing }), this.timeout = setTimeout(function () { t(i).css({ transition: "" }), i.settings.glare && i.glareElement.css({ transition: "" }) }, this.settings.speed) }, a = function (i) { this.ticking = !1, t(this).css({ "will-change": "transform" }), n.call(this), t(this).trigger("tilt.mouseEnter") }, r = function (i) { return "undefined" == typeof i && (i = { pageX: t(this).offset().left + t(this).outerWidth() / 2, pageY: t(this).offset().top + t(this).outerHeight() / 2 }), { x: i.pageX, y: i.pageY } }, o = function (t) { this.mousePositions = r(t), s.call(this) }, l = function () { n.call(this), this.reset = !0, s.call(this), t(this).trigger("tilt.mouseLeave") }, h = function () { var i = t(this).outerWidth(), s = t(this).outerHeight(), e = t(this).offset().left, n = t(this).offset().top, a = (this.mousePositions.x - e) / i, r = (this.mousePositions.y - n) / s, o = (this.settings.maxTilt / 2 - a * this.settings.maxTilt).toFixed(2), l = (r * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(2), h = Math.atan2(this.mousePositions.x - (e + i / 2), -(this.mousePositions.y - (n + s / 2))) * (180 / Math.PI); return { tiltX: o, tiltY: l, percentageX: 100 * a, percentageY: 100 * r, angle: h } }, g = function () { return this.transforms = h.call(this), this.reset ? (this.reset = !1, t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(0deg) rotateY(0deg)"), void (this.settings.glare && (this.glareElement.css("transform", "rotate(180deg) translate(-50%, -50%)"), this.glareElement.css("opacity", "0")))) : (t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.disableAxis ? 0 : this.transforms.tiltY) + "deg) rotateY(" + ("y" === this.settings.disableAxis ? 0 : this.transforms.tiltX) + "deg) scale3d(" + this.settings.scale + "," + this.settings.scale + "," + this.settings.scale + ")"), this.settings.glare && (this.glareElement.css("transform", "rotate(" + this.transforms.angle + "deg) translate(-50%, -50%)"), this.glareElement.css("opacity", "" + this.transforms.percentageY * this.settings.maxGlare / 100)), t(this).trigger("change", [this.transforms]), void (this.ticking = !1)) }, c = function () { var i = this.settings.glarePrerender; if (i || t(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'), this.glareElementWrapper = t(this).find(".js-tilt-glare"), this.glareElement = t(this).find(".js-tilt-glare-inner"), !i) { var s = { position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }; this.glareElementWrapper.css(s).css({ overflow: "hidden", "pointer-events": "none" }), this.glareElement.css({ position: "absolute", top: "50%", left: "50%", "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)", width: "" + 2 * t(this).outerWidth(), height: "" + 2 * t(this).outerWidth(), transform: "rotate(180deg) translate(-50%, -50%)", "transform-origin": "0% 0%", opacity: "0" }) } }, d = function () { this.glareElement.css({ width: "" + 2 * t(this).outerWidth(), height: "" + 2 * t(this).outerWidth() }) }; return t.fn.tilt.destroy = function () { t(this).each(function () { t(this).find(".js-tilt-glare").remove(), t(this).css({ "will-change": "", transform: "" }), t(this).off("mousemove mouseenter mouseleave") }) }, t.fn.tilt.getValues = function () { var i = []; return t(this).each(function () { this.mousePositions = r.call(this), i.push(h.call(this)) }), i }, t.fn.tilt.reset = function () { t(this).each(function () { var i = this; this.mousePositions = r.call(this), this.settings = t(this).data("settings"), l.call(this), setTimeout(function () { i.reset = !1 }, this.settings.transition) }) }, this.each(function () { var s = this; this.settings = t.extend({ maxTilt: t(this).is("[data-tilt-max]") ? t(this).data("tilt-max") : 20, perspective: t(this).is("[data-tilt-perspective]") ? t(this).data("tilt-perspective") : 300, easing: t(this).is("[data-tilt-easing]") ? t(this).data("tilt-easing") : "cubic-bezier(.03,.98,.52,.99)", scale: t(this).is("[data-tilt-scale]") ? t(this).data("tilt-scale") : "1", speed: t(this).is("[data-tilt-speed]") ? t(this).data("tilt-speed") : "400", transition: !t(this).is("[data-tilt-transition]") || t(this).data("tilt-transition"), disableAxis: t(this).is("[data-tilt-disable-axis]") ? t(this).data("tilt-disable-axis") : null, axis: t(this).is("[data-tilt-axis]") ? t(this).data("tilt-axis") : null, reset: !t(this).is("[data-tilt-reset]") || t(this).data("tilt-reset"), glare: !!t(this).is("[data-tilt-glare]") && t(this).data("tilt-glare"), maxGlare: t(this).is("[data-tilt-maxglare]") ? t(this).data("tilt-maxglare") : 1 }, i), null !== this.settings.axis && (console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"), this.settings.disableAxis = this.settings.axis), this.init = function () { t(s).data("settings", s.settings), s.settings.glare && c.call(s), e.call(s) }, this.init() }) }, t("[data-tilt]").tilt(), !0 });
/*
 *  Vide - v0.5.1
 *  Easy as hell jQuery plugin for video backgrounds.
 *  http://vodkabears.github.io/vide/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */
!function (a, b) { "function" == typeof define && define.amd ? define(["jquery"], b) : b("object" == typeof exports ? require("jquery") : a.jQuery) }(this, function (a) { "use strict"; function b(a) { var b, c, d, e, f, g, h, i = {}; for (f = a.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(","), h = 0, g = f.length; h < g && (c = f[h], c.search(/^(http|https|ftp):\/\//) === -1 && c.search(":") !== -1); h++)b = c.indexOf(":"), d = c.substring(0, b), e = c.substring(b + 1), e || (e = void 0), "string" == typeof e && (e = "true" === e || "false" !== e && e), "string" == typeof e && (e = isNaN(e) ? e : +e), i[d] = e; return null == d && null == e ? a : i } function c(a) { a = "" + a; var b, c, d, e = a.split(/\s+/), f = "50%", g = "50%"; for (d = 0, b = e.length; d < b; d++)c = e[d], "left" === c ? f = "0%" : "right" === c ? f = "100%" : "top" === c ? g = "0%" : "bottom" === c ? g = "100%" : "center" === c ? 0 === d ? f = "50%" : g = "50%" : 0 === d ? f = c : g = c; return { x: f, y: g } } function d(b, c) { var d = function () { c(this.src) }; a('<img src="' + b + '.gif">').on("load", d), a('<img src="' + b + '.jpg">').on("load", d), a('<img src="' + b + '.jpeg">').on("load", d), a('<img src="' + b + '.png">').on("load", d) } function e(c, d, e) { if (this.$element = a(c), "string" == typeof d && (d = b(d)), e ? "string" == typeof e && (e = b(e)) : e = {}, "string" == typeof d) d = d.replace(/\.\w*$/, ""); else if ("object" == typeof d) for (var f in d) d.hasOwnProperty(f) && (d[f] = d[f].replace(/\.\w*$/, "")); this.settings = a.extend({}, g, e), this.path = d; try { this.init() } catch (i) { if (i.message !== h) throw i } } var f = "vide", g = { volume: 1, playbackRate: 1, muted: !0, loop: !0, autoplay: !0, position: "50% 50%", posterType: "detect", resizing: !0, bgColor: "transparent", className: "" }, h = "Not implemented"; e.prototype.init = function () { var b, e, f = this, g = f.path, i = g, j = "", k = f.$element, l = f.settings, m = c(l.position), n = l.posterType; e = f.$wrapper = a("<div>").addClass(l.className).css({ position: "absolute", "z-index": -1, top: 0, left: 0, bottom: 0, right: 0, overflow: "hidden", "-webkit-background-size": "cover", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover", "background-color": l.bgColor, "background-repeat": "no-repeat", "background-position": m.x + " " + m.y }), "object" == typeof g && (g.poster ? i = g.poster : g.mp4 ? i = g.mp4 : g.webm ? i = g.webm : g.ogv && (i = g.ogv)), "detect" === n ? d(i, function (a) { e.css("background-image", "url(" + a + ")") }) : "none" !== n && e.css("background-image", "url(" + i + "." + n + ")"), "static" === k.css("position") && k.css("position", "relative"), k.prepend(e), "object" == typeof g ? (g.mp4 && (j += '<source src="' + g.mp4 + '.mp4" type="video/mp4">'), g.webm && (j += '<source src="' + g.webm + '.webm" type="video/webm">'), g.ogv && (j += '<source src="' + g.ogv + '.ogv" type="video/ogg">'), b = f.$video = a("<video>" + j + "</video>")) : b = f.$video = a('<video><source src="' + g + '.mp4" type="video/mp4"><source src="' + g + '.webm" type="video/webm"><source src="' + g + '.ogv" type="video/ogg"></video>'); try { b.prop({ autoplay: l.autoplay, loop: l.loop, volume: l.volume, muted: l.muted, defaultMuted: l.muted, playbackRate: l.playbackRate, defaultPlaybackRate: l.playbackRate }) } catch (o) { throw new Error(h) } b.css({ margin: "auto", position: "absolute", "z-index": -1, top: m.y, left: m.x, "-webkit-transform": "translate(-" + m.x + ", -" + m.y + ")", "-ms-transform": "translate(-" + m.x + ", -" + m.y + ")", "-moz-transform": "translate(-" + m.x + ", -" + m.y + ")", transform: "translate(-" + m.x + ", -" + m.y + ")", visibility: "hidden", opacity: 0 }).one("canplaythrough.vide", function () { f.resize() }).one("playing.vide", function () { b.css({ visibility: "visible", opacity: 1 }), e.css("background-image", "none") }), k.on("resize.vide", function () { l.resizing && f.resize() }), e.append(b) }, e.prototype.getVideoObject = function () { return this.$video[0] }, e.prototype.resize = function () { if (this.$video) { var a = this.$wrapper, b = this.$video, c = b[0], d = c.videoHeight, e = c.videoWidth, f = a.height(), g = a.width(); g / e > f / d ? b.css({ width: g + 2, height: "auto" }) : b.css({ width: "auto", height: f + 2 }) } }, e.prototype.destroy = function () { delete a[f].lookup[this.index], this.$video && this.$video.off(f), this.$element.off(f).removeData(f), this.$wrapper.remove() }, a[f] = { lookup: [] }, a.fn[f] = function (b, c) { var d; return this.each(function () { d = a.data(this, f), d && d.destroy(), d = new e(this, b, c), d.index = a[f].lookup.push(d) - 1, a.data(this, f, d) }), this }, a(document).ready(function () { var b = a(window); b.on("resize.vide", function () { for (var b, c = a[f].lookup.length, d = 0; d < c; d++)b = a[f].lookup[d], b && b.settings.resizing && b.resize() }), b.on("unload.vide", function () { return !1 }), a(document).find("[data-vide-bg]").each(function (b, c) { var d = a(c), e = d.data("vide-options"), g = d.data("vide-bg"); d[f](g, e) }) }) });
/*! Superslides - v0.6.3-wip - 2013-12-17
* https://github.com/nicinabox/superslides
* Copyright (c) 2013 Nic Aitch; Licensed MIT */
(function (i, t) { var n, e = "superslides"; n = function (n, e) { this.options = t.extend({ play: !1, animation_speed: 600, animation_easing: "swing", animation: "slide", inherit_width_from: i, inherit_height_from: i, pagination: !0, hashchange: !1, scrollable: !0, elements: { preserve: ".preserve", nav: ".slides-navigation", container: ".slides-container", pagination: ".slides-pagination" } }, e); var s = this, o = t("<div>", { "class": "slides-control" }), a = 1; this.$el = t(n), this.$container = this.$el.find(this.options.elements.container); var r = function () { return a = s._findMultiplier(), s.$el.on("click", s.options.elements.nav + " a", function (i) { i.preventDefault(), s.stop(), t(this).hasClass("next") ? s.animate("next", function () { s.start() }) : s.animate("prev", function () { s.start() }) }), t(document).on("keyup", function (i) { 37 === i.keyCode && s.animate("prev"), 39 === i.keyCode && s.animate("next") }), t(i).on("resize", function () { setTimeout(function () { var i = s.$container.children(); s.width = s._findWidth(), s.height = s._findHeight(), i.css({ width: s.width, left: s.width }), s.css.containers(), s.css.images() }, 10) }), s.options.hashchange && t(i).on("hashchange", function () { var i, t = s._parseHash(); i = s._upcomingSlide(t), i >= 0 && i !== s.current && s.animate(i) }), s.pagination._events(), s.start(), s }, h = { containers: function () { s.init ? (s.$el.css({ height: s.height }), s.$control.css({ width: s.width * a, left: -s.width }), s.$container.css({})) : (t("body").css({ margin: 0 }), s.$el.css({ position: "relative", overflow: "hidden", width: "100%", height: s.height }), s.$control.css({ position: "relative", transform: "translate3d(0)", height: "100%", width: s.width * a, left: -s.width }), s.$container.css({ display: "none", margin: "0", padding: "0", listStyle: "none", position: "relative", height: "100%" })), 1 === s.size() && s.$el.find(s.options.elements.nav).hide() }, images: function () { var i = s.$container.find("img").not(s.options.elements.preserve); i.removeAttr("width").removeAttr("height").css({ "-webkit-backface-visibility": "hidden", "-ms-interpolation-mode": "bicubic", position: "absolute", left: "0", top: "0", "z-index": "-1", "max-width": "none" }), i.each(function () { var i = s.image._aspectRatio(this), n = this; if (t.data(this, "processed")) s.image._scale(n, i), s.image._center(n, i); else { var e = new Image; e.onload = function () { s.image._scale(n, i), s.image._center(n, i), t.data(n, "processed", !0) }, e.src = this.src } }) }, children: function () { var i = s.$container.children(); i.is("img") && (i.each(function () { if (t(this).is("img")) { t(this).wrap("<div>"); var i = t(this).attr("id"); t(this).removeAttr("id"), t(this).parent().attr("id", i) } }), i = s.$container.children()), s.init || i.css({ display: "none", left: 2 * s.width }), i.css({ position: "absolute", overflow: "hidden", height: "100%", width: s.width, top: 0, zIndex: 0 }) } }, c = { slide: function (i, t) { var n = s.$container.children(), e = n.eq(i.upcoming_slide); e.css({ left: i.upcoming_position, display: "block" }), s.$control.animate({ left: i.offset }, s.options.animation_speed, s.options.animation_easing, function () { s.size() > 1 && (s.$control.css({ left: -s.width }), n.eq(i.upcoming_slide).css({ left: s.width, zIndex: 2 }), i.outgoing_slide >= 0 && n.eq(i.outgoing_slide).css({ left: s.width, display: "none", zIndex: 0 })), t() }) }, fade: function (i, t) { var n = this, e = n.$container.children(), s = e.eq(i.outgoing_slide), o = e.eq(i.upcoming_slide); o.css({ left: this.width, opacity: 0, display: "block" }).animate({ opacity: 1 }, n.options.animation_speed, n.options.animation_easing), i.outgoing_slide >= 0 ? s.animate({ opacity: 0 }, n.options.animation_speed, n.options.animation_easing, function () { n.size() > 1 && (e.eq(i.upcoming_slide).css({ zIndex: 2 }), i.outgoing_slide >= 0 && e.eq(i.outgoing_slide).css({ opacity: 1, display: "none", zIndex: 0 })), t() }) : (o.css({ zIndex: 2 }), t()) } }; c = t.extend(c, t.fn.superslides.fx); var d = { _centerY: function (i) { var n = t(i); n.css({ top: (s.height - n.height()) / 2 }) }, _centerX: function (i) { var n = t(i); n.css({ left: (s.width - n.width()) / 2 }) }, _center: function (i) { s.image._centerX(i), s.image._centerY(i) }, _aspectRatio: function (i) { if (!i.naturalHeight && !i.naturalWidth) { var t = new Image; t.src = i.src, i.naturalHeight = t.height, i.naturalWidth = t.width } return i.naturalHeight / i.naturalWidth }, _scale: function (i, n) { n = n || s.image._aspectRatio(i); var e = s.height / s.width, o = t(i); e > n ? o.css({ height: s.height, width: s.height / n }) : o.css({ height: s.width * n, width: s.width }) } }, l = { _setCurrent: function (i) { if (s.$pagination) { var t = s.$pagination.children(); t.removeClass("current"), t.eq(i).addClass("current") } }, _addItem: function (i) { var n = i + 1, e = n, o = s.$container.children().eq(i), a = o.attr("id"); a && (e = a); var r = t("<a>", { href: "#" + e, text: e }); r.appendTo(s.$pagination) }, _setup: function () { if (s.options.pagination && 1 !== s.size()) { var i = t("<nav>", { "class": s.options.elements.pagination.replace(/^\./, "") }); s.$pagination = i.appendTo(s.$el); for (var n = 0; s.size() > n; n++)s.pagination._addItem(n) } }, _events: function () { s.$el.on("click", s.options.elements.pagination + " a", function (i) { i.preventDefault(); var t, n = s._parseHash(this.hash); t = s._upcomingSlide(n, !0), t !== s.current && s.animate(t, function () { s.start() }) }) } }; return this.css = h, this.image = d, this.pagination = l, this.fx = c, this.animation = this.fx[this.options.animation], this.$control = this.$container.wrap(o).parent(".slides-control"), s._findPositions(), s.width = s._findWidth(), s.height = s._findHeight(), this.css.children(), this.css.containers(), this.css.images(), this.pagination._setup(), r() }, n.prototype = { _findWidth: function () { return t(this.options.inherit_width_from).width() }, _findHeight: function () { return t(this.options.inherit_height_from).height() }, _findMultiplier: function () { return 1 === this.size() ? 1 : 3 }, _upcomingSlide: function (i, t) { if (t && !isNaN(i) && (i -= 1), /next/.test(i)) return this._nextInDom(); if (/prev/.test(i)) return this._prevInDom(); if (/\d/.test(i)) return +i; if (i && /\w/.test(i)) { var n = this._findSlideById(i); return n >= 0 ? n : 0 } return 0 }, _findSlideById: function (i) { return this.$container.find("#" + i).index() }, _findPositions: function (i, t) { t = t || this, void 0 === i && (i = -1), t.current = i, t.next = t._nextInDom(), t.prev = t._prevInDom() }, _nextInDom: function () { var i = this.current + 1; return i === this.size() && (i = 0), i }, _prevInDom: function () { var i = this.current - 1; return 0 > i && (i = this.size() - 1), i }, _parseHash: function (t) { return t = t || i.location.hash, t = t.replace(/^#/, ""), t && !isNaN(+t) && (t = +t), t }, size: function () { return this.$container.children().length }, destroy: function () { return this.$el.removeData() }, update: function () { this.css.children(), this.css.containers(), this.css.images(), this.pagination._addItem(this.size()), this._findPositions(this.current), this.$el.trigger("updated.slides") }, stop: function () { clearInterval(this.play_id), delete this.play_id, this.$el.trigger("stopped.slides") }, start: function () { var n = this; n.options.hashchange ? t(i).trigger("hashchange") : this.animate(), this.options.play && (this.play_id && this.stop(), this.play_id = setInterval(function () { n.animate() }, this.options.play)), this.$el.trigger("started.slides") }, animate: function (t, n) { var e = this, s = {}; if (!(this.animating || (this.animating = !0, void 0 === t && (t = "next"), s.upcoming_slide = this._upcomingSlide(t), s.upcoming_slide >= this.size()))) { if (s.outgoing_slide = this.current, s.upcoming_position = 2 * this.width, s.offset = -s.upcoming_position, ("prev" === t || s.outgoing_slide > t) && (s.upcoming_position = 0, s.offset = 0), e.size() > 1 && e.pagination._setCurrent(s.upcoming_slide), e.options.hashchange) { var o = s.upcoming_slide + 1, a = e.$container.children(":eq(" + s.upcoming_slide + ")").attr("id"); i.location.hash = a ? a : o } e.$el.trigger("animating.slides", [s]), e.animation(s, function () { e._findPositions(s.upcoming_slide, e), "function" == typeof n && n(), e.animating = !1, e.$el.trigger("animated.slides"), e.init || (e.$el.trigger("init.slides"), e.init = !0, e.$container.fadeIn("fast")) }) } } }, t.fn[e] = function (i, s) { var o = []; return this.each(function () { var a, r, h; return a = t(this), r = a.data(e), h = "object" == typeof i && i, r || (o = a.data(e, r = new n(this, h))), "string" == typeof i && (o = r[i], "function" == typeof o) ? o = o.call(r, s) : void 0 }), o }, t.fn[e].fx = {} })(this, jQuery);
/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
function hexToRgb(e) { var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i; e = e.replace(a, function (e, a, t, i) { return a + a + t + t + i + i }); var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e); return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null } function clamp(e, a, t) { return Math.min(Math.max(e, a), t) } function isInArray(e, a) { return a.indexOf(e) > -1 } var pJS = function (e, a) { var t = document.querySelector("#" + e + " > .particles-js-canvas-el"); this.pJS = { canvas: { el: t, w: t.offsetWidth, h: t.offsetHeight }, particles: { number: { value: 400, density: { enable: !0, value_area: 800 } }, color: { value: "#fff" }, shape: { type: "circle", stroke: { width: 0, color: "#ff0000" }, polygon: { nb_sides: 5 }, image: { src: "", width: 100, height: 100 } }, opacity: { value: 1, random: !1, anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 } }, size: { value: 20, random: !1, anim: { enable: !1, speed: 20, size_min: 0, sync: !1 } }, line_linked: { enable: !0, distance: 100, color: "#fff", opacity: 1, width: 1 }, move: { enable: !0, speed: 2, direction: "none", random: !1, straight: !1, out_mode: "out", bounce: !1, attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 } }, array: [] }, interactivity: { detect_on: "canvas", events: { onhover: { enable: !0, mode: "grab" }, onclick: { enable: !0, mode: "push" }, resize: !0 }, modes: { grab: { distance: 100, line_linked: { opacity: 1 } }, bubble: { distance: 200, size: 80, duration: .4 }, repulse: { distance: 200, duration: .4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }, mouse: {} }, retina_detect: !1, fn: { interact: {}, modes: {}, vendors: {} }, tmp: {} }; var i = this.pJS; a && Object.deepExtend(i, a), i.tmp.obj = { size_value: i.particles.size.value, size_anim_speed: i.particles.size.anim.speed, move_speed: i.particles.move.speed, line_linked_distance: i.particles.line_linked.distance, line_linked_width: i.particles.line_linked.width, mode_grab_distance: i.interactivity.modes.grab.distance, mode_bubble_distance: i.interactivity.modes.bubble.distance, mode_bubble_size: i.interactivity.modes.bubble.size, mode_repulse_distance: i.interactivity.modes.repulse.distance }, i.fn.retinaInit = function () { i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio, i.tmp.retina = !0) : (i.canvas.pxratio = 1, i.tmp.retina = !1), i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio, i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio, i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio, i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio, i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio, i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio, i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio, i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio, i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio, i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio, i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio }, i.fn.canvasInit = function () { i.canvas.ctx = i.canvas.el.getContext("2d") }, i.fn.canvasSize = function () { i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i && i.interactivity.events.resize && window.addEventListener("resize", function () { i.canvas.w = i.canvas.el.offsetWidth, i.canvas.h = i.canvas.el.offsetHeight, i.tmp.retina && (i.canvas.w *= i.canvas.pxratio, i.canvas.h *= i.canvas.pxratio), i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i.particles.move.enable || (i.fn.particlesEmpty(), i.fn.particlesCreate(), i.fn.particlesDraw(), i.fn.vendors.densityAutoParticles()), i.fn.vendors.densityAutoParticles() }) }, i.fn.canvasPaint = function () { i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h) }, i.fn.canvasClear = function () { i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h) }, i.fn.particle = function (e, a, t) { if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value, i.particles.size.anim.enable && (this.size_status = !1, this.vs = i.particles.size.anim.speed / 100, i.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = t ? t.x : Math.random() * i.canvas.w, this.y = t ? t.y : Math.random() * i.canvas.h, this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t), this.color = {}, "object" == typeof e.value) if (e.value instanceof Array) { var s = e.value[Math.floor(Math.random() * i.particles.color.value.length)]; this.color.rgb = hexToRgb(s) } else void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = { r: e.value.r, g: e.value.g, b: e.value.b }), void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = { h: e.value.h, s: e.value.s, l: e.value.l }); else "random" == e.value ? this.color.rgb = { r: Math.floor(256 * Math.random()) + 0, g: Math.floor(256 * Math.random()) + 0, b: Math.floor(256 * Math.random()) + 0 } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value)); this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value, i.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = i.particles.opacity.anim.speed / 100, i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random())); var n = {}; switch (i.particles.move.direction) { case "top": n = { x: 0, y: -1 }; break; case "top-right": n = { x: .5, y: -.5 }; break; case "right": n = { x: 1, y: -0 }; break; case "bottom-right": n = { x: .5, y: .5 }; break; case "bottom": n = { x: 0, y: 1 }; break; case "bottom-left": n = { x: -.5, y: 1 }; break; case "left": n = { x: -1, y: 0 }; break; case "top-left": n = { x: -.5, y: -.5 }; break; default: n = { x: 0, y: 0 } }i.particles.move.straight ? (this.vx = n.x, this.vy = n.y, i.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = n.x + Math.random() - .5, this.vy = n.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy; var r = i.particles.shape.type; if ("object" == typeof r) { if (r instanceof Array) { var c = r[Math.floor(Math.random() * r.length)]; this.shape = c } } else this.shape = r; if ("image" == this.shape) { var o = i.particles.shape; this.img = { src: o.image.src, ratio: o.image.width / o.image.height }, this.img.ratio || (this.img.ratio = 1), "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this), i.tmp.pushing && (this.img.loaded = !1)) } }, i.fn.particle.prototype.draw = function () { function e() { i.canvas.ctx.drawImage(r, a.x - t, a.y - t, 2 * t, 2 * t / a.img.ratio) } var a = this; if (void 0 != a.radius_bubble) var t = a.radius_bubble; else var t = a.radius; if (void 0 != a.opacity_bubble) var s = a.opacity_bubble; else var s = a.opacity; if (a.color.rgb) var n = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + s + ")"; else var n = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + s + ")"; switch (i.canvas.ctx.fillStyle = n, i.canvas.ctx.beginPath(), a.shape) { case "circle": i.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1); break; case "edge": i.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t); break; case "triangle": i.fn.vendors.drawShape(i.canvas.ctx, a.x - t, a.y + t / 1.66, 2 * t, 3, 2); break; case "polygon": i.fn.vendors.drawShape(i.canvas.ctx, a.x - t / (i.particles.shape.polygon.nb_sides / 3.5), a.y - t / .76, 2.66 * t / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1); break; case "star": i.fn.vendors.drawShape(i.canvas.ctx, a.x - 2 * t / (i.particles.shape.polygon.nb_sides / 4), a.y - t / 1.52, 2 * t * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2); break; case "image": if ("svg" == i.tmp.img_type) var r = a.img.obj; else var r = i.tmp.img_obj; r && e() }i.canvas.ctx.closePath(), i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color, i.canvas.ctx.lineWidth = i.particles.shape.stroke.width, i.canvas.ctx.stroke()), i.canvas.ctx.fill() }, i.fn.particlesCreate = function () { for (var e = 0; e < i.particles.number.value; e++)i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value)) }, i.fn.particlesUpdate = function () { for (var e = 0; e < i.particles.array.length; e++) { var a = i.particles.array[e]; if (i.particles.move.enable) { var t = i.particles.move.speed / 2; a.x += a.vx * t, a.y += a.vy * t } if (i.particles.opacity.anim.enable && (1 == a.opacity_status ? (a.opacity >= i.particles.opacity.value && (a.opacity_status = !1), a.opacity += a.vo) : (a.opacity <= i.particles.opacity.anim.opacity_min && (a.opacity_status = !0), a.opacity -= a.vo), a.opacity < 0 && (a.opacity = 0)), i.particles.size.anim.enable && (1 == a.size_status ? (a.radius >= i.particles.size.value && (a.size_status = !1), a.radius += a.vs) : (a.radius <= i.particles.size.anim.size_min && (a.size_status = !0), a.radius -= a.vs), a.radius < 0 && (a.radius = 0)), "bounce" == i.particles.move.out_mode) var s = { x_left: a.radius, x_right: i.canvas.w, y_top: a.radius, y_bottom: i.canvas.h }; else var s = { x_left: -a.radius, x_right: i.canvas.w + a.radius, y_top: -a.radius, y_bottom: i.canvas.h + a.radius }; switch (a.x - a.radius > i.canvas.w ? (a.x = s.x_left, a.y = Math.random() * i.canvas.h) : a.x + a.radius < 0 && (a.x = s.x_right, a.y = Math.random() * i.canvas.h), a.y - a.radius > i.canvas.h ? (a.y = s.y_top, a.x = Math.random() * i.canvas.w) : a.y + a.radius < 0 && (a.y = s.y_bottom, a.x = Math.random() * i.canvas.w), i.particles.move.out_mode) { case "bounce": a.x + a.radius > i.canvas.w ? a.vx = -a.vx : a.x - a.radius < 0 && (a.vx = -a.vx), a.y + a.radius > i.canvas.h ? a.vy = -a.vy : a.y - a.radius < 0 && (a.vy = -a.vy) }if (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(a), (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(a), (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(a), i.particles.line_linked.enable || i.particles.move.attract.enable) for (var n = e + 1; n < i.particles.array.length; n++) { var r = i.particles.array[n]; i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r), i.particles.move.attract.enable && i.fn.interact.attractParticles(a, r), i.particles.move.bounce && i.fn.interact.bounceParticles(a, r) } } }, i.fn.particlesDraw = function () { i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h), i.fn.particlesUpdate(); for (var e = 0; e < i.particles.array.length; e++) { var a = i.particles.array[e]; a.draw() } }, i.fn.particlesEmpty = function () { i.particles.array = [] }, i.fn.particlesRefresh = function () { cancelRequestAnimFrame(i.fn.checkAnimFrame), cancelRequestAnimFrame(i.fn.drawAnimFrame), i.tmp.source_svg = void 0, i.tmp.img_obj = void 0, i.tmp.count_svg = 0, i.fn.particlesEmpty(), i.fn.canvasClear(), i.fn.vendors.start() }, i.fn.interact.linkParticles = function (e, a) { var t = e.x - a.x, s = e.y - a.y, n = Math.sqrt(t * t + s * s); if (n <= i.particles.line_linked.distance) { var r = i.particles.line_linked.opacity - n / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance; if (r > 0) { var c = i.particles.line_linked.color_rgb_line; i.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(a.x, a.y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath() } } }, i.fn.interact.attractParticles = function (e, a) { var t = e.x - a.x, s = e.y - a.y, n = Math.sqrt(t * t + s * s); if (n <= i.particles.line_linked.distance) { var r = t / (1e3 * i.particles.move.attract.rotateX), c = s / (1e3 * i.particles.move.attract.rotateY); e.vx -= r, e.vy -= c, a.vx += r, a.vy += c } }, i.fn.interact.bounceParticles = function (e, a) { var t = e.x - a.x, i = e.y - a.y, s = Math.sqrt(t * t + i * i), n = e.radius + a.radius; n >= s && (e.vx = -e.vx, e.vy = -e.vy, a.vx = -a.vx, a.vy = -a.vy) }, i.fn.modes.pushParticles = function (e, a) { i.tmp.pushing = !0; for (var t = 0; e > t; t++)i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value, { x: a ? a.pos_x : Math.random() * i.canvas.w, y: a ? a.pos_y : Math.random() * i.canvas.h })), t == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(), i.tmp.pushing = !1) }, i.fn.modes.removeParticles = function (e) { i.particles.array.splice(0, e), i.particles.move.enable || i.fn.particlesDraw() }, i.fn.modes.bubbleParticle = function (e) { function a() { e.opacity_bubble = e.opacity, e.radius_bubble = e.radius } function t(a, t, s, n, c) { if (a != t) if (i.tmp.bubble_duration_end) { if (void 0 != s) { var o = n - p * (n - a) / i.interactivity.modes.bubble.duration, l = a - o; d = a + l, "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d) } } else if (r <= i.interactivity.modes.bubble.distance) { if (void 0 != s) var v = s; else var v = n; if (v != a) { var d = n - p * (n - a) / i.interactivity.modes.bubble.duration; "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d) } } else "size" == c && (e.radius_bubble = void 0), "opacity" == c && (e.opacity_bubble = void 0) } if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) { var s = e.x - i.interactivity.mouse.pos_x, n = e.y - i.interactivity.mouse.pos_y, r = Math.sqrt(s * s + n * n), c = 1 - r / i.interactivity.modes.bubble.distance; if (r <= i.interactivity.modes.bubble.distance) { if (c >= 0 && "mousemove" == i.interactivity.status) { if (i.interactivity.modes.bubble.size != i.particles.size.value) if (i.interactivity.modes.bubble.size > i.particles.size.value) { var o = e.radius + i.interactivity.modes.bubble.size * c; o >= 0 && (e.radius_bubble = o) } else { var l = e.radius - i.interactivity.modes.bubble.size, o = e.radius - l * c; o > 0 ? e.radius_bubble = o : e.radius_bubble = 0 } if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value) if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) { var v = i.interactivity.modes.bubble.opacity * c; v > e.opacity && v <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v) } else { var v = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * c; v < e.opacity && v >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v) } } } else a(); "mouseleave" == i.interactivity.status && a() } else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) { if (i.tmp.bubble_clicking) { var s = e.x - i.interactivity.mouse.click_pos_x, n = e.y - i.interactivity.mouse.click_pos_y, r = Math.sqrt(s * s + n * n), p = ((new Date).getTime() - i.interactivity.mouse.click_time) / 1e3; p > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0), p > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1, i.tmp.bubble_duration_end = !1) } i.tmp.bubble_clicking && (t(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, "size"), t(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity")) } }, i.fn.modes.repulseParticle = function (e) { function a() { var a = Math.atan2(d, p); if (e.vx = u * Math.cos(a), e.vy = u * Math.sin(a), "bounce" == i.particles.move.out_mode) { var t = { x: e.x + e.vx, y: e.y + e.vy }; t.x + e.radius > i.canvas.w ? e.vx = -e.vx : t.x - e.radius < 0 && (e.vx = -e.vx), t.y + e.radius > i.canvas.h ? e.vy = -e.vy : t.y - e.radius < 0 && (e.vy = -e.vy) } } if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) { var t = e.x - i.interactivity.mouse.pos_x, s = e.y - i.interactivity.mouse.pos_y, n = Math.sqrt(t * t + s * s), r = { x: t / n, y: s / n }, c = i.interactivity.modes.repulse.distance, o = 100, l = clamp(1 / c * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50), v = { x: e.x + r.x * l, y: e.y + r.y * l }; "bounce" == i.particles.move.out_mode ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x), v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y)) : (e.x = v.x, e.y = v.y) } else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode)) if (i.tmp.repulse_finish || (i.tmp.repulse_count++, i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)), i.tmp.repulse_clicking) { var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3), p = i.interactivity.mouse.click_pos_x - e.x, d = i.interactivity.mouse.click_pos_y - e.y, m = p * p + d * d, u = -c / m * 1; c >= m && a() } else 0 == i.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i) }, i.fn.modes.grabParticle = function (e) { if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) { var a = e.x - i.interactivity.mouse.pos_x, t = e.y - i.interactivity.mouse.pos_y, s = Math.sqrt(a * a + t * t); if (s <= i.interactivity.modes.grab.distance) { var n = i.interactivity.modes.grab.line_linked.opacity - s / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance; if (n > 0) { var r = i.particles.line_linked.color_rgb_line; i.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath() } } } }, i.fn.vendors.eventsListeners = function () { "window" == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el, (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function (e) { if (i.interactivity.el == window) var a = e.clientX, t = e.clientY; else var a = e.offsetX || e.clientX, t = e.offsetY || e.clientY; i.interactivity.mouse.pos_x = a, i.interactivity.mouse.pos_y = t, i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio, i.interactivity.mouse.pos_y *= i.canvas.pxratio), i.interactivity.status = "mousemove" }), i.interactivity.el.addEventListener("mouseleave", function (e) { i.interactivity.mouse.pos_x = null, i.interactivity.mouse.pos_y = null, i.interactivity.status = "mouseleave" })), i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function () { if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x, i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y, i.interactivity.mouse.click_time = (new Date).getTime(), i.interactivity.events.onclick.enable) switch (i.interactivity.events.onclick.mode) { case "push": i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb); break; case "remove": i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb); break; case "bubble": i.tmp.bubble_clicking = !0; break; case "repulse": i.tmp.repulse_clicking = !0, i.tmp.repulse_count = 0, i.tmp.repulse_finish = !1, setTimeout(function () { i.tmp.repulse_clicking = !1 }, 1e3 * i.interactivity.modes.repulse.duration) } }) }, i.fn.vendors.densityAutoParticles = function () { if (i.particles.number.density.enable) { var e = i.canvas.el.width * i.canvas.el.height / 1e3; i.tmp.retina && (e /= 2 * i.canvas.pxratio); var a = e * i.particles.number.value / i.particles.number.density.value_area, t = i.particles.array.length - a; 0 > t ? i.fn.modes.pushParticles(Math.abs(t)) : i.fn.modes.removeParticles(t) } }, i.fn.vendors.checkOverlap = function (e, a) { for (var t = 0; t < i.particles.array.length; t++) { var s = i.particles.array[t], n = e.x - s.x, r = e.y - s.y, c = Math.sqrt(n * n + r * r); c <= e.radius + s.radius && (e.x = a ? a.x : Math.random() * i.canvas.w, e.y = a ? a.y : Math.random() * i.canvas.h, i.fn.vendors.checkOverlap(e)) } }, i.fn.vendors.createSvgImg = function (e) { var a = i.tmp.source_svg, t = /#([0-9A-F]{3,6})/gi, s = a.replace(t, function (a, t, i, s) { if (e.color.rgb) var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")"; else var n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")"; return n }), n = new Blob([s], { type: "image/svg+xml;charset=utf-8" }), r = window.URL || window.webkitURL || window, c = r.createObjectURL(n), o = new Image; o.addEventListener("load", function () { e.img.obj = o, e.img.loaded = !0, r.revokeObjectURL(c), i.tmp.count_svg++ }), o.src = c }, i.fn.vendors.destroypJS = function () { cancelAnimationFrame(i.fn.drawAnimFrame), t.remove(), pJSDom = null }, i.fn.vendors.drawShape = function (e, a, t, i, s, n) { var r = s * n, c = s / n, o = 180 * (c - 2) / c, l = Math.PI - Math.PI * o / 180; e.save(), e.beginPath(), e.translate(a, t), e.moveTo(0, 0); for (var v = 0; r > v; v++)e.lineTo(i, 0), e.translate(i, 0), e.rotate(l); e.fill(), e.restore() }, i.fn.vendors.exportImg = function () { window.open(i.canvas.el.toDataURL("image/png"), "_blank") }, i.fn.vendors.loadImg = function (e) { if (i.tmp.img_error = void 0, "" != i.particles.shape.image.src) if ("svg" == e) { var a = new XMLHttpRequest; a.open("GET", i.particles.shape.image.src), a.onreadystatechange = function (e) { 4 == a.readyState && (200 == a.status ? (i.tmp.source_svg = e.currentTarget.response, i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), i.tmp.img_error = !0)) }, a.send() } else { var t = new Image; t.addEventListener("load", function () { i.tmp.img_obj = t, i.fn.vendors.checkBeforeDraw() }), t.src = i.particles.shape.image.src } else console.log("Error pJS - No image.src"), i.tmp.img_error = !0 }, i.fn.vendors.draw = function () { "image" == i.particles.shape.type ? "svg" == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : void 0 != i.tmp.img_obj ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) }, i.fn.vendors.checkBeforeDraw = function () { "image" == i.particles.shape.type ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg ? i.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i.tmp.checkAnimFrame), i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw())) : (i.fn.vendors.init(), i.fn.vendors.draw()) }, i.fn.vendors.init = function () { i.fn.retinaInit(), i.fn.canvasInit(), i.fn.canvasSize(), i.fn.canvasPaint(), i.fn.particlesCreate(), i.fn.vendors.densityAutoParticles(), i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color) }, i.fn.vendors.start = function () { isInArray("image", i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3), i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw() }, i.fn.vendors.eventsListeners(), i.fn.vendors.start() }; Object.deepExtend = function (e, a) { for (var t in a) a[t] && a[t].constructor && a[t].constructor === Object ? (e[t] = e[t] || {}, arguments.callee(e[t], a[t])) : e[t] = a[t]; return e }, window.requestAnimFrame = function () { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) { window.setTimeout(e, 1e3 / 60) } }(), window.cancelRequestAnimFrame = function () { return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout }(), window.pJSDom = [], window.particlesJS = function (e, a) { "string" != typeof e && (a = e, e = "particles-js"), e || (e = "particles-js"); var t = document.getElementById(e), i = "particles-js-canvas-el", s = t.getElementsByClassName(i); if (s.length) for (; s.length > 0;)t.removeChild(s[0]); var n = document.createElement("canvas"); n.className = i, n.style.width = "100%", n.style.height = "100%"; var r = document.getElementById(e).appendChild(n); null != r && pJSDom.push(new pJS(e, a)) }, window.particlesJS.load = function (e, a, t) { var i = new XMLHttpRequest; i.open("GET", a), i.onreadystatechange = function (a) { if (4 == i.readyState) if (200 == i.status) { var s = JSON.parse(a.currentTarget.response); window.particlesJS(e, s), t && t() } else console.log("Error pJS - XMLHttpRequest status: " + i.status), console.log("Error pJS - File config not found") }, i.send() };
/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.YTPlayer.src.js                                                                                                                  _
 _ last modified: 05/01/16 17.43                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matteo@open-lab.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2016. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/
var ytp = ytp || {};

function onYouTubeIframeAPIReady() {
    if (ytp.YTAPIReady) return;
    ytp.YTAPIReady = true;
    jQuery(document).trigger("YTAPIReady");
}

var getYTPVideoID = function (url) {
    var videoID, playlistID;
    if (url.indexOf("youtu.be") > 0) {
        videoID = url.substr(url.lastIndexOf("/") + 1, url.length);
        playlistID = videoID.indexOf("?list=") > 0 ? videoID.substr(videoID.lastIndexOf("="), videoID.length) : null;
        videoID = playlistID ? videoID.substr(0, videoID.lastIndexOf("?")) : videoID;
    } else if (url.indexOf("http") > -1) {
        //videoID = url.match( /([\/&]v\/([^&#]*))|([\\?&]v=([^&#]*))/ )[ 1 ];
        videoID = url.match(/[\\?&]v=([^&#]*)/)[1];
        playlistID = url.indexOf("list=") > 0 ? url.match(/[\\?&]list=([^&#]*)/)[1] : null;
    } else {
        videoID = url.length > 15 ? null : url;
        playlistID = videoID ? null : url;
    }
    return {
        videoID: videoID,
        playlistID: playlistID
    };
};

(function (jQuery, ytp) {

    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "3.0.8",
        build: "5878",
        author: "Matteo Bicocchi",
        apiKey: "",
        defaults: {
            containment: "body",
            ratio: "auto", // "auto", "16/9", "4/3"
            videoURL: null,
            playlistURL: null,
            startAt: 0,
            stopAt: 0,
            autoPlay: true,
            vol: 50, // 1 to 100
            addRaster: false,
            mask: false,
            opacity: 1,
            quality: "default", //or â€œsmallâ€, â€œmediumâ€, â€œlargeâ€, â€œhd720â€, â€œhd1080â€, â€œhighresâ€
            mute: false,
            loop: true,
            showControls: true,
            showAnnotations: false,
            showYTLogo: true,
            stopMovieOnBlur: true,
            realfullscreen: true,
            mobileFallbackImage: null,
            gaTrack: true,
            optimizeDisplay: true,
            align: "center,center", // top,bottom,left,right
            onReady: function (player) { }
        },
		/**
		 *  @fontface icons
		 *  */
        controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
        },
        controlBar: null,
        loading: null,
        locationProtocol: "https:",
        filters: {
            grayscale: {
                value: 0,
                unit: "%"
            },
            hue_rotate: {
                value: 0,
                unit: "deg"
            },
            invert: {
                value: 0,
                unit: "%"
            },
            opacity: {
                value: 0,
                unit: "%"
            },
            saturate: {
                value: 0,
                unit: "%"
            },
            sepia: {
                value: 0,
                unit: "%"
            },
            brightness: {
                value: 0,
                unit: "%"
            },
            contrast: {
                value: 0,
                unit: "%"
            },
            blur: {
                value: 0,
                unit: "px"
            }
        },
		/**
		 *
		 * @param options
		 * @returns [players]
		 */
        buildPlayer: function (options) {
            return this.each(function () {
                var YTPlayer = this;
                var $YTPlayer = jQuery(YTPlayer);
                YTPlayer.loop = 0;
                YTPlayer.opt = {};
                YTPlayer.state = {};
                YTPlayer.filters = jQuery.mbYTPlayer.filters;
                YTPlayer.filtersEnabled = true;
                YTPlayer.id = YTPlayer.id || "YTP_" + new Date().getTime();
                $YTPlayer.addClass("mb_YTPlayer");
                var property = $YTPlayer.data("property") && typeof $YTPlayer.data("property") == "string" ? eval('(' + $YTPlayer.data("property") + ')') : $YTPlayer.data("property");
                if (typeof property != "undefined" && typeof property.vol != "undefined") property.vol = property.vol === 0 ? property.vol = 1 : property.vol;

                jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property);

                if (!YTPlayer.hasChanged) {
                    YTPlayer.defaultOpt = {};
                    jQuery.extend(YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options);
                }

                if (YTPlayer.opt.loop == "true")
                    YTPlayer.opt.loop = 9999;

                YTPlayer.isRetina = (window.retina || window.devicePixelRatio > 1);
                var isIframe = function () {
                    var isIfr = false;
                    try {
                        if (self.location.href != top.location.href) isIfr = true;
                    } catch (e) {
                        isIfr = true;
                    }
                    return isIfr;
                };
                YTPlayer.canGoFullScreen = !(jQuery.browser.msie || jQuery.browser.opera || isIframe());
                if (!YTPlayer.canGoFullScreen) YTPlayer.opt.realfullscreen = false;
                if (!$YTPlayer.attr("id")) $YTPlayer.attr("id", "video_" + new Date().getTime());
                var playerID = "mbYTP_" + YTPlayer.id;
                YTPlayer.isAlone = false;
                YTPlayer.hasFocus = true;
                var videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).videoID : false;
                var playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).playlistID : false;
                YTPlayer.videoID = videoID;
                YTPlayer.playlistID = playlistID;
                YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? '0' : '3';

                var playerVars = {
                    'modestbranding': 1,
                    'autoplay': 0,
                    'controls': 0,
                    'showinfo': 0,
                    'rel': 0,
                    'enablejsapi': 1,
                    'version': 3,
                    'playerapiid': playerID,
                    'origin': '*',
                    'allowfullscreen': true,
                    'wmode': 'transparent',
                    'iv_load_policy': YTPlayer.opt.showAnnotations
                };

                if (document.createElement('video').canPlayType) jQuery.extend(playerVars, {
                    'html5': 1
                });
                if (jQuery.browser.msie && jQuery.browser.version < 9) this.opt.opacity = 1;

                YTPlayer.isSelf = YTPlayer.opt.containment == "self";
                YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = YTPlayer.opt.containment == "self" ? jQuery(this) : jQuery(YTPlayer.opt.containment);
                YTPlayer.isBackground = YTPlayer.opt.containment.is("body");

                if (YTPlayer.isBackground && ytp.backgroundIsInited)
                    return;

                var isPlayer = YTPlayer.opt.containment.is(jQuery(this));

                YTPlayer.canPlayOnMobile = isPlayer && jQuery(this).children().length === 0;
                YTPlayer.isPlayer = false;

                if (!isPlayer) {
                    $YTPlayer.hide();
                } else {
                    YTPlayer.isPlayer = true;
                }

                var overlay = jQuery("<div/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }).addClass("YTPOverlay");

                if (YTPlayer.isPlayer) {
                    overlay.on("click", function () {
                        $YTPlayer.YTPTogglePlay();
                    })
                }

                var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
                wrapper.css({
                    position: "absolute",
                    zIndex: 0,
                    minWidth: "100%",
                    minHeight: "100%",
                    left: 0,
                    top: 0,
                    overflow: "hidden",
                    opacity: 0
                });

                var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox");
                playerBox.css({
                    position: "absolute",
                    zIndex: 0,
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    overflow: "hidden"
                });

                wrapper.append(playerBox);

                YTPlayer.opt.containment.children().not("script, style").each(function () {
                    if (jQuery(this).css("position") == "static") jQuery(this).css("position", "relative");
                });
                if (YTPlayer.isBackground) {
                    jQuery("body").css({
                        boxSizing: "border-box"
                    });

                    wrapper.css({
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 0
                    });

                    $YTPlayer.hide();

                } else if (YTPlayer.opt.containment.css("position") == "static")
                    YTPlayer.opt.containment.css({
                        position: "relative"
                    });

                YTPlayer.opt.containment.prepend(wrapper);
                YTPlayer.wrapper = wrapper;

                playerBox.css({
                    opacity: 1
                });

                if (!jQuery.browser.mobile) {
                    playerBox.after(overlay);
                    YTPlayer.overlay = overlay;
                }

                if (!YTPlayer.isBackground) {
                    overlay.on("mouseenter", function () {
                        if (YTPlayer.controlBar.length)
                            YTPlayer.controlBar.addClass("visible");
                    }).on("mouseleave", function () {
                        if (YTPlayer.controlBar.length)
                            YTPlayer.controlBar.removeClass("visible");
                    });
                }

                if (!ytp.YTAPIReady) {
                    jQuery("#YTAPI").remove();
                    var tag = jQuery("<script></script>").attr({
                        "src": jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                        "id": "YTAPI"
                    });
                    jQuery("head").prepend(tag);
                } else {
                    setTimeout(function () {
                        jQuery(document).trigger("YTAPIReady");
                    }, 100)
                }

                if (jQuery.browser.mobile && !YTPlayer.canPlayOnMobile) {

                    if (YTPlayer.opt.mobileFallbackImage) {
                        YTPlayer.opt.containment.css({
                            backgroundImage: "url(" + YTPlayer.opt.mobileFallbackImage + ")",
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat"
                        })
                    };

                    $YTPlayer.remove();
                    jQuery(document).trigger("YTPUnavailable");
                    return;
                }

                jQuery(document).on("YTAPIReady", function () {
                    if ((YTPlayer.isBackground && ytp.backgroundIsInited) || YTPlayer.isInit) return;
                    if (YTPlayer.isBackground) {
                        ytp.backgroundIsInited = true;
                    }

                    YTPlayer.opt.autoPlay = typeof YTPlayer.opt.autoPlay == "undefined" ? (YTPlayer.isBackground ? true : false) : YTPlayer.opt.autoPlay;
                    YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100;
                    jQuery.mbYTPlayer.getDataFromAPI(YTPlayer);
                    jQuery(YTPlayer).on("YTPChanged", function () {

                        if (YTPlayer.isInit)
                            return;

                        YTPlayer.isInit = true;

                        //if is mobile && isPlayer fallback to the default YT player
                        if (jQuery.browser.mobile && YTPlayer.canPlayOnMobile) {
                            // Try to adjust the player dimention
                            if (YTPlayer.opt.containment.outerWidth() > jQuery(window).width()) {
                                YTPlayer.opt.containment.css({
                                    maxWidth: "100%"
                                });
                                var h = YTPlayer.opt.containment.outerWidth() * .563;
                                YTPlayer.opt.containment.css({
                                    maxHeight: h
                                });
                            }
                            new YT.Player(playerID, {
                                videoId: YTPlayer.videoID.toString(),
                                width: '100%',
                                height: h,
                                playerVars: playerVars,
                                events: {
                                    'onReady': function (event) {
                                        YTPlayer.player = event.target;
                                        playerBox.css({
                                            opacity: 1
                                        });
                                        YTPlayer.wrapper.css({
                                            opacity: 1
                                        });
                                    }
                                }
                            });
                            return;
                        }

                        new YT.Player(playerID, {
                            videoId: YTPlayer.videoID.toString(),
                            playerVars: playerVars,
                            events: {
                                'onReady': function (event) {
                                    YTPlayer.player = event.target;
                                    if (YTPlayer.isReady) return;
                                    YTPlayer.isReady = YTPlayer.isPlayer && !YTPlayer.opt.autoPlay ? false : true;
                                    YTPlayer.playerEl = YTPlayer.player.getIframe();

                                    jQuery(YTPlayer.playerEl).unselectable();

                                    $YTPlayer.optimizeDisplay();
                                    YTPlayer.videoID = videoID;
                                    jQuery(window).off("resize.YTP_" + YTPlayer.id).on("resize.YTP_" + YTPlayer.id, function () {
                                        $YTPlayer.optimizeDisplay();
                                    });

                                    jQuery.mbYTPlayer.checkForState(YTPlayer);
                                },
								/**
								 *
								 * @param event
								 *
								 * -1 (unstarted)
								 * 0 (ended)
								 * 1 (playing)
								 * 2 (paused)
								 * 3 (buffering)
								 * 5 (video cued).
								 *
								 *
								 */
                                'onStateChange': function (event) {
                                    if (typeof event.target.getPlayerState != "function") return;
                                    var state = event.target.getPlayerState();

                                    if (YTPlayer.preventTrigger) {
                                        YTPlayer.preventTrigger = false;
                                        return
                                    }

									/*
																		if( YTPlayer.state == state )
																			return;
									*/

                                    YTPlayer.state = state;

                                    var eventType;
                                    switch (state) {
                                        case -1: //----------------------------------------------- unstarted
                                            eventType = "YTPUnstarted";
                                            break;
                                        case 0: //------------------------------------------------ ended
                                            eventType = "YTPEnd";
                                            break;
                                        case 1: //------------------------------------------------ play
                                            eventType = "YTPPlay";
                                            if (YTPlayer.controlBar.length)
                                                YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause);
                                            if (typeof _gaq != "undefined" && eval(YTPlayer.opt.gaTrack)) _gaq.push(['_trackEvent', 'YTPlayer', 'Play', (YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString())]);
                                            if (typeof ga != "undefined" && eval(YTPlayer.opt.gaTrack)) ga('send', 'event', 'YTPlayer', 'play', (YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()));
                                            break;
                                        case 2: //------------------------------------------------ pause
                                            eventType = "YTPPause";
                                            if (YTPlayer.controlBar.length)
                                                YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                            break;
                                        case 3: //------------------------------------------------ buffer
                                            YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality);
                                            eventType = "YTPBuffering";
                                            if (YTPlayer.controlBar.length)
                                                YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                            break;
                                        case 5: //------------------------------------------------ cued
                                            eventType = "YTPCued";
                                            break;
                                        default:
                                            break;
                                    }

                                    // Trigger state events
                                    var YTPEvent = jQuery.Event(eventType);
                                    YTPEvent.time = YTPlayer.currentTime;
                                    if (YTPlayer.canTrigger) jQuery(YTPlayer).trigger(YTPEvent);
                                },
								/**
								 *
								 * @param e
								 */
                                'onPlaybackQualityChange': function (e) {
                                    var quality = e.target.getPlaybackQuality();
                                    var YTPQualityChange = jQuery.Event("YTPQualityChange");
                                    YTPQualityChange.quality = quality;
                                    jQuery(YTPlayer).trigger(YTPQualityChange);
                                },
								/**
								 *
								 * @param err
								 */
                                'onError': function (err) {

                                    if (err.data == 150) {
                                        console.log("Embedding this video is restricted by Youtube.");
                                        if (YTPlayer.isPlayList) jQuery(YTPlayer).playNext();
                                    }

                                    if (err.data == 2 && YTPlayer.isPlayList)
                                        jQuery(YTPlayer).playNext();

                                    if (typeof YTPlayer.opt.onError == "function")
                                        YTPlayer.opt.onError($YTPlayer, err);
                                }
                            }
                        });
                    });
                });

                $YTPlayer.off("YTPTime.mask");

                jQuery.mbYTPlayer.applyMask(YTPlayer);

            });
        },
		/**
		 *
		 * @param YTPlayer
		 */
        getDataFromAPI: function (YTPlayer) {
            YTPlayer.videoData = jQuery.mbStorage.get("YTPlayer_data_" + YTPlayer.videoID);
            jQuery(YTPlayer).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function () {
                if (YTPlayer.hasData) {

                    if (YTPlayer.isPlayer && !YTPlayer.opt.autoPlay) {
                        var bgndURL = YTPlayer.videoData.thumb_max || YTPlayer.videoData.thumb_high || YTPlayer.videoData.thumb_medium;
                        YTPlayer.opt.containment.css({
                            background: "rgba(0,0,0,0.5) url(" + bgndURL + ") center center",
                            backgroundSize: "cover"
                        });
                        YTPlayer.opt.backgroundUrl = bgndURL;
                    }
                }
            });

            if (YTPlayer.videoData) {

                setTimeout(function () {
                    YTPlayer.opt.ratio = YTPlayer.opt.ratio == "auto" ? "16/9" : YTPlayer.opt.ratio;
                    YTPlayer.dataReceived = true;
                    jQuery(YTPlayer).trigger("YTPChanged");
                    var YTPData = jQuery.Event("YTPData");
                    YTPData.prop = {};
                    for (var x in YTPlayer.videoData) YTPData.prop[x] = YTPlayer.videoData[x];
                    jQuery(YTPlayer).trigger(YTPData);
                }, 500);

                YTPlayer.hasData = true;
            } else if (jQuery.mbYTPlayer.apiKey) {
                // Get video info from API3 (needs api key)
                // snippet,player,contentDetails,statistics,status
                jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + YTPlayer.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function (data) {
                    YTPlayer.dataReceived = true;
                    jQuery(YTPlayer).trigger("YTPChanged");

                    function parseYTPlayer_data(data) {
                        YTPlayer.videoData = {};
                        YTPlayer.videoData.id = YTPlayer.videoID;
                        YTPlayer.videoData.channelTitle = data.channelTitle;
                        YTPlayer.videoData.title = data.title;
                        YTPlayer.videoData.description = data.description.length < 400 ? data.description : data.description.substring(0, 400) + " ...";
                        YTPlayer.videoData.aspectratio = YTPlayer.opt.ratio == "auto" ? "16/9" : YTPlayer.opt.ratio;
                        YTPlayer.opt.ratio = YTPlayer.videoData.aspectratio;
                        YTPlayer.videoData.thumb_max = data.thumbnails.maxres ? data.thumbnails.maxres.url : null;
                        YTPlayer.videoData.thumb_high = data.thumbnails.high ? data.thumbnails.high.url : null;
                        YTPlayer.videoData.thumb_medium = data.thumbnails.medium ? data.thumbnails.medium.url : null;
                        jQuery.mbStorage.set("YTPlayer_data_" + YTPlayer.videoID, YTPlayer.videoData);
                    }
                    parseYTPlayer_data(data.items[0].snippet);
                    YTPlayer.hasData = true;
                    var YTPData = jQuery.Event("YTPData");
                    YTPData.prop = {};
                    for (var x in YTPlayer.videoData) YTPData.prop[x] = YTPlayer.videoData[x];
                    jQuery(YTPlayer).trigger(YTPData);
                });
            } else {
                setTimeout(function () {
                    jQuery(YTPlayer).trigger("YTPChanged");
                }, 50);
                if (YTPlayer.isPlayer && !YTPlayer.opt.autoPlay) {
                    var bgndURL = jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + YTPlayer.videoID + "/hqdefault.jpg";
                    YTPlayer.opt.containment.css({
                        background: "rgba(0,0,0,0.5) url(" + bgndURL + ") center center",
                        backgroundSize: "cover"
                    });
                    YTPlayer.opt.backgroundUrl = bgndURL;
                }
                YTPlayer.videoData = null;
                YTPlayer.opt.ratio = YTPlayer.opt.ratio == "auto" ? "16/9" : YTPlayer.opt.ratio;
            }
            if (YTPlayer.isPlayer && !YTPlayer.opt.autoPlay && !jQuery.browser.mobile) {
                YTPlayer.loading = jQuery("<div/>").addClass("loading").html("Loading").hide();
                jQuery(YTPlayer).append(YTPlayer.loading);
                YTPlayer.loading.fadeIn();
            }
        },
		/**
		 *
		 */
        removeStoredData: function () {
            jQuery.mbStorage.remove();
        },
		/**
		 *
		 * @returns {*|YTPlayer.videoData}
		 */
        getVideoData: function () {
            var YTPlayer = this.get(0);
            return YTPlayer.videoData;
        },
		/**
		 *
		 * @returns {*|YTPlayer.videoID|boolean}
		 */
        getVideoID: function () {
            var YTPlayer = this.get(0);
            return YTPlayer.videoID || false;
        },
		/**
		 *
		 * @param quality
		 */
        setVideoQuality: function (quality) {
            var YTPlayer = this.get(0);
            //if( !jQuery.browser.chrome )
            YTPlayer.player.setPlaybackQuality(quality);
        },
		/**
		 *
		 * @param videos
		 * @param shuffle
		 * @param callback
		 * @param loopList
		 * @returns {jQuery.mbYTPlayer}
		 */
        playlist: function (videos, shuffle, callback, loopList) {
            var $YTPlayer = this;
            var YTPlayer = $YTPlayer.get(0);
            YTPlayer.isPlayList = true;
            if (shuffle) videos = jQuery.shuffle(videos);
            if (!YTPlayer.videoID) {
                YTPlayer.videos = videos;
                YTPlayer.videoCounter = 0;
                YTPlayer.videoLength = videos.length;
                jQuery(YTPlayer).data("property", videos[0]);
                jQuery(YTPlayer).mb_YTPlayer();
            }
            if (typeof callback == "function") jQuery(YTPlayer).one("YTPChanged", function () {
                callback(YTPlayer);
            });
            jQuery(YTPlayer).on("YTPEnd", function () {
                loopList = typeof loopList == "undefined" ? true : loopList;
                jQuery(YTPlayer).playNext(loopList);
            });
            return $YTPlayer;
        },
		/**
		 *
		 * @returns {jQuery.mbYTPlayer}
		 */
        playNext: function (loopList) {
            var YTPlayer = this.get(0);

            if (YTPlayer.checkForStartAt) {
                clearTimeout(YTPlayer.checkForStartAt);
                clearInterval(YTPlayer.getState);
            }

            YTPlayer.videoCounter++;
            if (YTPlayer.videoCounter >= YTPlayer.videoLength && loopList)
                YTPlayer.videoCounter = 0;

            if (YTPlayer.videoCounter < YTPlayer.videoLength)
                jQuery(YTPlayer).changeMovie(YTPlayer.videos[YTPlayer.videoCounter]);
            else
                YTPlayer.videoCounter--;

            return this;
        },
		/**
		 *
		 * @returns {jQuery.mbYTPlayer}
		 */
        playPrev: function () {
            var YTPlayer = this.get(0);

            if (YTPlayer.checkForStartAt) {
                clearInterval(YTPlayer.checkForStartAt);
                clearInterval(YTPlayer.getState);
            }

            YTPlayer.videoCounter--;
            if (YTPlayer.videoCounter < 0) YTPlayer.videoCounter = YTPlayer.videoLength - 1;
            jQuery(YTPlayer).changeMovie(YTPlayer.videos[YTPlayer.videoCounter]);
            return this;
        },
		/**
		 *
		 * @returns {jQuery.mbYTPlayer}
		 */
        playIndex: function (idx) {
            var YTPlayer = this.get(0);

            idx = idx - 1;

            if (YTPlayer.checkForStartAt) {
                clearInterval(YTPlayer.checkForStartAt);
                clearInterval(YTPlayer.getState);
            }

            YTPlayer.videoCounter = idx;
            if (YTPlayer.videoCounter >= YTPlayer.videoLength - 1)
                YTPlayer.videoCounter = YTPlayer.videoLength - 1;
            jQuery(YTPlayer).changeMovie(YTPlayer.videos[YTPlayer.videoCounter]);
            return this;
        },
		/**
		 *
		 * @param opt
		 */
        changeMovie: function (opt) {

            var $YTPlayer = this;
            var YTPlayer = $YTPlayer.get(0);
            YTPlayer.opt.startAt = 0;
            YTPlayer.opt.stopAt = 0;
            YTPlayer.opt.mask = false;
            YTPlayer.opt.mute = true;
            YTPlayer.hasData = false;
            YTPlayer.hasChanged = true;
            YTPlayer.player.loopTime = undefined;

            if (opt)
                jQuery.extend(YTPlayer.opt, opt); //YTPlayer.defaultOpt,
            YTPlayer.videoID = getYTPVideoID(YTPlayer.opt.videoURL).videoID;

            if (YTPlayer.opt.loop == "true")
                YTPlayer.opt.loop = 9999;

            jQuery(YTPlayer.playerEl).CSSAnimate({
                opacity: 0
            }, 200, function () {

                var YTPChangeMovie = jQuery.Event("YTPChangeMovie");
                YTPChangeMovie.time = YTPlayer.currentTime;
                YTPChangeMovie.videoId = YTPlayer.videoID;
                jQuery(YTPlayer).trigger(YTPChangeMovie);

                jQuery(YTPlayer).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + YTPlayer.videoID), 1, YTPlayer.opt.quality);
                jQuery(YTPlayer).optimizeDisplay();

                jQuery.mbYTPlayer.checkForState(YTPlayer);
                jQuery.mbYTPlayer.getDataFromAPI(YTPlayer);

            });

            jQuery.mbYTPlayer.applyMask(YTPlayer);
        },
		/**
		 *
		 * @returns {player}
		 */
        getPlayer: function () {
            return jQuery(this).get(0).player;
        },

        playerDestroy: function () {
            var YTPlayer = this.get(0);
            ytp.YTAPIReady = true;
            ytp.backgroundIsInited = false;
            YTPlayer.isInit = false;
            YTPlayer.videoID = null;
            var playerBox = YTPlayer.wrapper;
            playerBox.remove();
            jQuery("#controlBar_" + YTPlayer.id).remove();
            clearInterval(YTPlayer.checkForStartAt);
            clearInterval(YTPlayer.getState);
            return this;
        },

		/**
		 *
		 * @param real
		 * @returns {jQuery.mbYTPlayer}
		 */
        fullscreen: function (real) {
            var YTPlayer = this.get(0);
            if (typeof real == "undefined") real = YTPlayer.opt.realfullscreen;
            real = eval(real);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var fullScreenBtn = controls.find(".mb_OnlyYT");
            var videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
            //var videoWrapper = YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function () {
                    var isFullScreen = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
                    if (!isFullScreen) {
                        YTPlayer.isAlone = false;
                        fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT);
                        jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality);
                        videoWrapper.removeClass("YTPFullscreen");
                        videoWrapper.CSSAnimate({
                            opacity: YTPlayer.opt.opacity
                        }, 500);
                        videoWrapper.css({
                            zIndex: 0
                        });
                        if (YTPlayer.isBackground) {
                            jQuery("body").after(controls);
                        } else {
                            YTPlayer.wrapper.before(controls);
                        }
                        jQuery(window).resize();
                        jQuery(YTPlayer).trigger("YTPFullScreenEnd");
                    } else {
                        jQuery(YTPlayer).YTPSetVideoQuality("default");
                        jQuery(YTPlayer).trigger("YTPFullScreenStart");
                    }
                });
            }
            if (!YTPlayer.isAlone) {
                function hideMouse() {
                    YTPlayer.overlay.css({
                        cursor: "none"
                    });
                }
                jQuery(document).on("mousemove.YTPlayer", function (e) {
                    YTPlayer.overlay.css({
                        cursor: "auto"
                    });
                    clearTimeout(YTPlayer.hideCursor);
                    if (!jQuery(e.target).parents().is(".mb_YTPBar")) YTPlayer.hideCursor = setTimeout(hideMouse, 3000);
                });
                hideMouse();
                if (real) {
                    videoWrapper.css({
                        opacity: 0
                    });
                    videoWrapper.addClass("YTPFullscreen");
                    launchFullscreen(videoWrapper.get(0));
                    setTimeout(function () {
                        videoWrapper.CSSAnimate({
                            opacity: 1
                        }, 1000);
                        YTPlayer.wrapper.append(controls);
                        jQuery(YTPlayer).optimizeDisplay();
                        YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, true);
                    }, 500)
                } else videoWrapper.css({
                    zIndex: 10000
                }).CSSAnimate({
                    opacity: 1
                }, 1000);
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite);
                YTPlayer.isAlone = true;
            } else {
                jQuery(document).off("mousemove.YTPlayer");
                clearTimeout(YTPlayer.hideCursor);
                YTPlayer.overlay.css({
                    cursor: "auto"
                });
                if (real) {
                    cancelFullscreen();
                } else {
                    videoWrapper.CSSAnimate({
                        opacity: YTPlayer.opt.opacity
                    }, 500);
                    videoWrapper.css({
                        zIndex: 0
                    });
                }
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT);
                YTPlayer.isAlone = false;
            }

            function RunPrefixMethod(obj, method) {
                var pfx = ["webkit", "moz", "ms", "o", ""];
                var p = 0,
                    m, t;
                while (p < pfx.length && !obj[m]) {
                    m = method;
                    if (pfx[p] == "") {
                        m = m.substr(0, 1).toLowerCase() + m.substr(1);
                    }
                    m = pfx[p] + m;
                    t = typeof obj[m];
                    if (t != "undefined") {
                        pfx = [pfx[p]];
                        return (t == "function" ? obj[m]() : obj[m]);
                    }
                    p++;
                }
            }

            function launchFullscreen(element) {
                RunPrefixMethod(element, "RequestFullScreen");
            }

            function cancelFullscreen() {
                if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) {
                    RunPrefixMethod(document, "CancelFullScreen");
                }
            }
            return this;
        },
		/**
		 *
		 * @returns {jQuery.mbYTPlayer}
		 */
        toggleLoops: function () {
            var YTPlayer = this.get(0);
            var data = YTPlayer.opt;
            if (data.loop == 1) {
                data.loop = 0;
            } else {
                if (data.startAt) {
                    YTPlayer.player.seekTo(data.startAt);
                } else {
                    YTPlayer.player.playVideo();
                }
                data.loop = 1;
            }
            return this;
        },
		/**
		 *
		 * @returns {jQuery.mbYTPlayer}
		 */
        play: function () {
            var YTPlayer = this.get(0);
            if (!YTPlayer.isReady)
                return this;

            YTPlayer.player.playVideo();
            YTPlayer.wrapper.CSSAnimate({
                opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
            }, 2000);

            jQuery(YTPlayer.playerEl).CSSAnimate({
                opacity: 1
            }, 1000);

            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var playBtn = controls.find(".mb_YTPPlaypause");
            playBtn.html(jQuery.mbYTPlayer.controls.pause);
            YTPlayer.state = 1;

            jQuery(YTPlayer).css("background-image", "none");
            return this;
        },
		/**
		 *
		 * @param callback
		 * @returns {jQuery.mbYTPlayer}
		 */
        togglePlay: function (callback) {
            var YTPlayer = this.get(0);
            if (YTPlayer.state == 1)
                this.YTPPause();
            else
                this.YTPPlay();

            if (typeof callback == "function")
                callback(YTPlayer.state);

            return this;
        },
		/**
		 *
		 * @returns {jQuery.mbYTPlayer}
		 */
        stop: function () {
            var YTPlayer = this.get(0);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var playBtn = controls.find(".mb_YTPPlaypause");
            playBtn.html(jQuery.mbYTPlayer.controls.play);
            YTPlayer.player.stopVideo();
            return this;
        },
		/**
		 *
		 * @returns {jQuery.mbYTPlayer}
		 */
        pause: function () {
            var YTPlayer = this.get(0);
            YTPlayer.player.pauseVideo();
            YTPlayer.state = 2;
            return this;
        },
		/**
		 *
		 * @param val
		 * @returns {jQuery.mbYTPlayer}
		 */
        seekTo: function (val) {
            var YTPlayer = this.get(0);
            YTPlayer.player.seekTo(val, true);
            return this;
        },
		/**
		 *
		 * @param val
		 * @returns {jQuery.mbYTPlayer}
		 */
        setVolume: function (val) {
            var YTPlayer = this.get(0);
            if (!val && !YTPlayer.opt.vol && YTPlayer.player.getVolume() == 0) jQuery(YTPlayer).YTPUnmute();
            else if ((!val && YTPlayer.player.getVolume() > 0) || (val && YTPlayer.opt.vol == val)) {
                if (!YTPlayer.isMute) jQuery(YTPlayer).YTPMute();
                else jQuery(YTPlayer).YTPUnmute();
            } else {
                YTPlayer.opt.vol = val;
                YTPlayer.player.setVolume(YTPlayer.opt.vol);
                if (YTPlayer.volumeBar && YTPlayer.volumeBar.length) YTPlayer.volumeBar.updateSliderVal(val)
            }
            return this;
        },
		/**
		 *
		 * @returns {boolean}
		 */
        toggleVolume: function () {
            var YTPlayer = this.get(0);
            if (!YTPlayer) return;
            if (YTPlayer.player.isMuted()) {
                jQuery(YTPlayer).YTPUnmute();
                return true;
            } else {
                jQuery(YTPlayer).YTPMute();
                return false;
            }
        },
		/**
		 *
		 * @returns {jQuery.mbYTPlayer}
		 */
        mute: function () {
            var YTPlayer = this.get(0);
            if (YTPlayer.isMute) return;
            YTPlayer.player.mute();
            YTPlayer.isMute = true;
            YTPlayer.player.setVolume(0);
            if (YTPlayer.volumeBar && YTPlayer.volumeBar.length && YTPlayer.volumeBar.width() > 10) {
                YTPlayer.volumeBar.updateSliderVal(0);
            }
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var muteBtn = controls.find(".mb_YTPMuteUnmute");
            muteBtn.html(jQuery.mbYTPlayer.controls.unmute);
            jQuery(YTPlayer).addClass("isMuted");
            if (YTPlayer.volumeBar && YTPlayer.volumeBar.length) YTPlayer.volumeBar.addClass("muted");
            var YTPEvent = jQuery.Event("YTPMuted");
            YTPEvent.time = YTPlayer.currentTime;
            if (YTPlayer.canTrigger) jQuery(YTPlayer).trigger(YTPEvent);
            return this;
        },
		/**
		 *
		 * @returns {jQuery.mbYTPlayer}
		 */
        unmute: function () {
            var YTPlayer = this.get(0);
            if (!YTPlayer.isMute) return;
            YTPlayer.player.unMute();
            YTPlayer.isMute = false;
            YTPlayer.player.setVolume(YTPlayer.opt.vol);
            if (YTPlayer.volumeBar && YTPlayer.volumeBar.length) YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol > 10 ? YTPlayer.opt.vol : 10);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var muteBtn = controls.find(".mb_YTPMuteUnmute");
            muteBtn.html(jQuery.mbYTPlayer.controls.mute);
            jQuery(YTPlayer).removeClass("isMuted");
            if (YTPlayer.volumeBar && YTPlayer.volumeBar.length) YTPlayer.volumeBar.removeClass("muted");
            var YTPEvent = jQuery.Event("YTPUnmuted");
            YTPEvent.time = YTPlayer.currentTime;
            if (YTPlayer.canTrigger) jQuery(YTPlayer).trigger(YTPEvent);
            return this;
        },
		/**
		 * FILTERS
		 *
		 *
		 * @param filter
		 * @param value
		 * @returns {jQuery.mbYTPlayer}
		 */
        applyFilter: function (filter, value) {
            return this.each(function () {
                var YTPlayer = this;
                YTPlayer.filters[filter].value = value;
                if (YTPlayer.filtersEnabled)
                    jQuery(YTPlayer).YTPEnableFilters();
            });
        },
		/**
		 *
		 * @param filters
		 * @returns {jQuery.mbYTPlayer}
		 */
        applyFilters: function (filters) {
            return this.each(function () {
                var YTPlayer = this;
                if (!YTPlayer.isReady) {
                    jQuery(YTPlayer).on("YTPReady", function () {
                        jQuery(YTPlayer).YTPApplyFilters(filters);
                    });
                    return;
                }

                for (var key in filters)
                    jQuery(YTPlayer).YTPApplyFilter(key, filters[key]);

                jQuery(YTPlayer).trigger("YTPFiltersApplied");
            });
        },
		/**
		 *
		 * @param filter
		 * @param value
		 * @returns {*}
		 */
        toggleFilter: function (filter, value) {
            return this.each(function () {
                var YTPlayer = this;
                if (!YTPlayer.filters[filter].value) YTPlayer.filters[filter].value = value;
                else YTPlayer.filters[filter].value = 0;
                if (YTPlayer.filtersEnabled) jQuery(this).YTPEnableFilters();
            });
        },
		/**
		 *
		 * @param callback
		 * @returns {*}
		 */
        toggleFilters: function (callback) {
            return this.each(function () {
                var YTPlayer = this;
                if (YTPlayer.filtersEnabled) {
                    jQuery(YTPlayer).trigger("YTPDisableFilters");
                    jQuery(YTPlayer).YTPDisableFilters();
                } else {
                    jQuery(YTPlayer).YTPEnableFilters();
                    jQuery(YTPlayer).trigger("YTPEnableFilters");
                }
                if (typeof callback == "function")
                    callback(YTPlayer.filtersEnabled);
            })
        },
		/**
		 *
		 * @returns {*}
		 */
        disableFilters: function () {
            return this.each(function () {
                var YTPlayer = this;
                var iframe = jQuery(YTPlayer.playerEl);
                iframe.css("-webkit-filter", "");
                iframe.css("filter", "");
                YTPlayer.filtersEnabled = false;
            })
        },
		/**
		 *
		 * @returns {*}
		 */
        enableFilters: function () {
            return this.each(function () {
                var YTPlayer = this;
                var iframe = jQuery(YTPlayer.playerEl);
                var filterStyle = "";
                for (var key in YTPlayer.filters) {
                    if (YTPlayer.filters[key].value)
                        filterStyle += key.replace("_", "-") + "(" + YTPlayer.filters[key].value + YTPlayer.filters[key].unit + ") ";
                }
                iframe.css("-webkit-filter", filterStyle);
                iframe.css("filter", filterStyle);
                YTPlayer.filtersEnabled = true;
            });
        },
		/**
		 *
		 * @param filter
		 * @param callback
		 * @returns {*}
		 */
        removeFilter: function (filter, callback) {
            return this.each(function () {
                var YTPlayer = this;
                if (typeof filter == "function") {
                    callback = filter;
                    filter = null;
                }
                if (!filter)
                    for (var key in YTPlayer.filters) {
                        jQuery(this).YTPApplyFilter(key, 0);
                        if (typeof callback == "function") callback(key);
                    } else {
                    jQuery(this).YTPApplyFilter(filter, 0);
                    if (typeof callback == "function") callback(filter);
                }
            });

        },
		/**
		 *
		 * @returns {*}
		 */
        getFilters: function () {
            var YTPlayer = this.get(0);
            return YTPlayer.filters;
        },
		/**
		 * MASK
		 *
		 *
		 * @param mask
		 * @returns {jQuery.mbYTPlayer}
		 */
        addMask: function (mask) {
            var YTPlayer = this.get(0);
            var overlay = YTPlayer.overlay;

            if (!mask) {
                mask = YTPlayer.actualMask;
            }

            var tempImg = jQuery("<img/>").attr("src", mask).on("load", function () {

                overlay.CSSAnimate({
                    opacity: 0
                }, 500, function () {

                    YTPlayer.hasMask = true;

                    tempImg.remove();

                    overlay.css({
                        backgroundImage: "url(" + mask + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover"
                    });

                    overlay.CSSAnimate({
                        opacity: 1
                    }, 500);

                });

            });

            return this;

        },
		/**
		 *
		 * @returns {jQuery.mbYTPlayer}
		 */
        removeMask: function () {
            var YTPlayer = this.get(0);
            var overlay = YTPlayer.overlay;
            overlay.CSSAnimate({
                opacity: 0
            }, 500, function () {

                YTPlayer.hasMask = false;

                overlay.css({
                    backgroundImage: "",
                    backgroundRepeat: "",
                    backgroundPosition: "",
                    backgroundSize: ""
                });
                overlay.CSSAnimate({
                    opacity: 1
                }, 500);

            });

            return this;

        },
		/**
		 *
		 * @param YTPlayer
		 */
        applyMask: function (YTPlayer) {
            var $YTPlayer = jQuery(YTPlayer);
            $YTPlayer.off("YTPTime.mask");

            if (YTPlayer.opt.mask) {

                if (typeof YTPlayer.opt.mask == "string") {
                    $YTPlayer.YTPAddMask(YTPlayer.opt.mask);

                    YTPlayer.actualMask = YTPlayer.opt.mask;

                } else if (typeof YTPlayer.opt.mask == "object") {

                    for (var time in YTPlayer.opt.mask) {
                        if (YTPlayer.opt.mask[time])
                            var img = jQuery("<img/>").attr("src", YTPlayer.opt.mask[time]);
                    }

                    if (YTPlayer.opt.mask[0])
                        $YTPlayer.YTPAddMask(YTPlayer.opt.mask[0]);

                    $YTPlayer.on("YTPTime.mask", function (e) {
                        for (var time in YTPlayer.opt.mask) {
                            if (e.time == time)
                                if (!YTPlayer.opt.mask[time]) {
                                    $YTPlayer.YTPRemoveMask();
                                } else {

                                    $YTPlayer.YTPAddMask(YTPlayer.opt.mask[time]);
                                    YTPlayer.actualMask = YTPlayer.opt.mask[time];
                                }

                        }
                    });

                }


            }
        },
		/**
		 *
		 */
        toggleMask: function () {
            var YTPlayer = this.get(0);
            var $YTPlayer = $(YTPlayer);
            if (YTPlayer.hasMask)
                $YTPlayer.YTPRemoveMask();
            else
                $YTPlayer.YTPAddMask();

            return this;
        },
		/**
		 *
		 * @returns {{totalTime: number, currentTime: number}}
		 */
        manageProgress: function () {
            var YTPlayer = this.get(0);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var progressBar = controls.find(".mb_YTPProgress");
            var loadedBar = controls.find(".mb_YTPLoaded");
            var timeBar = controls.find(".mb_YTPseekbar");
            var totW = progressBar.outerWidth();
            var currentTime = Math.floor(YTPlayer.player.getCurrentTime());
            var totalTime = Math.floor(YTPlayer.player.getDuration());
            var timeW = (currentTime * totW) / totalTime;
            var startLeft = 0;
            var loadedW = YTPlayer.player.getVideoLoadedFraction() * 100;
            loadedBar.css({
                left: startLeft,
                width: loadedW + "%"
            });
            timeBar.css({
                left: 0,
                width: timeW
            });
            return {
                totalTime: totalTime,
                currentTime: currentTime
            };
        },
		/**
		 *
		 * @param YTPlayer
		 */
        buildControls: function (YTPlayer) {
            var data = YTPlayer.opt;
            // @data.printUrl: is deprecated; use data.showYTLogo
            data.showYTLogo = data.showYTLogo || data.printUrl;

            if (jQuery("#controlBar_" + YTPlayer.id).length)
                return;
            YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                whiteSpace: "noWrap",
                position: YTPlayer.isBackground ? "fixed" : "absolute",
                zIndex: YTPlayer.isBackground ? 10000 : 1000
            }).hide();
            var buttonBar = jQuery("<div/>").addClass("buttonBar");
            /* play/pause button*/
            var playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function () {
                if (YTPlayer.player.getPlayerState() == 1) jQuery(YTPlayer).YTPPause();
                else jQuery(YTPlayer).YTPPlay();
            });
            /* mute/unmute button*/
            var MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function () {
                if (YTPlayer.player.getVolume() == 0) {
                    jQuery(YTPlayer).YTPUnmute();
                } else {
                    jQuery(YTPlayer).YTPMute();
                }
            });
            /* volume bar*/
            var volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
                display: "inline-block"
            });
            YTPlayer.volumeBar = volumeBar;
            /* time elapsed */
            var idx = jQuery("<span/>").addClass("mb_YTPTime");
            var vURL = data.videoURL ? data.videoURL : "";
            if (vURL.indexOf("http") < 0) vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL;
            var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function () {
                window.open(vURL, "viewOnYT")
            });
            var onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function () {
                jQuery(YTPlayer).YTPFullscreen(data.realfullscreen);
            });
            var progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function (e) {
                timeBar.css({
                    width: (e.clientX - timeBar.offset().left)
                });
                YTPlayer.timeW = e.clientX - timeBar.offset().left;
                YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                    width: 0
                });
                var totalTime = Math.floor(YTPlayer.player.getDuration());
                YTPlayer.goto = (timeBar.outerWidth() * totalTime) / progressBar.outerWidth();
                YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), true);
                YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                    width: 0
                });
            });
            var loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute");
            var timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
            progressBar.append(loadedBar).append(timeBar);
            buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx);
            if (data.showYTLogo) {
                buttonBar.append(movieUrl);
            }
            if (YTPlayer.isBackground || (eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground)) buttonBar.append(onlyVideo);
            YTPlayer.controlBar.append(buttonBar).append(progressBar);
            if (!YTPlayer.isBackground) {
                YTPlayer.controlBar.addClass("inlinePlayer");
                YTPlayer.wrapper.before(YTPlayer.controlBar);
            } else {
                jQuery("body").after(YTPlayer.controlBar);
            }
            volumeBar.simpleSlider({
                initialval: YTPlayer.opt.vol,
                scale: 100,
                orientation: "h",
                callback: function (el) {
                    if (el.value == 0) {
                        jQuery(YTPlayer).YTPMute();
                    } else {
                        jQuery(YTPlayer).YTPUnmute();
                    }
                    YTPlayer.player.setVolume(el.value);
                    if (!YTPlayer.isMute) YTPlayer.opt.vol = el.value;
                }
            });
        },
		/**
		 *
		 * @param YTPlayer
		 */
        checkForState: function (YTPlayer) {
            var interval = YTPlayer.opt.showControls ? 100 : 400;
            clearInterval(YTPlayer.getState);
            //Checking if player has been removed from scene
            if (!jQuery.contains(document, YTPlayer)) {
                jQuery(YTPlayer).YTPPlayerDestroy();
                clearInterval(YTPlayer.getState);
                clearInterval(YTPlayer.checkForStartAt);
                return;
            }

            jQuery.mbYTPlayer.checkForStart(YTPlayer);

            YTPlayer.getState = setInterval(function () {
                var prog = jQuery(YTPlayer).YTPManageProgress();
                var $YTPlayer = jQuery(YTPlayer);
                var data = YTPlayer.opt;
                var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
                var stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0;
                if (YTPlayer.currentTime != prog.currentTime) {

                    var YTPEvent = jQuery.Event("YTPTime");
                    YTPEvent.time = YTPlayer.currentTime;
                    jQuery(YTPlayer).trigger(YTPEvent);

                }
                YTPlayer.currentTime = prog.currentTime;
                YTPlayer.totalTime = YTPlayer.player.getDuration();
                if (YTPlayer.player.getVolume() == 0) $YTPlayer.addClass("isMuted");
                else $YTPlayer.removeClass("isMuted");

                if (YTPlayer.opt.showControls)
                    if (prog.totalTime) {
                        YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime));
                    } else {
                        YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --");
                    }

                if (eval(YTPlayer.opt.stopMovieOnBlur)) {
                    if (!document.hasFocus()) {
                        if (YTPlayer.state == 1) {
                            YTPlayer.hasFocus = false;
                            $YTPlayer.YTPPause();
                        }
                    } else if (document.hasFocus() && !YTPlayer.hasFocus && !(YTPlayer.state == -1 || YTPlayer.state == 0)) {
                        YTPlayer.hasFocus = true;
                        $YTPlayer.YTPPlay();
                    }
                }

                if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact) {
                    YTPlayer.controlBar.addClass("compact");
                    YTPlayer.isCompact = true;
                    if (!YTPlayer.isMute && YTPlayer.volumeBar) YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol);
                } else if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact) {
                    YTPlayer.controlBar.removeClass("compact");
                    YTPlayer.isCompact = false;
                    if (!YTPlayer.isMute && YTPlayer.volumeBar) YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol);
                }
                if (YTPlayer.player.getPlayerState() == 1 && (parseFloat(YTPlayer.player.getDuration() - 1.5) < YTPlayer.player.getCurrentTime() || (stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt))) {
                    if (YTPlayer.isEnded) return;
                    YTPlayer.isEnded = true;
                    setTimeout(function () {
                        YTPlayer.isEnded = false
                    }, 1000);

                    if (YTPlayer.isPlayList) {

                        if (!data.loop || (data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1)) {

                            YTPlayer.player.loopTime = undefined;
                            clearInterval(YTPlayer.getState);
                            var YTPEnd = jQuery.Event("YTPEnd");
                            YTPEnd.time = YTPlayer.currentTime;
                            jQuery(YTPlayer).trigger(YTPEnd);
                            //YTPlayer.state = 0;

                            return;
                        }

                    } else if (!data.loop || (data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1)) {

                        YTPlayer.player.loopTime = undefined;
                        YTPlayer.preventTrigger = true;
                        YTPlayer.state = 2;
                        jQuery(YTPlayer).YTPPause();

                        YTPlayer.wrapper.CSSAnimate({
                            opacity: 0
                        }, 500, function () {

                            if (YTPlayer.controlBar.length)
                                YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);

                            var YTPEnd = jQuery.Event("YTPEnd");
                            YTPEnd.time = YTPlayer.currentTime;
                            jQuery(YTPlayer).trigger(YTPEnd);

                            YTPlayer.player.seekTo(startAt, true);
                            if (!YTPlayer.isBackground) {
                                YTPlayer.opt.containment.css({
                                    background: "rgba(0,0,0,0.5) url(" + YTPlayer.opt.backgroundUrl + ") center center",
                                    backgroundSize: "cover"
                                });
                            }
                        });

                        return;

                    }

                    YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1;
                    startAt = startAt || 1;
                    YTPlayer.preventTrigger = true;
                    YTPlayer.state = 2;
                    jQuery(YTPlayer).YTPPause();
                    YTPlayer.player.seekTo(startAt, true);
                    $YTPlayer.YTPPlay();


                }
            }, interval);
        },
		/**
		 *
		 * @returns {string} time
		 */
        getTime: function () {
            var YTPlayer = this.get(0);
            return jQuery.mbYTPlayer.formatTime(YTPlayer.currentTime);
        },
		/**
		 *
		 * @returns {string} total time
		 */
        getTotalTime: function () {
            var YTPlayer = this.get(0);
            return jQuery.mbYTPlayer.formatTime(YTPlayer.totalTime);
        },
		/**
		 *
		 * @param YTPlayer
		 */
        checkForStart: function (YTPlayer) {

            var $YTPlayer = jQuery(YTPlayer);

            //Checking if player has been removed from scene
            if (!jQuery.contains(document, YTPlayer)) {
                jQuery(YTPlayer).YTPPlayerDestroy();
                return
            }

			/*
			 if( jQuery.browser.chrome )
			 YTPlayer.opt.quality = "default";
			 */

            YTPlayer.preventTrigger = true;
            YTPlayer.state = 2
            jQuery(YTPlayer).YTPPause();

            jQuery(YTPlayer).muteYTPVolume();
            jQuery("#controlBar_" + YTPlayer.id).remove();

            YTPlayer.controlBar = false;

            if (YTPlayer.opt.showControls)
                jQuery.mbYTPlayer.buildControls(YTPlayer);

            if (YTPlayer.opt.addRaster) {

                var classN = YTPlayer.opt.addRaster == "dot" ? "raster-dot" : "raster";
                YTPlayer.overlay.addClass(YTPlayer.isRetina ? classN + " retina" : classN);

            } else {

                YTPlayer.overlay.removeClass(function (index, classNames) {
                    // change the list into an array
                    var current_classes = classNames.split(" "),
                        // array of classes which are to be removed
                        classes_to_remove = [];
                    jQuery.each(current_classes, function (index, class_name) {
                        // if the classname begins with bg add it to the classes_to_remove array
                        if (/raster.*/.test(class_name)) {
                            classes_to_remove.push(class_name);
                        }
                    });
                    classes_to_remove.push("retina");
                    // turn the array back into a string
                    return classes_to_remove.join(" ");
                })

            }

            var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
            YTPlayer.player.playVideo();
            YTPlayer.player.seekTo(startAt, true);

            YTPlayer.checkForStartAt = setInterval(function () {

                jQuery(YTPlayer).YTPMute();

                var canPlayVideo = YTPlayer.player.getVideoLoadedFraction() >= startAt / YTPlayer.player.getDuration();

                if (YTPlayer.player.getDuration() > 0 && YTPlayer.player.getCurrentTime() >= startAt && canPlayVideo) {

                    //YTPlayer.player.playVideo();
                    //console.timeEnd( "checkforStart" );

                    clearInterval(YTPlayer.checkForStartAt);

                    if (typeof YTPlayer.opt.onReady == "function")
                        YTPlayer.opt.onReady(YTPlayer);

                    YTPlayer.isReady = true;
                    var YTPready = jQuery.Event("YTPReady");
                    YTPready.time = YTPlayer.currentTime;
                    jQuery(YTPlayer).trigger(YTPready);


                    YTPlayer.preventTrigger = true;
                    YTPlayer.state = 2;
                    jQuery(YTPlayer).YTPPause();

                    if (!YTPlayer.opt.mute) jQuery(YTPlayer).YTPUnmute();
                    YTPlayer.canTrigger = true;

                    if (YTPlayer.opt.autoPlay) {


                        var YTPStart = jQuery.Event("YTPStart");
                        YTPStart.time = YTPlayer.currentTime;
                        jQuery(YTPlayer).trigger(YTPStart);

                        $YTPlayer.css("background-image", "none");
                        jQuery(YTPlayer.playerEl).CSSAnimate({
                            opacity: 1
                        }, 1000);

                        $YTPlayer.YTPPlay();

                        YTPlayer.wrapper.CSSAnimate({
                            opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
                        }, 1000);

                        /* Fix for Safari freeze */
                        if (jQuery.browser.safari) {

                            YTPlayer.safariPlay = setInterval(function () {

                                if (YTPlayer.state != 1)
                                    $YTPlayer.YTPPlay();
                                else
                                    clearInterval(YTPlayer.safariPlay)
                            }, 10)
                        }
                        $YTPlayer.on("YTPReady", function () {
                            $YTPlayer.YTPPlay();
                        });

                    } else {

                        //$YTPlayer.YTPPause();
                        YTPlayer.player.pauseVideo();
                        if (!YTPlayer.isPlayer) {
                            jQuery(YTPlayer.playerEl).CSSAnimate({
                                opacity: 1
                            }, 500);

                            YTPlayer.wrapper.CSSAnimate({
                                opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
                            }, 500);
                        }

                        if (YTPlayer.controlBar.length)
                            YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);

                    }

                    if (YTPlayer.isPlayer && !YTPlayer.opt.autoPlay && (YTPlayer.loading && YTPlayer.loading.length)) {
                        YTPlayer.loading.html("Ready");
                        setTimeout(function () {
                            YTPlayer.loading.fadeOut();
                        }, 100)
                    }

                    if (YTPlayer.controlBar && YTPlayer.controlBar.length)
                        YTPlayer.controlBar.slideDown(1000);

                } else if (jQuery.browser.safari) {
                    YTPlayer.player.playVideo();
                    if (startAt >= 0) YTPlayer.player.seekTo(startAt, true);
                }

            }, 1);

        },
		/**
		 *
		 * @param align
		 */
        setAlign: function (align) {
            var $YTplayer = this;

            $YTplayer.optimizeDisplay(align);
        },
		/**
		 *
		 * @param align
		 */
        getAlign: function () {
            var YTPlayer = this.get(0);
            return YTPlayer.opt.align;
        },
		/**
		 *
		 * @param s
		 * @returns {string}
		 */
        formatTime: function (s) {
            var min = Math.floor(s / 60);
            var sec = Math.floor(s - (60 * min));
            return (min <= 9 ? "0" + min : min) + " : " + (sec <= 9 ? "0" + sec : sec);
        }
    };

	/**
	 *
	 * @param align
	 * can be center, top, bottom, right, left; (default is center,center)
	 */
    jQuery.fn.optimizeDisplay = function (align) {
        var YTPlayer = this.get(0);
        var playerBox = jQuery(YTPlayer.playerEl);
        var vid = {};

        YTPlayer.opt.align = align || YTPlayer.opt.align;

        YTPlayer.opt.align = typeof YTPlayer.opt.align != "undefined " ? YTPlayer.opt.align : "center,center";
        var YTPAlign = YTPlayer.opt.align.split(",");

        //data.optimizeDisplay = YTPlayer.isPlayer ? false : data.optimizeDisplay;

        if (YTPlayer.opt.optimizeDisplay) {
            var win = {};
            var el = YTPlayer.wrapper;

            win.width = el.outerWidth();
            win.height = el.outerHeight();

            vid.width = win.width;
            vid.height = YTPlayer.opt.ratio == "16/9" ? Math.ceil(win.width * (9 / 16)) : Math.ceil(win.width * (3 / 4));

            vid.width = win.width;
            vid.height = YTPlayer.opt.ratio == "16/9" ? Math.ceil(win.width * (9 / 16)) : Math.ceil(win.width * (3 / 4));

            vid.marginTop = -((vid.height - win.height) / 2);
            vid.marginLeft = 0;

            var lowest = vid.height < win.height;

            if (lowest) {

                vid.height = win.height;
                vid.width = YTPlayer.opt.ratio == "16/9" ? Math.floor(win.height * (16 / 9)) : Math.floor(win.height * (4 / 3));

                vid.marginTop = 0;
                vid.marginLeft = -((vid.width - win.width) / 2);

            }

            for (var a in YTPAlign) {

                var al = YTPAlign[a].trim();

                switch (al) {

                    case "top":
                        vid.marginTop = lowest ? -((vid.height - win.height) / 2) : 0;
                        break;

                    case "bottom":
                        vid.marginTop = lowest ? 0 : -(vid.height - win.height);
                        break;

                    case "left":
                        vid.marginLeft = 0;
                        break;

                    case "right":
                        vid.marginLeft = lowest ? -(vid.width - win.width) : 0;
                        break;

                    default:
                        break;
                }

            }

        } else {
            vid.width = "100%";
            vid.height = "100%";
            vid.marginTop = 0;
            vid.marginLeft = 0;
        }

        playerBox.css({
            width: vid.width,
            height: vid.height,
            marginTop: vid.marginTop,
            marginLeft: vid.marginLeft
        });

    };
	/**
	 *
	 * @param arr
	 * @returns {Array|string|Blob|*}
	 *
	 */
    jQuery.shuffle = function (arr) {
        var newArray = arr.slice();
        var len = newArray.length;
        var i = len;
        while (i--) {
            var p = parseInt(Math.random() * len);
            var t = newArray[i];
            newArray[i] = newArray[p];
            newArray[p] = t;
        }
        return newArray;
    };

    jQuery.fn.unselectable = function () {
        return this.each(function () {
            jQuery(this).css({
                "-moz-user-select": "none",
                "-webkit-user-select": "none",
                "user-select": "none"
            }).attr("unselectable", "on");
        });
    };


    /* Exposed public method */
    jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer;
    jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer;
    jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID;
    jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie;
    jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy;

    jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play;
    jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay;
    jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop;
    jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause;
    jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo;

    jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist;
    jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext;
    jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev;
    jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex;

    jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute;
    jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute;
    jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume;
    jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume;

    jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData;
    jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen;
    jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops;
    jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality;
    jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress;

    jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter;
    jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters;
    jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter;
    jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters;
    jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter;
    jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters;
    jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters;
    jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters;

    jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime;
    jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime;

    jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask;
    jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask;
    jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask;

    jQuery.fn.YTPSetAlign = jQuery.mbYTPlayer.setAlign;
    jQuery.fn.YTPGetAlign = jQuery.mbYTPlayer.getAlign;


	/**
	 *
	 * @deprecated
	 * todo: Above methods will be removed with version 3.5.0
	 *
	 **/
    jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer;
    jQuery.fn.playNext = jQuery.mbYTPlayer.playNext;
    jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev;
    jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie;
    jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID;
    jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer;
    jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy;
    jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen;
    jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls;
    jQuery.fn.playYTP = jQuery.mbYTPlayer.play;
    jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops;
    jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop;
    jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause;
    jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo;
    jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute;
    jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute;
    jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume;
    jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality;
    jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress;
    jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData;


})(jQuery, ytp);
;
/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.CSSAnimate.min.js
 *
 *  Copyright (c) 2001-2014. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matteo@open-lab.com
 *  site: 	http://pupunzi.com
 *  blog:	http://pupunzi.open-lab.com
 * 	http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 26/03/14 21.40
 *  *****************************************************************************
 */

function uncamel(e) { return e.replace(/([A-Z])/g, function (e) { return "-" + e.toLowerCase() }) } function setUnit(e, t) { return "string" != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? "" + e + t : e } function setFilter(e, t, r) { var i = uncamel(t), n = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx; e[n + "filter"] = e[n + "filter"] || "", r = setUnit(r > jQuery.CSS.filters[t].max ? jQuery.CSS.filters[t].max : r, jQuery.CSS.filters[t].unit), e[n + "filter"] += i + "(" + r + ") ", delete e[t] } jQuery.support.CSStransition = function () { var e = document.body || document.documentElement, t = e.style; return void 0 !== t.transition || void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.MsTransition || void 0 !== t.OTransition }(), jQuery.CSS = { name: "mb.CSSAnimate", author: "Matteo Bicocchi", version: "2.0.0", transitionEnd: "transitionEnd", sfx: "", filters: { blur: { min: 0, max: 100, unit: "px" }, brightness: { min: 0, max: 400, unit: "%" }, contrast: { min: 0, max: 400, unit: "%" }, grayscale: { min: 0, max: 100, unit: "%" }, hueRotate: { min: 0, max: 360, unit: "deg" }, invert: { min: 0, max: 100, unit: "%" }, saturate: { min: 0, max: 400, unit: "%" }, sepia: { min: 0, max: 100, unit: "%" } }, normalizeCss: function (e) { var t = jQuery.extend(!0, {}, e); jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-"); for (var r in t) { "transform" === r && (t[jQuery.CSS.sfx + "transform"] = t[r], delete t[r]), "transform-origin" === r && (t[jQuery.CSS.sfx + "transform-origin"] = e[r], delete t[r]), "filter" !== r || jQuery.browser.mozilla || (t[jQuery.CSS.sfx + "filter"] = e[r], delete t[r]), "blur" === r && setFilter(t, "blur", e[r]), "brightness" === r && setFilter(t, "brightness", e[r]), "contrast" === r && setFilter(t, "contrast", e[r]), "grayscale" === r && setFilter(t, "grayscale", e[r]), "hueRotate" === r && setFilter(t, "hueRotate", e[r]), "invert" === r && setFilter(t, "invert", e[r]), "saturate" === r && setFilter(t, "saturate", e[r]), "sepia" === r && setFilter(t, "sepia", e[r]); var i = ""; "x" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " translateX(" + setUnit(e[r], "px") + ")", delete t[r]), "y" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " translateY(" + setUnit(e[r], "px") + ")", delete t[r]), "z" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " translateZ(" + setUnit(e[r], "px") + ")", delete t[r]), "rotate" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotate(" + setUnit(e[r], "deg") + ")", delete t[r]), "rotateX" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotateX(" + setUnit(e[r], "deg") + ")", delete t[r]), "rotateY" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotateY(" + setUnit(e[r], "deg") + ")", delete t[r]), "rotateZ" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotateZ(" + setUnit(e[r], "deg") + ")", delete t[r]), "scale" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scale(" + setUnit(e[r], "") + ")", delete t[r]), "scaleX" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scaleX(" + setUnit(e[r], "") + ")", delete t[r]), "scaleY" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scaleY(" + setUnit(e[r], "") + ")", delete t[r]), "scaleZ" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scaleZ(" + setUnit(e[r], "") + ")", delete t[r]), "skew" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " skew(" + setUnit(e[r], "deg") + ")", delete t[r]), "skewX" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " skewX(" + setUnit(e[r], "deg") + ")", delete t[r]), "skewY" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " skewY(" + setUnit(e[r], "deg") + ")", delete t[r]), "perspective" === r && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " perspective(" + setUnit(e[r], "px") + ")", delete t[r]) } return t }, getProp: function (e) { var t = []; for (var r in e) t.indexOf(r) < 0 && t.push(uncamel(r)); return t.join(",") }, animate: function (e, t, r, i, n) { return this.each(function () { function s() { u.called = !0, u.CSSAIsRunning = !1, a.off(jQuery.CSS.transitionEnd + "." + u.id), clearTimeout(u.timeout), a.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof n && n.apply(u), "function" == typeof u.CSSqueue && (u.CSSqueue(), u.CSSqueue = null) } var u = this, a = jQuery(this); u.id = u.id || "CSSA_" + (new Date).getTime(); var o = o || { type: "noEvent" }; if (u.CSSAIsRunning && u.eventType == o.type && !jQuery.browser.msie && jQuery.browser.version <= 9) return void (u.CSSqueue = function () { a.CSSAnimate(e, t, r, i, n) }); if (u.CSSqueue = null, u.eventType = o.type, 0 !== a.length && e) { if (e = jQuery.normalizeCss(e), u.CSSAIsRunning = !0, "function" == typeof t && (n = t, t = jQuery.fx.speeds._default), "function" == typeof r && (i = r, r = 0), "string" == typeof r && (n = r, r = 0), "function" == typeof i && (n = i, i = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof t) for (var f in jQuery.fx.speeds) { if (t == f) { t = jQuery.fx.speeds[f]; break } t = jQuery.fx.speeds._default } if (t || (t = jQuery.fx.speeds._default), "string" == typeof n && (i = n, n = null), !jQuery.support.CSStransition) { for (var c in e) { if ("transform" === c && delete e[c], "filter" === c && delete e[c], "transform-origin" === c && delete e[c], "auto" === e[c] && delete e[c], "x" === c) { var S = e[c], l = "left"; e[l] = S, delete e[c] } if ("y" === c) { var S = e[c], l = "top"; e[l] = S, delete e[c] } ("-ms-transform" === c || "-ms-filter" === c) && delete e[c] } return void a.delay(r).animate(e, t, n) } var y = { "default": "ease", "in": "ease-in", out: "ease-out", "in-out": "ease-in-out", snap: "cubic-bezier(0,1,.5,1)", easeOutCubic: "cubic-bezier(.215,.61,.355,1)", easeInOutCubic: "cubic-bezier(.645,.045,.355,1)", easeInCirc: "cubic-bezier(.6,.04,.98,.335)", easeOutCirc: "cubic-bezier(.075,.82,.165,1)", easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)", easeInExpo: "cubic-bezier(.95,.05,.795,.035)", easeOutExpo: "cubic-bezier(.19,1,.22,1)", easeInOutExpo: "cubic-bezier(1,0,0,1)", easeInQuad: "cubic-bezier(.55,.085,.68,.53)", easeOutQuad: "cubic-bezier(.25,.46,.45,.94)", easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)", easeInQuart: "cubic-bezier(.895,.03,.685,.22)", easeOutQuart: "cubic-bezier(.165,.84,.44,1)", easeInOutQuart: "cubic-bezier(.77,0,.175,1)", easeInQuint: "cubic-bezier(.755,.05,.855,.06)", easeOutQuint: "cubic-bezier(.23,1,.32,1)", easeInOutQuint: "cubic-bezier(.86,0,.07,1)", easeInSine: "cubic-bezier(.47,0,.745,.715)", easeOutSine: "cubic-bezier(.39,.575,.565,1)", easeInOutSine: "cubic-bezier(.445,.05,.55,.95)", easeInBack: "cubic-bezier(.6,-.28,.735,.045)", easeOutBack: "cubic-bezier(.175, .885,.32,1.275)", easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)" }; y[i] && (i = y[i]), a.off(jQuery.CSS.transitionEnd + "." + u.id); var m = jQuery.CSS.getProp(e), d = {}; jQuery.extend(d, e), d[jQuery.CSS.sfx + "transition-property"] = m, d[jQuery.CSS.sfx + "transition-duration"] = t + "ms", d[jQuery.CSS.sfx + "transition-delay"] = r + "ms", d[jQuery.CSS.sfx + "transition-timing-function"] = i, setTimeout(function () { a.one(jQuery.CSS.transitionEnd + "." + u.id, s), a.css(d) }, 1), u.timeout = setTimeout(function () { return u.called || !n ? (u.called = !1, void (u.CSSAIsRunning = !1)) : (a.css(jQuery.CSS.sfx + "transition", ""), n.apply(u), u.CSSAIsRunning = !1, void ("function" == typeof u.CSSqueue && (u.CSSqueue(), u.CSSqueue = null))) }, t + r + 10) } }) } }, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function (e) { return this.each(function () { var t = jQuery(this), r = jQuery.normalizeCss(e); t.css(r) }) };
;/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.browser.min.js
 *
 *  Copyright (c) 2001-2014. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matteo@open-lab.com
 *  site: 	http://pupunzi.com
 *  blog:	http://pupunzi.open-lab.com
 * 	http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 26/03/14 21.43
 *  *****************************************************************************
 */

var nAgt = navigator.userAgent; if (!jQuery.browser) { jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10); var nameOffset, verOffset, ix; if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)); else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4); else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5); else if (-1 != nAgt.indexOf("Trident") || -1 != nAgt.indexOf("Edge")) { jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer"; var start = nAgt.indexOf("rv:") + 3, end = start + 4; jQuery.browser.fullVersion = nAgt.substring(start, end) } else -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : nAgt.indexOf("mozilla/5.0") > -1 && nAgt.indexOf("android ") > -1 && nAgt.indexOf("applewebkit") > -1 && !(nAgt.indexOf("chrome") > -1) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); -1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion } jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && jQuery(window).width() > 765, jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt);
;/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.simpleSlider.min.js                                                                                                              _
 _ last modified: 16/05/15 23.45                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matteo@open-lab.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2015. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/

!function (e) { var t = (/iphone|ipod|ipad|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase()), "ontouchstart" in window || window.navigator && window.navigator.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof DocumentTouch || !1); e.simpleSlider = { defaults: { initialval: 0, scale: 100, orientation: "h", readonly: !1, callback: !1 }, events: { start: t ? "touchstart" : "mousedown", end: t ? "touchend" : "mouseup", move: t ? "touchmove" : "mousemove" }, init: function (o) { return this.each(function () { var a = this, l = e(a); l.addClass("simpleSlider"), a.opt = {}, e.extend(a.opt, e.simpleSlider.defaults, o), e.extend(a.opt, l.data()); var i = "h" == a.opt.orientation ? "horizontal" : "vertical", n = e("<div/>").addClass("level").addClass(i); l.prepend(n), a.level = n, l.css({ cursor: "default" }), "auto" == a.opt.scale && (a.opt.scale = e(a).outerWidth()), l.updateSliderVal(), a.opt.readonly || (l.on(e.simpleSlider.events.start, function (e) { t && (e = e.changedTouches[0]), a.canSlide = !0, l.updateSliderVal(e), l.css({ cursor: "col-resize" }), e.preventDefault(), e.stopPropagation() }), e(document).on(e.simpleSlider.events.move, function (o) { t && (o = o.changedTouches[0]), a.canSlide && (e(document).css({ cursor: "default" }), l.updateSliderVal(o), o.preventDefault(), o.stopPropagation()) }).on(e.simpleSlider.events.end, function () { e(document).css({ cursor: "auto" }), a.canSlide = !1, l.css({ cursor: "auto" }) })) }) }, updateSliderVal: function (t) { function o(e, t) { return Math.floor(100 * e / t) } var a = this, l = a.get(0); if (l.opt) { l.opt.initialval = "number" == typeof l.opt.initialval ? l.opt.initialval : l.opt.initialval(l); var i = e(l).outerWidth(), n = e(l).outerHeight(); l.x = "object" == typeof t ? t.clientX + document.body.scrollLeft - a.offset().left : "number" == typeof t ? t * i / l.opt.scale : l.opt.initialval * i / l.opt.scale, l.y = "object" == typeof t ? t.clientY + document.body.scrollTop - a.offset().top : "number" == typeof t ? (l.opt.scale - l.opt.initialval - t) * n / l.opt.scale : l.opt.initialval * n / l.opt.scale, l.y = a.outerHeight() - l.y, l.scaleX = l.x * l.opt.scale / i, l.scaleY = l.y * l.opt.scale / n, l.outOfRangeX = l.scaleX > l.opt.scale ? l.scaleX - l.opt.scale : l.scaleX < 0 ? l.scaleX : 0, l.outOfRangeY = l.scaleY > l.opt.scale ? l.scaleY - l.opt.scale : l.scaleY < 0 ? l.scaleY : 0, l.outOfRange = "h" == l.opt.orientation ? l.outOfRangeX : l.outOfRangeY, "undefined" != typeof t ? l.value = "h" == l.opt.orientation ? l.x >= a.outerWidth() ? l.opt.scale : l.x <= 0 ? 0 : l.scaleX : l.y >= a.outerHeight() ? l.opt.scale : l.y <= 0 ? 0 : l.scaleY : l.value = "h" == l.opt.orientation ? l.scaleX : l.scaleY, "h" == l.opt.orientation ? l.level.width(o(l.x, i) + "%") : l.level.height(o(l.y, n)), "function" == typeof l.opt.callback && l.opt.callback(l) } } }, e.fn.simpleSlider = e.simpleSlider.init, e.fn.updateSliderVal = e.simpleSlider.updateSliderVal }(jQuery);
;/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.storage.min.js                                                                                                                   _
 _ last modified: 24/05/15 16.08                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matteo@open-lab.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2015. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/

!function (a) { a.mbCookie = { set: function (a, b, c, d) { b = JSON.stringify(b), c || (c = 7), d = d ? "; domain=" + d : ""; var f, e = new Date; e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * c), f = "; expires=" + e.toGMTString(), document.cookie = a + "=" + b + f + "; path=/" + d }, get: function (a) { for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) { for (var e = c[d]; " " == e.charAt(0);)e = e.substring(1, e.length); if (0 == e.indexOf(b)) return JSON.parse(e.substring(b.length, e.length)) } return null }, remove: function (b) { a.mbCookie.set(b, "", -1) } }, a.mbStorage = { set: function (a, b) { b = JSON.stringify(b), localStorage.setItem(a, b) }, get: function (a) { return localStorage[a] ? JSON.parse(localStorage[a]) : null }, remove: function (a) { a ? localStorage.removeItem(a) : localStorage.clear() } } }(jQuery);