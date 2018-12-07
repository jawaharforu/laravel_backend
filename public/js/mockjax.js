! function(a, b) {
    "use strict";
    if ("function" == typeof define && define.amd && define.amd.jQuery) define(["jquery"], function(c) {
        return b(c, a)
    });
    else {
        if ("object" != typeof exports) return b(a.jQuery || a.$, a);
        module.exports = b
    }
}(this, function(a, b) {
    "use strict";

    function c(c) {
        void 0 === b.DOMParser && b.ActiveXObject && (b.DOMParser = function() {}, DOMParser.prototype.parseFromString = function(a) {
            var b = new ActiveXObject("Microsoft.XMLDOM");
            return b.async = "false", b.loadXML(a), b
        });
        try {
            var d = (new DOMParser).parseFromString(c, "text/xml");
            if (!a.isXMLDoc(d)) throw new Error("Unable to parse XML");
            if (1 === a("parsererror", d).length) throw new Error("Error: " + a(d).text());
            return d
        } catch (b) {
            var e = void 0 === b.name ? b : b.name + ": " + b.message;
            return void a(document).trigger("xmlParseError", [e])
        }
    }

    function d(b, c) {
        C.debug(b, ["Checking mock data against request data", b, c]);
        var f = !0;
        if (a.isFunction(b)) return !!b(c);
        if ("string" == typeof c) {
            if (a.isFunction(b.test)) return b.test(c);
            if ("object" != typeof b) return b === c;
            c = e(c)
        }
        return a.each(b, function(e) {
            if (void 0 === c[e]) return f = !1;
            "object" == typeof c[e] && null !== c[e] ? (f && a.isArray(c[e]) && (f = a.isArray(b[e]) && c[e].length === b[e].length), f = f && d(b[e], c[e])) : f = b[e] && a.isFunction(b[e].test) ? f && b[e].test(c[e]) : f && b[e] === c[e]
        }), f
    }

    function e(a) {
        var b, c, d, e, f = {},
            g = String(a).split(/&/);
        for (b = 0, c = g.length; b < c; ++b) {
            d = g[b];
            try {
                d = decodeURIComponent(d.replace(/\+/g, " ")), d = d.split(/=/)
            } catch (a) {
                continue
            }
            f[d[0]] ? (f[d[0]].splice || (e = f[d[0]], f[d[0]] = [], f[d[0]].push(e)), f[d[0]].push(d[1])) : f[d[0]] = d[1]
        }
        return C.debug(null, ["Getting query params from string", a, f]), f
    }

    function f(b, c) {
        return b[c] === a.mockjaxSettings[c]
    }

    function g(b, c) {
        if (a.isFunction(b)) return b(c);
        if (a.isFunction(b.url.test)) {
            if (!b.url.test(c.url)) return null
        } else {
            var e = b.url,
                f = b.namespace || void 0 === b.namespace && a.mockjaxSettings.namespace;
            if (f) {
                e = [f.replace(/(\/+)$/, ""), b.url.replace(/^(\/+)/, "")].join("/")
            }
            var g = e.indexOf("*");
            if (e !== c.url && -1 === g || !new RegExp(e.replace(/[-[\]{}()+?.,\\^$|#\s]/g, "\\$&").replace(/\*/g, ".+")).test(c.url)) return null
        }
        if (b.requestHeaders) {
            if (void 0 === c.headers) return null;
            var h = !1;
            if (a.each(b.requestHeaders, function(a, b) {
                if (c.headers[a] !== b) return h = !0, !1
            }), h) return null
        }
        return !b.data || c.data && d(b.data, c.data) ? b && b.type && b.type.toLowerCase() !== c.type.toLowerCase() ? null : b : null
    }

    function h(a) {
        return "number" == typeof a && a >= 0
    }

    function i(b) {
        if (a.isArray(b) && 2 === b.length) {
            var c = b[0],
                d = b[1];
            if (h(c) && h(d)) return Math.floor(Math.random() * (d - c)) + c
        } else if (h(b)) return b;
        return B
    }

    function j(b, d, e) {
        C.debug(b, ["Sending fake XHR request", b, d, e]);
        var g = function(f) {
            return function() {
                return function() {
                    this.status = b.status, this.statusText = b.statusText, this.readyState = 1;
                    var g = function() {
                        this.readyState = 4;
                        var e;
                        if ("json" === d.dataType && "object" == typeof b.responseText ? this.responseText = JSON.stringify(b.responseText) : "xml" === d.dataType ? "string" == typeof b.responseXML ? (this.responseXML = c(b.responseXML), this.responseText = b.responseXML) : this.responseXML = b.responseXML : "object" == typeof b.responseText && null !== b.responseText ? (b.contentType = "application/json", this.responseText = JSON.stringify(b.responseText)) : this.responseText = b.responseText, a.isArray(b.status)) {
                            var f = Math.floor(Math.random() * b.status.length);
                            this.status = b.status[f]
                        } else "number" != typeof b.status && "string" != typeof b.status || (this.status = b.status);
                        "string" == typeof b.statusText && (this.statusText = b.statusText), e = this.onload || this.onreadystatechange, a.isFunction(e) ? (b.isTimeout && (this.status = -1), e.call(this, b.isTimeout ? "timeout" : void 0)) : b.isTimeout && (this.status = -1)
                    };
                    if (a.isFunction(b.response)) {
                        if (2 === b.response.length) return void b.response(e, function() {
                            g.call(f)
                        });
                        b.response(e)
                    }
                    g.call(f)
                }.apply(f)
            }
        }(this);
        b.proxy ? (C.info(b, ["Retrieving proxy file: " + b.proxy, b]), v({
            global: !1,
            url: b.proxy,
            type: b.proxyType,
            data: b.data,
            async: d.async,
            dataType: "script" === d.dataType ? "text/plain" : d.dataType,
            complete: function(a) {
                b.responseXML = b.responseText = a.responseText, f(b, "status") && (b.status = a.status), f(b, "statusText") && (b.statusText = a.statusText), !1 === d.async ? g() : this.responseTimer = setTimeout(g, i(b.responseTime))
            }
        })) : !1 === d.async ? g() : this.responseTimer = setTimeout(g, i(b.responseTime))
    }

    function k(b, c, d, e) {
        return C.debug(b, ["Creating new mock XHR object", b, c, d, e]), b = a.extend(!0, {}, a.mockjaxSettings, b), void 0 === b.headers && (b.headers = {}), void 0 === c.headers && (c.headers = {}), b.contentType && (b.headers["content-type"] = b.contentType), {
            status: b.status,
            statusText: b.statusText,
            readyState: 1,
            open: function() {},
            send: function() {
                e.fired = !0, j.call(this, b, c, d)
            },
            abort: function() {
                clearTimeout(this.responseTimer)
            },
            setRequestHeader: function(a, b) {
                c.headers[a] = b
            },
            getResponseHeader: function(a) {
                return b.headers && b.headers[a] ? b.headers[a] : "last-modified" === a.toLowerCase() ? b.lastModified || (new Date).toString() : "etag" === a.toLowerCase() ? b.etag || "" : "content-type" === a.toLowerCase() ? b.contentType || "text/plain" : void 0
            },
            getAllResponseHeaders: function() {
                var c = "";
                return b.contentType && (b.headers["Content-Type"] = b.contentType), a.each(b.headers, function(a, b) {
                    c += a + ": " + b + "\n"
                }), c
            }
        }
    }

    function l(a, b, c) {
        if (m(a), a.dataType = "json", a.data && z.test(a.data) || z.test(a.url)) {
            p(a, b, c);
            var d = /^(\w+:)?\/\/([^\/?#]+)/,
                e = d.exec(a.url),
                f = e && (e[1] && e[1] !== location.protocol || e[2] !== location.host);
            if (a.dataType = "script", "GET" === a.type.toUpperCase() && f) {
                var g = n(a, b, c);
                return g || !0
            }
        }
        return null
    }

    function m(a) {
        "GET" === a.type.toUpperCase() ? z.test(a.url) || (a.url += (/\?/.test(a.url) ? "&" : "?") + (a.jsonp || "callback") + "=?") : a.data && z.test(a.data) || (a.data = (a.data ? a.data + "&" : "") + (a.jsonp || "callback") + "=?")
    }

    function n(b, c, d) {
        C.debug(c, ["Performing JSONP request", c, b, d]);
        var e = d && d.context || b,
            f = a.Deferred ? new a.Deferred : null;
        if (c.response && a.isFunction(c.response)) c.response(d);
        else if ("object" == typeof c.responseText) a.globalEval("(" + JSON.stringify(c.responseText) + ")");
        else {
            if (c.proxy) return C.info(c, ["Performing JSONP proxy request: " + c.proxy, c]), v({
                global: !1,
                url: c.proxy,
                type: c.proxyType,
                data: c.data,
                dataType: "script" === b.dataType ? "text/plain" : b.dataType,
                complete: function(d) {
                    a.globalEval("(" + d.responseText + ")"), o(b, c, e, f)
                }
            }), f;
            a.globalEval("(" + ("string" == typeof c.responseText ? '"' + c.responseText + '"' : c.responseText) + ")")
        }
        return o(b, c, e, f), f
    }

    function o(b, c, d, e) {
        var f;
        setTimeout(function() {
            if (q(b, d, c), r(b, d), e) {
                try {
                    f = a.parseJSON(c.responseText)
                } catch (a) {}
                e.resolveWith(d, [f || c.responseText]), C.log(c, ["JSONP mock call complete", c, e])
            }
        }, i(c.responseTime))
    }

    function p(a, c, d) {
        var e = d && d.context || a,
            f = "string" == typeof a.jsonpCallback && a.jsonpCallback || "jsonp" + A++;
        a.data && (a.data = (a.data + "").replace(z, "=" + f + "$1")), a.url = a.url.replace(z, "=" + f + "$1"), b[f] = b[f] || function() {
            q(a, e, c), r(a, e), b[f] = void 0;
            try {
                delete b[f]
            } catch (a) {}
        }, a.jsonpCallback = f
    }

    function q(b, c, d) {
        b.success && b.success.call(c, d.responseText || "", "success", {}), b.global && (b.context ? a(b.context) : a.event).trigger("ajaxSuccess", [{}, b])
    }

    function r(b, c) {
        b.complete && b.complete.call(c, {
            statusText: "success",
            status: 200
        }, "success"), b.global && (b.context ? a(b.context) : a.event).trigger("ajaxComplete", [{}, b]), b.global && !--a.active && a.event.trigger("ajaxStop")
    }

    function s(b, c) {
        var d, e, f, h;
        C.debug(null, ["Ajax call intercepted", b, c]), "object" == typeof b ? (c = b, b = void 0) : (c = c || {}, c.url = b || c.url), e = a.ajaxSetup({}, c), e.type = e.method = e.method || e.type, h = function(b, d) {
            var e = c[b.toLowerCase()];
            return function() {
                a.isFunction(e) && e.apply(this, [].slice.call(arguments)), d["onAfter" + b]()
            }
        };
        for (var i = 0; i < w.length; i++) {
            var j = a.mockjaxSettings.matchInRegistrationOrder ? i : w.length - 1 - i,
                m = w[j];
            if (m) {
                if (f = g(m, e)) {
                    if (a.mockjaxSettings.retainAjaxCalls && x.push(e), C.info(f, ["MOCK " + e.type.toUpperCase() + ": " + e.url, a.ajaxSetup({}, e)]), (301 === f.status || 302 === f.status) && ("GET" === e.type.toUpperCase() || "HEAD" === e.type.toUpperCase()) && f.headers.Location) {
                        C.debug("Doing mock redirect to", f.headers.Location, e.type);
                        for (var n = {}, o = Object.keys(c), p = 0; p < o.length; p++) n[o[p]] = c[o[p]];
                        return n.url = f.headers.Location, n.headers = {
                            Referer: c.url
                        }, s(n)
                    }
                    return e.dataType && "JSONP" === e.dataType.toUpperCase() && (d = l(e, f, c)) ? d : (c.crossDomain = !1, f.cache = e.cache, f.timeout = e.timeout, f.global = e.global, f.isTimeout && (f.responseTime > 1 ? c.timeout = f.responseTime - 1 : (f.responseTime = 2, c.timeout = 1)), a.isFunction(f.onAfterSuccess) && (c.success = h("Success", f)), a.isFunction(f.onAfterError) && (c.error = h("Error", f)), a.isFunction(f.onAfterComplete) && (c.complete = h("Complete", f)), t(f, c), function(b, c, e, f) {
                        d = v.call(a, a.extend(!0, {}, e, {
                            xhr: function() {
                                return k(b, c, e, f)
                            }
                        }))
                    }(f, e, c, m), d)
                }
                C.debug(m, ["Mock does not match request", b, e])
            }
        }
        if (C.log(null, ["No mock matched to request", b, c]), a.mockjaxSettings.retainAjaxCalls && y.push(c), !0 === a.mockjaxSettings.throwUnmocked) throw new Error("AJAX not mocked: " + c.url);
        return C.log("Real ajax call to", c.url), v.apply(a, [c])
    }

    function t(a, b) {
        if (a.url instanceof RegExp && a.hasOwnProperty("urlParams")) {
            var c = a.url.exec(b.url);
            if (1 !== c.length) {
                c.shift();
                var d = 0,
                    e = c.length,
                    f = a.urlParams.length,
                    g = Math.min(e, f),
                    h = {};
                for (d; d < g; d++) {
                    h[a.urlParams[d]] = c[d]
                }
                b.urlParams = h
            }
        }
    }

    function u(a) {
        var b, c, d, e = [],
            f = a instanceof RegExp ? function(b) {
                return a.test(b)
            } : function(b) {
                return a === b
            };
        for (b = 0, c = w.length; b < c; b++) d = w[b], f(d.url) ? C.log(d, ["Clearing mock: " + (d && d.url), d]) : e.push(d);
        return e
    }
    var v = a.ajax,
        w = [],
        x = [],
        y = [],
        z = /=\?(&|$)/,
        A = (new Date).getTime(),
        B = 500;
    a.extend({
        ajax: s
    });
    var C = {
            _log: function(b, c, d) {
                var e = a.mockjaxSettings.logging;
                if (b && void 0 !== b.logging && (e = b.logging), d = 0 === d ? d : d || D.LOG, c = c.splice ? c : [c], !(!1 === e || e < d)) return a.mockjaxSettings.log ? a.mockjaxSettings.log(b, c[1] || c[0]) : a.mockjaxSettings.logger && a.mockjaxSettings.logger[a.mockjaxSettings.logLevelMethods[d]] ? a.mockjaxSettings.logger[a.mockjaxSettings.logLevelMethods[d]].apply(a.mockjaxSettings.logger, c) : void 0
            },
            debug: function(a, b) {
                return C._log(a, b, D.DEBUG)
            },
            log: function(a, b) {
                return C._log(a, b, D.LOG)
            },
            info: function(a, b) {
                return C._log(a, b, D.INFO)
            },
            warn: function(a, b) {
                return C._log(a, b, D.WARN)
            },
            error: function(a, b) {
                return C._log(a, b, D.ERROR)
            }
        },
        D = {
            DEBUG: 4,
            LOG: 3,
            INFO: 2,
            WARN: 1,
            ERROR: 0
        };
    return a.mockjaxSettings = {
        log: null,
        logger: b.console,
        logging: 2,
        logLevelMethods: ["error", "warn", "info", "log", "debug"],
        matchInRegistrationOrder: !0,
        namespace: null,
        status: 200,
        statusText: "OK",
        responseTime: B,
        isTimeout: !1,
        throwUnmocked: !1,
        retainAjaxCalls: !0,
        contentType: "text/plain",
        response: "",
        responseText: "",
        responseXML: "",
        proxy: "",
        proxyType: "GET",
        lastModified: null,
        etag: "",
        headers: {
            etag: "IJF@H#@923uf8023hFO@I#H#",
            "content-type": "text/plain"
        }
    }, a.mockjax = function(b) {
        if (a.isArray(b)) return a.map(b, function(b) {
            return a.mockjax(b)
        });
        var c = w.length;
        return w[c] = b, C.log(b, ["Created new mock handler", b]), c
    }, a.mockjax._logger = C, a.mockjax.clear = function(a) {
        "string" == typeof a || a instanceof RegExp ? w = u(a) : a || 0 === a ? (C.log(w[a], ["Clearing mock: " + (w[a] && w[a].url), w[a]]), w[a] = null) : (C.log(null, "Clearing all mocks"), w = []), x = [], y = []
    }, a.mockjax.clearRetainedAjaxCalls = function() {
        x = [], y = [], C.debug(null, "Cleared retained ajax calls")
    }, a.mockjax.handler = function(a) {
        if (1 === arguments.length) return w[a]
    }, a.mockjax.handlers = function() {
        return w
    }, a.mockjax.mockedAjaxCalls = function() {
        return x
    }, a.mockjax.unfiredHandlers = function() {
        for (var a = [], b = 0, c = w.length; b < c; b++) {
            var d = w[b];
            null === d || d.fired || a.push(d)
        }
        return a
    }, a.mockjax.unmockedAjaxCalls = function() {
        return y
    }, a.mockjax
});