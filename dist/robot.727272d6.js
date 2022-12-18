// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jD8xA":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0afa8476727272d6";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"9A4GT":[function(require,module,exports) {
var _languageJs = require("../src/language.js");
var _stackJs = require("../src/stack.js");
var _generatePuzzleJs = require("../src/generatePuzzle.js");
// 'robots.ttf' defines 16 ad-hoc icons, using codes from \uEE00 to \uEE0F :
// 0 = robot pointing east, 1 = robot pointing south, 2 = robot pointing west,
// 3 = robot pointing north, 4 = star, 5 = disk, 6 = box, 7 = flash,
// 8 = heart, 9 = broken heart, A = lock, B = open lock, C = key,
// D = droplet, E = rocket, F = empty
const MAXINSTRUCTION = 1000;
const MAXFUNCTION = 50;
const MAXFUNCTIONINPROGRAM = 5;
/**
 * Evaluates a program on a puzzle
 * @param {array of array} program A sequence of instructions
 * @param {object} puzzle A puzzle
 * @returns A boolean (true if the execution is correct, throws an error otherwise)
 */ function evaluator(program1, program_name, aBoardID, puzzle1) {
    const achievementAcquired1 = {
        "stars": 0
    };
    function isDone(achievementAcquired) {
        return puzzle1.achievementRequired.stars === achievementAcquired.stars;
    }
    function update(robot, puzzle3, achievementAcquired) {
        const nextAchievementAcquired = Object.assign({}, achievementAcquired);
        if (puzzle3.board[robot.row][robot.col].achievement === "star") return {
            "stars": nextAchievementAcquired.stars + 1
        };
        return nextAchievementAcquired;
    }
    function jumppad(robot, obstacle) {
        let newRobot = Object.assign({}, robot);
        switch(obstacle){
            case "jumppadE":
                newRobot.col = newRobot.col + 3;
                break;
            case "jumppadN":
                newRobot.row = newRobot.row - 3;
                break;
            case "jumppadW":
                newRobot.col = newRobot.col - 3;
                break;
            case "jumppadS":
                newRobot.row = newRobot.row + 3;
                break;
            default:
                throw Error("Unknown instruction error");
        }
        return newRobot;
    }
    function robotupdate(robot, head) {
        head.robot = robot;
        return head;
    }
    function updatestack(robot1, stack) {
        function updatestackRec(robot, s) {
            if (_stackJs.stackIsEmpty(s)) return s;
            else if (_stackJs.stackIsEmpty(_stackJs.stackPop(s))) return _stackJs.stackPush(robotupdate(robot, _stackJs.stackPeek(s)), _stackJs.stackPop(s));
            else return _stackJs.stackPush(robotupdate(robot, _stackJs.stackPeek(s)), updatestackRec(robot, _stackJs.stackPop(s)));
        }
        return updatestackRec(robot1, stack);
    }
    function adddebug(currentFunction, currentInstruction, functionNumber, instructionNumber, debug, program) {
        if (program[functionNumber - 1][instructionNumber + 1] === undefined) return _stackJs.stackPush(String(currentInstruction.number) + "0", debug);
        else return _stackJs.stackPush(String(currentInstruction.number) + "0", _stackJs.stackPush(String(functionNumber) + String(instructionNumber + 1), debug));
    }
    function addInstructionFromOldFunction(currentFunction, currentInstruction, functionNumber, instructionNumber, s, program) {
        if (program[functionNumber - 1][instructionNumber + 1] === undefined) return _stackJs.stackPush({
            "function": currentInstruction.number,
            "instruction": 0,
            "robot": currentFunction.robot
        }, s);
        else return _stackJs.stackPush({
            "function": currentInstruction.number,
            "instruction": 0,
            "robot": currentFunction.robot
        }, _stackJs.stackPush({
            "function": functionNumber,
            "instruction": instructionNumber + 1,
            "robot": currentFunction.robot
        }, s));
    }
    async function evalRec(robot, instructCount, functionCount, callStack, achievementAcquired, stackToDisplay, debug) {
        //callStack = updatestack(robot, callStack);
        //stackToDisplay = updatestack(robot, stackToDisplay);
        await sleep(450);
        updateRobot(aBoardID, robot);
        console.log("Affichage d'une nouvelle pile");
        displayCallStack(callStack, program1, program_name);
        if (isDone(achievementAcquired)) return {
            "achieved": true,
            "stackToDisplay": _stackJs.stackPush(callStack, stackToDisplay)
        };
        if (_stackJs.stackIsEmpty(callStack)) throw Error("Puzzle unsolved");
        if (instructCount === MAXINSTRUCTION) throw Error("Infinite loop error");
        if (functionCount === MAXFUNCTION) throw Error("Stack overflow error");
        if (puzzle1.board[robot.row][robot.col].obstacle.substring(0, 7) === "jumppad") {
            const newCoords = jumppad(robot, puzzle1.board[robot.row][robot.col].obstacle);
            return evalRec(newCoords, instructCount, functionCount, callStack, update(newCoords, puzzle1, achievementAcquired), stackToDisplay, debug);
        } else if (puzzle1.board[robot.row][robot.col].obstacle === "spike" && instructCount % 2 === 0) throw Error("Robot was pricked to death");
        const currentFunction = _stackJs.stackPeek(callStack);
        const currentInstruction = program1[currentFunction.function - 1][currentFunction.instruction];
        if (currentFunction.instruction === program1[currentFunction.function - 1].length) return evalRec(robot, instructCount, functionCount, _stackJs.stackPop(Object.assign({}, callStack)), update(robot, puzzle1, achievementAcquired), _stackJs.stackPush(callStack, stackToDisplay), _stackJs.stackPop(debug));
        else if (typeof currentInstruction === "function") {
            const newCoords = currentInstruction(robot, puzzle1.board); // <function> might throw "Out of ground error"
            const newStack = _stackJs.stackPop(Object.assign({}, callStack));
            return evalRec(newCoords, instructCount + 1, functionCount, _stackJs.stackPush({
                "function": _stackJs.stackPeek(callStack).function,
                "instruction": _stackJs.stackPeek(callStack).instruction + 1,
                "robot": newCoords
            }, newStack), update(newCoords, puzzle1, achievementAcquired), _stackJs.stackPush(callStack, stackToDisplay), _stackJs.stackPush(String(currentFunction.function) + String(currentFunction.instruction + 1), _stackJs.stackPop(debug)));
        } else if (typeof currentInstruction === "object" && currentInstruction.number > 0 && currentInstruction.number <= MAXFUNCTIONINPROGRAM) {
            const newStack = _stackJs.stackPop(Object.assign({}, callStack));
            if (currentInstruction.color === puzzle1.board[robot.row][robot.col].color || currentInstruction.color === "") return evalRec(robot, instructCount + 1, functionCount + 1, addInstructionFromOldFunction(currentFunction, currentInstruction, currentFunction.function, currentFunction.instruction, newStack, program1), achievementAcquired, _stackJs.stackPush(callStack, stackToDisplay), adddebug(currentFunction, currentInstruction, currentFunction.function, currentFunction.instruction, _stackJs.stackPop(debug), program1));
            else {
                if (program1[currentFunction.function - 1][currentFunction.instruction + 1] === undefined) throw Error("End of function");
                else return evalRec(robot, instructCount, functionCount, _stackJs.stackPush({
                    "function": _stackJs.stackPeek(callStack).function,
                    "instruction": _stackJs.stackPeek(callStack).instruction + 1,
                    "robot": robot
                }, newStack), achievementAcquired, _stackJs.stackPush(callStack, stackToDisplay), _stackJs.stackPush(String(currentFunction.function) + String(currentFunction.instruction + 1), _stackJs.stackPop(debug)));
            }
        } else throw Error("Unknown instruction error");
    }
    return evalRec(puzzle1.robotInit, 0, 0, _stackJs.stackPush({
        "function": 1,
        "instruction": 0,
        "robot": puzzle1.robotInit
    }, _stackJs.stackCreateEmpty()), achievementAcquired1, _stackJs.stackCreateEmpty(), _stackJs.stackPush("10", _stackJs.stackCreateEmpty()));
}
function displayCallStack(s1, program, program_name) {
    function displayElement(s, i) {
        if (!_stackJs.stackIsEmpty(s)) {
            changeNameInstructionStack(i, getContentFromStackElement(_stackJs.stackPeek(s), program, program_name));
            displayElement(_stackJs.stackPop(s), i + 1);
        }
    }
    cleanStack(20);
    displayElement(_stackJs.stackReverse(s1), 0);
}
function getContentFromStackElement(element, program, program_name) {
    if (element.number !== undefined) return {
        "function": "F" + element.number,
        "color": element.color
    };
    else return program_name[element.function - 1][element.instruction];
}
/**
 * Change the name and the color of an instruction from the callstack to update the user interface
 * @param {number} positionStack Position in the stack, 0 : first value, 1 : second value of the callstack 
 * @param {String} content Name of the instruction
 * @param {Color} color Color of the instruction
 */ function changeNameInstructionStack(positionStack, element) {
    if (element !== undefined) {
        let elt = document.getElementById("elt-" + positionStack);
        elt.innerHTML = element.function;
        elt.style.backgroundColor = element.color;
        elt.style.borderStyle = "solid";
    }
}
const icons = {
    robotEast: {
        string: '\uEE00',
        color: 'pink'
    },
    robotSouth: {
        string: '\uEE03',
        color: 'pink'
    },
    robotWest: {
        string: '\uEE02',
        color: 'pink'
    },
    robotNorth: {
        string: '\uEE01',
        color: 'pink'
    },
    star: {
        string: '\uEE04',
        color: 'yellow'
    },
    disk: {
        string: '\uEE05',
        color: 'red'
    },
    box: {
        string: '\uEE06',
        color: 'brown'
    },
    flash: {
        string: '\uEE07',
        color: 'red'
    },
    heart: {
        string: '\uEE08',
        color: 'red'
    },
    heartBroken: {
        string: '\uEE09',
        color: 'red'
    },
    lock: {
        string: '\uEE0A',
        color: 'red'
    },
    lockOpen: {
        string: '\uEE0B',
        color: 'red'
    },
    key: {
        string: '\uEE0C',
        color: 'red'
    },
    droplet: {
        string: '\uEE0D',
        color: 'red'
    },
    rocket: {
        string: '\uEE0E',
        color: 'red'
    },
    empty: {
        string: '\uEE0F',
        color: 'red'
    }
};
const black = _languageJs.cons("black", "", "");
const blue = _languageJs.cons("blue", "", "");
//const blues = Instruction.cons("blue", "star", "");
const red = _languageJs.cons("red", "", "");
//const green = Instruction.cons("green", "", "");
const star = _languageJs.cons("blue", "star", "");
const learningStack = {
    robotInit: {
        "row": 12,
        "col": 1,
        "dir": 1
    },
    board: [
        [
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black
        ],
        [
            black,
            red,
            blue,
            blue,
            blue,
            blue,
            blue,
            blue,
            blue,
            blue,
            blue,
            blue,
            blue,
            black
        ],
        [
            black,
            blue,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            star,
            black
        ],
        [
            black,
            blue,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black
        ],
        [
            black,
            blue,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black
        ],
        [
            black,
            blue,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black
        ],
        [
            black,
            blue,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black
        ],
        [
            black,
            blue,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black
        ],
        [
            black,
            blue,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black
        ],
        [
            black,
            blue,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black
        ],
        [
            black,
            blue,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black
        ],
        [
            black,
            blue,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black
        ],
        [
            black,
            blue,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black
        ],
        [
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black,
            black
        ]
    ],
    achievementRequired: {
        stars: 1
    }
};
const puzzle = {
    robotColInit: 7,
    robotRowInit: 7,
    robotDirInit: 0,
    board: [
        [
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", "")
        ],
        [
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", "")
        ],
        [
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", "")
        ],
        [
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", "")
        ],
        [
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("green", "", ""),
            _languageJs.cons("blue", "", ""),
            _languageJs.cons("blue", "", ""),
            _languageJs.cons("blue", "", ""),
            _languageJs.cons("blue", "", ""),
            _languageJs.cons("blue", "", ""),
            _languageJs.cons("blue", "", ""),
            _languageJs.cons("green", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", "")
        ],
        [
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("blue", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("blue", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", "")
        ],
        [
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("blue", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("blue", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", "")
        ],
        [
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("blue", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("blue", "", ""),
            _languageJs.cons("blue", "", ""),
            _languageJs.cons("blue", "", ""),
            _languageJs.cons("blue", "", ""),
            _languageJs.cons("blue", "", ""),
            _languageJs.cons("green", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", "")
        ],
        [
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("blue", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", "")
        ],
        [
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("blue", "star", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("green", "", ""),
            _languageJs.cons("red", "", ""),
            _languageJs.cons("green", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", "")
        ],
        [
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("blue", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("blue", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", "")
        ],
        [
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("green", "", ""),
            _languageJs.cons("blue", "", "box"),
            _languageJs.cons("blue", "", ""),
            _languageJs.cons("green", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", "")
        ],
        [
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", ""),
            _languageJs.cons("black", "", "")
        ]
    ]
};
const puzzleSE = {
    robotInit: {
        "row": 0,
        "col": 0,
        "dir": 3
    },
    board: [
        [
            _languageJs.cons("blue", "", ""),
            _languageJs.cons("blue", "", "")
        ],
        [
            _languageJs.cons("blue", "", ""),
            _languageJs.cons("blue", "star", "")
        ]
    ],
    achievementRequired: {
        stars: 1
    }
};
const puzzle2 = {
    robotInit: {
        "row": 3,
        "col": 0,
        "dir": 1
    },
    board: [
        [
            _languageJs.cons("blue", "star", "")
        ],
        [
            _languageJs.cons("blue", "", "")
        ],
        [
            _languageJs.cons("blue", "", "")
        ],
        [
            _languageJs.cons("blue", "", "")
        ]
    ],
    achievementRequired: {
        stars: 1
    }
};
const puzzles = {
    "puzzle": puzzle,
    "puzzleSE": puzzleSE,
    "puzzle2": puzzle2,
    "learningStack": learningStack
};
const robotID = "robot";
/**
 * Remove the robot from the board
 */ function removeRobot() {
    const rCell = document.getElementById(robotID);
    rCell.removeAttribute('id');
    rCell.removeAttribute('style');
    rCell.innerText = icons.empty.string;
}
/**
 * Add a robot on the board 
 * @param {String} aBoardID ID in of the div in the html
 * @param {Object} aRobot Dictionnary with the row, column and the robot direction
 */ function addRobot(aBoardID, aRobot) {
    let aBoard = document.getElementById(aBoardID);
    let aCell = aBoard.rows[aRobot.row].cells[aRobot.col];
    let anIcon = icons[Object.keys(icons)[aRobot.dir]];
    aCell.id = robotID;
    aCell.innerText = anIcon.string;
    aCell.style.color = anIcon.color;
}
/**
 * Add a star in the cell of the board
 * @param {Object} aCell 
 */ function addStar(aCell) {
    aCell.innerText = icons.star.string;
    aCell.style.color = icons.star.color;
}
/**
 * Add a box in the cell of the board
 * @param {Object} aCell 
 */ function addBox(aCell) {
    aCell.innerText = icons.box.string;
    aCell.style.color = icons.box.color;
}
/**
 * Fill the board with a puzzle
 * @param {Object} aBoardID ID in of the div in the html
 * @param {Object} aPuzzle 
 */ function fillBoard(aBoardID, aPuzzle) {
    const tbody = document.getElementById(aBoardID);
    aPuzzle.board.forEach((aLine)=>{
        const newRow = tbody.insertRow();
        aLine.forEach((square)=>{
            const newCell = newRow.insertCell();
            switch(square.color){
                case 'red':
                    newCell.className += " red_tile";
                    break;
                case 'green':
                    newCell.className += " green_tile";
                    break;
                case 'blue':
                    newCell.className += " blue_tile";
                    break;
                case 'black':
                    newCell.className += " black_tile";
                    break;
            }
            switch(square.achievement){
                case "star":
                    addStar(newCell);
                    break;
            }
            switch(square.obstacle){
                case "box":
                    addBox(newCell);
                    break;
            }
        });
    });
}
/**
 * Clean the board with a puzzle
 * @param {Object} aBoardID ID in of the div in the html
 * @param {Object} aPuzzle 
 */ function cleanBoard(aBoardID) {
    const tbody = document.getElementById(aBoardID);
    tbody.innerHTML = "";
}
/**
 * Return a promise in order to delay the time to compute
 * @param {number} ms Time to wait in ms 
 * @returns An object which is a promise
 */ function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms)
    );
}
/**
 * Update the robot position in the board
 * @param {Object} aBoardID ID in of the div in the html
 * @param {Object} robot Dictionnary with the folowing key : function, instruction, robot (row, col, dir)
 */ function updateRobot(aBoardID, robot) {
    removeRobot();
    addRobot(aBoardID, robot);
}
function cleanElementStack(i) {
    let elt = document.getElementById("elt-" + i);
    elt.innerHTML = "";
    elt.style.backgroundColor = "#404040";
    elt.style.borderStyle = "None";
}
function cleanStack(iMax) {
    if (iMax >= 0) {
        cleanElementStack(iMax);
        cleanStack(iMax - 1);
    }
}
/**
 * Display a message on the user interface to know if the execution is a success or not
 * @param {boolean} success Indicates if the execution or not
 */ function displayResult(success) {
    let message = document.getElementById("message");
    if (success) {
        message.innerHTML = "Mission réussie";
        message.style.color = "green";
    } else {
        message.innerHTML = "Mission échouée";
        message.style.color = "red";
    }
    message.style.textAlign = "center";
    message.style.marginTop = "10%";
}
/**
 * 
 * @param {Array} program Array of 5 function with 5 instructions, the value is a function : (robot, board) => {return Instruction.move(robot, 'blue', board);};
 * @param {Array} program_name Array of 5 function with 5 instructions, the value are dictionnary with the following keys : {"function" : "Move", "color" : "dodgerblue"}
 * @param {Object} aBoardID ID in of the div in the html
 * @param {Object} puzzle 
 */ function display(program, program_name, aBoardID, puzzle4) {
    evaluator(program, program_name, aBoardID, puzzle4);
    try {
        // if we replace with true the code works 
        displayResult(true);
    } catch  {
        displayResult(false);
    }
}
/**
 * Clean and generate a map randomly
 * @param {Object} aBoardID ID in of the div in the html
 */ function generateMap(aBoardID) {
    cleanBoard(aBoardID);
    fillBoard(aBoardID, _generatePuzzleJs.generateSolvablePuzzle(_generatePuzzleJs.generateProgram([
        {
            "number": 1,
            "color": ""
        },
        {
            "number": 2,
            "color": ""
        },
        {
            "number": 3,
            "color": ""
        },
        {
            "number": 4,
            "color": ""
        },
        {
            "number": 5,
            "color": ""
        },
        (robot, board)=>_languageJs.rotateLeft(robot, "", board)
        ,
        (robot, board)=>_languageJs.rotateRight(robot, "", board)
        ,
        (robot, board)=>_languageJs.move(robot, "", board)
        ,
        (robot, board)=>_languageJs.teleport(robot, "", 1, board)
    ]), _generatePuzzleJs.generateColorProgram([
        "red",
        "green",
        "blue"
    ]), _generatePuzzleJs.puzzleInit()));
}
window.onload = ()=>{
    let aBoardID = "visualizer_board";
    fillBoard(aBoardID, puzzles.learningStack);
    let function1 = [];
    let function2 = [];
    let function3 = [];
    let function4 = [];
    let function5 = [];
    let function1_name = [];
    let function2_name = [];
    let function3_name = [];
    let function4_name = [];
    let function5_name = [];
    // function1[0] = (robot, board) => {return Instruction.move(robot, 'blue', board);};
    // function1[1] = (robot, board) => {return Instruction.rotateLeft(robot, 'blue', board);};        
    // function1[2] = (robot, board) => {return Instruction.move(robot, 'blue', board);};
    // let program = [function1,function2,function3,function4,function5];
    // function1_name[0] = {"function" : "Move", "color" : "dodgerblue"};        
    // function1_name[1] = {"function" : "Rotate Left", "color" : "dodgerblue"};        
    // function1_name[2] = {"function" : "Move", "color" : "dodgerblue"};        
    // function1[0] = (robot, board) => {return Instruction.move(robot, '', board);};
    // function1[1] = {"number" : 1, "color" : "blue", "instruction" : 1};        
    // function1[2] = (robot, board) => {return Instruction.rotateLeft(robot, "", board);};
    // let program = [function1,function2,function3,function4,function5];
    // function1_name[0] = {"function" : "Move", "color" : "dodgerblue"};        
    // function1_name[1] = {"function" : "F1", "color" : "dodgerblue"};       
    // function1_name[2] = {"function" : "Rotate", "color" : "dodgerblue"};  
    function1[0] = {
        "number": 2,
        "color": ""
    };
    function1[1] = (robot, board)=>{
        return _languageJs.rotateRight(robot, '', board);
    };
    function1[2] = (robot, board)=>{
        return _languageJs.move(robot, '', board);
    };
    function2[0] = (robot, board)=>{
        return _languageJs.move(robot, '', board);
    };
    function2[1] = (robot, board)=>{
        return _languageJs.rotateRight(robot, 'red', board);
    };
    function2[2] = {
        "number": 2,
        "color": "blue"
    };
    function2[3] = (robot, board)=>{
        return _languageJs.move(robot, '', board);
    };
    let program = [
        function1,
        function2,
        function3,
        function4,
        function5
    ];
    function1_name[0] = {
        "function": "F2",
        "color": "dodgerblue"
    };
    function1_name[1] = {
        "function": "Rotate Right",
        "color": "dodgerblue"
    };
    function1_name[2] = {
        "function": "Move",
        "color": "dodgerblue"
    };
    function2_name[0] = {
        "function": "Move",
        "color": "dodgerblue"
    };
    function2_name[1] = {
        "function": "Rotate Right",
        "color": "red"
    };
    function2_name[2] = {
        "function": "F2",
        "color": "dodgerblue"
    };
    function2_name[3] = {
        "function": "Move",
        "color": "dodgerblue"
    };
    let program_name = [
        function1_name,
        function2_name,
        function3_name,
        function4_name,
        function5_name
    ];
    addRobot(aBoardID, puzzles.learningStack.robotInit);
    document.getElementById("button_move").addEventListener("click", ()=>display(program, program_name, aBoardID, puzzles.learningStack)
    );
    document.getElementById("button_generate_map").addEventListener("click", ()=>generateMap(aBoardID)
    );
};

},{"../src/language.js":"cr7w1","../src/stack.js":"eOnbm","../src/generatePuzzle.js":"8Uz7T"}],"eOnbm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stackCreateEmpty", ()=>stackCreateEmpty
);
parcelHelpers.export(exports, "stackIsEmpty", ()=>stackIsEmpty
);
parcelHelpers.export(exports, "stackPush", ()=>stackPush
);
parcelHelpers.export(exports, "stackPop", ()=>stackPop
);
parcelHelpers.export(exports, "stackPeek", ()=>stackPeek
);
parcelHelpers.export(exports, "stackDisplay", ()=>stackDisplay
);
parcelHelpers.export(exports, "stackAppend", ()=>stackAppend
);
parcelHelpers.export(exports, "stackReverse", ()=>stackReverse
);
parcelHelpers.export(exports, "stackLength", ()=>stackLength
);
var _listJs = require("./list.js");
/**
 * Creates an empty stack
 * @returns An empty stack
 */ function stackCreateEmpty() {
    return _listJs.nil;
}
/**
 * Checks if a stack is empty
 * @param {stack} s A stack 
 * @returns A boolean (true if 's' is an empty stack, false otherwise)
 */ function stackIsEmpty(s) {
    return _listJs.isEmpty(s);
}
/**
 * Pushes an element on top of a stack
 * @param {element} e An element 
 * @param {stack} s A stack
 * @returns A new stack where the element 'e' has been pushed on top of the stack 's'
 */ function stackPush(e, s) {
    return _listJs.cons(e, s);
}
/**
 * Pops the top of a stack
 * @param {stack} s A stack
 * @returns A new stack where the top of the stack 's' has been popped (throws an error if 's' is empty)
 */ function stackPop(s) {
    if (stackIsEmpty(s)) throw Error("Impossible to pop on an empty stack");
    return _listJs.tail(s);
}
/**
 * Peeks the element at the top of a stack
 * @param {stack} s A stack
 * @returns The element at the top of the stack 's' (throws an error if 's' is empty) 
 */ function stackPeek(s) {
    if (stackIsEmpty(s)) throw Error("Impossible to peek on an empty stack");
    return _listJs.head(s);
}
/**
 * Displays a stack
 * @param {stack} s A stack
 * @returns A string representing the content of the stack 's'
 */ function stackDisplay(s) {
    return _listJs.listDisp(s);
}
/**
 * Appends a stack to another stack
 * @param {stack} s1 A stack
 * @param {stack} s2 A stack
 * @returns A new stack where 's2' is has been append to 's1' 
 */ function stackAppend(s1, s2) {
    if (stackIsEmpty(s1)) return s2;
    return _listJs.cons(_listJs.head(s1), stackAppend(_listJs.tail(s1), s2));
}
/**
 * Reverse a stack
 * @param {stack} s A stack to reverse
 * @returns A new stack reversed
 */ function stackReverse(s) {
    function reverse(initialStack, finalStack) {
        if (_listJs.isEmpty(initialStack)) return finalStack;
        else return reverse(stackPop(initialStack), _listJs.cons(_listJs.head(initialStack), finalStack));
    }
    return reverse(s, stackCreateEmpty());
}
/**
 * Return the length of a stack
 * @param {stack} s A stack
 * @returns Length of the stack
 */ function stackLength(s) {
    if (stackIsEmpty(s)) return 0;
    else return stackLength(stackPop(s)) + 1;
}

},{"./list.js":"7BxUD","@parcel/transformer-js/src/esmodule-helpers.js":"brgGt"}],"7BxUD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cons", ()=>cons
);
parcelHelpers.export(exports, "head", ()=>head
);
parcelHelpers.export(exports, "tail", ()=>tail
);
parcelHelpers.export(exports, "isEmpty", ()=>isEmpty
);
parcelHelpers.export(exports, "listDisp", ()=>listDisp
);
parcelHelpers.export(exports, "nil", ()=>nil
);
// Functions on pointed pairs
function cons(_car, _cdr) {
    return {
        car: _car,
        cdr: _cdr
    };
}
const nil = {};
function car(cons1) {
    return cons1['car'];
}
function cdr(cons2) {
    return cons2['cdr'];
}
// Functions on lists
/**
 * Peeks the element at the head of a list
 * @param {list} l A list
 * @returns The head of the list 'l'
 */ function head(l) {
    return car(l);
}
/**
 * Peeks the element at the tail of a list
 * @param {list} l A list 
 * @returns The tail of the list 'l'
 */ function tail(l) {
    return cdr(l);
}
/**
 * Checks is a list is empty
 * @param {list} l A list
 * @returns A boolean (true if 'l' is an empty list, false otherwise)
 */ function isEmpty(l) {
    return l === nil;
}
/**
 * Displays a list
 * @param {list} l A list
 * @returns A string representing the content of the list 'l'
 */ function listDisp(l1) {
    function listDispRec(l) {
        if (isEmpty(l)) return "";
        else if (isEmpty(tail(l))) return `${head(l)}`;
        else return `${head(l)},${listDispRec(tail(l))}`;
    }
    return `[${listDispRec(l1)}]`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"brgGt"}],"8Uz7T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateSolvablePuzzle", ()=>generateSolvablePuzzle
);
parcelHelpers.export(exports, "generateProgram", ()=>generateProgram
);
parcelHelpers.export(exports, "generateColorProgram", ()=>generateColorProgram
);
parcelHelpers.export(exports, "puzzleInit", ()=>puzzleInit
);
var _languageJs = require("./language.js");
var _stackJs = require("./stack.js");
const MAXINSTRUCTION = 1000;
const MAXFUNCTION = 50;
const MAXFUNCTIONINPROGRAM = 5;
/**
 * Return an array which reprensents the init board with black squares
 * @returns {Array} board initialised
 */ function boardInit() {
    return Array.from(Array(12), ()=>Array.from(Array(16))
    ).map((el, i)=>el.map((square, j)=>_languageJs.cons("", "", "")
        )
    );
}
function puzzleInit() {
    return {
        "robotInit": {
            "row": 6,
            "col": 7,
            "dir": 1
        },
        "board": boardInit(),
        "achievementRequired": {
            "stars": 1
        }
    };
}
/**
 * Return a random number between min (included) and max (excluded)
 * @param {number} min  Included
 * @param {number} max  Excluded
 * @returns {number} A random number between min (included) and max (excluded)
 */ function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
/**
 * Return a random number with a 20% probability of being between 0 and size - 1, and 80% probability of being between size and max
 * @param {number} max max included
 * @param {number} size Smallest number with a 80% probability of being returned
 * @returns {number} A random number
 */ function getBiasedInt(max, size) {
    if (Math.random() < 0.2) return Math.floor(getRandomArbitrary(0, size));
    else return Math.floor(getRandomArbitrary(size, max + 1));
}
/**
 * 
 */ function generateColorProgram(colors) {
    return Array.from(Array(5), ()=>Array.from(Array(5)).map((square, i)=>colors[getBiasedInt(colors.length - 1, 2)]
        )
    );
}
/**
 * 
 * @param {instructions} instructions Array of possible instructions and functions that can be called
 * @returns A program
 */ function generateProgram(instructions) {
    // return Array.from(Array(5), () => Array.from(Array(getRandomInt(4) + 1)).map((square, i) => instructions[getBiasedInt(instructions.length - 1, 5)]));
    return Array.from(Array(5), ()=>Array.from(Array(5)).map((square, i)=>instructions[getBiasedInt(instructions.length - 1, 5)]
        )
    );
}
/**
 * Retruns a solvable puzzle
 * @param {array of array} program A sequence of instructions
 * @param {object} puzzle A puzzle with no colors the robot on a position of the board.
 * @returns A puzzle
 */ function generateSolvablePuzzle(program1, programColor, puzzle1) {
    const achievementAcquired1 = {
        "stars": 0
    };
    function isDone(achievementAcquired) {
        return puzzle1.achievementRequired.stars === achievementAcquired.stars;
    }
    function update(robot, puzzle, achievementAcquired) {
        const nextAchievementAcquired = Object.assign({}, achievementAcquired);
        if (puzzle.board[robot.row][robot.col].achievement === "star") return {
            "stars": nextAchievementAcquired.stars + 1
        };
        return nextAchievementAcquired;
    }
    function jumppad(robot, obstacle) {
        let newRobot = Object.assign({}, robot);
        switch(obstacle){
            case "jumppadE":
                newRobot.col = newRobot.col + 3;
                break;
            case "jumppadN":
                newRobot.row = newRobot.row - 3;
                break;
            case "jumppadW":
                newRobot.col = newRobot.col - 3;
                break;
            case "jumppadS":
                newRobot.row = newRobot.row + 3;
                break;
            default:
                throw Error("Unknown instruction error");
        }
        return newRobot;
    }
    function robotupdate(robot, head) {
        head.robot = robot;
        return head;
    }
    function updatestack(robot1, stack) {
        function updatestackRec(robot, s) {
            if (_stackJs.stackIsEmpty(s)) return s;
            else if (_stackJs.stackIsEmpty(_stackJs.stackPop(s))) return _stackJs.stackPush(robotupdate(robot, _stackJs.stackPeek(s)), _stackJs.stackPop(s));
            else return _stackJs.stackPush(robotupdate(robot, _stackJs.stackPeek(s)), updatestackRec(robot, _stackJs.stackPop(s)));
        }
        return updatestackRec(robot1, stack);
    }
    function adddebug(currentFunction, currentInstruction, functionNumber, instructionNumber, debug, program) {
        if (program[functionNumber - 1][instructionNumber + 1] === undefined) return _stackJs.stackPush(String(currentInstruction.number) + "0", debug);
        else return _stackJs.stackPush(String(currentInstruction.number) + "0", _stackJs.stackPush(String(functionNumber) + String(instructionNumber + 1), debug));
    }
    function addLastAchievement(board, coord, achievement) {
        return board.map((el, i)=>el.map((square, j)=>{
                if (i === coord.row && j === coord.col) {
                    if (board[i][j].color == "") throw Error("Color error");
                    else return _languageJs.cons(board[i][j].color, achievement, "");
                } else return board[i][j];
            })
        );
    }
    function updateBoard(board, coord, achievement, obstacle, instruction) {
        if (instruction !== undefined) return board.map((el, i)=>el.map((square, j)=>{
                if (i === coord.row && j === coord.col) {
                    if (instruction.function === undefined) return _languageJs.cons(programColor[instruction.number - 1][instruction.instruction], achievement, obstacle);
                    else return _languageJs.cons(programColor[instruction.function - 1][instruction.instruction], achievement, obstacle);
                } else return board[i][j];
            })
        );
        else return board;
    }
    function addInstructionFromOldFunction(currentFunction, currentInstruction, functionNumber, instructionNumber, s, program) {
        if (program[functionNumber - 1][instructionNumber + 1] === undefined) return _stackJs.stackPush({
            "function": currentInstruction.number,
            "instruction": 0,
            "robot": currentFunction.robot
        }, s);
        else return _stackJs.stackPush({
            "function": currentInstruction.number,
            "instruction": 0,
            "robot": currentFunction.robot
        }, _stackJs.stackPush({
            "function": functionNumber,
            "instruction": instructionNumber + 1,
            "robot": currentFunction.robot
        }, s));
    }
    function evalRec(robot, instructCount, functionCount, callStack, achievementAcquired, stackToDisplay, debug, board) {
        //callStack = updatestack(robot, callStack);
        //stackToDisplay = updatestack(robot, stackToDisplay);
        //robot out of ground
        console.log(robot);
        if (robot.row < 0 || robot.col < 0 || robot.row >= 12 || robot.col >= 16) return {
            "robotInit": puzzle1.robotInit,
            "board": addLastAchievement(board, robot, "star"),
            "achievementRequired": {
                "stars": 1
            }
        };
        if (isDone(achievementAcquired)) return {
            "robotInit": puzzle1.robotInit,
            "board": addLastAchievement(board, robot, "star"),
            "achievementRequired": {
                "stars": 1
            }
        };
        if (_stackJs.stackIsEmpty(callStack)) return {
            "robotInit": puzzle1.robotInit,
            "board": addLastAchievement(board, robot, "star"),
            "achievementRequired": {
                "stars": 1
            }
        };
        if (instructCount === MAXINSTRUCTION) return {
            "robotInit": puzzle1.robotInit,
            "board": addLastAchievement(board, robot, "star"),
            "achievementRequired": {
                "stars": 1
            }
        };
        if (functionCount === MAXFUNCTION) return {
            "robotInit": puzzle1.robotInit,
            "board": addLastAchievement(board, robot, "star"),
            "achievementRequired": {
                "stars": 1
            }
        };
        if (puzzle1.board[robot.row][robot.col].obstacle.substring(0, 7) === "jumppad") {
            const newCoords = jumppad(robot, puzzle1.board[robot.row][robot.col].obstacle);
            return evalRec(newCoords, instructCount, functionCount, callStack, update(newCoords, puzzle1, achievementAcquired), stackToDisplay, debug, updateBoard(board, robot, "", "", currentFunction));
        } else if (puzzle1.board[robot.row][robot.col].obstacle === "spike" && instructCount % 2 === 0) throw Error("Robot was pricked to death");
        console.log("Nouveau tour");
        console.log("board");
        console.log(board === undefined);
        console.log(program1);
        const currentFunction = _stackJs.stackPeek(callStack);
        console.log("CurrentFuncton");
        console.log(currentFunction);
        const currentInstruction = program1[currentFunction.function - 1][currentFunction.instruction];
        console.log("CurrentInstruction");
        console.log(currentInstruction);
        if (currentFunction.instruction === program1[currentFunction.function - 1].length - 1) return evalRec(robot, instructCount, functionCount, _stackJs.stackPop(Object.assign({}, callStack)), update(robot, puzzle1, achievementAcquired), _stackJs.stackPush(callStack, stackToDisplay), _stackJs.stackPop(debug), updateBoard(board, robot, "", "", currentFunction));
        else if (typeof currentInstruction === "function") {
            console.log("Robot et board avant l'appel de currentInstruction");
            console.log(robot);
            console.log(board === undefined);
            try {
                const newCoords = currentInstruction(robot, board); // <function> might throw "Out of ground error"
                const newStack = _stackJs.stackPop(Object.assign({}, callStack));
                return evalRec(newCoords, instructCount + 1, functionCount, _stackJs.stackPush({
                    "function": _stackJs.stackPeek(callStack).function,
                    "instruction": _stackJs.stackPeek(callStack).instruction + 1,
                    "robot": newCoords
                }, newStack), update(newCoords, puzzle1, achievementAcquired), _stackJs.stackPush(callStack, stackToDisplay), _stackJs.stackPush(String(currentFunction.function) + String(currentFunction.instruction + 1), _stackJs.stackPop(debug)), updateBoard(board, robot, "", "", currentFunction));
            } catch  {
                return {
                    "robotInit": puzzle1.robotInit,
                    "board": addLastAchievement(board, robot, "star"),
                    "achievementRequired": {
                        "stars": 1
                    }
                };
            }
        } else if (typeof currentInstruction === "object" && currentInstruction.number > 0 && currentInstruction.number <= MAXFUNCTIONINPROGRAM) {
            const newStack = _stackJs.stackPop(Object.assign({}, callStack));
            if (currentInstruction.color === puzzle1.board[robot.row][robot.col].color || currentInstruction.color === "") return evalRec(robot, instructCount + 1, functionCount + 1, addInstructionFromOldFunction(currentFunction, currentInstruction, currentFunction.function, currentFunction.instruction, newStack, program1), achievementAcquired, _stackJs.stackPush(callStack, stackToDisplay), adddebug(currentFunction, currentInstruction, currentFunction.function, currentFunction.instruction, _stackJs.stackPop(debug), program1), updateBoard(board, robot, "", "", currentFunction));
            else {
                if (program1[currentFunction.function - 1][currentFunction.instruction + 1] === undefined) throw Error("End of function");
                else return evalRec(robot, instructCount, functionCount, _stackJs.stackPush({
                    "function": _stackJs.stackPeek(callStack).function,
                    "instruction": _stackJs.stackPeek(callStack).instruction + 1,
                    "robot": robot
                }, newStack), achievementAcquired, _stackJs.stackPush(callStack, stackToDisplay), _stackJs.stackPush(String(currentFunction.function) + String(currentFunction.instruction + 1), _stackJs.stackPop(debug)), updateBoard(board, robot, "", "", currentFunction));
            }
        } else throw Error("Unknown instruction error");
    }
    return evalRec(puzzle1.robotInit, 0, 0, _stackJs.stackPush({
        "function": 1,
        "instruction": 0,
        "robot": puzzle1.robotInit
    }, _stackJs.stackCreateEmpty()), achievementAcquired1, _stackJs.stackCreateEmpty(), _stackJs.stackPush("10", _stackJs.stackCreateEmpty()), puzzle1.board);
}
//console.log(boardInit());
//console.log(generateRandom(0, 4,  List.cons({"i": 2, "j":3}, List.nil)));
//console.log(isValid(1, 3, List.cons({"i": 2, "j":3}, List.cons({"i": 0, "j":3}, List.nil))));
//console.log(generateSquare());
//console.log(randomWalk(boardInit(), generateRandom(0, 4,  List.cons({"i": 2, "j":3}, List.nil))));
console.log(generateProgram([
    1,
    2,
    3,
    4,
    5,
    (robot, board)=>_languageJs.rotateLeft(robot, "", board)
    ,
    (robot, board)=>_languageJs.rotateRight(robot, "", board)
    ,
    (robot, board)=>_languageJs.move(robot, "", board)
    ,
    (robot, board)=>_languageJs.teleport(robot, "", board)
]));
// console.log(puzzleInit().board);
// console.log(generateColorProgram(["red", "green", "blue"]));
console.log(generateSolvablePuzzle(generateProgram([
    {
        "number": 1,
        "color": ""
    },
    {
        "number": 2,
        "color": ""
    },
    {
        "number": 3,
        "color": ""
    },
    {
        "number": 4,
        "color": ""
    },
    {
        "number": 5,
        "color": ""
    },
    (robot, board)=>_languageJs.rotateLeft(robot, "", board)
    ,
    (robot, board)=>_languageJs.rotateRight(robot, "", board)
    ,
    (robot, board)=>_languageJs.move(robot, "", board)
    ,
    (robot, board)=>_languageJs.teleport(robot, "", 1, board)
]), generateColorProgram([
    "red",
    "green",
    "blue"
]), puzzleInit()).board);

},{"./language.js":"cr7w1","./stack.js":"eOnbm","@parcel/transformer-js/src/esmodule-helpers.js":"brgGt"}]},["jD8xA","9A4GT"], "9A4GT", "parcelRequire94c2")

//# sourceMappingURL=robot.727272d6.js.map
