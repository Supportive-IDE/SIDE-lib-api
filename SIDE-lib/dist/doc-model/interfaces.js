"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeChangeObserverNotifier = exports.SymptomMonitor = void 0;

var _symptom = require("../problem-finder/symptom.js");

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _rules = /*#__PURE__*/new WeakMap();

/**
 * Should be inherited by anything that can have a symptom (expressions, statements, functions etc).
 * Should not be instantiated directly.
 * @abstract
 */
var SymptomMonitor = /*#__PURE__*/function () {
  function SymptomMonitor() {
    _classCallCheck(this, SymptomMonitor);

    _classPrivateFieldInitSpec(this, _rules, {
      writable: true,
      value: []
    });
  }

  _createClass(SymptomMonitor, [{
    key: "checkRules",
    value:
    /**
     * Runs each symptom rule function, if applicable. Any symptoms found should be added to the SymptomFinder
     */
    function checkRules(obj) {
      var _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(this, _rules)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _SymptomFinder$sympto;

          var rule = _step.value;

          (_SymptomFinder$sympto = _symptom.SymptomFinder.symptoms).push.apply(_SymptomFinder$sympto, _toConsumableArray(rule(obj)));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * Adds a rule function to the this object.
     * @param {Function: Symptom[]} ruleFunc A function that returns an array of Symptom objects
     */

  }, {
    key: "addRule",
    value: function addRule(ruleFunc) {
      _classPrivateFieldGet(this, _rules).push(ruleFunc);
    }
    /**
     * Adds multiple rule functions to this object.
     * @param {Array<Function: Symptom[]>} rules An array of functions, each of which returns an array of Symptom objects
     */

  }, {
    key: "addRules",
    value: function addRules(rules) {
      var _classPrivateFieldGet2;

      (_classPrivateFieldGet2 = _classPrivateFieldGet(this, _rules)).push.apply(_classPrivateFieldGet2, _toConsumableArray(rules));
    }
  }]);

  return SymptomMonitor;
}();
/**
 * A class to implement an observer-notifier for data type updates.
 */


exports.SymptomMonitor = SymptomMonitor;

var TypeChangeObserverNotifier = /*#__PURE__*/function (_SymptomMonitor) {
  _inherits(TypeChangeObserverNotifier, _SymptomMonitor);

  var _super = _createSuper(TypeChangeObserverNotifier);

  // WEIRD ERROR: This variable was originally private, but the debugger seems to crash if there is a private attribute with type Set() or Map()
  function TypeChangeObserverNotifier() {
    var _this;

    _classCallCheck(this, TypeChangeObserverNotifier);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "observers", void 0);

    _this.observers = new Set();
    return _this;
  }
  /**
   * Adds an observer to this object's list of observers.
   * @param {TypeChangeObserverNotifier} observer An observer of this object
   * @param {DataType} dataType The DataType of the observer
   */


  _createClass(TypeChangeObserverNotifier, [{
    key: "addObserver",
    value: function addObserver(observer) {
      var dataType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      this.observers.add(observer);

      if (observer instanceof TypeChangeObserverNotifier) {
        if (dataType !== undefined) observer.typeUpdateReceived(dataType);
      }
    }
  }, {
    key: "getObservers",
    value: function getObservers() {
      return this.observers;
    }
    /**
     * Removes the observer if found.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
     * @param {TypeChangeObserverNotifier} observer 
     */

  }, {
    key: "removeObserver",
    value: function removeObserver(observer) {
      this.observers["delete"](observer);
    }
    /**
     * Notify all observers of this object's DataType
     * @param {DataType} dataType The new DataType of this object
     */

  }, {
    key: "sendUpdate",
    value: function sendUpdate(dataType) {
      var _iterator2 = _createForOfIteratorHelper(this.observers),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var obs = _step2.value;

          if (obs instanceof TypeChangeObserverNotifier) {
            obs.typeUpdateReceived(dataType);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    /**
     * Handles a DataType update notification from an object this object is observing.
     * @param {DataType} dataType The new DataType of the object sending the update.
     * @abstract
     */

  }, {
    key: "typeUpdateReceived",
    value: function typeUpdateReceived(dataType) {// To be implemented in child classes
    }
  }]);

  return TypeChangeObserverNotifier;
}(SymptomMonitor);

exports.TypeChangeObserverNotifier = TypeChangeObserverNotifier;