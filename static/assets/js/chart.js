/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.1.3
 *
 * Copyright 2016 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
! function t(e, i, s) {
    function a(n, r) {
        if (!i[n]) {
            if (!e[n]) { var h = "function" == typeof require && require; if (!r && h) return h(n, !0); if (o) return o(n, !0); var l = new Error("Cannot find module '" + n + "'"); throw l.code = "MODULE_NOT_FOUND", l }
            var c = i[n] = { exports: {} };
            e[n][0].call(c.exports, function(t) { var i = e[n][1][t]; return a(i ? i : t) }, c, c.exports, t, e, i, s)
        }
        return i[n].exports
    }
    for (var o = "function" == typeof require && require, n = 0; n < s.length; n++) a(s[n]);
    return a
}({
    1: [function(t, e, i) {
        function s(t) {
            if (t) {
                var e = /^#([a-fA-F0-9]{3})$/,
                    i = /^#([a-fA-F0-9]{6})$/,
                    s = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                    a = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                    o = /(\w+)/,
                    n = [0, 0, 0],
                    r = 1,
                    h = t.match(e);
                if (h) { h = h[1]; for (var l = 0; l < n.length; l++) n[l] = parseInt(h[l] + h[l], 16) } else if (h = t.match(i)) { h = h[1]; for (var l = 0; l < n.length; l++) n[l] = parseInt(h.slice(2 * l, 2 * l + 2), 16) } else if (h = t.match(s)) {
                    for (var l = 0; l < n.length; l++) n[l] = parseInt(h[l + 1]);
                    r = parseFloat(h[4])
                } else if (h = t.match(a)) {
                    for (var l = 0; l < n.length; l++) n[l] = Math.round(2.55 * parseFloat(h[l + 1]));
                    r = parseFloat(h[4])
                } else if (h = t.match(o)) { if ("transparent" == h[1]) return [0, 0, 0, 0]; if (n = y[h[1]], !n) return }
                for (var l = 0; l < n.length; l++) n[l] = v(n[l], 0, 255);
                return r = r || 0 == r ? v(r, 0, 1) : 1, n[3] = r, n
            }
        }

        function a(t) {
            if (t) {
                var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                    i = t.match(e);
                if (i) {
                    var s = parseFloat(i[4]),
                        a = v(parseInt(i[1]), 0, 360),
                        o = v(parseFloat(i[2]), 0, 100),
                        n = v(parseFloat(i[3]), 0, 100),
                        r = v(isNaN(s) ? 1 : s, 0, 1);
                    return [a, o, n, r]
                }
            }
        }

        function o(t) {
            if (t) {
                var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                    i = t.match(e);
                if (i) {
                    var s = parseFloat(i[4]),
                        a = v(parseInt(i[1]), 0, 360),
                        o = v(parseFloat(i[2]), 0, 100),
                        n = v(parseFloat(i[3]), 0, 100),
                        r = v(isNaN(s) ? 1 : s, 0, 1);
                    return [a, o, n, r]
                }
            }
        }

        function n(t) { var e = s(t); return e && e.slice(0, 3) }

        function r(t) { var e = a(t); return e && e.slice(0, 3) }

        function h(t) { var e = s(t); return e ? e[3] : (e = a(t)) ? e[3] : (e = o(t)) ? e[3] : void 0 }

        function l(t) { return "#" + x(t[0]) + x(t[1]) + x(t[2]) }

        function c(t, e) { return 1 > e || t[3] && t[3] < 1 ? d(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")" }

        function d(t, e) { return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")" }

        function u(t, e) {
            if (1 > e || t[3] && t[3] < 1) return f(t, e);
            var i = Math.round(t[0] / 255 * 100),
                s = Math.round(t[1] / 255 * 100),
                a = Math.round(t[2] / 255 * 100);
            return "rgb(" + i + "%, " + s + "%, " + a + "%)"
        }

        function f(t, e) {
            var i = Math.round(t[0] / 255 * 100),
                s = Math.round(t[1] / 255 * 100),
                a = Math.round(t[2] / 255 * 100);
            return "rgba(" + i + "%, " + s + "%, " + a + "%, " + (e || t[3] || 1) + ")"
        }

        function g(t, e) { return 1 > e || t[3] && t[3] < 1 ? m(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)" }

        function m(t, e) { return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")" }

        function p(t, e) { return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")" }

        function b(t) { return k[t.slice(0, 3)] }

        function v(t, e, i) { return Math.min(Math.max(e, t), i) }

        function x(t) { var e = t.toString(16).toUpperCase(); return e.length < 2 ? "0" + e : e }
        var y = t("color-name");
        e.exports = { getRgba: s, getHsla: a, getRgb: n, getHsl: r, getHwb: o, getAlpha: h, hexString: l, rgbString: c, rgbaString: d, percentString: u, percentaString: f, hslString: g, hslaString: m, hwbString: p, keyword: b };
        var k = {};
        for (var _ in y) k[y[_]] = _
    }, { "color-name": 5 }],
    2: [function(t, e, i) {
        var s = t("color-convert"),
            a = t("chartjs-color-string"),
            o = function(t) {
                if (t instanceof o) return t;
                if (!(this instanceof o)) return new o(t);
                if (this.values = { rgb: [0, 0, 0], hsl: [0, 0, 0], hsv: [0, 0, 0], hwb: [0, 0, 0], cmyk: [0, 0, 0, 0], alpha: 1 }, "string" == typeof t) {
                    var e = a.getRgba(t);
                    if (e) this.setValues("rgb", e);
                    else if (e = a.getHsla(t)) this.setValues("hsl", e);
                    else {
                        if (!(e = a.getHwb(t))) throw new Error('Unable to parse color from string "' + t + '"');
                        this.setValues("hwb", e)
                    }
                } else if ("object" == typeof t) {
                    var e = t;
                    if (void 0 !== e.r || void 0 !== e.red) this.setValues("rgb", e);
                    else if (void 0 !== e.l || void 0 !== e.lightness) this.setValues("hsl", e);
                    else if (void 0 !== e.v || void 0 !== e.value) this.setValues("hsv", e);
                    else if (void 0 !== e.w || void 0 !== e.whiteness) this.setValues("hwb", e);
                    else {
                        if (void 0 === e.c && void 0 === e.cyan) throw new Error("Unable to parse color from object " + JSON.stringify(t));
                        this.setValues("cmyk", e)
                    }
                }
            };
        o.prototype = {
            rgb: function(t) { return this.setSpace("rgb", arguments) },
            hsl: function(t) { return this.setSpace("hsl", arguments) },
            hsv: function(t) { return this.setSpace("hsv", arguments) },
            hwb: function(t) { return this.setSpace("hwb", arguments) },
            cmyk: function(t) { return this.setSpace("cmyk", arguments) },
            rgbArray: function() { return this.values.rgb },
            hslArray: function() { return this.values.hsl },
            hsvArray: function() { return this.values.hsv },
            hwbArray: function() { return 1 !== this.values.alpha ? this.values.hwb.concat([this.values.alpha]) : this.values.hwb },
            cmykArray: function() { return this.values.cmyk },
            rgbaArray: function() { var t = this.values.rgb; return t.concat([this.values.alpha]) },
            hslaArray: function() { var t = this.values.hsl; return t.concat([this.values.alpha]) },
            alpha: function(t) { return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this) },
            red: function(t) { return this.setChannel("rgb", 0, t) },
            green: function(t) { return this.setChannel("rgb", 1, t) },
            blue: function(t) { return this.setChannel("rgb", 2, t) },
            hue: function(t) { return this.setChannel("hsl", 0, t) },
            saturation: function(t) { return this.setChannel("hsl", 1, t) },
            lightness: function(t) { return this.setChannel("hsl", 2, t) },
            saturationv: function(t) { return this.setChannel("hsv", 1, t) },
            whiteness: function(t) { return this.setChannel("hwb", 1, t) },
            blackness: function(t) { return this.setChannel("hwb", 2, t) },
            value: function(t) { return this.setChannel("hsv", 2, t) },
            cyan: function(t) { return this.setChannel("cmyk", 0, t) },
            magenta: function(t) { return this.setChannel("cmyk", 1, t) },
            yellow: function(t) { return this.setChannel("cmyk", 2, t) },
            black: function(t) { return this.setChannel("cmyk", 3, t) },
            hexString: function() { return a.hexString(this.values.rgb) },
            rgbString: function() { return a.rgbString(this.values.rgb, this.values.alpha) },
            rgbaString: function() { return a.rgbaString(this.values.rgb, this.values.alpha) },
            percentString: function() { return a.percentString(this.values.rgb, this.values.alpha) },
            hslString: function() { return a.hslString(this.values.hsl, this.values.alpha) },
            hslaString: function() { return a.hslaString(this.values.hsl, this.values.alpha) },
            hwbString: function() { return a.hwbString(this.values.hwb, this.values.alpha) },
            keyword: function() { return a.keyword(this.values.rgb, this.values.alpha) },
            rgbNumber: function() { return this.values.rgb[0] << 16 | this.values.rgb[1] << 8 | this.values.rgb[2] },
            luminosity: function() {
                for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
                    var s = t[i] / 255;
                    e[i] = .03928 >= s ? s / 12.92 : Math.pow((s + .055) / 1.055, 2.4)
                }
                return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
            },
            contrast: function(t) {
                var e = this.luminosity(),
                    i = t.luminosity();
                return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05)
            },
            level: function(t) { var e = this.contrast(t); return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "" },
            dark: function() {
                var t = this.values.rgb,
                    e = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3;
                return 128 > e
            },
            light: function() { return !this.dark() },
            negate: function() { for (var t = [], e = 0; 3 > e; e++) t[e] = 255 - this.values.rgb[e]; return this.setValues("rgb", t), this },
            lighten: function(t) { return this.values.hsl[2] += this.values.hsl[2] * t, this.setValues("hsl", this.values.hsl), this },
            darken: function(t) { return this.values.hsl[2] -= this.values.hsl[2] * t, this.setValues("hsl", this.values.hsl), this },
            saturate: function(t) { return this.values.hsl[1] += this.values.hsl[1] * t, this.setValues("hsl", this.values.hsl), this },
            desaturate: function(t) { return this.values.hsl[1] -= this.values.hsl[1] * t, this.setValues("hsl", this.values.hsl), this },
            whiten: function(t) { return this.values.hwb[1] += this.values.hwb[1] * t, this.setValues("hwb", this.values.hwb), this },
            blacken: function(t) { return this.values.hwb[2] += this.values.hwb[2] * t, this.setValues("hwb", this.values.hwb), this },
            greyscale: function() {
                var t = this.values.rgb,
                    e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                return this.setValues("rgb", [e, e, e]), this
            },
            clearer: function(t) { return this.setValues("alpha", this.values.alpha - this.values.alpha * t), this },
            opaquer: function(t) { return this.setValues("alpha", this.values.alpha + this.values.alpha * t), this },
            rotate: function(t) { var e = this.values.hsl[0]; return e = (e + t) % 360, e = 0 > e ? 360 + e : e, this.values.hsl[0] = e, this.setValues("hsl", this.values.hsl), this },
            mix: function(t, e) {
                e = 1 - (null == e ? .5 : e);
                for (var i = 2 * e - 1, s = this.alpha() - t.alpha(), a = ((i * s == -1 ? i : (i + s) / (1 + i * s)) + 1) / 2, o = 1 - a, n = this.rgbArray(), r = t.rgbArray(), h = 0; h < n.length; h++) n[h] = n[h] * a + r[h] * o;
                this.setValues("rgb", n);
                var l = this.alpha() * e + t.alpha() * (1 - e);
                return this.setValues("alpha", l), this
            },
            toJSON: function() { return this.rgb() },
            clone: function() { return new o(this.rgb()) }
        }, o.prototype.getValues = function(t) { for (var e = {}, i = 0; i < t.length; i++) e[t.charAt(i)] = this.values[t][i]; return 1 != this.values.alpha && (e.a = this.values.alpha), e }, o.prototype.setValues = function(t, e) {
            var i = { rgb: ["red", "green", "blue"], hsl: ["hue", "saturation", "lightness"], hsv: ["hue", "saturation", "value"], hwb: ["hue", "whiteness", "blackness"], cmyk: ["cyan", "magenta", "yellow", "black"] },
                a = { rgb: [255, 255, 255], hsl: [360, 100, 100], hsv: [360, 100, 100], hwb: [360, 100, 100], cmyk: [100, 100, 100, 100] },
                o = 1;
            if ("alpha" == t) o = e;
            else if (e.length) this.values[t] = e.slice(0, t.length), o = e[t.length];
            else if (void 0 !== e[t.charAt(0)]) {
                for (var n = 0; n < t.length; n++) this.values[t][n] = e[t.charAt(n)];
                o = e.a
            } else if (void 0 !== e[i[t][0]]) {
                for (var r = i[t], n = 0; n < t.length; n++) this.values[t][n] = e[r[n]];
                o = e.alpha
            }
            if (this.values.alpha = Math.max(0, Math.min(1, void 0 !== o ? o : this.values.alpha)), "alpha" != t) {
                for (var n = 0; n < t.length; n++) {
                    var h = Math.max(0, Math.min(a[t][n], this.values[t][n]));
                    this.values[t][n] = Math.round(h)
                }
                for (var l in i) {
                    l != t && (this.values[l] = s[t][l](this.values[t]));
                    for (var n = 0; n < l.length; n++) {
                        var h = Math.max(0, Math.min(a[l][n], this.values[l][n]));
                        this.values[l][n] = Math.round(h)
                    }
                }
                return !0
            }
        }, o.prototype.setSpace = function(t, e) { var i = e[0]; return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this) }, o.prototype.setChannel = function(t, e, i) { return void 0 === i ? this.values[t][e] : (this.values[t][e] = i, this.setValues(t, this.values[t]), this) }, window.Color = e.exports = o
    }, { "chartjs-color-string": 1, "color-convert": 4 }],
    3: [function(t, e, i) {
        function s(t) {
            var e, i, s, a = t[0] / 255,
                o = t[1] / 255,
                n = t[2] / 255,
                r = Math.min(a, o, n),
                h = Math.max(a, o, n),
                l = h - r;
            return h == r ? e = 0 : a == h ? e = (o - n) / l : o == h ? e = 2 + (n - a) / l : n == h && (e = 4 + (a - o) / l), e = Math.min(60 * e, 360), 0 > e && (e += 360), s = (r + h) / 2, i = h == r ? 0 : .5 >= s ? l / (h + r) : l / (2 - h - r), [e, 100 * i, 100 * s]
        }

        function a(t) {
            var e, i, s, a = t[0],
                o = t[1],
                n = t[2],
                r = Math.min(a, o, n),
                h = Math.max(a, o, n),
                l = h - r;
            return i = 0 == h ? 0 : l / h * 1e3 / 10, h == r ? e = 0 : a == h ? e = (o - n) / l : o == h ? e = 2 + (n - a) / l : n == h && (e = 4 + (a - o) / l), e = Math.min(60 * e, 360), 0 > e && (e += 360), s = h / 255 * 1e3 / 10, [e, i, s]
        }

        function o(t) {
            var e = t[0],
                i = t[1],
                a = t[2],
                o = s(t)[0],
                n = 1 / 255 * Math.min(e, Math.min(i, a)),
                a = 1 - 1 / 255 * Math.max(e, Math.max(i, a));
            return [o, 100 * n, 100 * a]
        }

        function n(t) {
            var e, i, s, a, o = t[0] / 255,
                n = t[1] / 255,
                r = t[2] / 255;
            return a = Math.min(1 - o, 1 - n, 1 - r), e = (1 - o - a) / (1 - a) || 0, i = (1 - n - a) / (1 - a) || 0, s = (1 - r - a) / (1 - a) || 0, [100 * e, 100 * i, 100 * s, 100 * a]
        }

        function h(t) { return X[JSON.stringify(t)] }

        function l(t) {
            var e = t[0] / 255,
                i = t[1] / 255,
                s = t[2] / 255;
            e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92, s = s > .04045 ? Math.pow((s + .055) / 1.055, 2.4) : s / 12.92;
            var a = .4124 * e + .3576 * i + .1805 * s,
                o = .2126 * e + .7152 * i + .0722 * s,
                n = .0193 * e + .1192 * i + .9505 * s;
            return [100 * a, 100 * o, 100 * n]
        }

        function c(t) {
            var e, i, s, a = l(t),
                o = a[0],
                n = a[1],
                r = a[2];
            return o /= 95.047, n /= 100, r /= 108.883, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, e = 116 * n - 16, i = 500 * (o - n), s = 200 * (n - r), [e, i, s]
        }

        function d(t) { return B(c(t)) }

        function u(t) {
            var e, i, s, a, o, n = t[0] / 360,
                r = t[1] / 100,
                h = t[2] / 100;
            if (0 == r) return o = 255 * h, [o, o, o];
            i = .5 > h ? h * (1 + r) : h + r - h * r, e = 2 * h - i, a = [0, 0, 0];
            for (var l = 0; 3 > l; l++) s = n + 1 / 3 * -(l - 1), 0 > s && s++, s > 1 && s--, o = 1 > 6 * s ? e + 6 * (i - e) * s : 1 > 2 * s ? i : 2 > 3 * s ? e + (i - e) * (2 / 3 - s) * 6 : e, a[l] = 255 * o;
            return a
        }

        function f(t) {
            var e, i, s = t[0],
                a = t[1] / 100,
                o = t[2] / 100;
            return 0 === o ? [0, 0, 0] : (o *= 2, a *= 1 >= o ? o : 2 - o, i = (o + a) / 2, e = 2 * a / (o + a), [s, 100 * e, 100 * i])
        }

        function m(t) { return o(u(t)) }

        function p(t) { return n(u(t)) }

        function v(t) { return h(u(t)) }

        function x(t) {
            var e = t[0] / 60,
                i = t[1] / 100,
                s = t[2] / 100,
                a = Math.floor(e) % 6,
                o = e - Math.floor(e),
                n = 255 * s * (1 - i),
                r = 255 * s * (1 - i * o),
                h = 255 * s * (1 - i * (1 - o)),
                s = 255 * s;
            switch (a) {
                case 0:
                    return [s, h, n];
                case 1:
                    return [r, s, n];
                case 2:
                    return [n, s, h];
                case 3:
                    return [n, r, s];
                case 4:
                    return [h, n, s];
                case 5:
                    return [s, n, r]
            }
        }

        function y(t) {
            var e, i, s = t[0],
                a = t[1] / 100,
                o = t[2] / 100;
            return i = (2 - a) * o, e = a * o, e /= 1 >= i ? i : 2 - i, e = e || 0, i /= 2, [s, 100 * e, 100 * i]
        }

        function k(t) { return o(x(t)) }

        function _(t) { return n(x(t)) }

        function S(t) { return h(x(t)) }

        function w(t) {
            var e, i, s, a, o = t[0] / 360,
                n = t[1] / 100,
                h = t[2] / 100,
                l = n + h;
            switch (l > 1 && (n /= l, h /= l), e = Math.floor(6 * o), i = 1 - h, s = 6 * o - e, 0 != (1 & e) && (s = 1 - s), a = n + s * (i - n), e) {
                default:
                    case 6:
                    case 0:
                    r = i,
                g = a,
                b = n;
                break;
                case 1:
                        r = a,
                    g = i,
                    b = n;
                    break;
                case 2:
                        r = n,
                    g = i,
                    b = a;
                    break;
                case 3:
                        r = n,
                    g = a,
                    b = i;
                    break;
                case 4:
                        r = a,
                    g = n,
                    b = i;
                    break;
                case 5:
                        r = i,
                    g = n,
                    b = a
            }
            return [255 * r, 255 * g, 255 * b]
        }

        function D(t) { return s(w(t)) }

        function M(t) { return a(w(t)) }

        function C(t) { return n(w(t)) }

        function A(t) { return h(w(t)) }

        function I(t) {
            var e, i, s, a = t[0] / 100,
                o = t[1] / 100,
                n = t[2] / 100,
                r = t[3] / 100;
            return e = 1 - Math.min(1, a * (1 - r) + r), i = 1 - Math.min(1, o * (1 - r) + r), s = 1 - Math.min(1, n * (1 - r) + r), [255 * e, 255 * i, 255 * s]
        }

        function P(t) { return s(I(t)) }

        function T(t) { return a(I(t)) }

        function F(t) { return o(I(t)) }

        function O(t) { return h(I(t)) }

        function V(t) {
            var e, i, s, a = t[0] / 100,
                o = t[1] / 100,
                n = t[2] / 100;
            return e = 3.2406 * a + -1.5372 * o + n * -.4986, i = a * -.9689 + 1.8758 * o + .0415 * n, s = .0557 * a + o * -.204 + 1.057 * n, e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e = 12.92 * e, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i = 12.92 * i, s = s > .0031308 ? 1.055 * Math.pow(s, 1 / 2.4) - .055 : s = 12.92 * s, e = Math.min(Math.max(0, e), 1), i = Math.min(Math.max(0, i), 1), s = Math.min(Math.max(0, s), 1), [255 * e, 255 * i, 255 * s]
        }

        function R(t) {
            var e, i, s, a = t[0],
                o = t[1],
                n = t[2];
            return a /= 95.047, o /= 100, n /= 108.883, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, e = 116 * o - 16, i = 500 * (a - o), s = 200 * (o - n), [e, i, s]
        }

        function W(t) { return B(R(t)) }

        function L(t) {
            var e, i, s, a, o = t[0],
                n = t[1],
                r = t[2];
            return 8 >= o ? (i = 100 * o / 903.3, a = 7.787 * (i / 100) + 16 / 116) : (i = 100 * Math.pow((o + 16) / 116, 3), a = Math.pow(i / 100, 1 / 3)), e = .008856 >= e / 95.047 ? e = 95.047 * (n / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(n / 500 + a, 3), s = .008859 >= s / 108.883 ? s = 108.883 * (a - r / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - r / 200, 3), [e, i, s]
        }

        function B(t) {
            var e, i, s, a = t[0],
                o = t[1],
                n = t[2];
            return e = Math.atan2(n, o), i = 360 * e / 2 / Math.PI, 0 > i && (i += 360), s = Math.sqrt(o * o + n * n), [a, s, i]
        }

        function z(t) { return V(L(t)) }

        function Y(t) {
            var e, i, s, a = t[0],
                o = t[1],
                n = t[2];
            return s = n / 360 * 2 * Math.PI, e = o * Math.cos(s), i = o * Math.sin(s), [a, e, i]
        }

        function H(t) { return L(Y(t)) }

        function N(t) { return z(Y(t)) }

        function E(t) { return J[t] }

        function U(t) { return s(E(t)) }

        function j(t) { return a(E(t)) }

        function G(t) { return o(E(t)) }

        function q(t) { return n(E(t)) }

        function Z(t) { return c(E(t)) }

        function Q(t) { return l(E(t)) }
        e.exports = { rgb2hsl: s, rgb2hsv: a, rgb2hwb: o, rgb2cmyk: n, rgb2keyword: h, rgb2xyz: l, rgb2lab: c, rgb2lch: d, hsl2rgb: u, hsl2hsv: f, hsl2hwb: m, hsl2cmyk: p, hsl2keyword: v, hsv2rgb: x, hsv2hsl: y, hsv2hwb: k, hsv2cmyk: _, hsv2keyword: S, hwb2rgb: w, hwb2hsl: D, hwb2hsv: M, hwb2cmyk: C, hwb2keyword: A, cmyk2rgb: I, cmyk2hsl: P, cmyk2hsv: T, cmyk2hwb: F, cmyk2keyword: O, keyword2rgb: E, keyword2hsl: U, keyword2hsv: j, keyword2hwb: G, keyword2cmyk: q, keyword2lab: Z, keyword2xyz: Q, xyz2rgb: V, xyz2lab: R, xyz2lch: W, lab2xyz: L, lab2rgb: z, lab2lch: B, lch2lab: Y, lch2xyz: H, lch2rgb: N };
        var J = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
            X = {};
        for (var $ in J) X[JSON.stringify(J[$])] = $
    }, {}],
    4: [function(t, e, i) {
        var s = t("./conversions"),
            a = function() { return new l };
        for (var o in s) {
            a[o + "Raw"] = function(t) { return function(e) { return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), s[t](e) } }(o);
            var n = /(\w+)2(\w+)/.exec(o),
                r = n[1],
                h = n[2];
            a[r] = a[r] || {}, a[r][h] = a[o] = function(t) { return function(e) { "number" == typeof e && (e = Array.prototype.slice.call(arguments)); var i = s[t](e); if ("string" == typeof i || void 0 === i) return i; for (var a = 0; a < i.length; a++) i[a] = Math.round(i[a]); return i } }(o)
        }
        var l = function() { this.convs = {} };
        l.prototype.routeSpace = function(t, e) { var i = e[0]; return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i)) }, l.prototype.setValues = function(t, e) { return this.space = t, this.convs = {}, this.convs[t] = e, this }, l.prototype.getValues = function(t) {
            var e = this.convs[t];
            if (!e) {
                var i = this.space,
                    s = this.convs[i];
                e = a[i][t](s), this.convs[t] = e
            }
            return e
        }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) { l.prototype[t] = function(e) { return this.routeSpace(t, arguments) } }), e.exports = a
    }, { "./conversions": 3 }],
    5: [function(t, e, i) { e.exports = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] } }, {}],
    6: [function(t, e, i) {
        ! function(t, s) { "object" == typeof i && "undefined" != typeof e ? e.exports = s() : "function" == typeof define && define.amd ? define(s) : t.moment = s() }(this, function() {
            "use strict";

            function i() { return rs.apply(null, arguments) }

            function s(t) { rs = t }

            function a(t) { return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t) }

            function o(t) { return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t) }

            function n(t, e) { var i, s = []; for (i = 0; i < t.length; ++i) s.push(e(t[i], i)); return s }

            function r(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }

            function h(t, e) { for (var i in e) r(e, i) && (t[i] = e[i]); return r(e, "toString") && (t.toString = e.toString), r(e, "valueOf") && (t.valueOf = e.valueOf), t }

            function l(t, e, i, s) { return Lt(t, e, i, s, !0).utc() }

            function c() { return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null } }

            function d(t) { return null == t._pf && (t._pf = c()), t._pf }

            function u(t) {
                if (null == t._isValid) {
                    var e = d(t),
                        i = hs.call(e.parsedDateParts, function(t) { return null != t });
                    t._isValid = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && i), t._strict && (t._isValid = t._isValid && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour)
                }
                return t._isValid
            }

            function f(t) { var e = l(NaN); return null != t ? h(d(e), t) : d(e).userInvalidated = !0, e }

            function g(t) { return void 0 === t }

            function m(t, e) {
                var i, s, a;
                if (g(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), g(e._i) || (t._i = e._i), g(e._f) || (t._f = e._f), g(e._l) || (t._l = e._l), g(e._strict) || (t._strict = e._strict), g(e._tzm) || (t._tzm = e._tzm), g(e._isUTC) || (t._isUTC = e._isUTC), g(e._offset) || (t._offset = e._offset), g(e._pf) || (t._pf = d(e)), g(e._locale) || (t._locale = e._locale), ls.length > 0)
                    for (i in ls) s = ls[i], a = e[s], g(a) || (t[s] = a);
                return t
            }

            function p(t) { m(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), cs === !1 && (cs = !0, i.updateOffset(this), cs = !1) }

            function b(t) { return t instanceof p || null != t && null != t._isAMomentObject }

            function v(t) { return 0 > t ? Math.ceil(t) : Math.floor(t) }

            function x(t) {
                var e = +t,
                    i = 0;
                return 0 !== e && isFinite(e) && (i = v(e)), i
            }

            function y(t, e, i) {
                var s, a = Math.min(t.length, e.length),
                    o = Math.abs(t.length - e.length),
                    n = 0;
                for (s = 0; a > s; s++)(i && t[s] !== e[s] || !i && x(t[s]) !== x(e[s])) && n++;
                return n + o
            }

            function k(t) { i.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t) }

            function _(t, e) { var s = !0; return h(function() { return null != i.deprecationHandler && i.deprecationHandler(null, t), s && (k(t + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), s = !1), e.apply(this, arguments) }, e) }

            function S(t, e) { null != i.deprecationHandler && i.deprecationHandler(t, e), ds[t] || (k(e), ds[t] = !0) }

            function w(t) { return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t) }

            function D(t) { return "[object Object]" === Object.prototype.toString.call(t) }

            function M(t) {
                var e, i;
                for (i in t) e = t[i], w(e) ? this[i] = e : this["_" + i] = e;
                this._config = t, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            }

            function C(t, e) { var i, s = h({}, t); for (i in e) r(e, i) && (D(t[i]) && D(e[i]) ? (s[i] = {}, h(s[i], t[i]), h(s[i], e[i])) : null != e[i] ? s[i] = e[i] : delete s[i]); return s }

            function A(t) { null != t && this.set(t) }

            function I(t) { return t ? t.toLowerCase().replace("_", "-") : t }

            function P(t) {
                for (var e, i, s, a, o = 0; o < t.length;) {
                    for (a = I(t[o]).split("-"), e = a.length, i = I(t[o + 1]), i = i ? i.split("-") : null; e > 0;) {
                        if (s = T(a.slice(0, e).join("-"))) return s;
                        if (i && i.length >= e && y(a, i, !0) >= e - 1) break;
                        e--
                    }
                    o++
                }
                return null
            }

            function T(i) {
                var s = null;
                if (!ms[i] && "undefined" != typeof e && e && e.exports) try { s = fs._abbr, t("./locale/" + i), F(s) } catch (a) {}
                return ms[i]
            }

            function F(t, e) { var i; return t && (i = g(e) ? R(t) : O(t, e), i && (fs = i)), fs._abbr }

            function O(t, e) { return null !== e ? (e.abbr = t, null != ms[t] ? (S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"), e = C(ms[t]._config, e)) : null != e.parentLocale && (null != ms[e.parentLocale] ? e = C(ms[e.parentLocale]._config, e) : S("parentLocaleUndefined", "specified parentLocale is not defined yet")), ms[t] = new A(e), F(t), ms[t]) : (delete ms[t], null) }

            function V(t, e) {
                if (null != e) {
                    var i;
                    null != ms[t] && (e = C(ms[t]._config, e)), i = new A(e), i.parentLocale = ms[t], ms[t] = i, F(t)
                } else null != ms[t] && (null != ms[t].parentLocale ? ms[t] = ms[t].parentLocale : null != ms[t] && delete ms[t]);
                return ms[t]
            }

            function R(t) {
                var e;
                if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return fs;
                if (!a(t)) {
                    if (e = T(t)) return e;
                    t = [t]
                }
                return P(t)
            }

            function W() { return us(ms) }

            function L(t, e) {
                var i = t.toLowerCase();
                ps[i] = ps[i + "s"] = ps[e] = t
            }

            function B(t) { return "string" == typeof t ? ps[t] || ps[t.toLowerCase()] : void 0 }

            function z(t) { var e, i, s = {}; for (i in t) r(t, i) && (e = B(i), e && (s[e] = t[i])); return s }

            function Y(t, e) { return function(s) { return null != s ? (N(this, t, s), i.updateOffset(this, e), this) : H(this, t) } }

            function H(t, e) { return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN }

            function N(t, e, i) { t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](i) }

            function E(t, e) {
                var i;
                if ("object" == typeof t)
                    for (i in t) this.set(i, t[i]);
                else if (t = B(t), w(this[t])) return this[t](e);
                return this
            }

            function U(t, e, i) {
                var s = "" + Math.abs(t),
                    a = e - s.length,
                    o = t >= 0;
                return (o ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + s
            }

            function j(t, e, i, s) { var a = s; "string" == typeof s && (a = function() { return this[s]() }), t && (ys[t] = a), e && (ys[e[0]] = function() { return U(a.apply(this, arguments), e[1], e[2]) }), i && (ys[i] = function() { return this.localeData().ordinal(a.apply(this, arguments), t) }) }

            function G(t) { return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "") }

            function q(t) { var e, i, s = t.match(bs); for (e = 0, i = s.length; i > e; e++) ys[s[e]] ? s[e] = ys[s[e]] : s[e] = G(s[e]); return function(e) { var a, o = ""; for (a = 0; i > a; a++) o += s[a] instanceof Function ? s[a].call(e, t) : s[a]; return o } }

            function Z(t, e) { return t.isValid() ? (e = Q(e, t.localeData()), xs[e] = xs[e] || q(e), xs[e](t)) : t.localeData().invalidDate() }

            function Q(t, e) {
                function i(t) { return e.longDateFormat(t) || t }
                var s = 5;
                for (vs.lastIndex = 0; s >= 0 && vs.test(t);) t = t.replace(vs, i), vs.lastIndex = 0, s -= 1;
                return t
            }

            function J(t, e, i) { Bs[t] = w(e) ? e : function(t, s) { return t && i ? i : e } }

            function X(t, e) { return r(Bs, t) ? Bs[t](e._strict, e._locale) : new RegExp($(t)) }

            function $(t) { return K(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, i, s, a) { return e || i || s || a })) }

            function K(t) { return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") }

            function tt(t, e) { var i, s = e; for ("string" == typeof t && (t = [t]), "number" == typeof e && (s = function(t, i) { i[e] = x(t) }), i = 0; i < t.length; i++) zs[t[i]] = s }

            function et(t, e) { tt(t, function(t, i, s, a) { s._w = s._w || {}, e(t, s._w, s, a) }) }

            function it(t, e, i) { null != e && r(zs, t) && zs[t](e, i._a, i, t) }

            function st(t, e) { return new Date(Date.UTC(t, e + 1, 0)).getUTCDate() }

            function at(t, e) { return a(this._months) ? this._months[t.month()] : this._months[Qs.test(e) ? "format" : "standalone"][t.month()] }

            function ot(t, e) { return a(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Qs.test(e) ? "format" : "standalone"][t.month()] }

            function nt(t, e, i) {
                var s, a, o, n = t.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; 12 > s; ++s) o = l([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(o, "").toLocaleLowerCase();
                return i ? "MMM" === e ? (a = gs.call(this._shortMonthsParse, n), -1 !== a ? a : null) : (a = gs.call(this._longMonthsParse, n), -1 !== a ? a : null) : "MMM" === e ? (a = gs.call(this._shortMonthsParse, n), -1 !== a ? a : (a = gs.call(this._longMonthsParse, n), -1 !== a ? a : null)) : (a = gs.call(this._longMonthsParse, n), -1 !== a ? a : (a = gs.call(this._shortMonthsParse, n), -1 !== a ? a : null))
            }

            function rt(t, e, i) { var s, a, o; if (this._monthsParseExact) return nt.call(this, t, e, i); for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; 12 > s; s++) { if (a = l([2e3, s]), i && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), i || this._monthsParse[s] || (o = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[s] = new RegExp(o.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[s].test(t)) return s; if (i && "MMM" === e && this._shortMonthsParse[s].test(t)) return s; if (!i && this._monthsParse[s].test(t)) return s } }

            function ht(t, e) {
                var i;
                if (!t.isValid()) return t;
                if ("string" == typeof e)
                    if (/^\d+$/.test(e)) e = x(e);
                    else if (e = t.localeData().monthsParse(e), "number" != typeof e) return t;
                return i = Math.min(t.date(), st(t.year(), e)),
                    t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t
            }

            function lt(t) { return null != t ? (ht(this, t), i.updateOffset(this, !0), this) : H(this, "Month") }

            function ct() { return st(this.year(), this.month()) }

            function dt(t) { return this._monthsParseExact ? (r(this, "_monthsRegex") || ft.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex }

            function ut(t) { return this._monthsParseExact ? (r(this, "_monthsRegex") || ft.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex }

            function ft() {
                function t(t, e) { return e.length - t.length }
                var e, i, s = [],
                    a = [],
                    o = [];
                for (e = 0; 12 > e; e++) i = l([2e3, e]), s.push(this.monthsShort(i, "")), a.push(this.months(i, "")), o.push(this.months(i, "")), o.push(this.monthsShort(i, ""));
                for (s.sort(t), a.sort(t), o.sort(t), e = 0; 12 > e; e++) s[e] = K(s[e]), a[e] = K(a[e]), o[e] = K(o[e]);
                this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
            }

            function gt(t) { var e, i = t._a; return i && -2 === d(t).overflow && (e = i[Hs] < 0 || i[Hs] > 11 ? Hs : i[Ns] < 1 || i[Ns] > st(i[Ys], i[Hs]) ? Ns : i[Es] < 0 || i[Es] > 24 || 24 === i[Es] && (0 !== i[Us] || 0 !== i[js] || 0 !== i[Gs]) ? Es : i[Us] < 0 || i[Us] > 59 ? Us : i[js] < 0 || i[js] > 59 ? js : i[Gs] < 0 || i[Gs] > 999 ? Gs : -1, d(t)._overflowDayOfYear && (Ys > e || e > Ns) && (e = Ns), d(t)._overflowWeeks && -1 === e && (e = qs), d(t)._overflowWeekday && -1 === e && (e = Zs), d(t).overflow = e), t }

            function mt(t) {
                var e, i, s, a, o, n, r = t._i,
                    h = ta.exec(r) || ea.exec(r);
                if (h) {
                    for (d(t).iso = !0, e = 0, i = sa.length; i > e; e++)
                        if (sa[e][1].exec(h[1])) { a = sa[e][0], s = sa[e][2] !== !1; break }
                    if (null == a) return void(t._isValid = !1);
                    if (h[3]) {
                        for (e = 0, i = aa.length; i > e; e++)
                            if (aa[e][1].exec(h[3])) { o = (h[2] || " ") + aa[e][0]; break }
                        if (null == o) return void(t._isValid = !1)
                    }
                    if (!s && null != o) return void(t._isValid = !1);
                    if (h[4]) {
                        if (!ia.exec(h[4])) return void(t._isValid = !1);
                        n = "Z"
                    }
                    t._f = a + (o || "") + (n || ""), Pt(t)
                } else t._isValid = !1
            }

            function pt(t) { var e = oa.exec(t._i); return null !== e ? void(t._d = new Date(+e[1])) : (mt(t), void(t._isValid === !1 && (delete t._isValid, i.createFromInputFallback(t)))) }

            function bt(t, e, i, s, a, o, n) { var r = new Date(t, e, i, s, a, o, n); return 100 > t && t >= 0 && isFinite(r.getFullYear()) && r.setFullYear(t), r }

            function vt(t) { var e = new Date(Date.UTC.apply(null, arguments)); return 100 > t && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e }

            function xt(t) { return yt(t) ? 366 : 365 }

            function yt(t) { return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0 }

            function kt() { return yt(this.year()) }

            function _t(t, e, i) {
                var s = 7 + e - i,
                    a = (7 + vt(t, 0, s).getUTCDay() - e) % 7;
                return -a + s - 1
            }

            function St(t, e, i, s, a) {
                var o, n, r = (7 + i - s) % 7,
                    h = _t(t, s, a),
                    l = 1 + 7 * (e - 1) + r + h;
                return 0 >= l ? (o = t - 1, n = xt(o) + l) : l > xt(t) ? (o = t + 1, n = l - xt(t)) : (o = t, n = l), { year: o, dayOfYear: n }
            }

            function wt(t, e, i) {
                var s, a, o = _t(t.year(), e, i),
                    n = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
                return 1 > n ? (a = t.year() - 1, s = n + Dt(a, e, i)) : n > Dt(t.year(), e, i) ? (s = n - Dt(t.year(), e, i), a = t.year() + 1) : (a = t.year(), s = n), { week: s, year: a }
            }

            function Dt(t, e, i) {
                var s = _t(t, e, i),
                    a = _t(t + 1, e, i);
                return (xt(t) - s + a) / 7
            }

            function Mt(t, e, i) { return null != t ? t : null != e ? e : i }

            function Ct(t) { var e = new Date(i.now()); return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()] }

            function At(t) {
                var e, i, s, a, o = [];
                if (!t._d) {
                    for (s = Ct(t), t._w && null == t._a[Ns] && null == t._a[Hs] && It(t), t._dayOfYear && (a = Mt(t._a[Ys], s[Ys]), t._dayOfYear > xt(a) && (d(t)._overflowDayOfYear = !0), i = vt(a, 0, t._dayOfYear), t._a[Hs] = i.getUTCMonth(), t._a[Ns] = i.getUTCDate()), e = 0; 3 > e && null == t._a[e]; ++e) t._a[e] = o[e] = s[e];
                    for (; 7 > e; e++) t._a[e] = o[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                    24 === t._a[Es] && 0 === t._a[Us] && 0 === t._a[js] && 0 === t._a[Gs] && (t._nextDay = !0, t._a[Es] = 0), t._d = (t._useUTC ? vt : bt).apply(null, o), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[Es] = 24)
                }
            }

            function It(t) {
                var e, i, s, a, o, n, r, h;
                e = t._w, null != e.GG || null != e.W || null != e.E ? (o = 1, n = 4, i = Mt(e.GG, t._a[Ys], wt(Bt(), 1, 4).year), s = Mt(e.W, 1), a = Mt(e.E, 1), (1 > a || a > 7) && (h = !0)) : (o = t._locale._week.dow, n = t._locale._week.doy, i = Mt(e.gg, t._a[Ys], wt(Bt(), o, n).year), s = Mt(e.w, 1), null != e.d ? (a = e.d, (0 > a || a > 6) && (h = !0)) : null != e.e ? (a = e.e + o, (e.e < 0 || e.e > 6) && (h = !0)) : a = o), 1 > s || s > Dt(i, o, n) ? d(t)._overflowWeeks = !0 : null != h ? d(t)._overflowWeekday = !0 : (r = St(i, s, a, o, n), t._a[Ys] = r.year, t._dayOfYear = r.dayOfYear)
            }

            function Pt(t) {
                if (t._f === i.ISO_8601) return void mt(t);
                t._a = [], d(t).empty = !0;
                var e, s, a, o, n, r = "" + t._i,
                    h = r.length,
                    l = 0;
                for (a = Q(t._f, t._locale).match(bs) || [], e = 0; e < a.length; e++) o = a[e], s = (r.match(X(o, t)) || [])[0], s && (n = r.substr(0, r.indexOf(s)), n.length > 0 && d(t).unusedInput.push(n), r = r.slice(r.indexOf(s) + s.length), l += s.length), ys[o] ? (s ? d(t).empty = !1 : d(t).unusedTokens.push(o), it(o, s, t)) : t._strict && !s && d(t).unusedTokens.push(o);
                d(t).charsLeftOver = h - l, r.length > 0 && d(t).unusedInput.push(r), d(t).bigHour === !0 && t._a[Es] <= 12 && t._a[Es] > 0 && (d(t).bigHour = void 0), d(t).parsedDateParts = t._a.slice(0), d(t).meridiem = t._meridiem, t._a[Es] = Tt(t._locale, t._a[Es], t._meridiem), At(t), gt(t)
            }

            function Tt(t, e, i) { var s; return null == i ? e : null != t.meridiemHour ? t.meridiemHour(e, i) : null != t.isPM ? (s = t.isPM(i), s && 12 > e && (e += 12), s || 12 !== e || (e = 0), e) : e }

            function Ft(t) {
                var e, i, s, a, o;
                if (0 === t._f.length) return d(t).invalidFormat = !0, void(t._d = new Date(NaN));
                for (a = 0; a < t._f.length; a++) o = 0, e = m({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[a], Pt(e), u(e) && (o += d(e).charsLeftOver, o += 10 * d(e).unusedTokens.length, d(e).score = o, (null == s || s > o) && (s = o, i = e));
                h(t, i || e)
            }

            function Ot(t) {
                if (!t._d) {
                    var e = z(t._i);
                    t._a = n([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) { return t && parseInt(t, 10) }), At(t)
                }
            }

            function Vt(t) { var e = new p(gt(Rt(t))); return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e }

            function Rt(t) {
                var e = t._i,
                    i = t._f;
                return t._locale = t._locale || R(t._l), null === e || void 0 === i && "" === e ? f({ nullInput: !0 }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), b(e) ? new p(gt(e)) : (a(i) ? Ft(t) : i ? Pt(t) : o(e) ? t._d = e : Wt(t), u(t) || (t._d = null), t))
            }

            function Wt(t) {
                var e = t._i;
                void 0 === e ? t._d = new Date(i.now()) : o(e) ? t._d = new Date(e.valueOf()) : "string" == typeof e ? pt(t) : a(e) ? (t._a = n(e.slice(0), function(t) { return parseInt(t, 10) }), At(t)) : "object" == typeof e ? Ot(t) : "number" == typeof e ? t._d = new Date(e) : i.createFromInputFallback(t)
            }

            function Lt(t, e, i, s, a) { var o = {}; return "boolean" == typeof i && (s = i, i = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = a, o._l = i, o._i = t, o._f = e, o._strict = s, Vt(o) }

            function Bt(t, e, i, s) { return Lt(t, e, i, s, !1) }

            function zt(t, e) { var i, s; if (1 === e.length && a(e[0]) && (e = e[0]), !e.length) return Bt(); for (i = e[0], s = 1; s < e.length; ++s)(!e[s].isValid() || e[s][t](i)) && (i = e[s]); return i }

            function Yt() { var t = [].slice.call(arguments, 0); return zt("isBefore", t) }

            function Ht() { var t = [].slice.call(arguments, 0); return zt("isAfter", t) }

            function Nt(t) {
                var e = z(t),
                    i = e.year || 0,
                    s = e.quarter || 0,
                    a = e.month || 0,
                    o = e.week || 0,
                    n = e.day || 0,
                    r = e.hour || 0,
                    h = e.minute || 0,
                    l = e.second || 0,
                    c = e.millisecond || 0;
                this._milliseconds = +c + 1e3 * l + 6e4 * h + 1e3 * r * 60 * 60, this._days = +n + 7 * o, this._months = +a + 3 * s + 12 * i, this._data = {}, this._locale = R(), this._bubble()
            }

            function Et(t) { return t instanceof Nt }

            function Ut(t, e) {
                j(t, 0, 0, function() {
                    var t = this.utcOffset(),
                        i = "+";
                    return 0 > t && (t = -t, i = "-"), i + U(~~(t / 60), 2) + e + U(~~t % 60, 2)
                })
            }

            function jt(t, e) {
                var i = (e || "").match(t) || [],
                    s = i[i.length - 1] || [],
                    a = (s + "").match(ca) || ["-", 0, 0],
                    o = +(60 * a[1]) + x(a[2]);
                return "+" === a[0] ? o : -o
            }

            function Gt(t, e) { var s, a; return e._isUTC ? (s = e.clone(), a = (b(t) || o(t) ? t.valueOf() : Bt(t).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + a), i.updateOffset(s, !1), s) : Bt(t).local() }

            function qt(t) { return 15 * -Math.round(t._d.getTimezoneOffset() / 15) }

            function Zt(t, e) { var s, a = this._offset || 0; return this.isValid() ? null != t ? ("string" == typeof t ? t = jt(Rs, t) : Math.abs(t) < 16 && (t = 60 * t), !this._isUTC && e && (s = qt(this)), this._offset = t, this._isUTC = !0, null != s && this.add(s, "m"), a !== t && (!e || this._changeInProgress ? de(this, oe(t - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, i.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? a : qt(this) : null != t ? this : NaN }

            function Qt(t, e) { return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset() }

            function Jt(t) { return this.utcOffset(0, t) }

            function Xt(t) { return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(qt(this), "m")), this }

            function $t() { return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(jt(Vs, this._i)), this }

            function Kt(t) { return this.isValid() ? (t = t ? Bt(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0) : !1 }

            function te() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }

            function ee() {
                if (!g(this._isDSTShifted)) return this._isDSTShifted;
                var t = {};
                if (m(t, this), t = Rt(t), t._a) {
                    var e = t._isUTC ? l(t._a) : Bt(t._a);
                    this._isDSTShifted = this.isValid() && y(t._a, e.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            }

            function ie() { return this.isValid() ? !this._isUTC : !1 }

            function se() { return this.isValid() ? this._isUTC : !1 }

            function ae() { return this.isValid() ? this._isUTC && 0 === this._offset : !1 }

            function oe(t, e) {
                var i, s, a, o = t,
                    n = null;
                return Et(t) ? o = { ms: t._milliseconds, d: t._days, M: t._months } : "number" == typeof t ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (n = da.exec(t)) ? (i = "-" === n[1] ? -1 : 1, o = { y: 0, d: x(n[Ns]) * i, h: x(n[Es]) * i, m: x(n[Us]) * i, s: x(n[js]) * i, ms: x(n[Gs]) * i }) : (n = ua.exec(t)) ? (i = "-" === n[1] ? -1 : 1, o = { y: ne(n[2], i), M: ne(n[3], i), w: ne(n[4], i), d: ne(n[5], i), h: ne(n[6], i), m: ne(n[7], i), s: ne(n[8], i) }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (a = he(Bt(o.from), Bt(o.to)), o = {}, o.ms = a.milliseconds, o.M = a.months), s = new Nt(o), Et(t) && r(t, "_locale") && (s._locale = t._locale), s
            }

            function ne(t, e) { var i = t && parseFloat(t.replace(",", ".")); return (isNaN(i) ? 0 : i) * e }

            function re(t, e) { var i = { milliseconds: 0, months: 0 }; return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i }

            function he(t, e) { var i; return t.isValid() && e.isValid() ? (e = Gt(e, t), t.isBefore(e) ? i = re(t, e) : (i = re(e, t), i.milliseconds = -i.milliseconds, i.months = -i.months), i) : { milliseconds: 0, months: 0 } }

            function le(t) { return 0 > t ? -1 * Math.round(-1 * t) : Math.round(t) }

            function ce(t, e) { return function(i, s) { var a, o; return null === s || isNaN(+s) || (S(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period)."), o = i, i = s, s = o), i = "string" == typeof i ? +i : i, a = oe(i, s), de(this, a, t), this } }

            function de(t, e, s, a) {
                var o = e._milliseconds,
                    n = le(e._days),
                    r = le(e._months);
                t.isValid() && (a = null == a ? !0 : a, o && t._d.setTime(t._d.valueOf() + o * s), n && N(t, "Date", H(t, "Date") + n * s), r && ht(t, H(t, "Month") + r * s), a && i.updateOffset(t, n || r))
            }

            function ue(t, e) {
                var i = t || Bt(),
                    s = Gt(i, this).startOf("day"),
                    a = this.diff(s, "days", !0),
                    o = -6 > a ? "sameElse" : -1 > a ? "lastWeek" : 0 > a ? "lastDay" : 1 > a ? "sameDay" : 2 > a ? "nextDay" : 7 > a ? "nextWeek" : "sameElse",
                    n = e && (w(e[o]) ? e[o]() : e[o]);
                return this.format(n || this.localeData().calendar(o, this, Bt(i)))
            }

            function fe() { return new p(this) }

            function ge(t, e) { var i = b(t) ? t : Bt(t); return this.isValid() && i.isValid() ? (e = B(g(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf()) : !1 }

            function me(t, e) { var i = b(t) ? t : Bt(t); return this.isValid() && i.isValid() ? (e = B(g(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf()) : !1 }

            function pe(t, e, i, s) { return s = s || "()", ("(" === s[0] ? this.isAfter(t, i) : !this.isBefore(t, i)) && (")" === s[1] ? this.isBefore(e, i) : !this.isAfter(e, i)) }

            function be(t, e) { var i, s = b(t) ? t : Bt(t); return this.isValid() && s.isValid() ? (e = B(e || "millisecond"), "millisecond" === e ? this.valueOf() === s.valueOf() : (i = s.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf())) : !1 }

            function ve(t, e) { return this.isSame(t, e) || this.isAfter(t, e) }

            function xe(t, e) { return this.isSame(t, e) || this.isBefore(t, e) }

            function ye(t, e, i) { var s, a, o, n; return this.isValid() ? (s = Gt(t, this), s.isValid() ? (a = 6e4 * (s.utcOffset() - this.utcOffset()), e = B(e), "year" === e || "month" === e || "quarter" === e ? (n = ke(this, s), "quarter" === e ? n /= 3 : "year" === e && (n /= 12)) : (o = this - s, n = "second" === e ? o / 1e3 : "minute" === e ? o / 6e4 : "hour" === e ? o / 36e5 : "day" === e ? (o - a) / 864e5 : "week" === e ? (o - a) / 6048e5 : o), i ? n : v(n)) : NaN) : NaN }

            function ke(t, e) {
                var i, s, a = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                    o = t.clone().add(a, "months");
                return 0 > e - o ? (i = t.clone().add(a - 1, "months"), s = (e - o) / (o - i)) : (i = t.clone().add(a + 1, "months"), s = (e - o) / (i - o)), -(a + s) || 0
            }

            function _e() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }

            function Se() { var t = this.clone().utc(); return 0 < t.year() && t.year() <= 9999 ? w(Date.prototype.toISOString) ? this.toDate().toISOString() : Z(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : Z(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") }

            function we(t) { t || (t = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat); var e = Z(this, t); return this.localeData().postformat(e) }

            function De(t, e) { return this.isValid() && (b(t) && t.isValid() || Bt(t).isValid()) ? oe({ to: this, from: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate() }

            function Me(t) { return this.from(Bt(), t) }

            function Ce(t, e) { return this.isValid() && (b(t) && t.isValid() || Bt(t).isValid()) ? oe({ from: this, to: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate() }

            function Ae(t) { return this.to(Bt(), t) }

            function Ie(t) { var e; return void 0 === t ? this._locale._abbr : (e = R(t), null != e && (this._locale = e), this) }

            function Pe() { return this._locale }

            function Te(t) {
                switch (t = B(t)) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                    case "date":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
            }

            function Fe(t) { return t = B(t), void 0 === t || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms")) }

            function Oe() { return this._d.valueOf() - 6e4 * (this._offset || 0) }

            function Ve() { return Math.floor(this.valueOf() / 1e3) }

            function Re() { return this._offset ? new Date(this.valueOf()) : this._d }

            function We() { var t = this; return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()] }

            function Le() { var t = this; return { years: t.year(), months: t.month(), date: t.date(), hours: t.hours(), minutes: t.minutes(), seconds: t.seconds(), milliseconds: t.milliseconds() } }

            function Be() { return this.isValid() ? this.toISOString() : null }

            function ze() { return u(this) }

            function Ye() { return h({}, d(this)) }

            function He() { return d(this).overflow }

            function Ne() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }

            function Ee(t, e) { j(0, [t, t.length], 0, e) }

            function Ue(t) { return Ze.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }

            function je(t) { return Ze.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4) }

            function Ge() { return Dt(this.year(), 1, 4) }

            function qe() { var t = this.localeData()._week; return Dt(this.year(), t.dow, t.doy) }

            function Ze(t, e, i, s, a) { var o; return null == t ? wt(this, s, a).year : (o = Dt(t, s, a), e > o && (e = o), Qe.call(this, t, e, i, s, a)) }

            function Qe(t, e, i, s, a) {
                var o = St(t, e, i, s, a),
                    n = vt(o.year, 0, o.dayOfYear);
                return this.year(n.getUTCFullYear()), this.month(n.getUTCMonth()), this.date(n.getUTCDate()), this
            }

            function Je(t) { return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3) }

            function Xe(t) { return wt(t, this._week.dow, this._week.doy).week }

            function $e() { return this._week.dow }

            function Ke() { return this._week.doy }

            function ti(t) { var e = this.localeData().week(this); return null == t ? e : this.add(7 * (t - e), "d") }

            function ei(t) { var e = wt(this, 1, 4).week; return null == t ? e : this.add(7 * (t - e), "d") }

            function ii(t, e) { return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10) }

            function si(t, e) { return a(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] }

            function ai(t) { return this._weekdaysShort[t.day()] }

            function oi(t) { return this._weekdaysMin[t.day()] }

            function ni(t, e, i) {
                var s, a, o, n = t.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; 7 > s; ++s) o = l([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(o, "").toLocaleLowerCase();
                return i ? "dddd" === e ? (a = gs.call(this._weekdaysParse, n), -1 !== a ? a : null) : "ddd" === e ? (a = gs.call(this._shortWeekdaysParse, n), -1 !== a ? a : null) : (a = gs.call(this._minWeekdaysParse, n), -1 !== a ? a : null) : "dddd" === e ? (a = gs.call(this._weekdaysParse, n), -1 !== a ? a : (a = gs.call(this._shortWeekdaysParse, n), -1 !== a ? a : (a = gs.call(this._minWeekdaysParse, n), -1 !== a ? a : null))) : "ddd" === e ? (a = gs.call(this._shortWeekdaysParse, n), -1 !== a ? a : (a = gs.call(this._weekdaysParse, n), -1 !== a ? a : (a = gs.call(this._minWeekdaysParse, n), -1 !== a ? a : null))) : (a = gs.call(this._minWeekdaysParse, n), -1 !== a ? a : (a = gs.call(this._weekdaysParse, n), -1 !== a ? a : (a = gs.call(this._shortWeekdaysParse, n), -1 !== a ? a : null)))
            }

            function ri(t, e, i) { var s, a, o; if (this._weekdaysParseExact) return ni.call(this, t, e, i); for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; 7 > s; s++) { if (a = l([2e3, 1]).day(s), i && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(a, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[s] || (o = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[s] = new RegExp(o.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[s].test(t)) return s; if (i && "ddd" === e && this._shortWeekdaysParse[s].test(t)) return s; if (i && "dd" === e && this._minWeekdaysParse[s].test(t)) return s; if (!i && this._weekdaysParse[s].test(t)) return s } }

            function hi(t) { if (!this.isValid()) return null != t ? this : NaN; var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != t ? (t = ii(t, this.localeData()), this.add(t - e, "d")) : e }

            function li(t) { if (!this.isValid()) return null != t ? this : NaN; var e = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == t ? e : this.add(t - e, "d") }

            function ci(t) { return this.isValid() ? null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7) : null != t ? this : NaN }

            function di(t) { return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || gi.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex }

            function ui(t) { return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || gi.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex }

            function fi(t) { return this._weekdaysParseExact ? (r(this, "_weekdaysRegex") || gi.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex }

            function gi() {
                function t(t, e) { return e.length - t.length }
                var e, i, s, a, o, n = [],
                    r = [],
                    h = [],
                    c = [];
                for (e = 0; 7 > e; e++) i = l([2e3, 1]).day(e), s = this.weekdaysMin(i, ""), a = this.weekdaysShort(i, ""), o = this.weekdays(i, ""), n.push(s), r.push(a), h.push(o), c.push(s), c.push(a), c.push(o);
                for (n.sort(t), r.sort(t), h.sort(t), c.sort(t), e = 0; 7 > e; e++) r[e] = K(r[e]), h[e] = K(h[e]), c[e] = K(c[e]);
                this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
            }

            function mi(t) { var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == t ? e : this.add(t - e, "d") }

            function pi() { return this.hours() % 12 || 12 }

            function bi() { return this.hours() || 24 }

            function vi(t, e) { j(t, 0, 0, function() { return this.localeData().meridiem(this.hours(), this.minutes(), e) }) }

            function xi(t, e) { return e._meridiemParse }

            function yi(t) { return "p" === (t + "").toLowerCase().charAt(0) }

            function ki(t, e, i) { return t > 11 ? i ? "pm" : "PM" : i ? "am" : "AM" }

            function _i(t, e) { e[Gs] = x(1e3 * ("0." + t)) }

            function Si() { return this._isUTC ? "UTC" : "" }

            function wi() { return this._isUTC ? "Coordinated Universal Time" : "" }

            function Di(t) { return Bt(1e3 * t) }

            function Mi() { return Bt.apply(null, arguments).parseZone() }

            function Ci(t, e, i) { var s = this._calendar[t]; return w(s) ? s.call(e, i) : s }

            function Ai(t) {
                var e = this._longDateFormat[t],
                    i = this._longDateFormat[t.toUpperCase()];
                return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function(t) { return t.slice(1) }), this._longDateFormat[t])
            }

            function Ii() { return this._invalidDate }

            function Pi(t) { return this._ordinal.replace("%d", t) }

            function Ti(t) { return t }

            function Fi(t, e, i, s) { var a = this._relativeTime[i]; return w(a) ? a(t, e, i, s) : a.replace(/%d/i, t) }

            function Oi(t, e) { var i = this._relativeTime[t > 0 ? "future" : "past"]; return w(i) ? i(e) : i.replace(/%s/i, e) }

            function Vi(t, e, i, s) {
                var a = R(),
                    o = l().set(s, e);
                return a[i](o, t)
            }

            function Ri(t, e, i) { if ("number" == typeof t && (e = t, t = void 0), t = t || "", null != e) return Vi(t, e, i, "month"); var s, a = []; for (s = 0; 12 > s; s++) a[s] = Vi(t, s, i, "month"); return a }

            function Wi(t, e, i, s) {
                "boolean" == typeof t ? ("number" == typeof e && (i = e, e = void 0), e = e || "") : (e = t, i = e, t = !1, "number" == typeof e && (i = e, e = void 0), e = e || "");
                var a = R(),
                    o = t ? a._week.dow : 0;
                if (null != i) return Vi(e, (i + o) % 7, s, "day");
                var n, r = [];
                for (n = 0; 7 > n; n++) r[n] = Vi(e, (n + o) % 7, s, "day");
                return r
            }

            function Li(t, e) { return Ri(t, e, "months") }

            function Bi(t, e) { return Ri(t, e, "monthsShort") }

            function zi(t, e, i) { return Wi(t, e, i, "weekdays") }

            function Yi(t, e, i) { return Wi(t, e, i, "weekdaysShort") }

            function Hi(t, e, i) { return Wi(t, e, i, "weekdaysMin") }

            function Ni() { var t = this._data; return this._milliseconds = za(this._milliseconds), this._days = za(this._days), this._months = za(this._months), t.milliseconds = za(t.milliseconds), t.seconds = za(t.seconds), t.minutes = za(t.minutes), t.hours = za(t.hours), t.months = za(t.months), t.years = za(t.years), this }

            function Ei(t, e, i, s) { var a = oe(e, i); return t._milliseconds += s * a._milliseconds, t._days += s * a._days, t._months += s * a._months, t._bubble() }

            function Ui(t, e) { return Ei(this, t, e, 1) }

            function ji(t, e) { return Ei(this, t, e, -1) }

            function Gi(t) { return 0 > t ? Math.floor(t) : Math.ceil(t) }

            function qi() {
                var t, e, i, s, a, o = this._milliseconds,
                    n = this._days,
                    r = this._months,
                    h = this._data;
                return o >= 0 && n >= 0 && r >= 0 || 0 >= o && 0 >= n && 0 >= r || (o += 864e5 * Gi(Qi(r) + n), n = 0, r = 0), h.milliseconds = o % 1e3, t = v(o / 1e3), h.seconds = t % 60, e = v(t / 60), h.minutes = e % 60, i = v(e / 60), h.hours = i % 24, n += v(i / 24), a = v(Zi(n)), r += a, n -= Gi(Qi(a)), s = v(r / 12), r %= 12, h.days = n, h.months = r, h.years = s, this
            }

            function Zi(t) { return 4800 * t / 146097 }

            function Qi(t) { return 146097 * t / 4800 }

            function Ji(t) {
                var e, i, s = this._milliseconds;
                if (t = B(t), "month" === t || "year" === t) return e = this._days + s / 864e5, i = this._months + Zi(e), "month" === t ? i : i / 12;
                switch (e = this._days + Math.round(Qi(this._months)), t) {
                    case "week":
                        return e / 7 + s / 6048e5;
                    case "day":
                        return e + s / 864e5;
                    case "hour":
                        return 24 * e + s / 36e5;
                    case "minute":
                        return 1440 * e + s / 6e4;
                    case "second":
                        return 86400 * e + s / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * e) + s;
                    default:
                        throw new Error("Unknown unit " + t)
                }
            }

            function Xi() { return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * x(this._months / 12) }

            function $i(t) { return function() { return this.as(t) } }

            function Ki(t) { return t = B(t), this[t + "s"]() }

            function ts(t) { return function() { return this._data[t] } }

            function es() { return v(this.days() / 7) }

            function is(t, e, i, s, a) { return a.relativeTime(e || 1, !!i, t, s) }

            function ss(t, e, i) {
                var s = oe(t).abs(),
                    a = eo(s.as("s")),
                    o = eo(s.as("m")),
                    n = eo(s.as("h")),
                    r = eo(s.as("d")),
                    h = eo(s.as("M")),
                    l = eo(s.as("y")),
                    c = a < io.s && ["s", a] || 1 >= o && ["m"] || o < io.m && ["mm", o] || 1 >= n && ["h"] || n < io.h && ["hh", n] || 1 >= r && ["d"] || r < io.d && ["dd", r] || 1 >= h && ["M"] || h < io.M && ["MM", h] || 1 >= l && ["y"] || ["yy", l];
                return c[2] = e, c[3] = +t > 0, c[4] = i, is.apply(null, c)
            }

            function as(t, e) { return void 0 === io[t] ? !1 : void 0 === e ? io[t] : (io[t] = e, !0) }

            function os(t) {
                var e = this.localeData(),
                    i = ss(this, !t, e);
                return t && (i = e.pastFuture(+this, i)), e.postformat(i)
            }

            function ns() {
                var t, e, i, s = so(this._milliseconds) / 1e3,
                    a = so(this._days),
                    o = so(this._months);
                t = v(s / 60), e = v(t / 60), s %= 60, t %= 60, i = v(o / 12), o %= 12;
                var n = i,
                    r = o,
                    h = a,
                    l = e,
                    c = t,
                    d = s,
                    u = this.asSeconds();
                return u ? (0 > u ? "-" : "") + "P" + (n ? n + "Y" : "") + (r ? r + "M" : "") + (h ? h + "D" : "") + (l || c || d ? "T" : "") + (l ? l + "H" : "") + (c ? c + "M" : "") + (d ? d + "S" : "") : "P0D"
            }
            var rs, hs;
            hs = Array.prototype.some ? Array.prototype.some : function(t) {
                for (var e = Object(this), i = e.length >>> 0, s = 0; i > s; s++)
                    if (s in e && t.call(this, e[s], s, e)) return !0;
                return !1
            };
            var ls = i.momentProperties = [],
                cs = !1,
                ds = {};
            i.suppressDeprecationWarnings = !1, i.deprecationHandler = null;
            var us;
            us = Object.keys ? Object.keys : function(t) { var e, i = []; for (e in t) r(t, e) && i.push(e); return i };
            var fs, gs, ms = {},
                ps = {},
                bs = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                vs = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                xs = {},
                ys = {},
                ks = /\d/,
                _s = /\d\d/,
                Ss = /\d{3}/,
                ws = /\d{4}/,
                Ds = /[+-]?\d{6}/,
                Ms = /\d\d?/,
                Cs = /\d\d\d\d?/,
                As = /\d\d\d\d\d\d?/,
                Is = /\d{1,3}/,
                Ps = /\d{1,4}/,
                Ts = /[+-]?\d{1,6}/,
                Fs = /\d+/,
                Os = /[+-]?\d+/,
                Vs = /Z|[+-]\d\d:?\d\d/gi,
                Rs = /Z|[+-]\d\d(?::?\d\d)?/gi,
                Ws = /[+-]?\d+(\.\d{1,3})?/,
                Ls = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                Bs = {},
                zs = {},
                Ys = 0,
                Hs = 1,
                Ns = 2,
                Es = 3,
                Us = 4,
                js = 5,
                Gs = 6,
                qs = 7,
                Zs = 8;
            gs = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
                var e;
                for (e = 0; e < this.length; ++e)
                    if (this[e] === t) return e;
                return -1
            }, j("M", ["MM", 2], "Mo", function() { return this.month() + 1 }), j("MMM", 0, 0, function(t) { return this.localeData().monthsShort(this, t) }), j("MMMM", 0, 0, function(t) { return this.localeData().months(this, t) }), L("month", "M"), J("M", Ms), J("MM", Ms, _s), J("MMM", function(t, e) { return e.monthsShortRegex(t) }), J("MMMM", function(t, e) { return e.monthsRegex(t) }), tt(["M", "MM"], function(t, e) { e[Hs] = x(t) - 1 }), tt(["MMM", "MMMM"], function(t, e, i, s) {
                var a = i._locale.monthsParse(t, s, i._strict);
                null != a ? e[Hs] = a : d(i).invalidMonth = t
            });
            var Qs = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
                Js = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                Xs = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                $s = Ls,
                Ks = Ls,
                ta = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
                ea = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
                ia = /Z|[+-]\d\d(?::?\d\d)?/,
                sa = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/]
                ],
                aa = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                oa = /^\/?Date\((\-?\d+)/i;
            i.createFromInputFallback = _("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(t) { t._d = new Date(t._i + (t._useUTC ? " UTC" : "")) }), j("Y", 0, 0, function() { var t = this.year(); return 9999 >= t ? "" + t : "+" + t }), j(0, ["YY", 2], 0, function() { return this.year() % 100 }), j(0, ["YYYY", 4], 0, "year"), j(0, ["YYYYY", 5], 0, "year"), j(0, ["YYYYYY", 6, !0], 0, "year"), L("year", "y"), J("Y", Os), J("YY", Ms, _s), J("YYYY", Ps, ws), J("YYYYY", Ts, Ds), J("YYYYYY", Ts, Ds), tt(["YYYYY", "YYYYYY"], Ys), tt("YYYY", function(t, e) { e[Ys] = 2 === t.length ? i.parseTwoDigitYear(t) : x(t) }), tt("YY", function(t, e) { e[Ys] = i.parseTwoDigitYear(t) }), tt("Y", function(t, e) { e[Ys] = parseInt(t, 10) }), i.parseTwoDigitYear = function(t) { return x(t) + (x(t) > 68 ? 1900 : 2e3) };
            var na = Y("FullYear", !0);
            i.ISO_8601 = function() {};
            var ra = _("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() { var t = Bt.apply(null, arguments); return this.isValid() && t.isValid() ? this > t ? this : t : f() }),
                ha = _("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() { var t = Bt.apply(null, arguments); return this.isValid() && t.isValid() ? t > this ? this : t : f() }),
                la = function() { return Date.now ? Date.now() : +new Date };
            Ut("Z", ":"), Ut("ZZ", ""), J("Z", Rs), J("ZZ", Rs), tt(["Z", "ZZ"], function(t, e, i) { i._useUTC = !0, i._tzm = jt(Rs, t) });
            var ca = /([\+\-]|\d\d)/gi;
            i.updateOffset = function() {};
            var da = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
                ua = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
            oe.fn = Nt.prototype;
            var fa = ce(1, "add"),
                ga = ce(-1, "subtract");
            i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var ma = _("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) { return void 0 === t ? this.localeData() : this.locale(t) });
            j(0, ["gg", 2], 0, function() { return this.weekYear() % 100 }), j(0, ["GG", 2], 0, function() { return this.isoWeekYear() % 100 }), Ee("gggg", "weekYear"), Ee("ggggg", "weekYear"), Ee("GGGG", "isoWeekYear"), Ee("GGGGG", "isoWeekYear"), L("weekYear", "gg"), L("isoWeekYear", "GG"), J("G", Os), J("g", Os), J("GG", Ms, _s), J("gg", Ms, _s), J("GGGG", Ps, ws), J("gggg", Ps, ws), J("GGGGG", Ts, Ds), J("ggggg", Ts, Ds), et(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, i, s) { e[s.substr(0, 2)] = x(t) }), et(["gg", "GG"], function(t, e, s, a) { e[a] = i.parseTwoDigitYear(t) }), j("Q", 0, "Qo", "quarter"), L("quarter", "Q"), J("Q", ks), tt("Q", function(t, e) { e[Hs] = 3 * (x(t) - 1) }), j("w", ["ww", 2], "wo", "week"), j("W", ["WW", 2], "Wo", "isoWeek"), L("week", "w"), L("isoWeek", "W"), J("w", Ms), J("ww", Ms, _s), J("W", Ms), J("WW", Ms, _s), et(["w", "ww", "W", "WW"], function(t, e, i, s) { e[s.substr(0, 1)] = x(t) });
            var pa = { dow: 0, doy: 6 };
            j("D", ["DD", 2], "Do", "date"), L("date", "D"), J("D", Ms), J("DD", Ms, _s), J("Do", function(t, e) { return t ? e._ordinalParse : e._ordinalParseLenient }), tt(["D", "DD"], Ns), tt("Do", function(t, e) { e[Ns] = x(t.match(Ms)[0], 10) });
            var ba = Y("Date", !0);
            j("d", 0, "do", "day"), j("dd", 0, 0, function(t) { return this.localeData().weekdaysMin(this, t) }), j("ddd", 0, 0, function(t) { return this.localeData().weekdaysShort(this, t) }), j("dddd", 0, 0, function(t) { return this.localeData().weekdays(this, t) }), j("e", 0, 0, "weekday"), j("E", 0, 0, "isoWeekday"), L("day", "d"), L("weekday", "e"), L("isoWeekday", "E"), J("d", Ms), J("e", Ms), J("E", Ms), J("dd", function(t, e) { return e.weekdaysMinRegex(t) }), J("ddd", function(t, e) { return e.weekdaysShortRegex(t) }), J("dddd", function(t, e) { return e.weekdaysRegex(t) }), et(["dd", "ddd", "dddd"], function(t, e, i, s) {
                var a = i._locale.weekdaysParse(t, s, i._strict);
                null != a ? e.d = a : d(i).invalidWeekday = t
            }), et(["d", "e", "E"], function(t, e, i, s) { e[s] = x(t) });
            var va = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                xa = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                ya = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                ka = Ls,
                _a = Ls,
                Sa = Ls;
            j("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), L("dayOfYear", "DDD"), J("DDD", Is), J("DDDD", Ss), tt(["DDD", "DDDD"], function(t, e, i) { i._dayOfYear = x(t) }), j("H", ["HH", 2], 0, "hour"), j("h", ["hh", 2], 0, pi), j("k", ["kk", 2], 0, bi), j("hmm", 0, 0, function() { return "" + pi.apply(this) + U(this.minutes(), 2) }), j("hmmss", 0, 0, function() { return "" + pi.apply(this) + U(this.minutes(), 2) + U(this.seconds(), 2) }), j("Hmm", 0, 0, function() { return "" + this.hours() + U(this.minutes(), 2) }), j("Hmmss", 0, 0, function() { return "" + this.hours() + U(this.minutes(), 2) + U(this.seconds(), 2) }), vi("a", !0), vi("A", !1), L("hour", "h"), J("a", xi), J("A", xi), J("H", Ms), J("h", Ms), J("HH", Ms, _s), J("hh", Ms, _s), J("hmm", Cs), J("hmmss", As), J("Hmm", Cs), J("Hmmss", As), tt(["H", "HH"], Es), tt(["a", "A"], function(t, e, i) { i._isPm = i._locale.isPM(t), i._meridiem = t }), tt(["h", "hh"], function(t, e, i) { e[Es] = x(t), d(i).bigHour = !0 }), tt("hmm", function(t, e, i) {
                var s = t.length - 2;
                e[Es] = x(t.substr(0, s)), e[Us] = x(t.substr(s)),
                    d(i).bigHour = !0
            }), tt("hmmss", function(t, e, i) {
                var s = t.length - 4,
                    a = t.length - 2;
                e[Es] = x(t.substr(0, s)), e[Us] = x(t.substr(s, 2)), e[js] = x(t.substr(a)), d(i).bigHour = !0
            }), tt("Hmm", function(t, e, i) {
                var s = t.length - 2;
                e[Es] = x(t.substr(0, s)), e[Us] = x(t.substr(s))
            }), tt("Hmmss", function(t, e, i) {
                var s = t.length - 4,
                    a = t.length - 2;
                e[Es] = x(t.substr(0, s)), e[Us] = x(t.substr(s, 2)), e[js] = x(t.substr(a))
            });
            var wa = /[ap]\.?m?\.?/i,
                Da = Y("Hours", !0);
            j("m", ["mm", 2], 0, "minute"), L("minute", "m"), J("m", Ms), J("mm", Ms, _s), tt(["m", "mm"], Us);
            var Ma = Y("Minutes", !1);
            j("s", ["ss", 2], 0, "second"), L("second", "s"), J("s", Ms), J("ss", Ms, _s), tt(["s", "ss"], js);
            var Ca = Y("Seconds", !1);
            j("S", 0, 0, function() { return ~~(this.millisecond() / 100) }), j(0, ["SS", 2], 0, function() { return ~~(this.millisecond() / 10) }), j(0, ["SSS", 3], 0, "millisecond"), j(0, ["SSSS", 4], 0, function() { return 10 * this.millisecond() }), j(0, ["SSSSS", 5], 0, function() { return 100 * this.millisecond() }), j(0, ["SSSSSS", 6], 0, function() { return 1e3 * this.millisecond() }), j(0, ["SSSSSSS", 7], 0, function() { return 1e4 * this.millisecond() }), j(0, ["SSSSSSSS", 8], 0, function() { return 1e5 * this.millisecond() }), j(0, ["SSSSSSSSS", 9], 0, function() { return 1e6 * this.millisecond() }), L("millisecond", "ms"), J("S", Is, ks), J("SS", Is, _s), J("SSS", Is, Ss);
            var Aa;
            for (Aa = "SSSS"; Aa.length <= 9; Aa += "S") J(Aa, Fs);
            for (Aa = "S"; Aa.length <= 9; Aa += "S") tt(Aa, _i);
            var Ia = Y("Milliseconds", !1);
            j("z", 0, 0, "zoneAbbr"), j("zz", 0, 0, "zoneName");
            var Pa = p.prototype;
            Pa.add = fa, Pa.calendar = ue, Pa.clone = fe, Pa.diff = ye, Pa.endOf = Fe, Pa.format = we, Pa.from = De, Pa.fromNow = Me, Pa.to = Ce, Pa.toNow = Ae, Pa.get = E, Pa.invalidAt = He, Pa.isAfter = ge, Pa.isBefore = me, Pa.isBetween = pe, Pa.isSame = be, Pa.isSameOrAfter = ve, Pa.isSameOrBefore = xe, Pa.isValid = ze, Pa.lang = ma, Pa.locale = Ie, Pa.localeData = Pe, Pa.max = ha, Pa.min = ra, Pa.parsingFlags = Ye, Pa.set = E, Pa.startOf = Te, Pa.subtract = ga, Pa.toArray = We, Pa.toObject = Le, Pa.toDate = Re, Pa.toISOString = Se, Pa.toJSON = Be, Pa.toString = _e, Pa.unix = Ve, Pa.valueOf = Oe, Pa.creationData = Ne, Pa.year = na, Pa.isLeapYear = kt, Pa.weekYear = Ue, Pa.isoWeekYear = je, Pa.quarter = Pa.quarters = Je, Pa.month = lt, Pa.daysInMonth = ct, Pa.week = Pa.weeks = ti, Pa.isoWeek = Pa.isoWeeks = ei, Pa.weeksInYear = qe, Pa.isoWeeksInYear = Ge, Pa.date = ba, Pa.day = Pa.days = hi, Pa.weekday = li, Pa.isoWeekday = ci, Pa.dayOfYear = mi, Pa.hour = Pa.hours = Da, Pa.minute = Pa.minutes = Ma, Pa.second = Pa.seconds = Ca, Pa.millisecond = Pa.milliseconds = Ia, Pa.utcOffset = Zt, Pa.utc = Jt, Pa.local = Xt, Pa.parseZone = $t, Pa.hasAlignedHourOffset = Kt, Pa.isDST = te, Pa.isDSTShifted = ee, Pa.isLocal = ie, Pa.isUtcOffset = se, Pa.isUtc = ae, Pa.isUTC = ae, Pa.zoneAbbr = Si, Pa.zoneName = wi, Pa.dates = _("dates accessor is deprecated. Use date instead.", ba), Pa.months = _("months accessor is deprecated. Use month instead", lt), Pa.years = _("years accessor is deprecated. Use year instead", na), Pa.zone = _("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Qt);
            var Ta = Pa,
                Fa = { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
                Oa = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" },
                Va = "Invalid date",
                Ra = "%d",
                Wa = /\d{1,2}/,
                La = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" },
                Ba = A.prototype;
            Ba._calendar = Fa, Ba.calendar = Ci, Ba._longDateFormat = Oa, Ba.longDateFormat = Ai, Ba._invalidDate = Va, Ba.invalidDate = Ii, Ba._ordinal = Ra, Ba.ordinal = Pi, Ba._ordinalParse = Wa, Ba.preparse = Ti, Ba.postformat = Ti, Ba._relativeTime = La, Ba.relativeTime = Fi, Ba.pastFuture = Oi, Ba.set = M, Ba.months = at, Ba._months = Js, Ba.monthsShort = ot, Ba._monthsShort = Xs, Ba.monthsParse = rt, Ba._monthsRegex = Ks, Ba.monthsRegex = ut, Ba._monthsShortRegex = $s, Ba.monthsShortRegex = dt, Ba.week = Xe, Ba._week = pa, Ba.firstDayOfYear = Ke, Ba.firstDayOfWeek = $e, Ba.weekdays = si, Ba._weekdays = va, Ba.weekdaysMin = oi, Ba._weekdaysMin = ya, Ba.weekdaysShort = ai, Ba._weekdaysShort = xa, Ba.weekdaysParse = ri, Ba._weekdaysRegex = ka, Ba.weekdaysRegex = di, Ba._weekdaysShortRegex = _a, Ba.weekdaysShortRegex = ui, Ba._weekdaysMinRegex = Sa, Ba.weekdaysMinRegex = fi, Ba.isPM = yi, Ba._meridiemParse = wa, Ba.meridiem = ki, F("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(t) {
                    var e = t % 10,
                        i = 1 === x(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                    return t + i
                }
            }), i.lang = _("moment.lang is deprecated. Use moment.locale instead.", F), i.langData = _("moment.langData is deprecated. Use moment.localeData instead.", R);
            var za = Math.abs,
                Ya = $i("ms"),
                Ha = $i("s"),
                Na = $i("m"),
                Ea = $i("h"),
                Ua = $i("d"),
                ja = $i("w"),
                Ga = $i("M"),
                qa = $i("y"),
                Za = ts("milliseconds"),
                Qa = ts("seconds"),
                Ja = ts("minutes"),
                Xa = ts("hours"),
                $a = ts("days"),
                Ka = ts("months"),
                to = ts("years"),
                eo = Math.round,
                io = { s: 45, m: 45, h: 22, d: 26, M: 11 },
                so = Math.abs,
                ao = Nt.prototype;
            ao.abs = Ni, ao.add = Ui, ao.subtract = ji, ao.as = Ji, ao.asMilliseconds = Ya, ao.asSeconds = Ha, ao.asMinutes = Na, ao.asHours = Ea, ao.asDays = Ua, ao.asWeeks = ja, ao.asMonths = Ga, ao.asYears = qa, ao.valueOf = Xi, ao._bubble = qi, ao.get = Ki, ao.milliseconds = Za, ao.seconds = Qa, ao.minutes = Ja, ao.hours = Xa, ao.days = $a, ao.weeks = es, ao.months = Ka, ao.years = to, ao.humanize = os, ao.toISOString = ns, ao.toString = ns, ao.toJSON = ns, ao.locale = Ie, ao.localeData = Pe, ao.toIsoString = _("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ns), ao.lang = ma, j("X", 0, 0, "unix"), j("x", 0, 0, "valueOf"), J("x", Os), J("X", Ws), tt("X", function(t, e, i) { i._d = new Date(1e3 * parseFloat(t, 10)) }), tt("x", function(t, e, i) { i._d = new Date(x(t)) }), i.version = "2.13.0", s(Bt), i.fn = Ta, i.min = Yt, i.max = Ht, i.now = la, i.utc = l, i.unix = Di, i.months = Li, i.isDate = o, i.locale = F, i.invalid = f, i.duration = oe, i.isMoment = b, i.weekdays = zi, i.parseZone = Mi, i.localeData = R, i.isDuration = Et, i.monthsShort = Bi, i.weekdaysMin = Hi, i.defineLocale = O, i.updateLocale = V, i.locales = W, i.weekdaysShort = Yi, i.normalizeUnits = B, i.relativeTimeThreshold = as, i.prototype = Ta;
            var oo = i;
            return oo
        })
    }, {}],
    7: [function(t, e, i) {
        var s = t("./core/core.js")();
        t("./core/core.helpers")(s), t("./core/core.element")(s), t("./core/core.animation")(s), t("./core/core.controller")(s), t("./core/core.datasetController")(s), t("./core/core.layoutService")(s), t("./core/core.legend")(s), t("./core/core.plugin.js")(s), t("./core/core.scale")(s), t("./core/core.scaleService")(s), t("./core/core.title")(s), t("./core/core.tooltip")(s), t("./controllers/controller.bar")(s), t("./controllers/controller.bubble")(s), t("./controllers/controller.doughnut")(s), t("./controllers/controller.line")(s), t("./controllers/controller.polarArea")(s), t("./controllers/controller.radar")(s), t("./scales/scale.category")(s), t("./scales/scale.linear")(s), t("./scales/scale.logarithmic")(s), t("./scales/scale.radialLinear")(s), t("./scales/scale.time")(s), t("./elements/element.arc")(s), t("./elements/element.line")(s), t("./elements/element.point")(s), t("./elements/element.rectangle")(s), t("./charts/Chart.Bar")(s), t("./charts/Chart.Bubble")(s), t("./charts/Chart.Doughnut")(s), t("./charts/Chart.Line")(s), t("./charts/Chart.PolarArea")(s), t("./charts/Chart.Radar")(s), t("./charts/Chart.Scatter")(s), window.Chart = e.exports = s
    }, { "./charts/Chart.Bar": 8, "./charts/Chart.Bubble": 9, "./charts/Chart.Doughnut": 10, "./charts/Chart.Line": 11, "./charts/Chart.PolarArea": 12, "./charts/Chart.Radar": 13, "./charts/Chart.Scatter": 14, "./controllers/controller.bar": 15, "./controllers/controller.bubble": 16, "./controllers/controller.doughnut": 17, "./controllers/controller.line": 18, "./controllers/controller.polarArea": 19, "./controllers/controller.radar": 20, "./core/core.animation": 21, "./core/core.controller": 22, "./core/core.datasetController": 23, "./core/core.element": 24, "./core/core.helpers": 25, "./core/core.js": 26, "./core/core.layoutService": 27, "./core/core.legend": 28, "./core/core.plugin.js": 29, "./core/core.scale": 30, "./core/core.scaleService": 31, "./core/core.title": 32, "./core/core.tooltip": 33, "./elements/element.arc": 34, "./elements/element.line": 35, "./elements/element.point": 36, "./elements/element.rectangle": 37, "./scales/scale.category": 38, "./scales/scale.linear": 39, "./scales/scale.logarithmic": 40, "./scales/scale.radialLinear": 41, "./scales/scale.time": 42 }],
    8: [function(t, e, i) {
        "use strict";
        e.exports = function(t) { t.Bar = function(e, i) { return i.type = "bar", new t(e, i) } }
    }, {}],
    9: [function(t, e, i) {
        "use strict";
        e.exports = function(t) { t.Bubble = function(e, i) { return i.type = "bubble", new t(e, i) } }
    }, {}],
    10: [function(t, e, i) {
        "use strict";
        e.exports = function(t) { t.Doughnut = function(e, i) { return i.type = "doughnut", new t(e, i) } }
    }, {}],
    11: [function(t, e, i) {
        "use strict";
        e.exports = function(t) { t.Line = function(e, i) { return i.type = "line", new t(e, i) } }
    }, {}],
    12: [function(t, e, i) {
        "use strict";
        e.exports = function(t) { t.PolarArea = function(e, i) { return i.type = "polarArea", new t(e, i) } }
    }, {}],
    13: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                i = { aspectRatio: 1 };
            t.Radar = function(s, a) { return a.options = e.configMerge(i, a.options), a.type = "radar", new t(s, a) }
        }
    }, {}],
    14: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = { hover: { mode: "single" }, scales: { xAxes: [{ type: "linear", position: "bottom", id: "x-axis-1" }], yAxes: [{ type: "linear", position: "left", id: "y-axis-1" }] }, tooltips: { callbacks: { title: function(t, e) { return "" }, label: function(t, e) { return "(" + t.xLabel + ", " + t.yLabel + ")" } } } };
            t.defaults.scatter = e, t.controllers.scatter = t.controllers.line, t.Scatter = function(e, i) { return i.type = "scatter", new t(e, i) }
        }
    }, {}],
    15: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.bar = { hover: { mode: "label" }, scales: { xAxes: [{ type: "category", categoryPercentage: .8, barPercentage: .9, gridLines: { offsetGridLines: !0 } }], yAxes: [{ type: "linear" }] } }, t.controllers.bar = t.DatasetController.extend({
                initialize: function(e, i) { t.DatasetController.prototype.initialize.call(this, e, i), this.getMeta().bar = !0 },
                getBarCount: function() {
                    var t = 0;
                    return e.each(this.chart.data.datasets, function(e, i) {
                        var s = this.chart.getDatasetMeta(i);
                        s.bar && this.chart.isDatasetVisible(i) && ++t
                    }, this), t
                },
                addElements: function() {
                    var i = this.getMeta();
                    e.each(this.getDataset().data, function(e, s) { i.data[s] = i.data[s] || new t.elements.Rectangle({ _chart: this.chart.chart, _datasetIndex: this.index, _index: s }) }, this)
                },
                addElementAndReset: function(e) {
                    var i = new t.elements.Rectangle({ _chart: this.chart.chart, _datasetIndex: this.index, _index: e }),
                        s = this.getBarCount();
                    this.getMeta().data.splice(e, 0, i), this.updateElement(i, e, !0, s)
                },
                update: function(t) {
                    var i = this.getBarCount();
                    e.each(this.getMeta().data, function(e, s) { this.updateElement(e, s, t, i) }, this)
                },
                updateElement: function(t, i, s, a) {
                    var o, n = this.getMeta(),
                        r = this.getScaleForId(n.xAxisID),
                        h = this.getScaleForId(n.yAxisID);
                    o = h.min < 0 && h.max < 0 ? h.getPixelForValue(h.max) : h.min > 0 && h.max > 0 ? h.getPixelForValue(h.min) : h.getPixelForValue(0), e.extend(t, { _chart: this.chart.chart, _xScale: r, _yScale: h, _datasetIndex: this.index, _index: i, _model: { x: this.calculateBarX(i, this.index), y: s ? o : this.calculateBarY(i, this.index), label: this.chart.data.labels[i], datasetLabel: this.getDataset().label, base: s ? o : this.calculateBarBase(this.index, i), width: this.calculateBarWidth(a), backgroundColor: t.custom && t.custom.backgroundColor ? t.custom.backgroundColor : e.getValueAtIndexOrDefault(this.getDataset().backgroundColor, i, this.chart.options.elements.rectangle.backgroundColor), borderSkipped: t.custom && t.custom.borderSkipped ? t.custom.borderSkipped : this.chart.options.elements.rectangle.borderSkipped, borderColor: t.custom && t.custom.borderColor ? t.custom.borderColor : e.getValueAtIndexOrDefault(this.getDataset().borderColor, i, this.chart.options.elements.rectangle.borderColor), borderWidth: t.custom && t.custom.borderWidth ? t.custom.borderWidth : e.getValueAtIndexOrDefault(this.getDataset().borderWidth, i, this.chart.options.elements.rectangle.borderWidth) } }), t.pivot()
                },
                calculateBarBase: function(t, e) {
                    var i = this.getMeta(),
                        s = (this.getScaleForId(i.xAxisID), this.getScaleForId(i.yAxisID)),
                        a = 0;
                    if (s.options.stacked) {
                        var o = this.chart.data.datasets[t].data[e];
                        if (0 > o)
                            for (var n = 0; t > n; n++) {
                                var r = this.chart.data.datasets[n],
                                    h = this.chart.getDatasetMeta(n);
                                h.bar && h.yAxisID === s.id && this.chart.isDatasetVisible(n) && (a += r.data[e] < 0 ? r.data[e] : 0)
                            } else
                                for (var l = 0; t > l; l++) {
                                    var c = this.chart.data.datasets[l],
                                        d = this.chart.getDatasetMeta(l);
                                    d.bar && d.yAxisID === s.id && this.chart.isDatasetVisible(l) && (a += c.data[e] > 0 ? c.data[e] : 0)
                                }
                        return s.getPixelForValue(a)
                    }
                    return a = s.getPixelForValue(s.min), s.beginAtZero || s.min <= 0 && s.max >= 0 || s.min >= 0 && s.max <= 0 ? a = s.getPixelForValue(0, 0) : s.min < 0 && s.max < 0 && (a = s.getPixelForValue(s.max)), a
                },
                getRuler: function() {
                    var t = this.getMeta(),
                        e = this.getScaleForId(t.xAxisID),
                        i = (this.getScaleForId(t.yAxisID), this.getBarCount()),
                        s = function() { for (var t = e.getPixelForTick(1) - e.getPixelForTick(0), i = 2; i < e.ticks.length; i++) t = Math.min(e.getPixelForTick(i) - e.getPixelForTick(i - 1), t); return t }.call(this),
                        a = s * e.options.categoryPercentage,
                        o = (s - s * e.options.categoryPercentage) / 2,
                        n = a / i;
                    if (e.ticks.length !== this.chart.data.labels.length) {
                        var r = e.ticks.length / this.chart.data.labels.length;
                        n *= r
                    }
                    var h = n * e.options.barPercentage,
                        l = n - n * e.options.barPercentage;
                    return { datasetCount: i, tickWidth: s, categoryWidth: a, categorySpacing: o, fullBarWidth: n, barWidth: h, barSpacing: l }
                },
                calculateBarWidth: function() {
                    var t = this.getScaleForId(this.getMeta().xAxisID),
                        e = this.getRuler();
                    return t.options.stacked ? e.categoryWidth : e.barWidth
                },
                getBarIndex: function(t) { var e, i, s = 0; for (i = 0; t > i; ++i) e = this.chart.getDatasetMeta(i), e.bar && this.chart.isDatasetVisible(i) && ++s; return s },
                calculateBarX: function(t, e) {
                    var i = this.getMeta(),
                        s = (this.getScaleForId(i.yAxisID), this.getScaleForId(i.xAxisID)),
                        a = this.getBarIndex(e),
                        o = this.getRuler(),
                        n = s.getPixelForValue(null, t, e, this.chart.isCombo);
                    return n -= this.chart.isCombo ? o.tickWidth / 2 : 0, s.options.stacked ? n + o.categoryWidth / 2 + o.categorySpacing : n + o.barWidth / 2 + o.categorySpacing + o.barWidth * a + o.barSpacing / 2 + o.barSpacing * a
                },
                calculateBarY: function(t, e) {
                    var i = this.getMeta(),
                        s = (this.getScaleForId(i.xAxisID), this.getScaleForId(i.yAxisID)),
                        a = this.getDataset().data[t];
                    if (s.options.stacked) {
                        for (var o = 0, n = 0, r = 0; e > r; r++) {
                            var h = this.chart.data.datasets[r],
                                l = this.chart.getDatasetMeta(r);
                            l.bar && l.yAxisID === s.id && this.chart.isDatasetVisible(r) && (h.data[t] < 0 ? n += h.data[t] || 0 : o += h.data[t] || 0)
                        }
                        return 0 > a ? s.getPixelForValue(n + a) : s.getPixelForValue(o + a)
                    }
                    return s.getPixelForValue(a)
                },
                draw: function(t) {
                    var i = t || 1;
                    e.each(this.getMeta().data, function(t, e) {
                        var s = this.getDataset().data[e];
                        null === s || void 0 === s || isNaN(s) || t.transition(i).draw()
                    }, this)
                },
                setHoverStyle: function(t) {
                    var i = this.chart.data.datasets[t._datasetIndex],
                        s = t._index;
                    t._model.backgroundColor = t.custom && t.custom.hoverBackgroundColor ? t.custom.hoverBackgroundColor : e.getValueAtIndexOrDefault(i.hoverBackgroundColor, s, e.getHoverColor(t._model.backgroundColor)), t._model.borderColor = t.custom && t.custom.hoverBorderColor ? t.custom.hoverBorderColor : e.getValueAtIndexOrDefault(i.hoverBorderColor, s, e.getHoverColor(t._model.borderColor)), t._model.borderWidth = t.custom && t.custom.hoverBorderWidth ? t.custom.hoverBorderWidth : e.getValueAtIndexOrDefault(i.hoverBorderWidth, s, t._model.borderWidth)
                },
                removeHoverStyle: function(t) {
                    var i = (this.chart.data.datasets[t._datasetIndex], t._index);
                    t._model.backgroundColor = t.custom && t.custom.backgroundColor ? t.custom.backgroundColor : e.getValueAtIndexOrDefault(this.getDataset().backgroundColor, i, this.chart.options.elements.rectangle.backgroundColor), t._model.borderColor = t.custom && t.custom.borderColor ? t.custom.borderColor : e.getValueAtIndexOrDefault(this.getDataset().borderColor, i, this.chart.options.elements.rectangle.borderColor), t._model.borderWidth = t.custom && t.custom.borderWidth ? t.custom.borderWidth : e.getValueAtIndexOrDefault(this.getDataset().borderWidth, i, this.chart.options.elements.rectangle.borderWidth)
                }
            }), t.defaults.horizontalBar = { hover: { mode: "label" }, scales: { xAxes: [{ type: "linear", position: "bottom" }], yAxes: [{ position: "left", type: "category", categoryPercentage: .8, barPercentage: .9, gridLines: { offsetGridLines: !0 } }] } }, t.controllers.horizontalBar = t.controllers.bar.extend({
                updateElement: function(t, i, s, a) {
                    var o, n = this.getMeta(),
                        r = this.getScaleForId(n.xAxisID),
                        h = this.getScaleForId(n.yAxisID);
                    o = r.min < 0 && r.max < 0 ? r.getPixelForValue(r.max) : r.min > 0 && r.max > 0 ? r.getPixelForValue(r.min) : r.getPixelForValue(0), e.extend(t, {
                        _chart: this.chart.chart,
                        _xScale: r,
                        _yScale: h,
                        _datasetIndex: this.index,
                        _index: i,
                        _model: { x: s ? o : this.calculateBarX(i, this.index), y: this.calculateBarY(i, this.index), label: this.chart.data.labels[i], datasetLabel: this.getDataset().label, base: s ? o : this.calculateBarBase(this.index, i), height: this.calculateBarHeight(a), backgroundColor: t.custom && t.custom.backgroundColor ? t.custom.backgroundColor : e.getValueAtIndexOrDefault(this.getDataset().backgroundColor, i, this.chart.options.elements.rectangle.backgroundColor), borderSkipped: t.custom && t.custom.borderSkipped ? t.custom.borderSkipped : this.chart.options.elements.rectangle.borderSkipped, borderColor: t.custom && t.custom.borderColor ? t.custom.borderColor : e.getValueAtIndexOrDefault(this.getDataset().borderColor, i, this.chart.options.elements.rectangle.borderColor), borderWidth: t.custom && t.custom.borderWidth ? t.custom.borderWidth : e.getValueAtIndexOrDefault(this.getDataset().borderWidth, i, this.chart.options.elements.rectangle.borderWidth) },
                        draw: function() {
                            function t(t) { return h[(c + t) % 4] }
                            var e = this._chart.ctx,
                                i = this._view,
                                s = i.height / 2,
                                a = i.y - s,
                                o = i.y + s,
                                n = i.base - (i.base - i.x),
                                r = i.borderWidth / 2;
                            i.borderWidth && (a += r, o -= r, n += r), e.beginPath(), e.fillStyle = i.backgroundColor, e.strokeStyle = i.borderColor, e.lineWidth = i.borderWidth;
                            var h = [
                                    [i.base, o],
                                    [i.base, a],
                                    [n, a],
                                    [n, o]
                                ],
                                l = ["bottom", "left", "top", "right"],
                                c = l.indexOf(i.borderSkipped, 0); - 1 === c && (c = 0), e.moveTo.apply(e, t(0));
                            for (var d = 1; 4 > d; d++) e.lineTo.apply(e, t(d));
                            e.fill(), i.borderWidth && e.stroke()
                        },
                        inRange: function(t, e) {
                            var i = this._view,
                                s = !1;
                            return i && (s = i.x < i.base ? e >= i.y - i.height / 2 && e <= i.y + i.height / 2 && t >= i.x && t <= i.base : e >= i.y - i.height / 2 && e <= i.y + i.height / 2 && t >= i.base && t <= i.x), s
                        }
                    }), t.pivot()
                },
                calculateBarBase: function(t, e) {
                    var i = this.getMeta(),
                        s = this.getScaleForId(i.xAxisID),
                        a = (this.getScaleForId(i.yAxisID), 0);
                    if (s.options.stacked) {
                        var o = this.chart.data.datasets[t].data[e];
                        if (0 > o)
                            for (var n = 0; t > n; n++) {
                                var r = this.chart.data.datasets[n],
                                    h = this.chart.getDatasetMeta(n);
                                h.bar && h.xAxisID === s.id && this.chart.isDatasetVisible(n) && (a += r.data[e] < 0 ? r.data[e] : 0)
                            } else
                                for (var l = 0; t > l; l++) {
                                    var c = this.chart.data.datasets[l],
                                        d = this.chart.getDatasetMeta(l);
                                    d.bar && d.xAxisID === s.id && this.chart.isDatasetVisible(l) && (a += c.data[e] > 0 ? c.data[e] : 0)
                                }
                        return s.getPixelForValue(a)
                    }
                    return a = s.getPixelForValue(s.min), s.beginAtZero || s.min <= 0 && s.max >= 0 || s.min >= 0 && s.max <= 0 ? a = s.getPixelForValue(0, 0) : s.min < 0 && s.max < 0 && (a = s.getPixelForValue(s.max)), a
                },
                getRuler: function() {
                    var t = this.getMeta(),
                        e = (this.getScaleForId(t.xAxisID), this.getScaleForId(t.yAxisID)),
                        i = this.getBarCount(),
                        s = function() { for (var t = e.getPixelForTick(1) - e.getPixelForTick(0), i = 2; i < this.getDataset().data.length; i++) t = Math.min(e.getPixelForTick(i) - e.getPixelForTick(i - 1), t); return t }.call(this),
                        a = s * e.options.categoryPercentage,
                        o = (s - s * e.options.categoryPercentage) / 2,
                        n = a / i;
                    if (e.ticks.length !== this.chart.data.labels.length) {
                        var r = e.ticks.length / this.chart.data.labels.length;
                        n *= r
                    }
                    var h = n * e.options.barPercentage,
                        l = n - n * e.options.barPercentage;
                    return { datasetCount: i, tickHeight: s, categoryHeight: a, categorySpacing: o, fullBarHeight: n, barHeight: h, barSpacing: l }
                },
                calculateBarHeight: function() {
                    var t = this.getScaleForId(this.getMeta().yAxisID),
                        e = this.getRuler();
                    return t.options.stacked ? e.categoryHeight : e.barHeight
                },
                calculateBarX: function(t, e) {
                    var i = this.getMeta(),
                        s = this.getScaleForId(i.xAxisID),
                        a = (this.getScaleForId(i.yAxisID), this.getDataset().data[t]);
                    if (s.options.stacked) {
                        for (var o = 0, n = 0, r = 0; e > r; r++) {
                            var h = this.chart.data.datasets[r],
                                l = this.chart.getDatasetMeta(r);
                            l.bar && l.xAxisID === s.id && this.chart.isDatasetVisible(r) && (h.data[t] < 0 ? n += h.data[t] || 0 : o += h.data[t] || 0)
                        }
                        return 0 > a ? s.getPixelForValue(n + a) : s.getPixelForValue(o + a)
                    }
                    return s.getPixelForValue(a)
                },
                calculateBarY: function(t, e) {
                    var i = this.getMeta(),
                        s = this.getScaleForId(i.yAxisID),
                        a = (this.getScaleForId(i.xAxisID), this.getBarIndex(e)),
                        o = this.getRuler(),
                        n = s.getPixelForValue(null, t, e, this.chart.isCombo);
                    return n -= this.chart.isCombo ? o.tickHeight / 2 : 0, s.options.stacked ? n + o.categoryHeight / 2 + o.categorySpacing : n + o.barHeight / 2 + o.categorySpacing + o.barHeight * a + o.barSpacing / 2 + o.barSpacing * a
                }
            })
        }
    }, {}],
    16: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.bubble = {
                hover: { mode: "single" },
                scales: { xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }], yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }] },
                tooltips: {
                    callbacks: {
                        title: function(t, e) { return "" },
                        label: function(t, e) {
                            var i = e.datasets[t.datasetIndex].label || "",
                                s = e.datasets[t.datasetIndex].data[t.index];
                            return i + ": (" + s.x + ", " + s.y + ", " + s.r + ")"
                        }
                    }
                }
            }, t.controllers.bubble = t.DatasetController.extend({
                addElements: function() {
                    var i = this.getMeta();
                    e.each(this.getDataset().data, function(e, s) { i.data[s] = i.data[s] || new t.elements.Point({ _chart: this.chart.chart, _datasetIndex: this.index, _index: s }) }, this)
                },
                addElementAndReset: function(e) {
                    var i = new t.elements.Point({ _chart: this.chart.chart, _datasetIndex: this.index, _index: e });
                    this.getMeta().data.splice(e, 0, i), this.updateElement(i, e, !0)
                },
                update: function(t) {
                    var i, s = this.getMeta(),
                        a = s.data,
                        o = this.getScaleForId(s.yAxisID);
                    this.getScaleForId(s.xAxisID);
                    i = o.min < 0 && o.max < 0 ? o.getPixelForValue(o.max) : o.min > 0 && o.max > 0 ? o.getPixelForValue(o.min) : o.getPixelForValue(0), e.each(a, function(e, i) { this.updateElement(e, i, t) }, this)
                },
                updateElement: function(t, i, s) {
                    var a, o = this.getMeta(),
                        n = this.getScaleForId(o.yAxisID),
                        r = this.getScaleForId(o.xAxisID);
                    a = n.min < 0 && n.max < 0 ? n.getPixelForValue(n.max) : n.min > 0 && n.max > 0 ? n.getPixelForValue(n.min) : n.getPixelForValue(0), e.extend(t, { _chart: this.chart.chart, _xScale: r, _yScale: n, _datasetIndex: this.index, _index: i, _model: { x: s ? r.getPixelForDecimal(.5) : r.getPixelForValue(this.getDataset().data[i], i, this.index, this.chart.isCombo), y: s ? a : n.getPixelForValue(this.getDataset().data[i], i, this.index), radius: s ? 0 : t.custom && t.custom.radius ? t.custom.radius : this.getRadius(this.getDataset().data[i]), backgroundColor: t.custom && t.custom.backgroundColor ? t.custom.backgroundColor : e.getValueAtIndexOrDefault(this.getDataset().backgroundColor, i, this.chart.options.elements.point.backgroundColor), borderColor: t.custom && t.custom.borderColor ? t.custom.borderColor : e.getValueAtIndexOrDefault(this.getDataset().borderColor, i, this.chart.options.elements.point.borderColor), borderWidth: t.custom && t.custom.borderWidth ? t.custom.borderWidth : e.getValueAtIndexOrDefault(this.getDataset().borderWidth, i, this.chart.options.elements.point.borderWidth), hitRadius: t.custom && t.custom.hitRadius ? t.custom.hitRadius : e.getValueAtIndexOrDefault(this.getDataset().hitRadius, i, this.chart.options.elements.point.hitRadius) } }), t._model.skip = t.custom && t.custom.skip ? t.custom.skip : isNaN(t._model.x) || isNaN(t._model.y), t.pivot()
                },
                getRadius: function(t) { return t.r || this.chart.options.elements.point.radius },
                draw: function(t) {
                    var i = t || 1;
                    e.each(this.getMeta().data, function(t, e) { t.transition(i), t.draw() })
                },
                setHoverStyle: function(t) {
                    var i = this.chart.data.datasets[t._datasetIndex],
                        s = t._index;
                    t._model.radius = t.custom && t.custom.hoverRadius ? t.custom.hoverRadius : e.getValueAtIndexOrDefault(i.hoverRadius, s, this.chart.options.elements.point.hoverRadius) + this.getRadius(this.getDataset().data[t._index]), t._model.backgroundColor = t.custom && t.custom.hoverBackgroundColor ? t.custom.hoverBackgroundColor : e.getValueAtIndexOrDefault(i.hoverBackgroundColor, s, e.getHoverColor(t._model.backgroundColor)), t._model.borderColor = t.custom && t.custom.hoverBorderColor ? t.custom.hoverBorderColor : e.getValueAtIndexOrDefault(i.hoverBorderColor, s, e.getHoverColor(t._model.borderColor)), t._model.borderWidth = t.custom && t.custom.hoverBorderWidth ? t.custom.hoverBorderWidth : e.getValueAtIndexOrDefault(i.hoverBorderWidth, s, t._model.borderWidth)
                },
                removeHoverStyle: function(t) {
                    var i = (this.chart.data.datasets[t._datasetIndex], t._index);
                    t._model.radius = t.custom && t.custom.radius ? t.custom.radius : this.getRadius(this.getDataset().data[t._index]), t._model.backgroundColor = t.custom && t.custom.backgroundColor ? t.custom.backgroundColor : e.getValueAtIndexOrDefault(this.getDataset().backgroundColor, i, this.chart.options.elements.point.backgroundColor), t._model.borderColor = t.custom && t.custom.borderColor ? t.custom.borderColor : e.getValueAtIndexOrDefault(this.getDataset().borderColor, i, this.chart.options.elements.point.borderColor), t._model.borderWidth = t.custom && t.custom.borderWidth ? t.custom.borderWidth : e.getValueAtIndexOrDefault(this.getDataset().borderWidth, i, this.chart.options.elements.point.borderWidth)
                }
            })
        }
    }, {}],
    17: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.doughnut = {
                animation: { animateRotate: !0, animateScale: !1 },
                aspectRatio: 1,
                hover: { mode: "single" },
                legendCallback: function(t) {
                    var e = [];
                    if (e.push('<ul class="' + t.id + '-legend">'), t.data.datasets.length)
                        for (var i = 0; i < t.data.datasets[0].data.length; ++i) e.push('<li><span style="background-color:' + t.data.datasets[0].backgroundColor[i] + '"></span>'), t.data.labels[i] && e.push(t.data.labels[i]), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function(t) {
                            var i = t.data;
                            return i.labels.length && i.datasets.length ? i.labels.map(function(s, a) {
                                var o = t.getDatasetMeta(0),
                                    n = i.datasets[0],
                                    r = o.data[a],
                                    h = r.custom && r.custom.backgroundColor ? r.custom.backgroundColor : e.getValueAtIndexOrDefault(n.backgroundColor, a, this.chart.options.elements.arc.backgroundColor),
                                    l = r.custom && r.custom.borderColor ? r.custom.borderColor : e.getValueAtIndexOrDefault(n.borderColor, a, this.chart.options.elements.arc.borderColor),
                                    c = r.custom && r.custom.borderWidth ? r.custom.borderWidth : e.getValueAtIndexOrDefault(n.borderWidth, a, this.chart.options.elements.arc.borderWidth);
                                return { text: s, fillStyle: h, strokeStyle: l, lineWidth: c, hidden: isNaN(n.data[a]) || o.data[a].hidden, index: a }
                            }, this) : []
                        }
                    },
                    onClick: function(t, e) {
                        var i, s, a, o = e.index,
                            n = this.chart;
                        for (i = 0, s = (n.data.datasets || []).length; s > i; ++i) a = n.getDatasetMeta(i), a.data[o].hidden = !a.data[o].hidden;
                        n.update()
                    }
                },
                cutoutPercentage: 50,
                rotation: Math.PI * -.5,
                circumference: 2 * Math.PI,
                tooltips: { callbacks: { title: function() { return "" }, label: function(t, e) { return e.labels[t.index] + ": " + e.datasets[t.datasetIndex].data[t.index] } } }
            }, t.defaults.pie = e.clone(t.defaults.doughnut), e.extend(t.defaults.pie, { cutoutPercentage: 0 }), t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                linkScales: function() {},
                addElements: function() {
                    var i = this.getMeta();
                    e.each(this.getDataset().data, function(e, s) { i.data[s] = i.data[s] || new t.elements.Arc({ _chart: this.chart.chart, _datasetIndex: this.index, _index: s }) }, this)
                },
                addElementAndReset: function(i, s) {
                    var a = new t.elements.Arc({ _chart: this.chart.chart, _datasetIndex: this.index, _index: i });
                    s && e.isArray(this.getDataset().backgroundColor) && this.getDataset().backgroundColor.splice(i, 0, s), this.getMeta().data.splice(i, 0, a), this.updateElement(a, i, !0)
                },
                getRingIndex: function(t) { for (var e = 0, i = 0; t > i; ++i) this.chart.isDatasetVisible(i) && ++e; return e },
                update: function(t) {
                    var i = this.chart.chartArea.right - this.chart.chartArea.left - this.chart.options.elements.arc.borderWidth,
                        s = this.chart.chartArea.bottom - this.chart.chartArea.top - this.chart.options.elements.arc.borderWidth,
                        a = Math.min(i, s),
                        o = { x: 0, y: 0 };
                    if (this.chart.options.circumference < 2 * Math.PI) {
                        var n = this.chart.options.rotation % (2 * Math.PI);
                        n += 2 * Math.PI * (n >= Math.PI ? -1 : n < -Math.PI ? 1 : 0);
                        var r = n + this.chart.options.circumference,
                            h = { x: Math.cos(n), y: Math.sin(n) },
                            l = { x: Math.cos(r), y: Math.sin(r) },
                            c = 0 >= n && r >= 0 || n <= 2 * Math.PI && 2 * Math.PI <= r,
                            d = n <= .5 * Math.PI && .5 * Math.PI <= r || n <= 2.5 * Math.PI && 2.5 * Math.PI <= r,
                            u = n <= -Math.PI && -Math.PI <= r || n <= Math.PI && Math.PI <= r,
                            f = n <= .5 * -Math.PI && .5 * -Math.PI <= r || n <= 1.5 * Math.PI && 1.5 * Math.PI <= r,
                            g = this.chart.options.cutoutPercentage / 100,
                            m = { x: u ? -1 : Math.min(h.x * (h.x < 0 ? 1 : g), l.x * (l.x < 0 ? 1 : g)), y: f ? -1 : Math.min(h.y * (h.y < 0 ? 1 : g), l.y * (l.y < 0 ? 1 : g)) },
                            p = { x: c ? 1 : Math.max(h.x * (h.x > 0 ? 1 : g), l.x * (l.x > 0 ? 1 : g)), y: d ? 1 : Math.max(h.y * (h.y > 0 ? 1 : g), l.y * (l.y > 0 ? 1 : g)) },
                            b = { width: .5 * (p.x - m.x), height: .5 * (p.y - m.y) };
                        a = Math.min(i / b.width, s / b.height), o = { x: (p.x + m.x) * -.5, y: (p.y + m.y) * -.5 }
                    }
                    this.chart.outerRadius = Math.max(a / 2, 0), this.chart.innerRadius = Math.max(this.chart.options.cutoutPercentage ? this.chart.outerRadius / 100 * this.chart.options.cutoutPercentage : 1, 0), this.chart.radiusLength = (this.chart.outerRadius - this.chart.innerRadius) / this.chart.getVisibleDatasetCount(), this.chart.offsetX = o.x * this.chart.outerRadius, this.chart.offsetY = o.y * this.chart.outerRadius, this.getMeta().total = this.calculateTotal(), this.outerRadius = this.chart.outerRadius - this.chart.radiusLength * this.getRingIndex(this.index), this.innerRadius = this.outerRadius - this.chart.radiusLength, e.each(this.getMeta().data, function(e, i) { this.updateElement(e, i, t) }, this)
                },
                updateElement: function(t, i, s) {
                    var a = (this.chart.chartArea.left + this.chart.chartArea.right) / 2,
                        o = (this.chart.chartArea.top + this.chart.chartArea.bottom) / 2,
                        n = this.chart.options.rotation,
                        r = this.chart.options.rotation,
                        h = s && this.chart.options.animation.animateRotate ? 0 : t.hidden ? 0 : this.calculateCircumference(this.getDataset().data[i]) * (this.chart.options.circumference / (2 * Math.PI)),
                        l = s && this.chart.options.animation.animateScale ? 0 : this.innerRadius,
                        c = s && this.chart.options.animation.animateScale ? 0 : this.outerRadius;
                    e.extend(t, { _chart: this.chart.chart, _datasetIndex: this.index, _index: i, _model: { x: a + this.chart.offsetX, y: o + this.chart.offsetY, startAngle: n, endAngle: r, circumference: h, outerRadius: c, innerRadius: l, backgroundColor: t.custom && t.custom.backgroundColor ? t.custom.backgroundColor : e.getValueAtIndexOrDefault(this.getDataset().backgroundColor, i, this.chart.options.elements.arc.backgroundColor), hoverBackgroundColor: t.custom && t.custom.hoverBackgroundColor ? t.custom.hoverBackgroundColor : e.getValueAtIndexOrDefault(this.getDataset().hoverBackgroundColor, i, this.chart.options.elements.arc.hoverBackgroundColor), borderWidth: t.custom && t.custom.borderWidth ? t.custom.borderWidth : e.getValueAtIndexOrDefault(this.getDataset().borderWidth, i, this.chart.options.elements.arc.borderWidth), borderColor: t.custom && t.custom.borderColor ? t.custom.borderColor : e.getValueAtIndexOrDefault(this.getDataset().borderColor, i, this.chart.options.elements.arc.borderColor), label: e.getValueAtIndexOrDefault(this.getDataset().label, i, this.chart.data.labels[i]) } }), s && this.chart.options.animation.animateRotate || (0 === i ? t._model.startAngle = this.chart.options.rotation : t._model.startAngle = this.getMeta().data[i - 1]._model.endAngle, t._model.endAngle = t._model.startAngle + t._model.circumference), t.pivot()
                },
                draw: function(t) {
                    var i = t || 1;
                    e.each(this.getMeta().data, function(t, e) { t.transition(i).draw() })
                },
                setHoverStyle: function(t) {
                    var i = this.chart.data.datasets[t._datasetIndex],
                        s = t._index;
                    t._model.backgroundColor = t.custom && t.custom.hoverBackgroundColor ? t.custom.hoverBackgroundColor : e.getValueAtIndexOrDefault(i.hoverBackgroundColor, s, e.getHoverColor(t._model.backgroundColor)), t._model.borderColor = t.custom && t.custom.hoverBorderColor ? t.custom.hoverBorderColor : e.getValueAtIndexOrDefault(i.hoverBorderColor, s, e.getHoverColor(t._model.borderColor)), t._model.borderWidth = t.custom && t.custom.hoverBorderWidth ? t.custom.hoverBorderWidth : e.getValueAtIndexOrDefault(i.hoverBorderWidth, s, t._model.borderWidth)
                },
                removeHoverStyle: function(t) {
                    var i = (this.chart.data.datasets[t._datasetIndex], t._index);
                    t._model.backgroundColor = t.custom && t.custom.backgroundColor ? t.custom.backgroundColor : e.getValueAtIndexOrDefault(this.getDataset().backgroundColor, i, this.chart.options.elements.arc.backgroundColor), t._model.borderColor = t.custom && t.custom.borderColor ? t.custom.borderColor : e.getValueAtIndexOrDefault(this.getDataset().borderColor, i, this.chart.options.elements.arc.borderColor), t._model.borderWidth = t.custom && t.custom.borderWidth ? t.custom.borderWidth : e.getValueAtIndexOrDefault(this.getDataset().borderWidth, i, this.chart.options.elements.arc.borderWidth)
                },
                calculateTotal: function() {
                    var t, i = this.getDataset(),
                        s = this.getMeta(),
                        a = 0;
                    return e.each(s.data, function(e, s) { t = i.data[s], isNaN(t) || e.hidden || (a += Math.abs(t)) }), a
                },
                calculateCircumference: function(t) { var e = this.getMeta().total; return e > 0 && !isNaN(t) ? 2 * Math.PI * (t / e) : 0 }
            })
        }
    }, {}],
    18: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.line = { showLines: !0, hover: { mode: "label" }, scales: { xAxes: [{ type: "category", id: "x-axis-0" }], yAxes: [{ type: "linear", id: "y-axis-0" }] } }, t.controllers.line = t.DatasetController.extend({
                addElements: function() {
                    var i = this.getMeta();
                    i.dataset = i.dataset || new t.elements.Line({ _chart: this.chart.chart, _datasetIndex: this.index, _points: i.data }), e.each(this.getDataset().data, function(e, s) { i.data[s] = i.data[s] || new t.elements.Point({ _chart: this.chart.chart, _datasetIndex: this.index, _index: s }) }, this)
                },
                addElementAndReset: function(e) {
                    var i = new t.elements.Point({ _chart: this.chart.chart, _datasetIndex: this.index, _index: e });
                    this.getMeta().data.splice(e, 0, i), this.updateElement(i, e, !0), this.chart.options.showLines && 0 !== this.chart.options.elements.line.tension && this.updateBezierControlPoints()
                },
                update: function(t) {
                    var i, s = this.getMeta(),
                        a = s.dataset,
                        o = s.data,
                        n = this.getScaleForId(s.yAxisID);
                    this.getScaleForId(s.xAxisID);
                    i = n.min < 0 && n.max < 0 ? n.getPixelForValue(n.max) : n.min > 0 && n.max > 0 ? n.getPixelForValue(n.min) : n.getPixelForValue(0), this.chart.options.showLines && (a._scale = n, a._datasetIndex = this.index, a._children = o, void 0 !== this.getDataset().tension && void 0 === this.getDataset().lineTension && (this.getDataset().lineTension = this.getDataset().tension), a._model = { tension: a.custom && a.custom.tension ? a.custom.tension : e.getValueOrDefault(this.getDataset().lineTension, this.chart.options.elements.line.tension), backgroundColor: a.custom && a.custom.backgroundColor ? a.custom.backgroundColor : this.getDataset().backgroundColor || this.chart.options.elements.line.backgroundColor, borderWidth: a.custom && a.custom.borderWidth ? a.custom.borderWidth : this.getDataset().borderWidth || this.chart.options.elements.line.borderWidth, borderColor: a.custom && a.custom.borderColor ? a.custom.borderColor : this.getDataset().borderColor || this.chart.options.elements.line.borderColor, borderCapStyle: a.custom && a.custom.borderCapStyle ? a.custom.borderCapStyle : this.getDataset().borderCapStyle || this.chart.options.elements.line.borderCapStyle, borderDash: a.custom && a.custom.borderDash ? a.custom.borderDash : this.getDataset().borderDash || this.chart.options.elements.line.borderDash, borderDashOffset: a.custom && a.custom.borderDashOffset ? a.custom.borderDashOffset : this.getDataset().borderDashOffset || this.chart.options.elements.line.borderDashOffset, borderJoinStyle: a.custom && a.custom.borderJoinStyle ? a.custom.borderJoinStyle : this.getDataset().borderJoinStyle || this.chart.options.elements.line.borderJoinStyle, fill: a.custom && a.custom.fill ? a.custom.fill : void 0 !== this.getDataset().fill ? this.getDataset().fill : this.chart.options.elements.line.fill, scaleTop: n.top, scaleBottom: n.bottom, scaleZero: i }, a.pivot()), e.each(o, function(e, i) { this.updateElement(e, i, t) }, this), this.chart.options.showLines && 0 !== this.chart.options.elements.line.tension && this.updateBezierControlPoints()
                },
                getPointBackgroundColor: function(t, i) {
                    var s = this.chart.options.elements.point.backgroundColor,
                        a = this.getDataset();
                    return t.custom && t.custom.backgroundColor ? s = t.custom.backgroundColor : a.pointBackgroundColor ? s = e.getValueAtIndexOrDefault(a.pointBackgroundColor, i, s) : a.backgroundColor && (s = a.backgroundColor), s
                },
                getPointBorderColor: function(t, i) {
                    var s = this.chart.options.elements.point.borderColor,
                        a = this.getDataset();
                    return t.custom && t.custom.borderColor ? s = t.custom.borderColor : a.pointBorderColor ? s = e.getValueAtIndexOrDefault(this.getDataset().pointBorderColor, i, s) : a.borderColor && (s = a.borderColor), s
                },
                getPointBorderWidth: function(t, i) {
                    var s = this.chart.options.elements.point.borderWidth,
                        a = this.getDataset();
                    return t.custom && void 0 !== t.custom.borderWidth ? s = t.custom.borderWidth : void 0 !== a.pointBorderWidth ? s = e.getValueAtIndexOrDefault(a.pointBorderWidth, i, s) : void 0 !== a.borderWidth && (s = a.borderWidth), s
                },
                updateElement: function(t, i, s) {
                    var a, o = this.getMeta(),
                        n = this.getScaleForId(o.yAxisID),
                        r = this.getScaleForId(o.xAxisID);
                    a = n.min < 0 && n.max < 0 ? n.getPixelForValue(n.max) : n.min > 0 && n.max > 0 ? n.getPixelForValue(n.min) : n.getPixelForValue(0), t._chart = this.chart.chart, t._xScale = r, t._yScale = n, t._datasetIndex = this.index, t._index = i, void 0 !== this.getDataset().radius && void 0 === this.getDataset().pointRadius && (this.getDataset().pointRadius = this.getDataset().radius), void 0 !== this.getDataset().hitRadius && void 0 === this.getDataset().pointHitRadius && (this.getDataset().pointHitRadius = this.getDataset().hitRadius), t._model = { x: r.getPixelForValue(this.getDataset().data[i], i, this.index, this.chart.isCombo), y: s ? a : this.calculatePointY(this.getDataset().data[i], i, this.index, this.chart.isCombo), radius: t.custom && t.custom.radius ? t.custom.radius : e.getValueAtIndexOrDefault(this.getDataset().pointRadius, i, this.chart.options.elements.point.radius), pointStyle: t.custom && t.custom.pointStyle ? t.custom.pointStyle : e.getValueAtIndexOrDefault(this.getDataset().pointStyle, i, this.chart.options.elements.point.pointStyle), backgroundColor: this.getPointBackgroundColor(t, i), borderColor: this.getPointBorderColor(t, i), borderWidth: this.getPointBorderWidth(t, i), tension: o.dataset._model ? o.dataset._model.tension : 0, hitRadius: t.custom && t.custom.hitRadius ? t.custom.hitRadius : e.getValueAtIndexOrDefault(this.getDataset().pointHitRadius, i, this.chart.options.elements.point.hitRadius) }, t._model.skip = t.custom && t.custom.skip ? t.custom.skip : isNaN(t._model.x) || isNaN(t._model.y)
                },
                calculatePointY: function(t, e, i, s) {
                    var a = this.getMeta(),
                        o = (this.getScaleForId(a.xAxisID), this.getScaleForId(a.yAxisID));
                    if (o.options.stacked) {
                        for (var n = 0, r = 0, h = 0; i > h; h++) {
                            var l = this.chart.data.datasets[h],
                                c = this.chart.getDatasetMeta(h);
                            "line" === c.type && this.chart.isDatasetVisible(h) && (l.data[e] < 0 ? r += l.data[e] || 0 : n += l.data[e] || 0)
                        }
                        return 0 > t ? o.getPixelForValue(r + t) : o.getPixelForValue(n + t)
                    }
                    return o.getPixelForValue(t)
                },
                updateBezierControlPoints: function() {
                    var t = this.getMeta();
                    e.each(t.data, function(i, s) {
                        var a = e.splineCurve(e.previousItem(t.data, s)._model, i._model, e.nextItem(t.data, s)._model, t.dataset._model.tension);
                        i._model.controlPointPreviousX = Math.max(Math.min(a.previous.x, this.chart.chartArea.right), this.chart.chartArea.left), i._model.controlPointPreviousY = Math.max(Math.min(a.previous.y, this.chart.chartArea.bottom), this.chart.chartArea.top), i._model.controlPointNextX = Math.max(Math.min(a.next.x, this.chart.chartArea.right), this.chart.chartArea.left), i._model.controlPointNextY = Math.max(Math.min(a.next.y, this.chart.chartArea.bottom), this.chart.chartArea.top), i.pivot()
                    }, this)
                },
                draw: function(t) {
                    var i = this.getMeta(),
                        s = t || 1;
                    e.each(i.data, function(t) { t.transition(s) }), this.chart.options.showLines && i.dataset.transition(s).draw(), e.each(i.data, function(t) { t.draw() })
                },
                setHoverStyle: function(t) {
                    var i = this.chart.data.datasets[t._datasetIndex],
                        s = t._index;
                    t._model.radius = t.custom && t.custom.hoverRadius ? t.custom.hoverRadius : e.getValueAtIndexOrDefault(i.pointHoverRadius, s, this.chart.options.elements.point.hoverRadius), t._model.backgroundColor = t.custom && t.custom.hoverBackgroundColor ? t.custom.hoverBackgroundColor : e.getValueAtIndexOrDefault(i.pointHoverBackgroundColor, s, e.getHoverColor(t._model.backgroundColor)), t._model.borderColor = t.custom && t.custom.hoverBorderColor ? t.custom.hoverBorderColor : e.getValueAtIndexOrDefault(i.pointHoverBorderColor, s, e.getHoverColor(t._model.borderColor)), t._model.borderWidth = t.custom && t.custom.hoverBorderWidth ? t.custom.hoverBorderWidth : e.getValueAtIndexOrDefault(i.pointHoverBorderWidth, s, t._model.borderWidth)
                },
                removeHoverStyle: function(t) {
                    var i = (this.chart.data.datasets[t._datasetIndex], t._index);
                    void 0 !== this.getDataset().radius && void 0 === this.getDataset().pointRadius && (this.getDataset().pointRadius = this.getDataset().radius), t._model.radius = t.custom && t.custom.radius ? t.custom.radius : e.getValueAtIndexOrDefault(this.getDataset().pointRadius, i, this.chart.options.elements.point.radius), t._model.backgroundColor = this.getPointBackgroundColor(t, i), t._model.borderColor = this.getPointBorderColor(t, i), t._model.borderWidth = this.getPointBorderWidth(t, i)
                }
            })
        }
    }, {}],
    19: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.polarArea = {
                scale: { type: "radialLinear", lineArc: !0 },
                animation: { animateRotate: !0, animateScale: !0 },
                aspectRatio: 1,
                legendCallback: function(t) {
                    var e = [];
                    if (e.push('<ul class="' + t.id + '-legend">'), t.data.datasets.length)
                        for (var i = 0; i < t.data.datasets[0].data.length; ++i) e.push('<li><span style="background-color:' + t.data.datasets[0].backgroundColor[i] + '">'), t.data.labels[i] && e.push(t.data.labels[i]), e.push("</span></li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function(t) {
                            var i = t.data;
                            return i.labels.length && i.datasets.length ? i.labels.map(function(s, a) {
                                var o = t.getDatasetMeta(0),
                                    n = i.datasets[0],
                                    r = o.data[a],
                                    h = r.custom && r.custom.backgroundColor ? r.custom.backgroundColor : e.getValueAtIndexOrDefault(n.backgroundColor, a, this.chart.options.elements.arc.backgroundColor),
                                    l = r.custom && r.custom.borderColor ? r.custom.borderColor : e.getValueAtIndexOrDefault(n.borderColor, a, this.chart.options.elements.arc.borderColor),
                                    c = r.custom && r.custom.borderWidth ? r.custom.borderWidth : e.getValueAtIndexOrDefault(n.borderWidth, a, this.chart.options.elements.arc.borderWidth);
                                return { text: s, fillStyle: h, strokeStyle: l, lineWidth: c, hidden: isNaN(n.data[a]) || o.data[a].hidden, index: a }
                            }, this) : []
                        }
                    },
                    onClick: function(t, e) {
                        var i, s, a, o = e.index,
                            n = this.chart;
                        for (i = 0, s = (n.data.datasets || []).length; s > i; ++i) a = n.getDatasetMeta(i), a.data[o].hidden = !a.data[o].hidden;
                        n.update()
                    }
                },
                tooltips: { callbacks: { title: function() { return "" }, label: function(t, e) { return e.labels[t.index] + ": " + t.yLabel } } }
            }, t.controllers.polarArea = t.DatasetController.extend({
                linkScales: function() {},
                addElements: function() {
                    var i = this.getMeta();
                    e.each(this.getDataset().data, function(e, s) { i.data[s] = i.data[s] || new t.elements.Arc({ _chart: this.chart.chart, _datasetIndex: this.index, _index: s }) }, this)
                },
                addElementAndReset: function(e) {
                    var i = new t.elements.Arc({ _chart: this.chart.chart, _datasetIndex: this.index, _index: e });
                    this.getMeta().data.splice(e, 0, i), this.updateElement(i, e, !0)
                },
                update: function(t) {
                    var i = this.getMeta(),
                        s = Math.min(this.chart.chartArea.right - this.chart.chartArea.left, this.chart.chartArea.bottom - this.chart.chartArea.top);
                    this.chart.outerRadius = Math.max((s - this.chart.options.elements.arc.borderWidth / 2) / 2, 0), this.chart.innerRadius = Math.max(this.chart.options.cutoutPercentage ? this.chart.outerRadius / 100 * this.chart.options.cutoutPercentage : 1, 0), this.chart.radiusLength = (this.chart.outerRadius - this.chart.innerRadius) / this.chart.getVisibleDatasetCount(), this.outerRadius = this.chart.outerRadius - this.chart.radiusLength * this.index, this.innerRadius = this.outerRadius - this.chart.radiusLength, i.count = this.countVisibleElements(), e.each(i.data, function(e, i) { this.updateElement(e, i, t) }, this)
                },
                updateElement: function(t, i, s) {
                    for (var a = this.calculateCircumference(this.getDataset().data[i]), o = (this.chart.chartArea.left + this.chart.chartArea.right) / 2, n = (this.chart.chartArea.top + this.chart.chartArea.bottom) / 2, r = 0, h = this.getMeta(), l = 0; i > l; ++l) isNaN(this.getDataset().data[l]) || h.data[l].hidden || ++r;
                    var c = t.hidden ? 0 : this.chart.scale.getDistanceFromCenterForValue(this.getDataset().data[i]),
                        d = -.5 * Math.PI + a * r,
                        u = d + (t.hidden ? 0 : a),
                        f = { x: o, y: n, innerRadius: 0, outerRadius: this.chart.options.animation.animateScale ? 0 : this.chart.scale.getDistanceFromCenterForValue(this.getDataset().data[i]), startAngle: this.chart.options.animation.animateRotate ? Math.PI * -.5 : d, endAngle: this.chart.options.animation.animateRotate ? Math.PI * -.5 : u, backgroundColor: t.custom && t.custom.backgroundColor ? t.custom.backgroundColor : e.getValueAtIndexOrDefault(this.getDataset().backgroundColor, i, this.chart.options.elements.arc.backgroundColor), borderWidth: t.custom && t.custom.borderWidth ? t.custom.borderWidth : e.getValueAtIndexOrDefault(this.getDataset().borderWidth, i, this.chart.options.elements.arc.borderWidth), borderColor: t.custom && t.custom.borderColor ? t.custom.borderColor : e.getValueAtIndexOrDefault(this.getDataset().borderColor, i, this.chart.options.elements.arc.borderColor), label: e.getValueAtIndexOrDefault(this.chart.data.labels, i, this.chart.data.labels[i]) };
                    e.extend(t, { _chart: this.chart.chart, _datasetIndex: this.index, _index: i, _scale: this.chart.scale, _model: s ? f : { x: o, y: n, innerRadius: 0, outerRadius: c, startAngle: d, endAngle: u, backgroundColor: t.custom && t.custom.backgroundColor ? t.custom.backgroundColor : e.getValueAtIndexOrDefault(this.getDataset().backgroundColor, i, this.chart.options.elements.arc.backgroundColor), borderWidth: t.custom && t.custom.borderWidth ? t.custom.borderWidth : e.getValueAtIndexOrDefault(this.getDataset().borderWidth, i, this.chart.options.elements.arc.borderWidth), borderColor: t.custom && t.custom.borderColor ? t.custom.borderColor : e.getValueAtIndexOrDefault(this.getDataset().borderColor, i, this.chart.options.elements.arc.borderColor), label: e.getValueAtIndexOrDefault(this.chart.data.labels, i, this.chart.data.labels[i]) } }), t.pivot()
                },
                draw: function(t) {
                    var i = t || 1;
                    e.each(this.getMeta().data, function(t, e) { t.transition(i).draw() })
                },
                setHoverStyle: function(t) {
                    var i = this.chart.data.datasets[t._datasetIndex],
                        s = t._index;
                    t._model.backgroundColor = t.custom && t.custom.hoverBackgroundColor ? t.custom.hoverBackgroundColor : e.getValueAtIndexOrDefault(i.hoverBackgroundColor, s, e.getHoverColor(t._model.backgroundColor)), t._model.borderColor = t.custom && t.custom.hoverBorderColor ? t.custom.hoverBorderColor : e.getValueAtIndexOrDefault(i.hoverBorderColor, s, e.getHoverColor(t._model.borderColor)), t._model.borderWidth = t.custom && t.custom.hoverBorderWidth ? t.custom.hoverBorderWidth : e.getValueAtIndexOrDefault(i.hoverBorderWidth, s, t._model.borderWidth)
                },
                removeHoverStyle: function(t) {
                    var i = (this.chart.data.datasets[t._datasetIndex], t._index);
                    t._model.backgroundColor = t.custom && t.custom.backgroundColor ? t.custom.backgroundColor : e.getValueAtIndexOrDefault(this.getDataset().backgroundColor, i, this.chart.options.elements.arc.backgroundColor), t._model.borderColor = t.custom && t.custom.borderColor ? t.custom.borderColor : e.getValueAtIndexOrDefault(this.getDataset().borderColor, i, this.chart.options.elements.arc.borderColor), t._model.borderWidth = t.custom && t.custom.borderWidth ? t.custom.borderWidth : e.getValueAtIndexOrDefault(this.getDataset().borderWidth, i, this.chart.options.elements.arc.borderWidth)
                },
                countVisibleElements: function() {
                    var t = this.getDataset(),
                        i = this.getMeta(),
                        s = 0;
                    return e.each(i.data, function(e, i) { isNaN(t.data[i]) || e.hidden || s++ }), s
                },
                calculateCircumference: function(t) { var e = this.getMeta().count; return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0 }
            })
        }
    }, {}],
    20: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.radar = { scale: { type: "radialLinear" }, elements: { line: { tension: 0 } } }, t.controllers.radar = t.DatasetController.extend({
                linkScales: function() {},
                addElements: function() {
                    var i = this.getMeta();
                    i.dataset = i.dataset || new t.elements.Line({ _chart: this.chart.chart, _datasetIndex: this.index, _points: i.data, _loop: !0 }), e.each(this.getDataset().data, function(e, s) { i.data[s] = i.data[s] || new t.elements.Point({ _chart: this.chart.chart, _datasetIndex: this.index, _index: s, _model: { x: 0, y: 0 } }) }, this)
                },
                addElementAndReset: function(e) {
                    var i = new t.elements.Point({ _chart: this.chart.chart, _datasetIndex: this.index, _index: e });
                    this.getMeta().data.splice(e, 0, i), this.updateElement(i, e, !0), this.updateBezierControlPoints()
                },
                update: function(t) {
                    var i, s = this.getMeta(),
                        a = s.dataset,
                        o = s.data,
                        n = this.chart.scale;
                    i = n.min < 0 && n.max < 0 ? n.getPointPositionForValue(0, n.max) : n.min > 0 && n.max > 0 ? n.getPointPositionForValue(0, n.min) : n.getPointPositionForValue(0, 0), void 0 !== this.getDataset().tension && void 0 === this.getDataset().lineTension && (this.getDataset().lineTension = this.getDataset().tension), e.extend(s.dataset, { _datasetIndex: this.index, _children: o, _model: { tension: a.custom && a.custom.tension ? a.custom.tension : e.getValueOrDefault(this.getDataset().lineTension, this.chart.options.elements.line.tension), backgroundColor: a.custom && a.custom.backgroundColor ? a.custom.backgroundColor : this.getDataset().backgroundColor || this.chart.options.elements.line.backgroundColor, borderWidth: a.custom && a.custom.borderWidth ? a.custom.borderWidth : this.getDataset().borderWidth || this.chart.options.elements.line.borderWidth, borderColor: a.custom && a.custom.borderColor ? a.custom.borderColor : this.getDataset().borderColor || this.chart.options.elements.line.borderColor, fill: a.custom && a.custom.fill ? a.custom.fill : void 0 !== this.getDataset().fill ? this.getDataset().fill : this.chart.options.elements.line.fill, borderCapStyle: a.custom && a.custom.borderCapStyle ? a.custom.borderCapStyle : this.getDataset().borderCapStyle || this.chart.options.elements.line.borderCapStyle, borderDash: a.custom && a.custom.borderDash ? a.custom.borderDash : this.getDataset().borderDash || this.chart.options.elements.line.borderDash, borderDashOffset: a.custom && a.custom.borderDashOffset ? a.custom.borderDashOffset : this.getDataset().borderDashOffset || this.chart.options.elements.line.borderDashOffset, borderJoinStyle: a.custom && a.custom.borderJoinStyle ? a.custom.borderJoinStyle : this.getDataset().borderJoinStyle || this.chart.options.elements.line.borderJoinStyle, scaleTop: n.top, scaleBottom: n.bottom, scaleZero: i } }), s.dataset.pivot(), e.each(o, function(e, i) { this.updateElement(e, i, t) }, this), this.updateBezierControlPoints()
                },
                updateElement: function(t, i, s) {
                    var a = this.chart.scale.getPointPositionForValue(i, this.getDataset().data[i]);
                    e.extend(t, { _datasetIndex: this.index, _index: i, _scale: this.chart.scale, _model: { x: s ? this.chart.scale.xCenter : a.x, y: s ? this.chart.scale.yCenter : a.y, tension: t.custom && t.custom.tension ? t.custom.tension : e.getValueOrDefault(this.getDataset().tension, this.chart.options.elements.line.tension), radius: t.custom && t.custom.radius ? t.custom.radius : e.getValueAtIndexOrDefault(this.getDataset().pointRadius, i, this.chart.options.elements.point.radius), backgroundColor: t.custom && t.custom.backgroundColor ? t.custom.backgroundColor : e.getValueAtIndexOrDefault(this.getDataset().pointBackgroundColor, i, this.chart.options.elements.point.backgroundColor), borderColor: t.custom && t.custom.borderColor ? t.custom.borderColor : e.getValueAtIndexOrDefault(this.getDataset().pointBorderColor, i, this.chart.options.elements.point.borderColor), borderWidth: t.custom && t.custom.borderWidth ? t.custom.borderWidth : e.getValueAtIndexOrDefault(this.getDataset().pointBorderWidth, i, this.chart.options.elements.point.borderWidth), pointStyle: t.custom && t.custom.pointStyle ? t.custom.pointStyle : e.getValueAtIndexOrDefault(this.getDataset().pointStyle, i, this.chart.options.elements.point.pointStyle), hitRadius: t.custom && t.custom.hitRadius ? t.custom.hitRadius : e.getValueAtIndexOrDefault(this.getDataset().hitRadius, i, this.chart.options.elements.point.hitRadius) } }), t._model.skip = t.custom && t.custom.skip ? t.custom.skip : isNaN(t._model.x) || isNaN(t._model.y)
                },
                updateBezierControlPoints: function() {
                    var t = this.getMeta();
                    e.each(t.data, function(i, s) {
                        var a = e.splineCurve(e.previousItem(t.data, s, !0)._model, i._model, e.nextItem(t.data, s, !0)._model, i._model.tension);
                        i._model.controlPointPreviousX = Math.max(Math.min(a.previous.x, this.chart.chartArea.right), this.chart.chartArea.left), i._model.controlPointPreviousY = Math.max(Math.min(a.previous.y, this.chart.chartArea.bottom), this.chart.chartArea.top), i._model.controlPointNextX = Math.max(Math.min(a.next.x, this.chart.chartArea.right), this.chart.chartArea.left), i._model.controlPointNextY = Math.max(Math.min(a.next.y, this.chart.chartArea.bottom), this.chart.chartArea.top), i.pivot()
                    }, this)
                },
                draw: function(t) {
                    var i = this.getMeta(),
                        s = t || 1;
                    e.each(i.data, function(t, e) { t.transition(s) }), i.dataset.transition(s).draw(), e.each(i.data, function(t) { t.draw() })
                },
                setHoverStyle: function(t) {
                    var i = this.chart.data.datasets[t._datasetIndex],
                        s = t._index;
                    t._model.radius = t.custom && t.custom.hoverRadius ? t.custom.hoverRadius : e.getValueAtIndexOrDefault(i.pointHoverRadius, s, this.chart.options.elements.point.hoverRadius), t._model.backgroundColor = t.custom && t.custom.hoverBackgroundColor ? t.custom.hoverBackgroundColor : e.getValueAtIndexOrDefault(i.pointHoverBackgroundColor, s, e.getHoverColor(t._model.backgroundColor)), t._model.borderColor = t.custom && t.custom.hoverBorderColor ? t.custom.hoverBorderColor : e.getValueAtIndexOrDefault(i.pointHoverBorderColor, s, e.getHoverColor(t._model.borderColor)), t._model.borderWidth = t.custom && t.custom.hoverBorderWidth ? t.custom.hoverBorderWidth : e.getValueAtIndexOrDefault(i.pointHoverBorderWidth, s, t._model.borderWidth)
                },
                removeHoverStyle: function(t) {
                    var i = (this.chart.data.datasets[t._datasetIndex], t._index);
                    t._model.radius = t.custom && t.custom.radius ? t.custom.radius : e.getValueAtIndexOrDefault(this.getDataset().radius, i, this.chart.options.elements.point.radius), t._model.backgroundColor = t.custom && t.custom.backgroundColor ? t.custom.backgroundColor : e.getValueAtIndexOrDefault(this.getDataset().pointBackgroundColor, i, this.chart.options.elements.point.backgroundColor), t._model.borderColor = t.custom && t.custom.borderColor ? t.custom.borderColor : e.getValueAtIndexOrDefault(this.getDataset().pointBorderColor, i, this.chart.options.elements.point.borderColor), t._model.borderWidth = t.custom && t.custom.borderWidth ? t.custom.borderWidth : e.getValueAtIndexOrDefault(this.getDataset().pointBorderWidth, i, this.chart.options.elements.point.borderWidth)
                }
            })
        }
    }, {}],
    21: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.global.animation = { duration: 1e3, easing: "easeOutQuart", onProgress: e.noop, onComplete: e.noop }, t.Animation = t.Element.extend({ currentStep: null, numSteps: 60, easing: "", render: null, onAnimationProgress: null, onAnimationComplete: null }), t.animationService = {
                frameDuration: 17,
                animations: [],
                dropFrames: 0,
                request: null,
                addAnimation: function(t, e, i, s) {
                    s || (t.animating = !0);
                    for (var a = 0; a < this.animations.length; ++a)
                        if (this.animations[a].chartInstance === t) return void(this.animations[a].animationObject = e);
                    this.animations.push({ chartInstance: t, animationObject: e }), 1 === this.animations.length && this.requestAnimationFrame()
                },
                cancelAnimation: function(t) { var i = e.findIndex(this.animations, function(e) { return e.chartInstance === t }); - 1 !== i && (this.animations.splice(i, 1), t.animating = !1) },
                requestAnimationFrame: function() {
                    var t = this;
                    null === t.request && (t.request = e.requestAnimFrame.call(window, function() { t.request = null, t.startDigest() }))
                },
                startDigest: function() {
                    var t = Date.now(),
                        e = 0;
                    this.dropFrames > 1 && (e = Math.floor(this.dropFrames), this.dropFrames = this.dropFrames % 1);
                    for (var i = 0; i < this.animations.length;) null === this.animations[i].animationObject.currentStep && (this.animations[i].animationObject.currentStep = 0), this.animations[i].animationObject.currentStep += 1 + e, this.animations[i].animationObject.currentStep > this.animations[i].animationObject.numSteps && (this.animations[i].animationObject.currentStep = this.animations[i].animationObject.numSteps), this.animations[i].animationObject.render(this.animations[i].chartInstance, this.animations[i].animationObject), this.animations[i].animationObject.onAnimationProgress && this.animations[i].animationObject.onAnimationProgress.call && this.animations[i].animationObject.onAnimationProgress.call(this.animations[i].chartInstance, this.animations[i]), this.animations[i].animationObject.currentStep === this.animations[i].animationObject.numSteps ? (this.animations[i].animationObject.onAnimationComplete && this.animations[i].animationObject.onAnimationComplete.call && this.animations[i].animationObject.onAnimationComplete.call(this.animations[i].chartInstance, this.animations[i]), this.animations[i].chartInstance.animating = !1, this.animations.splice(i, 1)) : ++i;
                    var s = Date.now(),
                        a = (s - t) / this.frameDuration;
                    this.dropFrames += a, this.animations.length > 0 && this.requestAnimationFrame()
                }
            }
        }
    }, {}],
    22: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.types = {}, t.instances = {}, t.controllers = {}, t.Controller = function(i) { return this.chart = i, this.config = i.config, this.options = this.config.options = e.configMerge(t.defaults.global, t.defaults[this.config.type], this.config.options || {}), this.id = e.uid(), Object.defineProperty(this, "data", { get: function() { return this.config.data } }), t.instances[this.id] = this, this.options.responsive && this.resize(!0), this.initialize(), this }, e.extend(t.Controller.prototype, {
                initialize: function() { return t.pluginService.notifyPlugins("beforeInit", [this]), this.bindEvents(), this.ensureScalesHaveIDs(), this.buildOrUpdateControllers(), this.buildScales(), this.buildSurroundingItems(), this.updateLayout(), this.resetElements(), this.initToolTip(), this.update(), t.pluginService.notifyPlugins("afterInit", [this]), this },
                clear: function() { return e.clear(this.chart), this },
                stop: function() { return t.animationService.cancelAnimation(this), this },
                resize: function(t) {
                    var i = this.chart.canvas,
                        s = e.getMaximumWidth(this.chart.canvas),
                        a = this.options.maintainAspectRatio && isNaN(this.chart.aspectRatio) === !1 && isFinite(this.chart.aspectRatio) && 0 !== this.chart.aspectRatio ? s / this.chart.aspectRatio : e.getMaximumHeight(this.chart.canvas),
                        o = this.chart.width !== s || this.chart.height !== a;
                    return o ? (i.width = this.chart.width = s, i.height = this.chart.height = a, e.retinaScale(this.chart), t || (this.stop(), this.update(this.options.responsiveAnimationDuration)), this) : this
                },
                ensureScalesHaveIDs: function() {
                    var t = "x-axis-",
                        i = "y-axis-";
                    this.options.scales && (this.options.scales.xAxes && this.options.scales.xAxes.length && e.each(this.options.scales.xAxes, function(e, i) { e.id = e.id || t + i }), this.options.scales.yAxes && this.options.scales.yAxes.length && e.each(this.options.scales.yAxes, function(t, e) { t.id = t.id || i + e }))
                },
                buildScales: function() {
                    if (this.scales = {}, this.options.scales && (this.options.scales.xAxes && this.options.scales.xAxes.length && e.each(this.options.scales.xAxes, function(i, s) {
                            var a = e.getValueOrDefault(i.type, "category"),
                                o = t.scaleService.getScaleConstructor(a);
                            if (o) {
                                var n = new o({ ctx: this.chart.ctx, options: i, chart: this, id: i.id });
                                this.scales[n.id] = n
                            }
                        }, this), this.options.scales.yAxes && this.options.scales.yAxes.length && e.each(this.options.scales.yAxes, function(i, s) {
                            var a = e.getValueOrDefault(i.type, "linear"),
                                o = t.scaleService.getScaleConstructor(a);
                            if (o) {
                                var n = new o({ ctx: this.chart.ctx, options: i, chart: this, id: i.id });
                                this.scales[n.id] = n
                            }
                        }, this)), this.options.scale) {
                        var i = t.scaleService.getScaleConstructor(this.options.scale.type);
                        if (i) {
                            var s = new i({ ctx: this.chart.ctx, options: this.options.scale, chart: this });
                            this.scale = s, this.scales.radialScale = s
                        }
                    }
                    t.scaleService.addScalesToLayout(this)
                },
                buildSurroundingItems: function() { this.options.title && (this.titleBlock = new t.Title({ ctx: this.chart.ctx, options: this.options.title, chart: this }), t.layoutService.addBox(this, this.titleBlock)), this.options.legend && (this.legend = new t.Legend({ ctx: this.chart.ctx, options: this.options.legend, chart: this }), t.layoutService.addBox(this, this.legend)) },
                updateLayout: function() { t.layoutService.update(this, this.chart.width, this.chart.height) },
                buildOrUpdateControllers: function() {
                    var i = [],
                        s = [];
                    if (e.each(this.data.datasets, function(e, a) {
                            var o = this.getDatasetMeta(a);
                            o.type || (o.type = e.type || this.config.type), i.push(o.type), o.controller ? o.controller.updateIndex(a) : (o.controller = new t.controllers[o.type](this, a), s.push(o.controller))
                        }, this), i.length > 1)
                        for (var a = 1; a < i.length; a++)
                            if (i[a] !== i[a - 1]) { this.isCombo = !0; break }
                    return s
                },
                resetElements: function() { e.each(this.data.datasets, function(t, e) { this.getDatasetMeta(e).controller.reset() }, this) },
                update: function(i, s) {
                    t.pluginService.notifyPlugins("beforeUpdate", [this]), this.tooltip._data = this.data;
                    var a = this.buildOrUpdateControllers();
                    e.each(this.data.datasets, function(t, e) { this.getDatasetMeta(e).controller.buildOrUpdateElements() }, this), t.layoutService.update(this, this.chart.width, this.chart.height), t.pluginService.notifyPlugins("afterScaleUpdate", [this]), e.each(a, function(t) { t.reset() }), e.each(this.data.datasets, function(t, e) { this.getDatasetMeta(e).controller.update() }, this), t.pluginService.notifyPlugins("afterUpdate", [this]), this.render(i, s)
                },
                render: function(i, s) {
                    if (t.pluginService.notifyPlugins("beforeRender", [this]), this.options.animation && ("undefined" != typeof i && 0 !== i || "undefined" == typeof i && 0 !== this.options.animation.duration)) {
                        var a = new t.Animation;
                        a.numSteps = (i || this.options.animation.duration) / 16.66, a.easing = this.options.animation.easing, a.render = function(t, i) {
                            var s = e.easingEffects[i.easing],
                                a = i.currentStep / i.numSteps,
                                o = s(a);
                            t.draw(o, a, i.currentStep)
                        }, a.onAnimationProgress = this.options.animation.onProgress, a.onAnimationComplete = this.options.animation.onComplete, t.animationService.addAnimation(this, a, i, s)
                    } else this.draw(), this.options.animation && this.options.animation.onComplete && this.options.animation.onComplete.call && this.options.animation.onComplete.call(this);
                    return this
                },
                draw: function(i) {
                    var s = i || 1;
                    this.clear(), t.pluginService.notifyPlugins("beforeDraw", [this, s]), e.each(this.boxes, function(t) { t.draw(this.chartArea) }, this), this.scale && this.scale.draw(), this.chart.ctx.save(), this.chart.ctx.beginPath(), this.chart.ctx.rect(this.chartArea.left, this.chartArea.top, this.chartArea.right - this.chartArea.left, this.chartArea.bottom - this.chartArea.top), this.chart.ctx.clip(), e.each(this.data.datasets, function(t, e) { this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.draw(i) }, this, !0), this.chart.ctx.restore(), this.tooltip.transition(s).draw(), t.pluginService.notifyPlugins("afterDraw", [this, s])
                },
                getElementAtEvent: function(t) {
                    var i = e.getRelativePosition(t, this.chart),
                        s = [];
                    return e.each(this.data.datasets, function(t, a) {
                        if (this.isDatasetVisible(a)) {
                            var o = this.getDatasetMeta(a);
                            e.each(o.data, function(t, e) { return t.inRange(i.x, i.y) ? (s.push(t), s) : void 0 })
                        }
                    }, this), s
                },
                getElementsAtEvent: function(t) {
                    var i = e.getRelativePosition(t, this.chart),
                        s = [],
                        a = function() {
                            if (this.data.datasets)
                                for (var t = 0; t < this.data.datasets.length; t++) {
                                    var e = this.getDatasetMeta(t);
                                    if (this.isDatasetVisible(t))
                                        for (var s = 0; s < e.data.length; s++)
                                            if (e.data[s].inRange(i.x, i.y)) return e.data[s]
                                }
                        }.call(this);
                    return a ? (e.each(this.data.datasets, function(t, e) {
                        if (this.isDatasetVisible(e)) {
                            var i = this.getDatasetMeta(e);
                            s.push(i.data[a._index])
                        }
                    }, this), s) : s
                },
                getDatasetAtEvent: function(t) { var e = this.getElementAtEvent(t); return e.length > 0 && (e = this.getDatasetMeta(e[0]._datasetIndex).data), e },
                getDatasetMeta: function(t) {
                    var e = this.data.datasets[t];
                    e._meta || (e._meta = {});
                    var i = e._meta[this.id];
                    return i || (i = e._meta[this.id] = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null }), i
                },
                getVisibleDatasetCount: function() { for (var t = 0, e = 0, i = this.data.datasets.length; i > e; ++e) this.isDatasetVisible(e) && t++; return t },
                isDatasetVisible: function(t) { var e = this.getDatasetMeta(t); return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden },
                generateLegend: function() { return this.options.legendCallback(this) },
                destroy: function() {
                    this.clear(), e.unbindEvents(this, this.events), e.removeResizeListener(this.chart.canvas.parentNode);
                    var i = this.chart.canvas;
                    i.width = this.chart.width, i.height = this.chart.height, void 0 !== this.chart.originalDevicePixelRatio && this.chart.ctx.scale(1 / this.chart.originalDevicePixelRatio, 1 / this.chart.originalDevicePixelRatio), i.style.width = this.chart.originalCanvasStyleWidth, i.style.height = this.chart.originalCanvasStyleHeight, t.pluginService.notifyPlugins("destroy", [this]), delete t.instances[this.id]
                },
                toBase64Image: function() { return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments) },
                initToolTip: function() { this.tooltip = new t.Tooltip({ _chart: this.chart, _chartInstance: this, _data: this.data, _options: this.options }, this) },
                bindEvents: function() { e.bindEvents(this, this.options.events, function(t) { this.eventHandler(t) }) },
                eventHandler: function(t) {
                    if (this.lastActive = this.lastActive || [], this.lastTooltipActive = this.lastTooltipActive || [], "mouseout" === t.type) this.active = [], this.tooltipActive = [];
                    else {
                        var i = this,
                            s = function(e) {
                                switch (e) {
                                    case "single":
                                        return i.getElementAtEvent(t);
                                    case "label":
                                        return i.getElementsAtEvent(t);
                                    case "dataset":
                                        return i.getDatasetAtEvent(t);
                                    default:
                                        return t
                                }
                            };
                        this.active = s(this.options.hover.mode), this.tooltipActive = s(this.options.tooltips.mode)
                    }
                    if (this.options.hover.onHover && this.options.hover.onHover.call(this, this.active), ("mouseup" === t.type || "click" === t.type) && (this.options.onClick && this.options.onClick.call(this, t, this.active), this.legend && this.legend.handleEvent && this.legend.handleEvent(t)), this.lastActive.length) switch (this.options.hover.mode) {
                        case "single":
                            this.getDatasetMeta(this.lastActive[0]._datasetIndex).controller.removeHoverStyle(this.lastActive[0], this.lastActive[0]._datasetIndex, this.lastActive[0]._index);
                            break;
                        case "label":
                        case "dataset":
                            for (var a = 0; a < this.lastActive.length; a++) this.lastActive[a] && this.getDatasetMeta(this.lastActive[a]._datasetIndex).controller.removeHoverStyle(this.lastActive[a], this.lastActive[a]._datasetIndex, this.lastActive[a]._index);
                    }
                    if (this.active.length && this.options.hover.mode) switch (this.options.hover.mode) {
                        case "single":
                            this.getDatasetMeta(this.active[0]._datasetIndex).controller.setHoverStyle(this.active[0]);
                            break;
                        case "label":
                        case "dataset":
                            for (var o = 0; o < this.active.length; o++) this.active[o] && this.getDatasetMeta(this.active[o]._datasetIndex).controller.setHoverStyle(this.active[o])
                    }
                    if ((this.options.tooltips.enabled || this.options.tooltips.custom) && (this.tooltip.initialize(), this.tooltip._active = this.tooltipActive, this.tooltip.update(!0)), this.tooltip.pivot(), !this.animating) {
                        var n;
                        e.each(this.active, function(t, e) { t !== this.lastActive[e] && (n = !0) }, this), e.each(this.tooltipActive, function(t, e) { t !== this.lastTooltipActive[e] && (n = !0) }, this), (this.lastActive.length !== this.active.length || this.lastTooltipActive.length !== this.tooltipActive.length || n) && (this.stop(), (this.options.tooltips.enabled || this.options.tooltips.custom) && this.tooltip.update(!0), this.render(this.options.hover.animationDuration, !0))
                    }
                    return this.lastActive = this.active, this.lastTooltipActive = this.tooltipActive, this
                }
            })
        }
    }, {}],
    23: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                i = e.noop;
            t.DatasetController = function(t, e) { this.initialize.call(this, t, e) }, e.extend(t.DatasetController.prototype, {
                initialize: function(t, e) { this.chart = t, this.index = e, this.linkScales(), this.addElements() },
                updateIndex: function(t) { this.index = t },
                linkScales: function() {
                    var t = this.getMeta(),
                        e = this.getDataset();
                    null === t.xAxisID && (t.xAxisID = e.xAxisID || this.chart.options.scales.xAxes[0].id), null === t.yAxisID && (t.yAxisID = e.yAxisID || this.chart.options.scales.yAxes[0].id)
                },
                getDataset: function() { return this.chart.data.datasets[this.index] },
                getMeta: function() { return this.chart.getDatasetMeta(this.index) },
                getScaleForId: function(t) { return this.chart.scales[t] },
                reset: function() { this.update(!0) },
                buildOrUpdateElements: function() {
                    var t = this.getMeta(),
                        e = t.data,
                        i = this.getDataset().data.length,
                        s = e.length;
                    if (s > i) e.splice(i, s - i);
                    else if (i > s)
                        for (var a = s; i > a; ++a) this.addElementAndReset(a)
                },
                addElements: i,
                addElementAndReset: i,
                draw: i,
                removeHoverStyle: i,
                setHoverStyle: i,
                update: i
            }), t.DatasetController.extend = e.inherits
        }
    }, {}],
    24: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.elements = {}, t.Element = function(t) { e.extend(this, t), this.initialize.apply(this, arguments) }, e.extend(t.Element.prototype, {
                initialize: function() { this.hidden = !1 },
                pivot: function() { return this._view || (this._view = e.clone(this._model)), this._start = e.clone(this._view), this },
                transition: function(t) {
                    return this._view || (this._view = e.clone(this._model)), 1 === t ? (this._view = this._model, this._start = null, this) : (this._start || this.pivot(), e.each(this._model, function(i, s) {
                        if ("_" !== s[0] && this._model.hasOwnProperty(s))
                            if (this._view.hasOwnProperty(s))
                                if (i === this._view[s]);
                                else if ("string" == typeof i) try {
                                var a = e.color(this._start[s]).mix(e.color(this._model[s]), t);
                                this._view[s] = a.rgbString()
                            } catch (o) { this._view[s] = i } else if ("number" == typeof i) {
                                var n = void 0 !== this._start[s] && isNaN(this._start[s]) === !1 ? this._start[s] : 0;
                                this._view[s] = (this._model[s] - n) * t + n
                            } else this._view[s] = i;
                        else "number" != typeof i || isNaN(this._view[s]) ? this._view[s] = i : this._view[s] = i * t;
                        else;
                    }, this), this)
                },
                tooltipPosition: function() { return { x: this._model.x, y: this._model.y } },
                hasValue: function() { return e.isNumber(this._model.x) && e.isNumber(this._model.y) }
            }), t.Element.extend = e.inherits
        }
    }, {}],
    25: [function(t, e, i) {
        "use strict";
        var s = t("chartjs-color");
        e.exports = function(t) {
            function e(t, e, i) { var s; return "string" == typeof t ? (s = parseInt(t, 10), -1 != t.indexOf("%") && (s = s / 100 * e.parentNode[i])) : s = t, s }

            function i(t, i, s) {
                var a, o = document.defaultView.getComputedStyle(t)[i],
                    n = document.defaultView.getComputedStyle(t.parentNode)[i],
                    r = null !== o && "none" !== o,
                    h = null !== n && "none" !== n;
                return (r || h) && (a = Math.min(r ? e(o, t, s) : Number.POSITIVE_INFINITY, h ? e(n, t.parentNode, s) : Number.POSITIVE_INFINITY)), a
            }
            var a = t.helpers = {};
            a.each = function(t, e, i, s) {
                var o, n;
                if (a.isArray(t))
                    if (n = t.length, s)
                        for (o = n - 1; o >= 0; o--) e.call(i, t[o], o);
                    else
                        for (o = 0; n > o; o++) e.call(i, t[o], o);
                else if ("object" == typeof t) { var r = Object.keys(t); for (n = r.length, o = 0; n > o; o++) e.call(i, t[r[o]], r[o]) }
            }, a.clone = function(t) { var e = {}; return a.each(t, function(i, s) { t.hasOwnProperty(s) && (a.isArray(i) ? e[s] = i.slice(0) : "object" == typeof i && null !== i ? e[s] = a.clone(i) : e[s] = i) }), e }, a.extend = function(t) { for (var e = arguments.length, i = [], s = 1; e > s; s++) i.push(arguments[s]); return a.each(i, function(e) { a.each(e, function(i, s) { e.hasOwnProperty(s) && (t[s] = i) }) }), t }, a.configMerge = function(e) {
                var i = a.clone(e);
                return a.each(Array.prototype.slice.call(arguments, 1), function(e) {
                    a.each(e, function(s, o) {
                        if (e.hasOwnProperty(o))
                            if ("scales" === o) i[o] = a.scaleMerge(i.hasOwnProperty(o) ? i[o] : {}, s);
                            else if ("scale" === o) i[o] = a.configMerge(i.hasOwnProperty(o) ? i[o] : {}, t.scaleService.getScaleDefaults(s.type), s);
                        else if (i.hasOwnProperty(o) && a.isArray(i[o]) && a.isArray(s)) {
                            var n = i[o];
                            a.each(s, function(t, e) { e < n.length ? "object" == typeof n[e] && null !== n[e] && "object" == typeof t && null !== t ? n[e] = a.configMerge(n[e], t) : n[e] = t : n.push(t) })
                        } else i.hasOwnProperty(o) && "object" == typeof i[o] && null !== i[o] && "object" == typeof s ? i[o] = a.configMerge(i[o], s) : i[o] = s
                    })
                }), i
            }, a.extendDeep = function(t) {
                function e(t) { return a.each(arguments, function(i) { i !== t && a.each(i, function(i, s) { t[s] && t[s].constructor && t[s].constructor === Object ? e(t[s], i) : t[s] = i }) }), t }
                return e.apply(this, arguments)
            }, a.scaleMerge = function(e, i) {
                var s = a.clone(e);
                return a.each(i, function(e, o) {
                    i.hasOwnProperty(o) && ("xAxes" === o || "yAxes" === o ? s.hasOwnProperty(o) ? a.each(e, function(e, i) {
                        var n = a.getValueOrDefault(e.type, "xAxes" === o ? "category" : "linear"),
                            r = t.scaleService.getScaleDefaults(n);
                        i >= s[o].length || !s[o][i].type ? s[o].push(a.configMerge(r, e)) : e.type && e.type !== s[o][i].type ? s[o][i] = a.configMerge(s[o][i], r, e) : s[o][i] = a.configMerge(s[o][i], e)
                    }) : (s[o] = [], a.each(e, function(e) {
                        var i = a.getValueOrDefault(e.type, "xAxes" === o ? "category" : "linear");
                        s[o].push(a.configMerge(t.scaleService.getScaleDefaults(i), e))
                    })) : s.hasOwnProperty(o) && "object" == typeof s[o] && null !== s[o] && "object" == typeof e ? s[o] = a.configMerge(s[o], e) : s[o] = e)
                }), s
            }, a.getValueAtIndexOrDefault = function(t, e, i) { return void 0 === t || null === t ? i : a.isArray(t) ? e < t.length ? t[e] : i : t }, a.getValueOrDefault = function(t, e) { return void 0 === t ? e : t }, a.indexOf = function(t, e) {
                if (Array.prototype.indexOf) return t.indexOf(e);
                for (var i = 0; i < t.length; i++)
                    if (t[i] === e) return i;
                return -1
            }, a.where = function(t, e) { var i = []; return a.each(t, function(t) { e(t) && i.push(t) }), i }, a.findIndex = function(t, e, i) {
                var s = -1;
                if (Array.prototype.findIndex) s = t.findIndex(e, i);
                else
                    for (var a = 0; a < t.length; ++a)
                        if (i = void 0 !== i ? i : t, e.call(i, t[a], a, t)) { s = a; break } return s
            }, a.findNextWhere = function(t, e, i) {
                (void 0 === i || null === i) && (i = -1);
                for (var s = i + 1; s < t.length; s++) { var a = t[s]; if (e(a)) return a }
            }, a.findPreviousWhere = function(t, e, i) {
                (void 0 === i || null === i) && (i = t.length);
                for (var s = i - 1; s >= 0; s--) { var a = t[s]; if (e(a)) return a }
            }, a.inherits = function(t) {
                var e = this,
                    i = t && t.hasOwnProperty("constructor") ? t.constructor : function() { return e.apply(this, arguments) },
                    s = function() { this.constructor = i };
                return s.prototype = e.prototype, i.prototype = new s, i.extend = a.inherits, t && a.extend(i.prototype, t), i.__super__ = e.prototype, i
            }, a.noop = function() {}, a.uid = function() { var t = 0; return function() { return t++ } }(), a.warn = function(t) { console && "function" == typeof console.warn && console.warn(t) }, a.isNumber = function(t) { return !isNaN(parseFloat(t)) && isFinite(t) }, a.almostEquals = function(t, e, i) { return Math.abs(t - e) < i }, a.max = function(t) { return t.reduce(function(t, e) { return isNaN(e) ? t : Math.max(t, e) }, Number.NEGATIVE_INFINITY) }, a.min = function(t) { return t.reduce(function(t, e) { return isNaN(e) ? t : Math.min(t, e) }, Number.POSITIVE_INFINITY) }, a.sign = function(t) { return Math.sign ? Math.sign(t) : (t = +t, 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1) }, a.log10 = function(t) { return Math.log10 ? Math.log10(t) : Math.log(t) / Math.LN10 }, a.toRadians = function(t) { return t * (Math.PI / 180) }, a.toDegrees = function(t) { return t * (180 / Math.PI) }, a.getAngleFromPoint = function(t, e) {
                var i = e.x - t.x,
                    s = e.y - t.y,
                    a = Math.sqrt(i * i + s * s),
                    o = Math.atan2(s, i);
                return o < -.5 * Math.PI && (o += 2 * Math.PI), { angle: o, distance: a }
            }, a.aliasPixel = function(t) { return t % 2 === 0 ? 0 : .5 }, a.splineCurve = function(t, e, i, s) {
                var a = t.skip ? e : t,
                    o = e,
                    n = i.skip ? e : i,
                    r = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
                    h = Math.sqrt(Math.pow(n.x - o.x, 2) + Math.pow(n.y - o.y, 2)),
                    l = r / (r + h),
                    c = h / (r + h);
                l = isNaN(l) ? 0 : l, c = isNaN(c) ? 0 : c;
                var d = s * l,
                    u = s * c;
                return { previous: { x: o.x - d * (n.x - a.x), y: o.y - d * (n.y - a.y) }, next: { x: o.x + u * (n.x - a.x), y: o.y + u * (n.y - a.y) } }
            }, a.nextItem = function(t, e, i) { return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1] }, a.previousItem = function(t, e, i) { return i ? 0 >= e ? t[t.length - 1] : t[e - 1] : 0 >= e ? t[0] : t[e - 1] }, a.niceNum = function(t, e) {
                var i, s = Math.floor(a.log10(t)),
                    o = t / Math.pow(10, s);
                return i = e ? 1.5 > o ? 1 : 3 > o ? 2 : 7 > o ? 5 : 10 : 1 >= o ? 1 : 2 >= o ? 2 : 5 >= o ? 5 : 10, i * Math.pow(10, s)
            };
            var o = a.easingEffects = {
                linear: function(t) { return t },
                easeInQuad: function(t) { return t * t },
                easeOutQuad: function(t) { return -1 * t * (t - 2) },
                easeInOutQuad: function(t) { return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1) },
                easeInCubic: function(t) { return t * t * t },
                easeOutCubic: function(t) { return 1 * ((t = t / 1 - 1) * t * t + 1) },
                easeInOutCubic: function(t) { return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2) },
                easeInQuart: function(t) { return t * t * t * t },
                easeOutQuart: function(t) { return -1 * ((t = t / 1 - 1) * t * t * t - 1) },
                easeInOutQuart: function(t) { return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2) },
                easeInQuint: function(t) { return 1 * (t /= 1) * t * t * t * t },
                easeOutQuint: function(t) { return 1 * ((t = t / 1 - 1) * t * t * t * t + 1) },
                easeInOutQuint: function(t) { return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2) },
                easeInSine: function(t) { return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1 },
                easeOutSine: function(t) { return 1 * Math.sin(t / 1 * (Math.PI / 2)) },
                easeInOutSine: function(t) { return -0.5 * (Math.cos(Math.PI * t / 1) - 1) },
                easeInExpo: function(t) { return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1)) },
                easeOutExpo: function(t) { return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1) },
                easeInOutExpo: function(t) { return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2) },
                easeInCirc: function(t) { return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1) },
                easeOutCirc: function(t) { return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t) },
                easeInOutCirc: function(t) { return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) },
                easeInElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        s = 1;
                    return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (i || (i = .3), s < Math.abs(1) ? (s = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / s), -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)))
                },
                easeOutElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        s = 1;
                    return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (i || (i = .3), s < Math.abs(1) ? (s = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / s), s * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / i) + 1)
                },
                easeInOutElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        s = 1;
                    return 0 === t ? 0 : 2 === (t /= .5) ? 1 : (i || (i = 1 * (.3 * 1.5)), s < Math.abs(1) ? (s = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / s), 1 > t ? -.5 * (s * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)) : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i) * .5 + 1)
                },
                easeInBack: function(t) { var e = 1.70158; return 1 * (t /= 1) * t * ((e + 1) * t - e) },
                easeOutBack: function(t) { var e = 1.70158; return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1) },
                easeInOutBack: function(t) { var e = 1.70158; return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2) },
                easeInBounce: function(t) { return 1 - o.easeOutBounce(1 - t) },
                easeOutBounce: function(t) { return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) },
                easeInOutBounce: function(t) { return .5 > t ? .5 * o.easeInBounce(2 * t) : .5 * o.easeOutBounce(2 * t - 1) + .5 }
            };
            a.requestAnimFrame = function() { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) { return window.setTimeout(t, 1e3 / 60) } }(), a.cancelAnimFrame = function() { return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) { return window.clearTimeout(t, 1e3 / 60) } }(), a.getRelativePosition = function(t, e) {
                var i, s, o = t.originalEvent || t,
                    n = t.currentTarget || t.srcElement,
                    r = n.getBoundingClientRect();
                o.touches && o.touches.length > 0 ? (i = o.touches[0].clientX, s = o.touches[0].clientY) : (i = o.clientX, s = o.clientY);
                var h = parseFloat(a.getStyle(n, "padding-left")),
                    l = parseFloat(a.getStyle(n, "padding-top")),
                    c = parseFloat(a.getStyle(n, "padding-right")),
                    d = parseFloat(a.getStyle(n, "padding-bottom")),
                    u = r.right - r.left - h - c,
                    f = r.bottom - r.top - l - d;
                return i = Math.round((i - r.left - h) / u * n.width / e.currentDevicePixelRatio), s = Math.round((s - r.top - l) / f * n.height / e.currentDevicePixelRatio), { x: i, y: s }
            }, a.addEvent = function(t, e, i) { t.addEventListener ? t.addEventListener(e, i) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i }, a.removeEvent = function(t, e, i) { t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = a.noop }, a.bindEvents = function(t, e, i) { t.events || (t.events = {}), a.each(e, function(e) { t.events[e] = function() { i.apply(t, arguments) }, a.addEvent(t.chart.canvas, e, t.events[e]) }) }, a.unbindEvents = function(t, e) { a.each(e, function(e, i) { a.removeEvent(t.chart.canvas, i, e) }) }, a.getConstraintWidth = function(t) { return i(t, "max-width", "clientWidth") }, a.getConstraintHeight = function(t) { return i(t, "max-height", "clientHeight") }, a.getMaximumWidth = function(t) {
                var e = t.parentNode,
                    i = parseInt(a.getStyle(e, "padding-left")) + parseInt(a.getStyle(e, "padding-right")),
                    s = e.clientWidth - i,
                    o = a.getConstraintWidth(t);
                return void 0 !== o && (s = Math.min(s, o)), s
            }, a.getMaximumHeight = function(t) {
                var e = t.parentNode,
                    i = parseInt(a.getStyle(e, "padding-top")) + parseInt(a.getStyle(e, "padding-bottom")),
                    s = e.clientHeight - i,
                    o = a.getConstraintHeight(t);
                return void 0 !== o && (s = Math.min(s, o)), s
            }, a.getStyle = function(t, e) { return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e) }, a.retinaScale = function(t) {
                var e = t.ctx,
                    i = t.canvas.width,
                    s = t.canvas.height,
                    a = t.currentDevicePixelRatio = window.devicePixelRatio || 1;
                1 !== a && (e.canvas.height = s * a, e.canvas.width = i * a, e.scale(a, a), t.originalDevicePixelRatio = t.originalDevicePixelRatio || a), e.canvas.style.width = i + "px", e.canvas.style.height = s + "px"
            }, a.clear = function(t) { t.ctx.clearRect(0, 0, t.width, t.height) }, a.fontString = function(t, e, i) { return e + " " + t + "px " + i }, a.longestText = function(t, e, i, s) {
                s = s || {}, s.data = s.data || {}, s.garbageCollect = s.garbageCollect || [], s.font !== e && (s.data = {}, s.garbageCollect = [], s.font = e), t.font = e;
                var o = 0;
                a.each(i, function(e) {
                    if (void 0 !== e && null !== e) {
                        var i = s.data[e];
                        i || (i = s.data[e] = t.measureText(e).width, s.garbageCollect.push(e)), i > o && (o = i)
                    }
                });
                var n = s.garbageCollect.length / 2;
                if (n > i.length) {
                    for (var r = 0; n > r; r++) delete s.data[s.garbageCollect[r]];
                    s.garbageCollect.splice(0, n)
                }
                return o
            }, a.drawRoundedRectangle = function(t, e, i, s, a, o) { t.beginPath(), t.moveTo(e + o, i), t.lineTo(e + s - o, i), t.quadraticCurveTo(e + s, i, e + s, i + o), t.lineTo(e + s, i + a - o), t.quadraticCurveTo(e + s, i + a, e + s - o, i + a), t.lineTo(e + o, i + a), t.quadraticCurveTo(e, i + a, e, i + a - o), t.lineTo(e, i + o), t.quadraticCurveTo(e, i, e + o, i), t.closePath() }, a.color = function(e) { return s ? s(e instanceof CanvasGradient ? t.defaults.global.defaultColor : e) : (console.log("Color.js not found!"), e) }, a.addResizeListener = function(t, e) {
                var i = document.createElement("iframe"),
                    s = "chartjs-hidden-iframe";
                i.classlist ? i.classlist.add(s) : i.setAttribute("class", s), i.style.width = "100%", i.style.display = "block", i.style.border = 0, i.style.height = 0, i.style.margin = 0, i.style.position = "absolute", i.style.left = 0, i.style.right = 0, i.style.top = 0, i.style.bottom = 0, t.insertBefore(i, t.firstChild), (i.contentWindow || i).onresize = function() { e && e() }
            }, a.removeResizeListener = function(t) {
                var e = t.querySelector(".chartjs-hidden-iframe");
                e && e.parentNode.removeChild(e)
            }, a.isArray = function(t) { return Array.isArray ? Array.isArray(t) : "[object Array]" === Object.prototype.toString.call(t) }, a.pushAllIfDefined = function(t, e) { "undefined" != typeof t && (a.isArray(t) ? e.push.apply(e, t) : e.push(t)) }, a.callCallback = function(t, e, i) { t && "function" == typeof t.call && t.apply(i, e) }, a.getHoverColor = function(t) { return t instanceof CanvasPattern ? t : a.color(t).saturate(.5).darken(.1).rgbString() }
        }
    }, { "chartjs-color": 2 }],
    26: [function(t, e, i) {
        "use strict";
        e.exports = function() {
            var t = function(e, i) { this.config = i, e.length && e[0].getContext && (e = e[0]), e.getContext && (e = e.getContext("2d")), this.ctx = e, this.canvas = e.canvas, this.width = e.canvas.width || parseInt(t.helpers.getStyle(e.canvas, "width")) || t.helpers.getMaximumWidth(e.canvas), this.height = e.canvas.height || parseInt(t.helpers.getStyle(e.canvas, "height")) || t.helpers.getMaximumHeight(e.canvas), this.aspectRatio = this.width / this.height, (isNaN(this.aspectRatio) || isFinite(this.aspectRatio) === !1) && (this.aspectRatio = void 0 !== i.aspectRatio ? i.aspectRatio : 2), this.originalCanvasStyleWidth = e.canvas.style.width, this.originalCanvasStyleHeight = e.canvas.style.height, t.helpers.retinaScale(this), i && (this.controller = new t.Controller(this)); var s = this; return t.helpers.addResizeListener(e.canvas.parentNode, function() { s.controller && s.controller.config.options.responsive && s.controller.resize() }), this.controller ? this.controller : this };
            return t.defaults = {
                global: {
                    responsive: !0,
                    responsiveAnimationDuration: 0,
                    maintainAspectRatio: !0,
                    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                    hover: { onHover: null, mode: "single", animationDuration: 400 },
                    onClick: null,
                    defaultColor: "rgba(0,0,0,0.1)",
                    defaultFontColor: "#666",
                    defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    defaultFontSize: 12,
                    defaultFontStyle: "normal",
                    showLines: !0,
                    elements: {},
                    legendCallback: function(t) {
                        var e = [];
                        e.push('<ul class="' + t.id + '-legend">');
                        for (var i = 0; i < t.data.datasets.length; i++) e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
                        return e.push("</ul>"), e.join("")
                    }
                }
            }, t
        }
    }, {}],
    27: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.layoutService = {
                defaults: {},
                addBox: function(t, e) { t.boxes || (t.boxes = []), t.boxes.push(e) },
                removeBox: function(t, e) { t.boxes && t.boxes.splice(t.boxes.indexOf(e), 1) },
                update: function(t, i, s) {
                    function a(t) {
                        var e, i = t.isHorizontal();
                        i ? (e = t.update(t.options.fullWidth ? m : k, y), _ -= e.height) : (e = t.update(x, v), k -= e.width), S.push({ horizontal: i, minSize: e, box: t })
                    }

                    function o(t) {
                        var i = e.findNextWhere(S, function(e) { return e.box === t });
                        if (i)
                            if (t.isHorizontal()) {
                                var s = { left: w, right: D, top: 0, bottom: 0 };
                                t.update(t.options.fullWidth ? m : k, p / 2, s)
                            } else t.update(i.minSize.width, _)
                    }

                    function n(t) {
                        var i = e.findNextWhere(S, function(e) { return e.box === t }),
                            s = { left: 0, right: 0, top: M, bottom: C };
                        i && t.update(i.minSize.width, _, s)
                    }

                    function r(t) { t.isHorizontal() ? (t.left = t.options.fullWidth ? h : w, t.right = t.options.fullWidth ? i - h : w + k, t.top = T, t.bottom = T + t.height, T = t.bottom) : (t.left = P, t.right = P + t.width, t.top = M, t.bottom = M + _, P = t.right) }
                    if (t) {
                        var h = 0,
                            l = 0,
                            c = e.where(t.boxes, function(t) { return "left" === t.options.position }),
                            d = e.where(t.boxes, function(t) { return "right" === t.options.position }),
                            u = e.where(t.boxes, function(t) { return "top" === t.options.position }),
                            f = e.where(t.boxes, function(t) { return "bottom" === t.options.position }),
                            g = e.where(t.boxes, function(t) { return "chartArea" === t.options.position });
                        u.sort(function(t, e) { return (e.options.fullWidth ? 1 : 0) - (t.options.fullWidth ? 1 : 0) }), f.sort(function(t, e) { return (t.options.fullWidth ? 1 : 0) - (e.options.fullWidth ? 1 : 0) });
                        var m = i - 2 * h,
                            p = s - 2 * l,
                            b = m / 2,
                            v = p / 2,
                            x = (i - b) / (c.length + d.length),
                            y = (s - v) / (u.length + f.length),
                            k = m,
                            _ = p,
                            S = [];
                        e.each(c.concat(d, u, f), a);
                        var w = h,
                            D = h,
                            M = l,
                            C = l;
                        e.each(c.concat(d), o), e.each(c, function(t) { w += t.width }), e.each(d, function(t) { D += t.width }), e.each(u.concat(f), o), e.each(u, function(t) { M += t.height }), e.each(f, function(t) { C += t.height }), e.each(c.concat(d), n), w = h, D = h, M = l, C = l, e.each(c, function(t) { w += t.width }), e.each(d, function(t) { D += t.width }), e.each(u, function(t) { M += t.height }), e.each(f, function(t) { C += t.height });
                        var A = s - M - C,
                            I = i - w - D;
                        (I !== k || A !== _) && (e.each(c, function(t) { t.height = A }), e.each(d, function(t) { t.height = A }), e.each(u, function(t) { t.options.fullWidth || (t.width = I) }), e.each(f, function(t) { t.options.fullWidth || (t.width = I) }), _ = A, k = I);
                        var P = h,
                            T = l;
                        e.each(c.concat(u), r), P += k, T += _, e.each(d, r), e.each(f, r), t.chartArea = { left: w, top: M, right: w + k, bottom: M + _ }, e.each(g, function(e) { e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(k, _) })
                    }
                }
            }
        }
    }, {}],
    28: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                i = e.noop;
            t.defaults.global.legend = {
                display: !0,
                position: "top",
                fullWidth: !0,
                reverse: !1,
                onClick: function(t, e) {
                    var i = e.datasetIndex,
                        s = this.chart,
                        a = s.getDatasetMeta(i);
                    a.hidden = null === a.hidden ? !s.data.datasets[i].hidden : null, s.update()
                },
                labels: { boxWidth: 40, padding: 10, generateLabels: function(t) { var i = t.data; return e.isArray(i.datasets) ? i.datasets.map(function(e, i) { return { text: e.label, fillStyle: e.backgroundColor, hidden: !t.isDatasetVisible(i), lineCap: e.borderCapStyle, lineDash: e.borderDash, lineDashOffset: e.borderDashOffset, lineJoin: e.borderJoinStyle, lineWidth: e.borderWidth, strokeStyle: e.borderColor, datasetIndex: i } }, this) : [] } }
            }, t.Legend = t.Element.extend({
                initialize: function(t) { e.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1 },
                beforeUpdate: i,
                update: function(t, e, i) { return this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this.margins = i, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this.beforeBuildLabels(), this.buildLabels(), this.afterBuildLabels(), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate(), this.minSize },
                afterUpdate: i,
                beforeSetDimensions: i,
                setDimensions: function() { this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0, this.minSize = { width: 0, height: 0 } },
                afterSetDimensions: i,
                beforeBuildLabels: i,
                buildLabels: function() { this.legendItems = this.options.labels.generateLabels.call(this, this.chart), this.options.reverse && this.legendItems.reverse() },
                afterBuildLabels: i,
                beforeFit: i,
                fit: function() {
                    var i = this.options,
                        s = i.labels,
                        a = i.display,
                        o = this.ctx,
                        n = t.defaults.global,
                        r = e.getValueOrDefault,
                        h = r(s.fontSize, n.defaultFontSize),
                        l = r(s.fontStyle, n.defaultFontStyle),
                        c = r(s.fontFamily, n.defaultFontFamily),
                        d = e.fontString(h, l, c),
                        u = this.legendHitBoxes = [],
                        f = this.minSize,
                        g = this.isHorizontal();
                    if (g ? (f.width = this.maxWidth, f.height = a ? 10 : 0) : (f.width = a ? 10 : 0, f.height = this.maxHeight), a && g) {
                        var m = this.lineWidths = [0],
                            p = this.legendItems.length ? h + s.padding : 0;
                        o.textAlign = "left", o.textBaseline = "top", o.font = d, e.each(this.legendItems, function(t, e) {
                            var i = s.boxWidth + h / 2 + o.measureText(t.text).width;
                            m[m.length - 1] + i + s.padding >= this.width && (p += h + s.padding, m[m.length] = this.left), u[e] = { left: 0, top: 0, width: i, height: h }, m[m.length - 1] += i + s.padding
                        }, this), f.height += p
                    }
                    this.width = f.width, this.height = f.height
                },
                afterFit: i,
                isHorizontal: function() { return "top" === this.options.position || "bottom" === this.options.position },
                draw: function() {
                    var i = this.options,
                        s = i.labels,
                        a = t.defaults.global,
                        o = a.elements.line,
                        n = this.width,
                        r = this.lineWidths;
                    if (i.display) {
                        var h = this.ctx,
                            l = { x: this.left + (n - r[0]) / 2, y: this.top + s.padding, line: 0 },
                            c = e.getValueOrDefault,
                            d = c(s.fontColor, a.defaultFontColor),
                            u = c(s.fontSize, a.defaultFontSize),
                            f = c(s.fontStyle, a.defaultFontStyle),
                            g = c(s.fontFamily, a.defaultFontFamily),
                            m = e.fontString(u, f, g);
                        if (this.isHorizontal()) {
                            h.textAlign = "left", h.textBaseline = "top", h.lineWidth = .5, h.strokeStyle = d, h.fillStyle = d, h.font = m;
                            var p = s.boxWidth,
                                b = this.legendHitBoxes;
                            e.each(this.legendItems, function(t, e) {
                                var i = h.measureText(t.text).width,
                                    d = p + u / 2 + i,
                                    f = l.x,
                                    g = l.y;
                                f + d >= n && (g = l.y += u + s.padding, l.line++, f = l.x = this.left + (n - r[l.line]) / 2), h.save(), h.fillStyle = c(t.fillStyle, a.defaultColor), h.lineCap = c(t.lineCap, o.borderCapStyle), h.lineDashOffset = c(t.lineDashOffset, o.borderDashOffset), h.lineJoin = c(t.lineJoin, o.borderJoinStyle), h.lineWidth = c(t.lineWidth, o.borderWidth), h.strokeStyle = c(t.strokeStyle, a.defaultColor), h.setLineDash && h.setLineDash(c(t.lineDash, o.borderDash)), h.strokeRect(f, g, p, u), h.fillRect(f, g, p, u), h.restore(), b[e].left = f, b[e].top = g, h.fillText(t.text, p + u / 2 + f, g), t.hidden && (h.beginPath(), h.lineWidth = 2, h.moveTo(p + u / 2 + f, g + u / 2), h.lineTo(p + u / 2 + f + i, g + u / 2), h.stroke()), l.x += d + s.padding
                            }, this)
                        }
                    }
                },
                handleEvent: function(t) {
                    var i = e.getRelativePosition(t, this.chart.chart),
                        s = i.x,
                        a = i.y,
                        o = this.options;
                    if (s >= this.left && s <= this.right && a >= this.top && a <= this.bottom)
                        for (var n = this.legendHitBoxes, r = 0; r < n.length; ++r) { var h = n[r]; if (s >= h.left && s <= h.left + h.width && a >= h.top && a <= h.top + h.height) { o.onClick && o.onClick.call(this, t, this.legendItems[r]); break } }
                }
            })
        }
    }, {}],
    29: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.plugins = [], t.pluginService = {
                register: function(e) { var i = t.plugins; - 1 === i.indexOf(e) && i.push(e) },
                remove: function(e) {
                    var i = t.plugins,
                        s = i.indexOf(e); - 1 !== s && i.splice(s, 1)
                },
                notifyPlugins: function(i, s, a) { e.each(t.plugins, function(t) { t[i] && "function" == typeof t[i] && t[i].apply(a, s) }, a) }
            };
            var i = e.noop;
            t.PluginBase = t.Element.extend({ beforeInit: i, afterInit: i, beforeUpdate: i, afterUpdate: i, beforeDraw: i, afterDraw: i, destroy: i })
        }
    }, {}],
    30: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.scale = { display: !0, position: "left", gridLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1, drawOnChartArea: !0, drawTicks: !0, tickMarkLength: 10, zeroLineWidth: 1, zeroLineColor: "rgba(0,0,0,0.25)", offsetGridLines: !1 }, scaleLabel: { labelString: "", display: !1 }, ticks: { beginAtZero: !1, minRotation: 0, maxRotation: 50, mirror: !1, padding: 10, reverse: !1, display: !0, autoSkip: !0, autoSkipPadding: 0, labelOffset: 0, callback: function(t) { return "" + t } } }, t.Scale = t.Element.extend({
                beforeUpdate: function() { e.callCallback(this.options.beforeUpdate, [this]) },
                update: function(t, i, s) { return this.beforeUpdate(), this.maxWidth = t, this.maxHeight = i, this.margins = e.extend({ left: 0, right: 0, top: 0, bottom: 0 }, s), this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this.beforeBuildTicks(), this.buildTicks(), this.afterBuildTicks(), this.beforeTickToLabelConversion(), this.convertTicksToLabels(), this.afterTickToLabelConversion(), this.beforeCalculateTickRotation(), this.calculateTickRotation(), this.afterCalculateTickRotation(), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate(), this.minSize },
                afterUpdate: function() { e.callCallback(this.options.afterUpdate, [this]) },
                beforeSetDimensions: function() { e.callCallback(this.options.beforeSetDimensions, [this]) },
                setDimensions: function() { this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0 },
                afterSetDimensions: function() { e.callCallback(this.options.afterSetDimensions, [this]) },
                beforeDataLimits: function() { e.callCallback(this.options.beforeDataLimits, [this]) },
                determineDataLimits: e.noop,
                afterDataLimits: function() { e.callCallback(this.options.afterDataLimits, [this]) },
                beforeBuildTicks: function() { e.callCallback(this.options.beforeBuildTicks, [this]) },
                buildTicks: e.noop,
                afterBuildTicks: function() { e.callCallback(this.options.afterBuildTicks, [this]) },
                beforeTickToLabelConversion: function() { e.callCallback(this.options.beforeTickToLabelConversion, [this]) },
                convertTicksToLabels: function() { this.ticks = this.ticks.map(function(t, e, i) { return this.options.ticks.userCallback ? this.options.ticks.userCallback(t, e, i) : this.options.ticks.callback(t, e, i) }, this) },
                afterTickToLabelConversion: function() { e.callCallback(this.options.afterTickToLabelConversion, [this]) },
                beforeCalculateTickRotation: function() { e.callCallback(this.options.beforeCalculateTickRotation, [this]) },
                calculateTickRotation: function() {
                    var i = e.getValueOrDefault(this.options.ticks.fontSize, t.defaults.global.defaultFontSize),
                        s = e.getValueOrDefault(this.options.ticks.fontStyle, t.defaults.global.defaultFontStyle),
                        a = e.getValueOrDefault(this.options.ticks.fontFamily, t.defaults.global.defaultFontFamily),
                        o = e.fontString(i, s, a);
                    this.ctx.font = o;
                    var n, r = this.ctx.measureText(this.ticks[0]).width,
                        h = this.ctx.measureText(this.ticks[this.ticks.length - 1]).width;
                    if (this.labelRotation = this.options.ticks.minRotation || 0, this.paddingRight = 0, this.paddingLeft = 0, this.options.display && this.isHorizontal()) {
                        this.paddingRight = h / 2 + 3, this.paddingLeft = r / 2 + 3, this.longestTextCache || (this.longestTextCache = {});
                        for (var l, c, d = e.longestText(this.ctx, o, this.ticks, this.longestTextCache), u = d, f = this.getPixelForTick(1) - this.getPixelForTick(0) - 6; u > f && this.labelRotation < this.options.ticks.maxRotation;) {
                            if (l = Math.cos(e.toRadians(this.labelRotation)), c = Math.sin(e.toRadians(this.labelRotation)), n = l * r, n + i / 2 > this.yLabelWidth && (this.paddingLeft = n + i / 2), this.paddingRight = i / 2, c * d > this.maxHeight) { this.labelRotation--; break }
                            this.labelRotation++, u = l * d
                        }
                    }
                    this.margins && (this.paddingLeft = Math.max(this.paddingLeft - this.margins.left, 0), this.paddingRight = Math.max(this.paddingRight - this.margins.right, 0))
                },
                afterCalculateTickRotation: function() { e.callCallback(this.options.afterCalculateTickRotation, [this]) },
                beforeFit: function() { e.callCallback(this.options.beforeFit, [this]) },
                fit: function() {
                    var i = this.minSize = { width: 0, height: 0 },
                        s = this.options,
                        a = s.ticks,
                        o = s.scaleLabel,
                        n = t.defaults.global,
                        r = s.display,
                        h = this.isHorizontal(),
                        l = e.getValueOrDefault(a.fontSize, n.defaultFontSize),
                        c = e.getValueOrDefault(a.fontStyle, n.defaultFontStyle),
                        d = e.getValueOrDefault(a.fontFamily, n.defaultFontFamily),
                        u = e.fontString(l, c, d),
                        f = e.getValueOrDefault(o.fontSize, n.defaultFontSize),
                        g = e.getValueOrDefault(o.fontStyle, n.defaultFontStyle),
                        m = e.getValueOrDefault(o.fontFamily, n.defaultFontFamily),
                        p = (e.fontString(f, g, m), s.gridLines.tickMarkLength);
                    if (h ? i.width = this.isFullWidth() ? this.maxWidth - this.margins.left - this.margins.right : this.maxWidth : i.width = r ? p : 0, h ? i.height = r ? p : 0 : i.height = this.maxHeight, o.display && r && (h ? i.height += 1.5 * f : i.width += 1.5 * f), a.display && r) {
                        this.longestTextCache || (this.longestTextCache = {});
                        var b = e.longestText(this.ctx, u, this.ticks, this.longestTextCache);
                        if (h) {
                            this.longestLabelWidth = b;
                            var v = Math.sin(e.toRadians(this.labelRotation)) * this.longestLabelWidth + 1.5 * l;
                            i.height = Math.min(this.maxHeight, i.height + v), this.ctx.font = u;
                            var x = this.ctx.measureText(this.ticks[0]).width,
                                y = this.ctx.measureText(this.ticks[this.ticks.length - 1]).width,
                                k = Math.cos(e.toRadians(this.labelRotation)),
                                _ = Math.sin(e.toRadians(this.labelRotation));
                            this.paddingLeft = 0 !== this.labelRotation ? k * x + 3 : x / 2 + 3, this.paddingRight = 0 !== this.labelRotation ? _ * (l / 2) + 3 : y / 2 + 3
                        } else {
                            var S = this.maxWidth - i.width,
                                w = a.mirror;
                            w ? b = 0 : b += this.options.ticks.padding, S > b ? i.width += b : i.width = this.maxWidth, this.paddingTop = l / 2, this.paddingBottom = l / 2
                        }
                    }
                    this.margins && (this.paddingLeft = Math.max(this.paddingLeft - this.margins.left, 0), this.paddingTop = Math.max(this.paddingTop - this.margins.top, 0), this.paddingRight = Math.max(this.paddingRight - this.margins.right, 0), this.paddingBottom = Math.max(this.paddingBottom - this.margins.bottom, 0)), this.width = i.width, this.height = i.height
                },
                afterFit: function() { e.callCallback(this.options.afterFit, [this]) },
                isHorizontal: function() { return "top" === this.options.position || "bottom" === this.options.position },
                isFullWidth: function() { return this.options.fullWidth },
                getRightValue: function i(t) { return null === t || "undefined" == typeof t ? NaN : "number" == typeof t && isNaN(t) ? NaN : "object" == typeof t ? t instanceof Date ? t : i(this.isHorizontal() ? t.x : t.y) : t },
                getLabelForIndex: e.noop,
                getPixelForValue: e.noop,
                getValueForPixel: e.noop,
                getPixelForTick: function(t, e) {
                    if (this.isHorizontal()) {
                        var i = this.width - (this.paddingLeft + this.paddingRight),
                            s = i / Math.max(this.ticks.length - (this.options.gridLines.offsetGridLines ? 0 : 1), 1),
                            a = s * t + this.paddingLeft;
                        e && (a += s / 2);
                        var o = this.left + Math.round(a);
                        return o += this.isFullWidth() ? this.margins.left : 0
                    }
                    var n = this.height - (this.paddingTop + this.paddingBottom);
                    return this.top + t * (n / (this.ticks.length - 1))
                },
                getPixelForDecimal: function(t) {
                    if (this.isHorizontal()) {
                        var e = this.width - (this.paddingLeft + this.paddingRight),
                            i = e * t + this.paddingLeft,
                            s = this.left + Math.round(i);
                        return s += this.isFullWidth() ? this.margins.left : 0
                    }
                    return this.top + t * this.height
                },
                draw: function(i) {
                    if (this.options.display) {
                        var s, a, o, n, r, h = 0 !== this.labelRotation,
                            l = this.options.ticks.autoSkip;
                        this.options.ticks.maxTicksLimit && (r = this.options.ticks.maxTicksLimit);
                        var c = e.getValueOrDefault(this.options.ticks.fontColor, t.defaults.global.defaultFontColor),
                            d = e.getValueOrDefault(this.options.ticks.fontSize, t.defaults.global.defaultFontSize),
                            u = e.getValueOrDefault(this.options.ticks.fontStyle, t.defaults.global.defaultFontStyle),
                            f = e.getValueOrDefault(this.options.ticks.fontFamily, t.defaults.global.defaultFontFamily),
                            g = e.fontString(d, u, f),
                            m = this.options.gridLines.tickMarkLength,
                            p = e.getValueOrDefault(this.options.scaleLabel.fontColor, t.defaults.global.defaultFontColor),
                            b = e.getValueOrDefault(this.options.scaleLabel.fontSize, t.defaults.global.defaultFontSize),
                            v = e.getValueOrDefault(this.options.scaleLabel.fontStyle, t.defaults.global.defaultFontStyle),
                            x = e.getValueOrDefault(this.options.scaleLabel.fontFamily, t.defaults.global.defaultFontFamily),
                            y = e.fontString(b, v, x),
                            k = Math.cos(e.toRadians(this.labelRotation)),
                            _ = (Math.sin(e.toRadians(this.labelRotation)),
                                this.longestLabelWidth * k);
                        if (this.ctx.fillStyle = c, this.isHorizontal()) {
                            s = !0;
                            var S = "bottom" === this.options.position ? this.top : this.bottom - m,
                                w = "bottom" === this.options.position ? this.top + m : this.bottom;
                            if (a = !1, (_ / 2 + this.options.ticks.autoSkipPadding) * this.ticks.length > this.width - (this.paddingLeft + this.paddingRight) && (a = 1 + Math.floor((_ / 2 + this.options.ticks.autoSkipPadding) * this.ticks.length / (this.width - (this.paddingLeft + this.paddingRight)))), r && this.ticks.length > r)
                                for (; !a || this.ticks.length / (a || 1) > r;) a || (a = 1), a += 1;
                            l || (a = !1), e.each(this.ticks, function(t, o) {
                                var n = this.ticks.length === o + 1,
                                    r = a > 1 && o % a > 0 || o % a === 0 && o + a > this.ticks.length;
                                if ((!r || n) && void 0 !== t && null !== t) {
                                    var l = this.getPixelForTick(o),
                                        c = this.getPixelForTick(o, this.options.gridLines.offsetGridLines);
                                    this.options.gridLines.display && (o === ("undefined" != typeof this.zeroLineIndex ? this.zeroLineIndex : 0) ? (this.ctx.lineWidth = this.options.gridLines.zeroLineWidth, this.ctx.strokeStyle = this.options.gridLines.zeroLineColor, s = !0) : s && (this.ctx.lineWidth = this.options.gridLines.lineWidth, this.ctx.strokeStyle = this.options.gridLines.color, s = !1), l += e.aliasPixel(this.ctx.lineWidth), this.ctx.beginPath(), this.options.gridLines.drawTicks && (this.ctx.moveTo(l, S), this.ctx.lineTo(l, w)), this.options.gridLines.drawOnChartArea && (this.ctx.moveTo(l, i.top), this.ctx.lineTo(l, i.bottom)), this.ctx.stroke()), this.options.ticks.display && (this.ctx.save(), this.ctx.translate(c + this.options.ticks.labelOffset, h ? this.top + 12 : "top" === this.options.position ? this.bottom - m : this.top + m), this.ctx.rotate(-1 * e.toRadians(this.labelRotation)), this.ctx.font = g, this.ctx.textAlign = h ? "right" : "center", this.ctx.textBaseline = h ? "middle" : "top" === this.options.position ? "bottom" : "top", this.ctx.fillText(t, 0, 0), this.ctx.restore())
                                }
                            }, this), this.options.scaleLabel.display && (this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillStyle = p, this.ctx.font = y, o = this.left + (this.right - this.left) / 2, n = "bottom" === this.options.position ? this.bottom - b / 2 : this.top + b / 2, this.ctx.fillText(this.options.scaleLabel.labelString, o, n))
                        } else {
                            s = !0;
                            var D = "right" === this.options.position ? this.left : this.right - 5,
                                M = "right" === this.options.position ? this.left + 5 : this.right;
                            if (e.each(this.ticks, function(t, a) {
                                    if (void 0 !== t && null !== t) {
                                        var o = this.getPixelForTick(a);
                                        if (this.options.gridLines.display && (a === ("undefined" != typeof this.zeroLineIndex ? this.zeroLineIndex : 0) ? (this.ctx.lineWidth = this.options.gridLines.zeroLineWidth, this.ctx.strokeStyle = this.options.gridLines.zeroLineColor, s = !0) : s && (this.ctx.lineWidth = this.options.gridLines.lineWidth, this.ctx.strokeStyle = this.options.gridLines.color, s = !1), o += e.aliasPixel(this.ctx.lineWidth), this.ctx.beginPath(), this.options.gridLines.drawTicks && (this.ctx.moveTo(D, o), this.ctx.lineTo(M, o)), this.options.gridLines.drawOnChartArea && (this.ctx.moveTo(i.left, o), this.ctx.lineTo(i.right, o)), this.ctx.stroke()), this.options.ticks.display) {
                                            var n, r = this.getPixelForTick(a, this.options.gridLines.offsetGridLines);
                                            this.ctx.save(), "left" === this.options.position ? this.options.ticks.mirror ? (n = this.right + this.options.ticks.padding, this.ctx.textAlign = "left") : (n = this.right - this.options.ticks.padding, this.ctx.textAlign = "right") : this.options.ticks.mirror ? (n = this.left - this.options.ticks.padding, this.ctx.textAlign = "right") : (n = this.left + this.options.ticks.padding, this.ctx.textAlign = "left"), this.ctx.translate(n, r + this.options.ticks.labelOffset), this.ctx.rotate(-1 * e.toRadians(this.labelRotation)), this.ctx.font = g, this.ctx.textBaseline = "middle", this.ctx.fillText(t, 0, 0), this.ctx.restore()
                                        }
                                    }
                                }, this), this.options.scaleLabel.display) {
                                o = "left" === this.options.position ? this.left + b / 2 : this.right - b / 2, n = this.top + (this.bottom - this.top) / 2;
                                var C = "left" === this.options.position ? -.5 * Math.PI : .5 * Math.PI;
                                this.ctx.save(), this.ctx.translate(o, n), this.ctx.rotate(C), this.ctx.textAlign = "center", this.ctx.fillStyle = p, this.ctx.font = y, this.ctx.textBaseline = "middle", this.ctx.fillText(this.options.scaleLabel.labelString, 0, 0), this.ctx.restore()
                            }
                        }
                        this.ctx.lineWidth = this.options.gridLines.lineWidth, this.ctx.strokeStyle = this.options.gridLines.color;
                        var A = this.left,
                            I = this.right,
                            P = this.top,
                            T = this.bottom;
                        this.isHorizontal() ? (P = T = "top" === this.options.position ? this.bottom : this.top, P += e.aliasPixel(this.ctx.lineWidth), T += e.aliasPixel(this.ctx.lineWidth)) : (A = I = "left" === this.options.position ? this.right : this.left, A += e.aliasPixel(this.ctx.lineWidth), I += e.aliasPixel(this.ctx.lineWidth)), this.ctx.beginPath(), this.ctx.moveTo(A, P), this.ctx.lineTo(I, T), this.ctx.stroke()
                    }
                }
            })
        }
    }, {}],
    31: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.scaleService = {
                constructors: {},
                defaults: {},
                registerScaleType: function(t, i, s) { this.constructors[t] = i, this.defaults[t] = e.clone(s) },
                getScaleConstructor: function(t) { return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0 },
                getScaleDefaults: function(i) { return this.defaults.hasOwnProperty(i) ? e.scaleMerge(t.defaults.scale, this.defaults[i]) : {} },
                updateScaleDefaults: function(t, i) {
                    var s = this.defaults;
                    s.hasOwnProperty(t) && (s[t] = e.extend(s[t], i))
                },
                addScalesToLayout: function(i) { e.each(i.scales, function(e) { t.layoutService.addBox(i, e) }) }
            }
        }
    }, {}],
    32: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.global.title = { display: !1, position: "top", fullWidth: !0, fontStyle: "bold", padding: 10, text: "" };
            var i = e.noop;
            t.Title = t.Element.extend({
                initialize: function(i) { e.extend(this, i), this.options = e.configMerge(t.defaults.global.title, i.options), this.legendHitBoxes = [] },
                beforeUpdate: i,
                update: function(t, e, i) { return this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this.margins = i, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this.beforeBuildLabels(), this.buildLabels(), this.afterBuildLabels(), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate(), this.minSize },
                afterUpdate: i,
                beforeSetDimensions: i,
                setDimensions: function() { this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0, this.minSize = { width: 0, height: 0 } },
                afterSetDimensions: i,
                beforeBuildLabels: i,
                buildLabels: i,
                afterBuildLabels: i,
                beforeFit: i,
                fit: function() {
                    var i = (this.ctx, e.getValueOrDefault),
                        s = this.options,
                        a = t.defaults.global,
                        o = s.display,
                        n = i(s.fontSize, a.defaultFontSize),
                        r = this.minSize;
                    this.isHorizontal() ? (r.width = this.maxWidth, r.height = o ? n + 2 * s.padding : 0) : (r.width = o ? n + 2 * s.padding : 0, r.height = this.maxHeight), this.width = r.width, this.height = r.height
                },
                afterFit: i,
                isHorizontal: function() { var t = this.options.position; return "top" === t || "bottom" === t },
                draw: function() {
                    var i = this.ctx,
                        s = e.getValueOrDefault,
                        a = this.options,
                        o = t.defaults.global;
                    if (a.display) {
                        var n, r, h = s(a.fontSize, o.defaultFontSize),
                            l = s(a.fontStyle, o.defaultFontStyle),
                            c = s(a.fontFamily, o.defaultFontFamily),
                            d = e.fontString(h, l, c),
                            u = 0;
                        i.fillStyle = s(a.fontColor, o.defaultFontColor), i.font = d, this.isHorizontal() ? (n = this.left + (this.right - this.left) / 2, r = this.top + (this.bottom - this.top) / 2) : (n = "left" === a.position ? this.left + h / 2 : this.right - h / 2, r = this.top + (this.bottom - this.top) / 2, u = Math.PI * ("left" === a.position ? -.5 : .5)), i.save(), i.translate(n, r), i.rotate(u), i.textAlign = "center", i.textBaseline = "middle", i.fillText(a.text, 0, 0), i.restore()
                    }
                }
            })
        }
    }, {}],
    33: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            function e(t, e) { return e && (i.isArray(e) ? t = t.concat(e) : t.push(e)), t }
            var i = t.helpers;
            t.defaults.global.tooltips = { enabled: !0, custom: null, mode: "single", backgroundColor: "rgba(0,0,0,0.8)", titleFontStyle: "bold", titleSpacing: 2, titleMarginBottom: 6, titleColor: "#fff", titleAlign: "left", bodySpacing: 2, bodyColor: "#fff", bodyAlign: "left", footerFontStyle: "bold", footerSpacing: 2, footerMarginTop: 6, footerColor: "#fff", footerAlign: "left", yPadding: 6, xPadding: 6, yAlign: "center", xAlign: "center", caretSize: 5, cornerRadius: 6, multiKeyBackground: "#fff", callbacks: { beforeTitle: i.noop, title: function(t, e) { var i = ""; return t.length > 0 && (t[0].xLabel ? i = t[0].xLabel : e.labels.length > 0 && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i }, afterTitle: i.noop, beforeBody: i.noop, beforeLabel: i.noop, label: function(t, e) { var i = e.datasets[t.datasetIndex].label || ""; return i + ": " + t.yLabel }, afterLabel: i.noop, afterBody: i.noop, beforeFooter: i.noop, footer: i.noop, afterFooter: i.noop } }, t.Tooltip = t.Element.extend({
                initialize: function() {
                    var e = this._options;
                    i.extend(this, { _model: { xPadding: e.tooltips.xPadding, yPadding: e.tooltips.yPadding, xAlign: e.tooltips.yAlign, yAlign: e.tooltips.xAlign, bodyColor: e.tooltips.bodyColor, _bodyFontFamily: i.getValueOrDefault(e.tooltips.bodyFontFamily, t.defaults.global.defaultFontFamily), _bodyFontStyle: i.getValueOrDefault(e.tooltips.bodyFontStyle, t.defaults.global.defaultFontStyle), _bodyAlign: e.tooltips.bodyAlign, bodyFontSize: i.getValueOrDefault(e.tooltips.bodyFontSize, t.defaults.global.defaultFontSize), bodySpacing: e.tooltips.bodySpacing, titleColor: e.tooltips.titleColor, _titleFontFamily: i.getValueOrDefault(e.tooltips.titleFontFamily, t.defaults.global.defaultFontFamily), _titleFontStyle: i.getValueOrDefault(e.tooltips.titleFontStyle, t.defaults.global.defaultFontStyle), titleFontSize: i.getValueOrDefault(e.tooltips.titleFontSize, t.defaults.global.defaultFontSize), _titleAlign: e.tooltips.titleAlign, titleSpacing: e.tooltips.titleSpacing, titleMarginBottom: e.tooltips.titleMarginBottom, footerColor: e.tooltips.footerColor, _footerFontFamily: i.getValueOrDefault(e.tooltips.footerFontFamily, t.defaults.global.defaultFontFamily), _footerFontStyle: i.getValueOrDefault(e.tooltips.footerFontStyle, t.defaults.global.defaultFontStyle), footerFontSize: i.getValueOrDefault(e.tooltips.footerFontSize, t.defaults.global.defaultFontSize), _footerAlign: e.tooltips.footerAlign, footerSpacing: e.tooltips.footerSpacing, footerMarginTop: e.tooltips.footerMarginTop, caretSize: e.tooltips.caretSize, cornerRadius: e.tooltips.cornerRadius, backgroundColor: e.tooltips.backgroundColor, opacity: 0, legendColorBackground: e.tooltips.multiKeyBackground } })
                },
                getTitle: function() {
                    var t = this._options.tooltips.callbacks.beforeTitle.apply(this, arguments),
                        i = this._options.tooltips.callbacks.title.apply(this, arguments),
                        s = this._options.tooltips.callbacks.afterTitle.apply(this, arguments),
                        a = [];
                    return a = e(a, t), a = e(a, i), a = e(a, s)
                },
                getBeforeBody: function() { var t = this._options.tooltips.callbacks.beforeBody.apply(this, arguments); return i.isArray(t) ? t : void 0 !== t ? [t] : [] },
                getBody: function(t, e) { var s = []; return i.each(t, function(t) { i.pushAllIfDefined(this._options.tooltips.callbacks.beforeLabel.call(this, t, e), s), i.pushAllIfDefined(this._options.tooltips.callbacks.label.call(this, t, e), s), i.pushAllIfDefined(this._options.tooltips.callbacks.afterLabel.call(this, t, e), s) }, this), s },
                getAfterBody: function() { var t = this._options.tooltips.callbacks.afterBody.apply(this, arguments); return i.isArray(t) ? t : void 0 !== t ? [t] : [] },
                getFooter: function() {
                    var t = this._options.tooltips.callbacks.beforeFooter.apply(this, arguments),
                        i = this._options.tooltips.callbacks.footer.apply(this, arguments),
                        s = this._options.tooltips.callbacks.afterFooter.apply(this, arguments),
                        a = [];
                    return a = e(a, t), a = e(a, i), a = e(a, s)
                },
                getAveragePosition: function(t) {
                    if (!t.length) return !1;
                    var e = [],
                        s = [];
                    i.each(t, function(t) {
                        if (t) {
                            var i = t.tooltipPosition();
                            e.push(i.x), s.push(i.y)
                        }
                    });
                    for (var a = 0, o = 0, n = 0; n < e.length; n++) a += e[n], o += s[n];
                    return { x: Math.round(a / e.length), y: Math.round(o / e.length) }
                },
                update: function(t) {
                    if (this._active.length) {
                        this._model.opacity = 1;
                        var e, s = this._active[0],
                            a = [],
                            o = [];
                        if ("single" === this._options.tooltips.mode) {
                            var n = s._yScale || s._scale;
                            o.push({ xLabel: s._xScale ? s._xScale.getLabelForIndex(s._index, s._datasetIndex) : "", yLabel: n ? n.getLabelForIndex(s._index, s._datasetIndex) : "", index: s._index, datasetIndex: s._datasetIndex }), e = this.getAveragePosition(this._active)
                        } else i.each(this._data.datasets, function(t, e) {
                            if (this._chartInstance.isDatasetVisible(e)) {
                                var i = this._chartInstance.getDatasetMeta(e),
                                    a = i.data[s._index];
                                if (a) {
                                    var n = s._yScale || s._scale;
                                    o.push({ xLabel: a._xScale ? a._xScale.getLabelForIndex(a._index, a._datasetIndex) : "", yLabel: n ? n.getLabelForIndex(a._index, a._datasetIndex) : "", index: s._index, datasetIndex: e })
                                }
                            }
                        }, this), i.each(this._active, function(t) { t && a.push({ borderColor: t._view.borderColor, backgroundColor: t._view.backgroundColor }) }, null), e = this.getAveragePosition(this._active);
                        i.extend(this._model, { title: this.getTitle(o, this._data), beforeBody: this.getBeforeBody(o, this._data), body: this.getBody(o, this._data), afterBody: this.getAfterBody(o, this._data), footer: this.getFooter(o, this._data) }), i.extend(this._model, { x: Math.round(e.x), y: Math.round(e.y), caretPadding: i.getValueOrDefault(e.padding, 2), labelColors: a });
                        var r = this.getTooltipSize(this._model);
                        this.determineAlignment(r), i.extend(this._model, this.getBackgroundPoint(this._model, r))
                    } else this._model.opacity = 0;
                    return t && this._options.tooltips.custom && this._options.tooltips.custom.call(this, this._model), this
                },
                getTooltipSize: function(t) {
                    var e = this._chart.ctx,
                        s = { height: 2 * t.yPadding, width: 0 },
                        a = t.body.length + t.beforeBody.length + t.afterBody.length;
                    return s.height += t.title.length * t.titleFontSize, s.height += (t.title.length - 1) * t.titleSpacing, s.height += t.title.length ? t.titleMarginBottom : 0, s.height += a * t.bodyFontSize, s.height += a ? (a - 1) * t.bodySpacing : 0, s.height += t.footer.length ? t.footerMarginTop : 0, s.height += t.footer.length * t.footerFontSize, s.height += t.footer.length ? (t.footer.length - 1) * t.footerSpacing : 0, e.font = i.fontString(t.titleFontSize, t._titleFontStyle, t._titleFontFamily), i.each(t.title, function(t) { s.width = Math.max(s.width, e.measureText(t).width) }), e.font = i.fontString(t.bodyFontSize, t._bodyFontStyle, t._bodyFontFamily), i.each(t.beforeBody.concat(t.afterBody), function(t) { s.width = Math.max(s.width, e.measureText(t).width) }), i.each(t.body, function(i) { s.width = Math.max(s.width, e.measureText(i).width + ("single" !== this._options.tooltips.mode ? t.bodyFontSize + 2 : 0)) }, this), e.font = i.fontString(t.footerFontSize, t._footerFontStyle, t._footerFontFamily), i.each(t.footer, function(t) { s.width = Math.max(s.width, e.measureText(t).width) }), s.width += 2 * t.xPadding, s
                },
                determineAlignment: function(t) {
                    this._model.y < t.height ? this._model.yAlign = "top" : this._model.y > this._chart.height - t.height && (this._model.yAlign = "bottom");
                    var e, i, s, a, o, n = this,
                        r = (this._chartInstance.chartArea.left + this._chartInstance.chartArea.right) / 2,
                        h = (this._chartInstance.chartArea.top + this._chartInstance.chartArea.bottom) / 2;
                    "center" === this._model.yAlign ? (e = function(t) { return r >= t }, i = function(t) { return t > r }) : (e = function(e) { return e <= t.width / 2 }, i = function(e) { return e >= n._chart.width - t.width / 2 }), s = function(e) { return e + t.width > n._chart.width }, a = function(e) { return e - t.width < 0 }, o = function(t) { return h >= t ? "top" : "bottom" }, e(this._model.x) ? (this._model.xAlign = "left", s(this._model.x) && (this._model.xAlign = "center", this._model.yAlign = o(this._model.y))) : i(this._model.x) && (this._model.xAlign = "right", a(this._model.x) && (this._model.xAlign = "center", this._model.yAlign = o(this._model.y)))
                },
                getBackgroundPoint: function(t, e) { var i = { x: t.x, y: t.y }; return "right" === t.xAlign ? i.x -= e.width : "center" === t.xAlign && (i.x -= e.width / 2), "top" === t.yAlign ? i.y += t.caretPadding + t.caretSize : "bottom" === t.yAlign ? i.y -= e.height + t.caretPadding + t.caretSize : i.y -= e.height / 2, "center" === t.yAlign ? "left" === t.xAlign ? i.x += t.caretPadding + t.caretSize : "right" === t.xAlign && (i.x -= t.caretPadding + t.caretSize) : "left" === t.xAlign ? i.x -= t.cornerRadius + t.caretPadding : "right" === t.xAlign && (i.x += t.cornerRadius + t.caretPadding), i },
                drawCaret: function(t, e, s, a) {
                    var o, n, r, h, l, c, d = this._view,
                        u = this._chart.ctx;
                    "center" === d.yAlign ? ("left" === d.xAlign ? (o = t.x, n = o - d.caretSize, r = o) : (o = t.x + e.width, n = o + d.caretSize, r = o), l = t.y + e.height / 2, h = l - d.caretSize, c = l + d.caretSize) : ("left" === d.xAlign ? (o = t.x + d.cornerRadius, n = o + d.caretSize, r = n + d.caretSize) : "right" === d.xAlign ? (o = t.x + e.width - d.cornerRadius, n = o - d.caretSize, r = n - d.caretSize) : (n = t.x + e.width / 2, o = n - d.caretSize, r = n + d.caretSize), "top" === d.yAlign ? (h = t.y, l = h - d.caretSize, c = h) : (h = t.y + e.height, l = h + d.caretSize, c = h));
                    var f = i.color(d.backgroundColor);
                    u.fillStyle = f.alpha(s * f.alpha()).rgbString(), u.beginPath(), u.moveTo(o, h), u.lineTo(n, l), u.lineTo(r, c), u.closePath(), u.fill()
                },
                drawTitle: function(t, e, s, a) {
                    if (e.title.length) {
                        s.textAlign = e._titleAlign, s.textBaseline = "top";
                        var o = i.color(e.titleColor);
                        s.fillStyle = o.alpha(a * o.alpha()).rgbString(), s.font = i.fontString(e.titleFontSize, e._titleFontStyle, e._titleFontFamily), i.each(e.title, function(i, a) { s.fillText(i, t.x, t.y), t.y += e.titleFontSize + e.titleSpacing, a + 1 === e.title.length && (t.y += e.titleMarginBottom - e.titleSpacing) })
                    }
                },
                drawBody: function(t, e, s, a) {
                    s.textAlign = e._bodyAlign, s.textBaseline = "top";
                    var o = i.color(e.bodyColor);
                    s.fillStyle = o.alpha(a * o.alpha()).rgbString(), s.font = i.fontString(e.bodyFontSize, e._bodyFontStyle, e._bodyFontFamily), i.each(e.beforeBody, function(i) { s.fillText(i, t.x, t.y), t.y += e.bodyFontSize + e.bodySpacing }), i.each(e.body, function(o, n) { "single" !== this._options.tooltips.mode && (s.fillStyle = i.color(e.legendColorBackground).alpha(a).rgbaString(), s.fillRect(t.x, t.y, e.bodyFontSize, e.bodyFontSize), s.strokeStyle = i.color(e.labelColors[n].borderColor).alpha(a).rgbaString(), s.strokeRect(t.x, t.y, e.bodyFontSize, e.bodyFontSize), s.fillStyle = i.color(e.labelColors[n].backgroundColor).alpha(a).rgbaString(), s.fillRect(t.x + 1, t.y + 1, e.bodyFontSize - 2, e.bodyFontSize - 2), s.fillStyle = i.color(e.bodyColor).alpha(a).rgbaString()), s.fillText(o, t.x + ("single" !== this._options.tooltips.mode ? e.bodyFontSize + 2 : 0), t.y), t.y += e.bodyFontSize + e.bodySpacing }, this), i.each(e.afterBody, function(i) { s.fillText(i, t.x, t.y), t.y += e.bodyFontSize }), t.y -= e.bodySpacing
                },
                drawFooter: function(t, e, s, a) {
                    if (e.footer.length) {
                        t.y += e.footerMarginTop, s.textAlign = e._footerAlign, s.textBaseline = "top";
                        var o = i.color(e.footerColor);
                        s.fillStyle = o.alpha(a * o.alpha()).rgbString(), s.font = i.fontString(e.footerFontSize, e._footerFontStyle, e._footerFontFamily), i.each(e.footer, function(i) { s.fillText(i, t.x, t.y), t.y += e.footerFontSize + e.footerSpacing })
                    }
                },
                draw: function() {
                    var t = this._chart.ctx,
                        e = this._view;
                    if (0 !== e.opacity) {
                        var s = e.caretPadding,
                            a = this.getTooltipSize(e),
                            o = { x: e.x, y: e.y },
                            n = Math.abs(e.opacity < .001) ? 0 : e.opacity;
                        if (this._options.tooltips.enabled) {
                            var r = i.color(e.backgroundColor);
                            t.fillStyle = r.alpha(n * r.alpha()).rgbString(), i.drawRoundedRectangle(t, o.x, o.y, a.width, a.height, e.cornerRadius), t.fill(), this.drawCaret(o, a, n, s), o.x += e.xPadding, o.y += e.yPadding, this.drawTitle(o, e, t, n), this.drawBody(o, e, t, n), this.drawFooter(o, e, t, n)
                        }
                    }
                }
            })
        }
    }, {}],
    34: [function(t, e, i) {
        "use strict";
        e.exports = function(t, e) {
            var i = t.helpers,
                s = t.defaults.global;
            s.elements.arc = { backgroundColor: s.defaultColor, borderColor: "#fff", borderWidth: 2 }, t.elements.Arc = t.Element.extend({
                inLabelRange: function(t) { var e = this._view; return e ? Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2) : !1 },
                inRange: function(t, e) {
                    var s = this._view;
                    if (s) {
                        for (var a = i.getAngleFromPoint(s, { x: t, y: e }), o = a.angle, n = a.distance, r = s.startAngle, h = s.endAngle; r > h;) h += 2 * Math.PI;
                        for (; o > h;) o -= 2 * Math.PI;
                        for (; r > o;) o += 2 * Math.PI;
                        var l = o >= r && h >= o,
                            c = n >= s.innerRadius && n <= s.outerRadius;
                        return l && c
                    }
                    return !1
                },
                tooltipPosition: function() {
                    var t = this._view,
                        e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                        i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                    return { x: t.x + Math.cos(e) * i, y: t.y + Math.sin(e) * i }
                },
                draw: function() {
                    var t = this._chart.ctx,
                        e = this._view,
                        i = e.startAngle,
                        s = e.endAngle;
                    t.beginPath(), t.arc(e.x, e.y, e.outerRadius, i, s), t.arc(e.x, e.y, e.innerRadius, s, i, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
                }
            })
        }
    }, {}],
    35: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers;
            t.defaults.global.elements.line = { tension: .4, backgroundColor: t.defaults.global.defaultColor, borderWidth: 3, borderColor: t.defaults.global.defaultColor, borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", fill: !0 }, t.elements.Line = t.Element.extend({
                lineToNextPoint: function(t, e, i, s, a) {
                    var o = this._chart.ctx;
                    e._view.skip ? s.call(this, t, e, i) : t._view.skip ? a.call(this, t, e, i) : 0 === e._view.tension ? o.lineTo(e._view.x, e._view.y) : o.bezierCurveTo(t._view.controlPointNextX, t._view.controlPointNextY, e._view.controlPointPreviousX, e._view.controlPointPreviousY, e._view.x, e._view.y)
                },
                draw: function() {
                    function i(t) { n._view.skip || r._view.skip ? t && o.lineTo(s._view.scaleZero.x, s._view.scaleZero.y) : o.bezierCurveTo(r._view.controlPointNextX, r._view.controlPointNextY, n._view.controlPointPreviousX, n._view.controlPointPreviousY, n._view.x, n._view.y) }
                    var s = this,
                        a = this._view,
                        o = this._chart.ctx,
                        n = this._children[0],
                        r = this._children[this._children.length - 1];
                    o.save(), this._children.length > 0 && a.fill && (o.beginPath(), e.each(this._children, function(t, i) {
                        var s = e.previousItem(this._children, i),
                            n = e.nextItem(this._children, i);
                        0 === i ? (this._loop ? o.moveTo(a.scaleZero.x, a.scaleZero.y) : o.moveTo(t._view.x, a.scaleZero), t._view.skip ? this._loop || o.moveTo(n._view.x, this._view.scaleZero) : o.lineTo(t._view.x, t._view.y)) : this.lineToNextPoint(s, t, n, function(t, e, i) { this._loop ? o.lineTo(this._view.scaleZero.x, this._view.scaleZero.y) : (o.lineTo(t._view.x, this._view.scaleZero), o.moveTo(i._view.x, this._view.scaleZero)) }, function(t, e) { o.lineTo(e._view.x, e._view.y) })
                    }, this), this._loop ? i(!0) : (o.lineTo(this._children[this._children.length - 1]._view.x, a.scaleZero), o.lineTo(this._children[0]._view.x, a.scaleZero)), o.fillStyle = a.backgroundColor || t.defaults.global.defaultColor, o.closePath(), o.fill()), o.lineCap = a.borderCapStyle || t.defaults.global.elements.line.borderCapStyle, o.setLineDash && o.setLineDash(a.borderDash || t.defaults.global.elements.line.borderDash), o.lineDashOffset = a.borderDashOffset || t.defaults.global.elements.line.borderDashOffset, o.lineJoin = a.borderJoinStyle || t.defaults.global.elements.line.borderJoinStyle, o.lineWidth = a.borderWidth || t.defaults.global.elements.line.borderWidth, o.strokeStyle = a.borderColor || t.defaults.global.defaultColor, o.beginPath(), e.each(this._children, function(t, i) {
                        var s = e.previousItem(this._children, i),
                            a = e.nextItem(this._children, i);
                        0 === i ? o.moveTo(t._view.x, t._view.y) : this.lineToNextPoint(s, t, a, function(t, e, i) { o.moveTo(i._view.x, i._view.y) }, function(t, e) { o.moveTo(e._view.x, e._view.y) })
                    }, this), this._loop && this._children.length > 0 && i(), o.stroke(), o.restore()
                }
            })
        }
    }, {}],
    36: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                i = t.defaults.global;
            i.elements.point = { radius: 3, pointStyle: "circle", backgroundColor: i.defaultColor, borderWidth: 1, borderColor: i.defaultColor, hitRadius: 1, hoverRadius: 4, hoverBorderWidth: 1 }, t.elements.Point = t.Element.extend({
                inRange: function(t, e) { var i = this._view; return i ? Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2) : !1 },
                inLabelRange: function(t) { var e = this._view; return e ? Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2) : !1 },
                tooltipPosition: function() { var t = this._view; return { x: t.x, y: t.y, padding: t.radius + t.borderWidth } },
                draw: function() {
                    var i = this._view,
                        s = i.x,
                        a = i.y,
                        o = this._chart.ctx;
                    if (!i.skip) {
                        var n = i.pointStyle;
                        if ("object" == typeof n && ("[object HTMLImageElement]" === n.toString() || "[object HTMLCanvasElement]" === n.toString())) return void o.drawImage(n, s - n.width / 2, a - n.height / 2);
                        if (!isNaN(i.radius) && i.radius > 0) {
                            o.strokeStyle = i.borderColor || t.defaults.global.defaultColor, o.lineWidth = e.getValueOrDefault(i.borderWidth, t.defaults.global.elements.point.borderWidth), o.fillStyle = i.backgroundColor || t.defaults.global.defaultColor;
                            var r, h, l = i.radius;
                            switch (n) {
                                default: o.beginPath(),
                                o.arc(s, a, l, 0, 2 * Math.PI),
                                o.closePath(),
                                o.fill();
                                break;
                                case "triangle":
                                        o.beginPath();
                                    var c = 3 * l / Math.sqrt(3),
                                        d = c * Math.sqrt(3) / 2;o.moveTo(s - c / 2, a + d / 3),
                                    o.lineTo(s + c / 2, a + d / 3),
                                    o.lineTo(s, a - 2 * d / 3),
                                    o.closePath(),
                                    o.fill();
                                    break;
                                case "rect":
                                        o.fillRect(s - 1 / Math.SQRT2 * l, a - 1 / Math.SQRT2 * l, 2 / Math.SQRT2 * l, 2 / Math.SQRT2 * l),
                                    o.strokeRect(s - 1 / Math.SQRT2 * l, a - 1 / Math.SQRT2 * l, 2 / Math.SQRT2 * l, 2 / Math.SQRT2 * l);
                                    break;
                                case "rectRot":
                                        o.translate(s, a),
                                    o.rotate(Math.PI / 4),
                                    o.fillRect(-1 / Math.SQRT2 * l, -1 / Math.SQRT2 * l, 2 / Math.SQRT2 * l, 2 / Math.SQRT2 * l),
                                    o.strokeRect(-1 / Math.SQRT2 * l, -1 / Math.SQRT2 * l, 2 / Math.SQRT2 * l, 2 / Math.SQRT2 * l),
                                    o.setTransform(1, 0, 0, 1, 0, 0);
                                    break;
                                case "cross":
                                        o.beginPath(),
                                    o.moveTo(s, a + l),
                                    o.lineTo(s, a - l),
                                    o.moveTo(s - l, a),
                                    o.lineTo(s + l, a),
                                    o.closePath();
                                    break;
                                case "crossRot":
                                        o.beginPath(),
                                    r = Math.cos(Math.PI / 4) * l,
                                    h = Math.sin(Math.PI / 4) * l,
                                    o.moveTo(s - r, a - h),
                                    o.lineTo(s + r, a + h),
                                    o.moveTo(s - r, a + h),
                                    o.lineTo(s + r, a - h),
                                    o.closePath();
                                    break;
                                case "star":
                                        o.beginPath(),
                                    o.moveTo(s, a + l),
                                    o.lineTo(s, a - l),
                                    o.moveTo(s - l, a),
                                    o.lineTo(s + l, a),
                                    r = Math.cos(Math.PI / 4) * l,
                                    h = Math.sin(Math.PI / 4) * l,
                                    o.moveTo(s - r, a - h),
                                    o.lineTo(s + r, a + h),
                                    o.moveTo(s - r, a + h),
                                    o.lineTo(s + r, a - h),
                                    o.closePath();
                                    break;
                                case "line":
                                        o.beginPath(),
                                    o.moveTo(s - l, a),
                                    o.lineTo(s + l, a),
                                    o.closePath();
                                    break;
                                case "dash":
                                        o.beginPath(),
                                    o.moveTo(s, a),
                                    o.lineTo(s + l, a),
                                    o.closePath()
                            }
                            o.stroke()
                        }
                    }
                }
            })
        }
    }, {}],
    37: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = (t.helpers, t.defaults.global);
            e.elements.rectangle = { backgroundColor: e.defaultColor, borderWidth: 0, borderColor: e.defaultColor, borderSkipped: "bottom" }, t.elements.Rectangle = t.Element.extend({
                draw: function() {
                    function t(t) { return h[(c + t) % 4] }
                    var e = this._chart.ctx,
                        i = this._view,
                        s = i.width / 2,
                        a = i.x - s,
                        o = i.x + s,
                        n = i.base - (i.base - i.y),
                        r = i.borderWidth / 2;
                    i.borderWidth && (a += r, o -= r, n += r), e.beginPath(), e.fillStyle = i.backgroundColor, e.strokeStyle = i.borderColor, e.lineWidth = i.borderWidth;
                    var h = [
                            [a, i.base],
                            [a, n],
                            [o, n],
                            [o, i.base]
                        ],
                        l = ["bottom", "left", "top", "right"],
                        c = l.indexOf(i.borderSkipped, 0); - 1 === c && (c = 0), e.moveTo.apply(e, t(0));
                    for (var d = 1; 4 > d; d++) e.lineTo.apply(e, t(d));
                    e.fill(), i.borderWidth && e.stroke()
                },
                height: function() { var t = this._view; return t.base - t.y },
                inRange: function(t, e) { var i = this._view; return i ? i.y < i.base ? t >= i.x - i.width / 2 && t <= i.x + i.width / 2 && e >= i.y && e <= i.base : t >= i.x - i.width / 2 && t <= i.x + i.width / 2 && e >= i.base && e <= i.y : !1 },
                inLabelRange: function(t) { var e = this._view; return e ? t >= e.x - e.width / 2 && t <= e.x + e.width / 2 : !1 },
                tooltipPosition: function() { var t = this._view; return { x: t.x, y: t.y } }
            })
        }
    }, {}],
    38: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                i = { position: "bottom" },
                s = t.Scale.extend({
                    determineDataLimits: function() {
                        this.minIndex = 0, this.maxIndex = this.chart.data.labels.length - 1;
                        var t;
                        void 0 !== this.options.ticks.min && (t = e.indexOf(this.chart.data.labels, this.options.ticks.min), this.minIndex = -1 !== t ? t : this.minIndex), void 0 !== this.options.ticks.max && (t = e.indexOf(this.chart.data.labels, this.options.ticks.max), this.maxIndex = -1 !== t ? t : this.maxIndex), this.min = this.chart.data.labels[this.minIndex], this.max = this.chart.data.labels[this.maxIndex]
                    },
                    buildTicks: function(t) { this.ticks = 0 === this.minIndex && this.maxIndex === this.chart.data.labels.length - 1 ? this.chart.data.labels : this.chart.data.labels.slice(this.minIndex, this.maxIndex + 1) },
                    getLabelForIndex: function(t, e) { return this.ticks[t] },
                    getPixelForValue: function(t, e, i, s) {
                        var a = Math.max(this.maxIndex + 1 - this.minIndex - (this.options.gridLines.offsetGridLines ? 0 : 1), 1);
                        if (this.isHorizontal()) {
                            var o = this.width - (this.paddingLeft + this.paddingRight),
                                n = o / a,
                                r = n * (e - this.minIndex) + this.paddingLeft;
                            return this.options.gridLines.offsetGridLines && s && (r += n / 2), this.left + Math.round(r)
                        }
                        var h = this.height - (this.paddingTop + this.paddingBottom),
                            l = h / a,
                            c = l * (e - this.minIndex) + this.paddingTop;
                        return this.options.gridLines.offsetGridLines && s && (c += l / 2), this.top + Math.round(c)
                    },
                    getPixelForTick: function(t, e) { return this.getPixelForValue(this.ticks[t], t + this.minIndex, null, e) },
                    getValueForPixel: function(t) {
                        var e, i = Math.max(this.ticks.length - (this.options.gridLines.offsetGridLines ? 0 : 1), 1),
                            s = this.isHorizontal(),
                            a = s ? this.width - (this.paddingLeft + this.paddingRight) : this.height - (this.paddingTop + this.paddingBottom),
                            o = a / i;
                        return this.options.gridLines.offsetGridLines && (t -= o / 2), t -= s ? this.paddingLeft : this.paddingTop, e = 0 >= t ? 0 : Math.round(t / o)
                    }
                });
            t.scaleService.registerScaleType("category", s, i)
        }
    }, {}],
    39: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                i = {
                    position: "left",
                    ticks: {
                        callback: function(t, i, s) {
                            var a = s.length > 3 ? s[2] - s[1] : s[1] - s[0];
                            Math.abs(a) > 1 && t !== Math.floor(t) && (a = t - Math.floor(t));
                            var o = e.log10(Math.abs(a)),
                                n = "";
                            if (0 !== t) {
                                var r = -1 * Math.floor(o);
                                r = Math.max(Math.min(r, 20), 0), n = t.toFixed(r)
                            } else n = "0";
                            return n
                        }
                    }
                },
                s = t.Scale.extend({
                    determineDataLimits: function() {
                        if (this.min = null, this.max = null, this.options.stacked) {
                            var t = {},
                                i = !1,
                                s = !1;
                            e.each(this.chart.data.datasets, function(a, o) {
                                var n = this.chart.getDatasetMeta(o);
                                void 0 === t[n.type] && (t[n.type] = { positiveValues: [], negativeValues: [] });
                                var r = t[n.type].positiveValues,
                                    h = t[n.type].negativeValues;
                                this.chart.isDatasetVisible(o) && (this.isHorizontal() ? n.xAxisID === this.id : n.yAxisID === this.id) && e.each(a.data, function(t, e) {
                                    var a = +this.getRightValue(t);
                                    isNaN(a) || n.data[e].hidden || (r[e] = r[e] || 0, h[e] = h[e] || 0, this.options.relativePoints ? r[e] = 100 : 0 > a ? (s = !0, h[e] += a) : (i = !0, r[e] += a))
                                }, this)
                            }, this), e.each(t, function(t) {
                                var i = t.positiveValues.concat(t.negativeValues),
                                    s = e.min(i),
                                    a = e.max(i);
                                this.min = null === this.min ? s : Math.min(this.min, s), this.max = null === this.max ? a : Math.max(this.max, a)
                            }, this)
                        } else e.each(this.chart.data.datasets, function(t, i) {
                            var s = this.chart.getDatasetMeta(i);
                            this.chart.isDatasetVisible(i) && (this.isHorizontal() ? s.xAxisID === this.id : s.yAxisID === this.id) && e.each(t.data, function(t, e) {
                                var i = +this.getRightValue(t);
                                isNaN(i) || s.data[e].hidden || (null === this.min ? this.min = i : i < this.min && (this.min = i), null === this.max ? this.max = i : i > this.max && (this.max = i))
                            }, this)
                        }, this);
                        if (this.options.ticks.beginAtZero) {
                            var a = e.sign(this.min),
                                o = e.sign(this.max);
                            0 > a && 0 > o ? this.max = 0 : a > 0 && o > 0 && (this.min = 0)
                        }
                        void 0 !== this.options.ticks.min ? this.min = this.options.ticks.min : void 0 !== this.options.ticks.suggestedMin && (this.min = Math.min(this.min, this.options.ticks.suggestedMin)), void 0 !== this.options.ticks.max ? this.max = this.options.ticks.max : void 0 !== this.options.ticks.suggestedMax && (this.max = Math.max(this.max, this.options.ticks.suggestedMax)), this.min === this.max && (this.max++, this.options.ticks.beginAtZero || this.min--)
                    },
                    buildTicks: function() {
                        this.ticks = [];
                        var i;
                        if (this.isHorizontal()) i = Math.min(this.options.ticks.maxTicksLimit ? this.options.ticks.maxTicksLimit : 11, Math.ceil(this.width / 50));
                        else {
                            var s = e.getValueOrDefault(this.options.ticks.fontSize, t.defaults.global.defaultFontSize);
                            i = Math.min(this.options.ticks.maxTicksLimit ? this.options.ticks.maxTicksLimit : 11, Math.ceil(this.height / (2 * s)))
                        }
                        i = Math.max(2, i);
                        var a, o = this.options.ticks.fixedStepSize && this.options.ticks.fixedStepSize > 0 || this.options.ticks.stepSize && this.options.ticks.stepSize > 0;
                        if (o) a = e.getValueOrDefault(this.options.ticks.fixedStepSize, this.options.ticks.stepSize);
                        else {
                            var n = e.niceNum(this.max - this.min, !1);
                            a = e.niceNum(n / (i - 1), !0)
                        }
                        var r = Math.floor(this.min / a) * a,
                            h = Math.ceil(this.max / a) * a,
                            l = (h - r) / a;
                        l = e.almostEquals(l, Math.round(l), a / 1e3) ? Math.round(l) : Math.ceil(l), this.ticks.push(void 0 !== this.options.ticks.min ? this.options.ticks.min : r);
                        for (var c = 1; l > c; ++c) this.ticks.push(r + c * a);
                        this.ticks.push(void 0 !== this.options.ticks.max ? this.options.ticks.max : h), ("left" === this.options.position || "right" === this.options.position) && this.ticks.reverse(), this.max = e.max(this.ticks), this.min = e.min(this.ticks), this.options.ticks.reverse ? (this.ticks.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max)
                    },
                    getLabelForIndex: function(t, e) { return +this.getRightValue(this.chart.data.datasets[e].data[t]) },
                    convertTicksToLabels: function() { this.ticksAsNumbers = this.ticks.slice(), this.zeroLineIndex = this.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(this) },
                    getPixelForValue: function(t, e, i, s) {
                        var a, o = +this.getRightValue(t),
                            n = this.end - this.start;
                        if (this.isHorizontal()) { var r = this.width - (this.paddingLeft + this.paddingRight); return a = this.left + r / n * (o - this.start), Math.round(a + this.paddingLeft) }
                        var h = this.height - (this.paddingTop + this.paddingBottom);
                        return a = this.bottom - this.paddingBottom - h / n * (o - this.start), Math.round(a)
                    },
                    getValueForPixel: function(t) {
                        var e;
                        if (this.isHorizontal()) {
                            var i = this.width - (this.paddingLeft + this.paddingRight);
                            e = (t - this.left - this.paddingLeft) / i
                        } else {
                            var s = this.height - (this.paddingTop + this.paddingBottom);
                            e = (this.bottom - this.paddingBottom - t) / s
                        }
                        return this.start + (this.end - this.start) * e
                    },
                    getPixelForTick: function(t, e) { return this.getPixelForValue(this.ticksAsNumbers[t], null, null, e) }
                });
            t.scaleService.registerScaleType("linear", s, i)
        }
    }, {}],
    40: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                i = {
                    position: "left",
                    ticks: {
                        callback: function(e, i, s) {
                            var a = e / Math.pow(10, Math.floor(t.helpers.log10(e)));
                            return 1 === a || 2 === a || 5 === a || 0 === i || i === s.length - 1 ? e.toExponential() : ""
                        }
                    }
                },
                s = t.Scale.extend({
                    determineDataLimits: function() {
                        if (this.min = null, this.max = null, this.options.stacked) {
                            var t = {};
                            e.each(this.chart.data.datasets, function(i, s) {
                                var a = this.chart.getDatasetMeta(s);
                                this.chart.isDatasetVisible(s) && (this.isHorizontal() ? a.xAxisID === this.id : a.yAxisID === this.id) && (void 0 === t[a.type] && (t[a.type] = []), e.each(i.data, function(e, i) {
                                    var s = t[a.type],
                                        o = +this.getRightValue(e);
                                    isNaN(o) || a.data[i].hidden || (s[i] = s[i] || 0, this.options.relativePoints ? s[i] = 100 : s[i] += o)
                                }, this))
                            }, this), e.each(t, function(t) {
                                var i = e.min(t),
                                    s = e.max(t);
                                this.min = null === this.min ? i : Math.min(this.min, i), this.max = null === this.max ? s : Math.max(this.max, s)
                            }, this)
                        } else e.each(this.chart.data.datasets, function(t, i) {
                            var s = this.chart.getDatasetMeta(i);
                            this.chart.isDatasetVisible(i) && (this.isHorizontal() ? s.xAxisID === this.id : s.yAxisID === this.id) && e.each(t.data, function(t, e) {
                                var i = +this.getRightValue(t);
                                isNaN(i) || s.data[e].hidden || (null === this.min ? this.min = i : i < this.min && (this.min = i), null === this.max ? this.max = i : i > this.max && (this.max = i))
                            }, this)
                        }, this);
                        this.min = void 0 !== this.options.ticks.min ? this.options.ticks.min : this.min, this.max = void 0 !== this.options.ticks.max ? this.options.ticks.max : this.max, this.min === this.max && (0 !== this.min && null !== this.min ? (this.min = Math.pow(10, Math.floor(e.log10(this.min)) - 1), this.max = Math.pow(10, Math.floor(e.log10(this.max)) + 1)) : (this.min = 1, this.max = 10))
                    },
                    buildTicks: function() {
                        this.ticks = [];
                        for (var t = void 0 !== this.options.ticks.min ? this.options.ticks.min : Math.pow(10, Math.floor(e.log10(this.min))); t < this.max;) {
                            this.ticks.push(t);
                            var i = Math.floor(e.log10(t)),
                                s = Math.floor(t / Math.pow(10, i)) + 1;
                            10 === s && (s = 1, ++i), t = s * Math.pow(10, i)
                        }
                        var a = void 0 !== this.options.ticks.max ? this.options.ticks.max : t;
                        this.ticks.push(a), ("left" === this.options.position || "right" === this.options.position) && this.ticks.reverse(), this.max = e.max(this.ticks), this.min = e.min(this.ticks), this.options.ticks.reverse ? (this.ticks.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max)
                    },
                    convertTicksToLabels: function() { this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this) },
                    getLabelForIndex: function(t, e) { return +this.getRightValue(this.chart.data.datasets[e].data[t]) },
                    getPixelForTick: function(t, e) { return this.getPixelForValue(this.tickValues[t], null, null, e) },
                    getPixelForValue: function(t, i, s, a) {
                        var o, n = +this.getRightValue(t),
                            r = e.log10(this.end) - e.log10(this.start);
                        if (this.isHorizontal())
                            if (0 === n) o = this.left + this.paddingLeft;
                            else {
                                var h = this.width - (this.paddingLeft + this.paddingRight);
                                o = this.left + h / r * (e.log10(n) - e.log10(this.start)), o += this.paddingLeft
                            }
                        else if (0 === n) o = this.top + this.paddingTop;
                        else {
                            var l = this.height - (this.paddingTop + this.paddingBottom);
                            o = this.bottom - this.paddingBottom - l / r * (e.log10(n) - e.log10(this.start))
                        }
                        return o
                    },
                    getValueForPixel: function(t) {
                        var i, s = e.log10(this.end) - e.log10(this.start);
                        if (this.isHorizontal()) {
                            var a = this.width - (this.paddingLeft + this.paddingRight);
                            i = this.start * Math.pow(10, (t - this.left - this.paddingLeft) * s / a)
                        } else {
                            var o = this.height - (this.paddingTop + this.paddingBottom);
                            i = Math.pow(10, (this.bottom - this.paddingBottom - t) * s / o) / this.start
                        }
                        return i
                    }
                });
            t.scaleService.registerScaleType("logarithmic", s, i)
        }
    }, {}],
    41: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e = t.helpers,
                i = { display: !0, animate: !0, lineArc: !1, position: "chartArea", angleLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1 }, ticks: { showLabelBackdrop: !0, backdropColor: "rgba(255,255,255,0.75)", backdropPaddingY: 2, backdropPaddingX: 2 }, pointLabels: { fontSize: 10, callback: function(t) { return t } } },
                s = t.Scale.extend({
                    getValueCount: function() { return this.chart.data.labels.length },
                    setDimensions: function() {
                        this.width = this.maxWidth, this.height = this.maxHeight, this.xCenter = Math.round(this.width / 2), this.yCenter = Math.round(this.height / 2);
                        var i = e.min([this.height, this.width]),
                            s = e.getValueOrDefault(this.options.ticks.fontSize, t.defaults.global.defaultFontSize);
                        this.drawingArea = this.options.display ? i / 2 - (s / 2 + this.options.ticks.backdropPaddingY) : i / 2
                    },
                    determineDataLimits: function() {
                        if (this.min = null, this.max = null, e.each(this.chart.data.datasets, function(t, i) {
                                if (this.chart.isDatasetVisible(i)) {
                                    var s = this.chart.getDatasetMeta(i);
                                    e.each(t.data, function(t, e) {
                                        var i = +this.getRightValue(t);
                                        isNaN(i) || s.data[e].hidden || (null === this.min ? this.min = i : i < this.min && (this.min = i), null === this.max ? this.max = i : i > this.max && (this.max = i))
                                    }, this)
                                }
                            }, this), this.options.ticks.beginAtZero) {
                            var t = e.sign(this.min),
                                i = e.sign(this.max);
                            0 > t && 0 > i ? this.max = 0 : t > 0 && i > 0 && (this.min = 0)
                        }
                        void 0 !== this.options.ticks.min ? this.min = this.options.ticks.min : void 0 !== this.options.ticks.suggestedMin && (this.min = Math.min(this.min, this.options.ticks.suggestedMin)), void 0 !== this.options.ticks.max ? this.max = this.options.ticks.max : void 0 !== this.options.ticks.suggestedMax && (this.max = Math.max(this.max, this.options.ticks.suggestedMax)), this.min === this.max && (this.min--, this.max++)
                    },
                    buildTicks: function() {
                        this.ticks = [];
                        var i = e.getValueOrDefault(this.options.ticks.fontSize, t.defaults.global.defaultFontSize),
                            s = Math.min(this.options.ticks.maxTicksLimit ? this.options.ticks.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * i)));
                        s = Math.max(2, s);
                        var a = e.niceNum(this.max - this.min, !1),
                            o = e.niceNum(a / (s - 1), !0),
                            n = Math.floor(this.min / o) * o,
                            r = Math.ceil(this.max / o) * o,
                            h = Math.ceil((r - n) / o);
                        this.ticks.push(void 0 !== this.options.ticks.min ? this.options.ticks.min : n);
                        for (var l = 1; h > l; ++l) this.ticks.push(n + l * o);
                        this.ticks.push(void 0 !== this.options.ticks.max ? this.options.ticks.max : r), this.max = e.max(this.ticks), this.min = e.min(this.ticks), this.options.ticks.reverse ? (this.ticks.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), this.zeroLineIndex = this.ticks.indexOf(0)
                    },
                    convertTicksToLabels: function() { t.Scale.prototype.convertTicksToLabels.call(this), this.pointLabels = this.chart.data.labels.map(this.options.pointLabels.callback, this) },
                    getLabelForIndex: function(t, e) { return +this.getRightValue(this.chart.data.datasets[e].data[t]) },
                    fit: function() {
                        var i, s, a, o, n, r, h, l, c, d, u, f, g = e.getValueOrDefault(this.options.pointLabels.fontSize, t.defaults.global.defaultFontSize),
                            m = e.getValueOrDefault(this.options.pointLabels.fontStyle, t.defaults.global.defaultFontStyle),
                            p = e.getValueOrDefault(this.options.pointLabels.fontFamily, t.defaults.global.defaultFontFamily),
                            b = e.fontString(g, m, p),
                            v = e.min([this.height / 2 - g - 5, this.width / 2]),
                            x = this.width,
                            y = 0;
                        for (this.ctx.font = b, s = 0; s < this.getValueCount(); s++) i = this.getPointPosition(s, v), a = this.ctx.measureText(this.pointLabels[s] ? this.pointLabels[s] : "").width + 5, 0 === s || s === this.getValueCount() / 2 ? (o = a / 2, i.x + o > x && (x = i.x + o, n = s), i.x - o < y && (y = i.x - o, h = s)) : s < this.getValueCount() / 2 ? i.x + a > x && (x = i.x + a, n = s) : s > this.getValueCount() / 2 && i.x - a < y && (y = i.x - a, h = s);
                        c = y, d = Math.ceil(x - this.width), r = this.getIndexAngle(n), l = this.getIndexAngle(h), u = d / Math.sin(r + Math.PI / 2), f = c / Math.sin(l + Math.PI / 2), u = e.isNumber(u) ? u : 0, f = e.isNumber(f) ? f : 0, this.drawingArea = Math.round(v - (f + u) / 2), this.setCenterPoint(f, u)
                    },
                    setCenterPoint: function(t, e) {
                        var i = this.width - e - this.drawingArea,
                            s = t + this.drawingArea;
                        this.xCenter = Math.round((s + i) / 2 + this.left), this.yCenter = Math.round(this.height / 2 + this.top)
                    },
                    getIndexAngle: function(t) { var e = 2 * Math.PI / this.getValueCount(); return t * e - Math.PI / 2 },
                    getDistanceFromCenterForValue: function(t) { if (null === t) return 0; var e = this.drawingArea / (this.max - this.min); return this.options.reverse ? (this.max - t) * e : (t - this.min) * e },
                    getPointPosition: function(t, e) { var i = this.getIndexAngle(t); return { x: Math.round(Math.cos(i) * e) + this.xCenter, y: Math.round(Math.sin(i) * e) + this.yCenter } },
                    getPointPositionForValue: function(t, e) { return this.getPointPosition(t, this.getDistanceFromCenterForValue(e)) },
                    draw: function() {
                        if (this.options.display) {
                            var i = this.ctx;
                            if (e.each(this.ticks, function(s, a) {
                                    if (a > 0 || this.options.reverse) {
                                        var o = this.getDistanceFromCenterForValue(this.ticks[a]),
                                            n = this.yCenter - o;
                                        if (this.options.gridLines.display)
                                            if (i.strokeStyle = this.options.gridLines.color, i.lineWidth = this.options.gridLines.lineWidth, this.options.lineArc) i.beginPath(), i.arc(this.xCenter, this.yCenter, o, 0, 2 * Math.PI), i.closePath(), i.stroke();
                                            else {
                                                i.beginPath();
                                                for (var r = 0; r < this.getValueCount(); r++) {
                                                    var h = this.getPointPosition(r, this.getDistanceFromCenterForValue(this.ticks[a]));
                                                    0 === r ? i.moveTo(h.x, h.y) : i.lineTo(h.x, h.y)
                                                }
                                                i.closePath(), i.stroke()
                                            }
                                        if (this.options.ticks.display) {
                                            var l = e.getValueOrDefault(this.options.ticks.fontColor, t.defaults.global.defaultFontColor),
                                                c = e.getValueOrDefault(this.options.ticks.fontSize, t.defaults.global.defaultFontSize),
                                                d = e.getValueOrDefault(this.options.ticks.fontStyle, t.defaults.global.defaultFontStyle),
                                                u = e.getValueOrDefault(this.options.ticks.fontFamily, t.defaults.global.defaultFontFamily),
                                                f = e.fontString(c, d, u);
                                            if (i.font = f, this.options.ticks.showLabelBackdrop) {
                                                var g = i.measureText(s).width;
                                                i.fillStyle = this.options.ticks.backdropColor, i.fillRect(this.xCenter - g / 2 - this.options.ticks.backdropPaddingX, n - c / 2 - this.options.ticks.backdropPaddingY, g + 2 * this.options.ticks.backdropPaddingX, c + 2 * this.options.ticks.backdropPaddingY)
                                            }
                                            i.textAlign = "center", i.textBaseline = "middle", i.fillStyle = l, i.fillText(s, this.xCenter, n)
                                        }
                                    }
                                }, this), !this.options.lineArc) {
                                i.lineWidth = this.options.angleLines.lineWidth, i.strokeStyle = this.options.angleLines.color;
                                for (var s = this.getValueCount() - 1; s >= 0; s--) {
                                    if (this.options.angleLines.display) {
                                        var a = this.getPointPosition(s, this.getDistanceFromCenterForValue(this.options.reverse ? this.min : this.max));
                                        i.beginPath(), i.moveTo(this.xCenter, this.yCenter), i.lineTo(a.x, a.y), i.stroke(), i.closePath()
                                    }
                                    var o = this.getPointPosition(s, this.getDistanceFromCenterForValue(this.options.reverse ? this.min : this.max) + 5),
                                        n = e.getValueOrDefault(this.options.pointLabels.fontColor, t.defaults.global.defaultFontColor),
                                        r = e.getValueOrDefault(this.options.pointLabels.fontSize, t.defaults.global.defaultFontSize),
                                        h = e.getValueOrDefault(this.options.pointLabels.fontStyle, t.defaults.global.defaultFontStyle),
                                        l = e.getValueOrDefault(this.options.pointLabels.fontFamily, t.defaults.global.defaultFontFamily),
                                        c = e.fontString(r, h, l);
                                    i.font = c, i.fillStyle = n;
                                    var d = this.pointLabels.length,
                                        u = this.pointLabels.length / 2,
                                        f = u / 2,
                                        g = f > s || s > d - f,
                                        m = s === f || s === d - f;
                                    0 === s ? i.textAlign = "center" : s === u ? i.textAlign = "center" : u > s ? i.textAlign = "left" : i.textAlign = "right", m ? i.textBaseline = "middle" : g ? i.textBaseline = "bottom" : i.textBaseline = "top", i.fillText(this.pointLabels[s] ? this.pointLabels[s] : "", o.x, o.y)
                                }
                            }
                        }
                    }
                });
            t.scaleService.registerScaleType("radialLinear", s, i)
        }
    }, {}],
    42: [function(t, e, i) {
        "use strict";
        var s = t("moment");
        s = "function" == typeof s ? s : window.moment, e.exports = function(t) {
            var e = t.helpers,
                i = { units: [{ name: "millisecond", steps: [1, 2, 5, 10, 20, 50, 100, 250, 500] }, { name: "second", steps: [1, 2, 5, 10, 30] }, { name: "minute", steps: [1, 2, 5, 10, 30] }, { name: "hour", steps: [1, 2, 3, 6, 12] }, { name: "day", steps: [1, 2, 5] }, { name: "week", maxStep: 4 }, { name: "month", maxStep: 3 }, { name: "quarter", maxStep: 4 }, { name: "year", maxStep: !1 }] },
                a = { position: "bottom", time: { parser: !1, format: !1, unit: !1, round: !1, displayFormat: !1, isoWeekday: !1, displayFormats: { millisecond: "h:mm:ss.SSS a", second: "h:mm:ss a", minute: "h:mm:ss a", hour: "MMM D, hA", day: "ll", week: "ll", month: "MMM YYYY", quarter: "[Q]Q - YYYY", year: "YYYY" } }, ticks: { autoSkip: !1 } },
                o = t.Scale.extend({
                    initialize: function() {
                        if (!s) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                        t.Scale.prototype.initialize.call(this)
                    },
                    getLabelMoment: function(t, e) { return this.labelMoments[t][e] },
                    getMomentStartOf: function(t) { return "week" === this.options.time.unit && this.options.time.isoWeekday !== !1 ? t.clone().startOf("isoWeek").isoWeekday(this.options.time.isoWeekday) : t.clone().startOf(this.tickUnit) },
                    determineDataLimits: function() {
                        this.labelMoments = [];
                        var t = [];
                        this.chart.data.labels && this.chart.data.labels.length > 0 ? (e.each(this.chart.data.labels, function(e, i) {
                            var s = this.parseTime(e);
                            s.isValid() && (this.options.time.round && s.startOf(this.options.time.round), t.push(s))
                        }, this), this.firstTick = s.min.call(this, t), this.lastTick = s.max.call(this, t)) : (this.firstTick = null, this.lastTick = null), e.each(this.chart.data.datasets, function(i, a) {
                            var o = [],
                                n = this.chart.isDatasetVisible(a);
                            "object" == typeof i.data[0] ? e.each(i.data, function(t, e) {
                                var i = this.parseTime(this.getRightValue(t));
                                i.isValid() && (this.options.time.round && i.startOf(this.options.time.round), o.push(i), n && (this.firstTick = null !== this.firstTick ? s.min(this.firstTick, i) : i, this.lastTick = null !== this.lastTick ? s.max(this.lastTick, i) : i))
                            }, this) : o = t, this.labelMoments.push(o)
                        }, this), this.options.time.min && (this.firstTick = this.parseTime(this.options.time.min)), this.options.time.max && (this.lastTick = this.parseTime(this.options.time.max)), this.firstTick = (this.firstTick || s()).clone(), this.lastTick = (this.lastTick || s()).clone()
                    },
                    buildTicks: function(s) {
                        this.ctx.save();
                        var a = e.getValueOrDefault(this.options.ticks.fontSize, t.defaults.global.defaultFontSize),
                            o = e.getValueOrDefault(this.options.ticks.fontStyle, t.defaults.global.defaultFontStyle),
                            n = e.getValueOrDefault(this.options.ticks.fontFamily, t.defaults.global.defaultFontFamily),
                            r = e.fontString(a, o, n);
                        if (this.ctx.font = r, this.ticks = [], this.unitScale = 1, this.scaleSizeInUnits = 0, this.options.time.unit) this.tickUnit = this.options.time.unit || "day", this.displayFormat = this.options.time.displayFormats[this.tickUnit], this.scaleSizeInUnits = this.lastTick.diff(this.firstTick, this.tickUnit, !0), this.unitScale = e.getValueOrDefault(this.options.time.unitStepSize, 1);
                        else {
                            var h = this.isHorizontal() ? this.width - (this.paddingLeft + this.paddingRight) : this.height - (this.paddingTop + this.paddingBottom),
                                l = this.tickFormatFunction(this.firstTick, 0, []),
                                c = this.ctx.measureText(l).width,
                                d = Math.cos(e.toRadians(this.options.ticks.maxRotation)),
                                u = Math.sin(e.toRadians(this.options.ticks.maxRotation));
                            c = c * d + a * u;
                            var f = h / c;
                            this.tickUnit = "millisecond", this.scaleSizeInUnits = this.lastTick.diff(this.firstTick, this.tickUnit, !0), this.displayFormat = this.options.time.displayFormats[this.tickUnit];
                            for (var g = 0, m = i.units[g]; g < i.units.length;) {
                                if (this.unitScale = 1, e.isArray(m.steps) && Math.ceil(this.scaleSizeInUnits / f) < e.max(m.steps)) {
                                    for (var p = 0; p < m.steps.length; ++p)
                                        if (m.steps[p] >= Math.ceil(this.scaleSizeInUnits / f)) { this.unitScale = e.getValueOrDefault(this.options.time.unitStepSize, m.steps[p]); break }
                                    break
                                }
                                if (m.maxStep === !1 || Math.ceil(this.scaleSizeInUnits / f) < m.maxStep) { this.unitScale = e.getValueOrDefault(this.options.time.unitStepSize, Math.ceil(this.scaleSizeInUnits / f)); break }++g, m = i.units[g], this.tickUnit = m.name;
                                var b = this.firstTick.diff(this.getMomentStartOf(this.firstTick), this.tickUnit, !0),
                                    v = this.getMomentStartOf(this.lastTick.clone().add(1, this.tickUnit)).diff(this.lastTick, this.tickUnit, !0);
                                this.scaleSizeInUnits = this.lastTick.diff(this.firstTick, this.tickUnit, !0) + b + v, this.displayFormat = this.options.time.displayFormats[m.name]
                            }
                        }
                        var x;
                        if (this.options.time.min ? x = this.getMomentStartOf(this.firstTick) : (this.firstTick = this.getMomentStartOf(this.firstTick), x = this.firstTick), !this.options.time.max) {
                            var y = this.getMomentStartOf(this.lastTick);
                            0 !== y.diff(this.lastTick, this.tickUnit, !0) && (this.lastTick = this.getMomentStartOf(this.lastTick.add(1, this.tickUnit)))
                        }
                        this.smallestLabelSeparation = this.width, e.each(this.chart.data.datasets, function(t, e) { for (var i = 1; i < this.labelMoments[e].length; i++) this.smallestLabelSeparation = Math.min(this.smallestLabelSeparation, this.labelMoments[e][i].diff(this.labelMoments[e][i - 1], this.tickUnit, !0)) }, this), this.options.time.displayFormat && (this.displayFormat = this.options.time.displayFormat), this.ticks.push(this.firstTick.clone());
                        for (var k = 1; k <= this.scaleSizeInUnits; ++k) {
                            var _ = x.clone().add(k, this.tickUnit);
                            if (this.options.time.max && _.diff(this.lastTick, this.tickUnit, !0) >= 0) break;
                            k % this.unitScale === 0 && this.ticks.push(_)
                        }
                        var S = this.ticks[this.ticks.length - 1].diff(this.lastTick, this.tickUnit);
                        (0 !== S || 0 === this.scaleSizeInUnits) && (this.options.time.max ? (this.ticks.push(this.lastTick.clone()), this.scaleSizeInUnits = this.lastTick.diff(this.ticks[0], this.tickUnit, !0)) : (this.ticks.push(this.lastTick.clone()), this.scaleSizeInUnits = this.lastTick.diff(this.firstTick, this.tickUnit, !0))), this.ctx.restore()
                    },
                    getLabelForIndex: function(t, e) { var i = this.chart.data.labels && t < this.chart.data.labels.length ? this.chart.data.labels[t] : ""; return "object" == typeof this.chart.data.datasets[e].data[0] && (i = this.getRightValue(this.chart.data.datasets[e].data[t])), this.options.time.tooltipFormat && (i = this.parseTime(i).format(this.options.time.tooltipFormat)), i },
                    tickFormatFunction: function(t, i, s) {
                        var a = t.format(this.displayFormat),
                            o = this.options.ticks,
                            n = e.getValueOrDefault(o.callback, o.userCallback);
                        return n ? n(a, i, s) : a
                    },
                    convertTicksToLabels: function() { this.tickMoments = this.ticks, this.ticks = this.ticks.map(this.tickFormatFunction, this) },
                    getPixelForValue: function(t, e, i, s) {
                        var a = t && t.isValid && t.isValid() ? t : this.getLabelMoment(i, e);
                        if (a) {
                            var o = a.diff(this.firstTick, this.tickUnit, !0),
                                n = o / this.scaleSizeInUnits;
                            if (this.isHorizontal()) {
                                var r = this.width - (this.paddingLeft + this.paddingRight),
                                    h = (r / Math.max(this.ticks.length - 1, 1), r * n + this.paddingLeft);
                                return this.left + Math.round(h)
                            }
                            var l = this.height - (this.paddingTop + this.paddingBottom),
                                c = (l / Math.max(this.ticks.length - 1, 1), l * n + this.paddingTop);
                            return this.top + Math.round(c)
                        }
                    },
                    getPixelForTick: function(t, e) { return this.getPixelForValue(this.tickMoments[t], null, null, e) },
                    getValueForPixel: function(t) {
                        var e = this.isHorizontal() ? this.width - (this.paddingLeft + this.paddingRight) : this.height - (this.paddingTop + this.paddingBottom),
                            i = (t - (this.isHorizontal() ? this.left + this.paddingLeft : this.top + this.paddingTop)) / e;
                        return i *= this.scaleSizeInUnits, this.firstTick.clone().add(s.duration(i, this.tickUnit).asSeconds(), "seconds")
                    },
                    parseTime: function(t) { return "string" == typeof this.options.time.parser ? s(t, this.options.time.parser) : "function" == typeof this.options.time.parser ? this.options.time.parser(t) : "function" == typeof t.getMonth || "number" == typeof t ? s(t) : t.isValid && t.isValid() ? t : "string" != typeof this.options.time.format && this.options.time.format.call ? (console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"), this.options.time.format(t)) : s(t, this.options.time.format) }
                });
            t.scaleService.registerScaleType("time", o, a)
        }
    }, { moment: 6 }]
}, {}, [7]);