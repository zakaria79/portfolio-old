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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ContactForm = __webpack_require__(1);

var _ContactForm2 = _interopRequireDefault(_ContactForm);

var _RouteManager = __webpack_require__(4);

var _RouteManager2 = _interopRequireDefault(_RouteManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var routeManager = new _RouteManager2.default(),
      contactForm = new _ContactForm2.default();

  routeManager.run();
  contactForm.run();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Xhr = __webpack_require__(2);

var _Xhr2 = _interopRequireDefault(_Xhr);

var _DOMManager = __webpack_require__(3);

var _DOMManager2 = _interopRequireDefault(_DOMManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContactForm = function () {
  function ContactForm() {
    _classCallCheck(this, ContactForm);

    var xhr = new _Xhr2.default();
    this.req = xhr.getXhr();
    this.dom = new _DOMManager2.default();
    this.dom.setElement(['#success_message', '#error_message', '#contact_form']);
    this.Es = this.dom.getElements();
  }

  _createClass(ContactForm, [{
    key: 'run',
    value: function run() {
      var _this = this;

      this.Es.contact_formElt.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        _this.req.open('POST', 'portfolio/contact');
        _this.req.onreadystatechange = function () {
          if (_this.req.readyState === XMLHttpRequest.DONE) {
            if (_this.req.status === 200) {
              _this.setMessage(_this.Es.success_messageElt, 'Merci pour votre message, je le lirais dès que possible');
            } else {
              _this.setMessage(_this.Es.error_messageElt, _this.req.responseText);
            }
          }
        };
        _this.req.send(data);
      });
    }
  }, {
    key: 'setMessage',
    value: function setMessage(elt, message) {
      elt.textContent = message;
      elt.hidden = false;
      window.setTimeout(function () {
        elt.hidden = true;
      }, 10000);
    }
  }]);

  return ContactForm;
}();

exports.default = ContactForm;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var xhr = function () {
  function xhr() {
    _classCallCheck(this, xhr);

    this.xhr = false;
  }

  _createClass(xhr, [{
    key: "getXhr",
    value: function getXhr() {
      if (this.xhr) {
        return this.xhr;
      }
      if (window.XMLHttpRequest) {
        this.xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        try {
          this.xhr = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
          try {
            this.xhr = new ActiveXObject("Microsoft.XMLHTTP");
          } catch (e) {}
        }
      }
      if (!this.xhr) {
        alert('Abandon : Impossible de crée une instance XMLHTTP');
        return false;
      }
      return this.xhr;
    }
  }, {
    key: "sendContact",
    value: function sendContact(data, callback) {
      var req = this.req();
      req.open('POST', 'contact');
      req.onreadystatechange = function () {
        if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
          callback(req.responseText);
        }
      };
      req.send(data);
    }
  }]);

  return xhr;
}();

exports.default = xhr;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DOMManager = function () {
  function DOMManager() {
    _classCallCheck(this, DOMManager);

    this.name = 'DOMManager';
    this.elts = {};
    this.errorMessageElt = document.querySelector('#error_message');
    this.successMessageElt = document.querySelector('#success_message');
    this.cover = document.querySelector('#cover');
    this.confirmButton = document.querySelector('#confirm');
    this.annulButton = document.querySelector('#annul');
    this.alertElt = document.querySelector('#alertConfirm');
    this.alertMessageElt = document.querySelector('#alertMessage');
  }

  _createClass(DOMManager, [{
    key: 'fadeOut',
    value: function fadeOut(elt) {
      window.setTimeout(function () {
        elt.hidden = true;
      }, 300);
      elt.classList.add('hide');
    }
  }, {
    key: 'fadeIn',
    value: function fadeIn(elt) {
      window.setTimeout(function () {
        elt.hidden = false;
      }, 300);
      elt.classList.remove('hide');
    }
  }, {
    key: 'getElements',
    value: function getElements() {
      return this.elts;
    }
  }, {
    key: 'setElements',
    value: function setElements(elts) {
      if (elts) {
        this.getElementss(function (selector) {
          return document.querySelectorAll(selector);
        }, elts, 'Elts');
      }
    }
  }, {
    key: 'setErrorMessage',
    value: function setErrorMessage(message) {
      this.setMessage(this.errorMessageElt, message);
    }
  }, {
    key: 'hide',
    value: function hide(elt) {
      elt.classList.add('hide');
    }
  }, {
    key: 'show',
    value: function show(elt) {
      elt.classList.remove('hide');
    }
  }, {
    key: 'setMessage',
    value: function setMessage(elt, message) {
      var _this = this;

      elt.textContent = message;
      this.fadeIn(elt);
      window.setTimeout(function () {
        return _this.fadeOut(elt);
      }, 5000);
    }
  }, {
    key: 'setSuccessMessage',
    value: function setSuccessMessage(message) {
      this.setMessage(this.successMessageElt, message);
    }
  }, {
    key: 'setElement',
    value: function setElement(elts) {
      if (elts) {
        this.getElementss(function (selector) {
          return document.querySelector(selector);
        }, elts, 'Elt');
      }
    }
  }, {
    key: 'getElementss',
    value: function getElementss(callback, elts, suffix) {
      var elt = void 0,
          e = void 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = elts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          elt = _step.value;

          e = elt.replace(/[#.\s-]/g, '') + suffix;
          if (typeof this.elts[elt] === 'undefined') {
            this.elts[e] = callback(elt);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'removeElementIfExist',
    value: function removeElementIfExist(parentElement, selector) {
      if (parentElement.querySelector(selector)) {
        var elt = void 0;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = parentElement.querySelectorAll(selector)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            elt = _step2.value;

            elt.parentElement.removeChild(elt);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }
  }, {
    key: 'emptyElements',
    value: function emptyElements(elts) {
      var elt = void 0;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = elts[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          elt = _step3.value;

          elt.innerHTML = '';
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: 'createElt',
    value: function createElt(parent, type, content) {
      var elt = document.createElement(type);
      elt.innerHTML = content;
      parent.appendChild(elt);
    }
  }, {
    key: 'strong',
    value: function strong(content) {
      return '<strong>' + content + '</strong>';
    }
  }, {
    key: 'displayAlertConfirmMessage',
    value: function displayAlertConfirmMessage(message, confirm) {
      var _this2 = this;

      this.fadeIn(this.cover);
      this.fadeIn(this.alertElt);
      this.alertMessageElt.innerHTML = message;
      this.confirmButton.addEventListener('click', function (e) {
        confirm();
        _this2.fadeOut(_this2.cover);
        _this2.fadeOut(_this2.alertElt);
      });
      this.annulButton.addEventListener('click', function (e) {
        _this2.fadeOut(_this2.cover);
        _this2.fadeOut(_this2.alertElt);
      });
    }
  }, {
    key: 'removeClassIfExist',
    value: function removeClassIfExist(classToRemove) {
      var elts = void 0,
          elt = void 0;
      if (document.querySelector('.' + classToRemove)) {
        elts = document.querySelectorAll('.' + classToRemove);
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = elts[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            elt = _step4.value;

            elt.classList.remove(classToRemove);
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }
    }
  }]);

  return DOMManager;
}();

exports.default = DOMManager;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Route = __webpack_require__(5);

var _Route2 = _interopRequireDefault(_Route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RouteManager = function () {
  function RouteManager() {
    _classCallCheck(this, RouteManager);

    this.routes = {};
    this.stateObj = {};
    this.currentRouteName = window.location.pathname.replace(/.*\/([\w]*)$/, '$1');
    this.title = document.querySelector('#title');
    this.routesNames = ['home', 'realisations', 'apropos', 'contact'];

    this.routesParameters = [{
      name: 'home',
      title: 'ZAKARIA OTHMANE'
    }, {
      name: 'realisations',
      title: 'MES RÉALISATIONS'
    }, {
      name: 'apropos',
      title: 'À PROPOS'
    }, {
      name: 'contact',
      title: 'ME CONTACTER'
    }];
  }

  _createClass(RouteManager, [{
    key: 'run',
    value: function run() {
      this.makeRouteObjects();
    }
  }, {
    key: 'makeRouteObjects',
    value: function makeRouteObjects() {
      for (var i = 0; i < this.routesParameters.length; i++) {
        this.routes[this.routesParameters[i].name] = new _Route2.default(this.routesParameters[i]);
        this.routeListener(this.routes[this.routesParameters[i].name].buttons);
      }
      if (this.routesNames.indexOf(this.currentRouteName) !== -1) {
        this.currentRoute = this.routes[this.currentRouteName];
      } else {
        this.currentRoute = this.routes.home;
      }
      this.currentRoute.show();
    }
  }, {
    key: 'routeListener',
    value: function routeListener(buttons) {
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', this.onChangeRoute.bind(this));
      }
    }
  }, {
    key: 'onChangeRoute',
    value: function onChangeRoute(e) {
      e.preventDefault();
      var nextRoute = this.routes[e.currentTarget.dataset.route];
      var currentRoute = this.currentRoute;
      currentRoute.fadeOut();
      window.setTimeout(function () {
        currentRoute.hide();
        nextRoute.show();
      }, 300);
      this.currentRoute = nextRoute;
    }
  }]);

  return RouteManager;
}();

exports.default = RouteManager;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Route = function () {
  function Route(page) {
    _classCallCheck(this, Route);

    this.name = page.name;
    this.title = page.title;
    this.stateObj = {};
    this.titleElt = document.querySelector('#title');
    this.element = document.querySelector('#' + page.name);
    this.buttons = document.querySelectorAll('.' + page.name + 'Button');
    this.activeButton = this.buttons[0];
  }

  _createClass(Route, [{
    key: 'hide',
    value: function hide() {
      this.element.hidden = true;
      this.buttons[0].classList.remove('active');
    }
  }, {
    key: 'show',
    value: function show() {
      this.element.hidden = false;
      this.buttons[0].classList.add('active');
      this.element.classList.remove('hide_page');
      this.titleElt.textContent = this.title;
      this.stateObj.pageName = this.name;
      window.history.pushState(this.stateObj, 'nextPage', this.name);
    }
  }, {
    key: 'fadeOut',
    value: function fadeOut() {
      this.element.classList.add('hide_page');
    }
  }]);

  return Route;
}();

exports.default = Route;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTdmNzg3MGUyYzE1ODViNDQ4ZmUiLCJ3ZWJwYWNrOi8vLy4vd2ViL2pzL3BvcnRmb2xpby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi93ZWIvanMvcG9ydGZvbGlvL2NvbnRhY3QtbW9kdWxlL0NvbnRhY3RGb3JtLmpzIiwid2VicGFjazovLy8uL3dlYi9qcy94aHIvWGhyLmpzIiwid2VicGFjazovLy8uL3dlYi9qcy9kb20tbWFuYWdlci9ET01NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3dlYi9qcy9wb3J0Zm9saW8vcm91dGUvUm91dGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3dlYi9qcy9wb3J0Zm9saW8vcm91dGUvUm91dGUuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicm91dGVNYW5hZ2VyIiwiY29udGFjdEZvcm0iLCJydW4iLCJDb250YWN0Rm9ybSIsInhociIsInJlcSIsImdldFhociIsImRvbSIsInNldEVsZW1lbnQiLCJFcyIsImdldEVsZW1lbnRzIiwiY29udGFjdF9mb3JtRWx0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsIkZvcm1EYXRhIiwiY3VycmVudFRhcmdldCIsIm9wZW4iLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiWE1MSHR0cFJlcXVlc3QiLCJET05FIiwic3RhdHVzIiwic2V0TWVzc2FnZSIsInN1Y2Nlc3NfbWVzc2FnZUVsdCIsImVycm9yX21lc3NhZ2VFbHQiLCJyZXNwb25zZVRleHQiLCJzZW5kIiwiZWx0IiwibWVzc2FnZSIsInRleHRDb250ZW50IiwiaGlkZGVuIiwid2luZG93Iiwic2V0VGltZW91dCIsIkFjdGl2ZVhPYmplY3QiLCJhbGVydCIsImNhbGxiYWNrIiwiRE9NTWFuYWdlciIsIm5hbWUiLCJlbHRzIiwiZXJyb3JNZXNzYWdlRWx0IiwicXVlcnlTZWxlY3RvciIsInN1Y2Nlc3NNZXNzYWdlRWx0IiwiY292ZXIiLCJjb25maXJtQnV0dG9uIiwiYW5udWxCdXR0b24iLCJhbGVydEVsdCIsImFsZXJ0TWVzc2FnZUVsdCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImdldEVsZW1lbnRzcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWxlY3RvciIsImZhZGVJbiIsImZhZGVPdXQiLCJzdWZmaXgiLCJyZXBsYWNlIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwiaW5uZXJIVE1MIiwicGFyZW50IiwidHlwZSIsImNvbnRlbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjb25maXJtIiwiY2xhc3NUb1JlbW92ZSIsIlJvdXRlTWFuYWdlciIsInJvdXRlcyIsInN0YXRlT2JqIiwiY3VycmVudFJvdXRlTmFtZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ0aXRsZSIsInJvdXRlc05hbWVzIiwicm91dGVzUGFyYW1ldGVycyIsIm1ha2VSb3V0ZU9iamVjdHMiLCJpIiwibGVuZ3RoIiwicm91dGVMaXN0ZW5lciIsImJ1dHRvbnMiLCJpbmRleE9mIiwiY3VycmVudFJvdXRlIiwiaG9tZSIsInNob3ciLCJvbkNoYW5nZVJvdXRlIiwiYmluZCIsIm5leHRSb3V0ZSIsImRhdGFzZXQiLCJyb3V0ZSIsImhpZGUiLCJSb3V0ZSIsInBhZ2UiLCJ0aXRsZUVsdCIsImVsZW1lbnQiLCJhY3RpdmVCdXR0b24iLCJwYWdlTmFtZSIsImhpc3RvcnkiLCJwdXNoU3RhdGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBC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QUFiLENBQXVCQyxHQUF2QixDQUEyQixXQUEzQjtBQUNEOzs7Ozs7a0JBNUJrQjJDLEsiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTdmNzg3MGUyYzE1ODViNDQ4ZmUiLCJpbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnLi9jb250YWN0LW1vZHVsZS9Db250YWN0Rm9ybSc7XG5pbXBvcnQgUm91dGVNYW5hZ2VyIGZyb20gJy4vcm91dGUvUm91dGVNYW5hZ2VyJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICBsZXQgcm91dGVNYW5hZ2VyID0gbmV3IFJvdXRlTWFuYWdlcigpLFxuICAgIGNvbnRhY3RGb3JtID0gbmV3IENvbnRhY3RGb3JtKCk7XG5cbiAgcm91dGVNYW5hZ2VyLnJ1bigpO1xuICBjb250YWN0Rm9ybS5ydW4oKTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2ViL2pzL3BvcnRmb2xpby9pbmRleC5qcyIsImltcG9ydCBYaHIgZnJvbSAnLi8uLi8uLi94aHIvWGhyJztcbmltcG9ydCBET01NYW5hZ2VyIGZyb20gJy4vLi4vLi4vZG9tLW1hbmFnZXIvRE9NTWFuYWdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3RGb3JtIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IHhociA9IG5ldyBYaHIoKTtcbiAgICB0aGlzLnJlcSA9IHhoci5nZXRYaHIoKTtcbiAgICB0aGlzLmRvbSA9IG5ldyBET01NYW5hZ2VyKCk7XG4gICAgdGhpcy5kb20uc2V0RWxlbWVudChbJyNzdWNjZXNzX21lc3NhZ2UnLCAnI2Vycm9yX21lc3NhZ2UnLCAnI2NvbnRhY3RfZm9ybSddKTtcbiAgICB0aGlzLkVzID0gdGhpcy5kb20uZ2V0RWxlbWVudHMoKTtcbiAgfVxuXG4gIHJ1bigpIHtcbiAgICB0aGlzLkVzLmNvbnRhY3RfZm9ybUVsdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgIHRoaXMucmVxLm9wZW4oJ1BPU1QnLCAncG9ydGZvbGlvL2NvbnRhY3QnKTtcbiAgICAgIHRoaXMucmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucmVxLnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcbiAgICAgICAgICBpZiAodGhpcy5yZXEuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TWVzc2FnZSh0aGlzLkVzLnN1Y2Nlc3NfbWVzc2FnZUVsdCwgJ01lcmNpIHBvdXIgdm90cmUgbWVzc2FnZSwgamUgbGUgbGlyYWlzIGTDqHMgcXVlIHBvc3NpYmxlJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TWVzc2FnZSh0aGlzLkVzLmVycm9yX21lc3NhZ2VFbHQsIHRoaXMucmVxLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGhpcy5yZXEuc2VuZChkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldE1lc3NhZ2UoZWx0LCBtZXNzYWdlKSB7XG4gICAgZWx0LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICBlbHQuaGlkZGVuID0gZmFsc2U7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZWx0LmhpZGRlbiA9IHRydWU7XG4gICAgfSwgMTAwMDApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93ZWIvanMvcG9ydGZvbGlvL2NvbnRhY3QtbW9kdWxlL0NvbnRhY3RGb3JtLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgeGhyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnhociA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0WGhyICgpIHtcbiAgICBpZiAodGhpcy54aHIpIHtcbiAgICAgIHJldHVybiB0aGlzLnhocjtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCkge1xuICAgICAgdGhpcy54aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5BY3RpdmVYT2JqZWN0KSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLnhociA9IG5ldyBBY3RpdmVYT2JqZWN0KFwiTXN4bWwyLlhNTEhUVFBcIik7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy54aHIgPSBuZXcgQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMueGhyKSB7XG4gICAgICBhbGVydCgnQWJhbmRvbiA6IEltcG9zc2libGUgZGUgY3LDqWUgdW5lIGluc3RhbmNlIFhNTEhUVFAnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMueGhyO1xuICB9XG5cbiAgc2VuZENvbnRhY3QgKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHJlcSA9IHRoaXMucmVxKCk7XG4gICAgcmVxLm9wZW4oJ1BPU1QnLCdjb250YWN0Jyk7XG4gICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChyZXEucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSAmJiByZXEuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY2FsbGJhY2socmVxLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXEuc2VuZChkYXRhKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2ViL2pzL3hoci9YaHIuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBET01NYW5hZ2VyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm5hbWUgPSAnRE9NTWFuYWdlcic7XG4gICAgdGhpcy5lbHRzID0ge307XG4gICAgdGhpcy5lcnJvck1lc3NhZ2VFbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3JfbWVzc2FnZScpO1xuICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2VFbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VjY2Vzc19tZXNzYWdlJyk7XG4gICAgdGhpcy5jb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3ZlcicpO1xuICAgIHRoaXMuY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb25maXJtJyk7XG4gICAgdGhpcy5hbm51bEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbm51bCcpO1xuICAgIHRoaXMuYWxlcnRFbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxlcnRDb25maXJtJyk7XG4gICAgdGhpcy5hbGVydE1lc3NhZ2VFbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxlcnRNZXNzYWdlJyk7XG4gIH1cblxuICBmYWRlT3V0KGVsdCkge1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGVsdC5oaWRkZW4gPSB0cnVlO1xuICAgIH0sIDMwMCk7XG4gICAgZWx0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfVxuXG4gIGZhZGVJbihlbHQpIHtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBlbHQuaGlkZGVuID0gZmFsc2U7XG4gICAgfSwgMzAwKTtcbiAgICBlbHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXG4gIH1cblxuICBnZXRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5lbHRzO1xuICB9XG5cbiAgc2V0RWxlbWVudHMoZWx0cykge1xuICAgIGlmIChlbHRzKSB7XG4gICAgICB0aGlzLmdldEVsZW1lbnRzcyhzZWxlY3RvciA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSwgZWx0cywgJ0VsdHMnKTtcbiAgICB9XG4gIH1cblxuICBzZXRFcnJvck1lc3NhZ2UobWVzc2FnZSkge1xuICAgIHRoaXMuc2V0TWVzc2FnZSh0aGlzLmVycm9yTWVzc2FnZUVsdCwgbWVzc2FnZSk7XG4gIH1cblxuICBoaWRlKGVsdCkge1xuICAgIGVsdC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIH1cblxuICBzaG93KGVsdCkge1xuICAgIGVsdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH1cblxuICBzZXRNZXNzYWdlKGVsdCwgbWVzc2FnZSkge1xuICAgIGVsdC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgdGhpcy5mYWRlSW4oZWx0KTtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLmZhZGVPdXQoZWx0KSwgNTAwMCk7XG4gIH1cblxuICBzZXRTdWNjZXNzTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgdGhpcy5zZXRNZXNzYWdlKHRoaXMuc3VjY2Vzc01lc3NhZ2VFbHQsIG1lc3NhZ2UpO1xuICB9XG5cbiAgc2V0RWxlbWVudChlbHRzKSB7XG4gICAgaWYgKGVsdHMpIHtcbiAgICAgIHRoaXMuZ2V0RWxlbWVudHNzKHNlbGVjdG9yID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLCBlbHRzLCAnRWx0Jyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RWxlbWVudHNzKGNhbGxiYWNrLCBlbHRzLCBzdWZmaXgpIHtcbiAgICBsZXQgZWx0LCBlO1xuICAgIGZvciAoZWx0IG9mIGVsdHMpIHtcbiAgICAgIGUgPSBlbHQucmVwbGFjZSgvWyMuXFxzLV0vZywgJycpICsgc3VmZml4O1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmVsdHNbZWx0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5lbHRzW2VdID0gY2FsbGJhY2soZWx0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVFbGVtZW50SWZFeGlzdChwYXJlbnRFbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGlmIChwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSB7XG4gICAgICBsZXQgZWx0O1xuICAgICAgZm9yIChlbHQgb2YgcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkge1xuICAgICAgICBlbHQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVtcHR5RWxlbWVudHMoZWx0cykge1xuICAgIGxldCBlbHQ7XG4gICAgZm9yIChlbHQgb2YgZWx0cykge1xuICAgICAgZWx0LmlubmVySFRNTCA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUVsdChwYXJlbnQsIHR5cGUsIGNvbnRlbnQpIHtcbiAgICBsZXQgZWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBlbHQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWx0KTtcbiAgfVxuXG4gIHN0cm9uZyhjb250ZW50KSB7XG4gICAgcmV0dXJuIGA8c3Ryb25nPiR7Y29udGVudH08L3N0cm9uZz5gO1xuICB9XG5cbiAgZGlzcGxheUFsZXJ0Q29uZmlybU1lc3NhZ2UobWVzc2FnZSwgY29uZmlybSkge1xuICAgIHRoaXMuZmFkZUluKHRoaXMuY292ZXIpO1xuICAgIHRoaXMuZmFkZUluKHRoaXMuYWxlcnRFbHQpO1xuICAgIHRoaXMuYWxlcnRNZXNzYWdlRWx0LmlubmVySFRNTCA9IG1lc3NhZ2U7XG4gICAgdGhpcy5jb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbmZpcm0oKTtcbiAgICAgIHRoaXMuZmFkZU91dCh0aGlzLmNvdmVyKTtcbiAgICAgIHRoaXMuZmFkZU91dCh0aGlzLmFsZXJ0RWx0KTtcbiAgICB9KTtcbiAgICB0aGlzLmFubnVsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHRoaXMuZmFkZU91dCh0aGlzLmNvdmVyKTtcbiAgICAgIHRoaXMuZmFkZU91dCh0aGlzLmFsZXJ0RWx0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUNsYXNzSWZFeGlzdChjbGFzc1RvUmVtb3ZlKSB7XG4gICAgbGV0IGVsdHMsIGVsdDtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBjbGFzc1RvUmVtb3ZlKSkge1xuICAgICAgZWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgY2xhc3NUb1JlbW92ZSk7XG4gICAgICBmb3IgKGVsdCBvZiBlbHRzKSB7XG4gICAgICAgIGVsdC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzVG9SZW1vdmUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd2ViL2pzL2RvbS1tYW5hZ2VyL0RPTU1hbmFnZXIuanMiLCJpbXBvcnQgUm91dGUgZnJvbSAnLi9Sb3V0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucm91dGVzID0ge307XG4gICAgdGhpcy5zdGF0ZU9iaiA9IHt9O1xuICAgIHRoaXMuY3VycmVudFJvdXRlTmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC8uKlxcLyhbXFx3XSopJC8sICckMScpO1xuICAgIHRoaXMudGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbiAgICB0aGlzLnJvdXRlc05hbWVzID0gWydob21lJywgJ3JlYWxpc2F0aW9ucycsICdhcHJvcG9zJywgJ2NvbnRhY3QnXTtcblxuICAgIHRoaXMucm91dGVzUGFyYW1ldGVycyA9IFt7XG4gICAgICBuYW1lOiAnaG9tZScsXG4gICAgICB0aXRsZTogJ1pBS0FSSUEgT1RITUFORSdcbiAgICB9LCB7XG4gICAgICBuYW1lOiAncmVhbGlzYXRpb25zJyxcbiAgICAgIHRpdGxlOiAnTUVTIFLDiUFMSVNBVElPTlMnXG4gICAgfSwge1xuICAgICAgbmFtZTogJ2Fwcm9wb3MnLFxuICAgICAgdGl0bGU6ICfDgCBQUk9QT1MnXG4gICAgfSwge1xuICAgICAgbmFtZTogJ2NvbnRhY3QnLFxuICAgICAgdGl0bGU6ICdNRSBDT05UQUNURVInXG4gICAgfSwgXTtcbiAgfVxuXG4gIHJ1bigpIHtcbiAgICB0aGlzLm1ha2VSb3V0ZU9iamVjdHMoKTtcbiAgfVxuXG4gIG1ha2VSb3V0ZU9iamVjdHMoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvdXRlc1BhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMucm91dGVzW3RoaXMucm91dGVzUGFyYW1ldGVyc1tpXS5uYW1lXSA9IG5ldyBSb3V0ZSh0aGlzLnJvdXRlc1BhcmFtZXRlcnNbaV0pO1xuICAgICAgdGhpcy5yb3V0ZUxpc3RlbmVyKHRoaXMucm91dGVzW3RoaXMucm91dGVzUGFyYW1ldGVyc1tpXS5uYW1lXS5idXR0b25zKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucm91dGVzTmFtZXMuaW5kZXhPZih0aGlzLmN1cnJlbnRSb3V0ZU5hbWUpICE9PSAtMSkge1xuICAgICAgdGhpcy5jdXJyZW50Um91dGUgPSB0aGlzLnJvdXRlc1t0aGlzLmN1cnJlbnRSb3V0ZU5hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRSb3V0ZSA9IHRoaXMucm91dGVzLmhvbWU7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudFJvdXRlLnNob3coKTtcbiAgfVxuXG4gIHJvdXRlTGlzdGVuZXIoYnV0dG9ucykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgYnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DaGFuZ2VSb3V0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZVJvdXRlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IG5leHRSb3V0ZSA9IHRoaXMucm91dGVzW2UuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvdXRlXTtcbiAgICB2YXIgY3VycmVudFJvdXRlID0gdGhpcy5jdXJyZW50Um91dGU7XG4gICAgY3VycmVudFJvdXRlLmZhZGVPdXQoKTtcbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGN1cnJlbnRSb3V0ZS5oaWRlKCk7XG4gICAgICBuZXh0Um91dGUuc2hvdygpO1xuICAgIH0sIDMwMCk7XG4gICAgdGhpcy5jdXJyZW50Um91dGUgPSBuZXh0Um91dGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dlYi9qcy9wb3J0Zm9saW8vcm91dGUvUm91dGVNYW5hZ2VyLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGUge1xuICBjb25zdHJ1Y3RvcihwYWdlKSB7XG4gICAgdGhpcy5uYW1lID0gcGFnZS5uYW1lO1xuICAgIHRoaXMudGl0bGUgPSBwYWdlLnRpdGxlO1xuICAgIHRoaXMuc3RhdGVPYmogPSB7fTtcbiAgICB0aGlzLnRpdGxlRWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBwYWdlLm5hbWUpO1xuICAgIHRoaXMuYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgcGFnZS5uYW1lICsgJ0J1dHRvbicpO1xuICAgIHRoaXMuYWN0aXZlQnV0dG9uID0gdGhpcy5idXR0b25zWzBdO1xuICB9XG5cblxuICBoaWRlKCkge1xuICAgIHRoaXMuZWxlbWVudC5oaWRkZW4gPSB0cnVlO1xuICAgIHRoaXMuYnV0dG9uc1swXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5lbGVtZW50LmhpZGRlbiA9IGZhbHNlO1xuICAgIHRoaXMuYnV0dG9uc1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZV9wYWdlJyk7XG4gICAgdGhpcy50aXRsZUVsdC50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG4gICAgdGhpcy5zdGF0ZU9iai5wYWdlTmFtZSA9IHRoaXMubmFtZTtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUodGhpcy5zdGF0ZU9iaiwgJ25leHRQYWdlJywgdGhpcy5uYW1lKTtcbiAgfVxuXG4gIGZhZGVPdXQoKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGVfcGFnZScpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93ZWIvanMvcG9ydGZvbGlvL3JvdXRlL1JvdXRlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==