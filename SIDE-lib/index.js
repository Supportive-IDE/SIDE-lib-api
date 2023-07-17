(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VariableExpression = exports.UserDefinedMethodCall = exports.UserDefinedFunctionExpression = exports.UserDefinedFunctionCall = exports.TernaryExpression = exports.SubscriptedElement = exports.StringLiteralExpression = exports.SliceElement = exports.ReturnStatement = exports.PropertyCallNode = exports.NumberLiteral = exports.MultiPartExpressionNode = exports.ModulePropertyExpression = exports.ModuleExpression = exports.ListComprehensionExpression = exports.LambdaExpression = exports.KeywordStatement = exports.KeywordOrOperatorExpression = exports.IteratorExpression = exports.IndexKeyElement = exports.ImportStatement = exports.GroupElement = exports.FunctionNode = exports.FunctionDefinitionStatement = exports.FStringExpression = exports.ExpressionNode = exports.ExceptionCall = exports.CompoundTypeExpression = exports.ComparisonExpression = exports.CombinedStringLiteral = exports.ChangeExpression = exports.CalculatedExpression = exports.BuiltInMethodCall = exports.BuiltInFunctionExpression = exports.BuiltInFunctionCall = exports.BooleanExpression = exports.BlockDefinitionStatement = exports.AssignmentExpression = void 0;
exports.expressionFactory = expressionFactory;

var _interfaces = require("./interfaces.js");

var _enums = require("./enums.js");

var _utils = require("../utils/utils.js");

var _rawtextprocessing = require("./rawtextprocessing.js");

var _symptom = require("../problem-finder/symptom.js");

var _constants = require("../utils/constants.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

/**
 * Factory function to create an Expression. 
 * @param {String} textValue The text value of the node
 * @param {ExpressionInfo} expressionInfo The ExpressionEntity and ExpressionCategory of the node
 * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
 * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
 * @param {Number} indexOnLine
 * @param {Number} documentEndIndex Optional. The index of the last characters of the expression in the raw text of the document
 * @param {Number} endLineNumber Optional. The zero-indexed document line number that the expression ends on. Same as start line by default.
 */
function expressionFactory(textValue, expressionInfo, startLineNumber, documentStartIndex, indexOnLine) {
  var documentEndIndex = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : documentStartIndex + textValue.length;
  var endLineNumber = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : startLineNumber;

  switch (expressionInfo.entity) {
    case _enums.ExpressionEntity.ExceptionName:
      return new ExceptionExpression(textValue, expressionInfo.entity, expressionInfo.category, startLineNumber, documentStartIndex, indexOnLine);

    case _enums.ExpressionEntity.VariableName:
      return new VariableExpression(textValue, expressionInfo.entity, expressionInfo.category, startLineNumber, documentStartIndex, indexOnLine);

    case _enums.ExpressionEntity.FunctionName:
    case _enums.ExpressionEntity.MethodName:
      return new UserDefinedFunctionExpression(textValue, expressionInfo.entity, expressionInfo.category, startLineNumber, documentStartIndex, indexOnLine);

    case _enums.ExpressionEntity.ClassName:
      return new UserDefinedClassExpression(textValue, expressionInfo.entity, expressionInfo.category, startLineNumber, documentStartIndex, indexOnLine);

    case _enums.ExpressionEntity.PropertyName:
      return new ModulePropertyExpression(textValue, expressionInfo.entity, expressionInfo.category, startLineNumber, documentStartIndex, indexOnLine);

    case _enums.ExpressionEntity.ModuleName:
      return new ModuleExpression(textValue, expressionInfo.entity, expressionInfo.category, startLineNumber, documentStartIndex, indexOnLine);

    case _enums.ExpressionEntity.StringLiteral:
      return new StringLiteralExpression(textValue, startLineNumber, documentStartIndex, indexOnLine, documentEndIndex, endLineNumber);

    case _enums.ExpressionEntity.TrueType:
    case _enums.ExpressionEntity.FalseType:
    case _enums.ExpressionEntity.NoneType:
      return new TypeValueExpression(textValue, expressionInfo.entity, expressionInfo.category, startLineNumber, documentStartIndex, indexOnLine);

    case _enums.ExpressionEntity.ListDefinition:
    case _enums.ExpressionEntity.TupleDefinition:
    case _enums.ExpressionEntity.SetDefinition:
    case _enums.ExpressionEntity.DictDefinition:
      // Compound types node with data type set in the class
      return new CompoundTypeExpression(textValue, [], expressionInfo.entity, []);

    case _enums.ExpressionEntity.IndexKey:
      return new IndexKeyElement(textValue, []);

    case _enums.ExpressionEntity.Slice:
      return new SliceElement(textValue, [], []);

    case _enums.ExpressionEntity.NamedImport:
      return new ModulePropertyExpression(textValue, expressionInfo.entity, expressionInfo.category, startLineNumber, documentStartIndex, indexOnLine);

    default:
      break;
  } // Categories - BuiltInFunctions, BuiltInModules, Types, CompoundTypes, keywords and operators


  switch (expressionInfo.category) {
    case _enums.ExpressionCategory.BuiltInFunctions:
    case _enums.ExpressionCategory.BuiltInMethods:
    case _enums.ExpressionCategory.ModuleFunctions:
    case _enums.ExpressionCategory.MagicMethods:
      return new BuiltInFunctionExpression(textValue, expressionInfo.entity, expressionInfo.category, startLineNumber, documentStartIndex, indexOnLine);

    case _enums.ExpressionCategory.BuiltInModules:
      return new ModuleExpression(textValue, expressionInfo.entity, expressionInfo.category, startLineNumber, documentStartIndex, indexOnLine);

    case _enums.ExpressionCategory.Types:
      return new BuiltInTypeExpression(textValue, expressionInfo.entity, expressionInfo.category, startLineNumber, documentStartIndex, indexOnLine);

    case _enums.ExpressionCategory.SpecialVariables:
      return new VariableExpression(textValue, expressionInfo.entity, expressionInfo.category, startLineNumber, documentStartIndex, indexOnLine);

    case _enums.ExpressionCategory.ModuleProperties:
      return new ModulePropertyExpression(textValue, expressionInfo.entity, expressionInfo.category, startLineNumber, documentStartIndex, indexOnLine);

    case _enums.ExpressionCategory.LogicalOperators:
    case _enums.ExpressionCategory.MathsOperators:
    case _enums.ExpressionCategory.ComparisonOperators:
    case _enums.ExpressionCategory.OtherKeywords:
    case _enums.ExpressionCategory.BlockDefinitions:
    case _enums.ExpressionCategory.Other:
    case _enums.ExpressionCategory.TypeHint:
      return new KeywordOrOperatorExpression(textValue, expressionInfo.entity, expressionInfo.category, startLineNumber, documentStartIndex, indexOnLine);

    default:
      return new ExpressionNode(textValue, expressionInfo.entity, expressionInfo.category, startLineNumber, documentStartIndex, indexOnLine, _enums.DataType.Unknown);
  }
}
/**
 * A class representing a single expression e.g. a literal, an operator, or a variable.
 * This class should not be directly instantiated. Use subclasses instead.
 * @abstract
 * @extends TypeChangeObserverNotifier
 */


var _textValue = /*#__PURE__*/new WeakMap();

var _entity = /*#__PURE__*/new WeakMap();

var _category = /*#__PURE__*/new WeakMap();

var _parent = /*#__PURE__*/new WeakMap();

var _startLineNumber = /*#__PURE__*/new WeakMap();

var _endLineNumber = /*#__PURE__*/new WeakMap();

var _documentStartIndex = /*#__PURE__*/new WeakMap();

var _indexOnLine = /*#__PURE__*/new WeakMap();

var _documentEndIndex = /*#__PURE__*/new WeakMap();

var _dataType = /*#__PURE__*/new WeakMap();

var _blockId = /*#__PURE__*/new WeakMap();

var _scopeId = /*#__PURE__*/new WeakMap();

var ExpressionNode = /*#__PURE__*/function (_TypeChangeObserverNo) {
  _inherits(ExpressionNode, _TypeChangeObserverNo);

  var _super = _createSuper(ExpressionNode);

  /** @type {String} */
  // The raw text of the node

  /** @type {ExpressionEntity} */

  /** @type {ExpressionCategory} */

  /** @type {ExpressionNode} */

  /** @type {Number} */
  // The zero-indexed document line number that the expression starts on

  /** @type {Number} */
  // The zero-indexed document line number that the expression ends on

  /** @type {Number} */
  // The index of the first character in #textValue in the raw document string

  /** @type {Number} */

  /** @type {Number} */
  // The index of the last character (inclusive) in #textValue in the raw document string

  /** @type {DataType} */
  // The DataType of this individual expression

  /** @type {String} */

  /** @type {String} */

  /**
   * Creates an ExpressionNode
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine The index of the first character of the expression in the raw text of the line (based on line breaks)
   * @param {DataType} dataType Optional. The data type of the individual expression. NotParsed by default.
   * @param {Number} documentEndIndex Optional. The index of the last characters of the expression in the raw text of the document
   * @param {Number} endLineNumber Optional. The zero-indexed document line number that the expression ends on. Same as start line by default.
   */
  function ExpressionNode(textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine) {
    var _this;

    var dataType = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : _enums.DataType.NotParsed;
    var documentEndIndex = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : documentStartIndex + textValue.length - 1;
    var endLineNumber = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : startLineNumber;

    _classCallCheck(this, ExpressionNode);

    _this = _super.call(this);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _textValue, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _entity, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _category, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _parent, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _startLineNumber, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _endLineNumber, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _documentStartIndex, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _indexOnLine, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _documentEndIndex, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _dataType, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _blockId, {
      writable: true,
      value: "unknown"
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _scopeId, {
      writable: true,
      value: "unknown"
    });

    if (documentEndIndex < documentStartIndex) {
      throw new Error("Could not create expression: end index cannot be less than start index");
    }

    _classPrivateFieldSet(_assertThisInitialized(_this), _textValue, textValue);

    _classPrivateFieldSet(_assertThisInitialized(_this), _entity, entity); // ADD TO ALL CHILDREN, CREATE GETTERS


    _classPrivateFieldSet(_assertThisInitialized(_this), _category, category);

    _classPrivateFieldSet(_assertThisInitialized(_this), _startLineNumber, startLineNumber);

    _classPrivateFieldSet(_assertThisInitialized(_this), _documentStartIndex, documentStartIndex);

    _classPrivateFieldSet(_assertThisInitialized(_this), _indexOnLine, indexOnLine);

    _classPrivateFieldSet(_assertThisInitialized(_this), _documentEndIndex, documentEndIndex);

    _classPrivateFieldSet(_assertThisInitialized(_this), _endLineNumber, endLineNumber);

    _classPrivateFieldSet(_assertThisInitialized(_this), _dataType, dataType);

    return _this;
  }
  /**
   * Gets the text value of the expression.
   * @returns {String} The text value of the expression.
   */


  _createClass(ExpressionNode, [{
    key: "getTextValue",
    value: function getTextValue() {
      return _classPrivateFieldGet(this, _textValue);
    }
    /**
     * Sets the text value of the expression.
     * @param {String} value The new text value of the expression.
     */

  }, {
    key: "setTextValue",
    value: function setTextValue(value) {
      _classPrivateFieldSet(this, _textValue, value);
    }
    /**
     * Gets the expression entity
     * @returns {ExpressionEntity}
     */

  }, {
    key: "getEntity",
    value: function getEntity() {
      return _classPrivateFieldGet(this, _entity);
    }
  }, {
    key: "setEntity",
    value: function setEntity(entity) {
      _classPrivateFieldSet(this, _entity, entity);
    }
    /**
     * Gets the expression category
     * @returns {ExpressionCategory}
     */

  }, {
    key: "getCategory",
    value: function getCategory() {
      return _classPrivateFieldGet(this, _category);
    }
  }, {
    key: "setCategory",
    value: function setCategory(category) {
      _classPrivateFieldSet(this, _category, category);
    }
    /**
     * Gets the zero-indexed line number that the expression starts
     * on.
     * @returns {Number} The starting document line number.
     */

  }, {
    key: "getStartLineNumber",
    value: function getStartLineNumber() {
      return _classPrivateFieldGet(this, _startLineNumber);
    }
    /**
     * Gets the zero-indexed line number that the expression ends on
     * @returns {Number} The ending line number
     */

  }, {
    key: "getEndLineNumber",
    value: function getEndLineNumber() {
      return _classPrivateFieldGet(this, _endLineNumber);
    }
    /**
     * Sets the document end line number
     * @param {Number} num The new line number
     */

  }, {
    key: "setEndLineNumber",
    value: function setEndLineNumber(num) {
      _classPrivateFieldSet(this, _endLineNumber, num);
    }
    /**
     * Gets the index of the first character of the expression in the
     * raw text of the document.
     * @returns {Number} The index of the first character of the expression
     */

  }, {
    key: "getDocumentStartIndex",
    value: function getDocumentStartIndex() {
      return _classPrivateFieldGet(this, _documentStartIndex);
    }
  }, {
    key: "getIndexOnLine",
    value: function getIndexOnLine() {
      return _classPrivateFieldGet(this, _indexOnLine);
    }
    /**
     * Gets the index of the last character of the expression in the
     * raw text of the document.
     * @returns {Number} The index of the last character of the expression
     */

  }, {
    key: "getDocumentEndIndex",
    value: function getDocumentEndIndex() {
      return _classPrivateFieldGet(this, _documentEndIndex);
    }
    /**
     * Sets the document end index
     * @param {Number} index The new index of the expression's end in the raw text of the document
     */

  }, {
    key: "setDocumentEndIndex",
    value: function setDocumentEndIndex(index) {
      _classPrivateFieldSet(this, _documentEndIndex, index);
    }
    /**
     * Gets the data type of the expression.
     * @returns {DataType} The data type of the expression.
     */

  }, {
    key: "getDataType",
    value: function getDataType() {
      return _classPrivateFieldGet(this, _dataType);
    }
    /**
     * Updates the data type of the expression. Triggers an
     * update to any observers.
     * @param {DataType} dataType The new data type.
     */

  }, {
    key: "setDataType",
    value: function setDataType(dataType) {
      if (dataType !== _classPrivateFieldGet(this, _dataType)) {
        _classPrivateFieldSet(this, _dataType, dataType);

        _get(_getPrototypeOf(ExpressionNode.prototype), "sendUpdate", this).call(this, dataType);
      }
    }
  }, {
    key: "setBlockId",
    value: function setBlockId(id) {
      if (_classPrivateFieldGet(this, _blockId) === "unknown") _classPrivateFieldSet(this, _blockId, id);
    }
  }, {
    key: "getBlockId",
    value: function getBlockId() {
      return _classPrivateFieldGet(this, _blockId);
    }
  }, {
    key: "setScopeId",
    value: function setScopeId(id) {
      if (_classPrivateFieldGet(this, _scopeId) === "unknown") _classPrivateFieldSet(this, _scopeId, id);
    }
  }, {
    key: "getScopeId",
    value: function getScopeId() {
      return _classPrivateFieldGet(this, _scopeId);
    }
    /**
     * @override
     * @param {DataType} dataType 
     */

  }, {
    key: "typeUpdateReceived",
    value: function typeUpdateReceived(dataType) {
      this.setDataType(dataType);
    }
    /**
     * The expression node that contains this node, if applicable.
     * @returns {ExpressionNode | undefined}
     */

  }, {
    key: "getParent",
    value: function getParent() {
      return _classPrivateFieldGet(this, _parent);
    }
    /**
     * Sets the parent of this node
     * @param {ExpressionNode} node 
     */

  }, {
    key: "setParent",
    value: function setParent(node) {
      _classPrivateFieldSet(this, _parent, node);
    }
    /**
     * Checks if this expression is part of an expression or statement of the given entity or category
     * @param {ExpressionEntity | ExpressionCategory} kind 
     */

  }, {
    key: "hasParentOfKind",
    value: function hasParentOfKind(kind) {
      var parent = this.getParent();

      while (parent !== undefined) {
        if (parent.is(kind)) {
          return true;
        }
      }

      return false;
    }
    /**
     * Checks if this expression is or contains the given expression
     * @param {ExpressionNode} expression 
     */

  }, {
    key: "contains",
    value: function contains(expression) {
      return this === expression;
    }
    /**
     * Checks if this node matches the given characteristic. This should be 
     * implemented by each ExpressionNode child class.
     * @param {ExpressionEntity | ExpressionCategory | String} characteristic 
     * @returns {Boolean} True if this expression node is a match, false otherwise.
     */

  }, {
    key: "is",
    value: function is(characteristic) {
      return _classPrivateFieldGet(this, _entity) === characteristic || _classPrivateFieldGet(this, _category) === characteristic || _classPrivateFieldGet(this, _textValue) === characteristic;
    }
    /**
     * Checks if this node matches any of the given characteristics. This should be 
     * implemented by each ExpressionNode child class.
     * @param {Array<ExpressionEntity | ExpressionCategory | String>} characteristics 
     * @returns {Boolean} True if this expression node is a match, false otherwise.
     */

  }, {
    key: "isOneOf",
    value: function isOneOf(characteristics) {
      var _iterator = _createForOfIteratorHelper(characteristics),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var c = _step.value;
          if (this.is(c)) return true;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return false;
    }
    /**
     * Checks if this expression can be subscripted (followed by an index, key, or slice).
     * @returns {Boolean} True if this type of expression can be subscripted, false otherwise
     */

  }, {
    key: "isSubscriptable",
    value: function isSubscriptable() {
      return false;
    }
    /**
     * Checks if this expression can be treated as a number (int, float, number, or bool)
     * @returns {Boolean}
     */

  }, {
    key: "isNumeric",
    value: function isNumeric() {
      return _classPrivateFieldGet(this, _dataType) === _enums.DataType.Int || _classPrivateFieldGet(this, _dataType) === _enums.DataType.Float || _classPrivateFieldGet(this, _dataType) === _enums.DataType.Number || _classPrivateFieldGet(this, _dataType) === _enums.DataType.Bool;
    }
    /**
     * Checks if this expression can be treated as an int (int or bool)
     * @returns {Boolean}
     */

  }, {
    key: "isIntLike",
    value: function isIntLike() {
      return _classPrivateFieldGet(this, _dataType) === _enums.DataType.Int || _classPrivateFieldGet(this, _dataType) === _enums.DataType.Bool;
    }
    /**
     * Checks if this expression is a non-float numeric - int, bool, number
     * @returns {Boolean}
     */

  }, {
    key: "isNonFloatNumeric",
    value: function isNonFloatNumeric() {
      return this.isIntLike() || _classPrivateFieldGet(this, _dataType) === _enums.DataType.Number;
    }
    /**
     * Checks if this expression is an assignment or value change operator.
     * @returns {Boolean}
     */

  }, {
    key: "isChangeOperator",
    value: function isChangeOperator() {
      return this.isOneOf([_enums.ExpressionEntity.AssignmentOperator, _enums.ExpressionEntity.IncrementOperator, _enums.ExpressionEntity.DecrementOperator, _enums.ExpressionEntity.MultiplyAssignOperator, _enums.ExpressionEntity.DivideAssignOperator, _enums.ExpressionEntity.ExponentAssignOperator, _enums.ExpressionEntity.IntDivideAssignOperator, _enums.ExpressionEntity.RemainderAssignOperator]);
    }
    /**
     * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
     * the type of node, this will need to be an exact match (by text value and entity) or a
     * category match.
     * @param {ExpressionNode} node 
     * @returns {Boolean}
     */

  }, {
    key: "matchesPattern",
    value: function matchesPattern(node) {
      return this.getTextValue() === node.getTextValue() && this.getEntity() === node.getEntity();
    }
    /**
     * Checks whether this is a string literal for combination purposes.
     * @returns {Boolean}
     */

  }, {
    key: "isStringLiteral",
    value: function isStringLiteral() {
      return false;
    }
    /**
     * Whether or not this expression has child expressions. Should be overridden in multipart
     * expressions
     * @returns {Boolean} True if there are children, false if not
     */

  }, {
    key: "hasChildExpressions",
    value: function hasChildExpressions() {
      return false;
    }
    /**
     * Gets all expressions that match the given entity
     * @param {ExpressionEntity | ExpressionCategory | String} entity 
     * @returns {ExpressionNode[]}
     */

  }, {
    key: "getExpressionsOfKind",
    value: function getExpressionsOfKind(entity) {
      var matches = [];

      if (this.is(entity)) {
        matches.push(this);
      }

      return matches;
    }
    /**
     * Gets the first expressions that matches any of the search info.
     * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
     * @returns {ExpressionNode | undefined}
     */

  }, {
    key: "getFirstExpressionOf",
    value: function getFirstExpressionOf(entities) {
      if (this.isOneOf(entities)) {
        return this;
      }

      return undefined;
    }
    /**
     * Gets all VariableExpressions that occur in the line.
     * @returns {VariableExpression[]}
     */

  }, {
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      return [];
    }
    /**
     * Checks any associated symptom rules and updates the symptom tracker
     */

  }, {
    key: "checkForSymptoms",
    value: function checkForSymptoms() {
      this.checkRules(this);
    }
  }]);

  return ExpressionNode;
}(_interfaces.TypeChangeObserverNotifier);
/**
 * A class representing a node made up of multiple expressions e.g. a calculation or a function call
 * This class should not be directly insantiated. Use subclasses instead.
 * @abstract
 * @extends ExpressionNode
 */


exports.ExpressionNode = ExpressionNode;

var _childExpressions = /*#__PURE__*/new WeakMap();

var _setParentOfChildren = /*#__PURE__*/new WeakSet();

var MultiPartExpressionNode = /*#__PURE__*/function (_ExpressionNode) {
  _inherits(MultiPartExpressionNode, _ExpressionNode);

  var _super2 = _createSuper(MultiPartExpressionNode);

  /** @type {ExpressionNode[]} */

  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionEntity} entity The entity that describes the MultiPartExpression
   * @param {ExpressionCategory} category The category that describes the MultiPartExpression
   * @param {DataType} dataType Optional. The datatype of the multipart expression. NotParsed by default.
   * @throws Throws an error if the list of children is empty
   */
  function MultiPartExpressionNode(textValue, children, entity, category) {
    var _this2;

    var dataType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _enums.DataType.NotParsed;

    _classCallCheck(this, MultiPartExpressionNode);

    _this2 = _super2.call(this, textValue, entity, category, children.length > 0 ? children[0].getStartLineNumber() : -1, children.length > 0 ? children[0].getDocumentStartIndex() : -1, children.length > 0 ? children[0].getIndexOnLine() : -1, dataType, children.length > 0 ? children[children.length - 1].getDocumentEndIndex() : -1, children.length > 0 ? children[children.length - 1].getEndLineNumber() : -1);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this2), _setParentOfChildren);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this2), _childExpressions, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this2), _childExpressions, children);

    _classPrivateMethodGet(_assertThisInitialized(_this2), _setParentOfChildren, _setParentOfChildren2).call(_assertThisInitialized(_this2), _classPrivateFieldGet(_assertThisInitialized(_this2), _childExpressions));

    return _this2;
  }

  _createClass(MultiPartExpressionNode, [{
    key: "isSubscriptable",
    value: //#region - overrides

    /**
     * @inheritdoc
     * @override
     */
    function isSubscriptable() {
      return (0, _utils.typeCanBeSubscripted)(this.getDataType());
    }
    /**
     * @inheritdoc
     */

  }, {
    key: "hasChildExpressions",
    value: function hasChildExpressions() {
      return _classPrivateFieldGet(this, _childExpressions).length > 0;
    }
    /**
     * @override
     */

  }, {
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      var variables = [];

      var _iterator2 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _childExpressions)),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var child = _step2.value;

          if (child.getTextValue() !== "Placeholder") {
            variables = variables.concat(child.getVariableExpressions());
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return variables;
    }
    /**
     * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
     * the type of node, this will need to be an exact match (by text value and entity) or a
     * category match.
     * @param {ExpressionNode} node 
     * @returns {Boolean}
     * @override
     */

  }, {
    key: "matchesPattern",
    value: function matchesPattern(node) {
      return this.getEntity() === node.getEntity();
    }
    /**
     * Gets all expressions that match the given entity
     * @param {ExpressionEntity} entity 
     * @returns {ExpressionNode[]}
     * @override
     */

  }, {
    key: "getExpressionsOfKind",
    value: function getExpressionsOfKind(entity) {
      var matches = _get(_getPrototypeOf(MultiPartExpressionNode.prototype), "getExpressionsOfKind", this).call(this, entity);

      var _iterator3 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _childExpressions)),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var c = _step3.value;

          if (c.is(entity)) {
            matches.push(c);
          } else matches = matches.concat(c.getExpressionsOfKind(entity));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return matches;
    }
    /**
     * Gets the first expressions that matches any of the search info.
     * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
     * @returns {ExpressionNode | undefined}
     */

  }, {
    key: "getFirstExpressionOf",
    value: function getFirstExpressionOf(entities) {
      var match = _get(_getPrototypeOf(MultiPartExpressionNode.prototype), "getFirstExpressionOf", this).call(this, entities);

      if (match === undefined) {
        var _iterator4 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _childExpressions)),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var c = _step4.value;

            if (c.isOneOf(entities)) {
              return c;
            } else {
              match = c.getFirstExpressionOf(entities);
              if (match !== undefined) return match;
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }

      return match;
    }
    /**
     * @override
     */

  }, {
    key: "contains",
    value: function contains(expression) {
      if (_get(_getPrototypeOf(MultiPartExpressionNode.prototype), "contains", this).call(this, expression)) {
        return true;
      }

      var _iterator5 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _childExpressions)),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var c = _step5.value;

          if (c.contains(expression)) {
            return true;
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return false;
    }
    /**
     * @override
     */

  }, {
    key: "checkForSymptoms",
    value: function checkForSymptoms() {
      this.checkRules(this);

      var _iterator6 = _createForOfIteratorHelper(this.getChildren()),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var c = _step6.value;
          c.checkForSymptoms();
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
    /**
     * @override
     */

  }, {
    key: "setBlockId",
    value: function setBlockId(id) {
      _get(_getPrototypeOf(MultiPartExpressionNode.prototype), "setBlockId", this).call(this, id); // NEED TO OVERRIDE BY TYPE...


      var _iterator7 = _createForOfIteratorHelper(this.getChildren()),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var exp = _step7.value;
          exp.setBlockId(id);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
    /**
     * @override
     */

  }, {
    key: "setScopeId",
    value: function setScopeId(id) {
      _get(_getPrototypeOf(MultiPartExpressionNode.prototype), "setScopeId", this).call(this, id);

      var _iterator8 = _createForOfIteratorHelper(this.getChildren()),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var exp = _step8.value;
          exp.setScopeId(id);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    } //#endregion - overrides
    //#region - extension methods

    /**
     * Gets the child expressions
     * @returns {ExpressionNode[]} The child expressions
     */

  }, {
    key: "getChildren",
    value: function getChildren() {
      return _classPrivateFieldGet(this, _childExpressions);
    }
    /**
     * Overwrites the current children with the provided children.
     * @param {ExpressionNode[]} children An array of ExpressionNodes representing the child nodes
     */

  }, {
    key: "setChildren",
    value: function setChildren(children) {
      _classPrivateFieldSet(this, _childExpressions, children);
    }
    /**
     * Adds a child node to the list of children.
     * @param {ExpressionNode} child The child expression.
     */

  }, {
    key: "addChild",
    value: function addChild(child) {
      _classPrivateFieldGet(this, _childExpressions).push(child);
    }
    /**
     * Checks if the expression is "complete" e.g. if an opening ( is closed. Should
     * be extended in child classes
     * @returns {Boolean} True if the expression represents a finished expression of its kind, false otherwise.
     */

  }, {
    key: "isComplete",
    value: function isComplete() {
      return this.hasChildExpressions();
    } //#endregion - extension methods

  }]);

  return MultiPartExpressionNode;
}(ExpressionNode); //#region - multipart functions and methods


exports.MultiPartExpressionNode = MultiPartExpressionNode;

function _setParentOfChildren2(expressions) {
  var _iterator123 = _createForOfIteratorHelper(expressions),
      _step123;

  try {
    for (_iterator123.s(); !(_step123 = _iterator123.n()).done;) {
      var e = _step123.value;
      e.setParent(this);
    }
  } catch (err) {
    _iterator123.e(err);
  } finally {
    _iterator123.f();
  }
}

var _parameters = /*#__PURE__*/new WeakMap();

var _numOptional = /*#__PURE__*/new WeakMap();

var _checkNameIsReserved = /*#__PURE__*/new WeakSet();

var _populateParameters = /*#__PURE__*/new WeakSet();

var CallableDefinitionStatement = /*#__PURE__*/function (_MultiPartExpressionN) {
  _inherits(CallableDefinitionStatement, _MultiPartExpressionN);

  var _super3 = _createSuper(CallableDefinitionStatement);

  /** @type {ExpressionNode[][]} */

  /** @type {Number} */

  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionEntity} entity The entity that describes the MultiPartExpression
   * @throws Throws an error if the list of children is empty
   */
  function CallableDefinitionStatement(textValue, _children, entity) {
    var _this3;

    _classCallCheck(this, CallableDefinitionStatement);

    var childrenCleaned = _classStaticPrivateMethodGet(CallableDefinitionStatement, CallableDefinitionStatement, _removeReturnTypeHint).call(CallableDefinitionStatement, _children);

    _this3 = _super3.call(this, textValue, childrenCleaned, entity, _enums.ExpressionCategory.BlockDefinitionStatement, _enums.DataType.NA);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this3), _populateParameters);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this3), _checkNameIsReserved);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this3), _parameters, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this3), _numOptional, {
      writable: true,
      value: 0
    });

    var firstParamIndex = 3;
    var lastParamIndex = childrenCleaned.length - 3;

    if (lastParamIndex < firstParamIndex) {
      _classPrivateFieldSet(_assertThisInitialized(_this3), _parameters, []); // no parameters

    } else {
      var paramSegment = childrenCleaned.slice(firstParamIndex, lastParamIndex + 1);

      _classPrivateFieldSet(_assertThisInitialized(_this3), _parameters, _rawtextprocessing.StatementProcessor.split(paramSegment, _enums.ExpressionEntity.Comma));

      _classPrivateMethodGet(_assertThisInitialized(_this3), _populateParameters, _populateParameters2).call(_assertThisInitialized(_this3));
    }

    _this3.addRule(_classPrivateMethodGet(_assertThisInitialized(_this3), _checkNameIsReserved, _checkNameIsReserved2));

    return _this3;
  } //#region - overrides

  /**
   * @inheritdoc
   */


  _createClass(CallableDefinitionStatement, [{
    key: "isComplete",
    value: function isComplete() {
      var children = this.getChildren();
      return children.length >= 5 && children[0].is(_enums.ExpressionEntity.FunctionDefinition) && children[1].isOneOf([_enums.ExpressionEntity.FunctionName, _enums.ExpressionEntity.MethodName]) && children[2].is(_enums.ExpressionEntity.OpenParenthesis) && children[children.length - 2].is(_enums.ExpressionEntity.CloseParenthesis) && children[children.length - 1].is(_enums.ExpressionEntity.Colon) && (0, _utils.validGroup)(children, _enums.ExpressionEntity.OpenParenthesis, _enums.ExpressionEntity.CloseParenthesis);
    }
    /**
     * @override
     */

  }, {
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      var variables = [];

      var _iterator9 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _parameters)),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var param = _step9.value;

          var _iterator10 = _createForOfIteratorHelper(param),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var item = _step10.value;

              if (item.is(_enums.ExpressionEntity.VariableName)) {
                variables.push(item);
              } else {
                variables = variables.concat(item.getVariableExpressions());
              }
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      return variables;
    }
    /**
     * Gets all expressions that match the given entity
     * @param {ExpressionEntity} entity 
     * @returns {ExpressionNode[]}
     * @override
     */

  }, {
    key: "getExpressionsOfKind",
    value: function getExpressionsOfKind(entity) {
      var matches = _get(_getPrototypeOf(CallableDefinitionStatement.prototype), "getExpressionsOfKind", this).call(this, entity);

      var _iterator11 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _parameters)),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var c = _step11.value;

          var _iterator12 = _createForOfIteratorHelper(c),
              _step12;

          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var item = _step12.value;

              if (item.is(entity)) {
                matches.push(item);
              } else matches = matches.concat(item.getExpressionsOfKind(entity));
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }

      return matches;
    }
    /**
     * Gets the first expressions that matches any of the search info.
     * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
     * @returns {ExpressionNode | undefined}
     */

  }, {
    key: "getFirstExpressionOf",
    value: function getFirstExpressionOf(entities) {
      var match = _get(_getPrototypeOf(CallableDefinitionStatement.prototype), "getFirstExpressionOf", this).call(this, entities);

      if (match === undefined) {
        var _iterator13 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _parameters)),
            _step13;

        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            var c = _step13.value;

            if (c.isOneOf(entities)) {
              return c;
            } else {
              match = c.getFirstExpressionOf(entities);
              if (match !== undefined) return match;
            }
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }
      }

      return match;
    }
    /**
     * @override
     */

  }, {
    key: "checkForSymptoms",
    value: function checkForSymptoms() {
      this.checkRules(this);

      var _iterator14 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _parameters)),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var p = _step14.value;

          var _iterator15 = _createForOfIteratorHelper(p),
              _step15;

          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var item = _step15.value;
              item.checkForSymptoms();
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
    }
    /**
     * @override
     */

  }, {
    key: "setBlockId",
    value: function setBlockId(id) {
      _get(_getPrototypeOf(CallableDefinitionStatement.prototype), "setBlockId", this).call(this, id); // NEED TO OVERRIDE BY TYPE...


      var _iterator16 = _createForOfIteratorHelper(this.getChildren()),
          _step16;

      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var exp = _step16.value;
          exp.setBlockId(id);
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }

      var _iterator17 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _parameters)),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var item = _step17.value;

          var _iterator18 = _createForOfIteratorHelper(item),
              _step18;

          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var p = _step18.value;
              p.setBlockId(id);
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }
    } //#endregion - overrides

    /**
     * Gets the parameters
     * @returns {ExpressionNode[][]}
     */

  }, {
    key: "getParameters",
    value: function getParameters() {
      return _classPrivateFieldGet(this, _parameters);
    }
  }, {
    key: "getOptionalParameterCount",
    value: function getOptionalParameterCount() {
      return _classPrivateFieldGet(this, _numOptional);
    }
    /**
     * Helper method. Checks if the name of this callable is a reserved word.
     * @param {CallableDefinitionStatement} callable 
     * @returns {Symptom[]}
     */

  }]);

  return CallableDefinitionStatement;
}(MultiPartExpressionNode);

function _checkNameIsReserved2(callable) {
  var symptoms = [];
  var children = callable.getChildren();

  if (children.length > 1) {
    var nameCat = (0, _utils.keywordLookup)(children[1].getTextValue()).category;

    if (nameCat === _enums.ExpressionCategory.BlockDefinitions || nameCat === _enums.ExpressionCategory.LogicalOperators || nameCat === _enums.ExpressionCategory.Types || nameCat === _enums.ExpressionCategory.OtherKeywords) {
      symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.DefinitionFollowedByReservedWord, children, 0, 1, {
        definitionType: children[0].getTextValue(),
        reservedWord: children[1].getTextValue()
      }));
    }
  }

  return symptoms;
}

function _findParentheses(children) {
  var openIndex = -1;
  var closeIndex = -1;
  var openParens = 0;

  for (var i = 0; i < children.length; i++) {
    if (children[i].is(_enums.ExpressionEntity.OpenParenthesis)) {
      openParens++;
      if (openIndex === -1) openIndex = i;
    } else if (children[i].is(_enums.ExpressionEntity.CloseParenthesis)) {
      openParens--;

      if (openParens === 0) {
        closeIndex = i;
        break;
      }
    }
  }

  return [openIndex, closeIndex];
}

function _removeReturnTypeHint(children) {
  var parens = _classStaticPrivateMethodGet(CallableDefinitionStatement, CallableDefinitionStatement, _findParentheses).call(CallableDefinitionStatement, children); // Remove return typehint


  var i = parens[1] + 1;
  var toRemove = -1;

  while (i < children.length) {
    if (children[i].is(_enums.ExpressionEntity.Colon)) {
      if (toRemove >= 0) {
        children.splice(toRemove, i - toRemove);
      }

      break;
    } else if (children[i].is(_enums.ExpressionEntity.TypeHintReturn)) {
      toRemove = i;
    }

    i++;
  }

  return children;
}

function _populateParameters2() {
  for (var i = 0; i < _classPrivateFieldGet(this, _parameters).length; i++) {
    _classPrivateFieldGet(this, _parameters)[i] = _rawtextprocessing.StatementProcessor.createTree(_classPrivateFieldGet(this, _parameters)[i]); // Remove type hints from parameters

    if (_classPrivateFieldGet(this, _parameters)[i].length > 1) {
      var parts = _rawtextprocessing.StatementProcessor.split(_classPrivateFieldGet(this, _parameters)[i], _enums.ExpressionEntity.Colon);

      _classPrivateFieldGet(this, _parameters)[i] = parts[0];
    }

    var _iterator124 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _parameters)[i]),
        _step124;

    try {
      for (_iterator124.s(); !(_step124 = _iterator124.n()).done;) {
        var p = _step124.value;

        if (p.is(_enums.ExpressionEntity.VariableName)) {
          p.setDataType(_enums.DataType.Unknown);
          p.setAssignedOrChanged();
          p.setIsParameter();
        } else if (p.is(_enums.ExpressionEntity.AssignmentStatement)) {
          var _this$numOptional, _this$numOptional2;

          var optional = p.getVariableExpressions();
          _classPrivateFieldSet(this, _numOptional, (_this$numOptional = _classPrivateFieldGet(this, _numOptional), _this$numOptional2 = _this$numOptional++, _this$numOptional)), _this$numOptional2;

          var _iterator125 = _createForOfIteratorHelper(optional),
              _step125;

          try {
            for (_iterator125.s(); !(_step125 = _iterator125.n()).done;) {
              var o = _step125.value;
              o.setDataType(_enums.DataType.Unknown);
              o.setAssignedOrChanged();
              o.setIsParameter();
            }
          } catch (err) {
            _iterator125.e(err);
          } finally {
            _iterator125.f();
          }
        }
      }
    } catch (err) {
      _iterator124.e(err);
    } finally {
      _iterator124.f();
    }
  }
}

var FunctionDefinitionStatement = /*#__PURE__*/function (_CallableDefinitionSt) {
  _inherits(FunctionDefinitionStatement, _CallableDefinitionSt);

  var _super4 = _createSuper(FunctionDefinitionStatement);

  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function FunctionDefinitionStatement(textValue, children) {
    _classCallCheck(this, FunctionDefinitionStatement);

    return _super4.call(this, textValue, children, _enums.ExpressionEntity.FunctionDefinitionStatement, _enums.ExpressionCategory.BlockDefinitionStatement, _enums.DataType.NA);
  } //#region - overrides

  /**
   * @inheritdoc
   */


  _createClass(FunctionDefinitionStatement, [{
    key: "isComplete",
    value: function isComplete() {
      return _get(_getPrototypeOf(FunctionDefinitionStatement.prototype), "isComplete", this).call(this) && this.getChildren()[1].is(_enums.ExpressionEntity.FunctionName);
    } //#endregion - overrides
    //#region - extension

    /**
     * Gets the expression that contains the function name
     * @returns {FunctionNode}
     */

  }, {
    key: "getFunctionNameExpression",
    value: function getFunctionNameExpression() {
      return this.getChildren()[1];
    } //#endregion - extension

  }]);

  return FunctionDefinitionStatement;
}(CallableDefinitionStatement); // TODO: MethodDefinitionStatement


exports.FunctionDefinitionStatement = FunctionDefinitionStatement;

var _arguments = /*#__PURE__*/new WeakMap();

var _setArgsParent = /*#__PURE__*/new WeakSet();

var _checkAndUpdateDataType = /*#__PURE__*/new WeakSet();

var _checkUnusedReturn = /*#__PURE__*/new WeakSet();

var _checkPassesNone = /*#__PURE__*/new WeakSet();

var FunctionCallNode = /*#__PURE__*/function (_MultiPartExpressionN2) {
  _inherits(FunctionCallNode, _MultiPartExpressionN2);

  var _super5 = _createSuper(FunctionCallNode);

  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionEntity} entity AUTO FILL The entity that describes the MultiPartExpression
   * @param {ExpressionCategory} category AUTOFILL The category that describes the MultiPartExpression
   * @throws Throws an error if the list of children is empty
   */
  function FunctionCallNode(textValue, children, entity, category) {
    var _this4;

    _classCallCheck(this, FunctionCallNode);

    _this4 = _super5.call(this, textValue, children, entity, category);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this4), _checkPassesNone);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this4), _checkUnusedReturn);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this4), _checkAndUpdateDataType);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this4), _setArgsParent);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this4), _arguments, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this4), _checkAndUpdateDataType, _checkAndUpdateDataType2).call(_assertThisInitialized(_this4));

    if (_this4.isComplete()) {
      var firstParamIndex = 2;
      var lastParamIndex = children.length - 2;

      if (lastParamIndex < firstParamIndex) {
        _classPrivateFieldSet(_assertThisInitialized(_this4), _arguments, []); // no args

      } else {
        var paramSegment = children.slice(firstParamIndex, lastParamIndex + 1);

        _classPrivateFieldSet(_assertThisInitialized(_this4), _arguments, _rawtextprocessing.StatementProcessor.checkForListComp(paramSegment)); // iterate and convert to tree


        for (var i = 0; i < _classPrivateFieldGet(_assertThisInitialized(_this4), _arguments).length; i++) {
          if (_classPrivateFieldGet(_assertThisInitialized(_this4), _arguments)[i].length > 1) {
            _classPrivateFieldGet(_assertThisInitialized(_this4), _arguments)[i] = _rawtextprocessing.StatementProcessor.createTree(_classPrivateFieldGet(_assertThisInitialized(_this4), _arguments)[i]);
          }
        }
      }
    } else _classPrivateFieldSet(_assertThisInitialized(_this4), _arguments, []);

    _classPrivateMethodGet(_assertThisInitialized(_this4), _setArgsParent, _setArgsParent2).call(_assertThisInitialized(_this4));

    _this4.addRules([_classPrivateMethodGet(_assertThisInitialized(_this4), _checkPassesNone, _checkPassesNone2), _classPrivateMethodGet(_assertThisInitialized(_this4), _checkUnusedReturn, _checkUnusedReturn2)]);

    return _this4;
  }
  /**
   * Helper method that sets this as the parent of all arguments in a function call.
   */


  _createClass(FunctionCallNode, [{
    key: "isComplete",
    value: //#region - overrides

    /**
     * @inheritdoc
     */
    function isComplete() {
      var children = this.getChildren();
      return children.length >= 3 && children[0].isOneOf([_enums.ExpressionCategory.BuiltInFunctions, _enums.ExpressionEntity.FunctionName]) && children[1].is(_enums.ExpressionEntity.OpenParenthesis) && children[children.length - 1].is(_enums.ExpressionEntity.CloseParenthesis) && (0, _utils.validGroup)(children, _enums.ExpressionEntity.OpenParenthesis, _enums.ExpressionEntity.CloseParenthesis);
    }
    /**
     * @override
     */

  }, {
    key: "addChild",
    value: function addChild(child) {
      _get(_getPrototypeOf(FunctionCallNode.prototype), "addChild", this).call(this, child);

      _classPrivateMethodGet(this, _checkAndUpdateDataType, _checkAndUpdateDataType2).call(this);
    }
    /**
     * @override
     */

  }, {
    key: "setChildren",
    value: function setChildren(children) {
      _get(_getPrototypeOf(FunctionCallNode.prototype), "setChildren", this).call(this, children);

      _classPrivateMethodGet(this, _checkAndUpdateDataType, _checkAndUpdateDataType2).call(this);
    }
    /**
     * @override
     */

  }, {
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      var variables = [];

      var _iterator19 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _arguments)),
          _step19;

      try {
        for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
          var arg = _step19.value;

          var _iterator20 = _createForOfIteratorHelper(arg),
              _step20;

          try {
            for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
              var item = _step20.value;

              if (item.is(_enums.ExpressionEntity.VariableName)) {
                variables.push(item);
              } else {
                variables = variables.concat(item.getVariableExpressions());
              }
            }
          } catch (err) {
            _iterator20.e(err);
          } finally {
            _iterator20.f();
          }
        }
      } catch (err) {
        _iterator19.e(err);
      } finally {
        _iterator19.f();
      }

      return variables;
    }
    /**
     * Gets all expressions that match the given entity
     * @param {ExpressionEntity} entity 
     * @returns {ExpressionNode[]}
     * @override
     */

  }, {
    key: "getExpressionsOfKind",
    value: function getExpressionsOfKind(entity) {
      var matches = _get(_getPrototypeOf(FunctionCallNode.prototype), "getExpressionsOfKind", this).call(this, entity);

      if (this.getChildren()[0].is(entity)) {
        return [this.getChildren()[0]];
      }

      var _iterator21 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _arguments)),
          _step21;

      try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
          var c = _step21.value;

          var _iterator22 = _createForOfIteratorHelper(c),
              _step22;

          try {
            for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
              var item = _step22.value;

              if (item.is(entity)) {
                matches.push(item);
              } else {
                matches = matches.concat(item.getExpressionsOfKind(entity));
              }
            }
          } catch (err) {
            _iterator22.e(err);
          } finally {
            _iterator22.f();
          }
        }
      } catch (err) {
        _iterator21.e(err);
      } finally {
        _iterator21.f();
      }

      return matches;
    }
    /**
     * Gets the first expressions that matches any of the search info.
     * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
     * @returns {ExpressionNode | undefined}
     */

  }, {
    key: "getFirstExpressionOf",
    value: function getFirstExpressionOf(entities) {
      var match = _get(_getPrototypeOf(FunctionCallNode.prototype), "getFirstExpressionOf", this).call(this, entities);

      if (this.getChildren()[0].isOneOf(entities)) {
        return this.getChildren()[0];
      }

      if (match === undefined) {
        var _iterator23 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _arguments)),
            _step23;

        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var c = _step23.value;

            if (c.isOneOf(entities)) {
              return c;
            } else {
              match = c.getFirstExpressionOf(entities);
              if (match !== undefined) return match;
            }
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }
      }

      return match;
    }
    /**
     * @override
     */

  }, {
    key: "checkForSymptoms",
    value: function checkForSymptoms() {
      this.checkRules(this);

      var _iterator24 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _arguments)),
          _step24;

      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var a = _step24.value;

          var _iterator25 = _createForOfIteratorHelper(a),
              _step25;

          try {
            for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
              var item = _step25.value;
              item.checkForSymptoms();
            }
          } catch (err) {
            _iterator25.e(err);
          } finally {
            _iterator25.f();
          }
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }
    }
    /**
     * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
     * the type of node, this will need to be an exact match (by text value and entity) or a
     * category match.
     * @param {ExpressionNode} node 
     * @returns {Boolean}
     * @override
     */

  }, {
    key: "matchesPattern",
    value: function matchesPattern(node) {
      return _get(_getPrototypeOf(FunctionCallNode.prototype), "matchesPattern", this).call(this, node) && this.getFunctionName() === node.getFunctionName() && this.getTextValue() === node.getTextValue();
    }
    /**
     * @override
     */

  }, {
    key: "setBlockId",
    value: function setBlockId(id) {
      _get(_getPrototypeOf(FunctionCallNode.prototype), "setBlockId", this).call(this, id); // NEED TO OVERRIDE BY TYPE...


      var _iterator26 = _createForOfIteratorHelper(this.getChildren()),
          _step26;

      try {
        for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
          var exp = _step26.value;
          exp.setBlockId(id);
        }
      } catch (err) {
        _iterator26.e(err);
      } finally {
        _iterator26.f();
      }

      var _iterator27 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _arguments)),
          _step27;

      try {
        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
          var item = _step27.value;

          var _iterator28 = _createForOfIteratorHelper(item),
              _step28;

          try {
            for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
              var a = _step28.value;
              a.setBlockId(id);
            }
          } catch (err) {
            _iterator28.e(err);
          } finally {
            _iterator28.f();
          }
        }
      } catch (err) {
        _iterator27.e(err);
      } finally {
        _iterator27.f();
      }
    } //#endregion - overrides
    //#region - custom

    /**
     * Gets the ExpressionEntity of the function that was called
     * @returns {ExpressionEntity}
     */

  }, {
    key: "getFunctionEntity",
    value: function getFunctionEntity() {
      var children = this.getChildren();
      if (children.length < 1) throw new Error("No function expression available");
      return children[0].getEntity();
    }
    /**
     * Gets the name of the function that was called
     * @returns {String}
     */

  }, {
    key: "getFunctionName",
    value: function getFunctionName() {
      var children = this.getChildren();
      if (children.length < 1) throw new Error("No function expression available");
      return children[0].getTextValue();
    }
  }, {
    key: "getFunctionExpression",
    value: function getFunctionExpression() {
      var children = this.getChildren();
      if (children.length < 1) throw new Error("No function expression available");
      return children[0];
    }
    /**
     * 
     * @returns {ExpressionNode[][]}
     */

  }, {
    key: "getArguments",
    value: function getArguments() {
      return _classPrivateFieldGet(this, _arguments);
    }
    /**
     * Helper method that sets the data type based on the function called if the call is complete.
     */
    //#endregion - custom

  }]);

  return FunctionCallNode;
}(MultiPartExpressionNode);

function _setArgsParent2() {
  var _iterator126 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _arguments)),
      _step126;

  try {
    for (_iterator126.s(); !(_step126 = _iterator126.n()).done;) {
      var a = _step126.value;

      var _iterator127 = _createForOfIteratorHelper(a),
          _step127;

      try {
        for (_iterator127.s(); !(_step127 = _iterator127.n()).done;) {
          var part = _step127.value;
          part.setParent(this);
        }
      } catch (err) {
        _iterator127.e(err);
      } finally {
        _iterator127.f();
      }
    }
  } catch (err) {
    _iterator126.e(err);
  } finally {
    _iterator126.f();
  }
}

function _checkAndUpdateDataType2() {
  // If this is a complete function call - set the data type based on the function expression
  this.getChildren()[0].addObserver(this);

  if (this.isComplete()) {
    _get(_getPrototypeOf(FunctionCallNode.prototype), "setDataType", this).call(this, this.getChildren()[0].getDataType());
  } else {
    _get(_getPrototypeOf(FunctionCallNode.prototype), "setDataType", this).call(this, _enums.DataType.NotParsed);
  }
}

function _checkUnusedReturn2(exp) {
  var symptoms = [];

  if (exp.getDataType() !== _enums.DataType.None && (exp.getParent() === undefined || exp.getParent().is(_enums.ExpressionEntity.GroupStatement) && exp.getParent().getParent() === undefined) && (exp.is(_enums.ExpressionEntity.BuiltInFunctionCall) || exp.getFunctionExpression().getReturnStatements().length > 0)) {
    symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnusedReturn, [exp], 0, 0, {
      expression: exp.getFunctionExpression()
    }));
  }

  return symptoms;
}

function _checkPassesNone2(exp) {
  var symptoms = [];
  var values = exp.getArguments();

  var _iterator128 = _createForOfIteratorHelper(values),
      _step128;

  try {
    for (_iterator128.s(); !(_step128 = _iterator128.n()).done;) {
      var arg = _step128.value;
      var expandGroups = arg.flatMap(function (val) {
        return !val.is(_enums.ExpressionEntity.GroupStatement) ? val : val.getContents();
      });
      var noneValues = expandGroups.filter(function (val) {
        return (0, _utils.isNoneFunction)(val) || val.getDataType() === _enums.DataType.None && !val.isOneOf([_enums.ExpressionEntity.NoneType, _enums.ExpressionEntity.VariableName]);
      });

      if (noneValues.length > 0) {
        symptoms.push.apply(symptoms, _toConsumableArray(noneValues.map(function (val) {
          return _symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.AssignedNone, [val], 0, 0, {
            expression: val,
            usage: exp.getFunctionEntity() === _enums.ExpressionEntity.PrintFunction ? "print" : _constants.FUNCTION_ARG
          });
        })));
      }
    }
  } catch (err) {
    _iterator128.e(err);
  } finally {
    _iterator128.f();
  }

  return symptoms;
}

var _checkUnnecessaryTypeConversion = /*#__PURE__*/new WeakSet();

var BuiltInFunctionCall = /*#__PURE__*/function (_FunctionCallNode) {
  _inherits(BuiltInFunctionCall, _FunctionCallNode);

  var _super6 = _createSuper(BuiltInFunctionCall);

  /**
   * Creates a new BuiltInFunctionCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function BuiltInFunctionCall(textValue, _children2) {
    var _this5;

    _classCallCheck(this, BuiltInFunctionCall);

    _this5 = _super6.call(this, textValue, _children2, _enums.ExpressionEntity.BuiltInFunctionCall, _enums.ExpressionCategory.FunctionCall);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this5), _checkUnnecessaryTypeConversion);

    if (_children2.length > 0 && _children2[0].isOneOf([_enums.ExpressionEntity.StrFunction, _enums.ExpressionEntity.IntFunction, _enums.ExpressionEntity.FloatFunction, _enums.ExpressionEntity.BoolFunction, _enums.ExpressionEntity.ListFunction, _enums.ExpressionEntity.TupleFunction, _enums.ExpressionEntity.SetFunction, _enums.ExpressionEntity.DictFunction])) {
      _this5.addRule(_classPrivateMethodGet(_assertThisInitialized(_this5), _checkUnnecessaryTypeConversion, _checkUnnecessaryTypeConversion2));
    }

    return _this5;
  } //#region - overrides    

  /**
   * @override
   */


  _createClass(BuiltInFunctionCall, [{
    key: "isComplete",
    value: function isComplete() {
      return _get(_getPrototypeOf(BuiltInFunctionCall.prototype), "isComplete", this).call(this) && this.getChildren()[0].is(_enums.ExpressionCategory.BuiltInFunctions);
    } //#endregion - overrides

    /**
     * Converts this to a user defined function expression
     * @param {UserDefinedFunctionExpression} userDefinedFunction 
     */

  }, {
    key: "convertToUserDefinedFunction",
    value: function convertToUserDefinedFunction(userDefinedFunction) {
      this.setEntity(_enums.ExpressionEntity.UserDefinedFunctionCall);
      var functionExpression = this.getChildren()[0];
      functionExpression.setEntity(_enums.ExpressionEntity.FunctionName);
      functionExpression.setCategory(_enums.ExpressionCategory.Identifiers);
      functionExpression.setDataType(userDefinedFunction.getReturnType());
    }
    /**
     * Rule function. Checks if the call is an unnecessary use of a type conversion function.
     * @param {BuiltInFunctionCall} call 
     * @returns {Symptom[]}
     */

  }]);

  return BuiltInFunctionCall;
}(FunctionCallNode);

exports.BuiltInFunctionCall = BuiltInFunctionCall;

function _checkUnnecessaryTypeConversion2(call) {
  var symptoms = [];
  var dataType = call.getDataType();
  var args = call.getArguments();
  var children = call.getChildren();

  if (args.length === 1 && args[0].length === 1 && (args[0][0].getDataType() === dataType || dataType === _enums.DataType.List && args[0][0].getDataType() === _enums.DataType.String)) {
    symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.TypeUnnecessary, children, 0, children.length - 1, {
      convertedValue: args[0][0].getTextValue(),
      argType: args[0][0].getDataType().name,
      convertedType: dataType.name
    }));
  }

  return symptoms;
}

var UserDefinedFunctionCall = /*#__PURE__*/function (_FunctionCallNode2) {
  _inherits(UserDefinedFunctionCall, _FunctionCallNode2);

  var _super7 = _createSuper(UserDefinedFunctionCall);

  /**
   * Creates a new UserDefinedFunctionCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function UserDefinedFunctionCall(textValue, children) {
    _classCallCheck(this, UserDefinedFunctionCall);

    return _super7.call(this, textValue, children, _enums.ExpressionEntity.UserDefinedFunctionCall, _enums.ExpressionCategory.FunctionCall);
  } //#region - overrides    

  /**
   * @override
   */


  _createClass(UserDefinedFunctionCall, [{
    key: "isComplete",
    value: function isComplete() {
      return _get(_getPrototypeOf(UserDefinedFunctionCall.prototype), "isComplete", this).call(this) && this.getChildren()[0].is(_enums.ExpressionEntity.FunctionName);
    } //#endregion - overrides

    /**
     * Converts this to a built in function expression 
     */

  }, {
    key: "convertToImportedFunction",
    value: function convertToImportedFunction() {
      this.setEntity(_enums.ExpressionEntity.BuiltInFunctionCall);
      var functionExpression = this.getChildren()[0];
      functionExpression.setEntity(_enums.ExpressionEntity.Unknown);
      functionExpression.setCategory(_enums.ExpressionCategory.ModuleFunctions);
      functionExpression.setDataType(_enums.DataType.Unknown);
    }
  }]);

  return UserDefinedFunctionCall;
}(FunctionCallNode);

exports.UserDefinedFunctionCall = UserDefinedFunctionCall;

var ExceptionCall = /*#__PURE__*/function (_MultiPartExpressionN3) {
  _inherits(ExceptionCall, _MultiPartExpressionN3);

  var _super8 = _createSuper(ExceptionCall);

  /**
   * Creates a new ExceptionCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function ExceptionCall(textValue, children) {
    _classCallCheck(this, ExceptionCall);

    return _super8.call(this, textValue, children, _enums.ExpressionEntity.ExceptionCall, _enums.ExpressionCategory.ExceptionCall, _enums.DataType.Exception);
  } //#region - overrides    

  /**
   * @override
   */


  _createClass(ExceptionCall, [{
    key: "isComplete",
    value: function isComplete() {
      return _get(_getPrototypeOf(ExceptionCall.prototype), "isComplete", this).call(this) && this.getChildren()[0].is(_enums.ExpressionCategory.BuiltInExceptions);
    } //#endregion - overrides

  }]);

  return ExceptionCall;
}(MultiPartExpressionNode);

exports.ExceptionCall = ExceptionCall;

var _arguments2 = /*#__PURE__*/new WeakMap();

var _setArgsParent3 = /*#__PURE__*/new WeakSet();

var _checkAndUpdateDataType3 = /*#__PURE__*/new WeakSet();

var _checkUnusedReturn3 = /*#__PURE__*/new WeakSet();

var _checkPassesNone3 = /*#__PURE__*/new WeakSet();

var MethodCallNode = /*#__PURE__*/function (_MultiPartExpressionN4) {
  _inherits(MethodCallNode, _MultiPartExpressionN4);

  var _super9 = _createSuper(MethodCallNode);

  /**
   * Creates a new MethodCallNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionEntity} entity AUTO FILL The entity that describes the MultiPartExpression
   * @param {ExpressionCategory} category AUTOFILL The category that describes the MultiPartExpression
   * @throws Throws an error if the list of children is empty
   */
  function MethodCallNode(textValue, children, entity, category) {
    var _this6;

    _classCallCheck(this, MethodCallNode);

    _this6 = _super9.call(this, textValue, children, entity, category);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this6), _checkPassesNone3);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this6), _checkUnusedReturn3);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this6), _checkAndUpdateDataType3);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this6), _setArgsParent3);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this6), _arguments2, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this6), _checkAndUpdateDataType3, _checkAndUpdateDataType4).call(_assertThisInitialized(_this6));

    if (_this6.isComplete()) {
      var firstParamIndex = 4;
      var lastParamIndex = children.length - 2;

      if (lastParamIndex < firstParamIndex) {
        _classPrivateFieldSet(_assertThisInitialized(_this6), _arguments2, []); // no args

      } else {
        var paramSegment = children.slice(firstParamIndex, lastParamIndex + 1);

        _classPrivateFieldSet(_assertThisInitialized(_this6), _arguments2, _rawtextprocessing.StatementProcessor.checkForListComp(paramSegment));

        for (var i = 0; i < _classPrivateFieldGet(_assertThisInitialized(_this6), _arguments2).length; i++) {
          if (_classPrivateFieldGet(_assertThisInitialized(_this6), _arguments2)[i].length > 1) {
            _classPrivateFieldGet(_assertThisInitialized(_this6), _arguments2)[i] = _rawtextprocessing.StatementProcessor.createTree(_classPrivateFieldGet(_assertThisInitialized(_this6), _arguments2)[i]);
          }
        }
      }
    } else _classPrivateFieldSet(_assertThisInitialized(_this6), _arguments2, []);

    _classPrivateMethodGet(_assertThisInitialized(_this6), _setArgsParent3, _setArgsParent4).call(_assertThisInitialized(_this6));

    _this6.addRules([_classPrivateMethodGet(_assertThisInitialized(_this6), _checkPassesNone3, _checkPassesNone4), _classPrivateMethodGet(_assertThisInitialized(_this6), _checkUnusedReturn3, _checkUnusedReturn4)]);

    return _this6;
  }
  /**
   * Helper method that sets this as the parent of all arguments in a function call.
   */


  _createClass(MethodCallNode, [{
    key: "isComplete",
    value: //#region - overrides

    /**
     * @inheritdoc
     */
    function isComplete() {
      var children = this.getChildren(); // 0 child can be anything, 1 must be dot, 2 must be name, 3 must be (, -1 must be )

      return children.length >= 5 && children[1].is(_enums.ExpressionEntity.Dot) //&& children[2].isOneOf([ExpressionEntity.MethodName, ExpressionCategory.BuiltInMethods, ExpressionCategory.MagicMethods, ExpressionCategory.ModuleFunctions])
      && children[3].is(_enums.ExpressionEntity.OpenParenthesis) && children[children.length - 1].is(_enums.ExpressionEntity.CloseParenthesis) && (0, _utils.validGroup)(children, _enums.ExpressionEntity.OpenParenthesis, _enums.ExpressionEntity.CloseParenthesis);
    }
    /**
     * @override
     */

  }, {
    key: "addChild",
    value: function addChild(child) {
      _get(_getPrototypeOf(MethodCallNode.prototype), "addChild", this).call(this, child);

      _classPrivateMethodGet(this, _checkAndUpdateDataType3, _checkAndUpdateDataType4).call(this);
    }
    /**
     * @override
     */

  }, {
    key: "setChildren",
    value: function setChildren(children) {
      _get(_getPrototypeOf(MethodCallNode.prototype), "setChildren", this).call(this, children);

      _classPrivateMethodGet(this, _checkAndUpdateDataType3, _checkAndUpdateDataType4).call(this);
    }
    /**
     * @override
     */

  }, {
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      var variables = [];

      var _iterator29 = _createForOfIteratorHelper(this.getChildren()),
          _step29;

      try {
        for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
          var child = _step29.value;

          if (child.is(_enums.ExpressionEntity.Dot)) {
            break;
          } else if (child.is(_enums.ExpressionEntity.VariableName)) {
            variables.push(child);
          } else {
            variables = variables.concat(child.getVariableExpressions());
          }
        }
      } catch (err) {
        _iterator29.e(err);
      } finally {
        _iterator29.f();
      }

      var _iterator30 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _arguments2)),
          _step30;

      try {
        for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
          var arg = _step30.value;

          var _iterator31 = _createForOfIteratorHelper(arg),
              _step31;

          try {
            for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
              var item = _step31.value;

              if (item.is(_enums.ExpressionEntity.VariableName)) {
                variables.push(item);
              } else {
                variables = variables.concat(item.getVariableExpressions());
              }
            }
          } catch (err) {
            _iterator31.e(err);
          } finally {
            _iterator31.f();
          }
        }
      } catch (err) {
        _iterator30.e(err);
      } finally {
        _iterator30.f();
      }

      return variables;
    }
    /**
     * Gets all expressions that match the given entity
     * @param {ExpressionEntity} entity 
     * @returns {ExpressionNode[]}
     * @override
     */

  }, {
    key: "getExpressionsOfKind",
    value: function getExpressionsOfKind(entity) {
      var matches = _get(_getPrototypeOf(MethodCallNode.prototype), "getExpressionsOfKind", this).call(this, entity);

      var _iterator32 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _arguments2)),
          _step32;

      try {
        for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
          var c = _step32.value;

          var _iterator33 = _createForOfIteratorHelper(c),
              _step33;

          try {
            for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
              var item = _step33.value;

              if (item.is(entity)) {
                matches.push(item);
              } else {
                matches = matches.concat(item.getExpressionsOfKind(entity));
              }
            }
          } catch (err) {
            _iterator33.e(err);
          } finally {
            _iterator33.f();
          }
        }
      } catch (err) {
        _iterator32.e(err);
      } finally {
        _iterator32.f();
      }

      return matches;
    }
    /**
     * Gets the first expressions that matches any of the search info.
     * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
     * @returns {ExpressionNode | undefined}
     */

  }, {
    key: "getFirstExpressionOf",
    value: function getFirstExpressionOf(entities) {
      var match = _get(_getPrototypeOf(MethodCallNode.prototype), "getFirstExpressionOf", this).call(this, entities);

      if (match === undefined) {
        var _iterator34 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _arguments2)),
            _step34;

        try {
          for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
            var c = _step34.value;

            if (c.isOneOf(entities)) {
              return c;
            } else {
              match = c.getFirstExpressionOf(entities);
              if (match !== undefined) return match;
            }
          }
        } catch (err) {
          _iterator34.e(err);
        } finally {
          _iterator34.f();
        }
      }

      return match;
    }
    /**
     * @override
     */

  }, {
    key: "checkForSymptoms",
    value: function checkForSymptoms() {
      this.checkRules(this);

      if (this.isComplete()) {
        this.getChildren()[0].checkForSymptoms();
      }

      var _iterator35 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _arguments2)),
          _step35;

      try {
        for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
          var a = _step35.value;

          var _iterator36 = _createForOfIteratorHelper(a),
              _step36;

          try {
            for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
              var item = _step36.value;
              item.checkForSymptoms();
            }
          } catch (err) {
            _iterator36.e(err);
          } finally {
            _iterator36.f();
          }
        }
      } catch (err) {
        _iterator35.e(err);
      } finally {
        _iterator35.f();
      }
    }
    /**
     * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
     * the type of node, this will need to be an exact match (by text value and entity) or a
     * category match.
     * @param {ExpressionNode} node 
     * @returns {Boolean}
     * @override
     */

  }, {
    key: "matchesPattern",
    value: function matchesPattern(node) {
      return _get(_getPrototypeOf(MethodCallNode.prototype), "matchesPattern", this).call(this, node) && this.getMethodName() === node.getMethodName();
    } //#endregion - overrides
    //#region - custom

    /**
     * Gets the ExpressionEntity of the method that was called
     * @returns {ExpressionEntity}
     */

  }, {
    key: "getMethodEntity",
    value: function getMethodEntity() {
      var children = this.getChildren();
      if (children.length < 3) throw new Error("No method expression available");
      return children[2].getEntity();
    }
  }, {
    key: "getMethodExpression",
    value: function getMethodExpression() {
      var children = this.getChildren();
      if (children.length < 3) throw new Error("No method expression available");
      return children[2];
    }
    /**
     * @override
     */

  }, {
    key: "setBlockId",
    value: function setBlockId(id) {
      _get(_getPrototypeOf(MethodCallNode.prototype), "setBlockId", this).call(this, id); // NEED TO OVERRIDE BY TYPE...


      var _iterator37 = _createForOfIteratorHelper(this.getChildren()),
          _step37;

      try {
        for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
          var exp = _step37.value;
          exp.setBlockId(id);
        }
      } catch (err) {
        _iterator37.e(err);
      } finally {
        _iterator37.f();
      }

      var _iterator38 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _arguments2)),
          _step38;

      try {
        for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
          var item = _step38.value;

          var _iterator39 = _createForOfIteratorHelper(item),
              _step39;

          try {
            for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
              var a = _step39.value;
              a.setBlockId(id);
            }
          } catch (err) {
            _iterator39.e(err);
          } finally {
            _iterator39.f();
          }
        }
      } catch (err) {
        _iterator38.e(err);
      } finally {
        _iterator38.f();
      }
    }
    /**
     * Gets the name of the method that was called
     * @returns {String}
     */

  }, {
    key: "getMethodName",
    value: function getMethodName() {
      var children = this.getChildren();
      if (children.length < 3) throw new Error("No method expression available");
      return children[2].getTextValue();
    }
  }, {
    key: "getMethod",
    value: function getMethod() {
      var children = this.getChildren();
      if (children.length < 3) throw new Error("No method expression available");
      return children[2];
    }
    /**
     * Gets the expression that the method was called on
     * @returns {ExpressionNode}
     */

  }, {
    key: "getObject",
    value: function getObject() {
      var children = this.getChildren();
      if (children.length === 0) throw new Error("No children");
      return children[0];
    }
    /**
     * 
     * @returns {ExpressionNode[][]}
     */

  }, {
    key: "getArguments",
    value: function getArguments() {
      return _classPrivateFieldGet(this, _arguments2);
    }
    /**
     * Helper method that sets the data type based on the function called if the call is complete.
     */
    //#endregion - custom

  }]);

  return MethodCallNode;
}(MultiPartExpressionNode);

function _setArgsParent4() {
  var _iterator129 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _arguments2)),
      _step129;

  try {
    for (_iterator129.s(); !(_step129 = _iterator129.n()).done;) {
      var a = _step129.value;

      var _iterator130 = _createForOfIteratorHelper(a),
          _step130;

      try {
        for (_iterator130.s(); !(_step130 = _iterator130.n()).done;) {
          var part = _step130.value;
          part.setParent(this);
        }
      } catch (err) {
        _iterator130.e(err);
      } finally {
        _iterator130.f();
      }
    }
  } catch (err) {
    _iterator129.e(err);
  } finally {
    _iterator129.f();
  }
}

function _checkAndUpdateDataType4() {
  // If this is a complete method call - set the data type based on the method expression
  if (this.isComplete()) {
    this.setDataType(this.getChildren()[2].getDataType());
  } else {
    this.setDataType(_enums.DataType.NotParsed);
  }
}

function _checkUnusedReturn4(exp) {
  var symptoms = [];

  if (exp.getDataType() !== _enums.DataType.None && (exp.getParent() === undefined || exp.getParent().is(_enums.ExpressionEntity.GroupStatement) && exp.getParent().getParent() === undefined)) {
    symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnusedReturn, [exp], 0, 0, {
      expression: exp.getMethodExpression()
    }));
  }

  return symptoms;
}

function _checkPassesNone4(exp) {
  var symptoms = [];
  var values = exp.getArguments();

  var _iterator131 = _createForOfIteratorHelper(values),
      _step131;

  try {
    for (_iterator131.s(); !(_step131 = _iterator131.n()).done;) {
      var arg = _step131.value;
      var expandGroups = arg.flatMap(function (val) {
        return !val.is(_enums.ExpressionEntity.GroupStatement) ? val : val.getContents();
      });
      var noneValues = expandGroups.filter(function (val) {
        return (0, _utils.isNoneFunction)(val) || val.getDataType() === _enums.DataType.None && !val.isOneOf([_enums.ExpressionEntity.NoneType, _enums.ExpressionEntity.VariableName]);
      });

      if (noneValues.length > 0) {
        symptoms.push.apply(symptoms, _toConsumableArray(noneValues.map(function (val) {
          return _symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.AssignedNone, [val], 0, 0, {
            expression: val,
            usage: _constants.FUNCTION_ARG
          });
        })));
      }
    }
  } catch (err) {
    _iterator131.e(err);
  } finally {
    _iterator131.f();
  }

  return symptoms;
}

var _processVariableModification = /*#__PURE__*/new WeakSet();

var _checkIsValidMethod = /*#__PURE__*/new WeakSet();

var BuiltInMethodCall = /*#__PURE__*/function (_MethodCallNode) {
  _inherits(BuiltInMethodCall, _MethodCallNode);

  var _super10 = _createSuper(BuiltInMethodCall);

  /**
   * Creates a new BuiltInMethodCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function BuiltInMethodCall(textValue, children) {
    var _this7;

    _classCallCheck(this, BuiltInMethodCall);

    _this7 = _super10.call(this, textValue, children, _enums.ExpressionEntity.BuiltInMethodCall, _enums.ExpressionCategory.MethodCall);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this7), _checkIsValidMethod);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this7), _processVariableModification);

    _classPrivateMethodGet(_assertThisInitialized(_this7), _processVariableModification, _processVariableModification2).call(_assertThisInitialized(_this7));

    _this7.addRule(_classPrivateMethodGet(_assertThisInitialized(_this7), _checkIsValidMethod, _checkIsValidMethod2));

    return _this7;
  } // If the method called is a known modifier e.g. list remove, mark the variable it was called on as modified


  _createClass(BuiltInMethodCall, [{
    key: "isComplete",
    value: //#region - overrides    

    /**
     * @override
     */
    function isComplete() {
      return _get(_getPrototypeOf(BuiltInMethodCall.prototype), "isComplete", this).call(this) && this.getChildren()[2].isOneOf([_enums.ExpressionCategory.BuiltInMethods, _enums.ExpressionCategory.MagicMethods, _enums.ExpressionCategory.ModuleFunctions]);
    }
    /**
     * @override
     */

  }, {
    key: "isStringLiteral",
    value: function isStringLiteral() {
      return this.getMethodEntity() === _enums.ExpressionEntity.Format;
    } //#endregion - overrides

    /**
     * Rule function. Checks if the method called is valid for the object it was called on
     * @param {MethodCallNode} methodCall 
     * @returns {Symptom[]}
     */

  }]);

  return BuiltInMethodCall;
}(MethodCallNode);

exports.BuiltInMethodCall = BuiltInMethodCall;

function _processVariableModification2() {
  if (_utils.modifyingMethodsLookup.has(this.getMethodEntity())) {
    var obj = this.getObject();

    if (obj.is(_enums.ExpressionEntity.VariableName)) {
      // set the data type of obj
      obj.setAssignedOrChanged();
    } else if (obj.is(_enums.ExpressionEntity.SubscriptedExpression) && obj.getChildren()[0].is(_enums.ExpressionEntity.VariableName)) {
      // set the data type of obj
      obj.getChildren()[0].setAssignedOrChanged();
    }
  }
}

function _checkIsValidMethod2(methodCall) {
  var symptoms = [];
  var obj = methodCall.getObject();
  var objType = obj.getDataType();
  var method = methodCall.getMethod();
  var isValid = true;

  switch (objType) {
    case _enums.DataType.Number:
    case _enums.DataType.Int:
    case _enums.DataType.Float:
    case _enums.DataType.Bool:
    case _enums.DataType.None:
      isValid = false;

    default:
      break;
  }

  if (isValid && _utils.validMethodLookup.has(objType)) {
    isValid = _utils.validMethodLookup.get(objType).has(method.getEntity()) || method.is(_enums.ExpressionCategory.MagicMethods);
  }

  if (!isValid) {
    var expressions = methodCall.getChildren();
    symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnknownMethod, expressions, 0, expressions.length - 1, {
      objectType: objType.name
    }));
  }

  return symptoms;
}

var _checkIsValidMethod3 = /*#__PURE__*/new WeakSet();

var UserDefinedMethodCall = /*#__PURE__*/function (_MethodCallNode2) {
  _inherits(UserDefinedMethodCall, _MethodCallNode2);

  var _super11 = _createSuper(UserDefinedMethodCall);

  /**
   * Creates a new UserDefinedMethodCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function UserDefinedMethodCall(textValue, children) {
    var _this8;

    _classCallCheck(this, UserDefinedMethodCall);

    _this8 = _super11.call(this, textValue, children, _enums.ExpressionEntity.UserDefinedMethodCall, _enums.ExpressionCategory.MethodCall);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this8), _checkIsValidMethod3);

    _this8.addRule(_classPrivateMethodGet(_assertThisInitialized(_this8), _checkIsValidMethod3, _checkIsValidMethod4));

    return _this8;
  } //#region - overrides    

  /**
   * @override
   */


  _createClass(UserDefinedMethodCall, [{
    key: "isComplete",
    value: function isComplete() {
      return _get(_getPrototypeOf(UserDefinedMethodCall.prototype), "isComplete", this).call(this) && this.getChildren()[2].is(_enums.ExpressionEntity.MethodName);
    } //#endregion - overrides

    /**
     * Checks if the method called is valid for the object it was called on
     * @param {MethodCallNode} methodCall 
     * @returns {Symptom[]}
     */

  }]);

  return UserDefinedMethodCall;
}(MethodCallNode);

exports.UserDefinedMethodCall = UserDefinedMethodCall;

function _checkIsValidMethod4(methodCall) {
  var symptoms = [];
  var obj = methodCall.getObject();
  var objType = obj.getDataType(); // if known type, can't be valid if its a user defined method

  if (_utils.validMethodLookup.has(objType)) {
    var expressions = methodCall.getChildren();
    symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnknownMethod, expressions, 0, expressions.length - 1, {
      objectType: objType.name
    }));
  }

  return symptoms;
}

var _object = /*#__PURE__*/new WeakMap();

var _property = /*#__PURE__*/new WeakMap();

var _checkUnused = /*#__PURE__*/new WeakSet();

var _checkAndUpdateDataType5 = /*#__PURE__*/new WeakSet();

var PropertyCallNode = /*#__PURE__*/function (_MultiPartExpressionN5) {
  _inherits(PropertyCallNode, _MultiPartExpressionN5);

  var _super12 = _createSuper(PropertyCallNode);

  /** @type {ExpressionNode} */

  /** @type {ExpressionNode} */

  /**
   * Creates a new PropertyCallNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function PropertyCallNode(textValue, children, entity, category) {
    var _this9;

    _classCallCheck(this, PropertyCallNode);

    _this9 = _super12.call(this, textValue, children, entity, category);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this9), _checkAndUpdateDataType5);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this9), _checkUnused);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this9), _object, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this9), _property, {
      writable: true,
      value: void 0
    });

    if (_this9.isComplete()) {
      _classPrivateFieldSet(_assertThisInitialized(_this9), _object, children[0]);

      _classPrivateFieldSet(_assertThisInitialized(_this9), _property, children[2]);
    }

    _classPrivateMethodGet(_assertThisInitialized(_this9), _checkAndUpdateDataType5, _checkAndUpdateDataType6).call(_assertThisInitialized(_this9));

    _this9.addRule(_classPrivateMethodGet(_assertThisInitialized(_this9), _checkUnused, _checkUnused2));

    return _this9;
  } //#region - overrides

  /**
   * @inheritdoc
   */


  _createClass(PropertyCallNode, [{
    key: "isComplete",
    value: function isComplete() {
      var children = this.getChildren();
      return children.length == 3 && children[1].is(_enums.ExpressionEntity.Dot);
    }
    /**
     * @override
     */

  }, {
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      var variables = [];

      if (_classPrivateFieldGet(this, _object).is(_enums.ExpressionEntity.VariableName)) {
        variables.push(_classPrivateFieldGet(this, _object));
      } else {
        variables = variables.concat(_classPrivateFieldGet(this, _object).getVariableExpressions());
      }

      return variables;
    }
    /**
     * Gets all expressions that match the given entity
     * @param {ExpressionEntity} entity 
     * @returns {ExpressionNode[]}
     * @override
     */

  }, {
    key: "getExpressionsOfKind",
    value: function getExpressionsOfKind(entity) {
      var matches = _get(_getPrototypeOf(PropertyCallNode.prototype), "getExpressionsOfKind", this).call(this, entity);

      var _iterator40 = _createForOfIteratorHelper(this.getChildren()),
          _step40;

      try {
        for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
          var item = _step40.value;

          if (item.is(entity)) {
            matches.push(item);
          } else {
            matches = matches.concat(item.getExpressionsOfKind(entity));
          }
        }
      } catch (err) {
        _iterator40.e(err);
      } finally {
        _iterator40.f();
      }

      return matches;
    }
    /**
     * Gets the first expressions that matches any of the search info.
     * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
     * @returns {ExpressionNode | undefined}
     */

  }, {
    key: "getFirstExpressionOf",
    value: function getFirstExpressionOf(entities) {
      var match = _get(_getPrototypeOf(PropertyCallNode.prototype), "getFirstExpressionOf", this).call(this, entities);

      if (match === undefined) {
        var _iterator41 = _createForOfIteratorHelper(this.getChildren()),
            _step41;

        try {
          for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
            var c = _step41.value;

            if (c.isOneOf(entities)) {
              return c;
            } else {
              match = c.getFirstExpressionOf(entities);
              if (match !== undefined) return match;
            }
          }
        } catch (err) {
          _iterator41.e(err);
        } finally {
          _iterator41.f();
        }
      }

      return match;
    }
    /**
     * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
     * the type of node, this will need to be an exact match (by text value and entity) or a
     * category match.
     * @param {ExpressionNode} node 
     * @returns {Boolean}
     * @override
     */

  }, {
    key: "matchesPattern",
    value: function matchesPattern(node) {
      return _get(_getPrototypeOf(PropertyCallNode.prototype), "matchesPattern", this).call(this, node) && this.getTextValue() === node.getTextValue();
    } //#endregion - overrides
    //#region - custom

    /**
     * Rule function. Checks if the property is unused
     * @param {PropertyCallNode} exp 
     * @returns {Symptom[]}
     */
    //#endregion - custom

  }]);

  return PropertyCallNode;
}(MultiPartExpressionNode); //#endregion - multipart functions and methods


exports.PropertyCallNode = PropertyCallNode;

function _checkUnused2(exp) {
  var symptoms = [];

  if (exp.getParent() === undefined || exp.getParent().is(_enums.ExpressionEntity.GroupStatement) && exp.getParent().getParent() === undefined) {
    symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnusedValue, [exp], 0, 0));
  }

  return symptoms;
}

function _checkAndUpdateDataType6() {
  // If this is a complete method call - set the data type based on the method expression
  if (this.isComplete()) {
    if (_classPrivateFieldGet(this, _property).getCategory() === _enums.ExpressionCategory.ModuleProperties) {
      this.setDataType(_utils.builtInReturnLookup.get(_classPrivateFieldGet(this, _property).getEntity()));
    } else {
      this.setDataType(_enums.DataType.Unknown);
    }
  } else {
    this.setDataType(_enums.DataType.NotParsed);
  }
}

var SubscriptableNode = /*#__PURE__*/function (_ExpressionNode2) {
  _inherits(SubscriptableNode, _ExpressionNode2);

  var _super13 = _createSuper(SubscriptableNode);

  function SubscriptableNode() {
    _classCallCheck(this, SubscriptableNode);

    return _super13.apply(this, arguments);
  }

  _createClass(SubscriptableNode, [{
    key: "isSubscriptable",
    value:
    /**
     * @inheritdoc
     */
    function isSubscriptable() {
      return true;
    }
  }]);

  return SubscriptableNode;
}(ExpressionNode); //#region - literals


var _checkUnused3 = /*#__PURE__*/new WeakSet();

var StringLiteralExpression = /*#__PURE__*/function (_SubscriptableNode) {
  _inherits(StringLiteralExpression, _SubscriptableNode);

  var _super14 = _createSuper(StringLiteralExpression);

  /**
   * 
   * @param {String} textValue 
   * @param {Number} startLineNumber 
   * @param {Number} documentStartIndex 
   * @param {Number} indexOnLine
   * @param {Number} documentEndIndex 
   * @param {Number} endLineNumber 
   */
  function StringLiteralExpression(textValue, startLineNumber, documentStartIndex, indexOnLine) {
    var _this10;

    var documentEndIndex = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : documentStartIndex + textValue.length;
    var endLineNumber = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : startLineNumber;

    _classCallCheck(this, StringLiteralExpression);

    _this10 = _super14.call(this, textValue, _enums.ExpressionEntity.StringLiteral, _enums.ExpressionCategory.Literals, startLineNumber, documentStartIndex, indexOnLine, _enums.DataType.String, documentEndIndex, endLineNumber);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this10), _checkUnused3);

    _this10.addRule(_classPrivateMethodGet(_assertThisInitialized(_this10), _checkUnused3, _checkUnused4));

    return _this10;
  }
  /**
   * @override
   */


  _createClass(StringLiteralExpression, [{
    key: "isStringLiteral",
    value: function isStringLiteral() {
      return true;
    }
    /**
     * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
     * the type of node, this will need to be an exact match (by text value and entity) or a
     * category match.
     * @param {ExpressionNode} node 
     * @returns {Boolean}
     * @override
     */

  }, {
    key: "matchesPattern",
    value: function matchesPattern(node) {
      return node.getEntity() === _enums.ExpressionEntity.StringLiteral || node.getEntity() === _enums.ExpressionEntity.CombinedStringLiteral || node.getEntity() === _enums.ExpressionEntity.FString;
    }
    /**
     * Inherited method. Overridden to do nothing. DataType of a literal should not be changed.
     * @override
     * @param {DataType} dataType 
     * @throws Throws an error if a calling function tries to change the data type
     */

  }, {
    key: "setDataType",
    value: function setDataType(dataType) {
      throw new Error("Cannot change the data type of a String literal. Attempted to change the type to: ".concat(dataType.name, "."));
    }
    /**
     * Updates the expression contents when additional content is added.
     * @param {Number} documentEndLine The ending line number of the expression
     * @param {Number} documentEndIndex The index of the end of the expression text in the document text
     * @param {String} textValueToAdd The string text to add to the existing text.
     */

  }, {
    key: "update",
    value: function update(documentEndLine, documentEndIndex, textValueToAdd) {
      this.setEndLineNumber(documentEndLine);
      this.documentEndIndex(documentEndIndex);
      this.setTextValue(this.getTextValue + textValueToAdd);
    }
    /**
     * Rule function. Checks if the property is unused
     * @param {StringLiteralExpression} exp 
     * @returns {Symptom[]}
     */

  }]);

  return StringLiteralExpression;
}(SubscriptableNode);

exports.StringLiteralExpression = StringLiteralExpression;

function _checkUnused4(exp) {
  var symptoms = [];

  if (exp.getParent() === undefined || exp.getParent().is(_enums.ExpressionEntity.GroupStatement) && exp.getParent().getParent() === undefined) {
    symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnusedValue, [exp], 0, 0));
  }

  return symptoms;
}

var _checkUnused5 = /*#__PURE__*/new WeakSet();

var NumberLiteral = /*#__PURE__*/function (_ExpressionNode3) {
  _inherits(NumberLiteral, _ExpressionNode3);

  var _super15 = _createSuper(NumberLiteral);

  /**
   * Creates an ExpressionNode
   * @param {String} textValue The text value of the node
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  function NumberLiteral(textValue, startLineNumber, documentStartIndex, indexOnLine) {
    var _this11;

    _classCallCheck(this, NumberLiteral);

    var numberEntity = textValue.indexOf(".") >= 0 ? _enums.ExpressionEntity.FloatLiteral : _enums.ExpressionEntity.IntLiteral;
    _this11 = _super15.call(this, textValue, numberEntity, _enums.ExpressionCategory.Literals, startLineNumber, documentStartIndex, indexOnLine, numberEntity === _enums.ExpressionEntity.FloatLiteral ? _enums.DataType.Float : _enums.DataType.Int);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this11), _checkUnused5);

    _this11.addRule(_classPrivateMethodGet(_assertThisInitialized(_this11), _checkUnused5, _checkUnused6));

    return _this11;
  }
  /**
   * Inherited method. Overridden to do nothing. DataType of a literal should not be changed.
   * @override
   * @param {DataType} dataType 
   * @throws Throws an error if a calling function tries to change the data type
   */


  _createClass(NumberLiteral, [{
    key: "setDataType",
    value: function setDataType(dataType) {
      throw new Error("Cannot change the data type of a bumber literal. Attempted to change the type to: ".concat(dataType.name, "."));
    }
    /**
     * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
     * the type of node, this will need to be an exact match (by text value and entity) or a
     * category match.
     * @param {ExpressionNode} node 
     * @returns {Boolean}
     * @override
     */

  }, {
    key: "matchesPattern",
    value: function matchesPattern(node) {
      return node.getEntity() === _enums.ExpressionEntity.FloatLiteral || node.getEntity() === _enums.ExpressionEntity.IntLiteral;
    }
    /**
     * Rule function. Checks if the property is unused
     * @param {NumberLiteral} exp 
     * @returns {Symptom[]}
     */

  }]);

  return NumberLiteral;
}(ExpressionNode);

exports.NumberLiteral = NumberLiteral;

function _checkUnused6(exp) {
  var symptoms = [];

  if (exp.getParent() === undefined || exp.getParent().is(_enums.ExpressionEntity.GroupStatement) && exp.getParent().getParent() === undefined) {
    symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnusedValue, [exp], 0, 0));
  }

  return symptoms;
}

var _values = /*#__PURE__*/new WeakMap();

var _parseValues = /*#__PURE__*/new WeakSet();

var _checkUnused7 = /*#__PURE__*/new WeakSet();

var FStringExpression = /*#__PURE__*/function (_MultiPartExpressionN6) {
  _inherits(FStringExpression, _MultiPartExpressionN6);

  var _super16 = _createSuper(FStringExpression);

  /** @type {ExpressionNode[][]} */
  // The values used to create the string e.g. variables

  /**
   * Creates a new UserDefinedMethodCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function FStringExpression(textValue, children) {
    var _this12;

    _classCallCheck(this, FStringExpression);

    _this12 = _super16.call(this, textValue, children, _enums.ExpressionEntity.FString, _enums.ExpressionCategory.Literals, _enums.DataType.String);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this12), _checkUnused7);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this12), _parseValues);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this12), _values, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this12), _values, _classPrivateMethodGet(_assertThisInitialized(_this12), _parseValues, _parseValues2).call(_assertThisInitialized(_this12)));

    var _iterator42 = _createForOfIteratorHelper(_classPrivateFieldGet(_assertThisInitialized(_this12), _values)),
        _step42;

    try {
      for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
        var v = _step42.value;

        var _iterator43 = _createForOfIteratorHelper(v),
            _step43;

        try {
          for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
            var e = _step43.value;
            e.setParent(_assertThisInitialized(_this12));
          }
        } catch (err) {
          _iterator43.e(err);
        } finally {
          _iterator43.f();
        }
      }
    } catch (err) {
      _iterator42.e(err);
    } finally {
      _iterator42.f();
    }

    _this12.addRule(_classPrivateMethodGet(_assertThisInitialized(_this12), _checkUnused7, _checkUnused8));

    return _this12;
  } //#region - overrides

  /**
   * @override
   */


  _createClass(FStringExpression, [{
    key: "isStringLiteral",
    value: function isStringLiteral() {
      return true;
    }
    /**
     * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
     * the type of node, this will need to be an exact match (by text value and entity) or a
     * category match.
     * @param {ExpressionNode} node 
     * @returns {Boolean}
     * @override
     */

  }, {
    key: "matchesPattern",
    value: function matchesPattern(node) {
      return node.getEntity() === _enums.ExpressionEntity.StringLiteral || node.getEntity() === _enums.ExpressionEntity.CombinedStringLiteral || node.getEntity() === _enums.ExpressionEntity.FString;
    }
    /**
     * @override
     */

  }, {
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      var variables = [];

      var _iterator44 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _values)),
          _step44;

      try {
        for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
          var v = _step44.value;

          var _iterator45 = _createForOfIteratorHelper(v),
              _step45;

          try {
            for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
              var item = _step45.value;

              if (item.is(_enums.ExpressionEntity.VariableName)) {
                variables.push(item);
              } else {
                variables = variables.concat(item.getVariableExpressions());
              }
            }
          } catch (err) {
            _iterator45.e(err);
          } finally {
            _iterator45.f();
          }
        }
      } catch (err) {
        _iterator44.e(err);
      } finally {
        _iterator44.f();
      }

      return variables;
    }
    /**
     * @override
     */

  }, {
    key: "checkForSymptoms",
    value: function checkForSymptoms() {
      this.checkRules(this);

      var _iterator46 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _values)),
          _step46;

      try {
        for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
          var v = _step46.value;

          var _iterator47 = _createForOfIteratorHelper(v),
              _step47;

          try {
            for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
              var item = _step47.value;
              item.checkForSymptoms();
            }
          } catch (err) {
            _iterator47.e(err);
          } finally {
            _iterator47.f();
          }
        }
      } catch (err) {
        _iterator46.e(err);
      } finally {
        _iterator46.f();
      }
    }
    /**
     * @override
     */

  }, {
    key: "setBlockId",
    value: function setBlockId(id) {
      _get(_getPrototypeOf(FStringExpression.prototype), "setBlockId", this).call(this, id); // NEED TO OVERRIDE BY TYPE...


      var _iterator48 = _createForOfIteratorHelper(this.getChildren()),
          _step48;

      try {
        for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
          var exp = _step48.value;
          exp.setBlockId(id);
        }
      } catch (err) {
        _iterator48.e(err);
      } finally {
        _iterator48.f();
      }

      var _iterator49 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _values)),
          _step49;

      try {
        for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
          var item = _step49.value;

          var _iterator50 = _createForOfIteratorHelper(item),
              _step50;

          try {
            for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
              var v = _step50.value;
              v.setBlockId(id);
            }
          } catch (err) {
            _iterator50.e(err);
          } finally {
            _iterator50.f();
          }
        }
      } catch (err) {
        _iterator49.e(err);
      } finally {
        _iterator49.f();
      }
    } //#endregion - overrides
    //#region - extensions

    /**
     * Gets the values used to populate the string
     * @returns {ExpressionNode[][]}
     */

  }, {
    key: "getValues",
    value: function getValues() {
      return _classPrivateFieldGet(this, _values);
    }
    /**
     * Parses the string literal to find the values in {} and returns a 2D
     * ExpressionNode array.
     * @returns {ExpressionNode[][]}
     */
    //#endregion - extensions

  }]);

  return FStringExpression;
}(MultiPartExpressionNode);

exports.FStringExpression = FStringExpression;

function _parseValues2() {
  // Find the {}
  // Ignore anything from : on
  // Send the contents to SourceProcessor
  var values = [];

  if (this.isComplete()) {
    var strLiteral = this.getChildren()[1];
    var strText = strLiteral.getTextValue();
    var openBrace = 0;
    var openSquare = 0;
    var contentIndex = -1;
    var colonIndex = -1;

    for (var i = 0; i < strText.length; i++) {
      if (strText.charAt(i) === "{") {
        if (openBrace === 0) {
          contentIndex = i + 1;
        }

        openBrace++;
      } else if (openBrace > 0) {
        if (strText.charAt(i) === "}") {
          openBrace--;

          if (openBrace === 0) {
            var contentText = colonIndex === -1 ? strText.substring(contentIndex, i) : strText.substring(contentIndex, colonIndex);
            var parsed = new _rawtextprocessing.SourceProcessor(contentText, strLiteral.getStartLineNumber(), strLiteral.getDocumentStartIndex());
            values.push(_rawtextprocessing.StatementProcessor.createTree(parsed.getExpressions()));
          }
        } else if (strText.charAt(i) === "[") openSquare++;else if (strText.charAt(i) === "]") openSquare--;else if (openSquare === 0 && strText.charAt(i) === ":") colonIndex = i;
      }
    }
  }

  return values;
}

function _checkUnused8(exp) {
  var symptoms = [];

  if (exp.getParent() === undefined || exp.getParent().is(_enums.ExpressionEntity.GroupStatement) && exp.getParent().getParent() === undefined) {
    symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnusedValue, [exp], 0, 0));
  }

  return symptoms;
}

var _checkUnused9 = /*#__PURE__*/new WeakSet();

var CombinedStringLiteral = /*#__PURE__*/function (_MultiPartExpressionN7) {
  _inherits(CombinedStringLiteral, _MultiPartExpressionN7);

  var _super17 = _createSuper(CombinedStringLiteral);

  /**
   * Creates a new CombinedStringLiteral
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function CombinedStringLiteral(textValue, children) {
    var _this13;

    _classCallCheck(this, CombinedStringLiteral);

    _this13 = _super17.call(this, textValue, children, _enums.ExpressionEntity.CombinedStringLiteral, _enums.ExpressionCategory.Literals, _enums.DataType.String);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this13), _checkUnused9);

    _this13.addRule(_classPrivateMethodGet(_assertThisInitialized(_this13), _checkUnused9, _checkUnused10));

    return _this13;
  } //#region - overrides


  _createClass(CombinedStringLiteral, [{
    key: "isStringLiteral",
    value: function isStringLiteral() {
      return true;
    }
    /**
     * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
     * the type of node, this will need to be an exact match (by text value and entity) or a
     * category match.
     * @param {ExpressionNode} node 
     * @returns {Boolean}
     * @override
     */

  }, {
    key: "matchesPattern",
    value: function matchesPattern(node) {
      return node.getEntity() === _enums.ExpressionEntity.StringLiteral || node.getEntity() === _enums.ExpressionEntity.CombinedStringLiteral || node.getEntity() === _enums.ExpressionEntity.FString;
    }
    /**
     * @override
     */

  }, {
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      var variables = [];

      var _iterator51 = _createForOfIteratorHelper(this.getChildren()),
          _step51;

      try {
        for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
          var child = _step51.value;
          //if (child.is(ExpressionEntity.FString)) {
          variables = variables.concat(child.getVariableExpressions()); //}
        }
      } catch (err) {
        _iterator51.e(err);
      } finally {
        _iterator51.f();
      }

      return variables;
    } //#endregion - overrides

    /**
     * Rule function. Checks if the property is unused
     * @param {CombinedStringLiteral} exp 
     * @returns {Symptom[]}
     */

  }]);

  return CombinedStringLiteral;
}(MultiPartExpressionNode); //#endregion - literals
//#region - keywords and operators


exports.CombinedStringLiteral = CombinedStringLiteral;

function _checkUnused10(exp) {
  var symptoms = [];

  if (exp.getParent() === undefined || exp.getParent().is(_enums.ExpressionEntity.GroupStatement) && exp.getParent().getParent() === undefined) {
    symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnusedValue, [exp], 0, 0));
  }

  return symptoms;
}

var KeywordOrOperatorExpression = /*#__PURE__*/function (_ExpressionNode4) {
  _inherits(KeywordOrOperatorExpression, _ExpressionNode4);

  var _super18 = _createSuper(KeywordOrOperatorExpression);

  /**
   * Creates an ExpressionNode
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  function KeywordOrOperatorExpression(textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine) {
    _classCallCheck(this, KeywordOrOperatorExpression);

    return _super18.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, _enums.DataType.NA);
  }
  /**
   * Inherited method. Overridden to do nothing and throw an error. DataType of a literal should not be changed.
   * @override
   * @param {DataType} dataType 
   * @throws Throws an error because the data type of a keyword or operator should not change.
   */


  _createClass(KeywordOrOperatorExpression, [{
    key: "setDataType",
    value: function setDataType(dataType) {
      throw new Error("Cannot change the data type of a keyword or operator. Attempted to change the type to: ".concat(dataType.name, "."));
    }
    /**
     * Inherited method. Overriden to do nothing and throw an error.
     * @override
     * @param {String} value 
     * @throws Throws an error because the text value of a keyword or operator should not change.
     */

  }, {
    key: "setTextValue",
    value: function setTextValue(value) {
      throw new Error("Cannot change the value of a keyword or operator. Attempted to change the value to ".concat(value, "."));
    }
    /**
     * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
     * the type of node, this will need to be an exact match (by text value and entity) or a
     * category match.
     * @param {ExpressionNode} node 
     * @returns {Boolean}
     * @override
     */

  }, {
    key: "matchesPattern",
    value: function matchesPattern(node) {
      if (this.getEntity() === node.getEntity()) {
        return true;
      } else if (this.isOneOf([_enums.ExpressionCategory.ComparisonOperators, _enums.ExpressionCategory.LogicalOperators, _enums.ExpressionCategory.MathsOperators])) {
        return node.getCategory();
      }

      return false;
    }
  }]);

  return KeywordOrOperatorExpression;
}(ExpressionNode); //#endregion - keywords and operators
//#region - identifiers / objects


exports.KeywordOrOperatorExpression = KeywordOrOperatorExpression;

var _moduleName = /*#__PURE__*/new WeakMap();

var ModuleExpression = /*#__PURE__*/function (_ExpressionNode5) {
  _inherits(ModuleExpression, _ExpressionNode5);

  var _super19 = _createSuper(ModuleExpression);

  /** @type {String} */

  /**
   * Creates an ExpressionNode
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  function ModuleExpression(textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine) {
    var _this14;

    _classCallCheck(this, ModuleExpression);

    _this14 = _super19.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, (0, _utils.typeByEntity)(entity));

    _classPrivateFieldInitSpec(_assertThisInitialized(_this14), _moduleName, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this14), _moduleName, textValue); // default


    return _this14;
  }
  /**
   * Checks whether this module has been given an alias
   * @returns {Boolean} True if the module has an alias that is different from its original name, false otherwise.
   */


  _createClass(ModuleExpression, [{
    key: "hasAlias",
    value: function hasAlias() {
      return _classPrivateFieldGet(this, _moduleName) !== this.getTextValue();
    }
    /**
     * Gets the module alias
     * @returns {String} The module alias
     */

  }, {
    key: "getModuleName",
    value: function getModuleName() {
      return _classPrivateFieldGet(this, _moduleName);
    }
    /**
     * Sets the module name for the module - will happen if the text value is an alias
     * @param {String} name 
     */

  }, {
    key: "setModuleName",
    value: function setModuleName(name) {
      _classPrivateFieldSet(this, _moduleName, name);
    }
    /**
     * Inherited method. Overridden to do nothing and throw an error.
     * @override
     * @param {DataType} dataType 
     * @throws Throws an error because the data type of a module cannot be changes
     */

  }, {
    key: "setDataType",
    value: function setDataType(dataType) {
      throw new Error("The data type of a module cannot be changed. Attempted to change the data type to ".concat(dataType, "."));
    }
    /**
     * Inherited method. Overridden to do nothing and throw an error.
     * @override
     * @param {String} value 
     * @throws Throws an error because the text value should not be changed.
     */

  }, {
    key: "setTextValue",
    value: function setTextValue(value) {
      throw new Error("The text value of a module cannot be changed. Attempted to change the value to ".concat(value, "."));
    }
    /**
     * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
     * the type of node, this will need to be an exact match (by text value and entity) or a
     * category match.
     * @param {ExpressionNode} node 
     * @returns {Boolean}
     * @override
     */

  }, {
    key: "matchesPattern",
    value: function matchesPattern(node) {
      return this.getEntity() === node.getEntity() === this.getTextValue() && node.getTextValue();
    }
  }]);

  return ModuleExpression;
}(ExpressionNode);

exports.ModuleExpression = ModuleExpression;

var _lastUsages = /*#__PURE__*/new WeakMap();

var _isAssignedOrChanged = /*#__PURE__*/new WeakMap();

var _proxy = /*#__PURE__*/new WeakMap();

var _isParameter = /*#__PURE__*/new WeakMap();

var _getTypeOfPriorUsages = /*#__PURE__*/new WeakSet();

var _checkUnused11 = /*#__PURE__*/new WeakSet();

var _checkOverwrites = /*#__PURE__*/new WeakSet();

var _assignedWithSelf = /*#__PURE__*/new WeakSet();

var _compareAllUsages = /*#__PURE__*/new WeakSet();

var _getLoopVarValue = /*#__PURE__*/new WeakSet();

var _getAssignedValue = /*#__PURE__*/new WeakSet();

var VariableExpression = /*#__PURE__*/function (_ExpressionNode6) {
  _inherits(VariableExpression, _ExpressionNode6);

  var _super20 = _createSuper(VariableExpression);

  /**
   * @type {VariableExpression[]}
   */

  /**
   * @type {Boolean}
   */

  /**
   * @type {Boolean}
   */

  /**
   * @type {Boolean}
   */

  /**
   * Creates a VariableExpression
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   * @param {Boolean} proxy Optional. Used to indicate that is a "proxy" variable used to support an operation rather than a "real" instance of a variable in the source code
   */
  function VariableExpression(textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine) {
    var _this15;

    var proxy = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

    _classCallCheck(this, VariableExpression);

    if (category === _enums.ExpressionCategory.Identifiers) {
      _this15 = _super20.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this15), _getAssignedValue);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this15), _getLoopVarValue);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this15), _compareAllUsages);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this15), _assignedWithSelf);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this15), _checkOverwrites);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this15), _checkUnused11);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this15), _getTypeOfPriorUsages);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this15), _lastUsages, {
        writable: true,
        value: []
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this15), _isAssignedOrChanged, {
        writable: true,
        value: false
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this15), _proxy, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this15), _isParameter, {
        writable: true,
        value: false
      });
    } else if (category === _enums.ExpressionCategory.SpecialVariables) {
      _this15 = _super20.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, (0, _utils.typeByEntity)(entity));

      _classPrivateMethodInitSpec(_assertThisInitialized(_this15), _getAssignedValue);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this15), _getLoopVarValue);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this15), _compareAllUsages);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this15), _assignedWithSelf);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this15), _checkOverwrites);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this15), _checkUnused11);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this15), _getTypeOfPriorUsages);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this15), _lastUsages, {
        writable: true,
        value: []
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this15), _isAssignedOrChanged, {
        writable: true,
        value: false
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this15), _proxy, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this15), _isParameter, {
        writable: true,
        value: false
      });
    } else if (category === _enums.ExpressionCategory.ModuleProperties) {
      _this15 = _super20.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, _utils.builtInReturnLookup.get(entity));

      _classPrivateMethodInitSpec(_assertThisInitialized(_this15), _getAssignedValue);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this15), _getLoopVarValue);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this15), _compareAllUsages);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this15), _assignedWithSelf);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this15), _checkOverwrites);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this15), _checkUnused11);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this15), _getTypeOfPriorUsages);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this15), _lastUsages, {
        writable: true,
        value: []
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this15), _isAssignedOrChanged, {
        writable: true,
        value: false
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this15), _proxy, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this15), _isParameter, {
        writable: true,
        value: false
      });
    } else {
      throw new Error("No constructor for VariableExpression with ".concat(entity.name));
    }

    _classPrivateFieldSet(_assertThisInitialized(_this15), _proxy, proxy);

    _this15.addRules([_classPrivateMethodGet(_assertThisInitialized(_this15), _checkOverwrites, _checkOverwrites2), _classPrivateMethodGet(_assertThisInitialized(_this15), _checkUnused11, _checkUnused12)]);

    return _possibleConstructorReturn(_this15);
  } //#region - overrides

  /**
   * @override
   * @param {String} value 
   * @throws Throws an error if calling code tries to change the variable's text value.
   */


  _createClass(VariableExpression, [{
    key: "setTextValue",
    value: function setTextValue(value) {
      throw new Error("Cannot change the text value of a variable (its name). Attempted to change the value to ".concat(value, "."));
    }
  }, {
    key: "setIsParameter",
    value: function setIsParameter() {
      _classPrivateFieldSet(this, _isParameter, true);
    }
  }, {
    key: "isParameter",
    value: function isParameter() {
      return _classPrivateFieldGet(this, _isParameter);
    }
    /**
     * @inheritdoc
     * @override
     */

  }, {
    key: "isSubscriptable",
    value: function isSubscriptable() {
      return (0, _utils.typeCanBeSubscripted)(this.getDataType());
    }
    /**
     * @override
     */

  }, {
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      return this.is(_enums.ExpressionEntity.VariableName) ? [this] : [];
    }
  }, {
    key: "setDataType",
    value: function setDataType(dataType) {
      if ((!this.isAssignedOrChanged() || this.isObjectOfMethodCall() || this.isSubscripted()) && _classPrivateFieldGet(this, _lastUsages).length > 0) {
        dataType = _classPrivateMethodGet(this, _getTypeOfPriorUsages, _getTypeOfPriorUsages2).call(this);
      }

      _get(_getPrototypeOf(VariableExpression.prototype), "setDataType", this).call(this, dataType);
    }
    /**
     * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
     * the type of node, this will need to be an exact match (by text value and entity) or a
     * category match.
     * @param {ExpressionNode} node 
     * @returns {Boolean}
     * @override
     */

  }, {
    key: "matchesPattern",
    value: function matchesPattern(node) {
      var other = node;

      if (other.is(_enums.ExpressionEntity.BooleanExpression) && node.getChildren().length === 2 && node.getChildren()[0].is(_enums.ExpressionEntity.NotOperator) && node.getChildren()[1].is(_enums.ExpressionEntity.VariableName)) {
        other = node.getChildren()[1];
      }

      return this.getEntity() === other.getEntity() && this.getTextValue() === other.getTextValue();
    } //#endregion - overrides
    //#region - extension methods

    /**
     * Gets the last usages of this variable.
     * @returns {VariableExpression[]}
     */

  }, {
    key: "getLastUsages",
    value: function getLastUsages() {
      return _classPrivateFieldGet(this, _lastUsages);
    }
    /**
     * Adds a VariableExpression to the last usages array. Should only be used when the 
     * variable has not been assigned or changed.
     * @param {VariableExpression} varExpression 
     */

  }, {
    key: "addLastUsage",
    value: function addLastUsage(varExpression) {
      _classPrivateFieldGet(this, _lastUsages).push(varExpression);

      if (!this.isAssignedOrChanged() || this.isObjectOfMethodCall() || this.isSubscripted()) {
        this.setDataType(_classPrivateMethodGet(this, _getTypeOfPriorUsages, _getTypeOfPriorUsages2).call(this));
        varExpression.addObserver(this);
      }
    }
  }, {
    key: "isSubscripted",
    value: function isSubscripted() {
      var parent = this.getParent();
      if (parent === undefined) return false;
      return parent.is(_enums.ExpressionEntity.SubscriptedExpression);
    }
  }, {
    key: "isObjectOfMethodCall",
    value: function isObjectOfMethodCall() {
      var parent = this.getParent();
      if (parent === undefined) return false;
      return parent.is(_enums.ExpressionEntity.BuiltInMethodCall) && parent.getChildren()[0].getTextValue() === this.getTextValue();
    }
    /**
     * Overwrites the lastUsages array with the provided usages.
     * @param {VariableExpression[]} usages 
     */

  }, {
    key: "setLastUsages",
    value: function setLastUsages(usages) {
      _classPrivateFieldSet(this, _lastUsages, usages);

      this.setDataType(_classPrivateMethodGet(this, _getTypeOfPriorUsages, _getTypeOfPriorUsages2).call(this));

      var _iterator52 = _createForOfIteratorHelper(usages),
          _step52;

      try {
        for (_iterator52.s(); !(_step52 = _iterator52.n()).done;) {
          var usage = _step52.value;
          usage.addObserver(this);
        }
      } catch (err) {
        _iterator52.e(err);
      } finally {
        _iterator52.f();
      }
    }
    /**
     * Whether or not this variable's value is set
     * @returns {Boolean}
     */

  }, {
    key: "isAssignedOrChanged",
    value: function isAssignedOrChanged() {
      return _classPrivateFieldGet(this, _isAssignedOrChanged);
    }
    /**
     * Marks this variable as assigned or changed
     */

  }, {
    key: "setAssignedOrChanged",
    value: function setAssignedOrChanged() {
      _classPrivateFieldSet(this, _isAssignedOrChanged, true);
    }
  }, {
    key: "isProxy",
    value:
    /**
     * Whether or not this variable expression is a proxy, rather than a real instance that
     * appears in the source code
     * @returns {Boolean}
     */
    function isProxy() {
      return _classPrivateFieldGet(this, _proxy);
    }
    /**
     * Rule function. Checks if the property is unused
     * @param {VariableExpression} exp 
     * @returns {Symptom[]}
     */

  }, {
    key: "compareValues",
    value:
    /**
     * Helper method to compare the value assigned to this variable with the value assigned in previous
     * usages. Only checks if current is part of an assignment and all last usages are part of an assignment,
     * otherwise returns UNKNOWN.
     * Only checks if current is assigned a literal value, otherwise returns UNKNONW
     * @param {VariableExpression} current 
     * @param {VariableExpression[]} lastUsages 
     * @returns {SAME_VALUE | DIFFERENT_VALUE | UNKNOWN}
     */
    function compareValues(current, lastUsages) {
      var currentParent = current.getParent();
      if (currentParent === undefined) return _constants.UNKNOWN;
      var assignedValue = currentParent.is(_enums.ExpressionEntity.AssignmentStatement) ? _classPrivateMethodGet(this, _getAssignedValue, _getAssignedValue2).call(this, current) : currentParent.is(_enums.ExpressionEntity.IteratorExpression) ? _classPrivateMethodGet(this, _getLoopVarValue, _getLoopVarValue2).call(this, current) : undefined;

      var comparisonResults = _classPrivateMethodGet(this, _compareAllUsages, _compareAllUsages2).call(this, assignedValue, lastUsages);

      return comparisonResults.size === 1 ? Array.from(comparisonResults)[0] : _constants.UNKNOWN;
    }
    /**
     * Helper method for rule finder.
     * @param {ExpressionNode | undefined} assignedValue 
     * @param {VariableExpression[]} lastUsages 
     * @returns {Set<String>}
     */
    //#endregion - extension methods

  }]);

  return VariableExpression;
}(ExpressionNode);

exports.VariableExpression = VariableExpression;

function _getTypeOfPriorUsages2() {
  return (0, _utils.getAggregateType)(_classPrivateFieldGet(this, _lastUsages).map(function (v) {
    return v.getDataType();
  }));
}

function _checkUnused12(exp) {
  var symptoms = [];

  if (exp.getParent() === undefined || exp.getParent().is(_enums.ExpressionEntity.GroupStatement) && exp.getParent().getParent() === undefined) {
    symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnusedValue, [exp], 0, 0));
  }

  return symptoms;
}

function _checkOverwrites2(varExp) {
  var symptoms = [];
  var lastUsages = varExp.getLastUsages();
  var parent = varExp.getParent();

  if (!varExp.getScopeId().includes("listComprehension") && !varExp.isProxy() && varExp.isAssignedOrChanged() && lastUsages.length > 0 && parent !== undefined && parent.isOneOf([_enums.ExpressionEntity.AssignmentStatement, _enums.ExpressionEntity.IteratorExpression])) {
    if (parent.is(_enums.ExpressionEntity.AssignmentStatement) && _classPrivateMethodGet(varExp, _assignedWithSelf, _assignedWithSelf2).call(varExp, varExp.getTextValue(), parent)) {
      return symptoms;
    }

    var allAssigned = true;
    var currentBlockType = varExp.getBlockId().split("-")[1];

    var _iterator132 = _createForOfIteratorHelper(lastUsages),
        _step132;

    try {
      for (_iterator132.s(); !(_step132 = _iterator132.n()).done;) {
        var usage = _step132.value;

        if (usage.getScopeId() !== varExp.getScopeId()) {
          continue; // ignore if not in same scope
        }

        if (!usage.isAssignedOrChanged() || currentBlockType !== "for" && usage.getBlockId() !== varExp.getBlockId() //|| (usageParent !== undefined && usageParent.is(ExpressionEntity.IteratorExpression))
        ) {
          allAssigned = false;
          break;
        }
      }
    } catch (err) {
      _iterator132.e(err);
    } finally {
      _iterator132.f();
    }

    if (allAssigned) {
      symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.OverwrittenVariable, [varExp], 0, 0, {
        isParameter: lastUsages.length === 1 && lastUsages[0].isParameter(),
        prevUsageIsDefinition: lastUsages.length === 1 && lastUsages[0].getLastUsages().length === 0,
        overwriteType: parent.is(_enums.ExpressionEntity.AssignmentStatement) ? _constants.ASSIGNMENT : _constants.FOR_LOOP_VAR,
        overwriteValue: varExp.compareValues(varExp, lastUsages),
        overwrittenVar: lastUsages.map(function (u) {
          return {
            lineNum: u.getStartLineNumber(),
            block: u.getBlockId()
          };
        })
      }));
    }
  }

  return symptoms;
}

function _assignedWithSelf2(varName, assignmentExp) {
  var values = assignmentExp.getAssignedValues();

  var _iterator133 = _createForOfIteratorHelper(values),
      _step133;

  try {
    for (_iterator133.s(); !(_step133 = _iterator133.n()).done;) {
      var v = _step133.value;
      var matches = v.getExpressionsOfKind(varName);

      if (matches.length > 0) {
        return true;
      }
    }
  } catch (err) {
    _iterator133.e(err);
  } finally {
    _iterator133.f();
  }

  return false;
}

function _compareAllUsages2(assignedValue, lastUsages) {
  var comparisonResults = new Set();

  if (assignedValue !== undefined && assignedValue.isOneOf([_enums.ExpressionCategory.Literals, _enums.ExpressionCategory.Types])) {
    var _iterator134 = _createForOfIteratorHelper(lastUsages),
        _step134;

    try {
      for (_iterator134.s(); !(_step134 = _iterator134.n()).done;) {
        var usage = _step134.value;

        if (usage.getParent() !== undefined && usage.getParent().is(_enums.ExpressionEntity.AssignmentStatement)) {
          var usageValue = _classPrivateMethodGet(this, _getAssignedValue, _getAssignedValue2).call(this, usage);

          if (usageValue !== undefined && usageValue.isOneOf([_enums.ExpressionCategory.Literals, _enums.ExpressionCategory.Types])) {
            comparisonResults.add(assignedValue.getTextValue() === usageValue.getTextValue() ? _constants.SAME_VALUE : _constants.DIFFERENT_VALUE);
          } else {
            comparisonResults.add(_constants.UNKNOWN);
          }
        } else {
          comparisonResults.add(_constants.UNKNOWN);
        }
      }
    } catch (err) {
      _iterator134.e(err);
    } finally {
      _iterator134.f();
    }
  }

  return comparisonResults;
}

function _getLoopVarValue2(variable) {
  var parent = variable.getParent();
  var iterable = parent.getIterable();

  if (iterable.is(_enums.ExpressionEntity.BuiltInFunctionCall)) {
    var calledFunction = iterable.getFunctionExpression();

    if (calledFunction.is(_enums.ExpressionEntity.RangeFunction)) {
      var rangeArgs = iterable.getArguments();

      if (rangeArgs.length === 1) {
        return new NumberLiteral("0", -1, -1, -1);
      } else if (rangeArgs.length > 1) {
        return rangeArgs[0][0];
      }
    } else if (calledFunction.is(_enums.ExpressionEntity.EnumerateFunction)) {
      var loopVars = parent.getLoopVariables();

      if (loopVars.length === 2 && loopVars[0].getTextValue() === variable.getTextValue()) {
        return new NumberLiteral("0", -1, -1, -1);
      }
    }
  }

  return undefined;
}

function _getAssignedValue2(variable) {
  var parent = variable.getParent();
  if (parent === undefined) return undefined;
  var targets = parent.getTargetVariables();
  var values = parent.getAssignedValues();
  var targetIndex = -1;

  for (var i = 0; i < targets.length; i++) {
    if (targets[i].getTextValue() === variable.getTextValue()) {
      targetIndex = i;
      break;
    }
  }

  if (targetIndex > -1 && targetIndex < values.length) {
    return values[targetIndex];
  }

  return undefined;
}

var _moduleEntity = /*#__PURE__*/new WeakMap();

var ModulePropertyExpression = /*#__PURE__*/function (_VariableExpression) {
  _inherits(ModulePropertyExpression, _VariableExpression);

  var _super21 = _createSuper(ModulePropertyExpression);

  /** @type {ExpressionEntity} */

  /**
   * Creates a ModulePropertyExpression
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  function ModulePropertyExpression(textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine) {
    var _this16;

    _classCallCheck(this, ModulePropertyExpression);

    _this16 = _super21.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, _utils.builtInReturnLookup.has(entity) ? _utils.builtInReturnLookup.get(entity) : _enums.DataType.Unknown);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this16), _moduleEntity, {
      writable: true,
      value: void 0
    });

    return _this16;
  } //#region - overrides

  /**
   * @override
   * @throws Throws an error if calling code is attempting to change the data type of an attribute of a built-in module
   */


  _createClass(ModulePropertyExpression, [{
    key: "setDataType",
    value: function setDataType(dataType) {
      if (this.is(_enums.ExpressionEntity.PropertyName)) {
        _get(_getPrototypeOf(ModulePropertyExpression.prototype), "setDataType", this).call(this, dataType);
      } else {
        throw new Error("Cannot change the data type of an attribute of a built-in module. Attempted to change the data type to ".concat(dataType.name, "."));
      }
    }
    /**
     * @override
     */

  }, {
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      return [];
    } //#endregion - overrides
    //#region - extension methods

    /**
     * Gets the entity of the module this property belongs to.
     * @returns {ExpressionEntity}
     */

  }, {
    key: "getModuleEntity",
    value: function getModuleEntity() {
      return _classPrivateFieldGet(this, _moduleEntity);
    }
  }, {
    key: "setModuleEntity",
    value: function setModuleEntity(entity) {
      _classPrivateFieldSet(this, _moduleEntity, entity);
    }
    /**
     * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
     * the type of node, this will need to be an exact match (by text value and entity) or a
     * category match.
     * @param {ExpressionNode} node 
     * @returns {Boolean}
     * @override
     */

  }, {
    key: "matchesPattern",
    value: function matchesPattern(node) {
      return this.getEntity() === node.getEntity() && this.getTextValue() === node.getTextValue();
    } //#endregion - extension methods

  }]);

  return ModulePropertyExpression;
}(VariableExpression);

exports.ModulePropertyExpression = ModulePropertyExpression;

var FunctionNode = /*#__PURE__*/function (_ExpressionNode7) {
  _inherits(FunctionNode, _ExpressionNode7);

  var _super22 = _createSuper(FunctionNode);

  /**
   * Creates a FunctionNode
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   * @param {DataType} dataType Optional. The data type of the individual expression. NotParsed by default.
   */
  function FunctionNode(textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine) {
    var dataType = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : _enums.DataType.NotParsed;

    _classCallCheck(this, FunctionNode);

    return _super22.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, dataType);
  } //#region - overrides

  /**
   * @override
   * @throws Throws an error because the text value of a function node should not change.
   */


  _createClass(FunctionNode, [{
    key: "setTextValue",
    value: function setTextValue(value) {
      throw new Error("Cannot change the name of a function node. Attempted to change the name to ".concat(value, "."));
    }
    /**
     * @inheritdoc
     * @override
     */

  }, {
    key: "isSubscriptable",
    value: function isSubscriptable() {
      return (0, _utils.typeCanBeSubscripted)(this.getDataType());
    }
    /**
     * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
     * the type of node, this will need to be an exact match (by text value and entity) or a
     * category match.
     * @param {ExpressionNode} node 
     * @returns {Boolean}
     * @override
     */

  }, {
    key: "matchesPattern",
    value: function matchesPattern(node) {
      return this.getEntity() === node.getEntity() && this.getTextValue() === node.getTextValue();
    } //#endregion - overrides

  }]);

  return FunctionNode;
}(ExpressionNode);

exports.FunctionNode = FunctionNode;

var _returnExpressions = /*#__PURE__*/new WeakMap();

var _addProxyReturn = /*#__PURE__*/new WeakSet();

var UserDefinedFunctionExpression = /*#__PURE__*/function (_FunctionNode) {
  _inherits(UserDefinedFunctionExpression, _FunctionNode);

  var _super23 = _createSuper(UserDefinedFunctionExpression);

  /** @type {ExpressionNode[]} */
  // Store the return statement expressions that determine the data type of the call

  /**
   * Creates a UserDefinedFunctionExpression
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  function UserDefinedFunctionExpression(textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine) {
    var _this17;

    _classCallCheck(this, UserDefinedFunctionExpression);

    _this17 = _super23.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, _enums.DataType.NotParsed);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this17), _addProxyReturn);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this17), _returnExpressions, {
      writable: true,
      value: []
    });

    return _this17;
  }
  /**
   * @override
   */


  _createClass(UserDefinedFunctionExpression, [{
    key: "setDataType",
    value: function setDataType(dataType) {
      var returnTypes = _classPrivateFieldGet(this, _returnExpressions).map(function (exp) {
        return exp.getDataType();
      });

      _get(_getPrototypeOf(UserDefinedFunctionExpression.prototype), "setDataType", this).call(this, (0, _utils.getAggregateType)(returnTypes));
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var retStatements = this.getReturnStatements();
      var parent = this.getParent();
      var allParamCount = parent !== undefined && parent.is(_enums.ExpressionEntity.FunctionDefinitionStatement) ? parent.getParameters().length : -1;
      var optionalParams = parent !== undefined && parent.is(_enums.ExpressionEntity.FunctionDefinitionStatement) ? parent.getOptionalParameterCount() : -1;
      return {
        name: this.getTextValue(),
        block: this.getBlockId(),
        callLineNumbers: Array.from(this.getObservers()).filter(function (obs) {
          return obs.is(_enums.ExpressionEntity.UserDefinedFunctionCall);
        }).map(function (e) {
          return e.getStartLineNumber();
        }),
        hasReturn: retStatements.length > 0,
        hasBranchWithoutReturn: _classPrivateFieldGet(this, _returnExpressions).length > retStatements.length,
        numOptionalParameters: optionalParams,
        parameters: allParamCount > -1 ? parent.getParameters().flatMap(function (pArr) {
          return pArr;
        }).map(function (p) {
          return p.getTextValue();
        }) : [],
        returnDetail: retStatements.map(function (ret) {
          return {
            line: ret.getStartLineNumber(),
            dataType: ret.getDataType().name
          };
        }),
        returnTypes: retStatements.length > 0 ? Array.from(new Set(retStatements.map(function (ret) {
          return ret.getDataType().name;
        }))) : ["none"]
      };
      /*
      const minArgs = funcDefinition.getParameters().length - funcDefinition.getOptionalParameterCount();
              const maxArgs = funcDefinition.getParameters().length;
      */
    } //#region - extensions

    /**
     * Extract the return expression from an array of statements
     * @param {Statement[]} statements 
     * @param {Boolean} addProxy Optional. Whether or not a blank return is needed
     */

  }, {
    key: "addReturns",
    value: function addReturns(statements) {
      var addProxy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var _iterator53 = _createForOfIteratorHelper(statements),
          _step53;

      try {
        for (_iterator53.s(); !(_step53 = _iterator53.n()).done;) {
          var s = _step53.value;

          if (s.getFirstExpression().is(_enums.ExpressionEntity.ReturnStatement)) {
            var retExp = s.getFirstExpression();

            _classPrivateFieldGet(this, _returnExpressions).push(retExp);

            var _iterator54 = _createForOfIteratorHelper(this.getObservers()),
                _step54;

            try {
              for (_iterator54.s(); !(_step54 = _iterator54.n()).done;) {
                var obs = _step54.value;

                if (obs.is(_enums.ExpressionEntity.UserDefinedFunctionCall)) {
                  _classPrivateFieldGet(obs.getFunctionExpression(), _returnExpressions).push(retExp);
                }
              }
            } catch (err) {
              _iterator54.e(err);
            } finally {
              _iterator54.f();
            }

            retExp.addObserver(this);
          } else {
            _classPrivateMethodGet(this, _addProxyReturn, _addProxyReturn2).call(this);
          }
        }
      } catch (err) {
        _iterator53.e(err);
      } finally {
        _iterator53.f();
      }

      if (addProxy) {
        _classPrivateMethodGet(this, _addProxyReturn, _addProxyReturn2).call(this);
      }

      this.setDataType(); // will auto fill in
    }
  }, {
    key: "getReturnType",
    value: function getReturnType() {
      var returnTypes = _classPrivateFieldGet(this, _returnExpressions).map(function (exp) {
        return exp.getDataType();
      });

      return (0, _utils.getAggregateType)(returnTypes);
    }
  }, {
    key: "getReturnStatements",
    value: function getReturnStatements() {
      return _classPrivateFieldGet(this, _returnExpressions).filter(function (exp) {
        return exp.is(_enums.ExpressionEntity.ReturnStatement);
      });
    } //#endregion - extensions

  }]);

  return UserDefinedFunctionExpression;
}(FunctionNode);

exports.UserDefinedFunctionExpression = UserDefinedFunctionExpression;

function _addProxyReturn2() {
  var proxy = new VariableExpression("proxy", _enums.ExpressionEntity.VariableName, _enums.ExpressionCategory.Identifiers, -1, -1, -1, true);
  proxy.setDataType(_enums.DataType.None);

  _classPrivateFieldGet(this, _returnExpressions).push(proxy);
}

var BuiltInFunctionExpression = /*#__PURE__*/function (_FunctionNode2) {
  _inherits(BuiltInFunctionExpression, _FunctionNode2);

  var _super24 = _createSuper(BuiltInFunctionExpression);

  /**
   * Creates a FunctionNode
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  function BuiltInFunctionExpression(textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine) {
    _classCallCheck(this, BuiltInFunctionExpression);

    return _super24.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, _utils.builtInReturnLookup.get(entity));
  } //#region - overrides

  /**
   * Inherited method. Overridden to do nothing and throw an error.
   * @override
   * @throws Throws an error because the data type should not be changed.
   */


  _createClass(BuiltInFunctionExpression, [{
    key: "setDataType",
    value: function setDataType(dataType) {
      if (this.getEntity() !== _enums.ExpressionEntity.FunctionName) throw new Error("Cannot set the data type of a built-in function. Attempted to set the data type to ".concat(dataType));else _get(_getPrototypeOf(BuiltInFunctionExpression.prototype), "setDataType", this).call(this, dataType);
    } //#endregion - overrides

  }]);

  return BuiltInFunctionExpression;
}(FunctionNode); //#endregion - identifiers / objects
//#region - types


exports.BuiltInFunctionExpression = BuiltInFunctionExpression;

var _checkUnused13 = /*#__PURE__*/new WeakSet();

var TypeValueExpression = /*#__PURE__*/function (_ExpressionNode8) {
  _inherits(TypeValueExpression, _ExpressionNode8);

  var _super25 = _createSuper(TypeValueExpression);

  /**
   * Creates a TypeValueNode
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  function TypeValueExpression(textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine) {
    var _this18;

    _classCallCheck(this, TypeValueExpression);

    if (entity === _enums.ExpressionEntity.TrueType || entity === _enums.ExpressionEntity.FalseType) {
      _this18 = _super25.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, _enums.DataType.Bool);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this18), _checkUnused13);
    } else if (entity === _enums.ExpressionEntity.NoneType) {
      _this18 = _super25.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, _enums.DataType.None);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this18), _checkUnused13);
    } else throw new Error("Not a valid type value: ".concat(entity.name));

    _this18.addRule(_classPrivateMethodGet(_assertThisInitialized(_this18), _checkUnused13, _checkUnused14));

    return _possibleConstructorReturn(_this18);
  } //#region - overrides

  /**
   * Inherited method. Overridden to do nothing and throw an error.
   * @override
   * @throws Throws an error because the text value should not be changed.
   */


  _createClass(TypeValueExpression, [{
    key: "setTextValue",
    value: function setTextValue(value) {
      throw new Error("The text value of a built-in function cannot be changed. Attempted to change the value to ".concat(value, "."));
    }
    /**
     * Inherited method. Overridden to do nothing and throw an error.
     * @override
     * @throws Throws an error because the data type should not be changed.
     */

  }, {
    key: "setDataType",
    value: function setDataType(dataType) {
      throw new Error("Cannot set the data type of a built-in function. Attempted to set the data type to ".concat(dataType));
    }
    /**
     * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
     * the type of node, this will need to be an exact match (by text value and entity) or a
     * category match.
     * @param {ExpressionNode} node 
     * @returns {Boolean}
     * @override
     */

  }, {
    key: "matchesPattern",
    value: function matchesPattern(node) {
      return node.getEntity() === _enums.ExpressionEntity.TrueType || node.getEntity() === _enums.ExpressionEntity.FalseType || node.getEntity() === _enums.ExpressionEntity.NoneType;
    } //#endregion - overrides

    /**
     * Rule function. Checks if the property is unused
     * @param {TypeValueExpression} exp 
     * @returns {Symptom[]}
     */

  }]);

  return TypeValueExpression;
}(ExpressionNode);

function _checkUnused14(exp) {
  var symptoms = [];

  if (exp.getParent() === undefined || exp.getParent().is(_enums.ExpressionEntity.GroupStatement) && exp.getParent().getParent() === undefined) {
    symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnusedValue, [exp], 0, 0));
  }

  return symptoms;
}

var TypeNode = /*#__PURE__*/function (_ExpressionNode9) {
  _inherits(TypeNode, _ExpressionNode9);

  var _super26 = _createSuper(TypeNode);

  /**
   * Creates a TypeNode
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   * @param {DataType} dataType 
   */
  function TypeNode(textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, dataType) {
    _classCallCheck(this, TypeNode);

    return _super26.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, dataType);
  } //#region - overrides

  /**
   * Inherited method. Overridden to do nothing and throw an error.
   * @override
   * @throws Throws an error because the text value should not be changed.
   */


  _createClass(TypeNode, [{
    key: "setTextValue",
    value: function setTextValue(value) {
      throw new Error("The text value of a class or type cannot be changed. Attempted to change the value to ".concat(value, "."));
    }
    /**
     * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
     * the type of node, this will need to be an exact match (by text value and entity) or a
     * category match.
     * @param {ExpressionNode} node 
     * @returns {Boolean}
     * @override
     */

  }, {
    key: "matchesPattern",
    value: function matchesPattern(node) {
      return this.getEntity() === node.getEntity() && this.getTextValue() === node.getTextValue();
    } //#endregion - overrides

  }]);

  return TypeNode;
}(ExpressionNode);
/**
 * Represents epxressions that are built in types e.g. str, int
 */


var BuiltInTypeExpression = /*#__PURE__*/function (_TypeNode) {
  _inherits(BuiltInTypeExpression, _TypeNode);

  var _super27 = _createSuper(BuiltInTypeExpression);

  /**
   * Creates a BuiltInTypeExpression
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  function BuiltInTypeExpression(textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine) {
    _classCallCheck(this, BuiltInTypeExpression);

    return _super27.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, _enums.DataType.Unknown
    /*typeLookup(textValue)*/
    );
  } //#region - overrides

  /**
   * Inherited method. Overridden to do nothing and throw an error.
   * @override
   * @throws Throws an error because the data type should not be changed.
   */


  _createClass(BuiltInTypeExpression, [{
    key: "setDataType",
    value: function setDataType(dataType) {
      throw new Error("Cannot change the data type of a built-in type. Attempted to set the data type to ".concat(dataType, "."));
    } //#endregion - overrides

  }]);

  return BuiltInTypeExpression;
}(TypeNode);

var ExceptionExpression = /*#__PURE__*/function (_TypeNode2) {
  _inherits(ExceptionExpression, _TypeNode2);

  var _super28 = _createSuper(ExceptionExpression);

  /**
   * Creates an ExceptionExpression
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  function ExceptionExpression(textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine) {
    _classCallCheck(this, ExceptionExpression);

    return _super28.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, _enums.DataType.Exception);
  } //#region - overrides

  /**
   * Inherited method. Overridden to do nothing and throw an error.
   * @override
   * @throws Throws an error because the data type should not be changed.
   */


  _createClass(ExceptionExpression, [{
    key: "setDataType",
    value: function setDataType(dataType) {
      throw new Error("Cannot change the data type of a built-in type. Attempted to set the data type to ".concat(dataType, "."));
    } //#endregion - overrides

  }]);

  return ExceptionExpression;
}(TypeNode); // NOT FULLY IMPLEMENTED


var UserDefinedClassExpression = /*#__PURE__*/function (_TypeNode3) {
  _inherits(UserDefinedClassExpression, _TypeNode3);

  var _super29 = _createSuper(UserDefinedClassExpression);

  /**
   * Creates a BuiltInTypeExpression
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  function UserDefinedClassExpression(textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine) {
    _classCallCheck(this, UserDefinedClassExpression);

    return _super29.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, _enums.DataType.Class);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */


  _createClass(UserDefinedClassExpression, [{
    key: "matchesPattern",
    value: function matchesPattern(node) {
      return this.getEntity() === node.getEntity() && this.getTextValue() === node.getTextValue();
    }
  }]);

  return UserDefinedClassExpression;
}(TypeNode);
/**
 * Represents multipart definitions of compound types e.g. tuple, list
 */


var _elements = /*#__PURE__*/new WeakMap();

var _checkUnused15 = /*#__PURE__*/new WeakSet();

var CompoundTypeExpression = /*#__PURE__*/function (_MultiPartExpressionN8) {
  _inherits(CompoundTypeExpression, _MultiPartExpressionN8);

  var _super30 = _createSuper(CompoundTypeExpression);

  /** @type {ExpressionNode[][]} */
  // The elements in the compound type

  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionEntity} entity The entity that describes the MultiPartExpression
   * @param {ExpressionEntity[][]} elements The elements in the compound type
   * @throws Throws an error if the list of children is empty
   */
  function CompoundTypeExpression(textValue, children, entity, elements) {
    var _this19;

    _classCallCheck(this, CompoundTypeExpression);

    var dataType = (0, _utils.typeByEntity)(entity);
    _this19 = _super30.call(this, textValue, children, entity, _enums.ExpressionCategory.CompoundTypes, dataType);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this19), _checkUnused15);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this19), _elements, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this19), _elements, elements); // iterate and convert to tree


    for (var i = 0; i < _classPrivateFieldGet(_assertThisInitialized(_this19), _elements).length; i++) {
      if (entity !== _enums.ExpressionEntity.DictDefinition) {
        if (_classPrivateFieldGet(_assertThisInitialized(_this19), _elements)[i].length > 1) {
          _classPrivateFieldGet(_assertThisInitialized(_this19), _elements)[i] = _rawtextprocessing.StatementProcessor.createTree(_classPrivateFieldGet(_assertThisInitialized(_this19), _elements)[i]);
        }

        var _iterator55 = _createForOfIteratorHelper(_classPrivateFieldGet(_assertThisInitialized(_this19), _elements)[i]),
            _step55;

        try {
          for (_iterator55.s(); !(_step55 = _iterator55.n()).done;) {
            var e = _step55.value;
            e.setParent(_assertThisInitialized(_this19));
          }
        } catch (err) {
          _iterator55.e(err);
        } finally {
          _iterator55.f();
        }
      } else {
        for (var u = 0; u < _classPrivateFieldGet(_assertThisInitialized(_this19), _elements)[i].length; u++) {
          if (_classPrivateFieldGet(_assertThisInitialized(_this19), _elements)[i][u].length > 1) {
            _classPrivateFieldGet(_assertThisInitialized(_this19), _elements)[i][u] = _rawtextprocessing.StatementProcessor.createTree(_classPrivateFieldGet(_assertThisInitialized(_this19), _elements)[i][u]);
          }

          var _iterator56 = _createForOfIteratorHelper(_classPrivateFieldGet(_assertThisInitialized(_this19), _elements)[i][u]),
              _step56;

          try {
            for (_iterator56.s(); !(_step56 = _iterator56.n()).done;) {
              var _e = _step56.value;

              _e.setParent(_assertThisInitialized(_this19));
            }
          } catch (err) {
            _iterator56.e(err);
          } finally {
            _iterator56.f();
          }
        }
      }
    }

    _this19.addRule(_classPrivateMethodGet(_assertThisInitialized(_this19), _checkUnused15, _checkUnused16));

    return _this19;
  } //#region - overrides

  /**
   * @inheritdoc
   */


  _createClass(CompoundTypeExpression, [{
    key: "isComplete",
    value: function isComplete() {
      this.getChildren().length > 1;
    }
    /**
     * @override
     */

  }, {
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      var variables = [];

      var _iterator57 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _elements)),
          _step57;

      try {
        for (_iterator57.s(); !(_step57 = _iterator57.n()).done;) {
          var child = _step57.value;

          var _iterator58 = _createForOfIteratorHelper(child),
              _step58;

          try {
            for (_iterator58.s(); !(_step58 = _iterator58.n()).done;) {
              var item = _step58.value;

              if (this.getEntity() !== _enums.ExpressionEntity.DictDefinition) {
                if (item.is(_enums.ExpressionEntity.VariableName)) {
                  variables.push(item);
                } else {
                  variables = variables.concat(item.getVariableExpressions());
                }
              } else {
                var _iterator59 = _createForOfIteratorHelper(item),
                    _step59;

                try {
                  for (_iterator59.s(); !(_step59 = _iterator59.n()).done;) {
                    var element = _step59.value;

                    if (element.is(_enums.ExpressionEntity.VariableName)) {
                      variables.push(element);
                    } else {
                      variables = variables.concat(element.getVariableExpressions());
                    }
                  }
                } catch (err) {
                  _iterator59.e(err);
                } finally {
                  _iterator59.f();
                }
              }
            }
          } catch (err) {
            _iterator58.e(err);
          } finally {
            _iterator58.f();
          }
        }
      } catch (err) {
        _iterator57.e(err);
      } finally {
        _iterator57.f();
      }

      return variables;
    }
    /**
     * @override
     */

  }, {
    key: "contains",
    value: function contains(expression) {
      if (_get(_getPrototypeOf(CompoundTypeExpression.prototype), "contains", this).call(this, expression)) {
        return true;
      }

      var _iterator60 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _elements)),
          _step60;

      try {
        for (_iterator60.s(); !(_step60 = _iterator60.n()).done;) {
          var child = _step60.value;

          var _iterator61 = _createForOfIteratorHelper(child),
              _step61;

          try {
            for (_iterator61.s(); !(_step61 = _iterator61.n()).done;) {
              var item = _step61.value;

              if (this.getEntity() !== _enums.ExpressionEntity.DictDefinition) {
                if (item.contains(expression)) {
                  return true;
                }
              } else {
                var _iterator62 = _createForOfIteratorHelper(item),
                    _step62;

                try {
                  for (_iterator62.s(); !(_step62 = _iterator62.n()).done;) {
                    var element = _step62.value;

                    if (element.contains(expression)) {
                      return true;
                    }
                  }
                } catch (err) {
                  _iterator62.e(err);
                } finally {
                  _iterator62.f();
                }
              }
            }
          } catch (err) {
            _iterator61.e(err);
          } finally {
            _iterator61.f();
          }
        }
      } catch (err) {
        _iterator60.e(err);
      } finally {
        _iterator60.f();
      }

      return false;
    }
    /**
     * Gets all expressions that match the given entity
     * @param {ExpressionEntity} entity 
     * @returns {ExpressionNode[]}
     * @override
     */

  }, {
    key: "getExpressionsOfKind",
    value: function getExpressionsOfKind(entity) {
      var matches = _get(_getPrototypeOf(CompoundTypeExpression.prototype), "getExpressionsOfKind", this).call(this, entity);

      var _iterator63 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _elements)),
          _step63;

      try {
        for (_iterator63.s(); !(_step63 = _iterator63.n()).done;) {
          var child = _step63.value;

          var _iterator64 = _createForOfIteratorHelper(child),
              _step64;

          try {
            for (_iterator64.s(); !(_step64 = _iterator64.n()).done;) {
              var item = _step64.value;

              if (this.getEntity() !== _enums.ExpressionEntity.DictDefinition) {
                if (item.is(entity)) {
                  matches.push(item);
                } else matches = matches.concat(item.getExpressionsOfKind(entity));
              } else {
                var _iterator65 = _createForOfIteratorHelper(item),
                    _step65;

                try {
                  for (_iterator65.s(); !(_step65 = _iterator65.n()).done;) {
                    var element = _step65.value;

                    if (element.is(entity)) {
                      matches.push(element);
                    } else matches = matches.concat(element.getExpressionsOfKind(entity));
                  }
                } catch (err) {
                  _iterator65.e(err);
                } finally {
                  _iterator65.f();
                }
              }
            }
          } catch (err) {
            _iterator64.e(err);
          } finally {
            _iterator64.f();
          }
        }
      } catch (err) {
        _iterator63.e(err);
      } finally {
        _iterator63.f();
      }

      return matches;
    }
    /**
     * Gets the first expressions that matches any of the search info.
     * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
     * @returns {ExpressionNode | undefined}
     */

  }, {
    key: "getFirstExpressionOf",
    value: function getFirstExpressionOf(entities) {
      var match = _get(_getPrototypeOf(CompoundTypeExpression.prototype), "getFirstExpressionOf", this).call(this, entities);

      if (match === undefined) {
        var _iterator66 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _elements)),
            _step66;

        try {
          for (_iterator66.s(); !(_step66 = _iterator66.n()).done;) {
            var elem = _step66.value;

            var _iterator67 = _createForOfIteratorHelper(elem),
                _step67;

            try {
              for (_iterator67.s(); !(_step67 = _iterator67.n()).done;) {
                var item = _step67.value;

                if (this.getEntity() !== _enums.ExpressionEntity.DictDefinition) {
                  if (item.isOneOf(entities)) return item;else {
                    match = item.getFirstExpressionOf(entities);
                    if (match !== undefined) return match;
                  }
                } else {
                  var _iterator68 = _createForOfIteratorHelper(item),
                      _step68;

                  try {
                    for (_iterator68.s(); !(_step68 = _iterator68.n()).done;) {
                      var keyValue = _step68.value;
                      if (keyValue.isOneOf(entities)) return keyValue;else {
                        match = keyValue.getFirstExpressionOf(entities);
                        if (match !== undefined) return match;
                      }
                    }
                  } catch (err) {
                    _iterator68.e(err);
                  } finally {
                    _iterator68.f();
                  }
                }
              }
            } catch (err) {
              _iterator67.e(err);
            } finally {
              _iterator67.f();
            }
          }
        } catch (err) {
          _iterator66.e(err);
        } finally {
          _iterator66.f();
        }
      }

      return match;
    }
    /**
     * @inheritdoc
     * @override 
     */

  }, {
    key: "setDataType",
    value: function setDataType(dataType) {
      throw new Error("Can't update the type of a compound expression");
    }
    /**
     * @override
     */

  }, {
    key: "checkForSymptoms",
    value: function checkForSymptoms() {
      this.checkRules(this);

      var _iterator69 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _elements)),
          _step69;

      try {
        for (_iterator69.s(); !(_step69 = _iterator69.n()).done;) {
          var e = _step69.value;

          var _iterator70 = _createForOfIteratorHelper(e),
              _step70;

          try {
            for (_iterator70.s(); !(_step70 = _iterator70.n()).done;) {
              var item = _step70.value;

              if (this.getEntity() !== _enums.ExpressionEntity.DictDefinition) {
                item.checkForSymptoms();
              } else {
                var _iterator71 = _createForOfIteratorHelper(item),
                    _step71;

                try {
                  for (_iterator71.s(); !(_step71 = _iterator71.n()).done;) {
                    var keyValue = _step71.value;
                    keyValue.checkForSymptoms();
                  }
                } catch (err) {
                  _iterator71.e(err);
                } finally {
                  _iterator71.f();
                }
              }
            }
          } catch (err) {
            _iterator70.e(err);
          } finally {
            _iterator70.f();
          }
        }
      } catch (err) {
        _iterator69.e(err);
      } finally {
        _iterator69.f();
      }
    }
    /**
     * @override
     */

  }, {
    key: "setBlockId",
    value: function setBlockId(id) {
      _get(_getPrototypeOf(CompoundTypeExpression.prototype), "setBlockId", this).call(this, id); // NEED TO OVERRIDE BY TYPE...


      var _iterator72 = _createForOfIteratorHelper(this.getChildren()),
          _step72;

      try {
        for (_iterator72.s(); !(_step72 = _iterator72.n()).done;) {
          var exp = _step72.value;
          exp.setBlockId(id);
        }
      } catch (err) {
        _iterator72.e(err);
      } finally {
        _iterator72.f();
      }

      var _iterator73 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _elements)),
          _step73;

      try {
        for (_iterator73.s(); !(_step73 = _iterator73.n()).done;) {
          var item = _step73.value;

          var _iterator74 = _createForOfIteratorHelper(item),
              _step74;

          try {
            for (_iterator74.s(); !(_step74 = _iterator74.n()).done;) {
              var e = _step74.value;

              if (this.getEntity() !== _enums.ExpressionEntity.DictDefinition) {
                e.setBlockId(id);
              } else {
                var _iterator75 = _createForOfIteratorHelper(e),
                    _step75;

                try {
                  for (_iterator75.s(); !(_step75 = _iterator75.n()).done;) {
                    var keyValue = _step75.value;
                    keyValue.setBlockId();
                  }
                } catch (err) {
                  _iterator75.e(err);
                } finally {
                  _iterator75.f();
                }
              }
            }
          } catch (err) {
            _iterator74.e(err);
          } finally {
            _iterator74.f();
          }
        }
      } catch (err) {
        _iterator73.e(err);
      } finally {
        _iterator73.f();
      }
    }
    /**
     * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
     * the type of node, this will need to be an exact match (by text value and entity) or a
     * category match.
     * @param {ExpressionNode} node 
     * @returns {Boolean}
     * @override
     */

  }, {
    key: "matchesPattern",
    value: function matchesPattern(node) {
      return this.getEntity() === node.getEntity();
    } //#endregion - overrides
    //#region - extensions

    /**
     * Gets the elements in the compound expression
     * @returns {ExpressionNode[][]}
     */

  }, {
    key: "getElements",
    value: function getElements() {
      return _classPrivateFieldGet(this, _elements);
    }
    /**
     * Rule function. Checks if the property is unused
     * @param {CompoundTypeExpression} exp 
     * @returns {Symptom[]}
     */
    //#endregion - extensions

  }]);

  return CompoundTypeExpression;
}(MultiPartExpressionNode); //#endregion - types
//#region - other block definitions


exports.CompoundTypeExpression = CompoundTypeExpression;

function _checkUnused16(exp) {
  var symptoms = [];

  if (exp.getParent() === undefined || exp.getParent().is(_enums.ExpressionEntity.GroupStatement) && exp.getParent().getParent() === undefined) {
    symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnusedValue, [exp], 0, 0));
  }

  return symptoms;
}

var _condition = /*#__PURE__*/new WeakMap();

var _getColonIndex = /*#__PURE__*/new WeakSet();

var _checkWhileTrue = /*#__PURE__*/new WeakSet();

var BlockDefinitionStatement = /*#__PURE__*/function (_MultiPartExpressionN9) {
  _inherits(BlockDefinitionStatement, _MultiPartExpressionN9);

  var _super31 = _createSuper(BlockDefinitionStatement);

  /** @type {ExpressionNode[]} */

  /**
   * Creates a new BlockDefinitionStatement
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionEntity} entity
   * @throws Throws an error if the list of children is empty
   */
  function BlockDefinitionStatement(textValue, _children3, entity) {
    var _this20;

    _classCallCheck(this, BlockDefinitionStatement);

    _this20 = _super31.call(this, textValue, _children3, entity, _enums.ExpressionCategory.BlockDefinitionStatement, _enums.DataType.NA);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this20), _checkWhileTrue);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this20), _getColonIndex);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this20), _condition, {
      writable: true,
      value: []
    });

    if (_children3.length > 1) {
      var colonIndex = _classPrivateMethodGet(_assertThisInitialized(_this20), _getColonIndex, _getColonIndex2).call(_assertThisInitialized(_this20));

      var tree = _rawtextprocessing.StatementProcessor.createTree(_children3.slice(1, colonIndex));

      if (entity === _enums.ExpressionEntity.ForDefinitionStatement && tree.length > 0) {
        if (tree[0].is(_enums.ExpressionEntity.IteratorExpression)) {
          _classPrivateFieldSet(_assertThisInitialized(_this20), _condition, tree);
        } else if (tree[0].is(_enums.ExpressionEntity.ComparisonExpression)) {
          tree[0] = tree[0].convertToIterator();

          _classPrivateFieldSet(_assertThisInitialized(_this20), _condition, [tree[0]]);

          var rest = tree.slice(1).filter(function (exp) {
            return !exp.is(_enums.ExpressionEntity.Colon);
          });

          if (rest.length > 0) {
            _classPrivateFieldSet(_assertThisInitialized(_this20), _condition, _classPrivateFieldGet(_assertThisInitialized(_this20), _condition).concat(rest));
          }
        } else {
          tree = [new IteratorExpression(textValue, tree)];

          _classPrivateFieldSet(_assertThisInitialized(_this20), _condition, tree);
        }
      } else if (entity === _enums.ExpressionEntity.WithDefinitionStatement || entity === _enums.ExpressionEntity.ExceptDefinitionStatement) {
        if (tree.length === 3 && tree[1].is(_enums.ExpressionEntity.AsKeyword) && tree[2].is(_enums.ExpressionEntity.VariableName)) {
          _classPrivateFieldSet(_assertThisInitialized(_this20), _condition, [new AssignmentExpression(textValue, tree)]);
        }
      } else {
        _classPrivateFieldSet(_assertThisInitialized(_this20), _condition, tree);
      }

      var _iterator76 = _createForOfIteratorHelper(tree),
          _step76;

      try {
        for (_iterator76.s(); !(_step76 = _iterator76.n()).done;) {
          var e = _step76.value;
          e.setParent(_assertThisInitialized(_this20));
        }
      } catch (err) {
        _iterator76.e(err);
      } finally {
        _iterator76.f();
      }
    }

    if (entity === _enums.ExpressionEntity.WhileDefinitionStatement) {
      _this20.addRule(_classPrivateMethodGet(_assertThisInitialized(_this20), _checkWhileTrue, _checkWhileTrue2));
    }

    return _this20;
  } //#region - overrides

  /**
   * @override
   * @inheritdoc
   */


  _createClass(BlockDefinitionStatement, [{
    key: "isComplete",
    value: function isComplete() {
      var children = this.getChildren();

      if (children.length >= 2) {
        return children[0].is(_enums.ExpressionCategory.BlockDefinitions) && children[children.length - 1].is(_enums.ExpressionEntity.Colon);
      }

      return false;
    }
    /**
     * @override
     * @inheritdoc 
     */

  }, {
    key: "setDataType",
    value: function setDataType(dataType) {
      throw new Error("Can't update the type of a block definition");
    }
    /**
     * @override
     */

  }, {
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      var variables = [];

      var _iterator77 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _condition)),
          _step77;

      try {
        for (_iterator77.s(); !(_step77 = _iterator77.n()).done;) {
          var child = _step77.value;

          if (child.is(_enums.ExpressionEntity.VariableName)) {
            variables.push(child);
          } else {
            variables = variables.concat(child.getVariableExpressions());
          }
        }
      } catch (err) {
        _iterator77.e(err);
      } finally {
        _iterator77.f();
      }

      return variables;
    }
    /**
     * Gets all expressions that match the given entity
     * @param {ExpressionEntity} entity 
     * @returns {ExpressionNode[]}
     * @override
     */

  }, {
    key: "getExpressionsOfKind",
    value: function getExpressionsOfKind(entity) {
      var matches = _get(_getPrototypeOf(BlockDefinitionStatement.prototype), "getExpressionsOfKind", this).call(this, entity);

      var _iterator78 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _condition)),
          _step78;

      try {
        for (_iterator78.s(); !(_step78 = _iterator78.n()).done;) {
          var c = _step78.value;

          if (c.is(entity)) {
            matches.push(c);
          } else {
            matches = matches.concat(c.getExpressionsOfKind(entity));
          }
        }
      } catch (err) {
        _iterator78.e(err);
      } finally {
        _iterator78.f();
      }

      return matches;
    }
    /**
     * @override
     */

  }, {
    key: "setBlockId",
    value: function setBlockId(id) {
      _get(_getPrototypeOf(BlockDefinitionStatement.prototype), "setBlockId", this).call(this, id); // NEED TO OVERRIDE BY TYPE...


      var _iterator79 = _createForOfIteratorHelper(this.getChildren()),
          _step79;

      try {
        for (_iterator79.s(); !(_step79 = _iterator79.n()).done;) {
          var exp = _step79.value;
          exp.setBlockId(id);
        }
      } catch (err) {
        _iterator79.e(err);
      } finally {
        _iterator79.f();
      }

      var _iterator80 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _condition)),
          _step80;

      try {
        for (_iterator80.s(); !(_step80 = _iterator80.n()).done;) {
          var c = _step80.value;
          c.setBlockId(id);
        }
      } catch (err) {
        _iterator80.e(err);
      } finally {
        _iterator80.f();
      }
    }
    /**
     * Gets the first expressions that matches any of the search info.
     * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
     * @returns {ExpressionNode | undefined}
     */

  }, {
    key: "getFirstExpressionOf",
    value: function getFirstExpressionOf(entities) {
      var match = _get(_getPrototypeOf(BlockDefinitionStatement.prototype), "getFirstExpressionOf", this).call(this, entities);

      if (match === undefined) {
        var _iterator81 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _condition)),
            _step81;

        try {
          for (_iterator81.s(); !(_step81 = _iterator81.n()).done;) {
            var c = _step81.value;

            if (c.isOneOf(entities)) {
              return c;
            } else {
              match = c.getFirstExpressionOf(entities);
              if (match !== undefined) return match;
            }
          }
        } catch (err) {
          _iterator81.e(err);
        } finally {
          _iterator81.f();
        }
      }

      return match;
    }
    /**
     * @override
     */

  }, {
    key: "checkForSymptoms",
    value: function checkForSymptoms() {
      this.checkRules(this);

      var _iterator82 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _condition)),
          _step82;

      try {
        for (_iterator82.s(); !(_step82 = _iterator82.n()).done;) {
          var item = _step82.value;
          item.checkForSymptoms();
        }
      } catch (err) {
        _iterator82.e(err);
      } finally {
        _iterator82.f();
      }
    } //#endregion - overrides

  }, {
    key: "getCondition",
    value: function getCondition() {
      return _classPrivateFieldGet(this, _condition);
    }
    /** Gets the entity of the defining keyword */

  }, {
    key: "getBlockEntity",
    value: function getBlockEntity() {
      return this.getChildren()[0].getEntity();
    }
  }]);

  return BlockDefinitionStatement;
}(MultiPartExpressionNode); //#endregion - other block definitions
//#region - assignments


exports.BlockDefinitionStatement = BlockDefinitionStatement;

function _getColonIndex2() {
  var children = this.getChildren();

  for (var i = children.length - 1; i >= 0; i--) {
    if (children[i].is(_enums.ExpressionEntity.Colon)) {
      return i;
    }
  }

  return children.length;
}

function _checkWhileTrue2(blockDef) {
  var symptoms = [];
  var children = blockDef.getChildren();

  if (blockDef.is(_enums.ExpressionEntity.WhileDefinitionStatement)) {
    var condition = _classPrivateFieldGet(blockDef, _condition);

    if (condition.length === 1) {
      if (condition[0].is(_enums.ExpressionEntity.TrueType) || condition[0].is(_enums.ExpressionEntity.GroupStatement) && condition[0].getContents().length === 1 && condition[0].getContents()[0].is(_enums.ExpressionEntity.TrueType)) {
        symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.WhileTrue, children, 0, children.length - 1));
      }
    }
  }

  return symptoms;
}

var _variables = /*#__PURE__*/new WeakMap();

var _values2 = /*#__PURE__*/new WeakMap();

var _computeAssignments = /*#__PURE__*/new WeakSet();

var _processAsAssignment = /*#__PURE__*/new WeakSet();

var _processStandardAssignment = /*#__PURE__*/new WeakSet();

var _setValues = /*#__PURE__*/new WeakSet();

var _setTupleVariables = /*#__PURE__*/new WeakSet();

var _setUnknown = /*#__PURE__*/new WeakSet();

var _setTuple = /*#__PURE__*/new WeakSet();

var _checkAssignedReservedWord = /*#__PURE__*/new WeakSet();

var _checkForUnexpectedColon = /*#__PURE__*/new WeakSet();

var _checkAssignsNone = /*#__PURE__*/new WeakSet();

var AssignmentExpression = /*#__PURE__*/function (_MultiPartExpressionN10) {
  _inherits(AssignmentExpression, _MultiPartExpressionN10);

  var _super32 = _createSuper(AssignmentExpression);

  /** @type {ExpressionNode[]} */

  /** @type {ExpressionNode[]} */

  /**
   * Creates a new AssignmentExpression
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function AssignmentExpression(textValue, _children4) {
    var _this21;

    _classCallCheck(this, AssignmentExpression);

    _this21 = _super32.call(this, textValue, _children4, _enums.ExpressionEntity.AssignmentStatement, _enums.ExpressionCategory.Assignment, _enums.DataType.NotParsed);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this21), _checkAssignsNone);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this21), _checkForUnexpectedColon);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this21), _checkAssignedReservedWord);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this21), _setTuple);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this21), _setUnknown);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this21), _setTupleVariables);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this21), _setValues);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this21), _processStandardAssignment);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this21), _processAsAssignment);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this21), _computeAssignments);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this21), _variables, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this21), _values2, {
      writable: true,
      value: []
    });

    _classPrivateMethodGet(_assertThisInitialized(_this21), _computeAssignments, _computeAssignments2).call(_assertThisInitialized(_this21));

    _this21.addRules([_classPrivateMethodGet(_assertThisInitialized(_this21), _checkAssignsNone, _checkAssignsNone2), _classPrivateMethodGet(_assertThisInitialized(_this21), _checkAssignedReservedWord, _checkAssignedReservedWord2), _classPrivateMethodGet(_assertThisInitialized(_this21), _checkForUnexpectedColon, _checkForUnexpectedColon2)]);

    return _this21;
  } //#region - overrides

  /**
   * @override
   */


  _createClass(AssignmentExpression, [{
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      var variables = [];

      var _iterator83 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _values2)),
          _step83;

      try {
        for (_iterator83.s(); !(_step83 = _iterator83.n()).done;) {
          var value = _step83.value;
          variables = variables.concat(value.getVariableExpressions());
        }
      } catch (err) {
        _iterator83.e(err);
      } finally {
        _iterator83.f();
      }

      var _iterator84 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _variables)),
          _step84;

      try {
        for (_iterator84.s(); !(_step84 = _iterator84.n()).done;) {
          var variable = _step84.value;
          variables = variables.concat(variable.getVariableExpressions());
        }
      } catch (err) {
        _iterator84.e(err);
      } finally {
        _iterator84.f();
      }

      return variables;
    }
  }, {
    key: "setDataType",
    value: function setDataType(dataType) {
      dataType = (0, _utils.getAggregateType)(_classPrivateFieldGet(this, _variables).map(function (v) {
        return v.getDataType();
      }));

      _get(_getPrototypeOf(AssignmentExpression.prototype), "setDataType", this).call(this, dataType);
    }
    /**
     * @override
     */

  }, {
    key: "setBlockId",
    value: function setBlockId(id) {
      _get(_getPrototypeOf(AssignmentExpression.prototype), "setBlockId", this).call(this, id); // NEED TO OVERRIDE BY TYPE...


      var _iterator85 = _createForOfIteratorHelper(this.getChildren()),
          _step85;

      try {
        for (_iterator85.s(); !(_step85 = _iterator85.n()).done;) {
          var exp = _step85.value;
          exp.setBlockId(id);
        }
      } catch (err) {
        _iterator85.e(err);
      } finally {
        _iterator85.f();
      }

      var _iterator86 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _values2)),
          _step86;

      try {
        for (_iterator86.s(); !(_step86 = _iterator86.n()).done;) {
          var v = _step86.value;
          v.setBlockId(id);
        }
      } catch (err) {
        _iterator86.e(err);
      } finally {
        _iterator86.f();
      }
    } //#endregion - overrides
    //#region - extension

    /**
     * The variables on the left side of the assignment.
     * @returns {ExpressionNode[]}
     */

  }, {
    key: "getTargetVariables",
    value: function getTargetVariables() {
      return _classPrivateFieldGet(this, _variables);
    }
    /**
     * The values on the right side of the assignment.
     * @returns {ExpressionNode[]}
     */

  }, {
    key: "getAssignedValues",
    value: function getAssignedValues() {
      return _classPrivateFieldGet(this, _values2);
    }
    /**
     * Helper method. Populates the #variables and #values arrays, sets the data types of
     * each variable and adds the variables as observers on the values as appropriate
     */
    //#endregion - extension

  }]);

  return AssignmentExpression;
}(MultiPartExpressionNode);

exports.AssignmentExpression = AssignmentExpression;

function _computeAssignments2() {
  var children = this.getChildren();

  if ((0, _utils.indexOfExpression)(children, _enums.ExpressionEntity.AssignmentOperator) > 0) {
    _classPrivateMethodGet(this, _processStandardAssignment, _processStandardAssignment2).call(this, children);
  } else if ((0, _utils.indexOfExpression)(children, _enums.ExpressionEntity.AsKeyword) > 0) {
    _classPrivateMethodGet(this, _processAsAssignment, _processAsAssignment2).call(this, children);
  }
}

function _processAsAssignment2(children) {
  var sides = _rawtextprocessing.StatementProcessor.split(children, _enums.ExpressionEntity.AsKeyword);

  var items = [];

  for (var s = 0; s < sides.length; s++) {
    items.push(_rawtextprocessing.StatementProcessor.split(sides[s], _enums.ExpressionEntity.Comma));
  }

  if (sides.length === 2 && items.length === 2) {
    var _iterator135 = _createForOfIteratorHelper(items[1]),
        _step135;

    try {
      for (_iterator135.s(); !(_step135 = _iterator135.n()).done;) {
        var variable = _step135.value;

        if (variable[0].is(_enums.ExpressionEntity.VariableName)) {
          variable[0].setAssignedOrChanged();
        }

        _classPrivateFieldGet(this, _variables).push(variable[0]);
      }
    } catch (err) {
      _iterator135.e(err);
    } finally {
      _iterator135.f();
    }

    var _iterator136 = _createForOfIteratorHelper(items[0]),
        _step136;

    try {
      for (_iterator136.s(); !(_step136 = _iterator136.n()).done;) {
        var value = _step136.value;

        _classPrivateFieldGet(this, _values2).push(value[0]);
      }
    } catch (err) {
      _iterator136.e(err);
    } finally {
      _iterator136.f();
    }
  }

  if (_classPrivateFieldGet(this, _variables).length === _classPrivateFieldGet(this, _values2).length) {
    _classPrivateMethodGet(this, _setValues, _setValues2).call(this);
  } else if (_classPrivateFieldGet(this, _variables).length > _classPrivateFieldGet(this, _values2).length) {
    _classPrivateMethodGet(this, _setUnknown, _setUnknown2).call(this);
  } else {
    _classPrivateMethodGet(this, _setTuple, _setTuple2).call(this);
  }
}

function _processStandardAssignment2(children) {
  var sides = _rawtextprocessing.StatementProcessor.split(children, _enums.ExpressionEntity.AssignmentOperator);

  var items = [];

  for (var s = 0; s < sides.length; s++) {
    var item = _rawtextprocessing.StatementProcessor.split(sides[s], _enums.ExpressionEntity.Comma);

    items.push(item);
  }

  if (sides.length === 2 && items.length === 2) {
    var _iterator137 = _createForOfIteratorHelper(items[0]),
        _step137;

    try {
      for (_iterator137.s(); !(_step137 = _iterator137.n()).done;) {
        var variable = _step137.value;

        if (variable[0].is(_enums.ExpressionEntity.VariableName)) {
          variable[0].setAssignedOrChanged();
        } else if (variable[0].is(_enums.ExpressionEntity.SubscriptedExpression) && variable[0].getChildren()[0].is(_enums.ExpressionEntity.VariableName)) {
          variable[0].getChildren()[0].setAssignedOrChanged();
        }

        _classPrivateFieldGet(this, _variables).push(variable[0]);
      }
    } catch (err) {
      _iterator137.e(err);
    } finally {
      _iterator137.f();
    }

    var _iterator138 = _createForOfIteratorHelper(items[1]),
        _step138;

    try {
      for (_iterator138.s(); !(_step138 = _iterator138.n()).done;) {
        var value = _step138.value;

        _classPrivateFieldGet(this, _values2).push(value[0]);
      }
    } catch (err) {
      _iterator138.e(err);
    } finally {
      _iterator138.f();
    }
  }

  if (_classPrivateFieldGet(this, _variables).length === _classPrivateFieldGet(this, _values2).length) {
    _classPrivateMethodGet(this, _setValues, _setValues2).call(this);
  } else if (_classPrivateFieldGet(this, _variables).length > _classPrivateFieldGet(this, _values2).length) {
    _classPrivateMethodGet(this, _setUnknown, _setUnknown2).call(this);
  } else {
    _classPrivateMethodGet(this, _setTuple, _setTuple2).call(this);
  }

  var _iterator139 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _variables)),
      _step139;

  try {
    for (_iterator139.s(); !(_step139 = _iterator139.n()).done;) {
      var v = _step139.value;
      v.addObserver(this);
    }
  } catch (err) {
    _iterator139.e(err);
  } finally {
    _iterator139.f();
  }

  this.setDataType((0, _utils.getAggregateType)(_classPrivateFieldGet(this, _variables).map(function (v) {
    return v.getDataType();
  })));
}

function _setValues2() {
  for (var i = 0; i < _classPrivateFieldGet(this, _variables).length; i++) {
    if (_classPrivateFieldGet(this, _variables)[i].isOneOf([_enums.ExpressionEntity.VariableName, _enums.ExpressionEntity.SubscriptedExpression])) {
      _classPrivateFieldGet(this, _variables)[i].setDataType(_classPrivateFieldGet(this, _values2)[i].getDataType());

      _classPrivateFieldGet(this, _values2)[i].addObserver(_classPrivateFieldGet(this, _variables)[i]);
    } else {
      if (_classPrivateFieldGet(this, _variables)[i].is(_enums.ExpressionEntity.TupleDefinition)) {
        _classPrivateMethodGet(this, _setTupleVariables, _setTupleVariables2).call(this, _classPrivateFieldGet(this, _variables)[i]);
      } else if (!_classPrivateFieldGet(this, _variables)[i].is(_enums.ExpressionCategory.SpecialVariables)) {
        this.setDataType(_enums.DataType.Invalid); // placeholder - replace with symptom
      }
    }
  }
}

function _setTupleVariables2(tuple) {
  var _iterator140 = _createForOfIteratorHelper(tuple.getElements()),
      _step140;

  try {
    for (_iterator140.s(); !(_step140 = _iterator140.n()).done;) {
      var i = _step140.value;
      if (i[0].isOneOf([_enums.ExpressionEntity.VariableName, _enums.ExpressionEntity.SubscriptedExpression])) i[0].setDataType(_enums.DataType.Unknown);
    }
  } catch (err) {
    _iterator140.e(err);
  } finally {
    _iterator140.f();
  }
}

function _setUnknown2() {
  var _iterator141 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _variables)),
      _step141;

  try {
    for (_iterator141.s(); !(_step141 = _iterator141.n()).done;) {
      var variable = _step141.value;

      if (!variable.isOneOf([_enums.ExpressionEntity.VariableName, _enums.ExpressionEntity.SubscriptedExpression])) {
        console.log("stop");
      } else {
        variable.setDataType(_enums.DataType.Unknown);
      }
    }
  } catch (err) {
    _iterator141.e(err);
  } finally {
    _iterator141.f();
  }
}

function _setTuple2() {
  var _iterator142 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _variables)),
      _step142;

  try {
    for (_iterator142.s(); !(_step142 = _iterator142.n()).done;) {
      var variable = _step142.value;

      if (!variable.isOneOf([_enums.ExpressionEntity.VariableName, _enums.ExpressionEntity.SubscriptedExpression])) {
        console.log("stop");
      } else {
        variable.setDataType(_enums.DataType.Tuple);
      }
    }
  } catch (err) {
    _iterator142.e(err);
  } finally {
    _iterator142.f();
  }
}

function _checkAssignedReservedWord2(exp) {
  var symptoms = [];

  var _iterator143 = _createForOfIteratorHelper(exp.getTargetVariables()),
      _step143;

  try {
    for (_iterator143.s(); !(_step143 = _iterator143.n()).done;) {
      var v = _step143.value;
      var knownCategory = (0, _utils.keywordLookup)(v.getTextValue()).category; // BuiltInFunctions

      if (v.is(_enums.ExpressionEntity.VariableName) && v.getLastUsages().length === 0 && knownCategory === _enums.ExpressionCategory.BuiltInFunctions) {
        symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.VariableWithSameNameAsFunction, [v], 0, 0, {
          funcType: _constants.BUILT_IN_FUNCTION,
          varIsParameter: v.isParameter()
        }));
      } else if ((knownCategory === _enums.ExpressionCategory.BlockDefinitions || knownCategory === _enums.ExpressionCategory.LogicalOperators || knownCategory === _enums.ExpressionCategory.Types || knownCategory === _enums.ExpressionCategory.OtherKeywords) && v.getTextValue() !== "f" && v.getTextValue() !== "r") {
        symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.ReservedWordAssigned, [v], 0, 0));
      }
    }
  } catch (err) {
    _iterator143.e(err);
  } finally {
    _iterator143.f();
  }

  return symptoms;
}

function _checkForUnexpectedColon2(exp) {
  var symptoms = [];
  var values = exp.getAssignedValues();

  for (var i = 0; i < values.length; i++) {
    if (values[i].is(_enums.ExpressionEntity.Colon)) {
      symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnexpectedColon, values, 0, values.length - 1, {
        before: i > 0 ? values[i - 1].getTextValue() : _constants.EMPTY,
        after: i < values.length - 1 ? values[i + 1].getTextValue() : _constants.EMPTY
      }));
    }
  }

  return symptoms;
}

function _checkAssignsNone2(exp) {
  var symptoms = [];
  var values = exp.getAssignedValues();
  var expandGroups = values.flatMap(function (val) {
    return !val.is(_enums.ExpressionEntity.GroupStatement) ? val : val.getContents();
  });
  var noneValues = expandGroups.filter(function (val) {
    return (0, _utils.isNoneFunction)(val) || val.getDataType() === _enums.DataType.None && !val.isOneOf([_enums.ExpressionEntity.NoneType, _enums.ExpressionEntity.VariableName]);
  });

  if (noneValues.length > 0) {
    symptoms.push.apply(symptoms, _toConsumableArray(noneValues.map(function (val) {
      return _symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.AssignedNone, [val], 0, 0, {
        expression: val,
        usage: _constants.ASSIGNMENT,
        target: _classPrivateFieldGet(exp, _variables)[0].getTextValue()
      });
    })));
  }

  return symptoms;
}

var _variables2 = /*#__PURE__*/new WeakMap();

var _operatorIndex = /*#__PURE__*/new WeakMap();

var _calculatedValues = /*#__PURE__*/new WeakMap();

var _assignedValue = /*#__PURE__*/new WeakMap();

var _computeAssignments3 = /*#__PURE__*/new WeakSet();

var _createPlaceholderCalculation = /*#__PURE__*/new WeakSet();

var _findNonAugmentedOperator = /*#__PURE__*/new WeakSet();

var _findOperator = /*#__PURE__*/new WeakSet();

var _checkAssignsNone3 = /*#__PURE__*/new WeakSet();

var ChangeExpression = /*#__PURE__*/function (_MultiPartExpressionN11) {
  _inherits(ChangeExpression, _MultiPartExpressionN11);

  var _super33 = _createSuper(ChangeExpression);

  /** @type {ExpressionNode[]} */
  // should only contain one if valid

  /** @type {Number} */

  /** @type {ExpressionNode[]} */
  // Should store calculations rather than plain value

  /** @type {ExpressionNode} */
  // Should store the plain value, not the placeholder calculation

  /**
   * Creates a new ChangeExpression
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function ChangeExpression(textValue, _children5) {
    var _this22;

    _classCallCheck(this, ChangeExpression);

    _this22 = _super33.call(this, textValue, _children5, _enums.ExpressionEntity.ChangeStatement, _enums.ExpressionCategory.Assignment, _enums.DataType.NA);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this22), _checkAssignsNone3);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this22), _findOperator);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this22), _findNonAugmentedOperator);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this22), _createPlaceholderCalculation);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this22), _computeAssignments3);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this22), _variables2, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this22), _operatorIndex, {
      writable: true,
      value: -1
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this22), _calculatedValues, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this22), _assignedValue, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this22), _computeAssignments3, _computeAssignments4).call(_assertThisInitialized(_this22));

    _this22.addRule(_classPrivateMethodGet(_assertThisInitialized(_this22), _checkAssignsNone3, _checkAssignsNone4));

    return _this22;
  } //#region - overrides

  /**
   * @override
   */


  _createClass(ChangeExpression, [{
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      var variables = [];

      var _iterator87 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _calculatedValues)),
          _step87;

      try {
        for (_iterator87.s(); !(_step87 = _iterator87.n()).done;) {
          var value = _step87.value;
          variables = variables.concat(value.getVariableExpressions());
        }
      } catch (err) {
        _iterator87.e(err);
      } finally {
        _iterator87.f();
      }

      var _iterator88 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _variables2)),
          _step88;

      try {
        for (_iterator88.s(); !(_step88 = _iterator88.n()).done;) {
          var variable = _step88.value;
          variables = variables.concat(variable.getVariableExpressions());
        }
      } catch (err) {
        _iterator88.e(err);
      } finally {
        _iterator88.f();
      }

      return variables;
    }
    /**
     * Gets the value assigned. May be undefined if the expression is incomplete
     * @returns {ExpressionNode | undefined}
     */

  }, {
    key: "getAssignedValue",
    value: function getAssignedValue() {
      return _classPrivateFieldGet(this, _assignedValue);
    }
  }, {
    key: "setBlockId",
    value:
    /**
     * @override
     */
    function setBlockId(id) {
      _get(_getPrototypeOf(ChangeExpression.prototype), "setBlockId", this).call(this, id); // NEED TO OVERRIDE BY TYPE...


      var _iterator89 = _createForOfIteratorHelper(this.getChildren()),
          _step89;

      try {
        for (_iterator89.s(); !(_step89 = _iterator89.n()).done;) {
          var exp = _step89.value;
          exp.setBlockId(id);
        }
      } catch (err) {
        _iterator89.e(err);
      } finally {
        _iterator89.f();
      }

      _classPrivateFieldGet(this, _assignedValue).setBlockId(id);
    } //#endregion - overrides

    /**
     * The variables on the left side of the assignment.
     * @returns {ExpressionNode[]}
     */

  }, {
    key: "getTargetVariables",
    value: function getTargetVariables() {
      return _classPrivateFieldGet(this, _variables2);
    }
    /** 
     * Rule function. Checks if the expression calculates with something with no value and if so,
     * adds a new Symptom object.
     * @param {ChangeExpression} exp
     * @returns {Symptom[]}
     */

  }]);

  return ChangeExpression;
}(MultiPartExpressionNode); //#endregion - assignments
//#region - other multipart


exports.ChangeExpression = ChangeExpression;

function _computeAssignments4() {
  _classPrivateMethodGet(this, _findOperator, _findOperator2).call(this);

  var children = this.getChildren();

  if (_classPrivateFieldGet(this, _operatorIndex) === 1 && children.length === 3) {
    // process typical
    if (children[0].is(_enums.ExpressionEntity.VariableName)) {
      children[0].setAssignedOrChanged();
    } else if (children[0].is(_enums.ExpressionEntity.SubscriptedExpression) && children[0].getChildren()[0].is(_enums.ExpressionEntity.VariableName)) {
      children[0].getChildren()[0].setAssignedOrChanged();
    }

    _classPrivateFieldGet(this, _variables2).push(children[0]);

    _classPrivateFieldSet(this, _assignedValue, children[2]);

    if (!children[0].isOneOf([_enums.ExpressionEntity.VariableName, _enums.ExpressionEntity.SubscriptedExpression])) {
      this.setDataType(_enums.DataType.Invalid);
    } else {
      _classPrivateMethodGet(this, _createPlaceholderCalculation, _createPlaceholderCalculation2).call(this);
    }
  } else if (_classPrivateFieldGet(this, _operatorIndex) === 1 && children.length > 3 && (0, _utils.containsExpression)(children, _enums.ExpressionEntity.Comma)) {
    this.setDataType(_enums.DataType.Tuple);
    var tupleExpressions = children.slice(2);

    var elements = _rawtextprocessing.StatementProcessor.split(tupleExpressions, _enums.ExpressionEntity.Comma);

    var tuple = new CompoundTypeExpression((0, _utils.getTextOfExpressions)(tupleExpressions), tupleExpressions, _enums.ExpressionEntity.TupleDefinition, elements);
    tuple.setParent(this);

    while (children.length > 2) {
      children.pop();
    }

    children.push(tuple);

    _classPrivateFieldGet(this, _variables2).push(children[0]);

    _classPrivateFieldSet(this, _assignedValue, children[2]);
  } else {
    this.setDataType(_enums.DataType.Invalid);

    _classPrivateFieldSet(this, _variables2, _classPrivateFieldGet(this, _operatorIndex) > -1 ? children.slice(0, _classPrivateFieldGet(this, _operatorIndex)) : []);

    _classPrivateFieldSet(this, _calculatedValues, _classPrivateFieldGet(this, _operatorIndex) > -1 ? children.slice(_classPrivateFieldGet(this, _operatorIndex) + 1) : []);
  }
}

function _createPlaceholderCalculation2() {
  var calculationOperator = _classPrivateMethodGet(this, _findNonAugmentedOperator, _findNonAugmentedOperator2).call(this); // create calculate value


  var target = _classPrivateFieldGet(this, _variables2)[0];

  var calculationElements = [new KeywordOrOperatorExpression(calculationOperator.entity.name, calculationOperator.entity, calculationOperator.category, -1, -1), this.getChildren()[2]];

  if (target.is(_enums.ExpressionEntity.VariableName)) {
    var proxyVar = new VariableExpression(target.getTextValue(), target.getEntity(), target.getCategory(), -1, -1, -1, true);
    calculationElements.unshift(proxyVar);
  } else {
    var targetChildren = target.getChildren();
    var subscriptedExp = new SubscriptedElement("Placeholder", [targetChildren[0], targetChildren[1]]);
    calculationElements.unshift(subscriptedExp);
  }

  var calcExp = new CalculatedExpression("Placeholder", calculationElements);

  _classPrivateFieldGet(this, _calculatedValues).push(calcExp);

  target.setDataType(calcExp.getDataType()); // Will all be invalid at first?

  calcExp.addObserver(target);
}

function _findNonAugmentedOperator2() {
  var operator = this.getChildren()[_classPrivateFieldGet(this, _operatorIndex)].getTextValue();

  var nonAugmentedText = operator.replace("=", "");
  return (0, _utils.keywordLookup)(nonAugmentedText);
}

function _findOperator2() {
  var children = this.getChildren();

  for (var i = 0; i < children.length; i++) {
    if (children[i].isChangeOperator()) {
      _classPrivateFieldSet(this, _operatorIndex, i);

      break;
    }
  }
}

function _checkAssignsNone4(exp) {
  var symptoms = [];
  var value = exp.getAssignedValue();

  if (value.getDataType() === _enums.DataType.None && !value.isOneOf([_enums.ExpressionEntity.NoneType, _enums.ExpressionEntity.VariableName]) || (0, _utils.isNoneFunction)(value)) {
    symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.AssignedNone, [value], 0, 0, {
      expression: value,
      usage: _constants.ASSIGNMENT,
      target: _classPrivateFieldGet(exp, _variables2)[0].getTextValue()
    }));
  }

  return symptoms;
}

var _contents = /*#__PURE__*/new WeakMap();

var _checkForUnexpectedColon3 = /*#__PURE__*/new WeakSet();

var GroupElement = /*#__PURE__*/function (_MultiPartExpressionN12) {
  _inherits(GroupElement, _MultiPartExpressionN12);

  var _super34 = _createSuper(GroupElement);

  /** @type {ExpressionNode[]} */
  // The contents of the group (everything between the parentheses)

  /**
   * Creates a new GroupElement
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function GroupElement(textValue, children) {
    var _this23;

    _classCallCheck(this, GroupElement);

    _this23 = _super34.call(this, textValue, children, _enums.ExpressionEntity.GroupStatement, _enums.ExpressionCategory.Group, _enums.DataType.NotParsed);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this23), _checkForUnexpectedColon3);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this23), _contents, {
      writable: true,
      value: void 0
    });

    if (children.length > 2) {
      var slice = children.slice(1, children.length - 1);
      if (slice.length > 1) _classPrivateFieldSet(_assertThisInitialized(_this23), _contents, _rawtextprocessing.StatementProcessor.createTree(children.slice(1, children.length - 1)));else {
        _classPrivateFieldSet(_assertThisInitialized(_this23), _contents, [slice[0]]);
      }
    } else {
      _classPrivateFieldSet(_assertThisInitialized(_this23), _contents, []);
    }

    var _iterator90 = _createForOfIteratorHelper(_classPrivateFieldGet(_assertThisInitialized(_this23), _contents)),
        _step90;

    try {
      for (_iterator90.s(); !(_step90 = _iterator90.n()).done;) {
        var e = _step90.value;
        e.setParent(_assertThisInitialized(_this23));
      }
    } catch (err) {
      _iterator90.e(err);
    } finally {
      _iterator90.f();
    }

    _this23.setDataType(_classPrivateFieldGet(_assertThisInitialized(_this23), _contents).length === 1 ? _classPrivateFieldGet(_assertThisInitialized(_this23), _contents)[0].getDataType() : _enums.DataType.Unknown);

    if (_classPrivateFieldGet(_assertThisInitialized(_this23), _contents).length === 1) {
      _classPrivateFieldGet(_assertThisInitialized(_this23), _contents)[0].addObserver(_assertThisInitialized(_this23));
    } else {
      _this23.setDataType(_enums.DataType.Invalid); // Probably a larger issue

    }

    _this23.addRule(_classPrivateMethodGet(_assertThisInitialized(_this23), _checkForUnexpectedColon3, _checkForUnexpectedColon4));

    return _this23;
  }
  /**
   * @override
   */


  _createClass(GroupElement, [{
    key: "setBlockId",
    value: function setBlockId(id) {
      _get(_getPrototypeOf(GroupElement.prototype), "setBlockId", this).call(this, id); // NEED TO OVERRIDE BY TYPE...


      var _iterator91 = _createForOfIteratorHelper(this.getChildren()),
          _step91;

      try {
        for (_iterator91.s(); !(_step91 = _iterator91.n()).done;) {
          var exp = _step91.value;
          exp.setBlockId(id);
        }
      } catch (err) {
        _iterator91.e(err);
      } finally {
        _iterator91.f();
      }

      var _iterator92 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _contents)),
          _step92;

      try {
        for (_iterator92.s(); !(_step92 = _iterator92.n()).done;) {
          var c = _step92.value;
          c.setBlockId(id);
        }
      } catch (err) {
        _iterator92.e(err);
      } finally {
        _iterator92.f();
      }
    } //#region - extension

    /**
     * Gets the contents of the group.
     * @returns {ExpressionNode[]}
     */

  }, {
    key: "getContents",
    value: function getContents() {
      return _classPrivateFieldGet(this, _contents);
    }
    /**
     * @override
     */

  }, {
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      var variables = [];

      var _iterator93 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _contents)),
          _step93;

      try {
        for (_iterator93.s(); !(_step93 = _iterator93.n()).done;) {
          var value = _step93.value;
          variables = variables.concat(value.getVariableExpressions());
        }
      } catch (err) {
        _iterator93.e(err);
      } finally {
        _iterator93.f();
      }

      return variables;
    }
    /**
     * Gets all expressions that match the given entity
     * @param {ExpressionEntity} entity 
     * @returns {ExpressionNode[]}
     * @override
     */

  }, {
    key: "getExpressionsOfKind",
    value: function getExpressionsOfKind(entity) {
      var matches = _get(_getPrototypeOf(GroupElement.prototype), "getExpressionsOfKind", this).call(this, entity);

      var _iterator94 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _contents)),
          _step94;

      try {
        for (_iterator94.s(); !(_step94 = _iterator94.n()).done;) {
          var c = _step94.value;

          if (c.is(entity)) {
            matches.push(c);
          } else matches = matches.concat(c.getExpressionsOfKind(entity));
        }
      } catch (err) {
        _iterator94.e(err);
      } finally {
        _iterator94.f();
      }

      return matches;
    }
    /**
     * Gets the first expressions that matches any of the search info.
     * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
     * @returns {ExpressionNode | undefined}
     */

  }, {
    key: "getFirstExpressionOf",
    value: function getFirstExpressionOf(entities) {
      var match = _get(_getPrototypeOf(GroupElement.prototype), "getFirstExpressionOf", this).call(this, entities);

      if (match === undefined) {
        var _iterator95 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _contents)),
            _step95;

        try {
          for (_iterator95.s(); !(_step95 = _iterator95.n()).done;) {
            var c = _step95.value;

            if (c.isOneOf(entities)) {
              return c;
            } else {
              match = c.getFirstExpressionOf(entities);
              if (match !== undefined) return match;
            }
          }
        } catch (err) {
          _iterator95.e(err);
        } finally {
          _iterator95.f();
        }
      }

      return match;
    }
    /**
     * @override
     */

  }, {
    key: "checkForSymptoms",
    value: function checkForSymptoms() {
      this.checkRules(this);

      var _iterator96 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _contents)),
          _step96;

      try {
        for (_iterator96.s(); !(_step96 = _iterator96.n()).done;) {
          var c = _step96.value;
          c.checkForSymptoms();
        }
      } catch (err) {
        _iterator96.e(err);
      } finally {
        _iterator96.f();
      }
    }
    /**
     * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
     * the type of node, this will need to be an exact match (by text value and entity) or a
     * category match.
     * @param {ExpressionNode} node 
     * @returns {Boolean}
     * @override
     */

  }, {
    key: "matchesPattern",
    value: function matchesPattern(node) {
      var contents = this.getContents();

      var _iterator97 = _createForOfIteratorHelper(contents),
          _step97;

      try {
        for (_iterator97.s(); !(_step97 = _iterator97.n()).done;) {
          var c = _step97.value;
          if (!c.matchesPattern(node)) return false;
        }
      } catch (err) {
        _iterator97.e(err);
      } finally {
        _iterator97.f();
      }

      return true;
    } //#endregion - extension

    /**
     * 
     * @param {GroupElement} exp 
     * @returns {Symptom[]}
     */

  }]);

  return GroupElement;
}(MultiPartExpressionNode);

exports.GroupElement = GroupElement;

function _checkForUnexpectedColon4(exp) {
  var symptoms = [];
  var values = exp.getContents();

  for (var i = 0; i < values.length; i++) {
    if (values[i].is(_enums.ExpressionEntity.Colon)) {
      symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnexpectedColon, values, 0, values.length - 1, {
        before: i > 0 ? values[i - 1].getTextValue() : _constants.EMPTY,
        after: i < values.length - 1 ? values[i + 1].getTextValue() : _constants.EMPTY
      }));
    }
  }

  return symptoms;
}

var _indices = /*#__PURE__*/new WeakMap();

var SliceElement = /*#__PURE__*/function (_MultiPartExpressionN13) {
  _inherits(SliceElement, _MultiPartExpressionN13);

  var _super35 = _createSuper(SliceElement);

  /** @type {ExpressionNode[][]} */
  // An array storing each part of the slice i.e. the expressions between :

  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionNode[][]} indices Optional. The individual indices in the slice.
   * @throws Throws an error if the list of children is empty
   */
  function SliceElement(textValue, children) {
    var _this24;

    var indices = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, SliceElement);

    _this24 = _super35.call(this, textValue, children, _enums.ExpressionEntity.Slice, _enums.ExpressionCategory.Other, _enums.DataType.NA);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this24), _indices, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this24), _indices, indices); // convert each index to a tree


    for (var i = 0; i < _classPrivateFieldGet(_assertThisInitialized(_this24), _indices).length; i++) {
      if (_classPrivateFieldGet(_assertThisInitialized(_this24), _indices)[i].length > 1) {
        _classPrivateFieldGet(_assertThisInitialized(_this24), _indices)[i] = _rawtextprocessing.StatementProcessor.createTree(_classPrivateFieldGet(_assertThisInitialized(_this24), _indices)[i]);

        var _iterator98 = _createForOfIteratorHelper(_classPrivateFieldGet(_assertThisInitialized(_this24), _indices)[i]),
            _step98;

        try {
          for (_iterator98.s(); !(_step98 = _iterator98.n()).done;) {
            var e = _step98.value;
            e.setParent(_assertThisInitialized(_this24));
          }
        } catch (err) {
          _iterator98.e(err);
        } finally {
          _iterator98.f();
        }
      }
    }

    return _this24;
  } //#region - overrides

  /**
   * @inheritdoc
   */


  _createClass(SliceElement, [{
    key: "isComplete",
    value: function isComplete() {
      var children = this.getChildren();
      return children.length >= 4 && children[0].is(_enums.ExpressionEntity.OpenSquareBracket) && children[children.length - 1].is(_enums.ExpressionEntity.CloseSquareBracket) && (0, _utils.containsExpression)(children, _enums.ExpressionEntity.Colon);
    }
    /**
     * @override
     */

  }, {
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      var variables = [];

      var _iterator99 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _indices)),
          _step99;

      try {
        for (_iterator99.s(); !(_step99 = _iterator99.n()).done;) {
          var value = _step99.value;

          var _iterator100 = _createForOfIteratorHelper(value),
              _step100;

          try {
            for (_iterator100.s(); !(_step100 = _iterator100.n()).done;) {
              var item = _step100.value;
              variables = variables.concat(item.getVariableExpressions());
            }
          } catch (err) {
            _iterator100.e(err);
          } finally {
            _iterator100.f();
          }
        }
      } catch (err) {
        _iterator99.e(err);
      } finally {
        _iterator99.f();
      }

      return variables;
    }
    /**
     * @override
     */

  }, {
    key: "checkForSymptoms",
    value: function checkForSymptoms() {
      this.checkRules(this);

      var _iterator101 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _indices)),
          _step101;

      try {
        for (_iterator101.s(); !(_step101 = _iterator101.n()).done;) {
          var i = _step101.value;

          var _iterator102 = _createForOfIteratorHelper(i),
              _step102;

          try {
            for (_iterator102.s(); !(_step102 = _iterator102.n()).done;) {
              var item = _step102.value;
              item.checkForSymptoms();
            }
          } catch (err) {
            _iterator102.e(err);
          } finally {
            _iterator102.f();
          }
        }
      } catch (err) {
        _iterator101.e(err);
      } finally {
        _iterator101.f();
      }
    }
    /**
     * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
     * the type of node, this will need to be an exact match (by text value and entity) or a
     * category match.
     * @param {ExpressionNode} node 
     * @returns {Boolean}
     * @override
     */

  }, {
    key: "matchesPattern",
    value: function matchesPattern(node) {
      return this.getEntity() === node.getEntity();
    }
    /**
     * @override
     */

  }, {
    key: "setBlockId",
    value: function setBlockId(id) {
      _get(_getPrototypeOf(SliceElement.prototype), "setBlockId", this).call(this, id); // NEED TO OVERRIDE BY TYPE...


      var _iterator103 = _createForOfIteratorHelper(this.getChildren()),
          _step103;

      try {
        for (_iterator103.s(); !(_step103 = _iterator103.n()).done;) {
          var exp = _step103.value;
          exp.setBlockId(id);
        }
      } catch (err) {
        _iterator103.e(err);
      } finally {
        _iterator103.f();
      }

      var _iterator104 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _indices)),
          _step104;

      try {
        for (_iterator104.s(); !(_step104 = _iterator104.n()).done;) {
          var item = _step104.value;

          var _iterator105 = _createForOfIteratorHelper(item),
              _step105;

          try {
            for (_iterator105.s(); !(_step105 = _iterator105.n()).done;) {
              var i = _step105.value;
              i.setBlockId(id);
            }
          } catch (err) {
            _iterator105.e(err);
          } finally {
            _iterator105.f();
          }
        }
      } catch (err) {
        _iterator104.e(err);
      } finally {
        _iterator104.f();
      }
    } //#endregion - overrides
    //#region - extension

    /**
     * Gets the indices that make up the slice.
     * @returns {ExpressionNode[][]}
     */

  }, {
    key: "getIndices",
    value: function getIndices() {
      return _classPrivateFieldGet(this, _indices);
    } //#endregion - extension

  }]);

  return SliceElement;
}(MultiPartExpressionNode);

exports.SliceElement = SliceElement;

var _contents2 = /*#__PURE__*/new WeakMap();

var IndexKeyElement = /*#__PURE__*/function (_MultiPartExpressionN14) {
  _inherits(IndexKeyElement, _MultiPartExpressionN14);

  var _super36 = _createSuper(IndexKeyElement);

  /** @type {ExpressionNode[]} */

  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function IndexKeyElement(textValue, children) {
    var _this25;

    _classCallCheck(this, IndexKeyElement);

    _this25 = _super36.call(this, textValue, children, _enums.ExpressionEntity.IndexKey, _enums.ExpressionCategory.Other, _enums.DataType.NA); // convert children contents to tree

    _classPrivateFieldInitSpec(_assertThisInitialized(_this25), _contents2, {
      writable: true,
      value: []
    });

    if (children.length > 2) {
      _classPrivateFieldSet(_assertThisInitialized(_this25), _contents2, _rawtextprocessing.StatementProcessor.createTree(children.slice(1, children.length - 1)));
    }

    var _iterator106 = _createForOfIteratorHelper(_classPrivateFieldGet(_assertThisInitialized(_this25), _contents2)),
        _step106;

    try {
      for (_iterator106.s(); !(_step106 = _iterator106.n()).done;) {
        var e = _step106.value;
        e.setParent(_assertThisInitialized(_this25));
      }
    } catch (err) {
      _iterator106.e(err);
    } finally {
      _iterator106.f();
    }

    return _this25;
  } //#region - overrides

  /**
   * @inheritdoc
   */


  _createClass(IndexKeyElement, [{
    key: "isComplete",
    value: function isComplete() {
      var children = this.getChildren();
      return children.length >= 3 && children[0].is(_enums.ExpressionEntity.OpenSquareBracket) && children[children.length - 1].is(_enums.ExpressionEntity.CloseSquareBracket);
    }
    /**
     * @override
     */

  }, {
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      var variables = [];

      var _iterator107 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _contents2)),
          _step107;

      try {
        for (_iterator107.s(); !(_step107 = _iterator107.n()).done;) {
          var value = _step107.value;
          variables = variables.concat(value.getVariableExpressions());
        }
      } catch (err) {
        _iterator107.e(err);
      } finally {
        _iterator107.f();
      }

      return variables;
    }
    /**
     * @override
     */

  }, {
    key: "checkForSymptoms",
    value: function checkForSymptoms() {
      this.checkRules(this);

      var _iterator108 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _contents2)),
          _step108;

      try {
        for (_iterator108.s(); !(_step108 = _iterator108.n()).done;) {
          var c = _step108.value;
          c.checkForSymptoms();
        }
      } catch (err) {
        _iterator108.e(err);
      } finally {
        _iterator108.f();
      }
    }
    /**
     * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
     * the type of node, this will need to be an exact match (by text value and entity) or a
     * category match.
     * @param {ExpressionNode} node 
     * @returns {Boolean}
     * @override
     */

  }, {
    key: "matchesPattern",
    value: function matchesPattern(node) {
      return this.getEntity() === node.getEntity();
    }
    /**
     * @override
     */

  }, {
    key: "setBlockId",
    value: function setBlockId(id) {
      _get(_getPrototypeOf(IndexKeyElement.prototype), "setBlockId", this).call(this, id); // NEED TO OVERRIDE BY TYPE...


      var _iterator109 = _createForOfIteratorHelper(this.getChildren()),
          _step109;

      try {
        for (_iterator109.s(); !(_step109 = _iterator109.n()).done;) {
          var exp = _step109.value;
          exp.setBlockId(id);
        }
      } catch (err) {
        _iterator109.e(err);
      } finally {
        _iterator109.f();
      }

      var _iterator110 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _contents2)),
          _step110;

      try {
        for (_iterator110.s(); !(_step110 = _iterator110.n()).done;) {
          var i = _step110.value;
          i.setBlockId(id);
        }
      } catch (err) {
        _iterator110.e(err);
      } finally {
        _iterator110.f();
      }
    } //#endregion - overrides

  }]);

  return IndexKeyElement;
}(MultiPartExpressionNode);

exports.IndexKeyElement = IndexKeyElement;

var _checkUnused17 = /*#__PURE__*/new WeakSet();

var _checkSubscriptable = /*#__PURE__*/new WeakSet();

var SubscriptedElement = /*#__PURE__*/function (_MultiPartExpressionN15) {
  _inherits(SubscriptedElement, _MultiPartExpressionN15);

  var _super37 = _createSuper(SubscriptedElement);

  /**
   * Creates a new SubscriptedElement - an expression followed by an index, key, or slice
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain two nodex
   */
  function SubscriptedElement(textValue, children) {
    var _this26;

    _classCallCheck(this, SubscriptedElement);

    //if (children.length !== 2) throw new Error("A subscripted element must contain exactly two children")
    var dataType = _classStaticPrivateMethodGet(SubscriptedElement, SubscriptedElement, _findDataType).call(SubscriptedElement, children);

    _this26 = _super37.call(this, textValue, children, _enums.ExpressionEntity.SubscriptedExpression, _enums.ExpressionCategory.MultipartValue, dataType);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this26), _checkSubscriptable);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this26), _checkUnused17);

    children[0].addObserver(_assertThisInitialized(_this26));

    _this26.addRules([_classPrivateMethodGet(_assertThisInitialized(_this26), _checkSubscriptable, _checkSubscriptable2), _classPrivateMethodGet(_assertThisInitialized(_this26), _checkUnused17, _checkUnused18)]);

    return _this26;
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */


  _createClass(SubscriptedElement, [{
    key: "matchesPattern",
    value: function matchesPattern(node) {
      if (this.getEntity() !== node.getEntity()) {
        return false;
      }

      var children = this.getChildren();
      var nodeChildren = node.getChildren();
      return children.length > 0 && nodeChildren.length > 0 && children[0].matchesPattern(nodeChildren[0]);
    } //#region - overrides

    /**
     * @inheritdoc
     */

  }, {
    key: "isComplete",
    value: function isComplete() {
      var children = this.getChildren();
      return children.length === 2 && children[1].isOneOf(_enums.ExpressionEntity.IndexKey, _enums.ExpressionEntity.Slice);
    }
    /**
     * @override
     */

  }, {
    key: "setDataType",
    value: function setDataType(dataType) {
      var localType = _classStaticPrivateMethodGet(SubscriptedElement, SubscriptedElement, _findDataType).call(SubscriptedElement, this.getChildren());

      _get(_getPrototypeOf(SubscriptedElement.prototype), "setDataType", this).call(this, localType);
    }
    /**
     * Rule function. Checks if the property is unused
     * @param {SubscriptedElement} exp 
     * @returns {Symptom[]}
     */
    //#endregion - extensions

  }]);

  return SubscriptedElement;
}(MultiPartExpressionNode);

exports.SubscriptedElement = SubscriptedElement;

function _checkUnused18(exp) {
  var symptoms = [];

  if (exp.getParent() === undefined || exp.getParent().is(_enums.ExpressionEntity.GroupStatement) && exp.getParent().getParent() === undefined) {
    symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnusedValue, [exp], 0, 0));
  }

  return symptoms;
}

function _checkSubscriptable2(exp) {
  var symptoms = [];
  var values = exp.getChildren();

  if (values.length > 0 && !(0, _utils.typeCanBeSubscripted)(values[0].getDataType())) {
    symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.SubscriptedNonSubscriptable, values, 0, values.length - 1, {
      isUndefined: values[0].getDataType() === _enums.DataType.Undefined,
      subscriptedType: values[0].getDataType(),
      varName: values[0].getTextValue()
    }));
  }

  return symptoms;
}

function _findDataType(children) {
  if (children.length !== 2) {
    return _enums.DataType.Unknown;
  } else if (children[0].getDataType() === _enums.DataType.String) {
    return _enums.DataType.String;
  } else if (children[1].is(_enums.ExpressionEntity.Slice)) {
    var valueType = children[0].getDataType();

    if (valueType === _enums.DataType.NotParsed || valueType === _enums.DataType.Unknown || valueType === _enums.DataType.List || valueType === _enums.DataType.Tuple || valueType === _enums.DataType.String) {
      return valueType;
    }

    return _enums.DataType.Invalid;
  }

  return _enums.DataType.Unknown;
}

var _checkUnused19 = /*#__PURE__*/new WeakSet();

var _checkForUnexpectedColon5 = /*#__PURE__*/new WeakSet();

var _checkInvalid = /*#__PURE__*/new WeakSet();

var _checkCalculatesNone = /*#__PURE__*/new WeakSet();

var CalculatedExpression = /*#__PURE__*/function (_MultiPartExpressionN16) {
  _inherits(CalculatedExpression, _MultiPartExpressionN16);

  var _super38 = _createSuper(CalculatedExpression);

  /**
   * Creates a new CalculatedExpression
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain exactly three elements
   */
  function CalculatedExpression(textValue, _children6) {
    var _classStaticPrivateMe;

    var _this27;

    _classCallCheck(this, CalculatedExpression);

    var dataType = _children6.length === 3 ? (_classStaticPrivateMe = _classStaticPrivateMethodGet(CalculatedExpression, CalculatedExpression, _findDataType3)).call.apply(_classStaticPrivateMe, [CalculatedExpression].concat(_toConsumableArray(_children6))) : _children6.length === 2 ? _classStaticPrivateMethodGet(CalculatedExpression, CalculatedExpression, _findPossibleNegativeNumber).call(CalculatedExpression, _children6[1]) : _enums.DataType.Unknown;
    _this27 = _super38.call(this, textValue, _children6, _enums.ExpressionEntity.CalculatedExpression, _enums.ExpressionCategory.MultipartValue, dataType);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this27), _checkCalculatesNone);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this27), _checkInvalid);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this27), _checkForUnexpectedColon5);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this27), _checkUnused19);

    if (_children6.length === 3) {
      _children6[0].addObserver(_assertThisInitialized(_this27));

      _children6[2].addObserver(_assertThisInitialized(_this27));
    } else {
      _children6[1].addObserver(_assertThisInitialized(_this27));
    }

    _this27.addRules([_classPrivateMethodGet(_assertThisInitialized(_this27), _checkCalculatesNone, _checkCalculatesNone2), _classPrivateMethodGet(_assertThisInitialized(_this27), _checkInvalid, _checkInvalid2), _classPrivateMethodGet(_assertThisInitialized(_this27), _checkForUnexpectedColon5, _checkForUnexpectedColon6), _classPrivateMethodGet(_assertThisInitialized(_this27), _checkUnused19, _checkUnused20)]);

    return _this27;
  } //#region - overrides

  /**
   * @override
   */


  _createClass(CalculatedExpression, [{
    key: "setDataType",
    value: function setDataType(dataType) {
      var _classStaticPrivateMe2;

      var children = this.getChildren();
      dataType = children.length === 3 ? (_classStaticPrivateMe2 = _classStaticPrivateMethodGet(CalculatedExpression, CalculatedExpression, _findDataType3)).call.apply(_classStaticPrivateMe2, [CalculatedExpression].concat(_toConsumableArray(children))) : _classStaticPrivateMethodGet(CalculatedExpression, CalculatedExpression, _findPossibleNegativeNumber).call(CalculatedExpression, children[1]);

      _get(_getPrototypeOf(CalculatedExpression.prototype), "setDataType", this).call(this, dataType);
    }
    /**
     * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
     * the type of node, this will need to be an exact match (by text value and entity) or a
     * category match.
     * @param {ExpressionNode} node 
     * @returns {Boolean}
     * @override
     */

  }, {
    key: "matchesPattern",
    value: function matchesPattern(node) {
      if (this.getEntity() !== node.getEntity()) return false;
      var children = this.getChildren();
      var nodeChildren = node.getChildren();
      if (children.length !== nodeChildren.length) return false;
      var variables = new Map();

      var _iterator111 = _createForOfIteratorHelper(children),
          _step111;

      try {
        for (_iterator111.s(); !(_step111 = _iterator111.n()).done;) {
          var c = _step111.value;
          var found = false;

          var _iterator112 = _createForOfIteratorHelper(nodeChildren),
              _step112;

          try {
            for (_iterator112.s(); !(_step112 = _iterator112.n()).done;) {
              var n = _step112.value;

              if (c.matchesPattern(n)) {
                found = true;
                break;
              }
            }
          } catch (err) {
            _iterator112.e(err);
          } finally {
            _iterator112.f();
          }

          if (!found && !c.is(_enums.ExpressionEntity.VariableName)) {
            return false;
          } else if (c.is(_enums.ExpressionEntity.VariableName)) {
            variables.set(c.getTextValue(), found);
          }
        }
      } catch (err) {
        _iterator111.e(err);
      } finally {
        _iterator111.f();
      }

      if (variables.size === 0) return true;
      return Array.from(variables.values()).filter(function (v) {
        return v === true;
      }).length > 0;
    } //#endregion - overrides
    //#region - extensions

    /**
     * Finds the data type of the expression when there are three children
     * @param {ExpressionNode} left 
     * @param {ExpressionNode} op 
     * @param {ExpressionNode} right 
     */
    //#endregion - extensions

  }]);

  return CalculatedExpression;
}(MultiPartExpressionNode);

exports.CalculatedExpression = CalculatedExpression;

function _findDataType3(left, op, right) {
  var leftType = left.getDataType();
  var rightType = right.getDataType();

  if (left.is(_enums.ExpressionEntity.StringLiteral) && op.is(_enums.ExpressionEntity.ModulusOperator)) {
    return _enums.DataType.String;
  } else if (leftType === _enums.DataType.NotParsed || rightType === _enums.DataType.NotParsed) return _enums.DataType.NotParsed;else if (leftType === _enums.DataType.Undefined && left.is(_enums.ExpressionEntity.VariableName) && left.isProxy() || rightType === _enums.DataType.Undefined && right.is(_enums.ExpressionEntity.VariableName) && right.isProxy()) {
    return _enums.DataType.Undefined;
  } else if (leftType === _enums.DataType.Unknown || rightType === _enums.DataType.Unknown) return _enums.DataType.Unknown;else if (leftType === _enums.DataType.Invalid || rightType === _enums.DataType.Invalid || leftType === _enums.DataType.NA || rightType === _enums.DataType.NA) return _enums.DataType.Invalid; // left and right are both numeric -> DataType.Number
  else if (left.isNumeric() && right.isNumeric()) {
    return _classStaticPrivateMethodGet(this, CalculatedExpression, _findNumericType).call(this, left, op, right);
  } // At least one side is not numeric.


  if (op.isOneOf([_enums.ExpressionEntity.ExponentOperator, _enums.ExpressionEntity.DivideOperator, _enums.ExpressionEntity.IntDivideOperator])) {
    return _enums.DataType.Invalid; // **, /, and // can only be used with numbers
  } else if (op.is(_enums.ExpressionEntity.MultiplyOperator)) {
    // If one side is numeric (but not float), multiply can be used with strings, lists, or tuples
    if (left.isNonFloatNumeric() && (rightType === _enums.DataType.String || rightType === _enums.DataType.List || rightType === _enums.DataType.Tuple)) {
      return rightType;
    } else if (right.isNonFloatNumeric() && (leftType === _enums.DataType.String || leftType === _enums.DataType.List || leftType === _enums.DataType.Tuple)) {
      return leftType;
    }

    return _enums.DataType.Invalid;
  } else if (op.is(_enums.ExpressionEntity.ModulusOperator)) {
    // If left side is a string, return string otherwise return invalid
    if (leftType === _enums.DataType.String) {
      return _enums.DataType.String;
    }

    return _enums.DataType.Invalid;
  } else if (op.is(_enums.ExpressionEntity.AddOperator)) {
    // Can concatenate string, list, and tuple
    if (leftType === rightType && (leftType === _enums.DataType.String || leftType === _enums.DataType.List || leftType === _enums.DataType.Tuple)) {
      return leftType;
    } else if (leftType === _enums.DataType.List && (rightType === _enums.DataType.String || rightType === _enums.DataType.Dict || rightType === _enums.DataType.Set || rightType === _enums.DataType.Tuple)) {
      return leftType;
    }

    return _enums.DataType.Invalid;
  } else if (op.is(_enums.ExpressionEntity.SubtractOperator)) {
    // Can subtract set from set
    if (leftType === _enums.DataType.Set && leftType === rightType) {
      return leftType;
    }

    return _enums.DataType.Invalid;
  }

  return _enums.DataType.Invalid;
}

function _findPossibleNegativeNumber(right) {
  var rightType = right.getDataType();

  if (rightType === _enums.DataType.Float || rightType === _enums.DataType.Int || rightType === _enums.DataType.Number || rightType === _enums.DataType.NotParsed || rightType === _enums.DataType.Unknown) {
    return rightType;
  } else if (rightType === _enums.DataType.Bool) {
    return _enums.DataType.Int;
  } else {
    return _enums.DataType.Invalid;
  }
}

function _findNumericType(left, op, right) {
  if (op.is(_enums.ExpressionEntity.DivideOperator)) {
    return _enums.DataType.Float;
  } else if (left.getDataType() === right.getDataType() && left.getDataType() !== _enums.DataType.Bool) {
    return left.getDataType();
  } else if (left.isIntLike() && right.isIntLike()) {
    return _enums.DataType.Int;
  } else if (left.getDataType() === _enums.DataType.Float || right.getDataType() === _enums.DataType.Float) {
    return _enums.DataType.Float;
  }

  return _enums.DataType.Number;
}

function _checkUnused20(exp) {
  var symptoms = [];

  if (exp.getParent() === undefined || exp.getParent().is(_enums.ExpressionEntity.GroupStatement) && exp.getParent().getParent() === undefined) {
    symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnusedValue, [exp], 0, 0));
  }

  return symptoms;
}

function _checkForUnexpectedColon6(exp) {
  var symptoms = [];
  var values = exp.getChildren();

  for (var i = 0; i < values.length; i++) {
    if (values[i].is(_enums.ExpressionEntity.Colon)) {
      symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnexpectedColon, values, 0, values.length - 1, {
        before: i > 0 ? values[i - 1].getTextValue() : _constants.EMPTY,
        after: i < values.length - 1 ? values[i + 1].getTextValue() : _constants.EMPTY
      }));
    }
  }

  return symptoms;
}

function _checkInvalid2(calc) {
  var symptoms = [];
  var children = calc.getChildren(); // Ignore operations involving undefined values

  if (calc.getDataType() === _enums.DataType.Invalid && children.filter(function (c) {
    return c.getDataType() === _enums.DataType.Undefined || c.getDataType() === _enums.DataType.Invalid;
  }).length === 0) {
    symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.TypeErrorInvalid, children, 0, children.length - 1, {
      parts: children.map(function (c) {
        return c.getDataType() === _enums.DataType.NA ? c.getTextValue() : c.getDataType().name;
      })
    }));
  }

  return symptoms;
}

function _checkCalculatesNone2(exp) {
  var symptoms = [];
  var values = exp.getChildren();
  var expandGroups = values.flatMap(function (val) {
    return !val.is(_enums.ExpressionEntity.GroupStatement) ? val : val.getContents();
  });
  var noneValues = expandGroups.filter(function (val) {
    return (0, _utils.isNoneFunction)(val) || val.getDataType() === _enums.DataType.None && !val.isOneOf([_enums.ExpressionEntity.NoneType, _enums.ExpressionEntity.VariableName]);
  });

  if (noneValues.length > 0) {
    symptoms.push.apply(symptoms, _toConsumableArray(noneValues.map(function (val) {
      return _symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.AssignedNone, [val], 0, 0, {
        expression: val,
        usage: _constants.CALCULATION
      });
    })));
  }

  return symptoms;
}

var _checkUnused21 = /*#__PURE__*/new WeakSet();

var _checkForUnexpectedColon7 = /*#__PURE__*/new WeakSet();

var _checkComparesLiteral = /*#__PURE__*/new WeakSet();

var _checkComparesNone = /*#__PURE__*/new WeakSet();

var ComparisonExpression = /*#__PURE__*/function (_MultiPartExpressionN17) {
  _inherits(ComparisonExpression, _MultiPartExpressionN17);

  var _super39 = _createSuper(ComparisonExpression);

  /**
   * Creates a new ComparisonExpression 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain exactly three elements
   */
  function ComparisonExpression(textValue, _children7) {
    var _classStaticPrivateMe3;

    var _this28;

    _classCallCheck(this, ComparisonExpression);

    //if (children.length !== 3 || !children[1].is(ExpressionCategory.ComparisonOperators)) 
    //    throw new Error("A comparison expression must contain exactly three children and the middle child must be a comparison operator");
    var dataType = _children7.length === 3 ? (_classStaticPrivateMe3 = _classStaticPrivateMethodGet(ComparisonExpression, ComparisonExpression, _findDataType5)).call.apply(_classStaticPrivateMe3, [ComparisonExpression].concat(_toConsumableArray(_children7))) : _enums.DataType.Unknown;
    _this28 = _super39.call(this, textValue, _children7, _enums.ExpressionEntity.ComparisonExpression, _enums.ExpressionCategory.MultipartValue, dataType);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this28), _checkComparesNone);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this28), _checkComparesLiteral);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this28), _checkForUnexpectedColon7);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this28), _checkUnused21);

    if (_children7.length === 3) {
      _children7[0].addObserver(_assertThisInitialized(_this28));

      _children7[2].addObserver(_assertThisInitialized(_this28));
    }

    _this28.addRules([_classPrivateMethodGet(_assertThisInitialized(_this28), _checkComparesNone, _checkComparesNone2), _classPrivateMethodGet(_assertThisInitialized(_this28), _checkComparesLiteral, _checkComparesLiteral2), _classPrivateMethodGet(_assertThisInitialized(_this28), _checkForUnexpectedColon7, _checkForUnexpectedColon8), _classPrivateMethodGet(_assertThisInitialized(_this28), _checkUnused21, _checkUnused22)]);

    return _this28;
  } //#region - overrides

  /**
   * @override 
   */


  _createClass(ComparisonExpression, [{
    key: "setDataType",
    value: function setDataType(dataType) {
      var _classStaticPrivateMe4;

      var localType = (_classStaticPrivateMe4 = _classStaticPrivateMethodGet(ComparisonExpression, ComparisonExpression, _findDataType5)).call.apply(_classStaticPrivateMe4, [ComparisonExpression].concat(_toConsumableArray(this.getChildren())));

      if (localType !== this.getDataType()) {
        _get(_getPrototypeOf(ComparisonExpression.prototype), "setDataType", this).call(this, localType);
      }
    }
    /**
     * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
     * the type of node, this will need to be an exact match (by text value and entity) or a
     * category match.
     * @param {ExpressionNode} node 
     * @returns {Boolean}
     * @override
     */

  }, {
    key: "matchesPattern",
    value: function matchesPattern(node) {
      if (this.getEntity() !== node.getEntity()) return false;
      var children = this.getChildren();
      var nodeChildren = node.getChildren();
      if (children.length !== nodeChildren.length) return false;
      var variables = new Map();

      for (var u = 0; u < children.length; u++) {
        //for (const c of children) {
        if (children[u].is(_enums.ExpressionEntity.InKeyword)) {
          for (var i = 0; i < nodeChildren.length; i++) {
            if (nodeChildren[i].is(_enums.ExpressionEntity.NotInKeyword)) {
              return true;
            }
          }

          return false;
        } else if (children[u].is(_enums.ExpressionEntity.NotInKeyword)) {
          for (var _i = 0; _i < nodeChildren.length; _i++) {
            if (nodeChildren[_i].is(_enums.ExpressionEntity.InKeyword)) {
              return true;
            }
          }

          return false;
        }

        var found = false;

        var _iterator113 = _createForOfIteratorHelper(nodeChildren),
            _step113;

        try {
          for (_iterator113.s(); !(_step113 = _iterator113.n()).done;) {
            var n = _step113.value;

            if (children[u].matchesPattern(n)) {
              found = true;
              break;
            }
          }
        } catch (err) {
          _iterator113.e(err);
        } finally {
          _iterator113.f();
        }

        if (!found && !children[u].isOneOf([_enums.ExpressionEntity.VariableName, _enums.ExpressionEntity.BuiltInFunctionCall, _enums.ExpressionEntity.UserDefinedFunctionCall, _enums.ExpressionEntity.SubscriptedExpression])) {
          return false;
        } else if (children[u].isOneOf([_enums.ExpressionEntity.VariableName, _enums.ExpressionEntity.BuiltInFunctionCall, _enums.ExpressionEntity.UserDefinedFunctionCall, _enums.ExpressionEntity.SubscriptedExpression])) {
          variables.set(children[u].getTextValue(), found);
        }
      }

      if (variables.size === 0) return true;
      return Array.from(variables.values()).filter(function (v) {
        return v === true;
      }).length > 0;
    } //#endregion - overrides
    //#region - extensions

  }, {
    key: "convertToIterator",
    value: function convertToIterator() {
      var children = this.getChildren();

      if (children.length === 3) {
        children[0].removeObserver(this);
        children[2].removeObserver(this);
      }

      return new IteratorExpression(this.getTextValue(), children);
    }
    /**
     * Gets the data type of the expression
     * @param {ExpressionNode} left 
     * @param {ExpressionNode} op 
     * @param {ExpressionNode} right 
     * @returns {DataType}
     */
    //#endregion - extensions

  }]);

  return ComparisonExpression;
}(MultiPartExpressionNode);

exports.ComparisonExpression = ComparisonExpression;

function _findDataType5(left, op, right) {
  var leftType = left.getDataType();
  var rightType = right.getDataType();

  if (op.isOneOf([_enums.ExpressionEntity.EqualOperator, _enums.ExpressionEntity.NotEqualOperator, _enums.ExpressionEntity.IsKeyword, _enums.ExpressionEntity.IsNotKeyword])) {
    return _enums.DataType.Bool;
  } else if (op.isOneOf([_enums.ExpressionEntity.InKeyword, _enums.ExpressionEntity.NotInKeyword])) {
    if (rightType === _enums.DataType.String && (leftType === _enums.DataType.String || leftType === _enums.DataType.Unknown || leftType === _enums.DataType.NotParsed) || rightType === _enums.DataType.List || rightType === _enums.DataType.Tuple || rightType === _enums.DataType.Set || rightType === _enums.DataType.Dict || rightType === _enums.DataType.Unknown) {
      return _enums.DataType.Bool;
    } else if (rightType === _enums.DataType.NotParsed) {
      return _enums.DataType.NotParsed;
    }

    return _enums.DataType.Invalid;
  } else {
    // <, > etc
    if (leftType === _enums.DataType.NotParsed || rightType === _enums.DataType.NotParsed) {
      return _enums.DataType.NotParsed;
    } else if (leftType === _enums.DataType.None || rightType === _enums.DataType.None) {
      return _enums.DataType.Invalid;
    } else if (leftType === _enums.DataType.Unknown || rightType === _enums.DataType.Unknown || left.isNumeric() && right.isNumeric() || leftType === rightType) {
      return _enums.DataType.Bool;
    }

    return _enums.DataType.Invalid;
  }
}

function _checkUnused22(exp) {
  var symptoms = [];
  var children = exp.getChildren();

  if (!(children[0] !== undefined && children[0].is(_enums.ExpressionEntity.BuiltInFunctionCall) && children[0].getFunctionExpression().is(_enums.ExpressionEntity.AssertFunction)) && (exp.getParent() === undefined || exp.getParent().is(_enums.ExpressionEntity.GroupStatement) && exp.getParent().getParent() === undefined)) {
    symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnusedValue, [exp], 0, 0));
  }

  return symptoms;
}

function _checkForUnexpectedColon8(exp) {
  var symptoms = [];
  var values = exp.getChildren();

  for (var i = 0; i < values.length; i++) {
    if (values[i].is(_enums.ExpressionEntity.Colon)) {
      symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnexpectedColon, values, 0, values.length - 1, {
        before: i > 0 ? values[i - 1].getTextValue() : _constants.EMPTY,
        after: i < values.length - 1 ? values[i + 1].getTextValue() : _constants.EMPTY
      }));
    }
  }

  return symptoms;
}

function _checkComparesLiteral2(comparison) {
  var symptoms = [];
  var children = comparison.getChildren();

  if (children.length === 3 && children[1].isOneOf([_enums.ExpressionEntity.EqualOperator, _enums.ExpressionEntity.IsKeyword]) && children[2].isOneOf([_enums.ExpressionEntity.TrueType, _enums.ExpressionEntity.FalseType])) {
    symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.CompareBoolLiteral, children, 0, children.length - 1, {
      boolValue: children[0].getTextValue(),
      operator: children[1].getTextValue(),
      boolLiteral: children[2].getTextValue()
    }));
  }

  return symptoms;
}

function _checkComparesNone2(exp) {
  var symptoms = [];
  var values = exp.getChildren();
  var expandGroups = values.flatMap(function (val) {
    return !val.is(_enums.ExpressionEntity.GroupStatement) ? val : val.getContents();
  });
  var noneValues = expandGroups.filter(function (val) {
    return !(val.is(_enums.ExpressionEntity.BuiltInFunctionCall) && val.getFunctionExpression().is(_enums.ExpressionEntity.AssertFunction)) && ((0, _utils.isNoneFunction)(val) || val.getDataType() === _enums.DataType.None && !val.isOneOf([_enums.ExpressionEntity.NoneType, _enums.ExpressionEntity.VariableName]));
  });

  if (noneValues.length > 0) {
    symptoms.push.apply(symptoms, _toConsumableArray(noneValues.map(function (val) {
      return _symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.AssignedNone, [val], 0, 0, {
        expression: val,
        usage: _constants.COMPARISON
      });
    })));
  }

  return symptoms;
}

var _checkUnused23 = /*#__PURE__*/new WeakSet();

var _checkForUnexpectedColon9 = /*#__PURE__*/new WeakSet();

var _checkNaturalLanguage = /*#__PURE__*/new WeakSet();

var BooleanExpression = /*#__PURE__*/function (_MultiPartExpressionN18) {
  _inherits(BooleanExpression, _MultiPartExpressionN18);

  var _super40 = _createSuper(BooleanExpression);

  /**
   * Creates a new BooleanExpression 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain multiple elements
   */
  function BooleanExpression(textValue, _children8) {
    var _this29;

    _classCallCheck(this, BooleanExpression);

    var dataType = _classStaticPrivateMethodGet(BooleanExpression, BooleanExpression, _findDataType7).call(BooleanExpression, _children8);

    _this29 = _super40.call(this, textValue, _children8, _enums.ExpressionEntity.BooleanExpression, _enums.ExpressionCategory.MultipartValue, dataType);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this29), _checkNaturalLanguage);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this29), _checkForUnexpectedColon9);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this29), _checkUnused23);

    if (_children8.length === 3 && _children8[1].is(_enums.ExpressionCategory.LogicalOperators)) {
      _children8[0].addObserver(_assertThisInitialized(_this29));

      _children8[2].addObserver(_assertThisInitialized(_this29));
    }

    _this29.addRules([_classPrivateMethodGet(_assertThisInitialized(_this29), _checkNaturalLanguage, _checkNaturalLanguage2), _classPrivateMethodGet(_assertThisInitialized(_this29), _checkForUnexpectedColon9, _checkForUnexpectedColon10), _classPrivateMethodGet(_assertThisInitialized(_this29), _checkUnused23, _checkUnused24)]);

    return _this29;
  } //#region - overrides


  _createClass(BooleanExpression, [{
    key: "setDataType",
    value: function setDataType(dataType) {
      var localType = _classStaticPrivateMethodGet(BooleanExpression, BooleanExpression, _findDataType7).call(BooleanExpression, this.getChildren());

      if (localType !== this.getDataType()) {
        _get(_getPrototypeOf(BooleanExpression.prototype), "setDataType", this).call(this, localType);
      }
    }
    /**
     * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
     * the type of node, this will need to be an exact match (by text value and entity) or a
     * category match.
     * @param {ExpressionNode} node 
     * @returns {Boolean}
     * @override
     */

  }, {
    key: "matchesPattern",
    value: function matchesPattern(node) {
      var children = this.getChildren();

      if (this.getEntity() !== node.getEntity()) {
        if (node.is(_enums.ExpressionEntity.VariableName) && children.length === 2 && children[0].is(_enums.ExpressionEntity.NotOperator) && children[1].is(_enums.ExpressionEntity.VariableName)) {
          return children[1].matchesPattern(node);
        }

        return false;
      }

      var nodeChildren = node.getChildren();
      var variables = new Map();

      var _iterator114 = _createForOfIteratorHelper(children),
          _step114;

      try {
        for (_iterator114.s(); !(_step114 = _iterator114.n()).done;) {
          var c = _step114.value;

          if (c.is(_enums.ExpressionEntity.NotOperator)) {
            continue; //return false;
          }

          var found = false;

          var _iterator115 = _createForOfIteratorHelper(nodeChildren),
              _step115;

          try {
            for (_iterator115.s(); !(_step115 = _iterator115.n()).done;) {
              var n = _step115.value;

              if (n.is(_enums.ExpressionEntity.NotOperator)) {
                continue;
              }

              if (c.matchesPattern(n)) {
                found = true;
                break;
              }
            }
          } catch (err) {
            _iterator115.e(err);
          } finally {
            _iterator115.f();
          }

          if (!found && !c.is(_enums.ExpressionEntity.VariableName)) {
            return false;
          } else if (c.is(_enums.ExpressionEntity.VariableName)) {
            variables.set(c.getTextValue(), found);
          }
        }
      } catch (err) {
        _iterator114.e(err);
      } finally {
        _iterator114.f();
      }

      if (variables.size === 0) return true;
      return Array.from(variables.values()).filter(function (v) {
        return v === true;
      }).length > 0;
    }
    /**
     * @override
     */

    /* SAME AS MULTIPART
    getVariableExpressions() {
        let variables = [];
        for (let value of this.getChildren()) {
            variables = variables.concat(value.getVariableExpressions())
        }
        return variables;
    }*/
    //#endregion - overrides
    //#region - extensions

    /**
     * Gets the data type of the expression
     * @param {ExpressionNode} left 
     * @param {ExpressionNode} op 
     * @param {ExpressionNode} right 
     * @returns {DataType}
     */
    //#endregion - extensions

  }]);

  return BooleanExpression;
}(MultiPartExpressionNode);

exports.BooleanExpression = BooleanExpression;

function _findDataType7(children) {
  if (children.length === 2 && children[0].is(_enums.ExpressionEntity.NotOperator)) {
    return _enums.DataType.Bool;
  } else if (children.length === 3 && children[1].is(_enums.ExpressionCategory.LogicalOperators)) {
    var leftType = children[0].getDataType();
    var rightType = children[2].getDataType();

    if (leftType === rightType) {
      return leftType;
    } else if (leftType === _enums.DataType.NotParsed || rightType === _enums.DataType.NotParsed) {
      return _enums.DataType.NotParsed;
    }

    return _enums.DataType.Unknown;
  } else {
    return _enums.DataType.Invalid;
  }
}

function _checkUnused24(exp) {
  var symptoms = [];

  if (exp.getParent() === undefined || exp.getParent().is(_enums.ExpressionEntity.GroupStatement) && exp.getParent().getParent() === undefined) {
    symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnusedValue, [exp], 0, 0));
  }

  return symptoms;
}

function _checkForUnexpectedColon10(exp) {
  var symptoms = [];
  var values = exp.getChildren();

  for (var i = 0; i < values.length; i++) {
    if (values[i].is(_enums.ExpressionEntity.Colon)) {
      symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnexpectedColon, values, 0, values.length - 1, {
        before: i > 0 ? values[i - 1].getTextValue() : _constants.EMPTY,
        after: i < values.length - 1 ? values[i + 1].getTextValue() : _constants.EMPTY
      }));
    }
  }

  return symptoms;
}

function _checkNaturalLanguage2(exp) {
  var symptoms = [];
  var children = exp.getChildren();

  if (children.length === 3) {
    var compType = children[2].getDataType();

    if (compType === _enums.DataType.NA && children[2].is(_enums.ExpressionEntity.IfDefinition)) {
      symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.NaturalLanguageBoolean, children, 1, 2, {
        form: _constants.OR_IF,
        operator: children[1].getTextValue()
      }));
    } else if (compType !== _enums.DataType.Bool && compType !== _enums.DataType.Unknown) {
      symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.NaturalLanguageBoolean, children, 1, 2, {
        form: _constants.OR_NON_BOOL,
        operator: children[1].getTextValue(),
        valueType: children[2].getDataType()
      }));
    }
  }

  return symptoms;
}

var _inIndex = /*#__PURE__*/new WeakMap();

var _iterable = /*#__PURE__*/new WeakMap();

var _loopVariables = /*#__PURE__*/new WeakMap();

var _setRoles = /*#__PURE__*/new WeakSet();

var _setObservers = /*#__PURE__*/new WeakSet();

var _setLoopVariableDataTypes = /*#__PURE__*/new WeakSet();

var _checkForOverwrite = /*#__PURE__*/new WeakSet();

var _checkForUnexpectedColon11 = /*#__PURE__*/new WeakSet();

var IteratorExpression = /*#__PURE__*/function (_MultiPartExpressionN19) {
  _inherits(IteratorExpression, _MultiPartExpressionN19);

  var _super41 = _createSuper(IteratorExpression);

  /** @type {Number} */

  /** @type {ExpressionNode} */

  /** @type {ExpressionNode[]} */

  /**
   * Creates a new IteratorExpression 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain multiple elements
   */
  function IteratorExpression(textValue, _children9) {
    var _this30;

    _classCallCheck(this, IteratorExpression);

    _this30 = _super41.call(this, textValue, _children9, _enums.ExpressionEntity.IteratorExpression, _enums.ExpressionCategory.MultipartValue, _enums.DataType.NA);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this30), _checkForUnexpectedColon11);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this30), _checkForOverwrite);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this30), _setLoopVariableDataTypes);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this30), _setObservers);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this30), _setRoles);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this30), _inIndex, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this30), _iterable, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this30), _loopVariables, {
      writable: true,
      value: []
    });

    _classPrivateMethodGet(_assertThisInitialized(_this30), _setRoles, _setRoles2).call(_assertThisInitialized(_this30));

    _this30.addRules([_classPrivateMethodGet(_assertThisInitialized(_this30), _checkForUnexpectedColon11, _checkForUnexpectedColon12), _classPrivateMethodGet(_assertThisInitialized(_this30), _checkForOverwrite, _checkForOverwrite2)]);

    return _this30;
  }
  /**
   * @override
   */


  _createClass(IteratorExpression, [{
    key: "checkForSymptoms",
    value: function checkForSymptoms() {
      this.checkRules(this);

      _classPrivateFieldGet(this, _iterable).checkForSymptoms();

      var _iterator116 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _loopVariables)),
          _step116;

      try {
        for (_iterator116.s(); !(_step116 = _iterator116.n()).done;) {
          var v = _step116.value;
          v.checkForSymptoms();
        }
      } catch (err) {
        _iterator116.e(err);
      } finally {
        _iterator116.f();
      }
    } //#region - overrides

    /**
     * @override
     */

  }, {
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      var variables = _classPrivateFieldGet(this, _iterable).getVariableExpressions();

      var _iterator117 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _loopVariables)),
          _step117;

      try {
        for (_iterator117.s(); !(_step117 = _iterator117.n()).done;) {
          var i = _step117.value;
          variables = variables.concat(i.getVariableExpressions());
        }
      } catch (err) {
        _iterator117.e(err);
      } finally {
        _iterator117.f();
      }

      return variables;
    }
    /** @override */

  }, {
    key: "setDataType",
    value: function setDataType(dataType) {
      _classPrivateMethodGet(this, _setLoopVariableDataTypes, _setLoopVariableDataTypes2).call(this);
    }
    /**
     * @override
     */

  }, {
    key: "setBlockId",
    value: function setBlockId(id) {
      _get(_getPrototypeOf(IteratorExpression.prototype), "setBlockId", this).call(this, id); // NEED TO OVERRIDE BY TYPE...


      var _iterator118 = _createForOfIteratorHelper(this.getChildren()),
          _step118;

      try {
        for (_iterator118.s(); !(_step118 = _iterator118.n()).done;) {
          var exp = _step118.value;
          exp.setBlockId(id);
        }
      } catch (err) {
        _iterator118.e(err);
      } finally {
        _iterator118.f();
      }

      _classPrivateFieldGet(this, _iterable).setBlockId(id);
    } //#endregion - overrides
    //#region - extensions

  }, {
    key: "getLoopVariables",
    value: function getLoopVariables() {
      return _classPrivateFieldGet(this, _loopVariables);
    }
  }, {
    key: "getIterable",
    value: function getIterable() {
      return _classPrivateFieldGet(this, _iterable);
    }
    /**
     * Rule finder. Looks for cases of the target variable overwriting a variable used in the iterable
     * @param {IteratorExpression} exp 
     * @returns {Symptom[]}
     */
    //#endregion - extensions

  }]);

  return IteratorExpression;
}(MultiPartExpressionNode);

exports.IteratorExpression = IteratorExpression;

function _setRoles2() {
  var children = this.getChildren();

  _classPrivateFieldSet(this, _inIndex, (0, _utils.indexOfExpression)(children, _enums.ExpressionEntity.InKeyword));

  _classPrivateFieldSet(this, _iterable, children[children.length - 1]);

  _classPrivateFieldSet(this, _loopVariables, _classPrivateFieldGet(this, _inIndex) === 1 && children[0].is(_enums.ExpressionEntity.TupleDefinition) ? children[0].getElements().filter(function (node) {
    return node[0].is(_enums.ExpressionEntity.VariableName);
  }).map(function (node) {
    return node[0];
  }) : children.slice(0, _classPrivateFieldGet(this, _inIndex)).filter(function (node) {
    return node.is(_enums.ExpressionEntity.VariableName);
  }));

  var _iterator144 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _loopVariables)),
      _step144;

  try {
    for (_iterator144.s(); !(_step144 = _iterator144.n()).done;) {
      var v = _step144.value;
      v.setAssignedOrChanged();
    }
  } catch (err) {
    _iterator144.e(err);
  } finally {
    _iterator144.f();
  }

  _classPrivateMethodGet(this, _setObservers, _setObservers2).call(this);
}

function _setObservers2() {
  if (_classPrivateFieldGet(this, _iterable).isOneOf([_enums.ExpressionEntity.BuiltInFunctionCall, _enums.ExpressionEntity.BuiltInMethodCall])) {
    // enumerate, range
    var funcEntity = !_classPrivateFieldGet(this, _iterable).is(_enums.ExpressionEntity.BuiltInMethodCall) ? _classPrivateFieldGet(this, _iterable).getFunctionEntity() : _classPrivateFieldGet(this, _iterable).getMethodEntity();

    if (funcEntity === _enums.ExpressionEntity.EnumerateFunction) {
      if (_classPrivateFieldGet(this, _loopVariables).length === 1) {
        _classPrivateFieldGet(this, _loopVariables)[0].setDataType(_enums.DataType.Tuple);
      } else if (_classPrivateFieldGet(this, _loopVariables).length === 2) {
        _classPrivateFieldGet(this, _loopVariables)[0].setDataType(_enums.DataType.Int);

        var enumerateArgs = _classPrivateFieldGet(this, _iterable).getArguments();

        var valueType = enumerateArgs.length === 1 && enumerateArgs[0].length === 1 && enumerateArgs[0][0].getDataType() === _enums.DataType.String ? _enums.DataType.String : _enums.DataType.Unknown;

        _classPrivateFieldGet(this, _loopVariables)[1].setDataType(valueType);
      } else {
        var _iterator145 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _loopVariables)),
            _step145;

        try {
          for (_iterator145.s(); !(_step145 = _iterator145.n()).done;) {
            var l = _step145.value;
            l.setDataType(_enums.DataType.Unknown);
          }
        } catch (err) {
          _iterator145.e(err);
        } finally {
          _iterator145.f();
        }
      }
    } else if (funcEntity === _enums.ExpressionEntity.RangeFunction && _classPrivateFieldGet(this, _loopVariables).length === 1) {
      _classPrivateFieldGet(this, _loopVariables)[0].setDataType(_enums.DataType.Int);
    } else if (_utils.builtInReturnLookup.get(funcEntity) === _enums.DataType.String && _classPrivateFieldGet(this, _loopVariables).length === 1) {
      _classPrivateFieldGet(this, _loopVariables)[0].setDataType(_enums.DataType.String);
    } else {
      var _iterator146 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _loopVariables)),
          _step146;

      try {
        for (_iterator146.s(); !(_step146 = _iterator146.n()).done;) {
          var _l = _step146.value;

          _l.setDataType(_enums.DataType.Unknown);
        }
      } catch (err) {
        _iterator146.e(err);
      } finally {
        _iterator146.f();
      }
    }
  } else {
    _classPrivateFieldGet(this, _iterable).addObserver(this);

    _classPrivateMethodGet(this, _setLoopVariableDataTypes, _setLoopVariableDataTypes2).call(this);
  }
}

function _setLoopVariableDataTypes2() {
  var iterType = _classPrivateFieldGet(this, _iterable).getDataType() === _enums.DataType.String || _classPrivateFieldGet(this, _iterable).getDataType() === _enums.DataType.File ? _enums.DataType.String : _enums.DataType.Unknown;

  var _iterator147 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _loopVariables)),
      _step147;

  try {
    for (_iterator147.s(); !(_step147 = _iterator147.n()).done;) {
      var v = _step147.value;
      v.setDataType(iterType);
    }
  } catch (err) {
    _iterator147.e(err);
  } finally {
    _iterator147.f();
  }
}

function _checkForOverwrite2(exp) {
  var symptoms = [];

  var iterableVars = _classPrivateFieldGet(exp, _iterable).getVariableExpressions();

  var _iterator148 = _createForOfIteratorHelper(_classPrivateFieldGet(exp, _loopVariables)),
      _step148;

  try {
    for (_iterator148.s(); !(_step148 = _iterator148.n()).done;) {
      var target = _step148.value;

      var _iterator149 = _createForOfIteratorHelper(iterableVars),
          _step149;

      try {
        for (_iterator149.s(); !(_step149 = _iterator149.n()).done;) {
          var i = _step149.value;

          if (target.getTextValue() === i.getTextValue()) {
            var lastUsages = target.getLastUsages();
            symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.OverwrittenVariable, [target], 0, 0, {
              isParameter: i.getLastUsages().length > 0 && i.getLastUsages()[0].isParameter(),
              prevUsageIsDefinition: false,
              overwriteType: _constants.TARGET_REPLACES_ITERABLE,
              overwriteValue: target.compareValues(target, [lastUsages[lastUsages.length - 1]]),
              overwrittenVar: [{
                lineNumber: lastUsages[lastUsages.length - 1].getStartLineNumber(),
                blockId: lastUsages[lastUsages.length - 1].getBlockId()
              }]
            }));
          }
        }
      } catch (err) {
        _iterator149.e(err);
      } finally {
        _iterator149.f();
      }
    }
    /*
    symptoms.push(SymptomFinder.createStatementSymptom(SymptomType.OverwrittenVariable, [varExp], 0, 0, {
                                    isParameter: lastUsages.length === 1 && lastUsages[0].isParameter(),
                                    prevUsageIsDefinition: lastUsages.length === 1 && lastUsages[0].getLastUsages().length === 0,
                                    overwriteType: parent.is(ExpressionEntity.AssignmentStatement) ? ASSIGNMENT : FOR_LOOP_VAR,
                                    overwriteValue: varExp.#compareValues(varExp, lastUsages),
                                    overwrittenVar: lastUsages.map(u => ({
                                        lineNum: u.getStartLineNumber(),
                                        block: u.getBlockId()
                                    }))
                                }))
    */

  } catch (err) {
    _iterator148.e(err);
  } finally {
    _iterator148.f();
  }

  return symptoms;
}

function _checkForUnexpectedColon12(exp) {
  var symptoms = [];
  var values = exp.getChildren();

  for (var i = 0; i < values.length; i++) {
    if (values[i].is(_enums.ExpressionEntity.Colon)) {
      symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnexpectedColon, values, 0, values.length - 1, {
        before: i > 0 ? values[i - 1].getTextValue() : _constants.EMPTY,
        after: i < values.length - 1 ? values[i + 1].getTextValue() : _constants.EMPTY
      }));
    }
  }

  return symptoms;
}

var _arguments3 = /*#__PURE__*/new WeakMap();

var _return = /*#__PURE__*/new WeakMap();

var LambdaExpression = /*#__PURE__*/function (_MultiPartExpressionN20) {
  _inherits(LambdaExpression, _MultiPartExpressionN20);

  var _super42 = _createSuper(LambdaExpression);

  /** @type {ExpressionNode[][]} */

  /** @type {ExpressionNode} */

  /**
   * Creates a new BooleanExpression 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain multiple elements
   */
  function LambdaExpression(textValue, children) {
    var _this31;

    _classCallCheck(this, LambdaExpression);

    if (children.length < 4) {
      throw new Error("A lambda expression must have a minimum of 4 children");
    } // Separate args and return


    var parts = _rawtextprocessing.StatementProcessor.split(children.slice(1), _enums.ExpressionEntity.Colon);

    if (parts.length !== 2) {
      throw new Error("Lambda expects at least one argument and a return value");
    }

    var args = _rawtextprocessing.StatementProcessor.split(parts[0], _enums.ExpressionEntity.Comma);

    var _iterator119 = _createForOfIteratorHelper(args),
        _step119;

    try {
      for (_iterator119.s(); !(_step119 = _iterator119.n()).done;) {
        var a = _step119.value;

        var _iterator120 = _createForOfIteratorHelper(a),
            _step120;

        try {
          for (_iterator120.s(); !(_step120 = _iterator120.n()).done;) {
            var item = _step120.value;

            if (item.is(_enums.ExpressionEntity.VariableName)) {
              item.setAssignedOrChanged();
              item.setDataType(_enums.DataType.Unknown);
            }
          }
        } catch (err) {
          _iterator120.e(err);
        } finally {
          _iterator120.f();
        }
      }
    } catch (err) {
      _iterator119.e(err);
    } finally {
      _iterator119.f();
    }

    var ret = _rawtextprocessing.StatementProcessor.createTree(parts[1]);

    if (ret.length !== 1) {
      throw new Error("Lambda can only have one return value");
    }

    _this31 = _super42.call(this, textValue, children, _enums.ExpressionEntity.LambdaDefinitionStatement, _enums.ExpressionCategory.BlockDefinitions, ret[0].getDataType());

    _classPrivateFieldInitSpec(_assertThisInitialized(_this31), _arguments3, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this31), _return, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this31), _arguments3, args);

    _classPrivateFieldSet(_assertThisInitialized(_this31), _return, ret[0]);

    ret[0].addObserver(_assertThisInitialized(_this31));
    return _this31;
  }
  /**
   * @override
   */


  _createClass(LambdaExpression, [{
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      var variables = [];

      var _iterator121 = _createForOfIteratorHelper(this.getChildren()),
          _step121;

      try {
        for (_iterator121.s(); !(_step121 = _iterator121.n()).done;) {
          var item = _step121.value;

          if (item.is(_enums.ExpressionEntity.VariableName)) {
            variables.push(item);
          } else {
            variables = variables.concat(item.getVariableExpressions());
          }
        }
      } catch (err) {
        _iterator121.e(err);
      } finally {
        _iterator121.f();
      }

      return variables;
    }
  }]);

  return LambdaExpression;
}(MultiPartExpressionNode);

exports.LambdaExpression = LambdaExpression;

var _checkReturnsBool = /*#__PURE__*/new WeakSet();

var TernaryExpression = /*#__PURE__*/function (_MultiPartExpressionN21) {
  _inherits(TernaryExpression, _MultiPartExpressionN21);

  var _super43 = _createSuper(TernaryExpression);

  /**
   * Creates a new TernaryExpression 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain multiple elements
   */
  function TernaryExpression(textValue, _children10) {
    var _this32;

    _classCallCheck(this, TernaryExpression);

    if (_children10.length !== 5) {
      throw new Error("Ternary should contain 5 children");
    }

    var dataType = _classStaticPrivateMethodGet(TernaryExpression, TernaryExpression, _findDataType9).call(TernaryExpression, _children10);

    _this32 = _super43.call(this, textValue, _children10, _enums.ExpressionEntity.TernaryStatement, _enums.ExpressionCategory.BlockDefinitionStatement, dataType);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this32), _checkReturnsBool);

    _children10[0].addObserver(_assertThisInitialized(_this32));

    _children10[4].addObserver(_assertThisInitialized(_this32));

    _this32.addRule(_classPrivateMethodGet(_assertThisInitialized(_this32), _checkReturnsBool, _checkReturnsBool2));

    return _this32;
  }
  /**
   * @override 
   */


  _createClass(TernaryExpression, [{
    key: "setDataType",
    value: function setDataType(dataType) {
      var localType = _classStaticPrivateMethodGet(TernaryExpression, TernaryExpression, _findDataType9).call(TernaryExpression, this.getChildren());

      if (localType !== this.getDataType()) {
        _get(_getPrototypeOf(TernaryExpression.prototype), "setDataType", this).call(this, localType);
      }
    }
  }]);

  return TernaryExpression;
}(MultiPartExpressionNode);

exports.TernaryExpression = TernaryExpression;

function _findDataType9(children) {
  if (children.length === 5) return (0, _utils.getAggregateType)([children[0].getDataType(), children[4].getDataType()]);else return _enums.DataType.Unknown;
}

function _checkReturnsBool2(ternary) {
  var symptoms = [];

  if (ternary.getDataType() === _enums.DataType.Bool) {
    var children = ternary.getChildren();

    if (children[0].is(_enums.ExpressionEntity.TrueType) && children[4].is(_enums.ExpressionEntity.FalseType) || children[0].is(_enums.ExpressionEntity.FalseType) && children[4].is(_enums.ExpressionEntity.TrueType)) {
      symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.TernaryReturnsBool, children, 0, children.length - 1, {
        boolValue: children[2].getTextValue(),
        boolLiteralIfTrue: children[0].getTextValue(),
        boolLiteralIfFalse: children[4].getTextValue()
      }));
    }
  }

  return symptoms;
}

var _indexOfIterator = /*#__PURE__*/new WeakSet();

var _processNestedListComp = /*#__PURE__*/new WeakSet();

var ListComprehensionExpression = /*#__PURE__*/function (_MultiPartExpressionN22) {
  _inherits(ListComprehensionExpression, _MultiPartExpressionN22);

  var _super44 = _createSuper(ListComprehensionExpression);

  /**
   * Creates a new ListComprehensionExpression 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain multiple elements
   */
  function ListComprehensionExpression(textValue, _children11) {
    var _this33;

    _classCallCheck(this, ListComprehensionExpression);

    if (_children11.length < 3 || _children11.length > 5) {
      throw new Error("List comprehension should contain 3-5 children");
    }

    _this33 = _super44.call(this, textValue, _children11, _enums.ExpressionEntity.ListComprehension, _enums.ExpressionCategory.BlockDefinitionStatement, _enums.DataType.List);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this33), _processNestedListComp);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this33), _indexOfIterator);

    var blockId = "".concat(_children11[0].getStartLineNumber(), "-listComprehension-").concat(_children11[0].getDocumentStartIndex());

    _this33.setBlockId(blockId);

    _this33.setScopeId(blockId);

    var _iterator122 = _createForOfIteratorHelper(_children11),
        _step122;

    try {
      for (_iterator122.s(); !(_step122 = _iterator122.n()).done;) {
        var c = _step122.value;
        c.setBlockId(blockId);
        c.setScopeId(blockId);
      }
    } catch (err) {
      _iterator122.e(err);
    } finally {
      _iterator122.f();
    }

    _classPrivateMethodGet(_assertThisInitialized(_this33), _processNestedListComp, _processNestedListComp2).call(_assertThisInitialized(_this33));

    return _this33;
  }
  /**
   * @override
   * @inheritdoc
   */


  _createClass(ListComprehensionExpression, [{
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      // Iterator first, then first expression
      var variables = [];
      var children = this.getChildren();

      var iteratorIndex = _classPrivateMethodGet(this, _indexOfIterator, _indexOfIterator2).call(this);

      if (iteratorIndex > -1) {
        variables = variables.concat(children[iteratorIndex].getVariableExpressions());

        for (var i = 0; i < children.length; i++) {
          if (i !== iteratorIndex) {
            variables = variables.concat(children[i].getVariableExpressions());
          }
        }
      }

      return variables;
    }
  }, {
    key: "copyAndConvertToPlaceholder",
    value:
    /**
     * Used for variable / block processing. Returns a copy of this expression and empties the
     * current values.
     * @returns {ListComprehensionExpression}
     */
    function copyAndConvertToPlaceholder() {
      var copy = new ListComprehensionExpression(this.getTextValue(), this.getChildren());
      this.setTextValue("");
      this.setChildren([]);
      return copy;
    }
  }]);

  return ListComprehensionExpression;
}(MultiPartExpressionNode);

exports.ListComprehensionExpression = ListComprehensionExpression;

function _indexOfIterator2() {
  var children = this.getChildren();

  for (var i = 0; i < children.length; i++) {
    if (children[i].is(_enums.ExpressionEntity.IteratorExpression)) {
      return i;
    }
  }

  return -1;
}

function _processNestedListComp2() {
  var children = this.getChildren();

  if (children.length > 0 && children[0].is(_enums.ExpressionEntity.ListComprehension) && children[2].is(_enums.ExpressionEntity.IteratorExpression)) {
    // If names match, iterable in iterator should observe loop variable in listcomp, set assigned to true
    var listCompChildren = children[0].getChildren();

    if (listCompChildren.length >= 3 && listCompChildren[2].is(_enums.ExpressionEntity.IteratorExpression)) {
      var nestedIterator = children[2].getIterable();
      var listCompLoopVars = listCompChildren[2].getLoopVariables();

      var _iterator150 = _createForOfIteratorHelper(listCompLoopVars),
          _step150;

      try {
        for (_iterator150.s(); !(_step150 = _iterator150.n()).done;) {
          var loopVar = _step150.value;

          if (loopVar.getTextValue() === nestedIterator.getTextValue()) {
            loopVar.addObserver(nestedIterator);
            nestedIterator.setDataType(loopVar.getDataType());
            nestedIterator.setAssignedOrChanged();
          }
        }
      } catch (err) {
        _iterator150.e(err);
      } finally {
        _iterator150.f();
      }
    }
  }
}

var _checkReturnGroup = /*#__PURE__*/new WeakSet();

var _getSummaryOfContentInParentheses = /*#__PURE__*/new WeakSet();

var _checkForUnexpectedColon13 = /*#__PURE__*/new WeakSet();

var _checkReturnNone = /*#__PURE__*/new WeakSet();

var _checkAssignmentInReturn = /*#__PURE__*/new WeakSet();

var ReturnStatement = /*#__PURE__*/function (_MultiPartExpressionN23) {
  _inherits(ReturnStatement, _MultiPartExpressionN23);

  var _super45 = _createSuper(ReturnStatement);

  /**
   * Creates a new ReturnStatement 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain multiple elements
   */
  function ReturnStatement(textValue, children) {
    var _this34;

    _classCallCheck(this, ReturnStatement);

    if (children.length === 0 || !children[0].is(_enums.ExpressionEntity.ReturnKeyword)) {
      throw new Error("Not a valid return statement");
    }

    var dataType = _enums.DataType.None; // default, just a return keyword

    if (children.length === 2) {
      dataType = children[1].getDataType();
    } else if (children.length > 2) {
      if ((0, _utils.containsExpression)(children, _enums.ExpressionEntity.Comma)) {
        dataType = _enums.DataType.Tuple;
        var tupleExpressions = children.slice(1);

        var elements = _rawtextprocessing.StatementProcessor.split(tupleExpressions, _enums.ExpressionEntity.Comma);

        var tuple = new CompoundTypeExpression((0, _utils.getTextOfExpressions)(tupleExpressions), tupleExpressions, _enums.ExpressionEntity.TupleDefinition, elements);
        children = [children[0], tuple];
      } else {
        dataType = _enums.DataType.Invalid;
      }
    }

    _this34 = _super45.call(this, textValue, children, _enums.ExpressionEntity.ReturnStatement, _enums.ExpressionCategory.MultipartValue, dataType);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this34), _checkAssignmentInReturn);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this34), _checkReturnNone);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this34), _checkForUnexpectedColon13);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this34), _getSummaryOfContentInParentheses);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this34), _checkReturnGroup);

    if (children.length === 2) {
      children[1].addObserver(_assertThisInitialized(_this34));
    }

    _this34.addRules([_classPrivateMethodGet(_assertThisInitialized(_this34), _checkAssignmentInReturn, _checkAssignmentInReturn2), _classPrivateMethodGet(_assertThisInitialized(_this34), _checkReturnNone, _checkReturnNone2), _classPrivateMethodGet(_assertThisInitialized(_this34), _checkReturnGroup, _checkReturnGroup2), _classPrivateMethodGet(_assertThisInitialized(_this34), _checkForUnexpectedColon13, _checkForUnexpectedColon14)]);

    return _this34;
  }

  _createClass(ReturnStatement, [{
    key: "getReturnedValue",
    value: function getReturnedValue() {
      return this.getChildren().slice(1);
    }
    /** 
     * Rule function. Checks if the returned value is in unnecessary parentheses and if so,
     * adds a new Symptom object.
     * @param {ReturnStatement} returnExpression
     * @returns {Symptom[]}
     */

  }]);

  return ReturnStatement;
}(MultiPartExpressionNode);

exports.ReturnStatement = ReturnStatement;

function _checkReturnGroup2(returnExpression) {
  var symptoms = [];
  var values = returnExpression.getChildren();

  if (values.length === 2 && values[1].is(_enums.ExpressionEntity.GroupStatement)) {
    symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.ReturnInParentheses, values, 0, 1, {
      contents: _classPrivateMethodGet(returnExpression, _getSummaryOfContentInParentheses, _getSummaryOfContentInParentheses2).call(returnExpression, values[1])
    }));
  }

  return symptoms;
}

function _getSummaryOfContentInParentheses2(group) {
  var expressions = group.getContents();

  if (expressions.length === 1) {
    if (expressions[0].isOneOf([_enums.ExpressionCategory.Literals, _enums.ExpressionCategory.Types])) return _constants.LITERAL;else if (expressions[0].isOneOf([_enums.ExpressionEntity.VariableName, _enums.ExpressionEntity.SubscriptedExpression])) return _constants.VARIABLE;else if (expressions[0].isOneOf([_enums.ExpressionCategory.FunctionCall, _enums.ExpressionCategory.MethodCall])) return _constants.FUNCTION_CALL;else if (expressions[0].is(_enums.ExpressionCategory.CompoundTypes)) return _constants.COMPOUND_TYPE_DEFINITION;
  }

  return _constants.COMPOUND_EXPRESSION;
}

function _checkForUnexpectedColon14(exp) {
  var symptoms = [];
  var values = exp.getChildren();

  for (var i = 0; i < values.length; i++) {
    if (values[i].is(_enums.ExpressionEntity.Colon)) {
      symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnexpectedColon, values, 0, values.length - 1, {
        before: i > 0 ? values[i - 1].getTextValue() : _constants.EMPTY,
        after: i < values.length - 1 ? values[i + 1].getTextValue() : _constants.EMPTY
      }));
    }
  }

  return symptoms;
}

function _checkReturnNone2(returnExpression) {
  var symptoms = [];
  var values = returnExpression.getChildren();
  var expandGroups = values.flatMap(function (val) {
    return !val.is(_enums.ExpressionEntity.GroupStatement) ? val : val.getContents();
  });
  var noneValues = expandGroups.filter(function (val) {
    return (0, _utils.isNoneFunction)(val) || val.getDataType() === _enums.DataType.None && !val.isOneOf([_enums.ExpressionEntity.NoneType, _enums.ExpressionEntity.VariableName]);
  });

  if (noneValues.length > 0) {
    symptoms.push.apply(symptoms, _toConsumableArray(noneValues.map(function (val) {
      return _symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.AssignedNone, [val], 0, 0, {
        expression: val,
        usage: _constants.RETURN_KEYWORD
      });
    })));
  }

  return symptoms;
}

function _checkAssignmentInReturn2(returnExpression) {
  var returnValues = returnExpression.getChildren();
  var symptoms = [];

  for (var i = 1; i < returnValues.length; i++) {
    if (returnValues[i].is(_enums.ExpressionEntity.AssignmentStatement)) {
      var assignedVars = returnValues[i].getTargetVariables().map(function (v) {
        return v.getTextValue();
      });
      symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.AssignmentInReturn, returnValues, i, i, {
        assignedVariables: assignedVars
      }));
    }
  }

  return symptoms;
}

var _sourceModule = /*#__PURE__*/new WeakMap();

var _importedEntities = /*#__PURE__*/new WeakMap();

var ImportStatement = /*#__PURE__*/function (_MultiPartExpressionN24) {
  _inherits(ImportStatement, _MultiPartExpressionN24);

  var _super46 = _createSuper(ImportStatement);

  /** @type {ModuleExpression} */

  /** @type {ExpressionNode[]} */

  /**
   * Creates a new ImportStatement 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   */
  function ImportStatement(textValue, children) {
    var _this35;

    _classCallCheck(this, ImportStatement);

    _this35 = _super46.call(this, textValue, children, _enums.ExpressionEntity.ImportStatement, _enums.ExpressionCategory.KeywordStatement, _enums.DataType.NA);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this35), _sourceModule, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this35), _importedEntities, {
      writable: true,
      value: []
    });

    if (children.length > 1) {
      _classPrivateFieldSet(_assertThisInitialized(_this35), _sourceModule, children[1]);

      if (children[0].is(_enums.ExpressionEntity.FromKeyword)) {
        for (var i = 3; i < children.length; i++) {
          if (!children[i].is(_enums.ExpressionEntity.Comma)) {
            _classPrivateFieldGet(_assertThisInitialized(_this35), _importedEntities).push(children[i]);
          }
        }
      }
    }

    return _this35;
  }

  return _createClass(ImportStatement);
}(MultiPartExpressionNode);

exports.ImportStatement = ImportStatement;

var _values3 = /*#__PURE__*/new WeakMap();

var KeywordStatement = /*#__PURE__*/function (_MultiPartExpressionN25) {
  _inherits(KeywordStatement, _MultiPartExpressionN25);

  var _super47 = _createSuper(KeywordStatement);

  /**
   * Creates a new KeywordStatement 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   */
  function KeywordStatement(textValue, children) {
    var _this36;

    _classCallCheck(this, KeywordStatement);

    if (children.length === 0) throw new Error("Not enough elements to make a statement");
    var entity = _enums.ExpressionEntity.Unknown;
    if (children[0].is(_enums.ExpressionEntity.AssertKeyword)) entity = _enums.ExpressionEntity.AssertStatement;else if (children[0].is(_enums.ExpressionEntity.GlobalKeyword)) entity = _enums.ExpressionEntity.GlobalStatement;else if (children[0].is(_enums.ExpressionEntity.RaiseKeyword)) entity = _enums.ExpressionEntity.ThrowStatement;else throw new Error("Unknown keyword");
    _this36 = _super47.call(this, textValue, children, entity, _enums.ExpressionCategory.KeywordStatement, _enums.DataType.NA);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this36), _values3, {
      writable: true,
      value: []
    });

    _classPrivateFieldSet(_assertThisInitialized(_this36), _values3, children.slice(1));

    return _this36;
  }

  return _createClass(KeywordStatement);
}(MultiPartExpressionNode); //#endregion - other multipart


exports.KeywordStatement = KeywordStatement;
},{"../problem-finder/symptom.js":12,"../utils/constants.js":13,"../utils/utils.js":14,"./enums.js":4,"./interfaces.js":7,"./rawtextprocessing.js":8}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatementBlock = exports.ScopeBlock = exports.ListComprehensionBlock = exports.FunctionBlock = exports.BranchBlock = void 0;

var _enums = require("./enums.js");

var _utils = require("../utils/utils.js");

var _ast = require("./ast.js");

var _statement = require("./statement.js");

var _identifiers = require("./identifiers.js");

var _rawtextprocessing = require("./rawtextprocessing.js");

var _interfaces = require("./interfaces.js");

var _symptom2 = require("../problem-finder/symptom.js");

var _constants = require("../utils/constants.js");

var _indent = require("./indent.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _blockEntity = /*#__PURE__*/new WeakMap();

var _parentBlock = /*#__PURE__*/new WeakMap();

var _childBlocks = /*#__PURE__*/new WeakMap();

var _indentation = /*#__PURE__*/new WeakMap();

var _statements = /*#__PURE__*/new WeakMap();

var _checkStatementSymptoms = /*#__PURE__*/new WeakSet();

var _checkInfiniteLoop = /*#__PURE__*/new WeakSet();

var _checkUnreachableExhaustiveConditional = /*#__PURE__*/new WeakSet();

var _checkSequentialIfs = /*#__PURE__*/new WeakSet();

var _containsTopLevelExit = /*#__PURE__*/new WeakSet();

var _createSequentialIf = /*#__PURE__*/new WeakSet();

var _componentsMatch = /*#__PURE__*/new WeakSet();

var _checkOneLineConditional = /*#__PURE__*/new WeakSet();

var _isOneLineAssign = /*#__PURE__*/new WeakSet();

var _isOneLineReturn = /*#__PURE__*/new WeakSet();

var _inverseBooleanTypes = /*#__PURE__*/new WeakSet();

var _unpackGroup = /*#__PURE__*/new WeakSet();

/**
 * An unspecified type of block. Base class for more specific block types
 * @extends SymptomMonitor
 */
var StatementBlock = /*#__PURE__*/function (_SymptomMonitor) {
  _inherits(StatementBlock, _SymptomMonitor);

  var _super = _createSuper(StatementBlock);

  /** @type {ExpressionEntity} */
  // The ExpressionEntity that represents the type of Block e.g. a function defintion

  /** @type {StatementBlock | undefined} */
  // The parent of the current Block. This will either be another Block or undefined if this is the document root.

  /** @type {StatementBlock[]} */
  // A list of child blocks. This list only includes immediate children. Nested children will be stored as the children of the relevant child node.

  /** @type {Number}  */
  // The number of spaces of indentation of the first line in the Block (the definition line in most cases).

  /** @type {Statement[]} */

  /**
   * Creates a new StatementBlock representing a block of Python code
   * @param {ExpressionEntity} blockEntity The entity that defines this block e.g. document, if, for
   * @param {Block} parentBlock This block's parent, which will be undefined if this is the document root
   * @param {Number} indentation The size of the indentation of the definition line, in spaces
   */
  function StatementBlock() {
    var _this;

    var blockEntity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _enums.ExpressionEntity.DocumentDefinition;
    var parentBlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    var indentation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, StatementBlock);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _unpackGroup);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _inverseBooleanTypes);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _isOneLineReturn);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _isOneLineAssign);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _checkOneLineConditional);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _componentsMatch);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _createSequentialIf);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _containsTopLevelExit);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _checkSequentialIfs);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _checkUnreachableExhaustiveConditional);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _checkInfiniteLoop);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _checkStatementSymptoms);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _blockEntity, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _parentBlock, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _childBlocks, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _indentation, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _statements, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this), _blockEntity, blockEntity);

    _classPrivateFieldSet(_assertThisInitialized(_this), _parentBlock, parentBlock);

    _classPrivateFieldSet(_assertThisInitialized(_this), _childBlocks, []);

    _classPrivateFieldSet(_assertThisInitialized(_this), _indentation, indentation);

    _classPrivateFieldSet(_assertThisInitialized(_this), _statements, []);

    _this.addRules([_classPrivateMethodGet(_assertThisInitialized(_this), _checkOneLineConditional, _checkOneLineConditional2), _classPrivateMethodGet(_assertThisInitialized(_this), _checkSequentialIfs, _checkSequentialIfs2), _classPrivateMethodGet(_assertThisInitialized(_this), _checkUnreachableExhaustiveConditional, _checkUnreachableExhaustiveConditional2), _classPrivateMethodGet(_assertThisInitialized(_this), _checkStatementSymptoms, _checkStatementSymptoms2)]);

    return _this;
  }
  /**
   * Get the entity of this block.
   * @returns {ExpressionEntity} The ExpressionEntity that describes the type of this Block.
   */


  _createClass(StatementBlock, [{
    key: "getBlockEntity",
    value: function getBlockEntity() {
      return _classPrivateFieldGet(this, _blockEntity);
    }
    /**
     * Gets the ID of the Block, a unique String made up of the document starting line of the block and
     * the expression entity
     * @returns {String} A unique String identifier for this Block.
     */

  }, {
    key: "getId",
    value: function getId() {
      var lineNum = _classPrivateFieldGet(this, _blockEntity) === _enums.ExpressionEntity.DocumentDefinition ? 0 : _classPrivateFieldGet(this, _statements).length > 0 ? _classPrivateFieldGet(this, _statements)[0].getFirstLineNumber() : -1;
      return "".concat(lineNum, "-").concat(_classPrivateFieldGet(this, _blockEntity).name);
    }
    /**
     * Gets the parent block of this Block.
     * @returns {StatementBlock | undefined} Either the Block that is the parent node of this one or undefined if this is the root Block representing the whole document.
     */

  }, {
    key: "getParentBlock",
    value: function getParentBlock() {
      return _classPrivateFieldGet(this, _parentBlock);
    }
    /**
     * Sets the parent block of the current block. Should only be used internally by the addChildBlock method.
     * @param {StatementBlock | undefined} block The new parent Block of this Block, or undefined if it is the root Block.
     */

  }, {
    key: "setParentBlock",
    value: function setParentBlock(block) {
      _classPrivateFieldSet(this, _parentBlock, block);
    }
  }, {
    key: "getRootBlock",
    value: function getRootBlock() {
      if (_classPrivateFieldGet(this, _parentBlock) === undefined) {
        return this;
      }

      return _classPrivateFieldGet(this, _parentBlock).getRootBlock();
    }
    /**
     * Gets this Block's children.
     * @returns {StatementBlock[]} An array of containing all immediate children of this Block
     */

  }, {
    key: "getChildBlocks",
    value: function getChildBlocks() {
      return _classPrivateFieldGet(this, _childBlocks);
    }
    /**
     * Gets all child blocks (including this block) that match the given entity
     * @param {ExpressionEntity} entity 
     * @returns {StatementBlock[]}
     */

  }, {
    key: "getChildBlocksOfKind",
    value: function getChildBlocksOfKind(entity) {
      var blocks = [];

      var _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(this, _childBlocks)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;
          blocks = blocks.concat(child.getChildBlocksOfKind(entity));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (_classPrivateFieldGet(this, _blockEntity) === entity) {
        blocks.push(this);
      }

      return blocks;
    }
    /**
     * Adds a Block to this Block's children.
     * @param {StatementBlock} block The Block to add.
     */

  }, {
    key: "addChildBlock",
    value: function addChildBlock(block) {
      _classPrivateFieldGet(this, _childBlocks).push(block);

      block.setParentBlock(this);
    }
    /**
     * Checks if this block is the child of a particular type of parent block
     * @param {ExpressionEntity} entity 
     * @returns {Boolean} True if any parent block is the given entity
     */

  }, {
    key: "hasParentOfEntity",
    value: function hasParentOfEntity(entity) {
      return this.stepsToParentBlockOfEntity(entity) >= 0;
    }
    /**
     * Gets the number of steps from this Block to the nearest parent with the given entity. If this block
     * has the given entity, the number of steps is 0. The immediate parent is 1 step. If no method has the
     * given entity, this method returns -1.
     * @param {ExpressionEntity} entity 
     * @returns {Number} The number of steps from this Block to the nearest parent with the given entity.
     */

  }, {
    key: "stepsToParentBlockOfEntity",
    value: function stepsToParentBlockOfEntity(entity) {
      if (_classPrivateFieldGet(this, _blockEntity) === entity) return 0;
      var currentBlock = this.getParentBlock();
      var steps = 1;

      while (currentBlock !== undefined) {
        if (currentBlock.getBlockEntity() === entity) return steps;
        currentBlock = currentBlock.getParentBlock();
        steps++;
      }

      return -1;
    }
    /**
     * Gets the nearest parent Block that has any of the given ExpressionEntities. This Block will be 
     * returned if it matches any of the entities. If no matching parent is found, the return is
     * undefined.
     * @param {ExpressionEntity[]} entities 
     * @returns {StatementBlock | undefined} The nearest matching parent Block or undefined if no match is found.
     */

  }, {
    key: "getNearestParentOfAny",
    value: function getNearestParentOfAny(entities) {
      if (entities.includes(_classPrivateFieldGet(this, _blockEntity))) return this;
      var currentBlock = this.getParentBlock();

      while (currentBlock !== undefined) {
        if (entities.includes(currentBlock.getBlockEntity())) return currentBlock;
        currentBlock = currentBlock.getParentBlock();
      }

      return undefined;
    }
    /**
     * Finds the parent of this block that is an immediate child of parent block i.e. 
     * parent block and the returned block have the same parent
     * @param {StatementBlock | undefined} parentBlock 
     * @returns {StatementBlock | undefined}
     */

  }, {
    key: "getNearestParentChildOf",
    value: function getNearestParentChildOf(parentBlock) {
      if (this === parentBlock || !parentBlock.hasChild(this)) {
        return undefined;
      }

      var parent = this.getParentBlock();

      while (parent !== undefined && parent.getParentBlock() !== parentBlock) {
        parent = parent.getParentBlock();
      }

      return parent;
    }
    /**
     * Gets the indentation of this block, determined by the definition line.
     * @returns {Number} The indentation of the block definition line (number of spaces)
     */

  }, {
    key: "getIndentation",
    value: function getIndentation() {
      return _classPrivateFieldGet(this, _indentation);
    }
    /**
     * Gets the start line number of the block.
     * @returns {Number} The zero-based document line number of the Block definition.
     */

  }, {
    key: "getStartLine",
    value: function getStartLine() {
      return _classPrivateFieldGet(this, _blockEntity) === _enums.ExpressionEntity.DocumentDefinition ? 0 : _classPrivateFieldGet(this, _statements).length > 0 ? _classPrivateFieldGet(this, _statements)[0].getFirstLineNumber() : -1;
    }
    /**
     * Checks whether this is a scope block
     * @returns {Boolean}
     */

  }, {
    key: "isScopeBlock",
    value: function isScopeBlock() {
      return false;
    }
    /**
     * Checks whether this is a branch block
     * @returns {Boolean}
     */

  }, {
    key: "isBranchBlock",
    value: function isBranchBlock() {
      return false;
    }
    /**
     * Gets the scope of this block of code. NOTE: Classes are not currently supported.
     * @returns {ScopeBlock} If this block is a document or function defintion, return this 
     * block. Otherwise, search the parent block to find the nearest parent function or document. 
     * @throws Throws an error if no scope is found
     */

  }, {
    key: "getScope",
    value: function getScope() {
      if (this.isScopeBlock()) {
        return this;
      }

      var currentBlock = this.getParentBlock();

      while (currentBlock !== undefined && !currentBlock.isScopeBlock()) {
        currentBlock = currentBlock.getParentBlock();
      }

      if (currentBlock !== undefined) return currentBlock;
      throw new Error("Could not find a scope block...block structure must be incorrect");
    }
    /**
     * Adds a statement to the block
     * @param {Statement} statement 
     */

  }, {
    key: "addStatement",
    value: function addStatement(statement) {
      _classPrivateFieldGet(this, _statements).push(statement);

      var _iterator2 = _createForOfIteratorHelper(statement.getExpressions()),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var exp = _step2.value;
          exp.setBlockId(this.getId());
          exp.setScopeId(this.getScope().getId());
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    /**
     * Gets the last statement in the block
     * @returns {Statement}
     * @throws Throws an error if the block has no statements.
     */

  }, {
    key: "getLastStatement",
    value: function getLastStatement() {
      if (_classPrivateFieldGet(this, _statements).length === 0) {
        throw new Error("No statements in the block. Could not get the last statement.");
      }

      return _classPrivateFieldGet(this, _statements)[_classPrivateFieldGet(this, _statements).length - 1];
    }
    /**
     * Replaces the last statement in the block with the new statement
     * @param {Statement} statement 
     * @throws Throws an error if there are no statements in the block.
     */

  }, {
    key: "replaceLastStatement",
    value: function replaceLastStatement(statement) {
      if (_classPrivateFieldGet(this, _statements).length === 0) {
        throw new Error("No statements in block. Cannot replace last statement.");
      }

      _classPrivateFieldGet(this, _statements)[_classPrivateFieldGet(this, _statements).length - 1] = statement;
    }
    /**
     * When the last statement is a BlockStatement, adds the statement to the BlockStatement
     * @param {Statement} statement 
     * @throws Throws an error if the last statement is not a BlockStatement
     */

  }, {
    key: "updateLastStatement",
    value: function updateLastStatement(statement) {
      var lastStatement = this.getLastStatement();

      if (!lastStatement.isBlockStatement()) {
        throw new Error("The last statement is not a block statement.");
      }

      var _iterator3 = _createForOfIteratorHelper(statement.getExpressions()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var exp = _step3.value;
          exp.setBlockId(this.getId());
          exp.setScopeId(this.getScope().getId());
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      lastStatement.addStatement(statement);
    }
    /**
     * Gets the Statements in this block. Will not include statements in scoped children but will
     * include statements in child branches.
     * @returns {Statement[]}
     */

  }, {
    key: "getStatements",
    value: function getStatements() {
      return _classPrivateFieldGet(this, _statements);
    }
    /**
     * Tests if this block is the same as or a parent of childBlock.
     * @param {StatementBlock} childBlock A Block to check
     * @returns {Boolean} Returns true if this Block is the same as or a parent of childBlock
     */

  }, {
    key: "hasChild",
    value: function hasChild(childBlock) {
      if (this === childBlock) return true;else {
        // Start from the child
        var currentBlock = childBlock.getParentBlock();

        while (currentBlock !== undefined) {
          if (currentBlock === this) {
            return true;
          }

          currentBlock = currentBlock.getParentBlock();
        }

        return false;
      }
    }
    /**
     * Searches this block and its children for the given line number. If the line number is
     * in the block, the most specific block is returned. If the line number is not in the
     * block, return undefined.
     * @param {Number} lineNum The document line number to search for
     * @returns {StatementBlock | undefined}
     */

  }, {
    key: "getBlockContainingLineNumber",
    value: function getBlockContainingLineNumber(lineNum) {
      if (_classPrivateFieldGet(this, _statements).length === 0) {
        console.log("stop");
      }

      if (_classPrivateFieldGet(this, _statements)[0].getFirstLineNumber() > lineNum || this.getLastStatement().getLastLineNumber() < lineNum) {
        return undefined;
      } else {
        var _iterator4 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _childBlocks)),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var childBlock = _step4.value;

            if (childBlock.getBlockContainingLineNumber() !== undefined) {
              return childBlock;
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }

      return this;
    }
    /**
     * Gets the last statement to be executed in a block. This will either be a return,
     * a break, or the last statement if the block has no exit. Blocks with multiple 
     * branches will have multiple last statements, hence the return type of array.
     * @returns {Statement[]}
     */

  }, {
    key: "getLastExecutedStatements",
    value: function getLastExecutedStatements() {
      var lastStatements = [];

      var _iterator5 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _childBlocks)),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var child = _step5.value;
          if (!child.isScopeBlock()) lastStatements = lastStatements.concat(child.getLastExecutedStatements());
        } // top level

      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      for (var s = 0; s < _classPrivateFieldGet(this, _statements).length; s++) {
        if (!_classPrivateFieldGet(this, _statements)[s].isBlockStatement()) {
          if (s === _classPrivateFieldGet(this, _statements).length - 1) {
            lastStatements.push(_classPrivateFieldGet(this, _statements)[s]);
          } else if (!_classPrivateFieldGet(this, _statements)[s].isBlank()) {
            var firstExp = _classPrivateFieldGet(this, _statements)[s].getFirstExpression();

            if (firstExp.isOneOf([_enums.ExpressionEntity.ReturnStatement, _enums.ExpressionEntity.BreakKeyword])) {
              lastStatements.push(_classPrivateFieldGet(this, _statements)[s]);
              break;
            }
          }
        }
      }

      return lastStatements;
    }
    /**
     * Checks whether this block always returns a value.
     * @returns {Boolean} True if there is a return statement in every possible branch, false otherwise
     */

  }, {
    key: "alwaysReturnsAValue",
    value: function alwaysReturnsAValue() {
      if (_classPrivateFieldGet(this, _blockEntity) === _enums.ExpressionEntity.DocumentDefinition) {
        return false;
      }

      if (_classPrivateFieldGet(this, _childBlocks).length === 0) {
        var lastStatements = this.getLastExecutedStatements(); // Should only have 1 last statement...

        return lastStatements.length === 1 && !lastStatements[0].isBlank() && lastStatements[0].getFirstExpression().is(_enums.ExpressionEntity.ReturnStatement);
      } else {
        if (this.hasTopLevelReturn()) {
          return true;
        } // Check for exhaustive child blocks... if they all return -> true


        var possibleExhaustive = false;
        var i = _classPrivateFieldGet(this, _childBlocks).length - 1;

        while (i >= 0) {
          if (_classPrivateFieldGet(this, _childBlocks)[i].getBlockEntity() === _enums.ExpressionEntity.ElseDefinition && _classPrivateFieldGet(this, _childBlocks)[i].alwaysReturnsAValue()) {
            possibleExhaustive = true;
          } else if (possibleExhaustive && _classPrivateFieldGet(this, _childBlocks)[i].getBlockEntity() === _enums.ExpressionEntity.ElifDefinition && _classPrivateFieldGet(this, _childBlocks)[i].alwaysReturnsAValue()) {
            possibleExhaustive = true; // stay true 
          } else if (possibleExhaustive && _classPrivateFieldGet(this, _childBlocks)[i].getBlockEntity() === _enums.ExpressionEntity.IfDefinition && _classPrivateFieldGet(this, _childBlocks)[i].alwaysReturnsAValue()) {
            return true;
          } else {
            possibleExhaustive = false;
          }

          i--;
        }

        return false;
      }
    }
    /**
     * Checks if this block has a top level (not in a child block) return statement
     * @returns {Boolean}
     */

  }, {
    key: "hasTopLevelReturn",
    value: function hasTopLevelReturn() {
      var _iterator6 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _statements)),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var s = _step6.value;

          if (!s.isBlockStatement() && !s.isBlank() && s.getFirstExpression().is(_enums.ExpressionEntity.ReturnStatement)) {
            return true;
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      return false;
    }
    /**
     * 
     * @param {StatementBlock} block 
     */

  }, {
    key: "checkRules",
    value: function checkRules(block) {
      _get(_getPrototypeOf(StatementBlock.prototype), "checkRules", this).call(this, block);

      var _iterator7 = _createForOfIteratorHelper(block.getChildBlocks()),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var b = _step7.value;
          b.checkRules(b);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
    /**
     * Rule finder.
     * @param {StatementBlock} block 
     * @returns {Symptom[]}
     */

  }, {
    key: "toJSON",
    value:
    /**
     * Creates a JSON representation of this Block.
     * @returns {Object} A JSON representation of this Block, including the unique block ID, the start line and the array of child blocks.
     */
    function toJSON() {
      return {
        id: this.getId(),
        startLine: this.getStartLine(),
        children: _classPrivateFieldGet(this, _childBlocks).map(function (b) {
          return b.toJSON();
        })
      };
    }
    /**
     * Factory method to create an appropriate block type based on the entity.
     * @param {ExpressionEntity} blockEntity Optional. DocumentDefinition by default.
     * @param {StatementBlock | undefined} parentBlock Optional. undefined by default.
     * @param {Number} indentation Optional. 0 by default.
     * @returns {StatementBlock} A new block
     * @throws Throws an error if an appropriate block type could not be found.
     */

  }], [{
    key: "blockFactory",
    value: function blockFactory() {
      var blockEntity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _enums.ExpressionEntity.DocumentDefinition;
      var parentBlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var indentation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      switch (blockEntity) {
        case _enums.ExpressionEntity.DocumentDefinition:
        case _enums.ExpressionEntity.FunctionDefinition:
        case _enums.ExpressionEntity.ClassDefinition:
        case _enums.ExpressionEntity.ListComprehension:
          return new ScopeBlock(blockEntity, parentBlock, indentation);

        default:
          return new BranchBlock(blockEntity, parentBlock, indentation);
      }
    }
  }]);

  return StatementBlock;
}(_interfaces.SymptomMonitor);
/**
 * A block that has scope i.e. document, function, or list comprehension
 * @extends StatementBlock
 */


exports.StatementBlock = StatementBlock;

function _checkStatementSymptoms2(block) {
  var symptoms = [];
  var statements = block.getStatements();
  if (statements.length === 1 && statements[0].isBlockStatement() && statements[0].getFirstExpression().getBlockId() === block.getId()) statements = statements[0].getStatements().slice(1);

  for (var i = 0; i < statements.length; i++) {
    var firstExp = statements[i].getFirstExpression(); // Infinite loop and unreachable due to while true

    if (firstExp.is(_enums.ExpressionEntity.WhileDefinitionStatement) && _classPrivateMethodGet(block, _checkInfiniteLoop, _checkInfiniteLoop2).call(block, statements[i])) {
      var definitionExpression = statements[i].getDefinitionStatement().getFirstExpression();
      symptoms.push(_symptom2.SymptomFinder.createStatementSymptom(_enums.SymptomType.InfiniteLoop, [definitionExpression], 0, 0));

      if (i < statements.length - 1) {
        var remainingExpressions = (0, _utils.getExpressionsInStatements)(statements.slice(i + 1));
        symptoms.push(_symptom2.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnreachableInfiniteLoop, remainingExpressions, 0, remainingExpressions.length - 1, {
          infiniteLoopLine: firstExp.getStartLineNumber()
        }));
      }
    } // Unreachable exit


    if ((0, _utils.containsExit)(firstExp) && i < statements.length - 1) {
      var remainingStatements = statements.slice(i + 1);

      var _remainingExpressions = (0, _utils.getExpressionsInStatements)(remainingStatements);

      var exitKeyword = firstExp.getFirstExpressionOf([_enums.ExpressionEntity.ReturnKeyword, _enums.ExpressionEntity.BreakKeyword, _enums.ExpressionEntity.ExitFunction, _enums.ExpressionEntity.SysExit, _enums.ExpressionEntity.QuitFunction]);
      symptoms.push(_symptom2.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnreachableExit, _remainingExpressions, 0, _remainingExpressions.length - 1, {
        exitKeyword: exitKeyword !== undefined ? exitKeyword.getTextValue() : "undefined"
      }));
    }
  }

  return symptoms;
}

function _checkInfiniteLoop2(statement) {
  var definition = statement.getDefinitionStatement();
  var definitionExpression = definition.getFirstExpression();
  var loopVariables = definitionExpression.getVariableExpressions();

  var _iterator15 = _createForOfIteratorHelper(statement.getStatements()),
      _step15;

  try {
    for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
      var s = _step15.value;
      var expressions = s.getExpressions();

      var _iterator16 = _createForOfIteratorHelper(expressions),
          _step16;

      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var exp = _step16.value;
          if ((0, _utils.containsExit)(exp)) return false; // Gets the names of all modified variables inside the loop

          var changeVars = exp.getVariableExpressions().filter(function (v) {
            return v.isAssignedOrChanged();
          });
          var changeVarNames = new Set(changeVars.map(function (v) {
            return v.getTextValue();
          }));

          var _iterator17 = _createForOfIteratorHelper(loopVariables),
              _step17;

          try {
            for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
              var loopVar = _step17.value;

              if (changeVarNames.has(loopVar.getTextValue())) {
                return false;
              }
            }
          } catch (err) {
            _iterator17.e(err);
          } finally {
            _iterator17.f();
          }
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }
    }
  } catch (err) {
    _iterator15.e(err);
  } finally {
    _iterator15.f();
  }

  return true;
  /*symptoms.push(SymptomFinder.createStatementSymptom(SymptomType.InfiniteLoop, [definitionExpression], 0, 0));
  return symptoms;*/
}

function _checkUnreachableExhaustiveConditional2(block) {
  var symptoms = [];

  var _iterator18 = _createForOfIteratorHelper(block.getChildBlocks()),
      _step18;

  try {
    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
      var child = _step18.value;

      if (child.getBlockEntity() === _enums.ExpressionEntity.IfDefinition && child.isBranchOfExhaustiveConditional() && child.hasTopLevelExit()) {
        (function () {
          var siblings = child.getSiblingConditionalBranches();
          var allExit = true;
          var elseStart = -1;

          var _iterator19 = _createForOfIteratorHelper(siblings),
              _step19;

          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
              var s = _step19.value;

              if (!s.hasTopLevelExit()) {
                allExit = false;
                break;
              }

              if (s.getBlockEntity() === _enums.ExpressionEntity.ElseDefinition) {
                elseStart = s.getStartLine();
              }
            } // if all exit, find in statements

          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
          }

          if (allExit && elseStart > 0) {
            var remainingStatements = block.getStatements().filter(function (s) {
              return s.getFirstLineNumber() > elseStart;
            });

            if (remainingStatements.length > 0) {
              var remainingExpressions = (0, _utils.getExpressionsInStatements)(remainingStatements);
              symptoms.push(_symptom2.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnreachableExhaustiveConditional, remainingExpressions, 0, remainingExpressions.length - 1));
            }
          }
        })();
      }
    }
  } catch (err) {
    _iterator18.e(err);
  } finally {
    _iterator18.f();
  }

  return symptoms;
}

function _checkSequentialIfs2(block) {
  var symptoms = [];
  var statements = block.getStatements();
  if (statements.length === 1 && statements[0].isBlockStatement() && statements[0].getFirstExpression().getBlockId() === block.getId()) statements = statements[0].getStatements().slice(1);
  var sequence = [];

  for (var i = 0; i < statements.length - 1; i++) {
    var thisExp = statements[i].getFirstExpression();
    var nextExp = statements[i + 1].getFirstExpression(); // Gather all at once, or piece by piece?

    if (thisExp.is(_enums.ExpressionEntity.IfDefinitionStatement) && nextExp.is(_enums.ExpressionEntity.IfDefinitionStatement) && !_classPrivateMethodGet(block, _containsTopLevelExit, _containsTopLevelExit2).call(block, statements[i]) && !_classPrivateMethodGet(block, _containsTopLevelExit, _containsTopLevelExit2).call(block, statements[i + 1])) {
      if (sequence.length === 0) {
        sequence.push(statements[i]);
      }

      sequence.push(statements[i + 1]);
    } else if (sequence.length > 0) {
      // process symptom, if needed 
      var symptom = _classPrivateMethodGet(block, _createSequentialIf, _createSequentialIf2).call(block, sequence);

      if (symptom !== undefined) symptoms.push(symptom);
      sequence = [];
    }
  }

  if (sequence.length > 0) {
    var _symptom = _classPrivateMethodGet(block, _createSequentialIf, _createSequentialIf2).call(block, sequence);

    if (_symptom !== undefined) symptoms.push(_symptom);
  }

  return symptoms;
}

function _containsTopLevelExit2(statement) {
  var allStatements = statement.getStatements().slice(1);

  var _iterator20 = _createForOfIteratorHelper(allStatements),
      _step20;

  try {
    for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
      var s = _step20.value;

      if (!s.isBlockStatement()) {
        if ((0, _utils.containsExit)(s.getFirstExpression())) return true;
      }
    }
  } catch (err) {
    _iterator20.e(err);
  } finally {
    _iterator20.f();
  }

  return false;
}

function _createSequentialIf2(sequence) {
  if (sequence.length === 0) return undefined; //return SymptomFinder.createStatementSymptom(SymptomType.SequentialIfs, )

  var branchMatches = []; // should be 2d array

  var currentMatchingSequence = [];

  for (var i = 0; i < sequence.length - 1; i++) {
    var condition1 = sequence[i].getFirstExpression().getCondition();
    condition1 = condition1.length === 1 && condition1[0].is(_enums.ExpressionEntity.GroupStatement) ? condition1[0].getContents() : condition1;
    var condition2 = sequence[i + 1].getFirstExpression().getCondition();
    condition2 = condition2.length === 1 && condition2[0].is(_enums.ExpressionEntity.GroupStatement) ? condition2[0].getContents() : condition2;

    if (_classPrivateMethodGet(this, _componentsMatch, _componentsMatch2).call(this, condition1, condition2) && _classPrivateMethodGet(this, _componentsMatch, _componentsMatch2).call(this, condition2, condition1)) {
      if (currentMatchingSequence.length === 0 || currentMatchingSequence[currentMatchingSequence.length - 1].docIndex !== sequence[i].getFirstExpression().getDocumentStartIndex()) {
        currentMatchingSequence.push({
          lineNum: sequence[i].getFirstExpression().getStartLineNumber(),
          docIndex: sequence[i].getFirstExpression().getDocumentStartIndex()
        });
      }

      currentMatchingSequence.push({
        lineNum: sequence[i + 1].getFirstExpression().getStartLineNumber(),
        docIndex: sequence[i + 1].getFirstExpression().getDocumentStartIndex()
      });
    } else if (currentMatchingSequence.length > 0) {
      branchMatches.push(currentMatchingSequence);
      currentMatchingSequence = [];
    }
  }

  if (currentMatchingSequence.length > 0) {
    branchMatches.push(currentMatchingSequence);
    currentMatchingSequence = [];
  }

  var allExpressions = (0, _utils.getExpressionsInStatements)(sequence);
  return _symptom2.SymptomFinder.createStatementSymptom(_enums.SymptomType.SequentialIfs, allExpressions, 0, allExpressions.length - 1, {
    branchMatches: branchMatches
  });
}

function _componentsMatch2(condition1, condition2) {
  var _iterator21 = _createForOfIteratorHelper(condition1),
      _step21;

  try {
    for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
      var component1 = _step21.value;
      var found = false;

      var _iterator22 = _createForOfIteratorHelper(condition2),
          _step22;

      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var component2 = _step22.value;

          if (component1.matchesPattern(component2)) {
            found = true;
            break;
          }
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }

      if (!found) return false;
    }
  } catch (err) {
    _iterator21.e(err);
  } finally {
    _iterator21.f();
  }

  return true;
}

function _checkOneLineConditional2(block) {
  var symptoms = [];
  var statements = block.getStatements();
  if (statements.length === 1 && statements[0].isBlockStatement() && statements[0].getFirstExpression().getBlockId() === block.getId()) statements = statements[0].getStatements().slice(1);

  for (var i = 0; i < statements.length - 1; i++) {
    var symptomDetails = {};
    var thisExp = statements[i].getFirstExpression();
    var nextExp = statements[i + 1].getFirstExpression();

    if (thisExp.is(_enums.ExpressionEntity.IfDefinitionStatement)) {
      var ifStatements = statements[i].getStatements();

      if (nextExp.is(_enums.ExpressionEntity.ElseDefinitionStatement)) {
        var elseStatements = statements[i + 1].getStatements();

        if (ifStatements.length === 2 && elseStatements.length === 2 && _classPrivateMethodGet(block, _isOneLineReturn, _isOneLineReturn2).call(block, ifStatements[1], elseStatements[1])) {
          symptomDetails = {
            form: _constants.VALUE_RETURNED
          };
        } else if (ifStatements.length === 2 && elseStatements.length === 2 && _classPrivateMethodGet(block, _isOneLineAssign, _isOneLineAssign2).call(block, ifStatements[1], elseStatements[1])) {
          symptomDetails = {
            form: _constants.VALUE_ASSIGNED,
            variableAssigned: ifStatements[1].getFirstExpression().getTargetVariables()[0].getTextValue()
          };
        }
      } else if (ifStatements.length === 2 && _classPrivateMethodGet(block, _isOneLineReturn, _isOneLineReturn2).call(block, ifStatements[1], statements[i + 1])) {
        symptomDetails = {
          form: _constants.VALUE_RETURNED
        };
      } else if (ifStatements.length === 2 && _classPrivateMethodGet(block, _isOneLineAssign, _isOneLineAssign2).call(block, ifStatements[1], statements[i + 1])) {
        symptomDetails = {
          form: _constants.VALUE_ASSIGNED,
          variableAssigned: ifStatements[1].getFirstExpression().getTargetVariables()[0].getTextValue()
        };
      }

      if (symptomDetails.hasOwnProperty("form")) {
        var allExpressions = [].concat(_toConsumableArray(statements[i].getExpressions()), _toConsumableArray(statements[i + 1].getExpressions()));
        symptoms.push(_symptom2.SymptomFinder.createStatementSymptom(_enums.SymptomType.OneLineConditional, allExpressions, 0, allExpressions.length - 1, symptomDetails));
      }
    }
  }

  return symptoms;
}

function _isOneLineAssign2(firstEnd, secondEnd) {
  var firstExp = firstEnd.getFirstExpression();
  var secondExp = secondEnd.getFirstExpression();

  if (firstExp.getDataType() === _enums.DataType.Bool && secondExp.getDataType() === _enums.DataType.Bool && firstExp.is(_enums.ExpressionEntity.AssignmentStatement) && secondExp.is(_enums.ExpressionEntity.AssignmentStatement)) {
    var firstValue = _classPrivateMethodGet(this, _unpackGroup, _unpackGroup2).call(this, firstExp.getAssignedValues());

    var secondValue = _classPrivateMethodGet(this, _unpackGroup, _unpackGroup2).call(this, secondExp.getAssignedValues());

    var firstTarget = firstExp.getTargetVariables();
    var secondTarget = secondExp.getTargetVariables();
    if (firstValue.length !== 1 || secondValue.length !== 1 || firstTarget.length !== 1 || secondTarget.length !== 1) return false;
    return firstTarget[0].getTextValue() === secondTarget[0].getTextValue() && _classPrivateMethodGet(this, _inverseBooleanTypes, _inverseBooleanTypes2).call(this, firstValue[0], secondValue[0]);
  }

  return false;
}

function _isOneLineReturn2(firstEnd, secondEnd) {
  var firstExp = firstEnd.getFirstExpression();
  var secondExp = secondEnd.getFirstExpression();

  if (firstExp.getDataType() === _enums.DataType.Bool && secondExp.getDataType() === _enums.DataType.Bool && firstExp.is(_enums.ExpressionEntity.ReturnStatement) && secondExp.is(_enums.ExpressionEntity.ReturnStatement)) {
    var firstValue = _classPrivateMethodGet(this, _unpackGroup, _unpackGroup2).call(this, firstExp.getReturnedValue());

    var secondValue = _classPrivateMethodGet(this, _unpackGroup, _unpackGroup2).call(this, secondExp.getReturnedValue());

    if (firstValue.length !== 1 || secondValue.length !== 1) return false;
    return _classPrivateMethodGet(this, _inverseBooleanTypes, _inverseBooleanTypes2).call(this, firstValue[0], secondValue[0]);
  }

  return false;
}

function _inverseBooleanTypes2(firstValue, secondValue) {
  return firstValue.is(_enums.ExpressionEntity.TrueType) && secondValue.is(_enums.ExpressionEntity.FalseType) || firstValue.is(_enums.ExpressionEntity.FalseType) && secondValue.is(_enums.ExpressionEntity.TrueType);
}

function _unpackGroup2(expressions) {
  if (expressions.length !== 1) return expressions;
  if (expressions[0].is(_enums.ExpressionEntity.GroupStatement)) return expressions[0].getContents();
  return expressions;
}

var _variableMap = /*#__PURE__*/new WeakMap();

var _globalVars = /*#__PURE__*/new WeakMap();

var _moduleMap = /*#__PURE__*/new WeakMap();

var _userDefinedFunctionMap = /*#__PURE__*/new WeakMap();

var _unconnectedFunctionCalls = /*#__PURE__*/new WeakMap();

var _indentCharacter = /*#__PURE__*/new WeakMap();

var _indentLevelCount = /*#__PURE__*/new WeakMap();

var ScopeBlock = /*#__PURE__*/function (_StatementBlock) {
  _inherits(ScopeBlock, _StatementBlock);

  var _super2 = _createSuper(ScopeBlock);

  /** @type {Map<String, VariableInfo>} */

  /** @type {Set<String>} */

  /** @type {Map<String, ModuleInfo>} */

  /** @type {Map<String, UserDefinedFunctionExpression>} */

  /** @type {Map<String, UserDefinedFunctionCall[]>} */

  /** @type {String} */

  /** @type {Number} */
  // The number of the indentCharacter that make up one level of indentation

  /**
   * Creates a new StatementBlock representing a block of Python code
   * @param {ExpressionEntity} blockEntity The entity that defines this block e.g. document, if, for
   * @param {Block} parentBlock This block's parent, which will be undefined if this is the document root
   * @param {Number} indentation The size of the indentation of the definition line, in spaces
   */
  function ScopeBlock() {
    var _this2;

    var blockEntity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _enums.ExpressionEntity.DocumentDefinition;
    var parentBlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    var indentation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, ScopeBlock);

    if (blockEntity !== _enums.ExpressionEntity.DocumentDefinition && blockEntity !== _enums.ExpressionEntity.FunctionDefinition && blockEntity !== _enums.ExpressionEntity.ClassDefinition && blockEntity !== _enums.ExpressionEntity.ListComprehension) throw new Error("".concat(blockEntity.name, " is not a scope block"));
    _this2 = _super2.call(this, blockEntity, parentBlock, indentation);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this2), _variableMap, {
      writable: true,
      value: new Map()
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this2), _globalVars, {
      writable: true,
      value: new Set()
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this2), _moduleMap, {
      writable: true,
      value: new Map()
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this2), _userDefinedFunctionMap, {
      writable: true,
      value: new Map()
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this2), _unconnectedFunctionCalls, {
      writable: true,
      value: new Map()
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this2), _indentCharacter, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this2), _indentLevelCount, {
      writable: true,
      value: void 0
    });

    return _this2;
  } //#region - overrides

  /**
   * @override
   */


  _createClass(ScopeBlock, [{
    key: "isScopeBlock",
    value: function isScopeBlock() {
      return true;
    }
    /**
     * @override
     */

  }, {
    key: "getScope",
    value: function getScope() {
      return this;
    }
    /**
     * @override
     * @inheritdoc 
     */

  }, {
    key: "addStatement",
    value: function addStatement(statement) {
      _get(_getPrototypeOf(ScopeBlock.prototype), "addStatement", this).call(this, statement);

      _rawtextprocessing.StatementProcessor.connectVariableUsages(statement, this);

      var scope = this.getParentBlock() !== undefined && this.getBlockEntity() !== _enums.ExpressionEntity.ListComprehension ? this.getParentBlock().getScope() : this;

      _rawtextprocessing.StatementProcessor.connectUserDefinedFunctions(statement, scope !== undefined ? scope : this);
    } //#endregion - overrides
    //#region - extensions

    /**
     * Gets the map of variables found in this block (just this block, not nested blocks)
     * @returns {Map<String, VariableInfo>}
     */

  }, {
    key: "getVariableMap",
    value: function getVariableMap() {
      return _classPrivateFieldGet(this, _variableMap);
    }
    /**
     * Gets the map of modules found in this block
     * @returns {Map<String, ModuleInfo>}
     */

  }, {
    key: "getModuleMap",
    value: function getModuleMap() {
      return _classPrivateFieldGet(this, _moduleMap);
    }
    /**
     * Gets the BlockStatement that should be updated with a new statement or undefined
     * @param {Number} newStatementIndent The indentation of the new statement
     * @param {Number} newStatementStartLine
     * @returns {BlockStatement | undefined}
     */

  }, {
    key: "getStatementToUpdate",
    value: function getStatementToUpdate(newStatementIndent, newStatementStartLine) {
      var statements = this.getStatements();

      if (statements.length > 0 && this.getLastStatement().isBlockStatement()) {
        if (this.getLastStatement().getLastLineNumber() !== newStatementStartLine) return this.getLastStatement().getBlockStatementForIndent(newStatementIndent);else {
          return this.getLastStatement().getLastBlockStatement();
        }
      }

      return undefined;
    }
    /**
     * Adds a user defined function to the tracking
     * @param {UserDefinedFunctionExpression} functionExp 
     */

  }, {
    key: "addUserDefinedFunction",
    value: function addUserDefinedFunction(functionExp) {
      var funcName = functionExp.getTextValue();

      _classPrivateFieldGet(this, _userDefinedFunctionMap).set(funcName, functionExp);

      if (_classPrivateFieldGet(this, _unconnectedFunctionCalls).has(funcName)) {
        var _iterator8 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _unconnectedFunctionCalls).get(funcName)),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var call = _step8.value;
            functionExp.addObserver(call);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }

        _classPrivateFieldGet(this, _unconnectedFunctionCalls)["delete"](funcName);
      }
    }
    /**
     * Gets the user defined functions defined in this block
     * @returns {Map<String, UserDefinedFunctionExpression>}
     */

  }, {
    key: "getUserDefinedFunctions",
    value: function getUserDefinedFunctions() {
      return _classPrivateFieldGet(this, _userDefinedFunctionMap);
    }
    /**
     * Get unconnected function calls
     * @returns {Map<String, UserDefinedFunctionCall[]>}
     */

  }, {
    key: "getUnconnectedFunctionCalls",
    value: function getUnconnectedFunctionCalls() {
      return _classPrivateFieldGet(this, _unconnectedFunctionCalls);
    }
    /**
     * Adds a call of a function that is not yet tracked to the unconnected function map
     * @param {UserDefinedFunctionCall} functionCallExp 
     */

  }, {
    key: "addUnconnectedFunctionCall",
    value: function addUnconnectedFunctionCall(functionCallExp) {
      var funcName = functionCallExp.getFunctionName();

      if (!_classPrivateFieldGet(this, _unconnectedFunctionCalls).has(funcName)) {
        _classPrivateFieldGet(this, _unconnectedFunctionCalls).set(funcName, []);
      }

      _classPrivateFieldGet(this, _unconnectedFunctionCalls).get(funcName).push(functionCallExp);
    }
    /**
     * Adds tracking for a variable marked with the global keyword
     * @param {String} name 
     */

  }, {
    key: "addGlobalVar",
    value: function addGlobalVar(name) {
      _classPrivateFieldGet(this, _globalVars).add(name);
    }
    /**
     * Gets the names of any global variables
     * @returns {Set<String>}
     */

  }, {
    key: "getGlobalVars",
    value: function getGlobalVars() {
      return _classPrivateFieldGet(this, _globalVars);
    }
    /**
     * Find all function definitions in this scope block or a parent scope.
     * @returns {Map<String, UserDefinedFunctionExpression>}
     */

  }, {
    key: "findAllFunctions",
    value: function findAllFunctions() {
      var functions = new Map(this.getUserDefinedFunctions());
      var block = this.getParentBlock();

      while (block !== undefined && block.getScope() !== undefined) {
        block = block.getScope();
        var higherScopeFunctions = block.getUserDefinedFunctions();

        var _iterator9 = _createForOfIteratorHelper(higherScopeFunctions),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var _step9$value = _slicedToArray(_step9.value, 2),
                name = _step9$value[0],
                func = _step9$value[1];

            functions.set(name, func);
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }

        block = block.getParentBlock();
      }

      return functions;
    }
    /**
     * Find all imported modules in this scope block or a parent scope.
     * @returns {Map<String, ModuleInfo>}
     */

  }, {
    key: "findAllModules",
    value: function findAllModules() {
      var modules = new Map(this.getModuleMap());
      var block = this.getParentBlock();

      while (block !== undefined && block.getScope() !== undefined) {
        block = block.getScope();
        var higherScopeModules = block.getModuleMap();

        var _iterator10 = _createForOfIteratorHelper(higherScopeModules),
            _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var _step10$value = _slicedToArray(_step10.value, 2),
                name = _step10$value[0],
                module = _step10$value[1];

            modules.set(name, module);
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }

        block = block.getParentBlock();
      }

      return modules;
    } //#endregion

  }]);

  return ScopeBlock;
}(StatementBlock);
/**
 * @extends ScopeBlock
 */


exports.ScopeBlock = ScopeBlock;

var _return = /*#__PURE__*/new WeakMap();

var _functionName = /*#__PURE__*/new WeakMap();

var _checkFunctionPrints = /*#__PURE__*/new WeakSet();

var FunctionBlock = /*#__PURE__*/function (_ScopeBlock) {
  _inherits(FunctionBlock, _ScopeBlock);

  var _super3 = _createSuper(FunctionBlock);

  /** @type {ReturnStatement | undefined} */
  // Top level return 

  /** @type {String} */

  /**
   * Creates a new FunctionBlock
   * @param {StatementBlock} parentBlock This block's parent, which will be undefined if this is the document root
   * @param {Statement} definitionStatement The definition line
   */
  function FunctionBlock(parentBlock, definitionStatement) {
    var _this3;

    _classCallCheck(this, FunctionBlock);

    _this3 = _super3.call(this, _enums.ExpressionEntity.FunctionDefinition, parentBlock, definitionStatement.getIndentation());

    _classPrivateMethodInitSpec(_assertThisInitialized(_this3), _checkFunctionPrints);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this3), _return, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this3), _functionName, {
      writable: true,
      value: void 0
    });

    var firstExp = definitionStatement.getFirstExpression().getFunctionNameExpression();

    _classPrivateFieldSet(_assertThisInitialized(_this3), _functionName, firstExp.getTextValue());

    parentBlock.getScope().addUserDefinedFunction(firstExp);

    _this3.addStatement(definitionStatement);

    _this3.addRules([_classPrivateMethodGet(_assertThisInitialized(_this3), _checkFunctionPrints, _checkFunctionPrints2)]);

    return _this3;
  } //#region - overrides

  /**
   * @override
   */


  _createClass(FunctionBlock, [{
    key: "isScopeBlock",
    value: function isScopeBlock() {
      return true;
    }
    /**
     * @override
     */

  }, {
    key: "getScope",
    value: function getScope() {
      return this;
    }
    /**
     * @override
     * @inheritdoc 
     */

  }, {
    key: "addStatement",
    value: function addStatement(statement) {
      _get(_getPrototypeOf(FunctionBlock.prototype), "addStatement", this).call(this, statement);
    } //#endregion - overrides
    //#region - extensions

    /**
     * Gets the aggregated return type of the function
     * @returns {DataType}
     */

  }, {
    key: "getReturnType",
    value: function getReturnType() {
      var lastExecuted = this.getLastExecutedStatements();
      var returnTypes = lastExecuted.filter(function (s) {
        return !s.isBlank() && s.getFirstExpression().is(_enums.ExpressionEntity.ReturnStatement);
      }).map(function (s) {
        return s.getFirstExpression().getDataType();
      });

      if (!this.alwaysReturnsAValue()) {
        returnTypes.push(_enums.DataType.None);
      }

      return (0, _utils.getAggregateType)(returnTypes);
    }
    /**
     * Gets the name of the function
     * @returns {String}
     */

  }, {
    key: "getFunctionName",
    value: function getFunctionName() {
      return _classPrivateFieldGet(this, _functionName);
    }
    /**
     * Gets the UserDefinedFunctionExpression that contains information about returns
     * @returns {UserDefinedFunctionExpression | undefined}
     */

  }, {
    key: "getFunctionExpression",
    value: function getFunctionExpression() {
      var statements = this.getStatements();

      if (statements.length > 0 && statements[0].getFirstExpression().is(_enums.ExpressionEntity.FunctionDefinitionStatement)) {
        return statements[0].getFirstExpression().getFunctionNameExpression();
      }

      return undefined;
    } //#endregion - extensions
    //#region - symptoms

    /**
     * Rule finder. Checks a function scope block for print statements.
     * @param {FunctionBlock} block 
     * @returns {Symptom[]}
     */
    //#endregion - symptoms

  }]);

  return FunctionBlock;
}(ScopeBlock);
/**
 * @extends ScopeBlock
 */


exports.FunctionBlock = FunctionBlock;

function _checkFunctionPrints2(block) {
  var symptoms = [];
  var func = block.getFunctionExpression();

  if (func !== undefined) {
    var statements = block.getStatements();

    var printLines = _classStaticPrivateMethodGet(FunctionBlock, FunctionBlock, _checkStatementsForPrint).call(FunctionBlock, statements);

    if (printLines.length > 0) {
      symptoms.push(_symptom2.SymptomFinder.createStatementSymptom(_enums.SymptomType.FunctionPrints, [func], 0, 0, {
        printLines: printLines,
        functionReturns: func.getReturnType() !== _enums.DataType.None
      }));
    }
  }

  return symptoms;
}

function _checkStatementsForPrint(statements) {
  var prints = [];

  for (var i = 0; i < statements.length; i++) {
    if (statements[i].isBlockStatement()) {
      prints = prints.concat(_classStaticPrivateMethodGet(this, FunctionBlock, _checkStatementsForPrint).call(this, statements[i].getStatements()));
    } else {
      var firstExp = statements[i].getFirstExpression();

      if (firstExp.is(_enums.ExpressionEntity.BuiltInFunctionCall) && firstExp.getFunctionEntity() === _enums.ExpressionEntity.PrintFunction) {
        prints.push({
          lineNumber: firstExp.getStartLineNumber(),
          followsReturn: i > 0 && statements[i].getFirstExpression().is(_enums.ExpressionEntity.ReturnStatement),
          precedesReturn: i < statements.length - 1 && statements[i + 1].getFirstExpression().is(_enums.ExpressionEntity.ReturnStatement),
          isReturned: false,
          isEndOfExitBranch: i === statements.length - 1,
          blockId: firstExp.getBlockId()
        });
      } else if (firstExp.is(_enums.ExpressionEntity.ReturnStatement) && firstExp.getExpressionsOfKind(_enums.ExpressionEntity.PrintFunction).length > 0) {
        prints.push({
          lineNumber: firstExp.getStartLineNumber(),
          followsReturn: false,
          precedesReturn: false,
          isReturned: true,
          isEndOfExitBranch: i === statements.length - 1,
          blockId: firstExp.getBlockId()
        });
      }
    }
  }

  return prints;
}

var ListComprehensionBlock = /*#__PURE__*/function (_ScopeBlock2) {
  _inherits(ListComprehensionBlock, _ScopeBlock2);

  var _super4 = _createSuper(ListComprehensionBlock);

  /**
   * Creates a new ListComprehensionBlock
   * @param {StatementBlock} parentBlock This block's parent, which will be undefined if this is the document root
   * @param {ListComprehensionExpression} listComprehensionExpression The definition line
   */
  function ListComprehensionBlock(parentBlock, listComprehensionExpression) {
    var _this4;

    _classCallCheck(this, ListComprehensionBlock);

    _this4 = _super4.call(this, _enums.ExpressionEntity.ListComprehension, parentBlock);
    var statement = new _statement.Statement(listComprehensionExpression.getTextValue(), listComprehensionExpression.getStartLineNumber(), new _indent.Indent(""), [listComprehensionExpression]);

    _this4.addStatement(statement);

    return _this4;
  }
  /**
   * @override
   */


  _createClass(ListComprehensionBlock, [{
    key: "getId",
    value: function getId() {
      var statements = this.getStatements();
      return "".concat(_get(_getPrototypeOf(ListComprehensionBlock.prototype), "getId", this).call(this), "-").concat(statements.length > 0 && !statements[0].isBlank() ? statements[0].getFirstExpression().getDocumentStartIndex() : "-1");
    }
  }]);

  return ListComprehensionBlock;
}(ScopeBlock);
/**
 * Blocks that represent branches in code e.g. loops and conditional branches. The term "block"
 * is used more broadly than Python blocks.
 * @extends StatementBlock
 */


exports.ListComprehensionBlock = ListComprehensionBlock;

var _conditionalSiblings = /*#__PURE__*/new WeakMap();

var _getInnerStatements = /*#__PURE__*/new WeakSet();

var _hasSiblingOfEntity = /*#__PURE__*/new WeakSet();

var _checkOneLineConditional3 = /*#__PURE__*/new WeakSet();

var _checkBranchExit = /*#__PURE__*/new WeakSet();

var _checkLoopVarAssignedIntLiteral = /*#__PURE__*/new WeakSet();

var _checkLoopVarModification = /*#__PURE__*/new WeakSet();

var _findBlocksOfVarMod = /*#__PURE__*/new WeakSet();

var BranchBlock = /*#__PURE__*/function (_StatementBlock2) {
  _inherits(BranchBlock, _StatementBlock2);

  var _super5 = _createSuper(BranchBlock);

  /** @type {Set<BranchBlock>} */
  // Stores the ids of conditional branch siblings if this is a conditional branch

  /**
  * Creates a new BranchBlock representing a block of Python code
  * @param {StatementBlock} parentBlock This block's parent, which will be undefined if this is the document root
  * @param {Statement} definitionStatement The definition line
  */
  function BranchBlock(parentBlock, definitionStatement) {
    var _this5;

    _classCallCheck(this, BranchBlock);

    var blockEntity = definitionStatement.getFirstExpression().getBlockEntity();
    if (blockEntity === _enums.ExpressionEntity.DocumentDefinition || blockEntity === _enums.ExpressionEntity.FunctionDefinition || blockEntity === _enums.ExpressionEntity.ClassDefinition || blockEntity === _enums.ExpressionEntity.ListComprehension) throw new Error("".concat(blockEntity.name, " is a scope block"));
    _this5 = _super5.call(this, blockEntity, parentBlock, definitionStatement.getIndentation());

    _classPrivateMethodInitSpec(_assertThisInitialized(_this5), _findBlocksOfVarMod);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this5), _checkLoopVarModification);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this5), _checkLoopVarAssignedIntLiteral);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this5), _checkBranchExit);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this5), _checkOneLineConditional3);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this5), _hasSiblingOfEntity);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this5), _getInnerStatements);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this5), _conditionalSiblings, {
      writable: true,
      value: new Set()
    });

    _this5.addStatement(definitionStatement);

    _this5.addRules([_classPrivateMethodGet(_assertThisInitialized(_this5), _checkBranchExit, _checkBranchExit2), _classPrivateMethodGet(_assertThisInitialized(_this5), _checkLoopVarModification, _checkLoopVarModification2), _classPrivateMethodGet(_assertThisInitialized(_this5), _checkOneLineConditional3, _checkOneLineConditional4), _classPrivateMethodGet(_assertThisInitialized(_this5), _checkLoopVarAssignedIntLiteral, _checkLoopVarAssignedIntLiteral2)]);

    return _this5;
  } //#region - overrides

  /**
   * @override
   */


  _createClass(BranchBlock, [{
    key: "isScopeBlock",
    value: function isScopeBlock() {
      return false;
    }
    /**
     * Checks whether this is a branch block
     * @returns {Boolean}
     */

  }, {
    key: "isBranchBlock",
    value: function isBranchBlock() {
      return true;
    }
    /**
     * Gets the last statement to be executed in a block. This will either be a return,
     * a break, or the last statement if the block has no exit. Blocks with multiple 
     * branches will have multiple last statements, hence the return type of array.
     * @returns {Statement[]}
     */

  }, {
    key: "getLastExecutedStatements",
    value: function getLastExecutedStatements() {
      var lastStatements = [];

      var _iterator11 = _createForOfIteratorHelper(this.getChildBlocks()),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var child = _step11.value;
          lastStatements = lastStatements.concat(child.getLastExecutedStatements());
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }

      var statements = _classPrivateMethodGet(this, _getInnerStatements, _getInnerStatements2).call(this);

      for (var s = 0; s < statements.length; s++) {
        if (!statements[s].isBlockStatement()) {
          if (s === statements.length - 1 && this.isBranchOfExhaustiveConditional()) {
            lastStatements.push(statements[s]);
          } else if (!statements[s].isBlank()) {
            var firstExp = statements[s].getFirstExpression();

            if (firstExp.isOneOf([_enums.ExpressionEntity.ReturnStatement, _enums.ExpressionEntity.BreakKeyword])) {
              lastStatements.push(statements[s]);
              break;
            }
          }
        }
      }

      return lastStatements;
    }
    /**
     * Gets the statements inside the block statement
     * @returns {Statement[]}
     */

  }, {
    key: "hasTopLevelReturn",
    value:
    /**
     * Checks if this block has a top level (not in a child block) return statement
     * @returns {Boolean}
     */
    function hasTopLevelReturn() {
      var statements = _classPrivateMethodGet(this, _getInnerStatements, _getInnerStatements2).call(this);

      var _iterator12 = _createForOfIteratorHelper(statements),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var s = _step12.value;

          if (!s.isBlockStatement() && !s.isBlank() && s.getFirstExpression().is(_enums.ExpressionEntity.ReturnStatement)) {
            return true;
          }
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }

      return false;
    }
    /**
     * Checks if this block has a top level (not in a child block) exit statement
     * @returns {Boolean}
     */

  }, {
    key: "hasTopLevelExit",
    value: function hasTopLevelExit() {
      var statements = _classPrivateMethodGet(this, _getInnerStatements, _getInnerStatements2).call(this);

      var _iterator13 = _createForOfIteratorHelper(statements),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var s = _step13.value;

          if (!s.isBlockStatement() && !s.isBlank() && s.getExpressions().filter(function (e) {
            return (0, _utils.containsExit)(e);
          }).length > 0) {
            return true;
          }
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }

      return false;
    } //#endregion - overrides
    //#region - custom

    /**
     * Checks if this block is a branch of a conditional statment.
     * @returns {Boolean}
     */

  }, {
    key: "isBranchOfConditional",
    value: function isBranchOfConditional() {
      return this.getBlockEntity() === _enums.ExpressionEntity.IfDefinition || this.getBlockEntity() === _enums.ExpressionEntity.ElifDefinition || this.getBlockEntity() === _enums.ExpressionEntity.ElseDefinition || this.getBlockEntity() === _enums.ExpressionEntity.TryDefinition || this.getBlockEntity() === _enums.ExpressionEntity.ExceptDefinition || this.getBlockEntity() === _enums.ExpressionEntity.FinallyDefinition;
    }
    /**
     * Checks if this block is a branch of an exhaustive conditional--it includes an else branch
     * @returns {Boolean}
     */

  }, {
    key: "isBranchOfExhaustiveConditional",
    value: function isBranchOfExhaustiveConditional() {
      if (this.getBlockEntity() === _enums.ExpressionEntity.ElseDefinition) {
        return _classPrivateMethodGet(this, _hasSiblingOfEntity, _hasSiblingOfEntity2).call(this, _enums.ExpressionEntity.IfDefinition);
      } else if (this.getBlockEntity() === _enums.ExpressionEntity.ElifDefinition) {
        var ifFound = false;
        var elseFound = false;

        var _iterator14 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _conditionalSiblings)),
            _step14;

        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var b = _step14.value;

            if (b.getBlockEntity() === _enums.ExpressionEntity.IfDefinition) {
              ifFound = true;
            } else if (b.getBlockEntity() === _enums.ExpressionEntity.ElseDefinition) {
              elseFound = true;
            }

            if (ifFound && elseFound) {
              return true;
            }
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
      } else if (this.getBlockEntity() === _enums.ExpressionEntity.IfDefinition) {
        return _classPrivateMethodGet(this, _hasSiblingOfEntity, _hasSiblingOfEntity2).call(this, _enums.ExpressionEntity.ElseDefinition);
      } else if (this.getBlockEntity() === _enums.ExpressionEntity.TryDefinition) {
        return _classPrivateMethodGet(this, _hasSiblingOfEntity, _hasSiblingOfEntity2).call(this, _enums.ExpressionEntity.ExceptDefinition);
      } else if (this.getBlockEntity() === _enums.ExpressionEntity.ExceptDefinition) {
        return _classPrivateMethodGet(this, _hasSiblingOfEntity, _hasSiblingOfEntity2).call(this, _enums.ExpressionEntity.TryDefinition);
      }

      return false;
    }
  }, {
    key: "getSiblingConditionalBranches",
    value:
    /**
     * Gets a set containing this branch's siblings in a conditional. If it is not a conditional
     * branch, the set will be empty.
     * @returns {Set<BranchBlock>}
     */
    function getSiblingConditionalBranches() {
      return _classPrivateFieldGet(this, _conditionalSiblings);
    }
    /**
     * Connects a sibling conditional branch.
     * @param {BranchBlock} branch 
     * @throws Throws an error if either branch is not a conditional branch.
     */

  }, {
    key: "addSibling",
    value: function addSibling(branch) {
      if (!this.isBranchOfConditional()) {
        throw new Error("Cannot add a sibling to a branch that is not a conditional");
      }

      if (!branch.isBranchOfConditional()) {
        throw new Error("Trying to add a non-conditional branch as a sibling.");
      }

      _classPrivateFieldGet(this, _conditionalSiblings).add(branch);
    } //#endregion - custom
    //#region - symptoms

    /**
     * Rule finder.
     * @param {BranchBlock} branch 
     * @returns {Symptom[]}
     */
    //#endregion - symptoms

  }]);

  return BranchBlock;
}(StatementBlock);

exports.BranchBlock = BranchBlock;

function _getInnerStatements2() {
  var blockStatement = this.getStatements();

  if (blockStatement.length !== 1) {
    throw new Error("A branch block should only contain one statement, which should be a block statement");
  }

  return blockStatement[0].getStatements();
}

function _hasSiblingOfEntity2(entity) {
  var _iterator23 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _conditionalSiblings)),
      _step23;

  try {
    for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
      var b = _step23.value;

      if (b.getBlockEntity() === entity) {
        return true;
      }
    }
  } catch (err) {
    _iterator23.e(err);
  } finally {
    _iterator23.f();
  }

  return false;
}

function _checkOneLineConditional4(branch) {
  var symptoms = [];
  return symptoms;
}

function _checkBranchExit2(branch) {
  var symptoms = [];

  if (branch.getBlockEntity() === _enums.ExpressionEntity.ForDefinition || branch.getBlockEntity() === _enums.ExpressionEntity.WhileDefinition && branch.hasTopLevelExit()) {
    var _iterator24 = _createForOfIteratorHelper(_classPrivateMethodGet(branch, _getInnerStatements, _getInnerStatements2).call(branch)),
        _step24;

    try {
      for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
        var statement = _step24.value;

        if (!statement.isBlockStatement() && !statement.isBlank() && (0, _utils.containsExit)(statement.getFirstExpression())) {
          symptoms.push(_symptom2.SymptomFinder.createStatementSymptom(_enums.SymptomType.LoopReturn, [statement.getFirstExpression()], 0, 0, {}, branch.getId(), {
            loopType: branch.getBlockEntity().name,
            exitLevel: _constants.TOP_LEVEL,
            exitType: statement.getFirstExpression().isOneOf([_enums.ExpressionEntity.ReturnKeyword, _enums.ExpressionEntity.ReturnStatement]) ? "return" : statement.getFirstExpression().getTextValue()
          }));
        }
      }
    } catch (err) {
      _iterator24.e(err);
    } finally {
      _iterator24.f();
    }
  } else if (branch.isBranchOfExhaustiveConditional() && branch.getBlockEntity() === _enums.ExpressionEntity.IfDefinition && branch.hasTopLevelExit()) {
    var parentIsLoop = branch.getParentBlock() !== undefined && branch.getParentBlock().getBlockEntity() === _enums.ExpressionEntity.ForDefinition || branch.getParentBlock().getBlockEntity() === _enums.ExpressionEntity.WhileDefinition;

    if (parentIsLoop) {
      var _iterator25 = _createForOfIteratorHelper(branch.getSiblingConditionalBranches()),
          _step25;

      try {
        for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
          var b = _step25.value;

          if (!b.hasTopLevelExit()) {
            return symptoms;
          }
        }
      } catch (err) {
        _iterator25.e(err);
      } finally {
        _iterator25.f();
      }

      var allExpressions = (0, _utils.getExpressionsInBranches)([branch].concat(_toConsumableArray(Array.from(branch.getSiblingConditionalBranches()))));
      var exits = allExpressions.flatMap(function (e) {
        return e.getExpressionsOfKind(_enums.ExpressionEntity.ReturnKeyword).concat(e.getExpressionsOfKind(_enums.ExpressionEntity.BreakKeyword), e.getExpressionsOfKind(_enums.ExpressionEntity.ExitFunction), e.getExpressionsOfKind(_enums.ExpressionEntity.SysExit), e.getExpressionsOfKind(_enums.ExpressionEntity.QuitFunction));
      }).map(function (e) {
        return e.getTextValue();
      });
      symptoms.push(_symptom2.SymptomFinder.createStatementSymptom(_enums.SymptomType.LoopReturn, allExpressions, 0, allExpressions.length, {}, branch.getParentBlock().getId(), {
        loopType: branch.getBlockEntity().name,
        exitLevel: _constants.ALL_BRANCHES_EXHAUSTIVE,
        exitTypes: exits
      }));
    }
  }

  return symptoms;
}

function _checkLoopVarAssignedIntLiteral2(branch) {
  var symptoms = [];

  if (branch.getBlockEntity() === _enums.ExpressionEntity.WhileDefinition) {
    (function () {
      var definitionExpression = _classPrivateMethodGet(branch, _getInnerStatements, _getInnerStatements2).call(branch)[0].getFirstExpression();

      var loopVariableNames = new Set(definitionExpression.getVariableExpressions().map(function (v) {
        return v.getTextValue();
      }));

      var innerStatements = _classPrivateMethodGet(branch, _getInnerStatements, _getInnerStatements2).call(branch).slice(1);

      var loopVarChanges = new Map();
      var loopVarAssignments = new Map();

      var _iterator26 = _createForOfIteratorHelper(loopVariableNames),
          _step26;

      try {
        for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
          var name = _step26.value;
          loopVarChanges.set(name, false);
          loopVarAssignments.set(name, []);
        }
      } catch (err) {
        _iterator26.e(err);
      } finally {
        _iterator26.f();
      }

      var _iterator27 = _createForOfIteratorHelper(innerStatements),
          _step27;

      try {
        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
          var statement = _step27.value;

          var _iterator29 = _createForOfIteratorHelper(statement.getExpressions()),
              _step29;

          try {
            for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
              var exp = _step29.value;
              var changedVars = exp.getExpressionsOfKind(_enums.ExpressionEntity.ChangeStatement).flatMap(function (change) {
                return change.getTargetVariables();
              }).filter(function (v) {
                return loopVariableNames.has(v.getTextValue());
              });
              var assignedVars = exp.getExpressionsOfKind(_enums.ExpressionEntity.AssignmentStatement).flatMap(function (assign) {
                return assign.getTargetVariables();
              }).filter(function (v) {
                return loopVariableNames.has(v.getTextValue());
              });

              var _iterator30 = _createForOfIteratorHelper(changedVars),
                  _step30;

              try {
                for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                  var change = _step30.value;

                  if (loopVarChanges.has(change.getTextValue())) {
                    loopVarChanges.set(change.getTextValue(), true);
                  }
                }
              } catch (err) {
                _iterator30.e(err);
              } finally {
                _iterator30.f();
              }

              var _iterator31 = _createForOfIteratorHelper(assignedVars),
                  _step31;

              try {
                for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                  var assign = _step31.value;

                  if (loopVarAssignments.has(assign.getTextValue())) {
                    loopVarAssignments.get(assign.getTextValue()).push(assign);
                  }
                }
                /*for (const v of assignedVars) {
                    const values = v.getParent().getAssignedValues();
                    if (values.length === 1 && values[0].is(ExpressionEntity.IntLiteral)) {
                        symptoms.push(SymptomFinder.createStatementSymptom(SymptomType.WhileLoopVarAssignedIntLiteral, [v], 0, 0));
                    }
                }*/

              } catch (err) {
                _iterator31.e(err);
              } finally {
                _iterator31.f();
              }
            }
          } catch (err) {
            _iterator29.e(err);
          } finally {
            _iterator29.f();
          }
        }
      } catch (err) {
        _iterator27.e(err);
      } finally {
        _iterator27.f();
      }

      var _iterator28 = _createForOfIteratorHelper(loopVariableNames),
          _step28;

      try {
        for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
          var _name = _step28.value;

          if (!loopVarChanges.get(_name) && loopVarAssignments.get(_name).length > 0) {
            var assignedIntLiteral = [];
            var assignedSomethingElse = false;

            var _iterator32 = _createForOfIteratorHelper(loopVarAssignments.get(_name)),
                _step32;

            try {
              for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                var _v = _step32.value;

                var values = _v.getParent().getAssignedValues();

                if (values.length === 1 && values[0].is(_enums.ExpressionEntity.IntLiteral)) {
                  assignedIntLiteral.push(_v);
                } else {
                  assignedSomethingElse = true;
                  break;
                }
              }
            } catch (err) {
              _iterator32.e(err);
            } finally {
              _iterator32.f();
            }

            if (!assignedSomethingElse) {
              var _iterator33 = _createForOfIteratorHelper(assignedIntLiteral),
                  _step33;

              try {
                for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                  var v = _step33.value;
                  symptoms.push(_symptom2.SymptomFinder.createStatementSymptom(_enums.SymptomType.WhileLoopVarAssignedIntLiteral, [v], 0, 0));
                }
              } catch (err) {
                _iterator33.e(err);
              } finally {
                _iterator33.f();
              }
            }
          }
        }
      } catch (err) {
        _iterator28.e(err);
      } finally {
        _iterator28.f();
      }
    })();
  }

  return symptoms;
}

function _checkLoopVarModification2(branch) {
  var symptoms = [];

  if (branch.getBlockEntity() === _enums.ExpressionEntity.WhileDefinition) {
    var definitionExpression = _classPrivateMethodGet(branch, _getInnerStatements, _getInnerStatements2).call(branch)[0].getFirstExpression();

    var loopVariables = new Set(definitionExpression.getVariableExpressions());

    if (loopVariables.size > 0) {
      var modBlocks = _classPrivateMethodGet(branch, _findBlocksOfVarMod, _findBlocksOfVarMod2).call(branch, loopVariables);

      var topLevelModified = new Set();
      var childLoopModified = new Map();

      var _iterator34 = _createForOfIteratorHelper(loopVariables),
          _step34;

      try {
        for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
          var v = _step34.value;
          var blockList = modBlocks.get(v);

          var _iterator36 = _createForOfIteratorHelper(blockList),
              _step36;

          try {
            for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
              var b = _step36.value;

              if (b === branch) {
                topLevelModified.add(v);
              }

              var parentLoop = b.getNearestParentOfAny([_enums.ExpressionEntity.WhileDefinition, _enums.ExpressionEntity.ForDefinition]);

              if (parentLoop !== undefined && parentLoop !== branch && branch.hasChild(parentLoop)) {
                if (!childLoopModified.has(v)) {
                  childLoopModified.set(v, new Set());
                }

                childLoopModified.get(v).add(parentLoop);
              } else if (parentLoop !== undefined && parentLoop === branch) {
                topLevelModified.add(v);
              }
            }
          } catch (err) {
            _iterator36.e(err);
          } finally {
            _iterator36.f();
          }
        }
      } catch (err) {
        _iterator34.e(err);
      } finally {
        _iterator34.f();
      }

      if (topLevelModified.size === 0) {
        symptoms.push(_symptom2.SymptomFinder.createStatementSymptom(_enums.SymptomType.LoopVarNotModified, [definitionExpression], 0, 0, {
          unmodifiedVars: Array.from(loopVariables).map(function (v) {
            return v.getTextValue();
          })
        }, branch.getId()));
      }

      var _iterator35 = _createForOfIteratorHelper(childLoopModified),
          _step35;

      try {
        for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
          var _step35$value = _slicedToArray(_step35.value, 2),
              _v2 = _step35$value[0],
              loopList = _step35$value[1];

          var symptom = _symptom2.SymptomFinder.createStatementSymptom(_enums.SymptomType.LoopVarModifiedInChildLoop, [_v2], 0, 0, {
            modifiedIn: [],
            varDataType: []
          }, branch.getId());

          var _iterator37 = _createForOfIteratorHelper(loopList),
              _step37;

          try {
            for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
              var block = _step37.value;
              symptom.getAdditionalInfo().modifiedIn.push({
                loopType: block.getBlockEntity().name,
                startLine: block.getStatements()[0].getFirstLineNumber(),
                varDataType: _v2.getDataType().name
              });
            }
          } catch (err) {
            _iterator37.e(err);
          } finally {
            _iterator37.f();
          }

          symptoms.push(symptom);
        }
      } catch (err) {
        _iterator35.e(err);
      } finally {
        _iterator35.f();
      }
    }
  }

  return symptoms;
}

function _findBlocksOfVarMod2(variables) {
  var innerStatements = _classPrivateMethodGet(this, _getInnerStatements, _getInnerStatements2).call(this).filter(function (s) {
    return !s.isBlockStatement();
  });

  var blocks = new Map();

  var _iterator38 = _createForOfIteratorHelper(variables),
      _step38;

  try {
    for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
      var v = _step38.value;
      blocks.set(v, new Set());
    }
  } catch (err) {
    _iterator38.e(err);
  } finally {
    _iterator38.f();
  }

  var _iterator39 = _createForOfIteratorHelper(innerStatements),
      _step39;

  try {
    for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
      var s = _step39.value;
      var expressions = s.getExpressions();

      var _iterator41 = _createForOfIteratorHelper(expressions),
          _step41;

      try {
        for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
          var exp = _step41.value;
          // Gets the names of all modified variables inside the loop
          var changeVars = exp.getVariableExpressions().filter(function (v) {
            return v.isAssignedOrChanged();
          });
          var changeVarNames = new Set(changeVars.map(function (v) {
            return v.getTextValue();
          }));

          var _iterator42 = _createForOfIteratorHelper(variables),
              _step42;

          try {
            for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
              var loopVar = _step42.value;

              if (changeVarNames.has(loopVar.getTextValue())) {
                blocks.get(loopVar).add(this);
              }
            }
          } catch (err) {
            _iterator42.e(err);
          } finally {
            _iterator42.f();
          }
        }
      } catch (err) {
        _iterator41.e(err);
      } finally {
        _iterator41.f();
      }
    }
  } catch (err) {
    _iterator39.e(err);
  } finally {
    _iterator39.f();
  }

  var _iterator40 = _createForOfIteratorHelper(this.getChildBlocks().filter(function (b) {
    return b.isBranchBlock();
  })),
      _step40;

  try {
    for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
      var child = _step40.value;

      var modBlocks = _classPrivateMethodGet(child, _findBlocksOfVarMod, _findBlocksOfVarMod2).call(child, variables);

      var _iterator43 = _createForOfIteratorHelper(variables),
          _step43;

      try {
        for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
          var _blocks$get;

          var _v3 = _step43.value;
          if (modBlocks.get(_v3).size > 0) (_blocks$get = blocks.get(_v3)).add.apply(_blocks$get, _toConsumableArray(modBlocks.get(_v3)));
        }
      } catch (err) {
        _iterator43.e(err);
      } finally {
        _iterator43.f();
      }
    }
  } catch (err) {
    _iterator40.e(err);
  } finally {
    _iterator40.f();
  }

  return blocks;
}
},{"../problem-finder/symptom.js":12,"../utils/constants.js":13,"../utils/utils.js":14,"./ast.js":1,"./enums.js":4,"./identifiers.js":5,"./indent.js":6,"./interfaces.js":7,"./rawtextprocessing.js":8,"./statement.js":9}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocInfo = void 0;

var _enums = require("./enums.js");

var _statement = require("./statement.js");

var _block = require("./block.js");

var _identifiers = require("./identifiers.js");

var _symptom = require("../problem-finder/symptom.js");

var _misconception = require("../problem-finder/misconception.js");

var _rawtextprocessing = require("./rawtextprocessing.js");

var _ast = require("./ast.js");

var _constants = require("../utils/constants.js");

var _utils = require("../utils/utils.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _text = /*#__PURE__*/new WeakMap();

var _statements = /*#__PURE__*/new WeakMap();

var _documentRoot = /*#__PURE__*/new WeakMap();

var _variables = /*#__PURE__*/new WeakMap();

var _userDefinedFunctions = /*#__PURE__*/new WeakMap();

var _modules = /*#__PURE__*/new WeakMap();

var _processSource = /*#__PURE__*/new WeakSet();

var _findAllScopeBlocks = /*#__PURE__*/new WeakSet();

var _findSymptoms = /*#__PURE__*/new WeakSet();

var _summariseVariables = /*#__PURE__*/new WeakSet();

var _summariseUserDefinedFunctions = /*#__PURE__*/new WeakSet();

var _checkVariablesWithSameNameAsUserDefinedFunctions = /*#__PURE__*/new WeakSet();

var _findFunctionWithSameNameAsBuiltIns = /*#__PURE__*/new WeakSet();

var _convertBuiltIns = /*#__PURE__*/new WeakSet();

var _findAllFunctions = /*#__PURE__*/new WeakSet();

var _processUnconnectedFunctions = /*#__PURE__*/new WeakSet();

var _isImportedEntity = /*#__PURE__*/new WeakSet();

var _getVariableNamesMatchingTypeNames = /*#__PURE__*/new WeakSet();

var _updateBlock = /*#__PURE__*/new WeakSet();

var _processListComprehensions = /*#__PURE__*/new WeakSet();

var _prepareListComprehensions = /*#__PURE__*/new WeakSet();

var _createNewBranchBlock = /*#__PURE__*/new WeakSet();

var _createNewFunctionBlock = /*#__PURE__*/new WeakSet();

var _shiftCurrentBlock = /*#__PURE__*/new WeakSet();

/**
 * A class storing information about a Python document, including the variables used, functions defined, and any detected symptoms and misconceptions.
 */
var DocInfo = /*#__PURE__*/function () {
  /** @type {string} */
  // The raw text in the document

  /** @type {Statement} */

  /** @type {StatementBlock} */

  /** @type {Map<String, UserDefinedFunctionExpression>} */

  /** @type {Map<string, ModuleInfo>} */

  /**
   * Creates a new DocInfo object from Python raw text
   * @param {string} text The raw text of the Python file
   */
  function DocInfo(_text2) {
    _classCallCheck(this, DocInfo);

    _classPrivateMethodInitSpec(this, _shiftCurrentBlock);

    _classPrivateMethodInitSpec(this, _createNewFunctionBlock);

    _classPrivateMethodInitSpec(this, _createNewBranchBlock);

    _classPrivateMethodInitSpec(this, _prepareListComprehensions);

    _classPrivateMethodInitSpec(this, _processListComprehensions);

    _classPrivateMethodInitSpec(this, _updateBlock);

    _classPrivateMethodInitSpec(this, _getVariableNamesMatchingTypeNames);

    _classPrivateMethodInitSpec(this, _isImportedEntity);

    _classPrivateMethodInitSpec(this, _processUnconnectedFunctions);

    _classPrivateMethodInitSpec(this, _findAllFunctions);

    _classPrivateMethodInitSpec(this, _convertBuiltIns);

    _classPrivateMethodInitSpec(this, _findFunctionWithSameNameAsBuiltIns);

    _classPrivateMethodInitSpec(this, _checkVariablesWithSameNameAsUserDefinedFunctions);

    _classPrivateMethodInitSpec(this, _summariseUserDefinedFunctions);

    _classPrivateMethodInitSpec(this, _summariseVariables);

    _classPrivateMethodInitSpec(this, _findSymptoms);

    _classPrivateMethodInitSpec(this, _findAllScopeBlocks);

    _classPrivateMethodInitSpec(this, _processSource);

    _classPrivateFieldInitSpec(this, _text, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _statements, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _documentRoot, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _variables, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _userDefinedFunctions, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _modules, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _text, _text2);

    _classPrivateFieldSet(this, _documentRoot, new _block.ScopeBlock());

    _classPrivateFieldSet(this, _variables, new Map());

    _classPrivateFieldSet(this, _modules, new Map());

    _symptom.SymptomFinder.symptoms = [];

    _classPrivateMethodGet(this, _processSource, _processSource2).call(this, _text2);
  } //#region setup

  /**
   * Main processing method. Converts the raw source code to an AST
   * @param {String} text 
   */


  _createClass(DocInfo, [{
    key: "getUserDefinedFunctions",
    value: //#endregion

    /**
     * Gets all UserDefinedFunctions in the document.
     * @returns {Map<String, UserDefinedFunctionExpression>} A Map, where each key is the name of a function and each value is a UserDefinedFunction object
     */
    function getUserDefinedFunctions() {
      return _classPrivateFieldGet(this, _userDefinedFunctions);
    }
    /**
     * Gets all variables defined in the document.
     * @returns {Map<String, VariableInfo[]>}
     */

  }, {
    key: "getVariables",
    value: function getVariables() {
      return _classPrivateFieldGet(this, _variables);
    }
    /**
     * Gets all symptoms in the document.
     * @returns {Symptom[]} An array of all symptoms in the document.
     */

  }, {
    key: "getSymptoms",
    value: function getSymptoms() {
      return _symptom.SymptomFinder.symptoms;
    }
    /**
     * Gets all misconceptions in the document.
     * @returns {Map<MisconceptionType, Misconception>} A Map of all misconceptions found in the document
     */

  }, {
    key: "getMisconceptions",
    value: function getMisconceptions() {
      return (0, _misconception.identifyMisconceptions)(_symptom.SymptomFinder.symptoms, _classPrivateFieldGet(this, _variables));
    }
    /**
     * Gets the raw text in the document.
     * @returns {string} The raw text of the document.
     */

  }, {
    key: "getText",
    value: function getText() {
      return _classPrivateFieldGet(this, _text);
    }
    /**
     * Gets all blocks in the document
     * @returns {Block} The document root block, which contains references to all child blocks.
     */

  }, {
    key: "getBlocks",
    value: function getBlocks() {
      return _classPrivateFieldGet(this, _documentRoot);
    } //#endregion

  }]);

  return DocInfo;
}();

exports.DocInfo = DocInfo;

function _processSource2(text) {
  _classPrivateFieldSet(this, _statements, []);

  var currentBlock = _classPrivateFieldGet(this, _documentRoot);

  var textLines = text.split(/\r?\n/);

  if (textLines.length > 0) {
    var lastSourceLine = new _rawtextprocessing.SourceProcessor(textLines[0], 0, 0);

    _classPrivateFieldGet(this, _statements).push(_statement.Statement.createFromSource(lastSourceLine)); // Block processing


    if (!lastSourceLine.continuesOnNextLine()) {
      currentBlock = _classPrivateMethodGet(this, _updateBlock, _updateBlock2).call(this, _classPrivateFieldGet(this, _statements)[_classPrivateFieldGet(this, _statements).length - 1], currentBlock);
    }

    for (var i = 1; i < textLines.length; i++) {
      var varsWithTypeNames = currentBlock.isScopeBlock() ? _classPrivateMethodGet(this, _getVariableNamesMatchingTypeNames, _getVariableNamesMatchingTypeNames2).call(this, currentBlock) : _classPrivateMethodGet(this, _getVariableNamesMatchingTypeNames, _getVariableNamesMatchingTypeNames2).call(this, currentBlock.getScope());
      var moduleNames = Array.from(currentBlock.getScope().findAllModules().keys());
      var options = {
        varsWithTypeNames: varsWithTypeNames,
        moduleNames: moduleNames
      };
      var docStartIndex = lastSourceLine.getDocumentStartIndex() + lastSourceLine.getText().length + 1;

      if (lastSourceLine.continuesOnNextLine()) {
        options.groupCharCounts = lastSourceLine.getOpenGroupChars();
        options.lastLineExpressions = lastSourceLine.getExpressions();

        if (lastSourceLine.hasOpenComment()) {
          options.multilineCommentDelimiter = lastSourceLine.getCommentDelimiter();
        }

        if (lastSourceLine.hasOpenString()) {
          options.stringLiteralDelimiter = lastSourceLine.getStringLiteralDelimiter();
        }

        lastSourceLine = new _rawtextprocessing.SourceProcessor(textLines[i], i, docStartIndex, options);

        _classPrivateFieldGet(this, _statements)[_classPrivateFieldGet(this, _statements).length - 1].continueFromSource(lastSourceLine);
      } else if (lastSourceLine.followedBySeparateStatement()) {
        // start from text end index
        i--;
        var localStartFrom = lastSourceLine.getLineEndIndex() + 1;
        options.startFrom = localStartFrom;
        lastSourceLine = new _rawtextprocessing.SourceProcessor(textLines[i], i, lastSourceLine.getDocumentStartIndex(), options);

        _classPrivateFieldGet(this, _statements).push(_statement.Statement.createFromSource(lastSourceLine));
      } else {
        lastSourceLine = new _rawtextprocessing.SourceProcessor(textLines[i], i, docStartIndex, options);

        _classPrivateFieldGet(this, _statements).push(_statement.Statement.createFromSource(lastSourceLine));
      } // Block processing


      if (!lastSourceLine.continuesOnNextLine()) {
        currentBlock = _classPrivateMethodGet(this, _updateBlock, _updateBlock2).call(this, _classPrivateFieldGet(this, _statements)[_classPrivateFieldGet(this, _statements).length - 1], currentBlock);
      }
    }
  }

  _classPrivateMethodGet(this, _summariseVariables, _summariseVariables2).call(this);

  _classPrivateMethodGet(this, _summariseUserDefinedFunctions, _summariseUserDefinedFunctions2).call(this);

  _classPrivateMethodGet(this, _findSymptoms, _findSymptoms2).call(this);
}

function _findAllScopeBlocks2() {
  return [_classPrivateFieldGet(this, _documentRoot)].concat(_classPrivateFieldGet(this, _documentRoot).getChildBlocksOfKind(_enums.ExpressionEntity.FunctionDefinition)).concat(_classPrivateFieldGet(this, _documentRoot).getChildBlocksOfKind(_enums.ExpressionEntity.ClassDefinition)).concat(_classPrivateFieldGet(this, _documentRoot).getChildBlocksOfKind(_enums.ExpressionEntity.ListComprehension));
}

function _findSymptoms2() {
  var allScopeBlocks = _classPrivateMethodGet(this, _findAllScopeBlocks, _findAllScopeBlocks2).call(this);

  var _iterator = _createForOfIteratorHelper(allScopeBlocks),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var block = _step.value;

      var _iterator4 = _createForOfIteratorHelper(block.getStatements()),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var statement = _step4.value;

          var _iterator5 = _createForOfIteratorHelper(statement.getExpressions()),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var expression = _step5.value;
              expression.checkForSymptoms();
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          if (statement.isBlockStatement()) {
            statement.checkRules(statement);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _variables).values()),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var vInfoArr = _step2.value;

      var _iterator6 = _createForOfIteratorHelper(vInfoArr),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var vInfo = _step6.value;
          vInfo.checkRules(vInfo);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var _iterator3 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _userDefinedFunctions).values()),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var exp = _step3.value;
      var funcDefinition = exp.getParent();

      if (funcDefinition !== undefined && funcDefinition.is(_enums.ExpressionEntity.FunctionDefinitionStatement)) {
        var minArgs = funcDefinition.getParameters().length - funcDefinition.getOptionalParameterCount();
        var maxArgs = funcDefinition.getParameters().length;
        var funcCalls = Array.from(exp.getObservers()).filter(function (e) {
          return e.is(_enums.ExpressionEntity.UserDefinedFunctionCall);
        });

        var _iterator7 = _createForOfIteratorHelper(funcCalls),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var call = _step7.value;
            var numArgs = call.getArguments();

            if (numArgs.length < minArgs || numArgs.length > maxArgs) {
              _symptom.SymptomFinder.symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.WrongArgNumber, [call], 0, 0, {
                expectedMinArgs: minArgs,
                expectedMaxArgs: maxArgs,
                receivedArgs: numArgs.length
              }));
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  _classPrivateFieldGet(this, _documentRoot).checkRules(_classPrivateFieldGet(this, _documentRoot));
}

function _summariseVariables2() {
  var allVariables = new Map();

  var allScopeBlocks = _classPrivateMethodGet(this, _findAllScopeBlocks, _findAllScopeBlocks2).call(this);

  var _iterator8 = _createForOfIteratorHelper(allScopeBlocks),
      _step8;

  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var block = _step8.value;
      var scopeVars = block.getVariableMap();
      var userFunctions = block.getUserDefinedFunctions();

      var _iterator9 = _createForOfIteratorHelper(scopeVars),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _step9$value = _slicedToArray(_step9.value, 2),
              name = _step9$value[0],
              vInfo = _step9$value[1];

          var movedToParent = false;
          var varExp = vInfo.getUsages()[0].getVariable();

          if (varExp.getDataType() === _enums.DataType.NotParsed && !varExp.isAssignedOrChanged() && !varExp.isParameter()) {
            if (_rawtextprocessing.StatementProcessor.checkIfVariableExistsInParent(vInfo, block)) {
              movedToParent = true;
            } else if (userFunctions.has(name)) {
              varExp.setDataType(_enums.DataType.Function);
            } else {
              vInfo.getUsages()[0].getVariable().setDataType(_enums.DataType.Undefined);
              vInfo.checkAndAdjustUndefined();
            }
          }

          if (!allVariables.has(name)) {
            allVariables.set(name, []);
          }

          if (!movedToParent) {
            allVariables.get(name).push(vInfo);
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }

  _classPrivateFieldSet(this, _variables, allVariables);
}

function _summariseUserDefinedFunctions2() {
  _classPrivateFieldSet(this, _userDefinedFunctions, _classPrivateMethodGet(this, _findAllFunctions, _findAllFunctions2).call(this));

  var functions = _classPrivateFieldGet(this, _documentRoot).getChildBlocksOfKind(_enums.ExpressionEntity.FunctionDefinition);

  var _iterator10 = _createForOfIteratorHelper(functions),
      _step10;

  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var f = _step10.value;
      var lastLines = f.getLastExecutedStatements();
      var alwaysReturns = f.alwaysReturnsAValue();

      if (alwaysReturns) {
        lastLines = lastLines.filter(function (s) {
          return s.getFirstExpression().is(_enums.ExpressionEntity.ReturnStatement);
        });
      } // Add to function call expression


      if (_classPrivateFieldGet(this, _userDefinedFunctions).has(f.getFunctionName()) && _classPrivateFieldGet(this, _userDefinedFunctions).get(f.getFunctionName()).is(_enums.ExpressionEntity.FunctionName)) _classPrivateFieldGet(this, _userDefinedFunctions).get(f.getFunctionName()).addReturns(lastLines, !alwaysReturns);
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }

  _classPrivateMethodGet(this, _processUnconnectedFunctions, _processUnconnectedFunctions2).call(this);

  var overriddenBuiltIns = _classPrivateMethodGet(this, _findFunctionWithSameNameAsBuiltIns, _findFunctionWithSameNameAsBuiltIns2).call(this);

  _classPrivateMethodGet(this, _convertBuiltIns, _convertBuiltIns2).call(this, overriddenBuiltIns);

  _classPrivateMethodGet(this, _checkVariablesWithSameNameAsUserDefinedFunctions, _checkVariablesWithSameNameAsUserDefinedFunctions2).call(this);
}

function _checkVariablesWithSameNameAsUserDefinedFunctions2() {
  var _this = this;

  var funcNames = _classPrivateFieldGet(this, _userDefinedFunctions).keys();

  var matchingVarNames = Array.from(funcNames).filter(function (name) {
    return _classPrivateFieldGet(_this, _variables).has(name);
  });

  var _iterator11 = _createForOfIteratorHelper(matchingVarNames),
      _step11;

  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var name = _step11.value;

      var func = _classPrivateFieldGet(this, _userDefinedFunctions).get(name).getParent();

      if (func !== undefined) {
        var _iterator12 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _variables).get(name)),
            _step12;

        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var vInfo = _step12.value;

            if (vInfo.getUsages().length > 0) {
              var vExp = vInfo.getUsages()[0].getVariable();

              _symptom.SymptomFinder.symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.VariableWithSameNameAsFunction, [vExp], 0, 0, {
                funcType: _constants.USER_DEFINED_FUNCTION,
                numArgsExpected: func.getParameters().length - func.getOptionalParameterCount(),
                varIsParameter: vExp.isParameter()
              }));
            }
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      }
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }
}

function _findFunctionWithSameNameAsBuiltIns2() {
  var funcNames = _classPrivateFieldGet(this, _userDefinedFunctions).keys();

  var overrides = [];

  var _iterator13 = _createForOfIteratorHelper(funcNames),
      _step13;

  try {
    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
      var name = _step13.value;
      var knownEntity = (0, _utils.keywordLookup)(name);

      if (knownEntity.category === _enums.ExpressionCategory.BuiltInFunctions) {
        overrides.push(name);
      }
    }
  } catch (err) {
    _iterator13.e(err);
  } finally {
    _iterator13.f();
  }

  return overrides;
}

function _convertBuiltIns2(functionNames) {
  if (functionNames.length > 0) {
    var allScopeBlocks = _classPrivateMethodGet(this, _findAllScopeBlocks, _findAllScopeBlocks2).call(this); // find all calls, convert to userdefined function, change return type


    var _iterator14 = _createForOfIteratorHelper(allScopeBlocks),
        _step14;

    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var block = _step14.value;
        var statements = block.getStatements();

        var _iterator15 = _createForOfIteratorHelper(statements),
            _step15;

        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var s = _step15.value;
            var expressions = s.getExpressions();
            var funcCalls = expressions.flatMap(function (e) {
              return e.getExpressionsOfKind(_enums.ExpressionEntity.BuiltInFunctionCall);
            });

            var _iterator16 = _createForOfIteratorHelper(funcCalls),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var f = _step16.value;

                if (functionNames.includes(f.getFunctionName())) {
                  f.convertToUserDefinedFunction(_classPrivateFieldGet(this, _userDefinedFunctions).get(f.getFunctionName()));
                }
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }
  }
}

function _findAllFunctions2() {
  var funcMap = new Map();

  var allScopeBlocks = _classPrivateMethodGet(this, _findAllScopeBlocks, _findAllScopeBlocks2).call(this);

  var _iterator17 = _createForOfIteratorHelper(allScopeBlocks),
      _step17;

  try {
    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
      var block = _step17.value;
      var userFunctions = block.getUserDefinedFunctions();

      var _iterator18 = _createForOfIteratorHelper(userFunctions),
          _step18;

      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var _step18$value = _slicedToArray(_step18.value, 2),
              name = _step18$value[0],
              funcExp = _step18$value[1];

          funcMap.set(name, funcExp);
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }
    }
  } catch (err) {
    _iterator17.e(err);
  } finally {
    _iterator17.f();
  }

  return funcMap;
}

function _processUnconnectedFunctions2() {
  var allScopeBlocks = _classPrivateMethodGet(this, _findAllScopeBlocks, _findAllScopeBlocks2).call(this);

  var _iterator19 = _createForOfIteratorHelper(allScopeBlocks),
      _step19;

  try {
    for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
      var block = _step19.value;
      var unconnectedCalls = block.getUnconnectedFunctionCalls();

      var _iterator20 = _createForOfIteratorHelper(unconnectedCalls),
          _step20;

      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
          var func = _step20.value;

          var _iterator21 = _createForOfIteratorHelper(func[1]),
              _step21;

          try {
            for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
              var call = _step21.value;

              if (_classPrivateFieldGet(this, _userDefinedFunctions).has(func[0])) {
                var f = _classPrivateFieldGet(this, _userDefinedFunctions).get(func[0]);

                f.addObserver(call);
                call.setDataType(f.getReturnType());
              } else if (_classPrivateMethodGet(this, _isImportedEntity, _isImportedEntity2).call(this, func[0], block)) {
                call.convertToImportedFunction();
              } else {
                call.setDataType(_enums.DataType.Unknown);

                _symptom.SymptomFinder.symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnknownFunction, [call], 0, 0));
              }
            }
          } catch (err) {
            _iterator21.e(err);
          } finally {
            _iterator21.f();
          }
        }
      } catch (err) {
        _iterator20.e(err);
      } finally {
        _iterator20.f();
      }
    }
  } catch (err) {
    _iterator19.e(err);
  } finally {
    _iterator19.f();
  }
}

function _isImportedEntity2(funcName, scopeBlock) {
  var currentBlock = scopeBlock;

  while (currentBlock !== undefined) {
    if (currentBlock.getModuleMap().has(funcName) || Array.from(currentBlock.getModuleMap().values()).filter(function (modInfo) {
      return modInfo.hasDirectImport(funcName);
    }).length > 0) {
      return true;
    }

    currentBlock = currentBlock.getParentBlock() !== undefined ? currentBlock.getParentBlock().getScope() : undefined;
  }

  return false;
}

function _getVariableNamesMatchingTypeNames2(currentBlock) {
  var typeNames = new Set(["int", "float", "bool", "str", "list", "set", "dict"]);
  var matches = Array.from(currentBlock.getVariableMap().keys()).filter(function (name) {
    return typeNames.has(name);
  });
  var currentScope = currentBlock;

  while (currentScope.getBlockEntity() !== _enums.ExpressionEntity.DocumentDefinition) {
    currentScope = currentScope.getParentBlock().getScope();
    matches = matches.concat(Array.from(currentScope.getVariableMap().keys()).filter(function (name) {
      return typeNames.has(name);
    }));
  }

  return matches;
}

function _updateBlock2(lastStatement, currentBlock) {
  if (!lastStatement.isBlank()) {
    var firstExpression = lastStatement.getFirstExpression();
    var statementIndent = lastStatement.getIndentation();
    var startLine = firstExpression.getStartLineNumber();
    var blockStatementToUpdate = undefined; // Need a way to get variables in list comprehensions (expressoinnode replaced with placeholder)

    var listComprehensions = _classPrivateMethodGet(this, _prepareListComprehensions, _prepareListComprehensions2).call(this, lastStatement);

    if (!currentBlock.isScopeBlock()) {
      var scopeBlock = currentBlock.getScope(); // Ask scope block for the statement to update

      blockStatementToUpdate = scopeBlock.getStatementToUpdate(statementIndent, startLine);
    }

    if (firstExpression.is(_enums.ExpressionEntity.FunctionDefinitionStatement)) {
      currentBlock = _classPrivateMethodGet(this, _createNewFunctionBlock, _createNewFunctionBlock2).call(this, currentBlock, lastStatement, statementIndent);
    } else {
      if (firstExpression.is(_enums.ExpressionCategory.BlockDefinitionStatement) && !firstExpression.is(_enums.ExpressionEntity.TernaryStatement)) {
        currentBlock = _classPrivateMethodGet(this, _createNewBranchBlock, _createNewBranchBlock2).call(this, currentBlock, lastStatement, statementIndent, blockStatementToUpdate);
      } else if (blockStatementToUpdate !== undefined) {
        currentBlock = _classPrivateMethodGet(this, _shiftCurrentBlock, _shiftCurrentBlock2).call(this, statementIndent, currentBlock, startLine);
        blockStatementToUpdate.addStatement(lastStatement, currentBlock);
      } else {
        currentBlock = _classPrivateMethodGet(this, _shiftCurrentBlock, _shiftCurrentBlock2).call(this, statementIndent, currentBlock, startLine);
        currentBlock.addStatement(lastStatement);
      }
    }

    if (listComprehensions.length > 0) {
      _classPrivateMethodGet(this, _processListComprehensions, _processListComprehensions2).call(this, listComprehensions, currentBlock);
    }
  }

  return currentBlock;
}

function _processListComprehensions2(listComprehensions, currentBlock) {
  var _iterator22 = _createForOfIteratorHelper(listComprehensions),
      _step22;

  try {
    for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
      var comp = _step22.value;
      var compBlock = new _block.ListComprehensionBlock(currentBlock, comp);
      currentBlock.addChildBlock(compBlock);
    }
  } catch (err) {
    _iterator22.e(err);
  } finally {
    _iterator22.f();
  }
}

function _prepareListComprehensions2(statement) {
  var expressions = statement.getExpressions();
  var comprehensions = [];

  var _iterator23 = _createForOfIteratorHelper(expressions),
      _step23;

  try {
    for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
      var e = _step23.value;
      var foundComps = e.getExpressionsOfKind(_enums.ExpressionEntity.ListComprehension);

      var _iterator24 = _createForOfIteratorHelper(foundComps),
          _step24;

      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var found = _step24.value;
          comprehensions.push(found.copyAndConvertToPlaceholder());
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }
    }
  } catch (err) {
    _iterator23.e(err);
  } finally {
    _iterator23.f();
  }

  return comprehensions;
}

function _createNewBranchBlock2(currentBlock, lastStatement, statementIndent, blockStatementToUpdate) {
  var blockStatement = new _statement.BlockStatement(lastStatement, currentBlock.getScope().getId());
  var branchBlock = new _block.BranchBlock(currentBlock, blockStatement);

  var block = _classPrivateMethodGet(this, _shiftCurrentBlock, _shiftCurrentBlock2).call(this, statementIndent, currentBlock, lastStatement.getFirstLineNumber());

  var isConditional = blockStatement.getFirstExpression().isOneOf([_enums.ExpressionEntity.ElifDefinitionStatement, _enums.ExpressionEntity.ElseDefinitionStatement]);
  var isExcept = blockStatement.getFirstExpression().is(_enums.ExpressionEntity.ExceptDefinitionStatement);

  if (blockStatement.isBlockStatement() && (isConditional || isExcept)) {
    var childStatements = blockStatementToUpdate ? blockStatementToUpdate.getStatements() : block.getStatements();
    var prevStatement = childStatements[childStatements.length - 1];
    var candidates = isConditional ? [_enums.ExpressionEntity.IfDefinitionStatement, _enums.ExpressionEntity.ElifDefinitionStatement, _enums.ExpressionEntity.ElseDefinitionStatement] : [_enums.ExpressionEntity.TryDefinitionStatement];

    if (prevStatement !== undefined && prevStatement.isBlockStatement() && prevStatement.getFirstExpression().isOneOf(candidates)) {
      var blockChildren = block.getChildBlocks();
      var lastBlock = blockChildren[blockChildren.length - 1];
      var lastBlockEntity = lastBlock.getBlockEntity();

      if (isConditional && (lastBlockEntity === _enums.ExpressionEntity.IfDefinition || lastBlockEntity === _enums.ExpressionEntity.ElifDefinition) || isExcept && lastBlockEntity === _enums.ExpressionEntity.TryDefinition) {
        var lastBlockSiblings = lastBlock.getSiblingConditionalBranches();

        var _iterator25 = _createForOfIteratorHelper(lastBlockSiblings),
            _step25;

        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var existing = _step25.value;
            branchBlock.addSibling(existing);
            existing.addSibling(branchBlock);
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }

        lastBlock.addSibling(branchBlock);
        branchBlock.addSibling(lastBlock);
      }
    }
  }

  block.addChildBlock(branchBlock);
  blockStatementToUpdate ? blockStatementToUpdate.addStatement(blockStatement, branchBlock) : block.addStatement(blockStatement);
  return branchBlock;
}

function _createNewFunctionBlock2(currentBlock, lastStatement, statementIndent) {
  currentBlock = _classPrivateMethodGet(this, _shiftCurrentBlock, _shiftCurrentBlock2).call(this, statementIndent, currentBlock, lastStatement.getFirstLineNumber());
  var functionBlock = new _block.FunctionBlock(currentBlock, lastStatement);
  currentBlock.addChildBlock(functionBlock); //block = functionBlock;
  //functionBlock.addStatement(lastStatement);

  return functionBlock;
}

function _shiftCurrentBlock2(statementIndent, currentBlock, statementStartLine) {
  var currentIndent = currentBlock.getIndentation();
  var currentStatements = currentBlock.getStatements(); // edge case where body is on same line as definition of block

  if (currentStatements.length > 0 && currentStatements[currentStatements.length - 1].getLastLineNumber() === statementStartLine) {
    return currentBlock;
  }

  while (currentBlock.getBlockEntity() !== _enums.ExpressionEntity.DocumentDefinition && statementIndent <= currentIndent) {
    var parent = currentBlock.getParentBlock();
    currentBlock = parent !== undefined ? parent : _classPrivateFieldGet(this, _documentRoot);
    currentIndent = currentBlock.getIndentation();
  }

  return currentBlock;
}
},{"../problem-finder/misconception.js":11,"../problem-finder/symptom.js":12,"../utils/constants.js":13,"../utils/utils.js":14,"./ast.js":1,"./block.js":2,"./enums.js":4,"./identifiers.js":5,"./rawtextprocessing.js":8,"./statement.js":9}],4:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SymptomType = exports.MisconceptionType = exports.ExpressionEntity = exports.ExpressionCategory = exports.DataType = exports.Character = void 0;

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A class defining an enum. Not intended to be instantiated
 */
var Enum = /*#__PURE__*/_createClass(function Enum(name) {
  _classCallCheck(this, Enum);

  this.name = name;
});
/**
 * Enum representing known character categories with particular use or 
 * meaning in Python.
 * @augments Enum
 */


var Character = /*#__PURE__*/function (_Enum) {
  _inherits(Character, _Enum);

  var _super = _createSuper(Character);

  function Character() {
    _classCallCheck(this, Character);

    return _super.apply(this, arguments);
  }

  _createClass(Character, [{
    key: "isQuote",
    value:
    /**
     * Checks if this is a single or double quote.
     * @returns {Boolean} True if this Character is a quote, false otherwise.
     */
    function isQuote() {
      return this === Character.SingleQuote || this === Character.DoubleQuote;
    }
  }], [{
    key: "getCategory",
    value:
    /**
     * (Static) An uppercase or lowercase letter.
     */

    /**
     * (Static) A single digit, 0-9
     */

    /**
     * (Static) A decimal point (or period / fullstop / dot)
     */

    /**
     * (Static) An underscore, _
     */

    /**
     * (Static) A space
     */

    /**
     * (Static) A tab character, \t
     */

    /**
     * (Static) A newline character, \n or \r
     */

    /**
     * (Static) An opening parenthesis, (
     */

    /**
     * (Static) A closing parenthesis, )
     */

    /**
     * (Static) An openint curly brace, {
     */

    /**
     * (Static) A closing curly brace, }
     */

    /**
     * (Static) An opening square bracket, [
     */

    /**
     * (Static) A closing square bracket, ]
     */

    /** (Static) A comma. */

    /** (Static) A colon, : */

    /** (Static) A semicolon, ; */

    /** (Static) A plus sign, + */

    /** (Static) A minus sign, - */

    /** (Static) An asterisk, * */

    /** (Static) The modulo operator, % */

    /** (Static) An equals sign, = */

    /** (Static) The less than symbol, < */

    /** (Static) The greater than symbol, > */

    /** (Static) An exclamation mark, ! */

    /** (Static) A forward slash, / */

    /** (Static) A back slash, \ */

    /** (Static) The hash symbol, # */

    /** (Static) A single quote mark, ' */

    /** (Static) A double quote mark, " */

    /** (Static) Any other character not described. */

    /**
     * Returns the Character representation of an ascii code.
     * @param {Number} code The ascii code of a character
     * @returns {Character} The instance of Character that represents the ascii code.
     */
    function getCategory(code) {
      if (code >= 65 && code <= 90 || code >= 97 && code <= 122) {
        return Character.Letter;
      } else if (code >= 48 && code <= 57) {
        return Character.Digit;
      } else if (code === 46) {
        return Character.Decimal;
      } else if (code === 95) {
        return Character.Underscore;
      } else if (code === 32) {
        return Character.Space;
      } else if (code === 9) {
        return Character.Tab;
      } else if (code === 10 || code === 13) {
        return Character.NewLine;
      } else if (code === 40) {
        return Character.OpenParentheses;
      } else if (code === 41) {
        return Character.CloseParentheses;
      } else if (code === 123) {
        return Character.OpenCurlyBrace;
      } else if (code === 125) {
        return Character.CloseCurlyBrace;
      } else if (code === 91) {
        return Character.OpenSquareBracket;
      } else if (code === 93) {
        return Character.CloseSquareBracket;
      } else if (code === 44) {
        return Character.Comma;
      } else if (code === 58) {
        return Character.Colon;
      } else if (code === 59) {
        return Character.Semicolon;
      } else if (code === 43) {
        return Character.Plus;
      } else if (code === 45) {
        return Character.Minus;
      } else if (code === 42) {
        return Character.Asterisk;
      } else if (code === 37) {
        return Character.Modulo;
      } else if (code === 61) {
        return Character.Equals;
      } else if (code === 60) {
        return Character.LessThan;
      } else if (code === 62) {
        return Character.GreaterThan;
      } else if (code === 33) {
        return Character.Exclamation;
      } else if (code === 47) {
        return Character.ForwardSlash;
      } else if (code === 92) {
        return Character.BackSlash;
      } else if (code === 35) {
        return Character.Hash;
      } else if (code === 39) {
        return Character.SingleQuote;
      } else if (code === 34) {
        return Character.DoubleQuote;
      }

      return Character.Unknown;
    }
  }]);

  return Character;
}(Enum);
/**
 * Enum representing categories of expressions.
 * 
 * In orginal extension, named ExpressionCategory
 */


exports.Character = Character;

_defineProperty(Character, "Letter", new Character("letter"));

_defineProperty(Character, "Digit", new Character("digit"));

_defineProperty(Character, "Decimal", new Character("decimal"));

_defineProperty(Character, "Underscore", new Character("underscore"));

_defineProperty(Character, "Space", new Character("space"));

_defineProperty(Character, "Tab", new Character("tab"));

_defineProperty(Character, "NewLine", new Character("newline"));

_defineProperty(Character, "OpenParentheses", new Character("openParentheses"));

_defineProperty(Character, "CloseParentheses", new Character("closeParentheses"));

_defineProperty(Character, "OpenCurlyBrace", new Character("openCurlyBrace"));

_defineProperty(Character, "CloseCurlyBrace", new Character("closeCurlyBrace"));

_defineProperty(Character, "OpenSquareBracket", new Character("openSquareBracket"));

_defineProperty(Character, "CloseSquareBracket", new Character("closeSquareBracket"));

_defineProperty(Character, "Comma", new Character("comma"));

_defineProperty(Character, "Colon", new Character("colon"));

_defineProperty(Character, "Semicolon", new Character("semicolon"));

_defineProperty(Character, "Plus", new Character("plus"));

_defineProperty(Character, "Minus", new Character("minus"));

_defineProperty(Character, "Asterisk", new Character("asterisk"));

_defineProperty(Character, "Modulo", new Character("modulo"));

_defineProperty(Character, "Equals", new Character("equals"));

_defineProperty(Character, "LessThan", new Character("lessThan"));

_defineProperty(Character, "GreaterThan", new Character("greaterThan"));

_defineProperty(Character, "Exclamation", new Character("exclamation"));

_defineProperty(Character, "ForwardSlash", new Character("forwardSlash"));

_defineProperty(Character, "BackSlash", new Character("backSlash"));

_defineProperty(Character, "Hash", new Character("hash"));

_defineProperty(Character, "SingleQuote", new Character("singleQuote"));

_defineProperty(Character, "DoubleQuote", new Character("doubleQuote"));

_defineProperty(Character, "Unknown", new Character("unknown"));

var ExpressionCategory = /*#__PURE__*/function (_Enum2) {
  _inherits(ExpressionCategory, _Enum2);

  var _super2 = _createSuper(ExpressionCategory);

  function ExpressionCategory() {
    _classCallCheck(this, ExpressionCategory);

    return _super2.apply(this, arguments);
  }

  return _createClass(ExpressionCategory);
}(Enum);
/**
 * Enum representing defined Python expressions e.g. keywords and operators.
 */


exports.ExpressionCategory = ExpressionCategory;

_defineProperty(ExpressionCategory, "BlockDefinitions", new ExpressionCategory("BlockDefinitions"));

_defineProperty(ExpressionCategory, "LogicalOperators", new ExpressionCategory("LogicalOperators"));

_defineProperty(ExpressionCategory, "Types", new ExpressionCategory("Types"));

_defineProperty(ExpressionCategory, "MathsOperators", new ExpressionCategory("MathsOperators"));

_defineProperty(ExpressionCategory, "ComparisonOperators", new ExpressionCategory("ComparisonOperators"));

_defineProperty(ExpressionCategory, "OtherKeywords", new ExpressionCategory("OtherKeywords"));

_defineProperty(ExpressionCategory, "BuiltInFunctions", new ExpressionCategory("BuiltInFunctions"));

_defineProperty(ExpressionCategory, "BuiltInMethods", new ExpressionCategory("BuiltInMethods"));

_defineProperty(ExpressionCategory, "OtherMethods", new ExpressionCategory("OtherMethods"));

_defineProperty(ExpressionCategory, "Identifiers", new ExpressionCategory("Identifiers"));

_defineProperty(ExpressionCategory, "MagicMethods", new ExpressionCategory("MagicMethods"));

_defineProperty(ExpressionCategory, "SpecialVariables", new ExpressionCategory("SpecialVariables"));

_defineProperty(ExpressionCategory, "Properties", new ExpressionCategory("Properties"));

_defineProperty(ExpressionCategory, "BuiltInExceptions", new ExpressionCategory("BuiltInExceptions"));

_defineProperty(ExpressionCategory, "Literals", new ExpressionCategory("Literals"));

_defineProperty(ExpressionCategory, "CompoundTypes", new ExpressionCategory("CompoundTypes"));

_defineProperty(ExpressionCategory, "Other", new ExpressionCategory("Other"));

_defineProperty(ExpressionCategory, "Comment", new ExpressionCategory("Comment"));

_defineProperty(ExpressionCategory, "Unknown", new ExpressionCategory("Unknown"));

_defineProperty(ExpressionCategory, "BuiltInModules", new ExpressionCategory("BuiltInModules"));

_defineProperty(ExpressionCategory, "ModuleFunctions", new ExpressionCategory("ModuleFunctions"));

_defineProperty(ExpressionCategory, "ModuleProperties", new ExpressionCategory("ModuleProperties"));

_defineProperty(ExpressionCategory, "ImportedEntities", new ExpressionCategory("ImportedEntities"));

_defineProperty(ExpressionCategory, "TypeHint", new ExpressionCategory("TypeHint"));

_defineProperty(ExpressionCategory, "FunctionCall", new ExpressionCategory("FunctionCall"));

_defineProperty(ExpressionCategory, "MethodCall", new ExpressionCategory("MethodCall"));

_defineProperty(ExpressionCategory, "ExceptionCall", new ExpressionCategory("ExceptionCall"));

_defineProperty(ExpressionCategory, "BlockDefinitionStatement", new ExpressionCategory("BlockDefinitionStatement"));

_defineProperty(ExpressionCategory, "Group", new ExpressionCategory("Group"));

_defineProperty(ExpressionCategory, "MultipartValue", new ExpressionCategory("MultipartValue"));

_defineProperty(ExpressionCategory, "Assignment", new ExpressionCategory("Assigment"));

_defineProperty(ExpressionCategory, "KeywordStatement", new ExpressionCategory("KeywordStatement"));

var ExpressionEntity = /*#__PURE__*/function (_Enum3) {
  _inherits(ExpressionEntity, _Enum3);

  var _super3 = _createSuper(ExpressionEntity);

  function ExpressionEntity() {
    _classCallCheck(this, ExpressionEntity);

    return _super3.apply(this, arguments);
  }

  return _createClass(ExpressionEntity);
}(Enum);
/**
 * Enum representing all DataTypes
 */


exports.ExpressionEntity = ExpressionEntity;

_defineProperty(ExpressionEntity, "ClassDefinition", new ExpressionEntity("class"));

_defineProperty(ExpressionEntity, "FunctionDefinition", new ExpressionEntity("def"));

_defineProperty(ExpressionEntity, "ElifDefinition", new ExpressionEntity("elif"));

_defineProperty(ExpressionEntity, "ElseDefinition", new ExpressionEntity("else"));

_defineProperty(ExpressionEntity, "ExceptDefinition", new ExpressionEntity("except"));

_defineProperty(ExpressionEntity, "FinallyDefinition", new ExpressionEntity("finally"));

_defineProperty(ExpressionEntity, "ForDefinition", new ExpressionEntity("for"));

_defineProperty(ExpressionEntity, "IfDefinition", new ExpressionEntity("if"));

_defineProperty(ExpressionEntity, "LambdaDefinition", new ExpressionEntity("lambda"));

_defineProperty(ExpressionEntity, "TryDefinition", new ExpressionEntity("try"));

_defineProperty(ExpressionEntity, "WhileDefinition", new ExpressionEntity("while"));

_defineProperty(ExpressionEntity, "DocumentDefinition", new ExpressionEntity("document"));

_defineProperty(ExpressionEntity, "ListComprehension", new ExpressionEntity("listComprehension"));

_defineProperty(ExpressionEntity, "AndOperator", new ExpressionEntity("and"));

_defineProperty(ExpressionEntity, "NotOperator", new ExpressionEntity("not"));

_defineProperty(ExpressionEntity, "OrOperator", new ExpressionEntity("or"));

_defineProperty(ExpressionEntity, "FalseType", new ExpressionEntity("False"));

_defineProperty(ExpressionEntity, "NoneType", new ExpressionEntity("None"));

_defineProperty(ExpressionEntity, "TrueType", new ExpressionEntity("True"));

_defineProperty(ExpressionEntity, "AsKeyword", new ExpressionEntity("AsKeyword"));

_defineProperty(ExpressionEntity, "AssertKeyword", new ExpressionEntity("AssertKeyword"));

_defineProperty(ExpressionEntity, "BreakKeyword", new ExpressionEntity("BreakKeyword"));

_defineProperty(ExpressionEntity, "ContinueKeyword", new ExpressionEntity("continue"));

_defineProperty(ExpressionEntity, "DelKeyword", new ExpressionEntity("del"));

_defineProperty(ExpressionEntity, "FromKeyword", new ExpressionEntity("from"));

_defineProperty(ExpressionEntity, "ImportKeyword", new ExpressionEntity("import"));

_defineProperty(ExpressionEntity, "InKeyword", new ExpressionEntity("in"));

_defineProperty(ExpressionEntity, "IsKeyword", new ExpressionEntity("is"));

_defineProperty(ExpressionEntity, "NotInKeyword", new ExpressionEntity("not in"));

_defineProperty(ExpressionEntity, "IsNotKeyword", new ExpressionEntity("is not"));

_defineProperty(ExpressionEntity, "PassKeyword", new ExpressionEntity("pass"));

_defineProperty(ExpressionEntity, "RaiseKeyword", new ExpressionEntity("raise"));

_defineProperty(ExpressionEntity, "ReturnKeyword", new ExpressionEntity("return"));

_defineProperty(ExpressionEntity, "WithKeyword", new ExpressionEntity("with"));

_defineProperty(ExpressionEntity, "YieldKeyword", new ExpressionEntity("yield"));

_defineProperty(ExpressionEntity, "GlobalKeyword", new ExpressionEntity("global"));

_defineProperty(ExpressionEntity, "AddOperator", new ExpressionEntity("+"));

_defineProperty(ExpressionEntity, "SubtractOperator", new ExpressionEntity("-"));

_defineProperty(ExpressionEntity, "MultiplyOperator", new ExpressionEntity("*"));

_defineProperty(ExpressionEntity, "DivideOperator", new ExpressionEntity("/"));

_defineProperty(ExpressionEntity, "ModulusOperator", new ExpressionEntity("%"));

_defineProperty(ExpressionEntity, "ExponentOperator", new ExpressionEntity("**"));

_defineProperty(ExpressionEntity, "IntDivideOperator", new ExpressionEntity("//"));

_defineProperty(ExpressionEntity, "AssignmentOperator", new ExpressionEntity("="));

_defineProperty(ExpressionEntity, "IncrementOperator", new ExpressionEntity("+="));

_defineProperty(ExpressionEntity, "DecrementOperator", new ExpressionEntity("-="));

_defineProperty(ExpressionEntity, "MultiplyAssignOperator", new ExpressionEntity("*="));

_defineProperty(ExpressionEntity, "DivideAssignOperator", new ExpressionEntity("/="));

_defineProperty(ExpressionEntity, "RemainderAssignOperator", new ExpressionEntity("%="));

_defineProperty(ExpressionEntity, "IntDivideAssignOperator", new ExpressionEntity("//="));

_defineProperty(ExpressionEntity, "ExponentAssignOperator", new ExpressionEntity("**="));

_defineProperty(ExpressionEntity, "EqualOperator", new ExpressionEntity("=="));

_defineProperty(ExpressionEntity, "NotEqualOperator", new ExpressionEntity("!="));

_defineProperty(ExpressionEntity, "GreaterThanOperator", new ExpressionEntity(">"));

_defineProperty(ExpressionEntity, "LessThanOperator", new ExpressionEntity("<"));

_defineProperty(ExpressionEntity, "GreaterThanOrEqualOperator", new ExpressionEntity(">="));

_defineProperty(ExpressionEntity, "LessThanOrEqualOperator", new ExpressionEntity("<="));

_defineProperty(ExpressionEntity, "TypeHintReturn", new ExpressionEntity("->"));

_defineProperty(ExpressionEntity, "AbsFunction", new ExpressionEntity("abs"));

_defineProperty(ExpressionEntity, "AllFunction", new ExpressionEntity("all"));

_defineProperty(ExpressionEntity, "AnyFunction", new ExpressionEntity("any"));

_defineProperty(ExpressionEntity, "AsciiFunction", new ExpressionEntity("ascii"));

_defineProperty(ExpressionEntity, "AssertFunction", new ExpressionEntity("assert"));

_defineProperty(ExpressionEntity, "BinFunction", new ExpressionEntity("bin"));

_defineProperty(ExpressionEntity, "BoolFunction", new ExpressionEntity("bool"));

_defineProperty(ExpressionEntity, "CallableFunction", new ExpressionEntity("callable"));

_defineProperty(ExpressionEntity, "ChrFunction", new ExpressionEntity("chr"));

_defineProperty(ExpressionEntity, "DictFunction", new ExpressionEntity("dict"));

_defineProperty(ExpressionEntity, "DivModFunction", new ExpressionEntity("divmod"));

_defineProperty(ExpressionEntity, "EnumerateFunction", new ExpressionEntity("enumerate"));

_defineProperty(ExpressionEntity, "EvalFunction", new ExpressionEntity("eval"));

_defineProperty(ExpressionEntity, "ExecFunction", new ExpressionEntity("exec"));

_defineProperty(ExpressionEntity, "ExitFunction", new ExpressionEntity("exit"));

_defineProperty(ExpressionEntity, "FilterFunction", new ExpressionEntity("filter"));

_defineProperty(ExpressionEntity, "FloatFunction", new ExpressionEntity("float"));

_defineProperty(ExpressionEntity, "FormatFunction", new ExpressionEntity("format"));

_defineProperty(ExpressionEntity, "GetAttrFunction", new ExpressionEntity("getattr"));

_defineProperty(ExpressionEntity, "GlobalsFunction", new ExpressionEntity("globals"));

_defineProperty(ExpressionEntity, "HasAttrFunction", new ExpressionEntity("hasattr"));

_defineProperty(ExpressionEntity, "InputFunction", new ExpressionEntity("input"));

_defineProperty(ExpressionEntity, "IntFunction", new ExpressionEntity("int"));

_defineProperty(ExpressionEntity, "IsInstanceFunction", new ExpressionEntity("isinstance"));

_defineProperty(ExpressionEntity, "LenFunction", new ExpressionEntity("len"));

_defineProperty(ExpressionEntity, "ListFunction", new ExpressionEntity("list"));

_defineProperty(ExpressionEntity, "MapFunction", new ExpressionEntity("map"));

_defineProperty(ExpressionEntity, "MaxFunction", new ExpressionEntity("max"));

_defineProperty(ExpressionEntity, "MinFunction", new ExpressionEntity("min"));

_defineProperty(ExpressionEntity, "OpenFunction", new ExpressionEntity("open"));

_defineProperty(ExpressionEntity, "OrdFunction", new ExpressionEntity("ord"));

_defineProperty(ExpressionEntity, "PowFunction", new ExpressionEntity("pow"));

_defineProperty(ExpressionEntity, "PrintFunction", new ExpressionEntity("print"));

_defineProperty(ExpressionEntity, "QuitFunction", new ExpressionEntity("quit"));

_defineProperty(ExpressionEntity, "RangeFunction", new ExpressionEntity("range"));

_defineProperty(ExpressionEntity, "ReversedFunction", new ExpressionEntity("reversed"));

_defineProperty(ExpressionEntity, "RoundFunction", new ExpressionEntity("round"));

_defineProperty(ExpressionEntity, "SetFunction", new ExpressionEntity("set"));

_defineProperty(ExpressionEntity, "SortedFunction", new ExpressionEntity("sorted"));

_defineProperty(ExpressionEntity, "StrFunction", new ExpressionEntity("str"));

_defineProperty(ExpressionEntity, "SumFunction", new ExpressionEntity("sum"));

_defineProperty(ExpressionEntity, "TupleFunction", new ExpressionEntity("tuple"));

_defineProperty(ExpressionEntity, "TypeFunction", new ExpressionEntity("type"));

_defineProperty(ExpressionEntity, "ZipFunction", new ExpressionEntity("zip"));

_defineProperty(ExpressionEntity, "Capitalize", new ExpressionEntity("capitalize"));

_defineProperty(ExpressionEntity, "Casefold", new ExpressionEntity("casefold"));

_defineProperty(ExpressionEntity, "Center", new ExpressionEntity("center"));

_defineProperty(ExpressionEntity, "Count", new ExpressionEntity("count"));

_defineProperty(ExpressionEntity, "Encode", new ExpressionEntity("encode"));

_defineProperty(ExpressionEntity, "EndsWith", new ExpressionEntity("endswith"));

_defineProperty(ExpressionEntity, "ExpandTabs", new ExpressionEntity("expandtabs"));

_defineProperty(ExpressionEntity, "Find", new ExpressionEntity("find"));

_defineProperty(ExpressionEntity, "Format", new ExpressionEntity("format"));

_defineProperty(ExpressionEntity, "FormatMap", new ExpressionEntity("format_map"));

_defineProperty(ExpressionEntity, "Index", new ExpressionEntity("index"));

_defineProperty(ExpressionEntity, "IsAlnum", new ExpressionEntity("isalnum"));

_defineProperty(ExpressionEntity, "IsAlpha", new ExpressionEntity("isalpha"));

_defineProperty(ExpressionEntity, "IsAscii", new ExpressionEntity("isascii"));

_defineProperty(ExpressionEntity, "IsDecimal", new ExpressionEntity("isdecimal"));

_defineProperty(ExpressionEntity, "IsDigit", new ExpressionEntity("isdigit"));

_defineProperty(ExpressionEntity, "IsIdentifier", new ExpressionEntity("isidentifier"));

_defineProperty(ExpressionEntity, "IsLower", new ExpressionEntity("islower"));

_defineProperty(ExpressionEntity, "IsNumeric", new ExpressionEntity("isnumeric"));

_defineProperty(ExpressionEntity, "IsPrintable", new ExpressionEntity("isprintable"));

_defineProperty(ExpressionEntity, "IsSpace", new ExpressionEntity("isspace"));

_defineProperty(ExpressionEntity, "IsTitle", new ExpressionEntity("istitle"));

_defineProperty(ExpressionEntity, "IsUpper", new ExpressionEntity("isupper"));

_defineProperty(ExpressionEntity, "Join", new ExpressionEntity("join"));

_defineProperty(ExpressionEntity, "LJust", new ExpressionEntity("ljust"));

_defineProperty(ExpressionEntity, "Lower", new ExpressionEntity("lower"));

_defineProperty(ExpressionEntity, "LStrip", new ExpressionEntity("lstrip"));

_defineProperty(ExpressionEntity, "MakeTrans", new ExpressionEntity("maketrans"));

_defineProperty(ExpressionEntity, "Partition", new ExpressionEntity("partition"));

_defineProperty(ExpressionEntity, "Replace", new ExpressionEntity("replace"));

_defineProperty(ExpressionEntity, "RFind", new ExpressionEntity("rfind"));

_defineProperty(ExpressionEntity, "RIndex", new ExpressionEntity("rindex"));

_defineProperty(ExpressionEntity, "RJust", new ExpressionEntity("rjust"));

_defineProperty(ExpressionEntity, "RPartition", new ExpressionEntity("rpartition"));

_defineProperty(ExpressionEntity, "RSplit", new ExpressionEntity("rsplit"));

_defineProperty(ExpressionEntity, "RStrip", new ExpressionEntity("rstrip"));

_defineProperty(ExpressionEntity, "Split", new ExpressionEntity("split"));

_defineProperty(ExpressionEntity, "SplitLines", new ExpressionEntity("splitlines"));

_defineProperty(ExpressionEntity, "StartsWith", new ExpressionEntity("startswith"));

_defineProperty(ExpressionEntity, "Strip", new ExpressionEntity("strip"));

_defineProperty(ExpressionEntity, "SwapCase", new ExpressionEntity("swapcase"));

_defineProperty(ExpressionEntity, "Title", new ExpressionEntity("title"));

_defineProperty(ExpressionEntity, "Translate", new ExpressionEntity("translate"));

_defineProperty(ExpressionEntity, "Upper", new ExpressionEntity("upper"));

_defineProperty(ExpressionEntity, "ZFill", new ExpressionEntity("zfill"));

_defineProperty(ExpressionEntity, "Append", new ExpressionEntity("append"));

_defineProperty(ExpressionEntity, "Clear", new ExpressionEntity("clear"));

_defineProperty(ExpressionEntity, "Copy", new ExpressionEntity("copy"));

_defineProperty(ExpressionEntity, "Extend", new ExpressionEntity("extend"));

_defineProperty(ExpressionEntity, "Insert", new ExpressionEntity("insert"));

_defineProperty(ExpressionEntity, "Pop", new ExpressionEntity("pop"));

_defineProperty(ExpressionEntity, "Remove", new ExpressionEntity("remove"));

_defineProperty(ExpressionEntity, "Reverse", new ExpressionEntity("reverse"));

_defineProperty(ExpressionEntity, "Sort", new ExpressionEntity("sort"));

_defineProperty(ExpressionEntity, "FromKeys", new ExpressionEntity("fromkeys"));

_defineProperty(ExpressionEntity, "Get", new ExpressionEntity("get"));

_defineProperty(ExpressionEntity, "Items", new ExpressionEntity("items"));

_defineProperty(ExpressionEntity, "Keys", new ExpressionEntity("keys"));

_defineProperty(ExpressionEntity, "PopItem", new ExpressionEntity("popitem"));

_defineProperty(ExpressionEntity, "SetDefault", new ExpressionEntity("setdefault"));

_defineProperty(ExpressionEntity, "Update", new ExpressionEntity("update"));

_defineProperty(ExpressionEntity, "Values", new ExpressionEntity("values"));

_defineProperty(ExpressionEntity, "Add", new ExpressionEntity("add"));

_defineProperty(ExpressionEntity, "Difference", new ExpressionEntity("difference"));

_defineProperty(ExpressionEntity, "DifferenceUpdate", new ExpressionEntity("difference_update"));

_defineProperty(ExpressionEntity, "Discard", new ExpressionEntity("discard"));

_defineProperty(ExpressionEntity, "Intersection", new ExpressionEntity("intersection"));

_defineProperty(ExpressionEntity, "IntersectionUpdate", new ExpressionEntity("intersection_update"));

_defineProperty(ExpressionEntity, "IsDisjoint", new ExpressionEntity("isdisjoint"));

_defineProperty(ExpressionEntity, "IsSubset", new ExpressionEntity("issubset"));

_defineProperty(ExpressionEntity, "IsSuperset", new ExpressionEntity("issuperset"));

_defineProperty(ExpressionEntity, "SymmetricDifference", new ExpressionEntity("symmetric_difference"));

_defineProperty(ExpressionEntity, "SymmetricDifferenceUpdate", new ExpressionEntity("symmetric_difference_update"));

_defineProperty(ExpressionEntity, "Union", new ExpressionEntity("union"));

_defineProperty(ExpressionEntity, "Close", new ExpressionEntity("close"));

_defineProperty(ExpressionEntity, "Detach", new ExpressionEntity("detach"));

_defineProperty(ExpressionEntity, "FileNo", new ExpressionEntity("fileno"));

_defineProperty(ExpressionEntity, "Flush", new ExpressionEntity("flush"));

_defineProperty(ExpressionEntity, "IsAtty", new ExpressionEntity("isatty"));

_defineProperty(ExpressionEntity, "Read", new ExpressionEntity("read"));

_defineProperty(ExpressionEntity, "Readable", new ExpressionEntity("readable"));

_defineProperty(ExpressionEntity, "ReadLine", new ExpressionEntity("readline"));

_defineProperty(ExpressionEntity, "ReadLines", new ExpressionEntity("readlines"));

_defineProperty(ExpressionEntity, "Seek", new ExpressionEntity("seek"));

_defineProperty(ExpressionEntity, "Seekable", new ExpressionEntity("seekable"));

_defineProperty(ExpressionEntity, "Tell", new ExpressionEntity("tell"));

_defineProperty(ExpressionEntity, "Truncate", new ExpressionEntity("truncate"));

_defineProperty(ExpressionEntity, "Writable", new ExpressionEntity("writable"));

_defineProperty(ExpressionEntity, "Write", new ExpressionEntity("write"));

_defineProperty(ExpressionEntity, "WriteLines", new ExpressionEntity("writelines"));

_defineProperty(ExpressionEntity, "Main", new ExpressionEntity("__main__"));

_defineProperty(ExpressionEntity, "Cmp", new ExpressionEntity("__cmp__"));

_defineProperty(ExpressionEntity, "Eq", new ExpressionEntity("__eq__"));

_defineProperty(ExpressionEntity, "Ne", new ExpressionEntity("__ne__"));

_defineProperty(ExpressionEntity, "Lt", new ExpressionEntity("__lt__"));

_defineProperty(ExpressionEntity, "Gt", new ExpressionEntity("__gt__"));

_defineProperty(ExpressionEntity, "Le", new ExpressionEntity("__le__"));

_defineProperty(ExpressionEntity, "Ge", new ExpressionEntity("__ge__"));

_defineProperty(ExpressionEntity, "Str", new ExpressionEntity("__str__"));

_defineProperty(ExpressionEntity, "SpecialContains", new ExpressionEntity("__contains__"));

_defineProperty(ExpressionEntity, "SpecialLen", new ExpressionEntity("__len__"));

_defineProperty(ExpressionEntity, "Name", new ExpressionEntity("__name__"));

_defineProperty(ExpressionEntity, "Self", new ExpressionEntity("__self__"));

_defineProperty(ExpressionEntity, "Doc", new ExpressionEntity("__doc__"));

_defineProperty(ExpressionEntity, "GetAttrVariable", new ExpressionEntity("__getattr__"));

_defineProperty(ExpressionEntity, "SetAttrVariable", new ExpressionEntity("__setattr__"));

_defineProperty(ExpressionEntity, "ClassVariable", new ExpressionEntity("__class__"));

_defineProperty(ExpressionEntity, "R", new ExpressionEntity("r"));

_defineProperty(ExpressionEntity, "F", new ExpressionEntity("f"));

_defineProperty(ExpressionEntity, "Sep", new ExpressionEntity("sep"));

_defineProperty(ExpressionEntity, "End", new ExpressionEntity("end"));

_defineProperty(ExpressionEntity, "Dot", new ExpressionEntity("."));

_defineProperty(ExpressionEntity, "OpenParenthesis", new ExpressionEntity("("));

_defineProperty(ExpressionEntity, "CloseParenthesis", new ExpressionEntity(")"));

_defineProperty(ExpressionEntity, "OpenSquareBracket", new ExpressionEntity("["));

_defineProperty(ExpressionEntity, "CloseSquareBracket", new ExpressionEntity("]"));

_defineProperty(ExpressionEntity, "OpenBrace", new ExpressionEntity("{"));

_defineProperty(ExpressionEntity, "CloseBrace", new ExpressionEntity("}"));

_defineProperty(ExpressionEntity, "Comma", new ExpressionEntity(","));

_defineProperty(ExpressionEntity, "Colon", new ExpressionEntity(":"));

_defineProperty(ExpressionEntity, "SingleQuote", new ExpressionEntity("'"));

_defineProperty(ExpressionEntity, "DoubleQuote", new ExpressionEntity("\""));

_defineProperty(ExpressionEntity, "MultiLineCommentDelimiter", new ExpressionEntity("'''"));

_defineProperty(ExpressionEntity, "ImportAll", new ExpressionEntity("import all (*)"));

_defineProperty(ExpressionEntity, "NamedImport", new ExpressionEntity("named import"));

_defineProperty(ExpressionEntity, "ExceptionName", new ExpressionEntity("exceptionName"));

_defineProperty(ExpressionEntity, "VariableName", new ExpressionEntity("variableName"));

_defineProperty(ExpressionEntity, "FunctionName", new ExpressionEntity("functionName"));

_defineProperty(ExpressionEntity, "MethodName", new ExpressionEntity("methodName"));

_defineProperty(ExpressionEntity, "ClassName", new ExpressionEntity("className"));

_defineProperty(ExpressionEntity, "PropertyName", new ExpressionEntity("propertyName"));

_defineProperty(ExpressionEntity, "ModuleName", new ExpressionEntity("moduleName"));

_defineProperty(ExpressionEntity, "IntLiteral", new ExpressionEntity("intLiteral"));

_defineProperty(ExpressionEntity, "StringLiteral", new ExpressionEntity("stringLiteral"));

_defineProperty(ExpressionEntity, "ContinuationLine", new ExpressionEntity("continuationLine"));

_defineProperty(ExpressionEntity, "Separator", new ExpressionEntity("separator"));

_defineProperty(ExpressionEntity, "FloatLiteral", new ExpressionEntity("floatLiteral"));

_defineProperty(ExpressionEntity, "SingleLineComment", new ExpressionEntity("singleLineComment"));

_defineProperty(ExpressionEntity, "MultiLineComment", new ExpressionEntity("multilineComment"));

_defineProperty(ExpressionEntity, "TypeHint", new ExpressionEntity("typeHint"));

_defineProperty(ExpressionEntity, "StrType", new ExpressionEntity("strType"));

_defineProperty(ExpressionEntity, "IntType", new ExpressionEntity("intType"));

_defineProperty(ExpressionEntity, "FloatType", new ExpressionEntity("floatType"));

_defineProperty(ExpressionEntity, "BoolType", new ExpressionEntity("boolType"));

_defineProperty(ExpressionEntity, "ListType", new ExpressionEntity("listType"));

_defineProperty(ExpressionEntity, "SetType", new ExpressionEntity("setType"));

_defineProperty(ExpressionEntity, "DictType", new ExpressionEntity("dictType"));

_defineProperty(ExpressionEntity, "TupleType", new ExpressionEntity("tupleType"));

_defineProperty(ExpressionEntity, "ListDefinition", new ExpressionEntity("listDefinition"));

_defineProperty(ExpressionEntity, "TupleDefinition", new ExpressionEntity("tupleDefinition"));

_defineProperty(ExpressionEntity, "SetDefinition", new ExpressionEntity("setDefinition"));

_defineProperty(ExpressionEntity, "DictDefinition", new ExpressionEntity("dictDefinition"));

_defineProperty(ExpressionEntity, "IndexKey", new ExpressionEntity("indexKey"));

_defineProperty(ExpressionEntity, "Slice", new ExpressionEntity("slice"));

_defineProperty(ExpressionEntity, "Unknown", new ExpressionEntity("unknown"));

_defineProperty(ExpressionEntity, "RandomModule", new ExpressionEntity("randomModule"));

_defineProperty(ExpressionEntity, "MathModule", new ExpressionEntity("mathModule"));

_defineProperty(ExpressionEntity, "StringModule", new ExpressionEntity("stringModule"));

_defineProperty(ExpressionEntity, "ReModule", new ExpressionEntity("reModule"));

_defineProperty(ExpressionEntity, "Pattern", new ExpressionEntity("Pattern"));

_defineProperty(ExpressionEntity, "Match", new ExpressionEntity("Match"));

_defineProperty(ExpressionEntity, "Sys", new ExpressionEntity("sys"));

_defineProperty(ExpressionEntity, "Seed", new ExpressionEntity("seed"));

_defineProperty(ExpressionEntity, "GetState", new ExpressionEntity("getstate"));

_defineProperty(ExpressionEntity, "SetState", new ExpressionEntity("setstate"));

_defineProperty(ExpressionEntity, "GetRandBits", new ExpressionEntity("getrandbits"));

_defineProperty(ExpressionEntity, "RandRange", new ExpressionEntity("randrange"));

_defineProperty(ExpressionEntity, "RandInt", new ExpressionEntity("randint"));

_defineProperty(ExpressionEntity, "Choice", new ExpressionEntity("choice"));

_defineProperty(ExpressionEntity, "Choices", new ExpressionEntity("choices"));

_defineProperty(ExpressionEntity, "Shuffle", new ExpressionEntity("shuffle"));

_defineProperty(ExpressionEntity, "Sample", new ExpressionEntity("sample"));

_defineProperty(ExpressionEntity, "RandomMethod", new ExpressionEntity("random"));

_defineProperty(ExpressionEntity, "Uniform", new ExpressionEntity("uniform"));

_defineProperty(ExpressionEntity, "Triangular", new ExpressionEntity("triangular"));

_defineProperty(ExpressionEntity, "BetaVariate", new ExpressionEntity("betavariate"));

_defineProperty(ExpressionEntity, "ExpoVariate", new ExpressionEntity("expovariate"));

_defineProperty(ExpressionEntity, "GammaVariate", new ExpressionEntity("gammavariate"));

_defineProperty(ExpressionEntity, "Gauss", new ExpressionEntity("gauss"));

_defineProperty(ExpressionEntity, "LogNormVariate", new ExpressionEntity("lognormvariate"));

_defineProperty(ExpressionEntity, "NormalVariate", new ExpressionEntity("normalvariate"));

_defineProperty(ExpressionEntity, "VonMisesVariate", new ExpressionEntity("vonmisesvariate"));

_defineProperty(ExpressionEntity, "ParetoVariate", new ExpressionEntity("paretovariate"));

_defineProperty(ExpressionEntity, "WeibullVariate", new ExpressionEntity("weibullvariate"));

_defineProperty(ExpressionEntity, "Acos", new ExpressionEntity("acos"));

_defineProperty(ExpressionEntity, "Acosh", new ExpressionEntity("acosh"));

_defineProperty(ExpressionEntity, "Asin", new ExpressionEntity("asin"));

_defineProperty(ExpressionEntity, "Asinh", new ExpressionEntity("asinh"));

_defineProperty(ExpressionEntity, "Atan", new ExpressionEntity("atan"));

_defineProperty(ExpressionEntity, "Atan2", new ExpressionEntity("atan2"));

_defineProperty(ExpressionEntity, "Atanh", new ExpressionEntity("atanh"));

_defineProperty(ExpressionEntity, "Ceil", new ExpressionEntity("ceil"));

_defineProperty(ExpressionEntity, "Comb", new ExpressionEntity("comb"));

_defineProperty(ExpressionEntity, "CopySign", new ExpressionEntity("copysign"));

_defineProperty(ExpressionEntity, "Cos", new ExpressionEntity("cos"));

_defineProperty(ExpressionEntity, "Cosh", new ExpressionEntity("cosh"));

_defineProperty(ExpressionEntity, "Degrees", new ExpressionEntity("degrees"));

_defineProperty(ExpressionEntity, "Dist", new ExpressionEntity("dist"));

_defineProperty(ExpressionEntity, "Erf", new ExpressionEntity("erf"));

_defineProperty(ExpressionEntity, "Erfc", new ExpressionEntity("erfc"));

_defineProperty(ExpressionEntity, "Exp", new ExpressionEntity("exp"));

_defineProperty(ExpressionEntity, "Expm1", new ExpressionEntity("expm1"));

_defineProperty(ExpressionEntity, "Fabs", new ExpressionEntity("fabs"));

_defineProperty(ExpressionEntity, "Factorial", new ExpressionEntity("factorial"));

_defineProperty(ExpressionEntity, "Floor", new ExpressionEntity("floor"));

_defineProperty(ExpressionEntity, "Fmod", new ExpressionEntity("fmod"));

_defineProperty(ExpressionEntity, "Frexp", new ExpressionEntity("frexp"));

_defineProperty(ExpressionEntity, "Fsum", new ExpressionEntity("fsum"));

_defineProperty(ExpressionEntity, "Gamma", new ExpressionEntity("gamma"));

_defineProperty(ExpressionEntity, "Gcd", new ExpressionEntity("gcd"));

_defineProperty(ExpressionEntity, "Hypot", new ExpressionEntity("hypot"));

_defineProperty(ExpressionEntity, "IsClose", new ExpressionEntity("isclose"));

_defineProperty(ExpressionEntity, "IsFinite", new ExpressionEntity("isfinite"));

_defineProperty(ExpressionEntity, "IsInf", new ExpressionEntity("isinf"));

_defineProperty(ExpressionEntity, "IsNaN", new ExpressionEntity("isnan"));

_defineProperty(ExpressionEntity, "ISqrt", new ExpressionEntity("isqrt"));

_defineProperty(ExpressionEntity, "Ldexp", new ExpressionEntity("ldexp"));

_defineProperty(ExpressionEntity, "LGamma", new ExpressionEntity("lgamma"));

_defineProperty(ExpressionEntity, "Log", new ExpressionEntity("log"));

_defineProperty(ExpressionEntity, "Log10", new ExpressionEntity("log10"));

_defineProperty(ExpressionEntity, "Log1P", new ExpressionEntity("log1p"));

_defineProperty(ExpressionEntity, "Log2", new ExpressionEntity("log2"));

_defineProperty(ExpressionEntity, "Perm", new ExpressionEntity("perm"));

_defineProperty(ExpressionEntity, "Pow", new ExpressionEntity("pow"));

_defineProperty(ExpressionEntity, "Prod", new ExpressionEntity("prod"));

_defineProperty(ExpressionEntity, "Radians", new ExpressionEntity("radians"));

_defineProperty(ExpressionEntity, "Remainder", new ExpressionEntity("remainder"));

_defineProperty(ExpressionEntity, "Sin", new ExpressionEntity("sin"));

_defineProperty(ExpressionEntity, "Sinh", new ExpressionEntity("sinh"));

_defineProperty(ExpressionEntity, "Sqrt", new ExpressionEntity("sqrt"));

_defineProperty(ExpressionEntity, "Tan", new ExpressionEntity("tan"));

_defineProperty(ExpressionEntity, "Tanh", new ExpressionEntity("tanh"));

_defineProperty(ExpressionEntity, "Trunc", new ExpressionEntity("trunc"));

_defineProperty(ExpressionEntity, "E", new ExpressionEntity("e"));

_defineProperty(ExpressionEntity, "Inf", new ExpressionEntity("inf"));

_defineProperty(ExpressionEntity, "Nan", new ExpressionEntity("nan"));

_defineProperty(ExpressionEntity, "Pi", new ExpressionEntity("pi"));

_defineProperty(ExpressionEntity, "Tau", new ExpressionEntity("tau"));

_defineProperty(ExpressionEntity, "AsciiLetters", new ExpressionEntity("ascii_letters"));

_defineProperty(ExpressionEntity, "AsciiLowercase", new ExpressionEntity("ascii_lowercase"));

_defineProperty(ExpressionEntity, "AsciiUppercase", new ExpressionEntity("ascii_uppercase"));

_defineProperty(ExpressionEntity, "Digits", new ExpressionEntity("digits"));

_defineProperty(ExpressionEntity, "Hexdigits", new ExpressionEntity("hexdigits"));

_defineProperty(ExpressionEntity, "Octdigits", new ExpressionEntity("octdigits"));

_defineProperty(ExpressionEntity, "Punctuation", new ExpressionEntity("punctuation"));

_defineProperty(ExpressionEntity, "Printable", new ExpressionEntity("printable"));

_defineProperty(ExpressionEntity, "Whitespace", new ExpressionEntity("whitespace"));

_defineProperty(ExpressionEntity, "Formatter", new ExpressionEntity("Formatter"));

_defineProperty(ExpressionEntity, "Template", new ExpressionEntity("Template"));

_defineProperty(ExpressionEntity, "Capwords", new ExpressionEntity("capwords"));

_defineProperty(ExpressionEntity, "ReA", new ExpressionEntity("A"));

_defineProperty(ExpressionEntity, "ReASCII", new ExpressionEntity("ASCII"));

_defineProperty(ExpressionEntity, "ReDebug", new ExpressionEntity("DEBUG"));

_defineProperty(ExpressionEntity, "ReI", new ExpressionEntity("I"));

_defineProperty(ExpressionEntity, "ReIGNORECASE", new ExpressionEntity("IGNORECASE"));

_defineProperty(ExpressionEntity, "ReL", new ExpressionEntity("L"));

_defineProperty(ExpressionEntity, "ReLOCALE", new ExpressionEntity("LOCALE"));

_defineProperty(ExpressionEntity, "ReM", new ExpressionEntity("M"));

_defineProperty(ExpressionEntity, "ReMULTILINE", new ExpressionEntity("MULTILINE"));

_defineProperty(ExpressionEntity, "ReS", new ExpressionEntity("S"));

_defineProperty(ExpressionEntity, "ReDOTALL", new ExpressionEntity("DOTALL"));

_defineProperty(ExpressionEntity, "ReX", new ExpressionEntity("X"));

_defineProperty(ExpressionEntity, "ReVERBOSE", new ExpressionEntity("VERBOSE"));

_defineProperty(ExpressionEntity, "Compile", new ExpressionEntity("compile"));

_defineProperty(ExpressionEntity, "Search", new ExpressionEntity("search"));

_defineProperty(ExpressionEntity, "Match", new ExpressionEntity("match"));

_defineProperty(ExpressionEntity, "FullMatch", new ExpressionEntity("fullmatch"));

_defineProperty(ExpressionEntity, "FindAll", new ExpressionEntity("findall"));

_defineProperty(ExpressionEntity, "FindIter", new ExpressionEntity("finditer"));

_defineProperty(ExpressionEntity, "Sub", new ExpressionEntity("sub"));

_defineProperty(ExpressionEntity, "SubN", new ExpressionEntity("subn"));

_defineProperty(ExpressionEntity, "Escape", new ExpressionEntity("escape"));

_defineProperty(ExpressionEntity, "Purge", new ExpressionEntity("purge"));

_defineProperty(ExpressionEntity, "AddAuditHook", new ExpressionEntity("addaudithook"));

_defineProperty(ExpressionEntity, "Audit", new ExpressionEntity("audit"));

_defineProperty(ExpressionEntity, "CallTracing", new ExpressionEntity("call_tracing"));

_defineProperty(ExpressionEntity, "ClearTypeCache", new ExpressionEntity("_clear_type_cache"));

_defineProperty(ExpressionEntity, "CurrentFrames", new ExpressionEntity("_current_frames"));

_defineProperty(ExpressionEntity, "CurrentExceptions", new ExpressionEntity("_current_exceptions"));

_defineProperty(ExpressionEntity, "BreakpointHook", new ExpressionEntity("breakpointhook"));

_defineProperty(ExpressionEntity, "DebugMallocStats", new ExpressionEntity("_debugmallocstats"));

_defineProperty(ExpressionEntity, "DisplayHook", new ExpressionEntity("displayhook"));

_defineProperty(ExpressionEntity, "ExceptHook", new ExpressionEntity("excepthook"));

_defineProperty(ExpressionEntity, "ExcInfo", new ExpressionEntity("exc_info"));

_defineProperty(ExpressionEntity, "SysExit", new ExpressionEntity("exit"));

_defineProperty(ExpressionEntity, "GetAllocatedBlocks", new ExpressionEntity("getallocatedblocks"));

_defineProperty(ExpressionEntity, "GetAndroidApiLevel", new ExpressionEntity("getandroidapilevel"));

_defineProperty(ExpressionEntity, "GetDefaultEncoding", new ExpressionEntity("getdefaultencoding"));

_defineProperty(ExpressionEntity, "GetDLOpenFlags", new ExpressionEntity("getdlopenflags"));

_defineProperty(ExpressionEntity, "GetFileSystemEncoding", new ExpressionEntity("getfilesystemencoding"));

_defineProperty(ExpressionEntity, "GetFileSystemEncodeErrors", new ExpressionEntity("getfilesystemencodeerrors"));

_defineProperty(ExpressionEntity, "GetRefCount", new ExpressionEntity("getrefcount"));

_defineProperty(ExpressionEntity, "GetRecursionLimit", new ExpressionEntity("getrecursionlimit"));

_defineProperty(ExpressionEntity, "GetSizeOf", new ExpressionEntity("getsizeof"));

_defineProperty(ExpressionEntity, "GetSwitchInterval", new ExpressionEntity("getswitchinterval"));

_defineProperty(ExpressionEntity, "GetFrame", new ExpressionEntity("_getframe"));

_defineProperty(ExpressionEntity, "GetProfile", new ExpressionEntity("getprofile"));

_defineProperty(ExpressionEntity, "GetTrace", new ExpressionEntity("gettrace"));

_defineProperty(ExpressionEntity, "GetWindowsVersion", new ExpressionEntity("getwindowsversion"));

_defineProperty(ExpressionEntity, "GetAsyncGenHooks", new ExpressionEntity("get_asyncgen_hooks"));

_defineProperty(ExpressionEntity, "GetCoroutineOriginTrackingDepth", new ExpressionEntity("get_coroutine_origin_tracking_depth"));

_defineProperty(ExpressionEntity, "Intern", new ExpressionEntity("intern"));

_defineProperty(ExpressionEntity, "IsFinalizing", new ExpressionEntity("is_finalizing"));

_defineProperty(ExpressionEntity, "SetDLOpenFlags", new ExpressionEntity("setdlopenflags"));

_defineProperty(ExpressionEntity, "SetProfile", new ExpressionEntity("setprofile"));

_defineProperty(ExpressionEntity, "SetRecursionLimit", new ExpressionEntity("setrecursionlimit"));

_defineProperty(ExpressionEntity, "SetSwitchInterval", new ExpressionEntity("setswitchinterval"));

_defineProperty(ExpressionEntity, "SetTrace", new ExpressionEntity("settrace"));

_defineProperty(ExpressionEntity, "SetAsyncgenHooks", new ExpressionEntity("set_asyncgen_hooks"));

_defineProperty(ExpressionEntity, "EnableLegacyWindowsFSEncoding", new ExpressionEntity("_enablelegacywindowsfsencoding"));

_defineProperty(ExpressionEntity, "ABIFlags", new ExpressionEntity("abiflags"));

_defineProperty(ExpressionEntity, "Argv", new ExpressionEntity("argv"));

_defineProperty(ExpressionEntity, "BaseExecPrefix", new ExpressionEntity("base_exec_prefix"));

_defineProperty(ExpressionEntity, "BasePrefix", new ExpressionEntity("base_prefix"));

_defineProperty(ExpressionEntity, "ByteOrder", new ExpressionEntity("byte_order"));

_defineProperty(ExpressionEntity, "BuiltInModuleNames", new ExpressionEntity("built_in_module_names"));

_defineProperty(ExpressionEntity, "Copyright", new ExpressionEntity("copyright"));

_defineProperty(ExpressionEntity, "DllHandle", new ExpressionEntity("dllhandle"));

_defineProperty(ExpressionEntity, "DontWriteBytecode", new ExpressionEntity("dont_write_bytecode"));

_defineProperty(ExpressionEntity, "PycachePrefix", new ExpressionEntity("pycache_prefix"));

_defineProperty(ExpressionEntity, "ExecPrefix", new ExpressionEntity("exec_prefix"));

_defineProperty(ExpressionEntity, "Executable", new ExpressionEntity("executable"));

_defineProperty(ExpressionEntity, "Flags", new ExpressionEntity("flags"));

_defineProperty(ExpressionEntity, "FloatInfo", new ExpressionEntity("float_info"));

_defineProperty(ExpressionEntity, "FloatReprStyle", new ExpressionEntity("float_repr_style"));

_defineProperty(ExpressionEntity, "HashInfo", new ExpressionEntity("hash_info"));

_defineProperty(ExpressionEntity, "HexVersion", new ExpressionEntity("hexversion"));

_defineProperty(ExpressionEntity, "Implementation", new ExpressionEntity("implementation"));

_defineProperty(ExpressionEntity, "IntInfo", new ExpressionEntity("int_info"));

_defineProperty(ExpressionEntity, "LastType", new ExpressionEntity("last_type"));

_defineProperty(ExpressionEntity, "LastValue", new ExpressionEntity("last_value"));

_defineProperty(ExpressionEntity, "LastTraceback", new ExpressionEntity("last_traceback"));

_defineProperty(ExpressionEntity, "MaxSize", new ExpressionEntity("maxsize"));

_defineProperty(ExpressionEntity, "MaxUnicode", new ExpressionEntity("maxunicode"));

_defineProperty(ExpressionEntity, "MetaPath", new ExpressionEntity("meta_path"));

_defineProperty(ExpressionEntity, "Modules", new ExpressionEntity("modules"));

_defineProperty(ExpressionEntity, "OrigArgv", new ExpressionEntity("orig_argv"));

_defineProperty(ExpressionEntity, "Path", new ExpressionEntity("path"));

_defineProperty(ExpressionEntity, "PathHooks", new ExpressionEntity("path_hooks"));

_defineProperty(ExpressionEntity, "PathImporterCache", new ExpressionEntity("path_importer_cache"));

_defineProperty(ExpressionEntity, "Platform", new ExpressionEntity("platform"));

_defineProperty(ExpressionEntity, "Prefix", new ExpressionEntity("prefix"));

_defineProperty(ExpressionEntity, "PS1", new ExpressionEntity("ps1"));

_defineProperty(ExpressionEntity, "PS2", new ExpressionEntity("ps2"));

_defineProperty(ExpressionEntity, "StdIn", new ExpressionEntity("stdin"));

_defineProperty(ExpressionEntity, "StdOut", new ExpressionEntity("stdout"));

_defineProperty(ExpressionEntity, "StdErr", new ExpressionEntity("stderr"));

_defineProperty(ExpressionEntity, "StdLibModuleNames", new ExpressionEntity("stdlib_module_names"));

_defineProperty(ExpressionEntity, "ThreadInfo", new ExpressionEntity("thread_info"));

_defineProperty(ExpressionEntity, "TracebackLimit", new ExpressionEntity("tracebacklimit"));

_defineProperty(ExpressionEntity, "Version", new ExpressionEntity("version"));

_defineProperty(ExpressionEntity, "ApiVersion", new ExpressionEntity("api_version"));

_defineProperty(ExpressionEntity, "VersionInfo", new ExpressionEntity("version_info"));

_defineProperty(ExpressionEntity, "WarnOptions", new ExpressionEntity("warnoptions"));

_defineProperty(ExpressionEntity, "WinVer", new ExpressionEntity("winver"));

_defineProperty(ExpressionEntity, "XOptions", new ExpressionEntity("_xoptions"));

_defineProperty(ExpressionEntity, "UserDefinedFunctionCall", new ExpressionEntity("UserDefinedFunctionCall"));

_defineProperty(ExpressionEntity, "BuiltInFunctionCall", new ExpressionEntity("BuiltInFunctionCall"));

_defineProperty(ExpressionEntity, "UserDefinedMethodCall", new ExpressionEntity("UserDefinedMethodCall"));

_defineProperty(ExpressionEntity, "BuiltInMethodCall", new ExpressionEntity("BuiltInMethodCall"));

_defineProperty(ExpressionEntity, "ExceptionCall", new ExpressionEntity("ExceptionCall"));

_defineProperty(ExpressionEntity, "FunctionDefinitionStatement", new ExpressionEntity("FunctionDefinitionStatement"));

_defineProperty(ExpressionEntity, "ForDefinitionStatement", new ExpressionEntity("ForDefinitionStatement"));

_defineProperty(ExpressionEntity, "ExceptDefinitionStatement", new ExpressionEntity("ExceptDefinitionStatement"));

_defineProperty(ExpressionEntity, "ClassDefinitionStatement", new ExpressionEntity("ClassDefinitionStatement"));

_defineProperty(ExpressionEntity, "LambdaDefinitionStatement", new ExpressionEntity("LambdaDefinitionStatement"));

_defineProperty(ExpressionEntity, "IfDefinitionStatement", new ExpressionEntity("IfDefinitionStatement"));

_defineProperty(ExpressionEntity, "ElifDefinitionStatement", new ExpressionEntity("ElifDefinitionStatement"));

_defineProperty(ExpressionEntity, "ElseDefinitionStatement", new ExpressionEntity("ElseDefinitionStatement"));

_defineProperty(ExpressionEntity, "WhileDefinitionStatement", new ExpressionEntity("WhileDefinitionStatement"));

_defineProperty(ExpressionEntity, "TryDefinitionStatement", new ExpressionEntity("TryDefinitionStatement"));

_defineProperty(ExpressionEntity, "FinallyDefinitionStatement", new ExpressionEntity("FinallyDefinitionStatement"));

_defineProperty(ExpressionEntity, "TernaryStatement", new ExpressionEntity("TernaryStatement"));

_defineProperty(ExpressionEntity, "WithDefinitionStatement", new ExpressionEntity("WithStatment"));

_defineProperty(ExpressionEntity, "GroupStatement", new ExpressionEntity("GroupStatement"));

_defineProperty(ExpressionEntity, "FString", new ExpressionEntity("FString"));

_defineProperty(ExpressionEntity, "SubscriptedExpression", new ExpressionEntity("SubscriptedExpression"));

_defineProperty(ExpressionEntity, "CalculatedExpression", new ExpressionEntity("CalculatedExpression"));

_defineProperty(ExpressionEntity, "ComparisonExpression", new ExpressionEntity("ComparisonExpression"));

_defineProperty(ExpressionEntity, "BooleanExpression", new ExpressionEntity("BooleanExpression"));

_defineProperty(ExpressionEntity, "IteratorExpression", new ExpressionEntity("IteratorExpression"));

_defineProperty(ExpressionEntity, "CombinedStringLiteral", new ExpressionEntity("CombinedStringLiteral"));

_defineProperty(ExpressionEntity, "ReturnStatement", new ExpressionEntity("ReturnStatement"));

_defineProperty(ExpressionEntity, "PropertyCallExpression", new ExpressionEntity("PropertyCallExpression"));

_defineProperty(ExpressionEntity, "AssignmentStatement", new ExpressionEntity("AssignmentStatement"));

_defineProperty(ExpressionEntity, "ChangeStatement", new ExpressionEntity("ChangeStatement"));

_defineProperty(ExpressionEntity, "ImportStatement", new ExpressionEntity("ImportStatement"));

_defineProperty(ExpressionEntity, "AssertStatement", new ExpressionEntity("AssertStatement"));

_defineProperty(ExpressionEntity, "GlobalStatement", new ExpressionEntity("GlobalStatement"));

_defineProperty(ExpressionEntity, "ThrowStatement", new ExpressionEntity("ThrowStatement"));

var DataType = /*#__PURE__*/function (_Enum4) {
  _inherits(DataType, _Enum4);

  var _super4 = _createSuper(DataType);

  function DataType() {
    _classCallCheck(this, DataType);

    return _super4.apply(this, arguments);
  }

  return _createClass(DataType);
}(Enum);
/**
 * An enum providing information about each misconception--a unique name and a description.
 * @extends Enum
 */


exports.DataType = DataType;

_defineProperty(DataType, "Int", new DataType("int"));

_defineProperty(DataType, "Float", new DataType("float"));

_defineProperty(DataType, "Number", new DataType("number (int or float)"));

_defineProperty(DataType, "String", new DataType("string"));

_defineProperty(DataType, "Bool", new DataType("bool"));

_defineProperty(DataType, "List", new DataType("list"));

_defineProperty(DataType, "Set", new DataType("set"));

_defineProperty(DataType, "Tuple", new DataType("tuple"));

_defineProperty(DataType, "Dict", new DataType("dictionary"));

_defineProperty(DataType, "File", new DataType("file"));

_defineProperty(DataType, "Function", new DataType("function"));

_defineProperty(DataType, "Class", new DataType("class"));

_defineProperty(DataType, "None", new DataType("none"));

_defineProperty(DataType, "Exception", new DataType("exception"));

_defineProperty(DataType, "Unknown", new DataType("unknown data type"));

_defineProperty(DataType, "NA", new DataType("N/A"));

_defineProperty(DataType, "NotParsed", new DataType("not parsed"));

_defineProperty(DataType, "Invalid", new DataType("invalid"));

_defineProperty(DataType, "Undefined", new DataType("undefined"));

_defineProperty(DataType, "Random", new DataType("random"));

_defineProperty(DataType, "Math", new DataType("math"));

_defineProperty(DataType, "StringModule", new DataType("string module"));

_defineProperty(DataType, "Re", new DataType("re"));

_defineProperty(DataType, "Pattern", new DataType("Pattern"));

_defineProperty(DataType, "Match", new DataType("Match"));

_defineProperty(DataType, "Sys", new DataType("sys"));

var MisconceptionType = /*#__PURE__*/function (_Enum5) {
  _inherits(MisconceptionType, _Enum5);

  var _super5 = _createSuper(MisconceptionType);

  // Progmiscon
  // progmiscon
  // Done
  // Progmiscon
  // Done
  // TODO: Progmiscon ConditionalIsSequence (symptom needed)
  // Progmiscon
  // Done
  // Gama PB.5
  // Done - only in one file
  // Gama et al PA.3, PB.1, PB.3
  // Gama et al PD.1
  // Progmiscon
  // Done
  // Progmiscon
  // Done
  // Progmiscon
  //Gama et al PA.1 - Paramater value set by external source
  // Progmiscon
  // Needs testing (no occurrences in dataset)
  // Done
  // Progmiscon 
  // Progmiscon
  // Done
  // Gama et al PG.4
  // Not implemented

  /*static FunctionCallMustBeAssigned = new MisconceptionType("FunctionMustBeAssigned", 
                                                            "Calls to functions that do not return are assigned to variables. There may be a misunderstanding of the syntax of calling functions or a belief that all functions return something.");
  static VariablesNeedParentheses = new MisconceptionType("VariablesNeedParentheses", 
                                                          "An unknown function is called that has a name matching a known variable. There may be a misunderstanding of the syntax of using variables.");
  static ExitAfterLoopFinished = new MisconceptionType("ExitAfterLoopFinished", 
                                                       "A return statement in a loop causes the loop to consistently exit on the first iteration. Typically due to a missing if statement, there may be an expectation that the loop implicitly knows when to return and when to continue.");
  TODO:
  static NumericInputAssignedNumericType = new MisconceptionType("NumericInputAssignedNumericType", 
                                                                 "A TypeError occurs when a mathematical operation is performed on a String returned by input(). There may be an assumption that input strings containing only numbers are automatically converted to numeric types.");
  static ResultOfAllExpressionsIsSaved = new MisconceptionType("ResultOfAllExpressionsIsSaved", 
                                                               "A statement (excluding single function / method calls) returns a value but it is not saved or passed. There may be an assumption that the program will remember all calculated values.");
  static CalculationModifiesVariables = new MisconceptionType("CalculationModifiesVariables", 
                                                              "A calculation is performed but the result is not saved or passed. There may be an assumption that performing a calculation modifies the variable or values involved. E.g. x + 1 updates the value of x."); 
  static FunctionCallSavesReturnValue = new MisconceptionType("FunctionCallSavesReturnValue", 
                                                              "A function that returns a value is called but the returned value is not saved or passed. There may be an assumption that that the program automatically remembers the results of a function call, or that the function modifies any arguments that are passed to it.");
  static CaughtExceptionMustBeRaised = new MisconceptionType("CaughtExceptionMustBeRaised", 
                                                             "A named exception is caught then immediately raised in the except block of a try-except. The programmer may be unsure of the purpose of catching an exception or strategies for handling anticipated exceptions from a design point of view.");
  static VariableMustHavePlaceholderValue = new MisconceptionType("VariableMustHavePlaceholderValue", 
                                                                  "A variable is assigned with a literal value then immediately overwritten with the result of calculation or another operation. This may be a simple oversight or a possible misunderstanding of the process and syntax of creating a variable.");
  TODO: 
  static DoubleEqualsAssigns = new MisconceptionType("DoubleEqualsAssigns", 
                                                     "The double equals operator is used in a standalone statement i.e. outside of a conditional, not saved to a variable. This could be a simple typo but it may also indicate confusion between double and single equals operators.");
  */

  /**
   * @type {String}
   */

  /**
   * Creates a new MisconceptionInfo
   * @param {String} name The unique name of the misconception
   * @param {String} desc The description of the misconception
   */
  function MisconceptionType(name, desc) {
    var _this;

    _classCallCheck(this, MisconceptionType);

    _this = _super5.call(this, name);

    _defineProperty(_assertThisInitialized(_this), "description", void 0);

    _this.description = desc;
    return _this;
  }

  return _createClass(MisconceptionType);
}(Enum);
/**
 * An enum that defines basic information about each symptom - symptom id and description
 * @extends Enum
 */


exports.MisconceptionType = MisconceptionType;

_defineProperty(MisconceptionType, "AssignCompares", new MisconceptionType("AssignCompares", "A single equals is used where a boolean expression is expected, e.g. in a conditional statement. This may be a typo or confusion between single and double equals operators."));

_defineProperty(MisconceptionType, "ColonAssigns", new MisconceptionType("ColonAssigns", "A colon is used between a variable name and a value. This may be a typo."));

_defineProperty(MisconceptionType, "CompareMultipleValuesWithOr", new MisconceptionType("CompareMultipleValuesWithOr", "A boolean expression has the form a == some_value or other_value, where other_value is non-boolean. There is likely a misunderstanding of the syntax of comparing multiple values."));

_defineProperty(MisconceptionType, "ComparisonWithBoolLiteral", new MisconceptionType("ComparisonWithBoolLiteral", "A boolean expression contains \"== True\" or \"== False\". The programmer may believe that explicitly checking equality is always necessary in a boolean expression."));

_defineProperty(MisconceptionType, "DeferredReturn", new MisconceptionType("DeferredReturn", "Code follows a return statement in a function. The programmer may not realise that a return statement causes the function to exit immediately."));

_defineProperty(MisconceptionType, "ForLoopVarIsLocal", new MisconceptionType("ForLoopVarIsLocal", "An iterating variable in a for loop overwrites a variable declared before the loop and the value is different from the overwritten value, or the values cannot be determined. This potential misconception is similar to IteratorInitialisedOutsideLoop."));

_defineProperty(MisconceptionType, "FunctionCallsNoParentheses", new MisconceptionType("FunctionCallsNoParentheses", "An undefined variable has the same name as a function. There may be a misunderstanding about how to call a function. Caution: functions in Python are first class objects, so it is possible that use of the function name without parentheses is intended and there is no misconception."));

_defineProperty(MisconceptionType, "FunctionCallsUseSquareBrackets", new MisconceptionType("FunctionCallsUseSquareBrackets", "The name of a function is called followed by square brackets rather than parentheses. The programmer may not be aware of when to use which type of bracket."));

_defineProperty(MisconceptionType, "IterationRequiresTwoLoops", new MisconceptionType("IterationRequiresTwoLoops", "A while loop with an integer loop variable contains a nested for loop. The while loop variable is only modified in the nested for loop and is used to count items in the variable iterated in the for loop. The two nested loops could be replaced with a single for loop using enumerate() or range()."));

_defineProperty(MisconceptionType, "IteratorInitialisedOutsideLoop", new MisconceptionType("TargetInitialisedOutsideLoop", "The target variable in a for loop is initialised before the loop with the same value. The programmer may not know that the iterating variable is initialised in the for loop definition."));

_defineProperty(MisconceptionType, "LocalVariablesAreGlobal", new MisconceptionType("LocalVariablesAreGlobal", "An undefined variable in document scope has the same name as a variable with function scope. This may indicate a misunderstanding of variable scope."));

_defineProperty(MisconceptionType, "LoopCounter", new MisconceptionType("LoopCounter", "A for loop target variable is modified in the loop and the modified variable is not used, or a while loop counter is assigned an int literal rather than incremented, or assigned the result of a function call. This may indicate confusion over how loops use loop variables."));

_defineProperty(MisconceptionType, "MapToBooleanWithIf", new MisconceptionType("MapToBooleanWithIf", "A conditional statement checks a boolean expression only to return or assign a value that matches the value of the boolean expression. The programmer may not realise that a boolean expression can be assigned or returned directly."));

_defineProperty(MisconceptionType, "MapToBooleanWithTernaryOperator", new MisconceptionType("MapToBooleanWithTernaryOperator", "A ternary checks a boolean expression only to return or assign a value that matches the value of the boolean expression. The programmer may not realise that a boolean expression can be assigned or returned directly."));

_defineProperty(MisconceptionType, "NoKeyword", new MisconceptionType("NoKeyword", "A block definition keyword (e.g. def, if, while) is missing where one is expected. The programmer may not realise that the keyword is required."));

_defineProperty(MisconceptionType, "NoReservedWords", new MisconceptionType("NoReservedWords", "Any string that meets naming character constraints can be used as an identifier (name of a variable, function, method, or class)."));

_defineProperty(MisconceptionType, "ParameterMustBeAssignedInFunction", new MisconceptionType("ParameterMustBeAssignedInFunction", "A user defined function has named parameter but the parameter value is overwritten in the function before it is used e.g. by prompting for command line input. This indicates potential misconceptions about the purpose or use of function parameters."));

_defineProperty(MisconceptionType, "ParenthesesOnlyIfArgument", new MisconceptionType("ParenthesesOnlyIfArgument", "An undefined variable has the same name as a user-defined function with no arguments. There may be a misunderstanding of the syntax of function calls."));

_defineProperty(MisconceptionType, "PrintSameAsReturn", new MisconceptionType("PrintSameAsReturn", "A call to a function that prints but does not return (including the print() function) is assigned or passed, or a call to a function that prints before returning a value is not assigned or passed. There may be confusion about printing a value versus returning a value."));

_defineProperty(MisconceptionType, "ReturnCall", new MisconceptionType("ReturnCall", "Function return values are surrounded by parentheses. There may be a belief that return needs to be called like a function."));

_defineProperty(MisconceptionType, "SequentialIfsAreExclusive", new MisconceptionType("ConditionalIsSequence", "If statements with very similar conditional statements appear in a sequence. There may be a belief that subsequent if statements will only execute if the previous condition does not. The programmer may not be aware of the efficiency drawbacks of using sequential if statements where a multiway conditional would be more appropriate."));

_defineProperty(MisconceptionType, "StringMethodsModifyTheString", new MisconceptionType("StringMethodsModifyTheString", "A string method is called but the result is not saved or passed. There may be an assumption that string methods mutate the string."));

_defineProperty(MisconceptionType, "TypeConversionModifiesArgument", new MisconceptionType("TypeConversionModifiesArgument", "A type conversion function (e.g. int(), float()) is called but the return value is not saved or used."));

_defineProperty(MisconceptionType, "TypeMustBeSpecified", new MisconceptionType("TypeMustBeSpecified", "A value that is guaranteed to have a particular data type is passed to a type conversion function that returns the same data type. In the case of literals, there may be a belief that type must be specified as in strongly typed languages. In other cases, there may be a misunderstanding or lack of confidence in how Python dynamically determines type."));

_defineProperty(MisconceptionType, "WhileSameAsIf", new MisconceptionType("WhileSameAsIf", "A while loop does not modify any of its loop variables and may also always exit during the first iteration. Where this behaviour is intentional, the while definition would be better replaced with an if statement. Where the loop does not exit, there is a risk of an infinite loop."));

var SymptomType = /*#__PURE__*/function (_Enum6) {
  _inherits(SymptomType, _Enum6);

  var _super6 = _createSuper(SymptomType);

  // Error
  // Error
  // ???
  // RiskFactor
  // Error
  // Error
  // RiskFactor
  // RiskFactor
  // ???
  // ???
  // RiskFactor
  // ???
  // RiskFactor TO IMPLEMENT
  //static MixesSpacesAndTabs = new SymptomType("MixesSpacesAndTabs", "Indentation is created using a mix of tabs and spaces.");
  // ???
  // RiskFactor
  // Error
  // RiskFactor
  // ???
  // Error
  // RiskFactor
  // RiskFactor
  // Error
  // ???
  // Error
  // RiskFactor
  // Error
  // Error
  // Error
  // Error
  // ???
  // ???
  // ???
  // ??? Gama et al PA.5 - Function return value not handled by caller function
  // RiskFactor
  // RiskFactor
  // RiskFactor
  // RiskFactor
  // Error
  // RiskFactor
  function SymptomType(name, desc) {
    var _this2;

    _classCallCheck(this, SymptomType);

    _this2 = _super6.call(this, name);

    _defineProperty(_assertThisInitialized(_this2), "description", void 0);

    _this2.description = desc;
    return _this2;
  }

  return _createClass(SymptomType);
}(Enum);

exports.SymptomType = SymptomType;

_defineProperty(SymptomType, "AssignmentInBoolean", new SymptomType("AssignmentInBoolean", "An assignment operator is used in a Boolean expression. This could be a typo or an indication of confusion about = and ==."));

_defineProperty(SymptomType, "AssignmentInReturn", new SymptomType("AssignmentInReturn", "A variable is assigned in a return statement."));

_defineProperty(SymptomType, "AssignedNone", new SymptomType("AssignedNoReturn", "A function or method that does not return a value is assigned to a variable, passed as an argument, or used in some way. Commonly seen with the print() function."));

_defineProperty(SymptomType, "CompareBoolLiteral", new SymptomType("CompareBoolLiteral", "A Boolean expression is compared to a Boolean literal. Although this is not an error, it may indicate a misconception about Boolean values."));

_defineProperty(SymptomType, "DefinitionFollowedByReservedWord", new SymptomType("DefinitionFollowedByReservedWord", "A definition keyword (def or class) is followed by a reserved word, suggesting the intention to define a function or class with the same name as a reserved word."));

_defineProperty(SymptomType, "DoubleComparisonOperators", new SymptomType("DoubleComparisonOperators", "Two comparison operators are used side by side. This may be due to an extra space e.g. <= is written as < =."));

_defineProperty(SymptomType, "ForLoopIteratorModified", new SymptomType("ForLoopTargetModified", "A for loop target variable is modified in the loop and the modified value is not used."));

_defineProperty(SymptomType, "FunctionPrints", new SymptomType("FunctionPrints", "A user-defined function contains print statements. This is not an issue unless AssignedNoReturn is also present and print is used in place of return statements."));

_defineProperty(SymptomType, "InfiniteLoop", new SymptomType("InfiniteLoop", "A while loop does not exit."));

_defineProperty(SymptomType, "LoopReturn", new SymptomType("LoopEarlyExit", "A return or break statement causes a loop to always exit on the first iteration."));

_defineProperty(SymptomType, "LoopVarModifiedInChildLoop", new SymptomType("WhileLoopVarModifiedInChildLoop", "A while loop variable is modified in a nested for or while loop."));

_defineProperty(SymptomType, "LoopVarNotModified", new SymptomType("WhileLoopVarNotModified", "None of the variables used in a while loop definition are modified in the body of the while loop. If the while loop contains a nested loop, only usages of the variable in the outer loop are checked."));

_defineProperty(SymptomType, "NaturalLanguageBoolean", new SymptomType("NaturalLanguageBoolean", "A Boolean expression uses syntax that makes sense in spoken English but may produce unexpected results or even and error in Python. The most common form is checking if a particular expression is equal to one of a range of values using \"or <non_boolean>\" e.g., \"day == 'sat' or 'sun'\"."));

_defineProperty(SymptomType, "OneLineConditional", new SymptomType("OneLineConditional", "A conditional that could be re-written as one line. Although this is not an error, it may indicate a misconception about Boolean values."));

_defineProperty(SymptomType, "OutOfPlaceBooleanOperator", new SymptomType("OutOfPlaceOperatorsInBoolean", "A comparison or logical operator is used in an unexpected place in a conditional expression."));

_defineProperty(SymptomType, "OverwrittenVariable", new SymptomType("VariableOverwrite", "A variable's value is initialised or changed then overwritten without being used."));

_defineProperty(SymptomType, "RedundantException", new SymptomType("RedundantException", "A specific exception is caught then immediately raised. Suggests confusion about how to work with exceptions."));

_defineProperty(SymptomType, "ReservedWordAssigned", new SymptomType("ReservedWordAssigned", "A reserved word is followed by the assignment operator, suggesting an intention to create a variable with the same name as a reserved word."));

_defineProperty(SymptomType, "ReturnInParentheses", new SymptomType("ReturnInParentheses", "The return keyword is followed by a value or compound expression in parentheses. May suggest a belief that returned values must be encapsulated in parentheses."));

_defineProperty(SymptomType, "SequentialIfs", new SymptomType("SequentialIfs", "Multiple if statements appear in sequence with no other code between the if blocks. If statements that contain a return or break at the top level are not included. Depending on the contents of the boolean expressions and each block, it may indicate a misconception about how conditionals are evaluated."));

_defineProperty(SymptomType, "SubscriptedNonSubscriptable", new SymptomType("SubscriptedNonSubscriptable", "Square brackets follow a variable name that does not have a subscriptable type (i.e. is not a string, list, tuple, or dictionary)"));

_defineProperty(SymptomType, "TernaryReturnsBool", new SymptomType("TernaryReturnsBool", "A ternary returns a boolean. Although this is not an error, it may indicate a misconception about Boolean values."));

_defineProperty(SymptomType, "TypeErrorInvalid", new SymptomType("InvalidCalculation", "A calculation that produces a TypeError e.g. string + int."));

_defineProperty(SymptomType, "TypeUnnecessary", new SymptomType("UnnecessaryTypeConversion", "A value that has a guaranteed data type is passed to a type conversion function that produces the same data type. Also captures strings converted to lists."));

_defineProperty(SymptomType, "UndefinedVariable", new SymptomType("UndefinedVariable", "A variable that was not declared is called. Depending on context, may be due to sloppiness (e.g. a typo) or may suggest misconception about variable scope, function parameters, or how to call functions."));

_defineProperty(SymptomType, "UnexpectedColon", new SymptomType("UnexpectedColon", "A colon is found where it is not expected, indicating either a typo or a misunderstanding of syntax."));

_defineProperty(SymptomType, "UnknownFunction", new SymptomType("UnknownFunction", "A function that is not defined in the file or built in to Python is called. Could be a typo or a misunderstanding about variables."));

_defineProperty(SymptomType, "UnknownMethod", new SymptomType("UnknownMethod", "An unknown method, or a method that is not valid is called on a value with known data type."));

_defineProperty(SymptomType, "UnreachableExhaustiveConditional", new SymptomType("UnreachableCode.exhaustiveConditional", "Code that is unreachable because it follows a conditional with an else branch in which all branches return."));

_defineProperty(SymptomType, "UnreachableExit", new SymptomType("UnreachableCode.exitKeyword", "Code that is unreachable because it follows a <code>return</code> or <code>break</code> statement. This might indicate a misconception about how those keywords affect the flow of control."));

_defineProperty(SymptomType, "UnreachableInfiniteLoop", new SymptomType("UnreachableCode.infiniteLoop", "Code that is unreachable because it follows a loop created using \"while True\" that never exits."));

_defineProperty(SymptomType, "UnusedReturn", new SymptomType("UnusedReturn", "The result of a call to a function / method that returns a value is not used in some way."));

_defineProperty(SymptomType, "UnusedValue", new SymptomType("UnusedValue", "A value (either a single variable or a compound expression) is created but not assigned to a variable, passed as a function argument, or used in some other way."));

_defineProperty(SymptomType, "UnusedVariable", new SymptomType("UnusedVariable", "A variable is not used after initialisation. May be an oversight but could potentially indicate misconceptions about variables."));

_defineProperty(SymptomType, "VariableWithSameNameAsFunction", new SymptomType("VariableWithSameNameAsFunction", "A variable has the same name as a function."));

_defineProperty(SymptomType, "WhileLoopVarAssignedIntLiteral", new SymptomType("WhileLoopVarAssignedIntLiteral", "A while loop counter variable is assigned an int value rather than incremented or decremented. The variable is not modified elsewhere in the loop."));

_defineProperty(SymptomType, "WrongArgNumber", new SymptomType("WrongArgNumber", "A user-defined function is called with the wrong number of arguments."));

_defineProperty(SymptomType, "WhileTrue", new SymptomType("WhileTrue", "A while loop is defined to iterate forever. This is a valid approach but may be a contributor to misconceptions when combined with other symptoms."));
},{}],5:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.directImport = exports.VariableInfo = exports.UsageInfo = exports.ModuleInfo = void 0;

var _enums = require("./enums.js");

var _block3 = require("./block.js");

var _ast = require("./ast.js");

var _interfaces = require("./interfaces.js");

var _symptom = require("../problem-finder/symptom.js");

var _constants = require("../utils/constants.js");

var _utils = require("../utils/utils.js");

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _name = /*#__PURE__*/new WeakMap();

var _usages = /*#__PURE__*/new WeakMap();

var _definedInBlock = /*#__PURE__*/new WeakMap();

var _scope = /*#__PURE__*/new WeakMap();

var _isParameter = /*#__PURE__*/new WeakMap();

var _usedInChildScopes = /*#__PURE__*/new WeakMap();

var _childScopeUsages = /*#__PURE__*/new WeakMap();

var _processConditionalUsage = /*#__PURE__*/new WeakSet();

var _checkUnused = /*#__PURE__*/new WeakSet();

var _isNamedArgInCall = /*#__PURE__*/new WeakSet();

var _checkUndefined = /*#__PURE__*/new WeakSet();

/**
 * Information about a variable and its usages
 */
var VariableInfo = /*#__PURE__*/function (_SymptomMonitor) {
  _inherits(VariableInfo, _SymptomMonitor);

  var _super = _createSuper(VariableInfo);

  /** @type {String} */
  // The variable name

  /** @type {UsageInfo[]} */

  /** @type {StatementBlock} */

  /** @type {ScopeBlock} */

  /** @type {Boolean} */

  /** @type {ScopeBlock[]} */

  /** @type {VariableInfo[]} */

  /**
   * Creates a new VariableInfo object
   * @param {UsageInfo} firstUsage The first time the new variable is encountered
   * @param {Statment} containingStatement The statment that contains firstExpression
   * @param {StatementBlock} definedInBlock The Block that the containingStatement belongs to
   */
  function VariableInfo(_firstUsage, containingStatement, definedInBlock) {
    var _this;

    _classCallCheck(this, VariableInfo);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _checkUndefined);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _isNamedArgInCall);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _checkUnused);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _processConditionalUsage);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _name, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _usages, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _definedInBlock, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _scope, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _isParameter, {
      writable: true,
      value: false
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _usedInChildScopes, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _childScopeUsages, {
      writable: true,
      value: []
    });

    if (!_firstUsage.getVariable().is(_enums.ExpressionEntity.VariableName)) {
      throw new Error("First expression of variable is not a variable.");
    }

    _classPrivateFieldSet(_assertThisInitialized(_this), _name, _firstUsage.getVariable().getTextValue());

    _classPrivateFieldGet(_assertThisInitialized(_this), _usages).push(_firstUsage);

    var expressions = containingStatement.getExpressions();

    if (expressions.length > 0 && expressions[0].is(_enums.ExpressionEntity.FunctionDefinitionStatement)) {
      _classPrivateFieldSet(_assertThisInitialized(_this), _isParameter, true);
    }

    _classPrivateFieldSet(_assertThisInitialized(_this), _definedInBlock, definedInBlock);

    _classPrivateFieldSet(_assertThisInitialized(_this), _scope, definedInBlock.getScope());

    _this.addRules([_classPrivateMethodGet(_assertThisInitialized(_this), _checkUndefined, _checkUndefined2), _classPrivateMethodGet(_assertThisInitialized(_this), _checkUnused, _checkUnused2)]);

    return _this;
  }
  /**
   * Gets the name of the variable
   * @returns {String}
   */


  _createClass(VariableInfo, [{
    key: "getName",
    value: function getName() {
      return _classPrivateFieldGet(this, _name);
    }
    /**
     * Gets the usages of the variable.
     * @returns {UsageInfo[]}
     */

  }, {
    key: "getUsages",
    value: function getUsages() {
      return _classPrivateFieldGet(this, _usages);
    }
    /**
     * Adds multiple usages to the usages array
     * @param {UsageInfo[]} usages 
     */

  }, {
    key: "addUsages",
    value: function addUsages(usages) {
      var _iterator = _createForOfIteratorHelper(usages),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var usage = _step.value;
          this.addUsage(usage);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "insertUsages",
    value: function insertUsages(usages) {
      //put at beginning
      var currentUsages = _toConsumableArray(_classPrivateFieldGet(this, _usages));

      _classPrivateFieldSet(this, _usages, usages);

      this.addUsages(currentUsages);
    }
    /**
     * Adds a single usage to the usages array
     * @param {UsageInfo} usage 
     */

  }, {
    key: "addUsage",
    value: function addUsage(usage) {
      var newUsageVar = usage.getVariable();

      if (_classPrivateFieldGet(this, _usages).length > 0) {
        var i = _classPrivateFieldGet(this, _usages).length - 1;
        var lastUsagesFound = false;
        var usageBlocksAdded = new Set(); // Add the block of every last usage (to prevent tracking multiple usages in the same block)

        var openExhaustiveConditionals = []; // An array of sets, each set is the branches need for an exhaustive conditional

        while (i >= 0 && !lastUsagesFound) {
          var lastUsage = _classPrivateFieldGet(this, _usages)[i];

          var lastUsageVar = lastUsage.getVariable(); // If usage is in a conditional branch definition and there is a usage already added from inside the branch, skip

          if (lastUsage.isInConditionalDefinition()) {
            // get the block that represents the body
            var conditionalBody = lastUsage.getBodyOfConditional();

            if (usageBlocksAdded.has(conditionalBody)) {
              i--;
              continue;
            }
          } // If the last usage is in the same block or a parent - connect


          if (usage.isInSameBlock(lastUsage) || lastUsage.isInParentBlock(usage)) {
            newUsageVar.addLastUsage(lastUsageVar);
            lastUsagesFound = true;
          } // If last in #usages in in branch that is child of current - add that and find last in same block, else set DataType to Unknown
          else if (!usage.isInAlternateBranch(lastUsage) && !usageBlocksAdded.has(lastUsage.getBlock())) {
            // Ignore lastUsage if it is in the same block as a previously added last usage
            newUsageVar.addLastUsage(lastUsageVar);
            var lastUsageBlock = lastUsage.getBlock();
            usageBlocksAdded.add(lastUsageBlock);

            if (lastUsageBlock.isBranchBlock() && lastUsageBlock.isBranchOfConditional()) {
              if (lastUsageBlock.getBlockEntity() === _enums.ExpressionEntity.ElseDefinition || lastUsageBlock.getBlockEntity() === _enums.ExpressionEntity.ExceptDefinition) {
                // add siblings
                openExhaustiveConditionals.push(new Set(_toConsumableArray(lastUsageBlock.getSiblingConditionalBranches())));
              } else if (lastUsageBlock.isBranchOfExhaustiveConditional()) {
                //check siblings
                lastUsagesFound = _classPrivateMethodGet(this, _processConditionalUsage, _processConditionalUsage2).call(this, lastUsageBlock, usage.getBlock(), openExhaustiveConditionals, usageBlocksAdded);
              }
            }
          }

          i--;
        }

        if (!lastUsagesFound && !newUsageVar.isAssignedOrChanged()) {
          var deadVar = new _ast.VariableExpression("Undefined Variable", _enums.ExpressionEntity.VariableName, _enums.ExpressionCategory.Identifiers, -1, -1, -1);
          deadVar.setDataType(_enums.DataType.Undefined);
          newUsageVar.addLastUsage(deadVar);
        }
      }

      if (!newUsageVar.isProxy()) _classPrivateFieldGet(this, _usages).push(usage);
    }
  }, {
    key: "checkAndAdjustUndefined",
    value: function checkAndAdjustUndefined() {
      var usages = this.getUsages();

      if (usages[0].getVariable().isProxy()) {
        usages[0].getVariable().setDataType(_enums.DataType.Undefined);
        usages.shift();
      }
    }
    /**
     * 
     * @param {BranchBlock} lastUsageBlock 
     * @param {StatementBlock} targetBlock
     * @param {Set<BranchBlock>[]} openExhaustiveConditionals 
     * @param {Set<StatementBlock} usageBlocksAdded
     * @returns {Boolean} True if
     */

  }, {
    key: "getDefinedInBlock",
    value:
    /**
     * Gets the statement block this variable was defined in
     * @returns {StatementBlock}
     */
    function getDefinedInBlock() {
      return _classPrivateFieldGet(this, _definedInBlock);
    }
    /**
     * Sets the block this variable was defined in
     * @param {StatementBlock} block 
     */

  }, {
    key: "setDefinedInBlock",
    value: function setDefinedInBlock(block) {
      _classPrivateFieldSet(this, _definedInBlock, block);

      if (!block.isScopeBlock()) {
        _classPrivateFieldSet(this, _scope, block.getScope());
      }
    }
    /**
     * Checks if this is the same variable as the provided variable info
     * @param {VariableInfo} vInfo 
     * @returns {Boolean}
     */

  }, {
    key: "isSameVariable",
    value: function isSameVariable(vInfo) {
      return _classPrivateFieldGet(this, _name) === vInfo.getName() && _classPrivateFieldGet(this, _definedInBlock).getId() === vInfo.getDefinedInBlock().getId() && _classPrivateFieldGet(this, _scope).hasChild(vInfo.getScope() || vInfo.getScope().hasChild(_classPrivateFieldGet(this, _scope)));
    }
    /**
     * Gets the scope of the variable
     * @returns {ScopeBlock}
     */

  }, {
    key: "getScope",
    value: function getScope() {
      return _classPrivateFieldGet(this, _scope);
    }
    /**
     * Checks if the variable is a parameter
     * @returns {Boolean}
     */

  }, {
    key: "isParameter",
    value: function isParameter() {
      return _classPrivateFieldGet(this, _isParameter);
    }
    /**
     * Gets child scope blocks that contain usages of this variable
     * @returns {ScopeBlock[]}
     */

  }, {
    key: "getChildScopesWithUsages",
    value: function getChildScopesWithUsages() {
      return _classPrivateFieldGet(this, _usedInChildScopes);
    }
    /**
     * DROP Adds a ScopeBlock that is a child of the current scope that also uses the variable.
     * @param {ScopeBlock} scope 
     */

  }, {
    key: "addChildScopeWithUsages",
    value: function addChildScopeWithUsages(scope) {
      _classPrivateFieldGet(this, _usedInChildScopes).push(scope);
    }
    /**
     * Adds a variable from a nested scope e.g. a function
     * @param {VariableInfo} vInfo 
     */

  }, {
    key: "addChildScopeVariable",
    value: function addChildScopeVariable(vInfo) {
      _classPrivateFieldGet(this, _childScopeUsages).push(vInfo);
    }
    /**
     * Gets information about usages of the variable in nested scopes
     * @returns {VariableInfo[]}
     */

  }, {
    key: "getChildScopeVariables",
    value: function getChildScopeVariables() {
      return _classPrivateFieldGet(this, _childScopeUsages);
    }
    /**
     * 
     * @param {VariableInfo} varInfo 
     * @returns {Symptom[]}
     */

  }, {
    key: "toJSON",
    value:
    /**
     * Creates a JSON representation of the variable.
     * @returns {Object} A JSON (or JSON-friendly) representation of the Variable.
     */
    function toJSON() {
      //const childScopeUsages = this.#childScopeUsages.flatMap(vInfo => vInfo.getUsages()).map(usage => usage.toJSON());
      return {
        name: _classPrivateFieldGet(this, _name),
        definitionBlock: _classPrivateFieldGet(this, _definedInBlock).getId(),
        scopeBlock: _classPrivateFieldGet(this, _scope).getId(),
        isParameter: _classPrivateFieldGet(this, _isParameter),
        usages: _classPrivateFieldGet(this, _usages).map(function (usage) {
          return usage.toJSON();
        }) //.concat(childScopeUsages)

      };
    }
  }]);

  return VariableInfo;
}(_interfaces.SymptomMonitor);
/**
 * Information about a usage of a variable
 */


exports.VariableInfo = VariableInfo;

function _processConditionalUsage2(lastUsageBlock, targetBlock, openExhaustiveConditionals, usageBlocksAdded) {
  var _iterator3 = _createForOfIteratorHelper(openExhaustiveConditionals),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var conditional = _step3.value;

      if (conditional.has(lastUsageBlock)) {
        conditional["delete"](lastUsageBlock);

        if (conditional.size === 0) {
          if (lastUsageBlock.getParentBlock().hasChild(targetBlock)) {
            return true;
          }

          usageBlocksAdded.add(lastUsageBlock.getParentBlock());
          var lastParent = lastUsageBlock.getParentBlock();

          if (lastParent.isBranchBlock()) {
            if (lastParent.getBlockEntity() === _enums.ExpressionEntity.ElseDefinition || lastParent.getBlockEntity() === _enums.ExpressionEntity.ExceptDefinition) {
              openExhaustiveConditionals.push(new Set(_toConsumableArray(lastParent.getSiblingConditionalBranches())));
            } // Need to check if parent is other part of exhaustive conditional being traked
            else if (lastParent.isBranchOfExhaustiveConditional()) {
              return _classPrivateMethodGet(this, _processConditionalUsage, _processConditionalUsage2).call(this, lastParent, targetBlock, openExhaustiveConditionals, usageBlocksAdded);
            }
          }
        }
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return false;
}

function _checkUnused2(varInfo) {
  var symptoms = [];
  var usages = varInfo.getUsages();

  if (usages.length === 1) {
    var firstUsage = usages[0];
    var usageVar = firstUsage.getVariable();

    if (usages.length === 1 && usageVar.isAssignedOrChanged() && !_classPrivateMethodGet(varInfo, _isNamedArgInCall, _isNamedArgInCall2).call(varInfo, usageVar) && usageVar.getDataType() !== _enums.DataType.Undefined) {
      symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnusedVariable, [usages[0].getVariable()], 0, 0));
    }
  }

  return symptoms;
}

function _isNamedArgInCall2(usageVar) {
  if (usageVar.getParent() === undefined) {
    return false;
  }

  if (usageVar.getParent().is(_enums.ExpressionEntity.AssignmentStatement)) {
    var grandParent = usageVar.getParent().getParent();

    if (grandParent === undefined) {
      return false;
    }

    return grandParent.isOneOf([_enums.ExpressionCategory.FunctionCall, _enums.ExpressionCategory.MethodCall]);
  }

  return false;
}

function _checkUndefined2(varInfo) {
  var symptoms = [];
  var usages = varInfo.getUsages();
  var firstUsage = undefined;

  var _iterator4 = _createForOfIteratorHelper(usages),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var usage = _step4.value;

      if (!usage.isPrecededByGlobal()) {
        firstUsage = usage;
        break;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  if (firstUsage !== undefined && usages.length > 0 && firstUsage.getVariable().getDataType() === _enums.DataType.Undefined) {
    symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UndefinedVariable, [firstUsage.getVariable()], 0, 0, {
      variable: varInfo
    }));
    var checkName = (0, _utils.keywordLookup)(firstUsage.getVariable().getTextValue());

    if (checkName.category === _enums.ExpressionCategory.BuiltInFunctions) {
      symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.VariableWithSameNameAsFunction, [firstUsage.getVariable()], 0, 0, {
        funcType: _constants.BUILT_IN_FUNCTION,
        varIsParameter: firstUsage.getVariable().isParameter()
      }));
    }
  }

  return symptoms;
}

var _varExpression = /*#__PURE__*/new WeakMap();

var _block = /*#__PURE__*/new WeakMap();

var _isInConditionalDefinition = /*#__PURE__*/new WeakMap();

var _isPrecededByGlobal = /*#__PURE__*/new WeakMap();

var _usagesInAlternateBranches = /*#__PURE__*/new WeakSet();

var _getNearestConditionalToBlock = /*#__PURE__*/new WeakSet();

var UsageInfo = /*#__PURE__*/function () {
  /** @type {VariableExpression} */

  /** @type {StatementBlock} */

  /** @type {Boolean} */

  /** @type {Boolean} */

  /**
   * 
   * @param {VariableExpression} varExpression 
   * @param {StatementBlock} block 
   */
  function UsageInfo(varExpression, _block2) {
    var isPrecededByGlobal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, UsageInfo);

    _classPrivateMethodInitSpec(this, _getNearestConditionalToBlock);

    _classPrivateMethodInitSpec(this, _usagesInAlternateBranches);

    _classPrivateFieldInitSpec(this, _varExpression, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _block, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _isInConditionalDefinition, {
      writable: true,
      value: false
    });

    _classPrivateFieldInitSpec(this, _isPrecededByGlobal, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _varExpression, varExpression);

    _classPrivateFieldSet(this, _isPrecededByGlobal, isPrecededByGlobal);

    var blockStatements = _block2.getStatements(); // var expression has correct block (list comp) but as string if (varExpression.getBlockId())


    if (_block2.isBranchBlock() && _block2.getBlockEntity() !== _enums.ExpressionEntity.ForDefinition && _block2.getBlockEntity() !== _enums.ExpressionEntity.WhileDefinition && blockStatements.length > 0) {
      // Check if the expression is in the definition line of the block, if so use block parent
      var definition = blockStatements[0].getDefinitionStatement();

      if (definition.containsExpression(varExpression)) {
        _classPrivateFieldSet(this, _block, _block2.getParentBlock());

        _classPrivateFieldSet(this, _isInConditionalDefinition, true);
      } else _classPrivateFieldSet(this, _block, _block2);
    } else {
      _classPrivateFieldSet(this, _block, _block2);

      if (blockStatements.length > 0 && blockStatements[blockStatements.length - 1].isBlockStatement() && blockStatements[blockStatements.length - 1].containsExpression(varExpression)) {
        _classPrivateFieldSet(this, _isInConditionalDefinition, true);
      }
    }
  }

  _createClass(UsageInfo, [{
    key: "getVariable",
    value: function getVariable() {
      return _classPrivateFieldGet(this, _varExpression);
    }
  }, {
    key: "getBlock",
    value: function getBlock() {
      return _classPrivateFieldGet(this, _block);
    }
  }, {
    key: "isInConditionalDefinition",
    value: function isInConditionalDefinition() {
      return _classPrivateFieldGet(this, _isInConditionalDefinition);
    }
  }, {
    key: "getBodyOfConditional",
    value: function getBodyOfConditional() {
      var childBlocks = _classPrivateFieldGet(this, _block).getChildBlocks();

      var usageLine = this.getVariable().getStartLineNumber();

      var _iterator2 = _createForOfIteratorHelper(childBlocks),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var child = _step2.value;

          if (child.isBranchBlock() && child.isBranchOfConditional() && child.getStatements()[0].getLineNumbers().has(usageLine)) {
            return child;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return _classPrivateFieldGet(this, _block);
    }
    /**
     * Checks if this usage is in the same block as another usage.
     * @param {UsageInfo} otherUsageInfo 
     * @returns {Boolean}
     */

  }, {
    key: "isInSameBlock",
    value: function isInSameBlock(otherUsageInfo) {
      return _classPrivateFieldGet(this, _block) === otherUsageInfo.getBlock();
    }
    /**
     * Checks if this usage is in a block that is a parent of the block containing
     * other usage. If the usages are in the same block, this method will return false.
     * @param {UsageInfo} otherUsageInfo 
     * @returns {Boolean} 
     */

  }, {
    key: "isInParentBlock",
    value: function isInParentBlock(otherUsageInfo) {
      return !this.isInSameBlock(otherUsageInfo) && _classPrivateFieldGet(this, _block).hasChild(otherUsageInfo.getBlock());
    }
    /**
     * Checks if this usage is in an alternate branch to the other usage i.e. only one
     * of the two usages can execute.
     * @param {UsageInfo} otherUsageInfo 
     * @returns 
     */

  }, {
    key: "isInAlternateBranch",
    value: function isInAlternateBranch(otherUsageInfo) {
      if (_classPrivateFieldGet(this, _block).getBlockEntity() === _enums.ExpressionEntity.ExceptDefinition && otherUsageInfo.getBlock().getBlockEntity() === _enums.ExpressionEntity.TryDefinition && _classPrivateFieldGet(this, _block).getParentBlock() === otherUsageInfo.getBlock().getParentBlock()) {
        return false;
      }

      var isInDefinition = this.isInConditionalDefinition();
      var otherIsInDefinition = otherUsageInfo.isInConditionalDefinition();

      var block = _classPrivateFieldGet(this, _block);

      if (isInDefinition && !otherIsInDefinition) {
        /*const childBlocks = this.#block.getChildBlocks();
        if (childBlocks.length > 0 && childBlocks[childBlocks.length - 1].isBranchBlock()
            && childBlocks[childBlocks.length - 1].isBranchOfConditional()) {
            block = childBlocks[childBlocks.length - 1];
        }*/
        block = this.getBodyOfConditional();
      }

      var nearestConditional = _classPrivateMethodGet(this, _getNearestConditionalToBlock, _getNearestConditionalToBlock2).call(this, block);

      var otherNearestConditional = _classPrivateMethodGet(this, _getNearestConditionalToBlock, _getNearestConditionalToBlock2).call(this, otherUsageInfo.getBlock());

      if (nearestConditional !== undefined && otherNearestConditional !== undefined) {
        return _classPrivateMethodGet(this, _usagesInAlternateBranches, _usagesInAlternateBranches2).call(this, nearestConditional, otherNearestConditional, otherUsageInfo.getBlock());
      } else if (nearestConditional !== undefined && otherNearestConditional === undefined || nearestConditional === undefined && otherNearestConditional !== undefined) {
        return false;
      }

      return !block.hasChild(otherUsageInfo.getBlock()) && !otherUsageInfo.getBlock().hasChild(block);
    }
  }, {
    key: "isPrecededByGlobal",
    value: function isPrecededByGlobal() {
      return _classPrivateFieldGet(this, _isPrecededByGlobal);
    }
  }, {
    key: "toJSON",
    value:
    /**
     * Gets a JSON representation of this UsageInfo.
     * @returns {Object} Returns a JSON (or JSON-friendly) object that represents this VariableUsage.
     */
    function toJSON() {
      return {
        line: _classPrivateFieldGet(this, _varExpression).getStartLineNumber(),
        docIndex: _classPrivateFieldGet(this, _varExpression).getDocumentStartIndex(),
        type: _classPrivateFieldGet(this, _varExpression).getDataType().name
      };
    }
  }]);

  return UsageInfo;
}();
/**
 * A class representing a module. 
 */


exports.UsageInfo = UsageInfo;

function _usagesInAlternateBranches2(currentConditional, lastConditional, lastBlock) {
  while (currentConditional !== undefined && lastConditional !== undefined && currentConditional !== lastConditional) {
    var siblings = currentConditional.getSiblingConditionalBranches();

    var _iterator5 = _createForOfIteratorHelper(siblings),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var sib = _step5.value;

        if (sib.hasChild(lastBlock)) {
          return true;
        }
      } //return false;

    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    currentConditional = _classPrivateMethodGet(this, _getNearestConditionalToBlock, _getNearestConditionalToBlock2).call(this, currentConditional.getParentBlock());
  }

  return false;
}

function _getNearestConditionalToBlock2(block) {
  return block !== undefined && block.isBranchBlock() && block.isBranchOfConditional() ? block : block.getNearestParentOfAny([_enums.ExpressionEntity.IfDefinition, _enums.ExpressionEntity.ElifDefinition, _enums.ExpressionEntity.ElseDefinition]);
}

var _name2 = /*#__PURE__*/new WeakMap();

var _entity = /*#__PURE__*/new WeakMap();

var _alias = /*#__PURE__*/new WeakMap();

var _directImports = /*#__PURE__*/new WeakMap();

var _importAll = /*#__PURE__*/new WeakMap();

var ModuleInfo = /*#__PURE__*/function () {
  /** @type {String} */
  // The original module name e.g. math

  /** @type {ExpressionEntity} */
  // The expression entity of the module e.g. if it is a known module, it will be ExpressionEntity.MathModule

  /** @type {String} */
  // The local name given to the module e.g. import math as m > alias = m

  /** @type {Map<String, Object>}*/
  // An map of objects returned by the directImport function. The key is the identifier

  /** @type {boolean} */
  // Flag that indicates if all module identifiers were directly imported using *

  /**
   * Creates a new Module
   * @param {String} name The original name of the module.
   * @param {ExpressionEntity} entity The ExpressionEntity that describes the module
   * @param {String} alias The alias given to the module at import, if applicable.
   */
  function ModuleInfo(name, entity) {
    var alias = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : name;

    _classCallCheck(this, ModuleInfo);

    _classPrivateFieldInitSpec(this, _name2, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _entity, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _alias, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _directImports, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _importAll, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _name2, name);

    _classPrivateFieldSet(this, _entity, entity);

    _classPrivateFieldSet(this, _alias, alias);

    _classPrivateFieldSet(this, _directImports, new Map());

    _classPrivateFieldSet(this, _importAll, false);
  }
  /**
   * Gets the module's original name.
   * @returns {String} The module name.
   */


  _createClass(ModuleInfo, [{
    key: "getName",
    value: function getName() {
      return _classPrivateFieldGet(this, _name2);
    }
    /**
     * Gets the module's ExpressionEntity.
     * @returns {ExpressionEntity} The ExpressionEntity that describes the module.
     */

  }, {
    key: "getEntity",
    value: function getEntity() {
      return _classPrivateFieldGet(this, _entity);
    }
    /**
     * Gets the module alias.
     * @returns {String} Gets the module alias, which may be the same as the name.
     */

  }, {
    key: "getAlias",
    value: function getAlias() {
      return _classPrivateFieldGet(this, _alias);
    }
    /**
     * Sets the module alias.
     * @param {String} alias The new alias of the module.
     */

  }, {
    key: "setAlias",
    value: function setAlias(alias) {
      _classPrivateFieldSet(this, _alias, alias);
    }
    /**
     * Adds a direct import.
     * @param {String} name The name of the direct import
     * @param {Object} directImport An object representing the import.
     */

  }, {
    key: "addDirectImport",
    value: function addDirectImport(name, directImport) {
      _classPrivateFieldGet(this, _directImports).set(name, directImport);
    }
    /**
     * Checks if the module has a direct import by the given name.
     * @param {String} name The name to look for
     * @returns {Boolean} True if the module has a matching direct import, false others.
     */

  }, {
    key: "hasDirectImport",
    value: function hasDirectImport(name) {
      return _classPrivateFieldGet(this, _directImports).has(name);
    }
    /**
     * Gets the direct import with the given name
     * @param {String} name The name of the import.
     * @returns {Object | undefined} The object associated with the name, or undefined if the name does not exist.
     */

  }, {
    key: "getDirectImport",
    value: function getDirectImport(name) {
      return _classPrivateFieldGet(this, _directImports).get(name);
    }
    /**
     * Gets the direct imports for this module
     * @returns {Map<String, Object>}
     */

  }, {
    key: "getDirectImports",
    value: function getDirectImports() {
      return _classPrivateFieldGet(this, _directImports);
    }
    /**
     * Sets the importAll flag.
     */

  }, {
    key: "setImportAll",
    value: function setImportAll() {
      _classPrivateFieldSet(this, _importAll, true);
    }
    /**
     * Checks if all identifiers of the module were imported.
     * @returns {Boolean} True if the import all asterisk was used, false otherwise.
     */

  }, {
    key: "didImportAll",
    value: function didImportAll() {
      return _classPrivateFieldGet(this, _importAll);
    }
    /**
     * Checks if the module has at least one direct import.
     * @returns {Boolean} True if the module has direct imports, false otherwise.
     */

  }, {
    key: "hasDirectImports",
    value: function hasDirectImports() {
      return _classPrivateFieldGet(this, _importAll) || _classPrivateFieldGet(this, _directImports).size > 0;
    }
  }]);

  return ModuleInfo;
}();
/**
 * Creates an object representing a direct import, with keys entity and category.
 * @param {ExpressionEntity} entity 
 * @param {ExpressionCategory} category 
 * @returns {Object} 
 */


exports.ModuleInfo = ModuleInfo;

var directImport = function directImport(entity, category) {
  return {
    entity: entity,
    category: category
  };
};

exports.directImport = directImport;
},{"../problem-finder/symptom.js":12,"../utils/constants.js":13,"../utils/utils.js":14,"./ast.js":1,"./block.js":2,"./enums.js":4,"./interfaces.js":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Indent = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _rawText = /*#__PURE__*/new WeakMap();

var _spaceCount = /*#__PURE__*/new WeakMap();

var _tabCount = /*#__PURE__*/new WeakMap();

var Indent = /*#__PURE__*/function () {
  /** @type {String} */

  /** @type {Number} */

  /** @type {Number} */
  function Indent(rawText) {
    _classCallCheck(this, Indent);

    _classPrivateFieldInitSpec(this, _rawText, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _spaceCount, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(this, _tabCount, {
      writable: true,
      value: 0
    });

    _classPrivateFieldSet(this, _rawText, rawText);

    for (var i = 0; i < rawText.length; i++) {
      var _this$tabCount, _this$tabCount2, _this$spaceCount, _this$spaceCount2;

      if (rawText.charAt(i) === "\t") _classPrivateFieldSet(this, _tabCount, (_this$tabCount = _classPrivateFieldGet(this, _tabCount), _this$tabCount2 = _this$tabCount++, _this$tabCount)), _this$tabCount2;else _classPrivateFieldSet(this, _spaceCount, (_this$spaceCount = _classPrivateFieldGet(this, _spaceCount), _this$spaceCount2 = _this$spaceCount++, _this$spaceCount)), _this$spaceCount2;
    }
  }
  /**
   * Gets the raw text of the indentation
   * @returns {String}
   */


  _createClass(Indent, [{
    key: "getText",
    value: function getText() {
      return _classPrivateFieldGet(this, _rawText);
    }
    /**
     * Gets the number of spaces in the indentation
     * @returns {Number}
     */

  }, {
    key: "getSpaceCount",
    value: function getSpaceCount() {
      return _classPrivateFieldGet(this, _spaceCount);
    }
    /**
     * Gets the number of tabs in the indentation
     * @returns {Number}
     */

  }, {
    key: "getTabCount",
    value: function getTabCount() {
      return _classPrivateFieldGet(this, _tabCount);
    }
    /**
     * Checks whether this indentation is empty (length of 0)
     * @returns {Boolean}
     */

  }, {
    key: "noIndentation",
    value: function noIndentation() {
      return _classPrivateFieldGet(this, _rawText).length === 0;
    }
    /**
     * Checks whether this indentation is made up of only spaces.
     * @returns {Boolean}
     */

  }, {
    key: "isAllSpaces",
    value: function isAllSpaces() {
      return _classPrivateFieldGet(this, _spaceCount) > 0 && _classPrivateFieldGet(this, _tabCount) === 0;
    }
    /**
     * Checks whether this indentation is made up of only tabs.
     * @returns {Boolean}
     */

  }, {
    key: "isAllTabs",
    value: function isAllTabs() {
      return _classPrivateFieldGet(this, _tabCount) > 0 && _classPrivateFieldGet(this, _spaceCount) === 0;
    }
    /**
     * Checks whether this indentation mixes tabs and spaces
     * @returns {Boolean}
     */

  }, {
    key: "isMixed",
    value: function isMixed() {
      return _classPrivateFieldGet(this, _tabCount) > 0 && _classPrivateFieldGet(this, _spaceCount) > 0;
    }
  }]);

  return Indent;
}();

exports.Indent = Indent;
},{}],7:[function(require,module,exports){
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

var _observers = /*#__PURE__*/new WeakMap();

var _observing = /*#__PURE__*/new WeakMap();

var TypeChangeObserverNotifier = /*#__PURE__*/function (_SymptomMonitor) {
  _inherits(TypeChangeObserverNotifier, _SymptomMonitor);

  var _super = _createSuper(TypeChangeObserverNotifier);

  function TypeChangeObserverNotifier() {
    var _this;

    _classCallCheck(this, TypeChangeObserverNotifier);

    _this = _super.call(this);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _observers, {
      writable: true,
      value: new Set()
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _observing, {
      writable: true,
      value: new Set()
    });

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

      _classPrivateFieldGet(this, _observers).add(observer);

      if (observer instanceof TypeChangeObserverNotifier) {
        if (dataType !== undefined) observer.typeUpdateReceived(dataType);
      }
    }
  }, {
    key: "getObservers",
    value: function getObservers() {
      return _classPrivateFieldGet(this, _observers);
    }
    /**
     * Removes the observer if found.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
     * @param {TypeChangeObserverNotifier} observer 
     */

  }, {
    key: "removeObserver",
    value: function removeObserver(observer) {
      _classPrivateFieldGet(this, _observers)["delete"](observer);
    }
    /**
     * Notify all observers of this object's DataType
     * @param {DataType} dataType The new DataType of this object
     */

  }, {
    key: "sendUpdate",
    value: function sendUpdate(dataType) {
      var _iterator2 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _observers)),
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
},{"../problem-finder/symptom.js":12}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatementProcessor = exports.SourceProcessor = void 0;

var _enums = require("./enums.js");

var _symptom = require("../problem-finder/symptom.js");

var _utils = require("../utils/utils.js");

var _ast = require("./ast.js");

var _block = require("./block.js");

var _identifiers = require("./identifiers.js");

var _indent2 = require("./indent.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _expressions = /*#__PURE__*/new WeakMap();

var _lastLineExpressions = /*#__PURE__*/new WeakMap();

var _continuesOnNextLine = /*#__PURE__*/new WeakMap();

var _separateStatementAfterLineEnds = /*#__PURE__*/new WeakMap();

var _multilineCommentDelimiter = /*#__PURE__*/new WeakMap();

var _stringLiteralDelimiter = /*#__PURE__*/new WeakMap();

var _text = /*#__PURE__*/new WeakMap();

var _indentSize = /*#__PURE__*/new WeakMap();

var _indent = /*#__PURE__*/new WeakMap();

var _currentLineNumber = /*#__PURE__*/new WeakMap();

var _currentLineStartIndex = /*#__PURE__*/new WeakMap();

var _groupCharCounts = /*#__PURE__*/new WeakMap();

var _textEndIndex = /*#__PURE__*/new WeakMap();

var _symptoms = /*#__PURE__*/new WeakMap();

var _parseLine = /*#__PURE__*/new WeakSet();

var _countSpacesAtStartOfLine = /*#__PURE__*/new WeakSet();

var _checkIfContinues = /*#__PURE__*/new WeakSet();

var _checkIfSeparateStatmentAfterLineEnd = /*#__PURE__*/new WeakSet();

var _contains = /*#__PURE__*/new WeakSet();

var _hasExpressions = /*#__PURE__*/new WeakSet();

var _getLastExpression = /*#__PURE__*/new WeakSet();

var _processBlockCommentOrString = /*#__PURE__*/new WeakSet();

var _processBlockComment = /*#__PURE__*/new WeakSet();

var _completeBlockComment = /*#__PURE__*/new WeakSet();

var _processStringLiteral = /*#__PURE__*/new WeakSet();

var _getStringDelimiter = /*#__PURE__*/new WeakSet();

var _removeEscapeChars = /*#__PURE__*/new WeakSet();

var _isStartOfMultilineComment = /*#__PURE__*/new WeakSet();

var _isIdentifierOrKeyword = /*#__PURE__*/new WeakSet();

var _processIdentifierOrKeyword = /*#__PURE__*/new WeakSet();

var _getIdentifierOrKeyword = /*#__PURE__*/new WeakSet();

var _getIdentifierInfo = /*#__PURE__*/new WeakSet();

var _findFunctionOrMethod = /*#__PURE__*/new WeakSet();

var _isBuiltInFunction = /*#__PURE__*/new WeakSet();

var _isBuiltInMethod = /*#__PURE__*/new WeakSet();

var _precededByDot = /*#__PURE__*/new WeakSet();

var _getEntityForNamedImport = /*#__PURE__*/new WeakSet();

var _getEntityForModuleAlias = /*#__PURE__*/new WeakSet();

var _getNextNonSpaceCharacter = /*#__PURE__*/new WeakSet();

var _isNumber = /*#__PURE__*/new WeakSet();

var _getNumber = /*#__PURE__*/new WeakSet();

var _processNumberLiteral = /*#__PURE__*/new WeakSet();

var _isPossibleMultiCharacterOperator = /*#__PURE__*/new WeakSet();

var _processMultiCharacterOperator = /*#__PURE__*/new WeakSet();

var _isNotASpace = /*#__PURE__*/new WeakSet();

var _processSingleCharacter = /*#__PURE__*/new WeakSet();

var _isLineSeparator = /*#__PURE__*/new WeakSet();

var _updateGroupCharCounts = /*#__PURE__*/new WeakSet();

/**
 * Class with static methods for processing source text into basic lines
 */
var SourceProcessor = /*#__PURE__*/function () {
  /** @type {ExpressionNode[]} */

  /** @type {ExpressionNode[]} */

  /** @type {Boolean} */

  /** @type {Boolean} */
  // Indicates if there are non-space characters after a line separate (: or ;)

  /** @type {String} */

  /** @type {String} */

  /** @type {String} */

  /** @type {Number} */

  /** @type {Indent} */

  /** @type {Number} */

  /** @type {Number} */

  /** @type {Object} */
  // Keeps track of open brackets

  /** @type {Number} */
  // The index of the last character in this statement. Will generally be the end of the text but may be earlier if the line contains a line separator such as : or ;

  /** @type {Symptom[]} */
  // Stores symptoms that can be detected while line processing is in progress
  function SourceProcessor(_text2, lineNumber, _startIndex) {
    var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref$multilineComment = _ref.multilineCommentDelimiter,
        multilineCommentDelimiter = _ref$multilineComment === void 0 ? undefined : _ref$multilineComment,
        _ref$stringLiteralDel = _ref.stringLiteralDelimiter,
        stringLiteralDelimiter = _ref$stringLiteralDel === void 0 ? undefined : _ref$stringLiteralDel,
        _ref$groupCharCounts = _ref.groupCharCounts,
        groupCharCounts = _ref$groupCharCounts === void 0 ? {
      "(": 0,
      "[": 0,
      "{": 0
    } : _ref$groupCharCounts,
        _ref$lastLineExpressi = _ref.lastLineExpressions,
        lastLineExpressions = _ref$lastLineExpressi === void 0 ? [] : _ref$lastLineExpressi,
        _ref$startFrom = _ref.startFrom,
        _startFrom = _ref$startFrom === void 0 ? 0 : _ref$startFrom,
        _ref$moduleNames = _ref.moduleNames,
        _moduleNames = _ref$moduleNames === void 0 ? [] : _ref$moduleNames,
        _ref$varsWithTypeName = _ref.varsWithTypeNames,
        _varsWithTypeNames = _ref$varsWithTypeName === void 0 ? [] : _ref$varsWithTypeName;

    _classCallCheck(this, SourceProcessor);

    _classPrivateMethodInitSpec(this, _updateGroupCharCounts);

    _classPrivateMethodInitSpec(this, _isLineSeparator);

    _classPrivateMethodInitSpec(this, _processSingleCharacter);

    _classPrivateMethodInitSpec(this, _isNotASpace);

    _classPrivateMethodInitSpec(this, _processMultiCharacterOperator);

    _classPrivateMethodInitSpec(this, _isPossibleMultiCharacterOperator);

    _classPrivateMethodInitSpec(this, _processNumberLiteral);

    _classPrivateMethodInitSpec(this, _getNumber);

    _classPrivateMethodInitSpec(this, _isNumber);

    _classPrivateMethodInitSpec(this, _getNextNonSpaceCharacter);

    _classPrivateMethodInitSpec(this, _getEntityForModuleAlias);

    _classPrivateMethodInitSpec(this, _getEntityForNamedImport);

    _classPrivateMethodInitSpec(this, _precededByDot);

    _classPrivateMethodInitSpec(this, _isBuiltInMethod);

    _classPrivateMethodInitSpec(this, _isBuiltInFunction);

    _classPrivateMethodInitSpec(this, _findFunctionOrMethod);

    _classPrivateMethodInitSpec(this, _getIdentifierInfo);

    _classPrivateMethodInitSpec(this, _getIdentifierOrKeyword);

    _classPrivateMethodInitSpec(this, _processIdentifierOrKeyword);

    _classPrivateMethodInitSpec(this, _isIdentifierOrKeyword);

    _classPrivateMethodInitSpec(this, _isStartOfMultilineComment);

    _classPrivateMethodInitSpec(this, _removeEscapeChars);

    _classPrivateMethodInitSpec(this, _getStringDelimiter);

    _classPrivateMethodInitSpec(this, _processStringLiteral);

    _classPrivateMethodInitSpec(this, _completeBlockComment);

    _classPrivateMethodInitSpec(this, _processBlockComment);

    _classPrivateMethodInitSpec(this, _processBlockCommentOrString);

    _classPrivateMethodInitSpec(this, _getLastExpression);

    _classPrivateMethodInitSpec(this, _hasExpressions);

    _classPrivateMethodInitSpec(this, _contains);

    _classPrivateMethodInitSpec(this, _checkIfSeparateStatmentAfterLineEnd);

    _classPrivateMethodInitSpec(this, _checkIfContinues);

    _classPrivateMethodInitSpec(this, _countSpacesAtStartOfLine);

    _classPrivateMethodInitSpec(this, _parseLine);

    _classPrivateFieldInitSpec(this, _expressions, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _lastLineExpressions, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _continuesOnNextLine, {
      writable: true,
      value: false
    });

    _classPrivateFieldInitSpec(this, _separateStatementAfterLineEnds, {
      writable: true,
      value: false
    });

    _classPrivateFieldInitSpec(this, _multilineCommentDelimiter, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _stringLiteralDelimiter, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _text, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _indentSize, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _indent, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _currentLineNumber, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _currentLineStartIndex, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _groupCharCounts, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _textEndIndex, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _symptoms, {
      writable: true,
      value: []
    });

    _classPrivateFieldSet(this, _text, _text2);

    _classPrivateFieldSet(this, _textEndIndex, _classPrivateFieldGet(this, _text).length - 1);

    _classPrivateFieldSet(this, _currentLineNumber, lineNumber);

    _classPrivateFieldSet(this, _currentLineStartIndex, _startIndex);

    _classPrivateFieldSet(this, _multilineCommentDelimiter, multilineCommentDelimiter);

    _classPrivateFieldSet(this, _stringLiteralDelimiter, stringLiteralDelimiter);

    _classPrivateFieldSet(this, _groupCharCounts, groupCharCounts);

    _classPrivateFieldSet(this, _indentSize, _classPrivateMethodGet(this, _countSpacesAtStartOfLine, _countSpacesAtStartOfLine2).call(this, _text2));

    _classPrivateFieldSet(this, _indent, new _indent2.Indent(_text2.substring(0, _classPrivateFieldGet(this, _indentSize))));

    _classPrivateFieldSet(this, _lastLineExpressions, lastLineExpressions);

    if (_classPrivateFieldGet(this, _text).length > 0) _classPrivateMethodGet(this, _parseLine, _parseLine2).call(this, _startFrom > 0 ? _startFrom : _classPrivateFieldGet(this, _indentSize), _varsWithTypeNames, _moduleNames);else _classPrivateMethodGet(this, _checkIfContinues, _checkIfContinues2).call(this);
  } //#region - raw text parsing


  _createClass(SourceProcessor, [{
    key: "getText",
    value: //#endregion - parsing operators
    //#endregion - parsing helper methods
    //#endregion - raw text parsing
    //#region - getters

    /**
     * Gets the raw text of the source code line
     * @returns {String} The raw text of the source line
     */
    function getText() {
      return _classPrivateFieldGet(this, _text);
    }
    /**
     * Gets the document line number of the source code
     * @returns {Number} The line number
     */

  }, {
    key: "getLineNumber",
    value: function getLineNumber() {
      return _classPrivateFieldGet(this, _currentLineNumber);
    }
    /**
     * Gets the expressions on the parsed line
     * @returns {ExpressionNode[]} The expressions array
     */

  }, {
    key: "getExpressions",
    value: function getExpressions() {
      return _classPrivateFieldGet(this, _expressions);
    }
    /**
     * Gets the document start index of the line
     * @returns {Number} The index of the first character in the line in the document source text
     */

  }, {
    key: "getDocumentStartIndex",
    value: function getDocumentStartIndex() {
      return _classPrivateFieldGet(this, _currentLineStartIndex);
    }
    /**
     * Gets the index of the last character processed in this line of source code. The index is
     * local to the line of text, not the document.
     * @returns {Number} The index of the last character processed in this line of source code
     */

  }, {
    key: "getLineEndIndex",
    value: function getLineEndIndex() {
      return _classPrivateFieldGet(this, _textEndIndex);
    }
    /**
     * Returns the number of spaces at the start of the line.
     * @returns {Number}
     */

  }, {
    key: "getIndentation",
    value: function getIndentation() {
      return _classPrivateFieldGet(this, _indentSize);
    }
    /**
     * Gets the indent object that describes the indentation
     * @returns {Indent}
     */

  }, {
    key: "getIndent",
    value: function getIndent() {
      return _classPrivateFieldGet(this, _indent);
    }
    /**
     * Whether or not the statement continues on the next line of source code.
     * @returns {Boolean} True if the statement continues, false otherwise.
     */

  }, {
    key: "continuesOnNextLine",
    value: function continuesOnNextLine() {
      return _classPrivateFieldGet(this, _continuesOnNextLine);
    }
    /**
     * Whether or not this statement is followed by a separate statement on the same
     * line of source code e.g. code after a : or ;
     * @returns {Boolean} True if the statement is followed by a separate statement, false otherwise
     */

  }, {
    key: "followedBySeparateStatement",
    value: function followedBySeparateStatement() {
      return _classPrivateFieldGet(this, _separateStatementAfterLineEnds);
    }
    /**
     * Checks if there is an open multiline comment on this line.
     * @returns {Boolean} True if there is an unclosed multiline comment on this line
     */

  }, {
    key: "hasOpenComment",
    value: function hasOpenComment() {
      return _classPrivateFieldGet(this, _multilineCommentDelimiter) !== undefined;
    }
    /**
     * Gets the text value of the open multiline comment delimiter.
     * @returns {String} The multiline comment delimiter left open on this line. 
     * @throws Throws an error if there is no open multiline comment delimiter
     */

  }, {
    key: "getCommentDelimiter",
    value: function getCommentDelimiter() {
      if (!this.hasOpenComment()) {
        throw new Error("This line of source code does not have an open multiline comment delimiter. Line", _classPrivateFieldGet(this, _currentLineNumber));
      }

      return _classPrivateFieldGet(this, _multilineCommentDelimiter);
    }
    /**
     * Checks if there is an open string literal on this line.
     * @returns {Boolean} True if there is an open string literal, false otherwise.
     */

  }, {
    key: "hasOpenString",
    value: function hasOpenString() {
      return _classPrivateFieldGet(this, _stringLiteralDelimiter) !== undefined;
    }
    /**
     * Gets the text value of the open string literal delimiter.
     * @returns {String} The text value of the open string literal delimiter
     * @throws Throws an error if there is no open string literal delimiter on this line.
     */

  }, {
    key: "getStringLiteralDelimiter",
    value: function getStringLiteralDelimiter() {
      if (!this.hasOpenString()) {
        throw new Error("This line of source code does not have an open string literal delimiter. Line", _classPrivateFieldGet(this, _currentLineNumber));
      }

      return _classPrivateFieldGet(this, _stringLiteralDelimiter);
    }
    /**
     * Checks if there any unclosed brackets on the line
     * @returns {Boolean} True if there are any unclosed brackets, false otherwise.
     */

  }, {
    key: "hasOpenGroupChars",
    value: function hasOpenGroupChars() {
      return Object.entries(_classPrivateFieldGet(this, _groupCharCounts)).filter(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            bracket = _ref3[0],
            count = _ref3[1];

        return count > 0;
      }).length > 0;
    }
    /**
     * Gets the open group information
     * @returns {Map<String, Number>} Each key is an open group character, (, [, or {. Each value is the number of unclosed open brackets.
     */

  }, {
    key: "getOpenGroupChars",
    value: function getOpenGroupChars() {
      return _classPrivateFieldGet(this, _groupCharCounts);
    } //#endregion - getters

  }]);

  return SourceProcessor;
}();
/**
 * Class with static methods for processing basic lines into executable Python
 */


exports.SourceProcessor = SourceProcessor;

function _parseLine2(startFrom, varsWithTypeNames, moduleNames) {
  if (_classPrivateFieldGet(this, _multilineCommentDelimiter) !== undefined) {
    startFrom = _classPrivateMethodGet(this, _completeBlockComment, _completeBlockComment2).call(this, _classPrivateFieldGet(this, _multilineCommentDelimiter), 0) + 1;
  } else if (_classPrivateFieldGet(this, _stringLiteralDelimiter) !== undefined) {
    startFrom = _classPrivateMethodGet(this, _processStringLiteral, _processStringLiteral2).call(this, _enums.Character.getCategory(_classPrivateFieldGet(this, _stringLiteralDelimiter).charCodeAt(0)), 0) + 1;
  }

  for (var i = startFrom; i < _classPrivateFieldGet(this, _text).length; i++) {
    var currentCharCategory = _enums.Character.getCategory(_classPrivateFieldGet(this, _text).charCodeAt(i)); // SINGLE LINE COMMENT - skip to end of line


    if (currentCharCategory === _enums.Character.Hash) {
      i = _classPrivateFieldGet(this, _text).length - 1;
    } // PAIRED SYMBOLS ('"([{)
    // MULTI-LINE COMMENT OR STRING LITERAL
    else if (currentCharCategory.isQuote()) {
      i = _classPrivateMethodGet(this, _processBlockCommentOrString, _processBlockCommentOrString2).call(this, currentCharCategory, i);
    } // IDENTIFIER OR KEYWORD
    else if (_classPrivateMethodGet(this, _isIdentifierOrKeyword, _isIdentifierOrKeyword2).call(this, currentCharCategory)) {
      i = _classPrivateMethodGet(this, _processIdentifierOrKeyword, _processIdentifierOrKeyword2).call(this, i, varsWithTypeNames, moduleNames);
    } // NUMBER LITERAL
    else if (_classPrivateMethodGet(this, _isNumber, _isNumber2).call(this, currentCharCategory, i, i === 0 || _enums.Character.getCategory(_classPrivateFieldGet(this, _text).charCodeAt(i - 1)) === _enums.Character.Space)) {
      i = _classPrivateMethodGet(this, _processNumberLiteral, _processNumberLiteral2).call(this, i);
    } // MULTI-CHARACTER OPERATORS e.g. ==
    else if (_classPrivateMethodGet(this, _isPossibleMultiCharacterOperator, _isPossibleMultiCharacterOperator2).call(this, currentCharCategory)) {
      i = _classPrivateMethodGet(this, _processMultiCharacterOperator, _processMultiCharacterOperator2).call(this, i);
    } // ALL OTHER NON-SPACE CHARACTERS
    else if (_classPrivateMethodGet(this, _isNotASpace, _isNotASpace2).call(this, currentCharCategory)) {
      _classPrivateMethodGet(this, _processSingleCharacter, _processSingleCharacter2).call(this, i);

      if (i < _classPrivateFieldGet(this, _textEndIndex) && _classPrivateMethodGet(this, _isLineSeparator, _isLineSeparator2).call(this, currentCharCategory)) {
        _classPrivateFieldSet(this, _textEndIndex, i);

        _classPrivateMethodGet(this, _checkIfSeparateStatmentAfterLineEnd, _checkIfSeparateStatmentAfterLineEnd2).call(this);

        break;
      }
    }
  }

  _classPrivateMethodGet(this, _checkIfContinues, _checkIfContinues2).call(this);
}

function _countSpacesAtStartOfLine2(rawContent) {
  /*let spaces = 0;
  let charAt = rawContent.charCodeAt(spaces);
  while (rawContent.length > 0 && 
          Character.getCategory(charAt) === Character.Space || 
          Character.getCategory(charAt) === Character.Tab) {
      spaces++;
      charAt = rawContent.charCodeAt(spaces);
  }
  return spaces;*/
  return Math.max(rawContent.search(/\S/), 0);
}

function _checkIfContinues2() {
  if (_classPrivateFieldGet(this, _multilineCommentDelimiter) !== undefined || _classPrivateFieldGet(this, _stringLiteralDelimiter) !== undefined || this.hasOpenGroupChars() || _classPrivateMethodGet(this, _hasExpressions, _hasExpressions2).call(this) && _classPrivateMethodGet(this, _getLastExpression, _getLastExpression2).call(this).isOneOf([_enums.ExpressionEntity.ContinuationLine, _enums.ExpressionEntity.AddOperator, _enums.ExpressionEntity.Comma])) {
    _classPrivateFieldSet(this, _continuesOnNextLine, true);
  }
}

function _checkIfSeparateStatmentAfterLineEnd2() {
  var restOfText = _classPrivateFieldGet(this, _text).substring(_classPrivateFieldGet(this, _textEndIndex) + 1).trim();

  if (restOfText.length === 0 || _enums.Character.getCategory(restOfText.charCodeAt(0)) === _enums.Character.Hash) {
    _classPrivateFieldSet(this, _separateStatementAfterLineEnds, false);
  } else {
    _classPrivateFieldSet(this, _separateStatementAfterLineEnds, true);
  }
}

function _contains2(entity) {
  var _iterator4 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _expressions)),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var expression = _step4.value;

      if (expression.is(entity)) {
        return true;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  return false;
}

function _hasExpressions2() {
  return _classPrivateFieldGet(this, _expressions).length > 0;
}

function _getLastExpression2() {
  if (_classPrivateFieldGet(this, _expressions).length === 0) {
    throw new Error("Attempted to get last expression when there are no expressions.");
  }

  return _classPrivateFieldGet(this, _expressions)[_classPrivateFieldGet(this, _expressions).length - 1];
}

function _processBlockCommentOrString2(currentCharCategory, localIndex) {
  if (_classPrivateMethodGet(this, _isStartOfMultilineComment, _isStartOfMultilineComment2).call(this, currentCharCategory, localIndex)) {
    return _classPrivateMethodGet(this, _processBlockComment, _processBlockComment2).call(this, localIndex);
  }

  return _classPrivateMethodGet(this, _processStringLiteral, _processStringLiteral2).call(this, currentCharCategory, localIndex);
}

function _processBlockComment2(localIndex) {
  var commentDelimiter = _classPrivateFieldGet(this, _text).substring(localIndex, localIndex + 3);

  var i = localIndex + 3;
  return _classPrivateMethodGet(this, _completeBlockComment, _completeBlockComment2).call(this, commentDelimiter, i);
}

function _completeBlockComment2(delimiter, contentStart) {
  if (contentStart < _classPrivateFieldGet(this, _text).length) {
    var cleanText = _classPrivateMethodGet(this, _removeEscapeChars, _removeEscapeChars2).call(this, _classPrivateFieldGet(this, _text));

    var closeCommentIndex = cleanText.substring(contentStart).indexOf(delimiter); // Comment ends on this source line

    if (closeCommentIndex > -1) {
      _classPrivateFieldSet(this, _multilineCommentDelimiter, undefined);

      return contentStart + closeCommentIndex + 2;
    }
  } // Comment end not found


  _classPrivateFieldSet(this, _multilineCommentDelimiter, delimiter);

  return _classPrivateFieldGet(this, _text).length - 1;
}

function _processStringLiteral2(quoteChar, localIndex) {
  var cleanText = _classPrivateMethodGet(this, _removeEscapeChars, _removeEscapeChars2).call(this, _classPrivateFieldGet(this, _text));

  var delimiter = _classPrivateFieldGet(this, _stringLiteralDelimiter) === undefined ? _classPrivateMethodGet(this, _getStringDelimiter, _getStringDelimiter2).call(this, quoteChar, localIndex, cleanText) : _classPrivateFieldGet(this, _stringLiteralDelimiter);
  var contentStart = _classPrivateFieldGet(this, _stringLiteralDelimiter) === undefined ? localIndex + delimiter.length : localIndex; // First quote of closing delimiter

  var closeStringIndex = contentStart + cleanText.substring(contentStart).indexOf(delimiter); // String does not end on this source line

  if (closeStringIndex === -1 || closeStringIndex < contentStart) {
    _classPrivateFieldSet(this, _stringLiteralDelimiter, delimiter);

    closeStringIndex = _classPrivateFieldGet(this, _text).length;
  } else {
    _classPrivateFieldSet(this, _stringLiteralDelimiter, undefined);
  }

  var endIndex = Math.min(_classPrivateFieldGet(this, _text).length - 1, closeStringIndex + delimiter.length - 1);

  var stringValue = _classPrivateFieldGet(this, _text).substring(localIndex, endIndex + 1); // include quotes


  var expression = new _ast.StringLiteralExpression(stringValue, _classPrivateFieldGet(this, _currentLineNumber), _classPrivateFieldGet(this, _currentLineStartIndex) + localIndex, localIndex, _classPrivateFieldGet(this, _currentLineStartIndex) + endIndex);

  if (_classPrivateMethodGet(this, _hasExpressions, _hasExpressions2).call(this) && _classPrivateMethodGet(this, _getLastExpression, _getLastExpression2).call(this).is(_enums.ExpressionEntity.F)) {
    var children = [_classPrivateMethodGet(this, _getLastExpression, _getLastExpression2).call(this), expression];
    var fStr = new _ast.FStringExpression((0, _utils.getTextOfExpressions)(children), children);
    _classPrivateFieldGet(this, _expressions)[_classPrivateFieldGet(this, _expressions).length - 1] = fStr;
  } else _classPrivateFieldGet(this, _expressions).push(expression);

  return endIndex;
}

function _getStringDelimiter2(quoteChar, localIndex, cleanText) {
  var quoteValue = quoteChar === _enums.Character.SingleQuote ? "'" : "\"";
  var isMultiCharDelimeter = localIndex < cleanText.length - 2 && _enums.Character.getCategory(cleanText.charCodeAt(localIndex)) === quoteChar && _enums.Character.getCategory(cleanText.charCodeAt(localIndex + 1)) === quoteChar && _enums.Character.getCategory(cleanText.charCodeAt(localIndex + 2)) === quoteChar;
  return isMultiCharDelimeter ? quoteValue + quoteValue + quoteValue : quoteValue;
}

function _removeEscapeChars2(text) {
  return text.replace(/\\.{1}/g, "  ");
}

function _isStartOfMultilineComment2(quoteChar, localIndex) {
  if (_classPrivateMethodGet(this, _hasExpressions, _hasExpressions2).call(this) && _classPrivateMethodGet(this, _getLastExpression, _getLastExpression2).call(this).is(_enums.ExpressionEntity.AssignmentOperator) || _classPrivateFieldGet(this, _groupCharCounts)["("] > 0 || _classPrivateFieldGet(this, _groupCharCounts)["["] > 0 || _classPrivateFieldGet(this, _groupCharCounts)["{"] > 0) {
    return false;
  }

  return quoteChar.isQuote() && _classPrivateFieldGet(this, _text).length > localIndex + 2 && _enums.Character.getCategory(_classPrivateFieldGet(this, _text).charCodeAt(localIndex)) === quoteChar && _enums.Character.getCategory(_classPrivateFieldGet(this, _text).charCodeAt(localIndex + 1)) === quoteChar && _enums.Character.getCategory(_classPrivateFieldGet(this, _text).charCodeAt(localIndex + 2)) === quoteChar;
}

function _isIdentifierOrKeyword2(characterCategory) {
  return characterCategory === _enums.Character.Underscore || characterCategory === _enums.Character.Letter;
}

function _processIdentifierOrKeyword2(localIndex, varsWithTypeNames, moduleNames) {
  var name = _classPrivateMethodGet(this, _getIdentifierOrKeyword, _getIdentifierOrKeyword2).call(this, localIndex);

  var info = _classPrivateMethodGet(this, _getIdentifierInfo, _getIdentifierInfo2).call(this, name, _classPrivateMethodGet(this, _getNextNonSpaceCharacter, _getNextNonSpaceCharacter2).call(this, localIndex + name.length), varsWithTypeNames, moduleNames);

  var expression = (0, _ast.expressionFactory)(name, info, _classPrivateFieldGet(this, _currentLineNumber), _classPrivateFieldGet(this, _currentLineStartIndex) + localIndex, localIndex); // not in, is not

  if (_classPrivateMethodGet(this, _hasExpressions, _hasExpressions2).call(this) && (info.entity === _enums.ExpressionEntity.InKeyword && _classPrivateMethodGet(this, _getLastExpression, _getLastExpression2).call(this).is(_enums.ExpressionEntity.NotOperator) || info.entity === _enums.ExpressionEntity.NotOperator && _classPrivateMethodGet(this, _getLastExpression, _getLastExpression2).call(this).is(_enums.ExpressionEntity.IsKeyword))) {
    name = (0, _utils.getTextOfExpressions)([_classPrivateMethodGet(this, _getLastExpression, _getLastExpression2).call(this), expression]);
    info = new _utils.ExpressionInfo(info.entity === _enums.ExpressionEntity.InKeyword ? _enums.ExpressionEntity.NotInKeyword : _enums.ExpressionEntity.IsNotKeyword, _enums.ExpressionCategory.ComparisonOperators);
    localIndex = _classPrivateMethodGet(this, _getLastExpression, _getLastExpression2).call(this).getDocumentStartIndex() - _classPrivateFieldGet(this, _currentLineStartIndex);
    _classPrivateFieldGet(this, _expressions)[_classPrivateFieldGet(this, _expressions).length - 1] = (0, _ast.expressionFactory)(name, info, _classPrivateFieldGet(this, _currentLineNumber), _classPrivateMethodGet(this, _getLastExpression, _getLastExpression2).call(this).getDocumentStartIndex());
  } else {
    _classPrivateFieldGet(this, _expressions).push(expression);
  }

  return localIndex + name.length - 1;
}

function _getIdentifierOrKeyword2(startIndex) {
  var endIndex = startIndex;

  for (var i = startIndex + 1; i < _classPrivateFieldGet(this, _text).length; i++) {
    var currentCat = _enums.Character.getCategory(_classPrivateFieldGet(this, _text).charCodeAt(i));

    if (currentCat === _enums.Character.Underscore || currentCat === _enums.Character.Letter || currentCat === _enums.Character.Digit) {
      endIndex = i;
    } else {
      break;
    }
  }

  return _classPrivateFieldGet(this, _text).substring(startIndex, endIndex + 1);
}

function _getIdentifierInfo2(identifier, nextCharacter, varsWithTypeNames, moduleNames) {
  var knownEntity = (0, _utils.keywordLookup)(identifier);

  if (_classPrivateMethodGet(this, _hasExpressions, _hasExpressions2).call(this)) {
    var priorExpression = _classPrivateMethodGet(this, _getLastExpression, _getLastExpression2).call(this);

    if (priorExpression.is(_enums.ExpressionEntity.FunctionDefinition)) {
      return new _utils.ExpressionInfo(_enums.ExpressionEntity.FunctionName, _enums.ExpressionCategory.Identifiers);
    } else if (priorExpression.is(_enums.ExpressionEntity.ClassDefinition)) {
      return new _utils.ExpressionInfo(_enums.ExpressionEntity.ClassName, _enums.ExpressionCategory.Identifiers);
    } // Module name
    else if (priorExpression.is(_enums.ExpressionEntity.FromKeyword) || _classPrivateMethodGet(this, _contains, _contains2).call(this, _enums.ExpressionEntity.ImportKeyword) && !_classPrivateMethodGet(this, _contains, _contains2).call(this, _enums.ExpressionEntity.FromKeyword)) {
      if (priorExpression.is(_enums.ExpressionEntity.AsKeyword) && _classPrivateFieldGet(this, _expressions).length > 1) {
        // Is an alias for a previously added module
        var module = _classPrivateFieldGet(this, _expressions)[_classPrivateFieldGet(this, _expressions).length - 2];

        return new _utils.ExpressionInfo(module.getEntity(), module.getCategory()); //this.#getEntityForModuleAlias(identifier, this.#expressions[this.#expressions.length - 2].getEntity());
      } else {
        // Is a module name, see if it is known
        return knownEntity.entity === _enums.ExpressionEntity.Unknown ? new _utils.ExpressionInfo(_enums.ExpressionEntity.ModuleName, _enums.ExpressionCategory.Identifiers) : knownEntity;
      }
    } // Module property
    else if (_classPrivateMethodGet(this, _precededByDot, _precededByDot2).call(this) && nextCharacter !== "(") {
      return knownEntity.category === _enums.ExpressionCategory.Unknown ? new _utils.ExpressionInfo(_enums.ExpressionEntity.PropertyName, _enums.ExpressionCategory.ModuleProperties) : knownEntity;
    } // Named import
    else if (_classPrivateMethodGet(this, _contains, _contains2).call(this, _enums.ExpressionEntity.FromKeyword) && _classPrivateMethodGet(this, _contains, _contains2).call(this, _enums.ExpressionEntity.ImportKeyword)) {
      // Get the module - if known, look up entity; if unknown, generic import
      return _classPrivateMethodGet(this, _getEntityForNamedImport, _getEntityForNamedImport2).call(this, identifier);
    } // Variables with names sep and end that aren't the special variables
    else if ((identifier === "sep" || identifier === "end") && !(priorExpression.is(_enums.ExpressionEntity.Comma) && nextCharacter === "=")) {
      return new _utils.ExpressionInfo(_enums.ExpressionEntity.VariableName, _enums.ExpressionCategory.Identifiers);
    } // Parameters with type names
    else if (knownEntity.entity !== _enums.ExpressionEntity.VariableName && (0, _utils.isTypeName)(identifier) && _classPrivateMethodGet(this, _contains, _contains2).call(this, _enums.ExpressionEntity.FunctionDefinition) && priorExpression.isOneOf([_enums.ExpressionEntity.OpenParenthesis, _enums.ExpressionEntity.Comma])) {
      return new _utils.ExpressionInfo(_enums.ExpressionEntity.VariableName, _enums.ExpressionCategory.Identifiers);
    }
  } // No previous expressions
  else if (identifier === "sep" || identifier === "end") {
    return new _utils.ExpressionInfo(_enums.ExpressionEntity.VariableName, _enums.ExpressionCategory.Identifiers);
  } // May or may not have previous expressions


  if (nextCharacter === _enums.ExpressionEntity.OpenParenthesis.name) {
    return _classPrivateMethodGet(this, _findFunctionOrMethod, _findFunctionOrMethod2).call(this, knownEntity, identifier);
  } else if ((knownEntity.entity === _enums.ExpressionEntity.R || knownEntity.entity === _enums.ExpressionEntity.F) && nextCharacter !== "'" && nextCharacter !== "\"") {
    return new _utils.ExpressionInfo(_enums.ExpressionEntity.VariableName, _enums.ExpressionCategory.Identifiers);
  } else if (knownEntity.category === _enums.ExpressionCategory.Types && varsWithTypeNames.includes(identifier)) {
    return new _utils.ExpressionInfo(_enums.ExpressionEntity.VariableName, _enums.ExpressionCategory.Identifiers);
  } else if (knownEntity.category === _enums.ExpressionCategory.BuiltInModules && !moduleNames.includes(identifier)) {
    return new _utils.ExpressionInfo(_enums.ExpressionEntity.VariableName, _enums.ExpressionCategory.Identifiers);
  } else if (knownEntity.category === _enums.ExpressionCategory.BuiltInFunctions && (0, _utils.typeLookup)(identifier).entity !== _enums.ExpressionEntity.Unknown // Could be a type class
  && nextCharacter !== "=") {
    // not a definition of alocal variable
    if (varsWithTypeNames.includes(identifier)) {
      // previously defined local var with type name
      return new _utils.ExpressionInfo(_enums.ExpressionEntity.VariableName, _enums.ExpressionCategory.Identifiers);
    }

    return (0, _utils.typeLookup)(identifier);
  } else if (knownEntity.category === _enums.ExpressionCategory.OtherKeywords || knownEntity.category === _enums.ExpressionCategory.BlockDefinitions || knownEntity.category === _enums.ExpressionCategory.LogicalOperators || knownEntity.category === _enums.ExpressionCategory.BuiltInExceptions || knownEntity.category === _enums.ExpressionCategory.BuiltInModules || knownEntity.category === _enums.ExpressionCategory.Types || knownEntity.category === _enums.ExpressionCategory.SpecialVariables || knownEntity.category === _enums.ExpressionCategory.ComparisonOperators) {
    return knownEntity;
  } else if (knownEntity.category === _enums.ExpressionCategory.Unknown && moduleNames.includes(identifier)) {
    return new _utils.ExpressionInfo(_enums.ExpressionEntity.ModuleName, _enums.ExpressionCategory.Identifiers);
  } else {
    return new _utils.ExpressionInfo(_enums.ExpressionEntity.VariableName, _enums.ExpressionCategory.Identifiers);
  }
}

function _findFunctionOrMethod2(knownEntity, identifier) {
  // Known function or method - check that the context makes sense (e.g. function is not preceded by a dot, method is)
  if (_classPrivateMethodGet(this, _isBuiltInFunction, _isBuiltInFunction2).call(this, knownEntity) || _classPrivateMethodGet(this, _isBuiltInMethod, _isBuiltInMethod2).call(this, knownEntity)) {
    return knownEntity;
  } // Special case of the format method vs. format function 
  else if (knownEntity.entity === _enums.ExpressionEntity.Format) {
    return _classPrivateMethodGet(this, _precededByDot, _precededByDot2).call(this) ? new _utils.ExpressionInfo(_enums.ExpressionEntity.Format, _enums.ExpressionCategory.BuiltInMethods) : new _utils.ExpressionInfo(_enums.ExpressionEntity.FormatFunction, _enums.ExpressionCategory.BuiltInFunctions);
  } // Must be a method, no matter what known entity says
  else if (_classPrivateMethodGet(this, _precededByDot, _precededByDot2).call(this)) {
    if (identifier === "exit") {
      return _utils.specialCaseLookup[identifier];
    }

    return new _utils.ExpressionInfo(_enums.ExpressionEntity.MethodName, _enums.ExpressionCategory.OtherMethods);
  } // Other special cases e.g. assert
  else if (_utils.specialCaseLookup.hasOwnProperty(identifier)) {
    return _utils.specialCaseLookup[identifier];
  } else if (knownEntity.category !== _enums.ExpressionCategory.BuiltInFunctions && knownEntity.category !== _enums.ExpressionCategory.BuiltInMethods && knownEntity.category !== _enums.ExpressionCategory.Unknown && knownEntity.category !== _enums.ExpressionCategory.ModuleFunctions) {
    return knownEntity;
  }

  return new _utils.ExpressionInfo(_enums.ExpressionEntity.FunctionName, _enums.ExpressionCategory.Identifiers);
}

function _isBuiltInFunction2(knownEntity) {
  return knownEntity.category === _enums.ExpressionCategory.BuiltInFunctions && !_classPrivateMethodGet(this, _precededByDot, _precededByDot2).call(this);
}

function _isBuiltInMethod2(knownEntity) {
  return (knownEntity.category === _enums.ExpressionCategory.BuiltInMethods || knownEntity.category === _enums.ExpressionCategory.MagicMethods || knownEntity.category === _enums.ExpressionCategory.ModuleFunctions) && _classPrivateMethodGet(this, _precededByDot, _precededByDot2).call(this);
}

function _precededByDot2() {
  return _classPrivateMethodGet(this, _hasExpressions, _hasExpressions2).call(this) && _classPrivateMethodGet(this, _getLastExpression, _getLastExpression2).call(this).is(_enums.ExpressionEntity.Dot) || !_classPrivateMethodGet(this, _hasExpressions, _hasExpressions2).call(this) && _classPrivateFieldGet(this, _lastLineExpressions).length > 0 && _classPrivateFieldGet(this, _lastLineExpressions)[_classPrivateFieldGet(this, _lastLineExpressions).length - 1].is(_enums.ExpressionEntity.Dot);
}

function _getEntityForNamedImport2(identifier) {
  if (_classPrivateFieldGet(this, _expressions).length >= 2 && _classPrivateFieldGet(this, _expressions)[1].is(_enums.ExpressionCategory.BuiltInModules)) {
    var lookup = (0, _utils.keywordLookup)(identifier);

    if (lookup.category === _enums.ExpressionCategory.ModuleFunctions || lookup.category === _enums.ExpressionCategory.ModuleProperties) {
      var module = _utils.moduleLookup.has(lookup.entity) ? _utils.moduleLookup.get(lookup.entity) : undefined;

      if (module && _classPrivateMethodGet(this, _contains, _contains2).call(this, module)) {
        return lookup;
      } else return new _utils.ExpressionInfo(_enums.ExpressionEntity.NamedImport, _enums.ExpressionCategory.Identifiers);
    }

    return lookup.entity === _enums.ExpressionEntity.Unknown ? new _utils.ExpressionInfo(_enums.ExpressionEntity.NamedImport, _enums.ExpressionCategory.Identifiers) : lookup;
  }

  return new _utils.ExpressionInfo(_enums.ExpressionEntity.NamedImport, _enums.ExpressionCategory.Identifiers);
}

function _getEntityForModuleAlias2(aliasName, moduleEntity) {
  /* ORIG - TODO: Implement module tracking
  if (this.#modules.has(moduleName)) {
                  let module = this.#modules.get(moduleName)
                  module.setAlias(identifier);
                  this.#modules.set(identifier, module);
                  this.#modules.delete(moduleName);
                  return module.getEntity();
  }*/
  // If don't recognise the module it's an alias for
  return new _utils.ExpressionInfo(_enums.ExpressionEntity.ModuleName, _enums.ExpressionCategory.Identifiers);
}

function _getNextNonSpaceCharacter2(startIndex) {
  while (_enums.Character.getCategory(_classPrivateFieldGet(this, _text).charCodeAt(startIndex)) === _enums.Character.Space) {
    startIndex++;
  }

  return _classPrivateFieldGet(this, _text).charAt(startIndex);
}

function _isNumber2(characterCategory, index, lastCharIsSpace) {
  // If first char is a minus, it can't be a literal if previous expression was an identifier or close bracket (with no space)
  if (characterCategory === _enums.Character.Minus && _classPrivateMethodGet(this, _hasExpressions, _hasExpressions2).call(this) && !lastCharIsSpace) {
    var lastExp = _classPrivateMethodGet(this, _getLastExpression, _getLastExpression2).call(this);

    if (lastExp.isOneOf([_enums.ExpressionCategory.Identifiers, _enums.ExpressionEntity.CloseBrace, _enums.ExpressionEntity.CloseParenthesis, _enums.ExpressionEntity.CloseSquareBracket])) {
      return false;
    }
  }

  var numDigits = 0;
  var numDecimal = 0;
  var numMinus = 0;
  var i = index;

  while (i < _classPrivateFieldGet(this, _text).length && (characterCategory === _enums.Character.Digit || characterCategory === _enums.Character.Decimal || characterCategory === _enums.Character.Minus && i === index)) {
    if (characterCategory === _enums.Character.Digit) numDigits++;else if (characterCategory === _enums.Character.Decimal) numDecimal++;else numMinus++;
    i++;
    characterCategory = _enums.Character.getCategory(_classPrivateFieldGet(this, _text).charCodeAt(i));
  }

  return numDigits >= 1 && numDecimal <= 1 && numMinus <= 1;
}

function _getNumber2(index) {
  var endIndex = index;

  for (var i = index + 1; i < _classPrivateFieldGet(this, _text).length; i++) {
    var currentCat = _enums.Character.getCategory(_classPrivateFieldGet(this, _text).charCodeAt(i));

    if (currentCat === _enums.Character.Digit || currentCat === _enums.Character.Decimal) {
      endIndex = i;
    } else break;
  }

  return _classPrivateFieldGet(this, _text).substring(index, endIndex + 1);
}

function _processNumberLiteral2(localIndex) {
  var numberText = _classPrivateMethodGet(this, _getNumber, _getNumber2).call(this, localIndex);

  _classPrivateFieldGet(this, _expressions).push(new _ast.NumberLiteral(numberText, _classPrivateFieldGet(this, _currentLineNumber), _classPrivateFieldGet(this, _currentLineStartIndex) + localIndex, localIndex));

  return localIndex + numberText.length - 1;
}

function _isPossibleMultiCharacterOperator2(category) {
  return category === _enums.Character.Equals || category === _enums.Character.Exclamation || category === _enums.Character.Minus || category === _enums.Character.Plus || category === _enums.Character.Asterisk || category === _enums.Character.ForwardSlash || category === _enums.Character.Modulo || category === _enums.Character.GreaterThan || category === _enums.Character.LessThan;
}

function _processMultiCharacterOperator2(localIndex) {
  var operator = _classPrivateFieldGet(this, _text).charAt(localIndex);

  var lastOperator = operator;
  var index = localIndex;

  while ((lastOperator === "!" || (0, _utils.keywordLookup)(lastOperator).entity !== _enums.ExpressionEntity.Unknown) && index < _classPrivateFieldGet(this, _text).length) {
    operator = lastOperator;
    index++;
    lastOperator += _classPrivateFieldGet(this, _text).charAt(index);
  }

  var operatorInfo = (0, _utils.keywordLookup)(operator);

  if (operator === "*" && _classPrivateMethodGet(this, _hasExpressions, _hasExpressions2).call(this) && _classPrivateMethodGet(this, _getLastExpression, _getLastExpression2).call(this).is(_enums.ExpressionEntity.ImportKeyword)) {
    operatorInfo = new _utils.ExpressionInfo(_enums.ExpressionEntity.ImportAll, _enums.ExpressionCategory.OtherKeywords); // TODO: IMPLEMENT MODULE TRACKING
  }

  _classPrivateFieldGet(this, _expressions).push((0, _ast.expressionFactory)(operator, operatorInfo, _classPrivateFieldGet(this, _currentLineNumber), _classPrivateFieldGet(this, _currentLineStartIndex) + localIndex, localIndex));

  return localIndex + operator.length - 1;
}

function _isNotASpace2(currentCharCategory) {
  return currentCharCategory !== _enums.Character.Space && currentCharCategory !== _enums.Character.Tab;
}

function _processSingleCharacter2(localIndex) {
  var text = _classPrivateFieldGet(this, _text).charAt(localIndex);

  _classPrivateMethodGet(this, _updateGroupCharCounts, _updateGroupCharCounts2).call(this, text);

  var info = (0, _utils.keywordLookup)(text); // OLD VERSION: set subscripted if [

  _classPrivateFieldGet(this, _expressions).push((0, _ast.expressionFactory)(text, info, _classPrivateFieldGet(this, _currentLineNumber), _classPrivateFieldGet(this, _currentLineStartIndex) + localIndex, localIndex));
}

function _isLineSeparator2(currentCharCategory) {
  // ; as line separator - should not appear anywhere else
  if (currentCharCategory === _enums.Character.Semicolon) {
    return true;
  } // : as end of definition line - should not be in {} or [] or ()
  else if (currentCharCategory === _enums.Character.Colon && _classPrivateMethodGet(this, _hasExpressions, _hasExpressions2).call(this) && _classPrivateFieldGet(this, _expressions)[0].isOneOf([_enums.ExpressionEntity.IfDefinition, _enums.ExpressionEntity.ElifDefinition, _enums.ExpressionEntity.ElseDefinition, _enums.ExpressionEntity.FunctionDefinition, _enums.ExpressionEntity.ClassDefinition, _enums.ExpressionEntity.ForDefinition, _enums.ExpressionEntity.WhileDefinition, _enums.ExpressionEntity.TryDefinition, _enums.ExpressionEntity.ExceptDefinition]) && _classPrivateFieldGet(this, _groupCharCounts)["{"] <= 0 && _classPrivateFieldGet(this, _groupCharCounts)["("] <= 0 && _classPrivateFieldGet(this, _groupCharCounts)["["] <= 0) {
    return true;
  }

  return false;
}

function _updateGroupCharCounts2(text) {
  if (_classPrivateFieldGet(this, _groupCharCounts).hasOwnProperty(text)) {
    _classPrivateFieldGet(this, _groupCharCounts)[text]++;
  } else if (text === ")") {
    _classPrivateFieldGet(this, _groupCharCounts)["("]--;
  } else if (text === "]") {
    _classPrivateFieldGet(this, _groupCharCounts)["["]--;
  } else if (text === "}") {
    _classPrivateFieldGet(this, _groupCharCounts)["{"]--;
  }
}

var StatementProcessor = /*#__PURE__*/function () {
  function StatementProcessor() {
    _classCallCheck(this, StatementProcessor);
  }

  _createClass(StatementProcessor, null, [{
    key: "createTree",
    value:
    /**
     * Takes an expressions array and combines individual expressions into multipart expressions
     * where appropriate.
     * @param {ExpressionNode[]} expressions An array of expression nodes
     * @returns {ExpressionNode[]} The converted expressions
     */
    function createTree(expressions) {
      var expressionTree = expressions.filter(function (exp) {
        return !exp.is(_enums.ExpressionEntity.ContinuationLine);
      });
      ;

      if (_classStaticPrivateMethodGet(this, StatementProcessor, _isDefinitionStatement).call(this, expressions)) {
        return [_classStaticPrivateMethodGet(this, StatementProcessor, _definitionFactory).call(this, expressions)];
      } else if (expressionTree.length > 1) {
        expressionTree = _classStaticPrivateMethodGet(this, StatementProcessor, _processGroups).call(this, expressionTree);
        expressionTree = _classStaticPrivateMethodGet(this, StatementProcessor, _processCalculations).call(this, expressionTree);
        expressionTree = _classStaticPrivateMethodGet(this, StatementProcessor, _processComparisons).call(this, expressionTree);
        expressionTree = _classStaticPrivateMethodGet(this, StatementProcessor, _processBooleans).call(this, expressionTree);
        expressionTree = _classStaticPrivateMethodGet(this, StatementProcessor, _processTernary).call(this, expressionTree);
        expressionTree = _classStaticPrivateMethodGet(this, StatementProcessor, _processListComprehension).call(this, expressionTree);
        expressionTree = _classStaticPrivateMethodGet(this, StatementProcessor, _processAssignment).call(this, expressionTree);
        expressionTree = _classStaticPrivateMethodGet(this, StatementProcessor, _processKeywordStatements).call(this, expressionTree);
      }

      return expressionTree;
    }
    /**
     * Splits an array into separate arrays of expressions using the split entity. A split
     * will only be made if the split entity is not in brackets
     * @param {ExpressionNode[]} expressions 
     * @param {ExpressionEntity} splitEntity 
     * @returns {ExpressionNode[]}
     */

  }, {
    key: "split",
    value: function split(expressions, splitEntity) {
      return this.splitMultiple(expressions, [splitEntity]);
    }
    /**
     * Splits an array into separate arrays of expressions using the split entity. A split
     * will only be made if the split entity is not in brackets
     * @param {ExpressionNode[]} expressions 
     * @param {ExpressionEntity[]} splitEntities 
     * @returns {ExpressionNode[]}
     */

  }, {
    key: "splitMultiple",
    value: function splitMultiple(expressions, splitEntities) {
      var parts = [];
      var openParens = 0;
      var openBrace = 0;
      var openSquare = 0;
      var startPart = 0;

      for (var i = 0; i < expressions.length; i++) {
        if (i === startPart && expressions[i].isOneOf(splitEntities)) {
          startPart++;
        } else if (expressions[i].isOneOf(splitEntities) && i > startPart || i === expressions.length - 1) {
          if (openParens === 0 && openBrace === 0 && openSquare === 0 || i === expressions.length - 1 && (openParens === 1 && expressions[i].is(_enums.ExpressionEntity.CloseParenthesis) || openSquare === 1 && expressions[i].is(_enums.ExpressionEntity.CloseSquareBracket) || openBrace === 1 && expressions[i].is(_enums.ExpressionEntity.CloseBrace))) {
            var part = expressions.slice(startPart, expressions[i].isOneOf(splitEntities) ? i : i + 1);
            parts.push(part);
            startPart = i + 1;
          }
        } else if (expressions[i].is(_enums.ExpressionEntity.OpenParenthesis)) openParens++;else if (expressions[i].is(_enums.ExpressionEntity.CloseParenthesis)) openParens--;else if (expressions[i].is(_enums.ExpressionEntity.OpenBrace)) openBrace++;else if (expressions[i].is(_enums.ExpressionEntity.CloseBrace)) openBrace--;else if (expressions[i].is(_enums.ExpressionEntity.OpenSquareBracket)) openSquare++;else if (expressions[i].is(_enums.ExpressionEntity.CloseSquareBracket)) openSquare--;
      }

      return parts;
    }
    /**
     * Connects variables in a new statement to variables created in the block so far
     * @param {Statement} statement The statement being processed
     * @param {StatementBlock} block The block containing the statement
     */

  }, {
    key: "connectVariableUsages",
    value: function connectVariableUsages(statement, block) {
      var scopeBlock = block.getScope(); //if (!statement.isBlank() && statement.getFirstExpression().isOneOf([ExpressionEntity.FromKeyword, ExpressionEntity.ImportKeyword])) {

      if (!statement.isBlank() && statement.getFirstExpression().is(_enums.ExpressionEntity.ImportStatement)) {
        _classStaticPrivateMethodGet(StatementProcessor, StatementProcessor, _trackImports).call(StatementProcessor, statement, scopeBlock);
      }

      if (statement.isBlockStatement() && !statement.isBlank() && statement.getFirstExpression().is(_enums.ExpressionEntity.ForDefinitionStatement)) {
        block = _classStaticPrivateMethodGet(StatementProcessor, StatementProcessor, _updateForLoopBlock).call(StatementProcessor, block);
      }

      var variables = statement.getVariableUsages();
      var variableMap = scopeBlock.getVariableMap();
      var moduleMap = scopeBlock.findAllModules();
      var directImports = new Map(Array.from(moduleMap.values()).flatMap(function (mInfo) {
        return Array.from(mInfo.getDirectImports());
      }));
      var isGlobal = !statement.isBlank() && statement.getFirstExpression().is(_enums.ExpressionEntity.GlobalStatement);

      var _iterator = _createForOfIteratorHelper(variables),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              name = _step$value[0],
              usages = _step$value[1];

          var usageInfos = usages.map(function (v) {
            return new _identifiers.UsageInfo(v, block, isGlobal);
          });

          if (isGlobal) {
            scopeBlock.addGlobalVar(name);
          }

          if (!variableMap.has(name)) {
            if (moduleMap.has(name)) {
              usageInfos[0].getVariable().setDataType((0, _utils.typeByEntity)(moduleMap.get(name).getEntity()));
            } else if (directImports.has(name)) {
              var dType = _utils.builtInReturnLookup.has(directImports.get(name).entity) ? _utils.builtInReturnLookup.get(directImports.get(name).entity) : _enums.DataType.Unknown;
              usageInfos[0].getVariable().setDataType(dType);
            }

            var vInfo = new _identifiers.VariableInfo(usageInfos[0], statement, block);

            if (usageInfos.length > 1) {
              vInfo.addUsages(usageInfos.slice(1));
            }

            if (_classStaticPrivateMethodGet(this, StatementProcessor, _couldBeInHigherScope).call(this, block, name, vInfo.getUsages()[0].getVariable())) {
              if (this.checkIfVariableExistsInParent(vInfo, block)) {
                continue;
              }
            }

            variableMap.set(name, vInfo);
          } else {
            variableMap.get(name).addUsages(usageInfos);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * 
     * @param {StatementBlock} block 
     * @param {String} name 
     * @param {VariableExpression} firstUsageVar 
     */

  }, {
    key: "connectUserDefinedFunctions",
    value:
    /**
     * Connects calls to user defined functions to the function expression that stores
     * return type information
     * @param {Statement} statement
     * @param {ScopeBlock} scopeBlock
     */
    function connectUserDefinedFunctions(statement, scopeBlock) {
      var functions = scopeBlock.findAllFunctions();
      var statementExpressions = statement.getExpressions();

      var _iterator2 = _createForOfIteratorHelper(statementExpressions),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var e = _step2.value;
          var funcCalls = e.getExpressionsOfKind(_enums.ExpressionEntity.UserDefinedFunctionCall);

          var _iterator3 = _createForOfIteratorHelper(funcCalls),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var call = _step3.value;
              var callName = call.getFunctionName();

              if (functions.has(callName)) {
                var funcDef = functions.get(callName);
                call.setDataType(funcDef.getDataType());
                funcDef.addObserver(call);
              } else {
                scopeBlock.addUnconnectedFunctionCall(call);
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    /**
     * Checks if the variable already exists in a higher scope and if so, adds usages to higher scope
     * @param {VariableInfo} vInfo 
     * @param {StatementBlock}
     * @returns {Boolean} True if the variable does exit in a parent, false otherwise
     */

  }, {
    key: "checkIfVariableExistsInParent",
    value: function checkIfVariableExistsInParent(vInfo, block) {
      var parent = block.getScope().getParentBlock(); // Check that vInfo first usage is not assigned or changed

      var varExp = vInfo.getUsages()[0].getVariable();

      if (!vInfo.isParameter() && (block.getScope().getGlobalVars().has(vInfo.getName()) || !varExp.isAssignedOrChanged() || varExp.isObjectOfMethodCall() || varExp.isSubscripted())) {
        while (parent !== undefined && parent.getScope() !== undefined) {
          var parentVars = parent.getScope().getVariableMap();

          if (parentVars.has(vInfo.getName())) {
            // Set the previous usages to all in the parent's vInfo
            var parentVInfo = parentVars.get(vInfo.getName());
            vInfo.setDefinedInBlock(parentVInfo.getDefinedInBlock());
            var lastUsages = parentVInfo.getUsages();
            vInfo.insertUsages(lastUsages);
            return true;
          }

          parent = parent.getScope().getParentBlock();
        }
      }

      return false;
    } //#region - definition statements

    /**
     * Helper method to check if the statement is a block definition.
     * @param {ExpressionNode} expressions 
     * @returns {Boolean} True if the statement is a block definition, false otherwise.
     */

  }, {
    key: "checkForListComp",
    value:
    /**
     * 
     * @param {ExpressionNode[]} expressions 
     * @returns {ExpressionNode[][]}
     */
    function checkForListComp(expressions) {
      var parts = this.split(expressions, _enums.ExpressionEntity.Comma);
      var merged = [];

      for (var i = 0; i < parts.length; i++) {
        if (i < parts.length - 1 && (0, _utils.containsExpression)(parts[i], _enums.ExpressionEntity.ForDefinition) && (0, _utils.containsExpression)(parts[i + 1], _enums.ExpressionEntity.InKeyword)) {
          merged.push(parts[i].concat(expressions[merged.length + parts[i].length], parts[i + 1]));
          i++;
        } else {
          merged.push(parts[i]);
        }
      }

      return merged;
    }
    /**
     * Helper method. Checks whether the subscription is a slice
     * @param {ExpressionNode[][]} parts A 2D array
     * @param {ExpressionNode[]} expressions All the expressions on the line
     * @param {Number} openIndex The index of the opening bracket
     * @param {Number} closeIndex The index of the closing bracket
     * @returns {Boolean} True if the subscription is a slice, false if it is an index or key
     */
    //#endregion

  }]);

  return StatementProcessor;
}();

exports.StatementProcessor = StatementProcessor;

function _couldBeInHigherScope(block, name, firstUsageVar) {
  //if (firstUsageVar.isAssignedOrChanged() && !firstUsageVar.isObjectOfMethodCall() && !firstUsageVar.isSubscripted()) return false;
  var scopeBlock = block.getScope();

  while (scopeBlock !== undefined) {
    if (scopeBlock.getVariableMap().has(name)) {
      if (!firstUsageVar.isAssignedOrChanged() || firstUsageVar.isObjectOfMethodCall() || firstUsageVar.isSubscripted()) return true;
    } else if (scopeBlock.getGlobalVars().has(name)) {
      return true;
    }

    scopeBlock = scopeBlock.getParentBlock();

    if (scopeBlock !== undefined) {
      scopeBlock = scopeBlock.getScope();
    }
  }

  return false; // This is the first instance in this scope and there isn't already a global variable, and its assigned

  /*if (firstUsageVar.isAssignedOrChanged() && !scopeBlock.getVariableMap().has(name) && !scopeBlock.getGlobalVars().has(name)) {
      return false;
  }
  return !block.isScopeBlock() || scopeBlock.getGlobalVars().has(name) || !firstUsageVar.isAssignedOrChanged();*/
}

function _updateForLoopBlock(block) {
  var childBlocks = block.getChildBlocks();

  if (childBlocks.length > 0 && childBlocks[childBlocks.length - 1].getBlockEntity() === _enums.ExpressionEntity.ForDefinition) {
    block = childBlocks[childBlocks.length - 1];
  }

  return block;
}

function _trackImports(statement, scopeBlock) {
  var expressions = statement.getRawExpressions();
  var moduleMap = scopeBlock.getModuleMap();
  var modules = [];
  var asFound = false;

  var _iterator5 = _createForOfIteratorHelper(expressions),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var e = _step5.value;

      if (e.isOneOf([_enums.ExpressionEntity.ModuleName, _enums.ExpressionCategory.BuiltInModules])) {
        if (!asFound) {
          var moduleInfo = new _identifiers.ModuleInfo(e.getTextValue(), e.getEntity());
          modules.push(moduleInfo);
        } else {
          var _iterator6 = _createForOfIteratorHelper(modules),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var _m = _step6.value;

              if (_m.getEntity() === e.getEntity()) {
                _m.setAlias(e.getTextValue());
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      } else if (e.is(_enums.ExpressionEntity.AsKeyword)) {
        asFound = e;
      } else if (e.isOneOf([_enums.ExpressionCategory.ModuleProperties, _enums.ExpressionEntity.NamedImport])) {
        var _iterator7 = _createForOfIteratorHelper(modules),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _m2 = _step7.value;

            _m2.addDirectImport(e.getTextValue(), (0, _identifiers.directImport)(e.getEntity(), e.getCategory()));
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      } else if (e.is(_enums.ExpressionEntity.ImportAll)) {
        var _iterator8 = _createForOfIteratorHelper(modules),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _m3 = _step8.value;

            _m3.setImportAll();
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  for (var _i2 = 0, _modules = modules; _i2 < _modules.length; _i2++) {
    var m = _modules[_i2];
    moduleMap.set(m.getAlias(), m);
  }
}

function _isDefinitionStatement(expressions) {
  return expressions.length > 0 && expressions[0].is(_enums.ExpressionCategory.BlockDefinitions) && !_classStaticPrivateMethodGet(this, StatementProcessor, _definitionKeywordUsedAsVariableName).call(this, expressions);
}

function _definitionKeywordUsedAsVariableName(expressions) {
  if (expressions.length === 1) return false;
  var assignIndex = (0, _utils.indexOfExpression)(expressions, _enums.ExpressionEntity.AssignmentOperator);
  if (assignIndex === -1) return false;
  if (assignIndex === 1) return true; // multiple assignments
  else if (expressions[1].is(_enums.ExpressionEntity.Comma) && assignIndex % 2 === 1) {
    return true;
  }
  return false;
}

function _definitionFactory(expressions) {
  var textValue = (0, _utils.getTextOfExpressions)(expressions);

  switch (expressions[0].getEntity()) {
    case _enums.ExpressionEntity.FunctionDefinition:
      // DOESN'T HANDLE METHODS OR MAGIC METHODS
      return new _ast.FunctionDefinitionStatement(textValue, expressions);

    case _enums.ExpressionEntity.IfDefinition:
      return new _ast.BlockDefinitionStatement(textValue, expressions, _enums.ExpressionEntity.IfDefinitionStatement);

    case _enums.ExpressionEntity.ElifDefinition:
      return new _ast.BlockDefinitionStatement(textValue, expressions, _enums.ExpressionEntity.ElifDefinitionStatement);

    case _enums.ExpressionEntity.WhileDefinition:
      return new _ast.BlockDefinitionStatement(textValue, expressions, _enums.ExpressionEntity.WhileDefinitionStatement);

    case _enums.ExpressionEntity.ForDefinition:
      return new _ast.BlockDefinitionStatement(textValue, expressions, _enums.ExpressionEntity.ForDefinitionStatement);

    case _enums.ExpressionEntity.ExceptDefinition:
      return new _ast.BlockDefinitionStatement(textValue, expressions, _enums.ExpressionEntity.ExceptDefinitionStatement);

    case _enums.ExpressionEntity.ElseDefinition:
      return new _ast.BlockDefinitionStatement(textValue, expressions, _enums.ExpressionEntity.ElseDefinitionStatement);

    case _enums.ExpressionEntity.TryDefinition:
      return new _ast.BlockDefinitionStatement(textValue, expressions, _enums.ExpressionEntity.TryDefinitionStatement);

    case _enums.ExpressionEntity.FinallyDefinition:
      return new _ast.BlockDefinitionStatement(textValue, expressions, _enums.ExpressionEntity.FinallyDefinitionStatement);
    //case ExpressionEntity.ClassDefinition:
    //throw new Error("Class definition expression not implemented");

    case _enums.ExpressionEntity.LambdaDefinition:
      return new _ast.LambdaExpression(textValue, expressions);

    case _enums.ExpressionEntity.WithKeyword:
      return new _ast.BlockDefinitionStatement(textValue, expressions, _enums.ExpressionEntity.WithDefinitionStatement);

    default:
      return expressions;
  }
}

function _processGroups(expressions) {
  var brackets = _classStaticPrivateMethodGet(this, StatementProcessor, _findAllMatchedBrackets).call(this, expressions); // Sort by left to right


  brackets.sort(function (a, b) {
    return a[0] - b[0];
  });

  if (brackets.length === 0) {
    return expressions;
  }

  var expressionTree = expressions;
  var oldBrackets;

  while (brackets.length > 0 && (oldBrackets === undefined || brackets.length !== oldBrackets.length)) {
    var firstOpenGroup = expressionTree[brackets[0][0]];

    if (firstOpenGroup.is(_enums.ExpressionEntity.OpenParenthesis)) {
      expressionTree = _classStaticPrivateMethodGet(this, StatementProcessor, _processParentheses).call(this, brackets[0], expressionTree);
    } else if (firstOpenGroup.is(_enums.ExpressionEntity.OpenSquareBracket)) {
      expressionTree = _classStaticPrivateMethodGet(this, StatementProcessor, _processSquareBrackets).call(this, brackets[0], expressionTree);
    } else {
      expressionTree = _classStaticPrivateMethodGet(this, StatementProcessor, _processBraces).call(this, brackets[0], expressionTree);
    }

    oldBrackets = brackets;
    brackets = _classStaticPrivateMethodGet(this, StatementProcessor, _findAllMatchedBrackets).call(this, expressionTree); // Sort by left to right

    brackets.sort(function (a, b) {
      return a[0] - b[0];
    });
  }

  return expressionTree;
}

function _findAllMatchedBrackets(expressions) {
  var matched = [];
  var openPairs = [];

  for (var i = 0; i < expressions.length; i++) {
    if ((0, _utils.isOpenBracket)(expressions[i].getEntity())) {
      openPairs.push({
        openEntity: expressions[i].getEntity(),
        closeEntity: (0, _utils.getClosingEntity)(expressions[i].getEntity()),
        openIndex: i,
        closeIndex: -1
      });
    } else if ((0, _utils.isCloseBracket)(expressions[i].getEntity())) {
      var o = openPairs.length - 1;

      while (o >= 0) {
        if (openPairs[o].closeEntity === expressions[i].getEntity()) {
          openPairs[o].closeIndex = i;
          matched.push([openPairs[o].openIndex, openPairs[o].closeIndex]);
          openPairs.splice(o, 1);
          break;
        }

        o--;
      }
    }
  }

  return matched;
}

function _processParentheses(brackets, expressions) {
  var openIndex = brackets[0];
  var closeIndex = brackets[1]; // function call - check for special cases

  if (openIndex > 0 && expressions[openIndex - 1].isOneOf([_enums.ExpressionCategory.BuiltInFunctions, _enums.ExpressionEntity.FunctionName])) {
    var entity = expressions[openIndex - 1].is(_enums.ExpressionCategory.BuiltInFunctions) ? _enums.ExpressionEntity.BuiltInFunctionCall : _enums.ExpressionEntity.UserDefinedFunctionCall;

    var functionCall = _classStaticPrivateMethodGet(this, StatementProcessor, _multipartExpressionFactory).call(this, expressions.slice(openIndex - 1, closeIndex + 1), entity);

    return expressions.slice(0, openIndex - 1).concat([functionCall], expressions.slice(closeIndex + 1));
  } // method call
  else if (openIndex > 2 && expressions[openIndex - 1].isOneOf([_enums.ExpressionCategory.BuiltInMethods, _enums.ExpressionEntity.MethodName, _enums.ExpressionCategory.MagicMethods, _enums.ExpressionCategory.ModuleFunctions]) && expressions[openIndex - 2].is(_enums.ExpressionEntity.Dot)) {
    var _entity = expressions[openIndex - 1].is(_enums.ExpressionEntity.MethodName) ? _enums.ExpressionEntity.UserDefinedMethodCall : _enums.ExpressionEntity.BuiltInMethodCall;

    var methodCall = _classStaticPrivateMethodGet(this, StatementProcessor, _multipartExpressionFactory).call(this, expressions.slice(openIndex - 3, closeIndex + 1), _entity);

    return expressions.slice(0, openIndex - 3).concat([methodCall], expressions.slice(closeIndex + 1));
  } // exception call
  else if (openIndex > 0 && expressions[openIndex - 1].is(_enums.ExpressionEntity.ExceptionName)) {
    var exceptionCall = _classStaticPrivateMethodGet(this, StatementProcessor, _multipartExpressionFactory).call(this, expressions.slice(openIndex - 1, closeIndex + 1), _enums.ExpressionEntity.ExceptionCall);

    return expressions.slice(0, openIndex - 1).concat([exceptionCall], expressions.slice(closeIndex + 1));
  } // Something between the brackets
  else if (closeIndex > openIndex + 1) {
    var betweenBrackets = expressions.slice(openIndex + 1, closeIndex);
    var parts = this.split(betweenBrackets, _enums.ExpressionEntity.Comma); // tuple definition

    if (parts.length > 1) {
      var tuple = _classStaticPrivateMethodGet(this, StatementProcessor, _multipartExpressionFactory).call(this, expressions.slice(openIndex, closeIndex + 1), _enums.ExpressionEntity.TupleDefinition, parts);

      return expressions.slice(0, openIndex).concat([tuple], expressions.slice(closeIndex + 1));
    }
  } // Group


  var group = _classStaticPrivateMethodGet(this, StatementProcessor, _multipartExpressionFactory).call(this, expressions.slice(openIndex, closeIndex + 1), _enums.ExpressionEntity.GroupStatement);

  return expressions.slice(0, openIndex).concat([group], expressions.slice(closeIndex + 1));
}

function _processSquareBrackets(brackets, expressions) {
  var openIndex = brackets[0];
  var closeIndex = brackets[1]; // parts

  var parts = [];
  var betweenBrackets = [];

  if (closeIndex > openIndex + 1) {
    betweenBrackets = expressions.slice(openIndex + 1, closeIndex); //parts = this.split(betweenBrackets, ExpressionEntity.Comma);

    parts = this.checkForListComp(betweenBrackets); // Add similar to function method call args
  } // list definition


  if (openIndex === 0 || parts.length === 0 || expressions[openIndex - 1].isOneOf([_enums.ExpressionCategory.ComparisonOperators, _enums.ExpressionCategory.LogicalOperators, _enums.ExpressionCategory.MathsOperators, _enums.ExpressionEntity.OpenParenthesis, _enums.ExpressionEntity.OpenSquareBracket, _enums.ExpressionEntity.OpenBrace, _enums.ExpressionEntity.Comma, _enums.ExpressionEntity.Colon, _enums.ExpressionEntity.Separator, _enums.ExpressionCategory.OtherKeywords, _enums.ExpressionEntity.ContinuationLine])) {
    var list = _classStaticPrivateMethodGet(this, StatementProcessor, _multipartExpressionFactory).call(this, expressions.slice(openIndex, closeIndex + 1), _enums.ExpressionEntity.ListDefinition, parts);

    return expressions.slice(0, openIndex).concat([list], expressions.slice(closeIndex + 1));
  } else {
    var colonParts = this.split(betweenBrackets, _enums.ExpressionEntity.Colon); // slice / index / key

    var subscriptor = _classStaticPrivateMethodGet(this, StatementProcessor, _isSlice).call(this, colonParts, expressions, openIndex, closeIndex) ? _classStaticPrivateMethodGet(this, StatementProcessor, _multipartExpressionFactory).call(this, expressions.slice(openIndex, closeIndex + 1), _enums.ExpressionEntity.Slice, colonParts) : _classStaticPrivateMethodGet(this, StatementProcessor, _multipartExpressionFactory).call(this, expressions.slice(openIndex, closeIndex + 1), _enums.ExpressionEntity.IndexKey);
    var start = openIndex - 1;

    while (start >= 0 && !expressions[start].isOneOf([_enums.ExpressionCategory.Identifiers, _enums.ExpressionCategory.BuiltInFunctions, _enums.ExpressionCategory.CompoundTypes, _enums.ExpressionEntity.BuiltInFunctionCall, _enums.ExpressionEntity.BuiltInMethodCall, _enums.ExpressionEntity.UserDefinedFunctionCall, _enums.ExpressionEntity.UserDefinedMethodCall, _enums.ExpressionEntity.SubscriptedExpression])) {
      start--;
    }

    start = Math.max(start, 0);

    var subscripted = _classStaticPrivateMethodGet(this, StatementProcessor, _multipartExpressionFactory).call(this, [].concat(_toConsumableArray(expressions.slice(start, openIndex)), [subscriptor]), _enums.ExpressionEntity.SubscriptedExpression);

    return expressions.slice(0, start).concat([subscripted], expressions.slice(closeIndex + 1));
  }
}

function _isSlice(parts, expressions, openIndex, closeIndex) {
  return parts.length > 1 || expressions[openIndex + 1].is(_enums.ExpressionEntity.Colon) || expressions[closeIndex - 1].is(_enums.ExpressionEntity.Colon);
}

function _processBraces(brackets, expressions) {
  var openIndex = brackets[0];
  var closeIndex = brackets[1];
  var expression;

  if (closeIndex === openIndex + 1) {
    expression = _classStaticPrivateMethodGet(this, StatementProcessor, _multipartExpressionFactory).call(this, expressions.slice(openIndex, closeIndex + 1), _enums.ExpressionEntity.DictDefinition);
  } else {
    var betweenBrackets = expressions.slice(openIndex + 1, closeIndex);
    var entries = this.split(betweenBrackets, _enums.ExpressionEntity.Comma);
    var keyValues = [];

    var _iterator9 = _createForOfIteratorHelper(entries),
        _step9;

    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var entry = _step9.value;
        var kV = this.split(entry, _enums.ExpressionEntity.Colon);

        if (kV.length === 2) {
          keyValues.push(kV);
        }
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }

    if (keyValues.length === entries.length) {
      expression = _classStaticPrivateMethodGet(this, StatementProcessor, _multipartExpressionFactory).call(this, expressions.slice(openIndex, closeIndex + 1), _enums.ExpressionEntity.DictDefinition, keyValues);
    } else {
      expression = _classStaticPrivateMethodGet(this, StatementProcessor, _multipartExpressionFactory).call(this, expressions.slice(openIndex, closeIndex + 1), _enums.ExpressionEntity.SetDefinition, entries);
    }
  }

  return expressions.slice(0, openIndex).concat([expression], expressions.slice(closeIndex + 1));
}

function _multipartExpressionFactory(children, entity) {
  var elements = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var textValue = (0, _utils.getTextOfExpressions)(children);

  switch (entity) {
    case _enums.ExpressionEntity.BuiltInFunctionCall:
      return new _ast.BuiltInFunctionCall(textValue, children);

    case _enums.ExpressionEntity.UserDefinedFunctionCall:
      return new _ast.UserDefinedFunctionCall(textValue, children);

    case _enums.ExpressionEntity.BuiltInMethodCall:
      return new _ast.BuiltInMethodCall(textValue, children);

    case _enums.ExpressionEntity.UserDefinedMethodCall:
      return new _ast.UserDefinedMethodCall(textValue, children);

    case _enums.ExpressionEntity.ExceptionCall:
      return new _ast.ExceptionCall(textValue, children);

    case _enums.ExpressionEntity.TupleDefinition:
    case _enums.ExpressionEntity.ListDefinition:
    case _enums.ExpressionEntity.SetDefinition:
    case _enums.ExpressionEntity.DictDefinition:
      return new _ast.CompoundTypeExpression(textValue, children, entity, elements);

    case _enums.ExpressionEntity.GroupStatement:
      return new _ast.GroupElement(textValue, children);

    case _enums.ExpressionEntity.Slice:
      return new _ast.SliceElement(textValue, children, elements);

    case _enums.ExpressionEntity.IndexKey:
      return new _ast.IndexKeyElement(textValue, children);

    case _enums.ExpressionEntity.SubscriptedExpression:
      return new _ast.SubscriptedElement(textValue, children);

    case _enums.ExpressionEntity.CalculatedExpression:
      return new _ast.CalculatedExpression(textValue, children);

    case _enums.ExpressionEntity.ComparisonExpression:
      return new _ast.ComparisonExpression(textValue, children);

    case _enums.ExpressionEntity.IteratorExpression:
      return new _ast.IteratorExpression(textValue, children);

    case _enums.ExpressionEntity.BooleanExpression:
      return new _ast.BooleanExpression(textValue, children);

    default:
      throw new Error("Unknown multipart expression type");
  }
}

function _processCalculations(expressions) {
  expressions = _classStaticPrivateMethodGet(this, StatementProcessor, _combineStringLiterals).call(this, expressions);
  expressions = _classStaticPrivateMethodGet(this, StatementProcessor, _combinePropertyCalls).call(this, expressions); // negative entities

  var nextIndex = _classStaticPrivateMethodGet(this, StatementProcessor, _findNextCalculationEntity).call(this, expressions);

  while (nextIndex > -1) {
    var start = nextIndex > 0 && !expressions[nextIndex - 1].isOneOf([_enums.ExpressionCategory.MathsOperators, _enums.ExpressionCategory.LogicalOperators, _enums.ExpressionCategory.ComparisonOperators, _enums.ExpressionCategory.OtherKeywords]) ? nextIndex - 1 : nextIndex;

    var calcNode = _classStaticPrivateMethodGet(this, StatementProcessor, _multipartExpressionFactory).call(this, expressions.slice(start, nextIndex + 2), _enums.ExpressionEntity.CalculatedExpression);

    expressions = expressions.slice(0, start).concat([calcNode], expressions.slice(nextIndex + 2));
    nextIndex = _classStaticPrivateMethodGet(this, StatementProcessor, _findNextCalculationEntity).call(this, expressions);
  }

  return expressions;
}

function _combinePropertyCalls(expressions) {
  if (expressions.length < 3) return expressions;
  var i = 1;

  while (i < expressions.length - 1) {
    if (expressions[i].is(_enums.ExpressionEntity.Dot)
    /*&& expressions[i+1].isOneOf([ExpressionCategory.ModuleProperties, ExpressionCategory.Properties])*/
    ) {
      var newTextValue = (0, _utils.getTextOfExpressions)([expressions[i - 1], expressions[i + 1]]);
      var newExp = new _ast.PropertyCallNode(newTextValue, [expressions[i - 1], expressions[i], expressions[i + 1]], _enums.ExpressionEntity.PropertyCallExpression, _enums.ExpressionCategory.MultipartValue);
      expressions = expressions.slice(0, i - 1).concat([newExp], expressions.slice(i + 2));
      i--;
    } else {
      i++;
    }
  }

  return expressions;
}

function _combineStringLiterals(expressions) {
  if (expressions.length < 2) return expressions; //expressions = expressions.filter(exp => !exp.is(ExpressionEntity.ContinuationLine));

  var i = 0;

  while (i < expressions.length - 1) {
    if (expressions[i].isStringLiteral() && expressions[i + 1].isStringLiteral()) {
      var newTextValue = (0, _utils.getTextOfExpressions)([expressions[i], expressions[i + 1]]);
      var newExp = new _ast.CombinedStringLiteral(newTextValue, [expressions[i], expressions[i + 1]]);
      expressions = expressions.slice(0, i).concat([newExp], expressions.slice(i + 2));
    } else {
      i++;
    }

    ;
  }

  return expressions;
}

function _findNextCalculationEntity(expressions) {
  // **
  // * / // %
  // + -
  var multDivide = [];
  var addSubtract = []; // Start from 1. First expression can't be an operator.

  for (var i = 0; i < expressions.length; i++) {
    if (expressions[i].is(_enums.ExpressionEntity.ExponentOperator)) {
      return i;
    } else if (expressions[i].isOneOf([_enums.ExpressionEntity.MultiplyOperator, _enums.ExpressionEntity.DivideOperator, _enums.ExpressionEntity.IntDivideOperator, _enums.ExpressionEntity.ModulusOperator])) {
      multDivide.push(i);
    } else if (expressions[i].isOneOf([_enums.ExpressionEntity.AddOperator, _enums.ExpressionEntity.SubtractOperator])) {
      addSubtract.push(i);
    }
  }

  if (multDivide.length > 0) return multDivide[0];else if (addSubtract.length > 0) return addSubtract[0];
  return -1;
}

function _processComparisons(expressions) {
  var nextIndex = _classStaticPrivateMethodGet(this, StatementProcessor, _findNextComparisonEntity).call(this, expressions);

  while (nextIndex > 0) {
    // try enumerate
    var start = nextIndex - 1;
    var exp = void 0;

    if (expressions[nextIndex].is(_enums.ExpressionEntity.InKeyword) && start > 1 && expressions[start - 1].is(_enums.ExpressionEntity.Comma)) {
      start = start - 2;
      exp = _classStaticPrivateMethodGet(this, StatementProcessor, _multipartExpressionFactory).call(this, expressions.slice(start, nextIndex + 2), _enums.ExpressionEntity.IteratorExpression);
    } else if (expressions[nextIndex].is(_enums.ExpressionEntity.InKeyword) && nextIndex === 1 && nextIndex + 1 < expressions.length && expressions[nextIndex + 1].is(_enums.ExpressionEntity.BuiltInFunctionCall) && expressions[nextIndex + 1].getFunctionExpression().isOneOf([_enums.ExpressionEntity.EnumerateFunction])) {
      start = 0;
      exp = _classStaticPrivateMethodGet(this, StatementProcessor, _multipartExpressionFactory).call(this, expressions.slice(start, nextIndex + 2), _enums.ExpressionEntity.IteratorExpression);
    } else {
      exp = _classStaticPrivateMethodGet(this, StatementProcessor, _multipartExpressionFactory).call(this, expressions.slice(start, nextIndex + 2), _enums.ExpressionEntity.ComparisonExpression);
    }

    expressions = expressions.slice(0, start).concat([exp], expressions.slice(nextIndex + 2));
    nextIndex = _classStaticPrivateMethodGet(this, StatementProcessor, _findNextComparisonEntity).call(this, expressions);
  }

  return expressions;
}

function _findNextComparisonEntity(expressions) {
  for (var i = 0; i < expressions.length; i++) {
    if (expressions[i].is(_enums.ExpressionCategory.ComparisonOperators)) {
      return i;
    }
  }

  return -1;
}

function _processBooleans(expressions) {
  var nextIndex = _classStaticPrivateMethodGet(this, StatementProcessor, _findNextLogicalOperator).call(this, expressions);

  while (nextIndex > -1) {
    var numParts = expressions[nextIndex].is(_enums.ExpressionEntity.NotOperator) ? 2 : 3;
    var start = numParts === 2 ? nextIndex : nextIndex - 1;
    var op = start >= 0 ? expressions.slice(start, nextIndex + 2) : expressions.slice(nextIndex, nextIndex + 2);

    var boolNode = _classStaticPrivateMethodGet(this, StatementProcessor, _multipartExpressionFactory).call(this, op, _enums.ExpressionEntity.BooleanExpression);

    expressions = start >= 0 ? expressions.slice(0, start).concat([boolNode], expressions.slice(nextIndex + 2)) : expressions.slice(0, nextIndex).concat([boolNode], expressions.slice(nextIndex + 2)); // will keep selecting the same

    nextIndex = _classStaticPrivateMethodGet(this, StatementProcessor, _findNextLogicalOperator).call(this, expressions);
  }

  return expressions;
}

function _findNextLogicalOperator(expressions) {
  var ands = [];
  var ors = [];

  for (var i = 0; i < expressions.length; i++) {
    if (expressions[i].is(_enums.ExpressionEntity.NotOperator)) {
      return i;
    } else if (expressions[i].is(_enums.ExpressionEntity.AndOperator)) {
      ands.push(i);
    } else if (expressions[i].is(_enums.ExpressionEntity.OrOperator)) {
      ors.push(i);
    }
  }

  if (ands.length > 0) return ands[0];else if (ors.length > 0) return ors[0];else return -1;
}

function _processTernary(expressions) {
  // Problem here with returned ternary
  var firstIf = (0, _utils.indexOfExpression)(expressions, _enums.ExpressionEntity.IfDefinition);

  while (firstIf > -1 && expressions.length >= firstIf + 3) {
    var hasElse = expressions[firstIf + 2].is(_enums.ExpressionEntity.ElseDefinition);

    if (hasElse) {
      var ternarySlice = expressions.slice(firstIf - 1, firstIf + 4);
      var textValue = (0, _utils.getTextOfExpressions)(ternarySlice);
      var ternaryExp = new _ast.TernaryExpression(textValue, ternarySlice);
      expressions = expressions.slice(0, firstIf - 1).concat([ternaryExp], expressions.slice(firstIf + 4));
      firstIf = (0, _utils.indexOfExpression)(expressions, _enums.ExpressionEntity.IfDefinition);
    } else {
      break;
    }
  }

  return expressions;
}

function _processListComprehension(expressions) {
  while (expressions.length >= 3 && expressions[1].is(_enums.ExpressionEntity.ForDefinition)) {
    var hasCondition = expressions.length >= 5 && expressions[3].is(_enums.ExpressionEntity.IfDefinition);
    var compSlice = expressions.slice(0, hasCondition ? 5 : 3);
    var textValue = (0, _utils.getTextOfExpressions)(compSlice);

    if (compSlice[2].is(_enums.ExpressionEntity.ComparisonExpression)) {
      compSlice[2] = expressions[2].convertToIterator();
    }

    var compExp = new _ast.ListComprehensionExpression(textValue, compSlice);
    expressions = [compExp].concat(expressions.slice(hasCondition ? 5 : 3));
  }

  return expressions;
}

function _processAssignment(expressions) {
  var nextIndex = _classStaticPrivateMethodGet(this, StatementProcessor, _findNextAssignment).call(this, expressions);

  while (nextIndex > -1) {
    var start = _classStaticPrivateMethodGet(this, StatementProcessor, _getIndexOfAssignedVariables).call(this, expressions, nextIndex - 1);

    var slice = expressions.slice(start);
    var textValue = (0, _utils.getTextOfExpressions)(slice);
    var assignExp = expressions[nextIndex].is(_enums.ExpressionEntity.AssignmentOperator) ? new _ast.AssignmentExpression(textValue, slice) : new _ast.ChangeExpression(textValue, slice);
    expressions = expressions.slice(0, start).concat([assignExp]);
    nextIndex = _classStaticPrivateMethodGet(this, StatementProcessor, _findNextAssignment).call(this, expressions);
  }

  return expressions;
}

function _getIndexOfAssignedVariables(expressions, start) {
  // Go backwards until hit a keyword or operator that isn't a comma
  var index = -1;

  for (var i = start; i >= 0; i--) {
    if (expressions[i].isChangeOperator() || expressions[i].isOneOf([_enums.ExpressionCategory.OtherKeywords, _enums.ExpressionCategory.BlockDefinitions])) {
      // exit
      break;
    }

    index = i;
  }

  return Math.max(index, 0);
}

function _findNextAssignment(expressions) {
  for (var i = expressions.length - 1; i > 0; i--) {
    if (expressions[i].isChangeOperator()) {
      return i;
    }
  }

  return -1;
}

function _processKeywordStatements(expressions) {
  if (expressions.length > 0) {
    if (expressions[0].is(_enums.ExpressionEntity.ReturnKeyword)) {
      expressions = [new _ast.ReturnStatement((0, _utils.getTextOfExpressions)(expressions), expressions)];
    } else if (expressions[0].isOneOf([_enums.ExpressionEntity.ImportKeyword, _enums.ExpressionEntity.FromKeyword])) {
      expressions = [new _ast.ImportStatement((0, _utils.getTextOfExpressions)(expressions), expressions)];
    } else if (expressions[0].isOneOf([_enums.ExpressionEntity.GlobalKeyword, _enums.ExpressionEntity.AssertKeyword, _enums.ExpressionEntity.RaiseKeyword])) {
      expressions = [new _ast.KeywordStatement((0, _utils.getTextOfExpressions)(expressions), expressions)];
    }
  }

  return expressions;
}
},{"../problem-finder/symptom.js":12,"../utils/utils.js":14,"./ast.js":1,"./block.js":2,"./enums.js":4,"./identifiers.js":5,"./indent.js":6}],9:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Statement = exports.BlockStatement = void 0;

var _interfaces = require("./interfaces.js");

var _enums = require("./enums.js");

var _symptom = require("../problem-finder/symptom.js");

var _utils = require("../utils/utils.js");

var _ast = require("./ast.js");

var _block = require("./block.js");

var _rawtextprocessing = require("./rawtextprocessing.js");

var _constants = require("../utils/constants.js");

var _indent2 = require("./indent.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _rawText = /*#__PURE__*/new WeakMap();

var _lineNumbers = /*#__PURE__*/new WeakMap();

var _expressions = /*#__PURE__*/new WeakMap();

var _indentation = /*#__PURE__*/new WeakMap();

var _indent = /*#__PURE__*/new WeakMap();

var _expressionTree = /*#__PURE__*/new WeakMap();

var _completeProcessing = /*#__PURE__*/new WeakSet();

var _checkForSplitFunctionCalls = /*#__PURE__*/new WeakSet();

var _checkSymptoms = /*#__PURE__*/new WeakSet();

var _checkUnexpectedColon = /*#__PURE__*/new WeakSet();

var _checkAssignmentInBoolean = /*#__PURE__*/new WeakSet();

/**
 * A class representing a statement, which will most often be
 * a complete line of code, but may also be made up of multiple 
 * lines, such as when a long calculation is split over multiple
 * lines. The use of "statement" in this library does not quite
 * correspond to the technical definition of a statement in 
 * programming. For example, function declaration lines are treated
 * as statements.
 */
var Statement = /*#__PURE__*/function (_SymptomMonitor) {
  _inherits(Statement, _SymptomMonitor);

  var _super = _createSuper(Statement);

  /** @type {String} */
  // The raw text of the statement

  /** @type {Set<Number} */
  // The document line number(s) of the statement

  /** @type {ExpressionNode[]} */
  // The most basic expressions found on the line, ignoring comments

  /** @type {Number} */

  /** @type {Indent} */

  /** @type {ExpressionNode[]} */
  // The expressions summarised in tree form, with multipart expressions where needed e.g. function calls

  /**
   * Creates a new Statement. 
   * @param {String} rawText The raw text of the statement. 
   * @param {Number} firstLineNumber The document line number that the statement begins on.
   * @param {Indent} indent The indent object representing the number of spaces.
   * @param {ExpressionNode[]} expressions. Optional. The expression nodes that make up the statment.
   */
  function Statement(rawText, firstLineNumber, indent) {
    var _this;

    var _expressions2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    var isComplete = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

    _classCallCheck(this, Statement);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _checkAssignmentInBoolean);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _checkUnexpectedColon);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _checkSymptoms);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _checkForSplitFunctionCalls);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _completeProcessing);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _rawText, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _lineNumbers, {
      writable: true,
      value: new Set()
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _expressions, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _indentation, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _indent, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _expressionTree, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this), _rawText, rawText);

    _classPrivateFieldGet(_assertThisInitialized(_this), _lineNumbers).add(firstLineNumber);

    _classPrivateFieldSet(_assertThisInitialized(_this), _indent, indent);

    _classPrivateFieldSet(_assertThisInitialized(_this), _indentation, indent.getSpaceCount() + indent.getTabCount());

    if (_expressions2.length > 0) {
      if (_expressions2[_expressions2.length - 1].is(_enums.ExpressionEntity.ContinuationLine)) {
        _expressions2.pop();
      }

      if (_expressions2[0].isOneOf([_enums.ExpressionEntity.IfDefinition, _enums.ExpressionEntity.ElifDefinition, _enums.ExpressionEntity.WhileDefinition])) {
        _this.addRule(_classPrivateMethodGet(_assertThisInitialized(_this), _checkAssignmentInBoolean, _checkAssignmentInBoolean2));
      }
    }

    _classPrivateFieldSet(_assertThisInitialized(_this), _expressions, _expressions2);

    _this.addRule(_classPrivateMethodGet(_assertThisInitialized(_this), _checkSymptoms, _checkSymptoms2));

    if (isComplete) {
      _classPrivateMethodGet(_assertThisInitialized(_this), _completeProcessing, _completeProcessing2).call(_assertThisInitialized(_this));
    }

    return _this;
  }
  /**
   * Gets the raw text of the statement
   * @returns {String}
   */


  _createClass(Statement, [{
    key: "getRawText",
    value: function getRawText() {
      return _classPrivateFieldGet(this, _rawText);
    }
    /**
     * Sets the raw text of the statement.
     * @param {String} text The updated text.
     */

  }, {
    key: "updateRawText",
    value: function updateRawText(text) {
      _classPrivateFieldSet(this, _rawText, text);
    }
    /**
     * Gets the document line numbers that the statement occurs on.
     * @returns {Set<Number>} The document line numbers.
     */

  }, {
    key: "getLineNumbers",
    value: function getLineNumbers() {
      return _classPrivateFieldGet(this, _lineNumbers);
    }
    /**
     * Gets the line number of the first line in the statement.
     * @returns {Number} The line number or -1 if there are no line numbers
     */

  }, {
    key: "getFirstLineNumber",
    value: function getFirstLineNumber() {
      return _classPrivateFieldGet(this, _lineNumbers).size > 0 ? Math.min.apply(Math, _toConsumableArray(Array.from(_classPrivateFieldGet(this, _lineNumbers)))) : -1;
    }
    /**
     * Gets the line number of the last line in the statement.
     * @returns {Number} The line number or -1 if there are no line numbers
     */

  }, {
    key: "getLastLineNumber",
    value: function getLastLineNumber() {
      return _classPrivateFieldGet(this, _lineNumbers).size > 0 ? Math.max.apply(Math, _toConsumableArray(Array.from(_classPrivateFieldGet(this, _lineNumbers)))) : -1;
    }
    /**
     * Adds a line number that the statement occurs on.
     * @param {Number} lineNum The line number to add
     */

  }, {
    key: "addLineNumber",
    value: function addLineNumber(lineNum) {
      _classPrivateFieldGet(this, _lineNumbers).add(lineNum);
    }
    /**
     * Gets the number of spaces at the start of the statement.
     * @returns {Number}
     */

  }, {
    key: "getIndentation",
    value: function getIndentation() {
      return _classPrivateFieldGet(this, _indentation);
    }
    /**
     * Gets the indent object describing the indentation
     * @returns {Indent}
     */

  }, {
    key: "getIndent",
    value: function getIndent() {
      return _classPrivateFieldGet(this, _indent);
    }
    /**
     * Gets the parsed expressions in the statement (the AST version)
     * @returns {ExpressionNode[]}
     */

  }, {
    key: "getExpressions",
    value: function getExpressions() {
      return _classPrivateFieldGet(this, _expressionTree);
    }
    /**
     * Gets the raw expressions - the most low level expressions
     * @returns {ExpressionNode[]}
     */

  }, {
    key: "getRawExpressions",
    value: function getRawExpressions() {
      return _classPrivateFieldGet(this, _expressions);
    }
    /**
     * Checks if this statement contains the given expression
     * @param {ExpressionNode} expression 
     * @returns 
     */

  }, {
    key: "containsExpression",
    value: function containsExpression(expression) {
      var _iterator = _createForOfIteratorHelper(this.getExpressions()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var e = _step.value;

          if (e.contains(expression)) {
            return true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return false;
    }
    /**
     * Get all variable expressions in the statement
     * @returns {Map<String, VariableExpression>}
     */

  }, {
    key: "getVariableUsages",
    value: function getVariableUsages() {
      var usages = new Map();

      var _iterator2 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _expressionTree)),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var e = _step2.value;
          var variables = e.getVariableExpressions();

          var _iterator3 = _createForOfIteratorHelper(variables),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var v = _step3.value;

              if (!usages.has(v.getTextValue())) {
                usages.set(v.getTextValue(), []);
              }

              usages.get(v.getTextValue()).push(v);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return usages;
    }
    /**
     * Checks if this statement is blank
     * @returns {Boolean} True if the statement has no expressions, false otherwise
     */

  }, {
    key: "isBlank",
    value: function isBlank() {
      return _classPrivateFieldGet(this, _expressionTree).length === 0;
    }
    /**
     * Gets the first expression in the statement
     * @returns {ExpressionNode}
     * @throws Throws an error if the statement is blank
     */

  }, {
    key: "getFirstExpression",
    value: function getFirstExpression() {
      if (this.isBlank()) {
        throw new Error("Statement is blank. Could not get first expression.");
      }

      return _classPrivateFieldGet(this, _expressionTree)[0];
    }
    /**
     * Whether or not this is a block statement e.g. a for loop or an if branch
     * @returns {Boolean}
     */

  }, {
    key: "isBlockStatement",
    value: function isBlockStatement() {
      return false;
    }
    /**
     * Checks if this statement is the definition line of a block
     * @returns {Boolean}
     */

  }, {
    key: "isDefinitionOfBlock",
    value: function isDefinitionOfBlock() {
      if (_classPrivateFieldGet(this, _expressionTree).length === 0) {
        return false;
      } else {
        return _classPrivateFieldGet(this, _expressionTree)[0].is(_enums.ExpressionCategory.BlockDefinitionStatement);
      }
    }
    /**
     * Creates a new Statement from a SourceProcessor object
     * @param {SourceProcessor} processedSource A processed line of source code
     * @returns {Statement} A new Statement object
     */

  }, {
    key: "continueFromSource",
    value:
    /**
     * Adds another source line to the statement
     * @param {SourceProcessor} processedSource A processed line of source code that continues on from the existing statement
     */
    function continueFromSource(processedSource) {
      // add line number, expressions and text
      this.addLineNumber(processedSource.getLineNumber());

      _classPrivateMethodGet(this, _checkForSplitFunctionCalls, _checkForSplitFunctionCalls2).call(this, processedSource.getExpressions());

      this.updateRawText(_classPrivateFieldGet(this, _rawText) + "\n" + processedSource.getText());

      if (!processedSource.continuesOnNextLine()) {
        _classPrivateMethodGet(this, _completeProcessing, _completeProcessing2).call(this);
      }
    }
  }], [{
    key: "createFromSource",
    value: function createFromSource(processedSource) {
      return new Statement(processedSource.getText(), processedSource.getLineNumber(), processedSource.getIndent(), processedSource.getExpressions(), !processedSource.continuesOnNextLine());
    }
  }]);

  return Statement;
}(_interfaces.SymptomMonitor);

exports.Statement = Statement;

function _completeProcessing2() {
  _classPrivateFieldSet(this, _expressionTree, _rawtextprocessing.StatementProcessor.createTree(_classPrivateFieldGet(this, _expressions)));

  this.addRules([_classPrivateMethodGet(this, _checkUnexpectedColon, _checkUnexpectedColon2)]);
  this.checkRules(this);
}

function _checkForSplitFunctionCalls2(continuingExpressions) {
  if (continuingExpressions.length > 0 && continuingExpressions[0].is(_enums.ExpressionEntity.OpenParenthesis) && _classPrivateFieldGet(this, _expressions).length > 0 && _classPrivateFieldGet(this, _expressions)[_classPrivateFieldGet(this, _expressions).length - 1].is(_enums.ExpressionEntity.VariableName)) {
    var lastExpIndex = _classPrivateFieldGet(this, _expressions).length - 1;

    var lastExp = _classPrivateFieldGet(this, _expressions)[lastExpIndex];

    var info = (0, _utils.keywordLookup)(_classPrivateFieldGet(this, _expressions)[_classPrivateFieldGet(this, _expressions).length - 1]);

    if (info.category !== _enums.ExpressionCategory.BuiltInFunctions) {
      info = new _utils.ExpressionInfo(_enums.ExpressionEntity.FunctionName, _enums.ExpressionCategory.Identifiers);
    }

    _classPrivateFieldGet(this, _expressions)[lastExpIndex] = (0, _ast.expressionFactory)(lastExp.getTextValue(), info, lastExp.getStartLineNumber(), lastExp.getDocumentStartIndex(), lastExp.getDocumentEndIndex(), lastExp.getEndLineNumber());
  }

  _classPrivateFieldSet(this, _expressions, _classPrivateFieldGet(this, _expressions).concat(continuingExpressions));
}

function _checkSymptoms2(statement) {
  var expressions = statement.getRawExpressions();
  var symptoms = [];

  for (var i = 0; i < expressions.length; i++) {
    if (_classStaticPrivateMethodGet(Statement, Statement, _isAndOr).call(Statement, expressions, i)) {
      symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.NaturalLanguageBoolean, expressions, i, i + 1, {
        form: _constants.AND_OR
      })); //symptoms.push(SymptomFinder.createStatementSymptom(SymptomType.AndOr, expressions, i, i+1));
    }

    if (_classStaticPrivateMethodGet(Statement, Statement, _isOutOfPlaceBooleanOperator).call(Statement, expressions, i)) {
      symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.OutOfPlaceBooleanOperator, expressions, i, i));
    }

    if (_classStaticPrivateMethodGet(Statement, Statement, _isDoubleComparisonOperator).call(Statement, expressions, i)) {
      symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.DoubleComparisonOperators, expressions, i, i + 1));
    }
  }

  return symptoms;
}

function _checkUnexpectedColon2(statement) {
  var symptoms = [];

  var tree = _classPrivateFieldGet(statement, _expressionTree);

  for (var i = 0; i < tree.length; i++) {
    if (tree[i].is(_enums.ExpressionEntity.Colon)) {
      symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.UnexpectedColon, tree, 0, tree.length - 1, {
        before: i > 0 ? {
          type: tree[i - 1].getEntity().name,
          value: tree[i - 1].getTextValue()
        } : {
          type: _constants.EMPTY
        },
        after: i < tree.length - 1 ? {
          type: tree[i + 1].getEntity().name,
          value: tree[i + 1].getTextValue()
        } : {
          type: _constants.EMPTY
        }
      }));
    }
  }

  return symptoms;
}

function _checkAssignmentInBoolean2(statement) {
  var assignments = statement.getFirstExpression().getExpressionsOfKind(_enums.ExpressionEntity.AssignmentStatement);
  var symptoms = [];

  var _iterator12 = _createForOfIteratorHelper(assignments),
      _step12;

  try {
    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
      var assign = _step12.value;
      symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.AssignmentInBoolean, [assign], 0, 0));
    }
  } catch (err) {
    _iterator12.e(err);
  } finally {
    _iterator12.f();
  }

  return symptoms;
}

function _isAndOr(expressions, i) {
  return expressions[i].is(_enums.ExpressionEntity.AndOperator) && i < expressions.length - 1 && expressions[i + 1].is(_enums.ExpressionEntity.OrOperator);
}

function _isDoubleComparisonOperator(expressions, i) {
  return i < expressions.length - 1 && expressions[i].isOneOf([_enums.ExpressionEntity.AssignmentOperator, _enums.ExpressionCategory.ComparisonOperators]) && expressions[i + 1].isOneOf([_enums.ExpressionEntity.AssignmentOperator, _enums.ExpressionCategory.ComparisonOperators]);
}

function _isOutOfPlaceBooleanOperator(expressions, i) {
  if (!expressions[i].is(_enums.ExpressionCategory.LogicalOperators)) {
    return false;
  }

  if (!expressions[i].is(_enums.ExpressionEntity.NotOperator) && (i === 0 || expressions[i - 1].isOneOf([_enums.ExpressionCategory.LogicalOperators, _enums.ExpressionCategory.MathsOperators, _enums.ExpressionCategory.ComparisonOperators, _enums.ExpressionCategory.BlockDefinitions]))) {
    return true;
  }

  if (!expressions[i].is(_enums.ExpressionEntity.NotOperator) && i < expressions.length - 1 && expressions[i + 1].isOneOf([_enums.ExpressionCategory.LogicalOperators, _enums.ExpressionCategory.MathsOperators, _enums.ExpressionCategory.ComparisonOperators, _enums.ExpressionCategory.BlockDefinitions]) && !expressions[i + 1].is(_enums.ExpressionEntity.NotOperator)) {
    return true;
  }

  return false;
}

var _statements = /*#__PURE__*/new WeakMap();

var _checkBlockSymptoms = /*#__PURE__*/new WeakSet();

var _checkRedundantException = /*#__PURE__*/new WeakSet();

var _checkInfiniteLoop = /*#__PURE__*/new WeakSet();

var _checkForLoopIteratorModified = /*#__PURE__*/new WeakSet();

var BlockStatement = /*#__PURE__*/function (_Statement) {
  _inherits(BlockStatement, _Statement);

  var _super2 = _createSuper(BlockStatement);

  /** @type {Statement[]} */

  /**
   * Creates a new BlockStatement e.g an if branch or a for loop 
   * @param {Statement} definitionStatement The raw text of the statement. 
   * @param {String} scopeId The id of the scope block
   */
  function BlockStatement(definitionStatement, scopeId) {
    var _this2;

    _classCallCheck(this, BlockStatement);

    // expressions will be handled differently
    _this2 = _super2.call(this, definitionStatement.getRawText(), definitionStatement.getFirstLineNumber(), definitionStatement.getIndent());

    _classPrivateMethodInitSpec(_assertThisInitialized(_this2), _checkForLoopIteratorModified);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this2), _checkInfiniteLoop);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this2), _checkRedundantException);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this2), _checkBlockSymptoms);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this2), _statements, {
      writable: true,
      value: []
    });

    var _iterator4 = _createForOfIteratorHelper(definitionStatement.getExpressions()),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var exp = _step4.value;
        exp.setBlockId("".concat(definitionStatement.getFirstLineNumber(), "-").concat(definitionStatement.getRawExpressions()[0].getTextValue()));
        exp.setScopeId(scopeId);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    _classPrivateFieldGet(_assertThisInitialized(_this2), _statements).push(definitionStatement);

    var _iterator5 = _createForOfIteratorHelper(definitionStatement.getLineNumbers()),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var line = _step5.value;

        _this2.addLineNumber(line);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    _this2.addRules([_classPrivateMethodGet(_assertThisInitialized(_this2), _checkBlockSymptoms, _checkBlockSymptoms2)]);

    return _this2;
  } //#region - overrides

  /**
   * @override
   */


  _createClass(BlockStatement, [{
    key: "getExpressions",
    value: function getExpressions() {
      var expressions = [];

      var _iterator6 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _statements)),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var s = _step6.value;
          expressions = expressions.concat(s.getExpressions());
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      return expressions;
    }
    /**
     * Get all variable expressions in the statement
     * @returns {Map<String, VariableExpression>}
     * @override
     */

  }, {
    key: "getVariableUsages",
    value: function getVariableUsages() {
      var usages = new Map();

      var _iterator7 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _statements)),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var s = _step7.value;
          var statementMap = s.getVariableUsages();

          var _iterator8 = _createForOfIteratorHelper(statementMap),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var _step8$value = _slicedToArray(_step8.value, 2),
                  name = _step8$value[0],
                  vars = _step8$value[1];

              if (!usages.has(name)) {
                usages.set(name, vars);
              } else {
                var updated = usages.get(name).concat(vars);
                usages.set(name, updated);
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      return usages;
    }
    /**
     * Checks if this statement is blank
     * @returns {Boolean} True if the statement has no expressions, false otherwise
     * @override
     */

  }, {
    key: "isBlank",
    value: function isBlank() {
      return false;
    }
    /**
     * Gets the first expression in the statement
     * @returns {ExpressionNode}
     * @throws Throws an error if the statement is blank
     * @override
     */

  }, {
    key: "getFirstExpression",
    value: function getFirstExpression() {
      if (this.isBlank()) {
        throw new Error("Statement is blank. Could not get first expression.");
      }

      return _classPrivateFieldGet(this, _statements)[0].getFirstExpression();
    }
    /**
     * Whether or not this is a block statement e.g. a for loop or an if branch
     * @returns {Boolean}
     */

  }, {
    key: "isBlockStatement",
    value: function isBlockStatement() {
      return true;
    }
    /**
     * Gets the document line numbers that the statement occurs on.
     * @returns {Set<Number>} The document line numbers.
     */

  }, {
    key: "getLineNumbers",
    value: function getLineNumbers() {
      var localLineNumbers = new Set();

      var _iterator9 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _statements)),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var s = _step9.value;

          for (var l = s.getFirstLineNumber(); l <= s.getLastLineNumber(); l++) {
            localLineNumbers.add(l);
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      return localLineNumbers;
    }
    /**
     * Gets the line number of the first line in the statement.
     * @returns {Number} The line number or -1 if there are no line numbers
     */

  }, {
    key: "getFirstLineNumber",
    value: function getFirstLineNumber() {
      if (_classPrivateFieldGet(this, _statements).length === 0) {
        return -1;
      }

      return _classPrivateFieldGet(this, _statements)[0].getFirstLineNumber();
    }
    /**
     * Gets the line number of the last line in the statement.
     * @returns {Number} The line number or -1 if there are no line numbers
     */

  }, {
    key: "getLastLineNumber",
    value: function getLastLineNumber() {
      if (_classPrivateFieldGet(this, _statements).length === 0) {
        return -1;
      }

      return _classPrivateFieldGet(this, _statements)[_classPrivateFieldGet(this, _statements).length - 1].getLastLineNumber();
    } //#endregion - overrides
    //#region - extensions

    /**
     * Gets all the statements in this block
     * @returns {Statement[]}
     */

  }, {
    key: "getStatements",
    value: function getStatements() {
      return _classPrivateFieldGet(this, _statements);
    }
    /**
     * Gets the definition statement of this block
     * @returns {Statement}
     */

  }, {
    key: "getDefinitionStatement",
    value: function getDefinitionStatement() {
      var firstStatement = _classPrivateFieldGet(this, _statements)[0];

      while (firstStatement.isBlockStatement()) {
        firstStatement = firstStatement.getDefinitionStatment();
      }

      return firstStatement;
    }
    /**
     * Adds a statement to the block
     * @param {Statement} statement
     * @param {ScopeBlock} block 
     */

  }, {
    key: "addStatement",
    value: function addStatement(statement, block) {
      var blockId = _classPrivateFieldGet(this, _statements).length > 0 && _classPrivateFieldGet(this, _statements)[_classPrivateFieldGet(this, _statements).length - 1].getExpressions().length > 0 ? _classPrivateFieldGet(this, _statements)[_classPrivateFieldGet(this, _statements).length - 1].getFirstExpression().getBlockId() : "unknown";

      _classPrivateFieldGet(this, _statements).push(statement);

      var _iterator10 = _createForOfIteratorHelper(statement.getExpressions()),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var exp = _step10.value;
          exp.setBlockId(blockId);
          exp.setScopeId(block.getScope().getId());
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      var updatedText = (0, _utils.getTextOfExpressions)(this.getExpressions());
      this.updateRawText(updatedText);

      var _iterator11 = _createForOfIteratorHelper(statement.getLineNumbers()),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var line = _step11.value;
          this.addLineNumber(line);
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }

      _rawtextprocessing.StatementProcessor.connectVariableUsages(statement, block);

      var scope = block.getBlockEntity() === _enums.ExpressionEntity.DocumentDefinition ? block : block.getParentBlock().getScope();

      _rawtextprocessing.StatementProcessor.connectUserDefinedFunctions(statement, scope);
    }
    /**
     * Gets the BlockStatement that a new statement should be added to, if any
     * @param {Number} newStatementIndent 
     * @returns {BlockStatement | undefined}
     */

  }, {
    key: "getBlockStatementForIndent",
    value: function getBlockStatementForIndent(newStatementIndent) {
      if (_classPrivateFieldGet(this, _statements).length === 0 || newStatementIndent <= this.getIndentation()) {
        return undefined;
      } // check children


      var lastStatement = _classPrivateFieldGet(this, _statements)[_classPrivateFieldGet(this, _statements).length - 1];

      if (!lastStatement.isBlockStatement()) {
        return this;
      }

      var lastBlockStatementInChild = lastStatement.getBlockStatementForIndent(newStatementIndent);

      if (lastBlockStatementInChild === undefined) {
        return this;
      } else {
        return lastBlockStatementInChild;
      }
    }
  }, {
    key: "getLastBlockStatement",
    value: function getLastBlockStatement() {
      if (_classPrivateFieldGet(this, _statements).length === 0) {
        return undefined;
      } // check children


      var lastStatement = _classPrivateFieldGet(this, _statements)[_classPrivateFieldGet(this, _statements).length - 1];

      if (!lastStatement.isBlockStatement()) {
        return this;
      }

      var lastBlockStatementInChild = lastStatement.getLastBlockStatement();

      if (lastBlockStatementInChild === undefined) {
        return this;
      } else {
        return lastBlockStatementInChild;
      }
    } //#endregion - extensions
    //#region - symptoms
    //#endregion - symptoms

  }]);

  return BlockStatement;
}(Statement);

exports.BlockStatement = BlockStatement;

function _checkBlockSymptoms2(statement) {
  var symptoms = [];
  var definition = statement.getDefinitionStatement();

  if (definition.getFirstExpression().is(_enums.ExpressionEntity.ForDefinitionStatement)) {
    symptoms.push.apply(symptoms, _toConsumableArray(_classPrivateMethodGet(statement, _checkForLoopIteratorModified, _checkForLoopIteratorModified2).call(statement, statement, definition)));
  } else if (definition.getFirstExpression().is(_enums.ExpressionEntity.ExceptDefinitionStatement)) {
    symptoms.push.apply(symptoms, _toConsumableArray(_classPrivateMethodGet(statement, _checkRedundantException, _checkRedundantException2).call(statement, statement, definition)));
  }

  var innerBlockStatements = statement.getStatements().filter(function (s) {
    return s.isBlockStatement();
  });

  var _iterator13 = _createForOfIteratorHelper(innerBlockStatements),
      _step13;

  try {
    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
      var innerBlock = _step13.value;
      symptoms.push.apply(symptoms, _toConsumableArray(_classPrivateMethodGet(innerBlock, _checkBlockSymptoms, _checkBlockSymptoms2).call(innerBlock, innerBlock)));
    }
  } catch (err) {
    _iterator13.e(err);
  } finally {
    _iterator13.f();
  }

  return symptoms;
}

function _checkRedundantException2(statement, definition) {
  var symptoms = [];

  if (definition.getFirstExpression().getChildren().length === 3 && definition.getFirstExpression().getChildren()[1].is(_enums.ExpressionEntity.ExceptionName)) {
    var exception = definition.getFirstExpression().getChildren()[1];
    var innerStatements = statement.getStatements().slice(1);

    var _iterator14 = _createForOfIteratorHelper(innerStatements),
        _step14;

    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var s = _step14.value;
        var firstExp = s.getFirstExpression();

        if (firstExp.is(_enums.ExpressionEntity.ThrowStatement)) {
          var thrown = firstExp.getExpressionsOfKind(_enums.ExpressionEntity.ExceptionName);

          var _iterator15 = _createForOfIteratorHelper(thrown),
              _step15;

          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var t = _step15.value;

              if (t.getTextValue() === exception.getTextValue()) {
                symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.RedundantException, [firstExp], 0, 0));
              }
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }
        }
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }
  }

  return symptoms;
}

function _checkInfiniteLoop2(statement, definition) {
  var symptoms = [];
  var definitionExpression = definition.getFirstExpression();
  var loopVariables = definitionExpression.getVariableExpressions();

  var _iterator16 = _createForOfIteratorHelper(statement.getStatements()),
      _step16;

  try {
    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
      var s = _step16.value;
      var expressions = s.getExpressions();

      var _iterator17 = _createForOfIteratorHelper(expressions),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var exp = _step17.value;
          if ((0, _utils.containsExit)(exp)) return symptoms; // Gets the names of all modified variables inside the loop

          var changeVars = exp.getVariableExpressions().filter(function (v) {
            return v.isAssignedOrChanged();
          });
          var changeVarNames = new Set(changeVars.map(function (v) {
            return v.getTextValue();
          }));

          var _iterator18 = _createForOfIteratorHelper(loopVariables),
              _step18;

          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var loopVar = _step18.value;

              if (changeVarNames.has(loopVar.getTextValue())) {
                return symptoms;
              }
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }
    }
  } catch (err) {
    _iterator16.e(err);
  } finally {
    _iterator16.f();
  }

  symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.InfiniteLoop, [definitionExpression], 0, 0));
  return symptoms;
}

function _checkForLoopIteratorModified2(statement, definition) {
  var symptoms = [];
  var iterator = definition.getFirstExpression().getCondition()[0];

  if (iterator !== undefined && iterator.is(_enums.ExpressionEntity.IteratorExpression)) {
    var loopVars = iterator.getLoopVariables();
    var varMap = statement.getVariableUsages();

    var _iterator19 = _createForOfIteratorHelper(loopVars),
        _step19;

    try {
      for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
        var v = _step19.value;

        if (varMap.has(v.getTextValue())) {
          var usages = varMap.get(v.getTextValue()).filter(function (u) {
            return u.getStartLineNumber() !== definition.getFirstLineNumber();
          });

          for (var i = 0; i < usages.length; i++) {
            if (usages[i].isAssignedOrChanged()) {
              var isUsed = usages.slice(i + 1).filter(function (u) {
                return !u.isAssignedOrChanged();
              }).length > 0;
              if (!isUsed) symptoms.push(_symptom.SymptomFinder.createStatementSymptom(_enums.SymptomType.ForLoopIteratorModified, [usages[i]], 0, 0));
            }
          }
        }
      }
    } catch (err) {
      _iterator19.e(err);
    } finally {
      _iterator19.f();
    }
  }

  return symptoms;
}
},{"../problem-finder/symptom.js":12,"../utils/constants.js":13,"../utils/utils.js":14,"./ast.js":1,"./block.js":2,"./enums.js":4,"./indent.js":6,"./interfaces.js":7,"./rawtextprocessing.js":8}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.symptomInfo = exports.parse = exports.misconceptionInfo = void 0;

var _enums = require("./doc-model/enums.js");

var _docinfo = require("./doc-model/docinfo.js");

var sortSymptoms = function sortSymptoms(a, b) {
  if (a.getLineNumber() === b.getLineNumber() && a.getID() === b.getID()) return 0;
  if (a.getLineNumber() < b.getLineNumber() || a.getLineNumber() === b.getLineNumber() && a.getID() < b.getID()) return -1;
  return 1;
};

var parse = function parse(pyString) {
  var doc = new _docinfo.DocInfo(pyString);
  var symptoms = doc.getSymptoms().sort(sortSymptoms).map(function (symptom) {
    try {
      var _JSON = symptom.toJSON();

      return _JSON;
    } catch (e) {
      return {
        error: "Could not process symptom",
        msg: e.toString()
      };
    }
  });
  var variables = Array.from(doc.getVariables().values()).flat().map(function (v) {
    try {
      var _JSON2 = v.toJSON();

      return _JSON2;
    } catch (e) {
      return {
        error: "Could not process variable",
        msg: e.toString()
      };
    }
  });
  var functions = Array.from(doc.getUserDefinedFunctions().values()).map(function (f) {
    try {
      var _JSON3 = f.toJSON();

      return _JSON3;
    } catch (e) {
      return {
        error: "Could not process function",
        msg: e.toString()
      };
    }
  });
  var misconceptions = Array.from(doc.getMisconceptions().values()).map(function (m) {
    try {
      var _JSON4 = m.toJSON();

      return _JSON4;
    } catch (e) {
      return {
        error: "Could not process misconception",
        msg: e.toString()
      };
    }
  });
  return {
    misconceptions: misconceptions,
    symptoms: symptoms,
    blocks: doc.getBlocks().toJSON(),
    variables: variables,
    functions: functions
  };
}; // Add functions that return info about misconceptions and symptoms defined in the library (symptom checker should be able to just pull from the misconceptions)


exports.parse = parse;

var symptomInfo = function symptomInfo() {
  var obj = {};

  for (var type in _enums.SymptomType) {
    obj[_enums.SymptomType[type].name] = _enums.SymptomType[type].description;
  }

  return obj;
};

exports.symptomInfo = symptomInfo;

var misconceptionInfo = function misconceptionInfo() {
  var obj = {};

  for (var type in _enums.MisconceptionType) {
    obj[_enums.MisconceptionType[type].name] = _enums.MisconceptionType[type].description;
  }

  return obj;
};

exports.misconceptionInfo = misconceptionInfo;
},{"./doc-model/docinfo.js":3,"./doc-model/enums.js":4}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identifyMisconceptions = exports.Reason = exports.MisconceptionOccurrence = exports.Misconception = void 0;

var _enums = require("../doc-model/enums.js");

var _constants = require("../utils/constants.js");

var _utils = require("../utils/utils.js");

var _symptom2 = require("./symptom.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Identifies all misconceptions in the document and returns a map where each key is a 
 * MisconceptionType and each value is a Misconception of the matching tpye.
 * @param {Symptom[]} symptoms An array of all symptoms found in the document
 * @param {Map<String, Variable[]>} variables A map of all variables in the document
 * @param {Map<String, any>} functions A map of all user-defined functions in the document
 * @returns {Map<MisconceptionType, Misconception>} A map of all detected misconceptions.
 */
var identifyMisconceptions = function identifyMisconceptions(symptoms, variables, functions) {
  var foundMisconceptions = new Map();

  var _iterator = _createForOfIteratorHelper(misconceptionDetector),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          misconType = _step$value[0],
          detector = _step$value[1];

      var result = detector(symptoms, variables, functions);

      if (result.length > 0) {
        foundMisconceptions.set(misconType, Misconception.create(misconType, result));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return foundMisconceptions;
}; //#region Misconception detectors

/**
 * Detector for the AssignCompares misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the AssignCompares misconception
 */


exports.identifyMisconceptions = identifyMisconceptions;

var assignCompares = function assignCompares(symptoms) {
  var assignmentInBoolean = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.AssignmentInBoolean.name;
  });
  return assignmentInBoolean.map(function (s) {
    return new MisconceptionOccurrence(s.getLineNumber(), s.getDocIndex(), new Reason([s], "A single equals operator is used in a boolean expression where a double equals operator might be expected."));
  });
};
/**
 * Detector for the ColonAssigns misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the ColonAssigns misconception
 */


var colonAssigns = function colonAssigns(symptoms) {
  var unexpectedColon = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.UnexpectedColon.name && s.getAdditionalInfo().after.type !== _constants.EMPTY && s.getAdditionalInfo().before.type === _enums.ExpressionEntity.VariableName.name;
  });
  var occurrences = [];

  var _iterator2 = _createForOfIteratorHelper(unexpectedColon),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var symptom = _step2.value;
      var reason = new Reason([symptom], "The unexpected colon is preceded by a variable name and followed by a value. The intention may be to assign the value to the named variable.");
      occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return occurrences;
};
/**
 * Detector for the CompareMultipleValuesWithOr misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the CompareMultipleValuesWithOr misconception
 */


var compareMultipleValuesWithOr = function compareMultipleValuesWithOr(symptoms) {
  var naturalLanguageOr = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.NaturalLanguageBoolean.name && s.getAdditionalInfo().operator === "or";
  });
  var occurrences = [];

  var _iterator3 = _createForOfIteratorHelper(naturalLanguageOr),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var symptom = _step3.value;
      var reason = new Reason([symptom], "A non-boolean value is used where a boolean expression is expected.");
      occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return occurrences;
};
/**
 * Detector for the ComparisonWithBoolLiteral misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the ComparisonWithBoolLiteral misconception
 */


var comparisonWithBoolLiteral = function comparisonWithBoolLiteral(symptoms) {
  var compareBoolLiteral = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.CompareBoolLiteral.name;
  });
  var occurrences = [];

  var _iterator4 = _createForOfIteratorHelper(compareBoolLiteral),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var symptom = _step4.value;
      var sJSON = symptom.toJSON();

      if (sJSON.boolLiteral === _constants.TRUE) {
        var reason = new Reason([symptom], "".concat(sJSON.boolValue, " is a boolean value so ").concat(sJSON.operator, " ").concat(sJSON.boolLiteral, " is redundant."));
        occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
      } else {
        var _reason = new Reason([symptom], "".concat(sJSON.boolValue, " is a boolean value so the expression can be rewritten as not ").concat(sJSON.boolValue, "."));

        occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), _reason));
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  return occurrences;
};
/**
 * Detector for the DeferredReturn misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the DeferredReturn misconception
 */


var deferredReturn = function deferredReturn(symptoms) {
  var deferredReturns = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.UnreachableExit.name && s.getAdditionalInfo().exitKeyword === _constants.RETURN_KEYWORD;
  });
  var occurrences = [];

  var _iterator5 = _createForOfIteratorHelper(deferredReturns),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var symptom = _step5.value;
      var sJSON = symptom.toJSON();
      var reason = new Reason([symptom], "Code follows a return statement in the same branch.");
      occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  return occurrences;
};
/**
 * Detector for the ForLoopVarIsLocal misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the ForLoopVarIsLocal misconception
 */


var forLoopVarIsLocal = function forLoopVarIsLocal(symptoms) {
  var forLoopOverwrite = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.OverwrittenVariable.name && s.getAdditionalInfo().overwriteType === _constants.FOR_LOOP_VAR && s.getAdditionalInfo().overwriteValue !== _constants.SAME_VALUE;
  });
  var occurrences = [];

  var _iterator6 = _createForOfIteratorHelper(forLoopOverwrite),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var symptom = _step6.value;
      var reason = new Reason([symptom], "The iterating variable ".concat(symptom.getAffectedText(), " is initialised before the loop. ").concat(symptom.getAdditionalInfo().overwriteValue === _constants.DIFFERENT_VALUE ? "The overwritten value is different from the value initialised by the loop" : "It could not be determined if the overwritten value is the same as the value initialised by the loop", "."));
      occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }

  return occurrences;
};
/**
 * Detector for the FunctionCallsNoParentheses misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the FunctionCallsNoParentheses misconception
 */


var functionCallsNoParentheses = function functionCallsNoParentheses(symptoms, variables) {
  var undefinedVar = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.UndefinedVariable.name;
  });
  var functionVars = Array.from(variables.values()).flatMap(function (vInfoArr) {
    return vInfoArr;
  }).flatMap(function (vInfo) {
    return vInfo.getUsages();
  }).filter(function (usage) {
    return usage.getVariable().getDataType() === _enums.DataType.Function;
  }).map(function (usage) {
    return usage.getVariable();
  });
  var subscriptedNonSubscriptable = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.SubscriptedNonSubscriptable.name;
  });
  var varsWithFunctionNames = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.VariableWithSameNameAsFunction.name && (s.getAdditionalInfo().funcType === _constants.BUILT_IN_FUNCTION || s.getAdditionalInfo().funcType === _constants.USER_DEFINED_FUNCTION && s.getAdditionalInfo().numArgsExpected > 0);
  });
  var occurrences = [];

  if (varsWithFunctionNames.length === 0 || undefinedVar.length === 0 && functionVars.length === 0) {
    return occurrences;
  }

  var _iterator7 = _createForOfIteratorHelper(varsWithFunctionNames),
      _step7;

  try {
    var _loop = function _loop() {
      var funcNameVar = _step7.value;
      var name = funcNameVar.getAffectedText();
      var docIndex = funcNameVar.getDocIndex();

      var _iterator8 = _createForOfIteratorHelper(undefinedVar),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var u = _step8.value;

          if (u.getAffectedText() === name && u.getDocIndex() === docIndex) {
            var matchingSubscripted = subscriptedNonSubscriptable.filter(function (s) {
              return s.getAdditionalInfo().varName === name && s.getDocIndex() === docIndex;
            });

            if (matchingSubscripted.length === 0) {
              var reason = new Reason([u, funcNameVar], "The variable ".concat(name, " has not been assigned a value and the file contains a user-defined function of the same name."));
              occurrences.push(new MisconceptionOccurrence(u.getLineNumber(), u.getDocIndex(), reason));
            }
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      var _iterator9 = _createForOfIteratorHelper(functionVars),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var funcVar = _step9.value;

          if (funcVar.getTextValue() === name && funcVar.getDocumentStartIndex() === docIndex) {
            var _matchingSubscripted = subscriptedNonSubscriptable.filter(function (s) {
              return s.getAdditionalInfo().varName === name && s.getDocIndex() === docIndex;
            });

            if (_matchingSubscripted.length === 0) {
              var _reason2 = new Reason([funcNameVar], "The variable ".concat(name, " has not been assigned a value and the file contains a user-defined function of the same name."));

              occurrences.push(new MisconceptionOccurrence(funcNameVar.getLineNumber(), funcNameVar.getDocIndex(), _reason2));
            }
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    };

    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      _loop();
    }
    /*for (let symptom of undefinedVar) {
        let name = symptom.getAffectedText();
        let docIndex = symptom.getDocIndex();
        for (let pair of varsWithFunctionNames) {
            if (pair.getAffectedText() === name && pair.getDocIndex() === docIndex) {
                const matchingSubscripted = subscriptedNonSubscriptable.filter(s => s.getAdditionalInfo().varName === name && s.getDocIndex() === docIndex);
                if (matchingSubscripted.length === 0) {
                    const reason = new Reason(
                        [symptom, pair],
                        `The variable ${name} has not been assigned a value and the file contains a user-defined function of the same name.`
                    );
                    occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
                }
            }
        }
    }*/

  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }

  return occurrences;
};
/**
 * Detector for the FunctionCallsUseSquareBrackets misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the FunctionCallsUseSquareBrackets misconception
 */


var functionCallsUseSquareBrackets = function functionCallsUseSquareBrackets(symptoms) {
  var subscriptedNonSubscriptable = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.SubscriptedNonSubscriptable.name;
  });
  var varsWithFunctionNames = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.VariableWithSameNameAsFunction.name;
  });
  var occurrences = [];

  var _iterator10 = _createForOfIteratorHelper(subscriptedNonSubscriptable),
      _step10;

  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var symptom = _step10.value;
      var varName = symptom.getAdditionalInfo().varName;
      var docIndex = symptom.getDocIndex();

      var _iterator11 = _createForOfIteratorHelper(varsWithFunctionNames),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var pair = _step11.value;

          if (pair.getAffectedText() === varName && pair.getDocIndex() === docIndex) {
            var varTypeMsg = symptom.getAdditionalInfo().isUndefined ? "undefined variable" : symptom.getAdditionalInfo().subscriptedType === "unknown data type" ? "variable with unknown data type" : "variable with ".concat(symptom.getAdditionalInfo().subscriptedType, " data type");
            var reason = new Reason([symptom, pair], "".concat(varName, " (").concat(varTypeMsg, ") has the same name as a function. ").concat(varName, " is subscripted, suggesting a mistake may have been made while calling a function of the same name. It is possible there is confusion about when to use square brackets versus parentheses."));
            occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }

  return occurrences;
};
/**
 * Detector for the IterationRequiresTwoLoops misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the IterationRequiresTwoLoops misconception
 */


var iterationRequiresTwoLoops = function iterationRequiresTwoLoops(symptoms) {
  var intVarModifiedInFor = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.LoopVarModifiedInChildLoop.name && s.getAdditionalInfo().modifiedIn.every(function (mod) {
      return mod.loopType === "for" && mod.varDataType === "int";
    });
  });
  var loopVarNotModified = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.LoopVarNotModified.name;
  });
  var occurrences = [];

  var _iterator12 = _createForOfIteratorHelper(intVarModifiedInFor),
      _step12;

  try {
    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
      var symptom = _step12.value;
      var name = symptom.getAffectedText();
      var blockId = symptom.getBlock();

      var _iterator13 = _createForOfIteratorHelper(loopVarNotModified),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var notMod = _step13.value;

          if (notMod.getBlock() === blockId && notMod.getAdditionalInfo().unmodifiedVars.includes(name)) {
            var reason = new Reason([symptom, notMod], "The int variable ".concat(name, " is referenced in a while loop condition but only modified in a nested for loop. If ").concat(name, " is being used to count the iterated items, the two loops could be replaced with a single for loop using enumerate() or range() to count the items."));
            occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
            break;
          }
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
    }
  } catch (err) {
    _iterator12.e(err);
  } finally {
    _iterator12.f();
  }

  return occurrences;
};
/**
 * Detector for the IteratorInitialisedOutsideLoop misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the IteratorInitialisedOutsideLoop misconception
 */


var iteratorInitialisedOutsideLoop = function iteratorInitialisedOutsideLoop(symptoms) {
  var forLoopOverwrite = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.OverwrittenVariable.name && s.getAdditionalInfo().overwriteType === _constants.FOR_LOOP_VAR && s.getAdditionalInfo().overwriteValue === _constants.SAME_VALUE;
  });
  var occurrences = [];

  var _iterator14 = _createForOfIteratorHelper(forLoopOverwrite),
      _step14;

  try {
    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
      var symptom = _step14.value;
      var reason = new Reason([symptom], "The iterating variable ".concat(symptom.getAffectedText(), " is initialised before the loop with the same value that it is initialised with in the for loop definition."));
      occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
    }
  } catch (err) {
    _iterator14.e(err);
  } finally {
    _iterator14.f();
  }

  return occurrences;
};
/**
 * Detector for the LocalVariablesAreGlobal misconception.
 * @param {Symptom[]} symptoms 
 * @param {Map<String, Variable[]>} variables
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the LocalVariablesAreGlobal misconception
 */


var localVariablesAreGlobal = function localVariablesAreGlobal(symptoms, variables) {
  var undefinedVars = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.UndefinedVariable.name && s.getAdditionalInfo().variable.getScope().getBlockEntity() === _enums.ExpressionEntity.DocumentDefinition;
  }); // Check for other variables with same name and different scope

  var occurrences = [];

  var _iterator15 = _createForOfIteratorHelper(undefinedVars),
      _step15;

  try {
    for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
      var symptom = _step15.value;
      var varName = symptom.getAdditionalInfo().variable.getName();
      var localVars = variables.get(varName).filter(function (instance) {
        return instance.getScope().getBlockEntity() !== _enums.ExpressionEntity.DocumentDefinition;
      });

      if (localVars.length > 0) {
        var reason = new Reason([symptom], "The undefined variable ".concat(symptom.getAffectedText(), " has global scope. The document contains ").concat(localVars.length, " other ").concat(localVars.length === 1 ? "variable" : "variables", " with the same name in function scope."));
        occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
      }
    }
  } catch (err) {
    _iterator15.e(err);
  } finally {
    _iterator15.f();
  }

  return occurrences;
};
/**
 * Detector for the LoopCounter misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the LoopCounter misconception
 */


var loopCounter = function loopCounter(symptoms) {
  var dodgyMod = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.ForLoopIteratorModified.name || s.getID() === _enums.SymptomType.WhileLoopVarAssignedIntLiteral.name;
  });
  var occurrences = [];

  var _iterator16 = _createForOfIteratorHelper(dodgyMod),
      _step16;

  try {
    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
      var symptom = _step16.value;
      var msg = "";

      if (symptom.getID() === _enums.SymptomType.ForLoopIteratorModified.name) {
        msg = "The for loop iterator variable ".concat(symptom.getAffectedText(), " is modified in the loop.");
      } else {
        msg = "The while loop variable ".concat(symptom.getAffectedText(), " is assigned a literal int value.");
      }

      var reason = new Reason([symptom], msg);
      occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
    }
  } catch (err) {
    _iterator16.e(err);
  } finally {
    _iterator16.f();
  }

  return occurrences;
};
/**
 * Detector for the MapToBooleanWithIf misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the MapToBooleanWithIf misconception
 */


var mapToBooleanWithIf = function mapToBooleanWithIf(symptoms) {
  var oneLineConditional = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.OneLineConditional.name;
  });
  var occurrences = [];

  var _iterator17 = _createForOfIteratorHelper(oneLineConditional),
      _step17;

  try {
    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
      var symptom = _step17.value;
      var sJSON = symptom.toJSON();

      if (sJSON.form === _constants.VALUE_RETURNED) {
        var reason = new Reason([symptom], "Conditional returns a boolean literal that matches the value of the boolean expression in the if statement. The whole conditional could be replaced with a single line.");
        occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
      } else if (sJSON.form === _constants.VALUE_ASSIGNED) {
        var _reason3 = new Reason([symptom], "The variable ".concat(sJSON.variableAssigned, " is assigned a boolean literal that matches the value of the boolean expression in the if statement. The whole conditional could be replaced with a single line."));

        occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), _reason3));
      }
    }
  } catch (err) {
    _iterator17.e(err);
  } finally {
    _iterator17.f();
  }

  return occurrences;
};
/**
 * Detector for the MapToBooleanWithTernary misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the MapToBooleanWithTernary misconception
 */


var mapToBooleanWithTernary = function mapToBooleanWithTernary(symptoms) {
  var boolTernary = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.TernaryReturnsBool.name;
  });
  var occurrences = [];

  var _iterator18 = _createForOfIteratorHelper(boolTernary),
      _step18;

  try {
    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
      var symptom = _step18.value;
      var reason = new Reason([symptom], "Ternary returns a boolean literal that matches the value of the boolean expression in the ternary. The ternary could be replaced with the boolean expression alone.");
      occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
    }
  } catch (err) {
    _iterator18.e(err);
  } finally {
    _iterator18.f();
  }

  return occurrences;
};
/**
 * Detector for the NoKeyword misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the NoKeyword misconception
 */


var noKeyword = function noKeyword(symptoms) {
  var unexpectedColon = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.UnexpectedColon.name && s.getAdditionalInfo().after.type === _constants.EMPTY && (s.getAdditionalInfo().before.type === _enums.ExpressionEntity.FunctionName.name || s.getAdditionalInfo().before.type === _constants.BOOLEAN_EXPRESSION);
  });
  var unknownFunctions = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.UnknownFunction.name;
  });
  var occurrences = [];

  var _iterator19 = _createForOfIteratorHelper(unexpectedColon),
      _step19;

  try {
    var _loop2 = function _loop2() {
      var symptom = _step19.value;

      if (symptom.getAdditionalInfo().before.type === _enums.ExpressionEntity.FunctionName.name) {
        var matchFunc = unknownFunctions.filter(function (s) {
          return s.getAffectedText() === symptom.getAdditionalInfo().before.value;
        });

        if (matchFunc.length > 0) {
          var reason = new Reason([symptom, matchFunc[0]], "The unexpected colon is preceded by a call to unknown function, ".concat(matchFunc[0].getAffectedText(), ". It is possible the intention was to declare a function but the def keyword has been omitted."));
          occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
        }
      } else if (symptom.getAdditionalInfo().before.type === _constants.BOOLEAN_EXPRESSION) {
        var _reason4 = new Reason([symptom], "The unexpected colon is preceded by a Boolean expression. It is possible the intention was to declare a while, if, or elif but the keyword was omitted.");

        occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), _reason4));
      }
    };

    for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator19.e(err);
  } finally {
    _iterator19.f();
  }

  return occurrences;
};
/**
 * Detector for the NoReservedWords misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the NoReservedWords misconception
 */


var noReservedWords = function noReservedWords(symptoms) {
  var definedReserved = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.DefinitionFollowedByReservedWord.name;
  });
  var reservedAssigned = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.ReservedWordAssigned.name;
  });
  var occurrences = [];

  var _iterator20 = _createForOfIteratorHelper(definedReserved),
      _step20;

  try {
    for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
      var symptom = _step20.value;
      var reason = new Reason([symptom], "The reserved word, ".concat(symptom.getAdditionalInfo().reservedWord, ", follows the ").concat(symptom.getAdditionalInfo().definitionType, "."));
      occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
    }
  } catch (err) {
    _iterator20.e(err);
  } finally {
    _iterator20.f();
  }

  var _iterator21 = _createForOfIteratorHelper(reservedAssigned),
      _step21;

  try {
    for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
      var _symptom = _step21.value;

      var _reason5 = new Reason([_symptom], "The reserved word, ".concat(_symptom.getAffectedText(), ", is followed by the assignment operator."));

      occurrences.push(new MisconceptionOccurrence(_symptom.getLineNumber(), _symptom.getDocIndex(), _reason5));
    }
  } catch (err) {
    _iterator21.e(err);
  } finally {
    _iterator21.f();
  }

  return occurrences;
};
/**
 * Detector for the ParenthesesOnlyIfArgument misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the ParenthesesOnlyIfArgument misconception
 */


var parenthesesOnlyIfArgument = function parenthesesOnlyIfArgument(symptoms) {
  // undefined variable AND variable with same name as function that applies to userDefinedFunction with 0 arguments
  var undefinedVar = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.UndefinedVariable.name;
  });
  var varsWithFunctionNames = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.VariableWithSameNameAsFunction.name && s.getAdditionalInfo().funcType === _constants.USER_DEFINED_FUNCTION && s.getAdditionalInfo().numArgsExpected === 0;
  });
  var occurrences = [];

  if (varsWithFunctionNames.length === 0) {
    return occurrences;
  }

  var _iterator22 = _createForOfIteratorHelper(undefinedVar),
      _step22;

  try {
    for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
      var symptom = _step22.value;
      var name = symptom.getAffectedText();
      var docIndex = symptom.getDocIndex();

      var _iterator23 = _createForOfIteratorHelper(varsWithFunctionNames),
          _step23;

      try {
        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
          var pair = _step23.value;

          if (pair.getAffectedText() === name && pair.getDocIndex() === docIndex) {
            var reason = new Reason([symptom, pair], "The variable ".concat(name, " has not been assigned a value and the file contains a user-defined function of the same name that does not expect any arguments."));
            occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
          }
        }
      } catch (err) {
        _iterator23.e(err);
      } finally {
        _iterator23.f();
      }
    }
  } catch (err) {
    _iterator22.e(err);
  } finally {
    _iterator22.f();
  }

  return occurrences;
};
/**
 * Detector for the PrintSameAsReturn misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the PrintSameAsReturn misconception
 */


var printSameAsReturn = function printSameAsReturn(symptoms) {
  var assignedNone = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.AssignedNone.name;
  });
  var functionPrints = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.FunctionPrints.name;
  });
  var unusedReturn = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.UnusedReturn.name && s.getAdditionalInfo().expression.is(_enums.ExpressionEntity.FunctionName);
  });
  var occurrences = []; // Assigning things that print but don't return

  var _iterator24 = _createForOfIteratorHelper(assignedNone),
      _step24;

  try {
    for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
      var symptom = _step24.value;
      var sJSON = symptom.toJSON();

      if (sJSON.expressionNoValue.type === _constants.USER_DEFINED_FUNCTION) {
        (function () {
          var funcName = sJSON.expressionNoValue.value.split("(")[0];
          var funcUsed = functionPrints.filter(function (func) {
            return func.getAffectedText() === funcName;
          });
          var funcDoesPrint = funcUsed.length > 0;

          if (funcDoesPrint) {
            // Create a misconception occurrence
            var reason = new Reason([symptom].concat(_toConsumableArray(funcUsed)), "User-defined function ".concat(funcName, " prints to the console but does not return a value."));
            occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
          }

          ;
        })();
      } else if (sJSON.expressionNoValue.type === _constants.BUILT_IN_FUNCTION && sJSON.expressionNoValue.value.indexOf("print(") === 0) {
        var reason = new Reason([symptom], "The print function does not return a value but it is used as if it does.");
        occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
      }
    } // Not assigning things that print AND return

  } catch (err) {
    _iterator24.e(err);
  } finally {
    _iterator24.f();
  }

  var _iterator25 = _createForOfIteratorHelper(unusedReturn),
      _step25;

  try {
    var _loop3 = function _loop3() {
      var symptom = _step25.value;
      var sJSON = symptom.toJSON();
      var funcName = sJSON.unusedFunc.value;
      var funcPrints = functionPrints.filter(function (func) {
        return func.getAffectedText() === funcName;
      });
      var funcDoesPrint = funcPrints.length > 0;

      if (funcDoesPrint) {
        // Create a misconception occurrence
        var _reason6 = new Reason([symptom].concat(_toConsumableArray(funcPrints)), "User-defined function ".concat(funcName, " prints to the console and returns a value but the value is not used."));

        occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), _reason6));
      }
    };

    for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
      _loop3();
    }
  } catch (err) {
    _iterator25.e(err);
  } finally {
    _iterator25.f();
  }

  return occurrences;
};
/**
 * Detector for the ReturnCall misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the ReturnCall misconception
 */


var returnCall = function returnCall(symptoms) {
  var returnInParentheses = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.ReturnInParentheses.name;
  });

  var makeMessage = function makeMessage(contents) {
    if (contents === _constants.FUNCTION_CALL) return "function call";else if (contents === _constants.COMPOUND_TYPE_DEFINITION) return "compound type (e.g. list, set)";else if (contents === _constants.COMPOUND_EXPRESSION) return "compound expression";else return contents;
  };

  return returnInParentheses.map(function (s) {
    return new MisconceptionOccurrence(s.getLineNumber(), s.getDocIndex(), new Reason([s], "The function returns a ".concat(makeMessage(s.getAdditionalInfo().contents), " wrapped in parentheses. The parentheses are unnecessary.")));
  });
};
/**
 * Detector for the SequentialIfsAreExclusive misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the SequentialIfsAreExclusive misconception
 */


var sequentialIfsAreExclusive = function sequentialIfsAreExclusive(symptoms) {
  var sequentialIfsWithMatches = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.SequentialIfs.name && s.getAdditionalInfo().branchMatches.length > 0;
  });
  var occurrences = [];

  var _iterator26 = _createForOfIteratorHelper(sequentialIfsWithMatches),
      _step26;

  try {
    for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
      var conditional = _step26.value;

      var _iterator27 = _createForOfIteratorHelper(conditional.getAdditionalInfo().branchMatches),
          _step27;

      try {
        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
          var sequence = _step27.value;
          var sequenceTxt = sequence.map(function (b) {
            return b.lineNum + 1;
          }).join(", ");
          var lastComma = sequenceTxt.lastIndexOf(",");
          sequenceTxt = sequenceTxt.substring(0, lastComma) + " and" + sequenceTxt.substring(lastComma + 1);

          if (sequence.length > 0) {
            occurrences.push(new MisconceptionOccurrence(sequence[0].lineNum, sequence[0].docIndex, new Reason([conditional], "The if statement is part of a sequence of if statements (lines ".concat(sequenceTxt, ") that have very similar boolean expressions."))));
          }
          /*for (let branch of sequence) {
               occurrences.push(new MisconceptionOccurrence(branch.lineNum, branch.docIndex, 
                              new Reason(
                                  [conditional], 
                                  `The if statement is part of a sequence of if statements (lines ${sequenceTxt}) that have very similar boolean expressions.`
                              )));
          }*/

        }
      } catch (err) {
        _iterator27.e(err);
      } finally {
        _iterator27.f();
      }
    }
  } catch (err) {
    _iterator26.e(err);
  } finally {
    _iterator26.f();
  }

  return occurrences;
};
/**
 * Detector for the ParameterMustBeAssignedInFunction misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the ParameterMustBeAssignedInFunction misconception
 */


var parameterMustBeAssignedInFunction = function parameterMustBeAssignedInFunction(symptoms) {
  var assignInReturnLines = new Set(symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.AssignmentInReturn.name;
  }).map(function (s) {
    return s.getLineNumber();
  }));
  var variableOverwrite = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.OverwrittenVariable.name && s.getAdditionalInfo().isParameter && s.getAdditionalInfo().prevUsageIsDefinition && !assignInReturnLines.has(s.getLineNumber());
  });
  var occurrences = [];

  var _iterator28 = _createForOfIteratorHelper(variableOverwrite),
      _step28;

  try {
    for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
      var symptom = _step28.value;
      var reason = new Reason([symptom], "The parameter ".concat(symptom.getAffectedText(), " is overwritten before use."));
      occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
    }
  } catch (err) {
    _iterator28.e(err);
  } finally {
    _iterator28.f();
  }

  return occurrences;
};
/**
 * Detector for the StringMethodsModifyTheString misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the StringMethodsModifyTheString misconception
 */


var stringMethodsModifyTheString = function stringMethodsModifyTheString(symptoms) {
  var unusedMethodReturns = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.UnusedReturn.name && s.getAdditionalInfo().expression.is(_enums.ExpressionCategory.BuiltInMethods) && _utils.stringMethodsLookup.has(s.getAdditionalInfo().expression.getEntity());
  });
  var occurrences = [];

  var _iterator29 = _createForOfIteratorHelper(unusedMethodReturns),
      _step29;

  try {
    for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
      var symptom = _step29.value;
      var reason = new Reason([symptom], "A String method, ".concat(symptom.getAdditionalInfo().expression.getTextValue(), ", that returns a new string is called but the return value is not assigned or passed."));
      occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
    }
  } catch (err) {
    _iterator29.e(err);
  } finally {
    _iterator29.f();
  }

  return occurrences;
};
/**
 * Detector for the TypeConversionModifiesArgument misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the TypeConversionModifiesArgument misconception
 */


var typeConversionModifiesArgument = function typeConversionModifiesArgument(symptoms) {
  var unusedTypeConversions = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.UnusedReturn.name && s.getAdditionalInfo().expression.isOneOf([_enums.ExpressionEntity.StrFunction, _enums.ExpressionEntity.IntFunction, _enums.ExpressionEntity.FloatFunction, _enums.ExpressionEntity.BoolFunction, _enums.ExpressionEntity.ListFunction, _enums.ExpressionEntity.TupleFunction, _enums.ExpressionEntity.SetFunction]);
  });
  var occurrences = [];

  var _iterator30 = _createForOfIteratorHelper(unusedTypeConversions),
      _step30;

  try {
    for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
      var symptom = _step30.value;
      var reason = new Reason([symptom], "".concat(symptom.getAdditionalInfo().expression.getTextValue(), "() is called but the converted value returned by the function is not saved or passed."));
      occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
    }
  } catch (err) {
    _iterator30.e(err);
  } finally {
    _iterator30.f();
  }

  return occurrences;
};
/**
 * Detector for the WhileSameAsIf misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the WhileSameAsIf misconception
 */


var whileSameAsIf = function whileSameAsIf(symptoms) {
  var whileVarNotModified = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.LoopVarNotModified.name;
  });
  var whileTrue = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.WhileTrue.name;
  });
  var loopEarlyExit = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.LoopReturn.name;
  });
  var occurrences = [];

  var _iterator31 = _createForOfIteratorHelper(whileVarNotModified),
      _step31;

  try {
    var _loop4 = function _loop4() {
      var notModified = _step31.value;
      var notModifiedEarlyExit = loopEarlyExit.filter(function (s) {
        return s.getBlock() === notModified.getBlock();
      });

      if (notModifiedEarlyExit.length > 0) {
        var reason = new Reason([notModified].concat(_toConsumableArray(notModifiedEarlyExit)), "No while loop variables are modified (excluding modifications in any nested loops) and the loop always exits on the first iteration.");
        occurrences.push(new MisconceptionOccurrence(notModified.getLineNumber(), notModified.getDocIndex(), reason));
      }
    };

    for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
      _loop4();
    }
  } catch (err) {
    _iterator31.e(err);
  } finally {
    _iterator31.f();
  }

  var _iterator32 = _createForOfIteratorHelper(whileTrue),
      _step32;

  try {
    var _loop5 = function _loop5() {
      var noVar = _step32.value;
      var noVarEarlyExit = loopEarlyExit.filter(function (s) {
        return s.getBlock() === noVar.getBlock();
      });

      if (noVarEarlyExit.length > 0) {
        var reason = new Reason([noVar].concat(_toConsumableArray(noVarEarlyExit)), "A \"while True\" loop always exits on the first iteration and therefore behaves as an if statement. Caution: the intention here may be to continue iteration, in which case the misconception lies elsewhere.");
        occurrences.push(new MisconceptionOccurrence(noVar.getLineNumber(), noVar.getDocIndex(), reason));
      }
    };

    for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
      _loop5();
    }
  } catch (err) {
    _iterator32.e(err);
  } finally {
    _iterator32.f();
  }

  return occurrences;
};
/**
 * Detector for the TypeMustBeSpecified misconception.
 * @param {Symptom[]} symptoms 
 * @returns {MisconceptionOccurrence[]} An array of occurrences of the TypeMustBeSpecified misconception
 */


var typeMustBeSpecified = function typeMustBeSpecified(symptoms) {
  var typeUnnecessary = symptoms.filter(function (s) {
    return s.getID() === _enums.SymptomType.TypeUnnecessary.name;
  });
  var occurrences = [];

  var _iterator33 = _createForOfIteratorHelper(typeUnnecessary),
      _step33;

  try {
    for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
      var symptom = _step33.value;
      var sJSON = symptom.toJSON();
      var reason = void 0; // string > list

      if (sJSON.argType === _constants.STRING && sJSON.convertedType === _constants.LIST) {
        reason = new Reason([symptom], "A string value, ".concat(sJSON.convertedValue, ", is converted to a list which may not be necessary. The programmer may not realise that much of the functionality provided by a list is also available to strings."));
      } // int
      // float
      // bool
      // list
      else {
        reason = new Reason([symptom], "".concat(sJSON.convertedValue, " is guaranteed to be a ").concat(sJSON.argType, " so there is no need to convert it to ").concat(sJSON.convertedType, "."));
      }

      if (reason !== undefined) occurrences.push(new MisconceptionOccurrence(symptom.getLineNumber(), symptom.getDocIndex(), reason));
    }
  } catch (err) {
    _iterator33.e(err);
  } finally {
    _iterator33.f();
  }

  return occurrences;
}; //#endregion

/**
 * A class that represents a detected programming misconception
 */


var _id = /*#__PURE__*/new WeakMap();

var _indicator = /*#__PURE__*/new WeakMap();

var _occurrences = /*#__PURE__*/new WeakMap();

var Misconception = /*#__PURE__*/function () {
  /** @type {MisconceptionType} */
  // The type of the misconception

  /** @type {string} */
  // A high level, abstract text discription of the symptoms associated with the misconception and their relationships

  /** @type {Array<MisconceptionOccurrence>} */
  // All occurrences of the misconception.

  /**
   * Creates a new Misconception
   * @param {MisconceptionType} misconType 
   * @param {MisconceptionOccurrence[]} occurrences 
   */
  function Misconception(misconType, occurrences) {
    _classCallCheck(this, Misconception);

    _classPrivateFieldInitSpec(this, _id, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _indicator, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _occurrences, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _id, misconType.name);

    _classPrivateFieldSet(this, _indicator, misconType.description);

    _classPrivateFieldSet(this, _occurrences, occurrences);
  }
  /**
   * Add a new occurrence of the misconception
   * @param {MisconceptionOccurrence} occurrence 
   */


  _createClass(Misconception, [{
    key: "addOccurrence",
    value: function addOccurrence(occurrence) {
      _classPrivateFieldGet(this, _occurrences).push(occurrence);
    }
    /**
     * Creates a JSON-friendly representation of the object
     * @returns {Object} A JSON-friendly representation of the object
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        type: _classPrivateFieldGet(this, _id),
        description: _classPrivateFieldGet(this, _indicator),
        occurrences: _classPrivateFieldGet(this, _occurrences).map(function (o) {
          return o.toJSON();
        })
      };
    }
    /**
     * Static method. Creates a new Misconception
     * @param {MisconceptionType} misconceptionType 
     * @param {MisconceptionOccurrence[]} occurrences 
     * @returns {Misconception} A new misconception
     */

  }], [{
    key: "create",
    value: function create(misconceptionType, occurrences) {
      return new Misconception(misconceptionType, occurrences);
    }
  }]);

  return Misconception;
}();
/**
 * A class representing a single occurrence of a misconception.
 */


exports.Misconception = Misconception;

var _line = /*#__PURE__*/new WeakMap();

var _docIndex = /*#__PURE__*/new WeakMap();

var _reason7 = /*#__PURE__*/new WeakMap();

var MisconceptionOccurrence = /*#__PURE__*/function () {
  /** @type {Number} */
  // The document line number

  /** @type {Number} */
  // The index in the document's raw text

  /** @type {Reason} */
  // A description of the relevant symptoms, tailored to the specific occurrence

  /**
   * Creates a new MisconceptionOccurrence
   * @param {Number} line The document line number
   * @param {Number} docIndex The index in the document's raw text
   * @param {Reason} reason A description of the relevant symptoms
   */
  function MisconceptionOccurrence(line, docIndex, reason) {
    _classCallCheck(this, MisconceptionOccurrence);

    _classPrivateFieldInitSpec(this, _line, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _docIndex, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _reason7, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _line, line);

    _classPrivateFieldSet(this, _docIndex, docIndex);

    _classPrivateFieldSet(this, _reason7, reason);
  }
  /**
   * Gets the document line number
   * @returns {Number} The document line number
   */


  _createClass(MisconceptionOccurrence, [{
    key: "getLineNumber",
    value: function getLineNumber() {
      return _classPrivateFieldGet(this, _line);
    }
    /**
     * Gets the index in the raw document text
     * @returns {Number} The index in the raw document text
     */

  }, {
    key: "getDocIndex",
    value: function getDocIndex() {
      return _classPrivateFieldGet(this, _docIndex);
    }
    /**
     * Gets the Reason for the occurrence
     * @returns {Reason} The Reason object that contains more information about the occurrence
     */

  }, {
    key: "getReason",
    value: function getReason() {
      return _classPrivateFieldGet(this, _reason7);
    }
    /**
     * Creates a JSON-friendly representation of the Misconception
     * @returns {Object} A JSON-friendly representation of the Misconception.
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        line: _classPrivateFieldGet(this, _line),
        docIndex: _classPrivateFieldGet(this, _docIndex),
        reason: _classPrivateFieldGet(this, _reason7).toJSON()
      };
    }
  }]);

  return MisconceptionOccurrence;
}();
/**
 * A class the stores information about why a particular symptom was detected, specifically the
 * symptoms that contributed to its detection and a string explanation.
 */


exports.MisconceptionOccurrence = MisconceptionOccurrence;

var _contributingSymptoms = /*#__PURE__*/new WeakMap();

var _explanation = /*#__PURE__*/new WeakMap();

var Reason = /*#__PURE__*/function () {
  /** @type {Symptom[]} */

  /** @type {String} */

  /**
   * Creates a new Reason.
   * @param {Symptom[]} contributingSymptoms 
   * @param {String} explanation 
   */
  function Reason(contributingSymptoms, explanation) {
    _classCallCheck(this, Reason);

    _classPrivateFieldInitSpec(this, _contributingSymptoms, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _explanation, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _contributingSymptoms, contributingSymptoms);

    _classPrivateFieldSet(this, _explanation, explanation);
  }
  /**
   * Creates a JSON representation of the reason.
   * @returns {Object} A JSON (or JSON-friendly) representation of the reason.
   */


  _createClass(Reason, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        contributingSymptoms: _classPrivateFieldGet(this, _contributingSymptoms).map(function (s) {
          return s.toJSON();
        }),
        explanation: _classPrivateFieldGet(this, _explanation)
      };
    }
  }]);

  return Reason;
}();
/**
 * A Map of misconception type to the misconception's detector function.
 */


exports.Reason = Reason;
var misconceptionDetector = new Map([[_enums.MisconceptionType.PrintSameAsReturn, printSameAsReturn], [_enums.MisconceptionType.MapToBooleanWithIf, mapToBooleanWithIf], [_enums.MisconceptionType.ComparisonWithBoolLiteral, comparisonWithBoolLiteral], [_enums.MisconceptionType.DeferredReturn, deferredReturn], [_enums.MisconceptionType.TypeMustBeSpecified, typeMustBeSpecified], [_enums.MisconceptionType.CompareMultipleValuesWithOr, compareMultipleValuesWithOr], [_enums.MisconceptionType.ParenthesesOnlyIfArgument, parenthesesOnlyIfArgument], [_enums.MisconceptionType.FunctionCallsUseSquareBrackets, functionCallsUseSquareBrackets], [_enums.MisconceptionType.FunctionCallsNoParentheses, functionCallsNoParentheses], [_enums.MisconceptionType.AssignCompares, assignCompares], [_enums.MisconceptionType.ReturnCall, returnCall], [_enums.MisconceptionType.SequentialIfsAreExclusive, sequentialIfsAreExclusive], [_enums.MisconceptionType.WhileSameAsIf, whileSameAsIf], [_enums.MisconceptionType.IterationRequiresTwoLoops, iterationRequiresTwoLoops], [_enums.MisconceptionType.StringMethodsModifyTheString, stringMethodsModifyTheString], [_enums.MisconceptionType.TypeConversionModifiesArgument, typeConversionModifiesArgument], [_enums.MisconceptionType.MapToBooleanWithTernaryOperator, mapToBooleanWithTernary], [_enums.MisconceptionType.NoReservedWords, noReservedWords], [_enums.MisconceptionType.ParameterMustBeAssignedInFunction, parameterMustBeAssignedInFunction], [_enums.MisconceptionType.LocalVariablesAreGlobal, localVariablesAreGlobal], [_enums.MisconceptionType.IteratorInitialisedOutsideLoop, iteratorInitialisedOutsideLoop], [_enums.MisconceptionType.ForLoopVarIsLocal, forLoopVarIsLocal], [_enums.MisconceptionType.LoopCounter, loopCounter], [_enums.MisconceptionType.NoKeyword, noKeyword], [_enums.MisconceptionType.ColonAssigns, colonAssigns] //25
]);
},{"../doc-model/enums.js":4,"../utils/constants.js":13,"../utils/utils.js":14,"./symptom.js":12}],12:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SymptomWrongArgNumber = exports.SymptomVariableWithSameNameAsFunction = exports.SymptomUnusedReturn = exports.SymptomUnreachableLoop = exports.SymptomUnreachableExit = exports.SymptomUnknownMethod = exports.SymptomUnexpectedColon = exports.SymptomUndefinedVariable = exports.SymptomTypeUnnecessary = exports.SymptomTypeInvalid = exports.SymptomTernaryReturnsBool = exports.SymptomSubscriptedNonSubscriptable = exports.SymptomSequentialIfs = exports.SymptomReturnInParentheses = exports.SymptomOverwrittenVariable = exports.SymptomOneLineConditional = exports.SymptomNaturalLanguageBoolean = exports.SymptomLoopVarNotUsed = exports.SymptomLoopVarModifiedInChildLoop = exports.SymptomLoopEarlyExit = exports.SymptomFunctionPrints = exports.SymptomFinder = exports.SymptomDefinitionFollowedByReservedWord = exports.SymptomCompareBoolLiteral = exports.SymptomAssignmentInReturn = exports.SymptomAssignedNoReturn = exports.Symptom = void 0;

var _enums = require("../doc-model/enums.js");

var _constants = require("../utils/constants.js");

var _utils = require("../utils/utils.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _id = /*#__PURE__*/new WeakMap();

var _line = /*#__PURE__*/new WeakMap();

var _docIndex = /*#__PURE__*/new WeakMap();

var _lineIndex = /*#__PURE__*/new WeakMap();

var _affectedText = /*#__PURE__*/new WeakMap();

var _additionalInfo = /*#__PURE__*/new WeakMap();

var _blockId = /*#__PURE__*/new WeakMap();

/**
 * A class representing a symptom that may indicate a misconception
 */
var Symptom = /*#__PURE__*/function () {
  /** @type {String} */
  // The logging ID of the symptom

  /** @type {Number} */
  // The document line number

  /** @type {Number} */
  // index in full document raw text

  /** @type {Number} */
  // index in the raw text of the given line

  /** @type {String} */
  // The text to highlight

  /** @type {Object} */
  // Properties vary by symptom

  /** @type {String} */

  /**
   * Creates a new Symptom
   * @param {String} id The string id for the symptom
   * @param {Number} lineNum The document line number
   * @param {String} blockId The id of the block containing the symptom
   * @param {Number} docIndex The index in the raw text of the document
   * @param {Number} lineIndex The index in the raw text of the line
   * @param {String} affectedText The text affected by the symptom
   * @param {Object} additionalInfo An optional object containing more information about the symptom
   */
  function Symptom(id, lineNum, blockId, docIndex, lineIndex) {
    var affectedText = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
    var additionalInfo = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};

    _classCallCheck(this, Symptom);

    _classPrivateFieldInitSpec(this, _id, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _line, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _docIndex, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _lineIndex, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _affectedText, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _additionalInfo, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _blockId, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _id, id);

    _classPrivateFieldSet(this, _line, lineNum);

    _classPrivateFieldSet(this, _blockId, blockId);

    _classPrivateFieldSet(this, _docIndex, docIndex);

    _classPrivateFieldSet(this, _lineIndex, lineIndex);

    _classPrivateFieldSet(this, _affectedText, affectedText);

    _classPrivateFieldSet(this, _additionalInfo, additionalInfo);
  }
  /**
   * Gets the ID of the symptom
   * @returns {String} The symptom ID
   */


  _createClass(Symptom, [{
    key: "getID",
    value: function getID() {
      return _classPrivateFieldGet(this, _id);
    }
    /**
     * Gets the document line number
     * @returns {Number} The document line number
     */

  }, {
    key: "getLineNumber",
    value: function getLineNumber() {
      return _classPrivateFieldGet(this, _line);
    }
  }, {
    key: "getBlock",
    value: function getBlock() {
      return _classPrivateFieldGet(this, _blockId);
    }
    /**
     * Gets the index of the symptom in the document's raw text
     * @returns {Number} The document index of the problem
     */

  }, {
    key: "getDocIndex",
    value: function getDocIndex() {
      return _classPrivateFieldGet(this, _docIndex);
    }
    /**
     * Gets the index of the symptom in the line's raw text
     * @returns {Number} The line index of the problem
     */

  }, {
    key: "getLineIndex",
    value: function getLineIndex() {
      return _classPrivateFieldGet(this, _lineIndex);
    }
    /**
     * Gets the affected text
     * @returns {String} The affected text
     */

  }, {
    key: "getAffectedText",
    value: function getAffectedText() {
      return _classPrivateFieldGet(this, _affectedText);
    }
    /**
     * Gets the additional information for this symptom
     * @returns {Object} An object containing more information about this symptom
     */

  }, {
    key: "getAdditionalInfo",
    value: function getAdditionalInfo() {
      return _classPrivateFieldGet(this, _additionalInfo);
    }
    /**
     * A static factory method that creates a new symptom with the appropriate subclass for the given problem type
     * @param {String} probType The symptom id
     * @param {Number} lineNumber The document line number
     * @param {String} blockId The string id of the block
     * @param {Number} docIndex The index of the symptom in the raw document text
     * @param {Number} lineIndex The index of the symptom in the raw line text
     * @param {String} affectedText The affected text
     * @param {Object} additionalInfo An optional object with more information
     * @returns {Symptom} A new Symptom of an instance of a more specific subclass.
     */

  }, {
    key: "toString",
    value:
    /**
     * Creates a String representation of the symptom
     * @returns {String} A String representation of the symptom
     */
    function toString() {
      return "{line: ".concat(_classPrivateFieldGet(this, _line), ", type: ").concat(_classPrivateFieldGet(this, _id), ", text: ").concat(_classPrivateFieldGet(this, _affectedText), ", docIndex: ").concat(_classPrivateFieldGet(this, _docIndex), ", lineIndex: ").concat(_classPrivateFieldGet(this, _lineIndex), ", additionalInfo: ").concat(_classPrivateFieldGet(this, _additionalInfo));
    }
    /**
     * Creates a JSON-friendly representation of the symptom
     * @returns {Object} A JSON-friendly representation of the symptom
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        line: _classPrivateFieldGet(this, _line),
        type: _classPrivateFieldGet(this, _id),
        text: _classPrivateFieldGet(this, _affectedText),
        block: _classPrivateFieldGet(this, _blockId),
        docIndex: _classPrivateFieldGet(this, _docIndex),
        lineIndex: _classPrivateFieldGet(this, _lineIndex)
      };
    }
  }], [{
    key: "createOLD",
    value: function createOLD(probType, lineNumber, blockId, docIndex, lineIndex) {
      var affectedText = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
      var additionalInfo = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};

      switch (probType) {
        case _enums.SymptomType.AssignedNone:
          // statement (tree) - added to new factory
          return new SymptomAssignedNoReturn(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.AssignmentInReturn:
          // statement (tree) - added to new factory
          return new SymptomAssignmentInReturn(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.CompareBoolLiteral:
          // statement (tree) - added to new factory
          return new SymptomCompareBoolLiteral(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.DefinitionFollowedByReservedWord:
          // statement (tree) - added to new factory
          return new SymptomDefinitionFollowedByReservedWord(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.FunctionPrints:
          // block statement
          return new SymptomFunctionPrints(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.LoopVarModifiedInChildLoop:
          // block statement
          return new SymptomLoopVarModifiedInChildLoop(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.LoopVarNotModified:
          // block statement
          return new SymptomLoopVarNotUsed(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.NaturalLanguageBoolean:
          // statement (tree) - added to new factory
          return new SymptomNaturalLanguageBoolean(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.OneLineConditional:
          // block statement
          return new SymptomOneLineConditional(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.OverwrittenVariable:
          // variables
          return new SymptomOverwrittenVariable(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.ReturnInParentheses:
          // statement (tree) - added to new factory
          return new SymptomReturnInParentheses(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.SequentialIfs:
          // block
          return new SymptomSequentialIfs(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.SubscriptedNonSubscriptable:
          // statement (tree) - added to new factory
          return new SymptomSubscriptedNonSubscriptable(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.TernaryReturnsBool:
          // statement - added to new factory
          return new SymptomTernaryReturnsBool(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.TypeErrorInvalid:
          // statement - added to new factory
          return new SymptomTypeInvalid(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.TypeUnnecessary:
          // statement - added to new factory
          return new SymptomTypeUnnecessary(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.UnexpectedColon:
          // statement - added to new factory
          return new SymptomUnexpectedColon(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.UnknownMethod:
          return new SymptomUnknownMethod(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.UnreachableExit:
          // block
          return new SymptomUnreachableExit(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.UnreachableInfiniteLoop:
          // block
          return new SymptomUnreachableLoop(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.UndefinedVariable:
          // variable
          return new SymptomUndefinedVariable(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.UnusedReturn:
          // statment
          return new SymptomUnusedReturn(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.VariableWithSameNameAsFunction:
          // variables and functions
          return new SymptomVariableWithSameNameAsFunction(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        default:
          return new Symptom(probType.name, lineNumber, blockId, docIndex, lineIndex, affectedText, additionalInfo);
      }
    }
  }]);

  return Symptom;
}(); //#region - specific symptom subclasses

/**
 * A class representing the AssignedNone symptom. Added to factory.
 * @extends Symptom
 */


exports.Symptom = Symptom;

var SymptomAssignedNoReturn = /*#__PURE__*/function (_Symptom) {
  _inherits(SymptomAssignedNoReturn, _Symptom);

  var _super = _createSuper(SymptomAssignedNoReturn);

  function SymptomAssignedNoReturn() {
    _classCallCheck(this, SymptomAssignedNoReturn);

    return _super.apply(this, arguments);
  }

  _createClass(SymptomAssignedNoReturn, [{
    key: "toJSON",
    value:
    /**
     * @inheritdoc
     */
    function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomAssignedNoReturn.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();

      if (additionalInfo.hasOwnProperty("expression")) {
        var type = additionalInfo.expression.getCategory().name;

        if (additionalInfo.expression.getEntity() === _enums.ExpressionEntity.VariableName) {
          type = _constants.USER_DEFINED_VARIABLE;
        } else if (additionalInfo.expression.is(_enums.ExpressionEntity.UserDefinedFunctionCall)) {
          type = _constants.USER_DEFINED_FUNCTION;
        } else if (additionalInfo.expression.is(_enums.ExpressionEntity.BuiltInFunctionCall)) {
          type = _constants.BUILT_IN_FUNCTION;
        }

        obj.expressionNoValue = {
          type: type,
          value: additionalInfo.expression.getTextValue()
        };
      }

      if (additionalInfo.hasOwnProperty("usage")) {
        obj.usage = additionalInfo.usage;
      }

      if (additionalInfo.hasOwnProperty("target")) {
        obj.target = additionalInfo.target;
      }

      return obj;
    }
  }]);

  return SymptomAssignedNoReturn;
}(Symptom);
/**
 * A class representing the AssignmentInReturn symptom. Added to factory.
 * @extends Symptom
 */


exports.SymptomAssignedNoReturn = SymptomAssignedNoReturn;

var SymptomAssignmentInReturn = /*#__PURE__*/function (_Symptom2) {
  _inherits(SymptomAssignmentInReturn, _Symptom2);

  var _super2 = _createSuper(SymptomAssignmentInReturn);

  function SymptomAssignmentInReturn() {
    _classCallCheck(this, SymptomAssignmentInReturn);

    return _super2.apply(this, arguments);
  }

  _createClass(SymptomAssignmentInReturn, [{
    key: "toJSON",
    value:
    /**
     * @inheritdoc
     */
    function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomAssignmentInReturn.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();
      if (additionalInfo.hasOwnProperty("assignedVariables")) obj.assignedVariables = additionalInfo.assignedVariables;
      return obj;
    }
  }]);

  return SymptomAssignmentInReturn;
}(Symptom);
/**
 * A class representing the CompareBoolLiteral symptom. Added to factory.
 * @extends Symptom
 */


exports.SymptomAssignmentInReturn = SymptomAssignmentInReturn;

var SymptomCompareBoolLiteral = /*#__PURE__*/function (_Symptom3) {
  _inherits(SymptomCompareBoolLiteral, _Symptom3);

  var _super3 = _createSuper(SymptomCompareBoolLiteral);

  function SymptomCompareBoolLiteral() {
    _classCallCheck(this, SymptomCompareBoolLiteral);

    return _super3.apply(this, arguments);
  }

  _createClass(SymptomCompareBoolLiteral, [{
    key: "toJSON",
    value: function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomCompareBoolLiteral.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();
      if (additionalInfo.hasOwnProperty("boolValue")) obj.boolValue = additionalInfo.boolValue;
      if (additionalInfo.hasOwnProperty("operator")) obj.operator = additionalInfo.operator;
      if (additionalInfo.hasOwnProperty("boolLiteral")) obj.boolLiteral = additionalInfo.boolLiteral;
      return obj;
    }
  }]);

  return SymptomCompareBoolLiteral;
}(Symptom);
/**
 * A class representing the DefinitionFollowedByReservedWord symptom.
 * Added to factory.
 * @extends Symptom
 */


exports.SymptomCompareBoolLiteral = SymptomCompareBoolLiteral;

var SymptomDefinitionFollowedByReservedWord = /*#__PURE__*/function (_Symptom4) {
  _inherits(SymptomDefinitionFollowedByReservedWord, _Symptom4);

  var _super4 = _createSuper(SymptomDefinitionFollowedByReservedWord);

  function SymptomDefinitionFollowedByReservedWord() {
    _classCallCheck(this, SymptomDefinitionFollowedByReservedWord);

    return _super4.apply(this, arguments);
  }

  _createClass(SymptomDefinitionFollowedByReservedWord, [{
    key: "toJSON",
    value:
    /**
     * @inheritdoc
     */
    function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomDefinitionFollowedByReservedWord.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();
      if (additionalInfo.hasOwnProperty("definitionType")) obj.boolValue = additionalInfo.definitionType;
      if (additionalInfo.hasOwnProperty("reservedWord")) obj.reservedWord = additionalInfo.reservedWord;
      return obj;
    }
  }]);

  return SymptomDefinitionFollowedByReservedWord;
}(Symptom);
/**
 * A class representing the FunctionPrints symptom.
 * @extends Symptom
 */


exports.SymptomDefinitionFollowedByReservedWord = SymptomDefinitionFollowedByReservedWord;

var SymptomFunctionPrints = /*#__PURE__*/function (_Symptom5) {
  _inherits(SymptomFunctionPrints, _Symptom5);

  var _super5 = _createSuper(SymptomFunctionPrints);

  function SymptomFunctionPrints() {
    _classCallCheck(this, SymptomFunctionPrints);

    return _super5.apply(this, arguments);
  }

  _createClass(SymptomFunctionPrints, [{
    key: "toJSON",
    value:
    /**
     * @inheritdoc
     */
    function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomFunctionPrints.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();

      if (additionalInfo.hasOwnProperty("printLines")) {
        obj.printLines = additionalInfo.printLines;
      }

      if (additionalInfo.hasOwnProperty("functionReturns")) {
        obj.functionReturns = additionalInfo.functionReturns;
      }

      return obj;
    }
  }]);

  return SymptomFunctionPrints;
}(Symptom);

exports.SymptomFunctionPrints = SymptomFunctionPrints;

var SymptomLoopEarlyExit = /*#__PURE__*/function (_Symptom6) {
  _inherits(SymptomLoopEarlyExit, _Symptom6);

  var _super6 = _createSuper(SymptomLoopEarlyExit);

  function SymptomLoopEarlyExit() {
    _classCallCheck(this, SymptomLoopEarlyExit);

    return _super6.apply(this, arguments);
  }

  _createClass(SymptomLoopEarlyExit, [{
    key: "toJSON",
    value:
    /**
     * @inheritdoc
     */
    function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomLoopEarlyExit.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();

      if (additionalInfo.hasOwnProperty("loopType")) {
        obj.loopType = additionalInfo.loopType;
      }

      if (additionalInfo.hasOwnProperty("exitLevel")) {
        obj.exitLevel = additionalInfo.exitLevel;
      }

      if (additionalInfo.hasOwnProperty("exitType")) {
        obj.exitType = additionalInfo.exitType;
      }

      if (additionalInfo.hasOwnProperty("exitTypes")) {
        obj.exitTypes = additionalInfo.exitTypes;
      }

      return obj;
    }
  }]);

  return SymptomLoopEarlyExit;
}(Symptom);
/**
 * A class representing the LoopVarModifiedInChildLoop symptom.
 * @extends Symptom
 */


exports.SymptomLoopEarlyExit = SymptomLoopEarlyExit;

var SymptomLoopVarModifiedInChildLoop = /*#__PURE__*/function (_Symptom7) {
  _inherits(SymptomLoopVarModifiedInChildLoop, _Symptom7);

  var _super7 = _createSuper(SymptomLoopVarModifiedInChildLoop);

  function SymptomLoopVarModifiedInChildLoop() {
    _classCallCheck(this, SymptomLoopVarModifiedInChildLoop);

    return _super7.apply(this, arguments);
  }

  _createClass(SymptomLoopVarModifiedInChildLoop, [{
    key: "toJSON",
    value:
    /**
     * @inheritdoc
     */
    function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomLoopVarModifiedInChildLoop.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();

      if (additionalInfo.hasOwnProperty("modifiedIn")) {
        obj.modifiedIn = additionalInfo.modifiedIn;
      }

      return obj;
    }
  }]);

  return SymptomLoopVarModifiedInChildLoop;
}(Symptom);
/**
 * A class representing the LoopVarNotUsed symptom.
 * @extends Symptom
 */


exports.SymptomLoopVarModifiedInChildLoop = SymptomLoopVarModifiedInChildLoop;

var SymptomLoopVarNotUsed = /*#__PURE__*/function (_Symptom8) {
  _inherits(SymptomLoopVarNotUsed, _Symptom8);

  var _super8 = _createSuper(SymptomLoopVarNotUsed);

  function SymptomLoopVarNotUsed() {
    _classCallCheck(this, SymptomLoopVarNotUsed);

    return _super8.apply(this, arguments);
  }

  _createClass(SymptomLoopVarNotUsed, [{
    key: "toJSON",
    value:
    /**
     * @inheritdoc
     */
    function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomLoopVarNotUsed.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();

      if (additionalInfo.hasOwnProperty("unmodifiedVars")) {
        obj.unmodifiedVars = additionalInfo.unmodifiedVars;
      }

      return obj;
    }
  }]);

  return SymptomLoopVarNotUsed;
}(Symptom);
/**
 * A class representing the NaturalLanguageBoolean symptom. Added to factory.
 * @extends Symptom
 */


exports.SymptomLoopVarNotUsed = SymptomLoopVarNotUsed;

var SymptomNaturalLanguageBoolean = /*#__PURE__*/function (_Symptom9) {
  _inherits(SymptomNaturalLanguageBoolean, _Symptom9);

  var _super9 = _createSuper(SymptomNaturalLanguageBoolean);

  function SymptomNaturalLanguageBoolean() {
    _classCallCheck(this, SymptomNaturalLanguageBoolean);

    return _super9.apply(this, arguments);
  }

  _createClass(SymptomNaturalLanguageBoolean, [{
    key: "toJSON",
    value:
    /**
     * @inheritdoc
     */
    function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomNaturalLanguageBoolean.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();

      if (additionalInfo.hasOwnProperty("form")) {
        obj.form = additionalInfo.form;
      }

      if (additionalInfo.hasOwnProperty("operator")) {
        obj.operator = additionalInfo.operator;
      }

      if (additionalInfo.hasOwnProperty("valueType")) {
        obj.valueType = additionalInfo.valueType.name;
      }

      return obj;
    }
  }]);

  return SymptomNaturalLanguageBoolean;
}(Symptom);
/**
 * A class representing the OneLineConditional symptom.
 * @extends Symptom
 */


exports.SymptomNaturalLanguageBoolean = SymptomNaturalLanguageBoolean;

var SymptomOneLineConditional = /*#__PURE__*/function (_Symptom10) {
  _inherits(SymptomOneLineConditional, _Symptom10);

  var _super10 = _createSuper(SymptomOneLineConditional);

  function SymptomOneLineConditional() {
    _classCallCheck(this, SymptomOneLineConditional);

    return _super10.apply(this, arguments);
  }

  _createClass(SymptomOneLineConditional, [{
    key: "toJSON",
    value:
    /**
     * @inheritdoc
     */
    function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomOneLineConditional.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();

      if (additionalInfo.hasOwnProperty("form")) {
        obj.form = additionalInfo.form;
      }

      if (additionalInfo.hasOwnProperty("variableAssigned")) {
        obj.variableAssigned = additionalInfo.variableAssigned;
      }

      return obj;
    }
  }]);

  return SymptomOneLineConditional;
}(Symptom);
/**
 * A class representing the OverwrittenVariable symptom. Added to factory.
 * @extends Symptom
 */


exports.SymptomOneLineConditional = SymptomOneLineConditional;

var SymptomOverwrittenVariable = /*#__PURE__*/function (_Symptom11) {
  _inherits(SymptomOverwrittenVariable, _Symptom11);

  var _super11 = _createSuper(SymptomOverwrittenVariable);

  function SymptomOverwrittenVariable() {
    _classCallCheck(this, SymptomOverwrittenVariable);

    return _super11.apply(this, arguments);
  }

  _createClass(SymptomOverwrittenVariable, [{
    key: "toJSON",
    value:
    /**
     * @inheritdoc
     */
    function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomOverwrittenVariable.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();

      if (additionalInfo.hasOwnProperty("isParameter")) {
        obj.isParameter = additionalInfo.isParameter;
      }

      if (additionalInfo.hasOwnProperty("prevUsageIsDefinition")) {
        obj.prevUsageIsDefinition = additionalInfo.prevUsageIsDefinition;
      }

      if (additionalInfo.hasOwnProperty("overwriteType")) {
        obj.overwriteType = additionalInfo.overwriteType;
      }

      if (additionalInfo.hasOwnProperty("overwriteValue")) {
        obj.overwriteValue = additionalInfo.overwriteValue;
      }

      if (additionalInfo.hasOwnProperty("overwrittenVar")) {
        obj.overwrittenVar = additionalInfo.overwrittenVar;
      }

      return obj;
    }
  }]);

  return SymptomOverwrittenVariable;
}(Symptom);
/**
 * A class representing the ReturnInParentheses symptom. Added to factory.
 * @extends Symptom
 */


exports.SymptomOverwrittenVariable = SymptomOverwrittenVariable;

var SymptomReturnInParentheses = /*#__PURE__*/function (_Symptom12) {
  _inherits(SymptomReturnInParentheses, _Symptom12);

  var _super12 = _createSuper(SymptomReturnInParentheses);

  function SymptomReturnInParentheses() {
    _classCallCheck(this, SymptomReturnInParentheses);

    return _super12.apply(this, arguments);
  }

  _createClass(SymptomReturnInParentheses, [{
    key: "toJSON",
    value:
    /**
     * @inheritdoc
     */
    function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomReturnInParentheses.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();

      if (additionalInfo.hasOwnProperty("contents")) {
        obj.contents = additionalInfo.contents;
      }

      return obj;
    }
  }]);

  return SymptomReturnInParentheses;
}(Symptom);
/**
 * A class representing the SequentialIfs symptom.
 * @extends Symptom
 */


exports.SymptomReturnInParentheses = SymptomReturnInParentheses;

var SymptomSequentialIfs = /*#__PURE__*/function (_Symptom13) {
  _inherits(SymptomSequentialIfs, _Symptom13);

  var _super13 = _createSuper(SymptomSequentialIfs);

  function SymptomSequentialIfs() {
    _classCallCheck(this, SymptomSequentialIfs);

    return _super13.apply(this, arguments);
  }

  _createClass(SymptomSequentialIfs, [{
    key: "toJSON",
    value:
    /**
     * @inheritdoc
     */
    function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomSequentialIfs.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();

      if (additionalInfo.hasOwnProperty("branchMatches")) {
        obj.branchMatches = additionalInfo.branchMatches;
      }

      return obj;
    }
  }]);

  return SymptomSequentialIfs;
}(Symptom);
/**
 * A class representing the SubscriptedNonSubscriptable symptom. Added to factory.
 * @extends Symptom
 */


exports.SymptomSequentialIfs = SymptomSequentialIfs;

var SymptomSubscriptedNonSubscriptable = /*#__PURE__*/function (_Symptom14) {
  _inherits(SymptomSubscriptedNonSubscriptable, _Symptom14);

  var _super14 = _createSuper(SymptomSubscriptedNonSubscriptable);

  function SymptomSubscriptedNonSubscriptable() {
    _classCallCheck(this, SymptomSubscriptedNonSubscriptable);

    return _super14.apply(this, arguments);
  }

  _createClass(SymptomSubscriptedNonSubscriptable, [{
    key: "toJSON",
    value:
    /**
     * @inheritdoc
     */
    function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomSubscriptedNonSubscriptable.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();

      if (additionalInfo.hasOwnProperty("isUndefined")) {
        obj.isUndefined = additionalInfo.isUndefined;
      }

      if (additionalInfo.hasOwnProperty("subscriptedType")) {
        obj.subscriptedType = additionalInfo.subscriptedType.name;
      }

      if (additionalInfo.hasOwnProperty("varName")) {
        obj.varName = additionalInfo.varName;
      }

      return obj;
    }
  }]);

  return SymptomSubscriptedNonSubscriptable;
}(Symptom);
/**
 * A class representing the TernaryReturnsBool symptom. Added to factory.
 * @extends Symptom
 */


exports.SymptomSubscriptedNonSubscriptable = SymptomSubscriptedNonSubscriptable;

var SymptomTernaryReturnsBool = /*#__PURE__*/function (_Symptom15) {
  _inherits(SymptomTernaryReturnsBool, _Symptom15);

  var _super15 = _createSuper(SymptomTernaryReturnsBool);

  function SymptomTernaryReturnsBool() {
    _classCallCheck(this, SymptomTernaryReturnsBool);

    return _super15.apply(this, arguments);
  }

  _createClass(SymptomTernaryReturnsBool, [{
    key: "toJSON",
    value:
    /**
     * @inheritdoc
     */
    function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomTernaryReturnsBool.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();
      if (additionalInfo.hasOwnProperty("boolValue")) obj.boolValue = additionalInfo.boolValue;
      if (additionalInfo.hasOwnProperty("boolLiteralIfTrue")) obj.boolLiteralIfTrue = additionalInfo.boolLiteralIfTrue;
      if (additionalInfo.hasOwnProperty("boolLiteralIfFalse")) obj.boolLiteralIfFalse = additionalInfo.boolLiteralIfFalse;
      return obj;
    }
  }]);

  return SymptomTernaryReturnsBool;
}(Symptom);
/**
 * A class representing the InvalidCalculation symptom. Added to factory.
 * @extends Symptom
 */


exports.SymptomTernaryReturnsBool = SymptomTernaryReturnsBool;

var SymptomTypeInvalid = /*#__PURE__*/function (_Symptom16) {
  _inherits(SymptomTypeInvalid, _Symptom16);

  var _super16 = _createSuper(SymptomTypeInvalid);

  function SymptomTypeInvalid() {
    _classCallCheck(this, SymptomTypeInvalid);

    return _super16.apply(this, arguments);
  }

  _createClass(SymptomTypeInvalid, [{
    key: "toJSON",
    value:
    /**
     * @inheritdoc
     */
    function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomTypeInvalid.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();

      if (additionalInfo.hasOwnProperty("parts")) {
        obj.parts = additionalInfo.parts;
      }

      return obj;
    }
  }]);

  return SymptomTypeInvalid;
}(Symptom);
/**
 * A class representing the TypeUnnecessary symptom. Added to factory.
 * @extends Symptom
 */


exports.SymptomTypeInvalid = SymptomTypeInvalid;

var SymptomTypeUnnecessary = /*#__PURE__*/function (_Symptom17) {
  _inherits(SymptomTypeUnnecessary, _Symptom17);

  var _super17 = _createSuper(SymptomTypeUnnecessary);

  function SymptomTypeUnnecessary() {
    _classCallCheck(this, SymptomTypeUnnecessary);

    return _super17.apply(this, arguments);
  }

  _createClass(SymptomTypeUnnecessary, [{
    key: "toJSON",
    value:
    /**
     * @inheritdoc
     */
    function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomTypeUnnecessary.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();

      if (additionalInfo.hasOwnProperty("convertedValue")) {
        obj.convertedValue = additionalInfo.convertedValue;
      }

      if (additionalInfo.hasOwnProperty("argType")) {
        obj.argType = additionalInfo.argType;
      }

      if (additionalInfo.hasOwnProperty("convertedType")) {
        obj.convertedType = additionalInfo.convertedType;
      }

      return obj;
    }
  }]);

  return SymptomTypeUnnecessary;
}(Symptom);
/**
 * A class representing the UndefinedVariable symptom. Added to factory.
 * @extends Symptom
 */


exports.SymptomTypeUnnecessary = SymptomTypeUnnecessary;

var SymptomUndefinedVariable = /*#__PURE__*/function (_Symptom18) {
  _inherits(SymptomUndefinedVariable, _Symptom18);

  var _super18 = _createSuper(SymptomUndefinedVariable);

  function SymptomUndefinedVariable() {
    _classCallCheck(this, SymptomUndefinedVariable);

    return _super18.apply(this, arguments);
  }

  _createClass(SymptomUndefinedVariable, [{
    key: "toJSON",
    value:
    /**
     * @inheritdoc
     */
    function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomUndefinedVariable.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();

      if (additionalInfo.hasOwnProperty("variable")) {
        obj.variable = additionalInfo.variable.toJSON();
      }

      return obj;
    }
  }]);

  return SymptomUndefinedVariable;
}(Symptom);
/**
 * A class representing the UnexpectedColon symptom. Added to factory.
 * @extends Symptom
 */


exports.SymptomUndefinedVariable = SymptomUndefinedVariable;

var SymptomUnexpectedColon = /*#__PURE__*/function (_Symptom19) {
  _inherits(SymptomUnexpectedColon, _Symptom19);

  var _super19 = _createSuper(SymptomUnexpectedColon);

  function SymptomUnexpectedColon() {
    _classCallCheck(this, SymptomUnexpectedColon);

    return _super19.apply(this, arguments);
  }

  _createClass(SymptomUnexpectedColon, [{
    key: "toJSON",
    value:
    /**
     * @inheritdoc
     */
    function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomUnexpectedColon.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();

      if (additionalInfo.hasOwnProperty("before")) {
        obj.before = additionalInfo.before;
      }

      if (additionalInfo.hasOwnProperty("after")) {
        obj.after = additionalInfo.after;
      }

      return obj;
    }
  }]);

  return SymptomUnexpectedColon;
}(Symptom);
/**
 * A class representing the UnknownMethod symptom. Added to factory.
 * @extends Symptom
 */


exports.SymptomUnexpectedColon = SymptomUnexpectedColon;

var SymptomUnknownMethod = /*#__PURE__*/function (_Symptom20) {
  _inherits(SymptomUnknownMethod, _Symptom20);

  var _super20 = _createSuper(SymptomUnknownMethod);

  function SymptomUnknownMethod() {
    _classCallCheck(this, SymptomUnknownMethod);

    return _super20.apply(this, arguments);
  }

  _createClass(SymptomUnknownMethod, [{
    key: "toJSON",
    value:
    /**
     * @inheritdoc
     */
    function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomUnknownMethod.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();

      if (additionalInfo.hasOwnProperty("objectType")) {
        obj.objectType = additionalInfo.objectType;
      }

      return obj;
    }
  }]);

  return SymptomUnknownMethod;
}(Symptom);
/**
 * A class representing the UnreachableExit symptom.
 * @extends Symptom
 */


exports.SymptomUnknownMethod = SymptomUnknownMethod;

var SymptomUnreachableExit = /*#__PURE__*/function (_Symptom21) {
  _inherits(SymptomUnreachableExit, _Symptom21);

  var _super21 = _createSuper(SymptomUnreachableExit);

  function SymptomUnreachableExit() {
    _classCallCheck(this, SymptomUnreachableExit);

    return _super21.apply(this, arguments);
  }

  _createClass(SymptomUnreachableExit, [{
    key: "toJSON",
    value:
    /**
     * @inheritdoc
     */
    function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomUnreachableExit.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();

      if (additionalInfo.hasOwnProperty("exitKeyword")) {
        obj.exitKeyword = additionalInfo.exitKeyword;
      }
      /*if (additionalInfo.hasOwnProperty("functionName")) {
          obj.functionName = additionalInfo.functionName;
      }*/


      return obj;
    }
  }]);

  return SymptomUnreachableExit;
}(Symptom);
/**
 * A class representing the UnreachableLoop symptom.
 * @extends Symptom
 */


exports.SymptomUnreachableExit = SymptomUnreachableExit;

var SymptomUnreachableLoop = /*#__PURE__*/function (_Symptom22) {
  _inherits(SymptomUnreachableLoop, _Symptom22);

  var _super22 = _createSuper(SymptomUnreachableLoop);

  function SymptomUnreachableLoop() {
    _classCallCheck(this, SymptomUnreachableLoop);

    return _super22.apply(this, arguments);
  }

  _createClass(SymptomUnreachableLoop, [{
    key: "toJSON",
    value:
    /**
     * @inheritdoc
     */
    function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomUnreachableLoop.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();

      if (additionalInfo.hasOwnProperty("infiniteLoopLine")) {
        obj.infiniteLoopLine = additionalInfo.infiniteLoopLine;
      }

      return obj;
    }
  }]);

  return SymptomUnreachableLoop;
}(Symptom);
/**
 * A class representing the UnusedReturn symptom. Added to factory.
 * @extends Symptom
 */


exports.SymptomUnreachableLoop = SymptomUnreachableLoop;

var SymptomUnusedReturn = /*#__PURE__*/function (_Symptom23) {
  _inherits(SymptomUnusedReturn, _Symptom23);

  var _super23 = _createSuper(SymptomUnusedReturn);

  function SymptomUnusedReturn() {
    _classCallCheck(this, SymptomUnusedReturn);

    return _super23.apply(this, arguments);
  }

  _createClass(SymptomUnusedReturn, [{
    key: "toJSON",
    value:
    /**
     * @inheritdoc
     */
    function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomUnusedReturn.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();

      if (additionalInfo.hasOwnProperty("expression")) {
        var type = additionalInfo.expression.getCategory().name;

        if (additionalInfo.expression.getEntity() === _enums.ExpressionEntity.FunctionName) {
          type = _constants.USER_DEFINED_FUNCTION;
        } else if (additionalInfo.expression.getCategory() === _enums.ExpressionCategory.BuiltInFunctions) {
          type = _constants.BUILT_IN_FUNCTION;
        }

        obj.unusedFunc = {
          type: type,
          value: additionalInfo.expression.getTextValue()
        };
      }

      return obj;
    }
  }]);

  return SymptomUnusedReturn;
}(Symptom);
/**
 * A class representing the VariableWithSameNameAsFunction symptom.
 * @extends Symptom
 */


exports.SymptomUnusedReturn = SymptomUnusedReturn;

var SymptomVariableWithSameNameAsFunction = /*#__PURE__*/function (_Symptom24) {
  _inherits(SymptomVariableWithSameNameAsFunction, _Symptom24);

  var _super24 = _createSuper(SymptomVariableWithSameNameAsFunction);

  function SymptomVariableWithSameNameAsFunction() {
    _classCallCheck(this, SymptomVariableWithSameNameAsFunction);

    return _super24.apply(this, arguments);
  }

  _createClass(SymptomVariableWithSameNameAsFunction, [{
    key: "toJSON",
    value:
    /**
     * @inheritdoc
     */
    function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomVariableWithSameNameAsFunction.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();

      if (additionalInfo.hasOwnProperty("funcType")) {
        obj.funcType = additionalInfo.funcType;
      }

      if (additionalInfo.hasOwnProperty("numArgsExpected")) {
        obj.numArgsExpected = additionalInfo.numArgsExpected;
      }

      if (additionalInfo.hasOwnProperty("varIsParameter")) {
        obj.varIsParameter = additionalInfo.varIsParameter;
      }

      return obj;
    }
  }]);

  return SymptomVariableWithSameNameAsFunction;
}(Symptom);

exports.SymptomVariableWithSameNameAsFunction = SymptomVariableWithSameNameAsFunction;

var SymptomWrongArgNumber = /*#__PURE__*/function (_Symptom25) {
  _inherits(SymptomWrongArgNumber, _Symptom25);

  var _super25 = _createSuper(SymptomWrongArgNumber);

  function SymptomWrongArgNumber() {
    _classCallCheck(this, SymptomWrongArgNumber);

    return _super25.apply(this, arguments);
  }

  _createClass(SymptomWrongArgNumber, [{
    key: "toJSON",
    value: function toJSON() {
      var obj = _get(_getPrototypeOf(SymptomWrongArgNumber.prototype), "toJSON", this).call(this);

      var additionalInfo = this.getAdditionalInfo();

      if (additionalInfo.hasOwnProperty("expectedMinArgs")) {
        obj.expectedMinArgs = additionalInfo.expectedMinArgs;
      }

      if (additionalInfo.hasOwnProperty("expectedMaxArgs")) {
        obj.expectedMinArgs = additionalInfo.expectedMaxArgs;
      }

      if (additionalInfo.hasOwnProperty("receivedArgs")) {
        obj.receivedArgs = additionalInfo.receivedArgs;
      }

      return obj;
      /*
      expectedMinArgs: minArgs,
                          expectedMaxArgs: maxArgs,
                          receivedArgs: numArgs.length
      */
    }
  }]);

  return SymptomWrongArgNumber;
}(Symptom); //#endregion - specific symptom subclasses


exports.SymptomWrongArgNumber = SymptomWrongArgNumber;

var SymptomFinder = /*#__PURE__*/function () {
  function SymptomFinder() {
    _classCallCheck(this, SymptomFinder);
  }

  _createClass(SymptomFinder, null, [{
    key: "createStatementSymptom",
    value:
    /**
     * Factory method to create a new Symptom object that occurs in a single statement
     * @param {SymptomType} type The type of symptom
     * @param {ExpressionNode[]} expressions The expressions in the statement
     * @param {Number} startIndex The index of the expression that the Symptom starts with
     * @param {Number} endIndex The index of the expression that the Symptom ends with (inclusive)
     * @param {Object} additionalInfo An Object literal containing any additional information about the Symptom
     * @param {String} block Optional. The block id.
     * @returns {Symptom}
     */
    function createStatementSymptom(type, expressions, startIndex, endIndex) {
      var additionalInfo = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var block = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
      var lineNum = expressions[startIndex].getStartLineNumber();
      var blockId = block === "" ? expressions[startIndex].getBlockId() : block;
      var docIndex = expressions[startIndex].getDocumentStartIndex();
      var lineIndex = expressions[startIndex].getIndexOnLine();
      var affectedText = (0, _utils.getTextOfExpressions)(expressions.slice(startIndex, endIndex + 1));

      switch (type) {
        case _enums.SymptomType.AssignedNone:
          return new SymptomAssignedNoReturn(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.AssignmentInReturn:
          return new SymptomAssignmentInReturn(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.CompareBoolLiteral:
          // statement (tree)
          return new SymptomCompareBoolLiteral(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.DefinitionFollowedByReservedWord:
          // statement (tree)
          return new SymptomDefinitionFollowedByReservedWord(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.FunctionPrints:
          return new SymptomFunctionPrints(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.LoopVarModifiedInChildLoop:
          return new SymptomLoopVarModifiedInChildLoop(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.LoopVarNotModified:
          return new SymptomLoopVarNotUsed(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.NaturalLanguageBoolean:
          // statement (tree)
          return new SymptomNaturalLanguageBoolean(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.OneLineConditional:
          return new SymptomOneLineConditional(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.OverwrittenVariable:
          return new SymptomOverwrittenVariable(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.ReturnInParentheses:
          // statement (tree)
          return new SymptomReturnInParentheses(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.SequentialIfs:
          return new SymptomSequentialIfs(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.SubscriptedNonSubscriptable:
          // statement (tree)
          return new SymptomSubscriptedNonSubscriptable(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.TernaryReturnsBool:
          // statement
          return new SymptomTernaryReturnsBool(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.TypeErrorInvalid:
          // statement
          return new SymptomTypeInvalid(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.TypeUnnecessary:
          // statement
          return new SymptomTypeUnnecessary(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.UndefinedVariable:
          return new SymptomUndefinedVariable(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.UnexpectedColon:
          // statement
          return new SymptomUnexpectedColon(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.UnknownMethod:
          // statment
          return new SymptomUnknownMethod(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.UnreachableExit:
          return new SymptomUnreachableExit(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.UnreachableInfiniteLoop:
          return new SymptomUnreachableLoop(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.UnusedReturn:
          // statment
          return new SymptomUnusedReturn(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.VariableWithSameNameAsFunction:
          return new SymptomVariableWithSameNameAsFunction(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        case _enums.SymptomType.WrongArgNumber:
          return new SymptomWrongArgNumber(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);

        default:
          return new Symptom(type.name, lineNum, blockId, docIndex, lineIndex, affectedText, additionalInfo);
      }
    } // /**
    //  * Searches for symptoms that can be found in a fully parsed expression array i.e. the expressions after
    //  * they are parsed into a tree.
    //  * @param {Statement} statement 
    //  * @param {String} blockId The id of the block the expressions belong to
    //  */
    // static searchExpressionTree(statement, blockId) {
    //     const expressions = statement.getExpressions();
    //     this.#checkAssignedNone(expressions, blockId);
    //     this.#checkAssignmentInBoolean(expressions, statement, blockId);
    //     this.#checkBooleanExpressions(expressions, blockId);
    // }
    // /**
    //  * Helper method. Checks if the expression at index i indicates the CompareBoolLiteral symptom.
    //  * @param {ExpressionNode[]} expressions 
    //  * @param {String} blockId
    //  */
    // static #checkBooleanExpressions(expressions, blockId) {
    //     for (const e of expressions) {
    //         const boolExpressions = e.getExpressionsOfKind(ExpressionEntity.ComparisonExpression);
    //         for (const bool of boolExpressions) {
    //             const children = bool.getChildren();
    //             if (this.#isCompareBoolLiteral(children)) {
    //                 this.symptoms.push(SymptomFinder.createStatementSymptom(SymptomType.CompareBoolLiteral,
    //                                                                          children, 0, children.length - 1, blockId,
    //                                                                          {
    //                                                                             boolValue: children[0].getTextValue(),
    //                                                                             operator: children[1].getTextValue(),
    //                                                                             boolLiteral: children[2].getTextValue()
    //                                                                          }));
    //             }
    //         }   
    //     }
    // }
    // /**
    //  * Helper method to check if 
    //  * @param {ExpressionNode[]} children 
    //  * @returns {Boolean}
    //  */
    // static #isCompareBoolLiteral(children) {
    //     return children.length === 3 && children[1].isOneOf([ExpressionEntity.EqualOperator, ExpressionEntity.IsKeyword])
    //                 && children[2].isOneOf([ExpressionEntity.TrueType, ExpressionEntity.FalseType]);
    // }
    // /**
    //  * Helper method. Checks if the expression at index i indicates the AndOr symptom.
    //  * @param {ExpressionNode[]} expressions 
    //  * @param {Number} i 
    //  * @returns {Boolean}
    //  */
    // static #isAndOr(expressions, i) {
    //     return expressions[i].is(ExpressionEntity.AndOperator) && i < expressions.length - 1 && expressions[i+1].is(ExpressionEntity.OrOperator)
    // }
    // /**
    //  * Helper method. Checks for the presence of a split comparison operator.
    //  * @param {ExpressionNode[]} expressions 
    //  * @param {Number} i 
    //  * @returns {Boolean}
    //  */
    // static #isDoubleComparisonOperator(expressions, i) {
    //     return i < expressions.length - 1 && expressions[i].isOneOf([ExpressionEntity.AssignmentOperator, ExpressionCategory.ComparisonOperators])
    //            && expressions[i+1].isOneOf([ExpressionEntity.AssignmentOperator, ExpressionCategory.ComparisonOperators]);
    // }
    // /**
    //  * Helper method. Checks if the expression at index i indicates the AndOr symptom.
    //  * @param {ExpressionNode[]} expressions 
    //  * @param {Number} i 
    //  * @returns {Boolean}
    //  */
    // static #isOutOfPlaceBooleanOperator(expressions, i) {
    //     if (!expressions[i].is(ExpressionCategory.LogicalOperators)) {
    //         return false;
    //     }
    //     if (!expressions[i].is(ExpressionEntity.NotOperator) && (i === 0 || expressions[i-1].isOneOf([ExpressionCategory.LogicalOperators, ExpressionCategory.MathsOperators, ExpressionCategory.ComparisonOperators, ExpressionCategory.BlockDefinitions]))) {
    //         return true;
    //     }
    //     if (!expressions[i].is(ExpressionEntity.NotOperator) && i < expressions.length - 1 && 
    //         expressions[i+1].isOneOf([ExpressionCategory.LogicalOperators, ExpressionCategory.MathsOperators, ExpressionCategory.ComparisonOperators, ExpressionCategory.BlockDefinitions])
    //         && !expressions[i+1].is(ExpressionEntity.NotOperator)) {
    //         return true;
    //     }
    //     return false;
    // }

  }]);

  return SymptomFinder;
}();

exports.SymptomFinder = SymptomFinder;

_defineProperty(SymptomFinder, "symptoms", []);

_defineProperty(SymptomFinder, "text", "");
},{"../doc-model/enums.js":4,"../utils/constants.js":13,"../utils/utils.js":14}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WHILE_TRUE = exports.VARIABLE = exports.VALUE_RETURNED = exports.VALUE_ASSIGNED = exports.USER_DEFINED_VARIABLE = exports.USER_DEFINED_FUNCTION = exports.UNKNOWN = exports.TRUE = exports.TOP_LEVEL = exports.TARGET_REPLACES_ITERABLE = exports.STRING = exports.SKIP = exports.SAME_VALUE = exports.RETURN_KEYWORD = exports.OR_NON_BOOL = exports.OR_IF = exports.NO_MATCH = exports.MATCH_ENTITY = exports.MATCH_CATEGORY = exports.LITERAL = exports.LIST = exports.INT = exports.FUNCTION_CALL = exports.FUNCTION_ARG = exports.FOR_LOOP_VAR = exports.FLOAT = exports.FALSE = exports.EXHAUSTIVE_CONDITIONAL = exports.EXACT_MATCH = exports.EMPTY = exports.DIFFERENT_VALUE = exports.COMPOUND_TYPE_DEFINITION = exports.COMPOUND_EXPRESSION = exports.COMPARISON = exports.CALCULATION = exports.BUILT_IN_FUNCTION = exports.BREAK_KEYWORD = exports.BOOLEAN_EXPRESSION = exports.BOOL = exports.ASSIGNMENT = exports.AND_OR = exports.ALL_BRANCHES_EXHAUSTIVE = void 0;
var USER_DEFINED_FUNCTION = "userDefinedFunction";
exports.USER_DEFINED_FUNCTION = USER_DEFINED_FUNCTION;
var USER_DEFINED_VARIABLE = "userDefinedVariable";
exports.USER_DEFINED_VARIABLE = USER_DEFINED_VARIABLE;
var BUILT_IN_FUNCTION = "builtInFunction";
exports.BUILT_IN_FUNCTION = BUILT_IN_FUNCTION;
var VALUE_RETURNED = "valueReturned";
exports.VALUE_RETURNED = VALUE_RETURNED;
var VALUE_ASSIGNED = "valueAssigned";
exports.VALUE_ASSIGNED = VALUE_ASSIGNED;
var TRUE = "True";
exports.TRUE = TRUE;
var FALSE = "False";
exports.FALSE = FALSE;
var RETURN_KEYWORD = "return";
exports.RETURN_KEYWORD = RETURN_KEYWORD;
var BREAK_KEYWORD = "break";
exports.BREAK_KEYWORD = BREAK_KEYWORD;
var EXHAUSTIVE_CONDITIONAL = "exhaustiveConditional";
exports.EXHAUSTIVE_CONDITIONAL = EXHAUSTIVE_CONDITIONAL;
var WHILE_TRUE = "whileTrue";
exports.WHILE_TRUE = WHILE_TRUE;
var INT = "int";
exports.INT = INT;
var FLOAT = "float";
exports.FLOAT = FLOAT;
var STRING = "string";
exports.STRING = STRING;
var BOOL = "bool";
exports.BOOL = BOOL;
var LIST = "list";
exports.LIST = LIST;
var LITERAL = "literal";
exports.LITERAL = LITERAL;
var FUNCTION_CALL = "functionCall";
exports.FUNCTION_CALL = FUNCTION_CALL;
var VARIABLE = "variable";
exports.VARIABLE = VARIABLE;
var COMPOUND_TYPE_DEFINITION = "compoundTypeDefinition";
exports.COMPOUND_TYPE_DEFINITION = COMPOUND_TYPE_DEFINITION;
var COMPOUND_EXPRESSION = "compoundExpression";
exports.COMPOUND_EXPRESSION = COMPOUND_EXPRESSION;
var BOOLEAN_EXPRESSION = "booleanExpression";
exports.BOOLEAN_EXPRESSION = BOOLEAN_EXPRESSION;
var EXACT_MATCH = "exactMatch";
exports.EXACT_MATCH = EXACT_MATCH;
var MATCH_ENTITY = "entityMatch";
exports.MATCH_ENTITY = MATCH_ENTITY;
var MATCH_CATEGORY = "categoryMatch";
exports.MATCH_CATEGORY = MATCH_CATEGORY;
var SKIP = "skip";
exports.SKIP = SKIP;
var NO_MATCH = "noMatch";
exports.NO_MATCH = NO_MATCH;
var FOR_LOOP_VAR = "forLoopVariable";
exports.FOR_LOOP_VAR = FOR_LOOP_VAR;
var TARGET_REPLACES_ITERABLE = "forLoopTargetReplacesIterable";
exports.TARGET_REPLACES_ITERABLE = TARGET_REPLACES_ITERABLE;
var ASSIGNMENT = "assignment";
exports.ASSIGNMENT = ASSIGNMENT;
var SAME_VALUE = "same";
exports.SAME_VALUE = SAME_VALUE;
var DIFFERENT_VALUE = "different";
exports.DIFFERENT_VALUE = DIFFERENT_VALUE;
var UNKNOWN = "unknown";
exports.UNKNOWN = UNKNOWN;
var EMPTY = "empty";
exports.EMPTY = EMPTY;
var OR_NON_BOOL = "orNonBoolean";
exports.OR_NON_BOOL = OR_NON_BOOL;
var AND_OR = "andOr";
exports.AND_OR = AND_OR;
var OR_IF = "orIf";
exports.OR_IF = OR_IF;
var TOP_LEVEL = "topLevel";
exports.TOP_LEVEL = TOP_LEVEL;
var ALL_BRANCHES_EXHAUSTIVE = "allBranchesOfExhaustiveConditional";
exports.ALL_BRANCHES_EXHAUSTIVE = ALL_BRANCHES_EXHAUSTIVE;
var FUNCTION_ARG = "functionArgument";
exports.FUNCTION_ARG = FUNCTION_ARG;
var CALCULATION = "calculation";
exports.CALCULATION = CALCULATION;
var COMPARISON = "comparison";
exports.COMPARISON = COMPARISON;
},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpressionInfo = ExpressionInfo;
exports.areValidGroupEntities = areValidGroupEntities;
exports.builtInReturnLookup = void 0;
exports.containsExit = containsExit;
exports.containsExpression = containsExpression;
exports.countExpressions = countExpressions;
exports.getAggregateType = getAggregateType;
exports.getClosingEntity = getClosingEntity;
exports.getExpressionsInBranches = getExpressionsInBranches;
exports.getExpressionsInStatements = getExpressionsInStatements;
exports.getTextOfExpressions = getTextOfExpressions;
exports.indexOfExpression = indexOfExpression;
exports.isCloseBracket = isCloseBracket;
exports.isNoneFunction = isNoneFunction;
exports.isOpenBracket = isOpenBracket;
exports.isTypeName = isTypeName;
exports.stringMethodsLookup = exports.specialCaseLookup = exports.moduleLookup = exports.modifyingMethodsLookup = exports.keywordLookup = void 0;
exports.typeByEntity = typeByEntity;
exports.typeCanBeSubscripted = typeCanBeSubscripted;
exports.typeLookup = void 0;
exports.validGroup = validGroup;
exports.validMethodLookup = void 0;

var _enums = require("../doc-model/enums.js");

var _constants = require("./constants.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//import { ExpressionNode } from "../doc-model/ast.js";

/**
 * Creates an object with entity and category properties.
 * @param {ExpressionEntity} entity 
 * @param {ExpressionCategory} category 
 */
function ExpressionInfo(entity, category) {
  this.entity = entity;
  this.category = category;
}
/**
 * Gets the DataType associated with a known ExpressionEntity
 * @param {ExpressionEntity} entity 
 * @returns {DataType} The DataType of the entity, if known. Otherwise returns DataType.Unknown.
 */


function typeByEntity(entity) {
  switch (entity) {
    case _enums.ExpressionEntity.TrueType:
    case _enums.ExpressionEntity.FalseType:
      return _enums.DataType.Bool;

    case _enums.ExpressionEntity.NoneType:
      return _enums.DataType.None;

    case _enums.ExpressionEntity.StrType:
    case _enums.ExpressionEntity.IntType:
    case _enums.ExpressionEntity.FloatType:
    case _enums.ExpressionEntity.BoolType:
    case _enums.ExpressionEntity.ListType:
    case _enums.ExpressionEntity.SetType:
    case _enums.ExpressionEntity.DictType:
    case _enums.ExpressionEntity.TupleType:
      return _enums.DataType.Class;

    case _enums.ExpressionEntity.Name:
    case _enums.ExpressionEntity.Doc:
    case _enums.ExpressionEntity.Sep:
    case _enums.ExpressionEntity.End:
      return _enums.DataType.String;

    case _enums.ExpressionEntity.IntLiteral:
      return _enums.DataType.Int;

    case _enums.ExpressionEntity.FloatLiteral:
      return _enums.DataType.Float;

    case _enums.ExpressionEntity.StringLiteral:
      return _enums.DataType.String;

    case _enums.ExpressionEntity.ListDefinition:
      return _enums.DataType.List;

    case _enums.ExpressionEntity.TupleDefinition:
      return _enums.DataType.Tuple;

    case _enums.ExpressionEntity.SetDefinition:
      return _enums.DataType.Set;

    case _enums.ExpressionEntity.DictDefinition:
      return _enums.DataType.Dict;

    case _enums.ExpressionEntity.RandomModule:
      return _enums.DataType.Random;

    case _enums.ExpressionEntity.MathModule:
      return _enums.DataType.Math;

    case _enums.ExpressionEntity.StringModule:
      return _enums.DataType.StringModule;

    case _enums.ExpressionEntity.ReModule:
      return _enums.DataType.Re;

    case _enums.ExpressionEntity.Pattern:
      return _enums.DataType.Pattern;

    case _enums.ExpressionEntity.Match:
      return _enums.DataType.Match;

    case _enums.ExpressionEntity.Sys:
      return _enums.DataType.Sys;

    default:
      return _enums.DataType.Unknown;
  }
}
/**
 * The data type that best describes all types in an array of data types
 * @param {DataType[]} dataTypes 
 * @returns {DataType}
 */


function getAggregateType(dataTypes) {
  if (dataTypes.length === 0) {
    return _enums.DataType.Undefined;
  } else if (dataTypes.length === 1) {
    return dataTypes[0];
  } else {
    var typeSet = new Set(dataTypes);

    if (typeSet.size === 1) {
      return dataTypes[0];
    }

    var _iterator = _createForOfIteratorHelper(typeSet),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var type = _step.value;

        if (type !== _enums.DataType.Int && type !== _enums.DataType.Float && type !== _enums.DataType.Number) {
          return _enums.DataType.Unknown;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return _enums.DataType.Number;
  }
}
/**
 * Checks if the provided data type can be subscripted.
 * @param {DataType} dataType 
 * @returns {Boolean} True if the data type is subscriptable, false otherwise.
 */


function typeCanBeSubscripted(dataType) {
  var subscriptables = new Set([_enums.DataType.String, _enums.DataType.List, _enums.DataType.Dict, _enums.DataType.Tuple, _enums.DataType.Unknown, _enums.DataType.NotParsed]);
  return subscriptables.has(dataType);
}
/**
 * Counts the number of expressions in the array that meet the criteria.
 * @param {ExpressionNode[]} expressions 
 * @param {ExpressionEntity | ExpressionCategory | String} criteria 
 * @returns {Number} The number of expressions that meet the criteria
 */


function countExpressions(expressions, criteria) {
  var count = 0;

  var _iterator2 = _createForOfIteratorHelper(expressions),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var e = _step2.value;

      if (e.is(criteria)) {
        count++;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return count;
}
/**
 * Gets the text value of an array of expressions, including spaces.
 * @param {ExpressionNode[]} expressions 
 * @returns {String}
 */


function getTextOfExpressions(expressions) {
  if (expressions.length === 0) return "";
  var text = expressions[0].getTextValue();

  for (var i = 1; i < expressions.length; i++) {
    var numSpaces = expressions[i].getDocumentStartIndex() - expressions[i - 1].getDocumentEndIndex() - 1;

    for (var l = expressions[i - 1].getEndLineNumber(); l < expressions[i].getStartLineNumber(); l++) {
      text += "\n";
      numSpaces--;
    }

    for (var s = 0; s < numSpaces; s++) {
      text += " ";
    }

    text += expressions[i].getTextValue();
  }

  return text;
}
/**
 * Gets all the expressions that occur across a series of branch blocks (e.g. a sequence of conditional branches)
 * @param {BranchBlock[]} branchBlocks 
 * @returns {ExpressionNode[]}
 */


function getExpressionsInBranches(branchBlocks) {
  var allStatements = branchBlocks.flatMap(function (block) {
    return block.getStatements();
  }).sort(function (s) {
    return s.getFirstLineNumber();
  });
  return getExpressionsInStatements(allStatements);
}
/**
 * Gets all the expressions that occur across a series of statements (e.g. a sequence of conditional branches)
 * @param {Statement[]} branchBlocks 
 * @returns {ExpressionNode[]}
 */


function getExpressionsInStatements(allStatements) {
  var allExpressions = [];

  var _iterator3 = _createForOfIteratorHelper(allStatements),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var s = _step3.value;
      var exp = s.getExpressions();
      allExpressions.push.apply(allExpressions, _toConsumableArray(exp));
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return allExpressions;
}
/**
 * Searches an array of expressions for a particular item.
 * @param {ExpressionNode[]} expressions The array to search in.
 * @param {ExpressionEntity | ExpressionCategory | String} toFind The item to search for.
 * @returns {Boolean} True if a matching expression is found, false otherwise.
 */


function containsExpression(expressions, toFind) {
  var _iterator4 = _createForOfIteratorHelper(expressions),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var e = _step4.value;

      if (e.is(toFind)) {
        return true;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  return false;
}
/**
 * Searches an expression (or statement) for an exit event
 * @param {ExpressionNode} expression 
 * @returns {Boolean}
 */


function containsExit(expression) {
  return expression.getExpressionsOfKind(_enums.ExpressionEntity.ReturnKeyword).length > 0 || expression.getExpressionsOfKind(_enums.ExpressionEntity.BreakKeyword).length > 0 || expression.getExpressionsOfKind(_enums.ExpressionEntity.ExitFunction).length > 0 || expression.getExpressionsOfKind(_enums.ExpressionEntity.SysExit).length > 0 || expression.getExpressionsOfKind(_enums.ExpressionEntity.QuitFunction).length > 0;
}
/**
 * Searches an array of expressions for the first occurrence of a particular item.
 * @param {ExpressionNode[]} expressions The array to search in.
 * @param {ExpressionEntity | ExpressionCategory | String} toFind The item to search for.
 * @returns {Number} The index of the matching item, if found, or -1.
 */


function indexOfExpression(expressions, toFind) {
  for (var i = 0; i < expressions.length; i++) {
    if (expressions[i].is(toFind)) {
      return i;
    }
  }

  return -1;
}

function isTypeName(identifier) {
  var typeNames = new Set(["str", "int", "float", "bool", "str", "list", "set", "dict"]);
  return typeNames.has(identifier);
}
/**
 * Checks if an expression is a function or method call that returns None
 * @param {ExpressionNode} exp 
 * @returns {Boolean}
 */


function isNoneFunction(exp) {
  return exp.isOneOf([_enums.ExpressionEntity.UserDefinedFunctionCall, _enums.ExpressionEntity.BuiltInFunctionCall, _enums.ExpressionEntity.UserDefinedMethodCall, _enums.ExpressionEntity.BuiltInMethodCall]) && exp.getDataType() === _enums.DataType.None;
} //#region - group finding and validating

/**
 * Checks if the given expressions are a valid group. For a group to be valid, there should be the same
 * number of opening entities as closing, and there should be at least one of each entity. This function
 * does not account for the validity of nesting.
 * @param {ExpressionNode[]} expressions 
 * @param {ExpressionEntity} openEntity 
 * @param {ExpressionEntity} closeEntity 
 * @returns {Boolean} True if the group is valid, false if not.
 */


function validGroup(expressions, openEntity, closeEntity) {
  if (!areValidGroupEntities(openEntity, closeEntity)) return false;
  var openCount = 0;
  var closeCount = 0;

  var _iterator5 = _createForOfIteratorHelper(expressions),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var e = _step5.value;
      if (e.is(openEntity)) openCount++;else if (e.is(closeEntity)) closeCount++;
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  return openCount > 0 && openCount === closeCount;
}
/**
 * Checks if the given entities are matching brackets.
 * @param {ExpressionEntity} open The open group symbol
 * @param {ExpressionEntity} close The close group symbol
 * @returns {Boolean} True if the entities are matching brackets, false otherwise.
 */


function areValidGroupEntities(open, close) {
  if (open === _enums.ExpressionEntity.OpenParenthesis) return close === _enums.ExpressionEntity.CloseParenthesis;else if (open === _enums.ExpressionEntity.OpenBrace) return close === _enums.ExpressionEntity.CloseBrace;else if (open === _enums.ExpressionEntity.OpenSquareBracket) return close === _enums.ExpressionEntity.CloseSquareBracket;
  return false;
}
/**
 * Checks if the entity is an open bracket (any kind).
 * @param {ExpressionEntity} entity 
 * @returns {Boolean} True if the entity is an open bracket, false otherwise.
 */


function isOpenBracket(entity) {
  return entity === _enums.ExpressionEntity.OpenBrace || entity === _enums.ExpressionEntity.OpenParenthesis || entity === _enums.ExpressionEntity.OpenSquareBracket;
}
/**
 * Checks if the entity is a close bracket (any kind).
 * @param {ExpressionEntity} entity 
 * @returns {Boolean} True if the entity is a close bracket, false otherwise.
 */


function isCloseBracket(entity) {
  return entity === _enums.ExpressionEntity.CloseBrace || entity === _enums.ExpressionEntity.CloseParenthesis || entity === _enums.ExpressionEntity.CloseSquareBracket;
}
/**
 * Gets the matching closing entity for the given open entity.
 * @param {ExpressionEntity} openEntity 
 * @returns {ExpressionEntity} The closing entity.
 * @throws Throws and error if the open entity isn't a bracket.
 */


function getClosingEntity(openEntity) {
  if (!isOpenBracket(openEntity)) throw new Error("".concat(openEntity, " is not a valid open bracket."));
  if (openEntity === _enums.ExpressionEntity.OpenBrace) return _enums.ExpressionEntity.CloseBrace;
  if (openEntity === _enums.ExpressionEntity.OpenParenthesis) return _enums.ExpressionEntity.CloseParenthesis;else return _enums.ExpressionEntity.CloseSquareBracket;
} //#endregion - group finding and validating
//#region - lookups

/**
 * Creates an object mapping the ExpressionEntity and ExpressionCategory
 * @param {ExpressionEntity} entity 
 * @param {ExpressionCategory} category 
 * @returns An object with keys entity and category
 */


var keywordMap = function keywordMap(entity, category) {
  return {
    entity: entity,
    category: category
  };
};
/**
 * Gets information about known entities that can be identified using just the value e.g. operators.
 * @param {String} value The value to look up.
 * @returns {Object} An object with keys entity and category
 */


var keywordLookup = function keywordLookup(value) {
  switch (value) {
    // RESERVED
    case "class":
      return keywordMap(_enums.ExpressionEntity.ClassDefinition, _enums.ExpressionCategory.BlockDefinitions);
    // RESERVED

    case "def":
      return keywordMap(_enums.ExpressionEntity.FunctionDefinition, _enums.ExpressionCategory.BlockDefinitions);
    // RESERVED

    case "elif":
      return keywordMap(_enums.ExpressionEntity.ElifDefinition, _enums.ExpressionCategory.BlockDefinitions);
    // RESERVED

    case "else":
      return keywordMap(_enums.ExpressionEntity.ElseDefinition, _enums.ExpressionCategory.BlockDefinitions);
    // RESERVED

    case "except":
      return keywordMap(_enums.ExpressionEntity.ExceptDefinition, _enums.ExpressionCategory.BlockDefinitions);
    // RESERVED

    case "finally":
      return keywordMap(_enums.ExpressionEntity.FinallyDefinition, _enums.ExpressionCategory.BlockDefinitions);
    // RESERVED

    case "for":
      return keywordMap(_enums.ExpressionEntity.ForDefinition, _enums.ExpressionCategory.BlockDefinitions);
    // RESERVED

    case "if":
      return keywordMap(_enums.ExpressionEntity.IfDefinition, _enums.ExpressionCategory.BlockDefinitions);
    // RESERVED

    case "lambda":
      return keywordMap(_enums.ExpressionEntity.LambdaDefinition, _enums.ExpressionCategory.BlockDefinitions);
    // RESERVED

    case "try":
      return keywordMap(_enums.ExpressionEntity.TryDefinition, _enums.ExpressionCategory.BlockDefinitions);
    // RESERVED

    case "while":
      return keywordMap(_enums.ExpressionEntity.WhileDefinition, _enums.ExpressionCategory.BlockDefinitions);
    // RESERVED

    case "with":
      return keywordMap(_enums.ExpressionEntity.WithKeyword, _enums.ExpressionCategory.BlockDefinitions);
    // RESERVED

    case "and":
      return keywordMap(_enums.ExpressionEntity.AndOperator, _enums.ExpressionCategory.LogicalOperators);
    // RESERVED

    case "not":
      return keywordMap(_enums.ExpressionEntity.NotOperator, _enums.ExpressionCategory.LogicalOperators);
    // RESERVED

    case "or":
      return keywordMap(_enums.ExpressionEntity.OrOperator, _enums.ExpressionCategory.LogicalOperators);
    // RESERVED

    case "False":
      return keywordMap(_enums.ExpressionEntity.FalseType, _enums.ExpressionCategory.Types);
    // RESERVED

    case "None":
      return keywordMap(_enums.ExpressionEntity.NoneType, _enums.ExpressionCategory.Types);
    // RESERVED

    case "True":
      return keywordMap(_enums.ExpressionEntity.TrueType, _enums.ExpressionCategory.Types);
    // RESERVED

    case "as":
      return keywordMap(_enums.ExpressionEntity.AsKeyword, _enums.ExpressionCategory.OtherKeywords);
    // RESERVED

    case "global":
      return keywordMap(_enums.ExpressionEntity.GlobalKeyword, _enums.ExpressionCategory.OtherKeywords);
    // RESERVED

    case "assert":
      return keywordMap(_enums.ExpressionEntity.AssertKeyword, _enums.ExpressionCategory.OtherKeywords);
    // RESERVED

    case "break":
      return keywordMap(_enums.ExpressionEntity.BreakKeyword, _enums.ExpressionCategory.OtherKeywords);
    // RESERVED

    case "continue":
      return keywordMap(_enums.ExpressionEntity.ContinueKeyword, _enums.ExpressionCategory.OtherKeywords);
    // RESERVED

    case "del":
      return keywordMap(_enums.ExpressionEntity.DelKeyword, _enums.ExpressionCategory.OtherKeywords);
    // RESERVED

    case "from":
      return keywordMap(_enums.ExpressionEntity.FromKeyword, _enums.ExpressionCategory.OtherKeywords);
    // RESERVED

    case "import":
      return keywordMap(_enums.ExpressionEntity.ImportKeyword, _enums.ExpressionCategory.OtherKeywords);
    // RESERVED

    case "in":
      return keywordMap(_enums.ExpressionEntity.InKeyword, _enums.ExpressionCategory.ComparisonOperators);
    //ExpressionCategory.OtherKeywords);
    // RESERVED

    case "is":
      return keywordMap(_enums.ExpressionEntity.IsKeyword, _enums.ExpressionCategory.ComparisonOperators);
    //ExpressionCategory.OtherKeywords);
    // RESERVED

    case "pass":
      return keywordMap(_enums.ExpressionEntity.PassKeyword, _enums.ExpressionCategory.OtherKeywords);
    // RESERVED

    case "raise":
      return keywordMap(_enums.ExpressionEntity.RaiseKeyword, _enums.ExpressionCategory.OtherKeywords);
    // RESERVED

    case "return":
      return keywordMap(_enums.ExpressionEntity.ReturnKeyword, _enums.ExpressionCategory.OtherKeywords);
    // RESERVED

    case "yield":
      return keywordMap(_enums.ExpressionEntity.YieldKeyword, _enums.ExpressionCategory.OtherKeywords);

    case "r":
      return keywordMap(_enums.ExpressionEntity.R, _enums.ExpressionCategory.OtherKeywords);

    case "f":
      return keywordMap(_enums.ExpressionEntity.F, _enums.ExpressionCategory.OtherKeywords);

    case "+":
      return keywordMap(_enums.ExpressionEntity.AddOperator, _enums.ExpressionCategory.MathsOperators);

    case "-":
      return keywordMap(_enums.ExpressionEntity.SubtractOperator, _enums.ExpressionCategory.MathsOperators);

    case "*":
      return keywordMap(_enums.ExpressionEntity.MultiplyOperator, _enums.ExpressionCategory.MathsOperators);

    case "/":
      return keywordMap(_enums.ExpressionEntity.DivideOperator, _enums.ExpressionCategory.MathsOperators);

    case "%":
      return keywordMap(_enums.ExpressionEntity.ModulusOperator, _enums.ExpressionCategory.MathsOperators);

    case "**":
      return keywordMap(_enums.ExpressionEntity.ExponentOperator, _enums.ExpressionCategory.MathsOperators);

    case "//":
      return keywordMap(_enums.ExpressionEntity.IntDivideOperator, _enums.ExpressionCategory.MathsOperators);

    case "=":
      return keywordMap(_enums.ExpressionEntity.AssignmentOperator, _enums.ExpressionCategory.MathsOperators);

    case "+=":
      return keywordMap(_enums.ExpressionEntity.IncrementOperator, _enums.ExpressionCategory.MathsOperators);

    case "-=":
      return keywordMap(_enums.ExpressionEntity.DecrementOperator, _enums.ExpressionCategory.MathsOperators);

    case "*=":
      return keywordMap(_enums.ExpressionEntity.MultiplyAssignOperator, _enums.ExpressionCategory.MathsOperators);

    case "/=":
      return keywordMap(_enums.ExpressionEntity.DivideAssignOperator, _enums.ExpressionCategory.MathsOperators);

    case "%=":
      return keywordMap(_enums.ExpressionEntity.RemainderAssignOperator, _enums.ExpressionCategory.MathsOperators);

    case "//=":
      return keywordMap(_enums.ExpressionEntity.IntDivideAssignOperator, _enums.ExpressionCategory.MathsOperators);

    case "**=":
      return keywordMap(_enums.ExpressionEntity.ExponentAssignOperator, _enums.ExpressionCategory.MathsOperators);

    case "==":
      return keywordMap(_enums.ExpressionEntity.EqualOperator, _enums.ExpressionCategory.ComparisonOperators);

    case "!=":
      return keywordMap(_enums.ExpressionEntity.NotEqualOperator, _enums.ExpressionCategory.ComparisonOperators);

    case ">":
      return keywordMap(_enums.ExpressionEntity.GreaterThanOperator, _enums.ExpressionCategory.ComparisonOperators);

    case "<":
      return keywordMap(_enums.ExpressionEntity.LessThanOperator, _enums.ExpressionCategory.ComparisonOperators);

    case ">=":
      return keywordMap(_enums.ExpressionEntity.GreaterThanOrEqualOperator, _enums.ExpressionCategory.ComparisonOperators);

    case "<=":
      return keywordMap(_enums.ExpressionEntity.LessThanOrEqualOperator, _enums.ExpressionCategory.ComparisonOperators);

    case "->":
      return keywordMap(_enums.ExpressionEntity.TypeHintReturn, _enums.ExpressionCategory.TypeHint);

    case "abs":
      return keywordMap(_enums.ExpressionEntity.AbsFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "all":
      return keywordMap(_enums.ExpressionEntity.AllFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "any":
      return keywordMap(_enums.ExpressionEntity.AnyFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "ascii":
      return keywordMap(_enums.ExpressionEntity.AsciiFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "bin":
      return keywordMap(_enums.ExpressionEntity.BinFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "bool":
      return keywordMap(_enums.ExpressionEntity.BoolFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "callable":
      return keywordMap(_enums.ExpressionEntity.CallableFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "chr":
      return keywordMap(_enums.ExpressionEntity.ChrFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "dict":
      return keywordMap(_enums.ExpressionEntity.DictDefinition, _enums.ExpressionCategory.BuiltInFunctions);

    case "divmod":
      return keywordMap(_enums.ExpressionEntity.DivModFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "enumerate":
      return keywordMap(_enums.ExpressionEntity.EnumerateFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "eval":
      return keywordMap(_enums.ExpressionEntity.EvalFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "exec":
      return keywordMap(_enums.ExpressionEntity.ExecFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "exit":
      return keywordMap(_enums.ExpressionEntity.ExitFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "filter":
      return keywordMap(_enums.ExpressionEntity.FilterFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "float":
      return keywordMap(_enums.ExpressionEntity.FloatFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "getattr":
      return keywordMap(_enums.ExpressionEntity.GetAttrFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "globals":
      return keywordMap(_enums.ExpressionEntity.GlobalsFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "hasattr":
      return keywordMap(_enums.ExpressionEntity.HasAttrFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "input":
      return keywordMap(_enums.ExpressionEntity.InputFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "int":
      return keywordMap(_enums.ExpressionEntity.IntFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "isinstance":
      return keywordMap(_enums.ExpressionEntity.IsInstanceFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "len":
      return keywordMap(_enums.ExpressionEntity.LenFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "list":
      return keywordMap(_enums.ExpressionEntity.ListFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "map":
      return keywordMap(_enums.ExpressionEntity.MapFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "max":
      return keywordMap(_enums.ExpressionEntity.MaxFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "min":
      return keywordMap(_enums.ExpressionEntity.MinFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "open":
      return keywordMap(_enums.ExpressionEntity.OpenFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "ord":
      return keywordMap(_enums.ExpressionEntity.OrdFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "pow":
      return keywordMap(_enums.ExpressionEntity.PowFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "print":
      return keywordMap(_enums.ExpressionEntity.PrintFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "quit":
      return keywordMap(_enums.ExpressionEntity.QuitFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "range":
      return keywordMap(_enums.ExpressionEntity.RangeFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "reversed":
      return keywordMap(_enums.ExpressionEntity.ReversedFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "round":
      return keywordMap(_enums.ExpressionEntity.RoundFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "set":
      return keywordMap(_enums.ExpressionEntity.SetFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "sorted":
      return keywordMap(_enums.ExpressionEntity.SortedFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "str":
      return keywordMap(_enums.ExpressionEntity.StrFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "sum":
      return keywordMap(_enums.ExpressionEntity.SumFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "tuple":
      return keywordMap(_enums.ExpressionEntity.TupleFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "type":
      return keywordMap(_enums.ExpressionEntity.TypeFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "zip":
      return keywordMap(_enums.ExpressionEntity.ZipFunction, _enums.ExpressionCategory.BuiltInFunctions);

    case "__main__":
      return keywordMap(_enums.ExpressionEntity.Main, _enums.ExpressionCategory.MagicMethods);

    case "__cmp__":
      return keywordMap(_enums.ExpressionEntity.Cmp, _enums.ExpressionCategory.MagicMethods);

    case "__eq__":
      return keywordMap(_enums.ExpressionEntity.Eq, _enums.ExpressionCategory.MagicMethods);

    case "__ne__":
      return keywordMap(_enums.ExpressionEntity.Ne, _enums.ExpressionCategory.MagicMethods);

    case "__lt__":
      return keywordMap(_enums.ExpressionEntity.Lt, _enums.ExpressionCategory.MagicMethods);

    case "__gt__":
      return keywordMap(_enums.ExpressionEntity.Gt, _enums.ExpressionCategory.MagicMethods);

    case "__le__":
      return keywordMap(_enums.ExpressionEntity.Le, _enums.ExpressionCategory.MagicMethods);

    case "__ge__":
      return keywordMap(_enums.ExpressionEntity.Ge, _enums.ExpressionCategory.MagicMethods);

    case "__str__":
      return keywordMap(_enums.ExpressionEntity.Str, _enums.ExpressionCategory.MagicMethods);

    case "__getattr__":
      return keywordMap(_enums.ExpressionEntity.GetAttrVariable, _enums.ExpressionCategory.MagicMethods);

    case "__setattr__":
      return keywordMap(_enums.ExpressionEntity.SetAttrVariable, _enums.ExpressionCategory.MagicMethods);

    case "__contains__":
      return keywordMap(_enums.ExpressionEntity.SpecialContains, _enums.ExpressionCategory.MagicMethods);

    case "__len__":
      return keywordMap(_enums.ExpressionEntity.SpecialLen, _enums.ExpressionCategory.MagicMethods);

    case "__name__":
      return keywordMap(_enums.ExpressionEntity.Name, _enums.ExpressionCategory.SpecialVariables);

    case "__self__":
      return keywordMap(_enums.ExpressionEntity.Self, _enums.ExpressionCategory.SpecialVariables);

    case "__doc__":
      return keywordMap(_enums.ExpressionEntity.Doc, _enums.ExpressionCategory.SpecialVariables);

    case "__class__":
      return keywordMap(_enums.ExpressionEntity.ClassVariable, _enums.ExpressionCategory.SpecialVariables);

    case "sep":
      return keywordMap(_enums.ExpressionEntity.Sep, _enums.ExpressionCategory.SpecialVariables);

    case "end":
      return keywordMap(_enums.ExpressionEntity.End, _enums.ExpressionCategory.SpecialVariables);

    case "ArtithmeticError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "AssertionError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "AttributeError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "BlockingIOError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "BrokenPipeError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "BufferError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "ChildProcessError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "ConnectionAbortedError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "ConnectionError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "ConnectionRefusedError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "ConnectionResetError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "Exception":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "EOFError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "EnvironmentError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "FileExistsError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "FileNotFoundError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "FloatingPointError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "GeneratorExit":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "ImportError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "IndentationError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "IndexError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "InterruptedError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "IOError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "IsADirectoryError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "KeyError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "KeyboardInterrupt":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "LookupError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "MemoryError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "ModuleNotFoundError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "NameError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "NotADirectoryError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "NotImplementedError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "OSError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "OverflowError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "PermissionError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "ProcessLookupError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "RecursionError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "ReferenceError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "RuntimeError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "StopIteration":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "SyntaxError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "TabError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "TimeoutError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "SystemError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "SystemExit":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "TypeError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "UnboundLocalError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "UnicodeError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "UnicodeEncodeError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "UnicodeDecodeError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "UnicodeTranslateError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "ValueError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "Warning":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);

    case "ZeroDivisionError":
      return keywordMap(_enums.ExpressionEntity.ExceptionName, _enums.ExpressionCategory.BuiltInExceptions);
    // String methods

    case "capitalize":
      return keywordMap(_enums.ExpressionEntity.Capitalize, _enums.ExpressionCategory.BuiltInMethods);

    case "casefold":
      return keywordMap(_enums.ExpressionEntity.Casefold, _enums.ExpressionCategory.BuiltInMethods);

    case "center":
      return keywordMap(_enums.ExpressionEntity.Center, _enums.ExpressionCategory.BuiltInMethods);

    case "count":
      return keywordMap(_enums.ExpressionEntity.Count, _enums.ExpressionCategory.BuiltInMethods);
    // also a list, tuple method

    case "encode":
      return keywordMap(_enums.ExpressionEntity.Encode, _enums.ExpressionCategory.BuiltInMethods);

    case "endswith":
      return keywordMap(_enums.ExpressionEntity.EndsWith, _enums.ExpressionCategory.BuiltInMethods);

    case "expandtabs":
      return keywordMap(_enums.ExpressionEntity.ExpandTabs, _enums.ExpressionCategory.BuiltInMethods);

    case "find":
      return keywordMap(_enums.ExpressionEntity.Find, _enums.ExpressionCategory.BuiltInMethods);

    case "format":
      return keywordMap(_enums.ExpressionEntity.Format, _enums.ExpressionCategory.BuiltInMethods);

    case "format_map":
      return keywordMap(_enums.ExpressionEntity.FormatMap, _enums.ExpressionCategory.BuiltInMethods);

    case "index":
      return keywordMap(_enums.ExpressionEntity.Index, _enums.ExpressionCategory.BuiltInMethods);
    // also a list, tuple method

    case "isalnum":
      return keywordMap(_enums.ExpressionEntity.IsAlnum, _enums.ExpressionCategory.BuiltInMethods);

    case "isalpha":
      return keywordMap(_enums.ExpressionEntity.IsAlpha, _enums.ExpressionCategory.BuiltInMethods);

    case "isascii":
      return keywordMap(_enums.ExpressionEntity.IsAscii, _enums.ExpressionCategory.BuiltInMethods);

    case "isdecimal":
      return keywordMap(_enums.ExpressionEntity.IsDecimal, _enums.ExpressionCategory.BuiltInMethods);

    case "isdigit":
      return keywordMap(_enums.ExpressionEntity.IsDigit, _enums.ExpressionCategory.BuiltInMethods);

    case "isidentifier":
      return keywordMap(_enums.ExpressionEntity.IsIdentifier, _enums.ExpressionCategory.BuiltInMethods);

    case "islower":
      return keywordMap(_enums.ExpressionEntity.IsLower, _enums.ExpressionCategory.BuiltInMethods);

    case "isnumeric":
      return keywordMap(_enums.ExpressionEntity.IsNumeric, _enums.ExpressionCategory.BuiltInMethods);

    case "isprintable":
      return keywordMap(_enums.ExpressionEntity.IsPrintable, _enums.ExpressionCategory.BuiltInMethods);

    case "isspace":
      return keywordMap(_enums.ExpressionEntity.IsSpace, _enums.ExpressionCategory.BuiltInMethods);

    case "istitle":
      return keywordMap(_enums.ExpressionEntity.IsTitle, _enums.ExpressionCategory.BuiltInMethods);

    case "isupper":
      return keywordMap(_enums.ExpressionEntity.IsUpper, _enums.ExpressionCategory.BuiltInMethods);

    case "join":
      return keywordMap(_enums.ExpressionEntity.Join, _enums.ExpressionCategory.BuiltInMethods);

    case "ljust":
      return keywordMap(_enums.ExpressionEntity.LJust, _enums.ExpressionCategory.BuiltInMethods);

    case "lower":
      return keywordMap(_enums.ExpressionEntity.Lower, _enums.ExpressionCategory.BuiltInMethods);

    case "lstrip":
      return keywordMap(_enums.ExpressionEntity.LStrip, _enums.ExpressionCategory.BuiltInMethods);

    case "maketrans":
      return keywordMap(_enums.ExpressionEntity.MakeTrans, _enums.ExpressionCategory.BuiltInMethods);

    case "partition":
      return keywordMap(_enums.ExpressionEntity.Partition, _enums.ExpressionCategory.BuiltInMethods);

    case "replace":
      return keywordMap(_enums.ExpressionEntity.Replace, _enums.ExpressionCategory.BuiltInMethods);

    case "rfind":
      return keywordMap(_enums.ExpressionEntity.RFind, _enums.ExpressionCategory.BuiltInMethods);

    case "rindex":
      return keywordMap(_enums.ExpressionEntity.RIndex, _enums.ExpressionCategory.BuiltInMethods);

    case "rjust":
      return keywordMap(_enums.ExpressionEntity.RJust, _enums.ExpressionCategory.BuiltInMethods);

    case "rpartition":
      return keywordMap(_enums.ExpressionEntity.RPartition, _enums.ExpressionCategory.BuiltInMethods);

    case "rsplit":
      return keywordMap(_enums.ExpressionEntity.RSplit, _enums.ExpressionCategory.BuiltInMethods);

    case "rstrip":
      return keywordMap(_enums.ExpressionEntity.RStrip, _enums.ExpressionCategory.BuiltInMethods);

    case "split":
      return keywordMap(_enums.ExpressionEntity.Split, _enums.ExpressionCategory.BuiltInMethods);

    case "splitlines":
      return keywordMap(_enums.ExpressionEntity.SplitLines, _enums.ExpressionCategory.BuiltInMethods);

    case "startswith":
      return keywordMap(_enums.ExpressionEntity.StartsWith, _enums.ExpressionCategory.BuiltInMethods);

    case "strip":
      return keywordMap(_enums.ExpressionEntity.Strip, _enums.ExpressionCategory.BuiltInMethods);

    case "swapcase":
      return keywordMap(_enums.ExpressionEntity.SwapCase, _enums.ExpressionCategory.BuiltInMethods);

    case "title":
      return keywordMap(_enums.ExpressionEntity.Title, _enums.ExpressionCategory.BuiltInMethods);

    case "translate":
      return keywordMap(_enums.ExpressionEntity.Translate, _enums.ExpressionCategory.BuiltInMethods);

    case "upper":
      return keywordMap(_enums.ExpressionEntity.Upper, _enums.ExpressionCategory.BuiltInMethods);

    case "zfill":
      return keywordMap(_enums.ExpressionEntity.ZFill, _enums.ExpressionCategory.BuiltInMethods);
    // Built-in list methods

    case "append":
      return keywordMap(_enums.ExpressionEntity.Append, _enums.ExpressionCategory.BuiltInMethods);

    case "clear":
      return keywordMap(_enums.ExpressionEntity.Clear, _enums.ExpressionCategory.BuiltInMethods);
    // also dictionary, set

    case "copy":
      return keywordMap(_enums.ExpressionEntity.Copy, _enums.ExpressionCategory.BuiltInMethods);
    // also dictionary, set

    case "extend":
      return keywordMap(_enums.ExpressionEntity.Extend, _enums.ExpressionCategory.BuiltInMethods);

    case "insert":
      return keywordMap(_enums.ExpressionEntity.Insert, _enums.ExpressionCategory.BuiltInMethods);

    case "pop":
      return keywordMap(_enums.ExpressionEntity.Pop, _enums.ExpressionCategory.BuiltInMethods);
    // also dictionary, set

    case "remove":
      return keywordMap(_enums.ExpressionEntity.Remove, _enums.ExpressionCategory.BuiltInMethods);
    // also set

    case "reverse":
      return keywordMap(_enums.ExpressionEntity.Reverse, _enums.ExpressionCategory.BuiltInMethods);

    case "sort":
      return keywordMap(_enums.ExpressionEntity.Sort, _enums.ExpressionCategory.BuiltInMethods);
    // Built-in dictionary methods

    case "fromkeys":
      return keywordMap(_enums.ExpressionEntity.FromKeys, _enums.ExpressionCategory.BuiltInMethods);

    case "get":
      return keywordMap(_enums.ExpressionEntity.Get, _enums.ExpressionCategory.BuiltInMethods);

    case "items":
      return keywordMap(_enums.ExpressionEntity.Items, _enums.ExpressionCategory.BuiltInMethods);

    case "keys":
      return keywordMap(_enums.ExpressionEntity.Keys, _enums.ExpressionCategory.BuiltInMethods);

    case "popitem":
      return keywordMap(_enums.ExpressionEntity.PopItem, _enums.ExpressionCategory.BuiltInMethods);

    case "setdefault":
      return keywordMap(_enums.ExpressionEntity.SetDefault, _enums.ExpressionCategory.BuiltInMethods);

    case "update":
      return keywordMap(_enums.ExpressionEntity.Update, _enums.ExpressionCategory.BuiltInMethods);
    // also set

    case "values":
      return keywordMap(_enums.ExpressionEntity.Values, _enums.ExpressionCategory.BuiltInMethods);
    // Built-in set methods

    case "add":
      return keywordMap(_enums.ExpressionEntity.Add, _enums.ExpressionCategory.BuiltInMethods);

    case "difference":
      return keywordMap(_enums.ExpressionEntity.Difference, _enums.ExpressionCategory.BuiltInMethods);

    case "difference_update":
      return keywordMap(_enums.ExpressionEntity.DifferenceUpdate, _enums.ExpressionCategory.BuiltInMethods);

    case "discard":
      return keywordMap(_enums.ExpressionEntity.Discard, _enums.ExpressionCategory.BuiltInMethods);

    case "intersection":
      return keywordMap(_enums.ExpressionEntity.Intersection, _enums.ExpressionCategory.BuiltInMethods);

    case "intersection_update":
      return keywordMap(_enums.ExpressionEntity.IntersectionUpdate, _enums.ExpressionCategory.BuiltInMethods);

    case "isdisjoint":
      return keywordMap(_enums.ExpressionEntity.IsDisjoint, _enums.ExpressionCategory.BuiltInMethods);

    case "issubset":
      return keywordMap(_enums.ExpressionEntity.IsSubset, _enums.ExpressionCategory.BuiltInMethods);

    case "issuperset":
      return keywordMap(_enums.ExpressionEntity.IsSuperset, _enums.ExpressionCategory.BuiltInMethods);

    case "symmetric_difference":
      return keywordMap(_enums.ExpressionEntity.SymmetricDifference, _enums.ExpressionCategory.BuiltInMethods);

    case "symmetric_difference_update":
      return keywordMap(_enums.ExpressionEntity.SymmetricDifferenceUpdate, _enums.ExpressionCategory.BuiltInMethods);

    case "union":
      return keywordMap(_enums.ExpressionEntity.Union, _enums.ExpressionCategory.BuiltInMethods);
    // Built-in file methods

    case "close":
      return keywordMap(_enums.ExpressionEntity.Close, _enums.ExpressionCategory.BuiltInMethods);

    case "detach":
      return keywordMap(_enums.ExpressionEntity.Detach, _enums.ExpressionCategory.BuiltInMethods);

    case "fileno":
      return keywordMap(_enums.ExpressionEntity.FileNo, _enums.ExpressionCategory.BuiltInMethods);

    case "flush":
      return keywordMap(_enums.ExpressionEntity.Flush, _enums.ExpressionCategory.BuiltInMethods);

    case "isatty":
      return keywordMap(_enums.ExpressionEntity.IsAtty, _enums.ExpressionCategory.BuiltInMethods);

    case "read":
      return keywordMap(_enums.ExpressionEntity.Read, _enums.ExpressionCategory.BuiltInMethods);

    case "readable":
      return keywordMap(_enums.ExpressionEntity.Readable, _enums.ExpressionCategory.BuiltInMethods);

    case "readline":
      return keywordMap(_enums.ExpressionEntity.ReadLine, _enums.ExpressionCategory.BuiltInMethods);

    case "readlines":
      return keywordMap(_enums.ExpressionEntity.ReadLines, _enums.ExpressionCategory.BuiltInMethods);

    case "seek":
      return keywordMap(_enums.ExpressionEntity.Seek, _enums.ExpressionCategory.BuiltInMethods);

    case "seekable":
      return keywordMap(_enums.ExpressionEntity.Seekable, _enums.ExpressionCategory.BuiltInMethods);

    case "tell":
      return keywordMap(_enums.ExpressionEntity.Tell, _enums.ExpressionCategory.BuiltInMethods);

    case "truncate":
      return keywordMap(_enums.ExpressionEntity.Truncate, _enums.ExpressionCategory.BuiltInMethods);

    case "writable":
      return keywordMap(_enums.ExpressionEntity.Writable, _enums.ExpressionCategory.BuiltInMethods);

    case "write":
      return keywordMap(_enums.ExpressionEntity.Write, _enums.ExpressionCategory.BuiltInMethods);

    case "writelines":
      return keywordMap(_enums.ExpressionEntity.WriteLines, _enums.ExpressionCategory.BuiltInMethods);

    case "(":
      return keywordMap(_enums.ExpressionEntity.OpenParenthesis, _enums.ExpressionCategory.Other);

    case ")":
      return keywordMap(_enums.ExpressionEntity.CloseParenthesis, _enums.ExpressionCategory.Other);

    case "[":
      return keywordMap(_enums.ExpressionEntity.OpenSquareBracket, _enums.ExpressionCategory.Other);

    case "]":
      return keywordMap(_enums.ExpressionEntity.CloseSquareBracket, _enums.ExpressionCategory.Other);

    case "{":
      return keywordMap(_enums.ExpressionEntity.OpenBrace, _enums.ExpressionCategory.Other);

    case "}":
      return keywordMap(_enums.ExpressionEntity.CloseBrace, _enums.ExpressionCategory.Other);

    case ",":
      return keywordMap(_enums.ExpressionEntity.Comma, _enums.ExpressionCategory.Other);

    case ":":
      return keywordMap(_enums.ExpressionEntity.Colon, _enums.ExpressionCategory.Other);

    case ".":
      return keywordMap(_enums.ExpressionEntity.Dot, _enums.ExpressionCategory.Other);

    case "\\":
      return keywordMap(_enums.ExpressionEntity.ContinuationLine, _enums.ExpressionCategory.Other);

    case ";":
      return keywordMap(_enums.ExpressionEntity.Separator, _enums.ExpressionCategory.Other);

    case "'":
      return keywordMap(_enums.ExpressionEntity.SingleQuote, _enums.ExpressionCategory.Other);

    case "\"":
      return keywordMap(_enums.ExpressionEntity.DoubleQuote, _enums.ExpressionCategory.Other);
    // Built in modules

    case "random":
      return keywordMap(_enums.ExpressionEntity.RandomModule, _enums.ExpressionCategory.BuiltInModules);

    case "math":
      return keywordMap(_enums.ExpressionEntity.MathModule, _enums.ExpressionCategory.BuiltInModules);

    case "string":
      return keywordMap(_enums.ExpressionEntity.StringModule, _enums.ExpressionCategory.BuiltInModules);

    case "re":
      return keywordMap(_enums.ExpressionEntity.ReModule, _enums.ExpressionCategory.BuiltInModules);

    case "sys":
      return keywordMap(_enums.ExpressionEntity.Sys, _enums.ExpressionCategory.BuiltInModules);
    // random module methods

    case "seed":
      return keywordMap(_enums.ExpressionEntity.Seed, _enums.ExpressionCategory.ModuleFunctions);

    case "getstate":
      return keywordMap(_enums.ExpressionEntity.GetState, _enums.ExpressionCategory.ModuleFunctions);

    case "setstate":
      return keywordMap(_enums.ExpressionEntity.SetState, _enums.ExpressionCategory.ModuleFunctions);

    case "getrandbits":
      return keywordMap(_enums.ExpressionEntity.GetRandBits, _enums.ExpressionCategory.ModuleFunctions);

    case "randrange":
      return keywordMap(_enums.ExpressionEntity.RandRange, _enums.ExpressionCategory.ModuleFunctions);

    case "randint":
      return keywordMap(_enums.ExpressionEntity.RandInt, _enums.ExpressionCategory.ModuleFunctions);

    case "choice":
      return keywordMap(_enums.ExpressionEntity.Choice, _enums.ExpressionCategory.ModuleFunctions);

    case "choices":
      return keywordMap(_enums.ExpressionEntity.Choices, _enums.ExpressionCategory.ModuleFunctions);

    case "shuffle":
      return keywordMap(_enums.ExpressionEntity.Shuffle, _enums.ExpressionCategory.ModuleFunctions);

    case "sample":
      return keywordMap(_enums.ExpressionEntity.Sample, _enums.ExpressionCategory.ModuleFunctions);

    case "uniform":
      return keywordMap(_enums.ExpressionEntity.Uniform, _enums.ExpressionCategory.ModuleFunctions);

    case "triangular":
      return keywordMap(_enums.ExpressionEntity.Triangular, _enums.ExpressionCategory.ModuleFunctions);

    case "betavariate":
      return keywordMap(_enums.ExpressionEntity.BetaVariate, _enums.ExpressionCategory.ModuleFunctions);

    case "expovariate":
      return keywordMap(_enums.ExpressionEntity.ExpoVariate, _enums.ExpressionCategory.ModuleFunctions);

    case "gammavariate":
      return keywordMap(_enums.ExpressionEntity.GammaVariate, _enums.ExpressionCategory.ModuleFunctions);

    case "gauss":
      return keywordMap(_enums.ExpressionEntity.Gauss, _enums.ExpressionCategory.ModuleFunctions);

    case "lognormvariate":
      return keywordMap(_enums.ExpressionEntity.LogNormVariate, _enums.ExpressionCategory.ModuleFunctions);

    case "normalvariate":
      return keywordMap(_enums.ExpressionEntity.NormalVariate, _enums.ExpressionCategory.ModuleFunctions);

    case "vonmisesvariate":
      return keywordMap(_enums.ExpressionEntity.VonMisesVariate, _enums.ExpressionCategory.ModuleFunctions);

    case "paretovariate":
      return keywordMap(_enums.ExpressionEntity.ParetoVariate, _enums.ExpressionCategory.ModuleFunctions);

    case "weibullvariate":
      return keywordMap(_enums.ExpressionEntity.WeibullVariate, _enums.ExpressionCategory.ModuleFunctions);
    // maths module methods

    case "acos":
      return keywordMap(_enums.ExpressionEntity.Acos, _enums.ExpressionCategory.ModuleFunctions);

    case "acosh":
      return keywordMap(_enums.ExpressionEntity.Acosh, _enums.ExpressionCategory.ModuleFunctions);

    case "asin":
      return keywordMap(_enums.ExpressionEntity.Asin, _enums.ExpressionCategory.ModuleFunctions);

    case "asinh":
      return keywordMap(_enums.ExpressionEntity.Asinh, _enums.ExpressionCategory.ModuleFunctions);

    case "atan":
      return keywordMap(_enums.ExpressionEntity.Atan, _enums.ExpressionCategory.ModuleFunctions);

    case "atan2":
      return keywordMap(_enums.ExpressionEntity.Atan2, _enums.ExpressionCategory.ModuleFunctions);

    case "atanh":
      return keywordMap(_enums.ExpressionEntity.Atanh, _enums.ExpressionCategory.ModuleFunctions);

    case "ceil":
      return keywordMap(_enums.ExpressionEntity.Ceil, _enums.ExpressionCategory.ModuleFunctions);

    case "comb":
      return keywordMap(_enums.ExpressionEntity.Comb, _enums.ExpressionCategory.ModuleFunctions);

    case "copysign":
      return keywordMap(_enums.ExpressionEntity.Copysign, _enums.ExpressionCategory.ModuleFunctions);

    case "cos":
      return keywordMap(_enums.ExpressionEntity.Cos, _enums.ExpressionCategory.ModuleFunctions);

    case "cosh":
      return keywordMap(_enums.ExpressionEntity.Cosh, _enums.ExpressionCategory.ModuleFunctions);

    case "degrees":
      return keywordMap(_enums.ExpressionEntity.Degrees, _enums.ExpressionCategory.ModuleFunctions);

    case "dist":
      return keywordMap(_enums.ExpressionEntity.Dist, _enums.ExpressionCategory.ModuleFunctions);

    case "erf":
      return keywordMap(_enums.ExpressionEntity.Erf, _enums.ExpressionCategory.ModuleFunctions);

    case "erfc":
      return keywordMap(_enums.ExpressionEntity.Erfc, _enums.ExpressionCategory.ModuleFunctions);

    case "exp":
      return keywordMap(_enums.ExpressionEntity.Exp, _enums.ExpressionCategory.ModuleFunctions);

    case "expm1":
      return keywordMap(_enums.ExpressionEntity.Expm1, _enums.ExpressionCategory.ModuleFunctions);

    case "fabs":
      return keywordMap(_enums.ExpressionEntity.Fabs, _enums.ExpressionCategory.ModuleFunctions);

    case "factorial":
      return keywordMap(_enums.ExpressionEntity.Factorial, _enums.ExpressionCategory.ModuleFunctions);

    case "floor":
      return keywordMap(_enums.ExpressionEntity.Floor, _enums.ExpressionCategory.ModuleFunctions);

    case "fmod":
      return keywordMap(_enums.ExpressionEntity.Fmod, _enums.ExpressionCategory.ModuleFunctions);

    case "frexp":
      return keywordMap(_enums.ExpressionEntity.Frexp, _enums.ExpressionCategory.ModuleFunctions);

    case "fsum":
      return keywordMap(_enums.ExpressionEntity.Fsum, _enums.ExpressionCategory.ModuleFunctions);

    case "gamma":
      return keywordMap(_enums.ExpressionEntity.Gamma, _enums.ExpressionCategory.ModuleFunctions);

    case "gcd":
      return keywordMap(_enums.ExpressionEntity.Gcd, _enums.ExpressionCategory.ModuleFunctions);

    case "hypot":
      return keywordMap(_enums.ExpressionEntity.Hypot, _enums.ExpressionCategory.ModuleFunctions);

    case "isclose":
      return keywordMap(_enums.ExpressionEntity.IsClose, _enums.ExpressionCategory.ModuleFunctions);

    case "isfinite":
      return keywordMap(_enums.ExpressionEntity.IsFinite, _enums.ExpressionCategory.ModuleFunctions);

    case "isinf":
      return keywordMap(_enums.ExpressionEntity.IsInf, _enums.ExpressionCategory.ModuleFunctions);

    case "isnan":
      return keywordMap(_enums.ExpressionEntity.IsNaN, _enums.ExpressionCategory.ModuleFunctions);

    case "isqrt":
      return keywordMap(_enums.ExpressionEntity.ISqrt, _enums.ExpressionCategory.ModuleFunctions);

    case "ldexp":
      return keywordMap(_enums.ExpressionEntity.Ldexp, _enums.ExpressionCategory.ModuleFunctions);

    case "lgamma":
      return keywordMap(_enums.ExpressionEntity.LGamma, _enums.ExpressionCategory.ModuleFunctions);

    case "log":
      return keywordMap(_enums.ExpressionEntity.Log, _enums.ExpressionCategory.ModuleFunctions);

    case "log10":
      return keywordMap(_enums.ExpressionEntity.Log10, _enums.ExpressionCategory.ModuleFunctions);

    case "log1p":
      return keywordMap(_enums.ExpressionEntity.Log1P, _enums.ExpressionCategory.ModuleFunctions);

    case "log2":
      return keywordMap(_enums.ExpressionEntity.Log2, _enums.ExpressionCategory.ModuleFunctions);

    case "perm":
      return keywordMap(_enums.ExpressionEntity.Perm, _enums.ExpressionCategory.ModuleFunctions);

    case "pow":
      return keywordMap(_enums.ExpressionEntity.Pow, _enums.ExpressionCategory.ModuleFunctions);

    case "prod":
      return keywordMap(_enums.ExpressionEntity.Prod, _enums.ExpressionCategory.ModuleFunctions);

    case "radians":
      return keywordMap(_enums.ExpressionEntity.Radians, _enums.ExpressionCategory.ModuleFunctions);

    case "remainder":
      return keywordMap(_enums.ExpressionEntity.Remainder, _enums.ExpressionCategory.ModuleFunctions);

    case "sin":
      return keywordMap(_enums.ExpressionEntity.Sin, _enums.ExpressionCategory.ModuleFunctions);

    case "sinh":
      return keywordMap(_enums.ExpressionEntity.Sinh, _enums.ExpressionCategory.ModuleFunctions);

    case "sqrt":
      return keywordMap(_enums.ExpressionEntity.Sqrt, _enums.ExpressionCategory.ModuleFunctions);

    case "tan":
      return keywordMap(_enums.ExpressionEntity.Tan, _enums.ExpressionCategory.ModuleFunctions);

    case "tanh":
      return keywordMap(_enums.ExpressionEntity.Tanh, _enums.ExpressionCategory.ModuleFunctions);

    case "trun":
      return keywordMap(_enums.ExpressionEntity.Trunc, _enums.ExpressionCategory.ModuleFunctions);

    case "e":
      return keywordMap(_enums.ExpressionEntity.E, _enums.ExpressionCategory.ModuleProperties);

    case "inf":
      return keywordMap(_enums.ExpressionEntity.Inf, _enums.ExpressionCategory.ModuleProperties);

    case "nan":
      return keywordMap(_enums.ExpressionEntity.Nan, _enums.ExpressionCategory.ModuleProperties);

    case "pi":
      return keywordMap(_enums.ExpressionEntity.Pi, _enums.ExpressionCategory.ModuleProperties);

    case "tau":
      return keywordMap(_enums.ExpressionEntity.Tau, _enums.ExpressionCategory.ModuleProperties);
    // String module entities

    case "ascii_letters":
      return keywordMap(_enums.ExpressionEntity.AsciiLetters, _enums.ExpressionCategory.ModuleProperties);

    case "ascii_lowercase":
      return keywordMap(_enums.ExpressionEntity.AsciiLowercase, _enums.ExpressionCategory.ModuleProperties);

    case "ascii_uppercase":
      return keywordMap(_enums.ExpressionEntity.AsciiUppercase, _enums.ExpressionCategory.ModuleProperties);

    case "digits":
      return keywordMap(_enums.ExpressionEntity.Digits, _enums.ExpressionCategory.ModuleProperties);

    case "hexdigits":
      return keywordMap(_enums.ExpressionEntity.Hexdigits, _enums.ExpressionCategory.ModuleProperties);

    case "octdigits":
      return keywordMap(_enums.ExpressionEntity.Octdigits, _enums.ExpressionCategory.ModuleProperties);

    case "punctuation":
      return keywordMap(_enums.ExpressionEntity.Punctuation, _enums.ExpressionCategory.ModuleProperties);

    case "printable":
      return keywordMap(_enums.ExpressionEntity.Printable, _enums.ExpressionCategory.ModuleProperties);

    case "whitespace":
      return keywordMap(_enums.ExpressionEntity.Whitespace, _enums.ExpressionCategory.ModuleProperties);

    case "Formatter":
      return keywordMap(_enums.ExpressionEntity.Formatter, _enums.ExpressionCategory.ModuleFunctions);

    case "Template":
      return keywordMap(_enums.ExpressionEntity.Template, _enums.ExpressionCategory.ModuleFunctions);

    case "capwords":
      return keywordMap(_enums.ExpressionEntity.Capwords, _enums.ExpressionCategory.ModuleFunctions);
    // Regular expression

    case "Pattern":
      return keywordMap(_enums.ExpressionEntity.Pattern, _enums.ExpressionCategory.Types);

    case "Match":
      return keywordMap(_enums.ExpressionEntity.Match, _enums.ExpressionCategory.Types);

    case "A":
      return keywordMap(_enums.ExpressionEntity.ReA, _enums.ExpressionCategory.ModuleProperties);

    case "ASCII":
      return keywordMap(_enums.ExpressionEntity.ReASCII, _enums.ExpressionCategory.ModuleProperties);

    case "DEBUG":
      return keywordMap(_enums.ExpressionEntity.ReDebug, _enums.ExpressionCategory.ModuleProperties);

    case "I":
      return keywordMap(_enums.ExpressionEntity.ReI, _enums.ExpressionCategory.ModuleProperties);

    case "IGNORECASE":
      return keywordMap(_enums.ExpressionEntity.ReIGNORECASE, _enums.ExpressionCategory.ModuleProperties);

    case "L":
      return keywordMap(_enums.ExpressionEntity.ReL, _enums.ExpressionCategory.ModuleProperties);

    case "LOCALE":
      return keywordMap(_enums.ExpressionEntity.ReLOCALE, _enums.ExpressionCategory.ModuleProperties);

    case "M":
      return keywordMap(_enums.ExpressionEntity.ReM, _enums.ExpressionCategory.ModuleProperties);

    case "MULTILINE":
      return keywordMap(_enums.ExpressionEntity.ReMULTILINE, _enums.ExpressionCategory.ModuleProperties);

    case "S":
      return keywordMap(_enums.ExpressionEntity.ReS, _enums.ExpressionCategory.ModuleProperties);

    case "DOTALL":
      return keywordMap(_enums.ExpressionEntity.ReDOTALL, _enums.ExpressionCategory.ModuleProperties);

    case "X":
      return keywordMap(_enums.ExpressionEntity.ReX, _enums.ExpressionCategory.ModuleProperties);

    case "VERBOSE":
      return keywordMap(_enums.ExpressionEntity.ReVERBOSE, _enums.ExpressionCategory.ModuleProperties);

    case "compile":
      return keywordMap(_enums.ExpressionEntity.Compile, _enums.ExpressionCategory.ModuleFunctions);

    case "search":
      return keywordMap(_enums.ExpressionEntity.Search, _enums.ExpressionCategory.ModuleFunctions);

    case "match":
      return keywordMap(_enums.ExpressionEntity.Match, _enums.ExpressionCategory.ModuleFunctions);

    case "fullmatch":
      return keywordMap(_enums.ExpressionEntity.FullMatch, _enums.ExpressionCategory.ModuleFunctions);

    case "findall":
      return keywordMap(_enums.ExpressionEntity.FindAll, _enums.ExpressionCategory.ModuleFunctions);

    case "finditer":
      return keywordMap(_enums.ExpressionEntity.FindIter, _enums.ExpressionCategory.ModuleFunctions);

    case "sub":
      return keywordMap(_enums.ExpressionEntity.Sub, _enums.ExpressionCategory.ModuleFunctions);

    case "subn":
      return keywordMap(_enums.ExpressionEntity.SubN, _enums.ExpressionCategory.ModuleFunctions);

    case "escape":
      return keywordMap(_enums.ExpressionEntity.Escape, _enums.ExpressionCategory.ModuleFunctions);

    case "purge":
      return keywordMap(_enums.ExpressionEntity.Purge, _enums.ExpressionCategory.ModuleFunctions);
    // Sys module entities

    case "addaudithook":
      return keywordMap(_enums.ExpressionEntity.AddAuditHook, _enums.ExpressionCategory.ModuleFunctions);
    // none, function

    case "audit":
      return keywordMap(_enums.ExpressionEntity.Audit, _enums.ExpressionCategory.ModuleFunctions);
    // none, function

    case "call_tracing":
      return keywordMap(_enums.ExpressionEntity.CallTracing, _enums.ExpressionCategory.ModuleFunctions);
    // unknown function

    case "_clear_type_cache":
      return keywordMap(_enums.ExpressionEntity.ClearTypeCache, _enums.ExpressionCategory.ModuleFunctions);
    // none function

    case "_current_frames":
      return keywordMap(_enums.ExpressionEntity.CurrentFrames, _enums.ExpressionCategory.ModuleFunctions);
    // dict function

    case "_current_exceptions":
      return keywordMap(_enums.ExpressionEntity.CurrentExceptions, _enums.ExpressionCategory.ModuleFunctions);
    // dict function

    case "breakpointhook":
      return keywordMap(_enums.ExpressionEntity.BreakpointHook, _enums.ExpressionCategory.ModuleFunctions);
    // none function

    case "_debugmallocstats":
      return keywordMap(_enums.ExpressionEntity.DebugMallocStats, _enums.ExpressionCategory.ModuleFunctions);
    // none function

    case "displayhook":
      return keywordMap(_enums.ExpressionEntity.DisplayHook, _enums.ExpressionCategory.ModuleFunctions);
    // non function

    case "excepthook":
      return keywordMap(_enums.ExpressionEntity.ExceptHook, _enums.ExpressionCategory.ModuleFunctions);
    // none function

    case "exc_info":
      return keywordMap(_enums.ExpressionEntity.ExcInfo, _enums.ExpressionCategory.ModuleFunctions);
    // tuple function
    // duplicates built in function of same name
    //case "exit": return keywordMap(ExpressionEntity.Exit, ExpressionEntity.ModuleFunctions); // none, function

    case "getallocatedblocks":
      return keywordMap(_enums.ExpressionEntity.GetAllocatedBlocks, _enums.ExpressionCategory.ModuleFunctions);
    // int function

    case "getandroidapilevel":
      return keywordMap(_enums.ExpressionEntity.GetAndroidApiLevel, _enums.ExpressionCategory.ModuleFunctions);
    // int function

    case "getdefaultencoding":
      return keywordMap(_enums.ExpressionEntity.GetDefaultEncoding, _enums.ExpressionCategory.ModuleFunctions);
    // string function

    case "getdlopenflags":
      return keywordMap(_enums.ExpressionEntity.GetDLOpenFlags, _enums.ExpressionCategory.ModuleFunctions);
    // int function

    case "getfilesystemencoding":
      return keywordMap(_enums.ExpressionEntity.GetFileSystemEncoding, _enums.ExpressionCategory.ModuleFunctions);
    // string function

    case "getfilesystemencodeerrors":
      return keywordMap(_enums.ExpressionEntity.GetFileSystemEncodeErrors, _enums.ExpressionCategory.ModuleFunctions);
    // string function

    case "getrefcount":
      return keywordMap(_enums.ExpressionEntity.GetRefCount, _enums.ExpressionCategory.ModuleFunctions);
    // int function

    case "getrecursionlimit":
      return keywordMap(_enums.ExpressionEntity.GetRecursionLimit, _enums.ExpressionCategory.ModuleFunctions);
    // int function

    case "getsizeof":
      return keywordMap(_enums.ExpressionEntity.GetSizeOf, _enums.ExpressionCategory.ModuleFunctions);
    // int function

    case "getswitchinterval":
      return keywordMap(_enums.ExpressionEntity.GetSwitchInterval, _enums.ExpressionCategory.ModuleFunctions);
    // float function

    case "_getframe":
      return keywordMap(_enums.ExpressionEntity.GetFrame, _enums.ExpressionCategory.ModuleFunctions);
    // unknown function

    case "getprofile":
      return keywordMap(_enums.ExpressionEntity.GetProfile, _enums.ExpressionCategory.ModuleFunctions);
    // none function

    case "gettrace":
      return keywordMap(_enums.ExpressionEntity.GetTrace, _enums.ExpressionCategory.ModuleFunctions);
    // none function

    case "getwindowsversion":
      return keywordMap(_enums.ExpressionEntity.GetWindowsVersion, _enums.ExpressionCategory.ModuleFunctions);
    // tuple function

    case "get_asyncgen_hooks":
      return keywordMap(_enums.ExpressionEntity.GetAsyncGenHooks, _enums.ExpressionCategory.ModuleFunctions);
    // unknown function

    case "get_coroutine_origin_tracking_depth":
      return keywordMap(_enums.ExpressionEntity.GetCoroutineOriginTrackingDepth, _enums.ExpressionCategory.ModuleFunctions);
    // int function

    case "intern":
      return keywordMap(_enums.ExpressionEntity.Intern, _enums.ExpressionCategory.ModuleFunctions);
    // unknown function

    case "is_finalizing":
      return keywordMap(_enums.ExpressionEntity.IsFinalizing, _enums.ExpressionCategory.ModuleFunctions);
    // bool function

    case "setdlopenflags":
      return keywordMap(_enums.ExpressionEntity.SetDLOpenFlags, _enums.ExpressionCategory.ModuleFunctions);
    // none function

    case "setprofile":
      return keywordMap(_enums.ExpressionEntity.SetProfile, _enums.ExpressionCategory.ModuleFunctions);
    // unknown function

    case "setrecursionlimit":
      return keywordMap(_enums.ExpressionEntity.SetRecursionLimit, _enums.ExpressionCategory.ModuleFunctions);
    // none function

    case "setswitchinterval":
      return keywordMap(_enums.ExpressionEntity.SetSwitchInterval, _enums.ExpressionCategory.ModuleFunctions);
    // none function

    case "settrace":
      return keywordMap(_enums.ExpressionEntity.SetTrace, _enums.ExpressionCategory.ModuleFunctions);
    // none function

    case "set_asyncgen_hooks":
      return keywordMap(_enums.ExpressionEntity.SetAsyncgenHooks, _enums.ExpressionCategory.ModuleFunctions);
    // none function

    case "_enablelegacywindowsfsencoding":
      return keywordMap(_enums.ExpressionEntity.EnableLegacyWindowsFSEncoding, _enums.ExpressionCategory.ModuleFunctions);
    // none function

    case "abiflags":
      return keywordMap(_enums.ExpressionEntity.ABIFlags, _enums.ExpressionCategory.ModuleProperties);
    // string, prop

    case "argv":
      return keywordMap(_enums.ExpressionEntity.Argv, _enums.ExpressionCategory.ModuleProperties);
    // list, prop

    case "base_exec_prefix":
      return keywordMap(_enums.ExpressionEntity.BaseExecPrefix, _enums.ExpressionCategory.ModuleProperties);
    // string, prop

    case "base_prefix":
      return keywordMap(_enums.ExpressionEntity.BasePrefix, _enums.ExpressionCategory.ModuleProperties);
    // string prop

    case "byte_order":
      return keywordMap(_enums.ExpressionEntity.ByteOrder, _enums.ExpressionCategory.ModuleProperties);
    // string prop

    case "built_in_module_names":
      return keywordMap(_enums.ExpressionEntity.BuiltInModuleNames, _enums.ExpressionCategory.ModuleProperties);
    // tuple prop

    case "copyright":
      return keywordMap(_enums.ExpressionEntity.Copyright, _enums.ExpressionCategory.ModuleProperties);
    // string prop

    case "dllhandle":
      return keywordMap(_enums.ExpressionEntity.DllHandle, _enums.ExpressionCategory.ModuleProperties);
    // int prop

    case "dont_write_bytecode":
      return keywordMap(_enums.ExpressionEntity.DontWriteBytecode, _enums.ExpressionCategory.ModuleProperties);
    // bool prop

    case "pycache_prefix":
      return keywordMap(_enums.ExpressionEntity.PycachePrefix, _enums.ExpressionCategory.ModuleProperties);
    // unknown prop

    case "exec_prefix":
      return keywordMap(_enums.ExpressionEntity.ExecPrefix, _enums.ExpressionCategory.ModuleProperties);
    // string prop

    case "executable":
      return keywordMap(_enums.ExpressionEntity.Executable, _enums.ExpressionCategory.ModuleProperties);
    // string prop

    case "flags":
      return keywordMap(_enums.ExpressionEntity.Flags, _enums.ExpressionCategory.ModuleProperties);
    // unknown prop

    case "float_info":
      return keywordMap(_enums.ExpressionEntity.FloatInfo, _enums.ExpressionCategory.ModuleProperties);
    // unknown prop

    case "float_repr_style":
      return keywordMap(_enums.ExpressionEntity.FloatReprStyle, _enums.ExpressionCategory.ModuleProperties);
    // string prop

    case "hash_info":
      return keywordMap(_enums.ExpressionEntity.HashInfo, _enums.ExpressionCategory.ModuleProperties);
    // unknown prop

    case "hexversion":
      return keywordMap(_enums.ExpressionEntity.HexVersion, _enums.ExpressionCategory.ModuleProperties);
    // int prop

    case "implementation":
      return keywordMap(_enums.ExpressionEntity.Implementation, _enums.ExpressionCategory.ModuleProperties);
    // unknown prop

    case "int_info":
      return keywordMap(_enums.ExpressionEntity.IntInfo, _enums.ExpressionCategory.ModuleProperties);
    // unknown prop

    case "last_type":
      return keywordMap(_enums.ExpressionEntity.LastType, _enums.ExpressionCategory.ModuleProperties);
    // unknown prop

    case "last_value":
      return keywordMap(_enums.ExpressionEntity.LastValue, _enums.ExpressionCategory.ModuleProperties);
    // unknown prop

    case "last_traceback":
      return keywordMap(_enums.ExpressionEntity.LastTraceback, _enums.ExpressionCategory.ModuleProperties);
    // unknown prop

    case "maxsize":
      return keywordMap(_enums.ExpressionEntity.MaxSize, _enums.ExpressionCategory.ModuleProperties);
    // int prop

    case "maxunicode":
      return keywordMap(_enums.ExpressionEntity.MaxUnicode, _enums.ExpressionCategory.ModuleProperties);
    // int prop

    case "meta_path":
      return keywordMap(_enums.ExpressionEntity.MetaPath, _enums.ExpressionCategory.ModuleProperties);
    // list prop

    case "modules":
      return keywordMap(_enums.ExpressionEntity.Modules, _enums.ExpressionCategory.ModuleProperties);
    // dict prop

    case "orig_argv":
      return keywordMap(_enums.ExpressionEntity.OrigArgv, _enums.ExpressionCategory.ModuleProperties);
    // list prop

    case "path":
      return keywordMap(_enums.ExpressionEntity.Path, _enums.ExpressionCategory.ModuleProperties);
    // list prop

    case "path_hooks":
      return keywordMap(_enums.ExpressionEntity.PathHooks, _enums.ExpressionCategory.ModuleProperties);
    // list prop

    case "path_importer_cache":
      return keywordMap(_enums.ExpressionEntity.PathImporterCache, _enums.ExpressionCategory.ModuleProperties);
    // dict prop

    case "platform":
      return keywordMap(_enums.ExpressionEntity.Platform, _enums.ExpressionCategory.ModuleProperties);
    // string prop

    case "prefix":
      return keywordMap(_enums.ExpressionEntity.Prefix, _enums.ExpressionCategory.ModuleProperties);
    // string prop

    case "ps1":
      return keywordMap(_enums.ExpressionEntity.PS1, _enums.ExpressionCategory.ModuleProperties);
    // string prop

    case "ps2":
      return keywordMap(_enums.ExpressionEntity.PS2, _enums.ExpressionCategory.ModuleProperties);
    // string prop

    case "stdin":
      return keywordMap(_enums.ExpressionEntity.StdIn, _enums.ExpressionCategory.ModuleProperties);
    // unknown prop

    case "stdout":
      return keywordMap(_enums.ExpressionEntity.StdOut, _enums.ExpressionCategory.ModuleProperties);
    // unknown prop

    case "stderr":
      return keywordMap(_enums.ExpressionEntity.StdErr, _enums.ExpressionCategory.ModuleProperties);
    // unknown prop

    case "stdlib_module_names":
      return keywordMap(_enums.ExpressionEntity.StdLibModuleNames, _enums.ExpressionCategory.ModuleProperties);
    // unknown prop

    case "thread_info":
      return keywordMap(_enums.ExpressionEntity.ThreadInfo, _enums.ExpressionCategory.ModuleProperties);
    // unknown prop

    case "tracebacklimit":
      return keywordMap(_enums.ExpressionEntity.TracebackLimit, _enums.ExpressionCategory.ModuleProperties);
    // int prop

    case "version":
      return keywordMap(_enums.ExpressionEntity.Version, _enums.ExpressionCategory.ModuleProperties);
    // string prop

    case "api_version":
      return keywordMap(_enums.ExpressionEntity.ApiVersion, _enums.ExpressionCategory.ModuleProperties);
    // int prop

    case "version_info":
      return keywordMap(_enums.ExpressionEntity.VersionInfo, _enums.ExpressionCategory.ModuleProperties);
    // tuple prop

    case "warnoptions":
      return keywordMap(_enums.ExpressionEntity.WarnOptions, _enums.ExpressionCategory.ModuleProperties);
    // list prop

    case "winver":
      return keywordMap(_enums.ExpressionEntity.WinVer, _enums.ExpressionCategory.ModuleProperties);
    // int prop

    case "_xoptions":
      return keywordMap(_enums.ExpressionEntity.XOptions, _enums.ExpressionCategory.ModuleProperties);
    // dict prop

    default:
      return keywordMap(_enums.ExpressionEntity.Unknown, _enums.ExpressionCategory.Unknown);
  }
};
/**
 * Gets information about known types that can be identified using just the value
 * @param {String} identifier The identifier to look up
 * @returns {Object} An object with keys entity and category.
 */


exports.keywordLookup = keywordLookup;

var typeLookup = function typeLookup(identifier) {
  switch (identifier) {
    case "str":
      return keywordMap(_enums.ExpressionEntity.StrType, _enums.ExpressionCategory.Types);

    case "int":
      return keywordMap(_enums.ExpressionEntity.IntType, _enums.ExpressionCategory.Types);

    case "float":
      return keywordMap(_enums.ExpressionEntity.FloatType, _enums.ExpressionCategory.Types);

    case "bool":
      return keywordMap(_enums.ExpressionEntity.BoolType, _enums.ExpressionCategory.Types);

    case "list":
      return keywordMap(_enums.ExpressionEntity.ListType, _enums.ExpressionCategory.Types);

    case "set":
      return keywordMap(_enums.ExpressionEntity.SetType, _enums.ExpressionCategory.Types);

    case "dict":
      return keywordMap(_enums.ExpressionEntity.DictType, _enums.ExpressionCategory.Types);

    case "tuple":
      return keywordMap(_enums.ExpressionEntity.TupleType, _enums.ExpressionCategory.Types);

    default:
      return keywordMap(_enums.ExpressionEntity.Unknown, _enums.ExpressionCategory.Unknown);
  }
};
/**
 * Map storing the return type for built in functions. Lookup using an
 * ExpressionEntity.
 */


exports.typeLookup = typeLookup;
var builtInReturnLookup = new Map([[_enums.ExpressionEntity.AbsFunction, _enums.DataType.Number], // float, int
[_enums.ExpressionEntity.AllFunction, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.AnyFunction, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.AsciiFunction, _enums.DataType.String], // string
[_enums.ExpressionEntity.AssertFunction, _enums.DataType.None], [_enums.ExpressionEntity.BinFunction, _enums.DataType.String], // string
[_enums.ExpressionEntity.BoolFunction, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.CallableFunction, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.ChrFunction, _enums.DataType.String], // string
[_enums.ExpressionEntity.DictFunction, _enums.DataType.Dict], // dictionary
[_enums.ExpressionEntity.DivModFunction, _enums.DataType.Tuple], // is a tuple but don't know if assigned as is or broken down
[_enums.ExpressionEntity.EnumerateFunction, _enums.DataType.Tuple], // unknown
[_enums.ExpressionEntity.EvalFunction, _enums.DataType.Unknown], [_enums.ExpressionEntity.ExecFunction, _enums.DataType.None], [_enums.ExpressionEntity.ExitFunction, _enums.DataType.None], [_enums.ExpressionEntity.FilterFunction, _enums.DataType.Unknown], // unknown
[_enums.ExpressionEntity.FloatFunction, _enums.DataType.Float], // float
[_enums.ExpressionEntity.GetAttrFunction, _enums.DataType.Unknown], // unknown
[_enums.ExpressionEntity.GlobalsFunction, _enums.DataType.Dict], // dictionary
[_enums.ExpressionEntity.HasAttrFunction, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.InputFunction, _enums.DataType.String], // string
[_enums.ExpressionEntity.IntFunction, _enums.DataType.Int], // int
[_enums.ExpressionEntity.IsInstanceFunction, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.LenFunction, _enums.DataType.Int], // int
[_enums.ExpressionEntity.ListFunction, _enums.DataType.List], // list
[_enums.ExpressionEntity.MapFunction, _enums.DataType.Unknown], // unknown
[_enums.ExpressionEntity.MaxFunction, _enums.DataType.Number], // float, int
[_enums.ExpressionEntity.MinFunction, _enums.DataType.Number], // float, int
[_enums.ExpressionEntity.OpenFunction, _enums.DataType.File], // file
[_enums.ExpressionEntity.OrdFunction, _enums.DataType.Int], // int
[_enums.ExpressionEntity.PowFunction, _enums.DataType.Number], // float, int
[_enums.ExpressionEntity.PrintFunction, _enums.DataType.None], [_enums.ExpressionEntity.QuitFunction, _enums.DataType.None], [_enums.ExpressionEntity.RangeFunction, _enums.DataType.Unknown], // int (usually)
[_enums.ExpressionEntity.ReversedFunction, _enums.DataType.Unknown], // an iterable
[_enums.ExpressionEntity.RoundFunction, _enums.DataType.Float], // float
[_enums.ExpressionEntity.SetFunction, _enums.DataType.Set], // set
[_enums.ExpressionEntity.SortedFunction, _enums.DataType.List], [_enums.ExpressionEntity.StrFunction, _enums.DataType.String], // string
[_enums.ExpressionEntity.SumFunction, _enums.DataType.Number], // float, int
[_enums.ExpressionEntity.TupleFunction, _enums.DataType.Tuple], // tuple
[_enums.ExpressionEntity.TypeFunction, _enums.DataType.Class], // class
[_enums.ExpressionEntity.Capitalize, _enums.DataType.String], // string
[_enums.ExpressionEntity.Casefold, _enums.DataType.String], // string
[_enums.ExpressionEntity.Center, _enums.DataType.String], // string
[_enums.ExpressionEntity.Count, _enums.DataType.Int], // int
[_enums.ExpressionEntity.Encode, _enums.DataType.String], // string
[_enums.ExpressionEntity.EndsWith, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.ExpandTabs, _enums.DataType.String], // string
[_enums.ExpressionEntity.Find, _enums.DataType.Int], // int
[_enums.ExpressionEntity.Format, _enums.DataType.String], // string
[_enums.ExpressionEntity.FormatFunction, _enums.DataType.String], // string
[_enums.ExpressionEntity.Index, _enums.DataType.Int], // int
[_enums.ExpressionEntity.IsAlnum, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.IsAlpha, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.IsAscii, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.IsDecimal, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.IsDigit, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.IsIdentifier, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.IsLower, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.IsNumeric, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.IsPrintable, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.IsSpace, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.IsTitle, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.IsUpper, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.Join, _enums.DataType.String], // string
[_enums.ExpressionEntity.LJust, _enums.DataType.String], // string
[_enums.ExpressionEntity.Lower, _enums.DataType.String], // string
[_enums.ExpressionEntity.LStrip, _enums.DataType.String], // string
[_enums.ExpressionEntity.MakeTrans, _enums.DataType.Dict], // dictionary
[_enums.ExpressionEntity.Partition, _enums.DataType.Tuple], // tuple
[_enums.ExpressionEntity.Replace, _enums.DataType.String], // string
[_enums.ExpressionEntity.RFind, _enums.DataType.Int], // int
[_enums.ExpressionEntity.RIndex, _enums.DataType.Int], // int
[_enums.ExpressionEntity.RJust, _enums.DataType.String], // string
[_enums.ExpressionEntity.RPartition, _enums.DataType.Tuple], // tuple
[_enums.ExpressionEntity.RSplit, _enums.DataType.List], // list
[_enums.ExpressionEntity.RStrip, _enums.DataType.String], // string
[_enums.ExpressionEntity.Split, _enums.DataType.List], // list
[_enums.ExpressionEntity.SplitLines, _enums.DataType.List], // list
[_enums.ExpressionEntity.StartsWith, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.Strip, _enums.DataType.String], // string
[_enums.ExpressionEntity.SwapCase, _enums.DataType.String], // string
[_enums.ExpressionEntity.Title, _enums.DataType.String], // string
[_enums.ExpressionEntity.Translate, _enums.DataType.String], [_enums.ExpressionEntity.Upper, _enums.DataType.String], // string
[_enums.ExpressionEntity.ZFill, _enums.DataType.String], // string
[_enums.ExpressionEntity.Append, _enums.DataType.None], // none
[_enums.ExpressionEntity.Clear, _enums.DataType.None], [_enums.ExpressionEntity.Copy, _enums.DataType.Unknown], // list, dictionary, set
[_enums.ExpressionEntity.Extend, _enums.DataType.None], [_enums.ExpressionEntity.Insert, _enums.DataType.None], [_enums.ExpressionEntity.Pop, _enums.DataType.Unknown], // list, dictionary, set
[_enums.ExpressionEntity.Remove, _enums.DataType.None], [_enums.ExpressionEntity.Reverse, _enums.DataType.None], [_enums.ExpressionEntity.Sort, _enums.DataType.None], [_enums.ExpressionEntity.FromKeys, _enums.DataType.Dict], // dictionary
[_enums.ExpressionEntity.Get, _enums.DataType.Unknown], // unknown
[_enums.ExpressionEntity.Items, _enums.DataType.List], // list
[_enums.ExpressionEntity.Keys, _enums.DataType.Unknown], // unknown
[_enums.ExpressionEntity.PopItem, _enums.DataType.None], [_enums.ExpressionEntity.SetDefault, _enums.DataType.Unknown], // unknown
[_enums.ExpressionEntity.Update, _enums.DataType.None], [_enums.ExpressionEntity.Values, _enums.DataType.Unknown], // unknown
[_enums.ExpressionEntity.Add, _enums.DataType.None], [_enums.ExpressionEntity.Difference, _enums.DataType.Set], // set
[_enums.ExpressionEntity.DifferenceUpdate, _enums.DataType.None], [_enums.ExpressionEntity.Discard, _enums.DataType.None], [_enums.ExpressionEntity.Intersection, _enums.DataType.Set], // set
[_enums.ExpressionEntity.IntersectionUpdate, _enums.DataType.None], [_enums.ExpressionEntity.IsDisjoint, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.IsSubset, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.IsSuperset, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.SymmetricDifference, _enums.DataType.Set], // set
[_enums.ExpressionEntity.SymmetricDifferenceUpdate, _enums.DataType.None], [_enums.ExpressionEntity.Union, _enums.DataType.Set], // set
[_enums.ExpressionEntity.Close, _enums.DataType.None], [_enums.ExpressionEntity.FileNo, _enums.DataType.Int], // int
[_enums.ExpressionEntity.Flush, _enums.DataType.None], [_enums.ExpressionEntity.IsAtty, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.Read, _enums.DataType.String], // unknown
[_enums.ExpressionEntity.Readable, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.ReadLine, _enums.DataType.String], // string
[_enums.ExpressionEntity.ReadLines, _enums.DataType.List], // list
[_enums.ExpressionEntity.Seek, _enums.DataType.None], [_enums.ExpressionEntity.Seekable, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.Tell, _enums.DataType.Unknown], // unknown
[_enums.ExpressionEntity.Truncate, _enums.DataType.None], [_enums.ExpressionEntity.Writable, _enums.DataType.Bool], // boolean
[_enums.ExpressionEntity.Write, _enums.DataType.None], [_enums.ExpressionEntity.WriteLines, _enums.DataType.None], [_enums.ExpressionEntity.Main, _enums.DataType.None], [_enums.ExpressionEntity.Cmp, _enums.DataType.Int], [_enums.ExpressionEntity.Eq, _enums.DataType.Bool], [_enums.ExpressionEntity.Ne, _enums.DataType.Bool], [_enums.ExpressionEntity.Lt, _enums.DataType.Bool], [_enums.ExpressionEntity.Gt, _enums.DataType.Bool], [_enums.ExpressionEntity.Le, _enums.DataType.Bool], [_enums.ExpressionEntity.Ge, _enums.DataType.Bool], [_enums.ExpressionEntity.Str, _enums.DataType.String], [_enums.ExpressionEntity.SpecialContains, _enums.DataType.Bool], [_enums.ExpressionEntity.SpecialLen, _enums.DataType.Int], [_enums.ExpressionEntity.ZipFunction, _enums.DataType.Unknown], [_enums.ExpressionEntity.Seed, _enums.DataType.None], // no return
[_enums.ExpressionEntity.GetState, _enums.DataType.Unknown], // unknown
[_enums.ExpressionEntity.SetState, _enums.DataType.None], // none
[_enums.ExpressionEntity.GetRandBits, _enums.DataType.Int], // int
[_enums.ExpressionEntity.RandRange, _enums.DataType.Int], // int
[_enums.ExpressionEntity.RandInt, _enums.DataType.Int], // int
[_enums.ExpressionEntity.Choice, _enums.DataType.Unknown], // unknown
[_enums.ExpressionEntity.Choices, _enums.DataType.List], // list
[_enums.ExpressionEntity.Shuffle, _enums.DataType.Shuffle], // none
[_enums.ExpressionEntity.Sample, _enums.DataType.List], // list
[_enums.ExpressionEntity.RandomMethod, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Uniform, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Triangular, _enums.DataType.Float], // float
[_enums.ExpressionEntity.BetaVariate, _enums.DataType.Float], // float
[_enums.ExpressionEntity.ExpoVariate, _enums.DataType.Float], // float
[_enums.ExpressionEntity.GammaVariate, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Gauss, _enums.DataType.Float], // float
[_enums.ExpressionEntity.LogNormVariate, _enums.DataType.Float], // float
[_enums.ExpressionEntity.NormalVariate, _enums.DataType.Float], // float
[_enums.ExpressionEntity.VonMisesVariate, _enums.DataType.Float], // float
[_enums.ExpressionEntity.ParetoVariate, _enums.DataType.Float], // float
[_enums.ExpressionEntity.WeibullVariate, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Acos, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Acosh, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Asin, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Asinh, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Atan, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Atan2, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Atanh, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Ceil, _enums.DataType.Int], // int
[_enums.ExpressionEntity.Comb, _enums.DataType.Int], // int
[_enums.ExpressionEntity.CopySign, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Cos, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Cosh, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Degrees, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Dist, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Erf, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Erfc, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Exp, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Expm1, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Fabs, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Factorial, _enums.DataType.Int], // float
[_enums.ExpressionEntity.Floor, _enums.DataType.Int], // int
[_enums.ExpressionEntity.Fmod, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Frexp, _enums.DataType.Tuple], // float
[_enums.ExpressionEntity.Fsum, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Gamma, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Gcd, _enums.DataType.Int], // float
[_enums.ExpressionEntity.Hypot, _enums.DataType.Float], // float
[_enums.ExpressionEntity.IsClose, _enums.DataType.Bool], // bool
[_enums.ExpressionEntity.IsFinite, _enums.DataType.Bool], // bool
[_enums.ExpressionEntity.IsInf, _enums.DataType.Bool], // bool
[_enums.ExpressionEntity.IsNaN, _enums.DataType.Bool], // bool
[_enums.ExpressionEntity.ISqrt, _enums.DataType.Int], // float
[_enums.ExpressionEntity.Ldexp, _enums.DataType.Float], // float
[_enums.ExpressionEntity.LGamma, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Log, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Log10, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Log1P, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Log2, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Perm, _enums.DataType.Int], // int
[_enums.ExpressionEntity.Pow, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Prod, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Radians, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Remainder, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Sin, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Sinh, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Sqrt, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Tan, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Tanh, _enums.DataType.Float], // float
[_enums.ExpressionEntity.Trunc, _enums.DataType.Int], // int
[_enums.ExpressionEntity.E, _enums.DataType.Float], [_enums.ExpressionEntity.Inf, _enums.DataType.Float], [_enums.ExpressionEntity.Nan, _enums.DataType.Float], [_enums.ExpressionEntity.Pi, _enums.DataType.Float], [_enums.ExpressionEntity.Tau, _enums.DataType.Float], // String entities
[_enums.ExpressionEntity.AsciiLetters, _enums.DataType.String], [_enums.ExpressionEntity.AsciiLowercase, _enums.DataType.String], [_enums.ExpressionEntity.AsciiUppercase, _enums.DataType.String], [_enums.ExpressionEntity.Digits, _enums.DataType.String], [_enums.ExpressionEntity.Hexdigits, _enums.DataType.String], [_enums.ExpressionEntity.Octdigits, _enums.DataType.String], [_enums.ExpressionEntity.Punctuation, _enums.DataType.String], [_enums.ExpressionEntity.Printable, _enums.DataType.String], [_enums.ExpressionEntity.Whitespace, _enums.DataType.String], [_enums.ExpressionEntity.Formatter, _enums.DataType.String], [_enums.ExpressionEntity.Template, _enums.DataType.String], [_enums.ExpressionEntity.Capwords, _enums.DataType.String], // Re module entities
[_enums.ExpressionEntity.ReA, _enums.DataType.Unknown], [_enums.ExpressionEntity.ReASCII, _enums.DataType.Unknown], [_enums.ExpressionEntity.ReDebug, _enums.DataType.Unknown], [_enums.ExpressionEntity.ReI, _enums.DataType.Unknown], [_enums.ExpressionEntity.ReIGNORECASE, _enums.DataType.Unknown], [_enums.ExpressionEntity.ReL, _enums.DataType.Unknown], [_enums.ExpressionEntity.ReLOCALE, _enums.DataType.Unknown], [_enums.ExpressionEntity.ReM, _enums.DataType.Unknown], [_enums.ExpressionEntity.ReMULTILINE, _enums.DataType.Unknown], [_enums.ExpressionEntity.ReS, _enums.DataType.Unknown], [_enums.ExpressionEntity.ReDOTALL, _enums.DataType.Unknown], [_enums.ExpressionEntity.ReX, _enums.DataType.Unknown], [_enums.ExpressionEntity.ReVERBOSE, _enums.DataType.Unknown], [_enums.ExpressionEntity.Compile, _enums.DataType.Pattern], [_enums.ExpressionEntity.Search, _enums.DataType.Unknown], [_enums.ExpressionEntity.Match, _enums.DataType.Unknown], [_enums.ExpressionEntity.FullMatch, _enums.DataType.Unknown], [_enums.ExpressionEntity.FindAll, _enums.DataType.List], [_enums.ExpressionEntity.FindIter, _enums.DataType.Unknown], [_enums.ExpressionEntity.Sub, _enums.DataType.String], [_enums.ExpressionEntity.SubN, _enums.DataType.Tuple], [_enums.ExpressionEntity.Escape, _enums.DataType.String], [_enums.ExpressionEntity.Purge, _enums.DataType.None], // Sys module entities
[_enums.ExpressionEntity.AddAuditHook, _enums.DataType.None], // none, function
[_enums.ExpressionEntity.Audit, _enums.DataType.None], // none, function
[_enums.ExpressionEntity.CallTracing, _enums.DataType.Unknown], // unknown function
[_enums.ExpressionEntity.ClearTypeCache, _enums.DataType.None], // none function
[_enums.ExpressionEntity.CurrentFrames, _enums.DataType.Dict], // dict function
[_enums.ExpressionEntity.CurrentExceptions, _enums.DataType.Dict], // dict function
[_enums.ExpressionEntity.BreakpointHook, _enums.DataType.None], // none function
[_enums.ExpressionEntity.DebugMallocStats, _enums.DataType.None], // none function
[_enums.ExpressionEntity.DisplayHook, _enums.DataType.None], // non function
[_enums.ExpressionEntity.ExceptHook, _enums.DataType.None], // none function
[_enums.ExpressionEntity.ExcInfo, _enums.DataType.Tuple], // tuple function
[_enums.ExpressionEntity.SysExit, _enums.DataType.None], // none, function
[_enums.ExpressionEntity.GetAllocatedBlocks, _enums.DataType.Int], // int function
[_enums.ExpressionEntity.GetAndroidApiLevel, _enums.DataType.Int], // int function
[_enums.ExpressionEntity.GetDefaultEncoding, _enums.DataType.String], // string function
[_enums.ExpressionEntity.GetDLOpenFlags, _enums.DataType.Int], // int function
[_enums.ExpressionEntity.GetFileSystemEncoding, _enums.DataType.String], // string function
[_enums.ExpressionEntity.GetFileSystemEncodeErrors, _enums.DataType.String], // string function
[_enums.ExpressionEntity.GetRefCount, _enums.DataType.Int], // int function
[_enums.ExpressionEntity.GetRecursionLimit, _enums.DataType.Int], // int function
[_enums.ExpressionEntity.GetSizeOf, _enums.DataType.Int], // int function
[_enums.ExpressionEntity.GetSwitchInterval, _enums.DataType.Float], // float function
[_enums.ExpressionEntity.GetFrame, _enums.DataType.Unknown], // unknown function
[_enums.ExpressionEntity.GetProfile, _enums.DataType.None], // none function
[_enums.ExpressionEntity.GetTrace, _enums.DataType.None], // none function
[_enums.ExpressionEntity.GetWindowsVersion, _enums.DataType.Tuple], // tuple function
[_enums.ExpressionEntity.GetAsyncGenHooks, _enums.DataType.Unknown], // unknown function
[_enums.ExpressionEntity.GetCoroutineOriginTrackingDepth, _enums.DataType.Int], // int function
[_enums.ExpressionEntity.Intern, _enums.DataType.Unknown], // unknown function
[_enums.ExpressionEntity.IsFinalizing, _enums.DataType.Bool], // bool function
[_enums.ExpressionEntity.SetDLOpenFlags, _enums.DataType.None], // none function
[_enums.ExpressionEntity.SetProfile, _enums.DataType.Unknown], // unknown function
[_enums.ExpressionEntity.SetRecursionLimit, _enums.DataType.None], // none function
[_enums.ExpressionEntity.SetSwitchInterval, _enums.DataType.None], // none function
[_enums.ExpressionEntity.SetTrace, _enums.DataType.None], // none function
[_enums.ExpressionEntity.SetAsyncgenHooks, _enums.DataType.None], // none function
[_enums.ExpressionEntity.EnableLegacyWindowsFSEncoding, _enums.DataType.None], // none function
[_enums.ExpressionEntity.ABIFlags, _enums.DataType.String], // string, prop
[_enums.ExpressionEntity.Argv, _enums.DataType.List], // list, prop
[_enums.ExpressionEntity.BaseExecPrefix, _enums.DataType.String], // string, prop
[_enums.ExpressionEntity.BasePrefix, _enums.DataType.String], // string prop
[_enums.ExpressionEntity.ByteOrder, _enums.DataType.String], // string prop
[_enums.ExpressionEntity.BuiltInModuleNames, _enums.DataType.Tuple], // tuple prop
[_enums.ExpressionEntity.Copyright, _enums.DataType.String], // string prop
[_enums.ExpressionEntity.DllHandle, _enums.DataType.Int], // int prop
[_enums.ExpressionEntity.DontWriteBytecode, _enums.DataType.Bool], // bool prop
[_enums.ExpressionEntity.PycachePrefix, _enums.DataType.Unknown], // unknown prop
[_enums.ExpressionEntity.ExecPrefix, _enums.DataType.String], // string prop
[_enums.ExpressionEntity.Executable, _enums.DataType.String], // string prop
[_enums.ExpressionEntity.Flags, _enums.DataType.Unknown], // unknown prop
[_enums.ExpressionEntity.FloatInfo, _enums.DataType.Unknown], // unknown prop
[_enums.ExpressionEntity.FloatReprStyle, _enums.DataType.String], // string prop
[_enums.ExpressionEntity.HashInfo, _enums.DataType.Unknown], // unknown prop
[_enums.ExpressionEntity.HexVersion, _enums.DataType.Int], // int prop
[_enums.ExpressionEntity.Implementation, _enums.DataType.Unknown], // unknown prop
[_enums.ExpressionEntity.IntInfo, _enums.DataType.Unknown], // unknown prop
[_enums.ExpressionEntity.LastType, _enums.DataType.Unknown], // unknown prop
[_enums.ExpressionEntity.LastValue, _enums.DataType.Unknown], // unknown prop
[_enums.ExpressionEntity.LastTraceback, _enums.DataType.Unknown], // unknown prop
[_enums.ExpressionEntity.MaxSize, _enums.DataType.Int], // int prop
[_enums.ExpressionEntity.MaxUnicode, _enums.DataType.Int], // int prop
[_enums.ExpressionEntity.MetaPath, _enums.DataType.List], // list prop
[_enums.ExpressionEntity.Modules, _enums.DataType.Dict], // dict prop
[_enums.ExpressionEntity.OrigArgv, _enums.DataType.List], // list prop
[_enums.ExpressionEntity.Path, _enums.DataType.List], // list prop
[_enums.ExpressionEntity.PathHooks, _enums.DataType.List], // list prop
[_enums.ExpressionEntity.PathImporterCache, _enums.DataType.Dict], // dict prop
[_enums.ExpressionEntity.Platform, _enums.DataType.String], // string prop
[_enums.ExpressionEntity.Prefix, _enums.DataType.String], // string prop
[_enums.ExpressionEntity.PS1, _enums.DataType.String], // string prop
[_enums.ExpressionEntity.PS2, _enums.DataType.String], // string prop
[_enums.ExpressionEntity.StdIn, _enums.DataType.Unknown], // unknown prop
[_enums.ExpressionEntity.StdOut, _enums.DataType.Unknown], // unknown prop
[_enums.ExpressionEntity.StdErr, _enums.DataType.Unknown], // unknown prop
[_enums.ExpressionEntity.StdLibModuleNames, _enums.DataType.Unknown], // unknown prop
[_enums.ExpressionEntity.ThreadInfo, _enums.DataType.Unknown], // unknown prop
[_enums.ExpressionEntity.TracebackLimit, _enums.DataType.Unknown], // int prop
[_enums.ExpressionEntity.Version, _enums.DataType.String], // string prop
[_enums.ExpressionEntity.ApiVersion, _enums.DataType.Int], // int prop
[_enums.ExpressionEntity.VersionInfo, _enums.DataType.Tuple], // tuple prop
[_enums.ExpressionEntity.WarnOptions, _enums.DataType.List], // list prop
[_enums.ExpressionEntity.WinVer, _enums.DataType.Int], // int prop
[_enums.ExpressionEntity.XOptions, _enums.DataType.Dict] // dict prop
]); // Set of built in methods (ExpressionEntity) that modify a list, dict, or set

exports.builtInReturnLookup = builtInReturnLookup;
var modifyingMethodsLookup = new Set([_enums.ExpressionEntity.Add, _enums.ExpressionEntity.Append, _enums.ExpressionEntity.Clear, _enums.ExpressionEntity.DifferenceUpdate, _enums.ExpressionEntity.Discard, _enums.ExpressionEntity.Extend, _enums.ExpressionEntity.Insert, _enums.ExpressionEntity.IntersectionUpdate, _enums.ExpressionEntity.Pop, _enums.ExpressionEntity.PopItem, _enums.ExpressionEntity.Remove, _enums.ExpressionEntity.Reverse, _enums.ExpressionEntity.SetDefault, _enums.ExpressionEntity.Sort, _enums.ExpressionEntity.SymmetricDifferenceUpdate, _enums.ExpressionEntity.Update]); // Set of built in string methods (ExpressionEntity) that return a new string. String methods that return information about the string, e.g.count() or index(), are not included

exports.modifyingMethodsLookup = modifyingMethodsLookup;
var stringMethodsLookup = new Set([_enums.ExpressionEntity.Capitalize, _enums.ExpressionEntity.Casefold, _enums.ExpressionEntity.Center, _enums.ExpressionEntity.Encode, _enums.ExpressionEntity.ExpandTabs, _enums.ExpressionEntity.Format, _enums.ExpressionEntity.FormatMap, _enums.ExpressionEntity.LJust, _enums.ExpressionEntity.Lower, _enums.ExpressionEntity.LStrip, _enums.ExpressionEntity.Replace, _enums.ExpressionEntity.RJust, _enums.ExpressionEntity.RStrip, _enums.ExpressionEntity.Strip, _enums.ExpressionEntity.SwapCase, _enums.ExpressionEntity.Title, _enums.ExpressionEntity.Translate, _enums.ExpressionEntity.Upper, _enums.ExpressionEntity.ZFill]); // Matches module functions / properties (ExpressionEntity) to the associated module

exports.stringMethodsLookup = stringMethodsLookup;
var moduleLookup = new Map([// random module
[_enums.ExpressionEntity.Seed, _enums.ExpressionEntity.RandomModule], [_enums.ExpressionEntity.GetState, _enums.ExpressionEntity.RandomModule], [_enums.ExpressionEntity.SetState, _enums.ExpressionEntity.RandomModule], [_enums.ExpressionEntity.GetRandBits, _enums.ExpressionEntity.RandomModule], [_enums.ExpressionEntity.RandRange, _enums.ExpressionEntity.RandomModule], [_enums.ExpressionEntity.RandInt, _enums.ExpressionEntity.RandomModule], [_enums.ExpressionEntity.Choice, _enums.ExpressionEntity.RandomModule], [_enums.ExpressionEntity.Choices, _enums.ExpressionEntity.RandomModule], [_enums.ExpressionEntity.Shuffle, _enums.ExpressionEntity.RandomModule], [_enums.ExpressionEntity.Sample, _enums.ExpressionEntity.RandomModule], [_enums.ExpressionEntity.RandomMethod, _enums.ExpressionEntity.RandomModule], [_enums.ExpressionEntity.Uniform, _enums.ExpressionEntity.RandomModule], [_enums.ExpressionEntity.Triangular, _enums.ExpressionEntity.RandomModule], [_enums.ExpressionEntity.BetaVariate, _enums.ExpressionEntity.RandomModule], [_enums.ExpressionEntity.ExpoVariate, _enums.ExpressionEntity.RandomModule], [_enums.ExpressionEntity.GammaVariate, _enums.ExpressionEntity.RandomModule], [_enums.ExpressionEntity.Gauss, _enums.ExpressionEntity.RandomModule], [_enums.ExpressionEntity.LogNormVariate, _enums.ExpressionEntity.RandomModule], [_enums.ExpressionEntity.NormalVariate, _enums.ExpressionEntity.RandomModule], [_enums.ExpressionEntity.VonMisesVariate, _enums.ExpressionEntity.RandomModule], [_enums.ExpressionEntity.ParetoVariate, _enums.ExpressionEntity.RandomModule], [_enums.ExpressionEntity.WeibullVariate, _enums.ExpressionEntity.RandomModule], // Math module
[_enums.ExpressionEntity.Acos, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Acosh, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Asin, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Asinh, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Atan, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Atan2, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Atanh, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Ceil, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Comb, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.CopySign, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Cos, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Cosh, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Degrees, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Dist, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Erf, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Erfc, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Exp, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Expm1, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Fabs, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Factorial, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Floor, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Fmod, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Frexp, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Fsum, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Gamma, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Gcd, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Hypot, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.IsClose, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.IsFinite, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.IsInf, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.IsNaN, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.ISqrt, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Ldexp, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.LGamma, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Log, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Log10, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Log1P, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Log2, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Perm, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Pow, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Prod, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Radians, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Remainder, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Sin, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Sinh, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Sqrt, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Tan, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Tanh, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Trunc, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.E, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Inf, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Nan, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Pi, _enums.ExpressionEntity.MathModule], [_enums.ExpressionEntity.Tau, _enums.ExpressionEntity.MathModule], // String module entities
[_enums.ExpressionEntity.AsciiLetters, _enums.ExpressionEntity.StringModule], [_enums.ExpressionEntity.AsciiLowercase, _enums.ExpressionEntity.StringModule], [_enums.ExpressionEntity.AsciiUppercase, _enums.ExpressionEntity.StringModule], [_enums.ExpressionEntity.Digits, _enums.ExpressionEntity.StringModule], [_enums.ExpressionEntity.Hexdigits, _enums.ExpressionEntity.StringModule], [_enums.ExpressionEntity.Octdigits, _enums.ExpressionEntity.StringModule], [_enums.ExpressionEntity.Punctuation, _enums.ExpressionEntity.StringModule], [_enums.ExpressionEntity.Printable, _enums.ExpressionEntity.StringModule], [_enums.ExpressionEntity.Whitespace, _enums.ExpressionEntity.StringModule], [_enums.ExpressionEntity.Formatter, _enums.ExpressionEntity.StringModule], [_enums.ExpressionEntity.Template, _enums.ExpressionEntity.StringModule], [_enums.ExpressionEntity.Capwords, _enums.ExpressionEntity.StringModule], // Re module entities
[_enums.ExpressionEntity.Pattern, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.Match, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.ReA, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.ReASCII, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.ReDebug, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.ReI, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.ReIGNORECASE, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.ReL, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.ReLOCALE, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.ReM, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.ReMULTILINE, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.ReS, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.ReDOTALL, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.ReX, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.ReVERBOSE, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.Compile, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.Search, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.Match, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.FullMatch, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.FindAll, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.FindIter, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.Sub, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.SubN, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.Escape, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.Purge, _enums.ExpressionEntity.ReModule], [_enums.ExpressionEntity.Split, _enums.ExpressionEntity.ReModule], // Sys module
[_enums.ExpressionEntity.AddAuditHook, _enums.ExpressionEntity.Sys], // none, function
[_enums.ExpressionEntity.Audit, _enums.ExpressionEntity.Sys], // none, function
[_enums.ExpressionEntity.CallTracing, _enums.ExpressionEntity.Sys], // unknown function
[_enums.ExpressionEntity.ClearTypeCache, _enums.ExpressionEntity.Sys], // none function
[_enums.ExpressionEntity.CurrentFrames, _enums.ExpressionEntity.Sys], // dict function
[_enums.ExpressionEntity.CurrentExceptions, _enums.ExpressionEntity.Sys], // dict function
[_enums.ExpressionEntity.BreakpointHook, _enums.ExpressionEntity.Sys], // none function
[_enums.ExpressionEntity.DebugMallocStats, _enums.ExpressionEntity.Sys], // none function
[_enums.ExpressionEntity.DisplayHook, _enums.ExpressionEntity.Sys], // non function
[_enums.ExpressionEntity.ExceptHook, _enums.ExpressionEntity.Sys], // none function
[_enums.ExpressionEntity.ExcInfo, _enums.ExpressionEntity.Sys], // tuple function
[_enums.ExpressionEntity.SysExit, _enums.ExpressionEntity.Sys], // none, function
[_enums.ExpressionEntity.GetAllocatedBlocks, _enums.ExpressionEntity.Sys], // int function
[_enums.ExpressionEntity.GetAndroidApiLevel, _enums.ExpressionEntity.Sys], // int function
[_enums.ExpressionEntity.GetDefaultEncoding, _enums.ExpressionEntity.Sys], // string function
[_enums.ExpressionEntity.GetDLOpenFlags, _enums.ExpressionEntity.Sys], // int function
[_enums.ExpressionEntity.GetFileSystemEncoding, _enums.ExpressionEntity.Sys], // string function
[_enums.ExpressionEntity.GetFileSystemEncodeErrors, _enums.ExpressionEntity.Sys], // string function
[_enums.ExpressionEntity.GetRefCount, _enums.ExpressionEntity.Sys], // int function
[_enums.ExpressionEntity.GetRecursionLimit, _enums.ExpressionEntity.Sys], // int function
[_enums.ExpressionEntity.GetSizeOf, _enums.ExpressionEntity.Sys], // int function
[_enums.ExpressionEntity.GetSwitchInterval, _enums.ExpressionEntity.Sys], // float function
[_enums.ExpressionEntity.GetFrame, _enums.ExpressionEntity.Sys], // unknown function
[_enums.ExpressionEntity.GetProfile, _enums.ExpressionEntity.Sys], // none function
[_enums.ExpressionEntity.GetTrace, _enums.ExpressionEntity.Sys], // none function
[_enums.ExpressionEntity.GetWindowsVersion, _enums.ExpressionEntity.Sys], // tuple function
[_enums.ExpressionEntity.GetAsyncGenHooks, _enums.ExpressionEntity.Sys], // unknown function
[_enums.ExpressionEntity.GetCoroutineOriginTrackingDepth, _enums.ExpressionEntity.Sys], // int function
[_enums.ExpressionEntity.Intern, _enums.ExpressionEntity.Sys], // unknown function
[_enums.ExpressionEntity.IsFinalizing, _enums.ExpressionEntity.Sys], // bool function
[_enums.ExpressionEntity.SetDLOpenFlags, _enums.ExpressionEntity.Sys], // none function
[_enums.ExpressionEntity.SetProfile, _enums.ExpressionEntity.Sys], // unknown function
[_enums.ExpressionEntity.SetRecursionLimit, _enums.ExpressionEntity.Sys], // none function
[_enums.ExpressionEntity.SetSwitchInterval, _enums.ExpressionEntity.Sys], // none function
[_enums.ExpressionEntity.SetTrace, _enums.ExpressionEntity.Sys], // none function
[_enums.ExpressionEntity.SetAsyncgenHooks, _enums.ExpressionEntity.Sys], // none function
[_enums.ExpressionEntity.EnableLegacyWindowsFSEncoding, _enums.ExpressionEntity.Sys], // none function
[_enums.ExpressionEntity.ABIFlags, _enums.ExpressionEntity.Sys], // string, prop
[_enums.ExpressionEntity.Argv, _enums.ExpressionEntity.Sys], // list, prop
[_enums.ExpressionEntity.BaseExecPrefix, _enums.ExpressionEntity.Sys], // string, prop
[_enums.ExpressionEntity.BasePrefix, _enums.ExpressionEntity.Sys], // string prop
[_enums.ExpressionEntity.ByteOrder, _enums.ExpressionEntity.Sys], // string prop
[_enums.ExpressionEntity.BuiltInModuleNames, _enums.ExpressionEntity.Sys], // tuple prop
[_enums.ExpressionEntity.Copyright, _enums.ExpressionEntity.Sys], // string prop
[_enums.ExpressionEntity.DllHandle, _enums.ExpressionEntity.Sys], // int prop
[_enums.ExpressionEntity.DontWriteBytecode, _enums.ExpressionEntity.Sys], // bool prop
[_enums.ExpressionEntity.PycachePrefix, _enums.ExpressionEntity.Sys], // unknown prop
[_enums.ExpressionEntity.ExecPrefix, _enums.ExpressionEntity.Sys], // string prop
[_enums.ExpressionEntity.Executable, _enums.ExpressionEntity.Sys], // string prop
[_enums.ExpressionEntity.Flags, _enums.ExpressionEntity.Sys], // unknown prop
[_enums.ExpressionEntity.FloatInfo, _enums.ExpressionEntity.Sys], // unknown prop
[_enums.ExpressionEntity.FloatReprStyle, _enums.ExpressionEntity.Sys], // string prop
[_enums.ExpressionEntity.HashInfo, _enums.ExpressionEntity.Sys], // unknown prop
[_enums.ExpressionEntity.HexVersion, _enums.ExpressionEntity.Sys], // int prop
[_enums.ExpressionEntity.Implementation, _enums.ExpressionEntity.Sys], // unknown prop
[_enums.ExpressionEntity.IntInfo, _enums.ExpressionEntity.Sys], // unknown prop
[_enums.ExpressionEntity.LastType, _enums.ExpressionEntity.Sys], // unknown prop
[_enums.ExpressionEntity.LastValue, _enums.ExpressionEntity.Sys], // unknown prop
[_enums.ExpressionEntity.LastTraceback, _enums.ExpressionEntity.Sys], // unknown prop
[_enums.ExpressionEntity.MaxSize, _enums.ExpressionEntity.Sys], // int prop
[_enums.ExpressionEntity.MaxUnicode, _enums.ExpressionEntity.Sys], // int prop
[_enums.ExpressionEntity.MetaPath, _enums.ExpressionEntity.Sys], // list prop
[_enums.ExpressionEntity.Modules, _enums.ExpressionEntity.Sys], // dict prop
[_enums.ExpressionEntity.OrigArgv, _enums.ExpressionEntity.Sys], // list prop
[_enums.ExpressionEntity.Path, _enums.ExpressionEntity.Sys], // list prop
[_enums.ExpressionEntity.PathHooks, _enums.ExpressionEntity.Sys], // list prop
[_enums.ExpressionEntity.PathImporterCache, _enums.ExpressionEntity.Sys], // dict prop
[_enums.ExpressionEntity.Platform, _enums.ExpressionEntity.Sys], // string prop
[_enums.ExpressionEntity.Prefix, _enums.ExpressionEntity.Sys], // string prop
[_enums.ExpressionEntity.PS1, _enums.ExpressionEntity.Sys], // string prop
[_enums.ExpressionEntity.PS2, _enums.ExpressionEntity.Sys], // string prop
[_enums.ExpressionEntity.StdIn, _enums.ExpressionEntity.Sys], // unknown prop
[_enums.ExpressionEntity.StdOut, _enums.ExpressionEntity.Sys], // unknown prop
[_enums.ExpressionEntity.StdErr, _enums.ExpressionEntity.Sys], // unknown prop
[_enums.ExpressionEntity.StdLibModuleNames, _enums.ExpressionEntity.Sys], // unknown prop
[_enums.ExpressionEntity.ThreadInfo, _enums.ExpressionEntity.Sys], // unknown prop
[_enums.ExpressionEntity.TracebackLimit, _enums.ExpressionEntity.Sys], // int prop
[_enums.ExpressionEntity.Version, _enums.ExpressionEntity.Sys], // string prop
[_enums.ExpressionEntity.ApiVersion, _enums.ExpressionEntity.Sys], // int prop
[_enums.ExpressionEntity.VersionInfo, _enums.ExpressionEntity.Sys], // tuple prop
[_enums.ExpressionEntity.WarnOptions, _enums.ExpressionEntity.Sys], // list prop
[_enums.ExpressionEntity.WinVer, _enums.ExpressionEntity.Sys], // int prop
[_enums.ExpressionEntity.XOptions, _enums.ExpressionEntity.Sys] // dict prop
]); // Used for function / methods that have same name as a keyword / identifier

exports.moduleLookup = moduleLookup;
var specialCaseLookup = {
  "assert": {
    entity: _enums.ExpressionEntity.AssertFunction,
    category: _enums.ExpressionCategory.BuiltInFunctions
  },
  "random": {
    entity: _enums.ExpressionEntity.RandomMethod,
    category: _enums.ExpressionCategory.BuiltInMethods
  },
  "exit": {
    entity: _enums.ExpressionEntity.SysExit,
    category: _enums.ExpressionCategory.ModuleFunctions
  }
};
exports.specialCaseLookup = specialCaseLookup;
var validMethodLookup = new Map([[_enums.DataType.String, new Set([_enums.ExpressionEntity.Capitalize, _enums.ExpressionEntity.Casefold, _enums.ExpressionEntity.Center, _enums.ExpressionEntity.Count, _enums.ExpressionEntity.Encode, _enums.ExpressionEntity.ExpandTabs, _enums.ExpressionEntity.Find, _enums.ExpressionEntity.Format, _enums.ExpressionEntity.Index, _enums.ExpressionEntity.IsAlnum, _enums.ExpressionEntity.IsAlpha, _enums.ExpressionEntity.IsAscii, _enums.ExpressionEntity.IsDecimal, _enums.ExpressionEntity.IsDigit, _enums.ExpressionEntity.IsIdentifier, _enums.ExpressionEntity.IsLower, _enums.ExpressionEntity.IsNumeric, _enums.ExpressionEntity.IsPrintable, _enums.ExpressionEntity.IsSpace, _enums.ExpressionEntity.IsTitle, _enums.ExpressionEntity.IsUpper, _enums.ExpressionEntity.Join, _enums.ExpressionEntity.LJust, _enums.ExpressionEntity.Lower, _enums.ExpressionEntity.LStrip, _enums.ExpressionEntity.MakeTrans, _enums.ExpressionEntity.Partition, _enums.ExpressionEntity.Replace, _enums.ExpressionEntity.RFind, _enums.ExpressionEntity.RIndex, _enums.ExpressionEntity.RJust, _enums.ExpressionEntity.RPartition, _enums.ExpressionEntity.RSplit, _enums.ExpressionEntity.RStrip, _enums.ExpressionEntity.Split, _enums.ExpressionEntity.SplitLines, _enums.ExpressionEntity.StartsWith, _enums.ExpressionEntity.Strip, _enums.ExpressionEntity.SwapCase, _enums.ExpressionEntity.Title, _enums.ExpressionEntity.Translate, _enums.ExpressionEntity.Upper, _enums.ExpressionEntity.ZFill])], [_enums.DataType.List, new Set([_enums.ExpressionEntity.Append, _enums.ExpressionEntity.Clear, _enums.ExpressionEntity.Copy, _enums.ExpressionEntity.Count, _enums.ExpressionEntity.Extend, _enums.ExpressionEntity.Index, _enums.ExpressionEntity.Insert, _enums.ExpressionEntity.Pop, _enums.ExpressionEntity.Remove, _enums.ExpressionEntity.Reverse, _enums.ExpressionEntity.Sort, _enums.ExpressionCategory.MagicMethods])], [_enums.DataType.Tuple, new Set([_enums.ExpressionEntity.Count, _enums.ExpressionEntity.Index])], [_enums.DataType.Set, new Set([_enums.ExpressionEntity.Add, _enums.ExpressionEntity.Clear, _enums.ExpressionEntity.Copy, _enums.ExpressionEntity.Difference, _enums.ExpressionEntity.DifferenceUpdate, _enums.ExpressionEntity.Discard, _enums.ExpressionEntity.Intersection, _enums.ExpressionEntity.IntersectionUpdate, _enums.ExpressionEntity.IsDisjoint, _enums.ExpressionEntity.IsSubset, _enums.ExpressionEntity.IsSuperset, _enums.ExpressionEntity.Pop, _enums.ExpressionEntity.Remove, _enums.ExpressionEntity.SymmetricDifference, _enums.ExpressionEntity.SymmetricDifferenceUpdate, _enums.ExpressionEntity.Union, _enums.ExpressionEntity.Update])], [_enums.DataType.Dict, new Set([_enums.ExpressionEntity.Clear, _enums.ExpressionEntity.Copy, _enums.ExpressionEntity.FromKeys, _enums.ExpressionEntity.Get, _enums.ExpressionEntity.Items, _enums.ExpressionEntity.Keys, _enums.ExpressionEntity.Pop, _enums.ExpressionEntity.PopItem, _enums.ExpressionEntity.SetDefault, _enums.ExpressionEntity.Update, _enums.ExpressionEntity.Values])], [_enums.DataType.File, new Set([_enums.ExpressionEntity.Close, _enums.ExpressionEntity.FileNo, _enums.ExpressionEntity.Flush, _enums.ExpressionEntity.IsAtty, _enums.ExpressionEntity.Read, _enums.ExpressionEntity.Readable, _enums.ExpressionEntity.ReadLine, _enums.ExpressionEntity.ReadLines, _enums.ExpressionEntity.Seek, _enums.ExpressionEntity.Seekable, _enums.ExpressionEntity.Tell, _enums.ExpressionEntity.Truncate, _enums.ExpressionEntity.Writable, _enums.ExpressionEntity.Write, _enums.ExpressionEntity.WriteLines])], [_enums.DataType.Random, new Set([_enums.ExpressionEntity.Seed, _enums.ExpressionEntity.GetState, _enums.ExpressionEntity.SetState, _enums.ExpressionEntity.GetRandBits, _enums.ExpressionEntity.RandRange, _enums.ExpressionEntity.RandInt, _enums.ExpressionEntity.Choice, _enums.ExpressionEntity.Choices, _enums.ExpressionEntity.Shuffle, _enums.ExpressionEntity.Sample, _enums.ExpressionEntity.RandomMethod, _enums.ExpressionEntity.Uniform, _enums.ExpressionEntity.Triangular, _enums.ExpressionEntity.BetaVariate, _enums.ExpressionEntity.ExpoVariate, _enums.ExpressionEntity.GammaVariate, _enums.ExpressionEntity.Gauss, _enums.ExpressionEntity.LogNormVariate, _enums.ExpressionEntity.NormalVariate, _enums.ExpressionEntity.VonMisesVariate, _enums.ExpressionEntity.ParetoVariate, _enums.ExpressionEntity.WeibullVariate, _enums.ExpressionCategory.MagicMethods])], [_enums.DataType.Math, new Set([_enums.ExpressionEntity.Acos, _enums.ExpressionEntity.Acosh, _enums.ExpressionEntity.Asin, _enums.ExpressionEntity.Asinh, _enums.ExpressionEntity.Atan, _enums.ExpressionEntity.Atan2, _enums.ExpressionEntity.Atanh, _enums.ExpressionEntity.Ceil, _enums.ExpressionEntity.Comb, _enums.ExpressionEntity.CopySign, _enums.ExpressionEntity.Cos, _enums.ExpressionEntity.Cosh, _enums.ExpressionEntity.Degrees, _enums.ExpressionEntity.Dist, _enums.ExpressionEntity.Erf, _enums.ExpressionEntity.Erfc, _enums.ExpressionEntity.Exp, _enums.ExpressionEntity.Expm1, _enums.ExpressionEntity.Fabs, _enums.ExpressionEntity.Factorial, _enums.ExpressionEntity.Floor, _enums.ExpressionEntity.Fmod, _enums.ExpressionEntity.Frexp, _enums.ExpressionEntity.Fsum, _enums.ExpressionEntity.Gamma, _enums.ExpressionEntity.Gcd, _enums.ExpressionEntity.Hypot, _enums.ExpressionEntity.IsClose, _enums.ExpressionEntity.IsFinite, _enums.ExpressionEntity.IsInf, _enums.ExpressionEntity.IsNaN, _enums.ExpressionEntity.ISqrt, _enums.ExpressionEntity.Ldexp, _enums.ExpressionEntity.LGamma, _enums.ExpressionEntity.Log, _enums.ExpressionEntity.Log10, _enums.ExpressionEntity.Log1P, _enums.ExpressionEntity.Log2, _enums.ExpressionEntity.Perm, _enums.ExpressionEntity.Pow, _enums.ExpressionEntity.Prod, _enums.ExpressionEntity.Radians, _enums.ExpressionEntity.Remainder, _enums.ExpressionEntity.Sin, _enums.ExpressionEntity.Sinh, _enums.ExpressionEntity.Sqrt, _enums.ExpressionEntity.Tan, _enums.ExpressionEntity.Tanh, _enums.ExpressionEntity.Trunc])], [_enums.DataType.StringModule, new Set([_enums.ExpressionEntity.Formatter, _enums.ExpressionEntity.Template, _enums.ExpressionEntity.Capwords])], [_enums.DataType.Re, new Set([_enums.ExpressionEntity.Compile, _enums.ExpressionEntity.Search, _enums.ExpressionEntity.Match, _enums.ExpressionEntity.FullMatch, _enums.ExpressionEntity.FindAll, _enums.ExpressionEntity.FindIter, _enums.ExpressionEntity.Sub, _enums.ExpressionEntity.SubN, _enums.ExpressionEntity.Escape, _enums.ExpressionEntity.Purge, _enums.ExpressionEntity.Split])], [_enums.DataType.Sys, new Set([_enums.ExpressionEntity.AddAuditHook, _enums.ExpressionEntity.Audit, _enums.ExpressionEntity.CallTracing, _enums.ExpressionEntity.ClearTypeCache, _enums.ExpressionEntity.CurrentFrames, _enums.ExpressionEntity.CurrentExceptions, _enums.ExpressionEntity.BreakpointHook, _enums.ExpressionEntity.DebugMallocStats, _enums.ExpressionEntity.DisplayHook, _enums.ExpressionEntity.ExceptHook, _enums.ExpressionEntity.ExcInfo, _enums.ExpressionEntity.SysExit, _enums.ExpressionEntity.GetAllocatedBlocks, _enums.ExpressionEntity.GetAndroidApiLevel, _enums.ExpressionEntity.GetDefaultEncoding, _enums.ExpressionEntity.GetDLOpenFlags, _enums.ExpressionEntity.GetFileSystemEncoding, _enums.ExpressionEntity.GetFileSystemEncodeErrors, _enums.ExpressionEntity.GetRefCount, _enums.ExpressionEntity.GetRecursionLimit, _enums.ExpressionEntity.GetSizeOf, _enums.ExpressionEntity.GetSwitchInterval, _enums.ExpressionEntity.GetFrame, _enums.ExpressionEntity.GetProfile, _enums.ExpressionEntity.GetTrace, _enums.ExpressionEntity.GetWindowsVersion, _enums.ExpressionEntity.GetAsyncGenHooks, _enums.ExpressionEntity.GetCoroutineOriginTrackingDepth, _enums.ExpressionEntity.Intern, _enums.ExpressionEntity.IsFinalizing, _enums.ExpressionEntity.SetDLOpenFlags, _enums.ExpressionEntity.SetProfile, _enums.ExpressionEntity.SetRecursionLimit, _enums.ExpressionEntity.SetSwitchInterval, _enums.ExpressionEntity.SetTrace, _enums.ExpressionEntity.SetAsyncgenHooks, _enums.ExpressionEntity.EnableLegacyWindowsFSEncoding])]]); //#endregion - lookups

exports.validMethodLookup = validMethodLookup;
},{"../doc-model/enums.js":4,"./constants.js":13}],15:[function(require,module,exports){
(function (global){(function (){
const SIDElib=require("./dist/index.js");global.window.misconceptionInfo=SIDElib.misconceptionInfo,global.window.symptomInfo=SIDElib.symptomInfo,global.window.parse=SIDElib.parse;

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./dist/index.js":10}]},{},[15]);
