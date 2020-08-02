// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.skin * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  .skin *::after,\n  .skin *::before {\n    box-sizing: border-box;\n  }\n  \n  .skin {\n    min-height: 50vh;\n    background: #ffe600;\n    position: relative;  \n  }\n  \n  .eye {\n    border: 3px solid #000;\n    width: 54px;\n    height: 54px;\n    position: absolute;\n    left: 50%;\n    top: 90px;\n    margin-left: -32px;\n    background: #2e2e2e;\n    border-radius: 50%;\n  }\n  .eye.right {\n    transform: translateX(120px);\n  }\n  .eye.left {\n    transform: translateX(-120px);\n  }\n  .eye::before {\n    content: \"\";\n    display: block;\n    border: 3px solid black;\n    width: 26px;\n    height: 26px;\n    border-radius: 50%;\n    background: #fff;\n    position: relative;\n    top: 1px;\n    left: 5px;\n  }\n  \n  .nose {\n    border: 12px solid transparent;\n    border-top-color: black;\n    border-radius: 14px;\n    width: 0;\n    height: 0;\n    position: absolute;\n    left: 50%;\n    margin-left: -14px;\n    top: 140px;\n    z-index: 2;\n  }\n  @keyframes wave {\n    0% {\n      transform: rotate(0deg);\n    }\n    33% {\n      transform: rotate(6deg);\n    }\n    66% {\n      transform: rotate(-6deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n  .nose:hover {\n    animation: wave 500ms linear infinite;\n  }\n  .mouth {\n    height: 200px;\n    width: 200px;\n    position: absolute;\n    left: 50%;\n    margin-left: -100px;\n    top: 170px;\n  }\n  .mouth .up {\n    position: relative;\n    top: -20px;\n    z-index: 1;\n  }\n  \n  .mouth .up .lip {\n    background: #ffe600;\n    border: 3px solid black;\n    width: 100px;\n    height: 30px;\n    border-top: transparent;\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n  }\n  .mouth .up .lip.left {\n    border-bottom-left-radius: 340px 180px;\n    transform: rotate(-20deg) translateX(-38px);\n  }\n  .mouth .up .lip.right {\n    border-bottom-right-radius: 340px 180px;\n    transform: rotate(20deg) translateX(38px);\n  }\n  \n  .mouth .up .lip.left::before,\n  .mouth .up .lip.right::before {\n    content: \"\";\n    display: block;\n    width: 18px;\n    height: 30px;\n    position: absolute;\n    right: -4px;\n    bottom: 0;\n    background: #ffe600;\n  }\n  .mouth .up .lip.right::before {\n    border-radius: 0 0 9px 0;\n    left: -4px;\n    bottom: -4px;\n  }\n  .mouth .down {\n    height: 180px;\n    position: absolute;\n    top: 5px;\n    width: 100%;\n    overflow: hidden;\n  }\n  \n  .mouth .down .tongue1 {\n    border: 4px solid black;\n    width: 120px;\n    height: 1000px;\n    position: absolute;\n    left: 50%;\n    bottom: 30px;\n    margin-left: -60px;\n    border-radius: 75px/300px;\n    background: #9b000a;\n    overflow: hidden;\n  }\n  .mouth .down .tongue1 .tongue2 {\n    width: 200px;\n    height: 200px;\n    background: #ff485f;\n    position: absolute;\n    bottom: -80px;\n    left: 50%;\n    margin-left: -100px;\n    border-radius: 50%;\n  }\n  \n  .cheek {\n    border: 3px solid black;\n    width: 70px;\n    height: 70px;\n    position: absolute;\n    left: 50%;\n    margin-left: -35px;\n    top: 210px;\n    border-radius: 50%;\n    background: #ff0000;\n  }\n  .cheek.left {\n    transform: translateX(-150px);\n  }\n  .cheek.right {\n    transform: translateX(150px);\n  }";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  n: 1,
  time: 100,
  id: undefined,
  ui: {
    demo1: document.querySelector("#demo1"),
    demo2: document.querySelector("#demo2")
  },
  events: {
    "#btnPlay": "start",
    "#btnPause": "stop",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  init: function init() {
    player.ui.demo1.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo2.innerText = _css.default.substr(0, player.n);
    player.start();
    player.bindEvents();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        document.querySelector(key).onclick = player[player.events[key]];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n >= _css.default.length) {
      window.clearInterval(player.id);
    }

    player.ui.demo1.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo2.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.scrollTop = demo2.scrollHeight;
  },
  start: function start() {
    return player.id = setInterval(player.run, player.time);
  },
  stop: function stop() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.stop();
    player.time = 300;
    player.start();
  },
  normal: function normal() {
    player.stop();
    player.time = 100;
    player.start();
  },
  fast: function fast() {
    player.stop();
    player.time = 0;
    player.start();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.2d6cbc9d.js.map