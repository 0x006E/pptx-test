
/*2.2.6.8*/
const DopPresentation = function(gobal_events, global_options) {
    function loadPres(a, b) {
        isNaN(b) && (b = 1), b = parseInt(b, 10), gc = b || 1, gv.b = b, isNaN(gc) && (gc = 1), gc = gc < 1 ? 1 : gc, _events.a();
        var c = document.getElementsByTagName("head")[0],
            d = gv.o("DopFontFamily");
        d && c.removeChild(d);
        var e = document.createElement("script");
        e.setAttribute("type", "text/javascript"), gv.a = a;
        var f = null === gv.z.OutputFileExtension ? ".js" : gv.z.OutputFileExtension,
            g = "scriptInit" + f;
        e.src = gv.d + a + "/" + g + cfc.b(g), c.appendChild(e)
    }

    function loadContent(a, b, c) {
        function d() {
            function a() {
                if (clearTimeout(gli), !cfc.l(gc)) return void(gli = setTimeout(a, 100));
                acc.t(), gpc === gc ? gStartTime = gtct - gslength[gc - 1] : gpc < gc ? gStartTime -= gslength[gc - 1] - anima["s" + gpc].f : gpc > gc && (gStartTime += anima["s" + gpc].f - gslength[gc - 1]), gt = gslength[gc - 1], cfc.hf.add(gc), ShowPlayButton()
            }
            if (0 !== gv.m.length && !gv.mo) return void setTimeout(d, 5);
            if (e(), gv.bs) {
                if (addMedia(b, !1), gc !== b) return
            } else {
                for (; 1 !== gv.b && !gv.z.h && anima["s" + gc] && 1 === anima["s" + gc].h;) return gc++, void d();
                addMedia(gc, !1)
            }
            a()
        }

        function e() {
            function a(a, b) {
                for (var d = c(b), e = a.parentNode, f = d.length, g = f - 1; g >= 0; g--) {
                    var h = d[g];
                    e.insertBefore(h, a), a = h
                }
            }

            function b(a, b) {
                for (var d = c(b); d.length > 0;) {
                    var e = d[0];
                    a.appendChild(e)
                }
            }

            function c(a) {
                var b = document.createElement("div");
                return b.innerHTML = a, b.childNodes
            }
            if (0 !== gv.m.length)
                for (var d = 1; d <= gv.t; d++) {
                    var e = gv.m[d - 1],
                        f = e[0],
                        g = e[1],
                        h = gv.o("s" + d + "s0");
                    if (h) {
                        var i = h.getElementsByTagName("div"),
                            j = 0 === f ? "" : gv.mo["m" + f],
                            k = 0 === g ? "" : gv.mo["l" + g],
                            l = j + k;
                        if (i.length > 0) {
                            var m = i[0];
                            a(m, l)
                        } else b(h, l)
                    }
                }
        }

        function f(a, b) {
            for (var c = 0, d = 0, e = a.length; d < e; ++d) ! function(d) {
                function e() {
                    if (f && f.offsetWidth !== g && (++c, f.parentNode.removeChild(f), f = null), c >= a.length && (h && clearInterval(h), c === a.length)) return b(d), !0
                }
                var f = document.createElement("span");
                f.innerHTML = "giItT1WQy@!-/#", f.style.position = "absolute", f.style.left = "-10000px", f.style.top = "-10000px", f.style.fontSize = "300px", f.style.fontFamily = "sans-serif", f.style.fontVariant = "normal", f.style.fontStyle = "normal", f.style.fontWeight = "normal", f.style.letterSpacing = "0", f.color = "transparent", document.body.appendChild(f);
                var g = f.offsetWidth;
                f.style.fontFamily = d;
                var h;
                e() || (h = setInterval(e, 51))
            }(a[d])
        }
        var g = gv.r.o.getAttribute("style");
        g += "-moz-font-feature-settings: 'liga' 0;-ms-font-feature-settings: 'liga' 0;-o-font-feature-settings: 'liga' 0;font-feature-settings: 'liga' 0;text-rendering: optimizeSpeed;-webkit-font-variant-ligatures: no-common-ligatures;font-variant-ligatures:no-common-ligatures;", gv.r.o.setAttribute("style", g);
        var h = gv.o("giItT1WQy");
        h && h.parentNode.removeChild(h), gv.bs || (gv.r.o.innerHTML = "", gv.r.o.innerHTML = c.join("")), gv.r.o.innerHTML += gv.e;
        var i, j, k;
        if ("" !== document.createElement("detect").style.textShadow)
            for (i = document.getElementsByTagName("pre"), j = i.length, k = 0; k < j; k++)
                if ("transparent" === i[k].style.color) {
                    var l = i[k].getAttribute("style"),
                        m = l.indexOf("rgba");
                    m < 0 || (l = l.substring(m, l.length), i[k].style.color = l.substring(0, l.indexOf(")") + 1))
                } if (navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1)
            for (pres = document.getElementsByTagName("pre"), j = pres.length, k = 0; k < j; k++) {
                var n = pres[k];
                n.style.lineHeight = "normal"
            }
        var o = ['"arial', '"consolas', '"courier new', '"microsoft sans serif', '"segoe ui', '"tahoma', '"trebuchet ms', '"verdana'];
        if (gv.bb.f && gv.bb.o) {
            var p = document.getElementsByTagName("pre");
            for (j = p.length, k = 0; k < j; k++) {
                i = p[k];
                var q = (i.className, window.getComputedStyle(i, null).getPropertyValue("font-family"));
                if (q && (q = q.toLowerCase().split('",f'), q.length > 1)) {
                    o.indexOf(q[0]) > -1 && (i.style.fontFamily = "F" + q[1])
                }
            }
        }
        gc = gc > gv.t ? gv.t : gc;
        for (var r = [], s = 1; s < gv.fl.length; s++) r[r.length] = gv.fl[s][0];
        f(r, function(a) {}), d()
    }

    function loadMaster(a) {
        gv.mo = a
    }

    function addSlideShapes(a) {
        0 === gln && (gln = 1, _events.a());
        var b = document.getElementsByTagName("head")[0],
            c = document.createElement("script"),
            d = "slideVault",
            e = null === gv.ex ? ".js" : gv.ex;
        if (0 !== gv.m.length && (gv.mo = null, c = document.createElement("script"), c.setAttribute("charset", "UTF-8"), c.setAttribute("src", gv.d + gv.a + "/master/" + d + e + cfc.b(d)), b.appendChild(c)), gv.bs) return void loadContent("", a, []);
        var f = "";
        gv.sjps && (f = a), c = document.createElement("script"), c.setAttribute("charset", "UTF-8"), c.setAttribute("src", gv.d + gv.a + "/" + d + f + e + cfc.b(d + e)), b.appendChild(c)
    }

    function ShowPlayButton() {
        function a() {
            var a = !1;
            for (var b in anima) {
                var c = anima[b];
                for (var d in c.c)
                    if ("i" !== d) {
                        var e = c.c[d];
                        for (var f in e)
                            if ("i" !== f) {
                                var g = e[f];
                                typeof g.c6 !== _undefined && 5 === g.c5 || 8 === g.c5 ? a = !0 : typeof g.c6 !== _undefined && 5 !== g.c5 && 6 !== g.c5 && 7 !== g.c5 && 8 !== g.c5 && 9 !== g.c5 && 0 !== g.c5 && (a = !0)
                            } if (a) break
                    } if (a) break
            }
            return !(!a || !anima["s" + gc].t.n)
        }

        function b() {
            if (!gv.z.playTransitionOnLoad) return void(window.aPlay = ncc.y);
            ncc.y()
        }

        function c(a) {
            function b() {
                this.pause(), this.onplay = this.onDopplay;
                for (var a = 0; a < au.length; a++) {
                    au[a][0].id === this.id && this.play()
                }
            }
            a.cancelBubble = !0;
            for (var c = e(), d = 0; gv.bb.m && d < c.length; d++) {
                var f = c[d];
                f.onDopplay = f.onplay, f.onplay = b, f.play()
            }
            ncc.y(), _undefined !== typeof gv.p.nodeName && gv.p.parentNode.removeChild(gv.p), gv.p = 0, _events.h()
        }

        function d() {
            function a() {
                if (0 === gv.p) return void clearInterval(d);
                var a = gv.p.getElementsByTagName("svg")[0],
                    b = 80;
                gv.r.r < 1 && (b /= gv.r.r), a.style.width = b + "px"
            }
            var b = document.createElement("div");
            b.onclick = c, b.style.width = "100%", b.style.height = "100%", b.style.cursor = "pointer", b.style.backgroundColor = "rgba(0,0,0,0.06)", b.innerHTML = '<svg version="1.1" x="0px" y="0px" width="80px" viewBox="0 0 314.068 314.068" style="position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);filter:drop-shadow(0px 0px 7px rgba(256,256,256,.7));" xml:space="preserve"><g><g><path d="M293.002,78.53C249.646,3.435,153.618-22.296,78.529,21.068C3.434,64.418-22.298,160.442,21.066,235.534 c43.35,75.095,139.375,100.83,214.465,57.47C310.627,249.639,336.371,153.62,293.002,78.53z M219.834,265.801 c-60.067,34.692-136.894,14.106-171.576-45.973C13.568,159.761,34.161,82.935,94.23,48.26 c60.071-34.69,136.894-14.106,171.578,45.971C300.493,154.307,279.906,231.117,219.834,265.801z M213.555,150.652l-82.214-47.949 c-7.492-4.374-13.535-0.877-13.493,7.789l0.421,95.174c0.038,8.664,6.155,12.191,13.669,7.851l81.585-47.103 C221.029,162.082,221.045,155.026,213.555,150.652z"/></g></g></svg>', gv.r.o.appendChild(b), gv.p = b, gv.o("s" + gc + "s0").style.display = "block", _events.g(gc);
            var d = setInterval(a, 100)
        }

        function e() {
            return document.querySelectorAll("audio,video")
        }
        if (1 === gv.p) return void d();
        if (0 === gv.p) return void b();
        var f = a();
        if (!f) return void b();
        var g = e();
        if (0 === g.length) return void b();
        if (gv.bb.m) return void d();
        var h = document.createElement("audio");
        h.src = g[0].src, h.onplay = function() {
            h.pause(), c()
        };
        var i = h.play();
        typeof i !== _undefined ? i.then(function(a) {
            b()
        }).catch(function(a) {
            f ? 0 !== gv.p && d() : b()
        }) : b()
    }

    function play() {
        gStartTime += (new Date).getTime() - gtct, gpp = 0, 0 !== (gafi = UpdategT()) && (gp = 1, _events.S())
    }

    function pause() {
        gpp = 1, gp = 0, _events.s()
    }

    function addMedia(a, b) {
        function c(a) {
            switch (a) {
                case "jpg":
                    a = ".jpg";
                    break;
                case "gif":
                    a = ".gif";
                    break;
                default:
                    a = ".png"
            }
            return a
        }

        function d() {
            var a = this.naturalWidth - (gv.z.bg.crop.r + gv.z.bg.crop.l),
                b = this.naturalHeight - (gv.z.bg.crop.b + gv.z.bg.crop.t),
                c = (a + (gv.w - a)) / a;
            if (c * b < gv.h && (c = (b + (gv.h - b)) / b), this.style.width = c * this.naturalWidth + "px", this.style.height = c * this.naturalHeight + "px", "center" === gv.z.bg.h_align) {
                var d = (gv.w - a * c) / 2;
                this.style.left = d + "px"
            }
            if ("middle" === gv.z.bg.v_align) {
                var e = (gv.h - b * c) / 2;
                this.style.top = e + "px"
            }
        }
        for (var e = b ? a : a - 2, f = b ? a + 1 : a + 5; e < f; e++)
            if (gv.bs && (e = a), !(e < 1 || e > gv.t)) {
                if (gv.bs && anima["s" + e].s.c) return;
                if (!(gv.i[e] < 1)) {
                    var g = gv.o("s" + e + "s0");
                    if (g) {
                        var h = g.getElementsByTagName("img"),
                            i = h[0].getAttribute("data-ext");
                        i = null === i || "" === i ? gv.c : c(i), i = null === gv.ex ? i : gv.ex;
                        var j = "sb" + gv.i[e] + i;
                        h[0].onload = d, "" === gv.z.bg.path ? h[0].src = gv.d + gv.a + "/" + j + cfc.b(j) : h[0].src = gv.z.bg.path;
                        for (var k = ".png", l = 1, m = {}; l < h.length; l++) {
                            var n = h[l];
                            k = n.getAttribute("data-ext"), k = c(k), k = null === gv.ex ? k : gv.ex, m = n.parentNode;
                            var o = "";
                            m.id.indexOf("m") > -1 && (o = "/master");
                            var p = m.id.replace(/c\s*$/, "") + k;
                            n.src = gv.d + gv.a + o + "/" + p + cfc.b(p)
                        }
                        var q = g.getElementsByTagName("video");
                        for (l = 0; l < q.length; l++) {
                            var r, s = q[l];
                            m = s.parentNode;
                            var t = m.parentNode.id,
                                u = m.getElementsByTagName("img");
                            k = ".jpg", u.length > 0 && (k = u[0].getAttribute("data-ext"), k = c(k), m.removeChild(u[0])), k = null === gv.ex ? k : gv.ex, r = -1 !== s.id.indexOf("narration") ? "narration" + e : "v" + t;
                            var v = document.createElement("video");
                            v.style.height = s.height + "px", v.style.width = s.width + "px", v.setAttribute("data-fpath", s.getAttribute("data-fpath")), v.setAttribute("id", r), 1 === gv.vc && (v.setAttribute("controls", ""), v.controls = !0), v.style.transform = "matrix(1, 0, 0, 1, 0, 0)", v.dopLoaded = 0, v.dopsrcErr = 1, v.addEventListener("canplaythrough", function() {
                                this.dopsrcErr = 0, this.dopLoaded = 1
                            }, !1), v.addEventListener("error", function() {
                                this.dopsrcErr = 1, this.dopLoaded = 1
                            }, !1);
                            var w = t + k,
                                x = gv.d + gv.a + "/" + w + cfc.b(w);
                            v.setAttribute("poster", x), v.style.setProperty("-webkit-mask-box-image", "url(" + x + ")"), k = "mp3" === gv.v ? ".mp4" : ".ogg", k = null === gv.ex ? k : gv.ex;
                            var y = r + k;
                            v.setAttribute("src", gv.d + gv.a + "/" + y + cfc.b(w)), v.setAttribute("preload", ""), v.setAttribute("webkit-playsinline", ""), v.setAttribute("playsinline", ""), v.setAttribute("controlsList", "nodownload"), m.removeChild(s), m.appendChild(v), v.onplay = video, v.onpause = function(a) {
                                _events.m(cfc.i(a.target))
                            }, v.onclick = function(a) {
                                a.preventDefault()
                            };
                            try {
                                v.load()
                            } catch (a) {
                                v.dopLoaded = 1
                            }
                        }
                        if (l > 0) {
                            var z = g.children;
                            for (l = 0; l < z.length; l++) z[l].style.transform = "translateZ(0)"
                        }
                        var A = g.getElementsByTagName("audio");
                        for (l = 0; l < A.length; l++) {
                            var B = A[l];
                            m = B.parentNode;
                            var C = document.createElement("audio");
                            C.dopLoaded = 0, C.dopsrcErr = 1, C.setAttribute("data-fpath", B.getAttribute("data-fpath")), C.addEventListener("canplaythrough", function() {
                                this.dopsrcErr = 0, this.dopLoaded = 1
                            }, !1), C.addEventListener("error", function() {
                                this.dopsrcErr = 1, this.dopLoaded = 1
                            }, !1), C.onplay = audio, C.onpause = function(a) {
                                _events.m(cfc.i(a.target))
                            }, k = "mp3" === gv.v ? ".mp3" : ".ogg", k = null === gv.ex ? k : gv.ex;
                            var D = "a" + m.id + k;
                            C.setAttribute("src", gv.d + gv.a + "/" + D + cfc.b(D)), C.setAttribute("id", "a" + m.id), C.setAttribute("preload", ""), C.setAttribute("controlsList", "nodownload"), m.removeChild(B), m.appendChild(C);
                            try {
                                C.load()
                            } catch (a) {
                                C.dopLoaded = 1
                            }
                        }
                        var E = anima["s" + e],
                            F = E.c;
                        for (var G in F)
                            if ("i" !== G) {
                                var H = F[G];
                                for (var I in H)
                                    if ("i" !== I) {
                                        var J = H[I];
                                        if (typeof J.c6 !== _undefined && 5 !== J.c5 && 6 !== J.c5 && 7 !== J.c5 && 8 !== J.c5 && 9 !== J.c5 && 0 !== J.c5) {
                                            var K = document.createElement("audio");
                                            K.dopLoaded = 0, K.addEventListener("canplaythrough", function() {
                                                this.dopLoaded = 1
                                            }, !1), K.addEventListener("error", function() {
                                                this.dopLoaded = 1
                                            }, !1), K.setAttribute("id", J.c6), k = "mp3" === gv.v ? ".mp3" : ".ogg";
                                            var L = J.c6 + k;
                                            K.setAttribute("src", gv.d + gv.a + "/" + L + cfc.b(L)), K.setAttribute("preload", ""), g.appendChild(K);
                                            try {
                                                K.load()
                                            } catch (a) {
                                                K.dopLoaded = 2
                                            }
                                        }
                                    }
                            } E.s.c = !0, processLink(e), gv.i[e] = 0
                    }
                }
            }
    }

    function processLink(a) {
        function b(a) {
            a.getElementsByTagName("video").length > 0 ? a.DopPhVdo = !0 : a.getElementsByTagName("audio").length > 0 && (a.DopPhAdo = !0)
        }

        function c(a) {
            var b = document.createElement("a");
            b.setAttribute("style", a.getAttribute("style")), b.innerHTML = a.innerHTML, b.className = "DopPhAnchor " + a.className;
            try {
                f(b, a)
            } catch (a) {}
            var c = a.parentNode;
            c.appendChild(b), c.removeChild(a)
        }

        function d(a) {
            var b = a.childNodes,
                c = a;
            b[0].tagName && "div" === b[0].tagName.toLowerCase() && (c = b[0]);
            var d = document.createElement("a");
            d.setAttribute("style", "height:100%;width:100%;top:0px;left:0px;"), d.innerHTML = "&nbsp;" === c.innerHTML ? "" : c.innerHTML, d.className = "DopPhAnchor", e(a, a.onclick);
            try {
                f(d, a)
            } catch (a) {}
            a.setAttribute("onclick", ""), c.innerHTML = "", c.appendChild(d)
        }

        function e(a, b) {
            for (var d = a.id, e = 1, f = gv.o(d + "p" + e); f;) {
                if (!f.onClick)
                    for (var g = f.getElementsByTagName("pre"), h = 0; h < g.length; h++) {
                        var i = g[h];
                        i.onclick || (i.style.cursor = "pointer", i.onclick = b, c(i))
                    }
                e++, f = gv.o(d + "p" + e)
            }
        }

        function f(a, b) {
            var c = document.createElement("div");
            c.innerHTML = b.onclick;
            var d = c.innerHTML,
                e = d.split(",");
            if ("2" === e[1]) a.setAttribute("target", "_blank"), a.href = gv.d + gv.a + "/" + e[2].split("'")[1];
            else if ("1" === e[1]) typeof e[3] !== _undefined && "1" === e[3][0] ? a.setAttribute("target", "_self") : a.setAttribute("target", "_blank"), a.href = e[2].split("'")[1];
            else if ("0" === e[1]) {
                var f = e[2].split(")")[0];
                a.DopPhGoto = f, "" === f && (a.style.cursor = "default"), a.setAttribute("onclick", "")
            }
        }

        function g(a, b) {
            for (var c = [], d = a.getElementsByTagName("*"), e = 0; e < d.length; e++) d[e].getAttribute(b) && (c[c.length] = d[e]);
            return c
        }
        for (var h = gv.o("s" + a + "s0"), i = g(h, "onclick"), j = i.length - 1; j >= 0; j--) {
            var k = i[j];
            "div" === k.tagName.toLowerCase() && (k.getElementsByTagName("video").length > 0 || k.getElementsByTagName("audio").length > 0 ? b(k) : d(k), k.removeAttribute("onclick"))
        }
        for (i = g(h, "onclick"), j = i.length - 1; j >= 0; j--) {
            var l = i[j];
            "pre" === l.tagName.toLowerCase() && (c(l), l.removeAttribute("onclick"))
        }
        var m = anima["s" + a].i;
        if (typeof m !== _undefined)
            for (j = 0; j < m.i; j++)
                for (var n = m["i" + j], o = "s" + a + "s" + n.t, p = 1, q = gv.o(o + "p" + p); null !== q;) q.style.cursor = "pointer", p++, q = gv.o(o + "p" + p)
    }

    function scormGoTo(a) {
        "" !== a && (gc = parseInt(a, 10))
    }

    function hsv2color(a, b, c) {
        function d(a) {
            return Math.min(255, Math.round(256 * a))
        }
        var e, f, g, h = Math.floor(a / 60 % 6),
            i = a / 60 - h,
            j = c * (1 - b),
            k = c * (1 - i * b),
            l = c * (1 - (1 - i) * b);
        switch (h) {
            case 0:
                e = c, f = l, g = j;
                break;
            case 1:
                e = k, f = c, g = j;
                break;
            case 2:
                e = j, f = c, g = l;
                break;
            case 3:
                e = j, f = k, g = c;
                break;
            case 4:
                e = l, f = j, g = c;
                break;
            case 5:
                e = c, f = j, g = k
        }
        return e = d(e), f = d(f), g = d(g), [e, f, g]
    }

    function rgb2hsv(a) {
        var b, c, d, e = a[0] / 255,
            f = a[1] / 255,
            g = a[2] / 255,
            h = Math.min(Math.min(e, f), g),
            i = Math.max(Math.max(e, f), g);
        switch (b = i - h, i) {
            case h:
                c = 0;
                break;
            case e:
                c = 60 * (f - g) / b, f < g && (c += 360);
                break;
            case f:
                c = 60 * (g - e) / b + 120;
                break;
            case g:
                c = 60 * (e - f) / b + 240
        }
        return d = 0 === i ? 0 : 1 - h / i, [Math.round(c), d, i]
    }

    function rgbString2Array(a) {
        return a.match(/\d+/g)
    }

    function _hsl() {
        function a(a, c, d) {
            var e = b(a, c, d);
            return {
                h: 360 * e.h,
                s: e.s,
                l: e.l,
                a: 1
            }
        }

        function b(a, b, d) {
            a = c(a, 255), b = c(b, 255), d = c(d, 255);
            var e, f, g = Math.max(a, b, d),
                h = Math.min(a, b, d),
                i = (g + h) / 2;
            if (g == h) e = f = 0;
            else {
                var j = g - h;
                switch (f = i > .5 ? j / (2 - g - h) : j / (g + h), g) {
                    case a:
                        e = (b - d) / j + (b < d ? 6 : 0);
                        break;
                    case b:
                        e = (d - a) / j + 2;
                        break;
                    case d:
                        e = (a - b) / j + 4
                }
                e /= 6
            }
            return {
                h: e,
                s: f,
                l: i
            }
        }

        function c(a, b) {
            d(a) && (a = "100%");
            var c = e(a);
            return a = Math.min(b, Math.max(0, parseFloat(a))), c && (a = parseInt(a * b, 10) / 100), Math.abs(a - b) < 1e-6 ? 1 : a % b / parseFloat(b)
        }

        function d(a) {
            return "string" == typeof a && -1 != a.indexOf(".") && 1 === parseFloat(a)
        }

        function e(a) {
            return "string" == typeof a && -1 != a.indexOf("%")
        }

        function f(a, b, c) {
            return c < 0 && (c += 1), c > 1 && (c -= 1), c < 1 / 6 ? a + 6 * (b - a) * c : c < .5 ? b : c < 2 / 3 ? a + (b - a) * (2 / 3 - c) * 6 : a
        }
        this.rgb = function(a, b, d) {
            var e, g, h;
            if (a = c(a, 360), b = c(b, 100), d = c(d, 100), 0 === b) e = g = h = d;
            else {
                var i = d < .5 ? d * (1 + b) : d + b - d * b,
                    j = 2 * d - i;
                e = f(j, i, a + 1 / 3), g = f(j, i, a), h = f(j, i, a - 1 / 3)
            }
            return [Math.round(255 * e), Math.round(255 * g), Math.round(255 * h)]
        }, this.hsl = function(b, c, d) {
            return a(b, c, d)
        }, this.c = function(a) {
            return a <= 1 && (a = 100 * a + "%"), a
        }
    }

    function tranend(a) {
        _events.f(gc), pause();
        var b = anima["s" + gc];
        if (1 !== a) return gStartTime -= gslength[gc - 1] + b.t.i - gt, void play();
        gx = 0;
        var c = gv.o("s" + gpc + "s0");
        gpc !== gc && null !== c && (c.style.display = "none"), null !== c && (c.style.zIndex = "0");
        for (var d = gv.r.o.parentNode, e = d.getElementsByTagName("embed"), f = e.length - 1; f >= 0; f--) {
            var g = parseInt(e[f].id.split("s")[1], 10);
            e[f].style.display = g === gc ? "block" : "none"
        }
        gpc = 0;
        var h = gt - (gslength[gc - 1] + anima["s" + gc].t.i);
        if (gtct -= h, b.f === gslength[gc - 1] ? b.f = gslength[gc - 1] + b.t.i : gStartTime -= b.f - (gslength[gc - 1] + b.t.i), gt = b.f, _events.t(gt), b.f === gslength[gc - 1] + b.t.i ? 1 === b.t.n && 0 === b.g && (typeof gv.z.playAnimationsOnLoad === _undefined || gv.z.playAnimationsOnLoad) && (stepToGoto.s > -1 ? StepToGotoHelper() : (acc.P(), play())) : -1 === acc.g.indexOf(b.f) && b.f !== gslength[gc] && (stepToGoto.s > -1 ? StepToGotoHelper() : (acc.P(), play())), stepToGoto.s < 0 && b.f === gslength[gc] && 1 === b.a) {
            clearTimeout(gv.ad);
            var i = 0;
            i = 0 !== gc ? gslength[gc] - gslength[gc - 1] : gslength[0], gv.ad = setTimeout(function() {
                ncc.n()
            }, i)
        }
        StepToGotoHelper()
    }

    function StepToGotoHelper() {
        function a(b, d) {
            if (typeof d === _undefined && (d = c()), b === d) return void(stepToGoto.l = 0);
            b > d ? (d++, ncc.n()) : (d--, ncc.p()), stepToGoto.t = setTimeout(function() {
                a(b, d)
            }, 50)
        }

        function b(b) {
            anima["s" + gc].g = 0, ncc.r(gc), cfc.m(), anima["s" + gc].f = gt = gslength[gc - 1], gStartTime -= gslength[gc - 1] - anima["s" + gc].f, acc.t(), ncc.y(), 0 === anima["s" + gc].t.n && tranend(), a(b, 0)
        }

        function c() {
            return 1 === gp ? anima["s" + gc].g + 1 : anima["s" + gc].g
        }

        function d(a) {
            stepToGoto.l = 0;
            var b = acc.c(),
                c = anima["s" + gc];
            if (c.t.n && b++, 0 !== b) {
                b < a ? a = b : a < 1 && (a = 0), c = anima["s" + gc];
                var d = c.t.i;
                anima["s" + gc].g = a - 1;
                var e = anima["s" + gc].f,
                    f = acc.g[a - 2];
                f || (f = d > 0 ? acc.g[0] - d : gslength[gc - 1]), gStartTime -= f - e, acc.P(), play()
            }
        }
        if (!(stepToGoto.s < 0)) {
            var e = dopPresentation.c();
            if (0 === e) return stepToGoto.s = -1, void(stepToGoto.l = 0);
            var f = stepToGoto.s;
            if (stepToGoto.s = -1, f = f > e ? e : f, f = f < 0 ? 0 : f, !stepToGoto.p) return void d(f);
            var g = c();
            f > g ? a(f, g) : gslength[gc - 1] !== anima["s" + gc].f && b(f)
        }
    }

    function video(a, b) {
        if (0 !== gv.v) {
            b || (a = this);
            var c = a.getElementsByTagName("img");
            c.length > 0 && (c[0].style.display = "none");
            "video" !== a.tagName.toLowerCase() && (a = a.getElementsByTagName("video")[0]), a.style.backgroundImage = "", a.paused ? (a.dopsrcErr || a.play(), _events.v(cfc.i(a)), cfc.a(a, 1)) : b && a.pause()
        }
    }

    function audio(a) {
        var b = !1;
        a.type ? (b = !0, a = a.target) : a = a.getElementsByTagName("audio")[0], 0 !== gv.v && typeof a.play !== _undefined && (a.paused ? (a.dopsrcErr || a.play(), cfc.a(a, 1), _events.v(cfc.i(a))) : b || (a.pause(), a.currentTime = 0), this.Initialize = function() {})
    }

    function CopyProto(a, b) {
        b.prototype = Object.create(a.prototype)
    }

    function TextureSource(a) {
        this.Slide = a, this.FlipY = !0, this.nbg = 0
    }

    function ThreeDCore() {
        Banim.call(this), this.vertices = [], this.indices = [], this.shaderProgram = null, this.init = function() {
            this.textures[0] = new TextureSource(this.sV.dp), this.textures[1] = new TextureSource(this.sV.d), this.play = this.play || function() {
                function a() {
                    if (b.pozd || b.stpd) return void b.stopCaS();
                    var c = b.gtime() - b.st - b.c.c1;
                    return c <= 0 ? void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a)) : (b.playCaS(), b.render(c), c >= b.c.c2 ? void b.onEndPlay() : void Cbfun(a))
                }
                this.resetBanim(), this.mc.apndTo(this.sV.d.parentNode), this.animStarted = !1;
                var b = this;
                Cbfun(a)
            }, this.shaderStart = this.shaderStart || function() {
                var a = this.gl,
                    b = a.getAttribLocation(this.shaderProgram, "a_position");
                a.vertexAttribPointer(b, 3, a.FLOAT, !1, 0, 0), a.enableVertexAttribArray(b);
                var c = a.getAttribLocation(this.shaderProgram, "a_texcoord"),
                    d = a.createBuffer();
                this.textCordbuffer = d, a.bindBuffer(a.ARRAY_BUFFER, d), a.enableVertexAttribArray(c), a.vertexAttribPointer(c, 2, a.FLOAT, !1, 0, 0), a.bufferData(a.ARRAY_BUFFER, new Float32Array(this.get_TextureCordinates()), a.STATIC_DRAW);
                var e = a.getAttribLocation(this.shaderProgram, "a_texcoord_back");
                if (e > -1) {
                    var f = a.createBuffer();
                    this.bufferback = f, a.bindBuffer(a.ARRAY_BUFFER, f), a.enableVertexAttribArray(e), a.vertexAttribPointer(e, 2, a.FLOAT, !1, 0, 0), a.bufferData(a.ARRAY_BUFFER, new Float32Array(this.shapes.textCoordsBack()), a.STATIC_DRAW)
                }
                this.Mmatrix = a.getUniformLocation(this.shaderProgram, "Mmatrix"), this.Mtr1 = a.getUniformLocation(this.shaderProgram, "Mtr1"), this.Mtr2 = a.getUniformLocation(this.shaderProgram, "Mtr2"), this.Pmatrix = a.getUniformLocation(this.shaderProgram, "Pmatrix"), a.useProgram(this.shaderProgram), proj = glm.mat4.create(), glm.mat4.ortho(proj, -1, 1, -1, 1, .1, 100), a.uniformMatrix4fv(this.Pmatrix, !1, proj)
            }, this.vertexShader = this.vertexShader || function() {
                return vshaderpart1 + "void main() {vec4 position = ((Mtr1 + vec4(a_position, 1))  * Mmatrix + Mtr2) * Pmatrix;gl_Position = position;v_texcoord = a_texcoord;v_texcoord_back = a_texcoord_back;}"
            }, this.fragmentShader = this.fragmentShader || function() {
                return "precision mediump float;varying vec2 v_texcoord;varying vec2 v_texcoord_back;uniform sampler2D u_texture0;uniform sampler2D u_texture1;void main() {if (gl_FrontFacing){gl_FragColor = texture2D(u_texture0, v_texcoord);}else{gl_FragColor = texture2D(u_texture1 , v_texcoord_back);}}"
            }, this.initVertices = this.initVertices || function() {
                for (this.vertices = this.shapes.vertices(), this.indices = [], i = this.vertices.length - 1; i > -1; i--) this.indices[i] = i
            }
        }, this.textures = [], this.enableBlending = function() {
            this.blend = !0;
            var a = this.gl;
            a.blendFuncSeparate(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA, a.ONE, a.ONE_MINUS_SRC_ALPHA), a.enable(a.BLEND), a.depthMask(!1)
        }, this.disableBlending = function() {
            this.blend = !1;
            var a = this.gl;
            a.disable(a.BLEND), a.depthMask(!0)
        }
    }

    function Diamond3d(a, b, c, d) {
        var e, f, g, h;
        e = [(a[0] + b[0]) / 2, a[1], a[2]], f = [b[0], (b[1] + c[1]) / 2, b[2]], g = [e[0], c[1], c[2]], h = [a[0], f[1], a[2]];
        var i = [(a[0] + b[0]) / 2, (a[1] + d[1]) / 2, (a[2] + b[2]) / 2],
            j = [(h[0] + 1) / 2, (h[1] + 1) / 2, (g[0] + 1) / 2, (g[1] + 1) / 2, (f[0] + 1) / 2, (f[1] + 1) / 2, (h[0] + 1) / 2, (h[1] + 1) / 2, (f[0] + 1) / 2, (f[1] + 1) / 2, (e[0] + 1) / 2, (e[1] + 1) / 2],
            k = [(f[0] + 1) / 2, (f[1] + 1) / 2, (h[0] + 1) / 2, (h[1] + 1) / 2, (g[0] + 1) / 2, (g[1] + 1) / 2, (f[0] + 1) / 2, (f[1] + 1) / 2, (e[0] + 1) / 2, (e[1] + 1) / 2, (h[0] + 1) / 2, (h[1] + 1) / 2],
            l = h.concat(f).concat(g).concat(h).concat(e).concat(f);
        Shape.call(this, l, i, j, k)
    }

    function Hexagon(a, b, c, d) {
        var e, f, g, h, i, j, k;
        k = (c[1] - b[1]) / 4, e = [(a[0] + b[0]) / 2, a[1], a[2]], f = [b[0], b[1] + k, b[2]], g = [c[0], c[1] - k, c[2]], h = [e[0], c[1], c[2]], i = [d[0], g[1], d[2]], j = [a[0], f[1], a[2]];
        var l = [(a[0] + b[0] + c[0] + d[0]) / 4, (a[1] + b[1] + c[1] + d[1]) / 4, (a[2] + b[2] + c[2] + d[2]) / 4],
            m = [(e[0] + 1) / 2, (e[1] + 1) / 2, (f[0] + 1) / 2, (f[1] + 1) / 2, (j[0] + 1) / 2, (j[1] + 1) / 2, (j[0] + 1) / 2, (j[1] + 1) / 2, (f[0] + 1) / 2, (f[1] + 1) / 2, (h[0] + 1) / 2, (h[1] + 1) / 2, (f[0] + 1) / 2, (f[1] + 1) / 2, (g[0] + 1) / 2, (g[1] + 1) / 2, (h[0] + 1) / 2, (h[1] + 1) / 2, (j[0] + 1) / 2, (j[1] + 1) / 2, (h[0] + 1) / 2, (h[1] + 1) / 2, (i[0] + 1) / 2, (i[1] + 1) / 2],
            n = [(e[0] + 1) / 2, (e[1] + 1) / 2, (j[0] + 1) / 2, (j[1] + 1) / 2, (f[0] + 1) / 2, (f[1] + 1) / 2, (f[0] + 1) / 2, (f[1] + 1) / 2, (j[0] + 1) / 2, (j[1] + 1) / 2, (h[0] + 1) / 2, (h[1] + 1) / 2, (j[0] + 1) / 2, (j[1] + 1) / 2, (i[0] + 1) / 2, (i[1] + 1) / 2, (h[0] + 1) / 2, (h[1] + 1) / 2, (f[0] + 1) / 2, (f[1] + 1) / 2, (h[0] + 1) / 2, (h[1] + 1) / 2, (g[0] + 1) / 2, (g[1] + 1) / 2],
            o = e.concat(f).concat(j).concat(j).concat(f).concat(h).concat(f).concat(g).concat(h).concat(j).concat(h).concat(i);
        Shape.call(this, o, l, m, n)
    }

    function Rectangle(a, b, c, d, e) {
        e = e || 0;
        var f = [(a[0] + b[0] + c[0] + d[0]) / 4, (a[1] + b[1] + c[1] + d[1]) / 4, (a[2] + b[2] + c[2] + d[2]) / 4],
            g = [(a[0] + 1) / 2, (a[1] + 1) / 2, (b[0] + 1) / 2, (b[1] + 1) / 2, (d[0] + 1) / 2, (d[1] + 1) / 2, (b[0] + 1) / 2, (b[1] + 1) / 2, (c[0] + 1) / 2, (c[1] + 1) / 2, (d[0] + 1) / 2, (d[1] + 1) / 2],
            h = [];
        if (0 == e) h = [(b[0] + 1) / 2, (b[1] + 1) / 2, (a[0] + 1) / 2, (a[1] + 1) / 2, (c[0] + 1) / 2, (c[1] + 1) / 2, (a[0] + 1) / 2, (a[1] + 1) / 2, (d[0] + 1) / 2, (d[1] + 1) / 2, (c[0] + 1) / 2, (c[1] + 1) / 2];
        else if (1 == e) h = [(d[0] + 1) / 2, (d[1] + 1) / 2, (c[0] + 1) / 2, (c[1] + 1) / 2, (a[0] + 1) / 2, (a[1] + 1) / 2, (c[0] + 1) / 2, (c[1] + 1) / 2, (b[0] + 1) / 2, (b[1] + 1) / 2, (a[0] + 1) / 2, (a[1] + 1) / 2];
        else if (2 == e) {
            var i = -1 * f[0] - f[0];
            h = [(b[0] + i + 1) / 2, (b[1] + 1) / 2, (a[0] + i + 1) / 2, (a[1] + 1) / 2, (c[0] + i + 1) / 2, (c[1] + 1) / 2, (a[0] + i + 1) / 2, (a[1] + 1) / 2, (d[0] + i + 1) / 2, (d[1] + 1) / 2, (c[0] + i + 1) / 2, (c[1] + 1) / 2]
        } else {
            var i = -1 * f[1] - f[1];
            h = [(d[0] + 1) / 2, (d[1] + i + 1) / 2, (c[0] + 1) / 2, (c[1] + i + 1) / 2, (a[0] + 1) / 2, (a[1] + i + 1) / 2, (c[0] + 1) / 2, (c[1] + i + 1) / 2, (b[0] + 1) / 2, (b[1] + i + 1) / 2, (a[0] + 1) / 2, (a[1] + i + 1) / 2]
        }
        Shape.call(this, a.concat(b).concat(d).concat(b).concat(c).concat(d), f, g, h)
    }

    function TranslateXY(a, b, c, d) {
        var e = a.length;
        for (i = 0; i < e; i += b) a[i] += c, a[i + 1] += d
    }

    function ScaleXY(a, b, c, d) {
        var e = a.length;
        for (i = 0; i < e; i += b) a[i] *= c, a[i + 1] *= d
    }

    function CreateArray(a, b, c) {
        var d = a.length,
            e = d / b * c,
            f = new Array(e);
        for (i = 0, j = 0; i < d;) {
            for (k = 0; k < c; k++, j++, i++) f[j] = a[i];
            i += b - c
        }
        return f
    }

    function Shape(a, b, c, d) {
        this.center = b, this.vertices = a, this.textCoord = c, this.textCoordBack = d
    }

    function Shapes() {
        this.shapes = this.shapes || [], this.vertices = function() {
            res = [];
            for (var a = this.shapes.length, b = 0; b < a; b++)
                for (var c = this.shapes[b], d = c.vertices.length, e = 0; e < d; e++) res.push(c.vertices[e]);
            return res
        }, this.textCoords = function() {
            res = [];
            for (var a = this.shapes.length, b = 0; b < a; b++) {
                var c = this.shapes[b];
                res = res.concat(c.textCoord)
            }
            return res
        }, this.textCoordsBack = function() {
            res = [];
            for (var a = this.shapes.length, b = 0; b < a; b++) {
                var c = this.shapes[b];
                res = res.concat(c.textCoordBack)
            }
            return res
        }
    }

    function Cube(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.Initialize = function(a) {
            this.initBanim(a) && (this.direction = this.c.s0, this.direction > 10 && (this.effectId = 2, this.direction -= 10), this.init(), this.initShapes(), this.initVertices(), this.zmove = 0, this.xmove = 0, this.mov_matrix = glm.mat4.create(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.dynamic = !0, this.start())
        }, this.initShapes = function() {
            if (this.shapes = new Shapes, 1 == this.direction || 3 == this.direction) {
                this.shapes.shapes[0] = new Rectangle([-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0]), this.shapes.shapes[1] = new Rectangle([-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0]), this.shapes.shapes[0].rot = 0;
                var a = [1, -1, -2],
                    b = [1, 1, -2],
                    c = [1, 0, 0];
                this.shapes.shapes[1].rot = 115, this.animRotation = 65, 3 == this.direction && (this.animRotation *= -1, a[0] = c[0] = b[0] = -1, this.shapes.shapes[1].rot *= -1);
                var d = this.shapes.shapes[1].rot * (Math.PI / 180);
                glm.vec3.rotateY(a, a, c, d), glm.vec3.rotateY(b, b, c, d);
                var e = new Rectangle([-1, -1, 0], a, b, [-1, 1, 0]);
                this.shapes.shapes[1].vertices = e.vertices, this.shapes.shapes[0].center = c, this.shapes.shapes[1].center = c
            } else if (4 == this.direction || 2 == this.direction) {
                this.shapes.shapes[0] = new Rectangle([-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0], 1), this.shapes.shapes[1] = new Rectangle([-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0], 1);
                var a = [1, 1, -2],
                    b = [-1, 1, -2],
                    c = [0, 1, 0];
                this.shapes.shapes[0].rot = 0, this.shapes.shapes[1].rot = -140, this.animRotation = -40, 2 == this.direction && (this.animRotation *= -1, a[1] = c[1] = b[1] = -1, this.shapes.shapes[1].rot *= -1);
                var d = this.shapes.shapes[1].rot * (Math.PI / 180);
                glm.vec3.rotateX(a, a, c, d), glm.vec3.rotateX(b, b, c, d);
                var e = new Rectangle([-1, 1, 0], [1, 1, 0], a, b);
                this.shapes.shapes[1].vertices = e.vertices, this.shapes.shapes[0].center = c, this.shapes.shapes[1].center = c
            }
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart(), 2 == this.effectId && (this.alphaUniform = this.gl.getUniformLocation(this.shaderProgram, "uAlpha"), this.textSetUniform = this.gl.getUniformLocation(this.shaderProgram, "u_texture_set"), this.textures[2] = new TextureSource(this.sV.dp), this.textures[3] = new TextureSource(this.sV.d), this.textures[2].nbg = 1, this.textures[3].nbg = 1, this.textures[0].nbg = -1, this.textures[1].nbg = -1, this.enableBlending()), 4 != this.direction && 2 != this.direction || (this.textures[1].FlipY = !1), this.loadTexture()
        }, this.fragmentShader = function() {
            return 2 == this.effectId ? "precision mediump float;varying vec2 v_texcoord;varying vec2 v_texcoord_back;uniform sampler2D u_texture0;uniform sampler2D u_texture1;uniform sampler2D u_texture2;uniform sampler2D u_texture3;uniform float uAlpha;uniform float u_texture_set;void main() {if (u_texture_set == 1.0){if (gl_FrontFacing && uAlpha == 1.0){gl_FragColor = texture2D(u_texture0, v_texcoord);}else if(!gl_FrontFacing && uAlpha == 0.0){gl_FragColor = texture2D(u_texture1 , v_texcoord_back);}}else{vec4 color = mix(texture2D(u_texture2, v_texcoord),texture2D(u_texture3, v_texcoord),uAlpha);gl_FragColor = color;}}" : "precision mediump float;varying vec2 v_texcoord;varying vec2 v_texcoord_back;uniform sampler2D u_texture0;uniform sampler2D u_texture1;void main() {if (gl_FrontFacing){gl_FragColor = texture2D(u_texture0, v_texcoord);}else{gl_FragColor = texture2D(u_texture1 , v_texcoord_back);}}"
        }, this.render = function(a) {
            var b = this.gl,
                c = this.prepareRender(a, 1),
                d = this.shapes.shapes[0];
            if (2 == this.effectId) {
                var e = glm.mat4.create();
                b.uniform4f(this.Mtr1, 0, 0, 0, 0), b.uniform4f(this.Mtr2, 0, 0, -1, 0), b.uniformMatrix4fv(this.Mmatrix, !1, e), b.uniform1f(this.alphaUniform, c), b.uniform1f(this.textSetUniform, 2), b.uniformMatrix4fv(this.Pmatrix, !1, e), b.drawArrays(b.TRIANGLES, 0, 6), b.uniform1f(this.textSetUniform, 1);
                var f = glm.mat4.create();
                glm.mat4.ortho(f, -1, 1, -1, 1, .1, 100), b.uniformMatrix4fv(this.Pmatrix, !1, f)
            }
            for (i = 0; i < this.shapes.shapes.length; i++) d = this.shapes.shapes[i], c > 1 ? c = 1 : c < 0 && (c = 0), deg = d.rot + this.animRotation * c, rad = deg * (Math.PI / 180), this.mov_matrix = glm.mat4.create(), 1 == this.direction ? (b.uniform4f(this.Mtr2, d.center[0] + -2 * c, d.center[1], d.center[2], 0), glm.mat4.rotateY(this.mov_matrix, this.mov_matrix, rad)) : 3 == this.direction ? (b.uniform4f(this.Mtr2, d.center[0] + 2 * c, d.center[1], d.center[2], 0), glm.mat4.rotateY(this.mov_matrix, this.mov_matrix, rad)) : 4 == this.direction ? (b.uniform4f(this.Mtr2, d.center[0], d.center[1] - 2 * c, d.center[2], 0), glm.mat4.rotateX(this.mov_matrix, this.mov_matrix, rad)) : 2 == this.direction && (b.uniform4f(this.Mtr2, d.center[0], d.center[1] + 2 * c, d.center[2], 0), glm.mat4.rotateX(this.mov_matrix, this.mov_matrix, rad)), b.uniform4f(this.Mtr1, 0 - d.center[0], 0 - d.center[1], 0 - d.center[2], 0), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), 0 == i ? b.uniform1f(this.alphaUniform, 1) : b.uniform1f(this.alphaUniform, 0), b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0)
        }
    }

    function ThreeDBox(a) {
        if (a.s0 > 4) return new Box(a);
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.Initialize = function(a) {
            this.initBanim(a) && (this.direction = this.c.s0, this.direction < 0 && (this.direction < -20 ? (this.effectId = 4, this.direction += 20) : this.direction < -10 ? (this.effectId = 3, this.direction += 10) : this.effectId = 2, this.direction *= -1), this.init(), this.initShapes(), this.initVertices(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.dynamic = !0, this.zcurve = new BCurve(0, -1, -1, 0, -1, 0, 0, 1, 1), this.mov_matrix = glm.mat4.create(), this.start())
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart();
            var a = [];
            this.effectId >= 2 && (this.alphaUniform = this.gl.getUniformLocation(this.shaderProgram, "uAlpha"), this.textSetUniform = this.gl.getUniformLocation(this.shaderProgram, "u_texture_set"), a[0] = new TextureSource(this.sV.dp), a[1] = new TextureSource(this.sV.d), a[0].nbg = 1, a[1].nbg = 1, this.textures[0].nbg = -1, this.textures[1].nbg = -1, this.enableBlending()), 1 != this.direction && 2 != this.direction || (this.textures.reverse(), a.reverse()), this.effectId >= 2 && (this.textures[2] = a[0], this.textures[3] = a[1]), this.loadTexture()
        }, this.initShapes = function() {
            this.shapes = new Shapes, 3 == this.direction || 1 == this.direction ? (this.shapes.shapes[0] = new Rectangle([-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0]), this.shapes.shapes[1] = new Rectangle([-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0]), this.shapes.shapes[0].rot = 0, this.shapes.shapes[0].xshift = 0, this.shapes.shapes[0].zmove = -1, this.shapes.shapes[0].center = [-1, 0, 0], this.shapes.shapes[1].rot = 120, this.shapes.shapes[1].xshift = -.1, this.shapes.shapes[1].zmove = -1, this.shapes.shapes[1].center = [-1, 0, 0], this.xmove = 2.1, this.animRotation = 60) : (this.shapes.shapes[0] = new Rectangle([-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0], 1), this.shapes.shapes[1] = new Rectangle([-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0], 1), this.shapes.shapes[0].rot = 0, this.shapes.shapes[0].xshift = 0, this.shapes.shapes[0].zmove = -.6, this.shapes.shapes[0].center = [0, 1, 0], this.shapes.shapes[1].rot = 150, this.shapes.shapes[1].xshift = .1, this.shapes.shapes[1].zmove = -.6, this.shapes.shapes[1].center = [0, 1, 0], this.xmove = -2.1, this.animRotation = 30)
        }, this.fragmentShader = function() {
            return this.effectId >= 2 ? "precision mediump float;varying vec2 v_texcoord;varying vec2 v_texcoord_back;uniform sampler2D u_texture0;uniform sampler2D u_texture1;uniform sampler2D u_texture2;uniform sampler2D u_texture3;uniform float uAlpha;uniform float u_texture_set;void main() {if (u_texture_set == 1.0){if (gl_FrontFacing && uAlpha == 1.0){gl_FragColor = texture2D(u_texture0, v_texcoord);}else if(!gl_FrontFacing && uAlpha == 0.0){gl_FragColor = texture2D(u_texture1 , v_texcoord_back);}else if(gl_FrontFacing && uAlpha == 0.0){gl_FragColor = texture2D(u_texture1 , v_texcoord);}}else{vec4 color = mix(texture2D(u_texture2, v_texcoord),texture2D(u_texture3, v_texcoord),uAlpha);gl_FragColor = color;}}" : "precision mediump float;varying vec2 v_texcoord;varying vec2 v_texcoord_back;uniform sampler2D u_texture0;uniform sampler2D u_texture1;void main() {if (gl_FrontFacing){gl_FragColor = texture2D(u_texture0, v_texcoord);}else{gl_FragColor = texture2D(u_texture1 , v_texcoord_back);}}"
        }, this.vertexShader = function() {
            return "precision mediump float;" + vshaderpart1 + "uniform mat4 Rmatrix;uniform float Yscale;void main() {vec4 position = ((Mtr1 + vec4(a_position.x, a_position.y / Yscale, a_position.z, 1))  * Mmatrix + Mtr2) * Rmatrix * Pmatrix;gl_Position = position;v_texcoord = a_texcoord;v_texcoord_back = a_texcoord_back;}"
        }, this.render = function(a) {
            var b = this.gl,
                c = this.prepareRender(a, 1);
            1 != this.direction && 2 != this.direction || (c = 1 - c);
            var d = [0, 1, 0];
            4 != this.direction && 2 != this.direction || (d = [1, 0, 0]);
            var e = this.shapes.shapes[0];
            if (this.effectId >= 2) {
                var f = glm.mat4.create();
                b.uniform4f(this.Mtr1, 0, 0, 0, 0), b.uniform4f(this.Mtr2, 0, 0, -1, 0), b.uniformMatrix4fv(this.Mmatrix, !1, f), b.uniform1f(this.alphaUniform, c), b.uniform1f(this.textSetUniform, 2), b.uniformMatrix4fv(this.Pmatrix, !1, f);
                var g = b.getUniformLocation(this.shaderProgram, "Yscale");
                b.uniform1f(g, 1), this.mRmatrix = this.gl.getUniformLocation(this.shaderProgram, "Rmatrix"), b.uniformMatrix4fv(this.mRmatrix, !1, f), b.drawArrays(b.TRIANGLES, 0, 6), b.uniform1f(this.textSetUniform, 1);
                var h = glm.mat4.create();
                glm.mat4.ortho(h, -1, 1, -1, 1, .1, 100), b.uniformMatrix4fv(this.Pmatrix, !1, h)
            }
            if (b.uniform1f(this.textSetUniform, 1), 3 == this.effectId) {
                this.mvd = -1, 2 == this.direction && (this.mvd = 1);
                var j = 0,
                    k = 0,
                    l = .18,
                    m = 0,
                    n = 0;
                return c <= .33 ? (n = c / .33, j = l * n) : c <= .67 ? (n = (c - .33) / .34, k = -2.15 * n, j = l, m = -.4 * n) : (n = (c - .67) / .33, k = -2.15, j = l + -1 * l * n, m = .4 * n - .4), glm.mat4.fromRotation(this.mov_matrix, j * this.mvd, [0, 1, 0]), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.uniform4f(this.Mtr2, this.mvd * (1 + k), 0, 0 + m, 0), b.uniform4f(this.Mtr1, -1 * this.mvd, 0, 0, 0), b.uniform1f(this.alphaUniform, 1), b.drawArrays(b.TRIANGLES, 0, 6), b.uniform4f(this.Mtr2, this.mvd * (1 + k) + 2.15 * this.mvd, 0, 0 + m, 0), b.uniform4f(this.Mtr1, -1 * this.mvd, 0, 0, 0), b.uniform1f(this.alphaUniform, 0), void b.drawArrays(b.TRIANGLES, 0, 6)
            }
            if (4 == this.effectId) {
                var o = 1 == this.direction ? 1 : -1,
                    p = 70 * (1 - c),
                    q = (90 - 90 * c) * o,
                    r = glm.quat.create();
                glm.quat.fromEuler(r, p, 0, q), glm.mat4.fromQuat(this.mov_matrix, r), b.uniform4f(this.Mtr2, -.1 * (1 - c), -5 * (1 - c), 0, 0), b.uniform4f(this.Mtr1, 0, 0, 0, 0), b.uniform1f(this.alphaUniform, 0);
                var h = glm.mat4.create();
                this.mRmatrix = this.gl.getUniformLocation(this.shaderProgram, "Rmatrix"), b.uniformMatrix4fv(this.mRmatrix, !1, this.mov_matrix), b.uniformMatrix4fv(this.Mmatrix, !1, glm.mat4.create());
                var s = b.canvas.width / b.canvas.height,
                    g = b.getUniformLocation(this.shaderProgram, "Yscale");
                b.uniform1f(g, s), glm.mat4.ortho(h, -1, 1, -1 / s, 1 / s, .1, 100), b.uniformMatrix4fv(this.Pmatrix, !1, h), b.drawArrays(b.TRIANGLES, 0, 6), p = 70 * (1 - c) - 70, q = (60 * (1 - c) - 60) * o;
                var r = glm.quat.create();
                glm.quat.fromEuler(r, p, 0, q), glm.mat4.fromQuat(this.mov_matrix, r), b.uniform4f(this.Mtr2, .1 * (1 - c) - .1, 3 - 3 * (1 - c), 0, 0), b.uniform4f(this.Mtr1, 0, 0, 0, 0), b.uniform1f(this.alphaUniform, 1), h = glm.mat4.create(), this.mRmatrix = this.gl.getUniformLocation(this.shaderProgram, "Rmatrix"), b.uniformMatrix4fv(this.mRmatrix, !1, this.mov_matrix), b.uniformMatrix4fv(this.Mmatrix, !1, glm.mat4.create());
                var s = b.canvas.width / b.canvas.height,
                    g = b.getUniformLocation(this.shaderProgram, "Yscale");
                return b.uniform1f(g, s), glm.mat4.ortho(h, -1, 1, -1 / s, 1 / s, .1, 100), b.uniformMatrix4fv(this.Pmatrix, !1, h), void b.drawArrays(b.TRIANGLES, 0, 6)
            }
            this.mRmatrix = this.gl.getUniformLocation(this.shaderProgram, "Rmatrix"), b.uniformMatrix4fv(this.mRmatrix, !1, glm.mat4.create());
            var g = b.getUniformLocation(this.shaderProgram, "Yscale");
            for (b.uniform1f(g, 1), i = 0; i < this.shapes.shapes.length; i++) {
                var e = this.shapes.shapes[i];
                deg = e.rot + this.animRotation * c, j = deg * (Math.PI / 180), this.mov_matrix = glm.mat4.create(), glm.mat4.fromRotation(this.mov_matrix, j, d), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix);
                var m = 0;
                m = this.zcurve.getPointAfterT(c).x;
                var t = this.xmove * c;
                4 == this.direction || 2 == this.direction ? b.uniform4f(this.Mtr2, e.center[0], e.xshift + e.center[1] + t, e.center[2] + m, 0) : b.uniform4f(this.Mtr2, e.xshift + e.center[0] + t, e.center[1], e.center[2] + m, 0), b.uniform4f(this.Mtr1, 0 - e.center[0], 0 - e.center[1], 0 - e.center[2], 0), b.uniform1f(this.alphaUniform, !i), b.drawArrays(b.TRIANGLES, 0, 6)
            }
        }
    }

    function Window(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.Initialize = function(a) {
            this.initBanim(a) && (this.direction = this.c.s0, this.direction < 10 && (this.effectId = 2, this.direction += 10), this.init(), this.initShapes(), this.initVertices(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.dynamic = !0, this.mov_matrix = glm.mat4.create(), this.start())
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart(), this.alphaUniform = this.gl.getUniformLocation(this.shaderProgram, "uAlpha"), 2 == this.effectId && (this.textSetUniform = this.gl.getUniformLocation(this.shaderProgram, "u_texture_set"), this.textures[0].nbg = -1, this.textures[1].nbg = -1, this.textures[2] = new TextureSource(this.sV.dp), this.textures[3] = new TextureSource(this.sV.d), this.textures[2].nbg = 1, this.textures[3].nbg = 1), this.loadTexture()
        }, this.fragmentShader = function() {
            return 2 == this.effectId ? "precision mediump float;varying vec2 v_texcoord;varying vec2 v_texcoord_back;uniform sampler2D u_texture0;uniform sampler2D u_texture1;uniform sampler2D u_texture2;uniform sampler2D u_texture3;uniform float uAlpha;uniform float u_texture_set;void main() {if (u_texture_set == 1.0){if (gl_FrontFacing){vec4 color = texture2D(u_texture0, v_texcoord);vec4 colorA = vec4(color.rgb,uAlpha);gl_FragColor = mix(colorA,color, uAlpha);}else{vec4 color = texture2D(u_texture1, v_texcoord_back);gl_FragColor = color;}}else{vec4 color = mix(texture2D(u_texture2, v_texcoord),texture2D(u_texture3, v_texcoord),uAlpha);gl_FragColor = color;}}" : "precision mediump float;varying vec2 v_texcoord;varying vec2 v_texcoord_back;uniform sampler2D u_texture0;uniform sampler2D u_texture1;uniform float uAlpha;void main() {if (gl_FrontFacing){vec4 color = texture2D(u_texture0, v_texcoord);gl_FragColor = vec4(color.rgb, uAlpha);}else{vec4 color = texture2D(u_texture1, v_texcoord_back);gl_FragColor = vec4(color.rgb, uAlpha);}}"
        }, this.initShapes = function() {
            this.shapes = new Shapes;
            var a = -1;
            this.shapes.shapes[0] = new Rectangle([-1, -1, a], [1, -1, a], [1, 1, a], [-1, 1, a]), this.shapes.shapes[1] = new Rectangle([-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0]), 17 == this.direction ? (this.shapes.shapes[2] = new Rectangle([-1, -1, 0], [0, -1, 0], [0, 1, 0], [-1, 1, 0]), this.shapes.shapes[3] = new Rectangle([0, -1, 0], [1, -1, 0], [1, 1, 0], [0, 1, 0]), this.shapes.shapes[2].center = [-1, 0, 0], this.shapes.shapes[3].center = [1, 0, 0], this.shapes.shapes[2].rot = -60, this.shapes.shapes[2].xshift = 1.5, this.shapes.shapes[3].rot = 60, this.shapes.shapes[3].xshift = 1.5) : 16 == this.direction && (this.shapes.shapes[2] = new Rectangle([-1, -1, 0], [1, -1, 0], [1, 0, 0], [-1, 0, 0]), this.shapes.shapes[3] = new Rectangle([-1, 0, 0], [1, 0, 0], [1, 1, 0], [-1, 1, 0]), this.shapes.shapes[2].center = [0, -1, 0], this.shapes.shapes[3].center = [0, 1, 0], this.shapes.shapes[2].rot = 60, this.shapes.shapes[2].xshift = 1.5, this.shapes.shapes[3].rot = -60, this.shapes.shapes[3].xshift = 1.5)
        }, this.render = function(a) {
            var b = this.gl,
                c = this.prepareRender(a, 1);
            if (2 != this.effectId) {
                var d = [0, 1, 0],
                    e = this.shapes.shapes[0];
                glm.mat4.fromRotation(this.mov_matrix, Math.PI, d), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.uniform4f(this.Mtr2, e.center[0], e.center[1], e.center[2] + c, 0), b.uniform4f(this.Mtr1, 0 - e.center[0], 0 - e.center[1], 0 - e.center[2], 0), b.uniform1f(this.alphaUniform, 1), b.drawArrays(b.TRIANGLES, 0, 6);
                var f = 6;
                for (this.enableBlending(), b.uniform1f(this.alphaUniform, 1 - c), 16 == this.direction && (d = [1, 0, 0]), i = 1; i < this.shapes.shapes.length; i++) {
                    var e = this.shapes.shapes[i];
                    deg = e.rot * c, rad = deg * (Math.PI / 180), glm.mat4.fromRotation(this.mov_matrix, rad, d), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.uniform4f(this.Mtr2, e.center[0], e.center[1], e.center[2] + e.xshift * c, 0), b.uniform4f(this.Mtr1, 0 - e.center[0], 0 - e.center[1], 0 - e.center[2], 0), b.drawArrays(b.TRIANGLES, f, 6), f += 6
                }
                this.disableBlending()
            } else {
                this.mov_matrix = glm.mat4.create(), b.uniform4f(this.Mtr2, 0, 0, -1, 0), b.uniform4f(this.Mtr1, 0, 0, 0, 0), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.uniform1f(this.alphaUniform, c), b.uniform1f(this.textSetUniform, 2);
                var g = glm.mat4.create();
                b.uniformMatrix4fv(this.Pmatrix, !1, g), this.enableBlending(), b.drawArrays(b.TRIANGLES, 6, 6), b.uniform1f(this.textSetUniform, 1), proj = glm.mat4.create(), glm.mat4.ortho(proj, -1, 1, -1, 1, .1, 100), b.uniformMatrix4fv(this.Pmatrix, !1, proj);
                var d = [0, 1, 0],
                    e = this.shapes.shapes[0];
                glm.mat4.fromRotation(this.mov_matrix, Math.PI, d), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.uniform4f(this.Mtr2, e.center[0], e.center[1], e.center[2] + c, 0), b.uniform4f(this.Mtr1, 0 - e.center[0], 0 - e.center[1], 0 - e.center[2], 0), b.uniform1f(this.alphaUniform, c), b.uniform1f(this.textSetUniform, 1), b.drawArrays(b.TRIANGLES, 0, 6);
                var f = 12;
                for (b.uniform1f(this.alphaUniform, 1 - c), 16 == this.direction && (d = [1, 0, 0]), i = 2; i < this.shapes.shapes.length; i++) {
                    var e = this.shapes.shapes[i];
                    deg = e.rot * c, rad = deg * (Math.PI / 180), glm.mat4.fromRotation(this.mov_matrix, rad, d), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.uniform4f(this.Mtr2, e.center[0], e.center[1], e.center[2] + e.xshift * c, 0), b.uniform4f(this.Mtr1, 0 - e.center[0], 0 - e.center[1], 0 - e.center[2], 0), b.drawArrays(b.TRIANGLES, f, 6), f += 6
                }
                this.disableBlending()
            }
        }
    }

    function ThreedBlinds(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.Initialize = function(a) {
            this.initBanim(a) && (this.direction = this.c.s0, this.init(), this.initShapes(), this.initVertices(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.dynamic = !0, this.mov_matrix = glm.mat4.create(), this.start())
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart(), this.loadTexture()
        }, this.initShapes = function() {
            if (this.shapes = new Shapes, this.animRotation = 115, 17 == this.direction) {
                var a = 18;
                this.move = 2 / a;
                for (var b = [-1, -1, 0], c = [-1, -1, 0], d = [-1, 1, 0], e = [-1, 1, 0], f = -.6, g = 2 * Math.abs(f) / a, h = 0; h < 2 * a; h += 2) {
                    c[0] += this.move, d[0] += this.move, this.shapes.shapes[h] = new Rectangle(b, c, d, e), this.shapes.shapes[h + 1] = new Rectangle(b, c, d, e), this.shapes.shapes[h].rot = 0;
                    var i = [d[0], 0, 0];
                    this.shapes.shapes[h + 1].rot = 65, this.shapes.shapes[h].center = i, this.shapes.shapes[h + 1].center = i, this.shapes.shapes[h].delay = Math.abs(f), this.shapes.shapes[h + 1].delay = this.shapes.shapes[h].delay, f += g, b[0] += this.move, e[0] += this.move
                }
                this.move *= -1
            } else if (16 == this.direction) {
                var a = 18;
                this.move = 2 / a;
                for (var b = [-1, -1, 0], c = [-1, -1, 0], d = [1, -1, 0], e = [1, -1, 0], f = -.6, g = 2 * Math.abs(f) / a, h = 0; h < 2 * a; h += 2) {
                    c[1] += this.move, d[1] += this.move, this.shapes.shapes[h] = new Rectangle(e, d, c, b, 1), this.shapes.shapes[h + 1] = new Rectangle(e, d, c, b, 0), this.shapes.shapes[h].rot = 0;
                    var i = [0, e[1], 0];
                    this.shapes.shapes[h + 1].rot = 65, this.shapes.shapes[h].center = i, this.shapes.shapes[h + 1].center = i, this.shapes.shapes[h].delay = Math.abs(f), this.shapes.shapes[h + 1].delay = this.shapes.shapes[h].delay, f += g, b[1] += this.move, e[1] += this.move
                }
            }
        }, this.render = function(a) {
            var b = this.gl;
            this.prepareRender(a, 1);
            var c = 0;
            for (i = 0; i < this.shapes.shapes.length; i++) {
                var d = this.shapes.shapes[i],
                    e = this.duration * d.delay,
                    f = (a - e) / (.4 * this.duration);
                f > 1 ? f = 1 : f < 0 && (f = 0), deg = d.rot + this.animRotation * f, rad = deg * (Math.PI / 180), this.mov_matrix = glm.mat4.create(), 16 == this.direction ? (b.uniform4f(this.Mtr2, d.center[0], d.center[1] + this.move * f, d.center[2], 0), glm.mat4.rotateX(this.mov_matrix, this.mov_matrix, rad)) : 17 == this.direction && (b.uniform4f(this.Mtr2, d.center[0] + this.move * f, d.center[1], d.center[2], 0), glm.mat4.rotateY(this.mov_matrix, this.mov_matrix, rad)), b.uniform4f(this.Mtr1, 0 - d.center[0], 0 - d.center[1], 0 - d.center[2], 0), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.drawArrays(b.TRIANGLES, c, 6), c += 6
            }
        }
    }

    function Vortex(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.Initialize = function(a) {
            this.initBanim(a) && (this.direction = this.c.s0, this.init(), this.initShapes(), this.initVertices(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.dynamic = !0, this.mov_matrix = glm.mat4.create(), this.start())
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart(), this.loadTexture()
        }, this.initShapes = function() {
            this.shapes = new Shapes;
            var a = 0;
            x = 85, y = 65;
            var b = 2 / x,
                c = 2 / y,
                d = 2;
            4 != this.direction && 3 != this.direction || (d = 3);
            for (var e = [], f = 0; f < y; f++)
                for (var g = 0; g < x; g++) a1 = b * g - 1, b1 = c * f - 1, e[a++] = new Rectangle([a1, b1, 0], [a1 + b, b1, 0], [a1 + b, b1 + c, 0], [a1, b1 + c, 0], d);
            var h = .2 / (x * y),
                i = 0;
            if (4 == this.direction)
                for (a = x * y - 1, g = 0; g < x; g++) {
                    for (f = 0; f < y; f++, a--) e[a].delay = Math.random() * (i - h) + i, e[a].xmove = -2 * Math.random() + 2;
                    i += h * y
                } else if (3 == this.direction)
                    for (a = 0, g = 0; g < x; g++) {
                        for (f = 0; f < y; f++, a++) e[a].delay = Math.random() * (i - h) + i, e[a].xmove = -2 * Math.random() + 2;
                        i += h * y
                    } else if (2 == this.direction)
                        for (g = 0; g < x; g++) {
                            for (a = g, f = 0; f < y; f++) e[a].delay = Math.random() * (i - h) + i, e[a].xmove = -2 * Math.random() + 2, a += x;
                            i += h * y
                        } else if (1 == this.direction)
                            for (g = 0; g < x; g++) {
                                for (a = x * y - g - 1, f = 0; f < y; f++) e[a].delay = Math.random() * (i - h) + i, e[a].xmove = -2 * Math.random() + 2, a -= x;
                                i += h * y
                            }
            this.shapes.shapes = e
        }, this.render = function(a) {
            var b = this.gl;
            this.prepareRender(a, 1), total_progress = (a - this.start_time) / this.duration, b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.index_buffer);
            var c = 0,
                d = 0;
            for (4 != this.direction && 3 != this.direction || (d = 1), i = 0, len = this.shapes.shapes.length; i < len; ++i) {
                var e = this.shapes.shapes[i],
                    f = this.duration * e.delay,
                    g = (a - f) / (.7 * this.duration);
                g > 1 ? g = 1 : g < 0 && (g = 0), total_progress >= 1 && (g = 1);
                var h = Math.PI * (g * g);
                2 == this.direction || 1 == this.direction ? glm.mat4.fromRotation(this.mov_matrix, h, [0, 1, 0]) : glm.mat4.fromRotation(this.mov_matrix, h, [1, 0, 0]), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), xmove = g <= .25 ? e.xmove * g : g <= .5 ? e.xmove - e.xmove * g : g <= .75 ? e.xmove * g : e.xmove - e.xmove * g, 0 != xmove && i % 2 == 0 && (xmove *= -2), 0 == d ? (b.uniform4f(this.Mtr1, 0, 0, 0, 0), b.uniform4f(this.Mtr2, xmove, 0, 0, 0)) : (b.uniform4f(this.Mtr1, 0, 0, 0, 0), b.uniform4f(this.Mtr2, 0, xmove, 0, 0)), b.drawArrays(b.TRIANGLES, c, 6), c += 6
            }
        }
    }

    function Fracture(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.Initialize = function(a) {
            if (this.initBanim(a)) {
                this.direction = "Left", this.init(), this.shapes = new Shapes, this.shapes.shapes = JSON.parse('[{"center":[0,0,-1],"vertices":[-1,-1,-1,1,-1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,-1],"textCoord":[0,0,1,0,0,1,1,0,1,1,0,1],"textCoordBack":[1,0,0,0,1,1,0,0,0,1,1,1]},{"center":[-0.02577,-0.035767,0],"vertices":[-0.014,-0.048,0,-0.022,-0.021,0,-0.041,-0.038,0],"delay":0.141,"ym1":0.058,"ym2":-4.403,"yr":0.456,"xr":0.665,"xmove":-0.5},{"center":[-0.00299996,-0.042434,0],"vertices":[-0.014,-0.048,0,0.014,-0.046,0,-0.009,-0.033,0],"delay":0.069,"ym1":0.047,"ym2":-6.349,"yr":0.096,"xr":0.327,"xmove":0.25},{"center":[-0.015,-0.034,0],"vertices":[-0.009,-0.033,0,-0.022,-0.021,0,-0.014,-0.048,0],"delay":0.108,"ym1":0.073,"ym2":-4.662,"yr":0.85,"xr":0.327,"xmove":0.4},{"center":[0.00177,-0.04333,0],"vertices":[-0.009,-0.033,0,0.014,-0.046,0,0,-0.021,0,0,-0.021,0,-0.022,-0.021,0,-0.009,-0.033,0],"delay":0.121,"ym1":0.071,"ym2":-5.16,"yr":0.125,"xr":0.294,"xmove":-0.75},{"center":[-0.01576,-0.011434,0],"vertices":[-0.022,-0.021,0,0,-0.021,0,-0.025,0.008,0],"delay":0.126,"ym1":0.004,"ym2":-6.059,"yr":0.717,"xr":0.48},{"center":[-0.01076,-0.004,0],"vertices":[0,-0.021,0,-0.007,0.001,0,-0.025,0.008,0],"delay":0.29,"ym1":0.027,"ym2":-4.291,"yr":0.381,"xr":0.628},{"center":[-0.029433,-0.0169998,0],"vertices":[-0.041,-0.038,0,-0.022,-0.021,0,-0.025,0.008,0],"delay":0.165,"ym1":0.054,"ym2":-4.138,"yr":0.155,"xr":0.63},{"center":[-0.58,-0.68276,0],"vertices":[-1,-1,0,-0.726,-1,0,-0.014,-0.048,0,-0.014,-0.048,0,-1,-0.891,0,-1,-1,0],"delay":0.201,"ym1":0.023,"ym2":-5.452,"yr":0.882,"xr":0.603},{"center":[-0.35176,-0.32577,0],"vertices":[-1,-0.891,0,-0.014,-0.048,0,-0.041,-0.038,0],"delay":0.104,"ym1":0.04,"ym2":-4.613,"yr":1.159,"xr":0.608},{"center":[-0.67144,-0.522,0],"vertices":[-1,-0.891,0,-0.014,-0.048,0,-1,-0.627,0],"delay":0.015,"ym1":0.093,"ym2":-4.374,"yr":0.427,"xr":0.129},{"center":[-0.6804,-0.234,0],"vertices":[-1,-0.627,0,-0.041,-0.038,0,-1,-0.037,0],"delay":0.114,"ym1":0.061,"ym2":-4.222,"yr":0.102,"xr":0.427,"xmove":0.2},{"center":[-0.35176,-0.23777,0],"vertices":[-1,-0.627,0,-0.014,-0.048,0,-0.041,-0.038,0],"delay":0.257,"ym1":0.077,"ym2":-5.368,"yr":1.071,"xr":0.457},{"center":[-0.49377,-0.31177,0],"vertices":[-1,-0.627,0,-0.014,-0.048,0,-0.467,-0.26,0],"delay":0.205,"ym1":0.031,"ym2":-5.315,"yr":0.379,"xr":0.108},{"center":[-0.5374,0.08543,0],"vertices":[-1,-0.037,0,-0.041,-0.038,0,-0.571,0.331,0,-1,-0.037,0,-0.571,0.331,0,-1,0.466,0],"delay":0.049,"ym1":0.02,"ym2":-4.84,"yr":0.408,"xr":0.564},{"center":[-0.85699,0.574,0],"vertices":[-1,0.466,0,-0.571,0.331,0,-1,0.925,0,-1,0.925,0,-0.571,0.331,0,-0.041,-0.038,0],"delay":0.228,"ym1":0.025,"ym2":-6.17,"yr":0.687,"xr":0.406},{"center":[-0.477,0.463997,0],"vertices":[-1,0.925,0,-0.041,-0.038,0,-0.389,0.505,0],"delay":0.084,"ym1":0.088,"ym2":-5.757,"yr":1.005,"xr":0.646},{"center":[-0.852,0.975,0],"vertices":[-1,0.925,0,-0.556,1,0,-1,1,0,-1,0.925,0,-0.389,0.505,0,-0.556,1,0,-0.389,0.505,0,-0.041,-0.038,0,-0.556,1,0,-0.556,1,0,-0.041,-0.038,0,-0.022,-0.021,0],"delay":0.005,"ym1":0.054,"ym2":-5.367,"yr":0.133,"xr":0.352},{"center":[-0.299,0.65376,0],"vertices":[-0.556,1,0,-0.022,-0.021,0,-0.319,0.982,0],"delay":0.278,"ym1":0.092,"ym2":-5.701,"yr":0.907,"xr":0.542},{"center":[-0.087767,0.65376,0],"vertices":[-0.319,0.982,0,-0.022,-0.021,0,0.078,1,0],"delay":0.212,"ym1":0.069,"ym2":-5.693,"yr":0.833,"xr":0.536},{"center":[0.111768,0.65977,0],"vertices":[0.078,1,0,-0.022,-0.021,0,0.279,1,0],"delay":0.264,"ym1":0.058,"ym2":-5.953,"yr":0.242,"xr":0.32},{"center":[0.08433,0.3276,0],"vertices":[-0.022,-0.021,0,-0.007,0.001,0,0.279,1,0,-0.007,0.001,0,0.415,0.584,0,0.279,1,0,0.415,0.584,0,0.638,1,0,0.279,1,0],"delay":0.219,"ym1":0.044,"ym2":-6.078,"yr":0.03,"xr":0.464},{"center":[0.4694,0.509,0],"vertices":[-0.007,0.001,0,1,0.942,0,0.415,0.584,0,1,0.942,0,1,1,0,0.638,1,0,0.415,0.584,0,1,0.942,0,0.638,1,0],"delay":0.17,"ym1":0.027,"ym2":-4.596,"yr":0.034,"xr":0.191,"xmove":0.5,"zmove":0.2},{"center":[0.331,0.3074,0],"vertices":[-0.007,0.001,0,0,-0.021,0,1,0.942,0],"delay":0.222,"ym1":0.069,"ym2":-4.97,"yr":0.9,"xr":0.59},{"center":[0.766,0.53776,0],"vertices":[0,-0.021,0,1,0.692,0,1,0.942,0],"delay":0.184,"ym1":0.014,"ym2":-4.566,"yr":0.377,"xr":0.604},{"center":[0.766,0.236,0],"vertices":[0,-0.021,0,1,0.037,0,1,0.692,0],"delay":0.239,"ym1":0.018,"ym2":-5.725,"yr":0.693,"xr":0.232},{"center":[0.54599,-0.04043,0],"vertices":[0,-0.021,0,0.638,-0.137,0,1,0.037,0,0.638,-0.137,0,1,-0.3,0,1,0.037,0],"delay":0.023,"ym1":0.033,"ym2":-4.68,"yr":0.086,"xr":0.574},{"center":[0.21745,-0.067999,0],"vertices":[0.014,-0.046,0,0.638,-0.137,0,0,-0.021,0,0.014,-0.046,0,0.53,-0.3,0,0.638,-0.137,0,0.53,-0.3,0,1,-0.627,0,1,-0.3,0,0.53,-0.3,0,1,-0.3,0,0.638,-0.137,0],"delay":0.175,"ym1":0.099,"ym2":-5.794,"yr":0.068,"xr":0.663},{"center":[0.51477,-0.39247,0],"vertices":[0.014,-0.046,0,1,-0.831,0,0.53,-0.3,0,1,-0.831,0,1,-0.627,0,0.53,-0.3,0],"delay":0.034,"ym1":0.085,"ym2":-5.638,"yr":0.295,"xr":0.596},{"center":[0.565,-0.563,0],"vertices":[0.014,-0.046,0,0.681,-0.812,0,1,-0.831,0,0.681,-0.812,0,0.896,-1,0,1,-0.831,0,0.896,-1,0,1,-1,0,1,-0.831,0],"delay":0.091,"ym1":0.034,"ym2":-5.766,"yr":0.342,"xr":0.11},{"center":[0.34444,-0.504,0],"vertices":[0.014,-0.046,0,0.338,-0.654,0,0.681,-0.812,0,0.338,-0.654,0,0.559,-1,0,0.681,-0.812,0,0.559,-1,0,0.896,-1,0,0.681,-0.812,0],"delay":0.11,"ym1":0.051,"ym2":-6.094,"yr":0.271,"xr":0.567},{"center":[0.22436,-0.578,0],"vertices":[0.014,-0.046,0,0.318,-1,0,0.338,-0.654,0,0.318,-1,0,0.559,-1,0,0.338,-0.654,0],"delay":0.193,"ym1":0.072,"ym2":-5.722,"yr":0.718,"xr":0.504},{"center":[0.04544,-0.584,0],"vertices":[0.014,-0.046,0,0.046,-0.706,0,0.076,-1,0,0.014,-0.046,0,0.076,-1,0,0.318,-1,0],"delay":0.09,"ym1":0.07,"ym2":-4.704,"yr":0.743,"xr":0.574},{"center":[0.015432,-0.2766,0],"vertices":[-0.014,-0.048,0,0.046,-0.706,0,0.014,-0.046,0],"delay":0.173,"ym1":0.065,"ym2":-5.454,"yr":0.357,"xr":0.118},{"center":[0.007433,-0.58477,0],"vertices":[-0.014,-0.048,0,-0.01,-1,0,0.046,-0.706,0,-0.01,-1,0,0.076,-1,0,0.046,-0.706,0],"delay":0.258,"ym1":0.016,"ym2":-4.509,"yr":0.956,"xr":0.33},{"center":[-0.182997,-0.86277,0],"vertices":[-0.359,-1,0,-0.01,-1,0,-0.18,-0.588,0,-0.18,-0.588,0,-0.01,-1,0,-0.014,-0.048,0],"delay":0.21,"ym1":0.006,"ym2":-5.562,"yr":0.122,"xr":0.515},{"center":[-0.18442,-0.5454,0],"vertices":[-0.359,-1,0,-0.18,-0.588,0,-0.014,-0.048,0,-0.726,-1,0,-0.359,-1,0,-0.014,-0.048,0],"delay":0.091,"ym1":0.024,"ym2":-5.144,"yr":0.846,"xr":0.138}]');
                for (var b = 1; b < this.shapes.shapes.length; b++) {
                    var c = this.shapes.shapes[b];
                    c.textCoord = this.textureCordinatesFromVertices(c.vertices), c.textCoordBack = c.textCoord
                }
                this.initVertices(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.dynamic = !0, this.mov_matrix = glm.mat4.create(), this.start()
            }
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart(), this.loadTexture()
        }, this.DrawBg = function() {
            var a = this.gl,
                b = glm.mat4.create();
            a.uniformMatrix4fv(this.Pmatrix, !1, b), a.uniform4f(this.Mtr1, 0, 0, 0, 0), a.uniform4f(this.Mtr2, 0, 0, 0, 0), glm.mat4.fromRotation(b, Math.PI, [0, 1, 0]), a.uniformMatrix4fv(this.Mmatrix, !1, b);
            var c = this.shapes.shapes[0].vertices.length / 3;
            return a.drawArrays(a.TRIANGLES, 0, c), c
        }, this.render = function(a) {
            var b = this.gl,
                c = this.prepareRender(a, 1),
                d = this.DrawBg();
            proj = glm.mat4.create(), glm.mat4.ortho(proj, -1, 1, -1, 1, .1, 1), b.uniformMatrix4fv(this.Pmatrix, !1, proj);
            var e = 0;
            for (i = 1; i < this.shapes.shapes.length; i++) {
                var f = this.shapes.shapes[i],
                    g = this.duration * f.delay,
                    h = (a - g) / this.duration;
                h > 1 ? h = 1 : h < 0 && (h = 0), c >= 1 && (h = 1), rad = f.xr * h;
                var j = [0, 1, 1];
                rad = f.yr * h, f.center[0] > 0 && (rad *= -1), f.center[1] < 0 && (rad *= -1), rad += f.delay * h, glm.mat4.fromRotation(this.mov_matrix, rad, j), h < .2 ? e = f.ym1 * h / .2 : (stepprogress = (h - .2) / .8, e = f.ym1 + f.ym2 * stepprogress * stepprogress);
                var k = 0,
                    l = 0;
                f.xmove && (k = f.xmove * h), f.zmove && (l = f.zmove * h), b.uniform4f(this.Mtr1, 0 - f.center[0], 0 - f.center[1], 0 - f.center[2], 0), b.uniform4f(this.Mtr2, f.center[0] + k, f.center[1] + e, f.center[2] + l, 0), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.drawArrays(b.TRIANGLES, d, f.vertices.length / 3), d += f.vertices.length / 3
            }
        }
    }

    function Glitter(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.Initialize = function(a) {
            this.initBanim(a) && (this.ShapeType = "Hexagon", this.direction = this.c.s0, this.direction > 10 && (this.direction = this.c.s0 - 10, this.ShapeType = "Diamond3d"), this.init(), this.initShapes(), this.initVertices(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.dynamic = !0, this.mov_matrix = glm.mat4.create(), this.start())
        }, this.initShapes = function() {
            this.shapes = new Shapes;
            var a = 0;
            x = 32, y = 32;
            var b = 2 / x,
                c = 2 / y;
            c = c / 3 * 4;
            var d = 4,
                e = Hexagon;
            "Diamond3d" == this.ShapeType && (e = Diamond3d, c *= 2, d = 2), x += 1, y += 1, xStrat = -1 - b / 2, yStart = -1 - c / 2;
            for (var f = [], g = 0; g < y; g++) {
                for (var h = 0; h < x; h++) a1 = xStrat + b * h, b1 = yStart + c * g, f[a] = new e([a1, b1, 0], [a1 + b, b1, 0], [a1 + b, b1 + c, 0], [a1, b1 + c, 0]), a++; - 1 != xStrat ? xStrat = -1 : xStrat = -1 - b / 2, yStart -= c / d
            }
            var i = .3 / (x * y),
                j = 0;
            if (4 == this.direction)
                for (a = x * y - 1, h = 0; h < x; h++) {
                    for (g = 0; g < y; g++, a--) f[a].delay = Math.random() * (j - i) + j;
                    j += i * y
                } else if (2 == this.direction)
                    for (a = 0, h = 0; h < x; h++) {
                        for (g = 0; g < y; g++, a++) f[a].delay = Math.random() * (j - i) + j;
                        j += i * y
                    } else if (3 == this.direction)
                        for (h = 0; h < x; h++) {
                            for (a = h, g = 0; g < y; g++) f[a].delay = Math.random() * (j - i) + j, a += x;
                            j += i * y
                        } else if (1 == this.direction)
                            for (h = 0; h < x; h++) {
                                for (a = x * y - h - 1, g = 0; g < y; g++) f[a].delay = Math.random() * (j - i) + j, a -= x;
                                j += i * y
                            }
            this.shapes.shapes = f
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart(), this.loadTexture()
        }, this.render = function(a) {
            var b = this.gl,
                c = this.prepareRender(a, 1),
                d = 0,
                e = this.shapes.shapes[0].vertices.length / 3;
            for (i = 0; i < this.shapes.shapes.length; i++) {
                var f = this.shapes.shapes[i],
                    g = this.duration * f.delay,
                    h = (a - g) / (.5 * this.duration);
                h > 1 ? h = 1 : h < 0 && (h = 0), c >= 1 && (h = 1), this.mov_matrix = glm.mat4.create(), deg = 180 * (0 - h), rad = deg * (Math.PI / 180), glm.mat4.rotateY(this.mov_matrix, this.mov_matrix, rad), b.uniform4f(this.Mtr1, 0 - f.center[0], 0 - f.center[1], 0 - f.center[2], 0), b.uniform4f(this.Mtr2, f.center[0], f.center[1], f.center[2], 0), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.drawArrays(b.TRIANGLES, d, e), d += e
            }
        }
    }

    function Switch(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.Initialize = function(a) {
            this.initBanim(a) && (this.direction = this.c.s0, this.init(), this.initShapes(), this.initVertices(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.mov_matrix = glm.mat4.create(), this.start())
        }, this.initShapes = function() {
            this.rotAxis = [0, 1, 0], this.shapes = new Shapes, this.zMove = -.62;
            var a = 1;
            1 == this.direction && (a = -1);
            var b = new Rectangle([-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0]);
            this.shapes.shapes[1] = b, b.animRot = -20 * a, b.rot = 180, b.xshift = -1 * a, b.xmove = 2 * a, b.Center = [-1 * a, 0, this.zMove], b.vloc = 0, b = new Rectangle([-1, -1, this.zMove], [1, -1, this.zMove], [1, 1, this.zMove], [-1, 1, this.zMove]), this.shapes.shapes[0] = b, b.animRot = 20 * a, b.rot = 0, b.xshift = 1 * a, b.xmove = 0, b.Center = [1 * a, 0, 0], b.vloc = 6
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart(), this.loadTexture()
        }, this.drawSide = function(a, b, c) {
            var d = this.gl;
            deg = a.rot + a.animRot * b * b, rad = deg * (Math.PI / 180), this.mov_matrix = glm.mat4.create();
            var e = a.xshift * b;
            glm.mat4.fromRotation(this.mov_matrix, rad, this.rotAxis), d.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), d.uniform4f(this.Mtr2, a.Center[0] + e + a.xmove, a.Center[1], a.Center[2] + c, 0), d.uniform4f(this.Mtr1, 0 - a.Center[0], 0 - a.Center[1], 0 - a.Center[2], 0), d.drawArrays(d.TRIANGLES, a.vloc, 6)
        }, this.render = function(a) {
            var b = this.prepareRender(a, 1);
            if (b <= .5) {
                b /= .5;
                var c = this.shapes.shapes[0];
                this.drawSide(c, b, 0), c = this.shapes.shapes[1], this.drawSide(c, b, 0)
            } else {
                b = (b - .5) / .5;
                var d = this.zMove * b * -1;
                b = 1 - b;
                var c = this.shapes.shapes[1];
                this.drawSide(c, b, d), d *= -1.8, c = this.shapes.shapes[0], this.drawSide(c, b, d)
            }
        }
    }

    function Honeycomb(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.Initialize = function(a) {
            this.initBanim(a) && (this.init(), this.initShapes(), this.initVertices(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.mov_matrix = glm.mat4.create(), this.start())
        }, this.fragmentShader = function() {
            return "precision mediump float;varying vec2 v_texcoord;varying vec2 v_texcoord_back;uniform sampler2D u_texture0;uniform sampler2D u_texture1;uniform float uAlpha;void main() {if (gl_FrontFacing){vec4 color = texture2D(u_texture0, v_texcoord);gl_FragColor = vec4(color.rgb, uAlpha);}else{vec4 color = texture2D(u_texture1, v_texcoord_back);gl_FragColor = vec4(color.rgb, uAlpha);}}"
        }, this.vertexShader = function() {
            return "precision mediump float;" + vshaderpart1 + "uniform mat4 Rmatrix;uniform float Yscale;void main() {vec4 position = ((Mtr1 + vec4(a_position.x, a_position.y / Yscale, a_position.z, 1))  * Mmatrix + Mtr2) * Rmatrix * Pmatrix;gl_Position = position;v_texcoord = a_texcoord;v_texcoord_back = a_texcoord_back;}"
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart(), this.alphaUniform = this.gl.getUniformLocation(this.shaderProgram, "uAlpha"), this.mRmatrix = this.gl.getUniformLocation(this.shaderProgram, "Rmatrix"), this.loadTexture()
        }, this.initShapes = function() {
            this.shapes = new Shapes;
            var a = 0;
            j = 8, y = 8;
            var b = 2 / j,
                c = 2 / y;
            c = c / 3 * 4;
            var d = 4;
            j += 1, y += 1, xStrat = -1 - b / 2, yStart = -1 - c / 2;
            for (var e = .019, f = [], g = 0; g < y; g++) {
                for (var h = 0; h < j; h++) a1 = xStrat + b * h, b1 = yStart + c * g, f[a] = new Hexagon([a1 + e / 2, b1 + e, 0], [a1 + b - e / 2, b1 + e, 0], [a1 + b - e / 2, b1 + c - e, 0], [a1 + e / 2, b1 + c - e, 0]), a++; - 1 != xStrat ? xStrat = -1 : xStrat = -1 - b / 2, yStart -= c / d
            }
            for (var i = [5e-4, 5e-4, 5e-4, 5e-4, 5e-4, 5e-4, 5e-4, 5e-4, 5e-4, .65, .125, .8, .78, .61, .65, .62, .8, 5e-4, 5e-4, .2, 52e-5, .31, .64, .76, .41, .43, 5e-4, .79, .75, .6, .69, .8, .8, 5e-4, .42, 5e-4, 5e-4, .8, .8, 59e-5, .4, .34, .8, .75, 5e-4, .8, .8, .72, .42, .43, .41, .66, .8, 5e-4, 5e-4, .3, .57, .56, .77, .8, .055, .55, 5e-4, .32, .125, .8, .48, .8, .51, .35, .158, 5e-4, 5e-4, 5e-4, 5e-4, 5e-4, 5e-4, 5e-4, 5e-4, 5e-4, 5e-4], h = 0; h < i.length; h++) f[h].delay = i[h];
            var j = 100;
            this.move = 2 / j;
            for (var k = [-1, -1, 0], l = [-1, -1, 0], m = [-1, 1, 0], c = [-1, 1, 0], h = 0; h < j; h++) l[0] += this.move, m[0] += this.move, this.shapes.shapes[h] = new Rectangle(k, l, m, c, 0), this.shapes.shapes[h].delay = .1 / j * (h + 1), k[0] += this.move, c[0] += this.move;
            this.fadeShps = j, this.fshapestart = 0, this.buff_loc_combs = 6 * j, this.shapes.shapes = this.shapes.shapes.concat(f)
        }, this.render = function(a) {
            var b = this.gl,
                c = this.prepareRender(a, 1),
                d = glm.mat4.create(),
                e = b.canvas.width / b.canvas.height,
                f = b.getUniformLocation(this.shaderProgram, "Yscale");
            b.uniform1f(f, e), glm.mat4.ortho(d, -1, 1, -1 / e, 1 / e, .1, 100), b.uniformMatrix4fv(this.Pmatrix, !1, d), this.drawShapes(c, !0), this.drawShapes(c, !1)
        }, this.afEnd = .1, this.bsStart = .1, this.asEnd = .6, this.bfStart = .9, this.stepProgress = function(a, b, c) {
            var d = (a - b) / (c - b);
            return d < 0 ? 0 : d > 1 ? 1 : d
        }, this.drawShapes = function(a, b) {
            b && this.enableBlending();
            var c = a;
            b && c <= this.afEnd && this.drawFade(0, c), b && c >= this.bfStart && this.drawFade(1, c), c >= this.bsStart && this.drawCombs(1, c), c <= this.asEnd && this.drawCombs(0, c), b && this.disableBlending()
        }, this.drawCombs = function(a, b) {
            var c = b,
                d = this.gl,
                e = this.blend,
                f = this.buff_loc_combs,
                g = glm.mat4.create();
            for (d.uniformMatrix4fv(this.mRmatrix, !1, g), i = this.fadeShps; i < this.shapes.shapes.length; i++) {
                var h = this.shapes.shapes[i],
                    j = this.shapes.shapes[i].vertices.length / 3;
                if (0 != a) {
                    var b = this.stepProgress(c, this.bsStart, .99);
                    this.mov_matrix = glm.mat4.create();
                    var k = 1 - h.delay,
                        l = b >= k;
                    if (l && e || !l && !e) {
                        deg = 90 - 90 * b, rad = deg * (Math.PI / 180);
                        var m = 4.5 * c - 4.5;
                        glm.mat4.fromRotation(g, rad, [0, 0, 1]), d.uniformMatrix4fv(this.mRmatrix, !1, g);
                        var n = glm.mat4.create();
                        glm.mat4.fromRotation(n, Math.PI, [0, 1, 0]), glm.mat4.mul(this.mov_matrix, this.mov_matrix, n), d.uniform4f(this.Mtr1, 0 - h.center[0], 0 - h.center[1], 0 - h.center[2] - m, 0), d.uniform4f(this.Mtr2, h.center[0], h.center[1], h.center[2], 0), d.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), l ? (d.uniform1f(this.alphaUniform, 1), d.drawArrays(d.TRIANGLES, f, j)) : d.uniform1f(this.alphaUniform, 0)
                    }
                } else {
                    g = glm.mat4.create(), d.uniformMatrix4fv(this.mRmatrix, !1, g);
                    var o = this.stepProgress(c, 0, this.asEnd),
                        p = o > h.delay;
                    if (p && e || !p && !e) {
                        deg = 70 * (0 - c), rad = deg * (Math.PI / 180);
                        var m = 1.5 * c;
                        if (glm.mat4.fromRotation(this.mov_matrix, rad, [0, 0, 1]), d.uniform4f(this.Mtr1, 0, 0, m, 0), d.uniform4f(this.Mtr2, 0, 0, 0, 0), d.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), p) {
                            var q = o - h.delay;
                            d.uniform1f(this.alphaUniform, 1 - q / .1)
                        } else d.uniform1f(this.alphaUniform, 1);
                        d.drawArrays(d.TRIANGLES, f, j)
                    }
                }
                f += j
            }
        }, this.drawFade = function(a, b) {
            var c = this.gl,
                d = 0,
                e = glm.mat4.create(),
                f = 0,
                g = 0;
            if (0 == a) {
                g = 1.5 * b;
                var h = 70 * (0 - b),
                    f = h * (Math.PI / 180);
                glm.mat4.fromRotation(this.mov_matrix, f, [0, 0, 1]), c.uniform4f(this.Mtr1, 0, 0, g, 0), c.uniform4f(this.Mtr2, 0, 0, 0, 0)
            } else h = 90 - 90 * b, f = h * (Math.PI / 180), g = 4.5 * b - 4.5, glm.mat4.fromRotation(e, f, [0, 0, 1]), glm.mat4.fromRotation(this.mov_matrix, Math.PI, [0, 1, 0]);
            c.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), c.uniformMatrix4fv(this.mRmatrix, !1, e);
            var j = this.shapes.shapes[this.fshapestart].vertices.length / 3;
            for (i = 0; i < this.fadeShps; i++) {
                var k = this.shapes.shapes[i],
                    l = 1;
                if (1 == a) {
                    var m = this.stepProgress(b, .1 - k.delay + .9, 1);
                    m < 0 && (m = 0), l = m, c.uniform4f(this.Mtr1, 0 - k.center[0], 0 - k.center[1], 0 - k.center[2] - g, 0), c.uniform4f(this.Mtr2, k.center[0], k.center[1], k.center[2], 0)
                } else {
                    var m = this.stepProgress(b, 0 + k.delay, this.afEnd);
                    m < 0 && (m = 0), l = 1 - m
                }
                c.uniform1f(this.alphaUniform, l), c.drawArrays(c.TRIANGLES, d, j), d += j
            }
        }
    }

    function Gallery(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.Initialize = function(a) {
            this.initBanim(a) && (this.direction = this.c.s0, this.init(), this.initShapes(), this.initVertices(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.mov_matrix = glm.mat4.create(), this.start())
        }, this.fragmentShader = function() {
            return "precision mediump float; varying vec2 v_texcoord;varying vec2 v_texcoord_back;uniform sampler2D u_texture0;uniform sampler2D u_texture1;uniform sampler2D u_texture2;uniform int u_ti;void main() {if (u_ti == 1){gl_FragColor = texture2D(u_texture0 , v_texcoord);}else{ if (u_ti == 2){gl_FragColor = mix(texture2D(u_texture0 , v_texcoord),texture2D(u_texture2 , v_texcoord),0.6);}else{ if (u_ti == 3){gl_FragColor = texture2D(u_texture1 , v_texcoord);}else { gl_FragColor = mix(texture2D(u_texture1 , v_texcoord),texture2D(u_texture2 , v_texcoord),0.6);}}}}"
        }, this.initShapes = function() {
            this.shapes = new Shapes;
            for (var a = 0; a < 4; a++) {
                var b = new Rectangle([-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0]);
                this.shapes.shapes[a] = b
            }
            this.set_TextureCordinates(this.shapes.textCoords()), this.mvd = 1, 2 == this.direction && (this.mvd = -1);
            var c = 2.15 * this.mvd;
            this.shapes.shapes[0].vertices = new Rectangle([-1, -1.05, 0], [1, -1.05, 0], [1, -3.05, 0], [-1, -3.05, 0]).vertices, this.shapes.shapes[2].vertices = new Rectangle([-1 + c, -1.05, 0], [1 + c, -1.05, 0], [1 + c, -3.05, 0], [-1 + c, -3.05, 0]).vertices, this.shapes.shapes[3].vertices = new Rectangle([-1 + c, -1, 0], [1 + c, -1, 0], [1 + c, 1, 0], [-1 + c, 1, 0]).vertices
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart(), this.uTindex = this.gl.getUniformLocation(this.shaderProgram, "u_ti");
            var a = new TextureSource;
            a.tcv = new Cv(10, 10);
            var b = a.tcv.cvt.createLinearGradient(0, 0, 0, a.tcv.cv.height);
            b.addColorStop(0, "rgb(255, 255, 255)"), b.addColorStop(1, "rgb(0, 0, 0)"), a.tcv.cvt.save(), a.tcv.cvt.fillStyle = b, a.tcv.cvt.fillRect(0, 0, a.tcv.cv.width, a.tcv.cv.height), a.tcv.cvt.restore(), this.textures[2] = a, this.loadTexture()
        }, this.render = function(a) {
            var b = this.gl,
                c = this.prepareRender(a, 1),
                d = 0,
                e = 0,
                f = .18,
                g = 0;
            if (c <= .33) {
                var h = c / .33;
                d = f * h
            } else if (c <= .67) {
                var h = (c - .33) / .34;
                e = -2.15 * h, d = f, g = -.4 * h
            } else {
                var h = (c - .67) / .33;
                e = -2.15, d = f + -1 * f * h, g = .4 * h - .4
            }
            glm.mat4.fromRotation(this.mov_matrix, d * this.mvd, [0, 1, 0]), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.uniform4f(this.Mtr2, this.mvd * (1 + e), 0, 0 + g, 0), b.uniform4f(this.Mtr1, -1 * this.mvd, 0, 0, 0), b.uniform1i(this.uTindex, 2), b.drawArrays(b.TRIANGLES, 0, 6), b.uniform1i(this.uTindex, 1), b.drawArrays(b.TRIANGLES, 6, 6), b.uniform1i(this.uTindex, 4), b.drawArrays(b.TRIANGLES, 12, 6), b.uniform1i(this.uTindex, 3), b.drawArrays(b.TRIANGLES, 18, 6)
        }
    }

    function Airplane(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.Initialize = function(a) {
            this.initBanim(a) && (this.direction = this.c.s0, this.init(), this.initShapes(), this.initVertices(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.mov_matrix = glm.mat4.create(), this.start())
        }, this.initShapes = function() {
            this.shapes = new Shapes;
            var a = [];
            a.g = [-1, -1, 0], a.h = [-.8, -1, 0], a.i = [.8, -1, 0], a.j = [1, -1, 0], a.k = [1, 1, 0], a.l = [0, 1, 0], a.m = [-1, 1, 0], this.shapes.shapes[0] = new Shape(this.createPlane(0)), this.shapes.shapes[0].textCoord = this.textureCordinatesFromVertices(this.shapes.shapes[0].vertices), this.shapes.shapes[0].textCoordBack = this.shapes.shapes[0].textCoord, this.shapes.shapes[1] = new Shape(a.g.concat(a.h).concat(a.m).concat(a.h).concat(a.l).concat(a.m)), this.shapes.shapes[1].textCoord = this.textureCordinatesFromVertices(this.shapes.shapes[1].vertices), this.shapes.shapes[1].textCoordBack = this.shapes.shapes[1].textCoord, this.shapes.shapes[2] = new Shape(a.i.concat(a.j).concat(a.l).concat(a.j).concat(a.k).concat(a.l)), this.shapes.shapes[2].textCoord = this.textureCordinatesFromVertices(this.shapes.shapes[2].vertices), this.shapes.shapes[2].textCoordBack = this.shapes.shapes[2].textCoord
        }, this.createPlane = function(a) {
            var b = [];
            b.a = [-.8, -1, 0], b.b = [-.4, -1, 0], b.c = [0, -1, 0], b.d = [.4, -1, 0], b.e = [.8, -1, 0], b.f = [0, 1, 0], b.g = [-1, -1, 0], b.h = [b.a[0], b.a[1], b.a[2]], b.i = [b.e[0], b.e[1], b.e[2]], b.j = [1, -1, 0], b.k = [1, 1, 0], b.l = [0, 1, 0], b.m = [-1, 1, 0];
            var c = .3;
            if (a <= .2) c = 0;
            else if (a <= .6) {
                var d = (a - .2) / .4;
                c *= d
            }
            return b.a[0] += c, b.b[0] += c, b.d[0] -= c, b.e[0] -= c, b.c[2] -= 2 * c, b.a.concat(b.b).concat(b.f).concat(b.b).concat(b.c).concat(b.f).concat(b.c).concat(b.d).concat(b.f).concat(b.d).concat(b.e).concat(b.f)
        }, this.drawSides = function(a) {
            var b = this.gl,
                c = a,
                d = glm.mat4.create();
            b.uniformMatrix4fv(this.Mmatrix, !1, d), b.uniform4f(this.Mtr2, c, 0, 0, 0), b.uniform4f(this.Mtr1, 0, 0, 0, 0);
            var e = this.shapes.shapes[0].vertices.length / 3,
                f = this.shapes.shapes[2].vertices.length / 3;
            b.drawArrays(b.TRIANGLES, e + f, f), c *= -1, b.uniform4f(this.Mtr2, c, 0, 0, 0), b.drawArrays(b.TRIANGLES, e, f)
        }, this.vertexShader = function() {
            return "attribute vec3 a_normal;" + vshaderpart1 + "varying highp vec3 v_normal;void main() {vec4 position = ((Mtr1 + vec4(a_position, 1))  * Mmatrix + Mtr2) * Pmatrix;gl_Position = position;v_texcoord = a_texcoord;v_texcoord_back = a_texcoord_back;v_normal = mat3(Mmatrix) * a_normal;}"
        }, this.fragmentShader = function() {
            return "precision mediump float;varying highp vec3 v_normal;uniform vec3 u_reverseLightDirection;uniform vec4 u_color;varying vec2 v_texcoord;varying vec2 v_texcoord_back;uniform sampler2D u_texture0;uniform sampler2D u_texture1;void main() {vec3 normal = normalize(v_normal);float light = dot(normal, u_reverseLightDirection) ;light = clamp(light,0.6, 1.0);gl_FragColor = texture2D(u_texture0, v_texcoord);gl_FragColor.rgb *= light;}"
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart(), this.normals = [], this.normals = this.calcNormals(this.shapes.vertices());
            var a = this.gl,
                b = a.getAttribLocation(this.shaderProgram, "a_normal");
            this.normalBuffer = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.normalBuffer), a.enableVertexAttribArray(b), a.vertexAttribPointer(b, 3, a.FLOAT, !1, 0, 0), a.bufferData(a.ARRAY_BUFFER, new Float32Array(this.normals), a.STATIC_DRAW), a.bindBuffer(a.ARRAY_BUFFER, this.vertex_buffer), this.reverseLightDirectionLocation = a.getUniformLocation(this.shaderProgram, "u_reverseLightDirection");
            var c = glm.vec3.create();
            glm.vec3.normalize(c, [0, 0, 7]), a.uniform3fv(this.reverseLightDirectionLocation, c), this.loadTexture()
        }, this.dynamic = !0, this.render = function(a) {
            var b = this.gl,
                c = this.prepareRender(a, 0);
            this.sV.d.style.opacity = 1;
            var d = 0,
                e = 0,
                f = 0,
                g = 15,
                h = 0;
            if (c <= .3) {
                var i = c / .3;
                this.drawSides(i), g *= i, h = 30 * i, d = -.5 * i, e = -.2 * i, f = -.4 * i
            } else if (c <= .7) {
                var i = (c - .3) / .4;
                h = 30 + 30 * i, g = 15 + 5 * i, d = -.5, f = -.2 * i - .4, e = -.2
            } else {
                var i = (c - .7) / .3;
                h = 60 - 40 * i, i *= i, g = 20 + 30 * i, d = -.5 * i - .5, e = 3.5 * i - .2, f = 2.5 * i - .6
            }
            2 == this.direction && (g *= -1, f *= -1);
            var j = glm.quat.create();
            glm.quat.fromEuler(j, h, 0, g), glm.mat4.fromQuat(this.mov_matrix, j), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.uniform4f(this.Mtr2, f, e, d, 0), b.uniform4f(this.Mtr1, 0, 0, 0, 0);
            var k = this.createPlane(c);
            this.normals = this.calcNormals(k), b.bindBuffer(b.ARRAY_BUFFER, this.normalBuffer), b.bufferSubData(b.ARRAY_BUFFER, 0, new Float32Array(this.normals)), b.bindBuffer(b.ARRAY_BUFFER, this.vertex_buffer), b.bufferSubData(b.ARRAY_BUFFER, 0, new Float32Array(k)), b.drawArrays(b.TRIANGLES, 0, 12)
        }
    }

    function Origami(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.Initialize = function(a) {
            this.initBanim(a) && (this.direction = this.c.s0, this.init(), this.initShapes(), this.initVertices(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.mov_matrix = glm.mat4.create(), this.start())
        }, this.initShapes = function() {
            this.shapes = new Shapes;
            var a = [];
            a[1] = [.563, 1, 0], a[2] = [.563, -1, 0], a[3] = [-.559, -1, 0], a[4] = [-.559, 1, 0], a[10] = [.564, .361, 0], a[15] = [-.559, .304, 0], a[22] = [-1, -1, 0], a[23] = [1, -1, 0], a[24] = [1, 1, 0], a[25] = [-1, 1, 0];
            var b = 2 == this.direction;
            this.shapes.shapes[0] = new Shape(this.createPlane(0)), this.shapes.shapes[0].textCoord = this.textureCordinatesFromVertices(this.shapes.shapes[0].vertices, b), this.shapes.shapes[0].textCoordBack = this.shapes.shapes[0].textCoord, this.shapes.shapes[1] = new Shape(a[22].concat(a[3]).concat(a[15]).concat(a[22]).concat(a[15]).concat(a[25]).concat(a[15]).concat(a[4]).concat(a[25])), this.shapes.shapes[1].textCoord = this.textureCordinatesFromVertices(this.shapes.shapes[1].vertices, b), this.shapes.shapes[1].textCoordBack = this.shapes.shapes[1].textCoord, this.shapes.shapes[2] = new Shape(a[2].concat(a[23]).concat(a[10]).concat(a[23]).concat(a[24]).concat(a[10]).concat(a[10]).concat(a[24]).concat(a[1])), this.shapes.shapes[2].textCoord = this.textureCordinatesFromVertices(this.shapes.shapes[2].vertices, b), this.shapes.shapes[2].textCoordBack = this.shapes.shapes[2].textCoord, this.set_TextureCordinates(this.shapes.textCoords())
        }, this.fly = 0, this.flydir = 1, this.createPlane = function(a, b) {
            var c = [];
            c[0] = [0, 0, 0], c[1] = [.563, 1, 0], c[2] = [.563, -1, 0], c[3] = [-.559, -1, 0], c[4] = [-.559, 1, 0], c[5] = [.367, .649, 0], c[6] = [.279, -.508, 0], c[7] = [.18, -1, 0], c[8] = [0, -.67, 0], c[9] = [.002, .007, 0], c[10] = [.564, .361, 0], c[11] = [.388, -.028, 0], c[12] = [.222, .997, 0], c[13] = [0, .682, 0], c[14] = [-.274, .483, 0], c[15] = [-.559, .304, 0], c[16] = [-.372, -.011, 0], c[17] = [.452, 1, 0], c[18] = [.492, .947, 0], c[19] = [.496, .878, 0], c[20] = [.542, .878, 0], c[21] = [.572, .835, 0];
            var d = .1,
                e = .3,
                f = .3,
                g = 1;
            if (a <= .1 && (g = a / .1, d *= g, e *= g, f *= g), c[9][2] = .7 * g, c[5][2] -= .2 * g, c[5][1] -= .2 * g, c[19][2] = .2 * g, c[1][2] = .2 * g, c[1][0] += .1 * g, c[20][2] = .1 * g, c[18][2] = .1 * g, c[17][2] = .25 * g, c[21][2] = .25 * g, c[17][0] -= .05 * g, c[21][0] -= .05 * g, c[6][0] -= d, c[6][1] -= d, c[6][2] = 2 * d, c[14][0] -= d, c[14][1] -= 1.2 * d, c[14][2] = 2 * d, c[7][0] += f, c[7][1] += f, c[15][0] += f, c[15][1] += f, c[8][0] += .5 * f, c[8][1] += .3 * f, c[8][2] -= .5 * f, c[16][0] += .3 * f, c[16][1] += .5 * f, c[16][2] -= .5 * f, c[2][0] -= 1.5 * e, c[2][1] += 3 * e, c[2][2] = 2 * e, c[4][1] += 3 * e, c[4][0] -= 4 * e, c[4][2] = 2 * e, c[10][0] -= .2 * g, c[10][1] -= .15 * g, c[10][2] += .15 * g, c[12][0] -= .2 * g, c[12][1] -= .15 * g, c[12][2] += .15 * g, a > .4) {
                var h = (a - .4) / .6,
                    i = glm.vec3.fromValues(0, 1, 0),
                    j = glm.vec3.fromValues(c[11][0], c[11][1], c[11][2]),
                    k = 100 * h;
                glm.vec3.rotateX(i, i, j, k), c[2][0] += .3, c[2][1] -= .6, c[2][2] -= .3, c[4][0] += .3, c[4][1] -= .6, c[4][2] -= .3;
                var l = i[1];
                c[2][0] += .4 * l, c[2][1] -= .5 * l, c[2][2] -= .6 * l, c[4][0] += .4 * l, c[4][1] -= .5 * l, c[4][2] -= .6 * l, c[3][2] += .1 * l, c[1][2] += .02 * l
            }
            if (c[22] = [-1, -1, 1], c[23] = [1, -1, 0], c[24] = [1, 1, 0], c[25] = [-1, 1, 0], a <= .05) {
                var g = a / .05,
                    m = .5 * g;
                c[22][0] += m, c[22][1] += m, c[22][2] -= 2 * m, c[25][0] += m, c[25][2] -= m, c[23][0] -= m, c[23][1] += m, c[23][2] -= m, c[24][0] -= m, c[24][2] -= m
            }
            this.s1 = c[22].concat(c[3]).concat(c[15]).concat(c[22]).concat(c[15]).concat(c[25]).concat(c[15]).concat(c[4]).concat(c[25]), this.s2 = c[2].concat(c[23]).concat(c[10]).concat(c[23]).concat(c[24]).concat(c[10]).concat(c[10]).concat(c[24]).concat(c[1]);
            for (var n = [], o = 0, p = this.tr.length; o < p; o++) n = n.concat(c[this.tr[o]]);
            if (b && (n = n.concat(this.s1).concat(this.s2)), 2 == this.direction)
                for (var o = n.length - 1; o >= 0; o -= 3) n[o] *= -1;
            return n
        }, this.tr = [7, 2, 6, 7, 6, 8, 7, 8, 3, 8, 6, 9, 3, 8, 9, 2, 11, 6, 2, 10, 11, 10, 19, 11, 10, 21, 19, 6, 5, 9, 6, 11, 5, 11, 19, 5, 11, 20, 19, 13, 5, 19, 5, 19, 18, 9, 5, 13, 13, 18, 12, 18, 17, 12, 13, 18, 19, 13, 12, 4, 14, 13, 4, 15, 14, 4, 16, 14, 15, 3, 16, 15, 3, 9, 16, 16, 9, 14, 9, 13, 14, 21, 1, 20, 20, 1, 19, 19, 1, 18, 18, 1, 17, 21, 20, 19], this.clamp = function(a, b, c) {
            return Math.min(Math.max(a, b), c)
        }, this.vertexShader = function() {
            return "attribute vec3 a_normal;" + vshaderpart1 + "varying highp vec3 v_normal;void main() {vec4 position = ((Mtr1 + vec4(a_position, 1))  * Mmatrix + Mtr2) * Pmatrix;gl_Position = position;v_texcoord = a_texcoord;v_texcoord_back = a_texcoord_back;v_normal = mat3(Mmatrix) * a_normal;}"
        }, this.fragmentShader = function() {
            return "precision mediump float;varying highp vec3 v_normal;uniform vec3 u_reverseLightDirection;uniform vec4 u_color;varying vec2 v_texcoord;varying vec2 v_texcoord_back;uniform sampler2D u_texture0;uniform sampler2D u_texture1;void main() {vec3 normal = normalize(v_normal);float light = dot(normal, u_reverseLightDirection) ;light = clamp(light,0.6, 1.0);gl_FragColor = texture2D(u_texture0, v_texcoord);gl_FragColor.rgb *= light;}"
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart(), this.normals = [], this.normals = this.calcNormals(this.shapes.vertices());
            var a = this.gl,
                b = a.getAttribLocation(this.shaderProgram, "a_normal");
            this.normalBuffer = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.normalBuffer), a.enableVertexAttribArray(b), a.vertexAttribPointer(b, 3, a.FLOAT, !1, 0, 0), a.bufferData(a.ARRAY_BUFFER, new Float32Array(this.normals), a.STATIC_DRAW), a.bindBuffer(a.ARRAY_BUFFER, this.vertex_buffer);
            var c = a.getUniformLocation(this.shaderProgram, "u_color");
            this.reverseLightDirectionLocation = a.getUniformLocation(this.shaderProgram, "u_reverseLightDirection"), a.uniform4fv(c, [.2, 1, .2, 1]);
            var d = glm.vec3.create();
            glm.vec3.normalize(d, [0, 0, 7]), a.uniform3fv(this.reverseLightDirectionLocation, d), this.loadTexture()
        }, this.dynamic = !0, this.render = function(a) {
            var b = this.gl,
                c = this.prepareRender(a, 0);
            this.sV.d.style.opacity = 1;
            var d = 0,
                e = 0,
                f = 0,
                g = 15,
                h = 0;
            if (c <= .2) {
                var i = c / .2;
                g *= i, h = 30 * i, d = -.7 * i
            } else if (c <= .3) {
                if (c <= .25) {
                    var i = (c - .2) / .05;
                    h = 25 + 10 * i, g = 15 + 10 * i
                } else {
                    var i = (c - .25) / .05,
                        j = glm.vec3.fromValues(0, .01, 0),
                        k = 6.28 * i;
                    glm.vec3.rotateX(j, j, [0, 0, 0], k), e = j[1], h = 35, g = 25
                }
                d = -.7
            } else {
                var i = (c - .3) / .7;
                h = 35 + 20 * i, i *= i, g = 25 + 25 * i, d = -.1 * i - .7, f = 3.75 * i, e = 2.8 * i
            }
            var l = 0;
            2 == this.direction && (l = 180, f *= -1);
            var m = glm.quat.create();
            glm.quat.fromEuler(m, h, l, g), glm.mat4.fromQuat(this.mov_matrix, m), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.uniform4f(this.Mtr2, f, e, d, 0), b.uniform4f(this.Mtr1, 0, 0, 0, 0);
            var n = glm.mat4.create();
            glm.mat4.ortho(n, -1, 1, -1, 1, .1, 10), b.uniformMatrix4fv(this.Pmatrix, !1, n);
            var o = [],
                p = this.shapes.shapes[0].vertices.length / 3;
            c <= .05 ? (p += this.shapes.shapes[1].vertices.length / 3 * 2, o = this.createPlane(c, 1)) : o = this.createPlane(c), this.normals = this.calcNormals(o), b.bindBuffer(b.ARRAY_BUFFER, this.normalBuffer), b.bufferSubData(b.ARRAY_BUFFER, 0, new Float32Array(this.normals)), b.bindBuffer(b.ARRAY_BUFFER, this.vertex_buffer), b.bufferSubData(b.ARRAY_BUFFER, 0, new Float32Array(o)), b.drawArrays(b.TRIANGLES, 0, p)
        }
    }

    function Shred(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.initShapes = function() {
            if (this.shapes = new Shapes, 1 == this.direction || 2 == this.direction)
                for (var a = [
                        [0, 0],
                        [-1, 1],
                        [-1, -1],
                        [-.87, 1],
                        [-.909, -1],
                        [-.909, -.106],
                        [-.869, -.106],
                        [-.804, 1],
                        [-.804, .576],
                        [-.828, .576],
                        [-.828, -1],
                        [-.727, 1],
                        [-.727, .251],
                        [-.79, .251],
                        [-.79, -1],
                        [-.583, 1],
                        [-.583, -.114],
                        [-.672, -.116],
                        [-.672, -1],
                        [-.552, 1],
                        [-.552, -.681],
                        [-.619, -.681],
                        [-.619, -1],
                        [-.468, 1],
                        [-.468, -.232],
                        [-.501, -.231],
                        [-.501, -1],
                        [-.404, 1],
                        [-.404, -.202],
                        [-.414, -.203],
                        [-.415, -1],
                        [-.329, 1],
                        [-.329, .039],
                        [-.372, .038],
                        [-.372, -1],
                        [-.193, 1],
                        [-.194, -.202],
                        [-.272, -.203],
                        [-.271, -1],
                        [-.153, 1],
                        [-.154, .066],
                        [-.175, .066],
                        [-.174, -1],
                        [-.11, 1],
                        [-.11, .639],
                        [-.146, .639],
                        [-.145, -1],
                        [-.001, 1],
                        [-.001, -.178],
                        [-.026, -.178],
                        [-.026, -1],
                        [.081, 1],
                        [.081, .016],
                        [.045, .016],
                        [.045, -1],
                        [.099, 1],
                        [.099, -.769],
                        [.091, -.769],
                        [.091, -1],
                        [.361, 1],
                        [.361, -.337],
                        [.173, -.337],
                        [.173, -1],
                        [.286, -1],
                        [.286, -.726],
                        [.371, -.726],
                        [.371, 1],
                        [.392, -1],
                        [.392, .253],
                        [.526, .253],
                        [.526, 1],
                        [.552, 1],
                        [.552, -.082],
                        [.421, -.081],
                        [.421, -1],
                        [.614, 1],
                        [.614, -.384],
                        [.526, -.384],
                        [.526, -1],
                        [.652, 1],
                        [.651, -.79],
                        [.563, -.79],
                        [.563, -1],
                        [.781, 1],
                        [.781, .763],
                        [.74, .763],
                        [.739, -1],
                        [.848, 1],
                        [.848, -.412],
                        [.815, -.412],
                        [.815, -1],
                        [.953, 1],
                        [.953, -.416],
                        [.89, -.416],
                        [.89, -1],
                        [1, 1],
                        [1, -1]
                    ], b = [
                        [2, 5, 1, 2, 4, 5, 5, 3, 1, 5, 6, 3],
                        [9, 7, 3, 9, 8, 7, 6, 9, 3, 10, 9, 6, 4, 6, 5, 4, 10, 6],
                        [8, 11, 7, 12, 11, 8, 13, 12, 8, 10, 13, 9, 13, 8, 9, 10, 14, 13],
                        [17, 16, 12, 16, 15, 12, 12, 15, 11, 18, 17, 12, 18, 12, 13, 14, 18, 13],
                        [18, 22, 21, 18, 21, 17, 21, 20, 16, 21, 16, 17, 20, 19, 16, 16, 19, 15],
                        [22, 20, 21, 22, 26, 20, 26, 25, 20, 20, 25, 19, 25, 23, 19, 25, 24, 23],
                        [26, 30, 25, 30, 24, 25, 30, 29, 24, 24, 29, 23, 29, 27, 23, 29, 28, 27],
                        [30, 34, 29, 34, 28, 29, 34, 33, 28, 28, 33, 27, 33, 32, 27, 32, 31, 27],
                        [34, 37, 33, 34, 38, 37, 37, 32, 33, 37, 35, 32, 32, 35, 31, 37, 36, 35],
                        [38, 42, 37, 42, 36, 37, 42, 41, 36, 36, 41, 35, 41, 40, 39, 41, 39, 35],
                        [40, 45, 39, 46, 45, 40, 42, 46, 40, 42, 40, 41, 45, 44, 43, 45, 43, 39],
                        [46, 50, 45, 50, 49, 45, 49, 44, 45, 49, 43, 44, 49, 48, 43, 48, 47, 43],
                        [50, 54, 49, 54, 48, 49, 54, 53, 48, 48, 53, 47, 53, 52, 47, 52, 51, 47],
                        [52, 55, 51, 56, 55, 52, 57, 56, 52, 57, 52, 53, 54, 57, 53, 54, 58, 57],
                        [58, 62, 61, 58, 56, 57, 58, 61, 55, 61, 60, 55, 60, 59, 55],
                        [62, 63, 64, 62, 64, 61, 64, 65, 61, 65, 60, 61, 65, 59, 60, 65, 66, 59],
                        [63, 67, 64, 67, 65, 64, 67, 68, 65, 65, 68, 66, 68, 69, 66, 69, 70, 66],
                        [67, 74, 68, 74, 73, 68, 73, 72, 68, 72, 69, 68, 72, 71, 69, 69, 71, 70],
                        [74, 78, 73, 78, 77, 73, 77, 76, 73, 76, 72, 73, 76, 75, 72, 72, 75, 71],
                        [78, 82, 81, 78, 81, 77, 81, 80, 77, 80, 76, 77, 80, 79, 76, 76, 79, 75],
                        [82, 80, 81, 82, 86, 80, 86, 85, 80, 80, 85, 79, 85, 84, 79, 84, 83, 79],
                        [86, 90, 89, 86, 89, 85, 89, 88, 85, 88, 84, 85, 88, 87, 84, 84, 87, 83],
                        [90, 94, 89, 94, 88, 89, 94, 93, 88, 88, 93, 91, 88, 91, 87, 93, 92, 91],
                        [94, 96, 93, 96, 92, 93, 96, 95, 92, 92, 95, 91]
                    ], c = [0, -.1, 0, -.01, .11, 0, 0, -.05, .2, 0, .08, 0, .01, -.15, .11, 0, .15, .03, 0, -.1, .12, 0, 0, .01], d = [], e = 0, f = 0, g = 0, h = b.length; g < h; g++) {
                    d = [];
                    for (var i = 0, j = b[g].length; i < j; i++) d = d.concat(a[b[g][i]].concat(0));
                    this.shapes.shapes[g] = new Shape(d), this.shapes.shapes[g].bufloc = e, f = d.length / 3, this.shapes.shapes[g].buflen = f, e += f, this.shapes.shapes[g].textCoord = this.textureCordinatesFromVertices(d), this.shapes.shapes[g].textCoordBack = this.shapes.shapes[g].textCoord, this.shapes.shapes[g].zplus = c[g]
                } else {
                    var k = 0;
                    x = 85, y = 70;
                    for (var l = 2 / x, m = 2 / y, n = [], f = 6, e = 0, i = 0; i < y; i++)
                        for (var g = 0; g < x; g++) a1 = l * g - 1, b1 = m * i - 1, n[k] = new Rectangle([a1, b1, 0], [a1 + l, b1, 0], [a1 + l, b1 + m, 0], [a1, b1 + m, 0]), n[k].buflen = f, n[k].bufloc = e, n[k].zplus, e += f, k++;
                    for (g = 0; g < x; g++)
                        for (k = x * y - g - 1, i = 0; i < y; i++) n[k].zplus = k % 2 == 0 ? -.2 * Math.random() : .2 * Math.random(), k -= x;
                    this.shapes.shapes = n
                }
        }, this.Initialize = function(a) {
            this.initBanim(a) && (this.direction = this.c.s0, this.init(), this.initShapes(), this.initVertices(), this.zmove = 0, this.xmove = 0, this.mov_matrix = glm.mat4.create(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.dynamic = !0, this.start())
        }, this.render = function(a) {
            var b = this.gl,
                c = this.prepareRender(a, 1),
                d = -3,
                e = -15,
                f = 0,
                g = -.5,
                h = -.3,
                i = 0,
                j = -.2,
                k = 1,
                l = 1;
            if ((2 == this.direction || 4 == this.direction) && c > .5 && (l = -1), c <= .4) {
                var m = c / .4;
                m *= m * m, g *= m, h *= m, k *= m, m *= m * m, e *= m, d *= m, i *= m, j *= m
            } else if (c <= .6) {
                var m = 1;
                c <= .5 ? m = (c - .4) / .1 : (m = (c - .5) / .1, m = 1 - m), m *= m, g += -2 * m, h += 1.3 * m, i += 1 * m, d += -5 * m
            } else {
                var m = (c - .6) / .4;
                m = 1 - m, e *= m, d = -3 * m, g *= m, h *= m, k *= m, j *= m
            }
            this.mov_matrix = glm.mat4.create();
            var n = glm.quat.create();
            glm.quat.fromEuler(n, d, e * l, f), glm.mat4.fromQuat(this.mov_matrix, n), this.uTindex = this.gl.getUniformLocation(this.shaderProgram, "u_ti"), b.uniform1i(this.uTindex, c <= .5 ? 0 : 1), b.uniform4f(this.Mtr1, 0, 0, 0, 0), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix);
            for (var o = 0, p = this.shapes.shapes.length; o < p; o += 2) {
                var q = this.shapes.shapes[o];
                b.uniform4f(this.Mtr2, -1 * i * 2 * l, 3 * i + j, g + +(q.zplus || 0) * k, 0), b.drawArrays(b.TRIANGLES, q.bufloc, q.buflen)
            }
            for (var o = 1, p = this.shapes.shapes.length; o < p; o += 2) {
                var q = this.shapes.shapes[o];
                b.uniform4f(this.Mtr2, i * l, -2 * i + j, h + (q.zplus || 0) * k, 0), b.drawArrays(b.TRIANGLES, q.bufloc, q.buflen)
            }
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart(), this.normals = [], this.normals = this.calcNormals(this.shapes.vertices());
            var a = this.gl,
                b = a.getAttribLocation(this.shaderProgram, "a_normal");
            this.normalBuffer = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.normalBuffer), a.enableVertexAttribArray(b), a.vertexAttribPointer(b, 3, a.FLOAT, !1, 0, 0), a.bufferData(a.ARRAY_BUFFER, new Float32Array(this.normals), a.STATIC_DRAW), a.bindBuffer(a.ARRAY_BUFFER, this.vertex_buffer);
            var c = a.getUniformLocation(this.shaderProgram, "u_color");
            this.reverseLightDirectionLocation = a.getUniformLocation(this.shaderProgram, "u_reverseLightDirection"), a.uniform4fv(c, [.2, 1, .2, 1]);
            var d = glm.vec3.create();
            glm.vec3.normalize(d, [0, 0, 7]), a.uniform3fv(this.reverseLightDirectionLocation, d), this.loadTexture()
        }, this.vertexShader = function() {
            return "attribute vec3 a_normal;" + vshaderpart1 + "varying highp vec3 v_normal;void main() {vec4 position = ((Mtr1 + vec4(a_position, 1))  * Mmatrix + Mtr2) * Pmatrix;gl_Position = position;v_texcoord = a_texcoord;v_texcoord_back = a_texcoord_back;v_normal = mat3(Mmatrix) * a_normal;}"
        }, this.fragmentShader = function() {
            return "precision mediump float;varying highp vec3 v_normal;uniform vec3 u_reverseLightDirection;uniform vec4 u_color;varying vec2 v_texcoord;varying vec2 v_texcoord_back;uniform sampler2D u_texture0;uniform sampler2D u_texture1;uniform int u_ti;void main() {vec3 normal = normalize(v_normal);float light = dot(normal, u_reverseLightDirection) ;light = clamp(light,0.6, 1.0);if (u_ti == 0){gl_FragColor = texture2D(u_texture0, v_texcoord);}else{gl_FragColor = texture2D(u_texture1 , v_texcoord);}gl_FragColor.rgb *= light;}"
        }
    }

    function PageCurl(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.initShapes = function() {
            this.shapes = new Shapes;
            for (var a = this.nshapes, b = 1 / a, c = [0, -1, 0], d = [0 + b, -1, 0], e = [0 + b, 1, 0], f = [0, 1, 0], g = 0; g < a; g++) this.shapes.shapes[g] = new Rectangle(c, d, e, f, 2), c[0] += b, d[0] += b, e[0] += b, f[0] += b;
            this.shapes.shapes[a] = new Rectangle([-1, -1, 0], [0, -1, 0], [0, 1, 0], [-1, 1, 0]), this.shapes.shapes[++a] = new Rectangle([0, -1, 0], [1, -1, 0], [1, 1, 0], [0, 1, 0])
        }, this.Initialize = function(a) {
            this.nshapes = 40, this.initBanim(a) && (this.direction = this.c.s0, this.init(), this.initShapes(), this.initVertices(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.dynamic = !0, this.start())
        }, this.getPoints = function(a) {
            var b = [
                [0, .5],
                [0, .5],
                [0, 0],
                [0, 0]
            ];
            if (a <= .1) {
                var c = a / .1;
                b[1][0] = .25 * c, b[3][1] = .075 * c, b[2][1] = .25 * c
            } else if (a <= .3) {
                var c = (a - .1) / .2;
                b[1][0] = .25, b[1][1] = .5 + .1 * c, b[3][0] = .1 * c, b[3][1] = .075 + .025 * c, b[2][0] = .25 * c, b[2][1] = .25 + .2 * c
            } else if (a <= .4) {
                var c = (a - .3) / .1;
                b[1][0] = .25, b[1][1] = .6 + .1 * c, b[2][1] = .45 + .25 * c, b[2][0] = .25 + .1 * c, b[3][0] = .1 + .1 * c, b[3][1] = .1 + .15 * c
            } else if (a <= .5) {
                var c = (a - .4) / .1;
                b[1][0] = .25 - .2 * c, b[2][0] = .35 - .25 * c, b[1][1] = .7 + .1 * c, b[2][1] = .7 + .2 * c, b[3][0] = .2 + .2 * c, b[3][1] = .25 + .15 * c
            } else {
                var c = (a - .5) / .5;
                b[1][0] = .05 - .05 * c, b[2][0] = .1 - .1 * c, b[3][0] = .4 - .4 * c, b[1][1] = .8 + .2 * c, b[2][1] = .9 + .1 * c, b[3][1] = .4 + .61 * c
            }
            return b[0][0] *= -2, b[0][1] *= 2, b[1][0] *= -2, b[1][1] *= 2, b[2][0] *= -2, b[2][1] *= 2, b[3][0] *= -2, b[3][1] *= 2, b
        }, this.getTimeforCurveDist = function(a, b, c) {
            var d = 1 / c,
                e = 0,
                f = [e, -1, 0],
                g = [e + d, -1, 0],
                h = [e + d, 1, 0],
                i = [e, 1, 0];
            b += .009;
            for (var j = 0, k = 1, l = 0; l < c; l++) {
                var m = a.getPointAfterT(d * l);
                f[2] = m.x, i[2] = m.x, f[0] = m.y, i[0] = m.y;
                var n = a.getPointAfterT(d * (l + 1));
                g[2] = n.x, h[2] = n.x, g[0] = n.y, h[0] = n.y, dist = glm.vec3.distance(f, g), j += dist, k = d * (l + 1);
                for (var o = 1e-4, p = 0, q = 0; j > b && !(q++ > 100);) p = 1, j -= dist, pt = this.zcurve.getPointAfterT(k - o), g[2] = pt.x, h[2] = pt.x, g[0] = pt.y, h[0] = pt.y, dist = glm.vec3.distance(f, g), j += dist, o += 1e-4;
                if (1 == p) return k - o
            }
            return 1
        }, this.createCurl = function(a) {
            var b = this.getPoints(a),
                c = this.nshapes;
            this.zcurve = new BCurve(b[0][0], b[0][1], b[1][0], b[1][1], b[2][0], b[2][1], b[3][0], b[3][1], 1);
            var d = new Shapes,
                e = new Shapes,
                f = 0,
                g = 1;
            1 == this.direction && (g = 1);
            var h = g / c,
                i = this.getTimeforCurveDist(this.zcurve, g, this.nshapes),
                j = i / c,
                k = [f, -1, 0],
                l = [f + h, -1, 0],
                m = [f + h, 1, 0],
                n = [f, 1, 0],
                o = 3 == this.direction || 4 == this.direction ? 0 : -1,
                p = [o, -1, 0],
                q = [o, -1, 0],
                r = [o, 1, 0],
                s = [o, 1, 0],
                t = [];
            t.x = 0, t.y = 0, t.t = 0;
            for (var u = 4 == this.direction || 2 == this.direction ? -1 : 1, v = 0, w = c; v < c; v++, w--) {
                var t = this.zcurve.getPointAfterT(j * v);
                k[2] = t.x * u, n[2] = t.x * u, k[0] = t.y, n[0] = t.y, t = this.zcurve.getPointAfterT(j * (v + 1)), l[2] = t.x * u, m[2] = t.x * u, l[0] = t.y, m[0] = t.y, dist = glm.vec3.distance(k, l), q[0] += dist, r[0] += dist, 3 == this.direction || 4 == this.direction ? (d.shapes[v] = new Rectangle(k, l, m, n), e.shapes[v] = new Rectangle(p, q, r, s, 2)) : (d.shapes[v] = new Rectangle([2 * k[0] - 1, k[1], k[2]], [2 * l[0] - 1, l[1], l[2]], [2 * m[0] - 1, m[1], m[2]], [2 * n[0] - 1, n[1], n[2]]), e.shapes[v] = new Rectangle([2 * (p[0] + 1) - 1, p[1], p[2]], [2 * (q[0] + 1) - 1, q[1], q[2]], [2 * (r[0] + 1) - 1, r[1], r[2]], [2 * (s[0] + 1) - 1, s[1], s[2]], 2)), p[0] += dist, s[0] += dist, k[0] += h, l[0] += h, m[0] += h, n[0] += h
            }
            this.tc = e.textCoords();
            var x = this.gl;
            return x.bindBuffer(x.ARRAY_BUFFER, this.textCordbuffer), x.bufferSubData(x.ARRAY_BUFFER, 0, new Float32Array(this.tc)), this.tc = e.textCoordsBack(), x.bindBuffer(x.ARRAY_BUFFER, this.bufferback), x.bufferSubData(x.ARRAY_BUFFER, 0, new Float32Array(this.tc)), d.vertices()
        }, this.render = function(a) {
            var b = this.gl,
                c = this.prepareRender(a, 0);
            1 != this.direction && 2 != this.direction || (this.sV.d.style.opacity = 1, c /= 2);
            this.direction;
            this.mov_matrix = glm.mat4.create();
            var d = this.createCurl(c);
            b.bindBuffer(b.ARRAY_BUFFER, this.vertex_buffer), b.bufferSubData(b.ARRAY_BUFFER, 0, new Float32Array(d)), this.normals = this.calcNormals(d), b.bindBuffer(b.ARRAY_BUFFER, this.normalBuffer), b.bufferSubData(b.ARRAY_BUFFER, 0, new Float32Array(this.normals)), 3 != this.direction && 4 != this.direction || (this.mov_matrix = glm.mat4.create(), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.uniform4f(this.Mtr1, 0, 0, 0, 0), b.uniform4f(this.Mtr2, 0, 0, 0, 0), b.drawArrays(b.TRIANGLES, d.length / 3, 6), glm.mat4.fromRotation(this.mov_matrix, Math.PI, [0, 1, 0]), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.uniform4f(this.Mtr2, 1, 0, 0, 0), b.drawArrays(b.TRIANGLES, d.length / 3 + 6, 6)), this.mov_matrix = glm.mat4.create();
            var e = Math.PI,
                f = 1;
            3 == this.direction && (e = Math.PI, f = 1), 4 == this.direction && (e = 0, f = -1), 1 == this.direction && (e = Math.PI, f = 0), 2 == this.direction && (e = 0, f = 0), glm.mat4.fromRotation(this.mov_matrix, e, [0, 1, 0]), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.uniform4f(this.Mtr1, 0, 0, 0, 0), b.uniform4f(this.Mtr2, f, 0, 0, 0), b.drawArrays(b.TRIANGLES, 0, d.length / 3)
        }, this.vertexShader = function() {
            return "attribute vec3 a_normal;" + vshaderpart1 + "varying highp vec3 v_normal;void main() {vec4 position = ((Mtr1 + vec4(a_position, 1))  * Mmatrix + Mtr2) * Pmatrix;gl_Position = position;v_texcoord = a_texcoord;v_texcoord_back = a_texcoord_back;v_normal = mat3(Mmatrix) * a_normal;}"
        }, this.fragmentShader = function() {
            return "precision mediump float;varying highp vec3 v_normal;uniform vec3 u_reverseLightDirection;uniform vec4 u_color;varying vec2 v_texcoord;varying vec2 v_texcoord_back;uniform sampler2D u_texture0;uniform sampler2D u_texture1;void main() {vec3 normall = vec3(v_normal.x,v_normal.y, v_normal.z);if (gl_FrontFacing){gl_FragColor = texture2D(u_texture0, v_texcoord);}else{gl_FragColor = texture2D(u_texture1, v_texcoord_back);normall.z *= -1.0;}vec3 normal = normalize(normall);float light = dot(normal, u_reverseLightDirection) ;light = clamp(light,0.98, 1.0);gl_FragColor.rgb *= light;}"
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart(), this.normals = [], this.normals = this.calcNormals(this.shapes.vertices());
            var a = this.gl,
                b = a.getAttribLocation(this.shaderProgram, "a_normal");
            this.normalBuffer = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.normalBuffer), a.enableVertexAttribArray(b), a.vertexAttribPointer(b, 3, a.FLOAT, !1, 0, 0), a.bufferData(a.ARRAY_BUFFER, new Float32Array(this.normals), a.STATIC_DRAW), a.bindBuffer(a.ARRAY_BUFFER, this.vertex_buffer), this.reverseLightDirectionLocation = a.getUniformLocation(this.shaderProgram, "u_reverseLightDirection");
            var c = glm.vec3.create();
            glm.vec3.normalize(c, [-1, -1, 20]), a.uniform3fv(this.reverseLightDirectionLocation, c), 2 != this.direction && 4 != this.direction || (this.textures = this.textures.reverse()), this.loadTexture()
        }
    }

    function FallOver(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.initShapes = function() {
            this.shapes = new Shapes;
            for (var a = this.nshapes, b = 1 / a, c = [0, -1, 0], d = [0 + b, -1, 0], e = [0 + b, 1, 0], f = [0, 1, 0], g = 0; g < a; g++) this.shapes.shapes[g] = new Rectangle(c, d, e, f, 2), c[0] += b, d[0] += b, e[0] += b, f[0] += b
        }, this.Initialize = function(a) {
            this.initBanim(a) && (this.nshapes = 50, this.direction = this.c.s0, this.init(), this.initShapes(), this.initVertices(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.dynamic = !0, this.start())
        }, this.getPoints = function(a, b) {
            if (1 == (b = b || 1)) {
                a > .15 && (a = .15);
                var c = [
                    [0, 0],
                    [0, 1.66],
                    [.24, 1.12],
                    [.2, 2]
                ];
                if (a < .3) {
                    var d = a / .3;
                    c[1][0] *= d, c[1][1] *= d, c[2][0] *= d, c[2][1] *= d, c[3][0] *= d
                }
            } else {
                a > .15 && (a = .15);
                var c = [
                    [0, 0],
                    [0, 1.66],
                    [.24, 1.12],
                    [-.2, 2]
                ];
                if (a < .5) {
                    var d = a / .5;
                    c[1][0] *= d, c[1][1] *= d, c[2][0] *= d, c[2][1] *= d, c[3][0] *= d
                }
            }
            return c
        }, this.getTimeforCurveDist = function(a, b, c) {
            var d = 1 / c,
                e = 0,
                f = [e, -1, 0],
                g = [e + d, -1, 0],
                h = [e + d, 1, 0],
                i = [e, 1, 0];
            b += .009;
            for (var j = 0, k = 1, l = 0; l < c; l++) {
                var m = a.getPointAfterT(d * l);
                f[2] = m.x, i[2] = m.x, f[0] = m.y, i[0] = m.y;
                var n = a.getPointAfterT(d * (l + 1));
                g[2] = n.x, h[2] = n.x, g[0] = n.y, h[0] = n.y, dist = glm.vec3.distance(f, g), j += dist, k = d * (l + 1);
                for (var o = 1e-4, p = 0, q = 0; j > b && !(q++ > 100);) p = 1, j -= dist, pt = this.zcurve.getPointAfterT(k - o), g[2] = pt.x, h[2] = pt.x, g[0] = pt.y, h[0] = pt.y, dist = glm.vec3.distance(f, g), j += dist, o += 1e-4;
                if (1 == p) return k - o
            }
            return 1
        }, this.createCurl = function(a) {
            var b = this.getPoints(a, 1 == this.direction ? 1 : 2),
                c = this.getPoints(a, 1 == this.direction ? 2 : 1),
                d = this.nshapes;
            this.zcurve = new BCurve(b[0][0], b[0][1], b[1][0], b[1][1], b[2][0], b[2][1], b[3][0], b[3][1], 1);
            var e = new BCurve(c[0][0], c[0][1], c[1][0], c[1][1], c[2][0], c[2][1], c[3][0], c[3][1], 1),
                f = new Shapes,
                g = new Shapes,
                h = -1,
                i = 2 / d,
                j = this.getTimeforCurveDist(this.zcurve, 2, this.nshapes),
                k = j / d,
                l = this.getTimeforCurveDist(e, 2, this.nshapes);
            j = 1, l = 1;
            for (var m = l / d, n = [-1, h, 0], o = [1, h, 0], p = [1, h + i, 0], q = [-1, h + i, 0], r = -1, s = [-1, r, 0], t = [1, r, 0], u = [1, r, 0], v = [-1, r, 0], w = [], x = -1, y = 0, z = d; y < d; y++, z--) {
                var w = this.zcurve.getPointAfterT(k * y),
                    A = e.getPointAfterT(m * y);
                n[2] = w.x * x, o[2] = A.x * x, n[1] = h + w.y, o[1] = h + A.y, w = this.zcurve.getPointAfterT(k * (y + 1)), A = e.getPointAfterT(m * (y + 1)), p[2] = A.x * x, q[2] = w.x * x, p[1] = h + A.y, q[1] = h + w.y;
                var B = glm.vec3.distance(n, q),
                    C = glm.vec3.distance(o, p);
                u[1] += C, v[1] += B, f.shapes[y] = new Rectangle(n, o, p, q), g.shapes[y] = new Rectangle(s, t, u, v), s[1] += B, t[1] += C, n[1] += i, o[1] += i, p[1] += i, q[1] += i
            }
            this.tc = g.textCoords();
            var D = this.gl;
            return D.bindBuffer(D.ARRAY_BUFFER, this.textCordbuffer), D.bufferSubData(D.ARRAY_BUFFER, 0, new Float32Array(this.tc)), this.tc = g.textCoordsBack(), D.bindBuffer(D.ARRAY_BUFFER, this.bufferback), D.bufferSubData(D.ARRAY_BUFFER, 0, new Float32Array(this.tc)), f.vertices()
        }, this.render = function(a) {
            var b = this.gl,
                c = this.prepareRender(a, 0);
            this.sV.d.style.opacity = 1;
            var d = this.createCurl(c);
            b.bindBuffer(b.ARRAY_BUFFER, this.vertex_buffer), b.bufferSubData(b.ARRAY_BUFFER, 0, new Float32Array(d)), this.normals = this.calcNormals(d), b.bindBuffer(b.ARRAY_BUFFER, this.normalBuffer), b.bufferSubData(b.ARRAY_BUFFER, 0, new Float32Array(this.normals));
            var e = glm.mat4.create(),
                f = b.canvas.width / b.canvas.height,
                g = b.getUniformLocation(this.shaderProgram, "Yscale");
            b.uniform1f(g, f), glm.mat4.ortho(e, -1, 1, -1 / f, 1 / f, .1, 10), b.uniformMatrix4fv(this.Pmatrix, !1, e);
            var h = 0;
            c > .15 && (h = c < .25 ? (c - .15) / .1 * 10 : c < .5 ? 10 + (c - .25) / .25 * 30 : 40 + (c - .5) / .5 * 90), this.mov_matrix = glm.mat4.create();
            var i = glm.quat.create();
            glm.quat.fromEuler(i, h, 0, 0), glm.mat4.fromQuat(this.mov_matrix, i), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.uniform4f(this.Mtr1, 0, 1 / f, 0, 0), b.uniform4f(this.Mtr2, 0, -1 / f, 0, 0), b.drawArrays(b.TRIANGLES, 0, this.vertices.length / 3)
        }, this.vertexShader = function() {
            return "attribute vec3 a_normal;" + vshaderpart1 + "varying highp vec3 v_normal;uniform float Yscale;void main() {vec4 position = ((Mtr1 +  vec4(a_position.x, a_position.y/Yscale , a_position.z, 1) )  * Mmatrix + Mtr2) *  Pmatrix;gl_Position = position;v_texcoord = a_texcoord;v_texcoord_back = a_texcoord_back;v_normal = mat3(Mmatrix) * a_normal;}"
        }, this.fragmentShader = function() {
            return "precision mediump float;varying highp vec3 v_normal;uniform vec3 u_reverseLightDirection;uniform vec4 u_color;varying vec2 v_texcoord;varying vec2 v_texcoord_back;uniform sampler2D u_texture0;uniform sampler2D u_texture1;void main() {vec3 normall = vec3(v_normal.x,v_normal.y, v_normal.z);if (gl_FrontFacing){gl_FragColor = texture2D(u_texture0, v_texcoord);}else{gl_FragColor = texture2D(u_texture1, v_texcoord_back);normall.z *= -1.0;}vec3 normal = normalize(normall);float light = dot(normal, u_reverseLightDirection) ;light = clamp(light,0.99, 1.0);gl_FragColor.rgb *= light;}"
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart(), this.normals = [], this.normals = this.calcNormals(this.shapes.vertices());
            var a = this.gl,
                b = a.getAttribLocation(this.shaderProgram, "a_normal");
            this.normalBuffer = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.normalBuffer), a.enableVertexAttribArray(b), a.vertexAttribPointer(b, 3, a.FLOAT, !1, 0, 0), a.bufferData(a.ARRAY_BUFFER, new Float32Array(this.normals), a.STATIC_DRAW), a.bindBuffer(a.ARRAY_BUFFER, this.vertex_buffer), this.reverseLightDirectionLocation = a.getUniformLocation(this.shaderProgram, "u_reverseLightDirection");
            var c = glm.vec3.create();
            glm.vec3.normalize(c, [0, 1, 20]), a.uniform3fv(this.reverseLightDirectionLocation, c), this.loadTexture()
        }
    }

    function Wind(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.initShapes = function() {
            this.shapes = createRectShapes(this.nshapes, this.nshapes)
        }, this.Initialize = function(a) {
            this.initBanim(a) && (this.nshapes = 50, this.direction = this.c.s0, this.init(), this.initShapes(), this.initVertices(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.dynamic = !0, this.start())
        }, this.render = function(a) {
            var b = this.gl,
                c = this.prepareRender(a, 0);
            this.sV.d.style.opacity = 1;
            var d = glm.mat4.create(),
                e = b.canvas.width / b.canvas.height,
                f = b.getUniformLocation(this.shaderProgram, "Yscale");
            b.uniform1f(f, e), glm.mat4.ortho(d, -1, 1, -1 / e, 1 / e, .1, 10), b.uniformMatrix4fv(this.Pmatrix, !1, d), this.mov_matrix = glm.mat4.create(), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.uniform4f(this.Mtr1, 0, 0, 0, 0);
            var g = c * c,
                h = 2 * g;
            2 == this.direction && (h *= -1), b.uniform4f(this.Mtr2, h, g, 0, 0);
            var i = b.getUniformLocation(this.shaderProgram, "uTime");
            b.uniform1f(i, c), b.drawArrays(b.TRIANGLES, 0, this.vertices.length / 3)
        }, this.vertexShader = function() {
            return "precision mediump float;" + vshaderpart1 + "varying float v_ls;uniform float Yscale;uniform float uTime;" + glslNoice + "void main() {vec3 pos = a_position;float noiseFreq = 3.5 + uTime;float noiseAmp = 0.15 * uTime ;vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);pos.z += snoise(noisePos) * noiseAmp;vec4 position = ((Mtr1 +  vec4(pos.x, pos.y/Yscale , pos.z, 1) )  * Mmatrix + Mtr2) *  Pmatrix;gl_Position = position;v_texcoord = a_texcoord;v_ls = (pos.z + 1.0 - noiseAmp);}"
        }, this.fragmentShader = function() {
            return "precision mediump float;varying float v_ls;varying vec2 v_texcoord;uniform sampler2D u_texture0;void main() {if (gl_FrontFacing){gl_FragColor = texture2D(u_texture0, v_texcoord);}else{gl_FragColor = vec4(1,1,1,1);}float light = clamp(v_ls,0.8, 1.0);gl_FragColor.rgb *= light;}"
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart(), this.loadTexture()
        }
    }

    function createRectShapes(a, b) {
        for (var c = new Shapes, d = 0, e = 2 / a, f = 2 / b, g = 0; g < b; g++)
            for (var h = 0; h < a; h++) {
                var i = e * h - 1,
                    j = f * g - 1;
                c.shapes[d++] = new Rectangle([i, j, 0], [i + e, j, 0], [i + e, j + f, 0], [i, j + f, 0])
            }
        return c
    }

    function Crush(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.initShapes = function() {
            this.shapes = createRectShapes(this.nshapes, this.nshapes)
        }, this.Initialize = function(a) {
            this.initBanim(a) && (this.nshapes = 50, this.direction = this.c.s0, this.init(), this.initShapes(), this.initVertices(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.dynamic = !0, this.start())
        }, this.render = function(a) {
            var b = this.gl,
                c = this.prepareRender(a, 0);
            this.sV.d.style.opacity = 1;
            var d = glm.mat4.create(),
                e = b.canvas.width / b.canvas.height,
                f = b.getUniformLocation(this.shaderProgram, "Yscale");
            b.uniform1f(f, e), glm.mat4.ortho(d, -1, 1, -1 / e, 1 / e, .1, 10), b.uniformMatrix4fv(this.Pmatrix, !1, d), this.mov_matrix = glm.mat4.create();
            var g = glm.quat.create(),
                h = 1;
            c <= .5 && (h = c / .5);
            var i = 15 * h,
                j = 0;
            j = c <= .1 ? 2 * c / .1 : c <= .2 ? 2 - (c - .1) / .1 : 2 + 40 * (c - .2) / .8, glm.quat.fromEuler(g, i, 5 * c, j), glm.mat4.fromQuat(this.mov_matrix, g), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.uniform4f(this.Mtr1, 0, 0, 0, 0);
            var k = c * c,
                l = 2 * k;
            2 == this.direction && (l *= -1), l = 0, k = 0, c > .5 && (k = (c - .5) / .5 * -1.1), b.uniform4f(this.Mtr2, l, k, 0, 0);
            var m = b.getUniformLocation(this.shaderProgram, "uTime"),
                n = 0;
            n = c <= .4 ? c / .4 : 1 - (c - .4) / 5, b.uniform1f(m, n), b.drawArrays(b.TRIANGLES, 0, this.vertices.length / 3)
        }, this.vertexShader = function() {
            return "precision mediump float;" + vshaderpart1 + "varying float v_ls;uniform float Yscale;uniform float uTime;" + glslNoice + "void main() {vec3 pos = a_position;float noiseFreq = 2.5 + uTime;float noiseAmp = 0.35 * uTime ;float xscale = 1.0 -  0.25 *  uTime  * (abs(pos.x) + abs(pos.y) + 0.3);xscale -= 0.3 * uTime* uTime;float yscale = 1.0 -  0.15 * uTime * uTime;yscale -= 0.4 * uTime * uTime * uTime;vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);pos.z += snoise(noisePos) * 0.2 * uTime * (abs( pos.x ) * ( pos.y ) + 0.1);pos.y += snoise(noisePos) * 0.2 * uTime  ;pos.x += snoise(noisePos) * 0.2 * uTime;vec4 position = ((Mtr1 +  vec4(xscale * pos.x ,yscale * pos.y/Yscale , pos.z, 1) )  * Mmatrix + Mtr2) *  Pmatrix;gl_Position = position;v_texcoord = a_texcoord;v_texcoord_back = a_texcoord_back;v_ls = (1.0 - uTime *  pos.z * 2. );}"
        }, this.fragmentShader = function() {
            return "precision mediump float;varying float v_ls;varying vec2 v_texcoord;varying vec2 v_texcoord_back;uniform sampler2D u_texture0;void main() {if (gl_FrontFacing){gl_FragColor = texture2D(u_texture0, v_texcoord);}else{gl_FragColor = texture2D(u_texture0, v_texcoord_back);}float light = clamp(v_ls,0.8, 1.0);gl_FragColor.rgb *= light;}"
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart(), this.loadTexture()
        }
    }

    function Curtains(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.initShapes = function() {
            this.shapes = new Shapes;
            var a = this.getVerticePoints(0, !0);
            this.shapes = a
        }, this.sineWaveY = function(a, b, c) {
            return c * Math.sin(a / b)
        }, this.Initialize = function(a) {
            this.initBanim(a) && (this.nshapes = 60, this.direction = this.c.s0, this.init(), this.initShapes(), this.initVertices(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.dynamic = !0, this.start())
        }, this.getVerticePoints = function(a, b) {
            var c = new Shapes,
                d = this.nshapes,
                e = this.nshapes,
                f = 0,
                g = 1 / d,
                h = 2 / e,
                i = new BCurve(.14, 0, .12, .4, .01, .4, 0, 1, 1),
                j = new BCurve(0, 0, 0, 1, .03, .42, .04, 1, 1),
                k = [],
                l = 0,
                m = 0,
                n = 0,
                o = 0,
                p = 0,
                q = 0,
                r = 2.02;
            if (a <= .02) {
                var s = a / .02;
                r = 2 + .02 * s
            }
            if (a <= .25) {
                var s = a / .25;
                l = .35 * s, m = .2 * s, q = s, p = s, o = .11 * s
            } else if (a <= .5) {
                var s = (a - .25) / .25;
                l = .35, m = .2, o = .11 + .29 * s, q = 1 - .5 * s, p = 1 - .5 * s, i = new BCurve(.14, 0, .12 - .12 * s, .4, .01 + .1 * s, .4, 0, 1, 1)
            } else if (a <= .52) l = .35, m = .2, o = .4, q = .5, p = .5, i = new BCurve(.14, 0, 0, .4, .11, .4, 0, 1, 1);
            else if (a <= .75) {
                var s = (a - .52) / .23;
                l = .35, m = .2 - .05 * s, o = .4 - .2 * s, q = .5 + 1.5 * s, p = .5 + 2 * s, i = new BCurve(.14, 0, .12 * s, .4, .11 - .1 * s, .4, 0, 1, 1)
            } else if (a <= .76) l = .35, m = .2 - .05, o = .2, q = 2, p = 2.5;
            else {
                var s = (a - .76) / .24;
                s *= s, l = .35 + .6 * s, m = .15 - .1 * s, o = .2 + 1.3 * s, n = s, q = 2 + .5 * s, p = 2.5 + .5 * s, j = new BCurve(0, 0, 0, 1, .03, .42, .04 + .1 * s, 1, 1)
            }
            for (var t = l - m, u = n - o, v = 0; v <= e; v++) {
                var w = i.getPointAfterT((v + 1) / e),
                    x = 1 / (45 + 5 * a);
                w.x *= q;
                var y = m + t / e * v,
                    z = .07 * y;
                y = 1 - y;
                for (var A = o + u / e * v, B = 0; B <= d; B++) {
                    var C = -1 + w.x + g * B,
                        D = j.getPointAfterT((B + 1) / e);
                    D.x *= p, h = (r - D.x) / e;
                    var E = -1 + D.x + h * v,
                        F = this.sineWaveY(C - w.x, x, z);
                    k[f++] = [(C + 1) * y - 1 - A, E, F]
                }
            }
            var G = k;
            f = 0;
            for (var H = 0, I = d + 1, v = 0; v < e; v++) {
                for (var B = 0; B < d; B++) c.shapes[f++] = new Rectangle(G[H], G[H + 1], G[I + 1], G[I], 2), H++, I++;
                H++, I++
            }
            return b ? c : c.vertices()
        }, this.render = function(a) {
            var b = this.gl,
                c = this.prepareRender(a, 0);
            this.sV.d.style.opacity = 1, this.mov_matrix = glm.mat4.create(), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix);
            var d = this.getVerticePoints(c);
            b.uniform4f(this.Mtr1, 0, 0, 0, 0), b.bindBuffer(b.ARRAY_BUFFER, this.vertex_buffer), b.bufferSubData(b.ARRAY_BUFFER, 0, new Float32Array(d)), b.uniform4f(this.Mtr2, 0, 0, 0, 0), b.drawArrays(b.TRIANGLES, 0, d.length / 3), b.uniform4f(this.Mtr2, 0, 0, 0, 0), glm.mat4.fromRotation(this.mov_matrix, Math.PI, [0, 1, 0]), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.drawArrays(b.TRIANGLES, 0, d.length / 3)
        }, this.vertexShader = this.vertexShader || function() {
            return vshaderpart1 + "varying float v_light;void main() {vec4 position = ((Mtr1 + vec4(a_position, 1))  * Mmatrix + Mtr2) * Pmatrix;gl_Position = position;v_texcoord = a_texcoord;v_texcoord_back = a_texcoord_back;v_light = 1.0 + position.z * 100.0;}"
        }, this.fragmentShader = this.fragmentShader || function() {
            return "precision mediump float;varying vec2 v_texcoord;varying vec2 v_texcoord_back;varying float v_light;uniform sampler2D u_texture0;uniform sampler2D u_texture1;void main() {if (gl_FrontFacing){gl_FragColor = texture2D(u_texture0, v_texcoord);}else{gl_FragColor = texture2D(u_texture0 , v_texcoord_back);}float light = clamp(v_light,0.9, 1.0);gl_FragColor.rgb *= light;}"
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart(), this.loadTexture()
        }
    }

    function Ripple(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.initShapes = function() {
            this.shapes = createRectShapes(this.nshapes, this.nshapes)
        }, this.Initialize = function(a) {
            this.initBanim(a) && (this.nshapes = 40, this.direction = this.c.s0, this.init(), this.initShapes(), this.initVertices(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.dynamic = !0, this.start())
        }, this.render = function(a) {
            var b = this.gl,
                c = this.prepareRender(a, 1),
                d = glm.mat4.create(),
                e = b.canvas.width / b.canvas.height,
                f = b.getUniformLocation(this.shaderProgram, "Yscale");
            b.uniform1f(f, e), glm.mat4.ortho(d, -1, 1, -1 / e, 1 / e, .1, 10), b.uniformMatrix4fv(this.Pmatrix, !1, d), this.mov_matrix = glm.mat4.create(), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.uniform4f(this.Mtr1, 0, 0, 0, 0), b.uniform4f(this.Mtr2, 0, 0, 0, 0);
            var g = b.getUniformLocation(this.shaderProgram, "uTime");
            b.uniform1f(g, c), b.drawArrays(b.TRIANGLES, 0, this.vertices.length / 3)
        }, this.vertexShader = function() {
            return "precision mediump float;" + vshaderpart1 + "uniform float Yscale;uniform float uTime;uniform float uDirx;uniform float uDiry;varying float v_ls;varying float v_time;varying highp vec3 v_normal;varying float v_yscale;varying float loc;void main() {vec4 position =  vec4(a_position.x, (a_position.y / Yscale) , a_position.z, 1);float diaglength = 2.828; if(uDirx == 0.0){diaglength = 1.414;}position.x += uDirx;position.y += uDiry;vec3 transformed = vec3(position);float dx = position.x;float dy = position.y;float freq = sqrt(dx * dx + dy * dy);float amp = 0.03;if(uTime <= 0.5){amp *= uTime/0.5;}else{amp = amp - amp * (( uTime -0.5)/0.5);}float angle = -uTime * 10.0 + freq * 20.0;if (abs(freq)  < uTime * diaglength)transformed.z += sin(angle) * amp * ((1.0 - abs(transformed.x)) + uTime*0.5) ;transformed.x -= uDirx;transformed.y -= uDiry;gl_Position = vec4(transformed.x  ,transformed.y ,transformed.z, 1)*Pmatrix;v_texcoord = a_texcoord;v_time = uTime;vec3 objectNormal = normalize(vec3(0.0, -amp * freq * cos(angle), 1.0));v_normal =  objectNormal;v_yscale = Yscale;loc = freq * diaglength;}"
        }, this.fragmentShader = function() {
            return "precision mediump float;varying float v_time;varying float v_yscale;varying vec2 v_texcoord;uniform sampler2D u_texture0;uniform sampler2D u_texture1;varying highp vec3 v_normal;varying float loc;void main() {if (gl_FrontFacing){float fm = v_time * v_time*v_time;if (v_time > loc) {fm = 1.2 * v_time; fm *= fm * fm;}fm = clamp(fm, 0.0, 1.0);gl_FragColor = mix(texture2D(u_texture0, v_texcoord), texture2D(u_texture1, v_texcoord), fm);}vec3 u_reverseLightDirection = vec3(0.0,9.0 * v_time,1.0);vec3 normal = v_normal;float light1 = dot(normal, u_reverseLightDirection) ;light1 = clamp(light1,0.1 , 1.05);gl_FragColor.rgb *= light1;}"
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart();
            var a = this.gl.getUniformLocation(this.shaderProgram, "uDirx"),
                b = this.gl.getUniformLocation(this.shaderProgram, "uDiry"),
                c = 0,
                d = 0;
            switch (this.direction) {
                case 2:
                    c = 1, d = 1;
                    break;
                case 3:
                    c = -1, d = 1;
                    break;
                case 4:
                    c = -1, d = -1;
                    break;
                case 5:
                    c = 1, d = -1
            }
            this.gl.uniform1f(a, c), this.gl.uniform1f(b, d), this.loadTexture()
        }
    }

    function Drape(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.initShapes = function() {
            var a = ["[-0.003,1.001,-0.104,0.989,-0.197,1.083,-0.283,1.28,-0.369,1.477,-0.4,1.624,-0.424,1.884,-0.448,2.144,-0.443,2.487,-0.331,2.84,-0.22,3.193,-0.013,3.276,0.111,3.205,0.234,3.135,0.376,2.804,0.41,2.415,0.444,2.027,0.369,1.373,0.369,1.373]", "[-0.001,1.001,-0.043,0.724,-0.091,0.675,-0.138,0.653,-0.186,0.631,-0.259,0.674,-0.287,0.867,-0.315,1.061,-0.342,1.491,-0.306,1.814,-0.271,2.137,-0.189,2.395,-0.123,2.312,-0.057,2.228,0.008,1.925,0.017,1.517,0.017,1.238,0.014,1.239,0.003,1.079]", "[-0.003,0.999,-0.002,0.868,-0.002,0.742,-0.009,0.611,-0.017,0.479,-0.024,0.293,-0.046,0.208,-0.068,0.123,-0.105,0.102,-0.143,0.099,-0.181,0.097,-0.247,0.12,-0.273,0.195,-0.3,0.27,-0.288,0.358,-0.303,0.548,-0.317,0.738,-0.321,1.016,-0.325,1.293]", "[-0.006,1.001,-0.005,0.806,-0.012,0.611,-0.013,0.422,-0.014,0.233,0.004,-0.008,-0.011,-0.134,-0.026,-0.26,-0.059,-0.314,-0.105,-0.335,-0.15,-0.356,-0.25,-0.37,-0.284,-0.259,-0.317,-0.149,-0.291,0.046,-0.306,0.329,-0.32,0.612,-0.324,1.026,-0.328,1.439]", "[-0.011,1,-0.01,0.776,-0.017,0.565,-0.017,0.331,-0.018,0.098,0.01,-0.233,-0.012,-0.399,-0.034,-0.566,-0.099,-0.654,-0.147,-0.667,-0.195,-0.679,-0.273,-0.622,-0.3,-0.474,-0.327,-0.325,-0.296,-0.104,-0.31,0.224,-0.325,0.551,-0.329,1.029,-0.333,1.507]", "[-0.013, 1.001, 0.002, 0.583, 0.017, 0.165, 0.021, -0.129, 0.024, -0.423, 0.072, -0.622, 0.009, -0.762, -0.054, -0.902, -0.358, -0.971, -0.358, -0.971, -0.358, -0.971]", "[-0, 0.998, -0.004, 0.669, -0.004, 0.438, 0.029, 0.104, 0.063, -0.23, 0.058, -0.253, 0.062, -0.44, 0.067, -0.626, 0.136, -0.823, 0.059, -1.015]", "[-0, 0.998, -0.004, 0.669, -0.004, 0.438, 0.029, 0.104, 0.063, -0.23, 0.04, -0.198, 0.062, -0.44, 0.085, -0.681, 0.231, -1.012, 0.029, -1.185]", "[0.0, 1, -0.01, 0.799, -0.008, 0.567, -0.005, 0.387, -0.007, 0.081, -0.002, -0.138, -0.001, -0.401, -0.001, -0.664, -0.001, -1.058, 0.0, -1.19]", "[0.0, 1, -0.01, 0.799, -0.008, 0.567, -0.005, 0.387, -0.007, 0.081, -0.002, -0.138, -0.001, -0.401, -0.001, -0.664, -0.001, -1.058, 0.0, -1.19]"];
            this.cf = new CurveFrames(a, 2, this.nshapes), this.shapes = this.getVerticePoints(1, !0)
        }, this.getVerticePoints = function(a, b) {
            var c = this.cf.getPointsAfterT(a);
            [][0] = [];
            for (var d = new Shapes, e = 0, f = 10, g = 2 / f, h = c.length - 1; h > 0; h--)
                for (var i = c[h].y, j = -1 * c[h].x, k = c[h - 1].y, l = -1 * c[h - 1].x, m = -1, n = 0; n < f; n++) {
                    var o = [m, i, j],
                        p = [m + g, i, j],
                        q = [m + g, k, l],
                        r = [m, k, l];
                    m += g, d.shapes[e++] = new Rectangle(o, p, q, r, 2)
                }
            return b ? d : d.vertices()
        }, this.Initialize = function(a) {
            this.initBanim(a) && (this.nshapes = 40, this.direction = this.c.s0, this.init(), this.initShapes(), this.initVertices(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.dynamic = !0, this.start())
        }, this.render = function(a) {
            var b = this.gl,
                c = this.prepareRender(a, 0),
                d = glm.mat4.create(),
                e = b.canvas.width / b.canvas.height,
                f = b.getUniformLocation(this.shaderProgram, "Yscale");
            b.uniform1f(f, e), glm.mat4.ortho(d, -1, 1, -1 / e, 1 / e, .1, 100), b.uniformMatrix4fv(this.Pmatrix, !1, d), this.mov_matrix = glm.mat4.create(), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix);
            var g = this.getVerticePoints(c);
            b.uniform4f(this.Mtr1, 0, 0, 0, 0), b.uniform4f(this.Mtr2, 0, 0, 0, 0), b.bindBuffer(b.ARRAY_BUFFER, this.vertex_buffer), b.bufferSubData(b.ARRAY_BUFFER, 0, new Float32Array(g)), b.drawArrays(b.TRIANGLES, 0, g.length / 3)
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart(), this.textures[1].FlipY = !1;
            var a = this.gl;
            a.bindBuffer(a.ARRAY_BUFFER, this.vertex_buffer), this.reverseLightDirectionLocation = a.getUniformLocation(this.shaderProgram, "u_reverseLightDirection");
            var b = glm.vec3.create();
            glm.vec3.normalize(b, [0, .5, 5]), a.uniform3fv(this.reverseLightDirectionLocation, b), this.loadTexture()
        }, this.vertexShader = function() {
            return "attribute vec3 a_normal;" + vshaderpart1 + "varying  vec3 v_normal;uniform float Yscale;void main() {vec4 position = ((Mtr1 +  vec4(a_position.x, a_position.y/Yscale , a_position.z, 1) )  * Mmatrix + Mtr2) *  Pmatrix;gl_Position = position;v_texcoord = a_texcoord;v_texcoord_back = a_texcoord_back;v_normal = vec3(gl_Position.xyz);}"
        }, this.fragmentShader = function() {
            return "precision mediump float;varying  vec3 v_normal;uniform vec3 u_reverseLightDirection;uniform vec4 u_color;varying vec2 v_texcoord;varying vec2 v_texcoord_back;uniform sampler2D u_texture0;uniform sampler2D u_texture1;void main() {float light = 1.0;if (gl_FrontFacing){gl_FragColor = texture2D(u_texture1, v_texcoord);}else{gl_FragColor = texture2D(u_texture1, v_texcoord);light =  2.0 / (v_normal.y + 1.0); light =  light - 1.0;light = clamp(light,0.8, 1.0);}gl_FragColor.rgb *= light;gl_FragColor = mix(gl_FragColor, vec4(1.0, 1.0, 1.0,1.0), 0.1);}"
        }
    }

    function Prestige(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.initShapes = function() {
            this.cf = new CurveFrames([], 2, this.nshapes), this.cf.keyframePts = [];
            for (var a = JSON.parse("[[[-1.001,-0.999],[-0.951,-0.999],[-0.901,-0.999],[-0.851,-1],[-0.801,-1],[-0.751,-1],[-0.701,-1],[-0.651,-1],[-0.601,-1],[-0.551,-1],[-0.501,-1],[-0.451,-1.001],[-0.401,-1.001],[-0.351,-1.001],[-0.301,-1.001],[-0.251,-1.001],[-0.201,-1.001],[-0.151,-1.001],[-0.101,-1.001],[-0.051,-1.001],[-0.001,-1.001],[0.049,-1.001],[0.099,-1.002],[0.149,-1.002],[0.199,-1.002],[0.249,-1.002],[0.299,-1.002],[0.349,-1.002],[0.399,-1.002],[0.449,-1.002],[0.499,-1.002],[0.549,-1.002],[0.599,-1.003],[0.649,-1.003],[0.699,-1.003],[0.749,-1.003],[0.799,-1.003],[0.849,-1.003],[0.899,-1.003],[0.949,-1.004],[0.999,-1.004],[1.0,-1.004]],[[-0.854,-0.984],[-0.804,-0.983],[-0.754,-0.979],[-0.704,-0.975],[-0.654,-0.975],[-0.604,-0.974],[-0.555,-0.969],[-0.506,-0.957],[-0.46,-0.937],[-0.419,-0.908],[-0.384,-0.873],[-0.351,-0.835],[-0.32,-0.796],[-0.29,-0.756],[-0.26,-0.716],[-0.228,-0.677],[-0.196,-0.639],[-0.158,-0.606],[-0.113,-0.585],[-0.063,-0.586],[-0.019,-0.61],[0.018,-0.643],[0.047,-0.684],[0.066,-0.73],[0.082,-0.778],[0.099,-0.825],[0.12,-0.87],[0.151,-0.909],[0.195,-0.933],[0.244,-0.944],[0.294,-0.949],[0.344,-0.954],[0.393,-0.96],[0.443,-0.961],[0.493,-0.964],[0.543,-0.97],[0.592,-0.977],[0.642,-0.984],[0.692,-0.989],[0.742,-0.991],[0.79,-0.98],[0.829,-0.947]],[[-0.74,-0.167],[-0.704,-0.132],[-0.659,-0.111],[-0.609,-0.104],[-0.56,-0.097],[-0.512,-0.084],[-0.471,-0.055],[-0.439,-0.016],[-0.413,0.026],[-0.388,0.07],[-0.36,0.112],[-0.332,0.153],[-0.304,0.194],[-0.272,0.232],[-0.234,0.266],[-0.194,0.296],[-0.151,0.321],[-0.108,0.347],[-0.058,0.345],[-0.012,0.326],[0.033,0.303],[0.076,0.279],[0.119,0.253],[0.161,0.225],[0.198,0.192],[0.221,0.148],[0.231,0.099],[0.251,0.053],[0.276,0.009],[0.303,-0.032],[0.335,-0.071],[0.369,-0.108],[0.41,-0.136],[0.46,-0.136],[0.507,-0.117],[0.553,-0.099],[0.603,-0.093],[0.653,-0.095],[0.702,-0.106],[0.745,-0.13],[0.773,-0.172],[0.794,-0.217]],[[-0.513,1.018],[-0.463,1.014],[-0.42,1.039],[-0.387,1.077],[-0.36,1.119],[-0.334,1.161],[-0.308,1.204],[-0.282,1.247],[-0.258,1.291],[-0.236,1.336],[-0.215,1.381],[-0.196,1.427],[-0.178,1.474],[-0.162,1.521],[-0.147,1.569],[-0.134,1.617],[-0.122,1.666],[-0.111,1.715],[-0.1,1.764],[-0.09,1.813],[-0.079,1.861],[-0.069,1.91],[-0.058,1.959],[-0.045,2.007],[-0.026,2.054],[0.018,2.031],[0.033,1.983],[0.042,1.934],[0.05,1.884],[0.058,1.835],[0.064,1.785],[0.071,1.736],[0.077,1.686],[0.084,1.636],[0.09,1.587],[0.097,1.537],[0.104,1.488],[0.111,1.438],[0.119,1.389],[0.128,1.34],[0.138,1.291],[0.15,1.242]]]"), b = a.length - 1; b > -1; b--)
                for (this.cf.keyframePts[b] = [], j = a[b].length - 1; j > -1; j--) this.cf.keyframePts[b][j] = {
                    x: a[b][j][0],
                    y: a[b][j][1]
                };
            this.shapes = this.createCurl(0)
        }, this.sineWaveY = function(a, b, c) {
            return c * Math.sin(a / b)
        }, this.createCurl = function(a) {
            var b = this.cf.getPointsAfterT(a);
            [][0] = [];
            var c = new Shapes,
                d = 0,
                e = Math.floor(this.nshapes / 2),
                f = (2 + a) / e;
            if (h = 0, a > 0)
                for (var g = 0; g < b.length; g++) b[g].x *= 1 + .35 * a, b[g].y *= 1 + .15 * a;
            for (var i = 0; i <= e; i++) {
                for (var j = 0; j < b.length - 1; j++) {
                    var k = this.sineWaveY(b[j].x, .1, .1 * a),
                        l = this.sineWaveY(b[j + 1].x, .1, .1 * a),
                        m = [b[j].x, b[j].y, k],
                        n = [b[j + 1].x, b[j + 1].y, l],
                        o = [b[j + 1].x, b[j + 1].y + h, l],
                        p = [b[j].x, b[j].y + h, k];
                    c.shapes[d++] = new Rectangle(m, n, o, p, 2)
                }
                h += f
            }
            return c
        }, this.Initialize = function(a) {
            this.initBanim(a) && (this.nshapes = 40, this.direction = this.c.s0, this.init(), this.initShapes(), this.initVertices(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.dynamic = !0, this.start())
        }, this.render = function(a) {
            var b = this.gl,
                c = this.prepareRender(a, 0);
            this.sV.d.style.opacity = 1;
            var d = glm.mat4.create(),
                e = b.canvas.width / b.canvas.height,
                f = b.getUniformLocation(this.shaderProgram, "Yscale");
            b.uniform1f(f, e), glm.mat4.ortho(d, -1, 1, -1 / e, 1 / e, .1, 10), b.uniformMatrix4fv(this.Pmatrix, !1, d);
            var g = this.createCurl(c);
            b.bindBuffer(b.ARRAY_BUFFER, this.vertex_buffer);
            var h = g.vertices();
            b.bufferSubData(b.ARRAY_BUFFER, 0, new Float32Array(h)), this.mov_matrix = glm.mat4.create(), glm.mat4.fromRotation(this.mov_matrix, .15 * -c, [1, 0, 0]), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.uniform4f(this.Mtr1, 0, 0, 0, 0), b.uniform4f(this.Mtr2, 0, 0, 0, 0);
            var i = b.getUniformLocation(this.shaderProgram, "uTime");
            b.uniform1f(i, c), b.drawArrays(b.TRIANGLES, 0, this.vertices.length / 3)
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart();
            var a = new TextureSource;
            a.tcv = new Cv(500, 500);
            var b = a.tcv.cvt,
                c = a.tcv.cv,
                d = b.createLinearGradient(0, 0, c.height, 0);
            d.addColorStop(.25, "rgba(197, 197,197, 0.6)"), d.addColorStop(.5, "rgba(197, 197, 197, 0.05)"), d.addColorStop(.75, "rgba(197, 197, 197, 0.45)"), d.addColorStop(1, "rgba(197, 197, 197, 0.05)"), b.fillStyle = d, b.fillRect(0, 0, c.width, c.height), this.textures[2] = a, this.loadTexture()
        }, this.vertexShader = function() {
            return vshaderpart1 + "uniform float uTime;varying float vProgress;uniform float Yscale;void main() {vec4 position = ((Mtr1 + vec4(a_position.x, a_position.y / Yscale, a_position.z, 1))  * Mmatrix + Mtr2) *  Pmatrix;gl_Position = position;v_texcoord = a_texcoord;v_texcoord_back = a_texcoord_back;vProgress = uTime/0.3;vProgress = clamp(vProgress, 0.0, 1.0);}"
        }, this.fragmentShader = function() {
            return "precision mediump float;varying vec2 v_texcoord;varying vec2 v_texcoord_back;varying float vProgress;uniform sampler2D u_texture0;uniform sampler2D u_texture1;uniform sampler2D u_texture2;void main() {if (gl_FrontFacing){vec4 col2 = texture2D(u_texture2, v_texcoord);gl_FragColor = mix(texture2D(u_texture0, v_texcoord),col2, col2.a*vProgress);gl_FragColor.a = 1.0;}else{gl_FragColor = texture2D(u_texture1 , v_texcoord_back);}}"
        }
    }

    function ThreeDZoom(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.Initialize = function(a) {
            this.initBanim(a) && (this.direction = this.c.s0, this.init(), this.initShapes(), this.initVertices(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.dynamic = !0, this.mov_matrix = glm.mat4.create(), this.bgAlpha = 3 == this.direction ? 0 : 1, this.start())
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart(), this.alphaUniform = this.gl.getUniformLocation(this.shaderProgram, "uAlpha"), this.mRmatrix = this.gl.getUniformLocation(this.shaderProgram, "Rmatrix"), 2 != this.direction && (this.textures = this.textures.reverse()), this.loadTexture()
        }, this.vertexShader = function() {
            return "precision mediump float;" + vshaderpart1 + "uniform mat4 Rmatrix;uniform float Yscale;void main() {vec4 position = ((Mtr1 + vec4(a_position.x, a_position.y / Yscale, a_position.z, 1))  * Mmatrix + Mtr2) * Rmatrix * Pmatrix;gl_Position = position;v_texcoord = a_texcoord;v_texcoord_back = a_texcoord_back;}"
        }, this.fragmentShader = function() {
            return "precision mediump float;varying vec2 v_texcoord;varying vec2 v_texcoord_back;uniform sampler2D u_texture0;uniform sampler2D u_texture1;uniform float uAlpha;void main() {if (gl_FrontFacing){vec4 color = texture2D(u_texture0, v_texcoord);gl_FragColor = vec4(color.rgb, uAlpha);}else{vec4 color = texture2D(u_texture1, v_texcoord_back);gl_FragColor = vec4(color.rgb, uAlpha);}}"
        }, this.initShapes = function() {
            this.shapes = new Shapes, this.shapes.shapes[0] = new Rectangle([-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0])
        }, this.render = function(a) {
            var b = this.gl,
                c = this.prepareRender(a, this.bgAlpha),
                d = glm.mat4.create(),
                e = b.canvas.width / b.canvas.height,
                f = b.getUniformLocation(this.shaderProgram, "Yscale");
            if (b.uniform1f(f, e), glm.mat4.ortho(d, -1, 1, -1 / e, 1 / e, .1, 100), b.uniformMatrix4fv(this.Pmatrix, !1, d), this.mov_matrix = glm.mat4.create(), 3 == this.direction) {
                var g = glm.mat4.create();
                glm.mat4.fromRotation(g, 2 * Math.PI * -c, [0, 0, 1]), b.uniformMatrix4fv(this.mRmatrix, !1, g), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix);
                var h = 1 - c;
                h *= h, h = 1 - h, b.uniform4f(this.Mtr2, 0, 0, 4 * h - 4, 0), b.uniform4f(this.Mtr1, 0, 0, 0, 0), b.uniform1f(this.alphaUniform, h), this.enableBlending(), b.drawArrays(b.TRIANGLES, 0, 6), this.disableBlending()
            } else 2 == this.direction && (c = 1 - c), this.mov_matrix = glm.mat4.create(), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.uniform4f(this.Mtr2, 0, 0, -1 + c, 0), b.uniform4f(this.Mtr1, 0, 0, 0, 0), b.uniformMatrix4fv(this.mRmatrix, !1, this.mov_matrix), b.uniform1f(this.alphaUniform, 1), b.drawArrays(b.TRIANGLES, 0, 6), glm.mat4.fromRotation(this.mov_matrix, Math.PI, [0, 1, 0]), b.uniformMatrix4fv(this.mRmatrix, !1, this.mov_matrix), b.uniform4f(this.Mtr2, 0, 0, -1 * c, 0), b.uniform1f(this.alphaUniform, 1 - c * c), b.uniform4f(this.Mtr1, 0, 0, 0, 0), this.enableBlending(), b.drawArrays(b.TRIANGLES, 0, 6), this.disableBlending()
        }
    }

    function FlyThrough(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.Initialize = function(a) {
            this.initBanim(a) && (this.direction = this.c.s0, this.init(), this.initShapes(), this.initVertices(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.dynamic = !0, this.mov_matrix = glm.mat4.create(), this.start())
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart(), this.alphaUniform = this.gl.getUniformLocation(this.shaderProgram, "uAlpha"), this.mRmatrix = this.gl.getUniformLocation(this.shaderProgram, "Rmatrix");
            var a = [];
            this.alphaUniform = this.gl.getUniformLocation(this.shaderProgram, "uAlpha"), this.textSetUniform = this.gl.getUniformLocation(this.shaderProgram, "u_texture_set"), a[0] = new TextureSource(this.sV.dp), a[1] = new TextureSource(this.sV.d), a[0].nbg = 1, a[1].nbg = 1, this.textures[0].nbg = -1, this.textures[1].nbg = -1, this.textures.reverse(), this.textures[2] = a[1], this.textures[3] = a[0], this.loadTexture()
        }, this.vertexShader = function() {
            return "precision mediump float;" + vshaderpart1 + "uniform mat4 Rmatrix;uniform float Yscale;void main() {vec4 position = ((Mtr1 + vec4(a_position.x, a_position.y / Yscale, a_position.z, 1))  * Mmatrix + Mtr2) * Rmatrix * Pmatrix;gl_Position = position;v_texcoord = a_texcoord;v_texcoord_back = a_texcoord_back;}"
        }, this.fragmentShader = function() {
            return "precision mediump float;varying vec2 v_texcoord;varying vec2 v_texcoord_back;uniform sampler2D u_texture0;uniform sampler2D u_texture1;uniform sampler2D u_texture2;uniform sampler2D u_texture3;uniform float u_texture_set;uniform float uAlpha;void main() {if (u_texture_set == 1.0) {vec4 c1 = vec4(0.0, 0.0, 0.0, 0.0);if (gl_FrontFacing){vec4 color = texture2D(u_texture0, v_texcoord);gl_FragColor = mix(c1,color, uAlpha);}else{vec4 color = texture2D(u_texture1, v_texcoord_back);gl_FragColor = mix(c1,color, uAlpha);}}else {vec4 color = mix(texture2D(u_texture2, v_texcoord),texture2D(u_texture3, v_texcoord),uAlpha);gl_FragColor = color;}}"
        }, this.initShapes = function() {
            this.shapes = new Shapes, this.shapes.shapes[0] = new Rectangle([-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0])
        }, this.render = function(a) {
            var b = this.gl,
                c = this.prepareRender(a, 1),
                d = glm.mat4.create();
            b.uniform4f(this.Mtr1, 0, 0, 0, 0), b.uniform4f(this.Mtr2, 0, 0, 0, 0), b.uniformMatrix4fv(this.Mmatrix, !1, d), b.uniform1f(this.alphaUniform, 1 - c), b.uniform1f(this.textSetUniform, 2), b.uniformMatrix4fv(this.Pmatrix, !1, d);
            var e = b.getUniformLocation(this.shaderProgram, "Yscale");
            b.uniform1f(e, 1), this.mRmatrix = this.gl.getUniformLocation(this.shaderProgram, "Rmatrix"), b.uniformMatrix4fv(this.mRmatrix, !1, d), this.enableBlending(), b.drawArrays(b.TRIANGLES, 0, 6), b.uniform1f(this.textSetUniform, 1);
            var f = glm.mat4.create(),
                g = b.canvas.width / b.canvas.height,
                e = b.getUniformLocation(this.shaderProgram, "Yscale");
            b.uniform1f(e, g), glm.mat4.ortho(f, -1, 1, -1 / g, 1 / g, .1, 100), b.uniformMatrix4fv(this.Pmatrix, !1, f), this.mov_matrix = glm.mat4.create();
            var h = 0,
                i = 0;
            1 == this.direction ? (h = -1 + c, i = 0 - c) : 3 == this.direction ? (h = c <= .7 ? c / .7 * 1.05 - 1 : c <= .85 ? .05 - (c - .7) / .15 * .1 : (c - .85) / .15 * .05 - .05, i = 0 - c / .5) : 4 == this.direction ? (h = 1 - c, i = c, h = c <= .7 ? 1 - c / .7 * 1.05 : c <= .85 ? (c - .7) / .15 * .1 - .05 : .05 - (c - .85) / .15 * .05, i = c / .5) : (h = 1 - c, i = c);
            var j = c / .8;
            j = j < 0 ? 0 : j > 1 ? 1 : j, this.mov_matrix = glm.mat4.create(), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.uniform4f(this.Mtr2, 0, 0, h, 0), b.uniform4f(this.Mtr1, 0, 0, 0, 0), b.uniformMatrix4fv(this.mRmatrix, !1, this.mov_matrix), b.uniform1f(this.alphaUniform, j), b.drawArrays(b.TRIANGLES, 0, 6), glm.mat4.fromRotation(this.mov_matrix, Math.PI, [0, 1, 0]), b.uniformMatrix4fv(this.mRmatrix, !1, this.mov_matrix), b.uniform1f(this.alphaUniform, 1 - j), b.uniform4f(this.Mtr2, 0, 0, i, 0), b.uniform4f(this.Mtr1, 0, 0, 0, 0), b.drawArrays(b.TRIANGLES, 0, 6), this.disableBlending()
        }
    }

    function Pan(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.Initialize = function(a) {
            this.initBanim(a) && (this.direction = this.c.s0, this.init(), this.initShapes(), this.initVertices(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.dynamic = !0, this.mov_matrix = glm.mat4.create(), this.start())
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart(), this.alphaUniform = this.gl.getUniformLocation(this.shaderProgram, "uAlpha"), this.textSetUniform = this.gl.getUniformLocation(this.shaderProgram, "u_texture_set"), this.mRmatrix = this.gl.getUniformLocation(this.shaderProgram, "Rmatrix"), this.textures[0].nbg = -1, this.textures[1].nbg = -1, this.textures[2] = new TextureSource(this.sV.dp), this.textures[3] = new TextureSource(this.sV.d), this.textures[2].nbg = 1, this.textures[3].nbg = 1, this.loadTexture()
        }, this.vertexShader = function() {
            return "precision mediump float;" + vshaderpart1 + "uniform mat4 Rmatrix;uniform float Yscale;void main() {vec4 position = ((Mtr1 + vec4(a_position.x, a_position.y / Yscale, a_position.z, 1))  * Mmatrix + Mtr2) * Rmatrix * Pmatrix;gl_Position = position;v_texcoord = a_texcoord;v_texcoord_back = a_texcoord_back;}"
        }, this.fragmentShader = function() {
            return "precision mediump float;varying vec2 v_texcoord;varying vec2 v_texcoord_back;uniform sampler2D u_texture0;uniform sampler2D u_texture1;uniform sampler2D u_texture2;uniform sampler2D u_texture3;uniform float u_texture_set;uniform float uAlpha;void main() {vec4 color = vec4(0.0,0.0,0.0,0.0);if(u_texture_set == 1.0){color = texture2D(u_texture0, v_texcoord);}if(u_texture_set == 2.0){color = texture2D(u_texture1, v_texcoord);}if(u_texture_set == 3.0){vec4 c1 = texture2D(u_texture2, v_texcoord);vec4 c2 = texture2D(u_texture3, v_texcoord);color = mix(c1, c2,uAlpha);}gl_FragColor = color;}"
        }, this.initShapes = function() {
            this.shapes = new Shapes, this.shapes.shapes[0] = new Rectangle([-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0])
        }, this.render = function(a) {
            var b = this.gl,
                c = this.prepareRender(a, 1),
                d = glm.mat4.create(),
                e = b.canvas.width / b.canvas.height;
            e = 1;
            var f = b.getUniformLocation(this.shaderProgram, "Yscale");
            b.uniform1f(f, e), glm.mat4.ortho(d, -1, 1, -1 / e, 1 / e, .1, 100), b.uniformMatrix4fv(this.Pmatrix, !1, d), this.mov_matrix = glm.mat4.create(), b.uniformMatrix4fv(this.mRmatrix, !1, this.mov_matrix), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.uniform4f(this.Mtr2, 0, 0, 0, 0), b.uniform4f(this.Mtr1, 0, 0, 0, 0), b.uniform1f(this.alphaUniform, Math.min(Math.max(c / .8, 0), 1)), b.uniform1f(this.textSetUniform, 3), b.drawArrays(b.TRIANGLES, 0, 6);
            var g = c * c * 2,
                h = -g,
                i = 0,
                j = 2 - g,
                k = 0;
            2 == this.direction ? (i = g, h = 0, k = -2 + g, j = 0) : 3 == this.direction ? (h = g, i = 0, k = 0, j = -2 + g) : 4 == this.direction && (h = 0, i = -g, k = 2 - g, j = 0), this.enableBlending(), b.uniform4f(this.Mtr2, h, i, 0, 0), b.uniform4f(this.Mtr1, 0, 0, 0, 0), b.uniform1f(this.textSetUniform, 1), b.drawArrays(b.TRIANGLES, 0, 6), b.uniform4f(this.Mtr2, j, k, 0, 0), b.uniform4f(this.Mtr1, 0, 0, 0, 0), b.uniform1f(this.textSetUniform, 2), b.drawArrays(b.TRIANGLES, 0, 6), this.disableBlending()
        }
    }

    function getId(a) {
        for (var b = "", c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", d = 0; d < a; d++) b += c.charAt(Math.floor(Math.random() * c.length));
        return b
    }

    function createRenderArea(a) {
        function b() {
            var d = a.offsetWidth,
                e = a.offsetHeight;
            d !== i && (i = d), e !== h && (h = e), c(i, h), Cbfun(b)
        }

        function c(a, b) {
            var c = a / gv.w,
                e = b / gv.h,
                f = Math.min(c, e),
                g = (a - gv.w * f) / 2,
                h = (b - gv.h * f) / 2;
            d.style.marginLeft = g + "px", d.style.marginTop = h + "px", d.style.width = f * gv.w + "px", d.style.height = f * gv.h + "px", gv.r.o.style.transform = "scale(" + f + ")"
        }
        if (typeof a !== _undefined) {
            gv.r.o = document.createElement("div");
            var d = document.createElement("div");
            d.style.position = "absolute", a.appendChild(d), d.appendChild(gv.r.o), gv.r.o.setAttribute("style", "");
            var e = "resizer_" + getId(5);
            gv.r.o.id = e;
            var f = '#resizer%%{position:absolute;top:0;left:0;transform-origin:0 0;overflow:hidden;-moz-font-feature-settings:"liga" 0;-ms-font-feature-settings: "liga" 0;-o-font-feature-settings: "liga" 0;font-feature-settings: "liga" 0;text-rendering: optimizeSpeed;-webkit-font-variant-ligatures: no-common-ligatures;font-variant-ligatures:no-common-ligatures;user-select:none;-khtml-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);}#resizer%% canvas,#resizer%% div,#resizer%% iframe{position:absolute;}#resizer%% pre{position:absolute;margin:0px;padding:0;border:0;background-color:transparent;letter-spacing:-0.04px;-ms-transform-origin:0 0;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;transform-origin:0 0;}#resizer%% .DC1, #resizer%% .DC0, #resizer%% img{position:absolute;width:100%;height:100%;left:0px;top:0px;}#resizer%% .DC0{opacity:0;}'.replace(new RegExp("resizer%%", "g"), e),
                g = document.createElement("style");
            document.getElementsByTagName("head")[0].appendChild(g), g.appendChild(document.createTextNode(f));
            var h = 0,
                i = 0;
            Cbfun(b)
        }
    }
    var gc = 1,
        gd = 0,
        gli = 0,
        gln = 0,
        gpc = 1,
        au = [],
        gx = 0,
        gxf = !1,
        gt = 0,
        gpp = 1,
        gp = 0,
        gStartTime = 0,
        gtct = 0,
        gafi = 0,
        gplength = 0,
        gslength = [],
        fcon = 0,
        objDopPhSco, _undefined = "undefined",
        customGoto, gft = "",
        stepToGoto = {
            s: -1,
            p: 1,
            l: 0,
            t: null
        },
        Player = window.Player,
        anima, gv = {
            a: "",
            asc: 1,
            b: 1,
            bc: "",
            bb: {
                f: navigator.userAgent.search("Firefox") > -1,
                o: ["Win32", "Win64", "Windows", "WinCE"].indexOf(window.navigator.platform) > -1,
                m: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            },
            c: "",
            cs: 1,
            d: "",
            dz: !1,
            bs: !1,
            e: "",
            f: 1,
            g: 0,
            h: 0,
            i: [],
            j: 0,
            k: 1,
            loop: !1,
            m: [],
            mo: {},
            n: 0,
            o: function(a) {
                return document.getElementById(a)
            },
            ol: {},
            p: 0,
            ps: {
                a: 0,
                b: 0
            },
            q: 0,
            r: {},
            s: 0,
            t: 0,
            u: 0,
            v: "",
            w: 0,
            x: !1,
            y: {},
            z: {},
            fn: [],
            vc: 1,
            aa: 0
        },
        init = function() {
            function l(a) {
                for (var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), c = 0; c < b.length; c++) v[b[c]] = c;
                a = a.replace(new RegExp("[^" + b.join("") + "=]", "g"), "");
                var d = "=" === a.charAt(a.length - 1) ? "=" === a.charAt(a.length - 2) ? "AA" : "A" : "",
                    e = "";
                a = a.substr(0, a.length - d.length) + d;
                for (var f = 0; f < a.length; f += 4) {
                    var g = (v[a.charAt(f)] << 18) + (v[a.charAt(f + 1)] << 12) + (v[a.charAt(f + 2)] << 6) + v[a.charAt(f + 3)];
                    e += String.fromCharCode(g >>> 16 & 255, g >>> 8 & 255, 255 & g)
                }
                return e.substring(0, e.length - d.length)
            }

            function k(a) {
                return a.substring(0, a.indexOf("{"))
            }

            function m(a) {
                return a.substring(a.indexOf("{") + 1)
            }

            function j(s) {
                return eval(s)
            }

            function w(a) {
                return document.createElement(a)
            }

            function x(a, b) {
                return b.appendChild(a)
            }

            function u(a, b, c) {
                a.setAttribute(b, c)
            }

            function cTs(a) {
                var b = document.createElement("div");
                return b.appendChild(a), b.innerHTML
            }

            function siv() {
                gslength[0] = 0;
                for (var a = 1; a <= gv.t; a++) {
                    var b = anima["s" + a];
                    b.f = gslength[a] = gslength[a - 1], gslength[a] += b.t.i;
                    var c = b.c;
                    if (0 !== c)
                        for (var d in c) typeof c[d].i !== _undefined && (gslength[a] += c[d].i)
                }
                gplength = gslength[gslength.length - 1]
            }

            function pan_Zoom(a, b) {
                if (gv.dz) return !1;
                var c = a.touches.length;
                return 1 === c ? pan(a, b) : 2 === c && (zoom(b), !0)
            }

            function pan(a, b) {
                function c(a) {
                    var c = a.touches[0].clientX,
                        k = a.touches[0].clientY,
                        l = g + (c - e),
                        m = h + (k - f);
                    l = l > 0 ? 0 : l, m = m > 0 ? 0 : m;
                    var n = i * d + m - i * gv.r.r,
                        o = j * d + l - j * gv.r.r;
                    m = n < 0 ? m - n : m, l = o < 0 ? l - o : l, b.style.left = l + "px", b.style.top = m + "px", a.preventDefault(), this.ontouchend = function() {
                        this.ontouchmove = null, this.ontouchend = null
                    }
                }
                var d = parseFloat(b.style.webkitTransform.split("(")[1].split(")")[0]);
                if (d.toFixed(2) === gv.r.r.toFixed(2)) return !1;
                var e = a.touches[0].clientX,
                    f = a.touches[0].clientY,
                    g = parseFloat(b.style.left),
                    h = parseFloat(b.style.top),
                    i = parseFloat(b.style.height),
                    j = parseFloat(b.style.width);
                return this.ontouchmove = c, !0
            }

            function zoom(a) {
                var b = parseFloat(a.style.webkitTransform.split("(")[1].split(")")[0]),
                    c = b,
                    d = null,
                    e = parseFloat(a.style.height),
                    f = parseFloat(a.style.width),
                    g = parseFloat(a.style.left),
                    h = parseFloat(a.style.top);
                this.ontouchend = function() {
                    this.ontouchmove = null, this.ontouchend = null
                }, this.ontouchmove = function(i) {
                    if (2 === i.touches.length) {
                        i.preventDefault();
                        var j = i.touches[0].clientX,
                            k = i.touches[1].clientX,
                            l = i.touches[0].clientY,
                            m = i.touches[1].clientY,
                            n = j - k,
                            o = l - m,
                            p = Math.pow(n, 2) + Math.pow(o, 2);
                        if (p = Math.sqrt(p), null === d) return void(d = p);
                        var q = c;
                        c = b + (p - d) / (p + d), c = c < 0 ? 0 : c, c = gv.r.r > c ? gv.r.r : c;
                        var r = (j + k) / 2,
                            s = (l + m) / 2,
                            t = qSC.findPos(a),
                            u = (r - t[0]) / q,
                            v = (s - t[1]) / q,
                            w = u * (c - q),
                            x = v * (c - q),
                            y = g - w,
                            z = h - x;
                        y = y > 0 ? 0 : y, z = z > 0 ? 0 : z;
                        var A = e * c + z - e * gv.r.r,
                            B = f * c + y - f * gv.r.r;
                        y = B < 0 ? y - B : y, z = A < 0 ? z - A : z, g = y, h = z, a.style.left = y + "px", a.style.top = z + "px", a.style.webkitTransform = "scale(" + c + ")"
                    } else d = null
                }
            }

            function CreateOutlineJson() {
                function a(a) {
                    var c = {};
                    if (null === a) return gv.ol = 0, void _events.o(c);
                    for (var d = a.getElementsByTagName("Outline")[0], e = d.getElementsByTagName("sld"), f = 0, g = e.length; f < g; f++) {
                        var h = c["slide" + (f + 1)] = {};
                        h.title = "", h.para = [];
                        for (var i = e[f], j = i.getElementsByTagName("shp"), k = 0, l = j.length; k < l; k++)
                            for (var m = j[k], n = m.getElementsByTagName("para"), o = 0, p = n.length; o < p; o++) {
                                var q = n[o],
                                    r = q.getAttribute("txt"),
                                    s = m.getAttribute("lvl");
                                "1" === s ? (h.title.length > 0 && (h.title += " "), h.title += r) : h.para[h.para.length] = r
                            }
                    }
                    var t = c.sections = [],
                        u = d.getElementsByTagName("sections");
                    if (u.length > 0) {
                        u = u[0];
                        for (var v = u.getElementsByTagName("section"), w = 0; w < v.length; w++) {
                            var x = v[w];
                            t[t.length] = {
                                title: x.getAttribute("name"),
                                slides: x.getAttribute("slides").split(",").map(b)
                            }
                        }
                    }
                    gv.ol = c, _events.o(c)
                }

                function b(a) {
                    return parseInt(a, 10)
                }
                if (0 !== gv.ol) {
                    var c = gv.d + gv.a + "/outline.xml";
                    try {
                        presenter.lxf(c, a)
                    } catch (a) {
                        gv.ol = 0
                    }
                }
            }
            var v = {},
                y = {},
                globals = function(encodedSlideData, notes, font) {
                    function SendClickCordinates(a) {
                        var b = qSC.findPos(gv.r.o),
                            c = a.clientX - b[0],
                            d = a.clientY - b[1];
                        _events.d({
                            x: c,
                            y: d
                        })
                    }

                    function actionHandler(evnt) {
                        function RunOtherLinks(a, b) {
                            if ("" === a[0]) {
                                var c = getParentDiv(gc, b);
                                if (c.DopPhVdo) video(c, !0);
                                else {
                                    if (!c.DopPhAdo) return trigger < 0;
                                    audio(c)
                                }
                            } else try {
                                if (1 === a.length) return "-1" === a[0] && (a[0] = gv.ps.a), void runGoto(a[0]);
                                a[0] = a[0].replace(/&amp;/g, "&"), window.open(a[0], a[1])
                            } catch (a) {}
                        }

                        function RunTrigger(a, b) {
                            var c = anima["s" + gc].i["i" + a],
                                d = c.s,
                                e = c.i,
                                f = 0,
                                g = "",
                                h = 0,
                                i = 0 === d ? e - 1 : d - 1,
                                j = 0,
                                k = Animations.Fade;
                            for (h = 0; h <= i; h++) {
                                j = c["c" + h];
                                for (g in j)
                                    if ("i" !== g) {
                                        if (k = j[g], !k.v) continue;
                                        var l = Date.now(),
                                            m = l - k.v.st - k.c1,
                                            n = k.c1 + k.c2 - m;
                                        k.v.st -= n, (n > 0 && 1 === e || n > 0 && h === i) && (f = 1)
                                    }
                            }
                            if (!f || h !== e) {
                                if (e > 1 && 0 === d)
                                    for (h = 0; h < e; h++) {
                                        j = c["c" + h];
                                        for (g in j)
                                            if ("i" !== g) {
                                                if (k = j[g], 0 === k.v) continue;
                                                k.v.stop(), k.v.reset()
                                            }
                                    }
                                var o = c["c" + d];
                                for (g in o)
                                    if ("i" !== g) {
                                        var p = o[g];
                                        if (p.t = 1, p.v = 0, k = Animations[p.c5], k || [5, 6, 7, 8, 9, 0].indexOf(p.c5) < 0 && (k = Animations.Fade), !audioVideoTrigger(p, b)) {
                                            if (!k) continue;
                                            p.v = new k(cloneObject(p)), p.v.Initialize(Date.now()), p.v.play()
                                        }
                                    } d++, d >= e && (d = 0), c.s = d
                            }
                        }

                        function checkForLink(a, b) {
                            var c = "s" + a + "s0";
                            try {
                                for (; b.id !== c;) {
                                    if ("a" === b.tagName.toLowerCase()) return typeof b.DopPhGoto !== _undefined ? [b.DopPhGoto] : [b.href, b.target];
                                    b = b.parentNode
                                }
                            } catch (a) {
                                return ["", ""]
                            }
                            return ["", ""]
                        }

                        function runGoto(slideIndex) {
                            if (0 === customGoto.length) ncc.z(slideIndex, !1);
                            else try {
                                eval(customGoto.replace("%%slideindex%%", slideIndex))
                            } catch (a) {}
                        }

                        function cloneObject(a) {
                            return JSON.parse(JSON.stringify(a))
                        }

                        function getParentDiv(a, b) {
                            var c = "s" + a + "s0";
                            try {
                                for (; b.id !== c;) {
                                    if (b.DopPhGoto || b.DopPhVdo || b.DopPhAdo) return b;
                                    b = b.parentNode
                                }
                            } catch (a) {
                                return ""
                            }
                            return ""
                        }

                        function CheckForTrigger(a, b) {
                            var c = anima["s" + a].i;
                            if (typeof c === _undefined) return -1;
                            var d = "s" + a + "s0";
                            try {
                                for (; b.id !== d;) {
                                    var e = GetShapeIdFromDivId(b.id),
                                        f = GetTriggerIndexFromShapeId(c, e);
                                    if (-1 !== f) return f;
                                    b = b.parentNode
                                }
                            } catch (a) {}
                            return -1
                        }

                        function GetShapeIdFromDivId(a) {
                            var b = a.split("s");
                            return b.length < 3 ? -1 : parseInt(b[2], 10)
                        }

                        function GetTriggerIndexFromShapeId(a, b) {
                            for (index = 0; index < a.i; index++)
                                if (idata = a["i" + index], idata.t === b) return index;
                            return -1
                        }

                        function audioVideoTrigger(a, b) {
                            var c = getParentDiv(gc, b);
                            if (c.DopPhVdo || c.DopPhAdo) return !0;
                            var d = gv.o(a.c6);
                            [5, 6, 7].indexOf(a.c5) > -1 && (d = d.getElementsByTagName("video")[0]);
                            var e = getParentDiv(gc, d);
                            switch (a.c5) {
                                case 5:
                                    d.pause(), d.currentTime = 0, video(e, !0);
                                    break;
                                case 6:
                                    video(e, !0);
                                    break;
                                case 7:
                                    d.paused || video(e, !0), d.currentTime = 0;
                                    break;
                                case 8:
                                    d.pause(), d.currentTime = 0, audio(e);
                                    break;
                                case 9:
                                    audio(e);
                                    break;
                                case 0:
                                    d.paused || audio(e), d.currentTime = 0
                            }
                            return !1
                        }

                        function GetClickedShape(a) {
                            var b = a.target,
                                c = !1,
                                d = "s" + gc + "s0",
                                e = !0,
                                f = [];
                            do {
                                var g = document.elementFromPoint(a.pageX, a.pageY);
                                if (g.id === d || "resizer" === g.id) break;
                                if (IsShapeVisible(g)) {
                                    b = g, e = !1, c = !0;
                                    break
                                }
                                g.style.display = "none", f[f.length] = g
                            } while (e);
                            return f.forEach(function(a) {
                                a.style.display = "block"
                            }), c ? b : null
                        }

                        function IsShapeVisible(a) {
                            if (!AreChildrenVisible(a)) return !1;
                            var b = "s" + gc + "s0";
                            try {
                                for (; a.id !== b;) {
                                    if (parseFloat(window.getComputedStyle(a).opacity) < .04) return !1;
                                    a = a.parentNode
                                }
                            } catch (a) {
                                return !0
                            }
                            return !0
                        }

                        function AreChildrenVisible(a) {
                            for (var b = a.getElementsByTagName("*"), c = 0; c < b.length; c++) {
                                var d = b[c];
                                if (parseFloat(window.getComputedStyle(d).opacity) < .4) return !1
                            }
                            return !0
                        }
                        var node = GetClickedShape(evnt);
                        if (null === node) return !0;
                        var link = checkForLink(gc, node),
                            trigger = CheckForTrigger(gc, node);
                        return trigger > -1 && RunTrigger(trigger, node), RunOtherLinks(link, node)
                    }
                    gv.fn = notes, y.t = encodedSlideData.substring(0, 5), encodedSlideData = encodedSlideData.substring(5), y.i = k(encodedSlideData), encodedSlideData = m(encodedSlideData);
                    var fg = k(encodedSlideData),
                        fh = l(fg);
                    y.a = j(fh), encodedSlideData = m(encodedSlideData), fg = k(encodedSlideData), fh = l(fg), y.f = fh, encodedSlideData = m(encodedSlideData), y.s = l(encodedSlideData);
                    var gvlTmp = gv.l;
                    if (j(y.f), gv.ex = gv.ex || null, gv.l = gvlTmp, stepToGoto.s > -1) {
                        var step = stepToGoto.s,
                            anim = anima["s" + gc],
                            foundAutoAnim = anim.t.n,
                            stepCount = acc.c();
                        foundAutoAnim && (stepCount++, step++), step = step > stepCount ? stepCount : step, step = step < 0 ? 0 : step, stepToGoto.s = step
                    }
                    for (var index in anima) {
                        var sld = anima[index],
                            transition = sld.t;
                        0 !== transition && (0 === transition.i && (transition.i = 10))
                    }
                    gv.fl = font, cfc.f(font, gft), CreateOutlineJson(), siv(), gv.r.o.style.width = gv.w + "px", gv.r.o.style.height = gv.h + "px";
                    try {
                        _events.i(cfc.dl())
                    } catch (a) {}
                    try {
                        0 !== gv.s && presenter.loadXml("courseInfo.xml", function(a) {
                            Player.SetPresenterDetails(a)
                        })
                    } catch (a) {}
                    if (0 !== gv.q)
                        if (typeof zenler !== _undefined) {
                            var txt = zenler.GetStringFromCurrentNode();
                            qSC.loadXmlFrmTxt(txt)
                        } else gv.q.zXml = "";
                    if (gv.r.o.style.backgroundColor = gv.bc, 0 !== gv.s && (objDopPhSco = new DopPhSco(gv.s), objDopPhSco.Load()), 0 !== gv.q) {
                        var styleObj = document.createElement("link");
                        styleObj.setAttribute("rel", "stylesheet"), styleObj.setAttribute("href", gv.d + gv.a + "/template.css"), document.getElementsByTagName("head")[0].appendChild(styleObj), 0 === gv.s && (qsh.initQuestionStruct(), qSC.loadQuizFromXml())
                    }
                    try {
                        document.createEvent("TouchEvent"), gd = "ontouchstart" in window ? 1 : 0
                    } catch (a) {
                        gd = 0
                    }
                    1 === gd && (0 === gv.q ? gv.r.o.ontouchstart = function(a) {
                        function b(a) {
                            return a.changedTouches[0].clientX
                        }
                        if (!pan_Zoom(a, this)) {
                            var c = b(a);
                            gv.r.o.ontouchend = function(a) {
                                var d = b(a);
                                gv.r.o.ontouchmove = gv.r.o.ontouchend = null, a.touches.length > 0 || (c - d > 100 && 1 === gv.j ? ncc.n(0) : c - d < -100 && 1 === gv.j && ncc.p(0))
                            }
                        }
                    } : gv.r.o.ontouchstart = null), 0 === gv.q ? gv.r.o.onclick = function(a) {
                        SendClickCordinates(a), a.preventDefault(), actionHandler(a) && 1 === gv.g && ncc.n(0)
                    } : gv.r.o.onclick = null, 0 === gv.q && 1 === gv.k ? document.body.onkeydown = function(a) {
                        var b;
                        a || (a = window.event), a.keyCode ? b = a.keyCode : a.which && (b = a.which), 34 !== b && 39 !== b && 40 !== b || ncc.n(0), 33 !== b && 37 !== b && 38 !== b || ncc.p(0)
                    } : document.body.onkeydown = null, addSlideShapes(gc), _events.c(gc)
                };
            return globals
        }(),
        Cbfun = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                return window.setTimeout(a, 1e3 / 60)
            }
        }(),
        UpdategT = function() {
            if (1 === gpp) return null;
            if (gtct = (new Date).getTime(), gt = gtct - gStartTime, _events.t(gt), 1 === gx) {
                if (gt >= gslength[gc - 1] + anima["s" + gc].t.i) {
                    if (gxf) return gxf = !1, tranend(1), gslength[gc] <= gt && _events.e(gc, !1), 0;
                    gxf = !0
                }
                return gafi = Cbfun(UpdategT), null
            }
            if (anima["s" + gc].f = gt, gt >= acc.g[anima["s" + gc].g]) {
                pause();
                var a = gt - acc.g[anima["s" + gc].g];
                return gtct -= a, anima["s" + gc].f = gt = acc.g[anima["s" + gc].g], anima["s" + gc].g++, 1 === fcon ? (typeof acc.g[anima["s" + gc].g] !== _undefined && (_events.n(anima["s" + gc].g), acc.P(), play()), fcon = 0) : 1 !== anima["s" + gc].a && 1 !== gv.aa || (typeof acc.g[anima["s" + gc].g] !== _undefined ? (acc.P(), play()) : (gc !== gv.t && _events.e(gc, !1), 1 !== anima["s" + gc].a && 1 === gv.aa || ncc.n(0))), gslength[gc] <= gt && gc !== gv.t && _events.e(gc, !1), 0
            }
            return gafi = Cbfun(UpdategT), null
        },
        AnCl = function() {
            function a(a, b) {
                function c(a) {
                    return JSON.parse(JSON.stringify(a))
                }
                for (var d in a) {
                    var e = function() {},
                        f = "";
                    if ("i" !== d) switch (a[d].c4) {
                        case 1:
                        case 2:
                            0 === a[d].v && (f = gv.n ? gv.n : a[d].c5, e = Animations[f], typeof e === _undefined && (e = Animations.Fade), a[d].v = new e(c(a[d])), a[d].v.Initialize(b));
                            break;
                        case 3:
                            0 === a[d].v && (f = a[d].c5, e = Animations[f], typeof e === _undefined && (e = Animations.Spin), a[d].v = new e(c(a[d])), a[d].v.Initialize(b));
                            break;
                        case 4:
                            0 === a[d].v && (f = a[d].c5, e = Animations[f], a[d].v = new e(c(a[d])), a[d].v.Initialize(b));
                            break;
                        case 5:
                            if (0 === a[d].v) switch (a[d].c5) {
                                case 5:
                                case 6:
                                case 7:
                                    a[d].v = new aVideo(c(a[d]), b)
                            }
                            break;
                        case 8:
                            if (0 === a[d].v) switch (a[d].c5) {
                                case 8:
                                case 9:
                                case 0:
                                    a[d].v = new aaudio(c(a[d]), b)
                            }
                            break;
                        case "n":
                            a[d].v = new autoAdvance
                    }
                }
            }
            var b = this;
            b.g = [], b.P = function() {
                for (var a = this, b = a.l(a.g), c = 0; c < b.length; c++) b[c].IniTSd && b[c].play()
            }, b.p = function() {
                for (var a = this, b = a.l(a.g), c = 0; c < b.length; c++) b[c].IniTSd && b[c].pause()
            }, b.s = function() {
                for (var a = this, b = a.l(a.g), c = 0; c < b.length; c++) b[c].IniTSd && b[c].stop(!0)
            }, b.r = function() {
                for (var a = this, b = a.l(a.g), c = 0; c < b.length; c++) b[c].IniTSd && b[c].reset(!0)
            }, b.l = function(b) {
                var c = [],
                    d = anima["s" + gc],
                    e = d.g,
                    f = d.c,
                    g = f["c" + e];
                for (var h in g) "i" !== h && (0 === g[h].v && a(g, b[e] - g.i), c[c.length] = g[h].v);
                return c
            }, b.t = function() {
                var a = this;
                a.g.splice(0, a.g.length);
                var b = anima["s" + gc],
                    c = b.t.i,
                    d = b.c;
                if (0 !== d)
                    for (var e in d) "i" !== e && (c += d[e].i, a.g[a.g.length] = gslength[gc - 1] + c);
                else a.g[0] = 0
            }, b.c = function(a) {
                a = parseInt(a, 10), a || (a = gc), a = a > gv.t ? gv.t : a, a = a < 1 ? 1 : a;
                var b = 0;
                return anima["s" + a].c && (b = anima["s" + a].c.i), b -= anima["s" + a].t.n
            }
        },
        acc = new AnCl,
        NvCl = function() {
            function a(a) {
                var b = anima["s" + a].i;
                if (_undefined !== typeof b)
                    for (var c = 0; c < b.i; c++) {
                        var d = b["i" + c];
                        d.s = 0;
                        for (var e = 0; e < d.i; e++) {
                            var f = d["c" + e];
                            for (animIndex in f) "i" !== animIndex && (animation = f[animIndex], 0 !== animation.v && (animation.v.stop(), animation.v.reset()))
                        }
                    }
            }

            function b(a, b) {
                a.p = gv.o("narration" + b);
                try {
                    c(a)
                } catch (a) {}
            }

            function c(a) {
                a.p.height = a.h, a.p.width = a.w, a.p.setAttribute("style", "top:" + a.t + "px;left:" + a.l + "px;position:absolute;"), a.p.play()
            }
            this.P = function() {
                if (0 === gp) {
                    for (i = 0; i < au.length; i++) au[i][0].duration !== au[i][0].currentTime && au[i][0].play();
                    return acc.g[anima["s" + gc].g] > gt ? (play(), void acc.P()) : void ncc.n(0)
                }
                for (pause(), i = au.length; i >= 0; i--) typeof au[i] !== _undefined && typeof au[i][0] !== _undefined && au[i][0].pause();
                acc.p()
            }, this.Ps = function() {
                pause(), acc.p();
                for (var a = au.length - 1; a >= 0; a--) au[a][0].pause()
            }, this.n = function(a) {
                function b(c) {
                    if (!(gc >= gv.t && 1 !== a) || c) {
                        if (0 !== gpc || gv.bs || (gpc = gc, cfc.sn(gc), cfc.hf.remove(gc)), 1 !== a) {
                            if (c ? gc = 1 : gc++, !gv.z.h && 1 === anima["s" + gc].h) return void b(c);
                            if (gv.bs || gv.sjps) return _events.c(gc), void(gc = parseInt(gv.b, 10));
                            addMedia(gc, !1)
                        }
                        if (!cfc.l(gc)) return void(gli = setTimeout(function() {
                            ncc.n(1)
                        }, 100));
                        gv.x && ncc.c(gc), anima["s" + gc].g = 0, ncc.r(gc), cfc.m(), anima["s" + gc].f = gt = gslength[gc - 1], gtct = Date.now(), gStartTime = gtct - gt, acc.t(), ncc.y(), cfc.hf.add(gc), 0 !== gv.s && objDopPhSco.UpdateLesson(gc, gv.t), _events.c(gc)
                    }
                }
                if (clearTimeout(gv.ad), 1 === gx) return void tranend();
                if (1 !== a && 0 !== gln) {
                    if (gc === gv.t) return;
                    return clearTimeout(gli), void b(!1)
                }
                if (1 !== a && 0 === gln) {
                    if (gslength[gc] <= gt && (anima["s" + gc].g >= acc.g.length || 0 === anima["s" + gc].c)) return gc === gv.t ? (ncc.a(1), void(gv.loop ? b(!0) : _events.e(gc, !0))) : (pause(), anima["s" + gc].f < anima["s" + gc].c.i && anima["s" + gc].g++, void b(!1));
                    if (1 === gp) return gStartTime -= acc.g[anima["s" + gc].g] - gt, anima["s" + gc].f = gt = acc.g[anima["s" + gc].g], _events.t(gt), void(fcon = 1);
                    if (acc.g[anima["s" + gc].g] >= gt) {
                        _events.n(anima["s" + gc].g), acc.P();
                        for (var c = 0; c < au.length; c++) au[c][0].dopsrcErr || au[c][0].play();
                        return void play()
                    }
                }
                b(!1)
            }, this.c = function(b) {
                var c = anima["s" + b];
                if (c.g = 0, ncc.r(b), cfc.m(), c.f = gslength[b - 1], b === gc) {
                    var d = c.t.i;
                    c.f += d, gt = gslength[b - 1], gtct = Date.now(), gStartTime = gtct - (gt + d), a(b)
                }
            }, this.r = function(a) {
                function b(a) {
                    if (a < 1 || a > gv.t) return [];
                    var b = [],
                        c = anima["s" + a],
                        d = c.c;
                    if (0 !== d)
                        for (var e in d)
                            if ("i" !== e) {
                                var f = d[e];
                                for (var g in f)
                                    if ("i" !== g) {
                                        if (0 === f[g].v) return b;
                                        b[b.length] = f[g].v
                                    }
                            } return b
                }
                for (var c = b(a), d = c.length - 1; d >= 0; d--) {
                    c[d].reset(!0)
                }
            }, this.p = function(a) {
                function b() {
                    gc > 1 ? c(!1) : gv.loop && c(!0)
                }

                function c(b) {
                    if (clearTimeout(gli), 0 === gpc && (gpc = gc, cfc.sn(gc), cfc.hf.remove(gc)), 1 !== a) {
                        if (b ? gc = gv.t : gc--, !gv.z.h && 1 === anima["s" + gc].h) return void c(b);
                        if (gv.bs || gv.sjps) return _events.c(gc), void(gc = parseInt(gv.b, 10));
                        _events.c(gc), addMedia(gc, !1)
                    }
                    if (!cfc.l(gc)) return void(gli = setTimeout(function() {
                        ncc.p(1)
                    }, 100));
                    d()
                }

                function d() {
                    gv.x && ncc.c(gc), cfc.hf.add(gc), cfc.m(), acc.t(), gt = gslength[gc - 1], gtct = Date.now(), gStartTime = gtct - gt, _events.t(gt), ncc.y()
                }
                if (clearTimeout(gv.ad), 1 === gx) return void tranend();
                if (1 !== a && 0 !== gln) return 1 === gc ? void ncc.a(0) : void c(!1);
                if (1 !== a && 0 === gln) {
                    var e = anima["s" + gc].g;
                    if (gv.u && e < 2 && anima["s" + gc].t.n) return void b();
                    if (gt - anima["s" + gc].t.i > gslength[gc - 1]) return 1 === gp ? pause() : acc.g.indexOf(gt) > -1 && anima["s" + gc].g--, acc.r(), acc.s(), anima["s" + gc].g > 0 ? (gStartTime += gt - acc.g[anima["s" + gc].g - 1], anima["s" + gc].f = gt = acc.g[anima["s" + gc].g - 1]) : (gStartTime += gt - gslength[gc - 1] - anima["s" + gc].t.i, anima["s" + gc].f = gt = gslength[gc - 1] + anima["s" + gc].t.i), _events.p(anima["s" + gc].g), void _events.t(gt);
                    b()
                }
            }, this.z = function(a, b) {
                function c() {
                    if (!cfc.l(gc)) return void(gli = setTimeout(c, 100));
                    d()
                }

                function d() {
                    acc.t(), gv.x && ncc.c(gc), gt = gslength[gc - 1], gtct = Date.now(), gStartTime = gtct - gt, _events.t(gt), cfc.hf.add(gc), ncc.y(), _events.c(gc)
                }
                return clearTimeout(gv.ad), b || (stepToGoto.l = 0, stepToGoto.s = -1), a = parseInt(a, 10), !isNaN(a) && (!gv.bs && !gv.sjps && (1 === gx && tranend(1), 0 === gpc && (gpc = gc, cfc.sn(gc), cfc.hf.remove(gc)), a = a > gv.t ? gv.t : a, a = a < 1 ? 1 : a, gc !== a && (pause(), acc.s(), addMedia(a, !1), gc = a, clearTimeout(gli), _events.c(gc), cfc.m(), void c())))
            }, this.y = function() {
                var a = anima["s" + gc];
                if (typeof a.q !== _undefined) {
                    var c = qsh.initQuestionSlide();
                    if (c > 0) return void ncc.z(c, !1)
                }
                0 !== a.n && b(a.n, gc);
                var d = a.t;
                if (0 !== d.c) return d.v = new tran(d.c), d.v.initialize(gslength[gc - 1]), d.v.play(), void play();
                if (gpc !== gc && gpc > 0) {
                    null !== gv.o("s" + gpc + "s0") && (gv.o("s" + gpc + "s0").style.display = "none")
                }
                gv.o("s" + gc + "s0").style.display = "block", gpc = 0, gt = anima["s" + gc].f, gStartTime -= gt - gslength[gc - 1], _events.t(gt), anima["s" + gc].f === gslength[gc - 1] + anima["s" + gc].t.i ? 1 === anima["s" + gc].t.n && (typeof gv.z.playAnimationsOnLoad === _undefined || gv.z.playAnimationsOnLoad) && (acc.P(), play()) : -1 === acc.g.indexOf(anima["s" + gc].f) && (acc.P(), play())
            }, this.a = function(a) {
                0 !== gv.s && (objDopPhSco.scormendStatus || objDopPhSco.Quit(), objDopPhSco.scormendStatus = !0), typeof loadCourseXml !== _undefined && (1 === a ? _events.c(-1) : _events.c(0))
            }
        },
        ncc = new NvCl,
        Cfc = function() {
            function a(a) {
                for (var b = gv.o("s" + a + "s0"), c = b.getElementsByTagName("img"), d = c.length - 1; d >= 0; d--) {
                    if (!c[d].complete) return !1
                }
                return !0
            }

            function b(a) {
                for (var b = gv.o("s" + a + "s0"), c = b.getElementsByTagName("audio"), d = c.length - 1; d >= 0; d--) {
                    if (0 === c[d].dopLoaded) return !1
                }
                return !0
            }

            function c(a) {
                for (var b = gv.o("s" + a + "s0"), c = b.getElementsByTagName("video"), d = c.length - 1; d >= 0; d--) {
                    if (0 === c[d].dopLoaded) return !1
                }
                return !0
            }
            this.i = function(a) {
                var b = a.id;
                return b && "div" === a.tagName.toLowerCase() && "c" !== b.charAt(b.length - 1) ? a.id : (a = a.parentNode, this.i(a))
            }, this.b = function(a) {
                var b = gv.ll[a];
                return typeof b !== _undefined && b ? "?" + b : gv.l
            }, this.l = function(d) {
                if (1 === gv.asc) return _events.b(gc), gln = 0, !0;
                if (-1 === gv.i[d]) return 1 === gln ? _events.b(gc) : gln = 0, !0;
                if ("" !== window.location.host) {
                    if (!a(d)) return 0 === gln && _events.a(), gln = 1, !1;
                    if (!(-1 !== navigator.platform.indexOf("iPhone") || -1 !== navigator.platform.indexOf("iPod") || null !== navigator.userAgent.match(/iPad/i) || b(d) && c(d))) return 0 === gln && _events.a(), gln = 1, !1
                }
                return _events.b(gc), gln = 0, gv.i[d] = -1, !0
            }, this.ln = function(d) {
                if (-1 === gv.i[d]) return !0;
                if (1 <= gv.i[d]) return !1;
                var e = a(d) && c(d) && b(d);
                return e && (gv.i[d] = -1), e
            }, this.s = function(a) {
                var b = anima["s" + a].c;
                for (var c in b) {
                    var d = b[c];
                    for (var e in d)
                        if ("i" !== e) {
                            var f = d[e];
                            0 !== f.v && f.v.pause()
                        }
                }
            }, this.g = function() {
                var a = {
                        ogg: !1,
                        mp4: !1
                    },
                    b = document.createElement("video");
                try {
                    if (typeof b.canPlayType === _undefined || null === b.canPlayType) return void(gv.v = 0);
                    0 === gv.v ? a.mp4 = !0 : b.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, "") ? a.ogg = !0 : b.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, "") && (a.mp4 = !0)
                } catch (a) {
                    return void(gv.v = 0)
                }
                gv.v = a.mp4 ? "mp3" : "ogg"
            }, this.f = function(a, b) {
                if (0 !== a.length) {
                    var c = document.createElement("style");
                    c.setAttribute("type", "text/css"), c.setAttribute("id", "DopFontFamily");
                    for (var d = null === gv.ex ? "." + b : gv.ex, e = 0; e < a.length; e++) {
                        var f = a[e][0] + d,
                            g = 1 === a[e][2] ? 'src: url("' + gv.d + gv.a + "/" + f + cfc.b(f) + '");' : "",
                            h = 400 !== a[e][3] ? "font-weight: " + a[e][3] + ";" : "",
                            i = 1 === a[e][4] ? "font-style: italic;" : "";
                        c.innerHTML += '@font-face{ font-family: "' + a[e][0] + '";' + g + h + i + "}"
                    }
                    document.getElementsByTagName("head")[0].appendChild(c)
                }
            }, this.a = function(a, b) {
                if (typeof a !== _undefined && typeof a.play !== _undefined) {
                    for (var c = [a, b], d = 0; d < au.length; d++)
                        if (au[d][0].id === a.id) return void(au[d][1] < b && (au[d][1] = b));
                    au[au.length] = c
                }
            }, this.m = function() {
                function a(a) {
                    if (0 !== gv.v) {
                        var b = au[a][0];
                        try {
                            b.paused || b.pause(), 0 !== b.currentTime && (b.currentTime = 0)
                        } catch (a) {}
                    }
                }
                for (var b = 0; b < au.length; b++) 1 === au[b][1] ? (a(b), au.splice(b, 1), b--) : au[b][1]--
            }, this.dl = function() {
                var a = {};
                try {
                    a.Width = gv.w, a.Height = gv.h, a.TotalSlides = gv.t, a.ShowNotes = gv.fn.length > 0, a.TotalTime = gplength, a.MaxScale = gv.f, a.BackColr = gv.bc
                } catch (b) {
                    a = null
                }
                return a
            }, this.sn = function(a) {
                var b = gv.o("narration" + a);
                null !== b && (b.currentTime = 0, b.pause())
            }, this.pn = function(a) {
                var b = gv.o("narration" + a);
                null !== b && b.play()
            };
            var d = function() {
                function a(a) {
                    function b() {
                        var a = this.thisElement;
                        if (a.parentNode.style.display = "block", a.DopOtherOptions.openInNewWindow) a.src = "", window.open(a.DopOtherOptions.src);
                        else {
                            if (!c(a)) return;
                            a.src = a.DopOtherOptions.src, a.style.display = "block"
                        }
                    }
                    for (var d = gv.o("s" + a + "s0"), e = d.getElementsByTagName("embed"), f = e.length - 1; f >= 0; f--) {
                        var g = e[f].parentNode,
                            h = "f" + g.id;
                        if (null === gv.o(h)) {
                            var i, j = e[f].src,
                                k = {
                                    src: "",
                                    delay: 0,
                                    openInNewWindow: !1
                                },
                                l = document.createElement("div");
                            if (i = "" === j ? document.createElement("embed") : document.createElement("iframe"), i.setAttribute("id", h), i.setAttribute("height", "100%"), i.setAttribute("width", "100%"), i.setAttribute("style", "position:absolute;top:0px;left:0px;border:none;"), "" === j) {
                                k.src = gv.d + gv.a + "/f" + g.id + ".swf", i.setAttribute("src", k.src);
                                var m = e[f].getAttribute("wmode"),
                                    n = e[f].getAttribute("bgcolor"),
                                    o = e[f].getAttribute("allowscriptaccess"),
                                    p = e[f].getAttribute("allowfullscreen");
                                null !== m && i.setAttribute("wmode", m), null !== n && i.setAttribute("bgcolor", n), null !== o && i.setAttribute("allowscriptaccess", o), null !== p && i.setAttribute("allowfullscreen", p)
                            } else j = j.split("+++"), k.src = j[0], j[1] && (k.delay = parseFloat(j[1])), j[2] && (k.openInNewWindow = "true" === j[2].toLowerCase().replace("/", ""));
                            var q, r = parseInt(g.style.top, 10),
                                s = parseInt(g.style.left, 10),
                                t = parseInt(g.style.width, 10),
                                u = parseInt(g.style.height, 10);
                            (u + r < 0 || t + s < 0 || r > gv.h || s > gv.w) && (r = s = u = t = 0), r < 0 && (q = r, r = 0, u += q), s < 0 && (q = s, s = 0, t += q), u + r > gv.h && (u = gv.h - r), t + s > gv.w && (t = gv.w - s), l.setAttribute("style", "top:" + r / gv.h * 100 + "%;left:" + s / gv.w * 100 + "%;height:" + u / gv.h * 100 + "%;width:" + t / gv.w * 100 + "%;-webkit-overflow-scrolling:touch;overflow:auto;position:absolute;"), l.setAttribute("eCntnt", "true"), g = gv.r.o.parentNode, i.DopOtherOptions = k, i.style.display = "none", i.DopTimeOut = b.bind({
                                thisElement: i
                            }), l.DopTimeOutKey = setTimeout(b.bind({
                                thisElement: i
                            }), k.delay), k.openInNewWindow || l.appendChild(i), g.appendChild(l), l.style.display = "none"
                        }
                    }
                }

                function b() {
                    for (var a = gv.r.o.parentNode, b = a.childNodes, c = [], d = b.length - 1; d >= 0; d--)
                        if (typeof b[d].tagName !== _undefined) {
                            var e = "true" === b[d].getAttribute("eCntnt");
                            e && (c[c.length] = b[d], b[d].DopTimeOutKey && clearTimeout(b[d].DopTimeOutKey))
                        } for (d = c.length - 1; d >= 0; d--) a.removeChild(c[d])
                }

                function c(a) {
                    if ("https:" !== location.protocol) return !0;
                    var b = a.DopOtherOptions.src;
                    if (0 === b.indexOf("https:")) return !0;
                    if (0 === b.indexOf("http:")) {
                        var c = document.createElement("a");
                        return c.innerHTML = b + "</br> !! WARNING !! </br> Trying to load insecure content in secure page. Please click here to open content in new window.", c.setAttribute("href", b), c.setAttribute("target", "blank"), a.parentNode.appendChild(c), c.setAttribute("style", "color:black;font-family:arial;position:absolute;background-color:#b2b2b9"), !1
                    }
                    return !0
                }
                this.add = a, this.remove = b
            };
            this.hf = new d
        },
        cfc = new Cfc,
        presenter = function() {
            function a(a, e) {
                d(a, function() {
                    for (var a = {}, d = 0; d < xmlObject.childNodes.length; d++)
                        if ("presenter" === xmlObject.childNodes[d].nodeName.toLowerCase()) {
                            var f = xmlObject.childNodes[d];
                            a.Presenter = b(f)
                        } else if ("attachments" === xmlObject.childNodes[d].nodeName.toLowerCase()) {
                        var g = xmlObject.childNodes[d].childNodes,
                            h = c(g);
                        a.Attachment = h
                    }
                    e && e(a)
                })
            }

            function b(a) {
                var b = {},
                    c = {};
                b.Details = {};
                for (var d = 0; d < a.attributes.length; d++) c = a.attributes[d], b.Details[c.name] = c.value;
                for (var e = a.childNodes, f = 0; f < e.length; f++)
                    if ("#text" !== e[f].nodeName.toLowerCase()) {
                        var g = e[f];
                        for (b[g.nodeName] = {}, d = 0; d < g.attributes.length; d++) c = g.attributes[d], b[g.nodeName][c.name] = c.value
                    } return b
            }

            function c(a) {
                for (var b = {}, c = 0; c < a.length; c++)
                    if ("#text" !== a[c].nodeName.toLowerCase()) {
                        b[c] = {};
                        for (var d = a[c], e = 0; e < d.attributes.length; e++) {
                            var f = d.attributes[e];
                            b[c][f.name] = f.value
                        }
                    } return b
            }

            function d(a, b) {
                var c;
                c = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), c.open("GET", a, !0), c.onreadystatechange = function(a) {
                    if (4 === c.readyState)
                        if (200 === c.status) {
                            var d = c.responseXML;
                            b && b(d)
                        } else 404 !== c.status && 403 !== c.status || b && b(null)
                }, c.onerror = function(a) {
                    b(null)
                }, c.send(null)
            }
            return {
                loadXml: a,
                lxf: d
            }
        }(),
        arrayOfDivs = [],
        larrayOfDivs = [],
        gdS = {},
        QuestionHandler = function() {
            function a(a) {
                var b = 0;
                if (1 === a[0] || 2 === a[0] || 3 === a[0]) {
                    var c = !1;
                    for (b = 0; b < arrayOfDivs.length; b++) 1 === arrayOfDivs[b].c && (c = !0);
                    if (!c) return 1 === a[0] || 2 === a[0] ? alert("Please choose an answer and then click Submit button.") : alert("Please select at least one answer and then click Submit button."), !1
                } else {
                    for (b = 0; b < arrayOfDivs.length; b++)
                        if (5 === a[0] && 0 === arrayOfDivs[b].c) return alert("Please match the answers and then click submit button."), !1;
                    for (arrayOfDivs.sort(function(a, b) {
                            return parseInt(a.style.top, 10) - parseInt(b.style.top, 10)
                        }), b = 0; b < arrayOfDivs.length; b++) 5 === a[0] && 0 === arrayOfDivs[b].c ? arrayOfDivs[b].c = -1 : arrayOfDivs[b].c = b
                }
                return !0
            }

            function b(a) {
                switch (gv.q.sCW || (a = 0), a) {
                    case 0:
                    case 1:
                        ncc.z(gc + 1, !1);
                        break;
                    case 2:
                        ncc.z(gc + 2, !1)
                }
            }

            function c(a, b) {
                function c(a) {
                    for (var b = [], c = 0, d = a.length; c < d; c++) {
                        var e = b.length;
                        b[e] = {}, b[e].h = parseInt(a[c].style.height, 10), b[e].w = parseInt(a[c].style.width, 10), b[e].t = parseInt(a[c].style.top, 10), b[e].l = parseInt(a[c].style.left, 10), b[e].node = a[c]
                    }
                    return b
                }
                gdS.node = b, gdS.node.style.zIndex = 10, gdS.node.style.opacity = .8, gdS.node.style.webkitTransform = "scale(1.05)", gdS.node.style.MozTransform = "scale(1.05)", gdS.node.style.OTransform = "scale(1.05)", gdS.node.style.msTransform = "scale(1.05)", gdS.dAray = c(arrayOfDivs);
                var e, g;
                1 === gd ? (e = a.changedTouches[0].clientX, g = a.changedTouches[0].clientY) : (e = a.clientX, g = a.clientY);
                var h = qSC.findPos(gv.r.o);
                e -= h[0], g -= h[1];
                var i = parseInt(gdS.node.style.left, 10),
                    j = parseInt(gdS.node.style.top, 10);
                gdS.comX = e / gv.r.r - i, gdS.comY = g / gv.r.r - j, a.preventDefault(), qSC.unclip(gdS.node), d(a), 1 === gd ? (document.addEventListener("touchmove", d, !0), document.addEventListener("touchend", f, !0)) : (document.addEventListener("mousemove", d, !0), document.addEventListener("mouseup", f, !0))
            }

            function d(a) {
                var b, c;
                1 === gd ? (b = a.changedTouches[0].clientX, c = a.changedTouches[0].clientY) : (b = a.clientX, c = a.clientY);
                var d = qSC.findPos(gv.r.o);
                b -= d[0], c -= d[1];
                var f = b / gv.r.r - gdS.comX,
                    g = c / gv.r.r - gdS.comY;
                gdS.node.style.left = f + "px", gdS.node.style.top = g + "px", e(f, g), a.preventDefault()
            }

            function e(a, b) {
                for (var c = parseInt(gdS.node.style.width, 10), d = parseInt(gdS.node.style.height, 10), e = b + d / 2, f = gdS.dAray.length - 1, g = null; f >= 0;) {
                    if (gdS.dAray[f].t < e && e < gdS.dAray[f].t + gdS.dAray[f].h) {
                        g = gdS.dAray[f].node.id;
                        break
                    }
                    f--
                }
                if (g !== gdS.node.id && null !== g && 0 === gdS.dAray[f].node.c) {
                    var h = gdS.dAray[f].l <= a && a < gdS.dAray[f].l + gdS.dAray[f].w,
                        i = gdS.dAray[f].l < a + c && a + c < gdS.dAray[f].l + gdS.dAray[f].w;
                    if (h || i) {
                        for (var j = gdS.dAray.length - 1; j >= 0 && gdS.dAray[j].node.hy !== gdS.node.hy;) j--;
                        var k = gdS.node.hy;
                        gdS.node.hy = gdS.dAray[f].node.hy, gdS.dAray[f].node.hy = k, gdS.dAray[f].node.style.top = k + "px";
                        var l = gdS.dAray[f].l;
                        gdS.dAray[f].l = gdS.dAray[j].l, gdS.dAray[j].l = l, l = gdS.dAray[f].t, gdS.dAray[f].t = gdS.dAray[j].t, gdS.dAray[j].t = l, l = gdS.dAray[f].h, gdS.dAray[f].h = gdS.dAray[j].h, gdS.dAray[j].h = l, l = gdS.dAray[f].w, gdS.dAray[f].w = gdS.dAray[j].w, gdS.dAray[j].w = l
                    }
                }
            }

            function f() {
                function a(a) {
                    var b = parseInt(gdS.node.style.left, 10),
                        c = b + parseInt(gdS.node.style.width, 10),
                        d = parseInt(a.style.left, 10),
                        e = d + parseInt(a.style.width, 10);
                    return d < b && e > b || d < c && e > c
                }
                var b = parseInt(gdS.node.style.top, 10);
                b += parseInt(gdS.node.style.height, 10) / 2;
                for (var c = 0; c < larrayOfDivs.length; c++) {
                    var g = larrayOfDivs[c].hy;
                    if (b >= g && b <= g + parseInt(larrayOfDivs[c].style.height, 10)) {
                        if (0 !== larrayOfDivs[c].c) break;
                        a(larrayOfDivs[c]) && qSC.clip(larrayOfDivs[c], gdS.node);
                        break
                    }
                }
                e(parseInt(gdS.node.style.left, 10), parseInt(gdS.node.style.top, 10)), gdS.node.style.top = gdS.node.hy + "px", 0 === gdS.node.c && (gdS.node.style.left = gdS.node.hx + "px"), 1 === gd ? (document.removeEventListener("touchmove", d, !0), document.removeEventListener("touchend", f, !0)) : (document.removeEventListener("mousemove", d, !0), document.removeEventListener("mouseup", f, !0)), gdS.node.style.opacity = 1, gdS.node.style.webkitTransform = "scale(1)", gdS.node.style.MozTransform = "scale(1)", gdS.node.style.OTransform = "scale(1)", gdS.node.style.msTransform = "scale(1)", gdS.node.style.zIndex = 0
            }
            this.initQuestionStruct = function() {
                for (var a = gv.q.info.split("|"), b = 0; b < a.length; b++) gv.q.sAray[b] = QH.LoadQuestionStruct(b)
            }, this.initQuestionSlide = function() {
                function a() {
                    if (0 !== gv.q) return void(this.style.opacity = .7);
                    gv.r.o.onclick = null
                }

                function b() {
                    if (0 !== gv.q) return void(this.style.opacity = 1);
                    1 === gv.g && (gv.r.o.onclick = ncc.n)
                }
                var d = anima["s" + gc].q;
                if (0 === d[0]) {
                    var e = qSC.HandleUnattendedQuestions();
                    return e > 0 ? e : (0 !== gv.s && objDopPhSco.End(), qSC.modifyResultSlide(gc) && qSC.updateXmlAtEnd(), gv.q.cmpltd = !0, typeof Player !== _undefined && typeof Player.sndFdBk !== _undefined && Player.sndFdBk(), !1)
                }
                qSC.modifySlideAtInit(d);
                var f = {},
                    g = {},
                    h = 0;
                if (typeof d[4] !== _undefined || gv.q.cmpltd) {
                    for (f = gv.o("s" + gc + "s" + d[3]), f.onclick = null, f.onmousedown = null, f.onmouseover = null, f.onmouseout = null, f.style.cursor = "default", f.style.opacity = 0, h = 0; h < d[2].length; h++) {
                        if ("object" == typeof d[2][h]) {
                            for (var i = 0; i < d[2][h].length; i++) {
                                var j = gv.o("s" + gc + "s" + d[2][h][i]);
                                j.style.cursor = "default", j.ontouchstart = null, j.ontouchmove = null, j.ontouchend = null, j.onmousedown = null, j.onclick = null, j.onmouseover = null, j.onmouseout = null
                            }
                            return !1
                        }
                        g = gv.o("s" + gc + "s" + d[2][h]), g.ontouchstart = null, g.ontouchmove = null, g.ontouchend = null, g.onmouseover = null, g.onmouseout = null, g.onclick = null, g.onmousedown = null, g.style.cursor = "default"
                    }
                    return !1
                }
                for (arrayOfDivs.length > 0 && arrayOfDivs.splice(0, arrayOfDivs.length), larrayOfDivs.length > 0 && larrayOfDivs.splice(0, larrayOfDivs.length), null !== d[3] && (f = gv.o("s" + gc + "s" + d[3]), f.style.cursor = "pointer", f.onmouseover = a, f.onmouseout = b, f.onclick = qsh.sb), h = 0; h < d[2].length; h++)
                    if ("object" != typeof d[2][h]) {
                        if (g = gv.o("s" + gc + "s" + d[2][h]), typeof g.c === _undefined && (g.hy = parseInt(g.style.top, 10), g.hx = parseInt(g.style.left, 10), g.c = 0, g.onmouseover = a, g.onmouseout = b, g.style.cursor = "pointer", 4 !== d[0] && 5 !== d[0] && qSC.checkUncheckOrder(g, d[0], 0, "")), 1 === d[0] || 2 === d[0]) g.onclick = function() {
                            for (var a = 0; a < arrayOfDivs.length; a++) arrayOfDivs[a].c = 0, qSC.checkUncheckOrder(arrayOfDivs[a], 1, 0, "");
                            this.c = 1, qSC.checkUncheckOrder(this, 1, 1, "")
                        };
                        else if (3 === d[0]) g.onclick = function() {
                            0 === this.c ? (this.c = 1, qSC.checkUncheckOrder(this, 3, 1, "")) : (this.c = 0, qSC.checkUncheckOrder(this, 3, 0, ""))
                        };
                        else if ((4 === d[0] || 5 === d[0]) && (1 === gd ? g.ontouchstart = function() {
                                c(event, this)
                            } : g.onmousedown = function() {
                                c(arguments[0] || event, this)
                            }, 0 === larrayOfDivs.length && 5 === d[0]))
                            for (var k = 0; k < d[2][d[2].length - 1].length; k++) {
                                var l = gv.o("s" + gc + "s" + d[2][d[2].length - 1][k]);
                                typeof l.c === _undefined && (l.hy = parseInt(l.style.top, 10), l.hx = parseInt(l.style.left, 10), l.c = 0), larrayOfDivs.push(l)
                            }
                        arrayOfDivs.push(g)
                    }
            }, this.sb = function() {
                var c = anima["s" + gc].q,
                    d = c[2];
                if (a(c)) {
                    for (var e = 0; e < arrayOfDivs.length; e++) {
                        var f = arrayOfDivs[e].id.split("s");
                        f = parseInt(f[f.length - 1], 10), f = d.indexOf(f), gv.q.sAray[c[1] - 1].Answers[f] = arrayOfDivs[e].c
                    }
                    QH.SubmitAnswer(gv.q.sAray[c[1] - 1]), qSC.updateAnsXml(gc);
                    var g = QH.GetResult();
                    g.qnsAtnd === g.tQns && (gv.q.cmpltd = !0), 0 !== gv.s && objDopPhSco.Submit(), b("b" === QH.GetStatus(c[1] - 1) ? 1 : 2)
                }
            }
        },
        qsh = new QuestionHandler,
        QuizSupportClass = function() {
            function a(a, b, c) {
                var d = b.slice(0);
                "object" == typeof d[d.length - 1] && d.pop(), d.sort(function(b, c) {
                    return parseInt(gv.o("s" + a + "s" + b).style.top, 10) - parseInt(gv.o("s" + a + "s" + c).style.top, 10)
                });
                for (var e = 0; e < c.length; e++) d[e] = gv.o("s" + a + "s" + d[e]).style.top;
                for (e = 0; e < c.length; e++) {
                    var f = c.indexOf(e);
                    gv.o("s" + a + "s" + b[f]).style.top = d[e]
                }
            }

            function b(a) {
                function b(a, b, c) {
                    var d = document.createElement("div"),
                        e = parseInt(a.style.left, 10) - 30;
                    4 === c && (e = parseInt(a.style.left, 10) - 70);
                    var f = parseInt(a.style.top, 10),
                        g = parseInt(a.style.height, 10),
                        h = f + (g - 22) / 2,
                        i = "height:24px;width:24px;top:" + h + "px;left:" + e + "px;";
                    d.setAttribute("style", i);
                    var j = document.createElement("img");
                    0 === b ? j.setAttribute("src", gv.d + cross + cfc.b("player/cross.png")) : j.setAttribute("src", gv.d + tick + cfc.b("player/tick.png")), d.appendChild(j), a.parentNode.appendChild(d)
                }
                var c = anima["s" + a].q;
                if (gv.q.sRv)
                    for (var d = c[2], e = c[1], f = c[0], g = new Question(e - 1, "a").Answers, h = gv.q.sAray[e - 1].Answers, i = gv.q.sAray[e - 1].Status, j = 0; j < d.length; j++) {
                        var k = gv.o("s" + a + "s" + d[j]);
                        switch (f) {
                            case 1:
                            case 2:
                            case 3:
                                1 === g[j] && b(k, 1, f);
                                break;
                            case 4:
                                g[j] === h[j] ? "a" === i ? b(k, 0, f) : b(k, 1, f) : b(k, 0, f);
                                break;
                            case 5:
                                if (null === k) break;
                                var l = d[d.length - 1][j];
                                k = gv.o("s" + a + "s" + l), g[j] === h[j] ? "a" === i ? b(k, 0, f) : b(k, 1, f) : b(k, 0, f)
                        }
                    }
            }
            this.loadXmlFrmTxt = function(a) {
                if (window.ActiveXObject) {
                    var b = new ActiveXObject("Microsoft.XMLDOM");
                    b.async = !1, b.loadXML(a), gv.q.zXml = b
                } else {
                    var c = new DOMParser;
                    gv.q.zXml = c.parseFromString(a, "text/xml")
                }
                var d, e = gv.q.zXml.getElementsByTagName("Track")[0];
                try {
                    d = e.attributes.getNamedItem("cmpltd").value
                } catch (a) {
                    d = "false", e.setAttribute("cmpltd", d)
                }
                gv.q.cmpltd = "true" === d
            }, this.loadQuizFromXml = function() {
                function a(a, b) {
                    for (var c = [], d = 0; d < a.length; d++) c.push(a[d]);
                    return c.sort(function(a, b) {
                        return parseInt(a.getAttribute("NewPos_y"), 10) - parseInt(b.getAttribute("NewPos_y"), 10)
                    }), c.indexOf(b)
                }
                if ("" !== gv.q.zXml) {
                    var b = gv.q.zXml.getElementsByTagName("Track")[0],
                        c = b.getElementsByTagName("Question"),
                        d = b.attributes.getNamedItem("status").value;
                    gv.q.cmpltd = "nc" !== d && "sd" !== d;
                    for (var e = 0, f = gv.q.info.split("|"), g = 0; g < c.length; g++) {
                        "Passed" === c[g].attributes.getNamedItem("Flag").value && (e += gv.q.sAray[g].Score);
                        var h = c[g].getElementsByTagName("Answer");
                        if (h.length > 0) {
                            var i = f[g],
                                j = parseInt(i.substring(8, 9), 10),
                                k = i.substring(10, i.length);
                            k = k.split("");
                            for (var l = 0; l < h.length; l++) gv.q.sAray[g].Answers[l] = 0 === j || 1 === j || 2 === j ? "Passed" === h[l].getAttribute("Flag") ? parseInt(k[l], 10) : 0 === parseInt(k[l], 10) ? 1 : 0 : a(h, h[l]);
                            QH.SubmitAnswer(gv.q.sAray[g])
                        } else "Failed" === c[g].attributes.getNamedItem("Flag").value && QH.SubmitAnswer(gv.q.sAray[g])
                    }
                    b.setAttribute("score", e)
                }
            }, this.modifySlideAtInit = function(c) {
                var d = c[1],
                    e = c[0],
                    f = gv.q.sAray[d - 1];
                if ((gv.q.cmpltd || "a" !== f.Status) && 0 !== e && 0 !== c[4]) {
                    c[4] = 0;
                    var g = c[2],
                        h = f.Answers,
                        i = new Question(d - 1, "a").Answers;
                    4 !== e && 5 !== e || "a" !== f.Status && a(gc, g, h);
                    for (var j = 0; j < h.length; j++)
                        if ("object" != typeof g[j]) {
                            var k = gv.o("s" + gc + "s" + g[j]);
                            switch (e) {
                                case 1:
                                case 2:
                                case 3:
                                    if ("a" === f.Status) qSC.checkUncheckOrder(k, e, 0, "");
                                    else {
                                        if (!gv.q.sRv) {
                                            1 === h[j] ? qSC.checkUncheckOrder(k, e, 1, "") : qSC.checkUncheckOrder(k, e, 0, "");
                                            break
                                        }
                                        h[j] === i[j] ? 1 === i[j] ? qSC.checkUncheckOrder(k, e, h[j], "g") : qSC.checkUncheckOrder(k, e, i[j], "") : qSC.checkUncheckOrder(k, e, h[j], "r")
                                    }
                                    break;
                                case 4:
                                    if (!gv.q.sRv) break;
                                    "a" === f.Status ? qSC.checkUncheckOrder(k, e, i[j] + 1, "red") : h[j] === i[j] ? qSC.checkUncheckOrder(k, e, h[j] + 1, "green") : qSC.checkUncheckOrder(k, e, i[j] + 1, "red");
                                    break;
                                case 5:
                                    if ("a" === f.Status) gv.q.sRv && qSC.checkUncheckOrder(k, e, i[j] + 1, "red");
                                    else {
                                        var l = g[g.length - 1];
                                        qSC.clip(gv.o("s" + gc + "s" + l[j]), k), gv.q.sRv && (h[j] === i[j] ? qSC.checkUncheckOrder(k, e, h[j] + 1, "green") : qSC.checkUncheckOrder(k, e, i[j] + 1, "red"))
                                    }
                            }
                        } b(gc)
                }
            }, this.updateAnsXml = function(a) {
                if ("" !== gv.q.zXml) {
                    var b = anima["s" + a].q,
                        c = b[2],
                        d = b[1],
                        e = new Question(d - 1, "a"),
                        f = "b" === gv.q.sAray[d - 1].Status ? "Passed" : "Failed",
                        g = gv.q.zXml.createElement("Question");
                    g.setAttribute("Index", d), g.setAttribute("Flag", f);
                    for (var h = 0; h < e.Answers.length; h++) {
                        var i = gv.q.zXml.createElement("Answer");
                        e.Answers[h] === gv.q.sAray[d - 1].Answers[h] ? i.setAttribute("Flag", "Passed") : i.setAttribute("Flag", "Failed"), i.setAttribute("NewPos_y", parseInt(gv.o("s" + a + "s" + c[h]).style.top, 10)), g.appendChild(i)
                    }
                    var j = gv.q.zXml.getElementsByTagName("Track")[0];
                    j.setAttribute("time", zenler.GetTime(selectedContentIndex)), j.setAttribute("currentpageIndex", gc), j.setAttribute("currentquestionindex", d);
                    var k = parseFloat(j.attributes.getNamedItem("score").value);
                    "Passed" === f && (k += gv.q.sAray[d - 1].Score), j.setAttribute("score", k), j.setAttribute("status", "sd");
                    var l = j.getElementsByTagName("Question")[d - 1];
                    j.replaceChild(g, l);
                    var m, n = gv.q.zXml;
                    m = window.ActiveXObject ? n.xml : (new XMLSerializer).serializeToString(n), zenler.UpdateNodeContent(m)
                }
            }, this.updateXmlAtEnd = function() {
                if ("" !== gv.q.zXml) {
                    var a = gv.q.zXml.getElementsByTagName("Track")[0];
                    a.setAttribute("currentpageIndex", gc), a.setAttribute("currentquestionindex", a.parentNode.attributes.getNamedItem("questioncount").value);
                    QH.GetResult().Status ? a.setAttribute("status", "pd") : a.setAttribute("status", "fd");
                    var b;
                    if (window.ActiveXObject) {
                        b = gv.q.zXml.xml
                    } else b = (new XMLSerializer).serializeToString(gv.q.zXml);
                    zenler.UpdateNodeContent(b)
                }
            }, this.modifyResultSlide = function(a) {
                function b(a, b) {
                    if (null !== (a = gv.o("s" + gc + "s" + a))) {
                        var c = a.getElementsByTagName("pre");
                        if (c.length > 0) c[c.length - 1].innerHTML += " : " + b;
                        else {
                            var d = document.createElement("pre"),
                                e = parseInt(a.style.height, 10),
                                f = a.style.width,
                                g = "left:" + f + ";top:" + e / 4 + "px;font-weight:bold;";
                            d.setAttribute("style", g), d.innerHTML = " : " + b, a.appendChild(d)
                        }
                    }
                }

                function c(a, b) {
                    var c, d = "s" + gc + "s" + a,
                        e = 1,
                        f = [];
                    for (c = gv.o(d), c && (c.style.display = b); null !== gv.o(d + "p" + e);) f[f.length] = gv.o(d + "p" + e), e++;
                    for (e = 0; e < f.length; e++) f[e] && (f[e].style.display = b)
                }
                var d = anima["s" + a].q;
                if (typeof d[4] !== _undefined) return !1;
                var e = QH.GetResult(),
                    f = d[1];
                return b(f[0], e.tQns), b(f[1], e.tScore), b(f[2], e.pRate + " %"), b(f[3], e.qnsAtnd), b(f[4], e.cAnswrs), b(f[5], e.wAnswrs), b(f[6], e.yScore), null !== f[8] && null !== gv.o("s" + gc + "s" + f[7]) && (e.Status ? (c(f[7], "block"), c(f[8], "none")) : (c(f[7], "none"), c(f[8], "block"))), d[4] = 0, !0
            }, this.HandleUnattendedQuestions = function() {
                function a(a) {
                    for (var b = 1; b < gv.t; b++) {
                        var c = anima["s" + b];
                        if (typeof(c = c.q) !== _undefined && c[1] === a) return b
                    }
                    return 0
                }
                if (gv.q.cmpltd) return 0;
                if (1 === anima["s" + gv.t].q[5]) return 0;
                for (var b = 0; b < gv.q.sAray.length; b++)
                    if ("a" === gv.q.sAray[b].Status) {
                        var c = function() {
                            this.yes = function() {
                                anima["s" + gv.t].q[5] = 0
                            }, this.no = function() {
                                anima["s" + gv.t].q[5] = 1, ncc.z(gv.t, !1)
                            }
                        };
                        return Player.ShowMsg('You have not attended one or more questions.\n\nClick "Yes" to attend remaining questions. \nClick "No" to finish the quiz without attending the remaining questions.', "Zenler", "yesno", new c), a(gv.q.sAray[b].Index)
                    } return 0
            }, this.checkUncheckOrder = function(a, b, c, d) {
                for (var e = a.getElementsByTagName("div"), f = null, g = 0; g < e.length; g++)
                    if (e[g].id.indexOf("qc") > 0) {
                        f = e[g];
                        break
                    } null === f && (f = qSC.addDiv(a, a.id + "qc", 0, 0, b));
                var h, i = 0;
                switch (f.className = "", b) {
                    case 1:
                    case 2:
                        f.className = 1 === c ? "DOPrOn" + d : "DOPrOff" + d;
                        break;
                    case 3:
                        f.className = 1 === c ? "DOPtOn" + d : "DOPtOff" + d;
                        break;
                    case 4:
                        if (c < 0) break;
                        i = parseInt(a.style.height, 10), h = "" === f.innerHTML.trim(" ") ? qSC.addPre(f, c, i) : f.getElementsByTagName("pre")[0], h.style.color = d, f.style.left = "20px";
                        break;
                    case 5:
                        if (c < 0) break;
                        i = parseInt(a.style.height, 10), h = "" === f.innerHTML.trim(" ") ? qSC.addPre(f, c, i) : f.getElementsByTagName("pre")[0], h.style.color = d, f.style.left = "45px"
                }
            }, this.addDiv = function(a, b, c, d, e) {
                var f = document.createElement("div");
                return 4 !== e && 5 !== e || f.setAttribute("style", "top:" + c + "px;left:" + d + "px;"), f.setAttribute("id", b), a.appendChild(f), f
            }, this.addPre = function(a, b, c) {
                var d = document.createElement("pre");
                return d.setAttribute("style", "font-size:20px;font-family:tahoma;font-weight:bold;"), d.innerHTML = b, a.appendChild(d), d.style.top = (c - 24) / 2 + "px", d
            }, this.clip = function(a, b) {
                var c = typeof a.hx === _undefined ? a.style.left : a.hx;
                c = parseInt(c, 10);
                var d = parseInt(a.style.width, 10),
                    e = parseInt(typeof b.hx === _undefined ? b.style.left : b.hx, 10),
                    f = parseInt(b.style.width, 10),
                    g = c + (e + f - c) / 2,
                    h = f - d;
                a.style.left = g - d + "px", b.style.left = g - h - 10 + "px", a.c = b.id, b.c = a.id
            }, this.unclip = function(a) {
                if (0 !== a.c) {
                    var b = gv.o(a.c);
                    a.c = 0, b.c = 0, a.style.left = a.hx + "px", b.style.left = b.hx + "px"
                }
            }, this.findPos = function(a) {
                var b = 0,
                    c = 0;
                if (a.offsetParent)
                    do {
                        b += a.offsetLeft, c += a.offsetTop, a = a.offsetParent
                    } while (null !== a);
                return [b, c]
            }
        },
        qSC = new QuizSupportClass,
        QuizHandler = function() {
            this.LoadQuestionStruct = function(a) {
                return new Question(a, "s")
            }, this.GetStatus = function(a) {
                var b = -1;
                return null !== gv.q.sAray[a] && (b = gv.q.sAray[a].Status), b
            }, this.SubmitAnswer = function(a) {
                a.Status = "b";
                for (var b = a.Index - 1, c = new Question(b, "a"), d = 0; d < c.Answers.length; d++)
                    if (c.Answers[d] != a.Answers[d]) {
                        a.Status = "c";
                        break
                    } gv.q.sAray[b] = a
            }, this.GetResult = function() {
                for (var a = gv.q.sAray.length, b = 0, c = 0, d = 0, e = 0, f = 0; f < a; f++) {
                    var g = gv.q.sAray[f];
                    b += g.Score, "b" == g.Status ? (c++, e += g.Score) : "c" == g.Status && d++
                }
                var h = c + d;
                return {
                    Status: e / b * 100 >= gv.q.psRate,
                    tQns: a,
                    tScore: b,
                    pRate: gv.q.psRate,
                    qnsAtnd: h,
                    cAnswrs: c,
                    wAnswrs: d,
                    yScore: e
                }
            }
        },
        Question = function(a, b) {
            var c = gv.q.info.split("|"),
                d = c[a];
            this.Index = parseInt(d.substring(0, 3), 10), this.Score = parseFloat(d.substring(3, 8)), this.Type = parseInt(d.substring(8, 9)), this.Status = "a", this.Answers = [];
            for (var e = 0, f = 10; f < d.length; f++, e++) this.Answers[e] = "s" == b ? 0 : parseInt(d.substring(f, f + 1), 16)
        },
        QH = new QuizHandler,
        DopPhSco = function(a) {
            var b;
            this.scormendStatus = !1;
            var c, d = function() {
                    this.Load = function() {
                        c = new f, 0 === gv.q ? g.Load() : i.Load(), window.onunload = d.onUnload
                    };
                    var a = function() {
                            function a(a) {
                                var b = a % 60;
                                a -= b;
                                var c = a % 3600;
                                a -= c, b = Math.round(100 * b) / 100;
                                var d = "" + b,
                                    e = d,
                                    f = ""; - 1 != d.indexOf(".") && (e = d.substring(0, d.indexOf(".")), f = d.substring(d.indexOf(".") + 1, d.length)), e.length < 2 && (e = "0" + e), d = e, f.length && (d = d + "." + f);
                                var g;
                                g = a % 3600 != 0 ? 0 : a / 3600;
                                var h;
                                return h = c % 60 != 0 ? 0 : c / 60, ("" + g).length < 2 && (g = "0" + g), ("" + h).length < 2 && (h = "0" + h), g + ":" + h + ":" + d
                            }
                            this.InitiateTimer = function() {
                                b = (new Date).getTime()
                            }, this.onUnload = function() {
                                gv.t !== gc && (c.doLMSSetValue("cmi.core.exit", "suspend"), quit())
                            }, this.Quit = function() {
                                GetTime(), c.doLMSCommit(), c.doLMSFinish()
                            }, GetTime = function() {
                                var d = "00:00:00.0";
                                if (0 !== b) {
                                    d = a(((new Date).getTime() - b) / 1e3)
                                }
                                c.doLMSSetValue("cmi.core.session_time", d)
                            }
                        },
                        d = new a,
                        e = function() {
                            function a(a) {
                                c.doLMSSetValue("cmi.core.lesson_status", a), "completed" == a && (a = "passed", c.doLMSSetValue("cmi.core.lesson_status", a))
                            }
                            this.Load = function() {
                                c.doLMSInitialize();
                                var a = c.doLMSGetValue("cmi.core.lesson_status"),
                                    b = c.doLMSGetValue("cmi.core.lesson_location");
                                "" !== b && null !== b || (b = 1, this.UpdateLesson(1, gv.t)), scormGoTo(b), "completed" == a || "passed" == a ? this.scormendStatus = !0 : c.doLMSSetValue("cmi.core.lesson_status", "incomplete"), d.InitiateTimer(), c.doLMSCommit(), this.UpdateLesson(b, gv.t)
                            }, this.UpdateLesson = function(b, d) {
                                if (!this.scormendStatus) {
                                    c.doLMSSetValue("cmi.core.lesson_location", b);
                                    var e = b / d * 100;
                                    e = Math.round(100 * e) / 100, c.doLMSSetValue("cmi.core.score.raw", e);
                                    var f;
                                    f = 100 == e ? "completed" : "incomplete", a(f), c.doLMSCommit()
                                }
                            }
                        },
                        g = new e,
                        h = function() {
                            function a(a, b) {
                                for (a += ""; a.length < b;) a = "0" + a;
                                return a
                            }

                            function b(b) {
                                return b = b.toFixed(2), b = a(b, 5)
                            }
                            this.Load = function() {
                                c.doLMSInitialize();
                                var a = c.doLMSGetValue("cmi.core.lesson_location");
                                null !== a && "" !== a || (a = 1), scormGoTo(a), c.doLMSSetValue("cmi.core.lesson_location", a);
                                var b = c.doLMSGetValue("cmi.core.lesson_status");
                                "failed" == b || "passed" == b || "completed" == b ? b = "completed" : (b = "incomplete", c.doLMSSetValue("cmi.core.lesson_status", b)), gv.q.cmpltd = "incomplete" != b;
                                var e = c.doLMSGetValue("cmi.suspend_data");
                                "" === e || null === e ? (qsh.initQuestionStruct(), e = createString(gv.q.sAray), c.doLMSSetValue("cmi.suspend_data", e)) : gv.q.sAray = createArray(e), QH.GetResult().Status ? gv.q.pasd = !0 : gv.q.pasd = !1, c.doLMSCommit(), d.InitiateTimer()
                            }, this.Submit = function() {
                                var a = QH.GetResult(),
                                    b = a.yScore / a.tScore * 100;
                                b = Math.round(100 * b) / 100, c.doLMSSetValue("cmi.core.score.raw", b);
                                var d = createString(gv.q.sAray);
                                c.doLMSSetValue("cmi.suspend_data", d), c.doLMSSetValue("cmi.core.lesson_location", gc), a.tQns == a.qnsAtnd && (gv.q.cmpltd = !0);
                                var e;
                                e = gv.q.cmpltd ? "completed" : "incomplete", c.doLMSSetValue("cmi.core.lesson_status", e);
                                var f;
                                a.Status ? (f = "passed", c.doLMSSetValue("cmi.core.lesson_status", f)) : gv.q.cmpltd && (f = "failed", c.doLMSSetValue("cmi.core.lesson_status", f)), c.doLMSCommit()
                            }, this.End = function() {
                                var a, b = QH.GetResult();
                                a = b.Status ? "passed" : "failed";
                                var d = b.yScore / b.tScore * 100;
                                d = Math.round(100 * d) / 100, c.doLMSSetValue("cmi.core.score.raw", d), c.doLMSSetValue("cmi.core.lesson_status", a), c.doLMSCommit()
                            }, this.createString = function(c) {
                                for (var d = "", e = 0; e < c.length; e++) {
                                    d += a(c[e].Index, 3) + b(c[e].Score) + c[e].Status + c[e].Type + c[e].Answers.length;
                                    for (var f = 0; f < c[e].Answers.length; f++) d += c[e].Answers[f];
                                    d += "|"
                                }
                                return d.substring(0, d.length - 1)
                            }, this.createArray = function(a) {
                                for (var b = a.split("|"), c = [], d = 0; d < b.length; d++) c[d] = new e(b[d]);
                                return c
                            };
                            var e = function(a) {
                                this.Index = parseInt(a.substring(0, 3), 10), this.Score = parseFloat(a.substring(3, 8)), this.Status = a.substring(8, 9), this.Type = parseInt(a.substring(9, 10), 10), a = a.substring(11, a.length);
                                var b = a.split("");
                                this.Answers = [];
                                for (var c = 0; c < b.length; c++) this.Answers[c] = parseInt(b[c], 10)
                            }
                        },
                        i = new h;
                    this.Quit = d.Quit, this.UpdateLesson = g.UpdateLesson, this.End = i.End, this.Submit = i.Submit
                },
                e = function() {
                    this.Load = function() {
                        c = new g, 0 === gv.q ? f.Load() : i.Load(), window.onunload = d.onUnload
                    };
                    var a = function() {
                            function a() {
                                b = (new Date).getTime()
                            }

                            function e() {
                                gv.t !== gc && (c.doSetValue("cmi.exit", "suspend"), f())
                            }

                            function f() {
                                d.GetTime(), c.doCommit(), c.doTerminate()
                            }

                            function g() {
                                var a = "PT00H00M00S";
                                if (0 != b) {
                                    a = h(((new Date).getTime() - b) / 1e3)
                                }
                                c.doSetValue("cmi.session_time", a)
                            }

                            function h(a) {
                                var b = a % 60;
                                a -= b;
                                var c = a % 3600;
                                a -= c, b = Math.round(100 * b) / 100;
                                var d = b + "",
                                    e = d,
                                    f = ""; - 1 != d.indexOf(".") && (e = d.substring(0, d.indexOf(".")), f = d.substring(d.indexOf(".") + 1, d.length)), e.length < 2 && (e = "0" + e), d = e, f.length && (d = d + "." + f);
                                var g;
                                g = a % 3600 != 0 ? 0 : a / 3600;
                                var h;
                                return h = c % 60 != 0 ? 0 : c / 60, ("" + g).length < 2 && (g = "0" + g), ("" + h).length < 2 && (h = "0" + h), "PT" + g + "H" + h + "M" + d + "S"
                            }
                            this.InitiateTimer = a, this.GetTime = g, this.onUnload = e, this.Quit = f
                        },
                        d = new a,
                        e = function() {
                            function a() {
                                c.doInitialize();
                                var a = c.doGetValue("cmi.completion_status"),
                                    e = c.doGetValue("cmi.location");
                                "" !== e && null !== e || (e = 1, b(1, gv.t)), scormGoTo(e), "completed" == a ? this.scormendStatus = !0 : c.doSetValue("cmi.completion_status", "incomplete"), d.InitiateTimer(), c.doCommit(), b(e, gv.t)
                            }

                            function b(a, b) {
                                if (!this.scormendStatus) {
                                    c.doSetValue("cmi.location", a);
                                    var d = a / b * 100;
                                    e(d);
                                    var g;
                                    g = 100 == d ? "completed" : "incomplete", f(g), c.doCommit()
                                }
                            }

                            function e(a) {
                                c.doSetValue("cmi.score.min", 0), c.doSetValue("cmi.score.max", 100), c.doSetValue("cmi.score.raw", a), c.doSetValue("cmi.score.scaled", a / 100), c.doSetValue("cmi.progress_measure", a / 100)
                            }

                            function f(a) {
                                c.doSetValue("cmi.completion_status", a), a = "completed" == a ? "passed" : "failed", c.doSetValue("cmi.success_status", a)
                            }
                            this.Load = a, this.UpdateLesson = b
                        },
                        f = new e,
                        h = function() {
                            function a() {
                                c.doInitialize();
                                var a = c.doGetValue("cmi.location");
                                null !== a && "" !== a || (a = 1), scormGoTo(a), c.doSetValue("cmi.location", a);
                                var b = c.doGetValue("cmi.completion_status");
                                "not_attempted" !== b && "unknown" !== b && "" !== b || (b = "incomplete", c.doSetValue("cmi.completion_status", b)), gv.q.cmpltd = "incomplete" != b;
                                var e = c.doGetValue("cmi.suspend_data");
                                "" === e || null === e ? (qsh.initQuestionStruct(), e = f(gv.q.sAray), c.doSetValue("cmi.suspend_data", e)) : gv.q.sAray = g(e), "completed" != b && gc == gv.t && c.doSetValue("cmi.completion_status", "completed");
                                var h = c.doGetValue("cmi.success_status");
                                gv.q.pasd = "passed" == h, c.doCommit(), d.InitiateTimer()
                            }

                            function b() {
                                var a = QH.GetResult(),
                                    b = a.yScore,
                                    e = a.yScore / a.tScore;
                                c.doSetValue("cmi.score.min", 0), c.doSetValue("cmi.score.max", a.tScore), c.doSetValue("cmi.score.raw", b), c.doSetValue("cmi.score.scaled", e);
                                var g = f(gv.q.sAray);
                                c.doSetValue("cmi.suspend_data", g), c.doSetValue("cmi.location", gc), a.tQns == a.qnsAtnd && (gv.q.cmpltd = !0);
                                var h;
                                h = gv.q.cmpltd ? "completed" : "incomplete", c.doSetValue("cmi.completion_status", h);
                                var i;
                                i = a.Status ? "passed" : gv.q.cmpltd ? "failed" : "unknown", c.doSetValue("cmi.success_status", i), c.doCommit(), gv.q.cmpltd && d.Quit()
                            }

                            function e() {
                                var a = QH.GetResult(),
                                    b = a.yScore,
                                    e = a.yScore / a.tScore;
                                c.doSetValue("cmi.score.min", 0), c.doSetValue("cmi.score.max", a.tScore), c.doSetValue("cmi.score.raw", b), c.doSetValue("cmi.score.scaled", e), c.doSetValue("cmi.location", gc), c.doSetValue("cmi.completion_status", "completed");
                                var f;
                                f = a.Status ? "passed" : "failed", c.doSetValue("cmi.success_status", f), c.doCommit(), d.Quit()
                            }

                            function f(a) {
                                for (var b = "", c = 0; c < a.length; c++) {
                                    b += h(a[c].Index, 3) + i(a[c].Score) + a[c].Status + a[c].Type + a[c].Answers.length;
                                    for (var d = 0; d < a[c].Answers.length; d++) b += a[c].Answers[d];
                                    b += "|"
                                }
                                return b.substring(0, b.length - 1)
                            }

                            function g(a) {
                                for (var b = a.split("|"), c = [], d = 0; d < b.length; d++) c[d] = new j(b[d]);
                                return c
                            }

                            function h(a, b) {
                                for (a += ""; a.length < b;) a = "0" + a;
                                return a
                            }

                            function i(a) {
                                return a = a.toFixed(2), a = h(a, 5)
                            }
                            var j = function(a) {
                                this.Index = parseInt(a.substring(0, 3), 10), this.Score = parseFloat(a.substring(3, 8)), this.Status = a.substring(8, 9), this.Type = parseInt(a.substring(9, 10), 10), a = a.substring(11, a.length);
                                var b = a.split("");
                                this.Answers = [];
                                for (var c = 0; c < b.length; c++) this.Answers[c] = parseInt(b[c], 10)
                            };
                            this.createArray = g, this.createString = f, this.Load = a, this.Submit = b, this.End = e
                        },
                        i = new h;
                    this.Quit = d.Quit, this.UpdateLesson = f.UpdateLesson, this.End = i.End, this.Submit = i.Submit
                },
                f = function() {
                    function a() {
                        var a = k();
                        if (null === a) return alert("Unable to locate the LMS's API Implementation.\nLMSInitialize was not successful."), "false";
                        var b = a.LMSInitialize("");
                        return "true" != b.toString() && j(), b.toString()
                    }

                    function b() {
                        var a = k(),
                            b = "";
                        return null === a ? (alert("Unable to locate the LMS's API Implementation.\nLMSFinish was not successful."), "false") : (b = a.LMSFinish(""), "true" != b.toString() && j(), b.toString())
                    }

                    function c(a) {
                        var b = k();
                        if (null === b) return alert("Unable to locate the LMS's API Implementation.\nLMSGetValue was not successful."), "";
                        var c = b.LMSGetValue(a),
                            d = b.LMSGetLastError().toString();
                        if (d != o._NoError) {
                            var e = b.LMSGetErrorString(d);
                            return alert("LMSGetValue(" + a + ") failed. \n" + e), ""
                        }
                        return c.toString()
                    }

                    function d(a, b) {
                        var c = k();
                        if (null === c) return void alert("Unable to locate the LMS's API Implementation.\nLMSSetValue was not successful.");
                        "true" != c.LMSSetValue(a, b).toString() && j()
                    }

                    function e() {
                        var a = k(),
                            b = "";
                        return null === a ? (alert("Unable to locate the LMS's API Implementation.\nLMSCommit was not successful."), "false") : ("true" != (b = a.LMSCommit("")) && j(), b.toString())
                    }

                    function f() {
                        var a = k();
                        return null === a && alert("Unable to locate the LMS's API Implementation.\nLMSGetLastError was not successful."), a.LMSGetLastError().toString()
                    }

                    function g(a) {
                        var b = k();
                        return null === b && alert("Unable to locate the LMS's API Implementation.\nLMSGetErrorString was not successful."), b.LMSGetErrorString(a).toString()
                    }

                    function h(a) {
                        var b = k();
                        return null === b && alert("Unable to locate the LMS's API Implementation.\nLMSGetDiagnostic was not successful."), b.LMSGetDiagnostic(a).toString()
                    }

                    function i() {
                        var a = k();
                        return null === a ? (alert("Unable to locate the LMS's API Implementation.\nLMSIsInitialized() failed."), !1) : (a.LMSGetValue("cmi.core.student_name"), a.LMSGetLastError().toString() != o._NotInitialized)
                    }

                    function j() {
                        var a = k();
                        if (null === a) return alert("Unable to locate the LMS's API Implementation.\nCannot determine LMS error code."), null;
                        var b = a.LMSGetLastError().toString();
                        if (b != o._NoError) {
                            var c = a.LMSGetErrorString(b);
                            !0 === n && (c += "\n", c += a.LMSGetDiagnostic(null)), alert(c)
                        }
                        return b
                    }

                    function k() {
                        return null === p && (p = m()), p
                    }

                    function l(a) {
                        for (; null == a.API && null != a.parent && a.parent != a;) {
                            if (++q > 7) return alert("Error finding API -- too deeply nested."), null;
                            a = a.parent
                        }
                        return a.API
                    }

                    function m() {
                        var a = l(window);
                        return null == a && null != window.opener && typeof window.opener != _undefined && (a = l(window.opener)), null === a && alert("Unable to find an API adapter"), a
                    }
                    var n = !1,
                        o = {
                            _NoError: 0,
                            _NotInitialized: 301
                        },
                        p = null,
                        q = 0;
                    this.doLMSFinish = b, this.doLMSInitialize = a, this.doLMSGetValue = c, this.doLMSSetValue = d, this.doLMSCommit = e, this.doLMSGetLastError = f, this.doLMSGetErrorString = g, this.doLMSGetDiagnostic = h, this.LMSIsInitialized = i
                },
                g = function() {
                    function a() {
                        var a = b();
                        if (null === a) return alert("Unable to locate the LMS's API Implementation.\nCannot determine LMS error code."), null;
                        var c = a.GetLastError().toString();
                        if (c != f._NoError) {
                            var d = a.GetErrorString(c);
                            !0 === e && (d += "\n", d += a.GetDiagnostic(null)), alert(d)
                        }
                        return c
                    }

                    function b() {
                        return null == g && (g = d()), g
                    }

                    function c(a) {
                        for (var b = 0; null == a.API_1484_11 && null != a.parent && a.parent != a && b <= h;) b++, a = a.parent;
                        return a.API_1484_11
                    }

                    function d() {
                        var a = null;
                        return null != window.parent && window.parent != window && (a = c(window.parent)), null == a && null != window.top.opener && (a = c(window.top.opener)), a
                    }
                    var e = !1,
                        f = {
                            _NoError: 0
                        },
                        g = null;
                    this.doInitialize = function() {
                        var c = b();
                        if (null === c) return alert("Unable to locate the LMS's API Implementation.\nInitialize was not successful."), "false";
                        var d = c.Initialize("");
                        return "true" != d.toString() && a(), d.toString()
                    }, this.doTerminate = function() {
                        var c = b(),
                            d = "";
                        return null === c ? (alert("Unable to locate the LMS's API Implementation.\nTerminate was not successful."), "false") : (d = c.Terminate(""), "true" != d.toString() && a(), d.toString())
                    }, this.doGetValue = function(a) {
                        var c = b();
                        if (null === c) return alert("Unable to locate the LMS's API Implementation.\nGetValue was not successful."), "";
                        var d = c.GetValue(a);
                        return c.GetLastError().toString() != f._NoError ? "" : d.toString()
                    }, this.doSetValue = function(c, d) {
                        var e = b(),
                            f = "";
                        if (null === e) return alert("Unable to locate the LMS's API Implementation.\nSetValue was not successful."), null;
                        if (f = e.SetValue(c, d), "true" != f.toString()) {
                            f = a()
                        }
                        return f
                    }, this.doCommit = function() {
                        var c = b(),
                            d = "";
                        return null === c ? (alert("Unable to locate the LMS's API Implementation.\nCommit was not successful."), "false") : ("true" != (d = c.Commit("")) && a(), d.toString())
                    }, this.doGetLastError = function() {
                        var a = b();
                        return null === a ? (alert("Unable to locate the LMS's API Implementation.\nGetLastError was not successful."), null) : a.GetLastError().toString()
                    }, this.doGetErrorString = function(a) {
                        var c = b();
                        return null === c && alert("Unable to locate the LMS's API Implementation.\nGetErrorString was not successful."), c.GetErrorString(a).toString()
                    }, this.doGetDiagnostic = function(a) {
                        var c = b();
                        return null === c && alert("Unable to locate the LMS's API Implementation.\nGetDiagnostic was not successful."), c.GetDiagnostic(a).toString()
                    }, this.LMSIsInitialized = function() {
                        var a = b();
                        return null === a ? (alert("Unable to locate the LMS's API Implementation.\nlmsIsInitialized() failed."), !1) : (a.GetValue("cmi.core.student_name"), a.GetLastError().toString() != _NotInitialized)
                    };
                    var h = 500
                };
            return 2004 === a ? new e : new d
        },
        StylePpty = function() {};
    StylePpty.Transform = function() {
        for (var a = "transform", b = ["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"], c = document.documentElement, d = b.shift(); d;) {
            if ("string" == typeof c.style[d]) return a = d, d;
            d = b.shift()
        }
        return a
    }(), StylePpty.getComputedStyle = function() {
        return typeof window.getComputedStyle === _undefined ? function(a, b) {
            if (typeof a.tagName !== _undefined) return a.currentStyle[b]
        } : function(a, b) {
            if (typeof a.tagName !== _undefined) return document.defaultView.getComputedStyle(a, null)[b]
        }
    }();
    var ClntH = function(a) {
            for (var b = a.childNodes, c = -1, d = -1, e = {
                    h: 0,
                    w: 0
                }, f = 0; f < b.length; f++) {
                var g = b[f];
                1 == g.nodeType && "PRE" == g.nodeName && (g.style.left != d && (e.w += parseFloat(g.scrollWidth), d = g.style.left), g.style.top != c && (e.h += parseFloat(g.scrollHeight), c = g.style.top))
            }
            return e
        },
        Banim = function() {
            function a(a, b) {
                try {
                    for (var c = a.sV.d.getElementsByTagName("pre"), d = c.length, e = 0; e < d; e++) {
                        c[e].style.color = b[e]
                    }
                } catch (a) {}
            }

            function b(a, b) {
                try {
                    for (var c = a.sV.d.getElementsByTagName("pre"), d = c.length, e = 0; e < d; e++) {
                        c[e].style.textDecoration = b[e]
                    }
                } catch (a) {}
            }
            this.blks = [], this.gtime = function() {
                var a = gt;
                return (this.c.c3 < 0 && this.rpdCnt > 0 || this.c.t) && (a = (new Date).getTime()), a
            }, this.initBanim = function(a) {
                return typeof this.sV === _undefined && (this.sV = new c(this), this.IniTSd = this.sV.IniTSd, this.IniTSd ? (this.sV.setTrasform(), this.rpdCnt = 0, this.initT = this.st = a, typeof this.c.c6 !== _undefined && (this.aSrc = gv.o(this.c.c6)), this.at = typeof this.c.e1 === _undefined ? 1 : this.c.e1, this.InitAnimBlocks(), !0) : void 0)
            }, this.InitAnimBlocks = function() {
                if (1 != this.at) {
                    var a = this,
                        b = 0,
                        c = 0,
                        d = 1;
                    for (a.blks = [];;) {
                        var e = a.c.e3,
                            f = [];
                        if (e && (f = e[c] + "b" + d), null != gv.o(f)) {
                            var g = a.st + a.c.e2 * b,
                                h = a.c,
                                i = {
                                    c0: f,
                                    c1: h.c1,
                                    c2: h.c2,
                                    c3: 0,
                                    c4: h.c4,
                                    c5: h.c5,
                                    c7: h.c7,
                                    s0: h.s0,
                                    s1: h.s1,
                                    s2: h.s2,
                                    s3: h.s3,
                                    s4: h.s4,
                                    s5: h.s5,
                                    s6: h.s6,
                                    v: 0,
                                    e0: 5,
                                    e1: 1,
                                    e2: h.e2,
                                    e3: 0
                                },
                                j = Animations[a.c.c5];
                            typeof j === _undefined && (j = Animations.Fade), a.blks[b] = new j(i);
                            a.blks[b].Initialize(g), b++, d++
                        } else {
                            if (!(typeof a.c.e3 !== _undefined && c + 1 < a.c.e3.length)) break;
                            c++, d = 1
                        }
                    }
                }
            }, this.resetBanim = function() {
                this.pozd = !1, this.stpd = !1;
                for (var a = 0; a < this.blks.length; a++) this.blks[a].pozd = !1, this.blks[a].stpd = !1
            }, this.pause = function() {
                this.pozd = !0;
                for (var a = 0; a < this.blks.length; a++) this.blks[a].pozd = !0
            }, this.stop = function() {
                this.pozd = !1, this.stpd = !0;
                for (var a = 0; a < this.blks.length; a++) this.blks[a].pozd = !1, this.blks[a].stpd = !0
            }, this.reset = function() {
                this.rpdCnt = 0, this.st = this.initT, this.stop(), this.stopCaS(), typeof this.dltCv !== _undefined && this.dltCv(), typeof this.mc !== _undefined && typeof this.mc.cvt !== _undefined && this.mc.cvt.clearRect(0, 0, this.w, this.h), typeof this.sV !== _undefined && this.sV.reset && this.sV.reset();
                for (var c = 0; c < this.blks.length; c++) this.blks[c].reset && this.blks[c].reset();
                typeof this.preColors !== _undefined && a(this, this.preColors), typeof this.ul !== _undefined && b(this, this.ul)
            }, this.stopCaS = function() {
                var a = this,
                    b = a.aSrc;
                if (typeof b !== _undefined) {
                    b.canPlayType && (b.paused || b.pause(), a.pozd || (b.currentTime = 0));
                    var c = au.findIndex(function(a) {
                        a[0].id, b.id
                    });
                    c > -1 && au.splice(c, 1)
                }
            }, this.playCaS = function() {
                var a = this,
                    b = a.aSrc;
                if (typeof b !== _undefined && b.paused && b.paused) {
                    if ((b.duration ? b.duration : 0) > b.currentTime) {
                        b.play();
                        au.findIndex(function(a) {
                            a[0].id, b.id
                        }) < 0 && (au[au.length] = [b, 1])
                    }
                }
            }, this.doRepeat = function() {
                this.rpdCnt++, this.rpdCnt < this.c.c3 || this.c.c3 < 0 ? (this.st = this.c.c3 < 0 ? this.gtime() : this.st + this.c.c2, this.stopCaS(), this.play()) : 1 == this.c.c8 && (this.sV.dpd.style.opacity = 0)
            }, this.setTranslate = function(a, b) {
                var c = StylePpty.Transform,
                    d = this.sV.d.style[c],
                    e = /translate\(+[^\)]+\)/,
                    f = "translate(" + a + "px," + b + "px)"; - 1 != d.search(e) ? d = d.replace(e, f) : null != d && (d = f + d), this.sV.d.style[c] = d
            }, this.getTranslate = function() {
                var a = {
                        x: 0,
                        y: 0
                    },
                    b = StylePpty.Transform,
                    c = this.sV.d.style[b],
                    d = /translate\(+[^\)]+\)/,
                    e = c.match(d);
                if (null != e) {
                    var f = e[0].match(/[0-9.-]+|[\d]+[^p]/g);
                    a.x = parseFloat(f[0]), a.y = parseFloat(f[1])
                }
                return a
            }, this.setScale = function(a, b) {
                var c = StylePpty.Transform,
                    d = this.sV.d.style[c],
                    e = /scale\(+[^\)]+\)/,
                    f = "scale(" + a + "," + b + ")"; - 1 != d.search(e) ? d = d.replace(e, f) : null != d && (d += f), this.sV.d.style[c] = d
            }, this.getScale = function() {
                var a = {
                        x: 1,
                        y: 1
                    },
                    b = StylePpty.Transform,
                    c = this.sV.d.style[b],
                    d = /scale\(+[^\)]+\)/,
                    e = c.match(d);
                if (null != e) {
                    var f = e[0].match(/[0-9.-]+|[\d]+[^p]/g);
                    a.x = parseFloat(f[0]), a.y = parseFloat(f[1])
                }
                return a
            }, this.setRotate = function(a) {
                var b = StylePpty.Transform,
                    c = this.sV.d.style[b],
                    d = /rotate\(+[^\)]+\)/,
                    e = "rotate(" + a + "deg)"; - 1 != c.search(d) ? c = c.replace(d, e) : null != c && (c += e), this.sV.d.style[b] = c
            }, this.getRotate = function() {
                var a = 0,
                    b = StylePpty.Transform,
                    c = this.sV.d.style[b],
                    d = /rotate\(+[^\)]+\)/,
                    e = c.match(d);
                if (null != e) {
                    var f = e[0].match(/[0-9.-]+|[\d]+[^d]/g);
                    a = parseFloat(f[0])
                }
                return a
            }, this.setSkewX = function(a) {
                var b = StylePpty.Transform,
                    c = this.sV.d.style[b],
                    d = /skewX\(+[^\)]+\)/,
                    e = "skewX(" + a + "deg)"; - 1 != c.search(d) ? c = c.replace(d, e) : null != c && (c += e), this.sV.d.style[b] = c
            }, this.getSkewX = function() {
                var a = 0,
                    b = StylePpty.Transform,
                    c = this.sV.d.style[b],
                    d = /skewX\(+[^\)]+\)/,
                    e = c.match(d);
                if (null != e) {
                    var f = e[0].match(/[0-9.-]+|[\d]+[^d]/g);
                    a = parseFloat(f[0])
                }
                return a
            }, this.plyBlockAnim = function() {
                function a() {
                    if (!(b.pozd || b.stpd || c >= b.blks.length)) {
                        for (;;) {
                            if (c >= b.blks.length) return;
                            var d = b.blks[c];
                            if (!(d.st <= b.gtime())) break;
                            d.play(), c++
                        }
                        Cbfun(a)
                    }
                }
                var b = this;
                if (1 != b.at) {
                    var c = 0;
                    Cbfun(a)
                }
            };
            var c = function(a) {
                if (this.p = a, this.IniTSd = !0, 5 != this.p.c.e0 ? (this.d = gv.o("s" + gc + "s" + this.p.c.c0), this.dpd = gv.o("s" + gc + "s" + this.p.c.c0 + "c"), this.dp = gv.o("s" + gpc + "s" + this.p.c.c0)) : (this.d = gv.o(this.p.c.c0), this.dpd = gv.o(this.p.c.c0 + "c")), null == this.d) return void(this.IniTSd = !1);
                if (null == this.dpd && (this.dpd = this.d), this.h = this.d.style.height ? parseFloat(this.d.style.height) : this.d.parentNode.style.height ? parseFloat(this.d.parentNode.style.height) : parseFloat(this.d.scrollHeight), this.w = this.d.style.width ? parseFloat(this.d.style.width) : this.d.parentNode.style.width ? parseFloat(this.d.parentNode.style.width) : parseFloat(this.d.scrollWidth), 0 === this.h || 0 === this.w) {
                    var b = ClntH(this.dpd);
                    this.h = b.h, this.w = b.w
                }
                this.l = this.d.style.left ? parseFloat(this.d.style.left) : parseFloat(this.d.parentNode.style.left), this.t = this.d.style.top ? parseFloat(this.d.style.top) : parseFloat(this.d.parentNode.style.top), this.op = parseFloat(StylePpty.getComputedStyle(this.dpd, "opacity")), this.st = gt, this.setTrasform = function() {
                    this.trns = this.p.getTranslate(), this.scl = this.p.getScale(), this.rta = this.p.getRotate(), this.skw = this.p.getSkewX()
                }, this.reset = function() {
                    this.d.style.height = this.h + "px", this.d.style.width = this.w + "px", this.d.style.left = this.l + "px", this.d.style.top = this.t + "px", this.dpd.style.opacity = this.op, this.p.setTranslate(this.trns.x, this.trns.y), this.p.setScale(this.scl.x, this.scl.y), this.p.setRotate(this.rta), this.p.setSkewX(this.skw)
                }
            }
        },
        Cv = function(a, b) {
            a *= gv.cs, b *= gv.cs, this.cv = document.createElement("canvas"), this.cv.height = b, this.cv.width = a, this.cv.style.height = this.cv.style.width = "100%", this.cvt = this.cv.getContext("2d"), this.cvt.imageSmoothingEnabled = !1, this.bdrawn = !1, this.drawCmpltDiv = function(a, b, c, d) {
                for (var e, f, g, h = a.childNodes, i = h.length, j = 0; j < i; j++)
                    if (e = h[j], 1 == e.nodeType && "IMG" == e.nodeName)
                        if (d && -1 == d && "/sb" == e.src.substr(e.src.lastIndexOf("/"), 3)) this.cvt.fillStyle = "rgba(255, 255, 255, 0.01)", this.cvt.fillRect(0, 0, this.cvt.canvas.width, this.cvt.canvas.height);
                        else if (!d || 1 != d || "/sb" == e.src.substr(e.src.lastIndexOf("/"), 3)) {
                    var k = StylePpty.getComputedStyle(a, "height"),
                        l = StylePpty.getComputedStyle(a, "width"),
                        m = StylePpty.getComputedStyle(a.parentNode, "height"),
                        n = StylePpty.getComputedStyle(a.parentNode, "width"),
                        o = k && "100%" != k ? parseFloat(k) : parseFloat(m),
                        p = l && "100%" != l ? parseFloat(l) : parseFloat(n);
                    o *= gv.cs, p *= gv.cs;
                    try {
                        this.cvt.drawImage(e, b, c, p, o)
                    } catch (a) {}
                }
                if (d && 1 == d) return void(this.bdrawn = !0);
                for (j = 0; j < i; j++)
                    if (e = h[j], 1 == e.nodeType && "PRE" == e.nodeName) {
                        f = e.style.left ? b + parseFloat(e.style.left) : b, g = e.style.top ? c + parseFloat(e.style.top) : c, f *= gv.cs, g *= gv.cs;
                        var q = parseInt(StylePpty.getComputedStyle(e, "letterSpacing"));
                        q *= gv.cs;
                        var r = parseFloat(StylePpty.getComputedStyle(e, "fontSize"));
                        r *= gv.cs;
                        var s = StylePpty.getComputedStyle(e, "fontStyle") + " " + StylePpty.getComputedStyle(e, "fontWeight") + " " + r + "px " + StylePpty.getComputedStyle(e, "fontFamily");
                        this.cvt.font = s, this.cvt.fillStyle = StylePpty.getComputedStyle(e, "color"), this.cvt.textBaseline = "top";
                        var t = parseInt(StylePpty.getComputedStyle(e, "lineHeight"));
                        t *= gv.cs;
                        var u = g;
                        u = g + .2 * t, isNaN(u) && (u = g);
                        for (var v = e.textContent, w = f, x = 0, y = 0; y < v.length; y++) {
                            var z = v[y];
                            this.cvt.fillText(z, w + x, u), x += this.cvt.measureText(z).width + q
                        }
                        var A = StylePpty.getComputedStyle(e, "textDecoration");
                        if ("underline" === A.split(" ")[0]) {
                            var B = g + r;
                            this.drawUline(this.cvt, e, f, B)
                        }
                    } for (j = 0; j < i; j++) {
                    e = h[j];
                    var C = StylePpty.getComputedStyle(e, "opacity");
                    if (1 == e.nodeType && "DIV" == e.nodeName && "0" != C) {
                        var D = StylePpty.getComputedStyle(e, "left"),
                            E = StylePpty.getComputedStyle(e, "top");
                        f = D ? b + parseFloat(D) : 0, g = E ? c + parseFloat(E) : 0, this.drawCmpltDiv(e, f, g)
                    }
                }
                this.bdrawn = !0
            }, this.drawUline = function(a, b, c, d) {
                var e = a.measureText(b.innerHTML).width;
                a.strokeStyle = StylePpty.getComputedStyle(b, "color"), a.lineWidth = 1, a.beginPath(), a.moveTo(c, d), a.lineTo(c + e, d), a.stroke()
            }, this.apndTo = function(a) {
                a.appendChild(this.cv)
            }, this.draw = function(a, b) {
                a.bdrawn && (b && this.cvt.clearRect(0, 0, this.cv.width, this.cv.height), this.cvt.drawImage(a.cv, 0, 0))
            }
        };
    Cv.tmpDrawText = function(a, b, c, d) {
        if (d.fct) {
            var e = a.getElementsByTagName("div");
            e.length > 0 && (a = e[0]);
            for (var f = a.childNodes, g = f.length, h = 0; h < g; h++) {
                var i = f[h];
                if (1 == i.nodeType && "PRE" == i.nodeName) {
                    nL = i.style.left ? b + parseFloat(i.style.left) : b, nT = i.style.top ? c + parseFloat(i.style.top) : c;
                    parseFloat(StylePpty.getComputedStyle(i, "fontSize"));
                    d.fct.font = StylePpty.getComputedStyle(i, "fontStyle") + " " + StylePpty.getComputedStyle(i, "fontWeight") + " " + StylePpty.getComputedStyle(i, "fontSize") + " " + StylePpty.getComputedStyle(i, "fontFamily"), d.fct.fillStyle = StylePpty.getComputedStyle(i, "color"), d.fct.textBaseline = "top", d.fct.fillText(i.textContent, nL, nT);
                    if ("underline" == StylePpty.getComputedStyle(i, "textDecoration")) {
                        var j = parseFloat(StylePpty.getComputedStyle(i, "fontSize")),
                            k = nT + j;
                        d.drawUline(d.fct, i, nL, k)
                    }
                }
            }
        }
    };
    var MskAnim = function() {
        this.initMskAnim = function(a) {
            return !!this.initBanim(a) && (this.h = this.sV.h, this.w = this.sV.w, this.im = new Image, this.bgcv = new Cv(this.w, this.h), this.frcv = new Cv(this.w, this.h), -1 == this.c.c4 ? this.bgcv.drawCmpltDiv(this.sV.d, 0, 0) : this.bgcv.drawCmpltDiv(this.sV.dpd, 0, 0), this.fct = this.frcv.cvt, this.cp = "destination-in", 2 == this.c.c4 && (this.cp = "destination-out"), this.w *= gv.cs, this.h *= gv.cs, !0)
        }, this.resetMskAnim = function() {
            this.pozd || (-1 == this.c.c4 ? this.frcv.apndTo(this.sV.d.parentNode) : this.frcv.apndTo(this.sV.d)), this.resetBanim()
        }, this.doAfterEffect = function() {
            -1 == this.c.c4 && (this.sV.d.style.opacity = 1, this.reset())
        }, this.dltCv = function() {
            try {
                2 == this.c.c4 && (this.sV.dpd.style.opacity = 0), 1 == this.c.c4 && (this.sV.dpd.style.opacity = 1), this.fct.clearRect(0, 0, this.w, this.h), -1 == this.c.c4 ? this.sV.d.parentNode.removeChild(this.frcv.cv) : this.sV.d.removeChild(this.frcv.cv)
            } catch (a) {}
        }
    };
    MskAnim.prototype = new Banim;
    var BCurve = function(a, b, c, d, e, f, g, h, i) {
            this.x0 = a, this.y0 = b, this.x1 = c, this.y1 = d, this.x2 = e, this.y2 = f, this.x3 = g, this.y3 = h, this.dn = i, this.getPointAfterT = function(a) {
                var b = 1 / this.dn * a,
                    c = 3 * (this.x1 - this.x0),
                    d = 3 * (this.x2 - this.x1) - c,
                    e = this.x3 - this.x0 - c - d,
                    f = 3 * (this.y1 - this.y0),
                    g = 3 * (this.y2 - this.y1) - f,
                    h = this.y3 - this.y0 - f - g;
                return {
                    x: e * b * b * b + d * b * b + c * b + this.x0,
                    y: h * b * b * b + g * b * b + f * b + this.y0
                }
            }, this.getRevPointAfterT = function(a) {
                var b = 1 / this.dn * a,
                    c = 3 * (this.x2 - this.x3),
                    d = 3 * (this.x1 - this.x2) - c,
                    e = this.x0 - this.x3 - c - d,
                    f = 3 * (this.y2 - this.y3),
                    g = 3 * (this.y1 - this.y2) - f,
                    h = this.y0 - this.y3 - f - g;
                return {
                    x: e * b * b * b + d * b * b + c * b + this.x3,
                    y: h * b * b * b + g * b * b + f * b + this.y3
                }
            }
        },
        Line = function(a, b, c, d, e) {
            this.x0 = a, this.y0 = b, this.x1 = c, this.y1 = d, this.dn = e, this.xd = Math.abs(this.x0 - this.x1), this.yd = Math.abs(this.y0 - this.y1), this.getPointAfterT = function(a) {
                var b = this.xd / this.dn * a,
                    c = this.yd / this.dn * a;
                return {
                    x: this.x0 < this.x1 ? this.x0 + b : this.x0 - b,
                    y: this.y0 < this.y1 ? this.y0 + c : this.y0 - c
                }
            }, this.getRevPointAfterT = function(a) {
                var b = this.xd / this.dn * a,
                    c = this.yd / this.dn * a;
                return {
                    x: this.x1 < this.x0 ? this.x1 + b : this.x1 - b,
                    y: this.y1 < this.y0 ? this.y1 + c : this.y1 - c
                }
            }
        },
        MNode = function(a) {
            var b = a.split(",");
            switch (this.tp = b[0], this.x0 = parseFloat(b[1]), this.y0 = parseFloat(b[2]), this.dn = 0, this.tp) {
                case "L":
                    this.x1 = parseFloat(b[3]), this.y1 = parseFloat(b[4]), this.dn = 1e3 * parseFloat(b[5]), this.ln = new Line(this.x0, this.y0, this.x1, this.y1, this.dn);
                    break;
                case "C":
                    this.x1 = parseFloat(b[3]), this.y1 = parseFloat(b[4]), this.x2 = parseFloat(b[5]), this.y2 = parseFloat(b[6]), this.x3 = parseFloat(b[7]), this.y3 = parseFloat(b[8]), this.dn = 1e3 * parseFloat(b[9]), this.bc = new BCurve(this.x0, this.y0, this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.dn)
            }
            this.getNextPoint = function(a, b) {
                var c;
                switch (this.tp) {
                    case "M":
                    case "E":
                        c = {
                            x: this.x0,
                            y: this.y0
                        };
                        break;
                    case "L":
                        c = this.ln.getPointAfterT(b);
                        break;
                    case "C":
                        c = this.bc.getPointAfterT(b)
                }
                return c
            }, this.getRevNextPoint = function(a, b) {
                var c;
                switch (this.tp) {
                    case "M":
                    case "E":
                        c = {
                            x: this.x0,
                            y: this.y0
                        };
                        break;
                    case "L":
                        c = this.ln.getRevPointAfterT(b);
                        break;
                    case "C":
                        c = this.bc.getRevPointAfterT(b)
                }
                return c
            }
        },
        MAnim = function(a) {
            this.pnt = a, this.Mns = [], this.prvTm = 0, this.rpd = this.pnt.c.s1;
            for (var b = this.pnt.c.s0.split("|"), c = 0, d = 0; d < b.length; d++) b[d].length > 1 && (this.Mns[c++] = new MNode(b[d].replace(" ", ",")));
            this.cNode = 1 == this.rpd ? this.Mns.length - 1 : 0, this.sDirn = 1 == this.rpd ? "rpd" : "fpd", this.resetMAnim = function(a) {
                a.pozd || (this.prvTm = 0, this.cNode = 1 == this.rpd ? this.Mns.length - 1 : 0, this.sDirn = 1 == this.rpd ? "rpd" : "fpd"), this.pnt.resetBanim()
            }, this.setEndPoint = function() {
                var a = this.Mns[this.Mns.length - 1];
                this.pnt.setTranslate(a.x0, a.y0)
            }, this.getNextPoint = function(a, b) {
                var c, d = this.Mns[this.cNode];
                return "rpd" == this.sDirn && (this.cNode = 0, this.sDirn = "None"), b > this.prvTm + d.dn ? this.cNode + 1 >= this.Mns.length ? c : (this.prvTm += d.dn, this.cNode++, this.getNextPoint(a, b)) : c = d.getNextPoint(a, b - this.prvTm)
            }, this.setRevEndPoint = function() {
                var a = this.Mns[0];
                this.pnt.setTranslate(a.x0, a.y0)
            }, this.getRevNextPoint = function(a, b) {
                var c, d = this.Mns[this.cNode];
                return "fpd" == this.sDirn && (this.cNode = this.Mns.length - 1, this.sDirn = "None"), b > this.prvTm + d.dn ? this.cNode - 1 < 0 ? c : (this.prvTm += d.dn, this.cNode--, this.getRevNextPoint(a, b)) : c = d.getRevNextPoint(a, b - this.prvTm)
            }
        },
        Split = function(a) {
            this.c = a, this.Initialize = function(a) {
                if (this.initMskAnim(a)) {
                    this.mc = new Cv(this.w, this.h), this.cp = "destination-in";
                    var b = this.c.c4,
                        c = this.c.s0;
                    ((1 == b || -1 == b) && 23 == c || (1 == b || -1 == b) && 25 == c || 2 == b && 24 == c || 2 == b && 26 == c) && (this.cp = "destination-out")
                }
            }, this.play = function() {
                function a() {
                    if (b.pozd || b.stpd) return void b.stopCaS();
                    var c = b.gtime() - b.st - b.c.c1;
                    if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                    b.playCaS();
                    var d = 24 == b.c.s0 || 26 == b.c.s0 ? b.w / b.c.c2 * c : b.w / b.c.c2 * (b.c.c2 - c),
                        e = 24 == b.c.s0 || 26 == b.c.s0 ? b.h / b.c.c2 * c : b.h / b.c.c2 * (b.c.c2 - c);
                    if (24 != b.c.s0 && 26 != b.c.s0 || !(d > b.w || e > b.h) ? 23 != b.c.s0 && 25 != b.c.s0 || !(d < 0 || e < 0) || (d = e = 0) : (d = b.w, e = b.h), b.fct.save(), b.frcv.draw(b.bgcv, !0), b.sV.dpd.style.opacity = 0, b.mc.cvt.save(), b.mc.cvt.clearRect(0, 0, b.w, b.h), 23 != b.c.s0 && 24 != b.c.s0 || (b.mc.cvt.beginPath(), b.mc.cvt.fillRect(0, (b.h - e) / 2, b.w, e), b.mc.cvt.closePath()), 25 != b.c.s0 && 26 != b.c.s0 || (b.mc.cvt.beginPath(), b.mc.cvt.fillRect((b.w - d) / 2, 0, d, b.h), b.mc.cvt.closePath()), b.mc.cvt.restore(), b.mc.bdrawn = !0, b.fct.globalCompositeOperation = b.cp, b.frcv.draw(b.mc, !1), b.fct.restore(), c >= b.c.c2) return b.doAfterEffect(), b.dltCv(), void b.doRepeat();
                    Cbfun(a)
                }
                this.resetMskAnim(), this.plyBlockAnim();
                var b = this;
                Cbfun(a)
            }
        };
    Split.prototype = new MskAnim;
    var Plus = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initMskAnim(a) && (this.mc = new Cv(this.w, this.h), this.cp = "destination-in", ((1 == this.c.c4 || -1 == this.c.c4) && 19 == this.c.s0 || 2 == this.c.c4 && 20 == this.c.s0) && (this.cp = "destination-out"))
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS();
                var d = 20 == b.c.s0 ? b.w / b.c.c2 * c : b.w / b.c.c2 * (b.c.c2 - c),
                    e = 20 == b.c.s0 ? b.h / b.c.c2 * c : b.h / b.c.c2 * (b.c.c2 - c);
                if (20 == b.c.s0 && (d > b.w || e > b.h) ? (d = b.w, e = b.h) : 19 == b.c.s0 && (d < 0 || e < 0) && (d = e = 0), b.fct.save(), b.frcv.draw(b.bgcv, !0), b.sV.dpd.style.opacity = 0, b.mc.cvt.save(), b.mc.cvt.clearRect(0, 0, b.w, b.h), b.mc.cvt.beginPath(), b.mc.cvt.fillRect(0, (b.h - e) / 2, b.w, e), b.mc.cvt.closePath(), b.mc.cvt.beginPath(), b.mc.cvt.fillRect((b.w - d) / 2, 0, d, b.h), b.mc.cvt.closePath(), b.mc.cvt.restore(), b.mc.bdrawn = !0, b.fct.globalCompositeOperation = b.cp, b.frcv.draw(b.mc, !1), b.fct.restore(), c >= b.c.c2) return b.doAfterEffect(), b.dltCv(), void b.doRepeat();
                Cbfun(a)
            }
            this.resetMskAnim(), this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    Plus.prototype = new MskAnim;
    var PeekOut = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initMskAnim(a) && (this.mc = new Cv(this.w, this.h), this.mxDiff = 1 == this.c.s0 || 3 == this.c.s0 ? this.h : this.w)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS();
                var d = b.mxDiff / b.c.c2 * c,
                    e = 0,
                    f = 0;
                if (c >= b.c.c2 && (d = b.mxDiff), 1 == b.c.s0 || 3 == b.c.s0 ? f = 1 == b.c.c4 ? b.mxDiff - d : d : 2 != b.c.s0 && 4 != b.c.s0 || (e = 1 == b.c.c4 ? b.mxDiff - d : d), f = 1 == b.c.s0 ? -f : f, e = 4 == b.c.s0 ? -e : e, b.sV.dpd.style.opacity = 0, b.fct.save(), b.fct.clearRect(0, 0, b.w, b.h), b.mc.cvt.save(), b.mc.cvt.clearRect(0, 0, b.w, b.h), b.mc.cvt.drawImage(b.bgcv.cv, e, f), b.mc.cvt.restore(), b.mc.bdrawn = !0, b.frcv.draw(b.mc, !1), b.fct.restore(), c >= b.c.c2) return b.dltCv(), void b.doRepeat();
                Cbfun(a)
            }
            this.resetMskAnim(), this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    PeekOut.prototype = new MskAnim;
    var EaseOut = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initMskAnim(a) && (1 == this.c.c4 && (this.mc = new Cv(this.w, this.h)), this.trDiff = 140)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS();
                var d;
                if (1 == b.c.c4) {
                    var e = c >= b.c.c2 ? b.w : b.w / b.c.c2 * c;
                    d = b.trDiff * (1 - e / b.w), b.sV.dpd.style.opacity = 0, b.fct.save(), b.fct.clearRect(0, 0, b.w, b.h), b.mc.cvt.save(), b.mc.cvt.clearRect(0, 0, b.w, b.h), b.mc.cvt.drawImage(b.bgcv.cv, b.w - e, 0), b.mc.cvt.restore(), b.mc.bdrawn = !0, b.frcv.draw(b.mc, !1), b.fct.restore(), b.setTranslate(-d, 0)
                } else if (2 == b.c.c4) {
                    d = c >= b.c.c2 ? 0 : b.trDiff / b.c.c2 * c;
                    var f = c >= b.c.c2 ? 0 : 1 - 1 / b.c.c2 * c;
                    b.sV.dpd.style.opacity = f, b.setTranslate(-d, 0)
                }
                if (c >= b.c.c2) return b.dltCv(), void b.doRepeat();
                Cbfun(a)
            }
            this.resetMskAnim(), this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    EaseOut.prototype = new MskAnim;
    var Box = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initMskAnim(a) && (this.mc = new Cv(this.w, this.h), this.cp = "destination-in", ((-1 == this.c.c4 || 1 == this.c.c4) && 19 == this.c.s0 || 2 == this.c.c4 && 20 == this.c.s0) && (this.cp = "destination-out"))
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS();
                var d = 20 == b.c.s0 ? b.w / b.c.c2 * c : b.w / b.c.c2 * (b.c.c2 - c),
                    e = 20 == b.c.s0 ? b.h / b.c.c2 * c : b.h / b.c.c2 * (b.c.c2 - c);
                if (20 == b.c.s0 && (d > b.w || e > b.h) ? (d = b.w, e = b.h) : 19 == b.c.s0 && (d < 0 || e < 0) && (d = e = 0), b.fct.save(), b.frcv.draw(b.bgcv, !0), b.sV.dpd.style.opacity = 0, b.mc.cvt.save(), b.mc.cvt.clearRect(0, 0, b.w, b.h), b.mc.cvt.beginPath(), b.mc.cvt.fillRect((b.w - d) / 2, (b.h - e) / 2, d, e), b.mc.cvt.restore(), b.mc.bdrawn = !0, b.fct.globalCompositeOperation = b.cp, b.frcv.draw(b.mc, !1), b.fct.restore(), c >= b.c.c2) return b.doAfterEffect(), b.dltCv(), void b.doRepeat();
                Cbfun(a)
            }
            this.resetMskAnim(), this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    Box.prototype = new MskAnim;
    var Checkerboard = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initMskAnim(a) && (this.mc = new Cv(this.w, this.h), this.strC = 6, this.strH = this.h / this.strC, this.strW = this.w / this.strC, 16 == this.c.s0 ? this.mm = this.strW / this.c.c2 : this.mm = this.strH / this.c.c2)
        }, this.play = function() {
            function a() {
                if (c.pozd || c.stpd) return void c.stopCaS();
                var d = c.gtime() - c.st - c.c.c1;
                return d <= 0 ? void(Math.abs(d) > c.c.c1 ? c.reset() : Cbfun(a)) : (c.playCaS(), c.fct.save(), c.frcv.draw(c.bgcv, !0), c.fct.beginPath(), c.fct.globalCompositeOperation = c.cp, c.sV.dpd.style.opacity = 0, b(c, d), c.mc.bdrawn = !0, c.frcv.draw(c.mc, !1), c.fct.restore(), d >= c.c.c2 ? (c.doAfterEffect(), c.dltCv(), void c.doRepeat()) : void Cbfun(a))
            }

            function b(a, b) {
                a.mc.cvt.clearRect(0, 0, a.mc.cv.width, a.mc.cv.height), a.mc.cvt.beginPath();
                a.mc.cvt.fillStyle = "green", l = a.mm * b;
                for (var c = 0; c < a.strC; c++) {
                    t = c % 2, 16 == a.c.s0 ? (y = a.strH * c, x = 0 - a.strW / 2 * t) : (y = 0 - a.strH / 2 * t, x = a.strW * c);
                    for (var d = a.strC + t, e = 0; e < d; e++) 16 == a.c.s0 ? (a.mc.cvt.fillRect(2 == a.c.c4 ? x + a.strW - l : x, y, l, a.strH + 1), x += a.strW) : 17 == a.c.s0 ? (a.mc.cvt.fillRect(x, y, a.strW + 1, l), y += a.strH) : (a.mc.cvt.fillRect(x, 2 == a.c.c4 ? y + a.strH - l : y, a.strW + 1, l), y += a.strH)
                }
                a.mc.cvt.restore()
            }
            this.resetMskAnim(), this.plyBlockAnim();
            var c = this;
            Cbfun(a)
        }
    };
    Checkerboard.prototype = new MskAnim;
    var Blinds = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initMskAnim(a) && (this.mc = new Cv(this.w, this.h), this.strC = 6, 16 == this.c.s0 ? (this.strW = this.w, this.strH = this.h / this.strC, this.mm = this.strH / this.c.c2) : (this.strW = this.w / this.strC, this.strH = this.h, this.mm = this.strW / this.c.c2))
        }, this.play = function() {
            function a() {
                if (c.pozd || c.stpd) return void c.stopCaS();
                var d = c.gtime() - c.st - c.c.c1;
                return d <= 0 ? void(Math.abs(d) > c.c.c1 ? c.reset() : Cbfun(a)) : (c.playCaS(), c.fct.save(), c.frcv.draw(c.bgcv, !0), c.fct.beginPath(), c.fct.globalCompositeOperation = c.cp, c.sV.dpd.style.opacity = 0, b(c, d), c.mc.bdrawn = !0, c.frcv.draw(c.mc, !1), c.fct.restore(), d >= c.c.c2 ? (c.doAfterEffect(), c.dltCv(), void c.doRepeat()) : void Cbfun(a))
            }

            function b(a, b) {
                a.mc.cvt.clearRect(0, 0, a.mc.cv.width, a.mc.cv.height), a.mc.cvt.beginPath();
                a.mc.cvt.fillStyle = "green", l = a.mm * b, x = 0, y = 0;
                for (var c = 0; c < a.strC; c++) 16 == a.c.s0 ? (a.mc.cvt.fillRect(0, 2 == a.c.c4 ? y + a.strH - l : y, a.strW, l), y += a.strH) : (a.mc.cvt.fillRect(2 == a.c.c4 ? x + a.strW - l : x, 0, l, a.strH), x += a.strW);
                a.mc.cvt.restore()
            }
            this.resetMskAnim(), this.plyBlockAnim();
            var c = this;
            Cbfun(a)
        }
    };
    Blinds.prototype = new MskAnim;
    var Wipe = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initMskAnim(a) && (this.mc = new Cv(this.w, this.h), 4 == this.c.s0 || 2 == this.c.s0 ? this.mm = this.w / this.c.c2 : this.mm = this.h / this.c.c2)
        }, this.play = function() {
            function a() {
                if (c.pozd || c.stpd) return void c.stopCaS();
                var d = c.gtime() - c.st - c.c.c1;
                return d <= 0 ? void(Math.abs(d) > c.c.c1 ? c.reset() : Cbfun(a)) : (c.playCaS(), c.fct.save(), c.frcv.draw(c.bgcv, !0), c.fct.beginPath(), c.fct.globalCompositeOperation = c.cp, c.sV.dpd.style.opacity = 0, b(c, d), c.mc.bdrawn = !0, c.frcv.draw(c.mc, !1), c.fct.restore(), d >= c.c.c2 ? (c.doAfterEffect(), c.dltCv(), void c.doRepeat()) : void Cbfun(a))
            }

            function b(a, b) {
                a.mc.cvt.clearRect(0, 0, a.mc.cv.width, a.mc.cv.height), a.mc.cvt.beginPath(), a.mc.cvt.fillStyle = "green", l = a.mm * b, x = 0, y = 0, w = 0, h = 0, 4 == a.c.s0 ? (w = l, h = a.h) : 2 == a.c.s0 ? (w = l, x = a.w - l, h = a.h) : 1 == a.c.s0 ? (w = a.w, h = l) : 3 == a.c.s0 && (w = a.w, h = l, y = a.h - l), a.mc.cvt.fillRect(x, y, w, h), a.mc.cvt.restore()
            }
            this.resetMskAnim(), this.plyBlockAnim();
            var c = this;
            Cbfun(a)
        }
    };
    Wipe.prototype = new MskAnim;
    var Circle = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initMskAnim(a) && (this.cp = "destination-in", ((-1 == this.c.c4 || 1 == this.c.c4) && 19 == this.c.s0 || 2 == this.c.c4 && 20 == this.c.s0) && (this.cp = "destination-out"), this.mc = new Cv(100, 100), this.rm = Math.sqrt(this.mc.cv.width * this.mc.cv.width + this.mc.cv.height * this.mc.cv.height) / 2, this.mm = this.rm / this.c.c2, this.b = 3)
        }, this.play = function() {
            function a() {
                if (c.pozd || c.stpd) return void c.stopCaS();
                var d = c.gtime() - c.st - c.c.c1;
                if (d <= 0) return void(Math.abs(d) > c.c.c1 ? c.reset() : Cbfun(a));
                c.playCaS();
                var e = 20 == c.c.s0 ? d * c.mm : d * c.mm > c.rm ? c.rm : c.rm - d * c.mm;
                if (c.fct.save(), c.frcv.draw(c.bgcv, !0), c.fct.beginPath(), c.fct.globalCompositeOperation = c.cp, c.sV.dpd.style.opacity = 0, b(c, e), c.fct.scale(c.frcv.cv.width / c.mc.cv.width, c.frcv.cv.height / c.mc.cv.height), c.mc.bdrawn = !0, c.frcv.draw(c.mc, !1), c.fct.restore(), d >= c.c.c2) return c.doAfterEffect(), c.dltCv(), void c.doRepeat();
                Cbfun(a)
            }

            function b(a, b) {
                var c = a.mc.cvt.createRadialGradient(a.mc.cv.width / 2, a.mc.cv.height / 2, b, a.mc.cv.width / 2, a.mc.cv.height / 2, b + a.b);
                c.addColorStop(0, "red"), c.addColorStop(1, "rgba(0,255,0,0)"), a.mc.cvt.fillStyle = c, a.mc.cvt.clearRect(0, 0, a.mc.cv.width, a.mc.cv.height), a.mc.cvt.beginPath(), a.mc.cvt.arc(a.mc.cv.width / 2, a.mc.cv.width / 2, b + a.b, 0, 2 * Math.PI, !1), a.mc.cvt.fill(), a.mc.cvt.restore()
            }
            this.resetMskAnim(), this.plyBlockAnim();
            var c = this;
            Cbfun(a)
        }
    };
    Circle.prototype = new MskAnim;
    var Diamond = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initMskAnim(a) && (this.mc = new Cv(this.w, this.h), this.cp = "destination-in", ((1 == this.c.c4 || -1 == this.c.c4) && 19 == this.c.s0 || 2 == this.c.c4 && 20 == this.c.s0) && (this.cp = "destination-out"))
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS();
                var d = 20 == b.c.s0 ? b.w / b.c.c2 * c : b.w / b.c.c2 * (b.c.c2 - c),
                    e = 20 == b.c.s0 ? b.h / b.c.c2 * c : b.h / b.c.c2 * (b.c.c2 - c);
                20 == b.c.s0 && (d > b.w || e > b.h) ? (d = b.w, e = b.h) : 19 == b.c.s0 && (d < 0 || e < 0) && (d = e = 0), b.fct.save(), b.frcv.draw(b.bgcv, !0), b.sV.dpd.style.opacity = 0;
                var f = b.w / 2 - d,
                    g = b.h / 2,
                    h = b.w / 2,
                    i = b.h / 2 - e,
                    j = b.w / 2 + d,
                    k = b.h / 2 + e;
                if (b.mc.cvt.save(), b.mc.cvt.clearRect(0, 0, b.w, b.h), b.mc.cvt.beginPath(), b.mc.cvt.moveTo(f, g), b.mc.cvt.lineTo(h, i), b.mc.cvt.lineTo(j, g), b.mc.cvt.lineTo(h, k), b.mc.cvt.lineTo(f, g), b.mc.cvt.fill(), b.mc.cvt.restore(), b.mc.bdrawn = !0, b.fct.globalCompositeOperation = b.cp, b.frcv.draw(b.mc, !1), b.fct.restore(), c >= b.c.c2) return b.doAfterEffect(), b.dltCv(), void b.doRepeat();
                Cbfun(a)
            }
            this.resetMskAnim(), this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    Diamond.prototype = new MskAnim;
    var DissolveIn = function(a) {
        this.c = a, this.Initialize = function(a) {
            if (this.initMskAnim(a)) {
                this.bxs = [], this.mc = new Cv(this.w, this.h);
                var b = this.w < this.h ? this.w : this.h,
                    c = b < 50 ? b : 50,
                    d = 0;
                this.thick = this.h / c;
                for (var e = 0; e <= this.w; e += this.thick)
                    for (var f = 0; f <= this.h; f += this.thick) this.bxs[d++] = {
                        x: e,
                        y: f
                    };
                this.arrayShuffle(this.bxs)
            }
        }, this.arrayShuffle = function(a) {
            for (var b = a.length, c = b; c--;) {
                var d = parseInt(Math.random() * b, 10),
                    e = a[c];
                a[c] = a[d], a[d] = e
            }
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), b.fct.save(), b.frcv.draw(b.bgcv, !0), b.sV.dpd.style.opacity = 0;
                var d = Math.floor(b.bxs.length / b.c.c2 * c);
                b.fct.lineWidth = 1;
                for (var e = b.sr; e <= d; e++) {
                    var f = b.bxs[e];
                    if (typeof f === _undefined) break;
                    b.mc.cvt.save(), b.mc.cvt.beginPath(), b.mc.cvt.fillRect(f.x, f.y, b.thick + 1, b.thick + 1), b.mc.cvt.restore()
                }
                if (b.fct.globalCompositeOperation = b.cp, b.mc.bdrawn = !0, b.frcv.draw(b.mc, !1), b.fct.restore(), b.sr = d, c >= b.c.c2) return b.doAfterEffect(), b.dltCv(), void b.doRepeat();
                Cbfun(a)
            }
            this.resetMskAnim(), this.plyBlockAnim(), this.sr = 0;
            var b = this;
            Cbfun(a)
        }
    };
    DissolveIn.prototype = new MskAnim;
    var MotionPath = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.aRev = 1 == this.c.c7, this.Rpd = 1 == this.c.s1, this.mAnim = new MAnim(this))
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS();
                var d;
                if (d = b.Rpd ? b.aRev && c > b.c.c2 / 2 ? b.mAnim.getNextPoint(b.sV.d, c) : b.mAnim.getRevNextPoint(b.sV.d, c) : b.aRev && c > b.c.c2 / 2 ? b.mAnim.getRevNextPoint(b.sV.d, c) : b.mAnim.getNextPoint(b.sV.d, c), null != d && b.setTranslate(d.x, d.y), c >= b.c.c2) return b.Rpd ^ b.aRev ? b.mAnim.setRevEndPoint() : b.mAnim.setEndPoint(), void b.doRepeat();
                Cbfun(a)
            }
            this.mAnim.resetMAnim(this), this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    MotionPath.prototype = new Banim;
    var RandomBars = function(a) {
        this.c = a, this.Initialize = function(a) {
            if (this.initMskAnim(a)) {
                this.bars = [], this.mc = new Cv(this.w, this.h), this.len = 16 == this.c.s0 ? Math.ceil(this.h) : Math.ceil(this.w);
                for (var b = 0; b <= this.len; b++) this.bars[b] = b;
                this.arrayShuffle(this.bars)
            }
        }, this.arrayShuffle = function(a) {
            for (var b = a.length, c = b; c--;) {
                var d = parseInt(Math.random() * b, 10),
                    e = a[c];
                a[c] = a[d], a[d] = e
            }
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), b.fct.save(), b.frcv.draw(b.bgcv, !0), b.sV.dpd.style.opacity = 0;
                var d = Math.floor(b.len / b.c.c2 * c);
                b.fct.lineWidth = 1;
                for (var e = b.sr; e <= d; e++) 16 == b.c.s0 ? (b.mc.cvt.save(), b.mc.cvt.beginPath(), b.mc.cvt.fillRect(0, b.bars[e], b.w, 1), b.mc.cvt.restore()) : 17 == b.c.s0 && (b.mc.cvt.save(), b.mc.cvt.beginPath(), b.mc.cvt.fillRect(b.bars[e], 0, 1, b.h), b.mc.cvt.restore());
                if (b.fct.globalCompositeOperation = b.cp, b.mc.bdrawn = !0, b.frcv.draw(b.mc, !1), b.fct.restore(), b.sr = d, c >= b.c.c2) return b.doAfterEffect(), b.dltCv(), void b.doRepeat();
                Cbfun(a)
            }
            this.resetMskAnim(), this.plyBlockAnim(), this.sr = 0;
            var b = this;
            Cbfun(a)
        }
    };
    RandomBars.prototype = new MskAnim;
    var Strips = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initMskAnim(a) && (this.cp = "destination-in", 2 == this.c.c4 && (this.cp = "destination-out"), this.mc = new Cv(this.w, this.h), this.stc = 13, this.stt = this.c.c2 / 2, this.mm = this.w / this.stt, this.std = this.stt / (this.stc - 1), this.sth = this.h / (this.stc - 2), this.b = 3)
        }, this.play = function() {
            function a() {
                if (c.pozd || c.stpd) return void c.stopCaS();
                var d = c.gtime() - c.st - c.c.c1;
                return d <= 0 ? void(Math.abs(d) > c.c.c1 ? c.reset() : Cbfun(a)) : (c.playCaS(), c.fct.save(), c.frcv.draw(c.bgcv, !0), c.fct.beginPath(), c.fct.globalCompositeOperation = c.cp, c.sV.dpd.style.opacity = 0, b(c, d), c.mc.bdrawn = !0, c.frcv.draw(c.mc, !1), c.fct.restore(), d >= c.c.c2 ? (c.doAfterEffect(), c.dltCv(), void c.doRepeat()) : void Cbfun(a))
            }

            function b(a, b) {
                a.mc.cvt.clearRect(0, 0, a.mc.cv.width, a.mc.cv.height), a.mc.cvt.beginPath();
                var c = 70;
                for (i = 0; i < a.stc; i++) {
                    var d = 0,
                        e = 0,
                        f = 0;
                    if (d = b - i * a.std, d * a.mm, 2 == a.c.c4 ? 8 == a.c.s0 ? (e = a.h - (i + 1) * a.sth, f = a.w - d * a.mm, f - c) : 7 == a.c.s0 ? (e = i * a.sth, f = a.w - d * a.mm, f - c) : 9 == a.c.s0 ? e = a.h - (i + 1) * a.sth : 6 == a.c.s0 && (e = i * a.sth) : 8 == a.c.s0 ? e = i * a.sth : 7 == a.c.s0 ? e = a.h - (i + 1) * a.sth : 9 == a.c.s0 ? (e = i * a.sth, f = a.w - d * a.mm, f - c) : 6 == a.c.s0 && (e = a.h - (i + 1) * a.sth, f = a.w - d * a.mm, f - c), !(d > 0)) break;
                    a.mc.cvt.fillStyle = "green", a.mc.cvt.fillRect(f, e, d * a.mm + 1, a.sth + 1)
                }
                a.mc.cvt.restore()
            }
            this.resetMskAnim(), this.plyBlockAnim();
            var c = this;
            Cbfun(a)
        }
    };
    Strips.prototype = new MskAnim;
    var Wedge = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initMskAnim(a) && (this.mc = new Cv(this.w, this.h), this.mxDif = 1, this.r = (Math.sqrt(this.h * this.h + this.w * this.w) + 8) / 2, this.x = this.w / 2, this.y = this.h / 2)
        }, this.play = function() {
            function a() {
                if (c.pozd || c.stpd) return void c.stopCaS();
                var d = c.gtime() - c.st - c.c.c1;
                if (d <= 0) return void(Math.abs(d) > c.c.c1 ? c.reset() : Cbfun(a));
                c.playCaS();
                var e = c.mxDif / c.c.c2 * d;
                if (e > c.mxDif && (e = c.mxDif), c.fct.save(), c.frcv.draw(c.bgcv, !0), c.sV.dpd.style.opacity = 0, c.mc.cvt.save(), c.mc.cvt.clearRect(0, 0, c.w, c.h), c.mc.cvt.beginPath(), b(c, 1.5, e, !0), b(c, 1.5, e, !1), c.mc.cvt.fill(), c.mc.cvt.restore(), c.mc.bdrawn = !0, c.fct.globalCompositeOperation = c.cp, c.frcv.draw(c.mc, !1), c.fct.restore(), d >= c.c.c2) return c.doAfterEffect(), c.dltCv(), void c.doRepeat();
                Cbfun(a)
            }

            function b(a, b, c, d) {
                var e = d ? b + c : b - c;
                a.mc.cvt.moveTo(a.x, a.y), a.mc.cvt.arc(a.x, a.y, a.r, b * Math.PI, e * Math.PI, d)
            }
            this.resetMskAnim(), this.plyBlockAnim();
            var c = this;
            Cbfun(a)
        }
    };
    Wedge.prototype = new MskAnim;
    var LightSpeed = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.tDiff = this.sV.w + this.sV.l, this.xSpDist = (this.sV.h + .2 * this.sV.w) / 2, 2 == this.c.c4 && (this.tDiff = gv.w - this.sV.l))
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.animStarted && (b.animStarted = !0, b.csX = void 0 == b.sV.d.dpsX ? 1 : b.sV.d.dpsX, b.csY = void 0 == b.sV.d.dpsY ? 1 : b.sV.d.dpsY);
                var d, e, f, g = c / b.c.c2 * 100,
                    h = b.getTranslate(),
                    i = 0;
                if (1 == b.c.c4) {
                    if (g < 60) i = (g / 60 - 1) * b.tDiff, b.setTranslate(i, h.y);
                    else if (g > 60) {
                        d = (g - 60) / 40 * 180, e = Math.sin(Math.PI / 180 * d), f = g >= 100 ? 0 : -45 * e;
                        var j = g >= 100 ? 1 : 1 - .2 * e;
                        i = g >= 100 ? 0 : b.xSpDist * e, b.setSkewX(f), b.setScale(j * b.csX, b.csY), b.setTranslate(i, h.y)
                    }
                    b.sV.dpd.style.opacity = 1
                } else 2 == b.c.c4 && (g < 20 ? (d = g / 20 * 90, e = Math.sin(Math.PI / 180 * d), f = -45 * e, i = b.xSpDist * e, b.setSkewX(f), b.setTranslate(i, h.y)) : (i = g >= 100 ? b.tDiff : c / b.c.c2 * b.tDiff, b.setTranslate(i, h.y)));
                if (c >= b.c.c2) return 2 == b.c.c4 && (b.sV.dpd.style.opacity = 0), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.animStarted = !1;
            var b = this;
            Cbfun(a)
        }
    };
    LightSpeed.prototype = new Banim;
    var FadedSwivel = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.isFaded = 0 == this.c.s0)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.animStarted && (b.animStarted = !0, b.csX = void 0 == b.sV.d.dpsX ? 1 : b.sV.d.dpsX, b.csY = void 0 == b.sV.d.dpsY ? 1 : b.sV.d.dpsY);
                var d = c / b.c.c2 * 450,
                    e = 1 == b.c.c4 ? Math.sin(Math.PI / 180 * d) : Math.cos(Math.PI / 180 * d),
                    f = 16 == b.c.s0 || b.isFaded ? e * b.csX : b.csX,
                    g = 16 == b.c.s0 || b.isFaded ? b.csY : e * b.csY,
                    h = c >= b.c.c2 ? 1 : c / b.c.c2 * 1;
                if (b.isFaded ? b.sV.dpd.style.opacity = 1 == b.c.c4 ? h : 1 - h : b.sV.dpd.style.opacity = 2 == b.c.c4 && c >= b.c.c2 ? 0 : 1, c >= b.c.c2 && (f = b.csX, xY = b.csY), b.setScale(f, g), c >= b.c.c2) return void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.animStarted = !1;
            var b = this;
            Cbfun(a)
        }
    };
    FadedSwivel.prototype = new Banim;
    var Wheel = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initMskAnim(a) && (this.mc = new Cv(this.w, this.h), this.spks = this.c.s0, this.mxDif = 2 / this.spks, this.r = (Math.sqrt(this.h * this.h + this.w * this.w) + 8) / 2, this.x = this.w / 2, this.y = this.h / 2)
        }, this.play = function() {
            function a() {
                if (c.pozd || c.stpd) return void c.stopCaS();
                var d = c.gtime() - c.st - c.c.c1;
                if (d <= 0) return void(Math.abs(d) > c.c.c1 ? c.reset() : Cbfun(a));
                c.playCaS();
                var e = c.mxDif / c.c.c2 * d;
                if (e > c.mxDif && (e = c.mxDif), c.fct.save(), c.frcv.draw(c.bgcv, !0), c.sV.dpd.style.opacity = 0, c.mc.cvt.save(), c.mc.cvt.clearRect(0, 0, c.w, c.h), c.mc.cvt.beginPath(), c.spks >= 1 && b(c, 1.5, e), c.spks >= 2 && 3 != c.spks && b(c, .5, e), 3 == c.spks && (b(c, .1666, e), b(c, .8333, e)), c.spks > 3 && (b(c, 0, e), b(c, 1, e)), c.spks > 4 && (b(c, 1.75, e), b(c, .25, e), b(c, .75, e), b(c, 1.25, e)), c.mc.cvt.fill(), c.mc.cvt.restore(), c.mc.bdrawn = !0, c.fct.globalCompositeOperation = c.cp, c.frcv.draw(c.mc, !1), c.fct.restore(), d >= c.c.c2) return c.doAfterEffect(), c.dltCv(), void c.doRepeat();
                Cbfun(a)
            }

            function b(a, b, c) {
                var d = (b + c) % 2;
                a.mc.cvt.moveTo(a.x, a.y), a.mc.cvt.arc(a.x, a.y, a.r, b * Math.PI, d * Math.PI)
            }
            this.resetMskAnim(), this.plyBlockAnim();
            var c = this;
            Cbfun(a)
        }
    };
    Wheel.prototype = new MskAnim;
    var FlyIn = function(a) {
        function b(a) {
            var b = gv.w,
                c = gv.h,
                d = parseInt(a.sV.d.style.left, 10),
                e = parseInt(a.sV.d.style.top, 10),
                f = a.sV.w,
                g = a.sV.h;
            switch (a.c.s0) {
                case 1:
                    a.dX = d, a.dY = -1 * g;
                    break;
                case 2:
                    a.dX = b, a.dY = e;
                    break;
                case 3:
                    a.dX = d, a.dY = c;
                    break;
                case 4:
                    a.dX = -1 * f, a.dY = e;
                    break;
                case 6:
                    a.dX = -1 * f, a.dY = -1 * g;
                    break;
                case 7:
                    a.dX = b, a.dY = -1 * g;
                    break;
                case 8:
                    a.dX = b, a.dY = c;
                    break;
                case 9:
                    a.dX = -1 * f, a.dY = c
            }
            if (a.fX = d, a.fY = e, 2 == a.c.c4) {
                var h = a.fY;
                a.fY = a.dY, a.dY = h, h = a.fX, a.fX = a.dX, a.dX = h
            }
        }
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (b(this), this.xDif = this.fX - this.dX, this.yDif = this.fY - this.dY, this.mX = this.xDif / this.c.c2, this.mY = this.yDif / this.c.c2)
        }, this.play = function() {
            function a() {
                if (c.pozd || c.stpd) return void c.stopCaS();
                var d = c.gtime() - c.st - c.c.c1;
                if (d <= 0) return void(Math.abs(d) > c.c.c1 ? c.reset() : Cbfun(a));
                if (0 == c.animStarted) {
                    if (c.animStarted = !0, 2 == c.c.c4) {
                        var e = c.getTranslate();
                        null == c.left ? c.left = c.sV.d.style.left = parseInt(c.sV.d.style.left, 10) + e.x + "px" : c.sV.d.style.left = c.left, null == c.top ? c.top = c.sV.d.style.top = parseInt(c.sV.d.style.top, 10) + e.y + "px" : c.sV.d.style.top = c.top, b(c), c.xDif = c.fX - parseInt(c.sV.d.style.left, 10), c.yDif = c.fY - parseInt(c.sV.d.style.top, 10), c.mX = c.xDif / c.c.c2, c.mY = c.yDif / c.c.c2
                    } else c.sV.d.style.left = this.dx + "px", c.sV.d.style.top = this.dx + "py", c.setTranslate(-1 * this.xDif, -1 * this.yDif);
                    c.sV.dpd.style.opacity = 1
                }
                c.playCaS();
                var f = 0,
                    g = 0;
                if (1 == c.c.c4 ? (f = d * c.mX - c.cX, g = d * c.mY - c.cY) : (f = d * c.mX, g = d * c.mY), c.setTranslate(f, g), d >= c.c.c2) return 1 == c.c.c4 ? c.setTranslate(0, 0) : (c.sV.dpd.style.opacity = 0, c.setTranslate(0, 0)), void c.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.cX = this.xDif, this.cY = this.yDif, this.pt = 0;
            var c = this;
            this.animStarted = !1, Cbfun(a)
        }
    };
    FlyIn.prototype = new Banim;
    var Fade = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.mO = 1 / this.c.c2)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.animStarted && (b.animStarted = !0, 2 == b.c.c4 ? b.oF = 0 : b.oF = 1);
                var d = c * b.mO;
                if (0 == b.oF ? b.sV.dpd.style.opacity = 1 - d : b.sV.dpd.style.opacity = d, c >= b.c.c2) return b.sV.dpd.style.opacity = b.oF, void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.animStarted = !1;
            var b = this;
            Cbfun(a)
        }
    };
    Fade.prototype = new Banim;
    var Pinwheel = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.mO = 1 / this.c.c2)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.animStarted && (b.animStarted = !0, b.csX = void 0 == b.sV.d.dpsX ? 1 : b.sV.d.dpsX, b.csY = void 0 == b.sV.d.dpsY ? 1 : b.sV.d.dpsY, b.cA = void 0 == b.sV.d.dpA ? 0 : b.sV.d.dpA, b.mA = 720 / b.c.c2, b.msX = b.csX / b.c.c2, b.msY = b.csY / b.c.c2);
                var d, e, f = c * b.mA,
                    g = 0;
                if (1 == b.c.c4 ? (g = c * b.mO, d = c * b.msX, e = c * b.msY, f *= -1) : (g = 1 - c * b.mO, d = b.csX - c * b.msX, e = b.csY - c * b.msY), b.sV.dpd.style.opacity = g, b.setScale(d, e), b.setRotate(f + b.cA), c >= b.c.c2) return b.sV.dpd.style.opacity = 1 == b.c.c4 ? 1 : 0, b.setScale(b.csX, b.csY), b.setRotate(b.cA), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.animStarted = !1;
            var b = this;
            Cbfun(a)
        }
    };
    Pinwheel.prototype = new Banim;
    var Ascend = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.mY = 48 / this.c.c2, this.mO = 1 / this.c.c2, 2 == this.c.c4 ? this.fO = 0 : this.fO = 1)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS();
                var d;
                d = 1 == b.c.c4 ? 48 - c * b.mY : -c * b.mY;
                var e;
                if (e = 0 == b.fO ? 1 - c * b.mO : c * b.mO, b.sV.dpd.style.opacity = e, b.setTranslate(0, d), c >= b.c.c2) return b.setTranslate(0, 0), b.sV.dpd.style.opacity = b.fO, void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    Ascend.prototype = new Banim;
    var Descend = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.mY = 48 / this.c.c2 * -1, this.mO = 1 / this.c.c2, 2 == this.c.c4 ? this.fO = 0 : this.fO = 1)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS();
                var d;
                d = 1 == b.c.c4 ? -48 - c * b.mY : -c * b.mY;
                var e;
                if (e = 0 == b.fO ? 1 - c * b.mO : c * b.mO, b.sV.dpd.style.opacity = e, b.setTranslate(0, d), c >= b.c.c2) return b.setTranslate(0, 0), b.sV.dpd.style.opacity = b.fO, void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    Descend.prototype = new Banim;
    var GrowTurn = function(a) {
        this.c = a, this.fAngle = 90, this.Initialize = function(a) {
            this.initBanim(a) && (this.mO = 1 / this.c.c2)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.animStarted && (b.csX = void 0 == b.sV.d.dpsX ? 1 : b.sV.d.dpsX, b.csY = void 0 == b.sV.d.dpsY ? 1 : b.sV.d.dpsY, b.cA = void 0 == b.sV.d.dpA ? 0 : b.sV.d.dpA, b.msX = b.csX / b.c.c2, b.msY = b.csY / b.c.c2, b.mA = b.fAngle / b.c.c2, b.animStarted = !0);
                var d, e, f, g = 0;
                if (1 == b.c.c4 ? (d = 90 - c * b.mA + b.cA, g = c * b.mO, e = c * b.msX, f = c * b.msY) : (d = c * b.mA + b.cA, g = 1 - c * b.mO, e = b.csX - c * b.msX, f = b.csY - c * b.msY), b.sV.dpd.style.opacity = g, b.setScale(e, f), b.setRotate(d), c >= b.c.c2) return b.sV.dpd.style.opacity = 1 == b.c.c4 ? 1 : 0, b.setScale(b.csX, b.csY), b.setRotate(b.cA), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.animStarted = !1;
            var b = this;
            Cbfun(a)
        }
    };
    GrowTurn.prototype = new Banim;
    var Spinner = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.mO = 1 / this.c.c2)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.animStarted && (b.csX = void 0 == b.sV.d.dpsX ? 1 : b.sV.d.dpsX, b.csY = void 0 == b.sV.d.dpsY ? 1 : b.sV.d.dpsY, b.cA = void 0 == b.sV.d.dpA ? 0 : b.sV.d.dpA, b.msX = b.csX / b.c.c2, b.msY = b.csY / b.c.c2, b.mA = 360 / b.c.c2, b.animStarted = !0);
                var d, e, f, g = 0;
                if (1 == b.c.c4 ? (d = 360 - c * b.mA + b.cA, g = c * b.mO, e = c * b.msX, f = c * b.msY) : (d = c * b.mA + b.cA, g = 1 - c * b.mO, e = b.csX - c * b.msX, f = b.csY - c * b.msY), b.sV.dpd.style.opacity = g, b.setScale(e, f), b.setRotate(d), c >= b.c.c2) return b.sV.dpd.style.opacity = 1 == b.c.c4 ? 1 : 0, b.setScale(b.csX, b.csY), b.setRotate(b.cA), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.animStarted = !1;
            var b = this;
            Cbfun(a)
        }
    };
    Spinner.prototype = new Banim;
    var Expand = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.mO = 1 / this.c.c2, 2 != this.c.c4 ? (this.fO = 1, this.fSCale = 1, this.mA = -1 * this.mA) : (this.mO = -1 * this.mO, this.fO = 0, this.fSCale = .75))
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.animStarted && (b.csX = void 0 == b.sV.d.dpsX ? 1 : b.sV.d.dpsX, b.csY = void 0 == b.sV.d.dpsY ? 1 : b.sV.d.dpsY, b.msX = .25 * b.csX / b.c.c2, b.animStarted = !0);
                var d, e = 0;
                if (0 == b.fO) d = b.csX - c * b.msX, e = 1 - c * b.mO * -1;
                else {
                    d = b.csX - .25 * b.csX + c * b.msX, e = c * b.mO
                }
                if (b.sV.dpd.style.opacity = e, b.setScale(d, b.csY), c >= b.c.c2) return b.sV.dpd.style.opacity = b.fO, b.setScale(b.csX, b.csY), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.animStarted = !1, this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    Expand.prototype = new Banim;
    var FadedZoom = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.mO = 1 / this.c.c2, 2 != this.c.c4 ? (this.fO = 1, this.fSCale = 1) : (this.mO = -1 * this.mO, this.fO = 0, this.fSCale = 0))
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.animStarted && (b.csX = void 0 == b.sV.d.dpsX ? 1 : b.sV.d.dpsX, b.csY = void 0 == b.sV.d.dpsY ? 1 : b.sV.d.dpsY, b.msX = b.csX / b.c.c2, b.msY = b.csY / b.c.c2, b.animStarted = !0);
                var d, e, f = 0;
                if (0 == b.fO ? (d = b.csX - c * b.msX, e = b.csY - c * b.msY, f = 1 - c * b.mO * -1) : (d = c * b.msX, e = c * b.msY, f = c * b.mO), b.sV.dpd.style.opacity = f, b.setScale(d, e), c >= b.c.c2) return b.sV.dpd.style.opacity = b.fO, b.setScale(b.csX, b.csY), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.animStarted = !1;
            var b = this;
            Cbfun(a)
        }
    };
    FadedZoom.prototype = new Banim;
    var Zoom = function(a) {
        this.c = a, this.Initialize = function(a) {
            if (this.initBanim(a)) {
                var b, c = gv.w,
                    d = gv.h,
                    e = parseInt(this.sV.d.style.left, 10),
                    f = parseInt(this.sV.d.style.top, 10),
                    g = parseInt(this.sV.h, 10),
                    h = parseInt(this.sV.w, 10);
                switch (this.difX = 0, this.difY = 0, this.c.s0) {
                    case 19:
                        1 == this.c.c4 ? (this.difScale = 1, this.startScale = 0) : (this.difScale = 3, this.startScale = 1);
                        break;
                    case 30:
                    case 33:
                        var i = c / 2 - e - h / 2;
                        b = d / 2 - f - g / 2, this.difScale = 1, this.startScale = 0, this.difX = i / this.c.c2, this.difY = b / this.c.c2, this.startX = i, this.startY = b, 2 == this.c.c4 && (this.difX = -this.difX, this.difY = -this.difY, this.startX = 0, this.startY = 0, this.startScale = 1, this.difScale = -1);
                        break;
                    case 29:
                        1 == this.c.c4 ? (this.difScale = .3, this.startScale = .7) : (this.difScale = .3, this.startScale = 1);
                        break;
                    case 20:
                        1 == this.c.c4 ? (this.difScale = -3, this.startScale = 4) : (this.difScale = -1, this.startScale = 1);
                        break;
                    case 34:
                    case 31:
                        this.difScale = -7, this.startScale = 8, b = d - f, this.difX = 0, this.difY = b / this.c.c2, this.startX = 0, this.startY = b, 2 == this.c.c4 && (this.difX = 0, this.difY = -this.difY, this.startX = 0, this.startY = 0, this.startScale = 1, this.difScale = 7);
                        break;
                    case 32:
                        1 == this.c.c4 ? (this.difScale = -.3, this.startScale = 1.3) : (this.difScale = -.3, this.startScale = 1)
                }
            }
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.animStarted && (b.csX = void 0 == b.sV.d.dpsX ? 1 : b.sV.d.dpsX, b.csY = void 0 == b.sV.d.dpsY ? 1 : b.sV.d.dpsY, b.sV.dpd.style.opacity = 1, b.animStarted = !0);
                var d = b.startX - b.difX * c,
                    e = b.startY - b.difY * c,
                    f = b.csX * b.startScale + b.csX * b.difScale * (c / b.c.c2),
                    g = b.csY * b.startScale + b.csY * b.difScale * (c / b.c.c2);
                if (b.setScale(f, g), b.setTranslate(d, e), c >= b.c.c2) return b.sV.dpd.style.opacity = 1 == b.c.c4 ? 1 : 0, b.setScale(b.csX, b.csY), b.setTranslate(0, 0), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.animStarted = !1;
            var b = this;
            Cbfun(a)
        }
    };
    Zoom.prototype = new Banim;
    var Stretch = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.animStarted && (b.csX = void 0 == b.sV.d.dpsX ? 1 : b.sV.d.dpsX, b.csY = void 0 == b.sV.d.dpsY ? 1 : b.sV.d.dpsY, b.animStarted = !0, b.sV.dpd.style.opacity = 1);
                var d = b.csX,
                    e = b.csY,
                    f = 0,
                    g = 0;
                if (1 == b.c.c4) switch (b.c.s0) {
                    case 1:
                        g = (b.sV.h / b.c.c2 * c - b.sV.h) / 2, e = c * (b.csY / b.c.c2);
                        break;
                    case 2:
                        f = (b.sV.w - b.sV.w / b.c.c2 * c) / 2, d = c * (b.csX / b.c.c2);
                        break;
                    case 3:
                        g = (b.sV.h - b.sV.h / b.c.c2 * c) / 2, e = c * (b.csY / b.c.c2);
                        break;
                    case 4:
                        f = (b.sV.w / b.c.c2 * c - b.sV.w) / 2, d = c * (b.csX / b.c.c2);
                        break;
                    case 16:
                        d = c * (b.csX / b.c.c2)
                } else switch (b.c.s0) {
                    case 1:
                        g = b.sV.h / 2 - (b.sV.h / b.c.c2 * c - b.sV.h) / 2 - b.sV.h, e = b.csY - c * (b.csY / b.c.c2);
                        break;
                    case 2:
                        f = b.sV.w / 2 - (b.sV.w - b.sV.w / b.c.c2 * c) / 2, d = b.csX - c * (b.csX / b.c.c2);
                        break;
                    case 3:
                        g = b.sV.h / 2 - (b.sV.h - b.sV.h / b.c.c2 * c) / 2, e = b.csY - c * (b.csY / b.c.c2);
                        break;
                    case 4:
                        f = b.sV.w / 2 - (b.sV.w / b.c.c2 * c - b.sV.w) / 2 - b.sV.w, d = b.csX - c * (b.csX / b.c.c2);
                        break;
                    case 16:
                        d = b.csX - c * (b.csX / b.c.c2)
                }
                if (b.setTranslate(f, g), b.setScale(d, e), c >= b.c.c2) return b.sV.dpd.style.opacity = 1 == b.c.c4 ? 1 : 0, b.setScale(b.csX, b.csY), b.setTranslate(0, 0), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.animStarted = !1;
            var b = this;
            Cbfun(a)
        }
    };
    Stretch.prototype = new Banim;
    var Glide = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.mX = 150 / this.c.c2, this.mO = 1 / this.c.c2)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.animStarted && (b.animStarted = !0, b.csX = void 0 == b.sV.d.dpsX ? 1 : b.sV.d.dpsX, b.csY = void 0 == b.sV.d.dpsY ? 1 : b.sV.d.dpsY, b.mS = b.csX / b.c.c2);
                var d, e, f;
                if (2 == b.c.c4 ? (d = b.csX - c * b.mS, f = 150 - c * b.mX - 150, e = 1 - c * b.mO) : (f = c * b.mX - 150, d = c * b.mS, e = c * b.mO), b.setTranslate(f, 0), b.setScale(d, b.csY), b.sV.dpd.style.opacity = e, c >= b.c.c2) return b.sV.dpd.style.opacity = 1 == b.c.c4 ? 1 : 0, b.setScale(b.csX, b.csY), b.setTranslate(0, 0), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.animStarted = !1;
            var b = this;
            Cbfun(a)
        }
    };
    Glide.prototype = new Banim;
    var Compress = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.mO = 1 / this.c.c2)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                if (b.playCaS(), 0 == b.animStarted) {
                    b.csX = void 0 == b.sV.d.dpsX ? 1 : b.sV.d.dpsX, b.csY = void 0 == b.sV.d.dpsY ? 1 : b.sV.d.dpsY;
                    var d = b.sV.w;
                    d = (d + 120) / d, b.cX = b.csX * d, b.sDif = b.cX / b.c.c2, b.animStarted = !1
                }
                var e, f;
                if (2 == b.c.c4 ? (e = b.csX + c * b.sDif, f = 1 - c * b.mO) : (e = b.cX + b.csX - c * b.sDif, f = c * b.mO), b.sV.dpd.style.opacity = f, b.setScale(e, b.csY), c >= b.c.c2) return b.sV.dpd.style.opacity = 2 == b.c.c4 ? 0 : 1, b.setScale(b.csX, b.csY), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.animStarted = !1;
            var b = this;
            Cbfun(a)
        }
    };
    Compress.prototype = new Banim;
    var Credits = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.slH = parseInt(gv.h, 10), this.shT = parseInt(this.sV.d.style.top, 10), this.shH = parseInt(this.sV.h, 10), this.yDif = 2 * this.slH, this.mY = this.yDif / this.c.c2, 2 == this.c.c4 && (this.slH = -1 * this.slH))
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.animStarted && (b.setTranslate(0, b.slH), b.sV.dpd.style.opacity = 1, b.animStarted = !0);
                var d = 1 == b.c.c4 ? b.cY - c * b.mY : b.cY + c * b.mY;
                if (b.setTranslate(0, d), c >= b.c.c2) return 2 == b.c.c4 && (b.sV.dpd.style.opacity = 0), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.animStarted = !1, this.cY = this.slH;
            var b = this;
            this.df = !1, Cbfun(a)
        }
    };
    Credits.prototype = new Banim;
    var FlashBulb = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.mO = .5 / (this.c.c2 / 2), this.mS = .025 / (this.c.c2 / 2), this.fO = 1, this.fSCale = 1)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS();
                var d, e = c / b.c.c2 * 100,
                    f = 0;
                if (e < 50 ? (d = 1 + c * b.mS, f = 1 - c * b.mO) : (d = 1.05 - c * b.mS, f = c * b.mO), b.sV.dpd.style.opacity = f, b.setScale(d, d), c >= b.c.c2) return b.setScale(b.fScale, b.fScale), b.sV.dpd.style.opacity = b.fO, void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    FlashBulb.prototype = new Banim;
    var Appear = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                return c < 0 ? void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a)) : (b.playCaS(), c >= b.c.c2 ? (1 == b.c.c4 ? b.sV.dpd.style.opacity = 1 : b.sV.dpd.style.opacity = 0, void b.doRepeat()) : void Cbfun(a))
            }
            this.resetBanim(), this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    Appear.prototype = new Banim;
    var FlashOnce = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c < 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                if (b.playCaS(), 1 == b.c.c4) b.sV.dpd.style.opacity = 1;
                else {
                    var d = c / b.c.c2 * 100;
                    b.sV.dpd.style.opacity = d < 50 ? 0 : 1
                }
                if (c >= b.c.c2) return b.sV.dpd.style.opacity = 0, void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    FlashOnce.prototype = new Banim;
    var Bounce = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.dX = 187, this.tDif = this.dX / this.c.c2, this.bTh = 630)
        }, this.play = function() {
            function a(a, b, d, e) {
                var f, g = d - b;
                a < d ? (f = (a - b) / g * e, c.setScale(c.csX, (1 - f) * c.csY)) : a < d + g && (f = (a - (b + g)) / g * e, c.setScale(c.csX, (1 - e + f) * c.csY))
            }

            function b() {
                if (c.pozd || c.stpd) return void c.stopCaS();
                var d = c.gtime() - c.st - c.c.c1;
                if (d <= 0) return void(Math.abs(d) > c.c.c1 ? c.reset() : Cbfun(b));
                c.playCaS(), 0 == c.animStarted && (c.csX = void 0 == c.sV.d.dpsX ? 1 : c.sV.d.dpsX, c.csY = void 0 == c.sV.d.dpsY ? 1 : c.sV.d.dpsY, 1 == c.c.c4 && (c.setTranslate(c.dX, c.dX), c.sV.dpd.style.opacity = 1), this.animStarted = !0);
                var e, f = d / c.c.c2 * 100,
                    g = (c.tDif, d / c.c.c2 * 630),
                    h = 90 - d / c.c.c2 * 90;
                g < 90 ? e = 187 : g < 270 ? (e = 75, a(f, 14, 18, .3)) : g < 450 ? (e = 37, a(f, 41, 45, .15)) : g < 630 && (e = 17, a(f, 71, 75, .07));
                var i = Math.cos(Math.PI / 180 * g),
                    j = 187 * (1 - Math.cos(Math.PI / 180 * h)),
                    k = e * Math.abs(i);
                if (1 == c.c.c4 ? c.setTranslate(-j, -k) : c.setTranslate(187 - j, 187 - k), d >= c.c.c2) return 2 == c.c.c4 && (c.sV.dpd.style.opacity = 0), c.setTranslate(0, 0), c.setScale(c.csX, c.csY), void c.doRepeat();
                Cbfun(b)
            }
            this.resetBanim(), this.plyBlockAnim(), this.animStarted = !1;
            var c = this;
            Cbfun(b)
        }
    };
    Bounce.prototype = new Banim;
    var CenterRevolve = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.dY = 175, this.dX = 115, this.tDif = this.dY / (.6 * this.c.c2), this.dO = 1 / (.1 * this.c.c2))
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.bStdAnm && 1 == b.c.c4 && (b.sV.dpd.style.opacity = 1, b.setTranslate(0, b.dY), b.bStdAnm = !0);
                var d, e, f, g, h, i = c / b.c.c2 * 100;
                if (i < 10 && 1 == b.c.c4 ? (f = (c - .1 * b.c.c2) * b.dO, b.sV.dpd.style.opacity = 1 + f) : i > 90 && 2 == b.c.c4 ? (f = (c - .9 * b.c.c2) * b.dO, b.sV.dpd.style.opacity = 1 - f) : i > 40 && 1 == b.c.c4 ? (h = (c - .4 * b.c.c2) * b.tDif, 0, g = (c - .4 * b.c.c2) / (.6 * b.c.c2) * 180, e = Math.sin(Math.PI / 180 * g), d = b.dX * Math.abs(e), b.setTranslate(d, 175 - h)) : i < 60 && 2 == b.c.c4 && (h = (c - .6 * b.c.c2) * b.tDif, 0, g = (c - .6 * b.c.c2) / (.6 * b.c.c2) * 180, e = Math.sin(Math.PI / 180 * g), d = b.dX * Math.abs(e), b.setTranslate(d, 175 + h)), c >= b.c.c2) return 2 == b.c.c4 && (b.sV.dpd.style.opacity = 0), b.setTranslate(0, 0), b.setScale(1, 1), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.bStdAnm = !1;
            var b = this;
            Cbfun(a)
        }
    };
    CenterRevolve.prototype = new Banim;
    var CurveUp = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.dY = 550, this.dX = 200, this.yDif = this.dY / this.c.c2, this.sDif = 2 / this.c.c2, this.oDif = 1 / this.c.c2)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.bStdAnm && 1 == b.c.c4 && (b.sV.dpd.style.opacity = 1, b.setTranslate(b.dX, b.dY), b.bStdAnm = !0);
                var d, e, f, g, h = c * b.yDif,
                    i = c / b.c.c2 * 270;
                if (1 == b.c.c4 ? (f = Math.cos(Math.PI / 180 * i), g = b.dX * f, b.setTranslate(-g, b.dY - h), d = 3 - c * b.sDif, e = c * b.oDif) : (f = Math.sin(Math.PI / 180 * i), g = b.dX * f, b.setTranslate(g, h), d = 1 + c * b.sDif, e = 1 - c * b.oDif), b.setScale(d, d), b.sV.dpd.style.opacity = e, c >= b.c.c2) return 2 == b.c.c4 && (b.sV.dpd.style.opacity = 0), b.setTranslate(0, 0), b.setScale(1, 1), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.bStdAnm = !1;
            var b = this;
            Cbfun(a)
        }
    };
    CurveUp.prototype = new Banim;
    var RiseUp = function(a) {
        this.c = a, this.Initialize = function(a) {
            if (this.initBanim(a)) {
                var b = gv.h,
                    c = parseInt(this.sV.d.style.top, 10);
                parseInt(this.sV.h, 10);
                this.dY = b - c + 20, this.yDif1 = this.dY / (.9 * this.c.c2), this.yDif2 = 20 / (.1 * this.c.c2), this.oDif = 1 / this.c.c2
            }
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.bStdAnm && 1 == b.c.c4 && (b.sV.dpd.style.opacity = 1, b.setTranslate(0, b.dY - 20), b.bStdAnm = !0);
                var d, e, f, g = c / b.c.c2 * 100,
                    h = 0;
                if (1 == b.c.c4 ? (g < 90 ? (e = (c - .1 * b.c.c2) / (.9 * b.c.c2) * 90, f = Math.cos(Math.PI / 180 * e), h = f * ((.9 * b.c.c2 - c) * b.yDif1)) : h = (c - .9 * b.c.c2) * b.yDif2, b.setTranslate(0, h - 20), d = c * b.oDif) : (g < 10 ? h = -c * b.yDif2 : (e = (c - .1 * b.c.c2) / (.9 * b.c.c2) * 90, f = Math.cos(Math.PI / 180 * e), h = b.dY - b.dY * f - 20), b.setTranslate(0, h), d = 1 - c * b.oDif), b.sV.dpd.style.opacity = d, c >= b.c.c2) return 2 == b.c.c4 && (b.sV.dpd.style.opacity = 0), b.setTranslate(0, 0), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.bStdAnm = !1;
            var b = this;
            Cbfun(a)
        }
    };
    RiseUp.prototype = new Banim;
    var Float = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.mX1 = 340 / (.8 * this.c.c2), this.mY1 = 280 / (.8 * this.c.c2), this.mX2 = 37 / (.2 * this.c.c2), this.mY2 = 56 / (.2 * this.c.c2), this.oDif = 1 / (.8 * this.c.c2), this.rDif = 90 / (.8 * this.c.c2))
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.animStarted && (b.cA = void 0 == b.sV.d.dpA ? 0 : b.sV.d.dpA, b.animStarted = !0);
                var d, e, f = 0,
                    g = c / b.c.c2 * 100,
                    h = 0,
                    i = 0,
                    j = 0;
                if (1 == b.c.c4 ? (g < 80 ? (d = (c - .2 * b.c.c2) / (.8 * b.c.c2) * 90, e = Math.cos(Math.PI / 180 * d), i = (.8 * b.c.c2 - c) * b.mX1 * e - 37, h = (.8 * b.c.c2 - c) * b.mY1 * e - 56, j = (c - .8 * b.c.c2) * b.rDif * e, f = 1 + (c - .8 * b.c.c2) * b.oDif) : (d = (c - .8 * b.c.c2) / (.2 * b.c.c2) * 90, e = Math.sin(Math.PI / 180 * d), i = (c - .8 * b.c.c2) * b.mX2 * e - 37, h = (c - .8 * b.c.c2) * b.mY2 * e - 56, f = 1), b.setTranslate(i, -h), b.setRotate(j + b.cA)) : (g > 20 ? (d = (c - .2 * b.c.c2) / (.8 * b.c.c2) * 90, e = Math.cos(Math.PI / 180 * d), i = 340 - 340 * e - 37, h = 280 - 280 * e - 56, j = 360 - (90 - 90 * e), f = 1 * e) : (d = (c - .8 * b.c.c2) / (.2 * b.c.c2) * 90, e = Math.sin(Math.PI / 180 * d), i = -c * b.mX2, h = -c * b.mY2, j = 0, f = 1), b.setTranslate(i, -h), b.setRotate(j + b.cA)), b.sV.dpd.style.opacity = f, c >= b.c.c2) return 2 == b.c.c4 && (b.sV.dpd.style.opacity = 0), b.setTranslate(0, 0), b.setRotate(b.cA), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.animStarted = !1;
            var b = this;
            Cbfun(a)
        }
    };
    Float.prototype = new Banim;
    var Boomerang = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.animStarted && (b.csX = void 0 == b.sV.d.dpsX ? 1 : b.sV.d.dpsX, b.csY = void 0 == b.sV.d.dpsY ? 1 : b.sV.d.dpsY, b.cA = void 0 == b.sV.d.dpA ? 0 : b.sV.d.dpA, b.animStarted = !0);
                var d, e = 0,
                    f = c / b.c.c2 * 100,
                    g = 0,
                    h = 0,
                    i = 0;
                2 == b.c.c4 && (f = 100 - f);
                var j = (c - .5 * b.c.c2) / (.5 * b.c.c2) * 90,
                    k = Math.cos(Math.PI / 180 * j);
                if (f < 50 ? (h = 220 - 220 * k, g = -(140 - 140 * k - 56), i = -(45 - 45 * k), d = b.csX - .9 * k * b.csX, e = k) : (g = 56 * k, d = b.csX - .9 * k * b.csX, e = 1), b.setTranslate(h, g), b.setRotate(i + b.cA), b.setScale(d, b.csY), b.sV.dpd.style.opacity = e, c >= b.c.c2) return 2 == b.c.c4 && (b.sV.dpd.style.opacity = 0), b.setTranslate(0, 0), b.setRotate(b.cA), b.setScale(b.csX, b.csY), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.animStarted = !1;
            var b = this;
            Cbfun(a)
        }
    };
    Boomerang.prototype = new Banim;
    var Sling = function(a) {
        this.c = a, this.Initialize = function(a) {
            if (this.initBanim(a)) {
                var b = parseInt(this.sV.w, 10),
                    c = parseInt(this.sV.h, 10),
                    d = parseInt(this.sV.d.style.left, 10),
                    e = gv.w,
                    f = e - (d + (b - c) / 2);
                this.x1 = f - 38 - c / 2, this.difX2 = 1400 / (.5 * this.c.c2), this.difX1 = this.x1 / (.5 * this.c.c2), this.cX = this.x1 - 1400, this.difO = 1 / this.c.c2
            }
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.animStarted && (b.cA = void 0 == b.sV.d.dpA ? 0 : b.sV.d.dpA, b.difA = 90 / (.2 * b.c.c2), 1 == b.c.c4 && (b.setTranslate(b.cX, 0), b.setRotate(b.cA + 90), b.sV.dpd.style.opacity = 1), b.animStarted = !0);
                var d = 0,
                    e = c / b.c.c2 * 100,
                    f = 0,
                    g = 0;
                if (1 == b.c.c4 ? (e < 50 ? (f = b.difX2 * (c - .5 * b.c.c2) + b.x1, b.setTranslate(f, 0)) : (f = b.x1 - b.difX1 * (c - .5 * b.c.c2), b.setTranslate(f, 0), e > 80 && (g = 90 - (c - .8 * b.c.c2) * b.difA, b.setRotate(b.cA + g))), d = c * b.difO) : (e <= 50 ? (f = b.difX1 * c, b.setTranslate(f, 0), e <= 20 ? (g = c * b.difA, b.setRotate(b.cA + g)) : b.setRotate(b.cA + 90)) : (b.setRotate(b.cA + 90), f = 1400 + b.x1 - b.difX2 * (c - .5 * b.c.c4), b.setTranslate(f, 0)), d = 1 - c * b.difO), b.sV.dpd.style.opacity = d, c >= b.c.c2) return 2 == b.c.c4 && (b.sV.dpd.style.opacity = 0), b.setTranslate(0, 0), b.setRotate(b.cA), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.animStarted = !1;
            var b = this;
            Cbfun(a)
        }
    };
    Sling.prototype = new Banim;
    var Fold = function(a) {
        this.c = a, this.Initialize = function(a) {
            if (this.initBanim(a)) {
                var b = parseInt(this.sV.d.style.top, 10),
                    c = gv.h;
                this.cY = c - b, this.difY = this.cY / this.c.c2, this.difO = 1 / this.c.c2
            }
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.animStarted && (b.animStarted = !0, b.sV.dpd.style.opacity = 1 == b.c.c4 ? 0 : 1, b.csX = void 0 == b.sV.d.dpsX ? 1 : b.sV.d.dpsX, b.csY = void 0 == b.sV.d.dpsY ? 1 : b.sV.d.dpsY, b.difSX = 2.5 / b.c.c2, b.difSY = b.csY / b.c.c2);
                var d = 0,
                    e = 0,
                    f = 1,
                    g = 1;
                if (1 == b.c.c4 ? (e = b.cY - c * b.difY, d = c * b.difO, f = b.csX + 2.5 - c * b.difSX, g = c * b.difSY) : (e = c * b.difY, d = 1 - c * b.difO, f = b.csX + c * b.difSX, g = b.csY - c * b.difSY), b.setTranslate(0, e), b.setScale(f, g), b.sV.dpd.style.opacity = d, c >= b.c.c2) return 2 == b.c.c4 && (b.sV.dpd.style.opacity = 0), b.setTranslate(0, 0), b.setScale(b.csX, b.csY), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.animStarted = !1;
            var b = this;
            Cbfun(a)
        }
    };
    Fold.prototype = new Banim;
    var Magnify = function(a) {
        this.c = a, this.Initialize = function(a) {
            if (this.initBanim(a)) {
                var b = parseInt(this.sV.d.style.left, 10),
                    c = (parseInt(this.sV.d.style.top, 10), parseInt(this.sV.w, 10)),
                    d = parseInt(this.sV.h, 10),
                    e = gv.h,
                    f = gv.w;
                this.cY = e / 2 - d / 2, this.cX = b < f / 2 ? f / 2 - c / 2 - b : -(b - (f / 2 - c / 2)), this.difX = this.cX / (.6 * this.c.c2), this.difY = this.cY / (.6 * this.c.c2), this.difO = 1 / (.4 * this.c.c2), this.difSX1 = 2 / (.4 * this.c.c2), this.difSY1 = 4.5 / (.4 * this.c.c2), this.difSX2 = 1 / (.6 * this.c.c2), this.difSY2 = 3.5 / (.6 * this.c.c2)
            }
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.bStdAnm && 1 == b.c.c4 && (b.setTranslate(b.cX, b.cY), b.sV.dpd.style.opacity = 1, b.bStdAnm = !0);
                var d = 0,
                    e = 0,
                    f = 0,
                    g = 1,
                    h = 1,
                    i = c / b.c.c2 * 100;
                if (1 == b.c.c4 ? i < 40 ? (g = c * b.difSX1, h = c * b.difSY1, b.setScale(g, h), d = c * b.difO, b.sV.dpd.style.opacity = d) : (e = b.cX - (c - .4 * b.c.c2) * b.difX, f = b.cY - (c - .4 * b.c.c2) * b.difY, b.setTranslate(e, f), g = 2 - (c - .4 * b.c.c2) * b.difSX2, h = 4.5 - (c - .4 * b.c.c2) * b.difSY2, b.setScale(g, h)) : i < 60 ? (e = c * b.difX, f = c * b.difY, b.setTranslate(e, f), g = 1 + c * b.difSX2, h = 1 + c * b.difSY2, b.setScale(g, h)) : (g = 2 - (c - .6 * b.c.c2) * b.difSX1, h = 4.5 - (c - .6 * b.c.c2) * b.difSY1, b.setScale(g, h), d = 1 - (c - .6 * b.c.c2) * b.difO, b.sV.dpd.style.opacity = d), c >= b.c.c2) return 2 == b.c.c4 ? b.sV.dpd.style.opacity = 0 : b.sV.dpd.style.opacity = 1, b.setTranslate(0, 0), b.setScale(1, 1), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.bStdAnm = !1;
            var b = this;
            Cbfun(a)
        }
    };
    Magnify.prototype = new Banim;
    var Unfold = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.difX = 48 / this.c.c2, this.difO = 1 / this.c.c2)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS();
                var d = 0,
                    e = 0;
                if (1 == b.c.c4 ? (d = c * b.difX - 48, e = c * b.difO) : (d = -c * b.difX, e = 1 - c * b.difO), b.sV.dpd.style.opacity = e, b.setTranslate(d, 0), c >= b.c.c2) return 1 == b.c.c4 ? b.sV.dpd.style.opacity = 1 : b.sV.dpd.style.opacity = 0, b.setTranslate(0, 0), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    Unfold.prototype = new Banim;
    var Whip = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.animStarted = !1)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.animStarted && (b.animStarted = !0, b.csX = void 0 == b.sV.d.dpsX ? 1 : b.sV.d.dpsX, b.csY = void 0 == b.sV.d.dpsY ? 1 : b.sV.d.dpsY, b.difX = 70 / (.5 * b.c.c2), b.difO = 1 / (.5 * b.c.c2), b.difSX = b.csX / (.5 * b.c.c2), b.difSY = b.csY / (.5 * b.c.c2));
                var d = 0,
                    e = 0,
                    f = b.csX,
                    g = b.csY,
                    h = c / b.c.c2 * 100;
                if (1 == b.c.c4 ? h < 50 ? (d = c * b.difX, e = c * b.difO, f = c * b.difSX, g = c * b.difSY, b.sV.dpd.style.opacity = e) : (d = 70 - (c - .5 * b.c.c2) * b.difX, nS = 1) : h < 50 ? (d = 70 + (c - .5 * b.c.c2) * b.difX, nS = 1) : (d = 70 - (c - .5 * b.c.c2) * b.difX, e = 1 - (c - .5 * b.c.c2) * b.difO, f = b.csX - (c - .5 * b.c.c2) * b.difSX, g = b.csY - (c - .5 * b.c.c2) * b.difSY, b.sV.dpd.style.opacity = e), b.setTranslate(d, 0), b.setScale(f, g), c >= b.c.c2) return 1 == b.c.c4 ? b.sV.dpd.style.opacity = 1 : b.sV.dpd.style.opacity = 0, b.setTranslate(0, 0), b.setScale(b.csX, b.csY), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    Whip.prototype = new Banim;
    var Thread = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.cX = -225, this.difX = this.cX / (.7 * this.c.c2))
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                if (b.playCaS(), 0 == b.animStarted) {
                    b.animStarted = !0, b.csX = void 0 == b.sV.d.dpsX ? 1 : b.sV.d.dpsX, b.csY = void 0 == b.sV.d.dpsY ? 1 : b.sV.d.dpsY;
                    var d = parseInt(b.sV.w, 10);
                    b.sX = b.csX * ((d + 225) / d), b.difSX = (b.sX - b.csX) / (.3 * b.c.c2), b.difSY = .95 * b.csY / (.3 * b.c.c2), 1 == b.c.c4 && (b.setTranslate(b.cX, 0), b.sV.dpd.style.opacity = 1)
                }
                var e = 0,
                    f = 1,
                    g = 1,
                    h = c / b.c.c2 * 100;
                if (1 == b.c.c4 ? (h < 70 ? (e = b.cX - c * b.difX, f = b.sX, g = .05 * b.csY) : (f = b.sX - (c - .7 * b.c.c2) * b.difSX, g = (c - .7 * b.c.c2) * b.difSY), b.setTranslate(e, 0), b.setScale(f, g)) : (h < 30 ? (f = b.csX + c * b.difSX, g = b.csY - c * b.difSY) : (e = (c - .3 * b.c.c2) * b.difX, f = b.sX, g = .05 * b.csY), b.setTranslate(e, 0), b.setScale(f, g)), c >= b.c.c2) return b.sV.dpd.style.opacity = 1 == b.c.c4 ? 1 : 0, b.setTranslate(0, 0), b.setScale(b.csX, b.csY), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.animStarted = !1;
            var b = this;
            Cbfun(a)
        }
    };
    Thread.prototype = new Banim;
    var Swish = function(a) {
        this.c = a, this.Initialize = function(a) {
            if (this.initBanim(a)) {
                var b = (parseInt(this.sV.d.style.top, 10), parseInt(this.sV.h, 10), gv.h);
                this.cY = b, this.difY1 = this.cY / (.5 * this.c.c2), this.difY2 = 50 / (.2 * this.c.c2), this.difA = 45 / (.2 * this.c.c2), this.difA2 = 45 / (.5 * this.c.c2), this.difA3 = 45 / this.c.c2
            }
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.bStdAnm && 1 == b.c.c4 && (b.setTranslate(0, b.cY), b.setRotate(-45), b.sV.dpd.style.opacity = 1, b.bStdAnm = !0);
                var d, e, f, g, h, i = c / b.c.c2 * 100;
                if (1 == b.c.c4 ? i <= 50 ? (e = -(b.cY - c * b.difY1), b.setTranslate(0, e)) : i > 50 && (f = (c - .5 * b.c.c2) / (.5 * b.c.c2) * 360, g = Math.sin(Math.PI / 180 * f), h = 0, f <= 180 ? d = 50 : f > 180 && (d = 10), e = d * Math.abs(g), b.setTranslate(0, -e), i < 75 ? (h = b.difA * (c - .5 * b.c.c2) - 45, b.setRotate(h)) : i < 88 ? (h = 11 - b.difA2 * (c - .75 * b.c.c2), b.setRotate(h)) : b.setRotate(0)) : (f = c / b.c.c2 * 90, g = Math.sin(Math.PI / 180 * f), e = g * (c * b.difY1), b.setTranslate(0, e), h = b.difA3 * c, b.setRotate(h)), c >= b.c.c2) return 1 == b.c.c4 ? b.sV.dpd.style.opacity = 1 : b.sV.dpd.style.opacity = 0, b.setTranslate(0, 0), b.setRotate(0), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.bStdAnm = !1;
            var b = this;
            Cbfun(a)
        }
    };
    Swish.prototype = new Banim;
    var Flip = function(a) {
        this.c = a, this.Initialize = function(a) {
            if (this.initBanim(a)) {
                var b = parseInt(this.sV.h, 10);
                this.cY = parseInt(this.sV.d.style.top, 10) + b, this.difY = this.cY / this.c.c2, this.difA = 360 / this.c.c2
            }
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.animStarted && (b.csX = void 0 == b.sV.d.dpsX ? 1 : b.sV.d.dpsX, b.csY = void 0 == b.sV.d.dpsY ? 1 : b.sV.d.dpsY, b.cA = void 0 == b.sV.d.dpA ? 0 : b.sV.d.dpA, 1 == b.c.c4 && (b.setTranslate(0, b.cY), b.sV.dpd.style.opacity = 1), b.animStarted = !0);
                var d = 0,
                    e = 0;
                d = 1 == b.c.c4 ? -(b.cY - c * b.difY) : c * b.difY;
                var f = c / b.c.c2 * 180,
                    g = 37 * Math.sin(Math.PI / 180 * f);
                b.setTranslate(g, d), e = c * b.difA, b.setRotate(b.cA + e);
                var h = c / b.c.c2 * 360,
                    i = b.csX * Math.cos(Math.PI / 180 * h);
                if (b.setScale(i, b.csY), c >= b.c.c2) return b.sV.dpd.style.opacity = 1 == b.c.c4 ? 1 : 0, b.setTranslate(0, 0), b.setRotate(b.cA), b.setScale(b.csX, b.csY), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.animStarted = !1;
            var b = this;
            Cbfun(a)
        }
    };
    Flip.prototype = new Banim;
    var SpiralIn = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.cX = parseInt(this.sV.d.style.left, 10) + parseInt(this.sV.w, 10), this.difX = this.cX / this.c.c2)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.animStarted && (b.animStarted = !0, b.csX = void 0 == b.sV.d.dpsX ? 1 : b.sV.d.dpsX, b.csY = void 0 == b.sV.d.dpsY ? 1 : b.sV.d.dpsY, 1 == b.c.c4 && (b.setTranslate(b.cX, 0), b.sV.dpd.style.opacity = 1), b.msX = b.csX / b.c.c2, b.msY = b.csY / b.c.c2);
                var d = 1 == b.c.c4 ? b.cX - b.difX * c : b.difX * c,
                    e = c / b.c.c2 * 360 - 180,
                    f = Math.cos(e * Math.PI / 180) * d,
                    g = Math.sin(e * Math.PI / 180) * d;
                b.setTranslate(f, g);
                var h, i;
                if (1 == b.c.c4 ? (h = c * b.msX, i = c * b.msY) : (h = b.csX - c * b.msX, i = b.csY - c * b.msY), b.setScale(h, i), c >= b.c.c2) return b.sV.dpd.style.opacity = 1 == b.c.c4 ? 1 : 0, b.setTranslate(0, 0), b.setScale(b.csX, b.csY), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), this.animStarted = !1;
            var b = this;
            Cbfun(a)
        }
    };
    SpiralIn.prototype = new Banim;
    var GrowShrink = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.rev = 1 == this.c.c7, this.animStarted = !1)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.animStarted && (b.sV.d.dpsX = void 0 == b.sV.d.dpsX ? 1 : b.sV.d.dpsX, b.sV.d.dpsY = void 0 == b.sV.d.dpsY ? 1 : b.sV.d.dpsY, b.scaleX = b.c.s2 / 100 * b.sV.d.dpsX - b.sV.d.dpsX, b.scaleY = b.c.s3 / 100 * b.sV.d.dpsY - b.sV.d.dpsY, b.CSX = b.sV.d.dpsX, b.CSY = b.sV.d.dpsY, b.animStarted = !0);
                var d = b.rev ? c / b.c.c2 * 180 : c / b.c.c2 * 90,
                    e = b.CSX + b.scaleX * Math.sin(Math.PI / 180 * d),
                    f = b.CSY + b.scaleY * Math.sin(Math.PI / 180 * d);
                if (b.setScale(e, f), b.sV.d.dpsX = e, b.sV.d.dpsY = f, c >= b.c.c2) return 1 == b.rev ? (e = b.CSX, f = b.CSY) : (e = b.CSX + b.scaleX, f = b.CSY + b.scaleY), b.setScale(e, f), b.sV.d.dpsX = e, b.sV.d.dpsY = f, void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    GrowShrink.prototype = new Banim;
    var Spin = function(a) {
        this.c = a, this.Initialize = function(b) {
            this.initBanim(b) && (this.rev = 1 == this.c.c7, this.angle = a.s0, this.mA = 1 == this.rev ? this.angle / (this.c.c2 / 2) : this.angle / this.c.c2, this.animStarted = !1)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), 0 == b.animStarted && (b.sV.d.dpA = void 0 == b.sV.d.dpA ? 0 : b.sV.d.dpA, b.cA = b.sV.d.dpA, b.animStarted = !0);
                var d = 0;
                if (0 == b.rev) d = b.cA + c * b.mA;
                else {
                    d = c / b.c.c2 * 100 < 50 ? b.cA + c * b.mA : b.cA + (b.angle - (c - b.c.c2 / 2) * b.mA)
                }
                if (b.setRotate(d), b.sV.d.dpA = d, c >= b.c.c2) return 1 == b.rev ? b.setRotate(b.cA) : b.setRotate(b.cA + b.angle), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    Spin.prototype = new Banim;
    var Transparency = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.opac = this.c.s5)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                if (b.playCaS(), b.sV.dpd.style.opacity = 1 - b.opac, c >= b.c.c2) {
                    if (-2 == b.c.c3) return;
                    return b.sV.dpd.style.opacity = 1, void b.doRepeat()
                }
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    Transparency.prototype = new Banim;
    var Blink = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS();
                var d = c / b.c.c2 * 100;
                if (b.sV.dpd.style.opacity = d < 50 ? 0 : 1, c >= b.c.c2) return b.sV.dpd.style.opacity = 1, void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    Blink.prototype = new Banim;
    var Teeter = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initMskAnim(a) && (this.Color = this.c.s4)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS();
                var d = (b.c.c2, c / b.c.c2 * 720),
                    e = 2 * Math.sin(Math.PI / 180 * d);
                if (b.setRotate(e), c >= b.c.c2) return b.setRotate(0), void b.doRepeat();
                Cbfun(a)
            }
            this.resetMskAnim(), this.plyBlockAnim();
            var b = this;
            this.drawn = !1, Cbfun(a)
        }
    };
    Teeter.prototype = new MskAnim;
    var Darken = function(a) {
        var b = this;
        b.c = a, b.Initialize = function(b) {
            var c = this;
            if (isNaN(c.c.c0) ? c.initBanim(b) : c.initMskAnim(b)) {
                "Darken" === a.c5 ? c.Color = [0, 0, 0] : c.Color = [255, 255, 255], c.preColors = [];
                try {
                    for (var d = c.sV.d.getElementsByTagName("pre"), e = d.length, f = 0; f < e; f++) {
                        var g = d[f];
                        c.preColors[c.preColors.length] = window.getComputedStyle(g, null).getPropertyValue("color")
                    }
                } catch (a) {}
            }
        }, b.play = function() {
            function a() {
                if (d.pozd || d.stpd) return void d.stopCaS();
                var e = d.gtime() - d.st - d.c.c1;
                if (e <= 0) return void(Math.abs(e) > d.c.c1 ? d.reset() : Cbfun(a));
                e = e > d.c.c2 ? d.c.c2 : e, d.playCaS();
                try {
                    if (isNaN(d.c.c0)) {
                        var f = rgbString2Array(d.preColors[d.preColors.length - 1]).map(function(a) {
                                return parseInt(a, 10)
                            }),
                            g = e >= d.c.c2 ? .6 : e / d.c.c2 * .6;
                        "Darken" === d.c.c5 && (g *= -1);
                        var h = b(g, f);
                        c(d.sV.d.getElementsByTagName("pre"), "color", h)
                    }
                    if (1 == d.bgcv.bdrawn && 0 == d.drawn) {
                        d.fct.save(), d.frcv.draw(d.bgcv, !0), d.sV.dpd.style.opacity = 1, d.drawn = !0, d.fct.restore();
                        for (var i = d.fct.getImageData(0, 0, d.w, d.h), j = i.data, k = 0, l = j.length; k < l; k += 4) j[k] = d.Color[0], j[k + 1] = d.Color[1], j[k + 2] = d.Color[2];
                        d.fct.putImageData(i, 0, 0)
                    }
                } catch (a) {}
                if (!isNaN(d.c.c0)) {
                    var m = "Darken" === d.c.c5 ? .6 : .5;
                    d.frcv.cv.style.opacity = e >= d.c.c2 ? m : e / d.c.c2 * m
                }
                if (e >= d.c.c2) return void d.doRepeat();
                Cbfun(a)
            }

            function b(a, b) {
                var c = Math.round,
                    d = a < 0;
                a = d ? -1 * a : a;
                var e = d ? [0, 0, 0] : [255, 255, 255];
                return [c((e[0] - b[0]) * a + b[0]), c((e[1] - b[1]) * a + b[1]), c((e[2] - b[2]) * a + b[2])]
            }

            function c(a, b, c) {
                for (var d = a.length, e = 0; e < d; e++) {
                    a[e].style[b] = "rgb(" + c.join(",") + ")"
                }
            }
            var d = this;
            isNaN(this.c.c0) ? this.resetBanim() : d.resetMskAnim(), d.plyBlockAnim(), d.drawn = !1, Cbfun(a)
        }
    };
    Darken.prototype = new MskAnim;
    var Desaturate = function(a) {
        var b = this;
        b.c = a, b.Initialize = function(a) {
            var b = this;
            if (isNaN(b.c.c0) ? b.initBanim(a) : b.initMskAnim(a)) {
                b.preColors = [];
                try {
                    for (var c = b.sV.d.getElementsByTagName("pre"), d = c.length, e = 0; e < d; e++) {
                        var f = c[e];
                        b.preColors[b.preColors.length] = window.getComputedStyle(f, null).getPropertyValue("color")
                    }
                } catch (a) {}
            }
        }, b.play = function() {
            function a() {
                if (c.pozd || c.stpd) return void c.stopCaS();
                var d = c.gtime() - c.st - c.c.c1;
                if (d <= 0) return void(Math.abs(d) > c.c.c1 ? c.reset() : Cbfun(a));
                d = d > c.c.c2 ? c.c.c2 : d, c.playCaS();
                try {
                    if (isNaN(c.c.c0)) {
                        var e = rgbString2Array(c.preColors[c.preColors.length - 1]).map(function(a) {
                                return parseInt(a, 10)
                            }),
                            f = d / c.c.c2;
                        f = f > .8 ? .8 : f;
                        var g = hsl.hsl(e[0], e[1], e[2]);
                        g.s -= f, g.s = Math.min(1, Math.max(0, g.s));
                        var h = hsl.rgb(g.h, hsl.c(g.s), hsl.c(g.l));
                        b(c.sV.d.getElementsByTagName("pre"), "color", h)
                    }
                    if (1 == c.bgcv.bdrawn && 0 == c.drawn) {
                        c.fct.save(), c.frcv.draw(c.bgcv, !0), c.sV.dpd.style.opacity = 1, c.drawn = !0, c.fct.restore();
                        for (var i = c.fct.getImageData(0, 0, c.w, c.h), j = i.data, k = 0, l = j.length; k < l; k += 4) {
                            var m = .3 * j[k] + .59 * j[k + 1] + .11 * j[k + 2];
                            j[k] = m, j[k + 1] = m, j[k + 2] = m
                        }
                        c.fct.putImageData(i, 0, 0)
                    }
                } catch (a) {}
                if (isNaN(c.c.c0) || (c.frcv.cv.style.opacity = d >= c.c.c2 ? 1 : d / c.c.c2), d >= c.c.c2) return void c.doRepeat();
                Cbfun(a)
            }

            function b(a, b, c) {
                for (var d = a.length, e = 0; e < d; e++) {
                    a[e].style[b] = "rgb(" + c.join(",") + ")"
                }
            }
            var c = this;
            isNaN(this.c.c0) ? this.resetBanim() : c.resetMskAnim(), c.plyBlockAnim(), c.drawn = !1, Cbfun(a)
        }
    };
    Desaturate.prototype = new MskAnim;
    var ColorBlend = function(a) {
        var b = this;
        b.c = a, this.Initialize = function(a) {
            var b = this;
            if (isNaN(b.c.c0) ? b.initBanim(a) : b.initMskAnim(a)) {
                b.Color = b.c.s4, b.preColors = [];
                try {
                    for (var c = b.sV.d.getElementsByTagName("pre"), d = c.length, e = 0; e < d; e++) {
                        var f = c[e];
                        b.preColors[b.preColors.length] = window.getComputedStyle(f, null).getPropertyValue("color")
                    }
                } catch (a) {}
            }
        }, b.play = function() {
            function a() {
                if (c.pozd || c.stpd) return void c.stopCaS();
                var d = c.gtime() - c.st - c.c.c1;
                if (d <= 0) return void(Math.abs(d) > c.c.c1 ? c.reset() : Cbfun(a));
                d = d > c.c.c2 ? c.c.c2 : d, c.playCaS();
                try {
                    if (isNaN(c.c.c0)) {
                        var e = rgbString2Array(c.preColors[c.preColors.length - 1]).map(function(a) {
                                return parseInt(a, 10)
                            }),
                            f = [];
                        f[0] = Math.abs(e[0] + Math.round((c.Color[0] - e[0]) / c.c.c2 * d)), f[1] = Math.abs(e[1] + Math.round((c.Color[1] - e[1]) / c.c.c2 * d)), f[2] = Math.abs(e[2] + Math.round((c.Color[2] - e[2]) / c.c.c2 * d));
                        b(c.sV.d.getElementsByTagName("pre"), "color", f)
                    } else if (1 == c.bgcv.bdrawn && 0 == c.drawn) {
                        c.fct.save(), c.frcv.draw(c.bgcv, !0), c.sV.dpd.style.opacity = 1, c.drawn = !0, c.fct.restore();
                        for (var g = c.fct.getImageData(0, 0, c.w, c.h), h = g.data, i = 0, j = h.length; i < j; i += 4) h[i] = c.Color[0], h[i + 1] = c.Color[1], h[i + 2] = c.Color[2];
                        c.fct.putImageData(g, 0, 0)
                    }
                } catch (a) {}
                if (isNaN(c.c.c0) || (c.frcv.cv.style.opacity = d >= c.c.c2 ? 1 : d / c.c.c2 * 1), d >= c.c.c2) return void c.doRepeat();
                Cbfun(a)
            }

            function b(a, b, c) {
                for (var d = a.length, e = 0; e < d; e++) {
                    a[e].style[b] = "rgb(" + c.join(",") + ")"
                }
            }
            var c = this;
            isNaN(this.c.c0) ? this.resetBanim() : c.resetMskAnim(), c.plyBlockAnim(), c.drawn = !1, Cbfun(a)
        }
    };
    ColorBlend.prototype = new MskAnim;
    var GrowwithColor = function(a) {
        var b = this;
        b.c = a, this.Initialize = function(a) {
            var b = this;
            if (isNaN(b.c.c0) ? b.initBanim(a) : b.initMskAnim(a)) {
                this.Color = this.c.s4, b.preColors = [];
                try {
                    for (var c = b.sV.d.getElementsByTagName("pre"), d = c.length, e = 0; e < d; e++) {
                        var f = c[e];
                        b.preColors[b.preColors.length] = window.getComputedStyle(f, null).getPropertyValue("color")
                    }
                } catch (a) {}
            }
        }, b.play = function() {
            function a() {
                if (c.pozd || c.stpd) return void c.stopCaS();
                var d = c.gtime() - c.st - c.c.c1;
                if (d <= 0) return void(Math.abs(d) > c.c.c1 ? c.reset() : Cbfun(a));
                d = d > c.c.c2 ? c.c.c2 : d, c.playCaS();
                var e = d / c.c.c2 * 90,
                    f = Math.sin(Math.PI / 180 * e);
                isNaN(c.c.c0) || c.setScale(1 + f, 1 + f);
                try {
                    if (isNaN(c.c.c0)) {
                        var g = rgbString2Array(c.preColors[c.preColors.length - 1]).map(function(a) {
                                return parseInt(a, 10)
                            }),
                            h = [];
                        h[0] = Math.abs(g[0] + Math.round((c.Color[0] - g[0]) / c.c.c2 * d)), h[1] = Math.abs(g[1] + Math.round((c.Color[1] - g[1]) / c.c.c2 * d)), h[2] = Math.abs(g[2] + Math.round((c.Color[2] - g[2]) / c.c.c2 * d));
                        b(c.sV.d.getElementsByTagName("pre"), "color", h)
                    } else if (1 == c.bgcv.bdrawn && 0 == c.drawn) {
                        c.fct.save(), c.frcv.draw(p.bgcv, !0), c.sV.dpd.style.opacity = 1, c.drawn = !0, c.fct.restore();
                        for (var i = c.fct.getImageData(0, 0, c.w, c.h), j = i.data, k = 0, l = j.length; k < l; k += 4) j[k] = c.Color[0], j[k + 1] = c.Color[1], j[k + 2] = c.Color[2];
                        c.fct.putImageData(i, 0, 0)
                    }
                } catch (a) {}
                if (isNaN(c.c.c0) || (c.frcv.cv.style.opacity = d >= c.c.c2 ? 1 : d / c.c.c2 * 1), d >= c.c.c2) return void c.doRepeat();
                Cbfun(a)
            }

            function b(a, b, c) {
                for (var d = a.length, e = 0; e < d; e++) {
                    a[e].style[b] = "rgb(" + c.join(",") + ")"
                }
            }
            var c = this;
            isNaN(this.c.c0) ? this.resetBanim() : c.resetMskAnim(), c.plyBlockAnim(), c.drawn = !1, Cbfun(a)
        }
    };
    GrowwithColor.prototype = new MskAnim;
    var Flicker = function(a) {
        var b = this;
        b.c = a, b.Initialize = function(a) {
            var b = this;
            if (isNaN(b.c.c0) ? b.initBanim(a) : b.initMskAnim(a)) {
                b.Color = b.c.s4, b.preColors = [];
                try {
                    for (var c = b.sV.d.getElementsByTagName("pre"), d = c.length, e = 0; e < d; e++) {
                        var f = c[e];
                        b.preColors[b.preColors.length] = window.getComputedStyle(f, null).getPropertyValue("color")
                    }
                } catch (a) {}
            }
        }, b.play = function() {
            function a() {
                if (c.pozd || c.stpd) return void c.stopCaS();
                var d = c.gtime() - c.st - c.c.c1;
                if (d <= 0) return void(Math.abs(d) > c.c.c1 ? c.reset() : Cbfun(a));
                d = d > c.c.c2 ? c.c.c2 : d, c.playCaS();
                try {
                    if (isNaN(c.c.c0)) {
                        var e = rgbString2Array(c.preColors[c.preColors.length - 1]).map(function(a) {
                                return parseInt(a, 10)
                            }),
                            f = [],
                            g = c.c.c2 / 2,
                            h = d;
                        h > g && (h = c.c.c2 - h), f[0] = Math.abs(e[0] + Math.round((c.Color[0] - e[0]) / g * h)), f[1] = Math.abs(e[1] + Math.round((c.Color[1] - e[1]) / g * h)), f[2] = Math.abs(e[2] + Math.round((c.Color[2] - e[2]) / g * h));
                        b(c.sV.d.getElementsByTagName("pre"), "color", f)
                    } else if (1 == c.bgcv.bdrawn && 0 == c.drawn) {
                        c.fct.save(), c.frcv.draw(c.bgcv, !0), c.sV.dpd.style.opacity = 1, c.drawn = !0, c.fct.restore();
                        for (var i = c.fct.getImageData(0, 0, c.w, c.h), j = i.data, k = 0, l = j.length; k < l; k += 4) {
                            j[k], j[k + 1], j[k + 2];
                            j[k] = c.Color[0], j[k + 1] = c.Color[1], j[k + 2] = c.Color[2]
                        }
                        c.fct.putImageData(i, 0, 0)
                    }
                } catch (a) {}
                var m = d / c.c.c2 * 180,
                    n = Math.sin(Math.PI / 180 * m);
                if (isNaN(c.c.c0) || (c.frcv.cv.style.opacity = d >= c.c.c2 ? 0 : n), d >= c.c.c2) return void c.doRepeat();
                Cbfun(a)
            }

            function b(a, b, c) {
                for (var d = a.length, e = 0; e < d; e++) {
                    a[e].style[b] = "rgb(" + c.join(",") + ")"
                }
            }
            var c = this;
            isNaN(this.c.c0) ? this.resetBanim() : c.resetMskAnim(), c.plyBlockAnim(), c.drawn = !1, Cbfun(a)
        }
    };
    Flicker.prototype = new MskAnim;
    var VerticalHighlight = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initMskAnim(a) && (this.Color = this.c.s4, this.difSY = .4 / (.25 * this.c.c2), this.difC = 1 / (.25 * this.c.c2))
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS();
                try {
                    if (1 == b.bgcv.bdrawn && 0 == b.drawn) {
                        b.fct.save(), b.frcv.draw(b.bgcv, !0), b.sV.dpd.style.opacity = 1, b.drawn = !0, b.fct.restore();
                        for (var d = b.fct.getImageData(0, 0, b.w, b.h), e = d.data, f = 0, g = e.length; f < g; f += 4) {
                            e[f], e[f + 1], e[f + 2];
                            e[f] = b.Color[0], e[f + 1] = b.Color[1], e[f + 2] = b.Color[2]
                        }
                        b.fct.putImageData(d, 0, 0)
                    }
                } catch (a) {}
                var h = c / b.c.c2 * 100,
                    i = 1,
                    j = 0;
                if (h < 25 ? (i = 1 + c * b.difSY, j = b.difC * c) : h > 75 ? (i = 1.4 - (c - .75 * b.c.c2) * b.difSY, j = 1 - b.difC * (c - .75 * b.c.c2)) : (i = 1.4, j = 1), b.setScale(1, i), b.frcv.cv.style.opacity = j, c >= b.c.c2) return b.setScale(1, 1), b.frcv.cv.style.opacity = 0, void b.doRepeat();
                Cbfun(a)
            }
            this.resetMskAnim(), this.plyBlockAnim();
            var b = this;
            this.drawn = !1, Cbfun(a)
        }
    };
    VerticalHighlight.prototype = new MskAnim;
    var ChangeFillColor = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initMskAnim(a) && (this.Color = this.c.s4, this.ColorStyle = 2, this.rev = 1 == this.c.c7)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS();
                try {
                    if (1 == b.bgcv.bdrawn && 0 == b.drawn) {
                        b.fct.save(), b.frcv.draw(b.bgcv, !0), b.sV.dpd.style.opacity = 1, b.drawn = !0, b.fct.restore();
                        for (var d = b.fct.getImageData(0, 0, b.w, b.h), e = d.data, f = 0, g = e.length; f < g; f += 4) e[f] = b.Color[0], e[f + 1] = b.Color[1], e[f + 2] = b.Color[2];
                        b.fct.putImageData(d, 0, 0)
                    }
                    Cv.tmpDrawText(b.sV.d, 0, 0, b)
                } catch (a) {}
                if (1 != b.ColorStyle) {
                    var h = 0 == b.rev ? c / b.c.c2 * 90 : c / b.c.c2 * 180,
                        i = Math.sin(Math.PI / 180 * h);
                    1 == b.rev ? b.frcv.cv.style.opacity = c >= b.c.c2 ? 0 : i : b.frcv.cv.style.opacity = c >= b.c.c2 ? 1 : i
                } else 1 == b.rev ? b.frcv.cv.style.opacity = c >= b.c.c2 ? 0 : 1 : b.frcv.cv.style.opacity = 1;
                if (c >= b.c.c2) return void b.doRepeat();
                Cbfun(a)
            }
            this.resetMskAnim(), this.plyBlockAnim();
            var b = this;
            this.drawn = !1, Cbfun(a)
        }
    };
    ChangeFillColor.prototype = new MskAnim;
    var ChangeFontColor = function(a) {
        this.c = a, this.Initialize = function(a) {
            var b = this;
            if (b.initBanim(a)) {
                b.Color = this.c.s4, b.ColorStyle = 2, b.rev = 1 == b.c.c7, b.preColors = [];
                try {
                    for (var c = b.sV.d.getElementsByTagName("pre"), d = c.length, e = 0; e < d; e++) {
                        var f = c[e];
                        b.preColors[b.preColors.length] = f.style.color
                    }
                } catch (a) {}
            }
        }, this.play = function() {
            function a() {
                function c(a, b, c) {
                    for (var d = a.length, e = 0; e < d; e++) {
                        a[e].style[b] = c
                    }
                }
                if (b.pozd || b.stpd) return void b.stopCaS();
                var d = b.gtime() - b.st - b.c.c1;
                if (d <= 0) return void(Math.abs(d) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS();
                var e = b.sV.d.getElementsByTagName("pre");
                if (c(e, "color", "rgb(" + b.Color[0] + "," + b.Color[1] + "," + b.Color[2] + ")"), 1 != b.ColorStyle) {
                    var f = 0 == b.rev ? d / b.c.c2 * 90 : d / b.c.c2 * 180,
                        g = Math.sin(Math.PI / 180 * f);
                    1 == b.rev ? c(e, "opacity", d >= b.c.c2 ? 0 : g) : c(e, "opacity", d >= b.c.c2 ? 1 : g)
                } else 1 == b.rev ? c(e, "opacity", d >= b.c.c2 ? 0 : 1) : c(e, "opacity", 1);
                if (d >= b.c.c2) return void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    ChangeFontColor.prototype = new Banim;
    var Blast = function(a) {
        var b = this;
        b.c = a, b.Initialize = function(a) {
            var b = this;
            if (isNaN(b.c.c0) ? b.initBanim(a) : b.initMskAnim(a)) {
                b.Color = b.c.s4, b.animStarted = !1, b.preColors = [];
                try {
                    for (var c = b.sV.d.getElementsByTagName("pre"), d = c.length, e = 0; e < d; e++) {
                        var f = c[e];
                        b.preColors[b.preColors.length] = window.getComputedStyle(f, null).getPropertyValue("color")
                    }
                } catch (a) {}
            }
        }, b.play = function() {
            function a() {
                if (c.pozd || c.stpd) return void c.stopCaS();
                var d = c.gtime() - c.st - c.c.c1;
                if (d <= 0) return void(Math.abs(d) > c.c.c1 ? c.reset() : Cbfun(a));
                d = d > c.c.c2 ? c.c.c2 : d, c.playCaS(), 0 == c.animStarted && (c.animStarted = !0, c.difSY1 = 1 / (.1 * c.c.c2), c.difSY2 = 1.5 / (.1 * c.c.c2), c.difSX2 = .2 / (.1 * c.c.c2));
                try {
                    if (isNaN(c.c.c0)) {
                        var e = rgbString2Array(c.preColors[c.preColors.length - 1]).map(function(a) {
                                return parseInt(a, 10)
                            }),
                            f = [];
                        f[0] = Math.abs(e[0] + Math.round((c.Color[0] - e[0]) / c.c.c2 * d)), f[1] = Math.abs(e[1] + Math.round((c.Color[1] - e[1]) / c.c.c2 * d)), f[2] = Math.abs(e[2] + Math.round((c.Color[2] - e[2]) / c.c.c2 * d));
                        b(c.sV.d.getElementsByTagName("pre"), "color", f)
                    }
                    if (1 == c.bgcv.bdrawn && 0 == c.drawn) {
                        c.fct.save(), c.frcv.draw(c.bgcv, !0), c.sV.dpd.style.opacity = 1, c.drawn = !0, c.fct.restore();
                        for (var g = c.fct.getImageData(0, 0, c.w, c.h), h = g.data, i = 0, j = h.length; i < j; i += 4) h[i] = c.Color[0], h[i + 1] = c.Color[1], h[i + 2] = c.Color[2];
                        c.fct.putImageData(g, 0, 0)
                    }
                } catch (a) {}
                var k = d / c.c.c2 * 100,
                    l = c.csY,
                    m = c.csX;
                if (k < 10 ? (l = 1 - c.difSY1 * d, m = 1) : k < 20 ? (l = c.difSY2 * (d - .1 * c.c.c2), m = 1 + c.difSX2 * (d - .1 * c.c.c2)) : (l = 1.5, m = 1.2), c.setScale(m, l), c.sV.d.dpsY = l, c.sV.d.dpsX = m, isNaN(c.c.c0) || (c.frcv.cv.style.opacity = d >= c.c.c2 ? 1 : d / c.c.c2), d >= c.c.c2) return c.setScale(1.2, 1.5), c.sV.d.dpsY = 1.5, c.sV.d.dpsX = 1.2, void c.doRepeat();
                Cbfun(a)
            }

            function b(a, b, c) {
                for (var d = a.length, e = 0; e < d; e++) {
                    a[e].style[b] = "rgb(" + c.join(",") + ")"
                }
            }
            var c = this;
            isNaN(this.c.c0) ? c.resetBanim() : c.resetMskAnim(), c.plyBlockAnim(), c.drawn = !1, Cbfun(a)
        }
    };
    Blast.prototype = new MskAnim;
    var BrushOnColor = function(a) {
        this.c = a, this.Initialize = function(a) {
            var b = this;
            if (b.initBanim(a)) {
                b.rev = 1 == b.c.c7, b.preColors = [];
                try {
                    for (var c = b.sV.d.getElementsByTagName("pre"), d = c.length, e = 0; e < d; e++) {
                        var f = c[e];
                        b.preColors[b.preColors.length] = f.style.color
                    }
                } catch (a) {}
            }
        }, this.play = function() {
            function a() {
                function c(a, b, c) {
                    for (var d = a.length, e = 0; e < d; e++) {
                        a[e].style[b] = "rgb(" + c.join(",") + ")"
                    }
                }
                if (b.pozd || b.stpd) return void b.stopCaS();
                var d = b.gtime() - b.st - b.c.c1;
                return d <= 0 ? void(Math.abs(d) > b.c.c1 ? b.reset() : Cbfun(a)) : (d = d > b.c.c2 ? b.c.c2 : d, b.playCaS(), c(b.sV.d.getElementsByTagName("pre"), "color", b.c.s4), d >= b.c.c2 ? void b.doRepeat() : void Cbfun(a))
            }
            var b = this;
            b.resetBanim(), b.plyBlockAnim(), Cbfun(a)
        }
    };
    BrushOnColor.prototype = new Banim;
    var BrushOnUnderline = function(a) {
        this.c = a, this.Initialize = function(a) {
            var b = this;
            if (b.initBanim(a)) {
                b.rev = 1 == b.c.c7, b.ul = [];
                try {
                    for (var c = b.sV.d.getElementsByTagName("pre"), d = c.length, e = 0; e < d; e++) {
                        var f = c[e];
                        b.ul[b.ul.length] = StylePpty.getComputedStyle(f, "textDecoration")
                    }
                } catch (a) {}
            }
        }, this.play = function() {
            function a() {
                function c(a, b, c) {
                    for (var d = a.length, e = 0; e < d; e++) {
                        a[e].style[b] = c
                    }
                }
                if (b.pozd || b.stpd) return void b.stopCaS();
                var d = b.gtime() - b.st - b.c.c1;
                return d <= 0 ? void(Math.abs(d) > b.c.c1 ? b.reset() : Cbfun(a)) : (d = d > b.c.c2 ? b.c.c2 : d, b.playCaS(), c(b.sV.d.getElementsByTagName("pre"), "text-decoration", "underline"), d >= b.c.c2 ? void b.doRepeat() : void Cbfun(a))
            }
            var b = this;
            b.resetBanim(), b.plyBlockAnim(), Cbfun(a)
        }
    };
    BrushOnUnderline.prototype = new Banim;
    var Wave = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS();
                var d = -c / b.c.c2 * 180,
                    e = Math.sin(Math.PI / 180 * d),
                    f = 40 * e;
                b.setTranslate(0, f);
                var g = c / b.c.c2 * 360,
                    h = 25 * Math.sin(Math.PI / 180 * g);
                if (b.setRotate(h), b.sV.dpd.style.opacity = 1, c >= b.c.c2) return b.setTranslate(0, 0), b.setRotate(0), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    Wave.prototype = new Banim;
    var hsl = new _hsl,
        ComplementaryColor = function(a) {
            var b = this;
            b.c = a, b.Initialize = function(a) {
                var b = this;
                if (isNaN(b.c.c0) ? b.initBanim(a) : b.initMskAnim(a)) {
                    b.Color = b.c.s4, "ComplementaryColor" == b.c.c5 ? b.colMax = 120 : "ComplementaryColor2" == b.c.c5 ? b.colMax = 240 : b.colMax = 180, b.dif = b.colMax / b.c.c2, b.animStarted = !1, b.rev = 1 === b.c.c7, b.preColors = [];
                    try {
                        for (var c = b.sV.d.getElementsByTagName("pre"), d = c.length, e = 0; e < d; e++) {
                            var f = c[e];
                            b.preColors[b.preColors.length] = window.getComputedStyle(f, null).getPropertyValue("color")
                        }
                    } catch (a) {}
                }
            }, this.play = function() {
                function a() {
                    if (c.pozd || c.stpd) return void c.stopCaS();
                    var d = c.gtime() - c.st - c.c.c1;
                    if (d <= 0) return void(Math.abs(d) > c.c.c1 ? c.reset() : Cbfun(a));
                    if (d = d > c.c.c2 ? c.c.c2 : d, c.playCaS(), 0 == c.animStarted) {
                        var e = [];
                        c.animStarted = !0, e = rgb2hsv(c.preColors.length > 0 && isNaN(c.c.c0) ? rgbString2Array(c.preColors[c.preColors.length - 1]).map(function(a) {
                            return parseInt(a, 10)
                        }) : c.Color), c.curr_h = e[0], c.bs = e[1], c.bv = e[2], c.cc = c.curr_h;
                        var f = c.bgcv.cvt.getImageData(0, 0, c.w, c.h).data;
                        c.oHSVDate = [];
                        for (var g = 0, h = f.length; g < h; g += 4) c.oHSVDate[c.oHSVDate.length] = rgb2hsv([f[g], f[g + 1], f[g + 2]])
                    }
                    var i = d >= c.c.c2 ? c.dif * c.c.c2 : c.dif * d;
                    try {
                        if (isNaN(c.c.c0)) {
                            c.curr_h = i + c.cc, c.curr_h = c.curr_h % 360;
                            var j = hsv2color(c.curr_h, c.bs, c.bv);
                            b(c.sV.d.getElementsByTagName("pre"), "color", j)
                        } else if (1 == c.bgcv.bdrawn) {
                            c.fct.save(), c.frcv.draw(c.bgcv, !0), c.sV.dpd.style.opacity = 1, c.drawn = !0, c.fct.restore();
                            for (var k = c.fct.getImageData(0, 0, c.w, c.h), l = k.data, g = 0, m = 0, h = l.length; g < h; g += 4, m++) {
                                var n = (c.oHSVDate[m][0] + i) % 360,
                                    o = hsv2color(n, c.oHSVDate[m][1], c.oHSVDate[m][2]);
                                l[g] = o[0], l[g + 1] = o[1], l[g + 2] = o[2]
                            }
                            c.fct.putImageData(k, 0, 0)
                        }
                        Cv.tmpDrawText(c.sV.d, 0, 0, c)
                    } catch (a) {}
                    if (d >= c.c.c2) return void c.doRepeat();
                    Cbfun(a)
                }

                function b(a, b, c) {
                    for (var d = a.length, e = 0; e < d; e++) {
                        a[e].style[b] = "rgb(" + c.join(",") + ")"
                    }
                }
                var c = this;
                isNaN(this.c.c0) ? c.resetBanim() : c.resetMskAnim(), c.plyBlockAnim(), c.drawn = !1, Cbfun(a)
            }
        };
    ComplementaryColor.prototype = new MskAnim;
    var Shimmer = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS();
                var d = c / b.c.c2 * 180,
                    e = Math.sin(Math.PI / 180 * d),
                    f = 1 - .2 * e,
                    g = 10 * e,
                    h = b.sV.w / 2 * e,
                    i = b.sV.h / 6 * e;
                if (b.setScale(f, 1), b.setRotate(-g), b.setTranslate(h, -i), c >= b.c.c2) return b.setTranslate(0, 0), b.setRotate(0), b.setScale(1, 1), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    Shimmer.prototype = new Banim;
    var ColorTypewriter = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initMskAnim(a) && (this.Color1 = [192, 80, 77], this.Color2 = [0, 0, 255])
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS();
                var d = c / b.c.c2 * 100,
                    e = [];
                d < 50 ? (b.drawn = !1, e = b.Color1) : (b.drawn = !1, e = b.Color2);
                try {
                    if (1 == b.bgcv.bdrawn && 0 == b.drawn) {
                        b.fct.save(), b.frcv.draw(b.bgcv, !0), b.sV.dpd.style.opacity = 1, b.drawn = !0, b.fct.restore();
                        for (var f = b.fct.getImageData(0, 0, b.w, b.h), g = f.data, h = 0, i = g.length; h < i; h += 4) g[h] = e[0], g[h + 1] = e[1], g[h + 2] = e[2];
                        b.fct.putImageData(f, 0, 0)
                    }
                    b.drawn = !0
                } catch (a) {}
                if (b.frcv.cv.style.opacity = 1, c >= b.c.c2) return b.dltCv(), void b.doRepeat();
                Cbfun(a)
            }
            this.resetMskAnim(), this.plyBlockAnim();
            var b = this;
            this.drawn = !1, Cbfun(a)
        }
    };
    ColorTypewriter.prototype = new MskAnim;
    var Cover = function(a) {
        this.c = a, this.Initialize = function(a) {
            if (this.initBanim(a)) {
                this.csld = null;
                var b = this.sV.d,
                    c = b.style.height && "100%" != b.style.height ? parseFloat(b.style.height) : parseFloat(b.parentNode.style.height),
                    d = b.style.width && "100%" != b.style.width ? parseFloat(b.style.width) : parseFloat(b.parentNode.style.width);
                this.x1 = this.x2 = this.y1 = this.y2 = 0;
                var e = this.c.s0 > 8 ? this.c.s0 - 8 : this.c.s0;
                2 == e || 5 == e || 6 == e ? this.x1 = d : 3 != e && 7 != e && 8 != e || (this.x1 = -1 * d), 4 == e || 6 == e || 8 == e ? this.y1 = c : 1 != e && 5 != e && 7 != e || (this.y1 = -1 * c), this.c.s0 > 8 && (this.x2 = -1 * this.x1, this.y2 = -1 * this.y1, this.x1 = this.y1 = 0), this.LMove = new Line(this.x1, this.y1, this.x2, this.y2, this.c.c2)
            }
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS();
                var d;
                if (b.c.s0 < 9 ? (d = c >= b.c.c2 ? {
                        x: 0,
                        y: 0
                    } : b.LMove.getPointAfterT(c), b.setTranslate(d.x, d.y), null != b.sV.d && (b.sV.d.style.opacity = 1)) : (null == b.csld && (b.csld = gv.o("s" + gc + "s0"), b.sV.d = gv.o("s" + gpc + "s0"), null === b.sV.d && (b.sV.d = b.csld), gc < gpc ? (null != b.sV.d && (b.sV.d.style.zIndex = "0"), b.csld.style.zIndex = "0") : null != b.sV.d && (b.sV.d.style.zIndex += 1), null != b.sV.d && (b.sV.d.style.opacity = 1), b.csld.style.opacity = 1), null == b.sV.d || b.csld.id == b.sV.d.id ? (d = c >= b.c.c2 ? {
                        x: 0,
                        y: 0
                    } : b.LMove.getRevPointAfterT(c), b.setTranslate(-d.x, -d.y)) : (d = c >= b.c.c2 ? {
                        x: 0,
                        y: 0
                    } : b.LMove.getPointAfterT(c), b.setTranslate(d.x, d.y))), c >= b.c.c2) return b.csld = null, b.s0 > 8 && null != b.sV.d && (b.sV.d.style.opacity = 0), void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim(), Cbfun(a);
            var b = this
        }
    };
    Cover.prototype = new Banim;
    var Push = function(a) {
        this.c = a, this.Initialize = function(a) {
            if (this.initBanim(a)) {
                this.csld = null;
                var b = this.sV.d,
                    c = b.style.height && "100%" != b.style.height ? parseFloat(b.style.height) : parseFloat(b.parentNode.style.height),
                    d = b.style.width && "100%" != b.style.width ? parseFloat(b.style.width) : parseFloat(b.parentNode.style.width);
                switch (this.x1 = this.x2 = this.y1 = this.y2 = 0, this.c.s0) {
                    case 1:
                        this.y1 = -c;
                        break;
                    case 2:
                        this.x1 = d;
                        break;
                    case 3:
                        this.x1 = -d;
                        break;
                    case 4:
                        this.y1 = c
                }
                this.LMove = new Line(this.x1, this.y1, this.x2, this.y2, this.c.c2)
            }
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), null == b.csld && (b.csld = gv.o("s" + gc + "s0"), b.sV.d = gv.o("s" + gpc + "s0"), null === b.sV.d && (b.sV.d = b.csld), gc < gpc ? (null != b.sV.d && (b.sV.d.style.zIndex = "0"), b.csld.style.zIndex = "0") : null != b.sV.d && (b.sV.d.style.zIndex += 1), null != b.sV.d && (b.sV.d.style.opacity = 1), b.csld.style.opacity = 1);
                var d;
                if (null == b.sV.d || b.csld.id == b.sV.d.id) d = c >= b.c.c2 ? {
                    x: 0,
                    y: 0
                } : b.LMove.getPointAfterT(c), b.setTranslate(d.x, d.y);
                else {
                    d = c >= b.c.c2 ? {
                        x: 0,
                        y: 0
                    } : b.LMove.getRevPointAfterT(c), b.setTranslate(-d.x, -d.y), d = c >= b.c.c2 ? {
                        x: 0,
                        y: 0
                    } : b.LMove.getPointAfterT(c);
                    var e = b.sV.d;
                    b.sV.d = b.csld, b.setTranslate(d.x, d.y), b.sV.d = e
                }
                if (c >= b.c.c2) return b.csld = null, void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    Push.prototype = new Banim;
    var NewsFlash = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initBanim(a) && (this.tAng = 360, this.tScl = 1)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS();
                var d = c >= b.c.c2 ? 0 : b.tAng * (1 - c / b.c.c2),
                    e = c >= b.c.c2 ? 1 : b.tScl * (c / b.c.c2);
                if (b.sV.d.style.opacity = 1, b.setScale(e, e), b.setRotate(d), c >= b.c.c2) return void b.doRepeat();
                Cbfun(a)
            }
            this.resetBanim(), this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    NewsFlash.prototype = new Banim;
    var Cut = function(a) {
        var b = this;
        b.c = a, b.Initialize = function(a) {
            var b = this;
            1 === b.c.s0 && (b.r = gv.r.o.style.backgroundColor, gv.r.o.style.backgroundColor = "rgb(0, 0, 0)"), b.initBanim(a) || (b.csld = null)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS(), null == b.csld && (b.csld = gv.o("s" + gc + "s0"), b.sV.d = gv.o("s" + gpc + "s0"), null === b.sV.d && (b.sV.d = b.csld));
                var d;
                switch (b.c.s0) {
                    case 1:
                        d = c >= b.c.c2 ? 1 : c / b.c.c2, d < .5 ? b.sV.d.style.opacity = b.csld.style.opacity = 0 : b.csld.style.opacity = d, c >= b.c.c2 && (gv.r.o.style.backgroundColor = b.r);
                        break;
                    case 2:
                        b.csld.style.opacity = 1;
                        break;
                    case 3:
                        d = c >= b.c.c2 ? 1 : c / b.c.c2, d < .5 ? b.sV.d.style.opacity = b.csld.style.opacity = 0 : b.csld.style.opacity = 1
                }
                if (c >= b.c.c2) return b.csld = null, b.sV.d.style.opacity = 1, void b.doRepeat();
                Cbfun(a)
            }
            var b = this;
            b.resetBanim(), b.plyBlockAnim(), Cbfun(a)
        }
    };
    Cut.prototype = new Banim;
    var Comb = function(a) {
        this.c = a, this.Initialize = function(a) {
            this.initMskAnim(a) && (this.mc = new Cv(this.w, this.h), this.cp = "destination-out", this.dH = 1 == this.c.s0 ? this.h / 20 : this.h, this.dW = 1 == this.c.s0 ? this.w : this.w / 20, this.len = 1 == this.c.s0 ? this.w : this.h)
        }, this.play = function() {
            function a() {
                if (b.pozd || b.stpd) return void b.stopCaS();
                var c = b.gtime() - b.st - b.c.c1;
                if (c <= 0) return void(Math.abs(c) > b.c.c1 ? b.reset() : Cbfun(a));
                b.playCaS();
                var d = c >= b.c.c2 ? b.len : b.len * (c / b.c.c2);
                b.fct.save(), b.frcv.draw(b.bgcv, !0), b.sV.dpd.style.opacity = 0, b.mc.cvt.save(), b.mc.cvt.clearRect(0, 0, b.w, b.h);
                for (var e = 0, f = 0, g = 0; g < 10; g++) b.mc.cvt.beginPath(), 1 == b.c.s0 ? (b.mc.cvt.fillRect(e, f, b.dW - d, b.dH), f += b.dH, b.mc.cvt.fillRect(d, f, b.dW - d, b.dH), f += b.dH) : 2 == b.c.s0 && (b.mc.cvt.fillRect(e, f, b.dW, b.dH - d), e += b.dW, b.mc.cvt.fillRect(e, d, b.dW, b.dH - d), e += b.dW), b.mc.cvt.closePath();
                if (b.mc.cvt.restore(), b.mc.bdrawn = !0, b.fct.globalCompositeOperation = b.cp, b.frcv.draw(b.mc, !1), b.fct.restore(), c >= b.c.c2) return b.doAfterEffect(), b.dltCv(), void b.doRepeat();
                Cbfun(a)
            }
            this.resetMskAnim(), this.plyBlockAnim();
            var b = this;
            Cbfun(a)
        }
    };
    Comb.prototype = new MskAnim;
    var Animations = {
            Split: Split,
            Plus: Plus,
            PeekOut: PeekOut,
            PeekIn: PeekOut,
            EaseOut: EaseOut,
            EaseIn: EaseOut,
            Box: Box,
            Checkerboard: Checkerboard,
            Blinds: Blinds,
            Wipe: Wipe,
            Circle: Circle,
            Diamond: Diamond,
            DissolveIn: DissolveIn,
            DissolveOut: DissolveIn,
            MotionPath: MotionPath,
            RandomBars: RandomBars,
            Strips: Strips,
            Wedge: Wedge,
            LightSpeed: LightSpeed,
            FadedSwivel: FadedSwivel,
            Swivel: FadedSwivel,
            Wheel: Wheel,
            FlyIn: FlyIn,
            FlyOut: FlyIn,
            CrawlOut: FlyIn,
            CrawlIn: FlyIn,
            Fade: Fade,
            Pinwheel: Pinwheel,
            Ascend: Ascend,
            Descend: Descend,
            GrowTurn: GrowTurn,
            Spinner: Spinner,
            Expand: Expand,
            Contract: Expand,
            FadedZoom: FadedZoom,
            Zoom: Zoom,
            Stretch: Stretch,
            Collapse: Stretch,
            Glide: Glide,
            Compress: Compress,
            Stretchy: Compress,
            Credits: Credits,
            FlashBulb: FlashBulb,
            Appear: Appear,
            Disappear: Appear,
            FlashOnce: FlashOnce,
            Bounce: Bounce,
            CenterRevolve: CenterRevolve,
            CurveUp: CurveUp,
            CurveDown: CurveUp,
            RiseUp: RiseUp,
            SinkDown: RiseUp,
            Float: Float,
            Boomerang: Boomerang,
            Sling: Sling,
            Fold: Fold,
            Magnify: Magnify,
            Unfold: Unfold,
            Whip: Whip,
            Thread: Thread,
            Swish: Swish,
            Flip: Flip,
            SpiralIn: SpiralIn,
            SpiralOut: SpiralIn,
            GrowShrink: GrowShrink,
            Spin: Spin,
            Transparency: Transparency,
            Blink: Blink,
            Teeter: Teeter,
            Darken: Darken,
            Lighten: Darken,
            Desaturate: Desaturate,
            ColorBlend: ColorBlend,
            GrowwithColor: GrowwithColor,
            Flicker: Flicker,
            VerticalHighlight: VerticalHighlight,
            ChangeFillColor: ChangeFillColor,
            ChangeFontColor: ChangeFontColor,
            Blast: Blast,
            BrushOnColor: BrushOnColor,
            ColorWave: BrushOnColor,
            BrushOnUnderline: BrushOnUnderline,
            Wave: Wave,
            ComplementaryColor: ComplementaryColor,
            ComplementaryColor2: ComplementaryColor,
            ContrastingColor: ComplementaryColor,
            Shimmer: Shimmer,
            ColorTypewriter: ColorTypewriter,
            Cover: Cover,
            UnCover: Cover,
            Push: Push,
            NewsFlash: NewsFlash,
            Cut: Cut,
            FadeThroughBlack: Cut,
            CutThroughBlack: Cut,
            Comb: Comb
        },
        tran = function(a) {
            var b = this;
            if (1 === a) b.a = 1;
            else {
                var c = Transitions[a.c5];
                typeof c === _undefined && typeof(c = Animations[a.c5]) === _undefined && (c = Animations.Fade), b.a = new c(a)
            }
            b.IniTSd = !0, b.initialize = function(a) {
                var b = this;
                1 !== b.a && b.a.Initialize(a)
            }, b.play = function() {
                var a = this;
                gx = 1;
                var b;
                if (1 === a.a) return gStartTime -= anima["s" + gc].t.i, gv.o("s" + gc + "s0").style.display = "block", gc !== gpc && null !== (b = gv.o("s" + gpc + "s0")) && (b.style.display = "none"), void(gpc > gc && null !== (b = gv.o("s" + gpc + "s0")) && (b.style.zIndex = "-1"));
                gv.o("s" + gc + "s0").style.opacity = 0, gv.o("s" + gc + "s0").style.display = "block", gpc > gc && null !== (b = gv.o("s" + gpc + "s0")) && (b.style.zIndex = "-1"), a.a.play()
            }, b.pause = function() {
                this.a.pause()
            }, b.stop = function() {
                this.a.stop()
            }, b.reset = function() {
                this.a.reset()
            }
        },
        autoAdvance = function() {
            this.play = function() {}, this.pause = function() {}, this.reset = function() {}, this.stop = function() {}, this.IniTSd = !0
        },
        aVideo = function(a, b) {
            var c = this;
            c.s = b, c.d = a.c1, c.t = a.c2, c.r = a.s0;
            var d = gv.o("s" + gc + "s" + a.c0),
                e = d.getElementsByTagName("img");
            e.length > 0 && (e[0].style.display = "none"), c.o = d.getElementsByTagName("video")[0], c.p = 0, c.a = 0, c.IniTSd = !0, c.d + c.t > 0 && (c.a = 1), this.Initialize = function() {}
        };
    aVideo.prototype.play = function() {
        function a() {
            if (0 === gp && 0 !== b.t) return void b.pause();
            var c = gt - b.s - b.d;
            if (c < 0) return void(Math.abs(c) > b.d && 0 !== b.t ? b.reset() : Cbfun(a));
            if (b.p || b.o.dopsrcErr && _events.v(cfc.i(b.o)), b.p = 1, c >= b.t && 0 !== b.t) return void b.reset();
            try {
                typeof b.o.play !== _undefined && b.o.paused && !b.o.dopsrcErr && (b.o.currentTime = c / 1e3, b.o.play())
            } catch (a) {}
            0 !== b.t && Cbfun(a)
        }
        var b = this;
        if (cfc.a(b.o, b.r), 0 === b.a) try {
            b.o.play()
        } catch (a) {} else Cbfun(a)
    }, aVideo.prototype.pause = function() {
        var a = this;
        try {
            a.o.pause()
        } catch (a) {}
        a.p = 0
    }, aVideo.prototype.reset = aVideo.prototype.stop = function(a) {
        var b = this;
        if (a) return void(0 !== b.o.currentTime && (b.o.currentTime = 0, b.o.pause(), b.p = 0));
        if (0 !== b.t) {
            if (!(b.r > 0 && 0 === b.t)) {
                try {
                    0 !== b.o.currentTime && (b.o.currentTime = 0), b.o.pause(), b.p = 0
                } catch (a) {}
                if (typeof b.o !== _undefined && typeof b.o.play !== _undefined)
                    for (var c = 0; c < au.length; c++)
                        if (au[c].id === b.o.id) return void au.splice(c, 1)
            }
        } else try {
            b.o.currentTime = 0, b.o.play()
        } catch (a) {}
    };
    var aaudio = function(a, b) {
        var c = this;
        c.s = b, c.d = a.c1, c.t = a.c2, c.r = a.s0, c.o = gv.o("s" + gc + "s" + a.c0).getElementsByTagName("audio")[0], c.o || (c.o = gv.o("s" + gc + "s" + a.c0).getElementsByTagName("video")[0]), c.p = 0, c.a = 0, c.IniTSd = !0, c.d + c.t > 0 && (c.a = 1)
    };
    aaudio.prototype.play = function() {
        function a() {
            if (b.pozd || b.stpd) return void b.pause();
            var c = gt - b.s - b.d;
            if (c < 0) return void(Math.abs(c) > b.d ? b.reset() : Cbfun(a));
            if (b.p || b.o.dopsrcErr && _events.v(cfc.i(b.o)), b.p = 1, c >= b.t) return void b.reset();
            try {
                typeof b.o.play !== _undefined && b.o.paused && !b.o.dopsrcErr && (cfc.a(b.o, b.r), b.o.currentTime = c / 1e3, b.o.play())
            } catch (a) {}
            Cbfun(a)
        }
        var b = this;
        if (b.pozd = b.stpd = !1, 0 === b.a) {
            try {
                b.o.play()
            } catch (a) {}
            cfc.a(b.o, b.r)
        } else Cbfun(a)
    }, aaudio.prototype.pause = function() {
        var a = this;
        try {
            a.pozd = 1, a.o.pause(), a.p = 0
        } catch (a) {}
    }, aaudio.prototype.reset = aaudio.prototype.stop = function() {
        var a = this;
        if (0 !== a.t) {
            if (!(a.r > 0 && 0 === a.t)) {
                try {
                    0 !== a.o.currentTime && (a.o.currentTime = 0), a.o.pause(), a.p = 0, a.stpd = 1
                } catch (a) {}
                if (typeof a.o !== _undefined && typeof a.o.play !== _undefined)
                    for (var b = 0; b < au.length; b++)
                        if (au[b][0].id === a.o.id) return void au.splice(b, 1)
            }
        } else try {
            a.o.currentTime = 0, a.o.play(), cfc.a(a.o, a.r)
        } catch (a) {}
    };
    var GlCv = function(a, b) {
            a *= gv.r.r, b *= gv.r.r, this.cv = document.createElement("canvas"), this.cv.height = b, this.cv.width = a, this.cv.style.height = this.cv.style.width = "100%", this.gl = this.cv.getContext("webgl") || this.cv.getContext("experimental-webgl"), this.apndTo = function(a) {
                this.parent = a, a.appendChild(this.cv)
            }, this.selfDelete = function() {
                this.parent.removeChild(this.cv)
            }
        },
        vshaderpart1 = "attribute vec3 a_position;attribute vec2 a_texcoord;attribute vec2 a_texcoord_back;uniform vec4 Mtr1;uniform vec4 Mtr2;uniform mat4 Mmatrix;uniform mat4 Pmatrix;varying vec2 v_texcoord;varying vec2 v_texcoord_back;";
    ThreeDCore.prototype.onEndPlay = function() {
        this.reset(), this.sV.d.style.opacity = 1;
        try {
            this.gl.getExtension("WEBGL_lose_context").loseContext()
        } catch (a) {}
        try {
            this.mc.selfDelete()
        } catch (a) {}
    }, ThreeDCore.prototype.setGLBufferData = function() {
        var a = this.gl;
        this.vertex_buffer = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.vertex_buffer), a.bufferData(a.ARRAY_BUFFER, new Float32Array(this.vertices), this.dynamic ? a.DYNAMIC_DRAW : a.STATIC_DRAW), this.index_buffer = a.createBuffer(), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.index_buffer), a.bufferData(a.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), this.dynamic ? a.DYNAMIC_DRAW : a.STATIC_DRAW)
    }, ThreeDCore.prototype.buildProgram = function() {
        var a = this.gl,
            b = a.createShader(a.VERTEX_SHADER);
        if (a.shaderSource(b, this.vertexShader()), a.compileShader(b), !a.getShaderParameter(b, a.COMPILE_STATUS)) throw a.getShaderInfoLog(b);
        var c = a.createShader(a.FRAGMENT_SHADER);
        if (a.shaderSource(c, this.fragmentShader()), a.compileShader(c), !a.getShaderParameter(c, a.COMPILE_STATUS)) throw a.getShaderInfoLog(c);
        var d = a.createProgram();
        a.attachShader(d, b), a.attachShader(d, c), a.linkProgram(d), this.shaderProgram = d
    }, ThreeDCore.prototype.start = function() {
        this.buildProgram(), this.setGLBufferData()
    }, ThreeDCore.prototype.get_TextureCordinates = function() {
        return this._texturecords || (this._texturecords = this.textureCordinatesFromVertices())
    }, ThreeDCore.prototype.set_TextureCordinates = function(a) {
        this._texturecords = a
    }, ThreeDCore.prototype.textureCordinatesFromVertices = function(a) {
        return a = a || this.vertices, textureCords = CreateArray(a, 3, 2), TranslateXY(textureCords, 2, 1, 1), ScaleXY(textureCords, 2, .5, .5), textureCords
    }, ThreeDCore.prototype.isPowerOf2 = function(a) {
        return 0 == (a & a - 1)
    }, ThreeDCore.prototype.loadTexture = function() {
        var a = this.gl;
        try {
            for (var b = 0; b < this.textures.length; b++) {
                var c = this.textures[b].tcv;
                c || (c = new Cv(a.canvas.width, a.canvas.height), c.cvt.scale(gv.r.r, gv.r.r), c.drawCmpltDiv(this.textures[b].Slide, 0, 0, this.textures[b].nbg));
                var d = a.createTexture();
                a.activeTexture(a.TEXTURE0 + b), a.bindTexture(a.TEXTURE_2D, d), this.textures[b].FlipY && a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, !0), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, c.cv);
                var e = a.getUniformLocation(this.shaderProgram, "u_texture" + b);
                a.uniform1i(e, b)
            }
        } catch (a) {
            this.gl.getExtension("WEBGL_lose_context").loseContext(), this.sV = void 0, Fade.call(this, this.c), this.Initialize(this.st)
        }
    }, ThreeDCore.prototype.calcNormals = function(a) {
        for (var b = [], c = 0, d = a.length; c < d;) {
            var e = glm.vec3.fromValues(a[c], a[c + 1], a[c + 2]);
            c += 3;
            var f = glm.vec3.fromValues(a[c], a[c + 1], a[c + 2]);
            c += 3;
            var g = glm.vec3.fromValues(a[c], a[c + 1], a[c + 2]);
            c += 3;
            var h = glm.vec3.create();
            glm.vec3.sub(h, f, e), glm.vec3.normalize(h, h);
            var i = glm.vec3.create();
            glm.vec3.sub(i, g, e), glm.vec3.normalize(i, i);
            var j = glm.vec3.create();
            j[0] = h[1] * i[2] - h[2] * i[1], j[1] = h[2] * i[0] - h[0] * i[2], j[2] = h[0] * i[1] - h[1] * i[0];
            for (var k = c - 9, l = 0; l < 3; k += 3, l++) b[k] = j[0], b[k + 1] = j[1], b[k + 2] = j[2]
        }
        return b
    }, ThreeDCore.prototype.prepareRender = function(a, b) {
        var c = this.gl;
        c.enable(c.DEPTH_TEST), c.depthFunc(c.LEQUAL), c.clearColor(0, 0, 0, b), c.clearDepth(1), c.viewport(0, 0, c.canvas.width, c.canvas.height), c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
        var d = a / this.duration;
        return d < 0 ? 0 : d > 1 ? 1 : d
    }, CopyProto(Shape, Rectangle);
    var ThreeDCheckerboard = function(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.initShapes = function() {
            this.shapes = new Shapes;
            var a = 0;
            x = 7, y = 5;
            var b = 2 / x,
                c = 2 / y,
                d = [],
                e = 0;
            17 == this.direction ? (e = 1, d = [31, 32, 30, 28, 27, 25, 33, 34, 18, 24, 16, 23, 29, 22, 19, 15, 12, 13, 10, 26, 14, 20, 21, 8, 3, 17, 0, 1, 4, 6, 5, 11, 9, 7, 2]) : d = [0, 28, 1, 30, 8, 15, 10, 14, 24, 7, 9, 16, 12, 29, 22, 3, 21, 2, 31, 25, 20, 11, 17, 4, 23, 18, 33, 5, 32, 26, 13, 19, 6, 27, 34];
            for (var f = [], g = 0; g < y; g++)
                for (var h = 0; h < x; h++) a1 = b * h - 1, b1 = c * g - 1, f[a++] = new Rectangle([a1, b1, 0], [a1 + b, b1, 0], [a1 + b, b1 + c, 0], [a1, b1 + c, 0], e);
            var i = 0;
            for (a = 0; a < f.length; a++) this.shapes.shapes[a] = f[d[a]], this.shapes.shapes[a].delay = i, i += .0113
        }, this.Initialize = function(a) {
            this.initBanim(a) && (this.init(), this.direction = this.c.s0, this.initShapes(), this.initVertices(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.dynamic = !0, this.start())
        }, this.mov_matrix = glm.mat4.create(), this.render = function(a) {
            var b = this.gl;
            total_progress = this.prepareRender(a, 1);
            var c = 0;
            for (i = 0; i < this.shapes.shapes.length; i++) {
                var d = this.shapes.shapes[i],
                    e = 0,
                    f = this.duration * d.delay,
                    e = (a - f) / (.5 * this.duration);
                e > 1 ? e = 1 : e < 0 && (e = 0), total_progress >= 1 && (e = 1), this.mov_matrix = glm.mat4.create(), deg = 180 * e * e, rad = deg * (Math.PI / 180), 17 == this.direction ? glm.mat4.rotateX(this.mov_matrix, this.mov_matrix, rad) : glm.mat4.rotateY(this.mov_matrix, this.mov_matrix, rad), b.uniform4f(this.Mtr1, 0 - d.center[0], 0 - d.center[1], 0 - d.center[2], 0), b.uniform4f(this.Mtr2, d.center[0], d.center[1], d.center[2], 0), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.drawArrays(b.TRIANGLES, c, 6), c += 6
            }
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart(), this.loadTexture()
        }
    };
    CopyProto(ThreeDCore, ThreeDCheckerboard);
    var ThreeDFlip = function(a) {
        ThreeDCore.call(this), this.c = a, this.duration = a.c2, this.initShapes = function() {
            this.shapes = new Shapes, this.shapes.shapes[0] = new Rectangle([-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0]), this.shapes.shapes[0].delay = 0, this.shapes.shapes[0].RotationOrigin = [-1, 0, 0]
        }, this.Initialize = function(a) {
            this.initBanim(a) && (this.direction = this.c.s0, this.init(), this.initShapes(), this.initVertices(), this.zmove = 0, this.xmove = 0, this.mov_matrix = glm.mat4.create(), this.mc = new GlCv(this.sV.w, this.sV.h), this.gl = this.mc.gl, this.dynamic = !0, this.start())
        }, this.render = function(a) {
            var b = this.gl,
                c = 0;
            for (total_progress = this.prepareRender(a, 1), i = 0; i < this.shapes.shapes.length; i++) {
                var d = this.shapes.shapes[i],
                    e = this.duration * d.delay,
                    f = (a - e) / (this.duration * (1 - d.delay));
                f > 1 ? f = 1 : f < 0 && (f = 0), total_progress >= 1 && (f = 1), this.mov_matrix = glm.mat4.create(), this.xmove = 0, this.zmove = 0, deg = 0, f <= .3 ? (step = f / .3, deg = -5 * step, this.zmove = -.005 * step) : f >= .7 ? (this.xmove = 2, step = (f - .7) / .3, deg = -178 - 2 * step, this.zmove = -.005 * step) : f < .7 && (step = (f - .3) / .4, this.xmove = 2 * step, this.zmove = f <= .5 ? step : 1 - step, deg = -5 - 173 * step), 1 == this.direction && (deg = 180 - deg, this.xmove = 2 - this.xmove), rad = deg * (Math.PI / 180), glm.mat4.rotateY(this.mov_matrix, this.mov_matrix, rad), b.uniform4f(this.Mtr1, 0 - d.RotationOrigin[0], 0 - d.RotationOrigin[1], 0 - d.RotationOrigin[2], 0), b.uniform4f(this.Mtr2, d.RotationOrigin[0] + this.xmove, d.RotationOrigin[1], d.RotationOrigin[2] + this.zmove, 0), b.uniformMatrix4fv(this.Mmatrix, !1, this.mov_matrix), b.drawArrays(b.TRIANGLES, c, 6), c += 6
            }
        }, this.start = function() {
            this.__proto__.start.call(this), this.shaderStart(), 1 == this.direction && (this.textures = this.textures.reverse()), this.loadTexture()
        }
    };
    CopyProto(ThreeDCore, ThreeDFlip), CopyProto(ThreeDCore, Cube), CopyProto(ThreeDCore, ThreeDBox), CopyProto(ThreeDCore, Window), CopyProto(ThreeDCore, ThreedBlinds), CopyProto(ThreeDCore, Vortex), CopyProto(ThreeDCore, Fracture), CopyProto(ThreeDCore, Glitter), CopyProto(ThreeDCore, Switch), CopyProto(ThreeDCore, Honeycomb), CopyProto(ThreeDCore, Gallery), CopyProto(ThreeDCore, Airplane), CopyProto(ThreeDCore, Origami), CopyProto(ThreeDCore, Shred), CopyProto(ThreeDCore, PageCurl), CopyProto(ThreeDCore, FallOver), glslNoice = "vec3 mod289(vec3 x) {  return x - floor(x * (1.0 / 289.0)) * 289.0; }vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0;}vec4 permute(vec4 x) {return mod289(((x * 34.0) + 1.0) * x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}float snoise(vec3 v) {const vec2  C = vec2(1.0 / 6.0, 1.0 / 3.0);const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);vec3 i = floor(v + dot(v, C.yyy));vec3 x0 = v - i + dot(i, C.xxx);vec3 g = step(x0.yzx, x0.xyz);vec3 l = 1.0 - g;vec3 i1 = min(g.xyz, l.zxy);vec3 i2 = max(g.xyz, l.zxy);vec3 x1 = x0 - i1 + C.xxx;vec3 x2 = x0 - i2 + C.yyy;vec3 x3 = x0 - D.yyy;i = mod289(i);vec4 p = permute(permute(permute(   i.z + vec4(0.0, i1.z, i2.z, 1.0))  + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));float n_ = 0.142857142857;vec3  ns = n_ * D.wyz - D.xzx;vec4 j = p - 49.0 * floor(p * ns.z * ns.z);vec4 x_ = floor(j * ns.z);vec4 y_ = floor(j - 7.0 * x_);vec4 x = x_ * ns.x + ns.yyyy; vec4 y = y_ * ns.x + ns.yyyy; vec4 h = 1.0 - abs(x) - abs(y); vec4 b0 = vec4(x.xy, y.xy); vec4 b1 = vec4(x.zw, y.zw); vec4 s0 = floor(b0) * 2.0 + 1.0;vec4 s1 = floor(b1) * 2.0 + 1.0;vec4 sh = -step(h, vec4(0.0));vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;vec3 p0 = vec3(a0.xy, h.x);vec3 p1 = vec3(a0.zw, h.y);vec3 p2 = vec3(a1.xy, h.z);vec3 p3 = vec3(a1.zw, h.w);vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));p0 *= norm.x;p1 *= norm.y;p2 *= norm.z;p3 *= norm.w;vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);m = m * m;return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1),dot(p2, x2), dot(p3, x3)));}", CopyProto(ThreeDCore, Wind), CopyProto(ThreeDCore, Crush), CopyProto(ThreeDCore, Curtains), CopyProto(ThreeDCore, Ripple), CopyProto(ThreeDCore, Drape);
    var CBCurve = function() {
            this.curves = [], this.appendCurve = function(a, b, c, d, e, f, g, h) {
                this.curves.push(new BCurve(a, b, c, d, e, f, g, h, 1))
            }, this.getPointAfterT = function(a) {
                a *= this.curves.length;
                var b = Math.floor(a);
                return this.curves[b].getPointAfterT(a % 1)
            }
        },
        CurveFrames = function(a, b, c) {
            this.npts = c, this.scale = 100;
            var d = [];
            b *= this.scale;
            for (var e = 0; e < a.length; e++) {
                for (var f = JSON.parse(a[e]), g = 0; g < f.length; g++) f[g] *= this.scale;
                for (var h = [], i = new CBCurve, j = 0; j < f.length; j += 6) i.appendCurve(f[j], f[j + 1], f[j + 2], f[j + 3], f[j + 4], f[j + 5], f[j + 6], f[j + 7]);
                var k = b / c;
                h.push(i.getPointAfterT(0));
                for (var l = 0, m = 0, n = 1; n <= c + 1; n++) {
                    var o = this.getPointAfterD(i, k, {
                        p: h[n - 1],
                        t: l
                    });
                    m += this.distance(h[n - 1], o.p), h.push(o.p), l = o.t
                }
                d[e] = h;
                for (var p = 0; p < d[e].length; p++) d[e][p].x = d[e][p].x / this.scale, d[e][p].y = d[e][p].y / this.scale
            }
            this.keyframePts = d
        };
    CurveFrames.prototype.getPointAfterD = function(a, b, c) {
        for (var d = c.t + .01, e = 0, f = .001, g = 1e-7, h = "up";;) {
            var i = a.getPointAfterT(d);
            if ((e = this.distance(i, c.p)) == b || e < b && e + .001 >= b || e > b && e - .001 <= b || !(g <= f)) return {
                p: i,
                t: d
            };
            e < b ? (d += f, h = "up") : (d -= g, "up" == h && (f -= 1e-5), h = "dn")
        }
        var i = a.getPointAfterT(d);
        return {
            p: i,
            t: d
        }
    }, CurveFrames.prototype.getPointsAfterT = function(a) {
        a *= this.keyframePts.length - 1;
        var b = Math.floor(a),
            c = a % 1;
        b >= this.keyframePts.length - 1 ? (b = this.keyframePts.length - 2, c = 1) : b < 0 && (b = 0, c = 0);
        for (var d = this.keyframePts[b], e = this.keyframePts[b + 1], f = [], g = 0; g < d.length - 1; g++) {
            var h = d[g],
                i = e[g];
            f[g] = {
                x: h.x - (h.x - i.x) * c,
                y: h.y - (h.y - i.y) * c
            }
        }
        return f
    }, CurveFrames.prototype.distance = function(a, b) {
        var c = b.x - a.x,
            d = b.y - a.y;
        return Math.sqrt(Math.pow(c, 2) + Math.pow(d, 2))
    }, CopyProto(ThreeDCore, Prestige), CopyProto(ThreeDCore, ThreeDZoom), CopyProto(ThreeDCore, FlyThrough), CopyProto(ThreeDCore, Pan);
    var glm = {
            ARRAY_TYPE: "undefined" != typeof Float32Array ? Float32Array : Array,
            hypot: function(a, b, c) {
                return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2))
            },
            mat4: Object.freeze({
                create: function() {
                    var a = new glm.ARRAY_TYPE(16);
                    return glm.ARRAY_TYPE != Float32Array && (a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0), a[0] = 1, a[5] = 1, a[10] = 1, a[15] = 1, a
                },
                ortho: function(a, b, c, d, e, f, g) {
                    var h = 1 / (b - c),
                        i = 1 / (d - e),
                        j = 1 / (f - g);
                    return a[0] = -2 * h, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = -2 * i, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 2 * j, a[11] = 0, a[12] = (b + c) * h, a[13] = (e + d) * i, a[14] = (g + f) * j, a[15] = 1, a
                },
                mul: function(a, b, c) {
                    var d = b[0],
                        e = b[1],
                        f = b[2],
                        g = b[3],
                        h = b[4],
                        i = b[5],
                        j = b[6],
                        k = b[7],
                        l = b[8],
                        m = b[9],
                        n = b[10],
                        o = b[11],
                        p = b[12],
                        q = b[13],
                        r = b[14],
                        s = b[15],
                        t = c[0],
                        u = c[1],
                        v = c[2],
                        w = c[3];
                    return a[0] = t * d + u * h + v * l + w * p, a[1] = t * e + u * i + v * m + w * q, a[2] = t * f + u * j + v * n + w * r, a[3] = t * g + u * k + v * o + w * s, t = c[4], u = c[5], v = c[6], w = c[7], a[4] = t * d + u * h + v * l + w * p, a[5] = t * e + u * i + v * m + w * q, a[6] = t * f + u * j + v * n + w * r, a[7] = t * g + u * k + v * o + w * s, t = c[8], u = c[9], v = c[10], w = c[11], a[8] = t * d + u * h + v * l + w * p, a[9] = t * e + u * i + v * m + w * q, a[10] = t * f + u * j + v * n + w * r, a[11] = t * g + u * k + v * o + w * s, t = c[12], u = c[13], v = c[14], w = c[15], a[12] = t * d + u * h + v * l + w * p, a[13] = t * e + u * i + v * m + w * q, a[14] = t * f + u * j + v * n + w * r, a[15] = t * g + u * k + v * o + w * s, a
                },
                rotateX: function(a, b, c) {
                    var d = Math.sin(c),
                        e = Math.cos(c),
                        f = b[4],
                        g = b[5],
                        h = b[6],
                        i = b[7],
                        j = b[8],
                        k = b[9],
                        l = b[10],
                        m = b[11];
                    return b !== a && (a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15]), a[4] = f * e + j * d, a[5] = g * e + k * d, a[6] = h * e + l * d, a[7] = i * e + m * d, a[8] = j * e - f * d, a[9] = k * e - g * d, a[10] = l * e - h * d, a[11] = m * e - i * d, a
                },
                rotateY: function(a, b, c) {
                    var d = Math.sin(c),
                        e = Math.cos(c),
                        f = b[0],
                        g = b[1],
                        h = b[2],
                        i = b[3],
                        j = b[8],
                        k = b[9],
                        l = b[10],
                        m = b[11];
                    return b !== a && (a[4] = b[4], a[5] = b[5], a[6] = b[6], a[7] = b[7], a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15]), a[0] = f * e - j * d, a[1] = g * e - k * d, a[2] = h * e - l * d, a[3] = i * e - m * d, a[8] = f * d + j * e, a[9] = g * d + k * e, a[10] = h * d + l * e, a[11] = i * d + m * e, a
                },
                fromRotation: function(a, b, c) {
                    var d, e, f, g = c[0],
                        h = c[1],
                        i = c[2],
                        j = glm.hypot(g, h, i);
                    return j < glm.EPSILON ? null : (j = 1 / j, g *= j, h *= j, i *= j, d = Math.sin(b), e = Math.cos(b), f = 1 - e, a[0] = g * g * f + e, a[1] = h * g * f + i * d, a[2] = i * g * f - h * d, a[3] = 0, a[4] = g * h * f - i * d, a[5] = h * h * f + e, a[6] = i * h * f + g * d, a[7] = 0, a[8] = g * i * f + h * d, a[9] = h * i * f - g * d, a[10] = i * i * f + e, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a)
                },
                fromQuat: function(a, b) {
                    var c = b[0],
                        d = b[1],
                        e = b[2],
                        f = b[3],
                        g = c + c,
                        h = d + d,
                        i = e + e,
                        j = c * g,
                        k = d * g,
                        l = d * h,
                        m = e * g,
                        n = e * h,
                        o = e * i,
                        p = f * g,
                        q = f * h,
                        r = f * i;
                    return a[0] = 1 - l - o, a[1] = k + r, a[2] = m - q, a[3] = 0, a[4] = k - r, a[5] = 1 - j - o, a[6] = n + p, a[7] = 0, a[8] = m + q, a[9] = n - p, a[10] = 1 - j - l, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a
                }
            }),
            vec3: Object.freeze({
                create: function() {
                    var a = new glm.ARRAY_TYPE(3);
                    return glm.ARRAY_TYPE != Float32Array && (a[0] = 0, a[1] = 0, a[2] = 0), a
                },
                fromValues: function(a, b, c) {
                    var d = new glm.ARRAY_TYPE(3);
                    return d[0] = a, d[1] = b, d[2] = c, d
                },
                rotateX: function(a, b, c, d) {
                    var e = [],
                        f = [];
                    return e[0] = b[0] - c[0], e[1] = b[1] - c[1], e[2] = b[2] - c[2], f[0] = e[0], f[1] = e[1] * Math.cos(d) - e[2] * Math.sin(d), f[2] = e[1] * Math.sin(d) + e[2] * Math.cos(d), a[0] = f[0] + c[0], a[1] = f[1] + c[1], a[2] = f[2] + c[2], a
                },
                rotateY: function(a, b, c, d) {
                    var e = [],
                        f = [];
                    return e[0] = b[0] - c[0], e[1] = b[1] - c[1], e[2] = b[2] - c[2], f[0] = e[2] * Math.sin(d) + e[0] * Math.cos(d), f[1] = e[1], f[2] = e[2] * Math.cos(d) - e[0] * Math.sin(d), a[0] = f[0] + c[0], a[1] = f[1] + c[1], a[2] = f[2] + c[2], a
                },
                sub: function(a, b, c) {
                    return a[0] = b[0] - c[0], a[1] = b[1] - c[1], a[2] = b[2] - c[2], a
                },
                normalize: function(a, b) {
                    var c = b[0],
                        d = b[1],
                        e = b[2],
                        f = c * c + d * d + e * e;
                    return f > 0 && (f = 1 / Math.sqrt(f)), a[0] = b[0] * f, a[1] = b[1] * f, a[2] = b[2] * f, a
                },
                distance: function(a, b) {
                    var c = b[0] - a[0],
                        d = b[1] - a[1],
                        e = b[2] - a[2];
                    return glm.hypot(c, d, e)
                }
            }),
            quat: Object.freeze({
                create: function() {
                    var a = new glm.ARRAY_TYPE(4);
                    return glm.ARRAY_TYPE != Float32Array && (a[0] = 0, a[1] = 0, a[2] = 0), a[3] = 1, a
                },
                fromEuler: function(a, b, c, d) {
                    var e = .5 * Math.PI / 180;
                    b *= e, c *= e, d *= e;
                    var f = Math.sin(b),
                        g = Math.cos(b),
                        h = Math.sin(c),
                        i = Math.cos(c),
                        j = Math.sin(d),
                        k = Math.cos(d);
                    return a[0] = f * i * k - g * h * j, a[1] = g * h * k + f * i * j, a[2] = g * i * j - f * h * k, a[3] = g * i * k + f * h * j, a
                }
            })
        },
        Transitions = {
            Checkerboard: ThreeDCheckerboard,
            Flip: ThreeDFlip,
            Cube: Cube,
            Box: ThreeDBox,
            Blinds: ThreedBlinds,
            Vortex: Vortex,
            Doors: Window,
            Fracture: Fracture,
            Glitter: Glitter,
            Switch: Switch,
            Honeycomb: Honeycomb,
            Gallery: Gallery,
            Airplane: Airplane,
            Origami: Origami,
            Shred: Shred,
            PageCurl: PageCurl,
            FallOver: FallOver,
            Wind: Wind,
            Curtains: Curtains,
            Ripple: Ripple,
            Prestige: Prestige,
            Crush: Crush,
            Zoom: ThreeDZoom,
            Drape: Drape,
            Pan: Pan,
            Window: Window,
            FlyThrough: FlyThrough
        },
        Events = function() {
            var a = this;
            a.a = function() {
                typeof gv.y.OnLoadingStart !== _undefined && gv.y.OnLoadingStart()
            }, a.b = function(a) {
                typeof gv.y.OnLoadingEnd !== _undefined && gv.y.OnLoadingEnd(a)
            }, a.f = function(a) {
                typeof gv.y.OnSlideTransitionEnd !== _undefined && gv.y.OnSlideTransitionEnd(a)
            }, a.g = function(a) {
                typeof gv.y.OnStartButtonShow !== _undefined && gv.y.OnStartButtonShow(a)
            }, a.h = function() {
                typeof gv.y.OnStartButtonClose !== _undefined && gv.y.OnStartButtonClose()
            }, a.c = function(a) {
                gv.aa = 0, gv.ps.b !== a && (gv.ps.a = gv.ps.b, gv.ps.b = a), typeof gv.y.OnSlideChange !== _undefined && gv.y.OnSlideChange(a)
            }, a.n = function(a) {
                anima["s" + gc].t.n || (a += 1), gv.y.OnMovToNxtAnim(a)
            }, a.p = function(a) {
                anima["s" + gc].t.n && (a -= 1), gv.y.OnMovToPrvAnim(a)
            }, a.t = function(a) {
                typeof gv.y.OnProgressChange !== _undefined && gv.y.OnProgressChange(a)
            }, a.S = function() {
                typeof gv.y.OnPlayingStart !== _undefined && gv.y.OnPlayingStart()
            }, a.s = function() {
                typeof gv.y.OnPlayingEnd !== _undefined && gv.y.OnPlayingEnd()
            }, a.e = function(a, b) {
                typeof gv.y.OnSlideEnd !== _undefined && gv.y.OnSlideEnd(a, b)
            }, a.d = function(a) {
                typeof gv.y.OnClick !== _undefined && gv.y.OnClick(a)
            }, a.o = function(a) {
                typeof gv.y.OnSldOutlineLoad !== _undefined && gv.y.OnSldOutlineLoad(a)
            }, a.i = function(a) {
                gv.y.InitaliseSettings(a)
            }, a.v = function(a) {
                if (typeof gv.y.OnMediaPlay !== _undefined) {
                    var b = gv.o(a),
                        c = b.getElementsByTagName("audio")[0] || b.getElementsByTagName("video")[0];
                    gv.y.OnMediaPlay(a, !c.dopsrcErr)
                }
            }, a.m = function(a) {
                typeof gv.y.OnMediaPause !== _undefined && gv.y.OnMediaPlay(a)
            }
        },
        _events = new Events,
        DopPresentationInterface = function(a, b, c) {
            if (gv.y = a, gv.z = b || {}, gv.z.container ? createRenderArea(gv.z.container) : gv.r.o = gv.o("resizer"), gv.z.jumpTo) {
                var d = gv.z.jumpTo.step;
                d = isNaN(d) ? 0 : parseInt(d, 10), stepToGoto.s = d, stepToGoto.p = gv.z.jumpTo.playPrev
            }
            gv.z.dgradeAnim ? "string" == typeof gv.z.dgradeAnim ? gv.n = gv.z.dgradeAnim : gv.n = "Fade" : gv.n = !1, gv.z.animCanvasScale && "number" == typeof gv.z.animCanvasScale ? gv.cs = gv.z.animCanvasScale : gv.cs = 1, gv.z.bcolor && ("string" == typeof gv.z.bcolor ? gv.bc = gv.z.bcolor : gv.bc = ""), typeof gv.z.playTransitionOnLoad === _undefined && (gv.z.playTransitionOnLoad = !0), typeof gv.z.OutputFileExtension === _undefined ? gv.z.OutputFileExtension = gv.z.ex = null : gv.z.ex = gv.z.OutputFileExtension, gv.u = 0, gv.z.skipBlankSlide && (gv.u = 1), gv.x = gv.z.resetAllSlide, typeof gv.z.disablePinchZoom === _undefined ? gv.dz = gv.z.disablePinchZoom = !1 : gv.dz = gv.z.disablePinchZoom, gv.l = gv.z.fileRequestArgument, typeof gv.l === _undefined ? gv.l = "" : gv.l = gv.l.trim().length > 0 ? "?" + gv.l : "", gv.ll = gv.z.fileRequestArguments, typeof gv.ll === _undefined && (gv.ll = !1), gv.z.bg || (gv.z.bg = {
                path: ""
            }), gv.z.bg.path || (gv.z.bg.path = ""), gv.z.bg.crop || (gv.z.bg.crop = {
                t: 0,
                l: 0,
                b: 0,
                r: 0
            }), gv.z.bg.h_align || (gv.z.bg.h_align = "center"), gv.z.bg.v_align || (gv.z.bg.v_align = "middle"), gv.z.respectHiddenSlideStatus || (gv.z.h = !0), this.n = function(a) {
                a || (a = gc), a--;
                var b = gv.fn[a];
                if (!b) return "";
                for (var c = "", d = b.length, e = 0; e < d; e++)
                    for (var f = b[e], g = f[1], h = g.length, i = 0; i < h; i++) {
                        var j = g[i],
                            k = j[0];
                        c += k
                    }
                return c
            }, this.fn = function(a) {
                function b(a, b) {
                    for (var c = ""; b--;) c += a >> b & 1;
                    return c
                }
                a || (a = gc), a--;
                var c = gv.fn[a];
                typeof c === _undefined && (c = []);
                for (var d = [], e = c.length, f = 0; f < e; f++) {
                    var g = c[f],
                        h = {};
                    h.words = [], h.level = g[0];
                    for (var i = g[1], j = i.length, k = 0; k < j; k++) {
                        var l = i[k],
                            m = {};
                        m.text = l[0];
                        var n = l[1];
                        n = b(n, 4), "1" === n[0] ? m.bold = !0 : m.bold = !1, "1" === n[1] ? m.italic = !0 : m.italic = !1, "1" === n[2] ? m.line_through = !0 : m.line_through = !1, "1" === n[3] ? m.underline = !0 : m.underline = !1, h.words[h.words.length] = m
                    }
                    d[d.length] = h
                }
                return d
            }, this.ns = function() {
                ncc.z(gc + 1, !1)
            }, this.ps = function() {
                ncc.z(gc - 1, !1)
            }, this.r = function(a) {
                gv.d = a
            }, this.s = function(a) {
                gv.r.r = a
            }, this.c = function(a) {
                a || (a = gc), a = a < 1 || a > gc ? gc : a;
                var b = 0;
                return anima["s" + a].c && (b = anima["s" + a].c.i), b
            }, this.p = function() {
                return 1 === anima["s" + gc].t.n && (acc.P(), play(), !0)
            }, this.b = function(a, b, c) {
                clearTimeout(stepToGoto.t), stepToGoto.l = 1, c = typeof c === _undefined || c, b = typeof b === _undefined || b;
                var d = !0;
                if (b !== gc && (ncc.z(b, !0), d = !1), typeof a === _undefined) return stepToGoto.l = 0, void(stepToGoto.s = -1);
                var e = anima["s" + gc],
                    f = e.t.n,
                    g = acc.c();
                f && (g++, a++), a = a > g ? g : a, a = a < 0 ? 0 : a, stepToGoto.s = a, stepToGoto.p = c, d && StepToGotoHelper()
            }, this.a = function() {
                acc.t();
                var a = acc.c(),
                    b = 0;
                if (a > 0) {
                    var c = anima["s" + gc],
                        d = acc.g.slice(),
                        e = d.length,
                        f = gslength[gc - 1];
                    for (f = c.t.i ? f + c.t.i : f, d.unshift(f), b = 0; b < e; b++) {
                        var g = d[b],
                            h = d[b + 1];
                        if (c.f < g) break;
                        if (g <= c.f && c.f <= h) {
                            !c.t.n && c.f > g && b++;
                            break
                        }
                    }
                }
                return {
                    slide: gc,
                    time: gt,
                    step: b
                }
            }, this.h = function(a) {
                var b = anima["s" + a];
                return !!b && 1 !== b.t.c
            }, this.d = function(a) {
                (a = parseInt(a, 10)) && addMedia(a, !0)
            }, this.o = function() {
                return gv.ol
            }, this.e = function(a) {
                if (typeof a === _undefined && (a = gc), a < 1 || a > gv.t || "number" !== (typeof a).toLowerCase() || a !== parseInt(a, 10)) throw "slideIndex should be a integer between 1 and total slides";
                var b = 0;
                return anima["s" + a].c && (b = anima["s" + a].c.i, b -= anima["s" + a].t.n), b
            }, this.f = function() {
                return !stepToGoto.l
            }, this.g = function(a) {
                if (typeof a === _undefined && (a = gc), a < 1 || a > gv.t) return !1;
                ncc.c(a)
            }, this.i = function() {
                ncc.y()
            }, this.m = function(a) {
                return cfc.ln(a)
            }, this.k = function() {
                return typeof anima !== _undefined && typeof anima["s" + gc] !== _undefined && (acc.g[anima["s" + gc].g] > gt && (gv.aa = 1, acc.P(), play()), !0)
            }, this.j = function() {
                0 !== gv.p && (gv.p.parentNode.removeChild(gv.p), gv.p = 0), _events.h()
            }, c.init = init, c.loadContent = loadContent, c.loadMaster = loadMaster
        };
    this.init = init, this.loadContent = loadContent, this.loadMaster = loadMaster;
    var dopPresentation = new DopPresentationInterface(gobal_events, global_options, window);
    this.Next = ncc.n, this.Prev = ncc.p, this.Play = ncc.P, this.Pause = ncc.Ps, this.GetNotes = dopPresentation.n, this.NxtSlide = dopPresentation.ns, this.PrvSlide = dopPresentation.ps, this.GotoSlide = ncc.z, this.SetRPath = dopPresentation.r, this.LoadPres = loadPres, this.SetScale = dopPresentation.s, this.ClickCount = dopPresentation.e, this.JumpToAnim = dopPresentation.b, this.CurrentStatus = dopPresentation.a, this.PreloadSlide = dopPresentation.d, this.GetOutline = dopPresentation.o, this.resetSlide = dopPresentation.g, this.IsSlideMediaLoaded = dopPresentation.m, this.PlaySlideAnims = dopPresentation.k, this.IsTransitionPresent = dopPresentation.h, this.GetContentDetails = cfc.dl, this.GetFormatedNotes = dopPresentation.fn, this.GetCurrentAnimationCount = dopPresentation.c, this.playAutomaticAnimations = dopPresentation.p, this.ForceStartSlidePlay = dopPresentation.i, this.ReportProgress = dopPresentation.f, this.ClosePlayButton = dopPresentation.j
};

export default DopPresentation;
