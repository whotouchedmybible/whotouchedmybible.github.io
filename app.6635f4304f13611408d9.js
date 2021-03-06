/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([193,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(247);
__webpack_require__(244);
__webpack_require__(245);
module.exports = __webpack_require__(246);


/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.is-array.js
var es_array_is_array = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-json.js
var es_date_to_json = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(160);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(161);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.create.js
var es_object_create = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__(163);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.to-json.js
var web_url_to_json = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.constructor.js
var es_array_buffer_constructor = __webpack_require__(108);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.is-view.js
var es_array_buffer_is_view = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.slice.js
var es_array_buffer_slice = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(205);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.weak-map.js
var es_weak_map = __webpack_require__(206);

// CONCATENATED MODULE: ./.fable/fable-library.2.4.12/Util.js





























function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// tslint:disable:ban-types
// Object.assign flattens getters and setters
// See https://stackoverflow.com/questions/37054596/js-es5-how-to-assign-objects-with-setters-and-getters
function extend(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _sources = sources; _i < _sources.length; _i++) {
    var source = _sources[_i];

    for (var _i2 = 0, _Object$keys = Object.keys(source); _i2 < _Object$keys.length; _i2++) {
      var key = _Object$keys[_i2];
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    }
  }

  return target;
}
function isDisposable(x) {
  return x != null && typeof x.Dispose === "function";
}
var Comparer = function Comparer(f) {
  _classCallCheck(this, Comparer);

  this.Compare = f || compare;
};
function comparerFromEqualityComparer(comparer) {
  // Sometimes IEqualityComparer also implements IComparer
  if (typeof comparer.Compare === "function") {
    return new Comparer(comparer.Compare);
  } else {
    return new Comparer(function (x, y) {
      var xhash = comparer.GetHashCode(x);
      var yhash = comparer.GetHashCode(y);

      if (xhash === yhash) {
        return comparer.Equals(x, y) ? 0 : -1;
      } else {
        return xhash < yhash ? -1 : 1;
      }
    });
  }
} // TODO: Move these three methods to Map and Set modules

function containsValue(v, map) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var kv = _step.value;

      if (equals(v, kv[1])) {
        return true;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return false;
}
function tryGetValue(map, key, defaultValue) {
  return map.has(key) ? [true, map.get(key)] : [false, defaultValue];
}
function addToSet(v, set) {
  if (set.has(v)) {
    return false;
  }

  set.add(v);
  return true;
}
function assertEqual(actual, expected, msg) {
  if (!equals(actual, expected)) {
    throw Object.assign(new Error(msg || "Expected: ".concat(expected, " - Actual: ").concat(actual)), {
      actual: actual,
      expected: expected
    });
  }
}
function assertNotEqual(actual, expected, msg) {
  if (equals(actual, expected)) {
    throw Object.assign(new Error(msg || "Expected: ".concat(expected, " - Actual: ").concat(actual)), {
      actual: actual,
      expected: expected
    });
  }
}
var Lazy =
/*#__PURE__*/
function () {
  function Lazy(factory) {
    _classCallCheck(this, Lazy);

    this.factory = factory;
    this.isValueCreated = false;
  }

  _createClass(Lazy, [{
    key: "Value",
    get: function get() {
      if (!this.isValueCreated) {
        this.createdValue = this.factory();
        this.isValueCreated = true;
      }

      return this.createdValue;
    }
  }, {
    key: "IsValueCreated",
    get: function get() {
      return this.isValueCreated;
    }
  }]);

  return Lazy;
}();
function lazyFromValue(v) {
  return new Lazy(function () {
    return v;
  });
}
function padWithZeros(i, length) {
  var str = i.toString(10);

  while (str.length < length) {
    str = "0" + str;
  }

  return str;
}
function padLeftAndRightWithZeros(i, lengthLeft, lengthRight) {
  var str = i.toString(10);

  while (str.length < lengthLeft) {
    str = "0" + str;
  }

  while (str.length < lengthRight) {
    str = str + "0";
  }

  return str;
}
function dateOffset(date) {
  var date1 = date;
  return typeof date1.offset === "number" ? date1.offset : date.kind === 1
  /* UTC */
  ? 0 : date.getTimezoneOffset() * -60000;
}
function int16ToString(i, radix) {
  i = i < 0 && radix != null && radix !== 10 ? 0xFFFF + i + 1 : i;
  return i.toString(radix);
}
function int32ToString(i, radix) {
  i = i < 0 && radix != null && radix !== 10 ? 0xFFFFFFFF + i + 1 : i;
  return i.toString(radix);
}
var ObjectRef =
/*#__PURE__*/
function () {
  function ObjectRef() {
    _classCallCheck(this, ObjectRef);
  }

  _createClass(ObjectRef, null, [{
    key: "id",
    value: function id(o) {
      if (!ObjectRef.idMap.has(o)) {
        ObjectRef.idMap.set(o, ++ObjectRef.count);
      }

      return ObjectRef.idMap.get(o);
    }
  }]);

  return ObjectRef;
}();
ObjectRef.idMap = new WeakMap();
ObjectRef.count = 0;
function stringHash(s) {
  var i = 0;
  var h = 5381;
  var len = s.length;

  while (i < len) {
    h = h * 33 ^ s.charCodeAt(i++);
  }

  return h;
}
function numberHash(x) {
  return x * 2654435761 | 0;
} // From https://stackoverflow.com/a/37449594

function combineHashCodes(hashes) {
  if (hashes.length === 0) {
    return 0;
  }

  return hashes.reduce(function (h1, h2) {
    return (h1 << 5) + h1 ^ h2;
  });
}
function identityHash(x) {
  if (x == null) {
    return 0;
  }

  switch (_typeof(x)) {
    case "boolean":
      return x ? 1 : 0;

    case "number":
      return numberHash(x);

    case "string":
      return stringHash(x);

    default:
      return numberHash(ObjectRef.id(x));
  }
}
function structuralHash(x) {
  if (x == null) {
    return 0;
  }

  switch (_typeof(x)) {
    case "boolean":
      return x ? 1 : 0;

    case "number":
      return numberHash(x);

    case "string":
      return stringHash(x);

    default:
      {
        if (typeof x.GetHashCode === "function") {
          return x.GetHashCode();
        } else if (isArray(x)) {
          var ar = x;
          var len = ar.length;
          var hashes = new Array(len);

          for (var i = 0; i < len; i++) {
            hashes[i] = structuralHash(ar[i]);
          }

          return combineHashCodes(hashes);
        } else {
          return stringHash(String(x));
        }
      }
  }
}
function isArray(x) {
  return Array.isArray(x) || ArrayBuffer.isView(x);
}
function isIterable(x) {
  return x != null && _typeof(x) === "object" && Symbol.iterator in x;
}
function equalArraysWith(x, y, eq) {
  if (x == null) {
    return y == null;
  }

  if (y == null) {
    return false;
  }

  if (x.length !== y.length) {
    return false;
  }

  for (var i = 0; i < x.length; i++) {
    if (!eq(x[i], y[i])) {
      return false;
    }
  }

  return true;
}
function equalArrays(x, y) {
  return equalArraysWith(x, y, equals);
} // export function equalObjects(x: { [k: string]: any }, y: { [k: string]: any }): boolean {
//   if (x == null) { return y == null; }
//   if (y == null) { return false; }
//   const xKeys = Object.keys(x);
//   const yKeys = Object.keys(y);
//   if (xKeys.length !== yKeys.length) {
//     return false;
//   }
//   xKeys.sort();
//   yKeys.sort();
//   for (let i = 0; i < xKeys.length; i++) {
//     if (xKeys[i] !== yKeys[i] || !equals(x[xKeys[i]], y[yKeys[i]])) {
//       return false;
//     }
//   }
//   return true;
// }

function equals(x, y) {
  if (x === y) {
    return true;
  } else if (x == null) {
    return y == null;
  } else if (y == null) {
    return false;
  } else if (_typeof(x) !== "object") {
    return false;
  } else if (typeof x.Equals === "function") {
    return x.Equals(y);
  } else if (isArray(x)) {
    return isArray(y) && equalArrays(x, y);
  } else if (x instanceof Date) {
    return y instanceof Date && compareDates(x, y) === 0;
  } else {
    return false;
  }
}
function compareDates(x, y) {
  var xtime;
  var ytime; // DateTimeOffset and DateTime deals with equality differently.

  if ("offset" in x && "offset" in y) {
    xtime = x.getTime();
    ytime = y.getTime();
  } else {
    xtime = x.getTime() + dateOffset(x);
    ytime = y.getTime() + dateOffset(y);
  }

  return xtime === ytime ? 0 : xtime < ytime ? -1 : 1;
}
function comparePrimitives(x, y) {
  return x === y ? 0 : x < y ? -1 : 1;
}
function compareArraysWith(x, y, comp) {
  if (x == null) {
    return y == null ? 0 : 1;
  }

  if (y == null) {
    return -1;
  }

  if (x.length !== y.length) {
    return x.length < y.length ? -1 : 1;
  }

  for (var i = 0, j = 0; i < x.length; i++) {
    j = comp(x[i], y[i]);

    if (j !== 0) {
      return j;
    }
  }

  return 0;
}
function compareArrays(x, y) {
  return compareArraysWith(x, y, compare);
}
function compareObjects(x, y) {
  if (x == null) {
    return y == null ? 0 : 1;
  }

  if (y == null) {
    return -1;
  }

  var xKeys = Object.keys(x);
  var yKeys = Object.keys(y);

  if (xKeys.length !== yKeys.length) {
    return xKeys.length < yKeys.length ? -1 : 1;
  }

  xKeys.sort();
  yKeys.sort();

  for (var i = 0, j = 0; i < xKeys.length; i++) {
    var key = xKeys[i];

    if (key !== yKeys[i]) {
      return key < yKeys[i] ? -1 : 1;
    } else {
      j = compare(x[key], y[key]);

      if (j !== 0) {
        return j;
      }
    }
  }

  return 0;
}
function compare(x, y) {
  if (x === y) {
    return 0;
  } else if (x == null) {
    return y == null ? 0 : -1;
  } else if (y == null) {
    return 1;
  } else if (_typeof(x) !== "object") {
    return x < y ? -1 : 1;
  } else if (typeof x.CompareTo === "function") {
    return x.CompareTo(y);
  } else if (isArray(x)) {
    return isArray(y) && compareArrays(x, y);
  } else if (x instanceof Date) {
    return y instanceof Date && compareDates(x, y);
  } else {
    return 1;
  }
}
function min(comparer, x, y) {
  return comparer(x, y) < 0 ? x : y;
}
function max(comparer, x, y) {
  return comparer(x, y) > 0 ? x : y;
}
function createAtom(value) {
  var atom = value;
  return function (value) {
    if (value === void 0) {
      return atom;
    } else {
      atom = value;
      return void 0;
    }
  };
}
var CaseRules = {
  None: 0,
  LowerFirst: 1,
  SnakeCase: 2,
  SnakeCaseAllCaps: 3,
  KebabCase: 4
};

function dashify(str, separator) {
  return str.replace(/[a-z]?[A-Z]/g, function (m) {
    return m.length === 1 ? m.toLowerCase() : m.charAt(0) + separator + m.charAt(1).toLowerCase();
  });
}

function changeCase(str, caseRule) {
  switch (caseRule) {
    case CaseRules.LowerFirst:
      return str.charAt(0).toLowerCase() + str.slice(1);

    case CaseRules.SnakeCase:
      return dashify(str, "_");

    case CaseRules.SnakeCaseAllCaps:
      return dashify(str, "_").toUpperCase();

    case CaseRules.KebabCase:
      return dashify(str, "-");

    case CaseRules.None:
    default:
      return str;
  }
}

function createObj(fields) {
  var caseRule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CaseRules.None;

  function fail(kvPair) {
    throw new Error("Cannot infer key and value of " + String(kvPair));
  }

  var o = {};
  var definedCaseRule = caseRule;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = fields[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var kvPair = _step2.value;
      var _caseRule = CaseRules.None;

      if (kvPair == null) {
        fail(kvPair);
      } // Deflate unions and use the defined case rule


      if (typeof kvPair.toJSON === "function") {
        kvPair = kvPair.toJSON();
        _caseRule = definedCaseRule;
      }

      if (Array.isArray(kvPair)) {
        switch (kvPair.length) {
          case 0:
            fail(kvPair);
            break;

          case 1:
            o[changeCase(kvPair[0], _caseRule)] = true;
            break;

          case 2:
            var value = kvPair[1];
            o[changeCase(kvPair[0], _caseRule)] = value;
            break;

          default:
            o[changeCase(kvPair[0], _caseRule)] = kvPair.slice(1);
        }
      } else if (typeof kvPair === "string") {
        o[changeCase(kvPair, _caseRule)] = true;
      } else {
        fail(kvPair);
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return o;
}
function jsOptions(mutator) {
  var opts = {};
  mutator(opts);
  return opts;
}
function round(value) {
  var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var m = Math.pow(10, digits);
  var n = +(digits ? value * m : value).toFixed(8);
  var i = Math.floor(n);
  var f = n - i;
  var e = 1e-8;
  var r = f > 0.5 - e && f < 0.5 + e ? i % 2 === 0 ? i : i + 1 : Math.round(n);
  return digits ? r / m : r;
}
function Util_sign(x) {
  return x > 0 ? 1 : x < 0 ? -1 : 0;
}
function randomNext(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function randomBytes(buffer) {
  if (buffer == null) {
    throw new Error("Buffer cannot be null");
  }

  for (var i = 0; i < buffer.length; i += 6) {
    // Pick random 48-bit number. Fill buffer in 2 24-bit chunks to avoid bitwise truncation.
    var r = Math.floor(Math.random() * 281474976710656); // Low 24 bits = chunk 1.

    var rhi = Math.floor(r / 16777216); // High 24 bits shifted via division = chunk 2.

    for (var j = 0; j < 6 && i + j < buffer.length; j++) {
      if (j === 3) {
        r = rhi;
      }

      buffer[i + j] = r & 255;
      r >>>= 8;
    }
  }
}
function unescapeDataString(s) {
  // https://stackoverflow.com/a/4458580/524236
  return decodeURIComponent(s.replace(/\+/g, "%20"));
}
function escapeDataString(s) {
  return encodeURIComponent(s).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
}
function escapeUriString(s) {
  return encodeURI(s);
} // ICollection.Clear and Count members can be called on Arrays
// or Dictionaries so we need a runtime check (see #1120)

function Util_count(col) {
  if (isArray(col)) {
    return col.length;
  } else {
    var _count = 0;
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = col[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _ = _step3.value;
        _count++;
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return _count;
  }
}
function clear(col) {
  if (isArray(col)) {
    col.splice(0);
  } else {
    col.clear();
  }
}
var CURRIED_KEY = "__CURRIED__";
function uncurry(arity, f) {
  // f may be a function option with None value
  if (f == null) {
    return null;
  } // The function is already uncurried


  if (f.length > 1) {
    // if (CURRIED_KEY in f) { // This doesn't always work
    return f;
  }

  var uncurriedFn;

  switch (arity) {
    case 2:
      uncurriedFn = function uncurriedFn(a1, a2) {
        return f(a1)(a2);
      };

      break;

    case 3:
      uncurriedFn = function uncurriedFn(a1, a2, a3) {
        return f(a1)(a2)(a3);
      };

      break;

    case 4:
      uncurriedFn = function uncurriedFn(a1, a2, a3, a4) {
        return f(a1)(a2)(a3)(a4);
      };

      break;

    case 5:
      uncurriedFn = function uncurriedFn(a1, a2, a3, a4, a5) {
        return f(a1)(a2)(a3)(a4)(a5);
      };

      break;

    case 6:
      uncurriedFn = function uncurriedFn(a1, a2, a3, a4, a5, a6) {
        return f(a1)(a2)(a3)(a4)(a5)(a6);
      };

      break;

    case 7:
      uncurriedFn = function uncurriedFn(a1, a2, a3, a4, a5, a6, a7) {
        return f(a1)(a2)(a3)(a4)(a5)(a6)(a7);
      };

      break;

    case 8:
      uncurriedFn = function uncurriedFn(a1, a2, a3, a4, a5, a6, a7, a8) {
        return f(a1)(a2)(a3)(a4)(a5)(a6)(a7)(a8);
      };

      break;

    default:
      throw new Error("Uncurrying to more than 8-arity is not supported: " + arity);
  }

  uncurriedFn[CURRIED_KEY] = f;
  return uncurriedFn;
}
function curry(arity, f) {
  if (f == null) {
    return null;
  }

  if (CURRIED_KEY in f) {
    return f[CURRIED_KEY];
  }

  switch (arity) {
    case 2:
      return function (a1) {
        return function (a2) {
          return f(a1, a2);
        };
      };

    case 3:
      return function (a1) {
        return function (a2) {
          return function (a3) {
            return f(a1, a2, a3);
          };
        };
      };

    case 4:
      return function (a1) {
        return function (a2) {
          return function (a3) {
            return function (a4) {
              return f(a1, a2, a3, a4);
            };
          };
        };
      };

    case 5:
      return function (a1) {
        return function (a2) {
          return function (a3) {
            return function (a4) {
              return function (a5) {
                return f(a1, a2, a3, a4, a5);
              };
            };
          };
        };
      };

    case 6:
      return function (a1) {
        return function (a2) {
          return function (a3) {
            return function (a4) {
              return function (a5) {
                return function (a6) {
                  return f(a1, a2, a3, a4, a5, a6);
                };
              };
            };
          };
        };
      };

    case 7:
      return function (a1) {
        return function (a2) {
          return function (a3) {
            return function (a4) {
              return function (a5) {
                return function (a6) {
                  return function (a7) {
                    return f(a1, a2, a3, a4, a5, a6, a7);
                  };
                };
              };
            };
          };
        };
      };

    case 8:
      return function (a1) {
        return function (a2) {
          return function (a3) {
            return function (a4) {
              return function (a5) {
                return function (a6) {
                  return function (a7) {
                    return function (a8) {
                      return f(a1, a2, a3, a4, a5, a6, a7, a8);
                    };
                  };
                };
              };
            };
          };
        };
      };

    default:
      throw new Error("Currying to more than 8-arity is not supported: " + arity);
  }
}
function partialApply(arity, f, args) {
  if (f == null) {
    return null;
  } else if (CURRIED_KEY in f) {
    f = f[CURRIED_KEY];

    for (var i = 0; i < args.length; i++) {
      f = f(args[i]);
    }

    return f;
  } else {
    switch (arity) {
      case 1:
        // Wrap arguments to make sure .concat doesn't destruct arrays. Example
        // [1,2].concat([3,4],5)   --> [1,2,3,4,5]    // fails
        // [1,2].concat([[3,4],5]) --> [1,2,[3,4],5]  // ok
        return function (a1) {
          return f.apply(null, args.concat([a1]));
        };

      case 2:
        return function (a1) {
          return function (a2) {
            return f.apply(null, args.concat([a1, a2]));
          };
        };

      case 3:
        return function (a1) {
          return function (a2) {
            return function (a3) {
              return f.apply(null, args.concat([a1, a2, a3]));
            };
          };
        };

      case 4:
        return function (a1) {
          return function (a2) {
            return function (a3) {
              return function (a4) {
                return f.apply(null, args.concat([a1, a2, a3, a4]));
              };
            };
          };
        };

      case 5:
        return function (a1) {
          return function (a2) {
            return function (a3) {
              return function (a4) {
                return function (a5) {
                  return f.apply(null, args.concat([a1, a2, a3, a4, a5]));
                };
              };
            };
          };
        };

      case 6:
        return function (a1) {
          return function (a2) {
            return function (a3) {
              return function (a4) {
                return function (a5) {
                  return function (a6) {
                    return f.apply(null, args.concat([a1, a2, a3, a4, a5, a6]));
                  };
                };
              };
            };
          };
        };

      case 7:
        return function (a1) {
          return function (a2) {
            return function (a3) {
              return function (a4) {
                return function (a5) {
                  return function (a6) {
                    return function (a7) {
                      return f.apply(null, args.concat([a1, a2, a3, a4, a5, a6, a7]));
                    };
                  };
                };
              };
            };
          };
        };

      case 8:
        return function (a1) {
          return function (a2) {
            return function (a3) {
              return function (a4) {
                return function (a5) {
                  return function (a6) {
                    return function (a7) {
                      return function (a8) {
                        return f.apply(null, args.concat([a1, a2, a3, a4, a5, a6, a7, a8]));
                      };
                    };
                  };
                };
              };
            };
          };
        };

      default:
        throw new Error("Partially applying to more than 8-arity is not supported: " + arity);
    }
  }
}
function mapCurriedArgs(fn, mappings) {
  function mapArg(fn, arg, mappings, idx) {
    var mapping = mappings[idx];

    if (mapping !== 0) {
      var expectedArity = mapping[0];
      var actualArity = mapping[1];

      if (expectedArity > 1) {
        arg = curry(expectedArity, arg);
      }

      if (actualArity > 1) {
        arg = uncurry(actualArity, arg);
      }
    }

    var res = fn(arg);

    if (idx + 1 === mappings.length) {
      return res;
    } else {
      return function (arg) {
        return mapArg(res, arg, mappings, idx + 1);
      };
    }
  }

  return function (arg) {
    return mapArg(fn, arg, mappings, 0);
  };
}
function addToDict(dict, k, v) {
  if (dict.has(k)) {
    throw new Error("An item with the same key has already been added. Key: " + k);
  }

  dict.set(k, v);
}
function getItemFromDict(map, key) {
  if (map.has(key)) {
    return map.get(key);
  } else {
    throw new Error("The given key '".concat(key, "' was not present in the dictionary."));
  }
}
// CONCATENATED MODULE: ./.fable/fable-library.2.4.12/Types.js
























function sameType(x, y) {
  return y != null && Object.getPrototypeOf(x).constructor === Object.getPrototypeOf(y).constructor;
} // Taken from Babel helpers


function inherits(subClass, superClass) {
  // if (typeof superClass !== "function" && superClass !== null) {
  //   throw new TypeError(
  //     "Super expression must either be null or a function, not " +
  //       typeof superClass
  //   );
  // }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  }); // if (superClass)
  //   Object.setPrototypeOf
  //     ? Object.setPrototypeOf(subClass, superClass)
  //     : (subClass.__proto__ = superClass);
}

function declare(cons, superClass) {
  inherits(cons, superClass || SystemObject);
  return cons;
}
function SystemObject() {
  return;
}

SystemObject.prototype.toString = function () {
  var _this = this;

  return "{" + Object.keys(this).map(function (k) {
    return k + " = " + String(_this[k]);
  }).join(";\n ") + "}";
};

SystemObject.prototype.GetHashCode = function () {
  return identityHash(this);
};

SystemObject.prototype.Equals = function (other) {
  return this === other;
};

function compareList(self, other) {
  if (self === other) {
    return 0;
  } else {
    if (other == null) {
      return -1;
    }

    while (self.tail != null) {
      if (other.tail == null) {
        return 1;
      }

      var res = compare(self.head, other.head);

      if (res !== 0) {
        return res;
      }

      self = self.tail;
      other = other.tail;
    }

    return other.tail == null ? 0 : -1;
  }
}

function List(head, tail) {
  this.head = head;
  this.tail = tail;
}

List.prototype.toString = function () {
  return "[" + Array.from(this).map(function (x) {
    return String(x);
  }).join("; ") + "]";
};

List.prototype.toJSON = function () {
  return Array.from(this);
};

List.prototype[Symbol.iterator] = function () {
  var cur = this;
  return {
    next: function next() {
      var tmp = cur;
      cur = cur.tail;
      return {
        done: tmp.tail == null,
        value: tmp.head
      };
    }
  };
};

List.prototype.GetHashCode = function () {
  var hashes = Array.from(this).map(structuralHash);
  return combineHashCodes(hashes);
};

List.prototype.Equals = function (other) {
  return compareList(this, other) === 0;
};

List.prototype.CompareTo = function (other) {
  return compareList(this, other);
};

function Union(tag, name) {
  this.tag = tag | 0;
  this.name = name;

  for (var _len = arguments.length, fields = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    fields[_key - 2] = arguments[_key];
  }

  this.fields = fields;
}

Union.prototype.toString = function () {
  var len = this.fields.length;

  if (len === 0) {
    return this.name;
  } else if (len === 1) {
    return this.name + " " + String(this.fields[0]);
  } else {
    return this.name + " (" + this.fields.map(function (x) {
      return String(x);
    }).join(",") + ")";
  }
};

Union.prototype.toJSON = function () {
  return this.fields.length === 0 ? this.name : [this.name].concat(this.fields);
};

Union.prototype.GetHashCode = function () {
  var hashes = this.fields.map(function (x) {
    return structuralHash(x);
  });
  hashes.splice(0, 0, numberHash(this.tag));
  return combineHashCodes(hashes);
};

Union.prototype.Equals = function (other) {
  return this === other || sameType(this, other) && this.tag === other.tag && equalArrays(this.fields, other.fields);
};

Union.prototype.CompareTo = function (other) {
  if (this === other) {
    return 0;
  } else if (!sameType(this, other)) {
    return -1;
  } else if (this.tag === other.tag) {
    return compareArrays(this.fields, other.fields);
  } else {
    return this.tag < other.tag ? -1 : 1;
  }
};

function recordToJson(record, getFieldNames) {
  var o = {};
  var keys = getFieldNames == null ? Object.keys(record) : getFieldNames(record);

  for (var i = 0; i < keys.length; i++) {
    o[keys[i]] = record[keys[i]];
  }

  return o;
}

function recordEquals(self, other, getFieldNames) {
  if (self === other) {
    return true;
  } else if (!sameType(self, other)) {
    return false;
  } else {
    var thisNames = getFieldNames == null ? Object.keys(self) : getFieldNames(self);

    for (var i = 0; i < thisNames.length; i++) {
      if (!equals(self[thisNames[i]], other[thisNames[i]])) {
        return false;
      }
    }

    return true;
  }
}

function recordCompare(self, other, getFieldNames) {
  if (self === other) {
    return 0;
  } else if (!sameType(self, other)) {
    return -1;
  } else {
    var thisNames = getFieldNames == null ? Object.keys(self) : getFieldNames(self);

    for (var i = 0; i < thisNames.length; i++) {
      var result = compare(self[thisNames[i]], other[thisNames[i]]);

      if (result !== 0) {
        return result;
      }
    }

    return 0;
  }
}

function Record() {
  return;
}

Record.prototype.toString = function () {
  var _this2 = this;

  return "{" + Object.keys(this).map(function (k) {
    return k + " = " + String(_this2[k]);
  }).join(";\n ") + "}";
};

Record.prototype.toJSON = function () {
  return recordToJson(this);
};

Record.prototype.GetHashCode = function () {
  var _this3 = this;

  var hashes = Object.keys(this).map(function (k) {
    return structuralHash(_this3[k]);
  });
  return combineHashCodes(hashes);
};

Record.prototype.Equals = function (other) {
  return recordEquals(this, other);
};

Record.prototype.CompareTo = function (other) {
  return recordCompare(this, other);
};

function anonRecord(o) {
  return Object.assign(Object.create(Record.prototype), o);
}
var FSharpRef = declare(function FSharpRef(contents) {
  this.contents = contents;
}, Record); // EXCEPTIONS

var Exception = declare(function Exception(msg) {
  this.stack = Error().stack;
  this.message = msg;
});
function isException(x) {
  return x instanceof Error || x instanceof Exception;
}

function getFSharpExceptionFieldNames(self) {
  return Object.keys(self).filter(function (k) {
    return k !== "message" && k !== "stack";
  });
}

var FSharpException = declare(function FSharpException() {
  Exception.call(this);
}, Exception);

FSharpException.prototype.toString = function () {
  var _this4 = this;

  var fieldNames = getFSharpExceptionFieldNames(this);
  var len = fieldNames.length;

  if (len === 0) {
    return this.message;
  } else if (len === 1) {
    return this.message + " " + String(this[fieldNames[0]]);
  } else {
    return this.message + " (" + fieldNames.map(function (k) {
      return String(_this4[k]);
    }).join(",") + ")";
  }
};

FSharpException.prototype.toJSON = function () {
  return recordToJson(this, getFSharpExceptionFieldNames);
};

FSharpException.prototype.GetHashCode = function () {
  var _this5 = this;

  var hashes = getFSharpExceptionFieldNames(this).map(function (k) {
    return structuralHash(_this5[k]);
  });
  return combineHashCodes(hashes);
};

FSharpException.prototype.Equals = function (other) {
  return recordEquals(this, other, getFSharpExceptionFieldNames);
};

FSharpException.prototype.CompareTo = function (other) {
  return recordCompare(this, other, getFSharpExceptionFieldNames);
};

var MatchFailureException = declare(function MatchFailureException(arg1, arg2, arg3) {
  this.arg1 = arg1;
  this.arg2 = arg2 | 0;
  this.arg3 = arg3 | 0;
  this.message = "The match cases were incomplete";
}, FSharpException);
var Attribute = declare(function Attribute() {
  return;
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.last-index-of.js
var es_array_last_index_of = __webpack_require__(171);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.bind.js
var es_function_bind = __webpack_require__(173);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.set-prototype-of.js
var es_object_set_prototype_of = __webpack_require__(175);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(177);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.ends-with.js
var es_string_ends_with = __webpack_require__(209);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(210);

// CONCATENATED MODULE: ./.fable/fable-library.2.4.12/Reflection.js


























function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Reflection_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Reflection_createClass(Constructor, protoProps, staticProps) { if (protoProps) Reflection_defineProperties(Constructor.prototype, protoProps); if (staticProps) Reflection_defineProperties(Constructor, staticProps); return Constructor; }

function Reflection_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var CaseInfo = function CaseInfo(declaringType, tag, name, fields) {
  Reflection_classCallCheck(this, CaseInfo);

  this.declaringType = declaringType;
  this.tag = tag;
  this.name = name;
  this.fields = fields;
};
var TypeInfo =
/*#__PURE__*/
function () {
  function TypeInfo(fullname, generics, constructor, fields, cases, enumCases) {
    Reflection_classCallCheck(this, TypeInfo);

    this.fullname = fullname;
    this.generics = generics;
    this.constructor = constructor;
    this.fields = fields;
    this.cases = cases;
    this.enumCases = enumCases;
  }

  Reflection_createClass(TypeInfo, [{
    key: "toString",
    value: function toString() {
      return fullName(this);
    }
  }, {
    key: "Equals",
    value: function Equals(other) {
      return Reflection_equals(this, other);
    }
  }, {
    key: "CompareTo",
    value: function CompareTo(other) {
      return Reflection_compare(this, other);
    }
  }]);

  return TypeInfo;
}();
function getGenerics(t) {
  return t.generics != null ? t.generics : [];
}
function Reflection_equals(t1, t2) {
  if (t1.fullname === "") {
    // Anonymous records
    return t2.fullname === "" && equalArraysWith(getRecordElements(t1), getRecordElements(t2), function (_ref, _ref2) {
      var _ref3 = _slicedToArray(_ref, 2),
          k1 = _ref3[0],
          v1 = _ref3[1];

      var _ref4 = _slicedToArray(_ref2, 2),
          k2 = _ref4[0],
          v2 = _ref4[1];

      return k1 === k2 && Reflection_equals(v1, v2);
    });
  } else {
    return t1.fullname === t2.fullname && equalArraysWith(getGenerics(t1), getGenerics(t2), Reflection_equals);
  }
} // System.Type is not comparable in .NET, but let's implement this
// in case users want to create a dictionary with types as keys

function Reflection_compare(t1, t2) {
  if (t1.fullname !== t2.fullname) {
    return t1.fullname < t2.fullname ? -1 : 1;
  } else {
    return compareArraysWith(getGenerics(t1), getGenerics(t2), Reflection_compare);
  }
}
function type(fullname, generics) {
  return new TypeInfo(fullname, generics);
}
function record(fullname, generics, constructor, fields) {
  return new TypeInfo(fullname, generics, constructor, fields);
}
function Reflection_anonRecord() {
  for (var _len = arguments.length, fields = new Array(_len), _key = 0; _key < _len; _key++) {
    fields[_key] = arguments[_key];
  }

  return new TypeInfo("", null, null, function () {
    return fields;
  });
}
function union(fullname, generics, constructor, cases) {
  var t = new TypeInfo(fullname, generics, constructor, null, function () {
    return cases().map(function (x, i) {
      return typeof x === "string" ? new CaseInfo(t, i, x) : new CaseInfo(t, i, x[0], x[1]);
    });
  });
  return t;
}
function Reflection_tuple() {
  for (var _len2 = arguments.length, generics = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    generics[_key2] = arguments[_key2];
  }

  return new TypeInfo("System.Tuple`" + generics.length, generics);
}
function delegate() {
  for (var _len3 = arguments.length, generics = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    generics[_key3] = arguments[_key3];
  }

  return new TypeInfo("System.Func`" + generics.length, generics);
}
function lambda(argType, returnType) {
  return new TypeInfo("Microsoft.FSharp.Core.FSharpFunc`2", [argType, returnType]);
}
function Reflection_option(generic) {
  return new TypeInfo("Microsoft.FSharp.Core.FSharpOption`1", [generic]);
}
function list(generic) {
  return new TypeInfo("Microsoft.FSharp.Collections.FSharpList`1", [generic]);
}
function Reflection_array(generic) {
  return new TypeInfo(generic.fullname + "[]", [generic]);
}
function enumType(fullname, underlyingType, enumCases) {
  return new TypeInfo(fullname, [underlyingType], null, null, null, enumCases);
}
var Reflection_obj = new TypeInfo("System.Object");
var unit = new TypeInfo("Microsoft.FSharp.Core.Unit");

var _char = new TypeInfo("System.Char");


var string = new TypeInfo("System.String");
var bool = new TypeInfo("System.Boolean");
var int8 = new TypeInfo("System.SByte");
var uint8 = new TypeInfo("System.Byte");
var int16 = new TypeInfo("System.Int16");
var uint16 = new TypeInfo("System.UInt16");
var int32 = new TypeInfo("System.Int32");
var uint32 = new TypeInfo("System.UInt32");
var float32 = new TypeInfo("System.Single");
var float64 = new TypeInfo("System.Double");
var decimal = new TypeInfo("System.Decimal");
function Reflection_name(info) {
  if (Array.isArray(info)) {
    return info[0];
  } else if (info instanceof CaseInfo) {
    return info.name;
  } else {
    var i = info.fullname.lastIndexOf(".");
    return i === -1 ? info.fullname : info.fullname.substr(i + 1);
  }
}
function fullName(t) {
  var gen = t.generics != null && !Reflection_isArray(t) ? t.generics : [];

  if (gen.length > 0) {
    return t.fullname + "[" + gen.map(function (x) {
      return fullName(x);
    }).join(",") + "]";
  } else {
    return t.fullname;
  }
}
function namespace(t) {
  var i = t.fullname.lastIndexOf(".");
  return i === -1 ? "" : t.fullname.substr(0, i);
}
function Reflection_isArray(t) {
  return t.fullname.endsWith("[]");
}
function getElementType(t) {
  return Reflection_isArray(t) ? t.generics[0] : null;
}
function isGenericType(t) {
  return t.generics != null && t.generics.length > 0;
}
function isEnum(t) {
  return t.enumCases != null && t.enumCases.length > 0;
}
/**
 * This doesn't replace types for fields (records) or cases (unions)
 * but it should be enough for type comparison purposes
 */

function getGenericTypeDefinition(t) {
  return t.generics == null ? t : new TypeInfo(t.fullname, t.generics.map(function () {
    return Reflection_obj;
  }));
}
function getEnumUnderlyingType(t) {
  return t.generics[0];
}
function getEnumValues(t) {
  if (isEnum(t)) {
    return t.enumCases.map(function (kv) {
      return kv[1];
    });
  } else {
    throw new Error("".concat(t.fullname, " is not an enum type"));
  }
}
function getEnumNames(t) {
  if (isEnum(t)) {
    return t.enumCases.map(function (kv) {
      return kv[0];
    });
  } else {
    throw new Error("".concat(t.fullname, " is not an enum type"));
  }
}

function getEnumCase(t, v) {
  if (t.enumCases != null) {
    if (typeof v === "string") {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = t.enumCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var kv = _step.value;

          if (kv[0] === v) {
            return kv;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      throw new Error("'".concat(v, "' was not found in ").concat(t.fullname));
    } else {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = t.enumCases[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _kv = _step2.value;

          if (_kv[1] === v) {
            return _kv;
          }
        } // .NET returns the number even if it doesn't match any of the cases

      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return [null, v];
    }
  } else {
    throw new Error("".concat(t.fullname, " is not an enum type"));
  }
}

function parseEnum(t, str) {
  // TODO: better int parsing here, parseInt ceils floats: "4.8" -> 4
  var value = parseInt(str, 10);
  return getEnumCase(t, isNaN(value) ? str : value)[1];
}
function tryParseEnum(t, str) {
  try {
    var v = parseEnum(t, str);
    return [true, v];
  } catch (_a) {// supress error
  }

  return [false, null];
}
function getEnumName(t, v) {
  return getEnumCase(t, v)[0];
}
function isEnumDefined(t, v) {
  try {
    var kv = getEnumCase(t, v);
    return kv[0] != null;
  } catch (_a) {// supress error
  }

  return false;
} // FSharpType

function getUnionCases(t) {
  if (t.cases != null) {
    return t.cases();
  } else {
    throw new Error("".concat(t.fullname, " is not an F# union type"));
  }
}
function getRecordElements(t) {
  if (t.fields != null) {
    return t.fields();
  } else {
    throw new Error("".concat(t.fullname, " is not an F# record type"));
  }
}
function getTupleElements(t) {
  if (isTuple(t)) {
    return t.generics;
  } else {
    throw new Error("".concat(t.fullname, " is not a tuple type"));
  }
}
function getFunctionElements(t) {
  if (isFunction(t)) {
    var gen = t.generics;
    return [gen[0], gen[1]];
  } else {
    throw new Error("".concat(t.fullname, " is not an F# function type"));
  }
}
function isUnion(t) {
  return t instanceof TypeInfo ? t.cases != null : t instanceof Union;
}
function isRecord(t) {
  return t instanceof TypeInfo ? t.fields != null : t instanceof Record;
}
function isTuple(t) {
  return t.fullname.startsWith("System.Tuple");
} // In .NET this is false for delegates

function isFunction(t) {
  return t.fullname === "Microsoft.FSharp.Core.FSharpFunc`2";
} // FSharpValue

function getUnionFields(v, t) {
  var cases = getUnionCases(t);
  var case_ = cases[v.tag];

  if (case_ == null) {
    throw new Error("Cannot find case ".concat(v.name, " in union type"));
  }

  return [case_, v.fields];
}
function getUnionCaseFields(uci) {
  return uci.fields == null ? [] : uci.fields.map(function (t, i) {
    return ["Data" + i, t];
  });
}
function getRecordFields(v) {
  return Object.keys(v).map(function (k) {
    return v[k];
  });
}
function getRecordField(v, field) {
  return v[field[0]];
}
function getTupleFields(v) {
  return v;
}
function getTupleField(v, i) {
  return v[i];
}
function makeUnion(uci, values) {
  var expectedLength = (uci.fields || []).length;

  if (values.length !== expectedLength) {
    throw new Error("Expected an array of length ".concat(expectedLength, " but got ").concat(values.length));
  }

  return _construct(uci.declaringType.constructor, [uci.tag, uci.name].concat(_toConsumableArray(values)));
}
function makeRecord(t, values) {
  var fields = getRecordElements(t);

  if (fields.length !== values.length) {
    throw new Error("Expected an array of length ".concat(fields.length, " but got ").concat(values.length));
  }

  return t.constructor != null ? _construct(t.constructor, _toConsumableArray(values)) : anonRecord(fields.reduce(function (obj, _ref5, i) {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        _t = _ref6[1];

    obj[key] = values[i];
    return obj;
  }, {}));
}
function makeTuple(values, t) {
  return values;
} // Fable.Core.Reflection

function assertUnion(x) {
  if (!(x instanceof Union)) {
    throw new Error("Value is not an F# union type");
  }
}

function getCaseTag(x) {
  assertUnion(x);
  return x.tag;
}
function getCaseName(x) {
  assertUnion(x);
  return x.name;
}
function getCaseFields(x) {
  assertUnion(x);
  return x.fields;
}
// CONCATENATED MODULE: ./src/Types.fs



var HTMLAttr = declare(function Types_HTMLAttr(tag, name) {
  for (var _len = arguments.length, fields = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    fields[_key - 2] = arguments[_key];
  }

  Union.call.apply(Union, [this, tag, name].concat(fields));
}, Union);
function HTMLAttr$reflection() {
  return union("Types.HTMLAttr", [], HTMLAttr, function () {
    return [["data-target", [string]], ["aria-label", [string]], ["aria-expanded", [string]], ["aria-hidden", [string]], ["aria-haspopup", [string]], ["aria-controls", [string]]];
  });
}
var Lenses = declare(function Types_Lenses(tag, name) {
  for (var _len2 = arguments.length, fields = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    fields[_key2 - 2] = arguments[_key2];
  }

  Union.call.apply(Union, [this, tag, name].concat(fields));
}, Union);
function Lenses$reflection() {
  return union("Types.Lenses", [], Lenses, function () {
    return ["CrossReferencesLens"];
  });
}
var Translation = declare(function Types_Translation(tag, name) {
  for (var _len3 = arguments.length, fields = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    fields[_key3 - 2] = arguments[_key3];
  }

  Union.call.apply(Union, [this, tag, name].concat(fields));
}, Union);
function Translation$reflection() {
  return union("Types.Translation", [], Translation, function () {
    return ["KJV1611", "KJV"];
  });
}
var Title = declare(function Types_Title(tag, name) {
  for (var _len4 = arguments.length, fields = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
    fields[_key4 - 2] = arguments[_key4];
  }

  Union.call.apply(Union, [this, tag, name].concat(fields));
}, Union);
function Title$reflection() {
  return union("Types.Title", [], Title, function () {
    return ["Genesis", "Exodus"];
  });
}
var BookOrderMax = declare(function Types_BookOrderMax(arg1, arg2, arg3) {
  this.Title = arg1;
  this.Order = arg2 | 0;
  this.MaxChapters = arg3 | 0;
}, Record);
function BookOrderMax$reflection() {
  return record("Types.BookOrderMax", [], BookOrderMax, function () {
    return [["Title", Title$reflection()], ["Order", int32], ["MaxChapters", int32]];
  });
}
var NoneOrderMax = new BookOrderMax(new Title(0, "Genesis"), 0, 50);
var GenOrderMax = new BookOrderMax(new Title(0, "Genesis"), 1, 50);
var ExodOrderMax = new BookOrderMax(new Title(1, "Exodus"), 2, 40);
var BibleOrderMax = [NoneOrderMax, GenOrderMax, ExodOrderMax];
// CONCATENATED MODULE: ./src/Msgs.fs




var Msg = declare(function Msgs_Msg(tag, name) {
  for (var _len = arguments.length, fields = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    fields[_key - 2] = arguments[_key];
  }

  Union.call.apply(Union, [this, tag, name].concat(fields));
}, Union);
function Msg$reflection() {
  return union("Msgs.Msg", [], Msg, function () {
    return [["NightTog", [bool]], ["MenuToggle", [bool]], "CloseLenses", ["Lens", [Lenses$reflection()]], ["TouchStartX", [type("Browser.Types.Touch")]], ["TouchEndX", [type("Browser.Types.Touch")]], "Swipe", ["ChangeTranslation", [Translation$reflection()]], ["ChangeBook", [BookOrderMax$reflection()]], ["ChangeChapter", [int32]], ["NextChapter", [int32]], ["PreviousChapter", [int32]]];
  });
}
var Effect = declare(function Msgs_Effect(tag, name) {
  for (var _len2 = arguments.length, fields = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    fields[_key2 - 2] = arguments[_key2];
  }

  Union.call.apply(Union, [this, tag, name].concat(fields));
}, Union);
function Effect$reflection() {
  return union("Msgs.Effect", [], Effect, function () {
    return [["Passthru", [Msg$reflection()]], "DoNothing"];
  });
}
// CONCATENATED MODULE: ./.fable/Fable.React.5.1.0/Fable.React.Props.fs



var FragmentProp = declare(function Fable_React_Props_FragmentProp(tag, name) {
  for (var _len = arguments.length, fields = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    fields[_key - 2] = arguments[_key];
  }

  Union.call.apply(Union, [this, tag, name].concat(fields));
}, Union);
function FragmentProp$reflection() {
  return union("Fable.React.Props.FragmentProp", [], FragmentProp, function () {
    return [["Key", [string]]];
  });
}
var Prop = declare(function Fable_React_Props_Prop(tag, name) {
  for (var _len2 = arguments.length, fields = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    fields[_key2 - 2] = arguments[_key2];
  }

  Union.call.apply(Union, [this, tag, name].concat(fields));
}, Union);
function Prop$reflection() {
  return union("Fable.React.Props.Prop", [], Prop, function () {
    return [["Key", [string]], ["Ref", [lambda(type("Browser.Types.Element"), unit)]], ["ref", [type("Fable.React.IRefHook`1", [Reflection_option(type("Browser.Types.Element"))])]]];
  });
}
var DangerousHtml = declare(function Fable_React_Props_DangerousHtml(arg1) {
  this.__html = arg1;
}, Record);
function DangerousHtml$reflection() {
  return record("Fable.React.Props.DangerousHtml", [], DangerousHtml, function () {
    return [["__html", string]];
  });
}
var DOMAttr = declare(function Fable_React_Props_DOMAttr(tag, name) {
  for (var _len3 = arguments.length, fields = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    fields[_key3 - 2] = arguments[_key3];
  }

  Union.call.apply(Union, [this, tag, name].concat(fields));
}, Union);
function DOMAttr$reflection() {
  return union("Fable.React.Props.DOMAttr", [], DOMAttr, function () {
    return [["DangerouslySetInnerHTML", [DangerousHtml$reflection()]], ["OnCut", [lambda(type("Browser.Types.ClipboardEvent"), unit)]], ["OnPaste", [lambda(type("Browser.Types.ClipboardEvent"), unit)]], ["OnCompositionEnd", [lambda(type("Browser.Types.CompositionEvent"), unit)]], ["OnCompositionStart", [lambda(type("Browser.Types.CompositionEvent"), unit)]], ["OnCopy", [lambda(type("Browser.Types.ClipboardEvent"), unit)]], ["OnCompositionUpdate", [lambda(type("Browser.Types.CompositionEvent"), unit)]], ["OnFocus", [lambda(type("Browser.Types.FocusEvent"), unit)]], ["OnBlur", [lambda(type("Browser.Types.FocusEvent"), unit)]], ["OnChange", [lambda(type("Browser.Types.Event"), unit)]], ["OnInput", [lambda(type("Browser.Types.Event"), unit)]], ["OnSubmit", [lambda(type("Browser.Types.Event"), unit)]], ["OnReset", [lambda(type("Browser.Types.Event"), unit)]], ["OnLoad", [lambda(type("Browser.Types.Event"), unit)]], ["OnError", [lambda(type("Browser.Types.Event"), unit)]], ["OnKeyDown", [lambda(type("Browser.Types.KeyboardEvent"), unit)]], ["OnKeyPress", [lambda(type("Browser.Types.KeyboardEvent"), unit)]], ["OnKeyUp", [lambda(type("Browser.Types.KeyboardEvent"), unit)]], ["OnAbort", [lambda(type("Browser.Types.Event"), unit)]], ["OnCanPlay", [lambda(type("Browser.Types.Event"), unit)]], ["OnCanPlayThrough", [lambda(type("Browser.Types.Event"), unit)]], ["OnDurationChange", [lambda(type("Browser.Types.Event"), unit)]], ["OnEmptied", [lambda(type("Browser.Types.Event"), unit)]], ["OnEncrypted", [lambda(type("Browser.Types.Event"), unit)]], ["OnEnded", [lambda(type("Browser.Types.Event"), unit)]], ["OnLoadedData", [lambda(type("Browser.Types.Event"), unit)]], ["OnLoadedMetadata", [lambda(type("Browser.Types.Event"), unit)]], ["OnLoadStart", [lambda(type("Browser.Types.Event"), unit)]], ["OnPause", [lambda(type("Browser.Types.Event"), unit)]], ["OnPlay", [lambda(type("Browser.Types.Event"), unit)]], ["OnPlaying", [lambda(type("Browser.Types.Event"), unit)]], ["OnProgress", [lambda(type("Browser.Types.Event"), unit)]], ["OnRateChange", [lambda(type("Browser.Types.Event"), unit)]], ["OnSeeked", [lambda(type("Browser.Types.Event"), unit)]], ["OnSeeking", [lambda(type("Browser.Types.Event"), unit)]], ["OnStalled", [lambda(type("Browser.Types.Event"), unit)]], ["OnSuspend", [lambda(type("Browser.Types.Event"), unit)]], ["OnTimeUpdate", [lambda(type("Browser.Types.Event"), unit)]], ["OnVolumeChange", [lambda(type("Browser.Types.Event"), unit)]], ["OnWaiting", [lambda(type("Browser.Types.Event"), unit)]], ["OnClick", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnContextMenu", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnDoubleClick", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnDrag", [lambda(type("Browser.Types.DragEvent"), unit)]], ["OnDragEnd", [lambda(type("Browser.Types.DragEvent"), unit)]], ["OnDragEnter", [lambda(type("Browser.Types.DragEvent"), unit)]], ["OnDragExit", [lambda(type("Browser.Types.DragEvent"), unit)]], ["OnDragLeave", [lambda(type("Browser.Types.DragEvent"), unit)]], ["OnDragOver", [lambda(type("Browser.Types.DragEvent"), unit)]], ["OnDragStart", [lambda(type("Browser.Types.DragEvent"), unit)]], ["OnDrop", [lambda(type("Browser.Types.DragEvent"), unit)]], ["OnMouseDown", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseEnter", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseLeave", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseMove", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseOut", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseOver", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnMouseUp", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["OnSelect", [lambda(type("Browser.Types.Event"), unit)]], ["OnTouchCancel", [lambda(type("Browser.Types.TouchEvent"), unit)]], ["OnTouchEnd", [lambda(type("Browser.Types.TouchEvent"), unit)]], ["OnTouchMove", [lambda(type("Browser.Types.TouchEvent"), unit)]], ["OnTouchStart", [lambda(type("Browser.Types.TouchEvent"), unit)]], ["OnScroll", [lambda(type("Browser.Types.UIEvent"), unit)]], ["OnWheel", [lambda(type("Browser.Types.WheelEvent"), unit)]], ["OnAnimationStart", [lambda(type("Browser.Types.AnimationEvent"), unit)]], ["OnAnimationEnd", [lambda(type("Browser.Types.AnimationEvent"), unit)]], ["OnAnimationIteration", [lambda(type("Browser.Types.AnimationEvent"), unit)]], ["OnTransitionEnd", [lambda(type("Browser.Types.TransitionEvent"), unit)]]];
  });
}
var SVGAttr = declare(function Fable_React_Props_SVGAttr(tag, name) {
  for (var _len4 = arguments.length, fields = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
    fields[_key4 - 2] = arguments[_key4];
  }

  Union.call.apply(Union, [this, tag, name].concat(fields));
}, Union);
function SVGAttr$reflection() {
  return union("Fable.React.Props.SVGAttr", [], SVGAttr, function () {
    return [["ClipPath", [string]], ["Cx", [Reflection_obj]], ["Cy", [Reflection_obj]], ["D", [string]], ["Dx", [Reflection_obj]], ["Dy", [Reflection_obj]], ["Fill", [string]], ["FillOpacity", [Reflection_obj]], ["FontFamily", [string]], ["FontSize", [Reflection_obj]], ["Fx", [Reflection_obj]], ["Fy", [Reflection_obj]], ["GradientTransform", [string]], ["GradientUnits", [string]], ["Height", [Reflection_obj]], ["MarkerEnd", [string]], ["MarkerMid", [string]], ["MarkerStart", [string]], ["Offset", [Reflection_obj]], ["Opacity", [Reflection_obj]], ["PatternContentUnits", [string]], ["PatternUnits", [string]], ["Points", [string]], ["PreserveAspectRatio", [string]], ["R", [Reflection_obj]], ["Rx", [Reflection_obj]], ["Ry", [Reflection_obj]], ["SpreadMethod", [string]], ["StopColor", [string]], ["StopOpacity", [Reflection_obj]], ["Stroke", [string]], ["StrokeDasharray", [string]], ["StrokeLinecap", [string]], ["StrokeMiterlimit", [string]], ["StrokeOpacity", [Reflection_obj]], ["StrokeWidth", [Reflection_obj]], ["TextAnchor", [string]], ["Transform", [string]], ["Version", [string]], ["ViewBox", [string]], ["Width", [Reflection_obj]], ["X1", [Reflection_obj]], ["X2", [Reflection_obj]], ["X", [Reflection_obj]], ["XlinkActuate", [string]], ["XlinkArcrole", [string]], ["XlinkHref", [string]], ["XlinkRole", [string]], ["XlinkShow", [string]], ["XlinkTitle", [string]], ["XlinkType", [string]], ["XmlBase", [string]], ["XmlLang", [string]], ["XmlSpace", [string]], ["Y1", [Reflection_obj]], ["Y2", [Reflection_obj]], ["Y", [Reflection_obj]], ["Custom", [string, Reflection_obj]]];
  });
}
var Fable_React_5_1_0_Fable_React_Props_HTMLAttr = declare(function Fable_React_Props_HTMLAttr(tag, name) {
  for (var _len5 = arguments.length, fields = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
    fields[_key5 - 2] = arguments[_key5];
  }

  Union.call.apply(Union, [this, tag, name].concat(fields));
}, Union);
function Fable_React_Props_HTMLAttr$reflection() {
  return union("Fable.React.Props.HTMLAttr", [], Fable_React_5_1_0_Fable_React_Props_HTMLAttr, function () {
    return [["DefaultChecked", [bool]], ["DefaultValue", [Reflection_obj]], ["Accept", [string]], ["AcceptCharset", [string]], ["AccessKey", [string]], ["Action", [string]], ["AllowFullScreen", [bool]], ["AllowTransparency", [bool]], ["Alt", [string]], ["aria-controls", [string]], ["aria-expanded", [bool]], ["aria-haspopup", [bool]], ["aria-pressed", [bool]], ["Async", [bool]], ["AutoComplete", [string]], ["AutoFocus", [bool]], ["AutoPlay", [bool]], ["Capture", [bool]], ["CellPadding", [Reflection_obj]], ["CellSpacing", [Reflection_obj]], ["CharSet", [string]], ["Challenge", [string]], ["Checked", [bool]], ["ClassID", [string]], ["ClassName", [string]], ["className", [string]], ["Cols", [int32]], ["ColSpan", [int32]], ["Content", [string]], ["ContentEditable", [bool]], ["ContextMenu", [string]], ["Controls", [bool]], ["Coords", [string]], ["CrossOrigin", [string]], ["data-toggle", [string]], ["DateTime", [string]], ["Default", [bool]], ["Defer", [bool]], ["Dir", [string]], ["Disabled", [bool]], ["Download", [Reflection_obj]], ["Draggable", [bool]], ["EncType", [string]], ["Form", [string]], ["FormAction", [string]], ["FormEncType", [string]], ["FormMethod", [string]], ["FormNoValidate", [bool]], ["FormTarget", [string]], ["FrameBorder", [Reflection_obj]], ["Headers", [string]], ["Height", [Reflection_obj]], ["Hidden", [bool]], ["High", [float64]], ["Href", [string]], ["HrefLang", [string]], ["HtmlFor", [string]], ["HttpEquiv", [string]], ["Icon", [string]], ["Id", [string]], ["InputMode", [string]], ["Integrity", [string]], ["Is", [string]], ["KeyParams", [string]], ["KeyType", [string]], ["Kind", [string]], ["Label", [string]], ["Lang", [string]], ["List", [string]], ["Loop", [bool]], ["Low", [float64]], ["Manifest", [string]], ["MarginHeight", [float64]], ["MarginWidth", [float64]], ["Max", [Reflection_obj]], ["MaxLength", [float64]], ["Media", [string]], ["MediaGroup", [string]], ["Method", [string]], ["Min", [Reflection_obj]], ["MinLength", [float64]], ["Multiple", [bool]], ["Muted", [bool]], ["Name", [string]], ["NoValidate", [bool]], ["Open", [bool]], ["Optimum", [float64]], ["Pattern", [string]], ["Placeholder", [string]], ["Poster", [string]], ["Preload", [string]], ["RadioGroup", [string]], ["ReadOnly", [bool]], ["Rel", [string]], ["Required", [bool]], ["Role", [string]], ["Rows", [int32]], ["RowSpan", [int32]], ["Sandbox", [string]], ["Scope", [string]], ["Scoped", [bool]], ["Scrolling", [string]], ["Seamless", [bool]], ["Selected", [bool]], ["Shape", [string]], ["Size", [float64]], ["Sizes", [string]], ["Span", [float64]], ["SpellCheck", [bool]], ["Src", [string]], ["SrcDoc", [string]], ["SrcLang", [string]], ["SrcSet", [string]], ["Start", [float64]], ["Step", [Reflection_obj]], ["Summary", [string]], ["TabIndex", [int32]], ["Target", [string]], ["Title", [string]], ["Type", [string]], ["UseMap", [string]], ["Value", [Reflection_obj]], ["value", [Reflection_array(string)]], ["Width", [Reflection_obj]], ["Wmode", [string]], ["Wrap", [string]], ["About", [string]], ["Datatype", [string]], ["Inlist", [Reflection_obj]], ["Prefix", [string]], ["Property", [string]], ["Resource", [string]], ["Typeof", [string]], ["Vocab", [string]], ["AutoCapitalize", [string]], ["AutoCorrect", [string]], ["AutoSave", [string]], ["ItemProp", [string]], ["ItemScope", [bool]], ["ItemType", [string]], ["ItemID", [string]], ["ItemRef", [string]], ["Results", [float64]], ["Security", [string]], ["Unselectable", [bool]], ["Custom", [string, Reflection_obj]]];
  });
}
var CSSProp = declare(function Fable_React_Props_CSSProp(tag, name) {
  for (var _len6 = arguments.length, fields = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
    fields[_key6 - 2] = arguments[_key6];
  }

  Union.call.apply(Union, [this, tag, name].concat(fields));
}, Union);
function CSSProp$reflection() {
  return union("Fable.React.Props.CSSProp", [], CSSProp, function () {
    return [["AlignContent", [string]], ["AlignItems", [string]], ["AlignSelf", [string]], ["AlignmentAdjust", [Reflection_obj]], ["AlignmentBaseline", [Reflection_obj]], ["All", [Reflection_obj]], ["Animation", [Reflection_obj]], ["AnimationDelay", [Reflection_obj]], ["AnimationDirection", [Reflection_obj]], ["AnimationDuration", [Reflection_obj]], ["AnimationFillMode", [Reflection_obj]], ["AnimationIterationCount", [Reflection_obj]], ["AnimationName", [Reflection_obj]], ["AnimationPlayState", [Reflection_obj]], ["AnimationTimingFunction", [Reflection_obj]], ["Appearance", [Reflection_obj]], ["BackfaceVisibility", [Reflection_obj]], ["Background", [Reflection_obj]], ["BackgroundAttachment", [Reflection_obj]], ["BackgroundBlendMode", [Reflection_obj]], ["BackgroundClip", [Reflection_obj]], ["BackgroundColor", [Reflection_obj]], ["BackgroundComposite", [Reflection_obj]], ["BackgroundImage", [Reflection_obj]], ["BackgroundOrigin", [Reflection_obj]], ["BackgroundPosition", [Reflection_obj]], ["BackgroundPositionX", [Reflection_obj]], ["BackgroundPositionY", [Reflection_obj]], ["BackgroundRepeat", [Reflection_obj]], ["BackgroundSize", [Reflection_obj]], ["BaselineShift", [Reflection_obj]], ["Behavior", [Reflection_obj]], ["BlockSize", [Reflection_obj]], ["Border", [Reflection_obj]], ["BorderBlockEnd", [Reflection_obj]], ["BorderBlockEndColor", [Reflection_obj]], ["BorderBlockEndStyle", [Reflection_obj]], ["BorderBlockEndWidth", [Reflection_obj]], ["BorderBlockStart", [Reflection_obj]], ["BorderBlockStartColor", [Reflection_obj]], ["BorderBlockStartStyle", [Reflection_obj]], ["BorderBlockStartWidth", [Reflection_obj]], ["BorderBottom", [Reflection_obj]], ["BorderBottomColor", [Reflection_obj]], ["BorderBottomLeftRadius", [Reflection_obj]], ["BorderBottomRightRadius", [Reflection_obj]], ["BorderBottomStyle", [Reflection_obj]], ["BorderBottomWidth", [Reflection_obj]], ["BorderCollapse", [Reflection_obj]], ["BorderColor", [Reflection_obj]], ["BorderCornerShape", [Reflection_obj]], ["BorderImage", [Reflection_obj]], ["BorderImageOutset", [Reflection_obj]], ["BorderImageRepeat", [Reflection_obj]], ["BorderImageSlice", [Reflection_obj]], ["BorderImageSource", [Reflection_obj]], ["BorderImageWidth", [Reflection_obj]], ["BorderInlineEnd", [Reflection_obj]], ["BorderInlineEndColor", [Reflection_obj]], ["BorderInlineEndStyle", [Reflection_obj]], ["BorderInlineEndWidth", [Reflection_obj]], ["BorderInlineStart", [Reflection_obj]], ["BorderInlineStartColor", [Reflection_obj]], ["BorderInlineStartStyle", [Reflection_obj]], ["BorderInlineStartWidth", [Reflection_obj]], ["BorderLeft", [Reflection_obj]], ["BorderLeftColor", [Reflection_obj]], ["BorderLeftStyle", [Reflection_obj]], ["BorderLeftWidth", [Reflection_obj]], ["BorderRadius", [Reflection_obj]], ["BorderRight", [Reflection_obj]], ["BorderRightColor", [Reflection_obj]], ["BorderRightStyle", [Reflection_obj]], ["BorderRightWidth", [Reflection_obj]], ["BorderSpacing", [Reflection_obj]], ["BorderStyle", [Reflection_obj]], ["BorderTop", [Reflection_obj]], ["BorderTopColor", [Reflection_obj]], ["BorderTopLeftRadius", [Reflection_obj]], ["BorderTopRightRadius", [Reflection_obj]], ["BorderTopStyle", [Reflection_obj]], ["BorderTopWidth", [Reflection_obj]], ["BorderWidth", [Reflection_obj]], ["Bottom", [Reflection_obj]], ["BoxAlign", [Reflection_obj]], ["BoxDecorationBreak", [Reflection_obj]], ["BoxDirection", [Reflection_obj]], ["BoxFlex", [Reflection_obj]], ["BoxFlexGroup", [Reflection_obj]], ["BoxLineProgression", [Reflection_obj]], ["BoxLines", [Reflection_obj]], ["BoxOrdinalGroup", [Reflection_obj]], ["BoxShadow", [Reflection_obj]], ["BoxSizing", [Reflection_obj]], ["BreakAfter", [Reflection_obj]], ["BreakBefore", [Reflection_obj]], ["BreakInside", [Reflection_obj]], ["CaptionSide", [Reflection_obj]], ["CaretColor", [Reflection_obj]], ["Clear", [Reflection_obj]], ["Clip", [Reflection_obj]], ["ClipPath", [Reflection_obj]], ["ClipRule", [Reflection_obj]], ["Color", [Reflection_obj]], ["ColorInterpolation", [Reflection_obj]], ["ColorInterpolationFilters", [Reflection_obj]], ["ColorProfile", [Reflection_obj]], ["ColorRendering", [Reflection_obj]], ["ColumnCount", [Reflection_obj]], ["ColumnFill", [Reflection_obj]], ["ColumnGap", [Reflection_obj]], ["ColumnRule", [Reflection_obj]], ["ColumnRuleColor", [Reflection_obj]], ["ColumnRuleStyle", [Reflection_obj]], ["ColumnRuleWidth", [Reflection_obj]], ["ColumnSpan", [Reflection_obj]], ["ColumnWidth", [Reflection_obj]], ["Columns", [Reflection_obj]], ["Content", [Reflection_obj]], ["CounterIncrement", [Reflection_obj]], ["CounterReset", [Reflection_obj]], ["Cue", [Reflection_obj]], ["CueAfter", [Reflection_obj]], ["Cursor", [Reflection_obj]], ["Direction", [Reflection_obj]], ["Display", [string]], ["DominantBaseline", [Reflection_obj]], ["EmptyCells", [Reflection_obj]], ["EnableBackground", [Reflection_obj]], ["Fill", [Reflection_obj]], ["FillOpacity", [Reflection_obj]], ["FillRule", [Reflection_obj]], ["Filter", [Reflection_obj]], ["Flex", [Reflection_obj]], ["FlexAlign", [Reflection_obj]], ["FlexBasis", [Reflection_obj]], ["FlexDirection", [Reflection_obj]], ["FlexFlow", [Reflection_obj]], ["FlexGrow", [Reflection_obj]], ["FlexItemAlign", [Reflection_obj]], ["FlexLinePack", [Reflection_obj]], ["FlexOrder", [Reflection_obj]], ["FlexShrink", [Reflection_obj]], ["FlexWrap", [Reflection_obj]], ["Float", [Reflection_obj]], ["FloodColor", [Reflection_obj]], ["FloodOpacity", [Reflection_obj]], ["FlowFrom", [Reflection_obj]], ["Font", [Reflection_obj]], ["FontFamily", [Reflection_obj]], ["FontFeatureSettings", [Reflection_obj]], ["FontKerning", [Reflection_obj]], ["FontLanguageOverride", [Reflection_obj]], ["FontSize", [Reflection_obj]], ["FontSizeAdjust", [Reflection_obj]], ["FontStretch", [Reflection_obj]], ["FontStyle", [Reflection_obj]], ["FontSynthesis", [Reflection_obj]], ["FontVariant", [Reflection_obj]], ["FontVariantAlternates", [Reflection_obj]], ["FontVariantCaps", [Reflection_obj]], ["FontVariantEastAsian", [Reflection_obj]], ["FontVariantLigatures", [Reflection_obj]], ["FontVariantNumeric", [Reflection_obj]], ["FontVariantPosition", [Reflection_obj]], ["FontWeight", [Reflection_obj]], ["GlyphOrientationHorizontal", [Reflection_obj]], ["GlyphOrientationVertical", [Reflection_obj]], ["Grid", [Reflection_obj]], ["GridArea", [Reflection_obj]], ["GridAutoColumns", [Reflection_obj]], ["GridAutoFlow", [Reflection_obj]], ["GridAutoRows", [Reflection_obj]], ["GridColumn", [Reflection_obj]], ["GridColumnEnd", [Reflection_obj]], ["GridColumnGap", [Reflection_obj]], ["GridColumnStart", [Reflection_obj]], ["GridGap", [Reflection_obj]], ["GridRow", [Reflection_obj]], ["GridRowEnd", [Reflection_obj]], ["GridRowGap", [Reflection_obj]], ["GridRowPosition", [Reflection_obj]], ["GridRowSpan", [Reflection_obj]], ["GridRowStart", [Reflection_obj]], ["GridTemplate", [Reflection_obj]], ["GridTemplateAreas", [Reflection_obj]], ["GridTemplateColumns", [Reflection_obj]], ["GridTemplateRows", [Reflection_obj]], ["HangingPunctuation", [Reflection_obj]], ["Height", [Reflection_obj]], ["HyphenateLimitChars", [Reflection_obj]], ["HyphenateLimitLines", [Reflection_obj]], ["HyphenateLimitZone", [Reflection_obj]], ["Hyphens", [Reflection_obj]], ["ImageOrientation", [Reflection_obj]], ["ImageRendering", [Reflection_obj]], ["ImageResolution", [Reflection_obj]], ["ImeMode", [Reflection_obj]], ["InlineSize", [Reflection_obj]], ["Isolation", [Reflection_obj]], ["JustifyContent", [Reflection_obj]], ["Kerning", [Reflection_obj]], ["LayoutGrid", [Reflection_obj]], ["LayoutGridChar", [Reflection_obj]], ["LayoutGridLine", [Reflection_obj]], ["LayoutGridMode", [Reflection_obj]], ["LayoutGridType", [Reflection_obj]], ["Left", [Reflection_obj]], ["LetterSpacing", [Reflection_obj]], ["LightingColor", [Reflection_obj]], ["LineBreak", [Reflection_obj]], ["LineClamp", [Reflection_obj]], ["LineHeight", [Reflection_obj]], ["ListStyle", [Reflection_obj]], ["ListStyleImage", [Reflection_obj]], ["ListStylePosition", [Reflection_obj]], ["ListStyleType", [Reflection_obj]], ["Margin", [Reflection_obj]], ["MarginBlockEnd", [Reflection_obj]], ["MarginBlockStart", [Reflection_obj]], ["MarginBottom", [Reflection_obj]], ["MarginInlineEnd", [Reflection_obj]], ["MarginInlineStart", [Reflection_obj]], ["MarginLeft", [Reflection_obj]], ["MarginRight", [Reflection_obj]], ["MarginTop", [Reflection_obj]], ["MarkerEnd", [Reflection_obj]], ["MarkerMid", [Reflection_obj]], ["MarkerStart", [Reflection_obj]], ["MarqueeDirection", [Reflection_obj]], ["MarqueeStyle", [Reflection_obj]], ["Mask", [Reflection_obj]], ["MaskBorder", [Reflection_obj]], ["MaskBorderRepeat", [Reflection_obj]], ["MaskBorderSlice", [Reflection_obj]], ["MaskBorderSource", [Reflection_obj]], ["MaskBorderWidth", [Reflection_obj]], ["MaskClip", [Reflection_obj]], ["MaskComposite", [Reflection_obj]], ["MaskImage", [Reflection_obj]], ["MaskMode", [Reflection_obj]], ["MaskOrigin", [Reflection_obj]], ["MaskPosition", [Reflection_obj]], ["MaskRepeat", [Reflection_obj]], ["MaskSize", [Reflection_obj]], ["MaskType", [Reflection_obj]], ["MaxFontSize", [Reflection_obj]], ["MaxHeight", [Reflection_obj]], ["MaxWidth", [Reflection_obj]], ["MinBlockSize", [Reflection_obj]], ["MinHeight", [Reflection_obj]], ["MinInlineSize", [Reflection_obj]], ["MinWidth", [Reflection_obj]], ["MixBlendMode", [Reflection_obj]], ["ObjectFit", [Reflection_obj]], ["ObjectPosition", [Reflection_obj]], ["OffsetBlockEnd", [Reflection_obj]], ["OffsetBlockStart", [Reflection_obj]], ["OffsetInlineEnd", [Reflection_obj]], ["OffsetInlineStart", [Reflection_obj]], ["Opacity", [Reflection_obj]], ["Order", [Reflection_obj]], ["Orphans", [Reflection_obj]], ["Outline", [Reflection_obj]], ["OutlineColor", [Reflection_obj]], ["OutlineOffset", [Reflection_obj]], ["OutlineStyle", [Reflection_obj]], ["OutlineWidth", [Reflection_obj]], ["Overflow", [Reflection_obj]], ["OverflowStyle", [Reflection_obj]], ["OverflowWrap", [Reflection_obj]], ["OverflowX", [Reflection_obj]], ["OverflowY", [Reflection_obj]], ["Padding", [Reflection_obj]], ["PaddingBlockEnd", [Reflection_obj]], ["PaddingBlockStart", [Reflection_obj]], ["PaddingBottom", [Reflection_obj]], ["PaddingInlineEnd", [Reflection_obj]], ["PaddingInlineStart", [Reflection_obj]], ["PaddingLeft", [Reflection_obj]], ["PaddingRight", [Reflection_obj]], ["PaddingTop", [Reflection_obj]], ["PageBreakAfter", [Reflection_obj]], ["PageBreakBefore", [Reflection_obj]], ["PageBreakInside", [Reflection_obj]], ["Pause", [Reflection_obj]], ["PauseAfter", [Reflection_obj]], ["PauseBefore", [Reflection_obj]], ["Perspective", [Reflection_obj]], ["PerspectiveOrigin", [Reflection_obj]], ["PointerEvents", [Reflection_obj]], ["Position", [string]], ["PunctuationTrim", [Reflection_obj]], ["Quotes", [Reflection_obj]], ["RegionFragment", [Reflection_obj]], ["Resize", [Reflection_obj]], ["RestAfter", [Reflection_obj]], ["RestBefore", [Reflection_obj]], ["Right", [Reflection_obj]], ["RubyAlign", [Reflection_obj]], ["RubyMerge", [Reflection_obj]], ["RubyPosition", [Reflection_obj]], ["ScrollBehavior", [Reflection_obj]], ["ScrollSnapCoordinate", [Reflection_obj]], ["ScrollSnapDestination", [Reflection_obj]], ["ScrollSnapType", [Reflection_obj]], ["ShapeImageThreshold", [Reflection_obj]], ["ShapeInside", [Reflection_obj]], ["ShapeMargin", [Reflection_obj]], ["ShapeOutside", [Reflection_obj]], ["ShapeRendering", [Reflection_obj]], ["Speak", [Reflection_obj]], ["SpeakAs", [Reflection_obj]], ["StopColor", [Reflection_obj]], ["StopOpacity", [Reflection_obj]], ["Stroke", [Reflection_obj]], ["StrokeDasharray", [Reflection_obj]], ["StrokeDashoffset", [Reflection_obj]], ["StrokeLinecap", [Reflection_obj]], ["StrokeLinejoin", [Reflection_obj]], ["StrokeMiterlimit", [Reflection_obj]], ["StrokeOpacity", [Reflection_obj]], ["StrokeWidth", [Reflection_obj]], ["TabSize", [Reflection_obj]], ["TableLayout", [Reflection_obj]], ["TextAlign", [string]], ["TextAlignLast", [Reflection_obj]], ["TextAnchor", [Reflection_obj]], ["TextCombineUpright", [Reflection_obj]], ["TextDecoration", [Reflection_obj]], ["TextDecorationColor", [Reflection_obj]], ["TextDecorationLine", [Reflection_obj]], ["TextDecorationLineThrough", [Reflection_obj]], ["TextDecorationNone", [Reflection_obj]], ["TextDecorationOverline", [Reflection_obj]], ["TextDecorationSkip", [Reflection_obj]], ["TextDecorationStyle", [Reflection_obj]], ["TextDecorationUnderline", [Reflection_obj]], ["TextEmphasis", [Reflection_obj]], ["TextEmphasisColor", [Reflection_obj]], ["TextEmphasisPosition", [Reflection_obj]], ["TextEmphasisStyle", [Reflection_obj]], ["TextHeight", [Reflection_obj]], ["TextIndent", [Reflection_obj]], ["TextJustify", [Reflection_obj]], ["TextJustifyTrim", [Reflection_obj]], ["TextKashidaSpace", [Reflection_obj]], ["TextLineThrough", [Reflection_obj]], ["TextLineThroughColor", [Reflection_obj]], ["TextLineThroughMode", [Reflection_obj]], ["TextLineThroughStyle", [Reflection_obj]], ["TextLineThroughWidth", [Reflection_obj]], ["TextOrientation", [Reflection_obj]], ["TextOverflow", [Reflection_obj]], ["TextOverline", [Reflection_obj]], ["TextOverlineColor", [Reflection_obj]], ["TextOverlineMode", [Reflection_obj]], ["TextOverlineStyle", [Reflection_obj]], ["TextOverlineWidth", [Reflection_obj]], ["TextRendering", [Reflection_obj]], ["TextScript", [Reflection_obj]], ["TextShadow", [Reflection_obj]], ["TextTransform", [Reflection_obj]], ["TextUnderlinePosition", [Reflection_obj]], ["TextUnderlineStyle", [Reflection_obj]], ["Top", [Reflection_obj]], ["TouchAction", [Reflection_obj]], ["Transform", [Reflection_obj]], ["TransformBox", [Reflection_obj]], ["TransformOrigin", [Reflection_obj]], ["TransformOriginZ", [Reflection_obj]], ["TransformStyle", [Reflection_obj]], ["Transition", [Reflection_obj]], ["TransitionDelay", [Reflection_obj]], ["TransitionDuration", [Reflection_obj]], ["TransitionProperty", [Reflection_obj]], ["TransitionTimingFunction", [Reflection_obj]], ["UnicodeBidi", [Reflection_obj]], ["UnicodeRange", [Reflection_obj]], ["UserFocus", [Reflection_obj]], ["UserInput", [Reflection_obj]], ["VerticalAlign", [Reflection_obj]], ["Visibility", [Reflection_obj]], ["VoiceBalance", [Reflection_obj]], ["VoiceDuration", [Reflection_obj]], ["VoiceFamily", [Reflection_obj]], ["VoicePitch", [Reflection_obj]], ["VoiceRange", [Reflection_obj]], ["VoiceRate", [Reflection_obj]], ["VoiceStress", [Reflection_obj]], ["VoiceVolume", [Reflection_obj]], ["WhiteSpace", [Reflection_obj]], ["WhiteSpaceTreatment", [Reflection_obj]], ["Widows", [Reflection_obj]], ["Width", [Reflection_obj]], ["WillChange", [Reflection_obj]], ["WordBreak", [Reflection_obj]], ["WordSpacing", [Reflection_obj]], ["WordWrap", [Reflection_obj]], ["WrapFlow", [Reflection_obj]], ["WrapMargin", [Reflection_obj]], ["WrapOption", [Reflection_obj]], ["WritingMode", [Reflection_obj]], ["ZIndex", [Reflection_obj]], ["Zoom", [Reflection_obj]], ["Custom", [string, Reflection_obj]]];
  });
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(116);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-precision.js
var es_number_to_precision = __webpack_require__(180);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__(181);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(118);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim-end.js
var es_string_trim_end = __webpack_require__(211);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim-start.js
var es_string_trim_start = __webpack_require__(212);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.uint8-array.js
var es_typed_array_uint8_array = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.copy-within.js
var es_typed_array_copy_within = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.every.js
var es_typed_array_every = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.fill.js
var es_typed_array_fill = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.filter.js
var es_typed_array_filter = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find.js
var es_typed_array_find = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find-index.js
var es_typed_array_find_index = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.for-each.js
var es_typed_array_for_each = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.includes.js
var es_typed_array_includes = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.index-of.js
var es_typed_array_index_of = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.iterator.js
var es_typed_array_iterator = __webpack_require__(130);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.join.js
var es_typed_array_join = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.last-index-of.js
var es_typed_array_last_index_of = __webpack_require__(132);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.map.js
var es_typed_array_map = __webpack_require__(133);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reduce.js
var es_typed_array_reduce = __webpack_require__(134);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reduce-right.js
var es_typed_array_reduce_right = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reverse.js
var es_typed_array_reverse = __webpack_require__(136);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.set.js
var es_typed_array_set = __webpack_require__(137);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.slice.js
var es_typed_array_slice = __webpack_require__(138);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.some.js
var es_typed_array_some = __webpack_require__(139);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.sort.js
var es_typed_array_sort = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.subarray.js
var es_typed_array_subarray = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-locale-string.js
var es_typed_array_to_locale_string = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-string.js
var es_typed_array_to_string = __webpack_require__(143);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.now.js
var es_date_now = __webpack_require__(216);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-iso-string.js
var es_date_to_iso_string = __webpack_require__(217);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.is-nan.js
var es_number_is_nan = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-float.js
var es_parse_float = __webpack_require__(219);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.pad-start.js
var es_string_pad_start = __webpack_require__(221);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.parse-int.js
var es_number_parse_int = __webpack_require__(223);

// CONCATENATED MODULE: ./.fable/fable-library.2.4.12/Int32.js
















function Int32_slicedToArray(arr, i) { return Int32_arrayWithHoles(arr) || Int32_iterableToArrayLimit(arr, i) || Int32_nonIterableRest(); }

function Int32_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function Int32_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Int32_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NumberStyles;

(function (NumberStyles) {
  // None = 0x00000000,
  // AllowLeadingWhite = 0x00000001,
  // AllowTrailingWhite = 0x00000002,
  // AllowLeadingSign = 0x00000004,
  // AllowTrailingSign = 0x00000008,
  // AllowParentheses = 0x00000010,
  // AllowDecimalPoint = 0x00000020,
  // AllowThousands = 0x00000040,
  // AllowExponent = 0x00000080,
  // AllowCurrencySymbol = 0x00000100,
  NumberStyles[NumberStyles["AllowHexSpecifier"] = 512] = "AllowHexSpecifier"; // Integer = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign,
  // HexNumber = AllowLeadingWhite | AllowTrailingWhite | AllowHexSpecifier,
  // Number = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign |
  //          AllowTrailingSign | AllowDecimalPoint | AllowThousands,
  // Float = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign |
  //         AllowDecimalPoint | AllowExponent,
  // Currency = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign | AllowTrailingSign |
  //            AllowParentheses | AllowDecimalPoint | AllowThousands | AllowCurrencySymbol,
  // Any = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign | AllowTrailingSign |
  //       AllowParentheses | AllowDecimalPoint | AllowThousands | AllowCurrencySymbol | AllowExponent,
})(NumberStyles || (NumberStyles = {}));

function validResponse(regexMatch, radix) {
  var _regexMatch = Int32_slicedToArray(regexMatch, 4),
      _all = _regexMatch[0],
      sign = _regexMatch[1],
      prefix = _regexMatch[2],
      digits = _regexMatch[3];

  return {
    sign: sign || "",
    prefix: prefix || "",
    digits: digits,
    radix: radix
  };
}

function getRange(unsigned, bitsize) {
  switch (bitsize) {
    case 8:
      return unsigned ? [0, 255] : [-128, 127];

    case 16:
      return unsigned ? [0, 65535] : [-32768, 32767];

    case 32:
      return unsigned ? [0, 4294967295] : [-2147483648, 2147483647];

    default:
      throw new Error("Invalid bit size.");
  }
}

function getInvalidDigits(radix) {
  switch (radix) {
    case 2:
      return /[^0-1]/;

    case 8:
      return /[^0-7]/;

    case 10:
      return /[^0-9]/;

    case 16:
      return /[^0-9a-fA-F]/;

    default:
      throw new Error("Invalid Base.");
  }
}

function getRadix(prefix, style) {
  if (style & NumberStyles.AllowHexSpecifier) {
    return 16;
  } else {
    switch (prefix) {
      case "0b":
      case "0B":
        return 2;

      case "0o":
      case "0O":
        return 8;

      case "0x":
      case "0X":
        return 16;

      default:
        return 10;
    }
  }
}

function isValid(str, style, radix) {
  var integerRegex = /^\s*([\+\-])?(0[xXoObB])?([0-9a-fA-F]+)\s*$/;
  var res = integerRegex.exec(str.replace(/_/g, ""));

  if (res != null) {
    var _res = Int32_slicedToArray(res, 4),
        _all = _res[0],
        sign = _res[1],
        prefix = _res[2],
        digits = _res[3];

    radix = radix || getRadix(prefix, style);
    var invalidDigits = getInvalidDigits(radix);

    if (!invalidDigits.test(digits)) {
      return validResponse(res, radix);
    }
  }

  return null;
}
function parse(str, style, unsigned, bitsize, radix) {
  var res = isValid(str, style, radix);

  if (res != null) {
    var v = Number.parseInt(res.sign + res.digits, res.radix);

    if (!Number.isNaN(v)) {
      var _getRange = getRange(true, bitsize),
          _getRange2 = Int32_slicedToArray(_getRange, 2),
          umin = _getRange2[0],
          umax = _getRange2[1];

      if (!unsigned && res.radix !== 10 && v >= umin && v <= umax) {
        v = v << 32 - bitsize >> 32 - bitsize;
      }

      var _getRange3 = getRange(unsigned, bitsize),
          _getRange4 = Int32_slicedToArray(_getRange3, 2),
          min = _getRange4[0],
          max = _getRange4[1];

      if (v >= min && v <= max) {
        return v;
      }
    }
  }

  throw new Error("Input string was not in a correct format.");
}
function tryParse(str, style, unsigned, bitsize) {
  try {
    var v = parse(str, style, unsigned, bitsize);
    return [true, v];
  } catch (_a) {// supress error
  }

  return [false, 0];
}
function op_UnaryNegation_Int8(x) {
  return x === -128 ? x : -x;
}
function op_UnaryNegation_Int16(x) {
  return x === -32768 ? x : -x;
}
function op_UnaryNegation_Int32(x) {
  return x === -2147483648 ? x : -x;
}
// CONCATENATED MODULE: ./.fable/fable-library.2.4.12/lib/long.js


































// Adapted from: https://github.com/dcodeIO/long.js/blob/master/src/long.js
// Apache License 2.0: https://github.com/dcodeIO/long.js/blob/master/LICENSE
/* harmony default export */ var lib_long = (Long);
/**
 * wasm optimizations, to do native i64 multiplication and divide
 */

var wasm = null;

try {
  wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
} catch (e) {} // no wasm support :(

/**
 * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
 *  See the from* functions below for more convenient ways of constructing Longs.
 * @exports Long
 * @class A Long class for representing a 64 bit two's-complement integer value.
 * @param {number} low The low (signed) 32 bits of the long
 * @param {number} high The high (signed) 32 bits of the long
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @constructor
 */


function Long(low, high, unsigned) {
  /**
   * The low 32 bits as a signed value.
   * @type {number}
   */
  this.low = low | 0;
  /**
   * The high 32 bits as a signed value.
   * @type {number}
   */

  this.high = high | 0;
  /**
   * Whether unsigned or not.
   * @type {boolean}
   */

  this.unsigned = !!unsigned;
}

Long.prototype.GetHashCode = function () {
  var h1 = this.unsigned ? 1 : 0;
  h1 = (h1 << 5) + h1 ^ this.high;
  h1 = (h1 << 5) + h1 ^ this.low;
  return h1;
};

Long.prototype.Equals = function (x) {
  return long_equals(this, x);
};

Long.prototype.CompareTo = function (x) {
  return long_compare(this, x);
};

Long.prototype.toString = function (radix) {
  return long_toString(this, radix);
};

Long.prototype.toJSON = function () {
  return long_toString(this);
}; // The internal representation of a long is the two given signed, 32-bit values.
// We use 32-bit pieces because these are the size of integers on which
// Javascript performs bit-operations.  For operations like addition and
// multiplication, we split each number into 16 bit pieces, which can easily be
// multiplied within Javascript's floating-point representation without overflow
// or change in sign.
//
// In the algorithms below, we frequently reduce the negative case to the
// positive case by negating the input(s) and then post-processing the result.
// Note that we must ALWAYS check specially whether those values are MIN_VALUE
// (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
// a positive number, it overflows back into a negative).  Not handling this
// case would often result in infinite recursion.
//
// Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
// methods on which they depend.

/**
 * An indicator used to reliably determine if an object is a Long or not.
 * @type {boolean}
 * @const
 * @private
 */


Long.prototype.__isLong__;
Object.defineProperty(Long.prototype, "__isLong__", {
  value: true
});
/**
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 * @inner
 */

function isLong(obj) {
  return (obj && obj["__isLong__"]) === true;
}
/**
 * Tests if the specified object is a Long.
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 */
// Long.isLong = isLong;

/**
 * A cache of the Long representations of small integer values.
 * @type {!Object}
 * @inner
 */

var INT_CACHE = {};
/**
 * A cache of the Long representations of small unsigned integer values.
 * @type {!Object}
 * @inner
 */

var UINT_CACHE = {};
/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */

function fromInt(value, unsigned) {
  var obj, cachedObj, cache;

  if (unsigned) {
    value >>>= 0;

    if (cache = 0 <= value && value < 256) {
      cachedObj = UINT_CACHE[value];
      if (cachedObj) return cachedObj;
    }

    obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
    if (cache) UINT_CACHE[value] = obj;
    return obj;
  } else {
    value |= 0;

    if (cache = -128 <= value && value < 128) {
      cachedObj = INT_CACHE[value];
      if (cachedObj) return cachedObj;
    }

    obj = fromBits(value, value < 0 ? -1 : 0, false);
    if (cache) INT_CACHE[value] = obj;
    return obj;
  }
}
/**
 * Returns a Long representing the given 32 bit integer value.
 * @function
 * @param {number} value The 32 bit integer in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
// Long.fromInt = fromInt;

/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */

function fromNumber(value, unsigned) {
  if (isNaN(value)) return unsigned ? UZERO : ZERO;

  if (unsigned) {
    if (value < 0) return UZERO;
    if (value >= TWO_PWR_64_DBL) return MAX_UNSIGNED_VALUE;
  } else {
    if (value <= -TWO_PWR_63_DBL) return MIN_VALUE;
    if (value + 1 >= TWO_PWR_63_DBL) return MAX_VALUE;
  }

  if (value < 0) return negate(fromNumber(-value, unsigned));
  return fromBits(value % TWO_PWR_32_DBL | 0, value / TWO_PWR_32_DBL | 0, unsigned);
}
/**
 * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
 * @function
 * @param {number} value The number in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
// Long.fromNumber = fromNumber;

/**
 * @param {number} lowBits
 * @param {number} highBits
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */

function fromBits(lowBits, highBits, unsigned) {
  return new Long(lowBits, highBits, unsigned);
}
/**
 * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
 *  assumed to use 32 bits.
 * @function
 * @param {number} lowBits The low 32 bits
 * @param {number} highBits The high 32 bits
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
// Long.fromBits = fromBits;

/**
 * @function
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 * @inner
 */

var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

/**
 * @param {string} str
 * @param {(boolean|number)=} unsigned
 * @param {number=} radix
 * @returns {!Long}
 * @inner
 */

function fromString(str, unsigned, radix) {
  if (str.length === 0) throw Error("empty string");
  if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity") return ZERO;

  if (typeof unsigned === "number") {
    // For goog.math.long compatibility
    radix = unsigned, unsigned = false;
  } else {
    unsigned = !!unsigned;
  }

  radix = radix || 10;
  if (radix < 2 || 36 < radix) throw RangeError("radix");
  var p = str.indexOf("-");
  if (p > 0) throw Error("interior hyphen");else if (p === 0) {
    return negate(fromString(str.substring(1), unsigned, radix));
  } // Do several (8) digits each time through the loop, so as to
  // minimize the calls to the very expensive emulated div.

  var radixToPower = fromNumber(pow_dbl(radix, 8));
  var result = ZERO;

  for (var i = 0; i < str.length; i += 8) {
    var size = Math.min(8, str.length - i),
        value = parseInt(str.substring(i, i + size), radix);

    if (size < 8) {
      var power = fromNumber(pow_dbl(radix, size));
      result = add(multiply(result, power), fromNumber(value));
    } else {
      result = multiply(result, radixToPower);
      result = add(result, fromNumber(value));
    }
  }

  result.unsigned = unsigned;
  return result;
}
/**
 * Returns a Long representation of the given string, written using the specified radix.
 * @function
 * @param {string} str The textual representation of the Long
 * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
 * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
 * @returns {!Long} The corresponding Long value
 */
// Long.fromString = fromString;

/**
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */

function fromValue(val, unsigned) {
  if (typeof val === "number") return fromNumber(val, unsigned);
  if (typeof val === "string") return fromString(val, unsigned); // Throws for non-objects, converts non-instanceof Long:

  return fromBits(val.low, val.high, typeof unsigned === "boolean" ? unsigned : val.unsigned);
}
/**
 * Converts the specified value to a Long using the appropriate from* function for its type.
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long}
 */
// Long.fromValue = fromValue;
// NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
// no runtime penalty for these.

/**
 * @type {number}
 * @const
 * @inner
 */

var TWO_PWR_16_DBL = 1 << 16;
/**
 * @type {number}
 * @const
 * @inner
 */

var TWO_PWR_24_DBL = 1 << 24;
/**
 * @type {number}
 * @const
 * @inner
 */

var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
/**
 * @type {number}
 * @const
 * @inner
 */

var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
/**
 * @type {number}
 * @const
 * @inner
 */

var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
/**
 * @type {!Long}
 * @const
 * @inner
 */

var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
/**
 * @type {!Long}
 * @inner
 */

var ZERO = fromInt(0);
/**
 * Signed zero.
 * @type {!Long}
 */
// Long.ZERO = ZERO;

/**
 * @type {!Long}
 * @inner
 */

var UZERO = fromInt(0, true);
/**
 * Unsigned zero.
 * @type {!Long}
 */
// Long.UZERO = UZERO;

/**
 * @type {!Long}
 * @inner
 */

var ONE = fromInt(1);
/**
 * Signed one.
 * @type {!Long}
 */
// Long.ONE = ONE;

/**
 * @type {!Long}
 * @inner
 */

var UONE = fromInt(1, true);
/**
 * Unsigned one.
 * @type {!Long}
 */
// Long.UONE = UONE;

/**
 * @type {!Long}
 * @inner
 */

var NEG_ONE = fromInt(-1);
/**
 * Signed negative one.
 * @type {!Long}
 */
// Long.NEG_ONE = NEG_ONE;

/**
 * @type {!Long}
 * @inner
 */

var MAX_VALUE = fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0, false);
/**
 * Maximum signed value.
 * @type {!Long}
 */
// Long.MAX_VALUE = MAX_VALUE;

/**
 * @type {!Long}
 * @inner
 */

var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF | 0, 0xFFFFFFFF | 0, true);
/**
 * Maximum unsigned value.
 * @type {!Long}
 */
// Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

/**
 * @type {!Long}
 * @inner
 */

var MIN_VALUE = fromBits(0, 0x80000000 | 0, false);
/**
 * Minimum signed value.
 * @type {!Long}
 */
// Long.MIN_VALUE = MIN_VALUE;

/**
 * @alias Long.prototype
 * @inner
 */
// var LongPrototype = Long.prototype;

/**
 * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
 * @this {!Long}
 * @returns {number}
 */

function toInt($this) {
  return $this.unsigned ? $this.low >>> 0 : $this.low;
}
;
/**
 * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
 * @this {!Long}
 * @returns {number}
 */

function toNumber($this) {
  if ($this.unsigned) return ($this.high >>> 0) * TWO_PWR_32_DBL + ($this.low >>> 0);
  return $this.high * TWO_PWR_32_DBL + ($this.low >>> 0);
}
;
/**
 * Converts the Long to a string written in the specified radix.
 * @this {!Long}
 * @param {number=} radix Radix (2-36), defaults to 10
 * @returns {string}
 * @override
 * @throws {RangeError} If `radix` is out of range
 */

function long_toString($this, radix) {
  radix = radix || 10;
  if (radix < 2 || 36 < radix) throw RangeError("radix");
  if (isZero($this)) return "0";

  if (long_isNegative($this)) {
    // Unsigned Longs are never negative
    if (long_equals($this, MIN_VALUE)) {
      // We need to change the Long value before it can be negated, so we remove
      // the bottom-most digit in this base and then recurse to do the rest.
      var radixLong = fromNumber(radix),
          div = divide($this, radixLong),
          rem1 = subtract(multiply(div, radixLong), $this);
      return long_toString(div, radix) + toInt(rem1).toString(radix);
    } else return "-" + long_toString(negate($this), radix);
  } // Do several (6) digits each time through the loop, so as to
  // minimize the calls to the very expensive emulated div.


  var radixToPower = fromNumber(pow_dbl(radix, 6), $this.unsigned),
      rem = $this;
  var result = "";

  while (true) {
    var remDiv = divide(rem, radixToPower),
        intval = toInt(subtract(rem, multiply(remDiv, radixToPower))) >>> 0,
        digits = intval.toString(radix);
    rem = remDiv;
    if (isZero(rem)) return digits + result;else {
      while (digits.length < 6) {
        digits = "0" + digits;
      }

      result = "" + digits + result;
    }
  }
}
;
/**
 * Gets the high 32 bits as a signed integer.
 * @this {!Long}
 * @returns {number} Signed high bits
 */

function getHighBits($this) {
  return $this.high;
}
;
/**
 * Gets the high 32 bits as an unsigned integer.
 * @this {!Long}
 * @returns {number} Unsigned high bits
 */

function getHighBitsUnsigned($this) {
  return $this.high >>> 0;
}
;
/**
 * Gets the low 32 bits as a signed integer.
 * @this {!Long}
 * @returns {number} Signed low bits
 */

function getLowBits($this) {
  return $this.low;
}
;
/**
 * Gets the low 32 bits as an unsigned integer.
 * @this {!Long}
 * @returns {number} Unsigned low bits
 */

function getLowBitsUnsigned($this) {
  return $this.low >>> 0;
}
;
/**
 * Gets the number of bits needed to represent the absolute value of this Long.
 * @this {!Long}
 * @returns {number}
 */

function getNumBitsAbs($this) {
  if (long_isNegative($this)) // Unsigned Longs are never negative
    return long_equals($this, MIN_VALUE) ? 64 : getNumBitsAbs(negate($this));
  var val = $this.high != 0 ? $this.high : $this.low;

  for (var bit = 31; bit > 0; bit--) {
    if ((val & 1 << bit) != 0) break;
  }

  return $this.high != 0 ? bit + 33 : bit + 1;
}
;
/**
 * Tests if this Long's value equals zero.
 * @this {!Long}
 * @returns {boolean}
 */

function isZero($this) {
  return $this.high === 0 && $this.low === 0;
}
;
/**
 * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
 * @returns {boolean}
 */
// LongPrototype.eqz = LongPrototype.isZero;

/**
 * Tests if this Long's value is negative.
 * @this {!Long}
 * @returns {boolean}
 */

function long_isNegative($this) {
  return !$this.unsigned && $this.high < 0;
}
;
/**
 * Tests if this Long's value is positive.
 * @this {!Long}
 * @returns {boolean}
 */

function isPositive($this) {
  return $this.unsigned || $this.high >= 0;
}
;
/**
 * Tests if this Long's value is odd.
 * @this {!Long}
 * @returns {boolean}
 */

function isOdd($this) {
  return ($this.low & 1) === 1;
}
;
/**
 * Tests if this Long's value is even.
 * @this {!Long}
 * @returns {boolean}
 */

function isEven($this) {
  return ($this.low & 1) === 0;
}
;
/**
 * Tests if this Long's value equals the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */

function long_equals($this, other) {
  if (!isLong(other)) other = fromValue(other);
  if ($this.unsigned !== other.unsigned && $this.high >>> 31 === 1 && other.high >>> 31 === 1) return false;
  return $this.high === other.high && $this.low === other.low;
}
;
/**
 * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.eq = LongPrototype.equals;

/**
 * Tests if this Long's value differs from the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */

function notEquals($this, other) {
  return !long_equals($this,
  /* validates */
  other);
}
;
/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.neq = LongPrototype.notEquals;

/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.ne = LongPrototype.notEquals;

/**
 * Tests if this Long's value is less than the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */

function lessThan($this, other) {
  return long_compare($this,
  /* validates */
  other) < 0;
}
;
/**
 * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.lt = LongPrototype.lessThan;

/**
 * Tests if this Long's value is less than or equal the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */

function lessThanOrEqual($this, other) {
  return long_compare($this,
  /* validates */
  other) <= 0;
}
;
/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.lte = LongPrototype.lessThanOrEqual;

/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.le = LongPrototype.lessThanOrEqual;

/**
 * Tests if this Long's value is greater than the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */

function greaterThan($this, other) {
  return long_compare($this,
  /* validates */
  other) > 0;
}
;
/**
 * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.gt = LongPrototype.greaterThan;

/**
 * Tests if this Long's value is greater than or equal the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */

function greaterThanOrEqual($this, other) {
  return long_compare($this,
  /* validates */
  other) >= 0;
}
;
/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.gte = LongPrototype.greaterThanOrEqual;

/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.ge = LongPrototype.greaterThanOrEqual;

/**
 * Compares this Long's value with the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */

function long_compare($this, other) {
  if (!isLong(other)) other = fromValue(other);
  if (long_equals($this, other)) return 0;
  var thisNeg = long_isNegative($this),
      otherNeg = long_isNegative(other);
  if (thisNeg && !otherNeg) return -1;
  if (!thisNeg && otherNeg) return 1; // At this point the sign bits are the same

  if (!$this.unsigned) return long_isNegative(subtract($this, other)) ? -1 : 1; // Both are positive if at least one is unsigned

  return other.high >>> 0 > $this.high >>> 0 || other.high === $this.high && other.low >>> 0 > $this.low >>> 0 ? -1 : 1;
}
;
/**
 * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
// LongPrototype.comp = LongPrototype.compare;

/**
 * Negates this Long's value.
 * @this {!Long}
 * @returns {!Long} Negated Long
 */

function negate($this) {
  if (!$this.unsigned && long_equals($this, MIN_VALUE)) return MIN_VALUE;
  return add(not($this), ONE);
}
;
/**
 * Negates this Long's value. This is an alias of {@link Long#negate}.
 * @function
 * @returns {!Long} Negated Long
 */
// LongPrototype.neg = LongPrototype.negate;

/**
 * Returns the sum of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} addend Addend
 * @returns {!Long} Sum
 */

function add($this, addend) {
  if (!isLong(addend)) addend = fromValue(addend); // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

  var a48 = $this.high >>> 16;
  var a32 = $this.high & 0xFFFF;
  var a16 = $this.low >>> 16;
  var a00 = $this.low & 0xFFFF;
  var b48 = addend.high >>> 16;
  var b32 = addend.high & 0xFFFF;
  var b16 = addend.low >>> 16;
  var b00 = addend.low & 0xFFFF;
  var c48 = 0,
      c32 = 0,
      c16 = 0,
      c00 = 0;
  c00 += a00 + b00;
  c16 += c00 >>> 16;
  c00 &= 0xFFFF;
  c16 += a16 + b16;
  c32 += c16 >>> 16;
  c16 &= 0xFFFF;
  c32 += a32 + b32;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c48 += a48 + b48;
  c48 &= 0xFFFF;
  return fromBits(c16 << 16 | c00, c48 << 16 | c32, $this.unsigned);
}
;
/**
 * Returns the difference of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */

function subtract($this, subtrahend) {
  if (!isLong(subtrahend)) subtrahend = fromValue(subtrahend);
  return add($this, negate(subtrahend));
}
;
/**
 * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
 * @function
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
// LongPrototype.sub = LongPrototype.subtract;

/**
 * Returns the product of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */

function multiply($this, multiplier) {
  if (isZero($this)) return $this.unsigned ? UZERO : ZERO;
  if (!isLong(multiplier)) multiplier = fromValue(multiplier); // use wasm support if present

  if (wasm) {
    var low = wasm.mul($this.low, $this.high, multiplier.low, multiplier.high);
    return fromBits(low, wasm.get_high(), $this.unsigned);
  }

  if (isZero(multiplier)) return $this.unsigned ? UZERO : ZERO;
  if (long_equals($this, MIN_VALUE)) return isOdd(multiplier) ? MIN_VALUE : ZERO;
  if (long_equals(multiplier, MIN_VALUE)) return isOdd($this) ? MIN_VALUE : ZERO;

  if (long_isNegative($this)) {
    if (long_isNegative(multiplier)) return multiply(negate($this), negate(multiplier));else return negate(multiply(negate($this), multiplier));
  } else if (long_isNegative(multiplier)) return negate(multiply($this, negate(multiplier))); // If both longs are small, use float multiplication


  if (lessThan($this, TWO_PWR_24) && lessThan(multiplier, TWO_PWR_24)) return fromNumber(toNumber($this) * toNumber(multiplier), $this.unsigned); // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
  // We can skip products that would overflow.

  var a48 = $this.high >>> 16;
  var a32 = $this.high & 0xFFFF;
  var a16 = $this.low >>> 16;
  var a00 = $this.low & 0xFFFF;
  var b48 = multiplier.high >>> 16;
  var b32 = multiplier.high & 0xFFFF;
  var b16 = multiplier.low >>> 16;
  var b00 = multiplier.low & 0xFFFF;
  var c48 = 0,
      c32 = 0,
      c16 = 0,
      c00 = 0;
  c00 += a00 * b00;
  c16 += c00 >>> 16;
  c00 &= 0xFFFF;
  c16 += a16 * b00;
  c32 += c16 >>> 16;
  c16 &= 0xFFFF;
  c16 += a00 * b16;
  c32 += c16 >>> 16;
  c16 &= 0xFFFF;
  c32 += a32 * b00;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c32 += a16 * b16;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c32 += a00 * b32;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
  c48 &= 0xFFFF;
  return fromBits(c16 << 16 | c00, c48 << 16 | c32, $this.unsigned);
}
;
/**
 * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
 * @function
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
// LongPrototype.mul = LongPrototype.multiply;

/**
 * Returns this Long divided by the specified. The result is signed if this Long is signed or
 *  unsigned if this Long is unsigned.
 * @this {!Long}
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */

function divide($this, divisor) {
  if (!isLong(divisor)) divisor = fromValue(divisor);
  if (isZero(divisor)) throw Error("division by zero"); // use wasm support if present

  if (wasm) {
    // guard against signed division overflow: the largest
    // negative number / -1 would be 1 larger than the largest
    // positive number, due to two's complement.
    if (!$this.unsigned && $this.high === -0x80000000 && divisor.low === -1 && divisor.high === -1) {
      // be consistent with non-wasm code path
      return $this;
    }

    var low = ($this.unsigned ? wasm.div_u : wasm.div_s)($this.low, $this.high, divisor.low, divisor.high);
    return fromBits(low, wasm.get_high(), $this.unsigned);
  }

  if (isZero($this)) return $this.unsigned ? UZERO : ZERO;
  var approx, rem, res;

  if (!$this.unsigned) {
    // This section is only relevant for signed longs and is derived from the
    // closure library as a whole.
    if (long_equals($this, MIN_VALUE)) {
      if (long_equals(divisor, ONE) || long_equals(divisor, NEG_ONE)) return MIN_VALUE; // recall that -MIN_VALUE == MIN_VALUE
      else if (long_equals(divisor, MIN_VALUE)) return ONE;else {
          // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
          var halfThis = shiftRight($this, 1);
          approx = shiftLeft(divide(halfThis, divisor), 1);

          if (long_equals(approx, ZERO)) {
            return long_isNegative(divisor) ? ONE : NEG_ONE;
          } else {
            rem = subtract($this, multiply(divisor, approx));
            res = add(approx, divide(rem, divisor));
            return res;
          }
        }
    } else if (long_equals(divisor, MIN_VALUE)) return $this.unsigned ? UZERO : ZERO;

    if (long_isNegative($this)) {
      if (long_isNegative(divisor)) return divide(negate($this), negate(divisor));
      return negate(divide(negate($this), divisor));
    } else if (long_isNegative(divisor)) return negate(divide($this, negate(divisor)));

    res = ZERO;
  } else {
    // The algorithm below has not been made for unsigned longs. It's therefore
    // required to take special care of the MSB prior to running it.
    if (!divisor.unsigned) divisor = toUnsigned(divisor);
    if (greaterThan(divisor, $this)) return UZERO;
    if (greaterThan(divisor, shiftRightUnsigned($this, 1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
      return UONE;
    res = UZERO;
  } // Repeat the following until the remainder is less than other:  find a
  // floating-point that approximates remainder / other *from below*, add this
  // into the result, and subtract it from the remainder.  It is critical that
  // the approximate value is less than or equal to the real value so that the
  // remainder never becomes negative.


  rem = $this;

  while (greaterThanOrEqual(rem, divisor)) {
    // Approximate the result of division. This may be a little greater or
    // smaller than the actual value.
    approx = Math.max(1, Math.floor(toNumber(rem) / toNumber(divisor))); // We will tweak the approximate result by changing it in the 48-th digit or
    // the smallest non-fractional digit, whichever is larger.

    var log2 = Math.ceil(Math.log(approx) / Math.LN2),
        delta = log2 <= 48 ? 1 : pow_dbl(2, log2 - 48),
        // Decrease the approximation until it is smaller than the remainder.  Note
    // that if it is too large, the product overflows and is negative.
    approxRes = fromNumber(approx),
        approxRem = multiply(approxRes, divisor);

    while (long_isNegative(approxRem) || greaterThan(approxRem, rem)) {
      approx -= delta;
      approxRes = fromNumber(approx, $this.unsigned);
      approxRem = multiply(approxRes, divisor);
    } // We know the answer can't be zero... and actually, zero would cause
    // infinite recursion since we would make no progress.


    if (isZero(approxRes)) approxRes = ONE;
    res = add(res, approxRes);
    rem = subtract(rem, approxRem);
  }

  return res;
}
;
/**
 * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
// LongPrototype.div = LongPrototype.divide;

/**
 * Returns this Long modulo the specified.
 * @this {!Long}
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */

function modulo($this, divisor) {
  if (!isLong(divisor)) divisor = fromValue(divisor); // use wasm support if present

  if (wasm) {
    var low = ($this.unsigned ? wasm.rem_u : wasm.rem_s)($this.low, $this.high, divisor.low, divisor.high);
    return fromBits(low, wasm.get_high(), $this.unsigned);
  }

  return subtract($this, multiply(divide($this, divisor), divisor));
}
;
/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
// LongPrototype.mod = LongPrototype.modulo;

/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
// LongPrototype.rem = LongPrototype.modulo;

/**
 * Returns the bitwise NOT of this Long.
 * @this {!Long}
 * @returns {!Long}
 */

function not($this) {
  return fromBits(~$this.low, ~$this.high, $this.unsigned);
}
;
/**
 * Returns the bitwise AND of this Long and the specified.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */

function and($this, other) {
  if (!isLong(other)) other = fromValue(other);
  return fromBits($this.low & other.low, $this.high & other.high, $this.unsigned);
}
;
/**
 * Returns the bitwise OR of this Long and the specified.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */

function or($this, other) {
  if (!isLong(other)) other = fromValue(other);
  return fromBits($this.low | other.low, $this.high | other.high, $this.unsigned);
}
;
/**
 * Returns the bitwise XOR of this Long and the given one.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */

function xor($this, other) {
  if (!isLong(other)) other = fromValue(other);
  return fromBits($this.low ^ other.low, $this.high ^ other.high, $this.unsigned);
}
;
/**
 * Returns this Long with bits shifted to the left by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */

function shiftLeft($this, numBits) {
  if (isLong(numBits)) numBits = toInt(numBits);
  if ((numBits &= 63) === 0) return $this;else if (numBits < 32) return fromBits($this.low << numBits, $this.high << numBits | $this.low >>> 32 - numBits, $this.unsigned);else return fromBits(0, $this.low << numBits - 32, $this.unsigned);
}
;
/**
 * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
// LongPrototype.shl = LongPrototype.shiftLeft;

/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */

function shiftRight($this, numBits) {
  if (isLong(numBits)) numBits = toInt(numBits);
  if ((numBits &= 63) === 0) return $this;else if (numBits < 32) return fromBits($this.low >>> numBits | $this.high << 32 - numBits, $this.high >> numBits, $this.unsigned);else return fromBits($this.high >> numBits - 32, $this.high >= 0 ? 0 : -1, $this.unsigned);
}
;
/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
// LongPrototype.shr = LongPrototype.shiftRight;

/**
 * Returns this Long with bits logically shifted to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */

function shiftRightUnsigned($this, numBits) {
  if (isLong(numBits)) numBits = toInt(numBits);
  numBits &= 63;
  if (numBits === 0) return $this;else {
    var high = $this.high;

    if (numBits < 32) {
      var low = $this.low;
      return fromBits(low >>> numBits | high << 32 - numBits, high >>> numBits, $this.unsigned);
    } else if (numBits === 32) return fromBits(high, 0, $this.unsigned);else return fromBits(high >>> numBits - 32, 0, $this.unsigned);
  }
}
;
/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
// LongPrototype.shru = LongPrototype.shiftRightUnsigned;

/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
// LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;

/**
 * Returns this Long with bits rotated to the left by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */

var rotateLeft = function rotateLeft(numBits) {
  var b;
  if (isLong(numBits)) numBits = numBits.toInt();
  if ((numBits &= 63) === 0) return this;
  if (numBits === 32) return fromBits(this.high, this.low, this.unsigned);

  if (numBits < 32) {
    b = 32 - numBits;
    return fromBits(this.low << numBits | this.high >>> b, this.high << numBits | this.low >>> b, this.unsigned);
  }

  numBits -= 32;
  b = 32 - numBits;
  return fromBits(this.high << numBits | this.low >>> b, this.low << numBits | this.high >>> b, this.unsigned);
};
/**
 * Returns this Long with bits rotated to the left by the given amount. This is an alias of {@link Long#rotateLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
// LongPrototype.rotl = LongPrototype.rotateLeft;

/**
 * Returns this Long with bits rotated to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */

var rotateRight = function rotateRight(numBits) {
  var b;
  if (isLong(numBits)) numBits = numBits.toInt();
  if ((numBits &= 63) === 0) return this;
  if (numBits === 32) return fromBits(this.high, this.low, this.unsigned);

  if (numBits < 32) {
    b = 32 - numBits;
    return fromBits(this.high << b | this.low >>> numBits, this.low << b | this.high >>> numBits, this.unsigned);
  }

  numBits -= 32;
  b = 32 - numBits;
  return fromBits(this.low << b | this.high >>> numBits, this.high << b | this.low >>> numBits, this.unsigned);
};
/**
 * Returns this Long with bits rotated to the right by the given amount. This is an alias of {@link Long#rotateRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
// LongPrototype.rotr = LongPrototype.rotateRight;

/**
 * Converts this Long to signed.
 * @this {!Long}
 * @returns {!Long} Signed long
 */

function toSigned($this) {
  if (!$this.unsigned) return $this;
  return fromBits($this.low, $this.high, false);
}
;
/**
 * Converts this Long to unsigned.
 * @this {!Long}
 * @returns {!Long} Unsigned long
 */

function toUnsigned($this) {
  if ($this.unsigned) return $this;
  return fromBits($this.low, $this.high, true);
}
;
/**
 * Converts this Long to its byte representation.
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @this {!Long}
 * @returns {!Array.<number>} Byte representation
 */

function toBytes($this, le) {
  return le ? toBytesLE($this) : toBytesBE($this);
}
;
/**
 * Converts this Long to its little endian byte representation.
 * @this {!Long}
 * @returns {!Array.<number>} Little endian byte representation
 */

function toBytesLE($this) {
  var hi = $this.high,
      lo = $this.low;
  return [lo & 0xff, lo >>> 8 & 0xff, lo >>> 16 & 0xff, lo >>> 24, hi & 0xff, hi >>> 8 & 0xff, hi >>> 16 & 0xff, hi >>> 24];
}
;
/**
 * Converts this Long to its big endian byte representation.
 * @this {!Long}
 * @returns {!Array.<number>} Big endian byte representation
 */

function toBytesBE($this) {
  var hi = $this.high,
      lo = $this.low;
  return [hi >>> 24, hi >>> 16 & 0xff, hi >>> 8 & 0xff, hi & 0xff, lo >>> 24, lo >>> 16 & 0xff, lo >>> 8 & 0xff, lo & 0xff];
}
;
/**
 * Creates a Long from its byte representation.
 * @param {!Array.<number>} bytes Byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {Long} The corresponding Long value
 */

function fromBytes(bytes, unsigned, le) {
  return le ? fromBytesLE(bytes, unsigned) : fromBytesBE(bytes, unsigned);
}
;
/**
 * Creates a Long from its little endian byte representation.
 * @param {!Array.<number>} bytes Little endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */

function fromBytesLE(bytes, unsigned) {
  return new Long(bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24, bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24, unsigned);
}
;
/**
 * Creates a Long from its big endian byte representation.
 * @param {!Array.<number>} bytes Big endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */

function fromBytesBE(bytes, unsigned) {
  return new Long(bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7], bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], unsigned);
}
;
// CONCATENATED MODULE: ./.fable/fable-library.2.4.12/Long.js



/* harmony default export */ var fable_library_2_4_12_Long = (Long);
var get_Zero = ZERO;
var get_One = ONE;
var op_Addition = add;
var op_Subtraction = subtract;
var op_Multiply = multiply;
var op_Division = divide;
var op_Modulus = modulo;
var op_UnaryNegation = negate;
var op_LeftShift = shiftLeft;
var op_RightShift = shiftRight;
var op_RightShiftUnsigned = shiftRightUnsigned;
var op_BitwiseAnd = and;
var op_BitwiseOr = or;
var op_ExclusiveOr = xor;
var op_LogicalNot = not;
var op_LessThan = lessThan;
var op_LessThanOrEqual = lessThanOrEqual;
var op_GreaterThan = greaterThan;
var op_GreaterThanOrEqual = greaterThanOrEqual;
var op_Equality = long_equals;
var op_Inequality = notEquals;
var Long_equals = long_equals;
var Long_compare = long_compare;
var Long_fromInt = fromInt;
var Long_fromBits = fromBits;
var Long_fromBytes = fromBytes;
var Long_fromNumber = fromNumber;
var Long_fromString = fromString;
var Long_fromValue = fromValue;
var Long_toInt = toInt;
var Long_toBytes = toBytes;
var Long_toNumber = toNumber;
var Long_toString = long_toString;
var Long_getLowBits = getLowBits;
var Long_getHighBits = getHighBits;
var Long_getLowBitsUnsigned = getLowBitsUnsigned;
var Long_getHighBitsUnsigned = getHighBitsUnsigned;

function getMaxValue(unsigned, radix, isNegative) {
  switch (radix) {
    case 2:
      return unsigned ? "1111111111111111111111111111111111111111111111111111111111111111" : isNegative ? "1000000000000000000000000000000000000000000000000000000000000000" : "111111111111111111111111111111111111111111111111111111111111111";

    case 8:
      return unsigned ? "1777777777777777777777" : isNegative ? "1000000000000000000000" : "777777777777777777777";

    case 10:
      return unsigned ? "18446744073709551615" : isNegative ? "9223372036854775808" : "9223372036854775807";

    case 16:
      return unsigned ? "FFFFFFFFFFFFFFFF" : isNegative ? "8000000000000000" : "7FFFFFFFFFFFFFFF";

    default:
      throw new Error("Invalid radix.");
  }
}

function abs(x) {
  if (!x.unsigned && long_isNegative(x)) {
    return op_UnaryNegation(x);
  } else {
    return x;
  }
}
function fromInteger(value, unsigned, kind) {
  var x = value;
  var xh = 0;

  switch (kind) {
    case 0:
      x = value << 24 >> 24;
      xh = x;
      break;

    case 4:
      x = value << 24 >>> 24;
      break;

    case 1:
      x = value << 16 >> 16;
      xh = x;
      break;

    case 5:
      x = value << 16 >>> 16;
      break;

    case 2:
      x = value >> 0;
      xh = x;
      break;

    case 6:
      x = value >>> 0;
      break;
  }

  return fromBits(x, xh >> 31, unsigned);
}
function Long_parse(str, style, unsigned, bitsize, radix) {
  var res = isValid(str, style, radix);

  if (res != null) {
    var lessOrEqual = function lessOrEqual(x, y) {
      var len = Math.max(x.length, y.length);
      return x.padStart(len, "0") <= y.padStart(len, "0");
    };

    var isNegative = res.sign === "-";
    var maxValue = getMaxValue(unsigned || res.radix !== 10, res.radix, isNegative);

    if (lessOrEqual(res.digits.toUpperCase(), maxValue)) {
      str = isNegative ? res.sign + res.digits : res.digits;
      return fromString(str, unsigned, res.radix);
    }
  }

  throw new Error("Input string was not in a correct format.");
}
function Long_tryParse(str, style, unsigned, bitsize) {
  try {
    var v = Long_parse(str, style, unsigned, bitsize);
    return [true, v];
  } catch (_a) {// supress error
  }

  return [false, ZERO];
}
function unixEpochMillisecondsToTicks(ms, offset) {
  return op_Multiply(op_Addition(op_Addition(fromNumber(ms), 62135596800000), offset), 10000);
}
function ticksToUnixEpochMilliseconds(ticks) {
  return toNumber(op_Subtraction(op_Division(ticks, 10000), 62135596800000));
}
function makeRangeStepFunction(step, last, unsigned) {
  var stepComparedWithZero = long_compare(step, unsigned ? UZERO : ZERO);

  if (stepComparedWithZero === 0) {
    throw new Error("The step of a range cannot be zero");
  }

  var stepGreaterThanZero = stepComparedWithZero > 0;
  return function (x) {
    var comparedWithLast = long_compare(x, last);

    if (stepGreaterThanZero && comparedWithLast <= 0 || !stepGreaterThanZero && comparedWithLast >= 0) {
      return [x, op_Addition(x, step)];
    } else {
      return null;
    }
  };
}
// CONCATENATED MODULE: ./.fable/fable-library.2.4.12/Date.js













/**
 * DateTimeOffset functions.
 *
 * Note: Date instances are always DateObjects in local
 * timezone (because JS dates are all kinds of messed up).
 * A local date returns UTC epoc when `.getTime()` is called.
 *
 * Basically; invariant: date.getTime() always return UTC time.
 */


var offsetRegex = /(?:Z|[+-](\d+):?([0-5]?\d)?)\s*$/;
function dateOffsetToString(offset) {
  var isMinus = offset < 0;
  offset = Math.abs(offset);
  var hours = ~~(offset / 3600000);
  var minutes = offset % 3600000 / 60000;
  return (isMinus ? "-" : "+") + padWithZeros(hours, 2) + ":" + padWithZeros(minutes, 2);
}
function dateToHalfUTCString(date, half) {
  var str = date.toISOString();
  return half === "first" ? str.substring(0, str.indexOf("T")) : str.substring(str.indexOf("T") + 1, str.length - 1);
}

function dateToISOString(d, utc) {
  if (utc) {
    return d.toISOString();
  } else {
    // JS Date is always local
    var printOffset = d.kind == null ? true : d.kind === 2
    /* Local */
    ;
    return padWithZeros(d.getFullYear(), 4) + "-" + padWithZeros(d.getMonth() + 1, 2) + "-" + padWithZeros(d.getDate(), 2) + "T" + padWithZeros(d.getHours(), 2) + ":" + padWithZeros(d.getMinutes(), 2) + ":" + padWithZeros(d.getSeconds(), 2) + "." + padWithZeros(d.getMilliseconds(), 3) + (printOffset ? dateOffsetToString(d.getTimezoneOffset() * -60000) : "");
  }
}

function dateToISOStringWithOffset(dateWithOffset, offset) {
  var str = dateWithOffset.toISOString();
  return str.substring(0, str.length - 1) + dateOffsetToString(offset);
}

function dateToStringWithCustomFormat(date, format, utc) {
  return format.replace(/(\w)\1*/g, function (match) {
    var rep = Number.NaN;

    switch (match.substring(0, 1)) {
      case "y":
        var y = utc ? date.getUTCFullYear() : date.getFullYear();
        rep = match.length < 4 ? y % 100 : y;
        break;

      case "M":
        rep = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
        break;

      case "d":
        rep = utc ? date.getUTCDate() : date.getDate();
        break;

      case "H":
        rep = utc ? date.getUTCHours() : date.getHours();
        break;

      case "h":
        var h = utc ? date.getUTCHours() : date.getHours();
        rep = h > 12 ? h % 12 : h;
        break;

      case "m":
        rep = utc ? date.getUTCMinutes() : date.getMinutes();
        break;

      case "s":
        rep = utc ? date.getUTCSeconds() : date.getSeconds();
        break;

      case "f":
        rep = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
        break;
    }

    if (Number.isNaN(rep)) {
      return match;
    } else {
      return rep < 10 && match.length > 1 ? "0" + rep : "" + rep;
    }
  });
}

function dateToStringWithOffset(date, format) {
  var d = new Date(date.getTime() + date.offset);

  if (typeof format !== "string") {
    return d.toISOString().replace(/\.\d+/, "").replace(/[A-Z]|\.\d+/g, " ") + dateOffsetToString(date.offset);
  } else if (format.length === 1) {
    switch (format) {
      case "D":
      case "d":
        return dateToHalfUTCString(d, "first");

      case "T":
      case "t":
        return dateToHalfUTCString(d, "second");

      case "O":
      case "o":
        return dateToISOStringWithOffset(d, date.offset);

      default:
        throw new Error("Unrecognized Date print format");
    }
  } else {
    return dateToStringWithCustomFormat(d, format, true);
  }
}

function dateToStringWithKind(date, format) {
  var utc = date.kind === 1
  /* UTC */
  ;

  if (typeof format !== "string") {
    return utc ? date.toUTCString() : date.toLocaleString();
  } else if (format.length === 1) {
    switch (format) {
      case "D":
      case "d":
        return utc ? dateToHalfUTCString(date, "first") : date.toLocaleDateString();

      case "T":
      case "t":
        return utc ? dateToHalfUTCString(date, "second") : date.toLocaleTimeString();

      case "O":
      case "o":
        return dateToISOString(date, utc);

      default:
        throw new Error("Unrecognized Date print format");
    }
  } else {
    return dateToStringWithCustomFormat(date, format, utc);
  }
}

function Date_toString(date, format) {
  return date.offset != null ? dateToStringWithOffset(date, format) : dateToStringWithKind(date, format);
}
function DateTime(value, kind) {
  var d = new Date(value);
  d.kind = (kind == null ? 0
  /* Unspecified */
  : kind) | 0;
  return d;
}
function fromTicks(ticks, kind) {
  ticks = Long_fromValue(ticks);
  kind = kind != null ? kind : 0
  /* Unspecified */
  ;
  var date = DateTime(ticksToUnixEpochMilliseconds(ticks), kind); // Ticks are local to offset (in this case, either UTC or Local/Unknown).
  // If kind is anything but UTC, that means that the tick number was not
  // in utc, thus getTime() cannot return UTC, and needs to be shifted.

  if (kind !== 1
  /* UTC */
  ) {
      date = DateTime(date.getTime() - dateOffset(date), kind);
    }

  return date;
}
function fromDateTimeOffset(date, kind) {
  switch (kind) {
    case 1
    /* UTC */
    :
      return DateTime(date.getTime(), 1
      /* UTC */
      );

    case 2
    /* Local */
    :
      return DateTime(date.getTime(), 2
      /* Local */
      );

    default:
      var d = DateTime(date.getTime() + date.offset, kind);
      return DateTime(d.getTime() - dateOffset(d), kind);
  }
}
function getTicks(date) {
  return unixEpochMillisecondsToTicks(date.getTime(), dateOffset(date));
}
function minValue() {
  // This is "0001-01-01T00:00:00.000Z", actual JS min value is -8640000000000000
  return DateTime(-62135596800000, 0
  /* Unspecified */
  );
}
function Date_maxValue() {
  // This is "9999-12-31T23:59:59.999Z", actual JS max value is 8640000000000000
  return DateTime(253402300799999, 0
  /* Unspecified */
  );
}
function parseRaw(str) {
  var date = new Date(str);

  if (isNaN(date.getTime())) {
    // Try to check strings JS Date cannot parse (see #1045, #1422)
    // tslint:disable-next-line:max-line-length
    var m = /^\s*(\d+[^\w\s:]\d+[^\w\s:]\d+)?\s*(\d+:\d+(?::\d+(?:\.\d+)?)?)?\s*([AaPp][Mm])?\s*([+-]\d+(?::\d+)?)?\s*$/.exec(str);

    if (m != null) {
      var baseDate = null;
      var timeInSeconds = 0;

      if (m[2] != null) {
        var timeParts = m[2].split(":");
        timeInSeconds = parseInt(timeParts[0], 10) * 3600 + parseInt(timeParts[1] || "0", 10) * 60 + parseFloat(timeParts[2] || "0");

        if (m[3] != null && m[3].toUpperCase() === "PM") {
          timeInSeconds += 720;
        }
      }

      if (m[4] != null) {
        // There's an offset, parse as UTC
        if (m[1] != null) {
          baseDate = new Date(m[1] + " UTC");
        } else {
          var d = new Date();
          baseDate = new Date(d.getUTCFullYear() + "/" + (d.getUTCMonth() + 1) + "/" + d.getUTCDate());
        }

        var offsetParts = m[4].substr(1).split(":");
        var offsetInMinutes = parseInt(offsetParts[0], 10) * 60 + parseInt(offsetParts[1] || "0", 10);

        if (m[4][0] === "+") {
          offsetInMinutes *= -1;
        }

        timeInSeconds += offsetInMinutes * 60;
      } else {
        if (m[1] != null) {
          baseDate = new Date(m[1]);
        } else {
          var _d = new Date();

          baseDate = new Date(_d.getFullYear() + "/" + (_d.getMonth() + 1) + "/" + _d.getDate());
        }
      }

      date = new Date(baseDate.getTime() + timeInSeconds * 1000); // correct for daylight savings time

      date = new Date(date.getTime() + (date.getTimezoneOffset() - baseDate.getTimezoneOffset()) * 60000);
    } else {
      throw new Error("The string is not a valid Date.");
    }
  }

  return date;
}
function Date_parse(str) {
  var detectUTC = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var date = parseRaw(str);
  var offset = offsetRegex.exec(str); // .NET always parses DateTime as Local if there's offset info (even "Z")
  // Newtonsoft.Json uses UTC if the offset is "Z"

  var kind = offset != null ? detectUTC && offset[0] === "Z" ? 1
  /* UTC */
  : 2
  /* Local */
  : 0
  /* Unspecified */
  ;
  return DateTime(date.getTime(), kind);
}
function Date_tryParse(v) {
  try {
    // if value is null or whitespace, parsing fails
    if (v == null || v.trim() === "") {
      return [false, minValue()];
    }

    return [true, Date_parse(v)];
  } catch (_err) {
    return [false, minValue()];
  }
}
function create(year, month, day) {
  var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var m = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var ms = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var kind = arguments.length > 7 ? arguments[7] : undefined;
  var dateValue = kind === 1
  /* UTC */
  ? Date.UTC(year, month - 1, day, h, m, s, ms) : new Date(year, month - 1, day, h, m, s, ms).getTime();

  if (isNaN(dateValue)) {
    throw new Error("The parameters describe an unrepresentable Date.");
  }

  var date = DateTime(dateValue, kind);

  if (year <= 99) {
    date.setFullYear(year, month - 1, day);
  }

  return date;
}
function now() {
  return DateTime(Date.now(), 2
  /* Local */
  );
}
function utcNow() {
  return DateTime(Date.now(), 1
  /* UTC */
  );
}
function today() {
  return Date_date(now());
}
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function daysInMonth(year, month) {
  return month === 2 ? isLeapYear(year) ? 29 : 28 : month >= 8 ? month % 2 === 0 ? 31 : 30 : month % 2 === 0 ? 30 : 31;
}
function toUniversalTime(date) {
  return date.kind === 1
  /* UTC */
  ? date : DateTime(date.getTime(), 1
  /* UTC */
  );
}
function toLocalTime(date) {
  return date.kind === 2
  /* Local */
  ? date : DateTime(date.getTime(), 2
  /* Local */
  );
}
function specifyKind(d, kind) {
  return create(year(d), month(d), day(d), hour(d), minute(d), second(d), millisecond(d), kind);
}
function timeOfDay(d) {
  return hour(d) * 3600000 + minute(d) * 60000 + second(d) * 1000 + millisecond(d);
}
function Date_date(d) {
  return create(year(d), month(d), day(d), 0, 0, 0, 0, d.kind);
}
function day(d) {
  return d.kind === 1
  /* UTC */
  ? d.getUTCDate() : d.getDate();
}
function hour(d) {
  return d.kind === 1
  /* UTC */
  ? d.getUTCHours() : d.getHours();
}
function millisecond(d) {
  return d.kind === 1
  /* UTC */
  ? d.getUTCMilliseconds() : d.getMilliseconds();
}
function minute(d) {
  return d.kind === 1
  /* UTC */
  ? d.getUTCMinutes() : d.getMinutes();
}
function month(d) {
  return (d.kind === 1
  /* UTC */
  ? d.getUTCMonth() : d.getMonth()) + 1;
}
function second(d) {
  return d.kind === 1
  /* UTC */
  ? d.getUTCSeconds() : d.getSeconds();
}
function year(d) {
  return d.kind === 1
  /* UTC */
  ? d.getUTCFullYear() : d.getFullYear();
}
function dayOfWeek(d) {
  return d.kind === 1
  /* UTC */
  ? d.getUTCDay() : d.getDay();
}
function dayOfYear(d) {
  var _year = year(d);

  var _month = month(d);

  var _day = day(d);

  for (var i = 1; i < _month; i++) {
    _day += daysInMonth(_year, i);
  }

  return _day;
}
function Date_add(d, ts) {
  var newDate = DateTime(d.getTime() + ts, d.kind);

  if (d.kind === 2
  /* Local */
  ) {
      var oldTzOffset = d.getTimezoneOffset();
      var newTzOffset = newDate.getTimezoneOffset();
      return oldTzOffset !== newTzOffset ? DateTime(newDate.getTime() + (newTzOffset - oldTzOffset) * 60000, d.kind) : newDate;
    } else {
    return newDate;
  }
}
function addDays(d, v) {
  return Date_add(d, v * 86400000);
}
function addHours(d, v) {
  return Date_add(d, v * 3600000);
}
function addMinutes(d, v) {
  return Date_add(d, v * 60000);
}
function addSeconds(d, v) {
  return Date_add(d, v * 1000);
}
function addMilliseconds(d, v) {
  return Date_add(d, v);
}
function addYears(d, v) {
  var newMonth = month(d);
  var newYear = year(d) + v;

  var _daysInMonth = daysInMonth(newYear, newMonth);

  var newDay = Math.min(_daysInMonth, day(d));
  return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind);
}
function addMonths(d, v) {
  var newMonth = month(d) + v;
  var newMonth_ = 0;
  var yearOffset = 0;

  if (newMonth > 12) {
    newMonth_ = newMonth % 12;
    yearOffset = Math.floor(newMonth / 12);
    newMonth = newMonth_;
  } else if (newMonth < 1) {
    newMonth_ = 12 + newMonth % 12;
    yearOffset = Math.floor(newMonth / 12) + (newMonth_ === 12 ? -1 : 0);
    newMonth = newMonth_;
  }

  var newYear = year(d) + yearOffset;

  var _daysInMonth = daysInMonth(newYear, newMonth);

  var newDay = Math.min(_daysInMonth, day(d));
  return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind);
}
function Date_subtract(d, that) {
  return typeof that === "number" ? Date_add(d, -that) : d.getTime() - that.getTime();
}
function toLongDateString(d) {
  return d.toDateString();
}
function toShortDateString(d) {
  return d.toLocaleDateString();
}
function toLongTimeString(d) {
  return d.toLocaleTimeString();
}
function toShortTimeString(d) {
  return d.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
}
function Date_equals(d1, d2) {
  return d1.getTime() === d2.getTime();
}
var Date_compare = compareDates;
var compareTo = compareDates;
function Date_op_Addition(x, y) {
  return Date_add(x, y);
}
function Date_op_Subtraction(x, y) {
  return Date_subtract(x, y);
}
function isDaylightSavingTime(x) {
  var jan = new Date(x.getFullYear(), 0, 1);
  var jul = new Date(x.getFullYear(), 6, 1);
  return isDST(jan.getTimezoneOffset(), jul.getTimezoneOffset(), x.getTimezoneOffset());
}

function isDST(janOffset, julOffset, tOffset) {
  return Math.min(janOffset, julOffset) === tOffset;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reverse.js
var es_array_reverse = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.sub.js
var es_string_sub = __webpack_require__(187);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.from.js
var es_typed_array_from = __webpack_require__(226);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(227);

// CONCATENATED MODULE: ./.fable/fable-library.2.4.12/lib/big.js

















// https://github.com/MikeMcl/big.js/blob/01b3ce3a6b0ba7b42442ea48ec4ffc88d1669ec4/big.mjs

/* tslint:disable */
 // The shared prototype object.

var P = {
  GetHashCode: function GetHashCode() {
    return combineHashCodes([this.s, this.e].concat(this.c));
  },
  Equals: function Equals(x) {
    return !this.cmp(x);
  },
  CompareTo: function CompareTo(x) {
    return this.cmp(x);
  }
};
/*
 *  big.js v5.2.2
 *  A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
 *  Copyright (c) 2018 Michael Mclaughlin <M8ch88l@gmail.com>
 *  https://github.com/MikeMcl/big.js/LICENCE
 */

/************************************** EDITABLE DEFAULTS *****************************************/
// The default values below must be integers within the stated ranges.

/*
 * The maximum number of decimal places (DP) of the results of operations involving division:
 * div and sqrt, and pow with negative exponents.
 */

var DP = 28,
    // 0 to MAX_DP

/*
 * The rounding mode (RM) used when rounding to the above decimal places.
 *
 *  0  Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
 *  1  To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
 *  2  To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
 *  3  Away from zero.                                  (ROUND_UP)
 */
RM = 1,
    // 0, 1, 2 or 3
// The maximum value of DP and Big.DP.
MAX_DP = 1E6,
    // 0 to 1000000
// The maximum magnitude of the exponent argument to the pow method.
MAX_POWER = 1E6,
    // 1 to 1000000

/*
 * The negative exponent (NE) at and beneath which toString returns exponential notation.
 * (JavaScript numbers: -7)
 * -1000000 is the minimum recommended exponent value of a Big.
 */
NE = -29,
    // 0 to -1000000

/*
 * The positive exponent (PE) at and above which toString returns exponential notation.
 * (JavaScript numbers: 21)
 * 1000000 is the maximum recommended exponent value of a Big.
 * (This limit is not enforced or checked.)
 */
PE = 29,
    // 0 to 1000000

/**************************************************************************************************/
// Error messages.
NAME = "[big.js] ",
    INVALID = NAME + "Invalid ",
    INVALID_DP = INVALID + "decimal places",
    INVALID_RM = INVALID + "rounding mode",
    DIV_BY_ZERO = NAME + "Division by zero",
    UNDEFINED = void 0,
    NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
/*
 * Create and return a Big constructor.
 *
 */

function _Big_() {
  /*
   * The Big constructor and exported function.
   * Create and return a new instance of a Big number object.
   *
   * n {number|string|Big} A numeric value.
   */
  function Big(n) {
    var x = this; // Enable constructor usage without new.

    if (!(x instanceof Big)) return n === UNDEFINED ? _Big_() : new Big(n); // Duplicate.

    if (n instanceof Big) {
      x.s = n.s;
      x.e = n.e;
      x.c = n.c.slice();
      normalize(x);
    } else {
      big_parse(x, n);
    }
    /*
     * Retain a reference to this Big constructor, and shadow Big.prototype.constructor which
     * points to Object.
     */


    x.constructor = Big;
  }

  Big.prototype = P;
  Big.DP = DP;
  Big.RM = RM;
  Big.NE = NE;
  Big.PE = PE;
  Big.version = "5.2.2";
  return Big;
}

function normalize(x) {
  x = big_round(x, DP, 0);

  if (x.c.length > 1 && !x.c[0]) {
    var i = x.c.findIndex(function (x) {
      return x;
    });
    x.c = x.c.slice(i);
    x.e = x.e - i;
  }
}
/*
 * Parse the number or string value passed to a Big constructor.
 *
 * x {Big} A Big number instance.
 * n {number|string} A numeric value.
 */


function big_parse(x, n) {
  var e, i, nl; // Minus zero?

  if (n === 0 && 1 / n < 0) n = "-0";else if (!NUMERIC.test(n += "")) throw Error(INVALID + "number"); // Determine sign.

  x.s = n.charAt(0) == "-" ? (n = n.slice(1), -1) : 1; // Decimal point?

  if ((e = n.indexOf(".")) > -1) n = n.replace(".", ""); // Exponential form?

  if ((i = n.search(/e/i)) > 0) {
    // Determine exponent.
    if (e < 0) e = i;
    e += +n.slice(i + 1);
    n = n.substring(0, i);
  } else if (e < 0) {
    // Integer.
    e = n.length;
  }

  nl = n.length; // Determine leading zeros before decimal point.

  for (i = 0; i < e && i < nl && n.charAt(i) == "0";) {
    ++i;
  } // older version (ignores decimal point).
  // // Determine leading zeros.
  // for (i = 0; i < nl && n.charAt(i) == '0';) ++i;


  if (i == nl) {
    // Zero.
    x.c = [x.e = 0];
  } else {
    x.e = e - i - 1;
    x.c = []; // Convert string to array of digits without leading zeros

    for (e = 0; i < nl;) {
      x.c[e++] = +n.charAt(i++);
    } // older version (doesn't keep trailing zeroes).
    // // Determine trailing zeros.
    // for (; nl > 0 && n.charAt(--nl) == '0';);
    // // Convert string to array of digits without leading/trailing zeros.
    // for (e = 0; i <= nl;) x.c[e++] = +n.charAt(i++);

  }

  x = big_round(x, Big.DP, Big.RM);
  return x;
}
/*
 * Round Big x to a maximum of dp decimal places using rounding mode rm.
 * Called by stringify, P.div, P.round and P.sqrt.
 *
 * x {Big} The Big to round.
 * dp {number} Integer, 0 to MAX_DP inclusive.
 * rm {number} 0, 1, 2 or 3 (DOWN, HALF_UP, HALF_EVEN, UP)
 * [more] {boolean} Whether the result of division was truncated.
 */


function big_round(x, dp, rm, more) {
  var xc = x.c,
      i = x.e + dp + 1;

  if (i < xc.length) {
    if (rm === 1) {
      // xc[i] is the digit after the digit that may be rounded up.
      more = xc[i] >= 5;
    } else if (rm === 2) {
      more = xc[i] > 5 || xc[i] == 5 && (more || i < 0 || xc[i + 1] !== UNDEFINED || xc[i - 1] & 1);
    } else if (rm === 3) {
      more = more || !!xc[0];
    } else {
      more = false;
      if (rm !== 0) throw Error(INVALID_RM);
    }

    if (i < 1) {
      xc.length = 1;

      if (more) {
        // 1, 0.1, 0.01, 0.001, 0.0001 etc.
        x.e = -dp;
        xc[0] = 1;
      } else {
        // Zero.
        xc[0] = x.e = 0;
      }
    } else {
      // Remove any digits after the required decimal places.
      xc.length = i--; // Round up?

      if (more) {
        // Rounding up may mean the previous digit has to be rounded up.
        for (; ++xc[i] > 9;) {
          xc[i] = 0;

          if (!i--) {
            ++x.e;
            xc.unshift(1);
          }
        }
      } // Remove trailing zeros.


      for (i = xc.length; !xc[--i];) {
        xc.pop();
      }
    }
  } else if (rm < 0 || rm > 3 || rm !== ~~rm) {
    throw Error(INVALID_RM);
  }

  return x;
}
/*
 * Return a string representing the value of Big x in normal or exponential notation.
 * Handles P.toExponential, P.toFixed, P.toJSON, P.toPrecision, P.toString and P.valueOf.
 *
 * x {Big}
 * id? {number} Caller id.
 *         1 toExponential
 *         2 toFixed
 *         3 toPrecision
 *         4 valueOf
 * n? {number|undefined} Caller's argument.
 * k? {number|undefined}
 */


function stringify(x, id, n, k) {
  var e,
      s,
      Big = x.constructor,
      z = !x.c[0];

  if (n !== UNDEFINED) {
    if (n !== ~~n || n < (id == 3) || n > MAX_DP) {
      throw Error(id == 3 ? INVALID + "precision" : INVALID_DP);
    }

    x = new Big(x); // The index of the digit that may be rounded up.

    n = k - x.e; // Round?

    if (x.c.length > ++k) big_round(x, n, Big.RM); // toFixed: recalculate k as x.e may have changed if value rounded up.

    if (id == 2) k = x.e + n + 1; // Append zeros?

    for (; x.c.length < k;) {
      x.c.push(0);
    }
  }

  e = x.e;
  s = x.c.join("");
  n = s.length; // Exponential notation?

  if (id != 2 && (id == 1 || id == 3 && k <= e || e <= Big.NE || e >= Big.PE)) {
    s = s.charAt(0) + (n > 1 ? "." + s.slice(1) : "") + (e < 0 ? "e" : "e+") + e; // Normal notation.
  } else if (e < 0) {
    for (; ++e;) {
      s = "0" + s;
    }

    s = "0." + s;
  } else if (e > 0) {
    if (++e > n) for (e -= n; e--;) {
      s += "0";
    } else if (e < n) s = s.slice(0, e) + "." + s.slice(e);
  } else if (n > 1) {
    s = s.charAt(0) + "." + s.slice(1);
  }

  return x.s < 0 && (!z || id == 4) ? "-" + s : s;
} // Prototype/instance methods

/*
 * Return a new Big whose value is the absolute value of this Big.
 */


P.abs = function () {
  var x = new this.constructor(this);
  x.s = 1;
  return x;
};
/*
 * Return 1 if the value of this Big is greater than the value of Big y,
 *       -1 if the value of this Big is less than the value of Big y, or
 *        0 if they have the same value.
*/


P.cmp = function (y) {
  var isneg,
      Big = this.constructor,
      x = new Big(this),
      y = new Big(y),
      xc = x.c,
      yc = y.c,
      i = x.s,
      j = y.s,
      k = x.e,
      l = y.e; // Either zero?

  if (!xc[0] || !yc[0]) return !xc[0] ? !yc[0] ? 0 : -j : i; // Signs differ?

  if (i != j) return i;
  isneg = i < 0; // Compare exponents.

  if (k != l) return k > l ^ isneg ? 1 : -1; // Compare digit by digit.

  j = Math.max(xc.length, yc.length);

  for (i = 0; i < j; i++) {
    k = i < xc.length ? xc[i] : 0;
    l = i < yc.length ? yc[i] : 0;
    if (k != l) return k > l ^ isneg ? 1 : -1;
  }

  return 0; // old version (doesn't compare well trailing zeroes, e.g. 1.0 with 1.00)
  // j = (k = xc.length) < (l = yc.length) ? k : l;
  // // Compare digit by digit.
  // for (i = -1; ++i < j;) {
  //   if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
  // }
  // // Compare lengths.
  // return k == l ? 0 : k > l ^ isneg ? 1 : -1;
};
/*
 * Return a new Big whose value is the value of this Big divided by the value of Big y, rounded,
 * if necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */


P.div = function (y) {
  var Big = this.constructor,
      x = new Big(this),
      y = new Big(y),
      a = x.c,
      // dividend
  b = y.c,
      // divisor
  k = x.s == y.s ? 1 : -1,
      dp = Big.DP;
  if (dp !== ~~dp || dp < 0 || dp > MAX_DP) throw Error(INVALID_DP); // Divisor is zero?

  if (!b[0]) throw Error(DIV_BY_ZERO); // Dividend is 0? Return +-0.

  if (!a[0]) return new Big(k * 0);
  var bl,
      bt,
      n,
      cmp,
      ri,
      bz = b.slice(),
      ai = bl = b.length,
      al = a.length,
      r = a.slice(0, bl),
      // remainder
  rl = r.length,
      q = y,
      // quotient
  qc = q.c = [],
      qi = 0,
      d = dp + (q.e = x.e - y.e) + 1; // number of digits of the result

  q.s = k;
  k = d < 0 ? 0 : d; // Create version of divisor with leading zero.

  bz.unshift(0); // Add zeros to make remainder as long as divisor.

  for (; rl++ < bl;) {
    r.push(0);
  }

  do {
    // n is how many times the divisor goes into current remainder.
    for (n = 0; n < 10; n++) {
      // Compare divisor and remainder.
      if (bl != (rl = r.length)) {
        cmp = bl > rl ? 1 : -1;
      } else {
        for (ri = -1, cmp = 0; ++ri < bl;) {
          if (b[ri] != r[ri]) {
            cmp = b[ri] > r[ri] ? 1 : -1;
            break;
          }
        }
      } // If divisor < remainder, subtract divisor from remainder.


      if (cmp < 0) {
        // Remainder can't be more than 1 digit longer than divisor.
        // Equalise lengths using divisor with extra leading zero?
        for (bt = rl == bl ? b : bz; rl;) {
          if (r[--rl] < bt[rl]) {
            ri = rl;

            for (; ri && !r[--ri];) {
              r[ri] = 9;
            }

            --r[ri];
            r[rl] += 10;
          }

          r[rl] -= bt[rl];
        }

        for (; !r[0];) {
          r.shift();
        }
      } else {
        break;
      }
    } // Add the digit n to the result array.


    qc[qi++] = cmp ? n : ++n; // Update the remainder.

    if (r[0] && cmp) r[rl] = a[ai] || 0;else r = [a[ai]];
  } while ((ai++ < al || r[0] !== UNDEFINED) && k--); // Leading zero? Do not remove if result is simply zero (qi == 1).


  if (!qc[0] && qi != 1) {
    // There can't be more than one zero.
    qc.shift();
    q.e--;
  } // Round?


  if (qi > d) big_round(q, dp, Big.RM, r[0] !== UNDEFINED);
  return q;
};
/*
 * Return true if the value of this Big is equal to the value of Big y, otherwise return false.
 */


P.eq = function (y) {
  return !this.cmp(y);
};
/*
 * Return true if the value of this Big is greater than the value of Big y, otherwise return
 * false.
 */


P.gt = function (y) {
  return this.cmp(y) > 0;
};
/*
 * Return true if the value of this Big is greater than or equal to the value of Big y, otherwise
 * return false.
 */


P.gte = function (y) {
  return this.cmp(y) > -1;
};
/*
 * Return true if the value of this Big is less than the value of Big y, otherwise return false.
 */


P.lt = function (y) {
  return this.cmp(y) < 0;
};
/*
 * Return true if the value of this Big is less than or equal to the value of Big y, otherwise
 * return false.
 */


P.lte = function (y) {
  return this.cmp(y) < 1;
};
/*
 * Return a new Big whose value is the value of this Big minus the value of Big y.
 */


P.minus = P.sub = function (y) {
  var i,
      j,
      t,
      xlty,
      Big = this.constructor,
      x = new Big(this),
      y = new Big(y),
      a = x.s,
      b = y.s; // Signs differ?

  if (a != b) {
    y.s = -b;
    return x.plus(y);
  }

  var xc = x.c.slice(),
      xe = x.e,
      yc = y.c,
      ye = y.e; // Either zero?

  if (!xc[0] || !yc[0]) {
    // y is non-zero? x is non-zero? Or both are zero.
    return yc[0] ? (y.s = -b, y) : new Big(xc[0] ? x : 0);
  } // Determine which is the bigger number. Prepend zeros to equalise exponents.


  if (a = xe - ye) {
    if (xlty = a < 0) {
      a = -a;
      t = xc;
    } else {
      ye = xe;
      t = yc;
    }

    t.reverse();

    for (b = a; b--;) {
      t.push(0);
    }

    t.reverse();
  } else {
    // Exponents equal. Check digit by digit.
    j = ((xlty = xc.length < yc.length) ? xc : yc).length;

    for (a = b = 0; b < j; b++) {
      if (xc[b] != yc[b]) {
        xlty = xc[b] < yc[b];
        break;
      }
    }
  } // x < y? Point xc to the array of the bigger number.


  if (xlty) {
    t = xc;
    xc = yc;
    yc = t;
    y.s = -y.s;
  }
  /*
   * Append zeros to xc if shorter. No need to add zeros to yc if shorter as subtraction only
   * needs to start at yc.length.
   */


  if ((b = (j = yc.length) - (i = xc.length)) > 0) for (; b--;) {
    xc[i++] = 0;
  } // Subtract yc from xc.

  for (b = i; j > a;) {
    if (xc[--j] < yc[j]) {
      for (i = j; i && !xc[--i];) {
        xc[i] = 9;
      }

      --xc[i];
      xc[j] += 10;
    }

    xc[j] -= yc[j];
  } // Remove trailing zeros.


  for (; xc[--b] === 0;) {
    xc.pop();
  } // Remove leading zeros and adjust exponent accordingly.


  for (; xc[0] === 0;) {
    xc.shift();
    --ye;
  }

  if (!xc[0]) {
    // n - n = +0
    y.s = 1; // Result must be zero.

    xc = [ye = 0];
  }

  y.c = xc;
  y.e = ye;
  return y;
};
/*
 * Return a new Big whose value is the value of this Big modulo the value of Big y.
 */


P.mod = function (y) {
  var ygtx,
      Big = this.constructor,
      x = new Big(this),
      y = new Big(y),
      a = x.s,
      b = y.s;
  if (!y.c[0]) throw Error(DIV_BY_ZERO);
  x.s = y.s = 1;
  ygtx = y.cmp(x) == 1;
  x.s = a;
  y.s = b;
  if (ygtx) return new Big(x);
  a = Big.DP;
  b = Big.RM;
  Big.DP = Big.RM = 0;
  x = x.div(y);
  Big.DP = a;
  Big.RM = b;
  return this.minus(x.times(y));
};
/*
 * Return a new Big whose value is the value of this Big plus the value of Big y.
 */


P.plus = P.add = function (y) {
  var t,
      Big = this.constructor,
      x = new Big(this),
      y = new Big(y),
      a = x.s,
      b = y.s; // Signs differ?

  if (a != b) {
    y.s = -b;
    return x.minus(y);
  }

  var xe = x.e,
      xc = x.c,
      ye = y.e,
      yc = y.c; // Either zero? y is non-zero? x is non-zero? Or both are zero.

  if (!xc[0] || !yc[0]) return yc[0] ? y : new Big(xc[0] ? x : a * 0);
  xc = xc.slice(); // Prepend zeros to equalise exponents.
  // Note: reverse faster than unshifts.

  if (a = xe - ye) {
    if (a > 0) {
      ye = xe;
      t = yc;
    } else {
      a = -a;
      t = xc;
    }

    t.reverse();

    for (; a--;) {
      t.push(0);
    }

    t.reverse();
  } // Point xc to the longer array.


  if (xc.length - yc.length < 0) {
    t = yc;
    yc = xc;
    xc = t;
  }

  a = yc.length; // Only start adding at yc.length - 1 as the further digits of xc can be left as they are.

  for (b = 0; a; xc[a] %= 10) {
    b = (xc[--a] = xc[a] + yc[a] + b) / 10 | 0;
  } // No need to check for zero, as +x + +y != 0 && -x + -y != 0


  if (b) {
    xc.unshift(b);
    ++ye;
  } // Remove trailing zeros.


  for (a = xc.length; xc[--a] === 0;) {
    xc.pop();
  }

  y.c = xc;
  y.e = ye;
  return y;
};
/*
 * Return a Big whose value is the value of this Big raised to the power n.
 * If n is negative, round to a maximum of Big.DP decimal places using rounding
 * mode Big.RM.
 *
 * n {number} Integer, -MAX_POWER to MAX_POWER inclusive.
 */


P.pow = function (n) {
  var Big = this.constructor,
      x = new Big(this),
      y = new Big(1),
      one = new Big(1),
      isneg = n < 0;
  if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) throw Error(INVALID + "exponent");
  if (isneg) n = -n;

  for (;;) {
    if (n & 1) y = y.times(x);
    n >>= 1;
    if (!n) break;
    x = x.times(x);
  }

  return isneg ? one.div(y) : y;
};
/*
 * Return a new Big whose value is the value of this Big rounded using rounding mode rm
 * to a maximum of dp decimal places, or, if dp is negative, to an integer which is a
 * multiple of 10**-dp.
 * If dp is not specified, round to 0 decimal places.
 * If rm is not specified, use Big.RM.
 *
 * dp? {number} Integer, -MAX_DP to MAX_DP inclusive.
 * rm? 0, 1, 2 or 3 (ROUND_DOWN, ROUND_HALF_UP, ROUND_HALF_EVEN, ROUND_UP)
 */


P.round = function (dp, rm) {
  var Big = this.constructor;
  if (dp === UNDEFINED) dp = 0;else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) throw Error(INVALID_DP);
  return big_round(new Big(this), dp, rm === UNDEFINED ? Big.RM : rm);
};
/*
 * Return a new Big whose value is the square root of the value of this Big, rounded, if
 * necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */


P.sqrt = function () {
  var r,
      c,
      t,
      Big = this.constructor,
      x = new Big(this),
      s = x.s,
      e = x.e,
      half = new Big(0.5); // Zero?

  if (!x.c[0]) return new Big(x); // Negative?

  if (s < 0) throw Error(NAME + "No square root"); // Estimate.

  s = Math.sqrt(x + ""); // Math.sqrt underflow/overflow?
  // Re-estimate: pass x coefficient to Math.sqrt as integer, then adjust the result exponent.

  if (s === 0 || s === 1 / 0) {
    c = x.c.join("");
    if (!(c.length + e & 1)) c += "0";
    s = Math.sqrt(c);
    e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
    r = new Big((s == 1 / 0 ? "1e" : (s = s.toExponential()).slice(0, s.indexOf("e") + 1)) + e);
  } else {
    r = new Big(s);
  }

  e = r.e + (Big.DP += 4); // Newton-Raphson iteration.

  do {
    t = r;
    r = half.times(t.plus(x.div(t)));
  } while (t.c.slice(0, e).join("") !== r.c.slice(0, e).join(""));

  return big_round(r, Big.DP -= 4, Big.RM);
};
/*
 * Return a new Big whose value is the value of this Big times the value of Big y.
 */


P.times = P.mul = function (y) {
  var c,
      Big = this.constructor,
      x = new Big(this),
      y = new Big(y),
      xc = x.c,
      yc = y.c,
      a = xc.length,
      b = yc.length,
      i = x.e,
      j = y.e; // Determine sign of result.

  y.s = x.s == y.s ? 1 : -1; // Return signed 0 if either 0.

  if (!xc[0] || !yc[0]) return new Big(y.s * 0); // Initialise exponent of result as x.e + y.e.

  y.e = i + j; // If array xc has fewer digits than yc, swap xc and yc, and lengths.

  if (a < b) {
    c = xc;
    xc = yc;
    yc = c;
    j = a;
    a = b;
    b = j;
  } // Initialise coefficient array of result with zeros.


  for (c = new Array(j = a + b); j--;) {
    c[j] = 0;
  } // Multiply.
  // i is initially xc.length.


  for (i = b; i--;) {
    b = 0; // a is yc.length.

    for (j = a + i; j > i;) {
      // Current sum of products at this digit position, plus carry.
      b = c[j] + yc[i] * xc[j - i - 1] + b;
      c[j--] = b % 10; // carry

      b = b / 10 | 0;
    }

    c[j] = (c[j] + b) % 10;
  } // Increment result exponent if there is a final carry, otherwise remove leading zero.


  if (b) ++y.e;else c.shift(); // Remove trailing zeros.

  for (i = c.length; !c[--i];) {
    c.pop();
  }

  y.c = c;
  return y;
};
/*
 * Return a string representing the value of this Big in exponential notation to dp fixed decimal
 * places and rounded using Big.RM.
 *
 * dp? {number} Integer, 0 to MAX_DP inclusive.
 */


P.toExponential = function (dp) {
  return stringify(this, 1, dp, dp);
};
/*
 * Return a string representing the value of this Big in normal notation to dp fixed decimal
 * places and rounded using Big.RM.
 *
 * dp? {number} Integer, 0 to MAX_DP inclusive.
 *
 * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
 * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
 */


P.toFixed = function (dp) {
  return stringify(this, 2, dp, this.e + dp);
};
/*
 * Return a string representing the value of this Big rounded to sd significant digits using
 * Big.RM. Use exponential notation if sd is less than the number of digits necessary to represent
 * the integer part of the value in normal notation.
 *
 * sd {number} Integer, 1 to MAX_DP inclusive.
 */


P.toPrecision = function (sd) {
  return stringify(this, 3, sd, sd - 1);
};
/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Omit the sign for negative zero.
 */


P.toString = function () {
  return stringify(this);
};
/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Include the sign for negative zero.
 */


P.valueOf = P.toJSON = function () {
  return stringify(this, 4);
}; // Export


var Big = _Big_();
/* harmony default export */ var lib_big = (Big);
// CONCATENATED MODULE: ./.fable/fable-library.2.4.12/Decimal.js











































function Decimal_slicedToArray(arr, i) { return Decimal_arrayWithHoles(arr) || Decimal_iterableToArrayLimit(arr, i) || Decimal_nonIterableRest(); }

function Decimal_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function Decimal_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Decimal_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* harmony default export */ var Decimal = (lib_big);
var Decimal_get_Zero = new lib_big(0);
var Decimal_get_One = new lib_big(1);
var get_MinusOne = new lib_big(-1);
var get_MaxValue = new lib_big("79228162514264337593543950335");
var get_MinValue = new lib_big("-79228162514264337593543950335");
function Decimal_compare(x, y) {
  return x.cmp(y);
}
function Decimal_equals(x, y) {
  return !x.cmp(y);
}
function Decimal_abs(x) {
  return x.abs();
}
function Decimal_round(x) {
  var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return x.round(digits, 2
  /* ROUND_HALF_EVEN */
  );
}
function truncate(x) {
  return x.round(0, 0
  /* ROUND_DOWN */
  );
}
function ceiling(x) {
  return x.round(0, x.cmp(0) >= 0 ? 3
  /* ROUND_UP */
  : 0
  /* ROUND_DOWN */
  );
}
function floor(x) {
  return x.round(0, x.cmp(0) >= 0 ? 0
  /* ROUND_DOWN */
  : 3
  /* ROUND_UP */
  );
}
function pow(x, n) {
  return x.pow(n);
}
function sqrt(x) {
  return x.sqrt();
}
function Decimal_op_Addition(x, y) {
  return x.add(y);
}
function Decimal_op_Subtraction(x, y) {
  return x.sub(y);
}
function Decimal_op_Multiply(x, y) {
  return x.mul(y);
}
function Decimal_op_Division(x, y) {
  return x.div(y);
}
function Decimal_op_Modulus(x, y) {
  return x.mod(y);
}
function Decimal_op_UnaryNegation(x) {
  var x2 = new lib_big(x);
  x2.s = -x2.s || 0;
  return x2;
}
var Decimal_add = Decimal_op_Addition;
var Decimal_subtract = Decimal_op_Subtraction;
var Decimal_multiply = Decimal_op_Multiply;
var Decimal_divide = Decimal_op_Division;
var remainder = Decimal_op_Modulus;
var Decimal_negate = Decimal_op_UnaryNegation;
function Decimal_toString(x) {
  return x.toString();
}
function Decimal_tryParse(str) {
  try {
    return [true, new lib_big(str.trim())];
  } catch (_a) {
    return [false, Decimal_get_Zero];
  }
}
function Decimal_parse(str) {
  var _tryParse = Decimal_tryParse(str),
      _tryParse2 = Decimal_slicedToArray(_tryParse, 2),
      ok = _tryParse2[0],
      value = _tryParse2[1];

  if (ok) {
    return value;
  } else {
    throw new Error("Input string was not in a correct format.");
  }
}
function Decimal_toNumber(x) {
  return +x;
}

function decimalToHex(dec, bitSize) {
  var hex = new Uint8Array(bitSize / 4 | 0);
  var hexCount = 1;

  for (var d = 0; d < dec.length; d++) {
    var value = dec[d];

    for (var i = 0; i < hexCount; i++) {
      var digit = hex[i] * 10 + value | 0;
      hex[i] = digit & 0xF;
      value = digit >> 4;
    }

    if (value !== 0) {
      hex[hexCount++] = value;
    }
  }

  return hex.slice(0, hexCount); // digits in reverse order
}

function hexToDecimal(hex, bitSize) {
  var dec = new Uint8Array(bitSize * 301 / 1000 + 1 | 0);
  var decCount = 1;

  for (var d = hex.length - 1; d >= 0; d--) {
    var carry = hex[d];

    for (var i = 0; i < decCount; i++) {
      var val = dec[i] * 16 + carry | 0;
      dec[i] = val % 10 | 0;
      carry = val / 10 | 0;
    }

    while (carry > 0) {
      dec[decCount++] = carry % 10 | 0;
      carry = carry / 10 | 0;
    }
  }

  return dec.slice(0, decCount); // digits in reverse order
}

function setInt32Bits(hexDigits, bits, offset) {
  for (var i = 0; i < 8; i++) {
    hexDigits[offset + i] = bits >> i * 4 & 0xF;
  }
}

function getInt32Bits(hexDigits, offset) {
  var bits = 0;

  for (var i = 0; i < 8; i++) {
    bits = bits | hexDigits[offset + i] << i * 4;
  }

  return bits;
}

function fromIntArray(bits) {
  return fromInts(bits[0], bits[1], bits[2], bits[3]);
}
function fromInts(low, mid, high, signExp) {
  var isNegative = signExp < 0;
  var scale = signExp >> 16 & 0x7F;
  return fromParts(low, mid, high, isNegative, scale);
}
function fromParts(low, mid, high, isNegative, scale) {
  var bitSize = 96;
  var hexDigits = new Uint8Array(bitSize / 4);
  setInt32Bits(hexDigits, low, 0);
  setInt32Bits(hexDigits, mid, 8);
  setInt32Bits(hexDigits, high, 16);
  var decDigits = hexToDecimal(hexDigits, bitSize);
  scale = scale & 0x7F;
  var big = new lib_big(0);
  big.c = Array.from(decDigits.reverse());
  big.e = decDigits.length - scale - 1;
  big.s = isNegative ? -1 : 1;
  var d = new lib_big(big);
  return d;
}
function getBits(d) {
  var bitSize = 96;
  var decDigits = Uint8Array.from(d.c);
  var hexDigits = decimalToHex(decDigits, bitSize);
  var low = getInt32Bits(hexDigits, 0);
  var mid = getInt32Bits(hexDigits, 8);
  var high = getInt32Bits(hexDigits, 16);
  var decStr = d.toString();
  var dotPos = decStr.indexOf(".");
  var scale = dotPos < 0 ? 0 : decStr.length - dotPos - 1;
  var signExp = (scale & 0x7F) << 16 | (d.s < 0 ? 0x80000000 : 0);
  return [low, mid, high, signExp];
}
function Decimal_makeRangeStepFunction(step, last) {
  var stepComparedWithZero = step.cmp(Decimal_get_Zero);

  if (stepComparedWithZero === 0) {
    throw new Error("The step of a range cannot be zero");
  }

  var stepGreaterThanZero = stepComparedWithZero > 0;
  return function (x) {
    var comparedWithLast = x.cmp(last);

    if (stepGreaterThanZero && comparedWithLast <= 0 || !stepGreaterThanZero && comparedWithLast >= 0) {
      return [x, Decimal_op_Addition(x, step)];
    } else {
      return null;
    }
  };
}
// CONCATENATED MODULE: ./.fable/fable-library.2.4.12/RegExp.js





function RegExp_create(pattern, options) {
  // Supported RegexOptions
  // * IgnoreCase:  0x0001
  // * Multiline:   0x0002
  // * Singleline:  0x0010
  // * ECMAScript:  0x0100 (ignored)
  if ((options & ~(1 ^ 2 ^ 16 ^ 256)) !== 0) {
    throw new Error("RegexOptions only supports: IgnoreCase, Multiline, Singleline and ECMAScript");
  }

  var flags = "g";
  flags += options & 1 ? "i" : ""; // 0x0001 RegexOptions.IgnoreCase

  flags += options & 2 ? "m" : "";
  flags += options & 16 ? "s" : "";
  return new RegExp(pattern, flags);
} // From http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex

function RegExp_escape(str) {
  return str.replace(/[\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
function RegExp_unescape(str) {
  return str.replace(/\\([\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|])/g, "$1");
}
function isMatch(str, pattern) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var reg;
  reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = RegExp_create(pattern, options);
  return reg.test(str);
}
function match(str, pattern) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var reg;
  reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = RegExp_create(pattern, options);
  return reg.exec(str);
}
function matches(str, pattern) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var reg;
  reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = RegExp_create(pattern, options);

  if (!reg.global) {
    throw new Error("Non-global RegExp"); // Prevent infinite loop
  }

  var m = reg.exec(str);
  var matches = [];

  while (m !== null) {
    matches.push(m);
    m = reg.exec(str);
  }

  return matches;
}
function options(reg) {
  var options = 256; // ECMAScript

  options |= reg.ignoreCase ? 1 : 0;
  options |= reg.multiline ? 2 : 0;
  return options;
}
function RegExp_replace(reg, input, replacement, limit) {
  var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

  function replacer() {
    var res = arguments[0];

    if (limit !== 0) {
      limit--;
      var _match = [];
      var len = arguments.length;

      for (var i = 0; i < len - 2; i++) {
        _match.push(arguments[i]);
      }

      _match.index = arguments[len - 2];
      _match.input = arguments[len - 1];
      res = replacement(_match);
    }

    return res;
  }

  if (typeof reg === "string") {
    var tmp = reg;
    reg = RegExp_create(input, limit);
    input = tmp;
    limit = undefined;
  }

  if (typeof replacement === "function") {
    limit = limit == null ? -1 : limit;
    return input.substring(0, offset) + input.substring(offset).replace(reg, replacer);
  } else {
    // $0 doesn't work with JS regex, see #1155
    replacement = replacement.replace(/\$0/g, function (s) {
      return "$&";
    });

    if (limit != null) {
      var m;
      var sub1 = input.substring(offset);

      var _matches = matches(reg, sub1);

      var sub2 = matches.length > limit ? (m = _matches[limit - 1], sub1.substring(0, m.index + m[0].length)) : sub1;
      return input.substring(0, offset) + sub2.replace(reg, replacement) + input.substring(offset + sub2.length);
    } else {
      return input.replace(reg, replacement);
    }
  }
}
function split(reg, input, limit) {
  var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (typeof reg === "string") {
    var tmp = reg;
    reg = RegExp_create(input, limit);
    input = tmp;
    limit = undefined;
  }

  input = input.substring(offset);
  return input.split(reg, limit);
}
// CONCATENATED MODULE: ./.fable/fable-library.2.4.12/String.js






















































function String_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { String_typeof = function _typeof(obj) { return typeof obj; }; } else { String_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return String_typeof(obj); }





var fsFormatRegExp = /(^|[^%])%([0+\- ]*)(\d+)?(?:\.(\d+))?(\w)/;
var formatRegExp = /\{(\d+)(,-?\d+)?(?:\:([a-zA-Z])(\d{0,2})|\:(.+?))?\}/g; // RFC 4122 compliant. From https://stackoverflow.com/a/13653180/3922220
// const guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
// Relax GUID parsing, see #1637

var guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/; // These are used for formatting and only take longs and decimals into account (no bigint)

function isNumeric(x) {
  return typeof x === "number" || x instanceof fable_library_2_4_12_Long || x instanceof Decimal;
}

function isLessThan(x, y) {
  if (x instanceof fable_library_2_4_12_Long) {
    return Long_compare(x, y) < 0;
  } else if (x instanceof Decimal) {
    return x.cmp(y) < 0;
  } else {
    return x < y;
  }
}

function String_multiply(x, y) {
  if (x instanceof fable_library_2_4_12_Long) {
    return op_Multiply(x, y);
  } else if (x instanceof Decimal) {
    return x.mul(y);
  } else {
    return x * y;
  }
}

function toFixed(x, dp) {
  if (x instanceof fable_library_2_4_12_Long) {
    return String(x) + 0 .toFixed(dp).substr(1);
  } else {
    return x.toFixed(dp);
  }
}

function toPrecision(x, sd) {
  if (x instanceof fable_library_2_4_12_Long) {
    return String(x) + 0 .toPrecision(sd).substr(1);
  } else {
    return x.toPrecision(sd);
  }
}

function toExponential(x, dp) {
  if (x instanceof fable_library_2_4_12_Long) {
    return String(x) + 0 .toExponential(dp).substr(1);
  } else {
    return x.toExponential(dp);
  }
}

function cmp(x, y, ic) {
  function isIgnoreCase(i) {
    return i === true || i === 1
    /* CurrentCultureIgnoreCase */
    || i === 3
    /* InvariantCultureIgnoreCase */
    || i === 5
    /* OrdinalIgnoreCase */
    ;
  }

  function isOrdinal(i) {
    return i === 4
    /* Ordinal */
    || i === 5
    /* OrdinalIgnoreCase */
    ;
  }

  if (x == null) {
    return y == null ? 0 : -1;
  }

  if (y == null) {
    return 1;
  } // everything is bigger than null


  if (isOrdinal(ic)) {
    if (isIgnoreCase(ic)) {
      x = x.toLowerCase();
      y = y.toLowerCase();
    }

    return x === y ? 0 : x < y ? -1 : 1;
  } else {
    if (isIgnoreCase(ic)) {
      x = x.toLocaleLowerCase();
      y = y.toLocaleLowerCase();
    }

    return x.localeCompare(y);
  }
}

function String_compare() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  switch (args.length) {
    case 2:
      return cmp(args[0], args[1], false);

    case 3:
      return cmp(args[0], args[1], args[2]);

    case 4:
      return cmp(args[0], args[1], args[2] === true);

    case 5:
      return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), false);

    case 6:
      return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5]);

    case 7:
      return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5] === true);

    default:
      throw new Error("String.compare: Unsupported number of parameters");
  }
}
function compareOrdinal(x, y) {
  return cmp(x, y, 4
  /* Ordinal */
  );
}
function String_compareTo(x, y) {
  return cmp(x, y, 0
  /* CurrentCulture */
  );
}
function startsWith(str, pattern, ic) {
  if (str.length >= pattern.length) {
    return cmp(str.substr(0, pattern.length), pattern, ic) === 0;
  }

  return false;
}
function indexOfAny(str, anyOf) {
  if (str == null || str === "") {
    return -1;
  }

  var startIndex = (arguments.length <= 2 ? 0 : arguments.length - 2) > 0 ? arguments.length <= 2 ? undefined : arguments[2] : 0;

  if (startIndex < 0) {
    throw new Error("Start index cannot be negative");
  }

  var length = (arguments.length <= 2 ? 0 : arguments.length - 2) > 1 ? arguments.length <= 3 ? undefined : arguments[3] : str.length - startIndex;

  if (length < 0) {
    throw new Error("Length cannot be negative");
  }

  if (length > str.length - startIndex) {
    throw new Error("Invalid startIndex and length");
  }

  str = str.substr(startIndex, length);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = anyOf[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var c = _step.value;
      var index = str.indexOf(c);

      if (index > -1) {
        return index + startIndex;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return -1;
}

function toHex(x) {
  if (x instanceof fable_library_2_4_12_Long) {
    return Long_toString(x.unsigned ? x : Long_fromBytes(Long_toBytes(x), true), 16);
  } else {
    return (Number(x) >>> 0).toString(16);
  }
}

function printf(input) {
  return {
    input: input,
    cont: fsFormat(input)
  };
}
function toConsole(arg) {
  // Don't remove the lambda here, see #1357
  return arg.cont(function (x) {
    console.log(x);
  });
}
function toConsoleError(arg) {
  return arg.cont(function (x) {
    console.error(x);
  });
}
function toText(arg) {
  return arg.cont(function (x) {
    return x;
  });
}
function toFail(arg) {
  return arg.cont(function (x) {
    throw new Error(x);
  });
}

function formatOnce(str2, rep) {
  return str2.replace(fsFormatRegExp, function (_, prefix, flags, padLength, precision, format) {
    var sign = "";

    if (isNumeric(rep)) {
      if (format.toLowerCase() !== "x") {
        if (isLessThan(rep, 0)) {
          rep = String_multiply(rep, -1);
          sign = "-";
        } else {
          if (flags.indexOf(" ") >= 0) {
            sign = " ";
          } else if (flags.indexOf("+") >= 0) {
            sign = "+";
          }
        }
      }

      precision = precision == null ? null : parseInt(precision, 10);

      switch (format) {
        case "f":
        case "F":
          precision = precision != null ? precision : 6;
          rep = toFixed(rep, precision);
          break;

        case "g":
        case "G":
          rep = precision != null ? toPrecision(rep, precision) : toPrecision(rep);
          break;

        case "e":
        case "E":
          rep = precision != null ? toExponential(rep, precision) : toExponential(rep);
          break;

        case "x":
          rep = toHex(rep);
          break;

        case "X":
          rep = toHex(rep).toUpperCase();
          break;

        default:
          // AOid
          rep = String(rep);
          break;
      }
    }

    padLength = parseInt(padLength, 10);

    if (!isNaN(padLength)) {
      var zeroFlag = flags.indexOf("0") >= 0; // Use '0' for left padding

      var minusFlag = flags.indexOf("-") >= 0; // Right padding

      var ch = minusFlag || !zeroFlag ? " " : "0";

      if (ch === "0") {
        rep = padLeft(rep, padLength - sign.length, ch, minusFlag);
        rep = sign + rep;
      } else {
        rep = padLeft(sign + rep, padLength, ch, minusFlag);
      }
    } else {
      rep = sign + rep;
    }

    var once = prefix + rep;
    return once.replace(/%/g, "%%");
  });
}

function createPrinter(str, cont) {
  return function () {
    // Make a copy as the function may be used several times
    var strCopy = str;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    for (var _i = 0, _args = args; _i < _args.length; _i++) {
      var arg = _args[_i];
      strCopy = formatOnce(strCopy, arg);
    }

    return fsFormatRegExp.test(strCopy) ? createPrinter(strCopy, cont) : cont(strCopy.replace(/%%/g, "%"));
  };
}

function fsFormat(str) {
  return function (cont) {
    return fsFormatRegExp.test(str) ? createPrinter(str, cont) : cont(str);
  };
}
function String_format(str) {
  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  if (String_typeof(str) === "object" && args.length > 0) {
    // Called with culture info
    str = args[0];
    args.shift();
  }

  return str.replace(formatRegExp, function (_, idx, padLength, format, precision, pattern) {
    var rep = args[idx];

    if (isNumeric(rep)) {
      precision = precision == null ? null : parseInt(precision, 10);

      switch (format) {
        case "f":
        case "F":
          precision = precision != null ? precision : 2;
          rep = toFixed(rep, precision);
          break;

        case "g":
        case "G":
          rep = precision != null ? toPrecision(rep, precision) : toPrecision(rep);
          break;

        case "e":
        case "E":
          rep = precision != null ? toExponential(rep, precision) : toExponential(rep);
          break;

        case "p":
        case "P":
          precision = precision != null ? precision : 2;
          rep = toFixed(String_multiply(rep, 100), precision) + " %";
          break;

        case "d":
        case "D":
          rep = precision != null ? padLeft(String(rep), precision, "0") : String(rep);
          break;

        case "x":
        case "X":
          rep = precision != null ? padLeft(toHex(rep), precision, "0") : toHex(rep);

          if (format === "X") {
            rep = rep.toUpperCase();
          }

          break;

        default:
          if (pattern) {
            var sign = "";
            rep = pattern.replace(/(0+)(\.0+)?/, function (_, intPart, decimalPart) {
              if (isLessThan(rep, 0)) {
                rep = String_multiply(rep, -1);
                sign = "-";
              }

              rep = toFixed(rep, decimalPart != null ? decimalPart.length - 1 : 0);
              return padLeft(rep, (intPart || "").length - sign.length + (decimalPart != null ? decimalPart.length : 0), "0");
            });
            rep = sign + rep;
          }

      }
    } else if (rep instanceof Date) {
      rep = Date_toString(rep, pattern || format);
    }

    padLength = parseInt((padLength || " ").substring(1), 10);

    if (!isNaN(padLength)) {
      rep = padLeft(String(rep), Math.abs(padLength), " ", padLength < 0);
    }

    return rep;
  });
}
function endsWith(str, search) {
  var idx = str.lastIndexOf(search);
  return idx >= 0 && idx === str.length - search.length;
}
function initialize(n, f) {
  if (n < 0) {
    throw new Error("String length must be non-negative");
  }

  var xs = new Array(n);

  for (var i = 0; i < n; i++) {
    xs[i] = f(i);
  }

  return xs.join("");
}
function insert(str, startIndex, value) {
  if (startIndex < 0 || startIndex > str.length) {
    throw new Error("startIndex is negative or greater than the length of this instance.");
  }

  return str.substring(0, startIndex) + value + str.substring(startIndex);
}
function isNullOrEmpty(str) {
  return typeof str !== "string" || str.length === 0;
}
function isNullOrWhiteSpace(str) {
  return typeof str !== "string" || /^\s*$/.test(str);
}
function concat() {
  for (var _len4 = arguments.length, xs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    xs[_key4] = arguments[_key4];
  }

  return xs.map(function (x) {
    return String(x);
  }).join("");
}
function join(delimiter, xs) {
  if (Array.isArray(xs)) {
    return xs.join(delimiter);
  } else {
    return Array.from(xs).join(delimiter);
  }
}
function joinWithIndices(delimiter, xs, startIndex, count) {
  var endIndexPlusOne = startIndex + count;

  if (endIndexPlusOne > xs.length) {
    throw new Error("Index and count must refer to a location within the buffer.");
  }

  return xs.slice(startIndex, endIndexPlusOne).join(delimiter);
}
/** Validates UUID as specified in RFC4122 (versions 1-5). Trims braces. */

function validateGuid(str, doNotThrow) {
  var trimmedAndLowered = trim(str, "{", "}").toLowerCase();

  if (guidRegex.test(trimmedAndLowered)) {
    return doNotThrow ? [true, trimmedAndLowered] : trimmedAndLowered;
  } else if (doNotThrow) {
    return [false, "00000000-0000-0000-0000-000000000000"];
  }

  throw new Error("Guid should contain 32 digits with 4 dashes: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
} // From https://gist.github.com/LeverOne/1308368

function newGuid() {
  var b = "";

  for (var a = 0; a++ < 36;) {
    b += a * 51 & 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : "-";
  }

  return b;
} // Maps for number <-> hex string conversion

var _convertMapsInitialized = false;

var _byteToHex;

var _hexToByte;

function initConvertMaps() {
  _byteToHex = new Array(256);
  _hexToByte = {};

  for (var i = 0; i < 256; i++) {
    _byteToHex[i] = (i + 0x100).toString(16).substr(1);
    _hexToByte[_byteToHex[i]] = i;
  }

  _convertMapsInitialized = true;
}
/** Parse a UUID into it's component bytes */
// Adapted from https://github.com/zefferus/uuid-parse


function guidToArray(s) {
  if (!_convertMapsInitialized) {
    initConvertMaps();
  }

  var i = 0;
  var buf = new Uint8Array(16);
  s.toLowerCase().replace(/[0-9a-f]{2}/g, function (oct) {
    switch (i) {
      // .NET saves first three byte groups with different endianness
      // See https://stackoverflow.com/a/16722909/3922220
      case 0:
      case 1:
      case 2:
      case 3:
        buf[3 - i++] = _hexToByte[oct];
        break;

      case 4:
      case 5:
        buf[9 - i++] = _hexToByte[oct];
        break;

      case 6:
      case 7:
        buf[13 - i++] = _hexToByte[oct];
        break;

      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
        buf[i++] = _hexToByte[oct];
        break;
    }
  }); // Zero out remaining bytes if string was short

  while (i < 16) {
    buf[i++] = 0;
  }

  return buf;
}
/** Convert UUID byte array into a string */

function arrayToGuid(buf) {
  if (buf.length !== 16) {
    throw new Error("Byte array for GUID must be exactly 16 bytes long");
  }

  if (!_convertMapsInitialized) {
    initConvertMaps();
  }

  var guid = _byteToHex[buf[3]] + _byteToHex[buf[2]] + _byteToHex[buf[1]] + _byteToHex[buf[0]] + "-" + _byteToHex[buf[5]] + _byteToHex[buf[4]] + "-" + _byteToHex[buf[7]] + _byteToHex[buf[6]] + "-" + _byteToHex[buf[8]] + _byteToHex[buf[9]] + "-" + _byteToHex[buf[10]] + _byteToHex[buf[11]] + _byteToHex[buf[12]] + _byteToHex[buf[13]] + _byteToHex[buf[14]] + _byteToHex[buf[15]];
  return guid;
}

function notSupported(name) {
  throw new Error("The environment doesn't support '" + name + "', please use a polyfill.");
}

function toBase64String(inArray) {
  var str = "";

  for (var i = 0; i < inArray.length; i++) {
    str += String.fromCharCode(inArray[i]);
  }

  return typeof btoa === "function" ? btoa(str) : notSupported("btoa");
}
function fromBase64String(b64Encoded) {
  var binary = typeof atob === "function" ? atob(b64Encoded) : notSupported("atob");
  var bytes = new Uint8Array(binary.length);

  for (var i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

  return bytes;
}
function padLeft(str, len, ch, isRight) {
  ch = ch || " ";
  len = len - str.length;

  for (var i = 0; i < len; i++) {
    str = isRight ? str + ch : ch + str;
  }

  return str;
}
function padRight(str, len, ch) {
  return padLeft(str, len, ch, true);
}
function remove(str, startIndex, count) {
  if (startIndex >= str.length) {
    throw new Error("startIndex must be less than length of string");
  }

  if (typeof count === "number" && startIndex + count > str.length) {
    throw new Error("Index and count must refer to a location within the string.");
  }

  return str.slice(0, startIndex) + (typeof count === "number" ? str.substr(startIndex + count) : "");
}
function String_replace(str, search, replace) {
  return str.replace(new RegExp(RegExp_escape(search), "g"), replace);
}
function replicate(n, x) {
  return initialize(n, function () {
    return x;
  });
}
function getCharAtIndex(input, index) {
  if (index < 0 || index >= input.length) {
    throw new Error("Index was outside the bounds of the array.");
  }

  return input[index];
}
function String_split(str, splitters, count, removeEmpty) {
  count = typeof count === "number" ? count : null;
  removeEmpty = typeof removeEmpty === "number" ? removeEmpty : null;

  if (count < 0) {
    throw new Error("Count cannot be less than zero");
  }

  if (count === 0) {
    return [];
  }

  if (!Array.isArray(splitters)) {
    if (removeEmpty === 0) {
      return str.split(splitters, count);
    }

    var len = arguments.length;
    splitters = Array(len - 1);

    for (var key = 1; key < len; key++) {
      splitters[key - 1] = arguments[key];
    }
  }

  splitters = splitters.map(function (x) {
    return RegExp_escape(x);
  });
  splitters = splitters.length > 0 ? splitters : [" "];
  var i = 0;
  var splits = [];
  var reg = new RegExp(splitters.join("|"), "g");

  while (count == null || count > 1) {
    var m = reg.exec(str);

    if (m === null) {
      break;
    }

    if (!removeEmpty || m.index - i > 0) {
      count = count != null ? count - 1 : count;
      splits.push(str.substring(i, m.index));
    }

    i = reg.lastIndex;
  }

  if (!removeEmpty || str.length - i > 0) {
    splits.push(str.substring(i));
  }

  return splits;
}
function trim(str) {
  for (var _len5 = arguments.length, chars = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    chars[_key5 - 1] = arguments[_key5];
  }

  if (chars.length === 0) {
    return str.trim();
  }

  var pattern = "[" + RegExp_escape(chars.join("")) + "]+";
  return str.replace(new RegExp("^" + pattern), "").replace(new RegExp(pattern + "$"), "");
}
function trimStart(str) {
  for (var _len6 = arguments.length, chars = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    chars[_key6 - 1] = arguments[_key6];
  }

  return chars.length === 0 ? str.trimStart() : str.replace(new RegExp("^[" + RegExp_escape(chars.join("")) + "]+"), "");
}
function trimEnd(str) {
  for (var _len7 = arguments.length, chars = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    chars[_key7 - 1] = arguments[_key7];
  }

  return chars.length === 0 ? str.trimEnd() : str.replace(new RegExp("[" + RegExp_escape(chars.join("")) + "]+$"), "");
}
function filter(pred, x) {
  return x.split("").filter(function (c) {
    return pred(c);
  }).join("");
}
function substring(str, startIndex, length) {
  if (startIndex + (length || 0) > str.length) {
    throw new Error("Invalid startIndex and/or length");
  }

  return length != null ? str.substr(startIndex, length) : str.substr(startIndex);
}
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.every.js
var es_array_every = __webpack_require__(144);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.some.js
var es_array_some = __webpack_require__(230);

// CONCATENATED MODULE: ./.fable/fable-library.2.4.12/Option.js



function Option_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Option_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Option_createClass(Constructor, protoProps, staticProps) { if (protoProps) Option_defineProperties(Constructor.prototype, protoProps); if (staticProps) Option_defineProperties(Constructor, staticProps); return Constructor; }


 // Using a class here for better compatibility with TS files importing Some

var Option_Some =
/*#__PURE__*/
function () {
  function Some(value) {
    Option_classCallCheck(this, Some);

    this.value = value;
  } // Don't add "Some" for consistency with erased options


  Option_createClass(Some, [{
    key: "toString",
    value: function toString() {
      return String(this.value);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.value;
    }
  }, {
    key: "GetHashCode",
    value: function GetHashCode() {
      return structuralHash(this.value);
    }
  }, {
    key: "Equals",
    value: function Equals(other) {
      if (other == null) {
        return false;
      } else {
        return equals(this.value, other instanceof Some ? other.value : other);
      }
    }
  }, {
    key: "CompareTo",
    value: function CompareTo(other) {
      if (other == null) {
        return 1;
      } else {
        return compare(this.value, other instanceof Some ? other.value : other);
      }
    }
  }]);

  return Some;
}();
function some(x) {
  x = x === undefined ? null : x;
  return x == null || x instanceof Option_Some ? new Option_Some(x) : x;
}
function Option_value(x, acceptNull) {
  if (x == null) {
    if (!acceptNull) {
      throw new Error("Option has no value");
    }

    return null;
  } else {
    return x instanceof Option_Some ? x.value : x;
  }
}
function defaultArg(arg, defaultValue, f) {
  return arg == null ? defaultValue : f != null ? f(Option_value(arg)) : Option_value(arg);
}
function defaultArgWith(arg, defThunk) {
  return arg == null ? defThunk() : Option_value(arg);
}
function Option_filter(predicate, arg) {
  return arg != null ? !predicate(Option_value(arg)) ? null : arg : arg;
}
function Option_map(f, arg) {
  return arg == null ? arg : some(f(Option_value(arg)));
}
function mapMultiple(predicate) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return args.every(function (x) {
    return x != null;
  }) ? predicate.apply(null, args) : null;
}
function bind(f, arg) {
  return arg == null ? arg : f(Option_value(arg));
}
function tryOp(op, arg) {
  try {
    return some(op(arg));
  } catch (_a) {
    return null;
  }
} // CHOICE

var Option_Choice = declare(function Choice(tag, name, field) {
  Union.call(this, tag, name, field);
}, Union);
function choice1(x) {
  return new Option_Choice(0, "Choice1Of2", x);
}
function choice2(x) {
  return new Option_Choice(1, "Choice2Of2", x);
}
function tryValueIfChoice1(x) {
  return x.tag === 0 ? some(x.fields[0]) : null;
}
function tryValueIfChoice2(x) {
  return x.tag === 1 ? some(x.fields[0]) : null;
} // RESULT

var Option_Result = declare(function Result(tag, name, field) {
  Union.call(this, tag, name, field);
}, Union);
function ok(x) {
  return new Option_Result(0, "Ok", x);
}
function Option_error(x) {
  return new Option_Result(1, "Error", x);
}
function mapOk(f, result) {
  return result.tag === 0 ? ok(f(result.fields[0])) : result;
}
function mapError(f, result) {
  return result.tag === 1 ? Option_error(f(result.fields[0])) : result;
}
function bindOk(f, result) {
  return result.tag === 0 ? f(result.fields[0]) : result;
}
// CONCATENATED MODULE: ./.fable/fable-library.2.4.12/Seq.js























function Seq_slicedToArray(arr, i) { return Seq_arrayWithHoles(arr) || Seq_iterableToArrayLimit(arr, i) || Seq_nonIterableRest(); }

function Seq_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function Seq_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Seq_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Seq_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Seq_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Seq_createClass(Constructor, protoProps, staticProps) { if (protoProps) Seq_defineProperties(Constructor.prototype, protoProps); if (staticProps) Seq_defineProperties(Constructor, staticProps); return Constructor; }





var Enumerator =
/*#__PURE__*/
function () {
  function Enumerator(iter) {
    Seq_classCallCheck(this, Enumerator);

    this.iter = iter;
  }

  Seq_createClass(Enumerator, [{
    key: "MoveNext",
    value: function MoveNext() {
      var cur = this.iter.next();
      this.current = cur.value;
      return !cur.done;
    }
  }, {
    key: "Reset",
    value: function Reset() {
      throw new Error("JS iterators cannot be reset");
    }
  }, {
    key: "Dispose",
    value: function Dispose() {
      return;
    }
  }, {
    key: "Current",
    get: function get() {
      return this.current;
    }
  }]);

  return Enumerator;
}();
function getEnumerator(o) {
  return new Enumerator(o[Symbol.iterator]());
}
function toIterator(en) {
  return {
    next: function next() {
      return en.MoveNext() ? {
        done: false,
        value: en.Current
      } : {
        done: true,
        value: null
      };
    }
  };
} // export function toIterable<T>(en: IEnumerable<T>): Iterable<T> {
//   return {
//     [Symbol.iterator]() {
//       return toIterator(en.GetEnumerator());
//     },
//   };
// }

function __failIfNone(res) {
  if (res == null) {
    throw new Error("Seq did not contain any matching element");
  }

  return Option_value(res);
}

function ofArray(xs) {
  return delay(function () {
    return unfold(function (i) {
      return i < xs.length ? [xs[i], i + 1] : null;
    }, 0);
  });
}
function allPairs(xs, ys) {
  var firstEl = true;
  var ysCache = [];
  return collect(function (x) {
    if (firstEl) {
      firstEl = false;
      return Seq_map(function (y) {
        ysCache.push(y);
        return [x, y];
      }, ys);
    } else {
      return ysCache.map(function (y) {
        return [x, y];
      }); // return map(function (i) {
      //     return [x, ysCache[i]];
      // }, rangeNumber(0, 1, ysCache.length - 1));
    }
  }, xs);
}
function append(xs, ys) {
  return delay(function () {
    var firstDone = false;
    var i = xs[Symbol.iterator]();
    var iters = [i, null];
    return unfold(function () {
      var cur;

      if (!firstDone) {
        cur = iters[0].next();

        if (!cur.done) {
          return [cur.value, iters];
        } else {
          firstDone = true;
          iters = [null, ys[Symbol.iterator]()];
        }
      }

      cur = iters[1].next();
      return !cur.done ? [cur.value, iters] : null;
    }, iters);
  });
}
function average(xs, averager) {
  var count = 0;
  var total = fold(function (acc, x) {
    count++;
    return averager.Add(acc, x);
  }, averager.GetZero(), xs);
  return averager.DivideByInt(total, count);
}
function averageBy(f, xs, averager) {
  var count = 0;
  var total = fold(function (acc, x) {
    count++;
    return averager.Add(acc, f(x));
  }, averager.GetZero(), xs);
  return averager.DivideByInt(total, count);
}
function Seq_concat(xs) {
  return delay(function () {
    var iter = xs[Symbol.iterator]();
    var output = {
      value: null
    };
    return unfold(function (innerIter) {
      var hasFinished = false;

      while (!hasFinished) {
        if (innerIter == null) {
          var cur = iter.next();

          if (!cur.done) {
            innerIter = cur.value[Symbol.iterator]();
          } else {
            hasFinished = true;
          }
        } else {
          var _cur = innerIter.next();

          if (!_cur.done) {
            output = {
              value: _cur.value
            };
            hasFinished = true;
          } else {
            innerIter = null;
          }
        }
      }

      return innerIter != null && output != null ? [output.value, innerIter] : null;
    }, null);
  });
}
function collect(f, xs) {
  return Seq_concat(Seq_map(f, xs));
}
function choose(f, xs) {
  return delay(function () {
    return unfold(function (iter) {
      var cur = iter.next();

      while (!cur.done) {
        var y = f(cur.value);

        if (y != null) {
          return [Option_value(y), iter];
        }

        cur = iter.next();
      }

      return null;
    }, xs[Symbol.iterator]());
  });
}
function compareWith(f, xs, ys) {
  var nonZero = tryFind(function (i) {
    return i !== 0;
  }, map2(function (x, y) {
    return f(x, y);
  }, xs, ys));
  return nonZero != null ? Option_value(nonZero) : Seq_length(xs) - Seq_length(ys);
}
function delay(f) {
  return _defineProperty({}, Symbol.iterator, function () {
    return f()[Symbol.iterator]();
  });
}
function empty() {
  return unfold(function () {
    return void 0;
  });
}
function enumerateFromFunctions(factory, moveNext, current) {
  return delay(function () {
    return unfold(function (e) {
      return moveNext(e) ? [current(e), e] : null;
    }, factory());
  });
}
function enumerateWhile(cond, xs) {
  return Seq_concat(unfold(function () {
    return cond() ? [xs, true] : null;
  }));
}
function enumerateThenFinally(xs, finalFn) {
  return delay(function () {
    var iter;

    try {
      iter = xs[Symbol.iterator]();
    } catch (err) {
      return void 0;
    } finally {
      finalFn();
    }

    return unfold(function (it) {
      try {
        var cur = it.next();
        return !cur.done ? [cur.value, it] : null;
      } catch (err) {
        return void 0;
      } finally {
        finalFn();
      }
    }, iter);
  });
}
function enumerateUsing(disp, work) {
  var isDisposed = false;

  var disposeOnce = function disposeOnce() {
    if (!isDisposed) {
      isDisposed = true;
      disp.Dispose();
    }
  };

  try {
    return enumerateThenFinally(work(disp), disposeOnce);
  } catch (err) {
    return void 0;
  } finally {
    disposeOnce();
  }
}
function exactlyOne(xs) {
  var iter = xs[Symbol.iterator]();
  var fst = iter.next();

  if (fst.done) {
    throw new Error("Seq was empty");
  }

  var snd = iter.next();

  if (!snd.done) {
    throw new Error("Seq had multiple items");
  }

  return fst.value;
}
function except(itemsToExclude, source) {
  var exclusionItems = Array.from(itemsToExclude);

  var testIsNotInExclusionItems = function testIsNotInExclusionItems(element) {
    return !exclusionItems.some(function (excludedItem) {
      return equals(excludedItem, element);
    });
  };

  return Seq_filter(testIsNotInExclusionItems, source);
}
function exists(f, xs) {
  var cur;

  for (var iter = xs[Symbol.iterator]();;) {
    cur = iter.next();

    if (cur.done) {
      break;
    }

    if (f(cur.value)) {
      return true;
    }
  }

  return false;
}
function exists2(f, xs, ys) {
  var cur1;
  var cur2;

  for (var iter1 = xs[Symbol.iterator](), iter2 = ys[Symbol.iterator]();;) {
    cur1 = iter1.next();
    cur2 = iter2.next();

    if (cur1.done || cur2.done) {
      break;
    }

    if (f(cur1.value, cur2.value)) {
      return true;
    }
  }

  return false;
}
function forAll(f, xs) {
  return !exists(function (x) {
    return !f(x);
  }, xs);
}
function forAll2(f, xs, ys) {
  return !exists2(function (x, y) {
    return !f(x, y);
  }, xs, ys);
}
function contains(i, xs) {
  return exists(function (x) {
    return equals(x, i);
  }, xs);
}
function Seq_filter(f, xs) {
  return delay(function () {
    return unfold(function (iter) {
      var cur = iter.next();

      while (!cur.done) {
        if (f(cur.value)) {
          return [cur.value, iter];
        }

        cur = iter.next();
      }

      return null;
    }, xs[Symbol.iterator]());
  });
}
function where(f, xs) {
  return Seq_filter(f, xs);
}
function fold(f, acc, xs) {
  if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
    return xs.reduce(f, acc);
  } else {
    var cur;

    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
      cur = iter.next();

      if (cur.done) {
        break;
      }

      acc = f(acc, cur.value, i);
    }

    return acc;
  }
}
function foldBack(f, xs, acc) {
  var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);

  for (var i = arr.length - 1; i >= 0; i--) {
    acc = f(arr[i], acc, i);
  }

  return acc;
}
function fold2(f, acc, xs, ys) {
  var iter1 = xs[Symbol.iterator]();
  var iter2 = ys[Symbol.iterator]();
  var cur1;
  var cur2;

  for (var i = 0;; i++) {
    cur1 = iter1.next();
    cur2 = iter2.next();

    if (cur1.done || cur2.done) {
      break;
    }

    acc = f(acc, cur1.value, cur2.value, i);
  }

  return acc;
}
function foldBack2(f, xs, ys, acc) {
  var ar1 = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
  var ar2 = Array.isArray(ys) || ArrayBuffer.isView(ys) ? ys : Array.from(ys);

  for (var i = ar1.length - 1; i >= 0; i--) {
    acc = f(ar1[i], ar2[i], acc, i);
  }

  return acc;
}
function tryHead(xs) {
  var iter = xs[Symbol.iterator]();
  var cur = iter.next();
  return cur.done ? null : some(cur.value);
}
function head(xs) {
  return __failIfNone(tryHead(xs));
}
function Seq_initialize(n, f) {
  return delay(function () {
    return unfold(function (i) {
      return i < n ? [f(i), i + 1] : null;
    }, 0);
  });
}
function initializeInfinite(f) {
  return delay(function () {
    return unfold(function (i) {
      return [f(i), i + 1];
    }, 0);
  });
}
function tryItem(i, xs) {
  if (i < 0) {
    return null;
  }

  if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
    return i < xs.length ? some(xs[i]) : null;
  }

  for (var j = 0, iter = xs[Symbol.iterator]();; j++) {
    var cur = iter.next();

    if (cur.done) {
      break;
    }

    if (j === i) {
      return some(cur.value);
    }
  }

  return null;
}
function item(i, xs) {
  return __failIfNone(tryItem(i, xs));
}
function iterate(f, xs) {
  fold(function (_, x) {
    return f(x);
  }, null, xs);
}
function iterate2(f, xs, ys) {
  fold2(function (_, x, y) {
    return f(x, y);
  }, null, xs, ys);
}
function iterateIndexed(f, xs) {
  fold(function (_, x, i) {
    return f(i, x);
  }, null, xs);
}
function iterateIndexed2(f, xs, ys) {
  fold2(function (_, x, y, i) {
    return f(i, x, y);
  }, null, xs, ys);
}
function isEmpty(xs) {
  var i = xs[Symbol.iterator]();
  return i.next().done;
}
function tryLast(xs) {
  return isEmpty(xs) ? null : some(reduce(function (_, x) {
    return x;
  }, xs));
}
function Seq_last(xs) {
  return __failIfNone(tryLast(xs));
}
function Seq_length(xs) {
  return Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.length : fold(function (acc, x) {
    return acc + 1;
  }, 0, xs);
}
function Seq_map(f, xs) {
  return delay(function () {
    return unfold(function (iter) {
      var cur = iter.next();
      return !cur.done ? [f(cur.value), iter] : null;
    }, xs[Symbol.iterator]());
  });
}
function mapIndexed(f, xs) {
  return delay(function () {
    var i = 0;
    return unfold(function (iter) {
      var cur = iter.next();
      return !cur.done ? [f(i++, cur.value), iter] : null;
    }, xs[Symbol.iterator]());
  });
}
function indexed(xs) {
  return mapIndexed(function (i, x) {
    return [i, x];
  }, xs);
}
function map2(f, xs, ys) {
  return delay(function () {
    var iter1 = xs[Symbol.iterator]();
    var iter2 = ys[Symbol.iterator]();
    return unfold(function () {
      var cur1 = iter1.next();
      var cur2 = iter2.next();
      return !cur1.done && !cur2.done ? [f(cur1.value, cur2.value), null] : null;
    });
  });
}
function mapIndexed2(f, xs, ys) {
  return delay(function () {
    var i = 0;
    var iter1 = xs[Symbol.iterator]();
    var iter2 = ys[Symbol.iterator]();
    return unfold(function () {
      var cur1 = iter1.next();
      var cur2 = iter2.next();
      return !cur1.done && !cur2.done ? [f(i++, cur1.value, cur2.value), null] : null;
    });
  });
}
function map3(f, xs, ys, zs) {
  return delay(function () {
    var iter1 = xs[Symbol.iterator]();
    var iter2 = ys[Symbol.iterator]();
    var iter3 = zs[Symbol.iterator]();
    return unfold(function () {
      var cur1 = iter1.next();
      var cur2 = iter2.next();
      var cur3 = iter3.next();
      return !cur1.done && !cur2.done && !cur3.done ? [f(cur1.value, cur2.value, cur3.value), null] : null;
    });
  });
}
function mapFold(f, acc, xs, transform) {
  var result = [];
  var r;
  var cur;

  for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
    cur = iter.next();

    if (cur.done) {
      break;
    }

    var _f = f(acc, cur.value);

    var _f2 = Seq_slicedToArray(_f, 2);

    r = _f2[0];
    acc = _f2[1];
    result.push(r);
  }

  return transform !== void 0 ? [transform(result), acc] : [result, acc];
}
function mapFoldBack(f, xs, acc, transform) {
  var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
  var result = [];
  var r;

  for (var i = arr.length - 1; i >= 0; i--) {
    var _f3 = f(arr[i], acc);

    var _f4 = Seq_slicedToArray(_f3, 2);

    r = _f4[0];
    acc = _f4[1];
    result.push(r);
  }

  return transform !== void 0 ? [transform(result), acc] : [result, acc];
}
function Seq_max(xs, comparer) {
  var compareFn = comparer != null ? comparer.Compare : compare;
  return reduce(function (acc, x) {
    return compareFn(acc, x) === 1 ? acc : x;
  }, xs);
}
function maxBy(f, xs, comparer) {
  var compareFn = comparer != null ? comparer.Compare : compare;
  return reduce(function (acc, x) {
    return compareFn(f(acc), f(x)) === 1 ? acc : x;
  }, xs);
}
function Seq_min(xs, comparer) {
  var compareFn = comparer != null ? comparer.Compare : compare;
  return reduce(function (acc, x) {
    return compareFn(acc, x) === -1 ? acc : x;
  }, xs);
}
function minBy(f, xs, comparer) {
  var compareFn = comparer != null ? comparer.Compare : compare;
  return reduce(function (acc, x) {
    return compareFn(f(acc), f(x)) === -1 ? acc : x;
  }, xs);
}
function pairwise(xs) {
  var res = Array.from(scan(function (last, next) {
    return [last[1], next];
  }, [null, null], xs));
  return res.length < 2 ? [] : skip(2, res);
}
function rangeChar(first, last) {
  return delay(function () {
    return unfold(function (x) {
      return x <= last ? [x, String.fromCharCode(x.charCodeAt(0) + 1)] : null;
    }, first);
  });
}
function rangeLong(first, step, last, unsigned) {
  var stepFn = makeRangeStepFunction(step, last, unsigned);
  return delay(function () {
    return unfold(stepFn, first);
  });
}
function rangeDecimal(first, step, last) {
  var stepFn = Decimal_makeRangeStepFunction(step, last);
  return delay(function () {
    return unfold(stepFn, first);
  });
}
function rangeNumber(first, step, last) {
  if (step === 0) {
    throw new Error("Step cannot be 0");
  }

  return delay(function () {
    return unfold(function (x) {
      return step > 0 && x <= last || step < 0 && x >= last ? [x, x + step] : null;
    }, first);
  });
}
function readOnly(xs) {
  return Seq_map(function (x) {
    return x;
  }, xs);
}
function reduce(f, xs) {
  if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
    return xs.reduce(f);
  }

  var iter = xs[Symbol.iterator]();
  var cur = iter.next();

  if (cur.done) {
    throw new Error("Seq was empty");
  }

  var acc = cur.value;

  while (true) {
    cur = iter.next();

    if (cur.done) {
      break;
    }

    acc = f(acc, cur.value);
  }

  return acc;
}
function reduceBack(f, xs) {
  var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);

  if (ar.length === 0) {
    throw new Error("Seq was empty");
  }

  var acc = ar[ar.length - 1];

  for (var i = ar.length - 2; i >= 0; i--) {
    acc = f(ar[i], acc, i);
  }

  return acc;
}
function Seq_replicate(n, x) {
  return Seq_initialize(n, function () {
    return x;
  });
}
function reverse(xs) {
  var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);
  return ofArray(ar.reverse());
}
function scan(f, seed, xs) {
  return delay(function () {
    var iter = xs[Symbol.iterator]();
    return unfold(function (acc) {
      if (acc == null) {
        return [seed, seed];
      }

      var cur = iter.next();

      if (!cur.done) {
        acc = f(acc, cur.value);
        return [acc, acc];
      }

      return void 0;
    }, null);
  });
}
function scanBack(f, xs, seed) {
  return reverse(scan(function (acc, x) {
    return f(x, acc);
  }, seed, reverse(xs)));
}
function singleton(y) {
  return [y];
}
function skip(n, xs) {
  return _defineProperty({}, Symbol.iterator, function () {
    var iter = xs[Symbol.iterator]();

    for (var i = 1; i <= n; i++) {
      if (iter.next().done) {
        throw new Error("Seq has not enough elements");
      }
    }

    return iter;
  });
}
function skipWhile(f, xs) {
  return delay(function () {
    var hasPassed = false;
    return Seq_filter(function (x) {
      return hasPassed || (hasPassed = !f(x));
    }, xs);
  });
}
function sortWith(f, xs) {
  var ys = Array.from(xs);
  return ofArray(ys.sort(f));
}
function sum(xs, adder) {
  return fold(function (acc, x) {
    return adder.Add(acc, x);
  }, adder.GetZero(), xs);
}
function sumBy(f, xs, adder) {
  return fold(function (acc, x) {
    return adder.Add(acc, f(x));
  }, adder.GetZero(), xs);
}
function tail(xs) {
  var iter = xs[Symbol.iterator]();
  var cur = iter.next();

  if (cur.done) {
    throw new Error("Seq was empty");
  }

  return _defineProperty({}, Symbol.iterator, function () {
    return iter;
  });
}
function take(n, xs) {
  var truncate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return delay(function () {
    var iter = xs[Symbol.iterator]();
    return unfold(function (i) {
      if (i < n) {
        var cur = iter.next();

        if (!cur.done) {
          return [cur.value, i + 1];
        }

        if (!truncate) {
          throw new Error("Seq has not enough elements");
        }
      }

      return void 0;
    }, 0);
  });
}
function Seq_truncate(n, xs) {
  return take(n, xs, true);
}
function takeWhile(f, xs) {
  return delay(function () {
    var iter = xs[Symbol.iterator]();
    return unfold(function (i) {
      var cur = iter.next();

      if (!cur.done && f(cur.value)) {
        return [cur.value, null];
      }

      return void 0;
    }, 0);
  });
}
function tryFind(f, xs, defaultValue) {
  for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
    var cur = iter.next();

    if (cur.done) {
      break;
    }

    if (f(cur.value, i)) {
      return some(cur.value);
    }
  }

  return defaultValue === void 0 ? null : some(defaultValue);
}
function find(f, xs) {
  return __failIfNone(tryFind(f, xs));
}
function tryFindBack(f, xs, defaultValue) {
  var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);
  return tryFind(f, arr.reverse(), defaultValue);
}
function findBack(f, xs) {
  return __failIfNone(tryFindBack(f, xs));
}
function tryFindIndex(f, xs) {
  for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
    var cur = iter.next();

    if (cur.done) {
      break;
    }

    if (f(cur.value, i)) {
      return i;
    }
  }

  return null;
}
function findIndex(f, xs) {
  return __failIfNone(tryFindIndex(f, xs));
}
function tryFindIndexBack(f, xs) {
  var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);

  for (var i = arr.length - 1; i >= 0; i--) {
    if (f(arr[i], i)) {
      return i;
    }
  }

  return null;
}
function findIndexBack(f, xs) {
  return __failIfNone(tryFindIndexBack(f, xs));
}
function tryPick(f, xs) {
  for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
    var cur = iter.next();

    if (cur.done) {
      break;
    }

    var y = f(cur.value, i);

    if (y != null) {
      return y;
    }
  }

  return null;
}
function pick(f, xs) {
  return __failIfNone(tryPick(f, xs));
}
function unfold(f, fst) {
  return _defineProperty({}, Symbol.iterator, function () {
    // Capture a copy of the first value in the closure
    // so the sequence is restarted every time, see #1230
    var acc = fst;
    return {
      next: function next() {
        var res = f(acc);

        if (res != null) {
          acc = res[1];
          return {
            done: false,
            value: res[0]
          };
        }

        return {
          done: true
        };
      }
    };
  });
}
function zip(xs, ys) {
  return map2(function (x, y) {
    return [x, y];
  }, xs, ys);
}
function zip3(xs, ys, zs) {
  return map3(function (x, y, z) {
    return [x, y, z];
  }, xs, ys, zs);
}
function windowed(windowSize, source) {
  if (windowSize <= 0) {
    throw new Error("windowSize must be positive");
  }

  return _defineProperty({}, Symbol.iterator, function () {
    var window = [];
    var iter = source[Symbol.iterator]();
    return {
      next: function next() {
        var cur;

        while (window.length < windowSize) {
          if ((cur = iter.next()).done) {
            return {
              done: true
            };
          }

          window.push(cur.value);
        }

        var value = window;
        window = window.slice(1);
        return {
          done: false,
          value: value
        };
      }
    };
  });
}
function transpose(source) {
  return _defineProperty({}, Symbol.iterator, function () {
    var iters = Array.from(source, function (x) {
      return x[Symbol.iterator]();
    });
    return {
      next: function next() {
        if (iters.length === 0) {
          return {
            done: true
          }; // empty sequence
        }

        var results = Array.from(iters, function (iter) {
          return iter.next();
        });

        if (results[0].done) {
          if (!results.every(function (x) {
            return x.done;
          })) {
            throw new Error("Sequences have different lengths");
          }

          return {
            done: true
          };
        } else {
          if (!results.every(function (x) {
            return !x.done;
          })) {
            throw new Error("Sequences have different lengths");
          }

          var values = results.map(function (x) {
            return x.value;
          });
          return {
            done: false,
            value: values
          };
        }
      }
    };
  });
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.fill.js
var es_array_fill = __webpack_require__(231);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(232);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce-right.js
var es_array_reduce_right = __webpack_require__(233);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__(145);

// CONCATENATED MODULE: ./.fable/fable-library.2.4.12/MutableMap.js
















var MutableMap$00602 = declare(function Fable_Collections_MutableMap(pairs, comparer) {
  var $this$$1 = this;
  var this$ = new FSharpRef(null);
  $this$$1.comparer = comparer;
  this$.contents = $this$$1;
  $this$$1["entries@23"] = new Map([]);
  $this$$1["init@20-1"] = 1;
  iterate(function (pair) {
    MutableMap$00602$$Add$$5BDDA1(this$.contents, pair[0], pair[1]);
  }, pairs);
});
function MutableMap$00602$reflection($gen$$4, $gen$$5) {
  return type("Fable.Collections.MutableMap`2", [$gen$$4, $gen$$5]);
}
function MutableMap$00602$$$$002Ector$$6623D9B3(pairs, comparer) {
  return this instanceof MutableMap$00602 ? MutableMap$00602.call(this, pairs, comparer) : new MutableMap$00602(pairs, comparer);
}

function MutableMap$00602$$TryFindIndex$$2B595(this$$$1, k) {
  var h = this$$$1.comparer.GetHashCode(k) | 0;
  var matchValue = tryGetValue(this$$$1["entries@23"], h, null);

  if (matchValue[0]) {
    return [true, h, matchValue[1].findIndex(function (pair$$1) {
      return this$$$1.comparer.Equals(k, pair$$1[0]);
    })];
  } else {
    return [false, h, -1];
  }
}

function MutableMap$00602$$TryFind$$2B595(this$$$2, k$$1) {
  var matchValue$$1 = MutableMap$00602$$TryFindIndex$$2B595(this$$$2, k$$1);
  var $target$$10;

  if (matchValue$$1[0]) {
    if (matchValue$$1[2] > -1) {
      $target$$10 = 0;
    } else {
      $target$$10 = 1;
    }
  } else {
    $target$$10 = 1;
  }

  switch ($target$$10) {
    case 0:
      {
        return getItemFromDict(this$$$2["entries@23"], matchValue$$1[1])[matchValue$$1[2]];
      }

    case 1:
      {
        return null;
      }
  }
}
function MutableMap$00602$$get_Comparer(this$$$3) {
  return this$$$3.comparer;
}
function MutableMap$00602$$Clear(this$$$4) {
  this$$$4["entries@23"].clear();
}
function MutableMap$00602$$get_Count(this$$$5) {
  var source = this$$$5["entries@23"].values();
  return sumBy(function projection(pairs$$2) {
    return pairs$$2.length;
  }, source, {
    GetZero: function GetZero() {
      return 0;
    },
    Add: function Add($x$$2, $y$$3) {
      return $x$$2 + $y$$3;
    }
  }) | 0;
}
function MutableMap$00602$$get_Item$$2B595(this$$$6, k$$2) {
  var matchValue$$2 = MutableMap$00602$$TryFind$$2B595(this$$$6, k$$2);

  if (matchValue$$2 != null) {
    var pair$$2 = matchValue$$2;
    return pair$$2[1];
  } else {
    throw new Error("The item was not found in collection");
  }
}
function MutableMap$00602$$set_Item$$5BDDA1(this$$$7, k$$3, v) {
  var matchValue$$3 = MutableMap$00602$$TryFindIndex$$2B595(this$$$7, k$$3);
  var $target$$20;

  if (matchValue$$3[0]) {
    if (matchValue$$3[2] > -1) {
      $target$$20 = 0;
    } else {
      $target$$20 = 1;
    }
  } else {
    $target$$20 = 1;
  }

  switch ($target$$20) {
    case 0:
      {
        getItemFromDict(this$$$7["entries@23"], matchValue$$3[1])[matchValue$$3[2]] = [k$$3, v];
        break;
      }

    case 1:
      {
        if (matchValue$$3[0]) {
          var value = getItemFromDict(this$$$7["entries@23"], matchValue$$3[1]).push([k$$3, v]);
          null, null;
        } else {
          this$$$7["entries@23"].set(matchValue$$3[1], [[k$$3, v]]);
        }

        break;
      }
  }
}
function MutableMap$00602$$Add$$5BDDA1(this$$$8, k$$4, v$$1) {
  var matchValue$$4 = MutableMap$00602$$TryFindIndex$$2B595(this$$$8, k$$4);
  var $target$$24;

  if (matchValue$$4[0]) {
    if (matchValue$$4[2] > -1) {
      $target$$24 = 0;
    } else {
      $target$$24 = 1;
    }
  } else {
    $target$$24 = 1;
  }

  switch ($target$$24) {
    case 0:
      {
        var msg;
        var clo1 = toText(printf("An item with the same key has already been added. Key: %A"));
        msg = clo1(k$$4);
        throw new Error(msg);
        break;
      }

    case 1:
      {
        if (matchValue$$4[0]) {
          var value$$1 = getItemFromDict(this$$$8["entries@23"], matchValue$$4[1]).push([k$$4, v$$1]);
          null, null;
        } else {
          this$$$8["entries@23"].set(matchValue$$4[1], [[k$$4, v$$1]]);
        }

        break;
      }
  }
}
function MutableMap$00602$$ContainsKey$$2B595(this$$$9, k$$5) {
  var matchValue$$5 = MutableMap$00602$$TryFindIndex$$2B595(this$$$9, k$$5);
  var $target$$27;

  if (matchValue$$5[0]) {
    if (matchValue$$5[2] > -1) {
      $target$$27 = 0;
    } else {
      $target$$27 = 1;
    }
  } else {
    $target$$27 = 1;
  }

  switch ($target$$27) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}
function MutableMap$00602$$Remove$$2B595(this$$$10, k$$6) {
  var matchValue$$6 = MutableMap$00602$$TryFindIndex$$2B595(this$$$10, k$$6);
  var $target$$30;

  if (matchValue$$6[0]) {
    if (matchValue$$6[2] > -1) {
      $target$$30 = 0;
    } else {
      $target$$30 = 1;
    }
  } else {
    $target$$30 = 1;
  }

  switch ($target$$30) {
    case 0:
      {
        getItemFromDict(this$$$10["entries@23"], matchValue$$6[1]).splice(matchValue$$6[2], 1);
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}

MutableMap$00602.prototype[Symbol.iterator] = function () {
  var elems;
  var this$$$11 = this;
  return toIterator((elems = delay(function () {
    return collect(function (pairs$$3) {
      return Seq_map(function (pair$$3) {
        return pair$$3;
      }, pairs$$3);
    }, this$$$11["entries@23"].values());
  }), getEnumerator(elems)));
};

MutableMap$00602.prototype.Add = function (item) {
  var this$$$12 = this;
  MutableMap$00602$$Add$$5BDDA1(this$$$12, item[0], item[1]);
};

MutableMap$00602.prototype.Clear = function () {
  var this$$$13 = this;
  MutableMap$00602$$Clear(this$$$13);
};

MutableMap$00602.prototype.Contains = function (item$$1) {
  var p;
  var this$$$14 = this;
  var matchValue$$7 = MutableMap$00602$$TryFind$$2B595(this$$$14, item$$1[0]);
  var $target$$31;

  if (matchValue$$7 != null) {
    if (p = matchValue$$7, equals(p[1], item$$1[1])) {
      $target$$31 = 0;
    } else {
      $target$$31 = 1;
    }
  } else {
    $target$$31 = 1;
  }

  switch ($target$$31) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return false;
      }
  }
};

MutableMap$00602.prototype.CopyTo = function (array, arrayIndex) {
  var this$$$15 = this;
  iterateIndexed(function action(i$$10, e) {
    array[arrayIndex + i$$10] = e;
  }, this$$$15);
};

Object.defineProperty(MutableMap$00602.prototype, "Count", {
  "get": function get() {
    var this$$$16 = this;
    return MutableMap$00602$$get_Count(this$$$16) | 0;
  }
});
Object.defineProperty(MutableMap$00602.prototype, "IsReadOnly", {
  "get": function get() {
    return false;
  }
});

MutableMap$00602.prototype.Remove = function (item$$2) {
  var this$$$18 = this;
  var matchValue$$8 = MutableMap$00602$$TryFind$$2B595(this$$$18, item$$2[0]);

  if (matchValue$$8 != null) {
    var pair$$4 = matchValue$$8;

    if (equals(pair$$4[1], item$$2[1])) {
      var value$$2 = MutableMap$00602$$Remove$$2B595(this$$$18, item$$2[0]);
      value$$2, null;
    }

    return true;
  } else {
    return false;
  }
};

Object.defineProperty(MutableMap$00602.prototype, "size", {
  "get": function get() {
    var this$$$19 = this;
    return MutableMap$00602$$get_Count(this$$$19) | 0;
  }
});

MutableMap$00602.prototype.clear = function () {
  var this$$$20 = this;
  MutableMap$00602$$Clear(this$$$20);
};

MutableMap$00602.prototype["delete"] = function (k$$7) {
  var this$$$21 = this;
  return MutableMap$00602$$Remove$$2B595(this$$$21, k$$7);
};

MutableMap$00602.prototype.entries = function () {
  var this$$$22 = this;
  return Seq_map(function mapping(x) {
    return x;
  }, this$$$22);
};

MutableMap$00602.prototype.get = function (k$$8) {
  var this$$$23 = this;
  return MutableMap$00602$$get_Item$$2B595(this$$$23, k$$8);
};

MutableMap$00602.prototype.has = function (k$$9) {
  var this$$$24 = this;
  return MutableMap$00602$$ContainsKey$$2B595(this$$$24, k$$9);
};

MutableMap$00602.prototype.keys = function () {
  var this$$$25 = this;
  return Seq_map(function mapping$$1(pair$$5) {
    return pair$$5[0];
  }, this$$$25);
};

MutableMap$00602.prototype.set = function (k$$10, v$$2) {
  var this$$$26 = this;
  MutableMap$00602$$set_Item$$5BDDA1(this$$$26, k$$10, v$$2);
  return this$$$26;
};

MutableMap$00602.prototype.values = function () {
  var this$$$27 = this;
  return Seq_map(function mapping$$2(pair$$6) {
    return pair$$6[1];
  }, this$$$27);
};
// CONCATENATED MODULE: ./.fable/fable-library.2.4.12/Map.js












function Map_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var MapTree$00602 = declare(function Map_MapTree(tag, name) {
  for (var _len = arguments.length, fields = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    fields[_key - 2] = arguments[_key];
  }

  Union.call.apply(Union, [this, tag, name].concat(fields));
}, Union);
function MapTree$00602$reflection($gen$$3, $gen$$4) {
  return union("Map.MapTree`2", [$gen$$3, $gen$$4], MapTree$00602, function () {
    return ["MapEmpty", ["MapOne", [$gen$$3, $gen$$4]], ["MapNode", [$gen$$3, $gen$$4, MapTree$00602$reflection($gen$$3, $gen$$4), MapTree$00602$reflection($gen$$3, $gen$$4), int32]]];
  });
}
function MapTreeModule$$$sizeAux($acc$$5, $m$$6) {
  MapTreeModule$$$sizeAux: while (true) {
    var acc = $acc$$5,
        m = $m$$6;

    switch (m.tag) {
      case 1:
        {
          return acc + 1 | 0;
        }

      case 2:
        {
          $acc$$5 = MapTreeModule$$$sizeAux(acc + 1, m.fields[2]);
          $m$$6 = m.fields[3];
          continue MapTreeModule$$$sizeAux;
        }

      default:
        {
          return acc | 0;
        }
    }

    break;
  }
}
function MapTreeModule$$$size(x) {
  return MapTreeModule$$$sizeAux(0, x);
}
function MapTreeModule$$$empty() {
  return new MapTree$00602(0, "MapEmpty");
}
function MapTreeModule$$$height(_arg1) {
  switch (_arg1.tag) {
    case 1:
      {
        return 1;
      }

    case 2:
      {
        return _arg1.fields[4] | 0;
      }

    default:
      {
        return 0;
      }
  }
}
function MapTreeModule$$$isEmpty(m$$1) {
  if (m$$1.tag === 0) {
    return true;
  } else {
    return false;
  }
}
function MapTreeModule$$$mk(l$$1, k, v, r$$1) {
  var $target$$14;

  if (l$$1.tag === 0) {
    if (r$$1.tag === 0) {
      $target$$14 = 0;
    } else {
      $target$$14 = 1;
    }
  } else {
    $target$$14 = 1;
  }

  switch ($target$$14) {
    case 0:
      {
        return new MapTree$00602(1, "MapOne", k, v);
      }

    case 1:
      {
        var hl = MapTreeModule$$$height(l$$1) | 0;
        var hr = MapTreeModule$$$height(r$$1) | 0;
        var m$$2 = (hl < hr ? hr : hl) | 0;
        return new MapTree$00602(2, "MapNode", k, v, l$$1, r$$1, m$$2 + 1);
      }
  }
}
function MapTreeModule$$$rebalance(t1, k$$1, v$$1, t2) {
  var t1h = MapTreeModule$$$height(t1) | 0;
  var t2h = MapTreeModule$$$height(t2) | 0;

  if (t2h > t1h + 2) {
    if (t2.tag === 2) {
      if (MapTreeModule$$$height(t2.fields[2]) > t1h + 1) {
        if (t2.fields[2].tag === 2) {
          return MapTreeModule$$$mk(MapTreeModule$$$mk(t1, k$$1, v$$1, t2.fields[2].fields[2]), t2.fields[2].fields[0], t2.fields[2].fields[1], MapTreeModule$$$mk(t2.fields[2].fields[3], t2.fields[0], t2.fields[1], t2.fields[3]));
        } else {
          throw new Error("rebalance");
        }
      } else {
        return MapTreeModule$$$mk(MapTreeModule$$$mk(t1, k$$1, v$$1, t2.fields[2]), t2.fields[0], t2.fields[1], t2.fields[3]);
      }
    } else {
      throw new Error("rebalance");
    }
  } else if (t1h > t2h + 2) {
    if (t1.tag === 2) {
      if (MapTreeModule$$$height(t1.fields[3]) > t2h + 1) {
        if (t1.fields[3].tag === 2) {
          return MapTreeModule$$$mk(MapTreeModule$$$mk(t1.fields[2], t1.fields[0], t1.fields[1], t1.fields[3].fields[2]), t1.fields[3].fields[0], t1.fields[3].fields[1], MapTreeModule$$$mk(t1.fields[3].fields[3], k$$1, v$$1, t2));
        } else {
          throw new Error("re  balance");
        }
      } else {
        return MapTreeModule$$$mk(t1.fields[2], t1.fields[0], t1.fields[1], MapTreeModule$$$mk(t1.fields[3], k$$1, v$$1, t2));
      }
    } else {
      throw new Error("rebalance");
    }
  } else {
    return MapTreeModule$$$mk(t1, k$$1, v$$1, t2);
  }
}
function MapTreeModule$$$add(comparer, k$$2, v$$2, m$$3) {
  switch (m$$3.tag) {
    case 1:
      {
        var c = comparer.Compare(k$$2, m$$3.fields[0]) | 0;

        if (c < 0) {
          return new MapTree$00602(2, "MapNode", k$$2, v$$2, new MapTree$00602(0, "MapEmpty"), m$$3, 2);
        } else if (c === 0) {
          return new MapTree$00602(1, "MapOne", k$$2, v$$2);
        } else {
          return new MapTree$00602(2, "MapNode", k$$2, v$$2, m$$3, new MapTree$00602(0, "MapEmpty"), 2);
        }
      }

    case 2:
      {
        var c$$1 = comparer.Compare(k$$2, m$$3.fields[0]) | 0;

        if (c$$1 < 0) {
          return MapTreeModule$$$rebalance(MapTreeModule$$$add(comparer, k$$2, v$$2, m$$3.fields[2]), m$$3.fields[0], m$$3.fields[1], m$$3.fields[3]);
        } else if (c$$1 === 0) {
          return new MapTree$00602(2, "MapNode", k$$2, v$$2, m$$3.fields[2], m$$3.fields[3], m$$3.fields[4]);
        } else {
          return MapTreeModule$$$rebalance(m$$3.fields[2], m$$3.fields[0], m$$3.fields[1], MapTreeModule$$$add(comparer, k$$2, v$$2, m$$3.fields[3]));
        }
      }

    default:
      {
        return new MapTree$00602(1, "MapOne", k$$2, v$$2);
      }
  }
}
function MapTreeModule$$$find($comparer$$1$$23, $k$$3$$24, $m$$4$$25) {
  MapTreeModule$$$find: while (true) {
    var comparer$$1 = $comparer$$1$$23,
        k$$3 = $k$$3$$24,
        m$$4 = $m$$4$$25;

    switch (m$$4.tag) {
      case 1:
        {
          var c$$2 = comparer$$1.Compare(k$$3, m$$4.fields[0]) | 0;

          if (c$$2 === 0) {
            return m$$4.fields[1];
          } else {
            throw new Error("key not found");
          }
        }

      case 2:
        {
          var c$$3 = comparer$$1.Compare(k$$3, m$$4.fields[0]) | 0;

          if (c$$3 < 0) {
            $comparer$$1$$23 = comparer$$1;
            $k$$3$$24 = k$$3;
            $m$$4$$25 = m$$4.fields[2];
            continue MapTreeModule$$$find;
          } else if (c$$3 === 0) {
            return m$$4.fields[1];
          } else {
            $comparer$$1$$23 = comparer$$1;
            $k$$3$$24 = k$$3;
            $m$$4$$25 = m$$4.fields[3];
            continue MapTreeModule$$$find;
          }
        }

      default:
        {
          throw new Error("key not found");
        }
    }

    break;
  }
}
function MapTreeModule$$$tryFind($comparer$$2$$26, $k$$4$$27, $m$$5$$28) {
  MapTreeModule$$$tryFind: while (true) {
    var comparer$$2 = $comparer$$2$$26,
        k$$4 = $k$$4$$27,
        m$$5 = $m$$5$$28;

    switch (m$$5.tag) {
      case 1:
        {
          var c$$4 = comparer$$2.Compare(k$$4, m$$5.fields[0]) | 0;

          if (c$$4 === 0) {
            return some(m$$5.fields[1]);
          } else {
            return null;
          }
        }

      case 2:
        {
          var c$$5 = comparer$$2.Compare(k$$4, m$$5.fields[0]) | 0;

          if (c$$5 < 0) {
            $comparer$$2$$26 = comparer$$2;
            $k$$4$$27 = k$$4;
            $m$$5$$28 = m$$5.fields[2];
            continue MapTreeModule$$$tryFind;
          } else if (c$$5 === 0) {
            return some(m$$5.fields[1]);
          } else {
            $comparer$$2$$26 = comparer$$2;
            $k$$4$$27 = k$$4;
            $m$$5$$28 = m$$5.fields[3];
            continue MapTreeModule$$$tryFind;
          }
        }

      default:
        {
          return null;
        }
    }

    break;
  }
}
function MapTreeModule$$$partition1(comparer$$3, f, k$$5, v$$3, acc1, acc2) {
  if (f(k$$5, v$$3)) {
    return [MapTreeModule$$$add(comparer$$3, k$$5, v$$3, acc1), acc2];
  } else {
    return [acc1, MapTreeModule$$$add(comparer$$3, k$$5, v$$3, acc2)];
  }
}
function MapTreeModule$$$partitionAux($comparer$$4$$35, $f$$1$$36, $s$$37, $acc_0$$38, $acc_1$$39) {
  MapTreeModule$$$partitionAux: while (true) {
    var comparer$$4 = $comparer$$4$$35,
        f$$1 = $f$$1$$36,
        s = $s$$37,
        acc_0 = $acc_0$$38,
        acc_1 = $acc_1$$39;

    switch (s.tag) {
      case 1:
        {
          return MapTreeModule$$$partition1(comparer$$4, f$$1, s.fields[0], s.fields[1], acc_0, acc_1);
        }

      case 2:
        {
          var acc$$2 = MapTreeModule$$$partitionAux(comparer$$4, f$$1, s.fields[3], acc_0, acc_1);
          var acc$$3 = MapTreeModule$$$partition1(comparer$$4, f$$1, s.fields[0], s.fields[1], acc$$2[0], acc$$2[1]);
          $comparer$$4$$35 = comparer$$4;
          $f$$1$$36 = f$$1;
          $s$$37 = s.fields[2];
          $acc_0$$38 = acc$$3[0];
          $acc_1$$39 = acc$$3[1];
          continue MapTreeModule$$$partitionAux;
        }

      default:
        {
          return [acc_0, acc_1];
        }
    }

    break;
  }
}
function MapTreeModule$$$partition(comparer$$5, f$$2, s$$1) {
  return MapTreeModule$$$partitionAux(comparer$$5, f$$2, s$$1, MapTreeModule$$$empty(), MapTreeModule$$$empty());
}
function MapTreeModule$$$filter1(comparer$$6, f$$3, k$$8, v$$6, acc$$4) {
  if (f$$3(k$$8, v$$6)) {
    return MapTreeModule$$$add(comparer$$6, k$$8, v$$6, acc$$4);
  } else {
    return acc$$4;
  }
}
function MapTreeModule$$$filterAux($comparer$$7$$48, $f$$4$$49, $s$$2$$50, $acc$$5$$51) {
  MapTreeModule$$$filterAux: while (true) {
    var comparer$$7 = $comparer$$7$$48,
        f$$4 = $f$$4$$49,
        s$$2 = $s$$2$$50,
        acc$$5 = $acc$$5$$51;

    switch (s$$2.tag) {
      case 1:
        {
          return MapTreeModule$$$filter1(comparer$$7, f$$4, s$$2.fields[0], s$$2.fields[1], acc$$5);
        }

      case 2:
        {
          var acc$$6 = MapTreeModule$$$filterAux(comparer$$7, f$$4, s$$2.fields[2], acc$$5);
          var acc$$7 = MapTreeModule$$$filter1(comparer$$7, f$$4, s$$2.fields[0], s$$2.fields[1], acc$$6);
          $comparer$$7$$48 = comparer$$7;
          $f$$4$$49 = f$$4;
          $s$$2$$50 = s$$2.fields[3];
          $acc$$5$$51 = acc$$7;
          continue MapTreeModule$$$filterAux;
        }

      default:
        {
          return acc$$5;
        }
    }

    break;
  }
}
function MapTreeModule$$$filter(comparer$$8, f$$5, s$$3) {
  return MapTreeModule$$$filterAux(comparer$$8, f$$5, s$$3, MapTreeModule$$$empty());
}
function MapTreeModule$$$spliceOutSuccessor(m$$6) {
  switch (m$$6.tag) {
    case 1:
      {
        return [m$$6.fields[0], m$$6.fields[1], new MapTree$00602(0, "MapEmpty")];
      }

    case 2:
      {
        if (m$$6.fields[2].tag === 0) {
          return [m$$6.fields[0], m$$6.fields[1], m$$6.fields[3]];
        } else {
          var patternInput = MapTreeModule$$$spliceOutSuccessor(m$$6.fields[2]);
          return [patternInput[0], patternInput[1], MapTreeModule$$$mk(patternInput[2], m$$6.fields[0], m$$6.fields[1], m$$6.fields[3])];
        }
      }

    default:
      {
        throw new Error("internal error: Map.spliceOutSuccessor");
      }
  }
}
function MapTreeModule$$$remove(comparer$$9, k$$11, m$$7) {
  switch (m$$7.tag) {
    case 1:
      {
        var c$$6 = comparer$$9.Compare(k$$11, m$$7.fields[0]) | 0;

        if (c$$6 === 0) {
          return new MapTree$00602(0, "MapEmpty");
        } else {
          return m$$7;
        }
      }

    case 2:
      {
        var c$$7 = comparer$$9.Compare(k$$11, m$$7.fields[0]) | 0;

        if (c$$7 < 0) {
          return MapTreeModule$$$rebalance(MapTreeModule$$$remove(comparer$$9, k$$11, m$$7.fields[2]), m$$7.fields[0], m$$7.fields[1], m$$7.fields[3]);
        } else if (c$$7 === 0) {
          if (m$$7.fields[2].tag === 0) {
            return m$$7.fields[3];
          } else if (m$$7.fields[3].tag === 0) {
            return m$$7.fields[2];
          } else {
            var patternInput$$1 = MapTreeModule$$$spliceOutSuccessor(m$$7.fields[3]);
            return MapTreeModule$$$mk(m$$7.fields[2], patternInput$$1[0], patternInput$$1[1], patternInput$$1[2]);
          }
        } else {
          return MapTreeModule$$$rebalance(m$$7.fields[2], m$$7.fields[0], m$$7.fields[1], MapTreeModule$$$remove(comparer$$9, k$$11, m$$7.fields[3]));
        }
      }

    default:
      {
        return MapTreeModule$$$empty();
      }
  }
}
function MapTreeModule$$$mem($comparer$$10$$59, $k$$12$$60, $m$$8$$61) {
  MapTreeModule$$$mem: while (true) {
    var comparer$$10 = $comparer$$10$$59,
        k$$12 = $k$$12$$60,
        m$$8 = $m$$8$$61;

    switch (m$$8.tag) {
      case 1:
        {
          return comparer$$10.Compare(k$$12, m$$8.fields[0]) === 0;
        }

      case 2:
        {
          var c$$8 = comparer$$10.Compare(k$$12, m$$8.fields[0]) | 0;

          if (c$$8 < 0) {
            $comparer$$10$$59 = comparer$$10;
            $k$$12$$60 = k$$12;
            $m$$8$$61 = m$$8.fields[2];
            continue MapTreeModule$$$mem;
          } else if (c$$8 === 0) {
            return true;
          } else {
            $comparer$$10$$59 = comparer$$10;
            $k$$12$$60 = k$$12;
            $m$$8$$61 = m$$8.fields[3];
            continue MapTreeModule$$$mem;
          }
        }

      default:
        {
          return false;
        }
    }

    break;
  }
}
function MapTreeModule$$$iter($f$$6$$62, $m$$9$$63) {
  MapTreeModule$$$iter: while (true) {
    var f$$6 = $f$$6$$62,
        m$$9 = $m$$9$$63;

    switch (m$$9.tag) {
      case 1:
        {
          f$$6(m$$9.fields[0], m$$9.fields[1]);
          break;
        }

      case 2:
        {
          MapTreeModule$$$iter(f$$6, m$$9.fields[2]);
          f$$6(m$$9.fields[0], m$$9.fields[1]);
          $f$$6$$62 = f$$6;
          $m$$9$$63 = m$$9.fields[3];
          continue MapTreeModule$$$iter;
          break;
        }

      default:
        {}
    }

    break;
  }
}
function MapTreeModule$$$tryPick($f$$7$$64, $m$$10$$65) {
  MapTreeModule$$$tryPick: while (true) {
    var f$$7 = $f$$7$$64,
        m$$10 = $m$$10$$65;

    switch (m$$10.tag) {
      case 1:
        {
          return f$$7(m$$10.fields[0], m$$10.fields[1]);
        }

      case 2:
        {
          var matchValue$$2 = MapTreeModule$$$tryPick(f$$7, m$$10.fields[2]);

          if (matchValue$$2 == null) {
            var matchValue$$3 = f$$7(m$$10.fields[0], m$$10.fields[1]);

            if (matchValue$$3 == null) {
              $f$$7$$64 = f$$7;
              $m$$10$$65 = m$$10.fields[3];
              continue MapTreeModule$$$tryPick;
            } else {
              return matchValue$$3;
            }
          } else {
            return matchValue$$2;
          }
        }

      default:
        {
          return null;
        }
    }

    break;
  }
}
function MapTreeModule$$$exists($f$$8$$66, $m$$11$$67) {
  MapTreeModule$$$exists: while (true) {
    var f$$8 = $f$$8$$66,
        m$$11 = $m$$11$$67;

    switch (m$$11.tag) {
      case 1:
        {
          return f$$8(m$$11.fields[0], m$$11.fields[1]);
        }

      case 2:
        {
          if (MapTreeModule$$$exists(f$$8, m$$11.fields[2]) ? true : f$$8(m$$11.fields[0], m$$11.fields[1])) {
            return true;
          } else {
            $f$$8$$66 = f$$8;
            $m$$11$$67 = m$$11.fields[3];
            continue MapTreeModule$$$exists;
          }
        }

      default:
        {
          return false;
        }
    }

    break;
  }
}
function MapTreeModule$$$forall($f$$9$$68, $m$$12$$69) {
  MapTreeModule$$$forall: while (true) {
    var f$$9 = $f$$9$$68,
        m$$12 = $m$$12$$69;

    switch (m$$12.tag) {
      case 1:
        {
          return f$$9(m$$12.fields[0], m$$12.fields[1]);
        }

      case 2:
        {
          if (MapTreeModule$$$forall(f$$9, m$$12.fields[2]) ? f$$9(m$$12.fields[0], m$$12.fields[1]) : false) {
            $f$$9$$68 = f$$9;
            $m$$12$$69 = m$$12.fields[3];
            continue MapTreeModule$$$forall;
          } else {
            return false;
          }
        }

      default:
        {
          return true;
        }
    }

    break;
  }
}
function MapTreeModule$$$map(f$$10, m$$13) {
  switch (m$$13.tag) {
    case 1:
      {
        return new MapTree$00602(1, "MapOne", m$$13.fields[0], f$$10(m$$13.fields[1]));
      }

    case 2:
      {
        var l2 = MapTreeModule$$$map(f$$10, m$$13.fields[2]);
        var v2$$16 = f$$10(m$$13.fields[1]);
        var r2 = MapTreeModule$$$map(f$$10, m$$13.fields[3]);
        return new MapTree$00602(2, "MapNode", m$$13.fields[0], v2$$16, l2, r2, m$$13.fields[4]);
      }

    default:
      {
        return MapTreeModule$$$empty();
      }
  }
}
function MapTreeModule$$$mapi(f$$11, m$$14) {
  switch (m$$14.tag) {
    case 1:
      {
        return new MapTree$00602(1, "MapOne", m$$14.fields[0], f$$11(m$$14.fields[0], m$$14.fields[1]));
      }

    case 2:
      {
        var l2$$1 = MapTreeModule$$$mapi(f$$11, m$$14.fields[2]);
        var v2$$17 = f$$11(m$$14.fields[0], m$$14.fields[1]);
        var r2$$1 = MapTreeModule$$$mapi(f$$11, m$$14.fields[3]);
        return new MapTree$00602(2, "MapNode", m$$14.fields[0], v2$$17, l2$$1, r2$$1, m$$14.fields[4]);
      }

    default:
      {
        return MapTreeModule$$$empty();
      }
  }
}
function MapTreeModule$$$foldBack($f$$12$$74, $m$$15$$75, $x$$1$$76) {
  MapTreeModule$$$foldBack: while (true) {
    var f$$12 = $f$$12$$74,
        m$$15 = $m$$15$$75,
        x$$1 = $x$$1$$76;

    switch (m$$15.tag) {
      case 1:
        {
          return f$$12(m$$15.fields[0], m$$15.fields[1], x$$1);
        }

      case 2:
        {
          var x$$2 = MapTreeModule$$$foldBack(f$$12, m$$15.fields[3], x$$1);
          var x$$3 = f$$12(m$$15.fields[0], m$$15.fields[1], x$$2);
          $f$$12$$74 = f$$12;
          $m$$15$$75 = m$$15.fields[2];
          $x$$1$$76 = x$$3;
          continue MapTreeModule$$$foldBack;
        }

      default:
        {
          return x$$1;
        }
    }

    break;
  }
}
function MapTreeModule$$$fold($f$$13$$77, $x$$4$$78, $m$$16$$79) {
  MapTreeModule$$$fold: while (true) {
    var f$$13 = $f$$13$$77,
        x$$4 = $x$$4$$78,
        m$$16 = $m$$16$$79;

    switch (m$$16.tag) {
      case 1:
        {
          return f$$13(x$$4, m$$16.fields[0], m$$16.fields[1]);
        }

      case 2:
        {
          var x$$5 = MapTreeModule$$$fold(f$$13, x$$4, m$$16.fields[2]);
          var x$$6 = f$$13(x$$5, m$$16.fields[0], m$$16.fields[1]);
          $f$$13$$77 = f$$13;
          $x$$4$$78 = x$$6;
          $m$$16$$79 = m$$16.fields[3];
          continue MapTreeModule$$$fold;
        }

      default:
        {
          return x$$4;
        }
    }

    break;
  }
}
function MapTreeModule$$$foldFromTo(comparer$$11, lo, hi, f$$14, m$$17, x$$7) {
  switch (m$$17.tag) {
    case 1:
      {
        var cLoKey = comparer$$11.Compare(lo, m$$17.fields[0]) | 0;
        var cKeyHi = comparer$$11.Compare(m$$17.fields[0], hi) | 0;
        var x$$8 = (cLoKey <= 0 ? cKeyHi <= 0 : false) ? f$$14(m$$17.fields[0], m$$17.fields[1], x$$7) : x$$7;
        return x$$8;
      }

    case 2:
      {
        var cLoKey$$1 = comparer$$11.Compare(lo, m$$17.fields[0]) | 0;
        var cKeyHi$$1 = comparer$$11.Compare(m$$17.fields[0], hi) | 0;
        var x$$9 = cLoKey$$1 < 0 ? MapTreeModule$$$foldFromTo(comparer$$11, lo, hi, f$$14, m$$17.fields[2], x$$7) : x$$7;
        var x$$10 = (cLoKey$$1 <= 0 ? cKeyHi$$1 <= 0 : false) ? f$$14(m$$17.fields[0], m$$17.fields[1], x$$9) : x$$9;
        var x$$11 = cKeyHi$$1 < 0 ? MapTreeModule$$$foldFromTo(comparer$$11, lo, hi, f$$14, m$$17.fields[3], x$$10) : x$$10;
        return x$$11;
      }

    default:
      {
        return x$$7;
      }
  }
}
function MapTreeModule$$$foldSection(comparer$$12, lo$$1, hi$$1, f$$15, m$$18, x$$12) {
  if (comparer$$12.Compare(lo$$1, hi$$1) === 1) {
    return x$$12;
  } else {
    return MapTreeModule$$$foldFromTo(comparer$$12, lo$$1, hi$$1, f$$15, m$$18, x$$12);
  }
}
function MapTreeModule$$$loop($m$$19$$92, $acc$$8$$93) {
  MapTreeModule$$$loop: while (true) {
    var m$$19 = $m$$19$$92,
        acc$$8 = $acc$$8$$93;

    switch (m$$19.tag) {
      case 1:
        {
          return new List([m$$19.fields[0], m$$19.fields[1]], acc$$8);
        }

      case 2:
        {
          $m$$19$$92 = m$$19.fields[2];
          $acc$$8$$93 = new List([m$$19.fields[0], m$$19.fields[1]], MapTreeModule$$$loop(m$$19.fields[3], acc$$8));
          continue MapTreeModule$$$loop;
        }

      default:
        {
          return acc$$8;
        }
    }

    break;
  }
}
function MapTreeModule$$$toList(m$$20) {
  return MapTreeModule$$$loop(m$$20, new List());
}
function MapTreeModule$$$ofList(comparer$$13, l$$20) {
  return fold(function (acc$$9, tupledArg) {
    return MapTreeModule$$$add(comparer$$13, tupledArg[0], tupledArg[1], acc$$9);
  }, MapTreeModule$$$empty(), l$$20);
}
function MapTreeModule$$$mkFromEnumerator($comparer$$14$$97, $acc$$10$$98, $e$$99) {
  MapTreeModule$$$mkFromEnumerator: while (true) {
    var comparer$$14 = $comparer$$14$$97,
        acc$$10 = $acc$$10$$98,
        e = $e$$99;

    if (e.MoveNext()) {
      var patternInput$$2 = e.Current;
      $comparer$$14$$97 = comparer$$14;
      $acc$$10$$98 = MapTreeModule$$$add(comparer$$14, patternInput$$2[0], patternInput$$2[1], acc$$10);
      $e$$99 = e;
      continue MapTreeModule$$$mkFromEnumerator;
    } else {
      return acc$$10;
    }

    break;
  }
}
function MapTreeModule$$$ofArray(comparer$$15, arr) {
  var res$$2 = MapTreeModule$$$empty();

  for (var i = 0; i <= arr.length - 1; i++) {
    var patternInput$$3 = arr[i];
    res$$2 = MapTreeModule$$$add(comparer$$15, patternInput$$3[0], patternInput$$3[1], res$$2);
  }

  return res$$2;
}
function MapTreeModule$$$ofSeq(comparer$$16, c$$9) {
  var ie = getEnumerator(c$$9);

  try {
    return MapTreeModule$$$mkFromEnumerator(comparer$$16, MapTreeModule$$$empty(), ie);
  } finally {
    if (isDisposable(ie)) {
      ie.Dispose();
    }
  }
}
function MapTreeModule$$$copyToArray(s$$4, arr$$1, i$$1) {
  var j = i$$1 | 0;
  MapTreeModule$$$iter(function f$$16(x$$15, y$$2) {
    arr$$1[j] = [x$$15, y$$2];
    j = j + 1;
  }, s$$4);
}
var MapTreeModule$002EMapIterator$00602 = declare(function Map_MapTreeModule_MapIterator(arg1, arg2) {
  this.stack = arg1;
  this.started = arg2;
}, Record);
function MapTreeModule$002EMapIterator$00602$reflection($gen$$109, $gen$$110) {
  return record("Map.MapTreeModule.MapIterator`2", [$gen$$109, $gen$$110], MapTreeModule$002EMapIterator$00602, function () {
    return [["stack", list(MapTree$00602$reflection($gen$$109, $gen$$110))], ["started", bool]];
  });
}
function MapTreeModule$$$collapseLHS($stack$$111) {
  MapTreeModule$$$collapseLHS: while (true) {
    var stack = $stack$$111;

    if (stack.tail != null) {
      if (stack.head.tag === 1) {
        return stack;
      } else if (stack.head.tag === 2) {
        $stack$$111 = new List(stack.head.fields[2], new List(new MapTree$00602(1, "MapOne", stack.head.fields[0], stack.head.fields[1]), new List(stack.head.fields[3], stack.tail)));
        continue MapTreeModule$$$collapseLHS;
      } else {
        $stack$$111 = stack.tail;
        continue MapTreeModule$$$collapseLHS;
      }
    } else {
      return new List();
    }

    break;
  }
}
function MapTreeModule$$$mkIterator(s$$5) {
  return new MapTreeModule$002EMapIterator$00602(MapTreeModule$$$collapseLHS(new List(s$$5, new List())), false);
}
function MapTreeModule$$$notStarted() {
  throw new Error("enumeration not started");
}
function MapTreeModule$$$alreadyFinished() {
  throw new Error("enumeration already finished");
}
function MapTreeModule$$$current(i$$2) {
  if (i$$2.started) {
    var matchValue$$4 = i$$2.stack;

    if (matchValue$$4.tail == null) {
      return MapTreeModule$$$alreadyFinished();
    } else if (matchValue$$4.head.tag === 1) {
      return [matchValue$$4.head.fields[0], matchValue$$4.head.fields[1]];
    } else {
      throw new Error("Please report error: Map iterator, unexpected stack for current");
    }
  } else {
    return MapTreeModule$$$notStarted();
  }
}
function MapTreeModule$$$moveNext(i$$3) {
  if (i$$3.started) {
    var matchValue$$5 = i$$3.stack;

    if (matchValue$$5.tail == null) {
      return false;
    } else if (matchValue$$5.head.tag === 1) {
      i$$3.stack = MapTreeModule$$$collapseLHS(matchValue$$5.tail);
      return !(i$$3.stack.tail == null);
    } else {
      throw new Error("Please report error: Map iterator, unexpected stack for moveNext");
    }
  } else {
    i$$3.started = true;
    return !(i$$3.stack.tail == null);
  }
}
var MapTreeModule$002EmkIEnumerator$0027$00602 = declare(function Map_MapTreeModule_mkIEnumerator_(s$$6) {
  var $this$$1 = this;
  $this$$1.s = s$$6;
  $this$$1.i = MapTreeModule$$$mkIterator($this$$1.s);
});
function MapTreeModule$002EmkIEnumerator$0027$00602$reflection($gen$$115, $gen$$116) {
  return type("Map.MapTreeModule.mkIEnumerator'`2", [$gen$$115, $gen$$116]);
}
function MapTreeModule$002EmkIEnumerator$0027$00602$$$$002Ector$$Z26BC498C(s$$6) {
  return this instanceof MapTreeModule$002EmkIEnumerator$0027$00602 ? MapTreeModule$002EmkIEnumerator$0027$00602.call(this, s$$6) : new MapTreeModule$002EmkIEnumerator$0027$00602(s$$6);
}
Object.defineProperty(MapTreeModule$002EmkIEnumerator$0027$00602.prototype, "Current", {
  "get": function get() {
    var __ = this;

    return MapTreeModule$$$current(__.i);
  }
});

MapTreeModule$002EmkIEnumerator$0027$00602.prototype.MoveNext = function () {
  var __$$1 = this;

  return MapTreeModule$$$moveNext(__$$1.i);
};

MapTreeModule$002EmkIEnumerator$0027$00602.prototype.Reset = function () {
  var __$$2 = this;

  __$$2.i = MapTreeModule$$$mkIterator(__$$2.s);
};

MapTreeModule$002EmkIEnumerator$0027$00602.prototype.Dispose = function () {};

function MapTreeModule$$$mkIEnumerator(s$$7) {
  return MapTreeModule$002EmkIEnumerator$0027$00602$$$$002Ector$$Z26BC498C(s$$7);
}
function MapTreeModule$$$toSeq(s$$8) {
  var en = MapTreeModule$$$mkIEnumerator(s$$8);
  return unfold(function generator(en$$1) {
    if (en$$1.MoveNext()) {
      return [en$$1.Current, en$$1];
    } else {
      return null;
    }
  }, en);
}
var FSharpMap = declare(function Map_Map(comparer$$17, tree) {
  var $this$$2 = this;
  $this$$2.comparer = comparer$$17;
  $this$$2.tree = tree;
});
function FSharpMap$reflection($gen$$120, $gen$$121) {
  return type("Map.FSharpMap", [$gen$$120, $gen$$121]);
}
function FSharpMap$$$$002Ector$$58ADD115(comparer$$17, tree) {
  return this instanceof FSharpMap ? FSharpMap.call(this, comparer$$17, tree) : new FSharpMap(comparer$$17, tree);
}
function FSharpMap$$get_Comparer(__$$4) {
  return __$$4.comparer;
}
function FSharpMap$$get_Tree(__$$5) {
  return __$$5.tree;
}
function FSharpMap$$Add$$5BDDA1(__$$6, k$$28, v$$24) {
  return FSharpMap$$$$002Ector$$58ADD115(__$$6.comparer, MapTreeModule$$$add(__$$6.comparer, k$$28, v$$24, __$$6.tree));
}
function FSharpMap$$get_IsEmpty(__$$7) {
  return MapTreeModule$$$isEmpty(__$$7.tree);
}
function FSharpMap$$get_Item$$2B595(__$$8, k$$29) {
  return MapTreeModule$$$find(__$$8.comparer, k$$29, __$$8.tree);
}
function FSharpMap$$TryGetValue$$5BDDA1(__$$9, k$$30, defValue) {
  var matchValue$$6 = MapTreeModule$$$tryFind(__$$9.comparer, k$$30, __$$9.tree);

  if (matchValue$$6 == null) {
    return [false, defValue];
  } else {
    var v$$25 = Option_value(matchValue$$6);
    return [true, v$$25];
  }
}
function FSharpMap$$TryPick$$72321DD7(__$$10, f$$17) {
  return MapTreeModule$$$tryPick(f$$17, __$$10.tree);
}
function FSharpMap$$Exists$$Z395DDC35(__$$11, f$$18) {
  return MapTreeModule$$$exists(f$$18, __$$11.tree);
}
function FSharpMap$$Filter$$Z395DDC35(__$$12, f$$19) {
  return FSharpMap$$$$002Ector$$58ADD115(__$$12.comparer, MapTreeModule$$$filter(__$$12.comparer, f$$19, __$$12.tree));
}
function FSharpMap$$ForAll$$Z395DDC35(__$$13, f$$20) {
  return MapTreeModule$$$forall(f$$20, __$$13.tree);
}
function FSharpMap$$Fold(__$$14, f$$21, acc$$11) {
  return MapTreeModule$$$foldBack(f$$21, __$$14.tree, acc$$11);
}
function FSharpMap$$FoldSection(__$$15, lo$$2, hi$$2, f$$22, acc$$12) {
  return MapTreeModule$$$foldSection(__$$15.comparer, lo$$2, hi$$2, f$$22, __$$15.tree, acc$$12);
}
function FSharpMap$$Iterate$$1DCFB91D(__$$16, f$$23) {
  MapTreeModule$$$iter(f$$23, __$$16.tree);
}
function FSharpMap$$MapRange$$6DC7247(__$$17, f$$24) {
  return FSharpMap$$$$002Ector$$58ADD115(__$$17.comparer, MapTreeModule$$$map(f$$24, __$$17.tree));
}
function FSharpMap$$Map$$Z6F6B671C(__$$18, f$$25) {
  return FSharpMap$$$$002Ector$$58ADD115(__$$18.comparer, MapTreeModule$$$mapi(f$$25, __$$18.tree));
}
function FSharpMap$$Partition$$Z395DDC35(__$$19, f$$26) {
  var patternInput$$4 = MapTreeModule$$$partition(__$$19.comparer, f$$26, __$$19.tree);
  return [FSharpMap$$$$002Ector$$58ADD115(__$$19.comparer, patternInput$$4[0]), FSharpMap$$$$002Ector$$58ADD115(__$$19.comparer, patternInput$$4[1])];
}
function FSharpMap$$get_Count(__$$20) {
  return MapTreeModule$$$size(__$$20.tree);
}
function FSharpMap$$ContainsKey$$2B595(__$$21, k$$31) {
  return MapTreeModule$$$mem(__$$21.comparer, k$$31, __$$21.tree);
}
function FSharpMap$$Remove$$2B595(__$$22, k$$32) {
  return FSharpMap$$$$002Ector$$58ADD115(__$$22.comparer, MapTreeModule$$$remove(__$$22.comparer, k$$32, __$$22.tree));
}
function FSharpMap$$TryFind$$2B595(__$$23, k$$33) {
  return MapTreeModule$$$tryFind(__$$23.comparer, k$$33, __$$23.tree);
}
function FSharpMap$$ToList(__$$24) {
  return MapTreeModule$$$toList(__$$24.tree);
}

FSharpMap.prototype.toString = function () {
  var strings;
  var this$ = this;
  return "map [" + (strings = Seq_map(function mapping(kv) {
    var clo1 = toText(printf("(%A, %A)"));
    var clo2 = clo1(kv[0]);
    return clo2(kv[1]);
  }, this$), join("; ", strings)) + "]";
};

FSharpMap.prototype.GetHashCode = function () {
  var this$$$1 = this;

  var combineHash = function combineHash(x$$16, y$$3) {
    return (x$$16 << 1) + y$$3 + 631;
  };

  var res$$3 = 0;
  var e$$1 = MapTreeModule$$$mkIEnumerator(FSharpMap$$get_Tree(this$$$1));

  while (e$$1.MoveNext()) {
    var patternInput$$5 = e$$1.Current;
    var activePatternResult3706 = patternInput$$5;
    res$$3 = combineHash(res$$3, structuralHash(activePatternResult3706[0]));
    res$$3 = combineHash(res$$3, structuralHash(activePatternResult3706[1]));
  }

  return Math.abs(res$$3) | 0;
};

FSharpMap.prototype.Equals = function (that) {
  var this$$$2 = this;
  return this$$$2.CompareTo(that) === 0;
};

FSharpMap.prototype[Symbol.iterator] = function () {
  var __$$25 = this;

  return toIterator(MapTreeModule$$$mkIEnumerator(__$$25.tree));
};

FSharpMap.prototype.CompareTo = function (obj) {
  var m$$22 = this;
  var res$$4 = 0;
  var finished = false;
  var e1 = MapTreeModule$$$mkIEnumerator(FSharpMap$$get_Tree(m$$22));

  try {
    var e2 = MapTreeModule$$$mkIEnumerator(FSharpMap$$get_Tree(obj));

    try {
      while (!finished ? res$$4 === 0 : false) {
        var matchValue$$7 = [e1.MoveNext(), e2.MoveNext()];

        if (matchValue$$7[0]) {
          if (matchValue$$7[1]) {
            var kvp1 = e1.Current;
            var kvp2 = e2.Current;
            var c$$10 = m$$22.comparer.Compare(kvp1[0], kvp2[0]) | 0;
            res$$4 = c$$10 !== 0 ? c$$10 : compare(kvp1[1], kvp2[1]);
          } else {
            res$$4 = 1;
          }
        } else if (matchValue$$7[1]) {
          res$$4 = -1;
        } else {
          finished = true;
        }
      }

      return res$$4 | 0;
    } finally {
      if (isDisposable(e2)) {
        e2.Dispose();
      }
    }
  } finally {
    if (isDisposable(e1)) {
      e1.Dispose();
    }
  }
};

Object.defineProperty(FSharpMap.prototype, "size", {
  "get": function get() {
    var this$$$3 = this;
    return FSharpMap$$get_Count(this$$$3) | 0;
  }
});

FSharpMap.prototype.clear = function () {
  throw new Error("Map cannot be mutated");
};

FSharpMap.prototype["delete"] = function (_arg1$$1) {
  throw new Error("Map cannot be mutated");
};

FSharpMap.prototype.entries = function () {
  var this$$$4 = this;
  return MapTreeModule$$$toSeq(FSharpMap$$get_Tree(this$$$4));
};

FSharpMap.prototype.get = function (k$$34) {
  var this$$$5 = this;
  return FSharpMap$$get_Item$$2B595(this$$$5, k$$34);
};

FSharpMap.prototype.has = function (k$$35) {
  var this$$$6 = this;
  return FSharpMap$$ContainsKey$$2B595(this$$$6, k$$35);
};

FSharpMap.prototype.keys = function () {
  var this$$$7 = this;
  var source$$1 = MapTreeModule$$$toSeq(FSharpMap$$get_Tree(this$$$7));
  return Seq_map(function mapping$$1(kv$$1) {
    return kv$$1[0];
  }, source$$1);
};

FSharpMap.prototype.set = function (k$$36, v$$26) {
  throw new Error("Map cannot be mutated");
};

FSharpMap.prototype.values = function () {
  var this$$$8 = this;
  var source$$2 = MapTreeModule$$$toSeq(FSharpMap$$get_Tree(this$$$8));
  return Seq_map(function mapping$$2(kv$$2) {
    return kv$$2[1];
  }, source$$2);
};

function Map_isEmpty(m$$23) {
  return FSharpMap$$get_IsEmpty(m$$23);
}
function Map_add(k$$37, v$$27, m$$24) {
  return FSharpMap$$Add$$5BDDA1(m$$24, k$$37, v$$27);
}
function Map_find(k$$38, m$$25) {
  return FSharpMap$$get_Item$$2B595(m$$25, k$$38);
}
function Map_tryFind(k$$39, m$$26) {
  return FSharpMap$$TryFind$$2B595(m$$26, k$$39);
}
function Map_remove(k$$40, m$$27) {
  return FSharpMap$$Remove$$2B595(m$$27, k$$40);
}
function containsKey(k$$41, m$$28) {
  return FSharpMap$$ContainsKey$$2B595(m$$28, k$$41);
}
function Map_iterate(f$$27, m$$29) {
  FSharpMap$$Iterate$$1DCFB91D(m$$29, f$$27);
}
function Map_tryPick(f$$28, m$$30) {
  return FSharpMap$$TryPick$$72321DD7(m$$30, f$$28);
}
function Map_pick(f$$29, m$$31) {
  var matchValue$$8 = Map_tryPick(f$$29, m$$31);

  if (matchValue$$8 != null) {
    var res$$5 = Option_value(matchValue$$8);
    return res$$5;
  } else {
    throw new Error("key not found");
  }
}
function Map_exists(f$$30, m$$32) {
  return FSharpMap$$Exists$$Z395DDC35(m$$32, f$$30);
}
function Map_filter(f$$31, m$$33) {
  return FSharpMap$$Filter$$Z395DDC35(m$$33, f$$31);
}
function partition(f$$32, m$$34) {
  return FSharpMap$$Partition$$Z395DDC35(m$$34, f$$32);
}
function Map_forAll(f$$33, m$$35) {
  return FSharpMap$$ForAll$$Z395DDC35(m$$35, f$$33);
}
function mapRange(f$$34, m$$36) {
  return FSharpMap$$MapRange$$6DC7247(m$$36, f$$34);
}
function Map_map(f$$35, m$$37) {
  return FSharpMap$$Map$$Z6F6B671C(m$$37, f$$35);
}
function Map_fold(f$$36, z, m$$38) {
  return MapTreeModule$$$fold(f$$36, z, FSharpMap$$get_Tree(m$$38));
}
function Map_foldBack(f$$37, m$$39, z$$1) {
  return MapTreeModule$$$foldBack(f$$37, FSharpMap$$get_Tree(m$$39), z$$1);
}
function toSeq(m$$40) {
  return MapTreeModule$$$toSeq(FSharpMap$$get_Tree(m$$40));
}
function findKey(f$$38, m$$41) {
  var _arg1$$2;

  var m$$42 = FSharpMap$$get_Tree(m$$41);
  _arg1$$2 = MapTreeModule$$$tryPick(function f$$39(k$$42, v$$28) {
    if (f$$38(k$$42, v$$28)) {
      return some(k$$42);
    } else {
      return null;
    }
  }, m$$42);

  if (_arg1$$2 == null) {
    throw new Error("Key not found");
  } else {
    var k$$43 = Option_value(_arg1$$2);
    return k$$43;
  }
}
function tryFindKey(f$$40, m$$43) {
  var m$$44 = FSharpMap$$get_Tree(m$$43);
  return MapTreeModule$$$tryPick(function f$$41(k$$44, v$$29) {
    if (f$$40(k$$44, v$$29)) {
      return some(k$$44);
    } else {
      return null;
    }
  }, m$$44);
}
function ofList(l$$22, comparer$$18) {
  return FSharpMap$$$$002Ector$$58ADD115(comparer$$18, MapTreeModule$$$ofList(comparer$$18, l$$22));
}
function ofSeq(l$$23, comparer$$19) {
  return FSharpMap$$$$002Ector$$58ADD115(comparer$$19, MapTreeModule$$$ofSeq(comparer$$19, l$$23));
}
function Map_ofArray(array, comparer$$20) {
  return FSharpMap$$$$002Ector$$58ADD115(comparer$$20, MapTreeModule$$$ofArray(comparer$$20, array));
}
function toList(m$$45) {
  return FSharpMap$$ToList(m$$45);
}
function toArray(m$$46) {
  var res$$6;
  var len = FSharpMap$$get_Count(m$$46) | 0;
  res$$6 = new Array(len);
  MapTreeModule$$$copyToArray(FSharpMap$$get_Tree(m$$46), res$$6, 0);
  return res$$6;
}
function Map_empty(comparer$$21) {
  return FSharpMap$$$$002Ector$$58ADD115(comparer$$21, new MapTree$00602(0, "MapEmpty"));
}

function createMutablePrivate(comparer$$22, tree$0027) {
  var _ref;

  var tree$$1 = tree$0027;
  return _ref = {
    get size() {
      return MapTreeModule$$$size(tree$$1);
    },

    clear: function clear() {
      tree$$1 = new MapTree$00602(0, "MapEmpty");
    },
    "delete": function _delete(x$$18) {
      if (MapTreeModule$$$mem(comparer$$22, x$$18, tree$$1)) {
        tree$$1 = MapTreeModule$$$remove(comparer$$22, x$$18, tree$$1);
        return true;
      } else {
        return false;
      }
    },
    entries: function entries() {
      return MapTreeModule$$$toSeq(tree$$1);
    },
    get: function get(k$$45) {
      return MapTreeModule$$$find(comparer$$22, k$$45, tree$$1);
    },
    has: function has(x$$19) {
      return MapTreeModule$$$mem(comparer$$22, x$$19, tree$$1);
    },
    keys: function keys() {
      var source$$3 = MapTreeModule$$$toSeq(tree$$1);
      return Seq_map(function mapping$$3(kv$$3) {
        return kv$$3[0];
      }, source$$3);
    },
    set: function set(k$$46, v$$30) {
      var this$$$9 = this;
      tree$$1 = MapTreeModule$$$add(comparer$$22, k$$46, v$$30, tree$$1);
      return this$$$9;
    },
    values: function values() {
      var source$$4 = MapTreeModule$$$toSeq(tree$$1);
      return Seq_map(function mapping$$4(kv$$4) {
        return kv$$4[1];
      }, source$$4);
    }
  }, Map_defineProperty(_ref, Symbol.iterator, function () {
    return toIterator(MapTreeModule$$$mkIEnumerator(tree$$1));
  }), Map_defineProperty(_ref, "GetEnumerator", function GetEnumerator() {
    return MapTreeModule$$$mkIEnumerator(tree$$1);
  }), _ref;
}

function createMutable(source$$5, comparer$$23) {
  var map$$1 = MutableMap$00602$$$$002Ector$$6623D9B3(source$$5, comparer$$23);
  return map$$1;
}
function groupBy(projection, xs, comparer$$24) {
  var dict = createMutable(empty(), comparer$$24);
  iterate(function (v$$31) {
    var key = projection(v$$31);

    if (dict.has(key)) {
      dict.get(key).push(v$$31);
    } else {
      var value = dict.set(key, [v$$31]);
      value, null;
    }
  }, xs);
  return Seq_map(function mapping$$5(kv$$5) {
    return [kv$$5[0], kv$$5[1]];
  }, dict);
}
function countBy(projection$$1, xs$$1, comparer$$25) {
  var dict$$1 = createMutable(empty(), comparer$$25);
  iterate(function (value$$1) {
    var key$$1 = projection$$1(value$$1);
    var value$$2 = dict$$1.has(key$$1) ? dict$$1.set(key$$1, dict$$1.get(key$$1) + 1) : dict$$1.set(key$$1, 1);
    value$$2, null;
  }, xs$$1);
  return Seq_map(function mapping$$6(kv$$6) {
    return [kv$$6[0], kv$$6[1]];
  }, dict$$1);
}
function Map_count(m$$47) {
  return FSharpMap$$get_Count(m$$47);
}
// CONCATENATED MODULE: ./.fable/fable-library.2.4.12/MutableSet.js
















var MutableSet$00601 = declare(function Fable_Collections_MutableSet(items, comparer) {
  var $this$$1 = this;
  var this$ = new FSharpRef(null);
  $this$$1.comparer = comparer;
  this$.contents = $this$$1;
  $this$$1["entries@24"] = new Map([]);
  $this$$1["init@21-2"] = 1;
  iterate(function (item) {
    var value = MutableSet$00601$$Add$$2B595(this$.contents, item);
    value, null;
  }, items);
});
function MutableSet$00601$reflection($gen$$4) {
  return type("Fable.Collections.MutableSet`1", [$gen$$4]);
}
function MutableSet$00601$$$$002Ector$$Z6150332D(items, comparer) {
  return this instanceof MutableSet$00601 ? MutableSet$00601.call(this, items, comparer) : new MutableSet$00601(items, comparer);
}

function MutableSet$00601$$TryFindIndex$$2B595(this$$$1, k) {
  var h = this$$$1.comparer.GetHashCode(k) | 0;
  var matchValue = tryGetValue(this$$$1["entries@24"], h, null);

  if (matchValue[0]) {
    return [true, h, matchValue[1].findIndex(function (v) {
      return this$$$1.comparer.Equals(k, v);
    })];
  } else {
    return [false, h, -1];
  }
}

function MutableSet$00601$$TryFind$$2B595(this$$$2, k$$1) {
  var matchValue$$1 = MutableSet$00601$$TryFindIndex$$2B595(this$$$2, k$$1);
  var $target$$9;

  if (matchValue$$1[0]) {
    if (matchValue$$1[2] > -1) {
      $target$$9 = 0;
    } else {
      $target$$9 = 1;
    }
  } else {
    $target$$9 = 1;
  }

  switch ($target$$9) {
    case 0:
      {
        return some(getItemFromDict(this$$$2["entries@24"], matchValue$$1[1])[matchValue$$1[2]]);
      }

    case 1:
      {
        return null;
      }
  }
}

function MutableSet$00601$$get_Comparer(this$$$3) {
  return this$$$3.comparer;
}
function MutableSet$00601$$Clear(this$$$4) {
  this$$$4["entries@24"].clear();
}
function MutableSet$00601$$get_Count(this$$$5) {
  var source = this$$$5["entries@24"].values();
  return sumBy(function projection(pairs) {
    return pairs.length;
  }, source, {
    GetZero: function GetZero() {
      return 0;
    },
    Add: function Add($x$$2, $y$$3) {
      return $x$$2 + $y$$3;
    }
  }) | 0;
}
function MutableSet$00601$$Add$$2B595(this$$$6, k$$2) {
  var matchValue$$2 = MutableSet$00601$$TryFindIndex$$2B595(this$$$6, k$$2);
  var $target$$16;

  if (matchValue$$2[0]) {
    if (matchValue$$2[2] > -1) {
      $target$$16 = 0;
    } else {
      $target$$16 = 1;
    }
  } else {
    $target$$16 = 1;
  }

  switch ($target$$16) {
    case 0:
      {
        return false;
      }

    case 1:
      {
        if (matchValue$$2[0]) {
          var value$$1 = getItemFromDict(this$$$6["entries@24"], matchValue$$2[1]).push(k$$2);
          null, null;
          return true;
        } else {
          this$$$6["entries@24"].set(matchValue$$2[1], [k$$2]);
          return true;
        }
      }
  }
}
function MutableSet$00601$$Contains$$2B595(this$$$7, k$$3) {
  var matchValue$$3 = MutableSet$00601$$TryFindIndex$$2B595(this$$$7, k$$3);
  var $target$$19;

  if (matchValue$$3[0]) {
    if (matchValue$$3[2] > -1) {
      $target$$19 = 0;
    } else {
      $target$$19 = 1;
    }
  } else {
    $target$$19 = 1;
  }

  switch ($target$$19) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}
function MutableSet$00601$$Remove$$2B595(this$$$8, k$$4) {
  var matchValue$$4 = MutableSet$00601$$TryFindIndex$$2B595(this$$$8, k$$4);
  var $target$$22;

  if (matchValue$$4[0]) {
    if (matchValue$$4[2] > -1) {
      $target$$22 = 0;
    } else {
      $target$$22 = 1;
    }
  } else {
    $target$$22 = 1;
  }

  switch ($target$$22) {
    case 0:
      {
        getItemFromDict(this$$$8["entries@24"], matchValue$$4[1]).splice(matchValue$$4[2], 1);
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}

MutableSet$00601.prototype[Symbol.iterator] = function () {
  var elems;
  var this$$$9 = this;
  return toIterator((elems = delay(function () {
    return collect(function (values$$1) {
      return Seq_map(function (value$$2) {
        return value$$2;
      }, values$$1);
    }, this$$$9["entries@24"].values());
  }), getEnumerator(elems)));
};

MutableSet$00601.prototype.Add = function (item$$1) {
  var this$$$10 = this;
  var value$$3 = MutableSet$00601$$Add$$2B595(this$$$10, item$$1);
  value$$3, null;
};

MutableSet$00601.prototype.Clear = function () {
  var this$$$11 = this;
  MutableSet$00601$$Clear(this$$$11);
};

MutableSet$00601.prototype.Contains = function (item$$2) {
  var this$$$12 = this;
  return MutableSet$00601$$Contains$$2B595(this$$$12, item$$2);
};

MutableSet$00601.prototype.CopyTo = function (array, arrayIndex) {
  var this$$$13 = this;
  iterateIndexed(function action(i$$8, e) {
    array[arrayIndex + i$$8] = e;
  }, this$$$13);
};

Object.defineProperty(MutableSet$00601.prototype, "Count", {
  "get": function get() {
    var this$$$14 = this;
    return MutableSet$00601$$get_Count(this$$$14) | 0;
  }
});
Object.defineProperty(MutableSet$00601.prototype, "IsReadOnly", {
  "get": function get() {
    return false;
  }
});

MutableSet$00601.prototype.Remove = function (item$$3) {
  var this$$$16 = this;
  return MutableSet$00601$$Remove$$2B595(this$$$16, item$$3);
};

Object.defineProperty(MutableSet$00601.prototype, "size", {
  "get": function get() {
    var this$$$17 = this;
    return MutableSet$00601$$get_Count(this$$$17) | 0;
  }
});

MutableSet$00601.prototype.add = function (k$$5) {
  var this$$$18 = this;
  var value$$4 = MutableSet$00601$$Add$$2B595(this$$$18, k$$5);
  value$$4, null;
  return this$$$18;
};

MutableSet$00601.prototype.add_ = function (k$$6) {
  var this$$$19 = this;
  return MutableSet$00601$$Add$$2B595(this$$$19, k$$6);
};

MutableSet$00601.prototype.clear = function () {
  var this$$$20 = this;
  MutableSet$00601$$Clear(this$$$20);
};

MutableSet$00601.prototype["delete"] = function (k$$7) {
  var this$$$21 = this;
  return MutableSet$00601$$Remove$$2B595(this$$$21, k$$7);
};

MutableSet$00601.prototype.has = function (k$$8) {
  var this$$$22 = this;
  return MutableSet$00601$$Contains$$2B595(this$$$22, k$$8);
};

MutableSet$00601.prototype.keys = function () {
  var this$$$23 = this;
  return Seq_map(function mapping(x) {
    return x;
  }, this$$$23);
};

MutableSet$00601.prototype.values = function () {
  var this$$$24 = this;
  return Seq_map(function mapping$$1(x$$1) {
    return x$$1;
  }, this$$$24);
};

MutableSet$00601.prototype.entries = function () {
  var this$$$25 = this;
  return Seq_map(function mapping$$2(v$$1) {
    return [v$$1, v$$1];
  }, this$$$25);
};
// CONCATENATED MODULE: ./.fable/fable-library.2.4.12/Set.js












function Set_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var SetTree$00601 = declare(function Set_SetTree(tag, name) {
  for (var _len = arguments.length, fields = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    fields[_key - 2] = arguments[_key];
  }

  Union.call.apply(Union, [this, tag, name].concat(fields));
}, Union);
function SetTree$00601$reflection($gen$$3) {
  return union("Set.SetTree`1", [$gen$$3], SetTree$00601, function () {
    return ["SetEmpty", ["SetNode", [$gen$$3, SetTree$00601$reflection($gen$$3), SetTree$00601$reflection($gen$$3), int32]], ["SetOne", [$gen$$3]]];
  });
}
function SetTreeModule$$$countAux($s$$4, $acc$$5) {
  SetTreeModule$$$countAux: while (true) {
    var s = $s$$4,
        acc = $acc$$5;

    switch (s.tag) {
      case 2:
        {
          return acc + 1 | 0;
        }

      case 0:
        {
          return acc | 0;
        }

      default:
        {
          $s$$4 = s.fields[1];
          $acc$$5 = SetTreeModule$$$countAux(s.fields[2], acc + 1);
          continue SetTreeModule$$$countAux;
        }
    }

    break;
  }
}
function SetTreeModule$$$count(s$$1) {
  return SetTreeModule$$$countAux(s$$1, 0);
}
function SetTreeModule$$$SetOne(n) {
  return new SetTree$00601(2, "SetOne", n);
}
function SetTreeModule$$$SetNode(x, l$$1, r$$1, h) {
  return new SetTree$00601(1, "SetNode", x, l$$1, r$$1, h);
}
function SetTreeModule$$$height(t) {
  switch (t.tag) {
    case 2:
      {
        return 1;
      }

    case 1:
      {
        return t.fields[3] | 0;
      }

    default:
      {
        return 0;
      }
  }
}
var SetTreeModule$$$tolerance = 2;
function SetTreeModule$$$mk(l$$2, k, r$$2) {
  var $target$$16;

  if (l$$2.tag === 0) {
    if (r$$2.tag === 0) {
      $target$$16 = 0;
    } else {
      $target$$16 = 1;
    }
  } else {
    $target$$16 = 1;
  }

  switch ($target$$16) {
    case 0:
      {
        return SetTreeModule$$$SetOne(k);
      }

    case 1:
      {
        var hl = SetTreeModule$$$height(l$$2) | 0;
        var hr = SetTreeModule$$$height(r$$2) | 0;
        var m = (hl < hr ? hr : hl) | 0;
        return SetTreeModule$$$SetNode(k, l$$2, r$$2, m + 1);
      }
  }
}
function SetTreeModule$$$rebalance(t1, k$$1, t2) {
  var t1h = SetTreeModule$$$height(t1) | 0;
  var t2h = SetTreeModule$$$height(t2) | 0;

  if (t2h > t1h + SetTreeModule$$$tolerance) {
    if (t2.tag === 1) {
      if (SetTreeModule$$$height(t2.fields[1]) > t1h + 1) {
        if (t2.fields[1].tag === 1) {
          return SetTreeModule$$$mk(SetTreeModule$$$mk(t1, k$$1, t2.fields[1].fields[1]), t2.fields[1].fields[0], SetTreeModule$$$mk(t2.fields[1].fields[2], t2.fields[0], t2.fields[2]));
        } else {
          throw new Error("rebalance");
        }
      } else {
        return SetTreeModule$$$mk(SetTreeModule$$$mk(t1, k$$1, t2.fields[1]), t2.fields[0], t2.fields[2]);
      }
    } else {
      throw new Error("rebalance");
    }
  } else if (t1h > t2h + SetTreeModule$$$tolerance) {
    if (t1.tag === 1) {
      if (SetTreeModule$$$height(t1.fields[2]) > t2h + 1) {
        if (t1.fields[2].tag === 1) {
          return SetTreeModule$$$mk(SetTreeModule$$$mk(t1.fields[1], t1.fields[0], t1.fields[2].fields[1]), t1.fields[2].fields[0], SetTreeModule$$$mk(t1.fields[2].fields[2], k$$1, t2));
        } else {
          throw new Error("rebalance");
        }
      } else {
        return SetTreeModule$$$mk(t1.fields[1], t1.fields[0], SetTreeModule$$$mk(t1.fields[2], k$$1, t2));
      }
    } else {
      throw new Error("rebalance");
    }
  } else {
    return SetTreeModule$$$mk(t1, k$$1, t2);
  }
}
function SetTreeModule$$$add(comparer, k$$2, t$$1) {
  switch (t$$1.tag) {
    case 2:
      {
        var c$$1 = comparer.Compare(k$$2, t$$1.fields[0]) | 0;

        if (c$$1 < 0) {
          return SetTreeModule$$$SetNode(k$$2, new SetTree$00601(0, "SetEmpty"), t$$1, 2);
        } else if (c$$1 === 0) {
          return t$$1;
        } else {
          return SetTreeModule$$$SetNode(k$$2, t$$1, new SetTree$00601(0, "SetEmpty"), 2);
        }
      }

    case 0:
      {
        return SetTreeModule$$$SetOne(k$$2);
      }

    default:
      {
        var c = comparer.Compare(k$$2, t$$1.fields[0]) | 0;

        if (c < 0) {
          return SetTreeModule$$$rebalance(SetTreeModule$$$add(comparer, k$$2, t$$1.fields[1]), t$$1.fields[0], t$$1.fields[2]);
        } else if (c === 0) {
          return t$$1;
        } else {
          return SetTreeModule$$$rebalance(t$$1.fields[1], t$$1.fields[0], SetTreeModule$$$add(comparer, k$$2, t$$1.fields[2]));
        }
      }
  }
}
function SetTreeModule$$$balance(comparer$$1, t1$$1, k$$3, t2$$1) {
  var $target$$27, t2$$2, t1$$2, k1, t2$$3, k2$$2, t1$$3, h1, h2, k1$$1, k2$$3, t11, t12, t21, t22;

  if (t1$$1.tag === 2) {
    if (t2$$1.tag === 0) {
      $target$$27 = 1;
      t1$$2 = t1$$1;
    } else if (t2$$1.tag === 2) {
      $target$$27 = 2;
      k1 = t1$$1.fields[0];
      t2$$3 = t2$$1;
    } else {
      $target$$27 = 2;
      k1 = t1$$1.fields[0];
      t2$$3 = t2$$1;
    }
  } else if (t1$$1.tag === 1) {
    if (t2$$1.tag === 2) {
      $target$$27 = 3;
      k2$$2 = t2$$1.fields[0];
      t1$$3 = t1$$1;
    } else if (t2$$1.tag === 1) {
      $target$$27 = 4;
      h1 = t1$$1.fields[3];
      h2 = t2$$1.fields[3];
      k1$$1 = t1$$1.fields[0];
      k2$$3 = t2$$1.fields[0];
      t11 = t1$$1.fields[1];
      t12 = t1$$1.fields[2];
      t21 = t2$$1.fields[1];
      t22 = t2$$1.fields[2];
    } else {
      $target$$27 = 1;
      t1$$2 = t1$$1;
    }
  } else {
    $target$$27 = 0;
    t2$$2 = t2$$1;
  }

  switch ($target$$27) {
    case 0:
      {
        return SetTreeModule$$$add(comparer$$1, k$$3, t2$$2);
      }

    case 1:
      {
        return SetTreeModule$$$add(comparer$$1, k$$3, t1$$2);
      }

    case 2:
      {
        return SetTreeModule$$$add(comparer$$1, k$$3, SetTreeModule$$$add(comparer$$1, k1, t2$$3));
      }

    case 3:
      {
        return SetTreeModule$$$add(comparer$$1, k$$3, SetTreeModule$$$add(comparer$$1, k2$$2, t1$$3));
      }

    case 4:
      {
        if (h1 + SetTreeModule$$$tolerance < h2) {
          return SetTreeModule$$$rebalance(SetTreeModule$$$balance(comparer$$1, t1$$1, k$$3, t21), k2$$3, t22);
        } else if (h2 + SetTreeModule$$$tolerance < h1) {
          return SetTreeModule$$$rebalance(t11, k1$$1, SetTreeModule$$$balance(comparer$$1, t12, k$$3, t2$$1));
        } else {
          return SetTreeModule$$$mk(t1$$1, k$$3, t2$$1);
        }
      }
  }
}
function SetTreeModule$$$split(comparer$$2, pivot, t$$2) {
  switch (t$$2.tag) {
    case 2:
      {
        var c$$3 = comparer$$2.Compare(t$$2.fields[0], pivot) | 0;

        if (c$$3 < 0) {
          return [t$$2, false, new SetTree$00601(0, "SetEmpty")];
        } else if (c$$3 === 0) {
          return [new SetTree$00601(0, "SetEmpty"), true, new SetTree$00601(0, "SetEmpty")];
        } else {
          return [new SetTree$00601(0, "SetEmpty"), false, t$$2];
        }
      }

    case 0:
      {
        return [new SetTree$00601(0, "SetEmpty"), false, new SetTree$00601(0, "SetEmpty")];
      }

    default:
      {
        var c$$2 = comparer$$2.Compare(pivot, t$$2.fields[0]) | 0;

        if (c$$2 < 0) {
          var patternInput = SetTreeModule$$$split(comparer$$2, pivot, t$$2.fields[1]);
          return [patternInput[0], patternInput[1], SetTreeModule$$$balance(comparer$$2, patternInput[2], t$$2.fields[0], t$$2.fields[2])];
        } else if (c$$2 === 0) {
          return [t$$2.fields[1], true, t$$2.fields[2]];
        } else {
          var patternInput$$1 = SetTreeModule$$$split(comparer$$2, pivot, t$$2.fields[2]);
          return [SetTreeModule$$$balance(comparer$$2, t$$2.fields[1], t$$2.fields[0], patternInput$$1[0]), patternInput$$1[1], patternInput$$1[2]];
        }
      }
  }
}
function SetTreeModule$$$spliceOutSuccessor(t$$3) {
  switch (t$$3.tag) {
    case 2:
      {
        return [t$$3.fields[0], new SetTree$00601(0, "SetEmpty")];
      }

    case 1:
      {
        if (t$$3.fields[1].tag === 0) {
          return [t$$3.fields[0], t$$3.fields[2]];
        } else {
          var patternInput$$2 = SetTreeModule$$$spliceOutSuccessor(t$$3.fields[1]);
          return [patternInput$$2[0], SetTreeModule$$$mk(patternInput$$2[1], t$$3.fields[0], t$$3.fields[2])];
        }
      }

    default:
      {
        throw new Error("internal error: Set.spliceOutSuccessor");
      }
  }
}
function SetTreeModule$$$remove(comparer$$3, k$$4, t$$4) {
  switch (t$$4.tag) {
    case 2:
      {
        var c$$4 = comparer$$3.Compare(k$$4, t$$4.fields[0]) | 0;

        if (c$$4 === 0) {
          return new SetTree$00601(0, "SetEmpty");
        } else {
          return t$$4;
        }
      }

    case 1:
      {
        var c$$5 = comparer$$3.Compare(k$$4, t$$4.fields[0]) | 0;

        if (c$$5 < 0) {
          return SetTreeModule$$$rebalance(SetTreeModule$$$remove(comparer$$3, k$$4, t$$4.fields[1]), t$$4.fields[0], t$$4.fields[2]);
        } else if (c$$5 === 0) {
          if (t$$4.fields[1].tag === 0) {
            return t$$4.fields[2];
          } else if (t$$4.fields[2].tag === 0) {
            return t$$4.fields[1];
          } else {
            var patternInput$$3 = SetTreeModule$$$spliceOutSuccessor(t$$4.fields[2]);
            return SetTreeModule$$$mk(t$$4.fields[1], patternInput$$3[0], patternInput$$3[1]);
          }
        } else {
          return SetTreeModule$$$rebalance(t$$4.fields[1], t$$4.fields[0], SetTreeModule$$$remove(comparer$$3, k$$4, t$$4.fields[2]));
        }
      }

    default:
      {
        return t$$4;
      }
  }
}
function SetTreeModule$$$mem($comparer$$4$$35, $k$$5$$36, $t$$5$$37) {
  SetTreeModule$$$mem: while (true) {
    var comparer$$4 = $comparer$$4$$35,
        k$$5 = $k$$5$$36,
        t$$5 = $t$$5$$37;

    switch (t$$5.tag) {
      case 2:
        {
          return comparer$$4.Compare(k$$5, t$$5.fields[0]) === 0;
        }

      case 0:
        {
          return false;
        }

      default:
        {
          var c$$6 = comparer$$4.Compare(k$$5, t$$5.fields[0]) | 0;

          if (c$$6 < 0) {
            $comparer$$4$$35 = comparer$$4;
            $k$$5$$36 = k$$5;
            $t$$5$$37 = t$$5.fields[1];
            continue SetTreeModule$$$mem;
          } else if (c$$6 === 0) {
            return true;
          } else {
            $comparer$$4$$35 = comparer$$4;
            $k$$5$$36 = k$$5;
            $t$$5$$37 = t$$5.fields[2];
            continue SetTreeModule$$$mem;
          }
        }
    }

    break;
  }
}
function SetTreeModule$$$iter($f$$38, $t$$6$$39) {
  SetTreeModule$$$iter: while (true) {
    var f = $f$$38,
        t$$6 = $t$$6$$39;

    switch (t$$6.tag) {
      case 2:
        {
          f(t$$6.fields[0]);
          break;
        }

      case 0:
        {
          break;
        }

      default:
        {
          SetTreeModule$$$iter(f, t$$6.fields[1]);
          f(t$$6.fields[0]);
          $f$$38 = f;
          $t$$6$$39 = t$$6.fields[2];
          continue SetTreeModule$$$iter;
        }
    }

    break;
  }
}
function SetTreeModule$$$foldBack($f$$1$$40, $m$$1$$41, $x$$1$$42) {
  SetTreeModule$$$foldBack: while (true) {
    var f$$1 = $f$$1$$40,
        m$$1 = $m$$1$$41,
        x$$1 = $x$$1$$42;

    switch (m$$1.tag) {
      case 2:
        {
          return f$$1(m$$1.fields[0], x$$1);
        }

      case 0:
        {
          return x$$1;
        }

      default:
        {
          $f$$1$$40 = f$$1;
          $m$$1$$41 = m$$1.fields[1];
          $x$$1$$42 = f$$1(m$$1.fields[0], SetTreeModule$$$foldBack(f$$1, m$$1.fields[2], x$$1));
          continue SetTreeModule$$$foldBack;
        }
    }

    break;
  }
}
function SetTreeModule$$$fold($f$$2$$43, $x$$2$$44, $m$$2$$45) {
  SetTreeModule$$$fold: while (true) {
    var f$$2 = $f$$2$$43,
        x$$2 = $x$$2$$44,
        m$$2 = $m$$2$$45;

    switch (m$$2.tag) {
      case 2:
        {
          return f$$2(x$$2, m$$2.fields[0]);
        }

      case 0:
        {
          return x$$2;
        }

      default:
        {
          var x$$3 = SetTreeModule$$$fold(f$$2, x$$2, m$$2.fields[1]);
          var x$$4 = f$$2(x$$3, m$$2.fields[0]);
          $f$$2$$43 = f$$2;
          $x$$2$$44 = x$$4;
          $m$$2$$45 = m$$2.fields[2];
          continue SetTreeModule$$$fold;
        }
    }

    break;
  }
}
function SetTreeModule$$$forall($f$$3$$46, $m$$3$$47) {
  SetTreeModule$$$forall: while (true) {
    var f$$3 = $f$$3$$46,
        m$$3 = $m$$3$$47;

    switch (m$$3.tag) {
      case 2:
        {
          return f$$3(m$$3.fields[0]);
        }

      case 0:
        {
          return true;
        }

      default:
        {
          if (f$$3(m$$3.fields[0]) ? SetTreeModule$$$forall(f$$3, m$$3.fields[1]) : false) {
            $f$$3$$46 = f$$3;
            $m$$3$$47 = m$$3.fields[2];
            continue SetTreeModule$$$forall;
          } else {
            return false;
          }
        }
    }

    break;
  }
}
function SetTreeModule$$$exists($f$$4$$48, $m$$4$$49) {
  SetTreeModule$$$exists: while (true) {
    var f$$4 = $f$$4$$48,
        m$$4 = $m$$4$$49;

    switch (m$$4.tag) {
      case 2:
        {
          return f$$4(m$$4.fields[0]);
        }

      case 0:
        {
          return false;
        }

      default:
        {
          if (f$$4(m$$4.fields[0]) ? true : SetTreeModule$$$exists(f$$4, m$$4.fields[1])) {
            return true;
          } else {
            $f$$4$$48 = f$$4;
            $m$$4$$49 = m$$4.fields[2];
            continue SetTreeModule$$$exists;
          }
        }
    }

    break;
  }
}
function SetTreeModule$$$isEmpty(m$$5) {
  if (m$$5.tag === 0) {
    return true;
  } else {
    return false;
  }
}
function SetTreeModule$$$subset(comparer$$5, a, b) {
  return SetTreeModule$$$forall(function (x$$5) {
    return SetTreeModule$$$mem(comparer$$5, x$$5, b);
  }, a);
}
function SetTreeModule$$$psubset(comparer$$6, a$$1, b$$1) {
  if (SetTreeModule$$$forall(function (x$$6) {
    return SetTreeModule$$$mem(comparer$$6, x$$6, b$$1);
  }, a$$1)) {
    return SetTreeModule$$$exists(function (x$$7) {
      return !SetTreeModule$$$mem(comparer$$6, x$$7, a$$1);
    }, b$$1);
  } else {
    return false;
  }
}
function SetTreeModule$$$filterAux($comparer$$7$$57, $f$$5$$58, $s$$2$$59, $acc$$1$$60) {
  SetTreeModule$$$filterAux: while (true) {
    var comparer$$7 = $comparer$$7$$57,
        f$$5 = $f$$5$$58,
        s$$2 = $s$$2$$59,
        acc$$1 = $acc$$1$$60;

    switch (s$$2.tag) {
      case 2:
        {
          if (f$$5(s$$2.fields[0])) {
            return SetTreeModule$$$add(comparer$$7, s$$2.fields[0], acc$$1);
          } else {
            return acc$$1;
          }
        }

      case 0:
        {
          return acc$$1;
        }

      default:
        {
          var acc$$2 = f$$5(s$$2.fields[0]) ? SetTreeModule$$$add(comparer$$7, s$$2.fields[0], acc$$1) : acc$$1;
          $comparer$$7$$57 = comparer$$7;
          $f$$5$$58 = f$$5;
          $s$$2$$59 = s$$2.fields[1];
          $acc$$1$$60 = SetTreeModule$$$filterAux(comparer$$7, f$$5, s$$2.fields[2], acc$$2);
          continue SetTreeModule$$$filterAux;
        }
    }

    break;
  }
}
function SetTreeModule$$$filter(comparer$$8, f$$6, s$$3) {
  return SetTreeModule$$$filterAux(comparer$$8, f$$6, s$$3, new SetTree$00601(0, "SetEmpty"));
}
function SetTreeModule$$$diffAux($comparer$$9$$64, $m$$6$$65, $acc$$3$$66) {
  SetTreeModule$$$diffAux: while (true) {
    var comparer$$9 = $comparer$$9$$64,
        m$$6 = $m$$6$$65,
        acc$$3 = $acc$$3$$66;

    switch (m$$6.tag) {
      case 2:
        {
          return SetTreeModule$$$remove(comparer$$9, m$$6.fields[0], acc$$3);
        }

      case 0:
        {
          return acc$$3;
        }

      default:
        {
          $comparer$$9$$64 = comparer$$9;
          $m$$6$$65 = m$$6.fields[1];
          $acc$$3$$66 = SetTreeModule$$$diffAux(comparer$$9, m$$6.fields[2], SetTreeModule$$$remove(comparer$$9, m$$6.fields[0], acc$$3));
          continue SetTreeModule$$$diffAux;
        }
    }

    break;
  }
}
function SetTreeModule$$$diff(comparer$$10, a$$2, b$$2) {
  return SetTreeModule$$$diffAux(comparer$$10, b$$2, a$$2);
}
function SetTreeModule$$$union(comparer$$11, t1$$4, t2$$4) {
  var $target$$73, h1$$1, h2$$1, k1$$4, k2$$16, t11$$2, t12$$2, t21$$1, t22$$1, t$$7, t$$8, k1$$5, t2$$5, k2$$17, t1$$5;

  if (t1$$4.tag === 0) {
    $target$$73 = 1;
    t$$7 = t2$$4;
  } else if (t1$$4.tag === 2) {
    if (t2$$4.tag === 0) {
      $target$$73 = 2;
      t$$8 = t1$$4;
    } else if (t2$$4.tag === 2) {
      $target$$73 = 3;
      k1$$5 = t1$$4.fields[0];
      t2$$5 = t2$$4;
    } else {
      $target$$73 = 3;
      k1$$5 = t1$$4.fields[0];
      t2$$5 = t2$$4;
    }
  } else if (t2$$4.tag === 0) {
    $target$$73 = 2;
    t$$8 = t1$$4;
  } else if (t2$$4.tag === 2) {
    $target$$73 = 4;
    k2$$17 = t2$$4.fields[0];
    t1$$5 = t1$$4;
  } else {
    $target$$73 = 0;
    h1$$1 = t1$$4.fields[3];
    h2$$1 = t2$$4.fields[3];
    k1$$4 = t1$$4.fields[0];
    k2$$16 = t2$$4.fields[0];
    t11$$2 = t1$$4.fields[1];
    t12$$2 = t1$$4.fields[2];
    t21$$1 = t2$$4.fields[1];
    t22$$1 = t2$$4.fields[2];
  }

  switch ($target$$73) {
    case 0:
      {
        if (h1$$1 > h2$$1) {
          var patternInput$$4 = SetTreeModule$$$split(comparer$$11, k1$$4, t2$$4);
          return SetTreeModule$$$balance(comparer$$11, SetTreeModule$$$union(comparer$$11, t11$$2, patternInput$$4[0]), k1$$4, SetTreeModule$$$union(comparer$$11, t12$$2, patternInput$$4[2]));
        } else {
          var patternInput$$5 = SetTreeModule$$$split(comparer$$11, k2$$16, t1$$4);
          return SetTreeModule$$$balance(comparer$$11, SetTreeModule$$$union(comparer$$11, t21$$1, patternInput$$5[0]), k2$$16, SetTreeModule$$$union(comparer$$11, t22$$1, patternInput$$5[2]));
        }
      }

    case 1:
      {
        return t$$7;
      }

    case 2:
      {
        return t$$8;
      }

    case 3:
      {
        return SetTreeModule$$$add(comparer$$11, k1$$5, t2$$5);
      }

    case 4:
      {
        return SetTreeModule$$$add(comparer$$11, k2$$17, t1$$5);
      }
  }
}
function SetTreeModule$$$intersectionAux($comparer$$12$$74, $b$$3$$75, $m$$7$$76, $acc$$4$$77) {
  SetTreeModule$$$intersectionAux: while (true) {
    var comparer$$12 = $comparer$$12$$74,
        b$$3 = $b$$3$$75,
        m$$7 = $m$$7$$76,
        acc$$4 = $acc$$4$$77;

    switch (m$$7.tag) {
      case 2:
        {
          if (SetTreeModule$$$mem(comparer$$12, m$$7.fields[0], b$$3)) {
            return SetTreeModule$$$add(comparer$$12, m$$7.fields[0], acc$$4);
          } else {
            return acc$$4;
          }
        }

      case 0:
        {
          return acc$$4;
        }

      default:
        {
          var acc$$5 = SetTreeModule$$$intersectionAux(comparer$$12, b$$3, m$$7.fields[2], acc$$4);
          var acc$$6 = SetTreeModule$$$mem(comparer$$12, m$$7.fields[0], b$$3) ? SetTreeModule$$$add(comparer$$12, m$$7.fields[0], acc$$5) : acc$$5;
          $comparer$$12$$74 = comparer$$12;
          $b$$3$$75 = b$$3;
          $m$$7$$76 = m$$7.fields[1];
          $acc$$4$$77 = acc$$6;
          continue SetTreeModule$$$intersectionAux;
        }
    }

    break;
  }
}
function SetTreeModule$$$intersection(comparer$$13, a$$3, b$$4) {
  return SetTreeModule$$$intersectionAux(comparer$$13, b$$4, a$$3, new SetTree$00601(0, "SetEmpty"));
}
function SetTreeModule$$$partition1(comparer$$14, f$$7, k$$16, acc1, acc2) {
  if (f$$7(k$$16)) {
    return [SetTreeModule$$$add(comparer$$14, k$$16, acc1), acc2];
  } else {
    return [acc1, SetTreeModule$$$add(comparer$$14, k$$16, acc2)];
  }
}
function SetTreeModule$$$partitionAux($comparer$$15$$86, $f$$8$$87, $s$$4$$88, $acc_0$$89, $acc_1$$90) {
  SetTreeModule$$$partitionAux: while (true) {
    var comparer$$15 = $comparer$$15$$86,
        f$$8 = $f$$8$$87,
        s$$4 = $s$$4$$88,
        acc_0 = $acc_0$$89,
        acc_1 = $acc_1$$90;

    switch (s$$4.tag) {
      case 2:
        {
          return SetTreeModule$$$partition1(comparer$$15, f$$8, s$$4.fields[0], acc_0, acc_1);
        }

      case 0:
        {
          return [acc_0, acc_1];
        }

      default:
        {
          var acc$$8 = SetTreeModule$$$partitionAux(comparer$$15, f$$8, s$$4.fields[2], acc_0, acc_1);
          var acc$$9 = SetTreeModule$$$partition1(comparer$$15, f$$8, s$$4.fields[0], acc$$8[0], acc$$8[1]);
          $comparer$$15$$86 = comparer$$15;
          $f$$8$$87 = f$$8;
          $s$$4$$88 = s$$4.fields[1];
          $acc_0$$89 = acc$$9[0];
          $acc_1$$90 = acc$$9[1];
          continue SetTreeModule$$$partitionAux;
        }
    }

    break;
  }
}
function SetTreeModule$$$partition(comparer$$16, f$$9, s$$5) {
  var seed = [new SetTree$00601(0, "SetEmpty"), new SetTree$00601(0, "SetEmpty")];
  return SetTreeModule$$$partitionAux(comparer$$16, f$$9, s$$5, seed[0], seed[1]);
}
function SetTreeModule$$$$007CMatchSetNode$007CMatchSetEmpty$007C(s$$6) {
  switch (s$$6.tag) {
    case 2:
      {
        return new Option_Choice(0, "Choice1Of2", [s$$6.fields[0], new SetTree$00601(0, "SetEmpty"), new SetTree$00601(0, "SetEmpty")]);
      }

    case 0:
      {
        return new Option_Choice(1, "Choice2Of2", null);
      }

    default:
      {
        return new Option_Choice(0, "Choice1Of2", [s$$6.fields[0], s$$6.fields[1], s$$6.fields[2]]);
      }
  }
}
function SetTreeModule$$$minimumElementAux($s$$7$$95, $n$$1$$96) {
  SetTreeModule$$$minimumElementAux: while (true) {
    var s$$7 = $s$$7$$95,
        n$$1 = $n$$1$$96;

    switch (s$$7.tag) {
      case 2:
        {
          return s$$7.fields[0];
        }

      case 0:
        {
          return n$$1;
        }

      default:
        {
          $s$$7$$95 = s$$7.fields[1];
          $n$$1$$96 = s$$7.fields[0];
          continue SetTreeModule$$$minimumElementAux;
        }
    }

    break;
  }
}
function SetTreeModule$$$minimumElementOpt(s$$8) {
  switch (s$$8.tag) {
    case 2:
      {
        return some(s$$8.fields[0]);
      }

    case 0:
      {
        return null;
      }

    default:
      {
        return some(SetTreeModule$$$minimumElementAux(s$$8.fields[1], s$$8.fields[0]));
      }
  }
}
function SetTreeModule$$$maximumElementAux($s$$9$$98, $n$$2$$99) {
  SetTreeModule$$$maximumElementAux: while (true) {
    var s$$9 = $s$$9$$98,
        n$$2 = $n$$2$$99;

    switch (s$$9.tag) {
      case 2:
        {
          return s$$9.fields[0];
        }

      case 0:
        {
          return n$$2;
        }

      default:
        {
          $s$$9$$98 = s$$9.fields[2];
          $n$$2$$99 = s$$9.fields[0];
          continue SetTreeModule$$$maximumElementAux;
        }
    }

    break;
  }
}
function SetTreeModule$$$maximumElementOpt(s$$10) {
  switch (s$$10.tag) {
    case 2:
      {
        return some(s$$10.fields[0]);
      }

    case 0:
      {
        return null;
      }

    default:
      {
        return some(SetTreeModule$$$maximumElementAux(s$$10.fields[2], s$$10.fields[0]));
      }
  }
}
function SetTreeModule$$$minimumElement(s$$11) {
  var matchValue$$4 = SetTreeModule$$$minimumElementOpt(s$$11);

  if (matchValue$$4 == null) {
    throw new Error("Set contains no elements");
  } else {
    var k$$27 = Option_value(matchValue$$4);
    return k$$27;
  }
}
function SetTreeModule$$$maximumElement(s$$12) {
  var matchValue$$5 = SetTreeModule$$$maximumElementOpt(s$$12);

  if (matchValue$$5 == null) {
    throw new Error("Set contains no elements");
  } else {
    var k$$28 = Option_value(matchValue$$5);
    return k$$28;
  }
}
var SetTreeModule$002ESetIterator$00601 = declare(function Set_SetTreeModule_SetIterator(arg1, arg2) {
  this.stack = arg1;
  this.started = arg2;
}, Record);
function SetTreeModule$002ESetIterator$00601$reflection($gen$$103) {
  return record("Set.SetTreeModule.SetIterator`1", [$gen$$103], SetTreeModule$002ESetIterator$00601, function () {
    return [["stack", list(SetTree$00601$reflection($gen$$103))], ["started", bool]];
  });
}
function SetTreeModule$$$collapseLHS($stack$$104) {
  SetTreeModule$$$collapseLHS: while (true) {
    var stack = $stack$$104;

    if (stack.tail != null) {
      if (stack.head.tag === 2) {
        return stack;
      } else if (stack.head.tag === 1) {
        $stack$$104 = new List(stack.head.fields[1], new List(SetTreeModule$$$SetOne(stack.head.fields[0]), new List(stack.head.fields[2], stack.tail)));
        continue SetTreeModule$$$collapseLHS;
      } else {
        $stack$$104 = stack.tail;
        continue SetTreeModule$$$collapseLHS;
      }
    } else {
      return new List();
    }

    break;
  }
}
function SetTreeModule$$$mkIterator(s$$13) {
  return new SetTreeModule$002ESetIterator$00601(SetTreeModule$$$collapseLHS(new List(s$$13, new List())), false);
}
function SetTreeModule$$$notStarted() {
  throw new Error("Enumeration not started");
}
function SetTreeModule$$$alreadyFinished() {
  throw new Error("Enumeration already started");
}
function SetTreeModule$$$current(i) {
  if (i.started) {
    var matchValue$$6 = i.stack;

    if (matchValue$$6.tail == null) {
      return SetTreeModule$$$alreadyFinished();
    } else if (matchValue$$6.head.tag === 2) {
      return matchValue$$6.head.fields[0];
    } else {
      throw new Error("Please report error: Set iterator, unexpected stack for current");
    }
  } else {
    return SetTreeModule$$$notStarted();
  }
}
function SetTreeModule$$$moveNext(i$$1) {
  if (i$$1.started) {
    var matchValue$$7 = i$$1.stack;

    if (matchValue$$7.tail == null) {
      return false;
    } else if (matchValue$$7.head.tag === 2) {
      i$$1.stack = SetTreeModule$$$collapseLHS(matchValue$$7.tail);
      return !(i$$1.stack.tail == null);
    } else {
      throw new Error("Please report error: Set iterator, unexpected stack for moveNext");
    }
  } else {
    i$$1.started = true;
    return !(i$$1.stack.tail == null);
  }
}
var SetTreeModule$002EmkIEnumerator$00601 = declare(function Set_SetTreeModule_mkIEnumerator(s$$14) {
  var $this$$1 = this;
  $this$$1.s = s$$14;
  $this$$1.i = SetTreeModule$$$mkIterator($this$$1.s);
});
function SetTreeModule$002EmkIEnumerator$00601$reflection($gen$$108) {
  return type("Set.SetTreeModule.mkIEnumerator`1", [$gen$$108]);
}
function SetTreeModule$002EmkIEnumerator$00601$$$$002Ector$$Z5B395D56(s$$14) {
  return this instanceof SetTreeModule$002EmkIEnumerator$00601 ? SetTreeModule$002EmkIEnumerator$00601.call(this, s$$14) : new SetTreeModule$002EmkIEnumerator$00601(s$$14);
}
Object.defineProperty(SetTreeModule$002EmkIEnumerator$00601.prototype, "Current", {
  "get": function get() {
    var __ = this;

    return SetTreeModule$$$current(__.i);
  }
});

SetTreeModule$002EmkIEnumerator$00601.prototype.MoveNext = function () {
  var __$$1 = this;

  return SetTreeModule$$$moveNext(__$$1.i);
};

SetTreeModule$002EmkIEnumerator$00601.prototype.Reset = function () {
  var __$$2 = this;

  __$$2.i = SetTreeModule$$$mkIterator(__$$2.s);
};

SetTreeModule$002EmkIEnumerator$00601.prototype.Dispose = function () {};

function SetTreeModule$$$mkIEnumerator(s$$15) {
  return SetTreeModule$002EmkIEnumerator$00601$$$$002Ector$$Z5B395D56(s$$15);
}
function SetTreeModule$$$toSeq(s$$16) {
  var en = SetTreeModule$$$mkIEnumerator(s$$16);
  return unfold(function generator(en$$1) {
    if (en$$1.MoveNext()) {
      return [en$$1.Current, en$$1];
    } else {
      return null;
    }
  }, en);
}
function SetTreeModule$$$compareStacks($comparer$$17$$112, $l1$$113, $l2$$114) {
  SetTreeModule$$$compareStacks: while (true) {
    var comparer$$17 = $comparer$$17$$112,
        l1 = $l1$$113,
        l2 = $l2$$114;
    var $target$$115, t1$$6, t2$$6, n1k, n2k, t1$$7, t2$$7, n1k$$1, n2k$$1, n2r, t1$$8, t2$$8, emp, n1k$$2, n1r, n2k$$2, t1$$9, t2$$9, n1k$$3, n1r$$1, n2k$$3, n2r$$1, t1$$10, t2$$10, n1k$$4, t1$$11, n1k$$5, n1l, n1r$$2, t1$$12, n2k$$4, t2$$11, n2k$$5, n2l, n2r$$2, t2$$12;

    if (l1.tail != null) {
      if (l2.tail != null) {
        if (l2.head.tag === 2) {
          if (l1.head.tag === 2) {
            $target$$115 = 4;
            n1k = l1.head.fields[0];
            n2k = l2.head.fields[0];
            t1$$7 = l1.tail;
            t2$$7 = l2.tail;
          } else if (l1.head.tag === 1) {
            if (l1.head.fields[1].tag === 0) {
              $target$$115 = 6;
              emp = l1.head.fields[1];
              n1k$$2 = l1.head.fields[0];
              n1r = l1.head.fields[2];
              n2k$$2 = l2.head.fields[0];
              t1$$9 = l1.tail;
              t2$$9 = l2.tail;
            } else {
              $target$$115 = 9;
              n1k$$5 = l1.head.fields[0];
              n1l = l1.head.fields[1];
              n1r$$2 = l1.head.fields[2];
              t1$$12 = l1.tail;
            }
          } else {
            $target$$115 = 10;
            n2k$$4 = l2.head.fields[0];
            t2$$11 = l2.tail;
          }
        } else if (l2.head.tag === 1) {
          if (l2.head.fields[1].tag === 0) {
            if (l1.head.tag === 2) {
              $target$$115 = 5;
              n1k$$1 = l1.head.fields[0];
              n2k$$1 = l2.head.fields[0];
              n2r = l2.head.fields[2];
              t1$$8 = l1.tail;
              t2$$8 = l2.tail;
            } else if (l1.head.tag === 1) {
              if (l1.head.fields[1].tag === 0) {
                $target$$115 = 7;
                n1k$$3 = l1.head.fields[0];
                n1r$$1 = l1.head.fields[2];
                n2k$$3 = l2.head.fields[0];
                n2r$$1 = l2.head.fields[2];
                t1$$10 = l1.tail;
                t2$$10 = l2.tail;
              } else {
                $target$$115 = 9;
                n1k$$5 = l1.head.fields[0];
                n1l = l1.head.fields[1];
                n1r$$2 = l1.head.fields[2];
                t1$$12 = l1.tail;
              }
            } else {
              $target$$115 = 11;
              n2k$$5 = l2.head.fields[0];
              n2l = l2.head.fields[1];
              n2r$$2 = l2.head.fields[2];
              t2$$12 = l2.tail;
            }
          } else if (l1.head.tag === 2) {
            $target$$115 = 8;
            n1k$$4 = l1.head.fields[0];
            t1$$11 = l1.tail;
          } else if (l1.head.tag === 1) {
            $target$$115 = 9;
            n1k$$5 = l1.head.fields[0];
            n1l = l1.head.fields[1];
            n1r$$2 = l1.head.fields[2];
            t1$$12 = l1.tail;
          } else {
            $target$$115 = 11;
            n2k$$5 = l2.head.fields[0];
            n2l = l2.head.fields[1];
            n2r$$2 = l2.head.fields[2];
            t2$$12 = l2.tail;
          }
        } else if (l1.head.tag === 2) {
          $target$$115 = 8;
          n1k$$4 = l1.head.fields[0];
          t1$$11 = l1.tail;
        } else if (l1.head.tag === 1) {
          $target$$115 = 9;
          n1k$$5 = l1.head.fields[0];
          n1l = l1.head.fields[1];
          n1r$$2 = l1.head.fields[2];
          t1$$12 = l1.tail;
        } else {
          $target$$115 = 3;
          t1$$6 = l1.tail;
          t2$$6 = l2.tail;
        }
      } else {
        $target$$115 = 2;
      }
    } else if (l2.tail != null) {
      $target$$115 = 1;
    } else {
      $target$$115 = 0;
    }

    switch ($target$$115) {
      case 0:
        {
          return 0;
        }

      case 1:
        {
          return -1 | 0;
        }

      case 2:
        {
          return 1;
        }

      case 3:
        {
          $comparer$$17$$112 = comparer$$17;
          $l1$$113 = t1$$6;
          $l2$$114 = t2$$6;
          continue SetTreeModule$$$compareStacks;
        }

      case 4:
        {
          var c$$7 = comparer$$17.Compare(n1k, n2k) | 0;

          if (c$$7 !== 0) {
            return c$$7 | 0;
          } else {
            $comparer$$17$$112 = comparer$$17;
            $l1$$113 = t1$$7;
            $l2$$114 = t2$$7;
            continue SetTreeModule$$$compareStacks;
          }
        }

      case 5:
        {
          var c$$8 = comparer$$17.Compare(n1k$$1, n2k$$1) | 0;

          if (c$$8 !== 0) {
            return c$$8 | 0;
          } else {
            $comparer$$17$$112 = comparer$$17;
            $l1$$113 = new List(new SetTree$00601(0, "SetEmpty"), t1$$8);
            $l2$$114 = new List(n2r, t2$$8);
            continue SetTreeModule$$$compareStacks;
          }
        }

      case 6:
        {
          var c$$9 = comparer$$17.Compare(n1k$$2, n2k$$2) | 0;

          if (c$$9 !== 0) {
            return c$$9 | 0;
          } else {
            $comparer$$17$$112 = comparer$$17;
            $l1$$113 = new List(n1r, t1$$9);
            $l2$$114 = new List(emp, t2$$9);
            continue SetTreeModule$$$compareStacks;
          }
        }

      case 7:
        {
          var c$$10 = comparer$$17.Compare(n1k$$3, n2k$$3) | 0;

          if (c$$10 !== 0) {
            return c$$10 | 0;
          } else {
            $comparer$$17$$112 = comparer$$17;
            $l1$$113 = new List(n1r$$1, t1$$10);
            $l2$$114 = new List(n2r$$1, t2$$10);
            continue SetTreeModule$$$compareStacks;
          }
        }

      case 8:
        {
          $comparer$$17$$112 = comparer$$17;
          $l1$$113 = new List(new SetTree$00601(0, "SetEmpty"), new List(SetTreeModule$$$SetOne(n1k$$4), t1$$11));
          $l2$$114 = l2;
          continue SetTreeModule$$$compareStacks;
        }

      case 9:
        {
          $comparer$$17$$112 = comparer$$17;
          $l1$$113 = new List(n1l, new List(SetTreeModule$$$SetNode(n1k$$5, new SetTree$00601(0, "SetEmpty"), n1r$$2, 0), t1$$12));
          $l2$$114 = l2;
          continue SetTreeModule$$$compareStacks;
        }

      case 10:
        {
          $comparer$$17$$112 = comparer$$17;
          $l1$$113 = l1;
          $l2$$114 = new List(new SetTree$00601(0, "SetEmpty"), new List(SetTreeModule$$$SetOne(n2k$$4), t2$$11));
          continue SetTreeModule$$$compareStacks;
        }

      case 11:
        {
          $comparer$$17$$112 = comparer$$17;
          $l1$$113 = l1;
          $l2$$114 = new List(n2l, new List(SetTreeModule$$$SetNode(n2k$$5, new SetTree$00601(0, "SetEmpty"), n2r$$2, 0), t2$$12));
          continue SetTreeModule$$$compareStacks;
        }
    }

    break;
  }
}
function SetTreeModule$$$compare(comparer$$18, s1, s2) {
  if (s1.tag === 0) {
    if (s2.tag === 0) {
      return 0;
    } else {
      return -1 | 0;
    }
  } else if (s2.tag === 0) {
    return 1;
  } else {
    return SetTreeModule$$$compareStacks(comparer$$18, new List(s1, new List()), new List(s2, new List())) | 0;
  }
}
function SetTreeModule$$$choose(s$$17) {
  return SetTreeModule$$$minimumElement(s$$17);
}
function SetTreeModule$$$loop($m$$8$$120, $acc$$10$$121) {
  SetTreeModule$$$loop: while (true) {
    var m$$8 = $m$$8$$120,
        acc$$10 = $acc$$10$$121;

    switch (m$$8.tag) {
      case 2:
        {
          return new List(m$$8.fields[0], acc$$10);
        }

      case 0:
        {
          return acc$$10;
        }

      default:
        {
          $m$$8$$120 = m$$8.fields[1];
          $acc$$10$$121 = new List(m$$8.fields[0], SetTreeModule$$$loop(m$$8.fields[2], acc$$10));
          continue SetTreeModule$$$loop;
        }
    }

    break;
  }
}
function SetTreeModule$$$toList(s$$18) {
  return SetTreeModule$$$loop(s$$18, new List());
}
function SetTreeModule$$$copyToArray(s$$19, arr, i$$2) {
  var j = i$$2 | 0;
  SetTreeModule$$$iter(function (x$$8) {
    arr[j] = x$$8;
    j = j + 1;
  }, s$$19);
}
function SetTreeModule$$$mkFromEnumerator($comparer$$19$$126, $acc$$11$$127, $e$$128) {
  SetTreeModule$$$mkFromEnumerator: while (true) {
    var comparer$$19 = $comparer$$19$$126,
        acc$$11 = $acc$$11$$127,
        e = $e$$128;

    if (e.MoveNext()) {
      $comparer$$19$$126 = comparer$$19;
      $acc$$11$$127 = SetTreeModule$$$add(comparer$$19, e.Current, acc$$11);
      $e$$128 = e;
      continue SetTreeModule$$$mkFromEnumerator;
    } else {
      return acc$$11;
    }

    break;
  }
}
function SetTreeModule$$$ofSeq(comparer$$20, c$$11) {
  var ie = getEnumerator(c$$11);

  try {
    return SetTreeModule$$$mkFromEnumerator(comparer$$20, new SetTree$00601(0, "SetEmpty"), ie);
  } finally {
    if (isDisposable(ie)) {
      ie.Dispose();
    }
  }
}
function SetTreeModule$$$ofArray(comparer$$21, arr$$1) {
  var acc$$12 = new SetTree$00601(0, "SetEmpty");

  for (var i$$3 = 0; i$$3 <= arr$$1.length - 1; i$$3++) {
    acc$$12 = SetTreeModule$$$add(comparer$$21, arr$$1[i$$3], acc$$12);
  }

  return acc$$12;
}
var FSharpSet = declare(function Set_Set(comparer$$22, tree) {
  var $this$$2 = this;
  $this$$2.comparer = comparer$$22;
  $this$$2.tree = tree;
});
function FSharpSet$reflection($gen$$133) {
  return type("Set.FSharpSet", [$gen$$133]);
}
function FSharpSet$$$$002Ector$$2528C5CB(comparer$$22, tree) {
  return this instanceof FSharpSet ? FSharpSet.call(this, comparer$$22, tree) : new FSharpSet(comparer$$22, tree);
}
function FSharpSet$$get_Comparer(__$$4) {
  return __$$4.comparer;
}
function FSharpSet$$get_Tree(__$$5) {
  return __$$5.tree;
}
function FSharpSet$$Add$$2B595(s$$20, x$$9) {
  return FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(s$$20), SetTreeModule$$$add(FSharpSet$$get_Comparer(s$$20), x$$9, FSharpSet$$get_Tree(s$$20)));
}
function FSharpSet$$Remove$$2B595(s$$21, x$$10) {
  return FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(s$$21), SetTreeModule$$$remove(FSharpSet$$get_Comparer(s$$21), x$$10, FSharpSet$$get_Tree(s$$21)));
}
function FSharpSet$$get_Count(s$$22) {
  return SetTreeModule$$$count(FSharpSet$$get_Tree(s$$22));
}
function FSharpSet$$Contains$$2B595(s$$23, x$$11) {
  return SetTreeModule$$$mem(FSharpSet$$get_Comparer(s$$23), x$$11, FSharpSet$$get_Tree(s$$23));
}
function FSharpSet$$Iterate$$5028453F(s$$24, x$$12) {
  SetTreeModule$$$iter(x$$12, FSharpSet$$get_Tree(s$$24));
}
function FSharpSet$$Fold(s$$25, f$$10, z) {
  return SetTreeModule$$$fold(function (x$$13, z$$1) {
    return f$$10(z$$1, x$$13);
  }, z, FSharpSet$$get_Tree(s$$25));
}
function FSharpSet$$get_IsEmpty(s$$26) {
  return SetTreeModule$$$isEmpty(FSharpSet$$get_Tree(s$$26));
}
function FSharpSet$$Partition$$Z1D55A0D7(s$$27, f$$11) {
  var matchValue$$10 = FSharpSet$$get_Tree(s$$27);

  if (matchValue$$10.tag === 0) {
    return [s$$27, s$$27];
  } else {
    var patternInput$$6 = SetTreeModule$$$partition(FSharpSet$$get_Comparer(s$$27), f$$11, FSharpSet$$get_Tree(s$$27));
    return [FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(s$$27), patternInput$$6[0]), FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(s$$27), patternInput$$6[1])];
  }
}
function FSharpSet$$Filter$$Z1D55A0D7(s$$28, f$$12) {
  var matchValue$$11 = FSharpSet$$get_Tree(s$$28);

  if (matchValue$$11.tag === 0) {
    return s$$28;
  } else {
    return FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(s$$28), SetTreeModule$$$filter(FSharpSet$$get_Comparer(s$$28), f$$12, FSharpSet$$get_Tree(s$$28)));
  }
}
function FSharpSet$$Map$$7597B8F7(s$$29, f$$13, comparer$$23) {
  return FSharpSet$$$$002Ector$$2528C5CB(comparer$$23, SetTreeModule$$$fold(function (acc$$13, k$$33) {
    return SetTreeModule$$$add(comparer$$23, f$$13(k$$33), acc$$13);
  }, new SetTree$00601(0, "SetEmpty"), FSharpSet$$get_Tree(s$$29)));
}
function FSharpSet$$Exists$$Z1D55A0D7(s$$30, f$$14) {
  return SetTreeModule$$$exists(f$$14, FSharpSet$$get_Tree(s$$30));
}
function FSharpSet$$ForAll$$Z1D55A0D7(s$$31, f$$15) {
  return SetTreeModule$$$forall(f$$15, FSharpSet$$get_Tree(s$$31));
}
function FSharpSet$$$op_Subtraction(a$$4, b$$5) {
  var matchValue$$12 = FSharpSet$$get_Tree(a$$4);

  if (matchValue$$12.tag === 0) {
    return a$$4;
  } else {
    var matchValue$$13 = FSharpSet$$get_Tree(b$$5);

    if (matchValue$$13.tag === 0) {
      return a$$4;
    } else {
      return FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(a$$4), SetTreeModule$$$diff(FSharpSet$$get_Comparer(a$$4), FSharpSet$$get_Tree(a$$4), FSharpSet$$get_Tree(b$$5)));
    }
  }
}
function FSharpSet$$$op_Addition(a$$5, b$$6) {
  var matchValue$$14 = FSharpSet$$get_Tree(b$$6);

  if (matchValue$$14.tag === 0) {
    return a$$5;
  } else {
    var matchValue$$15 = FSharpSet$$get_Tree(a$$5);

    if (matchValue$$15.tag === 0) {
      return b$$6;
    } else {
      return FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(a$$5), SetTreeModule$$$union(FSharpSet$$get_Comparer(a$$5), FSharpSet$$get_Tree(a$$5), FSharpSet$$get_Tree(b$$6)));
    }
  }
}
function FSharpSet$$$Intersection$$Z3BE9BFE0(a$$6, b$$7) {
  var matchValue$$16 = FSharpSet$$get_Tree(b$$7);

  if (matchValue$$16.tag === 0) {
    return b$$7;
  } else {
    var matchValue$$17 = FSharpSet$$get_Tree(a$$6);

    if (matchValue$$17.tag === 0) {
      return a$$6;
    } else {
      return FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(a$$6), SetTreeModule$$$intersection(FSharpSet$$get_Comparer(a$$6), FSharpSet$$get_Tree(a$$6), FSharpSet$$get_Tree(b$$7)));
    }
  }
}
function FSharpSet$$$IntersectionMany$$Z15B59630(sets) {
  return reduce(FSharpSet$$$Intersection$$Z3BE9BFE0, sets);
}
function FSharpSet$$$Equality$$Z3BE9BFE0(a$$7, b$$8) {
  return SetTreeModule$$$compare(FSharpSet$$get_Comparer(a$$7), FSharpSet$$get_Tree(a$$7), FSharpSet$$get_Tree(b$$8)) === 0;
}
function FSharpSet$$$Compare$$Z3BE9BFE0(a$$8, b$$9) {
  return SetTreeModule$$$compare(FSharpSet$$get_Comparer(a$$8), FSharpSet$$get_Tree(a$$8), FSharpSet$$get_Tree(b$$9));
}
function FSharpSet$$get_Choose(x$$14) {
  return SetTreeModule$$$choose(FSharpSet$$get_Tree(x$$14));
}
function FSharpSet$$get_MinimumElement(x$$15) {
  return SetTreeModule$$$minimumElement(FSharpSet$$get_Tree(x$$15));
}
function FSharpSet$$get_MaximumElement(x$$16) {
  return SetTreeModule$$$maximumElement(FSharpSet$$get_Tree(x$$16));
}
function FSharpSet$$IsSubsetOf$$6A20B1FF(x$$17, y) {
  return SetTreeModule$$$subset(FSharpSet$$get_Comparer(x$$17), FSharpSet$$get_Tree(x$$17), FSharpSet$$get_Tree(y));
}
function FSharpSet$$IsSupersetOf$$6A20B1FF(x$$18, y$$1) {
  return SetTreeModule$$$subset(FSharpSet$$get_Comparer(x$$18), FSharpSet$$get_Tree(y$$1), FSharpSet$$get_Tree(x$$18));
}
function FSharpSet$$IsProperSubsetOf$$6A20B1FF(x$$19, y$$2) {
  return SetTreeModule$$$psubset(FSharpSet$$get_Comparer(x$$19), FSharpSet$$get_Tree(x$$19), FSharpSet$$get_Tree(y$$2));
}
function FSharpSet$$IsProperSupersetOf$$6A20B1FF(x$$20, y$$3) {
  return SetTreeModule$$$psubset(FSharpSet$$get_Comparer(x$$20), FSharpSet$$get_Tree(y$$3), FSharpSet$$get_Tree(x$$20));
}

FSharpSet.prototype.toString = function () {
  var strings;
  var this$ = this;
  return "set [" + (strings = Seq_map(function (x$$21) {
    var copyOfStruct = x$$21;
    return String(copyOfStruct);
  }, this$), join("; ", strings)) + "]";
};

FSharpSet.prototype.GetHashCode = function () {
  var this$$$1 = this;
  var res = 0;
  var e$$1 = SetTreeModule$$$mkIEnumerator(FSharpSet$$get_Tree(this$$$1));

  while (e$$1.MoveNext()) {
    var x$$22 = res | 0;
    var y$$4 = structuralHash(e$$1.Current) | 0;
    res = (x$$22 << 1) + y$$4 + 631;
  }

  return Math.abs(res) | 0;
};

FSharpSet.prototype.Equals = function (that) {
  var this$$$2 = this;
  return SetTreeModule$$$compare(FSharpSet$$get_Comparer(this$$$2), FSharpSet$$get_Tree(this$$$2), FSharpSet$$get_Tree(that)) === 0;
};

FSharpSet.prototype.CompareTo = function (that$$1) {
  var this$$$3 = this;
  return SetTreeModule$$$compare(FSharpSet$$get_Comparer(this$$$3), FSharpSet$$get_Tree(this$$$3), FSharpSet$$get_Tree(that$$1)) | 0;
};

FSharpSet.prototype[Symbol.iterator] = function () {
  var s$$32 = this;
  return toIterator(SetTreeModule$$$mkIEnumerator(FSharpSet$$get_Tree(s$$32)));
};

function Set_isEmpty(s$$33) {
  return FSharpSet$$get_IsEmpty(s$$33);
}
function Set_contains(x$$23, s$$34) {
  return FSharpSet$$Contains$$2B595(s$$34, x$$23);
}
function Set_add(x$$24, s$$35) {
  return FSharpSet$$Add$$2B595(s$$35, x$$24);
}
function Set_singleton(x$$25, comparer$$24) {
  return FSharpSet$$$$002Ector$$2528C5CB(comparer$$24, new SetTree$00601(2, "SetOne", x$$25));
}
function Set_remove(x$$26, s$$36) {
  return FSharpSet$$Remove$$2B595(s$$36, x$$26);
}
function Set_union(s1$$2, s2$$2) {
  return FSharpSet$$$op_Addition(s1$$2, s2$$2);
}
function unionMany(sets$$1, comparer$$25) {
  return fold(FSharpSet$$$op_Addition, FSharpSet$$$$002Ector$$2528C5CB(comparer$$25, new SetTree$00601(0, "SetEmpty")), sets$$1);
}
function intersect(s1$$3, s2$$3) {
  return FSharpSet$$$Intersection$$Z3BE9BFE0(s1$$3, s2$$3);
}
function intersectMany(sets$$2) {
  return FSharpSet$$$IntersectionMany$$Z15B59630(sets$$2);
}
function Set_iterate(f$$16, s$$37) {
  FSharpSet$$Iterate$$5028453F(s$$37, f$$16);
}
function Set_empty(comparer$$26) {
  return FSharpSet$$$$002Ector$$2528C5CB(comparer$$26, new SetTree$00601(0, "SetEmpty"));
}
function Set_forAll(f$$17, s$$38) {
  return FSharpSet$$ForAll$$Z1D55A0D7(s$$38, f$$17);
}
function Set_exists(f$$18, s$$39) {
  return FSharpSet$$Exists$$Z1D55A0D7(s$$39, f$$18);
}
function Set_filter(f$$19, s$$40) {
  return FSharpSet$$Filter$$Z1D55A0D7(s$$40, f$$19);
}
function Set_partition(f$$20, s$$41) {
  return FSharpSet$$Partition$$Z1D55A0D7(s$$41, f$$20);
}
function Set_fold(f$$21, z$$2, s$$42) {
  return SetTreeModule$$$fold(f$$21, z$$2, FSharpSet$$get_Tree(s$$42));
}
function Set_foldBack(f$$22, s$$43, z$$3) {
  return SetTreeModule$$$foldBack(f$$22, FSharpSet$$get_Tree(s$$43), z$$3);
}
function Set_map(f$$23, s$$44, comparer$$27) {
  return FSharpSet$$Map$$7597B8F7(s$$44, f$$23, comparer$$27);
}
function Set_count(s$$45) {
  return FSharpSet$$get_Count(s$$45);
}
function minimumElement(s$$46) {
  return FSharpSet$$get_MinimumElement(s$$46);
}
function maximumElement(s$$47) {
  return FSharpSet$$get_MaximumElement(s$$47);
}
function Set_ofList(li, comparer$$28) {
  return FSharpSet$$$$002Ector$$2528C5CB(comparer$$28, SetTreeModule$$$ofSeq(comparer$$28, li));
}
function Set_ofArray(arr$$2, comparer$$29) {
  return FSharpSet$$$$002Ector$$2528C5CB(comparer$$29, SetTreeModule$$$ofArray(comparer$$29, arr$$2));
}
function Set_toList(s$$48) {
  return SetTreeModule$$$toList(FSharpSet$$get_Tree(s$$48));
}
function Set_toArray(s$$49, cons) {
  var n$$3 = Set_count(s$$49) | 0;
  var res$$1 = new cons(n$$3);
  SetTreeModule$$$copyToArray(FSharpSet$$get_Tree(s$$49), res$$1, 0);
  return res$$1;
}
function Set_toSeq(s$$50) {
  return SetTreeModule$$$toSeq(FSharpSet$$get_Tree(s$$50));
}
function Set_ofSeq(elements, comparer$$30) {
  return FSharpSet$$$$002Ector$$2528C5CB(comparer$$30, SetTreeModule$$$ofSeq(comparer$$30, elements));
}
function difference(x$$28, y$$6) {
  return FSharpSet$$$op_Subtraction(x$$28, y$$6);
}
function isSubset(x$$29, y$$7) {
  return FSharpSet$$IsSubsetOf$$6A20B1FF(x$$29, y$$7);
}
function isSuperset(x$$30, y$$8) {
  return FSharpSet$$IsSupersetOf$$6A20B1FF(x$$30, y$$8);
}
function isProperSubset(x$$31, y$$9) {
  return FSharpSet$$IsProperSubsetOf$$6A20B1FF(x$$31, y$$9);
}
function isProperSuperset(x$$32, y$$10) {
  return FSharpSet$$IsProperSupersetOf$$6A20B1FF(x$$32, y$$10);
}
function minElement(s$$51) {
  return FSharpSet$$get_MinimumElement(s$$51);
}
function maxElement(s$$52) {
  return FSharpSet$$get_MaximumElement(s$$52);
}

function Set_createMutablePrivate(comparer$$31, tree$0027) {
  var _ref;

  var tree$$1 = tree$0027;
  return _ref = {
    get size() {
      return SetTreeModule$$$count(tree$$1);
    },

    add: function add(x$$33) {
      var this$$$4 = this;
      tree$$1 = SetTreeModule$$$add(comparer$$31, x$$33, tree$$1);
      return this$$$4;
    },
    add_: function add_(x$$34) {
      if (SetTreeModule$$$mem(comparer$$31, x$$34, tree$$1)) {
        return false;
      } else {
        tree$$1 = SetTreeModule$$$add(comparer$$31, x$$34, tree$$1);
        return true;
      }
    },
    clear: function clear() {
      tree$$1 = new SetTree$00601(0, "SetEmpty");
    },
    "delete": function _delete(x$$35) {
      if (SetTreeModule$$$mem(comparer$$31, x$$35, tree$$1)) {
        tree$$1 = SetTreeModule$$$remove(comparer$$31, x$$35, tree$$1);
        return true;
      } else {
        return false;
      }
    },
    has: function has(x$$36) {
      return SetTreeModule$$$mem(comparer$$31, x$$36, tree$$1);
    },
    keys: function keys() {
      return SetTreeModule$$$toSeq(tree$$1);
    },
    values: function values() {
      return SetTreeModule$$$toSeq(tree$$1);
    },
    entries: function entries() {
      var source = SetTreeModule$$$toSeq(tree$$1);
      return Seq_map(function mapping(v) {
        return [v, v];
      }, source);
    }
  }, Set_defineProperty(_ref, Symbol.iterator, function () {
    return toIterator(SetTreeModule$$$mkIEnumerator(tree$$1));
  }), Set_defineProperty(_ref, "GetEnumerator", function GetEnumerator() {
    return SetTreeModule$$$mkIEnumerator(tree$$1);
  }), _ref;
}

function Set_createMutable(source$$1, comparer$$32) {
  var set = MutableSet$00601$$$$002Ector$$Z6150332D(source$$1, comparer$$32);
  return set;
}
function distinct(xs, comparer$$33) {
  return delay(function () {
    var set$$1 = MutableSet$00601$$$$002Ector$$Z6150332D(empty(), comparer$$33);
    return collect(function (x$$37) {
      return MutableSet$00601$$Add$$2B595(set$$1, x$$37) ? singleton(x$$37) : empty();
    }, xs);
  });
}
function distinctBy(projection, xs$$1, comparer$$34) {
  return delay(function () {
    var set$$2 = MutableSet$00601$$$$002Ector$$Z6150332D(empty(), comparer$$34);
    return collect(function (x$$38) {
      return MutableSet$00601$$Add$$2B595(set$$2, projection(x$$38)) ? singleton(x$$38) : empty();
    }, xs$$1);
  });
}
function unionWith(s1$$4, s2$$4) {
  return fold(function folder(acc$$14, x$$39) {
    return acc$$14.add(x$$39);
  }, s1$$4, s2$$4);
}
function intersectWith(s1$$5, s2$$5, comparer$$35) {
  var s2$$6 = Set_ofSeq(s2$$5, comparer$$35);
  iterate(function (x$$40) {
    if (!FSharpSet$$Contains$$2B595(s2$$6, x$$40)) {
      var value = s1$$5["delete"](x$$40);
      value, null;
    }
  }, s1$$5);
}
function exceptWith(s1$$6, s2$$7) {
  iterate(function (x$$41) {
    var value$$1 = s1$$6["delete"](x$$41);
    value$$1, null;
  }, s2$$7);
}
function isSubsetOf(s1$$7, s2$$8, comparer$$36) {
  return isSubset(Set_ofSeq(s1$$7, comparer$$36), Set_ofSeq(s2$$8, comparer$$36));
}
function isSupersetOf(s1$$8, s2$$9, comparer$$37) {
  return isSuperset(Set_ofSeq(s1$$8, comparer$$37), Set_ofSeq(s2$$9, comparer$$37));
}
function isProperSubsetOf(s1$$9, s2$$10, comparer$$38) {
  return isProperSubset(Set_ofSeq(s1$$9, comparer$$38), Set_ofSeq(s2$$10, comparer$$38));
}
function isProperSupersetOf(s1$$10, s2$$11, comparer$$39) {
  return isProperSuperset(Set_ofSeq(s1$$10, comparer$$39), Set_ofSeq(s2$$11, comparer$$39));
}
// CONCATENATED MODULE: ./.fable/fable-library.2.4.12/Array.js





























function Array_toConsumableArray(arr) { return Array_arrayWithoutHoles(arr) || Array_iterableToArray(arr) || Array_nonIterableSpread(); }

function Array_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function Array_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function Array_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }








function indexNotFound() {
  throw new Error("An index satisfying the predicate was not found in the collection.");
}

function Array_append(array1, array2, cons) {
  if (ArrayBuffer.isView(array1)) {
    var len1 = array1.length | 0;
    var len2 = array2.length | 0;
    var newArray = new cons(len1 + len2);

    for (var i = 0; i <= len1 - 1; i++) {
      newArray[i] = array1[i];
    }

    for (var i$$1 = 0; i$$1 <= len2 - 1; i$$1++) {
      newArray[i$$1 + len1] = array2[i$$1];
    }

    return newArray;
  } else {
    return array1.concat(array2);
  }
}
function Array_filter(predicate, array) {
  return array.filter(predicate);
}
function fill(target, targetIndex, count, value) {
  target.fill(value, targetIndex, targetIndex + count);
  return target;
}
function getSubArray(array$$3, start$$1, count$$2) {
  return array$$3.slice(start$$1, start$$1 + count$$2);
}
function Array_last(array$$5) {
  if (array$$5.length === 0) {
    throw new Error("The input array was empty\\nParameter name: array");
  }

  return array$$5[array$$5.length - 1];
}
function Array_tryLast(array$$6) {
  if (array$$6.length === 0) {
    return null;
  } else {
    return some(array$$6[array$$6.length - 1]);
  }
}
function Array_mapIndexed(f, source, cons$$1) {
  if (ArrayBuffer.isView(source)) {
    var len = source.length | 0;
    var target$$1 = new cons$$1(len);

    for (var i$$2 = 0; i$$2 <= len - 1; i$$2++) {
      target$$1[i$$2] = f(i$$2, source[i$$2]);
    }

    return target$$1;
  } else {
    return source.map(function (delegateArg0, delegateArg1) {
      return f(delegateArg1, delegateArg0);
    });
  }
}
function Array_map(f$$1, source$$1, cons$$2) {
  if (ArrayBuffer.isView(source$$1)) {
    var len$$1 = source$$1.length | 0;
    var target$$2 = new cons$$2(len$$1);

    for (var i$$4 = 0; i$$4 <= len$$1 - 1; i$$4++) {
      target$$2[i$$4] = f$$1(source$$1[i$$4]);
    }

    return target$$2;
  } else {
    return source$$1.map(function mapping$$1(x$$1) {
      return f$$1(x$$1);
    });
  }
}
function Array_mapIndexed2(f$$2, source1, source2, cons$$3) {
  if (source1.length !== source2.length) {
    throw new Error("Arrays had different lengths");
  }

  var result = new cons$$3(source1.length);

  for (var i$$5 = 0; i$$5 <= source1.length - 1; i$$5++) {
    result[i$$5] = f$$2(i$$5, source1[i$$5], source2[i$$5]);
  }

  return result;
}
function Array_map2(f$$3, source1$$1, source2$$1, cons$$4) {
  if (source1$$1.length !== source2$$1.length) {
    throw new Error("Arrays had different lengths");
  }

  var result$$1 = new cons$$4(source1$$1.length);

  for (var i$$6 = 0; i$$6 <= source1$$1.length - 1; i$$6++) {
    result$$1[i$$6] = f$$3(source1$$1[i$$6], source2$$1[i$$6]);
  }

  return result$$1;
}
function mapIndexed3(f$$4, source1$$2, source2$$2, source3, cons$$5) {
  if (source1$$2.length !== source2$$2.length ? true : source2$$2.length !== source3.length) {
    throw new Error("Arrays had different lengths");
  }

  var result$$2 = new cons$$5(source1$$2.length);

  for (var i$$7 = 0; i$$7 <= source1$$2.length - 1; i$$7++) {
    result$$2[i$$7] = f$$4(i$$7, source1$$2[i$$7], source2$$2[i$$7], source3[i$$7]);
  }

  return result$$2;
}
function Array_map3(f$$5, source1$$3, source2$$3, source3$$1, cons$$6) {
  if (source1$$3.length !== source2$$3.length ? true : source2$$3.length !== source3$$1.length) {
    throw new Error("Arrays had different lengths");
  }

  var result$$3 = new cons$$6(source1$$3.length);

  for (var i$$8 = 0; i$$8 <= source1$$3.length - 1; i$$8++) {
    result$$3[i$$8] = f$$5(source1$$3[i$$8], source2$$3[i$$8], source3$$1[i$$8]);
  }

  return result$$3;
}
function Array_mapFold(mapping$$2, state, array$$9, cons$$7) {
  var matchValue = array$$9.length | 0;

  if (matchValue === 0) {
    return [[], state];
  } else {
    var acc = state;
    var res = new cons$$7(matchValue);

    for (var i$$9 = 0; i$$9 <= array$$9.length - 1; i$$9++) {
      var patternInput = mapping$$2(acc, array$$9[i$$9]);
      res[i$$9] = patternInput[0];
      acc = patternInput[1];
    }

    return [res, acc];
  }
}
function Array_mapFoldBack(mapping$$3, array$$10, state$$1, cons$$8) {
  var matchValue$$1 = array$$10.length | 0;

  if (matchValue$$1 === 0) {
    return [[], state$$1];
  } else {
    var acc$$1 = state$$1;
    var res$$1 = new cons$$8(matchValue$$1);

    for (var i$$10 = array$$10.length - 1; i$$10 >= 0; i$$10--) {
      var patternInput$$1 = mapping$$3(array$$10[i$$10], acc$$1);
      res$$1[i$$10] = patternInput$$1[0];
      acc$$1 = patternInput$$1[1];
    }

    return [res$$1, acc$$1];
  }
}
function Array_indexed(source$$2) {
  var len$$4 = source$$2.length | 0;
  var target$$3 = new Array(len$$4);

  for (var i$$11 = 0; i$$11 <= len$$4 - 1; i$$11++) {
    target$$3[i$$11] = [i$$11, source$$2[i$$11]];
  }

  return target$$3;
}
function Array_truncate(count$$4, array$$11) {
  var count$$5 = max(comparePrimitives, 0, count$$4) | 0;
  return array$$11.slice(0, 0 + count$$5);
}
function Array_concat(arrays, cons$$9) {
  var arr$$4;
  var arrays$$1 = Array.isArray(arrays) ? arrays : Array.from(arrays);
  var matchValue$$2 = arrays$$1.length | 0;

  switch (matchValue$$2) {
    case 0:
      {
        return new cons$$9(0);
      }

    case 1:
      {
        return arrays$$1[0];
      }

    default:
      {
        if (arr$$4 = arrays$$1[0], ArrayBuffer.isView(arr$$4)) {
          var totalIdx = 0;
          var totalLength = 0;

          for (var idx = 0; idx <= arrays$$1.length - 1; idx++) {
            var arr$$5 = arrays$$1[idx];
            totalLength = totalLength + arr$$5.length;
          }

          var result$$4 = new cons$$9(totalLength);

          for (var idx$$1 = 0; idx$$1 <= arrays$$1.length - 1; idx$$1++) {
            var arr$$6 = arrays$$1[idx$$1];

            for (var j = 0; j <= arr$$6.length - 1; j++) {
              result$$4[totalIdx] = arr$$6[j];
              totalIdx = totalIdx + 1;
            }
          }

          return result$$4;
        } else {
          var _arrays$$1$;

          return (_arrays$$1$ = arrays$$1[0]).concat.apply(_arrays$$1$, Array_toConsumableArray(arrays$$1.slice(1)));
        }
      }
  }
}
function Array_collect(mapping$$4, array$$14, cons$$10) {
  var mapped = Array_map(mapping$$4, array$$14, Array);
  return Array_concat(mapped, cons$$10);
}
function Array_countBy(projection, array$$15, eq) {
  var dict = createMutable([], eq);
  var keys = [];

  for (var idx$$2 = 0; idx$$2 <= array$$15.length - 1; idx$$2++) {
    var value$$2 = array$$15[idx$$2];
    var key = projection(value$$2);
    var matchValue$$3 = tryGetValue(dict, key, 0);

    if (matchValue$$3[0]) {
      dict.set(key, matchValue$$3[1] + 1);
    } else {
      dict.set(key, 1);
      var value$$3 = keys.push(key);
      value$$3, null;
    }
  }

  var result$$5 = Array_map(function (key$$1) {
    return [key$$1, getItemFromDict(dict, key$$1)];
  }, keys, Array);
  return result$$5;
}
function Array_distinctBy(projection$$1, array$$17, eq$$1) {
  var hashSet = Set_createMutable([], eq$$1);
  return Array_filter(function predicate$$2($arg$$3) {
    var arg00 = projection$$1($arg$$3);
    return addToSet(arg00, hashSet);
  }, array$$17);
}
function Array_distinct(array$$19, eq$$2) {
  return Array_distinctBy(function (x$$2) {
    return x$$2;
  }, array$$19, eq$$2);
}
function Array_where(predicate$$3, array$$20) {
  return array$$20.filter(predicate$$3);
}
function Array_contains(value$$4, array$$22, eq$$3) {
  var loop = function loop($i$$12$$79) {
    loop: while (true) {
      var i$$12 = $i$$12$$79;

      if (i$$12 >= array$$22.length) {
        return false;
      } else if (eq$$3.Equals(value$$4, array$$22[i$$12])) {
        return true;
      } else {
        $i$$12$$79 = i$$12 + 1;
        continue loop;
      }

      break;
    }
  };

  return loop(0);
}
function Array_except(itemsToExclude, array$$23, eq$$4) {
  if (array$$23.length === 0) {
    return array$$23;
  } else {
    var cached = Set_createMutable(itemsToExclude, eq$$4);
    return array$$23.filter(function predicate$$5(arg00$$1) {
      return addToSet(arg00$$1, cached);
    });
  }
}
function Array_groupBy(projection$$2, array$$26, cons$$11, eq$$5) {
  var dict$$1 = createMutable([], eq$$5);
  var keys$$1 = [];

  for (var idx$$3 = 0; idx$$3 <= array$$26.length - 1; idx$$3++) {
    var v = array$$26[idx$$3];
    var key$$2 = projection$$2(v);
    var matchValue$$4 = tryGetValue(dict$$1, key$$2, null);

    if (matchValue$$4[0]) {
      dict$$1.set(key$$2, new List(v, matchValue$$4[1]));
    } else {
      addToDict(dict$$1, key$$2, new List(v, new List()));
      var value$$5 = keys$$1.push(key$$2);
      value$$5, null;
    }
  }

  var result$$6 = Array_map(function (key$$3) {
    var array$$28;
    return [key$$3, (array$$28 = cons$$11.from(getItemFromDict(dict$$1, key$$3)), array$$28.reverse())];
  }, keys$$1, Array);
  return result$$6;
}
function Array_empty(cons$$12) {
  return new cons$$12(0);
}
function Array_singleton(value$$6, cons$$14) {
  var ar = new cons$$14(1);
  ar[0] = value$$6;
  return ar;
}
function Array_initialize(count$$8, initializer, cons$$15) {
  if (count$$8 < 0) {
    throw new Error("The input must be non-negative\\nParameter name: count");
  }

  var result$$7 = new cons$$15(count$$8);

  for (var i$$13 = 0; i$$13 <= count$$8 - 1; i$$13++) {
    result$$7[i$$13] = initializer(i$$13);
  }

  return result$$7;
}
function Array_pairwise(array$$30) {
  if (array$$30.length < 2) {
    return [];
  } else {
    var count$$9 = array$$30.length - 1 | 0;
    var result$$8 = new Array(count$$9);

    for (var i$$14 = 0; i$$14 <= count$$9 - 1; i$$14++) {
      result$$8[i$$14] = [array$$30[i$$14], array$$30[i$$14 + 1]];
    }

    return result$$8;
  }
}
function Array_replicate(count$$10, initial, cons$$16) {
  if (count$$10 < 0) {
    throw new Error("The input must be non-negative\\nParameter name: count");
  }

  var result$$9 = new cons$$16(count$$10);

  for (var i$$15 = 0; i$$15 <= result$$9.length - 1; i$$15++) {
    result$$9[i$$15] = initial;
  }

  return result$$9;
}
function copy(array$$31, cons$$17) {
  return array$$31.slice();
}
function Array_reverse(array$$33, cons$$18) {
  var array$$35 = array$$33.slice();
  return array$$35.reverse();
}
function Array_scan(folder, state$$2, array$$37, cons$$19) {
  var res$$2 = new cons$$19(array$$37.length + 1);
  res$$2[0] = state$$2;

  for (var i$$16 = 0; i$$16 <= array$$37.length - 1; i$$16++) {
    res$$2[i$$16 + 1] = folder(res$$2[i$$16], array$$37[i$$16]);
  }

  return res$$2;
}
function Array_scanBack(folder$$1, array$$38, state$$3, cons$$20) {
  var res$$3 = new cons$$20(array$$38.length + 1);
  res$$3[array$$38.length] = state$$3;

  for (var i$$17 = array$$38.length - 1; i$$17 >= 0; i$$17--) {
    res$$3[i$$17] = folder$$1(array$$38[i$$17], res$$3[i$$17 + 1]);
  }

  return res$$3;
}
function Array_skip(count$$11, array$$39, cons$$21) {
  if (count$$11 > array$$39.length) {
    throw new Error("count is greater than array length\\nParameter name: count");
  }

  if (count$$11 === array$$39.length) {
    return new cons$$21(0);
  } else {
    var count$$12 = (count$$11 < 0 ? 0 : count$$11) | 0;
    return array$$39.slice(count$$12);
  }
}
function Array_skipWhile(predicate$$7, array$$41, cons$$23) {
  var count$$14 = 0;

  while (count$$14 < array$$41.length ? predicate$$7(array$$41[count$$14]) : false) {
    count$$14 = count$$14 + 1;
  }

  if (count$$14 === array$$41.length) {
    return new cons$$23(0);
  } else {
    var count$$15 = count$$14 | 0;
    return array$$41.slice(count$$15);
  }
}
function Array_take(count$$16, array$$43, cons$$25) {
  if (count$$16 < 0) {
    throw new Error("The input must be non-negative\\nParameter name: count");
  }

  if (count$$16 > array$$43.length) {
    throw new Error("count is greater than array length\\nParameter name: count");
  }

  if (count$$16 === 0) {
    return new cons$$25(0);
  } else {
    return array$$43.slice(0, 0 + count$$16);
  }
}
function Array_takeWhile(predicate$$8, array$$45, cons$$27) {
  var count$$18 = 0;

  while (count$$18 < array$$45.length ? predicate$$8(array$$45[count$$18]) : false) {
    count$$18 = count$$18 + 1;
  }

  if (count$$18 === 0) {
    return new cons$$27(0);
  } else {
    var count$$19 = count$$18 | 0;
    return array$$45.slice(0, 0 + count$$19);
  }
}
function addRangeInPlace(range, array$$47) {
  iterate(function (x$$3) {
    var value$$7 = array$$47.push(x$$3);
    value$$7, null;
  }, range);
}
function removeInPlace(item$$4, array$$49) {
  var i$$18 = array$$49.indexOf(item$$4);

  if (i$$18 > -1) {
    var value$$8 = array$$49.splice(i$$18, 1);
    value$$8, null;
    return true;
  } else {
    return false;
  }
}
function removeAllInPlace(predicate$$9, array$$52) {
  var countRemoveAll = function countRemoveAll(count$$20) {
    var i$$19 = array$$52.findIndex(predicate$$9);

    if (i$$19 > -1) {
      var value$$9 = array$$52.splice(i$$19, 1);
      value$$9, null;
      return countRemoveAll(count$$20) + 1 | 0;
    } else {
      return count$$20 | 0;
    }
  };

  return countRemoveAll(0) | 0;
}
function copyTo(source$$3, sourceIndex, target$$4, targetIndex$$1, count$$21) {
  var diff = targetIndex$$1 - sourceIndex | 0;

  for (var i$$20 = sourceIndex; i$$20 <= sourceIndex + count$$21 - 1; i$$20++) {
    target$$4[i$$20 + diff] = source$$3[i$$20];
  }
}
function Array_partition(f$$6, source$$4, cons$$29) {
  var len$$7 = source$$4.length | 0;
  var res1 = new cons$$29(len$$7);
  var res2 = new cons$$29(len$$7);
  var iTrue = 0;
  var iFalse = 0;

  for (var i$$21 = 0; i$$21 <= len$$7 - 1; i$$21++) {
    if (f$$6(source$$4[i$$21])) {
      res1[iTrue] = source$$4[i$$21];
      iTrue = iTrue + 1;
    } else {
      res2[iFalse] = source$$4[i$$21];
      iFalse = iFalse + 1;
    }
  }

  return [Array_truncate(iTrue, res1), Array_truncate(iFalse, res2)];
}
function Array_find(predicate$$11, array$$57) {
  var matchValue$$5 = array$$57.find(predicate$$11);

  if (matchValue$$5 == null) {
    return indexNotFound();
  } else {
    var res$$4 = Option_value(matchValue$$5);
    return res$$4;
  }
}
function Array_tryFind(predicate$$13, array$$59) {
  return array$$59.find(predicate$$13);
}
function Array_findIndex(predicate$$15, array$$61) {
  var matchValue$$6 = array$$61.findIndex(predicate$$15);

  if (matchValue$$6 > -1) {
    return matchValue$$6 | 0;
  } else {
    return indexNotFound() | 0;
  }
}
function Array_tryFindIndex(predicate$$17, array$$63) {
  var matchValue$$7 = array$$63.findIndex(predicate$$17);

  if (matchValue$$7 > -1) {
    return matchValue$$7;
  } else {
    return null;
  }
}
function Array_pick(chooser, array$$65) {
  var loop$$1 = function loop$$1($i$$22$$147) {
    loop$$1: while (true) {
      var i$$22 = $i$$22$$147;

      if (i$$22 >= array$$65.length) {
        return indexNotFound();
      } else {
        var matchValue$$8 = chooser(array$$65[i$$22]);

        if (matchValue$$8 != null) {
          var res$$5 = Option_value(matchValue$$8);
          return res$$5;
        } else {
          $i$$22$$147 = i$$22 + 1;
          continue loop$$1;
        }
      }

      break;
    }
  };

  return loop$$1(0);
}
function Array_tryPick(chooser$$1, array$$66) {
  var loop$$2 = function loop$$2($i$$23$$150) {
    loop$$2: while (true) {
      var i$$23 = $i$$23$$150;

      if (i$$23 >= array$$66.length) {
        return null;
      } else {
        var matchValue$$9 = chooser$$1(array$$66[i$$23]);

        if (matchValue$$9 == null) {
          $i$$23$$150 = i$$23 + 1;
          continue loop$$2;
        } else {
          return matchValue$$9;
        }
      }

      break;
    }
  };

  return loop$$2(0);
}
function Array_findBack(predicate$$19, array$$67) {
  var loop$$3 = function loop$$3($i$$24$$153) {
    loop$$3: while (true) {
      var i$$24 = $i$$24$$153;

      if (i$$24 < 0) {
        return indexNotFound();
      } else if (predicate$$19(array$$67[i$$24])) {
        return array$$67[i$$24];
      } else {
        $i$$24$$153 = i$$24 - 1;
        continue loop$$3;
      }

      break;
    }
  };

  return loop$$3(array$$67.length - 1);
}
function Array_tryFindBack(predicate$$20, array$$68) {
  var loop$$4 = function loop$$4($i$$25$$156) {
    loop$$4: while (true) {
      var i$$25 = $i$$25$$156;

      if (i$$25 < 0) {
        return null;
      } else if (predicate$$20(array$$68[i$$25])) {
        return some(array$$68[i$$25]);
      } else {
        $i$$25$$156 = i$$25 - 1;
        continue loop$$4;
      }

      break;
    }
  };

  return loop$$4(array$$68.length - 1);
}
function findLastIndex(predicate$$21, array$$69) {
  var loop$$5 = function loop$$5($i$$26$$159) {
    loop$$5: while (true) {
      var i$$26 = $i$$26$$159;

      if (i$$26 < 0) {
        return -1 | 0;
      } else if (predicate$$21(array$$69[i$$26])) {
        return i$$26 | 0;
      } else {
        $i$$26$$159 = i$$26 - 1;
        continue loop$$5;
      }

      break;
    }
  };

  return loop$$5(array$$69.length - 1) | 0;
}
function Array_findIndexBack(predicate$$22, array$$70) {
  var loop$$6 = function loop$$6($i$$27$$162) {
    loop$$6: while (true) {
      var i$$27 = $i$$27$$162;

      if (i$$27 < 0) {
        return indexNotFound() | 0;
      } else if (predicate$$22(array$$70[i$$27])) {
        return i$$27 | 0;
      } else {
        $i$$27$$162 = i$$27 - 1;
        continue loop$$6;
      }

      break;
    }
  };

  return loop$$6(array$$70.length - 1) | 0;
}
function Array_tryFindIndexBack(predicate$$23, array$$71) {
  var loop$$7 = function loop$$7($i$$28$$165) {
    loop$$7: while (true) {
      var i$$28 = $i$$28$$165;

      if (i$$28 < 0) {
        return null;
      } else if (predicate$$23(array$$71[i$$28])) {
        return i$$28;
      } else {
        $i$$28$$165 = i$$28 - 1;
        continue loop$$7;
      }

      break;
    }
  };

  return loop$$7(array$$71.length - 1);
}
function Array_choose(chooser$$2, array$$72, cons$$30) {
  var arr$$7 = array$$72.filter(function f$$7(x$$4) {
    var option = chooser$$2(x$$4);
    return option != null;
  });
  return Array_map(function g(x$$5) {
    var option$$1 = chooser$$2(x$$5);
    return Option_value(option$$1);
  }, arr$$7, cons$$30);
}
function foldIndexed(folder$$2, state$$4, array$$74) {
  return array$$74.reduce(function (delegateArg0$$1, delegateArg1$$1, delegateArg2) {
    return folder$$2(delegateArg2, delegateArg0$$1, delegateArg1$$1);
  }, state$$4);
}
function Array_fold(folder$$4, state$$6, array$$76) {
  return array$$76.reduce(function (delegateArg0$$2, delegateArg1$$2) {
    return folder$$4(delegateArg0$$2, delegateArg1$$2);
  }, state$$6);
}
function Array_iterate(action, array$$78) {
  for (var i$$30 = 0; i$$30 <= array$$78.length - 1; i$$30++) {
    action(array$$78[i$$30]);
  }
}
function Array_iterateIndexed(action$$1, array$$79) {
  for (var i$$31 = 0; i$$31 <= array$$79.length - 1; i$$31++) {
    action$$1(i$$31, array$$79[i$$31]);
  }
}
function Array_iterate2(action$$2, array1$$2, array2$$2) {
  if (array1$$2.length !== array2$$2.length) {
    throw new Error("Arrays had different lengths");
  }

  for (var i$$32 = 0; i$$32 <= array1$$2.length - 1; i$$32++) {
    action$$2(array1$$2[i$$32], array2$$2[i$$32]);
  }
}
function Array_iterateIndexed2(action$$3, array1$$3, array2$$3) {
  if (array1$$3.length !== array2$$3.length) {
    throw new Error("Arrays had different lengths");
  }

  for (var i$$33 = 0; i$$33 <= array1$$3.length - 1; i$$33++) {
    action$$3(i$$33, array1$$3[i$$33], array2$$3[i$$33]);
  }
}
function Array_isEmpty(array$$80) {
  return array$$80.length === 0;
}
function Array_forAll(predicate$$25, array$$81) {
  return array$$81.every(predicate$$25);
}
function permute(f$$8, array$$83) {
  var size = array$$83.length | 0;
  var res$$7 = new array$$83.constructor(array$$83.length);
  var checkFlags = new Array(size);
  Array_iterateIndexed(function (i$$34, x$$8) {
    var j$$1 = f$$8(i$$34) | 0;

    if (j$$1 < 0 ? true : j$$1 >= size) {
      throw new Error("Not a valid permutation");
    }

    res$$7[j$$1] = x$$8;
    checkFlags[j$$1] = 1;
  }, array$$83);
  var isValid = Array_forAll(function (y) {
    return 1 === y;
  }, checkFlags);

  if (!isValid) {
    throw new Error("Not a valid permutation");
  }

  return res$$7;
}
function setSlice(target$$5, lower, upper, source$$5) {
  var lower$$1 = defaultArg(lower, 0) | 0;
  var upper$$1 = defaultArg(upper, 0) | 0;
  var length = (upper$$1 > 0 ? upper$$1 : target$$5.length - 1) - lower$$1 | 0;

  if (ArrayBuffer.isView(target$$5) ? source$$5.length <= length : false) {
    var target$$6 = target$$5;
    var source$$6 = source$$5;
    return target$$6.set(source$$6, lower$$1);
  } else {
    for (var i$$35 = 0; i$$35 <= length; i$$35++) {
      target$$5[i$$35 + lower$$1] = source$$5[i$$35];
    }
  }
}
function sortInPlaceBy(projection$$3, xs, comparer) {
  xs.sort(function (x$$10, y$$1) {
    return comparer.Compare(projection$$3(x$$10), projection$$3(y$$1));
  });
}
function sortInPlace(xs$$1, comparer$$1) {
  xs$$1.sort(function (x$$11, y$$2) {
    return comparer$$1.Compare(x$$11, y$$2);
  });
}

function copyArray(array$$84) {
  var result$$10 = new array$$84.constructor(array$$84.length);

  for (var i$$36 = 0; i$$36 <= array$$84.length - 1; i$$36++) {
    result$$10[i$$36] = array$$84[i$$36];
  }

  return result$$10;
}

function sort(xs$$2, comparer$$2) {
  var xs$$3 = copyArray(xs$$2);
  xs$$3.sort(function comparer$$3(x$$12, y$$3) {
    return comparer$$2.Compare(x$$12, y$$3);
  });
  return xs$$3;
}
function sortBy(projection$$4, xs$$4, comparer$$4) {
  var xs$$5 = copyArray(xs$$4);
  xs$$5.sort(function comparer$$5(x$$13, y$$4) {
    return comparer$$4.Compare(projection$$4(x$$13), projection$$4(y$$4));
  });
  return xs$$5;
}
function sortDescending(xs$$6, comparer$$6) {
  var xs$$7 = copyArray(xs$$6);
  xs$$7.sort(function comparer$$7(x$$14, y$$5) {
    return comparer$$6.Compare(x$$14, y$$5) * -1;
  });
  return xs$$7;
}
function sortByDescending(projection$$5, xs$$8, comparer$$8) {
  var xs$$9 = copyArray(xs$$8);
  xs$$9.sort(function comparer$$9(x$$15, y$$6) {
    return comparer$$8.Compare(projection$$5(x$$15), projection$$5(y$$6)) * -1;
  });
  return xs$$9;
}
function Array_sortWith(comparer$$10, xs$$10) {
  var xs$$11 = copyArray(xs$$10);
  xs$$11.sort(comparer$$10);
  return xs$$11;
}
function Array_unfold(generator, state$$8) {
  var res$$8 = [];

  var loop$$8 = function loop$$8($state$$9$$224) {
    loop$$8: while (true) {
      var state$$9 = $state$$9$$224;
      var matchValue$$10 = generator(state$$9);

      if (matchValue$$10 != null) {
        var x$$16 = matchValue$$10[0];
        var s$0027$$2 = matchValue$$10[1];
        var value$$10 = res$$8.push(x$$16);
        value$$10, null;
        $state$$9$$224 = s$0027$$2;
        continue loop$$8;
      }

      break;
    }
  };

  loop$$8(state$$8);
  return res$$8;
}
function unzip(array$$86) {
  var len$$9 = array$$86.length | 0;
  var res1$$1 = new Array(len$$9);
  var res2$$1 = new Array(len$$9);
  Array_iterateIndexed(function (i$$37, tupledArg) {
    res1$$1[i$$37] = tupledArg[0];
    res2$$1[i$$37] = tupledArg[1];
  }, array$$86);
  return [res1$$1, res2$$1];
}
function unzip3(array$$87) {
  var len$$12 = array$$87.length | 0;
  var res1$$2 = new Array(len$$12);
  var res2$$2 = new Array(len$$12);
  var res3 = new Array(len$$12);
  Array_iterateIndexed(function (i$$38, tupledArg$$1) {
    res1$$2[i$$38] = tupledArg$$1[0];
    res2$$2[i$$38] = tupledArg$$1[1];
    res3[i$$38] = tupledArg$$1[2];
  }, array$$87);
  return [res1$$2, res2$$2, res3];
}
function Array_zip(array1$$4, array2$$4) {
  if (array1$$4.length !== array2$$4.length) {
    throw new Error("Arrays had different lengths");
  }

  var result$$11;
  var len$$16 = array1$$4.length | 0;
  result$$11 = new Array(len$$16);

  for (var i$$39 = 0; i$$39 <= array1$$4.length - 1; i$$39++) {
    result$$11[i$$39] = [array1$$4[i$$39], array2$$4[i$$39]];
  }

  return result$$11;
}
function Array_zip3(array1$$5, array2$$5, array3) {
  if (array1$$5.length !== array2$$5.length ? true : array2$$5.length !== array3.length) {
    throw new Error("Arrays had different lengths");
  }

  var result$$12;
  var len$$17 = array1$$5.length | 0;
  result$$12 = new Array(len$$17);

  for (var i$$40 = 0; i$$40 <= array1$$5.length - 1; i$$40++) {
    result$$12[i$$40] = [array1$$5[i$$40], array2$$5[i$$40], array3[i$$40]];
  }

  return result$$12;
}
function chunkBySize(chunkSize, array$$88) {
  if (chunkSize < 1) {
    throw new Error("The input must be positive.\\nParameter name: size");
  }

  if (array$$88.length === 0) {
    return [[]];
  } else {
    var result$$13 = [];

    for (var x$$17 = 0; x$$17 <= ~~Math.ceil(array$$88.length / chunkSize) - 1; x$$17++) {
      var start$$8 = x$$17 * chunkSize | 0;
      var slice = array$$88.slice(start$$8, start$$8 + chunkSize);
      var value$$11 = result$$13.push(slice);
      value$$11, null;
    }

    return result$$13;
  }
}
function splitAt(index$$4, array$$91) {
  if (index$$4 < 0) {
    throw new Error("The input must be non-negative\\nParameter name: index");
  }

  if (index$$4 > array$$91.length) {
    throw new Error("The input sequence has an insufficient number of elements.\\nParameter name: index");
  }

  return [array$$91.slice(0, 0 + index$$4), array$$91.slice(index$$4)];
}
function Array_compareWith(comparer$$12, array1$$6, array2$$6) {
  if (array1$$6 == null) {
    if (array2$$6 == null) {
      return 0;
    } else {
      return -1 | 0;
    }
  } else if (array2$$6 == null) {
    return 1;
  } else {
    var i$$41 = 0;
    var result$$14 = 0;
    var length1 = array1$$6.length | 0;
    var length2 = array2$$6.length | 0;

    if (length1 > length2) {
      return 1;
    } else if (length1 < length2) {
      return -1 | 0;
    } else {
      while (i$$41 < length1 ? result$$14 === 0 : false) {
        result$$14 = comparer$$12(array1$$6[i$$41], array2$$6[i$$41]);
        i$$41 = i$$41 + 1;
      }

      return result$$14 | 0;
    }
  }
}
function equalsWith(comparer$$13, array1$$7, array2$$7) {
  return Array_compareWith(compare, array1$$7, array2$$7) === 0;
}
function Array_exactlyOne(array$$94) {
  if (array$$94.length === 1) {
    return array$$94[0];
  } else if (array$$94.length === 0) {
    throw new Error("The input sequence was empty\\nParameter name: array");
  } else {
    throw new Error("Input array too long\\nParameter name: array");
  }
}
function Array_head(array$$95) {
  if (array$$95.length === 0) {
    throw new Error("The input array was empty\\nParameter name: array");
  } else {
    return array$$95[0];
  }
}
function Array_tryHead(array$$96) {
  if (array$$96.length === 0) {
    return null;
  } else {
    return some(array$$96[0]);
  }
}
function Array_tail(array$$97) {
  if (array$$97.length === 0) {
    throw new Error("Not enough elements\\nParameter name: array");
  }

  return array$$97.slice(1);
}
function Array_item(index$$5, array$$99) {
  return array$$99[index$$5];
}
function Array_tryItem(index$$6, array$$100) {
  if (index$$6 < 0 ? true : index$$6 >= array$$100.length) {
    return null;
  } else {
    return some(array$$100[index$$6]);
  }
}
function foldBackIndexed(folder$$6, array$$101, state$$10) {
  return array$$101.reduceRight(function (delegateArg0$$3, delegateArg1$$3, delegateArg2$$1) {
    return folder$$6(delegateArg2$$1, delegateArg1$$3, delegateArg0$$3);
  }, state$$10);
}
function Array_foldBack(folder$$8, array$$103, state$$12) {
  return array$$103.reduceRight(function (delegateArg0$$4, delegateArg1$$4) {
    return folder$$8(delegateArg1$$4, delegateArg0$$4);
  }, state$$12);
}
function foldIndexed2(folder$$10, state$$14, array1$$8, array2$$8) {
  var acc$$6 = state$$14;

  if (array1$$8.length !== array2$$8.length) {
    throw new Error("Arrays have different lengths");
  }

  for (var i$$43 = 0; i$$43 <= array1$$8.length - 1; i$$43++) {
    acc$$6 = folder$$10(i$$43, acc$$6, array1$$8[i$$43], array2$$8[i$$43]);
  }

  return acc$$6;
}
function Array_fold2(folder$$11, state$$15, array1$$9, array2$$9) {
  return foldIndexed2(function (_arg1, acc$$7, x$$20, y$$7) {
    return folder$$11(acc$$7, x$$20, y$$7);
  }, state$$15, array1$$9, array2$$9);
}
function foldBackIndexed2(folder$$12, array1$$10, array2$$10, state$$16) {
  var acc$$8 = state$$16;

  if (array1$$10.length !== array2$$10.length) {
    throw new Error("Arrays had different lengths");
  }

  var size$$1 = array1$$10.length | 0;

  for (var i$$44 = 1; i$$44 <= size$$1; i$$44++) {
    acc$$8 = folder$$12(i$$44 - 1, array1$$10[size$$1 - i$$44], array2$$10[size$$1 - i$$44], acc$$8);
  }

  return acc$$8;
}
function Array_foldBack2(f$$9, array1$$11, array2$$11, state$$17) {
  return foldBackIndexed2(function (_arg1$$1, x$$21, y$$8, acc$$9) {
    return f$$9(x$$21, y$$8, acc$$9);
  }, array1$$11, array2$$11, state$$17);
}
function Array_reduce(reduction, array$$105) {
  if (array$$105.length === 0) {
    throw new Error("The input array was empty");
  }

  return array$$105.reduce(reduction);
}
function Array_reduceBack(reduction$$2, array$$107) {
  if (array$$107.length === 0) {
    throw new Error("The input array was empty");
  }

  return array$$107.reduceRight(reduction$$2);
}
function Array_forAll2(predicate$$27, array1$$12, array2$$12) {
  return Array_fold2(function (acc$$10, x$$22, y$$9) {
    return acc$$10 ? predicate$$27(x$$22, y$$9) : false;
  }, true, array1$$12, array2$$12);
}
function existsOffset($predicate$$28$$279, $array$$109$$280, $index$$7$$281) {
  existsOffset: while (true) {
    var predicate$$28 = $predicate$$28$$279,
        array$$109 = $array$$109$$280,
        index$$7 = $index$$7$$281;

    if (index$$7 === array$$109.length) {
      return false;
    } else if (predicate$$28(array$$109[index$$7])) {
      return true;
    } else {
      $predicate$$28$$279 = predicate$$28;
      $array$$109$$280 = array$$109;
      $index$$7$$281 = index$$7 + 1;
      continue existsOffset;
    }

    break;
  }
}
function Array_exists(predicate$$29, array$$110) {
  return existsOffset(predicate$$29, array$$110, 0);
}
function existsOffset2($predicate$$30$$284, $array1$$13$$285, $array2$$13$$286, $index$$8$$287) {
  existsOffset2: while (true) {
    var predicate$$30 = $predicate$$30$$284,
        array1$$13 = $array1$$13$$285,
        array2$$13 = $array2$$13$$286,
        index$$8 = $index$$8$$287;

    if (index$$8 === array1$$13.length) {
      return false;
    } else if (predicate$$30(array1$$13[index$$8], array2$$13[index$$8])) {
      return true;
    } else {
      $predicate$$30$$284 = predicate$$30;
      $array1$$13$$285 = array1$$13;
      $array2$$13$$286 = array2$$13;
      $index$$8$$287 = index$$8 + 1;
      continue existsOffset2;
    }

    break;
  }
}
function Array_exists2(predicate$$31, array1$$14, array2$$14) {
  if (array1$$14.length !== array2$$14.length) {
    throw new Error("Arrays had different lengths");
  }

  return existsOffset2(predicate$$31, array1$$14, array2$$14, 0);
}
function Array_sum(array$$111, adder) {
  var acc$$11 = adder.GetZero();

  for (var i$$45 = 0; i$$45 <= array$$111.length - 1; i$$45++) {
    acc$$11 = adder.Add(acc$$11, array$$111[i$$45]);
  }

  return acc$$11;
}
function Array_sumBy(projection$$6, array$$112, adder$$1) {
  var acc$$12 = adder$$1.GetZero();

  for (var i$$46 = 0; i$$46 <= array$$112.length - 1; i$$46++) {
    acc$$12 = adder$$1.Add(acc$$12, projection$$6(array$$112[i$$46]));
  }

  return acc$$12;
}
function Array_maxBy(projection$$7, xs$$12, comparer$$14) {
  return Array_reduce(function (x$$23, y$$10) {
    return comparer$$14.Compare(projection$$7(y$$10), projection$$7(x$$23)) > 0 ? y$$10 : x$$23;
  }, xs$$12);
}
function Array_max(xs$$13, comparer$$15) {
  return Array_reduce(function (x$$24, y$$11) {
    return comparer$$15.Compare(y$$11, x$$24) > 0 ? y$$11 : x$$24;
  }, xs$$13);
}
function Array_minBy(projection$$8, xs$$14, comparer$$16) {
  return Array_reduce(function (x$$25, y$$12) {
    return comparer$$16.Compare(projection$$8(y$$12), projection$$8(x$$25)) > 0 ? x$$25 : y$$12;
  }, xs$$14);
}
function Array_min(xs$$15, comparer$$17) {
  return Array_reduce(function (x$$26, y$$13) {
    return comparer$$17.Compare(y$$13, x$$26) > 0 ? x$$26 : y$$13;
  }, xs$$15);
}
function Array_average(array$$113, averager) {
  if (array$$113.length === 0) {
    throw new Error("The input array was empty\\nParameter name: array");
  }

  var total = averager.GetZero();

  for (var i$$47 = 0; i$$47 <= array$$113.length - 1; i$$47++) {
    total = averager.Add(total, array$$113[i$$47]);
  }

  return averager.DivideByInt(total, array$$113.length);
}
function Array_averageBy(projection$$9, array$$114, averager$$1) {
  if (array$$114.length === 0) {
    throw new Error("The input array was empty\\nParameter name: array");
  }

  var total$$1 = averager$$1.GetZero();

  for (var i$$48 = 0; i$$48 <= array$$114.length - 1; i$$48++) {
    total$$1 = averager$$1.Add(total$$1, projection$$9(array$$114[i$$48]));
  }

  return averager$$1.DivideByInt(total$$1, array$$114.length);
}
function Array_ofSeq(source$$7, cons$$31) {
  return cons$$31.from(source$$7);
}
function Array_ofList(source$$8, cons$$32) {
  return cons$$32.from(source$$8);
}
function Array_toList(source$$9) {
  var len$$18 = source$$9.length | 0;
  var target$$7 = new List();

  for (var i$$49 = len$$18 - 1; i$$49 >= 0; i$$49--) {
    target$$7 = new List(source$$9[i$$49], target$$7);
  }

  return target$$7;
}
function Array_windowed(windowSize, source$$10) {
  if (windowSize <= 0) {
    throw new Error("windowSize must be positive");
  }

  var res$$9;
  var len$$19 = max(comparePrimitives, 0, source$$10.length - windowSize) | 0;
  res$$9 = new Array(len$$19);

  for (var i$$50 = windowSize; i$$50 <= source$$10.length; i$$50++) {
    res$$9[i$$50 - windowSize] = source$$10.slice(i$$50 - windowSize, i$$50 - 1 + 1);
  }

  return res$$9;
}
function splitInto(chunks, array$$115) {
  if (chunks < 1) {
    throw new Error("The input must be positive.\\nParameter name: chunks");
  }

  if (array$$115.length === 0) {
    return [[]];
  } else {
    var result$$15 = [];
    var chunks$$1 = min(comparePrimitives, chunks, array$$115.length) | 0;
    var minChunkSize = ~~(array$$115.length / chunks$$1) | 0;
    var chunksWithExtraItem = array$$115.length % chunks$$1 | 0;

    for (var i$$51 = 0; i$$51 <= chunks$$1 - 1; i$$51++) {
      var chunkSize$$1 = (i$$51 < chunksWithExtraItem ? minChunkSize + 1 : minChunkSize) | 0;
      var start$$11 = i$$51 * minChunkSize + min(comparePrimitives, chunksWithExtraItem, i$$51) | 0;
      var slice$$1 = array$$115.slice(start$$11, start$$11 + chunkSize$$1);
      var value$$12 = result$$15.push(slice$$1);
      value$$12, null;
    }

    return result$$15;
  }
}
function Array_transpose(arrays$$2, cons$$33) {
  var value$$13;
  var arrays$$3 = Array.isArray(arrays$$2) ? arrays$$2 : Array.from(arrays$$2);
  var len$$21 = arrays$$3.length | 0;

  if (len$$21 === 0) {
    return new Array(0);
  } else {
    var lenInner = arrays$$3[0].length | 0;

    if (value$$13 = Array_forAll(function predicate$$32(a) {
      return a.length === lenInner;
    }, arrays$$3), !value$$13) {
      throw new Error("Arrays had different lengths");
    }

    var result$$16 = new Array(lenInner);

    for (var i$$52 = 0; i$$52 <= lenInner - 1; i$$52++) {
      result$$16[i$$52] = new cons$$33(len$$21);

      for (var j$$2 = 0; j$$2 <= len$$21 - 1; j$$2++) {
        result$$16[i$$52][j$$2] = arrays$$3[j$$2][i$$52];
      }
    }

    return result$$16;
  }
}
// CONCATENATED MODULE: ./.fable/fable-library.2.4.12/List.js









function List_head(_arg1) {
  if (_arg1.tail != null) {
    return _arg1.head;
  } else {
    throw new Error("List was empty");
  }
}
function List_tryHead(_arg1$$1) {
  if (_arg1$$1.tail != null) {
    return some(_arg1$$1.head);
  } else {
    return null;
  }
}
function List_tail(_arg1$$2) {
  if (_arg1$$2.tail != null) {
    return _arg1$$2.tail;
  } else {
    throw new Error("List was empty");
  }
}
function List_last($_arg1$$3$$5) {
  last: while (true) {
    var _arg1$$3 = $_arg1$$3$$5;

    if (_arg1$$3.tail != null) {
      if (_arg1$$3.tail.tail == null) {
        return _arg1$$3.head;
      } else {
        $_arg1$$3$$5 = _arg1$$3.tail;
        continue last;
      }
    } else {
      throw new Error("List was empty");
    }

    break;
  }
}
function List_tryLast($_arg1$$4$$6) {
  tryLast: while (true) {
    var _arg1$$4 = $_arg1$$4$$6;

    if (_arg1$$4.tail != null) {
      if (_arg1$$4.tail.tail == null) {
        return some(_arg1$$4.head);
      } else {
        $_arg1$$4$$6 = _arg1$$4.tail;
        continue tryLast;
      }
    } else {
      return null;
    }

    break;
  }
}
function List_compareWith(comparer, xs$$3, ys) {
  if (xs$$3 === ys) {
    return 0;
  } else {
    var loop = function loop($xs$$4$$10, $ys$$1$$11) {
      loop: while (true) {
        var xs$$4 = $xs$$4$$10,
            ys$$1 = $ys$$1$$11;

        if (xs$$4.tail != null) {
          if (ys$$1.tail != null) {
            var matchValue$$1 = comparer(xs$$4.head, ys$$1.head) | 0;

            if (matchValue$$1 === 0) {
              $xs$$4$$10 = xs$$4.tail;
              $ys$$1$$11 = ys$$1.tail;
              continue loop;
            } else {
              return matchValue$$1 | 0;
            }
          } else {
            return 1;
          }
        } else if (ys$$1.tail == null) {
          return 0;
        } else {
          return -1 | 0;
        }

        break;
      }
    };

    return loop(xs$$3, ys) | 0;
  }
}
function foldIndexedAux($f$$12, $i$$13, $acc$$14, $_arg1$$5$$15) {
  foldIndexedAux: while (true) {
    var f = $f$$12,
        i = $i$$13,
        acc = $acc$$14,
        _arg1$$5 = $_arg1$$5$$15;

    if (_arg1$$5.tail != null) {
      $f$$12 = f;
      $i$$13 = i + 1;
      $acc$$14 = f(i, acc, _arg1$$5.head);
      $_arg1$$5$$15 = _arg1$$5.tail;
      continue foldIndexedAux;
    } else {
      return acc;
    }

    break;
  }
}
function List_foldIndexed(f$$1, state, xs$$7) {
  return foldIndexedAux(f$$1, 0, state, xs$$7);
}
function List_fold($f$$2$$19, $state$$1$$20, $xs$$8$$21) {
  fold: while (true) {
    var f$$2 = $f$$2$$19,
        state$$1 = $state$$1$$20,
        xs$$8 = $xs$$8$$21;

    if (xs$$8.tail != null) {
      $f$$2$$19 = f$$2;
      $state$$1$$20 = f$$2(state$$1, xs$$8.head);
      $xs$$8$$21 = xs$$8.tail;
      continue fold;
    } else {
      return state$$1;
    }

    break;
  }
}
function List_reverse(xs$$9) {
  return List_fold(function (acc$$1, x$$6) {
    return new List(x$$6, acc$$1);
  }, new List(), xs$$9);
}
function List_foldBack(f$$3, xs$$10, state$$2) {
  return List_fold(function (acc$$2, x$$7) {
    return f$$3(x$$7, acc$$2);
  }, state$$2, List_reverse(xs$$10));
}
function List_toSeq(xs$$11) {
  return Seq_map(function (x$$8) {
    return x$$8;
  }, xs$$11);
}
function List_ofSeq(xs$$12) {
  var xs$$13 = fold(function (acc$$3, x$$9) {
    return new List(x$$9, acc$$3);
  }, new List(), xs$$12);
  return List_reverse(xs$$13);
}
function List_concat(lists) {
  var xs$$15 = fold(function (state$$3, xs$$14) {
    return List_fold(function f$$4(acc$$4, x$$10) {
      return new List(x$$10, acc$$4);
    }, state$$3, xs$$14);
  }, new List(), lists);
  return List_reverse(xs$$15);
}
function foldIndexed2Aux($f$$5$$31, $i$$1$$32, $acc$$5$$33, $bs$$34, $cs$$35) {
  foldIndexed2Aux: while (true) {
    var f$$5 = $f$$5$$31,
        i$$1 = $i$$1$$32,
        acc$$5 = $acc$$5$$33,
        bs = $bs$$34,
        cs = $cs$$35;
    var $target$$36, x$$11, xs$$16, y$$1, ys$$3;

    if (bs.tail != null) {
      if (cs.tail != null) {
        $target$$36 = 1;
        x$$11 = bs.head;
        xs$$16 = bs.tail;
        y$$1 = cs.head;
        ys$$3 = cs.tail;
      } else {
        $target$$36 = 2;
      }
    } else if (cs.tail == null) {
      $target$$36 = 0;
    } else {
      $target$$36 = 2;
    }

    switch ($target$$36) {
      case 0:
        {
          return acc$$5;
        }

      case 1:
        {
          $f$$5$$31 = f$$5;
          $i$$1$$32 = i$$1 + 1;
          $acc$$5$$33 = f$$5(i$$1, acc$$5, x$$11, y$$1);
          $bs$$34 = xs$$16;
          $cs$$35 = ys$$3;
          continue foldIndexed2Aux;
        }

      case 2:
        {
          throw new Error("Lists had different lengths");
        }
    }

    break;
  }
}
function List_foldIndexed2(f$$6, state$$4, xs$$17, ys$$4) {
  return foldIndexed2Aux(f$$6, 0, state$$4, xs$$17, ys$$4);
}
function List_fold2(f$$7, state$$5, xs$$18, ys$$5) {
  return fold2(f$$7, state$$5, xs$$18, ys$$5);
}
function List_foldBack2(f$$8, xs$$19, ys$$6, state$$6) {
  return foldBack2(f$$8, xs$$19, ys$$6, state$$6);
}
function List_unfold(f$$9, state$$7) {
  var unfoldInner = function unfoldInner($acc$$6$$51, $state$$8$$52) {
    unfoldInner: while (true) {
      var acc$$6 = $acc$$6$$51,
          state$$8 = $state$$8$$52;
      var matchValue$$3 = f$$9(state$$8);

      if (matchValue$$3 != null) {
        var x$$12 = matchValue$$3[0];
        var state$$9 = matchValue$$3[1];
        $acc$$6$$51 = new List(x$$12, acc$$6);
        $state$$8$$52 = state$$9;
        continue unfoldInner;
      } else {
        return List_reverse(acc$$6);
      }

      break;
    }
  };

  return unfoldInner(new List(), state$$7);
}
function foldIndexed3Aux($f$$10$$53, $i$$2$$54, $acc$$7$$55, $bs$$1$$56, $cs$$1$$57, $ds$$58) {
  foldIndexed3Aux: while (true) {
    var f$$10 = $f$$10$$53,
        i$$2 = $i$$2$$54,
        acc$$7 = $acc$$7$$55,
        bs$$1 = $bs$$1$$56,
        cs$$1 = $cs$$1$$57,
        ds = $ds$$58;
    var $target$$59, x$$13, xs$$20, y$$2, ys$$7, z, zs;

    if (bs$$1.tail != null) {
      if (cs$$1.tail != null) {
        if (ds.tail != null) {
          $target$$59 = 1;
          x$$13 = bs$$1.head;
          xs$$20 = bs$$1.tail;
          y$$2 = cs$$1.head;
          ys$$7 = cs$$1.tail;
          z = ds.head;
          zs = ds.tail;
        } else {
          $target$$59 = 2;
        }
      } else {
        $target$$59 = 2;
      }
    } else if (cs$$1.tail == null) {
      if (ds.tail == null) {
        $target$$59 = 0;
      } else {
        $target$$59 = 2;
      }
    } else {
      $target$$59 = 2;
    }

    switch ($target$$59) {
      case 0:
        {
          return acc$$7;
        }

      case 1:
        {
          $f$$10$$53 = f$$10;
          $i$$2$$54 = i$$2 + 1;
          $acc$$7$$55 = f$$10(i$$2, acc$$7, x$$13, y$$2, z);
          $bs$$1$$56 = xs$$20;
          $cs$$1$$57 = ys$$7;
          $ds$$58 = zs;
          continue foldIndexed3Aux;
        }

      case 2:
        {
          throw new Error("Lists had different lengths");
        }
    }

    break;
  }
}
function foldIndexed3(f$$11, seed, xs$$21, ys$$8, zs$$1) {
  return foldIndexed3Aux(f$$11, 0, seed, xs$$21, ys$$8, zs$$1);
}
function fold3(f$$12, state$$10, xs$$22, ys$$9, zs$$2) {
  return foldIndexed3(function (_arg1$$6, acc$$8, x$$14, y$$3, z$$1) {
    return f$$12(acc$$8, x$$14, y$$3, z$$1);
  }, state$$10, xs$$22, ys$$9, zs$$2);
}
function List_scan(f$$13, state$$11, xs$$23) {
  var xs$$24 = scan(f$$13, state$$11, xs$$23);
  return List_ofSeq(xs$$24);
}
function List_scanBack(f$$14, xs$$25, state$$12) {
  var xs$$26 = scanBack(f$$14, xs$$25, state$$12);
  return List_ofSeq(xs$$26);
}
function List_length(xs$$27) {
  return List_fold(function (acc$$9, _arg1$$7) {
    return acc$$9 + 1;
  }, 0, xs$$27);
}
function List_append(xs$$28, ys$$10) {
  return List_fold(function (acc$$10, x$$15) {
    return new List(x$$15, acc$$10);
  }, ys$$10, List_reverse(xs$$28));
}
function List_collect(f$$15, xs$$29) {
  var xs$$30 = collect(f$$15, xs$$29);
  return List_ofSeq(xs$$30);
}
function List_map(f$$16, xs$$31) {
  var xs$$32 = List_fold(function (acc$$11, x$$16) {
    return new List(f$$16(x$$16), acc$$11);
  }, new List(), xs$$31);
  return List_reverse(xs$$32);
}
function List_mapIndexed(f$$17, xs$$33) {
  var xs$$34 = List_foldIndexed(function (i$$3, acc$$12, x$$17) {
    return new List(f$$17(i$$3, x$$17), acc$$12);
  }, new List(), xs$$33);
  return List_reverse(xs$$34);
}
function List_indexed(xs$$35) {
  return List_mapIndexed(function (i$$4, x$$18) {
    return [i$$4, x$$18];
  }, xs$$35);
}
function List_map2(f$$18, xs$$36, ys$$11) {
  var xs$$37 = List_fold2(function (acc$$13, x$$19, y$$4) {
    return new List(f$$18(x$$19, y$$4), acc$$13);
  }, new List(), xs$$36, ys$$11);
  return List_reverse(xs$$37);
}
function List_mapIndexed2(f$$19, xs$$38, ys$$12) {
  var xs$$39 = List_foldIndexed2(function (i$$5, acc$$14, x$$20, y$$5) {
    return new List(f$$19(i$$5, x$$20, y$$5), acc$$14);
  }, new List(), xs$$38, ys$$12);
  return List_reverse(xs$$39);
}
function List_map3(f$$20, xs$$40, ys$$13, zs$$3) {
  var xs$$41 = fold3(function (acc$$15, x$$21, y$$6, z$$2) {
    return new List(f$$20(x$$21, y$$6, z$$2), acc$$15);
  }, new List(), xs$$40, ys$$13, zs$$3);
  return List_reverse(xs$$41);
}
function List_mapIndexed3(f$$21, xs$$42, ys$$14, zs$$4) {
  var xs$$43 = foldIndexed3(function (i$$6, acc$$16, x$$22, y$$7, z$$3) {
    return new List(f$$21(i$$6, x$$22, y$$7, z$$3), acc$$16);
  }, new List(), xs$$42, ys$$14, zs$$4);
  return List_reverse(xs$$43);
}
function List_mapFold(f$$22, s, xs$$44) {
  var patternInput$$1 = List_fold(function foldFn(tupledArg, x$$23) {
    var patternInput = f$$22(tupledArg[1], x$$23);
    return [new List(patternInput[0], tupledArg[0]), patternInput[1]];
  }, [new List(), s], xs$$44);
  return [List_reverse(patternInput$$1[0]), patternInput$$1[1]];
}
function List_mapFoldBack(f$$23, xs$$45, s$$2) {
  return List_mapFold(function (s$$3, v) {
    return f$$23(v, s$$3);
  }, s$$2, List_reverse(xs$$45));
}
function List_iterate(f$$24, xs$$46) {
  List_fold(function (unitVar0, x$$24) {
    f$$24(x$$24);
  }, null, xs$$46);
}
function List_iterate2(f$$25, xs$$47, ys$$15) {
  List_fold2(function (unitVar0$$1, x$$25, y$$8) {
    f$$25(x$$25, y$$8);
  }, null, xs$$47, ys$$15);
}
function List_iterateIndexed(f$$26, xs$$48) {
  List_foldIndexed(function (i$$7, unitVar1, x$$26) {
    f$$26(i$$7, x$$26);
  }, null, xs$$48);
}
function List_iterateIndexed2(f$$27, xs$$49, ys$$16) {
  List_foldIndexed2(function (i$$8, unitVar1$$1, x$$27, y$$9) {
    f$$27(i$$8, x$$27, y$$9);
  }, null, xs$$49, ys$$16);
}
function List_ofArray(xs$$50) {
  var res$$1 = new List();

  for (var i$$9 = Util_count(xs$$50) - 1; i$$9 >= 0; i$$9--) {
    res$$1 = new List(xs$$50[i$$9], res$$1);
  }

  return res$$1;
}
function List_empty() {
  return new List();
}
function List_isEmpty(_arg1$$8) {
  if (_arg1$$8.tail == null) {
    return true;
  } else {
    return false;
  }
}
function tryPickIndexedAux($f$$28$$120, $i$$10$$121, $_arg1$$9$$122) {
  tryPickIndexedAux: while (true) {
    var f$$28 = $f$$28$$120,
        i$$10 = $i$$10$$121,
        _arg1$$9 = $_arg1$$9$$122;

    if (_arg1$$9.tail != null) {
      var result = f$$28(i$$10, _arg1$$9.head);

      if (result == null) {
        $f$$28$$120 = f$$28;
        $i$$10$$121 = i$$10 + 1;
        $_arg1$$9$$122 = _arg1$$9.tail;
        continue tryPickIndexedAux;
      } else {
        return result;
      }
    } else {
      return null;
    }

    break;
  }
}
function tryPickIndexed(f$$29, xs$$52) {
  return tryPickIndexedAux(f$$29, 0, xs$$52);
}
function List_tryPick(f$$30, xs$$53) {
  return tryPickIndexed(function (_arg1$$10, x$$29) {
    return f$$30(x$$29);
  }, xs$$53);
}
function List_pick(f$$31, xs$$54) {
  var matchValue$$5 = List_tryPick(f$$31, xs$$54);

  if (matchValue$$5 != null) {
    var x$$30 = Option_value(matchValue$$5);
    return x$$30;
  } else {
    throw new Error("List did not contain any matching elements");
  }
}
function tryFindIndexed(f$$32, xs$$55) {
  return tryPickIndexed(function (i$$11, x$$31) {
    return f$$32(i$$11, x$$31) ? some(x$$31) : null;
  }, xs$$55);
}
function List_tryFind(f$$33, xs$$56) {
  return tryPickIndexed(function (_arg1$$11, x$$32) {
    return f$$33(x$$32) ? some(x$$32) : null;
  }, xs$$56);
}
function findIndexed(f$$34, xs$$57) {
  var matchValue$$6 = tryFindIndexed(f$$34, xs$$57);

  if (matchValue$$6 != null) {
    var x$$33 = Option_value(matchValue$$6);
    return x$$33;
  } else {
    throw new Error("List did not contain any matching elements");
  }
}
function List_find(f$$35, xs$$58) {
  return findIndexed(function (_arg1$$12, x$$34) {
    return f$$35(x$$34);
  }, xs$$58);
}
function List_findBack(f$$36, xs$$59) {
  var xs$$61;
  xs$$61 = List_reverse(xs$$59);
  return List_find(f$$36, xs$$61);
}
function List_tryFindBack(f$$37, xs$$62) {
  var xs$$64;
  xs$$64 = List_reverse(xs$$62);
  return List_tryFind(f$$37, xs$$64);
}
function List_tryFindIndex(f$$38, xs$$65) {
  return tryPickIndexed(function (i$$12, x$$35) {
    return f$$38(x$$35) ? i$$12 : null;
  }, xs$$65);
}
function List_tryFindIndexBack(f$$39, xs$$66) {
  var array = Array_ofList(xs$$66, Array);
  return Array_tryFindIndexBack(f$$39, array);
}
function List_findIndex(f$$40, xs$$67) {
  var matchValue$$7 = List_tryFindIndex(f$$40, xs$$67);

  if (matchValue$$7 != null) {
    var x$$36 = matchValue$$7 | 0;
    return x$$36 | 0;
  } else {
    throw new Error("List did not contain any matching elements");
  }
}
function List_findIndexBack(f$$41, xs$$68) {
  var array$$1 = Array_ofList(xs$$68, Array);
  return Array_findIndexBack(f$$41, array$$1) | 0;
}
function List_item(n, xs$$69) {
  return findIndexed(function (i$$13, _arg1$$13) {
    return n === i$$13;
  }, xs$$69);
}
function List_tryItem(n$$1, xs$$70) {
  return tryFindIndexed(function (i$$14, _arg1$$14) {
    return n$$1 === i$$14;
  }, xs$$70);
}
function List_filter(f$$42, xs$$71) {
  var xs$$72 = List_fold(function (acc$$17, x$$37) {
    return f$$42(x$$37) ? new List(x$$37, acc$$17) : acc$$17;
  }, new List(), xs$$71);
  return List_reverse(xs$$72);
}
function List_partition(f$$43, xs$$73) {
  return List_fold(function (tupledArg$$1, x$$38) {
    return f$$43(x$$38) ? [new List(x$$38, tupledArg$$1[0]), tupledArg$$1[1]] : [tupledArg$$1[0], new List(x$$38, tupledArg$$1[1])];
  }, [new List(), new List()], List_reverse(xs$$73));
}
function List_choose(f$$44, xs$$74) {
  var xs$$75 = List_fold(function (acc$$18, x$$39) {
    var matchValue$$8 = f$$44(x$$39);

    if (matchValue$$8 == null) {
      return acc$$18;
    } else {
      var y$$10 = Option_value(matchValue$$8);
      return new List(y$$10, acc$$18);
    }
  }, new List(), xs$$74);
  return List_reverse(xs$$75);
}
function List_contains(value, list, eq) {
  var loop$$1 = function loop$$1($xs$$76$$162) {
    loop$$1: while (true) {
      var xs$$76 = $xs$$76$$162;

      if (xs$$76.tail != null) {
        if (eq.Equals(value, xs$$76.head)) {
          return true;
        } else {
          $xs$$76$$162 = xs$$76.tail;
          continue loop$$1;
        }
      } else {
        return false;
      }

      break;
    }
  };

  return loop$$1(list);
}
function List_except(itemsToExclude, array$$2, eq$$1) {
  if (List_isEmpty(array$$2)) {
    return array$$2;
  } else {
    var cached = Set_createMutable(itemsToExclude, eq$$1);
    return List_filter(function f$$45(arg00) {
      return addToSet(arg00, cached);
    }, array$$2);
  }
}
function List_initialize(n$$2, f$$46) {
  var xs$$78 = new List();

  for (var i$$15 = 1; i$$15 <= n$$2; i$$15++) {
    xs$$78 = new List(f$$46(n$$2 - i$$15), xs$$78);
  }

  return xs$$78;
}
function List_replicate(n$$3, x$$40) {
  return List_initialize(n$$3, function (_arg1$$15) {
    return x$$40;
  });
}
function List_reduce(f$$47, _arg1$$16) {
  if (_arg1$$16.tail != null) {
    return List_fold(f$$47, _arg1$$16.head, _arg1$$16.tail);
  } else {
    throw new Error("List was empty");
  }
}
function List_reduceBack(f$$48, _arg1$$17) {
  if (_arg1$$17.tail != null) {
    return List_foldBack(f$$48, _arg1$$17.tail, _arg1$$17.head);
  } else {
    throw new Error("List was empty");
  }
}
function List_forAll(f$$49, xs$$79) {
  return List_fold(function (acc$$19, x$$41) {
    return acc$$19 ? f$$49(x$$41) : false;
  }, true, xs$$79);
}
function List_forAll2(f$$50, xs$$80, ys$$17) {
  return List_fold2(function (acc$$20, x$$42, y$$11) {
    return acc$$20 ? f$$50(x$$42, y$$11) : false;
  }, true, xs$$80, ys$$17);
}
function List_exists($f$$51$$180, $_arg1$$18$$181) {
  exists: while (true) {
    var f$$51 = $f$$51$$180,
        _arg1$$18 = $_arg1$$18$$181;

    if (_arg1$$18.tail != null) {
      if (f$$51(_arg1$$18.head)) {
        return true;
      } else {
        $f$$51$$180 = f$$51;
        $_arg1$$18$$181 = _arg1$$18.tail;
        continue exists;
      }
    } else {
      return false;
    }

    break;
  }
}
function List_exists2($f$$52$$182, $bs$$2$$183, $cs$$2$$184) {
  exists2: while (true) {
    var f$$52 = $f$$52$$182,
        bs$$2 = $bs$$2$$183,
        cs$$2 = $cs$$2$$184;
    var $target$$185, x$$44, xs$$82, y$$12, ys$$18;

    if (bs$$2.tail != null) {
      if (cs$$2.tail != null) {
        $target$$185 = 1;
        x$$44 = bs$$2.head;
        xs$$82 = bs$$2.tail;
        y$$12 = cs$$2.head;
        ys$$18 = cs$$2.tail;
      } else {
        $target$$185 = 2;
      }
    } else if (cs$$2.tail == null) {
      $target$$185 = 0;
    } else {
      $target$$185 = 2;
    }

    switch ($target$$185) {
      case 0:
        {
          return false;
        }

      case 1:
        {
          if (f$$52(x$$44, y$$12)) {
            return true;
          } else {
            $f$$52$$182 = f$$52;
            $bs$$2$$183 = xs$$82;
            $cs$$2$$184 = ys$$18;
            continue exists2;
          }
        }

      case 2:
        {
          throw new Error("Lists had different lengths");
        }
    }

    break;
  }
}
function List_unzip(xs$$83) {
  return List_foldBack(function (tupledArg$$2, tupledArg$$3) {
    return [new List(tupledArg$$2[0], tupledArg$$3[0]), new List(tupledArg$$2[1], tupledArg$$3[1])];
  }, xs$$83, [new List(), new List()]);
}
function List_unzip3(xs$$84) {
  return List_foldBack(function (tupledArg$$4, tupledArg$$5) {
    return [new List(tupledArg$$4[0], tupledArg$$5[0]), new List(tupledArg$$4[1], tupledArg$$5[1]), new List(tupledArg$$4[2], tupledArg$$5[2])];
  }, xs$$84, [new List(), new List(), new List()]);
}
function List_zip(xs$$85, ys$$19) {
  return List_map2(function (x$$47, y$$15) {
    return [x$$47, y$$15];
  }, xs$$85, ys$$19);
}
function List_zip3(xs$$86, ys$$20, zs$$5) {
  return List_map3(function (x$$48, y$$16, z$$5) {
    return [x$$48, y$$16, z$$5];
  }, xs$$86, ys$$20, zs$$5);
}
function List_sort(xs$$87, comparer$$1) {
  var xs$$89;
  var xs$$88 = Array_ofList(xs$$87, Array);
  xs$$88.sort(function comparer$$2(x$$49, y$$17) {
    return comparer$$1.Compare(x$$49, y$$17);
  });
  xs$$89 = xs$$88;
  return List_ofArray(xs$$89);
}
function List_sortBy(projection, xs$$90, comparer$$3) {
  var xs$$92;
  var xs$$91 = Array_ofList(xs$$90, Array);
  xs$$91.sort(function comparer$$4(x$$50, y$$18) {
    return comparer$$3.Compare(projection(x$$50), projection(y$$18));
  });
  xs$$92 = xs$$91;
  return List_ofArray(xs$$92);
}
function List_sortDescending(xs$$93, comparer$$5) {
  var xs$$95;
  var xs$$94 = Array_ofList(xs$$93, Array);
  xs$$94.sort(function comparer$$6(x$$51, y$$19) {
    return comparer$$5.Compare(x$$51, y$$19) * -1;
  });
  xs$$95 = xs$$94;
  return List_ofArray(xs$$95);
}
function List_sortByDescending(projection$$1, xs$$96, comparer$$7) {
  var xs$$98;
  var xs$$97 = Array_ofList(xs$$96, Array);
  xs$$97.sort(function comparer$$8(x$$52, y$$20) {
    return comparer$$7.Compare(projection$$1(x$$52), projection$$1(y$$20)) * -1;
  });
  xs$$98 = xs$$97;
  return List_ofArray(xs$$98);
}
function List_sortWith(comparer$$9, xs$$99) {
  var xs$$101;
  var xs$$100 = Array_ofList(xs$$99, Array);
  xs$$100.sort(comparer$$9);
  xs$$101 = xs$$100;
  return List_ofArray(xs$$101);
}
function List_sum(xs$$102, adder) {
  return List_fold(function (acc$$21, x$$53) {
    return adder.Add(acc$$21, x$$53);
  }, adder.GetZero(), xs$$102);
}
function List_sumBy(f$$53, xs$$103, adder$$1) {
  return List_fold(function (acc$$22, x$$54) {
    return adder$$1.Add(acc$$22, f$$53(x$$54));
  }, adder$$1.GetZero(), xs$$103);
}
function List_maxBy(projection$$2, xs$$104, comparer$$11) {
  return List_reduce(function (x$$55, y$$21) {
    return comparer$$11.Compare(projection$$2(y$$21), projection$$2(x$$55)) > 0 ? y$$21 : x$$55;
  }, xs$$104);
}
function List_max(li, comparer$$12) {
  return List_reduce(function (x$$56, y$$22) {
    return comparer$$12.Compare(y$$22, x$$56) > 0 ? y$$22 : x$$56;
  }, li);
}
function List_minBy(projection$$3, xs$$105, comparer$$13) {
  return List_reduce(function (x$$57, y$$23) {
    return comparer$$13.Compare(projection$$3(y$$23), projection$$3(x$$57)) > 0 ? x$$57 : y$$23;
  }, xs$$105);
}
function List_min(xs$$106, comparer$$14) {
  return List_reduce(function (x$$58, y$$24) {
    return comparer$$14.Compare(y$$24, x$$58) > 0 ? x$$58 : y$$24;
  }, xs$$106);
}
function List_average(xs$$107, averager) {
  var total = List_fold(function (acc$$23, x$$59) {
    return averager.Add(acc$$23, x$$59);
  }, averager.GetZero(), xs$$107);
  return averager.DivideByInt(total, List_length(xs$$107));
}
function List_averageBy(f$$54, xs$$108, averager$$1) {
  var total$$1 = List_fold(function (acc$$24, x$$60) {
    return averager$$1.Add(acc$$24, f$$54(x$$60));
  }, averager$$1.GetZero(), xs$$108);
  return averager$$1.DivideByInt(total$$1, List_length(xs$$108));
}
function List_permute(f$$55, xs$$109) {
  var xs$$110;
  var array$$3;
  array$$3 = Array_ofList(xs$$109, Array);
  xs$$110 = permute(f$$55, array$$3);
  return List_ofArray(xs$$110);
}
function List_chunkBySize(chunkSize, xs$$111) {
  var xs$$114;
  var xs$$112;
  var array$$4;
  array$$4 = Array_ofList(xs$$111, Array);
  xs$$112 = chunkBySize(chunkSize, array$$4);
  xs$$114 = List_ofArray(xs$$112);
  return List_map(function f$$56(xs$$113) {
    return List_ofArray(xs$$113);
  }, xs$$114);
}
function List_skip(i$$16, xs$$115) {
  var skipInner = function skipInner($i$$17$$240, $xs$$116$$241) {
    skipInner: while (true) {
      var i$$17 = $i$$17$$240,
          xs$$116 = $xs$$116$$241;

      if (i$$17 === 0) {
        return xs$$116;
      } else if (xs$$116.tail != null) {
        $i$$17$$240 = i$$17 - 1;
        $xs$$116$$241 = xs$$116.tail;
        continue skipInner;
      } else {
        throw new Error("The input sequence has an insufficient number of elements.");
      }

      break;
    }
  };

  if (i$$16 < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$242, i$$20, xs$$119;

    if (i$$16 === 0) {
      $target$$242 = 0;
    } else if (i$$16 === 1) {
      if (xs$$115.tail != null) {
        $target$$242 = 1;
      } else {
        $target$$242 = 2;
        i$$20 = i$$16;
        xs$$119 = xs$$115;
      }
    } else {
      $target$$242 = 2;
      i$$20 = i$$16;
      xs$$119 = xs$$115;
    }

    switch ($target$$242) {
      case 0:
        {
          return xs$$115;
        }

      case 1:
        {
          return xs$$115.tail;
        }

      case 2:
        {
          return skipInner(i$$20, xs$$119);
        }
    }
  }
}
function List_skipWhile($predicate$$243, $xs$$120$$244) {
  skipWhile: while (true) {
    var predicate = $predicate$$243,
        xs$$120 = $xs$$120$$244;
    var $target$$245, h$$4, t$$4;

    if (xs$$120.tail != null) {
      if (predicate(xs$$120.head)) {
        $target$$245 = 0;
        h$$4 = xs$$120.head;
        t$$4 = xs$$120.tail;
      } else {
        $target$$245 = 1;
      }
    } else {
      $target$$245 = 1;
    }

    switch ($target$$245) {
      case 0:
        {
          $predicate$$243 = predicate;
          $xs$$120$$244 = t$$4;
          continue skipWhile;
        }

      case 1:
        {
          return xs$$120;
        }
    }

    break;
  }
}
function takeSplitAux($error$$246, $i$$21$$247, $acc$$25$$248, $xs$$121$$249) {
  takeSplitAux: while (true) {
    var error = $error$$246,
        i$$21 = $i$$21$$247,
        acc$$25 = $acc$$25$$248,
        xs$$121 = $xs$$121$$249;

    if (i$$21 === 0) {
      return [List_reverse(acc$$25), xs$$121];
    } else if (xs$$121.tail != null) {
      $error$$246 = error;
      $i$$21$$247 = i$$21 - 1;
      $acc$$25$$248 = new List(xs$$121.head, acc$$25);
      $xs$$121$$249 = xs$$121.tail;
      continue takeSplitAux;
    } else {
      if (error) {
        throw new Error("The input sequence has an insufficient number of elements.");
      } else {
        return [List_reverse(acc$$25), xs$$121];
      }
    }

    break;
  }
}
function List_take(i$$22, xs$$123) {
  if (i$$22 < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$252, i$$25, xs$$124;

    if (i$$22 === 0) {
      $target$$252 = 0;
    } else if (i$$22 === 1) {
      if (xs$$123.tail != null) {
        $target$$252 = 1;
      } else {
        $target$$252 = 2;
        i$$25 = i$$22;
        xs$$124 = xs$$123;
      }
    } else {
      $target$$252 = 2;
      i$$25 = i$$22;
      xs$$124 = xs$$123;
    }

    switch ($target$$252) {
      case 0:
        {
          return new List();
        }

      case 1:
        {
          return new List(xs$$123.head, new List());
        }

      case 2:
        {
          var tuple = takeSplitAux(true, i$$25, new List(), xs$$124);
          return tuple[0];
        }
    }
  }
}
function List_takeWhile(predicate$$1, xs$$125) {
  if (xs$$125.tail != null) {
    if (xs$$125.tail.tail == null) {
      if (predicate$$1(xs$$125.head)) {
        return xs$$125;
      } else {
        return xs$$125.tail;
      }
    } else {
      if (!predicate$$1(xs$$125.head)) {
        return new List();
      } else {
        return new List(xs$$125.head, List_takeWhile(predicate$$1, xs$$125.tail));
      }
    }
  } else {
    return xs$$125;
  }
}
function List_truncate(i$$26, xs$$127) {
  if (i$$26 < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$257, i$$29, xs$$128;

    if (i$$26 === 0) {
      $target$$257 = 0;
    } else if (i$$26 === 1) {
      if (xs$$127.tail != null) {
        $target$$257 = 1;
      } else {
        $target$$257 = 2;
        i$$29 = i$$26;
        xs$$128 = xs$$127;
      }
    } else {
      $target$$257 = 2;
      i$$29 = i$$26;
      xs$$128 = xs$$127;
    }

    switch ($target$$257) {
      case 0:
        {
          return new List();
        }

      case 1:
        {
          return new List(xs$$127.head, new List());
        }

      case 2:
        {
          var tuple$$1 = takeSplitAux(false, i$$29, new List(), xs$$128);
          return tuple$$1[0];
        }
    }
  }
}
function List_splitAt(i$$30, xs$$129) {
  if (i$$30 < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$260, i$$33, xs$$131;

    if (i$$30 === 0) {
      $target$$260 = 0;
    } else if (i$$30 === 1) {
      if (xs$$129.tail != null) {
        $target$$260 = 1;
      } else {
        $target$$260 = 2;
        i$$33 = i$$30;
        xs$$131 = xs$$129;
      }
    } else {
      $target$$260 = 2;
      i$$33 = i$$30;
      xs$$131 = xs$$129;
    }

    switch ($target$$260) {
      case 0:
        {
          return [new List(), xs$$129];
        }

      case 1:
        {
          return [new List(xs$$129.head, new List()), xs$$129.tail];
        }

      case 2:
        {
          return takeSplitAux(true, i$$33, new List(), xs$$131);
        }
    }
  }
}
function outOfRange() {
  throw new Error("Index out of range");
}
function slice(lower, upper, xs$$132) {
  var lower$$1 = defaultArg(lower, 0) | 0;
  var hasUpper = upper != null;

  if (lower$$1 < 0) {
    return outOfRange();
  } else if (hasUpper ? upper < lower$$1 : false) {
    return new List();
  } else {
    var lastIndex = -1 | 0;
    var res$$2;
    var state$$13 = new List();
    res$$2 = List_foldIndexed(function f$$57(i$$34, acc$$26, x$$67) {
      lastIndex = i$$34;

      if (lower$$1 <= i$$34 ? !hasUpper ? true : i$$34 <= upper : false) {
        return new List(x$$67, acc$$26);
      } else {
        return acc$$26;
      }
    }, state$$13, xs$$132);

    if (lower$$1 > lastIndex + 1 ? true : hasUpper ? upper > lastIndex : false) {
      outOfRange();
    }

    return List_reverse(res$$2);
  }
}
function List_distinctBy(projection$$4, xs$$134, eq$$2) {
  var hashSet = Set_createMutable([], eq$$2);
  return List_filter(function f$$58($arg$$1) {
    var arg00$$1 = projection$$4($arg$$1);
    return addToSet(arg00$$1, hashSet);
  }, xs$$134);
}
function List_distinct(xs$$136, eq$$3) {
  return List_distinctBy(function (x$$68) {
    return x$$68;
  }, xs$$136, eq$$3);
}
function List_exactlyOne(xs$$137) {
  if (xs$$137.tail != null) {
    if (xs$$137.tail.tail != null) {
      throw new Error("Input list too long\\nParameter name: list");
    } else {
      return xs$$137.head;
    }
  } else {
    throw new Error("The input sequence was empty\\nParameter name: list");
  }
}
function List_groupBy(projection$$5, xs$$139, eq$$4) {
  var dict = createMutable([], eq$$4);
  var keys = new List();
  List_iterate(function f$$59(v$$2) {
    var key = projection$$5(v$$2);
    var matchValue$$16 = tryGetValue(dict, key, null);

    if (matchValue$$16[0]) {
      dict.set(key, new List(v$$2, matchValue$$16[1]));
    } else {
      addToDict(dict, key, new List(v$$2, new List()));
      keys = new List(key, keys);
    }
  }, xs$$139);
  var result$$1 = new List();
  var xs$$141 = keys;
  List_iterate(function f$$60(key$$1) {
    result$$1 = new List([key$$1, List_reverse(getItemFromDict(dict, key$$1))], result$$1);
  }, xs$$141);
  return result$$1;
}
function List_countBy(projection$$6, xs$$142, eq$$5) {
  var dict$$1 = createMutable([], eq$$5);
  var keys$$1 = new List();
  List_iterate(function f$$61(v$$3) {
    var key$$2 = projection$$6(v$$3);
    var matchValue$$17 = tryGetValue(dict$$1, key$$2, 0);

    if (matchValue$$17[0]) {
      dict$$1.set(key$$2, matchValue$$17[1] + 1);
    } else {
      dict$$1.set(key$$2, 1);
      keys$$1 = new List(key$$2, keys$$1);
    }
  }, xs$$142);
  var result$$2 = new List();
  var xs$$144 = keys$$1;
  List_iterate(function f$$62(key$$3) {
    result$$2 = new List([key$$3, getItemFromDict(dict$$1, key$$3)], result$$2);
  }, xs$$144);
  return result$$2;
}
function List_where(predicate$$2, xs$$145) {
  return List_filter(predicate$$2, xs$$145);
}
function List_pairwise(xs$$146) {
  var inner = function inner($xs$$147$$287, $acc$$27$$288, $x1$$1$$289) {
    inner: while (true) {
      var xs$$147 = $xs$$147$$287,
          acc$$27 = $acc$$27$$288,
          x1$$1 = $x1$$1$$289;

      if (xs$$147.tail != null) {
        var copyOfStruct = acc$$27;
        copyOfStruct.push([x1$$1, xs$$147.head]);
        $xs$$147$$287 = xs$$147.tail;
        $acc$$27$$288 = acc$$27;
        $x1$$1$$289 = xs$$147.head;
        continue inner;
      } else {
        return List_ofArray(acc$$27);
      }

      break;
    }
  };

  var $target$$290, x1$$2, x2$$2, xs$$149;

  if (xs$$146.tail != null) {
    if (xs$$146.tail.tail != null) {
      $target$$290 = 1;
      x1$$2 = xs$$146.head;
      x2$$2 = xs$$146.tail.head;
      xs$$149 = xs$$146.tail.tail;
    } else {
      $target$$290 = 0;
    }
  } else {
    $target$$290 = 0;
  }

  switch ($target$$290) {
    case 0:
      {
        return new List();
      }

    case 1:
      {
        var acc$$28 = [];
        acc$$28.push([x1$$2, x2$$2]);
        var clo1 = partialApply(2, inner, [xs$$149]);
        var clo2 = clo1(acc$$28);
        return clo2(x2$$2);
      }
  }
}
function List_windowed(windowSize, source) {
  if (windowSize <= 0) {
    throw new Error("windowSize must be positive");
  }

  var res$$3 = new List();

  for (var i$$35 = List_length(source); i$$35 >= windowSize; i$$35--) {
    res$$3 = new List(slice(i$$35 - windowSize, i$$35 - 1, source), res$$3);
  }

  return res$$3;
}
function List_splitInto(chunks, source$$1) {
  var xs$$152;
  var xs$$150;
  var array$$5;
  array$$5 = Array_ofList(source$$1, Array);
  xs$$150 = splitInto(chunks, array$$5);
  xs$$152 = List_ofArray(xs$$150);
  return List_map(function f$$63(xs$$151) {
    return List_ofArray(xs$$151);
  }, xs$$152);
}
function List_transpose(lists$$1) {
  var xs$$154;
  var source$$3;
  source$$3 = transpose(lists$$1);
  xs$$154 = Seq_map(List_ofSeq, source$$3);
  return List_ofSeq(xs$$154);
}
// CONCATENATED MODULE: ./src/Test.fs



var Test_view = function () {
  var props = [];
  var children = [];
  return react["createElement"].apply(react, ["div", createObj(props, 1)].concat(children));
}();
// CONCATENATED MODULE: ./src/Translations/KJV/Exodus.fs













function Exodus_toConsumableArray(arr) { return Exodus_arrayWithoutHoles(arr) || Exodus_iterableToArray(arr) || Exodus_nonIterableSpread(); }

function Exodus_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function Exodus_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function Exodus_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }






var exod1 = function () {
  var props$$22, children$$12, props, children, props$$2, props$$4, children$$2, props$$6, props$$8, children$$4, props$$10, props$$12, children$$6, props$$14, props$$16, children$$8, props$$18, props$$20, children$$10, props$$54, children$$30, props$$24, children$$14, props$$26, props$$28, children$$16, props$$30, props$$32, children$$18, props$$34, props$$36, children$$20, props$$38, props$$40, children$$22, props$$42, props$$44, children$$24, props$$46, props$$48, children$$26, props$$50, props$$52, children$$28, props$$86, children$$48, props$$56, children$$32, props$$58, props$$60, children$$34, props$$62, props$$64, children$$36, props$$66, props$$68, children$$38, props$$70, props$$72, children$$40, props$$74, props$$76, children$$42, props$$78, props$$80, children$$44, props$$82, props$$84, children$$46;
  var props$$88 = [];
  var children$$50 = [(props$$22 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$12 = [(props = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children = ["1"], react["createElement"].apply(react, ["span", createObj(props, 1)].concat(Exodus_toConsumableArray(children))))), "Now these are the names of the children of Israel, which came into Egypt; every man and his household came with Jacob.", (props$$2 = [], react["createElement"].apply(react, ["br", createObj(props$$2, 1)].concat([]))), (props$$4 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$2 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$4, 1)].concat(Exodus_toConsumableArray(children$$2))))), "Reuben, Simeon, Levi, and Judah,", (props$$6 = [], react["createElement"].apply(react, ["br", createObj(props$$6, 1)].concat([]))), (props$$8 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$4 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$8, 1)].concat(Exodus_toConsumableArray(children$$4))))), "Issachar, Zebulun, and Benjamin,", (props$$10 = [], react["createElement"].apply(react, ["br", createObj(props$$10, 1)].concat([]))), (props$$12 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$6 = ["4"], react["createElement"].apply(react, ["span", createObj(props$$12, 1)].concat(Exodus_toConsumableArray(children$$6))))), "Dan, and Naphtali, Gad, and Asher.", (props$$14 = [], react["createElement"].apply(react, ["br", createObj(props$$14, 1)].concat([]))), (props$$16 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$8 = ["5"], react["createElement"].apply(react, ["span", createObj(props$$16, 1)].concat(Exodus_toConsumableArray(children$$8))))), "And all the souls that came out of the loins of Jacob were seventy souls: for Joseph was in Egypt already.", (props$$18 = [], react["createElement"].apply(react, ["br", createObj(props$$18, 1)].concat([]))), (props$$20 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$10 = ["6"], react["createElement"].apply(react, ["span", createObj(props$$20, 1)].concat(Exodus_toConsumableArray(children$$10))))), "And Joseph died, and all his brethren, and all that generation."], react["createElement"].apply(react, ["p", createObj(props$$22, 1)].concat(Exodus_toConsumableArray(children$$12))))), (props$$54 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$30 = [(props$$24 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$14 = ["7"], react["createElement"].apply(react, ["span", createObj(props$$24, 1)].concat(Exodus_toConsumableArray(children$$14))))), "And the children of Israel were fruitful, and increased abundantly, and multiplied, and waxed exceeding mighty; and the land was filled with them.", (props$$26 = [], react["createElement"].apply(react, ["br", createObj(props$$26, 1)].concat([]))), (props$$28 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$16 = ["8"], react["createElement"].apply(react, ["span", createObj(props$$28, 1)].concat(Exodus_toConsumableArray(children$$16))))), "Now there arose up a new king over Egypt, which knew not Joseph.", (props$$30 = [], react["createElement"].apply(react, ["br", createObj(props$$30, 1)].concat([]))), (props$$32 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$18 = ["9"], react["createElement"].apply(react, ["span", createObj(props$$32, 1)].concat(Exodus_toConsumableArray(children$$18))))), "And he said unto his people, Behold, the people of the children of Israel are more and mightier than we:", (props$$34 = [], react["createElement"].apply(react, ["br", createObj(props$$34, 1)].concat([]))), (props$$36 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$20 = ["10"], react["createElement"].apply(react, ["span", createObj(props$$36, 1)].concat(Exodus_toConsumableArray(children$$20))))), "Come on, let us deal wisely with them; lest they multiply, and it come to pass, that, when there falleth out any war, they join also unto our enemies, and fight against us, and so get them up out of the land.", (props$$38 = [], react["createElement"].apply(react, ["br", createObj(props$$38, 1)].concat([]))), (props$$40 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$22 = ["11"], react["createElement"].apply(react, ["span", createObj(props$$40, 1)].concat(Exodus_toConsumableArray(children$$22))))), "Therefore they did set over them taskmasters to afflict them with their burdens. And they built for Pharaoh treasure cities, Pithom and Raamses.", (props$$42 = [], react["createElement"].apply(react, ["br", createObj(props$$42, 1)].concat([]))), (props$$44 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$24 = ["12"], react["createElement"].apply(react, ["span", createObj(props$$44, 1)].concat(Exodus_toConsumableArray(children$$24))))), "But the more they afflicted them, the more they multiplied and grew. And they were grieved because of the children of Israel.", (props$$46 = [], react["createElement"].apply(react, ["br", createObj(props$$46, 1)].concat([]))), (props$$48 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$26 = ["13"], react["createElement"].apply(react, ["span", createObj(props$$48, 1)].concat(Exodus_toConsumableArray(children$$26))))), "And the Egyptians made the children of Israel to serve with rigour:", (props$$50 = [], react["createElement"].apply(react, ["br", createObj(props$$50, 1)].concat([]))), (props$$52 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$28 = ["14"], react["createElement"].apply(react, ["span", createObj(props$$52, 1)].concat(Exodus_toConsumableArray(children$$28))))), "And they made their lives bitter with hard bondage, in morter, and in brick, and in all manner of service in the field: all their service, wherein they made them serve, was with rigour."], react["createElement"].apply(react, ["p", createObj(props$$54, 1)].concat(Exodus_toConsumableArray(children$$30))))), (props$$86 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$48 = [(props$$56 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$32 = ["15"], react["createElement"].apply(react, ["span", createObj(props$$56, 1)].concat(Exodus_toConsumableArray(children$$32))))), "And the king of Egypt spake to the Hebrew midwives, of which the name of the one was Shiphrah, and the name of the other Puah:", (props$$58 = [], react["createElement"].apply(react, ["br", createObj(props$$58, 1)].concat([]))), (props$$60 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$34 = ["16"], react["createElement"].apply(react, ["span", createObj(props$$60, 1)].concat(Exodus_toConsumableArray(children$$34))))), "And he said, When ye do the office of a midwife to the Hebrew women, and see them upon the stools; if it be a son, then ye shall kill him: but if it be a daughter, then she shall live.", (props$$62 = [], react["createElement"].apply(react, ["br", createObj(props$$62, 1)].concat([]))), (props$$64 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$36 = ["17"], react["createElement"].apply(react, ["span", createObj(props$$64, 1)].concat(Exodus_toConsumableArray(children$$36))))), "But the midwives feared God, and did not as the king of Egypt commanded them, but saved the men children alive.", (props$$66 = [], react["createElement"].apply(react, ["br", createObj(props$$66, 1)].concat([]))), (props$$68 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$38 = ["18"], react["createElement"].apply(react, ["span", createObj(props$$68, 1)].concat(Exodus_toConsumableArray(children$$38))))), "And the king of Egypt called for the midwives, and said unto them, Why have ye done this thing, and have saved the men children alive?", (props$$70 = [], react["createElement"].apply(react, ["br", createObj(props$$70, 1)].concat([]))), (props$$72 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$40 = ["19"], react["createElement"].apply(react, ["span", createObj(props$$72, 1)].concat(Exodus_toConsumableArray(children$$40))))), "And the midwives said unto Pharaoh, Because the Hebrew women are not as the Egyptian women; for they are lively, and are delivered ere the midwives come in unto them.", (props$$74 = [], react["createElement"].apply(react, ["br", createObj(props$$74, 1)].concat([]))), (props$$76 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$42 = ["20"], react["createElement"].apply(react, ["span", createObj(props$$76, 1)].concat(Exodus_toConsumableArray(children$$42))))), "Therefore God dealt well with the midwives: and the people multiplied, and waxed very mighty.", (props$$78 = [], react["createElement"].apply(react, ["br", createObj(props$$78, 1)].concat([]))), (props$$80 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$44 = ["21"], react["createElement"].apply(react, ["span", createObj(props$$80, 1)].concat(Exodus_toConsumableArray(children$$44))))), "And it came to pass, because the midwives feared God, that he made them houses.", (props$$82 = [], react["createElement"].apply(react, ["br", createObj(props$$82, 1)].concat([]))), (props$$84 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$46 = ["22"], react["createElement"].apply(react, ["span", createObj(props$$84, 1)].concat(Exodus_toConsumableArray(children$$46))))), "And Pharaoh charged all his people, saying, Every son that is born ye shall cast into the river, and every daughter ye shall save alive."], react["createElement"].apply(react, ["p", createObj(props$$86, 1)].concat(Exodus_toConsumableArray(children$$48)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$88, 1)].concat(children$$50));
}();
var exod2 = function () {
  var props$$104, children$$60, props$$90, children$$52, props$$92, props$$94, children$$54, props$$96, props$$98, children$$56, props$$100, props$$102, children$$58, props$$128, children$$74, props$$106, children$$62, props$$108, props$$110, children$$64, props$$112, props$$114, children$$66, props$$116, props$$118, children$$68, props$$120, props$$122, children$$70, props$$124, props$$126, children$$72, props$$176, children$$100, props$$130, children$$76, props$$132, props$$134, children$$78, props$$136, props$$138, children$$80, props$$140, props$$142, children$$82, props$$144, props$$146, children$$84, props$$148, props$$150, children$$86, props$$152, props$$154, children$$88, props$$156, props$$158, children$$90, props$$160, props$$162, children$$92, props$$164, props$$166, children$$94, props$$168, props$$170, children$$96, props$$172, props$$174, children$$98, props$$188, children$$108, props$$178, children$$102, props$$180, props$$182, children$$104, props$$184, props$$186, children$$106;
  var props$$190 = [];
  var children$$110 = [(props$$104 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$60 = [(props$$90 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$52 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$90, 1)].concat(Exodus_toConsumableArray(children$$52))))), "And there went a man of the house of Levi, and took to wife a daughter of Levi.", (props$$92 = [], react["createElement"].apply(react, ["br", createObj(props$$92, 1)].concat([]))), (props$$94 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$54 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$94, 1)].concat(Exodus_toConsumableArray(children$$54))))), "And the woman conceived, and bare a son: and when she saw him that he was a goodly child, she hid him three months.", (props$$96 = [], react["createElement"].apply(react, ["br", createObj(props$$96, 1)].concat([]))), (props$$98 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$56 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$98, 1)].concat(Exodus_toConsumableArray(children$$56))))), "And when she could not longer hide him, she took for him an ark of bulrushes, and daubed it with slime and with pitch, and put the child therein; and she laid it in the flags by the river's brink.", (props$$100 = [], react["createElement"].apply(react, ["br", createObj(props$$100, 1)].concat([]))), (props$$102 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$58 = ["4"], react["createElement"].apply(react, ["span", createObj(props$$102, 1)].concat(Exodus_toConsumableArray(children$$58))))), "And his sister stood afar off, to wit what would be done to him."], react["createElement"].apply(react, ["p", createObj(props$$104, 1)].concat(Exodus_toConsumableArray(children$$60))))), (props$$128 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$74 = [(props$$106 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$62 = ["5"], react["createElement"].apply(react, ["span", createObj(props$$106, 1)].concat(Exodus_toConsumableArray(children$$62))))), "And the daughter of Pharaoh came down to wash herself at the river; and her maidens walked along by the river's side; and when she saw the ark among the flags, she sent her maid to fetch it.", (props$$108 = [], react["createElement"].apply(react, ["br", createObj(props$$108, 1)].concat([]))), (props$$110 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$64 = ["6"], react["createElement"].apply(react, ["span", createObj(props$$110, 1)].concat(Exodus_toConsumableArray(children$$64))))), "And when she had opened it, she saw the child: and, behold, the babe wept. And she had compassion on him, and said, This is one of the Hebrews' children.", (props$$112 = [], react["createElement"].apply(react, ["br", createObj(props$$112, 1)].concat([]))), (props$$114 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$66 = ["7"], react["createElement"].apply(react, ["span", createObj(props$$114, 1)].concat(Exodus_toConsumableArray(children$$66))))), "Then said his sister to Pharaoh's daughter, Shall I go and call to thee a nurse of the Hebrew women, that she may nurse the child for thee?", (props$$116 = [], react["createElement"].apply(react, ["br", createObj(props$$116, 1)].concat([]))), (props$$118 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$68 = ["8"], react["createElement"].apply(react, ["span", createObj(props$$118, 1)].concat(Exodus_toConsumableArray(children$$68))))), "And Pharaoh's daughter said to her, Go. And the maid went and called the child's mother.", (props$$120 = [], react["createElement"].apply(react, ["br", createObj(props$$120, 1)].concat([]))), (props$$122 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$70 = ["9"], react["createElement"].apply(react, ["span", createObj(props$$122, 1)].concat(Exodus_toConsumableArray(children$$70))))), "And Pharaoh's daughter said unto her, Take this child away, and nurse it for me, and I will give thee thy wages. And the woman took the child, and nursed it.", (props$$124 = [], react["createElement"].apply(react, ["br", createObj(props$$124, 1)].concat([]))), (props$$126 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$72 = ["10"], react["createElement"].apply(react, ["span", createObj(props$$126, 1)].concat(Exodus_toConsumableArray(children$$72))))), "And the child grew, and she brought him unto Pharaoh's daughter, and he became her son. And she called his name Moses: and she said, Because I drew him out of the water."], react["createElement"].apply(react, ["p", createObj(props$$128, 1)].concat(Exodus_toConsumableArray(children$$74))))), (props$$176 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$100 = [(props$$130 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$76 = ["11"], react["createElement"].apply(react, ["span", createObj(props$$130, 1)].concat(Exodus_toConsumableArray(children$$76))))), "And it came to pass in those days, when Moses was grown, that he went out unto his brethren, and looked on their burdens: and he spied an Egyptian smiting an Hebrew, one of his brethren.", (props$$132 = [], react["createElement"].apply(react, ["br", createObj(props$$132, 1)].concat([]))), (props$$134 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$78 = ["12"], react["createElement"].apply(react, ["span", createObj(props$$134, 1)].concat(Exodus_toConsumableArray(children$$78))))), "And he looked this way and that way, and when he saw that there was no man, he slew the Egyptian, and hid him in the sand.", (props$$136 = [], react["createElement"].apply(react, ["br", createObj(props$$136, 1)].concat([]))), (props$$138 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$80 = ["13"], react["createElement"].apply(react, ["span", createObj(props$$138, 1)].concat(Exodus_toConsumableArray(children$$80))))), "And when he went out the second day, behold, two men of the Hebrews strove together: and he said to him that did the wrong, Wherefore smitest thou thy fellow?", (props$$140 = [], react["createElement"].apply(react, ["br", createObj(props$$140, 1)].concat([]))), (props$$142 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$82 = ["14"], react["createElement"].apply(react, ["span", createObj(props$$142, 1)].concat(Exodus_toConsumableArray(children$$82))))), "And he said, Who made thee a prince and a judge over us? intendest thou to kill me, as thou killedst the Egyptian? And Moses feared, and said, Surely this thing is known.", (props$$144 = [], react["createElement"].apply(react, ["br", createObj(props$$144, 1)].concat([]))), (props$$146 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$84 = ["15"], react["createElement"].apply(react, ["span", createObj(props$$146, 1)].concat(Exodus_toConsumableArray(children$$84))))), "Now when Pharaoh heard this thing, he sought to slay Moses. But Moses fled from the face of Pharaoh, and dwelt in the land of Midian: and he sat down by a well.", (props$$148 = [], react["createElement"].apply(react, ["br", createObj(props$$148, 1)].concat([]))), (props$$150 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$86 = ["16"], react["createElement"].apply(react, ["span", createObj(props$$150, 1)].concat(Exodus_toConsumableArray(children$$86))))), "Now the priest of Midian had seven daughters: and they came and drew water, and filled the troughs to water their father's flock.", (props$$152 = [], react["createElement"].apply(react, ["br", createObj(props$$152, 1)].concat([]))), (props$$154 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$88 = ["17"], react["createElement"].apply(react, ["span", createObj(props$$154, 1)].concat(Exodus_toConsumableArray(children$$88))))), "And the shepherds came and drove them away: but Moses stood up and helped them, and watered their flock.", (props$$156 = [], react["createElement"].apply(react, ["br", createObj(props$$156, 1)].concat([]))), (props$$158 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$90 = ["18"], react["createElement"].apply(react, ["span", createObj(props$$158, 1)].concat(Exodus_toConsumableArray(children$$90))))), "And when they came to Reuel their father, he said, How is it that ye are come so soon to day?", (props$$160 = [], react["createElement"].apply(react, ["br", createObj(props$$160, 1)].concat([]))), (props$$162 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$92 = ["19"], react["createElement"].apply(react, ["span", createObj(props$$162, 1)].concat(Exodus_toConsumableArray(children$$92))))), "And they said, An Egyptian delivered us out of the hand of the shepherds, and also drew water enough for us, and watered the flock.", (props$$164 = [], react["createElement"].apply(react, ["br", createObj(props$$164, 1)].concat([]))), (props$$166 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$94 = ["20"], react["createElement"].apply(react, ["span", createObj(props$$166, 1)].concat(Exodus_toConsumableArray(children$$94))))), "And he said unto his daughters, And where is he? why is it that ye have left the man? call him, that he may eat bread.", (props$$168 = [], react["createElement"].apply(react, ["br", createObj(props$$168, 1)].concat([]))), (props$$170 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$96 = ["21"], react["createElement"].apply(react, ["span", createObj(props$$170, 1)].concat(Exodus_toConsumableArray(children$$96))))), "And Moses was content to dwell with the man: and he gave Moses Zipporah his daughter.", (props$$172 = [], react["createElement"].apply(react, ["br", createObj(props$$172, 1)].concat([]))), (props$$174 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$98 = ["22"], react["createElement"].apply(react, ["span", createObj(props$$174, 1)].concat(Exodus_toConsumableArray(children$$98))))), "And she bare him a son, and he called his name Gershom: for he said, I have been a stranger in a strange land."], react["createElement"].apply(react, ["p", createObj(props$$176, 1)].concat(Exodus_toConsumableArray(children$$100))))), (props$$188 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$108 = [(props$$178 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$102 = ["23"], react["createElement"].apply(react, ["span", createObj(props$$178, 1)].concat(Exodus_toConsumableArray(children$$102))))), "And it came to pass in process of time, that the king of Egypt died: and the children of Israel sighed by reason of the bondage, and they cried, and their cry came up unto God by reason of the bondage.", (props$$180 = [], react["createElement"].apply(react, ["br", createObj(props$$180, 1)].concat([]))), (props$$182 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$104 = ["24"], react["createElement"].apply(react, ["span", createObj(props$$182, 1)].concat(Exodus_toConsumableArray(children$$104))))), "And God heard their groaning, and God remembered his covenant with Abraham, with Isaac, and with Jacob.", (props$$184 = [], react["createElement"].apply(react, ["br", createObj(props$$184, 1)].concat([]))), (props$$186 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$106 = ["25"], react["createElement"].apply(react, ["span", createObj(props$$186, 1)].concat(Exodus_toConsumableArray(children$$106))))), "And God looked upon the children of Israel, and God had respect unto them."], react["createElement"].apply(react, ["p", createObj(props$$188, 1)].concat(Exodus_toConsumableArray(children$$108)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$190, 1)].concat(children$$110));
}();
function exodus(chapter) {
  var props$$194 = [];
  var children$$114 = List_ofSeq(delay(function () {
    var props$$192, children$$112;
    return chapter === 1 ? singleton(exod1) : chapter === 2 ? singleton(exod2) : singleton((props$$192 = [], (children$$112 = [], react["createElement"].apply(react, ["div", createObj(props$$192, 1)].concat(Exodus_toConsumableArray(children$$112))))));
  }));
  return react["createElement"].apply(react, ["div", createObj(props$$194, 1)].concat(Exodus_toConsumableArray(children$$114)));
}
// CONCATENATED MODULE: ./src/Translations/KJV/Genesis.fs













function Genesis_toConsumableArray(arr) { return Genesis_arrayWithoutHoles(arr) || Genesis_iterableToArray(arr) || Genesis_nonIterableSpread(); }

function Genesis_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function Genesis_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function Genesis_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }






var gen1 = function () {
  var props$$18, children$$10, props, children, props$$2, props$$4, children$$2, props$$6, props$$8, children$$4, props$$10, props$$12, children$$6, props$$14, props$$16, children$$8, props$$30, children$$18, props$$20, children$$12, props$$22, props$$24, children$$14, props$$26, props$$28, children$$16, props$$50, children$$30, props$$32, children$$20, props$$34, props$$36, children$$22, props$$38, props$$40, children$$24, props$$42, props$$44, children$$26, props$$46, props$$48, children$$28, props$$90, children$$52, props$$52, children$$32, props$$54, props$$56, children$$34, props$$58, props$$60, children$$36, props$$62, props$$64, children$$38, props$$66, props$$68, children$$40, props$$70, props$$72, children$$42, props$$74, props$$76, children$$44, props$$78, props$$80, children$$46, props$$82, props$$84, children$$48, props$$86, props$$88, children$$50, props$$98, children$$58, props$$92, children$$54, props$$94, props$$96, children$$56, props$$110, children$$66, props$$100, children$$60, props$$102, props$$104, children$$62, props$$106, props$$108, children$$64, props$$122, children$$74, props$$112, children$$68, props$$114, props$$116, children$$70, props$$118, props$$120, children$$72;
  var props$$124 = [];
  var children$$76 = [(props$$18 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$10 = [(props = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children = ["1"], react["createElement"].apply(react, ["span", createObj(props, 1)].concat(Genesis_toConsumableArray(children))))), "In the beginning God created the heaven and the earth. ", (props$$2 = [], react["createElement"].apply(react, ["br", createObj(props$$2, 1)].concat([]))), (props$$4 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$2 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$4, 1)].concat(Genesis_toConsumableArray(children$$2))))), "And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters. ", (props$$6 = [], react["createElement"].apply(react, ["br", createObj(props$$6, 1)].concat([]))), (props$$8 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$4 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$8, 1)].concat(Genesis_toConsumableArray(children$$4))))), "And God said, Let there be light: and there was light. ", (props$$10 = [], react["createElement"].apply(react, ["br", createObj(props$$10, 1)].concat([]))), (props$$12 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$6 = ["4"], react["createElement"].apply(react, ["span", createObj(props$$12, 1)].concat(Genesis_toConsumableArray(children$$6))))), "And God saw the light, that it was good: and God divided the light from the darkness. ", (props$$14 = [], react["createElement"].apply(react, ["br", createObj(props$$14, 1)].concat([]))), (props$$16 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$8 = ["5"], react["createElement"].apply(react, ["span", createObj(props$$16, 1)].concat(Genesis_toConsumableArray(children$$8))))), "And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day. "], react["createElement"].apply(react, ["p", createObj(props$$18, 1)].concat(Genesis_toConsumableArray(children$$10))))), (props$$30 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$18 = [(props$$20 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$12 = ["6"], react["createElement"].apply(react, ["span", createObj(props$$20, 1)].concat(Genesis_toConsumableArray(children$$12))))), "And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters. ", (props$$22 = [], react["createElement"].apply(react, ["br", createObj(props$$22, 1)].concat([]))), (props$$24 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$14 = ["7"], react["createElement"].apply(react, ["span", createObj(props$$24, 1)].concat(Genesis_toConsumableArray(children$$14))))), "And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so. ", (props$$26 = [], react["createElement"].apply(react, ["br", createObj(props$$26, 1)].concat([]))), (props$$28 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$16 = ["8"], react["createElement"].apply(react, ["span", createObj(props$$28, 1)].concat(Genesis_toConsumableArray(children$$16))))), "And God called the firmament Heaven. And the evening and the morning were the second day. "], react["createElement"].apply(react, ["p", createObj(props$$30, 1)].concat(Genesis_toConsumableArray(children$$18))))), (props$$50 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$30 = [(props$$32 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$20 = ["9"], react["createElement"].apply(react, ["span", createObj(props$$32, 1)].concat(Genesis_toConsumableArray(children$$20))))), "And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear: and it was so. ", (props$$34 = [], react["createElement"].apply(react, ["br", createObj(props$$34, 1)].concat([]))), (props$$36 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$22 = ["10"], react["createElement"].apply(react, ["span", createObj(props$$36, 1)].concat(Genesis_toConsumableArray(children$$22))))), "And God called the dry land Earth; and the gathering together of the waters called he Seas: and God saw that it was good. ", (props$$38 = [], react["createElement"].apply(react, ["br", createObj(props$$38, 1)].concat([]))), (props$$40 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$24 = ["11"], react["createElement"].apply(react, ["span", createObj(props$$40, 1)].concat(Genesis_toConsumableArray(children$$24))))), "And God said, Let the earth bring forth grass, the herb yielding seed, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so. ", (props$$42 = [], react["createElement"].apply(react, ["br", createObj(props$$42, 1)].concat([]))), (props$$44 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$26 = ["12"], react["createElement"].apply(react, ["span", createObj(props$$44, 1)].concat(Genesis_toConsumableArray(children$$26))))), "And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good. ", (props$$46 = [], react["createElement"].apply(react, ["br", createObj(props$$46, 1)].concat([]))), (props$$48 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$28 = ["13"], react["createElement"].apply(react, ["span", createObj(props$$48, 1)].concat(Genesis_toConsumableArray(children$$28))))), "And the evening and the morning were the third day. "], react["createElement"].apply(react, ["p", createObj(props$$50, 1)].concat(Genesis_toConsumableArray(children$$30))))), (props$$90 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$52 = [(props$$52 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$32 = ["14"], react["createElement"].apply(react, ["span", createObj(props$$52, 1)].concat(Genesis_toConsumableArray(children$$32))))), "And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons, and for days, and years: ", (props$$54 = [], react["createElement"].apply(react, ["br", createObj(props$$54, 1)].concat([]))), (props$$56 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$34 = ["15"], react["createElement"].apply(react, ["span", createObj(props$$56, 1)].concat(Genesis_toConsumableArray(children$$34))))), "And let them be for lights in the firmament of the heaven to give light upon the earth: and it was so. ", (props$$58 = [], react["createElement"].apply(react, ["br", createObj(props$$58, 1)].concat([]))), (props$$60 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$36 = ["16"], react["createElement"].apply(react, ["span", createObj(props$$60, 1)].concat(Genesis_toConsumableArray(children$$36))))), "And God made two great lights; the greater light to rule the day, and the lesser light to rule the night: he made the stars also. ", (props$$62 = [], react["createElement"].apply(react, ["br", createObj(props$$62, 1)].concat([]))), (props$$64 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$38 = ["17"], react["createElement"].apply(react, ["span", createObj(props$$64, 1)].concat(Genesis_toConsumableArray(children$$38))))), "And God set them in the firmament of the heaven to give light upon the earth, ", (props$$66 = [], react["createElement"].apply(react, ["br", createObj(props$$66, 1)].concat([]))), (props$$68 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$40 = ["18"], react["createElement"].apply(react, ["span", createObj(props$$68, 1)].concat(Genesis_toConsumableArray(children$$40))))), "And to rule over the day and over the night, and to divide the light from the darkness: and God saw that it was good. ", (props$$70 = [], react["createElement"].apply(react, ["br", createObj(props$$70, 1)].concat([]))), (props$$72 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$42 = ["19"], react["createElement"].apply(react, ["span", createObj(props$$72, 1)].concat(Genesis_toConsumableArray(children$$42))))), "And the evening and the morning were the fourth day. ", (props$$74 = [], react["createElement"].apply(react, ["br", createObj(props$$74, 1)].concat([]))), (props$$76 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$44 = ["20"], react["createElement"].apply(react, ["span", createObj(props$$76, 1)].concat(Genesis_toConsumableArray(children$$44))))), "And God said, Let the waters bring forth abundantly the moving creature that hath life, and fowl that may fly above the earth in the open firmament of heaven. ", (props$$78 = [], react["createElement"].apply(react, ["br", createObj(props$$78, 1)].concat([]))), (props$$80 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$46 = ["21"], react["createElement"].apply(react, ["span", createObj(props$$80, 1)].concat(Genesis_toConsumableArray(children$$46))))), "And God created great whales, and every living creature that moveth, which the waters brought forth abundantly, after their kind, and every winged fowl after his kind: and God saw that it was good. ", (props$$82 = [], react["createElement"].apply(react, ["br", createObj(props$$82, 1)].concat([]))), (props$$84 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$48 = ["22"], react["createElement"].apply(react, ["span", createObj(props$$84, 1)].concat(Genesis_toConsumableArray(children$$48))))), "And God blessed them, saying, Be fruitful, and multiply, and fill the waters in the seas, and let fowl multiply in the earth. ", (props$$86 = [], react["createElement"].apply(react, ["br", createObj(props$$86, 1)].concat([]))), (props$$88 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$50 = ["23"], react["createElement"].apply(react, ["span", createObj(props$$88, 1)].concat(Genesis_toConsumableArray(children$$50))))), "And the evening and the morning were the fifth day. "], react["createElement"].apply(react, ["p", createObj(props$$90, 1)].concat(Genesis_toConsumableArray(children$$52))))), (props$$98 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$58 = [(props$$92 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$54 = ["24"], react["createElement"].apply(react, ["span", createObj(props$$92, 1)].concat(Genesis_toConsumableArray(children$$54))))), "And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so. ", (props$$94 = [], react["createElement"].apply(react, ["br", createObj(props$$94, 1)].concat([]))), (props$$96 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$56 = ["25"], react["createElement"].apply(react, ["span", createObj(props$$96, 1)].concat(Genesis_toConsumableArray(children$$56))))), "And God made the beast of the earth after his kind, and cattle after their kind, and every thing that creepeth upon the earth after his kind: and God saw that it was good. "], react["createElement"].apply(react, ["p", createObj(props$$98, 1)].concat(Genesis_toConsumableArray(children$$58))))), (props$$110 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$66 = [(props$$100 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$60 = ["26"], react["createElement"].apply(react, ["span", createObj(props$$100, 1)].concat(Genesis_toConsumableArray(children$$60))))), "And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth. ", (props$$102 = [], react["createElement"].apply(react, ["br", createObj(props$$102, 1)].concat([]))), (props$$104 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$62 = ["27"], react["createElement"].apply(react, ["span", createObj(props$$104, 1)].concat(Genesis_toConsumableArray(children$$62))))), "So God created man in his own image, in the image of God created he him; male and female created he them. ", (props$$106 = [], react["createElement"].apply(react, ["br", createObj(props$$106, 1)].concat([]))), (props$$108 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$64 = ["28"], react["createElement"].apply(react, ["span", createObj(props$$108, 1)].concat(Genesis_toConsumableArray(children$$64))))), "And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth. "], react["createElement"].apply(react, ["p", createObj(props$$110, 1)].concat(Genesis_toConsumableArray(children$$66))))), (props$$122 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$74 = [(props$$112 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$68 = ["29"], react["createElement"].apply(react, ["span", createObj(props$$112, 1)].concat(Genesis_toConsumableArray(children$$68))))), "And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth, and every tree, in the which is the fruit of a tree yielding seed; to you it shall be for meat. ", (props$$114 = [], react["createElement"].apply(react, ["br", createObj(props$$114, 1)].concat([]))), (props$$116 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$70 = ["30"], react["createElement"].apply(react, ["span", createObj(props$$116, 1)].concat(Genesis_toConsumableArray(children$$70))))), "And to every beast of the earth, and to every fowl of the air, and to every thing that creepeth upon the earth, wherein there is life, I have given every green herb for meat: and it was so. ", (props$$118 = [], react["createElement"].apply(react, ["br", createObj(props$$118, 1)].concat([]))), (props$$120 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$72 = ["31"], react["createElement"].apply(react, ["span", createObj(props$$120, 1)].concat(Genesis_toConsumableArray(children$$72))))), "And God saw every thing that he had made, and, behold, it was very good. And the evening and the morning were the sixth day."], react["createElement"].apply(react, ["p", createObj(props$$122, 1)].concat(Genesis_toConsumableArray(children$$74)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$124, 1)].concat(children$$76));
}();
var gen2 = function () {
  var props$$136, children$$84, props$$126, children$$78, props$$128, props$$130, children$$80, props$$132, props$$134, children$$82, props$$152, children$$94, props$$138, children$$86, props$$140, props$$142, children$$88, props$$144, props$$146, children$$90, props$$148, props$$150, children$$92, props$$192, children$$116, props$$154, children$$96, props$$156, props$$158, children$$98, props$$160, props$$162, children$$100, props$$164, props$$166, children$$102, props$$168, props$$170, children$$104, props$$172, props$$174, children$$106, props$$176, props$$178, children$$108, props$$180, props$$182, children$$110, props$$184, props$$186, children$$112, props$$188, props$$190, children$$114, props$$224, children$$134, props$$194, children$$118, props$$196, props$$198, children$$120, props$$200, props$$202, children$$122, props$$204, props$$206, children$$124, props$$208, props$$210, children$$126, props$$212, props$$214, children$$128, props$$216, props$$218, children$$130, props$$220, props$$222, children$$132;
  var props$$226 = [];
  var children$$136 = [(props$$136 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$84 = [(props$$126 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$78 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$126, 1)].concat(Genesis_toConsumableArray(children$$78))))), "Thus the heavens and the earth were finished, and all the host of them.", (props$$128 = [], react["createElement"].apply(react, ["br", createObj(props$$128, 1)].concat([]))), (props$$130 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$80 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$130, 1)].concat(Genesis_toConsumableArray(children$$80))))), "And on the seventh day God ended his work which he had made; and he rested on the seventh day from all his work which he had made.", (props$$132 = [], react["createElement"].apply(react, ["br", createObj(props$$132, 1)].concat([]))), (props$$134 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$82 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$134, 1)].concat(Genesis_toConsumableArray(children$$82))))), "And God blessed the seventh day, and sanctified it: because that in it he had rested from all his work which God created and made."], react["createElement"].apply(react, ["p", createObj(props$$136, 1)].concat(Genesis_toConsumableArray(children$$84))))), (props$$152 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$94 = [(props$$138 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$86 = ["4"], react["createElement"].apply(react, ["span", createObj(props$$138, 1)].concat(Genesis_toConsumableArray(children$$86))))), "These are the generations of the heavens and of the earth when they were created, in the day that the LORD God made the earth and the heavens,", (props$$140 = [], react["createElement"].apply(react, ["br", createObj(props$$140, 1)].concat([]))), (props$$142 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$88 = ["5"], react["createElement"].apply(react, ["span", createObj(props$$142, 1)].concat(Genesis_toConsumableArray(children$$88))))), "And every plant of the field before it was in the earth, and every herb of the field before it grew: for the LORD God had not caused it to rain upon the earth, and there was not a man to till the ground.", (props$$144 = [], react["createElement"].apply(react, ["br", createObj(props$$144, 1)].concat([]))), (props$$146 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$90 = ["6"], react["createElement"].apply(react, ["span", createObj(props$$146, 1)].concat(Genesis_toConsumableArray(children$$90))))), "But there went up a mist from the earth, and watered the whole face of the ground.", (props$$148 = [], react["createElement"].apply(react, ["br", createObj(props$$148, 1)].concat([]))), (props$$150 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$92 = ["7"], react["createElement"].apply(react, ["span", createObj(props$$150, 1)].concat(Genesis_toConsumableArray(children$$92))))), "And the LORD God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul. "], react["createElement"].apply(react, ["p", createObj(props$$152, 1)].concat(Genesis_toConsumableArray(children$$94))))), (props$$192 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$116 = [(props$$154 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$96 = ["8"], react["createElement"].apply(react, ["span", createObj(props$$154, 1)].concat(Genesis_toConsumableArray(children$$96))))), "And the LORD God planted a garden eastward in Eden; and there he put the man whom he had formed.", (props$$156 = [], react["createElement"].apply(react, ["br", createObj(props$$156, 1)].concat([]))), (props$$158 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$98 = ["9"], react["createElement"].apply(react, ["span", createObj(props$$158, 1)].concat(Genesis_toConsumableArray(children$$98))))), "And out of the ground made the LORD God to grow every tree that is pleasant to the sight, and good for food; the tree of life also in the midst of the garden, and the tree of knowledge of good and evil.", (props$$160 = [], react["createElement"].apply(react, ["br", createObj(props$$160, 1)].concat([]))), (props$$162 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$100 = ["10"], react["createElement"].apply(react, ["span", createObj(props$$162, 1)].concat(Genesis_toConsumableArray(children$$100))))), "And a river went out of Eden to water the garden; and from thence it was parted, and became into four heads.", (props$$164 = [], react["createElement"].apply(react, ["br", createObj(props$$164, 1)].concat([]))), (props$$166 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$102 = ["11"], react["createElement"].apply(react, ["span", createObj(props$$166, 1)].concat(Genesis_toConsumableArray(children$$102))))), "The name of the first is Pison: that is it which compasseth the whole land of Havilah, where there is gold;", (props$$168 = [], react["createElement"].apply(react, ["br", createObj(props$$168, 1)].concat([]))), (props$$170 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$104 = ["12"], react["createElement"].apply(react, ["span", createObj(props$$170, 1)].concat(Genesis_toConsumableArray(children$$104))))), "And the gold of that land is good: there is bdellium and the onyx stone.", (props$$172 = [], react["createElement"].apply(react, ["br", createObj(props$$172, 1)].concat([]))), (props$$174 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$106 = ["13"], react["createElement"].apply(react, ["span", createObj(props$$174, 1)].concat(Genesis_toConsumableArray(children$$106))))), "And the name of the second river is Gihon: the same is it that compasseth the whole land of Ethiopia.", (props$$176 = [], react["createElement"].apply(react, ["br", createObj(props$$176, 1)].concat([]))), (props$$178 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$108 = ["14"], react["createElement"].apply(react, ["span", createObj(props$$178, 1)].concat(Genesis_toConsumableArray(children$$108))))), "And the name of the third river is Hiddekel: that is it which goeth toward the east of Assyria. And the fourth river is Euphrates.", (props$$180 = [], react["createElement"].apply(react, ["br", createObj(props$$180, 1)].concat([]))), (props$$182 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$110 = ["15"], react["createElement"].apply(react, ["span", createObj(props$$182, 1)].concat(Genesis_toConsumableArray(children$$110))))), "And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it.", (props$$184 = [], react["createElement"].apply(react, ["br", createObj(props$$184, 1)].concat([]))), (props$$186 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$112 = ["16"], react["createElement"].apply(react, ["span", createObj(props$$186, 1)].concat(Genesis_toConsumableArray(children$$112))))), "And the LORD God commanded the man, saying, Of every tree of the garden thou mayest freely eat:", (props$$188 = [], react["createElement"].apply(react, ["br", createObj(props$$188, 1)].concat([]))), (props$$190 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$114 = ["17"], react["createElement"].apply(react, ["span", createObj(props$$190, 1)].concat(Genesis_toConsumableArray(children$$114))))), "But of the tree of the knowledge of good and evil, thou shalt not eat of it: for in the day that thou eatest thereof thou shalt surely die."], react["createElement"].apply(react, ["p", createObj(props$$192, 1)].concat(Genesis_toConsumableArray(children$$116))))), (props$$224 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$134 = [(props$$194 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$118 = ["18"], react["createElement"].apply(react, ["span", createObj(props$$194, 1)].concat(Genesis_toConsumableArray(children$$118))))), "And the LORD God said, It is not good that the man should be alone; I will make him an help meet for him.", (props$$196 = [], react["createElement"].apply(react, ["br", createObj(props$$196, 1)].concat([]))), (props$$198 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$120 = ["19"], react["createElement"].apply(react, ["span", createObj(props$$198, 1)].concat(Genesis_toConsumableArray(children$$120))))), "And out of the ground the LORD God formed every beast of the field, and every fowl of the air; and brought them unto Adam to see what he would call them: and whatsoever Adam called every living creature, that was the name thereof.", (props$$200 = [], react["createElement"].apply(react, ["br", createObj(props$$200, 1)].concat([]))), (props$$202 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$122 = ["20"], react["createElement"].apply(react, ["span", createObj(props$$202, 1)].concat(Genesis_toConsumableArray(children$$122))))), "And Adam gave names to all cattle, and to the fowl of the air, and to every beast of the field; but for Adam there was not found an help meet for him.", (props$$204 = [], react["createElement"].apply(react, ["br", createObj(props$$204, 1)].concat([]))), (props$$206 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$124 = ["21"], react["createElement"].apply(react, ["span", createObj(props$$206, 1)].concat(Genesis_toConsumableArray(children$$124))))), "And the LORD God caused a deep sleep to fall upon Adam, and he slept: and he took one of his ribs, and closed up the flesh instead thereof;", (props$$208 = [], react["createElement"].apply(react, ["br", createObj(props$$208, 1)].concat([]))), (props$$210 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$126 = ["22"], react["createElement"].apply(react, ["span", createObj(props$$210, 1)].concat(Genesis_toConsumableArray(children$$126))))), "And the rib, which the LORD God had taken from man, made he a woman, and brought her unto the man.", (props$$212 = [], react["createElement"].apply(react, ["br", createObj(props$$212, 1)].concat([]))), (props$$214 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$128 = ["23"], react["createElement"].apply(react, ["span", createObj(props$$214, 1)].concat(Genesis_toConsumableArray(children$$128))))), "And Adam said, This is now bone of my bones, and flesh of my flesh: she shall be called Woman, because she was taken out of Man.", (props$$216 = [], react["createElement"].apply(react, ["br", createObj(props$$216, 1)].concat([]))), (props$$218 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$130 = ["24"], react["createElement"].apply(react, ["span", createObj(props$$218, 1)].concat(Genesis_toConsumableArray(children$$130))))), "Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh.", (props$$220 = [], react["createElement"].apply(react, ["br", createObj(props$$220, 1)].concat([]))), (props$$222 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$132 = ["25"], react["createElement"].apply(react, ["span", createObj(props$$222, 1)].concat(Genesis_toConsumableArray(children$$132))))), "And they were both naked, the man and his wife, and were not ashamed."], react["createElement"].apply(react, ["p", createObj(props$$224, 1)].concat(Genesis_toConsumableArray(children$$134)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$226, 1)].concat(children$$136));
}();
function genesis(chapter) {
  var props$$230 = [];
  var children$$140 = List_ofSeq(delay(function () {
    var props$$228, children$$138;
    return chapter === 1 ? singleton(gen1) : chapter === 2 ? singleton(gen2) : singleton((props$$228 = [], (children$$138 = [], react["createElement"].apply(react, ["div", createObj(props$$228, 1)].concat(Genesis_toConsumableArray(children$$138))))));
  }));
  return react["createElement"].apply(react, ["div", createObj(props$$230, 1)].concat(Genesis_toConsumableArray(children$$140)));
}
// CONCATENATED MODULE: ./src/Translations/KJV/TableOfContents.fs













function TableOfContents_toConsumableArray(arr) { return TableOfContents_arrayWithoutHoles(arr) || TableOfContents_iterableToArray(arr) || TableOfContents_nonIterableSpread(); }

function TableOfContents_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function TableOfContents_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function TableOfContents_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }







function books(book, chapter) {
  var props = [];
  var children = List_ofSeq(delay(function () {
    return book.tag === 1 ? singleton(exodus(chapter)) : singleton(genesis(chapter));
  }));
  return react["createElement"].apply(react, ["div", createObj(props, 1)].concat(TableOfContents_toConsumableArray(children)));
}
// CONCATENATED MODULE: ./src/Translations/KJV1611/Exodus.fs













function KJV1611_Exodus_toConsumableArray(arr) { return KJV1611_Exodus_arrayWithoutHoles(arr) || KJV1611_Exodus_iterableToArray(arr) || KJV1611_Exodus_nonIterableSpread(); }

function KJV1611_Exodus_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function KJV1611_Exodus_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function KJV1611_Exodus_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }






var Exodus_exod1 = function () {
  var props$$22, children$$12, props, children, props$$2, props$$4, children$$2, props$$6, props$$8, children$$4, props$$10, props$$12, children$$6, props$$14, props$$16, children$$8, props$$18, props$$20, children$$10, props$$54, children$$30, props$$24, children$$14, props$$26, props$$28, children$$16, props$$30, props$$32, children$$18, props$$34, props$$36, children$$20, props$$38, props$$40, children$$22, props$$42, props$$44, children$$24, props$$46, props$$48, children$$26, props$$50, props$$52, children$$28, props$$86, children$$48, props$$56, children$$32, props$$58, props$$60, children$$34, props$$62, props$$64, children$$36, props$$66, props$$68, children$$38, props$$70, props$$72, children$$40, props$$74, props$$76, children$$42, props$$78, props$$80, children$$44, props$$82, props$$84, children$$46;
  var props$$88 = [];
  var children$$50 = [(props$$22 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$12 = [(props = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children = ["1"], react["createElement"].apply(react, ["span", createObj(props, 1)].concat(KJV1611_Exodus_toConsumableArray(children))))), "Nowe these are the names of the children of Israel, which came into Egypt, euery man & his household, came with Iacob.", (props$$2 = [], react["createElement"].apply(react, ["br", createObj(props$$2, 1)].concat([]))), (props$$4 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$2 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$4, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$2))))), "Reuben, Simeon, Leui, and Iudah,", (props$$6 = [], react["createElement"].apply(react, ["br", createObj(props$$6, 1)].concat([]))), (props$$8 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$4 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$8, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$4))))), "Issachar, Zebulun and Beniamin,", (props$$10 = [], react["createElement"].apply(react, ["br", createObj(props$$10, 1)].concat([]))), (props$$12 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$6 = ["4"], react["createElement"].apply(react, ["span", createObj(props$$12, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$6))))), "Dan, and Naphtali, Gad, and Asher.", (props$$14 = [], react["createElement"].apply(react, ["br", createObj(props$$14, 1)].concat([]))), (props$$16 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$8 = ["5"], react["createElement"].apply(react, ["span", createObj(props$$16, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$8))))), "And all the soules that came out of the loynes of Iacob, were seuentie soules: for Ioseph was in Egypt already.", (props$$18 = [], react["createElement"].apply(react, ["br", createObj(props$$18, 1)].concat([]))), (props$$20 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$10 = ["6"], react["createElement"].apply(react, ["span", createObj(props$$20, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$10))))), "And Ioseph died, and all his brethren, and all that generation."], react["createElement"].apply(react, ["p", createObj(props$$22, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$12))))), (props$$54 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$30 = [(props$$24 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$14 = ["7"], react["createElement"].apply(react, ["span", createObj(props$$24, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$14))))), "And the children of Israel were fruitfull, and increased aboundantly, and multiplied, and waxed exceeding mighty, and the land was filled with them.", (props$$26 = [], react["createElement"].apply(react, ["br", createObj(props$$26, 1)].concat([]))), (props$$28 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$16 = ["8"], react["createElement"].apply(react, ["span", createObj(props$$28, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$16))))), "Now there arose vp a new King ouer Egypt, which knew not Ioseph.", (props$$30 = [], react["createElement"].apply(react, ["br", createObj(props$$30, 1)].concat([]))), (props$$32 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$18 = ["9"], react["createElement"].apply(react, ["span", createObj(props$$32, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$18))))), "And he said vnto his people, Behold, the people of the children of Israel are moe and mightier then we.", (props$$34 = [], react["createElement"].apply(react, ["br", createObj(props$$34, 1)].concat([]))), (props$$36 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$20 = ["10"], react["createElement"].apply(react, ["span", createObj(props$$36, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$20))))), "Come on, let vs deale wisely with them, lest they multiply, and it come to passe that when there falleth out any warre, they ioyne also vnto our enemies, and fight against vs, and so get them vp out of the land.", (props$$38 = [], react["createElement"].apply(react, ["br", createObj(props$$38, 1)].concat([]))), (props$$40 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$22 = ["11"], react["createElement"].apply(react, ["span", createObj(props$$40, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$22))))), "Therefore they did set ouer them task-masters, to afflict them with their burdens: And they built for Pharaoh treasure-cities, Pithom and Raamses.", (props$$42 = [], react["createElement"].apply(react, ["br", createObj(props$$42, 1)].concat([]))), (props$$44 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$24 = ["12"], react["createElement"].apply(react, ["span", createObj(props$$44, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$24))))), "But the more they afflicted them, the more they multiplied and grew: and they were grieued because of the children of Israel.", (props$$46 = [], react["createElement"].apply(react, ["br", createObj(props$$46, 1)].concat([]))), (props$$48 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$26 = ["13"], react["createElement"].apply(react, ["span", createObj(props$$48, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$26))))), "And the Egyptians made the children of Israel to serue with rigour.", (props$$50 = [], react["createElement"].apply(react, ["br", createObj(props$$50, 1)].concat([]))), (props$$52 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$28 = ["14"], react["createElement"].apply(react, ["span", createObj(props$$52, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$28))))), "And they made their liues bitter, with hard bondage, in morter and in bricke, and in all maner of seruice in the fielde: all their seruice wherein they made them serue, was with rigour."], react["createElement"].apply(react, ["p", createObj(props$$54, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$30))))), (props$$86 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$48 = [(props$$56 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$32 = ["15"], react["createElement"].apply(react, ["span", createObj(props$$56, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$32))))), "And the King of Egypt spake to the Hebrew midwiues, (of which the name of one was Shiphrah, and the name of the other Puah.)", (props$$58 = [], react["createElement"].apply(react, ["br", createObj(props$$58, 1)].concat([]))), (props$$60 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$34 = ["16"], react["createElement"].apply(react, ["span", createObj(props$$60, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$34))))), "And he said, When ye do the office of a midwife to the Hebrew-women, and see them vpon the stooles, if it be a sonne, then ye shall kill him: but if it be a daughter, then shee shall liue.", (props$$62 = [], react["createElement"].apply(react, ["br", createObj(props$$62, 1)].concat([]))), (props$$64 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$36 = ["17"], react["createElement"].apply(react, ["span", createObj(props$$64, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$36))))), "But the midwiues feared God, and did not as the King of Egypt commanded them, but saued the men children aliue.", (props$$66 = [], react["createElement"].apply(react, ["br", createObj(props$$66, 1)].concat([]))), (props$$68 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$38 = ["18"], react["createElement"].apply(react, ["span", createObj(props$$68, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$38))))), "And the King of Egypt called for the midwiues, & said vnto them, Why haue ye done this thing, and haue saued the men children aliue?", (props$$70 = [], react["createElement"].apply(react, ["br", createObj(props$$70, 1)].concat([]))), (props$$72 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$40 = ["19"], react["createElement"].apply(react, ["span", createObj(props$$72, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$40))))), "And the midwiues said vnto Pharaoh, Because the Hebrew women are not as the Egyptian women: for they are liuely, and are deliuered ere the midwiues come in vnto them.", (props$$74 = [], react["createElement"].apply(react, ["br", createObj(props$$74, 1)].concat([]))), (props$$76 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$42 = ["20"], react["createElement"].apply(react, ["span", createObj(props$$76, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$42))))), "Therefore God dealt well with the midwiues: and the people multiplied and waxed very mighty.", (props$$78 = [], react["createElement"].apply(react, ["br", createObj(props$$78, 1)].concat([]))), (props$$80 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$44 = ["21"], react["createElement"].apply(react, ["span", createObj(props$$80, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$44))))), "And it came to passe, because the midwiues feared God, that hee made them houses.", (props$$82 = [], react["createElement"].apply(react, ["br", createObj(props$$82, 1)].concat([]))), (props$$84 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$46 = ["22"], react["createElement"].apply(react, ["span", createObj(props$$84, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$46))))), "And Pharaoh charged all his people, saying, Euery sonne that is borne, yee shall cast into the riuer, and euery daughter ye shall saue aliue."], react["createElement"].apply(react, ["p", createObj(props$$86, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$48)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$88, 1)].concat(children$$50));
}();
var Exodus_exod2 = function () {
  var props$$104, children$$60, props$$90, children$$52, props$$92, props$$94, children$$54, props$$96, props$$98, children$$56, props$$100, props$$102, children$$58, props$$128, children$$74, props$$106, children$$62, props$$108, props$$110, children$$64, props$$112, props$$114, children$$66, props$$116, props$$118, children$$68, props$$120, props$$122, children$$70, props$$124, props$$126, children$$72, props$$176, children$$100, props$$130, children$$76, props$$132, props$$134, children$$78, props$$136, props$$138, children$$80, props$$140, props$$142, children$$82, props$$144, props$$146, children$$84, props$$148, props$$150, children$$86, props$$152, props$$154, children$$88, props$$156, props$$158, children$$90, props$$160, props$$162, children$$92, props$$164, props$$166, children$$94, props$$168, props$$170, children$$96, props$$172, props$$174, children$$98, props$$188, children$$108, props$$178, children$$102, props$$180, props$$182, children$$104, props$$184, props$$186, children$$106;
  var props$$190 = [];
  var children$$110 = [(props$$104 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$60 = [(props$$90 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$52 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$90, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$52))))), "And there went a man of the house of Leui, & tooke to wife a daughter of Leui.", (props$$92 = [], react["createElement"].apply(react, ["br", createObj(props$$92, 1)].concat([]))), (props$$94 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$54 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$94, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$54))))), "And the woman conceiued, and bare a sonne: and when shee saw him that hee was a goodly childe, shee hid him three moneths.", (props$$96 = [], react["createElement"].apply(react, ["br", createObj(props$$96, 1)].concat([]))), (props$$98 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$56 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$98, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$56))))), "And when shee could not longer hide him, she tooke for him an arke of bul-rushes, and daubed it with slime, and with pitch, and put the childe therein, and shee layd it in the flags by the riuers brinke.", (props$$100 = [], react["createElement"].apply(react, ["br", createObj(props$$100, 1)].concat([]))), (props$$102 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$58 = ["4"], react["createElement"].apply(react, ["span", createObj(props$$102, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$58))))), "And his sister stood afarre off, to wit what would be done to him."], react["createElement"].apply(react, ["p", createObj(props$$104, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$60))))), (props$$128 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$74 = [(props$$106 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$62 = ["5"], react["createElement"].apply(react, ["span", createObj(props$$106, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$62))))), "And the daughter of Pharaoh came downe to wash her selfe at the riuer, and her maydens walked along by the riuer side: and when shee saw the arke among the flags, she sent her maid to fetch it.", (props$$108 = [], react["createElement"].apply(react, ["br", createObj(props$$108, 1)].concat([]))), (props$$110 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$64 = ["6"], react["createElement"].apply(react, ["span", createObj(props$$110, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$64))))), "And when she had opened it, she saw the childe: and beholde, the babe wept. And she had compassion on him, and said, This is one of the Hebrewes children.", (props$$112 = [], react["createElement"].apply(react, ["br", createObj(props$$112, 1)].concat([]))), (props$$114 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$66 = ["7"], react["createElement"].apply(react, ["span", createObj(props$$114, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$66))))), "Then said his sister to Pharaohs daughter, Shall I goe, and call to thee a nurse of the Hebrew-women, that she may nurse the childe for thee?", (props$$116 = [], react["createElement"].apply(react, ["br", createObj(props$$116, 1)].concat([]))), (props$$118 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$68 = ["8"], react["createElement"].apply(react, ["span", createObj(props$$118, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$68))))), "And Pharaohs daughter said to her, Goe: And the mayd went and called the childs mother.", (props$$120 = [], react["createElement"].apply(react, ["br", createObj(props$$120, 1)].concat([]))), (props$$122 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$70 = ["9"], react["createElement"].apply(react, ["span", createObj(props$$122, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$70))))), "And Pharaohs daughter said vnto her, Take this child away, and nurse it for me, and I will giue thee thy wages. And the woman tooke the childe, and nursed it.", (props$$124 = [], react["createElement"].apply(react, ["br", createObj(props$$124, 1)].concat([]))), (props$$126 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$72 = ["10"], react["createElement"].apply(react, ["span", createObj(props$$126, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$72))))), "And the childe grew, and shee brought him vnto Pharaohs daughter, and he became her sonne. And she called his name Moses: And she said, Because I drew him out of the water."], react["createElement"].apply(react, ["p", createObj(props$$128, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$74))))), (props$$176 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$100 = [(props$$130 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$76 = ["11"], react["createElement"].apply(react, ["span", createObj(props$$130, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$76))))), "And it came to passe in those dayes, when Moses was growen, that he went out vnto his brethren, and looked on their burdens, and he spied an Egyptian smiting an Hebrew, one of his brethren.", (props$$132 = [], react["createElement"].apply(react, ["br", createObj(props$$132, 1)].concat([]))), (props$$134 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$78 = ["12"], react["createElement"].apply(react, ["span", createObj(props$$134, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$78))))), "And he looked this way and that way, and when he saw that there was no man, he slew the Egyptian, and hid him in the sand.", (props$$136 = [], react["createElement"].apply(react, ["br", createObj(props$$136, 1)].concat([]))), (props$$138 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$80 = ["13"], react["createElement"].apply(react, ["span", createObj(props$$138, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$80))))), "And when he went out the second day, behold, two men of the Hebrewes stroue together: And hee said to him that did the wrong, Wherefore smitest thou thy fellow?", (props$$140 = [], react["createElement"].apply(react, ["br", createObj(props$$140, 1)].concat([]))), (props$$142 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$82 = ["14"], react["createElement"].apply(react, ["span", createObj(props$$142, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$82))))), "And he said, Who made thee a Prince and a iudge ouer vs? intendest thou to kill me, as thou killedst the Egyptian? And Moses feared, and said, Surely this thing is knowen.", (props$$144 = [], react["createElement"].apply(react, ["br", createObj(props$$144, 1)].concat([]))), (props$$146 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$84 = ["15"], react["createElement"].apply(react, ["span", createObj(props$$146, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$84))))), "Now when Pharaoh heard this thing, he sought to slay Moses. But Moses fled from the face of Pharaoh, and dwelt in the land of Midian: and he sate downe by a well.", (props$$148 = [], react["createElement"].apply(react, ["br", createObj(props$$148, 1)].concat([]))), (props$$150 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$86 = ["16"], react["createElement"].apply(react, ["span", createObj(props$$150, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$86))))), "Now the Priest of Midian had seuen daughters, and they came and drew water, and filled the troughes to water their fathers flocke.", (props$$152 = [], react["createElement"].apply(react, ["br", createObj(props$$152, 1)].concat([]))), (props$$154 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$88 = ["17"], react["createElement"].apply(react, ["span", createObj(props$$154, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$88))))), "And the shepheards came and droue them away: but Moses stood vp and helped them, & watred their flocke.", (props$$156 = [], react["createElement"].apply(react, ["br", createObj(props$$156, 1)].concat([]))), (props$$158 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$90 = ["18"], react["createElement"].apply(react, ["span", createObj(props$$158, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$90))))), "And when they came to Reuel their father, he said, How is it that you are come so soone to day?", (props$$160 = [], react["createElement"].apply(react, ["br", createObj(props$$160, 1)].concat([]))), (props$$162 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$92 = ["19"], react["createElement"].apply(react, ["span", createObj(props$$162, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$92))))), "And they said, An Egyptian deliuered vs out of the hand of the shepheards, and also drew water enough for vs, and watered the flocke.", (props$$164 = [], react["createElement"].apply(react, ["br", createObj(props$$164, 1)].concat([]))), (props$$166 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$94 = ["20"], react["createElement"].apply(react, ["span", createObj(props$$166, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$94))))), "And he said vnto his daughters, And where is he? why is it that yee haue left the man? Call him, that hee may eate bread.", (props$$168 = [], react["createElement"].apply(react, ["br", createObj(props$$168, 1)].concat([]))), (props$$170 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$96 = ["21"], react["createElement"].apply(react, ["span", createObj(props$$170, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$96))))), "And Moses was content to dwel with the man, and he gaue Moses Zipporah his daughter.", (props$$172 = [], react["createElement"].apply(react, ["br", createObj(props$$172, 1)].concat([]))), (props$$174 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$98 = ["22"], react["createElement"].apply(react, ["span", createObj(props$$174, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$98))))), "And she bare him a sonne, and he called his name Gershom: for he said, I haue bene a stranger in a strange land."], react["createElement"].apply(react, ["p", createObj(props$$176, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$100))))), (props$$188 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$108 = [(props$$178 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$102 = ["23"], react["createElement"].apply(react, ["span", createObj(props$$178, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$102))))), "And it came to passe in processe of time, that the king of Egypt died, and the children of Israel sighed by reason of the bondage, and they cried, and their cry came vp vnto God, by reason of the bondage.", (props$$180 = [], react["createElement"].apply(react, ["br", createObj(props$$180, 1)].concat([]))), (props$$182 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$104 = ["24"], react["createElement"].apply(react, ["span", createObj(props$$182, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$104))))), "And God heard their groning, and God remembred his Couenant with Abraham, with Isaac, and with Iacob.", (props$$184 = [], react["createElement"].apply(react, ["br", createObj(props$$184, 1)].concat([]))), (props$$186 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$106 = ["25"], react["createElement"].apply(react, ["span", createObj(props$$186, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$106))))), "And God looked vpon the children of Israel, and God had respect vnto them."], react["createElement"].apply(react, ["p", createObj(props$$188, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$108)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$190, 1)].concat(children$$110));
}();
function Exodus_exodus(chapter) {
  var props$$194 = [];
  var children$$114 = List_ofSeq(delay(function () {
    var props$$192, children$$112;
    return chapter === 1 ? singleton(Exodus_exod1) : chapter === 2 ? singleton(Exodus_exod2) : singleton((props$$192 = [], (children$$112 = [], react["createElement"].apply(react, ["div", createObj(props$$192, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$112))))));
  }));
  return react["createElement"].apply(react, ["div", createObj(props$$194, 1)].concat(KJV1611_Exodus_toConsumableArray(children$$114)));
}
// CONCATENATED MODULE: ./src/Translations/KJV1611/Genesis.fs













function KJV1611_Genesis_toConsumableArray(arr) { return KJV1611_Genesis_arrayWithoutHoles(arr) || KJV1611_Genesis_iterableToArray(arr) || KJV1611_Genesis_nonIterableSpread(); }

function KJV1611_Genesis_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function KJV1611_Genesis_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function KJV1611_Genesis_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }






var Genesis_gen1 = function () {
  var props$$18, children$$10, props, children, props$$2, props$$4, children$$2, props$$6, props$$8, children$$4, props$$10, props$$12, children$$6, props$$14, props$$16, children$$8, props$$30, children$$18, props$$20, children$$12, props$$22, props$$24, children$$14, props$$26, props$$28, children$$16, props$$50, children$$30, props$$32, children$$20, props$$34, props$$36, children$$22, props$$38, props$$40, children$$24, props$$42, props$$44, children$$26, props$$46, props$$48, children$$28, props$$90, children$$52, props$$52, children$$32, props$$54, props$$56, children$$34, props$$58, props$$60, children$$36, props$$62, props$$64, children$$38, props$$66, props$$68, children$$40, props$$70, props$$72, children$$42, props$$74, props$$76, children$$44, props$$78, props$$80, children$$46, props$$82, props$$84, children$$48, props$$86, props$$88, children$$50, props$$98, children$$58, props$$92, children$$54, props$$94, props$$96, children$$56, props$$110, children$$66, props$$100, children$$60, props$$102, props$$104, children$$62, props$$106, props$$108, children$$64, props$$122, children$$74, props$$112, children$$68, props$$114, props$$116, children$$70, props$$118, props$$120, children$$72;
  var props$$124 = [];
  var children$$76 = [(props$$18 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$10 = [(props = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children = ["1"], react["createElement"].apply(react, ["span", createObj(props, 1)].concat(KJV1611_Genesis_toConsumableArray(children))))), "In the beginning God created the Heauen, and the Earth. ", (props$$2 = [], react["createElement"].apply(react, ["br", createObj(props$$2, 1)].concat([]))), (props$$4 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$2 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$4, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$2))))), "And the earth was without forme, and voyd, and darkenesse was vpon the face of the deepe: and the Spirit of God mooued vpon the face of the waters. ", (props$$6 = [], react["createElement"].apply(react, ["br", createObj(props$$6, 1)].concat([]))), (props$$8 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$4 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$8, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$4))))), "And God said, Let there be light: and there was light. ", (props$$10 = [], react["createElement"].apply(react, ["br", createObj(props$$10, 1)].concat([]))), (props$$12 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$6 = ["4"], react["createElement"].apply(react, ["span", createObj(props$$12, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$6))))), "And God saw the light, that it was good: and God diuided the light from the darkenesse. ", (props$$14 = [], react["createElement"].apply(react, ["br", createObj(props$$14, 1)].concat([]))), (props$$16 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$8 = ["5"], react["createElement"].apply(react, ["span", createObj(props$$16, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$8))))), "And God called the light, Day, and the darknesse he called Night: and the euening and the morning were the first day. "], react["createElement"].apply(react, ["p", createObj(props$$18, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$10))))), (props$$30 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$18 = [(props$$20 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$12 = ["6"], react["createElement"].apply(react, ["span", createObj(props$$20, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$12))))), "And God said, Let there be a firmament in the midst of the waters: and let it diuide the waters from the waters. ", (props$$22 = [], react["createElement"].apply(react, ["br", createObj(props$$22, 1)].concat([]))), (props$$24 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$14 = ["7"], react["createElement"].apply(react, ["span", createObj(props$$24, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$14))))), "And God made the firmament; and diuided the waters, which were vnder the firmament, from the waters, which were aboue the firmament: and it was so. ", (props$$26 = [], react["createElement"].apply(react, ["br", createObj(props$$26, 1)].concat([]))), (props$$28 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$16 = ["8"], react["createElement"].apply(react, ["span", createObj(props$$28, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$16))))), "And God called the firmament, Heauen: and the euening and the morning were the second day. "], react["createElement"].apply(react, ["p", createObj(props$$30, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$18))))), (props$$50 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$30 = [(props$$32 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$20 = ["9"], react["createElement"].apply(react, ["span", createObj(props$$32, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$20))))), "And God said, Let the waters vnder the heauen be gathered together vnto one place, and let the dry land appeare: and it was so. ", (props$$34 = [], react["createElement"].apply(react, ["br", createObj(props$$34, 1)].concat([]))), (props$$36 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$22 = ["10"], react["createElement"].apply(react, ["span", createObj(props$$36, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$22))))), "And God called the drie land, Earth, and the gathering together of the waters called hee, Seas: and God saw that it was good. ", (props$$38 = [], react["createElement"].apply(react, ["br", createObj(props$$38, 1)].concat([]))), (props$$40 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$24 = ["11"], react["createElement"].apply(react, ["span", createObj(props$$40, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$24))))), "And God said, Let the Earth bring foorth grasse, the herbe yeelding seed, and the fruit tree, yeelding fruit after his kinde, whose seed is in it selfe, vpon the earth: and it was so. ", (props$$42 = [], react["createElement"].apply(react, ["br", createObj(props$$42, 1)].concat([]))), (props$$44 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$26 = ["12"], react["createElement"].apply(react, ["span", createObj(props$$44, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$26))))), "And the earth brought foorth grasse, and herbe yeelding seed after his kinde, and the tree yeelding fruit, whose seed was in it selfe, after his kinde: and God saw that it was good. ", (props$$46 = [], react["createElement"].apply(react, ["br", createObj(props$$46, 1)].concat([]))), (props$$48 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$28 = ["13"], react["createElement"].apply(react, ["span", createObj(props$$48, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$28))))), "And the euening and the morning were the third day. "], react["createElement"].apply(react, ["p", createObj(props$$50, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$30))))), (props$$90 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$52 = [(props$$52 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$32 = ["14"], react["createElement"].apply(react, ["span", createObj(props$$52, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$32))))), "And God said, Let there bee lights in the firmament of the heauen, to diuide the day from the night: and let them be for signes and for seasons, and for dayes and yeeres. ", (props$$54 = [], react["createElement"].apply(react, ["br", createObj(props$$54, 1)].concat([]))), (props$$56 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$34 = ["15"], react["createElement"].apply(react, ["span", createObj(props$$56, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$34))))), "And let them be for lights in the firmament of the heauen, to giue light vpon the earth: and it was so. ", (props$$58 = [], react["createElement"].apply(react, ["br", createObj(props$$58, 1)].concat([]))), (props$$60 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$36 = ["16"], react["createElement"].apply(react, ["span", createObj(props$$60, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$36))))), "And God made two great lights: the greater light to rule the day, and the lesser light to rule the night: he made the starres also. ", (props$$62 = [], react["createElement"].apply(react, ["br", createObj(props$$62, 1)].concat([]))), (props$$64 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$38 = ["17"], react["createElement"].apply(react, ["span", createObj(props$$64, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$38))))), "And God set them in the firmament of the heauen, to giue light vpon the earth: ", (props$$66 = [], react["createElement"].apply(react, ["br", createObj(props$$66, 1)].concat([]))), (props$$68 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$40 = ["18"], react["createElement"].apply(react, ["span", createObj(props$$68, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$40))))), "And to rule ouer the day, and ouer the night, and to diuide the light from the darkenesse: and God saw that it was good. ", (props$$70 = [], react["createElement"].apply(react, ["br", createObj(props$$70, 1)].concat([]))), (props$$72 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$42 = ["19"], react["createElement"].apply(react, ["span", createObj(props$$72, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$42))))), "And the euening and the morning were the fourth day. ", (props$$74 = [], react["createElement"].apply(react, ["br", createObj(props$$74, 1)].concat([]))), (props$$76 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$44 = ["20"], react["createElement"].apply(react, ["span", createObj(props$$76, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$44))))), "And God said, Let the waters bring foorth aboundantly the mouing creature that hath life, and foule that may flie aboue the earth in the open firmament of heauen. ", (props$$78 = [], react["createElement"].apply(react, ["br", createObj(props$$78, 1)].concat([]))), (props$$80 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$46 = ["21"], react["createElement"].apply(react, ["span", createObj(props$$80, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$46))))), "And God created great whales, and euery liuing creature that moueth, which the waters brought forth aboundantly after their kinde, and euery winged foule after his kinde: and God saw that it was good. ", (props$$82 = [], react["createElement"].apply(react, ["br", createObj(props$$82, 1)].concat([]))), (props$$84 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$48 = ["22"], react["createElement"].apply(react, ["span", createObj(props$$84, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$48))))), "And God blessed them, saying, Be fruitfull, and multiply, and fill the waters in the Seas, and let foule multiply in the earth. ", (props$$86 = [], react["createElement"].apply(react, ["br", createObj(props$$86, 1)].concat([]))), (props$$88 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$50 = ["23"], react["createElement"].apply(react, ["span", createObj(props$$88, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$50))))), "And the euening and the morning were the fift day. "], react["createElement"].apply(react, ["p", createObj(props$$90, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$52))))), (props$$98 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$58 = [(props$$92 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$54 = ["24"], react["createElement"].apply(react, ["span", createObj(props$$92, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$54))))), "And God said, Let the earth bring forth the liuing creature after his kinde, cattell, and creeping thing, and beast of the earth after his kinde: and it was so. ", (props$$94 = [], react["createElement"].apply(react, ["br", createObj(props$$94, 1)].concat([]))), (props$$96 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$56 = ["25"], react["createElement"].apply(react, ["span", createObj(props$$96, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$56))))), "And God made the beast of the earth after his kinde, and cattell after their kinde, and euery thing that creepeth vpon the earth, after his kinde: and God saw that it was good. "], react["createElement"].apply(react, ["p", createObj(props$$98, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$58))))), (props$$110 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$66 = [(props$$100 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$60 = ["26"], react["createElement"].apply(react, ["span", createObj(props$$100, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$60))))), "And God said, Let vs make man in our Image, after our likenesse: and let them haue dominion ouer the fish of the sea, and ouer the foule of the aire, and ouer the cattell, and ouer all the earth, and ouer euery creeping thing that creepeth vpon the earth. ", (props$$102 = [], react["createElement"].apply(react, ["br", createObj(props$$102, 1)].concat([]))), (props$$104 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$62 = ["27"], react["createElement"].apply(react, ["span", createObj(props$$104, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$62))))), "So God created man in his owne Image, in the Image of God created hee him; male and female created hee them. ", (props$$106 = [], react["createElement"].apply(react, ["br", createObj(props$$106, 1)].concat([]))), (props$$108 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$64 = ["28"], react["createElement"].apply(react, ["span", createObj(props$$108, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$64))))), "And God blessed them, and God said vnto them, Be fruitfull, and multiply, and replenish the earth, and subdue it, and haue dominion ouer the fish of the sea, and ouer the foule of the aire, and ouer euery liuing thing that mooueth vpon the earth. "], react["createElement"].apply(react, ["p", createObj(props$$110, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$66))))), (props$$122 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$74 = [(props$$112 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$68 = ["29"], react["createElement"].apply(react, ["span", createObj(props$$112, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$68))))), "And God said, Behold, I haue giuen you euery herbe bearing seede, which is vpon the face of all the earth, and euery tree, in the which is the fruit of a tree yeelding seed, to you it shall be for meat: ", (props$$114 = [], react["createElement"].apply(react, ["br", createObj(props$$114, 1)].concat([]))), (props$$116 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$70 = ["30"], react["createElement"].apply(react, ["span", createObj(props$$116, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$70))))), "And to euery beast of the earth, and to euery foule of the aire, and to euery thing that creepeth vpon the earth, wherein there is life, I haue giuen euery greene herbe for meat: and it was so. ", (props$$118 = [], react["createElement"].apply(react, ["br", createObj(props$$118, 1)].concat([]))), (props$$120 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$72 = ["31"], react["createElement"].apply(react, ["span", createObj(props$$120, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$72))))), "And God saw euery thing that hee had made: and behold, it was very good. And the euening and the morning were the sixth day."], react["createElement"].apply(react, ["p", createObj(props$$122, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$74)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$124, 1)].concat(children$$76));
}();
var Genesis_gen2 = function () {
  var props$$136, children$$84, props$$126, children$$78, props$$128, props$$130, children$$80, props$$132, props$$134, children$$82, props$$152, children$$94, props$$138, children$$86, props$$140, props$$142, children$$88, props$$144, props$$146, children$$90, props$$148, props$$150, children$$92, props$$192, children$$116, props$$154, children$$96, props$$156, props$$158, children$$98, props$$160, props$$162, children$$100, props$$164, props$$166, children$$102, props$$168, props$$170, children$$104, props$$172, props$$174, children$$106, props$$176, props$$178, children$$108, props$$180, props$$182, children$$110, props$$184, props$$186, children$$112, props$$188, props$$190, children$$114, props$$224, children$$134, props$$194, children$$118, props$$196, props$$198, children$$120, props$$200, props$$202, children$$122, props$$204, props$$206, children$$124, props$$208, props$$210, children$$126, props$$212, props$$214, children$$128, props$$216, props$$218, children$$130, props$$220, props$$222, children$$132;
  var props$$226 = [];
  var children$$136 = [(props$$136 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$84 = [(props$$126 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$78 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$126, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$78))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$128 = [], react["createElement"].apply(react, ["br", createObj(props$$128, 1)].concat([]))), (props$$130 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$80 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$130, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$80))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$132 = [], react["createElement"].apply(react, ["br", createObj(props$$132, 1)].concat([]))), (props$$134 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$82 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$134, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$82))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$136, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$84))))), (props$$152 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$94 = [(props$$138 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$86 = ["4"], react["createElement"].apply(react, ["span", createObj(props$$138, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$86))))), "These are the generations of the heauens, & of the earth, when they were created; in the day that the LORD God made the earth, and the heauens, ", (props$$140 = [], react["createElement"].apply(react, ["br", createObj(props$$140, 1)].concat([]))), (props$$142 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$88 = ["5"], react["createElement"].apply(react, ["span", createObj(props$$142, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$88))))), "And euery plant of the field, before it was in the earth, and euery herbe of the field, before it grew: for the LORD God had not caused it to raine vpon the earth, and there was not a man to till the ground. ", (props$$144 = [], react["createElement"].apply(react, ["br", createObj(props$$144, 1)].concat([]))), (props$$146 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$90 = ["6"], react["createElement"].apply(react, ["span", createObj(props$$146, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$90))))), "But there went vp a mist from the earth, and watered the whole face of the ground. ", (props$$148 = [], react["createElement"].apply(react, ["br", createObj(props$$148, 1)].concat([]))), (props$$150 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$92 = ["7"], react["createElement"].apply(react, ["span", createObj(props$$150, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$92))))), "And the LORD God formed man of the dust of the ground, & breathed into his nostrils the breath of life; and man became a liuing soule. "], react["createElement"].apply(react, ["p", createObj(props$$152, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$94))))), (props$$192 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$116 = [(props$$154 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$96 = ["8"], react["createElement"].apply(react, ["span", createObj(props$$154, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$96))))), "And the LORD God planted a garden Eastward in Eden; and there he put the man whom he had formed. ", (props$$156 = [], react["createElement"].apply(react, ["br", createObj(props$$156, 1)].concat([]))), (props$$158 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$98 = ["9"], react["createElement"].apply(react, ["span", createObj(props$$158, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$98))))), "And out of the ground made the LORD God to grow euery tree that is pleasant to the sight, and good for food: the tree of life also in the midst of the garden, and the tree of knowledge of good and euill. ", (props$$160 = [], react["createElement"].apply(react, ["br", createObj(props$$160, 1)].concat([]))), (props$$162 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$100 = ["10"], react["createElement"].apply(react, ["span", createObj(props$$162, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$100))))), "And a riuer went out of Eden to water the garden, and from thence it was parted, and became into foure heads. ", (props$$164 = [], react["createElement"].apply(react, ["br", createObj(props$$164, 1)].concat([]))), (props$$166 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$102 = ["11"], react["createElement"].apply(react, ["span", createObj(props$$166, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$102))))), "The name of the first is Pison: that is it which compasseth the whole land of Hauilah, where there is gold. ", (props$$168 = [], react["createElement"].apply(react, ["br", createObj(props$$168, 1)].concat([]))), (props$$170 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$104 = ["12"], react["createElement"].apply(react, ["span", createObj(props$$170, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$104))))), "And the gold of that land is good: There is Bdellium and the Onix stone. ", (props$$172 = [], react["createElement"].apply(react, ["br", createObj(props$$172, 1)].concat([]))), (props$$174 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$106 = ["13"], react["createElement"].apply(react, ["span", createObj(props$$174, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$106))))), "And the name of the second riuer is Gihon: the same is it that compasseth the whole land of Ethiopia. ", (props$$176 = [], react["createElement"].apply(react, ["br", createObj(props$$176, 1)].concat([]))), (props$$178 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$108 = ["14"], react["createElement"].apply(react, ["span", createObj(props$$178, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$108))))), "And the name of the third riuer is Hiddekel: that is it which goeth toward the East of Assyria: and the fourth riuer is Euphrates. ", (props$$180 = [], react["createElement"].apply(react, ["br", createObj(props$$180, 1)].concat([]))), (props$$182 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$110 = ["15"], react["createElement"].apply(react, ["span", createObj(props$$182, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$110))))), "And the LORD God tooke the man, and put him into the garden of Eden, to dresse it, and to keepe it. ", (props$$184 = [], react["createElement"].apply(react, ["br", createObj(props$$184, 1)].concat([]))), (props$$186 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$112 = ["16"], react["createElement"].apply(react, ["span", createObj(props$$186, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$112))))), "And the LORD God commanded the man, saying, Of euery tree of the garden thou mayest freely eate. ", (props$$188 = [], react["createElement"].apply(react, ["br", createObj(props$$188, 1)].concat([]))), (props$$190 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$114 = ["17"], react["createElement"].apply(react, ["span", createObj(props$$190, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$114))))), "But of the tree of the knowledge of good and euill, thou shalt not eate of it: for in the day that thou eatest thereof, thou shalt surely die. "], react["createElement"].apply(react, ["p", createObj(props$$192, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$116))))), (props$$224 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$134 = [(props$$194 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$118 = ["18"], react["createElement"].apply(react, ["span", createObj(props$$194, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$118))))), "And the LORD God said, It is not good that the man should be alone: I will make him an helpe meet for him. ", (props$$196 = [], react["createElement"].apply(react, ["br", createObj(props$$196, 1)].concat([]))), (props$$198 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$120 = ["19"], react["createElement"].apply(react, ["span", createObj(props$$198, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$120))))), "And out of �e ground the LORD God formed euery beast of the field, and euery foule of the aire, and brought them vnto Adam, to see what he would call them: and whatsoeuer Adam called euery liuing creature, that was the name thereof. ", (props$$200 = [], react["createElement"].apply(react, ["br", createObj(props$$200, 1)].concat([]))), (props$$202 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$122 = ["20"], react["createElement"].apply(react, ["span", createObj(props$$202, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$122))))), "And Adam gaue names to all cattell, and to the foule of the aire, and to euery beast of the fielde: but for Adam there was not found an helpe meete for him. ", (props$$204 = [], react["createElement"].apply(react, ["br", createObj(props$$204, 1)].concat([]))), (props$$206 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$124 = ["21"], react["createElement"].apply(react, ["span", createObj(props$$206, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$124))))), "And the LORD God caused a deepe sleepe to fall vpon Adam, and hee slept; and he tooke one of his ribs, and closed vp the flesh in stead thereof. ", (props$$208 = [], react["createElement"].apply(react, ["br", createObj(props$$208, 1)].concat([]))), (props$$210 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$126 = ["22"], react["createElement"].apply(react, ["span", createObj(props$$210, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$126))))), "And the rib which the LORD God had taken from man, made hee a woman, & brought her vnto the man. ", (props$$212 = [], react["createElement"].apply(react, ["br", createObj(props$$212, 1)].concat([]))), (props$$214 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$128 = ["23"], react["createElement"].apply(react, ["span", createObj(props$$214, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$128))))), "And Adam said, This is now bone of my bones, and flesh of my flesh: she shalbe called woman, because shee was taken out of man. ", (props$$216 = [], react["createElement"].apply(react, ["br", createObj(props$$216, 1)].concat([]))), (props$$218 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$130 = ["24"], react["createElement"].apply(react, ["span", createObj(props$$218, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$130))))), "Therefore shall a man leaue his father and his mother, and shall cleaue vnto his wife: and they shalbe one flesh. ", (props$$220 = [], react["createElement"].apply(react, ["br", createObj(props$$220, 1)].concat([]))), (props$$222 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$132 = ["25"], react["createElement"].apply(react, ["span", createObj(props$$222, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$132))))), "And they were both naked, the man & his wife, and were not ashamed. "], react["createElement"].apply(react, ["p", createObj(props$$224, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$134)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$226, 1)].concat(children$$136));
}();
var gen3 = function () {
  var props$$238, children$$144, props$$228, children$$138, props$$230, props$$232, children$$140, props$$234, props$$236, children$$142;
  var props$$240 = [];
  var children$$146 = [(props$$238 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$144 = [(props$$228 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$138 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$228, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$138))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$230 = [], react["createElement"].apply(react, ["br", createObj(props$$230, 1)].concat([]))), (props$$232 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$140 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$232, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$140))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$234 = [], react["createElement"].apply(react, ["br", createObj(props$$234, 1)].concat([]))), (props$$236 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$142 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$236, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$142))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$238, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$144)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$240, 1)].concat(children$$146));
}();
var gen4 = function () {
  var props$$252, children$$154, props$$242, children$$148, props$$244, props$$246, children$$150, props$$248, props$$250, children$$152;
  var props$$254 = [];
  var children$$156 = [(props$$252 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$154 = [(props$$242 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$148 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$242, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$148))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$244 = [], react["createElement"].apply(react, ["br", createObj(props$$244, 1)].concat([]))), (props$$246 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$150 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$246, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$150))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$248 = [], react["createElement"].apply(react, ["br", createObj(props$$248, 1)].concat([]))), (props$$250 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$152 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$250, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$152))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$252, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$154)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$254, 1)].concat(children$$156));
}();
var gen5 = function () {
  var props$$266, children$$164, props$$256, children$$158, props$$258, props$$260, children$$160, props$$262, props$$264, children$$162;
  var props$$268 = [];
  var children$$166 = [(props$$266 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$164 = [(props$$256 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$158 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$256, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$158))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$258 = [], react["createElement"].apply(react, ["br", createObj(props$$258, 1)].concat([]))), (props$$260 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$160 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$260, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$160))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$262 = [], react["createElement"].apply(react, ["br", createObj(props$$262, 1)].concat([]))), (props$$264 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$162 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$264, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$162))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$266, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$164)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$268, 1)].concat(children$$166));
}();
var gen6 = function () {
  var props$$280, children$$174, props$$270, children$$168, props$$272, props$$274, children$$170, props$$276, props$$278, children$$172;
  var props$$282 = [];
  var children$$176 = [(props$$280 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$174 = [(props$$270 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$168 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$270, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$168))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$272 = [], react["createElement"].apply(react, ["br", createObj(props$$272, 1)].concat([]))), (props$$274 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$170 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$274, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$170))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$276 = [], react["createElement"].apply(react, ["br", createObj(props$$276, 1)].concat([]))), (props$$278 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$172 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$278, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$172))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$280, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$174)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$282, 1)].concat(children$$176));
}();
var gen7 = function () {
  var props$$294, children$$184, props$$284, children$$178, props$$286, props$$288, children$$180, props$$290, props$$292, children$$182;
  var props$$296 = [];
  var children$$186 = [(props$$294 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$184 = [(props$$284 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$178 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$284, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$178))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$286 = [], react["createElement"].apply(react, ["br", createObj(props$$286, 1)].concat([]))), (props$$288 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$180 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$288, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$180))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$290 = [], react["createElement"].apply(react, ["br", createObj(props$$290, 1)].concat([]))), (props$$292 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$182 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$292, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$182))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$294, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$184)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$296, 1)].concat(children$$186));
}();
var gen8 = function () {
  var props$$308, children$$194, props$$298, children$$188, props$$300, props$$302, children$$190, props$$304, props$$306, children$$192;
  var props$$310 = [];
  var children$$196 = [(props$$308 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$194 = [(props$$298 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$188 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$298, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$188))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$300 = [], react["createElement"].apply(react, ["br", createObj(props$$300, 1)].concat([]))), (props$$302 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$190 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$302, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$190))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$304 = [], react["createElement"].apply(react, ["br", createObj(props$$304, 1)].concat([]))), (props$$306 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$192 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$306, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$192))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$308, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$194)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$310, 1)].concat(children$$196));
}();
var gen9 = function () {
  var props$$322, children$$204, props$$312, children$$198, props$$314, props$$316, children$$200, props$$318, props$$320, children$$202;
  var props$$324 = [];
  var children$$206 = [(props$$322 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$204 = [(props$$312 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$198 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$312, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$198))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$314 = [], react["createElement"].apply(react, ["br", createObj(props$$314, 1)].concat([]))), (props$$316 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$200 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$316, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$200))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$318 = [], react["createElement"].apply(react, ["br", createObj(props$$318, 1)].concat([]))), (props$$320 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$202 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$320, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$202))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$322, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$204)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$324, 1)].concat(children$$206));
}();
var gen10 = function () {
  var props$$336, children$$214, props$$326, children$$208, props$$328, props$$330, children$$210, props$$332, props$$334, children$$212;
  var props$$338 = [];
  var children$$216 = [(props$$336 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$214 = [(props$$326 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$208 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$326, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$208))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$328 = [], react["createElement"].apply(react, ["br", createObj(props$$328, 1)].concat([]))), (props$$330 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$210 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$330, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$210))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$332 = [], react["createElement"].apply(react, ["br", createObj(props$$332, 1)].concat([]))), (props$$334 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$212 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$334, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$212))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$336, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$214)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$338, 1)].concat(children$$216));
}();
var gen11 = function () {
  var props$$350, children$$224, props$$340, children$$218, props$$342, props$$344, children$$220, props$$346, props$$348, children$$222;
  var props$$352 = [];
  var children$$226 = [(props$$350 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$224 = [(props$$340 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$218 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$340, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$218))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$342 = [], react["createElement"].apply(react, ["br", createObj(props$$342, 1)].concat([]))), (props$$344 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$220 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$344, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$220))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$346 = [], react["createElement"].apply(react, ["br", createObj(props$$346, 1)].concat([]))), (props$$348 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$222 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$348, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$222))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$350, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$224)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$352, 1)].concat(children$$226));
}();
var gen12 = function () {
  var props$$364, children$$234, props$$354, children$$228, props$$356, props$$358, children$$230, props$$360, props$$362, children$$232;
  var props$$366 = [];
  var children$$236 = [(props$$364 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$234 = [(props$$354 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$228 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$354, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$228))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$356 = [], react["createElement"].apply(react, ["br", createObj(props$$356, 1)].concat([]))), (props$$358 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$230 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$358, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$230))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$360 = [], react["createElement"].apply(react, ["br", createObj(props$$360, 1)].concat([]))), (props$$362 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$232 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$362, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$232))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$364, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$234)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$366, 1)].concat(children$$236));
}();
var gen13 = function () {
  var props$$378, children$$244, props$$368, children$$238, props$$370, props$$372, children$$240, props$$374, props$$376, children$$242;
  var props$$380 = [];
  var children$$246 = [(props$$378 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$244 = [(props$$368 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$238 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$368, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$238))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$370 = [], react["createElement"].apply(react, ["br", createObj(props$$370, 1)].concat([]))), (props$$372 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$240 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$372, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$240))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$374 = [], react["createElement"].apply(react, ["br", createObj(props$$374, 1)].concat([]))), (props$$376 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$242 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$376, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$242))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$378, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$244)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$380, 1)].concat(children$$246));
}();
var gen14 = function () {
  var props$$392, children$$254, props$$382, children$$248, props$$384, props$$386, children$$250, props$$388, props$$390, children$$252;
  var props$$394 = [];
  var children$$256 = [(props$$392 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$254 = [(props$$382 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$248 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$382, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$248))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$384 = [], react["createElement"].apply(react, ["br", createObj(props$$384, 1)].concat([]))), (props$$386 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$250 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$386, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$250))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$388 = [], react["createElement"].apply(react, ["br", createObj(props$$388, 1)].concat([]))), (props$$390 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$252 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$390, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$252))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$392, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$254)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$394, 1)].concat(children$$256));
}();
var gen15 = function () {
  var props$$406, children$$264, props$$396, children$$258, props$$398, props$$400, children$$260, props$$402, props$$404, children$$262;
  var props$$408 = [];
  var children$$266 = [(props$$406 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$264 = [(props$$396 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$258 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$396, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$258))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$398 = [], react["createElement"].apply(react, ["br", createObj(props$$398, 1)].concat([]))), (props$$400 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$260 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$400, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$260))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$402 = [], react["createElement"].apply(react, ["br", createObj(props$$402, 1)].concat([]))), (props$$404 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$262 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$404, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$262))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$406, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$264)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$408, 1)].concat(children$$266));
}();
var gen16 = function () {
  var props$$420, children$$274, props$$410, children$$268, props$$412, props$$414, children$$270, props$$416, props$$418, children$$272;
  var props$$422 = [];
  var children$$276 = [(props$$420 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$274 = [(props$$410 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$268 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$410, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$268))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$412 = [], react["createElement"].apply(react, ["br", createObj(props$$412, 1)].concat([]))), (props$$414 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$270 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$414, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$270))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$416 = [], react["createElement"].apply(react, ["br", createObj(props$$416, 1)].concat([]))), (props$$418 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$272 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$418, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$272))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$420, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$274)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$422, 1)].concat(children$$276));
}();
var gen17 = function () {
  var props$$434, children$$284, props$$424, children$$278, props$$426, props$$428, children$$280, props$$430, props$$432, children$$282;
  var props$$436 = [];
  var children$$286 = [(props$$434 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$284 = [(props$$424 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$278 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$424, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$278))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$426 = [], react["createElement"].apply(react, ["br", createObj(props$$426, 1)].concat([]))), (props$$428 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$280 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$428, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$280))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$430 = [], react["createElement"].apply(react, ["br", createObj(props$$430, 1)].concat([]))), (props$$432 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$282 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$432, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$282))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$434, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$284)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$436, 1)].concat(children$$286));
}();
var gen18 = function () {
  var props$$448, children$$294, props$$438, children$$288, props$$440, props$$442, children$$290, props$$444, props$$446, children$$292;
  var props$$450 = [];
  var children$$296 = [(props$$448 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$294 = [(props$$438 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$288 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$438, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$288))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$440 = [], react["createElement"].apply(react, ["br", createObj(props$$440, 1)].concat([]))), (props$$442 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$290 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$442, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$290))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$444 = [], react["createElement"].apply(react, ["br", createObj(props$$444, 1)].concat([]))), (props$$446 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$292 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$446, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$292))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$448, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$294)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$450, 1)].concat(children$$296));
}();
var gen19 = function () {
  var props$$462, children$$304, props$$452, children$$298, props$$454, props$$456, children$$300, props$$458, props$$460, children$$302;
  var props$$464 = [];
  var children$$306 = [(props$$462 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$304 = [(props$$452 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$298 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$452, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$298))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$454 = [], react["createElement"].apply(react, ["br", createObj(props$$454, 1)].concat([]))), (props$$456 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$300 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$456, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$300))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$458 = [], react["createElement"].apply(react, ["br", createObj(props$$458, 1)].concat([]))), (props$$460 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$302 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$460, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$302))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$462, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$304)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$464, 1)].concat(children$$306));
}();
var gen20 = function () {
  var props$$476, children$$314, props$$466, children$$308, props$$468, props$$470, children$$310, props$$472, props$$474, children$$312;
  var props$$478 = [];
  var children$$316 = [(props$$476 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$314 = [(props$$466 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$308 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$466, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$308))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$468 = [], react["createElement"].apply(react, ["br", createObj(props$$468, 1)].concat([]))), (props$$470 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$310 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$470, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$310))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$472 = [], react["createElement"].apply(react, ["br", createObj(props$$472, 1)].concat([]))), (props$$474 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$312 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$474, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$312))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$476, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$314)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$478, 1)].concat(children$$316));
}();
var gen21 = function () {
  var props$$490, children$$324, props$$480, children$$318, props$$482, props$$484, children$$320, props$$486, props$$488, children$$322;
  var props$$492 = [];
  var children$$326 = [(props$$490 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$324 = [(props$$480 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$318 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$480, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$318))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$482 = [], react["createElement"].apply(react, ["br", createObj(props$$482, 1)].concat([]))), (props$$484 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$320 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$484, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$320))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$486 = [], react["createElement"].apply(react, ["br", createObj(props$$486, 1)].concat([]))), (props$$488 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$322 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$488, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$322))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$490, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$324)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$492, 1)].concat(children$$326));
}();
var gen22 = function () {
  var props$$504, children$$334, props$$494, children$$328, props$$496, props$$498, children$$330, props$$500, props$$502, children$$332;
  var props$$506 = [];
  var children$$336 = [(props$$504 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$334 = [(props$$494 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$328 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$494, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$328))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$496 = [], react["createElement"].apply(react, ["br", createObj(props$$496, 1)].concat([]))), (props$$498 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$330 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$498, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$330))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$500 = [], react["createElement"].apply(react, ["br", createObj(props$$500, 1)].concat([]))), (props$$502 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$332 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$502, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$332))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$504, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$334)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$506, 1)].concat(children$$336));
}();
var gen23 = function () {
  var props$$518, children$$344, props$$508, children$$338, props$$510, props$$512, children$$340, props$$514, props$$516, children$$342;
  var props$$520 = [];
  var children$$346 = [(props$$518 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$344 = [(props$$508 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$338 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$508, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$338))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$510 = [], react["createElement"].apply(react, ["br", createObj(props$$510, 1)].concat([]))), (props$$512 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$340 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$512, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$340))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$514 = [], react["createElement"].apply(react, ["br", createObj(props$$514, 1)].concat([]))), (props$$516 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$342 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$516, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$342))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$518, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$344)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$520, 1)].concat(children$$346));
}();
var gen24 = function () {
  var props$$532, children$$354, props$$522, children$$348, props$$524, props$$526, children$$350, props$$528, props$$530, children$$352;
  var props$$534 = [];
  var children$$356 = [(props$$532 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$354 = [(props$$522 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$348 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$522, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$348))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$524 = [], react["createElement"].apply(react, ["br", createObj(props$$524, 1)].concat([]))), (props$$526 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$350 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$526, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$350))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$528 = [], react["createElement"].apply(react, ["br", createObj(props$$528, 1)].concat([]))), (props$$530 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$352 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$530, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$352))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$532, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$354)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$534, 1)].concat(children$$356));
}();
var gen25 = function () {
  var props$$546, children$$364, props$$536, children$$358, props$$538, props$$540, children$$360, props$$542, props$$544, children$$362;
  var props$$548 = [];
  var children$$366 = [(props$$546 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$364 = [(props$$536 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$358 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$536, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$358))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$538 = [], react["createElement"].apply(react, ["br", createObj(props$$538, 1)].concat([]))), (props$$540 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$360 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$540, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$360))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$542 = [], react["createElement"].apply(react, ["br", createObj(props$$542, 1)].concat([]))), (props$$544 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$362 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$544, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$362))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$546, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$364)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$548, 1)].concat(children$$366));
}();
var gen26 = function () {
  var props$$560, children$$374, props$$550, children$$368, props$$552, props$$554, children$$370, props$$556, props$$558, children$$372;
  var props$$562 = [];
  var children$$376 = [(props$$560 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$374 = [(props$$550 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$368 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$550, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$368))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$552 = [], react["createElement"].apply(react, ["br", createObj(props$$552, 1)].concat([]))), (props$$554 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$370 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$554, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$370))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$556 = [], react["createElement"].apply(react, ["br", createObj(props$$556, 1)].concat([]))), (props$$558 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$372 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$558, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$372))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$560, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$374)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$562, 1)].concat(children$$376));
}();
var gen27 = function () {
  var props$$574, children$$384, props$$564, children$$378, props$$566, props$$568, children$$380, props$$570, props$$572, children$$382;
  var props$$576 = [];
  var children$$386 = [(props$$574 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$384 = [(props$$564 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$378 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$564, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$378))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$566 = [], react["createElement"].apply(react, ["br", createObj(props$$566, 1)].concat([]))), (props$$568 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$380 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$568, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$380))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$570 = [], react["createElement"].apply(react, ["br", createObj(props$$570, 1)].concat([]))), (props$$572 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$382 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$572, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$382))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$574, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$384)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$576, 1)].concat(children$$386));
}();
var gen28 = function () {
  var props$$588, children$$394, props$$578, children$$388, props$$580, props$$582, children$$390, props$$584, props$$586, children$$392;
  var props$$590 = [];
  var children$$396 = [(props$$588 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$394 = [(props$$578 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$388 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$578, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$388))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$580 = [], react["createElement"].apply(react, ["br", createObj(props$$580, 1)].concat([]))), (props$$582 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$390 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$582, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$390))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$584 = [], react["createElement"].apply(react, ["br", createObj(props$$584, 1)].concat([]))), (props$$586 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$392 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$586, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$392))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$588, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$394)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$590, 1)].concat(children$$396));
}();
var gen29 = function () {
  var props$$602, children$$404, props$$592, children$$398, props$$594, props$$596, children$$400, props$$598, props$$600, children$$402;
  var props$$604 = [];
  var children$$406 = [(props$$602 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$404 = [(props$$592 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$398 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$592, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$398))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$594 = [], react["createElement"].apply(react, ["br", createObj(props$$594, 1)].concat([]))), (props$$596 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$400 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$596, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$400))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$598 = [], react["createElement"].apply(react, ["br", createObj(props$$598, 1)].concat([]))), (props$$600 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$402 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$600, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$402))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$602, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$404)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$604, 1)].concat(children$$406));
}();
var gen30 = function () {
  var props$$616, children$$414, props$$606, children$$408, props$$608, props$$610, children$$410, props$$612, props$$614, children$$412;
  var props$$618 = [];
  var children$$416 = [(props$$616 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$414 = [(props$$606 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$408 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$606, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$408))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$608 = [], react["createElement"].apply(react, ["br", createObj(props$$608, 1)].concat([]))), (props$$610 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$410 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$610, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$410))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$612 = [], react["createElement"].apply(react, ["br", createObj(props$$612, 1)].concat([]))), (props$$614 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$412 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$614, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$412))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$616, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$414)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$618, 1)].concat(children$$416));
}();
var gen31 = function () {
  var props$$630, children$$424, props$$620, children$$418, props$$622, props$$624, children$$420, props$$626, props$$628, children$$422;
  var props$$632 = [];
  var children$$426 = [(props$$630 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$424 = [(props$$620 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$418 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$620, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$418))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$622 = [], react["createElement"].apply(react, ["br", createObj(props$$622, 1)].concat([]))), (props$$624 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$420 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$624, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$420))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$626 = [], react["createElement"].apply(react, ["br", createObj(props$$626, 1)].concat([]))), (props$$628 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$422 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$628, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$422))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$630, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$424)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$632, 1)].concat(children$$426));
}();
var gen32 = function () {
  var props$$644, children$$434, props$$634, children$$428, props$$636, props$$638, children$$430, props$$640, props$$642, children$$432;
  var props$$646 = [];
  var children$$436 = [(props$$644 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$434 = [(props$$634 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$428 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$634, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$428))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$636 = [], react["createElement"].apply(react, ["br", createObj(props$$636, 1)].concat([]))), (props$$638 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$430 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$638, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$430))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$640 = [], react["createElement"].apply(react, ["br", createObj(props$$640, 1)].concat([]))), (props$$642 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$432 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$642, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$432))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$644, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$434)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$646, 1)].concat(children$$436));
}();
var gen33 = function () {
  var props$$658, children$$444, props$$648, children$$438, props$$650, props$$652, children$$440, props$$654, props$$656, children$$442;
  var props$$660 = [];
  var children$$446 = [(props$$658 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$444 = [(props$$648 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$438 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$648, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$438))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$650 = [], react["createElement"].apply(react, ["br", createObj(props$$650, 1)].concat([]))), (props$$652 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$440 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$652, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$440))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$654 = [], react["createElement"].apply(react, ["br", createObj(props$$654, 1)].concat([]))), (props$$656 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$442 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$656, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$442))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$658, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$444)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$660, 1)].concat(children$$446));
}();
var gen34 = function () {
  var props$$672, children$$454, props$$662, children$$448, props$$664, props$$666, children$$450, props$$668, props$$670, children$$452;
  var props$$674 = [];
  var children$$456 = [(props$$672 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$454 = [(props$$662 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$448 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$662, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$448))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$664 = [], react["createElement"].apply(react, ["br", createObj(props$$664, 1)].concat([]))), (props$$666 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$450 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$666, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$450))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$668 = [], react["createElement"].apply(react, ["br", createObj(props$$668, 1)].concat([]))), (props$$670 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$452 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$670, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$452))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$672, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$454)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$674, 1)].concat(children$$456));
}();
var gen35 = function () {
  var props$$686, children$$464, props$$676, children$$458, props$$678, props$$680, children$$460, props$$682, props$$684, children$$462;
  var props$$688 = [];
  var children$$466 = [(props$$686 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$464 = [(props$$676 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$458 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$676, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$458))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$678 = [], react["createElement"].apply(react, ["br", createObj(props$$678, 1)].concat([]))), (props$$680 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$460 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$680, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$460))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$682 = [], react["createElement"].apply(react, ["br", createObj(props$$682, 1)].concat([]))), (props$$684 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$462 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$684, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$462))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$686, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$464)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$688, 1)].concat(children$$466));
}();
var gen36 = function () {
  var props$$700, children$$474, props$$690, children$$468, props$$692, props$$694, children$$470, props$$696, props$$698, children$$472;
  var props$$702 = [];
  var children$$476 = [(props$$700 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$474 = [(props$$690 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$468 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$690, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$468))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$692 = [], react["createElement"].apply(react, ["br", createObj(props$$692, 1)].concat([]))), (props$$694 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$470 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$694, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$470))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$696 = [], react["createElement"].apply(react, ["br", createObj(props$$696, 1)].concat([]))), (props$$698 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$472 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$698, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$472))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$700, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$474)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$702, 1)].concat(children$$476));
}();
var gen37 = function () {
  var props$$714, children$$484, props$$704, children$$478, props$$706, props$$708, children$$480, props$$710, props$$712, children$$482;
  var props$$716 = [];
  var children$$486 = [(props$$714 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$484 = [(props$$704 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$478 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$704, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$478))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$706 = [], react["createElement"].apply(react, ["br", createObj(props$$706, 1)].concat([]))), (props$$708 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$480 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$708, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$480))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$710 = [], react["createElement"].apply(react, ["br", createObj(props$$710, 1)].concat([]))), (props$$712 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$482 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$712, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$482))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$714, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$484)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$716, 1)].concat(children$$486));
}();
var gen38 = function () {
  var props$$728, children$$494, props$$718, children$$488, props$$720, props$$722, children$$490, props$$724, props$$726, children$$492;
  var props$$730 = [];
  var children$$496 = [(props$$728 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$494 = [(props$$718 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$488 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$718, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$488))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$720 = [], react["createElement"].apply(react, ["br", createObj(props$$720, 1)].concat([]))), (props$$722 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$490 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$722, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$490))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$724 = [], react["createElement"].apply(react, ["br", createObj(props$$724, 1)].concat([]))), (props$$726 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$492 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$726, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$492))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$728, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$494)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$730, 1)].concat(children$$496));
}();
var gen39 = function () {
  var props$$742, children$$504, props$$732, children$$498, props$$734, props$$736, children$$500, props$$738, props$$740, children$$502;
  var props$$744 = [];
  var children$$506 = [(props$$742 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$504 = [(props$$732 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$498 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$732, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$498))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$734 = [], react["createElement"].apply(react, ["br", createObj(props$$734, 1)].concat([]))), (props$$736 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$500 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$736, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$500))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$738 = [], react["createElement"].apply(react, ["br", createObj(props$$738, 1)].concat([]))), (props$$740 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$502 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$740, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$502))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$742, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$504)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$744, 1)].concat(children$$506));
}();
var gen40 = function () {
  var props$$756, children$$514, props$$746, children$$508, props$$748, props$$750, children$$510, props$$752, props$$754, children$$512;
  var props$$758 = [];
  var children$$516 = [(props$$756 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$514 = [(props$$746 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$508 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$746, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$508))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$748 = [], react["createElement"].apply(react, ["br", createObj(props$$748, 1)].concat([]))), (props$$750 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$510 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$750, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$510))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$752 = [], react["createElement"].apply(react, ["br", createObj(props$$752, 1)].concat([]))), (props$$754 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$512 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$754, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$512))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$756, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$514)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$758, 1)].concat(children$$516));
}();
var gen41 = function () {
  var props$$770, children$$524, props$$760, children$$518, props$$762, props$$764, children$$520, props$$766, props$$768, children$$522;
  var props$$772 = [];
  var children$$526 = [(props$$770 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$524 = [(props$$760 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$518 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$760, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$518))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$762 = [], react["createElement"].apply(react, ["br", createObj(props$$762, 1)].concat([]))), (props$$764 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$520 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$764, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$520))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$766 = [], react["createElement"].apply(react, ["br", createObj(props$$766, 1)].concat([]))), (props$$768 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$522 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$768, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$522))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$770, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$524)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$772, 1)].concat(children$$526));
}();
var gen42 = function () {
  var props$$784, children$$534, props$$774, children$$528, props$$776, props$$778, children$$530, props$$780, props$$782, children$$532;
  var props$$786 = [];
  var children$$536 = [(props$$784 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$534 = [(props$$774 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$528 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$774, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$528))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$776 = [], react["createElement"].apply(react, ["br", createObj(props$$776, 1)].concat([]))), (props$$778 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$530 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$778, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$530))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$780 = [], react["createElement"].apply(react, ["br", createObj(props$$780, 1)].concat([]))), (props$$782 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$532 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$782, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$532))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$784, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$534)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$786, 1)].concat(children$$536));
}();
var gen43 = function () {
  var props$$798, children$$544, props$$788, children$$538, props$$790, props$$792, children$$540, props$$794, props$$796, children$$542;
  var props$$800 = [];
  var children$$546 = [(props$$798 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$544 = [(props$$788 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$538 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$788, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$538))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$790 = [], react["createElement"].apply(react, ["br", createObj(props$$790, 1)].concat([]))), (props$$792 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$540 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$792, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$540))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$794 = [], react["createElement"].apply(react, ["br", createObj(props$$794, 1)].concat([]))), (props$$796 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$542 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$796, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$542))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$798, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$544)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$800, 1)].concat(children$$546));
}();
var gen44 = function () {
  var props$$812, children$$554, props$$802, children$$548, props$$804, props$$806, children$$550, props$$808, props$$810, children$$552;
  var props$$814 = [];
  var children$$556 = [(props$$812 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$554 = [(props$$802 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$548 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$802, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$548))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$804 = [], react["createElement"].apply(react, ["br", createObj(props$$804, 1)].concat([]))), (props$$806 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$550 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$806, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$550))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$808 = [], react["createElement"].apply(react, ["br", createObj(props$$808, 1)].concat([]))), (props$$810 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$552 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$810, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$552))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$812, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$554)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$814, 1)].concat(children$$556));
}();
var gen45 = function () {
  var props$$826, children$$564, props$$816, children$$558, props$$818, props$$820, children$$560, props$$822, props$$824, children$$562;
  var props$$828 = [];
  var children$$566 = [(props$$826 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$564 = [(props$$816 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$558 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$816, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$558))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$818 = [], react["createElement"].apply(react, ["br", createObj(props$$818, 1)].concat([]))), (props$$820 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$560 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$820, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$560))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$822 = [], react["createElement"].apply(react, ["br", createObj(props$$822, 1)].concat([]))), (props$$824 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$562 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$824, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$562))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$826, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$564)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$828, 1)].concat(children$$566));
}();
var gen46 = function () {
  var props$$840, children$$574, props$$830, children$$568, props$$832, props$$834, children$$570, props$$836, props$$838, children$$572;
  var props$$842 = [];
  var children$$576 = [(props$$840 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$574 = [(props$$830 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$568 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$830, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$568))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$832 = [], react["createElement"].apply(react, ["br", createObj(props$$832, 1)].concat([]))), (props$$834 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$570 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$834, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$570))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$836 = [], react["createElement"].apply(react, ["br", createObj(props$$836, 1)].concat([]))), (props$$838 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$572 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$838, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$572))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$840, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$574)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$842, 1)].concat(children$$576));
}();
var gen47 = function () {
  var props$$854, children$$584, props$$844, children$$578, props$$846, props$$848, children$$580, props$$850, props$$852, children$$582;
  var props$$856 = [];
  var children$$586 = [(props$$854 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$584 = [(props$$844 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$578 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$844, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$578))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$846 = [], react["createElement"].apply(react, ["br", createObj(props$$846, 1)].concat([]))), (props$$848 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$580 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$848, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$580))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$850 = [], react["createElement"].apply(react, ["br", createObj(props$$850, 1)].concat([]))), (props$$852 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$582 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$852, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$582))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$854, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$584)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$856, 1)].concat(children$$586));
}();
var gen48 = function () {
  var props$$868, children$$594, props$$858, children$$588, props$$860, props$$862, children$$590, props$$864, props$$866, children$$592;
  var props$$870 = [];
  var children$$596 = [(props$$868 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$594 = [(props$$858 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$588 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$858, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$588))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$860 = [], react["createElement"].apply(react, ["br", createObj(props$$860, 1)].concat([]))), (props$$862 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$590 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$862, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$590))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$864 = [], react["createElement"].apply(react, ["br", createObj(props$$864, 1)].concat([]))), (props$$866 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$592 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$866, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$592))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$868, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$594)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$870, 1)].concat(children$$596));
}();
var gen49 = function () {
  var props$$882, children$$604, props$$872, children$$598, props$$874, props$$876, children$$600, props$$878, props$$880, children$$602;
  var props$$884 = [];
  var children$$606 = [(props$$882 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$604 = [(props$$872 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$598 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$872, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$598))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$874 = [], react["createElement"].apply(react, ["br", createObj(props$$874, 1)].concat([]))), (props$$876 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$600 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$876, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$600))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$878 = [], react["createElement"].apply(react, ["br", createObj(props$$878, 1)].concat([]))), (props$$880 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$602 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$880, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$602))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$882, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$604)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$884, 1)].concat(children$$606));
}();
var gen50 = function () {
  var props$$896, children$$614, props$$886, children$$608, props$$888, props$$890, children$$610, props$$892, props$$894, children$$612;
  var props$$898 = [];
  var children$$616 = [(props$$896 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$614 = [(props$$886 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$608 = ["1"], react["createElement"].apply(react, ["span", createObj(props$$886, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$608))))), "Thus the heauens and the earth were finished, and all the hoste of them. ", (props$$888 = [], react["createElement"].apply(react, ["br", createObj(props$$888, 1)].concat([]))), (props$$890 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$610 = ["2"], react["createElement"].apply(react, ["span", createObj(props$$890, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$610))))), "And on the seuenth day God ended his worke, which hee had made: And he rested on the seuenth day from all his worke, which he had made.", (props$$892 = [], react["createElement"].apply(react, ["br", createObj(props$$892, 1)].concat([]))), (props$$894 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-small has-text-grey-light")], (children$$612 = ["3"], react["createElement"].apply(react, ["span", createObj(props$$894, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$612))))), "And God blessed the seuenth day, and sanctified it: because that in it he had rested from all his worke, which God created and made. "], react["createElement"].apply(react, ["p", createObj(props$$896, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$614)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$898, 1)].concat(children$$616));
}();
function Genesis_genesis(chapter) {
  var props$$902 = [];
  var children$$620 = List_ofSeq(delay(function () {
    var props$$900, children$$618;
    return chapter === 1 ? singleton(Genesis_gen1) : chapter === 2 ? singleton(Genesis_gen2) : chapter === 3 ? singleton(gen3) : chapter === 4 ? singleton(gen4) : chapter === 5 ? singleton(gen5) : chapter === 6 ? singleton(gen6) : chapter === 7 ? singleton(gen7) : chapter === 8 ? singleton(gen8) : chapter === 9 ? singleton(gen9) : chapter === 10 ? singleton(gen10) : chapter === 11 ? singleton(gen11) : chapter === 12 ? singleton(gen12) : chapter === 13 ? singleton(gen13) : chapter === 14 ? singleton(gen14) : chapter === 15 ? singleton(gen15) : chapter === 16 ? singleton(gen16) : chapter === 17 ? singleton(gen17) : chapter === 18 ? singleton(gen18) : chapter === 19 ? singleton(gen19) : chapter === 20 ? singleton(gen20) : chapter === 21 ? singleton(gen21) : chapter === 22 ? singleton(gen22) : chapter === 23 ? singleton(gen23) : chapter === 24 ? singleton(gen24) : chapter === 25 ? singleton(gen25) : chapter === 26 ? singleton(gen26) : chapter === 27 ? singleton(gen27) : chapter === 28 ? singleton(gen28) : chapter === 29 ? singleton(gen29) : chapter === 30 ? singleton(gen30) : chapter === 31 ? singleton(gen31) : chapter === 32 ? singleton(gen32) : chapter === 33 ? singleton(gen33) : chapter === 34 ? singleton(gen34) : chapter === 35 ? singleton(gen35) : chapter === 36 ? singleton(gen36) : chapter === 37 ? singleton(gen37) : chapter === 38 ? singleton(gen38) : chapter === 39 ? singleton(gen39) : chapter === 40 ? singleton(gen40) : chapter === 41 ? singleton(gen41) : chapter === 42 ? singleton(gen42) : chapter === 43 ? singleton(gen43) : chapter === 44 ? singleton(gen44) : chapter === 45 ? singleton(gen45) : chapter === 46 ? singleton(gen46) : chapter === 47 ? singleton(gen47) : chapter === 48 ? singleton(gen48) : chapter === 49 ? singleton(gen49) : chapter === 50 ? singleton(gen50) : singleton((props$$900 = [], (children$$618 = [], react["createElement"].apply(react, ["div", createObj(props$$900, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$618))))));
  }));
  return react["createElement"].apply(react, ["div", createObj(props$$902, 1)].concat(KJV1611_Genesis_toConsumableArray(children$$620)));
}
// CONCATENATED MODULE: ./src/Translations/KJV1611/TableOfContents.fs













function KJV1611_TableOfContents_toConsumableArray(arr) { return KJV1611_TableOfContents_arrayWithoutHoles(arr) || KJV1611_TableOfContents_iterableToArray(arr) || KJV1611_TableOfContents_nonIterableSpread(); }

function KJV1611_TableOfContents_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function KJV1611_TableOfContents_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function KJV1611_TableOfContents_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }







function TableOfContents_books(book, chapter) {
  var props = [];
  var children = List_ofSeq(delay(function () {
    return book.tag === 1 ? singleton(Exodus_exodus(chapter)) : singleton(Genesis_genesis(chapter));
  }));
  return react["createElement"].apply(react, ["div", createObj(props, 1)].concat(KJV1611_TableOfContents_toConsumableArray(children)));
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(192);

// CONCATENATED MODULE: ./.fable/fable-library.2.4.12/AsyncBuilder.js




















function AsyncBuilder_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AsyncBuilder_typeof = function _typeof(obj) { return typeof obj; }; } else { AsyncBuilder_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AsyncBuilder_typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (AsyncBuilder_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AsyncBuilder_setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return AsyncBuilder_construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return AsyncBuilder_setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function AsyncBuilder_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function AsyncBuilder_construct(Parent, args, Class) { if (AsyncBuilder_isNativeReflectConstruct()) { AsyncBuilder_construct = Reflect.construct; } else { AsyncBuilder_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) AsyncBuilder_setPrototypeOf(instance, Class.prototype); return instance; }; } return AsyncBuilder_construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function AsyncBuilder_setPrototypeOf(o, p) { AsyncBuilder_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AsyncBuilder_setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function AsyncBuilder_slicedToArray(arr, i) { return AsyncBuilder_arrayWithHoles(arr) || AsyncBuilder_iterableToArrayLimit(arr, i) || AsyncBuilder_nonIterableRest(); }

function AsyncBuilder_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function AsyncBuilder_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function AsyncBuilder_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function AsyncBuilder_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AsyncBuilder_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AsyncBuilder_createClass(Constructor, protoProps, staticProps) { if (protoProps) AsyncBuilder_defineProperties(Constructor.prototype, protoProps); if (staticProps) AsyncBuilder_defineProperties(Constructor, staticProps); return Constructor; }

var CancellationToken =
/*#__PURE__*/
function () {
  function CancellationToken() {
    var cancelled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    AsyncBuilder_classCallCheck(this, CancellationToken);

    this._id = 0;
    this._cancelled = cancelled;
    this._listeners = new Map();
  }

  AsyncBuilder_createClass(CancellationToken, [{
    key: "cancel",
    value: function cancel() {
      if (!this._cancelled) {
        this._cancelled = true;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this._listeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = AsyncBuilder_slicedToArray(_step.value, 2),
                listener = _step$value[1];

            listener();
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: "addListener",
    value: function addListener(f) {
      var id = this._id;

      this._listeners.set(this._id++, f);

      return id;
    }
  }, {
    key: "removeListener",
    value: function removeListener(id) {
      return this._listeners["delete"](id);
    }
  }, {
    key: "register",
    value: function register(f, state) {
      var $ = this;
      var id = this.addListener(state == null ? f : function () {
        return f(state);
      });
      return {
        Dispose: function Dispose() {
          $.removeListener(id);
        }
      };
    }
  }, {
    key: "isCancelled",
    get: function get() {
      return this._cancelled;
    }
  }]);

  return CancellationToken;
}();
var OperationCanceledError =
/*#__PURE__*/
function (_Error) {
  _inherits(OperationCanceledError, _Error);

  function OperationCanceledError() {
    var _this;

    AsyncBuilder_classCallCheck(this, OperationCanceledError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OperationCanceledError).call(this, "The operation was canceled"));
    Object.setPrototypeOf(_assertThisInitialized(_this), OperationCanceledError.prototype);
    return _this;
  }

  return OperationCanceledError;
}(_wrapNativeSuper(Error));
var Trampoline =
/*#__PURE__*/
function () {
  function Trampoline() {
    AsyncBuilder_classCallCheck(this, Trampoline);

    this.callCount = 0;
  }

  AsyncBuilder_createClass(Trampoline, [{
    key: "incrementAndCheck",
    value: function incrementAndCheck() {
      return this.callCount++ > Trampoline.maxTrampolineCallCount;
    }
  }, {
    key: "hijack",
    value: function hijack(f) {
      this.callCount = 0;
      setTimeout(f, 0);
    }
  }], [{
    key: "maxTrampolineCallCount",
    get: function get() {
      return 2000;
    }
  }]);

  return Trampoline;
}();
function protectedCont(f) {
  return function (ctx) {
    if (ctx.cancelToken.isCancelled) {
      ctx.onCancel(new OperationCanceledError());
    } else if (ctx.trampoline.incrementAndCheck()) {
      ctx.trampoline.hijack(function () {
        try {
          f(ctx);
        } catch (err) {
          ctx.onError(err);
        }
      });
    } else {
      try {
        f(ctx);
      } catch (err) {
        ctx.onError(err);
      }
    }
  };
}
function protectedBind(computation, binder) {
  return protectedCont(function (ctx) {
    computation({
      onSuccess: function onSuccess(x) {
        try {
          binder(x)(ctx);
        } catch (ex) {
          ctx.onError(ex);
        }
      },
      onError: ctx.onError,
      onCancel: ctx.onCancel,
      cancelToken: ctx.cancelToken,
      trampoline: ctx.trampoline
    });
  });
}
function protectedReturn(value) {
  return protectedCont(function (ctx) {
    return ctx.onSuccess(value);
  });
}
var AsyncBuilder =
/*#__PURE__*/
function () {
  function AsyncBuilder() {
    AsyncBuilder_classCallCheck(this, AsyncBuilder);
  }

  AsyncBuilder_createClass(AsyncBuilder, [{
    key: "Bind",
    value: function Bind(computation, binder) {
      return protectedBind(computation, binder);
    }
  }, {
    key: "Combine",
    value: function Combine(computation1, computation2) {
      return this.Bind(computation1, function () {
        return computation2;
      });
    }
  }, {
    key: "Delay",
    value: function Delay(generator) {
      return protectedCont(function (ctx) {
        return generator()(ctx);
      });
    }
  }, {
    key: "For",
    value: function For(sequence, body) {
      var iter = sequence[Symbol.iterator]();
      var cur = iter.next();
      return this.While(function () {
        return !cur.done;
      }, this.Delay(function () {
        var res = body(cur.value);
        cur = iter.next();
        return res;
      }));
    }
  }, {
    key: "Return",
    value: function Return(value) {
      return protectedReturn(value);
    }
  }, {
    key: "ReturnFrom",
    value: function ReturnFrom(computation) {
      return computation;
    }
  }, {
    key: "TryFinally",
    value: function TryFinally(computation, compensation) {
      return protectedCont(function (ctx) {
        computation({
          onSuccess: function onSuccess(x) {
            compensation();
            ctx.onSuccess(x);
          },
          onError: function onError(x) {
            compensation();
            ctx.onError(x);
          },
          onCancel: function onCancel(x) {
            compensation();
            ctx.onCancel(x);
          },
          cancelToken: ctx.cancelToken,
          trampoline: ctx.trampoline
        });
      });
    }
  }, {
    key: "TryWith",
    value: function TryWith(computation, catchHandler) {
      return protectedCont(function (ctx) {
        computation({
          onSuccess: ctx.onSuccess,
          onCancel: ctx.onCancel,
          cancelToken: ctx.cancelToken,
          trampoline: ctx.trampoline,
          onError: function onError(ex) {
            try {
              catchHandler(ex)(ctx);
            } catch (ex2) {
              ctx.onError(ex2);
            }
          }
        });
      });
    }
  }, {
    key: "Using",
    value: function Using(resource, binder) {
      return this.TryFinally(binder(resource), function () {
        return resource.Dispose();
      });
    }
  }, {
    key: "While",
    value: function While(guard, computation) {
      var _this2 = this;

      if (guard()) {
        return this.Bind(computation, function () {
          return _this2.While(guard, computation);
        });
      } else {
        return this.Return(void 0);
      }
    }
  }, {
    key: "Zero",
    value: function Zero() {
      return protectedCont(function (ctx) {
        return ctx.onSuccess(void 0);
      });
    }
  }]);

  return AsyncBuilder;
}();
var AsyncBuilder_singleton = new AsyncBuilder();
// CONCATENATED MODULE: ./.fable/fable-library.2.4.12/Async.js







function Async_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







 // Implemented just for type references

var Async = function Async() {
  Async_classCallCheck(this, Async);
};



function emptyContinuation(x) {} // NOP
// MakeAsync: body:(AsyncActivation<'T> -> AsyncReturn) -> Async<'T>


function makeAsync(body) {
  return body;
} // Invoke: computation: Async<'T> -> ctxt:AsyncActivation<'T> -> AsyncReturn

function invoke(computation, ctx) {
  return computation(ctx);
} // CallThenInvoke: ctxt:AsyncActivation<'T> -> result1:'U -> part2:('U -> Async<'T>) -> AsyncReturn

function callThenInvoke(ctx, result1, part2) {
  return part2(result1)(ctx);
} // Bind: ctxt:AsyncActivation<'T> -> part1:Async<'U> -> part2:('U -> Async<'T>) -> AsyncReturn

function Async_bind(ctx, part1, part2) {
  return protectedBind(part1, part2)(ctx);
}
function createCancellationToken(arg) {
  var token = new CancellationToken(typeof arg === "boolean" ? arg : false);

  if (typeof arg === "number") {
    setTimeout(function () {
      token.cancel();
    }, arg);
  }

  return token;
}
function cancel(token) {
  token.cancel();
}
function cancelAfter(token, ms) {
  setTimeout(function () {
    token.cancel();
  }, ms);
}
function isCancellationRequested(token) {
  return token != null && token.isCancelled;
}
function startChild(computation) {
  var promise = startAsPromise(computation); // JS Promises are hot, computation has already started
  // but we delay returning the result

  return protectedCont(function (ctx) {
    return protectedReturn(awaitPromise(promise))(ctx);
  });
}
function awaitPromise(p) {
  return fromContinuations(function (conts) {
    return p.then(conts[0])["catch"](function (err) {
      return (err instanceof OperationCanceledError ? conts[2] : conts[1])(err);
    });
  });
}
function cancellationToken() {
  return protectedCont(function (ctx) {
    return ctx.onSuccess(ctx.cancelToken);
  });
}
var defaultCancellationToken = new CancellationToken();
function catchAsync(work) {
  return protectedCont(function (ctx) {
    work({
      onSuccess: function onSuccess(x) {
        return ctx.onSuccess(choice1(x));
      },
      onError: function onError(ex) {
        return ctx.onSuccess(choice2(ex));
      },
      onCancel: ctx.onCancel,
      cancelToken: ctx.cancelToken,
      trampoline: ctx.trampoline
    });
  });
}
function fromContinuations(f) {
  return protectedCont(function (ctx) {
    return f([ctx.onSuccess, ctx.onError, ctx.onCancel]);
  });
}
function ignore(computation) {
  return protectedBind(computation, function (x) {
    return protectedReturn(void 0);
  });
}
function parallel(computations) {
  return awaitPromise(Promise.all(Seq_map(function (w) {
    return startAsPromise(w);
  }, computations)));
}
function sleep(millisecondsDueTime) {
  return protectedCont(function (ctx) {
    var tokenId;
    var timeoutId = setTimeout(function () {
      ctx.cancelToken.removeListener(tokenId);
      ctx.onSuccess(void 0);
    }, millisecondsDueTime);
    tokenId = ctx.cancelToken.addListener(function () {
      clearTimeout(timeoutId);
      ctx.onCancel(new OperationCanceledError());
    });
  });
}
function start(computation, cancellationToken) {
  return startWithContinuations(computation, cancellationToken);
}
function startImmediate(computation, cancellationToken) {
  return start(computation, cancellationToken);
}
function startWithContinuations(computation, continuation, exceptionContinuation, cancellationContinuation, cancelToken) {
  if (typeof continuation !== "function") {
    cancelToken = continuation;
    continuation = null;
  }

  var trampoline = new Trampoline();
  computation({
    onSuccess: continuation ? continuation : emptyContinuation,
    onError: exceptionContinuation ? exceptionContinuation : emptyContinuation,
    onCancel: cancellationContinuation ? cancellationContinuation : emptyContinuation,
    cancelToken: cancelToken ? cancelToken : defaultCancellationToken,
    trampoline: trampoline
  });
}
function startAsPromise(computation, cancellationToken) {
  return new Promise(function (resolve, reject) {
    return startWithContinuations(computation, resolve, reject, reject, cancellationToken ? cancellationToken : defaultCancellationToken);
  });
}
// CONCATENATED MODULE: ./.fable/Fable.Elmish.3.0.0/cmd.fs




function Cmd$$$exec(dispatch, cmd) {
  List_iterate(function action(sub) {
    sub(dispatch);
  }, cmd);
}
function Cmd$$$none() {
  return new List();
}
function Cmd$$$map(f, cmd$$1) {
  return List_map(function mapping(g) {
    return function ($arg$$2) {
      g(function ($arg$$1) {
        $arg$$2(f($arg$$1));
      });
    };
  }, cmd$$1);
}
function Cmd$$$batch(cmds) {
  return List_concat(cmds);
}
function Cmd$$$ofSub(sub$$1) {
  return new List(sub$$1, new List());
}
function Cmd$002EOfFunc$$$either(task, arg, ofSuccess, ofError) {
  return new List(function bind(dispatch$$2) {
    try {
      var $arg$$3 = task(arg);
      return dispatch$$2(ofSuccess($arg$$3));
    } catch (x) {
      return dispatch$$2(ofError(x));
    }
  }, new List());
}
function Cmd$002EOfFunc$$$perform(task$$1, arg$$1, ofSuccess$$1) {
  return new List(function bind$$1(dispatch$$3) {
    try {
      var $arg$$5 = task$$1(arg$$1);
      dispatch$$3(ofSuccess$$1($arg$$5));
    } catch (x$$1) {}
  }, new List());
}
function Cmd$002EOfFunc$$$attempt(task$$2, arg$$2, ofError$$1) {
  return new List(function bind$$2(dispatch$$4) {
    try {
      task$$2(arg$$2);
    } catch (x$$2) {
      dispatch$$4(ofError$$1(x$$2));
    }
  }, new List());
}
function Cmd$002EOfFunc$$$result(msg) {
  return new List(function (dispatch$$5) {
    dispatch$$5(msg);
  }, new List());
}
function Cmd$002EOfAsync$$$either(task$$3, arg$$3, ofSuccess$$2, ofError$$2) {
  return new List(function ($arg$$7) {
    var arg00$$1;
    arg00$$1 = AsyncBuilder_singleton.Delay(function () {
      var arg00;
      return AsyncBuilder_singleton.Bind((arg00 = task$$3(arg$$3), (catchAsync(arg00))), function (_arg1) {
        $arg$$7(_arg1.tag === 1 ? ofError$$2(_arg1.fields[0]) : ofSuccess$$2(_arg1.fields[0]));
        return AsyncBuilder_singleton.Zero();
      });
    });
    startImmediate(arg00$$1);
  }, new List());
}
function Cmd$002EOfAsync$$$perform(task$$4, arg$$4, ofSuccess$$3) {
  return new List(function ($arg$$8) {
    var arg00$$3;
    arg00$$3 = AsyncBuilder_singleton.Delay(function () {
      var arg00$$2;
      return AsyncBuilder_singleton.Bind((arg00$$2 = task$$4(arg$$4), (catchAsync(arg00$$2))), function (_arg1$$1) {
        if (_arg1$$1.tag === 0) {
          $arg$$8(ofSuccess$$3(_arg1$$1.fields[0]));
          return AsyncBuilder_singleton.Zero();
        } else {
          return AsyncBuilder_singleton.Zero();
        }
      });
    });
    startImmediate(arg00$$3);
  }, new List());
}
function Cmd$002EOfAsync$$$attempt(task$$5, arg$$5, ofError$$3) {
  return new List(function ($arg$$9) {
    var arg00$$5;
    arg00$$5 = AsyncBuilder_singleton.Delay(function () {
      var arg00$$4;
      return AsyncBuilder_singleton.Bind((arg00$$4 = task$$5(arg$$5), (catchAsync(arg00$$4))), function (_arg1$$2) {
        if (_arg1$$2.tag === 1) {
          $arg$$9(ofError$$3(_arg1$$2.fields[0]));
          return AsyncBuilder_singleton.Zero();
        } else {
          return AsyncBuilder_singleton.Zero();
        }
      });
    });
    startImmediate(arg00$$5);
  }, new List());
}
function Cmd$002EOfAsync$$$result(task$$6) {
  return new List(function ($arg$$10) {
    var arg00$$7;
    arg00$$7 = AsyncBuilder_singleton.Delay(function () {
      return AsyncBuilder_singleton.Bind((catchAsync(task$$6)), function (_arg1$$3) {
        if (_arg1$$3.tag === 0) {
          $arg$$10(_arg1$$3.fields[0]);
          return AsyncBuilder_singleton.Zero();
        } else {
          return AsyncBuilder_singleton.Zero();
        }
      });
    });
    startImmediate(arg00$$7);
  }, new List());
}
function Cmd$002EOfPromise$$$either(task$$7, arg$$6, ofSuccess$$4, ofError$$4) {
  return new List(function bind$$7(dispatch$$10) {
    var value$$1 = task$$7(arg$$6).then(function ($arg$$11) {
      return dispatch$$10(ofSuccess$$4($arg$$11));
    })["catch"](function ($arg$$13) {
      return dispatch$$10((ofError$$4(($arg$$13))));
    });
    value$$1, null;
  }, new List());
}
function Cmd$002EOfPromise$$$perform(task$$8, arg$$7, ofSuccess$$5) {
  return new List(function bind$$8(dispatch$$11) {
    var value$$2 = task$$8(arg$$7).then(function ($arg$$14) {
      return dispatch$$11(ofSuccess$$5($arg$$14));
    });
    value$$2, null;
  }, new List());
}
function Cmd$002EOfPromise$$$attempt(task$$9, arg$$8, ofError$$5) {
  return new List(function bind$$9(dispatch$$12) {
    var value$$4 = task$$9(arg$$8)["catch"](function ($arg$$16) {
      dispatch$$12((ofError$$5(($arg$$16))));
    });
    value$$4, null;
  }, new List());
}
function Cmd$002EOfPromise$$$result(task$$10) {
  return new List(function bind$$10(dispatch$$13) {
    var value$$5 = task$$10.then(dispatch$$13);
    value$$5, null;
  }, new List());
}
function Cmd$$$attemptFunc(task$$11, arg$$9, ofError$$6) {
  return Cmd$002EOfFunc$$$attempt(task$$11, arg$$9, ofError$$6);
}
// CONCATENATED MODULE: ./.fable/Fable.Elmish.3.0.0/prelude.fs

function prelude_onError(text, ex) {
  console.error(some(text), ex);
}
function prelude_toConsole(text$$1, o) {
  console.log(some(text$$1), o);
}
// CONCATENATED MODULE: ./.fable/Fable.Elmish.3.0.0/ring.fs







var RingState$00601 = declare(function Elmish_RingState(tag, name) {
  for (var _len = arguments.length, fields = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    fields[_key - 2] = arguments[_key];
  }

  Union.call.apply(Union, [this, tag, name].concat(fields));
}, Union);
function RingState$00601$reflection($gen$$4) {
  return union("Elmish.RingState`1", [$gen$$4], RingState$00601, function () {
    return [["Writable", [Reflection_array($gen$$4), int32]], ["ReadWritable", [Reflection_array($gen$$4), int32, int32]]];
  });
}
var RingBuffer$00601 = declare(function Elmish_RingBuffer(size) {
  var $this$$1 = this;
  $this$$1.state = new RingState$00601(0, "Writable", fill(new Array(max(comparePrimitives, size, 10)), 0, max(comparePrimitives, size, 10), null), 0);
});
function RingBuffer$00601$reflection($gen$$5) {
  return type("Elmish.RingBuffer`1", [$gen$$5]);
}
function RingBuffer$00601$$$$002Ector$$Z524259A4(size) {
  return this instanceof RingBuffer$00601 ? RingBuffer$00601.call(this, size) : new RingBuffer$00601(size);
}
function RingBuffer$00601$$Pop(__) {
  var matchValue = __.state;

  if (matchValue.tag === 1) {
    var rix$0027 = (matchValue.fields[2] + 1) % matchValue.fields[0].length | 0;
    var matchValue$$1 = rix$0027 === matchValue.fields[1];

    if (matchValue$$1) {
      __.state = new RingState$00601(0, "Writable", matchValue.fields[0], matchValue.fields[1]);
    } else {
      __.state = new RingState$00601(1, "ReadWritable", matchValue.fields[0], matchValue.fields[1], rix$0027);
    }

    return some(matchValue.fields[0][matchValue.fields[2]]);
  } else {
    return null;
  }
}
function RingBuffer$00601$$Push$$2B595(__$$1, item) {
  var matchValue$$2 = __$$1.state;

  if (matchValue$$2.tag === 1) {
    matchValue$$2.fields[0][matchValue$$2.fields[1]] = item;
    var wix$0027 = (matchValue$$2.fields[1] + 1) % matchValue$$2.fields[0].length | 0;
    var matchValue$$3 = wix$0027 === matchValue$$2.fields[2];

    if (matchValue$$3) {
      var items$$4;
      items$$4 = RingBuffer$00601$$doubleSize(__$$1, matchValue$$2.fields[2], matchValue$$2.fields[0]);
      __$$1.state = new RingState$00601(1, "ReadWritable", items$$4, wix$0027, 0);
    } else {
      __$$1.state = new RingState$00601(1, "ReadWritable", matchValue$$2.fields[0], wix$0027, matchValue$$2.fields[2]);
    }
  } else {
    matchValue$$2.fields[0][matchValue$$2.fields[1]] = item;
    var wix$$1 = (matchValue$$2.fields[1] + 1) % matchValue$$2.fields[0].length | 0;
    __$$1.state = new RingState$00601(1, "ReadWritable", matchValue$$2.fields[0], wix$$1, matchValue$$2.fields[1]);
  }
}

function RingBuffer$00601$$doubleSize(this$, ix$$1, items$$5) {
  var source$$2 = delay(function () {
    return append((skip(ix$$1, items$$5)), delay(function () {
      return append((take(ix$$1, items$$5)), delay(function () {
        return collect(function (matchValue$$4) {
          return singleton(null);
        }, rangeNumber(0, 1, items$$5.length));
      }));
    }));
  });
  return Array_ofSeq(source$$2, Array);
}
// CONCATENATED MODULE: ./.fable/Fable.Elmish.3.0.0/program.fs









var Program$00604 = declare(function Elmish_Program(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  this.init = arg1;
  this.update = arg2;
  this.subscribe = arg3;
  this.view = arg4;
  this.setState = arg5;
  this.onError = arg6;
  this.syncDispatch = arg7;
}, Record);
function Program$00604$reflection($gen$$5, $gen$$6, $gen$$7, $gen$$8) {
  return record("Elmish.Program`4", [$gen$$5, $gen$$6, $gen$$7, $gen$$8], Program$00604, function () {
    return [["init", lambda($gen$$5, Reflection_tuple($gen$$6, list(lambda(lambda($gen$$7, unit), unit))))], ["update", lambda($gen$$7, lambda($gen$$6, Reflection_tuple($gen$$6, list(lambda(lambda($gen$$7, unit), unit)))))], ["subscribe", lambda($gen$$6, list(lambda(lambda($gen$$7, unit), unit)))], ["view", lambda($gen$$6, lambda(lambda($gen$$7, unit), $gen$$8))], ["setState", lambda($gen$$6, lambda(lambda($gen$$7, unit), unit))], ["onError", lambda(Reflection_tuple(string, type("System.Exception")), unit)], ["syncDispatch", lambda(lambda($gen$$7, unit), lambda($gen$$7, unit))]];
  });
}
function ProgramModule$$$mkProgram(init, update, view) {
  return new Program$00604(init, update, function (_arg1) {
    return Cmd$$$none();
  }, view, function setState(model, $arg$$1) {
    var value = view(model, $arg$$1);
    value, null;
  }, function (tupledArg) {
    prelude_onError(tupledArg[0], tupledArg[1]);
  }, uncurry(2, function (x) {
    return x;
  }));
}
function ProgramModule$$$mkSimple(init$$1, update$$1, view$$1) {
  return new Program$00604(function init$$2($arg$$2) {
    var state = init$$1($arg$$2);
    return [state, Cmd$$$none()];
  }, function update$$2(msg, $arg$$3) {
    var state$$1 = update$$1(msg, $arg$$3);
    return [state$$1, Cmd$$$none()];
  }, function (_arg1$$1) {
    return Cmd$$$none();
  }, view$$1, function setState$$1(model$$1, $arg$$4) {
    var value$$1 = view$$1(model$$1, $arg$$4);
    value$$1, null;
  }, function (tupledArg$$1) {
    prelude_onError(tupledArg$$1[0], tupledArg$$1[1]);
  }, uncurry(2, function (x$$1) {
    return x$$1;
  }));
}
function ProgramModule$$$withSubscription(subscribe, program) {
  return new Program$00604(program.init, program.update, function sub(model$$2) {
    return Cmd$$$batch(List_ofArray([program.subscribe(model$$2), subscribe(model$$2)]));
  }, program.view, program.setState, program.onError, program.syncDispatch);
}
function ProgramModule$$$withConsoleTrace(program$$1) {
  return new Program$00604(function traceInit(arg) {
    var patternInput = program$$1.init(arg);
    prelude_toConsole("Initial state:", patternInput[0]);
    return [patternInput[0], patternInput[1]];
  }, function traceUpdate(msg$$1, model$$3) {
    prelude_toConsole("New message:", msg$$1);
    var patternInput$$1 = program$$1.update(msg$$1, model$$3);
    prelude_toConsole("Updated state:", patternInput$$1[0]);
    return [patternInput$$1[0], patternInput$$1[1]];
  }, program$$1.subscribe, program$$1.view, program$$1.setState, program$$1.onError, program$$1.syncDispatch);
}
function ProgramModule$$$withTrace(trace, program$$2) {
  return new Program$00604(program$$2.init, function update$$3(msg$$2, model$$4) {
    trace(msg$$2, model$$4);
    return program$$2.update(msg$$2, model$$4);
  }, program$$2.subscribe, program$$2.view, program$$2.setState, program$$2.onError, program$$2.syncDispatch);
}
function ProgramModule$$$withErrorHandler(onError, program$$3) {
  return new Program$00604(program$$3.init, program$$3.update, program$$3.subscribe, program$$3.view, program$$3.setState, onError, program$$3.syncDispatch);
}
function ProgramModule$$$mapErrorHandler(map, program$$4) {
  var onError$$1 = partialApply(1, map, [program$$4.onError]);
  return new Program$00604(program$$4.init, program$$4.update, program$$4.subscribe, program$$4.view, program$$4.setState, onError$$1, program$$4.syncDispatch);
}
function ProgramModule$$$withSetState(setState$$2, program$$5) {
  return new Program$00604(program$$5.init, program$$5.update, program$$5.subscribe, program$$5.view, setState$$2, program$$5.onError, program$$5.syncDispatch);
}
function ProgramModule$$$setState(program$$6) {
  return curry(2, program$$6.setState);
}
function ProgramModule$$$view(program$$7) {
  return curry(2, program$$7.view);
}
function ProgramModule$$$withSyncDispatch(syncDispatch, program$$8) {
  return new Program$00604(program$$8.init, program$$8.update, program$$8.subscribe, program$$8.view, program$$8.setState, program$$8.onError, syncDispatch);
}
function ProgramModule$$$map(mapInit, mapUpdate, mapView, mapSetState, mapSubscribe, program$$9) {
  var init$$3 = partialApply(1, mapInit, [program$$9.init]);
  var update$$4 = partialApply(2, mapUpdate, [program$$9.update]);
  var view$$2 = partialApply(2, mapView, [program$$9.view]);
  var setState$$3 = partialApply(2, mapSetState, [program$$9.setState]);
  return new Program$00604(init$$3, uncurry(2, update$$4), partialApply(1, mapSubscribe, [program$$9.subscribe]), uncurry(2, view$$2), uncurry(2, setState$$3), program$$9.onError, uncurry(2, function (x$$2) {
    return x$$2;
  }));
}
function ProgramModule$$$runWith(arg$$1, program$$10) {
  var patternInput$$2 = program$$10.init(arg$$1);
  var rb = RingBuffer$00601$$$$002Ector$$Z524259A4(10);
  var reentered = false;
  var state$$2 = patternInput$$2[0];

  var dispatch = function dispatch(msg$$3) {
    var clo1;

    if (reentered) {
      RingBuffer$00601$$Push$$2B595(rb, msg$$3);
    } else {
      reentered = true;
      var nextMsg = some(msg$$3);

      while (nextMsg != null) {
        var msg$$4 = Option_value(nextMsg);

        try {
          var patternInput$$3 = program$$10.update(msg$$4, state$$2);
          program$$10.setState(patternInput$$3[0], syncDispatch$$1);
          Cmd$$$exec(syncDispatch$$1, patternInput$$3[1]);
          state$$2 = patternInput$$3[0];
        } catch (ex$$2) {
          program$$10.onError([(clo1 = toText(printf("Unable to process the message: %A")), clo1(msg$$4)), ex$$2]);
        }

        nextMsg = RingBuffer$00601$$Pop(rb);
      }

      reentered = false;
    }
  };

  var syncDispatch$$1 = partialApply(1, program$$10.syncDispatch, [dispatch]);
  program$$10.setState(patternInput$$2[0], syncDispatch$$1);
  var sub$$1;

  try {
    sub$$1 = program$$10.subscribe(patternInput$$2[0]);
  } catch (ex$$3) {
    program$$10.onError(["Unable to subscribe:", ex$$3]);
    sub$$1 = Cmd$$$none();
  }

  var cmd$$4 = List_append(sub$$1, patternInput$$2[1]);
  Cmd$$$exec(syncDispatch$$1, cmd$$4);
}
function ProgramModule$$$run(program$$11) {
  ProgramModule$$$runWith(null, program$$11);
}
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(90);

// CONCATENATED MODULE: ./.fable/Fable.Elmish.React.3.0.1/common.fs






var LazyProps$00601 = declare(function Elmish_React_LazyProps(arg1, arg2, arg3) {
  this.model = arg1;
  this.render = arg2;
  this.equal = arg3;
}, Record);
function LazyProps$00601$reflection($gen$$2) {
  return record("Elmish.React.LazyProps`1", [$gen$$2], LazyProps$00601, function () {
    return [["model", $gen$$2], ["render", lambda(unit, type("Fable.React.ReactElement"))], ["equal", lambda($gen$$2, lambda($gen$$2, bool))]];
  });
}
var Components$002ELazyView$00601 = declare(function Elmish_React_Components_LazyView(props) {
  var $this$$1 = this;
  react["Component"].call($this$$1, props);
}, react["Component"]);
function Components$002ELazyView$00601$reflection($gen$$3) {
  return type("Elmish.React.Components.LazyView`1", [$gen$$3]);
}
function Components$002ELazyView$00601$$$$002Ector$$Z7829D94B(props) {
  return this instanceof Components$002ELazyView$00601 ? Components$002ELazyView$00601.call(this, props) : new Components$002ELazyView$00601(props);
}

Components$002ELazyView$00601.prototype.shouldComponentUpdate = function (nextProps, _nextState) {
  var this$ = this;
  var value = this$.props.equal(this$.props.model, nextProps.model);
  return !value;
};

Components$002ELazyView$00601.prototype.render = function () {
  var this$$$1 = this;
  return this$$$1.props.render();
};

function Common$$$lazyViewWith(equal, view, state) {
  var props$$1 = new LazyProps$00601(state, function render() {
    return view(state);
  }, equal);
  var children = [];
  var comp;
  comp = Components$002ELazyView$00601;
  return react["createElement"].apply(react, [comp, props$$1].concat(children));
}
function Common$$$lazyView2With(equal$$1, view$$1, state$$1, dispatch) {
  var props$$3 = new LazyProps$00601(state$$1, function render$$1() {
    return view$$1(state$$1, dispatch);
  }, equal$$1);
  var children$$2 = [];
  var comp$$1;
  comp$$1 = Components$002ELazyView$00601;
  return react["createElement"].apply(react, [comp$$1, props$$3].concat(children$$2));
}
function Common$$$lazyView3With(equal$$2, view$$2, state1, state2, dispatch$$1) {
  var props$$5 = new LazyProps$00601([state1, state2], function render$$2() {
    return view$$2(state1, state2, dispatch$$1);
  }, equal$$2);
  var children$$4 = [];
  var comp$$2;
  comp$$2 = Components$002ELazyView$00601;
  return react["createElement"].apply(react, [comp$$2, props$$5].concat(children$$4));
}
function Common$$$lazyView(view$$3) {
  return function (state$$2) {
    return Common$$$lazyViewWith(equals, view$$3, state$$2);
  };
}
function Common$$$lazyView2(view$$4) {
  return function (state$$3) {
    return function (dispatch$$2) {
      return Common$$$lazyView2With(equals, view$$4, state$$3, dispatch$$2);
    };
  };
}
function Common$$$lazyView3(view$$5) {
  return function (state1$$1) {
    return function (state2$$1) {
      return function (dispatch$$3) {
        return Common$$$lazyView3With(equalArrays, view$$5, state1$$1, state2$$1, dispatch$$3);
      };
    };
  };
}
// CONCATENATED MODULE: ./.fable/Fable.Elmish.React.3.0.1/react.fs




function Program$002EInternal$$$withReactBatchedUsing(lazyView2With, placeholderId, program) {
  var lastRequest = null;
  return ProgramModule$$$withSetState(function setState(model, dispatch) {
    if (lastRequest != null) {
      var r = lastRequest;
      window.cancelAnimationFrame(r);
    }

    lastRequest = window.requestAnimationFrame(function (_arg1) {
      react_dom["render"](lazyView2With(function (x, y) {
        return x === y;
      }, uncurry(2, ProgramModule$$$view(program)), model, dispatch), document.getElementById(placeholderId));
    });
  }, program);
}
function Program$002EInternal$$$withReactSynchronousUsing(lazyView2With$$1, placeholderId$$1, program$$2) {
  return ProgramModule$$$withSetState(function setState$$1(model$$1, dispatch$$1) {
    react_dom["render"](lazyView2With$$1(function (x$$1, y$$1) {
      return x$$1 === y$$1;
    }, uncurry(2, ProgramModule$$$view(program$$2)), model$$1, dispatch$$1), document.getElementById(placeholderId$$1));
  }, program$$2);
}
function Program$002EInternal$$$withReactHydrateUsing(lazyView2With$$2, placeholderId$$2, program$$4) {
  return ProgramModule$$$withSetState(function setState$$2(model$$2, dispatch$$2) {
    react_dom["hydrate"](lazyView2With$$2(function (x$$2, y$$2) {
      return x$$2 === y$$2;
    }, uncurry(2, ProgramModule$$$view(program$$4)), model$$2, dispatch$$2), document.getElementById(placeholderId$$2));
  }, program$$4);
}
function Program$$$withReactBatched(placeholderId$$3, program$$6) {
  return Program$002EInternal$$$withReactBatchedUsing(Common$$$lazyView2With, placeholderId$$3, program$$6);
}
function Program$$$withReactSynchronous(placeholderId$$4, program$$7) {
  return Program$002EInternal$$$withReactSynchronousUsing(Common$$$lazyView2With, placeholderId$$4, program$$7);
}
function Program$$$withReact(placeholderId$$5, program$$8) {
  return Program$002EInternal$$$withReactBatchedUsing(Common$$$lazyView2With, placeholderId$$5, program$$8);
}
function Program$$$withReactUnoptimized(placeholderId$$6, program$$9) {
  return Program$002EInternal$$$withReactSynchronousUsing(Common$$$lazyView2With, placeholderId$$6, program$$9);
}
function Program$$$withReactHydrate(placeholderId$$7, program$$10) {
  return Program$002EInternal$$$withReactHydrateUsing(Common$$$lazyView2With, placeholderId$$7, program$$10);
}
// CONCATENATED MODULE: ./src/App.fs













function App_toConsumableArray(arr) { return App_arrayWithoutHoles(arr) || App_iterableToArray(arr) || App_nonIterableSpread(); }

function App_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function App_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function App_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
















var sample = "{\r\n    \"book\" : \"Genesis\",\r\n    \"chapters\" : {\r\n        \"chapter\" : \"1\",\r\n        \"verses\" : {\r\n            \"verse\" : \"1\",\r\n            \"text\" : \"In the beginning God created the heaven and the earth.\",\r\n        },\r\n    },\r\n}";
var Model = declare(function App_Model(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12) {
  this.NightMode = arg1;
  this.MenuTog = arg2;
  this.LensOpt = arg3;
  this.PendingX = arg4;
  this.StartX = arg5 | 0;
  this.StartY = arg6 | 0;
  this.EndX = arg7 | 0;
  this.EndY = arg8 | 0;
  this.Translation = arg9;
  this.Book = arg10;
  this.Chapter = arg11 | 0;
  this.Verses = arg12;
}, Record);
function Model$reflection() {
  return record("App.Model", [], Model, function () {
    return [["NightMode", bool], ["MenuTog", bool], ["LensOpt", Reflection_option(Lenses$reflection())], ["PendingX", float64], ["StartX", int32], ["StartY", int32], ["EndX", int32], ["EndY", int32], ["Translation", Translation$reflection()], ["Book", BookOrderMax$reflection()], ["Chapter", int32], ["Verses", list(int32)]];
  });
}
function App_init(something) {
  return [new Model(true, false, null, 0, 0, 0, 0, 0, new Translation(0, "KJV1611"), GenOrderMax, 1, new List()), new List()];
}
function App_update(msg, model) {
  var LensOpt, LensOpt$$1, StartX, StartY, EndX, EndY;
  var swipe = model.StartX > model.EndX ? model.StartX - model.EndX > 70 ? model.StartY - model.EndY < 30 ? new Effect(0, "Passthru", new Msg(10, "NextChapter", model.Chapter)) : new Effect(1, "DoNothing") : new Effect(1, "DoNothing") : model.EndX - model.StartX > 70 ? model.StartY - model.EndY < 30 ? new Effect(0, "Passthru", new Msg(11, "PreviousChapter", model.Chapter)) : new Effect(1, "DoNothing") : new Effect(1, "DoNothing");

  switch (msg.tag) {
    case 0:
      {
        return [new Model(msg.fields[0], false, model.LensOpt, model.PendingX, model.StartX, model.StartY, model.EndX, model.EndY, model.Translation, model.Book, model.Chapter, model.Verses), new List()];
      }

    case 2:
      {
        return [(LensOpt = null, new Model(model.NightMode, model.MenuTog, LensOpt, model.PendingX, model.StartX, model.StartY, model.EndX, model.EndY, model.Translation, model.Book, model.Chapter, model.Verses)), new List()];
      }

    case 3:
      {
        return [(LensOpt$$1 = msg.fields[0], new Model(model.NightMode, false, LensOpt$$1, model.PendingX, model.StartX, model.StartY, model.EndX, model.EndY, model.Translation, model.Book, model.Chapter, model.Verses)), new List()];
      }

    case 4:
      {
        return [(StartX = ~~msg.fields[0].clientX | 0, (StartY = ~~msg.fields[0].clientY | 0, new Model(model.NightMode, model.MenuTog, model.LensOpt, model.PendingX, StartX, StartY, model.EndX, model.EndY, model.Translation, model.Book, model.Chapter, model.Verses))), new List()];
      }

    case 5:
      {
        return [(EndX = ~~msg.fields[0].clientX | 0, (EndY = ~~msg.fields[0].clientY | 0, new Model(model.NightMode, model.MenuTog, model.LensOpt, model.PendingX, model.StartX, model.StartY, EndX, EndY, model.Translation, model.Book, model.Chapter, model.Verses))), new List(new Effect(0, "Passthru", new Msg(6, "Swipe")), new List())];
      }

    case 6:
      {
        return [model, new List(swipe, new List())];
      }

    case 7:
      {
        return [new Model(model.NightMode, false, model.LensOpt, model.PendingX, model.StartX, model.StartY, model.EndX, model.EndY, msg.fields[0], model.Book, model.Chapter, model.Verses), new List()];
      }

    case 8:
      {
        return [new Model(model.NightMode, model.MenuTog, model.LensOpt, model.PendingX, model.StartX, model.StartY, model.EndX, model.EndY, model.Translation, msg.fields[0], 1, model.Verses), new List()];
      }

    case 9:
      {
        return [new Model(model.NightMode, model.MenuTog, model.LensOpt, model.PendingX, model.StartX, model.StartY, model.EndX, model.EndY, model.Translation, model.Book, msg.fields[0], model.Verses), new List()];
      }

    case 10:
      {
        var nextChapt = (msg.fields[0] + 1 > model.Book.MaxChapters ? msg.fields[0] : msg.fields[0] + 1) | 0;
        var whatBook = model.Book.Order + 1 === 67 ? model.Book : BibleOrderMax[model.Book.Order + 1];
        var nextBook = msg.fields[0] + 1 > model.Book.MaxChapters ? new Effect(0, "Passthru", new Msg(8, "ChangeBook", whatBook)) : new Effect(1, "DoNothing");
        return [new Model(model.NightMode, model.MenuTog, model.LensOpt, model.PendingX, 0, 0, 0, 0, model.Translation, model.Book, nextChapt, model.Verses), new List(nextBook, new List())];
      }

    case 11:
      {
        var prevChapt = (msg.fields[0] - 1 === 0 ? msg.fields[0] : msg.fields[0] - 1) | 0;
        var whatBook$$1 = model.Book.Order - 1 === 0 ? model.Book : BibleOrderMax[model.Book.Order - 1];
        var prevBook = msg.fields[0] - 1 === 0 ? new Effect(0, "Passthru", new Msg(8, "ChangeBook", whatBook$$1)) : new Effect(1, "DoNothing");
        return [new Model(model.NightMode, model.MenuTog, model.LensOpt, model.PendingX, 0, 0, 0, 0, model.Translation, model.Book, prevChapt, model.Verses), new List(prevBook, new List())];
      }

    default:
      {
        return [new Model(model.NightMode, msg.fields[0], model.LensOpt, model.PendingX, model.StartX, model.StartY, model.EndX, model.EndY, model.Translation, model.Book, model.Chapter, model.Verses), new List()];
      }
  }
}
function addressMenu(model$$1, dispatch) {
  var props$$114, children$$114, props$$112, children$$112, props$$24, children$$24, props$$22, children$$22, props$$12, children$$12, props$$10, children$$10, props$$8, children$$8, props$$2, children$$2, s$$1, clo1$$1, props$$6, children$$6, props$$4, children$$4, props$$20, children$$20, props$$18, children$$18, props$$14, children$$14, props$$16, children$$16, props$$56, children$$56, props$$54, children$$54, props$$36, children$$36, props$$34, children$$34, props$$32, children$$32, props$$26, children$$26, s$$4, clo1$$2, props$$30, children$$30, props$$28, children$$28, props$$52, children$$52, props$$50, children$$50, props$$48, children$$48, props$$46, children$$46, props$$44, children$$44, props$$42, children$$42, props$$40, children$$40, props$$38, children$$38, props$$110, children$$110, props$$108, children$$108, props$$68, children$$68, props$$66, children$$66, props$$64, children$$64, props$$58, children$$58, props$$62, children$$62, props$$60, children$$60, props$$106, children$$106, props$$104, children$$104, props$$102, children$$102, props$$72, children$$72, props$$70, children$$70, props$$76, children$$76, props$$74, children$$74, props$$80, children$$80, props$$78, children$$78, props$$84, children$$84, props$$82, children$$82, props$$88, children$$88, props$$86, children$$86, props$$92, children$$92, props$$90, children$$90, props$$96, children$$96, props$$94, children$$94, props$$100, children$$100, props$$98, children$$98, props$$190, children$$190, props$$140, children$$140, props$$138, children$$138, props$$136, children$$136, props$$126, children$$126, props$$124, children$$124, props$$122, children$$122, props$$116, children$$116, s$$14, clo1$$3, props$$120, children$$120, props$$118, children$$118, props$$134, children$$134, props$$132, children$$132, props$$128, children$$128, props$$130, children$$130, props$$188, children$$188, props$$162, children$$162, props$$160, children$$160, props$$152, children$$152, props$$150, children$$150, props$$148, children$$148, props$$142, children$$142, s$$17, clo1$$4, props$$146, children$$146, props$$144, children$$144, props$$158, children$$158, props$$156, children$$156, props$$154, children$$154, props$$186, children$$186, props$$184, children$$184, props$$174, children$$174, props$$172, children$$172, props$$170, children$$170, props$$164, children$$164, props$$168, children$$168, props$$166, children$$166, props$$182, children$$182, props$$180, children$$180, props$$176, children$$176, props$$178, children$$178;

  var chapterDropDownItem = function chapterDropDownItem(x) {
    var s, clo1;
    var props = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag"), new DOMAttr(40, "OnClick", function (_arg1) {
      dispatch(new Msg(9, "ChangeChapter", x));
    })];
    var children = [(s = (clo1 = toText(printf("%i")), clo1(x)), s)];
    return react["createElement"].apply(react, ["span", createObj(props, 1)].concat(children));
  };

  var props$$192 = [];
  var children$$192 = [(props$$114 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "hide-mobile")], (children$$114 = [(props$$112 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "columns is-gapless")], (children$$112 = [(props$$24 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column")], (children$$24 = [(props$$22 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown is-hoverable")], (children$$22 = [(props$$12 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-trigger")], (children$$12 = [(props$$10 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", ""), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(11, "aria-haspopup", true), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(9, "aria-controls", "dropdown-menu4")], (children$$10 = [(props$$8 = [], (children$$8 = [(props$$2 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "title is-1")], (children$$2 = [(s$$1 = (clo1$$1 = toText(printf("%A")), clo1$$1(model$$1.Book.Title)), s$$1)], react["createElement"].apply(react, ["span", createObj(props$$2, 1)].concat(App_toConsumableArray(children$$2))))), (props$$6 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "icon has-text-grey-light")], (children$$6 = [(props$$4 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "fas fa-angle-down"), new HTMLAttr(3, "aria-hidden", "true")], (children$$4 = [], react["createElement"].apply(react, ["i", createObj(props$$4, 1)].concat(App_toConsumableArray(children$$4)))))], react["createElement"].apply(react, ["span", createObj(props$$6, 1)].concat(App_toConsumableArray(children$$6)))))], react["createElement"].apply(react, ["span", createObj(props$$8, 1)].concat(App_toConsumableArray(children$$8)))))], react["createElement"].apply(react, ["div", createObj(props$$10, 1)].concat(App_toConsumableArray(children$$10)))))], react["createElement"].apply(react, ["div", createObj(props$$12, 1)].concat(App_toConsumableArray(children$$12))))), (props$$20 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-menu"), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(59, "Id", "dropdown-menu4"), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(95, "Role", "menu")], (children$$20 = [(props$$18 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-content")], (children$$18 = [(props$$14 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-item"), new DOMAttr(40, "OnClick", function (_arg2) {
    dispatch(new Msg(8, "ChangeBook", GenOrderMax));
  })], (children$$14 = ["Genesis"], react["createElement"].apply(react, ["a", createObj(props$$14, 1)].concat(App_toConsumableArray(children$$14))))), (props$$16 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-item"), new DOMAttr(40, "OnClick", function (_arg3) {
    dispatch(new Msg(8, "ChangeBook", ExodOrderMax));
  })], (children$$16 = ["Exodus"], react["createElement"].apply(react, ["a", createObj(props$$16, 1)].concat(App_toConsumableArray(children$$16)))))], react["createElement"].apply(react, ["div", createObj(props$$18, 1)].concat(App_toConsumableArray(children$$18)))))], react["createElement"].apply(react, ["div", createObj(props$$20, 1)].concat(App_toConsumableArray(children$$20)))))], react["createElement"].apply(react, ["div", createObj(props$$22, 1)].concat(App_toConsumableArray(children$$22)))))], react["createElement"].apply(react, ["span", createObj(props$$24, 1)].concat(App_toConsumableArray(children$$24))))), (props$$56 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column has-text-centered has-text-bottom")], (children$$56 = [(props$$54 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown is-hoverable")], (children$$54 = [(props$$36 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-trigger")], (children$$36 = [(props$$34 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", ""), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(11, "aria-haspopup", true), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(9, "aria-controls", "dropdown-menu4")], (children$$34 = [(props$$32 = [], (children$$32 = [(props$$26 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "title is-3")], (children$$26 = [(s$$4 = (clo1$$2 = toText(printf("Chapter %i")), clo1$$2(model$$1.Chapter)), s$$4)], react["createElement"].apply(react, ["span", createObj(props$$26, 1)].concat(App_toConsumableArray(children$$26))))), (props$$30 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "icon has-text-grey-light")], (children$$30 = [(props$$28 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "fas fa-angle-down"), new HTMLAttr(3, "aria-hidden", "true")], (children$$28 = [], react["createElement"].apply(react, ["i", createObj(props$$28, 1)].concat(App_toConsumableArray(children$$28)))))], react["createElement"].apply(react, ["span", createObj(props$$30, 1)].concat(App_toConsumableArray(children$$30)))))], react["createElement"].apply(react, ["span", createObj(props$$32, 1)].concat(App_toConsumableArray(children$$32)))))], react["createElement"].apply(react, ["div", createObj(props$$34, 1)].concat(App_toConsumableArray(children$$34)))))], react["createElement"].apply(react, ["div", createObj(props$$36, 1)].concat(App_toConsumableArray(children$$36))))), (props$$52 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-menu"), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(59, "Id", "dropdown-menu4"), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(95, "Role", "menu")], (children$$52 = [(props$$50 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-content")], (children$$50 = [(props$$48 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tile is-parent")], (children$$48 = [(props$$46 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tile is-child")], (children$$46 = [(props$$44 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content")], (children$$44 = [(props$$42 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "columns")], (children$$42 = [(props$$40 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column is-full")], (children$$40 = [(props$$38 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tags are-medium")], (children$$38 = List_map(chapterDropDownItem, List_ofSeq(rangeNumber(1, 1, model$$1.Book.MaxChapters))), react["createElement"].apply(react, ["div", createObj(props$$38, 1)].concat(App_toConsumableArray(children$$38)))))], react["createElement"].apply(react, ["div", createObj(props$$40, 1)].concat(App_toConsumableArray(children$$40)))))], react["createElement"].apply(react, ["div", createObj(props$$42, 1)].concat(App_toConsumableArray(children$$42)))))], react["createElement"].apply(react, ["div", createObj(props$$44, 1)].concat(App_toConsumableArray(children$$44)))))], react["createElement"].apply(react, ["div", createObj(props$$46, 1)].concat(App_toConsumableArray(children$$46)))))], react["createElement"].apply(react, ["div", createObj(props$$48, 1)].concat(App_toConsumableArray(children$$48)))))], react["createElement"].apply(react, ["div", createObj(props$$50, 1)].concat(App_toConsumableArray(children$$50)))))], react["createElement"].apply(react, ["div", createObj(props$$52, 1)].concat(App_toConsumableArray(children$$52)))))], react["createElement"].apply(react, ["div", createObj(props$$54, 1)].concat(App_toConsumableArray(children$$54)))))], react["createElement"].apply(react, ["span", createObj(props$$56, 1)].concat(App_toConsumableArray(children$$56))))), (props$$110 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column has-text-right has-text-bottom")], (children$$110 = [(props$$108 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown is-hoverable is-right")], (children$$108 = [(props$$68 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-trigger")], (children$$68 = [(props$$66 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", ""), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(11, "aria-haspopup", true), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(9, "aria-controls", "dropdown-menu4")], (children$$66 = [(props$$64 = [], (children$$64 = [(props$$58 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "title is-6")], (children$$58 = ["verses [all]"], react["createElement"].apply(react, ["span", createObj(props$$58, 1)].concat(App_toConsumableArray(children$$58))))), (props$$62 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "icon has-text-grey-light")], (children$$62 = [(props$$60 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "fas fa-angle-down"), new HTMLAttr(3, "aria-hidden", "true")], (children$$60 = [], react["createElement"].apply(react, ["i", createObj(props$$60, 1)].concat(App_toConsumableArray(children$$60)))))], react["createElement"].apply(react, ["span", createObj(props$$62, 1)].concat(App_toConsumableArray(children$$62)))))], react["createElement"].apply(react, ["span", createObj(props$$64, 1)].concat(App_toConsumableArray(children$$64)))))], react["createElement"].apply(react, ["div", createObj(props$$66, 1)].concat(App_toConsumableArray(children$$66)))))], react["createElement"].apply(react, ["div", createObj(props$$68, 1)].concat(App_toConsumableArray(children$$68))))), (props$$106 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-menu"), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(59, "Id", "dropdown-menu4"), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(95, "Role", "menu")], (children$$106 = [(props$$104 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-content")], (children$$104 = [(props$$102 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "columns")], (children$$102 = [(props$$72 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column is-1")], (children$$72 = [(props$$70 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-item")], (children$$70 = ["1"], react["createElement"].apply(react, ["a", createObj(props$$70, 1)].concat(App_toConsumableArray(children$$70)))))], react["createElement"].apply(react, ["div", createObj(props$$72, 1)].concat(App_toConsumableArray(children$$72))))), (props$$76 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column is-1")], (children$$76 = [(props$$74 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-item")], (children$$74 = ["1"], react["createElement"].apply(react, ["a", createObj(props$$74, 1)].concat(App_toConsumableArray(children$$74)))))], react["createElement"].apply(react, ["div", createObj(props$$76, 1)].concat(App_toConsumableArray(children$$76))))), (props$$80 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column is-1")], (children$$80 = [(props$$78 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-item")], (children$$78 = ["1"], react["createElement"].apply(react, ["a", createObj(props$$78, 1)].concat(App_toConsumableArray(children$$78)))))], react["createElement"].apply(react, ["div", createObj(props$$80, 1)].concat(App_toConsumableArray(children$$80))))), (props$$84 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column is-1")], (children$$84 = [(props$$82 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-item")], (children$$82 = ["1"], react["createElement"].apply(react, ["a", createObj(props$$82, 1)].concat(App_toConsumableArray(children$$82)))))], react["createElement"].apply(react, ["div", createObj(props$$84, 1)].concat(App_toConsumableArray(children$$84))))), (props$$88 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column is-1")], (children$$88 = [(props$$86 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-item")], (children$$86 = ["1"], react["createElement"].apply(react, ["a", createObj(props$$86, 1)].concat(App_toConsumableArray(children$$86)))))], react["createElement"].apply(react, ["div", createObj(props$$88, 1)].concat(App_toConsumableArray(children$$88))))), (props$$92 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column is-1")], (children$$92 = [(props$$90 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-item")], (children$$90 = ["1"], react["createElement"].apply(react, ["a", createObj(props$$90, 1)].concat(App_toConsumableArray(children$$90)))))], react["createElement"].apply(react, ["div", createObj(props$$92, 1)].concat(App_toConsumableArray(children$$92))))), (props$$96 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column is-1")], (children$$96 = [(props$$94 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-item")], (children$$94 = ["1"], react["createElement"].apply(react, ["a", createObj(props$$94, 1)].concat(App_toConsumableArray(children$$94)))))], react["createElement"].apply(react, ["div", createObj(props$$96, 1)].concat(App_toConsumableArray(children$$96))))), (props$$100 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column is-1")], (children$$100 = [(props$$98 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-item")], (children$$98 = ["1"], react["createElement"].apply(react, ["a", createObj(props$$98, 1)].concat(App_toConsumableArray(children$$98)))))], react["createElement"].apply(react, ["div", createObj(props$$100, 1)].concat(App_toConsumableArray(children$$100)))))], react["createElement"].apply(react, ["div", createObj(props$$102, 1)].concat(App_toConsumableArray(children$$102)))))], react["createElement"].apply(react, ["div", createObj(props$$104, 1)].concat(App_toConsumableArray(children$$104)))))], react["createElement"].apply(react, ["div", createObj(props$$106, 1)].concat(App_toConsumableArray(children$$106)))))], react["createElement"].apply(react, ["div", createObj(props$$108, 1)].concat(App_toConsumableArray(children$$108)))))], react["createElement"].apply(react, ["span", createObj(props$$110, 1)].concat(App_toConsumableArray(children$$110)))))], react["createElement"].apply(react, ["span", createObj(props$$112, 1)].concat(App_toConsumableArray(children$$112)))))], react["createElement"].apply(react, ["span", createObj(props$$114, 1)].concat(App_toConsumableArray(children$$114))))), (props$$190 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "show-mobile")], (children$$190 = [(props$$140 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "columns")], (children$$140 = [(props$$138 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column")], (children$$138 = [(props$$136 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown is-hoverable")], (children$$136 = [(props$$126 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-trigger")], (children$$126 = [(props$$124 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", ""), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(11, "aria-haspopup", true), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(9, "aria-controls", "dropdown-menu4")], (children$$124 = [(props$$122 = [], (children$$122 = [(props$$116 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "title is-2")], (children$$116 = [(s$$14 = (clo1$$3 = toText(printf("%A")), clo1$$3(model$$1.Book.Title)), s$$14)], react["createElement"].apply(react, ["span", createObj(props$$116, 1)].concat(App_toConsumableArray(children$$116))))), (props$$120 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "icon has-text-grey-light")], (children$$120 = [(props$$118 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "fas fa-angle-down"), new HTMLAttr(3, "aria-hidden", "true")], (children$$118 = [], react["createElement"].apply(react, ["i", createObj(props$$118, 1)].concat(App_toConsumableArray(children$$118)))))], react["createElement"].apply(react, ["span", createObj(props$$120, 1)].concat(App_toConsumableArray(children$$120)))))], react["createElement"].apply(react, ["span", createObj(props$$122, 1)].concat(App_toConsumableArray(children$$122)))))], react["createElement"].apply(react, ["div", createObj(props$$124, 1)].concat(App_toConsumableArray(children$$124)))))], react["createElement"].apply(react, ["div", createObj(props$$126, 1)].concat(App_toConsumableArray(children$$126))))), (props$$134 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-menu"), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(59, "Id", "dropdown-menu4"), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(95, "Role", "menu")], (children$$134 = [(props$$132 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-content")], (children$$132 = [(props$$128 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-item"), new DOMAttr(40, "OnClick", function (_arg4) {
    dispatch(new Msg(8, "ChangeBook", GenOrderMax));
  })], (children$$128 = ["Genesis"], react["createElement"].apply(react, ["a", createObj(props$$128, 1)].concat(App_toConsumableArray(children$$128))))), (props$$130 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-item"), new DOMAttr(40, "OnClick", function (_arg5) {
    dispatch(new Msg(8, "ChangeBook", ExodOrderMax));
  })], (children$$130 = ["Exodus"], react["createElement"].apply(react, ["a", createObj(props$$130, 1)].concat(App_toConsumableArray(children$$130)))))], react["createElement"].apply(react, ["div", createObj(props$$132, 1)].concat(App_toConsumableArray(children$$132)))))], react["createElement"].apply(react, ["div", createObj(props$$134, 1)].concat(App_toConsumableArray(children$$134)))))], react["createElement"].apply(react, ["div", createObj(props$$136, 1)].concat(App_toConsumableArray(children$$136)))))], react["createElement"].apply(react, ["div", createObj(props$$138, 1)].concat(App_toConsumableArray(children$$138)))))], react["createElement"].apply(react, ["div", createObj(props$$140, 1)].concat(App_toConsumableArray(children$$140))))), (props$$188 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "columns is-mobile is-gapless")], (children$$188 = [(props$$162 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column has-text-bottom")], (children$$162 = [(props$$160 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown is-hoverable")], (children$$160 = [(props$$152 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-trigger")], (children$$152 = [(props$$150 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", ""), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(11, "aria-haspopup", true), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(9, "aria-controls", "dropdown-menu4")], (children$$150 = [(props$$148 = [], (children$$148 = [(props$$142 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "title is-3")], (children$$142 = [(s$$17 = (clo1$$4 = toText(printf("%i")), clo1$$4(model$$1.Chapter)), s$$17)], react["createElement"].apply(react, ["span", createObj(props$$142, 1)].concat(App_toConsumableArray(children$$142))))), (props$$146 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "icon has-text-grey-light")], (children$$146 = [(props$$144 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "fas fa-angle-down"), new HTMLAttr(3, "aria-hidden", "true")], (children$$144 = [], react["createElement"].apply(react, ["i", createObj(props$$144, 1)].concat(App_toConsumableArray(children$$144)))))], react["createElement"].apply(react, ["span", createObj(props$$146, 1)].concat(App_toConsumableArray(children$$146)))))], react["createElement"].apply(react, ["span", createObj(props$$148, 1)].concat(App_toConsumableArray(children$$148)))))], react["createElement"].apply(react, ["div", createObj(props$$150, 1)].concat(App_toConsumableArray(children$$150)))))], react["createElement"].apply(react, ["div", createObj(props$$152, 1)].concat(App_toConsumableArray(children$$152))))), (props$$158 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-menu"), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(59, "Id", "dropdown-menu4"), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(95, "Role", "menu")], (children$$158 = [(props$$156 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-content")], (children$$156 = [(props$$154 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tags are-medium")], (children$$154 = List_map(chapterDropDownItem, List_ofSeq(rangeNumber(1, 1, model$$1.Book.MaxChapters))), react["createElement"].apply(react, ["div", createObj(props$$154, 1)].concat(App_toConsumableArray(children$$154)))))], react["createElement"].apply(react, ["div", createObj(props$$156, 1)].concat(App_toConsumableArray(children$$156)))))], react["createElement"].apply(react, ["div", createObj(props$$158, 1)].concat(App_toConsumableArray(children$$158)))))], react["createElement"].apply(react, ["div", createObj(props$$160, 1)].concat(App_toConsumableArray(children$$160)))))], react["createElement"].apply(react, ["div", createObj(props$$162, 1)].concat(App_toConsumableArray(children$$162))))), (props$$186 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column has-text-bottom")], (children$$186 = [(props$$184 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown is-hoverable is-right")], (children$$184 = [(props$$174 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-trigger")], (children$$174 = [(props$$172 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", ""), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(11, "aria-haspopup", true), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(9, "aria-controls", "dropdown-menu4")], (children$$172 = [(props$$170 = [], (children$$170 = [(props$$164 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "title is-6")], (children$$164 = ["verses [all]"], react["createElement"].apply(react, ["span", createObj(props$$164, 1)].concat(App_toConsumableArray(children$$164))))), (props$$168 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "icon has-text-grey-light")], (children$$168 = [(props$$166 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "fas fa-angle-down"), new HTMLAttr(3, "aria-hidden", "true")], (children$$166 = [], react["createElement"].apply(react, ["i", createObj(props$$166, 1)].concat(App_toConsumableArray(children$$166)))))], react["createElement"].apply(react, ["span", createObj(props$$168, 1)].concat(App_toConsumableArray(children$$168)))))], react["createElement"].apply(react, ["span", createObj(props$$170, 1)].concat(App_toConsumableArray(children$$170)))))], react["createElement"].apply(react, ["div", createObj(props$$172, 1)].concat(App_toConsumableArray(children$$172)))))], react["createElement"].apply(react, ["div", createObj(props$$174, 1)].concat(App_toConsumableArray(children$$174))))), (props$$182 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-menu"), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(59, "Id", "dropdown-menu4"), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(95, "Role", "menu")], (children$$182 = [(props$$180 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-content")], (children$$180 = [(props$$176 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-item")], (children$$176 = ["1"], react["createElement"].apply(react, ["a", createObj(props$$176, 1)].concat(App_toConsumableArray(children$$176))))), (props$$178 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "dropdown-item")], (children$$178 = ["2"], react["createElement"].apply(react, ["a", createObj(props$$178, 1)].concat(App_toConsumableArray(children$$178)))))], react["createElement"].apply(react, ["div", createObj(props$$180, 1)].concat(App_toConsumableArray(children$$180)))))], react["createElement"].apply(react, ["div", createObj(props$$182, 1)].concat(App_toConsumableArray(children$$182)))))], react["createElement"].apply(react, ["div", createObj(props$$184, 1)].concat(App_toConsumableArray(children$$184)))))], react["createElement"].apply(react, ["div", createObj(props$$186, 1)].concat(App_toConsumableArray(children$$186)))))], react["createElement"].apply(react, ["div", createObj(props$$188, 1)].concat(App_toConsumableArray(children$$188)))))], react["createElement"].apply(react, ["span", createObj(props$$190, 1)].concat(App_toConsumableArray(children$$190)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$192, 1)].concat(children$$192));
}
function App_view(model$$2, dispatch$$1) {
  var props$$276, children$$274, props$$274, children$$272, props$$206, children$$204, props$$196, children$$194, props$$194, props$$204, children$$202, props$$198, children$$196, props$$200, children$$198, props$$202, children$$200, props$$272, children$$270, props$$270, children$$268, props$$234, children$$232, props$$214, children$$212, props$$210, children$$208, props$$208, children$$206, props$$212, children$$210, props$$232, children$$230, props$$218, children$$216, props$$216, children$$214, props$$222, children$$220, props$$220, children$$218, props$$226, children$$224, props$$224, children$$222, props$$230, children$$228, props$$228, children$$226, props$$254, children$$252, props$$242, children$$240, props$$238, children$$236, props$$236, children$$234, props$$240, children$$238, props$$252, children$$250, props$$250, children$$248, props$$246, children$$244, props$$244, children$$242, props$$248, children$$246, props$$268, children$$266, props$$280, children$$276, props$$278, props$$450, children$$440, props$$448, children$$438, props$$446, children$$436, props$$444, children$$434, props$$318, children$$308, props$$316, children$$306, props$$282, props$$284, children$$278, props$$286, children$$280, props$$288, props$$312, children$$304, props$$310, children$$302, props$$308, children$$300, props$$306, children$$298, props$$296, children$$288, props$$292, children$$284, props$$290, children$$282, props$$294, children$$286, props$$304, children$$296, props$$298, children$$290, props$$302, children$$294, props$$300, children$$292, props$$314, props$$442, children$$432, props$$440, children$$430, props$$438, children$$428, props$$436, children$$426, props$$328, children$$318, props$$322, children$$312, props$$320, children$$310, props$$326, children$$316, props$$324, children$$314, props$$362, children$$352, props$$360, children$$350, props$$332, children$$322, props$$330, children$$320, props$$358, children$$348, props$$356, children$$346, props$$334, children$$324, props$$336, children$$326, props$$338, children$$328, props$$340, children$$330, props$$342, children$$332, props$$344, children$$334, props$$346, children$$336, props$$348, children$$338, props$$350, children$$340, props$$352, children$$342, props$$354, children$$344, props$$386, children$$376, props$$384, children$$374, props$$366, children$$356, props$$364, children$$354, props$$382, children$$372, props$$380, children$$370, props$$368, children$$358, props$$370, children$$360, props$$372, children$$362, props$$374, children$$364, props$$376, children$$366, props$$378, children$$368, props$$402, children$$392, props$$400, children$$390, props$$390, children$$380, props$$388, children$$378, props$$398, children$$388, props$$396, children$$386, props$$392, children$$382, props$$394, children$$384, props$$418, children$$408, props$$416, children$$406, props$$406, children$$396, props$$404, children$$394, props$$414, children$$404, props$$412, children$$402, props$$408, children$$398, props$$410, children$$400, props$$434, children$$424, props$$432, children$$422, props$$422, children$$412, props$$420, children$$410, props$$430, children$$420, props$$428, children$$418, props$$424, children$$414, props$$426, children$$416;

  var boolOpposite = function boolOpposite(bool$$2) {
    if (bool$$2) {
      return false;
    } else {
      return true;
    }
  };

  var props$$452 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "has-navbar-fixed-bottom")];
  var children$$442 = [(props$$276 = [], (children$$274 = [(props$$274 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "navbar mainColor"), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(95, "Role", "navigation"), new HTMLAttr(1, "aria-label", "main navigation")], (children$$272 = [(props$$206 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "navbar-brand")], (children$$204 = [(props$$196 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "navbar-item")], (children$$194 = [(props$$194 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(109, "Src", "WTMBLogo.png")], react["createElement"].apply(react, ["img", createObj(props$$194, 1)].concat([])))], react["createElement"].apply(react, ["a", createObj(props$$196, 1)].concat(App_toConsumableArray(children$$194))))), (props$$204 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(95, "Role", "button"), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "navbar-burger burger " + (model$$2.MenuTog === true ? "is-active" : "")), new HTMLAttr(1, "aria-label", "menu"), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(10, "aria-expanded", false), new HTMLAttr(0, "data-target", "navbarMain"), new DOMAttr(40, "OnClick", function (_arg1$$1) {
    dispatch$$1(new Msg(1, "MenuToggle", boolOpposite(model$$2.MenuTog)));
  })], (children$$202 = [(props$$198 = [new HTMLAttr(3, "aria-hidden", "true")], (children$$196 = [], react["createElement"].apply(react, ["span", createObj(props$$198, 1)].concat(App_toConsumableArray(children$$196))))), (props$$200 = [new HTMLAttr(3, "aria-hidden", "true")], (children$$198 = [], react["createElement"].apply(react, ["span", createObj(props$$200, 1)].concat(App_toConsumableArray(children$$198))))), (props$$202 = [new HTMLAttr(3, "aria-hidden", "true")], (children$$200 = [], react["createElement"].apply(react, ["span", createObj(props$$202, 1)].concat(App_toConsumableArray(children$$200)))))], react["createElement"].apply(react, ["a", createObj(props$$204, 1)].concat(App_toConsumableArray(children$$202)))))], react["createElement"].apply(react, ["div", createObj(props$$206, 1)].concat(App_toConsumableArray(children$$204))))), (props$$272 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(59, "Id", "navbarMain"), new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "navbar-menu " + (model$$2.MenuTog === true ? "is-active" : ""))], (children$$270 = [(props$$270 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "navbar-end")], (children$$268 = [(props$$234 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "navbar-item has-dropdown is-hoverable")], (children$$232 = [(props$$214 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "navbar-link")], (children$$212 = [(props$$210 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "icon")], (children$$208 = [(props$$208 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "fas fa-book")], (children$$206 = [], react["createElement"].apply(react, ["i", createObj(props$$208, 1)].concat(App_toConsumableArray(children$$206)))))], react["createElement"].apply(react, ["span", createObj(props$$210, 1)].concat(App_toConsumableArray(children$$208))))), (props$$212 = [], (children$$210 = ["Translations"], react["createElement"].apply(react, ["span", createObj(props$$212, 1)].concat(App_toConsumableArray(children$$210)))))], react["createElement"].apply(react, ["a", createObj(props$$214, 1)].concat(App_toConsumableArray(children$$212))))), (props$$232 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "navbar-dropdown")], (children$$230 = [model$$2.Translation.tag === 0 ? (props$$218 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "navbar-item has-background-primary"), new DOMAttr(40, "OnClick", function (_arg2$$1) {
    dispatch$$1(new Msg(7, "ChangeTranslation", new Translation(0, "KJV1611")));
  })], (children$$216 = [(props$$216 = [], (children$$214 = ["KJV 1611"], react["createElement"].apply(react, ["span", createObj(props$$216, 1)].concat(App_toConsumableArray(children$$214)))))], react["createElement"].apply(react, ["a", createObj(props$$218, 1)].concat(App_toConsumableArray(children$$216))))) : (props$$222 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "navbar-item"), new DOMAttr(40, "OnClick", function (_arg3$$1) {
    dispatch$$1(new Msg(7, "ChangeTranslation", new Translation(0, "KJV1611")));
  })], (children$$220 = [(props$$220 = [], (children$$218 = ["KJV 1611"], react["createElement"].apply(react, ["span", createObj(props$$220, 1)].concat(App_toConsumableArray(children$$218)))))], react["createElement"].apply(react, ["a", createObj(props$$222, 1)].concat(App_toConsumableArray(children$$220))))), model$$2.Translation.tag === 1 ? (props$$226 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "navbar-item has-background-primary"), new DOMAttr(40, "OnClick", function (_arg4$$1) {
    dispatch$$1(new Msg(7, "ChangeTranslation", new Translation(1, "KJV")));
  })], (children$$224 = [(props$$224 = [], (children$$222 = ["KJV"], react["createElement"].apply(react, ["span", createObj(props$$224, 1)].concat(App_toConsumableArray(children$$222)))))], react["createElement"].apply(react, ["a", createObj(props$$226, 1)].concat(App_toConsumableArray(children$$224))))) : (props$$230 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "navbar-item"), new DOMAttr(40, "OnClick", function (_arg5$$1) {
    dispatch$$1(new Msg(7, "ChangeTranslation", new Translation(1, "KJV")));
  })], (children$$228 = [(props$$228 = [], (children$$226 = ["KJV"], react["createElement"].apply(react, ["span", createObj(props$$228, 1)].concat(App_toConsumableArray(children$$226)))))], react["createElement"].apply(react, ["a", createObj(props$$230, 1)].concat(App_toConsumableArray(children$$228)))))], react["createElement"].apply(react, ["div", createObj(props$$232, 1)].concat(App_toConsumableArray(children$$230)))))], react["createElement"].apply(react, ["div", createObj(props$$234, 1)].concat(App_toConsumableArray(children$$232))))), (props$$254 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "navbar-item has-dropdown is-hoverable")], (children$$252 = [(props$$242 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "navbar-link")], (children$$240 = [(props$$238 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "icon")], (children$$236 = [(props$$236 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "fas fa-microscope")], (children$$234 = [], react["createElement"].apply(react, ["i", createObj(props$$236, 1)].concat(App_toConsumableArray(children$$234)))))], react["createElement"].apply(react, ["span", createObj(props$$238, 1)].concat(App_toConsumableArray(children$$236))))), (props$$240 = [], (children$$238 = ["Lenses"], react["createElement"].apply(react, ["span", createObj(props$$240, 1)].concat(App_toConsumableArray(children$$238)))))], react["createElement"].apply(react, ["a", createObj(props$$242, 1)].concat(App_toConsumableArray(children$$240))))), (props$$252 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "navbar-dropdown")], (children$$250 = [(props$$250 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "navbar-item"), new DOMAttr(40, "OnClick", function (_arg6) {
    dispatch$$1(new Msg(3, "Lens", new Lenses(0, "CrossReferencesLens")));
  })], (children$$248 = [(props$$246 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "icon")], (children$$244 = [(props$$244 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "fas fa-level-down-alt")], (children$$242 = [], react["createElement"].apply(react, ["i", createObj(props$$244, 1)].concat(App_toConsumableArray(children$$242)))))], react["createElement"].apply(react, ["span", createObj(props$$246, 1)].concat(App_toConsumableArray(children$$244))))), (props$$248 = [], (children$$246 = ["Cross References"], react["createElement"].apply(react, ["span", createObj(props$$248, 1)].concat(App_toConsumableArray(children$$246)))))], react["createElement"].apply(react, ["a", createObj(props$$250, 1)].concat(App_toConsumableArray(children$$248)))))], react["createElement"].apply(react, ["div", createObj(props$$252, 1)].concat(App_toConsumableArray(children$$250)))))], react["createElement"].apply(react, ["div", createObj(props$$254, 1)].concat(App_toConsumableArray(children$$252))))), (props$$268 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "navbar-item"), new DOMAttr(40, "OnClick", function (_arg7) {
    dispatch$$1(new Msg(0, "NightTog", boolOpposite(model$$2.NightMode)));
  })], (children$$266 = List_ofSeq(delay(function () {
    var props$$258, children$$256, props$$256, children$$254, props$$264, children$$262, props$$262, children$$260;
    return model$$2.NightMode ? append(singleton((props$$258 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "icon")], (children$$256 = [(props$$256 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "fas fa-sun")], (children$$254 = [], react["createElement"].apply(react, ["i", createObj(props$$256, 1)].concat(App_toConsumableArray(children$$254)))))], react["createElement"].apply(react, ["span", createObj(props$$258, 1)].concat(App_toConsumableArray(children$$256)))))), delay(function () {
      var props$$260, children$$258;
      return singleton((props$$260 = [], (children$$258 = ["Day Mode"], react["createElement"].apply(react, ["span", createObj(props$$260, 1)].concat(App_toConsumableArray(children$$258))))));
    })) : append(singleton((props$$264 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "icon")], (children$$262 = [(props$$262 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "fas fa-moon")], (children$$260 = [], react["createElement"].apply(react, ["i", createObj(props$$262, 1)].concat(App_toConsumableArray(children$$260)))))], react["createElement"].apply(react, ["span", createObj(props$$264, 1)].concat(App_toConsumableArray(children$$262)))))), delay(function () {
      var props$$266, children$$264;
      return singleton((props$$266 = [], (children$$264 = ["Night Mode"], react["createElement"].apply(react, ["span", createObj(props$$266, 1)].concat(App_toConsumableArray(children$$264))))));
    }));
  })), react["createElement"].apply(react, ["a", createObj(props$$268, 1)].concat(App_toConsumableArray(children$$266)))))], react["createElement"].apply(react, ["div", createObj(props$$270, 1)].concat(App_toConsumableArray(children$$268)))))], react["createElement"].apply(react, ["div", createObj(props$$272, 1)].concat(App_toConsumableArray(children$$270)))))], react["createElement"].apply(react, ["nav", createObj(props$$274, 1)].concat(App_toConsumableArray(children$$272)))))], react["createElement"].apply(react, ["div", createObj(props$$276, 1)].concat(App_toConsumableArray(children$$274))))), (props$$280 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "container is-fluid" + (model$$2.NightMode === true ? " nightMode" : ""))], (children$$276 = [(props$$278 = [], react["createElement"].apply(react, ["br", createObj(props$$278, 1)].concat([])))], react["createElement"].apply(react, ["div", createObj(props$$280, 1)].concat(App_toConsumableArray(children$$276))))), (props$$450 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "container is-fluid" + (model$$2.NightMode === true ? " nightMode" : ""))], (children$$440 = [(props$$448 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "container")], (children$$438 = [(props$$446 = [], (children$$436 = [(props$$444 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tile is-ancestor")], (children$$434 = [(props$$318 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tile is-vertical " + (equals(model$$2.LensOpt, null) ? "is-12" : "is-6"))], (children$$308 = [(props$$316 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content is-medium")], (children$$306 = [addressMenu(model$$2, dispatch$$1), (props$$282 = [], react["createElement"].apply(react, ["br", createObj(props$$282, 1)].concat([]))), (props$$284 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "")], (children$$278 = [Test_view], react["createElement"].apply(react, ["div", createObj(props$$284, 1)].concat(App_toConsumableArray(children$$278))))), (props$$286 = [new DOMAttr(62, "OnTouchStart", function (e) {
    dispatch$$1(new Msg(4, "TouchStartX", e.changedTouches[0]));
  }), new DOMAttr(60, "OnTouchEnd", function (e$$1) {
    dispatch$$1(new Msg(5, "TouchEndX", e$$1.changedTouches[0]));
  })], (children$$280 = [model$$2.Translation.tag === 1 ? books(model$$2.Book.Title, model$$2.Chapter) : TableOfContents_books(model$$2.Book.Title, model$$2.Chapter)], react["createElement"].apply(react, ["div", createObj(props$$286, 1)].concat(App_toConsumableArray(children$$280))))), (props$$288 = [], react["createElement"].apply(react, ["br", createObj(props$$288, 1)].concat([]))), (props$$312 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "navbar is-fixed-bottom is-mobile is-transparent nightMode")], (children$$304 = [(props$$310 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "navbar-end")], (children$$302 = [(props$$308 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "navbar-item")], (children$$300 = [(props$$306 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "buttons is-centered")], (children$$298 = [(props$$296 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "button is-small is-primary"), new DOMAttr(40, "OnClick", function (_arg8) {
    dispatch$$1(new Msg(11, "PreviousChapter", model$$2.Chapter));
  }), model$$2.Chapter > 1 ? new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(39, "Disabled", false) : new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(39, "Disabled", true)], (children$$288 = [(props$$292 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "icon is-small has-text-grey-light")], (children$$284 = [(props$$290 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "fas fa-chevron-left")], (children$$282 = [], react["createElement"].apply(react, ["i", createObj(props$$290, 1)].concat(App_toConsumableArray(children$$282)))))], react["createElement"].apply(react, ["span", createObj(props$$292, 1)].concat(App_toConsumableArray(children$$284))))), (props$$294 = [], (children$$286 = ["Previous Chapter"], react["createElement"].apply(react, ["span", createObj(props$$294, 1)].concat(App_toConsumableArray(children$$286)))))], react["createElement"].apply(react, ["button", createObj(props$$296, 1)].concat(App_toConsumableArray(children$$288))))), (props$$304 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "button is-right is-small is-primary"), new DOMAttr(40, "OnClick", function (_arg9) {
    dispatch$$1(new Msg(10, "NextChapter", model$$2.Chapter));
  })], (children$$296 = [(props$$298 = [], (children$$290 = ["Next Chapter"], react["createElement"].apply(react, ["span", createObj(props$$298, 1)].concat(App_toConsumableArray(children$$290))))), (props$$302 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "icon is-small has-text-grey-light")], (children$$294 = [(props$$300 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "fas fa-chevron-right")], (children$$292 = [], react["createElement"].apply(react, ["i", createObj(props$$300, 1)].concat(App_toConsumableArray(children$$292)))))], react["createElement"].apply(react, ["span", createObj(props$$302, 1)].concat(App_toConsumableArray(children$$294)))))], react["createElement"].apply(react, ["button", createObj(props$$304, 1)].concat(App_toConsumableArray(children$$296)))))], react["createElement"].apply(react, ["span", createObj(props$$306, 1)].concat(App_toConsumableArray(children$$298)))))], react["createElement"].apply(react, ["div", createObj(props$$308, 1)].concat(App_toConsumableArray(children$$300)))))], react["createElement"].apply(react, ["span", createObj(props$$310, 1)].concat(App_toConsumableArray(children$$302)))))], react["createElement"].apply(react, ["div", createObj(props$$312, 1)].concat(App_toConsumableArray(children$$304))))), (props$$314 = [], react["createElement"].apply(react, ["br", createObj(props$$314, 1)].concat([])))], react["createElement"].apply(react, ["div", createObj(props$$316, 1)].concat(App_toConsumableArray(children$$306)))))], react["createElement"].apply(react, ["div", createObj(props$$318, 1)].concat(App_toConsumableArray(children$$308))))), model$$2.LensOpt == null ? (props$$442 = [], (children$$432 = [], react["createElement"].apply(react, ["div", createObj(props$$442, 1)].concat(App_toConsumableArray(children$$432))))) : (props$$440 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tile is-parent")], (children$$430 = [(props$$438 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tile is-child notification mainColor")], (children$$428 = [(props$$436 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content")], (children$$426 = [(props$$328 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "level is-mobile")], (children$$318 = [(props$$322 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "level-left")], (children$$312 = [(props$$320 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "title")], (children$$310 = ["Cross References"], react["createElement"].apply(react, ["p", createObj(props$$320, 1)].concat(App_toConsumableArray(children$$310)))))], react["createElement"].apply(react, ["div", createObj(props$$322, 1)].concat(App_toConsumableArray(children$$312))))), (props$$326 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "level-right")], (children$$316 = [(props$$324 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "delete"), new DOMAttr(40, "OnClick", function (_arg10) {
    dispatch$$1(new Msg(2, "CloseLenses"));
  })], (children$$314 = [], react["createElement"].apply(react, ["button", createObj(props$$324, 1)].concat(App_toConsumableArray(children$$314)))))], react["createElement"].apply(react, ["div", createObj(props$$326, 1)].concat(App_toConsumableArray(children$$316)))))], react["createElement"].apply(react, ["div", createObj(props$$328, 1)].concat(App_toConsumableArray(children$$318))))), (props$$362 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content")], (children$$352 = [(props$$360 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "columns")], (children$$350 = [(props$$332 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column is-one-fifth")], (children$$322 = [(props$$330 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "subtitle")], (children$$320 = ["Gen 1:1"], react["createElement"].apply(react, ["p", createObj(props$$330, 1)].concat(App_toConsumableArray(children$$320)))))], react["createElement"].apply(react, ["div", createObj(props$$332, 1)].concat(App_toConsumableArray(children$$322))))), (props$$358 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column")], (children$$348 = [(props$$356 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tags")], (children$$346 = [(props$$334 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag is-link")], (children$$324 = ["Ps 102:25"], react["createElement"].apply(react, ["span", createObj(props$$334, 1)].concat(App_toConsumableArray(children$$324))))), (props$$336 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag is-link")], (children$$326 = ["Is 40:21"], react["createElement"].apply(react, ["span", createObj(props$$336, 1)].concat(App_toConsumableArray(children$$326))))), (props$$338 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag is-link")], (children$$328 = ["John 1:1"], react["createElement"].apply(react, ["span", createObj(props$$338, 1)].concat(App_toConsumableArray(children$$328))))), (props$$340 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag is-link")], (children$$330 = ["Heb 1:10"], react["createElement"].apply(react, ["span", createObj(props$$340, 1)].concat(App_toConsumableArray(children$$330))))), (props$$342 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag is-link")], (children$$332 = ["Ps 89:11"], react["createElement"].apply(react, ["span", createObj(props$$342, 1)].concat(App_toConsumableArray(children$$332))))), (props$$344 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag is-link")], (children$$334 = ["Acts 17:24"], react["createElement"].apply(react, ["span", createObj(props$$344, 1)].concat(App_toConsumableArray(children$$334))))), (props$$346 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag is-link")], (children$$336 = ["Rom 1:20"], react["createElement"].apply(react, ["span", createObj(props$$346, 1)].concat(App_toConsumableArray(children$$336))))), (props$$348 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag is-link")], (children$$338 = ["Heb 11:3"], react["createElement"].apply(react, ["span", createObj(props$$348, 1)].concat(App_toConsumableArray(children$$338))))), (props$$350 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag is-link")], (children$$340 = ["Job 38:4"], react["createElement"].apply(react, ["span", createObj(props$$350, 1)].concat(App_toConsumableArray(children$$340))))), (props$$352 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag is-link")], (children$$342 = ["Is 42:5"], react["createElement"].apply(react, ["span", createObj(props$$352, 1)].concat(App_toConsumableArray(children$$342))))), (props$$354 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag is-link")], (children$$344 = ["Rev 4:11"], react["createElement"].apply(react, ["span", createObj(props$$354, 1)].concat(App_toConsumableArray(children$$344)))))], react["createElement"].apply(react, ["div", createObj(props$$356, 1)].concat(App_toConsumableArray(children$$346)))))], react["createElement"].apply(react, ["div", createObj(props$$358, 1)].concat(App_toConsumableArray(children$$348)))))], react["createElement"].apply(react, ["div", createObj(props$$360, 1)].concat(App_toConsumableArray(children$$350)))))], react["createElement"].apply(react, ["div", createObj(props$$362, 1)].concat(App_toConsumableArray(children$$352))))), (props$$386 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content")], (children$$376 = [(props$$384 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "columns")], (children$$374 = [(props$$366 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column is-one-fifth")], (children$$356 = [(props$$364 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "subtitle")], (children$$354 = ["Gen 1:2"], react["createElement"].apply(react, ["p", createObj(props$$364, 1)].concat(App_toConsumableArray(children$$354)))))], react["createElement"].apply(react, ["div", createObj(props$$366, 1)].concat(App_toConsumableArray(children$$356))))), (props$$382 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column")], (children$$372 = [(props$$380 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tags")], (children$$370 = [(props$$368 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag is-link")], (children$$358 = ["Jer 4:23"], react["createElement"].apply(react, ["span", createObj(props$$368, 1)].concat(App_toConsumableArray(children$$358))))), (props$$370 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag is-link")], (children$$360 = ["Job 38:9"], react["createElement"].apply(react, ["span", createObj(props$$370, 1)].concat(App_toConsumableArray(children$$360))))), (props$$372 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag is-link")], (children$$362 = ["Ps 104:30"], react["createElement"].apply(react, ["span", createObj(props$$372, 1)].concat(App_toConsumableArray(children$$362))))), (props$$374 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag is-link")], (children$$364 = ["Is 40:13"], react["createElement"].apply(react, ["span", createObj(props$$374, 1)].concat(App_toConsumableArray(children$$364))))), (props$$376 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag is-link")], (children$$366 = ["Duet 32:11"], react["createElement"].apply(react, ["span", createObj(props$$376, 1)].concat(App_toConsumableArray(children$$366))))), (props$$378 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag is-link")], (children$$368 = ["Is 31:5"], react["createElement"].apply(react, ["span", createObj(props$$378, 1)].concat(App_toConsumableArray(children$$368)))))], react["createElement"].apply(react, ["div", createObj(props$$380, 1)].concat(App_toConsumableArray(children$$370)))))], react["createElement"].apply(react, ["div", createObj(props$$382, 1)].concat(App_toConsumableArray(children$$372)))))], react["createElement"].apply(react, ["div", createObj(props$$384, 1)].concat(App_toConsumableArray(children$$374)))))], react["createElement"].apply(react, ["div", createObj(props$$386, 1)].concat(App_toConsumableArray(children$$376))))), (props$$402 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content")], (children$$392 = [(props$$400 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "columns")], (children$$390 = [(props$$390 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column is-one-fifth")], (children$$380 = [(props$$388 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "subtitle")], (children$$378 = ["Gen 1:3"], react["createElement"].apply(react, ["p", createObj(props$$388, 1)].concat(App_toConsumableArray(children$$378)))))], react["createElement"].apply(react, ["div", createObj(props$$390, 1)].concat(App_toConsumableArray(children$$380))))), (props$$398 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column")], (children$$388 = [(props$$396 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tags")], (children$$386 = [(props$$392 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag is-link")], (children$$382 = ["Ps 33:6"], react["createElement"].apply(react, ["span", createObj(props$$392, 1)].concat(App_toConsumableArray(children$$382))))), (props$$394 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag is-link")], (children$$384 = ["2 Cor 4:6"], react["createElement"].apply(react, ["span", createObj(props$$394, 1)].concat(App_toConsumableArray(children$$384)))))], react["createElement"].apply(react, ["div", createObj(props$$396, 1)].concat(App_toConsumableArray(children$$386)))))], react["createElement"].apply(react, ["div", createObj(props$$398, 1)].concat(App_toConsumableArray(children$$388)))))], react["createElement"].apply(react, ["div", createObj(props$$400, 1)].concat(App_toConsumableArray(children$$390)))))], react["createElement"].apply(react, ["div", createObj(props$$402, 1)].concat(App_toConsumableArray(children$$392))))), (props$$418 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content")], (children$$408 = [(props$$416 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "columns")], (children$$406 = [(props$$406 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column is-one-fifth")], (children$$396 = [(props$$404 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "subtitle")], (children$$394 = ["Gen 1:4"], react["createElement"].apply(react, ["p", createObj(props$$404, 1)].concat(App_toConsumableArray(children$$394)))))], react["createElement"].apply(react, ["div", createObj(props$$406, 1)].concat(App_toConsumableArray(children$$396))))), (props$$414 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column")], (children$$404 = [(props$$412 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tags")], (children$$402 = [(props$$408 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag is-link")], (children$$398 = ["Ps 145:9"], react["createElement"].apply(react, ["span", createObj(props$$408, 1)].concat(App_toConsumableArray(children$$398))))), (props$$410 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag is-link")], (children$$400 = ["Is 45:7"], react["createElement"].apply(react, ["span", createObj(props$$410, 1)].concat(App_toConsumableArray(children$$400)))))], react["createElement"].apply(react, ["div", createObj(props$$412, 1)].concat(App_toConsumableArray(children$$402)))))], react["createElement"].apply(react, ["div", createObj(props$$414, 1)].concat(App_toConsumableArray(children$$404)))))], react["createElement"].apply(react, ["div", createObj(props$$416, 1)].concat(App_toConsumableArray(children$$406)))))], react["createElement"].apply(react, ["div", createObj(props$$418, 1)].concat(App_toConsumableArray(children$$408))))), (props$$434 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "content")], (children$$424 = [(props$$432 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "columns")], (children$$422 = [(props$$422 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column is-one-fifth")], (children$$412 = [(props$$420 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "subtitle")], (children$$410 = ["Gen 1:5"], react["createElement"].apply(react, ["p", createObj(props$$420, 1)].concat(App_toConsumableArray(children$$410)))))], react["createElement"].apply(react, ["div", createObj(props$$422, 1)].concat(App_toConsumableArray(children$$412))))), (props$$430 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "column")], (children$$420 = [(props$$428 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tags")], (children$$418 = [(props$$424 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag is-link")], (children$$414 = ["Ps 74:16"], react["createElement"].apply(react, ["span", createObj(props$$424, 1)].concat(App_toConsumableArray(children$$414))))), (props$$426 = [new Fable_React_5_1_0_Fable_React_Props_HTMLAttr(25, "className", "tag is-link")], (children$$416 = ["Ps 65:8"], react["createElement"].apply(react, ["span", createObj(props$$426, 1)].concat(App_toConsumableArray(children$$416)))))], react["createElement"].apply(react, ["div", createObj(props$$428, 1)].concat(App_toConsumableArray(children$$418)))))], react["createElement"].apply(react, ["div", createObj(props$$430, 1)].concat(App_toConsumableArray(children$$420)))))], react["createElement"].apply(react, ["div", createObj(props$$432, 1)].concat(App_toConsumableArray(children$$422)))))], react["createElement"].apply(react, ["div", createObj(props$$434, 1)].concat(App_toConsumableArray(children$$424)))))], react["createElement"].apply(react, ["div", createObj(props$$436, 1)].concat(App_toConsumableArray(children$$426)))))], react["createElement"].apply(react, ["div", createObj(props$$438, 1)].concat(App_toConsumableArray(children$$428)))))], react["createElement"].apply(react, ["div", createObj(props$$440, 1)].concat(App_toConsumableArray(children$$430)))))], react["createElement"].apply(react, ["div", createObj(props$$444, 1)].concat(App_toConsumableArray(children$$434)))))], react["createElement"].apply(react, ["div", createObj(props$$446, 1)].concat(App_toConsumableArray(children$$436)))))], react["createElement"].apply(react, ["div", createObj(props$$448, 1)].concat(App_toConsumableArray(children$$438)))))], react["createElement"].apply(react, ["div", createObj(props$$450, 1)].concat(App_toConsumableArray(children$$440)))))];
  return react["createElement"].apply(react, ["div", createObj(props$$452, 1)].concat(children$$442));
}
function perform(model$$3, effect, dispatch$$2) {
  if (effect.tag === 1) {} else {
    dispatch$$2(effect.fields[0]);
  }
}
function nUpdate(msg$$2, model$$4) {
  var patternInput = App_update(msg$$2, model$$4);
  return [patternInput[0], (List_map(function mapping(effect$$1) {
    return function (dispatch$$3) {
      perform(patternInput[0], effect$$1, dispatch$$3);
    };
  }, patternInput[1]))];
}

(function () {
  var program$$2;
  var program$$1;
  var program = ProgramModule$$$mkProgram(function () {
    return App_init();
  }, nUpdate, App_view);
  program$$1 = Program$$$withReactSynchronous("elmish-app", program);
  program$$2 = ProgramModule$$$withConsoleTrace(program$$1);
  ProgramModule$$$run(program$$2);
})();
// CONCATENATED MODULE: ./src/App.fsproj
/* concated harmony reexport sample */__webpack_require__.d(__webpack_exports__, "sample", function() { return sample; });
/* concated harmony reexport Model */__webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* concated harmony reexport Model$reflection */__webpack_require__.d(__webpack_exports__, "Model$reflection", function() { return Model$reflection; });
/* concated harmony reexport init */__webpack_require__.d(__webpack_exports__, "init", function() { return App_init; });
/* concated harmony reexport update */__webpack_require__.d(__webpack_exports__, "update", function() { return App_update; });
/* concated harmony reexport addressMenu */__webpack_require__.d(__webpack_exports__, "addressMenu", function() { return addressMenu; });
/* concated harmony reexport view */__webpack_require__.d(__webpack_exports__, "view", function() { return App_view; });
/* concated harmony reexport perform */__webpack_require__.d(__webpack_exports__, "perform", function() { return perform; });
/* concated harmony reexport nUpdate */__webpack_require__.d(__webpack_exports__, "nUpdate", function() { return nUpdate; });


/***/ })

/******/ });
//# sourceMappingURL=app.6635f4304f13611408d9.js.map