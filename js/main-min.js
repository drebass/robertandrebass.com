var beat = anime.timeline({
    targets: ".beat .beat-line",
    direction: "reverse",
    loop: !0
});
beat.add({
    duration: 400,
    delay: function(e, t) {
        return 10 + 30 * t
    },
    easing: "easeInCubic",
    translateX: [{
        value: ["0", "3%"]
    }],
    scaleX: [{
        value: ["1", "1.1"]
    }],
    scaleY: [{
        value: ["1", ".9"]
    }],
    skew: [{
        value: ["0", "-.2rad"]
    }]
}).add({
    duration: 75,
    delay: function(e, t) {
        return 10 + 20 * t
    },
    easing: "linear",
    translateX: [{
        value: ["3%", "0%"]
    }],
    scaleX: [{
        value: ["1.1", "1"]
    }],
    scaleY: [{
        value: [".9", "1"]
    }],
    skew: [{
        value: ["-.2rad", "0"]
    }]
}).add({
    duration: 75,
    delay: function(e, t) {
        return 10 + 20 * t
    },
    easing: "linear",
    translateX: [{
        value: ["0", "3%"]
    }],
    scaleX: [{
        value: ["1", "1.2"]
    }],
    scaleY: [{
        value: ["1", ".9"]
    }],
    skew: [{
        value: ["0", "-.2rad"]
    }]
}).add({
    duration: 200,
    delay: function(e, t) {
        return 10 + 20 * t
    },
    easing: "easeOutCubic",
    translateX: [{
        value: ["3%", "0%"]
    }],
    scaleX: [{
        value: ["1.2", "1"]
    }],
    scaleY: [{
        value: [".9", "1"]
    }],
    skew: [{
        value: ["-.2rad", "0"]
    }]
});
var progressLine = document.getElementById("progress-line"),
    anchorScroll = function() {
        var e = document.querySelector(".content-wrap"),
            t = Math.abs(e.getBoundingClientRect().top),
            n = Math.round(t),
            o = n - n;
        (document.querySelectorAll('a[href^="#"]').forEach(t => {t.addEventListener("click", function(t) {
                t.preventDefault();
                var n = document.querySelector(this.getAttribute("href"));
                const o = e.offsetTop;
                var i = e.getBoundingClientRect().top,
                    a = n.getBoundingClientRect().top - i + o;
                smoothScroll.scrollTo(a)
            })}), $(".to-top").length > 0) && document.querySelector(".to-top").addEventListener("click", function(e) {
            e.preventDefault(), smoothScroll.scrollTo(o)
        })
    };
anchorScroll();
let smoothScroll = null;
document.addEventListener("DOMContentLoaded", function() {
    if (rafUtil(), $("body").hasClass("loading"))
        setTimeout(function() {
            if (!isMobile()) {
                var e = document.querySelector(" body");
                e.style.overflow = "hidden", e.style.height = "auto", (smoothScroll = new global_custom2.default({
                    preload: !0,
                    noscrollbar: !0,
                    native: !1,
                    section: document.querySelector(".content-wrap"),
                    divs: document.querySelectorAll(".vs-div")
                })).vs.options.mouseMultiplier = .4, document.body.classList.add("smooth"), smoothScroll.init()
            }
        }, 2900);
    else if (!isMobile()) {
        var e = document.querySelector(" body");
        e.style.overflow = "hidden", e.style.height = "auto", (smoothScroll = new global_custom2.default({
            preload: !0,
            noscrollbar: !0,
            native: !1,
            section: document.querySelector(".content-wrap"),
            divs: document.querySelectorAll(".vs-div")
        })).vs.options.mouseMultiplier = .4, document.body.classList.add("smooth"), smoothScroll.init()
    }
}), $(document).ready(function() {
    $(this).scrollTop(0)
});
let leRafUtil,
    ancien_height = 0;
function rafUtil() {
    if (leRafUtil = requestAnimationFrame(rafUtil), document.getElementById("wrapper").clientHeight == ancien_height || isMobile() || null === smoothScroll || (smoothScroll.resize(), ancien_height = document.getElementById("wrapper").clientHeight), $(window).width() > 1024) {
        document.querySelectorAll(".view, .text").forEach(e => {e.getBoundingClientRect().top < window.innerHeight && e.getBoundingClientRect().top + e.clientHeight > 0 && !e.classList.contains("in-view") && setTimeout(function() {
                e.classList.add("in-view")
            }, 200)}), document.querySelectorAll(".view, .text").forEach(e => {e.getBoundingClientRect().top < window.innerHeight && e.getBoundingClientRect().top + e.clientHeight > 0 && !e.classList.contains("in-view") && setTimeout(function() {
                e.classList.add("in-view")
            }, 200)});
        document.querySelectorAll(".page-section").forEach(e => {if (e.getBoundingClientRect().top < window.innerHeight && e.getBoundingClientRect().top + e.clientHeight > 0) {
                var t = "#" + e.id;
                $("#nav-links a").each(function(e, n) {
                    $(n).attr("href") == t ? $(n).addClass("active") : $(n).removeClass("active")
                })
            }
        })
    }
    if ($(window).width() < 1024 && document.querySelectorAll(".counter-wrap").forEach(e => {e.getBoundingClientRect().top < window.innerHeight && e.getBoundingClientRect().top + e.clientHeight > 0 && !e.classList.contains("scroll-now") && setTimeout(function() {
            e.classList.add("scroll-now")
        }, 200)}), $(".video").length > 0 && document.querySelectorAll(".video").forEach(e => {e.getBoundingClientRect().top < window.innerHeight && e.getBoundingClientRect().top + e.clientHeight > 0 ? e.play() : (e.getBoundingClientRect().top > window.innerHeight || e.getBoundingClientRect().top + e.clientHeight < 0) && e.pause()}), $("#awards").length > 0) {
        var e = document.querySelector("#awards");
        e.getBoundingClientRect().top < window.innerHeight && e.getBoundingClientRect().top + e.clientHeight > 0 ? beat.play() : (e.getBoundingClientRect().top > window.innerHeight || e.getBoundingClientRect().top + e.clientHeight < 0) && beat.pause()
    }
    var t = Math.abs(document.querySelector(".content-wrap").getBoundingClientRect().top);
    window.innerHeight > t ? $("#logo").removeClass("logo-scrolled") : $("#logo").addClass("logo-scrolled");
    var n = window.innerHeight,
        o = document.querySelector(".content-wrap").getBoundingClientRect().top,
        i = Math.round(document.querySelector(".content-wrap").getBoundingClientRect().bottom - n - o),
        a = ((i - o) / i - 1).toFixed(3);
    if (progressLine.style.transform = "scaleY(" + a + ")", $(window).width() > 1024 && document.querySelector(".content-wrap").getBoundingClientRect().top > -1e3 && document.querySelector(".content-wrap").getBoundingClientRect().top < 60 && $(".p-header").length > 0) {
        const e = Math.abs(o - 60);
        var s = Math.round(e),
            r = document.querySelector(".p-title-fraction.first"),
            l = document.querySelector(".p-title-fraction.second"),
            u = document.querySelector(".p-title-fraction.third"),
            c = document.querySelector(".p-header-img img");
        r.style.transform = "translateX(" + s / 4 + "px)", l.style.transform = "translateX(-" + s / 5 + "px)", u.style.transform = "translateX(-" + s / 2 + "px)", c.style.transform = "translateY(-" + s / 2 + "px)"
    }
    let d = [].slice.call(document.querySelectorAll("img.lazy")),
        m = !1;
    const h = function() {
        !1 === m && (m = !0, d.forEach(function(e) {
            e.getBoundingClientRect().top <= 2 * window.innerHeight && e.getBoundingClientRect().bottom >= 0 && "none" !== getComputedStyle(e).display && (e.src = e.dataset.src, e.srcset = e.dataset.srcset, e.classList.remove("lazy"), 0 === (d = d.filter(function(t) {
                return t !== e
            })).length && (window.removeEventListener("resize", h), window.removeEventListener("orientationchange", h)))
        }), m = !1)
    };
    h(), window.removeEventListener("resize", h), window.removeEventListener("orientationchange", h)
}
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
setTimeout(function() {
    $("body").removeClass("loading"), $("#project-menu").removeClass("pushed"), $("#nav-links").removeClass("loading")
}, 2900), PageInits = {
    tweenMax: function() {
        if ($(window).width() > 1024)
            document.getElementById("project-menu").addEventListener("click", function() {
                {
                    document.body, document.documentElement, document.getElementById("project-slideout");
                    const e = (e, t, n) => (1 - n) * e + n * t,
                        t = (e, t, n, o) => {
                            var i = e - t,
                                a = n - o;
                            return Math.hypot(i, a)
                        },
                        n = e => {
                            let t = 0,
                                n = 0;
                            return e || (e = window.event), e.pageX || e.pageY ? (t = e.pageX, n = e.pageY) : (e.clientX || e.clientY) && (t = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, n = e.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
                                x: t,
                                y: n
                            }
                        };
                    let o;
                    const i = () => o = {
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                    i(), window.addEventListener("resize", i);
                    const a = document.querySelector("feDisplacementMap");
                    class s {
                        constructor()
                        {
                            this.DOM = {
                                svg: document.querySelector("svg.distort"),
                                menu: document.querySelector("nav.menu")
                            }, this.DOM.imgs = [...this.DOM.svg.querySelectorAll("g > image")], this.DOM.menuLinks = [...this.DOM.menu.querySelectorAll(".menu__link")], this.mousePos = {
                                x: o.width / 2,
                                y: o.height / 2
                            }, this.lastMousePos = {
                                translation: {
                                    x: o.width / 2,
                                    y: o.height / 2
                                },
                                displacement: {
                                    x: 0,
                                    y: 0
                                }
                            }, this.dmScale = 0, this.current = -1, this.initEvents(), requestAnimationFrame(() => this.render())
                        }
                        initEvents()
                        {
                            window.addEventListener("mousemove", e => this.mousePos = n(e)), this.DOM.menuLinks.forEach((e, t) => {e.addEventListener("mouseenter", () => {-1 !== this.current && TweenMax.set(this.DOM.imgs[this.current], {
                                        opacity: 0
                                    }), this.current = t, this.fade ? (TweenMax.to(this.DOM.imgs[this.current], .5, {
                                        ease: Quad.easeOut,
                                        opacity: .6
                                    }), this.fade = !1) : TweenMax.set(this.DOM.imgs[this.current], {
                                        opacity: .6
                                    })})});
                            this.DOM.menu.addEventListener("mouseenter", () => this.fade = !0), this.DOM.menu.addEventListener("mouseleave", () => TweenMax.to(this.DOM.imgs[this.current], .2, {
                                ease: Quad.easeOut,
                                opacity: 0
                            }))
                        }
                        render()
                        {
                            this.lastMousePos.translation.x = e(this.lastMousePos.translation.x, this.mousePos.x, .1), this.lastMousePos.translation.y = e(this.lastMousePos.translation.y, this.mousePos.y, .1), this.DOM.svg.style.transform = `translateX(${this.lastMousePos.translation.x - o.width / 2}px) translateY(${this.lastMousePos.translation.y - o.height / 1.8}px)`, this.lastMousePos.displacement.x = e(this.lastMousePos.displacement.x, this.mousePos.x, .1), this.lastMousePos.displacement.y = e(this.lastMousePos.displacement.y, this.mousePos.y, .1);
                            const n = t(this.lastMousePos.displacement.x, this.mousePos.x, this.lastMousePos.displacement.y, this.mousePos.y);
                            this.dmScale = Math.min(n, 200), a.scale.baseVal = this.dmScale, requestAnimationFrame(() => this.render())
                        }
                    }
                    new s
                }
            })
    },
    mainScripts: function() {
        $("#logo a").css("opacity", "1"), $(window).width() > 1024 && $(".ea").hover(function() {
            $("body").find(".icon").addClass("active")
        }, function() {
            $("body").find(".icon").removeClass("active")
        });
        var e,
            t = document.getElementsByClassName("acc-item");
        for (document.querySelectorAll(".reveal").forEach(e => {e.classList.contains("opened") && (e.style.maxHeight = e.scrollHeight + "px", e.style.paddingTop = "3em", e.style.paddingBottom = "3em")}), e = 0; e < t.length; e++)
            t[e].addEventListener("click", function() {
                this.classList.toggle("active");
                var e = this.nextElementSibling;
                e.classList.toggle("opened"), e.style.maxHeight ? setTimeout(function() {
                    e.style.maxHeight = null, e.style.paddingTop = 0, e.style.paddingBottom = 0
                }, 400) : (e.style.maxHeight = e.scrollHeight + "px", e.style.paddingTop = "3em", e.style.paddingBottom = "3em")
            });
        if ($(".project-detail-wrap").length > 0 && $(window).width() > 1024) {
            const e = document.querySelector(".content-wrap"),
                t = document.querySelector(".project-detail-wrap");
            let n = window.pageYOffset;
            const o = function() {
                const i = e.getBoundingClientRect().top,
                    a = i - n,
                    s = 1 + .001 * -Math.abs(a);
                t.style.transform = "scaleX(" + s + ")", n = i, requestAnimationFrame(o)
            };
            o()
        }
        if ($(".ea").length > 0) {
            for (coded = "wcbbp@Eg6OEfpblO6.Tpf", key = "Y7TvLrwMn0akVN9uDJfWo5etd46jBlsOKIAPgq2CxpHcGXihERby3QZ8FS1mzU", shift = coded.length, link = "", e = 0; e < coded.length; e++)
                -1 == key.indexOf(coded.charAt(e)) ? (ltr = coded.charAt(e), link += ltr) : (ltr = (key.indexOf(coded.charAt(e)) - shift + key.length) % key.length, link += key.charAt(ltr));
            var n = document.querySelector(".email-address-1"),
                o = document.querySelector(".email-address-2");
            n.innerHTML = "<a href='mailto:" + link + "'><span>hello@robertandrebass.com</span></a>", o.innerHTML = "<a href='mailto:" + link + "'><span>hello@robertandrebass.com</span></a>"
        }
        $(".scroll-top").length > 0 && $(window).width() < 1024 && $("div[name='#wrapper']").click(function() {
            return $("html, body").animate({
                scrollTop: 0
            }, "slow"), !1
        }), $("#project-footer").length > 0 && $(window).width() > 1024 && $(".next-project a").hover(function() {
            $(".next-project").addClass("hovered")
        }, function() {
            $(".next-project").removeClass("hovered")
        }), $(".project-button").on("click", function() {
            $("#project-menu").toggleClass("opened"), $("#project-slideout").toggleClass("opened"), $("#nav-links").toggleClass("pushed").addClass("ready")
        }), $("body").hasClass("loading") && setTimeout(function() {
            anime.timeline({
                targets: ".logo-info i.from-top",
                delay: function(e, t) {
                    return 250 + anime.random(20, 2e3)
                },
                duration: 300,
                easing: "easeOutExpo",
                direction: "normal",
                loop: !1
            }).add({
                translateY: {
                    value: ["-150%", "0"]
                }
            }), anime.timeline({
                targets: ".logo-info i.from-bottom",
                delay: function(e, t) {
                    return 250 + anime.random(20, 2e3)
                },
                duration: 300,
                easing: "easeOutExpo",
                direction: "normal",
                loop: !1
            }).add({
                translateY: {
                    value: ["150%", "0"]
                }
            }), anime.timeline({
                targets: ".logo-info i.from-left",
                delay: function(e, t) {
                    return 250 + anime.random(20, 2e3)
                },
                duration: 300,
                easing: "easeOutExpo",
                direction: "normal",
                loop: !1
            }).add({
                translateX: {
                    value: ["-150%", "0"]
                }
            }), anime.timeline({
                targets: ".loading .logo-info i.from-right",
                delay: function(e, t) {
                    return 250 + anime.random(20, 2e3)
                },
                duration: 300,
                easing: "easeOutExpo",
                direction: "normal",
                loop: !1
            }).add({
                translateX: {
                    value: ["150%", "0"]
                }
            }), anime({
                targets: ".barcode .line",
                easing: "easeInOutQuad",
                duration: function(e, t) {
                    return 1500 + anime.random(0, 500)
                },
                scaleY: {
                    value: ["0", "1"]
                },
                delay: function(e, t) {
                    return 200 + anime.random(0, 500)
                },
                loop: !1
            })
        }, 400), $(window).width() > 1024 && $(function() {
            $(".project-wrap ul a").hover(function() {
                $("i").removeClass("active"), $(".project-wrap ul a").removeClass("active");
                $(this).addClass("active");
                $(".project-img img").removeClass("show"), $("." + $(this).data("project-name")).addClass("show"), $(this).next("i").addClass("active")
            }, function() {})
        }), $(function() {
            $("#project-slideout").length > 0 && $(window).width() > 1024 && $(".menu a").hover(function() {
                $(".menu a").addClass("fade");
                $(this).removeClass("fade").addClass("active");
                $(".project-count span").removeClass("show"), $(".project-count .placeholder, .service-placeholder").addClass("fade"), $("." + $(this).data("pc")).addClass("active")
            }, function() {
                $(this).removeClass("active"), $(".menu a").removeClass("fade"), $("." + $(this).data("pc")).removeClass("active"), $(".project-count .placeholder, .service-placeholder").removeClass("fade")
            })
        }), $("#style-switch").on("click", function() {
            $("body").toggleClass("slovakia"), $("body").hasClass("slovakia") ? $(this).html("Off") : $(this).html("On")
        })
    }
}, PageInits.mainScripts(), PageInits.tweenMax(), $(function() {
    "use strict";
    var e = {
            prefetch: !0,
            cacheLength: 2,
            onStart: {
                duration: 1350,
                render: function(e) {
                    e.addClass("is-exiting"), $(".grid-overlay").addClass("is-exiting"), t.restartCSSAnimations()
                }
            },
            onReady: {
                duration: 0,
                render: function(e, t) {
                    e.removeClass("is-exiting pending"), e.addClass("is-animating"), e.html(t)
                }
            },
            onAfter: function(e, t) {
                $(".grid-overlay").removeClass("is-exiting"), e.removeClass("is-animating"), anime.timeline({
                    targets: ".beat .beat-line",
                    direction: "reverse",
                    loop: !0
                }).add({
                    duration: 400,
                    delay: function(e, t) {
                        return 10 + 30 * t
                    },
                    easing: "easeInCubic",
                    translateX: [{
                        value: ["0", "3%"]
                    }],
                    scaleX: [{
                        value: ["1", "1.1"]
                    }],
                    scaleY: [{
                        value: ["1", ".9"]
                    }],
                    skew: [{
                        value: ["0", "-.2rad"]
                    }]
                }).add({
                    duration: 75,
                    delay: function(e, t) {
                        return 10 + 20 * t
                    },
                    easing: "linear",
                    translateX: [{
                        value: ["3%", "0%"]
                    }],
                    scaleX: [{
                        value: ["1.1", "1"]
                    }],
                    scaleY: [{
                        value: [".9", "1"]
                    }],
                    skew: [{
                        value: ["-.2rad", "0"]
                    }]
                }).add({
                    duration: 75,
                    delay: function(e, t) {
                        return 10 + 20 * t
                    },
                    easing: "linear",
                    translateX: [{
                        value: ["0", "3%"]
                    }],
                    scaleX: [{
                        value: ["1", "1.2"]
                    }],
                    scaleY: [{
                        value: ["1", ".9"]
                    }],
                    skew: [{
                        value: ["0", "-.2rad"]
                    }]
                }).add({
                    duration: 200,
                    delay: function(e, t) {
                        return 10 + 20 * t
                    },
                    easing: "easeOutCubic",
                    translateX: [{
                        value: ["3%", "0%"]
                    }],
                    scaleX: [{
                        value: ["1.2", "1"]
                    }],
                    scaleY: [{
                        value: [".9", "1"]
                    }],
                    skew: [{
                        value: ["-.2rad", "0"]
                    }]
                }), PageInits.mainScripts(), PageInits.tweenMax();
                !function() {
                    if (rafUtil(), !isMobile()) {
                        var e = document.querySelector("#main, body");
                        e.style.overflow = "hidden", e.style.height = "auto", (smoothScroll = new global_custom2.default({
                            preload: !0,
                            noscrollbar: !0,
                            native: !1,
                            section: document.querySelector(".content-wrap"),
                            divs: document.querySelectorAll(".vs-div")
                        })).vs.options.mouseMultiplier = .4, document.body.classList.add("smooth"), smoothScroll.init()
                    }
                }(), anchorScroll(), $("#project-menu").removeClass("pushed"), anime.timeline({
                    targets: ".logo-info i",
                    delay: function(e, t) {
                        return 250 + anime.random(20, 150)
                    },
                    duration: 300,
                    easing: "easeOutExpo",
                    direction: "normal",
                    loop: !1
                }).add({
                    translateY: 0,
                    translateX: 0
                }), anime({
                    targets: ".barcode .line",
                    easing: "easeInOutQuad",
                    duration: function(e, t) {
                        return 300 + anime.random(0, 500)
                    },
                    scaleY: {
                        value: ["0", "1"]
                    },
                    delay: function(e, t) {
                        return 200 + anime.random(0, 500)
                    },
                    loop: !1
                })
            }
        },
        t = $("#main").smoothState(e).data("smoothState")
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, n, o, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, o, i)
    },
    easeInQuad: function(e, t, n, o, i) {
        return o * (t /= i) * t + n
    },
    easeOutQuad: function(e, t, n, o, i) {
        return -o * (t /= i) * (t - 2) + n
    },
    easeInOutQuad: function(e, t, n, o, i) {
        return (t /= i / 2) < 1 ? o / 2 * t * t + n : -o / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function(e, t, n, o, i) {
        return o * (t /= i) * t * t + n
    },
    easeOutCubic: function(e, t, n, o, i) {
        return o * ((t = t / i - 1) * t * t + 1) + n
    },
    easeInOutCubic: function(e, t, n, o, i) {
        return (t /= i / 2) < 1 ? o / 2 * t * t * t + n : o / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function(e, t, n, o, i) {
        return o * (t /= i) * t * t * t + n
    },
    easeOutQuart: function(e, t, n, o, i) {
        return -o * ((t = t / i - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function(e, t, n, o, i) {
        return (t /= i / 2) < 1 ? o / 2 * t * t * t * t + n : -o / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function(e, t, n, o, i) {
        return o * (t /= i) * t * t * t * t + n
    },
    easeOutQuint: function(e, t, n, o, i) {
        return o * ((t = t / i - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function(e, t, n, o, i) {
        return (t /= i / 2) < 1 ? o / 2 * t * t * t * t * t + n : o / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function(e, t, n, o, i) {
        return -o * Math.cos(t / i * (Math.PI / 2)) + o + n
    },
    easeOutSine: function(e, t, n, o, i) {
        return o * Math.sin(t / i * (Math.PI / 2)) + n
    },
    easeInOutSine: function(e, t, n, o, i) {
        return -o / 2 * (Math.cos(Math.PI * t / i) - 1) + n
    },
    easeInExpo: function(e, t, n, o, i) {
        return 0 == t ? n : o * Math.pow(2, 10 * (t / i - 1)) + n
    },
    easeOutExpo: function(e, t, n, o, i) {
        return t == i ? n + o : o * (1 - Math.pow(2, -10 * t / i)) + n
    },
    easeInOutExpo: function(e, t, n, o, i) {
        return 0 == t ? n : t == i ? n + o : (t /= i / 2) < 1 ? o / 2 * Math.pow(2, 10 * (t - 1)) + n : o / 2 * (2 - Math.pow(2, -10 * --t)) + n
    },
    easeInCirc: function(e, t, n, o, i) {
        return -o * (Math.sqrt(1 - (t /= i) * t) - 1) + n
    },
    easeOutCirc: function(e, t, n, o, i) {
        return o * Math.sqrt(1 - (t = t / i - 1) * t) + n
    },
    easeInOutCirc: function(e, t, n, o, i) {
        return (t /= i / 2) < 1 ? -o / 2 * (Math.sqrt(1 - t * t) - 1) + n : o / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function(e, t, n, o, i) {
        var a = 1.70158,
            s = 0,
            r = o;
        if (0 == t)
            return n;
        if (1 == (t /= i))
            return n + o;
        if (s || (s = .3 * i), r < Math.abs(o)) {
            r = o;
            a = s / 4
        } else
            a = s / (2 * Math.PI) * Math.asin(o / r);
        return -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - a) * (2 * Math.PI) / s) + n
    },
    easeOutElastic: function(e, t, n, o, i) {
        var a = 1.70158,
            s = 0,
            r = o;
        if (0 == t)
            return n;
        if (1 == (t /= i))
            return n + o;
        if (s || (s = .3 * i), r < Math.abs(o)) {
            r = o;
            a = s / 4
        } else
            a = s / (2 * Math.PI) * Math.asin(o / r);
        return r * Math.pow(2, -10 * t) * Math.sin((t * i - a) * (2 * Math.PI) / s) + o + n
    },
    easeInOutElastic: function(e, t, n, o, i) {
        var a = 1.70158,
            s = 0,
            r = o;
        if (0 == t)
            return n;
        if (2 == (t /= i / 2))
            return n + o;
        if (s || (s = i * (.3 * 1.5)), r < Math.abs(o)) {
            r = o;
            a = s / 4
        } else
            a = s / (2 * Math.PI) * Math.asin(o / r);
        return t < 1 ? r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - a) * (2 * Math.PI) / s) * -.5 + n : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - a) * (2 * Math.PI) / s) * .5 + o + n
    },
    easeInBack: function(e, t, n, o, i, a) {
        return null == a && (a = 1.70158), o * (t /= i) * t * ((a + 1) * t - a) + n
    },
    easeOutBack: function(e, t, n, o, i, a) {
        return null == a && (a = 1.70158), o * ((t = t / i - 1) * t * ((a + 1) * t + a) + 1) + n
    },
    easeInOutBack: function(e, t, n, o, i, a) {
        return null == a && (a = 1.70158), (t /= i / 2) < 1 ? o / 2 * (t * t * ((1 + (a *= 1.525)) * t - a)) + n : o / 2 * ((t -= 2) * t * ((1 + (a *= 1.525)) * t + a) + 2) + n
    },
    easeInBounce: function(e, t, n, o, i) {
        return o - jQuery.easing.easeOutBounce(e, i - t, 0, o, i) + n
    },
    easeOutBounce: function(e, t, n, o, i) {
        return (t /= i) < 1 / 2.75 ? o * (7.5625 * t * t) + n : t < 2 / 2.75 ? o * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? o * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : o * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function(e, t, n, o, i) {
        return t < i / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, o, i) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - i, 0, o, i) + .5 * o + n
    }
});