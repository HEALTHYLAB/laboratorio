/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(69);
	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	module.exports = __webpack_require__(76);


/***/ },

/***/ 62:
/***/ function(module, exports) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*
	 AngularJS v1.5.8
	 (c) 2010-2016 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function (C) {
	  'use strict';
	  function N(a) {
	    return function () {
	      var b = arguments[0],
	          d;d = "[" + (a ? a + ":" : "") + b + "] http://errors.angularjs.org/1.5.8/" + (a ? a + "/" : "") + b;for (b = 1; b < arguments.length; b++) {
	        d = d + (1 == b ? "?" : "&") + "p" + (b - 1) + "=";var c = encodeURIComponent,
	            e;e = arguments[b];e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;d += c(e);
	      }return Error(d);
	    };
	  }function ta(a) {
	    if (null == a || Va(a)) return !1;if (L(a) || G(a) || F && a instanceof F) return !0;
	    var b = "length" in Object(a) && a.length;return T(b) && (0 <= b && (b - 1 in a || a instanceof Array) || "function" == typeof a.item);
	  }function q(a, b, d) {
	    var c, e;if (a) if (z(a)) for (c in a) {
	      "prototype" == c || "length" == c || "name" == c || a.hasOwnProperty && !a.hasOwnProperty(c) || b.call(d, a[c], c, a);
	    } else if (L(a) || ta(a)) {
	      var f = "object" !== (typeof a === "undefined" ? "undefined" : _typeof(a));c = 0;for (e = a.length; c < e; c++) {
	        (f || c in a) && b.call(d, a[c], c, a);
	      }
	    } else if (a.forEach && a.forEach !== q) a.forEach(b, d, a);else if (sc(a)) for (c in a) {
	      b.call(d, a[c], c, a);
	    } else if ("function" === typeof a.hasOwnProperty) for (c in a) {
	      a.hasOwnProperty(c) && b.call(d, a[c], c, a);
	    } else for (c in a) {
	      ua.call(a, c) && b.call(d, a[c], c, a);
	    }return a;
	  }function tc(a, b, d) {
	    for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++) {
	      b.call(d, a[c[e]], c[e]);
	    }return c;
	  }function uc(a) {
	    return function (b, d) {
	      a(d, b);
	    };
	  }function Yd() {
	    return ++pb;
	  }function Pb(a, b, d) {
	    for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
	      var g = b[e];if (D(g) || z(g)) for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
	        var m = h[k],
	            n = g[m];d && D(n) ? da(n) ? a[m] = new Date(n.valueOf()) : Wa(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) : Qb(n) ? a[m] = n.clone() : (D(a[m]) || (a[m] = L(n) ? [] : {}), Pb(a[m], [n], !0)) : a[m] = n;
	      }
	    }c ? a.$$hashKey = c : delete a.$$hashKey;return a;
	  }function S(a) {
	    return Pb(a, va.call(arguments, 1), !1);
	  }function Zd(a) {
	    return Pb(a, va.call(arguments, 1), !0);
	  }function Z(a) {
	    return parseInt(a, 10);
	  }function Rb(a, b) {
	    return S(Object.create(a), b);
	  }function A() {}function Xa(a) {
	    return a;
	  }function ha(a) {
	    return function () {
	      return a;
	    };
	  }function vc(a) {
	    return z(a.toString) && a.toString !== ma;
	  }function y(a) {
	    return "undefined" === typeof a;
	  }function w(a) {
	    return "undefined" !== typeof a;
	  }function D(a) {
	    return null !== a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a));
	  }function sc(a) {
	    return null !== a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && !wc(a);
	  }function G(a) {
	    return "string" === typeof a;
	  }function T(a) {
	    return "number" === typeof a;
	  }function da(a) {
	    return "[object Date]" === ma.call(a);
	  }function z(a) {
	    return "function" === typeof a;
	  }function Wa(a) {
	    return "[object RegExp]" === ma.call(a);
	  }function Va(a) {
	    return a && a.window === a;
	  }function Ya(a) {
	    return a && a.$evalAsync && a.$watch;
	  }function Ga(a) {
	    return "boolean" === typeof a;
	  }function $d(a) {
	    return a && T(a.length) && ae.test(ma.call(a));
	  }function Qb(a) {
	    return !(!a || !(a.nodeName || a.prop && a.attr && a.find));
	  }function be(a) {
	    var b = {};a = a.split(",");var d;for (d = 0; d < a.length; d++) {
	      b[a[d]] = !0;
	    }return b;
	  }function wa(a) {
	    return Q(a.nodeName || a[0] && a[0].nodeName);
	  }function Za(a, b) {
	    var d = a.indexOf(b);0 <= d && a.splice(d, 1);return d;
	  }function pa(a, b) {
	    function d(a, b) {
	      var d = b.$$hashKey,
	          e;if (L(a)) {
	        e = 0;for (var f = a.length; e < f; e++) {
	          b.push(c(a[e]));
	        }
	      } else if (sc(a)) for (e in a) {
	        b[e] = c(a[e]);
	      } else if (a && "function" === typeof a.hasOwnProperty) for (e in a) {
	        a.hasOwnProperty(e) && (b[e] = c(a[e]));
	      } else for (e in a) {
	        ua.call(a, e) && (b[e] = c(a[e]));
	      }d ? b.$$hashKey = d : delete b.$$hashKey;return b;
	    }function c(a) {
	      if (!D(a)) return a;var b = f.indexOf(a);if (-1 !== b) return g[b];if (Va(a) || Ya(a)) throw xa("cpws");var b = !1,
	          c = e(a);void 0 === c && (c = L(a) ? [] : Object.create(wc(a)), b = !0);f.push(a);g.push(c);return b ? d(a, c) : c;
	    }function e(a) {
	      switch (ma.call(a)) {case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":
	          return new a.constructor(c(a.buffer), a.byteOffset, a.length);case "[object ArrayBuffer]":
	          if (!a.slice) {
	            var b = new ArrayBuffer(a.byteLength);new Uint8Array(b).set(new Uint8Array(a));return b;
	          }return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":
	          return new a.constructor(a.valueOf());case "[object RegExp]":
	          return b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex, b;case "[object Blob]":
	          return new a.constructor([a], { type: a.type });}if (z(a.cloneNode)) return a.cloneNode(!0);
	    }
	    var f = [],
	        g = [];if (b) {
	      if ($d(b) || "[object ArrayBuffer]" === ma.call(b)) throw xa("cpta");if (a === b) throw xa("cpi");L(b) ? b.length = 0 : q(b, function (a, d) {
	        "$$hashKey" !== d && delete b[d];
	      });f.push(a);g.push(b);return d(a, b);
	    }return c(a);
	  }function na(a, b) {
	    if (a === b) return !0;if (null === a || null === b) return !1;if (a !== a && b !== b) return !0;var d = typeof a === "undefined" ? "undefined" : _typeof(a),
	        c;if (d == (typeof b === "undefined" ? "undefined" : _typeof(b)) && "object" == d) if (L(a)) {
	      if (!L(b)) return !1;if ((d = a.length) == b.length) {
	        for (c = 0; c < d; c++) {
	          if (!na(a[c], b[c])) return !1;
	        }return !0;
	      }
	    } else {
	      if (da(a)) return da(b) ? na(a.getTime(), b.getTime()) : !1;if (Wa(a)) return Wa(b) ? a.toString() == b.toString() : !1;if (Ya(a) || Ya(b) || Va(a) || Va(b) || L(b) || da(b) || Wa(b)) return !1;d = U();for (c in a) {
	        if ("$" !== c.charAt(0) && !z(a[c])) {
	          if (!na(a[c], b[c])) return !1;d[c] = !0;
	        }
	      }for (c in b) {
	        if (!(c in d) && "$" !== c.charAt(0) && w(b[c]) && !z(b[c])) return !1;
	      }return !0;
	    }return !1;
	  }function $a(a, b, d) {
	    return a.concat(va.call(b, d));
	  }function ab(a, b) {
	    var d = 2 < arguments.length ? va.call(arguments, 2) : [];return !z(b) || b instanceof RegExp ? b : d.length ? function () {
	      return arguments.length ? b.apply(a, $a(d, arguments, 0)) : b.apply(a, d);
	    } : function () {
	      return arguments.length ? b.apply(a, arguments) : b.call(a);
	    };
	  }function ce(a, b) {
	    var d = b;"string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = void 0 : Va(b) ? d = "$WINDOW" : b && C.document === b ? d = "$DOCUMENT" : Ya(b) && (d = "$SCOPE");return d;
	  }function bb(a, b) {
	    if (!y(a)) return T(b) || (b = b ? 2 : null), JSON.stringify(a, ce, b);
	  }function xc(a) {
	    return G(a) ? JSON.parse(a) : a;
	  }function yc(a, b) {
	    a = a.replace(de, "");var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6E4;return isNaN(d) ? b : d;
	  }function Sb(a, b, d) {
	    d = d ? -1 : 1;var c = a.getTimezoneOffset();b = yc(b, c);d *= b - c;a = new Date(a.getTime());a.setMinutes(a.getMinutes() + d);return a;
	  }function ya(a) {
	    a = F(a).clone();try {
	      a.empty();
	    } catch (b) {}var d = F("<div>").append(a).html();try {
	      return a[0].nodeType === Ma ? Q(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
	        return "<" + Q(b);
	      });
	    } catch (c) {
	      return Q(d);
	    }
	  }function zc(a) {
	    try {
	      return decodeURIComponent(a);
	    } catch (b) {}
	  }function Ac(a) {
	    var b = {};q((a || "").split("&"), function (a) {
	      var c, e, f;a && (e = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (e = a.substring(0, c), f = a.substring(c + 1)), e = zc(e), w(e) && (f = w(f) ? zc(f) : !0, ua.call(b, e) ? L(b[e]) ? b[e].push(f) : b[e] = [b[e], f] : b[e] = f));
	    });return b;
	  }function Tb(a) {
	    var b = [];q(a, function (a, c) {
	      L(a) ? q(a, function (a) {
	        b.push(ea(c, !0) + (!0 === a ? "" : "=" + ea(a, !0)));
	      }) : b.push(ea(c, !0) + (!0 === a ? "" : "=" + ea(a, !0)));
	    });return b.length ? b.join("&") : "";
	  }function qb(a) {
	    return ea(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
	  }function ea(a, b) {
	    return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+");
	  }function ee(a, b) {
	    var d,
	        c,
	        e = Na.length;for (c = 0; c < e; ++c) {
	      if (d = Na[c] + b, G(d = a.getAttribute(d))) return d;
	    }return null;
	  }function fe(a, b) {
	    var d,
	        c,
	        e = {};q(Na, function (b) {
	      b += "app";!d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b));
	    });q(Na, function (b) {
	      b += "app";var e;!d && (e = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (d = e, c = e.getAttribute(b));
	    });d && (e.strictDi = null !== ee(d, "strict-di"), b(d, c ? [c] : [], e));
	  }function Bc(a, b, d) {
	    D(d) || (d = {});d = S({ strictDi: !1 }, d);var c = function c() {
	      a = F(a);if (a.injector()) {
	        var c = a[0] === C.document ? "document" : ya(a);throw xa("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
	      }b = b || [];b.unshift(["$provide", function (b) {
	        b.value("$rootElement", a);
	      }]);d.debugInfoEnabled && b.push(["$compileProvider", function (a) {
	        a.debugInfoEnabled(!0);
	      }]);b.unshift("ng");c = cb(b, d.strictDi);c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
	        a.$apply(function () {
	          b.data("$injector", d);c(b)(a);
	        });
	      }]);return c;
	    },
	        e = /^NG_ENABLE_DEBUG_INFO!/,
	        f = /^NG_DEFER_BOOTSTRAP!/;C && e.test(C.name) && (d.debugInfoEnabled = !0, C.name = C.name.replace(e, ""));if (C && !f.test(C.name)) return c();C.name = C.name.replace(f, "");ca.resumeBootstrap = function (a) {
	      q(a, function (a) {
	        b.push(a);
	      });return c();
	    };z(ca.resumeDeferredBootstrap) && ca.resumeDeferredBootstrap();
	  }function ge() {
	    C.name = "NG_ENABLE_DEBUG_INFO!" + C.name;C.location.reload();
	  }function he(a) {
	    a = ca.element(a).injector();if (!a) throw xa("test");return a.get("$$testability");
	  }
	  function Cc(a, b) {
	    b = b || "_";return a.replace(ie, function (a, c) {
	      return (c ? b : "") + a.toLowerCase();
	    });
	  }function je() {
	    var a;if (!Dc) {
	      var b = rb();(qa = y(b) ? C.jQuery : b ? C[b] : void 0) && qa.fn.on ? (F = qa, S(qa.fn, { scope: Oa.scope, isolateScope: Oa.isolateScope, controller: Oa.controller, injector: Oa.injector, inheritedData: Oa.inheritedData }), a = qa.cleanData, qa.cleanData = function (b) {
	        for (var c, e = 0, f; null != (f = b[e]); e++) {
	          (c = qa._data(f, "events")) && c.$destroy && qa(f).triggerHandler("$destroy");
	        }a(b);
	      }) : F = O;ca.element = F;Dc = !0;
	    }
	  }function sb(a, b, d) {
	    if (!a) throw xa("areq", b || "?", d || "required");return a;
	  }function Pa(a, b, d) {
	    d && L(a) && (a = a[a.length - 1]);sb(z(a), b, "not a function, got " + (a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) ? a.constructor.name || "Object" : typeof a === "undefined" ? "undefined" : _typeof(a)));return a;
	  }function Qa(a, b) {
	    if ("hasOwnProperty" === a) throw xa("badname", b);
	  }function Ec(a, b, d) {
	    if (!b) return a;b = b.split(".");for (var c, e = a, f = b.length, g = 0; g < f; g++) {
	      c = b[g], a && (a = (e = a)[c]);
	    }return !d && z(a) ? ab(e, a) : a;
	  }function tb(a) {
	    for (var b = a[0], d = a[a.length - 1], c, e = 1; b !== d && (b = b.nextSibling); e++) {
	      if (c || a[e] !== b) c || (c = F(va.call(a, 0, e))), c.push(b);
	    }return c || a;
	  }function U() {
	    return Object.create(null);
	  }function ke(a) {
	    function b(a, b, c) {
	      return a[b] || (a[b] = c());
	    }var d = N("$injector"),
	        c = N("ng");a = b(a, "angular", Object);a.$$minErr = a.$$minErr || N;return b(a, "module", function () {
	      var a = {};return function (f, g, h) {
	        if ("hasOwnProperty" === f) throw c("badname", "module");g && a.hasOwnProperty(f) && (a[f] = null);return b(a, f, function () {
	          function a(b, d, e, f) {
	            f || (f = c);return function () {
	              f[e || "push"]([b, d, arguments]);return R;
	            };
	          }function b(a, d) {
	            return function (b, e) {
	              e && z(e) && (e.$$moduleName = f);c.push([a, d, arguments]);return R;
	            };
	          }if (!g) throw d("nomod", f);var c = [],
	              e = [],
	              p = [],
	              u = a("$injector", "invoke", "push", e),
	              R = { _invokeQueue: c, _configBlocks: e, _runBlocks: p, requires: g, name: f, provider: b("$provide", "provider"), factory: b("$provide", "factory"), service: b("$provide", "service"), value: a("$provide", "value"), constant: a("$provide", "constant", "unshift"), decorator: b("$provide", "decorator"), animation: b("$animateProvider", "register"), filter: b("$filterProvider", "register"), controller: b("$controllerProvider", "register"), directive: b("$compileProvider", "directive"), component: b("$compileProvider", "component"), config: u, run: function run(a) {
	              p.push(a);return this;
	            } };h && u(h);return R;
	        });
	      };
	    });
	  }function ia(a, b) {
	    if (L(a)) {
	      b = b || [];for (var d = 0, c = a.length; d < c; d++) {
	        b[d] = a[d];
	      }
	    } else if (D(a)) for (d in b = b || {}, a) {
	      if ("$" !== d.charAt(0) || "$" !== d.charAt(1)) b[d] = a[d];
	    }return b || a;
	  }function le(a) {
	    S(a, { bootstrap: Bc, copy: pa, extend: S, merge: Zd, equals: na, element: F, forEach: q, injector: cb, noop: A, bind: ab,
	      toJson: bb, fromJson: xc, identity: Xa, isUndefined: y, isDefined: w, isString: G, isFunction: z, isObject: D, isNumber: T, isElement: Qb, isArray: L, version: me, isDate: da, lowercase: Q, uppercase: ub, callbacks: { $$counter: 0 }, getTestability: he, $$minErr: N, $$csp: Ba, reloadWithDebugInfo: ge });Ub = ke(C);Ub("ng", ["ngLocale"], ["$provide", function (a) {
	      a.provider({ $$sanitizeUri: ne });a.provider("$compile", Fc).directive({ a: oe, input: Gc, textarea: Gc, form: pe, script: qe, select: re, style: se, option: te, ngBind: ue, ngBindHtml: ve, ngBindTemplate: we, ngClass: xe,
	        ngClassEven: ye, ngClassOdd: ze, ngCloak: Ae, ngController: Be, ngForm: Ce, ngHide: De, ngIf: Ee, ngInclude: Fe, ngInit: Ge, ngNonBindable: He, ngPluralize: Ie, ngRepeat: Je, ngShow: Ke, ngStyle: Le, ngSwitch: Me, ngSwitchWhen: Ne, ngSwitchDefault: Oe, ngOptions: Pe, ngTransclude: Qe, ngModel: Re, ngList: Se, ngChange: Te, pattern: Hc, ngPattern: Hc, required: Ic, ngRequired: Ic, minlength: Jc, ngMinlength: Jc, maxlength: Kc, ngMaxlength: Kc, ngValue: Ue, ngModelOptions: Ve }).directive({ ngInclude: We }).directive(vb).directive(Lc);a.provider({ $anchorScroll: Xe,
	        $animate: Ye, $animateCss: Ze, $$animateJs: $e, $$animateQueue: af, $$AnimateRunner: bf, $$animateAsyncRun: cf, $browser: df, $cacheFactory: ef, $controller: ff, $document: gf, $exceptionHandler: hf, $filter: Mc, $$forceReflow: jf, $interpolate: kf, $interval: lf, $http: mf, $httpParamSerializer: nf, $httpParamSerializerJQLike: of, $httpBackend: pf, $xhrFactory: qf, $jsonpCallbacks: rf, $location: sf, $log: tf, $parse: uf, $rootScope: vf, $q: wf, $$q: xf, $sce: yf, $sceDelegate: zf, $sniffer: Af, $templateCache: Bf, $templateRequest: Cf, $$testability: Df, $timeout: Ef,
	        $window: Ff, $$rAF: Gf, $$jqLite: Hf, $$HashMap: If, $$cookieReader: Jf });
	    }]);
	  }function db(a) {
	    return a.replace(Kf, function (a, d, c, e) {
	      return e ? c.toUpperCase() : c;
	    }).replace(Lf, "Moz$1");
	  }function Nc(a) {
	    a = a.nodeType;return 1 === a || !a || 9 === a;
	  }function Oc(a, b) {
	    var d,
	        c,
	        e = b.createDocumentFragment(),
	        f = [];if (Vb.test(a)) {
	      d = e.appendChild(b.createElement("div"));c = (Mf.exec(a) || ["", ""])[1].toLowerCase();c = ja[c] || ja._default;d.innerHTML = c[1] + a.replace(Nf, "<$1></$2>") + c[2];for (c = c[0]; c--;) {
	        d = d.lastChild;
	      }f = $a(f, d.childNodes);d = e.firstChild;
	      d.textContent = "";
	    } else f.push(b.createTextNode(a));e.textContent = "";e.innerHTML = "";q(f, function (a) {
	      e.appendChild(a);
	    });return e;
	  }function Pc(a, b) {
	    var d = a.parentNode;d && d.replaceChild(b, a);b.appendChild(a);
	  }function O(a) {
	    if (a instanceof O) return a;var b;G(a) && (a = W(a), b = !0);if (!(this instanceof O)) {
	      if (b && "<" != a.charAt(0)) throw Wb("nosel");return new O(a);
	    }if (b) {
	      b = C.document;var d;a = (d = Of.exec(a)) ? [b.createElement(d[1])] : (d = Oc(a, b)) ? d.childNodes : [];
	    }Qc(this, a);
	  }function Xb(a) {
	    return a.cloneNode(!0);
	  }function wb(a, b) {
	    b || eb(a);if (a.querySelectorAll) for (var d = a.querySelectorAll("*"), c = 0, e = d.length; c < e; c++) {
	      eb(d[c]);
	    }
	  }function Rc(a, b, d, c) {
	    if (w(c)) throw Wb("offargs");var e = (c = xb(a)) && c.events,
	        f = c && c.handle;if (f) if (b) {
	      var g = function g(b) {
	        var c = e[b];w(d) && Za(c || [], d);w(d) && c && 0 < c.length || (a.removeEventListener(b, f, !1), delete e[b]);
	      };q(b.split(" "), function (a) {
	        g(a);yb[a] && g(yb[a]);
	      });
	    } else for (b in e) {
	      "$destroy" !== b && a.removeEventListener(b, f, !1), delete e[b];
	    }
	  }function eb(a, b) {
	    var d = a.ng339,
	        c = d && fb[d];c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), Rc(a)), delete fb[d], a.ng339 = void 0));
	  }function xb(a, b) {
	    var d = a.ng339,
	        d = d && fb[d];b && !d && (a.ng339 = d = ++Pf, d = fb[d] = { events: {}, data: {}, handle: void 0 });return d;
	  }function Yb(a, b, d) {
	    if (Nc(a)) {
	      var c = w(d),
	          e = !c && b && !D(b),
	          f = !b;a = (a = xb(a, !e)) && a.data;if (c) a[b] = d;else {
	        if (f) return a;if (e) return a && a[b];S(a, b);
	      }
	    }
	  }function zb(a, b) {
	    return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1;
	  }function Ab(a, b) {
	    b && a.setAttribute && q(b.split(" "), function (b) {
	      a.setAttribute("class", W((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + W(b) + " ", " ")));
	    });
	  }function Bb(a, b) {
	    if (b && a.setAttribute) {
	      var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");q(b.split(" "), function (a) {
	        a = W(a);-1 === d.indexOf(" " + a + " ") && (d += a + " ");
	      });a.setAttribute("class", W(d));
	    }
	  }function Qc(a, b) {
	    if (b) if (b.nodeType) a[a.length++] = b;else {
	      var d = b.length;if ("number" === typeof d && b.window !== b) {
	        if (d) for (var c = 0; c < d; c++) {
	          a[a.length++] = b[c];
	        }
	      } else a[a.length++] = b;
	    }
	  }function Sc(a, b) {
	    return Cb(a, "$" + (b || "ngController") + "Controller");
	  }function Cb(a, b, d) {
	    9 == a.nodeType && (a = a.documentElement);for (b = L(b) ? b : [b]; a;) {
	      for (var c = 0, e = b.length; c < e; c++) {
	        if (w(d = F.data(a, b[c]))) return d;
	      }a = a.parentNode || 11 === a.nodeType && a.host;
	    }
	  }function Tc(a) {
	    for (wb(a, !0); a.firstChild;) {
	      a.removeChild(a.firstChild);
	    }
	  }function Db(a, b) {
	    b || wb(a);var d = a.parentNode;d && d.removeChild(a);
	  }function Qf(a, b) {
	    b = b || C;if ("complete" === b.document.readyState) b.setTimeout(a);else F(b).on("load", a);
	  }function Uc(a, b) {
	    var d = Eb[b.toLowerCase()];return d && Vc[wa(a)] && d;
	  }function Rf(a, b) {
	    var d = function d(c, _d) {
	      c.isDefaultPrevented = function () {
	        return c.defaultPrevented;
	      };var f = b[_d || c.type],
	          g = f ? f.length : 0;if (g) {
	        if (y(c.immediatePropagationStopped)) {
	          var h = c.stopImmediatePropagation;c.stopImmediatePropagation = function () {
	            c.immediatePropagationStopped = !0;c.stopPropagation && c.stopPropagation();h && h.call(c);
	          };
	        }c.isImmediatePropagationStopped = function () {
	          return !0 === c.immediatePropagationStopped;
	        };var k = f.specialHandlerWrapper || Sf;1 < g && (f = ia(f));for (var l = 0; l < g; l++) {
	          c.isImmediatePropagationStopped() || k(a, c, f[l]);
	        }
	      }
	    };d.elem = a;return d;
	  }function Sf(a, b, d) {
	    d.call(a, b);
	  }function Tf(a, b, d) {
	    var c = b.relatedTarget;c && (c === a || Uf.call(a, c)) || d.call(a, b);
	  }function Hf() {
	    this.$get = function () {
	      return S(O, { hasClass: function hasClass(a, b) {
	          a.attr && (a = a[0]);return zb(a, b);
	        }, addClass: function addClass(a, b) {
	          a.attr && (a = a[0]);return Bb(a, b);
	        }, removeClass: function removeClass(a, b) {
	          a.attr && (a = a[0]);return Ab(a, b);
	        } });
	    };
	  }function Ca(a, b) {
	    var d = a && a.$$hashKey;if (d) return "function" === typeof d && (d = a.$$hashKey()), d;d = typeof a === "undefined" ? "undefined" : _typeof(a);return d = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || Yd)() : d + ":" + a;
	  }function Ra(a, b) {
	    if (b) {
	      var d = 0;this.nextUid = function () {
	        return ++d;
	      };
	    }q(a, this.put, this);
	  }function Wc(a) {
	    a = (Function.prototype.toString.call(a) + " ").replace(Vf, "");return a.match(Wf) || a.match(Xf);
	  }function Yf(a) {
	    return (a = Wc(a)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
	  }function cb(a, b) {
	    function d(a) {
	      return function (b, c) {
	        if (D(b)) q(b, uc(a));else return a(b, c);
	      };
	    }function c(a, b) {
	      Qa(a, "service");if (z(b) || L(b)) b = p.instantiate(b);if (!b.$get) throw Ha("pget", a);return n[a + "Provider"] = b;
	    }function e(a, b) {
	      return function () {
	        var c = B.invoke(b, this);if (y(c)) throw Ha("undef", a);return c;
	      };
	    }function f(a, b, d) {
	      return c(a, { $get: !1 !== d ? e(a, b) : b });
	    }function g(a) {
	      sb(y(a) || L(a), "modulesToLoad", "not an array");var b = [],
	          c;q(a, function (a) {
	        function d(a) {
	          var b, c;b = 0;for (c = a.length; b < c; b++) {
	            var e = a[b],
	                f = p.get(e[0]);f[e[1]].apply(f, e[2]);
	          }
	        }if (!m.get(a)) {
	          m.put(a, !0);try {
	            G(a) ? (c = Ub(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : z(a) ? b.push(p.invoke(a)) : L(a) ? b.push(p.invoke(a)) : Pa(a, "module");
	          } catch (e) {
	            throw L(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ha("modulerr", a, e.stack || e.message || e);
	          }
	        }
	      });return b;
	    }function h(a, c) {
	      function d(b, e) {
	        if (a.hasOwnProperty(b)) {
	          if (a[b] === k) throw Ha("cdep", b + " <- " + l.join(" <- "));return a[b];
	        }try {
	          return l.unshift(b), a[b] = k, a[b] = c(b, e);
	        } catch (f) {
	          throw a[b] === k && delete a[b], f;
	        } finally {
	          l.shift();
	        }
	      }function e(a, c, f) {
	        var g = [];a = cb.$$annotate(a, b, f);for (var h = 0, k = a.length; h < k; h++) {
	          var l = a[h];if ("string" !== typeof l) throw Ha("itkn", l);g.push(c && c.hasOwnProperty(l) ? c[l] : d(l, f));
	        }return g;
	      }return { invoke: function invoke(a, b, c, d) {
	          "string" === typeof c && (d = c, c = null);c = e(a, c, d);L(a) && (a = a[a.length - 1]);d = 11 >= Ea ? !1 : "function" === typeof a && /^(?:class\b|constructor\()/.test(Function.prototype.toString.call(a) + " ");return d ? (c.unshift(null), new (Function.prototype.bind.apply(a, c))()) : a.apply(b, c);
	        }, instantiate: function instantiate(a, b, c) {
	          var d = L(a) ? a[a.length - 1] : a;a = e(a, b, c);a.unshift(null);return new (Function.prototype.bind.apply(d, a))();
	        }, get: d, annotate: cb.$$annotate, has: function has(b) {
	          return n.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b);
	        } };
	    }b = !0 === b;var k = {},
	        l = [],
	        m = new Ra([], !0),
	        n = { $provide: { provider: d(c), factory: d(f), service: d(function (a, b) {
	          return f(a, ["$injector", function (a) {
	            return a.instantiate(b);
	          }]);
	        }), value: d(function (a, b) {
	          return f(a, ha(b), !1);
	        }), constant: d(function (a, b) {
	          Qa(a, "constant");n[a] = b;u[a] = b;
	        }), decorator: function decorator(a, b) {
	          var c = p.get(a + "Provider"),
	              d = c.$get;c.$get = function () {
	            var a = B.invoke(d, c);return B.invoke(b, null, { $delegate: a });
	          };
	        } } },
	        p = n.$injector = h(n, function (a, b) {
	      ca.isString(b) && l.push(b);throw Ha("unpr", l.join(" <- "));
	    }),
	        u = {},
	        R = h(u, function (a, b) {
	      var c = p.get(a + "Provider", b);return B.invoke(c.$get, c, void 0, a);
	    }),
	        B = R;n.$injectorProvider = { $get: ha(R) };var r = g(a),
	        B = R.get("$injector");B.strictDi = b;q(r, function (a) {
	      a && B.invoke(a);
	    });return B;
	  }function Xe() {
	    var a = !0;this.disableAutoScrolling = function () {
	      a = !1;
	    };this.$get = ["$window", "$location", "$rootScope", function (b, d, c) {
	      function e(a) {
	        var b = null;Array.prototype.some.call(a, function (a) {
	          if ("a" === wa(a)) return b = a, !0;
	        });return b;
	      }function f(a) {
	        if (a) {
	          a.scrollIntoView();var c;c = g.yOffset;z(c) ? c = c() : Qb(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : T(c) || (c = 0);c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c));
	        } else b.scrollTo(0, 0);
	      }function g(a) {
	        a = G(a) ? a : d.hash();var b;a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null);
	      }var h = b.document;a && c.$watch(function () {
	        return d.hash();
	      }, function (a, b) {
	        a === b && "" === a || Qf(function () {
	          c.$evalAsync(g);
	        });
	      });return g;
	    }];
	  }function gb(a, b) {
	    if (!a && !b) return "";if (!a) return b;if (!b) return a;L(a) && (a = a.join(" "));L(b) && (b = b.join(" "));return a + " " + b;
	  }function Zf(a) {
	    G(a) && (a = a.split(" "));var b = U();q(a, function (a) {
	      a.length && (b[a] = !0);
	    });return b;
	  }function Ia(a) {
	    return D(a) ? a : {};
	  }function $f(a, b, d, c) {
	    function e(a) {
	      try {
	        a.apply(null, va.call(arguments, 1));
	      } finally {
	        if (R--, 0 === R) for (; B.length;) {
	          try {
	            B.pop()();
	          } catch (b) {
	            d.error(b);
	          }
	        }
	      }
	    }
	    function f() {
	      t = null;g();h();
	    }function g() {
	      r = K();r = y(r) ? null : r;na(r, E) && (r = E);E = r;
	    }function h() {
	      if (v !== k.url() || J !== r) v = k.url(), J = r, q(M, function (a) {
	        a(k.url(), r);
	      });
	    }var k = this,
	        l = a.location,
	        m = a.history,
	        n = a.setTimeout,
	        p = a.clearTimeout,
	        u = {};k.isMock = !1;var R = 0,
	        B = [];k.$$completeOutstandingRequest = e;k.$$incOutstandingRequestCount = function () {
	      R++;
	    };k.notifyWhenNoOutstandingRequests = function (a) {
	      0 === R ? a() : B.push(a);
	    };var r,
	        J,
	        v = l.href,
	        fa = b.find("base"),
	        t = null,
	        K = c.history ? function () {
	      try {
	        return m.state;
	      } catch (a) {}
	    } : A;g();J = r;k.url = function (b, d, e) {
	      y(e) && (e = null);l !== a.location && (l = a.location);m !== a.history && (m = a.history);if (b) {
	        var f = J === e;if (v === b && (!c.history || f)) return k;var h = v && Ja(v) === Ja(b);v = b;J = e;!c.history || h && f ? (h || (t = b), d ? l.replace(b) : h ? (d = l, e = b.indexOf("#"), e = -1 === e ? "" : b.substr(e), d.hash = e) : l.href = b, l.href !== b && (t = b)) : (m[d ? "replaceState" : "pushState"](e, "", b), g(), J = r);t && (t = b);return k;
	      }return t || l.href.replace(/%27/g, "'");
	    };k.state = function () {
	      return r;
	    };var M = [],
	        H = !1,
	        E = null;k.onUrlChange = function (b) {
	      if (!H) {
	        if (c.history) F(a).on("popstate", f);F(a).on("hashchange", f);H = !0;
	      }M.push(b);return b;
	    };k.$$applicationDestroyed = function () {
	      F(a).off("hashchange popstate", f);
	    };k.$$checkUrlChange = h;k.baseHref = function () {
	      var a = fa.attr("href");return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
	    };k.defer = function (a, b) {
	      var c;R++;c = n(function () {
	        delete u[c];e(a);
	      }, b || 0);u[c] = !0;return c;
	    };k.defer.cancel = function (a) {
	      return u[a] ? (delete u[a], p(a), e(A), !0) : !1;
	    };
	  }function df() {
	    this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, d, c) {
	      return new $f(a, c, b, d);
	    }];
	  }function ef() {
	    this.$get = function () {
	      function a(a, c) {
	        function e(a) {
	          a != n && (p ? p == a && (p = a.n) : p = a, f(a.n, a.p), f(a, n), n = a, n.n = null);
	        }function f(a, b) {
	          a != b && (a && (a.p = b), b && (b.n = a));
	        }if (a in b) throw N("$cacheFactory")("iid", a);var g = 0,
	            h = S({}, c, { id: a }),
	            k = U(),
	            l = c && c.capacity || Number.MAX_VALUE,
	            m = U(),
	            n = null,
	            p = null;return b[a] = { put: function put(a, b) {
	            if (!y(b)) {
	              if (l < Number.MAX_VALUE) {
	                var c = m[a] || (m[a] = { key: a });e(c);
	              }a in k || g++;k[a] = b;g > l && this.remove(p.key);return b;
	            }
	          }, get: function get(a) {
	            if (l < Number.MAX_VALUE) {
	              var b = m[a];
	              if (!b) return;e(b);
	            }return k[a];
	          }, remove: function remove(a) {
	            if (l < Number.MAX_VALUE) {
	              var b = m[a];if (!b) return;b == n && (n = b.p);b == p && (p = b.n);f(b.n, b.p);delete m[a];
	            }a in k && (delete k[a], g--);
	          }, removeAll: function removeAll() {
	            k = U();g = 0;m = U();n = p = null;
	          }, destroy: function destroy() {
	            m = h = k = null;delete b[a];
	          }, info: function info() {
	            return S({}, h, { size: g });
	          } };
	      }var b = {};a.info = function () {
	        var a = {};q(b, function (b, e) {
	          a[e] = b.info();
	        });return a;
	      };a.get = function (a) {
	        return b[a];
	      };return a;
	    };
	  }function Bf() {
	    this.$get = ["$cacheFactory", function (a) {
	      return a("templates");
	    }];
	  }
	  function Fc(a, b) {
	    function d(a, b, c) {
	      var d = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,
	          e = U();q(a, function (a, f) {
	        if (a in n) e[f] = n[a];else {
	          var g = a.match(d);if (!g) throw ga("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");e[f] = { mode: g[1][0], collection: "*" === g[2], optional: "?" === g[3], attrName: g[4] || f };g[4] && (n[a] = e[f]);
	        }
	      });return e;
	    }function c(a) {
	      var b = a.charAt(0);if (!b || b !== Q(b)) throw ga("baddir", a);if (a !== a.trim()) throw ga("baddir", a);
	    }function e(a) {
	      var b = a.require || a.controller && a.name;
	      !L(b) && D(b) && q(b, function (a, c) {
	        var d = a.match(l);a.substring(d[0].length) || (b[c] = d[0] + c);
	      });return b;
	    }var f = {},
	        g = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
	        h = /(([\w\-]+)(?:\:([^;]+))?;?)/,
	        k = be("ngSrc,ngSrcset,src,srcset"),
	        l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
	        m = /^(on[a-z]+|formaction)$/,
	        n = U();this.directive = function B(b, d) {
	      Qa(b, "directive");G(b) ? (c(b), sb(d, "directiveFactory"), f.hasOwnProperty(b) || (f[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function (a, c) {
	        var d = [];q(f[b], function (f, g) {
	          try {
	            var h = a.invoke(f);z(h) ? h = { compile: ha(h) } : !h.compile && h.link && (h.compile = ha(h.link));h.priority = h.priority || 0;h.index = g;h.name = h.name || b;h.require = e(h);h.restrict = h.restrict || "EA";h.$$moduleName = f.$$moduleName;d.push(h);
	          } catch (k) {
	            c(k);
	          }
	        });return d;
	      }])), f[b].push(d)) : q(b, uc(B));return this;
	    };this.component = function (a, b) {
	      function c(a) {
	        function e(b) {
	          return z(b) || L(b) ? function (c, d) {
	            return a.invoke(b, this, { $element: c, $attrs: d });
	          } : b;
	        }var f = b.template || b.templateUrl ? b.template : "",
	            g = { controller: d, controllerAs: Xc(b.controller) || b.controllerAs || "$ctrl", template: e(f), templateUrl: e(b.templateUrl), transclude: b.transclude, scope: {}, bindToController: b.bindings || {}, restrict: "E", require: b.require };q(b, function (a, b) {
	          "$" === b.charAt(0) && (g[b] = a);
	        });return g;
	      }var d = b.controller || function () {};q(b, function (a, b) {
	        "$" === b.charAt(0) && (c[b] = a, z(d) && (d[b] = a));
	      });c.$inject = ["$injector"];return this.directive(a, c);
	    };this.aHrefSanitizationWhitelist = function (a) {
	      return w(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist();
	    };this.imgSrcSanitizationWhitelist = function (a) {
	      return w(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist();
	    };var p = !0;this.debugInfoEnabled = function (a) {
	      return w(a) ? (p = a, this) : p;
	    };var u = 10;this.onChangesTtl = function (a) {
	      return arguments.length ? (u = a, this) : u;
	    };this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, e, n, t, K, M, H, E) {
	      function I() {
	        try {
	          if (! --qa) throw Y = void 0, ga("infchng", u);K.$apply(function () {
	            for (var a = [], b = 0, c = Y.length; b < c; ++b) {
	              try {
	                Y[b]();
	              } catch (d) {
	                a.push(d);
	              }
	            }Y = void 0;if (a.length) throw a;
	          });
	        } finally {
	          qa++;
	        }
	      }function Da(a, b) {
	        if (b) {
	          var c = Object.keys(b),
	              d,
	              e,
	              f;d = 0;for (e = c.length; d < e; d++) {
	            f = c[d], this[f] = b[f];
	          }
	        } else this.$attr = {};this.$$element = a;
	      }function P(a, b, c) {
	        pa.innerHTML = "<span " + b + ">";b = pa.firstChild.attributes;var d = b[0];b.removeNamedItem(d.name);d.value = c;a.attributes.setNamedItem(d);
	      }function x(a, b) {
	        try {
	          a.addClass(b);
	        } catch (c) {}
	      }function aa(a, b, c, d, e) {
	        a instanceof F || (a = F(a));for (var f = /\S+/, g = 0, h = a.length; g < h; g++) {
	          var k = a[g];k.nodeType === Ma && k.nodeValue.match(f) && Pc(k, a[g] = C.document.createElement("span"));
	        }var l = s(a, b, a, c, d, e);aa.$$addScopeClass(a);var m = null;return function (b, c, d) {
	          sb(b, "scope");e && e.needsNewScope && (b = b.$parent.$new());d = d || {};var f = d.parentBoundTranscludeFn,
	              g = d.transcludeControllers;d = d.futureParentElement;f && f.$$boundTransclude && (f = f.$$boundTransclude);m || (m = (d = d && d[0]) ? "foreignobject" !== wa(d) && ma.call(d).match(/SVG/) ? "svg" : "html" : "html");d = "html" !== m ? F(da(m, F("<div>").append(a).html())) : c ? Oa.clone.call(a) : a;if (g) for (var h in g) {
	            d.data("$" + h + "Controller", g[h].instance);
	          }aa.$$addScopeInfo(d, b);c && c(d, b);l && l(b, d, d, f);return d;
	        };
	      }function s(a, b, c, d, e, f) {
	        function g(a, c, d, e) {
	          var f, k, l, m, p, r, v;if (n) for (v = Array(c.length), m = 0; m < h.length; m += 3) {
	            f = h[m], v[f] = c[f];
	          } else v = c;m = 0;for (p = h.length; m < p;) {
	            k = v[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l = a.$new(), aa.$$addScopeInfo(F(k), l)) : l = a, r = c.transcludeOnThisElement ? za(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? za(a, b) : null, c(f, l, k, d, r)) : f && f(a, k.childNodes, void 0, e);
	          }
	        }for (var h = [], k, l, m, p, n, r = 0; r < a.length; r++) {
	          k = new Da();l = $b(a[r], [], k, 0 === r ? d : void 0, e);(f = l.length ? oa(l, a[r], k, b, c, null, [], [], f) : null) && f.scope && aa.$$addScopeClass(k.$$element);k = f && f.terminal || !(m = a[r].childNodes) || !m.length ? null : s(m, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);if (f || k) h.push(r, f, k), p = !0, n = n || f;f = null;
	        }return p ? g : null;
	      }function za(a, b, c) {
	        function d(e, f, g, h, k) {
	          e || (e = a.$new(!1, k), e.$$transcluded = !0);return b(e, f, { parentBoundTranscludeFn: c,
	            transcludeControllers: g, futureParentElement: h });
	        }var e = d.$$slots = U(),
	            f;for (f in b.$$slots) {
	          e[f] = b.$$slots[f] ? za(a, b.$$slots[f], c) : null;
	        }return d;
	      }function $b(a, b, c, d, e) {
	        var f = c.$attr;switch (a.nodeType) {case 1:
	            O(b, Aa(wa(a)), "E", d, e);for (var g, k, l, m, p = a.attributes, n = 0, r = p && p.length; n < r; n++) {
	              var v = !1,
	                  u = !1;g = p[n];k = g.name;l = W(g.value);g = Aa(k);if (m = Ba.test(g)) k = k.replace(Yc, "").substr(8).replace(/_(.)/g, function (a, b) {
	                return b.toUpperCase();
	              });(g = g.match(Ca)) && V(g[1]) && (v = k, u = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6));g = Aa(k.toLowerCase());f[g] = k;if (m || !c.hasOwnProperty(g)) c[g] = l, Uc(a, g) && (c[g] = !0);ia(a, b, l, g, m);O(b, g, "A", d, e, v, u);
	            }f = a.className;D(f) && (f = f.animVal);if (G(f) && "" !== f) for (; a = h.exec(f);) {
	              g = Aa(a[2]), O(b, g, "C", d, e) && (c[g] = W(a[3])), f = f.substr(a.index + a[0].length);
	            }break;case Ma:
	            if (11 === Ea) for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === Ma;) {
	              a.nodeValue += a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
	            }ca(b, a.nodeValue);break;case 8:
	            hb(a, b, c, d, e);}b.sort(Z);
	        return b;
	      }function hb(a, b, c, d, e) {
	        try {
	          var f = g.exec(a.nodeValue);if (f) {
	            var h = Aa(f[1]);O(b, h, "M", d, e) && (c[h] = W(f[2]));
	          }
	        } catch (k) {}
	      }function N(a, b, c) {
	        var d = [],
	            e = 0;if (b && a.hasAttribute && a.hasAttribute(b)) {
	          do {
	            if (!a) throw ga("uterdir", b, c);1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);d.push(a);a = a.nextSibling;
	          } while (0 < e);
	        } else d.push(a);return F(d);
	      }function Zc(a, b, c) {
	        return function (d, e, f, g, h) {
	          e = N(e[0], b, c);return a(d, e, f, g, h);
	        };
	      }function ac(a, b, c, d, e, f) {
	        var g;return a ? aa(b, c, d, e, f) : function () {
	          g || (g = aa(b, c, d, e, f), b = c = f = null);return g.apply(this, arguments);
	        };
	      }function oa(a, b, d, e, f, g, h, k, l) {
	        function m(a, b, c, d) {
	          if (a) {
	            c && (a = Zc(a, c, d));a.require = x.require;a.directiveName = I;if (u === x || x.$$isolateScope) a = ja(a, { isolateScope: !0 });h.push(a);
	          }if (b) {
	            c && (b = Zc(b, c, d));b.require = x.require;b.directiveName = I;if (u === x || x.$$isolateScope) b = ja(b, { isolateScope: !0 });k.push(b);
	          }
	        }function p(a, e, f, g, l) {
	          function m(a, b, c, d) {
	            var e;Ya(a) || (d = c, c = b, b = a, a = void 0);fa && (e = t);c || (c = fa ? I.parent() : I);if (d) {
	              var f = l.$$slots[d];if (f) return f(a, b, e, c, s);if (y(f)) throw ga("noslot", d, ya(I));
	            } else return l(a, b, e, c, s);
	          }var n, E, x, M, B, t, P, I;b === f ? (g = d, I = d.$$element) : (I = F(f), g = new Da(I, d));B = e;u ? M = e.$new(!0) : r && (B = e.$parent);l && (P = m, P.$$boundTransclude = l, P.isSlotFilled = function (a) {
	            return !!l.$$slots[a];
	          });v && (t = ag(I, g, P, v, M, e, u));u && (aa.$$addScopeInfo(I, M, !0, !(H && (H === u || H === u.$$originalDirective))), aa.$$addScopeClass(I, !0), M.$$isolateBindings = u.$$isolateBindings, E = ka(e, g, M, M.$$isolateBindings, u), E.removeWatches && M.$on("$destroy", E.removeWatches));
	          for (n in t) {
	            E = v[n];x = t[n];var Zb = E.$$bindings.bindToController;x.bindingInfo = x.identifier && Zb ? ka(B, g, x.instance, Zb, E) : {};var K = x();K !== x.instance && (x.instance = K, I.data("$" + E.name + "Controller", K), x.bindingInfo.removeWatches && x.bindingInfo.removeWatches(), x.bindingInfo = ka(B, g, x.instance, Zb, E));
	          }q(v, function (a, b) {
	            var c = a.require;a.bindToController && !L(c) && D(c) && S(t[b].instance, ib(b, c, I, t));
	          });q(t, function (a) {
	            var b = a.instance;if (z(b.$onChanges)) try {
	              b.$onChanges(a.bindingInfo.initialChanges);
	            } catch (d) {
	              c(d);
	            }if (z(b.$onInit)) try {
	              b.$onInit();
	            } catch (e) {
	              c(e);
	            }z(b.$doCheck) && (B.$watch(function () {
	              b.$doCheck();
	            }), b.$doCheck());z(b.$onDestroy) && B.$on("$destroy", function () {
	              b.$onDestroy();
	            });
	          });n = 0;for (E = h.length; n < E; n++) {
	            x = h[n], la(x, x.isolateScope ? M : e, I, g, x.require && ib(x.directiveName, x.require, I, t), P);
	          }var s = e;u && (u.template || null === u.templateUrl) && (s = M);a && a(s, f.childNodes, void 0, l);for (n = k.length - 1; 0 <= n; n--) {
	            x = k[n], la(x, x.isolateScope ? M : e, I, g, x.require && ib(x.directiveName, x.require, I, t), P);
	          }q(t, function (a) {
	            a = a.instance;z(a.$postLink) && a.$postLink();
	          });
	        }l = l || {};for (var n = -Number.MAX_VALUE, r = l.newScopeDirective, v = l.controllerDirectives, u = l.newIsolateScopeDirective, H = l.templateDirective, E = l.nonTlbTranscludeDirective, M = !1, B = !1, fa = l.hasElementTranscludeDirective, t = d.$$element = F(b), x, I, P, K = e, s, Fa = !1, za = !1, w, A = 0, C = a.length; A < C; A++) {
	          x = a[A];var G = x.$$start,
	              hb = x.$$end;G && (t = N(b, G, hb));P = void 0;if (n > x.priority) break;if (w = x.scope) x.templateUrl || (D(w) ? (X("new/isolated scope", u || r, x, t), u = x) : X("new/isolated scope", u, x, t)), r = r || x;I = x.name;if (!Fa && (x.replace && (x.templateUrl || x.template) || x.transclude && !x.$$tlb)) {
	            for (w = A + 1; Fa = a[w++];) {
	              if (Fa.transclude && !Fa.$$tlb || Fa.replace && (Fa.templateUrl || Fa.template)) {
	                za = !0;break;
	              }
	            }Fa = !0;
	          }!x.templateUrl && x.controller && (w = x.controller, v = v || U(), X("'" + I + "' controller", v[I], x, t), v[I] = x);if (w = x.transclude) if (M = !0, x.$$tlb || (X("transclusion", E, x, t), E = x), "element" == w) fa = !0, n = x.priority, P = t, t = d.$$element = F(aa.$$createComment(I, d[I])), b = t[0], ea(f, va.call(P, 0), b), P[0].$$parentNode = P[0].parentNode, K = ac(za, P, e, n, g && g.name, { nonTlbTranscludeDirective: E });else {
	            var oa = U();P = F(Xb(b)).contents();
	            if (D(w)) {
	              P = [];var Q = U(),
	                  O = U();q(w, function (a, b) {
	                var c = "?" === a.charAt(0);a = c ? a.substring(1) : a;Q[a] = b;oa[b] = null;O[b] = c;
	              });q(t.contents(), function (a) {
	                var b = Q[Aa(wa(a))];b ? (O[b] = !0, oa[b] = oa[b] || [], oa[b].push(a)) : P.push(a);
	              });q(O, function (a, b) {
	                if (!a) throw ga("reqslot", b);
	              });for (var V in oa) {
	                oa[V] && (oa[V] = ac(za, oa[V], e));
	              }
	            }t.empty();K = ac(za, P, e, void 0, void 0, { needsNewScope: x.$$isolateScope || x.$$newScope });K.$$slots = oa;
	          }if (x.template) if (B = !0, X("template", H, x, t), H = x, w = z(x.template) ? x.template(t, d) : x.template, w = xa(w), x.replace) {
	            g = x;P = Vb.test(w) ? $c(da(x.templateNamespace, W(w))) : [];b = P[0];if (1 != P.length || 1 !== b.nodeType) throw ga("tplrt", I, "");ea(f, t, b);C = { $attr: {} };w = $b(b, [], C);var Z = a.splice(A + 1, a.length - (A + 1));(u || r) && T(w, u, r);a = a.concat(w).concat(Z);$(d, C);C = a.length;
	          } else t.html(w);if (x.templateUrl) B = !0, X("template", H, x, t), H = x, x.replace && (g = x), p = ba(a.splice(A, a.length - A), t, d, f, M && K, h, k, { controllerDirectives: v, newScopeDirective: r !== x && r, newIsolateScopeDirective: u, templateDirective: H, nonTlbTranscludeDirective: E }), C = a.length;else if (x.compile) try {
	            s = x.compile(t, d, K);var Y = x.$$originalDirective || x;z(s) ? m(null, ab(Y, s), G, hb) : s && m(ab(Y, s.pre), ab(Y, s.post), G, hb);
	          } catch (ca) {
	            c(ca, ya(t));
	          }x.terminal && (p.terminal = !0, n = Math.max(n, x.priority));
	        }p.scope = r && !0 === r.scope;p.transcludeOnThisElement = M;p.templateOnThisElement = B;p.transclude = K;l.hasElementTranscludeDirective = fa;return p;
	      }function ib(a, b, c, d) {
	        var e;if (G(b)) {
	          var f = b.match(l);b = b.substring(f[0].length);var g = f[1] || f[3],
	              f = "?" === f[2];"^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;if (!e) {
	            var h = "$" + b + "Controller";e = g ? c.inheritedData(h) : c.data(h);
	          }if (!e && !f) throw ga("ctreq", b, a);
	        } else if (L(b)) for (e = [], g = 0, f = b.length; g < f; g++) {
	          e[g] = ib(a, b[g], c, d);
	        } else D(b) && (e = {}, q(b, function (b, f) {
	          e[f] = ib(a, b, c, d);
	        }));return e || null;
	      }function ag(a, b, c, d, e, f, g) {
	        var h = U(),
	            k;for (k in d) {
	          var l = d[k],
	              m = { $scope: l === g || l.$$isolateScope ? e : f, $element: a, $attrs: b, $transclude: c },
	              p = l.controller;"@" == p && (p = b[l.name]);m = t(p, m, !0, l.controllerAs);h[l.name] = m;a.data("$" + l.name + "Controller", m.instance);
	        }return h;
	      }
	      function T(a, b, c) {
	        for (var d = 0, e = a.length; d < e; d++) {
	          a[d] = Rb(a[d], { $$isolateScope: b, $$newScope: c });
	        }
	      }function O(b, e, g, h, k, l, m) {
	        if (e === k) return null;k = null;if (f.hasOwnProperty(e)) {
	          var p;e = a.get(e + "Directive");for (var n = 0, r = e.length; n < r; n++) {
	            try {
	              if (p = e[n], (y(h) || h > p.priority) && -1 != p.restrict.indexOf(g)) {
	                l && (p = Rb(p, { $$start: l, $$end: m }));if (!p.$$bindings) {
	                  var u = p,
	                      v = p,
	                      x = p.name,
	                      H = { isolateScope: null, bindToController: null };D(v.scope) && (!0 === v.bindToController ? (H.bindToController = d(v.scope, x, !0), H.isolateScope = {}) : H.isolateScope = d(v.scope, x, !1));D(v.bindToController) && (H.bindToController = d(v.bindToController, x, !0));if (D(H.bindToController)) {
	                    var E = v.controller,
	                        M = v.controllerAs;if (!E) throw ga("noctrl", x);if (!Xc(E, M)) throw ga("noident", x);
	                  }var t = u.$$bindings = H;D(t.isolateScope) && (p.$$isolateBindings = t.isolateScope);
	                }b.push(p);k = p;
	              }
	            } catch (I) {
	              c(I);
	            }
	          }
	        }return k;
	      }function V(b) {
	        if (f.hasOwnProperty(b)) for (var c = a.get(b + "Directive"), d = 0, e = c.length; d < e; d++) {
	          if (b = c[d], b.multiElement) return !0;
	        }return !1;
	      }function $(a, b) {
	        var c = b.$attr,
	            d = a.$attr;q(a, function (d, e) {
	          "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]));
	        });q(b, function (b, e) {
	          a.hasOwnProperty(e) || "$" === e.charAt(0) || (a[e] = b, "class" !== e && "style" !== e && (d[e] = c[e]));
	        });
	      }function ba(a, b, c, d, f, g, h, k) {
	        var l = [],
	            m,
	            p,
	            n = b[0],
	            r = a.shift(),
	            u = Rb(r, { templateUrl: null, transclude: null, replace: null, $$originalDirective: r }),
	            H = z(r.templateUrl) ? r.templateUrl(b, c) : r.templateUrl,
	            E = r.templateNamespace;b.empty();e(H).then(function (e) {
	          var v, M;e = xa(e);if (r.replace) {
	            e = Vb.test(e) ? $c(da(E, W(e))) : [];v = e[0];if (1 != e.length || 1 !== v.nodeType) throw ga("tplrt", r.name, H);e = { $attr: {} };ea(d, b, v);var B = $b(v, [], e);D(r.scope) && T(B, !0);a = B.concat(a);$(c, e);
	          } else v = n, b.html(e);a.unshift(u);m = oa(a, v, c, f, b, r, g, h, k);q(d, function (a, c) {
	            a == v && (d[c] = b[0]);
	          });for (p = s(b[0].childNodes, f); l.length;) {
	            e = l.shift();M = l.shift();var t = l.shift(),
	                I = l.shift(),
	                B = b[0];if (!e.$$destroyed) {
	              if (M !== n) {
	                var P = M.className;k.hasElementTranscludeDirective && r.replace || (B = Xb(v));ea(t, F(M), B);x(F(B), P);
	              }M = m.transcludeOnThisElement ? za(e, m.transclude, I) : I;m(p, e, B, d, M);
	            }
	          }l = null;
	        });return function (a, b, c, d, e) {
	          a = e;b.$$destroyed || (l ? l.push(b, c, d, a) : (m.transcludeOnThisElement && (a = za(b, m.transclude, e)), m(p, b, c, d, a)));
	        };
	      }function Z(a, b) {
	        var c = b.priority - a.priority;return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
	      }function X(a, b, c, d) {
	        function e(a) {
	          return a ? " (module: " + a + ")" : "";
	        }if (b) throw ga("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, ya(d));
	      }function ca(a, c) {
	        var d = b(c, !0);d && a.push({ priority: 0, compile: function compile(a) {
	            a = a.parent();var b = !!a.length;b && aa.$$addBindingClass(a);return function (a, c) {
	              var e = c.parent();b || aa.$$addBindingClass(e);aa.$$addBindingInfo(e, d.expressions);a.$watch(d, function (a) {
	                c[0].nodeValue = a;
	              });
	            };
	          } });
	      }function da(a, b) {
	        a = Q(a || "html");switch (a) {case "svg":case "math":
	            var c = C.document.createElement("div");c.innerHTML = "<" + a + ">" + b + "</" + a + ">";return c.childNodes[0].childNodes;default:
	            return b;}
	      }function ha(a, b) {
	        if ("srcdoc" == b) return M.HTML;var c = wa(a);if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b)) return M.RESOURCE_URL;
	      }function ia(a, c, d, e, f) {
	        var g = ha(a, e);f = k[e] || f;var h = b(d, !0, g, f);if (h) {
	          if ("multiple" === e && "select" === wa(a)) throw ga("selmulti", ya(a));c.push({ priority: 100, compile: function compile() {
	              return { pre: function pre(a, c, k) {
	                  c = k.$$observers || (k.$$observers = U());if (m.test(e)) throw ga("nodomevents");var l = k[e];l !== d && (h = l && b(l, !0, g, f), d = l);h && (k[e] = h(a), (c[e] || (c[e] = [])).$$inter = !0, (k.$$observers && k.$$observers[e].$$scope || a).$watch(h, function (a, b) {
	                    "class" === e && a != b ? k.$updateClass(a, b) : k.$set(e, a);
	                  }));
	                } };
	            } });
	        }
	      }function ea(a, b, c) {
	        var d = b[0],
	            e = b.length,
	            f = d.parentNode,
	            g,
	            h;if (a) for (g = 0, h = a.length; g < h; g++) {
	          if (a[g] == d) {
	            a[g++] = c;h = g + e - 1;for (var k = a.length; g < k; g++, h++) {
	              h < k ? a[g] = a[h] : delete a[g];
	            }a.length -= e - 1;a.context === d && (a.context = c);break;
	          }
	        }f && f.replaceChild(c, d);a = C.document.createDocumentFragment();for (g = 0; g < e; g++) {
	          a.appendChild(b[g]);
	        }F.hasData(d) && (F.data(c, F.data(d)), F(d).off("$destroy"));F.cleanData(a.querySelectorAll("*"));for (g = 1; g < e; g++) {
	          delete b[g];
	        }b[0] = c;b.length = 1;
	      }function ja(a, b) {
	        return S(function () {
	          return a.apply(null, arguments);
	        }, a, b);
	      }function la(a, b, d, e, f, g) {
	        try {
	          a(b, d, e, f, g);
	        } catch (h) {
	          c(h, ya(d));
	        }
	      }function ka(a, c, d, e, f) {
	        function g(b, c, e) {
	          z(d.$onChanges) && c !== e && (Y || (a.$$postDigest(I), Y = []), m || (m = {}, Y.push(h)), m[b] && (e = m[b].previousValue), m[b] = new Fb(e, c));
	        }function h() {
	          d.$onChanges(m);m = void 0;
	        }var k = [],
	            l = {},
	            m;q(e, function (e, h) {
	          var m = e.attrName,
	              p = e.optional,
	              v,
	              u,
	              x,
	              H;switch (e.mode) {case "@":
	              p || ua.call(c, m) || (d[h] = c[m] = void 0);c.$observe(m, function (a) {
	                if (G(a) || Ga(a)) g(h, a, d[h]), d[h] = a;
	              });c.$$observers[m].$$scope = a;v = c[m];G(v) ? d[h] = b(v)(a) : Ga(v) && (d[h] = v);l[h] = new Fb(bc, d[h]);break;case "=":
	              if (!ua.call(c, m)) {
	                if (p) break;c[m] = void 0;
	              }if (p && !c[m]) break;u = n(c[m]);H = u.literal ? na : function (a, b) {
	                return a === b || a !== a && b !== b;
	              };x = u.assign || function () {
	                v = d[h] = u(a);throw ga("nonassign", c[m], m, f.name);
	              };v = d[h] = u(a);p = function p(b) {
	                H(b, d[h]) || (H(b, v) ? x(a, b = d[h]) : d[h] = b);return v = b;
	              };p.$stateful = !0;p = e.collection ? a.$watchCollection(c[m], p) : a.$watch(n(c[m], p), null, u.literal);k.push(p);break;case "<":
	              if (!ua.call(c, m)) {
	                if (p) break;c[m] = void 0;
	              }if (p && !c[m]) break;u = n(c[m]);var E = d[h] = u(a);l[h] = new Fb(bc, d[h]);p = a.$watch(u, function (a, b) {
	                if (b === a) {
	                  if (b === E) return;b = E;
	                }g(h, a, b);d[h] = a;
	              }, u.literal);k.push(p);break;case "&":
	              u = c.hasOwnProperty(m) ? n(c[m]) : A;if (u === A && p) break;d[h] = function (b) {
	                return u(a, b);
	              };}
	        });return { initialChanges: l, removeWatches: k.length && function () {
	            for (var a = 0, b = k.length; a < b; ++a) {
	              k[a]();
	            }
	          } };
	      }var ta = /^\w/,
	          pa = C.document.createElement("div"),
	          qa = u,
	          Y;Da.prototype = { $normalize: Aa, $addClass: function $addClass(a) {
	          a && 0 < a.length && H.addClass(this.$$element, a);
	        }, $removeClass: function $removeClass(a) {
	          a && 0 < a.length && H.removeClass(this.$$element, a);
	        }, $updateClass: function $updateClass(a, b) {
	          var c = ad(a, b);c && c.length && H.addClass(this.$$element, c);(c = ad(b, a)) && c.length && H.removeClass(this.$$element, c);
	        }, $set: function $set(a, b, d, e) {
	          var f = Uc(this.$$element[0], a),
	              g = bd[a],
	              h = a;f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);this[a] = b;e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Cc(a, "-"));f = wa(this.$$element);if ("a" === f && ("href" === a || "xlinkHref" === a) || "img" === f && "src" === a) this[a] = b = E(b, "src" === a);else if ("img" === f && "srcset" === a && w(b)) {
	            for (var f = "", g = W(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l < k; l++) {
	              var m = 2 * l,
	                  f = f + E(W(g[m]), !0),
	                  f = f + (" " + W(g[m + 1]));
	            }g = W(g[2 * l]).split(/\s/);f += E(W(g[0]), !0);2 === g.length && (f += " " + W(g[1]));this[a] = b = f;
	          }!1 !== d && (null === b || y(b) ? this.$$element.removeAttr(e) : ta.test(e) ? this.$$element.attr(e, b) : P(this.$$element[0], e, b));(a = this.$$observers) && q(a[h], function (a) {
	            try {
	              a(b);
	            } catch (d) {
	              c(d);
	            }
	          });
	        },
	        $observe: function $observe(a, b) {
	          var c = this,
	              d = c.$$observers || (c.$$observers = U()),
	              e = d[a] || (d[a] = []);e.push(b);K.$evalAsync(function () {
	            e.$$inter || !c.hasOwnProperty(a) || y(c[a]) || b(c[a]);
	          });return function () {
	            Za(e, b);
	          };
	        } };var ra = b.startSymbol(),
	          sa = b.endSymbol(),
	          xa = "{{" == ra && "}}" == sa ? Xa : function (a) {
	        return a.replace(/\{\{/g, ra).replace(/}}/g, sa);
	      },
	          Ba = /^ngAttr[A-Z]/,
	          Ca = /^(.+)Start$/;aa.$$addBindingInfo = p ? function (a, b) {
	        var c = a.data("$binding") || [];L(b) ? c = c.concat(b) : c.push(b);a.data("$binding", c);
	      } : A;aa.$$addBindingClass = p ? function (a) {
	        x(a, "ng-binding");
	      } : A;aa.$$addScopeInfo = p ? function (a, b, c, d) {
	        a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
	      } : A;aa.$$addScopeClass = p ? function (a, b) {
	        x(a, b ? "ng-isolate-scope" : "ng-scope");
	      } : A;aa.$$createComment = function (a, b) {
	        var c = "";p && (c = " " + (a || "") + ": ", b && (c += b + " "));return C.document.createComment(c);
	      };return aa;
	    }];
	  }function Fb(a, b) {
	    this.previousValue = a;this.currentValue = b;
	  }function Aa(a) {
	    return db(a.replace(Yc, ""));
	  }function ad(a, b) {
	    var d = "",
	        c = a.split(/\s+/),
	        e = b.split(/\s+/),
	        f = 0;a: for (; f < c.length; f++) {
	      for (var g = c[f], h = 0; h < e.length; h++) {
	        if (g == e[h]) continue a;
	      }d += (0 < d.length ? " " : "") + g;
	    }return d;
	  }function $c(a) {
	    a = F(a);var b = a.length;if (1 >= b) return a;for (; b--;) {
	      8 === a[b].nodeType && bg.call(a, b, 1);
	    }return a;
	  }function Xc(a, b) {
	    if (b && G(b)) return b;if (G(a)) {
	      var d = cd.exec(a);if (d) return d[3];
	    }
	  }function ff() {
	    var a = {},
	        b = !1;this.has = function (b) {
	      return a.hasOwnProperty(b);
	    };this.register = function (b, c) {
	      Qa(b, "controller");D(b) ? S(a, b) : a[b] = c;
	    };this.allowGlobals = function () {
	      b = !0;
	    };this.$get = ["$injector", "$window", function (d, c) {
	      function e(a, b, c, d) {
	        if (!a || !D(a.$scope)) throw N("$controller")("noscp", d, b);a.$scope[b] = c;
	      }return function (f, g, h, k) {
	        var l, m, n;h = !0 === h;k && G(k) && (n = k);if (G(f)) {
	          k = f.match(cd);if (!k) throw cg("ctrlfmt", f);m = k[1];n = n || k[3];f = a.hasOwnProperty(m) ? a[m] : Ec(g.$scope, m, !0) || (b ? Ec(c, m, !0) : void 0);Pa(f, m, !0);
	        }if (h) return h = (L(f) ? f[f.length - 1] : f).prototype, l = Object.create(h || null), n && e(g, n, l, m || f.name), S(function () {
	          var a = d.invoke(f, l, g, m);a !== l && (D(a) || z(a)) && (l = a, n && e(g, n, l, m || f.name));return l;
	        }, { instance: l, identifier: n });l = d.instantiate(f, g, m);n && e(g, n, l, m || f.name);return l;
	      };
	    }];
	  }function gf() {
	    this.$get = ["$window", function (a) {
	      return F(a.document);
	    }];
	  }function hf() {
	    this.$get = ["$log", function (a) {
	      return function (b, d) {
	        a.error.apply(a, arguments);
	      };
	    }];
	  }function cc(a) {
	    return D(a) ? da(a) ? a.toISOString() : bb(a) : a;
	  }function nf() {
	    this.$get = function () {
	      return function (a) {
	        if (!a) return "";var b = [];tc(a, function (a, c) {
	          null === a || y(a) || (L(a) ? q(a, function (a) {
	            b.push(ea(c) + "=" + ea(cc(a)));
	          }) : b.push(ea(c) + "=" + ea(cc(a))));
	        });
	        return b.join("&");
	      };
	    };
	  }function of() {
	    this.$get = function () {
	      return function (a) {
	        function b(a, e, f) {
	          null === a || y(a) || (L(a) ? q(a, function (a, c) {
	            b(a, e + "[" + (D(a) ? c : "") + "]");
	          }) : D(a) && !da(a) ? tc(a, function (a, c) {
	            b(a, e + (f ? "" : "[") + c + (f ? "" : "]"));
	          }) : d.push(ea(e) + "=" + ea(cc(a))));
	        }if (!a) return "";var d = [];b(a, "", !0);return d.join("&");
	      };
	    };
	  }function dc(a, b) {
	    if (G(a)) {
	      var d = a.replace(dg, "").trim();if (d) {
	        var c = b("Content-Type");(c = c && 0 === c.indexOf(dd)) || (c = (c = d.match(eg)) && fg[c[0]].test(d));c && (a = xc(d));
	      }
	    }return a;
	  }function ed(a) {
	    var b = U(),
	        d;G(a) ? q(a.split("\n"), function (a) {
	      d = a.indexOf(":");var e = Q(W(a.substr(0, d)));a = W(a.substr(d + 1));e && (b[e] = b[e] ? b[e] + ", " + a : a);
	    }) : D(a) && q(a, function (a, d) {
	      var f = Q(d),
	          g = W(a);f && (b[f] = b[f] ? b[f] + ", " + g : g);
	    });return b;
	  }function fd(a) {
	    var b;return function (d) {
	      b || (b = ed(a));return d ? (d = b[Q(d)], void 0 === d && (d = null), d) : b;
	    };
	  }function gd(a, b, d, c) {
	    if (z(c)) return c(a, b, d);q(c, function (c) {
	      a = c(a, b, d);
	    });return a;
	  }function mf() {
	    var a = this.defaults = { transformResponse: [dc], transformRequest: [function (a) {
	        return D(a) && "[object File]" !== ma.call(a) && "[object Blob]" !== ma.call(a) && "[object FormData]" !== ma.call(a) ? bb(a) : a;
	      }], headers: { common: { Accept: "application/json, text/plain, */*" }, post: ia(ec), put: ia(ec), patch: ia(ec) }, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", paramSerializer: "$httpParamSerializer" },
	        b = !1;this.useApplyAsync = function (a) {
	      return w(a) ? (b = !!a, this) : b;
	    };var d = !0;this.useLegacyPromiseExtensions = function (a) {
	      return w(a) ? (d = !!a, this) : d;
	    };var c = this.interceptors = [];this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (e, f, g, h, k, l) {
	      function m(b) {
	        function c(a, b) {
	          for (var d = 0, e = b.length; d < e;) {
	            var f = b[d++],
	                g = b[d++];a = a.then(f, g);
	          }b.length = 0;return a;
	        }function e(a, b) {
	          var c,
	              d = {};q(a, function (a, e) {
	            z(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a;
	          });return d;
	        }function f(a) {
	          var b = S({}, a);b.data = gd(a.data, a.headers, a.status, g.transformResponse);a = a.status;return 200 <= a && 300 > a ? b : k.reject(b);
	        }if (!D(b)) throw N("$http")("badreq", b);if (!G(b.url)) throw N("$http")("badreq", b.url);var g = S({ method: "get", transformRequest: a.transformRequest,
	          transformResponse: a.transformResponse, paramSerializer: a.paramSerializer }, b);g.headers = function (b) {
	          var c = a.headers,
	              d = S({}, b.headers),
	              f,
	              g,
	              h,
	              c = S({}, c.common, c[Q(b.method)]);a: for (f in c) {
	            g = Q(f);for (h in d) {
	              if (Q(h) === g) continue a;
	            }d[f] = c[f];
	          }return e(d, ia(b));
	        }(b);g.method = ub(g.method);g.paramSerializer = G(g.paramSerializer) ? l.get(g.paramSerializer) : g.paramSerializer;var h = [],
	            m = [],
	            p = k.when(g);q(R, function (a) {
	          (a.request || a.requestError) && h.unshift(a.request, a.requestError);(a.response || a.responseError) && m.push(a.response, a.responseError);
	        });p = c(p, h);p = p.then(function (b) {
	          var c = b.headers,
	              d = gd(b.data, fd(c), void 0, b.transformRequest);y(d) && q(c, function (a, b) {
	            "content-type" === Q(b) && delete c[b];
	          });y(b.withCredentials) && !y(a.withCredentials) && (b.withCredentials = a.withCredentials);return n(b, d).then(f, f);
	        });p = c(p, m);d ? (p.success = function (a) {
	          Pa(a, "fn");p.then(function (b) {
	            a(b.data, b.status, b.headers, g);
	          });return p;
	        }, p.error = function (a) {
	          Pa(a, "fn");p.then(null, function (b) {
	            a(b.data, b.status, b.headers, g);
	          });return p;
	        }) : (p.success = hd("success"), p.error = hd("error"));return p;
	      }function n(c, d) {
	        function g(a) {
	          if (a) {
	            var c = {};q(a, function (a, d) {
	              c[d] = function (c) {
	                function d() {
	                  a(c);
	                }b ? h.$applyAsync(d) : h.$$phase ? d() : h.$apply(d);
	              };
	            });return c;
	          }
	        }function l(a, c, d, e) {
	          function f() {
	            n(c, a, d, e);
	          }E && (200 <= a && 300 > a ? E.put(P, [a, c, ed(d), e]) : E.remove(P));b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply());
	        }function n(a, b, d, e) {
	          b = -1 <= b ? b : 0;(200 <= b && 300 > b ? M.resolve : M.reject)({ data: a, status: b, headers: fd(d), config: c, statusText: e });
	        }function t(a) {
	          n(a.data, a.status, ia(a.headers()), a.statusText);
	        }function R() {
	          var a = m.pendingRequests.indexOf(c);-1 !== a && m.pendingRequests.splice(a, 1);
	        }var M = k.defer(),
	            H = M.promise,
	            E,
	            I,
	            Da = c.headers,
	            P = p(c.url, c.paramSerializer(c.params));m.pendingRequests.push(c);H.then(R, R);!c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (E = D(c.cache) ? c.cache : D(a.cache) ? a.cache : u);E && (I = E.get(P), w(I) ? I && z(I.then) ? I.then(t, t) : L(I) ? n(I[1], I[0], ia(I[2]), I[3]) : n(I, 200, {}, "OK") : E.put(P, H));y(I) && ((I = id(c.url) ? f()[c.xsrfCookieName || a.xsrfCookieName] : void 0) && (Da[c.xsrfHeaderName || a.xsrfHeaderName] = I), e(c.method, P, d, l, Da, c.timeout, c.withCredentials, c.responseType, g(c.eventHandlers), g(c.uploadEventHandlers)));return H;
	      }function p(a, b) {
	        0 < b.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + b);return a;
	      }var u = g("$http");a.paramSerializer = G(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;var R = [];q(c, function (a) {
	        R.unshift(G(a) ? l.get(a) : l.invoke(a));
	      });m.pendingRequests = [];(function (a) {
	        q(arguments, function (a) {
	          m[a] = function (b, c) {
	            return m(S({}, c || {}, { method: a, url: b }));
	          };
	        });
	      })("get", "delete", "head", "jsonp");(function (a) {
	        q(arguments, function (a) {
	          m[a] = function (b, c, d) {
	            return m(S({}, d || {}, { method: a, url: b, data: c }));
	          };
	        });
	      })("post", "put", "patch");m.defaults = a;return m;
	    }];
	  }function qf() {
	    this.$get = function () {
	      return function () {
	        return new C.XMLHttpRequest();
	      };
	    };
	  }function pf() {
	    this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function (a, b, d, c) {
	      return gg(a, c, a.defer, b, d[0]);
	    }];
	  }function gg(a, b, d, c, e) {
	    function f(a, b, d) {
	      a = a.replace("JSON_CALLBACK", b);var f = e.createElement("script"),
	          _m = null;f.type = "text/javascript";f.src = a;f.async = !0;_m = function m(a) {
	        f.removeEventListener("load", _m, !1);f.removeEventListener("error", _m, !1);e.body.removeChild(f);f = null;var g = -1,
	            u = "unknown";a && ("load" !== a.type || c.wasCalled(b) || (a = { type: "error" }), u = a.type, g = "error" === a.type ? 404 : 200);d && d(g, u);
	      };f.addEventListener("load", _m, !1);f.addEventListener("error", _m, !1);e.body.appendChild(f);return _m;
	    }return function (e, h, k, l, m, n, p, u, R, B) {
	      function r() {
	        fa && fa();t && t.abort();
	      }function J(b, c, e, f, g) {
	        w(M) && d.cancel(M);fa = t = null;b(c, e, f, g);a.$$completeOutstandingRequest(A);
	      }a.$$incOutstandingRequestCount();h = h || a.url();if ("jsonp" === Q(e)) var v = c.createCallback(h),
	          fa = f(h, v, function (a, b) {
	        var d = 200 === a && c.getResponse(v);J(l, a, d, "", b);c.removeCallback(v);
	      });else {
	        var t = b(e, h);t.open(e, h, !0);q(m, function (a, b) {
	          w(a) && t.setRequestHeader(b, a);
	        });t.onload = function () {
	          var a = t.statusText || "",
	              b = "response" in t ? t.response : t.responseText,
	              c = 1223 === t.status ? 204 : t.status;0 === c && (c = b ? 200 : "file" == Y(h).protocol ? 404 : 0);J(l, c, b, t.getAllResponseHeaders(), a);
	        };e = function e() {
	          J(l, -1, null, null, "");
	        };t.onerror = e;t.onabort = e;q(R, function (a, b) {
	          t.addEventListener(b, a);
	        });q(B, function (a, b) {
	          t.upload.addEventListener(b, a);
	        });p && (t.withCredentials = !0);if (u) try {
	          t.responseType = u;
	        } catch (K) {
	          if ("json" !== u) throw K;
	        }t.send(y(k) ? null : k);
	      }if (0 < n) var M = d(r, n);else n && z(n.then) && n.then(r);
	    };
	  }function kf() {
	    var a = "{{",
	        b = "}}";this.startSymbol = function (b) {
	      return b ? (a = b, this) : a;
	    };this.endSymbol = function (a) {
	      return a ? (b = a, this) : b;
	    };this.$get = ["$parse", "$exceptionHandler", "$sce", function (d, c, e) {
	      function f(a) {
	        return "\\\\\\" + a;
	      }function g(c) {
	        return c.replace(n, a).replace(p, b);
	      }function h(a, b, c, d) {
	        var e;return e = a.$watch(function (a) {
	          e();return d(a);
	        }, b, c);
	      }function k(f, k, p, n) {
	        function J(a) {
	          try {
	            var b = a;a = p ? e.getTrusted(p, b) : e.valueOf(b);var d;if (n && !w(a)) d = a;else if (null == a) d = "";else {
	              switch (typeof a === "undefined" ? "undefined" : _typeof(a)) {case "string":
	                  break;case "number":
	                  a = "" + a;break;default:
	                  a = bb(a);}d = a;
	            }return d;
	          } catch (g) {
	            c(Ka.interr(f, g));
	          }
	        }if (!f.length || -1 === f.indexOf(a)) {
	          var v;k || (k = g(f), v = ha(k), v.exp = f, v.expressions = [], v.$$watchDelegate = h);return v;
	        }n = !!n;var q,
	            t,
	            K = 0,
	            M = [],
	            H = [];v = f.length;for (var E = [], I = []; K < v;) {
	          if (-1 != (q = f.indexOf(a, K)) && -1 != (t = f.indexOf(b, q + l))) K !== q && E.push(g(f.substring(K, q))), K = f.substring(q + l, t), M.push(K), H.push(d(K, J)), K = t + m, I.push(E.length), E.push("");else {
	            K !== v && E.push(g(f.substring(K)));break;
	          }
	        }p && 1 < E.length && Ka.throwNoconcat(f);if (!k || M.length) {
	          var Da = function Da(a) {
	            for (var b = 0, c = M.length; b < c; b++) {
	              if (n && y(a[b])) return;E[I[b]] = a[b];
	            }return E.join("");
	          };return S(function (a) {
	            var b = 0,
	                d = M.length,
	                e = Array(d);try {
	              for (; b < d; b++) {
	                e[b] = H[b](a);
	              }return Da(e);
	            } catch (g) {
	              c(Ka.interr(f, g));
	            }
	          }, { exp: f, expressions: M, $$watchDelegate: function $$watchDelegate(a, b) {
	              var c;return a.$watchGroup(H, function (d, e) {
	                var f = Da(d);z(b) && b.call(this, f, d !== e ? c : f, a);c = f;
	              });
	            } });
	        }
	      }var l = a.length,
	          m = b.length,
	          n = new RegExp(a.replace(/./g, f), "g"),
	          p = new RegExp(b.replace(/./g, f), "g");k.startSymbol = function () {
	        return a;
	      };k.endSymbol = function () {
	        return b;
	      };return k;
	    }];
	  }function lf() {
	    this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (a, b, d, c, e) {
	      function f(f, k, l, m) {
	        function n() {
	          p ? f.apply(null, u) : f(r);
	        }var p = 4 < arguments.length,
	            u = p ? va.call(arguments, 4) : [],
	            R = b.setInterval,
	            q = b.clearInterval,
	            r = 0,
	            J = w(m) && !m,
	            v = (J ? c : d).defer(),
	            fa = v.promise;l = w(l) ? l : 0;fa.$$intervalId = R(function () {
	          J ? e.defer(n) : a.$evalAsync(n);v.notify(r++);0 < l && r >= l && (v.resolve(r), q(fa.$$intervalId), delete g[fa.$$intervalId]);J || a.$apply();
	        }, k);g[fa.$$intervalId] = v;return fa;
	      }var g = {};f.cancel = function (a) {
	        return a && a.$$intervalId in g ? (g[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], !0) : !1;
	      };return f;
	    }];
	  }function fc(a) {
	    a = a.split("/");for (var b = a.length; b--;) {
	      a[b] = qb(a[b]);
	    }return a.join("/");
	  }function jd(a, b) {
	    var d = Y(a);b.$$protocol = d.protocol;b.$$host = d.hostname;b.$$port = Z(d.port) || hg[d.protocol] || null;
	  }function kd(a, b) {
	    var d = "/" !== a.charAt(0);d && (a = "/" + a);var c = Y(a);b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);b.$$search = Ac(c.search);b.$$hash = decodeURIComponent(c.hash);b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
	  }function ka(a, b) {
	    if (0 === b.lastIndexOf(a, 0)) return b.substr(a.length);
	  }function Ja(a) {
	    var b = a.indexOf("#");return -1 == b ? a : a.substr(0, b);
	  }function jb(a) {
	    return a.replace(/(#.+)|#$/, "$1");
	  }function gc(a, b, d) {
	    this.$$html5 = !0;d = d || "";jd(a, this);this.$$parse = function (a) {
	      var d = ka(b, a);if (!G(d)) throw Gb("ipthprfx", a, b);kd(d, this);this.$$path || (this.$$path = "/");this.$$compose();
	    };this.$$compose = function () {
	      var a = Tb(this.$$search),
	          d = this.$$hash ? "#" + qb(this.$$hash) : "";this.$$url = fc(this.$$path) + (a ? "?" + a : "") + d;this.$$absUrl = b + this.$$url.substr(1);
	    };this.$$parseLinkUrl = function (c, e) {
	      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;var f, g;w(f = ka(a, c)) ? (g = f, g = w(f = ka(d, f)) ? b + (ka("/", f) || f) : a + g) : w(f = ka(b, c)) ? g = b + f : b == c + "/" && (g = b);g && this.$$parse(g);return !!g;
	    };
	  }function hc(a, b, d) {
	    jd(a, this);this.$$parse = function (c) {
	      var e = ka(a, c) || ka(b, c),
	          f;y(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", y(e) && (a = c, this.replace())) : (f = ka(d, e), y(f) && (f = e));kd(f, this);c = this.$$path;var e = a,
	          g = /^\/[A-Z]:(\/.*)/;0 === f.lastIndexOf(e, 0) && (f = f.replace(e, ""));g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);this.$$path = c;this.$$compose();
	    };this.$$compose = function () {
	      var b = Tb(this.$$search),
	          e = this.$$hash ? "#" + qb(this.$$hash) : "";this.$$url = fc(this.$$path) + (b ? "?" + b : "") + e;this.$$absUrl = a + (this.$$url ? d + this.$$url : "");
	    };this.$$parseLinkUrl = function (b, d) {
	      return Ja(a) == Ja(b) ? (this.$$parse(b), !0) : !1;
	    };
	  }function ld(a, b, d) {
	    this.$$html5 = !0;hc.apply(this, arguments);this.$$parseLinkUrl = function (c, e) {
	      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;var f, g;a == Ja(c) ? f = c : (g = ka(b, c)) ? f = a + d + g : b === c + "/" && (f = b);f && this.$$parse(f);return !!f;
	    };this.$$compose = function () {
	      var b = Tb(this.$$search),
	          e = this.$$hash ? "#" + qb(this.$$hash) : "";this.$$url = fc(this.$$path) + (b ? "?" + b : "") + e;this.$$absUrl = a + d + this.$$url;
	    };
	  }function Hb(a) {
	    return function () {
	      return this[a];
	    };
	  }function md(a, b) {
	    return function (d) {
	      if (y(d)) return this[a];this[a] = b(d);this.$$compose();return this;
	    };
	  }function sf() {
	    var a = "",
	        b = { enabled: !1, requireBase: !0, rewriteLinks: !0 };this.hashPrefix = function (b) {
	      return w(b) ? (a = b, this) : a;
	    };this.html5Mode = function (a) {
	      return Ga(a) ? (b.enabled = a, this) : D(a) ? (Ga(a.enabled) && (b.enabled = a.enabled), Ga(a.requireBase) && (b.requireBase = a.requireBase), Ga(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b;
	    };this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (d, c, e, f, g) {
	      function h(a, b, d) {
	        var e = l.url(),
	            f = l.$$state;try {
	          c.url(a, b, d), l.$$state = c.state();
	        } catch (g) {
	          throw l.url(e), l.$$state = f, g;
	        }
	      }function k(a, b) {
	        d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b);
	      }var l, m;m = c.baseHref();var n = c.url(),
	          p;if (b.enabled) {
	        if (!m && b.requireBase) throw Gb("nobase");p = n.substring(0, n.indexOf("/", n.indexOf("//") + 2)) + (m || "/");m = e.history ? gc : ld;
	      } else p = Ja(n), m = hc;var u = p.substr(0, Ja(p).lastIndexOf("/") + 1);l = new m(p, u, "#" + a);l.$$parseLinkUrl(n, n);l.$$state = c.state();var R = /^\s*(javascript|mailto):/i;f.on("click", function (a) {
	        if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
	          for (var e = F(a.target); "a" !== wa(e[0]);) {
	            if (e[0] === f[0] || !(e = e.parent())[0]) return;
	          }var h = e.prop("href"),
	              k = e.attr("href") || e.attr("xlink:href");D(h) && "[object SVGAnimatedString]" === h.toString() && (h = Y(h.animVal).href);R.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(h, k) || (a.preventDefault(), l.absUrl() != c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0));
	        }
	      });jb(l.absUrl()) != jb(n) && c.url(l.absUrl(), !0);var q = !0;c.onUrlChange(function (a, b) {
	        y(ka(u, a)) ? g.location.href = a : (d.$evalAsync(function () {
	          var c = l.absUrl(),
	              e = l.$$state,
	              f;a = jb(a);l.$$parse(a);l.$$state = b;f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;l.absUrl() === a && (f ? (l.$$parse(c), l.$$state = e, h(c, !1, e)) : (q = !1, k(c, e)));
	        }), d.$$phase || d.$digest());
	      });d.$watch(function () {
	        var a = jb(c.url()),
	            b = jb(l.absUrl()),
	            f = c.state(),
	            g = l.$$replace,
	            m = a !== b || l.$$html5 && e.history && f !== l.$$state;if (q || m) q = !1, d.$evalAsync(function () {
	          var b = l.absUrl(),
	              c = d.$broadcast("$locationChangeStart", b, a, l.$$state, f).defaultPrevented;l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = f) : (m && h(b, g, f === l.$$state ? null : l.$$state), k(a, f)));
	        });l.$$replace = !1;
	      });return l;
	    }];
	  }function tf() {
	    var a = !0,
	        b = this;this.debugEnabled = function (b) {
	      return w(b) ? (a = b, this) : a;
	    };this.$get = ["$window", function (d) {
	      function c(a) {
	        a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));return a;
	      }function e(a) {
	        var b = d.console || {},
	            e = b[a] || b.log || A;a = !1;try {
	          a = !!e.apply;
	        } catch (k) {}return a ? function () {
	          var a = [];q(arguments, function (b) {
	            a.push(c(b));
	          });
	          return e.apply(b, a);
	        } : function (a, b) {
	          e(a, null == b ? "" : b);
	        };
	      }return { log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
	          var c = e("debug");return function () {
	            a && c.apply(b, arguments);
	          };
	        }() };
	    }];
	  }function Sa(a, b) {
	    if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw X("isecfld", b);return a;
	  }function ig(a) {
	    return a + "";
	  }function ra(a, b) {
	    if (a) {
	      if (a.constructor === a) throw X("isecfn", b);if (a.window === a) throw X("isecwindow", b);if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw X("isecdom", b);if (a === Object) throw X("isecobj", b);
	    }return a;
	  }function nd(a, b) {
	    if (a) {
	      if (a.constructor === a) throw X("isecfn", b);if (a === jg || a === kg || a === lg) throw X("isecff", b);
	    }
	  }function Ib(a, b) {
	    if (a && (a === 0 .constructor || a === (!1).constructor || a === "".constructor || a === {}.constructor || a === [].constructor || a === Function.constructor)) throw X("isecaf", b);
	  }function mg(a, b) {
	    return "undefined" !== typeof a ? a : b;
	  }function od(a, b) {
	    return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b;
	  }function V(a, b) {
	    var d, c;switch (a.type) {case s.Program:
	        d = !0;q(a.body, function (a) {
	          V(a.expression, b);d = d && a.expression.constant;
	        });a.constant = d;break;case s.Literal:
	        a.constant = !0;a.toWatch = [];break;case s.UnaryExpression:
	        V(a.argument, b);a.constant = a.argument.constant;a.toWatch = a.argument.toWatch;break;case s.BinaryExpression:
	        V(a.left, b);V(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:
	        V(a.left, b);V(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = a.constant ? [] : [a];break;case s.ConditionalExpression:
	        V(a.test, b);V(a.alternate, b);V(a.consequent, b);a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;a.toWatch = a.constant ? [] : [a];break;case s.Identifier:
	        a.constant = !1;a.toWatch = [a];break;case s.MemberExpression:
	        V(a.object, b);a.computed && V(a.property, b);a.constant = a.object.constant && (!a.computed || a.property.constant);a.toWatch = [a];break;case s.CallExpression:
	        d = a.filter ? !b(a.callee.name).$stateful : !1;c = [];q(a.arguments, function (a) {
	          V(a, b);d = d && a.constant;a.constant || c.push.apply(c, a.toWatch);
	        });a.constant = d;a.toWatch = a.filter && !b(a.callee.name).$stateful ? c : [a];break;case s.AssignmentExpression:
	        V(a.left, b);V(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = [a];break;case s.ArrayExpression:
	        d = !0;c = [];q(a.elements, function (a) {
	          V(a, b);d = d && a.constant;a.constant || c.push.apply(c, a.toWatch);
	        });a.constant = d;a.toWatch = c;break;case s.ObjectExpression:
	        d = !0;c = [];q(a.properties, function (a) {
	          V(a.value, b);d = d && a.value.constant && !a.computed;a.value.constant || c.push.apply(c, a.value.toWatch);
	        });a.constant = d;a.toWatch = c;break;case s.ThisExpression:
	        a.constant = !1;a.toWatch = [];break;case s.LocalsExpression:
	        a.constant = !1, a.toWatch = [];}
	  }function pd(a) {
	    if (1 == a.length) {
	      a = a[0].expression;var b = a.toWatch;return 1 !== b.length ? b : b[0] !== a ? b : void 0;
	    }
	  }function qd(a) {
	    return a.type === s.Identifier || a.type === s.MemberExpression;
	  }function rd(a) {
	    if (1 === a.body.length && qd(a.body[0].expression)) return { type: s.AssignmentExpression,
	      left: a.body[0].expression, right: { type: s.NGValueParameter }, operator: "=" };
	  }function sd(a) {
	    return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === s.Literal || a.body[0].expression.type === s.ArrayExpression || a.body[0].expression.type === s.ObjectExpression);
	  }function td(a, b) {
	    this.astBuilder = a;this.$filter = b;
	  }function ud(a, b) {
	    this.astBuilder = a;this.$filter = b;
	  }function Jb(a) {
	    return "constructor" == a;
	  }function ic(a) {
	    return z(a.valueOf) ? a.valueOf() : ng.call(a);
	  }function uf() {
	    var a = U(),
	        b = U(),
	        d = { "true": !0,
	      "false": !1, "null": null, undefined: void 0 },
	        c,
	        e;this.addLiteral = function (a, b) {
	      d[a] = b;
	    };this.setIdentifierFns = function (a, b) {
	      c = a;e = b;return this;
	    };this.$get = ["$filter", function (f) {
	      function g(c, d, e) {
	        var g, k, H;e = e || J;switch (typeof c === "undefined" ? "undefined" : _typeof(c)) {case "string":
	            H = c = c.trim();var E = e ? b : a;g = E[H];if (!g) {
	              ":" === c.charAt(0) && ":" === c.charAt(1) && (k = !0, c = c.substring(2));g = e ? r : B;var q = new jc(g);g = new kc(q, f, g).parse(c);g.constant ? g.$$watchDelegate = p : k ? g.$$watchDelegate = g.literal ? n : m : g.inputs && (g.$$watchDelegate = l);e && (g = h(g));E[H] = g;
	            }return u(g, d);case "function":
	            return u(c, d);default:
	            return u(A, d);}
	      }function h(a) {
	        function b(c, d, e, f) {
	          var g = J;J = !0;try {
	            return a(c, d, e, f);
	          } finally {
	            J = g;
	          }
	        }if (!a) return a;b.$$watchDelegate = a.$$watchDelegate;b.assign = h(a.assign);b.constant = a.constant;b.literal = a.literal;for (var c = 0; a.inputs && c < a.inputs.length; ++c) {
	          a.inputs[c] = h(a.inputs[c]);
	        }b.inputs = a.inputs;return b;
	      }function k(a, b) {
	        return null == a || null == b ? a === b : "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && (a = ic(a), "object" === (typeof a === "undefined" ? "undefined" : _typeof(a))) ? !1 : a === b || a !== a && b !== b;
	      }function l(a, b, c, d, e) {
	        var f = d.inputs,
	            g;if (1 === f.length) {
	          var h = k,
	              f = f[0];return a.$watch(function (a) {
	            var b = f(a);k(b, h) || (g = d(a, void 0, void 0, [b]), h = b && ic(b));return g;
	          }, b, c, e);
	        }for (var l = [], m = [], p = 0, n = f.length; p < n; p++) {
	          l[p] = k, m[p] = null;
	        }return a.$watch(function (a) {
	          for (var b = !1, c = 0, e = f.length; c < e; c++) {
	            var h = f[c](a);if (b || (b = !k(h, l[c]))) m[c] = h, l[c] = h && ic(h);
	          }b && (g = d(a, void 0, void 0, m));return g;
	        }, b, c, e);
	      }function m(a, b, c, d) {
	        var e, f;return e = a.$watch(function (a) {
	          return d(a);
	        }, function (a, c, d) {
	          f = a;z(b) && b.apply(this, arguments);w(a) && d.$$postDigest(function () {
	            w(f) && e();
	          });
	        }, c);
	      }function n(a, b, c, d) {
	        function e(a) {
	          var b = !0;q(a, function (a) {
	            w(a) || (b = !1);
	          });return b;
	        }var f, g;return f = a.$watch(function (a) {
	          return d(a);
	        }, function (a, c, d) {
	          g = a;z(b) && b.call(this, a, c, d);e(a) && d.$$postDigest(function () {
	            e(g) && f();
	          });
	        }, c);
	      }function p(a, b, c, d) {
	        var e;return e = a.$watch(function (a) {
	          e();return d(a);
	        }, b, c);
	      }function u(a, b) {
	        if (!b) return a;var c = a.$$watchDelegate,
	            d = !1,
	            c = c !== n && c !== m ? function (c, e, f, g) {
	          f = d && g ? g[0] : a(c, e, f, g);return b(f, c, e);
	        } : function (c, d, e, f) {
	          e = a(c, d, e, f);c = b(e, c, d);return w(e) ? c : e;
	        };a.$$watchDelegate && a.$$watchDelegate !== l ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = l, d = !a.inputs, c.inputs = a.inputs ? a.inputs : [a]);return c;
	      }var R = Ba().noUnsafeEval,
	          B = { csp: R, expensiveChecks: !1, literals: pa(d), isIdentifierStart: z(c) && c, isIdentifierContinue: z(e) && e },
	          r = { csp: R, expensiveChecks: !0, literals: pa(d), isIdentifierStart: z(c) && c, isIdentifierContinue: z(e) && e },
	          J = !1;g.$$runningExpensiveChecks = function () {
	        return J;
	      };return g;
	    }];
	  }function wf() {
	    this.$get = ["$rootScope", "$exceptionHandler", function (a, b) {
	      return vd(function (b) {
	        a.$evalAsync(b);
	      }, b);
	    }];
	  }function xf() {
	    this.$get = ["$browser", "$exceptionHandler", function (a, b) {
	      return vd(function (b) {
	        a.defer(b);
	      }, b);
	    }];
	  }function vd(a, b) {
	    function d() {
	      this.$$state = { status: 0 };
	    }function c(a, b) {
	      return function (c) {
	        b.call(a, c);
	      };
	    }function e(c) {
	      !c.processScheduled && c.pending && (c.processScheduled = !0, a(function () {
	        var a, d, e;e = c.pending;c.processScheduled = !1;c.pending = void 0;for (var f = 0, g = e.length; f < g; ++f) {
	          d = e[f][0];a = e[f][c.status];
	          try {
	            z(a) ? d.resolve(a(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value);
	          } catch (h) {
	            d.reject(h), b(h);
	          }
	        }
	      }));
	    }function f() {
	      this.promise = new d();
	    }var g = N("$q", TypeError),
	        h = function h() {
	      var a = new f();a.resolve = c(a, a.resolve);a.reject = c(a, a.reject);a.notify = c(a, a.notify);return a;
	    };S(d.prototype, { then: function then(a, b, c) {
	        if (y(a) && y(b) && y(c)) return this;var d = new f();this.$$state.pending = this.$$state.pending || [];this.$$state.pending.push([d, a, b, c]);0 < this.$$state.status && e(this.$$state);return d.promise;
	      }, "catch": function _catch(a) {
	        return this.then(null, a);
	      }, "finally": function _finally(a, b) {
	        return this.then(function (b) {
	          return l(b, !0, a);
	        }, function (b) {
	          return l(b, !1, a);
	        }, b);
	      } });S(f.prototype, { resolve: function resolve(a) {
	        this.promise.$$state.status || (a === this.promise ? this.$$reject(g("qcycle", a)) : this.$$resolve(a));
	      }, $$resolve: function $$resolve(a) {
	        function d(a) {
	          k || (k = !0, h.$$resolve(a));
	        }function f(a) {
	          k || (k = !0, h.$$reject(a));
	        }var g,
	            h = this,
	            k = !1;try {
	          if (D(a) || z(a)) g = a && a.then;z(g) ? (this.promise.$$state.status = -1, g.call(a, d, f, c(this, this.notify))) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, e(this.promise.$$state));
	        } catch (l) {
	          f(l), b(l);
	        }
	      }, reject: function reject(a) {
	        this.promise.$$state.status || this.$$reject(a);
	      }, $$reject: function $$reject(a) {
	        this.promise.$$state.value = a;this.promise.$$state.status = 2;e(this.promise.$$state);
	      }, notify: function notify(c) {
	        var d = this.promise.$$state.pending;0 >= this.promise.$$state.status && d && d.length && a(function () {
	          for (var a, e, f = 0, g = d.length; f < g; f++) {
	            e = d[f][0];a = d[f][3];try {
	              e.notify(z(a) ? a(c) : c);
	            } catch (h) {
	              b(h);
	            }
	          }
	        });
	      } });var k = function k(a, b) {
	      var c = new f();b ? c.resolve(a) : c.reject(a);return c.promise;
	    },
	        l = function l(a, b, c) {
	      var d = null;try {
	        z(c) && (d = c());
	      } catch (e) {
	        return k(e, !1);
	      }return d && z(d.then) ? d.then(function () {
	        return k(a, b);
	      }, function (a) {
	        return k(a, !1);
	      }) : k(a, b);
	    },
	        m = function m(a, b, c, d) {
	      var e = new f();e.resolve(a);return e.promise.then(b, c, d);
	    },
	        n = function n(a) {
	      if (!z(a)) throw g("norslvr", a);var b = new f();a(function (a) {
	        b.resolve(a);
	      }, function (a) {
	        b.reject(a);
	      });return b.promise;
	    };n.prototype = d.prototype;n.defer = h;n.reject = function (a) {
	      var b = new f();b.reject(a);return b.promise;
	    };n.when = m;n.resolve = m;n.all = function (a) {
	      var b = new f(),
	          c = 0,
	          d = L(a) ? [] : {};q(a, function (a, e) {
	        c++;m(a).then(function (a) {
	          d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
	        }, function (a) {
	          d.hasOwnProperty(e) || b.reject(a);
	        });
	      });0 === c && b.resolve(d);return b.promise;
	    };n.race = function (a) {
	      var b = h();q(a, function (a) {
	        m(a).then(b.resolve, b.reject);
	      });return b.promise;
	    };return n;
	  }function Gf() {
	    this.$get = ["$window", "$timeout", function (a, b) {
	      var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
	          c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
	          e = !!d,
	          f = e ? function (a) {
	        var b = d(a);return function () {
	          c(b);
	        };
	      } : function (a) {
	        var c = b(a, 16.66, !1);return function () {
	          b.cancel(c);
	        };
	      };f.supported = e;return f;
	    }];
	  }function vf() {
	    function a(a) {
	      function b() {
	        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$id = ++pb;this.$$ChildScope = null;
	      }b.prototype = a;return b;
	    }var b = 10,
	        d = N("$rootScope"),
	        c = null,
	        e = null;this.digestTtl = function (a) {
	      arguments.length && (b = a);return b;
	    };this.$get = ["$exceptionHandler", "$parse", "$browser", function (f, g, h) {
	      function k(a) {
	        a.currentScope.$$destroyed = !0;
	      }function l(a) {
	        9 === Ea && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling));a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null;
	      }function m() {
	        this.$id = ++pb;this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;this.$root = this;this.$$destroyed = !1;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$$isolateBindings = null;
	      }function n(a) {
	        if (J.$$phase) throw d("inprog", J.$$phase);J.$$phase = a;
	      }function p(a, b) {
	        do {
	          a.$$watchersCount += b;
	        } while (a = a.$parent);
	      }function u(a, b, c) {
	        do {
	          a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
	        } while (a = a.$parent);
	      }function s() {}function B() {
	        for (; t.length;) {
	          try {
	            t.shift()();
	          } catch (a) {
	            f(a);
	          }
	        }e = null;
	      }function r() {
	        null === e && (e = h.defer(function () {
	          J.$apply(B);
	        }));
	      }m.prototype = { constructor: m, $new: function $new(b, c) {
	          var d;c = c || this;b ? (d = new m(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope());d.$parent = c;d.$$prevSibling = c.$$childTail;c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;(b || c != this) && d.$on("$destroy", k);return d;
	        }, $watch: function $watch(a, b, d, e) {
	          var f = g(a);if (f.$$watchDelegate) return f.$$watchDelegate(this, b, d, f, a);var h = this,
	              k = h.$$watchers,
	              l = { fn: b, last: s, get: f, exp: e || a, eq: !!d };c = null;z(b) || (l.fn = A);k || (k = h.$$watchers = []);k.unshift(l);p(this, 1);return function () {
	            0 <= Za(k, l) && p(h, -1);c = null;
	          };
	        }, $watchGroup: function $watchGroup(a, b) {
	          function c() {
	            h = !1;k ? (k = !1, b(e, e, g)) : b(e, d, g);
	          }var d = Array(a.length),
	              e = Array(a.length),
	              f = [],
	              g = this,
	              h = !1,
	              k = !0;if (!a.length) {
	            var l = !0;g.$evalAsync(function () {
	              l && b(e, e, g);
	            });return function () {
	              l = !1;
	            };
	          }if (1 === a.length) return this.$watch(a[0], function (a, c, f) {
	            e[0] = a;d[0] = c;b(e, a === c ? e : d, f);
	          });q(a, function (a, b) {
	            var k = g.$watch(a, function (a, f) {
	              e[b] = a;d[b] = f;h || (h = !0, g.$evalAsync(c));
	            });f.push(k);
	          });return function () {
	            for (; f.length;) {
	              f.shift()();
	            }
	          };
	        },
	        $watchCollection: function $watchCollection(a, b) {
	          function c(a) {
	            e = a;var b, d, g, h;if (!y(e)) {
	              if (D(e)) {
	                if (ta(e)) for (f !== n && (f = n, u = f.length = 0, l++), a = e.length, u !== a && (l++, f.length = u = a), b = 0; b < a; b++) {
	                  h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g);
	                } else {
	                  f !== p && (f = p = {}, u = 0, l++);a = 0;for (b in e) {
	                    ua.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (u++, f[b] = g, l++));
	                  }if (u > a) for (b in l++, f) {
	                    ua.call(e, b) || (u--, delete f[b]);
	                  }
	                }
	              } else f !== e && (f = e, l++);return l;
	            }
	          }c.$stateful = !0;var d = this,
	              e,
	              f,
	              h,
	              k = 1 < b.length,
	              l = 0,
	              m = g(a, c),
	              n = [],
	              p = {},
	              r = !0,
	              u = 0;return this.$watch(m, function () {
	            r ? (r = !1, b(e, e, d)) : b(e, h, d);if (k) if (D(e)) {
	              if (ta(e)) {
	                h = Array(e.length);for (var a = 0; a < e.length; a++) {
	                  h[a] = e[a];
	                }
	              } else for (a in h = {}, e) {
	                ua.call(e, a) && (h[a] = e[a]);
	              }
	            } else h = e;
	          });
	        }, $digest: function $digest() {
	          var a,
	              g,
	              k,
	              l,
	              m,
	              p,
	              u,
	              r,
	              q = b,
	              t,
	              y = [],
	              A,
	              C;n("$digest");h.$$checkUrlChange();this === J && null !== e && (h.defer.cancel(e), B());c = null;do {
	            r = !1;t = this;for (p = 0; p < v.length; p++) {
	              try {
	                C = v[p], C.scope.$eval(C.expression, C.locals);
	              } catch (F) {
	                f(F);
	              }c = null;
	            }v.length = 0;a: do {
	              if (p = t.$$watchers) for (u = p.length; u--;) {
	                try {
	                  if (a = p[u]) if (m = a.get, (g = m(t)) !== (k = a.last) && !(a.eq ? na(g, k) : "number" === typeof g && "number" === typeof k && isNaN(g) && isNaN(k))) r = !0, c = a, a.last = a.eq ? pa(g, null) : g, l = a.fn, l(g, k === s ? g : k, t), 5 > q && (A = 4 - q, y[A] || (y[A] = []), y[A].push({ msg: z(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp, newVal: g, oldVal: k }));else if (a === c) {
	                    r = !1;break a;
	                  }
	                } catch (G) {
	                  f(G);
	                }
	              }if (!(p = t.$$watchersCount && t.$$childHead || t !== this && t.$$nextSibling)) for (; t !== this && !(p = t.$$nextSibling);) {
	                t = t.$parent;
	              }
	            } while (t = p);if ((r || v.length) && !q--) throw J.$$phase = null, d("infdig", b, y);
	          } while (r || v.length);for (J.$$phase = null; K < w.length;) {
	            try {
	              w[K++]();
	            } catch (D) {
	              f(D);
	            }
	          }w.length = K = 0;
	        }, $destroy: function $destroy() {
	          if (!this.$$destroyed) {
	            var a = this.$parent;this.$broadcast("$destroy");this.$$destroyed = !0;this === J && h.$$applicationDestroyed();p(this, -this.$$watchersCount);for (var b in this.$$listenerCount) {
	              u(this, this.$$listenerCount[b], b);
	            }a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling);a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling);this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = A;this.$on = this.$watch = this.$watchGroup = function () {
	              return A;
	            };this.$$listeners = {};this.$$nextSibling = null;l(this);
	          }
	        }, $eval: function $eval(a, b) {
	          return g(a)(this, b);
	        }, $evalAsync: function $evalAsync(a, b) {
	          J.$$phase || v.length || h.defer(function () {
	            v.length && J.$digest();
	          });v.push({ scope: this, expression: g(a), locals: b });
	        }, $$postDigest: function $$postDigest(a) {
	          w.push(a);
	        },
	        $apply: function $apply(a) {
	          try {
	            n("$apply");try {
	              return this.$eval(a);
	            } finally {
	              J.$$phase = null;
	            }
	          } catch (b) {
	            f(b);
	          } finally {
	            try {
	              J.$digest();
	            } catch (c) {
	              throw f(c), c;
	            }
	          }
	        }, $applyAsync: function $applyAsync(a) {
	          function b() {
	            c.$eval(a);
	          }var c = this;a && t.push(b);a = g(a);r();
	        }, $on: function $on(a, b) {
	          var c = this.$$listeners[a];c || (this.$$listeners[a] = c = []);c.push(b);var d = this;do {
	            d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
	          } while (d = d.$parent);var e = this;return function () {
	            var d = c.indexOf(b);-1 !== d && (c[d] = null, u(e, 1, a));
	          };
	        }, $emit: function $emit(a, b) {
	          var c = [],
	              d,
	              e = this,
	              g = !1,
	              h = { name: a, targetScope: e, stopPropagation: function stopPropagation() {
	              g = !0;
	            }, preventDefault: function preventDefault() {
	              h.defaultPrevented = !0;
	            }, defaultPrevented: !1 },
	              k = $a([h], arguments, 1),
	              l,
	              m;do {
	            d = e.$$listeners[a] || c;h.currentScope = e;l = 0;for (m = d.length; l < m; l++) {
	              if (d[l]) try {
	                d[l].apply(null, k);
	              } catch (n) {
	                f(n);
	              } else d.splice(l, 1), l--, m--;
	            }if (g) return h.currentScope = null, h;e = e.$parent;
	          } while (e);h.currentScope = null;return h;
	        }, $broadcast: function $broadcast(a, b) {
	          var c = this,
	              d = this,
	              e = { name: a, targetScope: this, preventDefault: function preventDefault() {
	              e.defaultPrevented = !0;
	            }, defaultPrevented: !1 };if (!this.$$listenerCount[a]) return e;for (var g = $a([e], arguments, 1), h, k; c = d;) {
	            e.currentScope = c;d = c.$$listeners[a] || [];h = 0;for (k = d.length; h < k; h++) {
	              if (d[h]) try {
	                d[h].apply(null, g);
	              } catch (l) {
	                f(l);
	              } else d.splice(h, 1), h--, k--;
	            }if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (; c !== this && !(d = c.$$nextSibling);) {
	              c = c.$parent;
	            }
	          }e.currentScope = null;return e;
	        } };var J = new m(),
	          v = J.$$asyncQueue = [],
	          w = J.$$postDigestQueue = [],
	          t = J.$$applyAsyncQueue = [],
	          K = 0;return J;
	    }];
	  }function ne() {
	    var a = /^\s*(https?|ftp|mailto|tel|file):/,
	        b = /^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist = function (b) {
	      return w(b) ? (a = b, this) : a;
	    };this.imgSrcSanitizationWhitelist = function (a) {
	      return w(a) ? (b = a, this) : b;
	    };this.$get = function () {
	      return function (d, c) {
	        var e = c ? b : a,
	            f;f = Y(d).href;return "" === f || f.match(e) ? d : "unsafe:" + f;
	      };
	    };
	  }function og(a) {
	    if ("self" === a) return a;if (G(a)) {
	      if (-1 < a.indexOf("***")) throw sa("iwcard", a);a = wd(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");return new RegExp("^" + a + "$");
	    }if (Wa(a)) return new RegExp("^" + a.source + "$");throw sa("imatcher");
	  }function xd(a) {
	    var b = [];w(a) && q(a, function (a) {
	      b.push(og(a));
	    });return b;
	  }function zf() {
	    this.SCE_CONTEXTS = la;var a = ["self"],
	        b = [];this.resourceUrlWhitelist = function (b) {
	      arguments.length && (a = xd(b));return a;
	    };this.resourceUrlBlacklist = function (a) {
	      arguments.length && (b = xd(a));return b;
	    };this.$get = ["$injector", function (d) {
	      function c(a, b) {
	        return "self" === a ? id(b) : !!a.exec(b.href);
	      }function e(a) {
	        var b = function b(a) {
	          this.$$unwrapTrustedValue = function () {
	            return a;
	          };
	        };a && (b.prototype = new a());b.prototype.valueOf = function () {
	          return this.$$unwrapTrustedValue();
	        };b.prototype.toString = function () {
	          return this.$$unwrapTrustedValue().toString();
	        };return b;
	      }var f = function f(a) {
	        throw sa("unsafe");
	      };d.has("$sanitize") && (f = d.get("$sanitize"));var g = e(),
	          h = {};h[la.HTML] = e(g);h[la.CSS] = e(g);h[la.URL] = e(g);h[la.JS] = e(g);h[la.RESOURCE_URL] = e(h[la.URL]);return { trustAs: function trustAs(a, b) {
	          var c = h.hasOwnProperty(a) ? h[a] : null;if (!c) throw sa("icontext", a, b);if (null === b || y(b) || "" === b) return b;if ("string" !== typeof b) throw sa("itype", a);return new c(b);
	        }, getTrusted: function getTrusted(d, e) {
	          if (null === e || y(e) || "" === e) return e;var g = h.hasOwnProperty(d) ? h[d] : null;if (g && e instanceof g) return e.$$unwrapTrustedValue();if (d === la.RESOURCE_URL) {
	            var g = Y(e.toString()),
	                n,
	                p,
	                u = !1;n = 0;for (p = a.length; n < p; n++) {
	              if (c(a[n], g)) {
	                u = !0;break;
	              }
	            }if (u) for (n = 0, p = b.length; n < p; n++) {
	              if (c(b[n], g)) {
	                u = !1;break;
	              }
	            }if (u) return e;throw sa("insecurl", e.toString());
	          }if (d === la.HTML) return f(e);throw sa("unsafe");
	        }, valueOf: function valueOf(a) {
	          return a instanceof g ? a.$$unwrapTrustedValue() : a;
	        } };
	    }];
	  }function yf() {
	    var a = !0;this.enabled = function (b) {
	      arguments.length && (a = !!b);return a;
	    };this.$get = ["$parse", "$sceDelegate", function (b, d) {
	      if (a && 8 > Ea) throw sa("iequirks");var c = ia(la);c.isEnabled = function () {
	        return a;
	      };c.trustAs = d.trustAs;c.getTrusted = d.getTrusted;c.valueOf = d.valueOf;a || (c.trustAs = c.getTrusted = function (a, b) {
	        return b;
	      }, c.valueOf = Xa);c.parseAs = function (a, d) {
	        var e = b(d);return e.literal && e.constant ? e : b(d, function (b) {
	          return c.getTrusted(a, b);
	        });
	      };var e = c.parseAs,
	          f = c.getTrusted,
	          g = c.trustAs;q(la, function (a, b) {
	        var d = Q(b);c[db("parse_as_" + d)] = function (b) {
	          return e(a, b);
	        };c[db("get_trusted_" + d)] = function (b) {
	          return f(a, b);
	        };c[db("trust_as_" + d)] = function (b) {
	          return g(a, b);
	        };
	      });return c;
	    }];
	  }function Af() {
	    this.$get = ["$window", "$document", function (a, b) {
	      var d = {},
	          c = !(a.chrome && a.chrome.app && a.chrome.app.runtime) && a.history && a.history.pushState,
	          e = Z((/android (\d+)/.exec(Q((a.navigator || {}).userAgent)) || [])[1]),
	          f = /Boxee/i.test((a.navigator || {}).userAgent),
	          g = b[0] || {},
	          h,
	          k = /^(Moz|webkit|ms)(?=[A-Z])/,
	          l = g.body && g.body.style,
	          m = !1,
	          n = !1;if (l) {
	        for (var p in l) {
	          if (m = k.exec(p)) {
	            h = m[0];h = h[0].toUpperCase() + h.substr(1);break;
	          }
	        }h || (h = "WebkitOpacity" in l && "webkit");m = !!("transition" in l || h + "Transition" in l);n = !!("animation" in l || h + "Animation" in l);!e || m && n || (m = G(l.webkitTransition), n = G(l.webkitAnimation));
	      }return { history: !(!c || 4 > e || f), hasEvent: function hasEvent(a) {
	          if ("input" === a && 11 >= Ea) return !1;if (y(d[a])) {
	            var b = g.createElement("div");d[a] = "on" + a in b;
	          }return d[a];
	        }, csp: Ba(), vendorPrefix: h, transitions: m, animations: n, android: e };
	    }];
	  }
	  function Cf() {
	    var a;this.httpOptions = function (b) {
	      return b ? (a = b, this) : a;
	    };this.$get = ["$templateCache", "$http", "$q", "$sce", function (b, d, c, e) {
	      function f(g, h) {
	        f.totalPendingRequests++;if (!G(g) || y(b.get(g))) g = e.getTrustedResourceUrl(g);var k = d.defaults && d.defaults.transformResponse;L(k) ? k = k.filter(function (a) {
	          return a !== dc;
	        }) : k === dc && (k = null);return d.get(g, S({ cache: b, transformResponse: k }, a))["finally"](function () {
	          f.totalPendingRequests--;
	        }).then(function (a) {
	          b.put(g, a.data);return a.data;
	        }, function (a) {
	          if (!h) throw pg("tpload", g, a.status, a.statusText);return c.reject(a);
	        });
	      }f.totalPendingRequests = 0;return f;
	    }];
	  }function Df() {
	    this.$get = ["$rootScope", "$browser", "$location", function (a, b, d) {
	      return { findBindings: function findBindings(a, b, d) {
	          a = a.getElementsByClassName("ng-binding");var g = [];q(a, function (a) {
	            var c = ca.element(a).data("$binding");c && q(c, function (c) {
	              d ? new RegExp("(^|\\s)" + wd(b) + "(\\s|\\||$)").test(c) && g.push(a) : -1 != c.indexOf(b) && g.push(a);
	            });
	          });return g;
	        }, findModels: function findModels(a, b, d) {
	          for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
	            var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');if (k.length) return k;
	          }
	        }, getLocation: function getLocation() {
	          return d.url();
	        }, setLocation: function setLocation(b) {
	          b !== d.url() && (d.url(b), a.$digest());
	        }, whenStable: function whenStable(a) {
	          b.notifyWhenNoOutstandingRequests(a);
	        } };
	    }];
	  }function Ef() {
	    this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, d, c, e) {
	      function f(f, k, l) {
	        z(f) || (l = k, k = f, f = A);var m = va.call(arguments, 3),
	            n = w(l) && !l,
	            p = (n ? c : d).defer(),
	            u = p.promise,
	            q;q = b.defer(function () {
	          try {
	            p.resolve(f.apply(null, m));
	          } catch (b) {
	            p.reject(b), e(b);
	          } finally {
	            delete g[u.$$timeoutId];
	          }n || a.$apply();
	        }, k);u.$$timeoutId = q;g[q] = p;return u;
	      }var g = {};f.cancel = function (a) {
	        return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1;
	      };return f;
	    }];
	  }function Y(a) {
	    Ea && ($.setAttribute("href", a), a = $.href);$.setAttribute("href", a);return { href: $.href, protocol: $.protocol ? $.protocol.replace(/:$/, "") : "", host: $.host, search: $.search ? $.search.replace(/^\?/, "") : "", hash: $.hash ? $.hash.replace(/^#/, "") : "", hostname: $.hostname, port: $.port, pathname: "/" === $.pathname.charAt(0) ? $.pathname : "/" + $.pathname };
	  }function id(a) {
	    a = G(a) ? Y(a) : a;return a.protocol === yd.protocol && a.host === yd.host;
	  }function Ff() {
	    this.$get = ha(C);
	  }function zd(a) {
	    function b(a) {
	      try {
	        return decodeURIComponent(a);
	      } catch (b) {
	        return a;
	      }
	    }var d = a[0] || {},
	        c = {},
	        e = "";return function () {
	      var a, g, h, k, l;a = d.cookie || "";if (a !== e) for (e = a, a = e.split("; "), c = {}, h = 0; h < a.length; h++) {
	        g = a[h], k = g.indexOf("="), 0 < k && (l = b(g.substring(0, k)), y(c[l]) && (c[l] = b(g.substring(k + 1))));
	      }return c;
	    };
	  }function Jf() {
	    this.$get = zd;
	  }function Mc(a) {
	    function b(d, c) {
	      if (D(d)) {
	        var e = {};q(d, function (a, c) {
	          e[c] = b(c, a);
	        });return e;
	      }return a.factory(d + "Filter", c);
	    }this.register = b;this.$get = ["$injector", function (a) {
	      return function (b) {
	        return a.get(b + "Filter");
	      };
	    }];b("currency", Ad);b("date", Bd);b("filter", qg);b("json", rg);b("limitTo", sg);b("lowercase", tg);b("number", Cd);b("orderBy", Dd);b("uppercase", ug);
	  }function qg() {
	    return function (a, b, d, c) {
	      if (!ta(a)) {
	        if (null == a) return a;throw N("filter")("notarray", a);
	      }c = c || "$";var e;switch (lc(b)) {case "function":
	          break;case "boolean":case "null":case "number":case "string":
	          e = !0;case "object":
	          b = vg(b, d, c, e);break;default:
	          return a;}return Array.prototype.filter.call(a, b);
	    };
	  }function vg(a, b, d, c) {
	    var e = D(a) && d in a;!0 === b ? b = na : z(b) || (b = function b(a, _b) {
	      if (y(a)) return !1;if (null === a || null === _b) return a === _b;if (D(_b) || D(a) && !vc(a)) return !1;a = Q("" + a);_b = Q("" + _b);return -1 !== a.indexOf(_b);
	    });return function (f) {
	      return e && !D(f) ? La(f, a[d], b, d, !1) : La(f, a, b, d, c);
	    };
	  }function La(a, b, d, c, e, f) {
	    var g = lc(a),
	        h = lc(b);if ("string" === h && "!" === b.charAt(0)) return !La(a, b.substring(1), d, c, e);if (L(a)) return a.some(function (a) {
	      return La(a, b, d, c, e);
	    });switch (g) {case "object":
	        var k;if (e) {
	          for (k in a) {
	            if ("$" !== k.charAt(0) && La(a[k], b, d, c, !0)) return !0;
	          }return f ? !1 : La(a, b, d, c, !1);
	        }if ("object" === h) {
	          for (k in b) {
	            if (f = b[k], !z(f) && !y(f) && (g = k === c, !La(g ? a : a[k], f, d, c, g, g))) return !1;
	          }return !0;
	        }return d(a, b);case "function":
	        return !1;default:
	        return d(a, b);}
	  }function lc(a) {
	    return null === a ? "null" : typeof a === "undefined" ? "undefined" : _typeof(a);
	  }function Ad(a) {
	    var b = a.NUMBER_FORMATS;return function (a, c, e) {
	      y(c) && (c = b.CURRENCY_SYM);y(e) && (e = b.PATTERNS[1].maxFrac);return null == a ? a : Ed(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, e).replace(/\u00A4/g, c);
	    };
	  }function Cd(a) {
	    var b = a.NUMBER_FORMATS;return function (a, c) {
	      return null == a ? a : Ed(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
	    };
	  }function wg(a) {
	    var b = 0,
	        d,
	        c,
	        e,
	        f,
	        g;-1 < (c = a.indexOf(Fd)) && (a = a.replace(Fd, ""));0 < (e = a.search(/e/i)) ? (0 > c && (c = e), c += +a.slice(e + 1), a = a.substring(0, e)) : 0 > c && (c = a.length);for (e = 0; a.charAt(e) == mc; e++) {}
	    if (e == (g = a.length)) d = [0], c = 1;else {
	      for (g--; a.charAt(g) == mc;) {
	        g--;
	      }c -= e;d = [];for (f = 0; e <= g; e++, f++) {
	        d[f] = +a.charAt(e);
	      }
	    }c > Gd && (d = d.splice(0, Gd - 1), b = c - 1, c = 1);return { d: d, e: b, i: c };
	  }function xg(a, b, d, c) {
	    var e = a.d,
	        f = e.length - a.i;b = y(b) ? Math.min(Math.max(d, f), c) : +b;d = b + a.i;c = e[d];if (0 < d) {
	      e.splice(Math.max(a.i, d));for (var g = d; g < e.length; g++) {
	        e[g] = 0;
	      }
	    } else for (f = Math.max(0, f), a.i = 1, e.length = Math.max(1, d = b + 1), e[0] = 0, g = 1; g < d; g++) {
	      e[g] = 0;
	    }if (5 <= c) if (0 > d - 1) {
	      for (c = 0; c > d; c--) {
	        e.unshift(0), a.i++;
	      }e.unshift(1);a.i++;
	    } else e[d - 1]++;
	    for (; f < Math.max(0, b); f++) {
	      e.push(0);
	    }if (b = e.reduceRight(function (a, b, c, d) {
	      b += a;d[c] = b % 10;return Math.floor(b / 10);
	    }, 0)) e.unshift(b), a.i++;
	  }function Ed(a, b, d, c, e) {
	    if (!G(a) && !T(a) || isNaN(a)) return "";var f = !isFinite(a),
	        g = !1,
	        h = Math.abs(a) + "",
	        k = "";if (f) k = "\u221E";else {
	      g = wg(h);xg(g, e, b.minFrac, b.maxFrac);k = g.d;h = g.i;e = g.e;f = [];for (g = k.reduce(function (a, b) {
	        return a && !b;
	      }, !0); 0 > h;) {
	        k.unshift(0), h++;
	      }0 < h ? f = k.splice(h, k.length) : (f = k, k = [0]);h = [];for (k.length >= b.lgSize && h.unshift(k.splice(-b.lgSize, k.length).join("")); k.length > b.gSize;) {
	        h.unshift(k.splice(-b.gSize, k.length).join(""));
	      }k.length && h.unshift(k.join(""));k = h.join(d);f.length && (k += c + f.join(""));e && (k += "e+" + e);
	    }return 0 > a && !g ? b.negPre + k + b.negSuf : b.posPre + k + b.posSuf;
	  }function Kb(a, b, d, c) {
	    var e = "";if (0 > a || c && 0 >= a) c ? a = -a + 1 : (a = -a, e = "-");for (a = "" + a; a.length < b;) {
	      a = mc + a;
	    }d && (a = a.substr(a.length - b));return e + a;
	  }function ba(a, b, d, c, e) {
	    d = d || 0;return function (f) {
	      f = f["get" + a]();if (0 < d || f > -d) f += d;0 === f && -12 == d && (f = 12);return Kb(f, b, c, e);
	    };
	  }function kb(a, b, d) {
	    return function (c, e) {
	      var f = c["get" + a](),
	          g = ub((d ? "STANDALONE" : "") + (b ? "SHORT" : "") + a);return e[g][f];
	    };
	  }function Hd(a) {
	    var b = new Date(a, 0, 1).getDay();return new Date(a, 0, (4 >= b ? 5 : 12) - b);
	  }function Id(a) {
	    return function (b) {
	      var d = Hd(b.getFullYear());b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;b = 1 + Math.round(b / 6048E5);return Kb(b, a);
	    };
	  }function nc(a, b) {
	    return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1];
	  }function Bd(a) {
	    function b(a) {
	      var b;if (b = a.match(d)) {
	        a = new Date(0);var f = 0,
	            g = 0,
	            h = b[8] ? a.setUTCFullYear : a.setFullYear,
	            k = b[8] ? a.setUTCHours : a.setHours;b[9] && (f = Z(b[9] + b[10]), g = Z(b[9] + b[11]));h.call(a, Z(b[1]), Z(b[2]) - 1, Z(b[3]));f = Z(b[4] || 0) - f;g = Z(b[5] || 0) - g;h = Z(b[6] || 0);b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));k.call(a, f, g, h, b);
	      }return a;
	    }var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function (c, d, f) {
	      var g = "",
	          h = [],
	          k,
	          l;d = d || "mediumDate";d = a.DATETIME_FORMATS[d] || d;G(c) && (c = yg.test(c) ? Z(c) : b(c));T(c) && (c = new Date(c));if (!da(c) || !isFinite(c.getTime())) return c;
	      for (; d;) {
	        (l = zg.exec(d)) ? (h = $a(h, l, 1), d = h.pop()) : (h.push(d), d = null);
	      }var m = c.getTimezoneOffset();f && (m = yc(f, m), c = Sb(c, f, !0));q(h, function (b) {
	        k = Ag[b];g += k ? k(c, a.DATETIME_FORMATS, m) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'");
	      });return g;
	    };
	  }function rg() {
	    return function (a, b) {
	      y(b) && (b = 2);return bb(a, b);
	    };
	  }function sg() {
	    return function (a, b, d) {
	      b = Infinity === Math.abs(Number(b)) ? Number(b) : Z(b);if (isNaN(b)) return a;T(a) && (a = a.toString());if (!ta(a)) return a;d = !d || isNaN(d) ? 0 : Z(d);d = 0 > d ? Math.max(0, a.length + d) : d;return 0 <= b ? oc(a, d, d + b) : 0 === d ? oc(a, b, a.length) : oc(a, Math.max(0, d + b), d);
	    };
	  }function oc(a, b, d) {
	    return G(a) ? a.slice(b, d) : va.call(a, b, d);
	  }function Dd(a) {
	    function b(b) {
	      return b.map(function (b) {
	        var c = 1,
	            d = Xa;if (z(b)) d = b;else if (G(b)) {
	          if ("+" == b.charAt(0) || "-" == b.charAt(0)) c = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1);if ("" !== b && (d = a(b), d.constant)) var e = d(),
	              d = function d(a) {
	            return a[e];
	          };
	        }return { get: d, descending: c };
	      });
	    }function d(a) {
	      switch (typeof a === "undefined" ? "undefined" : _typeof(a)) {case "number":case "boolean":case "string":
	          return !0;default:
	          return !1;}
	    }
	    function c(a, b) {
	      var c = 0,
	          d = a.type,
	          k = b.type;if (d === k) {
	        var k = a.value,
	            l = b.value;"string" === d ? (k = k.toLowerCase(), l = l.toLowerCase()) : "object" === d && (D(k) && (k = a.index), D(l) && (l = b.index));k !== l && (c = k < l ? -1 : 1);
	      } else c = d < k ? -1 : 1;return c;
	    }return function (a, f, g, h) {
	      if (null == a) return a;if (!ta(a)) throw N("orderBy")("notarray", a);L(f) || (f = [f]);0 === f.length && (f = ["+"]);var k = b(f),
	          l = g ? -1 : 1,
	          m = z(h) ? h : c;a = Array.prototype.map.call(a, function (a, b) {
	        return { value: a, tieBreaker: { value: b, type: "number", index: b }, predicateValues: k.map(function (c) {
	            var e = c.get(a);c = typeof e === "undefined" ? "undefined" : _typeof(e);if (null === e) c = "string", e = "null";else if ("object" === c) a: {
	              if (z(e.valueOf) && (e = e.valueOf(), d(e))) break a;vc(e) && (e = e.toString(), d(e));
	            }return { value: e, type: c, index: b };
	          }) };
	      });a.sort(function (a, b) {
	        for (var c = 0, d = k.length; c < d; c++) {
	          var e = m(a.predicateValues[c], b.predicateValues[c]);if (e) return e * k[c].descending * l;
	        }return m(a.tieBreaker, b.tieBreaker) * l;
	      });return a = a.map(function (a) {
	        return a.value;
	      });
	    };
	  }function Ta(a) {
	    z(a) && (a = { link: a });a.restrict = a.restrict || "AC";return ha(a);
	  }function Jd(a, b, d, c, e) {
	    var f = this,
	        g = [];f.$error = {};f.$$success = {};f.$pending = void 0;f.$name = e(b.name || b.ngForm || "")(d);f.$dirty = !1;f.$pristine = !0;f.$valid = !0;f.$invalid = !1;f.$submitted = !1;f.$$parentForm = Lb;f.$rollbackViewValue = function () {
	      q(g, function (a) {
	        a.$rollbackViewValue();
	      });
	    };f.$commitViewValue = function () {
	      q(g, function (a) {
	        a.$commitViewValue();
	      });
	    };f.$addControl = function (a) {
	      Qa(a.$name, "input");g.push(a);a.$name && (f[a.$name] = a);a.$$parentForm = f;
	    };f.$$renameControl = function (a, b) {
	      var c = a.$name;f[c] === a && delete f[c];f[b] = a;a.$name = b;
	    };f.$removeControl = function (a) {
	      a.$name && f[a.$name] === a && delete f[a.$name];q(f.$pending, function (b, c) {
	        f.$setValidity(c, null, a);
	      });q(f.$error, function (b, c) {
	        f.$setValidity(c, null, a);
	      });q(f.$$success, function (b, c) {
	        f.$setValidity(c, null, a);
	      });Za(g, a);a.$$parentForm = Lb;
	    };Kd({ ctrl: this, $element: a, set: function set(a, b, c) {
	        var d = a[b];d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c];
	      }, unset: function unset(a, b, c) {
	        var d = a[b];d && (Za(d, c), 0 === d.length && delete a[b]);
	      }, $animate: c });f.$setDirty = function () {
	      c.removeClass(a, Ua);c.addClass(a, Mb);f.$dirty = !0;f.$pristine = !1;f.$$parentForm.$setDirty();
	    };f.$setPristine = function () {
	      c.setClass(a, Ua, Mb + " ng-submitted");f.$dirty = !1;f.$pristine = !0;f.$submitted = !1;q(g, function (a) {
	        a.$setPristine();
	      });
	    };f.$setUntouched = function () {
	      q(g, function (a) {
	        a.$setUntouched();
	      });
	    };f.$setSubmitted = function () {
	      c.addClass(a, "ng-submitted");f.$submitted = !0;f.$$parentForm.$setSubmitted();
	    };
	  }function pc(a) {
	    a.$formatters.push(function (b) {
	      return a.$isEmpty(b) ? b : b.toString();
	    });
	  }function lb(a, b, d, c, e, f) {
	    var g = Q(b[0].type);if (!e.android) {
	      var h = !1;b.on("compositionstart", function () {
	        h = !0;
	      });b.on("compositionend", function () {
	        h = !1;l();
	      });
	    }var k,
	        l = function l(a) {
	      k && (f.defer.cancel(k), k = null);if (!h) {
	        var e = b.val();a = a && a.type;"password" === g || d.ngTrim && "false" === d.ngTrim || (e = W(e));(c.$viewValue !== e || "" === e && c.$$hasNativeValidators) && c.$setViewValue(e, a);
	      }
	    };if (e.hasEvent("input")) b.on("input", l);else {
	      var m = function m(a, b, c) {
	        k || (k = f.defer(function () {
	          k = null;b && b.value === c || l(a);
	        }));
	      };b.on("keydown", function (a) {
	        var b = a.keyCode;91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value);
	      });if (e.hasEvent("paste")) b.on("paste cut", m);
	    }b.on("change", l);if (Ld[g] && c.$$hasNativeValidators && g === d.type) b.on("keydown wheel mousedown", function (a) {
	      if (!k) {
	        var b = this.validity,
	            c = b.badInput,
	            d = b.typeMismatch;k = f.defer(function () {
	          k = null;b.badInput === c && b.typeMismatch === d || l(a);
	        });
	      }
	    });c.$render = function () {
	      var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;b.val() !== a && b.val(a);
	    };
	  }function Nb(a, b) {
	    return function (d, c) {
	      var e, f;if (da(d)) return d;if (G(d)) {
	        '"' == d.charAt(0) && '"' == d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));if (Bg.test(d)) return new Date(d);a.lastIndex = 0;if (e = a.exec(d)) return e.shift(), f = c ? { yyyy: c.getFullYear(), MM: c.getMonth() + 1, dd: c.getDate(), HH: c.getHours(), mm: c.getMinutes(), ss: c.getSeconds(), sss: c.getMilliseconds() / 1E3 } : { yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0 }, q(e, function (a, c) {
	          c < b.length && (f[b[c]] = +a);
	        }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0);
	      }return NaN;
	    };
	  }function mb(a, b, d, c) {
	    return function (e, f, g, h, k, l, m) {
	      function n(a) {
	        return a && !(a.getTime && a.getTime() !== a.getTime());
	      }function p(a) {
	        return w(a) && !da(a) ? d(a) || void 0 : a;
	      }Md(e, f, g, h);lb(e, f, g, h, k, l);var u = h && h.$options && h.$options.timezone,
	          q;h.$$parserName = a;h.$parsers.push(function (a) {
	        if (h.$isEmpty(a)) return null;if (b.test(a)) return a = d(a, q), u && (a = Sb(a, u)), a;
	      });h.$formatters.push(function (a) {
	        if (a && !da(a)) throw nb("datefmt", a);if (n(a)) return (q = a) && u && (q = Sb(q, u, !0)), m("date")(a, c, u);q = null;return "";
	      });if (w(g.min) || g.ngMin) {
	        var s;h.$validators.min = function (a) {
	          return !n(a) || y(s) || d(a) >= s;
	        };g.$observe("min", function (a) {
	          s = p(a);h.$validate();
	        });
	      }if (w(g.max) || g.ngMax) {
	        var r;h.$validators.max = function (a) {
	          return !n(a) || y(r) || d(a) <= r;
	        };g.$observe("max", function (a) {
	          r = p(a);h.$validate();
	        });
	      }
	    };
	  }function Md(a, b, d, c) {
	    (c.$$hasNativeValidators = D(b[0].validity)) && c.$parsers.push(function (a) {
	      var c = b.prop("validity") || {};return c.badInput || c.typeMismatch ? void 0 : a;
	    });
	  }function Nd(a, b, d, c, e) {
	    if (w(c)) {
	      a = a(c);if (!a.constant) throw nb("constexpr", d, c);return a(b);
	    }return e;
	  }function qc(a, b) {
	    a = "ngClass" + a;return ["$animate", function (d) {
	      function c(a, b) {
	        var c = [],
	            d = 0;a: for (; d < a.length; d++) {
	          for (var e = a[d], m = 0; m < b.length; m++) {
	            if (e == b[m]) continue a;
	          }c.push(e);
	        }return c;
	      }function e(a) {
	        var b = [];return L(a) ? (q(a, function (a) {
	          b = b.concat(e(a));
	        }), b) : G(a) ? a.split(" ") : D(a) ? (q(a, function (a, c) {
	          a && (b = b.concat(c.split(" ")));
	        }), b) : a;
	      }return { restrict: "AC", link: function link(f, g, h) {
	          function k(a) {
	            a = l(a, 1);h.$addClass(a);
	          }function l(a, b) {
	            var c = g.data("$classCounts") || U(),
	                d = [];q(a, function (a) {
	              if (0 < b || c[a]) c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
	            });g.data("$classCounts", c);return d.join(" ");
	          }
	          function m(a, b) {
	            var e = c(b, a),
	                f = c(a, b),
	                e = l(e, 1),
	                f = l(f, -1);e && e.length && d.addClass(g, e);f && f.length && d.removeClass(g, f);
	          }function n(a) {
	            if (!0 === b || (f.$index & 1) === b) {
	              var c = e(a || []);if (!p) k(c);else if (!na(a, p)) {
	                var d = e(p);m(d, c);
	              }
	            }p = L(a) ? a.map(function (a) {
	              return ia(a);
	            }) : ia(a);
	          }var p;f.$watch(h[a], n, !0);h.$observe("class", function (b) {
	            n(f.$eval(h[a]));
	          });"ngClass" !== a && f.$watch("$index", function (c, d) {
	            var g = c & 1;if (g !== (d & 1)) {
	              var m = e(f.$eval(h[a]));g === b ? k(m) : (g = l(m, -1), h.$removeClass(g));
	            }
	          });
	        } };
	    }];
	  }function Kd(a) {
	    function b(a, b) {
	      b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1);
	    }function d(a, c) {
	      a = a ? "-" + Cc(a, "-") : "";b(ob + a, !0 === c);b(Od + a, !1 === c);
	    }var c = a.ctrl,
	        e = a.$element,
	        f = {},
	        g = a.set,
	        h = a.unset,
	        k = a.$animate;f[Od] = !(f[ob] = e.hasClass(ob));c.$setValidity = function (a, e, f) {
	      y(e) ? (c.$pending || (c.$pending = {}), g(c.$pending, a, f)) : (c.$pending && h(c.$pending, a, f), Pd(c.$pending) && (c.$pending = void 0));Ga(e) ? e ? (h(c.$error, a, f), g(c.$$success, a, f)) : (g(c.$error, a, f), h(c.$$success, a, f)) : (h(c.$error, a, f), h(c.$$success, a, f));c.$pending ? (b(Qd, !0), c.$valid = c.$invalid = void 0, d("", null)) : (b(Qd, !1), c.$valid = Pd(c.$error), c.$invalid = !c.$valid, d("", c.$valid));e = c.$pending && c.$pending[a] ? void 0 : c.$error[a] ? !1 : c.$$success[a] ? !0 : null;d(a, e);c.$$parentForm.$setValidity(a, e, c);
	    };
	  }function Pd(a) {
	    if (a) for (var b in a) {
	      if (a.hasOwnProperty(b)) return !1;
	    }return !0;
	  }var Cg = /^\/(.+)\/([a-z]*)$/,
	      ua = Object.prototype.hasOwnProperty,
	      Q = function Q(a) {
	    return G(a) ? a.toLowerCase() : a;
	  },
	      ub = function ub(a) {
	    return G(a) ? a.toUpperCase() : a;
	  },
	      Ea,
	      F,
	      qa,
	      va = [].slice,
	      bg = [].splice,
	      Dg = [].push,
	      ma = Object.prototype.toString,
	      wc = Object.getPrototypeOf,
	      xa = N("ng"),
	      ca = C.angular || (C.angular = {}),
	      Ub,
	      pb = 0;Ea = C.document.documentMode;A.$inject = [];Xa.$inject = [];var L = Array.isArray,
	      ae = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
	      W = function W(a) {
	    return G(a) ? a.trim() : a;
	  },
	      wd = function wd(a) {
	    return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
	  },
	      Ba = function Ba() {
	    if (!w(Ba.rules)) {
	      var a = C.document.querySelector("[ng-csp]") || C.document.querySelector("[data-ng-csp]");if (a) {
	        var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");Ba.rules = { noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"), noInlineStyle: !b || -1 !== b.indexOf("no-inline-style") };
	      } else {
	        a = Ba;try {
	          new Function(""), b = !1;
	        } catch (d) {
	          b = !0;
	        }a.rules = { noUnsafeEval: b, noInlineStyle: !1 };
	      }
	    }return Ba.rules;
	  },
	      rb = function rb() {
	    if (w(rb.name_)) return rb.name_;var a,
	        b,
	        d = Na.length,
	        c,
	        e;for (b = 0; b < d; ++b) {
	      if (c = Na[b], a = C.document.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
	        e = a.getAttribute(c + "jq");break;
	      }
	    }return rb.name_ = e;
	  },
	      de = /:/g,
	      Na = ["ng-", "data-ng-", "ng:", "x-ng-"],
	      ie = /[A-Z]/g,
	      Dc = !1,
	      Ma = 3,
	      me = { full: "1.5.8", major: 1, minor: 5, dot: 8, codeName: "arbitrary-fallbacks" };O.expando = "ng339";var fb = O.cache = {},
	      Pf = 1;O._data = function (a) {
	    return this.cache[a[this.expando]] || {};
	  };var Kf = /([\:\-\_]+(.))/g,
	      Lf = /^moz([A-Z])/,
	      yb = { mouseleave: "mouseout", mouseenter: "mouseover" },
	      Wb = N("jqLite"),
	      Of = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
	      Vb = /<|&#?\w+;/,
	      Mf = /<([\w:-]+)/,
	      Nf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
	      ja = { option: [1, '<select multiple="multiple">', "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ja.optgroup = ja.option;ja.tbody = ja.tfoot = ja.colgroup = ja.caption = ja.thead;ja.th = ja.td;var Uf = C.Node.prototype.contains || function (a) {
	    return !!(this.compareDocumentPosition(a) & 16);
	  },
	      Oa = O.prototype = { ready: function ready(a) {
	      function b() {
	        d || (d = !0, a());
	      }var d = !1;"complete" === C.document.readyState ? C.setTimeout(b) : (this.on("DOMContentLoaded", b), O(C).on("load", b));
	    }, toString: function toString() {
	      var a = [];q(this, function (b) {
	        a.push("" + b);
	      });return "[" + a.join(", ") + "]";
	    }, eq: function eq(a) {
	      return 0 <= a ? F(this[a]) : F(this[this.length + a]);
	    }, length: 0, push: Dg, sort: [].sort, splice: [].splice },
	      Eb = {};q("multiple selected checked disabled readOnly required open".split(" "), function (a) {
	    Eb[Q(a)] = a;
	  });var Vc = {};q("input select option textarea button form details".split(" "), function (a) {
	    Vc[a] = !0;
	  });var bd = { ngMinlength: "minlength",
	    ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern" };q({ data: Yb, removeData: eb, hasData: function hasData(a) {
	      for (var b in fb[a.ng339]) {
	        return !0;
	      }return !1;
	    }, cleanData: function cleanData(a) {
	      for (var b = 0, d = a.length; b < d; b++) {
	        eb(a[b]);
	      }
	    } }, function (a, b) {
	    O[b] = a;
	  });q({ data: Yb, inheritedData: Cb, scope: function scope(a) {
	      return F.data(a, "$scope") || Cb(a.parentNode || a, ["$isolateScope", "$scope"]);
	    }, isolateScope: function isolateScope(a) {
	      return F.data(a, "$isolateScope") || F.data(a, "$isolateScopeNoTemplate");
	    }, controller: Sc, injector: function injector(a) {
	      return Cb(a, "$injector");
	    }, removeAttr: function removeAttr(a, b) {
	      a.removeAttribute(b);
	    }, hasClass: zb, css: function css(a, b, d) {
	      b = db(b);if (w(d)) a.style[b] = d;else return a.style[b];
	    }, attr: function attr(a, b, d) {
	      var c = a.nodeType;if (c !== Ma && 2 !== c && 8 !== c) if (c = Q(b), Eb[c]) {
	        if (w(d)) d ? (a[b] = !0, a.setAttribute(b, c)) : (a[b] = !1, a.removeAttribute(c));else return a[b] || (a.attributes.getNamedItem(b) || A).specified ? c : void 0;
	      } else if (w(d)) a.setAttribute(b, d);else if (a.getAttribute) return a = a.getAttribute(b, 2), null === a ? void 0 : a;
	    }, prop: function prop(a, b, d) {
	      if (w(d)) a[b] = d;else return a[b];
	    }, text: function () {
	      function a(a, d) {
	        if (y(d)) {
	          var c = a.nodeType;return 1 === c || c === Ma ? a.textContent : "";
	        }a.textContent = d;
	      }a.$dv = "";return a;
	    }(), val: function val(a, b) {
	      if (y(b)) {
	        if (a.multiple && "select" === wa(a)) {
	          var d = [];q(a.options, function (a) {
	            a.selected && d.push(a.value || a.text);
	          });return 0 === d.length ? null : d;
	        }return a.value;
	      }a.value = b;
	    }, html: function html(a, b) {
	      if (y(b)) return a.innerHTML;wb(a, !0);a.innerHTML = b;
	    }, empty: Tc }, function (a, b) {
	    O.prototype[b] = function (b, c) {
	      var e,
	          f,
	          g = this.length;if (a !== Tc && y(2 == a.length && a !== zb && a !== Sc ? b : c)) {
	        if (D(b)) {
	          for (e = 0; e < g; e++) {
	            if (a === Yb) a(this[e], b);else for (f in b) {
	              a(this[e], f, b[f]);
	            }
	          }return this;
	        }e = a.$dv;g = y(e) ? Math.min(g, 1) : g;for (f = 0; f < g; f++) {
	          var h = a(this[f], b, c);e = e ? e + h : h;
	        }return e;
	      }for (e = 0; e < g; e++) {
	        a(this[e], b, c);
	      }return this;
	    };
	  });q({ removeData: eb, on: function on(a, b, d, c) {
	      if (w(c)) throw Wb("onargs");if (Nc(a)) {
	        c = xb(a, !0);var e = c.events,
	            f = c.handle;f || (f = c.handle = Rf(a, e));c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];for (var g = c.length, h = function h(b, c, g) {
	          var h = e[b];h || (h = e[b] = [], h.specialHandlerWrapper = c, "$destroy" === b || g || a.addEventListener(b, f, !1));h.push(d);
	        }; g--;) {
	          b = c[g], yb[b] ? (h(yb[b], Tf), h(b, void 0, !0)) : h(b);
	        }
	      }
	    }, off: Rc, one: function one(a, b, d) {
	      a = F(a);a.on(b, function e() {
	        a.off(b, d);a.off(b, e);
	      });a.on(b, d);
	    }, replaceWith: function replaceWith(a, b) {
	      var d,
	          c = a.parentNode;wb(a);q(new O(b), function (b) {
	        d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);d = b;
	      });
	    }, children: function children(a) {
	      var b = [];q(a.childNodes, function (a) {
	        1 === a.nodeType && b.push(a);
	      });return b;
	    }, contents: function contents(a) {
	      return a.contentDocument || a.childNodes || [];
	    }, append: function append(a, b) {
	      var d = a.nodeType;if (1 === d || 11 === d) {
	        b = new O(b);for (var d = 0, c = b.length; d < c; d++) {
	          a.appendChild(b[d]);
	        }
	      }
	    }, prepend: function prepend(a, b) {
	      if (1 === a.nodeType) {
	        var d = a.firstChild;q(new O(b), function (b) {
	          a.insertBefore(b, d);
	        });
	      }
	    }, wrap: function wrap(a, b) {
	      Pc(a, F(b).eq(0).clone()[0]);
	    }, remove: Db, detach: function detach(a) {
	      Db(a, !0);
	    }, after: function after(a, b) {
	      var d = a,
	          c = a.parentNode;b = new O(b);for (var e = 0, f = b.length; e < f; e++) {
	        var g = b[e];c.insertBefore(g, d.nextSibling);d = g;
	      }
	    }, addClass: Bb, removeClass: Ab, toggleClass: function toggleClass(a, b, d) {
	      b && q(b.split(" "), function (b) {
	        var e = d;y(e) && (e = !zb(a, b));(e ? Bb : Ab)(a, b);
	      });
	    }, parent: function parent(a) {
	      return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
	    }, next: function next(a) {
	      return a.nextElementSibling;
	    }, find: function find(a, b) {
	      return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
	    }, clone: Xb, triggerHandler: function triggerHandler(a, b, d) {
	      var c,
	          e,
	          f = b.type || b,
	          g = xb(a);if (g = (g = g && g.events) && g[f]) c = { preventDefault: function preventDefault() {
	          this.defaultPrevented = !0;
	        }, isDefaultPrevented: function isDefaultPrevented() {
	          return !0 === this.defaultPrevented;
	        }, stopImmediatePropagation: function stopImmediatePropagation() {
	          this.immediatePropagationStopped = !0;
	        }, isImmediatePropagationStopped: function isImmediatePropagationStopped() {
	          return !0 === this.immediatePropagationStopped;
	        }, stopPropagation: A, type: f, target: a }, b.type && (c = S(c, b)), b = ia(g), e = d ? [c].concat(d) : [c], q(b, function (b) {
	        c.isImmediatePropagationStopped() || b.apply(a, e);
	      });
	    } }, function (a, b) {
	    O.prototype[b] = function (b, c, e) {
	      for (var f, g = 0, h = this.length; g < h; g++) {
	        y(f) ? (f = a(this[g], b, c, e), w(f) && (f = F(f))) : Qc(f, a(this[g], b, c, e));
	      }return w(f) ? f : this;
	    };O.prototype.bind = O.prototype.on;O.prototype.unbind = O.prototype.off;
	  });Ra.prototype = { put: function put(a, b) {
	      this[Ca(a, this.nextUid)] = b;
	    }, get: function get(a) {
	      return this[Ca(a, this.nextUid)];
	    }, remove: function remove(a) {
	      var b = this[a = Ca(a, this.nextUid)];delete this[a];return b;
	    } };var If = [function () {
	    this.$get = [function () {
	      return Ra;
	    }];
	  }],
	      Wf = /^([^\(]+?)=>/,
	      Xf = /^[^\(]*\(\s*([^\)]*)\)/m,
	      Eg = /,/,
	      Fg = /^\s*(_?)(\S+?)\1\s*$/,
	      Vf = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
	      Ha = N("$injector");cb.$$annotate = function (a, b, d) {
	    var c;if ("function" === typeof a) {
	      if (!(c = a.$inject)) {
	        c = [];if (a.length) {
	          if (b) throw G(d) && d || (d = a.name || Yf(a)), Ha("strictdi", d);
	          b = Wc(a);q(b[1].split(Eg), function (a) {
	            a.replace(Fg, function (a, b, d) {
	              c.push(d);
	            });
	          });
	        }a.$inject = c;
	      }
	    } else L(a) ? (b = a.length - 1, Pa(a[b], "fn"), c = a.slice(0, b)) : Pa(a, "fn", !0);return c;
	  };var Rd = N("$animate"),
	      $e = function $e() {
	    this.$get = A;
	  },
	      af = function af() {
	    var a = new Ra(),
	        b = [];this.$get = ["$$AnimateRunner", "$rootScope", function (d, c) {
	      function e(a, b, c) {
	        var d = !1;b && (b = G(b) ? b.split(" ") : L(b) ? b : [], q(b, function (b) {
	          b && (d = !0, a[b] = c);
	        }));return d;
	      }function f() {
	        q(b, function (b) {
	          var c = a.get(b);if (c) {
	            var d = Zf(b.attr("class")),
	                e = "",
	                f = "";q(c, function (a, b) {
	              a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b);
	            });q(b, function (a) {
	              e && Bb(a, e);f && Ab(a, f);
	            });a.remove(b);
	          }
	        });b.length = 0;
	      }return { enabled: A, on: A, off: A, pin: A, push: function push(g, h, k, l) {
	          l && l();k = k || {};k.from && g.css(k.from);k.to && g.css(k.to);if (k.addClass || k.removeClass) if (h = k.addClass, l = k.removeClass, k = a.get(g) || {}, h = e(k, h, !0), l = e(k, l, !1), h || l) a.put(g, k), b.push(g), 1 === b.length && c.$$postDigest(f);g = new d();g.complete();return g;
	        } };
	    }];
	  },
	      Ye = ["$provide", function (a) {
	    var b = this;this.$$registeredAnimations = Object.create(null);this.register = function (d, c) {
	      if (d && "." !== d.charAt(0)) throw Rd("notcsel", d);var e = d + "-animation";b.$$registeredAnimations[d.substr(1)] = e;a.factory(e, c);
	    };this.classNameFilter = function (a) {
	      if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw Rd("nongcls", "ng-animate");return this.$$classNameFilter;
	    };this.$get = ["$$animateQueue", function (a) {
	      function b(a, c, d) {
	        if (d) {
	          var h;a: {
	            for (h = 0; h < d.length; h++) {
	              var k = d[h];if (1 === k.nodeType) {
	                h = k;break a;
	              }
	            }h = void 0;
	          }!h || h.parentNode || h.previousElementSibling || (d = null);
	        }d ? d.after(a) : c.prepend(a);
	      }return { on: a.on, off: a.off, pin: a.pin, enabled: a.enabled, cancel: function cancel(a) {
	          a.end && a.end();
	        }, enter: function enter(e, f, g, h) {
	          f = f && F(f);g = g && F(g);f = f || g.parent();b(e, f, g);return a.push(e, "enter", Ia(h));
	        }, move: function move(e, f, g, h) {
	          f = f && F(f);g = g && F(g);f = f || g.parent();b(e, f, g);return a.push(e, "move", Ia(h));
	        }, leave: function leave(b, c) {
	          return a.push(b, "leave", Ia(c), function () {
	            b.remove();
	          });
	        }, addClass: function addClass(b, c, g) {
	          g = Ia(g);g.addClass = gb(g.addclass, c);return a.push(b, "addClass", g);
	        }, removeClass: function removeClass(b, c, g) {
	          g = Ia(g);g.removeClass = gb(g.removeClass, c);return a.push(b, "removeClass", g);
	        }, setClass: function setClass(b, c, g, h) {
	          h = Ia(h);h.addClass = gb(h.addClass, c);h.removeClass = gb(h.removeClass, g);return a.push(b, "setClass", h);
	        }, animate: function animate(b, c, g, h, k) {
	          k = Ia(k);k.from = k.from ? S(k.from, c) : c;k.to = k.to ? S(k.to, g) : g;k.tempClasses = gb(k.tempClasses, h || "ng-inline-animate");return a.push(b, "animate", k);
	        } };
	    }];
	  }],
	      cf = function cf() {
	    this.$get = ["$$rAF", function (a) {
	      function b(b) {
	        d.push(b);1 < d.length || a(function () {
	          for (var a = 0; a < d.length; a++) {
	            d[a]();
	          }d = [];
	        });
	      }var d = [];return function () {
	        var a = !1;b(function () {
	          a = !0;
	        });return function (d) {
	          a ? d() : b(d);
	        };
	      };
	    }];
	  },
	      bf = function bf() {
	    this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function (a, b, d, c, e) {
	      function f(a) {
	        this.setHost(a);var b = d();this._doneCallbacks = [];this._tick = function (a) {
	          var d = c[0];d && d.hidden ? e(a, 0, !1) : b(a);
	        };this._state = 0;
	      }f.chain = function (a, b) {
	        function c() {
	          if (d === a.length) b(!0);else a[d](function (a) {
	            !1 === a ? b(!1) : (d++, c());
	          });
	        }var d = 0;c();
	      };f.all = function (a, b) {
	        function c(f) {
	          e = e && f;++d === a.length && b(e);
	        }var d = 0,
	            e = !0;q(a, function (a) {
	          a.done(c);
	        });
	      };f.prototype = { setHost: function setHost(a) {
	          this.host = a || {};
	        }, done: function done(a) {
	          2 === this._state ? a() : this._doneCallbacks.push(a);
	        }, progress: A, getPromise: function getPromise() {
	          if (!this.promise) {
	            var b = this;this.promise = a(function (a, c) {
	              b.done(function (b) {
	                !1 === b ? c() : a();
	              });
	            });
	          }return this.promise;
	        }, then: function then(a, b) {
	          return this.getPromise().then(a, b);
	        }, "catch": function _catch(a) {
	          return this.getPromise()["catch"](a);
	        },
	        "finally": function _finally(a) {
	          return this.getPromise()["finally"](a);
	        }, pause: function pause() {
	          this.host.pause && this.host.pause();
	        }, resume: function resume() {
	          this.host.resume && this.host.resume();
	        }, end: function end() {
	          this.host.end && this.host.end();this._resolve(!0);
	        }, cancel: function cancel() {
	          this.host.cancel && this.host.cancel();this._resolve(!1);
	        }, complete: function complete(a) {
	          var b = this;0 === b._state && (b._state = 1, b._tick(function () {
	            b._resolve(a);
	          }));
	        }, _resolve: function _resolve(a) {
	          2 !== this._state && (q(this._doneCallbacks, function (b) {
	            b(a);
	          }), this._doneCallbacks.length = 0, this._state = 2);
	        } };return f;
	    }];
	  },
	      Ze = function Ze() {
	    this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (a, b, d) {
	      return function (b, e) {
	        function f() {
	          a(function () {
	            g.addClass && (b.addClass(g.addClass), g.addClass = null);g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null);g.to && (b.css(g.to), g.to = null);h || k.complete();h = !0;
	          });return k;
	        }var g = e || {};g.$$prepared || (g = pa(g));g.cleanupStyles && (g.from = g.to = null);g.from && (b.css(g.from), g.from = null);var h,
	            k = new d();return { start: f, end: f };
	      };
	    }];
	  },
	      ga = N("$compile"),
	      bc = new function () {}();
	  Fc.$inject = ["$provide", "$$sanitizeUriProvider"];Fb.prototype.isFirstChange = function () {
	    return this.previousValue === bc;
	  };var Yc = /^((?:x|data)[\:\-_])/i,
	      cg = N("$controller"),
	      cd = /^(\S+)(\s+as\s+([\w$]+))?$/,
	      jf = function jf() {
	    this.$get = ["$document", function (a) {
	      return function (b) {
	        b ? !b.nodeType && b instanceof F && (b = b[0]) : b = a[0].body;return b.offsetWidth + 1;
	      };
	    }];
	  },
	      dd = "application/json",
	      ec = { "Content-Type": dd + ";charset=utf-8" },
	      eg = /^\[|^\{(?!\{)/,
	      fg = { "[": /]$/, "{": /}$/ },
	      dg = /^\)\]\}',?\n/,
	      Gg = N("$http"),
	      hd = function hd(a) {
	    return function () {
	      throw Gg("legacy", a);
	    };
	  },
	      Ka = ca.$interpolateMinErr = N("$interpolate");Ka.throwNoconcat = function (a) {
	    throw Ka("noconcat", a);
	  };Ka.interr = function (a, b) {
	    return Ka("interr", a, b.toString());
	  };var rf = function rf() {
	    this.$get = ["$window", function (a) {
	      function b(a) {
	        var b = function b(a) {
	          b.data = a;b.called = !0;
	        };b.id = a;return b;
	      }var d = a.angular.callbacks,
	          c = {};return { createCallback: function createCallback(a) {
	          a = "_" + (d.$$counter++).toString(36);var f = "angular.callbacks." + a,
	              g = b(a);c[f] = d[a] = g;return f;
	        }, wasCalled: function wasCalled(a) {
	          return c[a].called;
	        }, getResponse: function getResponse(a) {
	          return c[a].data;
	        },
	        removeCallback: function removeCallback(a) {
	          delete d[c[a].id];delete c[a];
	        } };
	    }];
	  },
	      Hg = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
	      hg = { http: 80, https: 443, ftp: 21 },
	      Gb = N("$location"),
	      Ig = { $$absUrl: "", $$html5: !1, $$replace: !1, absUrl: Hb("$$absUrl"), url: function url(a) {
	      if (y(a)) return this.$$url;var b = Hg.exec(a);(b[1] || "" === a) && this.path(decodeURIComponent(b[1]));(b[2] || b[1] || "" === a) && this.search(b[3] || "");this.hash(b[5] || "");return this;
	    }, protocol: Hb("$$protocol"), host: Hb("$$host"), port: Hb("$$port"), path: md("$$path", function (a) {
	      a = null !== a ? a.toString() : "";return "/" == a.charAt(0) ? a : "/" + a;
	    }), search: function search(a, b) {
	      switch (arguments.length) {case 0:
	          return this.$$search;case 1:
	          if (G(a) || T(a)) a = a.toString(), this.$$search = Ac(a);else if (D(a)) a = pa(a, {}), q(a, function (b, c) {
	            null == b && delete a[c];
	          }), this.$$search = a;else throw Gb("isrcharg");break;default:
	          y(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b;}this.$$compose();return this;
	    }, hash: md("$$hash", function (a) {
	      return null !== a ? a.toString() : "";
	    }), replace: function replace() {
	      this.$$replace = !0;return this;
	    } };q([ld, hc, gc], function (a) {
	    a.prototype = Object.create(Ig);a.prototype.state = function (b) {
	      if (!arguments.length) return this.$$state;if (a !== gc || !this.$$html5) throw Gb("nostate");this.$$state = y(b) ? null : b;return this;
	    };
	  });var X = N("$parse"),
	      jg = Function.prototype.call,
	      kg = Function.prototype.apply,
	      lg = Function.prototype.bind,
	      Ob = U();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
	    Ob[a] = !0;
	  });var Jg = { n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"' },
	      jc = function jc(a) {
	    this.options = a;
	  };jc.prototype = { constructor: jc,
	    lex: function lex(a) {
	      this.text = a;this.index = 0;for (this.tokens = []; this.index < this.text.length;) {
	        if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a);else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();else if (this.is(a, "(){}[].,;:?")) this.tokens.push({ index: this.index, text: a }), this.index++;else if (this.isWhitespace(a)) this.index++;else {
	          var b = a + this.peek(),
	              d = b + this.peek(2),
	              c = Ob[b],
	              e = Ob[d];Ob[a] || c || e ? (a = e ? d : c ? b : a, this.tokens.push({ index: this.index, text: a, operator: !0 }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1);
	        }
	      }return this.tokens;
	    }, is: function is(a, b) {
	      return -1 !== b.indexOf(a);
	    }, peek: function peek(a) {
	      a = a || 1;return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
	    }, isNumber: function isNumber(a) {
	      return "0" <= a && "9" >= a && "string" === typeof a;
	    }, isWhitespace: function isWhitespace(a) {
	      return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\xA0" === a;
	    }, isIdentifierStart: function isIdentifierStart(a) {
	      return this.options.isIdentifierStart ? this.options.isIdentifierStart(a, this.codePointAt(a)) : this.isValidIdentifierStart(a);
	    }, isValidIdentifierStart: function isValidIdentifierStart(a) {
	      return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a;
	    }, isIdentifierContinue: function isIdentifierContinue(a) {
	      return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(a, this.codePointAt(a)) : this.isValidIdentifierContinue(a);
	    }, isValidIdentifierContinue: function isValidIdentifierContinue(a, b) {
	      return this.isValidIdentifierStart(a, b) || this.isNumber(a);
	    }, codePointAt: function codePointAt(a) {
	      return 1 === a.length ? a.charCodeAt(0) : (a.charCodeAt(0) << 10) + a.charCodeAt(1) - 56613888;
	    }, peekMultichar: function peekMultichar() {
	      var a = this.text.charAt(this.index),
	          b = this.peek();if (!b) return a;var d = a.charCodeAt(0),
	          c = b.charCodeAt(0);return 55296 <= d && 56319 >= d && 56320 <= c && 57343 >= c ? a + b : a;
	    }, isExpOperator: function isExpOperator(a) {
	      return "-" === a || "+" === a || this.isNumber(a);
	    }, throwError: function throwError(a, b, d) {
	      d = d || this.index;b = w(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;throw X("lexerr", a, b, this.text);
	    }, readNumber: function readNumber() {
	      for (var a = "", b = this.index; this.index < this.text.length;) {
	        var d = Q(this.text.charAt(this.index));if ("." == d || this.isNumber(d)) a += d;else {
	          var c = this.peek();if ("e" == d && this.isExpOperator(c)) a += d;else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" == a.charAt(a.length - 1)) a += d;else if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" != a.charAt(a.length - 1)) break;else this.throwError("Invalid exponent");
	        }this.index++;
	      }this.tokens.push({ index: b, text: a, constant: !0, value: Number(a) });
	    }, readIdent: function readIdent() {
	      var a = this.index;for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
	        var b = this.peekMultichar();if (!this.isIdentifierContinue(b)) break;this.index += b.length;
	      }this.tokens.push({ index: a, text: this.text.slice(a, this.index), identifier: !0 });
	    }, readString: function readString(a) {
	      var b = this.index;this.index++;for (var d = "", c = a, e = !1; this.index < this.text.length;) {
	        var f = this.text.charAt(this.index),
	            c = c + f;if (e) "u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + e + "]"), this.index += 4, d += String.fromCharCode(parseInt(e, 16))) : d += Jg[f] || f, e = !1;else if ("\\" === f) e = !0;else {
	          if (f === a) {
	            this.index++;this.tokens.push({ index: b, text: c, constant: !0, value: d });return;
	          }d += f;
	        }this.index++;
	      }this.throwError("Unterminated quote", b);
	    } };var s = function s(a, b) {
	    this.lexer = a;this.options = b;
	  };s.Program = "Program";s.ExpressionStatement = "ExpressionStatement";s.AssignmentExpression = "AssignmentExpression";s.ConditionalExpression = "ConditionalExpression";s.LogicalExpression = "LogicalExpression";s.BinaryExpression = "BinaryExpression";s.UnaryExpression = "UnaryExpression";
	  s.CallExpression = "CallExpression";s.MemberExpression = "MemberExpression";s.Identifier = "Identifier";s.Literal = "Literal";s.ArrayExpression = "ArrayExpression";s.Property = "Property";s.ObjectExpression = "ObjectExpression";s.ThisExpression = "ThisExpression";s.LocalsExpression = "LocalsExpression";s.NGValueParameter = "NGValueParameter";s.prototype = { ast: function ast(a) {
	      this.text = a;this.tokens = this.lexer.lex(a);a = this.program();0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);return a;
	    },
	    program: function program() {
	      for (var a = [];;) {
	        if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return { type: s.Program, body: a };
	      }
	    }, expressionStatement: function expressionStatement() {
	      return { type: s.ExpressionStatement, expression: this.filterChain() };
	    }, filterChain: function filterChain() {
	      for (var a = this.expression(); this.expect("|");) {
	        a = this.filter(a);
	      }return a;
	    }, expression: function expression() {
	      return this.assignment();
	    }, assignment: function assignment() {
	      var a = this.ternary();this.expect("=") && (a = { type: s.AssignmentExpression,
	        left: a, right: this.assignment(), operator: "=" });return a;
	    }, ternary: function ternary() {
	      var a = this.logicalOR(),
	          b,
	          d;return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), { type: s.ConditionalExpression, test: a, alternate: b, consequent: d }) : a;
	    }, logicalOR: function logicalOR() {
	      for (var a = this.logicalAND(); this.expect("||");) {
	        a = { type: s.LogicalExpression, operator: "||", left: a, right: this.logicalAND() };
	      }return a;
	    }, logicalAND: function logicalAND() {
	      for (var a = this.equality(); this.expect("&&");) {
	        a = { type: s.LogicalExpression,
	          operator: "&&", left: a, right: this.equality() };
	      }return a;
	    }, equality: function equality() {
	      for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!==");) {
	        a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.relational() };
	      }return a;
	    }, relational: function relational() {
	      for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");) {
	        a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.additive() };
	      }return a;
	    }, additive: function additive() {
	      for (var a = this.multiplicative(), b; b = this.expect("+", "-");) {
	        a = { type: s.BinaryExpression, operator: b.text,
	          left: a, right: this.multiplicative() };
	      }return a;
	    }, multiplicative: function multiplicative() {
	      for (var a = this.unary(), b; b = this.expect("*", "/", "%");) {
	        a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.unary() };
	      }return a;
	    }, unary: function unary() {
	      var a;return (a = this.expect("+", "-", "!")) ? { type: s.UnaryExpression, operator: a.text, prefix: !0, argument: this.unary() } : this.primary();
	    }, primary: function primary() {
	      var a;this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = pa(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? a = { type: s.Literal, value: this.options.literals[this.consume().text] } : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());for (var b; b = this.expect("(", "[", ".");) {
	        "(" === b.text ? (a = { type: s.CallExpression, callee: a, arguments: this.parseArguments() }, this.consume(")")) : "[" === b.text ? (a = { type: s.MemberExpression, object: a, property: this.expression(), computed: !0 }, this.consume("]")) : "." === b.text ? a = { type: s.MemberExpression, object: a, property: this.identifier(), computed: !1 } : this.throwError("IMPOSSIBLE");
	      }return a;
	    }, filter: function filter(a) {
	      a = [a];for (var b = { type: s.CallExpression, callee: this.identifier(), arguments: a, filter: !0 }; this.expect(":");) {
	        a.push(this.expression());
	      }return b;
	    }, parseArguments: function parseArguments() {
	      var a = [];if (")" !== this.peekToken().text) {
	        do {
	          a.push(this.filterChain());
	        } while (this.expect(","));
	      }return a;
	    }, identifier: function identifier() {
	      var a = this.consume();a.identifier || this.throwError("is not a valid identifier", a);return { type: s.Identifier, name: a.text };
	    }, constant: function constant() {
	      return { type: s.Literal, value: this.consume().value };
	    }, arrayDeclaration: function arrayDeclaration() {
	      var a = [];if ("]" !== this.peekToken().text) {
	        do {
	          if (this.peek("]")) break;a.push(this.expression());
	        } while (this.expect(","));
	      }this.consume("]");return { type: s.ArrayExpression, elements: a };
	    }, object: function object() {
	      var a = [],
	          b;if ("}" !== this.peekToken().text) {
	        do {
	          if (this.peek("}")) break;
	          b = { type: s.Property, kind: "init" };this.peek().constant ? (b.key = this.constant(), b.computed = !1, this.consume(":"), b.value = this.expression()) : this.peek().identifier ? (b.key = this.identifier(), b.computed = !1, this.peek(":") ? (this.consume(":"), b.value = this.expression()) : b.value = b.key) : this.peek("[") ? (this.consume("["), b.key = this.expression(), this.consume("]"), b.computed = !0, this.consume(":"), b.value = this.expression()) : this.throwError("invalid key", this.peek());a.push(b);
	        } while (this.expect(","));
	      }this.consume("}");
	      return { type: s.ObjectExpression, properties: a };
	    }, throwError: function throwError(a, b) {
	      throw X("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
	    }, consume: function consume(a) {
	      if (0 === this.tokens.length) throw X("ueoe", this.text);var b = this.expect(a);b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());return b;
	    }, peekToken: function peekToken() {
	      if (0 === this.tokens.length) throw X("ueoe", this.text);return this.tokens[0];
	    }, peek: function peek(a, b, d, c) {
	      return this.peekAhead(0, a, b, d, c);
	    }, peekAhead: function peekAhead(a, b, d, c, e) {
	      if (this.tokens.length > a) {
	        a = this.tokens[a];var f = a.text;if (f === b || f === d || f === c || f === e || !(b || d || c || e)) return a;
	      }return !1;
	    }, expect: function expect(a, b, d, c) {
	      return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1;
	    }, selfReferential: { "this": { type: s.ThisExpression }, $locals: { type: s.LocalsExpression } } };td.prototype = { compile: function compile(a, b) {
	      var d = this,
	          c = this.astBuilder.ast(a);this.state = { nextId: 0, filters: {}, expensiveChecks: b, fn: { vars: [], body: [], own: {} }, assign: { vars: [], body: [], own: {} }, inputs: [] };V(c, d.$filter);var e = "",
	          f;this.stage = "assign";
	      if (f = rd(c)) this.state.computing = "assign", e = this.nextId(), this.recurse(f, e), this.return_(e), e = "fn.assign=" + this.generateFunction("assign", "s,v,l");f = pd(c.body);d.stage = "inputs";q(f, function (a, b) {
	        var c = "fn" + b;d.state[c] = { vars: [], body: [], own: {} };d.state.computing = c;var e = d.nextId();d.recurse(a, e);d.return_(e);d.state.inputs.push(c);a.watchId = b;
	      });this.state.computing = "fn";this.stage = "main";this.recurse(c);e = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + e + this.watchFns() + "return fn;";e = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", e)(this.$filter, Sa, ra, nd, ig, Ib, mg, od, a);this.state = this.stage = void 0;e.literal = sd(c);e.constant = c.constant;return e;
	    }, USE: "use", STRICT: "strict", watchFns: function watchFns() {
	      var a = [],
	          b = this.state.inputs,
	          d = this;q(b, function (b) {
	        a.push("var " + b + "=" + d.generateFunction(b, "s"));
	      });b.length && a.push("fn.inputs=[" + b.join(",") + "];");
	      return a.join("");
	    }, generateFunction: function generateFunction(a, b) {
	      return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};";
	    }, filterPrefix: function filterPrefix() {
	      var a = [],
	          b = this;q(this.state.filters, function (d, c) {
	        a.push(d + "=$filter(" + b.escape(c) + ")");
	      });return a.length ? "var " + a.join(",") + ";" : "";
	    }, varsPrefix: function varsPrefix(a) {
	      return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : "";
	    }, body: function body(a) {
	      return this.state[a].body.join("");
	    }, recurse: function recurse(a, b, d, c, e, f) {
	      var g,
	          h,
	          k = this,
	          l,
	          m,
	          n;c = c || A;if (!f && w(a.watchId)) b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, e, !0));else switch (a.type) {case s.Program:
	          q(a.body, function (b, c) {
	            k.recurse(b.expression, void 0, void 0, function (a) {
	              h = a;
	            });c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h);
	          });break;case s.Literal:
	          m = this.escape(a.value);this.assign(b, m);c(m);break;case s.UnaryExpression:
	          this.recurse(a.argument, void 0, void 0, function (a) {
	            h = a;
	          });m = a.operator + "(" + this.ifDefined(h, 0) + ")";this.assign(b, m);
	          c(m);break;case s.BinaryExpression:
	          this.recurse(a.left, void 0, void 0, function (a) {
	            g = a;
	          });this.recurse(a.right, void 0, void 0, function (a) {
	            h = a;
	          });m = "+" === a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : "(" + g + ")" + a.operator + "(" + h + ")";this.assign(b, m);c(m);break;case s.LogicalExpression:
	          b = b || this.nextId();k.recurse(a.left, b);k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));c(b);break;case s.ConditionalExpression:
	          b = b || this.nextId();k.recurse(a.test, b);k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));c(b);break;case s.Identifier:
	          b = b || this.nextId();d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name);Sa(a.name);k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function () {
	            k.if_("inputs" === k.stage || "s", function () {
	              e && 1 !== e && k.if_(k.not(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));k.assign(b, k.nonComputedMember("s", a.name));
	            });
	          }, b && k.lazyAssign(b, k.nonComputedMember("l", a.name)));(k.state.expensiveChecks || Jb(a.name)) && k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:
	          g = d && (d.context = this.nextId()) || this.nextId();b = b || this.nextId();k.recurse(a.object, g, void 0, function () {
	            k.if_(k.notNull(g), function () {
	              e && 1 !== e && k.addEnsureSafeAssignContext(g);if (a.computed) h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), k.addEnsureSafeMemberName(h), e && 1 !== e && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), "{}")), m = k.ensureSafeObject(k.computedMember(g, h)), k.assign(b, m), d && (d.computed = !0, d.name = h);else {
	                Sa(a.property.name);e && 1 !== e && k.if_(k.not(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}"));m = k.nonComputedMember(g, a.property.name);if (k.state.expensiveChecks || Jb(a.property.name)) m = k.ensureSafeObject(m);k.assign(b, m);d && (d.computed = !1, d.name = a.property.name);
	              }
	            }, function () {
	              k.assign(b, "undefined");
	            });c(b);
	          }, !!e);break;case s.CallExpression:
	          b = b || this.nextId();
	          a.filter ? (h = k.filter(a.callee.name), l = [], q(a.arguments, function (a) {
	            var b = k.nextId();k.recurse(a, b);l.push(b);
	          }), m = h + "(" + l.join(",") + ")", k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, l = [], k.recurse(a.callee, h, g, function () {
	            k.if_(k.notNull(h), function () {
	              k.addEnsureSafeFunction(h);q(a.arguments, function (a) {
	                k.recurse(a, k.nextId(), void 0, function (a) {
	                  l.push(k.ensureSafeObject(a));
	                });
	              });g.name ? (k.state.expensiveChecks || k.addEnsureSafeObject(g.context), m = k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")") : m = h + "(" + l.join(",") + ")";m = k.ensureSafeObject(m);k.assign(b, m);
	            }, function () {
	              k.assign(b, "undefined");
	            });c(b);
	          }));break;case s.AssignmentExpression:
	          h = this.nextId();g = {};if (!qd(a.left)) throw X("lval");this.recurse(a.left, void 0, g, function () {
	            k.if_(k.notNull(g.context), function () {
	              k.recurse(a.right, h);k.addEnsureSafeObject(k.member(g.context, g.name, g.computed));k.addEnsureSafeAssignContext(g.context);m = k.member(g.context, g.name, g.computed) + a.operator + h;k.assign(b, m);c(b || m);
	            });
	          }, 1);break;case s.ArrayExpression:
	          l = [];q(a.elements, function (a) {
	            k.recurse(a, k.nextId(), void 0, function (a) {
	              l.push(a);
	            });
	          });m = "[" + l.join(",") + "]";this.assign(b, m);c(m);break;case s.ObjectExpression:
	          l = [];n = !1;q(a.properties, function (a) {
	            a.computed && (n = !0);
	          });n ? (b = b || this.nextId(), this.assign(b, "{}"), q(a.properties, function (a) {
	            a.computed ? (g = k.nextId(), k.recurse(a.key, g)) : g = a.key.type === s.Identifier ? a.key.name : "" + a.key.value;h = k.nextId();k.recurse(a.value, h);k.assign(k.member(b, g, a.computed), h);
	          })) : (q(a.properties, function (b) {
	            k.recurse(b.value, a.constant ? void 0 : k.nextId(), void 0, function (a) {
	              l.push(k.escape(b.key.type === s.Identifier ? b.key.name : "" + b.key.value) + ":" + a);
	            });
	          }), m = "{" + l.join(",") + "}", this.assign(b, m));c(b || m);break;case s.ThisExpression:
	          this.assign(b, "s");c("s");break;case s.LocalsExpression:
	          this.assign(b, "l");c("l");break;case s.NGValueParameter:
	          this.assign(b, "v"), c("v");}
	    }, getHasOwnProperty: function getHasOwnProperty(a, b) {
	      var d = a + "." + b,
	          c = this.current().own;c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")"));return c[d];
	    },
	    assign: function assign(a, b) {
	      if (a) return this.current().body.push(a, "=", b, ";"), a;
	    }, filter: function filter(a) {
	      this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));return this.state.filters[a];
	    }, ifDefined: function ifDefined(a, b) {
	      return "ifDefined(" + a + "," + this.escape(b) + ")";
	    }, plus: function plus(a, b) {
	      return "plus(" + a + "," + b + ")";
	    }, return_: function return_(a) {
	      this.current().body.push("return ", a, ";");
	    }, if_: function if_(a, b, d) {
	      if (!0 === a) b();else {
	        var c = this.current().body;c.push("if(", a, "){");b();c.push("}");d && (c.push("else{"), d(), c.push("}"));
	      }
	    }, not: function not(a) {
	      return "!(" + a + ")";
	    }, notNull: function notNull(a) {
	      return a + "!=null";
	    }, nonComputedMember: function nonComputedMember(a, b) {
	      var d = /[^$_a-zA-Z0-9]/g;return (/[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b) ? a + "." + b : a + '["' + b.replace(d, this.stringEscapeFn) + '"]'
	      );
	    }, computedMember: function computedMember(a, b) {
	      return a + "[" + b + "]";
	    }, member: function member(a, b, d) {
	      return d ? this.computedMember(a, b) : this.nonComputedMember(a, b);
	    }, addEnsureSafeObject: function addEnsureSafeObject(a) {
	      this.current().body.push(this.ensureSafeObject(a), ";");
	    }, addEnsureSafeMemberName: function addEnsureSafeMemberName(a) {
	      this.current().body.push(this.ensureSafeMemberName(a), ";");
	    }, addEnsureSafeFunction: function addEnsureSafeFunction(a) {
	      this.current().body.push(this.ensureSafeFunction(a), ";");
	    }, addEnsureSafeAssignContext: function addEnsureSafeAssignContext(a) {
	      this.current().body.push(this.ensureSafeAssignContext(a), ";");
	    }, ensureSafeObject: function ensureSafeObject(a) {
	      return "ensureSafeObject(" + a + ",text)";
	    }, ensureSafeMemberName: function ensureSafeMemberName(a) {
	      return "ensureSafeMemberName(" + a + ",text)";
	    }, ensureSafeFunction: function ensureSafeFunction(a) {
	      return "ensureSafeFunction(" + a + ",text)";
	    }, getStringValue: function getStringValue(a) {
	      this.assign(a, "getStringValue(" + a + ")");
	    }, ensureSafeAssignContext: function ensureSafeAssignContext(a) {
	      return "ensureSafeAssignContext(" + a + ",text)";
	    }, lazyRecurse: function lazyRecurse(a, b, d, c, e, f) {
	      var g = this;return function () {
	        g.recurse(a, b, d, c, e, f);
	      };
	    }, lazyAssign: function lazyAssign(a, b) {
	      var d = this;return function () {
	        d.assign(a, b);
	      };
	    }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function stringEscapeFn(a) {
	      return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
	    }, escape: function escape(a) {
	      if (G(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";if (T(a)) return a.toString();if (!0 === a) return "true";if (!1 === a) return "false";if (null === a) return "null";if ("undefined" === typeof a) return "undefined";throw X("esc");
	    }, nextId: function nextId(a, b) {
	      var d = "v" + this.state.nextId++;a || this.current().vars.push(d + (b ? "=" + b : ""));return d;
	    }, current: function current() {
	      return this.state[this.state.computing];
	    } };ud.prototype = { compile: function compile(a, b) {
	      var d = this,
	          c = this.astBuilder.ast(a);this.expression = a;this.expensiveChecks = b;V(c, d.$filter);var e, f;if (e = rd(c)) f = this.recurse(e);e = pd(c.body);var g;e && (g = [], q(e, function (a, b) {
	        var c = d.recurse(a);a.input = c;g.push(c);a.watchId = b;
	      }));var h = [];q(c.body, function (a) {
	        h.push(d.recurse(a.expression));
	      });
	      e = 0 === c.body.length ? A : 1 === c.body.length ? h[0] : function (a, b) {
	        var c;q(h, function (d) {
	          c = d(a, b);
	        });return c;
	      };f && (e.assign = function (a, b, c) {
	        return f(a, c, b);
	      });g && (e.inputs = g);e.literal = sd(c);e.constant = c.constant;return e;
	    }, recurse: function recurse(a, b, d) {
	      var c,
	          e,
	          f = this,
	          g;if (a.input) return this.inputs(a.input, a.watchId);switch (a.type) {case s.Literal:
	          return this.value(a.value, b);case s.UnaryExpression:
	          return e = this.recurse(a.argument), this["unary" + a.operator](e, b);case s.BinaryExpression:
	          return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);case s.LogicalExpression:
	          return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);case s.ConditionalExpression:
	          return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);case s.Identifier:
	          return Sa(a.name, f.expression), f.identifier(a.name, f.expensiveChecks || Jb(a.name), b, d, f.expression);case s.MemberExpression:
	          return c = this.recurse(a.object, !1, !!d), a.computed || (Sa(a.property.name, f.expression), e = a.property.name), a.computed && (e = this.recurse(a.property)), a.computed ? this.computedMember(c, e, b, d, f.expression) : this.nonComputedMember(c, e, f.expensiveChecks, b, d, f.expression);case s.CallExpression:
	          return g = [], q(a.arguments, function (a) {
	            g.push(f.recurse(a));
	          }), a.filter && (e = this.$filter(a.callee.name)), a.filter || (e = this.recurse(a.callee, !0)), a.filter ? function (a, c, d, f) {
	            for (var n = [], p = 0; p < g.length; ++p) {
	              n.push(g[p](a, c, d, f));
	            }a = e.apply(void 0, n, f);return b ? { context: void 0, name: void 0, value: a } : a;
	          } : function (a, c, d, m) {
	            var n = e(a, c, d, m),
	                p;if (null != n.value) {
	              ra(n.context, f.expression);nd(n.value, f.expression);p = [];for (var q = 0; q < g.length; ++q) {
	                p.push(ra(g[q](a, c, d, m), f.expression));
	              }p = ra(n.value.apply(n.context, p), f.expression);
	            }return b ? { value: p } : p;
	          };case s.AssignmentExpression:
	          return c = this.recurse(a.left, !0, 1), e = this.recurse(a.right), function (a, d, g, m) {
	            var n = c(a, d, g, m);a = e(a, d, g, m);ra(n.value, f.expression);Ib(n.context);n.context[n.name] = a;return b ? { value: a } : a;
	          };case s.ArrayExpression:
	          return g = [], q(a.elements, function (a) {
	            g.push(f.recurse(a));
	          }), function (a, c, d, e) {
	            for (var f = [], p = 0; p < g.length; ++p) {
	              f.push(g[p](a, c, d, e));
	            }return b ? { value: f } : f;
	          };case s.ObjectExpression:
	          return g = [], q(a.properties, function (a) {
	            a.computed ? g.push({ key: f.recurse(a.key), computed: !0, value: f.recurse(a.value) }) : g.push({ key: a.key.type === s.Identifier ? a.key.name : "" + a.key.value, computed: !1, value: f.recurse(a.value) });
	          }), function (a, c, d, e) {
	            for (var f = {}, p = 0; p < g.length; ++p) {
	              g[p].computed ? f[g[p].key(a, c, d, e)] = g[p].value(a, c, d, e) : f[g[p].key] = g[p].value(a, c, d, e);
	            }return b ? { value: f } : f;
	          };case s.ThisExpression:
	          return function (a) {
	            return b ? { value: a } : a;
	          };case s.LocalsExpression:
	          return function (a, c) {
	            return b ? { value: c } : c;
	          };case s.NGValueParameter:
	          return function (a, c, d) {
	            return b ? { value: d } : d;
	          };}
	    }, "unary+": function unary(a, b) {
	      return function (d, c, e, f) {
	        d = a(d, c, e, f);d = w(d) ? +d : 0;return b ? { value: d } : d;
	      };
	    }, "unary-": function unary(a, b) {
	      return function (d, c, e, f) {
	        d = a(d, c, e, f);d = w(d) ? -d : 0;return b ? { value: d } : d;
	      };
	    }, "unary!": function unary(a, b) {
	      return function (d, c, e, f) {
	        d = !a(d, c, e, f);return b ? { value: d } : d;
	      };
	    }, "binary+": function binary(a, b, d) {
	      return function (c, e, f, g) {
	        var h = a(c, e, f, g);c = b(c, e, f, g);h = od(h, c);return d ? { value: h } : h;
	      };
	    }, "binary-": function binary(a, b, d) {
	      return function (c, e, f, g) {
	        var h = a(c, e, f, g);c = b(c, e, f, g);h = (w(h) ? h : 0) - (w(c) ? c : 0);return d ? { value: h } : h;
	      };
	    }, "binary*": function binary(a, b, d) {
	      return function (c, e, f, g) {
	        c = a(c, e, f, g) * b(c, e, f, g);return d ? { value: c } : c;
	      };
	    }, "binary/": function binary(a, b, d) {
	      return function (c, e, f, g) {
	        c = a(c, e, f, g) / b(c, e, f, g);return d ? { value: c } : c;
	      };
	    }, "binary%": function binary(a, b, d) {
	      return function (c, e, f, g) {
	        c = a(c, e, f, g) % b(c, e, f, g);return d ? { value: c } : c;
	      };
	    }, "binary===": function binary(a, b, d) {
	      return function (c, e, f, g) {
	        c = a(c, e, f, g) === b(c, e, f, g);return d ? { value: c } : c;
	      };
	    }, "binary!==": function binary(a, b, d) {
	      return function (c, e, f, g) {
	        c = a(c, e, f, g) !== b(c, e, f, g);return d ? { value: c } : c;
	      };
	    }, "binary==": function binary(a, b, d) {
	      return function (c, e, f, g) {
	        c = a(c, e, f, g) == b(c, e, f, g);return d ? { value: c } : c;
	      };
	    }, "binary!=": function binary(a, b, d) {
	      return function (c, e, f, g) {
	        c = a(c, e, f, g) != b(c, e, f, g);return d ? { value: c } : c;
	      };
	    }, "binary<": function binary(a, b, d) {
	      return function (c, e, f, g) {
	        c = a(c, e, f, g) < b(c, e, f, g);return d ? { value: c } : c;
	      };
	    }, "binary>": function binary(a, b, d) {
	      return function (c, e, f, g) {
	        c = a(c, e, f, g) > b(c, e, f, g);return d ? { value: c } : c;
	      };
	    }, "binary<=": function binary(a, b, d) {
	      return function (c, e, f, g) {
	        c = a(c, e, f, g) <= b(c, e, f, g);return d ? { value: c } : c;
	      };
	    }, "binary>=": function binary(a, b, d) {
	      return function (c, e, f, g) {
	        c = a(c, e, f, g) >= b(c, e, f, g);return d ? { value: c } : c;
	      };
	    }, "binary&&": function binary(a, b, d) {
	      return function (c, e, f, g) {
	        c = a(c, e, f, g) && b(c, e, f, g);return d ? { value: c } : c;
	      };
	    }, "binary||": function binary(a, b, d) {
	      return function (c, e, f, g) {
	        c = a(c, e, f, g) || b(c, e, f, g);return d ? { value: c } : c;
	      };
	    }, "ternary?:": function ternary(a, b, d, c) {
	      return function (e, f, g, h) {
	        e = a(e, f, g, h) ? b(e, f, g, h) : d(e, f, g, h);return c ? { value: e } : e;
	      };
	    }, value: function value(a, b) {
	      return function () {
	        return b ? { context: void 0, name: void 0, value: a } : a;
	      };
	    }, identifier: function identifier(a, b, d, c, e) {
	      return function (f, g, h, k) {
	        f = g && a in g ? g : f;c && 1 !== c && f && !f[a] && (f[a] = {});g = f ? f[a] : void 0;b && ra(g, e);return d ? { context: f, name: a, value: g } : g;
	      };
	    }, computedMember: function computedMember(a, b, d, c, e) {
	      return function (f, g, h, k) {
	        var l = a(f, g, h, k),
	            m,
	            n;null != l && (m = b(f, g, h, k), m += "", Sa(m, e), c && 1 !== c && (Ib(l), l && !l[m] && (l[m] = {})), n = l[m], ra(n, e));return d ? { context: l, name: m, value: n } : n;
	      };
	    }, nonComputedMember: function nonComputedMember(a, b, d, c, e, f) {
	      return function (g, h, k, l) {
	        g = a(g, h, k, l);e && 1 !== e && (Ib(g), g && !g[b] && (g[b] = {}));h = null != g ? g[b] : void 0;(d || Jb(b)) && ra(h, f);return c ? { context: g, name: b, value: h } : h;
	      };
	    }, inputs: function inputs(a, b) {
	      return function (d, c, e, f) {
	        return f ? f[b] : a(d, c, e);
	      };
	    } };var kc = function kc(a, b, d) {
	    this.lexer = a;this.$filter = b;this.options = d;this.ast = new s(a, d);this.astCompiler = d.csp ? new ud(this.ast, b) : new td(this.ast, b);
	  };kc.prototype = { constructor: kc, parse: function parse(a) {
	      return this.astCompiler.compile(a, this.options.expensiveChecks);
	    } };var ng = Object.prototype.valueOf,
	      sa = N("$sce"),
	      la = { HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js" },
	      pg = N("$compile"),
	      $ = C.document.createElement("a"),
	      yd = Y(C.location.href);zd.$inject = ["$document"];Mc.$inject = ["$provide"];var Gd = 22,
	      Fd = ".",
	      mc = "0";Ad.$inject = ["$locale"];Cd.$inject = ["$locale"];var Ag = { yyyy: ba("FullYear", 4, 0, !1, !0), yy: ba("FullYear", 2, 0, !0, !0), y: ba("FullYear", 1, 0, !1, !0), MMMM: kb("Month"), MMM: kb("Month", !0), MM: ba("Month", 2, 1), M: ba("Month", 1, 1), LLLL: kb("Month", !1, !0), dd: ba("Date", 2), d: ba("Date", 1), HH: ba("Hours", 2), H: ba("Hours", 1), hh: ba("Hours", 2, -12), h: ba("Hours", 1, -12), mm: ba("Minutes", 2), m: ba("Minutes", 1), ss: ba("Seconds", 2), s: ba("Seconds", 1), sss: ba("Milliseconds", 3), EEEE: kb("Day"), EEE: kb("Day", !0), a: function a(_a, b) {
	      return 12 > _a.getHours() ? b.AMPMS[0] : b.AMPMS[1];
	    }, Z: function Z(a, b, d) {
	      a = -1 * d;return a = (0 <= a ? "+" : "") + (Kb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Kb(Math.abs(a % 60), 2));
	    }, ww: Id(2), w: Id(1), G: nc, GG: nc, GGG: nc, GGGG: function GGGG(a, b) {
	      return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1];
	    } },
	      zg = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
	      yg = /^\-?\d+$/;Bd.$inject = ["$locale"];var tg = ha(Q),
	      ug = ha(ub);Dd.$inject = ["$parse"];var oe = ha({ restrict: "E", compile: function compile(a, b) {
	      if (!b.href && !b.xlinkHref) return function (a, b) {
	        if ("a" === b[0].nodeName.toLowerCase()) {
	          var e = "[object SVGAnimatedString]" === ma.call(b.prop("href")) ? "xlink:href" : "href";b.on("click", function (a) {
	            b.attr(e) || a.preventDefault();
	          });
	        }
	      };
	    } }),
	      vb = {};q(Eb, function (a, b) {
	    function d(a, d, e) {
	      a.$watch(e[c], function (a) {
	        e.$set(b, !!a);
	      });
	    }if ("multiple" != a) {
	      var c = Aa("ng-" + b),
	          e = d;"checked" === a && (e = function e(a, b, _e) {
	        _e.ngModel !== _e[c] && d(a, b, _e);
	      });vb[c] = function () {
	        return { restrict: "A", priority: 100, link: e };
	      };
	    }
	  });q(bd, function (a, b) {
	    vb[b] = function () {
	      return { priority: 100, link: function link(a, c, e) {
	          if ("ngPattern" === b && "/" == e.ngPattern.charAt(0) && (c = e.ngPattern.match(Cg))) {
	            e.$set("ngPattern", new RegExp(c[1], c[2]));return;
	          }a.$watch(e[b], function (a) {
	            e.$set(b, a);
	          });
	        } };
	    };
	  });q(["src", "srcset", "href"], function (a) {
	    var b = Aa("ng-" + a);vb[b] = function () {
	      return { priority: 99, link: function link(d, c, e) {
	          var f = a,
	              g = a;"href" === a && "[object SVGAnimatedString]" === ma.call(c.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null);e.$observe(b, function (b) {
	            b ? (e.$set(g, b), Ea && f && c.prop(f, e[g])) : "href" === a && e.$set(g, null);
	          });
	        } };
	    };
	  });var Lb = { $addControl: A, $$renameControl: function $$renameControl(a, b) {
	      a.$name = b;
	    }, $removeControl: A, $setValidity: A,
	    $setDirty: A, $setPristine: A, $setSubmitted: A };Jd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];var Sd = function Sd(a) {
	    return ["$timeout", "$parse", function (b, d) {
	      function c(a) {
	        return "" === a ? d('this[""]').assign : d(a).assign || A;
	      }return { name: "form", restrict: a ? "EAC" : "E", require: ["form", "^^?form"], controller: Jd, compile: function compile(d, f) {
	          d.addClass(Ua).addClass(ob);var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;return { pre: function pre(a, d, e, f) {
	              var n = f[0];if (!("action" in e)) {
	                var p = function p(b) {
	                  a.$apply(function () {
	                    n.$commitViewValue();
	                    n.$setSubmitted();
	                  });b.preventDefault();
	                };d[0].addEventListener("submit", p, !1);d.on("$destroy", function () {
	                  b(function () {
	                    d[0].removeEventListener("submit", p, !1);
	                  }, 0, !1);
	                });
	              }(f[1] || n.$$parentForm).$addControl(n);var q = g ? c(n.$name) : A;g && (q(a, n), e.$observe(g, function (b) {
	                n.$name !== b && (q(a, void 0), n.$$parentForm.$$renameControl(n, b), q = c(n.$name), q(a, n));
	              }));d.on("$destroy", function () {
	                n.$$parentForm.$removeControl(n);q(a, void 0);S(n, Lb);
	              });
	            } };
	        } };
	    }];
	  },
	      pe = Sd(),
	      Ce = Sd(!0),
	      Bg = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
	      Kg = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
	      Lg = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
	      Mg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
	      Td = /^(\d{4,})-(\d{2})-(\d{2})$/,
	      Ud = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
	      rc = /^(\d{4,})-W(\d\d)$/,
	      Vd = /^(\d{4,})-(\d\d)$/,
	      Wd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
	      Ld = U();q(["date", "datetime-local", "month", "time", "week"], function (a) {
	    Ld[a] = !0;
	  });var Xd = { text: function text(a, b, d, c, e, f) {
	      lb(a, b, d, c, e, f);pc(c);
	    }, date: mb("date", Td, Nb(Td, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"), "datetime-local": mb("datetimelocal", Ud, Nb(Ud, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"), time: mb("time", Wd, Nb(Wd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"), week: mb("week", rc, function (a, b) {
	      if (da(a)) return a;if (G(a)) {
	        rc.lastIndex = 0;var d = rc.exec(a);
	        if (d) {
	          var c = +d[1],
	              e = +d[2],
	              f = d = 0,
	              g = 0,
	              h = 0,
	              k = Hd(c),
	              e = 7 * (e - 1);b && (d = b.getHours(), f = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds());return new Date(c, 0, k.getDate() + e, d, f, g, h);
	        }
	      }return NaN;
	    }, "yyyy-Www"), month: mb("month", Vd, Nb(Vd, ["yyyy", "MM"]), "yyyy-MM"), number: function number(a, b, d, c, e, f) {
	      Md(a, b, d, c);lb(a, b, d, c, e, f);c.$$parserName = "number";c.$parsers.push(function (a) {
	        if (c.$isEmpty(a)) return null;if (Mg.test(a)) return parseFloat(a);
	      });c.$formatters.push(function (a) {
	        if (!c.$isEmpty(a)) {
	          if (!T(a)) throw nb("numfmt", a);a = a.toString();
	        }return a;
	      });if (w(d.min) || d.ngMin) {
	        var g;c.$validators.min = function (a) {
	          return c.$isEmpty(a) || y(g) || a >= g;
	        };d.$observe("min", function (a) {
	          w(a) && !T(a) && (a = parseFloat(a));g = T(a) && !isNaN(a) ? a : void 0;c.$validate();
	        });
	      }if (w(d.max) || d.ngMax) {
	        var h;c.$validators.max = function (a) {
	          return c.$isEmpty(a) || y(h) || a <= h;
	        };d.$observe("max", function (a) {
	          w(a) && !T(a) && (a = parseFloat(a));h = T(a) && !isNaN(a) ? a : void 0;c.$validate();
	        });
	      }
	    }, url: function url(a, b, d, c, e, f) {
	      lb(a, b, d, c, e, f);pc(c);c.$$parserName = "url";c.$validators.url = function (a, b) {
	        var d = a || b;return c.$isEmpty(d) || Kg.test(d);
	      };
	    }, email: function email(a, b, d, c, e, f) {
	      lb(a, b, d, c, e, f);pc(c);c.$$parserName = "email";c.$validators.email = function (a, b) {
	        var d = a || b;return c.$isEmpty(d) || Lg.test(d);
	      };
	    }, radio: function radio(a, b, d, c) {
	      y(d.name) && b.attr("name", ++pb);b.on("click", function (a) {
	        b[0].checked && c.$setViewValue(d.value, a && a.type);
	      });c.$render = function () {
	        b[0].checked = d.value == c.$viewValue;
	      };d.$observe("value", c.$render);
	    }, checkbox: function checkbox(a, b, d, c, e, f, g, h) {
	      var k = Nd(h, a, "ngTrueValue", d.ngTrueValue, !0),
	          l = Nd(h, a, "ngFalseValue", d.ngFalseValue, !1);b.on("click", function (a) {
	        c.$setViewValue(b[0].checked, a && a.type);
	      });c.$render = function () {
	        b[0].checked = c.$viewValue;
	      };c.$isEmpty = function (a) {
	        return !1 === a;
	      };c.$formatters.push(function (a) {
	        return na(a, k);
	      });c.$parsers.push(function (a) {
	        return a ? k : l;
	      });
	    }, hidden: A, button: A, submit: A, reset: A, file: A },
	      Gc = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, d, c) {
	    return { restrict: "E", require: ["?ngModel"], link: { pre: function pre(e, f, g, h) {
	          h[0] && (Xd[Q(g.type)] || Xd.text)(e, f, g, h[0], b, a, d, c);
	        } } };
	  }],
	      Ng = /^(true|false|\d+)$/,
	      Ue = function Ue() {
	    return { restrict: "A", priority: 100, compile: function compile(a, b) {
	        return Ng.test(b.ngValue) ? function (a, b, e) {
	          e.$set("value", a.$eval(e.ngValue));
	        } : function (a, b, e) {
	          a.$watch(e.ngValue, function (a) {
	            e.$set("value", a);
	          });
	        };
	      } };
	  },
	      ue = ["$compile", function (a) {
	    return { restrict: "AC", compile: function compile(b) {
	        a.$$addBindingClass(b);return function (b, c, e) {
	          a.$$addBindingInfo(c, e.ngBind);c = c[0];b.$watch(e.ngBind, function (a) {
	            c.textContent = y(a) ? "" : a;
	          });
	        };
	      } };
	  }],
	      we = ["$interpolate", "$compile", function (a, b) {
	    return { compile: function compile(d) {
	        b.$$addBindingClass(d);return function (c, d, f) {
	          c = a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d, c.expressions);d = d[0];f.$observe("ngBindTemplate", function (a) {
	            d.textContent = y(a) ? "" : a;
	          });
	        };
	      } };
	  }],
	      ve = ["$sce", "$parse", "$compile", function (a, b, d) {
	    return { restrict: "A", compile: function compile(c, e) {
	        var f = b(e.ngBindHtml),
	            g = b(e.ngBindHtml, function (b) {
	          return a.valueOf(b);
	        });d.$$addBindingClass(c);return function (b, c, e) {
	          d.$$addBindingInfo(c, e.ngBindHtml);b.$watch(g, function () {
	            var d = f(b);c.html(a.getTrustedHtml(d) || "");
	          });
	        };
	      } };
	  }],
	      Te = ha({ restrict: "A", require: "ngModel", link: function link(a, b, d, c) {
	      c.$viewChangeListeners.push(function () {
	        a.$eval(d.ngChange);
	      });
	    } }),
	      xe = qc("", !0),
	      ze = qc("Odd", 0),
	      ye = qc("Even", 1),
	      Ae = Ta({ compile: function compile(a, b) {
	      b.$set("ngCloak", void 0);a.removeClass("ng-cloak");
	    } }),
	      Be = [function () {
	    return { restrict: "A", scope: !0, controller: "@", priority: 500 };
	  }],
	      Lc = {},
	      Og = { blur: !0, focus: !0 };q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
	    var b = Aa("ng-" + a);Lc[b] = ["$parse", "$rootScope", function (d, c) {
	      return { restrict: "A", compile: function compile(e, f) {
	          var g = d(f[b], null, !0);return function (b, d) {
	            d.on(a, function (d) {
	              var e = function e() {
	                g(b, { $event: d });
	              };Og[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e);
	            });
	          };
	        } };
	    }];
	  });var Ee = ["$animate", "$compile", function (a, b) {
	    return { multiElement: !0, transclude: "element", priority: 600, terminal: !0, restrict: "A", $$tlb: !0, link: function link(d, c, e, f, g) {
	        var h, k, l;d.$watch(e.ngIf, function (d) {
	          d ? k || g(function (d, f) {
	            k = f;d[d.length++] = b.$$createComment("end ngIf", e.ngIf);h = { clone: d };a.enter(d, c.parent(), c);
	          }) : (l && (l.remove(), l = null), k && (k.$destroy(), k = null), h && (l = tb(h.clone), a.leave(l).then(function () {
	            l = null;
	          }), h = null));
	        });
	      } };
	  }],
	      Fe = ["$templateRequest", "$anchorScroll", "$animate", function (a, b, d) {
	    return { restrict: "ECA", priority: 400, terminal: !0, transclude: "element", controller: ca.noop, compile: function compile(c, e) {
	        var f = e.ngInclude || e.src,
	            g = e.onload || "",
	            h = e.autoscroll;return function (c, e, m, n, p) {
	          var q = 0,
	              s,
	              B,
	              r,
	              y = function y() {
	            B && (B.remove(), B = null);s && (s.$destroy(), s = null);r && (d.leave(r).then(function () {
	              B = null;
	            }), B = r, r = null);
	          };c.$watch(f, function (f) {
	            var m = function m() {
	              !w(h) || h && !c.$eval(h) || b();
	            },
	                t = ++q;f ? (a(f, !0).then(function (a) {
	              if (!c.$$destroyed && t === q) {
	                var b = c.$new();n.template = a;a = p(b, function (a) {
	                  y();d.enter(a, null, e).then(m);
	                });s = b;r = a;s.$emit("$includeContentLoaded", f);c.$eval(g);
	              }
	            }, function () {
	              c.$$destroyed || t !== q || (y(), c.$emit("$includeContentError", f));
	            }), c.$emit("$includeContentRequested", f)) : (y(), n.template = null);
	          });
	        };
	      } };
	  }],
	      We = ["$compile", function (a) {
	    return { restrict: "ECA",
	      priority: -400, require: "ngInclude", link: function link(b, d, c, e) {
	        ma.call(d[0]).match(/SVG/) ? (d.empty(), a(Oc(e.template, C.document).childNodes)(b, function (a) {
	          d.append(a);
	        }, { futureParentElement: d })) : (d.html(e.template), a(d.contents())(b));
	      } };
	  }],
	      Ge = Ta({ priority: 450, compile: function compile() {
	      return { pre: function pre(a, b, d) {
	          a.$eval(d.ngInit);
	        } };
	    } }),
	      Se = function Se() {
	    return { restrict: "A", priority: 100, require: "ngModel", link: function link(a, b, d, c) {
	        var e = b.attr(d.$attr.ngList) || ", ",
	            f = "false" !== d.ngTrim,
	            g = f ? W(e) : e;c.$parsers.push(function (a) {
	          if (!y(a)) {
	            var b = [];a && q(a.split(g), function (a) {
	              a && b.push(f ? W(a) : a);
	            });return b;
	          }
	        });c.$formatters.push(function (a) {
	          if (L(a)) return a.join(e);
	        });c.$isEmpty = function (a) {
	          return !a || !a.length;
	        };
	      } };
	  },
	      ob = "ng-valid",
	      Od = "ng-invalid",
	      Ua = "ng-pristine",
	      Mb = "ng-dirty",
	      Qd = "ng-pending",
	      nb = N("ngModel"),
	      Pg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, b, d, c, e, f, g, h, k, l) {
	    this.$modelValue = this.$viewValue = Number.NaN;this.$$rawModelValue = void 0;this.$validators = {};
	    this.$asyncValidators = {};this.$parsers = [];this.$formatters = [];this.$viewChangeListeners = [];this.$untouched = !0;this.$touched = !1;this.$pristine = !0;this.$dirty = !1;this.$valid = !0;this.$invalid = !1;this.$error = {};this.$$success = {};this.$pending = void 0;this.$name = l(d.name || "", !1)(a);this.$$parentForm = Lb;var m = e(d.ngModel),
	        n = m.assign,
	        p = m,
	        u = n,
	        s = null,
	        B,
	        r = this;this.$$setOptions = function (a) {
	      if ((r.$options = a) && a.getterSetter) {
	        var b = e(d.ngModel + "()"),
	            f = e(d.ngModel + "($$$p)");p = function p(a) {
	          var c = m(a);z(c) && (c = b(a));
	          return c;
	        };u = function u(a, b) {
	          z(m(a)) ? f(a, { $$$p: b }) : n(a, b);
	        };
	      } else if (!m.assign) throw nb("nonassign", d.ngModel, ya(c));
	    };this.$render = A;this.$isEmpty = function (a) {
	      return y(a) || "" === a || null === a || a !== a;
	    };this.$$updateEmptyClasses = function (a) {
	      r.$isEmpty(a) ? (f.removeClass(c, "ng-not-empty"), f.addClass(c, "ng-empty")) : (f.removeClass(c, "ng-empty"), f.addClass(c, "ng-not-empty"));
	    };var J = 0;Kd({ ctrl: this, $element: c, set: function set(a, b) {
	        a[b] = !0;
	      }, unset: function unset(a, b) {
	        delete a[b];
	      }, $animate: f });this.$setPristine = function () {
	      r.$dirty = !1;r.$pristine = !0;f.removeClass(c, Mb);f.addClass(c, Ua);
	    };this.$setDirty = function () {
	      r.$dirty = !0;r.$pristine = !1;f.removeClass(c, Ua);f.addClass(c, Mb);r.$$parentForm.$setDirty();
	    };this.$setUntouched = function () {
	      r.$touched = !1;r.$untouched = !0;f.setClass(c, "ng-untouched", "ng-touched");
	    };this.$setTouched = function () {
	      r.$touched = !0;r.$untouched = !1;f.setClass(c, "ng-touched", "ng-untouched");
	    };this.$rollbackViewValue = function () {
	      g.cancel(s);r.$viewValue = r.$$lastCommittedViewValue;r.$render();
	    };this.$validate = function () {
	      if (!T(r.$modelValue) || !isNaN(r.$modelValue)) {
	        var a = r.$$rawModelValue,
	            b = r.$valid,
	            c = r.$modelValue,
	            d = r.$options && r.$options.allowInvalid;r.$$runValidators(a, r.$$lastCommittedViewValue, function (e) {
	          d || b === e || (r.$modelValue = e ? a : void 0, r.$modelValue !== c && r.$$writeModelToScope());
	        });
	      }
	    };this.$$runValidators = function (a, b, c) {
	      function d() {
	        var c = !0;q(r.$validators, function (d, e) {
	          var g = d(a, b);c = c && g;f(e, g);
	        });return c ? !0 : (q(r.$asyncValidators, function (a, b) {
	          f(b, null);
	        }), !1);
	      }function e() {
	        var c = [],
	            d = !0;q(r.$asyncValidators, function (e, g) {
	          var h = e(a, b);if (!h || !z(h.then)) throw nb("nopromise", h);f(g, void 0);c.push(h.then(function () {
	            f(g, !0);
	          }, function () {
	            d = !1;f(g, !1);
	          }));
	        });c.length ? k.all(c).then(function () {
	          g(d);
	        }, A) : g(!0);
	      }function f(a, b) {
	        h === J && r.$setValidity(a, b);
	      }function g(a) {
	        h === J && c(a);
	      }J++;var h = J;(function () {
	        var a = r.$$parserName || "parse";if (y(B)) f(a, null);else return B || (q(r.$validators, function (a, b) {
	          f(b, null);
	        }), q(r.$asyncValidators, function (a, b) {
	          f(b, null);
	        })), f(a, B), B;return !0;
	      })() ? d() ? e() : g(!1) : g(!1);
	    };this.$commitViewValue = function () {
	      var a = r.$viewValue;g.cancel(s);if (r.$$lastCommittedViewValue !== a || "" === a && r.$$hasNativeValidators) r.$$updateEmptyClasses(a), r.$$lastCommittedViewValue = a, r.$pristine && this.$setDirty(), this.$$parseAndValidate();
	    };this.$$parseAndValidate = function () {
	      var b = r.$$lastCommittedViewValue;if (B = y(b) ? void 0 : !0) for (var c = 0; c < r.$parsers.length; c++) {
	        if (b = r.$parsers[c](b), y(b)) {
	          B = !1;break;
	        }
	      }T(r.$modelValue) && isNaN(r.$modelValue) && (r.$modelValue = p(a));var d = r.$modelValue,
	          e = r.$options && r.$options.allowInvalid;r.$$rawModelValue = b;e && (r.$modelValue = b, r.$modelValue !== d && r.$$writeModelToScope());r.$$runValidators(b, r.$$lastCommittedViewValue, function (a) {
	        e || (r.$modelValue = a ? b : void 0, r.$modelValue !== d && r.$$writeModelToScope());
	      });
	    };this.$$writeModelToScope = function () {
	      u(a, r.$modelValue);q(r.$viewChangeListeners, function (a) {
	        try {
	          a();
	        } catch (c) {
	          b(c);
	        }
	      });
	    };this.$setViewValue = function (a, b) {
	      r.$viewValue = a;r.$options && !r.$options.updateOnDefault || r.$$debounceViewValueCommit(b);
	    };this.$$debounceViewValueCommit = function (b) {
	      var c = 0,
	          d = r.$options;
	      d && w(d.debounce) && (d = d.debounce, T(d) ? c = d : T(d[b]) ? c = d[b] : T(d["default"]) && (c = d["default"]));g.cancel(s);c ? s = g(function () {
	        r.$commitViewValue();
	      }, c) : h.$$phase ? r.$commitViewValue() : a.$apply(function () {
	        r.$commitViewValue();
	      });
	    };a.$watch(function () {
	      var b = p(a);if (b !== r.$modelValue && (r.$modelValue === r.$modelValue || b === b)) {
	        r.$modelValue = r.$$rawModelValue = b;B = void 0;for (var c = r.$formatters, d = c.length, e = b; d--;) {
	          e = c[d](e);
	        }r.$viewValue !== e && (r.$$updateEmptyClasses(e), r.$viewValue = r.$$lastCommittedViewValue = e, r.$render(), r.$$runValidators(b, e, A));
	      }return b;
	    });
	  }],
	      Re = ["$rootScope", function (a) {
	    return { restrict: "A", require: ["ngModel", "^?form", "^?ngModelOptions"], controller: Pg, priority: 1, compile: function compile(b) {
	        b.addClass(Ua).addClass("ng-untouched").addClass(ob);return { pre: function pre(a, b, e, f) {
	            var g = f[0];b = f[1] || g.$$parentForm;g.$$setOptions(f[2] && f[2].$options);b.$addControl(g);e.$observe("name", function (a) {
	              g.$name !== a && g.$$parentForm.$$renameControl(g, a);
	            });a.$on("$destroy", function () {
	              g.$$parentForm.$removeControl(g);
	            });
	          }, post: function post(b, c, e, f) {
	            var g = f[0];if (g.$options && g.$options.updateOn) c.on(g.$options.updateOn, function (a) {
	              g.$$debounceViewValueCommit(a && a.type);
	            });c.on("blur", function () {
	              g.$touched || (a.$$phase ? b.$evalAsync(g.$setTouched) : b.$apply(g.$setTouched));
	            });
	          } };
	      } };
	  }],
	      Qg = /(\s+|^)default(\s+|$)/,
	      Ve = function Ve() {
	    return { restrict: "A", controller: ["$scope", "$attrs", function (a, b) {
	        var d = this;this.$options = pa(a.$eval(b.ngModelOptions));w(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = W(this.$options.updateOn.replace(Qg, function () {
	          d.$options.updateOnDefault = !0;return " ";
	        }))) : this.$options.updateOnDefault = !0;
	      }] };
	  },
	      He = Ta({ terminal: !0, priority: 1E3 }),
	      Rg = N("ngOptions"),
	      Sg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
	      Pe = ["$compile", "$document", "$parse", function (a, b, d) {
	    function c(a, b, c) {
	      function e(a, b, c, d, f) {
	        this.selectValue = a;this.viewValue = b;this.label = c;this.group = d;this.disabled = f;
	      }function f(a) {
	        var b;if (!q && ta(a)) b = a;else {
	          b = [];for (var c in a) {
	            a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c);
	          }
	        }return b;
	      }var n = a.match(Sg);if (!n) throw Rg("iexp", a, ya(b));var p = n[5] || n[7],
	          q = n[6];a = / as /.test(n[0]) && n[1];var s = n[9];b = d(n[2] ? n[1] : p);var w = a && d(a) || b,
	          r = s && d(s),
	          y = s ? function (a, b) {
	        return r(c, b);
	      } : function (a) {
	        return Ca(a);
	      },
	          v = function v(a, b) {
	        return y(a, E(a, b));
	      },
	          A = d(n[2] || n[1]),
	          t = d(n[3] || ""),
	          K = d(n[4] || ""),
	          z = d(n[8]),
	          H = {},
	          E = q ? function (a, b) {
	        H[q] = b;H[p] = a;return H;
	      } : function (a) {
	        H[p] = a;return H;
	      };return { trackBy: s, getTrackByValue: v, getWatchables: d(z, function (a) {
	          var b = [];a = a || [];for (var d = f(a), e = d.length, g = 0; g < e; g++) {
	            var h = a === d ? g : d[g],
	                l = a[h],
	                h = E(l, h),
	                l = y(l, h);b.push(l);if (n[2] || n[1]) l = A(c, h), b.push(l);n[4] && (h = K(c, h), b.push(h));
	          }return b;
	        }), getOptions: function getOptions() {
	          for (var a = [], b = {}, d = z(c) || [], g = f(d), h = g.length, n = 0; n < h; n++) {
	            var p = d === g ? n : g[n],
	                q = E(d[p], p),
	                r = w(c, q),
	                p = y(r, q),
	                u = A(c, q),
	                H = t(c, q),
	                q = K(c, q),
	                r = new e(p, r, u, H, q);a.push(r);b[p] = r;
	          }return { items: a, selectValueMap: b,
	            getOptionFromViewValue: function getOptionFromViewValue(a) {
	              return b[v(a)];
	            }, getViewValueFromOption: function getViewValueFromOption(a) {
	              return s ? ca.copy(a.viewValue) : a.viewValue;
	            } };
	        } };
	    }var e = C.document.createElement("option"),
	        f = C.document.createElement("optgroup");return { restrict: "A", terminal: !0, require: ["select", "ngModel"], link: { pre: function pre(a, b, c, d) {
	          d[0].registerOption = A;
	        }, post: function post(d, h, k, l) {
	          function m(a, b) {
	            a.element = b;b.disabled = a.disabled;a.label !== b.label && (b.label = a.label, b.textContent = a.label);a.value !== b.value && (b.value = a.selectValue);
	          }function n() {
	            var a = t && p.readValue();if (t) for (var b = t.items.length - 1; 0 <= b; b--) {
	              var c = t.items[b];w(c.group) ? Db(c.element.parentNode) : Db(c.element);
	            }t = K.getOptions();var d = {};v && h.prepend(B);t.items.forEach(function (a) {
	              var b;if (w(a.group)) {
	                b = d[a.group];b || (b = f.cloneNode(!1), C.appendChild(b), b.label = null === a.group ? "null" : a.group, d[a.group] = b);var c = e.cloneNode(!1);
	              } else b = C, c = e.cloneNode(!1);b.appendChild(c);m(a, c);
	            });h[0].appendChild(C);s.$render();s.$isEmpty(a) || (b = p.readValue(), (K.trackBy || y ? na(a, b) : a === b) || (s.$setViewValue(b), s.$render()));
	          }var p = l[0],
	              s = l[1],
	              y = k.multiple,
	              B;l = 0;for (var r = h.children(), A = r.length; l < A; l++) {
	            if ("" === r[l].value) {
	              B = r.eq(l);break;
	            }
	          }var v = !!B,
	              z = F(e.cloneNode(!1));z.val("?");var t,
	              K = c(k.ngOptions, h, d),
	              C = b[0].createDocumentFragment();y ? (s.$isEmpty = function (a) {
	            return !a || 0 === a.length;
	          }, p.writeValue = function (a) {
	            t.items.forEach(function (a) {
	              a.element.selected = !1;
	            });a && a.forEach(function (a) {
	              if (a = t.getOptionFromViewValue(a)) a.element.selected = !0;
	            });
	          }, p.readValue = function () {
	            var a = h.val() || [],
	                b = [];q(a, function (a) {
	              (a = t.selectValueMap[a]) && !a.disabled && b.push(t.getViewValueFromOption(a));
	            });return b;
	          }, K.trackBy && d.$watchCollection(function () {
	            if (L(s.$viewValue)) return s.$viewValue.map(function (a) {
	              return K.getTrackByValue(a);
	            });
	          }, function () {
	            s.$render();
	          })) : (p.writeValue = function (a) {
	            var b = t.getOptionFromViewValue(a);b ? (h[0].value !== b.selectValue && (z.remove(), v || B.remove(), h[0].value = b.selectValue, b.element.selected = !0), b.element.setAttribute("selected", "selected")) : null === a || v ? (z.remove(), v || h.prepend(B), h.val(""), B.prop("selected", !0), B.attr("selected", !0)) : (v || B.remove(), h.prepend(z), h.val("?"), z.prop("selected", !0), z.attr("selected", !0));
	          }, p.readValue = function () {
	            var a = t.selectValueMap[h.val()];return a && !a.disabled ? (v || B.remove(), z.remove(), t.getViewValueFromOption(a)) : null;
	          }, K.trackBy && d.$watch(function () {
	            return K.getTrackByValue(s.$viewValue);
	          }, function () {
	            s.$render();
	          }));v ? (B.remove(), a(B)(d), B.removeClass("ng-scope")) : B = F(e.cloneNode(!1));h.empty();n();d.$watchCollection(K.getWatchables, n);
	        } } };
	  }],
	      Ie = ["$locale", "$interpolate", "$log", function (a, b, d) {
	    var c = /{}/g,
	        e = /^when(Minus)?(.+)$/;return { link: function link(f, g, h) {
	        function k(a) {
	          g.text(a || "");
	        }var l = h.count,
	            m = h.$attr.when && g.attr(h.$attr.when),
	            n = h.offset || 0,
	            p = f.$eval(m) || {},
	            s = {},
	            w = b.startSymbol(),
	            B = b.endSymbol(),
	            r = w + l + "-" + n + B,
	            z = ca.noop,
	            v;q(h, function (a, b) {
	          var c = e.exec(b);c && (c = (c[1] ? "-" : "") + Q(c[2]), p[c] = g.attr(h.$attr[b]));
	        });q(p, function (a, d) {
	          s[d] = b(a.replace(c, r));
	        });f.$watch(l, function (b) {
	          var c = parseFloat(b),
	              e = isNaN(c);e || c in p || (c = a.pluralCat(c - n));c === v || e && T(v) && isNaN(v) || (z(), e = s[c], y(e) ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), z = A, k()) : z = f.$watch(e, k), v = c);
	        });
	      } };
	  }],
	      Je = ["$parse", "$animate", "$compile", function (a, b, d) {
	    var c = N("ngRepeat"),
	        e = function e(a, b, c, d, _e2, m, n) {
	      a[c] = d;_e2 && (a[_e2] = m);a.$index = b;a.$first = 0 === b;a.$last = b === n - 1;a.$middle = !(a.$first || a.$last);a.$odd = !(a.$even = 0 === (b & 1));
	    };return { restrict: "A", multiElement: !0, transclude: "element", priority: 1E3, terminal: !0, $$tlb: !0, compile: function compile(f, g) {
	        var h = g.ngRepeat,
	            k = d.$$createComment("end ngRepeat", h),
	            l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if (!l) throw c("iexp", h);var m = l[1],
	            n = l[2],
	            p = l[3],
	            s = l[4],
	            l = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if (!l) throw c("iidexp", m);var w = l[3] || l[1],
	            y = l[2];if (p && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p))) throw c("badident", p);var r,
	            z,
	            v,
	            A,
	            t = { $id: Ca };s ? r = a(s) : (v = function v(a, b) {
	          return Ca(b);
	        }, A = function A(a) {
	          return a;
	        });return function (a, d, f, g, l) {
	          r && (z = function z(b, c, d) {
	            y && (t[y] = b);t[w] = c;t.$index = d;return r(a, t);
	          });var m = U();a.$watchCollection(n, function (f) {
	            var g,
	                n,
	                r = d[0],
	                s,
	                u = U(),
	                t,
	                C,
	                F,
	                E,
	                G,
	                D,
	                H;p && (a[p] = f);if (ta(f)) G = f, n = z || v;else for (H in n = z || A, G = [], f) {
	              ua.call(f, H) && "$" !== H.charAt(0) && G.push(H);
	            }t = G.length;H = Array(t);for (g = 0; g < t; g++) {
	              if (C = f === G ? g : G[g], F = f[C], E = n(C, F, g), m[E]) D = m[E], delete m[E], u[E] = D, H[g] = D;else {
	                if (u[E]) throw q(H, function (a) {
	                  a && a.scope && (m[a.id] = a);
	                }), c("dupes", h, E, F);H[g] = { id: E,
	                  scope: void 0, clone: void 0 };u[E] = !0;
	              }
	            }for (s in m) {
	              D = m[s];E = tb(D.clone);b.leave(E);if (E[0].parentNode) for (g = 0, n = E.length; g < n; g++) {
	                E[g].$$NG_REMOVED = !0;
	              }D.scope.$destroy();
	            }for (g = 0; g < t; g++) {
	              if (C = f === G ? g : G[g], F = f[C], D = H[g], D.scope) {
	                s = r;do {
	                  s = s.nextSibling;
	                } while (s && s.$$NG_REMOVED);D.clone[0] != s && b.move(tb(D.clone), null, r);r = D.clone[D.clone.length - 1];e(D.scope, g, w, F, y, C, t);
	              } else l(function (a, c) {
	                D.scope = c;var d = k.cloneNode(!1);a[a.length++] = d;b.enter(a, null, r);r = d;D.clone = a;u[D.id] = D;e(D.scope, g, w, F, y, C, t);
	              });
	            }m = u;
	          });
	        };
	      } };
	  }],
	      Ke = ["$animate", function (a) {
	    return { restrict: "A", multiElement: !0, link: function link(b, d, c) {
	        b.$watch(c.ngShow, function (b) {
	          a[b ? "removeClass" : "addClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
	        });
	      } };
	  }],
	      De = ["$animate", function (a) {
	    return { restrict: "A", multiElement: !0, link: function link(b, d, c) {
	        b.$watch(c.ngHide, function (b) {
	          a[b ? "addClass" : "removeClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
	        });
	      } };
	  }],
	      Le = Ta(function (a, b, d) {
	    a.$watch(d.ngStyle, function (a, d) {
	      d && a !== d && q(d, function (a, c) {
	        b.css(c, "");
	      });a && b.css(a);
	    }, !0);
	  }),
	      Me = ["$animate", "$compile", function (a, b) {
	    return { require: "ngSwitch", controller: ["$scope", function () {
	        this.cases = {};
	      }], link: function link(d, c, e, f) {
	        var g = [],
	            h = [],
	            k = [],
	            l = [],
	            m = function m(a, b) {
	          return function () {
	            a.splice(b, 1);
	          };
	        };d.$watch(e.ngSwitch || e.on, function (c) {
	          var d, e;d = 0;for (e = k.length; d < e; ++d) {
	            a.cancel(k[d]);
	          }d = k.length = 0;for (e = l.length; d < e; ++d) {
	            var s = tb(h[d].clone);l[d].$destroy();(k[d] = a.leave(s)).then(m(k, d));
	          }h.length = 0;l.length = 0;(g = f.cases["!" + c] || f.cases["?"]) && q(g, function (c) {
	            c.transclude(function (d, e) {
	              l.push(e);var f = c.element;d[d.length++] = b.$$createComment("end ngSwitchWhen");h.push({ clone: d });a.enter(d, f.parent(), f);
	            });
	          });
	        });
	      } };
	  }],
	      Ne = Ta({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, b, d, c, e) {
	      c.cases["!" + d.ngSwitchWhen] = c.cases["!" + d.ngSwitchWhen] || [];c.cases["!" + d.ngSwitchWhen].push({ transclude: e, element: b });
	    } }),
	      Oe = Ta({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, b, d, c, e) {
	      c.cases["?"] = c.cases["?"] || [];c.cases["?"].push({ transclude: e,
	        element: b });
	    } }),
	      Tg = N("ngTransclude"),
	      Qe = ["$compile", function (a) {
	    return { restrict: "EAC", terminal: !0, compile: function compile(b) {
	        var d = a(b.contents());b.empty();return function (a, b, f, g, h) {
	          function k() {
	            d(a, function (a) {
	              b.append(a);
	            });
	          }if (!h) throw Tg("orphan", ya(b));f.ngTransclude === f.$attr.ngTransclude && (f.ngTransclude = "");f = f.ngTransclude || f.ngTranscludeSlot;h(function (a, c) {
	            a.length ? b.append(a) : (k(), c.$destroy());
	          }, null, f);f && !h.isSlotFilled(f) && k();
	        };
	      } };
	  }],
	      qe = ["$templateCache", function (a) {
	    return { restrict: "E", terminal: !0,
	      compile: function compile(b, d) {
	        "text/ng-template" == d.type && a.put(d.id, b[0].text);
	      } };
	  }],
	      Ug = { $setViewValue: A, $render: A },
	      Vg = ["$element", "$scope", function (a, b) {
	    var d = this,
	        c = new Ra();d.ngModelCtrl = Ug;d.unknownOption = F(C.document.createElement("option"));d.renderUnknownOption = function (b) {
	      b = "? " + Ca(b) + " ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b);
	    };b.$on("$destroy", function () {
	      d.renderUnknownOption = A;
	    });d.removeUnknownOption = function () {
	      d.unknownOption.parent() && d.unknownOption.remove();
	    };d.readValue = function () {
	      d.removeUnknownOption();
	      return a.val();
	    };d.writeValue = function (b) {
	      d.hasOption(b) ? (d.removeUnknownOption(), a.val(b), "" === b && d.emptyOption.prop("selected", !0)) : null == b && d.emptyOption ? (d.removeUnknownOption(), a.val("")) : d.renderUnknownOption(b);
	    };d.addOption = function (a, b) {
	      if (8 !== b[0].nodeType) {
	        Qa(a, '"option value"');"" === a && (d.emptyOption = b);var g = c.get(a) || 0;c.put(a, g + 1);d.ngModelCtrl.$render();b[0].hasAttribute("selected") && (b[0].selected = !0);
	      }
	    };d.removeOption = function (a) {
	      var b = c.get(a);b && (1 === b ? (c.remove(a), "" === a && (d.emptyOption = void 0)) : c.put(a, b - 1));
	    };d.hasOption = function (a) {
	      return !!c.get(a);
	    };d.registerOption = function (a, b, c, h, k) {
	      if (h) {
	        var l;c.$observe("value", function (a) {
	          w(l) && d.removeOption(l);l = a;d.addOption(a, b);
	        });
	      } else k ? a.$watch(k, function (a, e) {
	        c.$set("value", a);e !== a && d.removeOption(e);d.addOption(a, b);
	      }) : d.addOption(c.value, b);b.on("$destroy", function () {
	        d.removeOption(c.value);d.ngModelCtrl.$render();
	      });
	    };
	  }],
	      re = function re() {
	    return { restrict: "E", require: ["select", "?ngModel"], controller: Vg, priority: 1, link: { pre: function pre(a, b, d, c) {
	          var e = c[1];if (e) {
	            var f = c[0];f.ngModelCtrl = e;b.on("change", function () {
	              a.$apply(function () {
	                e.$setViewValue(f.readValue());
	              });
	            });if (d.multiple) {
	              f.readValue = function () {
	                var a = [];q(b.find("option"), function (b) {
	                  b.selected && a.push(b.value);
	                });return a;
	              };f.writeValue = function (a) {
	                var c = new Ra(a);q(b.find("option"), function (a) {
	                  a.selected = w(c.get(a.value));
	                });
	              };var g,
	                  h = NaN;a.$watch(function () {
	                h !== e.$viewValue || na(g, e.$viewValue) || (g = ia(e.$viewValue), e.$render());h = e.$viewValue;
	              });e.$isEmpty = function (a) {
	                return !a || 0 === a.length;
	              };
	            }
	          }
	        }, post: function post(a, b, d, c) {
	          var e = c[1];if (e) {
	            var f = c[0];e.$render = function () {
	              f.writeValue(e.$viewValue);
	            };
	          }
	        } } };
	  },
	      te = ["$interpolate", function (a) {
	    return { restrict: "E", priority: 100, compile: function compile(b, d) {
	        if (w(d.value)) var c = a(d.value, !0);else {
	          var e = a(b.text(), !0);e || d.$set("value", b.text());
	        }return function (a, b, d) {
	          var k = b.parent();(k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a, b, d, c, e);
	        };
	      } };
	  }],
	      se = ha({ restrict: "E", terminal: !1 }),
	      Ic = function Ic() {
	    return { restrict: "A",
	      require: "?ngModel", link: function link(a, b, d, c) {
	        c && (d.required = !0, c.$validators.required = function (a, b) {
	          return !d.required || !c.$isEmpty(b);
	        }, d.$observe("required", function () {
	          c.$validate();
	        }));
	      } };
	  },
	      Hc = function Hc() {
	    return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
	        if (c) {
	          var e,
	              f = d.ngPattern || d.pattern;d.$observe("pattern", function (a) {
	            G(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));if (a && !a.test) throw N("ngPattern")("noregexp", f, a, ya(b));e = a || void 0;c.$validate();
	          });c.$validators.pattern = function (a, b) {
	            return c.$isEmpty(b) || y(e) || e.test(b);
	          };
	        }
	      } };
	  },
	      Kc = function Kc() {
	    return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
	        if (c) {
	          var e = -1;d.$observe("maxlength", function (a) {
	            a = Z(a);e = isNaN(a) ? -1 : a;c.$validate();
	          });c.$validators.maxlength = function (a, b) {
	            return 0 > e || c.$isEmpty(b) || b.length <= e;
	          };
	        }
	      } };
	  },
	      Jc = function Jc() {
	    return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
	        if (c) {
	          var e = 0;d.$observe("minlength", function (a) {
	            e = Z(a) || 0;c.$validate();
	          });c.$validators.minlength = function (a, b) {
	            return c.$isEmpty(b) || b.length >= e;
	          };
	        }
	      } };
	  };C.angular.bootstrap ? C.console && console.log("WARNING: Tried to load angular more than once.") : (je(), le(ca), ca.module("ngLocale", [], ["$provide", function (a) {
	    function b(a) {
	      a += "";var b = a.indexOf(".");return -1 == b ? 0 : a.length - b - 1;
	    }a.value("$locale", { DATETIME_FORMATS: { AMPMS: ["AM", "PM"], DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), ERANAMES: ["Before Christ", "Anno Domini"], ERAS: ["BC", "AD"], FIRSTDAYOFWEEK: 6, MONTH: "January February March April May June July August September October November December".split(" "),
	        SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "), SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), STANDALONEMONTH: "January February March April May June July August September October November December".split(" "), WEEKENDRANGE: [5, 6], fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", medium: "MMM d, y h:mm:ss a", mediumDate: "MMM d, y", mediumTime: "h:mm:ss a", "short": "M/d/yy h:mm a", shortDate: "M/d/yy", shortTime: "h:mm a" }, NUMBER_FORMATS: { CURRENCY_SYM: "$", DECIMAL_SEP: ".", GROUP_SEP: ",",
	        PATTERNS: [{ gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 3, lgSize: 3, maxFrac: 2, minFrac: 2, minInt: 1, negPre: "-\xA4", negSuf: "", posPre: "\xA4", posSuf: "" }] }, id: "en-us", localeID: "en_US", pluralCat: function pluralCat(a, c) {
	        var e = a | 0,
	            f = c;void 0 === f && (f = Math.min(b(a), 3));Math.pow(10, f);return 1 == e && 0 == f ? "one" : "other";
	      } });
	  }]), F(C.document).ready(function () {
	    fe(C.document, Bc);
	  }));
	})(window);!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
	//# sourceMappingURL=angular.min.js.map

/***/ },

/***/ 63:
/***/ function(module, exports) {

	"use strict";
	
	/*
	 AngularJS v1.5.8
	 (c) 2010-2016 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function (R, B) {
	  'use strict';
	  function Da(a, b, c) {
	    if (!a) throw Ma("areq", b || "?", c || "required");return a;
	  }function Ea(a, b) {
	    if (!a && !b) return "";if (!a) return b;if (!b) return a;Y(a) && (a = a.join(" "));Y(b) && (b = b.join(" "));return a + " " + b;
	  }function Na(a) {
	    var b = {};a && (a.to || a.from) && (b.to = a.to, b.from = a.from);return b;
	  }function Z(a, b, c) {
	    var d = "";a = Y(a) ? a : a && G(a) && a.length ? a.split(/\s+/) : [];s(a, function (a, l) {
	      a && 0 < a.length && (d += 0 < l ? " " : "", d += c ? b + a : a + b);
	    });return d;
	  }function Oa(a) {
	    if (a instanceof F) switch (a.length) {case 0:
	        return a;
	      case 1:
	        if (1 === a[0].nodeType) return a;break;default:
	        return F(ta(a));}if (1 === a.nodeType) return F(a);
	  }function ta(a) {
	    if (!a[0]) return a;for (var b = 0; b < a.length; b++) {
	      var c = a[b];if (1 == c.nodeType) return c;
	    }
	  }function Pa(a, b, c) {
	    s(b, function (b) {
	      a.addClass(b, c);
	    });
	  }function Qa(a, b, c) {
	    s(b, function (b) {
	      a.removeClass(b, c);
	    });
	  }function V(a) {
	    return function (b, c) {
	      c.addClass && (Pa(a, b, c.addClass), c.addClass = null);c.removeClass && (Qa(a, b, c.removeClass), c.removeClass = null);
	    };
	  }function oa(a) {
	    a = a || {};if (!a.$$prepared) {
	      var b = a.domOperation || P;a.domOperation = function () {
	        a.$$domOperationFired = !0;b();b = P;
	      };a.$$prepared = !0;
	    }return a;
	  }function ha(a, b) {
	    Fa(a, b);Ga(a, b);
	  }function Fa(a, b) {
	    b.from && (a.css(b.from), b.from = null);
	  }function Ga(a, b) {
	    b.to && (a.css(b.to), b.to = null);
	  }function W(a, b, c) {
	    var d = b.options || {};c = c.options || {};var e = (d.addClass || "") + " " + (c.addClass || ""),
	        l = (d.removeClass || "") + " " + (c.removeClass || "");a = Ra(a.attr("class"), e, l);c.preparationClasses && (d.preparationClasses = $(c.preparationClasses, d.preparationClasses), delete c.preparationClasses);
	    e = d.domOperation !== P ? d.domOperation : null;ua(d, c);e && (d.domOperation = e);d.addClass = a.addClass ? a.addClass : null;d.removeClass = a.removeClass ? a.removeClass : null;b.addClass = d.addClass;b.removeClass = d.removeClass;return d;
	  }function Ra(a, b, c) {
	    function d(a) {
	      G(a) && (a = a.split(" "));var b = {};s(a, function (a) {
	        a.length && (b[a] = !0);
	      });return b;
	    }var e = {};a = d(a);b = d(b);s(b, function (a, b) {
	      e[b] = 1;
	    });c = d(c);s(c, function (a, b) {
	      e[b] = 1 === e[b] ? null : -1;
	    });var l = { addClass: "", removeClass: "" };s(e, function (b, c) {
	      var d, e;1 === b ? (d = "addClass", e = !a[c] || a[c + "-remove"]) : -1 === b && (d = "removeClass", e = a[c] || a[c + "-add"]);e && (l[d].length && (l[d] += " "), l[d] += c);
	    });return l;
	  }function y(a) {
	    return a instanceof F ? a[0] : a;
	  }function Sa(a, b, c) {
	    var d = "";b && (d = Z(b, "ng-", !0));c.addClass && (d = $(d, Z(c.addClass, "-add")));c.removeClass && (d = $(d, Z(c.removeClass, "-remove")));d.length && (c.preparationClasses = d, a.addClass(d));
	  }function pa(a, b) {
	    var c = b ? "-" + b + "s" : "";la(a, [ma, c]);return [ma, c];
	  }function va(a, b) {
	    var c = b ? "paused" : "",
	        d = aa + "PlayState";la(a, [d, c]);return [d, c];
	  }function la(a, b) {
	    a.style[b[0]] = b[1];
	  }function $(a, b) {
	    return a ? b ? a + " " + b : a : b;
	  }function Ha(a, b, c) {
	    var d = Object.create(null),
	        e = a.getComputedStyle(b) || {};s(c, function (a, b) {
	      var c = e[a];if (c) {
	        var g = c.charAt(0);if ("-" === g || "+" === g || 0 <= g) c = Ta(c);0 === c && (c = null);d[b] = c;
	      }
	    });return d;
	  }function Ta(a) {
	    var b = 0;a = a.split(/\s*,\s*/);s(a, function (a) {
	      "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));a = parseFloat(a) || 0;b = b ? Math.max(a, b) : a;
	    });return b;
	  }function wa(a) {
	    return 0 === a || null != a;
	  }function Ia(a, b) {
	    var c = S,
	        d = a + "s";b ? c += "Duration" : d += " linear all";return [c, d];
	  }function Ja() {
	    var a = Object.create(null);return { flush: function flush() {
	        a = Object.create(null);
	      }, count: function count(b) {
	        return (b = a[b]) ? b.total : 0;
	      }, get: function get(b) {
	        return (b = a[b]) && b.value;
	      }, put: function put(b, c) {
	        a[b] ? a[b].total++ : a[b] = { total: 1, value: c };
	      } };
	  }function Ka(a, b, c) {
	    s(c, function (c) {
	      a[c] = xa(a[c]) ? a[c] : b.style.getPropertyValue(c);
	    });
	  }var S, ya, aa, za;void 0 === R.ontransitionend && void 0 !== R.onwebkittransitionend ? (S = "WebkitTransition", ya = "webkitTransitionEnd transitionend") : (S = "transition", ya = "transitionend");void 0 === R.onanimationend && void 0 !== R.onwebkitanimationend ? (aa = "WebkitAnimation", za = "webkitAnimationEnd animationend") : (aa = "animation", za = "animationend");var qa = aa + "Delay",
	      Aa = aa + "Duration",
	      ma = S + "Delay",
	      La = S + "Duration",
	      Ma = B.$$minErr("ng"),
	      Ua = { transitionDuration: La, transitionDelay: ma, transitionProperty: S + "Property", animationDuration: Aa, animationDelay: qa, animationIterationCount: aa + "IterationCount" },
	      Va = { transitionDuration: La, transitionDelay: ma, animationDuration: Aa, animationDelay: qa },
	      Ba,
	      ua,
	      s,
	      Y,
	      xa,
	      ea,
	      Ca,
	      ba,
	      G,
	      J,
	      F,
	      P;B.module("ngAnimate", [], function () {
	    P = B.noop;Ba = B.copy;ua = B.extend;F = B.element;s = B.forEach;Y = B.isArray;G = B.isString;ba = B.isObject;J = B.isUndefined;xa = B.isDefined;Ca = B.isFunction;ea = B.isElement;
	  }).directive("ngAnimateSwap", ["$animate", "$rootScope", function (a, b) {
	    return { restrict: "A", transclude: "element", terminal: !0, priority: 600, link: function link(b, d, e, l, n) {
	        var I, g;b.$watchCollection(e.ngAnimateSwap || e["for"], function (e) {
	          I && a.leave(I);g && (g.$destroy(), g = null);if (e || 0 === e) g = b.$new(), n(g, function (b) {
	            I = b;a.enter(b, null, d);
	          });
	        });
	      } };
	  }]).directive("ngAnimateChildren", ["$interpolate", function (a) {
	    return { link: function link(b, c, d) {
	        function e(a) {
	          c.data("$$ngAnimateChildren", "on" === a || "true" === a);
	        }var l = d.ngAnimateChildren;G(l) && 0 === l.length ? c.data("$$ngAnimateChildren", !0) : (e(a(l)(b)), d.$observe("ngAnimateChildren", e));
	      } };
	  }]).factory("$$rAFScheduler", ["$$rAF", function (a) {
	    function b(a) {
	      d = d.concat(a);c();
	    }function c() {
	      if (d.length) {
	        for (var b = d.shift(), n = 0; n < b.length; n++) {
	          b[n]();
	        }e || a(function () {
	          e || c();
	        });
	      }
	    }
	    var d, e;d = b.queue = [];b.waitUntilQuiet = function (b) {
	      e && e();e = a(function () {
	        e = null;b();c();
	      });
	    };return b;
	  }]).provider("$$animateQueue", ["$animateProvider", function (a) {
	    function b(a) {
	      if (!a) return null;a = a.split(" ");var b = Object.create(null);s(a, function (a) {
	        b[a] = !0;
	      });return b;
	    }function c(a, c) {
	      if (a && c) {
	        var d = b(c);return a.split(" ").some(function (a) {
	          return d[a];
	        });
	      }
	    }function d(a, b, c, d) {
	      return l[a].some(function (a) {
	        return a(b, c, d);
	      });
	    }function e(a, b) {
	      var c = 0 < (a.addClass || "").length,
	          d = 0 < (a.removeClass || "").length;
	      return b ? c && d : c || d;
	    }var l = this.rules = { skip: [], cancel: [], join: [] };l.join.push(function (a, b, c) {
	      return !b.structural && e(b);
	    });l.skip.push(function (a, b, c) {
	      return !b.structural && !e(b);
	    });l.skip.push(function (a, b, c) {
	      return "leave" == c.event && b.structural;
	    });l.skip.push(function (a, b, c) {
	      return c.structural && 2 === c.state && !b.structural;
	    });l.cancel.push(function (a, b, c) {
	      return c.structural && b.structural;
	    });l.cancel.push(function (a, b, c) {
	      return 2 === c.state && b.structural;
	    });l.cancel.push(function (a, b, d) {
	      if (d.structural) return !1;
	      a = b.addClass;b = b.removeClass;var e = d.addClass;d = d.removeClass;return J(a) && J(b) || J(e) && J(d) ? !1 : c(a, d) || c(b, e);
	    });this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", function (b, c, g, l, C, Wa, Q, t, H, T) {
	      function O() {
	        var a = !1;return function (b) {
	          a ? b() : c.$$postDigest(function () {
	            a = !0;b();
	          });
	        };
	      }function x(a, b, c) {
	        var f = y(b),
	            d = y(a),
	            N = [];(a = h[c]) && s(a, function (a) {
	          w.call(a.node, f) ? N.push(a.callback) : "leave" === c && w.call(a.node, d) && N.push(a.callback);
	        });return N;
	      }function r(a, b, c) {
	        var f = ta(b);return a.filter(function (a) {
	          return !(a.node === f && (!c || a.callback === c));
	        });
	      }function p(a, h, v) {
	        function r(c, f, d, h) {
	          sa(function () {
	            var c = x(T, a, f);c.length ? b(function () {
	              s(c, function (b) {
	                b(a, d, h);
	              });"close" !== d || a[0].parentNode || ra.off(a);
	            }) : "close" !== d || a[0].parentNode || ra.off(a);
	          });c.progress(f, d, h);
	        }function k(b) {
	          var c = a,
	              f = m;f.preparationClasses && (c.removeClass(f.preparationClasses), f.preparationClasses = null);f.activeClasses && (c.removeClass(f.activeClasses), f.activeClasses = null);E(a, m);ha(a, m);m.domOperation();A.complete(!b);
	        }var m = Ba(v),
	            p,
	            T;if (a = Oa(a)) p = y(a), T = a.parent();var m = oa(m),
	            A = new Q(),
	            sa = O();Y(m.addClass) && (m.addClass = m.addClass.join(" "));m.addClass && !G(m.addClass) && (m.addClass = null);Y(m.removeClass) && (m.removeClass = m.removeClass.join(" "));m.removeClass && !G(m.removeClass) && (m.removeClass = null);m.from && !ba(m.from) && (m.from = null);m.to && !ba(m.to) && (m.to = null);if (!p) return k(), A;v = [p.className, m.addClass, m.removeClass].join(" ");if (!Xa(v)) return k(), A;var g = 0 <= ["enter", "move", "leave"].indexOf(h),
	            w = l[0].hidden,
	            t = !f || w || N.get(p);v = !t && z.get(p) || {};var H = !!v.state;t || H && 1 == v.state || (t = !M(a, T, h));if (t) return w && r(A, h, "start"), k(), w && r(A, h, "close"), A;g && K(a);w = { structural: g, element: a, event: h, addClass: m.addClass, removeClass: m.removeClass, close: k, options: m, runner: A };if (H) {
	          if (d("skip", a, w, v)) {
	            if (2 === v.state) return k(), A;W(a, v, w);return v.runner;
	          }if (d("cancel", a, w, v)) {
	            if (2 === v.state) v.runner.end();else if (v.structural) v.close();else return W(a, v, w), v.runner;
	          } else if (d("join", a, w, v)) if (2 === v.state) W(a, w, {});else return Sa(a, g ? h : null, m), h = w.event = v.event, m = W(a, v, w), v.runner;
	        } else W(a, w, {});(H = w.structural) || (H = "animate" === w.event && 0 < Object.keys(w.options.to || {}).length || e(w));if (!H) return k(), ka(a), A;var C = (v.counter || 0) + 1;w.counter = C;L(a, 1, w);c.$$postDigest(function () {
	          var b = z.get(p),
	              c = !b,
	              b = b || {},
	              f = 0 < (a.parent() || []).length && ("animate" === b.event || b.structural || e(b));if (c || b.counter !== C || !f) {
	            c && (E(a, m), ha(a, m));if (c || g && b.event !== h) m.domOperation(), A.end();
	            f || ka(a);
	          } else h = !b.structural && e(b, !0) ? "setClass" : b.event, L(a, 2), b = Wa(a, h, b.options), A.setHost(b), r(A, h, "start", {}), b.done(function (b) {
	            k(!b);(b = z.get(p)) && b.counter === C && ka(y(a));r(A, h, "close", {});
	          });
	        });return A;
	      }function K(a) {
	        a = y(a).querySelectorAll("[data-ng-animate]");s(a, function (a) {
	          var b = parseInt(a.getAttribute("data-ng-animate")),
	              c = z.get(a);if (c) switch (b) {case 2:
	              c.runner.end();case 1:
	              z.remove(a);}
	        });
	      }function ka(a) {
	        a = y(a);a.removeAttribute("data-ng-animate");z.remove(a);
	      }function k(a, b) {
	        return y(a) === y(b);
	      }function M(a, b, c) {
	        c = F(l[0].body);var f = k(a, c) || "HTML" === a[0].nodeName,
	            d = k(a, g),
	            h = !1,
	            r,
	            e = N.get(y(a));(a = F.data(a[0], "$ngAnimatePin")) && (b = a);for (b = y(b); b;) {
	          d || (d = k(b, g));if (1 !== b.nodeType) break;a = z.get(b) || {};if (!h) {
	            var p = N.get(b);if (!0 === p && !1 !== e) {
	              e = !0;break;
	            } else !1 === p && (e = !1);h = a.structural;
	          }if (J(r) || !0 === r) a = F.data(b, "$$ngAnimateChildren"), xa(a) && (r = a);if (h && !1 === r) break;f || (f = k(b, c));if (f && d) break;if (!d && (a = F.data(b, "$ngAnimatePin"))) {
	            b = y(a);continue;
	          }b = b.parentNode;
	        }return (!h || r) && !0 !== e && d && f;
	      }function L(a, b, c) {
	        c = c || {};c.state = b;a = y(a);a.setAttribute("data-ng-animate", b);c = (b = z.get(a)) ? ua(b, c) : c;z.put(a, c);
	      }var z = new C(),
	          N = new C(),
	          f = null,
	          A = c.$watch(function () {
	        return 0 === t.totalPendingRequests;
	      }, function (a) {
	        a && (A(), c.$$postDigest(function () {
	          c.$$postDigest(function () {
	            null === f && (f = !0);
	          });
	        }));
	      }),
	          h = Object.create(null),
	          sa = a.classNameFilter(),
	          Xa = sa ? function (a) {
	        return sa.test(a);
	      } : function () {
	        return !0;
	      },
	          E = V(H),
	          w = R.Node.prototype.contains || function (a) {
	        return this === a || !!(this.compareDocumentPosition(a) & 16);
	      },
	          ra = { on: function on(a, b, c) {
	          var f = ta(b);h[a] = h[a] || [];h[a].push({ node: f, callback: c });F(b).on("$destroy", function () {
	            z.get(f) || ra.off(a, b, c);
	          });
	        }, off: function off(a, b, c) {
	          if (1 !== arguments.length || G(arguments[0])) {
	            var f = h[a];f && (h[a] = 1 === arguments.length ? null : r(f, b, c));
	          } else for (f in b = arguments[0], h) {
	            h[f] = r(h[f], b);
	          }
	        }, pin: function pin(a, b) {
	          Da(ea(a), "element", "not an element");Da(ea(b), "parentElement", "not an element");a.data("$ngAnimatePin", b);
	        }, push: function push(a, b, c, f) {
	          c = c || {};c.domOperation = f;return p(a, b, c);
	        }, enabled: function enabled(a, b) {
	          var c = arguments.length;if (0 === c) b = !!f;else if (ea(a)) {
	            var d = y(a);1 === c ? b = !N.get(d) : N.put(d, !b);
	          } else b = f = !!a;return b;
	        } };return ra;
	    }];
	  }]).provider("$$animation", ["$animateProvider", function (a) {
	    var b = this.drivers = [];this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function (a, d, e, l, n, I) {
	      function g(a) {
	        function b(a) {
	          if (a.processed) return a;a.processed = !0;var d = a.domNode,
	              p = d.parentNode;e.put(d, a);for (var K; p;) {
	            if (K = e.get(p)) {
	              K.processed || (K = b(K));break;
	            }p = p.parentNode;
	          }(K || c).children.push(a);return a;
	        }var c = { children: [] },
	            d,
	            e = new n();for (d = 0; d < a.length; d++) {
	          var g = a[d];e.put(g.domNode, a[d] = { domNode: g.domNode, fn: g.fn, children: [] });
	        }for (d = 0; d < a.length; d++) {
	          b(a[d]);
	        }return function (a) {
	          var b = [],
	              c = [],
	              d;for (d = 0; d < a.children.length; d++) {
	            c.push(a.children[d]);
	          }a = c.length;var e = 0,
	              k = [];for (d = 0; d < c.length; d++) {
	            var g = c[d];0 >= a && (a = e, e = 0, b.push(k), k = []);k.push(g.fn);g.children.forEach(function (a) {
	              e++;c.push(a);
	            });a--;
	          }k.length && b.push(k);return b;
	        }(c);
	      }var u = [],
	          C = V(a);return function (n, Q, t) {
	        function H(a) {
	          a = a.hasAttribute("ng-animate-ref") ? [a] : a.querySelectorAll("[ng-animate-ref]");var b = [];s(a, function (a) {
	            var c = a.getAttribute("ng-animate-ref");c && c.length && b.push(a);
	          });return b;
	        }function T(a) {
	          var b = [],
	              c = {};s(a, function (a, d) {
	            var h = y(a.element),
	                e = 0 <= ["enter", "move"].indexOf(a.event),
	                h = a.structural ? H(h) : [];if (h.length) {
	              var k = e ? "to" : "from";s(h, function (a) {
	                var b = a.getAttribute("ng-animate-ref");c[b] = c[b] || {};c[b][k] = { animationID: d, element: F(a) };
	              });
	            } else b.push(a);
	          });var d = {},
	              e = {};s(c, function (c, k) {
	            var r = c.from,
	                p = c.to;if (r && p) {
	              var z = a[r.animationID],
	                  g = a[p.animationID],
	                  A = r.animationID.toString();if (!e[A]) {
	                var n = e[A] = { structural: !0, beforeStart: function beforeStart() {
	                    z.beforeStart();g.beforeStart();
	                  }, close: function close() {
	                    z.close();g.close();
	                  }, classes: O(z.classes, g.classes), from: z, to: g, anchors: [] };n.classes.length ? b.push(n) : (b.push(z), b.push(g));
	              }e[A].anchors.push({ out: r.element, "in": p.element });
	            } else r = r ? r.animationID : p.animationID, p = r.toString(), d[p] || (d[p] = !0, b.push(a[r]));
	          });return b;
	        }function O(a, b) {
	          a = a.split(" ");b = b.split(" ");
	          for (var c = [], d = 0; d < a.length; d++) {
	            var e = a[d];if ("ng-" !== e.substring(0, 3)) for (var r = 0; r < b.length; r++) {
	              if (e === b[r]) {
	                c.push(e);break;
	              }
	            }
	          }return c.join(" ");
	        }function x(a) {
	          for (var c = b.length - 1; 0 <= c; c--) {
	            var d = e.get(b[c])(a);if (d) return d;
	          }
	        }function r(a, b) {
	          function c(a) {
	            (a = a.data("$$animationRunner")) && a.setHost(b);
	          }a.from && a.to ? (c(a.from.element), c(a.to.element)) : c(a.element);
	        }function p() {
	          var a = n.data("$$animationRunner");!a || "leave" === Q && t.$$domOperationFired || a.end();
	        }function K(b) {
	          n.off("$destroy", p);n.removeData("$$animationRunner");
	          C(n, t);ha(n, t);t.domOperation();L && a.removeClass(n, L);n.removeClass("ng-animate");k.complete(!b);
	        }t = oa(t);var ka = 0 <= ["enter", "move", "leave"].indexOf(Q),
	            k = new l({ end: function end() {
	            K();
	          }, cancel: function cancel() {
	            K(!0);
	          } });if (!b.length) return K(), k;n.data("$$animationRunner", k);var M = Ea(n.attr("class"), Ea(t.addClass, t.removeClass)),
	            L = t.tempClasses;L && (M += " " + L, t.tempClasses = null);var z;ka && (z = "ng-" + Q + "-prepare", a.addClass(n, z));u.push({ element: n, classes: M, event: Q, structural: ka, options: t, beforeStart: function beforeStart() {
	            n.addClass("ng-animate");
	            L && a.addClass(n, L);z && (a.removeClass(n, z), z = null);
	          }, close: K });n.on("$destroy", p);if (1 < u.length) return k;d.$$postDigest(function () {
	          var a = [];s(u, function (b) {
	            b.element.data("$$animationRunner") ? a.push(b) : b.close();
	          });u.length = 0;var b = T(a),
	              c = [];s(b, function (a) {
	            c.push({ domNode: y(a.from ? a.from.element : a.element), fn: function fn() {
	                a.beforeStart();var b,
	                    c = a.close;if ((a.anchors ? a.from.element || a.to.element : a.element).data("$$animationRunner")) {
	                  var d = x(a);d && (b = d.start);
	                }b ? (b = b(), b.done(function (a) {
	                  c(!a);
	                }), r(a, b)) : c();
	              } });
	          });I(g(c));
	        });return k;
	      };
	    }];
	  }]).provider("$animateCss", ["$animateProvider", function (a) {
	    var b = Ja(),
	        c = Ja();this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function (a, e, l, n, I, g, u, C) {
	      function B(a, b) {
	        var c = a.parentNode;return (c.$$ngAnimateParentKey || (c.$$ngAnimateParentKey = ++O)) + "-" + a.getAttribute("class") + "-" + b;
	      }function Q(r, p, g, n) {
	        var k;0 < b.count(g) && (k = c.get(g), k || (p = Z(p, "-stagger"), e.addClass(r, p), k = Ha(a, r, n), k.animationDuration = Math.max(k.animationDuration, 0), k.transitionDuration = Math.max(k.transitionDuration, 0), e.removeClass(r, p), c.put(g, k)));return k || {};
	      }function t(a) {
	        x.push(a);u.waitUntilQuiet(function () {
	          b.flush();c.flush();for (var a = I(), d = 0; d < x.length; d++) {
	            x[d](a);
	          }x.length = 0;
	        });
	      }function H(c, e, g) {
	        e = b.get(g);e || (e = Ha(a, c, Ua), "infinite" === e.animationIterationCount && (e.animationIterationCount = 1));b.put(g, e);c = e;g = c.animationDelay;e = c.transitionDelay;c.maxDelay = g && e ? Math.max(g, e) : g || e;c.maxDuration = Math.max(c.animationDuration * c.animationIterationCount, c.transitionDuration);return c;
	      }var T = V(e),
	          O = 0,
	          x = [];return function (a, c) {
	        function d() {
	          k();
	        }function u() {
	          k(!0);
	        }function k(b) {
	          if (!(w || F && O)) {
	            w = !0;O = !1;f.$$skipPreparationClasses || e.removeClass(a, ga);e.removeClass(a, ea);va(h, !1);pa(h, !1);s(x, function (a) {
	              h.style[a[0]] = "";
	            });T(a, f);ha(a, f);Object.keys(A).length && s(A, function (a, b) {
	              a ? h.style.setProperty(b, a) : h.style.removeProperty(b);
	            });if (f.onDone) f.onDone();fa && fa.length && a.off(fa.join(" "), z);var c = a.data("$$animateCss");c && (n.cancel(c[0].timer), a.removeData("$$animateCss"));G && G.complete(!b);
	          }
	        }function M(a) {
	          q.blockTransition && pa(h, a);q.blockKeyframeAnimation && va(h, !!a);
	        }function L() {
	          G = new l({ end: d, cancel: u });t(P);k();return { $$willAnimate: !1, start: function start() {
	              return G;
	            }, end: d };
	        }function z(a) {
	          a.stopPropagation();var b = a.originalEvent || a;a = b.$manualTimeStamp || Date.now();b = parseFloat(b.elapsedTime.toFixed(3));Math.max(a - W, 0) >= R && b >= m && (F = !0, k());
	        }function N() {
	          function b() {
	            if (!w) {
	              M(!1);s(x, function (a) {
	                h.style[a[0]] = a[1];
	              });T(a, f);e.addClass(a, ea);if (q.recalculateTimingStyles) {
	                na = h.className + " " + ga;ia = B(h, na);D = H(h, na, ia);ca = D.maxDelay;J = Math.max(ca, 0);m = D.maxDuration;if (0 === m) {
	                  k();return;
	                }q.hasTransitions = 0 < D.transitionDuration;q.hasAnimations = 0 < D.animationDuration;
	              }q.applyAnimationDelay && (ca = "boolean" !== typeof f.delay && wa(f.delay) ? parseFloat(f.delay) : ca, J = Math.max(ca, 0), D.animationDelay = ca, da = [qa, ca + "s"], x.push(da), h.style[da[0]] = da[1]);R = 1E3 * J;V = 1E3 * m;if (f.easing) {
	                var d,
	                    g = f.easing;q.hasTransitions && (d = S + "TimingFunction", x.push([d, g]), h.style[d] = g);q.hasAnimations && (d = aa + "TimingFunction", x.push([d, g]), h.style[d] = g);
	              }D.transitionDuration && fa.push(ya);D.animationDuration && fa.push(za);W = Date.now();var p = R + 1.5 * V;d = W + p;var g = a.data("$$animateCss") || [],
	                  N = !0;if (g.length) {
	                var l = g[0];(N = d > l.expectedEndTime) ? n.cancel(l.timer) : g.push(k);
	              }N && (p = n(c, p, !1), g[0] = { timer: p, expectedEndTime: d }, g.push(k), a.data("$$animateCss", g));if (fa.length) a.on(fa.join(" "), z);f.to && (f.cleanupStyles && Ka(A, h, Object.keys(f.to)), Ga(a, f));
	            }
	          }function c() {
	            var b = a.data("$$animateCss");if (b) {
	              for (var d = 1; d < b.length; d++) {
	                b[d]();
	              }a.removeData("$$animateCss");
	            }
	          }if (!w) if (h.parentNode) {
	            var d = function d(a) {
	              if (F) O && a && (O = !1, k());else if (O = !a, D.animationDuration) if (a = va(h, O), O) x.push(a);else {
	                var b = x,
	                    c = b.indexOf(a);0 <= a && b.splice(c, 1);
	              }
	            },
	                g = 0 < ba && (D.transitionDuration && 0 === X.transitionDuration || D.animationDuration && 0 === X.animationDuration) && Math.max(X.animationDelay, X.transitionDelay);g ? n(b, Math.floor(g * ba * 1E3), !1) : b();v.resume = function () {
	              d(!0);
	            };v.pause = function () {
	              d(!1);
	            };
	          } else k();
	        }var f = c || {};f.$$prepared || (f = oa(Ba(f)));var A = {},
	            h = y(a);
	        if (!h || !h.parentNode || !C.enabled()) return L();var x = [],
	            I = a.attr("class"),
	            E = Na(f),
	            w,
	            O,
	            F,
	            G,
	            v,
	            J,
	            R,
	            m,
	            V,
	            W,
	            fa = [];if (0 === f.duration || !g.animations && !g.transitions) return L();var ja = f.event && Y(f.event) ? f.event.join(" ") : f.event,
	            $ = "",
	            U = "";ja && f.structural ? $ = Z(ja, "ng-", !0) : ja && ($ = ja);f.addClass && (U += Z(f.addClass, "-add"));f.removeClass && (U.length && (U += " "), U += Z(f.removeClass, "-remove"));f.applyClassesEarly && U.length && T(a, f);var ga = [$, U].join(" ").trim(),
	            na = I + " " + ga,
	            ea = Z(ga, "-active"),
	            I = E.to && 0 < Object.keys(E.to).length;
	        if (!(0 < (f.keyframeStyle || "").length || I || ga)) return L();var ia, X;0 < f.stagger ? (E = parseFloat(f.stagger), X = { transitionDelay: E, animationDelay: E, transitionDuration: 0, animationDuration: 0 }) : (ia = B(h, na), X = Q(h, ga, ia, Va));f.$$skipPreparationClasses || e.addClass(a, ga);f.transitionStyle && (E = [S, f.transitionStyle], la(h, E), x.push(E));0 <= f.duration && (E = 0 < h.style[S].length, E = Ia(f.duration, E), la(h, E), x.push(E));f.keyframeStyle && (E = [aa, f.keyframeStyle], la(h, E), x.push(E));var ba = X ? 0 <= f.staggerIndex ? f.staggerIndex : b.count(ia) : 0;(ja = 0 === ba) && !f.skipBlocking && pa(h, 9999);var D = H(h, na, ia),
	            ca = D.maxDelay;J = Math.max(ca, 0);m = D.maxDuration;var q = {};q.hasTransitions = 0 < D.transitionDuration;q.hasAnimations = 0 < D.animationDuration;q.hasTransitionAll = q.hasTransitions && "all" == D.transitionProperty;q.applyTransitionDuration = I && (q.hasTransitions && !q.hasTransitionAll || q.hasAnimations && !q.hasTransitions);q.applyAnimationDuration = f.duration && q.hasAnimations;q.applyTransitionDelay = wa(f.delay) && (q.applyTransitionDuration || q.hasTransitions);q.applyAnimationDelay = wa(f.delay) && q.hasAnimations;q.recalculateTimingStyles = 0 < U.length;if (q.applyTransitionDuration || q.applyAnimationDuration) m = f.duration ? parseFloat(f.duration) : m, q.applyTransitionDuration && (q.hasTransitions = !0, D.transitionDuration = m, E = 0 < h.style[S + "Property"].length, x.push(Ia(m, E))), q.applyAnimationDuration && (q.hasAnimations = !0, D.animationDuration = m, x.push([Aa, m + "s"]));if (0 === m && !q.recalculateTimingStyles) return L();if (null != f.delay) {
	          var da;"boolean" !== typeof f.delay && (da = parseFloat(f.delay), J = Math.max(da, 0));q.applyTransitionDelay && x.push([ma, da + "s"]);q.applyAnimationDelay && x.push([qa, da + "s"]);
	        }null == f.duration && 0 < D.transitionDuration && (q.recalculateTimingStyles = q.recalculateTimingStyles || ja);R = 1E3 * J;V = 1E3 * m;f.skipBlocking || (q.blockTransition = 0 < D.transitionDuration, q.blockKeyframeAnimation = 0 < D.animationDuration && 0 < X.animationDelay && 0 === X.animationDuration);f.from && (f.cleanupStyles && Ka(A, h, Object.keys(f.from)), Fa(a, f));q.blockTransition || q.blockKeyframeAnimation ? M(m) : f.skipBlocking || pa(h, !1);return { $$willAnimate: !0,
	          end: d, start: function start() {
	            if (!w) return v = { end: d, cancel: u, resume: null, pause: null }, G = new l(v), t(N), G;
	          } };
	      };
	    }];
	  }]).provider("$$animateCssDriver", ["$$animationProvider", function (a) {
	    a.drivers.push("$$animateCssDriver");this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function (a, c, d, e, l, n, I) {
	      function g(a) {
	        return a.replace(/\bng-\S+\b/g, "");
	      }function u(a, b) {
	        G(a) && (a = a.split(" "));G(b) && (b = b.split(" "));return a.filter(function (a) {
	          return -1 === b.indexOf(a);
	        }).join(" ");
	      }
	      function C(c, e, n) {
	        function l(a) {
	          var b = {},
	              c = y(a).getBoundingClientRect();s(["width", "height", "top", "left"], function (a) {
	            var d = c[a];switch (a) {case "top":
	                d += t.scrollTop;break;case "left":
	                d += t.scrollLeft;}b[a] = Math.floor(d) + "px";
	          });return b;
	        }function p() {
	          var c = g(n.attr("class") || ""),
	              d = u(c, k),
	              c = u(k, c),
	              d = a(C, { to: l(n), addClass: "ng-anchor-in " + d, removeClass: "ng-anchor-out " + c, delay: !0 });return d.$$willAnimate ? d : null;
	        }function I() {
	          C.remove();e.removeClass("ng-animate-shim");n.removeClass("ng-animate-shim");
	        }var C = F(y(e).cloneNode(!0)),
	            k = g(C.attr("class") || "");e.addClass("ng-animate-shim");n.addClass("ng-animate-shim");C.addClass("ng-anchor");H.append(C);var M;c = function () {
	          var c = a(C, { addClass: "ng-anchor-out", delay: !0, from: l(e) });return c.$$willAnimate ? c : null;
	        }();if (!c && (M = p(), !M)) return I();var L = c || M;return { start: function start() {
	            function a() {
	              c && c.end();
	            }var b,
	                c = L.start();c.done(function () {
	              c = null;if (!M && (M = p())) return c = M.start(), c.done(function () {
	                c = null;I();b.complete();
	              }), c;I();b.complete();
	            });return b = new d({ end: a,
	              cancel: a });
	          } };
	      }function B(a, b, c, e) {
	        var g = Q(a, P),
	            n = Q(b, P),
	            l = [];s(e, function (a) {
	          (a = C(c, a.out, a["in"])) && l.push(a);
	        });if (g || n || 0 !== l.length) return { start: function start() {
	            function a() {
	              s(b, function (a) {
	                a.end();
	              });
	            }var b = [];g && b.push(g.start());n && b.push(n.start());s(l, function (a) {
	              b.push(a.start());
	            });var c = new d({ end: a, cancel: a });d.all(b, function (a) {
	              c.complete(a);
	            });return c;
	          } };
	      }function Q(c) {
	        var d = c.element,
	            e = c.options || {};c.structural && (e.event = c.event, e.structural = !0, e.applyClassesEarly = !0, "leave" === c.event && (e.onDone = e.domOperation));e.preparationClasses && (e.event = $(e.event, e.preparationClasses));c = a(d, e);return c.$$willAnimate ? c : null;
	      }if (!l.animations && !l.transitions) return P;var t = I[0].body;c = y(e);var H = F(c.parentNode && 11 === c.parentNode.nodeType || t.contains(c) ? c : t);V(n);return function (a) {
	        return a.from && a.to ? B(a.from, a.to, a.classes, a.anchors) : Q(a);
	      };
	    }];
	  }]).provider("$$animateJs", ["$animateProvider", function (a) {
	    this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function (b, c, d) {
	      function e(c) {
	        c = Y(c) ? c : c.split(" ");
	        for (var d = [], e = {}, l = 0; l < c.length; l++) {
	          var s = c[l],
	              B = a.$$registeredAnimations[s];B && !e[s] && (d.push(b.get(B)), e[s] = !0);
	        }return d;
	      }var l = V(d);return function (a, b, d, u) {
	        function C() {
	          u.domOperation();l(a, u);
	        }function B(a, b, d, e, f) {
	          switch (d) {case "animate":
	              b = [b, e.from, e.to, f];break;case "setClass":
	              b = [b, F, G, f];break;case "addClass":
	              b = [b, F, f];break;case "removeClass":
	              b = [b, G, f];break;default:
	              b = [b, f];}b.push(e);if (a = a.apply(a, b)) if (Ca(a.start) && (a = a.start()), a instanceof c) a.done(f);else if (Ca(a)) return a;return P;
	        }
	        function y(a, b, d, e, f) {
	          var g = [];s(e, function (e) {
	            var k = e[f];k && g.push(function () {
	              var e,
	                  f,
	                  g = !1,
	                  h = function h(a) {
	                g || (g = !0, (f || P)(a), e.complete(!a));
	              };e = new c({ end: function end() {
	                  h();
	                }, cancel: function cancel() {
	                  h(!0);
	                } });f = B(k, a, b, d, function (a) {
	                h(!1 === a);
	              });return e;
	            });
	          });return g;
	        }function t(a, b, d, e, f) {
	          var g = y(a, b, d, e, f);if (0 === g.length) {
	            var h, k;"beforeSetClass" === f ? (h = y(a, "removeClass", d, e, "beforeRemoveClass"), k = y(a, "addClass", d, e, "beforeAddClass")) : "setClass" === f && (h = y(a, "removeClass", d, e, "removeClass"), k = y(a, "addClass", d, e, "addClass"));h && (g = g.concat(h));k && (g = g.concat(k));
	          }if (0 !== g.length) return function (a) {
	            var b = [];g.length && s(g, function (a) {
	              b.push(a());
	            });b.length ? c.all(b, a) : a();return function (a) {
	              s(b, function (b) {
	                a ? b.cancel() : b.end();
	              });
	            };
	          };
	        }var H = !1;3 === arguments.length && ba(d) && (u = d, d = null);u = oa(u);d || (d = a.attr("class") || "", u.addClass && (d += " " + u.addClass), u.removeClass && (d += " " + u.removeClass));var F = u.addClass,
	            G = u.removeClass,
	            x = e(d),
	            r,
	            p;if (x.length) {
	          var K, J;"leave" == b ? (J = "leave", K = "afterLeave") : (J = "before" + b.charAt(0).toUpperCase() + b.substr(1), K = b);"enter" !== b && "move" !== b && (r = t(a, b, u, x, J));p = t(a, b, u, x, K);
	        }if (r || p) {
	          var k;return { $$willAnimate: !0, end: function end() {
	              k ? k.end() : (H = !0, C(), ha(a, u), k = new c(), k.complete(!0));return k;
	            }, start: function start() {
	              function b(c) {
	                H = !0;C();ha(a, u);k.complete(c);
	              }if (k) return k;k = new c();var d,
	                  e = [];r && e.push(function (a) {
	                d = r(a);
	              });e.length ? e.push(function (a) {
	                C();a(!0);
	              }) : C();p && e.push(function (a) {
	                d = p(a);
	              });k.setHost({ end: function end() {
	                  H || ((d || P)(void 0), b(void 0));
	                }, cancel: function cancel() {
	                  H || ((d || P)(!0), b(!0));
	                } });c.chain(e, b);return k;
	            } };
	        }
	      };
	    }];
	  }]).provider("$$animateJsDriver", ["$$animationProvider", function (a) {
	    a.drivers.push("$$animateJsDriver");this.$get = ["$$animateJs", "$$AnimateRunner", function (a, c) {
	      function d(c) {
	        return a(c.element, c.event, c.classes, c.options);
	      }return function (a) {
	        if (a.from && a.to) {
	          var b = d(a.from),
	              n = d(a.to);if (b || n) return { start: function start() {
	              function a() {
	                return function () {
	                  s(d, function (a) {
	                    a.end();
	                  });
	                };
	              }var d = [];b && d.push(b.start());n && d.push(n.start());c.all(d, function (a) {
	                e.complete(a);
	              });var e = new c({ end: a(), cancel: a() });
	              return e;
	            } };
	        } else return d(a);
	      };
	    }];
	  }]);
	})(window, window.angular);
	//# sourceMappingURL=angular-animate.min.js.map

/***/ },

/***/ 64:
/***/ function(module, exports) {

	"use strict";
	
	/*
	 AngularJS v1.5.8
	 (c) 2010-2016 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function (n, c) {
	  'use strict';
	  function l(b, a, g) {
	    var d = g.baseHref(),
	        k = b[0];return function (b, e, f) {
	      var g, h;f = f || {};h = f.expires;g = c.isDefined(f.path) ? f.path : d;c.isUndefined(e) && (h = "Thu, 01 Jan 1970 00:00:00 GMT", e = "");c.isString(h) && (h = new Date(h));e = encodeURIComponent(b) + "=" + encodeURIComponent(e);e = e + (g ? ";path=" + g : "") + (f.domain ? ";domain=" + f.domain : "");e += h ? ";expires=" + h.toUTCString() : "";e += f.secure ? ";secure" : "";f = e.length + 1;4096 < f && a.warn("Cookie '" + b + "' possibly not set or overflowed because it was too large (" + f + " > 4096 bytes)!");k.cookie = e;
	    };
	  }c.module("ngCookies", ["ng"]).provider("$cookies", [function () {
	    var b = this.defaults = {};this.$get = ["$$cookieReader", "$$cookieWriter", function (a, g) {
	      return { get: function get(d) {
	          return a()[d];
	        }, getObject: function getObject(d) {
	          return (d = this.get(d)) ? c.fromJson(d) : d;
	        }, getAll: function getAll() {
	          return a();
	        }, put: function put(d, a, m) {
	          g(d, a, m ? c.extend({}, b, m) : b);
	        }, putObject: function putObject(d, b, a) {
	          this.put(d, c.toJson(b), a);
	        }, remove: function remove(a, k) {
	          g(a, void 0, k ? c.extend({}, b, k) : b);
	        } };
	    }];
	  }]);c.module("ngCookies").factory("$cookieStore", ["$cookies", function (b) {
	    return { get: function get(a) {
	        return b.getObject(a);
	      }, put: function put(a, c) {
	        b.putObject(a, c);
	      }, remove: function remove(a) {
	        b.remove(a);
	      } };
	  }]);l.$inject = ["$document", "$log", "$browser"];c.module("ngCookies").provider("$$cookieWriter", function () {
	    this.$get = l;
	  });
	})(window, window.angular);
	//# sourceMappingURL=angular-cookies.min.js.map

/***/ },

/***/ 65:
/***/ function(module, exports) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*
	 AngularJS v1.5.8
	 (c) 2010-2016 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function (P, d) {
	  'use strict';
	  function G(t, g) {
	    g = g || {};d.forEach(g, function (d, q) {
	      delete g[q];
	    });for (var q in t) {
	      !t.hasOwnProperty(q) || "$" === q.charAt(0) && "$" === q.charAt(1) || (g[q] = t[q]);
	    }return g;
	  }var z = d.$$minErr("$resource"),
	      M = /^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;d.module("ngResource", ["ng"]).provider("$resource", function () {
	    var t = /^https?:\/\/[^\/]*/,
	        g = this;this.defaults = { stripTrailingSlashes: !0, cancellable: !1, actions: { get: { method: "GET" }, save: { method: "POST" }, query: { method: "GET", isArray: !0 }, remove: { method: "DELETE" },
	        "delete": { method: "DELETE" } } };this.$get = ["$http", "$log", "$q", "$timeout", function (q, L, H, I) {
	      function A(d, h) {
	        return encodeURIComponent(d).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, h ? "%20" : "+");
	      }function B(d, h) {
	        this.template = d;this.defaults = v({}, g.defaults, h);this.urlParams = {};
	      }function J(e, h, n, k) {
	        function b(a, c) {
	          var b = {};c = v({}, h, c);u(c, function (c, h) {
	            x(c) && (c = c(a));var f;if (c && c.charAt && "@" == c.charAt(0)) {
	              f = a;var l = c.substr(1);if (null == l || "" === l || "hasOwnProperty" === l || !M.test("." + l)) throw z("badmember", l);for (var l = l.split("."), m = 0, k = l.length; m < k && d.isDefined(f); m++) {
	                var r = l[m];f = null !== f ? f[r] : void 0;
	              }
	            } else f = c;b[h] = f;
	          });return b;
	        }function N(a) {
	          return a.resource;
	        }function m(a) {
	          G(a || {}, this);
	        }var t = new B(e, k);n = v({}, g.defaults.actions, n);m.prototype.toJSON = function () {
	          var a = v({}, this);delete a.$promise;delete a.$resolved;return a;
	        };u(n, function (a, c) {
	          var h = /^(POST|PUT|PATCH)$/i.test(a.method),
	              e = a.timeout,
	              E = d.isDefined(a.cancellable) ? a.cancellable : k && d.isDefined(k.cancellable) ? k.cancellable : g.defaults.cancellable;e && !d.isNumber(e) && (L.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."), delete a.timeout, e = null);m[c] = function (f, l, k, g) {
	            var r = {},
	                n,
	                w,
	                C;switch (arguments.length) {case 4:
	                C = g, w = k;case 3:case 2:
	                if (x(l)) {
	                  if (x(f)) {
	                    w = f;C = l;break;
	                  }w = l;C = k;
	                } else {
	                  r = f;n = l;w = k;break;
	                }case 1:
	                x(f) ? w = f : h ? n = f : r = f;break;case 0:
	                break;default:
	                throw z("badargs", arguments.length);}var D = this instanceof m,
	                p = D ? n : a.isArray ? [] : new m(n),
	                s = {},
	                A = a.interceptor && a.interceptor.response || N,
	                B = a.interceptor && a.interceptor.responseError || void 0,
	                y,
	                F;u(a, function (a, c) {
	              switch (c) {default:
	                  s[c] = O(a);case "params":case "isArray":case "interceptor":case "cancellable":}
	            });!D && E && (y = H.defer(), s.timeout = y.promise, e && (F = I(y.resolve, e)));h && (s.data = n);t.setUrlParams(s, v({}, b(n, a.params || {}), r), a.url);r = q(s).then(function (f) {
	              var b = f.data;if (b) {
	                if (d.isArray(b) !== !!a.isArray) throw z("badcfg", c, a.isArray ? "array" : "object", d.isArray(b) ? "array" : "object", s.method, s.url);if (a.isArray) p.length = 0, u(b, function (a) {
	                  "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) ? p.push(new m(a)) : p.push(a);
	                });else {
	                  var l = p.$promise;G(b, p);p.$promise = l;
	                }
	              }f.resource = p;return f;
	            }, function (a) {
	              (C || K)(a);return H.reject(a);
	            });r["finally"](function () {
	              p.$resolved = !0;!D && E && (p.$cancelRequest = d.noop, I.cancel(F), y = F = s.timeout = null);
	            });r = r.then(function (a) {
	              var c = A(a);(w || K)(c, a.headers);return c;
	            }, B);
	            return D ? r : (p.$promise = r, p.$resolved = !1, E && (p.$cancelRequest = y.resolve), p);
	          };m.prototype["$" + c] = function (a, b, d) {
	            x(a) && (d = b, b = a, a = {});a = m[c].call(this, a, this, b, d);return a.$promise || a;
	          };
	        });m.bind = function (a) {
	          return J(e, v({}, h, a), n);
	        };return m;
	      }var K = d.noop,
	          u = d.forEach,
	          v = d.extend,
	          O = d.copy,
	          x = d.isFunction;B.prototype = { setUrlParams: function setUrlParams(e, h, n) {
	          var k = this,
	              b = n || k.template,
	              g,
	              m,
	              q = "",
	              a = k.urlParams = {};u(b.split(/\W/), function (c) {
	            if ("hasOwnProperty" === c) throw z("badname");!/^\d+$/.test(c) && c && new RegExp("(^|[^\\\\]):" + c + "(\\W|$)").test(b) && (a[c] = { isQueryParamValue: new RegExp("\\?.*=:" + c + "(?:\\W|$)").test(b) });
	          });b = b.replace(/\\:/g, ":");b = b.replace(t, function (a) {
	            q = a;return "";
	          });h = h || {};u(k.urlParams, function (a, e) {
	            g = h.hasOwnProperty(e) ? h[e] : k.defaults[e];d.isDefined(g) && null !== g ? (m = a.isQueryParamValue ? A(g, !0) : A(g, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+"), b = b.replace(new RegExp(":" + e + "(\\W|$)", "g"), function (a, c) {
	              return m + c;
	            })) : b = b.replace(new RegExp("(/?):" + e + "(\\W|$)", "g"), function (a, c, b) {
	              return "/" == b.charAt(0) ? b : c + b;
	            });
	          });k.defaults.stripTrailingSlashes && (b = b.replace(/\/+$/, "") || "/");b = b.replace(/\/\.(?=\w+($|\?))/, ".");e.url = q + b.replace(/\/\\\./, "/.");u(h, function (a, b) {
	            k.urlParams[b] || (e.params = e.params || {}, e.params[b] = a);
	          });
	        } };return J;
	    }];
	  });
	})(window, window.angular);
	//# sourceMappingURL=angular-resource.min.js.map

/***/ },

/***/ 66:
/***/ function(module, exports) {

	"use strict";
	
	/*
	 AngularJS v1.5.8
	 (c) 2010-2016 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function (E, d) {
	  'use strict';
	  function y(t, l, g) {
	    return { restrict: "ECA", terminal: !0, priority: 400, transclude: "element", link: function link(b, e, a, c, k) {
	        function p() {
	          m && (g.cancel(m), m = null);h && (h.$destroy(), h = null);n && (m = g.leave(n), m.then(function () {
	            m = null;
	          }), n = null);
	        }function B() {
	          var a = t.current && t.current.locals;if (d.isDefined(a && a.$template)) {
	            var a = b.$new(),
	                c = t.current;n = k(a, function (a) {
	              g.enter(a, null, n || e).then(function () {
	                !d.isDefined(A) || A && !b.$eval(A) || l();
	              });p();
	            });h = c.scope = a;h.$emit("$viewContentLoaded");
	            h.$eval(s);
	          } else p();
	        }var h,
	            n,
	            m,
	            A = a.autoscroll,
	            s = a.onload || "";b.$on("$routeChangeSuccess", B);B();
	      } };
	  }function w(d, l, g) {
	    return { restrict: "ECA", priority: -400, link: function link(b, e) {
	        var a = g.current,
	            c = a.locals;e.html(c.$template);var k = d(e.contents());if (a.controller) {
	          c.$scope = b;var p = l(a.controller, c);a.controllerAs && (b[a.controllerAs] = p);e.data("$ngControllerController", p);e.children().data("$ngControllerController", p);
	        }b[a.resolveAs || "$resolve"] = c;k(b);
	      } };
	  }var x,
	      C,
	      s = d.module("ngRoute", ["ng"]).provider("$route", function () {
	    function t(b, e) {
	      return d.extend(Object.create(b), e);
	    }function l(b, d) {
	      var a = d.caseInsensitiveMatch,
	          c = { originalPath: b, regexp: b },
	          g = c.keys = [];b = b.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)(\*\?|[\?\*])?/g, function (b, a, d, c) {
	        b = "?" === c || "*?" === c ? "?" : null;c = "*" === c || "*?" === c ? "*" : null;g.push({ name: d, optional: !!b });a = a || "";return "" + (b ? "" : a) + "(?:" + (b ? a : "") + (c && "(.+?)" || "([^/]+)") + (b || "") + ")" + (b || "");
	      }).replace(/([\/$\*])/g, "\\$1");c.regexp = new RegExp("^" + b + "$", a ? "i" : "");return c;
	    }x = d.isArray;C = d.isObject;var g = {};this.when = function (b, e) {
	      var a;a = void 0;if (x(e)) {
	        a = a || [];for (var c = 0, k = e.length; c < k; c++) {
	          a[c] = e[c];
	        }
	      } else if (C(e)) for (c in a = a || {}, e) {
	        if ("$" !== c.charAt(0) || "$" !== c.charAt(1)) a[c] = e[c];
	      }a = a || e;d.isUndefined(a.reloadOnSearch) && (a.reloadOnSearch = !0);d.isUndefined(a.caseInsensitiveMatch) && (a.caseInsensitiveMatch = this.caseInsensitiveMatch);g[b] = d.extend(a, b && l(b, a));b && (c = "/" == b[b.length - 1] ? b.substr(0, b.length - 1) : b + "/", g[c] = d.extend({ redirectTo: b }, l(c, a)));return this;
	    };this.caseInsensitiveMatch = !1;this.otherwise = function (b) {
	      "string" === typeof b && (b = { redirectTo: b });this.when(null, b);return this;
	    };this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function (b, e, a, c, k, p, l) {
	      function h(a) {
	        var f = v.current;(x = (r = y()) && f && r.$$route === f.$$route && d.equals(r.pathParams, f.pathParams) && !r.reloadOnSearch && !z) || !f && !r || b.$broadcast("$routeChangeStart", r, f).defaultPrevented && a && a.preventDefault();
	      }function n() {
	        var u = v.current,
	            f = r;if (x) u.params = f.params, d.copy(u.params, a), b.$broadcast("$routeUpdate", u);else if (f || u) z = !1, (v.current = f) && f.redirectTo && (d.isString(f.redirectTo) ? e.path(w(f.redirectTo, f.params)).search(f.params).replace() : e.url(f.redirectTo(f.pathParams, e.path(), e.search())).replace()), c.when(f).then(m).then(function (c) {
	          f == v.current && (f && (f.locals = c, d.copy(f.params, a)), b.$broadcast("$routeChangeSuccess", f, u));
	        }, function (a) {
	          f == v.current && b.$broadcast("$routeChangeError", f, u, a);
	        });
	      }function m(a) {
	        if (a) {
	          var b = d.extend({}, a.resolve);d.forEach(b, function (a, c) {
	            b[c] = d.isString(a) ? k.get(a) : k.invoke(a, null, null, c);
	          });a = s(a);d.isDefined(a) && (b.$template = a);return c.all(b);
	        }
	      }function s(a) {
	        var b, c;d.isDefined(b = a.template) ? d.isFunction(b) && (b = b(a.params)) : d.isDefined(c = a.templateUrl) && (d.isFunction(c) && (c = c(a.params)), d.isDefined(c) && (a.loadedTemplateUrl = l.valueOf(c), b = p(c)));return b;
	      }function y() {
	        var a, b;d.forEach(g, function (c, g) {
	          var q;if (q = !b) {
	            var h = e.path();q = c.keys;var l = {};if (c.regexp) {
	              if (h = c.regexp.exec(h)) {
	                for (var k = 1, p = h.length; k < p; ++k) {
	                  var m = q[k - 1],
	                      n = h[k];m && n && (l[m.name] = n);
	                }q = l;
	              } else q = null;
	            } else q = null;q = a = q;
	          }q && (b = t(c, { params: d.extend({}, e.search(), a), pathParams: a }), b.$$route = c);
	        });return b || g[null] && t(g[null], { params: {}, pathParams: {} });
	      }function w(a, b) {
	        var c = [];d.forEach((a || "").split(":"), function (a, d) {
	          if (0 === d) c.push(a);else {
	            var e = a.match(/(\w+)(?:[?*])?(.*)/),
	                g = e[1];c.push(b[g]);c.push(e[2] || "");delete b[g];
	          }
	        });return c.join("");
	      }var z = !1,
	          r,
	          x,
	          v = { routes: g, reload: function reload() {
	          z = !0;var a = { defaultPrevented: !1, preventDefault: function preventDefault() {
	              this.defaultPrevented = !0;z = !1;
	            } };b.$evalAsync(function () {
	            h(a);a.defaultPrevented || n();
	          });
	        }, updateParams: function updateParams(a) {
	          if (this.current && this.current.$$route) a = d.extend({}, this.current.params, a), e.path(w(this.current.$$route.originalPath, a)), e.search(a);else throw D("norout");
	        } };b.$on("$locationChangeStart", h);b.$on("$locationChangeSuccess", n);return v;
	    }];
	  }),
	      D = d.$$minErr("ngRoute");s.provider("$routeParams", function () {
	    this.$get = function () {
	      return {};
	    };
	  });s.directive("ngView", y);s.directive("ngView", w);y.$inject = ["$route", "$anchorScroll", "$animate"];w.$inject = ["$compile", "$controller", "$route"];
	})(window, window.angular);
	//# sourceMappingURL=angular-route.min.js.map

/***/ },

/***/ 67:
/***/ function(module, exports) {

	"use strict";
	
	/*
	 AngularJS v1.5.8
	 (c) 2010-2016 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function (s, g) {
	  'use strict';
	  function H(g) {
	    var l = [];t(l, A).chars(g);return l.join("");
	  }var B = g.$$minErr("$sanitize"),
	      C,
	      l,
	      D,
	      E,
	      q,
	      A,
	      F,
	      t;g.module("ngSanitize", []).provider("$sanitize", function () {
	    function k(a, e) {
	      var b = {},
	          c = a.split(","),
	          h;for (h = 0; h < c.length; h++) {
	        b[e ? q(c[h]) : c[h]] = !0;
	      }return b;
	    }function I(a) {
	      for (var e = {}, b = 0, c = a.length; b < c; b++) {
	        var h = a[b];e[h.name] = h.value;
	      }return e;
	    }function G(a) {
	      return a.replace(/&/g, "&amp;").replace(J, function (a) {
	        var b = a.charCodeAt(0);a = a.charCodeAt(1);return "&#" + (1024 * (b - 55296) + (a - 56320) + 65536) + ";";
	      }).replace(K, function (a) {
	        return "&#" + a.charCodeAt(0) + ";";
	      }).replace(/</g, "&lt;").replace(/>/g, "&gt;");
	    }function u(a) {
	      if (a.nodeType === s.Node.ELEMENT_NODE) for (var e = a.attributes, b = 0, c = e.length; b < c; b++) {
	        var h = e[b],
	            d = h.name.toLowerCase();if ("xmlns:ns1" === d || 0 === d.lastIndexOf("ns1:", 0)) a.removeAttributeNode(h), b--, c--;
	      }(e = a.firstChild) && u(e);(e = a.nextSibling) && u(e);
	    }var v = !1;this.$get = ["$$sanitizeUri", function (a) {
	      v && l(w, x);return function (e) {
	        var b = [];F(e, t(b, function (b, h) {
	          return !/^unsafe:/.test(a(b, h));
	        }));return b.join("");
	      };
	    }];this.enableSvg = function (a) {
	      return E(a) ? (v = a, this) : v;
	    };C = g.bind;l = g.extend;D = g.forEach;E = g.isDefined;q = g.lowercase;A = g.noop;F = function F(a, e) {
	      null === a || void 0 === a ? a = "" : "string" !== typeof a && (a = "" + a);f.innerHTML = a;var b = 5;do {
	        if (0 === b) throw B("uinput");b--;s.document.documentMode && u(f);a = f.innerHTML;f.innerHTML = a;
	      } while (a !== f.innerHTML);for (b = f.firstChild; b;) {
	        switch (b.nodeType) {case 1:
	            e.start(b.nodeName.toLowerCase(), I(b.attributes));break;case 3:
	            e.chars(b.textContent);}var c;if (!(c = b.firstChild) && (1 == b.nodeType && e.end(b.nodeName.toLowerCase()), c = b.nextSibling, !c)) for (; null == c;) {
	          b = b.parentNode;if (b === f) break;c = b.nextSibling;1 == b.nodeType && e.end(b.nodeName.toLowerCase());
	        }b = c;
	      }for (; b = f.firstChild;) {
	        f.removeChild(b);
	      }
	    };t = function t(a, e) {
	      var b = !1,
	          c = C(a, a.push);return { start: function start(a, d) {
	          a = q(a);!b && z[a] && (b = a);b || !0 !== w[a] || (c("<"), c(a), D(d, function (b, d) {
	            var f = q(d),
	                g = "img" === a && "src" === f || "background" === f;!0 !== m[f] || !0 === n[f] && !e(b, g) || (c(" "), c(d), c('="'), c(G(b)), c('"'));
	          }), c(">"));
	        }, end: function end(a) {
	          a = q(a);b || !0 !== w[a] || !0 === y[a] || (c("</"), c(a), c(">"));a == b && (b = !1);
	        }, chars: function chars(a) {
	          b || c(G(a));
	        } };
	    };var J = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
	        K = /([^\#-~ |!])/g,
	        y = k("area,br,col,hr,img,wbr"),
	        d = k("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
	        r = k("rp,rt"),
	        p = l({}, r, d),
	        d = l({}, d, k("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),
	        r = l({}, r, k("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
	        x = k("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),
	        z = k("script,style"),
	        w = l({}, y, d, r, p),
	        n = k("background,cite,href,longdesc,src,xlink:href"),
	        p = k("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
	        r = k("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0),
	        m = l({}, n, r, p),
	        f;(function (a) {
	      if (a.document && a.document.implementation) a = a.document.implementation.createHTMLDocument("inert");else throw B("noinert");var e = (a.documentElement || a.getDocumentElement()).getElementsByTagName("body");1 === e.length ? f = e[0] : (e = a.createElement("html"), f = a.createElement("body"), e.appendChild(f), a.appendChild(e));
	    })(s);
	  });g.module("ngSanitize").filter("linky", ["$sanitize", function (k) {
	    var l = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
	        q = /^mailto:/i,
	        u = g.$$minErr("linky"),
	        v = g.isDefined,
	        s = g.isFunction,
	        t = g.isObject,
	        y = g.isString;return function (d, g, p) {
	      function x(a) {
	        a && m.push(H(a));
	      }function z(a, b) {
	        var c,
	            d = w(a);m.push("<a ");for (c in d) {
	          m.push(c + '="' + d[c] + '" ');
	        }!v(g) || "target" in d || m.push('target="', g, '" ');m.push('href="', a.replace(/"/g, "&quot;"), '">');x(b);m.push("</a>");
	      }if (null == d || "" === d) return d;if (!y(d)) throw u("notstring", d);for (var w = s(p) ? p : t(p) ? function () {
	        return p;
	      } : function () {
	        return {};
	      }, n = d, m = [], f, a; d = n.match(l);) {
	        f = d[0], d[2] || d[4] || (f = (d[3] ? "http://" : "mailto:") + f), a = d.index, x(n.substr(0, a)), z(f, d[0].replace(q, "")), n = n.substring(a + d[0].length);
	      }x(n);return k(m.join(""));
	    };
	  }]);
	})(window, window.angular);
	//# sourceMappingURL=angular-sanitize.min.js.map

/***/ },

/***/ 68:
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * angular-strap
	 * @version v2.3.9 - 2016-06-10
	 * @link http://mgcrea.github.io/angular-strap
	 * @author Olivier Louvignes <olivier@mg-crea.com> (https://github.com/mgcrea)
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */
	!function (e, t, n) {
	  'use strict';
	  function a(e, n, a, o, i, r) {
	    function s(e, n) {
	      return angular.element((n || t).querySelectorAll(e));
	    }function l(e) {
	      return u[e] ? u[e] : u[e] = n.get(e, { cache: r }).then(function (e) {
	        return e.data;
	      });
	    }this.compile = function (t) {
	      t.template && /\.html$/.test(t.template) && (console.warn('Deprecated use of `template` option to pass a file. Please use the `templateUrl` option instead.'), t.templateUrl = t.template, t.template = '');var n = t.templateUrl,
	          r = t.template || '',
	          u = t.controller,
	          c = t.controllerAs,
	          d = angular.copy(t.resolve || {}),
	          f = angular.copy(t.locals || {}),
	          p = t.transformTemplate || angular.identity,
	          g = t.bindToController;if (angular.forEach(d, function (e, t) {
	        angular.isString(e) ? d[t] = a.get(e) : d[t] = a.invoke(e);
	      }), angular.extend(d, f), r) d.$template = e.when(r);else {
	        if (!n) throw new Error('Missing `template` / `templateUrl` option.');d.$template = l(n);
	      }return t.titleTemplate && (d.$template = e.all([d.$template, l(t.titleTemplate)]).then(function (e) {
	        var t = angular.element(e[0]);return s('[ng-bind="title"]', t[0]).removeAttr('ng-bind').html(e[1]), t[0].outerHTML;
	      })), t.contentTemplate && (d.$template = e.all([d.$template, l(t.contentTemplate)]).then(function (e) {
	        var n = angular.element(e[0]),
	            a = s('[ng-bind="content"]', n[0]).removeAttr('ng-bind').html(e[1]);return t.templateUrl || a.next().remove(), n[0].outerHTML;
	      })), e.all(d).then(function (e) {
	        var n = p(e.$template);t.html && (n = n.replace(/ng-bind="/gi, 'ng-bind-html="'));var a = angular.element('<div>').html(n.trim()).contents(),
	            r = o(a);return { locals: e, element: a, link: function link(t) {
	            if (e.$scope = t, u) {
	              var n = i(u, e, !0);g && angular.extend(n.instance, e);var o = angular.isObject(n) ? n : n();a.data('$ngControllerController', o), a.children().data('$ngControllerController', o), c && (t[c] = o);
	            }return r.apply(null, arguments);
	          } };
	      });
	    };var u = {};
	  }a.$inject = ['$q', '$http', '$injector', '$compile', '$controller', '$templateCache'], angular.module('mgcrea.ngStrap.typeahead', ['mgcrea.ngStrap.tooltip', 'mgcrea.ngStrap.helpers.parseOptions']).provider('$typeahead', function () {
	    var e = this.defaults = { animation: 'am-fade', prefixClass: 'typeahead', prefixEvent: '$typeahead', placement: 'bottom-left', templateUrl: 'typeahead/typeahead.tpl.html', trigger: 'focus', container: !1, keyboard: !0, html: !1, delay: 0, minLength: 1, filter: 'bsAsyncFilter', limit: 6, autoSelect: !1, comparator: '', trimValue: !0 };this.$get = ['$window', '$rootScope', '$tooltip', '$$rAF', '$timeout', function (t, n, a, o, i) {
	      function r(t, n, r) {
	        var l = {},
	            u = angular.extend({}, e, r);l = a(t, u);var c = r.scope,
	            d = l.$scope;d.$resetMatches = function () {
	          d.$matches = [], d.$activeIndex = u.autoSelect ? 0 : -1;
	        }, d.$resetMatches(), d.$activate = function (e) {
	          d.$$postDigest(function () {
	            l.activate(e);
	          });
	        }, d.$select = function (e, t) {
	          d.$$postDigest(function () {
	            l.select(e);
	          });
	        }, d.$isVisible = function () {
	          return l.$isVisible();
	        }, l.update = function (e) {
	          d.$matches = e, d.$activeIndex >= e.length && (d.$activeIndex = u.autoSelect ? 0 : -1), s(d), o(l.$applyPlacement);
	        }, l.activate = function (e) {
	          d.$activeIndex = e;
	        }, l.select = function (e) {
	          if (-1 !== e) {
	            var t = d.$matches[e].value;n.$setViewValue(t), n.$render(), d.$resetMatches(), c && c.$digest(), d.$emit(u.prefixEvent + '.select', t, e, l), angular.isDefined(u.onSelect) && angular.isFunction(u.onSelect) && u.onSelect(t, e, l);
	          }
	        }, l.$isVisible = function () {
	          return u.minLength && n ? d.$matches.length && angular.isString(n.$viewValue) && n.$viewValue.length >= u.minLength : !!d.$matches.length;
	        }, l.$getIndex = function (e) {
	          var t;for (t = d.$matches.length; t-- && !angular.equals(d.$matches[t].value, e);) {}return t;
	        }, l.$onMouseDown = function (e) {
	          e.preventDefault(), e.stopPropagation();
	        }, l.$onKeyDown = function (e) {
	          /(38|40|13)/.test(e.keyCode) && (!l.$isVisible() || 13 === e.keyCode && -1 === d.$activeIndex || (e.preventDefault(), e.stopPropagation()), 13 === e.keyCode && d.$matches.length ? l.select(d.$activeIndex) : 38 === e.keyCode && d.$activeIndex > 0 ? d.$activeIndex-- : 40 === e.keyCode && d.$activeIndex < d.$matches.length - 1 ? d.$activeIndex++ : angular.isUndefined(d.$activeIndex) && (d.$activeIndex = 0), d.$digest());
	        };var f = l.show;l.show = function () {
	          f(), i(function () {
	            l.$element && (l.$element.on('mousedown', l.$onMouseDown), u.keyboard && t && t.on('keydown', l.$onKeyDown));
	          }, 0, !1);
	        };var p = l.hide;return l.hide = function () {
	          l.$element && l.$element.off('mousedown', l.$onMouseDown), u.keyboard && t && t.off('keydown', l.$onKeyDown), u.autoSelect || l.activate(-1), p();
	        }, l;
	      }function s(e) {
	        e.$$phase || e.$root && e.$root.$$phase || e.$digest();
	      }return r.defaults = e, r;
	    }];
	  }).filter('bsAsyncFilter', ['$filter', function (e) {
	    return function (t, n, a) {
	      return t && angular.isFunction(t.then) ? t.then(function (t) {
	        return e('filter')(t, n, a);
	      }) : e('filter')(t, n, a);
	    };
	  }]).directive('bsTypeahead', ['$window', '$parse', '$q', '$typeahead', '$parseOptions', function (e, t, n, a, o) {
	    var i = a.defaults;return { restrict: 'EAC', require: 'ngModel', link: function link(e, t, n, r) {
	        t.off('change');var s = { scope: e };angular.forEach(['template', 'templateUrl', 'controller', 'controllerAs', 'placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'filter', 'limit', 'minLength', 'watchOptions', 'selectMode', 'autoSelect', 'comparator', 'id', 'prefixEvent', 'prefixClass'], function (e) {
	          angular.isDefined(n[e]) && (s[e] = n[e]);
	        });var l = /^(false|0|)$/i;angular.forEach(['html', 'container', 'trimValue', 'filter'], function (e) {
	          angular.isDefined(n[e]) && l.test(n[e]) && (s[e] = !1);
	        }), angular.forEach(['onBeforeShow', 'onShow', 'onBeforeHide', 'onHide', 'onSelect'], function (t) {
	          var a = 'bs' + t.charAt(0).toUpperCase() + t.slice(1);angular.isDefined(n[a]) && (s[t] = e.$eval(n[a]));
	        }), t.attr('autocomplete') || t.attr('autocomplete', 'off');var u = angular.isDefined(s.filter) ? s.filter : i.filter,
	            c = s.limit || i.limit,
	            d = s.comparator || i.comparator,
	            f = n.bsOptions;u && (f += ' | ' + u + ':$viewValue', d && (f += ':' + d)), c && (f += ' | limitTo:' + c);var p = o(f),
	            g = a(t, r, s);if (s.watchOptions) {
	          var m = p.$match[7].replace(/\|.+/, '').replace(/\(.*\)/g, '').trim();e.$watchCollection(m, function (t, n) {
	            p.valuesFn(e, r).then(function (e) {
	              g.update(e), r.$render();
	            });
	          });
	        }e.$watch(n.ngModel, function (t, n) {
	          e.$modelValue = t, p.valuesFn(e, r).then(function (e) {
	            return s.selectMode && !e.length && t.length > 0 ? void r.$setViewValue(r.$viewValue.substring(0, r.$viewValue.length - 1)) : (e.length > c && (e = e.slice(0, c)), g.update(e), void r.$render());
	          });
	        }), r.$formatters.push(function (e) {
	          var t = p.displayValue(e);return t ? t : angular.isDefined(e) && 'object' != (typeof e === 'undefined' ? 'undefined' : _typeof(e)) ? e : '';
	        }), r.$render = function () {
	          if (r.$isEmpty(r.$viewValue)) return t.val('');var e = g.$getIndex(r.$modelValue),
	              n = -1 !== e ? g.$scope.$matches[e].label : r.$viewValue;n = angular.isObject(n) ? p.displayValue(n) : n;var a = n ? n.toString().replace(/<(?:.|\n)*?>/gm, '') : '',
	              o = t[0].selectionStart,
	              i = t[0].selectionEnd;t.val(s.trimValue === !1 ? a : a.trim()), t[0].setSelectionRange(o, i);
	        }, e.$on('$destroy', function () {
	          g && g.destroy(), s = null, g = null;
	        });
	      } };
	  }]), angular.module('mgcrea.ngStrap.tab', []).provider('$tab', function () {
	    var e = this.defaults = { animation: 'am-fade', template: 'tab/tab.tpl.html', navClass: 'nav-tabs', activeClass: 'active' },
	        t = this.controller = function (t, n, a) {
	      var o = this;o.$options = angular.copy(e), angular.forEach(['animation', 'navClass', 'activeClass'], function (e) {
	        angular.isDefined(a[e]) && (o.$options[e] = a[e]);
	      }), t.$navClass = o.$options.navClass, t.$activeClass = o.$options.activeClass, o.$panes = t.$panes = [], o.$activePaneChangeListeners = o.$viewChangeListeners = [], o.$push = function (e) {
	        angular.isUndefined(o.$panes.$active) && t.$setActive(e.name || 0), o.$panes.push(e);
	      }, o.$remove = function (e) {
	        var t,
	            n = o.$panes.indexOf(e),
	            a = o.$panes.$active;t = angular.isString(a) ? o.$panes.map(function (e) {
	          return e.name;
	        }).indexOf(a) : o.$panes.$active, o.$panes.splice(n, 1), t > n ? t-- : n === t && t === o.$panes.length && t--, t >= 0 && t < o.$panes.length ? o.$setActive(o.$panes[t].name || t) : o.$setActive();
	      }, o.$setActive = t.$setActive = function (e) {
	        o.$panes.$active = e, o.$activePaneChangeListeners.forEach(function (e) {
	          e();
	        });
	      }, o.$isActive = t.$isActive = function (e, t) {
	        return o.$panes.$active === e.name || o.$panes.$active === t;
	      };
	    };this.$get = function () {
	      var n = {};return n.defaults = e, n.controller = t, n;
	    };
	  }).directive('bsTabs', ['$window', '$animate', '$tab', '$parse', function (e, t, n, a) {
	    var o = n.defaults;return { require: ['?ngModel', 'bsTabs'], transclude: !0, scope: !0, controller: ['$scope', '$element', '$attrs', n.controller], templateUrl: function templateUrl(e, t) {
	        return t.template || o.template;
	      }, link: function link(e, t, n, o) {
	        var i = o[0],
	            r = o[1];if (i && (r.$activePaneChangeListeners.push(function () {
	          i.$setViewValue(r.$panes.$active);
	        }), i.$formatters.push(function (e) {
	          return r.$setActive(e), e;
	        })), n.bsActivePane) {
	          var s = a(n.bsActivePane);r.$activePaneChangeListeners.push(function () {
	            s.assign(e, r.$panes.$active);
	          }), e.$watch(n.bsActivePane, function (e, t) {
	            r.$setActive(e);
	          }, !0);
	        }
	      } };
	  }]).directive('bsPane', ['$window', '$animate', '$sce', function (e, t, n) {
	    return { require: ['^?ngModel', '^bsTabs'], scope: !0, link: function link(e, a, o, i) {
	        function r() {
	          var n = s.$panes.indexOf(e);t[s.$isActive(e, n) ? 'addClass' : 'removeClass'](a, s.$options.activeClass);
	        }var s = i[1];a.addClass('tab-pane'), o.$observe('title', function (t, a) {
	          e.title = n.trustAsHtml(t);
	        }), e.name = o.name, s.$options.animation && a.addClass(s.$options.animation), o.$observe('disabled', function (t, n) {
	          e.disabled = e.$eval(t);
	        }), s.$push(e), e.$on('$destroy', function () {
	          s.$remove(e);
	        }), s.$activePaneChangeListeners.push(function () {
	          r();
	        }), r();
	      } };
	  }]), angular.module('mgcrea.ngStrap.tooltip', ['mgcrea.ngStrap.core', 'mgcrea.ngStrap.helpers.dimensions']).provider('$tooltip', function () {
	    var e = this.defaults = { animation: 'am-fade', customClass: '', prefixClass: 'tooltip', prefixEvent: 'tooltip', container: !1, target: !1, placement: 'top', templateUrl: 'tooltip/tooltip.tpl.html', template: '', titleTemplate: !1, trigger: 'hover focus', keyboard: !1, html: !1, show: !1, title: '', type: '', delay: 0, autoClose: !1, bsEnabled: !0, mouseDownPreventDefault: !0, mouseDownStopPropagation: !0, viewport: { selector: 'body', padding: 0 } };this.$get = ['$window', '$rootScope', '$bsCompiler', '$q', '$templateCache', '$http', '$animate', '$sce', 'dimensions', '$$rAF', '$timeout', function (n, a, o, i, r, s, l, u, c, d, f) {
	      function p(i, r) {
	        function s() {
	          O.$emit(V.prefixEvent + '.show', F), angular.isDefined(V.onShow) && angular.isFunction(V.onShow) && V.onShow(F);
	        }function p() {
	          if (O.$emit(V.prefixEvent + '.hide', F), angular.isDefined(V.onHide) && angular.isFunction(V.onHide) && V.onHide(F), B === z) {
	            if (q && 'focus' === V.trigger) return i[0].blur();A();
	          }
	        }function $() {
	          var e = V.trigger.split(' ');angular.forEach(e, function (e) {
	            'click' === e || 'contextmenu' === e ? i.on(e, F.toggle) : 'manual' !== e && (i.on('hover' === e ? 'mouseenter' : 'focus', F.enter), i.on('hover' === e ? 'mouseleave' : 'blur', F.leave), 'button' === I && 'hover' !== e && i.on(h ? 'touchstart' : 'mousedown', F.$onFocusElementMouseDown));
	          });
	        }function w() {
	          for (var e = V.trigger.split(' '), t = e.length; t--;) {
	            var n = e[t];'click' === n || 'contextmenu' === n ? i.off(n, F.toggle) : 'manual' !== n && (i.off('hover' === n ? 'mouseenter' : 'focus', F.enter), i.off('hover' === n ? 'mouseleave' : 'blur', F.leave), 'button' === I && 'hover' !== n && i.off(h ? 'touchstart' : 'mousedown', F.$onFocusElementMouseDown));
	          }
	        }function y() {
	          'focus' !== V.trigger ? B.on('keyup', F.$onKeyUp) : i.on('keyup', F.$onFocusKeyUp);
	        }function b() {
	          'focus' !== V.trigger ? B.off('keyup', F.$onKeyUp) : i.off('keyup', F.$onFocusKeyUp);
	        }function D() {
	          f(function () {
	            B.on('click', k), v.on('click', F.hide), j = !0;
	          }, 0, !1);
	        }function S() {
	          j && (B.off('click', k), v.off('click', F.hide), j = !1);
	        }function k(e) {
	          e.stopPropagation();
	        }function x(e) {
	          e = e || V.target || i;var a = e[0],
	              o = 'BODY' === a.tagName,
	              r = a.getBoundingClientRect(),
	              s = {};for (var l in r) {
	            s[l] = r[l];
	          }null === s.width && (s = angular.extend({}, s, { width: r.right - r.left, height: r.bottom - r.top }));var u = o ? { top: 0, left: 0 } : c.offset(a),
	              d = { scroll: o ? t.documentElement.scrollTop || t.body.scrollTop : e.prop('scrollTop') || 0 },
	              f = o ? { width: t.documentElement.clientWidth, height: n.innerHeight } : null;return angular.extend({}, s, d, f, u);
	        }function C(e, t, n, a) {
	          var o,
	              i = e.split('-');switch (i[0]) {case 'right':
	              o = { top: t.top + t.height / 2 - a / 2, left: t.left + t.width };break;case 'bottom':
	              o = { top: t.top + t.height, left: t.left + t.width / 2 - n / 2 };break;case 'left':
	              o = { top: t.top + t.height / 2 - a / 2, left: t.left - n };break;default:
	              o = { top: t.top - a, left: t.left + t.width / 2 - n / 2 };}if (!i[1]) return o;if ('top' === i[0] || 'bottom' === i[0]) switch (i[1]) {case 'left':
	              o.left = t.left;break;case 'right':
	              o.left = t.left + t.width - n;} else if ('left' === i[0] || 'right' === i[0]) switch (i[1]) {case 'top':
	              o.top = t.top - a + t.height;break;case 'bottom':
	              o.top = t.top;}return o;
	        }function T(e, t) {
	          var n = B[0],
	              a = n.offsetWidth,
	              o = n.offsetHeight,
	              i = parseInt(c.css(n, 'margin-top'), 10),
	              r = parseInt(c.css(n, 'margin-left'), 10);isNaN(i) && (i = 0), isNaN(r) && (r = 0), e.top = e.top + i, e.left = e.left + r, c.setOffset(n, angular.extend({ using: function using(e) {
	              B.css({ top: Math.round(e.top) + 'px', left: Math.round(e.left) + 'px', right: '' });
	            } }, e), 0);var s = n.offsetWidth,
	              l = n.offsetHeight;if ('top' === t && l !== o && (e.top = e.top + o - l), !/top-left|top-right|bottom-left|bottom-right/.test(t)) {
	            var u = E(t, e, s, l);if (u.left ? e.left += u.left : e.top += u.top, c.setOffset(n, e), /top|right|bottom|left/.test(t)) {
	              var d = /top|bottom/.test(t),
	                  f = d ? 2 * u.left - a + s : 2 * u.top - o + l,
	                  p = d ? 'offsetWidth' : 'offsetHeight';M(f, n[p], d);
	            }
	          }
	        }function E(e, t, n, a) {
	          var o = { top: 0, left: 0 };if (!F.$viewport) return o;var i = V.viewport && V.viewport.padding || 0,
	              r = x(F.$viewport);if (/right|left/.test(e)) {
	            var s = t.top - i - r.scroll,
	                l = t.top + i - r.scroll + a;s < r.top ? o.top = r.top - s : l > r.top + r.height && (o.top = r.top + r.height - l);
	          } else {
	            var u = t.left - i,
	                c = t.left + i + n;u < r.left ? o.left = r.left - u : c > r.right && (o.left = r.left + r.width - c);
	          }return o;
	        }function M(e, t, n) {
	          var a = m('.tooltip-arrow, .arrow', B[0]);a.css(n ? 'left' : 'top', 50 * (1 - e / t) + '%').css(n ? 'top' : 'left', '');
	        }function A() {
	          clearTimeout(P), F.$isShown && null !== B && (V.autoClose && S(), V.keyboard && b()), Y && (Y.$destroy(), Y = null), B && (B.remove(), B = F.$element = null);
	        }var F = {},
	            V = F.$options = angular.extend({}, e, r),
	            H = F.$promise = o.compile(V),
	            O = F.$scope = V.scope && V.scope.$new() || a.$new(),
	            I = i[0].nodeName.toLowerCase();if (V.delay && angular.isString(V.delay)) {
	          var N = V.delay.split(',').map(parseFloat);V.delay = N.length > 1 ? { show: N[0], hide: N[1] } : N[0];
	        }F.$id = V.id || i.attr('id') || '', V.title && (O.title = u.trustAsHtml(V.title)), O.$setEnabled = function (e) {
	          O.$$postDigest(function () {
	            F.setEnabled(e);
	          });
	        }, O.$hide = function () {
	          O.$$postDigest(function () {
	            F.hide();
	          });
	        }, O.$show = function () {
	          O.$$postDigest(function () {
	            F.show();
	          });
	        }, O.$toggle = function () {
	          O.$$postDigest(function () {
	            F.toggle();
	          });
	        }, F.$isShown = O.$isShown = !1;var P, U, L, B, R, Y;H.then(function (e) {
	          L = e, F.init();
	        }), F.init = function () {
	          V.delay && angular.isNumber(V.delay) && (V.delay = { show: V.delay, hide: V.delay }), 'self' === V.container ? R = i : angular.isElement(V.container) ? R = V.container : V.container && (R = m(V.container)), $(), V.target && (V.target = angular.isElement(V.target) ? V.target : m(V.target)), V.show && O.$$postDigest(function () {
	            'focus' === V.trigger ? i[0].focus() : F.show();
	          });
	        }, F.destroy = function () {
	          w(), A(), O.$destroy();
	        }, F.enter = function () {
	          return clearTimeout(P), U = 'in', V.delay && V.delay.show ? void (P = setTimeout(function () {
	            'in' === U && F.show();
	          }, V.delay.show)) : F.show();
	        }, F.show = function () {
	          if (V.bsEnabled && !F.$isShown) {
	            O.$emit(V.prefixEvent + '.show.before', F), angular.isDefined(V.onBeforeShow) && angular.isFunction(V.onBeforeShow) && V.onBeforeShow(F);var e, t;V.container ? (e = R, t = R[0].lastChild ? angular.element(R[0].lastChild) : null) : (e = null, t = i), B && A(), Y = F.$scope.$new(), B = F.$element = L.link(Y, function (e, t) {}), B.css({ top: '-9999px', left: '-9999px', right: 'auto', display: 'block', visibility: 'hidden' }), V.animation && B.addClass(V.animation), V.type && B.addClass(V.prefixClass + '-' + V.type), V.customClass && B.addClass(V.customClass), t ? t.after(B) : e.prepend(B), F.$isShown = O.$isShown = !0, g(O), F.$applyPlacement(), angular.version.minor <= 2 ? l.enter(B, e, t, s) : l.enter(B, e, t).then(s), g(O), d(function () {
	              B && B.css({ visibility: 'visible' }), V.keyboard && ('focus' !== V.trigger && F.focus(), y());
	            }), V.autoClose && D();
	          }
	        }, F.leave = function () {
	          return clearTimeout(P), U = 'out', V.delay && V.delay.hide ? void (P = setTimeout(function () {
	            'out' === U && F.hide();
	          }, V.delay.hide)) : F.hide();
	        };var q, z;F.hide = function (e) {
	          F.$isShown && (O.$emit(V.prefixEvent + '.hide.before', F), angular.isDefined(V.onBeforeHide) && angular.isFunction(V.onBeforeHide) && V.onBeforeHide(F), q = e, z = B, angular.version.minor <= 2 ? l.leave(B, p) : l.leave(B).then(p), F.$isShown = O.$isShown = !1, g(O), V.keyboard && null !== B && b(), V.autoClose && null !== B && S());
	        }, F.toggle = function (e) {
	          e && e.preventDefault(), F.$isShown ? F.leave() : F.enter();
	        }, F.focus = function () {
	          B[0].focus();
	        }, F.setEnabled = function (e) {
	          V.bsEnabled = e;
	        }, F.setViewport = function (e) {
	          V.viewport = e;
	        }, F.$applyPlacement = function () {
	          if (B) {
	            var t = V.placement,
	                n = /\s?auto?\s?/i,
	                a = n.test(t);a && (t = t.replace(n, '') || e.placement), B.addClass(V.placement);var o = x(),
	                i = B.prop('offsetWidth'),
	                r = B.prop('offsetHeight');if (F.$viewport = V.viewport && m(V.viewport.selector || V.viewport), a) {
	              var s = t,
	                  l = x(F.$viewport);/bottom/.test(s) && o.bottom + r > l.bottom ? t = s.replace('bottom', 'top') : /top/.test(s) && o.top - r < l.top && (t = s.replace('top', 'bottom')), /left/.test(s) && o.left - i < l.left ? t = t.replace('left', 'right') : /right/.test(s) && o.right + i > l.width && (t = t.replace('right', 'left')), B.removeClass(s).addClass(t);
	            }var u = C(t, o, i, r);T(u, t);
	          }
	        }, F.$onKeyUp = function (e) {
	          27 === e.which && F.$isShown && (F.hide(), e.stopPropagation());
	        }, F.$onFocusKeyUp = function (e) {
	          27 === e.which && (i[0].blur(), e.stopPropagation());
	        }, F.$onFocusElementMouseDown = function (e) {
	          V.mouseDownPreventDefault && e.preventDefault(), V.mouseDownStopPropagation && e.stopPropagation(), F.$isShown ? i[0].blur() : i[0].focus();
	        };var j = !1;return F;
	      }function g(e) {
	        e.$$phase || e.$root && e.$root.$$phase || e.$digest();
	      }function m(e, n) {
	        return angular.element((n || t).querySelectorAll(e));
	      }var $ = /(ip[ao]d|iphone|android)/gi.test(n.navigator.userAgent),
	          h = 'createTouch' in n.document && $,
	          v = angular.element(n.document);return p;
	    }];
	  }).directive('bsTooltip', ['$window', '$location', '$sce', '$parse', '$tooltip', '$$rAF', function (e, t, n, a, o, i) {
	    return { restrict: 'EAC', scope: !0, link: function link(e, t, a, r) {
	        var s,
	            l = { scope: e };angular.forEach(['template', 'templateUrl', 'controller', 'controllerAs', 'titleTemplate', 'placement', 'container', 'delay', 'trigger', 'html', 'animation', 'backdropAnimation', 'type', 'customClass', 'id'], function (e) {
	          angular.isDefined(a[e]) && (l[e] = a[e]);
	        });var u = /^(false|0|)$/i;angular.forEach(['html', 'container'], function (e) {
	          angular.isDefined(a[e]) && u.test(a[e]) && (l[e] = !1);
	        }), angular.forEach(['onBeforeShow', 'onShow', 'onBeforeHide', 'onHide'], function (t) {
	          var n = 'bs' + t.charAt(0).toUpperCase() + t.slice(1);angular.isDefined(a[n]) && (l[t] = e.$eval(a[n]));
	        });var c = t.attr('data-target');angular.isDefined(c) && (u.test(c) ? l.target = !1 : l.target = c), e.hasOwnProperty('title') || (e.title = ''), a.$observe('title', function (t) {
	          if (angular.isDefined(t) || !e.hasOwnProperty('title')) {
	            var a = e.title;e.title = n.trustAsHtml(t), angular.isDefined(a) && i(function () {
	              s && s.$applyPlacement();
	            });
	          }
	        }), a.$observe('disabled', function (e) {
	          e && s.$isShown && s.hide();
	        }), a.bsTooltip && e.$watch(a.bsTooltip, function (t, n) {
	          angular.isObject(t) ? angular.extend(e, t) : e.title = t, angular.isDefined(n) && i(function () {
	            s && s.$applyPlacement();
	          });
	        }, !0), a.bsShow && e.$watch(a.bsShow, function (e, t) {
	          s && angular.isDefined(e) && (angular.isString(e) && (e = !!e.match(/true|,?(tooltip),?/i)), e === !0 ? s.show() : s.hide());
	        }), a.bsEnabled && e.$watch(a.bsEnabled, function (e, t) {
	          s && angular.isDefined(e) && (angular.isString(e) && (e = !!e.match(/true|1|,?(tooltip),?/i)), e === !1 ? s.setEnabled(!1) : s.setEnabled(!0));
	        }), a.viewport && e.$watch(a.viewport, function (e) {
	          s && angular.isDefined(e) && s.setViewport(e);
	        }), s = o(t, l), e.$on('$destroy', function () {
	          s && s.destroy(), l = null, s = null;
	        });
	      } };
	  }]), angular.module('mgcrea.ngStrap.timepicker', ['mgcrea.ngStrap.helpers.dateParser', 'mgcrea.ngStrap.helpers.dateFormatter', 'mgcrea.ngStrap.tooltip']).provider('$timepicker', function () {
	    var e = this.defaults = { animation: 'am-fade', defaultDate: 'auto', prefixClass: 'timepicker', placement: 'bottom-left', templateUrl: 'timepicker/timepicker.tpl.html', trigger: 'focus', container: !1, keyboard: !0, html: !1, delay: 0, useNative: !0, timeType: 'date', timeFormat: 'shortTime', timezone: null, modelTimeFormat: null, autoclose: !1, minTime: -(1 / 0), maxTime: +(1 / 0), length: 5, hourStep: 1, minuteStep: 5, secondStep: 5, roundDisplay: !1, iconUp: 'glyphicon glyphicon-chevron-up', iconDown: 'glyphicon glyphicon-chevron-down', arrowBehavior: 'pager' };this.$get = ['$window', '$document', '$rootScope', '$sce', '$dateFormatter', '$tooltip', '$timeout', function (t, n, a, o, i, r, s) {
	      function l(t, n, a) {
	        function o(e) {
	          var t = 6e4 * g.minuteStep;return new Date(Math.floor(e.getTime() / t) * t);
	        }function l(e, n) {
	          var a = e + n;if (t[0].createTextRange) {
	            var o = t[0].createTextRange();o.collapse(!0), o.moveStart('character', e), o.moveEnd('character', a), o.select();
	          } else t[0].setSelectionRange ? t[0].setSelectionRange(e, a) : angular.isUndefined(t[0].selectionStart) && (t[0].selectionStart = e, t[0].selectionEnd = a);
	        }function d() {
	          t[0].focus();
	        }var f = r(t, angular.extend({}, e, a)),
	            p = a.scope,
	            g = f.$options,
	            m = f.$scope,
	            $ = g.lang,
	            h = function h(e, t, n) {
	          return i.formatDate(e, t, $, n);
	        },
	            v = 0,
	            w = g.roundDisplay ? o(new Date()) : new Date(),
	            y = n.$dateValue || w,
	            b = { hour: y.getHours(), meridian: y.getHours() < 12, minute: y.getMinutes(), second: y.getSeconds(), millisecond: y.getMilliseconds() },
	            D = i.getDatetimeFormat(g.timeFormat, $),
	            S = i.hoursFormat(D),
	            k = i.timeSeparator(D),
	            x = i.minutesFormat(D),
	            C = i.secondsFormat(D),
	            T = i.showSeconds(D),
	            E = i.showAM(D);m.$iconUp = g.iconUp, m.$iconDown = g.iconDown, m.$select = function (e, t) {
	          f.select(e, t);
	        }, m.$moveIndex = function (e, t) {
	          f.$moveIndex(e, t);
	        }, m.$switchMeridian = function (e) {
	          f.switchMeridian(e);
	        }, f.update = function (e) {
	          angular.isDate(e) && !isNaN(e.getTime()) ? (f.$date = e, angular.extend(b, { hour: e.getHours(), minute: e.getMinutes(), second: e.getSeconds(), millisecond: e.getMilliseconds() }), f.$build()) : f.$isBuilt || f.$build();
	        }, f.select = function (e, t, a) {
	          (!n.$dateValue || isNaN(n.$dateValue.getTime())) && (n.$dateValue = 'today' === g.defaultDate ? new Date() : new Date(1970, 0, 1)), angular.isDate(e) || (e = new Date(e)), 0 === t ? n.$dateValue.setHours(e.getHours()) : 1 === t ? n.$dateValue.setMinutes(e.getMinutes()) : 2 === t && n.$dateValue.setSeconds(e.getSeconds()), n.$setViewValue(angular.copy(n.$dateValue)), n.$render(), g.autoclose && !a && s(function () {
	            f.hide(!0);
	          });
	        }, f.switchMeridian = function (e) {
	          if (n.$dateValue && !isNaN(n.$dateValue.getTime())) {
	            var t = (e || n.$dateValue).getHours();n.$dateValue.setHours(12 > t ? t + 12 : t - 12), n.$setViewValue(angular.copy(n.$dateValue)), n.$render();
	          }
	        }, f.$build = function () {
	          var e,
	              t,
	              n = m.midIndex = parseInt(g.length / 2, 10),
	              a = [];for (e = 0; e < g.length; e++) {
	            t = new Date(1970, 0, 1, b.hour - (n - e) * g.hourStep), a.push({ date: t, label: h(t, S), selected: f.$date && f.$isSelected(t, 0), disabled: f.$isDisabled(t, 0) });
	          }var o,
	              i = [];for (e = 0; e < g.length; e++) {
	            o = new Date(1970, 0, 1, 0, b.minute - (n - e) * g.minuteStep), i.push({ date: o, label: h(o, x), selected: f.$date && f.$isSelected(o, 1), disabled: f.$isDisabled(o, 1) });
	          }var r,
	              s = [];for (e = 0; e < g.length; e++) {
	            r = new Date(1970, 0, 1, 0, 0, b.second - (n - e) * g.secondStep), s.push({ date: r, label: h(r, C), selected: f.$date && f.$isSelected(r, 2), disabled: f.$isDisabled(r, 2) });
	          }var l = [];for (e = 0; e < g.length; e++) {
	            T ? l.push([a[e], i[e], s[e]]) : l.push([a[e], i[e]]);
	          }m.rows = l, m.showSeconds = T, m.showAM = E, m.isAM = (f.$date || a[n].date).getHours() < 12, m.timeSeparator = k, f.$isBuilt = !0;
	        }, f.$isSelected = function (e, t) {
	          return f.$date ? 0 === t ? e.getHours() === f.$date.getHours() : 1 === t ? e.getMinutes() === f.$date.getMinutes() : 2 === t ? e.getSeconds() === f.$date.getSeconds() : void 0 : !1;
	        }, f.$isDisabled = function (e, t) {
	          var n;return 0 === t ? n = e.getTime() + 6e4 * b.minute + 1e3 * b.second : 1 === t ? n = e.getTime() + 36e5 * b.hour + 1e3 * b.second : 2 === t && (n = e.getTime() + 36e5 * b.hour + 6e4 * b.minute), n < 1 * g.minTime || n > 1 * g.maxTime;
	        }, m.$arrowAction = function (e, t) {
	          'picker' === g.arrowBehavior ? f.$setTimeByStep(e, t) : f.$moveIndex(e, t);
	        }, f.$setTimeByStep = function (e, t) {
	          var n = new Date(f.$date || y),
	              a = n.getHours(),
	              o = n.getMinutes(),
	              i = n.getSeconds();0 === t ? n.setHours(a - parseInt(g.hourStep, 10) * e) : 1 === t ? n.setMinutes(o - parseInt(g.minuteStep, 10) * e) : 2 === t && n.setSeconds(i - parseInt(g.secondStep, 10) * e), f.select(n, t, !0);
	        }, f.$moveIndex = function (e, t) {
	          var n;0 === t ? (n = new Date(1970, 0, 1, b.hour + e * g.length, b.minute, b.second), angular.extend(b, { hour: n.getHours() })) : 1 === t ? (n = new Date(1970, 0, 1, b.hour, b.minute + e * g.length * g.minuteStep, b.second), angular.extend(b, { minute: n.getMinutes() })) : 2 === t && (n = new Date(1970, 0, 1, b.hour, b.minute, b.second + e * g.length * g.secondStep), angular.extend(b, { second: n.getSeconds() })), f.$build();
	        }, f.$onMouseDown = function (e) {
	          if ('input' !== e.target.nodeName.toLowerCase() && e.preventDefault(), e.stopPropagation(), c) {
	            var t = angular.element(e.target);'button' !== t[0].nodeName.toLowerCase() && (t = t.parent()), t.triggerHandler('click');
	          }
	        }, f.$onKeyDown = function (e) {
	          if (/(38|37|39|40|13)/.test(e.keyCode) && !e.shiftKey && !e.altKey) {
	            if (e.preventDefault(), e.stopPropagation(), 13 === e.keyCode) return void f.hide(!0);var t = new Date(f.$date),
	                n = t.getHours(),
	                a = h(t, S).length,
	                o = t.getMinutes(),
	                i = h(t, x).length,
	                r = t.getSeconds(),
	                s = h(t, C).length,
	                u = 1,
	                c = /(37|39)/.test(e.keyCode),
	                d = 2 + 1 * T + 1 * E;c && (37 === e.keyCode ? v = 1 > v ? d - 1 : v - 1 : 39 === e.keyCode && (v = d - 1 > v ? v + 1 : 0));var m = [0, a],
	                $ = 0;38 === e.keyCode && ($ = -1), 40 === e.keyCode && ($ = 1);var w = 2 === v && T,
	                y = 2 === v && !T || 3 === v && T;0 === v ? (t.setHours(n + $ * parseInt(g.hourStep, 10)), a = h(t, S).length, m = [0, a]) : 1 === v ? (t.setMinutes(o + $ * parseInt(g.minuteStep, 10)), i = h(t, x).length, m = [a + u, i]) : w ? (t.setSeconds(r + $ * parseInt(g.secondStep, 10)), s = h(t, C).length, m = [a + u + i + u, s]) : y && (c || f.switchMeridian(), m = [a + u + i + u + (s + u) * T, 2]), f.select(t, v, !0), l(m[0], m[1]), p.$digest();
	          }
	        };var M = f.init;f.init = function () {
	          return u && g.useNative ? (t.prop('type', 'time'), void t.css('-webkit-appearance', 'textfield')) : (c && (t.prop('type', 'text'), t.attr('readonly', 'true'), t.on('click', d)), void M());
	        };var A = f.destroy;f.destroy = function () {
	          u && g.useNative && t.off('click', d), A();
	        };var F = f.show;f.show = function () {
	          !c && t.attr('readonly') || t.attr('disabled') || (F(), s(function () {
	            f.$element && f.$element.on(c ? 'touchstart' : 'mousedown', f.$onMouseDown), g.keyboard && t && t.on('keydown', f.$onKeyDown);
	          }, 0, !1));
	        };var V = f.hide;return f.hide = function (e) {
	          f.$isShown && (f.$element && f.$element.off(c ? 'touchstart' : 'mousedown', f.$onMouseDown), g.keyboard && t && t.off('keydown', f.$onKeyDown), V(e));
	        }, f;
	      }var u = /(ip[ao]d|iphone|android)/gi.test(t.navigator.userAgent),
	          c = 'createTouch' in t.document && u;return e.lang || (e.lang = i.getDefaultLocale()), l.defaults = e, l;
	    }];
	  }).directive('bsTimepicker', ['$window', '$parse', '$q', '$dateFormatter', '$dateParser', '$timepicker', function (e, t, a, o, i, r) {
	    var s = r.defaults,
	        l = /(ip[ao]d|iphone|android)/gi.test(e.navigator.userAgent);return { restrict: 'EAC', require: 'ngModel', link: function link(e, t, a, u) {
	        function c(e) {
	          if (angular.isDate(e)) {
	            var t = isNaN(f.minTime) || new Date(e.getTime()).setFullYear(1970, 0, 1) >= f.minTime,
	                n = isNaN(f.maxTime) || new Date(e.getTime()).setFullYear(1970, 0, 1) <= f.maxTime,
	                a = t && n;u.$setValidity('date', a), u.$setValidity('min', t), u.$setValidity('max', n), a && (u.$dateValue = e);
	          }
	        }function d() {
	          return !u.$dateValue || isNaN(u.$dateValue.getTime()) ? '' : $(u.$dateValue, f.timeFormat);
	        }var f = { scope: e };angular.forEach(['template', 'templateUrl', 'controller', 'controllerAs', 'placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'autoclose', 'timeType', 'timeFormat', 'timezone', 'modelTimeFormat', 'useNative', 'hourStep', 'minuteStep', 'secondStep', 'length', 'arrowBehavior', 'iconUp', 'iconDown', 'roundDisplay', 'id', 'prefixClass', 'prefixEvent', 'defaultDate'], function (e) {
	          angular.isDefined(a[e]) && (f[e] = a[e]);
	        });var p = /^(false|0|)$/i;angular.forEach(['html', 'container', 'autoclose', 'useNative', 'roundDisplay'], function (e) {
	          angular.isDefined(a[e]) && p.test(a[e]) && (f[e] = !1);
	        }), angular.forEach(['onBeforeShow', 'onShow', 'onBeforeHide', 'onHide'], function (t) {
	          var n = 'bs' + t.charAt(0).toUpperCase() + t.slice(1);angular.isDefined(a[n]) && (f[t] = e.$eval(a[n]));
	        }), l && (f.useNative || s.useNative) && (f.timeFormat = 'HH:mm');var g = r(t, u, f);f = g.$options;var m = f.lang,
	            $ = function $(e, t, n) {
	          return o.formatDate(e, t, m, n);
	        };a.bsShow && e.$watch(a.bsShow, function (e, t) {
	          g && angular.isDefined(e) && (angular.isString(e) && (e = !!e.match(/true|,?(timepicker),?/i)), e === !0 ? g.show() : g.hide());
	        });var h = i({ format: f.timeFormat, lang: m });angular.forEach(['minTime', 'maxTime'], function (e) {
	          angular.isDefined(a[e]) && a.$observe(e, function (t) {
	            g.$options[e] = h.getTimeForAttribute(e, t), isNaN(g.$options[e]) || g.$build(), c(u.$dateValue);
	          });
	        }), e.$watch(a.ngModel, function (e, t) {
	          g.update(u.$dateValue);
	        }, !0), u.$parsers.unshift(function (e) {
	          var t;if (!e) return u.$setValidity('date', !0), null;var a = angular.isDate(e) ? e : h.parse(e, u.$dateValue);return !a || isNaN(a.getTime()) ? (u.$setValidity('date', !1), n) : (c(a), 'string' === f.timeType ? (t = h.timezoneOffsetAdjust(a, f.timezone, !0), $(t, f.modelTimeFormat || f.timeFormat)) : (t = h.timezoneOffsetAdjust(u.$dateValue, f.timezone, !0), 'number' === f.timeType ? t.getTime() : 'unix' === f.timeType ? t.getTime() / 1e3 : 'iso' === f.timeType ? t.toISOString() : new Date(t)));
	        }), u.$formatters.push(function (e) {
	          var t;return t = angular.isUndefined(e) || null === e ? NaN : angular.isDate(e) ? e : 'string' === f.timeType ? h.parse(e, null, f.modelTimeFormat) : 'unix' === f.timeType ? new Date(1e3 * e) : new Date(e), u.$dateValue = h.timezoneOffsetAdjust(t, f.timezone), d();
	        }), u.$render = function () {
	          t.val(d());
	        }, e.$on('$destroy', function () {
	          g && g.destroy(), f = null, g = null;
	        });
	      } };
	  }]), angular.module('mgcrea.ngStrap.scrollspy', ['mgcrea.ngStrap.helpers.debounce', 'mgcrea.ngStrap.helpers.dimensions']).provider('$scrollspy', function () {
	    var e = this.$$spies = {},
	        n = this.defaults = { debounce: 150, throttle: 100, offset: 100 };this.$get = ['$window', '$document', '$rootScope', 'dimensions', 'debounce', 'throttle', function (a, o, i, r, s, l) {
	      function u(e, t) {
	        return e[0].nodeName && e[0].nodeName.toLowerCase() === t.toLowerCase();
	      }function c(o) {
	        var c = angular.extend({}, n, o);c.element || (c.element = p);var g = u(c.element, 'body'),
	            m = g ? d : c.element,
	            $ = g ? 'window' : c.id;if (e[$]) return e[$].$$count++, e[$];var h,
	            v,
	            w,
	            y,
	            b,
	            D,
	            S,
	            k,
	            x = {},
	            C = x.$trackedElements = [],
	            T = [];return x.init = function () {
	          this.$$count = 1, y = s(this.checkPosition, c.debounce), b = l(this.checkPosition, c.throttle), m.on('click', this.checkPositionWithEventLoop), d.on('resize', y), m.on('scroll', b), D = s(this.checkOffsets, c.debounce), h = i.$on('$viewContentLoaded', D), v = i.$on('$includeContentLoaded', D), D(), $ && (e[$] = x);
	        }, x.destroy = function () {
	          this.$$count--, this.$$count > 0 || (m.off('click', this.checkPositionWithEventLoop), d.off('resize', y), m.off('scroll', b), h(), v(), $ && delete e[$]);
	        }, x.checkPosition = function () {
	          if (T.length) {
	            if (k = (g ? a.pageYOffset : m.prop('scrollTop')) || 0, S = Math.max(a.innerHeight, f.prop('clientHeight')), k < T[0].offsetTop && w !== T[0].target) return x.$activateElement(T[0]);for (var e = T.length; e--;) {
	              if (!angular.isUndefined(T[e].offsetTop) && null !== T[e].offsetTop && w !== T[e].target && !(k < T[e].offsetTop || T[e + 1] && k > T[e + 1].offsetTop)) return x.$activateElement(T[e]);
	            }
	          }
	        }, x.checkPositionWithEventLoop = function () {
	          setTimeout(x.checkPosition, 1);
	        }, x.$activateElement = function (e) {
	          if (w) {
	            var t = x.$getTrackedElement(w);t && (t.source.removeClass('active'), u(t.source, 'li') && u(t.source.parent().parent(), 'li') && t.source.parent().parent().removeClass('active'));
	          }w = e.target, e.source.addClass('active'), u(e.source, 'li') && u(e.source.parent().parent(), 'li') && e.source.parent().parent().addClass('active');
	        }, x.$getTrackedElement = function (e) {
	          return C.filter(function (t) {
	            return t.target === e;
	          })[0];
	        }, x.checkOffsets = function () {
	          angular.forEach(C, function (e) {
	            var n = t.querySelector(e.target);e.offsetTop = n ? r.offset(n).top : null, c.offset && null !== e.offsetTop && (e.offsetTop -= 1 * c.offset);
	          }), T = C.filter(function (e) {
	            return null !== e.offsetTop;
	          }).sort(function (e, t) {
	            return e.offsetTop - t.offsetTop;
	          }), y();
	        }, x.trackElement = function (e, t) {
	          C.push({ target: e, source: t });
	        }, x.untrackElement = function (e, t) {
	          for (var n, a = C.length; a--;) {
	            if (C[a].target === e && C[a].source === t) {
	              n = a;break;
	            }
	          }C.splice(n, 1);
	        }, x.activate = function (e) {
	          C[e].addClass('active');
	        }, x.init(), x;
	      }var d = angular.element(a),
	          f = angular.element(o.prop('documentElement')),
	          p = angular.element(a.document.body);return c;
	    }];
	  }).directive('bsScrollspy', ['$rootScope', 'debounce', 'dimensions', '$scrollspy', function (e, t, n, a) {
	    return { restrict: 'EAC', link: function link(e, t, n) {
	        var o = { scope: e };angular.forEach(['offset', 'target'], function (e) {
	          angular.isDefined(n[e]) && (o[e] = n[e]);
	        });var i = a(o);i.trackElement(o.target, t), e.$on('$destroy', function () {
	          i && (i.untrackElement(o.target, t), i.destroy()), o = null, i = null;
	        });
	      } };
	  }]).directive('bsScrollspyList', ['$rootScope', 'debounce', 'dimensions', '$scrollspy', function (e, t, n, a) {
	    return { restrict: 'A', compile: function compile(e, t) {
	        var n = e[0].querySelectorAll('li > a[href]');angular.forEach(n, function (e) {
	          var t = angular.element(e);t.parent().attr('bs-scrollspy', '').attr('data-target', t.attr('href'));
	        });
	      } };
	  }]), angular.module('mgcrea.ngStrap.select', ['mgcrea.ngStrap.tooltip', 'mgcrea.ngStrap.helpers.parseOptions']).provider('$select', function () {
	    var e = this.defaults = { animation: 'am-fade', prefixClass: 'select', prefixEvent: '$select', placement: 'bottom-left', templateUrl: 'select/select.tpl.html', trigger: 'focus', container: !1, keyboard: !0, html: !1, delay: 0, multiple: !1, allNoneButtons: !1, sort: !0, caretHtml: '&nbsp;<span class="caret"></span>', placeholder: 'Choose among the following...', allText: 'All', noneText: 'None', maxLength: 3, maxLengthHtml: 'selected', iconCheckmark: 'glyphicon glyphicon-ok',
	      toggle: !1 };this.$get = ['$window', '$document', '$rootScope', '$tooltip', '$timeout', function (t, a, o, i, r) {
	      function s(o, s, l) {
	        var c = {},
	            d = angular.extend({}, e, l);c = i(o, d);var f = c.$scope;f.$matches = [], d.multiple ? f.$activeIndex = [] : f.$activeIndex = -1, f.$isMultiple = d.multiple, f.$showAllNoneButtons = d.allNoneButtons && d.multiple, f.$iconCheckmark = d.iconCheckmark, f.$allText = d.allText, f.$noneText = d.noneText, f.$activate = function (e) {
	          f.$$postDigest(function () {
	            c.activate(e);
	          });
	        }, f.$select = function (e, t) {
	          f.$$postDigest(function () {
	            c.select(e);
	          });
	        }, f.$isVisible = function () {
	          return c.$isVisible();
	        }, f.$isActive = function (e) {
	          return c.$isActive(e);
	        }, f.$selectAll = function () {
	          for (var e = 0; e < f.$matches.length; e++) {
	            f.$isActive(e) || f.$select(e);
	          }
	        }, f.$selectNone = function () {
	          for (var e = 0; e < f.$matches.length; e++) {
	            f.$isActive(e) && f.$select(e);
	          }
	        }, c.update = function (e) {
	          f.$matches = e, c.$updateActiveIndex();
	        }, c.activate = function (e) {
	          return d.multiple ? (c.$isActive(e) ? f.$activeIndex.splice(f.$activeIndex.indexOf(e), 1) : f.$activeIndex.push(e), d.sort && f.$activeIndex.sort(function (e, t) {
	            return e - t;
	          })) : f.$activeIndex = e, f.$activeIndex;
	        }, c.select = function (e) {
	          if (!(angular.isUndefined(e) || 0 > e || e >= f.$matches.length)) {
	            var t = f.$matches[e].value;f.$apply(function () {
	              c.activate(e), d.multiple ? s.$setViewValue(f.$activeIndex.map(function (e) {
	                return angular.isUndefined(f.$matches[e]) ? null : f.$matches[e].value;
	              })) : (d.toggle ? s.$setViewValue(t === s.$modelValue ? n : t) : s.$setViewValue(t), c.hide());
	            }), f.$emit(d.prefixEvent + '.select', t, e, c), angular.isDefined(d.onSelect) && angular.isFunction(d.onSelect) && d.onSelect(t, e, c);
	          }
	        }, c.$updateActiveIndex = function () {
	          d.multiple ? angular.isArray(s.$modelValue) ? f.$activeIndex = s.$modelValue.map(function (e) {
	            return c.$getIndex(e);
	          }) : f.$activeIndex = [] : angular.isDefined(s.$modelValue) && f.$matches.length ? f.$activeIndex = c.$getIndex(s.$modelValue) : f.$activeIndex = -1;
	        }, c.$isVisible = function () {
	          return d.minLength && s ? f.$matches.length && s.$viewValue.length >= d.minLength : f.$matches.length;
	        }, c.$isActive = function (e) {
	          return d.multiple ? -1 !== f.$activeIndex.indexOf(e) : f.$activeIndex === e;
	        }, c.$getIndex = function (e) {
	          var t;for (t = f.$matches.length; t-- && !angular.equals(f.$matches[t].value, e);) {}return t;
	        }, c.$onMouseDown = function (e) {
	          if (e.preventDefault(), e.stopPropagation(), u) {
	            var t = angular.element(e.target);t.triggerHandler('click');
	          }
	        }, c.$onKeyDown = function (e) {
	          return (/(9|13|38|40)/.test(e.keyCode) ? (9 !== e.keyCode && (e.preventDefault(), e.stopPropagation()), d.multiple && 9 === e.keyCode ? c.hide() : d.multiple || 13 !== e.keyCode && 9 !== e.keyCode ? void (d.multiple || (38 === e.keyCode && f.$activeIndex > 0 ? f.$activeIndex-- : 38 === e.keyCode && f.$activeIndex < 0 ? f.$activeIndex = f.$matches.length - 1 : 40 === e.keyCode && f.$activeIndex < f.$matches.length - 1 ? f.$activeIndex++ : angular.isUndefined(f.$activeIndex) && (f.$activeIndex = 0), f.$digest())) : c.select(f.$activeIndex)) : void 0
	          );
	        }, c.$isIE = function () {
	          var e = t.navigator.userAgent;return e.indexOf('MSIE ') > 0 || e.indexOf('Trident/') > 0 || e.indexOf('Edge/') > 0;
	        }, c.$selectScrollFix = function (e) {
	          'UL' === a[0].activeElement.tagName && (e.preventDefault(), e.stopImmediatePropagation(), e.target.focus());
	        };var p = c.show;c.show = function () {
	          p(), d.multiple && c.$element.addClass('select-multiple'), r(function () {
	            c.$element.on(u ? 'touchstart' : 'mousedown', c.$onMouseDown), d.keyboard && o.on('keydown', c.$onKeyDown);
	          }, 0, !1);
	        };var g = c.hide;return c.hide = function () {
	          !d.multiple && angular.isUndefined(s.$modelValue) && (f.$activeIndex = -1), c.$element.off(u ? 'touchstart' : 'mousedown', c.$onMouseDown), d.keyboard && o.off('keydown', c.$onKeyDown), g(!0);
	        }, c;
	      }var l = /(ip[ao]d|iphone|android)/gi.test(t.navigator.userAgent),
	          u = 'createTouch' in t.document && l;return s.defaults = e, s;
	    }];
	  }).directive('bsSelect', ['$window', '$parse', '$q', '$select', '$parseOptions', function (e, t, n, a, o) {
	    var i = a.defaults;return { restrict: 'EAC', require: 'ngModel', link: function link(e, t, n, r) {
	        var s = { scope: e, placeholder: i.placeholder };angular.forEach(['template', 'templateUrl', 'controller', 'controllerAs', 'placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'placeholder', 'allNoneButtons', 'maxLength', 'maxLengthHtml', 'allText', 'noneText', 'iconCheckmark', 'autoClose', 'id', 'sort', 'caretHtml', 'prefixClass', 'prefixEvent', 'toggle'], function (e) {
	          angular.isDefined(n[e]) && (s[e] = n[e]);
	        });var l = /^(false|0|)$/i;angular.forEach(['html', 'container', 'allNoneButtons', 'sort'], function (e) {
	          angular.isDefined(n[e]) && l.test(n[e]) && (s[e] = !1);
	        }), angular.forEach(['onBeforeShow', 'onShow', 'onBeforeHide', 'onHide', 'onSelect'], function (t) {
	          var a = 'bs' + t.charAt(0).toUpperCase() + t.slice(1);angular.isDefined(n[a]) && (s[t] = e.$eval(n[a]));
	        });var u = t.attr('data-multiple');if (angular.isDefined(u) && (l.test(u) ? s.multiple = !1 : s.multiple = u), 'select' === t[0].nodeName.toLowerCase()) {
	          var c = t;c.css('display', 'none'), t = angular.element('<button type="button" class="btn btn-default"></button>'), c.after(t);
	        }var d = o(n.bsOptions),
	            f = a(t, r, s);f.$isIE() && t[0].addEventListener('blur', f.$selectScrollFix);var p = d.$match[7].replace(/\|.+/, '').trim();e.$watch(p, function (t, n) {
	          d.valuesFn(e, r).then(function (e) {
	            f.update(e), r.$render();
	          });
	        }, !0), e.$watch(n.ngModel, function (e, t) {
	          f.$updateActiveIndex(), r.$render();
	        }, !0), r.$render = function () {
	          var e, n;s.multiple && angular.isArray(r.$modelValue) ? (e = r.$modelValue.map(function (e) {
	            return n = f.$getIndex(e), -1 !== n ? f.$scope.$matches[n].label : !1;
	          }).filter(angular.isDefined), e = e.length > (s.maxLength || i.maxLength) ? e.length + ' ' + (s.maxLengthHtml || i.maxLengthHtml) : e.join(', ')) : (n = f.$getIndex(r.$modelValue), e = -1 !== n ? f.$scope.$matches[n].label : !1), t.html((e || s.placeholder) + (s.caretHtml || i.caretHtml));
	        }, s.multiple && (r.$isEmpty = function (e) {
	          return !e || 0 === e.length;
	        }), e.$on('$destroy', function () {
	          f && f.destroy(), s = null, f = null;
	        });
	      } };
	  }]), angular.module('mgcrea.ngStrap.popover', ['mgcrea.ngStrap.tooltip']).provider('$popover', function () {
	    var e = this.defaults = { animation: 'am-fade', customClass: '', container: !1, target: !1, placement: 'right', templateUrl: 'popover/popover.tpl.html', contentTemplate: !1, trigger: 'click', keyboard: !0, html: !1, title: '', content: '', delay: 0, autoClose: !1 };this.$get = ['$tooltip', function (t) {
	      function n(n, a) {
	        var o = angular.extend({}, e, a),
	            i = t(n, o);return o.content && (i.$scope.content = o.content), i;
	      }return n;
	    }];
	  }).directive('bsPopover', ['$window', '$sce', '$popover', function (e, t, n) {
	    var a = e.requestAnimationFrame || e.setTimeout;return { restrict: 'EAC', scope: !0, link: function link(e, o, i) {
	        var r,
	            s = { scope: e };angular.forEach(['template', 'templateUrl', 'controller', 'controllerAs', 'contentTemplate', 'placement', 'container', 'delay', 'trigger', 'html', 'animation', 'customClass', 'autoClose', 'id', 'prefixClass', 'prefixEvent'], function (e) {
	          angular.isDefined(i[e]) && (s[e] = i[e]);
	        });var l = /^(false|0|)$/i;angular.forEach(['html', 'container', 'autoClose'], function (e) {
	          angular.isDefined(i[e]) && l.test(i[e]) && (s[e] = !1);
	        }), angular.forEach(['onBeforeShow', 'onShow', 'onBeforeHide', 'onHide'], function (t) {
	          var n = 'bs' + t.charAt(0).toUpperCase() + t.slice(1);angular.isDefined(i[n]) && (s[t] = e.$eval(i[n]));
	        });var u = o.attr('data-target');angular.isDefined(u) && (l.test(u) ? s.target = !1 : s.target = u), angular.forEach(['title', 'content'], function (n) {
	          i[n] && i.$observe(n, function (o, i) {
	            e[n] = t.trustAsHtml(o), angular.isDefined(i) && a(function () {
	              r && r.$applyPlacement();
	            });
	          });
	        }), i.bsPopover && e.$watch(i.bsPopover, function (t, n) {
	          angular.isObject(t) ? angular.extend(e, t) : e.content = t, angular.isDefined(n) && a(function () {
	            r && r.$applyPlacement();
	          });
	        }, !0), i.bsShow && e.$watch(i.bsShow, function (e, t) {
	          r && angular.isDefined(e) && (angular.isString(e) && (e = !!e.match(/true|,?(popover),?/i)), e === !0 ? r.show() : r.hide());
	        }), i.viewport && e.$watch(i.viewport, function (e) {
	          r && angular.isDefined(e) && r.setViewport(e);
	        }), r = n(o, s), e.$on('$destroy', function () {
	          r && r.destroy(), s = null, r = null;
	        });
	      } };
	  }]), angular.module('mgcrea.ngStrap.navbar', []).provider('$navbar', function () {
	    var e = this.defaults = { activeClass: 'active', routeAttr: 'data-match-route', strict: !1 };this.$get = function () {
	      return { defaults: e };
	    };
	  }).directive('bsNavbar', ['$window', '$location', '$navbar', function (e, t, n) {
	    var a = n.defaults;return { restrict: 'A', link: function link(e, n, o, i) {
	        var r = angular.copy(a);angular.forEach(Object.keys(a), function (e) {
	          angular.isDefined(o[e]) && (r[e] = o[e]);
	        }), e.$watch(function () {
	          return t.path();
	        }, function (e, t) {
	          var a = n[0].querySelectorAll('li[' + r.routeAttr + ']');angular.forEach(a, function (t) {
	            var n = angular.element(t),
	                a = n.attr(r.routeAttr).replace('/', '\\/');r.strict && (a = '^' + a + '$');var o = new RegExp(a, 'i');o.test(e) ? n.addClass(r.activeClass) : n.removeClass(r.activeClass);
	          });
	        });
	      } };
	  }]), angular.module('mgcrea.ngStrap.modal', ['mgcrea.ngStrap.core', 'mgcrea.ngStrap.helpers.dimensions']).provider('$modal', function () {
	    var e = this.defaults = { animation: 'am-fade', backdropAnimation: 'am-fade', customClass: '', prefixClass: 'modal', prefixEvent: 'modal', placement: 'top', templateUrl: 'modal/modal.tpl.html', template: '', contentTemplate: !1, container: !1, element: null, backdrop: !0, keyboard: !0, html: !1, show: !0, size: null };this.$get = ['$window', '$rootScope', '$bsCompiler', '$animate', '$timeout', '$sce', 'dimensions', function (n, a, o, i, r, s, l) {
	      function u(t) {
	        function n() {
	          T.$emit(x.prefixEvent + '.show', k), angular.isDefined(x.onShow) && angular.isFunction(x.onShow) && x.onShow(k);
	        }function r() {
	          T.$emit(x.prefixEvent + '.hide', k), angular.isDefined(x.onHide) && angular.isFunction(x.onHide) && x.onHide(k), g.removeClass(x.prefixClass + '-open'), x.animation && g.removeClass(x.prefixClass + '-with-' + x.animation);
	        }function l() {
	          x.backdrop && (M.on('click', b), F.on('click', b), F.on('wheel', D));
	        }function u() {
	          x.backdrop && (M.off('click', b), F.off('click', b), F.off('wheel', D));
	        }function w() {
	          x.keyboard && M.on('keyup', k.$onKeyUp);
	        }function y() {
	          x.keyboard && M.off('keyup', k.$onKeyUp);
	        }function b(e) {
	          e.target === e.currentTarget && ('static' === x.backdrop ? k.focus() : k.hide());
	        }function D(e) {
	          e.preventDefault();
	        }function S() {
	          k.$isShown && null !== M && (u(), y()), A && (A.$destroy(), A = null), M && (M.remove(), M = k.$element = null);
	        }var k = {},
	            x = k.$options = angular.extend({}, e, t),
	            C = k.$promise = o.compile(x),
	            T = k.$scope = x.scope && x.scope.$new() || a.$new();x.element || x.container || (x.container = 'body'), k.$id = x.id || x.element && x.element.attr('id') || '', f(['title', 'content'], function (e) {
	          x[e] && (T[e] = s.trustAsHtml(x[e]));
	        }), T.$hide = function () {
	          T.$$postDigest(function () {
	            k.hide();
	          });
	        }, T.$show = function () {
	          T.$$postDigest(function () {
	            k.show();
	          });
	        }, T.$toggle = function () {
	          T.$$postDigest(function () {
	            k.toggle();
	          });
	        }, k.$isShown = T.$isShown = !1;var E,
	            M,
	            A,
	            F = angular.element('<div class="' + x.prefixClass + '-backdrop"/>');return F.css({ position: 'fixed', top: '0px', left: '0px', bottom: '0px', right: '0px' }), C.then(function (e) {
	          E = e, k.init();
	        }), k.init = function () {
	          x.show && T.$$postDigest(function () {
	            k.show();
	          });
	        }, k.destroy = function () {
	          S(), F && (F.remove(), F = null), T.$destroy();
	        }, k.show = function () {
	          if (!k.$isShown) {
	            var e, t;if (angular.isElement(x.container) ? (e = x.container, t = x.container[0].lastChild ? angular.element(x.container[0].lastChild) : null) : x.container ? (e = d(x.container), t = e[0] && e[0].lastChild ? angular.element(e[0].lastChild) : null) : (e = null, t = x.element), M && S(), A = k.$scope.$new(), M = k.$element = E.link(A, function (e, t) {}), x.backdrop && (M.css({ 'z-index': $ + 20 * m }), F.css({ 'z-index': h + 20 * m }), m++), !T.$emit(x.prefixEvent + '.show.before', k).defaultPrevented) {
	              angular.isDefined(x.onBeforeShow) && angular.isFunction(x.onBeforeShow) && x.onBeforeShow(k), M.css({ display: 'block' }).addClass(x.placement), x.customClass && M.addClass(x.customClass), x.size && v[x.size] && angular.element(d('.modal-dialog', M[0])).addClass(v[x.size]), x.animation && (x.backdrop && F.addClass(x.backdropAnimation), M.addClass(x.animation)), x.backdrop && i.enter(F, g, null), angular.version.minor <= 2 ? i.enter(M, e, t, n) : i.enter(M, e, t).then(n), k.$isShown = T.$isShown = !0, c(T);var a = M[0];p(function () {
	                a.focus();
	              }), g.addClass(x.prefixClass + '-open'), x.animation && g.addClass(x.prefixClass + '-with-' + x.animation), l(), w();
	            }
	          }
	        }, k.hide = function () {
	          k.$isShown && (T.$emit(x.prefixEvent + '.hide.before', k).defaultPrevented || (angular.isDefined(x.onBeforeHide) && angular.isFunction(x.onBeforeHide) && x.onBeforeHide(k), angular.version.minor <= 2 ? i.leave(M, r) : i.leave(M).then(r), x.backdrop && (m--, i.leave(F)), k.$isShown = T.$isShown = !1, c(T), u(), y()));
	        }, k.toggle = function () {
	          k.$isShown ? k.hide() : k.show();
	        }, k.focus = function () {
	          M[0].focus();
	        }, k.$onKeyUp = function (e) {
	          27 === e.which && k.$isShown && (k.hide(), e.stopPropagation());
	        }, k;
	      }function c(e) {
	        e.$$phase || e.$root && e.$root.$$phase || e.$digest();
	      }function d(e, n) {
	        return angular.element((n || t).querySelectorAll(e));
	      }var f = angular.forEach,
	          p = n.requestAnimationFrame || n.setTimeout,
	          g = angular.element(n.document.body),
	          m = 0,
	          $ = 1050,
	          h = 1040,
	          v = { lg: 'modal-lg', sm: 'modal-sm' };return u;
	    }];
	  }).directive('bsModal', ['$window', '$sce', '$parse', '$modal', function (e, t, n, a) {
	    return { restrict: 'EAC', scope: !0, link: function link(e, n, o, i) {
	        var r = { scope: e, element: n, show: !1 };angular.forEach(['template', 'templateUrl', 'controller', 'controllerAs', 'contentTemplate', 'placement', 'backdrop', 'keyboard', 'html', 'container', 'animation', 'backdropAnimation', 'id', 'prefixEvent', 'prefixClass', 'customClass', 'modalClass', 'size'], function (e) {
	          angular.isDefined(o[e]) && (r[e] = o[e]);
	        }), r.modalClass && (r.customClass = r.modalClass);var s = /^(false|0|)$/i;angular.forEach(['backdrop', 'keyboard', 'html', 'container'], function (e) {
	          angular.isDefined(o[e]) && s.test(o[e]) && (r[e] = !1);
	        }), angular.forEach(['onBeforeShow', 'onShow', 'onBeforeHide', 'onHide'], function (t) {
	          var n = 'bs' + t.charAt(0).toUpperCase() + t.slice(1);angular.isDefined(o[n]) && (r[t] = e.$eval(o[n]));
	        }), angular.forEach(['title', 'content'], function (n) {
	          o[n] && o.$observe(n, function (a, o) {
	            e[n] = t.trustAsHtml(a);
	          });
	        }), o.bsModal && e.$watch(o.bsModal, function (t, n) {
	          angular.isObject(t) ? angular.extend(e, t) : e.content = t;
	        }, !0);var l = a(r);n.on(o.trigger || 'click', l.toggle), e.$on('$destroy', function () {
	          l && l.destroy(), r = null, l = null;
	        });
	      } };
	  }]), angular.module('mgcrea.ngStrap.dropdown', ['mgcrea.ngStrap.tooltip']).provider('$dropdown', function () {
	    var e = this.defaults = { animation: 'am-fade', prefixClass: 'dropdown', prefixEvent: 'dropdown', placement: 'bottom-left', templateUrl: 'dropdown/dropdown.tpl.html', trigger: 'click', container: !1, keyboard: !0, html: !1, delay: 0 };this.$get = ['$window', '$rootScope', '$tooltip', '$timeout', function (t, n, a, o) {
	      function i(t, i) {
	        function l(e) {
	          return e.target !== t[0] ? e.target !== t[0] && u.hide() : void 0;
	        }var u = {},
	            c = angular.extend({}, e, i);u.$scope = c.scope && c.scope.$new() || n.$new(), u = a(t, c);var d = t.parent();u.$onKeyDown = function (e) {
	          if (/(38|40)/.test(e.keyCode)) {
	            e.preventDefault(), e.stopPropagation();var t = angular.element(u.$element[0].querySelectorAll('li:not(.divider) a'));if (t.length) {
	              var n;angular.forEach(t, function (e, t) {
	                s && s.call(e, ':focus') && (n = t);
	              }), 38 === e.keyCode && n > 0 ? n-- : 40 === e.keyCode && n < t.length - 1 ? n++ : angular.isUndefined(n) && (n = 0), t.eq(n)[0].focus();
	            }
	          }
	        };var f = u.show;u.show = function () {
	          f(), o(function () {
	            c.keyboard && u.$element && u.$element.on('keydown', u.$onKeyDown), r.on('click', l);
	          }, 0, !1), d.hasClass('dropdown') && d.addClass('open');
	        };var p = u.hide;u.hide = function () {
	          u.$isShown && (c.keyboard && u.$element && u.$element.off('keydown', u.$onKeyDown), r.off('click', l), d.hasClass('dropdown') && d.removeClass('open'), p());
	        };var g = u.destroy;return u.destroy = function () {
	          r.off('click', l), g();
	        }, u;
	      }var r = angular.element(t.document.body),
	          s = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector;return i;
	    }];
	  }).directive('bsDropdown', ['$window', '$sce', '$dropdown', function (e, t, a) {
	    return { restrict: 'EAC', scope: !0, compile: function compile(e, t) {
	        if (!t.bsDropdown) {
	          for (var o = e[0].nextSibling; o && 1 !== o.nodeType;) {
	            o = o.nextSibling;
	          }o && o.className.split(' ').indexOf('dropdown-menu') >= 0 && (t.template = o.outerHTML, t.templateUrl = n, o.parentNode.removeChild(o));
	        }return function (e, n, o) {
	          var i = { scope: e };angular.forEach(['template', 'templateUrl', 'controller', 'controllerAs', 'placement', 'container', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'id', 'autoClose'], function (e) {
	            angular.isDefined(t[e]) && (i[e] = t[e]);
	          });var r = /^(false|0|)$/i;angular.forEach(['html', 'container'], function (e) {
	            angular.isDefined(o[e]) && r.test(o[e]) && (i[e] = !1);
	          }), angular.forEach(['onBeforeShow', 'onShow', 'onBeforeHide', 'onHide'], function (t) {
	            var n = 'bs' + t.charAt(0).toUpperCase() + t.slice(1);angular.isDefined(o[n]) && (i[t] = e.$eval(o[n]));
	          }), o.bsDropdown && e.$watch(o.bsDropdown, function (t, n) {
	            e.content = t;
	          }, !0);var s = a(n, i);o.bsShow && e.$watch(o.bsShow, function (e, t) {
	            s && angular.isDefined(e) && (angular.isString(e) && (e = !!e.match(/true|,?(dropdown),?/i)), e === !0 ? s.show() : s.hide());
	          }), e.$on('$destroy', function () {
	            s && s.destroy(), i = null, s = null;
	          });
	        };
	      } };
	  }]), angular.version.minor < 3 && angular.version.dot < 14 && angular.module('ng').factory('$$rAF', ['$window', '$timeout', function (e, t) {
	    var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame,
	        a = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
	        o = !!n,
	        i = o ? function (e) {
	      var t = n(e);return function () {
	        a(t);
	      };
	    } : function (e) {
	      var n = t(e, 16.66, !1);return function () {
	        t.cancel(n);
	      };
	    };return i.supported = o, i;
	  }]), angular.module('mgcrea.ngStrap.helpers.parseOptions', []).provider('$parseOptions', function () {
	    var e = this.defaults = { regexp: /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/ };this.$get = ['$parse', '$q', function (t, n) {
	      function a(a, o) {
	        function i(e, t) {
	          return e.map(function (e, n) {
	            var a,
	                o,
	                i = {};return i[c] = e, a = u(t, i), o = p(t, i), { label: a, value: o, index: n };
	          });
	        }var r = {},
	            s = angular.extend({}, e, o);r.$values = [];var l, u, c, d, f, p, g;return r.init = function () {
	          r.$match = l = a.match(s.regexp), u = t(l[2] || l[1]), c = l[4] || l[6], d = l[5], f = t(l[3] || ''), p = t(l[2] ? l[1] : c), g = t(l[7]);
	        }, r.valuesFn = function (e, t) {
	          return n.when(g(e, t)).then(function (t) {
	            return angular.isArray(t) || (t = []), r.$values = t.length ? i(t, e) : [], r.$values;
	          });
	        }, r.displayValue = function (e) {
	          var t = {};return t[c] = e, u(t);
	        }, r.init(), r;
	      }return a;
	    }];
	  }), angular.module('mgcrea.ngStrap.helpers.dimensions', []).factory('dimensions', function () {
	    function t(e) {
	      var t = e.ownerDocument,
	          o = e.offsetParent || t;if (a(o, '#document')) return t.documentElement;for (; o && !a(o, 'html') && 'static' === n.css(o, 'position');) {
	        o = o.offsetParent;
	      }return o || t.documentElement;
	    }var n = {},
	        a = n.nodeName = function (e, t) {
	      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
	    };return n.css = function (t, n, a) {
	      var o;return o = t.currentStyle ? t.currentStyle[n] : e.getComputedStyle ? e.getComputedStyle(t)[n] : t.style[n], a === !0 ? parseFloat(o) || 0 : o;
	    }, n.offset = function (t) {
	      var n = t.getBoundingClientRect(),
	          a = t.ownerDocument;return { width: n.width || t.offsetWidth, height: n.height || t.offsetHeight, top: n.top + (e.pageYOffset || a.documentElement.scrollTop) - (a.documentElement.clientTop || 0), left: n.left + (e.pageXOffset || a.documentElement.scrollLeft) - (a.documentElement.clientLeft || 0) };
	    }, n.setOffset = function (e, t, a) {
	      var o,
	          i,
	          r,
	          s,
	          l,
	          u,
	          c,
	          d = n.css(e, 'position'),
	          f = angular.element(e),
	          p = {};'static' === d && (e.style.position = 'relative'), l = n.offset(e), r = n.css(e, 'top'), u = n.css(e, 'left'), c = ('absolute' === d || 'fixed' === d) && (r + u).indexOf('auto') > -1, c ? (o = n.position(e), s = o.top, i = o.left) : (s = parseFloat(r) || 0, i = parseFloat(u) || 0), angular.isFunction(t) && (t = t.call(e, a, l)), null !== t.top && (p.top = t.top - l.top + s), null !== t.left && (p.left = t.left - l.left + i), 'using' in t ? t.using.call(f, p) : f.css({ top: p.top + 'px', left: p.left + 'px' });
	    }, n.position = function (e) {
	      var o,
	          i,
	          r = { top: 0, left: 0 };return 'fixed' === n.css(e, 'position') ? i = e.getBoundingClientRect() : (o = t(e), i = n.offset(e), a(o, 'html') || (r = n.offset(o)), r.top += n.css(o, 'borderTopWidth', !0), r.left += n.css(o, 'borderLeftWidth', !0)), { width: e.offsetWidth, height: e.offsetHeight, top: i.top - r.top - n.css(e, 'marginTop', !0), left: i.left - r.left - n.css(e, 'marginLeft', !0) };
	    }, n.height = function (e, t) {
	      var a = e.offsetHeight;return t ? a += n.css(e, 'marginTop', !0) + n.css(e, 'marginBottom', !0) : a -= n.css(e, 'paddingTop', !0) + n.css(e, 'paddingBottom', !0) + n.css(e, 'borderTopWidth', !0) + n.css(e, 'borderBottomWidth', !0), a;
	    }, n.width = function (e, t) {
	      var a = e.offsetWidth;return t ? a += n.css(e, 'marginLeft', !0) + n.css(e, 'marginRight', !0) : a -= n.css(e, 'paddingLeft', !0) + n.css(e, 'paddingRight', !0) + n.css(e, 'borderLeftWidth', !0) + n.css(e, 'borderRightWidth', !0), a;
	    }, n;
	  }), angular.module('mgcrea.ngStrap.helpers.debounce', []).factory('debounce', ['$timeout', function (e) {
	    return function (t, n, a) {
	      var o = null;return function () {
	        var i = this,
	            r = arguments,
	            s = a && !o;return o && e.cancel(o), o = e(function () {
	          o = null, a || t.apply(i, r);
	        }, n, !1), s && t.apply(i, r), o;
	      };
	    };
	  }]).factory('throttle', ['$timeout', function (e) {
	    return function (t, n, a) {
	      var o = null;return a || (a = {}), function () {
	        var i = this,
	            r = arguments;o || (a.leading !== !1 && t.apply(i, r), o = e(function () {
	          o = null, a.trailing !== !1 && t.apply(i, r);
	        }, n, !1));
	      };
	    };
	  }]), angular.module('mgcrea.ngStrap.helpers.dateParser', []).provider('$dateParser', ['$localeProvider', function (e) {
	    function t() {
	      this.year = 1970, this.month = 0, this.day = 1, this.hours = 0, this.minutes = 0, this.seconds = 0, this.milliseconds = 0;
	    }function n() {}function a(e) {
	      return !isNaN(parseFloat(e)) && isFinite(e);
	    }function o(e, t) {
	      for (var n = e.length, a = t.toString().toLowerCase(), o = 0; n > o; o++) {
	        if (e[o].toLowerCase() === a) return o;
	      }return -1;
	    }t.prototype.setMilliseconds = function (e) {
	      this.milliseconds = e;
	    }, t.prototype.setSeconds = function (e) {
	      this.seconds = e;
	    }, t.prototype.setMinutes = function (e) {
	      this.minutes = e;
	    }, t.prototype.setHours = function (e) {
	      this.hours = e;
	    }, t.prototype.getHours = function () {
	      return this.hours;
	    }, t.prototype.setDate = function (e) {
	      this.day = e;
	    }, t.prototype.setMonth = function (e) {
	      this.month = e;
	    }, t.prototype.setFullYear = function (e) {
	      this.year = e;
	    }, t.prototype.fromDate = function (e) {
	      return this.year = e.getFullYear(), this.month = e.getMonth(), this.day = e.getDate(), this.hours = e.getHours(), this.minutes = e.getMinutes(), this.seconds = e.getSeconds(), this.milliseconds = e.getMilliseconds(), this;
	    }, t.prototype.toDate = function () {
	      return new Date(this.year, this.month, this.day, this.hours, this.minutes, this.seconds, this.milliseconds);
	    };var i = t.prototype,
	        r = this.defaults = { format: 'shortDate', strict: !1 };this.$get = ['$locale', 'dateFilter', function (e, s) {
	      var l = function l(_l) {
	        function u(e) {
	          var t = c(e);return g(t);
	        }function c(e) {
	          var t = d(e),
	              n = t.replace(/''/g, '\\\''),
	              a = /('(?:\\'|.)*?')/,
	              o = n.split(a),
	              i = Object.keys(b),
	              r = [];return angular.forEach(o, function (e) {
	            if (f(e)) e = p(e);else for (var t = 0; t < i.length; t++) {
	              e = e.split(i[t]).join('${' + t + '}');
	            }r.push(e);
	          }), r.join('');
	        }function d(e) {
	          return e.replace(/\\/g, '[\\\\]').replace(/-/g, '[-]').replace(/\./g, '[.]').replace(/\*/g, '[*]').replace(/\+/g, '[+]').replace(/\?/g, '[?]').replace(/\$/g, '[$]').replace(/\^/g, '[^]').replace(/\//g, '[/]').replace(/\\s/g, '[\\s]');
	        }function f(e) {
	          return (/^'.*'$/.test(e)
	          );
	        }function p(e) {
	          return e.replace(/^'(.*)'$/, '$1');
	        }function g(e) {
	          for (var t = Object.keys(b), n = e, a = 0; a < t.length; a++) {
	            n = n.split('${' + a + '}').join('(' + b[t[a]] + ')');
	          }return new RegExp('^' + n + '$', ['i']);
	        }function m(e) {
	          var t = c(e);return $(t);
	        }function $(e) {
	          for (var t, n, a, o, i = Object.keys(b), r = new RegExp('\\${(\\d+)}', 'g'), s = []; null !== (t = r.exec(e));) {
	            n = t[1], a = i[n], o = D[a], s.push(o);
	          }return s;
	        }var h,
	            v,
	            w = angular.extend({}, r, _l),
	            y = {},
	            b = { sss: '[0-9]{3}', ss: '[0-5][0-9]', s: w.strict ? '[1-5]?[0-9]' : '[0-9]|[0-5][0-9]', mm: '[0-5][0-9]', m: w.strict ? '[1-5]?[0-9]' : '[0-9]|[0-5][0-9]', HH: '[01][0-9]|2[0-3]', H: w.strict ? '1?[0-9]|2[0-3]' : '[01]?[0-9]|2[0-3]', hh: '[0][1-9]|[1][012]', h: w.strict ? '[1-9]|1[012]' : '0?[1-9]|1[012]', a: 'AM|PM', EEEE: e.DATETIME_FORMATS.DAY.join('|'), EEE: e.DATETIME_FORMATS.SHORTDAY.join('|'), dd: '0[1-9]|[12][0-9]|3[01]', d: w.strict ? '[1-9]|[1-2][0-9]|3[01]' : '0?[1-9]|[1-2][0-9]|3[01]', MMMM: e.DATETIME_FORMATS.MONTH.join('|'), MMM: e.DATETIME_FORMATS.SHORTMONTH.join('|'), MM: '0[1-9]|1[012]', M: w.strict ? '[1-9]|1[012]' : '0?[1-9]|1[012]', yyyy: '[1]{1}[0-9]{3}|[2]{1}[0-9]{3}', yy: '[0-9]{2}', y: w.strict ? '-?(0|[1-9][0-9]{0,3})' : '-?0*[0-9]{1,4}' },
	            D = { sss: i.setMilliseconds, ss: i.setSeconds, s: i.setSeconds, mm: i.setMinutes, m: i.setMinutes, HH: i.setHours, H: i.setHours, hh: i.setHours, h: i.setHours, EEEE: n, EEE: n, dd: i.setDate, d: i.setDate, a: function a(e) {
	            var t = this.getHours() % 12;return this.setHours(e.match(/pm/i) ? t + 12 : t);
	          }, MMMM: function MMMM(t) {
	            return this.setMonth(o(e.DATETIME_FORMATS.MONTH, t));
	          }, MMM: function MMM(t) {
	            return this.setMonth(o(e.DATETIME_FORMATS.SHORTMONTH, t));
	          }, MM: function MM(e) {
	            return this.setMonth(1 * e - 1);
	          }, M: function M(e) {
	            return this.setMonth(1 * e - 1);
	          }, yyyy: i.setFullYear, yy: function yy(e) {
	            return this.setFullYear(2e3 + 1 * e);
	          }, y: function y(e) {
	            return 50 >= 1 * e && 2 === e.length ? this.setFullYear(2e3 + 1 * e) : this.setFullYear(1 * e);
	          } };return y.init = function () {
	          y.$format = e.DATETIME_FORMATS[w.format] || w.format, h = u(y.$format), v = m(y.$format);
	        }, y.isValid = function (e) {
	          return angular.isDate(e) ? !isNaN(e.getTime()) : h.test(e);
	        }, y.parse = function (n, a, o, i) {
	          o && (o = e.DATETIME_FORMATS[o] || o), angular.isDate(n) && (n = s(n, o || y.$format, i));var r = o ? u(o) : h,
	              l = o ? m(o) : v,
	              c = r.exec(n);if (!c) return !1;for (var d = a && !isNaN(a.getTime()) ? new t().fromDate(a) : new t().fromDate(new Date(1970, 0, 1, 0)), f = 0; f < c.length - 1; f++) {
	            l[f] && l[f].call(d, c[f + 1]);
	          }var p = d.toDate();return parseInt(d.day, 10) !== p.getDate() ? !1 : p;
	        }, y.getDateForAttribute = function (e, t) {
	          var n;if ('today' === t) {
	            var o = new Date();n = new Date(o.getFullYear(), o.getMonth(), o.getDate() + ('maxDate' === e ? 1 : 0), 0, 0, 0, 'minDate' === e ? 0 : -1);
	          } else n = angular.isString(t) && t.match(/^".+"$/) ? new Date(t.substr(1, t.length - 2)) : a(t) ? new Date(parseInt(t, 10)) : angular.isString(t) && 0 === t.length ? 'minDate' === e ? -(1 / 0) : +(1 / 0) : new Date(t);return n;
	        }, y.getTimeForAttribute = function (e, t) {
	          var n;return n = 'now' === t ? new Date().setFullYear(1970, 0, 1) : angular.isString(t) && t.match(/^".+"$/) ? new Date(t.substr(1, t.length - 2)).setFullYear(1970, 0, 1) : a(t) ? new Date(parseInt(t, 10)).setFullYear(1970, 0, 1) : angular.isString(t) && 0 === t.length ? 'minTime' === e ? -(1 / 0) : +(1 / 0) : y.parse(t, new Date(1970, 0, 1, 0));
	        }, y.daylightSavingAdjust = function (e) {
	          return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null;
	        }, y.timezoneOffsetAdjust = function (e, t, n) {
	          return e ? (t && 'UTC' === t && (e = new Date(e.getTime()), e.setMinutes(e.getMinutes() + (n ? -1 : 1) * e.getTimezoneOffset())), e) : null;
	        }, y.init(), y;
	      };return l;
	    }];
	  }]), angular.module('mgcrea.ngStrap.helpers.dateFormatter', []).service('$dateFormatter', ['$locale', 'dateFilter', function (e, t) {
	    function n(e) {
	      return (/(h+)([:\.])?(m+)([:\.])?(s*)[ ]?(a?)/i.exec(e).slice(1)
	      );
	    }this.getDefaultLocale = function () {
	      return e.id;
	    }, this.getDatetimeFormat = function (t, n) {
	      return e.DATETIME_FORMATS[t] || t;
	    }, this.weekdaysShort = function (t) {
	      return e.DATETIME_FORMATS.SHORTDAY;
	    }, this.hoursFormat = function (e) {
	      return n(e)[0];
	    }, this.minutesFormat = function (e) {
	      return n(e)[2];
	    }, this.secondsFormat = function (e) {
	      return n(e)[4];
	    }, this.timeSeparator = function (e) {
	      return n(e)[1];
	    }, this.showSeconds = function (e) {
	      return !!n(e)[4];
	    }, this.showAM = function (e) {
	      return !!n(e)[5];
	    }, this.formatDate = function (e, n, a, o) {
	      return t(e, n, o);
	    };
	  }]), angular.module('mgcrea.ngStrap.core', []).service('$bsCompiler', a), angular.module('mgcrea.ngStrap.datepicker', ['mgcrea.ngStrap.helpers.dateParser', 'mgcrea.ngStrap.helpers.dateFormatter', 'mgcrea.ngStrap.tooltip']).provider('$datepicker', function () {
	    var e = this.defaults = { animation: 'am-fade', prefixClass: 'datepicker', placement: 'bottom-left', templateUrl: 'datepicker/datepicker.tpl.html', trigger: 'focus', container: !1, keyboard: !0, html: !1, delay: 0, useNative: !1, dateType: 'date', dateFormat: 'shortDate', timezone: null, modelDateFormat: null, dayFormat: 'dd', monthFormat: 'MMM', yearFormat: 'yyyy', monthTitleFormat: 'MMMM yyyy', yearTitleFormat: 'yyyy', strictFormat: !1, autoclose: !1, minDate: -(1 / 0), maxDate: +(1 / 0), startView: 0, minView: 0, startWeek: 0, daysOfWeekDisabled: '', hasToday: !1, hasClear: !1, iconLeft: 'glyphicon glyphicon-chevron-left', iconRight: 'glyphicon glyphicon-chevron-right' };this.$get = ['$window', '$document', '$rootScope', '$sce', '$dateFormatter', 'datepickerViews', '$tooltip', '$timeout', function (t, n, a, o, i, r, s, l) {
	      function u(t, n, a) {
	        function o(e) {
	          e.selected = u.$isSelected(e.date);
	        }function i() {
	          t[0].focus();
	        }var u = s(t, angular.extend({}, e, a)),
	            f = a.scope,
	            p = u.$options,
	            g = u.$scope;p.startView && (p.startView -= p.minView);var m = r(u);u.$views = m.views;var $ = m.viewDate;g.$mode = p.startView, g.$iconLeft = p.iconLeft, g.$iconRight = p.iconRight, g.$hasToday = p.hasToday, g.$hasClear = p.hasClear;var h = u.$views[g.$mode];g.$select = function (e) {
	          u.select(e);
	        }, g.$selectPane = function (e) {
	          u.$selectPane(e);
	        }, g.$toggleMode = function () {
	          u.setMode((g.$mode + 1) % u.$views.length);
	        }, g.$setToday = function () {
	          p.autoclose ? (u.setMode(0), u.select(new Date())) : u.select(new Date(), !0);
	        }, g.$clear = function () {
	          p.autoclose ? (u.setMode(0), u.select(null)) : u.select(null, !0);
	        }, u.update = function (e) {
	          angular.isDate(e) && !isNaN(e.getTime()) && (u.$date = e, h.update.call(h, e)), u.$build(!0);
	        }, u.updateDisabledDates = function (e) {
	          p.disabledDateRanges = e;for (var t = 0, n = g.rows.length; n > t; t++) {
	            angular.forEach(g.rows[t], u.$setDisabledEl);
	          }
	        }, u.select = function (e, t) {
	          angular.isDate(e) ? (!angular.isDate(n.$dateValue) || isNaN(n.$dateValue.getTime())) && (n.$dateValue = new Date(e)) : n.$dateValue = null, !g.$mode || t ? (n.$setViewValue(angular.copy(e)), n.$render(), p.autoclose && !t && l(function () {
	            u.hide(!0);
	          })) : (angular.extend($, { year: e.getFullYear(), month: e.getMonth(), date: e.getDate() }), u.setMode(g.$mode - 1), u.$build());
	        }, u.setMode = function (e) {
	          g.$mode = e, h = u.$views[g.$mode], u.$build();
	        }, u.$build = function (e) {
	          e === !0 && h.built || (e !== !1 || h.built) && h.build.call(h);
	        }, u.$updateSelected = function () {
	          for (var e = 0, t = g.rows.length; t > e; e++) {
	            angular.forEach(g.rows[e], o);
	          }
	        }, u.$isSelected = function (e) {
	          return h.isSelected(e);
	        }, u.$setDisabledEl = function (e) {
	          e.disabled = h.isDisabled(e.date);
	        }, u.$selectPane = function (e) {
	          var t = h.steps,
	              n = new Date(Date.UTC($.year + (t.year || 0) * e, $.month + (t.month || 0) * e, 1));angular.extend($, { year: n.getUTCFullYear(), month: n.getUTCMonth(), date: n.getUTCDate() }), u.$build();
	        }, u.$onMouseDown = function (e) {
	          if (e.preventDefault(), e.stopPropagation(), d) {
	            var t = angular.element(e.target);'button' !== t[0].nodeName.toLowerCase() && (t = t.parent()), t.triggerHandler('click');
	          }
	        }, u.$onKeyDown = function (e) {
	          if (/(38|37|39|40|13)/.test(e.keyCode) && !e.shiftKey && !e.altKey) {
	            if (e.preventDefault(), e.stopPropagation(), 13 === e.keyCode) return void (g.$mode ? g.$apply(function () {
	              u.setMode(g.$mode - 1);
	            }) : u.hide(!0));h.onKeyDown(e), f.$digest();
	          }
	        };var v = u.init;u.init = function () {
	          return c && p.useNative ? (t.prop('type', 'date'), void t.css('-webkit-appearance', 'textfield')) : (d && (t.prop('type', 'text'), t.attr('readonly', 'true'), t.on('click', i)), void v());
	        };var w = u.destroy;u.destroy = function () {
	          c && p.useNative && t.off('click', i), w();
	        };var y = u.show;u.show = function () {
	          !d && t.attr('readonly') || t.attr('disabled') || (y(), l(function () {
	            u.$isShown && (u.$element.on(d ? 'touchstart' : 'mousedown', u.$onMouseDown), p.keyboard && t.on('keydown', u.$onKeyDown));
	          }, 0, !1));
	        };var b = u.hide;return u.hide = function (e) {
	          u.$isShown && (u.$element.off(d ? 'touchstart' : 'mousedown', u.$onMouseDown), p.keyboard && t.off('keydown', u.$onKeyDown), b(e));
	        }, u;
	      }var c = /(ip[ao]d|iphone|android)/gi.test(t.navigator.userAgent),
	          d = 'createTouch' in t.document && c;return e.lang || (e.lang = i.getDefaultLocale()), u.defaults = e, u;
	    }];
	  }).directive('bsDatepicker', ['$window', '$parse', '$q', '$dateFormatter', '$dateParser', '$datepicker', function (e, t, n, a, o, i) {
	    var r = /(ip[ao]d|iphone|android)/gi.test(e.navigator.userAgent);return { restrict: 'EAC', require: 'ngModel', link: function link(e, t, n, s) {
	        function l(e) {
	          return e && e.length ? e : null;
	        }function u(e) {
	          if (angular.isDate(e)) {
	            var t = isNaN(p.$options.minDate) || e.getTime() >= p.$options.minDate,
	                n = isNaN(p.$options.maxDate) || e.getTime() <= p.$options.maxDate,
	                a = t && n;s.$setValidity('date', a), s.$setValidity('min', t), s.$setValidity('max', n), a && (s.$dateValue = e);
	          }
	        }function c() {
	          return !s.$dateValue || isNaN(s.$dateValue.getTime()) ? '' : m(s.$dateValue, d.dateFormat);
	        }var d = { scope: e };angular.forEach(['template', 'templateUrl', 'controller', 'controllerAs', 'placement', 'container', 'delay', 'trigger', 'html', 'animation', 'autoclose', 'dateType', 'dateFormat', 'timezone', 'modelDateFormat', 'dayFormat', 'strictFormat', 'startWeek', 'startDate', 'useNative', 'lang', 'startView', 'minView', 'iconLeft', 'iconRight', 'daysOfWeekDisabled', 'id', 'prefixClass', 'prefixEvent', 'hasToday', 'hasClear'], function (e) {
	          angular.isDefined(n[e]) && (d[e] = n[e]);
	        });var f = /^(false|0|)$/i;angular.forEach(['html', 'container', 'autoclose', 'useNative', 'hasToday', 'hasClear'], function (e) {
	          angular.isDefined(n[e]) && f.test(n[e]) && (d[e] = !1);
	        }), angular.forEach(['onBeforeShow', 'onShow', 'onBeforeHide', 'onHide'], function (t) {
	          var a = 'bs' + t.charAt(0).toUpperCase() + t.slice(1);angular.isDefined(n[a]) && (d[t] = e.$eval(n[a]));
	        });var p = i(t, s, d);d = p.$options, r && d.useNative && (d.dateFormat = 'yyyy-MM-dd');var g = d.lang,
	            m = function m(e, t) {
	          return a.formatDate(e, t, g);
	        },
	            $ = o({ format: d.dateFormat, lang: g, strict: d.strictFormat });n.bsShow && e.$watch(n.bsShow, function (e, t) {
	          p && angular.isDefined(e) && (angular.isString(e) && (e = !!e.match(/true|,?(datepicker),?/i)), e === !0 ? p.show() : p.hide());
	        }), angular.forEach(['minDate', 'maxDate'], function (e) {
	          angular.isDefined(n[e]) && n.$observe(e, function (t) {
	            p.$options[e] = $.getDateForAttribute(e, t), isNaN(p.$options[e]) || p.$build(!1), u(s.$dateValue);
	          });
	        }), angular.isDefined(n.dateFormat) && n.$observe('dateFormat', function (e) {
	          p.$options.dateFormat = e;
	        }), e.$watch(n.ngModel, function (e, t) {
	          p.update(s.$dateValue);
	        }, !0), angular.isDefined(n.disabledDates) && e.$watch(n.disabledDates, function (e, t) {
	          e = l(e), t = l(t), e && p.updateDisabledDates(e);
	        }), s.$parsers.unshift(function (e) {
	          var t;if (!e) return s.$setValidity('date', !0), null;var n = $.parse(e, s.$dateValue);return !n || isNaN(n.getTime()) ? void s.$setValidity('date', !1) : (u(n), 'string' === d.dateType ? (t = $.timezoneOffsetAdjust(n, d.timezone, !0), m(t, d.modelDateFormat || d.dateFormat)) : (t = $.timezoneOffsetAdjust(s.$dateValue, d.timezone, !0), 'number' === d.dateType ? t.getTime() : 'unix' === d.dateType ? t.getTime() / 1e3 : 'iso' === d.dateType ? t.toISOString() : new Date(t)));
	        }), s.$formatters.push(function (e) {
	          var t;return t = angular.isUndefined(e) || null === e ? NaN : angular.isDate(e) ? e : 'string' === d.dateType ? $.parse(e, null, d.modelDateFormat) : 'unix' === d.dateType ? new Date(1e3 * e) : new Date(e), s.$dateValue = $.timezoneOffsetAdjust(t, d.timezone), c();
	        }), s.$render = function () {
	          t.val(c());
	        }, e.$on('$destroy', function () {
	          p && p.destroy(), d = null, p = null;
	        });
	      } };
	  }]).provider('datepickerViews', function () {
	    function e(e, t) {
	      for (var n = []; e.length > 0;) {
	        n.push(e.splice(0, t));
	      }return n;
	    }function t(e, t) {
	      return (e % t + t) % t;
	    }this.$get = ['$dateFormatter', '$dateParser', '$sce', function (n, a, o) {
	      return function (i) {
	        var r = i.$scope,
	            s = i.$options,
	            l = s.lang,
	            u = function u(e, t) {
	          return n.formatDate(e, t, l);
	        },
	            c = a({ format: s.dateFormat, lang: l, strict: s.strictFormat }),
	            d = n.weekdaysShort(l),
	            f = d.slice(s.startWeek).concat(d.slice(0, s.startWeek)),
	            p = o.trustAsHtml('<th class="dow text-center">' + f.join('</th><th class="dow text-center">') + '</th>'),
	            g = i.$date || (s.startDate ? c.getDateForAttribute('startDate', s.startDate) : new Date()),
	            m = { year: g.getFullYear(), month: g.getMonth(), date: g.getDate() },
	            $ = [{ format: s.dayFormat, split: 7, steps: { month: 1 }, update: function update(e, t) {
	            !this.built || t || e.getFullYear() !== m.year || e.getMonth() !== m.month ? (angular.extend(m, { year: i.$date.getFullYear(), month: i.$date.getMonth(), date: i.$date.getDate() }), i.$build()) : (e.getDate() !== m.date || 1 === e.getDate()) && (m.date = i.$date.getDate(), i.$updateSelected());
	          }, build: function build() {
	            var n = new Date(m.year, m.month, 1),
	                a = n.getTimezoneOffset(),
	                o = new Date(+n - 864e5 * t(n.getDay() - s.startWeek, 7)),
	                l = o.getTimezoneOffset(),
	                d = c.timezoneOffsetAdjust(new Date(), s.timezone).toDateString();l !== a && (o = new Date(+o + 6e4 * (l - a)));for (var f, g = [], $ = 0; 42 > $; $++) {
	              f = c.daylightSavingAdjust(new Date(o.getFullYear(), o.getMonth(), o.getDate() + $)), g.push({ date: f, isToday: f.toDateString() === d, label: u(f, this.format), selected: i.$date && this.isSelected(f), muted: f.getMonth() !== m.month, disabled: this.isDisabled(f) });
	            }r.title = u(n, s.monthTitleFormat), r.showLabels = !0, r.labels = p, r.rows = e(g, this.split), r.isTodayDisabled = this.isDisabled(new Date()), this.built = !0;
	          }, isSelected: function isSelected(e) {
	            return i.$date && e.getFullYear() === i.$date.getFullYear() && e.getMonth() === i.$date.getMonth() && e.getDate() === i.$date.getDate();
	          }, isDisabled: function isDisabled(e) {
	            var t = e.getTime();if (t < s.minDate || t > s.maxDate) return !0;if (-1 !== s.daysOfWeekDisabled.indexOf(e.getDay())) return !0;if (s.disabledDateRanges) for (var n = 0; n < s.disabledDateRanges.length; n++) {
	              if (t >= s.disabledDateRanges[n].start && t <= s.disabledDateRanges[n].end) return !0;
	            }return !1;
	          }, onKeyDown: function onKeyDown(e) {
	            if (i.$date) {
	              var t,
	                  n = i.$date.getTime();37 === e.keyCode ? t = new Date(n - 864e5) : 38 === e.keyCode ? t = new Date(n - 6048e5) : 39 === e.keyCode ? t = new Date(n + 864e5) : 40 === e.keyCode && (t = new Date(n + 6048e5)), this.isDisabled(t) || i.select(t, !0);
	            }
	          } }, { name: 'month', format: s.monthFormat, split: 4, steps: { year: 1 }, update: function update(e, t) {
	            this.built && e.getFullYear() === m.year ? e.getMonth() !== m.month && (angular.extend(m, { month: i.$date.getMonth(), date: i.$date.getDate() }), i.$updateSelected()) : (angular.extend(m, { year: i.$date.getFullYear(), month: i.$date.getMonth(), date: i.$date.getDate() }), i.$build());
	          }, build: function build() {
	            for (var t, n = [], a = 0; 12 > a; a++) {
	              t = new Date(m.year, a, 1), n.push({ date: t, label: u(t, this.format), selected: i.$isSelected(t), disabled: this.isDisabled(t) });
	            }r.title = u(t, s.yearTitleFormat), r.showLabels = !1, r.rows = e(n, this.split), this.built = !0;
	          }, isSelected: function isSelected(e) {
	            return i.$date && e.getFullYear() === i.$date.getFullYear() && e.getMonth() === i.$date.getMonth();
	          }, isDisabled: function isDisabled(e) {
	            var t = +new Date(e.getFullYear(), e.getMonth() + 1, 0);return t < s.minDate || e.getTime() > s.maxDate;
	          }, onKeyDown: function onKeyDown(e) {
	            if (i.$date) {
	              var t = i.$date.getMonth(),
	                  n = new Date(i.$date);37 === e.keyCode ? n.setMonth(t - 1) : 38 === e.keyCode ? n.setMonth(t - 4) : 39 === e.keyCode ? n.setMonth(t + 1) : 40 === e.keyCode && n.setMonth(t + 4), this.isDisabled(n) || i.select(n, !0);
	            }
	          } }, { name: 'year', format: s.yearFormat, split: 4, steps: { year: 12 }, update: function update(e, t) {
	            !this.built || t || parseInt(e.getFullYear() / 20, 10) !== parseInt(m.year / 20, 10) ? (angular.extend(m, { year: i.$date.getFullYear(), month: i.$date.getMonth(), date: i.$date.getDate() }), i.$build()) : e.getFullYear() !== m.year && (angular.extend(m, { year: i.$date.getFullYear(), month: i.$date.getMonth(), date: i.$date.getDate() }), i.$updateSelected());
	          }, build: function build() {
	            for (var t, n = m.year - m.year % (3 * this.split), a = [], o = 0; 12 > o; o++) {
	              t = new Date(n + o, 0, 1), a.push({ date: t, label: u(t, this.format), selected: i.$isSelected(t), disabled: this.isDisabled(t) });
	            }r.title = a[0].label + '-' + a[a.length - 1].label, r.showLabels = !1, r.rows = e(a, this.split), this.built = !0;
	          }, isSelected: function isSelected(e) {
	            return i.$date && e.getFullYear() === i.$date.getFullYear();
	          }, isDisabled: function isDisabled(e) {
	            var t = +new Date(e.getFullYear() + 1, 0, 0);return t < s.minDate || e.getTime() > s.maxDate;
	          }, onKeyDown: function onKeyDown(e) {
	            if (i.$date) {
	              var t = i.$date.getFullYear(),
	                  n = new Date(i.$date);37 === e.keyCode ? n.setYear(t - 1) : 38 === e.keyCode ? n.setYear(t - 4) : 39 === e.keyCode ? n.setYear(t + 1) : 40 === e.keyCode && n.setYear(t + 4), this.isDisabled(n) || i.select(n, !0);
	            }
	          } }];return { views: s.minView ? Array.prototype.slice.call($, s.minView) : $, viewDate: m };
	      };
	    }];
	  }), angular.module('mgcrea.ngStrap.button', []).provider('$button', function () {
	    var e = this.defaults = { activeClass: 'active', toggleEvent: 'click' };this.$get = function () {
	      return { defaults: e };
	    };
	  }).directive('bsCheckboxGroup', function () {
	    return { restrict: 'A', require: 'ngModel', compile: function compile(e, t) {
	        e.attr('data-toggle', 'buttons'), e.removeAttr('ng-model');var n = e[0].querySelectorAll('input[type="checkbox"]');angular.forEach(n, function (e) {
	          var n = angular.element(e);n.attr('bs-checkbox', ''), n.attr('ng-model', t.ngModel + '.' + n.attr('value'));
	        });
	      } };
	  }).directive('bsCheckbox', ['$button', '$$rAF', function (e, t) {
	    var n = e.defaults,
	        a = /^(true|false|\d+)$/;return { restrict: 'A', require: 'ngModel', link: function link(e, o, i, r) {
	        var s = n,
	            l = 'INPUT' === o[0].nodeName,
	            u = l ? o.parent() : o,
	            c = angular.isDefined(i.trueValue) ? i.trueValue : !0;a.test(i.trueValue) && (c = e.$eval(i.trueValue));var d = angular.isDefined(i.falseValue) ? i.falseValue : !1;a.test(i.falseValue) && (d = e.$eval(i.falseValue));var f = 'boolean' != typeof c || 'boolean' != typeof d;f && (r.$parsers.push(function (e) {
	          return e ? c : d;
	        }), r.$formatters.push(function (e) {
	          return angular.equals(e, c);
	        }), e.$watch(i.ngModel, function (e, t) {
	          r.$render();
	        })), r.$render = function () {
	          var e = angular.equals(r.$modelValue, c);t(function () {
	            l && (o[0].checked = e), u.toggleClass(s.activeClass, e);
	          });
	        }, o.bind(s.toggleEvent, function () {
	          e.$apply(function () {
	            l || r.$setViewValue(!u.hasClass('active')), f || r.$render();
	          });
	        });
	      } };
	  }]).directive('bsRadioGroup', function () {
	    return { restrict: 'A', require: 'ngModel', compile: function compile(e, t) {
	        e.attr('data-toggle', 'buttons'), e.removeAttr('ng-model');var n = e[0].querySelectorAll('input[type="radio"]');angular.forEach(n, function (e) {
	          angular.element(e).attr('bs-radio', ''), angular.element(e).attr('ng-model', t.ngModel);
	        });
	      } };
	  }).directive('bsRadio', ['$button', '$$rAF', function (e, t) {
	    var n = e.defaults,
	        a = /^(true|false|\d+)$/;return { restrict: 'A', require: 'ngModel', link: function link(e, o, i, r) {
	        var s,
	            l = n,
	            u = 'INPUT' === o[0].nodeName,
	            c = u ? o.parent() : o;i.$observe('value', function (t) {
	          s = 'boolean' != typeof t && a.test(t) ? e.$eval(t) : t, r.$render();
	        }), r.$render = function () {
	          var e = angular.equals(r.$modelValue, s);t(function () {
	            u && (o[0].checked = e), c.toggleClass(l.activeClass, e);
	          });
	        }, o.bind(l.toggleEvent, function () {
	          e.$apply(function () {
	            r.$setViewValue(s), r.$render();
	          });
	        });
	      } };
	  }]), angular.module('mgcrea.ngStrap.collapse', []).provider('$collapse', function () {
	    var e = this.defaults = { animation: 'am-collapse', disallowToggle: !1, activeClass: 'in', startCollapsed: !1, allowMultiple: !1 },
	        t = this.controller = function (t, n, a) {
	      function o(e) {
	        for (var t = l.$targets.$active, n = 0; n < t.length; n++) {
	          e < t[n] && (t[n] = t[n] - 1), t[n] === l.$targets.length && (t[n] = l.$targets.length - 1);
	        }
	      }function i(e) {
	        var t = l.$targets.$active;return -1 !== t.indexOf(e);
	      }function r(e) {
	        var t = l.$targets.$active.indexOf(e);-1 !== t && l.$targets.$active.splice(t, 1);
	      }function s(e) {
	        l.$options.allowMultiple || l.$targets.$active.splice(0, 1), -1 === l.$targets.$active.indexOf(e) && l.$targets.$active.push(e);
	      }var l = this;l.$options = angular.copy(e), angular.forEach(['animation', 'disallowToggle', 'activeClass', 'startCollapsed', 'allowMultiple'], function (e) {
	        angular.isDefined(a[e]) && (l.$options[e] = a[e]);
	      });var u = /^(false|0|)$/i;angular.forEach(['disallowToggle', 'startCollapsed', 'allowMultiple'], function (e) {
	        angular.isDefined(a[e]) && u.test(a[e]) && (l.$options[e] = !1);
	      }), l.$toggles = [], l.$targets = [], l.$viewChangeListeners = [], l.$registerToggle = function (e) {
	        l.$toggles.push(e);
	      }, l.$registerTarget = function (e) {
	        l.$targets.push(e);
	      }, l.$unregisterToggle = function (e) {
	        var t = l.$toggles.indexOf(e);l.$toggles.splice(t, 1);
	      }, l.$unregisterTarget = function (e) {
	        var t = l.$targets.indexOf(e);l.$targets.splice(t, 1), l.$options.allowMultiple && r(e), o(t), l.$viewChangeListeners.forEach(function (e) {
	          e();
	        });
	      }, l.$targets.$active = l.$options.startCollapsed ? [] : [0], l.$setActive = t.$setActive = function (e) {
	        angular.isArray(e) ? l.$targets.$active = e : !l.$options.disallowToggle && i(e) ? r(e) : s(e), l.$viewChangeListeners.forEach(function (e) {
	          e();
	        });
	      }, l.$activeIndexes = function () {
	        return l.$options.allowMultiple ? l.$targets.$active : 1 === l.$targets.$active.length ? l.$targets.$active[0] : -1;
	      };
	    };this.$get = function () {
	      var n = {};return n.defaults = e, n.controller = t, n;
	    };
	  }).directive('bsCollapse', ['$window', '$animate', '$collapse', function (e, t, n) {
	    return { require: ['?ngModel', 'bsCollapse'], controller: ['$scope', '$element', '$attrs', n.controller], link: function link(e, t, n, a) {
	        var o = a[0],
	            i = a[1];o && (i.$viewChangeListeners.push(function () {
	          o.$setViewValue(i.$activeIndexes());
	        }), o.$formatters.push(function (e) {
	          if (angular.isArray(e)) i.$setActive(e);else {
	            var t = i.$activeIndexes();angular.isArray(t) ? -1 === t.indexOf(1 * e) && i.$setActive(1 * e) : t !== 1 * e && i.$setActive(1 * e);
	          }return e;
	        }));
	      } };
	  }]).directive('bsCollapseToggle', function () {
	    return { require: ['^?ngModel', '^bsCollapse'], link: function link(e, t, n, a) {
	        var o = a[1];t.attr('data-toggle', 'collapse'), o.$registerToggle(t), e.$on('$destroy', function () {
	          o.$unregisterToggle(t);
	        }), t.on('click', function () {
	          if (!n.disabled) {
	            var a = n.bsCollapseToggle && 'bs-collapse-toggle' !== n.bsCollapseToggle ? n.bsCollapseToggle : o.$toggles.indexOf(t);o.$setActive(1 * a), e.$apply();
	          }
	        });
	      } };
	  }).directive('bsCollapseTarget', ['$animate', function (e) {
	    return { require: ['^?ngModel', '^bsCollapse'], link: function link(t, n, a, o) {
	        function i() {
	          var t = r.$targets.indexOf(n),
	              a = r.$activeIndexes(),
	              o = 'removeClass';angular.isArray(a) ? -1 !== a.indexOf(t) && (o = 'addClass') : t === a && (o = 'addClass'), e[o](n, r.$options.activeClass);
	        }var r = o[1];n.addClass('collapse'), r.$options.animation && n.addClass(r.$options.animation), r.$registerTarget(n), t.$on('$destroy', function () {
	          r.$unregisterTarget(n);
	        }), r.$viewChangeListeners.push(function () {
	          i();
	        }), i();
	      } };
	  }]), angular.module('mgcrea.ngStrap.aside', ['mgcrea.ngStrap.modal']).provider('$aside', function () {
	    var e = this.defaults = { animation: 'am-fade-and-slide-right', prefixClass: 'aside', prefixEvent: 'aside', placement: 'right', templateUrl: 'aside/aside.tpl.html', contentTemplate: !1, container: !1, element: null, backdrop: !0, keyboard: !0, html: !1, show: !0 };this.$get = ['$modal', function (t) {
	      function n(n) {
	        var a = {},
	            o = angular.extend({}, e, n);return a = t(o);
	      }return n;
	    }];
	  }).directive('bsAside', ['$window', '$sce', '$aside', function (e, t, n) {
	    return { restrict: 'EAC', scope: !0, link: function link(e, a, o, i) {
	        var r = { scope: e, element: a, show: !1 };angular.forEach(['template', 'templateUrl', 'controller', 'controllerAs', 'contentTemplate', 'placement', 'backdrop', 'keyboard', 'html', 'container', 'animation'], function (e) {
	          angular.isDefined(o[e]) && (r[e] = o[e]);
	        });var s = /^(false|0|)$/i;angular.forEach(['backdrop', 'keyboard', 'html', 'container'], function (e) {
	          angular.isDefined(o[e]) && s.test(o[e]) && (r[e] = !1);
	        }), angular.forEach(['onBeforeShow', 'onShow', 'onBeforeHide', 'onHide'], function (t) {
	          var n = 'bs' + t.charAt(0).toUpperCase() + t.slice(1);angular.isDefined(o[n]) && (r[t] = e.$eval(o[n]));
	        }), angular.forEach(['title', 'content'], function (n) {
	          o[n] && o.$observe(n, function (a, o) {
	            e[n] = t.trustAsHtml(a);
	          });
	        }), o.bsAside && e.$watch(o.bsAside, function (t, n) {
	          angular.isObject(t) ? angular.extend(e, t) : e.content = t;
	        }, !0);var l = n(r);a.on(o.trigger || 'click', l.toggle), e.$on('$destroy', function () {
	          l && l.destroy(), r = null, l = null;
	        });
	      } };
	  }]), angular.module('mgcrea.ngStrap.alert', ['mgcrea.ngStrap.modal']).provider('$alert', function () {
	    var e = this.defaults = { animation: 'am-fade', prefixClass: 'alert', prefixEvent: 'alert', placement: null, templateUrl: 'alert/alert.tpl.html', container: !1, element: null, backdrop: !1, keyboard: !0, show: !0, duration: !1, type: !1, dismissable: !0 };this.$get = ['$modal', '$timeout', function (t, n) {
	      function a(a) {
	        var o = {},
	            i = angular.extend({}, e, a);o = t(i), o.$scope.dismissable = !!i.dismissable, i.type && (o.$scope.type = i.type);var r = o.show;return i.duration && (o.show = function () {
	          r(), n(function () {
	            o.hide();
	          }, 1e3 * i.duration);
	        }), o;
	      }return a;
	    }];
	  }).directive('bsAlert', ['$window', '$sce', '$alert', function (e, t, n) {
	    return { restrict: 'EAC', scope: !0, link: function link(e, a, o, i) {
	        var r = { scope: e, element: a, show: !1 };angular.forEach(['template', 'templateUrl', 'controller', 'controllerAs', 'placement', 'keyboard', 'html', 'container', 'animation', 'duration', 'dismissable'], function (e) {
	          angular.isDefined(o[e]) && (r[e] = o[e]);
	        });var s = /^(false|0|)$/i;angular.forEach(['keyboard', 'html', 'container', 'dismissable'], function (e) {
	          angular.isDefined(o[e]) && s.test(o[e]) && (r[e] = !1);
	        }), angular.forEach(['onBeforeShow', 'onShow', 'onBeforeHide', 'onHide'], function (t) {
	          var n = 'bs' + t.charAt(0).toUpperCase() + t.slice(1);angular.isDefined(o[n]) && (r[t] = e.$eval(o[n]));
	        }), e.hasOwnProperty('title') || (e.title = ''), angular.forEach(['title', 'content', 'type'], function (n) {
	          o[n] && o.$observe(n, function (a, o) {
	            e[n] = t.trustAsHtml(a);
	          });
	        }), o.bsAlert && e.$watch(o.bsAlert, function (t, n) {
	          angular.isObject(t) ? angular.extend(e, t) : e.content = t;
	        }, !0);var l = n(r);a.on(o.trigger || 'click', l.toggle), e.$on('$destroy', function () {
	          l && l.destroy(), r = null, l = null;
	        });
	      } };
	  }]), angular.module('mgcrea.ngStrap.affix', ['mgcrea.ngStrap.helpers.dimensions', 'mgcrea.ngStrap.helpers.debounce']).provider('$affix', function () {
	    var e = this.defaults = { offsetTop: 'auto', inlineStyles: !0 };this.$get = ['$window', 'debounce', 'dimensions', function (t, n, a) {
	      function o(o, s) {
	        function l(e, t, n) {
	          var a = u(),
	              o = c();return v >= a ? 'top' : null !== e && a + e <= t.top ? 'middle' : null !== w && t.top + n + $ >= o - w ? 'bottom' : 'middle';
	        }function u() {
	          return p[0] === t ? t.pageYOffset : p[0].scrollTop;
	        }function c() {
	          return p[0] === t ? t.document.body.scrollHeight : p[0].scrollHeight;
	        }var d = {},
	            f = angular.extend({}, e, s),
	            p = f.target,
	            g = 'affix affix-top affix-bottom',
	            m = !1,
	            $ = 0,
	            h = 0,
	            v = 0,
	            w = 0,
	            y = null,
	            b = null,
	            D = o.parent();if (f.offsetParent) if (f.offsetParent.match(/^\d+$/)) for (var S = 0; S < 1 * f.offsetParent - 1; S++) {
	          D = D.parent();
	        } else D = angular.element(f.offsetParent);return d.init = function () {
	          this.$parseOffsets(), h = a.offset(o[0]).top + $, m = !o[0].style.width, p.on('scroll', this.checkPosition), p.on('click', this.checkPositionWithEventLoop), r.on('resize', this.$debouncedOnResize), this.checkPosition(), this.checkPositionWithEventLoop();
	        }, d.destroy = function () {
	          p.off('scroll', this.checkPosition), p.off('click', this.checkPositionWithEventLoop), r.off('resize', this.$debouncedOnResize);
	        }, d.checkPositionWithEventLoop = function () {
	          setTimeout(d.checkPosition, 1);
	        }, d.checkPosition = function () {
	          var e = u(),
	              t = a.offset(o[0]),
	              n = a.height(o[0]),
	              r = l(b, t, n);y !== r && (y = r, 'top' === r ? (b = null, m && o.css('width', ''), f.inlineStyles && (o.css('position', f.offsetParent ? '' : 'relative'), o.css('top', ''))) : 'bottom' === r ? (b = f.offsetUnpin ? -(1 * f.offsetUnpin) : t.top - e, m && o.css('width', ''), f.inlineStyles && (o.css('position', f.offsetParent ? '' : 'relative'), o.css('top', f.offsetParent ? '' : i[0].offsetHeight - w - n - h + 'px'))) : (b = null, m && o.css('width', o[0].offsetWidth + 'px'), f.inlineStyles && (o.css('position', 'fixed'), o.css('top', $ + 'px'))), o.removeClass(g).addClass('affix' + ('middle' !== r ? '-' + r : '')));
	        }, d.$onResize = function () {
	          d.$parseOffsets(), d.checkPosition();
	        }, d.$debouncedOnResize = n(d.$onResize, 50), d.$parseOffsets = function () {
	          var e = o.css('position');f.inlineStyles && o.css('position', f.offsetParent ? '' : 'relative'), f.offsetTop && ('auto' === f.offsetTop && (f.offsetTop = '+0'), f.offsetTop.match(/^[-+]\d+$/) ? ($ = 1 * -f.offsetTop, v = f.offsetParent ? a.offset(D[0]).top + 1 * f.offsetTop : a.offset(o[0]).top - a.css(o[0], 'marginTop', !0) + 1 * f.offsetTop) : v = 1 * f.offsetTop), f.offsetBottom && (w = f.offsetParent && f.offsetBottom.match(/^[-+]\d+$/) ? c() - (a.offset(D[0]).top + a.height(D[0])) + 1 * f.offsetBottom + 1 : 1 * f.offsetBottom), f.inlineStyles && o.css('position', e);
	        }, d.init(), d;
	      }var i = angular.element(t.document.body),
	          r = angular.element(t);return o;
	    }];
	  }).directive('bsAffix', ['$affix', '$window', function (e, t) {
	    return { restrict: 'EAC', require: '^?bsAffixTarget', link: function link(n, a, o, i) {
	        var r = { scope: n, target: i ? i.$element : angular.element(t) };angular.forEach(['offsetTop', 'offsetBottom', 'offsetParent', 'offsetUnpin', 'inlineStyles'], function (e) {
	          if (angular.isDefined(o[e])) {
	            var t = o[e];/true/i.test(t) && (t = !0), /false/i.test(t) && (t = !1), r[e] = t;
	          }
	        });var s = e(a, r);n.$on('$destroy', function () {
	          s && s.destroy(), r = null, s = null;
	        });
	      } };
	  }]).directive('bsAffixTarget', function () {
	    return { controller: ['$element', function (e) {
	        this.$element = e;
	      }] };
	  }), angular.module('mgcrea.ngStrap', ['mgcrea.ngStrap.modal', 'mgcrea.ngStrap.aside', 'mgcrea.ngStrap.alert', 'mgcrea.ngStrap.button', 'mgcrea.ngStrap.select', 'mgcrea.ngStrap.datepicker', 'mgcrea.ngStrap.timepicker', 'mgcrea.ngStrap.navbar', 'mgcrea.ngStrap.tooltip', 'mgcrea.ngStrap.popover', 'mgcrea.ngStrap.dropdown', 'mgcrea.ngStrap.typeahead', 'mgcrea.ngStrap.scrollspy', 'mgcrea.ngStrap.affix', 'mgcrea.ngStrap.tab', 'mgcrea.ngStrap.collapse']);
	}(window, document);
	//# sourceMappingURL=angular-strap.min.js.map

/***/ },

/***/ 69:
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * angular-strap
	 * @version v2.3.9 - 2016-06-10
	 * @link http://mgcrea.github.io/angular-strap
	 * @author Olivier Louvignes <olivier@mg-crea.com> (https://github.com/mgcrea)
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */
	!function (t, e, n) {
	  'use strict';
	  angular.module('mgcrea.ngStrap.alert').run(['$templateCache', function (t) {
	    t.put('alert/alert.tpl.html', '<div class="alert" ng-class="[type ? \'alert-\' + type : null]"><button type="button" class="close" ng-if="dismissable" ng-click="$hide()">&times;</button> <span ng-if="title"><strong ng-bind="title"></strong>&nbsp;<span ng-bind-html="content"></span></span> <span ng-if="!title" ng-bind-html="content"></span></div>');
	  }]), angular.module('mgcrea.ngStrap.aside').run(['$templateCache', function (t) {
	    t.put('aside/aside.tpl.html', '<div class="aside" tabindex="-1" role="dialog"><div class="aside-dialog"><div class="aside-content"><div class="aside-header" ng-show="title"><button type="button" class="close" ng-click="$hide()">&times;</button><h4 class="aside-title" ng-bind="title"></h4></div><div class="aside-body" ng-bind="content"></div><div class="aside-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>');
	  }]), angular.module('mgcrea.ngStrap.datepicker').run(['$templateCache', function (t) {
	    t.put('datepicker/datepicker.tpl.html', '<div class="dropdown-menu datepicker" ng-class="\'datepicker-mode-\' + $mode" style="max-width: 320px"><table style="table-layout: fixed; height: 100%; width: 100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$selectPane(-1)"><i class="{{$iconLeft}}"></i></button></th><th colspan="{{ rows[0].length - 2 }}"><button tabindex="-1" type="button" class="btn btn-default btn-block text-strong" ng-click="$toggleMode()"><strong style="text-transform: capitalize" ng-bind="title"></strong></button></th><th><button tabindex="-1" type="button" class="btn btn-default pull-right" ng-click="$selectPane(+1)"><i class="{{$iconRight}}"></i></button></th></tr><tr ng-if="showLabels" ng-bind-html="labels"></tr></thead><tbody><tr ng-repeat="(i, row) in rows" height="{{ 100 / rows.length }}%"><td class="text-center" ng-repeat="(j, el) in row"><button tabindex="-1" type="button" class="btn btn-default" style="width: 100%" ng-class="{\'btn-primary\': el.selected, \'btn-info btn-today\': el.isToday && !el.selected}" ng-click="$select(el.date)" ng-disabled="el.disabled"><span ng-class="{\'text-muted\': el.muted}" ng-bind="el.label"></span></button></td></tr></tbody><tfoot><tr><td colspan="{{ rows[0].length }}"><div class="btn-group btn-group-justified" role="group"><div class="btn-group" role="group" ng-if="$hasToday"><button type="button" class="btn btn-default today" ng-click="$setToday()" ng-disabled="isTodayDisabled"><strong style="text-transform: capitalize">Today</strong></button></div><div class="btn-group" role="group" ng-if="$hasClear"><button type="button" class="btn btn-default clear" ng-click="$clear()"><strong style="text-transform: capitalize">Clear</strong></button></div></div></td></tr></tfoot></table></div>');
	  }]), angular.module('mgcrea.ngStrap.dropdown').run(['$templateCache', function (t) {
	    t.put('dropdown/dropdown.tpl.html', '<ul tabindex="-1" class="dropdown-menu" role="menu" ng-show="content && content.length"><li role="presentation" ng-class="{divider: item.divider, active: item.active}" ng-repeat="item in content"><a role="menuitem" tabindex="-1" ng-href="{{item.href}}" ng-if="!item.divider && item.href" target="{{item.target || \'\'}}" ng-bind="item.text"></a> <a role="menuitem" tabindex="-1" href="javascript:void(0)" ng-if="!item.divider && item.click" ng-click="$eval(item.click);$hide()" ng-bind="item.text"></a></li></ul>');
	  }]), angular.module('mgcrea.ngStrap.modal').run(['$templateCache', function (t) {
	    t.put('modal/modal.tpl.html', '<div class="modal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header" ng-show="title"><button type="button" class="close" aria-label="Close" ng-click="$hide()"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" ng-bind="title"></h4></div><div class="modal-body" ng-bind="content"></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>');
	  }]), angular.module('mgcrea.ngStrap.popover').run(['$templateCache', function (t) {
	    t.put('popover/popover.tpl.html', '<div class="popover" tabindex="-1"><div class="arrow"></div><h3 class="popover-title" ng-bind="title" ng-show="title"></h3><div class="popover-content" ng-bind="content"></div></div>');
	  }]), angular.module('mgcrea.ngStrap.select').run(['$templateCache', function (t) {
	    t.put('select/select.tpl.html', '<ul tabindex="-1" class="select dropdown-menu" ng-show="$isVisible()" role="select"><li ng-if="$showAllNoneButtons"><div class="btn-group" style="margin-bottom: 5px; margin-left: 5px"><button type="button" class="btn btn-default btn-xs" ng-click="$selectAll()">{{$allText}}</button> <button type="button" class="btn btn-default btn-xs" ng-click="$selectNone()">{{$noneText}}</button></div></li><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $isActive($index)}"><a style="cursor: default" role="menuitem" tabindex="-1" ng-click="$select($index, $event)"><i class="{{$iconCheckmark}} pull-right" ng-if="$isMultiple && $isActive($index)"></i> <span ng-bind="match.label"></span></a></li></ul>');
	  }]), angular.module('mgcrea.ngStrap.timepicker').run(['$templateCache', function (t) {
	    t.put('timepicker/timepicker.tpl.html', '<div class="dropdown-menu timepicker" style="min-width: 0px;width: auto"><table height="100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 0)"><i class="{{ $iconUp }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 1)"><i class="{{ $iconUp }}"></i></button></th><th ng-if="showSeconds">&nbsp;</th><th ng-if="showSeconds"><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 2)"><i class="{{ $iconUp }}"></i></button></th></tr></thead><tbody><tr ng-repeat="(i, row) in rows"><td class="text-center"><button tabindex="-1" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[0].selected}" ng-click="$select(row[0].date, 0)" ng-disabled="row[0].disabled"><span ng-class="{\'text-muted\': row[0].muted}" ng-bind="row[0].label"></span></button></td><td><span ng-bind="i == midIndex ? timeSeparator : \' \'"></span></td><td class="text-center"><button tabindex="-1" ng-if="row[1].date" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[1].selected}" ng-click="$select(row[1].date, 1)" ng-disabled="row[1].disabled"><span ng-class="{\'text-muted\': row[1].muted}" ng-bind="row[1].label"></span></button></td><td ng-if="showSeconds"><span ng-bind="i == midIndex ? timeSeparator : \' \'"></span></td><td ng-if="showSeconds" class="text-center"><button tabindex="-1" ng-if="row[2].date" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[2].selected}" ng-click="$select(row[2].date, 2)" ng-disabled="row[2].disabled"><span ng-class="{\'text-muted\': row[2].muted}" ng-bind="row[2].label"></span></button></td><td ng-if="showAM">&nbsp;</td><td ng-if="showAM"><button tabindex="-1" ng-show="i == midIndex - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !!isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">AM</button> <button tabindex="-1" ng-show="i == midIndex + 1 - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">PM</button></td></tr></tbody><tfoot><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 0)"><i class="{{ $iconDown }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 1)"><i class="{{ $iconDown }}"></i></button></th><th ng-if="showSeconds">&nbsp;</th><th ng-if="showSeconds"><button ng-if="showSeconds" tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 2)"><i class="{{ $iconDown }}"></i></button></th></tr></tfoot></table></div>');
	  }]), angular.module('mgcrea.ngStrap.tooltip').run(['$templateCache', function (t) {
	    t.put('tooltip/tooltip.tpl.html', '<div class="tooltip in" ng-show="title"><div class="tooltip-arrow"></div><div class="tooltip-inner" ng-bind="title"></div></div>');
	  }]), angular.module('mgcrea.ngStrap.tab').run(['$templateCache', function (t) {
	    t.put('tab/tab.tpl.html', '<ul class="nav" ng-class="$navClass" role="tablist"><li role="presentation" ng-repeat="$pane in $panes track by $index" ng-class="[ $isActive($pane, $index) ? $activeClass : \'\', $pane.disabled ? \'disabled\' : \'\' ]"><a role="tab" data-toggle="tab" ng-click="!$pane.disabled && $setActive($pane.name || $index)" data-index="{{ $index }}" ng-bind-html="$pane.title" aria-controls="$pane.title" href=""></a></li></ul><div ng-transclude class="tab-content"></div>');
	  }]), angular.module('mgcrea.ngStrap.typeahead').run(['$templateCache', function (t) {
	    t.put('typeahead/typeahead.tpl.html', '<ul tabindex="-1" class="typeahead dropdown-menu" ng-show="$isVisible()" role="select"><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $index == $activeIndex}"><a role="menuitem" tabindex="-1" ng-click="$select($index, $event)" ng-bind="match.label"></a></li></ul>');
	  }]);
	}(window, document);

/***/ },

/***/ 70:
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * adapt-strap
	 * @version v2.6.1 - 2016-08-09
	 * @link https://github.com/Adaptv/adapt-strap
	 * @author Kashyap Patel (kashyap@adap.tv)
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */
	!function (e, a, t) {
	  "use strict";
	  angular.module("adaptv.adaptStrap", ["adaptv.adaptStrap.utils", "adaptv.adaptStrap.treebrowser", "adaptv.adaptStrap.tablelite", "adaptv.adaptStrap.tableajax", "adaptv.adaptStrap.loadingindicator", "adaptv.adaptStrap.draggable", "adaptv.adaptStrap.infinitedropdown", "adaptv.adaptStrap.alerts"]).provider("$adConfig", function () {
	    var e = this.iconClasses = { expand: "glyphicon glyphicon-plus-sign", collapse: "glyphicon glyphicon-minus-sign", loadingSpinner: "glyphicon glyphicon-refresh ad-spin", firstPage: "glyphicon glyphicon-fast-backward", previousPage: "glyphicon glyphicon-backward", nextPage: "glyphicon glyphicon-forward", lastPage: "glyphicon glyphicon-fast-forward", sortAscending: "glyphicon glyphicon-chevron-up", sortDescending: "glyphicon glyphicon-chevron-down", sortable: "glyphicon glyphicon-resize-vertical", draggable: "glyphicon glyphicon-align-justify", selectedItem: "glyphicon glyphicon-ok", alertInfoSign: "glyphicon glyphicon-info-sign", alertSuccessSign: "glyphicon glyphicon-ok", alertWarningSign: "glyphicon glyphicon-warning-sign", alertDangerSign: "glyphicon glyphicon-exclamation-sign" },
	        a = this.paging = { request: { start: "skip", pageSize: "limit", page: "page", sortField: "sort", sortDirection: "sort_dir", sortAscValue: "asc", sortDescValue: "desc" }, response: { itemsLocation: "data", totalItems: "pagination.totalCount" }, pageSize: 10, pageSizes: [10, 25, 50] },
	        t = this.componentClasses = { tableLiteClass: "table", tableAjaxClass: "table" };this.$get = function () {
	      return { iconClasses: e, paging: a, componentClasses: t };
	    };
	  }), angular.module("adaptv.adaptStrap.alerts", []).directive("adAlerts", [function () {
	    function e(e, a, t, n) {
	      e.iconMap = { info: t.iconClasses.alertInfoSign, success: t.iconClasses.alertSuccessSign, warning: t.iconClasses.alertWarningSign, danger: t.iconClasses.alertDangerSign };var o,
	          i = e.timeout && !Number(i).isNAN ? e.timeout : 0;e.close = function () {
	        n.clear(), o && clearTimeout(o);
	      }, e.customClasses = e.customClasses || "", e.settings = n.settings, 0 !== i && e.$watch("settings.type", function (a) {
	        "" !== a && (o && clearTimeout(o), o = setTimeout(e.close, i));
	      });
	    }return { restrict: "AE", scope: { timeout: "=", customClasses: "@" }, templateUrl: "alerts/alerts.tpl.html", controller: ["$scope", "$attrs", "$adConfig", "adAlerts", e] };
	  }]), angular.module("adaptv.adaptStrap.alerts").factory("adAlerts", [function () {
	    function e(e, a, t) {
	      l.type = e, l.caption = a, l.message = t;
	    }function a(a, t) {
	      e("warning", a, t);
	    }function t(a, t) {
	      e("info", a, t);
	    }function n(a, t) {
	      e("success", a, t);
	    }function o(a, t) {
	      e("danger", a, t);
	    }function i() {
	      l.type = "", l.caption = "", l.message = "";
	    }var l = { type: "", caption: "", message: "" };return { settings: l, warning: a, info: t, success: n, error: o, clear: i };
	  }]), angular.module("adaptv.adaptStrap.draggable", []).directive("adDrag", ["$rootScope", "$parse", "$timeout", function (t, n, o) {
	    function i(i, l, r) {
	      function s() {
	        var e = i.useClonedElement ? M : l;e.css({ left: "", top: "", position: "", "z-index": "" });var a = e.data("ad-draggable-temp-width");a ? e.css({ width: a }) : e.css({ width: "" }), e.children().each(function () {
	          var e = $(this).data("ad-draggable-temp-width");e ? $(this).css({ width: e }) : $(this).css({ width: "" });
	        });
	      }function g(e, a) {
	        var t = i.useClonedElement ? M : l;t.css({ left: e, top: a, position: "fixed", "z-index": 99999 });
	      }function c(e, a) {
	        a.el === l && a.callback && a.callback(e);
	      }function d(e, a) {
	        a.el === l && a.callback && a.callback(e);
	      }function p(e) {
	        if (i.onDragStartCallback) {
	          var a = i.useClonedElement ? M : l;i.$apply(function () {
	            i.onDragStartCallback(i, { $data: i.data, $dragElement: { el: a }, $event: e });
	          });
	        }
	      }function u(e) {
	        if (i.onDragEndCallback) {
	          var a = i.useClonedElement ? M : l;o(function () {
	            i.$apply(function () {
	              i.onDragEndCallback(i, { $data: i.data, $dragElement: { el: a }, $event: e });
	            });
	          }, 100);
	        }
	      }function f(e) {
	        var a, n;if (R) {
	          e.preventDefault(), a = e.pageX || e.originalEvent.touches[0].pageX, n = e.pageY || e.originalEvent.touches[0].pageY, L = a - I + x.left - K.scrollLeft(), k = n - E + x.top - K.scrollTop(), a -= K.scrollLeft(), n -= K.scrollTop(), g(L, k);var o = i.useClonedElement ? M : l;t.$broadcast("draggable:move", { x: I, y: E, tx: L, ty: k, cx: a, cy: n, el: o, data: i.data });
	        }
	      }function m(e) {
	        if (R) {
	          e.preventDefault();var a = i.useClonedElement ? M : l;t.$broadcast("draggable:end", { x: I, y: E, tx: L, ty: k, el: a, data: i.data, callback: u }), i.useClonedElement ? (l.removeClass("ad-dragging"), a.remove()) : a.removeClass("ad-dragging"), s(), j.off(N, f), j.off(T, m);
	        }
	      }function C(e) {
	        R = i.$eval(e);
	      }function v(e) {
	        i.data = e;
	      }function h(e, a) {
	        var t,
	            n = $(a).attr("style");return n && n.split(";").forEach(function (a) {
	          var n = a.split(":");$.trim(n[0]) === e && (t = n[1]);
	        }), t;
	      }function b() {
	        var e = i.useClonedElement ? M : l;h("width", e) && e.data("ad-draggable-temp-width", h("width", e)), e.width(e.width()), e.children().each(function () {
	          h("width", this) && $(this).data("ad-draggable-temp-width", h("width", this)), $(this).width($(this).width());
	        });
	      }function S(e) {
	        if (R) {
	          e.preventDefault(), i.useClonedElement && (M = l.clone().appendTo(l.parent()), M.css({ position: "fixed" }));var a = i.useClonedElement ? M : l;x = l.offset(), x = i.hasHandle ? l.find(".ad-drag-handle").offset() : l.offset(), l.addClass("ad-dragging"), I = e.pageX || e.originalEvent.touches[0].pageX, E = e.pageY || e.originalEvent.touches[0].pageY, L = x.left - K.scrollLeft(), k = x.top - K.scrollTop(), b(), g(L, k), j.on(N, f), j.on(T, m), t.$broadcast("draggable:start", { x: I, y: E, tx: L, ty: k, el: a, data: i.data, callback: p });
	        }
	      }function D() {
	        clearTimeout(q), j.off(N, D), j.off(T, D);
	      }function P(e) {
	        return R && !($(e.target).is("[ad-prevent-drag]") || $(e.target).parents("[ad-prevent-drag]").length > 0) ? z ? (D(), q = setTimeout(function () {
	          D(), S(e);
	        }, 100), j.on(N, D), j.on(T, D), void 0) : (S(e), !1) : void 0;
	      }function y(e) {
	        e && (i.$on("$destroy", function () {
	          y(!1);
	        }), r.$observe("adDrag", C), i.$watch(r.adDragData, v), i.$on("draggable:start", c), i.$on("draggable:end", d), i.hasHandle ? l.on(A, ".ad-drag-handle", P) : (l.on(A, P), l.addClass("ad-draggable")));
	      }function w() {
	        l.attr("draggable", "false"), y(!0);
	      }i.draggable = r.adDrag, i.hasHandle = "false" === r.adDragHandle || "undefined" == typeof r.adDragHandle ? !1 : !0, i.onDragStartCallback = n(r.adDragBegin) || null, i.onDragEndCallback = n(r.adDragEnd) || null, i.useClonedElement = "true" === r.adDragCloneElement, i.data = null;var x,
	          I,
	          E,
	          L,
	          k,
	          z = "ontouchstart" in a.documentElement,
	          A = "touchstart mousedown",
	          N = "touchmove mousemove",
	          T = "touchend mouseup",
	          j = $(a),
	          K = $(e),
	          R = !1,
	          q = null,
	          M = null;w();
	    }return { restrict: "A", link: i };
	  }]).directive("adDrop", ["$rootScope", "$parse", function (a, t) {
	    function n(n, o, i) {
	      function l(e, a) {
	        var t = o.offset(),
	            n = Math.floor(o.outerHeight() / 6);return e += C.scrollLeft(), a += C.scrollTop(), a >= t.top + n && a <= t.top + o.outerHeight() - n && e >= t.left && e <= t.left + o.outerWidth() && e >= t.left && e <= t.left + o.outerWidth() ? o : null;
	      }function r(e) {
	        u = n.$eval(e);
	      }function s(e, a) {
	        f !== a.el && (f = null);
	      }function g(e, t) {
	        if (u && o !== t.el) {
	          var i = l(t.cx, t.cy);null !== i ? (f = i, m = f, t.el.lastDropElement = f, n.$apply(function () {
	            n.onDropOverCallback(n, { $data: t.data, $dragElement: { el: t.el }, $dropElement: { el: f }, $event: e });
	          }), o.addClass("ad-drop-over"), a.$broadcast("draggable:change", { el: f })) : t.el.lastDropElement === o && (n.$apply(function () {
	            n.onDropLeaveCallback(n, { $data: t.data, $dragElement: { el: t.el }, $dropElement: { el: t.el.lastDropElement }, $event: e });
	          }), t.el.lastDropElement.removeClass("ad-drop-over"), delete t.el.lastDropElement);
	        }
	      }function c(e, a) {
	        u && (f && n.$apply(function () {
	          n.onDropCallback(n, { $data: a.data, $dragElement: { el: a.el }, $dropElement: { el: f }, $lastDropElement: { el: m }, $event: e });
	        }), f = null, m = null);
	      }function d(e) {
	        e && (i.$observe("adDrop", r), n.$on("$destroy", function () {
	          d(!1);
	        }), n.$on("draggable:move", g), n.$on("draggable:end", c), n.$on("draggable:change", s));
	      }function p() {
	        d(!0);
	      }n.droppable = i.adDrop, n.onDropCallback = t(i.adDropEnd) || null, n.onDropOverCallback = t(i.adDropOver) || null, n.onDropLeaveCallback = t(i.adDropLeave) || null;var u = !1,
	          f = null,
	          m = null,
	          C = $(e);p();
	    }return { restrict: "A", link: n };
	  }]), angular.module("adaptv.adaptStrap.infinitedropdown", ["adaptv.adaptStrap.utils", "adaptv.adaptStrap.loadingindicator"]).directive("adInfiniteDropdown", ["$parse", "$compile", "$timeout", "$templateCache", "$adConfig", "adLoadPage", "adDebounce", "adStrapUtils", "adLoadLocalPage", function (e, n, o, i, l, r, s, g, c) {
	    function d(n, i, l) {
	      n.attrs = l, n.adStrapUtils = g, n.onDataLoadedCallback = e(l.onDataLoaded) || null, n.items = { list: [], paging: { currentPage: 1, totalPages: t, pageSize: Number(l.pageSize) || 10 } }, n.localConfig = { loadingData: !1, singleSelectionMode: e(l.singleSelectionMode)() ? !0 : !1, dimensions: { "max-height": l.maxHeight || "200px", "max-width": l.maxWidth || "auto" } }, n.selectedItems = n.$eval(l.selectedItems) || [], n.ajaxConfig = n.$eval(l.ajaxConfig) || {};var d,
	          p = [];n.addRemoveItem = function (e, a, t) {
	        e.stopPropagation(), n.localConfig.singleSelectionMode ? n.selectedItems[0] = a : g.addRemoveItemFromList(a, t);var o = n.$eval(l.onItemClick);o && o(a), n.localConfig.singleSelectionMode && (n.dropdownStatus.open = !1, i.find(".dropdown").removeClass("open"));
	      }, n.loadPage = s(function (e) {
	        d = Math.random(), n.localConfig.loadingData = !0;var a = n.$eval(l.pageLoader) || r,
	            t = { pageNumber: e, pageSize: n.items.paging.pageSize, sortKey: n.localConfig.predicate, sortDirection: n.localConfig.reverse, ajaxConfig: n.ajaxConfig, token: d },
	            o = function o(a) {
	          a.token === d && (1 === e ? n.items.list = a.items : n.items.list = n.items.list.concat(a.items), n.items.paging.totalPages = a.totalPages, n.items.paging.currentPage = a.currentPage, n.localConfig.loadingData = !1, l.onDataLoaded && n.onDataLoadedCallback(n, { $success: !0, $response: a }));
	        },
	            i = function i() {
	          n.localConfig.loadingData = !1, l.onDataLoaded && n.onDataLoadedCallback(n, { $success: !1, $response: null });
	        };l.localDataSource ? (t.localData = n.$eval(l.localDataSource), o(c(t))) : a(t).then(o, i);
	      }, 10), n.loadNextPage = function () {
	        n.localConfig.loadingData || n.items.paging.currentPage + 1 <= n.items.paging.totalPages && n.loadPage(n.items.paging.currentPage + 1);
	      }, n.dropdownHeaderAreaClicked = function (e) {
	        e.stopPropagation();
	      }, n.loadPage(1), l.ajaxConfig && n.$watch(l.ajaxConfig, function (e) {
	        e && n.loadPage(1);
	      }, !0), l.localDataSource && (p.push(n.$watch(l.localDataSource, function (e) {
	        e && n.loadPage(1);
	      })), p.push(n.$watch(l.localDataSource + ".length", function (e) {
	        e && n.loadPage(1);
	      }))), n.dropdownStatus = n.$eval(l.dropdownStatus) || { open: !1 }, p.push(n.$watch("dropdownStatus.open", function (e) {
	        e === !0 ? o(function () {
	          i.find(".dropdown").addClass("open");
	        }, 0) : o(function () {
	          i.find(".dropdown").removeClass("open");
	        }, 0);
	      })), i.find(".dropdown-toggle").click(function () {
	        n.$apply(function () {
	          n.dropdownStatus.open ? n.dropdownStatus.open = !1 : (n.dropdownStatus.open = !0, i.find(".dropdown-header").outerWidth(i.find(".dropdown-menu").outerWidth()));
	        });
	      }), $(a).click(function () {
	        n.$apply(function () {
	          n.dropdownStatus.open && (n.dropdownStatus.open = !1);
	        });
	      }), n.$on("$destroy", function () {
	        p.forEach(function (e) {
	          e();
	        });
	      });var u = angular.element(i).find("ul")[0],
	          f = s(function () {
	        u.scrollTop + u.offsetHeight >= u.scrollHeight - 300 && n.loadNextPage();
	      }, 50);angular.element(u).bind("mousewheel DOMMouseScroll scroll", function (e) {
	        console.log("scrolling"), e.originalEvent && e.originalEvent.deltaY && (u.scrollTop += e.originalEvent.deltaY, e.preventDefault(), e.stopPropagation()), f();
	      });
	    }return { restrict: "E", scope: !0, link: d, templateUrl: "infinitedropdown/infinitedropdown.tpl.html" };
	  }]), angular.module("adaptv.adaptStrap.loadingindicator", []).directive("adLoadingIcon", ["$adConfig", "$compile", function (e, a) {
	    return { restrict: "E", compile: function compile() {
	        return { pre: function pre(t, n, o) {
	            var i = o.loadingIconClass || e.iconClasses.loadingSpinner,
	                l = o.loadingIconSize ? "ng-style=\"{'font-size': '" + o.loadingIconSize + "'}\"" : "",
	                r = '<i class="' + i + '" ' + l + "></i>";n.empty(), n.append(a(r)(t));
	          } };
	      } };
	  }]).directive("adLoadingOverlay", ["$adConfig", function (e) {
	    return { restrict: "E", templateUrl: "loadingindicator/loadingindicator.tpl.html", scope: { loading: "=", zIndex: "@", position: "@", containerClasses: "@", loadingIconClass: "@", loadingIconSize: "@" }, compile: function compile() {
	        return { pre: function pre(a) {
	            a.loadingIconClass = a.loadingIconClass || e.iconClasses.loading, a.loadingIconSize = a.loadingIconSize || "3em";
	          } };
	      } };
	  }]), angular.module("adaptv.adaptStrap.tableajax", ["adaptv.adaptStrap.utils", "adaptv.adaptStrap.loadingindicator"]).directive("adTableAjax", ["$parse", "$filter", "$adConfig", "adLoadPage", "adDebounce", "adStrapUtils", function (e, a, n, o, i, l) {
	    function r(r, s) {
	      r.attrs = s, r.attrs.state = r.attrs.state || {}, r.iconClasses = n.iconClasses, r.adStrapUtils = l, r.tableClasses = n.componentClasses.tableAjaxClass, r.onDataLoadedCallback = e(s.onDataLoaded) || null, r.items = { list: t, allItems: t, paging: { currentPage: 1, totalPages: t, totalItems: t, pageSize: Number(s.pageSize) || n.paging.pageSize, pageSizes: e(s.pageSizes)() || n.paging.pageSizes } }, r.localConfig = { pagingArray: [], loadingData: !1, showNoDataFoundMessage: !1, tableMaxHeight: s.tableMaxHeight, expandedItems: [], sortState: {}, stateChange: r.$eval(s.onStateChange) }, r.selectedItems = r.$eval(s.selectedItems), r.onRowClick = function (e, a) {
	        var t = r.$parent.$eval(s.onRowClick);t && t(e, a);
	      }, r.ajaxConfig = r.$eval(s.ajaxConfig), r.columnDefinition = r.$eval(s.columnDefinition), r.visibleColumnDefinition = a("filter")(r.columnDefinition, r.columnVisible);var g,
	          c = [];!r.items.paging.pageSize && r.items.paging.pageSizes[0] && (r.items.paging.pageSize = r.items.paging.pageSizes[0]), r.loadPage = i(function (e) {
	        r.collapseAll(), g = Math.random(), r.localConfig.loadingData = !0, r.localConfig.showNoDataFoundMessage = !1;var a = r.$eval(s.pageLoader) || o,
	            t = { pageNumber: e, pageSize: r.items.paging.pageSize, sortKey: r.localConfig.sortState.sortKey, sortDirection: "DEC" === r.localConfig.sortState.sortDirection, ajaxConfig: r.ajaxConfig, token: g },
	            n = function n(e) {
	          e.token === g && (r.items.list = e.items, r.items.allItems = e.items, r.items.paging.totalPages = e.totalPages, r.items.paging.totalItems = e.totalItems, r.items.paging.currentPage = e.currentPage, r.localConfig.pagingArray = e.pagingArray, r.localConfig.loadingData = !1), e.totalPages || (r.localConfig.showNoDataFoundMessage = !0), r.onDataLoadedCallback && r.onDataLoadedCallback(r, { $success: !0, $response: e });
	        },
	            i = function i() {
	          r.localConfig.loadingData = !1, r.localConfig.showNoDataFoundMessage = !0, r.onDataLoadedCallback && r.onDataLoadedCallback(r, { $success: !1, $response: null });
	        };a(t).then(n, i);
	      }), r.loadNextPage = function () {
	        r.localConfig.loadingData || r.items.paging.currentPage + 1 <= r.items.paging.totalPages && r.loadPage(r.items.paging.currentPage + 1);
	      }, r.loadPreviousPage = function () {
	        r.localConfig.loadingData || r.items.paging.currentPage - 1 > 0 && r.loadPage(r.items.paging.currentPage - 1);
	      }, r.loadLastPage = function () {
	        r.localConfig.loadingData || r.items.paging.currentPage !== r.items.paging.totalPages && r.loadPage(r.items.paging.totalPages);
	      }, r.pageSizeChanged = function (e) {
	        Number(e) !== r.items.paging.pageSize && (r.items.paging.pageSize = Number(e), r.loadPage(1));
	      }, r.columnVisible = function (e) {
	        return e.visible !== !1;
	      }, r.sortByColumn = function (e, a) {
	        var t = r.localConfig.sortState.sortDirection || "ASC";e.sortKey && (e.sortKey !== r.localConfig.sortState.sortKey ? r.localConfig.sortState = { sortKey: e.sortKey, sortDirection: e.sortDirection ? e.sortDirection : t } : r.localConfig.sortState.sortDirection === t ? r.localConfig.sortState.sortDirection = "ASC" === t ? "DEC" : "ASC" : r.localConfig.sortState = {}, r.loadPage(r.items.paging.currentPage), !a && r.localConfig.stateChange && r.localConfig.stateChange(r.localConfig.sortState));
	      }, r.collapseAll = function () {
	        r.localConfig.expandedItems.length = 0;
	      }, r.expandCollapseRow = function (e) {
	        l.addRemoveItemFromList(e, r.localConfig.expandedItems);
	      }, r.getRowClass = function (e, a) {
	        var t = "";return t += s.selectedItems && l.itemExistsInList(e, r.selectedItems) ? "ad-selected" : "", t += l.itemExistsInList(a, r.localConfig.expandedItems) ? " row-expanded" : "", s.rowClassProvider && (t += " " + r.$eval(s.rowClassProvider)(e, a)), t;
	      }, r.toggle = function (e, a, t) {
	        if (e.stopPropagation(), l.addRemoveItemFromList(a, r.localConfig.expandedItems), l.itemExistsInList(a, r.localConfig.expandedItems)) {
	          var n = r.$eval(s.rowExpandCallback);n && n(t);
	        }
	      };var d = r.$eval(s.state) || {},
	          p = { sortKey: d.sortKey, sortDirection: d.sortDirection };r.sortByColumn(p, !0), r.loadPage(1), r.$on("adTableAjaxAction", function (e, a) {
	        var t = { expandCollapseRow: r.expandCollapseRow };a.tableName === r.attrs.tableName && a.action(t);
	      }), c.push(r.$watch(s.ajaxConfig, function () {
	        r.loadPage(1);
	      }, !0)), c.push(r.$watchCollection(s.columnDefinition, function () {
	        r.columnDefinition = r.$eval(s.columnDefinition), r.visibleColumnDefinition = a("filter")(r.columnDefinition, r.columnVisible);
	      })), r.$on("$destroy", function () {
	        c.forEach(function (e) {
	          e();
	        });
	      });
	    }return { restrict: "E", scope: !0, templateUrl: "tableajax/tableajax.tpl.html", controller: ["$scope", "$attrs", r] };
	  }]), angular.module("adaptv.adaptStrap.tablelite", ["adaptv.adaptStrap.utils"]).directive("adTableLite", ["$parse", "$http", "$compile", "$filter", "$templateCache", "$adConfig", "adStrapUtils", "adDebounce", "adLoadLocalPage", function (e, a, n, o, i, l, r, s, g) {
	    function c(a, n) {
	      function i(e, a, t) {
	        a.next()[0] === e[0] ? a.before(e) : a.prev()[0] === e[0] ? a.after(e) : a.next()[0] === t[0] ? a.before(e) : a.prev()[0] === t[0] && a.after(e);
	      }a.attrs = n, a.attrs.state = a.attrs.state || {}, a.iconClasses = l.iconClasses, a.adStrapUtils = r, a.tableClasses = l.componentClasses.tableLiteClass, a.columnDefinition = a.$eval(n.columnDefinition), a.visibleColumnDefinition = o("filter")(a.columnDefinition, a.columnVisible), a.items = { list: t, allItems: t, paging: { currentPage: 1, totalPages: t, pageSize: Number(n.pageSize) || l.paging.pageSize, pageSizes: e(n.pageSizes)() || l.paging.pageSizes } }, a.filters = {}, a.localConfig = { localData: r.parse(a.$eval(n.localDataSource)), pagingArray: [], dragChange: a.$eval(n.onDragChange), expandedItems: [], sortState: {}, stateChange: a.$eval(n.onStateChange), draggable: a.$eval(n.draggable) || !1 }, a.selectedItems = a.$eval(n.selectedItems), a.searchText = a.$eval(n.searchText);var c,
	          d = null,
	          p = !1,
	          u = null,
	          f = !1,
	          m = [];!a.items.paging.pageSize && a.items.paging.pageSizes[0] && (a.items.paging.pageSize = a.items.paging.pageSizes[0]), a.loadPage = s(function (e) {
	        a.collapseAll();var t,
	            i,
	            l = r.parse(a.$eval(n.localDataSource)),
	            s = {};a.localConfig.localData = a.searchText ? o("filter")(l, a.searchText) : l, n.enableColumnSearch && r.hasAtLeastOnePropertyWithValue(a.filters) && (angular.forEach(a.filters, function (e, a) {
	          a.indexOf(".") > -1 ? angular.extend(s, r.createdChainObjectAndInitValue(a, e)) : s[a] = e;
	        }), a.localConfig.localData = o("filter")(a.localConfig.localData, s)), t = a.localConfig.localData, i = { pageNumber: e, pageSize: n.disablePaging ? t.length : a.items.paging.pageSize, sortKey: a.localConfig.sortState.sortKey, sortDirection: "DEC" === a.localConfig.sortState.sortDirection, localData: t, draggable: a.localConfig.draggable };var c = g(i);return a.items.list = c.items, a.items.allItems = c.allItems, a.items.paging.currentPage = c.currentPage, a.items.paging.totalPages = c.totalPages, a.localConfig.pagingArray = c.pagingArray, 0 === c.items.length ? void a.loadPreviousPage() : void a.$emit("adTableLite:pageChanged", a.items.paging);
	      }, 100), a.loadNextPage = function () {
	        a.items.paging.currentPage + 1 <= a.items.paging.totalPages && a.loadPage(a.items.paging.currentPage + 1);
	      }, a.loadPreviousPage = function () {
	        a.items.paging.currentPage - 1 > 0 && a.loadPage(a.items.paging.currentPage - 1);
	      }, a.loadLastPage = function () {
	        a.localConfig.disablePaging || a.loadPage(a.items.paging.totalPages);
	      }, a.pageSizeChanged = function (e) {
	        a.items.paging.pageSize = e, a.loadPage(1);
	      }, a.columnVisible = function (e) {
	        return e.visible !== !1;
	      }, a.sortByColumn = function (e, t) {
	        var n = a.localConfig.sortState.sortDirection || "ASC";e.sortKey && (e.sortKey !== a.localConfig.sortState.sortKey ? a.localConfig.sortState = { sortKey: e.sortKey, sortDirection: e.sortDirection ? e.sortDirection : n } : a.localConfig.sortState.sortDirection === n ? a.localConfig.sortState.sortDirection = "ASC" === n ? "DEC" : "ASC" : a.localConfig.sortState = {}, a.loadPage(a.items.paging.currentPage), !t && a.localConfig.stateChange && a.localConfig.stateChange(a.localConfig.sortState));
	      }, a.unSortTable = function () {
	        a.localConfig.sortState = {};
	      }, a.collapseAll = function () {
	        a.localConfig.expandedItems.length = 0;
	      }, a.expandCollapseRow = function (e) {
	        r.addRemoveItemFromList(e, a.localConfig.expandedItems);
	      }, a.onDragStart = function (e, t) {
	        a.localConfig.expandedItems.length = 0, t = t.el;var n = t.parent();d = $('<tr id="row-phldr"><td colspan=' + t.find("td").length + ">&nbsp;</td></tr>"), c = t.index() + (a.items.paging.currentPage - 1) * a.items.paging.pageSize, p || (t[0] !== n.children().last()[0] ? (t.next().before(d), p = !0) : (n.append(d), p = !0));
	      }, a.onDragEnd = function () {
	        $("#row-phldr").remove(), p = !1;
	      }, a.onDragOver = function (e, a, t) {
	        d && i(d, t.el, a.el);
	      }, a.onDropEnd = function (e, t) {
	        var n;t = t.el, d && (d.next()[0] ? d.next().before(t) : d.prev()[0] && d.prev().after(t), $("#row-phldr").remove(), p = !1, f = !0, n = t.index() + (a.items.paging.currentPage - 1) * a.items.paging.pageSize, r.moveItemInList(c, n, a.localConfig.localData), a.localConfig.draggable && a.localConfig.dragChange && a.localConfig.dragChange(c, n, e), a.unSortTable(), a.loadPage(a.items.paging.currentPage));
	      }, a.onPageButtonOver = function (e, a, t) {
	        "disabled" !== t.el.attr("disabled") && (u = t.el, u.parent().addClass("active"));
	      }, a.onPageButtonLeave = function (e, a, t) {
	        u && u === t.el && (u.parent().removeClass("active"), u = null);
	      }, a.onPageButtonDrop = function (e, t) {
	        var n;u && (f = !0, "btnPrev" === u.attr("id") && (n = a.items.paging.pageSize * (a.items.paging.currentPage - 1) - 1), "btnNext" === u.attr("id") && (n = a.items.paging.pageSize * a.items.paging.currentPage), r.moveItemInList(c, n, a.localConfig.localData), a.loadPage(a.items.paging.currentPage), $("#row-phldr").remove(), p = !1, t.el.remove(), a.localConfig.draggable && a.localConfig.dragChange && a.localConfig.dragChange(c, n, e), u.parent().removeClass("active"), u = null);
	      }, a.getRowClass = function (e, t) {
	        var o = "";return o += n.selectedItems && r.itemExistsInList(e, a.selectedItems) ? "ad-selected" : "", o += r.itemExistsInList(t, a.localConfig.expandedItems) ? " row-expanded" : "", n.rowClassProvider && (o += " " + a.$eval(n.rowClassProvider)(e, t)), o;
	      }, a.toggle = function (e, t, o) {
	        if (e.stopPropagation(), r.addRemoveItemFromList(t, a.localConfig.expandedItems), r.itemExistsInList(t, a.localConfig.expandedItems)) {
	          var i = a.$eval(n.rowExpandCallback);i && i(o);
	        }
	      }, a.onRowClick = function (e, t) {
	        var o = a.$parent.$eval(n.onRowClick);o && o(e, t);
	      };var C = a.$eval(n.state) || {},
	          v = { sortKey: C.sortKey, sortDirection: C.sortDirection };if (a.sortByColumn(v, !0), a.loadPage(1), a.$on("adTableLiteAction", function (e, t) {
	        var n = { expandCollapseRow: a.expandCollapseRow };t.tableName === a.attrs.tableName && t.action(n);
	      }), m.push(a.$watch(n.localDataSource, function () {
	        a.loadPage(a.items.paging.currentPage);
	      })), m.push(a.$watch(n.localDataSource + ".length", function () {
	        a.loadPage(a.items.paging.currentPage);
	      })), m.push(a.$watchCollection(n.columnDefinition, function () {
	        a.columnDefinition = a.$eval(n.columnDefinition), a.visibleColumnDefinition = o("filter")(a.columnDefinition, a.columnVisible);
	      })), m.push(a.$watch(n.searchText, function () {
	        a.searchText = a.$eval(n.searchText), a.loadPage(1);
	      })), n.enableColumnSearch) {
	        var h = s(function () {
	          a.loadPage(1);
	        }, Number(n.columnSearchDebounce) || 400);m.push(a.$watch("filters", function () {
	          h();
	        }, !0));
	      }a.$on("$destroy", function () {
	        m.forEach(function (e) {
	          e();
	        });
	      });
	    }return { restrict: "E", controller: ["$scope", "$attrs", c], templateUrl: "tablelite/tablelite.tpl.html", scope: !0 };
	  }]), angular.module("adaptv.adaptStrap.treebrowser", []).directive("adTreeBrowser", ["$adConfig", function (e) {
	    function a(a, t) {
	      var n = Math.random();a.attrs = t, a.iconClasses = e.iconClasses, a.treeRoot = a.$eval(t.treeRoot) || {}, a.toggle = function (e, n) {
	        var o;e.stopPropagation(), o = a.$eval(t.toggleCallback), o ? o(n) : n._ad_expanded = !n._ad_expanded;
	      }, a.onRowClick = function (e, n, o) {
	        var i = a.$parent.$eval(t.onRowClick);i && i(e, n, o);
	      };var o = a.$eval(t.hasChildren);a.hasChildren = function (e) {
	        var a = e[t.childNode] && e[t.childNode].length > 0;return o && (a = o(e)), a;
	      }, a.localConfig = { rendererTemplateId: "tree-renderer-" + n + ".html" };
	    }return { restrict: "E", scope: !0, controller: ["$scope", "$attrs", a], templateUrl: "treebrowser/treebrowser.tpl.html" };
	  }]).directive("adTreeBrowserNode", ["$compile", "$http", "$templateCache", function (e, a, t) {
	    function n(a) {
	      var t = a.config.url,
	          n = l[t];if (!n) {
	        var o = i.replace(/%=nodeTemplate%/g, a.data);l[t] = e(o);
	      }return l[t];
	    }function o(e, o, i) {
	      function l(a) {
	        n(a)(e, function (e) {
	          o.append(e);
	        });
	      }a({ cache: t, url: e.$eval(i.templateUrl), method: "GET" }).then(l);
	    }var i = t.get("treebrowser/treeBrowserNode.tpl.html"),
	        l = {};return { link: o, scope: !0, restrict: "E" };
	  }]).directive("adTreeBrowserNodeToggle", function () {
	    return { scope: !0, restrict: "E", replace: !0, templateUrl: "treebrowser/treebrowserNodeToggle.tpl.html" };
	  }), angular.module("adaptv.adaptStrap.utils", []).factory("adStrapUtils", ["$filter", function (e) {
	    var a = function a(e, _a) {
	      var t = _a.split(".");if (e) for (; t.length;) {
	        var n = t.shift();e && (e = e[n]);
	      }return e;
	    },
	        t = function t(e, a) {
	      for (var t = e.split("."), n = { obj: {} }, o = n.obj; t.length;) {
	        var i = t.shift();o && (0 === t.length ? o[i] = a : (o[i] = {}, o = o[i]));
	      }return n.obj;
	    },
	        n = function n(a, t, _n) {
	      var o, i, l;return a && "function" == typeof a ? a(_n) : (t && (l = t.indexOf(":"), l > -1 ? (o = t.substring(0, l), i = t.substring(l + 1), a = e(o)(a, i)) : a = e(t)(a)), a);
	    },
	        o = function o(e, a) {
	      var t = !1;return a.forEach(function (a) {
	        angular.equals(e, a) && (t = !0);
	      }), t;
	    },
	        i = function i(e, a) {
	      var t,
	          n = !0;for (t = 0; t < e.length; t++) {
	        if (o(e[t], a) === !1) {
	          n = !1;break;
	        }
	      }return n;
	    },
	        l = function l(e, a) {
	      a.push(e);
	    },
	        r = function r(e, a) {
	      var t;for (t = a.length - 1; t > -1; t--) {
	        angular.equals(e, a[t]) && a.splice(t, 1);
	      }
	    },
	        s = function s(e, a) {
	      var t,
	          n = !1;for (t = a.length - 1; t > -1; t--) {
	        angular.equals(e, a[t]) && (a.splice(t, 1), n = !0);
	      }n === !1 && a.push(e);
	    },
	        g = function g(e, a) {
	      e.forEach(function (e) {
	        o(e, a) || s(e, a);
	      });
	    },
	        c = function c(e, a) {
	      i(e, a) ? a.length = 0 : g(e, a);
	    },
	        d = function d(e, a, t) {
	      a < t.length && t.splice(a, 0, t.splice(e, 1)[0]);
	    },
	        p = function p(e) {
	      var a = [];return angular.isArray(e) ? a = e : angular.forEach(e, function (e) {
	        a.push(e);
	      }), a;
	    },
	        u = function u(e, a) {
	      if (a && "function" == typeof a) return a(e);for (var t = a.split("."); t.length;) {
	        e = e[t.shift()];
	      }return e;
	    },
	        f = function f(e) {
	      var a,
	          t,
	          n = !1;for (a in e) {
	        if (t = e[a], t instanceof Array ? t.length > 0 && (n = !0) : t && (n = !0), n) break;
	      }return n;
	    };return { evalObjectProperty: a, createdChainObjectAndInitValue: t, applyFilter: n, itemExistsInList: o, itemsExistInList: i, addItemToList: l, removeItemFromList: r, addRemoveItemFromList: s, addItemsToList: g, addRemoveItemsFromList: c, moveItemInList: d, parse: p, getObjectProperty: u, hasAtLeastOnePropertyWithValue: f };
	  }]).factory("adDebounce", ["$timeout", "$q", function (e, a) {
	    var t = function t(_t, n, o, i) {
	      var l = null,
	          r = a.defer(),
	          s = n || 300;return function () {
	        var n = i || this,
	            g = arguments,
	            c = o && !l,
	            d = function d() {
	          o || (r.resolve(_t.apply(n, g)), r = a.defer());
	        };return l && e.cancel(l), l = e(d, s), c && (r.resolve(_t.apply(n, g)), r = a.defer()), r.promise;
	      };
	    };return t;
	  }]).directive("adCompileTemplate", ["$compile", function (e) {
	    return function (a, t, n) {
	      a.$watch(function (e) {
	        return e.$eval(n.adCompileTemplate);
	      }, function (n) {
	        t.html(n), e(t.contents())(a);
	      });
	    };
	  }]).factory("adLoadPage", ["$adConfig", "$http", "adStrapUtils", function (e, a, t) {
	    return function (n) {
	      var o = (n.pageNumber - 1) * n.pageSize,
	          i = angular.copy(e.paging),
	          l = angular.copy(n.ajaxConfig);l.paginationConfig && l.paginationConfig.request && angular.extend(i.request, l.paginationConfig.request), l.paginationConfig && l.paginationConfig.response && angular.extend(i.response, l.paginationConfig.response), l.params = l.params ? l.params : {}, i.request.start && (l.params[i.request.start] = o), i.request.pageSize && (l.params[i.request.pageSize] = n.pageSize), i.request.page && (l.params[i.request.page] = n.pageNumber), n.sortKey && i.request.sortField && (l.params[i.request.sortField] = n.sortKey), n.sortDirection === !1 && i.request.sortDirection ? l.params[i.request.sortDirection] = i.request.sortAscValue : n.sortDirection === !0 && i.request.sortDirection && (l.params[i.request.sortDirection] = i.request.sortDescValue);var r;return r = "JSONP" === l.method ? a.jsonp(l.url + "?callback=JSON_CALLBACK", l) : a(l), r.then(function (e) {
	        for (var a = { items: t.evalObjectProperty(e.data, i.response.itemsLocation), currentPage: n.pageNumber, totalPages: Math.ceil(t.evalObjectProperty(e.data, i.response.totalItems) / n.pageSize), totalItems: Math.ceil(t.evalObjectProperty(e.data, i.response.totalItems)), pagingArray: [], token: n.token }, o = 5, l = n.pageNumber - Math.floor(o / 2), r = l; r <= n.pageNumber; r++) {
	          r > 0 && a.pagingArray.push(r);
	        }for (; a.pagingArray.length < o && !(r > a.totalPages);) {
	          a.pagingArray.push(r), r++;
	        }return a;
	      });
	    };
	  }]).factory("adLoadLocalPage", ["$filter", function (e) {
	    return function (a) {
	      var n = { items: t, currentPage: a.pageNumber, totalPages: t, pagingArray: [], token: a.token };if (angular.isDefined(a.localData)) {
	        var o,
	            i = (a.pageNumber - 1) * a.pageSize,
	            l = i + a.pageSize,
	            r = a.localData,
	            s = r;a.sortKey && !a.draggable && (s = e("orderBy")(r, a.sortKey, a.sortDirection)), n.items = s.slice(i, l), n.allItems = r, n.currentPage = a.pageNumber, n.totalPages = Math.ceil(r.length / a.pageSize);var g = 5,
	            c = a.pageNumber - Math.floor(g / 2);for (o = c; o <= a.pageNumber; o++) {
	          o > 0 && n.pagingArray.push(o);
	        }for (; n.pagingArray.length < g && !(o > n.totalPages);) {
	          n.pagingArray.push(o), o++;
	        }
	      }return n;
	    };
	  }]);
	}(window, document);

/***/ },

/***/ 71:
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * adapt-strap
	 * @version v2.6.1 - 2016-08-09
	 * @link https://github.com/Adaptv/adapt-strap
	 * @author Kashyap Patel (kashyap@adap.tv)
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */
	!function (e, t, a) {
	  "use strict";
	  angular.module("adaptv.adaptStrap.alerts").run(["$templateCache", function (e) {
	    e.put("alerts/alerts.tpl.html", '<div ng-show="settings.type !== \'\'" class="alert alert-{{ settings.type }} alert-dismissible fade in {{ customClasses }}" role="alert"><button type="button" class="close" ng-click="close();" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4><span ng-class="iconMap[settings.type]"></span>&nbsp;&nbsp; <strong>{{ settings.caption }}</strong> {{ settings.message }}</h4></div>');
	  }]), angular.module("adaptv.adaptStrap.infinitedropdown").run(["$templateCache", function (e) {
	    e.put("infinitedropdown/infinitedropdown.tpl.html", '<div class="ad-infinite-list-container"><div class="dropdown"><button type="button" class="dropdown-toggle" ng-class="attrs.btnClasses || \'btn btn-default\'" data-toggle="dropdown"><span ng-if="!attrs.labelDisplayProperty || !selectedItems.length">{{ attrs.initialLabel || \'Select\' }}</span> <span ng-if="attrs.labelDisplayProperty && selectedItems.length">{{ adStrapUtils.getObjectProperty(selectedItems[selectedItems.length - 1], attrs.labelDisplayProperty) }}</span> <span class="caret"></span></button><div class="dropdown-header" ng-show="dropdownStatus.open" ng-click="dropdownHeaderAreaClicked($event)" ng-if="attrs.dropdownHeaderTemplateUrl"><ng-include src="attrs.dropdownHeaderTemplateUrl"></ng-include></div><ul class="dropdown-menu" role="menu" ng-class="{\'with-dropdown-header\': attrs.dropdownHeaderTemplateUrl}" ng-style="localConfig.dimensions"><li class="text-overflow" data-ng-repeat="item in items.list" ng-class="{\'active\': adStrapUtils.itemExistsInList(item, selectedItems)}" ng-click="addRemoveItem($event, item, selectedItems)"><a role="menuitem" tabindex="-1" href=""><span ng-if="attrs.displayProperty">{{ adStrapUtils.getObjectProperty(item, attrs.displayProperty) }}</span> <span ng-if="attrs.template" ad-compile-template="{{ attrs.template }}"></span> <span ng-if="attrs.templateUrl" ng-include="attrs.templateUrl"></span></a></li><li class="text-overflow text-center" ng-show="localConfig.loadingData"><a role="menuitem" tabindex="-1" href=""><ad-loading-icon></ad-loading-icon></a></li></ul></div></div>');
	  }]), angular.module("adaptv.adaptStrap.loadingindicator").run(["$templateCache", function (e) {
	    e.put("loadingindicator/loadingindicator.tpl.html", '<div class="ad-loading-overlay-container" ng-class="containerClasses" ng-style="{\'z-index\': zIndex || \'1000\',\'position\': position || \'absolute\'}" ng-show="loading"><div class="wrapper"><div class="loading-indicator"><ad-loading-icon loading-icon-size="{{ loadingIconSize }}" loading-icon-class="{{ loadingIconClass }}"></ad-loading-icon></div></div></div>');
	  }]), angular.module("adaptv.adaptStrap.tableajax").run(["$templateCache", function (e) {
	    e.put("tableajax/tableajax.tpl.html", '<div class="ad-table-ajax-container" ng-if="items.paging.totalPages || localConfig.loadingData || !attrs.itemsNotFoundMessage"><table class="ad-sticky-table {{ attrs.tableClasses || tableClasses }}" ng-if="attrs.tableMaxHeight || attrs.tableFixedHeight" ng-class="{\'ad-fixed-layout\': (attrs.tableMaxHeight || attrs.tableFixedHeight)}"><thead><tr class="ad-user-select-none" ng-include="\'tableajax/headerRowContent.html\'"></tr></thead></table><div class="ad-table-container" ng-style="{\'max-height\': localConfig.tableMaxHeight, \'height\' : attrs.tableFixedHeight}"><table class="{{ attrs.tableClasses || tableClasses }}" ng-class="{\'ad-fixed-layout\': (attrs.tableMaxHeight || attrs.tableFixedHeight)}"><thead><tr class="ad-user-select-none" ng-if="!(localConfig.tableMaxHeight || attrs.tableFixedHeight)" ng-include="\'tableajax/headerRowContent.html\'"></tr></thead><tbody><tr class="ad-first-row" ng-if="attrs.firstRowTemplate" ng-include="attrs.firstRowTemplate"></tr><tr ng-repeat-start="item in items.list" ng-class="getRowClass(item, $index)" ng-include="\'tableajax/rowContent.html\'" ng-click="onRowClick(item, $event)"></tr><tr ng-if="attrs.rowExpandTemplate && adStrapUtils.itemExistsInList($index, localConfig.expandedItems)" class="expandable-row-content" ng-repeat-end><td colspan="{{ visibleColumnDefinition.length + 1}}" ng-include="attrs.rowExpandTemplate"></td></tr><tr class="ad-last-row" ng-if="attrs.lastRowTemplate" ng-include="attrs.lastRowTemplate"></tr></tbody></table><ad-loading-overlay loading="localConfig.loadingData"></ad-loading-overlay></div><ng-include src="\'tableajax/pagination.html\'"></ng-include></div><div ng-if="localConfig.showNoDataFoundMessage && !localConfig.loadingData && attrs.itemsNotFoundMessage"><div class="alert alert-info" role="alert">{{ attrs.itemsNotFoundMessage }}</div></div>');
	  }]), angular.module("adaptv.adaptStrap.tablelite").run(["$templateCache", function (e) {
	    e.put("tablelite/tablelite.tpl.html", '<div class="ad-table-lite-container" ng-if="items.allItems.length || !attrs.itemsNotFoundMessage || attrs.enableColumnSearch"><table class="ad-sticky-table {{ attrs.tableClasses || tableClasses }}" ng-if="attrs.tableMaxHeight || attrs.tableFixedHeight" ng-class="{\'ad-fixed-layout\': (attrs.tableMaxHeight || attrs.tableFixedHeight)}"><thead><tr class="ad-user-select-none" ng-include="\'tablelite/headerRowContent.html\'"></tr><tr class="ad-user-select-none" ng-if="attrs.enableColumnSearch" ng-include="\'tablelite/headerRowFilterContent.html\'"></tr></thead></table><div class="ad-table-container" ng-style="{\'max-height\': attrs.tableMaxHeight, \'height\': attrs.tableFixedHeight}"><table class="{{ attrs.tableClasses || tableClasses }}" ng-class="{\'ad-fixed-layout\': (attrs.tableMaxHeight || attrs.tableFixedHeight)}"><thead><tr class="ad-user-select-none" ng-if="!(attrs.tableMaxHeight || attrs.tableFixedHeight)" ng-include="\'tablelite/headerRowContent.html\'"></tr><tr class="ad-user-select-none" ng-if="!(attrs.tableMaxHeight || attrs.tableFixedHeight) && attrs.enableColumnSearch" ng-include="\'tablelite/headerRowFilterContent.html\'"></tr></thead><tbody ng-if="!localConfig.draggable" ng-include="\'tablelite/defaultRow.html\'"></tbody><tbody ng-if="localConfig.draggable" ng-include="\'tablelite/draggableRow.html\'"></tbody></table></div><ng-include src="\'tablelite/pagination.html\'"></ng-include></div><div ng-if="!localConfig.localData.length && attrs.itemsNotFoundMessage && !attrs.enableColumnSearch"><div class="alert alert-info" role="alert">{{ attrs.itemsNotFoundMessage }}</div></div>');
	  }]), angular.module("adaptv.adaptStrap.treebrowser").run(["$templateCache", function (e) {
	    e.put("treebrowser/treeBrowserNode.tpl.html", '<div class="content" ng-style="{\'padding-left\': level * (attrs.childrenPadding || 15) + \'px\'}" ng-click="onRowClick(item, level, $event)" ng-class="{{ attrs.rowNgClass }}"><div class="content-holder"><ad-tree-browser-node-toggle ng-if="!attrs.customToggle"></ad-tree-browser-node-toggle><div class="node-content">%=nodeTemplate% <span ng-if="!attrs.nodeTemplateUrl">{{ item.name || "" }}</span></div></div></div><div ng-if="item._ad_expanded"><div class="tree-level tree-sub-level" ng-init="level=level+1" ng-repeat="item in item[attrs.childNode]"><ad-tree-browser-node template-url="attrs.nodeTemplateUrl"></ad-tree-browser-node></div></div>');
	  }]), angular.module("adaptv.adaptStrap.treebrowser").run(["$templateCache", function (e) {
	    e.put("treebrowser/treebrowser.tpl.html", '<div class="ad-tree-browser-container" ng-class="{\'tree-bordered\': attrs.bordered}"><div data-level="0" class="tree-view"><div class="tree"><div><div class="tree-level tree-header-level border" ng-if="attrs.nodeHeaderUrl"><div class="content" ng-style="{\'padding-left\': (attrs.childrenPadding || 15) + \'px\'}"><div class="content-holder"><div></div><div class="node-content ad-user-select-none" ng-include="attrs.nodeHeaderUrl"></div></div></div></div><div class="tree-level tree-top-level border" ng-init="level = 1" ng-repeat="item in treeRoot[attrs.childNode]"><ad-tree-browser-node template-url="attrs.nodeTemplateUrl"></ad-tree-browser-node></div></div></div></div></div>');
	  }]), angular.module("adaptv.adaptStrap.treebrowser").run(["$templateCache", function (e) {
	    e.put("treebrowser/treebrowserNodeToggle.tpl.html", '<div class="toggle" ng-class="{\'custom-toggle\': attrs.customToggle}"><i ng-if="!item._ad_expanded && hasChildren(item) && !item._ad_loading" ng-class="iconClasses.expand" ng-click="toggle($event,item)"></i> <i ng-if="item._ad_expanded && !item._ad_loading" ng-class="iconClasses.collapse" ng-click="toggle($event,item)"></i> <span ng-if="item._ad_loading"><i ng-class="iconClasses.loadingSpinner"></i></span></div>');
	  }]), angular.module("adaptv.adaptStrap.tableajax").run(["$templateCache", function (e) {
	    e.put("tableajax/headerRowContent.html", '<th class="ad-select-cell" ng-if="attrs.rowExpandTemplate"><i></i></th><th class="ad-select-cell" ng-if="attrs.selectedItems && items.allItems"><input type="checkbox" class="ad-cursor-pointer" ng-if="!attrs.enableColumnSearch" ng-click="adStrapUtils.addRemoveItemsFromList(items.allItems, selectedItems)" ng-checked="adStrapUtils.itemsExistInList(items.allItems, selectedItems)"></th><th data-ng-repeat="definition in visibleColumnDefinition" ng-click="sortByColumn(definition)" ng-class="{\'ad-cursor-pointer\': definition.sortKey}" ng-style="{\'width\': definition.width}"><ng-include src="\'tableajax/sortIcons.html\'" ng-if="!attrs.snugSortIcons"></ng-include><div class="ad-display-inline-block" ng-if="definition.columnHeaderTemplate" ad-compile-template="definition.columnHeaderTemplate"></div><div class="ad-display-inline-block" ng-if="definition.columnHeaderTemplateUrl"><ng-include src="definition.columnHeaderTemplateUrl"></ng-include></div><div class="ad-display-inline-block" ng-if="definition.columnHeaderDisplayName" ng-bind="definition.columnHeaderDisplayName"></div><ng-include src="\'tableajax/sortIcons.html\'" ng-if="attrs.snugSortIcons"></ng-include></th>');
	  }]), angular.module("adaptv.adaptStrap.tableajax").run(["$templateCache", function (e) {
	    e.put("tableajax/pagination.html", '<div class="row ad-table-pagination-container"><div class="col-md-8 col-sm-8"><ul ng-class="attrs.paginationBtnGroupClasses || \'pagination pagination-sm\'"><li><a class="ad-cursor-pointer" ng-click="loadPage(1)" ng-disabled="items.paging.currentPage == 1" title="First Page" aria-label="First Page"><i ng-class="iconClasses.firstPage"></i></a></li><li><a class="ad-cursor-pointer" ng-click="loadPreviousPage()" ng-disabled="items.paging.currentPage == 1" title="Previous Page" aria-label="Previous Page"><i ng-class="iconClasses.previousPage"></i></a></li><li ng-repeat="page in localConfig.pagingArray" ng-class="{active: items.paging.currentPage == page}"><a class="ad-cursor-pointer" ng-click="loadPage(page)">{{ page }}</a></li><li><a class="ad-cursor-pointer" ng-click="loadNextPage()" ng-disabled="items.paging.currentPage == items.paging.totalPages" title="Next Page" aria-label="Next Page"><i ng-class="iconClasses.nextPage"></i></a></li><li><a class="ad-cursor-pointer" ng-click="loadLastPage()" ng-disabled="items.paging.currentPage == items.paging.totalPages" title="Last Page" aria-label="Last Page"><i ng-class="iconClasses.lastPage"></i></a></li></ul></div><div class="col-md-4 col-sm-4 text-right"><ul ng-class="attrs.paginationBtnGroupClasses || \'pagination pagination-sm\'"><li ng-repeat="size in items.paging.pageSizes" ng-class="{active: items.paging.pageSize == size}"><a class="ad-cursor-pointer" ng-click="pageSizeChanged(size)">{{ size }}</a></li></ul></div></div>');
	  }]), angular.module("adaptv.adaptStrap.tableajax").run(["$templateCache", function (e) {
	    e.put("tableajax/rowContent.html", '<td class="ad-select-cell ad-cursor-pointer table-ajax-col-{{definition.columnHeaderDisplayName ? definition.columnHeaderDisplayName : $index}}" ng-if="attrs.rowExpandTemplate" ng-click="toggle($event, $index, item)"><i ng-class="iconClasses.expand" ng-if="!adStrapUtils.itemExistsInList($index, localConfig.expandedItems)"></i> <i ng-class="iconClasses.collapse" ng-if="adStrapUtils.itemExistsInList($index, localConfig.expandedItems)"></i></td><td class="ad-select-cell table-ajax-col-{{definition.columnHeaderDisplayName ? definition.columnHeaderDisplayName : $index}}" ng-if="attrs.selectedItems"><input type="checkbox" class="ad-cursor-pointer" ng-checked="adStrapUtils.itemExistsInList(item, selectedItems)" ng-click="adStrapUtils.addRemoveItemFromList(item, selectedItems)"></td><td data-ng-repeat="definition in visibleColumnDefinition" ng-style="{\'width\': definition.width}" class="table-ajax-col-{{definition.columnHeaderDisplayName ? definition.columnHeaderDisplayName : $index}}"><div ng-if="definition.templateUrl"><ng-include src="definition.templateUrl"></ng-include></div><div ng-if="definition.template"><span ad-compile-template="definition.template"></span></div><div ng-if="!definition.templateUrl && !definition.template">{{ adStrapUtils.applyFilter(adStrapUtils.getObjectProperty(item, definition.displayProperty, item), definition.cellFilter) }}</div></td>');
	  }]), angular.module("adaptv.adaptStrap.tableajax").run(["$templateCache", function (e) {
	    e.put("tableajax/sortIcons.html", '<div ng-class="{\'ad-display-inline-block\': attrs.snugSortIcons, \'pull-right\': !attrs.snugSortIcons}" ng-if="definition.sortKey && localConfig.sortState.sortKey == definition.sortKey"><i ng-class="iconClasses.sortAscending" ng-show="localConfig.sortState.sortDirection === \'ASC\'"></i> <i ng-class="iconClasses.sortDescending" ng-show="localConfig.sortState.sortDirection === \'DEC\'"></i></div><div ng-class="{\'ad-display-inline-block\': attrs.snugSortIcons, \'pull-right\': !attrs.snugSortIcons}" ng-if="definition.sortKey && localConfig.sortState.sortKey != definition.sortKey"><i ng-class="iconClasses.sortable"></i></div>');
	  }]), angular.module("adaptv.adaptStrap.tablelite").run(["$templateCache", function (e) {
	    e.put("tablelite/defaultRow.html", '<tr class="ad-first-row" ng-if="attrs.firstRowTemplate" ng-include="attrs.firstRowTemplate"></tr><tr ng-repeat-start="item in items.list" ng-class="getRowClass(item, $index)" ng-include="\'tablelite/rowContent.html\'" ng-click="onRowClick(item, $event)"></tr><tr ng-if="attrs.rowExpandTemplate && adStrapUtils.itemExistsInList($index, localConfig.expandedItems)" class="expandable-row-content" ng-repeat-end><td colspan="{{ visibleColumnDefinition.length + !!attrs.draggable + !!attrs.selectedItems + 1}}" ng-include="attrs.rowExpandTemplate"></td></tr><tr class="ad-last-row" ng-if="attrs.lastRowTemplate" ng-include="attrs.lastRowTemplate"></tr>');
	  }]), angular.module("adaptv.adaptStrap.tablelite").run(["$templateCache", function (e) {
	    e.put("tablelite/draggableRow.html", '<tr class="ad-first-row" ng-if="attrs.firstRowTemplate" ng-include="attrs.firstRowTemplate"></tr><tr ad-drag="true" ad-drag-handle="true" ad-drop="true" ad-drag-data="item" ad-drop-over="onDragOver($data, $dragElement, $dropElement, $event)" ad-drop-end="onDropEnd($data, $dragElement, $dropElement, $event)" ad-drag-begin="onDragStart($data, $dragElement, $event)" ad-drag-end="onDragEnd($data, $dragElement, $event)" ng-repeat-start="item in items.list" ng-class="getRowClass(item, $index)" ng-include="\'tablelite/rowContent.html\'"></tr><tr ng-if="attrs.rowExpandTemplate && adStrapUtils.itemExistsInList($index, localConfig.expandedItems)" class="expandable-row-content" ng-repeat-end><td colspan="{{ visibleColumnDefinition.length + !!attrs.draggable + !!attrs.selectedItems + 1}}" ng-include="attrs.rowExpandTemplate"></td></tr><tr class="ad-last-row" ng-if="attrs.lastRowTemplate" ng-include="attrs.lastRowTemplate"></tr>');
	  }]), angular.module("adaptv.adaptStrap.tablelite").run(["$templateCache", function (e) {
	    e.put("tablelite/headerRowContent.html", '<th class="ad-select-cell" ng-if="attrs.draggable"><i></i></th><th class="ad-select-cell" ng-if="attrs.rowExpandTemplate"><i></i></th><th class="ad-select-cell" ng-if="attrs.selectedItems && items.allItems"><input type="checkbox" class="ad-cursor-pointer" ng-if="!attrs.enableColumnSearch" ng-click="adStrapUtils.addRemoveItemsFromList(items.allItems, selectedItems)" ng-checked="adStrapUtils.itemsExistInList(items.allItems, selectedItems)"></th><th data-ng-repeat="definition in visibleColumnDefinition" ng-click="sortByColumn(definition)" ng-class="{\'ad-cursor-pointer\': definition.sortKey}" ng-style="{\'width\': definition.width}"><ng-include src="\'tablelite/sortIcons.html\'" ng-if="!attrs.snugSortIcons"></ng-include><div class="ad-display-inline-block" ng-if="definition.columnHeaderTemplate" ad-compile-template="definition.columnHeaderTemplate"></div><div class="ad-display-inline-block" ng-if="definition.columnHeaderTemplateUrl"><ng-include src="definition.columnHeaderTemplateUrl"></ng-include></div><div class="ad-display-inline-block" ng-bind="definition.columnHeaderDisplayName"></div><ng-include src="\'tablelite/sortIcons.html\'" ng-if="attrs.snugSortIcons"></ng-include></th>');
	  }]), angular.module("adaptv.adaptStrap.tablelite").run(["$templateCache", function (e) {
	    e.put("tablelite/headerRowFilterContent.html", '<th class="ad-select-cell" ng-if="attrs.draggable"><i></i></th><th class="ad-select-cell" ng-if="attrs.rowExpandTemplate"><i></i></th><th class="ad-select-cell" ng-if="attrs.selectedItems && items.allItems"><input type="checkbox" class="ad-cursor-pointer" ng-if="attrs.enableColumnSearch" ng-click="adStrapUtils.addRemoveItemsFromList(items.allItems, selectedItems)" ng-checked="adStrapUtils.itemsExistInList(items.allItems, selectedItems)"></th><th data-ng-repeat="definition in visibleColumnDefinition"><input ng-if="definition.columnSearchProperty" type="text" class="input-sm form-control" ng-model="filters[definition.columnSearchProperty]"></th>');
	  }]), angular.module("adaptv.adaptStrap.tablelite").run(["$templateCache", function (e) {
	    e.put("tablelite/pagination.html", '<div class="row ad-table-pagination-container" ng-if="!attrs.disablePaging"><div class="col-md-8 col-sm-8 text-left"><ul ng-class="attrs.paginationBtnGroupClasses || \'pagination pagination-sm\'"><li><a ng-click="loadPage(1)" class="ad-cursor-pointer" ng-disabled="items.paging.currentPage == 1" title="First Page" aria-label="First Page"><i ng-class="iconClasses.firstPage"></i></a></li><li><a ng-if="!attrs.draggable" class="ad-cursor-pointer" ng-click="loadPreviousPage()" ng-disabled="items.paging.currentPage == 1" title="Previous Page" aria-label="Previous Page"><i ng-class="iconClasses.previousPage"></i></a></li><li><a id="btnPrev" class="ad-cursor-pointer" ng-if="attrs.draggable" ad-drop="true" ad-drop-over="onPageButtonOver($data, $dragElement, $dropElement, $event)" ad-drop-leave="onPageButtonLeave($data, $dragElement, $dropElement, $event)" ad-drop-end="onPageButtonDrop($data, $dragElement, $dropElement, $event)" ng-click="loadPreviousPage()" ng-disabled="items.paging.currentPage == 1" title="Previous Page" aria-label="Previous Page"><i ng-class="iconClasses.previousPage"></i></a></li><li ng-repeat="page in localConfig.pagingArray" ng-class="{active: items.paging.currentPage == page}"><a ng-click="loadPage(page)" class="ad-cursor-pointer">{{ page }}</a></li><li><a ng-if="!attrs.draggable" class="ad-cursor-pointer" ng-click="loadNextPage()" ng-disabled="items.paging.currentPage == items.paging.totalPages" title="Next Page" aria-label="Next Page"><i ng-class="iconClasses.nextPage"></i></a></li><li><a id="btnNext" class="ad-cursor-pointer" ng-if="attrs.draggable" ad-drop="true" ad-drop-over="onPageButtonOver($data, $dragElement, $dropElement, $event)" ad-drop-leave="onPageButtonLeave($data, $dragElement, $dropElement, $event)" ad-drop-end="onPageButtonDrop($data, $dragElement, $dropElement, $event)" ng-click="loadNextPage()" ng-disabled="items.paging.currentPage == items.paging.totalPages" title="Next Page" aria-label="Next Page"><i ng-class="iconClasses.nextPage"></i></a></li><li><a ng-click="loadLastPage()" class="ad-cursor-pointer" ng-disabled="items.paging.currentPage == items.paging.totalPages" title="Last Page" aria-label="Last Page"><i ng-class="iconClasses.lastPage"></i></a></li></ul></div><div class="col-md-4 col-sm-4 text-right"><ul ng-class="attrs.paginationBtnGroupClasses || \'pagination pagination-sm\'"><li ng-repeat="size in items.paging.pageSizes" ng-class="{active: items.paging.pageSize == size}"><a ng-click="pageSizeChanged(size)" class="ad-cursor-pointer">{{ size }}</a></li></ul></div></div>');
	  }]), angular.module("adaptv.adaptStrap.tablelite").run(["$templateCache", function (e) {
	    e.put("tablelite/rowContent.html", '<td class="ad-select-cell ad-cursor-pointer table-lite-col-{{definition.columnHeaderDisplayName ? definition.columnHeaderDisplayName : $index}}" ng-if="attrs.rowExpandTemplate" ng-click="toggle($event, $index, item)"><i ng-class="iconClasses.expand" ng-if="!adStrapUtils.itemExistsInList($index, localConfig.expandedItems)"></i> <i ng-class="iconClasses.collapse" ng-if="adStrapUtils.itemExistsInList($index, localConfig.expandedItems)"></i></td><td class="ad-select-cell ad-drag-handle table-lite-col-{{definition.columnHeaderDisplayName ? definition.columnHeaderDisplayName : $index}}" ng-if="attrs.draggable"><i ng-class="iconClasses.draggable"></i></td><td class="ad-select-cell table-lite-col-{{definition.columnHeaderDisplayName ? definition.columnHeaderDisplayName : $index}}" ng-if="attrs.selectedItems"><input type="checkbox" class="ad-cursor-pointer" ng-checked="adStrapUtils.itemExistsInList(item, selectedItems)" ng-click="adStrapUtils.addRemoveItemFromList(item, selectedItems)"></td><td data-ng-repeat="definition in visibleColumnDefinition" ng-style="{\'width\': definition.width}" class="table-lite-col-{{definition.columnHeaderDisplayName ? definition.columnHeaderDisplayName : $index}}"><div ng-if="definition.templateUrl"><ng-include src="definition.templateUrl"></ng-include></div><div ng-if="definition.template"><span ad-compile-template="definition.template"></span></div><div ng-if="!definition.templateUrl && !definition.template">{{ adStrapUtils.applyFilter(adStrapUtils.getObjectProperty(item, definition.displayProperty), definition.cellFilter) }}</div></td>');
	  }]), angular.module("adaptv.adaptStrap.tablelite").run(["$templateCache", function (e) {
	    e.put("tablelite/sortIcons.html", '<div ng-class="{\'ad-display-inline-block\': attrs.snugSortIcons, \'pull-right\': !attrs.snugSortIcons}" ng-if="definition.sortKey && localConfig.sortState.sortKey == definition.sortKey"><i ng-class="iconClasses.sortAscending" ng-show="localConfig.sortState.sortDirection === \'ASC\'"></i> <i ng-class="iconClasses.sortDescending" ng-show="localConfig.sortState.sortDirection === \'DEC\'"></i></div><div ng-class="{\'ad-display-inline-block\': attrs.snugSortIcons, \'pull-right\': !attrs.snugSortIcons}" ng-if="definition.sortKey && localConfig.sortState.sortKey != definition.sortKey"><i ng-class="iconClasses.sortable"></i></div>');
	  }]);
	}(window, document);

/***/ },

/***/ 72:
/***/ function(module, exports) {

	"use strict";
	
	/*
	 * angular-ui-bootstrap
	 * http://angular-ui.github.io/bootstrap/
	
	 * Version: 1.3.3 - 2016-05-22
	 * License: MIT
	 */angular.module("ui.bootstrap", ["ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.isClass", "ui.bootstrap.datepicker", "ui.bootstrap.position", "ui.bootstrap.datepickerPopup", "ui.bootstrap.debounce", "ui.bootstrap.dropdown", "ui.bootstrap.stackedMap", "ui.bootstrap.modal", "ui.bootstrap.paging", "ui.bootstrap.pager", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.collapse", []).directive("uibCollapse", ["$animate", "$q", "$parse", "$injector", function (a, b, c, d) {
	  var e = d.has("$animateCss") ? d.get("$animateCss") : null;return { link: function link(d, f, g) {
	      function h() {
	        f.hasClass("collapse") && f.hasClass("in") || b.resolve(l(d)).then(function () {
	          f.removeClass("collapse").addClass("collapsing").attr("aria-expanded", !0).attr("aria-hidden", !1), e ? e(f, { addClass: "in", easing: "ease", to: { height: f[0].scrollHeight + "px" } }).start()["finally"](i) : a.addClass(f, "in", { to: { height: f[0].scrollHeight + "px" } }).then(i);
	        });
	      }function i() {
	        f.removeClass("collapsing").addClass("collapse").css({ height: "auto" }), m(d);
	      }function j() {
	        return f.hasClass("collapse") || f.hasClass("in") ? void b.resolve(n(d)).then(function () {
	          f.css({ height: f[0].scrollHeight + "px" }).removeClass("collapse").addClass("collapsing").attr("aria-expanded", !1).attr("aria-hidden", !0), e ? e(f, { removeClass: "in", to: { height: "0" } }).start()["finally"](k) : a.removeClass(f, "in", { to: { height: "0" } }).then(k);
	        }) : k();
	      }function k() {
	        f.css({ height: "0" }), f.removeClass("collapsing").addClass("collapse"), o(d);
	      }var l = c(g.expanding),
	          m = c(g.expanded),
	          n = c(g.collapsing),
	          o = c(g.collapsed);d.$eval(g.uibCollapse) || f.addClass("in").addClass("collapse").attr("aria-expanded", !0).attr("aria-hidden", !1).css({ height: "auto" }), d.$watch(g.uibCollapse, function (a) {
	        a ? j() : h();
	      });
	    } };
	}]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("uibAccordionConfig", { closeOthers: !0 }).controller("UibAccordionController", ["$scope", "$attrs", "uibAccordionConfig", function (a, b, c) {
	  this.groups = [], this.closeOthers = function (d) {
	    var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;e && angular.forEach(this.groups, function (a) {
	      a !== d && (a.isOpen = !1);
	    });
	  }, this.addGroup = function (a) {
	    var b = this;this.groups.push(a), a.$on("$destroy", function (c) {
	      b.removeGroup(a);
	    });
	  }, this.removeGroup = function (a) {
	    var b = this.groups.indexOf(a);-1 !== b && this.groups.splice(b, 1);
	  };
	}]).directive("uibAccordion", function () {
	  return { controller: "UibAccordionController", controllerAs: "accordion", transclude: !0, templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/accordion/accordion.html";
	    } };
	}).directive("uibAccordionGroup", function () {
	  return { require: "^uibAccordion", transclude: !0, replace: !0, templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/accordion/accordion-group.html";
	    }, scope: { heading: "@", panelClass: "@?", isOpen: "=?", isDisabled: "=?" }, controller: function controller() {
	      this.setHeading = function (a) {
	        this.heading = a;
	      };
	    }, link: function link(a, b, c, d) {
	      d.addGroup(a), a.openClass = c.openClass || "panel-open", a.panelClass = c.panelClass || "panel-default", a.$watch("isOpen", function (c) {
	        b.toggleClass(a.openClass, !!c), c && d.closeOthers(a);
	      }), a.toggleOpen = function (b) {
	        a.isDisabled || b && 32 !== b.which || (a.isOpen = !a.isOpen);
	      };var e = "accordiongroup-" + a.$id + "-" + Math.floor(1e4 * Math.random());a.headingId = e + "-tab", a.panelId = e + "-panel";
	    } };
	}).directive("uibAccordionHeading", function () {
	  return { transclude: !0, template: "", replace: !0, require: "^uibAccordionGroup", link: function link(a, b, c, d, e) {
	      d.setHeading(e(a, angular.noop));
	    } };
	}).directive("uibAccordionTransclude", function () {
	  function a() {
	    return "uib-accordion-header,data-uib-accordion-header,x-uib-accordion-header,uib\\:accordion-header,[uib-accordion-header],[data-uib-accordion-header],[x-uib-accordion-header]";
	  }return { require: "^uibAccordionGroup", link: function link(b, c, d, e) {
	      b.$watch(function () {
	        return e[d.uibAccordionTransclude];
	      }, function (b) {
	        if (b) {
	          var d = angular.element(c[0].querySelector(a()));d.html(""), d.append(b);
	        }
	      });
	    } };
	}), angular.module("ui.bootstrap.alert", []).controller("UibAlertController", ["$scope", "$attrs", "$interpolate", "$timeout", function (a, b, c, d) {
	  a.closeable = !!b.close;var e = angular.isDefined(b.dismissOnTimeout) ? c(b.dismissOnTimeout)(a.$parent) : null;e && d(function () {
	    a.close();
	  }, parseInt(e, 10));
	}]).directive("uibAlert", function () {
	  return { controller: "UibAlertController", controllerAs: "alert", templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/alert/alert.html";
	    }, transclude: !0, replace: !0, scope: { type: "@", close: "&" } };
	}), angular.module("ui.bootstrap.buttons", []).constant("uibButtonConfig", { activeClass: "active", toggleEvent: "click" }).controller("UibButtonsController", ["uibButtonConfig", function (a) {
	  this.activeClass = a.activeClass || "active", this.toggleEvent = a.toggleEvent || "click";
	}]).directive("uibBtnRadio", ["$parse", function (a) {
	  return { require: ["uibBtnRadio", "ngModel"], controller: "UibButtonsController", controllerAs: "buttons", link: function link(b, c, d, e) {
	      var f = e[0],
	          g = e[1],
	          h = a(d.uibUncheckable);c.find("input").css({ display: "none" }), g.$render = function () {
	        c.toggleClass(f.activeClass, angular.equals(g.$modelValue, b.$eval(d.uibBtnRadio)));
	      }, c.on(f.toggleEvent, function () {
	        if (!d.disabled) {
	          var a = c.hasClass(f.activeClass);a && !angular.isDefined(d.uncheckable) || b.$apply(function () {
	            g.$setViewValue(a ? null : b.$eval(d.uibBtnRadio)), g.$render();
	          });
	        }
	      }), d.uibUncheckable && b.$watch(h, function (a) {
	        d.$set("uncheckable", a ? "" : void 0);
	      });
	    } };
	}]).directive("uibBtnCheckbox", function () {
	  return { require: ["uibBtnCheckbox", "ngModel"], controller: "UibButtonsController", controllerAs: "button", link: function link(a, b, c, d) {
	      function e() {
	        return g(c.btnCheckboxTrue, !0);
	      }function f() {
	        return g(c.btnCheckboxFalse, !1);
	      }function g(b, c) {
	        return angular.isDefined(b) ? a.$eval(b) : c;
	      }var h = d[0],
	          i = d[1];b.find("input").css({ display: "none" }), i.$render = function () {
	        b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()));
	      }, b.on(h.toggleEvent, function () {
	        c.disabled || a.$apply(function () {
	          i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render();
	        });
	      });
	    } };
	}), angular.module("ui.bootstrap.carousel", []).controller("UibCarouselController", ["$scope", "$element", "$interval", "$timeout", "$animate", function (a, b, c, d, e) {
	  function f() {
	    for (; t.length;) {
	      t.shift();
	    }
	  }function g(a) {
	    for (var b = 0; b < q.length; b++) {
	      q[b].slide.active = b === a;
	    }
	  }function h(c, d, i) {
	    if (!u) {
	      if (angular.extend(c, { direction: i }), angular.extend(q[s].slide || {}, { direction: i }), e.enabled(b) && !a.$currentTransition && q[d].element && p.slides.length > 1) {
	        q[d].element.data(r, c.direction);var j = p.getCurrentIndex();angular.isNumber(j) && q[j].element && q[j].element.data(r, c.direction), a.$currentTransition = !0, e.on("addClass", q[d].element, function (b, c) {
	          if ("close" === c && (a.$currentTransition = null, e.off("addClass", b), t.length)) {
	            var d = t.pop().slide,
	                g = d.index,
	                i = g > p.getCurrentIndex() ? "next" : "prev";f(), h(d, g, i);
	          }
	        });
	      }a.active = c.index, s = c.index, g(d), l();
	    }
	  }function i(a) {
	    for (var b = 0; b < q.length; b++) {
	      if (q[b].slide === a) return b;
	    }
	  }function j() {
	    n && (c.cancel(n), n = null);
	  }function k(b) {
	    b.length || (a.$currentTransition = null, f());
	  }function l() {
	    j();var b = +a.interval;!isNaN(b) && b > 0 && (n = c(m, b));
	  }function m() {
	    var b = +a.interval;o && !isNaN(b) && b > 0 && q.length ? a.next() : a.pause();
	  }var n,
	      o,
	      p = this,
	      q = p.slides = a.slides = [],
	      r = "uib-slideDirection",
	      s = a.active,
	      t = [],
	      u = !1;p.addSlide = function (b, c) {
	    q.push({ slide: b, element: c }), q.sort(function (a, b) {
	      return +a.slide.index - +b.slide.index;
	    }), (b.index === a.active || 1 === q.length && !angular.isNumber(a.active)) && (a.$currentTransition && (a.$currentTransition = null), s = b.index, a.active = b.index, g(s), p.select(q[i(b)]), 1 === q.length && a.play());
	  }, p.getCurrentIndex = function () {
	    for (var a = 0; a < q.length; a++) {
	      if (q[a].slide.index === s) return a;
	    }
	  }, p.next = a.next = function () {
	    var b = (p.getCurrentIndex() + 1) % q.length;return 0 === b && a.noWrap() ? void a.pause() : p.select(q[b], "next");
	  }, p.prev = a.prev = function () {
	    var b = p.getCurrentIndex() - 1 < 0 ? q.length - 1 : p.getCurrentIndex() - 1;return a.noWrap() && b === q.length - 1 ? void a.pause() : p.select(q[b], "prev");
	  }, p.removeSlide = function (b) {
	    var c = i(b),
	        d = t.indexOf(q[c]);-1 !== d && t.splice(d, 1), q.splice(c, 1), q.length > 0 && s === c ? c >= q.length ? (s = q.length - 1, a.active = s, g(s), p.select(q[q.length - 1])) : (s = c, a.active = s, g(s), p.select(q[c])) : s > c && (s--, a.active = s), 0 === q.length && (s = null, a.active = null, f());
	  }, p.select = a.select = function (b, c) {
	    var d = i(b.slide);void 0 === c && (c = d > p.getCurrentIndex() ? "next" : "prev"), b.slide.index === s || a.$currentTransition ? b && b.slide.index !== s && a.$currentTransition && t.push(q[d]) : h(b.slide, d, c);
	  }, a.indexOfSlide = function (a) {
	    return +a.slide.index;
	  }, a.isActive = function (b) {
	    return a.active === b.slide.index;
	  }, a.isPrevDisabled = function () {
	    return 0 === a.active && a.noWrap();
	  }, a.isNextDisabled = function () {
	    return a.active === q.length - 1 && a.noWrap();
	  }, a.pause = function () {
	    a.noPause || (o = !1, j());
	  }, a.play = function () {
	    o || (o = !0, l());
	  }, a.$on("$destroy", function () {
	    u = !0, j();
	  }), a.$watch("noTransition", function (a) {
	    e.enabled(b, !a);
	  }), a.$watch("interval", l), a.$watchCollection("slides", k), a.$watch("active", function (a) {
	    if (angular.isNumber(a) && s !== a) {
	      for (var b = 0; b < q.length; b++) {
	        if (q[b].slide.index === a) {
	          a = b;break;
	        }
	      }var c = q[a];c && (g(a), p.select(q[a]), s = a);
	    }
	  });
	}]).directive("uibCarousel", function () {
	  return { transclude: !0, replace: !0, controller: "UibCarouselController", controllerAs: "carousel", templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/carousel/carousel.html";
	    }, scope: { active: "=", interval: "=", noTransition: "=", noPause: "=", noWrap: "&" } };
	}).directive("uibSlide", function () {
	  return { require: "^uibCarousel", transclude: !0, replace: !0, templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/carousel/slide.html";
	    }, scope: { actual: "=?", index: "=?" }, link: function link(a, b, c, d) {
	      d.addSlide(a, b), a.$on("$destroy", function () {
	        d.removeSlide(a);
	      });
	    } };
	}).animation(".item", ["$animateCss", function (a) {
	  function b(a, b, c) {
	    a.removeClass(b), c && c();
	  }var c = "uib-slideDirection";return { beforeAddClass: function beforeAddClass(d, e, f) {
	      if ("active" === e) {
	        var g = !1,
	            h = d.data(c),
	            i = "next" === h ? "left" : "right",
	            j = b.bind(this, d, i + " " + h, f);return d.addClass(h), a(d, { addClass: i }).start().done(j), function () {
	          g = !0;
	        };
	      }f();
	    }, beforeRemoveClass: function beforeRemoveClass(d, e, f) {
	      if ("active" === e) {
	        var g = !1,
	            h = d.data(c),
	            i = "next" === h ? "left" : "right",
	            j = b.bind(this, d, i, f);return a(d, { addClass: i }).start().done(j), function () {
	          g = !0;
	        };
	      }f();
	    } };
	}]), angular.module("ui.bootstrap.dateparser", []).service("uibDateParser", ["$log", "$locale", "dateFilter", "orderByFilter", function (a, b, c, d) {
	  function e(a, b) {
	    var c = [],
	        e = a.split(""),
	        f = a.indexOf("'");if (f > -1) {
	      var g = !1;a = a.split("");for (var h = f; h < a.length; h++) {
	        g ? ("'" === a[h] && (h + 1 < a.length && "'" === a[h + 1] ? (a[h + 1] = "$", e[h + 1] = "") : (e[h] = "", g = !1)), a[h] = "$") : "'" === a[h] && (a[h] = "$", e[h] = "", g = !0);
	      }a = a.join("");
	    }return angular.forEach(n, function (d) {
	      var f = a.indexOf(d.key);if (f > -1) {
	        a = a.split(""), e[f] = "(" + d.regex + ")", a[f] = "$";for (var g = f + 1, h = f + d.key.length; h > g; g++) {
	          e[g] = "", a[g] = "$";
	        }a = a.join(""), c.push({ index: f, key: d.key, apply: d[b], matcher: d.regex });
	      }
	    }), { regex: new RegExp("^" + e.join("") + "$"), map: d(c, "index") };
	  }function f(a, b, c) {
	    return 1 > c ? !1 : 1 === b && c > 28 ? 29 === c && (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) : 3 === b || 5 === b || 8 === b || 10 === b ? 31 > c : !0;
	  }function g(a) {
	    return parseInt(a, 10);
	  }function h(a, b) {
	    return a && b ? l(a, b) : a;
	  }function i(a, b) {
	    return a && b ? l(a, b, !0) : a;
	  }function j(a, b) {
	    a = a.replace(/:/g, "");var c = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6e4;return isNaN(c) ? b : c;
	  }function k(a, b) {
	    return a = new Date(a.getTime()), a.setMinutes(a.getMinutes() + b), a;
	  }function l(a, b, c) {
	    c = c ? -1 : 1;var d = a.getTimezoneOffset(),
	        e = j(b, d);return k(a, c * (e - d));
	  }var m,
	      n,
	      o = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;this.init = function () {
	    m = b.id, this.parsers = {}, this.formatters = {}, n = [{ key: "yyyy", regex: "\\d{4}", apply: function apply(a) {
	        this.year = +a;
	      }, formatter: function formatter(a) {
	        var b = new Date();return b.setFullYear(Math.abs(a.getFullYear())), c(b, "yyyy");
	      } }, { key: "yy", regex: "\\d{2}", apply: function apply(a) {
	        a = +a, this.year = 69 > a ? a + 2e3 : a + 1900;
	      }, formatter: function formatter(a) {
	        var b = new Date();return b.setFullYear(Math.abs(a.getFullYear())), c(b, "yy");
	      } }, { key: "y", regex: "\\d{1,4}", apply: function apply(a) {
	        this.year = +a;
	      }, formatter: function formatter(a) {
	        var b = new Date();return b.setFullYear(Math.abs(a.getFullYear())), c(b, "y");
	      } }, { key: "M!", regex: "0?[1-9]|1[0-2]", apply: function apply(a) {
	        this.month = a - 1;
	      }, formatter: function formatter(a) {
	        var b = a.getMonth();return (/^[0-9]$/.test(b) ? c(a, "MM") : c(a, "M")
	        );
	      } }, { key: "MMMM", regex: b.DATETIME_FORMATS.MONTH.join("|"), apply: function apply(a) {
	        this.month = b.DATETIME_FORMATS.MONTH.indexOf(a);
	      }, formatter: function formatter(a) {
	        return c(a, "MMMM");
	      } }, { key: "MMM", regex: b.DATETIME_FORMATS.SHORTMONTH.join("|"), apply: function apply(a) {
	        this.month = b.DATETIME_FORMATS.SHORTMONTH.indexOf(a);
	      }, formatter: function formatter(a) {
	        return c(a, "MMM");
	      } }, { key: "MM", regex: "0[1-9]|1[0-2]", apply: function apply(a) {
	        this.month = a - 1;
	      }, formatter: function formatter(a) {
	        return c(a, "MM");
	      } }, { key: "M", regex: "[1-9]|1[0-2]", apply: function apply(a) {
	        this.month = a - 1;
	      }, formatter: function formatter(a) {
	        return c(a, "M");
	      } }, { key: "d!", regex: "[0-2]?[0-9]{1}|3[0-1]{1}", apply: function apply(a) {
	        this.date = +a;
	      }, formatter: function formatter(a) {
	        var b = a.getDate();return (/^[1-9]$/.test(b) ? c(a, "dd") : c(a, "d")
	        );
	      } }, { key: "dd", regex: "[0-2][0-9]{1}|3[0-1]{1}", apply: function apply(a) {
	        this.date = +a;
	      }, formatter: function formatter(a) {
	        return c(a, "dd");
	      } }, { key: "d", regex: "[1-2]?[0-9]{1}|3[0-1]{1}", apply: function apply(a) {
	        this.date = +a;
	      }, formatter: function formatter(a) {
	        return c(a, "d");
	      } }, { key: "EEEE", regex: b.DATETIME_FORMATS.DAY.join("|"), formatter: function formatter(a) {
	        return c(a, "EEEE");
	      } }, { key: "EEE", regex: b.DATETIME_FORMATS.SHORTDAY.join("|"), formatter: function formatter(a) {
	        return c(a, "EEE");
	      } }, { key: "HH", regex: "(?:0|1)[0-9]|2[0-3]", apply: function apply(a) {
	        this.hours = +a;
	      }, formatter: function formatter(a) {
	        return c(a, "HH");
	      } }, { key: "hh", regex: "0[0-9]|1[0-2]", apply: function apply(a) {
	        this.hours = +a;
	      }, formatter: function formatter(a) {
	        return c(a, "hh");
	      } }, { key: "H", regex: "1?[0-9]|2[0-3]", apply: function apply(a) {
	        this.hours = +a;
	      }, formatter: function formatter(a) {
	        return c(a, "H");
	      } }, { key: "h", regex: "[0-9]|1[0-2]", apply: function apply(a) {
	        this.hours = +a;
	      }, formatter: function formatter(a) {
	        return c(a, "h");
	      } }, { key: "mm", regex: "[0-5][0-9]", apply: function apply(a) {
	        this.minutes = +a;
	      }, formatter: function formatter(a) {
	        return c(a, "mm");
	      } }, { key: "m", regex: "[0-9]|[1-5][0-9]", apply: function apply(a) {
	        this.minutes = +a;
	      }, formatter: function formatter(a) {
	        return c(a, "m");
	      } }, { key: "sss", regex: "[0-9][0-9][0-9]", apply: function apply(a) {
	        this.milliseconds = +a;
	      }, formatter: function formatter(a) {
	        return c(a, "sss");
	      } }, { key: "ss", regex: "[0-5][0-9]", apply: function apply(a) {
	        this.seconds = +a;
	      }, formatter: function formatter(a) {
	        return c(a, "ss");
	      } }, { key: "s", regex: "[0-9]|[1-5][0-9]", apply: function apply(a) {
	        this.seconds = +a;
	      }, formatter: function formatter(a) {
	        return c(a, "s");
	      } }, { key: "a", regex: b.DATETIME_FORMATS.AMPMS.join("|"), apply: function apply(a) {
	        12 === this.hours && (this.hours = 0), "PM" === a && (this.hours += 12);
	      }, formatter: function formatter(a) {
	        return c(a, "a");
	      } }, { key: "Z", regex: "[+-]\\d{4}", apply: function apply(a) {
	        var b = a.match(/([+-])(\d{2})(\d{2})/),
	            c = b[1],
	            d = b[2],
	            e = b[3];this.hours += g(c + d), this.minutes += g(c + e);
	      }, formatter: function formatter(a) {
	        return c(a, "Z");
	      } }, { key: "ww", regex: "[0-4][0-9]|5[0-3]", formatter: function formatter(a) {
	        return c(a, "ww");
	      } }, { key: "w", regex: "[0-9]|[1-4][0-9]|5[0-3]", formatter: function formatter(a) {
	        return c(a, "w");
	      } }, { key: "GGGG", regex: b.DATETIME_FORMATS.ERANAMES.join("|").replace(/\s/g, "\\s"), formatter: function formatter(a) {
	        return c(a, "GGGG");
	      } }, { key: "GGG", regex: b.DATETIME_FORMATS.ERAS.join("|"), formatter: function formatter(a) {
	        return c(a, "GGG");
	      } }, { key: "GG", regex: b.DATETIME_FORMATS.ERAS.join("|"), formatter: function formatter(a) {
	        return c(a, "GG");
	      } }, { key: "G", regex: b.DATETIME_FORMATS.ERAS.join("|"), formatter: function formatter(a) {
	        return c(a, "G");
	      } }];
	  }, this.init(), this.filter = function (a, c) {
	    if (!angular.isDate(a) || isNaN(a) || !c) return "";c = b.DATETIME_FORMATS[c] || c, b.id !== m && this.init(), this.formatters[c] || (this.formatters[c] = e(c, "formatter"));var d = this.formatters[c],
	        f = d.map,
	        g = c;return f.reduce(function (b, c, d) {
	      var e = g.match(new RegExp("(.*)" + c.key));e && angular.isString(e[1]) && (b += e[1], g = g.replace(e[1] + c.key, ""));var h = d === f.length - 1 ? g : "";return c.apply ? b + c.apply.call(null, a) + h : b + h;
	    }, "");
	  }, this.parse = function (c, d, g) {
	    if (!angular.isString(c) || !d) return c;d = b.DATETIME_FORMATS[d] || d, d = d.replace(o, "\\$&"), b.id !== m && this.init(), this.parsers[d] || (this.parsers[d] = e(d, "apply"));var h = this.parsers[d],
	        i = h.regex,
	        j = h.map,
	        k = c.match(i),
	        l = !1;if (k && k.length) {
	      var n, p;angular.isDate(g) && !isNaN(g.getTime()) ? n = { year: g.getFullYear(), month: g.getMonth(), date: g.getDate(), hours: g.getHours(), minutes: g.getMinutes(), seconds: g.getSeconds(), milliseconds: g.getMilliseconds() } : (g && a.warn("dateparser:", "baseDate is not a valid date"), n = { year: 1900, month: 0, date: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });for (var q = 1, r = k.length; r > q; q++) {
	        var s = j[q - 1];"Z" === s.matcher && (l = !0), s.apply && s.apply.call(n, k[q]);
	      }var t = l ? Date.prototype.setUTCFullYear : Date.prototype.setFullYear,
	          u = l ? Date.prototype.setUTCHours : Date.prototype.setHours;return f(n.year, n.month, n.date) && (!angular.isDate(g) || isNaN(g.getTime()) || l ? (p = new Date(0), t.call(p, n.year, n.month, n.date), u.call(p, n.hours || 0, n.minutes || 0, n.seconds || 0, n.milliseconds || 0)) : (p = new Date(g), t.call(p, n.year, n.month, n.date), u.call(p, n.hours, n.minutes, n.seconds, n.milliseconds))), p;
	    }
	  }, this.toTimezone = h, this.fromTimezone = i, this.timezoneToOffset = j, this.addDateMinutes = k, this.convertTimezoneToLocal = l;
	}]), angular.module("ui.bootstrap.isClass", []).directive("uibIsClass", ["$animate", function (a) {
	  var b = /^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/,
	      c = /^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;return { restrict: "A", compile: function compile(d, e) {
	      function f(a, b, c) {
	        i.push(a), j.push({ scope: a, element: b }), o.forEach(function (b, c) {
	          g(b, a);
	        }), a.$on("$destroy", h);
	      }function g(b, d) {
	        var e = b.match(c),
	            f = d.$eval(e[1]),
	            g = e[2],
	            h = k[b];if (!h) {
	          var i = function i(b) {
	            var c = null;j.some(function (a) {
	              var d = a.scope.$eval(m);return d === b ? (c = a, !0) : void 0;
	            }), h.lastActivated !== c && (h.lastActivated && a.removeClass(h.lastActivated.element, f), c && a.addClass(c.element, f), h.lastActivated = c);
	          };k[b] = h = { lastActivated: null, scope: d, watchFn: i, compareWithExp: g, watcher: d.$watch(g, i) };
	        }h.watchFn(d.$eval(g));
	      }function h(a) {
	        var b = a.targetScope,
	            c = i.indexOf(b);if (i.splice(c, 1), j.splice(c, 1), i.length) {
	          var d = i[0];angular.forEach(k, function (a) {
	            a.scope === b && (a.watcher = d.$watch(a.compareWithExp, a.watchFn), a.scope = d);
	          });
	        } else k = {};
	      }var i = [],
	          j = [],
	          k = {},
	          l = e.uibIsClass.match(b),
	          m = l[2],
	          n = l[1],
	          o = n.split(",");return f;
	    } };
	}]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.isClass"]).value("$datepickerSuppressError", !1).value("$datepickerLiteralWarning", !0).constant("uibDatepickerConfig", { datepickerMode: "day", formatDay: "dd", formatMonth: "MMMM", formatYear: "yyyy", formatDayHeader: "EEE", formatDayTitle: "MMMM yyyy", formatMonthTitle: "yyyy", maxDate: null, maxMode: "year", minDate: null, minMode: "day", ngModelOptions: {}, shortcutPropagation: !1, showWeeks: !0, yearColumns: 5, yearRows: 4 }).controller("UibDatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$locale", "$log", "dateFilter", "uibDatepickerConfig", "$datepickerLiteralWarning", "$datepickerSuppressError", "uibDateParser", function (a, b, c, d, e, f, g, h, i, j, k) {
	  function l(b) {
	    a.datepickerMode = b, a.datepickerOptions.datepickerMode = b;
	  }var m = this,
	      n = { $setViewValue: angular.noop },
	      o = {},
	      p = [];!!b.datepickerOptions;a.datepickerOptions || (a.datepickerOptions = {}), this.modes = ["day", "month", "year"], ["customClass", "dateDisabled", "datepickerMode", "formatDay", "formatDayHeader", "formatDayTitle", "formatMonth", "formatMonthTitle", "formatYear", "maxDate", "maxMode", "minDate", "minMode", "showWeeks", "shortcutPropagation", "startingDay", "yearColumns", "yearRows"].forEach(function (b) {
	    switch (b) {case "customClass":case "dateDisabled":
	        a[b] = a.datepickerOptions[b] || angular.noop;break;case "datepickerMode":
	        a.datepickerMode = angular.isDefined(a.datepickerOptions.datepickerMode) ? a.datepickerOptions.datepickerMode : h.datepickerMode;break;case "formatDay":case "formatDayHeader":case "formatDayTitle":case "formatMonth":case "formatMonthTitle":case "formatYear":
	        m[b] = angular.isDefined(a.datepickerOptions[b]) ? d(a.datepickerOptions[b])(a.$parent) : h[b];break;case "showWeeks":case "shortcutPropagation":case "yearColumns":case "yearRows":
	        m[b] = angular.isDefined(a.datepickerOptions[b]) ? a.datepickerOptions[b] : h[b];break;case "startingDay":
	        angular.isDefined(a.datepickerOptions.startingDay) ? m.startingDay = a.datepickerOptions.startingDay : angular.isNumber(h.startingDay) ? m.startingDay = h.startingDay : m.startingDay = (e.DATETIME_FORMATS.FIRSTDAYOFWEEK + 8) % 7;break;case "maxDate":case "minDate":
	        a.$watch("datepickerOptions." + b, function (a) {
	          a ? angular.isDate(a) ? m[b] = k.fromTimezone(new Date(a), o.timezone) : (i && f.warn("Literal date support has been deprecated, please switch to date object usage"), m[b] = new Date(g(a, "medium"))) : m[b] = h[b] ? k.fromTimezone(new Date(h[b]), o.timezone) : null, m.refreshView();
	        });break;case "maxMode":case "minMode":
	        a.datepickerOptions[b] ? a.$watch(function () {
	          return a.datepickerOptions[b];
	        }, function (c) {
	          m[b] = a[b] = angular.isDefined(c) ? c : datepickerOptions[b], ("minMode" === b && m.modes.indexOf(a.datepickerOptions.datepickerMode) < m.modes.indexOf(m[b]) || "maxMode" === b && m.modes.indexOf(a.datepickerOptions.datepickerMode) > m.modes.indexOf(m[b])) && (a.datepickerMode = m[b], a.datepickerOptions.datepickerMode = m[b]);
	        }) : m[b] = a[b] = h[b] || null;}
	  }), a.uniqueId = "datepicker-" + a.$id + "-" + Math.floor(1e4 * Math.random()), a.disabled = angular.isDefined(b.disabled) || !1, angular.isDefined(b.ngDisabled) && p.push(a.$parent.$watch(b.ngDisabled, function (b) {
	    a.disabled = b, m.refreshView();
	  })), a.isActive = function (b) {
	    return 0 === m.compare(b.date, m.activeDate) ? (a.activeDateId = b.uid, !0) : !1;
	  }, this.init = function (b) {
	    n = b, o = b.$options || h.ngModelOptions, a.datepickerOptions.initDate ? (m.activeDate = k.fromTimezone(a.datepickerOptions.initDate, o.timezone) || new Date(), a.$watch("datepickerOptions.initDate", function (a) {
	      a && (n.$isEmpty(n.$modelValue) || n.$invalid) && (m.activeDate = k.fromTimezone(a, o.timezone), m.refreshView());
	    })) : m.activeDate = new Date();var c = n.$modelValue ? new Date(n.$modelValue) : new Date();this.activeDate = isNaN(c) ? k.fromTimezone(new Date(), o.timezone) : k.fromTimezone(c, o.timezone), n.$render = function () {
	      m.render();
	    };
	  }, this.render = function () {
	    if (n.$viewValue) {
	      var a = new Date(n.$viewValue),
	          b = !isNaN(a);b ? this.activeDate = k.fromTimezone(a, o.timezone) : j || f.error('Datepicker directive: "ng-model" value must be a Date object');
	    }this.refreshView();
	  }, this.refreshView = function () {
	    if (this.element) {
	      a.selectedDt = null, this._refreshView(), a.activeDt && (a.activeDateId = a.activeDt.uid);var b = n.$viewValue ? new Date(n.$viewValue) : null;b = k.fromTimezone(b, o.timezone), n.$setValidity("dateDisabled", !b || this.element && !this.isDisabled(b));
	    }
	  }, this.createDateObject = function (b, c) {
	    var d = n.$viewValue ? new Date(n.$viewValue) : null;d = k.fromTimezone(d, o.timezone);var e = new Date();e = k.fromTimezone(e, o.timezone);var f = this.compare(b, e),
	        g = { date: b, label: k.filter(b, c), selected: d && 0 === this.compare(b, d), disabled: this.isDisabled(b), past: 0 > f, current: 0 === f, future: f > 0, customClass: this.customClass(b) || null };return d && 0 === this.compare(b, d) && (a.selectedDt = g), m.activeDate && 0 === this.compare(g.date, m.activeDate) && (a.activeDt = g), g;
	  }, this.isDisabled = function (b) {
	    return a.disabled || this.minDate && this.compare(b, this.minDate) < 0 || this.maxDate && this.compare(b, this.maxDate) > 0 || a.dateDisabled && a.dateDisabled({ date: b, mode: a.datepickerMode });
	  }, this.customClass = function (b) {
	    return a.customClass({ date: b, mode: a.datepickerMode });
	  }, this.split = function (a, b) {
	    for (var c = []; a.length > 0;) {
	      c.push(a.splice(0, b));
	    }return c;
	  }, a.select = function (b) {
	    if (a.datepickerMode === m.minMode) {
	      var c = n.$viewValue ? k.fromTimezone(new Date(n.$viewValue), o.timezone) : new Date(0, 0, 0, 0, 0, 0, 0);c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), c = k.toTimezone(c, o.timezone), n.$setViewValue(c), n.$render();
	    } else m.activeDate = b, l(m.modes[m.modes.indexOf(a.datepickerMode) - 1]), a.$emit("uib:datepicker.mode");a.$broadcast("uib:datepicker.focus");
	  }, a.move = function (a) {
	    var b = m.activeDate.getFullYear() + a * (m.step.years || 0),
	        c = m.activeDate.getMonth() + a * (m.step.months || 0);m.activeDate.setFullYear(b, c, 1), m.refreshView();
	  }, a.toggleMode = function (b) {
	    b = b || 1, a.datepickerMode === m.maxMode && 1 === b || a.datepickerMode === m.minMode && -1 === b || (l(m.modes[m.modes.indexOf(a.datepickerMode) + b]), a.$emit("uib:datepicker.mode"));
	  }, a.keys = { 13: "enter", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home", 37: "left", 38: "up", 39: "right", 40: "down" };var q = function q() {
	    m.element[0].focus();
	  };a.$on("uib:datepicker.focus", q), a.keydown = function (b) {
	    var c = a.keys[b.which];if (c && !b.shiftKey && !b.altKey && !a.disabled) if (b.preventDefault(), m.shortcutPropagation || b.stopPropagation(), "enter" === c || "space" === c) {
	      if (m.isDisabled(m.activeDate)) return;a.select(m.activeDate);
	    } else !b.ctrlKey || "up" !== c && "down" !== c ? (m.handleKeyDown(c, b), m.refreshView()) : a.toggleMode("up" === c ? 1 : -1);
	  }, a.$on("$destroy", function () {
	    for (; p.length;) {
	      p.shift()();
	    }
	  });
	}]).controller("UibDaypickerController", ["$scope", "$element", "dateFilter", function (a, b, c) {
	  function d(a, b) {
	    return 1 !== b || a % 4 !== 0 || a % 100 === 0 && a % 400 !== 0 ? f[b] : 29;
	  }function e(a) {
	    var b = new Date(a);b.setDate(b.getDate() + 4 - (b.getDay() || 7));var c = b.getTime();return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1;
	  }var f = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];this.step = { months: 1 }, this.element = b, this.init = function (b) {
	    angular.extend(b, this), a.showWeeks = b.showWeeks, b.refreshView();
	  }, this.getDates = function (a, b) {
	    for (var c, d = new Array(b), e = new Date(a), f = 0; b > f;) {
	      c = new Date(e), d[f++] = c, e.setDate(e.getDate() + 1);
	    }return d;
	  }, this._refreshView = function () {
	    var b = this.activeDate.getFullYear(),
	        d = this.activeDate.getMonth(),
	        f = new Date(this.activeDate);f.setFullYear(b, d, 1);var g = this.startingDay - f.getDay(),
	        h = g > 0 ? 7 - g : -g,
	        i = new Date(f);h > 0 && i.setDate(-h + 1);for (var j = this.getDates(i, 42), k = 0; 42 > k; k++) {
	      j[k] = angular.extend(this.createDateObject(j[k], this.formatDay), { secondary: j[k].getMonth() !== d, uid: a.uniqueId + "-" + k });
	    }a.labels = new Array(7);for (var l = 0; 7 > l; l++) {
	      a.labels[l] = { abbr: c(j[l].date, this.formatDayHeader), full: c(j[l].date, "EEEE") };
	    }if (a.title = c(this.activeDate, this.formatDayTitle), a.rows = this.split(j, 7), a.showWeeks) {
	      a.weekNumbers = [];for (var m = (11 - this.startingDay) % 7, n = a.rows.length, o = 0; n > o; o++) {
	        a.weekNumbers.push(e(a.rows[o][m].date));
	      }
	    }
	  }, this.compare = function (a, b) {
	    var c = new Date(a.getFullYear(), a.getMonth(), a.getDate()),
	        d = new Date(b.getFullYear(), b.getMonth(), b.getDate());return c.setFullYear(a.getFullYear()), d.setFullYear(b.getFullYear()), c - d;
	  }, this.handleKeyDown = function (a, b) {
	    var c = this.activeDate.getDate();if ("left" === a) c -= 1;else if ("up" === a) c -= 7;else if ("right" === a) c += 1;else if ("down" === a) c += 7;else if ("pageup" === a || "pagedown" === a) {
	      var e = this.activeDate.getMonth() + ("pageup" === a ? -1 : 1);this.activeDate.setMonth(e, 1), c = Math.min(d(this.activeDate.getFullYear(), this.activeDate.getMonth()), c);
	    } else "home" === a ? c = 1 : "end" === a && (c = d(this.activeDate.getFullYear(), this.activeDate.getMonth()));this.activeDate.setDate(c);
	  };
	}]).controller("UibMonthpickerController", ["$scope", "$element", "dateFilter", function (a, b, c) {
	  this.step = { years: 1 }, this.element = b, this.init = function (a) {
	    angular.extend(a, this), a.refreshView();
	  }, this._refreshView = function () {
	    for (var b, d = new Array(12), e = this.activeDate.getFullYear(), f = 0; 12 > f; f++) {
	      b = new Date(this.activeDate), b.setFullYear(e, f, 1), d[f] = angular.extend(this.createDateObject(b, this.formatMonth), { uid: a.uniqueId + "-" + f });
	    }a.title = c(this.activeDate, this.formatMonthTitle), a.rows = this.split(d, 3);
	  }, this.compare = function (a, b) {
	    var c = new Date(a.getFullYear(), a.getMonth()),
	        d = new Date(b.getFullYear(), b.getMonth());return c.setFullYear(a.getFullYear()), d.setFullYear(b.getFullYear()), c - d;
	  }, this.handleKeyDown = function (a, b) {
	    var c = this.activeDate.getMonth();if ("left" === a) c -= 1;else if ("up" === a) c -= 3;else if ("right" === a) c += 1;else if ("down" === a) c += 3;else if ("pageup" === a || "pagedown" === a) {
	      var d = this.activeDate.getFullYear() + ("pageup" === a ? -1 : 1);this.activeDate.setFullYear(d);
	    } else "home" === a ? c = 0 : "end" === a && (c = 11);this.activeDate.setMonth(c);
	  };
	}]).controller("UibYearpickerController", ["$scope", "$element", "dateFilter", function (a, b, c) {
	  function d(a) {
	    return parseInt((a - 1) / f, 10) * f + 1;
	  }var e, f;this.element = b, this.yearpickerInit = function () {
	    e = this.yearColumns, f = this.yearRows * e, this.step = { years: f };
	  }, this._refreshView = function () {
	    for (var b, c = new Array(f), g = 0, h = d(this.activeDate.getFullYear()); f > g; g++) {
	      b = new Date(this.activeDate), b.setFullYear(h + g, 0, 1), c[g] = angular.extend(this.createDateObject(b, this.formatYear), { uid: a.uniqueId + "-" + g });
	    }a.title = [c[0].label, c[f - 1].label].join(" - "), a.rows = this.split(c, e), a.columns = e;
	  }, this.compare = function (a, b) {
	    return a.getFullYear() - b.getFullYear();
	  }, this.handleKeyDown = function (a, b) {
	    var c = this.activeDate.getFullYear();"left" === a ? c -= 1 : "up" === a ? c -= e : "right" === a ? c += 1 : "down" === a ? c += e : "pageup" === a || "pagedown" === a ? c += ("pageup" === a ? -1 : 1) * f : "home" === a ? c = d(this.activeDate.getFullYear()) : "end" === a && (c = d(this.activeDate.getFullYear()) + f - 1), this.activeDate.setFullYear(c);
	  };
	}]).directive("uibDatepicker", function () {
	  return { replace: !0, templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/datepicker/datepicker.html";
	    }, scope: { datepickerOptions: "=?" }, require: ["uibDatepicker", "^ngModel"], controller: "UibDatepickerController", controllerAs: "datepicker", link: function link(a, b, c, d) {
	      var e = d[0],
	          f = d[1];e.init(f);
	    } };
	}).directive("uibDaypicker", function () {
	  return { replace: !0, templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/datepicker/day.html";
	    }, require: ["^uibDatepicker", "uibDaypicker"], controller: "UibDaypickerController", link: function link(a, b, c, d) {
	      var e = d[0],
	          f = d[1];f.init(e);
	    } };
	}).directive("uibMonthpicker", function () {
	  return { replace: !0, templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/datepicker/month.html";
	    }, require: ["^uibDatepicker", "uibMonthpicker"], controller: "UibMonthpickerController", link: function link(a, b, c, d) {
	      var e = d[0],
	          f = d[1];f.init(e);
	    } };
	}).directive("uibYearpicker", function () {
	  return { replace: !0, templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/datepicker/year.html";
	    }, require: ["^uibDatepicker", "uibYearpicker"], controller: "UibYearpickerController", link: function link(a, b, c, d) {
	      var e = d[0];angular.extend(e, d[1]), e.yearpickerInit(), e.refreshView();
	    } };
	}), angular.module("ui.bootstrap.position", []).factory("$uibPosition", ["$document", "$window", function (a, b) {
	  var c,
	      d,
	      e = { normal: /(auto|scroll)/, hidden: /(auto|scroll|hidden)/ },
	      f = { auto: /\s?auto?\s?/i, primary: /^(top|bottom|left|right)$/, secondary: /^(top|bottom|left|right|center)$/, vertical: /^(top|bottom)$/ },
	      g = /(HTML|BODY)/;return { getRawNode: function getRawNode(a) {
	      return a.nodeName ? a : a[0] || a;
	    }, parseStyle: function parseStyle(a) {
	      return a = parseFloat(a), isFinite(a) ? a : 0;
	    }, offsetParent: function offsetParent(c) {
	      function d(a) {
	        return "static" === (b.getComputedStyle(a).position || "static");
	      }c = this.getRawNode(c);for (var e = c.offsetParent || a[0].documentElement; e && e !== a[0].documentElement && d(e);) {
	        e = e.offsetParent;
	      }return e || a[0].documentElement;
	    }, scrollbarWidth: function scrollbarWidth(e) {
	      if (e) {
	        if (angular.isUndefined(d)) {
	          var f = a.find("body");f.addClass("uib-position-body-scrollbar-measure"), d = b.innerWidth - f[0].clientWidth, d = isFinite(d) ? d : 0, f.removeClass("uib-position-body-scrollbar-measure");
	        }return d;
	      }if (angular.isUndefined(c)) {
	        var g = angular.element('<div class="uib-position-scrollbar-measure"></div>');a.find("body").append(g), c = g[0].offsetWidth - g[0].clientWidth, c = isFinite(c) ? c : 0, g.remove();
	      }return c;
	    }, scrollbarPadding: function scrollbarPadding(a) {
	      a = this.getRawNode(a);var c = b.getComputedStyle(a),
	          d = this.parseStyle(c.paddingRight),
	          e = this.parseStyle(c.paddingBottom),
	          f = this.scrollParent(a, !1, !0),
	          h = this.scrollbarWidth(f, g.test(f.tagName));return { scrollbarWidth: h, widthOverflow: f.scrollWidth > f.clientWidth, right: d + h, originalRight: d, heightOverflow: f.scrollHeight > f.clientHeight, bottom: e + h, originalBottom: e };
	    }, isScrollable: function isScrollable(a, c) {
	      a = this.getRawNode(a);var d = c ? e.hidden : e.normal,
	          f = b.getComputedStyle(a);return d.test(f.overflow + f.overflowY + f.overflowX);
	    }, scrollParent: function scrollParent(c, d, f) {
	      c = this.getRawNode(c);var g = d ? e.hidden : e.normal,
	          h = a[0].documentElement,
	          i = b.getComputedStyle(c);if (f && g.test(i.overflow + i.overflowY + i.overflowX)) return c;var j = "absolute" === i.position,
	          k = c.parentElement || h;if (k === h || "fixed" === i.position) return h;for (; k.parentElement && k !== h;) {
	        var l = b.getComputedStyle(k);if (j && "static" !== l.position && (j = !1), !j && g.test(l.overflow + l.overflowY + l.overflowX)) break;k = k.parentElement;
	      }return k;
	    }, position: function position(c, d) {
	      c = this.getRawNode(c);var e = this.offset(c);if (d) {
	        var f = b.getComputedStyle(c);e.top -= this.parseStyle(f.marginTop), e.left -= this.parseStyle(f.marginLeft);
	      }var g = this.offsetParent(c),
	          h = { top: 0, left: 0 };return g !== a[0].documentElement && (h = this.offset(g), h.top += g.clientTop - g.scrollTop, h.left += g.clientLeft - g.scrollLeft), { width: Math.round(angular.isNumber(e.width) ? e.width : c.offsetWidth), height: Math.round(angular.isNumber(e.height) ? e.height : c.offsetHeight), top: Math.round(e.top - h.top), left: Math.round(e.left - h.left) };
	    }, offset: function offset(c) {
	      c = this.getRawNode(c);var d = c.getBoundingClientRect();return { width: Math.round(angular.isNumber(d.width) ? d.width : c.offsetWidth), height: Math.round(angular.isNumber(d.height) ? d.height : c.offsetHeight), top: Math.round(d.top + (b.pageYOffset || a[0].documentElement.scrollTop)), left: Math.round(d.left + (b.pageXOffset || a[0].documentElement.scrollLeft)) };
	    }, viewportOffset: function viewportOffset(c, d, e) {
	      c = this.getRawNode(c), e = e !== !1;var f = c.getBoundingClientRect(),
	          g = { top: 0, left: 0, bottom: 0, right: 0 },
	          h = d ? a[0].documentElement : this.scrollParent(c),
	          i = h.getBoundingClientRect();if (g.top = i.top + h.clientTop, g.left = i.left + h.clientLeft, h === a[0].documentElement && (g.top += b.pageYOffset, g.left += b.pageXOffset), g.bottom = g.top + h.clientHeight, g.right = g.left + h.clientWidth, e) {
	        var j = b.getComputedStyle(h);g.top += this.parseStyle(j.paddingTop), g.bottom -= this.parseStyle(j.paddingBottom), g.left += this.parseStyle(j.paddingLeft), g.right -= this.parseStyle(j.paddingRight);
	      }return { top: Math.round(f.top - g.top), bottom: Math.round(g.bottom - f.bottom), left: Math.round(f.left - g.left), right: Math.round(g.right - f.right) };
	    }, parsePlacement: function parsePlacement(a) {
	      var b = f.auto.test(a);return b && (a = a.replace(f.auto, "")), a = a.split("-"), a[0] = a[0] || "top", f.primary.test(a[0]) || (a[0] = "top"), a[1] = a[1] || "center", f.secondary.test(a[1]) || (a[1] = "center"), b ? a[2] = !0 : a[2] = !1, a;
	    }, positionElements: function positionElements(a, c, d, e) {
	      a = this.getRawNode(a), c = this.getRawNode(c);var g = angular.isDefined(c.offsetWidth) ? c.offsetWidth : c.prop("offsetWidth"),
	          h = angular.isDefined(c.offsetHeight) ? c.offsetHeight : c.prop("offsetHeight");d = this.parsePlacement(d);var i = e ? this.offset(a) : this.position(a),
	          j = { top: 0, left: 0, placement: "" };if (d[2]) {
	        var k = this.viewportOffset(a, e),
	            l = b.getComputedStyle(c),
	            m = { width: g + Math.round(Math.abs(this.parseStyle(l.marginLeft) + this.parseStyle(l.marginRight))), height: h + Math.round(Math.abs(this.parseStyle(l.marginTop) + this.parseStyle(l.marginBottom))) };if (d[0] = "top" === d[0] && m.height > k.top && m.height <= k.bottom ? "bottom" : "bottom" === d[0] && m.height > k.bottom && m.height <= k.top ? "top" : "left" === d[0] && m.width > k.left && m.width <= k.right ? "right" : "right" === d[0] && m.width > k.right && m.width <= k.left ? "left" : d[0], d[1] = "top" === d[1] && m.height - i.height > k.bottom && m.height - i.height <= k.top ? "bottom" : "bottom" === d[1] && m.height - i.height > k.top && m.height - i.height <= k.bottom ? "top" : "left" === d[1] && m.width - i.width > k.right && m.width - i.width <= k.left ? "right" : "right" === d[1] && m.width - i.width > k.left && m.width - i.width <= k.right ? "left" : d[1], "center" === d[1]) if (f.vertical.test(d[0])) {
	          var n = i.width / 2 - g / 2;k.left + n < 0 && m.width - i.width <= k.right ? d[1] = "left" : k.right + n < 0 && m.width - i.width <= k.left && (d[1] = "right");
	        } else {
	          var o = i.height / 2 - m.height / 2;k.top + o < 0 && m.height - i.height <= k.bottom ? d[1] = "top" : k.bottom + o < 0 && m.height - i.height <= k.top && (d[1] = "bottom");
	        }
	      }switch (d[0]) {case "top":
	          j.top = i.top - h;break;case "bottom":
	          j.top = i.top + i.height;break;case "left":
	          j.left = i.left - g;break;case "right":
	          j.left = i.left + i.width;}switch (d[1]) {case "top":
	          j.top = i.top;break;case "bottom":
	          j.top = i.top + i.height - h;break;case "left":
	          j.left = i.left;break;case "right":
	          j.left = i.left + i.width - g;break;case "center":
	          f.vertical.test(d[0]) ? j.left = i.left + i.width / 2 - g / 2 : j.top = i.top + i.height / 2 - h / 2;}return j.top = Math.round(j.top), j.left = Math.round(j.left), j.placement = "center" === d[1] ? d[0] : d[0] + "-" + d[1], j;
	    }, positionArrow: function positionArrow(a, c) {
	      a = this.getRawNode(a);var d = a.querySelector(".tooltip-inner, .popover-inner");if (d) {
	        var e = angular.element(d).hasClass("tooltip-inner"),
	            g = e ? a.querySelector(".tooltip-arrow") : a.querySelector(".arrow");if (g) {
	          var h = { top: "", bottom: "", left: "", right: "" };if (c = this.parsePlacement(c), "center" === c[1]) return void angular.element(g).css(h);var i = "border-" + c[0] + "-width",
	              j = b.getComputedStyle(g)[i],
	              k = "border-";k += f.vertical.test(c[0]) ? c[0] + "-" + c[1] : c[1] + "-" + c[0], k += "-radius";var l = b.getComputedStyle(e ? d : a)[k];switch (c[0]) {case "top":
	              h.bottom = e ? "0" : "-" + j;break;case "bottom":
	              h.top = e ? "0" : "-" + j;break;case "left":
	              h.right = e ? "0" : "-" + j;break;case "right":
	              h.left = e ? "0" : "-" + j;}h[c[1]] = l, angular.element(g).css(h);
	        }
	      }
	    } };
	}]), angular.module("ui.bootstrap.datepickerPopup", ["ui.bootstrap.datepicker", "ui.bootstrap.position"]).value("$datepickerPopupLiteralWarning", !0).constant("uibDatepickerPopupConfig", { altInputFormats: [], appendToBody: !1, clearText: "Clear", closeOnDateSelection: !0, closeText: "Done", currentText: "Today", datepickerPopup: "yyyy-MM-dd", datepickerPopupTemplateUrl: "uib/template/datepickerPopup/popup.html", datepickerTemplateUrl: "uib/template/datepicker/datepicker.html", html5Types: { date: "yyyy-MM-dd", "datetime-local": "yyyy-MM-ddTHH:mm:ss.sss", month: "yyyy-MM" }, onOpenFocus: !0, showButtonBar: !0, placement: "auto bottom-left" }).controller("UibDatepickerPopupController", ["$scope", "$element", "$attrs", "$compile", "$log", "$parse", "$window", "$document", "$rootScope", "$uibPosition", "dateFilter", "uibDateParser", "uibDatepickerPopupConfig", "$timeout", "uibDatepickerConfig", "$datepickerPopupLiteralWarning", function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
	  function q(b) {
	    var c = l.parse(b, w, a.date);if (isNaN(c)) for (var d = 0; d < I.length; d++) {
	      if (c = l.parse(b, I[d], a.date), !isNaN(c)) return c;
	    }return c;
	  }function r(a) {
	    if (angular.isNumber(a) && (a = new Date(a)), !a) return null;if (angular.isDate(a) && !isNaN(a)) return a;if (angular.isString(a)) {
	      var b = q(a);if (!isNaN(b)) return l.toTimezone(b, J);
	    }return F.$options && F.$options.allowInvalid ? a : void 0;
	  }function s(a, b) {
	    var d = a || b;return c.ngRequired || d ? (angular.isNumber(d) && (d = new Date(d)), d ? angular.isDate(d) && !isNaN(d) ? !0 : angular.isString(d) ? !isNaN(q(b)) : !1 : !0) : !0;
	  }function t(c) {
	    if (a.isOpen || !a.disabled) {
	      var d = H[0],
	          e = b[0].contains(c.target),
	          f = void 0 !== d.contains && d.contains(c.target);!a.isOpen || e || f || a.$apply(function () {
	        a.isOpen = !1;
	      });
	    }
	  }function u(c) {
	    27 === c.which && a.isOpen ? (c.preventDefault(), c.stopPropagation(), a.$apply(function () {
	      a.isOpen = !1;
	    }), b[0].focus()) : 40 !== c.which || a.isOpen || (c.preventDefault(), c.stopPropagation(), a.$apply(function () {
	      a.isOpen = !0;
	    }));
	  }function v() {
	    if (a.isOpen) {
	      var d = angular.element(H[0].querySelector(".uib-datepicker-popup")),
	          e = c.popupPlacement ? c.popupPlacement : m.placement,
	          f = j.positionElements(b, d, e, y);d.css({ top: f.top + "px", left: f.left + "px" }), d.hasClass("uib-position-measure") && d.removeClass("uib-position-measure");
	    }
	  }var w,
	      x,
	      y,
	      z,
	      A,
	      B,
	      C,
	      D,
	      E,
	      F,
	      G,
	      H,
	      I,
	      J,
	      K = !1,
	      L = [];this.init = function (e) {
	    if (F = e, G = e.$options, x = angular.isDefined(c.closeOnDateSelection) ? a.$parent.$eval(c.closeOnDateSelection) : m.closeOnDateSelection, y = angular.isDefined(c.datepickerAppendToBody) ? a.$parent.$eval(c.datepickerAppendToBody) : m.appendToBody, z = angular.isDefined(c.onOpenFocus) ? a.$parent.$eval(c.onOpenFocus) : m.onOpenFocus, A = angular.isDefined(c.datepickerPopupTemplateUrl) ? c.datepickerPopupTemplateUrl : m.datepickerPopupTemplateUrl, B = angular.isDefined(c.datepickerTemplateUrl) ? c.datepickerTemplateUrl : m.datepickerTemplateUrl, I = angular.isDefined(c.altInputFormats) ? a.$parent.$eval(c.altInputFormats) : m.altInputFormats, a.showButtonBar = angular.isDefined(c.showButtonBar) ? a.$parent.$eval(c.showButtonBar) : m.showButtonBar, m.html5Types[c.type] ? (w = m.html5Types[c.type], K = !0) : (w = c.uibDatepickerPopup || m.datepickerPopup, c.$observe("uibDatepickerPopup", function (a, b) {
	      var c = a || m.datepickerPopup;if (c !== w && (w = c, F.$modelValue = null, !w)) throw new Error("uibDatepickerPopup must have a date format specified.");
	    })), !w) throw new Error("uibDatepickerPopup must have a date format specified.");if (K && c.uibDatepickerPopup) throw new Error("HTML5 date input types do not support custom formats.");C = angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"), G ? (J = G.timezone, a.ngModelOptions = angular.copy(G), a.ngModelOptions.timezone = null, a.ngModelOptions.updateOnDefault === !0 && (a.ngModelOptions.updateOn = a.ngModelOptions.updateOn ? a.ngModelOptions.updateOn + " default" : "default"), C.attr("ng-model-options", "ngModelOptions")) : J = null, C.attr({ "ng-model": "date", "ng-change": "dateSelection(date)", "template-url": A }), D = angular.element(C.children()[0]), D.attr("template-url", B), a.datepickerOptions || (a.datepickerOptions = {}), K && "month" === c.type && (a.datepickerOptions.datepickerMode = "month", a.datepickerOptions.minMode = "month"), D.attr("datepicker-options", "datepickerOptions"), K ? F.$formatters.push(function (b) {
	      return a.date = l.fromTimezone(b, J), b;
	    }) : (F.$$parserName = "date", F.$validators.date = s, F.$parsers.unshift(r), F.$formatters.push(function (b) {
	      return F.$isEmpty(b) ? (a.date = b, b) : (angular.isNumber(b) && (b = new Date(b)), a.date = l.fromTimezone(b, J), l.filter(a.date, w));
	    })), F.$viewChangeListeners.push(function () {
	      a.date = q(F.$viewValue);
	    }), b.on("keydown", u), H = d(C)(a), C.remove(), y ? h.find("body").append(H) : b.after(H), a.$on("$destroy", function () {
	      for (a.isOpen === !0 && (i.$$phase || a.$apply(function () {
	        a.isOpen = !1;
	      })), H.remove(), b.off("keydown", u), h.off("click", t), E && E.off("scroll", v), angular.element(g).off("resize", v); L.length;) {
	        L.shift()();
	      }
	    });
	  }, a.getText = function (b) {
	    return a[b + "Text"] || m[b + "Text"];
	  }, a.isDisabled = function (b) {
	    "today" === b && (b = l.fromTimezone(new Date(), J));var c = {};return angular.forEach(["minDate", "maxDate"], function (b) {
	      a.datepickerOptions[b] ? angular.isDate(a.datepickerOptions[b]) ? c[b] = l.fromTimezone(new Date(a.datepickerOptions[b]), J) : (p && e.warn("Literal date support has been deprecated, please switch to date object usage"), c[b] = new Date(k(a.datepickerOptions[b], "medium"))) : c[b] = null;
	    }), a.datepickerOptions && c.minDate && a.compare(b, c.minDate) < 0 || c.maxDate && a.compare(b, c.maxDate) > 0;
	  }, a.compare = function (a, b) {
	    return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate());
	  }, a.dateSelection = function (c) {
	    angular.isDefined(c) && (a.date = c);var d = a.date ? l.filter(a.date, w) : null;b.val(d), F.$setViewValue(d), x && (a.isOpen = !1, b[0].focus());
	  }, a.keydown = function (c) {
	    27 === c.which && (c.stopPropagation(), a.isOpen = !1, b[0].focus());
	  }, a.select = function (b, c) {
	    if (c.stopPropagation(), "today" === b) {
	      var d = new Date();angular.isDate(a.date) ? (b = new Date(a.date), b.setFullYear(d.getFullYear(), d.getMonth(), d.getDate())) : b = new Date(d.setHours(0, 0, 0, 0));
	    }a.dateSelection(b);
	  }, a.close = function (c) {
	    c.stopPropagation(), a.isOpen = !1, b[0].focus();
	  }, a.disabled = angular.isDefined(c.disabled) || !1, c.ngDisabled && L.push(a.$parent.$watch(f(c.ngDisabled), function (b) {
	    a.disabled = b;
	  })), a.$watch("isOpen", function (d) {
	    d ? a.disabled ? a.isOpen = !1 : n(function () {
	      v(), z && a.$broadcast("uib:datepicker.focus"), h.on("click", t);var d = c.popupPlacement ? c.popupPlacement : m.placement;y || j.parsePlacement(d)[2] ? (E = E || angular.element(j.scrollParent(b)), E && E.on("scroll", v)) : E = null, angular.element(g).on("resize", v);
	    }, 0, !1) : (h.off("click", t), E && E.off("scroll", v), angular.element(g).off("resize", v));
	  }), a.$on("uib:datepicker.mode", function () {
	    n(v, 0, !1);
	  });
	}]).directive("uibDatepickerPopup", function () {
	  return { require: ["ngModel", "uibDatepickerPopup"], controller: "UibDatepickerPopupController", scope: { datepickerOptions: "=?", isOpen: "=?", currentText: "@", clearText: "@", closeText: "@" }, link: function link(a, b, c, d) {
	      var e = d[0],
	          f = d[1];f.init(e);
	    } };
	}).directive("uibDatepickerPopupWrap", function () {
	  return { replace: !0, transclude: !0, templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/datepickerPopup/popup.html";
	    } };
	}), angular.module("ui.bootstrap.debounce", []).factory("$$debounce", ["$timeout", function (a) {
	  return function (b, c) {
	    var d;return function () {
	      var e = this,
	          f = Array.prototype.slice.call(arguments);d && a.cancel(d), d = a(function () {
	        b.apply(e, f);
	      }, c);
	    };
	  };
	}]), angular.module("ui.bootstrap.dropdown", ["ui.bootstrap.position"]).constant("uibDropdownConfig", { appendToOpenClass: "uib-dropdown-open", openClass: "open" }).service("uibDropdownService", ["$document", "$rootScope", function (a, b) {
	  var c = null;this.open = function (b, f) {
	    c || (a.on("click", d), f.on("keydown", e)), c && c !== b && (c.isOpen = !1), c = b;
	  }, this.close = function (b, f) {
	    c === b && (c = null, a.off("click", d), f.off("keydown", e));
	  };var d = function d(a) {
	    if (c && !(a && "disabled" === c.getAutoClose() || a && 3 === a.which)) {
	      var d = c.getToggleElement();if (!(a && d && d[0].contains(a.target))) {
	        var e = c.getDropdownElement();a && "outsideClick" === c.getAutoClose() && e && e[0].contains(a.target) || (c.isOpen = !1, b.$$phase || c.$apply());
	      }
	    }
	  },
	      e = function e(a) {
	    27 === a.which ? (a.stopPropagation(), c.focusToggleElement(), d()) : c.isKeynavEnabled() && -1 !== [38, 40].indexOf(a.which) && c.isOpen && (a.preventDefault(), a.stopPropagation(), c.focusDropdownEntry(a.which));
	  };
	}]).controller("UibDropdownController", ["$scope", "$element", "$attrs", "$parse", "uibDropdownConfig", "uibDropdownService", "$animate", "$uibPosition", "$document", "$compile", "$templateRequest", function (a, b, c, d, e, f, g, h, i, j, k) {
	  var l,
	      m,
	      n = this,
	      o = a.$new(),
	      p = e.appendToOpenClass,
	      q = e.openClass,
	      r = angular.noop,
	      s = c.onToggle ? d(c.onToggle) : angular.noop,
	      t = !1,
	      u = null,
	      v = !1,
	      w = i.find("body");b.addClass("dropdown"), this.init = function () {
	    if (c.isOpen && (m = d(c.isOpen), r = m.assign, a.$watch(m, function (a) {
	      o.isOpen = !!a;
	    })), angular.isDefined(c.dropdownAppendTo)) {
	      var e = d(c.dropdownAppendTo)(o);e && (u = angular.element(e));
	    }t = angular.isDefined(c.dropdownAppendToBody), v = angular.isDefined(c.keyboardNav), t && !u && (u = w), u && n.dropdownMenu && (u.append(n.dropdownMenu), b.on("$destroy", function () {
	      n.dropdownMenu.remove();
	    }));
	  }, this.toggle = function (a) {
	    return o.isOpen = arguments.length ? !!a : !o.isOpen, angular.isFunction(r) && r(o, o.isOpen), o.isOpen;
	  }, this.isOpen = function () {
	    return o.isOpen;
	  }, o.getToggleElement = function () {
	    return n.toggleElement;
	  }, o.getAutoClose = function () {
	    return c.autoClose || "always";
	  }, o.getElement = function () {
	    return b;
	  }, o.isKeynavEnabled = function () {
	    return v;
	  }, o.focusDropdownEntry = function (a) {
	    var c = n.dropdownMenu ? angular.element(n.dropdownMenu).find("a") : b.find("ul").eq(0).find("a");switch (a) {case 40:
	        angular.isNumber(n.selectedOption) ? n.selectedOption = n.selectedOption === c.length - 1 ? n.selectedOption : n.selectedOption + 1 : n.selectedOption = 0;break;case 38:
	        angular.isNumber(n.selectedOption) ? n.selectedOption = 0 === n.selectedOption ? 0 : n.selectedOption - 1 : n.selectedOption = c.length - 1;}c[n.selectedOption].focus();
	  }, o.getDropdownElement = function () {
	    return n.dropdownMenu;
	  }, o.focusToggleElement = function () {
	    n.toggleElement && n.toggleElement[0].focus();
	  }, o.$watch("isOpen", function (c, d) {
	    if (u && n.dropdownMenu) {
	      var e,
	          i,
	          m,
	          v = h.positionElements(b, n.dropdownMenu, "bottom-left", !0);if (e = { top: v.top + "px", display: c ? "block" : "none" }, i = n.dropdownMenu.hasClass("dropdown-menu-right"), i ? (e.left = "auto", m = h.scrollbarWidth(!0), e.right = window.innerWidth - m - (v.left + b.prop("offsetWidth")) + "px") : (e.left = v.left + "px", e.right = "auto"), !t) {
	        var w = h.offset(u);e.top = v.top - w.top + "px", i ? e.right = window.innerWidth - (v.left - w.left + b.prop("offsetWidth")) + "px" : e.left = v.left - w.left + "px";
	      }n.dropdownMenu.css(e);
	    }var x = u ? u : b,
	        y = x.hasClass(u ? p : q);if (y === !c && g[c ? "addClass" : "removeClass"](x, u ? p : q).then(function () {
	      angular.isDefined(c) && c !== d && s(a, { open: !!c });
	    }), c) n.dropdownMenuTemplateUrl && k(n.dropdownMenuTemplateUrl).then(function (a) {
	      l = o.$new(), j(a.trim())(l, function (a) {
	        var b = a;n.dropdownMenu.replaceWith(b), n.dropdownMenu = b;
	      });
	    }), o.focusToggleElement(), f.open(o, b);else {
	      if (n.dropdownMenuTemplateUrl) {
	        l && l.$destroy();var z = angular.element('<ul class="dropdown-menu"></ul>');n.dropdownMenu.replaceWith(z), n.dropdownMenu = z;
	      }f.close(o, b), n.selectedOption = null;
	    }angular.isFunction(r) && r(a, c);
	  });
	}]).directive("uibDropdown", function () {
	  return { controller: "UibDropdownController", link: function link(a, b, c, d) {
	      d.init();
	    } };
	}).directive("uibDropdownMenu", function () {
	  return { restrict: "A", require: "?^uibDropdown", link: function link(a, b, c, d) {
	      if (d && !angular.isDefined(c.dropdownNested)) {
	        b.addClass("dropdown-menu");var e = c.templateUrl;e && (d.dropdownMenuTemplateUrl = e), d.dropdownMenu || (d.dropdownMenu = b);
	      }
	    } };
	}).directive("uibDropdownToggle", function () {
	  return { require: "?^uibDropdown", link: function link(a, b, c, d) {
	      if (d) {
	        b.addClass("dropdown-toggle"), d.toggleElement = b;var e = function e(_e) {
	          _e.preventDefault(), b.hasClass("disabled") || c.disabled || a.$apply(function () {
	            d.toggle();
	          });
	        };b.bind("click", e), b.attr({ "aria-haspopup": !0, "aria-expanded": !1 }), a.$watch(d.isOpen, function (a) {
	          b.attr("aria-expanded", !!a);
	        }), a.$on("$destroy", function () {
	          b.unbind("click", e);
	        });
	      }
	    } };
	}), angular.module("ui.bootstrap.stackedMap", []).factory("$$stackedMap", function () {
	  return { createNew: function createNew() {
	      var a = [];return { add: function add(b, c) {
	          a.push({ key: b, value: c });
	        }, get: function get(b) {
	          for (var c = 0; c < a.length; c++) {
	            if (b === a[c].key) return a[c];
	          }
	        }, keys: function keys() {
	          for (var b = [], c = 0; c < a.length; c++) {
	            b.push(a[c].key);
	          }return b;
	        }, top: function top() {
	          return a[a.length - 1];
	        }, remove: function remove(b) {
	          for (var c = -1, d = 0; d < a.length; d++) {
	            if (b === a[d].key) {
	              c = d;break;
	            }
	          }return a.splice(c, 1)[0];
	        }, removeTop: function removeTop() {
	          return a.splice(a.length - 1, 1)[0];
	        }, length: function length() {
	          return a.length;
	        } };
	    } };
	}), angular.module("ui.bootstrap.modal", ["ui.bootstrap.stackedMap", "ui.bootstrap.position"]).factory("$$multiMap", function () {
	  return { createNew: function createNew() {
	      var a = {};return { entries: function entries() {
	          return Object.keys(a).map(function (b) {
	            return { key: b, value: a[b] };
	          });
	        }, get: function get(b) {
	          return a[b];
	        }, hasKey: function hasKey(b) {
	          return !!a[b];
	        }, keys: function keys() {
	          return Object.keys(a);
	        }, put: function put(b, c) {
	          a[b] || (a[b] = []), a[b].push(c);
	        }, remove: function remove(b, c) {
	          var d = a[b];if (d) {
	            var e = d.indexOf(c);-1 !== e && d.splice(e, 1), d.length || delete a[b];
	          }
	        } };
	    } };
	}).provider("$uibResolve", function () {
	  var a = this;this.resolver = null, this.setResolver = function (a) {
	    this.resolver = a;
	  }, this.$get = ["$injector", "$q", function (b, c) {
	    var d = a.resolver ? b.get(a.resolver) : null;return { resolve: function resolve(a, e, f, g) {
	        if (d) return d.resolve(a, e, f, g);var h = [];return angular.forEach(a, function (a) {
	          angular.isFunction(a) || angular.isArray(a) ? h.push(c.resolve(b.invoke(a))) : angular.isString(a) ? h.push(c.resolve(b.get(a))) : h.push(c.resolve(a));
	        }), c.all(h).then(function (b) {
	          var c = {},
	              d = 0;return angular.forEach(a, function (a, e) {
	            c[e] = b[d++];
	          }), c;
	        });
	      } };
	  }];
	}).directive("uibModalBackdrop", ["$animate", "$injector", "$uibModalStack", function (a, b, c) {
	  function d(b, d, e) {
	    e.modalInClass && (a.addClass(d, e.modalInClass), b.$on(c.NOW_CLOSING_EVENT, function (c, f) {
	      var g = f();b.modalOptions.animation ? a.removeClass(d, e.modalInClass).then(g) : g();
	    }));
	  }return { replace: !0, templateUrl: "uib/template/modal/backdrop.html", compile: function compile(a, b) {
	      return a.addClass(b.backdropClass), d;
	    } };
	}]).directive("uibModalWindow", ["$uibModalStack", "$q", "$animateCss", "$document", function (a, b, c, d) {
	  return { scope: { index: "@" }, replace: !0, transclude: !0, templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/modal/window.html";
	    }, link: function link(e, f, g) {
	      f.addClass(g.windowClass || ""), f.addClass(g.windowTopClass || ""), e.size = g.size, e.close = function (b) {
	        var c = a.getTop();c && c.value.backdrop && "static" !== c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"));
	      }, f.on("click", e.close), e.$isRendered = !0;var h = b.defer();g.$observe("modalRender", function (a) {
	        "true" === a && h.resolve();
	      }), h.promise.then(function () {
	        var h = null;g.modalInClass && (h = c(f, { addClass: g.modalInClass }).start(), e.$on(a.NOW_CLOSING_EVENT, function (a, b) {
	          var d = b();c(f, { removeClass: g.modalInClass }).start().then(d);
	        })), b.when(h).then(function () {
	          var b = a.getTop();if (b && a.modalRendered(b.key), !d[0].activeElement || !f[0].contains(d[0].activeElement)) {
	            var c = f[0].querySelector("[autofocus]");c ? c.focus() : f[0].focus();
	          }
	        });
	      });
	    } };
	}]).directive("uibModalAnimationClass", function () {
	  return { compile: function compile(a, b) {
	      b.modalAnimation && a.addClass(b.uibModalAnimationClass);
	    } };
	}).directive("uibModalTransclude", function () {
	  return { link: function link(a, b, c, d, e) {
	      e(a.$parent, function (a) {
	        b.empty(), b.append(a);
	      });
	    } };
	}).factory("$uibModalStack", ["$animate", "$animateCss", "$document", "$compile", "$rootScope", "$q", "$$multiMap", "$$stackedMap", "$uibPosition", function (a, b, c, d, e, f, g, h, i) {
	  function j(a) {
	    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
	  }function k() {
	    for (var a = -1, b = v.keys(), c = 0; c < b.length; c++) {
	      v.get(b[c]).value.backdrop && (a = c);
	    }return a > -1 && y > a && (a = y), a;
	  }function l(a, b) {
	    var c = v.get(a).value,
	        d = c.appendTo;v.remove(a), z = v.top(), z && (y = parseInt(z.value.modalDomEl.attr("index"), 10)), o(c.modalDomEl, c.modalScope, function () {
	      var b = c.openedClass || u;w.remove(b, a);var e = w.hasKey(b);d.toggleClass(b, e), !e && t && t.heightOverflow && t.scrollbarWidth && (t.originalRight ? d.css({ paddingRight: t.originalRight + "px" }) : d.css({ paddingRight: "" }), t = null), m(!0);
	    }, c.closedDeferred), n(), b && b.focus ? b.focus() : d.focus && d.focus();
	  }function m(a) {
	    var b;v.length() > 0 && (b = v.top().value, b.modalDomEl.toggleClass(b.windowTopClass || "", a));
	  }function n() {
	    if (r && -1 === k()) {
	      var a = s;o(r, s, function () {
	        a = null;
	      }), r = void 0, s = void 0;
	    }
	  }function o(b, c, d, e) {
	    function g() {
	      g.done || (g.done = !0, a.leave(b).then(function () {
	        b.remove(), e && e.resolve();
	      }), c.$destroy(), d && d());
	    }var h,
	        i = null,
	        j = function j() {
	      return h || (h = f.defer(), i = h.promise), function () {
	        h.resolve();
	      };
	    };return c.$broadcast(x.NOW_CLOSING_EVENT, j), f.when(i).then(g);
	  }function p(a) {
	    if (a.isDefaultPrevented()) return a;var b = v.top();if (b) switch (a.which) {case 27:
	        b.value.keyboard && (a.preventDefault(), e.$apply(function () {
	          x.dismiss(b.key, "escape key press");
	        }));break;case 9:
	        var c = x.loadFocusElementList(b),
	            d = !1;a.shiftKey ? (x.isFocusInFirstItem(a, c) || x.isModalFocused(a, b)) && (d = x.focusLastFocusableElement(c)) : x.isFocusInLastItem(a, c) && (d = x.focusFirstFocusableElement(c)), d && (a.preventDefault(), a.stopPropagation());}
	  }function q(a, b, c) {
	    return !a.value.modalScope.$broadcast("modal.closing", b, c).defaultPrevented;
	  }var r,
	      s,
	      t,
	      u = "modal-open",
	      v = h.createNew(),
	      w = g.createNew(),
	      x = { NOW_CLOSING_EVENT: "modal.stack.now-closing" },
	      y = 0,
	      z = null,
	      A = "a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";return e.$watch(k, function (a) {
	    s && (s.index = a);
	  }), c.on("keydown", p), e.$on("$destroy", function () {
	    c.off("keydown", p);
	  }), x.open = function (b, f) {
	    var g = c[0].activeElement,
	        h = f.openedClass || u;m(!1), z = v.top(), v.add(b, { deferred: f.deferred, renderDeferred: f.renderDeferred, closedDeferred: f.closedDeferred, modalScope: f.scope, backdrop: f.backdrop, keyboard: f.keyboard, openedClass: f.openedClass, windowTopClass: f.windowTopClass, animation: f.animation, appendTo: f.appendTo }), w.put(h, b);var j = f.appendTo,
	        l = k();if (!j.length) throw new Error("appendTo element not found. Make sure that the element passed is in DOM.");l >= 0 && !r && (s = e.$new(!0), s.modalOptions = f, s.index = l, r = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>'), r.attr("backdrop-class", f.backdropClass), f.animation && r.attr("modal-animation", "true"), d(r)(s), a.enter(r, j), t = i.scrollbarPadding(j), t.heightOverflow && t.scrollbarWidth && j.css({ paddingRight: t.right + "px" })), y = z ? parseInt(z.value.modalDomEl.attr("index"), 10) + 1 : 0;var n = angular.element('<div uib-modal-window="modal-window"></div>');n.attr({ "template-url": f.windowTemplateUrl, "window-class": f.windowClass, "window-top-class": f.windowTopClass, size: f.size, index: y, animate: "animate" }).html(f.content), f.animation && n.attr("modal-animation", "true"), j.addClass(h), a.enter(d(n)(f.scope), j), v.top().value.modalDomEl = n, v.top().value.modalOpener = g;
	  }, x.close = function (a, b) {
	    var c = v.get(a);return c && q(c, b, !0) ? (c.value.modalScope.$$uibDestructionScheduled = !0, c.value.deferred.resolve(b), l(a, c.value.modalOpener), !0) : !c;
	  }, x.dismiss = function (a, b) {
	    var c = v.get(a);return c && q(c, b, !1) ? (c.value.modalScope.$$uibDestructionScheduled = !0, c.value.deferred.reject(b), l(a, c.value.modalOpener), !0) : !c;
	  }, x.dismissAll = function (a) {
	    for (var b = this.getTop(); b && this.dismiss(b.key, a);) {
	      b = this.getTop();
	    }
	  }, x.getTop = function () {
	    return v.top();
	  }, x.modalRendered = function (a) {
	    var b = v.get(a);b && b.value.renderDeferred.resolve();
	  }, x.focusFirstFocusableElement = function (a) {
	    return a.length > 0 ? (a[0].focus(), !0) : !1;
	  }, x.focusLastFocusableElement = function (a) {
	    return a.length > 0 ? (a[a.length - 1].focus(), !0) : !1;
	  }, x.isModalFocused = function (a, b) {
	    if (a && b) {
	      var c = b.value.modalDomEl;if (c && c.length) return (a.target || a.srcElement) === c[0];
	    }return !1;
	  }, x.isFocusInFirstItem = function (a, b) {
	    return b.length > 0 ? (a.target || a.srcElement) === b[0] : !1;
	  }, x.isFocusInLastItem = function (a, b) {
	    return b.length > 0 ? (a.target || a.srcElement) === b[b.length - 1] : !1;
	  }, x.loadFocusElementList = function (a) {
	    if (a) {
	      var b = a.value.modalDomEl;if (b && b.length) {
	        var c = b[0].querySelectorAll(A);return c ? Array.prototype.filter.call(c, function (a) {
	          return j(a);
	        }) : c;
	      }
	    }
	  }, x;
	}]).provider("$uibModal", function () {
	  var a = { options: { animation: !0, backdrop: !0, keyboard: !0 }, $get: ["$rootScope", "$q", "$document", "$templateRequest", "$controller", "$uibResolve", "$uibModalStack", function (b, c, d, e, f, g, h) {
	      function i(a) {
	        return a.template ? c.when(a.template) : e(angular.isFunction(a.templateUrl) ? a.templateUrl() : a.templateUrl);
	      }var j = {},
	          k = null;return j.getPromiseChain = function () {
	        return k;
	      }, j.open = function (e) {
	        function j() {
	          return r;
	        }var l = c.defer(),
	            m = c.defer(),
	            n = c.defer(),
	            o = c.defer(),
	            p = { result: l.promise, opened: m.promise, closed: n.promise, rendered: o.promise, close: function close(a) {
	            return h.close(p, a);
	          }, dismiss: function dismiss(a) {
	            return h.dismiss(p, a);
	          } };if (e = angular.extend({}, a.options, e), e.resolve = e.resolve || {}, e.appendTo = e.appendTo || d.find("body").eq(0), !e.template && !e.templateUrl) throw new Error("One of template or templateUrl options is required.");var q,
	            r = c.all([i(e), g.resolve(e.resolve, {}, null, null)]);return q = k = c.all([k]).then(j, j).then(function (a) {
	          var c = e.scope || b,
	              d = c.$new();d.$close = p.close, d.$dismiss = p.dismiss, d.$on("$destroy", function () {
	            d.$$uibDestructionScheduled || d.$dismiss("$uibUnscheduledDestruction");
	          });var g,
	              i,
	              j = {};e.controller && (j.$scope = d, j.$scope.$resolve = {}, j.$uibModalInstance = p, angular.forEach(a[1], function (a, b) {
	            j[b] = a, j.$scope.$resolve[b] = a;
	          }), i = f(e.controller, j, !0, e.controllerAs), e.controllerAs && e.bindToController && (g = i.instance, g.$close = d.$close, g.$dismiss = d.$dismiss, angular.extend(g, { $resolve: j.$scope.$resolve }, c)), g = i(), angular.isFunction(g.$onInit) && g.$onInit()), h.open(p, { scope: d, deferred: l, renderDeferred: o, closedDeferred: n, content: a[0], animation: e.animation, backdrop: e.backdrop, keyboard: e.keyboard, backdropClass: e.backdropClass, windowTopClass: e.windowTopClass, windowClass: e.windowClass, windowTemplateUrl: e.windowTemplateUrl, size: e.size, openedClass: e.openedClass, appendTo: e.appendTo }), m.resolve(!0);
	        }, function (a) {
	          m.reject(a), l.reject(a);
	        })["finally"](function () {
	          k === q && (k = null);
	        }), p;
	      }, j;
	    }] };return a;
	}), angular.module("ui.bootstrap.paging", []).factory("uibPaging", ["$parse", function (a) {
	  return { create: function create(b, c, d) {
	      b.setNumPages = d.numPages ? a(d.numPages).assign : angular.noop, b.ngModelCtrl = { $setViewValue: angular.noop }, b._watchers = [], b.init = function (a, e) {
	        b.ngModelCtrl = a, b.config = e, a.$render = function () {
	          b.render();
	        }, d.itemsPerPage ? b._watchers.push(c.$parent.$watch(d.itemsPerPage, function (a) {
	          b.itemsPerPage = parseInt(a, 10), c.totalPages = b.calculateTotalPages(), b.updatePage();
	        })) : b.itemsPerPage = e.itemsPerPage, c.$watch("totalItems", function (a, d) {
	          (angular.isDefined(a) || a !== d) && (c.totalPages = b.calculateTotalPages(), b.updatePage());
	        });
	      }, b.calculateTotalPages = function () {
	        var a = b.itemsPerPage < 1 ? 1 : Math.ceil(c.totalItems / b.itemsPerPage);return Math.max(a || 0, 1);
	      }, b.render = function () {
	        c.page = parseInt(b.ngModelCtrl.$viewValue, 10) || 1;
	      }, c.selectPage = function (a, d) {
	        d && d.preventDefault();var e = !c.ngDisabled || !d;e && c.page !== a && a > 0 && a <= c.totalPages && (d && d.target && d.target.blur(), b.ngModelCtrl.$setViewValue(a), b.ngModelCtrl.$render());
	      }, c.getText = function (a) {
	        return c[a + "Text"] || b.config[a + "Text"];
	      }, c.noPrevious = function () {
	        return 1 === c.page;
	      }, c.noNext = function () {
	        return c.page === c.totalPages;
	      }, b.updatePage = function () {
	        b.setNumPages(c.$parent, c.totalPages), c.page > c.totalPages ? c.selectPage(c.totalPages) : b.ngModelCtrl.$render();
	      }, c.$on("$destroy", function () {
	        for (; b._watchers.length;) {
	          b._watchers.shift()();
	        }
	      });
	    } };
	}]), angular.module("ui.bootstrap.pager", ["ui.bootstrap.paging"]).controller("UibPagerController", ["$scope", "$attrs", "uibPaging", "uibPagerConfig", function (a, b, c, d) {
	  a.align = angular.isDefined(b.align) ? a.$parent.$eval(b.align) : d.align, c.create(this, a, b);
	}]).constant("uibPagerConfig", { itemsPerPage: 10, previousText: "« Previous", nextText: "Next »", align: !0 }).directive("uibPager", ["uibPagerConfig", function (a) {
	  return { scope: { totalItems: "=", previousText: "@", nextText: "@", ngDisabled: "=" }, require: ["uibPager", "?ngModel"], controller: "UibPagerController", controllerAs: "pager", templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/pager/pager.html";
	    }, replace: !0, link: function link(b, c, d, e) {
	      var f = e[0],
	          g = e[1];g && f.init(g, a);
	    } };
	}]), angular.module("ui.bootstrap.pagination", ["ui.bootstrap.paging"]).controller("UibPaginationController", ["$scope", "$attrs", "$parse", "uibPaging", "uibPaginationConfig", function (a, b, c, d, e) {
	  function f(a, b, c) {
	    return { number: a, text: b, active: c };
	  }function g(a, b) {
	    var c = [],
	        d = 1,
	        e = b,
	        g = angular.isDefined(i) && b > i;g && (j ? (d = Math.max(a - Math.floor(i / 2), 1), e = d + i - 1, e > b && (e = b, d = e - i + 1)) : (d = (Math.ceil(a / i) - 1) * i + 1, e = Math.min(d + i - 1, b)));for (var h = d; e >= h; h++) {
	      var n = f(h, m(h), h === a);c.push(n);
	    }if (g && i > 0 && (!j || k || l)) {
	      if (d > 1) {
	        if (!l || d > 3) {
	          var o = f(d - 1, "...", !1);c.unshift(o);
	        }if (l) {
	          if (3 === d) {
	            var p = f(2, "2", !1);c.unshift(p);
	          }var q = f(1, "1", !1);c.unshift(q);
	        }
	      }if (b > e) {
	        if (!l || b - 2 > e) {
	          var r = f(e + 1, "...", !1);c.push(r);
	        }if (l) {
	          if (e === b - 2) {
	            var s = f(b - 1, b - 1, !1);c.push(s);
	          }var t = f(b, b, !1);c.push(t);
	        }
	      }
	    }return c;
	  }var h = this,
	      i = angular.isDefined(b.maxSize) ? a.$parent.$eval(b.maxSize) : e.maxSize,
	      j = angular.isDefined(b.rotate) ? a.$parent.$eval(b.rotate) : e.rotate,
	      k = angular.isDefined(b.forceEllipses) ? a.$parent.$eval(b.forceEllipses) : e.forceEllipses,
	      l = angular.isDefined(b.boundaryLinkNumbers) ? a.$parent.$eval(b.boundaryLinkNumbers) : e.boundaryLinkNumbers,
	      m = angular.isDefined(b.pageLabel) ? function (c) {
	    return a.$parent.$eval(b.pageLabel, { $page: c });
	  } : angular.identity;a.boundaryLinks = angular.isDefined(b.boundaryLinks) ? a.$parent.$eval(b.boundaryLinks) : e.boundaryLinks, a.directionLinks = angular.isDefined(b.directionLinks) ? a.$parent.$eval(b.directionLinks) : e.directionLinks, d.create(this, a, b), b.maxSize && h._watchers.push(a.$parent.$watch(c(b.maxSize), function (a) {
	    i = parseInt(a, 10), h.render();
	  }));var n = this.render;this.render = function () {
	    n(), a.page > 0 && a.page <= a.totalPages && (a.pages = g(a.page, a.totalPages));
	  };
	}]).constant("uibPaginationConfig", { itemsPerPage: 10, boundaryLinks: !1, boundaryLinkNumbers: !1, directionLinks: !0, firstText: "First", previousText: "Previous", nextText: "Next", lastText: "Last", rotate: !0, forceEllipses: !1 }).directive("uibPagination", ["$parse", "uibPaginationConfig", function (a, b) {
	  return { scope: { totalItems: "=", firstText: "@", previousText: "@", nextText: "@", lastText: "@", ngDisabled: "=" }, require: ["uibPagination", "?ngModel"], controller: "UibPaginationController", controllerAs: "pagination", templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/pagination/pagination.html";
	    }, replace: !0, link: function link(a, c, d, e) {
	      var f = e[0],
	          g = e[1];g && f.init(g, b);
	    } };
	}]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.stackedMap"]).provider("$uibTooltip", function () {
	  function a(a) {
	    var b = /[A-Z]/g,
	        c = "-";return a.replace(b, function (a, b) {
	      return (b ? c : "") + a.toLowerCase();
	    });
	  }var b = { placement: "top", placementClassPrefix: "", animation: !0, popupDelay: 0, popupCloseDelay: 0, useContentExp: !1 },
	      c = { mouseenter: "mouseleave", click: "click", outsideClick: "outsideClick", focus: "blur", none: "" },
	      d = {};this.options = function (a) {
	    angular.extend(d, a);
	  }, this.setTriggers = function (a) {
	    angular.extend(c, a);
	  }, this.$get = ["$window", "$compile", "$timeout", "$document", "$uibPosition", "$interpolate", "$rootScope", "$parse", "$$stackedMap", function (e, f, g, h, i, j, k, l, m) {
	    function n(a) {
	      if (27 === a.which) {
	        var b = o.top();b && (b.value.close(), o.removeTop(), b = null);
	      }
	    }var o = m.createNew();return h.on("keypress", n), k.$on("$destroy", function () {
	      h.off("keypress", n);
	    }), function (e, k, m, n) {
	      function p(a) {
	        var b = (a || n.trigger || m).split(" "),
	            d = b.map(function (a) {
	          return c[a] || a;
	        });return { show: b, hide: d };
	      }n = angular.extend({}, b, d, n);var q = a(e),
	          r = j.startSymbol(),
	          s = j.endSymbol(),
	          t = "<div " + q + '-popup uib-title="' + r + "title" + s + '" ' + (n.useContentExp ? 'content-exp="contentExp()" ' : 'content="' + r + "content" + s + '" ') + 'placement="' + r + "placement" + s + '" popup-class="' + r + "popupClass" + s + '" animation="animation" is-open="isOpen" origin-scope="origScope" class="uib-position-measure"></div>';return { compile: function compile(a, b) {
	          var c = f(t);return function (a, b, d, f) {
	            function j() {
	              N.isOpen ? q() : m();
	            }function m() {
	              M && !a.$eval(d[k + "Enable"]) || (u(), x(), N.popupDelay ? G || (G = g(r, N.popupDelay, !1)) : r());
	            }function q() {
	              s(), N.popupCloseDelay ? H || (H = g(t, N.popupCloseDelay, !1)) : t();
	            }function r() {
	              return s(), u(), N.content ? (v(), void N.$evalAsync(function () {
	                N.isOpen = !0, y(!0), S();
	              })) : angular.noop;
	            }function s() {
	              G && (g.cancel(G), G = null), I && (g.cancel(I), I = null);
	            }function t() {
	              N && N.$evalAsync(function () {
	                N && (N.isOpen = !1, y(!1), N.animation ? F || (F = g(w, 150, !1)) : w());
	              });
	            }function u() {
	              H && (g.cancel(H), H = null), F && (g.cancel(F), F = null);
	            }function v() {
	              D || (E = N.$new(), D = c(E, function (a) {
	                K ? h.find("body").append(a) : b.after(a);
	              }), z());
	            }function w() {
	              s(), u(), A(), D && (D.remove(), D = null), E && (E.$destroy(), E = null);
	            }function x() {
	              N.title = d[k + "Title"], Q ? N.content = Q(a) : N.content = d[e], N.popupClass = d[k + "Class"], N.placement = angular.isDefined(d[k + "Placement"]) ? d[k + "Placement"] : n.placement;var b = i.parsePlacement(N.placement);J = b[1] ? b[0] + "-" + b[1] : b[0];var c = parseInt(d[k + "PopupDelay"], 10),
	                  f = parseInt(d[k + "PopupCloseDelay"], 10);N.popupDelay = isNaN(c) ? n.popupDelay : c, N.popupCloseDelay = isNaN(f) ? n.popupCloseDelay : f;
	            }function y(b) {
	              P && angular.isFunction(P.assign) && P.assign(a, b);
	            }function z() {
	              R.length = 0, Q ? (R.push(a.$watch(Q, function (a) {
	                N.content = a, !a && N.isOpen && t();
	              })), R.push(E.$watch(function () {
	                O || (O = !0, E.$$postDigest(function () {
	                  O = !1, N && N.isOpen && S();
	                }));
	              }))) : R.push(d.$observe(e, function (a) {
	                N.content = a, !a && N.isOpen ? t() : S();
	              })), R.push(d.$observe(k + "Title", function (a) {
	                N.title = a, N.isOpen && S();
	              })), R.push(d.$observe(k + "Placement", function (a) {
	                N.placement = a ? a : n.placement, N.isOpen && S();
	              }));
	            }function A() {
	              R.length && (angular.forEach(R, function (a) {
	                a();
	              }), R.length = 0);
	            }function B(a) {
	              N && N.isOpen && D && (b[0].contains(a.target) || D[0].contains(a.target) || q());
	            }function C() {
	              var a = d[k + "Trigger"];T(), L = p(a), "none" !== L.show && L.show.forEach(function (a, c) {
	                "outsideClick" === a ? (b.on("click", j), h.on("click", B)) : a === L.hide[c] ? b.on(a, j) : a && (b.on(a, m), b.on(L.hide[c], q)), b.on("keypress", function (a) {
	                  27 === a.which && q();
	                });
	              });
	            }var D,
	                E,
	                F,
	                G,
	                H,
	                I,
	                J,
	                K = angular.isDefined(n.appendToBody) ? n.appendToBody : !1,
	                L = p(void 0),
	                M = angular.isDefined(d[k + "Enable"]),
	                N = a.$new(!0),
	                O = !1,
	                P = angular.isDefined(d[k + "IsOpen"]) ? l(d[k + "IsOpen"]) : !1,
	                Q = n.useContentExp ? l(d[e]) : !1,
	                R = [],
	                S = function S() {
	              D && D.html() && (I || (I = g(function () {
	                var a = i.positionElements(b, D, N.placement, K);D.css({ top: a.top + "px", left: a.left + "px" }), D.hasClass(a.placement.split("-")[0]) || (D.removeClass(J.split("-")[0]), D.addClass(a.placement.split("-")[0])), D.hasClass(n.placementClassPrefix + a.placement) || (D.removeClass(n.placementClassPrefix + J), D.addClass(n.placementClassPrefix + a.placement)), D.hasClass("uib-position-measure") ? (i.positionArrow(D, a.placement), D.removeClass("uib-position-measure")) : J !== a.placement && i.positionArrow(D, a.placement), J = a.placement, I = null;
	              }, 0, !1)));
	            };N.origScope = a, N.isOpen = !1, o.add(N, { close: t }), N.contentExp = function () {
	              return N.content;
	            }, d.$observe("disabled", function (a) {
	              a && s(), a && N.isOpen && t();
	            }), P && a.$watch(P, function (a) {
	              N && !a === N.isOpen && j();
	            });var T = function T() {
	              L.show.forEach(function (a) {
	                "outsideClick" === a ? b.off("click", j) : (b.off(a, m), b.off(a, j));
	              }), L.hide.forEach(function (a) {
	                "outsideClick" === a ? h.off("click", B) : b.off(a, q);
	              });
	            };C();var U = a.$eval(d[k + "Animation"]);N.animation = angular.isDefined(U) ? !!U : n.animation;var V,
	                W = k + "AppendToBody";V = W in d && void 0 === d[W] ? !0 : a.$eval(d[W]), K = angular.isDefined(V) ? V : K, a.$on("$destroy", function () {
	              T(), w(), o.remove(N), N = null;
	            });
	          };
	        } };
	    };
	  }];
	}).directive("uibTooltipTemplateTransclude", ["$animate", "$sce", "$compile", "$templateRequest", function (a, b, c, d) {
	  return { link: function link(e, f, g) {
	      var h,
	          i,
	          j,
	          k = e.$eval(g.tooltipTemplateTranscludeScope),
	          l = 0,
	          m = function m() {
	        i && (i.remove(), i = null), h && (h.$destroy(), h = null), j && (a.leave(j).then(function () {
	          i = null;
	        }), i = j, j = null);
	      };e.$watch(b.parseAsResourceUrl(g.uibTooltipTemplateTransclude), function (b) {
	        var g = ++l;b ? (d(b, !0).then(function (d) {
	          if (g === l) {
	            var e = k.$new(),
	                i = d,
	                n = c(i)(e, function (b) {
	              m(), a.enter(b, f);
	            });h = e, j = n, h.$emit("$includeContentLoaded", b);
	          }
	        }, function () {
	          g === l && (m(), e.$emit("$includeContentError", b));
	        }), e.$emit("$includeContentRequested", b)) : m();
	      }), e.$on("$destroy", m);
	    } };
	}]).directive("uibTooltipClasses", ["$uibPosition", function (a) {
	  return { restrict: "A", link: function link(b, c, d) {
	      if (b.placement) {
	        var e = a.parsePlacement(b.placement);c.addClass(e[0]);
	      }b.popupClass && c.addClass(b.popupClass), b.animation() && c.addClass(d.tooltipAnimationClass);
	    } };
	}]).directive("uibTooltipPopup", function () {
	  return { replace: !0, scope: { content: "@", placement: "@", popupClass: "@", animation: "&", isOpen: "&" }, templateUrl: "uib/template/tooltip/tooltip-popup.html" };
	}).directive("uibTooltip", ["$uibTooltip", function (a) {
	  return a("uibTooltip", "tooltip", "mouseenter");
	}]).directive("uibTooltipTemplatePopup", function () {
	  return { replace: !0, scope: { contentExp: "&", placement: "@", popupClass: "@", animation: "&", isOpen: "&", originScope: "&" }, templateUrl: "uib/template/tooltip/tooltip-template-popup.html" };
	}).directive("uibTooltipTemplate", ["$uibTooltip", function (a) {
	  return a("uibTooltipTemplate", "tooltip", "mouseenter", { useContentExp: !0 });
	}]).directive("uibTooltipHtmlPopup", function () {
	  return { replace: !0, scope: { contentExp: "&", placement: "@", popupClass: "@", animation: "&", isOpen: "&" }, templateUrl: "uib/template/tooltip/tooltip-html-popup.html" };
	}).directive("uibTooltipHtml", ["$uibTooltip", function (a) {
	  return a("uibTooltipHtml", "tooltip", "mouseenter", { useContentExp: !0 });
	}]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup", function () {
	  return { replace: !0, scope: { uibTitle: "@", contentExp: "&", placement: "@", popupClass: "@", animation: "&", isOpen: "&", originScope: "&" }, templateUrl: "uib/template/popover/popover-template.html" };
	}).directive("uibPopoverTemplate", ["$uibTooltip", function (a) {
	  return a("uibPopoverTemplate", "popover", "click", { useContentExp: !0 });
	}]).directive("uibPopoverHtmlPopup", function () {
	  return { replace: !0, scope: { contentExp: "&", uibTitle: "@", placement: "@", popupClass: "@", animation: "&", isOpen: "&" }, templateUrl: "uib/template/popover/popover-html.html" };
	}).directive("uibPopoverHtml", ["$uibTooltip", function (a) {
	  return a("uibPopoverHtml", "popover", "click", { useContentExp: !0 });
	}]).directive("uibPopoverPopup", function () {
	  return { replace: !0, scope: { uibTitle: "@", content: "@", placement: "@", popupClass: "@", animation: "&", isOpen: "&" }, templateUrl: "uib/template/popover/popover.html" };
	}).directive("uibPopover", ["$uibTooltip", function (a) {
	  return a("uibPopover", "popover", "click");
	}]), angular.module("ui.bootstrap.progressbar", []).constant("uibProgressConfig", { animate: !0, max: 100 }).controller("UibProgressController", ["$scope", "$attrs", "uibProgressConfig", function (a, b, c) {
	  function d() {
	    return angular.isDefined(a.maxParam) ? a.maxParam : c.max;
	  }var e = this,
	      f = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;this.bars = [], a.max = d(), this.addBar = function (a, b, c) {
	    f || b.css({ transition: "none" }), this.bars.push(a), a.max = d(), a.title = c && angular.isDefined(c.title) ? c.title : "progressbar", a.$watch("value", function (b) {
	      a.recalculatePercentage();
	    }), a.recalculatePercentage = function () {
	      var b = e.bars.reduce(function (a, b) {
	        return b.percent = +(100 * b.value / b.max).toFixed(2), a + b.percent;
	      }, 0);b > 100 && (a.percent -= b - 100);
	    }, a.$on("$destroy", function () {
	      b = null, e.removeBar(a);
	    });
	  }, this.removeBar = function (a) {
	    this.bars.splice(this.bars.indexOf(a), 1), this.bars.forEach(function (a) {
	      a.recalculatePercentage();
	    });
	  }, a.$watch("maxParam", function (a) {
	    e.bars.forEach(function (a) {
	      a.max = d(), a.recalculatePercentage();
	    });
	  });
	}]).directive("uibProgress", function () {
	  return { replace: !0, transclude: !0, controller: "UibProgressController", require: "uibProgress", scope: { maxParam: "=?max" }, templateUrl: "uib/template/progressbar/progress.html" };
	}).directive("uibBar", function () {
	  return { replace: !0, transclude: !0, require: "^uibProgress", scope: { value: "=", type: "@" }, templateUrl: "uib/template/progressbar/bar.html", link: function link(a, b, c, d) {
	      d.addBar(a, b, c);
	    } };
	}).directive("uibProgressbar", function () {
	  return { replace: !0, transclude: !0, controller: "UibProgressController", scope: { value: "=", maxParam: "=?max", type: "@" }, templateUrl: "uib/template/progressbar/progressbar.html", link: function link(a, b, c, d) {
	      d.addBar(a, angular.element(b.children()[0]), { title: c.title });
	    } };
	}), angular.module("ui.bootstrap.rating", []).constant("uibRatingConfig", { max: 5, stateOn: null, stateOff: null, enableReset: !0, titles: ["one", "two", "three", "four", "five"] }).controller("UibRatingController", ["$scope", "$attrs", "uibRatingConfig", function (a, b, c) {
	  var d = { $setViewValue: angular.noop },
	      e = this;this.init = function (e) {
	    d = e, d.$render = this.render, d.$formatters.push(function (a) {
	      return angular.isNumber(a) && a << 0 !== a && (a = Math.round(a)), a;
	    }), this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : c.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : c.stateOff, this.enableReset = angular.isDefined(b.enableReset) ? a.$parent.$eval(b.enableReset) : c.enableReset;var f = angular.isDefined(b.titles) ? a.$parent.$eval(b.titles) : c.titles;this.titles = angular.isArray(f) && f.length > 0 ? f : c.titles;var g = angular.isDefined(b.ratingStates) ? a.$parent.$eval(b.ratingStates) : new Array(angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max);a.range = this.buildTemplateObjects(g);
	  }, this.buildTemplateObjects = function (a) {
	    for (var b = 0, c = a.length; c > b; b++) {
	      a[b] = angular.extend({ index: b }, { stateOn: this.stateOn, stateOff: this.stateOff, title: this.getTitle(b) }, a[b]);
	    }return a;
	  }, this.getTitle = function (a) {
	    return a >= this.titles.length ? a + 1 : this.titles[a];
	  }, a.rate = function (b) {
	    if (!a.readonly && b >= 0 && b <= a.range.length) {
	      var c = e.enableReset && d.$viewValue === b ? 0 : b;d.$setViewValue(c), d.$render();
	    }
	  }, a.enter = function (b) {
	    a.readonly || (a.value = b), a.onHover({ value: b });
	  }, a.reset = function () {
	    a.value = d.$viewValue, a.onLeave();
	  }, a.onKeydown = function (b) {
	    /(37|38|39|40)/.test(b.which) && (b.preventDefault(), b.stopPropagation(), a.rate(a.value + (38 === b.which || 39 === b.which ? 1 : -1)));
	  }, this.render = function () {
	    a.value = d.$viewValue, a.title = e.getTitle(a.value - 1);
	  };
	}]).directive("uibRating", function () {
	  return { require: ["uibRating", "ngModel"], scope: { readonly: "=?readOnly", onHover: "&", onLeave: "&" }, controller: "UibRatingController", templateUrl: "uib/template/rating/rating.html", replace: !0, link: function link(a, b, c, d) {
	      var e = d[0],
	          f = d[1];e.init(f);
	    } };
	}), angular.module("ui.bootstrap.tabs", []).controller("UibTabsetController", ["$scope", function (a) {
	  function b(a) {
	    for (var b = 0; b < d.tabs.length; b++) {
	      if (d.tabs[b].index === a) return b;
	    }
	  }var c,
	      d = this;d.tabs = [], d.select = function (a, f) {
	    if (!e) {
	      var g = b(c),
	          h = d.tabs[g];if (h) {
	        if (h.tab.onDeselect({ $event: f, $selectedIndex: a }), f && f.isDefaultPrevented()) return;h.tab.active = !1;
	      }var i = d.tabs[a];i ? (i.tab.onSelect({ $event: f }), i.tab.active = !0, d.active = i.index, c = i.index) : !i && angular.isDefined(c) && (d.active = null, c = null);
	    }
	  }, d.addTab = function (a) {
	    if (d.tabs.push({ tab: a, index: a.index }), d.tabs.sort(function (a, b) {
	      return a.index > b.index ? 1 : a.index < b.index ? -1 : 0;
	    }), a.index === d.active || !angular.isDefined(d.active) && 1 === d.tabs.length) {
	      var c = b(a.index);d.select(c);
	    }
	  }, d.removeTab = function (a) {
	    for (var b, c = 0; c < d.tabs.length; c++) {
	      if (d.tabs[c].tab === a) {
	        b = c;break;
	      }
	    }if (d.tabs[b].index === d.active) {
	      var e = b === d.tabs.length - 1 ? b - 1 : b + 1 % d.tabs.length;d.select(e);
	    }d.tabs.splice(b, 1);
	  }, a.$watch("tabset.active", function (a) {
	    angular.isDefined(a) && a !== c && d.select(b(a));
	  });var e;a.$on("$destroy", function () {
	    e = !0;
	  });
	}]).directive("uibTabset", function () {
	  return { transclude: !0, replace: !0, scope: {}, bindToController: { active: "=?", type: "@" }, controller: "UibTabsetController", controllerAs: "tabset", templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/tabs/tabset.html";
	    }, link: function link(a, b, c) {
	      a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1;
	    } };
	}).directive("uibTab", ["$parse", function (a) {
	  return { require: "^uibTabset", replace: !0, templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/tabs/tab.html";
	    }, transclude: !0, scope: { heading: "@", index: "=?", classes: "@?", onSelect: "&select", onDeselect: "&deselect" }, controller: function controller() {}, controllerAs: "tab", link: function link(b, c, d, e, f) {
	      b.disabled = !1, d.disable && b.$parent.$watch(a(d.disable), function (a) {
	        b.disabled = !!a;
	      }), angular.isUndefined(d.index) && (e.tabs && e.tabs.length ? b.index = Math.max.apply(null, e.tabs.map(function (a) {
	        return a.index;
	      })) + 1 : b.index = 0), angular.isUndefined(d.classes) && (b.classes = ""), b.select = function (a) {
	        if (!b.disabled) {
	          for (var c, d = 0; d < e.tabs.length; d++) {
	            if (e.tabs[d].tab === b) {
	              c = d;break;
	            }
	          }e.select(c, a);
	        }
	      }, e.addTab(b), b.$on("$destroy", function () {
	        e.removeTab(b);
	      }), b.$transcludeFn = f;
	    } };
	}]).directive("uibTabHeadingTransclude", function () {
	  return { restrict: "A", require: "^uibTab", link: function link(a, b) {
	      a.$watch("headingElement", function (a) {
	        a && (b.html(""), b.append(a));
	      });
	    } };
	}).directive("uibTabContentTransclude", function () {
	  function a(a) {
	    return a.tagName && (a.hasAttribute("uib-tab-heading") || a.hasAttribute("data-uib-tab-heading") || a.hasAttribute("x-uib-tab-heading") || "uib-tab-heading" === a.tagName.toLowerCase() || "data-uib-tab-heading" === a.tagName.toLowerCase() || "x-uib-tab-heading" === a.tagName.toLowerCase() || "uib:tab-heading" === a.tagName.toLowerCase());
	  }return { restrict: "A", require: "^uibTabset", link: function link(b, c, d) {
	      var e = b.$eval(d.uibTabContentTransclude).tab;e.$transcludeFn(e.$parent, function (b) {
	        angular.forEach(b, function (b) {
	          a(b) ? e.headingElement = b : c.append(b);
	        });
	      });
	    } };
	}), angular.module("ui.bootstrap.timepicker", []).constant("uibTimepickerConfig", { hourStep: 1, minuteStep: 1, secondStep: 1, showMeridian: !0, showSeconds: !1, meridians: null, readonlyInput: !1, mousewheel: !0, arrowkeys: !0, showSpinners: !0, templateUrl: "uib/template/timepicker/timepicker.html" }).controller("UibTimepickerController", ["$scope", "$element", "$attrs", "$parse", "$log", "$locale", "uibTimepickerConfig", function (a, b, c, d, e, f, g) {
	  function h() {
	    var b = +a.hours,
	        c = a.showMeridian ? b > 0 && 13 > b : b >= 0 && 24 > b;return c && "" !== a.hours ? (a.showMeridian && (12 === b && (b = 0), a.meridian === v[1] && (b += 12)), b) : void 0;
	  }function i() {
	    var b = +a.minutes,
	        c = b >= 0 && 60 > b;return c && "" !== a.minutes ? b : void 0;
	  }function j() {
	    var b = +a.seconds;return b >= 0 && 60 > b ? b : void 0;
	  }function k(a, b) {
	    return null === a ? "" : angular.isDefined(a) && a.toString().length < 2 && !b ? "0" + a : a.toString();
	  }function l(a) {
	    m(), u.$setViewValue(new Date(s)), n(a);
	  }function m() {
	    u.$setValidity("time", !0), a.invalidHours = !1, a.invalidMinutes = !1, a.invalidSeconds = !1;
	  }function n(b) {
	    if (u.$modelValue) {
	      var c = s.getHours(),
	          d = s.getMinutes(),
	          e = s.getSeconds();a.showMeridian && (c = 0 === c || 12 === c ? 12 : c % 12), a.hours = "h" === b ? c : k(c, !w), "m" !== b && (a.minutes = k(d)), a.meridian = s.getHours() < 12 ? v[0] : v[1], "s" !== b && (a.seconds = k(e)), a.meridian = s.getHours() < 12 ? v[0] : v[1];
	    } else a.hours = null, a.minutes = null, a.seconds = null, a.meridian = v[0];
	  }function o(a) {
	    s = q(s, a), l();
	  }function p(a, b) {
	    return q(a, 60 * b);
	  }function q(a, b) {
	    var c = new Date(a.getTime() + 1e3 * b),
	        d = new Date(a);return d.setHours(c.getHours(), c.getMinutes(), c.getSeconds()), d;
	  }function r() {
	    return (null === a.hours || "" === a.hours) && (null === a.minutes || "" === a.minutes) && (!a.showSeconds || a.showSeconds && (null === a.seconds || "" === a.seconds));
	  }var s = new Date(),
	      t = [],
	      u = { $setViewValue: angular.noop },
	      v = angular.isDefined(c.meridians) ? a.$parent.$eval(c.meridians) : g.meridians || f.DATETIME_FORMATS.AMPMS,
	      w = angular.isDefined(c.padHours) ? a.$parent.$eval(c.padHours) : !0;a.tabindex = angular.isDefined(c.tabindex) ? c.tabindex : 0, b.removeAttr("tabindex"), this.init = function (b, d) {
	    u = b, u.$render = this.render, u.$formatters.unshift(function (a) {
	      return a ? new Date(a) : null;
	    });var e = d.eq(0),
	        f = d.eq(1),
	        h = d.eq(2),
	        i = angular.isDefined(c.mousewheel) ? a.$parent.$eval(c.mousewheel) : g.mousewheel;i && this.setupMousewheelEvents(e, f, h);var j = angular.isDefined(c.arrowkeys) ? a.$parent.$eval(c.arrowkeys) : g.arrowkeys;j && this.setupArrowkeyEvents(e, f, h), a.readonlyInput = angular.isDefined(c.readonlyInput) ? a.$parent.$eval(c.readonlyInput) : g.readonlyInput, this.setupInputEvents(e, f, h);
	  };var x = g.hourStep;c.hourStep && t.push(a.$parent.$watch(d(c.hourStep), function (a) {
	    x = +a;
	  }));var y = g.minuteStep;c.minuteStep && t.push(a.$parent.$watch(d(c.minuteStep), function (a) {
	    y = +a;
	  }));var z;t.push(a.$parent.$watch(d(c.min), function (a) {
	    var b = new Date(a);z = isNaN(b) ? void 0 : b;
	  }));var A;t.push(a.$parent.$watch(d(c.max), function (a) {
	    var b = new Date(a);A = isNaN(b) ? void 0 : b;
	  }));var B = !1;c.ngDisabled && t.push(a.$parent.$watch(d(c.ngDisabled), function (a) {
	    B = a;
	  })), a.noIncrementHours = function () {
	    var a = p(s, 60 * x);return B || a > A || s > a && z > a;
	  }, a.noDecrementHours = function () {
	    var a = p(s, 60 * -x);return B || z > a || a > s && a > A;
	  }, a.noIncrementMinutes = function () {
	    var a = p(s, y);return B || a > A || s > a && z > a;
	  }, a.noDecrementMinutes = function () {
	    var a = p(s, -y);return B || z > a || a > s && a > A;
	  }, a.noIncrementSeconds = function () {
	    var a = q(s, C);return B || a > A || s > a && z > a;
	  }, a.noDecrementSeconds = function () {
	    var a = q(s, -C);return B || z > a || a > s && a > A;
	  }, a.noToggleMeridian = function () {
	    return s.getHours() < 12 ? B || p(s, 720) > A : B || p(s, -720) < z;
	  };var C = g.secondStep;c.secondStep && t.push(a.$parent.$watch(d(c.secondStep), function (a) {
	    C = +a;
	  })), a.showSeconds = g.showSeconds, c.showSeconds && t.push(a.$parent.$watch(d(c.showSeconds), function (b) {
	    a.showSeconds = !!b;
	  })), a.showMeridian = g.showMeridian, c.showMeridian && t.push(a.$parent.$watch(d(c.showMeridian), function (b) {
	    if (a.showMeridian = !!b, u.$error.time) {
	      var c = h(),
	          d = i();angular.isDefined(c) && angular.isDefined(d) && (s.setHours(c), l());
	    } else n();
	  })), this.setupMousewheelEvents = function (b, c, d) {
	    var e = function e(a) {
	      a.originalEvent && (a = a.originalEvent);var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;return a.detail || b > 0;
	    };b.bind("mousewheel wheel", function (b) {
	      B || a.$apply(e(b) ? a.incrementHours() : a.decrementHours()), b.preventDefault();
	    }), c.bind("mousewheel wheel", function (b) {
	      B || a.$apply(e(b) ? a.incrementMinutes() : a.decrementMinutes()), b.preventDefault();
	    }), d.bind("mousewheel wheel", function (b) {
	      B || a.$apply(e(b) ? a.incrementSeconds() : a.decrementSeconds()), b.preventDefault();
	    });
	  }, this.setupArrowkeyEvents = function (b, c, d) {
	    b.bind("keydown", function (b) {
	      B || (38 === b.which ? (b.preventDefault(), a.incrementHours(), a.$apply()) : 40 === b.which && (b.preventDefault(), a.decrementHours(), a.$apply()));
	    }), c.bind("keydown", function (b) {
	      B || (38 === b.which ? (b.preventDefault(), a.incrementMinutes(), a.$apply()) : 40 === b.which && (b.preventDefault(), a.decrementMinutes(), a.$apply()));
	    }), d.bind("keydown", function (b) {
	      B || (38 === b.which ? (b.preventDefault(), a.incrementSeconds(), a.$apply()) : 40 === b.which && (b.preventDefault(), a.decrementSeconds(), a.$apply()));
	    });
	  }, this.setupInputEvents = function (b, c, d) {
	    if (a.readonlyInput) return a.updateHours = angular.noop, a.updateMinutes = angular.noop, void (a.updateSeconds = angular.noop);var e = function e(b, c, d) {
	      u.$setViewValue(null), u.$setValidity("time", !1), angular.isDefined(b) && (a.invalidHours = b), angular.isDefined(c) && (a.invalidMinutes = c), angular.isDefined(d) && (a.invalidSeconds = d);
	    };a.updateHours = function () {
	      var a = h(),
	          b = i();u.$setDirty(), angular.isDefined(a) && angular.isDefined(b) ? (s.setHours(a), s.setMinutes(b), z > s || s > A ? e(!0) : l("h")) : e(!0);
	    }, b.bind("blur", function (b) {
	      u.$setTouched(), r() ? m() : null === a.hours || "" === a.hours ? e(!0) : !a.invalidHours && a.hours < 10 && a.$apply(function () {
	        a.hours = k(a.hours, !w);
	      });
	    }), a.updateMinutes = function () {
	      var a = i(),
	          b = h();u.$setDirty(), angular.isDefined(a) && angular.isDefined(b) ? (s.setHours(b), s.setMinutes(a), z > s || s > A ? e(void 0, !0) : l("m")) : e(void 0, !0);
	    }, c.bind("blur", function (b) {
	      u.$setTouched(), r() ? m() : null === a.minutes ? e(void 0, !0) : !a.invalidMinutes && a.minutes < 10 && a.$apply(function () {
	        a.minutes = k(a.minutes);
	      });
	    }), a.updateSeconds = function () {
	      var a = j();u.$setDirty(), angular.isDefined(a) ? (s.setSeconds(a), l("s")) : e(void 0, void 0, !0);
	    }, d.bind("blur", function (b) {
	      r() ? m() : !a.invalidSeconds && a.seconds < 10 && a.$apply(function () {
	        a.seconds = k(a.seconds);
	      });
	    });
	  }, this.render = function () {
	    var b = u.$viewValue;isNaN(b) ? (u.$setValidity("time", !1), e.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (b && (s = b), z > s || s > A ? (u.$setValidity("time", !1), a.invalidHours = !0, a.invalidMinutes = !0) : m(), n());
	  }, a.showSpinners = angular.isDefined(c.showSpinners) ? a.$parent.$eval(c.showSpinners) : g.showSpinners, a.incrementHours = function () {
	    a.noIncrementHours() || o(60 * x * 60);
	  }, a.decrementHours = function () {
	    a.noDecrementHours() || o(60 * -x * 60);
	  }, a.incrementMinutes = function () {
	    a.noIncrementMinutes() || o(60 * y);
	  }, a.decrementMinutes = function () {
	    a.noDecrementMinutes() || o(60 * -y);
	  }, a.incrementSeconds = function () {
	    a.noIncrementSeconds() || o(C);
	  }, a.decrementSeconds = function () {
	    a.noDecrementSeconds() || o(-C);
	  }, a.toggleMeridian = function () {
	    var b = i(),
	        c = h();a.noToggleMeridian() || (angular.isDefined(b) && angular.isDefined(c) ? o(720 * (s.getHours() < 12 ? 60 : -60)) : a.meridian = a.meridian === v[0] ? v[1] : v[0]);
	  }, a.blur = function () {
	    u.$setTouched();
	  }, a.$on("$destroy", function () {
	    for (; t.length;) {
	      t.shift()();
	    }
	  });
	}]).directive("uibTimepicker", ["uibTimepickerConfig", function (a) {
	  return { require: ["uibTimepicker", "?^ngModel"], controller: "UibTimepickerController", controllerAs: "timepicker", replace: !0, scope: {}, templateUrl: function templateUrl(b, c) {
	      return c.templateUrl || a.templateUrl;
	    }, link: function link(a, b, c, d) {
	      var e = d[0],
	          f = d[1];f && e.init(f, b.find("input"));
	    } };
	}]), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.debounce", "ui.bootstrap.position"]).factory("uibTypeaheadParser", ["$parse", function (a) {
	  var b = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return { parse: function parse(c) {
	      var d = c.match(b);if (!d) throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + c + '".');return { itemName: d[3], source: a(d[4]), viewMapper: a(d[2] || d[1]), modelMapper: a(d[1]) };
	    } };
	}]).controller("UibTypeaheadController", ["$scope", "$element", "$attrs", "$compile", "$parse", "$q", "$timeout", "$document", "$window", "$rootScope", "$$debounce", "$uibPosition", "uibTypeaheadParser", function (a, b, c, d, e, f, g, h, i, j, k, l, m) {
	  function n() {
	    O.moveInProgress || (O.moveInProgress = !0, O.$digest()), Z();
	  }function o() {
	    O.position = E ? l.offset(b) : l.position(b), O.position.top += b.prop("offsetHeight");
	  }var p,
	      q,
	      r = [9, 13, 27, 38, 40],
	      s = 200,
	      t = a.$eval(c.typeaheadMinLength);t || 0 === t || (t = 1), a.$watch(c.typeaheadMinLength, function (a) {
	    t = a || 0 === a ? a : 1;
	  });var u = a.$eval(c.typeaheadWaitMs) || 0,
	      v = a.$eval(c.typeaheadEditable) !== !1;a.$watch(c.typeaheadEditable, function (a) {
	    v = a !== !1;
	  });var w,
	      x,
	      y = e(c.typeaheadLoading).assign || angular.noop,
	      z = c.typeaheadShouldSelect ? e(c.typeaheadShouldSelect) : function (a, b) {
	    var c = b.$event;return 13 === c.which || 9 === c.which;
	  },
	      A = e(c.typeaheadOnSelect),
	      B = angular.isDefined(c.typeaheadSelectOnBlur) ? a.$eval(c.typeaheadSelectOnBlur) : !1,
	      C = e(c.typeaheadNoResults).assign || angular.noop,
	      D = c.typeaheadInputFormatter ? e(c.typeaheadInputFormatter) : void 0,
	      E = c.typeaheadAppendToBody ? a.$eval(c.typeaheadAppendToBody) : !1,
	      F = c.typeaheadAppendTo ? a.$eval(c.typeaheadAppendTo) : null,
	      G = a.$eval(c.typeaheadFocusFirst) !== !1,
	      H = c.typeaheadSelectOnExact ? a.$eval(c.typeaheadSelectOnExact) : !1,
	      I = e(c.typeaheadIsOpen).assign || angular.noop,
	      J = a.$eval(c.typeaheadShowHint) || !1,
	      K = e(c.ngModel),
	      L = e(c.ngModel + "($$$p)"),
	      M = function M(b, c) {
	    return angular.isFunction(K(a)) && q && q.$options && q.$options.getterSetter ? L(b, { $$$p: c }) : K.assign(b, c);
	  },
	      N = m.parse(c.uibTypeahead),
	      O = a.$new(),
	      P = a.$on("$destroy", function () {
	    O.$destroy();
	  });O.$on("$destroy", P);var Q = "typeahead-" + O.$id + "-" + Math.floor(1e4 * Math.random());b.attr({ "aria-autocomplete": "list", "aria-expanded": !1, "aria-owns": Q });var R, S;J && (R = angular.element("<div></div>"), R.css("position", "relative"), b.after(R), S = b.clone(), S.attr("placeholder", ""), S.attr("tabindex", "-1"), S.val(""), S.css({ position: "absolute", top: "0px", left: "0px", "border-color": "transparent", "box-shadow": "none", opacity: 1, background: "none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)", color: "#999" }), b.css({ position: "relative", "vertical-align": "top", "background-color": "transparent" }), R.append(S), S.after(b));var T = angular.element("<div uib-typeahead-popup></div>");T.attr({ id: Q, matches: "matches", active: "activeIdx", select: "select(activeIdx, evt)", "move-in-progress": "moveInProgress", query: "query", position: "position", "assign-is-open": "assignIsOpen(isOpen)", debounce: "debounceUpdate" }), angular.isDefined(c.typeaheadTemplateUrl) && T.attr("template-url", c.typeaheadTemplateUrl), angular.isDefined(c.typeaheadPopupTemplateUrl) && T.attr("popup-template-url", c.typeaheadPopupTemplateUrl);var U = function U() {
	    J && S.val("");
	  },
	      V = function V() {
	    O.matches = [], O.activeIdx = -1, b.attr("aria-expanded", !1), U();
	  },
	      W = function W(a) {
	    return Q + "-option-" + a;
	  };O.$watch("activeIdx", function (a) {
	    0 > a ? b.removeAttr("aria-activedescendant") : b.attr("aria-activedescendant", W(a));
	  });var X = function X(a, b) {
	    return O.matches.length > b && a ? a.toUpperCase() === O.matches[b].label.toUpperCase() : !1;
	  },
	      Y = function Y(c, d) {
	    var e = { $viewValue: c };y(a, !0), C(a, !1), f.when(N.source(a, e)).then(function (f) {
	      var g = c === p.$viewValue;if (g && w) if (f && f.length > 0) {
	        O.activeIdx = G ? 0 : -1, C(a, !1), O.matches.length = 0;for (var h = 0; h < f.length; h++) {
	          e[N.itemName] = f[h], O.matches.push({ id: W(h), label: N.viewMapper(O, e), model: f[h] });
	        }if (O.query = c, o(), b.attr("aria-expanded", !0), H && 1 === O.matches.length && X(c, 0) && (angular.isNumber(O.debounceUpdate) || angular.isObject(O.debounceUpdate) ? k(function () {
	          O.select(0, d);
	        }, angular.isNumber(O.debounceUpdate) ? O.debounceUpdate : O.debounceUpdate["default"]) : O.select(0, d)), J) {
	          var i = O.matches[0].label;angular.isString(c) && c.length > 0 && i.slice(0, c.length).toUpperCase() === c.toUpperCase() ? S.val(c + i.slice(c.length)) : S.val("");
	        }
	      } else V(), C(a, !0);g && y(a, !1);
	    }, function () {
	      V(), y(a, !1), C(a, !0);
	    });
	  };E && (angular.element(i).on("resize", n), h.find("body").on("scroll", n));var Z = k(function () {
	    O.matches.length && o(), O.moveInProgress = !1;
	  }, s);O.moveInProgress = !1, O.query = void 0;var $,
	      _ = function _(a) {
	    $ = g(function () {
	      Y(a);
	    }, u);
	  },
	      aa = function aa() {
	    $ && g.cancel($);
	  };V(), O.assignIsOpen = function (b) {
	    I(a, b);
	  }, O.select = function (d, e) {
	    var f,
	        h,
	        i = {};x = !0, i[N.itemName] = h = O.matches[d].model, f = N.modelMapper(a, i), M(a, f), p.$setValidity("editable", !0), p.$setValidity("parse", !0), A(a, { $item: h, $model: f, $label: N.viewMapper(a, i), $event: e }), V(), O.$eval(c.typeaheadFocusOnSelect) !== !1 && g(function () {
	      b[0].focus();
	    }, 0, !1);
	  }, b.on("keydown", function (b) {
	    if (0 !== O.matches.length && -1 !== r.indexOf(b.which)) {
	      var c = z(a, { $event: b });if (-1 === O.activeIdx && c || 9 === b.which && b.shiftKey) return V(), void O.$digest();b.preventDefault();var d;switch (b.which) {case 27:
	          b.stopPropagation(), V(), a.$digest();break;case 38:
	          O.activeIdx = (O.activeIdx > 0 ? O.activeIdx : O.matches.length) - 1, O.$digest(), d = T.find("li")[O.activeIdx], d.parentNode.scrollTop = d.offsetTop;break;case 40:
	          O.activeIdx = (O.activeIdx + 1) % O.matches.length, O.$digest(), d = T.find("li")[O.activeIdx], d.parentNode.scrollTop = d.offsetTop;break;default:
	          c && O.$apply(function () {
	            angular.isNumber(O.debounceUpdate) || angular.isObject(O.debounceUpdate) ? k(function () {
	              O.select(O.activeIdx, b);
	            }, angular.isNumber(O.debounceUpdate) ? O.debounceUpdate : O.debounceUpdate["default"]) : O.select(O.activeIdx, b);
	          });}
	    }
	  }), b.bind("focus", function (a) {
	    w = !0, 0 !== t || p.$viewValue || g(function () {
	      Y(p.$viewValue, a);
	    }, 0);
	  }), b.bind("blur", function (a) {
	    B && O.matches.length && -1 !== O.activeIdx && !x && (x = !0, O.$apply(function () {
	      angular.isObject(O.debounceUpdate) && angular.isNumber(O.debounceUpdate.blur) ? k(function () {
	        O.select(O.activeIdx, a);
	      }, O.debounceUpdate.blur) : O.select(O.activeIdx, a);
	    })), !v && p.$error.editable && (p.$setViewValue(), p.$setValidity("editable", !0), p.$setValidity("parse", !0), b.val("")), w = !1, x = !1;
	  });var ba = function ba(c) {
	    b[0] !== c.target && 3 !== c.which && 0 !== O.matches.length && (V(), j.$$phase || a.$digest());
	  };h.on("click", ba), a.$on("$destroy", function () {
	    h.off("click", ba), (E || F) && ca.remove(), E && (angular.element(i).off("resize", n), h.find("body").off("scroll", n)), T.remove(), J && R.remove();
	  });var ca = d(T)(O);E ? h.find("body").append(ca) : F ? angular.element(F).eq(0).append(ca) : b.after(ca), this.init = function (b, c) {
	    p = b, q = c, O.debounceUpdate = p.$options && e(p.$options.debounce)(a), p.$parsers.unshift(function (b) {
	      return w = !0, 0 === t || b && b.length >= t ? u > 0 ? (aa(), _(b)) : Y(b) : (y(a, !1), aa(), V()), v ? b : b ? void p.$setValidity("editable", !1) : (p.$setValidity("editable", !0), null);
	    }), p.$formatters.push(function (b) {
	      var c,
	          d,
	          e = {};return v || p.$setValidity("editable", !0), D ? (e.$model = b, D(a, e)) : (e[N.itemName] = b, c = N.viewMapper(a, e), e[N.itemName] = void 0, d = N.viewMapper(a, e), c !== d ? c : b);
	    });
	  };
	}]).directive("uibTypeahead", function () {
	  return { controller: "UibTypeaheadController", require: ["ngModel", "^?ngModelOptions", "uibTypeahead"], link: function link(a, b, c, d) {
	      d[2].init(d[0], d[1]);
	    } };
	}).directive("uibTypeaheadPopup", ["$$debounce", function (a) {
	  return { scope: { matches: "=", query: "=", active: "=", position: "&", moveInProgress: "=", select: "&", assignIsOpen: "&", debounce: "&" }, replace: !0, templateUrl: function templateUrl(a, b) {
	      return b.popupTemplateUrl || "uib/template/typeahead/typeahead-popup.html";
	    }, link: function link(b, c, d) {
	      b.templateUrl = d.templateUrl, b.isOpen = function () {
	        var a = b.matches.length > 0;return b.assignIsOpen({ isOpen: a }), a;
	      }, b.isActive = function (a) {
	        return b.active === a;
	      }, b.selectActive = function (a) {
	        b.active = a;
	      }, b.selectMatch = function (c, d) {
	        var e = b.debounce();angular.isNumber(e) || angular.isObject(e) ? a(function () {
	          b.select({ activeIdx: c, evt: d });
	        }, angular.isNumber(e) ? e : e["default"]) : b.select({ activeIdx: c, evt: d });
	      };
	    } };
	}]).directive("uibTypeaheadMatch", ["$templateRequest", "$compile", "$parse", function (a, b, c) {
	  return { scope: { index: "=", match: "=", query: "=" }, link: function link(d, e, f) {
	      var g = c(f.templateUrl)(d.$parent) || "uib/template/typeahead/typeahead-match.html";a(g).then(function (a) {
	        var c = angular.element(a.trim());e.replaceWith(c), b(c)(d);
	      });
	    } };
	}]).filter("uibTypeaheadHighlight", ["$sce", "$injector", "$log", function (a, b, c) {
	  function d(a) {
	    return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
	  }function e(a) {
	    return (/<.*>/g.test(a)
	    );
	  }var f;return f = b.has("$sanitize"), function (b, g) {
	    return !f && e(b) && c.warn("Unsafe use of typeahead please use ngSanitize"), b = g ? ("" + b).replace(new RegExp(d(g), "gi"), "<strong>$&</strong>") : b, f || (b = a.trustAsHtml(b)), b;
	  };
	}]), angular.module("ui.bootstrap.carousel").run(function () {
	  !angular.$$csp().noInlineStyle && !angular.$$uibCarouselCss && angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'), angular.$$uibCarouselCss = !0;
	}), angular.module("ui.bootstrap.datepicker").run(function () {
	  !angular.$$csp().noInlineStyle && !angular.$$uibDatepickerCss && angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>'), angular.$$uibDatepickerCss = !0;
	}), angular.module("ui.bootstrap.position").run(function () {
	  !angular.$$csp().noInlineStyle && !angular.$$uibPositionCss && angular.element(document).find("head").prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'), angular.$$uibPositionCss = !0;
	}), angular.module("ui.bootstrap.datepickerPopup").run(function () {
	  !angular.$$csp().noInlineStyle && !angular.$$uibDatepickerpopupCss && angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>'), angular.$$uibDatepickerpopupCss = !0;
	}), angular.module("ui.bootstrap.tooltip").run(function () {
	  !angular.$$csp().noInlineStyle && !angular.$$uibTooltipCss && angular.element(document).find("head").prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'), angular.$$uibTooltipCss = !0;
	}), angular.module("ui.bootstrap.timepicker").run(function () {
	  !angular.$$csp().noInlineStyle && !angular.$$uibTimepickerCss && angular.element(document).find("head").prepend('<style type="text/css">.uib-time input{width:50px;}</style>'), angular.$$uibTimepickerCss = !0;
	}), angular.module("ui.bootstrap.typeahead").run(function () {
	  !angular.$$csp().noInlineStyle && !angular.$$uibTypeaheadCss && angular.element(document).find("head").prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'), angular.$$uibTypeaheadCss = !0;
	});

/***/ },

/***/ 73:
/***/ function(module, exports) {

	"use strict";
	
	/*
	 * angular-ui-bootstrap
	 * http://angular-ui.github.io/bootstrap/
	
	 * Version: 1.3.3 - 2016-05-22
	 * License: MIT
	 */angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.isClass", "ui.bootstrap.datepicker", "ui.bootstrap.position", "ui.bootstrap.datepickerPopup", "ui.bootstrap.debounce", "ui.bootstrap.dropdown", "ui.bootstrap.stackedMap", "ui.bootstrap.modal", "ui.bootstrap.paging", "ui.bootstrap.pager", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["uib/template/accordion/accordion-group.html", "uib/template/accordion/accordion.html", "uib/template/alert/alert.html", "uib/template/carousel/carousel.html", "uib/template/carousel/slide.html", "uib/template/datepicker/datepicker.html", "uib/template/datepicker/day.html", "uib/template/datepicker/month.html", "uib/template/datepicker/year.html", "uib/template/datepickerPopup/popup.html", "uib/template/modal/backdrop.html", "uib/template/modal/window.html", "uib/template/pager/pager.html", "uib/template/pagination/pagination.html", "uib/template/tooltip/tooltip-html-popup.html", "uib/template/tooltip/tooltip-popup.html", "uib/template/tooltip/tooltip-template-popup.html", "uib/template/popover/popover-html.html", "uib/template/popover/popover-template.html", "uib/template/popover/popover.html", "uib/template/progressbar/bar.html", "uib/template/progressbar/progress.html", "uib/template/progressbar/progressbar.html", "uib/template/rating/rating.html", "uib/template/tabs/tab.html", "uib/template/tabs/tabset.html", "uib/template/timepicker/timepicker.html", "uib/template/typeahead/typeahead-match.html", "uib/template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.collapse", []).directive("uibCollapse", ["$animate", "$q", "$parse", "$injector", function (a, b, c, d) {
	  var e = d.has("$animateCss") ? d.get("$animateCss") : null;return { link: function link(d, f, g) {
	      function h() {
	        f.hasClass("collapse") && f.hasClass("in") || b.resolve(l(d)).then(function () {
	          f.removeClass("collapse").addClass("collapsing").attr("aria-expanded", !0).attr("aria-hidden", !1), e ? e(f, { addClass: "in", easing: "ease", to: { height: f[0].scrollHeight + "px" } }).start()["finally"](i) : a.addClass(f, "in", { to: { height: f[0].scrollHeight + "px" } }).then(i);
	        });
	      }function i() {
	        f.removeClass("collapsing").addClass("collapse").css({ height: "auto" }), m(d);
	      }function j() {
	        return f.hasClass("collapse") || f.hasClass("in") ? void b.resolve(n(d)).then(function () {
	          f.css({ height: f[0].scrollHeight + "px" }).removeClass("collapse").addClass("collapsing").attr("aria-expanded", !1).attr("aria-hidden", !0), e ? e(f, { removeClass: "in", to: { height: "0" } }).start()["finally"](k) : a.removeClass(f, "in", { to: { height: "0" } }).then(k);
	        }) : k();
	      }function k() {
	        f.css({ height: "0" }), f.removeClass("collapsing").addClass("collapse"), o(d);
	      }var l = c(g.expanding),
	          m = c(g.expanded),
	          n = c(g.collapsing),
	          o = c(g.collapsed);d.$eval(g.uibCollapse) || f.addClass("in").addClass("collapse").attr("aria-expanded", !0).attr("aria-hidden", !1).css({ height: "auto" }), d.$watch(g.uibCollapse, function (a) {
	        a ? j() : h();
	      });
	    } };
	}]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("uibAccordionConfig", { closeOthers: !0 }).controller("UibAccordionController", ["$scope", "$attrs", "uibAccordionConfig", function (a, b, c) {
	  this.groups = [], this.closeOthers = function (d) {
	    var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;e && angular.forEach(this.groups, function (a) {
	      a !== d && (a.isOpen = !1);
	    });
	  }, this.addGroup = function (a) {
	    var b = this;this.groups.push(a), a.$on("$destroy", function (c) {
	      b.removeGroup(a);
	    });
	  }, this.removeGroup = function (a) {
	    var b = this.groups.indexOf(a);-1 !== b && this.groups.splice(b, 1);
	  };
	}]).directive("uibAccordion", function () {
	  return { controller: "UibAccordionController", controllerAs: "accordion", transclude: !0, templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/accordion/accordion.html";
	    } };
	}).directive("uibAccordionGroup", function () {
	  return { require: "^uibAccordion", transclude: !0, replace: !0, templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/accordion/accordion-group.html";
	    }, scope: { heading: "@", panelClass: "@?", isOpen: "=?", isDisabled: "=?" }, controller: function controller() {
	      this.setHeading = function (a) {
	        this.heading = a;
	      };
	    }, link: function link(a, b, c, d) {
	      d.addGroup(a), a.openClass = c.openClass || "panel-open", a.panelClass = c.panelClass || "panel-default", a.$watch("isOpen", function (c) {
	        b.toggleClass(a.openClass, !!c), c && d.closeOthers(a);
	      }), a.toggleOpen = function (b) {
	        a.isDisabled || b && 32 !== b.which || (a.isOpen = !a.isOpen);
	      };var e = "accordiongroup-" + a.$id + "-" + Math.floor(1e4 * Math.random());a.headingId = e + "-tab", a.panelId = e + "-panel";
	    } };
	}).directive("uibAccordionHeading", function () {
	  return { transclude: !0, template: "", replace: !0, require: "^uibAccordionGroup", link: function link(a, b, c, d, e) {
	      d.setHeading(e(a, angular.noop));
	    } };
	}).directive("uibAccordionTransclude", function () {
	  function a() {
	    return "uib-accordion-header,data-uib-accordion-header,x-uib-accordion-header,uib\\:accordion-header,[uib-accordion-header],[data-uib-accordion-header],[x-uib-accordion-header]";
	  }return { require: "^uibAccordionGroup", link: function link(b, c, d, e) {
	      b.$watch(function () {
	        return e[d.uibAccordionTransclude];
	      }, function (b) {
	        if (b) {
	          var d = angular.element(c[0].querySelector(a()));d.html(""), d.append(b);
	        }
	      });
	    } };
	}), angular.module("ui.bootstrap.alert", []).controller("UibAlertController", ["$scope", "$attrs", "$interpolate", "$timeout", function (a, b, c, d) {
	  a.closeable = !!b.close;var e = angular.isDefined(b.dismissOnTimeout) ? c(b.dismissOnTimeout)(a.$parent) : null;e && d(function () {
	    a.close();
	  }, parseInt(e, 10));
	}]).directive("uibAlert", function () {
	  return { controller: "UibAlertController", controllerAs: "alert", templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/alert/alert.html";
	    }, transclude: !0, replace: !0, scope: { type: "@", close: "&" } };
	}), angular.module("ui.bootstrap.buttons", []).constant("uibButtonConfig", { activeClass: "active", toggleEvent: "click" }).controller("UibButtonsController", ["uibButtonConfig", function (a) {
	  this.activeClass = a.activeClass || "active", this.toggleEvent = a.toggleEvent || "click";
	}]).directive("uibBtnRadio", ["$parse", function (a) {
	  return { require: ["uibBtnRadio", "ngModel"], controller: "UibButtonsController", controllerAs: "buttons", link: function link(b, c, d, e) {
	      var f = e[0],
	          g = e[1],
	          h = a(d.uibUncheckable);c.find("input").css({ display: "none" }), g.$render = function () {
	        c.toggleClass(f.activeClass, angular.equals(g.$modelValue, b.$eval(d.uibBtnRadio)));
	      }, c.on(f.toggleEvent, function () {
	        if (!d.disabled) {
	          var a = c.hasClass(f.activeClass);a && !angular.isDefined(d.uncheckable) || b.$apply(function () {
	            g.$setViewValue(a ? null : b.$eval(d.uibBtnRadio)), g.$render();
	          });
	        }
	      }), d.uibUncheckable && b.$watch(h, function (a) {
	        d.$set("uncheckable", a ? "" : void 0);
	      });
	    } };
	}]).directive("uibBtnCheckbox", function () {
	  return { require: ["uibBtnCheckbox", "ngModel"], controller: "UibButtonsController", controllerAs: "button", link: function link(a, b, c, d) {
	      function e() {
	        return g(c.btnCheckboxTrue, !0);
	      }function f() {
	        return g(c.btnCheckboxFalse, !1);
	      }function g(b, c) {
	        return angular.isDefined(b) ? a.$eval(b) : c;
	      }var h = d[0],
	          i = d[1];b.find("input").css({ display: "none" }), i.$render = function () {
	        b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()));
	      }, b.on(h.toggleEvent, function () {
	        c.disabled || a.$apply(function () {
	          i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render();
	        });
	      });
	    } };
	}), angular.module("ui.bootstrap.carousel", []).controller("UibCarouselController", ["$scope", "$element", "$interval", "$timeout", "$animate", function (a, b, c, d, e) {
	  function f() {
	    for (; t.length;) {
	      t.shift();
	    }
	  }function g(a) {
	    for (var b = 0; b < q.length; b++) {
	      q[b].slide.active = b === a;
	    }
	  }function h(c, d, i) {
	    if (!u) {
	      if (angular.extend(c, { direction: i }), angular.extend(q[s].slide || {}, { direction: i }), e.enabled(b) && !a.$currentTransition && q[d].element && p.slides.length > 1) {
	        q[d].element.data(r, c.direction);var j = p.getCurrentIndex();angular.isNumber(j) && q[j].element && q[j].element.data(r, c.direction), a.$currentTransition = !0, e.on("addClass", q[d].element, function (b, c) {
	          if ("close" === c && (a.$currentTransition = null, e.off("addClass", b), t.length)) {
	            var d = t.pop().slide,
	                g = d.index,
	                i = g > p.getCurrentIndex() ? "next" : "prev";f(), h(d, g, i);
	          }
	        });
	      }a.active = c.index, s = c.index, g(d), l();
	    }
	  }function i(a) {
	    for (var b = 0; b < q.length; b++) {
	      if (q[b].slide === a) return b;
	    }
	  }function j() {
	    n && (c.cancel(n), n = null);
	  }function k(b) {
	    b.length || (a.$currentTransition = null, f());
	  }function l() {
	    j();var b = +a.interval;!isNaN(b) && b > 0 && (n = c(m, b));
	  }function m() {
	    var b = +a.interval;o && !isNaN(b) && b > 0 && q.length ? a.next() : a.pause();
	  }var n,
	      o,
	      p = this,
	      q = p.slides = a.slides = [],
	      r = "uib-slideDirection",
	      s = a.active,
	      t = [],
	      u = !1;p.addSlide = function (b, c) {
	    q.push({ slide: b, element: c }), q.sort(function (a, b) {
	      return +a.slide.index - +b.slide.index;
	    }), (b.index === a.active || 1 === q.length && !angular.isNumber(a.active)) && (a.$currentTransition && (a.$currentTransition = null), s = b.index, a.active = b.index, g(s), p.select(q[i(b)]), 1 === q.length && a.play());
	  }, p.getCurrentIndex = function () {
	    for (var a = 0; a < q.length; a++) {
	      if (q[a].slide.index === s) return a;
	    }
	  }, p.next = a.next = function () {
	    var b = (p.getCurrentIndex() + 1) % q.length;return 0 === b && a.noWrap() ? void a.pause() : p.select(q[b], "next");
	  }, p.prev = a.prev = function () {
	    var b = p.getCurrentIndex() - 1 < 0 ? q.length - 1 : p.getCurrentIndex() - 1;return a.noWrap() && b === q.length - 1 ? void a.pause() : p.select(q[b], "prev");
	  }, p.removeSlide = function (b) {
	    var c = i(b),
	        d = t.indexOf(q[c]);-1 !== d && t.splice(d, 1), q.splice(c, 1), q.length > 0 && s === c ? c >= q.length ? (s = q.length - 1, a.active = s, g(s), p.select(q[q.length - 1])) : (s = c, a.active = s, g(s), p.select(q[c])) : s > c && (s--, a.active = s), 0 === q.length && (s = null, a.active = null, f());
	  }, p.select = a.select = function (b, c) {
	    var d = i(b.slide);void 0 === c && (c = d > p.getCurrentIndex() ? "next" : "prev"), b.slide.index === s || a.$currentTransition ? b && b.slide.index !== s && a.$currentTransition && t.push(q[d]) : h(b.slide, d, c);
	  }, a.indexOfSlide = function (a) {
	    return +a.slide.index;
	  }, a.isActive = function (b) {
	    return a.active === b.slide.index;
	  }, a.isPrevDisabled = function () {
	    return 0 === a.active && a.noWrap();
	  }, a.isNextDisabled = function () {
	    return a.active === q.length - 1 && a.noWrap();
	  }, a.pause = function () {
	    a.noPause || (o = !1, j());
	  }, a.play = function () {
	    o || (o = !0, l());
	  }, a.$on("$destroy", function () {
	    u = !0, j();
	  }), a.$watch("noTransition", function (a) {
	    e.enabled(b, !a);
	  }), a.$watch("interval", l), a.$watchCollection("slides", k), a.$watch("active", function (a) {
	    if (angular.isNumber(a) && s !== a) {
	      for (var b = 0; b < q.length; b++) {
	        if (q[b].slide.index === a) {
	          a = b;break;
	        }
	      }var c = q[a];c && (g(a), p.select(q[a]), s = a);
	    }
	  });
	}]).directive("uibCarousel", function () {
	  return { transclude: !0, replace: !0, controller: "UibCarouselController", controllerAs: "carousel", templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/carousel/carousel.html";
	    }, scope: { active: "=", interval: "=", noTransition: "=", noPause: "=", noWrap: "&" } };
	}).directive("uibSlide", function () {
	  return { require: "^uibCarousel", transclude: !0, replace: !0, templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/carousel/slide.html";
	    }, scope: { actual: "=?", index: "=?" }, link: function link(a, b, c, d) {
	      d.addSlide(a, b), a.$on("$destroy", function () {
	        d.removeSlide(a);
	      });
	    } };
	}).animation(".item", ["$animateCss", function (a) {
	  function b(a, b, c) {
	    a.removeClass(b), c && c();
	  }var c = "uib-slideDirection";return { beforeAddClass: function beforeAddClass(d, e, f) {
	      if ("active" === e) {
	        var g = !1,
	            h = d.data(c),
	            i = "next" === h ? "left" : "right",
	            j = b.bind(this, d, i + " " + h, f);return d.addClass(h), a(d, { addClass: i }).start().done(j), function () {
	          g = !0;
	        };
	      }f();
	    }, beforeRemoveClass: function beforeRemoveClass(d, e, f) {
	      if ("active" === e) {
	        var g = !1,
	            h = d.data(c),
	            i = "next" === h ? "left" : "right",
	            j = b.bind(this, d, i, f);return a(d, { addClass: i }).start().done(j), function () {
	          g = !0;
	        };
	      }f();
	    } };
	}]), angular.module("ui.bootstrap.dateparser", []).service("uibDateParser", ["$log", "$locale", "dateFilter", "orderByFilter", function (a, b, c, d) {
	  function e(a, b) {
	    var c = [],
	        e = a.split(""),
	        f = a.indexOf("'");if (f > -1) {
	      var g = !1;a = a.split("");for (var h = f; h < a.length; h++) {
	        g ? ("'" === a[h] && (h + 1 < a.length && "'" === a[h + 1] ? (a[h + 1] = "$", e[h + 1] = "") : (e[h] = "", g = !1)), a[h] = "$") : "'" === a[h] && (a[h] = "$", e[h] = "", g = !0);
	      }a = a.join("");
	    }return angular.forEach(n, function (d) {
	      var f = a.indexOf(d.key);if (f > -1) {
	        a = a.split(""), e[f] = "(" + d.regex + ")", a[f] = "$";for (var g = f + 1, h = f + d.key.length; h > g; g++) {
	          e[g] = "", a[g] = "$";
	        }a = a.join(""), c.push({ index: f, key: d.key, apply: d[b], matcher: d.regex });
	      }
	    }), { regex: new RegExp("^" + e.join("") + "$"), map: d(c, "index") };
	  }function f(a, b, c) {
	    return 1 > c ? !1 : 1 === b && c > 28 ? 29 === c && (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) : 3 === b || 5 === b || 8 === b || 10 === b ? 31 > c : !0;
	  }function g(a) {
	    return parseInt(a, 10);
	  }function h(a, b) {
	    return a && b ? l(a, b) : a;
	  }function i(a, b) {
	    return a && b ? l(a, b, !0) : a;
	  }function j(a, b) {
	    a = a.replace(/:/g, "");var c = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6e4;return isNaN(c) ? b : c;
	  }function k(a, b) {
	    return a = new Date(a.getTime()), a.setMinutes(a.getMinutes() + b), a;
	  }function l(a, b, c) {
	    c = c ? -1 : 1;var d = a.getTimezoneOffset(),
	        e = j(b, d);return k(a, c * (e - d));
	  }var m,
	      n,
	      o = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;this.init = function () {
	    m = b.id, this.parsers = {}, this.formatters = {}, n = [{ key: "yyyy", regex: "\\d{4}", apply: function apply(a) {
	        this.year = +a;
	      }, formatter: function formatter(a) {
	        var b = new Date();return b.setFullYear(Math.abs(a.getFullYear())), c(b, "yyyy");
	      } }, { key: "yy", regex: "\\d{2}", apply: function apply(a) {
	        a = +a, this.year = 69 > a ? a + 2e3 : a + 1900;
	      }, formatter: function formatter(a) {
	        var b = new Date();return b.setFullYear(Math.abs(a.getFullYear())), c(b, "yy");
	      } }, { key: "y", regex: "\\d{1,4}", apply: function apply(a) {
	        this.year = +a;
	      }, formatter: function formatter(a) {
	        var b = new Date();return b.setFullYear(Math.abs(a.getFullYear())), c(b, "y");
	      } }, { key: "M!", regex: "0?[1-9]|1[0-2]", apply: function apply(a) {
	        this.month = a - 1;
	      }, formatter: function formatter(a) {
	        var b = a.getMonth();return (/^[0-9]$/.test(b) ? c(a, "MM") : c(a, "M")
	        );
	      } }, { key: "MMMM", regex: b.DATETIME_FORMATS.MONTH.join("|"), apply: function apply(a) {
	        this.month = b.DATETIME_FORMATS.MONTH.indexOf(a);
	      }, formatter: function formatter(a) {
	        return c(a, "MMMM");
	      } }, { key: "MMM", regex: b.DATETIME_FORMATS.SHORTMONTH.join("|"), apply: function apply(a) {
	        this.month = b.DATETIME_FORMATS.SHORTMONTH.indexOf(a);
	      }, formatter: function formatter(a) {
	        return c(a, "MMM");
	      } }, { key: "MM", regex: "0[1-9]|1[0-2]", apply: function apply(a) {
	        this.month = a - 1;
	      }, formatter: function formatter(a) {
	        return c(a, "MM");
	      } }, { key: "M", regex: "[1-9]|1[0-2]", apply: function apply(a) {
	        this.month = a - 1;
	      }, formatter: function formatter(a) {
	        return c(a, "M");
	      } }, { key: "d!", regex: "[0-2]?[0-9]{1}|3[0-1]{1}", apply: function apply(a) {
	        this.date = +a;
	      }, formatter: function formatter(a) {
	        var b = a.getDate();return (/^[1-9]$/.test(b) ? c(a, "dd") : c(a, "d")
	        );
	      } }, { key: "dd", regex: "[0-2][0-9]{1}|3[0-1]{1}", apply: function apply(a) {
	        this.date = +a;
	      }, formatter: function formatter(a) {
	        return c(a, "dd");
	      } }, { key: "d", regex: "[1-2]?[0-9]{1}|3[0-1]{1}", apply: function apply(a) {
	        this.date = +a;
	      }, formatter: function formatter(a) {
	        return c(a, "d");
	      } }, { key: "EEEE", regex: b.DATETIME_FORMATS.DAY.join("|"), formatter: function formatter(a) {
	        return c(a, "EEEE");
	      } }, { key: "EEE", regex: b.DATETIME_FORMATS.SHORTDAY.join("|"), formatter: function formatter(a) {
	        return c(a, "EEE");
	      } }, { key: "HH", regex: "(?:0|1)[0-9]|2[0-3]", apply: function apply(a) {
	        this.hours = +a;
	      }, formatter: function formatter(a) {
	        return c(a, "HH");
	      } }, { key: "hh", regex: "0[0-9]|1[0-2]", apply: function apply(a) {
	        this.hours = +a;
	      }, formatter: function formatter(a) {
	        return c(a, "hh");
	      } }, { key: "H", regex: "1?[0-9]|2[0-3]", apply: function apply(a) {
	        this.hours = +a;
	      }, formatter: function formatter(a) {
	        return c(a, "H");
	      } }, { key: "h", regex: "[0-9]|1[0-2]", apply: function apply(a) {
	        this.hours = +a;
	      }, formatter: function formatter(a) {
	        return c(a, "h");
	      } }, { key: "mm", regex: "[0-5][0-9]", apply: function apply(a) {
	        this.minutes = +a;
	      }, formatter: function formatter(a) {
	        return c(a, "mm");
	      } }, { key: "m", regex: "[0-9]|[1-5][0-9]", apply: function apply(a) {
	        this.minutes = +a;
	      }, formatter: function formatter(a) {
	        return c(a, "m");
	      } }, { key: "sss", regex: "[0-9][0-9][0-9]", apply: function apply(a) {
	        this.milliseconds = +a;
	      }, formatter: function formatter(a) {
	        return c(a, "sss");
	      } }, { key: "ss", regex: "[0-5][0-9]", apply: function apply(a) {
	        this.seconds = +a;
	      }, formatter: function formatter(a) {
	        return c(a, "ss");
	      } }, { key: "s", regex: "[0-9]|[1-5][0-9]", apply: function apply(a) {
	        this.seconds = +a;
	      }, formatter: function formatter(a) {
	        return c(a, "s");
	      } }, { key: "a", regex: b.DATETIME_FORMATS.AMPMS.join("|"), apply: function apply(a) {
	        12 === this.hours && (this.hours = 0), "PM" === a && (this.hours += 12);
	      }, formatter: function formatter(a) {
	        return c(a, "a");
	      } }, { key: "Z", regex: "[+-]\\d{4}", apply: function apply(a) {
	        var b = a.match(/([+-])(\d{2})(\d{2})/),
	            c = b[1],
	            d = b[2],
	            e = b[3];this.hours += g(c + d), this.minutes += g(c + e);
	      }, formatter: function formatter(a) {
	        return c(a, "Z");
	      } }, { key: "ww", regex: "[0-4][0-9]|5[0-3]", formatter: function formatter(a) {
	        return c(a, "ww");
	      } }, { key: "w", regex: "[0-9]|[1-4][0-9]|5[0-3]", formatter: function formatter(a) {
	        return c(a, "w");
	      } }, { key: "GGGG", regex: b.DATETIME_FORMATS.ERANAMES.join("|").replace(/\s/g, "\\s"), formatter: function formatter(a) {
	        return c(a, "GGGG");
	      } }, { key: "GGG", regex: b.DATETIME_FORMATS.ERAS.join("|"), formatter: function formatter(a) {
	        return c(a, "GGG");
	      } }, { key: "GG", regex: b.DATETIME_FORMATS.ERAS.join("|"), formatter: function formatter(a) {
	        return c(a, "GG");
	      } }, { key: "G", regex: b.DATETIME_FORMATS.ERAS.join("|"), formatter: function formatter(a) {
	        return c(a, "G");
	      } }];
	  }, this.init(), this.filter = function (a, c) {
	    if (!angular.isDate(a) || isNaN(a) || !c) return "";c = b.DATETIME_FORMATS[c] || c, b.id !== m && this.init(), this.formatters[c] || (this.formatters[c] = e(c, "formatter"));var d = this.formatters[c],
	        f = d.map,
	        g = c;return f.reduce(function (b, c, d) {
	      var e = g.match(new RegExp("(.*)" + c.key));e && angular.isString(e[1]) && (b += e[1], g = g.replace(e[1] + c.key, ""));var h = d === f.length - 1 ? g : "";return c.apply ? b + c.apply.call(null, a) + h : b + h;
	    }, "");
	  }, this.parse = function (c, d, g) {
	    if (!angular.isString(c) || !d) return c;d = b.DATETIME_FORMATS[d] || d, d = d.replace(o, "\\$&"), b.id !== m && this.init(), this.parsers[d] || (this.parsers[d] = e(d, "apply"));var h = this.parsers[d],
	        i = h.regex,
	        j = h.map,
	        k = c.match(i),
	        l = !1;if (k && k.length) {
	      var n, p;angular.isDate(g) && !isNaN(g.getTime()) ? n = { year: g.getFullYear(), month: g.getMonth(), date: g.getDate(), hours: g.getHours(), minutes: g.getMinutes(), seconds: g.getSeconds(), milliseconds: g.getMilliseconds() } : (g && a.warn("dateparser:", "baseDate is not a valid date"), n = { year: 1900, month: 0, date: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });for (var q = 1, r = k.length; r > q; q++) {
	        var s = j[q - 1];"Z" === s.matcher && (l = !0), s.apply && s.apply.call(n, k[q]);
	      }var t = l ? Date.prototype.setUTCFullYear : Date.prototype.setFullYear,
	          u = l ? Date.prototype.setUTCHours : Date.prototype.setHours;return f(n.year, n.month, n.date) && (!angular.isDate(g) || isNaN(g.getTime()) || l ? (p = new Date(0), t.call(p, n.year, n.month, n.date), u.call(p, n.hours || 0, n.minutes || 0, n.seconds || 0, n.milliseconds || 0)) : (p = new Date(g), t.call(p, n.year, n.month, n.date), u.call(p, n.hours, n.minutes, n.seconds, n.milliseconds))), p;
	    }
	  }, this.toTimezone = h, this.fromTimezone = i, this.timezoneToOffset = j, this.addDateMinutes = k, this.convertTimezoneToLocal = l;
	}]), angular.module("ui.bootstrap.isClass", []).directive("uibIsClass", ["$animate", function (a) {
	  var b = /^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/,
	      c = /^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;return { restrict: "A", compile: function compile(d, e) {
	      function f(a, b, c) {
	        i.push(a), j.push({ scope: a, element: b }), o.forEach(function (b, c) {
	          g(b, a);
	        }), a.$on("$destroy", h);
	      }function g(b, d) {
	        var e = b.match(c),
	            f = d.$eval(e[1]),
	            g = e[2],
	            h = k[b];if (!h) {
	          var i = function i(b) {
	            var c = null;j.some(function (a) {
	              var d = a.scope.$eval(m);return d === b ? (c = a, !0) : void 0;
	            }), h.lastActivated !== c && (h.lastActivated && a.removeClass(h.lastActivated.element, f), c && a.addClass(c.element, f), h.lastActivated = c);
	          };k[b] = h = { lastActivated: null, scope: d, watchFn: i, compareWithExp: g, watcher: d.$watch(g, i) };
	        }h.watchFn(d.$eval(g));
	      }function h(a) {
	        var b = a.targetScope,
	            c = i.indexOf(b);if (i.splice(c, 1), j.splice(c, 1), i.length) {
	          var d = i[0];angular.forEach(k, function (a) {
	            a.scope === b && (a.watcher = d.$watch(a.compareWithExp, a.watchFn), a.scope = d);
	          });
	        } else k = {};
	      }var i = [],
	          j = [],
	          k = {},
	          l = e.uibIsClass.match(b),
	          m = l[2],
	          n = l[1],
	          o = n.split(",");return f;
	    } };
	}]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.isClass"]).value("$datepickerSuppressError", !1).value("$datepickerLiteralWarning", !0).constant("uibDatepickerConfig", { datepickerMode: "day", formatDay: "dd", formatMonth: "MMMM", formatYear: "yyyy", formatDayHeader: "EEE", formatDayTitle: "MMMM yyyy", formatMonthTitle: "yyyy", maxDate: null, maxMode: "year", minDate: null, minMode: "day", ngModelOptions: {}, shortcutPropagation: !1, showWeeks: !0, yearColumns: 5, yearRows: 4 }).controller("UibDatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$locale", "$log", "dateFilter", "uibDatepickerConfig", "$datepickerLiteralWarning", "$datepickerSuppressError", "uibDateParser", function (a, b, c, d, e, f, g, h, i, j, k) {
	  function l(b) {
	    a.datepickerMode = b, a.datepickerOptions.datepickerMode = b;
	  }var m = this,
	      n = { $setViewValue: angular.noop },
	      o = {},
	      p = [];!!b.datepickerOptions;a.datepickerOptions || (a.datepickerOptions = {}), this.modes = ["day", "month", "year"], ["customClass", "dateDisabled", "datepickerMode", "formatDay", "formatDayHeader", "formatDayTitle", "formatMonth", "formatMonthTitle", "formatYear", "maxDate", "maxMode", "minDate", "minMode", "showWeeks", "shortcutPropagation", "startingDay", "yearColumns", "yearRows"].forEach(function (b) {
	    switch (b) {case "customClass":case "dateDisabled":
	        a[b] = a.datepickerOptions[b] || angular.noop;break;case "datepickerMode":
	        a.datepickerMode = angular.isDefined(a.datepickerOptions.datepickerMode) ? a.datepickerOptions.datepickerMode : h.datepickerMode;break;case "formatDay":case "formatDayHeader":case "formatDayTitle":case "formatMonth":case "formatMonthTitle":case "formatYear":
	        m[b] = angular.isDefined(a.datepickerOptions[b]) ? d(a.datepickerOptions[b])(a.$parent) : h[b];break;case "showWeeks":case "shortcutPropagation":case "yearColumns":case "yearRows":
	        m[b] = angular.isDefined(a.datepickerOptions[b]) ? a.datepickerOptions[b] : h[b];break;case "startingDay":
	        angular.isDefined(a.datepickerOptions.startingDay) ? m.startingDay = a.datepickerOptions.startingDay : angular.isNumber(h.startingDay) ? m.startingDay = h.startingDay : m.startingDay = (e.DATETIME_FORMATS.FIRSTDAYOFWEEK + 8) % 7;break;case "maxDate":case "minDate":
	        a.$watch("datepickerOptions." + b, function (a) {
	          a ? angular.isDate(a) ? m[b] = k.fromTimezone(new Date(a), o.timezone) : (i && f.warn("Literal date support has been deprecated, please switch to date object usage"), m[b] = new Date(g(a, "medium"))) : m[b] = h[b] ? k.fromTimezone(new Date(h[b]), o.timezone) : null, m.refreshView();
	        });break;case "maxMode":case "minMode":
	        a.datepickerOptions[b] ? a.$watch(function () {
	          return a.datepickerOptions[b];
	        }, function (c) {
	          m[b] = a[b] = angular.isDefined(c) ? c : datepickerOptions[b], ("minMode" === b && m.modes.indexOf(a.datepickerOptions.datepickerMode) < m.modes.indexOf(m[b]) || "maxMode" === b && m.modes.indexOf(a.datepickerOptions.datepickerMode) > m.modes.indexOf(m[b])) && (a.datepickerMode = m[b], a.datepickerOptions.datepickerMode = m[b]);
	        }) : m[b] = a[b] = h[b] || null;}
	  }), a.uniqueId = "datepicker-" + a.$id + "-" + Math.floor(1e4 * Math.random()), a.disabled = angular.isDefined(b.disabled) || !1, angular.isDefined(b.ngDisabled) && p.push(a.$parent.$watch(b.ngDisabled, function (b) {
	    a.disabled = b, m.refreshView();
	  })), a.isActive = function (b) {
	    return 0 === m.compare(b.date, m.activeDate) ? (a.activeDateId = b.uid, !0) : !1;
	  }, this.init = function (b) {
	    n = b, o = b.$options || h.ngModelOptions, a.datepickerOptions.initDate ? (m.activeDate = k.fromTimezone(a.datepickerOptions.initDate, o.timezone) || new Date(), a.$watch("datepickerOptions.initDate", function (a) {
	      a && (n.$isEmpty(n.$modelValue) || n.$invalid) && (m.activeDate = k.fromTimezone(a, o.timezone), m.refreshView());
	    })) : m.activeDate = new Date();var c = n.$modelValue ? new Date(n.$modelValue) : new Date();this.activeDate = isNaN(c) ? k.fromTimezone(new Date(), o.timezone) : k.fromTimezone(c, o.timezone), n.$render = function () {
	      m.render();
	    };
	  }, this.render = function () {
	    if (n.$viewValue) {
	      var a = new Date(n.$viewValue),
	          b = !isNaN(a);b ? this.activeDate = k.fromTimezone(a, o.timezone) : j || f.error('Datepicker directive: "ng-model" value must be a Date object');
	    }this.refreshView();
	  }, this.refreshView = function () {
	    if (this.element) {
	      a.selectedDt = null, this._refreshView(), a.activeDt && (a.activeDateId = a.activeDt.uid);var b = n.$viewValue ? new Date(n.$viewValue) : null;b = k.fromTimezone(b, o.timezone), n.$setValidity("dateDisabled", !b || this.element && !this.isDisabled(b));
	    }
	  }, this.createDateObject = function (b, c) {
	    var d = n.$viewValue ? new Date(n.$viewValue) : null;d = k.fromTimezone(d, o.timezone);var e = new Date();e = k.fromTimezone(e, o.timezone);var f = this.compare(b, e),
	        g = { date: b, label: k.filter(b, c), selected: d && 0 === this.compare(b, d), disabled: this.isDisabled(b), past: 0 > f, current: 0 === f, future: f > 0, customClass: this.customClass(b) || null };return d && 0 === this.compare(b, d) && (a.selectedDt = g), m.activeDate && 0 === this.compare(g.date, m.activeDate) && (a.activeDt = g), g;
	  }, this.isDisabled = function (b) {
	    return a.disabled || this.minDate && this.compare(b, this.minDate) < 0 || this.maxDate && this.compare(b, this.maxDate) > 0 || a.dateDisabled && a.dateDisabled({ date: b, mode: a.datepickerMode });
	  }, this.customClass = function (b) {
	    return a.customClass({ date: b, mode: a.datepickerMode });
	  }, this.split = function (a, b) {
	    for (var c = []; a.length > 0;) {
	      c.push(a.splice(0, b));
	    }return c;
	  }, a.select = function (b) {
	    if (a.datepickerMode === m.minMode) {
	      var c = n.$viewValue ? k.fromTimezone(new Date(n.$viewValue), o.timezone) : new Date(0, 0, 0, 0, 0, 0, 0);c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), c = k.toTimezone(c, o.timezone), n.$setViewValue(c), n.$render();
	    } else m.activeDate = b, l(m.modes[m.modes.indexOf(a.datepickerMode) - 1]), a.$emit("uib:datepicker.mode");a.$broadcast("uib:datepicker.focus");
	  }, a.move = function (a) {
	    var b = m.activeDate.getFullYear() + a * (m.step.years || 0),
	        c = m.activeDate.getMonth() + a * (m.step.months || 0);m.activeDate.setFullYear(b, c, 1), m.refreshView();
	  }, a.toggleMode = function (b) {
	    b = b || 1, a.datepickerMode === m.maxMode && 1 === b || a.datepickerMode === m.minMode && -1 === b || (l(m.modes[m.modes.indexOf(a.datepickerMode) + b]), a.$emit("uib:datepicker.mode"));
	  }, a.keys = { 13: "enter", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home", 37: "left", 38: "up", 39: "right", 40: "down" };var q = function q() {
	    m.element[0].focus();
	  };a.$on("uib:datepicker.focus", q), a.keydown = function (b) {
	    var c = a.keys[b.which];if (c && !b.shiftKey && !b.altKey && !a.disabled) if (b.preventDefault(), m.shortcutPropagation || b.stopPropagation(), "enter" === c || "space" === c) {
	      if (m.isDisabled(m.activeDate)) return;a.select(m.activeDate);
	    } else !b.ctrlKey || "up" !== c && "down" !== c ? (m.handleKeyDown(c, b), m.refreshView()) : a.toggleMode("up" === c ? 1 : -1);
	  }, a.$on("$destroy", function () {
	    for (; p.length;) {
	      p.shift()();
	    }
	  });
	}]).controller("UibDaypickerController", ["$scope", "$element", "dateFilter", function (a, b, c) {
	  function d(a, b) {
	    return 1 !== b || a % 4 !== 0 || a % 100 === 0 && a % 400 !== 0 ? f[b] : 29;
	  }function e(a) {
	    var b = new Date(a);b.setDate(b.getDate() + 4 - (b.getDay() || 7));var c = b.getTime();return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1;
	  }var f = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];this.step = { months: 1 }, this.element = b, this.init = function (b) {
	    angular.extend(b, this), a.showWeeks = b.showWeeks, b.refreshView();
	  }, this.getDates = function (a, b) {
	    for (var c, d = new Array(b), e = new Date(a), f = 0; b > f;) {
	      c = new Date(e), d[f++] = c, e.setDate(e.getDate() + 1);
	    }return d;
	  }, this._refreshView = function () {
	    var b = this.activeDate.getFullYear(),
	        d = this.activeDate.getMonth(),
	        f = new Date(this.activeDate);f.setFullYear(b, d, 1);var g = this.startingDay - f.getDay(),
	        h = g > 0 ? 7 - g : -g,
	        i = new Date(f);h > 0 && i.setDate(-h + 1);for (var j = this.getDates(i, 42), k = 0; 42 > k; k++) {
	      j[k] = angular.extend(this.createDateObject(j[k], this.formatDay), { secondary: j[k].getMonth() !== d, uid: a.uniqueId + "-" + k });
	    }a.labels = new Array(7);for (var l = 0; 7 > l; l++) {
	      a.labels[l] = { abbr: c(j[l].date, this.formatDayHeader), full: c(j[l].date, "EEEE") };
	    }if (a.title = c(this.activeDate, this.formatDayTitle), a.rows = this.split(j, 7), a.showWeeks) {
	      a.weekNumbers = [];for (var m = (11 - this.startingDay) % 7, n = a.rows.length, o = 0; n > o; o++) {
	        a.weekNumbers.push(e(a.rows[o][m].date));
	      }
	    }
	  }, this.compare = function (a, b) {
	    var c = new Date(a.getFullYear(), a.getMonth(), a.getDate()),
	        d = new Date(b.getFullYear(), b.getMonth(), b.getDate());return c.setFullYear(a.getFullYear()), d.setFullYear(b.getFullYear()), c - d;
	  }, this.handleKeyDown = function (a, b) {
	    var c = this.activeDate.getDate();if ("left" === a) c -= 1;else if ("up" === a) c -= 7;else if ("right" === a) c += 1;else if ("down" === a) c += 7;else if ("pageup" === a || "pagedown" === a) {
	      var e = this.activeDate.getMonth() + ("pageup" === a ? -1 : 1);this.activeDate.setMonth(e, 1), c = Math.min(d(this.activeDate.getFullYear(), this.activeDate.getMonth()), c);
	    } else "home" === a ? c = 1 : "end" === a && (c = d(this.activeDate.getFullYear(), this.activeDate.getMonth()));this.activeDate.setDate(c);
	  };
	}]).controller("UibMonthpickerController", ["$scope", "$element", "dateFilter", function (a, b, c) {
	  this.step = { years: 1 }, this.element = b, this.init = function (a) {
	    angular.extend(a, this), a.refreshView();
	  }, this._refreshView = function () {
	    for (var b, d = new Array(12), e = this.activeDate.getFullYear(), f = 0; 12 > f; f++) {
	      b = new Date(this.activeDate), b.setFullYear(e, f, 1), d[f] = angular.extend(this.createDateObject(b, this.formatMonth), { uid: a.uniqueId + "-" + f });
	    }a.title = c(this.activeDate, this.formatMonthTitle), a.rows = this.split(d, 3);
	  }, this.compare = function (a, b) {
	    var c = new Date(a.getFullYear(), a.getMonth()),
	        d = new Date(b.getFullYear(), b.getMonth());return c.setFullYear(a.getFullYear()), d.setFullYear(b.getFullYear()), c - d;
	  }, this.handleKeyDown = function (a, b) {
	    var c = this.activeDate.getMonth();if ("left" === a) c -= 1;else if ("up" === a) c -= 3;else if ("right" === a) c += 1;else if ("down" === a) c += 3;else if ("pageup" === a || "pagedown" === a) {
	      var d = this.activeDate.getFullYear() + ("pageup" === a ? -1 : 1);this.activeDate.setFullYear(d);
	    } else "home" === a ? c = 0 : "end" === a && (c = 11);this.activeDate.setMonth(c);
	  };
	}]).controller("UibYearpickerController", ["$scope", "$element", "dateFilter", function (a, b, c) {
	  function d(a) {
	    return parseInt((a - 1) / f, 10) * f + 1;
	  }var e, f;this.element = b, this.yearpickerInit = function () {
	    e = this.yearColumns, f = this.yearRows * e, this.step = { years: f };
	  }, this._refreshView = function () {
	    for (var b, c = new Array(f), g = 0, h = d(this.activeDate.getFullYear()); f > g; g++) {
	      b = new Date(this.activeDate), b.setFullYear(h + g, 0, 1), c[g] = angular.extend(this.createDateObject(b, this.formatYear), { uid: a.uniqueId + "-" + g });
	    }a.title = [c[0].label, c[f - 1].label].join(" - "), a.rows = this.split(c, e), a.columns = e;
	  }, this.compare = function (a, b) {
	    return a.getFullYear() - b.getFullYear();
	  }, this.handleKeyDown = function (a, b) {
	    var c = this.activeDate.getFullYear();"left" === a ? c -= 1 : "up" === a ? c -= e : "right" === a ? c += 1 : "down" === a ? c += e : "pageup" === a || "pagedown" === a ? c += ("pageup" === a ? -1 : 1) * f : "home" === a ? c = d(this.activeDate.getFullYear()) : "end" === a && (c = d(this.activeDate.getFullYear()) + f - 1), this.activeDate.setFullYear(c);
	  };
	}]).directive("uibDatepicker", function () {
	  return { replace: !0, templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/datepicker/datepicker.html";
	    }, scope: { datepickerOptions: "=?" }, require: ["uibDatepicker", "^ngModel"], controller: "UibDatepickerController", controllerAs: "datepicker", link: function link(a, b, c, d) {
	      var e = d[0],
	          f = d[1];e.init(f);
	    } };
	}).directive("uibDaypicker", function () {
	  return { replace: !0, templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/datepicker/day.html";
	    }, require: ["^uibDatepicker", "uibDaypicker"], controller: "UibDaypickerController", link: function link(a, b, c, d) {
	      var e = d[0],
	          f = d[1];f.init(e);
	    } };
	}).directive("uibMonthpicker", function () {
	  return { replace: !0, templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/datepicker/month.html";
	    }, require: ["^uibDatepicker", "uibMonthpicker"], controller: "UibMonthpickerController", link: function link(a, b, c, d) {
	      var e = d[0],
	          f = d[1];f.init(e);
	    } };
	}).directive("uibYearpicker", function () {
	  return { replace: !0, templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/datepicker/year.html";
	    }, require: ["^uibDatepicker", "uibYearpicker"], controller: "UibYearpickerController", link: function link(a, b, c, d) {
	      var e = d[0];angular.extend(e, d[1]), e.yearpickerInit(), e.refreshView();
	    } };
	}), angular.module("ui.bootstrap.position", []).factory("$uibPosition", ["$document", "$window", function (a, b) {
	  var c,
	      d,
	      e = { normal: /(auto|scroll)/, hidden: /(auto|scroll|hidden)/ },
	      f = { auto: /\s?auto?\s?/i, primary: /^(top|bottom|left|right)$/, secondary: /^(top|bottom|left|right|center)$/, vertical: /^(top|bottom)$/ },
	      g = /(HTML|BODY)/;return { getRawNode: function getRawNode(a) {
	      return a.nodeName ? a : a[0] || a;
	    }, parseStyle: function parseStyle(a) {
	      return a = parseFloat(a), isFinite(a) ? a : 0;
	    }, offsetParent: function offsetParent(c) {
	      function d(a) {
	        return "static" === (b.getComputedStyle(a).position || "static");
	      }c = this.getRawNode(c);for (var e = c.offsetParent || a[0].documentElement; e && e !== a[0].documentElement && d(e);) {
	        e = e.offsetParent;
	      }return e || a[0].documentElement;
	    }, scrollbarWidth: function scrollbarWidth(e) {
	      if (e) {
	        if (angular.isUndefined(d)) {
	          var f = a.find("body");f.addClass("uib-position-body-scrollbar-measure"), d = b.innerWidth - f[0].clientWidth, d = isFinite(d) ? d : 0, f.removeClass("uib-position-body-scrollbar-measure");
	        }return d;
	      }if (angular.isUndefined(c)) {
	        var g = angular.element('<div class="uib-position-scrollbar-measure"></div>');a.find("body").append(g), c = g[0].offsetWidth - g[0].clientWidth, c = isFinite(c) ? c : 0, g.remove();
	      }return c;
	    }, scrollbarPadding: function scrollbarPadding(a) {
	      a = this.getRawNode(a);var c = b.getComputedStyle(a),
	          d = this.parseStyle(c.paddingRight),
	          e = this.parseStyle(c.paddingBottom),
	          f = this.scrollParent(a, !1, !0),
	          h = this.scrollbarWidth(f, g.test(f.tagName));return { scrollbarWidth: h, widthOverflow: f.scrollWidth > f.clientWidth, right: d + h, originalRight: d, heightOverflow: f.scrollHeight > f.clientHeight,
	        bottom: e + h, originalBottom: e };
	    }, isScrollable: function isScrollable(a, c) {
	      a = this.getRawNode(a);var d = c ? e.hidden : e.normal,
	          f = b.getComputedStyle(a);return d.test(f.overflow + f.overflowY + f.overflowX);
	    }, scrollParent: function scrollParent(c, d, f) {
	      c = this.getRawNode(c);var g = d ? e.hidden : e.normal,
	          h = a[0].documentElement,
	          i = b.getComputedStyle(c);if (f && g.test(i.overflow + i.overflowY + i.overflowX)) return c;var j = "absolute" === i.position,
	          k = c.parentElement || h;if (k === h || "fixed" === i.position) return h;for (; k.parentElement && k !== h;) {
	        var l = b.getComputedStyle(k);if (j && "static" !== l.position && (j = !1), !j && g.test(l.overflow + l.overflowY + l.overflowX)) break;k = k.parentElement;
	      }return k;
	    }, position: function position(c, d) {
	      c = this.getRawNode(c);var e = this.offset(c);if (d) {
	        var f = b.getComputedStyle(c);e.top -= this.parseStyle(f.marginTop), e.left -= this.parseStyle(f.marginLeft);
	      }var g = this.offsetParent(c),
	          h = { top: 0, left: 0 };return g !== a[0].documentElement && (h = this.offset(g), h.top += g.clientTop - g.scrollTop, h.left += g.clientLeft - g.scrollLeft), { width: Math.round(angular.isNumber(e.width) ? e.width : c.offsetWidth), height: Math.round(angular.isNumber(e.height) ? e.height : c.offsetHeight), top: Math.round(e.top - h.top), left: Math.round(e.left - h.left) };
	    }, offset: function offset(c) {
	      c = this.getRawNode(c);var d = c.getBoundingClientRect();return { width: Math.round(angular.isNumber(d.width) ? d.width : c.offsetWidth), height: Math.round(angular.isNumber(d.height) ? d.height : c.offsetHeight), top: Math.round(d.top + (b.pageYOffset || a[0].documentElement.scrollTop)), left: Math.round(d.left + (b.pageXOffset || a[0].documentElement.scrollLeft)) };
	    }, viewportOffset: function viewportOffset(c, d, e) {
	      c = this.getRawNode(c), e = e !== !1;var f = c.getBoundingClientRect(),
	          g = { top: 0, left: 0, bottom: 0, right: 0 },
	          h = d ? a[0].documentElement : this.scrollParent(c),
	          i = h.getBoundingClientRect();if (g.top = i.top + h.clientTop, g.left = i.left + h.clientLeft, h === a[0].documentElement && (g.top += b.pageYOffset, g.left += b.pageXOffset), g.bottom = g.top + h.clientHeight, g.right = g.left + h.clientWidth, e) {
	        var j = b.getComputedStyle(h);g.top += this.parseStyle(j.paddingTop), g.bottom -= this.parseStyle(j.paddingBottom), g.left += this.parseStyle(j.paddingLeft), g.right -= this.parseStyle(j.paddingRight);
	      }return { top: Math.round(f.top - g.top), bottom: Math.round(g.bottom - f.bottom), left: Math.round(f.left - g.left), right: Math.round(g.right - f.right) };
	    }, parsePlacement: function parsePlacement(a) {
	      var b = f.auto.test(a);return b && (a = a.replace(f.auto, "")), a = a.split("-"), a[0] = a[0] || "top", f.primary.test(a[0]) || (a[0] = "top"), a[1] = a[1] || "center", f.secondary.test(a[1]) || (a[1] = "center"), b ? a[2] = !0 : a[2] = !1, a;
	    }, positionElements: function positionElements(a, c, d, e) {
	      a = this.getRawNode(a), c = this.getRawNode(c);var g = angular.isDefined(c.offsetWidth) ? c.offsetWidth : c.prop("offsetWidth"),
	          h = angular.isDefined(c.offsetHeight) ? c.offsetHeight : c.prop("offsetHeight");d = this.parsePlacement(d);var i = e ? this.offset(a) : this.position(a),
	          j = { top: 0, left: 0, placement: "" };if (d[2]) {
	        var k = this.viewportOffset(a, e),
	            l = b.getComputedStyle(c),
	            m = { width: g + Math.round(Math.abs(this.parseStyle(l.marginLeft) + this.parseStyle(l.marginRight))), height: h + Math.round(Math.abs(this.parseStyle(l.marginTop) + this.parseStyle(l.marginBottom))) };if (d[0] = "top" === d[0] && m.height > k.top && m.height <= k.bottom ? "bottom" : "bottom" === d[0] && m.height > k.bottom && m.height <= k.top ? "top" : "left" === d[0] && m.width > k.left && m.width <= k.right ? "right" : "right" === d[0] && m.width > k.right && m.width <= k.left ? "left" : d[0], d[1] = "top" === d[1] && m.height - i.height > k.bottom && m.height - i.height <= k.top ? "bottom" : "bottom" === d[1] && m.height - i.height > k.top && m.height - i.height <= k.bottom ? "top" : "left" === d[1] && m.width - i.width > k.right && m.width - i.width <= k.left ? "right" : "right" === d[1] && m.width - i.width > k.left && m.width - i.width <= k.right ? "left" : d[1], "center" === d[1]) if (f.vertical.test(d[0])) {
	          var n = i.width / 2 - g / 2;k.left + n < 0 && m.width - i.width <= k.right ? d[1] = "left" : k.right + n < 0 && m.width - i.width <= k.left && (d[1] = "right");
	        } else {
	          var o = i.height / 2 - m.height / 2;k.top + o < 0 && m.height - i.height <= k.bottom ? d[1] = "top" : k.bottom + o < 0 && m.height - i.height <= k.top && (d[1] = "bottom");
	        }
	      }switch (d[0]) {case "top":
	          j.top = i.top - h;break;case "bottom":
	          j.top = i.top + i.height;break;case "left":
	          j.left = i.left - g;break;case "right":
	          j.left = i.left + i.width;}switch (d[1]) {case "top":
	          j.top = i.top;break;case "bottom":
	          j.top = i.top + i.height - h;break;case "left":
	          j.left = i.left;break;case "right":
	          j.left = i.left + i.width - g;break;case "center":
	          f.vertical.test(d[0]) ? j.left = i.left + i.width / 2 - g / 2 : j.top = i.top + i.height / 2 - h / 2;}return j.top = Math.round(j.top), j.left = Math.round(j.left), j.placement = "center" === d[1] ? d[0] : d[0] + "-" + d[1], j;
	    }, positionArrow: function positionArrow(a, c) {
	      a = this.getRawNode(a);var d = a.querySelector(".tooltip-inner, .popover-inner");if (d) {
	        var e = angular.element(d).hasClass("tooltip-inner"),
	            g = e ? a.querySelector(".tooltip-arrow") : a.querySelector(".arrow");if (g) {
	          var h = { top: "", bottom: "", left: "", right: "" };if (c = this.parsePlacement(c), "center" === c[1]) return void angular.element(g).css(h);var i = "border-" + c[0] + "-width",
	              j = b.getComputedStyle(g)[i],
	              k = "border-";k += f.vertical.test(c[0]) ? c[0] + "-" + c[1] : c[1] + "-" + c[0], k += "-radius";var l = b.getComputedStyle(e ? d : a)[k];switch (c[0]) {case "top":
	              h.bottom = e ? "0" : "-" + j;break;case "bottom":
	              h.top = e ? "0" : "-" + j;break;case "left":
	              h.right = e ? "0" : "-" + j;break;case "right":
	              h.left = e ? "0" : "-" + j;}h[c[1]] = l, angular.element(g).css(h);
	        }
	      }
	    } };
	}]), angular.module("ui.bootstrap.datepickerPopup", ["ui.bootstrap.datepicker", "ui.bootstrap.position"]).value("$datepickerPopupLiteralWarning", !0).constant("uibDatepickerPopupConfig", { altInputFormats: [], appendToBody: !1, clearText: "Clear", closeOnDateSelection: !0, closeText: "Done", currentText: "Today", datepickerPopup: "yyyy-MM-dd", datepickerPopupTemplateUrl: "uib/template/datepickerPopup/popup.html", datepickerTemplateUrl: "uib/template/datepicker/datepicker.html", html5Types: { date: "yyyy-MM-dd", "datetime-local": "yyyy-MM-ddTHH:mm:ss.sss", month: "yyyy-MM" }, onOpenFocus: !0, showButtonBar: !0, placement: "auto bottom-left" }).controller("UibDatepickerPopupController", ["$scope", "$element", "$attrs", "$compile", "$log", "$parse", "$window", "$document", "$rootScope", "$uibPosition", "dateFilter", "uibDateParser", "uibDatepickerPopupConfig", "$timeout", "uibDatepickerConfig", "$datepickerPopupLiteralWarning", function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
	  function q(b) {
	    var c = l.parse(b, w, a.date);if (isNaN(c)) for (var d = 0; d < I.length; d++) {
	      if (c = l.parse(b, I[d], a.date), !isNaN(c)) return c;
	    }return c;
	  }function r(a) {
	    if (angular.isNumber(a) && (a = new Date(a)), !a) return null;if (angular.isDate(a) && !isNaN(a)) return a;if (angular.isString(a)) {
	      var b = q(a);if (!isNaN(b)) return l.toTimezone(b, J);
	    }return F.$options && F.$options.allowInvalid ? a : void 0;
	  }function s(a, b) {
	    var d = a || b;return c.ngRequired || d ? (angular.isNumber(d) && (d = new Date(d)), d ? angular.isDate(d) && !isNaN(d) ? !0 : angular.isString(d) ? !isNaN(q(b)) : !1 : !0) : !0;
	  }function t(c) {
	    if (a.isOpen || !a.disabled) {
	      var d = H[0],
	          e = b[0].contains(c.target),
	          f = void 0 !== d.contains && d.contains(c.target);!a.isOpen || e || f || a.$apply(function () {
	        a.isOpen = !1;
	      });
	    }
	  }function u(c) {
	    27 === c.which && a.isOpen ? (c.preventDefault(), c.stopPropagation(), a.$apply(function () {
	      a.isOpen = !1;
	    }), b[0].focus()) : 40 !== c.which || a.isOpen || (c.preventDefault(), c.stopPropagation(), a.$apply(function () {
	      a.isOpen = !0;
	    }));
	  }function v() {
	    if (a.isOpen) {
	      var d = angular.element(H[0].querySelector(".uib-datepicker-popup")),
	          e = c.popupPlacement ? c.popupPlacement : m.placement,
	          f = j.positionElements(b, d, e, y);d.css({ top: f.top + "px", left: f.left + "px" }), d.hasClass("uib-position-measure") && d.removeClass("uib-position-measure");
	    }
	  }var w,
	      x,
	      y,
	      z,
	      A,
	      B,
	      C,
	      D,
	      E,
	      F,
	      G,
	      H,
	      I,
	      J,
	      K = !1,
	      L = [];this.init = function (e) {
	    if (F = e, G = e.$options, x = angular.isDefined(c.closeOnDateSelection) ? a.$parent.$eval(c.closeOnDateSelection) : m.closeOnDateSelection, y = angular.isDefined(c.datepickerAppendToBody) ? a.$parent.$eval(c.datepickerAppendToBody) : m.appendToBody, z = angular.isDefined(c.onOpenFocus) ? a.$parent.$eval(c.onOpenFocus) : m.onOpenFocus, A = angular.isDefined(c.datepickerPopupTemplateUrl) ? c.datepickerPopupTemplateUrl : m.datepickerPopupTemplateUrl, B = angular.isDefined(c.datepickerTemplateUrl) ? c.datepickerTemplateUrl : m.datepickerTemplateUrl, I = angular.isDefined(c.altInputFormats) ? a.$parent.$eval(c.altInputFormats) : m.altInputFormats, a.showButtonBar = angular.isDefined(c.showButtonBar) ? a.$parent.$eval(c.showButtonBar) : m.showButtonBar, m.html5Types[c.type] ? (w = m.html5Types[c.type], K = !0) : (w = c.uibDatepickerPopup || m.datepickerPopup, c.$observe("uibDatepickerPopup", function (a, b) {
	      var c = a || m.datepickerPopup;if (c !== w && (w = c, F.$modelValue = null, !w)) throw new Error("uibDatepickerPopup must have a date format specified.");
	    })), !w) throw new Error("uibDatepickerPopup must have a date format specified.");if (K && c.uibDatepickerPopup) throw new Error("HTML5 date input types do not support custom formats.");C = angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"), G ? (J = G.timezone, a.ngModelOptions = angular.copy(G), a.ngModelOptions.timezone = null, a.ngModelOptions.updateOnDefault === !0 && (a.ngModelOptions.updateOn = a.ngModelOptions.updateOn ? a.ngModelOptions.updateOn + " default" : "default"), C.attr("ng-model-options", "ngModelOptions")) : J = null, C.attr({ "ng-model": "date", "ng-change": "dateSelection(date)", "template-url": A }), D = angular.element(C.children()[0]), D.attr("template-url", B), a.datepickerOptions || (a.datepickerOptions = {}), K && "month" === c.type && (a.datepickerOptions.datepickerMode = "month", a.datepickerOptions.minMode = "month"), D.attr("datepicker-options", "datepickerOptions"), K ? F.$formatters.push(function (b) {
	      return a.date = l.fromTimezone(b, J), b;
	    }) : (F.$$parserName = "date", F.$validators.date = s, F.$parsers.unshift(r), F.$formatters.push(function (b) {
	      return F.$isEmpty(b) ? (a.date = b, b) : (angular.isNumber(b) && (b = new Date(b)), a.date = l.fromTimezone(b, J), l.filter(a.date, w));
	    })), F.$viewChangeListeners.push(function () {
	      a.date = q(F.$viewValue);
	    }), b.on("keydown", u), H = d(C)(a), C.remove(), y ? h.find("body").append(H) : b.after(H), a.$on("$destroy", function () {
	      for (a.isOpen === !0 && (i.$$phase || a.$apply(function () {
	        a.isOpen = !1;
	      })), H.remove(), b.off("keydown", u), h.off("click", t), E && E.off("scroll", v), angular.element(g).off("resize", v); L.length;) {
	        L.shift()();
	      }
	    });
	  }, a.getText = function (b) {
	    return a[b + "Text"] || m[b + "Text"];
	  }, a.isDisabled = function (b) {
	    "today" === b && (b = l.fromTimezone(new Date(), J));var c = {};return angular.forEach(["minDate", "maxDate"], function (b) {
	      a.datepickerOptions[b] ? angular.isDate(a.datepickerOptions[b]) ? c[b] = l.fromTimezone(new Date(a.datepickerOptions[b]), J) : (p && e.warn("Literal date support has been deprecated, please switch to date object usage"), c[b] = new Date(k(a.datepickerOptions[b], "medium"))) : c[b] = null;
	    }), a.datepickerOptions && c.minDate && a.compare(b, c.minDate) < 0 || c.maxDate && a.compare(b, c.maxDate) > 0;
	  }, a.compare = function (a, b) {
	    return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate());
	  }, a.dateSelection = function (c) {
	    angular.isDefined(c) && (a.date = c);var d = a.date ? l.filter(a.date, w) : null;b.val(d), F.$setViewValue(d), x && (a.isOpen = !1, b[0].focus());
	  }, a.keydown = function (c) {
	    27 === c.which && (c.stopPropagation(), a.isOpen = !1, b[0].focus());
	  }, a.select = function (b, c) {
	    if (c.stopPropagation(), "today" === b) {
	      var d = new Date();angular.isDate(a.date) ? (b = new Date(a.date), b.setFullYear(d.getFullYear(), d.getMonth(), d.getDate())) : b = new Date(d.setHours(0, 0, 0, 0));
	    }a.dateSelection(b);
	  }, a.close = function (c) {
	    c.stopPropagation(), a.isOpen = !1, b[0].focus();
	  }, a.disabled = angular.isDefined(c.disabled) || !1, c.ngDisabled && L.push(a.$parent.$watch(f(c.ngDisabled), function (b) {
	    a.disabled = b;
	  })), a.$watch("isOpen", function (d) {
	    d ? a.disabled ? a.isOpen = !1 : n(function () {
	      v(), z && a.$broadcast("uib:datepicker.focus"), h.on("click", t);var d = c.popupPlacement ? c.popupPlacement : m.placement;y || j.parsePlacement(d)[2] ? (E = E || angular.element(j.scrollParent(b)), E && E.on("scroll", v)) : E = null, angular.element(g).on("resize", v);
	    }, 0, !1) : (h.off("click", t), E && E.off("scroll", v), angular.element(g).off("resize", v));
	  }), a.$on("uib:datepicker.mode", function () {
	    n(v, 0, !1);
	  });
	}]).directive("uibDatepickerPopup", function () {
	  return { require: ["ngModel", "uibDatepickerPopup"], controller: "UibDatepickerPopupController", scope: { datepickerOptions: "=?", isOpen: "=?", currentText: "@", clearText: "@", closeText: "@" }, link: function link(a, b, c, d) {
	      var e = d[0],
	          f = d[1];f.init(e);
	    } };
	}).directive("uibDatepickerPopupWrap", function () {
	  return { replace: !0, transclude: !0, templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/datepickerPopup/popup.html";
	    } };
	}), angular.module("ui.bootstrap.debounce", []).factory("$$debounce", ["$timeout", function (a) {
	  return function (b, c) {
	    var d;return function () {
	      var e = this,
	          f = Array.prototype.slice.call(arguments);d && a.cancel(d), d = a(function () {
	        b.apply(e, f);
	      }, c);
	    };
	  };
	}]), angular.module("ui.bootstrap.dropdown", ["ui.bootstrap.position"]).constant("uibDropdownConfig", { appendToOpenClass: "uib-dropdown-open", openClass: "open" }).service("uibDropdownService", ["$document", "$rootScope", function (a, b) {
	  var c = null;this.open = function (b, f) {
	    c || (a.on("click", d), f.on("keydown", e)), c && c !== b && (c.isOpen = !1), c = b;
	  }, this.close = function (b, f) {
	    c === b && (c = null, a.off("click", d), f.off("keydown", e));
	  };var d = function d(a) {
	    if (c && !(a && "disabled" === c.getAutoClose() || a && 3 === a.which)) {
	      var d = c.getToggleElement();if (!(a && d && d[0].contains(a.target))) {
	        var e = c.getDropdownElement();a && "outsideClick" === c.getAutoClose() && e && e[0].contains(a.target) || (c.isOpen = !1, b.$$phase || c.$apply());
	      }
	    }
	  },
	      e = function e(a) {
	    27 === a.which ? (a.stopPropagation(), c.focusToggleElement(), d()) : c.isKeynavEnabled() && -1 !== [38, 40].indexOf(a.which) && c.isOpen && (a.preventDefault(), a.stopPropagation(), c.focusDropdownEntry(a.which));
	  };
	}]).controller("UibDropdownController", ["$scope", "$element", "$attrs", "$parse", "uibDropdownConfig", "uibDropdownService", "$animate", "$uibPosition", "$document", "$compile", "$templateRequest", function (a, b, c, d, e, f, g, h, i, j, k) {
	  var l,
	      m,
	      n = this,
	      o = a.$new(),
	      p = e.appendToOpenClass,
	      q = e.openClass,
	      r = angular.noop,
	      s = c.onToggle ? d(c.onToggle) : angular.noop,
	      t = !1,
	      u = null,
	      v = !1,
	      w = i.find("body");b.addClass("dropdown"), this.init = function () {
	    if (c.isOpen && (m = d(c.isOpen), r = m.assign, a.$watch(m, function (a) {
	      o.isOpen = !!a;
	    })), angular.isDefined(c.dropdownAppendTo)) {
	      var e = d(c.dropdownAppendTo)(o);e && (u = angular.element(e));
	    }t = angular.isDefined(c.dropdownAppendToBody), v = angular.isDefined(c.keyboardNav), t && !u && (u = w), u && n.dropdownMenu && (u.append(n.dropdownMenu), b.on("$destroy", function () {
	      n.dropdownMenu.remove();
	    }));
	  }, this.toggle = function (a) {
	    return o.isOpen = arguments.length ? !!a : !o.isOpen, angular.isFunction(r) && r(o, o.isOpen), o.isOpen;
	  }, this.isOpen = function () {
	    return o.isOpen;
	  }, o.getToggleElement = function () {
	    return n.toggleElement;
	  }, o.getAutoClose = function () {
	    return c.autoClose || "always";
	  }, o.getElement = function () {
	    return b;
	  }, o.isKeynavEnabled = function () {
	    return v;
	  }, o.focusDropdownEntry = function (a) {
	    var c = n.dropdownMenu ? angular.element(n.dropdownMenu).find("a") : b.find("ul").eq(0).find("a");switch (a) {case 40:
	        angular.isNumber(n.selectedOption) ? n.selectedOption = n.selectedOption === c.length - 1 ? n.selectedOption : n.selectedOption + 1 : n.selectedOption = 0;break;case 38:
	        angular.isNumber(n.selectedOption) ? n.selectedOption = 0 === n.selectedOption ? 0 : n.selectedOption - 1 : n.selectedOption = c.length - 1;}c[n.selectedOption].focus();
	  }, o.getDropdownElement = function () {
	    return n.dropdownMenu;
	  }, o.focusToggleElement = function () {
	    n.toggleElement && n.toggleElement[0].focus();
	  }, o.$watch("isOpen", function (c, d) {
	    if (u && n.dropdownMenu) {
	      var e,
	          i,
	          m,
	          v = h.positionElements(b, n.dropdownMenu, "bottom-left", !0);if (e = { top: v.top + "px", display: c ? "block" : "none" }, i = n.dropdownMenu.hasClass("dropdown-menu-right"), i ? (e.left = "auto", m = h.scrollbarWidth(!0), e.right = window.innerWidth - m - (v.left + b.prop("offsetWidth")) + "px") : (e.left = v.left + "px", e.right = "auto"), !t) {
	        var w = h.offset(u);e.top = v.top - w.top + "px", i ? e.right = window.innerWidth - (v.left - w.left + b.prop("offsetWidth")) + "px" : e.left = v.left - w.left + "px";
	      }n.dropdownMenu.css(e);
	    }var x = u ? u : b,
	        y = x.hasClass(u ? p : q);if (y === !c && g[c ? "addClass" : "removeClass"](x, u ? p : q).then(function () {
	      angular.isDefined(c) && c !== d && s(a, { open: !!c });
	    }), c) n.dropdownMenuTemplateUrl && k(n.dropdownMenuTemplateUrl).then(function (a) {
	      l = o.$new(), j(a.trim())(l, function (a) {
	        var b = a;n.dropdownMenu.replaceWith(b), n.dropdownMenu = b;
	      });
	    }), o.focusToggleElement(), f.open(o, b);else {
	      if (n.dropdownMenuTemplateUrl) {
	        l && l.$destroy();var z = angular.element('<ul class="dropdown-menu"></ul>');n.dropdownMenu.replaceWith(z), n.dropdownMenu = z;
	      }f.close(o, b), n.selectedOption = null;
	    }angular.isFunction(r) && r(a, c);
	  });
	}]).directive("uibDropdown", function () {
	  return { controller: "UibDropdownController", link: function link(a, b, c, d) {
	      d.init();
	    } };
	}).directive("uibDropdownMenu", function () {
	  return { restrict: "A", require: "?^uibDropdown", link: function link(a, b, c, d) {
	      if (d && !angular.isDefined(c.dropdownNested)) {
	        b.addClass("dropdown-menu");var e = c.templateUrl;e && (d.dropdownMenuTemplateUrl = e), d.dropdownMenu || (d.dropdownMenu = b);
	      }
	    } };
	}).directive("uibDropdownToggle", function () {
	  return { require: "?^uibDropdown", link: function link(a, b, c, d) {
	      if (d) {
	        b.addClass("dropdown-toggle"), d.toggleElement = b;var e = function e(_e) {
	          _e.preventDefault(), b.hasClass("disabled") || c.disabled || a.$apply(function () {
	            d.toggle();
	          });
	        };b.bind("click", e), b.attr({ "aria-haspopup": !0, "aria-expanded": !1 }), a.$watch(d.isOpen, function (a) {
	          b.attr("aria-expanded", !!a);
	        }), a.$on("$destroy", function () {
	          b.unbind("click", e);
	        });
	      }
	    } };
	}), angular.module("ui.bootstrap.stackedMap", []).factory("$$stackedMap", function () {
	  return { createNew: function createNew() {
	      var a = [];return { add: function add(b, c) {
	          a.push({ key: b, value: c });
	        }, get: function get(b) {
	          for (var c = 0; c < a.length; c++) {
	            if (b === a[c].key) return a[c];
	          }
	        }, keys: function keys() {
	          for (var b = [], c = 0; c < a.length; c++) {
	            b.push(a[c].key);
	          }return b;
	        }, top: function top() {
	          return a[a.length - 1];
	        }, remove: function remove(b) {
	          for (var c = -1, d = 0; d < a.length; d++) {
	            if (b === a[d].key) {
	              c = d;break;
	            }
	          }return a.splice(c, 1)[0];
	        }, removeTop: function removeTop() {
	          return a.splice(a.length - 1, 1)[0];
	        }, length: function length() {
	          return a.length;
	        } };
	    } };
	}), angular.module("ui.bootstrap.modal", ["ui.bootstrap.stackedMap", "ui.bootstrap.position"]).factory("$$multiMap", function () {
	  return { createNew: function createNew() {
	      var a = {};return { entries: function entries() {
	          return Object.keys(a).map(function (b) {
	            return { key: b, value: a[b] };
	          });
	        }, get: function get(b) {
	          return a[b];
	        }, hasKey: function hasKey(b) {
	          return !!a[b];
	        }, keys: function keys() {
	          return Object.keys(a);
	        }, put: function put(b, c) {
	          a[b] || (a[b] = []), a[b].push(c);
	        }, remove: function remove(b, c) {
	          var d = a[b];if (d) {
	            var e = d.indexOf(c);-1 !== e && d.splice(e, 1), d.length || delete a[b];
	          }
	        } };
	    } };
	}).provider("$uibResolve", function () {
	  var a = this;this.resolver = null, this.setResolver = function (a) {
	    this.resolver = a;
	  }, this.$get = ["$injector", "$q", function (b, c) {
	    var d = a.resolver ? b.get(a.resolver) : null;return { resolve: function resolve(a, e, f, g) {
	        if (d) return d.resolve(a, e, f, g);var h = [];return angular.forEach(a, function (a) {
	          angular.isFunction(a) || angular.isArray(a) ? h.push(c.resolve(b.invoke(a))) : angular.isString(a) ? h.push(c.resolve(b.get(a))) : h.push(c.resolve(a));
	        }), c.all(h).then(function (b) {
	          var c = {},
	              d = 0;return angular.forEach(a, function (a, e) {
	            c[e] = b[d++];
	          }), c;
	        });
	      } };
	  }];
	}).directive("uibModalBackdrop", ["$animate", "$injector", "$uibModalStack", function (a, b, c) {
	  function d(b, d, e) {
	    e.modalInClass && (a.addClass(d, e.modalInClass), b.$on(c.NOW_CLOSING_EVENT, function (c, f) {
	      var g = f();b.modalOptions.animation ? a.removeClass(d, e.modalInClass).then(g) : g();
	    }));
	  }return { replace: !0, templateUrl: "uib/template/modal/backdrop.html", compile: function compile(a, b) {
	      return a.addClass(b.backdropClass), d;
	    } };
	}]).directive("uibModalWindow", ["$uibModalStack", "$q", "$animateCss", "$document", function (a, b, c, d) {
	  return { scope: { index: "@" }, replace: !0, transclude: !0, templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/modal/window.html";
	    }, link: function link(e, f, g) {
	      f.addClass(g.windowClass || ""), f.addClass(g.windowTopClass || ""), e.size = g.size, e.close = function (b) {
	        var c = a.getTop();c && c.value.backdrop && "static" !== c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"));
	      }, f.on("click", e.close), e.$isRendered = !0;var h = b.defer();g.$observe("modalRender", function (a) {
	        "true" === a && h.resolve();
	      }), h.promise.then(function () {
	        var h = null;g.modalInClass && (h = c(f, { addClass: g.modalInClass }).start(), e.$on(a.NOW_CLOSING_EVENT, function (a, b) {
	          var d = b();c(f, { removeClass: g.modalInClass }).start().then(d);
	        })), b.when(h).then(function () {
	          var b = a.getTop();if (b && a.modalRendered(b.key), !d[0].activeElement || !f[0].contains(d[0].activeElement)) {
	            var c = f[0].querySelector("[autofocus]");c ? c.focus() : f[0].focus();
	          }
	        });
	      });
	    } };
	}]).directive("uibModalAnimationClass", function () {
	  return { compile: function compile(a, b) {
	      b.modalAnimation && a.addClass(b.uibModalAnimationClass);
	    } };
	}).directive("uibModalTransclude", function () {
	  return { link: function link(a, b, c, d, e) {
	      e(a.$parent, function (a) {
	        b.empty(), b.append(a);
	      });
	    } };
	}).factory("$uibModalStack", ["$animate", "$animateCss", "$document", "$compile", "$rootScope", "$q", "$$multiMap", "$$stackedMap", "$uibPosition", function (a, b, c, d, e, f, g, h, i) {
	  function j(a) {
	    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
	  }function k() {
	    for (var a = -1, b = v.keys(), c = 0; c < b.length; c++) {
	      v.get(b[c]).value.backdrop && (a = c);
	    }return a > -1 && y > a && (a = y), a;
	  }function l(a, b) {
	    var c = v.get(a).value,
	        d = c.appendTo;v.remove(a), z = v.top(), z && (y = parseInt(z.value.modalDomEl.attr("index"), 10)), o(c.modalDomEl, c.modalScope, function () {
	      var b = c.openedClass || u;w.remove(b, a);var e = w.hasKey(b);d.toggleClass(b, e), !e && t && t.heightOverflow && t.scrollbarWidth && (t.originalRight ? d.css({ paddingRight: t.originalRight + "px" }) : d.css({ paddingRight: "" }), t = null), m(!0);
	    }, c.closedDeferred), n(), b && b.focus ? b.focus() : d.focus && d.focus();
	  }function m(a) {
	    var b;v.length() > 0 && (b = v.top().value, b.modalDomEl.toggleClass(b.windowTopClass || "", a));
	  }function n() {
	    if (r && -1 === k()) {
	      var a = s;o(r, s, function () {
	        a = null;
	      }), r = void 0, s = void 0;
	    }
	  }function o(b, c, d, e) {
	    function g() {
	      g.done || (g.done = !0, a.leave(b).then(function () {
	        b.remove(), e && e.resolve();
	      }), c.$destroy(), d && d());
	    }var h,
	        i = null,
	        j = function j() {
	      return h || (h = f.defer(), i = h.promise), function () {
	        h.resolve();
	      };
	    };return c.$broadcast(x.NOW_CLOSING_EVENT, j), f.when(i).then(g);
	  }function p(a) {
	    if (a.isDefaultPrevented()) return a;var b = v.top();if (b) switch (a.which) {case 27:
	        b.value.keyboard && (a.preventDefault(), e.$apply(function () {
	          x.dismiss(b.key, "escape key press");
	        }));break;case 9:
	        var c = x.loadFocusElementList(b),
	            d = !1;a.shiftKey ? (x.isFocusInFirstItem(a, c) || x.isModalFocused(a, b)) && (d = x.focusLastFocusableElement(c)) : x.isFocusInLastItem(a, c) && (d = x.focusFirstFocusableElement(c)), d && (a.preventDefault(), a.stopPropagation());}
	  }function q(a, b, c) {
	    return !a.value.modalScope.$broadcast("modal.closing", b, c).defaultPrevented;
	  }var r,
	      s,
	      t,
	      u = "modal-open",
	      v = h.createNew(),
	      w = g.createNew(),
	      x = { NOW_CLOSING_EVENT: "modal.stack.now-closing" },
	      y = 0,
	      z = null,
	      A = "a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";return e.$watch(k, function (a) {
	    s && (s.index = a);
	  }), c.on("keydown", p), e.$on("$destroy", function () {
	    c.off("keydown", p);
	  }), x.open = function (b, f) {
	    var g = c[0].activeElement,
	        h = f.openedClass || u;m(!1), z = v.top(), v.add(b, { deferred: f.deferred, renderDeferred: f.renderDeferred, closedDeferred: f.closedDeferred, modalScope: f.scope, backdrop: f.backdrop, keyboard: f.keyboard, openedClass: f.openedClass, windowTopClass: f.windowTopClass, animation: f.animation, appendTo: f.appendTo }), w.put(h, b);var j = f.appendTo,
	        l = k();if (!j.length) throw new Error("appendTo element not found. Make sure that the element passed is in DOM.");l >= 0 && !r && (s = e.$new(!0), s.modalOptions = f, s.index = l, r = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>'), r.attr("backdrop-class", f.backdropClass), f.animation && r.attr("modal-animation", "true"), d(r)(s), a.enter(r, j), t = i.scrollbarPadding(j), t.heightOverflow && t.scrollbarWidth && j.css({ paddingRight: t.right + "px" })), y = z ? parseInt(z.value.modalDomEl.attr("index"), 10) + 1 : 0;var n = angular.element('<div uib-modal-window="modal-window"></div>');n.attr({ "template-url": f.windowTemplateUrl, "window-class": f.windowClass, "window-top-class": f.windowTopClass, size: f.size, index: y, animate: "animate" }).html(f.content), f.animation && n.attr("modal-animation", "true"), j.addClass(h), a.enter(d(n)(f.scope), j), v.top().value.modalDomEl = n, v.top().value.modalOpener = g;
	  }, x.close = function (a, b) {
	    var c = v.get(a);return c && q(c, b, !0) ? (c.value.modalScope.$$uibDestructionScheduled = !0, c.value.deferred.resolve(b), l(a, c.value.modalOpener), !0) : !c;
	  }, x.dismiss = function (a, b) {
	    var c = v.get(a);return c && q(c, b, !1) ? (c.value.modalScope.$$uibDestructionScheduled = !0, c.value.deferred.reject(b), l(a, c.value.modalOpener), !0) : !c;
	  }, x.dismissAll = function (a) {
	    for (var b = this.getTop(); b && this.dismiss(b.key, a);) {
	      b = this.getTop();
	    }
	  }, x.getTop = function () {
	    return v.top();
	  }, x.modalRendered = function (a) {
	    var b = v.get(a);b && b.value.renderDeferred.resolve();
	  }, x.focusFirstFocusableElement = function (a) {
	    return a.length > 0 ? (a[0].focus(), !0) : !1;
	  }, x.focusLastFocusableElement = function (a) {
	    return a.length > 0 ? (a[a.length - 1].focus(), !0) : !1;
	  }, x.isModalFocused = function (a, b) {
	    if (a && b) {
	      var c = b.value.modalDomEl;if (c && c.length) return (a.target || a.srcElement) === c[0];
	    }return !1;
	  }, x.isFocusInFirstItem = function (a, b) {
	    return b.length > 0 ? (a.target || a.srcElement) === b[0] : !1;
	  }, x.isFocusInLastItem = function (a, b) {
	    return b.length > 0 ? (a.target || a.srcElement) === b[b.length - 1] : !1;
	  }, x.loadFocusElementList = function (a) {
	    if (a) {
	      var b = a.value.modalDomEl;if (b && b.length) {
	        var c = b[0].querySelectorAll(A);return c ? Array.prototype.filter.call(c, function (a) {
	          return j(a);
	        }) : c;
	      }
	    }
	  }, x;
	}]).provider("$uibModal", function () {
	  var a = { options: { animation: !0, backdrop: !0, keyboard: !0 }, $get: ["$rootScope", "$q", "$document", "$templateRequest", "$controller", "$uibResolve", "$uibModalStack", function (b, c, d, e, f, g, h) {
	      function i(a) {
	        return a.template ? c.when(a.template) : e(angular.isFunction(a.templateUrl) ? a.templateUrl() : a.templateUrl);
	      }var j = {},
	          k = null;return j.getPromiseChain = function () {
	        return k;
	      }, j.open = function (e) {
	        function j() {
	          return r;
	        }var l = c.defer(),
	            m = c.defer(),
	            n = c.defer(),
	            o = c.defer(),
	            p = { result: l.promise, opened: m.promise, closed: n.promise, rendered: o.promise, close: function close(a) {
	            return h.close(p, a);
	          }, dismiss: function dismiss(a) {
	            return h.dismiss(p, a);
	          } };if (e = angular.extend({}, a.options, e), e.resolve = e.resolve || {}, e.appendTo = e.appendTo || d.find("body").eq(0), !e.template && !e.templateUrl) throw new Error("One of template or templateUrl options is required.");var q,
	            r = c.all([i(e), g.resolve(e.resolve, {}, null, null)]);return q = k = c.all([k]).then(j, j).then(function (a) {
	          var c = e.scope || b,
	              d = c.$new();d.$close = p.close, d.$dismiss = p.dismiss, d.$on("$destroy", function () {
	            d.$$uibDestructionScheduled || d.$dismiss("$uibUnscheduledDestruction");
	          });var g,
	              i,
	              j = {};e.controller && (j.$scope = d, j.$scope.$resolve = {}, j.$uibModalInstance = p, angular.forEach(a[1], function (a, b) {
	            j[b] = a, j.$scope.$resolve[b] = a;
	          }), i = f(e.controller, j, !0, e.controllerAs), e.controllerAs && e.bindToController && (g = i.instance, g.$close = d.$close, g.$dismiss = d.$dismiss, angular.extend(g, { $resolve: j.$scope.$resolve }, c)), g = i(), angular.isFunction(g.$onInit) && g.$onInit()), h.open(p, { scope: d, deferred: l, renderDeferred: o, closedDeferred: n, content: a[0], animation: e.animation, backdrop: e.backdrop, keyboard: e.keyboard, backdropClass: e.backdropClass, windowTopClass: e.windowTopClass, windowClass: e.windowClass, windowTemplateUrl: e.windowTemplateUrl, size: e.size, openedClass: e.openedClass, appendTo: e.appendTo }), m.resolve(!0);
	        }, function (a) {
	          m.reject(a), l.reject(a);
	        })["finally"](function () {
	          k === q && (k = null);
	        }), p;
	      }, j;
	    }] };return a;
	}), angular.module("ui.bootstrap.paging", []).factory("uibPaging", ["$parse", function (a) {
	  return { create: function create(b, c, d) {
	      b.setNumPages = d.numPages ? a(d.numPages).assign : angular.noop, b.ngModelCtrl = { $setViewValue: angular.noop }, b._watchers = [], b.init = function (a, e) {
	        b.ngModelCtrl = a, b.config = e, a.$render = function () {
	          b.render();
	        }, d.itemsPerPage ? b._watchers.push(c.$parent.$watch(d.itemsPerPage, function (a) {
	          b.itemsPerPage = parseInt(a, 10), c.totalPages = b.calculateTotalPages(), b.updatePage();
	        })) : b.itemsPerPage = e.itemsPerPage, c.$watch("totalItems", function (a, d) {
	          (angular.isDefined(a) || a !== d) && (c.totalPages = b.calculateTotalPages(), b.updatePage());
	        });
	      }, b.calculateTotalPages = function () {
	        var a = b.itemsPerPage < 1 ? 1 : Math.ceil(c.totalItems / b.itemsPerPage);return Math.max(a || 0, 1);
	      }, b.render = function () {
	        c.page = parseInt(b.ngModelCtrl.$viewValue, 10) || 1;
	      }, c.selectPage = function (a, d) {
	        d && d.preventDefault();var e = !c.ngDisabled || !d;e && c.page !== a && a > 0 && a <= c.totalPages && (d && d.target && d.target.blur(), b.ngModelCtrl.$setViewValue(a), b.ngModelCtrl.$render());
	      }, c.getText = function (a) {
	        return c[a + "Text"] || b.config[a + "Text"];
	      }, c.noPrevious = function () {
	        return 1 === c.page;
	      }, c.noNext = function () {
	        return c.page === c.totalPages;
	      }, b.updatePage = function () {
	        b.setNumPages(c.$parent, c.totalPages), c.page > c.totalPages ? c.selectPage(c.totalPages) : b.ngModelCtrl.$render();
	      }, c.$on("$destroy", function () {
	        for (; b._watchers.length;) {
	          b._watchers.shift()();
	        }
	      });
	    } };
	}]), angular.module("ui.bootstrap.pager", ["ui.bootstrap.paging"]).controller("UibPagerController", ["$scope", "$attrs", "uibPaging", "uibPagerConfig", function (a, b, c, d) {
	  a.align = angular.isDefined(b.align) ? a.$parent.$eval(b.align) : d.align, c.create(this, a, b);
	}]).constant("uibPagerConfig", { itemsPerPage: 10, previousText: "« Previous", nextText: "Next »", align: !0 }).directive("uibPager", ["uibPagerConfig", function (a) {
	  return { scope: { totalItems: "=", previousText: "@", nextText: "@", ngDisabled: "=" }, require: ["uibPager", "?ngModel"], controller: "UibPagerController", controllerAs: "pager", templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/pager/pager.html";
	    }, replace: !0, link: function link(b, c, d, e) {
	      var f = e[0],
	          g = e[1];g && f.init(g, a);
	    } };
	}]), angular.module("ui.bootstrap.pagination", ["ui.bootstrap.paging"]).controller("UibPaginationController", ["$scope", "$attrs", "$parse", "uibPaging", "uibPaginationConfig", function (a, b, c, d, e) {
	  function f(a, b, c) {
	    return { number: a, text: b, active: c };
	  }function g(a, b) {
	    var c = [],
	        d = 1,
	        e = b,
	        g = angular.isDefined(i) && b > i;g && (j ? (d = Math.max(a - Math.floor(i / 2), 1), e = d + i - 1, e > b && (e = b, d = e - i + 1)) : (d = (Math.ceil(a / i) - 1) * i + 1, e = Math.min(d + i - 1, b)));for (var h = d; e >= h; h++) {
	      var n = f(h, m(h), h === a);c.push(n);
	    }if (g && i > 0 && (!j || k || l)) {
	      if (d > 1) {
	        if (!l || d > 3) {
	          var o = f(d - 1, "...", !1);c.unshift(o);
	        }if (l) {
	          if (3 === d) {
	            var p = f(2, "2", !1);c.unshift(p);
	          }var q = f(1, "1", !1);c.unshift(q);
	        }
	      }if (b > e) {
	        if (!l || b - 2 > e) {
	          var r = f(e + 1, "...", !1);c.push(r);
	        }if (l) {
	          if (e === b - 2) {
	            var s = f(b - 1, b - 1, !1);c.push(s);
	          }var t = f(b, b, !1);c.push(t);
	        }
	      }
	    }return c;
	  }var h = this,
	      i = angular.isDefined(b.maxSize) ? a.$parent.$eval(b.maxSize) : e.maxSize,
	      j = angular.isDefined(b.rotate) ? a.$parent.$eval(b.rotate) : e.rotate,
	      k = angular.isDefined(b.forceEllipses) ? a.$parent.$eval(b.forceEllipses) : e.forceEllipses,
	      l = angular.isDefined(b.boundaryLinkNumbers) ? a.$parent.$eval(b.boundaryLinkNumbers) : e.boundaryLinkNumbers,
	      m = angular.isDefined(b.pageLabel) ? function (c) {
	    return a.$parent.$eval(b.pageLabel, { $page: c });
	  } : angular.identity;a.boundaryLinks = angular.isDefined(b.boundaryLinks) ? a.$parent.$eval(b.boundaryLinks) : e.boundaryLinks, a.directionLinks = angular.isDefined(b.directionLinks) ? a.$parent.$eval(b.directionLinks) : e.directionLinks, d.create(this, a, b), b.maxSize && h._watchers.push(a.$parent.$watch(c(b.maxSize), function (a) {
	    i = parseInt(a, 10), h.render();
	  }));var n = this.render;this.render = function () {
	    n(), a.page > 0 && a.page <= a.totalPages && (a.pages = g(a.page, a.totalPages));
	  };
	}]).constant("uibPaginationConfig", { itemsPerPage: 10, boundaryLinks: !1, boundaryLinkNumbers: !1, directionLinks: !0, firstText: "First", previousText: "Previous", nextText: "Next", lastText: "Last", rotate: !0, forceEllipses: !1 }).directive("uibPagination", ["$parse", "uibPaginationConfig", function (a, b) {
	  return { scope: { totalItems: "=", firstText: "@", previousText: "@", nextText: "@", lastText: "@", ngDisabled: "=" }, require: ["uibPagination", "?ngModel"], controller: "UibPaginationController", controllerAs: "pagination", templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/pagination/pagination.html";
	    }, replace: !0, link: function link(a, c, d, e) {
	      var f = e[0],
	          g = e[1];g && f.init(g, b);
	    } };
	}]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.stackedMap"]).provider("$uibTooltip", function () {
	  function a(a) {
	    var b = /[A-Z]/g,
	        c = "-";return a.replace(b, function (a, b) {
	      return (b ? c : "") + a.toLowerCase();
	    });
	  }var b = { placement: "top", placementClassPrefix: "", animation: !0, popupDelay: 0, popupCloseDelay: 0, useContentExp: !1 },
	      c = { mouseenter: "mouseleave", click: "click", outsideClick: "outsideClick", focus: "blur", none: "" },
	      d = {};this.options = function (a) {
	    angular.extend(d, a);
	  }, this.setTriggers = function (a) {
	    angular.extend(c, a);
	  }, this.$get = ["$window", "$compile", "$timeout", "$document", "$uibPosition", "$interpolate", "$rootScope", "$parse", "$$stackedMap", function (e, f, g, h, i, j, k, l, m) {
	    function n(a) {
	      if (27 === a.which) {
	        var b = o.top();b && (b.value.close(), o.removeTop(), b = null);
	      }
	    }var o = m.createNew();return h.on("keypress", n), k.$on("$destroy", function () {
	      h.off("keypress", n);
	    }), function (e, k, m, n) {
	      function p(a) {
	        var b = (a || n.trigger || m).split(" "),
	            d = b.map(function (a) {
	          return c[a] || a;
	        });return { show: b, hide: d };
	      }n = angular.extend({}, b, d, n);var q = a(e),
	          r = j.startSymbol(),
	          s = j.endSymbol(),
	          t = "<div " + q + '-popup uib-title="' + r + "title" + s + '" ' + (n.useContentExp ? 'content-exp="contentExp()" ' : 'content="' + r + "content" + s + '" ') + 'placement="' + r + "placement" + s + '" popup-class="' + r + "popupClass" + s + '" animation="animation" is-open="isOpen" origin-scope="origScope" class="uib-position-measure"></div>';return { compile: function compile(a, b) {
	          var c = f(t);return function (a, b, d, f) {
	            function j() {
	              N.isOpen ? q() : m();
	            }function m() {
	              M && !a.$eval(d[k + "Enable"]) || (u(), x(), N.popupDelay ? G || (G = g(r, N.popupDelay, !1)) : r());
	            }function q() {
	              s(), N.popupCloseDelay ? H || (H = g(t, N.popupCloseDelay, !1)) : t();
	            }function r() {
	              return s(), u(), N.content ? (v(), void N.$evalAsync(function () {
	                N.isOpen = !0, y(!0), S();
	              })) : angular.noop;
	            }function s() {
	              G && (g.cancel(G), G = null), I && (g.cancel(I), I = null);
	            }function t() {
	              N && N.$evalAsync(function () {
	                N && (N.isOpen = !1, y(!1), N.animation ? F || (F = g(w, 150, !1)) : w());
	              });
	            }function u() {
	              H && (g.cancel(H), H = null), F && (g.cancel(F), F = null);
	            }function v() {
	              D || (E = N.$new(), D = c(E, function (a) {
	                K ? h.find("body").append(a) : b.after(a);
	              }), z());
	            }function w() {
	              s(), u(), A(), D && (D.remove(), D = null), E && (E.$destroy(), E = null);
	            }function x() {
	              N.title = d[k + "Title"], Q ? N.content = Q(a) : N.content = d[e], N.popupClass = d[k + "Class"], N.placement = angular.isDefined(d[k + "Placement"]) ? d[k + "Placement"] : n.placement;var b = i.parsePlacement(N.placement);J = b[1] ? b[0] + "-" + b[1] : b[0];var c = parseInt(d[k + "PopupDelay"], 10),
	                  f = parseInt(d[k + "PopupCloseDelay"], 10);N.popupDelay = isNaN(c) ? n.popupDelay : c, N.popupCloseDelay = isNaN(f) ? n.popupCloseDelay : f;
	            }function y(b) {
	              P && angular.isFunction(P.assign) && P.assign(a, b);
	            }function z() {
	              R.length = 0, Q ? (R.push(a.$watch(Q, function (a) {
	                N.content = a, !a && N.isOpen && t();
	              })), R.push(E.$watch(function () {
	                O || (O = !0, E.$$postDigest(function () {
	                  O = !1, N && N.isOpen && S();
	                }));
	              }))) : R.push(d.$observe(e, function (a) {
	                N.content = a, !a && N.isOpen ? t() : S();
	              })), R.push(d.$observe(k + "Title", function (a) {
	                N.title = a, N.isOpen && S();
	              })), R.push(d.$observe(k + "Placement", function (a) {
	                N.placement = a ? a : n.placement, N.isOpen && S();
	              }));
	            }function A() {
	              R.length && (angular.forEach(R, function (a) {
	                a();
	              }), R.length = 0);
	            }function B(a) {
	              N && N.isOpen && D && (b[0].contains(a.target) || D[0].contains(a.target) || q());
	            }function C() {
	              var a = d[k + "Trigger"];T(), L = p(a), "none" !== L.show && L.show.forEach(function (a, c) {
	                "outsideClick" === a ? (b.on("click", j), h.on("click", B)) : a === L.hide[c] ? b.on(a, j) : a && (b.on(a, m), b.on(L.hide[c], q)), b.on("keypress", function (a) {
	                  27 === a.which && q();
	                });
	              });
	            }var D,
	                E,
	                F,
	                G,
	                H,
	                I,
	                J,
	                K = angular.isDefined(n.appendToBody) ? n.appendToBody : !1,
	                L = p(void 0),
	                M = angular.isDefined(d[k + "Enable"]),
	                N = a.$new(!0),
	                O = !1,
	                P = angular.isDefined(d[k + "IsOpen"]) ? l(d[k + "IsOpen"]) : !1,
	                Q = n.useContentExp ? l(d[e]) : !1,
	                R = [],
	                S = function S() {
	              D && D.html() && (I || (I = g(function () {
	                var a = i.positionElements(b, D, N.placement, K);D.css({ top: a.top + "px", left: a.left + "px" }), D.hasClass(a.placement.split("-")[0]) || (D.removeClass(J.split("-")[0]), D.addClass(a.placement.split("-")[0])), D.hasClass(n.placementClassPrefix + a.placement) || (D.removeClass(n.placementClassPrefix + J), D.addClass(n.placementClassPrefix + a.placement)), D.hasClass("uib-position-measure") ? (i.positionArrow(D, a.placement), D.removeClass("uib-position-measure")) : J !== a.placement && i.positionArrow(D, a.placement), J = a.placement, I = null;
	              }, 0, !1)));
	            };N.origScope = a, N.isOpen = !1, o.add(N, { close: t }), N.contentExp = function () {
	              return N.content;
	            }, d.$observe("disabled", function (a) {
	              a && s(), a && N.isOpen && t();
	            }), P && a.$watch(P, function (a) {
	              N && !a === N.isOpen && j();
	            });var T = function T() {
	              L.show.forEach(function (a) {
	                "outsideClick" === a ? b.off("click", j) : (b.off(a, m), b.off(a, j));
	              }), L.hide.forEach(function (a) {
	                "outsideClick" === a ? h.off("click", B) : b.off(a, q);
	              });
	            };C();var U = a.$eval(d[k + "Animation"]);N.animation = angular.isDefined(U) ? !!U : n.animation;var V,
	                W = k + "AppendToBody";V = W in d && void 0 === d[W] ? !0 : a.$eval(d[W]), K = angular.isDefined(V) ? V : K, a.$on("$destroy", function () {
	              T(), w(), o.remove(N), N = null;
	            });
	          };
	        } };
	    };
	  }];
	}).directive("uibTooltipTemplateTransclude", ["$animate", "$sce", "$compile", "$templateRequest", function (a, b, c, d) {
	  return { link: function link(e, f, g) {
	      var h,
	          i,
	          j,
	          k = e.$eval(g.tooltipTemplateTranscludeScope),
	          l = 0,
	          m = function m() {
	        i && (i.remove(), i = null), h && (h.$destroy(), h = null), j && (a.leave(j).then(function () {
	          i = null;
	        }), i = j, j = null);
	      };e.$watch(b.parseAsResourceUrl(g.uibTooltipTemplateTransclude), function (b) {
	        var g = ++l;b ? (d(b, !0).then(function (d) {
	          if (g === l) {
	            var e = k.$new(),
	                i = d,
	                n = c(i)(e, function (b) {
	              m(), a.enter(b, f);
	            });h = e, j = n, h.$emit("$includeContentLoaded", b);
	          }
	        }, function () {
	          g === l && (m(), e.$emit("$includeContentError", b));
	        }), e.$emit("$includeContentRequested", b)) : m();
	      }), e.$on("$destroy", m);
	    } };
	}]).directive("uibTooltipClasses", ["$uibPosition", function (a) {
	  return { restrict: "A", link: function link(b, c, d) {
	      if (b.placement) {
	        var e = a.parsePlacement(b.placement);c.addClass(e[0]);
	      }b.popupClass && c.addClass(b.popupClass), b.animation() && c.addClass(d.tooltipAnimationClass);
	    } };
	}]).directive("uibTooltipPopup", function () {
	  return { replace: !0, scope: { content: "@", placement: "@", popupClass: "@", animation: "&", isOpen: "&" }, templateUrl: "uib/template/tooltip/tooltip-popup.html" };
	}).directive("uibTooltip", ["$uibTooltip", function (a) {
	  return a("uibTooltip", "tooltip", "mouseenter");
	}]).directive("uibTooltipTemplatePopup", function () {
	  return { replace: !0, scope: { contentExp: "&", placement: "@", popupClass: "@", animation: "&", isOpen: "&", originScope: "&" }, templateUrl: "uib/template/tooltip/tooltip-template-popup.html" };
	}).directive("uibTooltipTemplate", ["$uibTooltip", function (a) {
	  return a("uibTooltipTemplate", "tooltip", "mouseenter", { useContentExp: !0 });
	}]).directive("uibTooltipHtmlPopup", function () {
	  return { replace: !0, scope: { contentExp: "&", placement: "@", popupClass: "@", animation: "&", isOpen: "&" }, templateUrl: "uib/template/tooltip/tooltip-html-popup.html" };
	}).directive("uibTooltipHtml", ["$uibTooltip", function (a) {
	  return a("uibTooltipHtml", "tooltip", "mouseenter", { useContentExp: !0 });
	}]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup", function () {
	  return { replace: !0, scope: { uibTitle: "@", contentExp: "&", placement: "@", popupClass: "@", animation: "&", isOpen: "&", originScope: "&" }, templateUrl: "uib/template/popover/popover-template.html" };
	}).directive("uibPopoverTemplate", ["$uibTooltip", function (a) {
	  return a("uibPopoverTemplate", "popover", "click", { useContentExp: !0 });
	}]).directive("uibPopoverHtmlPopup", function () {
	  return { replace: !0, scope: { contentExp: "&", uibTitle: "@", placement: "@", popupClass: "@", animation: "&", isOpen: "&" }, templateUrl: "uib/template/popover/popover-html.html" };
	}).directive("uibPopoverHtml", ["$uibTooltip", function (a) {
	  return a("uibPopoverHtml", "popover", "click", { useContentExp: !0 });
	}]).directive("uibPopoverPopup", function () {
	  return { replace: !0, scope: { uibTitle: "@", content: "@", placement: "@", popupClass: "@", animation: "&", isOpen: "&" }, templateUrl: "uib/template/popover/popover.html" };
	}).directive("uibPopover", ["$uibTooltip", function (a) {
	  return a("uibPopover", "popover", "click");
	}]), angular.module("ui.bootstrap.progressbar", []).constant("uibProgressConfig", { animate: !0, max: 100 }).controller("UibProgressController", ["$scope", "$attrs", "uibProgressConfig", function (a, b, c) {
	  function d() {
	    return angular.isDefined(a.maxParam) ? a.maxParam : c.max;
	  }var e = this,
	      f = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;this.bars = [], a.max = d(), this.addBar = function (a, b, c) {
	    f || b.css({ transition: "none" }), this.bars.push(a), a.max = d(), a.title = c && angular.isDefined(c.title) ? c.title : "progressbar", a.$watch("value", function (b) {
	      a.recalculatePercentage();
	    }), a.recalculatePercentage = function () {
	      var b = e.bars.reduce(function (a, b) {
	        return b.percent = +(100 * b.value / b.max).toFixed(2), a + b.percent;
	      }, 0);b > 100 && (a.percent -= b - 100);
	    }, a.$on("$destroy", function () {
	      b = null, e.removeBar(a);
	    });
	  }, this.removeBar = function (a) {
	    this.bars.splice(this.bars.indexOf(a), 1), this.bars.forEach(function (a) {
	      a.recalculatePercentage();
	    });
	  }, a.$watch("maxParam", function (a) {
	    e.bars.forEach(function (a) {
	      a.max = d(), a.recalculatePercentage();
	    });
	  });
	}]).directive("uibProgress", function () {
	  return { replace: !0, transclude: !0, controller: "UibProgressController", require: "uibProgress", scope: { maxParam: "=?max" }, templateUrl: "uib/template/progressbar/progress.html" };
	}).directive("uibBar", function () {
	  return { replace: !0, transclude: !0, require: "^uibProgress", scope: { value: "=", type: "@" }, templateUrl: "uib/template/progressbar/bar.html", link: function link(a, b, c, d) {
	      d.addBar(a, b, c);
	    } };
	}).directive("uibProgressbar", function () {
	  return { replace: !0, transclude: !0, controller: "UibProgressController", scope: { value: "=", maxParam: "=?max", type: "@" }, templateUrl: "uib/template/progressbar/progressbar.html", link: function link(a, b, c, d) {
	      d.addBar(a, angular.element(b.children()[0]), { title: c.title });
	    } };
	}), angular.module("ui.bootstrap.rating", []).constant("uibRatingConfig", { max: 5, stateOn: null, stateOff: null, enableReset: !0, titles: ["one", "two", "three", "four", "five"] }).controller("UibRatingController", ["$scope", "$attrs", "uibRatingConfig", function (a, b, c) {
	  var d = { $setViewValue: angular.noop },
	      e = this;this.init = function (e) {
	    d = e, d.$render = this.render, d.$formatters.push(function (a) {
	      return angular.isNumber(a) && a << 0 !== a && (a = Math.round(a)), a;
	    }), this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : c.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : c.stateOff, this.enableReset = angular.isDefined(b.enableReset) ? a.$parent.$eval(b.enableReset) : c.enableReset;var f = angular.isDefined(b.titles) ? a.$parent.$eval(b.titles) : c.titles;this.titles = angular.isArray(f) && f.length > 0 ? f : c.titles;var g = angular.isDefined(b.ratingStates) ? a.$parent.$eval(b.ratingStates) : new Array(angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max);a.range = this.buildTemplateObjects(g);
	  }, this.buildTemplateObjects = function (a) {
	    for (var b = 0, c = a.length; c > b; b++) {
	      a[b] = angular.extend({ index: b }, { stateOn: this.stateOn, stateOff: this.stateOff, title: this.getTitle(b) }, a[b]);
	    }return a;
	  }, this.getTitle = function (a) {
	    return a >= this.titles.length ? a + 1 : this.titles[a];
	  }, a.rate = function (b) {
	    if (!a.readonly && b >= 0 && b <= a.range.length) {
	      var c = e.enableReset && d.$viewValue === b ? 0 : b;d.$setViewValue(c), d.$render();
	    }
	  }, a.enter = function (b) {
	    a.readonly || (a.value = b), a.onHover({ value: b });
	  }, a.reset = function () {
	    a.value = d.$viewValue, a.onLeave();
	  }, a.onKeydown = function (b) {
	    /(37|38|39|40)/.test(b.which) && (b.preventDefault(), b.stopPropagation(), a.rate(a.value + (38 === b.which || 39 === b.which ? 1 : -1)));
	  }, this.render = function () {
	    a.value = d.$viewValue, a.title = e.getTitle(a.value - 1);
	  };
	}]).directive("uibRating", function () {
	  return { require: ["uibRating", "ngModel"], scope: { readonly: "=?readOnly", onHover: "&", onLeave: "&" }, controller: "UibRatingController", templateUrl: "uib/template/rating/rating.html", replace: !0, link: function link(a, b, c, d) {
	      var e = d[0],
	          f = d[1];e.init(f);
	    } };
	}), angular.module("ui.bootstrap.tabs", []).controller("UibTabsetController", ["$scope", function (a) {
	  function b(a) {
	    for (var b = 0; b < d.tabs.length; b++) {
	      if (d.tabs[b].index === a) return b;
	    }
	  }var c,
	      d = this;d.tabs = [], d.select = function (a, f) {
	    if (!e) {
	      var g = b(c),
	          h = d.tabs[g];if (h) {
	        if (h.tab.onDeselect({ $event: f, $selectedIndex: a }), f && f.isDefaultPrevented()) return;h.tab.active = !1;
	      }var i = d.tabs[a];i ? (i.tab.onSelect({ $event: f }), i.tab.active = !0, d.active = i.index, c = i.index) : !i && angular.isDefined(c) && (d.active = null, c = null);
	    }
	  }, d.addTab = function (a) {
	    if (d.tabs.push({ tab: a, index: a.index }), d.tabs.sort(function (a, b) {
	      return a.index > b.index ? 1 : a.index < b.index ? -1 : 0;
	    }), a.index === d.active || !angular.isDefined(d.active) && 1 === d.tabs.length) {
	      var c = b(a.index);d.select(c);
	    }
	  }, d.removeTab = function (a) {
	    for (var b, c = 0; c < d.tabs.length; c++) {
	      if (d.tabs[c].tab === a) {
	        b = c;break;
	      }
	    }if (d.tabs[b].index === d.active) {
	      var e = b === d.tabs.length - 1 ? b - 1 : b + 1 % d.tabs.length;d.select(e);
	    }d.tabs.splice(b, 1);
	  }, a.$watch("tabset.active", function (a) {
	    angular.isDefined(a) && a !== c && d.select(b(a));
	  });var e;a.$on("$destroy", function () {
	    e = !0;
	  });
	}]).directive("uibTabset", function () {
	  return { transclude: !0, replace: !0, scope: {}, bindToController: { active: "=?", type: "@" }, controller: "UibTabsetController", controllerAs: "tabset", templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/tabs/tabset.html";
	    }, link: function link(a, b, c) {
	      a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1;
	    } };
	}).directive("uibTab", ["$parse", function (a) {
	  return { require: "^uibTabset", replace: !0, templateUrl: function templateUrl(a, b) {
	      return b.templateUrl || "uib/template/tabs/tab.html";
	    }, transclude: !0, scope: { heading: "@", index: "=?", classes: "@?", onSelect: "&select", onDeselect: "&deselect" }, controller: function controller() {}, controllerAs: "tab", link: function link(b, c, d, e, f) {
	      b.disabled = !1, d.disable && b.$parent.$watch(a(d.disable), function (a) {
	        b.disabled = !!a;
	      }), angular.isUndefined(d.index) && (e.tabs && e.tabs.length ? b.index = Math.max.apply(null, e.tabs.map(function (a) {
	        return a.index;
	      })) + 1 : b.index = 0), angular.isUndefined(d.classes) && (b.classes = ""), b.select = function (a) {
	        if (!b.disabled) {
	          for (var c, d = 0; d < e.tabs.length; d++) {
	            if (e.tabs[d].tab === b) {
	              c = d;break;
	            }
	          }e.select(c, a);
	        }
	      }, e.addTab(b), b.$on("$destroy", function () {
	        e.removeTab(b);
	      }), b.$transcludeFn = f;
	    } };
	}]).directive("uibTabHeadingTransclude", function () {
	  return { restrict: "A", require: "^uibTab", link: function link(a, b) {
	      a.$watch("headingElement", function (a) {
	        a && (b.html(""), b.append(a));
	      });
	    } };
	}).directive("uibTabContentTransclude", function () {
	  function a(a) {
	    return a.tagName && (a.hasAttribute("uib-tab-heading") || a.hasAttribute("data-uib-tab-heading") || a.hasAttribute("x-uib-tab-heading") || "uib-tab-heading" === a.tagName.toLowerCase() || "data-uib-tab-heading" === a.tagName.toLowerCase() || "x-uib-tab-heading" === a.tagName.toLowerCase() || "uib:tab-heading" === a.tagName.toLowerCase());
	  }return { restrict: "A", require: "^uibTabset", link: function link(b, c, d) {
	      var e = b.$eval(d.uibTabContentTransclude).tab;e.$transcludeFn(e.$parent, function (b) {
	        angular.forEach(b, function (b) {
	          a(b) ? e.headingElement = b : c.append(b);
	        });
	      });
	    } };
	}), angular.module("ui.bootstrap.timepicker", []).constant("uibTimepickerConfig", { hourStep: 1, minuteStep: 1, secondStep: 1, showMeridian: !0, showSeconds: !1, meridians: null, readonlyInput: !1, mousewheel: !0, arrowkeys: !0, showSpinners: !0, templateUrl: "uib/template/timepicker/timepicker.html" }).controller("UibTimepickerController", ["$scope", "$element", "$attrs", "$parse", "$log", "$locale", "uibTimepickerConfig", function (a, b, c, d, e, f, g) {
	  function h() {
	    var b = +a.hours,
	        c = a.showMeridian ? b > 0 && 13 > b : b >= 0 && 24 > b;return c && "" !== a.hours ? (a.showMeridian && (12 === b && (b = 0), a.meridian === v[1] && (b += 12)), b) : void 0;
	  }function i() {
	    var b = +a.minutes,
	        c = b >= 0 && 60 > b;return c && "" !== a.minutes ? b : void 0;
	  }function j() {
	    var b = +a.seconds;return b >= 0 && 60 > b ? b : void 0;
	  }function k(a, b) {
	    return null === a ? "" : angular.isDefined(a) && a.toString().length < 2 && !b ? "0" + a : a.toString();
	  }function l(a) {
	    m(), u.$setViewValue(new Date(s)), n(a);
	  }function m() {
	    u.$setValidity("time", !0), a.invalidHours = !1, a.invalidMinutes = !1, a.invalidSeconds = !1;
	  }function n(b) {
	    if (u.$modelValue) {
	      var c = s.getHours(),
	          d = s.getMinutes(),
	          e = s.getSeconds();a.showMeridian && (c = 0 === c || 12 === c ? 12 : c % 12), a.hours = "h" === b ? c : k(c, !w), "m" !== b && (a.minutes = k(d)), a.meridian = s.getHours() < 12 ? v[0] : v[1], "s" !== b && (a.seconds = k(e)), a.meridian = s.getHours() < 12 ? v[0] : v[1];
	    } else a.hours = null, a.minutes = null, a.seconds = null, a.meridian = v[0];
	  }function o(a) {
	    s = q(s, a), l();
	  }function p(a, b) {
	    return q(a, 60 * b);
	  }function q(a, b) {
	    var c = new Date(a.getTime() + 1e3 * b),
	        d = new Date(a);return d.setHours(c.getHours(), c.getMinutes(), c.getSeconds()), d;
	  }function r() {
	    return (null === a.hours || "" === a.hours) && (null === a.minutes || "" === a.minutes) && (!a.showSeconds || a.showSeconds && (null === a.seconds || "" === a.seconds));
	  }var s = new Date(),
	      t = [],
	      u = { $setViewValue: angular.noop },
	      v = angular.isDefined(c.meridians) ? a.$parent.$eval(c.meridians) : g.meridians || f.DATETIME_FORMATS.AMPMS,
	      w = angular.isDefined(c.padHours) ? a.$parent.$eval(c.padHours) : !0;a.tabindex = angular.isDefined(c.tabindex) ? c.tabindex : 0, b.removeAttr("tabindex"), this.init = function (b, d) {
	    u = b, u.$render = this.render, u.$formatters.unshift(function (a) {
	      return a ? new Date(a) : null;
	    });var e = d.eq(0),
	        f = d.eq(1),
	        h = d.eq(2),
	        i = angular.isDefined(c.mousewheel) ? a.$parent.$eval(c.mousewheel) : g.mousewheel;i && this.setupMousewheelEvents(e, f, h);var j = angular.isDefined(c.arrowkeys) ? a.$parent.$eval(c.arrowkeys) : g.arrowkeys;j && this.setupArrowkeyEvents(e, f, h), a.readonlyInput = angular.isDefined(c.readonlyInput) ? a.$parent.$eval(c.readonlyInput) : g.readonlyInput, this.setupInputEvents(e, f, h);
	  };var x = g.hourStep;c.hourStep && t.push(a.$parent.$watch(d(c.hourStep), function (a) {
	    x = +a;
	  }));var y = g.minuteStep;c.minuteStep && t.push(a.$parent.$watch(d(c.minuteStep), function (a) {
	    y = +a;
	  }));var z;t.push(a.$parent.$watch(d(c.min), function (a) {
	    var b = new Date(a);z = isNaN(b) ? void 0 : b;
	  }));var A;t.push(a.$parent.$watch(d(c.max), function (a) {
	    var b = new Date(a);A = isNaN(b) ? void 0 : b;
	  }));var B = !1;c.ngDisabled && t.push(a.$parent.$watch(d(c.ngDisabled), function (a) {
	    B = a;
	  })), a.noIncrementHours = function () {
	    var a = p(s, 60 * x);return B || a > A || s > a && z > a;
	  }, a.noDecrementHours = function () {
	    var a = p(s, 60 * -x);return B || z > a || a > s && a > A;
	  }, a.noIncrementMinutes = function () {
	    var a = p(s, y);return B || a > A || s > a && z > a;
	  }, a.noDecrementMinutes = function () {
	    var a = p(s, -y);return B || z > a || a > s && a > A;
	  }, a.noIncrementSeconds = function () {
	    var a = q(s, C);return B || a > A || s > a && z > a;
	  }, a.noDecrementSeconds = function () {
	    var a = q(s, -C);return B || z > a || a > s && a > A;
	  }, a.noToggleMeridian = function () {
	    return s.getHours() < 12 ? B || p(s, 720) > A : B || p(s, -720) < z;
	  };var C = g.secondStep;c.secondStep && t.push(a.$parent.$watch(d(c.secondStep), function (a) {
	    C = +a;
	  })), a.showSeconds = g.showSeconds, c.showSeconds && t.push(a.$parent.$watch(d(c.showSeconds), function (b) {
	    a.showSeconds = !!b;
	  })), a.showMeridian = g.showMeridian, c.showMeridian && t.push(a.$parent.$watch(d(c.showMeridian), function (b) {
	    if (a.showMeridian = !!b, u.$error.time) {
	      var c = h(),
	          d = i();angular.isDefined(c) && angular.isDefined(d) && (s.setHours(c), l());
	    } else n();
	  })), this.setupMousewheelEvents = function (b, c, d) {
	    var e = function e(a) {
	      a.originalEvent && (a = a.originalEvent);var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;return a.detail || b > 0;
	    };b.bind("mousewheel wheel", function (b) {
	      B || a.$apply(e(b) ? a.incrementHours() : a.decrementHours()), b.preventDefault();
	    }), c.bind("mousewheel wheel", function (b) {
	      B || a.$apply(e(b) ? a.incrementMinutes() : a.decrementMinutes()), b.preventDefault();
	    }), d.bind("mousewheel wheel", function (b) {
	      B || a.$apply(e(b) ? a.incrementSeconds() : a.decrementSeconds()), b.preventDefault();
	    });
	  }, this.setupArrowkeyEvents = function (b, c, d) {
	    b.bind("keydown", function (b) {
	      B || (38 === b.which ? (b.preventDefault(), a.incrementHours(), a.$apply()) : 40 === b.which && (b.preventDefault(), a.decrementHours(), a.$apply()));
	    }), c.bind("keydown", function (b) {
	      B || (38 === b.which ? (b.preventDefault(), a.incrementMinutes(), a.$apply()) : 40 === b.which && (b.preventDefault(), a.decrementMinutes(), a.$apply()));
	    }), d.bind("keydown", function (b) {
	      B || (38 === b.which ? (b.preventDefault(), a.incrementSeconds(), a.$apply()) : 40 === b.which && (b.preventDefault(), a.decrementSeconds(), a.$apply()));
	    });
	  }, this.setupInputEvents = function (b, c, d) {
	    if (a.readonlyInput) return a.updateHours = angular.noop, a.updateMinutes = angular.noop, void (a.updateSeconds = angular.noop);var e = function e(b, c, d) {
	      u.$setViewValue(null), u.$setValidity("time", !1), angular.isDefined(b) && (a.invalidHours = b), angular.isDefined(c) && (a.invalidMinutes = c), angular.isDefined(d) && (a.invalidSeconds = d);
	    };a.updateHours = function () {
	      var a = h(),
	          b = i();u.$setDirty(), angular.isDefined(a) && angular.isDefined(b) ? (s.setHours(a), s.setMinutes(b), z > s || s > A ? e(!0) : l("h")) : e(!0);
	    }, b.bind("blur", function (b) {
	      u.$setTouched(), r() ? m() : null === a.hours || "" === a.hours ? e(!0) : !a.invalidHours && a.hours < 10 && a.$apply(function () {
	        a.hours = k(a.hours, !w);
	      });
	    }), a.updateMinutes = function () {
	      var a = i(),
	          b = h();u.$setDirty(), angular.isDefined(a) && angular.isDefined(b) ? (s.setHours(b), s.setMinutes(a), z > s || s > A ? e(void 0, !0) : l("m")) : e(void 0, !0);
	    }, c.bind("blur", function (b) {
	      u.$setTouched(), r() ? m() : null === a.minutes ? e(void 0, !0) : !a.invalidMinutes && a.minutes < 10 && a.$apply(function () {
	        a.minutes = k(a.minutes);
	      });
	    }), a.updateSeconds = function () {
	      var a = j();u.$setDirty(), angular.isDefined(a) ? (s.setSeconds(a), l("s")) : e(void 0, void 0, !0);
	    }, d.bind("blur", function (b) {
	      r() ? m() : !a.invalidSeconds && a.seconds < 10 && a.$apply(function () {
	        a.seconds = k(a.seconds);
	      });
	    });
	  }, this.render = function () {
	    var b = u.$viewValue;isNaN(b) ? (u.$setValidity("time", !1), e.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (b && (s = b), z > s || s > A ? (u.$setValidity("time", !1), a.invalidHours = !0, a.invalidMinutes = !0) : m(), n());
	  }, a.showSpinners = angular.isDefined(c.showSpinners) ? a.$parent.$eval(c.showSpinners) : g.showSpinners, a.incrementHours = function () {
	    a.noIncrementHours() || o(60 * x * 60);
	  }, a.decrementHours = function () {
	    a.noDecrementHours() || o(60 * -x * 60);
	  }, a.incrementMinutes = function () {
	    a.noIncrementMinutes() || o(60 * y);
	  }, a.decrementMinutes = function () {
	    a.noDecrementMinutes() || o(60 * -y);
	  }, a.incrementSeconds = function () {
	    a.noIncrementSeconds() || o(C);
	  }, a.decrementSeconds = function () {
	    a.noDecrementSeconds() || o(-C);
	  }, a.toggleMeridian = function () {
	    var b = i(),
	        c = h();a.noToggleMeridian() || (angular.isDefined(b) && angular.isDefined(c) ? o(720 * (s.getHours() < 12 ? 60 : -60)) : a.meridian = a.meridian === v[0] ? v[1] : v[0]);
	  }, a.blur = function () {
	    u.$setTouched();
	  }, a.$on("$destroy", function () {
	    for (; t.length;) {
	      t.shift()();
	    }
	  });
	}]).directive("uibTimepicker", ["uibTimepickerConfig", function (a) {
	  return { require: ["uibTimepicker", "?^ngModel"], controller: "UibTimepickerController", controllerAs: "timepicker", replace: !0, scope: {}, templateUrl: function templateUrl(b, c) {
	      return c.templateUrl || a.templateUrl;
	    }, link: function link(a, b, c, d) {
	      var e = d[0],
	          f = d[1];f && e.init(f, b.find("input"));
	    } };
	}]), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.debounce", "ui.bootstrap.position"]).factory("uibTypeaheadParser", ["$parse", function (a) {
	  var b = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return { parse: function parse(c) {
	      var d = c.match(b);if (!d) throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + c + '".');return { itemName: d[3], source: a(d[4]), viewMapper: a(d[2] || d[1]), modelMapper: a(d[1]) };
	    } };
	}]).controller("UibTypeaheadController", ["$scope", "$element", "$attrs", "$compile", "$parse", "$q", "$timeout", "$document", "$window", "$rootScope", "$$debounce", "$uibPosition", "uibTypeaheadParser", function (a, b, c, d, e, f, g, h, i, j, k, l, m) {
	  function n() {
	    O.moveInProgress || (O.moveInProgress = !0, O.$digest()), Z();
	  }function o() {
	    O.position = E ? l.offset(b) : l.position(b), O.position.top += b.prop("offsetHeight");
	  }var p,
	      q,
	      r = [9, 13, 27, 38, 40],
	      s = 200,
	      t = a.$eval(c.typeaheadMinLength);t || 0 === t || (t = 1), a.$watch(c.typeaheadMinLength, function (a) {
	    t = a || 0 === a ? a : 1;
	  });var u = a.$eval(c.typeaheadWaitMs) || 0,
	      v = a.$eval(c.typeaheadEditable) !== !1;a.$watch(c.typeaheadEditable, function (a) {
	    v = a !== !1;
	  });var w,
	      x,
	      y = e(c.typeaheadLoading).assign || angular.noop,
	      z = c.typeaheadShouldSelect ? e(c.typeaheadShouldSelect) : function (a, b) {
	    var c = b.$event;return 13 === c.which || 9 === c.which;
	  },
	      A = e(c.typeaheadOnSelect),
	      B = angular.isDefined(c.typeaheadSelectOnBlur) ? a.$eval(c.typeaheadSelectOnBlur) : !1,
	      C = e(c.typeaheadNoResults).assign || angular.noop,
	      D = c.typeaheadInputFormatter ? e(c.typeaheadInputFormatter) : void 0,
	      E = c.typeaheadAppendToBody ? a.$eval(c.typeaheadAppendToBody) : !1,
	      F = c.typeaheadAppendTo ? a.$eval(c.typeaheadAppendTo) : null,
	      G = a.$eval(c.typeaheadFocusFirst) !== !1,
	      H = c.typeaheadSelectOnExact ? a.$eval(c.typeaheadSelectOnExact) : !1,
	      I = e(c.typeaheadIsOpen).assign || angular.noop,
	      J = a.$eval(c.typeaheadShowHint) || !1,
	      K = e(c.ngModel),
	      L = e(c.ngModel + "($$$p)"),
	      M = function M(b, c) {
	    return angular.isFunction(K(a)) && q && q.$options && q.$options.getterSetter ? L(b, { $$$p: c }) : K.assign(b, c);
	  },
	      N = m.parse(c.uibTypeahead),
	      O = a.$new(),
	      P = a.$on("$destroy", function () {
	    O.$destroy();
	  });O.$on("$destroy", P);var Q = "typeahead-" + O.$id + "-" + Math.floor(1e4 * Math.random());b.attr({ "aria-autocomplete": "list", "aria-expanded": !1, "aria-owns": Q });var R, S;J && (R = angular.element("<div></div>"), R.css("position", "relative"), b.after(R), S = b.clone(), S.attr("placeholder", ""), S.attr("tabindex", "-1"), S.val(""), S.css({ position: "absolute", top: "0px", left: "0px", "border-color": "transparent", "box-shadow": "none", opacity: 1, background: "none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)", color: "#999" }), b.css({ position: "relative", "vertical-align": "top", "background-color": "transparent" }), R.append(S), S.after(b));var T = angular.element("<div uib-typeahead-popup></div>");T.attr({ id: Q, matches: "matches", active: "activeIdx", select: "select(activeIdx, evt)", "move-in-progress": "moveInProgress", query: "query", position: "position", "assign-is-open": "assignIsOpen(isOpen)", debounce: "debounceUpdate" }), angular.isDefined(c.typeaheadTemplateUrl) && T.attr("template-url", c.typeaheadTemplateUrl), angular.isDefined(c.typeaheadPopupTemplateUrl) && T.attr("popup-template-url", c.typeaheadPopupTemplateUrl);var U = function U() {
	    J && S.val("");
	  },
	      V = function V() {
	    O.matches = [], O.activeIdx = -1, b.attr("aria-expanded", !1), U();
	  },
	      W = function W(a) {
	    return Q + "-option-" + a;
	  };O.$watch("activeIdx", function (a) {
	    0 > a ? b.removeAttr("aria-activedescendant") : b.attr("aria-activedescendant", W(a));
	  });var X = function X(a, b) {
	    return O.matches.length > b && a ? a.toUpperCase() === O.matches[b].label.toUpperCase() : !1;
	  },
	      Y = function Y(c, d) {
	    var e = { $viewValue: c };y(a, !0), C(a, !1), f.when(N.source(a, e)).then(function (f) {
	      var g = c === p.$viewValue;if (g && w) if (f && f.length > 0) {
	        O.activeIdx = G ? 0 : -1, C(a, !1), O.matches.length = 0;for (var h = 0; h < f.length; h++) {
	          e[N.itemName] = f[h], O.matches.push({ id: W(h), label: N.viewMapper(O, e), model: f[h] });
	        }if (O.query = c, o(), b.attr("aria-expanded", !0), H && 1 === O.matches.length && X(c, 0) && (angular.isNumber(O.debounceUpdate) || angular.isObject(O.debounceUpdate) ? k(function () {
	          O.select(0, d);
	        }, angular.isNumber(O.debounceUpdate) ? O.debounceUpdate : O.debounceUpdate["default"]) : O.select(0, d)), J) {
	          var i = O.matches[0].label;angular.isString(c) && c.length > 0 && i.slice(0, c.length).toUpperCase() === c.toUpperCase() ? S.val(c + i.slice(c.length)) : S.val("");
	        }
	      } else V(), C(a, !0);g && y(a, !1);
	    }, function () {
	      V(), y(a, !1), C(a, !0);
	    });
	  };E && (angular.element(i).on("resize", n), h.find("body").on("scroll", n));var Z = k(function () {
	    O.matches.length && o(), O.moveInProgress = !1;
	  }, s);O.moveInProgress = !1, O.query = void 0;var $,
	      _ = function _(a) {
	    $ = g(function () {
	      Y(a);
	    }, u);
	  },
	      aa = function aa() {
	    $ && g.cancel($);
	  };V(), O.assignIsOpen = function (b) {
	    I(a, b);
	  }, O.select = function (d, e) {
	    var f,
	        h,
	        i = {};x = !0, i[N.itemName] = h = O.matches[d].model, f = N.modelMapper(a, i), M(a, f), p.$setValidity("editable", !0), p.$setValidity("parse", !0), A(a, { $item: h, $model: f, $label: N.viewMapper(a, i), $event: e }), V(), O.$eval(c.typeaheadFocusOnSelect) !== !1 && g(function () {
	      b[0].focus();
	    }, 0, !1);
	  }, b.on("keydown", function (b) {
	    if (0 !== O.matches.length && -1 !== r.indexOf(b.which)) {
	      var c = z(a, { $event: b });if (-1 === O.activeIdx && c || 9 === b.which && b.shiftKey) return V(), void O.$digest();b.preventDefault();var d;switch (b.which) {case 27:
	          b.stopPropagation(), V(), a.$digest();break;case 38:
	          O.activeIdx = (O.activeIdx > 0 ? O.activeIdx : O.matches.length) - 1, O.$digest(), d = T.find("li")[O.activeIdx], d.parentNode.scrollTop = d.offsetTop;break;case 40:
	          O.activeIdx = (O.activeIdx + 1) % O.matches.length, O.$digest(), d = T.find("li")[O.activeIdx], d.parentNode.scrollTop = d.offsetTop;break;default:
	          c && O.$apply(function () {
	            angular.isNumber(O.debounceUpdate) || angular.isObject(O.debounceUpdate) ? k(function () {
	              O.select(O.activeIdx, b);
	            }, angular.isNumber(O.debounceUpdate) ? O.debounceUpdate : O.debounceUpdate["default"]) : O.select(O.activeIdx, b);
	          });}
	    }
	  }), b.bind("focus", function (a) {
	    w = !0, 0 !== t || p.$viewValue || g(function () {
	      Y(p.$viewValue, a);
	    }, 0);
	  }), b.bind("blur", function (a) {
	    B && O.matches.length && -1 !== O.activeIdx && !x && (x = !0, O.$apply(function () {
	      angular.isObject(O.debounceUpdate) && angular.isNumber(O.debounceUpdate.blur) ? k(function () {
	        O.select(O.activeIdx, a);
	      }, O.debounceUpdate.blur) : O.select(O.activeIdx, a);
	    })), !v && p.$error.editable && (p.$setViewValue(), p.$setValidity("editable", !0), p.$setValidity("parse", !0), b.val("")), w = !1, x = !1;
	  });var ba = function ba(c) {
	    b[0] !== c.target && 3 !== c.which && 0 !== O.matches.length && (V(), j.$$phase || a.$digest());
	  };h.on("click", ba), a.$on("$destroy", function () {
	    h.off("click", ba), (E || F) && ca.remove(), E && (angular.element(i).off("resize", n), h.find("body").off("scroll", n)), T.remove(), J && R.remove();
	  });var ca = d(T)(O);E ? h.find("body").append(ca) : F ? angular.element(F).eq(0).append(ca) : b.after(ca), this.init = function (b, c) {
	    p = b, q = c, O.debounceUpdate = p.$options && e(p.$options.debounce)(a), p.$parsers.unshift(function (b) {
	      return w = !0, 0 === t || b && b.length >= t ? u > 0 ? (aa(), _(b)) : Y(b) : (y(a, !1), aa(), V()), v ? b : b ? void p.$setValidity("editable", !1) : (p.$setValidity("editable", !0), null);
	    }), p.$formatters.push(function (b) {
	      var c,
	          d,
	          e = {};return v || p.$setValidity("editable", !0), D ? (e.$model = b, D(a, e)) : (e[N.itemName] = b, c = N.viewMapper(a, e), e[N.itemName] = void 0, d = N.viewMapper(a, e), c !== d ? c : b);
	    });
	  };
	}]).directive("uibTypeahead", function () {
	  return { controller: "UibTypeaheadController", require: ["ngModel", "^?ngModelOptions", "uibTypeahead"], link: function link(a, b, c, d) {
	      d[2].init(d[0], d[1]);
	    } };
	}).directive("uibTypeaheadPopup", ["$$debounce", function (a) {
	  return { scope: { matches: "=", query: "=", active: "=", position: "&", moveInProgress: "=", select: "&", assignIsOpen: "&", debounce: "&" }, replace: !0, templateUrl: function templateUrl(a, b) {
	      return b.popupTemplateUrl || "uib/template/typeahead/typeahead-popup.html";
	    }, link: function link(b, c, d) {
	      b.templateUrl = d.templateUrl, b.isOpen = function () {
	        var a = b.matches.length > 0;return b.assignIsOpen({ isOpen: a }), a;
	      }, b.isActive = function (a) {
	        return b.active === a;
	      }, b.selectActive = function (a) {
	        b.active = a;
	      }, b.selectMatch = function (c, d) {
	        var e = b.debounce();angular.isNumber(e) || angular.isObject(e) ? a(function () {
	          b.select({ activeIdx: c, evt: d });
	        }, angular.isNumber(e) ? e : e["default"]) : b.select({ activeIdx: c, evt: d });
	      };
	    } };
	}]).directive("uibTypeaheadMatch", ["$templateRequest", "$compile", "$parse", function (a, b, c) {
	  return { scope: { index: "=", match: "=", query: "=" }, link: function link(d, e, f) {
	      var g = c(f.templateUrl)(d.$parent) || "uib/template/typeahead/typeahead-match.html";a(g).then(function (a) {
	        var c = angular.element(a.trim());e.replaceWith(c), b(c)(d);
	      });
	    } };
	}]).filter("uibTypeaheadHighlight", ["$sce", "$injector", "$log", function (a, b, c) {
	  function d(a) {
	    return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
	  }function e(a) {
	    return (/<.*>/g.test(a)
	    );
	  }var f;return f = b.has("$sanitize"), function (b, g) {
	    return !f && e(b) && c.warn("Unsafe use of typeahead please use ngSanitize"), b = g ? ("" + b).replace(new RegExp(d(g), "gi"), "<strong>$&</strong>") : b, f || (b = a.trustAsHtml(b)), b;
	  };
	}]), angular.module("uib/template/accordion/accordion-group.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/accordion/accordion-group.html", '<div class="panel" ng-class="panelClass || \'panel-default\'">\n  <div role="tab" id="{{::headingId}}" aria-selected="{{isOpen}}" class="panel-heading" ng-keypress="toggleOpen($event)">\n    <h4 class="panel-title">\n      <a role="button" data-toggle="collapse" href aria-expanded="{{isOpen}}" aria-controls="{{::panelId}}" tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" uib-accordion-transclude="heading"><span uib-accordion-header ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div id="{{::panelId}}" aria-labelledby="{{::headingId}}" aria-hidden="{{!isOpen}}" role="tabpanel" class="panel-collapse collapse" uib-collapse="!isOpen">\n    <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n');
	}]), angular.module("uib/template/accordion/accordion.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/accordion/accordion.html", '<div role="tablist" class="panel-group" ng-transclude></div>');
	}]), angular.module("uib/template/alert/alert.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/alert/alert.html", '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissible\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close({$event: $event})">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n');
	}]), angular.module("uib/template/carousel/carousel.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n  <div class="carousel-inner" ng-transclude></div>\n  <a role="button" href class="left carousel-control" ng-click="prev()" ng-class="{ disabled: isPrevDisabled() }" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span>\n    <span class="sr-only">previous</span>\n  </a>\n  <a role="button" href class="right carousel-control" ng-click="next()" ng-class="{ disabled: isNextDisabled() }" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span>\n    <span class="sr-only">next</span>\n  </a>\n  <ol class="carousel-indicators" ng-show="slides.length > 1">\n    <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{ active: isActive(slide) }" ng-click="select(slide)">\n      <span class="sr-only">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if="isActive(slide)">, currently active</span></span>\n    </li>\n  </ol>\n</div>\n');
	}]), angular.module("uib/template/carousel/slide.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/carousel/slide.html", '<div ng-class="{\n    \'active\': active\n  }" class="item text-center" ng-transclude></div>\n');
	}]), angular.module("uib/template/datepicker/datepicker.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/datepicker/datepicker.html", '<div class="uib-datepicker" ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <uib-daypicker ng-switch-when="day" tabindex="0"></uib-daypicker>\n  <uib-monthpicker ng-switch-when="month" tabindex="0"></uib-monthpicker>\n  <uib-yearpicker ng-switch-when="year" tabindex="0"></uib-yearpicker>\n</div>\n');
	}]), angular.module("uib/template/datepicker/day.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/datepicker/day.html", '<table class="uib-daypicker" role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-weeks" ng-repeat="row in rows track by $index">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row" class="uib-day text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default btn-sm"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n');
	}]), angular.module("uib/template/datepicker/month.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/datepicker/month.html", '<table class="uib-monthpicker" role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-months" ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row" class="uib-month text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n');
	}]), angular.module("uib/template/datepicker/year.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/datepicker/year.html", '<table class="uib-yearpicker" role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::columns - 2}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-years" ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row" class="uib-year text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n');
	}]), angular.module("uib/template/datepickerPopup/popup.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/datepickerPopup/popup.html", '<div>\n  <ul class="uib-datepicker-popup dropdown-menu uib-position-measure" dropdown-nested ng-if="isOpen" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n    <li ng-transclude></li>\n    <li ng-if="showButtonBar" class="uib-button-bar">\n      <span class="btn-group pull-left">\n        <button type="button" class="btn btn-sm btn-info uib-datepicker-current" ng-click="select(\'today\', $event)" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n        <button type="button" class="btn btn-sm btn-danger uib-clear" ng-click="select(null, $event)">{{ getText(\'clear\') }}</button>\n      </span>\n      <button type="button" class="btn btn-sm btn-success pull-right uib-close" ng-click="close($event)">{{ getText(\'close\') }}</button>\n    </li>\n  </ul>\n</div>\n');
	}]), angular.module("uib/template/modal/backdrop.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/modal/backdrop.html", '<div class="modal-backdrop"\n     uib-modal-animation-class="fade"\n     modal-in-class="in"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n');
	}]), angular.module("uib/template/modal/window.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/modal/window.html", '<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    uib-modal-animation-class="fade"\n    modal-in-class="in"\n    ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}">\n    <div class="modal-dialog {{size ? \'modal-\' + size : \'\'}}"><div class="modal-content" uib-modal-transclude></div></div>\n</div>\n');
	}]), angular.module("uib/template/pager/pager.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/pager/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n</ul>\n');
	}]), angular.module("uib/template/pagination/pagination.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)">{{::getText(\'first\')}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)">{{page.text}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)">{{::getText(\'last\')}}</a></li>\n</ul>\n');
	}]), angular.module("uib/template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/tooltip/tooltip-html-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n');
	}]), angular.module("uib/template/tooltip/tooltip-popup.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/tooltip/tooltip-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n');
	}]), angular.module("uib/template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/tooltip/tooltip-template-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    uib-tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n');
	}]), angular.module("uib/template/popover/popover-html.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/popover/popover-html.html", '<div class="popover"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n      <div class="popover-content" ng-bind-html="contentExp()"></div>\n  </div>\n</div>\n');
	}]), angular.module("uib/template/popover/popover-template.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/popover/popover-template.html", '<div class="popover"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n      <div class="popover-content"\n        uib-tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n');
	}]), angular.module("uib/template/popover/popover.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/popover/popover.html", '<div class="popover"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n');
	}]), angular.module("uib/template/progressbar/bar.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n');
	}]), angular.module("uib/template/progressbar/progress.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/progressbar/progress.html", '<div class="progress" ng-transclude aria-labelledby="{{::title}}"></div>');
	}]), angular.module("uib/template/progressbar/progressbar.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n</div>\n');
	}]), angular.module("uib/template/rating/rating.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}" aria-valuetext="{{title}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}"></i>\n</span>\n');
	}]), angular.module("uib/template/tabs/tab.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/tabs/tab.html", '<li ng-class="[{active: active, disabled: disabled}, classes]" class="uib-tab nav-item">\n  <a href ng-click="select($event)" class="nav-link" uib-tab-heading-transclude>{{heading}}</a>\n</li>\n');
	}]), angular.module("uib/template/tabs/tabset.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/tabs/tabset.html", '<div>\n  <ul class="nav nav-{{tabset.type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane"\n         ng-repeat="tab in tabset.tabs"\n         ng-class="{active: tabset.active === tab.index}"\n         uib-tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n');
	}]), angular.module("uib/template/timepicker/timepicker.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/timepicker/timepicker.html", '<table class="uib-timepicker">\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-increment hours"><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link" ng-disabled="noIncrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-increment minutes"><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link" ng-disabled="noIncrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-increment seconds"><a ng-click="incrementSeconds()" ng-class="{disabled: noIncrementSeconds()}" class="btn btn-link" ng-disabled="noIncrementSeconds()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group uib-time hours" ng-class="{\'has-error\': invalidHours}">\n        <input type="text" placeholder="HH" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementHours()" ng-blur="blur()">\n      </td>\n      <td class="uib-separator">:</td>\n      <td class="form-group uib-time minutes" ng-class="{\'has-error\': invalidMinutes}">\n        <input type="text" placeholder="MM" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementMinutes()" ng-blur="blur()">\n      </td>\n      <td ng-show="showSeconds" class="uib-separator">:</td>\n      <td class="form-group uib-time seconds" ng-class="{\'has-error\': invalidSeconds}" ng-show="showSeconds">\n        <input type="text" placeholder="SS" ng-model="seconds" ng-change="updateSeconds()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementSeconds()" ng-blur="blur()">\n      </td>\n      <td ng-show="showMeridian" class="uib-time am-pm"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()" ng-disabled="noToggleMeridian()" tabindex="{{::tabindex}}">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-decrement hours"><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link" ng-disabled="noDecrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-decrement minutes"><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link" ng-disabled="noDecrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-decrement seconds"><a ng-click="decrementSeconds()" ng-class="{disabled: noDecrementSeconds()}" class="btn btn-link" ng-disabled="noDecrementSeconds()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n');
	}]), angular.module("uib/template/typeahead/typeahead-match.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/typeahead/typeahead-match.html", '<a href\n   tabindex="-1"\n   ng-bind-html="match.label | uibTypeaheadHighlight:query"\n   ng-attr-title="{{match.label}}"></a>\n');
	}]), angular.module("uib/template/typeahead/typeahead-popup.html", []).run(["$templateCache", function (a) {
	  a.put("uib/template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index, $event)" role="option" id="{{::match.id}}">\n        <div uib-typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n');
	}]), angular.module("ui.bootstrap.carousel").run(function () {
	  !angular.$$csp().noInlineStyle && !angular.$$uibCarouselCss && angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'), angular.$$uibCarouselCss = !0;
	}), angular.module("ui.bootstrap.datepicker").run(function () {
	  !angular.$$csp().noInlineStyle && !angular.$$uibDatepickerCss && angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>'), angular.$$uibDatepickerCss = !0;
	}), angular.module("ui.bootstrap.position").run(function () {
	  !angular.$$csp().noInlineStyle && !angular.$$uibPositionCss && angular.element(document).find("head").prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'), angular.$$uibPositionCss = !0;
	}), angular.module("ui.bootstrap.datepickerPopup").run(function () {
	  !angular.$$csp().noInlineStyle && !angular.$$uibDatepickerpopupCss && angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>'), angular.$$uibDatepickerpopupCss = !0;
	}), angular.module("ui.bootstrap.tooltip").run(function () {
	  !angular.$$csp().noInlineStyle && !angular.$$uibTooltipCss && angular.element(document).find("head").prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'), angular.$$uibTooltipCss = !0;
	}), angular.module("ui.bootstrap.timepicker").run(function () {
	  !angular.$$csp().noInlineStyle && !angular.$$uibTimepickerCss && angular.element(document).find("head").prepend('<style type="text/css">.uib-time input{width:50px;}</style>'), angular.$$uibTimepickerCss = !0;
	}), angular.module("ui.bootstrap.typeahead").run(function () {
	  !angular.$$csp().noInlineStyle && !angular.$$uibTypeaheadCss && angular.element(document).find("head").prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'), angular.$$uibTypeaheadCss = !0;
	});

/***/ },

/***/ 74:
/***/ function(module, exports) {

	"use strict";
	
	/*!
	 * ui-select
	 * http://github.com/angular-ui/ui-select
	 * Version: 0.17.1 - 2016-05-16T19:31:32.352Z
	 * License: MIT
	 */
	!function () {
	  "use strict";
	  var e = { TAB: 9, ENTER: 13, ESC: 27, SPACE: 32, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, SHIFT: 16, CTRL: 17, ALT: 18, PAGE_UP: 33, PAGE_DOWN: 34, HOME: 36, END: 35, BACKSPACE: 8, DELETE: 46, COMMAND: 91, MAP: { 91: "COMMAND", 8: "BACKSPACE", 9: "TAB", 13: "ENTER", 16: "SHIFT", 17: "CTRL", 18: "ALT", 19: "PAUSEBREAK", 20: "CAPSLOCK", 27: "ESC", 32: "SPACE", 33: "PAGE_UP", 34: "PAGE_DOWN", 35: "END", 36: "HOME", 37: "LEFT", 38: "UP", 39: "RIGHT", 40: "DOWN", 43: "+", 44: "PRINTSCREEN", 45: "INSERT", 46: "DELETE", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 59: ";", 61: "=", 65: "A", 66: "B", 67: "C", 68: "D", 69: "E", 70: "F", 71: "G", 72: "H", 73: "I", 74: "J", 75: "K", 76: "L", 77: "M", 78: "N", 79: "O", 80: "P", 81: "Q", 82: "R", 83: "S", 84: "T", 85: "U", 86: "V", 87: "W", 88: "X", 89: "Y", 90: "Z", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111: "/", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NUMLOCK", 145: "SCROLLLOCK", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" }, isControl: function isControl(t) {
	      var i = t.which;switch (i) {case e.COMMAND:case e.SHIFT:case e.CTRL:case e.ALT:
	          return !0;}return !!(t.metaKey || t.ctrlKey || t.altKey);
	    }, isFunctionKey: function isFunctionKey(e) {
	      return e = e.which ? e.which : e, e >= 112 && 123 >= e;
	    }, isVerticalMovement: function isVerticalMovement(t) {
	      return ~[e.UP, e.DOWN].indexOf(t);
	    }, isHorizontalMovement: function isHorizontalMovement(t) {
	      return ~[e.LEFT, e.RIGHT, e.BACKSPACE, e.DELETE].indexOf(t);
	    }, toSeparator: function toSeparator(t) {
	      var i = { ENTER: "\n", TAB: "	", SPACE: " " }[t];return i ? i : e[t] ? void 0 : t;
	    } };void 0 === angular.element.prototype.querySelectorAll && (angular.element.prototype.querySelectorAll = function (e) {
	    return angular.element(this[0].querySelectorAll(e));
	  }), void 0 === angular.element.prototype.closest && (angular.element.prototype.closest = function (e) {
	    for (var t = this[0], i = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector; t;) {
	      if (i.bind(t)(e)) return t;t = t.parentElement;
	    }return !1;
	  });var t = 0,
	      i = angular.module("ui.select", []).constant("uiSelectConfig", { theme: "bootstrap", searchEnabled: !0, sortable: !1, placeholder: "", refreshDelay: 1e3, closeOnSelect: !0, skipFocusser: !1, dropdownPosition: "auto", generateId: function generateId() {
	      return t++;
	    }, appendToBody: !1 }).service("uiSelectMinErr", function () {
	    var e = angular.$$minErr("ui.select");return function () {
	      var t = e.apply(this, arguments),
	          i = t.message.replace(new RegExp("\nhttp://errors.angularjs.org/.*"), "");return new Error(i);
	    };
	  }).directive("uisTranscludeAppend", function () {
	    return { link: function link(e, t, i, c, s) {
	        s(e, function (e) {
	          t.append(e);
	        });
	      } };
	  }).filter("highlight", function () {
	    function e(e) {
	      return ("" + e).replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
	    }return function (t, i) {
	      return i && t ? ("" + t).replace(new RegExp(e(i), "gi"), '<span class="ui-select-highlight">$&</span>') : t;
	    };
	  }).factory("uisOffset", ["$document", "$window", function (e, t) {
	    return function (i) {
	      var c = i[0].getBoundingClientRect();return { width: c.width || i.prop("offsetWidth"), height: c.height || i.prop("offsetHeight"), top: c.top + (t.pageYOffset || e[0].documentElement.scrollTop), left: c.left + (t.pageXOffset || e[0].documentElement.scrollLeft) };
	    };
	  }]);i.factory("$$uisDebounce", ["$timeout", function (e) {
	    return function (t, i) {
	      var c;return function () {
	        var s = this,
	            l = Array.prototype.slice.call(arguments);c && e.cancel(c), c = e(function () {
	          t.apply(s, l);
	        }, i);
	      };
	    };
	  }]), i.directive("uiSelectChoices", ["uiSelectConfig", "uisRepeatParser", "uiSelectMinErr", "$compile", "$window", function (e, t, i, c, s) {
	    return { restrict: "EA", require: "^uiSelect", replace: !0, transclude: !0, templateUrl: function templateUrl(t) {
	        t.addClass("ui-select-choices");var i = t.parent().attr("theme") || e.theme;return i + "/choices.tpl.html";
	      }, compile: function compile(c, l) {
	        if (!l.repeat) throw i("repeat", "Expected 'repeat' expression.");var n = l.groupBy,
	            a = l.groupFilter;if (n) {
	          var r = c.querySelectorAll(".ui-select-choices-group");if (1 !== r.length) throw i("rows", "Expected 1 .ui-select-choices-group but got '{0}'.", r.length);r.attr("ng-repeat", t.getGroupNgRepeatExpression());
	        }var o = t.parse(l.repeat),
	            u = c.querySelectorAll(".ui-select-choices-row");if (1 !== u.length) throw i("rows", "Expected 1 .ui-select-choices-row but got '{0}'.", u.length);u.attr("ng-repeat", o.repeatExpression(n)).attr("ng-if", "$select.open");var d = c.querySelectorAll(".ui-select-choices-row-inner");if (1 !== d.length) throw i("rows", "Expected 1 .ui-select-choices-row-inner but got '{0}'.", d.length);d.attr("uis-transclude-append", "");var p = s.document.addEventListener ? u : d;return p.attr("ng-click", "$select.select(" + o.itemName + ",$select.skipFocusser,$event)"), function (t, i, c, s) {
	          s.parseRepeatAttr(c.repeat, n, a), s.disableChoiceExpression = c.uiDisableChoice, s.onHighlightCallback = c.onHighlight, s.dropdownPosition = c.position ? c.position.toLowerCase() : e.dropdownPosition, t.$on("$destroy", function () {
	            u.remove();
	          }), t.$watch("$select.search", function (e) {
	            e && !s.open && s.multiple && s.activate(!1, !0), s.activeIndex = s.tagging.isActivated ? -1 : 0, !c.minimumInputLength || s.search.length >= c.minimumInputLength ? s.refresh(c.refresh) : s.items = [];
	          }), c.$observe("refreshDelay", function () {
	            var i = t.$eval(c.refreshDelay);s.refreshDelay = void 0 !== i ? i : e.refreshDelay;
	          });
	        };
	      } };
	  }]), i.controller("uiSelectCtrl", ["$scope", "$element", "$timeout", "$filter", "$$uisDebounce", "uisRepeatParser", "uiSelectMinErr", "uiSelectConfig", "$parse", "$injector", "$window", function (t, i, c, s, l, n, a, r, o, u, d) {
	    function p(e, t, i) {
	      if (e.findIndex) return e.findIndex(t, i);for (var c, s = Object(e), l = s.length >>> 0, n = 0; l > n; n++) {
	        if (c = s[n], t.call(i, c, n, s)) return n;
	      }return -1;
	    }function h() {
	      (m.resetSearchInput || void 0 === m.resetSearchInput && r.resetSearchInput) && (m.search = $, m.selected && m.items.length && !m.multiple && (m.activeIndex = p(m.items, function (e) {
	        return angular.equals(this, e);
	      }, m.selected)));
	    }function g(e, t) {
	      var i,
	          c,
	          s = [];for (i = 0; i < t.length; i++) {
	        for (c = 0; c < e.length; c++) {
	          e[c].name == [t[i]] && s.push(e[c]);
	        }
	      }return s;
	    }function f(t) {
	      var i = !0;switch (t) {case e.DOWN:
	          !m.open && m.multiple ? m.activate(!1, !0) : m.activeIndex < m.items.length - 1 && m.activeIndex++;break;case e.UP:
	          !m.open && m.multiple ? m.activate(!1, !0) : (m.activeIndex > 0 || 0 === m.search.length && m.tagging.isActivated && m.activeIndex > -1) && m.activeIndex--;break;case e.TAB:
	          m.multiple && !m.open || m.select(m.items[m.activeIndex], !0);break;case e.ENTER:
	          m.open && (m.tagging.isActivated || m.activeIndex >= 0) ? m.select(m.items[m.activeIndex], m.skipFocusser) : m.activate(!1, !0);break;case e.ESC:
	          m.close();break;default:
	          i = !1;}return i;
	    }function v() {
	      var e = i.querySelectorAll(".ui-select-choices-content"),
	          t = e.querySelectorAll(".ui-select-choices-row");if (t.length < 1) throw a("choices", "Expected multiple .ui-select-choices-row but got '{0}'.", t.length);if (!(m.activeIndex < 0)) {
	        var c = t[m.activeIndex],
	            s = c.offsetTop + c.clientHeight - e[0].scrollTop,
	            l = e[0].offsetHeight;s > l ? e[0].scrollTop += s - l : s < c.clientHeight && (m.isGrouped && 0 === m.activeIndex ? e[0].scrollTop = 0 : e[0].scrollTop -= c.clientHeight - s);
	      }
	    }var m = this,
	        $ = "";if (m.placeholder = r.placeholder, m.searchEnabled = r.searchEnabled, m.sortable = r.sortable, m.refreshDelay = r.refreshDelay, m.paste = r.paste, m.removeSelected = !1, m.closeOnSelect = !0, m.skipFocusser = !1, m.search = $, m.activeIndex = 0, m.items = [], m.open = !1, m.focus = !1, m.disabled = !1, m.selected = void 0, m.dropdownPosition = "auto", m.focusser = void 0, m.resetSearchInput = !0, m.multiple = void 0, m.disableChoiceExpression = void 0, m.tagging = { isActivated: !1, fct: void 0 }, m.taggingTokens = { isActivated: !1, tokens: void 0 }, m.lockChoiceExpression = void 0, m.clickTriggeredSelect = !1, m.$filter = s, m.$element = i, m.$animate = function () {
	      try {
	        return u.get("$animate");
	      } catch (e) {
	        return null;
	      }
	    }(), m.searchInput = i.querySelectorAll("input.ui-select-search"), 1 !== m.searchInput.length) throw a("searchInput", "Expected 1 input.ui-select-search but got '{0}'.", m.searchInput.length);m.isEmpty = function () {
	      return angular.isUndefined(m.selected) || null === m.selected || "" === m.selected || m.multiple && 0 === m.selected.length;
	    }, m.activate = function (e, s) {
	      if (!m.disabled && !m.open) {
	        s || h(), t.$broadcast("uis:activate"), m.open = !0, m.activeIndex = m.activeIndex >= m.items.length ? 0 : m.activeIndex, -1 === m.activeIndex && m.taggingLabel !== !1 && (m.activeIndex = 0);var l = i.querySelectorAll(".ui-select-choices-content"),
	            n = i.querySelectorAll(".ui-select-search");if (m.$animate && m.$animate.enabled(l[0])) {
	          var a = function a(t, i) {
	            "start" === i && 0 === m.items.length ? (m.$animate.off("removeClass", n[0], a), c(function () {
	              m.focusSearchInput(e);
	            })) : "close" === i && (m.$animate.off("enter", l[0], a), c(function () {
	              m.focusSearchInput(e);
	            }));
	          };m.items.length > 0 ? m.$animate.on("enter", l[0], a) : m.$animate.on("removeClass", n[0], a);
	        } else c(function () {
	          m.focusSearchInput(e), !m.tagging.isActivated && m.items.length > 1 && v();
	        });
	      }
	    }, m.focusSearchInput = function (e) {
	      m.search = e || m.search, m.searchInput[0].focus();
	    }, m.findGroupByName = function (e) {
	      return m.groups && m.groups.filter(function (t) {
	        return t.name === e;
	      })[0];
	    }, m.parseRepeatAttr = function (e, i, c) {
	      function s(e) {
	        var s = t.$eval(i);if (m.groups = [], angular.forEach(e, function (e) {
	          var t = angular.isFunction(s) ? s(e) : e[s],
	              i = m.findGroupByName(t);i ? i.items.push(e) : m.groups.push({ name: t, items: [e] });
	        }), c) {
	          var l = t.$eval(c);angular.isFunction(l) ? m.groups = l(m.groups) : angular.isArray(l) && (m.groups = g(m.groups, l));
	        }m.items = [], m.groups.forEach(function (e) {
	          m.items = m.items.concat(e.items);
	        });
	      }function l(e) {
	        m.items = e;
	      }m.setItemsFn = i ? s : l, m.parserResult = n.parse(e), m.isGrouped = !!i, m.itemProperty = m.parserResult.itemName;var r = m.parserResult.source,
	          u = function u() {
	        var e = r(t);t.$uisSource = Object.keys(e).map(function (t) {
	          var i = {};return i[m.parserResult.keyName] = t, i.value = e[t], i;
	        });
	      };m.parserResult.keyName && (u(), m.parserResult.source = o("$uisSource" + m.parserResult.filters), t.$watch(r, function (e, t) {
	        e !== t && u();
	      }, !0)), m.refreshItems = function (e) {
	        e = e || m.parserResult.source(t);var i = m.selected;if (m.isEmpty() || angular.isArray(i) && !i.length || !m.removeSelected) m.setItemsFn(e);else if (void 0 !== e) {
	          var c = e.filter(function (e) {
	            return i.every(function (t) {
	              return !angular.equals(e, t);
	            });
	          });m.setItemsFn(c);
	        }"auto" !== m.dropdownPosition && "up" !== m.dropdownPosition || t.calculateDropdownPos();
	      }, t.$watchCollection(m.parserResult.source, function (e) {
	        if (void 0 === e || null === e) m.items = [];else {
	          if (!angular.isArray(e)) throw a("items", "Expected an array but got '{0}'.", e);m.refreshItems(e), angular.isDefined(m.ngModel.$modelValue) && (m.ngModel.$modelValue = null);
	        }
	      });
	    };var b;m.refresh = function (e) {
	      void 0 !== e && (b && c.cancel(b), b = c(function () {
	        t.$eval(e);
	      }, m.refreshDelay));
	    }, m.isActive = function (e) {
	      if (!m.open) return !1;var t = m.items.indexOf(e[m.itemProperty]),
	          i = t == m.activeIndex;return !i || 0 > t ? !1 : (i && !angular.isUndefined(m.onHighlightCallback) && e.$eval(m.onHighlightCallback), i);
	    }, m.isDisabled = function (e) {
	      if (m.open) {
	        var t,
	            i = m.items.indexOf(e[m.itemProperty]),
	            c = !1;return i >= 0 && !angular.isUndefined(m.disableChoiceExpression) && (t = m.items[i], c = !!e.$eval(m.disableChoiceExpression), t._uiSelectChoiceDisabled = c), c;
	      }
	    }, m.select = function (e, i, s) {
	      if (void 0 === e || !e._uiSelectChoiceDisabled) {
	        if (!m.items && !m.search && !m.tagging.isActivated) return;if (!e || !e._uiSelectChoiceDisabled) {
	          if (m.tagging.isActivated) {
	            if (m.taggingLabel === !1) {
	              if (m.activeIndex < 0) {
	                if (e = void 0 !== m.tagging.fct ? m.tagging.fct(m.search) : m.search, !e || angular.equals(m.items[0], e)) return;
	              } else e = m.items[m.activeIndex];
	            } else if (0 === m.activeIndex) {
	              if (void 0 === e) return;if (void 0 !== m.tagging.fct && "string" == typeof e) {
	                if (e = m.tagging.fct(e), !e) return;
	              } else "string" == typeof e && (e = e.replace(m.taggingLabel, "").trim());
	            }if (m.selected && angular.isArray(m.selected) && m.selected.filter(function (t) {
	              return angular.equals(t, e);
	            }).length > 0) return void m.close(i);
	          }t.$broadcast("uis:select", e);var l = {};l[m.parserResult.itemName] = e, c(function () {
	            m.onSelectCallback(t, { $item: e, $model: m.parserResult.modelMapper(t, l) });
	          }), m.closeOnSelect && m.close(i), s && "click" === s.type && (m.clickTriggeredSelect = !0);
	        }
	      }
	    }, m.close = function (e) {
	      m.open && (m.ngModel && m.ngModel.$setTouched && m.ngModel.$setTouched(), h(), m.open = !1, t.$broadcast("uis:close", e));
	    }, m.setFocus = function () {
	      m.focus || m.focusInput[0].focus();
	    }, m.clear = function (e) {
	      m.select(void 0), e.stopPropagation(), c(function () {
	        m.focusser[0].focus();
	      }, 0, !1);
	    }, m.toggle = function (e) {
	      m.open ? (m.close(), e.preventDefault(), e.stopPropagation()) : m.activate();
	    }, m.isLocked = function (e, t) {
	      var i,
	          c = m.selected[t];return c && !angular.isUndefined(m.lockChoiceExpression) && (i = !!e.$eval(m.lockChoiceExpression), c._uiSelectChoiceLocked = i), i;
	    };var w = null,
	        y = !1;m.sizeSearchInput = function () {
	      var e = m.searchInput[0],
	          i = m.searchInput.parent().parent()[0],
	          s = function s() {
	        return i.clientWidth * !!e.offsetParent;
	      },
	          l = function l(t) {
	        if (0 === t) return !1;var i = t - e.offsetLeft - 10;return 50 > i && (i = t), m.searchInput.css("width", i + "px"), !0;
	      };m.searchInput.css("width", "10px"), c(function () {
	        null !== w || l(s()) || (w = t.$watch(angular.noop, function () {
	          y || (y = !0, t.$$postDigest(function () {
	            y = !1, l(s()) && (w(), w = null);
	          }));
	        }));
	      });
	    }, m.searchInput.on("keydown", function (i) {
	      var s = i.which;~[e.ENTER, e.ESC].indexOf(s) && (i.preventDefault(), i.stopPropagation()), t.$apply(function () {
	        var t = !1;if ((m.items.length > 0 || m.tagging.isActivated) && (f(s), m.taggingTokens.isActivated)) {
	          for (var l = 0; l < m.taggingTokens.tokens.length; l++) {
	            m.taggingTokens.tokens[l] === e.MAP[i.keyCode] && m.search.length > 0 && (t = !0);
	          }t && c(function () {
	            m.searchInput.triggerHandler("tagged");var t = m.search.replace(e.MAP[i.keyCode], "").trim();m.tagging.fct && (t = m.tagging.fct(t)), t && m.select(t, !0);
	          });
	        }
	      }), e.isVerticalMovement(s) && m.items.length > 0 && v(), s !== e.ENTER && s !== e.ESC || (i.preventDefault(), i.stopPropagation());
	    }), m.searchInput.on("paste", function (t) {
	      var i;if (i = window.clipboardData && window.clipboardData.getData ? window.clipboardData.getData("Text") : (t.originalEvent || t).clipboardData.getData("text/plain"), i = m.search + i, i && i.length > 0) if (m.taggingTokens.isActivated) {
	        for (var c = [], s = 0; s < m.taggingTokens.tokens.length; s++) {
	          var l = e.toSeparator(m.taggingTokens.tokens[s]) || m.taggingTokens.tokens[s];if (i.indexOf(l) > -1) {
	            c = i.split(l);break;
	          }
	        }if (0 === c.length && (c = [i]), c.length > 0) {
	          var n = m.search;angular.forEach(c, function (e) {
	            var t = m.tagging.fct ? m.tagging.fct(e) : e;t && m.select(t, !0);
	          }), m.search = n || $, t.preventDefault(), t.stopPropagation();
	        }
	      } else m.paste && (m.paste(i), m.search = $, t.preventDefault(), t.stopPropagation());
	    }), m.searchInput.on("tagged", function () {
	      c(function () {
	        h();
	      });
	    });var x = l(function () {
	      m.sizeSearchInput();
	    }, 50);angular.element(d).bind("resize", x), t.$on("$destroy", function () {
	      m.searchInput.off("keyup keydown tagged blur paste"), angular.element(d).off("resize", x);
	    });
	  }]), i.directive("uiSelect", ["$document", "uiSelectConfig", "uiSelectMinErr", "uisOffset", "$compile", "$parse", "$timeout", function (e, t, i, c, s, l, n) {
	    return { restrict: "EA", templateUrl: function templateUrl(e, i) {
	        var c = i.theme || t.theme;return c + (angular.isDefined(i.multiple) ? "/select-multiple.tpl.html" : "/select.tpl.html");
	      }, replace: !0, transclude: !0, require: ["uiSelect", "^ngModel"], scope: !0, controller: "uiSelectCtrl", controllerAs: "$select", compile: function compile(s, a) {
	        var r = /{(.*)}\s*{(.*)}/.exec(a.ngClass);if (r) {
	          var o = "{" + r[1] + ", " + r[2] + "}";a.ngClass = o, s.attr("ng-class", o);
	        }return angular.isDefined(a.multiple) ? s.append("<ui-select-multiple/>").removeAttr("multiple") : s.append("<ui-select-single/>"), a.inputId && (s.querySelectorAll("input.ui-select-search")[0].id = a.inputId), function (s, a, r, o, u) {
	          function d(e) {
	            if (g.open) {
	              var t = !1;if (t = window.jQuery ? window.jQuery.contains(a[0], e.target) : a[0].contains(e.target), !t && !g.clickTriggeredSelect) {
	                var i;if (g.skipFocusser) i = !0;else {
	                  var c = ["input", "button", "textarea", "select"],
	                      l = angular.element(e.target).controller("uiSelect");i = l && l !== g, i || (i = ~c.indexOf(e.target.tagName.toLowerCase()));
	                }g.close(i), s.$digest();
	              }g.clickTriggeredSelect = !1;
	            }
	          }function p() {
	            var t = c(a);m = angular.element('<div class="ui-select-placeholder"></div>'), m[0].style.width = t.width + "px", m[0].style.height = t.height + "px", a.after(m), $ = a[0].style.width, e.find("body").append(a), a[0].style.position = "absolute", a[0].style.left = t.left + "px", a[0].style.top = t.top + "px", a[0].style.width = t.width + "px";
	          }function h() {
	            null !== m && (m.replaceWith(a), m = null, a[0].style.position = "", a[0].style.left = "", a[0].style.top = "", a[0].style.width = $, g.setFocus());
	          }var g = o[0],
	              f = o[1];g.generatedId = t.generateId(), g.baseTitle = r.title || "Select box", g.focusserTitle = g.baseTitle + " focus", g.focusserId = "focusser-" + g.generatedId, g.closeOnSelect = function () {
	            return angular.isDefined(r.closeOnSelect) ? l(r.closeOnSelect)() : t.closeOnSelect;
	          }(), s.$watch("skipFocusser", function () {
	            var e = s.$eval(r.skipFocusser);g.skipFocusser = void 0 !== e ? e : t.skipFocusser;
	          }), g.onSelectCallback = l(r.onSelect), g.onRemoveCallback = l(r.onRemove), g.limit = angular.isDefined(r.limit) ? parseInt(r.limit, 10) : void 0, g.ngModel = f, g.choiceGrouped = function (e) {
	            return g.isGrouped && e && e.name;
	          }, r.tabindex && r.$observe("tabindex", function (e) {
	            g.focusInput.attr("tabindex", e), a.removeAttr("tabindex");
	          }), s.$watch("searchEnabled", function () {
	            var e = s.$eval(r.searchEnabled);g.searchEnabled = void 0 !== e ? e : t.searchEnabled;
	          }), s.$watch("sortable", function () {
	            var e = s.$eval(r.sortable);g.sortable = void 0 !== e ? e : t.sortable;
	          }), r.$observe("disabled", function () {
	            g.disabled = void 0 !== r.disabled ? r.disabled : !1;
	          }), r.$observe("resetSearchInput", function () {
	            var e = s.$eval(r.resetSearchInput);g.resetSearchInput = void 0 !== e ? e : !0;
	          }), r.$observe("paste", function () {
	            g.paste = s.$eval(r.paste);
	          }), r.$observe("tagging", function () {
	            if (void 0 !== r.tagging) {
	              var e = s.$eval(r.tagging);g.tagging = { isActivated: !0, fct: e !== !0 ? e : void 0 };
	            } else g.tagging = { isActivated: !1, fct: void 0 };
	          }), r.$observe("taggingLabel", function () {
	            void 0 !== r.tagging && ("false" === r.taggingLabel ? g.taggingLabel = !1 : g.taggingLabel = void 0 !== r.taggingLabel ? r.taggingLabel : "(new)");
	          }), r.$observe("taggingTokens", function () {
	            if (void 0 !== r.tagging) {
	              var e = void 0 !== r.taggingTokens ? r.taggingTokens.split("|") : [",", "ENTER"];g.taggingTokens = { isActivated: !0, tokens: e };
	            }
	          }), angular.isDefined(r.autofocus) && n(function () {
	            g.setFocus();
	          }), angular.isDefined(r.focusOn) && s.$on(r.focusOn, function () {
	            n(function () {
	              g.setFocus();
	            });
	          }), e.on("click", d), s.$on("$destroy", function () {
	            e.off("click", d);
	          }), u(s, function (e) {
	            var t = angular.element("<div>").append(e),
	                c = t.querySelectorAll(".ui-select-match");if (c.removeAttr("ui-select-match"), c.removeAttr("data-ui-select-match"), 1 !== c.length) throw i("transcluded", "Expected 1 .ui-select-match but got '{0}'.", c.length);a.querySelectorAll(".ui-select-match").replaceWith(c);var s = t.querySelectorAll(".ui-select-choices");if (s.removeAttr("ui-select-choices"), s.removeAttr("data-ui-select-choices"), 1 !== s.length) throw i("transcluded", "Expected 1 .ui-select-choices but got '{0}'.", s.length);a.querySelectorAll(".ui-select-choices").replaceWith(s);var l = t.querySelectorAll(".ui-select-no-choice");l.removeAttr("ui-select-no-choice"), l.removeAttr("data-ui-select-no-choice"), 1 == l.length && a.querySelectorAll(".ui-select-no-choice").replaceWith(l);
	          });var v = s.$eval(r.appendToBody);(void 0 !== v ? v : t.appendToBody) && (s.$watch("$select.open", function (e) {
	            e ? p() : h();
	          }), s.$on("$destroy", function () {
	            h();
	          }));var m = null,
	              $ = "",
	              b = null,
	              w = "direction-up";s.$watch("$select.open", function () {
	            "auto" !== g.dropdownPosition && "up" !== g.dropdownPosition || s.calculateDropdownPos();
	          });var y = function y(e, t) {
	            e = e || c(a), t = t || c(b), b[0].style.position = "absolute", b[0].style.top = -1 * t.height + "px", a.addClass(w);
	          },
	              x = function x(e, t) {
	            a.removeClass(w), e = e || c(a), t = t || c(b), b[0].style.position = "", b[0].style.top = "";
	          };s.calculateDropdownPos = function () {
	            if (g.open) {
	              if (b = angular.element(a).querySelectorAll(".ui-select-dropdown"), 0 === b.length) return;b[0].style.opacity = 0, n(function () {
	                if ("up" === g.dropdownPosition) y();else {
	                  a.removeClass(w);var t = c(a),
	                      i = c(b),
	                      s = e[0].documentElement.scrollTop || e[0].body.scrollTop;t.top + t.height + i.height > s + e[0].documentElement.clientHeight ? y(t, i) : x(t, i);
	                }b[0].style.opacity = 1;
	              });
	            } else {
	              if (null === b || 0 === b.length) return;b[0].style.position = "", b[0].style.top = "", a.removeClass(w);
	            }
	          };
	        };
	      } };
	  }]), i.directive("uiSelectMatch", ["uiSelectConfig", function (e) {
	    function t(e, t) {
	      return e[0].hasAttribute(t) ? e.attr(t) : e[0].hasAttribute("data-" + t) ? e.attr("data-" + t) : e[0].hasAttribute("x-" + t) ? e.attr("x-" + t) : void 0;
	    }return { restrict: "EA", require: "^uiSelect", replace: !0, transclude: !0, templateUrl: function templateUrl(i) {
	        i.addClass("ui-select-match");var c = i.parent(),
	            s = t(c, "theme") || e.theme,
	            l = angular.isDefined(t(c, "multiple"));return s + (l ? "/match-multiple.tpl.html" : "/match.tpl.html");
	      }, link: function link(t, i, c, s) {
	        function l(e) {
	          s.allowClear = angular.isDefined(e) ? "" === e ? !0 : "true" === e.toLowerCase() : !1;
	        }s.lockChoiceExpression = c.uiLockChoice, c.$observe("placeholder", function (t) {
	          s.placeholder = void 0 !== t ? t : e.placeholder;
	        }), c.$observe("allowClear", l), l(c.allowClear), s.multiple && s.sizeSearchInput();
	      } };
	  }]), i.directive("uiSelectMultiple", ["uiSelectMinErr", "$timeout", function (t, i) {
	    return { restrict: "EA", require: ["^uiSelect", "^ngModel"], controller: ["$scope", "$timeout", function (e, t) {
	        var i,
	            c = this,
	            s = e.$select;angular.isUndefined(s.selected) && (s.selected = []), e.$evalAsync(function () {
	          i = e.ngModel;
	        }), c.activeMatchIndex = -1, c.updateModel = function () {
	          i.$setViewValue(Date.now()), c.refreshComponent();
	        }, c.refreshComponent = function () {
	          s.refreshItems(), s.sizeSearchInput();
	        }, c.removeChoice = function (i) {
	          var l = s.selected[i];if (!l._uiSelectChoiceLocked) {
	            var n = {};n[s.parserResult.itemName] = l, s.selected.splice(i, 1), c.activeMatchIndex = -1, s.sizeSearchInput(), t(function () {
	              s.onRemoveCallback(e, { $item: l, $model: s.parserResult.modelMapper(e, n) });
	            }), c.updateModel();
	          }
	        }, c.getPlaceholder = function () {
	          return s.selected && s.selected.length ? void 0 : s.placeholder;
	        };
	      }], controllerAs: "$selectMultiple", link: function link(c, s, l, n) {
	        function a(e) {
	          return angular.isNumber(e.selectionStart) ? e.selectionStart : e.value.length;
	        }function r(t) {
	          function i() {
	            switch (t) {case e.LEFT:
	                return ~h.activeMatchIndex ? u : n;case e.RIGHT:
	                return ~h.activeMatchIndex && r !== n ? o : (d.activate(), !1);case e.BACKSPACE:
	                return ~h.activeMatchIndex ? (h.removeChoice(r), u) : n;case e.DELETE:
	                return ~h.activeMatchIndex ? (h.removeChoice(h.activeMatchIndex), r) : !1;}
	          }var c = a(d.searchInput[0]),
	              s = d.selected.length,
	              l = 0,
	              n = s - 1,
	              r = h.activeMatchIndex,
	              o = h.activeMatchIndex + 1,
	              u = h.activeMatchIndex - 1,
	              p = r;return c > 0 || d.search.length && t == e.RIGHT ? !1 : (d.close(), p = i(), d.selected.length && p !== !1 ? h.activeMatchIndex = Math.min(n, Math.max(l, p)) : h.activeMatchIndex = -1, !0);
	        }function o(e) {
	          if (void 0 === e || void 0 === d.search) return !1;var t = e.filter(function (e) {
	            return void 0 === d.search.toUpperCase() || void 0 === e ? !1 : e.toUpperCase() === d.search.toUpperCase();
	          }).length > 0;return t;
	        }function u(e, t) {
	          var i = -1;if (angular.isArray(e)) for (var c = angular.copy(e), s = 0; s < c.length; s++) {
	            if (void 0 === d.tagging.fct) c[s] + " " + d.taggingLabel === t && (i = s);else {
	              var l = c[s];angular.isObject(l) && (l.isTag = !0), angular.equals(l, t) && (i = s);
	            }
	          }return i;
	        }var d = n[0],
	            p = c.ngModel = n[1],
	            h = c.$selectMultiple;d.multiple = !0, d.removeSelected = !0, d.focusInput = d.searchInput, p.$isEmpty = function (e) {
	          return !e || 0 === e.length;
	        }, p.$parsers.unshift(function () {
	          for (var e, t = {}, i = [], s = d.selected.length - 1; s >= 0; s--) {
	            t = {}, t[d.parserResult.itemName] = d.selected[s], e = d.parserResult.modelMapper(c, t), i.unshift(e);
	          }return i;
	        }), p.$formatters.unshift(function (e) {
	          var t,
	              i = d.parserResult && d.parserResult.source(c, { $select: { search: "" } }),
	              s = {};if (!i) return e;var l = [],
	              n = function n(e, i) {
	            if (e && e.length) {
	              for (var n = e.length - 1; n >= 0; n--) {
	                if (s[d.parserResult.itemName] = e[n], t = d.parserResult.modelMapper(c, s), d.parserResult.trackByExp) {
	                  var a = /(\w*)\./.exec(d.parserResult.trackByExp),
	                      r = /\.([^\s]+)/.exec(d.parserResult.trackByExp);if (a && a.length > 0 && a[1] == d.parserResult.itemName && r && r.length > 0 && t[r[1]] == i[r[1]]) return l.unshift(e[n]), !0;
	                }if (angular.equals(t, i)) return l.unshift(e[n]), !0;
	              }return !1;
	            }
	          };if (!e) return l;for (var a = e.length - 1; a >= 0; a--) {
	            n(d.selected, e[a]) || n(i, e[a]) || l.unshift(e[a]);
	          }return l;
	        }), c.$watchCollection(function () {
	          return p.$modelValue;
	        }, function (e, t) {
	          t != e && (angular.isDefined(p.$modelValue) && (p.$modelValue = null), h.refreshComponent());
	        }), p.$render = function () {
	          if (!angular.isArray(p.$viewValue)) {
	            if (!angular.isUndefined(p.$viewValue) && null !== p.$viewValue) throw t("multiarr", "Expected model value to be array but got '{0}'", p.$viewValue);d.selected = [];
	          }d.selected = p.$viewValue, h.refreshComponent(), c.$evalAsync();
	        }, c.$on("uis:select", function (e, t) {
	          d.selected.length >= d.limit || (d.selected.push(t), h.updateModel());
	        }), c.$on("uis:activate", function () {
	          h.activeMatchIndex = -1;
	        }), c.$watch("$select.disabled", function (e, t) {
	          t && !e && d.sizeSearchInput();
	        }), d.searchInput.on("keydown", function (t) {
	          var i = t.which;c.$apply(function () {
	            var c = !1;e.isHorizontalMovement(i) && (c = r(i)), c && i != e.TAB && (t.preventDefault(), t.stopPropagation());
	          });
	        }), d.searchInput.on("keyup", function (t) {
	          if (e.isVerticalMovement(t.which) || c.$evalAsync(function () {
	            d.activeIndex = d.taggingLabel === !1 ? -1 : 0;
	          }), d.tagging.isActivated && d.search.length > 0) {
	            if (t.which === e.TAB || e.isControl(t) || e.isFunctionKey(t) || t.which === e.ESC || e.isVerticalMovement(t.which)) return;if (d.activeIndex = d.taggingLabel === !1 ? -1 : 0, d.taggingLabel === !1) return;var i,
	                s,
	                l,
	                n,
	                a = angular.copy(d.items),
	                r = angular.copy(d.items),
	                p = !1,
	                h = -1;if (void 0 !== d.tagging.fct) {
	              if (l = d.$filter("filter")(a, { isTag: !0 }), l.length > 0 && (n = l[0]), a.length > 0 && n && (p = !0, a = a.slice(1, a.length), r = r.slice(1, r.length)), i = d.tagging.fct(d.search), r.some(function (e) {
	                return angular.equals(e, i);
	              }) || d.selected.some(function (e) {
	                return angular.equals(e, i);
	              })) return void c.$evalAsync(function () {
	                d.activeIndex = 0, d.items = a;
	              });i && (i.isTag = !0);
	            } else {
	              if (l = d.$filter("filter")(a, function (e) {
	                return e.match(d.taggingLabel);
	              }), l.length > 0 && (n = l[0]), s = a[0], void 0 !== s && a.length > 0 && n && (p = !0, a = a.slice(1, a.length), r = r.slice(1, r.length)), i = d.search + " " + d.taggingLabel, u(d.selected, d.search) > -1) return;if (o(r.concat(d.selected))) return void (p && (a = r, c.$evalAsync(function () {
	                d.activeIndex = 0, d.items = a;
	              })));if (o(r)) return void (p && (d.items = r.slice(1, r.length)));
	            }p && (h = u(d.selected, i)), h > -1 ? a = a.slice(h + 1, a.length - 1) : (a = [], i && a.push(i), a = a.concat(r)), c.$evalAsync(function () {
	              if (d.activeIndex = 0, d.items = a, d.isGrouped) {
	                var e = i ? a.slice(1) : a;d.setItemsFn(e), i && (d.items.unshift(i), d.groups.unshift({ name: "", items: [i], tagging: !0 }));
	              }
	            });
	          }
	        }), d.searchInput.on("blur", function () {
	          i(function () {
	            h.activeMatchIndex = -1;
	          });
	        });
	      } };
	  }]), i.directive("uiSelectNoChoice", ["uiSelectConfig", function (e) {
	    return { restrict: "EA", require: "^uiSelect", replace: !0, transclude: !0, templateUrl: function templateUrl(t) {
	        var i = t.parent().attr("theme") || e.theme;return i + "/no-choice.tpl.html";
	      } };
	  }]), i.directive("uiSelectSingle", ["$timeout", "$compile", function (t, i) {
	    return { restrict: "EA", require: ["^uiSelect", "^ngModel"], link: function link(c, s, l, n) {
	        var a = n[0],
	            r = n[1];r.$parsers.unshift(function (e) {
	          var t,
	              i = {};return i[a.parserResult.itemName] = e, t = a.parserResult.modelMapper(c, i);
	        }), r.$formatters.unshift(function (e) {
	          var t,
	              i = a.parserResult && a.parserResult.source(c, { $select: { search: "" } }),
	              s = {};if (i) {
	            var l = function l(i) {
	              return s[a.parserResult.itemName] = i, t = a.parserResult.modelMapper(c, s), t === e;
	            };if (a.selected && l(a.selected)) return a.selected;for (var n = i.length - 1; n >= 0; n--) {
	              if (l(i[n])) return i[n];
	            }
	          }return e;
	        }), c.$watch("$select.selected", function (e) {
	          r.$viewValue !== e && r.$setViewValue(e);
	        }), r.$render = function () {
	          a.selected = r.$viewValue;
	        }, c.$on("uis:select", function (e, t) {
	          a.selected = t;
	        }), c.$on("uis:close", function (e, i) {
	          t(function () {
	            a.focusser.prop("disabled", !1), i || a.focusser[0].focus();
	          }, 0, !1);
	        }), c.$on("uis:activate", function () {
	          o.prop("disabled", !0);
	        });var o = angular.element("<input ng-disabled='$select.disabled' class='ui-select-focusser ui-select-offscreen' type='text' id='{{ $select.focusserId }}' aria-label='{{ $select.focusserTitle }}' aria-haspopup='true' role='button' />");i(o)(c), a.focusser = o, a.focusInput = o, s.parent().append(o), o.bind("focus", function () {
	          c.$evalAsync(function () {
	            a.focus = !0;
	          });
	        }), o.bind("blur", function () {
	          c.$evalAsync(function () {
	            a.focus = !1;
	          });
	        }), o.bind("keydown", function (t) {
	          return t.which === e.BACKSPACE ? (t.preventDefault(), t.stopPropagation(), a.select(void 0), void c.$apply()) : void (t.which === e.TAB || e.isControl(t) || e.isFunctionKey(t) || t.which === e.ESC || (t.which != e.DOWN && t.which != e.UP && t.which != e.ENTER && t.which != e.SPACE || (t.preventDefault(), t.stopPropagation(), a.activate()), c.$digest()));
	        }), o.bind("keyup input", function (t) {
	          t.which === e.TAB || e.isControl(t) || e.isFunctionKey(t) || t.which === e.ESC || t.which == e.ENTER || t.which === e.BACKSPACE || (a.activate(o.val()), o.val(""), c.$digest());
	        });
	      } };
	  }]), i.directive("uiSelectSort", ["$timeout", "uiSelectConfig", "uiSelectMinErr", function (e, t, i) {
	    return { require: ["^^uiSelect", "^ngModel"], link: function link(t, c, s, l) {
	        if (null === t[s.uiSelectSort]) throw i("sort", "Expected a list to sort");var n = l[0],
	            a = l[1],
	            r = angular.extend({ axis: "horizontal" }, t.$eval(s.uiSelectSortOptions)),
	            o = r.axis,
	            u = "dragging",
	            d = "dropping",
	            p = "dropping-before",
	            h = "dropping-after";t.$watch(function () {
	          return n.sortable;
	        }, function (e) {
	          e ? c.attr("draggable", !0) : c.removeAttr("draggable");
	        }), c.on("dragstart", function (e) {
	          c.addClass(u), (e.dataTransfer || e.originalEvent.dataTransfer).setData("text", t.$index.toString());
	        }), c.on("dragend", function () {
	          v(u);
	        });var g,
	            f = function f(e, t) {
	          this.splice(t, 0, this.splice(e, 1)[0]);
	        },
	            v = function v(e) {
	          angular.forEach(n.$element.querySelectorAll("." + e), function (t) {
	            angular.element(t).removeClass(e);
	          });
	        },
	            m = function m(e) {
	          e.preventDefault();var t = "vertical" === o ? e.offsetY || e.layerY || (e.originalEvent ? e.originalEvent.offsetY : 0) : e.offsetX || e.layerX || (e.originalEvent ? e.originalEvent.offsetX : 0);t < this["vertical" === o ? "offsetHeight" : "offsetWidth"] / 2 ? (v(h), c.addClass(p)) : (v(p), c.addClass(h));
	        },
	            $ = function $(t) {
	          t.preventDefault();var i = parseInt((t.dataTransfer || t.originalEvent.dataTransfer).getData("text"), 10);e.cancel(g), g = e(function () {
	            b(i);
	          }, 20);
	        },
	            b = function b(e) {
	          var i = t.$eval(s.uiSelectSort),
	              l = i[e],
	              n = null;n = c.hasClass(p) ? e < t.$index ? t.$index - 1 : t.$index : e < t.$index ? t.$index : t.$index + 1, f.apply(i, [e, n]), a.$setViewValue(Date.now()), t.$apply(function () {
	            t.$emit("uiSelectSort:change", { array: i, item: l, from: e, to: n });
	          }), v(d), v(p), v(h), c.off("drop", $);
	        };c.on("dragenter", function () {
	          c.hasClass(u) || (c.addClass(d), c.on("dragover", m), c.on("drop", $));
	        }), c.on("dragleave", function (e) {
	          e.target == c && (v(d), v(p), v(h), c.off("dragover", m), c.off("drop", $));
	        });
	      } };
	  }]), i.service("uisRepeatParser", ["uiSelectMinErr", "$parse", function (e, t) {
	    var i = this;i.parse = function (i) {
	      var c;if (c = i.match(/^\s*(?:([\s\S]+?)\s+as\s+)?(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(\s*[\s\S]+?)?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), !c) throw e("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", i);var s = c[5],
	          l = "";if (c[3]) {
	        s = c[5].replace(/(^\()|(\)$)/g, "");var n = c[5].match(/^\s*(?:[\s\S]+?)(?:[^\|]|\|\|)+([\s\S]*)\s*$/);n && n[1].trim() && (l = n[1], s = s.replace(l, ""));
	      }return { itemName: c[4] || c[2], keyName: c[3], source: t(s), filters: l, trackByExp: c[6], modelMapper: t(c[1] || c[4] || c[2]), repeatExpression: function repeatExpression(e) {
	          var t = this.itemName + " in " + (e ? "$group.items" : "$select.items");return this.trackByExp && (t += " track by " + this.trackByExp), t;
	        } };
	    }, i.getGroupNgRepeatExpression = function () {
	      return "$group in $select.groups";
	    };
	  }]);
	}(), angular.module("ui.select").run(["$templateCache", function (e) {
	  e.put("bootstrap/choices.tpl.html", '<ul class="ui-select-choices ui-select-choices-content ui-select-dropdown dropdown-menu" role="listbox" ng-show="$select.open && $select.items.length > 0"><li class="ui-select-choices-group" id="ui-select-choices-{{ $select.generatedId }}"><div class="divider" ng-show="$select.isGrouped && $index > 0"></div><div ng-show="$select.isGrouped" class="ui-select-choices-group-label dropdown-header" ng-bind="$group.name"></div><div ng-attr-id="ui-select-choices-row-{{ $select.generatedId }}-{{$index}}" class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}" role="option"><a href="" class="ui-select-choices-row-inner"></a></div></li></ul>'), e.put("bootstrap/match-multiple.tpl.html", '<span class="ui-select-match"><span ng-repeat="$item in $select.selected"><span class="ui-select-match-item btn btn-default btn-xs" tabindex="-1" type="button" ng-disabled="$select.disabled" ng-click="$selectMultiple.activeMatchIndex = $index;" ng-class="{\'btn-primary\':$selectMultiple.activeMatchIndex === $index, \'select-locked\':$select.isLocked(this, $index)}" ui-select-sort="$select.selected"><span class="close ui-select-match-close" ng-hide="$select.disabled" ng-click="$selectMultiple.removeChoice($index)">&nbsp;&times;</span> <span uis-transclude-append=""></span></span></span></span>'), e.put("bootstrap/match.tpl.html", '<div class="ui-select-match" ng-hide="$select.open && $select.searchEnabled" ng-disabled="$select.disabled" ng-class="{\'btn-default-focus\':$select.focus}"><span tabindex="-1" class="btn btn-default form-control ui-select-toggle" aria-label="{{ $select.baseTitle }} activate" ng-disabled="$select.disabled" ng-click="$select.activate()" style="outline: 0;"><span ng-show="$select.isEmpty()" class="ui-select-placeholder text-muted">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="ui-select-match-text pull-left" ng-class="{\'ui-select-allow-clear\': $select.allowClear && !$select.isEmpty()}" ng-transclude=""></span> <i class="caret pull-right" ng-click="$select.toggle($event)"></i> <a ng-show="$select.allowClear && !$select.isEmpty() && ($select.disabled !== true)" aria-label="{{ $select.baseTitle }} clear" style="margin-right: 10px" ng-click="$select.clear($event)" class="btn btn-xs btn-link pull-right"><i class="glyphicon glyphicon-remove" aria-hidden="true"></i></a></span></div>'), e.put("bootstrap/no-choice.tpl.html", '<ul class="ui-select-no-choice dropdown-menu" ng-show="$select.items.length == 0"><li ng-transclude=""></li></ul>'), e.put("bootstrap/select-multiple.tpl.html", '<div class="ui-select-container ui-select-multiple ui-select-bootstrap dropdown form-control" ng-class="{open: $select.open}"><div><div class="ui-select-match"></div><input type="search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="ui-select-search input-xs" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-click="$select.activate()" ng-model="$select.search" role="combobox" aria-label="{{ $select.baseTitle }}" ondrop="return false;"></div><div class="ui-select-choices"></div></div>'), e.put("bootstrap/select.tpl.html", '<div class="ui-select-container ui-select-bootstrap dropdown" ng-class="{open: $select.open}"><div class="ui-select-match"></div><input type="search" autocomplete="off" tabindex="-1" aria-expanded="true" aria-label="{{ $select.baseTitle }}" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="form-control ui-select-search" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-show="$select.searchEnabled && $select.open"><div class="ui-select-choices"></div><div class="ui-select-no-choice"></div></div>'), e.put("select2/choices.tpl.html", '<ul tabindex="-1" class="ui-select-choices ui-select-choices-content select2-results"><li class="ui-select-choices-group" ng-class="{\'select2-result-with-children\': $select.choiceGrouped($group) }"><div ng-show="$select.choiceGrouped($group)" class="ui-select-choices-group-label select2-result-label" ng-bind="$group.name"></div><ul role="listbox" id="ui-select-choices-{{ $select.generatedId }}" ng-class="{\'select2-result-sub\': $select.choiceGrouped($group), \'select2-result-single\': !$select.choiceGrouped($group) }"><li role="option" ng-attr-id="ui-select-choices-row-{{ $select.generatedId }}-{{$index}}" class="ui-select-choices-row" ng-class="{\'select2-highlighted\': $select.isActive(this), \'select2-disabled\': $select.isDisabled(this)}"><div class="select2-result-label ui-select-choices-row-inner"></div></li></ul></li></ul>'), e.put("select2/match-multiple.tpl.html", '<span class="ui-select-match"><li class="ui-select-match-item select2-search-choice" ng-repeat="$item in $select.selected" ng-class="{\'select2-search-choice-focus\':$selectMultiple.activeMatchIndex === $index, \'select2-locked\':$select.isLocked(this, $index)}" ui-select-sort="$select.selected"><span uis-transclude-append=""></span> <a href="javascript:;" class="ui-select-match-close select2-search-choice-close" ng-click="$selectMultiple.removeChoice($index)" tabindex="-1"></a></li></span>'), e.put("select2/match.tpl.html", '<a class="select2-choice ui-select-match" ng-class="{\'select2-default\': $select.isEmpty()}" ng-click="$select.toggle($event)" aria-label="{{ $select.baseTitle }} select"><span ng-show="$select.isEmpty()" class="select2-chosen">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="select2-chosen" ng-transclude=""></span> <abbr ng-if="$select.allowClear && !$select.isEmpty()" class="select2-search-choice-close" ng-click="$select.clear($event)"></abbr> <span class="select2-arrow ui-select-toggle"><b></b></span></a>'), e.put("select2/select-multiple.tpl.html", '<div class="ui-select-container ui-select-multiple select2 select2-container select2-container-multi" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled}"><ul class="select2-choices"><span class="ui-select-match"></span><li class="select2-search-field"><input type="search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="combobox" aria-expanded="true" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-label="{{ $select.baseTitle }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="select2-input ui-select-search" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-model="$select.search" ng-click="$select.activate()" style="width: 34px;" ondrop="return false;"></li></ul><div class="ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open || $select.items.length === 0}"><div class="ui-select-choices"></div></div></div>'), e.put("select2/select.tpl.html", '<div class="ui-select-container select2 select2-container" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled, \'select2-container-active\': $select.focus, \'select2-allowclear\': $select.allowClear && !$select.isEmpty()}"><div class="ui-select-match"></div><div class="ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open}"><div class="select2-search" ng-show="$select.searchEnabled"><input type="search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="combobox" aria-expanded="true" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-label="{{ $select.baseTitle }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="ui-select-search select2-input" ng-model="$select.search"></div><div class="ui-select-choices"></div></div></div>'), e.put("selectize/choices.tpl.html", '<div ng-show="$select.open" class="ui-select-choices ui-select-dropdown selectize-dropdown single"><div class="ui-select-choices-content selectize-dropdown-content"><div class="ui-select-choices-group optgroup" role="listbox"><div ng-show="$select.isGrouped" class="ui-select-choices-group-label optgroup-header" ng-bind="$group.name"></div><div role="option" class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}"><div class="option ui-select-choices-row-inner" data-selectable=""></div></div></div></div></div>'), e.put("selectize/match.tpl.html", '<div ng-hide="$select.searchEnabled && ($select.open || $select.isEmpty())" class="ui-select-match" ng-transclude=""></div>'), e.put("selectize/select.tpl.html", '<div class="ui-select-container selectize-control single" ng-class="{\'open\': $select.open}"><div class="selectize-input" ng-class="{\'focus\': $select.open, \'disabled\': $select.disabled, \'selectize-focus\' : $select.focus}" ng-click="$select.open && !$select.searchEnabled ? $select.toggle($event) : $select.activate()"><div class="ui-select-match"></div><input type="search" autocomplete="off" tabindex="-1" class="ui-select-search ui-select-toggle" ng-click="$select.toggle($event)" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-hide="!$select.searchEnabled || ($select.selected && !$select.open)" ng-disabled="$select.disabled" aria-label="{{ $select.baseTitle }}"></div><div class="ui-select-choices"></div></div>');
	}]);
	//# sourceMappingURL=select.min.js.map

/***/ },

/***/ 75:
/***/ function(module, exports) {

	"use strict";
	
	/*! 12.2.12 */
	!window.XMLHttpRequest || window.FileAPI && FileAPI.shouldLoad || (window.XMLHttpRequest.prototype.setRequestHeader = function (a) {
	  return function (b, c) {
	    if ("__setXHR_" === b) {
	      var d = c(this);d instanceof Function && d(this);
	    } else a.apply(this, arguments);
	  };
	}(window.XMLHttpRequest.prototype.setRequestHeader));var ngFileUpload = angular.module("ngFileUpload", []);ngFileUpload.version = "12.2.12", ngFileUpload.service("UploadBase", ["$http", "$q", "$timeout", function (a, b, c) {
	  function d(d) {
	    function e(a) {
	      j.notify && j.notify(a), k.progressFunc && c(function () {
	        k.progressFunc(a);
	      });
	    }function h(a) {
	      return null != d._start && g ? { loaded: a.loaded + d._start, total: d._file && d._file.size || a.total, type: a.type, config: d, lengthComputable: !0, target: a.target } : a;
	    }function i() {
	      a(d).then(function (a) {
	        if (g && d._chunkSize && !d._finished && d._file) {
	          var b = d._file && d._file.size || 0;e({ loaded: Math.min(d._end, b), total: b, config: d, type: "progress" }), f.upload(d, !0);
	        } else d._finished && delete d._finished, j.resolve(a);
	      }, function (a) {
	        j.reject(a);
	      }, function (a) {
	        j.notify(a);
	      });
	    }d.method = d.method || "POST", d.headers = d.headers || {};var j = d._deferred = d._deferred || b.defer(),
	        k = j.promise;return d.disableProgress || (d.headers.__setXHR_ = function () {
	      return function (a) {
	        a && a.upload && a.upload.addEventListener && (d.__XHR = a, d.xhrFn && d.xhrFn(a), a.upload.addEventListener("progress", function (a) {
	          a.config = d, e(h(a));
	        }, !1), a.upload.addEventListener("load", function (a) {
	          a.lengthComputable && (a.config = d, e(h(a)));
	        }, !1));
	      };
	    }), g ? d._chunkSize && d._end && !d._finished ? (d._start = d._end, d._end += d._chunkSize, i()) : d.resumeSizeUrl ? a.get(d.resumeSizeUrl).then(function (a) {
	      d._start = d.resumeSizeResponseReader ? d.resumeSizeResponseReader(a.data) : parseInt((null == a.data.size ? a.data : a.data.size).toString()), d._chunkSize && (d._end = d._start + d._chunkSize), i();
	    }, function (a) {
	      throw a;
	    }) : d.resumeSize ? d.resumeSize().then(function (a) {
	      d._start = a, d._chunkSize && (d._end = d._start + d._chunkSize), i();
	    }, function (a) {
	      throw a;
	    }) : (d._chunkSize && (d._start = 0, d._end = d._start + d._chunkSize), i()) : i(), k.success = function (a) {
	      return k.then(function (b) {
	        a(b.data, b.status, b.headers, d);
	      }), k;
	    }, k.error = function (a) {
	      return k.then(null, function (b) {
	        a(b.data, b.status, b.headers, d);
	      }), k;
	    }, k.progress = function (a) {
	      return k.progressFunc = a, k.then(null, null, function (b) {
	        a(b);
	      }), k;
	    }, k.abort = k.pause = function () {
	      return d.__XHR && c(function () {
	        d.__XHR.abort();
	      }), k;
	    }, k.xhr = function (a) {
	      return d.xhrFn = function (b) {
	        return function () {
	          b && b.apply(k, arguments), a.apply(k, arguments);
	        };
	      }(d.xhrFn), k;
	    }, f.promisesCount++, k["finally"] && k["finally"] instanceof Function && k["finally"](function () {
	      f.promisesCount--;
	    }), k;
	  }function e(a) {
	    var b = {};for (var c in a) {
	      a.hasOwnProperty(c) && (b[c] = a[c]);
	    }return b;
	  }var f = this;f.promisesCount = 0, this.isResumeSupported = function () {
	    return window.Blob && window.Blob.prototype.slice;
	  };var g = this.isResumeSupported();this.isUploadInProgress = function () {
	    return f.promisesCount > 0;
	  }, this.rename = function (a, b) {
	    return a.ngfName = b, a;
	  }, this.jsonBlob = function (a) {
	    null == a || angular.isString(a) || (a = JSON.stringify(a));var b = new window.Blob([a], { type: "application/json" });return b._ngfBlob = !0, b;
	  }, this.json = function (a) {
	    return angular.toJson(a);
	  }, this.isFile = function (a) {
	    return null != a && (a instanceof window.Blob || a.flashId && a.name && a.size);
	  }, this.upload = function (a, b) {
	    function c(b, c) {
	      if (b._ngfBlob) return b;if (a._file = a._file || b, null != a._start && g) {
	        a._end && a._end >= b.size && (a._finished = !0, a._end = b.size);var d = b.slice(a._start, a._end || b.size);return d.name = b.name, d.ngfName = b.ngfName, a._chunkSize && (c.append("_chunkSize", a._chunkSize), c.append("_currentChunkSize", a._end - a._start), c.append("_chunkNumber", Math.floor(a._start / a._chunkSize)), c.append("_totalSize", a._file.size)), d;
	      }return b;
	    }function h(b, d, e) {
	      if (void 0 !== d) if (angular.isDate(d) && (d = d.toISOString()), angular.isString(d)) b.append(e, d);else if (f.isFile(d)) {
	        var g = c(d, b),
	            i = e.split(",");i[1] && (g.ngfName = i[1].replace(/^\s+|\s+$/g, ""), e = i[0]), a._fileKey = a._fileKey || e, b.append(e, g, g.ngfName || g.name);
	      } else if (angular.isObject(d)) {
	        if (d.$$ngfCircularDetection) throw "ngFileUpload: Circular reference in config.data. Make sure specified data for Upload.upload() has no circular reference: " + e;d.$$ngfCircularDetection = !0;try {
	          for (var j in d) {
	            if (d.hasOwnProperty(j) && "$$ngfCircularDetection" !== j) {
	              var k = null == a.objectKey ? "[i]" : a.objectKey;d.length && parseInt(j) > -1 && (k = null == a.arrayKey ? k : a.arrayKey), h(b, d[j], e + k.replace(/[ik]/g, j));
	            }
	          }
	        } finally {
	          delete d.$$ngfCircularDetection;
	        }
	      } else b.append(e, d);
	    }function i() {
	      a._chunkSize = f.translateScalars(a.resumeChunkSize), a._chunkSize = a._chunkSize ? parseInt(a._chunkSize.toString()) : null, a.headers = a.headers || {}, a.headers["Content-Type"] = void 0, a.transformRequest = a.transformRequest ? angular.isArray(a.transformRequest) ? a.transformRequest : [a.transformRequest] : [], a.transformRequest.push(function (b) {
	        var c,
	            d = new window.FormData();b = b || a.fields || {}, a.file && (b.file = a.file);for (c in b) {
	          if (b.hasOwnProperty(c)) {
	            var e = b[c];a.formDataAppender ? a.formDataAppender(d, c, e) : h(d, e, c);
	          }
	        }return d;
	      });
	    }return b || (a = e(a)), a._isDigested || (a._isDigested = !0, i()), d(a);
	  }, this.http = function (b) {
	    return b = e(b), b.transformRequest = b.transformRequest || function (b) {
	      return window.ArrayBuffer && b instanceof window.ArrayBuffer || b instanceof window.Blob ? b : a.defaults.transformRequest[0].apply(this, arguments);
	    }, b._chunkSize = f.translateScalars(b.resumeChunkSize), b._chunkSize = b._chunkSize ? parseInt(b._chunkSize.toString()) : null, d(b);
	  }, this.translateScalars = function (a) {
	    if (angular.isString(a)) {
	      if (a.search(/kb/i) === a.length - 2) return parseFloat(1024 * a.substring(0, a.length - 2));if (a.search(/mb/i) === a.length - 2) return parseFloat(1048576 * a.substring(0, a.length - 2));if (a.search(/gb/i) === a.length - 2) return parseFloat(1073741824 * a.substring(0, a.length - 2));if (a.search(/b/i) === a.length - 1) return parseFloat(a.substring(0, a.length - 1));if (a.search(/s/i) === a.length - 1) return parseFloat(a.substring(0, a.length - 1));if (a.search(/m/i) === a.length - 1) return parseFloat(60 * a.substring(0, a.length - 1));if (a.search(/h/i) === a.length - 1) return parseFloat(3600 * a.substring(0, a.length - 1));
	    }return a;
	  }, this.urlToBlob = function (c) {
	    var d = b.defer();return a({ url: c, method: "get", responseType: "arraybuffer" }).then(function (a) {
	      var b = new Uint8Array(a.data),
	          e = a.headers("content-type") || "image/WebP",
	          f = new window.Blob([b], { type: e }),
	          g = c.match(/.*\/(.+?)(\?.*)?$/);g.length > 1 && (f.name = g[1]), d.resolve(f);
	    }, function (a) {
	      d.reject(a);
	    }), d.promise;
	  }, this.setDefaults = function (a) {
	    this.defaults = a || {};
	  }, this.defaults = {}, this.version = ngFileUpload.version;
	}]), ngFileUpload.service("Upload", ["$parse", "$timeout", "$compile", "$q", "UploadExif", function (a, b, c, d, e) {
	  function f(a, b, c) {
	    var e = [i.emptyPromise()];return angular.forEach(a, function (d, f) {
	      0 === d.type.indexOf("image/jpeg") && i.attrGetter("ngfFixOrientation", b, c, { $file: d }) && e.push(i.happyPromise(i.applyExifRotation(d), d).then(function (b) {
	        a.splice(f, 1, b);
	      }));
	    }), d.all(e);
	  }function g(a, b, c, e) {
	    var f = i.attrGetter("ngfResize", b, c);if (!f || !i.isResizeSupported() || !a.length) return i.emptyPromise();if (f instanceof Function) {
	      var g = d.defer();return f(a).then(function (d) {
	        h(d, a, b, c, e).then(function (a) {
	          g.resolve(a);
	        }, function (a) {
	          g.reject(a);
	        });
	      }, function (a) {
	        g.reject(a);
	      });
	    }return h(f, a, b, c, e);
	  }function h(a, b, c, e, f) {
	    function g(d, g) {
	      if (0 === d.type.indexOf("image")) {
	        if (a.pattern && !i.validatePattern(d, a.pattern)) return;a.resizeIf = function (a, b) {
	          return i.attrGetter("ngfResizeIf", c, e, { $width: a, $height: b, $file: d });
	        };var j = i.resize(d, a);h.push(j), j.then(function (a) {
	          b.splice(g, 1, a);
	        }, function (a) {
	          d.$error = "resize", (d.$errorMessages = d.$errorMessages || {}).resize = !0, d.$errorParam = (a ? (a.message ? a.message : a) + ": " : "") + (d && d.name), f.$ngfValidations.push({ name: "resize", valid: !1 }), i.applyModelValidation(f, b);
	        });
	      }
	    }for (var h = [i.emptyPromise()], j = 0; j < b.length; j++) {
	      g(b[j], j);
	    }return d.all(h);
	  }var i = e;return i.getAttrWithDefaults = function (a, b) {
	    if (null != a[b]) return a[b];var c = i.defaults[b];return null == c ? c : angular.isString(c) ? c : JSON.stringify(c);
	  }, i.attrGetter = function (b, c, d, e) {
	    var f = this.getAttrWithDefaults(c, b);if (!d) return f;try {
	      return e ? a(f)(d, e) : a(f)(d);
	    } catch (g) {
	      if (b.search(/min|max|pattern/i)) return f;throw g;
	    }
	  }, i.shouldUpdateOn = function (a, b, c) {
	    var d = i.attrGetter("ngfModelOptions", b, c);return d && d.updateOn ? d.updateOn.split(" ").indexOf(a) > -1 : !0;
	  }, i.emptyPromise = function () {
	    var a = d.defer(),
	        c = arguments;return b(function () {
	      a.resolve.apply(a, c);
	    }), a.promise;
	  }, i.rejectPromise = function () {
	    var a = d.defer(),
	        c = arguments;return b(function () {
	      a.reject.apply(a, c);
	    }), a.promise;
	  }, i.happyPromise = function (a, c) {
	    var e = d.defer();return a.then(function (a) {
	      e.resolve(a);
	    }, function (a) {
	      b(function () {
	        throw a;
	      }), e.resolve(c);
	    }), e.promise;
	  }, i.updateModel = function (c, d, e, h, j, k, l) {
	    function m(f, g, j, l, m) {
	      d.$$ngfPrevValidFiles = f, d.$$ngfPrevInvalidFiles = g;var n = f && f.length ? f[0] : null,
	          o = g && g.length ? g[0] : null;c && (i.applyModelValidation(c, f), c.$setViewValue(m ? n : f)), h && a(h)(e, { $files: f, $file: n, $newFiles: j, $duplicateFiles: l, $invalidFiles: g, $invalidFile: o, $event: k });var p = i.attrGetter("ngfModelInvalid", d);p && b(function () {
	        a(p).assign(e, m ? o : g);
	      }), b(function () {});
	    }function n() {
	      function a(a, b) {
	        return a.name === b.name && (a.$ngfOrigSize || a.size) === (b.$ngfOrigSize || b.size) && a.type === b.type;
	      }function b(b) {
	        var c;for (c = 0; c < r.length; c++) {
	          if (a(b, r[c])) return !0;
	        }for (c = 0; c < s.length; c++) {
	          if (a(b, s[c])) return !0;
	        }return !1;
	      }if (j) {
	        q = [], t = [];for (var c = 0; c < j.length; c++) {
	          b(j[c]) ? t.push(j[c]) : q.push(j[c]);
	        }
	      }
	    }function o(a) {
	      return angular.isArray(a) ? a : [a];
	    }function p() {
	      function a() {
	        b(function () {
	          m(w ? r.concat(v) : v, w ? s.concat(u) : u, j, t, x);
	        }, z && z.debounce ? z.debounce.change || z.debounce : 0);
	      }var f = y ? q : v;g(f, d, e, c).then(function () {
	        y ? i.validate(q, w ? r.length : 0, c, d, e).then(function (b) {
	          v = b.validsFiles, u = b.invalidsFiles, a();
	        }) : a();
	      }, function () {
	        for (var b = 0; b < f.length; b++) {
	          var c = f[b];if ("resize" === c.$error) {
	            var d = v.indexOf(c);d > -1 && (v.splice(d, 1), u.push(c)), a();
	          }
	        }
	      });
	    }var q,
	        r,
	        s,
	        t = [],
	        u = [],
	        v = [];r = d.$$ngfPrevValidFiles || [], s = d.$$ngfPrevInvalidFiles || [], c && c.$modelValue && (r = o(c.$modelValue));var w = i.attrGetter("ngfKeep", d, e);q = (j || []).slice(0), ("distinct" === w || i.attrGetter("ngfKeepDistinct", d, e) === !0) && n(d, e);var x = !w && !i.attrGetter("ngfMultiple", d, e) && !i.attrGetter("multiple", d);if (!w || q.length) {
	      i.attrGetter("ngfBeforeModelChange", d, e, { $files: j, $file: j && j.length ? j[0] : null, $newFiles: q, $duplicateFiles: t, $event: k });var y = i.attrGetter("ngfValidateAfterResize", d, e),
	          z = i.attrGetter("ngfModelOptions", d, e);i.validate(q, w ? r.length : 0, c, d, e).then(function (a) {
	        l ? m(q, [], j, t, x) : (z && z.allowInvalid || y ? v = q : (v = a.validFiles, u = a.invalidFiles), i.attrGetter("ngfFixOrientation", d, e) && i.isExifSupported() ? f(v, d, e).then(function () {
	          p();
	        }) : p());
	      });
	    }
	  }, i;
	}]), ngFileUpload.directive("ngfSelect", ["$parse", "$timeout", "$compile", "Upload", function (a, b, c, d) {
	  function e(a) {
	    var b = a.match(/Android[^\d]*(\d+)\.(\d+)/);if (b && b.length > 2) {
	      var c = d.defaults.androidFixMinorVersion || 4;return parseInt(b[1]) < 4 || parseInt(b[1]) === c && parseInt(b[2]) < c;
	    }return -1 === a.indexOf("Chrome") && /.*Windows.*Safari.*/.test(a);
	  }function f(a, b, c, d, f, h, i, j) {
	    function k() {
	      return "input" === b[0].tagName.toLowerCase() && c.type && "file" === c.type.toLowerCase();
	    }function l() {
	      return t("ngfChange") || t("ngfSelect");
	    }function m(b) {
	      if (j.shouldUpdateOn("change", c, a)) {
	        var e = b.__files_ || b.target && b.target.files,
	            f = [];if (!e) return;for (var g = 0; g < e.length; g++) {
	          f.push(e[g]);
	        }j.updateModel(d, c, a, l(), f.length ? f : null, b);
	      }
	    }function n(a, d) {
	      function e(b) {
	        a.attr("id", "ngf-" + b), d.attr("id", "ngf-label-" + b);
	      }for (var f = 0; f < b[0].attributes.length; f++) {
	        var g = b[0].attributes[f];"type" !== g.name && "class" !== g.name && "style" !== g.name && ("id" === g.name ? (e(g.value), u.push(c.$observe("id", e))) : a.attr(g.name, g.value || "required" !== g.name && "multiple" !== g.name ? g.value : g.name));
	      }
	    }function o() {
	      if (k()) return b;var a = angular.element('<input type="file">'),
	          c = angular.element("<label>upload</label>");return c.css("visibility", "hidden").css("position", "absolute").css("overflow", "hidden").css("width", "0px").css("height", "0px").css("border", "none").css("margin", "0px").css("padding", "0px").attr("tabindex", "-1"), n(a, c), g.push({ el: b, ref: c }), document.body.appendChild(c.append(a)[0]), a;
	    }function p(c) {
	      if (b.attr("disabled")) return !1;if (!t("ngfSelectDisabled", a)) {
	        var d = q(c);if (null != d) return d;r(c);try {
	          k() || document.body.contains(x[0]) || (g.push({ el: b, ref: x.parent() }), document.body.appendChild(x.parent()[0]), x.bind("change", m));
	        } catch (f) {}return e(navigator.userAgent) ? setTimeout(function () {
	          x[0].click();
	        }, 0) : x[0].click(), !1;
	      }
	    }function q(a) {
	      var b = a.changedTouches || a.originalEvent && a.originalEvent.changedTouches;if (b) {
	        if ("touchstart" === a.type) return w = b[0].clientX, v = b[0].clientY, !0;if ("touchend" === a.type) {
	          var c = b[0].clientX,
	              d = b[0].clientY;if (Math.abs(c - w) > 20 || Math.abs(d - v) > 20) return a.stopPropagation(), a.preventDefault(), !1;
	        }return !0;
	      }
	    }function r(b) {
	      j.shouldUpdateOn("click", c, a) && x.val() && (x.val(null), j.updateModel(d, c, a, l(), null, b, !0));
	    }function s(a) {
	      if (x && !x.attr("__ngf_ie10_Fix_")) {
	        if (!x[0].parentNode) return void (x = null);a.preventDefault(), a.stopPropagation(), x.unbind("click");var b = x.clone();return x.replaceWith(b), x = b, x.attr("__ngf_ie10_Fix_", "true"), x.bind("change", m), x.bind("click", s), x[0].click(), !1;
	      }x.removeAttr("__ngf_ie10_Fix_");
	    }var t = function t(a, b) {
	      return j.attrGetter(a, c, b);
	    };j.registerModelChangeValidator(d, c, a);var u = [];t("ngfMultiple") && u.push(a.$watch(t("ngfMultiple"), function () {
	      x.attr("multiple", t("ngfMultiple", a));
	    })), t("ngfCapture") && u.push(a.$watch(t("ngfCapture"), function () {
	      x.attr("capture", t("ngfCapture", a));
	    })), t("ngfAccept") && u.push(a.$watch(t("ngfAccept"), function () {
	      x.attr("accept", t("ngfAccept", a));
	    })), u.push(c.$observe("accept", function () {
	      x.attr("accept", t("accept"));
	    }));var v = 0,
	        w = 0,
	        x = b;k() || (x = o()), x.bind("change", m), k() ? b.bind("click", r) : b.bind("click touchstart touchend", p), -1 !== navigator.appVersion.indexOf("MSIE 10") && x.bind("click", s), d && d.$formatters.push(function (a) {
	      return (null == a || 0 === a.length) && x.val() && x.val(null), a;
	    }), a.$on("$destroy", function () {
	      k() || x.parent().remove(), angular.forEach(u, function (a) {
	        a();
	      });
	    }), h(function () {
	      for (var a = 0; a < g.length; a++) {
	        var b = g[a];document.body.contains(b.el[0]) || (g.splice(a, 1), b.ref.remove());
	      }
	    }), window.FileAPI && window.FileAPI.ngfFixIE && window.FileAPI.ngfFixIE(b, x, m);
	  }var g = [];return { restrict: "AEC", require: "?ngModel", link: function link(e, g, h, i) {
	      f(e, g, h, i, a, b, c, d);
	    } };
	}]), function () {
	  function a(a) {
	    return "img" === a.tagName.toLowerCase() ? "image" : "audio" === a.tagName.toLowerCase() ? "audio" : "video" === a.tagName.toLowerCase() ? "video" : /./;
	  }function b(b, c, d, e, f, g, h, i) {
	    function j(a) {
	      var g = b.attrGetter("ngfNoObjectUrl", f, d);b.dataUrl(a, g)["finally"](function () {
	        c(function () {
	          var b = (g ? a.$ngfDataUrl : a.$ngfBlobUrl) || a.$ngfDataUrl;i ? e.css("background-image", "url('" + (b || "") + "')") : e.attr("src", b), b ? e.removeClass("ng-hide") : e.addClass("ng-hide");
	        });
	      });
	    }c(function () {
	      var c = d.$watch(f[g], function (c) {
	        var k = h;if ("ngfThumbnail" === g && (k || (k = { width: e[0].naturalWidth || e[0].clientWidth, height: e[0].naturalHeight || e[0].clientHeight }), 0 === k.width && window.getComputedStyle)) {
	          var l = getComputedStyle(e[0]);k = { width: parseInt(l.width.slice(0, -2)), height: parseInt(l.height.slice(0, -2)) };
	        }return angular.isString(c) ? (e.removeClass("ng-hide"), i ? e.css("background-image", "url('" + c + "')") : e.attr("src", c)) : void (!c || !c.type || 0 !== c.type.search(a(e[0])) || i && 0 !== c.type.indexOf("image") ? e.addClass("ng-hide") : k && b.isResizeSupported() ? (k.resizeIf = function (a, e) {
	          return b.attrGetter("ngfResizeIf", f, d, { $width: a, $height: e, $file: c });
	        }, b.resize(c, k).then(function (a) {
	          j(a);
	        }, function (a) {
	          throw a;
	        })) : j(c));
	      });d.$on("$destroy", function () {
	        c();
	      });
	    });
	  }ngFileUpload.service("UploadDataUrl", ["UploadBase", "$timeout", "$q", function (a, b, c) {
	    var d = a;return d.base64DataUrl = function (a) {
	      if (angular.isArray(a)) {
	        var b = c.defer(),
	            e = 0;return angular.forEach(a, function (c) {
	          d.dataUrl(c, !0)["finally"](function () {
	            if (e++, e === a.length) {
	              var c = [];angular.forEach(a, function (a) {
	                c.push(a.$ngfDataUrl);
	              }), b.resolve(c, a);
	            }
	          });
	        }), b.promise;
	      }return d.dataUrl(a, !0);
	    }, d.dataUrl = function (a, e) {
	      if (!a) return d.emptyPromise(a, a);if (e && null != a.$ngfDataUrl || !e && null != a.$ngfBlobUrl) return d.emptyPromise(e ? a.$ngfDataUrl : a.$ngfBlobUrl, a);var f = e ? a.$$ngfDataUrlPromise : a.$$ngfBlobUrlPromise;if (f) return f;var g = c.defer();return b(function () {
	        if (window.FileReader && a && (!window.FileAPI || -1 === navigator.userAgent.indexOf("MSIE 8") || a.size < 2e4) && (!window.FileAPI || -1 === navigator.userAgent.indexOf("MSIE 9") || a.size < 4e6)) {
	          var c = window.URL || window.webkitURL;if (c && c.createObjectURL && !e) {
	            var f;try {
	              f = c.createObjectURL(a);
	            } catch (h) {
	              return void b(function () {
	                a.$ngfBlobUrl = "", g.reject();
	              });
	            }b(function () {
	              if (a.$ngfBlobUrl = f, f) {
	                g.resolve(f, a), d.blobUrls = d.blobUrls || [], d.blobUrlsTotalSize = d.blobUrlsTotalSize || 0, d.blobUrls.push({ url: f, size: a.size }), d.blobUrlsTotalSize += a.size || 0;for (var b = d.defaults.blobUrlsMaxMemory || 268435456, e = d.defaults.blobUrlsMaxQueueSize || 200; (d.blobUrlsTotalSize > b || d.blobUrls.length > e) && d.blobUrls.length > 1;) {
	                  var h = d.blobUrls.splice(0, 1)[0];c.revokeObjectURL(h.url), d.blobUrlsTotalSize -= h.size;
	                }
	              }
	            });
	          } else {
	            var i = new FileReader();i.onload = function (c) {
	              b(function () {
	                a.$ngfDataUrl = c.target.result, g.resolve(c.target.result, a), b(function () {
	                  delete a.$ngfDataUrl;
	                }, 1e3);
	              });
	            }, i.onerror = function () {
	              b(function () {
	                a.$ngfDataUrl = "", g.reject();
	              });
	            }, i.readAsDataURL(a);
	          }
	        } else b(function () {
	          a[e ? "$ngfDataUrl" : "$ngfBlobUrl"] = "", g.reject();
	        });
	      }), f = e ? a.$$ngfDataUrlPromise = g.promise : a.$$ngfBlobUrlPromise = g.promise, f["finally"](function () {
	        delete a[e ? "$$ngfDataUrlPromise" : "$$ngfBlobUrlPromise"];
	      }), f;
	    }, d;
	  }]), ngFileUpload.directive("ngfSrc", ["Upload", "$timeout", function (a, c) {
	    return { restrict: "AE", link: function link(d, e, f) {
	        b(a, c, d, e, f, "ngfSrc", a.attrGetter("ngfResize", f, d), !1);
	      } };
	  }]), ngFileUpload.directive("ngfBackground", ["Upload", "$timeout", function (a, c) {
	    return { restrict: "AE", link: function link(d, e, f) {
	        b(a, c, d, e, f, "ngfBackground", a.attrGetter("ngfResize", f, d), !0);
	      } };
	  }]), ngFileUpload.directive("ngfThumbnail", ["Upload", "$timeout", function (a, c) {
	    return { restrict: "AE", link: function link(d, e, f) {
	        var g = a.attrGetter("ngfSize", f, d);b(a, c, d, e, f, "ngfThumbnail", g, a.attrGetter("ngfAsBackground", f, d));
	      } };
	  }]), ngFileUpload.config(["$compileProvider", function (a) {
	    a.imgSrcSanitizationWhitelist && a.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|webcal|local|file|data|blob):/), a.aHrefSanitizationWhitelist && a.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|webcal|local|file|data|blob):/);
	  }]), ngFileUpload.filter("ngfDataUrl", ["UploadDataUrl", "$sce", function (a, b) {
	    return function (c, d, e) {
	      if (angular.isString(c)) return b.trustAsResourceUrl(c);var f = c && ((d ? c.$ngfDataUrl : c.$ngfBlobUrl) || c.$ngfDataUrl);return c && !f ? (!c.$ngfDataUrlFilterInProgress && angular.isObject(c) && (c.$ngfDataUrlFilterInProgress = !0, a.dataUrl(c, d)), "") : (c && delete c.$ngfDataUrlFilterInProgress, (c && f ? e ? b.trustAsResourceUrl(f) : f : c) || "");
	    };
	  }]);
	}(), ngFileUpload.service("UploadValidate", ["UploadDataUrl", "$q", "$timeout", function (a, b, c) {
	  function d(a) {
	    var b = "",
	        c = [];if (a.length > 2 && "/" === a[0] && "/" === a[a.length - 1]) b = a.substring(1, a.length - 1);else {
	      var e = a.split(",");if (e.length > 1) for (var f = 0; f < e.length; f++) {
	        var g = d(e[f]);g.regexp ? (b += "(" + g.regexp + ")", f < e.length - 1 && (b += "|")) : c = c.concat(g.excludes);
	      } else 0 === a.indexOf("!") ? c.push("^((?!" + d(a.substring(1)).regexp + ").)*$") : (0 === a.indexOf(".") && (a = "*" + a), b = "^" + a.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]", "g"), "\\$&") + "$", b = b.replace(/\\\*/g, ".*").replace(/\\\?/g, "."));
	    }return { regexp: b, excludes: c };
	  }function e(a, b) {
	    null == b || a.$dirty || (a.$setDirty ? a.$setDirty() : a.$dirty = !0);
	  }var f = a;return f.validatePattern = function (a, b) {
	    if (!b) return !0;var c = d(b),
	        e = !0;if (c.regexp && c.regexp.length) {
	      var f = new RegExp(c.regexp, "i");e = null != a.type && f.test(a.type) || null != a.name && f.test(a.name);
	    }for (var g = c.excludes.length; g--;) {
	      var h = new RegExp(c.excludes[g], "i");e = e && (null == a.type || h.test(a.type)) && (null == a.name || h.test(a.name));
	    }return e;
	  }, f.ratioToFloat = function (a) {
	    var b = a.toString(),
	        c = b.search(/[x:]/i);return b = c > -1 ? parseFloat(b.substring(0, c)) / parseFloat(b.substring(c + 1)) : parseFloat(b);
	  }, f.registerModelChangeValidator = function (a, b, c) {
	    a && a.$formatters.push(function (d) {
	      if (a.$dirty) {
	        var e = d;d && !angular.isArray(d) && (e = [d]), f.validate(e, 0, a, b, c).then(function () {
	          f.applyModelValidation(a, e);
	        });
	      }return d;
	    });
	  }, f.applyModelValidation = function (a, b) {
	    e(a, b), angular.forEach(a.$ngfValidations, function (b) {
	      a.$setValidity(b.name, b.valid);
	    });
	  }, f.getValidationAttr = function (a, b, c, d, e) {
	    var g = "ngf" + c[0].toUpperCase() + c.substr(1),
	        h = f.attrGetter(g, a, b, { $file: e });if (null == h && (h = f.attrGetter("ngfValidate", a, b, { $file: e }))) {
	      var i = (d || c).split(".");h = h[i[0]], i.length > 1 && (h = h && h[i[1]]);
	    }return h;
	  }, f.validate = function (a, c, d, e, g) {
	    function h(b, c, h) {
	      if (a) {
	        for (var i = a.length, j = null; i--;) {
	          var n = a[i];if (n) {
	            var o = f.getValidationAttr(e, g, b, c, n);null != o && (h(n, o, i) || (-1 === k.indexOf(b) ? (n.$error = b, (n.$errorMessages = n.$errorMessages || {})[b] = !0, n.$errorParam = o, -1 === m.indexOf(n) && m.push(n), l || a.splice(i, 1), j = !1) : a.splice(i, 1)));
	          }
	        }null !== j && d.$ngfValidations.push({ name: b, valid: j });
	      }
	    }function i(c, h, i, n, o) {
	      function p(b, d, e) {
	        function f(f) {
	          if (f()) {
	            if (-1 === k.indexOf(c)) {
	              if (d.$error = c, (d.$errorMessages = d.$errorMessages || {})[c] = !0, d.$errorParam = e, -1 === m.indexOf(d) && m.push(d), !l) {
	                var g = a.indexOf(d);g > -1 && a.splice(g, 1);
	              }b.resolve(!1);
	            } else {
	              var h = a.indexOf(d);h > -1 && a.splice(h, 1), b.resolve(!0);
	            }
	          } else b.resolve(!0);
	        }null != e ? n(d, e).then(function (a) {
	          f(function () {
	            return !o(a, e);
	          });
	        }, function () {
	          f(function () {
	            return j("ngfValidateForce", { $file: d });
	          });
	        }) : b.resolve(!0);
	      }var q = [f.emptyPromise(!0)];a && (a = void 0 === a.length ? [a] : a, angular.forEach(a, function (a) {
	        var d = b.defer();return q.push(d.promise), !i || null != a.type && 0 === a.type.search(i) ? void ("dimensions" === c && null != f.attrGetter("ngfDimensions", e) ? f.imageDimensions(a).then(function (b) {
	          p(d, a, j("ngfDimensions", { $file: a, $width: b.width, $height: b.height }));
	        }, function () {
	          d.resolve(!1);
	        }) : "duration" === c && null != f.attrGetter("ngfDuration", e) ? f.mediaDuration(a).then(function (b) {
	          p(d, a, j("ngfDuration", { $file: a, $duration: b }));
	        }, function () {
	          d.resolve(!1);
	        }) : p(d, a, f.getValidationAttr(e, g, c, h, a))) : void d.resolve(!0);
	      }));var r = b.defer();return b.all(q).then(function (a) {
	        for (var b = !0, e = 0; e < a.length; e++) {
	          if (!a[e]) {
	            b = !1;break;
	          }
	        }d.$ngfValidations.push({ name: c, valid: b }), r.resolve(b);
	      }), r.promise;
	    }d = d || {}, d.$ngfValidations = d.$ngfValidations || [], angular.forEach(d.$ngfValidations, function (a) {
	      a.valid = !0;
	    });var j = function j(a, b) {
	      return f.attrGetter(a, e, g, b);
	    },
	        k = (f.attrGetter("ngfIgnoreInvalid", e, g) || "").split(" "),
	        l = f.attrGetter("ngfRunAllValidations", e, g);if (null == a || 0 === a.length) return f.emptyPromise({ validFiles: a, invalidFiles: [] });a = void 0 === a.length ? [a] : a.slice(0);var m = [];h("pattern", null, f.validatePattern), h("minSize", "size.min", function (a, b) {
	      return a.size + .1 >= f.translateScalars(b);
	    }), h("maxSize", "size.max", function (a, b) {
	      return a.size - .1 <= f.translateScalars(b);
	    });var n = 0;if (h("maxTotalSize", null, function (b, c) {
	      return n += b.size, n > f.translateScalars(c) ? (a.splice(0, a.length), !1) : !0;
	    }), h("validateFn", null, function (a, b) {
	      return b === !0 || null === b || "" === b;
	    }), !a.length) return f.emptyPromise({ validFiles: [], invalidFiles: m });var o = b.defer(),
	        p = [];return p.push(i("maxHeight", "height.max", /image/, this.imageDimensions, function (a, b) {
	      return a.height <= b;
	    })), p.push(i("minHeight", "height.min", /image/, this.imageDimensions, function (a, b) {
	      return a.height >= b;
	    })), p.push(i("maxWidth", "width.max", /image/, this.imageDimensions, function (a, b) {
	      return a.width <= b;
	    })), p.push(i("minWidth", "width.min", /image/, this.imageDimensions, function (a, b) {
	      return a.width >= b;
	    })), p.push(i("dimensions", null, /image/, function (a, b) {
	      return f.emptyPromise(b);
	    }, function (a) {
	      return a;
	    })), p.push(i("ratio", null, /image/, this.imageDimensions, function (a, b) {
	      for (var c = b.toString().split(","), d = !1, e = 0; e < c.length; e++) {
	        Math.abs(a.width / a.height - f.ratioToFloat(c[e])) < .01 && (d = !0);
	      }return d;
	    })), p.push(i("maxRatio", "ratio.max", /image/, this.imageDimensions, function (a, b) {
	      return a.width / a.height - f.ratioToFloat(b) < 1e-4;
	    })), p.push(i("minRatio", "ratio.min", /image/, this.imageDimensions, function (a, b) {
	      return a.width / a.height - f.ratioToFloat(b) > -1e-4;
	    })), p.push(i("maxDuration", "duration.max", /audio|video/, this.mediaDuration, function (a, b) {
	      return a <= f.translateScalars(b);
	    })), p.push(i("minDuration", "duration.min", /audio|video/, this.mediaDuration, function (a, b) {
	      return a >= f.translateScalars(b);
	    })), p.push(i("duration", null, /audio|video/, function (a, b) {
	      return f.emptyPromise(b);
	    }, function (a) {
	      return a;
	    })), p.push(i("validateAsyncFn", null, null, function (a, b) {
	      return b;
	    }, function (a) {
	      return a === !0 || null === a || "" === a;
	    })), b.all(p).then(function () {
	      if (l) for (var b = 0; b < a.length; b++) {
	        var d = a[b];d.$error && a.splice(b--, 1);
	      }l = !1, h("maxFiles", null, function (a, b, d) {
	        return b > c + d;
	      }), o.resolve({ validFiles: a, invalidFiles: m });
	    }), o.promise;
	  }, f.imageDimensions = function (a) {
	    if (a.$ngfWidth && a.$ngfHeight) {
	      var d = b.defer();return c(function () {
	        d.resolve({ width: a.$ngfWidth, height: a.$ngfHeight });
	      }), d.promise;
	    }if (a.$ngfDimensionPromise) return a.$ngfDimensionPromise;var e = b.defer();return c(function () {
	      return 0 !== a.type.indexOf("image") ? void e.reject("not image") : void f.dataUrl(a).then(function (b) {
	        function d() {
	          var b = h[0].naturalWidth || h[0].clientWidth,
	              c = h[0].naturalHeight || h[0].clientHeight;h.remove(), a.$ngfWidth = b, a.$ngfHeight = c, e.resolve({ width: b, height: c });
	        }function f() {
	          h.remove(), e.reject("load error");
	        }function g() {
	          c(function () {
	            h[0].parentNode && (h[0].clientWidth ? d() : i++ > 10 ? f() : g());
	          }, 1e3);
	        }var h = angular.element("<img>").attr("src", b).css("visibility", "hidden").css("position", "fixed").css("max-width", "none !important").css("max-height", "none !important");h.on("load", d), h.on("error", f);var i = 0;g(), angular.element(document.getElementsByTagName("body")[0]).append(h);
	      }, function () {
	        e.reject("load error");
	      });
	    }), a.$ngfDimensionPromise = e.promise, a.$ngfDimensionPromise["finally"](function () {
	      delete a.$ngfDimensionPromise;
	    }), a.$ngfDimensionPromise;
	  }, f.mediaDuration = function (a) {
	    if (a.$ngfDuration) {
	      var d = b.defer();return c(function () {
	        d.resolve(a.$ngfDuration);
	      }), d.promise;
	    }if (a.$ngfDurationPromise) return a.$ngfDurationPromise;var e = b.defer();return c(function () {
	      return 0 !== a.type.indexOf("audio") && 0 !== a.type.indexOf("video") ? void e.reject("not media") : void f.dataUrl(a).then(function (b) {
	        function d() {
	          var b = h[0].duration;a.$ngfDuration = b, h.remove(), e.resolve(b);
	        }function f() {
	          h.remove(), e.reject("load error");
	        }function g() {
	          c(function () {
	            h[0].parentNode && (h[0].duration ? d() : i > 10 ? f() : g());
	          }, 1e3);
	        }var h = angular.element(0 === a.type.indexOf("audio") ? "<audio>" : "<video>").attr("src", b).css("visibility", "none").css("position", "fixed");h.on("loadedmetadata", d), h.on("error", f);var i = 0;g(), angular.element(document.body).append(h);
	      }, function () {
	        e.reject("load error");
	      });
	    }), a.$ngfDurationPromise = e.promise, a.$ngfDurationPromise["finally"](function () {
	      delete a.$ngfDurationPromise;
	    }), a.$ngfDurationPromise;
	  }, f;
	}]), ngFileUpload.service("UploadResize", ["UploadValidate", "$q", function (a, b) {
	  var c = a,
	      d = function d(a, b, c, _d, e) {
	    var f = e ? Math.max(c / a, _d / b) : Math.min(c / a, _d / b);return { width: a * f, height: b * f, marginX: a * f - c, marginY: b * f - _d };
	  },
	      e = function e(a, _e, f, g, h, i, j, k) {
	    var l = b.defer(),
	        m = document.createElement("canvas"),
	        n = document.createElement("img");return n.setAttribute("style", "visibility:hidden;position:fixed;z-index:-100000"), document.body.appendChild(n), n.onload = function () {
	      var a = n.width,
	          b = n.height;if (n.parentNode.removeChild(n), null != k && k(a, b) === !1) return void l.reject("resizeIf");try {
	        if (i) {
	          var o = c.ratioToFloat(i),
	              p = a / b;o > p ? (_e = a, f = _e / o) : (f = b, _e = f * o);
	        }_e || (_e = a), f || (f = b);var q = d(a, b, _e, f, j);m.width = Math.min(q.width, _e), m.height = Math.min(q.height, f);var r = m.getContext("2d");r.drawImage(n, Math.min(0, -q.marginX / 2), Math.min(0, -q.marginY / 2), q.width, q.height), l.resolve(m.toDataURL(h || "image/WebP", g || .934));
	      } catch (s) {
	        l.reject(s);
	      }
	    }, n.onerror = function () {
	      n.parentNode.removeChild(n), l.reject();
	    }, n.src = a, l.promise;
	  };return c.dataUrltoBlob = function (a, b, c) {
	    for (var d = a.split(","), e = d[0].match(/:(.*?);/)[1], f = atob(d[1]), g = f.length, h = new Uint8Array(g); g--;) {
	      h[g] = f.charCodeAt(g);
	    }var i = new window.Blob([h], { type: e });return i.name = b, i.$ngfOrigSize = c, i;
	  }, c.isResizeSupported = function () {
	    var a = document.createElement("canvas");return window.atob && a.getContext && a.getContext("2d") && window.Blob;
	  }, c.isResizeSupported() && Object.defineProperty(window.Blob.prototype, "name", { get: function get() {
	      return this.$ngfName;
	    }, set: function set(a) {
	      this.$ngfName = a;
	    }, configurable: !0 }), c.resize = function (a, d) {
	    if (0 !== a.type.indexOf("image")) return c.emptyPromise(a);var f = b.defer();return c.dataUrl(a, !0).then(function (b) {
	      e(b, d.width, d.height, d.quality, d.type || a.type, d.ratio, d.centerCrop, d.resizeIf).then(function (e) {
	        if ("image/jpeg" === a.type && d.restoreExif !== !1) try {
	          e = c.restoreExif(b, e);
	        } catch (g) {
	          setTimeout(function () {
	            throw g;
	          }, 1);
	        }try {
	          var h = c.dataUrltoBlob(e, a.name, a.size);f.resolve(h);
	        } catch (g) {
	          f.reject(g);
	        }
	      }, function (b) {
	        "resizeIf" === b && f.resolve(a), f.reject(b);
	      });
	    }, function (a) {
	      f.reject(a);
	    }), f.promise;
	  }, c;
	}]), function () {
	  function a(a, c, d, e, f, g, h, i, j, k) {
	    function l() {
	      return c.attr("disabled") || r("ngfDropDisabled", a);
	    }function m(b, c) {
	      i.updateModel(e, d, a, r("ngfChange") || r("ngfDrop"), b, c);
	    }function n(b, c) {
	      if (!i.shouldUpdateOn(b, d, a) || "string" != typeof c) return i.rejectPromise([]);var e = [];c.replace(/<(img src|img [^>]* src) *=\"([^\"]*)\"/gi, function (a, b, c) {
	        e.push(c);
	      });var f = [],
	          g = [];if (e.length) {
	        angular.forEach(e, function (a) {
	          f.push(i.urlToBlob(a).then(function (a) {
	            g.push(a);
	          }));
	        });var h = k.defer();return k.all(f).then(function () {
	          h.resolve(g);
	        }, function (a) {
	          h.reject(a);
	        }), h.promise;
	      }return i.emptyPromise();
	    }function o(a, b, c, d) {
	      var e = r("ngfDragOverClass", a, { $event: c }),
	          f = "dragover";if (angular.isString(e)) f = e;else if (e && (e.delay && (v = e.delay), e.accept || e.reject)) {
	        var g = c.dataTransfer.items;if (null != g && g.length) for (var h = e.pattern || r("ngfPattern", a, { $event: c }), j = g.length; j--;) {
	          if (!i.validatePattern(g[j], h)) {
	            f = e.reject;break;
	          }f = e.accept;
	        } else f = e.accept;
	      }d(f);
	    }function p(b, c, e, f) {
	      function g(a, b) {
	        var c = k.defer();if (null != a) if (a.isDirectory) {
	          var d = [i.emptyPromise()];if (m) {
	            var e = { type: "directory" };e.name = e.path = (b || "") + a.name, n.push(e);
	          }var f = a.createReader(),
	              h = [],
	              p = function p() {
	            f.readEntries(function (e) {
	              try {
	                e.length ? (h = h.concat(Array.prototype.slice.call(e || [], 0)), p()) : (angular.forEach(h.slice(0), function (c) {
	                  n.length <= j && l >= o && d.push(g(c, (b ? b : "") + a.name + "/"));
	                }), k.all(d).then(function () {
	                  c.resolve();
	                }, function (a) {
	                  c.reject(a);
	                }));
	              } catch (f) {
	                c.reject(f);
	              }
	            }, function (a) {
	              c.reject(a);
	            });
	          };p();
	        } else a.file(function (a) {
	          try {
	            a.path = (b ? b : "") + a.name, m && (a = i.rename(a, a.path)), n.push(a), o += a.size, c.resolve();
	          } catch (d) {
	            c.reject(d);
	          }
	        }, function (a) {
	          c.reject(a);
	        });return c.promise;
	      }var j = i.getValidationAttr(d, a, "maxFiles");null == j && (j = Number.MAX_VALUE);var l = i.getValidationAttr(d, a, "maxTotalSize");null == l && (l = Number.MAX_VALUE);var m = r("ngfIncludeDir", a),
	          n = [],
	          o = 0,
	          p = [i.emptyPromise()];if (b && b.length > 0 && "file:" !== h.location.protocol) for (var q = 0; q < b.length; q++) {
	        if (b[q].webkitGetAsEntry && b[q].webkitGetAsEntry() && b[q].webkitGetAsEntry().isDirectory) {
	          var s = b[q].webkitGetAsEntry();if (s.isDirectory && !e) continue;null != s && p.push(g(s));
	        } else {
	          var t = b[q].getAsFile();null != t && (n.push(t), o += t.size);
	        }if (n.length > j || o > l || !f && n.length > 0) break;
	      } else if (null != c) for (var u = 0; u < c.length; u++) {
	        var v = c.item(u);if ((v.type || v.size > 0) && (n.push(v), o += v.size), n.length > j || o > l || !f && n.length > 0) break;
	      }var w = k.defer();return k.all(p).then(function () {
	        if (f || m || !n.length) w.resolve(n);else {
	          for (var a = 0; n[a] && "directory" === n[a].type;) {
	            a++;
	          }w.resolve([n[a]]);
	        }
	      }, function (a) {
	        w.reject(a);
	      }), w.promise;
	    }var q = b(),
	        r = function r(a, b, c) {
	      return i.attrGetter(a, d, b, c);
	    };if (r("dropAvailable") && g(function () {
	      a[r("dropAvailable")] ? a[r("dropAvailable")].value = q : a[r("dropAvailable")] = q;
	    }), !q) return void (r("ngfHideOnDropNotAvailable", a) === !0 && c.css("display", "none"));null == r("ngfSelect") && i.registerModelChangeValidator(e, d, a);var s,
	        t = null,
	        u = f(r("ngfStopPropagation")),
	        v = 1;c[0].addEventListener("dragover", function (b) {
	      if (!l() && i.shouldUpdateOn("drop", d, a)) {
	        if (b.preventDefault(), u(a) && b.stopPropagation(), navigator.userAgent.indexOf("Chrome") > -1) {
	          var e = b.dataTransfer.effectAllowed;b.dataTransfer.dropEffect = "move" === e || "linkMove" === e ? "move" : "copy";
	        }g.cancel(t), s || (s = "C", o(a, d, b, function (d) {
	          s = d, c.addClass(s), r("ngfDrag", a, { $isDragging: !0, $class: s, $event: b });
	        }));
	      }
	    }, !1), c[0].addEventListener("dragenter", function (b) {
	      !l() && i.shouldUpdateOn("drop", d, a) && (b.preventDefault(), u(a) && b.stopPropagation());
	    }, !1), c[0].addEventListener("dragleave", function (b) {
	      !l() && i.shouldUpdateOn("drop", d, a) && (b.preventDefault(), u(a) && b.stopPropagation(), t = g(function () {
	        s && c.removeClass(s), s = null, r("ngfDrag", a, { $isDragging: !1, $event: b });
	      }, v || 100));
	    }, !1), c[0].addEventListener("drop", function (b) {
	      if (!l() && i.shouldUpdateOn("drop", d, a)) {
	        b.preventDefault(), u(a) && b.stopPropagation(), s && c.removeClass(s), s = null;var e,
	            f = b.dataTransfer.items;try {
	          e = b.dataTransfer && b.dataTransfer.getData && b.dataTransfer.getData("text/html");
	        } catch (g) {}p(f, b.dataTransfer.files, r("ngfAllowDir", a) !== !1, r("multiple") || r("ngfMultiple", a)).then(function (a) {
	          a.length ? m(a, b) : n("dropUrl", e).then(function (a) {
	            m(a, b);
	          });
	        });
	      }
	    }, !1), c[0].addEventListener("paste", function (b) {
	      if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && r("ngfEnableFirefoxPaste", a) && b.preventDefault(), !l() && i.shouldUpdateOn("paste", d, a)) {
	        var c = [],
	            e = b.clipboardData || b.originalEvent.clipboardData;if (e && e.items) for (var f = 0; f < e.items.length; f++) {
	          -1 !== e.items[f].type.indexOf("image") && c.push(e.items[f].getAsFile());
	        }c.length ? m(c, b) : n("pasteUrl", e).then(function (a) {
	          m(a, b);
	        });
	      }
	    }, !1), navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && r("ngfEnableFirefoxPaste", a) && (c.attr("contenteditable", !0), c.on("keypress", function (a) {
	      a.metaKey || a.ctrlKey || a.preventDefault();
	    }));
	  }function b() {
	    var a = document.createElement("div");return "draggable" in a && "ondrop" in a && !/Edge\/12./i.test(navigator.userAgent);
	  }ngFileUpload.directive("ngfDrop", ["$parse", "$timeout", "$window", "Upload", "$http", "$q", function (b, c, d, e, f, g) {
	    return { restrict: "AEC", require: "?ngModel", link: function link(h, i, j, k) {
	        a(h, i, j, k, b, c, d, e, f, g);
	      } };
	  }]), ngFileUpload.directive("ngfNoFileDrop", function () {
	    return function (a, c) {
	      b() && c.css("display", "none");
	    };
	  }), ngFileUpload.directive("ngfDropAvailable", ["$parse", "$timeout", "Upload", function (a, c, d) {
	    return function (e, f, g) {
	      if (b()) {
	        var h = a(d.attrGetter("ngfDropAvailable", g));c(function () {
	          h(e), h.assign && h.assign(e, !0);
	        });
	      }
	    };
	  }]);
	}(), ngFileUpload.service("UploadExif", ["UploadResize", "$q", function (a, b) {
	  function c(a, b, c, d) {
	    switch (b) {case 2:
	        return a.transform(-1, 0, 0, 1, c, 0);case 3:
	        return a.transform(-1, 0, 0, -1, c, d);case 4:
	        return a.transform(1, 0, 0, -1, 0, d);case 5:
	        return a.transform(0, 1, 1, 0, 0, 0);case 6:
	        return a.transform(0, 1, -1, 0, d, 0);case 7:
	        return a.transform(0, -1, -1, 0, d, c);case 8:
	        return a.transform(0, -1, 1, 0, 0, c);}
	  }function d(a) {
	    for (var b = "", c = new Uint8Array(a), d = c.byteLength, e = 0; d > e; e++) {
	      b += String.fromCharCode(c[e]);
	    }return window.btoa(b);
	  }var e = a;return e.isExifSupported = function () {
	    return window.FileReader && new FileReader().readAsArrayBuffer && e.isResizeSupported();
	  }, e.readOrientation = function (a) {
	    var c = b.defer(),
	        d = new FileReader(),
	        e = a.slice ? a.slice(0, 65536) : a;return d.readAsArrayBuffer(e), d.onerror = function (a) {
	      return c.reject(a);
	    }, d.onload = function (a) {
	      var b = { orientation: 1 },
	          d = new DataView(this.result);if (65496 !== d.getUint16(0, !1)) return c.resolve(b);for (var e = d.byteLength, f = 2; e > f;) {
	        var g = d.getUint16(f, !1);if (f += 2, 65505 === g) {
	          if (1165519206 !== d.getUint32(f += 2, !1)) return c.resolve(b);var h = 18761 === d.getUint16(f += 6, !1);f += d.getUint32(f + 4, h);var i = d.getUint16(f, h);f += 2;for (var j = 0; i > j; j++) {
	            if (274 === d.getUint16(f + 12 * j, h)) {
	              var k = d.getUint16(f + 12 * j + 8, h);return k >= 2 && 8 >= k && (d.setUint16(f + 12 * j + 8, 1, h), b.fixedArrayBuffer = a.target.result), b.orientation = k, c.resolve(b);
	            }
	          }
	        } else {
	          if (65280 !== (65280 & g)) break;f += d.getUint16(f, !1);
	        }
	      }return c.resolve(b);
	    }, c.promise;
	  }, e.applyExifRotation = function (a) {
	    if (0 !== a.type.indexOf("image/jpeg")) return e.emptyPromise(a);var f = b.defer();return e.readOrientation(a).then(function (b) {
	      return b.orientation < 2 || b.orientation > 8 ? f.resolve(a) : void e.dataUrl(a, !0).then(function (g) {
	        var h = document.createElement("canvas"),
	            i = document.createElement("img");i.onload = function () {
	          try {
	            h.width = b.orientation > 4 ? i.height : i.width, h.height = b.orientation > 4 ? i.width : i.height;var g = h.getContext("2d");c(g, b.orientation, i.width, i.height), g.drawImage(i, 0, 0);var j = h.toDataURL(a.type || "image/WebP", .934);j = e.restoreExif(d(b.fixedArrayBuffer), j);var k = e.dataUrltoBlob(j, a.name);f.resolve(k);
	          } catch (l) {
	            return f.reject(l);
	          }
	        }, i.onerror = function () {
	          f.reject();
	        }, i.src = g;
	      }, function (a) {
	        f.reject(a);
	      });
	    }, function (a) {
	      f.reject(a);
	    }), f.promise;
	  }, e.restoreExif = function (a, b) {
	    var c = {};return c.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", c.encode64 = function (a) {
	      var b,
	          c,
	          d,
	          e,
	          f,
	          g = "",
	          h = "",
	          i = "",
	          j = 0;do {
	        b = a[j++], c = a[j++], h = a[j++], d = b >> 2, e = (3 & b) << 4 | c >> 4, f = (15 & c) << 2 | h >> 6, i = 63 & h, isNaN(c) ? f = i = 64 : isNaN(h) && (i = 64), g = g + this.KEY_STR.charAt(d) + this.KEY_STR.charAt(e) + this.KEY_STR.charAt(f) + this.KEY_STR.charAt(i), b = c = h = "", d = e = f = i = "";
	      } while (j < a.length);return g;
	    }, c.restore = function (a, b) {
	      a.match("data:image/jpeg;base64,") && (a = a.replace("data:image/jpeg;base64,", ""));var c = this.decode64(a),
	          d = this.slice2Segments(c),
	          e = this.exifManipulation(b, d);return "data:image/jpeg;base64," + this.encode64(e);
	    }, c.exifManipulation = function (a, b) {
	      var c = this.getExifArray(b),
	          d = this.insertExif(a, c);return new Uint8Array(d);
	    }, c.getExifArray = function (a) {
	      for (var b, c = 0; c < a.length; c++) {
	        if (b = a[c], 255 === b[0] & 225 === b[1]) return b;
	      }return [];
	    }, c.insertExif = function (a, b) {
	      var c = a.replace("data:image/jpeg;base64,", ""),
	          d = this.decode64(c),
	          e = d.indexOf(255, 3),
	          f = d.slice(0, e),
	          g = d.slice(e),
	          h = f;return h = h.concat(b), h = h.concat(g);
	    }, c.slice2Segments = function (a) {
	      for (var b = 0, c = [];;) {
	        if (255 === a[b] & 218 === a[b + 1]) break;if (255 === a[b] & 216 === a[b + 1]) b += 2;else {
	          var d = 256 * a[b + 2] + a[b + 3],
	              e = b + d + 2,
	              f = a.slice(b, e);c.push(f), b = e;
	        }if (b > a.length) break;
	      }return c;
	    }, c.decode64 = function (a) {
	      var b,
	          c,
	          d,
	          e,
	          f,
	          g = "",
	          h = "",
	          i = 0,
	          j = [],
	          k = /[^A-Za-z0-9\+\/\=]/g;k.exec(a) && console.log("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, NaNExpect errors in decoding."), a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");do {
	        d = this.KEY_STR.indexOf(a.charAt(i++)), e = this.KEY_STR.indexOf(a.charAt(i++)), f = this.KEY_STR.indexOf(a.charAt(i++)), h = this.KEY_STR.indexOf(a.charAt(i++)), b = d << 2 | e >> 4, c = (15 & e) << 4 | f >> 2, g = (3 & f) << 6 | h, j.push(b), 64 !== f && j.push(c), 64 !== h && j.push(g), b = c = g = "", d = e = f = h = "";
	      } while (i < a.length);return j;
	    }, c.restore(a, b);
	  }, e;
	}]);

/***/ },

/***/ 76:
/***/ function(module, exports) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*!
	 *  BarCode Coder Library (BCC Library)
	 *  BCCL Version 2.0
	 *
	 *  Porting : jQuery barcode plugin
	 *  Version : 2.0.3
	 *
	 *  Date    : 2013-01-06
	 *  Author  : DEMONTE Jean-Baptiste <jbdemonte@gmail.com>
	 *            HOUREZ Jonathan
	 *
	 *  Web site: http://barcode-coder.com/
	 *  dual licence :  http://www.cecill.info/licences/Licence_CeCILL_V2-fr.html
	 *                  http://www.gnu.org/licenses/gpl.html
	 */
	
	(function ($) {
	
	  var _barcode = {
	    settings: {
	      barWidth: 1,
	      barHeight: 50,
	      moduleSize: 5,
	      showHRI: true,
	      addQuietZone: true,
	      marginHRI: 5,
	      bgColor: "#FFFFFF",
	      color: "#000000",
	      fontSize: 10,
	      output: "css",
	      posX: 0,
	      posY: 0
	    },
	    intval: function intval(val) {
	      var type = typeof val === "undefined" ? "undefined" : _typeof(val);
	      if (type == 'string') {
	        val = val.replace(/[^0-9-.]/g, "");
	        val = parseInt(val * 1, 10);
	        return isNaN(val) || !isFinite(val) ? 0 : val;
	      }
	      return type == 'number' && isFinite(val) ? Math.floor(val) : 0;
	    },
	    i25: { // std25 int25
	      encoding: ["NNWWN", "WNNNW", "NWNNW", "WWNNN", "NNWNW", "WNWNN", "NWWNN", "NNNWW", "WNNWN", "NWNWN"],
	      compute: function compute(code, crc, type) {
	        if (!crc) {
	          if (code.length % 2 != 0) code = '0' + code;
	        } else {
	          if (type == "int25" && code.length % 2 == 0) code = '0' + code;
	          var odd = true,
	              v,
	              sum = 0;
	          for (var i = code.length - 1; i > -1; i--) {
	            v = _barcode.intval(code.charAt(i));
	            if (isNaN(v)) return "";
	            sum += odd ? 3 * v : v;
	            odd = !odd;
	          }
	          code += ((10 - sum % 10) % 10).toString();
	        }
	        return code;
	      },
	      getDigit: function getDigit(code, crc, type) {
	        code = this.compute(code, crc, type);
	        if (code == "") return "";
	        result = "";
	
	        var i, j;
	        if (type == "int25") {
	          // Interleaved 2 of 5
	
	          // start
	          result += "1010";
	
	          // digits + CRC
	          var c1, c2;
	          for (i = 0; i < code.length / 2; i++) {
	            c1 = code.charAt(2 * i);
	            c2 = code.charAt(2 * i + 1);
	            for (j = 0; j < 5; j++) {
	              result += '1';
	              if (this.encoding[c1].charAt(j) == 'W') result += '1';
	              result += '0';
	              if (this.encoding[c2].charAt(j) == 'W') result += '0';
	            }
	          }
	          // stop
	          result += "1101";
	        } else if (type == "std25") {
	          // Standard 2 of 5 is a numeric-only barcode that has been in use a long time.
	          // Unlike Interleaved 2 of 5, all of the information is encoded in the bars; the spaces are fixed width and are used only to separate the bars.
	          // The code is self-checking and does not include a checksum.
	
	          // start
	          result += "11011010";
	
	          // digits + CRC
	          var c;
	          for (i = 0; i < code.length; i++) {
	            c = code.charAt(i);
	            for (j = 0; j < 5; j++) {
	              result += '1';
	              if (this.encoding[c].charAt(j) == 'W') result += "11";
	              result += '0';
	            }
	          }
	          // stop
	          result += "11010110";
	        }
	        return result;
	      }
	    },
	    ean: {
	      encoding: [["0001101", "0100111", "1110010"], ["0011001", "0110011", "1100110"], ["0010011", "0011011", "1101100"], ["0111101", "0100001", "1000010"], ["0100011", "0011101", "1011100"], ["0110001", "0111001", "1001110"], ["0101111", "0000101", "1010000"], ["0111011", "0010001", "1000100"], ["0110111", "0001001", "1001000"], ["0001011", "0010111", "1110100"]],
	      first: ["000000", "001011", "001101", "001110", "010011", "011001", "011100", "010101", "010110", "011010"],
	      getDigit: function getDigit(code, type) {
	        // Check len (12 for ean13, 7 for ean8)
	        var len = type == "ean8" ? 7 : 12;
	        code = code.substring(0, len);
	        if (code.length != len) return "";
	        // Check each digit is numeric
	        var c;
	        for (var i = 0; i < code.length; i++) {
	          c = code.charAt(i);
	          if (c < '0' || c > '9') return "";
	        }
	        // get checksum
	        code = this.compute(code, type);
	
	        // process analyse
	        var result = "101"; // start
	
	        if (type == "ean8") {
	
	          // process left part
	          for (var i = 0; i < 4; i++) {
	            result += this.encoding[_barcode.intval(code.charAt(i))][0];
	          }
	
	          // center guard bars
	          result += "01010";
	
	          // process right part
	          for (var i = 4; i < 8; i++) {
	            result += this.encoding[_barcode.intval(code.charAt(i))][2];
	          }
	        } else {
	          // ean13
	          // extract first digit and get sequence
	          var seq = this.first[_barcode.intval(code.charAt(0))];
	
	          // process left part
	          for (var i = 1; i < 7; i++) {
	            result += this.encoding[_barcode.intval(code.charAt(i))][_barcode.intval(seq.charAt(i - 1))];
	          }
	
	          // center guard bars
	          result += "01010";
	
	          // process right part
	          for (var i = 7; i < 13; i++) {
	            result += this.encoding[_barcode.intval(code.charAt(i))][2];
	          }
	        } // ean13
	
	        result += "101"; // stop
	        return result;
	      },
	      compute: function compute(code, type) {
	        var len = type == "ean13" ? 12 : 7;
	        code = code.substring(0, len);
	        var sum = 0,
	            odd = true;
	        for (var i = code.length - 1; i > -1; i--) {
	          sum += (odd ? 3 : 1) * _barcode.intval(code.charAt(i));
	          odd = !odd;
	        }
	        return code + ((10 - sum % 10) % 10).toString();
	      }
	    },
	    upc: {
	      getDigit: function getDigit(code) {
	        if (code.length < 12) {
	          code = '0' + code;
	        }
	        return _barcode.ean.getDigit(code, 'ean13');
	      },
	      compute: function compute(code) {
	        if (code.length < 12) {
	          code = '0' + code;
	        }
	        return _barcode.ean.compute(code, 'ean13').substr(1);
	      }
	    },
	    msi: {
	      encoding: ["100100100100", "100100100110", "100100110100", "100100110110", "100110100100", "100110100110", "100110110100", "100110110110", "110100100100", "110100100110"],
	      compute: function compute(code, crc) {
	        if ((typeof crc === "undefined" ? "undefined" : _typeof(crc)) == "object") {
	          if (crc.crc1 == "mod10") {
	            code = this.computeMod10(code);
	          } else if (crc.crc1 == "mod11") {
	            code = this.computeMod11(code);
	          }
	          if (crc.crc2 == "mod10") {
	            code = this.computeMod10(code);
	          } else if (crc.crc2 == "mod11") {
	            code = this.computeMod11(code);
	          }
	        } else if (typeof crc == "boolean") {
	          if (crc) code = this.computeMod10(code);
	        }
	        return code;
	      },
	      computeMod10: function computeMod10(code) {
	        var i,
	            toPart1 = code.length % 2;
	        var n1 = 0,
	            sum = 0;
	        for (i = 0; i < code.length; i++) {
	          if (toPart1) {
	            n1 = 10 * n1 + _barcode.intval(code.charAt(i));
	          } else {
	            sum += _barcode.intval(code.charAt(i));
	          }
	          toPart1 = !toPart1;
	        }
	        var s1 = (2 * n1).toString();
	        for (i = 0; i < s1.length; i++) {
	          sum += _barcode.intval(s1.charAt(i));
	        }
	        return code + ((10 - sum % 10) % 10).toString();
	      },
	      computeMod11: function computeMod11(code) {
	        var sum = 0,
	            weight = 2;
	        for (var i = code.length - 1; i >= 0; i--) {
	          sum += weight * _barcode.intval(code.charAt(i));
	          weight = weight == 7 ? 2 : weight + 1;
	        }
	        return code + ((11 - sum % 11) % 11).toString();
	      },
	      getDigit: function getDigit(code, crc) {
	        var table = "0123456789";
	        var index = 0;
	        var result = "";
	
	        code = this.compute(code, false);
	
	        // start
	        result = "110";
	
	        // digits
	        for (i = 0; i < code.length; i++) {
	          index = table.indexOf(code.charAt(i));
	          if (index < 0) return "";
	          result += this.encoding[index];
	        }
	
	        // stop
	        result += "1001";
	
	        return result;
	      }
	    },
	    code11: {
	      encoding: ["101011", "1101011", "1001011", "1100101", "1011011", "1101101", "1001101", "1010011", "1101001", "110101", "101101"],
	      getDigit: function getDigit(code) {
	        var table = "0123456789-";
	        var i,
	            index,
	            result = "",
	            intercharacter = '0';
	
	        // start
	        result = "1011001" + intercharacter;
	
	        // digits
	        for (i = 0; i < code.length; i++) {
	          index = table.indexOf(code.charAt(i));
	          if (index < 0) return "";
	          result += this.encoding[index] + intercharacter;
	        }
	
	        // checksum
	        var weightC = 0,
	            weightSumC = 0,
	            weightK = 1,
	            // start at 1 because the right-most character is "C" checksum
	        weightSumK = 0;
	        for (i = code.length - 1; i >= 0; i--) {
	          weightC = weightC == 10 ? 1 : weightC + 1;
	          weightK = weightK == 10 ? 1 : weightK + 1;
	
	          index = table.indexOf(code.charAt(i));
	
	          weightSumC += weightC * index;
	          weightSumK += weightK * index;
	        }
	
	        var c = weightSumC % 11;
	        weightSumK += c;
	        var k = weightSumK % 11;
	
	        result += this.encoding[c] + intercharacter;
	
	        if (code.length >= 10) {
	          result += this.encoding[k] + intercharacter;
	        }
	
	        // stop
	        result += "1011001";
	
	        return result;
	      }
	    },
	    code39: {
	      encoding: ["101001101101", "110100101011", "101100101011", "110110010101", "101001101011", "110100110101", "101100110101", "101001011011", "110100101101", "101100101101", "110101001011", "101101001011", "110110100101", "101011001011", "110101100101", "101101100101", "101010011011", "110101001101", "101101001101", "101011001101", "110101010011", "101101010011", "110110101001", "101011010011", "110101101001", "101101101001", "101010110011", "110101011001", "101101011001", "101011011001", "110010101011", "100110101011", "110011010101", "100101101011", "110010110101", "100110110101", "100101011011", "110010101101", "100110101101", "100100100101", "100100101001", "100101001001", "101001001001", "100101101101"],
	      getDigit: function getDigit(code) {
	        var table = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%*";
	        var i,
	            index,
	            result = "",
	            intercharacter = '0';
	
	        if (code.indexOf('*') >= 0) return "";
	
	        // Add Start and Stop charactere : *
	        code = ("*" + code + "*").toUpperCase();
	
	        for (i = 0; i < code.length; i++) {
	          index = table.indexOf(code.charAt(i));
	          if (index < 0) return "";
	          if (i > 0) result += intercharacter;
	          result += this.encoding[index];
	        }
	        return result;
	      }
	    },
	    code93: {
	      encoding: ["100010100", "101001000", "101000100", "101000010", "100101000", "100100100", "100100010", "101010000", "100010010", "100001010", "110101000", "110100100", "110100010", "110010100", "110010010", "110001010", "101101000", "101100100", "101100010", "100110100", "100011010", "101011000", "101001100", "101000110", "100101100", "100010110", "110110100", "110110010", "110101100", "110100110", "110010110", "110011010", "101101100", "101100110", "100110110", "100111010", "100101110", "111010100", "111010010", "111001010", "101101110", "101110110", "110101110", "100100110", "111011010", "111010110", "100110010", "101011110"],
	      getDigit: function getDigit(code, crc) {
	        var table = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%____*",
	            // _ => ($), (%), (/) et (+)
	        c,
	            result = "";
	
	        if (code.indexOf('*') >= 0) return "";
	
	        code = code.toUpperCase();
	
	        // start :  *
	        result += this.encoding[47];
	
	        // digits
	        for (i = 0; i < code.length; i++) {
	          c = code.charAt(i);
	          index = table.indexOf(c);
	          if (c == '_' || index < 0) return "";
	          result += this.encoding[index];
	        }
	
	        // checksum
	        if (crc) {
	          var weightC = 0,
	              weightSumC = 0,
	              weightK = 1,
	              // start at 1 because the right-most character is "C" checksum
	          weightSumK = 0;
	          for (i = code.length - 1; i >= 0; i--) {
	            weightC = weightC == 20 ? 1 : weightC + 1;
	            weightK = weightK == 15 ? 1 : weightK + 1;
	
	            index = table.indexOf(code.charAt(i));
	
	            weightSumC += weightC * index;
	            weightSumK += weightK * index;
	          }
	
	          var c = weightSumC % 47;
	          weightSumK += c;
	          var k = weightSumK % 47;
	
	          result += this.encoding[c];
	          result += this.encoding[k];
	        }
	
	        // stop : *
	        result += this.encoding[47];
	
	        // Terminaison bar
	        result += '1';
	        return result;
	      }
	    },
	    code128: {
	      encoding: ["11011001100", "11001101100", "11001100110", "10010011000", "10010001100", "10001001100", "10011001000", "10011000100", "10001100100", "11001001000", "11001000100", "11000100100", "10110011100", "10011011100", "10011001110", "10111001100", "10011101100", "10011100110", "11001110010", "11001011100", "11001001110", "11011100100", "11001110100", "11101101110", "11101001100", "11100101100", "11100100110", "11101100100", "11100110100", "11100110010", "11011011000", "11011000110", "11000110110", "10100011000", "10001011000", "10001000110", "10110001000", "10001101000", "10001100010", "11010001000", "11000101000", "11000100010", "10110111000", "10110001110", "10001101110", "10111011000", "10111000110", "10001110110", "11101110110", "11010001110", "11000101110", "11011101000", "11011100010", "11011101110", "11101011000", "11101000110", "11100010110", "11101101000", "11101100010", "11100011010", "11101111010", "11001000010", "11110001010", "10100110000", "10100001100", "10010110000", "10010000110", "10000101100", "10000100110", "10110010000", "10110000100", "10011010000", "10011000010", "10000110100", "10000110010", "11000010010", "11001010000", "11110111010", "11000010100", "10001111010", "10100111100", "10010111100", "10010011110", "10111100100", "10011110100", "10011110010", "11110100100", "11110010100", "11110010010", "11011011110", "11011110110", "11110110110", "10101111000", "10100011110", "10001011110", "10111101000", "10111100010", "11110101000", "11110100010", "10111011110", "10111101110", "11101011110", "11110101110", "11010000100", "11010010000", "11010011100", "11000111010"],
	      getDigit: function getDigit(code) {
	        var tableB = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
	        var result = "";
	        var sum = 0;
	        var isum = 0;
	        var i = 0;
	        var j = 0;
	        var value = 0;
	
	        // check each characters
	        for (i = 0; i < code.length; i++) {
	          if (tableB.indexOf(code.charAt(i)) == -1) return "";
	        }
	
	        // check firsts characters : start with C table only if enought numeric
	        var tableCActivated = code.length > 1;
	        var c = '';
	        for (i = 0; i < 3 && i < code.length; i++) {
	          c = code.charAt(i);
	          tableCActivated &= c >= '0' && c <= '9';
	        }
	
	        sum = tableCActivated ? 105 : 104;
	
	        // start : [105] : C table or [104] : B table
	        result = this.encoding[sum];
	
	        i = 0;
	        while (i < code.length) {
	          if (!tableCActivated) {
	            j = 0;
	            // check next character to activate C table if interresting
	            while (i + j < code.length && code.charAt(i + j) >= '0' && code.charAt(i + j) <= '9') {
	              j++;
	            } // 6 min everywhere or 4 mini at the end
	            tableCActivated = j > 5 || i + j - 1 == code.length && j > 3;
	
	            if (tableCActivated) {
	              result += this.encoding[99]; // C table
	              sum += ++isum * 99;
	            }
	            //         2 min for table C so need table B
	          } else if (i == code.length || code.charAt(i) < '0' || code.charAt(i) > '9' || code.charAt(i + 1) < '0' || code.charAt(i + 1) > '9') {
	            tableCActivated = false;
	            result += this.encoding[100]; // B table
	            sum += ++isum * 100;
	          }
	
	          if (tableCActivated) {
	            value = _barcode.intval(code.charAt(i) + code.charAt(i + 1)); // Add two characters (numeric)
	            i += 2;
	          } else {
	            value = tableB.indexOf(code.charAt(i)); // Add one character
	            i += 1;
	          }
	          result += this.encoding[value];
	          sum += ++isum * value;
	        }
	
	        // Add CRC
	        result += this.encoding[sum % 103];
	
	        // Stop
	        result += this.encoding[106];
	
	        // Termination bar
	        result += "11";
	
	        return result;
	      }
	    },
	    codabar: {
	      encoding: ["101010011", "101011001", "101001011", "110010101", "101101001", "110101001", "100101011", "100101101", "100110101", "110100101", "101001101", "101100101", "1101011011", "1101101011", "1101101101", "1011011011", "1011001001", "1010010011", "1001001011", "1010011001"],
	      getDigit: function getDigit(code) {
	        var table = "0123456789-$:/.+";
	        var i,
	            index,
	            result = "",
	            intercharacter = '0';
	
	        // add start : A->D : arbitrary choose A
	        result += this.encoding[16] + intercharacter;
	
	        for (i = 0; i < code.length; i++) {
	          index = table.indexOf(code.charAt(i));
	          if (index < 0) return "";
	          result += this.encoding[index] + intercharacter;
	        }
	
	        // add stop : A->D : arbitrary choose A
	        result += this.encoding[16];
	        return result;
	      }
	    },
	    datamatrix: {
	      lengthRows: [10, 12, 14, 16, 18, 20, 22, 24, 26, // 24 squares et 6 rectangular
	      32, 36, 40, 44, 48, 52, 64, 72, 80, 88, 96, 104, 120, 132, 144, 8, 8, 12, 12, 16, 16],
	      lengthCols: [10, 12, 14, 16, 18, 20, 22, 24, 26, // Number of columns for the entire datamatrix
	      32, 36, 40, 44, 48, 52, 64, 72, 80, 88, 96, 104, 120, 132, 144, 18, 32, 26, 36, 36, 48],
	      dataCWCount: [3, 5, 8, 12, 18, 22, 30, 36, // Number of data codewords for the datamatrix
	      44, 62, 86, 114, 144, 174, 204, 280, 368, 456, 576, 696, 816, 1050, 1304, 1558, 5, 10, 16, 22, 32, 49],
	      solomonCWCount: [5, 7, 10, 12, 14, 18, 20, 24, 28, // Number of Reed-Solomon codewords for the datamatrix
	      36, 42, 48, 56, 68, 84, 112, 144, 192, 224, 272, 336, 408, 496, 620, 7, 11, 14, 18, 24, 28],
	      dataRegionRows: [8, 10, 12, 14, 16, 18, 20, 22, // Number of rows per region
	      24, 14, 16, 18, 20, 22, 24, 14, 16, 18, 20, 22, 24, 18, 20, 22, 6, 6, 10, 10, 14, 14],
	      dataRegionCols: [8, 10, 12, 14, 16, 18, 20, 22, // Number of columns per region
	      24, 14, 16, 18, 20, 22, 24, 14, 16, 18, 20, 22, 24, 18, 20, 22, 16, 14, 24, 16, 16, 22],
	      regionRows: [1, 1, 1, 1, 1, 1, 1, 1, // Number of regions per row
	      1, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 6, 6, 6, 1, 1, 1, 1, 1, 1],
	      regionCols: [1, 1, 1, 1, 1, 1, 1, 1, // Number of regions per column
	      1, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 6, 6, 6, 1, 2, 1, 2, 2, 2],
	      interleavedBlocks: [1, 1, 1, 1, 1, 1, 1, 1, // Number of blocks
	      1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 6, 6, 8, 8, 1, 1, 1, 1, 1, 1],
	      logTab: [-255, 255, 1, 240, 2, 225, 241, 53, 3, // Table of log for the Galois field
	      38, 226, 133, 242, 43, 54, 210, 4, 195, 39, 114, 227, 106, 134, 28, 243, 140, 44, 23, 55, 118, 211, 234, 5, 219, 196, 96, 40, 222, 115, 103, 228, 78, 107, 125, 135, 8, 29, 162, 244, 186, 141, 180, 45, 99, 24, 49, 56, 13, 119, 153, 212, 199, 235, 91, 6, 76, 220, 217, 197, 11, 97, 184, 41, 36, 223, 253, 116, 138, 104, 193, 229, 86, 79, 171, 108, 165, 126, 145, 136, 34, 9, 74, 30, 32, 163, 84, 245, 173, 187, 204, 142, 81, 181, 190, 46, 88, 100, 159, 25, 231, 50, 207, 57, 147, 14, 67, 120, 128, 154, 248, 213, 167, 200, 63, 236, 110, 92, 176, 7, 161, 77, 124, 221, 102, 218, 95, 198, 90, 12, 152, 98, 48, 185, 179, 42, 209, 37, 132, 224, 52, 254, 239, 117, 233, 139, 22, 105, 27, 194, 113, 230, 206, 87, 158, 80, 189, 172, 203, 109, 175, 166, 62, 127, 247, 146, 66, 137, 192, 35, 252, 10, 183, 75, 216, 31, 83, 33, 73, 164, 144, 85, 170, 246, 65, 174, 61, 188, 202, 205, 157, 143, 169, 82, 72, 182, 215, 191, 251, 47, 178, 89, 151, 101, 94, 160, 123, 26, 112, 232, 21, 51, 238, 208, 131, 58, 69, 148, 18, 15, 16, 68, 17, 121, 149, 129, 19, 155, 59, 249, 70, 214, 250, 168, 71, 201, 156, 64, 60, 237, 130, 111, 20, 93, 122, 177, 150],
	      aLogTab: [1, 2, 4, 8, 16, 32, 64, 128, 45, 90, // Table of aLog for the Galois field
	      180, 69, 138, 57, 114, 228, 229, 231, 227, 235, 251, 219, 155, 27, 54, 108, 216, 157, 23, 46, 92, 184, 93, 186, 89, 178, 73, 146, 9, 18, 36, 72, 144, 13, 26, 52, 104, 208, 141, 55, 110, 220, 149, 7, 14, 28, 56, 112, 224, 237, 247, 195, 171, 123, 246, 193, 175, 115, 230, 225, 239, 243, 203, 187, 91, 182, 65, 130, 41, 82, 164, 101, 202, 185, 95, 190, 81, 162, 105, 210, 137, 63, 126, 252, 213, 135, 35, 70, 140, 53, 106, 212, 133, 39, 78, 156, 21, 42, 84, 168, 125, 250, 217, 159, 19, 38, 76, 152, 29, 58, 116, 232, 253, 215, 131, 43, 86, 172, 117, 234, 249, 223, 147, 11, 22, 44, 88, 176, 77, 154, 25, 50, 100, 200, 189, 87, 174, 113, 226, 233, 255, 211, 139, 59, 118, 236, 245, 199, 163, 107, 214, 129, 47, 94, 188, 85, 170, 121, 242, 201, 191, 83, 166, 97, 194, 169, 127, 254, 209, 143, 51, 102, 204, 181, 71, 142, 49, 98, 196, 165, 103, 206, 177, 79, 158, 17, 34, 68, 136, 61, 122, 244, 197, 167, 99, 198, 161, 111, 222, 145, 15, 30, 60, 120, 240, 205, 183, 67, 134, 33, 66, 132, 37, 74, 148, 5, 10, 20, 40, 80, 160, 109, 218, 153, 31, 62, 124, 248, 221, 151, 3, 6, 12, 24, 48, 96, 192, 173, 119, 238, 241, 207, 179, 75, 150, 1],
	      champGaloisMult: function champGaloisMult(a, b) {
	        // MULTIPLICATION IN GALOIS FIELD GF(2^8)
	        if (!a || !b) return 0;
	        return this.aLogTab[(this.logTab[a] + this.logTab[b]) % 255];
	      },
	      champGaloisDoub: function champGaloisDoub(a, b) {
	        // THE OPERATION a * 2^b IN GALOIS FIELD GF(2^8)
	        if (!a) return 0;
	        if (!b) return a;
	        return this.aLogTab[(this.logTab[a] + b) % 255];
	      },
	      champGaloisSum: function champGaloisSum(a, b) {
	        // SUM IN GALOIS FIELD GF(2^8)
	        return a ^ b;
	      },
	      selectIndex: function selectIndex(dataCodeWordsCount, rectangular) {
	        // CHOOSE THE GOOD INDEX FOR TABLES
	        if ((dataCodeWordsCount < 1 || dataCodeWordsCount > 1558) && !rectangular) return -1;
	        if ((dataCodeWordsCount < 1 || dataCodeWordsCount > 49) && rectangular) return -1;
	
	        var n = 0;
	        if (rectangular) n = 24;
	
	        while (this.dataCWCount[n] < dataCodeWordsCount) {
	          n++;
	        }return n;
	      },
	      encodeDataCodeWordsASCII: function encodeDataCodeWordsASCII(text) {
	        var dataCodeWords = new Array();
	        var n = 0,
	            i,
	            c;
	        for (i = 0; i < text.length; i++) {
	          c = text.charCodeAt(i);
	          if (c > 127) {
	            dataCodeWords[n] = 235;
	            c = c - 127;
	            n++;
	          } else if (c >= 48 && c <= 57 && i + 1 < text.length && text.charCodeAt(i + 1) >= 48 && text.charCodeAt(i + 1) <= 57) {
	            c = (c - 48) * 10 + (text.charCodeAt(i + 1) - 48);
	            c += 130;
	            i++;
	          } else c++;
	          dataCodeWords[n] = c;
	          n++;
	        }
	        return dataCodeWords;
	      },
	      addPadCW: function addPadCW(tab, from, to) {
	        if (from >= to) return;
	        tab[from] = 129;
	        var r, i;
	        for (i = from + 1; i < to; i++) {
	          r = 149 * (i + 1) % 253 + 1;
	          tab[i] = (129 + r) % 254;
	        }
	      },
	      calculSolFactorTable: function calculSolFactorTable(solomonCWCount) {
	        // CALCULATE THE REED SOLOMON FACTORS
	        var g = new Array();
	        var i, j;
	
	        for (i = 0; i <= solomonCWCount; i++) {
	          g[i] = 1;
	        }for (i = 1; i <= solomonCWCount; i++) {
	          for (j = i - 1; j >= 0; j--) {
	            g[j] = this.champGaloisDoub(g[j], i);
	            if (j > 0) g[j] = this.champGaloisSum(g[j], g[j - 1]);
	          }
	        }
	        return g;
	      },
	      addReedSolomonCW: function addReedSolomonCW(nSolomonCW, coeffTab, nDataCW, dataTab, blocks) {
	        // Add the Reed Solomon codewords
	        var temp = 0;
	        var errorBlocks = nSolomonCW / blocks;
	        var correctionCW = new Array();
	
	        var i, j, k;
	        for (k = 0; k < blocks; k++) {
	          for (i = 0; i < errorBlocks; i++) {
	            correctionCW[i] = 0;
	          }for (i = k; i < nDataCW; i = i + blocks) {
	            temp = this.champGaloisSum(dataTab[i], correctionCW[errorBlocks - 1]);
	            for (j = errorBlocks - 1; j >= 0; j--) {
	              if (!temp) {
	                correctionCW[j] = 0;
	              } else {
	                correctionCW[j] = this.champGaloisMult(temp, coeffTab[j]);
	              }
	              if (j > 0) correctionCW[j] = this.champGaloisSum(correctionCW[j - 1], correctionCW[j]);
	            }
	          }
	          // Renversement des blocs calcules
	          j = nDataCW + k;
	          for (i = errorBlocks - 1; i >= 0; i--) {
	            dataTab[j] = correctionCW[i];
	            j = j + blocks;
	          }
	        }
	        return dataTab;
	      },
	      getBits: function getBits(entier) {
	        // Transform integer to tab of bits
	        var bits = new Array();
	        for (var i = 0; i < 8; i++) {
	          bits[i] = entier & 128 >> i ? 1 : 0;
	        }
	        return bits;
	      },
	      next: function next(etape, totalRows, totalCols, codeWordsBits, datamatrix, assigned) {
	        // Place codewords into the matrix
	        var chr = 0; // Place of the 8st bit from the first character to [4][0]
	        var row = 4;
	        var col = 0;
	
	        do {
	          // Check for a special case of corner
	          if (row == totalRows && col == 0) {
	            this.patternShapeSpecial1(datamatrix, assigned, codeWordsBits[chr], totalRows, totalCols);
	            chr++;
	          } else if (etape < 3 && row == totalRows - 2 && col == 0 && totalCols % 4 != 0) {
	            this.patternShapeSpecial2(datamatrix, assigned, codeWordsBits[chr], totalRows, totalCols);
	            chr++;
	          } else if (row == totalRows - 2 && col == 0 && totalCols % 8 == 4) {
	            this.patternShapeSpecial3(datamatrix, assigned, codeWordsBits[chr], totalRows, totalCols);
	            chr++;
	          } else if (row == totalRows + 4 && col == 2 && totalCols % 8 == 0) {
	            this.patternShapeSpecial4(datamatrix, assigned, codeWordsBits[chr], totalRows, totalCols);
	            chr++;
	          }
	
	          // Go up and right in the datamatrix
	          do {
	            if (row < totalRows && col >= 0 && assigned[row][col] != 1) {
	              this.patternShapeStandard(datamatrix, assigned, codeWordsBits[chr], row, col, totalRows, totalCols);
	              chr++;
	            }
	            row -= 2;
	            col += 2;
	          } while (row >= 0 && col < totalCols);
	          row += 1;
	          col += 3;
	
	          // Go down and left in the datamatrix
	          do {
	            if (row >= 0 && col < totalCols && assigned[row][col] != 1) {
	              this.patternShapeStandard(datamatrix, assigned, codeWordsBits[chr], row, col, totalRows, totalCols);
	              chr++;
	            }
	            row += 2;
	            col -= 2;
	          } while (row < totalRows && col >= 0);
	          row += 3;
	          col += 1;
	        } while (row < totalRows || col < totalCols);
	      },
	      patternShapeStandard: function patternShapeStandard(datamatrix, assigned, bits, row, col, totalRows, totalCols) {
	        // Place bits in the matrix (standard or special case)
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[0], row - 2, col - 2, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[1], row - 2, col - 1, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[2], row - 1, col - 2, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[3], row - 1, col - 1, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[4], row - 1, col, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[5], row, col - 2, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[6], row, col - 1, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[7], row, col, totalRows, totalCols);
	      },
	      patternShapeSpecial1: function patternShapeSpecial1(datamatrix, assigned, bits, totalRows, totalCols) {
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[0], totalRows - 1, 0, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[1], totalRows - 1, 1, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[2], totalRows - 1, 2, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[3], 0, totalCols - 2, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[4], 0, totalCols - 1, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[5], 1, totalCols - 1, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[6], 2, totalCols - 1, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[7], 3, totalCols - 1, totalRows, totalCols);
	      },
	      patternShapeSpecial2: function patternShapeSpecial2(datamatrix, assigned, bits, totalRows, totalCols) {
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[0], totalRows - 3, 0, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[1], totalRows - 2, 0, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[2], totalRows - 1, 0, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[3], 0, totalCols - 4, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[4], 0, totalCols - 3, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[5], 0, totalCols - 2, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[6], 0, totalCols - 1, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[7], 1, totalCols - 1, totalRows, totalCols);
	      },
	      patternShapeSpecial3: function patternShapeSpecial3(datamatrix, assigned, bits, totalRows, totalCols) {
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[0], totalRows - 3, 0, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[1], totalRows - 2, 0, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[2], totalRows - 1, 0, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[3], 0, totalCols - 2, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[4], 0, totalCols - 1, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[5], 1, totalCols - 1, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[6], 2, totalCols - 1, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[7], 3, totalCols - 1, totalRows, totalCols);
	      },
	      patternShapeSpecial4: function patternShapeSpecial4(datamatrix, assigned, bits, totalRows, totalCols) {
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[0], totalRows - 1, 0, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[1], totalRows - 1, totalCols - 1, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[2], 0, totalCols - 3, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[3], 0, totalCols - 2, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[4], 0, totalCols - 1, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[5], 1, totalCols - 3, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[6], 1, totalCols - 2, totalRows, totalCols);
	        this.placeBitInDatamatrix(datamatrix, assigned, bits[7], 1, totalCols - 1, totalRows, totalCols);
	      },
	      placeBitInDatamatrix: function placeBitInDatamatrix(datamatrix, assigned, bit, row, col, totalRows, totalCols) {
	        // Put a bit into the matrix
	        if (row < 0) {
	          row += totalRows;
	          col += 4 - (totalRows + 4) % 8;
	        }
	        if (col < 0) {
	          col += totalCols;
	          row += 4 - (totalCols + 4) % 8;
	        }
	        if (assigned[row][col] != 1) {
	          datamatrix[row][col] = bit;
	          assigned[row][col] = 1;
	        }
	      },
	      addFinderPattern: function addFinderPattern(datamatrix, rowsRegion, colsRegion, rowsRegionCW, colsRegionCW) {
	        // Add the finder pattern
	        var totalRowsCW = (rowsRegionCW + 2) * rowsRegion;
	        var totalColsCW = (colsRegionCW + 2) * colsRegion;
	
	        var datamatrixTemp = new Array();
	        datamatrixTemp[0] = new Array();
	        for (var j = 0; j < totalColsCW + 2; j++) {
	          datamatrixTemp[0][j] = 0;
	        }
	        for (var i = 0; i < totalRowsCW; i++) {
	          datamatrixTemp[i + 1] = new Array();
	          datamatrixTemp[i + 1][0] = 0;
	          datamatrixTemp[i + 1][totalColsCW + 1] = 0;
	          for (var j = 0; j < totalColsCW; j++) {
	            if (i % (rowsRegionCW + 2) == 0) {
	              if (j % 2 == 0) {
	                datamatrixTemp[i + 1][j + 1] = 1;
	              } else {
	                datamatrixTemp[i + 1][j + 1] = 0;
	              }
	            } else if (i % (rowsRegionCW + 2) == rowsRegionCW + 1) {
	              datamatrixTemp[i + 1][j + 1] = 1;
	            } else if (j % (colsRegionCW + 2) == colsRegionCW + 1) {
	              if (i % 2 == 0) {
	                datamatrixTemp[i + 1][j + 1] = 0;
	              } else {
	                datamatrixTemp[i + 1][j + 1] = 1;
	              }
	            } else if (j % (colsRegionCW + 2) == 0) {
	              datamatrixTemp[i + 1][j + 1] = 1;
	            } else {
	              datamatrixTemp[i + 1][j + 1] = 0;
	              datamatrixTemp[i + 1][j + 1] = datamatrix[i - 1 - 2 * parseInt(i / (rowsRegionCW + 2))][j - 1 - 2 * parseInt(j / (colsRegionCW + 2))];
	            }
	          }
	        }
	        datamatrixTemp[totalRowsCW + 1] = new Array();
	        for (var j = 0; j < totalColsCW + 2; j++) {
	          datamatrixTemp[totalRowsCW + 1][j] = 0;
	        }
	        return datamatrixTemp;
	      },
	      getDigit: function getDigit(text, rectangular) {
	        var dataCodeWords = this.encodeDataCodeWordsASCII(text); // Code the text in the ASCII mode
	        var dataCWCount = dataCodeWords.length;
	        var index = this.selectIndex(dataCWCount, rectangular); // Select the index for the data tables
	        var totalDataCWCount = this.dataCWCount[index]; // Number of data CW
	        var solomonCWCount = this.solomonCWCount[index]; // Number of Reed Solomon CW
	        var totalCWCount = totalDataCWCount + solomonCWCount; // Number of CW
	        var rowsTotal = this.lengthRows[index]; // Size of symbol
	        var colsTotal = this.lengthCols[index];
	        var rowsRegion = this.regionRows[index]; // Number of region
	        var colsRegion = this.regionCols[index];
	        var rowsRegionCW = this.dataRegionRows[index];
	        var colsRegionCW = this.dataRegionCols[index];
	        var rowsLengthMatrice = rowsTotal - 2 * rowsRegion; // Size of matrice data
	        var colsLengthMatrice = colsTotal - 2 * colsRegion;
	        var blocks = this.interleavedBlocks[index]; // Number of Reed Solomon blocks
	        var errorBlocks = solomonCWCount / blocks;
	
	        this.addPadCW(dataCodeWords, dataCWCount, totalDataCWCount); // Add codewords pads
	
	        var g = this.calculSolFactorTable(errorBlocks); // Calculate correction coefficients
	
	        this.addReedSolomonCW(solomonCWCount, g, totalDataCWCount, dataCodeWords, blocks); // Add Reed Solomon codewords
	
	        var codeWordsBits = new Array(); // Calculte bits from codewords
	        for (var i = 0; i < totalCWCount; i++) {
	          codeWordsBits[i] = this.getBits(dataCodeWords[i]);
	        }
	
	        var datamatrix = new Array(); // Put data in the matrix
	        var assigned = new Array();
	
	        for (var i = 0; i < colsLengthMatrice; i++) {
	          datamatrix[i] = new Array();
	          assigned[i] = new Array();
	        }
	
	        // Add the bottom-right corner if needed
	        if (rowsLengthMatrice * colsLengthMatrice % 8 == 4) {
	          datamatrix[rowsLengthMatrice - 2][colsLengthMatrice - 2] = 1;
	          datamatrix[rowsLengthMatrice - 1][colsLengthMatrice - 1] = 1;
	          datamatrix[rowsLengthMatrice - 1][colsLengthMatrice - 2] = 0;
	          datamatrix[rowsLengthMatrice - 2][colsLengthMatrice - 1] = 0;
	          assigned[rowsLengthMatrice - 2][colsLengthMatrice - 2] = 1;
	          assigned[rowsLengthMatrice - 1][colsLengthMatrice - 1] = 1;
	          assigned[rowsLengthMatrice - 1][colsLengthMatrice - 2] = 1;
	          assigned[rowsLengthMatrice - 2][colsLengthMatrice - 1] = 1;
	        }
	
	        // Put the codewords into the matrix
	        this.next(0, rowsLengthMatrice, colsLengthMatrice, codeWordsBits, datamatrix, assigned);
	
	        // Add the finder pattern
	        datamatrix = this.addFinderPattern(datamatrix, rowsRegion, colsRegion, rowsRegionCW, colsRegionCW);
	
	        return datamatrix;
	      }
	    },
	    // little endian convertor
	    lec: {
	      // convert an int
	      cInt: function cInt(value, byteCount) {
	        var le = '';
	        for (var i = 0; i < byteCount; i++) {
	          le += String.fromCharCode(value & 0xFF);
	          value = value >> 8;
	        }
	        return le;
	      },
	      // return a byte string from rgb values
	      cRgb: function cRgb(r, g, b) {
	        return String.fromCharCode(b) + String.fromCharCode(g) + String.fromCharCode(r);
	      },
	      // return a byte string from a hex string color
	      cHexColor: function cHexColor(hex) {
	        var v = parseInt('0x' + hex.substr(1));
	        var b = v & 0xFF;
	        v = v >> 8;
	        var g = v & 0xFF;
	        var r = v >> 8;
	        return this.cRgb(r, g, b);
	      }
	    },
	    hexToRGB: function hexToRGB(hex) {
	      var v = parseInt('0x' + hex.substr(1));
	      var b = v & 0xFF;
	      v = v >> 8;
	      var g = v & 0xFF;
	      var r = v >> 8;
	      return { r: r, g: g, b: b };
	    },
	    // test if a string is a hexa string color (like #FF0000)
	    isHexColor: function isHexColor(value) {
	      var r = new RegExp("#[0-91-F]", "gi");
	      return value.match(r);
	    },
	    // encode data in base64
	    base64Encode: function base64Encode(value) {
	      var r = '',
	          c1,
	          c2,
	          c3,
	          b1,
	          b2,
	          b3,
	          b4;
	      var k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	      var i = 0;
	      while (i < value.length) {
	        c1 = value.charCodeAt(i++);
	        c2 = value.charCodeAt(i++);
	        c3 = value.charCodeAt(i++);
	        b1 = c1 >> 2;
	        b2 = (c1 & 3) << 4 | c2 >> 4;
	        b3 = (c2 & 15) << 2 | c3 >> 6;
	        b4 = c3 & 63;
	        if (isNaN(c2)) b3 = b4 = 64;else if (isNaN(c3)) b4 = 64;
	        r += k.charAt(b1) + k.charAt(b2) + k.charAt(b3) + k.charAt(b4);
	      }
	      return r;
	    },
	    // convert a bit string to an array of array of bit char
	    bitStringTo2DArray: function bitStringTo2DArray(digit) {
	      var d = [];d[0] = [];
	      for (var i = 0; i < digit.length; i++) {
	        d[0][i] = digit.charAt(i);
	      }return d;
	    },
	    // clear jQuery Target
	    resize: function resize($container, w) {
	      $container.css("padding", "0px").css("overflow", "auto").css("width", w + "px").html("");
	      return $container;
	    },
	    // bmp barcode renderer
	    digitToBmpRenderer: function digitToBmpRenderer($container, settings, digit, hri, mw, mh) {
	      var lines = digit.length;
	      var columns = digit[0].length;
	      var i = 0;
	      var c0 = this.isHexColor(settings.bgColor) ? this.lec.cHexColor(settings.bgColor) : this.lec.cRgb(255, 255, 255);
	      var c1 = this.isHexColor(settings.color) ? this.lec.cHexColor(settings.color) : this.lec.cRgb(0, 0, 0);
	      var bar0 = '';
	      var bar1 = '';
	
	      // create one bar 0 and 1 of "mw" byte length
	      for (i = 0; i < mw; i++) {
	        bar0 += c0;
	        bar1 += c1;
	      }
	      var bars = '';
	
	      var padding = (4 - mw * columns * 3 % 4) % 4; // Padding for 4 byte alignment ("* 3" come from "3 byte to color R, G and B")
	      var dataLen = (mw * columns + padding) * mh * lines;
	
	      var pad = '';
	      for (i = 0; i < padding; i++) {
	        pad += '\0';
	      } // Bitmap header
	      var bmp = 'BM' + // Magic Number
	      this.lec.cInt(54 + dataLen, 4) + // Size of Bitmap size (header size + data len)
	      '\0\0\0\0' + // Unused
	      this.lec.cInt(54, 4) + // The offset where the bitmap data (pixels) can be found
	      this.lec.cInt(40, 4) + // The number of bytes in the header (from this point).
	      this.lec.cInt(mw * columns, 4) + // width
	      this.lec.cInt(mh * lines, 4) + // height
	      this.lec.cInt(1, 2) + // Number of color planes being used
	      this.lec.cInt(24, 2) + // The number of bits/pixel
	      '\0\0\0\0' + // BI_RGB, No compression used
	      this.lec.cInt(dataLen, 4) + // The size of the raw BMP data (after this header)
	      this.lec.cInt(2835, 4) + // The horizontal resolution of the image (pixels/meter)
	      this.lec.cInt(2835, 4) + // The vertical resolution of the image (pixels/meter)
	      this.lec.cInt(0, 4) + // Number of colors in the palette
	      this.lec.cInt(0, 4); // Means all colors are important
	      // Bitmap Data
	      for (var y = lines - 1; y >= 0; y--) {
	        var line = '';
	        for (var x = 0; x < columns; x++) {
	          line += digit[y][x] == '0' ? bar0 : bar1;
	        }
	        line += pad;
	        for (var k = 0; k < mh; k++) {
	          bmp += line;
	        }
	      }
	      // set bmp image to the container
	      var object = document.createElement('object');
	      object.setAttribute('type', 'image/bmp');
	      object.setAttribute('data', 'data:image/bmp;base64,' + this.base64Encode(bmp));
	      this.resize($container, mw * columns + padding).append(object);
	    },
	    // bmp 1D barcode renderer
	    digitToBmp: function digitToBmp($container, settings, digit, hri) {
	      var w = _barcode.intval(settings.barWidth);
	      var h = _barcode.intval(settings.barHeight);
	      this.digitToBmpRenderer($container, settings, this.bitStringTo2DArray(digit), hri, w, h);
	    },
	    // bmp 2D barcode renderer
	    digitToBmp2D: function digitToBmp2D($container, settings, digit, hri) {
	      var s = _barcode.intval(settings.moduleSize);
	      this.digitToBmpRenderer($container, settings, digit, hri, s, s);
	    },
	    // css barcode renderer
	    digitToCssRenderer: function digitToCssRenderer($container, settings, digit, hri, mw, mh) {
	      var lines = digit.length;
	      var columns = digit[0].length;
	      var content = "";
	      var bar0 = "<div style=\"float: left; font-size: 0px; background-color: " + settings.bgColor + "; height: " + mh + "px; width: &Wpx\"></div>";
	      var bar1 = "<div style=\"float: left; font-size: 0px; width:0; border-left: &Wpx solid " + settings.color + "; height: " + mh + "px;\"></div>";
	
	      var len, current;
	      for (var y = 0; y < lines; y++) {
	        len = 0;
	        current = digit[y][0];
	        for (var x = 0; x < columns; x++) {
	          if (current == digit[y][x]) {
	            len++;
	          } else {
	            content += (current == '0' ? bar0 : bar1).replace("&W", len * mw);
	            current = digit[y][x];
	            len = 1;
	          }
	        }
	        if (len > 0) {
	          content += (current == '0' ? bar0 : bar1).replace("&W", len * mw);
	        }
	      }
	      if (settings.showHRI) {
	        content += "<div style=\"clear:both; width: 100%; background-color: " + settings.bgColor + "; color: " + settings.color + "; text-align: center; font-size: " + settings.fontSize + "px; margin-top: " + settings.marginHRI + "px;\">" + hri + "</div>";
	      }
	      this.resize($container, mw * columns).html(content);
	    },
	    // css 1D barcode renderer
	    digitToCss: function digitToCss($container, settings, digit, hri) {
	      var w = _barcode.intval(settings.barWidth);
	      var h = _barcode.intval(settings.barHeight);
	      this.digitToCssRenderer($container, settings, this.bitStringTo2DArray(digit), hri, w, h);
	    },
	    // css 2D barcode renderer
	    digitToCss2D: function digitToCss2D($container, settings, digit, hri) {
	      var s = _barcode.intval(settings.moduleSize);
	      this.digitToCssRenderer($container, settings, digit, hri, s, s);
	    },
	    // svg barcode renderer
	    digitToSvgRenderer: function digitToSvgRenderer($container, settings, digit, hri, mw, mh) {
	      var lines = digit.length;
	      var columns = digit[0].length;
	
	      var width = mw * columns;
	      var height = mh * lines;
	      if (settings.showHRI) {
	        var fontSize = _barcode.intval(settings.fontSize);
	        height += _barcode.intval(settings.marginHRI) + fontSize;
	      }
	
	      // svg header
	      var svg = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + width + '" height="' + height + '">';
	
	      // background
	      svg += '<rect width="' + width + '" height="' + height + '" x="0" y="0" fill="' + settings.bgColor + '" />';
	
	      var bar1 = '<rect width="&W" height="' + mh + '" x="&X" y="&Y" fill="' + settings.color + '" />';
	
	      var len, current;
	      for (var y = 0; y < lines; y++) {
	        len = 0;
	        current = digit[y][0];
	        for (var x = 0; x < columns; x++) {
	          if (current == digit[y][x]) {
	            len++;
	          } else {
	            if (current == '1') {
	              svg += bar1.replace("&W", len * mw).replace("&X", (x - len) * mw).replace("&Y", y * mh);
	            }
	            current = digit[y][x];
	            len = 1;
	          }
	        }
	        if (len > 0 && current == '1') {
	          svg += bar1.replace("&W", len * mw).replace("&X", (columns - len) * mw).replace("&Y", y * mh);
	        }
	      }
	
	      if (settings.showHRI) {
	        svg += '<g transform="translate(' + Math.floor(width / 2) + ' 0)">';
	        svg += '<text y="' + (height - Math.floor(fontSize / 2)) + '" text-anchor="middle" style="font-family: Arial; font-size: ' + fontSize + 'px;" fill="' + settings.color + '">' + hri + '</text>';
	        svg += '</g>';
	      }
	      // svg footer
	      svg += '</svg>';
	
	      // create a dom object, flush container and add object to the container
	      var object = document.createElement('object');
	      object.setAttribute('type', 'image/svg+xml');
	      object.setAttribute('data', 'data:image/svg+xml,' + svg);
	      this.resize($container, width).append(object);
	    },
	    // svg 1D barcode renderer
	    digitToSvg: function digitToSvg($container, settings, digit, hri) {
	      var w = _barcode.intval(settings.barWidth);
	      var h = _barcode.intval(settings.barHeight);
	      this.digitToSvgRenderer($container, settings, this.bitStringTo2DArray(digit), hri, w, h);
	    },
	    // svg 2D barcode renderer
	    digitToSvg2D: function digitToSvg2D($container, settings, digit, hri) {
	      var s = _barcode.intval(settings.moduleSize);
	      this.digitToSvgRenderer($container, settings, digit, hri, s, s);
	    },
	
	    // canvas barcode renderer
	    digitToCanvasRenderer: function digitToCanvasRenderer($container, settings, digit, hri, xi, yi, mw, mh) {
	      var canvas = $container.get(0);
	      if (!canvas || !canvas.getContext) return; // not compatible
	
	      var lines = digit.length;
	      var columns = digit[0].length;
	
	      var ctx = canvas.getContext('2d');
	      ctx.lineWidth = 1;
	      ctx.lineCap = 'butt';
	      ctx.fillStyle = settings.bgColor;
	      ctx.fillRect(xi, yi, columns * mw, lines * mh);
	
	      ctx.fillStyle = settings.color;
	
	      for (var y = 0; y < lines; y++) {
	        var len = 0;
	        var current = digit[y][0];
	        for (var x = 0; x < columns; x++) {
	          if (current == digit[y][x]) {
	            len++;
	          } else {
	            if (current == '1') {
	              ctx.fillRect(xi + (x - len) * mw, yi + y * mh, mw * len, mh);
	            }
	            current = digit[y][x];
	            len = 1;
	          }
	        }
	        if (len > 0 && current == '1') {
	          ctx.fillRect(xi + (columns - len) * mw, yi + y * mh, mw * len, mh);
	        }
	      }
	      if (settings.showHRI) {
	        var dim = ctx.measureText(hri);
	        ctx.fillText(hri, xi + Math.floor((columns * mw - dim.width) / 2), yi + lines * mh + settings.fontSize + settings.marginHRI);
	      }
	    },
	    // canvas 1D barcode renderer
	    digitToCanvas: function digitToCanvas($container, settings, digit, hri) {
	      var w = _barcode.intval(settings.barWidth);
	      var h = _barcode.intval(settings.barHeight);
	      var x = _barcode.intval(settings.posX);
	      var y = _barcode.intval(settings.posY);
	      this.digitToCanvasRenderer($container, settings, this.bitStringTo2DArray(digit), hri, x, y, w, h);
	    },
	    // canvas 2D barcode renderer
	    digitToCanvas2D: function digitToCanvas2D($container, settings, digit, hri) {
	      var s = _barcode.intval(settings.moduleSize);
	      var x = _barcode.intval(settings.posX);
	      var y = _barcode.intval(settings.posY);
	      this.digitToCanvasRenderer($container, settings, digit, hri, x, y, s, s);
	    }
	  };
	
	  $.fn.extend({
	    barcode: function barcode(datas, type, settings) {
	      var digit = "",
	          hri = "",
	          code = "",
	          crc = true,
	          rect = false,
	          b2d = false;
	
	      if (typeof datas == "string") {
	        code = datas;
	      } else if ((typeof datas === "undefined" ? "undefined" : _typeof(datas)) == "object") {
	        code = typeof datas.code == "string" ? datas.code : "";
	        crc = typeof datas.crc != "undefined" ? datas.crc : true;
	        rect = typeof datas.rect != "undefined" ? datas.rect : false;
	      }
	      if (code == "") return false;
	
	      if (typeof settings == "undefined") settings = [];
	      for (var name in _barcode.settings) {
	        if (settings[name] == undefined) settings[name] = _barcode.settings[name];
	      }
	
	      switch (type) {
	        case "std25":
	        case "int25":
	          digit = _barcode.i25.getDigit(code, crc, type);
	          hri = _barcode.i25.compute(code, crc, type);
	          break;
	        case "ean8":
	        case "ean13":
	          digit = _barcode.ean.getDigit(code, type);
	          hri = _barcode.ean.compute(code, type);
	          break;
	        case "upc":
	          digit = _barcode.upc.getDigit(code);
	          hri = _barcode.upc.compute(code);
	          break;
	        case "code11":
	          digit = _barcode.code11.getDigit(code);
	          hri = code;
	          break;
	        case "code39":
	          digit = _barcode.code39.getDigit(code);
	          hri = code;
	          break;
	        case "code93":
	          digit = _barcode.code93.getDigit(code, crc);
	          hri = code;
	          break;
	        case "code128":
	          digit = _barcode.code128.getDigit(code);
	          hri = code;
	          break;
	        case "codabar":
	          digit = _barcode.codabar.getDigit(code);
	          hri = code;
	          break;
	        case "msi":
	          digit = _barcode.msi.getDigit(code, crc);
	          hri = _barcode.msi.compute(code, crc);
	          break;
	        case "datamatrix":
	          digit = _barcode.datamatrix.getDigit(code, rect);
	          hri = code;
	          b2d = true;
	          break;
	      }
	      if (digit.length == 0) return $(this);
	
	      // Quiet Zone
	      if (!b2d && settings.addQuietZone) digit = "0000000000" + digit + "0000000000";
	
	      var $this = $(this);
	      var fname = 'digitTo' + settings.output.charAt(0).toUpperCase() + settings.output.substr(1) + (b2d ? '2D' : '');
	      if (typeof _barcode[fname] == 'function') {
	        _barcode[fname]($this, settings, digit, hri);
	      }
	
	      return $this;
	    }
	  });
	})(jQuery);

/***/ }

/******/ });
//# sourceMappingURL=vendors.js.map