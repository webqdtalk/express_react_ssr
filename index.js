module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

var _server = __webpack_require__(11);

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
  var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_index2.default, null));
  res.render('index', { title: "服务端渲染", content: html });
});

router.get('/api/getLeftContent', function (req, res, next) {
  res.send("左边tab内容");
});
router.get('/api/getRightContent', function (req, res, next) {
  res.send("右边tab内容----");
});
module.exports = router;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _switchtab = __webpack_require__(6);

var _switchtab2 = _interopRequireDefault(_switchtab);

var _ssrplugin = __webpack_require__(9);

var _ssrplugin2 = _interopRequireDefault(_ssrplugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//前端和服务端渲染组件的入口组件,可在此处处理服务端数据
var App = function (_Component) {
	_inherits(App, _Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(App, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(_switchtab2.default, { data: {} }),
				_react2.default.createElement(_ssrplugin2.default, { data: {} })
			);
		}
	}]);

	return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

try {
  __webpack_require__(8); //因服务端渲染不需要scss文件，但webpack仍会处理scss文件，打包scss会出错，此处需要作为容错处理
} catch (e) {
  console.log(e.message);
}

var Switch_tab = function (_React$Component) {
  _inherits(Switch_tab, _React$Component);

  function Switch_tab(props) {
    _classCallCheck(this, Switch_tab);

    // 设置 initial state
    var _this = _possibleConstructorReturn(this, (Switch_tab.__proto__ || Object.getPrototypeOf(Switch_tab)).call(this, props));

    _this.state = {
      text: "暂无内容,因为我是首屏数据",
      nowSelect: "0"
    };
    return _this;
  }

  _createClass(Switch_tab, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleChange("0");
    }
  }, {
    key: 'handleChange',
    value: function handleChange(activeId) {
      var me = this,
          url = "/api/getLeftContent";
      activeId == "1" ? url = "/api/getRightContent" : null;
      _axios2.default.get(url).then(function (response) {
        console.log(response);
        me.setState({ text: response.data, nowSelect: activeId });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var me = this;
      return _react2.default.createElement(
        'div',
        { className: 'Switch_tab' },
        '\u8FD9\u91CC\u662F\u7EC4\u4EF6\u4E00\uFF0C\u7B80\u5355\u5B9E\u73B0ajax\u8BF7\u6C42tab\u6570\u636E',
        _react2.default.createElement(
          'div',
          { className: 'tab-head' },
          _react2.default.createElement(
            'a',
            { href: 'javascript:;', className: this.state.nowSelect == "0" ? "tab-item active" : "tab-item", onClick: this.handleChange.bind(this, "0") },
            this.props.leftBtnText || "左边tab"
          ),
          _react2.default.createElement(
            'a',
            { href: 'javascript:;', className: this.state.nowSelect == "1" ? "tab-item active" : "tab-item", onClick: this.handleChange.bind(this, "1") },
            this.props.rightBtnText || "右边tab"
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'content' },
          this.state.text
        )
      );
    }
  }]);

  return Switch_tab;
}(_react2.default.Component);

exports.default = Switch_tab;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

try {
  __webpack_require__(10);
} catch (e) {}

var Ssrplugin = function (_React$Component) {
  _inherits(Ssrplugin, _React$Component);

  function Ssrplugin(props) {
    _classCallCheck(this, Ssrplugin);

    // 设置 initial state
    var _this = _possibleConstructorReturn(this, (Ssrplugin.__proto__ || Object.getPrototypeOf(Ssrplugin)).call(this, props));

    _this.state = {
      text: "这里是组件二，可在查看源文件中找到我，便于seo"
    };
    return _this;
  }

  _createClass(Ssrplugin, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Ssrplugin', onClick: this.handleChange },
        this.state.text
      );
    }
  }]);

  return Ssrplugin;
}(_react2.default.Component);

exports.default = Ssrplugin;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(12);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(13);
} else {
  module.exports = __webpack_require__(14);
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-dom-server.node.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var p = __webpack_require__(1),
    q = __webpack_require__(0),
    aa = __webpack_require__(2);function ba(a, b, d, c, f, e, h, g) {
  if (!a) {
    a = void 0;if (void 0 === b) a = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
      var D = [d, c, f, e, h, g],
          B = 0;a = Error(b.replace(/%s/g, function () {
        return D[B++];
      }));a.name = "Invariant Violation";
    }a.framesToPop = 1;throw a;
  }
}
function r(a) {
  for (var b = arguments.length - 1, d = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 0; c < b; c++) {
    d += "&args[]=" + encodeURIComponent(arguments[c + 1]);
  }ba(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", d);
}
var v = "function" === typeof Symbol && Symbol.for,
    ca = v ? Symbol.for("react.portal") : 60106,
    x = v ? Symbol.for("react.fragment") : 60107,
    da = v ? Symbol.for("react.strict_mode") : 60108,
    ea = v ? Symbol.for("react.profiler") : 60114,
    z = v ? Symbol.for("react.provider") : 60109,
    fa = v ? Symbol.for("react.context") : 60110,
    ha = v ? Symbol.for("react.concurrent_mode") : 60111,
    ia = v ? Symbol.for("react.forward_ref") : 60112,
    A = v ? Symbol.for("react.suspense") : 60113,
    ja = v ? Symbol.for("react.memo") : 60115,
    ka = v ? Symbol.for("react.lazy") : 60116;
function C(a) {
  if (null == a) return null;if ("function" === typeof a) return a.displayName || a.name || null;if ("string" === typeof a) return a;switch (a) {case ha:
      return "ConcurrentMode";case x:
      return "Fragment";case ca:
      return "Portal";case ea:
      return "Profiler";case da:
      return "StrictMode";case A:
      return "Suspense";}if ("object" === (typeof a === "undefined" ? "undefined" : _typeof(a))) switch (a.$$typeof) {case fa:
      return "Context.Consumer";case z:
      return "Context.Provider";case ia:
      var b = a.render;b = b.displayName || b.name || "";return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");case ja:
      return C(a.type);case ka:
      if (a = 1 === a._status ? a._result : null) return C(a);}return null;
}var E = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;E.hasOwnProperty("ReactCurrentDispatcher") || (E.ReactCurrentDispatcher = { current: null });var la = {};function F(a, b) {
  for (var d = a._threadCount | 0; d <= b; d++) {
    a[d] = a._currentValue2, a._threadCount = d + 1;
  }
}
function ma(a, b, d) {
  var c = a.contextType;if ("object" === (typeof c === "undefined" ? "undefined" : _typeof(c)) && null !== c) return F(c, d), c[d];if (a = a.contextTypes) {
    d = {};for (var f in a) {
      d[f] = b[f];
    }b = d;
  } else b = la;return b;
}for (var G = new Uint16Array(16), H = 0; 15 > H; H++) {
  G[H] = H + 1;
}G[15] = 0;
var na = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    oa = Object.prototype.hasOwnProperty,
    pa = {},
    qa = {};
function ra(a) {
  if (oa.call(qa, a)) return !0;if (oa.call(pa, a)) return !1;if (na.test(a)) return qa[a] = !0;pa[a] = !0;return !1;
}function sa(a, b, d, c) {
  if (null !== d && 0 === d.type) return !1;switch (typeof b === "undefined" ? "undefined" : _typeof(b)) {case "function":case "symbol":
      return !0;case "boolean":
      if (c) return !1;if (null !== d) return !d.acceptsBooleans;a = a.toLowerCase().slice(0, 5);return "data-" !== a && "aria-" !== a;default:
      return !1;}
}
function ta(a, b, d, c) {
  if (null === b || "undefined" === typeof b || sa(a, b, d, c)) return !0;if (c) return !1;if (null !== d) switch (d.type) {case 3:
      return !b;case 4:
      return !1 === b;case 5:
      return isNaN(b);case 6:
      return isNaN(b) || 1 > b;}return !1;
}function I(a, b, d, c, f) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;this.attributeName = c;this.attributeNamespace = f;this.mustUseProperty = d;this.propertyName = a;this.type = b;
}var J = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
  J[a] = new I(a, 0, !1, a, null);
});[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
  var b = a[0];J[b] = new I(b, 1, !1, a[1], null);
});["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
  J[a] = new I(a, 2, !1, a.toLowerCase(), null);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
  J[a] = new I(a, 2, !1, a, null);
});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
  J[a] = new I(a, 3, !1, a.toLowerCase(), null);
});["checked", "multiple", "muted", "selected"].forEach(function (a) {
  J[a] = new I(a, 3, !0, a, null);
});
["capture", "download"].forEach(function (a) {
  J[a] = new I(a, 4, !1, a, null);
});["cols", "rows", "size", "span"].forEach(function (a) {
  J[a] = new I(a, 6, !1, a, null);
});["rowSpan", "start"].forEach(function (a) {
  J[a] = new I(a, 5, !1, a.toLowerCase(), null);
});var K = /[\-:]([a-z])/g;function L(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
  var b = a.replace(K, L);J[b] = new I(b, 1, !1, a, null);
});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
  var b = a.replace(K, L);J[b] = new I(b, 1, !1, a, "http://www.w3.org/1999/xlink");
});["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
  var b = a.replace(K, L);J[b] = new I(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace");
});["tabIndex", "crossOrigin"].forEach(function (a) {
  J[a] = new I(a, 1, !1, a.toLowerCase(), null);
});var ua = /["'&<>]/;
function M(a) {
  if ("boolean" === typeof a || "number" === typeof a) return "" + a;a = "" + a;var b = ua.exec(a);if (b) {
    var d = "",
        c,
        f = 0;for (c = b.index; c < a.length; c++) {
      switch (a.charCodeAt(c)) {case 34:
          b = "&quot;";break;case 38:
          b = "&amp;";break;case 39:
          b = "&#x27;";break;case 60:
          b = "&lt;";break;case 62:
          b = "&gt;";break;default:
          continue;}f !== c && (d += a.substring(f, c));f = c + 1;d += b;
    }a = f !== c ? d + a.substring(f, c) : d;
  }return a;
}var N = null,
    O = null,
    P = null,
    Q = !1,
    S = !1,
    T = null,
    U = 0;function V() {
  null === N ? r("321") : void 0;return N;
}
function va() {
  0 < U && r("312");return { memoizedState: null, queue: null, next: null };
}function W() {
  null === P ? null === O ? (Q = !1, O = P = va()) : (Q = !0, P = O) : null === P.next ? (Q = !1, P = P.next = va()) : (Q = !0, P = P.next);return P;
}function wa(a, b, d, c) {
  for (; S;) {
    S = !1, U += 1, P = null, d = a(b, c);
  }O = N = null;U = 0;P = T = null;return d;
}function xa(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function ya(a, b, d) {
  N = V();P = W();if (Q) {
    var c = P.queue;b = c.dispatch;if (null !== T && (d = T.get(c), void 0 !== d)) {
      T.delete(c);c = P.memoizedState;do {
        c = a(c, d.action), d = d.next;
      } while (null !== d);P.memoizedState = c;return [c, b];
    }return [P.memoizedState, b];
  }a = a === xa ? "function" === typeof b ? b() : b : void 0 !== d ? d(b) : b;P.memoizedState = a;a = P.queue = { last: null, dispatch: null };a = a.dispatch = za.bind(null, N, a);return [P.memoizedState, a];
}
function za(a, b, d) {
  25 > U ? void 0 : r("301");if (a === N) if (S = !0, a = { action: d, next: null }, null === T && (T = new Map()), d = T.get(b), void 0 === d) T.set(b, a);else {
    for (b = d; null !== b.next;) {
      b = b.next;
    }b.next = a;
  }
}function Aa() {}
var X = 0,
    Ba = { readContext: function readContext(a) {
    var b = X;F(a, b);return a[b];
  }, useContext: function useContext(a) {
    V();var b = X;F(a, b);return a[b];
  }, useMemo: function useMemo(a, b) {
    N = V();P = W();b = void 0 === b ? null : b;if (null !== P) {
      var d = P.memoizedState;if (null !== d && null !== b) {
        a: {
          var c = d[1];if (null === c) c = !1;else {
            for (var f = 0; f < c.length && f < b.length; f++) {
              var e = b[f],
                  h = c[f];if ((e !== h || 0 === e && 1 / e !== 1 / h) && (e === e || h === h)) {
                c = !1;break a;
              }
            }c = !0;
          }
        }if (c) return d[0];
      }
    }a = a();P.memoizedState = [a, b];return a;
  }, useReducer: ya, useRef: function useRef(a) {
    N = V();P = W();var b = P.memoizedState;
    return null === b ? (a = { current: a }, P.memoizedState = a) : b;
  }, useState: function useState(a) {
    return ya(xa, a);
  }, useLayoutEffect: function useLayoutEffect() {}, useCallback: function useCallback(a) {
    return a;
  }, useImperativeHandle: Aa, useEffect: Aa, useDebugValue: Aa },
    Ca = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };function Da(a) {
  switch (a) {case "svg":
      return "http://www.w3.org/2000/svg";case "math":
      return "http://www.w3.org/1998/Math/MathML";default:
      return "http://www.w3.org/1999/xhtml";}
}
var Ea = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 },
    Fa = p({ menuitem: !0 }, Ea),
    Y = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0,
  gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
    Ga = ["Webkit", "ms", "Moz", "O"];Object.keys(Y).forEach(function (a) {
  Ga.forEach(function (b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);Y[b] = Y[a];
  });
});
var Ha = /([A-Z])/g,
    Ia = /^ms-/,
    Z = q.Children.toArray,
    Ja = E.ReactCurrentDispatcher,
    Ka = { listing: !0, pre: !0, textarea: !0 },
    La = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
    Ma = {},
    Na = {};function Oa(a) {
  if (void 0 === a || null === a) return a;var b = "";q.Children.forEach(a, function (a) {
    null != a && (b += a);
  });return b;
}var Pa = Object.prototype.hasOwnProperty,
    Qa = { children: null, dangerouslySetInnerHTML: null, suppressContentEditableWarning: null, suppressHydrationWarning: null };function Ra(a, b) {
  void 0 === a && r("152", C(b) || "Component");
}
function Sa(a, b, d) {
  function c(c, f) {
    var e = ma(f, b, d),
        g = [],
        h = !1,
        l = { isMounted: function isMounted() {
        return !1;
      }, enqueueForceUpdate: function enqueueForceUpdate() {
        if (null === g) return null;
      }, enqueueReplaceState: function enqueueReplaceState(a, b) {
        h = !0;g = [b];
      }, enqueueSetState: function enqueueSetState(a, b) {
        if (null === g) return null;g.push(b);
      } },
        k = void 0;if (f.prototype && f.prototype.isReactComponent) {
      if (k = new f(c.props, e, l), "function" === typeof f.getDerivedStateFromProps) {
        var t = f.getDerivedStateFromProps.call(null, c.props, k.state);null != t && (k.state = p({}, k.state, t));
      }
    } else if (N = {}, k = f(c.props, e, l), k = wa(f, c.props, k, e), null == k || null == k.render) {
      a = k;Ra(a, f);return;
    }k.props = c.props;k.context = e;k.updater = l;l = k.state;void 0 === l && (k.state = l = null);if ("function" === typeof k.UNSAFE_componentWillMount || "function" === typeof k.componentWillMount) if ("function" === typeof k.componentWillMount && "function" !== typeof f.getDerivedStateFromProps && k.componentWillMount(), "function" === typeof k.UNSAFE_componentWillMount && "function" !== typeof f.getDerivedStateFromProps && k.UNSAFE_componentWillMount(), g.length) {
      l = g;var m = h;g = null;h = !1;if (m && 1 === l.length) k.state = l[0];else {
        t = m ? l[0] : k.state;var u = !0;for (m = m ? 1 : 0; m < l.length; m++) {
          var w = l[m];w = "function" === typeof w ? w.call(k, t, c.props, e) : w;null != w && (u ? (u = !1, t = p({}, t, w)) : p(t, w));
        }k.state = t;
      }
    } else g = null;a = k.render();Ra(a, f);c = void 0;if ("function" === typeof k.getChildContext && (e = f.childContextTypes, "object" === (typeof e === "undefined" ? "undefined" : _typeof(e)))) {
      c = k.getChildContext();for (var R in c) {
        R in e ? void 0 : r("108", C(f) || "Unknown", R);
      }
    }c && (b = p({}, b, c));
  }for (; q.isValidElement(a);) {
    var f = a,
        e = f.type;if ("function" !== typeof e) break;
    c(f, e);
  }return { child: a, context: b };
}
var Ta = function () {
  function a(b, d) {
    if (!(this instanceof a)) throw new TypeError("Cannot call a class as a function");q.isValidElement(b) ? b.type !== x ? b = [b] : (b = b.props.children, b = q.isValidElement(b) ? [b] : Z(b)) : b = Z(b);b = { type: null, domNamespace: Ca.html, children: b, childIndex: 0, context: la, footer: "" };var c = G[0];if (0 === c) {
      var f = G;c = f.length;var e = 2 * c;65536 >= e ? void 0 : r("304");var h = new Uint16Array(e);h.set(f);G = h;G[0] = c + 1;for (f = c; f < e - 1; f++) {
        G[f] = f + 1;
      }G[e - 1] = 0;
    } else G[0] = G[c];this.threadID = c;this.stack = [b];this.exhausted = !1;this.currentSelectValue = null;this.previousWasTextNode = !1;this.makeStaticMarkup = d;this.suspenseDepth = 0;this.contextIndex = -1;this.contextStack = [];this.contextValueStack = [];
  }a.prototype.destroy = function () {
    if (!this.exhausted) {
      this.exhausted = !0;this.clearProviders();var a = this.threadID;G[a] = G[0];G[0] = a;
    }
  };a.prototype.pushProvider = function (a) {
    var b = ++this.contextIndex,
        c = a.type._context,
        f = this.threadID;F(c, f);var e = c[f];this.contextStack[b] = c;this.contextValueStack[b] = e;c[f] = a.props.value;
  };a.prototype.popProvider = function () {
    var a = this.contextIndex,
        d = this.contextStack[a],
        c = this.contextValueStack[a];this.contextStack[a] = null;this.contextValueStack[a] = null;this.contextIndex--;d[this.threadID] = c;
  };a.prototype.clearProviders = function () {
    for (var a = this.contextIndex; 0 <= a; a--) {
      this.contextStack[a][this.threadID] = this.contextValueStack[a];
    }
  };a.prototype.read = function (a) {
    if (this.exhausted) return null;var b = X;X = this.threadID;var c = Ja.current;Ja.current = Ba;try {
      for (var f = [""], e = !1; f[0].length < a;) {
        if (0 === this.stack.length) {
          this.exhausted = !0;var h = this.threadID;G[h] = G[0];G[0] = h;break;
        }var g = this.stack[this.stack.length - 1];if (e || g.childIndex >= g.children.length) {
          var D = g.footer;"" !== D && (this.previousWasTextNode = !1);this.stack.pop();if ("select" === g.type) this.currentSelectValue = null;else if (null != g.type && null != g.type.type && g.type.type.$$typeof === z) this.popProvider(g.type);else if (g.type === A) {
            this.suspenseDepth--;var B = f.pop();if (e) {
              e = !1;var n = g.fallbackFrame;n ? void 0 : r("303");this.stack.push(n);continue;
            } else f[this.suspenseDepth] += B;
          }f[this.suspenseDepth] += D;
        } else {
          var l = g.children[g.childIndex++],
              k = "";try {
            k += this.render(l, g.context, g.domNamespace);
          } catch (t) {
            throw t;
          } finally {}f.length <= this.suspenseDepth && f.push("");f[this.suspenseDepth] += k;
        }
      }return f[0];
    } finally {
      Ja.current = c, X = b;
    }
  };a.prototype.render = function (a, d, c) {
    if ("string" === typeof a || "number" === typeof a) {
      c = "" + a;if ("" === c) return "";if (this.makeStaticMarkup) return M(c);if (this.previousWasTextNode) return "\x3c!-- --\x3e" + M(c);this.previousWasTextNode = !0;return M(c);
    }d = Sa(a, d, this.threadID);a = d.child;d = d.context;
    if (null === a || !1 === a) return "";if (!q.isValidElement(a)) {
      if (null != a && null != a.$$typeof) {
        var b = a.$$typeof;b === ca ? r("257") : void 0;r("258", b.toString());
      }a = Z(a);this.stack.push({ type: null, domNamespace: c, children: a, childIndex: 0, context: d, footer: "" });return "";
    }b = a.type;if ("string" === typeof b) return this.renderDOM(a, d, c);switch (b) {case da:case ha:case ea:case x:
        return a = Z(a.props.children), this.stack.push({ type: null, domNamespace: c, children: a, childIndex: 0, context: d, footer: "" }), "";case A:
        r("294");}if ("object" === (typeof b === "undefined" ? "undefined" : _typeof(b)) && null !== b) switch (b.$$typeof) {case ia:
        N = {};var e = b.render(a.props, a.ref);e = wa(b.render, a.props, e, a.ref);e = Z(e);this.stack.push({ type: null, domNamespace: c, children: e, childIndex: 0, context: d, footer: "" });return "";case ja:
        return a = [q.createElement(b.type, p({ ref: a.ref }, a.props))], this.stack.push({ type: null, domNamespace: c, children: a, childIndex: 0, context: d, footer: "" }), "";case z:
        return b = Z(a.props.children), c = { type: a, domNamespace: c, children: b, childIndex: 0, context: d, footer: "" }, this.pushProvider(a), this.stack.push(c), "";case fa:
        b = a.type;e = a.props;var h = this.threadID;F(b, h);b = Z(e.children(b[h]));this.stack.push({ type: a, domNamespace: c, children: b, childIndex: 0, context: d, footer: "" });return "";case ka:
        r("295");}r("130", null == b ? b : typeof b === "undefined" ? "undefined" : _typeof(b), "");
  };a.prototype.renderDOM = function (a, d, c) {
    var b = a.type.toLowerCase();c === Ca.html && Da(b);Ma.hasOwnProperty(b) || (La.test(b) ? void 0 : r("65", b), Ma[b] = !0);var e = a.props;if ("input" === b) e = p({ type: void 0 }, e, { defaultChecked: void 0, defaultValue: void 0, value: null != e.value ? e.value : e.defaultValue,
      checked: null != e.checked ? e.checked : e.defaultChecked });else if ("textarea" === b) {
      var h = e.value;if (null == h) {
        h = e.defaultValue;var g = e.children;null != g && (null != h ? r("92") : void 0, Array.isArray(g) && (1 >= g.length ? void 0 : r("93"), g = g[0]), h = "" + g);null == h && (h = "");
      }e = p({}, e, { value: void 0, children: "" + h });
    } else if ("select" === b) this.currentSelectValue = null != e.value ? e.value : e.defaultValue, e = p({}, e, { value: void 0 });else if ("option" === b) {
      g = this.currentSelectValue;var D = Oa(e.children);if (null != g) {
        var B = null != e.value ? e.value + "" : D;h = !1;if (Array.isArray(g)) for (var n = 0; n < g.length; n++) {
          if ("" + g[n] === B) {
            h = !0;break;
          }
        } else h = "" + g === B;e = p({ selected: void 0, children: void 0 }, e, { selected: h, children: D });
      }
    }if (h = e) Fa[b] && (null != h.children || null != h.dangerouslySetInnerHTML ? r("137", b, "") : void 0), null != h.dangerouslySetInnerHTML && (null != h.children ? r("60") : void 0, "object" === _typeof(h.dangerouslySetInnerHTML) && "__html" in h.dangerouslySetInnerHTML ? void 0 : r("61")), null != h.style && "object" !== _typeof(h.style) ? r("62", "") : void 0;h = e;g = this.makeStaticMarkup;
    D = 1 === this.stack.length;B = "<" + a.type;for (y in h) {
      if (Pa.call(h, y)) {
        var l = h[y];if (null != l) {
          if ("style" === y) {
            n = void 0;var k = "",
                t = "";for (n in l) {
              if (l.hasOwnProperty(n)) {
                var m = 0 === n.indexOf("--"),
                    u = l[n];if (null != u) {
                  var w = n;if (Na.hasOwnProperty(w)) w = Na[w];else {
                    var R = w.replace(Ha, "-$1").toLowerCase().replace(Ia, "-ms-");w = Na[w] = R;
                  }k += t + w + ":";t = n;m = null == u || "boolean" === typeof u || "" === u ? "" : m || "number" !== typeof u || 0 === u || Y.hasOwnProperty(t) && Y[t] ? ("" + u).trim() : u + "px";k += m;t = ";";
                }
              }
            }l = k || null;
          }n = null;b: if (m = b, u = h, -1 === m.indexOf("-")) m = "string" === typeof u.is;else switch (m) {case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":
              m = !1;break b;default:
              m = !0;}if (m) Qa.hasOwnProperty(y) || (n = y, n = ra(n) && null != l ? n + "=" + ('"' + M(l) + '"') : "");else {
            m = y;n = l;l = J.hasOwnProperty(m) ? J[m] : null;if (u = "style" !== m) u = null !== l ? 0 === l.type : !(2 < m.length) || "o" !== m[0] && "O" !== m[0] || "n" !== m[1] && "N" !== m[1] ? !1 : !0;u || ta(m, n, l, !1) ? n = "" : null !== l ? (m = l.attributeName, l = l.type, n = 3 === l || 4 === l && !0 === n ? m + '=""' : m + "=" + ('"' + M(n) + '"')) : n = ra(m) ? m + "=" + ('"' + M(n) + '"') : "";
          }n && (B += " " + n);
        }
      }
    }g || D && (B += ' data-reactroot=""');var y = B;h = "";Ea.hasOwnProperty(b) ? y += "/>" : (y += ">", h = "</" + a.type + ">");a: {
      g = e.dangerouslySetInnerHTML;if (null != g) {
        if (null != g.__html) {
          g = g.__html;break a;
        }
      } else if (g = e.children, "string" === typeof g || "number" === typeof g) {
        g = M(g);break a;
      }g = null;
    }null != g ? (e = [], Ka[b] && "\n" === g.charAt(0) && (y += "\n"), y += g) : e = Z(e.children);a = a.type;c = null == c || "http://www.w3.org/1999/xhtml" === c ? Da(a) : "http://www.w3.org/2000/svg" === c && "foreignObject" === a ? "http://www.w3.org/1999/xhtml" : c;this.stack.push({ domNamespace: c, type: b, children: e, childIndex: 0, context: d, footer: h });this.previousWasTextNode = !1;return y;
  };return a;
}();
function Ua(a, b) {
  if ("function" !== typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + (typeof b === "undefined" ? "undefined" : _typeof(b)));a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } });b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b);
}
var Va = function (a) {
  function b(d, c) {
    if (!(this instanceof b)) throw new TypeError("Cannot call a class as a function");var f = a.call(this, {});if (!this) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");f = !f || "object" !== (typeof f === "undefined" ? "undefined" : _typeof(f)) && "function" !== typeof f ? this : f;f.partialRenderer = new Ta(d, c);return f;
  }Ua(b, a);b.prototype._destroy = function (a, b) {
    this.partialRenderer.destroy();b(a);
  };b.prototype._read = function (a) {
    try {
      this.push(this.partialRenderer.read(a));
    } catch (c) {
      this.destroy(c);
    }
  };
  return b;
}(aa.Readable),
    Wa = { renderToString: function renderToString(a) {
    a = new Ta(a, !1);try {
      return a.read(Infinity);
    } finally {
      a.destroy();
    }
  }, renderToStaticMarkup: function renderToStaticMarkup(a) {
    a = new Ta(a, !0);try {
      return a.read(Infinity);
    } finally {
      a.destroy();
    }
  }, renderToNodeStream: function renderToNodeStream(a) {
    return new Va(a, !1);
  }, renderToStaticNodeStream: function renderToStaticNodeStream(a) {
    return new Va(a, !0);
  }, version: "16.8.6" },
    Xa = { default: Wa },
    Ya = Xa && Wa || Xa;module.exports = Ya.default || Ya;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-dom-server.node.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (process.env.NODE_ENV !== "production") {
  (function () {
    'use strict';

    var _assign = __webpack_require__(1);
    var React = __webpack_require__(0);
    var checkPropTypes = __webpack_require__(15);
    var stream = __webpack_require__(2);

    // TODO: this is special because it gets imported during build.

    var ReactVersion = '16.8.6';

    /**
     * Use invariant() to assert state which your program assumes to be true.
     *
     * Provide sprintf-style format (only %s is supported) and arguments
     * to provide information about what broke and what you were
     * expecting.
     *
     * The invariant message will be stripped in production, but the invariant
     * will remain to ensure logic does not differ in production.
     */

    var validateFormat = function validateFormat() {};

    {
      validateFormat = function validateFormat(format) {
        if (format === undefined) {
          throw new Error('invariant requires an error message argument');
        }
      };
    }

    function invariant(condition, format, a, b, c, d, e, f) {
      validateFormat(format);

      if (!condition) {
        var error = void 0;
        if (format === undefined) {
          error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(format.replace(/%s/g, function () {
            return args[argIndex++];
          }));
          error.name = 'Invariant Violation';
        }

        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
      }
    }

    // Relying on the `invariant()` implementation lets us
    // preserve the format and params in the www builds.

    /**
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */

    var warningWithoutStack = function warningWithoutStack() {};

    {
      warningWithoutStack = function warningWithoutStack(condition, format) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        if (format === undefined) {
          throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (args.length > 8) {
          // Check before the condition to catch violations early.
          throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
        }
        if (condition) {
          return;
        }
        if (typeof console !== 'undefined') {
          var argsWithFormat = args.map(function (item) {
            return '' + item;
          });
          argsWithFormat.unshift('Warning: ' + format);

          // We intentionally don't use spread (or .apply) directly because it
          // breaks IE9: https://github.com/facebook/react/issues/13610
          Function.prototype.apply.call(console.error, console, argsWithFormat);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          var argIndex = 0;
          var message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
          });
          throw new Error(message);
        } catch (x) {}
      };
    }

    var warningWithoutStack$1 = warningWithoutStack;

    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var hasSymbol = typeof Symbol === 'function' && Symbol.for;

    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;

    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

    var Resolved = 1;

    function refineResolvedLazyComponent(lazyComponent) {
      return lazyComponent._status === Resolved ? lazyComponent._result : null;
    }

    function getWrappedName(outerType, innerType, wrapperName) {
      var functionName = innerType.displayName || innerType.name || '';
      return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
    }

    function getComponentName(type) {
      if (type == null) {
        // Host root, text node or just invalid type.
        return null;
      }
      {
        if (typeof type.tag === 'number') {
          warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
        }
      }
      if (typeof type === 'function') {
        return type.displayName || type.name || null;
      }
      if (typeof type === 'string') {
        return type;
      }
      switch (type) {
        case REACT_CONCURRENT_MODE_TYPE:
          return 'ConcurrentMode';
        case REACT_FRAGMENT_TYPE:
          return 'Fragment';
        case REACT_PORTAL_TYPE:
          return 'Portal';
        case REACT_PROFILER_TYPE:
          return 'Profiler';
        case REACT_STRICT_MODE_TYPE:
          return 'StrictMode';
        case REACT_SUSPENSE_TYPE:
          return 'Suspense';
      }
      if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object') {
        switch (type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            return 'Context.Consumer';
          case REACT_PROVIDER_TYPE:
            return 'Context.Provider';
          case REACT_FORWARD_REF_TYPE:
            return getWrappedName(type, type.render, 'ForwardRef');
          case REACT_MEMO_TYPE:
            return getComponentName(type.type);
          case REACT_LAZY_TYPE:
            {
              var thenable = type;
              var resolvedThenable = refineResolvedLazyComponent(thenable);
              if (resolvedThenable) {
                return getComponentName(resolvedThenable);
              }
            }
        }
      }
      return null;
    }

    /**
     * Forked from fbjs/warning:
     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
     *
     * Only change is we use console.warn instead of console.error,
     * and do nothing when 'console' is not supported.
     * This really simplifies the code.
     * ---
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */

    var lowPriorityWarning = function lowPriorityWarning() {};

    {
      var printWarning = function printWarning(format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
          console.warn(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarning = function lowPriorityWarning(condition, format) {
        if (format === undefined) {
          throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(undefined, [format].concat(args));
        }
      };
    }

    var lowPriorityWarning$1 = lowPriorityWarning;

    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

    // Prevent newer renderers from RTE when used with older react package versions.
    // Current owner and dispatcher used to share the same ref,
    // but PR #14548 split them out to better support the react-debug-tools package.
    if (!ReactSharedInternals.hasOwnProperty('ReactCurrentDispatcher')) {
      ReactSharedInternals.ReactCurrentDispatcher = {
        current: null
      };
    }

    /**
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */

    var warning = warningWithoutStack$1;

    {
      warning = function warning(condition, format) {
        if (condition) {
          return;
        }
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();
        // eslint-disable-next-line react-internal/warning-and-invariant-args

        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
      };
    }

    var warning$1 = warning;

    var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

    var describeComponentFrame = function describeComponentFrame(name, source, ownerName) {
      var sourceInfo = '';
      if (source) {
        var path = source.fileName;
        var fileName = path.replace(BEFORE_SLASH_RE, '');
        {
          // In DEV, include code for a common special case:
          // prefer "folder/index.js" instead of just "index.js".
          if (/^index\./.test(fileName)) {
            var match = path.match(BEFORE_SLASH_RE);
            if (match) {
              var pathBeforeSlash = match[1];
              if (pathBeforeSlash) {
                var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
                fileName = folderName + '/' + fileName;
              }
            }
          }
        }
        sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
      } else if (ownerName) {
        sourceInfo = ' (created by ' + ownerName + ')';
      }
      return '\n    in ' + (name || 'Unknown') + sourceInfo;
    };

    // Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


    // In some cases, StrictMode should also double-render lifecycles.
    // This can be confusing for tests though,
    // And it can be bad for performance in production.
    // This feature flag can be used to control the behavior:


    // To preserve the "Pause on caught exceptions" behavior of the debugger, we
    // replay the begin phase of a failed component inside invokeGuardedCallback.


    // Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:
    var warnAboutDeprecatedLifecycles = false;

    // Gather advanced timing metrics for Profiler subtrees.


    // Trace which interactions trigger each commit.


    // Only used in www builds.
    var enableSuspenseServerRenderer = false; // TODO: true? Here it might just be false.

    // Only used in www builds.


    // Only used in www builds.


    // React Fire: prevent the value and checked attributes from syncing
    // with their related DOM properties


    // These APIs will no longer be "unstable" in the upcoming 16.7 release,
    // Control this behavior with a flag to support 16.6 minor releases in the meanwhile.

    var ReactDebugCurrentFrame$1 = void 0;
    var didWarnAboutInvalidateContextType = void 0;
    {
      ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      didWarnAboutInvalidateContextType = new Set();
    }

    var emptyObject = {};
    {
      Object.freeze(emptyObject);
    }

    function maskContext(type, context) {
      var contextTypes = type.contextTypes;
      if (!contextTypes) {
        return emptyObject;
      }
      var maskedContext = {};
      for (var contextName in contextTypes) {
        maskedContext[contextName] = context[contextName];
      }
      return maskedContext;
    }

    function checkContextTypes(typeSpecs, values, location) {
      {
        checkPropTypes(typeSpecs, values, location, 'Component', ReactDebugCurrentFrame$1.getCurrentStack);
      }
    }

    function validateContextBounds(context, threadID) {
      // If we don't have enough slots in this context to store this threadID,
      // fill it in without leaving any holes to ensure that the VM optimizes
      // this as non-holey index properties.
      // (Note: If `react` package is < 16.6, _threadCount is undefined.)
      for (var i = context._threadCount | 0; i <= threadID; i++) {
        // We assume that this is the same as the defaultValue which might not be
        // true if we're rendering inside a secondary renderer but they are
        // secondary because these use cases are very rare.
        context[i] = context._currentValue2;
        context._threadCount = i + 1;
      }
    }

    function processContext(type, context, threadID) {
      var contextType = type.contextType;
      {
        if ('contextType' in type) {
          var isValid =
          // Allow null for conditional declaration
          contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined; // Not a <Context.Consumer>

          if (!isValid && !didWarnAboutInvalidateContextType.has(type)) {
            didWarnAboutInvalidateContextType.add(type);

            var addendum = '';
            if (contextType === undefined) {
              addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
            } else if ((typeof contextType === 'undefined' ? 'undefined' : _typeof(contextType)) !== 'object') {
              addendum = ' However, it is set to a ' + (typeof contextType === 'undefined' ? 'undefined' : _typeof(contextType)) + '.';
            } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
              addendum = ' Did you accidentally pass the Context.Provider instead?';
            } else if (contextType._context !== undefined) {
              // <Context.Consumer>
              addendum = ' Did you accidentally pass the Context.Consumer instead?';
            } else {
              addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
            }
            warningWithoutStack$1(false, '%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentName(type) || 'Component', addendum);
          }
        }
      }
      if ((typeof contextType === 'undefined' ? 'undefined' : _typeof(contextType)) === 'object' && contextType !== null) {
        validateContextBounds(contextType, threadID);
        return contextType[threadID];
      } else {
        var maskedContext = maskContext(type, context);
        {
          if (type.contextTypes) {
            checkContextTypes(type.contextTypes, maskedContext, 'context');
          }
        }
        return maskedContext;
      }
    }

    // Allocates a new index for each request. Tries to stay as compact as possible so that these
    // indices can be used to reference a tightly packaged array. As opposed to being used in a Map.
    // The first allocated index is 1.

    var nextAvailableThreadIDs = new Uint16Array(16);
    for (var i = 0; i < 15; i++) {
      nextAvailableThreadIDs[i] = i + 1;
    }
    nextAvailableThreadIDs[15] = 0;

    function growThreadCountAndReturnNextAvailable() {
      var oldArray = nextAvailableThreadIDs;
      var oldSize = oldArray.length;
      var newSize = oldSize * 2;
      !(newSize <= 0x10000) ? invariant(false, 'Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.') : void 0;
      var newArray = new Uint16Array(newSize);
      newArray.set(oldArray);
      nextAvailableThreadIDs = newArray;
      nextAvailableThreadIDs[0] = oldSize + 1;
      for (var _i = oldSize; _i < newSize - 1; _i++) {
        nextAvailableThreadIDs[_i] = _i + 1;
      }
      nextAvailableThreadIDs[newSize - 1] = 0;
      return oldSize;
    }

    function allocThreadID() {
      var nextID = nextAvailableThreadIDs[0];
      if (nextID === 0) {
        return growThreadCountAndReturnNextAvailable();
      }
      nextAvailableThreadIDs[0] = nextAvailableThreadIDs[nextID];
      return nextID;
    }

    function freeThreadID(id) {
      nextAvailableThreadIDs[id] = nextAvailableThreadIDs[0];
      nextAvailableThreadIDs[0] = id;
    }

    // A reserved attribute.
    // It is handled by React separately and shouldn't be written to the DOM.
    var RESERVED = 0;

    // A simple string attribute.
    // Attributes that aren't in the whitelist are presumed to have this type.
    var STRING = 1;

    // A string attribute that accepts booleans in React. In HTML, these are called
    // "enumerated" attributes with "true" and "false" as possible values.
    // When true, it should be set to a "true" string.
    // When false, it should be set to a "false" string.
    var BOOLEANISH_STRING = 2;

    // A real boolean attribute.
    // When true, it should be present (set either to an empty string or its name).
    // When false, it should be omitted.
    var BOOLEAN = 3;

    // An attribute that can be used as a flag as well as with a value.
    // When true, it should be present (set either to an empty string or its name).
    // When false, it should be omitted.
    // For any other value, should be present with that value.
    var OVERLOADED_BOOLEAN = 4;

    // An attribute that must be numeric or parse as a numeric.
    // When falsy, it should be removed.
    var NUMERIC = 5;

    // An attribute that must be positive numeric or parse as a positive numeric.
    // When falsy, it should be removed.
    var POSITIVE_NUMERIC = 6;

    /* eslint-disable max-len */
    var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
    /* eslint-enable max-len */
    var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';

    var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
    var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');

    var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
    var illegalAttributeNameCache = {};
    var validatedAttributeNameCache = {};

    function isAttributeNameSafe(attributeName) {
      if (hasOwnProperty$1.call(validatedAttributeNameCache, attributeName)) {
        return true;
      }
      if (hasOwnProperty$1.call(illegalAttributeNameCache, attributeName)) {
        return false;
      }
      if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
        validatedAttributeNameCache[attributeName] = true;
        return true;
      }
      illegalAttributeNameCache[attributeName] = true;
      {
        warning$1(false, 'Invalid attribute name: `%s`', attributeName);
      }
      return false;
    }

    function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
      if (propertyInfo !== null) {
        return propertyInfo.type === RESERVED;
      }
      if (isCustomComponentTag) {
        return false;
      }
      if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
        return true;
      }
      return false;
    }

    function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
      if (propertyInfo !== null && propertyInfo.type === RESERVED) {
        return false;
      }
      switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
        case 'function':
        // $FlowIssue symbol is perfectly valid here
        case 'symbol':
          // eslint-disable-line
          return true;
        case 'boolean':
          {
            if (isCustomComponentTag) {
              return false;
            }
            if (propertyInfo !== null) {
              return !propertyInfo.acceptsBooleans;
            } else {
              var prefix = name.toLowerCase().slice(0, 5);
              return prefix !== 'data-' && prefix !== 'aria-';
            }
          }
        default:
          return false;
      }
    }

    function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
      if (value === null || typeof value === 'undefined') {
        return true;
      }
      if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
        return true;
      }
      if (isCustomComponentTag) {
        return false;
      }
      if (propertyInfo !== null) {
        switch (propertyInfo.type) {
          case BOOLEAN:
            return !value;
          case OVERLOADED_BOOLEAN:
            return value === false;
          case NUMERIC:
            return isNaN(value);
          case POSITIVE_NUMERIC:
            return isNaN(value) || value < 1;
        }
      }
      return false;
    }

    function getPropertyInfo(name) {
      return properties.hasOwnProperty(name) ? properties[name] : null;
    }

    function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace) {
      this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
      this.attributeName = attributeName;
      this.attributeNamespace = attributeNamespace;
      this.mustUseProperty = mustUseProperty;
      this.propertyName = name;
      this.type = type;
    }

    // When adding attributes to this list, be sure to also add them to
    // the `possibleStandardNames` module to ensure casing and incorrect
    // name warnings.
    var properties = {};

    // These props are reserved by React. They shouldn't be written to the DOM.
    ['children', 'dangerouslySetInnerHTML',
    // TODO: This prevents the assignment of defaultValue to regular
    // elements (not just inputs). Now that ReactDOMInput assigns to the
    // defaultValue property -- do we need this?
    'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'].forEach(function (name) {
      properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
      name, // attributeName
      null);
    } // attributeNamespace
    );

    // A few React string attributes have a different name.
    // This is a mapping from React prop names to the attribute names.
    [['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
      var name = _ref[0],
          attributeName = _ref[1];

      properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
      attributeName, // attributeName
      null);
    } // attributeNamespace
    );

    // These are "enumerated" HTML attributes that accept "true" and "false".
    // In React, we let users pass `true` and `false` even though technically
    // these aren't boolean attributes (they are coerced to strings).
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
      properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
      name.toLowerCase(), // attributeName
      null);
    } // attributeNamespace
    );

    // These are "enumerated" SVG attributes that accept "true" and "false".
    // In React, we let users pass `true` and `false` even though technically
    // these aren't boolean attributes (they are coerced to strings).
    // Since these are SVG attributes, their attribute names are case-sensitive.
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
      properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
      name, // attributeName
      null);
    } // attributeNamespace
    );

    // These are HTML boolean attributes.
    ['allowFullScreen', 'async',
    // Note: there is a special case that prevents it from being written to the DOM
    // on the client side because the browsers are inconsistent. Instead we call focus().
    'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless',
    // Microdata
    'itemScope'].forEach(function (name) {
      properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
      name.toLowerCase(), // attributeName
      null);
    } // attributeNamespace
    );

    // These are the few React props that we set as DOM properties
    // rather than attributes. These are all booleans.
    ['checked',
    // Note: `option.selected` is not updated if `select.multiple` is
    // disabled with `removeAttribute`. We have special logic for handling this.
    'multiple', 'muted', 'selected'].forEach(function (name) {
      properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
      name, // attributeName
      null);
    } // attributeNamespace
    );

    // These are HTML attributes that are "overloaded booleans": they behave like
    // booleans, but can also accept a string value.
    ['capture', 'download'].forEach(function (name) {
      properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
      name, // attributeName
      null);
    } // attributeNamespace
    );

    // These are HTML attributes that must be positive numbers.
    ['cols', 'rows', 'size', 'span'].forEach(function (name) {
      properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
      name, // attributeName
      null);
    } // attributeNamespace
    );

    // These are HTML attributes that must be numbers.
    ['rowSpan', 'start'].forEach(function (name) {
      properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
      name.toLowerCase(), // attributeName
      null);
    } // attributeNamespace
    );

    var CAMELIZE = /[\-\:]([a-z])/g;
    var capitalize = function capitalize(token) {
      return token[1].toUpperCase();
    };

    // This is a list of all SVG attributes that need special casing, namespacing,
    // or boolean value assignment. Regular attributes that just accept strings
    // and have the same names are omitted, just like in the HTML whitelist.
    // Some of these attributes can be hard to find. This list was created by
    // scrapping the MDN documentation.
    ['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height'].forEach(function (attributeName) {
      var name = attributeName.replace(CAMELIZE, capitalize);
      properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
      attributeName, null);
    } // attributeNamespace
    );

    // String SVG attributes with the xlink namespace.
    ['xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type'].forEach(function (attributeName) {
      var name = attributeName.replace(CAMELIZE, capitalize);
      properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
      attributeName, 'http://www.w3.org/1999/xlink');
    });

    // String SVG attributes with the xml namespace.
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (attributeName) {
      var name = attributeName.replace(CAMELIZE, capitalize);
      properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
      attributeName, 'http://www.w3.org/XML/1998/namespace');
    });

    // These attribute exists both in HTML and SVG.
    // The attribute name is case-sensitive in SVG so we can't just use
    // the React name like we do for attributes that exist only in HTML.
    ['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
      properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
      attributeName.toLowerCase(), // attributeName
      null);
    } // attributeNamespace
    );

    // code copied and modified from escape-html
    /**
     * Module variables.
     * @private
     */

    var matchHtmlRegExp = /["'&<>]/;

    /**
     * Escapes special characters and HTML entities in a given html string.
     *
     * @param  {string} string HTML string to escape for later insertion
     * @return {string}
     * @public
     */

    function escapeHtml(string) {
      var str = '' + string;
      var match = matchHtmlRegExp.exec(str);

      if (!match) {
        return str;
      }

      var escape = void 0;
      var html = '';
      var index = void 0;
      var lastIndex = 0;

      for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
          case 34:
            // "
            escape = '&quot;';
            break;
          case 38:
            // &
            escape = '&amp;';
            break;
          case 39:
            // '
            escape = '&#x27;'; // modified from escape-html; used to be '&#39'
            break;
          case 60:
            // <
            escape = '&lt;';
            break;
          case 62:
            // >
            escape = '&gt;';
            break;
          default:
            continue;
        }

        if (lastIndex !== index) {
          html += str.substring(lastIndex, index);
        }

        lastIndex = index + 1;
        html += escape;
      }

      return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
    }
    // end code copied and modified from escape-html

    /**
     * Escapes text to prevent scripting attacks.
     *
     * @param {*} text Text value to escape.
     * @return {string} An escaped string.
     */
    function escapeTextForBrowser(text) {
      if (typeof text === 'boolean' || typeof text === 'number') {
        // this shortcircuit helps perf for types that we know will never have
        // special characters, especially given that this function is used often
        // for numeric dom ids.
        return '' + text;
      }
      return escapeHtml(text);
    }

    /**
     * Escapes attribute value to prevent scripting attacks.
     *
     * @param {*} value Value to escape.
     * @return {string} An escaped string.
     */
    function quoteAttributeValueForBrowser(value) {
      return '"' + escapeTextForBrowser(value) + '"';
    }

    /**
     * Operations for dealing with DOM properties.
     */

    /**
     * Creates markup for the ID property.
     *
     * @param {string} id Unescaped ID.
     * @return {string} Markup string.
     */

    function createMarkupForRoot() {
      return ROOT_ATTRIBUTE_NAME + '=""';
    }

    /**
     * Creates markup for a property.
     *
     * @param {string} name
     * @param {*} value
     * @return {?string} Markup string, or null if the property was invalid.
     */
    function createMarkupForProperty(name, value) {
      var propertyInfo = getPropertyInfo(name);
      if (name !== 'style' && shouldIgnoreAttribute(name, propertyInfo, false)) {
        return '';
      }
      if (shouldRemoveAttribute(name, value, propertyInfo, false)) {
        return '';
      }
      if (propertyInfo !== null) {
        var attributeName = propertyInfo.attributeName;
        var type = propertyInfo.type;

        if (type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === true) {
          return attributeName + '=""';
        } else {
          return attributeName + '=' + quoteAttributeValueForBrowser(value);
        }
      } else if (isAttributeNameSafe(name)) {
        return name + '=' + quoteAttributeValueForBrowser(value);
      }
      return '';
    }

    /**
     * Creates markup for a custom property.
     *
     * @param {string} name
     * @param {*} value
     * @return {string} Markup string, or empty string if the property was invalid.
     */
    function createMarkupForCustomAttribute(name, value) {
      if (!isAttributeNameSafe(name) || value == null) {
        return '';
      }
      return name + '=' + quoteAttributeValueForBrowser(value);
    }

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    function is(x, y) {
      return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
      ;
    }

    var currentlyRenderingComponent = null;
    var firstWorkInProgressHook = null;
    var workInProgressHook = null;
    // Whether the work-in-progress hook is a re-rendered hook
    var isReRender = false;
    // Whether an update was scheduled during the currently executing render pass.
    var didScheduleRenderPhaseUpdate = false;
    // Lazily created map of render-phase updates
    var renderPhaseUpdates = null;
    // Counter to prevent infinite loops.
    var numberOfReRenders = 0;
    var RE_RENDER_LIMIT = 25;

    var isInHookUserCodeInDev = false;

    // In DEV, this is the name of the currently executing primitive hook
    var currentHookNameInDev = void 0;

    function resolveCurrentlyRenderingComponent() {
      !(currentlyRenderingComponent !== null) ? invariant(false, 'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.') : void 0;
      {
        !!isInHookUserCodeInDev ? warning$1(false, 'Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://fb.me/rules-of-hooks') : void 0;
      }
      return currentlyRenderingComponent;
    }

    function areHookInputsEqual(nextDeps, prevDeps) {
      if (prevDeps === null) {
        {
          warning$1(false, '%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
        }
        return false;
      }

      {
        // Don't bother comparing lengths in prod because these arrays should be
        // passed inline.
        if (nextDeps.length !== prevDeps.length) {
          warning$1(false, 'The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, '[' + nextDeps.join(', ') + ']', '[' + prevDeps.join(', ') + ']');
        }
      }
      for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
        if (is(nextDeps[i], prevDeps[i])) {
          continue;
        }
        return false;
      }
      return true;
    }

    function createHook() {
      if (numberOfReRenders > 0) {
        invariant(false, 'Rendered more hooks than during the previous render');
      }
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }

    function createWorkInProgressHook() {
      if (workInProgressHook === null) {
        // This is the first hook in the list
        if (firstWorkInProgressHook === null) {
          isReRender = false;
          firstWorkInProgressHook = workInProgressHook = createHook();
        } else {
          // There's already a work-in-progress. Reuse it.
          isReRender = true;
          workInProgressHook = firstWorkInProgressHook;
        }
      } else {
        if (workInProgressHook.next === null) {
          isReRender = false;
          // Append to the end of the list
          workInProgressHook = workInProgressHook.next = createHook();
        } else {
          // There's already a work-in-progress. Reuse it.
          isReRender = true;
          workInProgressHook = workInProgressHook.next;
        }
      }
      return workInProgressHook;
    }

    function prepareToUseHooks(componentIdentity) {
      currentlyRenderingComponent = componentIdentity;
      {
        isInHookUserCodeInDev = false;
      }

      // The following should have already been reset
      // didScheduleRenderPhaseUpdate = false;
      // firstWorkInProgressHook = null;
      // numberOfReRenders = 0;
      // renderPhaseUpdates = null;
      // workInProgressHook = null;
    }

    function finishHooks(Component, props, children, refOrContext) {
      // This must be called after every function component to prevent hooks from
      // being used in classes.

      while (didScheduleRenderPhaseUpdate) {
        // Updates were scheduled during the render phase. They are stored in
        // the `renderPhaseUpdates` map. Call the component again, reusing the
        // work-in-progress hooks and applying the additional updates on top. Keep
        // restarting until no more updates are scheduled.
        didScheduleRenderPhaseUpdate = false;
        numberOfReRenders += 1;

        // Start over from the beginning of the list
        workInProgressHook = null;

        children = Component(props, refOrContext);
      }
      currentlyRenderingComponent = null;
      firstWorkInProgressHook = null;
      numberOfReRenders = 0;
      renderPhaseUpdates = null;
      workInProgressHook = null;
      {
        isInHookUserCodeInDev = false;
      }

      // These were reset above
      // currentlyRenderingComponent = null;
      // didScheduleRenderPhaseUpdate = false;
      // firstWorkInProgressHook = null;
      // numberOfReRenders = 0;
      // renderPhaseUpdates = null;
      // workInProgressHook = null;

      return children;
    }

    function readContext(context, observedBits) {
      var threadID = currentThreadID;
      validateContextBounds(context, threadID);
      {
        !!isInHookUserCodeInDev ? warning$1(false, 'Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().') : void 0;
      }
      return context[threadID];
    }

    function useContext(context, observedBits) {
      {
        currentHookNameInDev = 'useContext';
      }
      resolveCurrentlyRenderingComponent();
      var threadID = currentThreadID;
      validateContextBounds(context, threadID);
      return context[threadID];
    }

    function basicStateReducer(state, action) {
      return typeof action === 'function' ? action(state) : action;
    }

    function useState(initialState) {
      {
        currentHookNameInDev = 'useState';
      }
      return useReducer(basicStateReducer,
      // useReducer has a special case to support lazy useState initializers
      initialState);
    }

    function useReducer(reducer, initialArg, init) {
      {
        if (reducer !== basicStateReducer) {
          currentHookNameInDev = 'useReducer';
        }
      }
      currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
      workInProgressHook = createWorkInProgressHook();
      if (isReRender) {
        // This is a re-render. Apply the new render phase updates to the previous
        var _queue = workInProgressHook.queue;
        var _dispatch = _queue.dispatch;
        if (renderPhaseUpdates !== null) {
          // Render phase updates are stored in a map of queue -> linked list
          var firstRenderPhaseUpdate = renderPhaseUpdates.get(_queue);
          if (firstRenderPhaseUpdate !== undefined) {
            renderPhaseUpdates.delete(_queue);
            var newState = workInProgressHook.memoizedState;
            var update = firstRenderPhaseUpdate;
            do {
              // Process this render phase update. We don't have to check the
              // priority because it will always be the same as the current
              // render's.
              var _action = update.action;
              {
                isInHookUserCodeInDev = true;
              }
              newState = reducer(newState, _action);
              {
                isInHookUserCodeInDev = false;
              }
              update = update.next;
            } while (update !== null);

            workInProgressHook.memoizedState = newState;

            return [newState, _dispatch];
          }
        }
        return [workInProgressHook.memoizedState, _dispatch];
      } else {
        {
          isInHookUserCodeInDev = true;
        }
        var initialState = void 0;
        if (reducer === basicStateReducer) {
          // Special case for `useState`.
          initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
        } else {
          initialState = init !== undefined ? init(initialArg) : initialArg;
        }
        {
          isInHookUserCodeInDev = false;
        }
        workInProgressHook.memoizedState = initialState;
        var _queue2 = workInProgressHook.queue = {
          last: null,
          dispatch: null
        };
        var _dispatch2 = _queue2.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue2);
        return [workInProgressHook.memoizedState, _dispatch2];
      }
    }

    function useMemo(nextCreate, deps) {
      currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
      workInProgressHook = createWorkInProgressHook();

      var nextDeps = deps === undefined ? null : deps;

      if (workInProgressHook !== null) {
        var prevState = workInProgressHook.memoizedState;
        if (prevState !== null) {
          if (nextDeps !== null) {
            var prevDeps = prevState[1];
            if (areHookInputsEqual(nextDeps, prevDeps)) {
              return prevState[0];
            }
          }
        }
      }

      {
        isInHookUserCodeInDev = true;
      }
      var nextValue = nextCreate();
      {
        isInHookUserCodeInDev = false;
      }
      workInProgressHook.memoizedState = [nextValue, nextDeps];
      return nextValue;
    }

    function useRef(initialValue) {
      currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
      workInProgressHook = createWorkInProgressHook();
      var previousRef = workInProgressHook.memoizedState;
      if (previousRef === null) {
        var ref = { current: initialValue };
        {
          Object.seal(ref);
        }
        workInProgressHook.memoizedState = ref;
        return ref;
      } else {
        return previousRef;
      }
    }

    function useLayoutEffect(create, inputs) {
      {
        currentHookNameInDev = 'useLayoutEffect';
      }
      warning$1(false, 'useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client. ' + 'See https://fb.me/react-uselayouteffect-ssr for common fixes.');
    }

    function dispatchAction(componentIdentity, queue, action) {
      !(numberOfReRenders < RE_RENDER_LIMIT) ? invariant(false, 'Too many re-renders. React limits the number of renders to prevent an infinite loop.') : void 0;

      if (componentIdentity === currentlyRenderingComponent) {
        // This is a render phase update. Stash it in a lazily-created map of
        // queue -> linked list of updates. After this render pass, we'll restart
        // and apply the stashed updates on top of the work-in-progress hook.
        didScheduleRenderPhaseUpdate = true;
        var update = {
          action: action,
          next: null
        };
        if (renderPhaseUpdates === null) {
          renderPhaseUpdates = new Map();
        }
        var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
        if (firstRenderPhaseUpdate === undefined) {
          renderPhaseUpdates.set(queue, update);
        } else {
          // Append the update to the end of the list.
          var lastRenderPhaseUpdate = firstRenderPhaseUpdate;
          while (lastRenderPhaseUpdate.next !== null) {
            lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
          }
          lastRenderPhaseUpdate.next = update;
        }
      } else {
        // This means an update has happened after the function component has
        // returned. On the server this is a no-op. In React Fiber, the update
        // would be scheduled for a future render.
      }
    }

    function useCallback(callback, deps) {
      // Callbacks are passed as they are in the server environment.
      return callback;
    }

    function noop() {}

    var currentThreadID = 0;

    function setCurrentThreadID(threadID) {
      currentThreadID = threadID;
    }

    var Dispatcher = {
      readContext: readContext,
      useContext: useContext,
      useMemo: useMemo,
      useReducer: useReducer,
      useRef: useRef,
      useState: useState,
      useLayoutEffect: useLayoutEffect,
      useCallback: useCallback,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: noop,
      // Effects are not run in the server environment.
      useEffect: noop,
      // Debugging effect
      useDebugValue: noop
    };

    var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

    var Namespaces = {
      html: HTML_NAMESPACE,
      mathml: MATH_NAMESPACE,
      svg: SVG_NAMESPACE
    };

    // Assumes there is no parent namespace.
    function getIntrinsicNamespace(type) {
      switch (type) {
        case 'svg':
          return SVG_NAMESPACE;
        case 'math':
          return MATH_NAMESPACE;
        default:
          return HTML_NAMESPACE;
      }
    }

    function getChildNamespace(parentNamespace, type) {
      if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
        // No (or default) parent namespace: potential entry point.
        return getIntrinsicNamespace(type);
      }
      if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
        // We're leaving SVG.
        return HTML_NAMESPACE;
      }
      // By default, pass namespace below.
      return parentNamespace;
    }

    var ReactDebugCurrentFrame$2 = null;

    var ReactControlledValuePropTypes = {
      checkPropTypes: null
    };

    {
      ReactDebugCurrentFrame$2 = ReactSharedInternals.ReactDebugCurrentFrame;

      var hasReadOnlyValue = {
        button: true,
        checkbox: true,
        image: true,
        hidden: true,
        radio: true,
        reset: true,
        submit: true
      };

      var propTypes = {
        value: function value(props, propName, componentName) {
          if (hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled || props[propName] == null) {
            return null;
          }
          return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
        },
        checked: function checked(props, propName, componentName) {
          if (props.onChange || props.readOnly || props.disabled || props[propName] == null) {
            return null;
          }
          return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
        }
      };

      /**
       * Provide a linked `value` attribute for controlled forms. You should not use
       * this outside of the ReactDOM controlled form components.
       */
      ReactControlledValuePropTypes.checkPropTypes = function (tagName, props) {
        checkPropTypes(propTypes, props, 'prop', tagName, ReactDebugCurrentFrame$2.getStackAddendum);
      };
    }

    // For HTML, certain tags should omit their close tag. We keep a whitelist for
    // those special-case tags.

    var omittedCloseTags = {
      area: true,
      base: true,
      br: true,
      col: true,
      embed: true,
      hr: true,
      img: true,
      input: true,
      keygen: true,
      link: true,
      meta: true,
      param: true,
      source: true,
      track: true,
      wbr: true
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    };

    // For HTML, certain tags cannot have children. This has the same purpose as
    // `omittedCloseTags` except that `menuitem` should still have its closing tag.

    var voidElementTags = _assign({
      menuitem: true
    }, omittedCloseTags);

    // TODO: We can remove this if we add invariantWithStack()
    // or add stack by default to invariants where possible.
    var HTML = '__html';

    var ReactDebugCurrentFrame$3 = null;
    {
      ReactDebugCurrentFrame$3 = ReactSharedInternals.ReactDebugCurrentFrame;
    }

    function assertValidProps(tag, props) {
      if (!props) {
        return;
      }
      // Note the use of `==` which checks for null or undefined.
      if (voidElementTags[tag]) {
        !(props.children == null && props.dangerouslySetInnerHTML == null) ? invariant(false, '%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s', tag, ReactDebugCurrentFrame$3.getStackAddendum()) : void 0;
      }
      if (props.dangerouslySetInnerHTML != null) {
        !(props.children == null) ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : void 0;
        !(_typeof(props.dangerouslySetInnerHTML) === 'object' && HTML in props.dangerouslySetInnerHTML) ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.') : void 0;
      }
      {
        !(props.suppressContentEditableWarning || !props.contentEditable || props.children == null) ? warning$1(false, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : void 0;
      }
      !(props.style == null || _typeof(props.style) === 'object') ? invariant(false, 'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s', ReactDebugCurrentFrame$3.getStackAddendum()) : void 0;
    }

    /**
     * CSS properties which accept numbers but are not in units of "px".
     */
    var isUnitlessNumber = {
      animationIterationCount: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,

      // SVG-related properties
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };

    /**
     * @param {string} prefix vendor-specific prefix, eg: Webkit
     * @param {string} key style name, eg: transitionDuration
     * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
     * WebkitTransitionDuration
     */
    function prefixKey(prefix, key) {
      return prefix + key.charAt(0).toUpperCase() + key.substring(1);
    }

    /**
     * Support style names that may come passed in prefixed by adding permutations
     * of vendor prefixes.
     */
    var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

    // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
    // infinite loop, because it iterates over the newly added props too.
    Object.keys(isUnitlessNumber).forEach(function (prop) {
      prefixes.forEach(function (prefix) {
        isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
      });
    });

    /**
     * Convert a value into the proper css writable value. The style name `name`
     * should be logical (no hyphens), as specified
     * in `CSSProperty.isUnitlessNumber`.
     *
     * @param {string} name CSS property name such as `topMargin`.
     * @param {*} value CSS property value such as `10px`.
     * @return {string} Normalized style value with dimensions applied.
     */
    function dangerousStyleValue(name, value, isCustomProperty) {
      // Note that we've removed escapeTextForBrowser() calls here since the
      // whole string will be escaped when the attribute is injected into
      // the markup. If you provide unsafe user data here they can inject
      // arbitrary CSS which may be problematic (I couldn't repro this):
      // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
      // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
      // This is not an XSS hole but instead a potential CSS injection issue
      // which has lead to a greater discussion about how we're going to
      // trust URLs moving forward. See #2115901

      var isEmpty = value == null || typeof value === 'boolean' || value === '';
      if (isEmpty) {
        return '';
      }

      if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
        return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
      }

      return ('' + value).trim();
    }

    var uppercasePattern = /([A-Z])/g;
    var msPattern = /^ms-/;

    /**
     * Hyphenates a camelcased CSS property name, for example:
     *
     *   > hyphenateStyleName('backgroundColor')
     *   < "background-color"
     *   > hyphenateStyleName('MozTransition')
     *   < "-moz-transition"
     *   > hyphenateStyleName('msTransition')
     *   < "-ms-transition"
     *
     * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
     * is converted to `-ms-`.
     */
    function hyphenateStyleName(name) {
      return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
    }

    function isCustomComponent(tagName, props) {
      if (tagName.indexOf('-') === -1) {
        return typeof props.is === 'string';
      }
      switch (tagName) {
        // These are reserved SVG and MathML elements.
        // We don't mind this whitelist too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
          return false;
        default:
          return true;
      }
    }

    var warnValidStyle = function warnValidStyle() {};

    {
      // 'msTransform' is correct, but the other prefixes should be capitalized
      var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
      var msPattern$1 = /^-ms-/;
      var hyphenPattern = /-(.)/g;

      // style values shouldn't contain a semicolon
      var badStyleValueWithSemicolonPattern = /;\s*$/;

      var warnedStyleNames = {};
      var warnedStyleValues = {};
      var warnedForNaNValue = false;
      var warnedForInfinityValue = false;

      var camelize = function camelize(string) {
        return string.replace(hyphenPattern, function (_, character) {
          return character.toUpperCase();
        });
      };

      var warnHyphenatedStyleName = function warnHyphenatedStyleName(name) {
        if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
          return;
        }

        warnedStyleNames[name] = true;
        warning$1(false, 'Unsupported style property %s. Did you mean %s?', name,
        // As Andi Smith suggests
        // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
        // is converted to lowercase `ms`.
        camelize(name.replace(msPattern$1, 'ms-')));
      };

      var warnBadVendoredStyleName = function warnBadVendoredStyleName(name) {
        if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
          return;
        }

        warnedStyleNames[name] = true;
        warning$1(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
      };

      var warnStyleValueWithSemicolon = function warnStyleValueWithSemicolon(name, value) {
        if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
          return;
        }

        warnedStyleValues[value] = true;
        warning$1(false, "Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
      };

      var warnStyleValueIsNaN = function warnStyleValueIsNaN(name, value) {
        if (warnedForNaNValue) {
          return;
        }

        warnedForNaNValue = true;
        warning$1(false, '`NaN` is an invalid value for the `%s` css style property.', name);
      };

      var warnStyleValueIsInfinity = function warnStyleValueIsInfinity(name, value) {
        if (warnedForInfinityValue) {
          return;
        }

        warnedForInfinityValue = true;
        warning$1(false, '`Infinity` is an invalid value for the `%s` css style property.', name);
      };

      warnValidStyle = function warnValidStyle(name, value) {
        if (name.indexOf('-') > -1) {
          warnHyphenatedStyleName(name);
        } else if (badVendoredStyleNamePattern.test(name)) {
          warnBadVendoredStyleName(name);
        } else if (badStyleValueWithSemicolonPattern.test(value)) {
          warnStyleValueWithSemicolon(name, value);
        }

        if (typeof value === 'number') {
          if (isNaN(value)) {
            warnStyleValueIsNaN(name, value);
          } else if (!isFinite(value)) {
            warnStyleValueIsInfinity(name, value);
          }
        }
      };
    }

    var warnValidStyle$1 = warnValidStyle;

    var ariaProperties = {
      'aria-current': 0, // state
      'aria-details': 0,
      'aria-disabled': 0, // state
      'aria-hidden': 0, // state
      'aria-invalid': 0, // state
      'aria-keyshortcuts': 0,
      'aria-label': 0,
      'aria-roledescription': 0,
      // Widget Attributes
      'aria-autocomplete': 0,
      'aria-checked': 0,
      'aria-expanded': 0,
      'aria-haspopup': 0,
      'aria-level': 0,
      'aria-modal': 0,
      'aria-multiline': 0,
      'aria-multiselectable': 0,
      'aria-orientation': 0,
      'aria-placeholder': 0,
      'aria-pressed': 0,
      'aria-readonly': 0,
      'aria-required': 0,
      'aria-selected': 0,
      'aria-sort': 0,
      'aria-valuemax': 0,
      'aria-valuemin': 0,
      'aria-valuenow': 0,
      'aria-valuetext': 0,
      // Live Region Attributes
      'aria-atomic': 0,
      'aria-busy': 0,
      'aria-live': 0,
      'aria-relevant': 0,
      // Drag-and-Drop Attributes
      'aria-dropeffect': 0,
      'aria-grabbed': 0,
      // Relationship Attributes
      'aria-activedescendant': 0,
      'aria-colcount': 0,
      'aria-colindex': 0,
      'aria-colspan': 0,
      'aria-controls': 0,
      'aria-describedby': 0,
      'aria-errormessage': 0,
      'aria-flowto': 0,
      'aria-labelledby': 0,
      'aria-owns': 0,
      'aria-posinset': 0,
      'aria-rowcount': 0,
      'aria-rowindex': 0,
      'aria-rowspan': 0,
      'aria-setsize': 0
    };

    var warnedProperties = {};
    var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
    var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

    var hasOwnProperty$2 = Object.prototype.hasOwnProperty;

    function validateProperty(tagName, name) {
      if (hasOwnProperty$2.call(warnedProperties, name) && warnedProperties[name]) {
        return true;
      }

      if (rARIACamel.test(name)) {
        var ariaName = 'aria-' + name.slice(4).toLowerCase();
        var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;

        // If this is an aria-* attribute, but is not listed in the known DOM
        // DOM properties, then it is an invalid aria-* attribute.
        if (correctName == null) {
          warning$1(false, 'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);
          warnedProperties[name] = true;
          return true;
        }
        // aria-* attributes should be lowercase; suggest the lowercase version.
        if (name !== correctName) {
          warning$1(false, 'Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);
          warnedProperties[name] = true;
          return true;
        }
      }

      if (rARIA.test(name)) {
        var lowerCasedName = name.toLowerCase();
        var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;

        // If this is an aria-* attribute, but is not listed in the known DOM
        // DOM properties, then it is an invalid aria-* attribute.
        if (standardName == null) {
          warnedProperties[name] = true;
          return false;
        }
        // aria-* attributes should be lowercase; suggest the lowercase version.
        if (name !== standardName) {
          warning$1(false, 'Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);
          warnedProperties[name] = true;
          return true;
        }
      }

      return true;
    }

    function warnInvalidARIAProps(type, props) {
      var invalidProps = [];

      for (var key in props) {
        var isValid = validateProperty(type, key);
        if (!isValid) {
          invalidProps.push(key);
        }
      }

      var unknownPropString = invalidProps.map(function (prop) {
        return '`' + prop + '`';
      }).join(', ');

      if (invalidProps.length === 1) {
        warning$1(false, 'Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
      } else if (invalidProps.length > 1) {
        warning$1(false, 'Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
      }
    }

    function validateProperties(type, props) {
      if (isCustomComponent(type, props)) {
        return;
      }
      warnInvalidARIAProps(type, props);
    }

    var didWarnValueNull = false;

    function validateProperties$1(type, props) {
      if (type !== 'input' && type !== 'textarea' && type !== 'select') {
        return;
      }

      if (props != null && props.value === null && !didWarnValueNull) {
        didWarnValueNull = true;
        if (type === 'select' && props.multiple) {
          warning$1(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
        } else {
          warning$1(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
        }
      }
    }

    /**
     * Registers plugins so that they can extract and dispatch events.
     *
     * @see {EventPluginHub}
     */

    /**
     * Ordered list of injected plugins.
     */

    /**
     * Mapping from event name to dispatch config
     */

    /**
     * Mapping from registration name to plugin module
     */
    var registrationNameModules = {};

    /**
     * Mapping from registration name to event name
     */

    /**
     * Mapping from lowercase registration names to the properly cased version,
     * used to warn in the case of missing event handlers. Available
     * only in true.
     * @type {Object}
     */
    var possibleRegistrationNames = {};
    // Trust the developer to only use possibleRegistrationNames in true

    /**
     * Injects an ordering of plugins (by plugin name). This allows the ordering
     * to be decoupled from injection of the actual plugins so that ordering is
     * always deterministic regardless of packaging, on-the-fly injection, etc.
     *
     * @param {array} InjectedEventPluginOrder
     * @internal
     * @see {EventPluginHub.injection.injectEventPluginOrder}
     */

    /**
     * Injects plugins to be used by `EventPluginHub`. The plugin names must be
     * in the ordering injected by `injectEventPluginOrder`.
     *
     * Plugins can be injected as part of page initialization or on-the-fly.
     *
     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
     * @internal
     * @see {EventPluginHub.injection.injectEventPluginsByName}
     */

    // When adding attributes to the HTML or SVG whitelist, be sure to
    // also add them to this module to ensure casing and incorrect name
    // warnings.
    var possibleStandardNames = {
      // HTML
      accept: 'accept',
      acceptcharset: 'acceptCharset',
      'accept-charset': 'acceptCharset',
      accesskey: 'accessKey',
      action: 'action',
      allowfullscreen: 'allowFullScreen',
      alt: 'alt',
      as: 'as',
      async: 'async',
      autocapitalize: 'autoCapitalize',
      autocomplete: 'autoComplete',
      autocorrect: 'autoCorrect',
      autofocus: 'autoFocus',
      autoplay: 'autoPlay',
      autosave: 'autoSave',
      capture: 'capture',
      cellpadding: 'cellPadding',
      cellspacing: 'cellSpacing',
      challenge: 'challenge',
      charset: 'charSet',
      checked: 'checked',
      children: 'children',
      cite: 'cite',
      class: 'className',
      classid: 'classID',
      classname: 'className',
      cols: 'cols',
      colspan: 'colSpan',
      content: 'content',
      contenteditable: 'contentEditable',
      contextmenu: 'contextMenu',
      controls: 'controls',
      controlslist: 'controlsList',
      coords: 'coords',
      crossorigin: 'crossOrigin',
      dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
      data: 'data',
      datetime: 'dateTime',
      default: 'default',
      defaultchecked: 'defaultChecked',
      defaultvalue: 'defaultValue',
      defer: 'defer',
      dir: 'dir',
      disabled: 'disabled',
      download: 'download',
      draggable: 'draggable',
      enctype: 'encType',
      for: 'htmlFor',
      form: 'form',
      formmethod: 'formMethod',
      formaction: 'formAction',
      formenctype: 'formEncType',
      formnovalidate: 'formNoValidate',
      formtarget: 'formTarget',
      frameborder: 'frameBorder',
      headers: 'headers',
      height: 'height',
      hidden: 'hidden',
      high: 'high',
      href: 'href',
      hreflang: 'hrefLang',
      htmlfor: 'htmlFor',
      httpequiv: 'httpEquiv',
      'http-equiv': 'httpEquiv',
      icon: 'icon',
      id: 'id',
      innerhtml: 'innerHTML',
      inputmode: 'inputMode',
      integrity: 'integrity',
      is: 'is',
      itemid: 'itemID',
      itemprop: 'itemProp',
      itemref: 'itemRef',
      itemscope: 'itemScope',
      itemtype: 'itemType',
      keyparams: 'keyParams',
      keytype: 'keyType',
      kind: 'kind',
      label: 'label',
      lang: 'lang',
      list: 'list',
      loop: 'loop',
      low: 'low',
      manifest: 'manifest',
      marginwidth: 'marginWidth',
      marginheight: 'marginHeight',
      max: 'max',
      maxlength: 'maxLength',
      media: 'media',
      mediagroup: 'mediaGroup',
      method: 'method',
      min: 'min',
      minlength: 'minLength',
      multiple: 'multiple',
      muted: 'muted',
      name: 'name',
      nomodule: 'noModule',
      nonce: 'nonce',
      novalidate: 'noValidate',
      open: 'open',
      optimum: 'optimum',
      pattern: 'pattern',
      placeholder: 'placeholder',
      playsinline: 'playsInline',
      poster: 'poster',
      preload: 'preload',
      profile: 'profile',
      radiogroup: 'radioGroup',
      readonly: 'readOnly',
      referrerpolicy: 'referrerPolicy',
      rel: 'rel',
      required: 'required',
      reversed: 'reversed',
      role: 'role',
      rows: 'rows',
      rowspan: 'rowSpan',
      sandbox: 'sandbox',
      scope: 'scope',
      scoped: 'scoped',
      scrolling: 'scrolling',
      seamless: 'seamless',
      selected: 'selected',
      shape: 'shape',
      size: 'size',
      sizes: 'sizes',
      span: 'span',
      spellcheck: 'spellCheck',
      src: 'src',
      srcdoc: 'srcDoc',
      srclang: 'srcLang',
      srcset: 'srcSet',
      start: 'start',
      step: 'step',
      style: 'style',
      summary: 'summary',
      tabindex: 'tabIndex',
      target: 'target',
      title: 'title',
      type: 'type',
      usemap: 'useMap',
      value: 'value',
      width: 'width',
      wmode: 'wmode',
      wrap: 'wrap',

      // SVG
      about: 'about',
      accentheight: 'accentHeight',
      'accent-height': 'accentHeight',
      accumulate: 'accumulate',
      additive: 'additive',
      alignmentbaseline: 'alignmentBaseline',
      'alignment-baseline': 'alignmentBaseline',
      allowreorder: 'allowReorder',
      alphabetic: 'alphabetic',
      amplitude: 'amplitude',
      arabicform: 'arabicForm',
      'arabic-form': 'arabicForm',
      ascent: 'ascent',
      attributename: 'attributeName',
      attributetype: 'attributeType',
      autoreverse: 'autoReverse',
      azimuth: 'azimuth',
      basefrequency: 'baseFrequency',
      baselineshift: 'baselineShift',
      'baseline-shift': 'baselineShift',
      baseprofile: 'baseProfile',
      bbox: 'bbox',
      begin: 'begin',
      bias: 'bias',
      by: 'by',
      calcmode: 'calcMode',
      capheight: 'capHeight',
      'cap-height': 'capHeight',
      clip: 'clip',
      clippath: 'clipPath',
      'clip-path': 'clipPath',
      clippathunits: 'clipPathUnits',
      cliprule: 'clipRule',
      'clip-rule': 'clipRule',
      color: 'color',
      colorinterpolation: 'colorInterpolation',
      'color-interpolation': 'colorInterpolation',
      colorinterpolationfilters: 'colorInterpolationFilters',
      'color-interpolation-filters': 'colorInterpolationFilters',
      colorprofile: 'colorProfile',
      'color-profile': 'colorProfile',
      colorrendering: 'colorRendering',
      'color-rendering': 'colorRendering',
      contentscripttype: 'contentScriptType',
      contentstyletype: 'contentStyleType',
      cursor: 'cursor',
      cx: 'cx',
      cy: 'cy',
      d: 'd',
      datatype: 'datatype',
      decelerate: 'decelerate',
      descent: 'descent',
      diffuseconstant: 'diffuseConstant',
      direction: 'direction',
      display: 'display',
      divisor: 'divisor',
      dominantbaseline: 'dominantBaseline',
      'dominant-baseline': 'dominantBaseline',
      dur: 'dur',
      dx: 'dx',
      dy: 'dy',
      edgemode: 'edgeMode',
      elevation: 'elevation',
      enablebackground: 'enableBackground',
      'enable-background': 'enableBackground',
      end: 'end',
      exponent: 'exponent',
      externalresourcesrequired: 'externalResourcesRequired',
      fill: 'fill',
      fillopacity: 'fillOpacity',
      'fill-opacity': 'fillOpacity',
      fillrule: 'fillRule',
      'fill-rule': 'fillRule',
      filter: 'filter',
      filterres: 'filterRes',
      filterunits: 'filterUnits',
      floodopacity: 'floodOpacity',
      'flood-opacity': 'floodOpacity',
      floodcolor: 'floodColor',
      'flood-color': 'floodColor',
      focusable: 'focusable',
      fontfamily: 'fontFamily',
      'font-family': 'fontFamily',
      fontsize: 'fontSize',
      'font-size': 'fontSize',
      fontsizeadjust: 'fontSizeAdjust',
      'font-size-adjust': 'fontSizeAdjust',
      fontstretch: 'fontStretch',
      'font-stretch': 'fontStretch',
      fontstyle: 'fontStyle',
      'font-style': 'fontStyle',
      fontvariant: 'fontVariant',
      'font-variant': 'fontVariant',
      fontweight: 'fontWeight',
      'font-weight': 'fontWeight',
      format: 'format',
      from: 'from',
      fx: 'fx',
      fy: 'fy',
      g1: 'g1',
      g2: 'g2',
      glyphname: 'glyphName',
      'glyph-name': 'glyphName',
      glyphorientationhorizontal: 'glyphOrientationHorizontal',
      'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
      glyphorientationvertical: 'glyphOrientationVertical',
      'glyph-orientation-vertical': 'glyphOrientationVertical',
      glyphref: 'glyphRef',
      gradienttransform: 'gradientTransform',
      gradientunits: 'gradientUnits',
      hanging: 'hanging',
      horizadvx: 'horizAdvX',
      'horiz-adv-x': 'horizAdvX',
      horizoriginx: 'horizOriginX',
      'horiz-origin-x': 'horizOriginX',
      ideographic: 'ideographic',
      imagerendering: 'imageRendering',
      'image-rendering': 'imageRendering',
      in2: 'in2',
      in: 'in',
      inlist: 'inlist',
      intercept: 'intercept',
      k1: 'k1',
      k2: 'k2',
      k3: 'k3',
      k4: 'k4',
      k: 'k',
      kernelmatrix: 'kernelMatrix',
      kernelunitlength: 'kernelUnitLength',
      kerning: 'kerning',
      keypoints: 'keyPoints',
      keysplines: 'keySplines',
      keytimes: 'keyTimes',
      lengthadjust: 'lengthAdjust',
      letterspacing: 'letterSpacing',
      'letter-spacing': 'letterSpacing',
      lightingcolor: 'lightingColor',
      'lighting-color': 'lightingColor',
      limitingconeangle: 'limitingConeAngle',
      local: 'local',
      markerend: 'markerEnd',
      'marker-end': 'markerEnd',
      markerheight: 'markerHeight',
      markermid: 'markerMid',
      'marker-mid': 'markerMid',
      markerstart: 'markerStart',
      'marker-start': 'markerStart',
      markerunits: 'markerUnits',
      markerwidth: 'markerWidth',
      mask: 'mask',
      maskcontentunits: 'maskContentUnits',
      maskunits: 'maskUnits',
      mathematical: 'mathematical',
      mode: 'mode',
      numoctaves: 'numOctaves',
      offset: 'offset',
      opacity: 'opacity',
      operator: 'operator',
      order: 'order',
      orient: 'orient',
      orientation: 'orientation',
      origin: 'origin',
      overflow: 'overflow',
      overlineposition: 'overlinePosition',
      'overline-position': 'overlinePosition',
      overlinethickness: 'overlineThickness',
      'overline-thickness': 'overlineThickness',
      paintorder: 'paintOrder',
      'paint-order': 'paintOrder',
      panose1: 'panose1',
      'panose-1': 'panose1',
      pathlength: 'pathLength',
      patterncontentunits: 'patternContentUnits',
      patterntransform: 'patternTransform',
      patternunits: 'patternUnits',
      pointerevents: 'pointerEvents',
      'pointer-events': 'pointerEvents',
      points: 'points',
      pointsatx: 'pointsAtX',
      pointsaty: 'pointsAtY',
      pointsatz: 'pointsAtZ',
      prefix: 'prefix',
      preservealpha: 'preserveAlpha',
      preserveaspectratio: 'preserveAspectRatio',
      primitiveunits: 'primitiveUnits',
      property: 'property',
      r: 'r',
      radius: 'radius',
      refx: 'refX',
      refy: 'refY',
      renderingintent: 'renderingIntent',
      'rendering-intent': 'renderingIntent',
      repeatcount: 'repeatCount',
      repeatdur: 'repeatDur',
      requiredextensions: 'requiredExtensions',
      requiredfeatures: 'requiredFeatures',
      resource: 'resource',
      restart: 'restart',
      result: 'result',
      results: 'results',
      rotate: 'rotate',
      rx: 'rx',
      ry: 'ry',
      scale: 'scale',
      security: 'security',
      seed: 'seed',
      shaperendering: 'shapeRendering',
      'shape-rendering': 'shapeRendering',
      slope: 'slope',
      spacing: 'spacing',
      specularconstant: 'specularConstant',
      specularexponent: 'specularExponent',
      speed: 'speed',
      spreadmethod: 'spreadMethod',
      startoffset: 'startOffset',
      stddeviation: 'stdDeviation',
      stemh: 'stemh',
      stemv: 'stemv',
      stitchtiles: 'stitchTiles',
      stopcolor: 'stopColor',
      'stop-color': 'stopColor',
      stopopacity: 'stopOpacity',
      'stop-opacity': 'stopOpacity',
      strikethroughposition: 'strikethroughPosition',
      'strikethrough-position': 'strikethroughPosition',
      strikethroughthickness: 'strikethroughThickness',
      'strikethrough-thickness': 'strikethroughThickness',
      string: 'string',
      stroke: 'stroke',
      strokedasharray: 'strokeDasharray',
      'stroke-dasharray': 'strokeDasharray',
      strokedashoffset: 'strokeDashoffset',
      'stroke-dashoffset': 'strokeDashoffset',
      strokelinecap: 'strokeLinecap',
      'stroke-linecap': 'strokeLinecap',
      strokelinejoin: 'strokeLinejoin',
      'stroke-linejoin': 'strokeLinejoin',
      strokemiterlimit: 'strokeMiterlimit',
      'stroke-miterlimit': 'strokeMiterlimit',
      strokewidth: 'strokeWidth',
      'stroke-width': 'strokeWidth',
      strokeopacity: 'strokeOpacity',
      'stroke-opacity': 'strokeOpacity',
      suppresscontenteditablewarning: 'suppressContentEditableWarning',
      suppresshydrationwarning: 'suppressHydrationWarning',
      surfacescale: 'surfaceScale',
      systemlanguage: 'systemLanguage',
      tablevalues: 'tableValues',
      targetx: 'targetX',
      targety: 'targetY',
      textanchor: 'textAnchor',
      'text-anchor': 'textAnchor',
      textdecoration: 'textDecoration',
      'text-decoration': 'textDecoration',
      textlength: 'textLength',
      textrendering: 'textRendering',
      'text-rendering': 'textRendering',
      to: 'to',
      transform: 'transform',
      typeof: 'typeof',
      u1: 'u1',
      u2: 'u2',
      underlineposition: 'underlinePosition',
      'underline-position': 'underlinePosition',
      underlinethickness: 'underlineThickness',
      'underline-thickness': 'underlineThickness',
      unicode: 'unicode',
      unicodebidi: 'unicodeBidi',
      'unicode-bidi': 'unicodeBidi',
      unicoderange: 'unicodeRange',
      'unicode-range': 'unicodeRange',
      unitsperem: 'unitsPerEm',
      'units-per-em': 'unitsPerEm',
      unselectable: 'unselectable',
      valphabetic: 'vAlphabetic',
      'v-alphabetic': 'vAlphabetic',
      values: 'values',
      vectoreffect: 'vectorEffect',
      'vector-effect': 'vectorEffect',
      version: 'version',
      vertadvy: 'vertAdvY',
      'vert-adv-y': 'vertAdvY',
      vertoriginx: 'vertOriginX',
      'vert-origin-x': 'vertOriginX',
      vertoriginy: 'vertOriginY',
      'vert-origin-y': 'vertOriginY',
      vhanging: 'vHanging',
      'v-hanging': 'vHanging',
      videographic: 'vIdeographic',
      'v-ideographic': 'vIdeographic',
      viewbox: 'viewBox',
      viewtarget: 'viewTarget',
      visibility: 'visibility',
      vmathematical: 'vMathematical',
      'v-mathematical': 'vMathematical',
      vocab: 'vocab',
      widths: 'widths',
      wordspacing: 'wordSpacing',
      'word-spacing': 'wordSpacing',
      writingmode: 'writingMode',
      'writing-mode': 'writingMode',
      x1: 'x1',
      x2: 'x2',
      x: 'x',
      xchannelselector: 'xChannelSelector',
      xheight: 'xHeight',
      'x-height': 'xHeight',
      xlinkactuate: 'xlinkActuate',
      'xlink:actuate': 'xlinkActuate',
      xlinkarcrole: 'xlinkArcrole',
      'xlink:arcrole': 'xlinkArcrole',
      xlinkhref: 'xlinkHref',
      'xlink:href': 'xlinkHref',
      xlinkrole: 'xlinkRole',
      'xlink:role': 'xlinkRole',
      xlinkshow: 'xlinkShow',
      'xlink:show': 'xlinkShow',
      xlinktitle: 'xlinkTitle',
      'xlink:title': 'xlinkTitle',
      xlinktype: 'xlinkType',
      'xlink:type': 'xlinkType',
      xmlbase: 'xmlBase',
      'xml:base': 'xmlBase',
      xmllang: 'xmlLang',
      'xml:lang': 'xmlLang',
      xmlns: 'xmlns',
      'xml:space': 'xmlSpace',
      xmlnsxlink: 'xmlnsXlink',
      'xmlns:xlink': 'xmlnsXlink',
      xmlspace: 'xmlSpace',
      y1: 'y1',
      y2: 'y2',
      y: 'y',
      ychannelselector: 'yChannelSelector',
      z: 'z',
      zoomandpan: 'zoomAndPan'
    };

    var validateProperty$1 = function validateProperty$1() {};

    {
      var warnedProperties$1 = {};
      var _hasOwnProperty = Object.prototype.hasOwnProperty;
      var EVENT_NAME_REGEX = /^on./;
      var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
      var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
      var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

      validateProperty$1 = function validateProperty$1(tagName, name, value, canUseEventSystem) {
        if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
          return true;
        }

        var lowerCasedName = name.toLowerCase();
        if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
          warning$1(false, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');
          warnedProperties$1[name] = true;
          return true;
        }

        // We can't rely on the event system being injected on the server.
        if (canUseEventSystem) {
          if (registrationNameModules.hasOwnProperty(name)) {
            return true;
          }
          var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
          if (registrationName != null) {
            warning$1(false, 'Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);
            warnedProperties$1[name] = true;
            return true;
          }
          if (EVENT_NAME_REGEX.test(name)) {
            warning$1(false, 'Unknown event handler property `%s`. It will be ignored.', name);
            warnedProperties$1[name] = true;
            return true;
          }
        } else if (EVENT_NAME_REGEX.test(name)) {
          // If no event plugins have been injected, we are in a server environment.
          // So we can't tell if the event name is correct for sure, but we can filter
          // out known bad ones like `onclick`. We can't suggest a specific replacement though.
          if (INVALID_EVENT_NAME_REGEX.test(name)) {
            warning$1(false, 'Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
          }
          warnedProperties$1[name] = true;
          return true;
        }

        // Let the ARIA attribute hook validate ARIA attributes
        if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
          return true;
        }

        if (lowerCasedName === 'innerhtml') {
          warning$1(false, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');
          warnedProperties$1[name] = true;
          return true;
        }

        if (lowerCasedName === 'aria') {
          warning$1(false, 'The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');
          warnedProperties$1[name] = true;
          return true;
        }

        if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
          warning$1(false, 'Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value === 'undefined' ? 'undefined' : _typeof(value));
          warnedProperties$1[name] = true;
          return true;
        }

        if (typeof value === 'number' && isNaN(value)) {
          warning$1(false, 'Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);
          warnedProperties$1[name] = true;
          return true;
        }

        var propertyInfo = getPropertyInfo(name);
        var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;

        // Known attributes should match the casing specified in the property config.
        if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
          var standardName = possibleStandardNames[lowerCasedName];
          if (standardName !== name) {
            warning$1(false, 'Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);
            warnedProperties$1[name] = true;
            return true;
          }
        } else if (!isReserved && name !== lowerCasedName) {
          // Unknown attributes should have lowercase casing since that's how they
          // will be cased anyway with server rendering.
          warning$1(false, 'React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);
          warnedProperties$1[name] = true;
          return true;
        }

        if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
          if (value) {
            warning$1(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
          } else {
            warning$1(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
          }
          warnedProperties$1[name] = true;
          return true;
        }

        // Now that we've validated casing, do not validate
        // data types for reserved props
        if (isReserved) {
          return true;
        }

        // Warn when a known attribute is a bad type
        if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
          warnedProperties$1[name] = true;
          return false;
        }

        // Warn when passing the strings 'false' or 'true' into a boolean prop
        if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
          warning$1(false, 'Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
          warnedProperties$1[name] = true;
          return true;
        }

        return true;
      };
    }

    var warnUnknownProperties = function warnUnknownProperties(type, props, canUseEventSystem) {
      var unknownProps = [];
      for (var key in props) {
        var isValid = validateProperty$1(type, key, props[key], canUseEventSystem);
        if (!isValid) {
          unknownProps.push(key);
        }
      }

      var unknownPropString = unknownProps.map(function (prop) {
        return '`' + prop + '`';
      }).join(', ');
      if (unknownProps.length === 1) {
        warning$1(false, 'Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
      } else if (unknownProps.length > 1) {
        warning$1(false, 'Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
      }
    };

    function validateProperties$2(type, props, canUseEventSystem) {
      if (isCustomComponent(type, props)) {
        return;
      }
      warnUnknownProperties(type, props, canUseEventSystem);
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    // Based on reading the React.Children implementation. TODO: type this somewhere?

    var toArray = React.Children.toArray;

    // This is only used in DEV.
    // Each entry is `this.stack` from a currently executing renderer instance.
    // (There may be more than one because ReactDOMServer is reentrant).
    // Each stack is an array of frames which may contain nested stacks of elements.
    var currentDebugStacks = [];

    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
    var ReactDebugCurrentFrame = void 0;
    var prevGetCurrentStackImpl = null;
    var getCurrentServerStackImpl = function getCurrentServerStackImpl() {
      return '';
    };
    var describeStackFrame = function describeStackFrame(element) {
      return '';
    };

    var validatePropertiesInDevelopment = function validatePropertiesInDevelopment(type, props) {};
    var pushCurrentDebugStack = function pushCurrentDebugStack(stack) {};
    var pushElementToDebugStack = function pushElementToDebugStack(element) {};
    var popCurrentDebugStack = function popCurrentDebugStack() {};
    var hasWarnedAboutUsingContextAsConsumer = false;

    {
      ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

      validatePropertiesInDevelopment = function validatePropertiesInDevelopment(type, props) {
        validateProperties(type, props);
        validateProperties$1(type, props);
        validateProperties$2(type, props, /* canUseEventSystem */false);
      };

      describeStackFrame = function describeStackFrame(element) {
        var source = element._source;
        var type = element.type;
        var name = getComponentName(type);
        var ownerName = null;
        return describeComponentFrame(name, source, ownerName);
      };

      pushCurrentDebugStack = function pushCurrentDebugStack(stack) {
        currentDebugStacks.push(stack);

        if (currentDebugStacks.length === 1) {
          // We are entering a server renderer.
          // Remember the previous (e.g. client) global stack implementation.
          prevGetCurrentStackImpl = ReactDebugCurrentFrame.getCurrentStack;
          ReactDebugCurrentFrame.getCurrentStack = getCurrentServerStackImpl;
        }
      };

      pushElementToDebugStack = function pushElementToDebugStack(element) {
        // For the innermost executing ReactDOMServer call,
        var stack = currentDebugStacks[currentDebugStacks.length - 1];
        // Take the innermost executing frame (e.g. <Foo>),
        var frame = stack[stack.length - 1];
        // and record that it has one more element associated with it.
        frame.debugElementStack.push(element);
        // We only need this because we tail-optimize single-element
        // children and directly handle them in an inner loop instead of
        // creating separate frames for them.
      };

      popCurrentDebugStack = function popCurrentDebugStack() {
        currentDebugStacks.pop();

        if (currentDebugStacks.length === 0) {
          // We are exiting the server renderer.
          // Restore the previous (e.g. client) global stack implementation.
          ReactDebugCurrentFrame.getCurrentStack = prevGetCurrentStackImpl;
          prevGetCurrentStackImpl = null;
        }
      };

      getCurrentServerStackImpl = function getCurrentServerStackImpl() {
        if (currentDebugStacks.length === 0) {
          // Nothing is currently rendering.
          return '';
        }
        // ReactDOMServer is reentrant so there may be multiple calls at the same time.
        // Take the frames from the innermost call which is the last in the array.
        var frames = currentDebugStacks[currentDebugStacks.length - 1];
        var stack = '';
        // Go through every frame in the stack from the innermost one.
        for (var i = frames.length - 1; i >= 0; i--) {
          var frame = frames[i];
          // Every frame might have more than one debug element stack entry associated with it.
          // This is because single-child nesting doesn't create materialized frames.
          // Instead it would push them through `pushElementToDebugStack()`.
          var _debugElementStack = frame.debugElementStack;
          for (var ii = _debugElementStack.length - 1; ii >= 0; ii--) {
            stack += describeStackFrame(_debugElementStack[ii]);
          }
        }
        return stack;
      };
    }

    var didWarnDefaultInputValue = false;
    var didWarnDefaultChecked = false;
    var didWarnDefaultSelectValue = false;
    var didWarnDefaultTextareaValue = false;
    var didWarnInvalidOptionChildren = false;
    var didWarnAboutNoopUpdateForComponent = {};
    var didWarnAboutBadClass = {};
    var didWarnAboutDeprecatedWillMount = {};
    var didWarnAboutUndefinedDerivedState = {};
    var didWarnAboutUninitializedState = {};
    var valuePropNames = ['value', 'defaultValue'];
    var newlineEatingTags = {
      listing: true,
      pre: true,
      textarea: true
    };

    // We accept any tag to be rendered but since this gets injected into arbitrary
    // HTML, we want to make sure that it's a safe tag.
    // http://www.w3.org/TR/REC-xml/#NT-Name
    var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
    var validatedTagCache = {};
    function validateDangerousTag(tag) {
      if (!validatedTagCache.hasOwnProperty(tag)) {
        !VALID_TAG_REGEX.test(tag) ? invariant(false, 'Invalid tag: %s', tag) : void 0;
        validatedTagCache[tag] = true;
      }
    }

    var styleNameCache = {};
    var processStyleName = function processStyleName(styleName) {
      if (styleNameCache.hasOwnProperty(styleName)) {
        return styleNameCache[styleName];
      }
      var result = hyphenateStyleName(styleName);
      styleNameCache[styleName] = result;
      return result;
    };

    function createMarkupForStyles(styles) {
      var serialized = '';
      var delimiter = '';
      for (var styleName in styles) {
        if (!styles.hasOwnProperty(styleName)) {
          continue;
        }
        var isCustomProperty = styleName.indexOf('--') === 0;
        var styleValue = styles[styleName];
        {
          if (!isCustomProperty) {
            warnValidStyle$1(styleName, styleValue);
          }
        }
        if (styleValue != null) {
          serialized += delimiter + processStyleName(styleName) + ':';
          serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);

          delimiter = ';';
        }
      }
      return serialized || null;
    }

    function warnNoop(publicInstance, callerName) {
      {
        var _constructor = publicInstance.constructor;
        var componentName = _constructor && getComponentName(_constructor) || 'ReactClass';
        var warningKey = componentName + '.' + callerName;
        if (didWarnAboutNoopUpdateForComponent[warningKey]) {
          return;
        }

        warningWithoutStack$1(false, '%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
        didWarnAboutNoopUpdateForComponent[warningKey] = true;
      }
    }

    function shouldConstruct(Component) {
      return Component.prototype && Component.prototype.isReactComponent;
    }

    function getNonChildrenInnerMarkup(props) {
      var innerHTML = props.dangerouslySetInnerHTML;
      if (innerHTML != null) {
        if (innerHTML.__html != null) {
          return innerHTML.__html;
        }
      } else {
        var content = props.children;
        if (typeof content === 'string' || typeof content === 'number') {
          return escapeTextForBrowser(content);
        }
      }
      return null;
    }

    function flattenTopLevelChildren(children) {
      if (!React.isValidElement(children)) {
        return toArray(children);
      }
      var element = children;
      if (element.type !== REACT_FRAGMENT_TYPE) {
        return [element];
      }
      var fragmentChildren = element.props.children;
      if (!React.isValidElement(fragmentChildren)) {
        return toArray(fragmentChildren);
      }
      var fragmentChildElement = fragmentChildren;
      return [fragmentChildElement];
    }

    function flattenOptionChildren(children) {
      if (children === undefined || children === null) {
        return children;
      }
      var content = '';
      // Flatten children and warn if they aren't strings or numbers;
      // invalid types are ignored.
      React.Children.forEach(children, function (child) {
        if (child == null) {
          return;
        }
        content += child;
        {
          if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
            didWarnInvalidOptionChildren = true;
            warning$1(false, 'Only strings and numbers are supported as <option> children.');
          }
        }
      });
      return content;
    }

    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var STYLE = 'style';
    var RESERVED_PROPS = {
      children: null,
      dangerouslySetInnerHTML: null,
      suppressContentEditableWarning: null,
      suppressHydrationWarning: null
    };

    function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
      var ret = '<' + tagVerbatim;

      for (var propKey in props) {
        if (!hasOwnProperty.call(props, propKey)) {
          continue;
        }
        var propValue = props[propKey];
        if (propValue == null) {
          continue;
        }
        if (propKey === STYLE) {
          propValue = createMarkupForStyles(propValue);
        }
        var markup = null;
        if (isCustomComponent(tagLowercase, props)) {
          if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
            markup = createMarkupForCustomAttribute(propKey, propValue);
          }
        } else {
          markup = createMarkupForProperty(propKey, propValue);
        }
        if (markup) {
          ret += ' ' + markup;
        }
      }

      // For static pages, no need to put React ID and checksum. Saves lots of
      // bytes.
      if (makeStaticMarkup) {
        return ret;
      }

      if (isRootElement) {
        ret += ' ' + createMarkupForRoot();
      }
      return ret;
    }

    function validateRenderResult(child, type) {
      if (child === undefined) {
        invariant(false, '%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.', getComponentName(type) || 'Component');
      }
    }

    function resolve(child, context, threadID) {
      while (React.isValidElement(child)) {
        // Safe because we just checked it's an element.
        var element = child;
        var Component = element.type;
        {
          pushElementToDebugStack(element);
        }
        if (typeof Component !== 'function') {
          break;
        }
        processChild(element, Component);
      }

      // Extra closure so queue and replace can be captured properly
      function processChild(element, Component) {
        var publicContext = processContext(Component, context, threadID);

        var queue = [];
        var replace = false;
        var updater = {
          isMounted: function isMounted(publicInstance) {
            return false;
          },
          enqueueForceUpdate: function enqueueForceUpdate(publicInstance) {
            if (queue === null) {
              warnNoop(publicInstance, 'forceUpdate');
              return null;
            }
          },
          enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState) {
            replace = true;
            queue = [completeState];
          },
          enqueueSetState: function enqueueSetState(publicInstance, currentPartialState) {
            if (queue === null) {
              warnNoop(publicInstance, 'setState');
              return null;
            }
            queue.push(currentPartialState);
          }
        };

        var inst = void 0;
        if (shouldConstruct(Component)) {
          inst = new Component(element.props, publicContext, updater);

          if (typeof Component.getDerivedStateFromProps === 'function') {
            {
              if (inst.state === null || inst.state === undefined) {
                var componentName = getComponentName(Component) || 'Unknown';
                if (!didWarnAboutUninitializedState[componentName]) {
                  warningWithoutStack$1(false, '`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, inst.state === null ? 'null' : 'undefined', componentName);
                  didWarnAboutUninitializedState[componentName] = true;
                }
              }
            }

            var partialState = Component.getDerivedStateFromProps.call(null, element.props, inst.state);

            {
              if (partialState === undefined) {
                var _componentName = getComponentName(Component) || 'Unknown';
                if (!didWarnAboutUndefinedDerivedState[_componentName]) {
                  warningWithoutStack$1(false, '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', _componentName);
                  didWarnAboutUndefinedDerivedState[_componentName] = true;
                }
              }
            }

            if (partialState != null) {
              inst.state = _assign({}, inst.state, partialState);
            }
          }
        } else {
          {
            if (Component.prototype && typeof Component.prototype.render === 'function') {
              var _componentName2 = getComponentName(Component) || 'Unknown';

              if (!didWarnAboutBadClass[_componentName2]) {
                warningWithoutStack$1(false, "The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', _componentName2, _componentName2);
                didWarnAboutBadClass[_componentName2] = true;
              }
            }
          }
          var componentIdentity = {};
          prepareToUseHooks(componentIdentity);
          inst = Component(element.props, publicContext, updater);
          inst = finishHooks(Component, element.props, inst, publicContext);

          if (inst == null || inst.render == null) {
            child = inst;
            validateRenderResult(child, Component);
            return;
          }
        }

        inst.props = element.props;
        inst.context = publicContext;
        inst.updater = updater;

        var initialState = inst.state;
        if (initialState === undefined) {
          inst.state = initialState = null;
        }
        if (typeof inst.UNSAFE_componentWillMount === 'function' || typeof inst.componentWillMount === 'function') {
          if (typeof inst.componentWillMount === 'function') {
            {
              if (warnAboutDeprecatedLifecycles && inst.componentWillMount.__suppressDeprecationWarning !== true) {
                var _componentName3 = getComponentName(Component) || 'Unknown';

                if (!didWarnAboutDeprecatedWillMount[_componentName3]) {
                  lowPriorityWarning$1(false, '%s: componentWillMount() is deprecated and will be ' + 'removed in the next major version. Read about the motivations ' + 'behind this change: ' + 'https://fb.me/react-async-component-lifecycle-hooks' + '\n\n' + 'As a temporary workaround, you can rename to ' + 'UNSAFE_componentWillMount instead.', _componentName3);
                  didWarnAboutDeprecatedWillMount[_componentName3] = true;
                }
              }
            }

            // In order to support react-lifecycles-compat polyfilled components,
            // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
            if (typeof Component.getDerivedStateFromProps !== 'function') {
              inst.componentWillMount();
            }
          }
          if (typeof inst.UNSAFE_componentWillMount === 'function' && typeof Component.getDerivedStateFromProps !== 'function') {
            // In order to support react-lifecycles-compat polyfilled components,
            // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
            inst.UNSAFE_componentWillMount();
          }
          if (queue.length) {
            var oldQueue = queue;
            var oldReplace = replace;
            queue = null;
            replace = false;

            if (oldReplace && oldQueue.length === 1) {
              inst.state = oldQueue[0];
            } else {
              var nextState = oldReplace ? oldQueue[0] : inst.state;
              var dontMutate = true;
              for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
                var partial = oldQueue[i];
                var _partialState = typeof partial === 'function' ? partial.call(inst, nextState, element.props, publicContext) : partial;
                if (_partialState != null) {
                  if (dontMutate) {
                    dontMutate = false;
                    nextState = _assign({}, nextState, _partialState);
                  } else {
                    _assign(nextState, _partialState);
                  }
                }
              }
              inst.state = nextState;
            }
          } else {
            queue = null;
          }
        }
        child = inst.render();

        {
          if (child === undefined && inst.render._isMockFunction) {
            // This is probably bad practice. Consider warning here and
            // deprecating this convenience.
            child = null;
          }
        }
        validateRenderResult(child, Component);

        var childContext = void 0;
        if (typeof inst.getChildContext === 'function') {
          var childContextTypes = Component.childContextTypes;
          if ((typeof childContextTypes === 'undefined' ? 'undefined' : _typeof(childContextTypes)) === 'object') {
            childContext = inst.getChildContext();
            for (var contextKey in childContext) {
              !(contextKey in childContextTypes) ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', getComponentName(Component) || 'Unknown', contextKey) : void 0;
            }
          } else {
            warningWithoutStack$1(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', getComponentName(Component) || 'Unknown');
          }
        }
        if (childContext) {
          context = _assign({}, context, childContext);
        }
      }
      return { child: child, context: context };
    }

    var ReactDOMServerRenderer = function () {
      // DEV-only

      // TODO: type this more strictly:
      function ReactDOMServerRenderer(children, makeStaticMarkup) {
        _classCallCheck(this, ReactDOMServerRenderer);

        var flatChildren = flattenTopLevelChildren(children);

        var topFrame = {
          type: null,
          // Assume all trees start in the HTML namespace (not totally true, but
          // this is what we did historically)
          domNamespace: Namespaces.html,
          children: flatChildren,
          childIndex: 0,
          context: emptyObject,
          footer: ''
        };
        {
          topFrame.debugElementStack = [];
        }
        this.threadID = allocThreadID();
        this.stack = [topFrame];
        this.exhausted = false;
        this.currentSelectValue = null;
        this.previousWasTextNode = false;
        this.makeStaticMarkup = makeStaticMarkup;
        this.suspenseDepth = 0;

        // Context (new API)
        this.contextIndex = -1;
        this.contextStack = [];
        this.contextValueStack = [];
        {
          this.contextProviderStack = [];
        }
      }

      ReactDOMServerRenderer.prototype.destroy = function destroy() {
        if (!this.exhausted) {
          this.exhausted = true;
          this.clearProviders();
          freeThreadID(this.threadID);
        }
      };

      /**
       * Note: We use just two stacks regardless of how many context providers you have.
       * Providers are always popped in the reverse order to how they were pushed
       * so we always know on the way down which provider you'll encounter next on the way up.
       * On the way down, we push the current provider, and its context value *before*
       * we mutated it, onto the stacks. Therefore, on the way up, we always know which
       * provider needs to be "restored" to which value.
       * https://github.com/facebook/react/pull/12985#issuecomment-396301248
       */

      ReactDOMServerRenderer.prototype.pushProvider = function pushProvider(provider) {
        var index = ++this.contextIndex;
        var context = provider.type._context;
        var threadID = this.threadID;
        validateContextBounds(context, threadID);
        var previousValue = context[threadID];

        // Remember which value to restore this context to on our way up.
        this.contextStack[index] = context;
        this.contextValueStack[index] = previousValue;
        {
          // Only used for push/pop mismatch warnings.
          this.contextProviderStack[index] = provider;
        }

        // Mutate the current value.
        context[threadID] = provider.props.value;
      };

      ReactDOMServerRenderer.prototype.popProvider = function popProvider(provider) {
        var index = this.contextIndex;
        {
          !(index > -1 && provider === this.contextProviderStack[index]) ? warningWithoutStack$1(false, 'Unexpected pop.') : void 0;
        }

        var context = this.contextStack[index];
        var previousValue = this.contextValueStack[index];

        // "Hide" these null assignments from Flow by using `any`
        // because conceptually they are deletions--as long as we
        // promise to never access values beyond `this.contextIndex`.
        this.contextStack[index] = null;
        this.contextValueStack[index] = null;
        {
          this.contextProviderStack[index] = null;
        }
        this.contextIndex--;

        // Restore to the previous value we stored as we were walking down.
        // We've already verified that this context has been expanded to accommodate
        // this thread id, so we don't need to do it again.
        context[this.threadID] = previousValue;
      };

      ReactDOMServerRenderer.prototype.clearProviders = function clearProviders() {
        // Restore any remaining providers on the stack to previous values
        for (var index = this.contextIndex; index >= 0; index--) {
          var _context = this.contextStack[index];
          var previousValue = this.contextValueStack[index];
          _context[this.threadID] = previousValue;
        }
      };

      ReactDOMServerRenderer.prototype.read = function read(bytes) {
        if (this.exhausted) {
          return null;
        }

        var prevThreadID = currentThreadID;
        setCurrentThreadID(this.threadID);
        var prevDispatcher = ReactCurrentDispatcher.current;
        ReactCurrentDispatcher.current = Dispatcher;
        try {
          // Markup generated within <Suspense> ends up buffered until we know
          // nothing in that boundary suspended
          var out = [''];
          var suspended = false;
          while (out[0].length < bytes) {
            if (this.stack.length === 0) {
              this.exhausted = true;
              freeThreadID(this.threadID);
              break;
            }
            var frame = this.stack[this.stack.length - 1];
            if (suspended || frame.childIndex >= frame.children.length) {
              var _footer = frame.footer;
              if (_footer !== '') {
                this.previousWasTextNode = false;
              }
              this.stack.pop();
              if (frame.type === 'select') {
                this.currentSelectValue = null;
              } else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === REACT_PROVIDER_TYPE) {
                var provider = frame.type;
                this.popProvider(provider);
              } else if (frame.type === REACT_SUSPENSE_TYPE) {
                this.suspenseDepth--;
                var buffered = out.pop();

                if (suspended) {
                  suspended = false;
                  // If rendering was suspended at this boundary, render the fallbackFrame
                  var _fallbackFrame = frame.fallbackFrame;
                  !_fallbackFrame ? invariant(false, 'suspense fallback not found, something is broken') : void 0;
                  this.stack.push(_fallbackFrame);
                  // Skip flushing output since we're switching to the fallback
                  continue;
                } else {
                  out[this.suspenseDepth] += buffered;
                }
              }

              // Flush output
              out[this.suspenseDepth] += _footer;
              continue;
            }
            var child = frame.children[frame.childIndex++];

            var outBuffer = '';
            {
              pushCurrentDebugStack(this.stack);
              // We're starting work on this frame, so reset its inner stack.
              frame.debugElementStack.length = 0;
            }
            try {
              outBuffer += this.render(child, frame.context, frame.domNamespace);
            } catch (err) {
              if (enableSuspenseServerRenderer && typeof err.then === 'function') {
                suspended = true;
              } else {
                throw err;
              }
            } finally {
              {
                popCurrentDebugStack();
              }
            }
            if (out.length <= this.suspenseDepth) {
              out.push('');
            }
            out[this.suspenseDepth] += outBuffer;
          }
          return out[0];
        } finally {
          ReactCurrentDispatcher.current = prevDispatcher;
          setCurrentThreadID(prevThreadID);
        }
      };

      ReactDOMServerRenderer.prototype.render = function render(child, context, parentNamespace) {
        if (typeof child === 'string' || typeof child === 'number') {
          var text = '' + child;
          if (text === '') {
            return '';
          }
          if (this.makeStaticMarkup) {
            return escapeTextForBrowser(text);
          }
          if (this.previousWasTextNode) {
            return '<!-- -->' + escapeTextForBrowser(text);
          }
          this.previousWasTextNode = true;
          return escapeTextForBrowser(text);
        } else {
          var nextChild = void 0;

          var _resolve = resolve(child, context, this.threadID);

          nextChild = _resolve.child;
          context = _resolve.context;

          if (nextChild === null || nextChild === false) {
            return '';
          } else if (!React.isValidElement(nextChild)) {
            if (nextChild != null && nextChild.$$typeof != null) {
              // Catch unexpected special types early.
              var $$typeof = nextChild.$$typeof;
              !($$typeof !== REACT_PORTAL_TYPE) ? invariant(false, 'Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.') : void 0;
              // Catch-all to prevent an infinite loop if React.Children.toArray() supports some new type.
              invariant(false, 'Unknown element-like object type: %s. This is likely a bug in React. Please file an issue.', $$typeof.toString());
            }
            var nextChildren = toArray(nextChild);
            var frame = {
              type: null,
              domNamespace: parentNamespace,
              children: nextChildren,
              childIndex: 0,
              context: context,
              footer: ''
            };
            {
              frame.debugElementStack = [];
            }
            this.stack.push(frame);
            return '';
          }
          // Safe because we just checked it's an element.
          var nextElement = nextChild;
          var elementType = nextElement.type;

          if (typeof elementType === 'string') {
            return this.renderDOM(nextElement, context, parentNamespace);
          }

          switch (elementType) {
            case REACT_STRICT_MODE_TYPE:
            case REACT_CONCURRENT_MODE_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_FRAGMENT_TYPE:
              {
                var _nextChildren = toArray(nextChild.props.children);
                var _frame = {
                  type: null,
                  domNamespace: parentNamespace,
                  children: _nextChildren,
                  childIndex: 0,
                  context: context,
                  footer: ''
                };
                {
                  _frame.debugElementStack = [];
                }
                this.stack.push(_frame);
                return '';
              }
            case REACT_SUSPENSE_TYPE:
              {
                if (enableSuspenseServerRenderer) {
                  var fallback = nextChild.props.fallback;
                  if (fallback === undefined) {
                    // If there is no fallback, then this just behaves as a fragment.
                    var _nextChildren3 = toArray(nextChild.props.children);
                    var _frame3 = {
                      type: null,
                      domNamespace: parentNamespace,
                      children: _nextChildren3,
                      childIndex: 0,
                      context: context,
                      footer: ''
                    };
                    {
                      _frame3.debugElementStack = [];
                    }
                    this.stack.push(_frame3);
                    return '';
                  }
                  var fallbackChildren = toArray(fallback);
                  var _nextChildren2 = toArray(nextChild.props.children);
                  var _fallbackFrame2 = {
                    type: null,
                    domNamespace: parentNamespace,
                    children: fallbackChildren,
                    childIndex: 0,
                    context: context,
                    footer: '',
                    out: ''
                  };
                  var _frame2 = {
                    fallbackFrame: _fallbackFrame2,
                    type: REACT_SUSPENSE_TYPE,
                    domNamespace: parentNamespace,
                    children: _nextChildren2,
                    childIndex: 0,
                    context: context,
                    footer: '<!--/$-->'
                  };
                  {
                    _frame2.debugElementStack = [];
                    _fallbackFrame2.debugElementStack = [];
                  }
                  this.stack.push(_frame2);
                  this.suspenseDepth++;
                  return '<!--$-->';
                } else {
                  invariant(false, 'ReactDOMServer does not yet support Suspense.');
                }
              }
            // eslint-disable-next-line-no-fallthrough
            default:
              break;
          }
          if ((typeof elementType === 'undefined' ? 'undefined' : _typeof(elementType)) === 'object' && elementType !== null) {
            switch (elementType.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                {
                  var element = nextChild;
                  var _nextChildren4 = void 0;
                  var componentIdentity = {};
                  prepareToUseHooks(componentIdentity);
                  _nextChildren4 = elementType.render(element.props, element.ref);
                  _nextChildren4 = finishHooks(elementType.render, element.props, _nextChildren4, element.ref);
                  _nextChildren4 = toArray(_nextChildren4);
                  var _frame4 = {
                    type: null,
                    domNamespace: parentNamespace,
                    children: _nextChildren4,
                    childIndex: 0,
                    context: context,
                    footer: ''
                  };
                  {
                    _frame4.debugElementStack = [];
                  }
                  this.stack.push(_frame4);
                  return '';
                }
              case REACT_MEMO_TYPE:
                {
                  var _element = nextChild;
                  var _nextChildren5 = [React.createElement(elementType.type, _assign({ ref: _element.ref }, _element.props))];
                  var _frame5 = {
                    type: null,
                    domNamespace: parentNamespace,
                    children: _nextChildren5,
                    childIndex: 0,
                    context: context,
                    footer: ''
                  };
                  {
                    _frame5.debugElementStack = [];
                  }
                  this.stack.push(_frame5);
                  return '';
                }
              case REACT_PROVIDER_TYPE:
                {
                  var provider = nextChild;
                  var nextProps = provider.props;
                  var _nextChildren6 = toArray(nextProps.children);
                  var _frame6 = {
                    type: provider,
                    domNamespace: parentNamespace,
                    children: _nextChildren6,
                    childIndex: 0,
                    context: context,
                    footer: ''
                  };
                  {
                    _frame6.debugElementStack = [];
                  }

                  this.pushProvider(provider);

                  this.stack.push(_frame6);
                  return '';
                }
              case REACT_CONTEXT_TYPE:
                {
                  var reactContext = nextChild.type;
                  // The logic below for Context differs depending on PROD or DEV mode. In
                  // DEV mode, we create a separate object for Context.Consumer that acts
                  // like a proxy to Context. This proxy object adds unnecessary code in PROD
                  // so we use the old behaviour (Context.Consumer references Context) to
                  // reduce size and overhead. The separate object references context via
                  // a property called "_context", which also gives us the ability to check
                  // in DEV mode if this property exists or not and warn if it does not.
                  {
                    if (reactContext._context === undefined) {
                      // This may be because it's a Context (rather than a Consumer).
                      // Or it may be because it's older React where they're the same thing.
                      // We only want to warn if we're sure it's a new React.
                      if (reactContext !== reactContext.Consumer) {
                        if (!hasWarnedAboutUsingContextAsConsumer) {
                          hasWarnedAboutUsingContextAsConsumer = true;
                          warning$1(false, 'Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                        }
                      }
                    } else {
                      reactContext = reactContext._context;
                    }
                  }
                  var _nextProps = nextChild.props;
                  var threadID = this.threadID;
                  validateContextBounds(reactContext, threadID);
                  var nextValue = reactContext[threadID];

                  var _nextChildren7 = toArray(_nextProps.children(nextValue));
                  var _frame7 = {
                    type: nextChild,
                    domNamespace: parentNamespace,
                    children: _nextChildren7,
                    childIndex: 0,
                    context: context,
                    footer: ''
                  };
                  {
                    _frame7.debugElementStack = [];
                  }
                  this.stack.push(_frame7);
                  return '';
                }
              case REACT_LAZY_TYPE:
                invariant(false, 'ReactDOMServer does not yet support lazy-loaded components.');
            }
          }

          var info = '';
          {
            var owner = nextElement._owner;
            if (elementType === undefined || (typeof elementType === 'undefined' ? 'undefined' : _typeof(elementType)) === 'object' && elementType !== null && Object.keys(elementType).length === 0) {
              info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
            }
            var ownerName = owner ? getComponentName(owner) : null;
            if (ownerName) {
              info += '\n\nCheck the render method of `' + ownerName + '`.';
            }
          }
          invariant(false, 'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s', elementType == null ? elementType : typeof elementType === 'undefined' ? 'undefined' : _typeof(elementType), info);
        }
      };

      ReactDOMServerRenderer.prototype.renderDOM = function renderDOM(element, context, parentNamespace) {
        var tag = element.type.toLowerCase();

        var namespace = parentNamespace;
        if (parentNamespace === Namespaces.html) {
          namespace = getIntrinsicNamespace(tag);
        }

        {
          if (namespace === Namespaces.html) {
            // Should this check be gated by parent namespace? Not sure we want to
            // allow <SVG> or <mATH>.
            !(tag === element.type) ? warning$1(false, '<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', element.type) : void 0;
          }
        }

        validateDangerousTag(tag);

        var props = element.props;
        if (tag === 'input') {
          {
            ReactControlledValuePropTypes.checkPropTypes('input', props);

            if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
              warning$1(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
              didWarnDefaultChecked = true;
            }
            if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
              warning$1(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
              didWarnDefaultInputValue = true;
            }
          }

          props = _assign({
            type: undefined
          }, props, {
            defaultChecked: undefined,
            defaultValue: undefined,
            value: props.value != null ? props.value : props.defaultValue,
            checked: props.checked != null ? props.checked : props.defaultChecked
          });
        } else if (tag === 'textarea') {
          {
            ReactControlledValuePropTypes.checkPropTypes('textarea', props);
            if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
              warning$1(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
              didWarnDefaultTextareaValue = true;
            }
          }

          var initialValue = props.value;
          if (initialValue == null) {
            var defaultValue = props.defaultValue;
            // TODO (yungsters): Remove support for children content in <textarea>.
            var textareaChildren = props.children;
            if (textareaChildren != null) {
              {
                warning$1(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
              }
              !(defaultValue == null) ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : void 0;
              if (Array.isArray(textareaChildren)) {
                !(textareaChildren.length <= 1) ? invariant(false, '<textarea> can only have at most one child.') : void 0;
                textareaChildren = textareaChildren[0];
              }

              defaultValue = '' + textareaChildren;
            }
            if (defaultValue == null) {
              defaultValue = '';
            }
            initialValue = defaultValue;
          }

          props = _assign({}, props, {
            value: undefined,
            children: '' + initialValue
          });
        } else if (tag === 'select') {
          {
            ReactControlledValuePropTypes.checkPropTypes('select', props);

            for (var i = 0; i < valuePropNames.length; i++) {
              var propName = valuePropNames[i];
              if (props[propName] == null) {
                continue;
              }
              var isArray = Array.isArray(props[propName]);
              if (props.multiple && !isArray) {
                warning$1(false, 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
              } else if (!props.multiple && isArray) {
                warning$1(false, 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
              }
            }

            if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
              warning$1(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
              didWarnDefaultSelectValue = true;
            }
          }
          this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
          props = _assign({}, props, {
            value: undefined
          });
        } else if (tag === 'option') {
          var selected = null;
          var selectValue = this.currentSelectValue;
          var optionChildren = flattenOptionChildren(props.children);
          if (selectValue != null) {
            var value = void 0;
            if (props.value != null) {
              value = props.value + '';
            } else {
              value = optionChildren;
            }
            selected = false;
            if (Array.isArray(selectValue)) {
              // multiple
              for (var j = 0; j < selectValue.length; j++) {
                if ('' + selectValue[j] === value) {
                  selected = true;
                  break;
                }
              }
            } else {
              selected = '' + selectValue === value;
            }

            props = _assign({
              selected: undefined,
              children: undefined
            }, props, {
              selected: selected,
              children: optionChildren
            });
          }
        }

        {
          validatePropertiesInDevelopment(tag, props);
        }

        assertValidProps(tag, props);

        var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
        var footer = '';
        if (omittedCloseTags.hasOwnProperty(tag)) {
          out += '/>';
        } else {
          out += '>';
          footer = '</' + element.type + '>';
        }
        var children = void 0;
        var innerMarkup = getNonChildrenInnerMarkup(props);
        if (innerMarkup != null) {
          children = [];
          if (newlineEatingTags[tag] && innerMarkup.charAt(0) === '\n') {
            // text/html ignores the first character in these tags if it's a newline
            // Prefer to break application/xml over text/html (for now) by adding
            // a newline specifically to get eaten by the parser. (Alternately for
            // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
            // \r is normalized out by HTMLTextAreaElement#value.)
            // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
            // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
            // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
            // See: Parsing of "textarea" "listing" and "pre" elements
            //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
            out += '\n';
          }
          out += innerMarkup;
        } else {
          children = toArray(props.children);
        }
        var frame = {
          domNamespace: getChildNamespace(parentNamespace, element.type),
          type: tag,
          children: children,
          childIndex: 0,
          context: context,
          footer: footer
        };
        {
          frame.debugElementStack = [];
        }
        this.stack.push(frame);
        this.previousWasTextNode = false;
        return out;
      };

      return ReactDOMServerRenderer;
    }();

    /**
     * Render a ReactElement to its initial HTML. This should only be used on the
     * server.
     * See https://reactjs.org/docs/react-dom-server.html#rendertostring
     */
    function renderToString(element) {
      var renderer = new ReactDOMServerRenderer(element, false);
      try {
        var markup = renderer.read(Infinity);
        return markup;
      } finally {
        renderer.destroy();
      }
    }

    /**
     * Similar to renderToString, except this doesn't create extra DOM attributes
     * such as data-react-id that React uses internally.
     * See https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
     */
    function renderToStaticMarkup(element) {
      var renderer = new ReactDOMServerRenderer(element, true);
      try {
        var markup = renderer.read(Infinity);
        return markup;
      } finally {
        renderer.destroy();
      }
    }

    function _classCallCheck$1(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
      }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    // This is a Readable Node.js stream which wraps the ReactDOMPartialRenderer.

    var ReactMarkupReadableStream = function (_Readable) {
      _inherits(ReactMarkupReadableStream, _Readable);

      function ReactMarkupReadableStream(element, makeStaticMarkup) {
        _classCallCheck$1(this, ReactMarkupReadableStream);

        var _this = _possibleConstructorReturn(this, _Readable.call(this, {}));
        // Calls the stream.Readable(options) constructor. Consider exposing built-in
        // features like highWaterMark in the future.


        _this.partialRenderer = new ReactDOMServerRenderer(element, makeStaticMarkup);
        return _this;
      }

      ReactMarkupReadableStream.prototype._destroy = function _destroy(err, callback) {
        this.partialRenderer.destroy();
        callback(err);
      };

      ReactMarkupReadableStream.prototype._read = function _read(size) {
        try {
          this.push(this.partialRenderer.read(size));
        } catch (err) {
          this.destroy(err);
        }
      };

      return ReactMarkupReadableStream;
    }(stream.Readable);
    /**
     * Render a ReactElement to its initial HTML. This should only be used on the
     * server.
     * See https://reactjs.org/docs/react-dom-server.html#rendertonodestream
     */

    function renderToNodeStream(element) {
      return new ReactMarkupReadableStream(element, false);
    }

    /**
     * Similar to renderToNodeStream, except this doesn't create extra DOM attributes
     * such as data-react-id that React uses internally.
     * See https://reactjs.org/docs/react-dom-server.html#rendertostaticnodestream
     */
    function renderToStaticNodeStream(element) {
      return new ReactMarkupReadableStream(element, true);
    }

    // Note: when changing this, also consider https://github.com/facebook/react/issues/11526
    var ReactDOMServerNode = {
      renderToString: renderToString,
      renderToStaticMarkup: renderToStaticMarkup,
      renderToNodeStream: renderToNodeStream,
      renderToStaticNodeStream: renderToStaticNodeStream,
      version: ReactVersion
    };

    var ReactDOMServerNode$1 = Object.freeze({
      default: ReactDOMServerNode
    });

    var ReactDOMServer = ReactDOMServerNode$1 && ReactDOMServerNode || ReactDOMServerNode$1;

    // TODO: decide on the top-level export form.
    // This is hacky but makes it work with both Rollup and Jest
    var server_node = ReactDOMServer.default || ReactDOMServer;

    module.exports = server_node;
  })();
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var printWarning = function printWarning() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(16);
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + (typeof error === 'undefined' ? 'undefined' : _typeof(error)) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function () {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ })
/******/ ]);