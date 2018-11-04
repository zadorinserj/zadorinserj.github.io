!function() {
    var u, i, c, a, o = {
        frameRate: 150,
        animationTime: 1000,
        stepSize: 500,
        pulseAlgorithm: !0,
        pulseScale: 4,
        pulseNormalize: 1,
        accelerationDelta: 50,
        accelerationMax: 3,
        keyboardSupport: !0,
        arrowScroll: 50,
        fixedBackground: !0,
        excluded: ""
    }, p = o, s = !1, d = !1, l = {
        x: 0,
        y: 0
    }, m = !1, f = document.documentElement, h = [], w = /^Mac/.test(navigator.platform), v = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36
    }, y = {
        37: 1,
        38: 1,
        39: 1,
        40: 1
    };
    function b() {
        if (!m && document.body) {
            m = !0;
            var e = document.body
              , t = document.documentElement
              , o = window.innerHeight
              , n = e.scrollHeight;
            if (f = 0 <= document.compatMode.indexOf("CSS") ? t : e,
            u = e,
            p.keyboardSupport && Y("keydown", D),
            top != self)
                d = !0;
            else if (Z && o < n && (e.offsetHeight <= o || t.offsetHeight <= o)) {
                var r, a = document.createElement("div");
                a.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + f.scrollHeight + "px",
                document.body.appendChild(a),
                c = function() {
                    r || (r = setTimeout(function() {
                        s || (a.style.height = "0",
                        a.style.height = f.scrollHeight + "px",
                        r = null)
                    }, 500))
                }
                ,
                setTimeout(c, 10),
                Y("resize", c);
                if ((i = new j(c)).observe(e, {
                    attributes: !0,
                    childList: !0,
                    characterData: !1
                }),
                f.offsetHeight <= o) {
                    var l = document.createElement("div");
                    l.style.clear = "both",
                    e.appendChild(l)
                }
            }
            p.fixedBackground || s || (e.style.backgroundAttachment = "scroll",
            t.style.backgroundAttachment = "scroll")
        }
    }
    var g = []
      , S = !1
      , x = Date.now();
    function k(d, m, f) {
        var e, t;
        if (e = 0 < (e = m) ? 1 : -1,
        t = 0 < (t = f) ? 1 : -1,
        (l.x !== e || l.y !== t) && (l.x = e,
        l.y = t,
        g = [],
        x = 0),
        1 != p.accelerationMax) {
            var o = Date.now() - x;
            if (o < p.accelerationDelta) {
                var n = (1 + 50 / o) / 2;
                1 < n && (n = Math.min(n, p.accelerationMax),
                m *= n,
                f *= n)
            }
            x = Date.now()
        }
        if (g.push({
            x: m,
            y: f,
            lastX: m < 0 ? .99 : -.99,
            lastY: f < 0 ? .99 : -.99,
            start: Date.now()
        }),
        !S) {
            var r = q()
              , h = d === r;
            null == d.$scrollBehavior && function(e) {
                var t = M(e);
                if (null == B[t]) {
                    var o = getComputedStyle(e, "")["scroll-behavior"];
                    B[t] = "smooth" == o
                }
                return B[t]
            }(d) && (d.$scrollBehavior = d.style.scrollBehavior,
            d.style.scrollBehavior = "auto");
            var w = function(e) {
                for (var t = Date.now(), o = 0, n = 0, r = 0; r < g.length; r++) {
                    var a = g[r]
                      , l = t - a.start
                      , i = l >= p.animationTime
                      , c = i ? 1 : l / p.animationTime;
                    p.pulseAlgorithm && (c = F(c));
                    var u = a.x * c - a.lastX >> 0
                      , s = a.y * c - a.lastY >> 0;
                    o += u,
                    n += s,
                    a.lastX += u,
                    a.lastY += s,
                    i && (g.splice(r, 1),
                    r--)
                }
                h ? window.scrollBy(o, n) : (o && (d.scrollLeft += o),
                n && (d.scrollTop += n)),
                m || f || (g = []),
                g.length ? R(w, d, 1e3 / p.frameRate + 1) : (S = !1,
                null != d.$scrollBehavior && (d.style.scrollBehavior = d.$scrollBehavior,
                d.$scrollBehavior = null))
            };
            R(w, d, 0),
            S = !0
        }
    }
    function e(e) {
        m || b();
        var t = e.target;
        if (e.defaultPrevented || e.ctrlKey)
            return !0;
        if (N(u, "embed") || N(t, "embed") && /\.pdf/i.test(t.src) || N(u, "object") || t.shadowRoot)
            return !0;
        var o = -e.wheelDeltaX || e.deltaX || 0
          , n = -e.wheelDeltaY || e.deltaY || 0;
        w && (e.wheelDeltaX && K(e.wheelDeltaX, 120) && (o = e.wheelDeltaX / Math.abs(e.wheelDeltaX) * -120),
        e.wheelDeltaY && K(e.wheelDeltaY, 120) && (n = e.wheelDeltaY / Math.abs(e.wheelDeltaY) * -120)),
        o || n || (n = -e.wheelDelta || 0),
        1 === e.deltaMode && (o *= 40,
        n *= 40);
        var r = z(t);
        return r ? !!function(e) {
            if (!e)
                return;
            h.length || (h = [e, e, e]);
            e = Math.abs(e),
            h.push(e),
            h.shift(),
            clearTimeout(a),
            a = setTimeout(function() {
                try {
                    localStorage.SS_deltaBuffer = h.join(",")
                } catch (e) {}
            }, 1e3);
            var t = 120 < e && $(e);
            return !$(120) && !$(100) && !t
        }(n) || (1.2 < Math.abs(o) && (o *= p.stepSize / 120),
        1.2 < Math.abs(n) && (n *= p.stepSize / 120),
        k(r, o, n),
        e.preventDefault(),
        void C()) : !d || !U || (Object.defineProperty(e, "target", {
            value: window.frameElement
        }),
        parent.wheel(e))
    }
    function D(e) {
        var t = e.target
          , o = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== v.spacebar;
        document.body.contains(u) || (u = document.activeElement);
        var n = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (e.defaultPrevented || /^(textarea|select|embed|object)$/i.test(t.nodeName) || N(t, "input") && !n.test(t.type) || N(u, "video") || function(e) {
            var t = e.target
              , o = !1;
            if (-1 != document.URL.indexOf("www.youtube.com/watch"))
                do {
                    if (o = t.classList && t.classList.contains("html5-video-controls"))
                        break
                } while (t = t.parentNode);return o
        }(e) || t.isContentEditable || o)
            return !0;
        if ((N(t, "button") || N(t, "input") && n.test(t.type)) && e.keyCode === v.spacebar)
            return !0;
        if (N(t, "input") && "radio" == t.type && y[e.keyCode])
            return !0;
        var r = 0
          , a = 0
          , l = z(u);
        if (!l)
            return !d || !U || parent.keydown(e);
        var i = l.clientHeight;
        switch (l == document.body && (i = window.innerHeight),
        e.keyCode) {
        case v.up:
            a = -p.arrowScroll;
            break;
        case v.down:
            a = p.arrowScroll;
            break;
        case v.spacebar:
            a = -(e.shiftKey ? 1 : -1) * i * .9;
            break;
        case v.pageup:
            a = .9 * -i;
            break;
        case v.pagedown:
            a = .9 * i;
            break;
        case v.home:
            l == document.body && document.scrollingElement && (l = document.scrollingElement),
            a = -l.scrollTop;
            break;
        case v.end:
            var c = l.scrollHeight - l.scrollTop - i;
            a = 0 < c ? c + 10 : 0;
            break;
        case v.left:
            r = -p.arrowScroll;
            break;
        case v.right:
            r = p.arrowScroll;
            break;
        default:
            return !0
        }
        k(l, r, a),
        e.preventDefault(),
        C()
    }
    function t(e) {
        u = e.target
    }
    var n, r, M = (n = 0,
    function(e) {
        return e.uniqueID || (e.uniqueID = n++)
    }
    ), E = {}, T = {}, B = {};
    function C() {
        clearTimeout(r),
        r = setInterval(function() {
            E = T = B = {}
        }, 1e3)
    }
    function H(e, t, o) {
        for (var n = o ? E : T, r = e.length; r--; )
            n[M(e[r])] = t;
        return t
    }
    function z(e) {
        var t = []
          , o = document.body
          , n = f.scrollHeight;
        do {
            var r = (!1 ? E : T)[M(e)];
            if (r)
                return H(t, r);
            if (t.push(e),
            n === e.scrollHeight) {
                var a = O(f) && O(o) || X(f);
                if (d && L(f) || !d && a)
                    return H(t, q())
            } else if (L(e) && X(e))
                return H(t, e)
        } while (e = e.parentElement)
    }
    function L(e) {
        return e.clientHeight + 10 < e.scrollHeight
    }
    function O(e) {
        return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y")
    }
    function X(e) {
        var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
        return "scroll" === t || "auto" === t
    }
    function Y(e, t) {
        window.addEventListener(e, t, !1)
    }
    function A(e, t) {
        window.removeEventListener(e, t, !1)
    }
    function N(e, t) {
        return e && (e.nodeName || "").toLowerCase() === t.toLowerCase()
    }
    if (window.localStorage && localStorage.SS_deltaBuffer)
        try {
            h = localStorage.SS_deltaBuffer.split(",")
        } catch (e) {}
    function K(e, t) {
        return Math.floor(e / t) == e / t
    }
    function $(e) {
        return K(h[0], e) && K(h[1], e) && K(h[2], e)
    }
    var P, R = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e, t, o) {
        window.setTimeout(e, o || 1e3 / 60)
    }
    , j = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, q = (P = document.scrollingElement,
    function() {
        if (!P) {
            var e = document.createElement("div");
            e.style.cssText = "height:10000px;width:1px;",
            document.body.appendChild(e);
            var t = document.body.scrollTop;
            document.documentElement.scrollTop,
            window.scrollBy(0, 3),
            P = document.body.scrollTop != t ? document.body : document.documentElement,
            window.scrollBy(0, -3),
            document.body.removeChild(e)
        }
        return P
    }
    );
    function V(e) {
        var t;
        return ((e *= p.pulseScale) < 1 ? e - (1 - Math.exp(-e)) : (e -= 1,
        (t = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - t))) * p.pulseNormalize
    }
    function F(e) {
        return 1 <= e ? 1 : e <= 0 ? 0 : (1 == p.pulseNormalize && (p.pulseNormalize /= V(1)),
        V(e))
    }
    var I, _ = window.navigator.userAgent, W = /Edge/.test(_), U = /chrome/i.test(_) && !W, G = /safari/i.test(_) && !W, J = /mobile/i.test(_), Q = /Windows NT 6.1/i.test(_) && /rv:11/i.test(_), Z = G && (/Version\/8/i.test(_) || /Version\/9/i.test(_)), ee = (U || G || Q) && !J;
    function te(e) {
        for (var t in e)
            o.hasOwnProperty(t) && (p[t] = e[t])
    }
    "onwheel"in document.createElement("div") ? I = "wheel" : "onmousewheel"in document.createElement("div") && (I = "mousewheel"),
    I && ee && (Y(I, e),
    Y("mousedown", t),
    Y("load", b)),
    te.destroy = function() {
        i && i.disconnect(),
        A(I, e),
        A("mousedown", t),
        A("keydown", D),
        A("resize", c),
        A("load", b)
    }
    ,
    window.SmoothScrollOptions && te(window.SmoothScrollOptions),
    "function" == typeof define && define.amd ? define(function() {
        return te
    }) : "object" == typeof exports ? module.exports = te : window.SmoothScroll = te
}();


