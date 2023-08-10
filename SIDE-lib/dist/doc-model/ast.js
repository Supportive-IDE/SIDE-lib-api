"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VariableExpression = exports.UserDefinedMethodExpression = exports.UserDefinedMethodCall = exports.UserDefinedFunctionExpression = exports.UserDefinedFunctionCall = exports.TernaryExpression = exports.SubscriptedElement = exports.StringLiteralExpression = exports.SliceElement = exports.ReturnStatement = exports.PropertyExpression = exports.PropertyCallNode = exports.NumberLiteral = exports.MultiPartExpressionNode = exports.ModuleExpression = exports.MethodDefinitionStatement = exports.ListComprehensionExpression = exports.LambdaExpression = exports.KeywordStatement = exports.KeywordOrOperatorExpression = exports.IteratorExpression = exports.IndexKeyElement = exports.ImportStatement = exports.GroupElement = exports.FunctionNode = exports.FunctionDefinitionStatement = exports.FStringExpression = exports.ExpressionNode = exports.ExceptionCall = exports.CompoundTypeExpression = exports.ComparisonExpression = exports.CombinedStringLiteral = exports.ClassNode = exports.ClassDefinitionStatement = exports.ChangeExpression = exports.CalculatedExpression = exports.BuiltInMethodCall = exports.BuiltInFunctionExpression = exports.BuiltInFunctionCall = exports.BooleanExpression = exports.BlockDefinitionStatement = exports.AssignmentExpression = void 0;
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
      return new UserDefinedFunctionExpression(textValue, expressionInfo.entity, expressionInfo.category, startLineNumber, documentStartIndex, indexOnLine);

    case _enums.ExpressionEntity.MethodName:
      return new UserDefinedMethodExpression(textValue, expressionInfo.entity, expressionInfo.category, startLineNumber, documentStartIndex, indexOnLine);

    case _enums.ExpressionEntity.ClassName:
      return new UserDefinedClassExpression(textValue, expressionInfo.entity, expressionInfo.category, startLineNumber, documentStartIndex, indexOnLine);

    case _enums.ExpressionEntity.PropertyName:
      return new PropertyExpression(textValue, expressionInfo.entity, expressionInfo.category, startLineNumber, documentStartIndex, indexOnLine);

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
      return new PropertyExpression(textValue, expressionInfo.entity, expressionInfo.category, startLineNumber, documentStartIndex, indexOnLine);

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
      return new PropertyExpression(textValue, expressionInfo.entity, expressionInfo.category, startLineNumber, documentStartIndex, indexOnLine);

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
      if (_classPrivateFieldGet(this, _blockId) !== id) _classPrivateFieldSet(this, _blockId, id);
    }
  }, {
    key: "getBlockId",
    value: function getBlockId() {
      if (_classPrivateFieldGet(this, _blockId) === "unknown" && _classPrivateFieldGet(this, _parent) !== undefined) {
        return _classPrivateFieldGet(this, _parent).getBlockId();
      }

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
     * Gets the context of use... the parent expression
     * @returns {string}
     */

  }, {
    key: "getContextOfUse",
    value: function getContextOfUse() {
      if (_classPrivateFieldGet(this, _parent) === undefined) {
        return "none";
      } else {
        return _classPrivateFieldGet(this, _parent).getEntity().name;
      }
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
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        entity: _classPrivateFieldGet(this, _entity).name,
        category: _classPrivateFieldGet(this, _category).name,
        textValue: _classPrivateFieldGet(this, _textValue),
        dataType: _classPrivateFieldGet(this, _dataType).name,
        lineNumber: _classPrivateFieldGet(this, _startLineNumber),
        docIndex: _classPrivateFieldGet(this, _documentStartIndex)
      };
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
    key: "checkForConstructs",
    value: function checkForConstructs(obj) {
      _get(_getPrototypeOf(MultiPartExpressionNode.prototype), "checkForConstructs", this).call(this, this);

      var _iterator7 = _createForOfIteratorHelper(this.getChildren()),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var c = _step7.value;
          c.checkForConstructs(c);
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
    key: "setBlockId",
    value: function setBlockId(id) {
      _get(_getPrototypeOf(MultiPartExpressionNode.prototype), "setBlockId", this).call(this, id); // Multipart...should work for all or are children lost?


      var _iterator8 = _createForOfIteratorHelper(this.getChildren()),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var exp = _step8.value;
          exp.setBlockId(id);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }
    /**
     * @override
     */

  }, {
    key: "setScopeId",
    value: function setScopeId(id) {
      _get(_getPrototypeOf(MultiPartExpressionNode.prototype), "setScopeId", this).call(this, id);

      var _iterator9 = _createForOfIteratorHelper(this.getChildren()),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var exp = _step9.value;
          exp.setScopeId(id);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
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
  var _iterator94 = _createForOfIteratorHelper(expressions),
      _step94;

  try {
    for (_iterator94.s(); !(_step94 = _iterator94.n()).done;) {
      var e = _step94.value;
      e.setParent(this);
    }
  } catch (err) {
    _iterator94.e(err);
  } finally {
    _iterator94.f();
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

      var _iterator10 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _parameters)),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var param = _step10.value;

          var _iterator11 = _createForOfIteratorHelper(param),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var item = _step11.value;

              if (item.is(_enums.ExpressionEntity.VariableName)) {
                variables.push(item);
              } else {
                variables = variables.concat(item.getVariableExpressions());
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

      var _iterator12 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _parameters)),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var c = _step12.value;

          var _iterator13 = _createForOfIteratorHelper(c),
              _step13;

          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var item = _step13.value;

              if (item.is(entity)) {
                matches.push(item);
              } else matches = matches.concat(item.getExpressionsOfKind(entity));
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
        var _iterator14 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _parameters)),
            _step14;

        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var c = _step14.value;

            if (c.isOneOf(entities)) {
              return c;
            } else {
              match = c.getFirstExpressionOf(entities);
              if (match !== undefined) return match;
            }
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
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

      var _iterator15 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _parameters)),
          _step15;

      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var p = _step15.value;

          var _iterator16 = _createForOfIteratorHelper(p),
              _step16;

          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var item = _step16.value;
              item.checkForSymptoms();
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
    /**
     * @override
     */
    // setBlockId(id) {
    //     super.setBlockId(id); // CallableDefinitionStatement
    //     /*for (const exp of this.getChildren()) {
    //         exp.setBlockId(id);
    //     }*/
    //     /*for (const item of this.#parameters) {
    //         for (const p of item)
    //             p.setBlockId(id);
    //     }*/
    // }
    //#endregion - overrides

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

    var _iterator95 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _parameters)[i]),
        _step95;

    try {
      for (_iterator95.s(); !(_step95 = _iterator95.n()).done;) {
        var p = _step95.value;

        if (p.is(_enums.ExpressionEntity.VariableName)) {
          p.setDataType(_enums.DataType.Unknown);
          p.setAssignedOrChanged();
          p.setIsParameter();
        } else if (p.is(_enums.ExpressionEntity.AssignmentStatement)) {
          var _this$numOptional, _this$numOptional2;

          var optional = p.getVariableExpressions();
          _classPrivateFieldSet(this, _numOptional, (_this$numOptional = _classPrivateFieldGet(this, _numOptional), _this$numOptional2 = _this$numOptional++, _this$numOptional)), _this$numOptional2;

          var _iterator96 = _createForOfIteratorHelper(optional),
              _step96;

          try {
            for (_iterator96.s(); !(_step96 = _iterator96.n()).done;) {
              var o = _step96.value;
              o.setDataType(_enums.DataType.Unknown);
              o.setAssignedOrChanged();
              o.setIsParameter();
            }
          } catch (err) {
            _iterator96.e(err);
          } finally {
            _iterator96.f();
          }
        }
      }
    } catch (err) {
      _iterator95.e(err);
    } finally {
      _iterator95.f();
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
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(FunctionDefinitionStatement.prototype), "toJSON", this).call(this);

      ret.functionName = this.getFunctionNameExpression().getTextValue();
      ret.parameters = this.getParameters().map(function (pComponents) {
        return pComponents.map(function (p) {
          return p.toJSON();
        });
      });
      return ret;
    } //#endregion - extension

  }]);

  return FunctionDefinitionStatement;
}(CallableDefinitionStatement);

exports.FunctionDefinitionStatement = FunctionDefinitionStatement;

var _classVar = /*#__PURE__*/new WeakMap();

var MethodDefinitionStatement = /*#__PURE__*/function (_CallableDefinitionSt2) {
  _inherits(MethodDefinitionStatement, _CallableDefinitionSt2);

  var _super5 = _createSuper(MethodDefinitionStatement);

  /** @type {VariableExpression | undefined} */

  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function MethodDefinitionStatement(textValue, children) {
    var _thisSuper, _this4;

    _classCallCheck(this, MethodDefinitionStatement);

    _this4 = _super5.call(this, textValue, children, _enums.ExpressionEntity.MethodDefinitionStatement, _enums.ExpressionCategory.BlockDefinitionStatement, _enums.DataType.NA);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this4), _classVar, {
      writable: true,
      value: void 0
    });

    var params = _get((_thisSuper = _assertThisInitialized(_this4), _getPrototypeOf(MethodDefinitionStatement.prototype)), "getParameters", _thisSuper).call(_thisSuper);

    if (params.length > 0) {
      _classPrivateFieldSet(_assertThisInitialized(_this4), _classVar, params[0][0]);
    }

    return _this4;
  } //#region - overrides

  /**
   * @inheritdoc
   */


  _createClass(MethodDefinitionStatement, [{
    key: "isComplete",
    value: function isComplete() {
      return _get(_getPrototypeOf(MethodDefinitionStatement.prototype), "isComplete", this).call(this) && this.getChildren()[1].is(_enums.ExpressionEntity.MethodName);
    } //#endregion - overrides
    //#region - extension

    /**
     * Gets the expression that contains the method name
     * @returns {UserDefinedMethodExpression}
     */

  }, {
    key: "getMethodNameExpression",
    value: function getMethodNameExpression() {
      return this.getChildren()[1];
    }
  }, {
    key: "getParameters",
    value: function getParameters() {
      return _get(_getPrototypeOf(MethodDefinitionStatement.prototype), "getParameters", this).call(this).slice(1);
    }
    /**
     * Gets the class variable (i.e. self) defined in the method definition
     * @returns { VariableExpression | undefined}
     */

  }, {
    key: "getClassVar",
    value: function getClassVar() {
      return _classPrivateFieldGet(this, _classVar);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(MethodDefinitionStatement.prototype), "toJSON", this).call(this);

      ret.methodName = this.getMethodNameExpression().getTextValue();
      ret.parameters = this.getParameters().map(function (pComponents) {
        return pComponents.map(function (p) {
          return p.toJSON();
        });
      });
      return ret;
    } //#endregion - extension

  }]);

  return MethodDefinitionStatement;
}(CallableDefinitionStatement);

exports.MethodDefinitionStatement = MethodDefinitionStatement;

var ClassDefinitionStatement = /*#__PURE__*/function (_MultiPartExpressionN2) {
  _inherits(ClassDefinitionStatement, _MultiPartExpressionN2);

  var _super6 = _createSuper(ClassDefinitionStatement);

  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function ClassDefinitionStatement(textValue, children) {
    _classCallCheck(this, ClassDefinitionStatement);

    return _super6.call(this, textValue, children, _enums.ExpressionEntity.ClassDefinitionStatement, _enums.ExpressionCategory.BlockDefinitionStatement, children.length >= 2 && children[1].is(_enums.ExpressionEntity.ClassName) ? _enums.DataType.createCustomType(children[1].getTextValue()) : _enums.DataType.Class);
  } //#region - overrides

  /**
   * @inheritdoc
   */


  _createClass(ClassDefinitionStatement, [{
    key: "isComplete",
    value: function isComplete() {
      return _get(_getPrototypeOf(ClassDefinitionStatement.prototype), "isComplete", this).call(this) && this.getChildren()[1].is(_enums.ExpressionEntity.ClassName);
    } //#endregion - overrides
    //#region - extension

    /**
     * Gets the expression that contains the class name
     * @returns {ClassNode}
     */

  }, {
    key: "getClassNameExpression",
    value: function getClassNameExpression() {
      return this.getChildren()[1];
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(ClassDefinitionStatement.prototype), "toJSON", this).call(this);

      ret.className = this.getClassNameExpression().getTextValue();
      return ret;
    } //#endregion - extension

  }]);

  return ClassDefinitionStatement;
}(MultiPartExpressionNode); // TODO: MethodDefinitionStatement


exports.ClassDefinitionStatement = ClassDefinitionStatement;

var _arguments = /*#__PURE__*/new WeakMap();

var _setArgsParent = /*#__PURE__*/new WeakSet();

var _checkAndUpdateDataType = /*#__PURE__*/new WeakSet();

var _checkUnusedReturn = /*#__PURE__*/new WeakSet();

var _checkPassesNone = /*#__PURE__*/new WeakSet();

var FunctionCallNode = /*#__PURE__*/function (_MultiPartExpressionN3) {
  _inherits(FunctionCallNode, _MultiPartExpressionN3);

  var _super7 = _createSuper(FunctionCallNode);

  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionEntity} entity AUTO FILL The entity that describes the MultiPartExpression
   * @param {ExpressionCategory} category AUTOFILL The category that describes the MultiPartExpression
   * @throws Throws an error if the list of children is empty
   */
  function FunctionCallNode(textValue, children, entity, category) {
    var _this5;

    _classCallCheck(this, FunctionCallNode);

    _this5 = _super7.call(this, textValue, children, entity, category);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this5), _checkPassesNone);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this5), _checkUnusedReturn);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this5), _checkAndUpdateDataType);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this5), _setArgsParent);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this5), _arguments, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this5), _checkAndUpdateDataType, _checkAndUpdateDataType2).call(_assertThisInitialized(_this5));

    if (_this5.isComplete()) {
      var firstParamIndex = 2;
      var lastParamIndex = children.length - 2;

      if (lastParamIndex < firstParamIndex) {
        _classPrivateFieldSet(_assertThisInitialized(_this5), _arguments, []); // no args

      } else {
        var paramSegment = children.slice(firstParamIndex, lastParamIndex + 1);

        _classPrivateFieldSet(_assertThisInitialized(_this5), _arguments, _rawtextprocessing.StatementProcessor.checkForListComp(paramSegment)); // iterate and convert to tree


        for (var i = 0; i < _classPrivateFieldGet(_assertThisInitialized(_this5), _arguments).length; i++) {
          if (_classPrivateFieldGet(_assertThisInitialized(_this5), _arguments)[i].length > 1) {
            _classPrivateFieldGet(_assertThisInitialized(_this5), _arguments)[i] = _rawtextprocessing.StatementProcessor.createTree(_classPrivateFieldGet(_assertThisInitialized(_this5), _arguments)[i]);
          }
        }
      }
    } else _classPrivateFieldSet(_assertThisInitialized(_this5), _arguments, []);

    _classPrivateMethodGet(_assertThisInitialized(_this5), _setArgsParent, _setArgsParent2).call(_assertThisInitialized(_this5));

    _this5.addRules([_classPrivateMethodGet(_assertThisInitialized(_this5), _checkPassesNone, _checkPassesNone2), _classPrivateMethodGet(_assertThisInitialized(_this5), _checkUnusedReturn, _checkUnusedReturn2)]);

    return _this5;
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

      var _iterator17 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _arguments)),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var arg = _step17.value;

          var _iterator18 = _createForOfIteratorHelper(arg),
              _step18;

          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var item = _step18.value;

              if (item.is(_enums.ExpressionEntity.VariableName)) {
                variables.push(item);
              } else {
                variables = variables.concat(item.getVariableExpressions());
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

      var _iterator19 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _arguments)),
          _step19;

      try {
        for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
          var c = _step19.value;

          var _iterator20 = _createForOfIteratorHelper(c),
              _step20;

          try {
            for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
              var item = _step20.value;

              if (item.is(entity)) {
                matches.push(item);
              } else {
                matches = matches.concat(item.getExpressionsOfKind(entity));
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
        var _iterator21 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _arguments)),
            _step21;

        try {
          for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
            var c = _step21.value;

            if (c.isOneOf(entities)) {
              return c;
            } else {
              match = c.getFirstExpressionOf(entities);
              if (match !== undefined) return match;
            }
          }
        } catch (err) {
          _iterator21.e(err);
        } finally {
          _iterator21.f();
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

      var _iterator22 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _arguments)),
          _step22;

      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var a = _step22.value;

          var _iterator23 = _createForOfIteratorHelper(a),
              _step23;

          try {
            for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
              var item = _step23.value;
              item.checkForSymptoms();
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
    // setBlockId(id) {
    //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
    //     /*for (const exp of this.getChildren()) {
    //         exp.setBlockId(id);
    //     }*/
    //     /*for (const item of this.#arguments) {
    //         for (const a of item) {
    //             a.setBlockId(id);
    //         }
    //     }*/
    // }

  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(FunctionCallNode.prototype), "toJSON", this).call(this);

      ret.functionName = this.getFunctionName();
      ret.arguments = this.getArguments().map(function (aComponents) {
        return aComponents.map(function (a) {
          return a.toJSON();
        });
      });
      return ret;
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
  var _iterator97 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _arguments)),
      _step97;

  try {
    for (_iterator97.s(); !(_step97 = _iterator97.n()).done;) {
      var a = _step97.value;

      var _iterator98 = _createForOfIteratorHelper(a),
          _step98;

      try {
        for (_iterator98.s(); !(_step98 = _iterator98.n()).done;) {
          var part = _step98.value;
          part.setParent(this);
        }
      } catch (err) {
        _iterator98.e(err);
      } finally {
        _iterator98.f();
      }
    }
  } catch (err) {
    _iterator97.e(err);
  } finally {
    _iterator97.f();
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

  var _iterator99 = _createForOfIteratorHelper(values),
      _step99;

  try {
    for (_iterator99.s(); !(_step99 = _iterator99.n()).done;) {
      var arg = _step99.value;
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
    _iterator99.e(err);
  } finally {
    _iterator99.f();
  }

  return symptoms;
}

var _checkUnnecessaryTypeConversion = /*#__PURE__*/new WeakSet();

var BuiltInFunctionCall = /*#__PURE__*/function (_FunctionCallNode) {
  _inherits(BuiltInFunctionCall, _FunctionCallNode);

  var _super8 = _createSuper(BuiltInFunctionCall);

  /**
   * Creates a new BuiltInFunctionCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function BuiltInFunctionCall(textValue, _children2) {
    var _this6;

    _classCallCheck(this, BuiltInFunctionCall);

    _this6 = _super8.call(this, textValue, _children2, _enums.ExpressionEntity.BuiltInFunctionCall, _enums.ExpressionCategory.FunctionCall);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this6), _checkUnnecessaryTypeConversion);

    if (_children2.length > 0 && _children2[0].isOneOf([_enums.ExpressionEntity.StrFunction, _enums.ExpressionEntity.IntFunction, _enums.ExpressionEntity.FloatFunction, _enums.ExpressionEntity.BoolFunction, _enums.ExpressionEntity.ListFunction, _enums.ExpressionEntity.TupleFunction, _enums.ExpressionEntity.SetFunction, _enums.ExpressionEntity.DictFunction])) {
      _this6.addRule(_classPrivateMethodGet(_assertThisInitialized(_this6), _checkUnnecessaryTypeConversion, _checkUnnecessaryTypeConversion2));
    }

    return _this6;
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
      functionExpression.setDataType(userDefinedFunction.getReturnType()); // Add user defined function methods

      functionExpression.addReturns = function (statement) {
        var addProxy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return userDefinedFunction.addReturns(statement, addProxy);
      };

      functionExpression.getReturnType = function () {
        return userDefinedFunction.getReturnType();
      };

      functionExpression.getReturnStatements = function () {
        return userDefinedFunction.getReturnStatements();
      };
      /*const children = this.getChildren();
      children[0] = userDefinedFunction;
      const udf = new UserDefinedFunctionCall(this.getTextValue(), children);
      udf.setDataType(userDefinedFunction.getReturnType());
      return udf;*/

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

  var _super9 = _createSuper(UserDefinedFunctionCall);

  /**
   * Creates a new UserDefinedFunctionCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function UserDefinedFunctionCall(textValue, children) {
    _classCallCheck(this, UserDefinedFunctionCall);

    return _super9.call(this, textValue, children, _enums.ExpressionEntity.UserDefinedFunctionCall, _enums.ExpressionCategory.FunctionCall);
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

var ExceptionCall = /*#__PURE__*/function (_MultiPartExpressionN4) {
  _inherits(ExceptionCall, _MultiPartExpressionN4);

  var _super10 = _createSuper(ExceptionCall);

  /**
   * Creates a new ExceptionCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function ExceptionCall(textValue, children) {
    _classCallCheck(this, ExceptionCall);

    return _super10.call(this, textValue, children, _enums.ExpressionEntity.ExceptionCall, _enums.ExpressionCategory.ExceptionCall, _enums.DataType.Exception);
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

var MethodCallNode = /*#__PURE__*/function (_MultiPartExpressionN5) {
  _inherits(MethodCallNode, _MultiPartExpressionN5);

  var _super11 = _createSuper(MethodCallNode);

  /**
   * Creates a new MethodCallNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionEntity} entity AUTO FILL The entity that describes the MultiPartExpression
   * @param {ExpressionCategory} category AUTOFILL The category that describes the MultiPartExpression
   * @throws Throws an error if the list of children is empty
   */
  function MethodCallNode(textValue, children, entity, category) {
    var _this7;

    _classCallCheck(this, MethodCallNode);

    _this7 = _super11.call(this, textValue, children, entity, category);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this7), _checkPassesNone3);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this7), _checkUnusedReturn3);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this7), _checkAndUpdateDataType3);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this7), _setArgsParent3);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this7), _arguments2, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this7), _checkAndUpdateDataType3, _checkAndUpdateDataType4).call(_assertThisInitialized(_this7));

    if (_this7.isComplete()) {
      var firstParamIndex = 4;
      var lastParamIndex = children.length - 2;

      if (lastParamIndex < firstParamIndex) {
        _classPrivateFieldSet(_assertThisInitialized(_this7), _arguments2, []); // no args

      } else {
        var paramSegment = children.slice(firstParamIndex, lastParamIndex + 1);

        _classPrivateFieldSet(_assertThisInitialized(_this7), _arguments2, _rawtextprocessing.StatementProcessor.checkForListComp(paramSegment));

        for (var i = 0; i < _classPrivateFieldGet(_assertThisInitialized(_this7), _arguments2).length; i++) {
          if (_classPrivateFieldGet(_assertThisInitialized(_this7), _arguments2)[i].length > 1) {
            _classPrivateFieldGet(_assertThisInitialized(_this7), _arguments2)[i] = _rawtextprocessing.StatementProcessor.createTree(_classPrivateFieldGet(_assertThisInitialized(_this7), _arguments2)[i]);
          }
        }
      }
    } else _classPrivateFieldSet(_assertThisInitialized(_this7), _arguments2, []);

    _classPrivateMethodGet(_assertThisInitialized(_this7), _setArgsParent3, _setArgsParent4).call(_assertThisInitialized(_this7));

    _this7.addRules([_classPrivateMethodGet(_assertThisInitialized(_this7), _checkPassesNone3, _checkPassesNone4), _classPrivateMethodGet(_assertThisInitialized(_this7), _checkUnusedReturn3, _checkUnusedReturn4)]);

    return _this7;
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

      var _iterator24 = _createForOfIteratorHelper(this.getChildren()),
          _step24;

      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var child = _step24.value;

          if (child.is(_enums.ExpressionEntity.Dot)) {
            break;
          } else if (child.is(_enums.ExpressionEntity.VariableName)) {
            variables.push(child);
          } else {
            variables = variables.concat(child.getVariableExpressions());
          }
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }

      var _iterator25 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _arguments2)),
          _step25;

      try {
        for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
          var arg = _step25.value;

          var _iterator26 = _createForOfIteratorHelper(arg),
              _step26;

          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
              var item = _step26.value;

              if (item.is(_enums.ExpressionEntity.VariableName)) {
                variables.push(item);
              } else {
                variables = variables.concat(item.getVariableExpressions());
              }
            }
          } catch (err) {
            _iterator26.e(err);
          } finally {
            _iterator26.f();
          }
        }
      } catch (err) {
        _iterator25.e(err);
      } finally {
        _iterator25.f();
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

      var _iterator27 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _arguments2)),
          _step27;

      try {
        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
          var c = _step27.value;

          var _iterator28 = _createForOfIteratorHelper(c),
              _step28;

          try {
            for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
              var item = _step28.value;

              if (item.is(entity)) {
                matches.push(item);
              } else {
                matches = matches.concat(item.getExpressionsOfKind(entity));
              }
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
        var _iterator29 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _arguments2)),
            _step29;

        try {
          for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
            var c = _step29.value;

            if (c.isOneOf(entities)) {
              return c;
            } else {
              match = c.getFirstExpressionOf(entities);
              if (match !== undefined) return match;
            }
          }
        } catch (err) {
          _iterator29.e(err);
        } finally {
          _iterator29.f();
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

      var _iterator30 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _arguments2)),
          _step30;

      try {
        for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
          var a = _step30.value;

          var _iterator31 = _createForOfIteratorHelper(a),
              _step31;

          try {
            for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
              var item = _step31.value;
              item.checkForSymptoms();
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
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(MethodCallNode.prototype), "toJSON", this).call(this);

      ret.methodName = this.getMethodName();
      ret.arguments = this.getArguments().map(function (aComponents) {
        return aComponents.map(function (a) {
          return a.toJSON();
        });
      });
      ret.object = this.getObject().toJSON();
      return ret;
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
    // setBlockId(id) {
    //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
    //     /*for (const exp of this.getChildren()) {
    //         exp.setBlockId(id);
    //     }*/
    //     /*for (const item of this.#arguments) {
    //         for (const a of item) {
    //             a.setBlockId(id);
    //         }
    //     }*/
    // }

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
  var _iterator100 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _arguments2)),
      _step100;

  try {
    for (_iterator100.s(); !(_step100 = _iterator100.n()).done;) {
      var a = _step100.value;

      var _iterator101 = _createForOfIteratorHelper(a),
          _step101;

      try {
        for (_iterator101.s(); !(_step101 = _iterator101.n()).done;) {
          var part = _step101.value;
          part.setParent(this);
        }
      } catch (err) {
        _iterator101.e(err);
      } finally {
        _iterator101.f();
      }
    }
  } catch (err) {
    _iterator100.e(err);
  } finally {
    _iterator100.f();
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

  var _iterator102 = _createForOfIteratorHelper(values),
      _step102;

  try {
    for (_iterator102.s(); !(_step102 = _iterator102.n()).done;) {
      var arg = _step102.value;
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
    _iterator102.e(err);
  } finally {
    _iterator102.f();
  }

  return symptoms;
}

var _processVariableModification = /*#__PURE__*/new WeakSet();

var _checkIsValidMethod = /*#__PURE__*/new WeakSet();

var BuiltInMethodCall = /*#__PURE__*/function (_MethodCallNode) {
  _inherits(BuiltInMethodCall, _MethodCallNode);

  var _super12 = _createSuper(BuiltInMethodCall);

  /**
   * Creates a new BuiltInMethodCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function BuiltInMethodCall(textValue, children) {
    var _this8;

    _classCallCheck(this, BuiltInMethodCall);

    _this8 = _super12.call(this, textValue, children, _enums.ExpressionEntity.BuiltInMethodCall, _enums.ExpressionCategory.MethodCall);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this8), _checkIsValidMethod);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this8), _processVariableModification);

    _classPrivateMethodGet(_assertThisInitialized(_this8), _processVariableModification, _processVariableModification2).call(_assertThisInitialized(_this8));

    _this8.addRule(_classPrivateMethodGet(_assertThisInitialized(_this8), _checkIsValidMethod, _checkIsValidMethod2));

    return _this8;
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

  var _super13 = _createSuper(UserDefinedMethodCall);

  /**
   * Creates a new UserDefinedMethodCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function UserDefinedMethodCall(textValue, children) {
    var _this9;

    _classCallCheck(this, UserDefinedMethodCall);

    _this9 = _super13.call(this, textValue, children, _enums.ExpressionEntity.UserDefinedMethodCall, _enums.ExpressionCategory.MethodCall);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this9), _checkIsValidMethod3);

    _this9.addRule(_classPrivateMethodGet(_assertThisInitialized(_this9), _checkIsValidMethod3, _checkIsValidMethod4));

    return _this9;
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

var PropertyCallNode = /*#__PURE__*/function (_MultiPartExpressionN6) {
  _inherits(PropertyCallNode, _MultiPartExpressionN6);

  var _super14 = _createSuper(PropertyCallNode);

  /** @type {ExpressionNode} */

  /** @type {ExpressionNode} */

  /**
   * Creates a new PropertyCallNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function PropertyCallNode(textValue, children, entity, category) {
    var _this10;

    _classCallCheck(this, PropertyCallNode);

    _this10 = _super14.call(this, textValue, children, entity, category);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this10), _checkAndUpdateDataType5);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this10), _checkUnused);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this10), _object, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this10), _property, {
      writable: true,
      value: void 0
    });

    if (_this10.isComplete()) {
      _classPrivateFieldSet(_assertThisInitialized(_this10), _object, children[0]);

      _classPrivateFieldSet(_assertThisInitialized(_this10), _property, children[2]);
    }

    _classPrivateMethodGet(_assertThisInitialized(_this10), _checkAndUpdateDataType5, _checkAndUpdateDataType6).call(_assertThisInitialized(_this10));

    _this10.addRule(_classPrivateMethodGet(_assertThisInitialized(_this10), _checkUnused, _checkUnused2));

    return _this10;
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

      var _iterator32 = _createForOfIteratorHelper(this.getChildren()),
          _step32;

      try {
        for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
          var item = _step32.value;

          if (item.is(entity)) {
            matches.push(item);
          } else {
            matches = matches.concat(item.getExpressionsOfKind(entity));
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
      var match = _get(_getPrototypeOf(PropertyCallNode.prototype), "getFirstExpressionOf", this).call(this, entities);

      if (match === undefined) {
        var _iterator33 = _createForOfIteratorHelper(this.getChildren()),
            _step33;

        try {
          for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
            var c = _step33.value;

            if (c.isOneOf(entities)) {
              return c;
            } else {
              match = c.getFirstExpressionOf(entities);
              if (match !== undefined) return match;
            }
          }
        } catch (err) {
          _iterator33.e(err);
        } finally {
          _iterator33.f();
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
    }
  }, {
    key: "setDataType",
    value: function setDataType(dataType) {
      if (dataType !== this.getDataType() || dataType !== _classPrivateFieldGet(this, _property).getDataType()) {
        _get(_getPrototypeOf(PropertyCallNode.prototype), "setDataType", this).call(this, dataType);

        if (!_classPrivateFieldGet(this, _property).is(_enums.ExpressionCategory.ModuleProperties)) _classPrivateFieldGet(this, _property).setDataType(dataType);
      }
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(PropertyCallNode.prototype), "toJSON", this).call(this);

      ret.object = _classPrivateFieldGet(this, _object).toJSON();
      ret.propertyName = _classPrivateFieldGet(this, _property).getTextValue();
      return ret;
    } //#endregion - overrides
    //#region - custom

    /**
     * Gets the object of the property call (the variable before the .)
     * @returns {VariableExpression}
     */

  }, {
    key: "getObject",
    value: function getObject() {
      return _classPrivateFieldGet(this, _object);
    }
    /**
     * Gets the property node
     * @returns {ExpressionNode}
     */

  }, {
    key: "getProperty",
    value: function getProperty() {
      return _classPrivateFieldGet(this, _property);
    }
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
      var lookupType = _utils.builtInReturnLookup.get(_classPrivateFieldGet(this, _property).getEntity());

      this.setDataType(lookupType ? lookupType : _classPrivateFieldGet(this, _property).getDataType());
    } else {
      this.setDataType(_enums.DataType.Unknown);
    }
  } else {
    this.setDataType(_enums.DataType.NotParsed);
  }

  _classPrivateFieldGet(this, _property).addObserver(this);
}

var SubscriptableNode = /*#__PURE__*/function (_ExpressionNode2) {
  _inherits(SubscriptableNode, _ExpressionNode2);

  var _super15 = _createSuper(SubscriptableNode);

  function SubscriptableNode() {
    _classCallCheck(this, SubscriptableNode);

    return _super15.apply(this, arguments);
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

  var _super16 = _createSuper(StringLiteralExpression);

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
    var _this11;

    var documentEndIndex = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : documentStartIndex + textValue.length;
    var endLineNumber = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : startLineNumber;

    _classCallCheck(this, StringLiteralExpression);

    _this11 = _super16.call(this, textValue, _enums.ExpressionEntity.StringLiteral, _enums.ExpressionCategory.Literals, startLineNumber, documentStartIndex, indexOnLine, _enums.DataType.String, documentEndIndex, endLineNumber);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this11), _checkUnused3);

    _this11.addRule(_classPrivateMethodGet(_assertThisInitialized(_this11), _checkUnused3, _checkUnused4));

    return _this11;
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

  var _super17 = _createSuper(NumberLiteral);

  /**
   * Creates an ExpressionNode
   * @param {String} textValue The text value of the node
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  function NumberLiteral(textValue, startLineNumber, documentStartIndex, indexOnLine) {
    var _this12;

    _classCallCheck(this, NumberLiteral);

    var numberEntity = textValue.indexOf(".") >= 0 ? _enums.ExpressionEntity.FloatLiteral : _enums.ExpressionEntity.IntLiteral;
    _this12 = _super17.call(this, textValue, numberEntity, _enums.ExpressionCategory.Literals, startLineNumber, documentStartIndex, indexOnLine, numberEntity === _enums.ExpressionEntity.FloatLiteral ? _enums.DataType.Float : _enums.DataType.Int);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this12), _checkUnused5);

    _this12.addRule(_classPrivateMethodGet(_assertThisInitialized(_this12), _checkUnused5, _checkUnused6));

    return _this12;
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

var FStringExpression = /*#__PURE__*/function (_MultiPartExpressionN7) {
  _inherits(FStringExpression, _MultiPartExpressionN7);

  var _super18 = _createSuper(FStringExpression);

  /** @type {ExpressionNode[][]} */
  // The values used to create the string e.g. variables

  /**
   * Creates a new UserDefinedMethodCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function FStringExpression(textValue, children) {
    var _this13;

    _classCallCheck(this, FStringExpression);

    _this13 = _super18.call(this, textValue, children, _enums.ExpressionEntity.FString, _enums.ExpressionCategory.Literals, _enums.DataType.String);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this13), _checkUnused7);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this13), _parseValues);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this13), _values, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this13), _values, _classPrivateMethodGet(_assertThisInitialized(_this13), _parseValues, _parseValues2).call(_assertThisInitialized(_this13)));

    var _iterator34 = _createForOfIteratorHelper(_classPrivateFieldGet(_assertThisInitialized(_this13), _values)),
        _step34;

    try {
      for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
        var v = _step34.value;

        var _iterator35 = _createForOfIteratorHelper(v),
            _step35;

        try {
          for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
            var e = _step35.value;
            e.setParent(_assertThisInitialized(_this13));
          }
        } catch (err) {
          _iterator35.e(err);
        } finally {
          _iterator35.f();
        }
      }
    } catch (err) {
      _iterator34.e(err);
    } finally {
      _iterator34.f();
    }

    _this13.addRule(_classPrivateMethodGet(_assertThisInitialized(_this13), _checkUnused7, _checkUnused8));

    return _this13;
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

      var _iterator36 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _values)),
          _step36;

      try {
        for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
          var v = _step36.value;

          var _iterator37 = _createForOfIteratorHelper(v),
              _step37;

          try {
            for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
              var item = _step37.value;

              if (item.is(_enums.ExpressionEntity.VariableName)) {
                variables.push(item);
              } else {
                variables = variables.concat(item.getVariableExpressions());
              }
            }
          } catch (err) {
            _iterator37.e(err);
          } finally {
            _iterator37.f();
          }
        }
      } catch (err) {
        _iterator36.e(err);
      } finally {
        _iterator36.f();
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

      var _iterator38 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _values)),
          _step38;

      try {
        for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
          var v = _step38.value;

          var _iterator39 = _createForOfIteratorHelper(v),
              _step39;

          try {
            for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
              var item = _step39.value;
              item.checkForSymptoms();
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
     * @override
     */
    // setBlockId(id) {
    //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
    //     /*for (const exp of this.getChildren()) {
    //         exp.setBlockId(id);
    //     }*/
    //     /*for (const item of this.#values) {
    //         for (const v of item)
    //             v.setBlockId(id);
    //     }*/
    // }

  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(FStringExpression.prototype), "toJSON", this).call(this);

      ret.values = _classPrivateFieldGet(this, _values).map(function (vArr) {
        return vArr.map(function (v) {
          return v.toJSON();
        });
      });
      return ret;
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

var CombinedStringLiteral = /*#__PURE__*/function (_MultiPartExpressionN8) {
  _inherits(CombinedStringLiteral, _MultiPartExpressionN8);

  var _super19 = _createSuper(CombinedStringLiteral);

  /**
   * Creates a new CombinedStringLiteral
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function CombinedStringLiteral(textValue, children) {
    var _this14;

    _classCallCheck(this, CombinedStringLiteral);

    _this14 = _super19.call(this, textValue, children, _enums.ExpressionEntity.CombinedStringLiteral, _enums.ExpressionCategory.Literals, _enums.DataType.String);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this14), _checkUnused9);

    _this14.addRule(_classPrivateMethodGet(_assertThisInitialized(_this14), _checkUnused9, _checkUnused10));

    return _this14;
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

      var _iterator40 = _createForOfIteratorHelper(this.getChildren()),
          _step40;

      try {
        for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
          var child = _step40.value;
          //if (child.is(ExpressionEntity.FString)) {
          variables = variables.concat(child.getVariableExpressions()); //}
        }
      } catch (err) {
        _iterator40.e(err);
      } finally {
        _iterator40.f();
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

  var _super20 = _createSuper(KeywordOrOperatorExpression);

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

    return _super20.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, _enums.DataType.NA);
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

  var _super21 = _createSuper(ModuleExpression);

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
    var _this15;

    _classCallCheck(this, ModuleExpression);

    _this15 = _super21.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, (0, _utils.typeByEntity)(entity));

    _classPrivateFieldInitSpec(_assertThisInitialized(_this15), _moduleName, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this15), _moduleName, textValue); // default


    return _this15;
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
  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(ModuleExpression.prototype), "toJSON", this).call(this);

      ret.moduleAlias = _classPrivateFieldGet(this, _moduleName);
      return ret;
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

var _checkBooleanCompares = /*#__PURE__*/new WeakSet();

var _checkUnused11 = /*#__PURE__*/new WeakSet();

var _checkOverwrites = /*#__PURE__*/new WeakSet();

var _assignedWithSelf = /*#__PURE__*/new WeakSet();

var _compareAllUsages = /*#__PURE__*/new WeakSet();

var _getLoopVarValue = /*#__PURE__*/new WeakSet();

var _getAssignedValue = /*#__PURE__*/new WeakSet();

var VariableExpression = /*#__PURE__*/function (_ExpressionNode6) {
  _inherits(VariableExpression, _ExpressionNode6);

  var _super22 = _createSuper(VariableExpression);

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
    var _this16;

    var proxy = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

    _classCallCheck(this, VariableExpression);

    if (category === _enums.ExpressionCategory.Identifiers) {
      _this16 = _super22.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _getAssignedValue);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _getLoopVarValue);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _compareAllUsages);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _assignedWithSelf);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _checkOverwrites);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _checkUnused11);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _checkBooleanCompares);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _getTypeOfPriorUsages);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this16), _lastUsages, {
        writable: true,
        value: []
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this16), _isAssignedOrChanged, {
        writable: true,
        value: false
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this16), _proxy, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this16), _isParameter, {
        writable: true,
        value: false
      });
    } else if (category === _enums.ExpressionCategory.SpecialVariables) {
      _this16 = _super22.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, (0, _utils.typeByEntity)(entity));

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _getAssignedValue);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _getLoopVarValue);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _compareAllUsages);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _assignedWithSelf);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _checkOverwrites);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _checkUnused11);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _checkBooleanCompares);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _getTypeOfPriorUsages);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this16), _lastUsages, {
        writable: true,
        value: []
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this16), _isAssignedOrChanged, {
        writable: true,
        value: false
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this16), _proxy, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this16), _isParameter, {
        writable: true,
        value: false
      });
    } else if (category === _enums.ExpressionCategory.ModuleProperties) {
      _this16 = _super22.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, _utils.builtInReturnLookup.has(entity) ? _utils.builtInReturnLookup.get(entity) : _enums.DataType.Unknown);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _getAssignedValue);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _getLoopVarValue);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _compareAllUsages);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _assignedWithSelf);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _checkOverwrites);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _checkUnused11);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _checkBooleanCompares);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this16), _getTypeOfPriorUsages);

      _classPrivateFieldInitSpec(_assertThisInitialized(_this16), _lastUsages, {
        writable: true,
        value: []
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this16), _isAssignedOrChanged, {
        writable: true,
        value: false
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this16), _proxy, {
        writable: true,
        value: void 0
      });

      _classPrivateFieldInitSpec(_assertThisInitialized(_this16), _isParameter, {
        writable: true,
        value: false
      });
    } else {
      throw new Error("No constructor for VariableExpression with ".concat(entity.name));
    }

    _classPrivateFieldSet(_assertThisInitialized(_this16), _proxy, proxy);

    _this16.addRules([_classPrivateMethodGet(_assertThisInitialized(_this16), _checkOverwrites, _checkOverwrites2), _classPrivateMethodGet(_assertThisInitialized(_this16), _checkUnused11, _checkUnused12)]);

    _this16.addConstructRule(_classPrivateMethodGet(_assertThisInitialized(_this16), _checkBooleanCompares, _checkBooleanCompares2));

    return _possibleConstructorReturn(_this16);
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

      if (dataType.isCustom && this.getParent() && this.getParent().is(_enums.ExpressionEntity.PropertyCallExpression)) {
        this.getParent().getProperty().setCategory(_enums.ExpressionCategory.ClassAttributes);
        this.getParent().getProperty().setOwnerType(dataType);
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

      var _iterator41 = _createForOfIteratorHelper(usages),
          _step41;

      try {
        for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
          var usage = _step41.value;
          usage.addObserver(this);
        }
      } catch (err) {
        _iterator41.e(err);
      } finally {
        _iterator41.f();
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
     * Construct function. Checks if the variable is a BooleanCompares 
     * - a variable with Bool data type that is used as a standalone Boolean expression or part of a check for equality e.g. if var:, if var == True:
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

function _checkBooleanCompares2(exp) {
  var constructs = [];

  if (exp.getDataType() === _enums.DataType.Bool) {
    _symptom.SymptomFinder.checkBooleanCompare(exp);
  }

  return constructs;
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

    var _iterator103 = _createForOfIteratorHelper(lastUsages),
        _step103;

    try {
      for (_iterator103.s(); !(_step103 = _iterator103.n()).done;) {
        var usage = _step103.value;

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
      _iterator103.e(err);
    } finally {
      _iterator103.f();
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

  var _iterator104 = _createForOfIteratorHelper(values),
      _step104;

  try {
    for (_iterator104.s(); !(_step104 = _iterator104.n()).done;) {
      var v = _step104.value;
      var matches = v.getExpressionsOfKind(varName);

      if (matches.length > 0) {
        return true;
      }
    }
  } catch (err) {
    _iterator104.e(err);
  } finally {
    _iterator104.f();
  }

  return false;
}

function _compareAllUsages2(assignedValue, lastUsages) {
  var comparisonResults = new Set();

  if (assignedValue !== undefined && assignedValue.isOneOf([_enums.ExpressionCategory.Literals, _enums.ExpressionCategory.Types])) {
    var _iterator105 = _createForOfIteratorHelper(lastUsages),
        _step105;

    try {
      for (_iterator105.s(); !(_step105 = _iterator105.n()).done;) {
        var usage = _step105.value;

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
      _iterator105.e(err);
    } finally {
      _iterator105.f();
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

var _ownerType = /*#__PURE__*/new WeakMap();

var PropertyExpression = /*#__PURE__*/function (_VariableExpression) {
  _inherits(PropertyExpression, _VariableExpression);

  var _super23 = _createSuper(PropertyExpression);

  /** @type {DataType} */

  /**
   * Creates a ModulePropertyExpression
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  function PropertyExpression(textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine) {
    var _this17;

    _classCallCheck(this, PropertyExpression);

    _this17 = _super23.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this17), _ownerType, {
      writable: true,
      value: void 0
    });

    return _this17;
  } //#region - overrides

  /**
   * @override
   * @throws Throws an error if calling code is attempting to change the data type of an attribute of a built-in module
   */


  _createClass(PropertyExpression, [{
    key: "setDataType",
    value: function setDataType(dataType) {
      if (this.is(_enums.ExpressionEntity.PropertyName)) {
        _get(_getPrototypeOf(PropertyExpression.prototype), "setDataType", this).call(this, dataType);
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
     * Gets the data type that owns this property (e.g. the math module, a custom class).
     * @returns {DataType}
     */

  }, {
    key: "getOwnerType",
    value: function getOwnerType() {
      return _classPrivateFieldGet(this, _ownerType);
    }
    /**
     * Sets the owner of this property
     * @param {DataType} ownerType 
     */

  }, {
    key: "setOwnerType",
    value: function setOwnerType(ownerType) {
      _classPrivateFieldSet(this, _ownerType, ownerType);
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

  return PropertyExpression;
}(VariableExpression);

exports.PropertyExpression = PropertyExpression;

var FunctionNode = /*#__PURE__*/function (_ExpressionNode7) {
  _inherits(FunctionNode, _ExpressionNode7);

  var _super24 = _createSuper(FunctionNode);

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

    return _super24.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, dataType);
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

var _attributes = /*#__PURE__*/new WeakMap();

var _init = /*#__PURE__*/new WeakMap();

var _methods = /*#__PURE__*/new WeakMap();

var ClassNode = /*#__PURE__*/function (_ExpressionNode8) {
  _inherits(ClassNode, _ExpressionNode8);

  var _super25 = _createSuper(ClassNode);

  /** @type {VariableExpression[]} */

  /** @type {UserDefinedFunctionExpression} */

  /** @type {UserDefinedFunctionExpression[]} */

  /**
   * Creates a ClassNode
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   * @param {DataType} dataType Optional. The data type of the individual expression. NotParsed by default.
   */
  function ClassNode(textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine) {
    var _this18;

    var dataType = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : _enums.DataType.Class;

    _classCallCheck(this, ClassNode);

    _this18 = _super25.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, dataType);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this18), _attributes, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this18), _init, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this18), _methods, {
      writable: true,
      value: []
    });

    return _this18;
  } //#region - overrides

  /**
   * @override
   * @throws Throws an error because the text value of a class node should not change.
   */


  _createClass(ClassNode, [{
    key: "setTextValue",
    value: function setTextValue(value) {
      throw new Error("Cannot change the name of a class node. Attempted to change the name to ".concat(value, "."));
    }
    /**
     * @inheritdoc
     * @override
     */

  }, {
    key: "isSubscriptable",
    value: function isSubscriptable() {
      return false;
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

  return ClassNode;
}(ExpressionNode);

exports.ClassNode = ClassNode;

var _returnExpressions = /*#__PURE__*/new WeakMap();

var _addProxyReturn = /*#__PURE__*/new WeakSet();

var UserDefinedFunctionExpression = /*#__PURE__*/function (_FunctionNode) {
  _inherits(UserDefinedFunctionExpression, _FunctionNode);

  var _super26 = _createSuper(UserDefinedFunctionExpression);

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
    var _this19;

    _classCallCheck(this, UserDefinedFunctionExpression);

    _this19 = _super26.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, _enums.DataType.NotParsed);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this19), _addProxyReturn);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this19), _returnExpressions, {
      writable: true,
      value: []
    });

    return _this19;
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
      var allParamCount = parent !== undefined && parent.isOneOf([_enums.ExpressionEntity.FunctionDefinitionStatement, _enums.ExpressionEntity.MethodDefinitionStatement]) ? parent.getParameters().length : -1;
      var optionalParams = parent !== undefined && parent.isOneOf([_enums.ExpressionEntity.FunctionDefinitionStatement, _enums.ExpressionEntity.MethodDefinitionStatement]) ? parent.getOptionalParameterCount() : -1;
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

      var _iterator42 = _createForOfIteratorHelper(statements),
          _step42;

      try {
        for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
          var s = _step42.value;

          if (s.getFirstExpression().is(_enums.ExpressionEntity.ReturnStatement)) {
            var retExp = s.getFirstExpression();

            _classPrivateFieldGet(this, _returnExpressions).push(retExp);

            var _iterator43 = _createForOfIteratorHelper(this.getObservers()),
                _step43;

            try {
              for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
                var obs = _step43.value;

                if (obs.is(_enums.ExpressionEntity.UserDefinedFunctionCall)) {
                  _classPrivateFieldGet(obs.getFunctionExpression(), _returnExpressions).push(retExp);
                }
              }
            } catch (err) {
              _iterator43.e(err);
            } finally {
              _iterator43.f();
            }

            retExp.addObserver(this);
          } else {
            _classPrivateMethodGet(this, _addProxyReturn, _addProxyReturn2).call(this);
          }
        }
      } catch (err) {
        _iterator42.e(err);
      } finally {
        _iterator42.f();
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

var _containingClass = /*#__PURE__*/new WeakMap();

var UserDefinedMethodExpression = /*#__PURE__*/function (_UserDefinedFunctionE) {
  _inherits(UserDefinedMethodExpression, _UserDefinedFunctionE);

  var _super27 = _createSuper(UserDefinedMethodExpression);

  function UserDefinedMethodExpression() {
    var _this20;

    _classCallCheck(this, UserDefinedMethodExpression);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this20 = _super27.call.apply(_super27, [this].concat(args));

    _classPrivateFieldInitSpec(_assertThisInitialized(_this20), _containingClass, {
      writable: true,
      value: _enums.DataType.Class
    });

    return _this20;
  }

  _createClass(UserDefinedMethodExpression, [{
    key: "getContainingClass",
    value:
    /**
     * Returns the data type that represents the containing class
     * @returns {DataType}
     */
    function getContainingClass() {
      return _classPrivateFieldGet(this, _containingClass);
    }
    /**
     * Sets the containing class of this method
     * @param {DataType} owner 
     */

  }, {
    key: "setContainingClass",
    value: function setContainingClass(owner) {
      _classPrivateFieldSet(this, _containingClass, owner);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(UserDefinedMethodExpression.prototype), "toJSON", this).call(this);

      ret.containingClass = _classPrivateFieldGet(this, _containingClass).name;

      if (this.getTextValue() === "__init__") {
        ret.hasReturn = true;
        ret.hasBranchWithoutReturn = false;
        ret.returnTypes = [ret.containingClass];
      }

      return ret;
    }
  }]);

  return UserDefinedMethodExpression;
}(UserDefinedFunctionExpression);

exports.UserDefinedMethodExpression = UserDefinedMethodExpression;

var BuiltInFunctionExpression = /*#__PURE__*/function (_FunctionNode2) {
  _inherits(BuiltInFunctionExpression, _FunctionNode2);

  var _super28 = _createSuper(BuiltInFunctionExpression);

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

    return _super28.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, _utils.builtInReturnLookup.get(entity));
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

var TypeValueExpression = /*#__PURE__*/function (_ExpressionNode9) {
  _inherits(TypeValueExpression, _ExpressionNode9);

  var _super29 = _createSuper(TypeValueExpression);

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
    var _this21;

    _classCallCheck(this, TypeValueExpression);

    if (entity === _enums.ExpressionEntity.TrueType || entity === _enums.ExpressionEntity.FalseType) {
      _this21 = _super29.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, _enums.DataType.Bool);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this21), _checkUnused13);
    } else if (entity === _enums.ExpressionEntity.NoneType) {
      _this21 = _super29.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, _enums.DataType.None);

      _classPrivateMethodInitSpec(_assertThisInitialized(_this21), _checkUnused13);
    } else throw new Error("Not a valid type value: ".concat(entity.name));

    _this21.addRule(_classPrivateMethodGet(_assertThisInitialized(_this21), _checkUnused13, _checkUnused14));

    return _possibleConstructorReturn(_this21);
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

var TypeNode = /*#__PURE__*/function (_ExpressionNode10) {
  _inherits(TypeNode, _ExpressionNode10);

  var _super30 = _createSuper(TypeNode);

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

    return _super30.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, dataType);
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

  var _super31 = _createSuper(BuiltInTypeExpression);

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

    return _super31.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, _enums.DataType.Unknown
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

  var _super32 = _createSuper(ExceptionExpression);

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

    return _super32.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, _enums.DataType.Exception);
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

  var _super33 = _createSuper(UserDefinedClassExpression);

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

    return _super33.call(this, textValue, entity, category, startLineNumber, documentStartIndex, indexOnLine, _enums.DataType.Class);
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

var CompoundTypeExpression = /*#__PURE__*/function (_MultiPartExpressionN9) {
  _inherits(CompoundTypeExpression, _MultiPartExpressionN9);

  var _super34 = _createSuper(CompoundTypeExpression);

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
    var _this22;

    _classCallCheck(this, CompoundTypeExpression);

    var dataType = (0, _utils.typeByEntity)(entity);
    _this22 = _super34.call(this, textValue, children, entity, _enums.ExpressionCategory.CompoundTypes, dataType);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this22), _checkUnused15);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this22), _elements, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this22), _elements, elements); // iterate and convert to tree


    for (var i = 0; i < _classPrivateFieldGet(_assertThisInitialized(_this22), _elements).length; i++) {
      if (entity !== _enums.ExpressionEntity.DictDefinition) {
        if (_classPrivateFieldGet(_assertThisInitialized(_this22), _elements)[i].length > 1) {
          _classPrivateFieldGet(_assertThisInitialized(_this22), _elements)[i] = _rawtextprocessing.StatementProcessor.createTree(_classPrivateFieldGet(_assertThisInitialized(_this22), _elements)[i]);
        }

        var _iterator44 = _createForOfIteratorHelper(_classPrivateFieldGet(_assertThisInitialized(_this22), _elements)[i]),
            _step44;

        try {
          for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
            var e = _step44.value;
            e.setParent(_assertThisInitialized(_this22));
          }
        } catch (err) {
          _iterator44.e(err);
        } finally {
          _iterator44.f();
        }
      } else {
        for (var u = 0; u < _classPrivateFieldGet(_assertThisInitialized(_this22), _elements)[i].length; u++) {
          if (_classPrivateFieldGet(_assertThisInitialized(_this22), _elements)[i][u].length > 1) {
            _classPrivateFieldGet(_assertThisInitialized(_this22), _elements)[i][u] = _rawtextprocessing.StatementProcessor.createTree(_classPrivateFieldGet(_assertThisInitialized(_this22), _elements)[i][u]);
          }

          var _iterator45 = _createForOfIteratorHelper(_classPrivateFieldGet(_assertThisInitialized(_this22), _elements)[i][u]),
              _step45;

          try {
            for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
              var _e = _step45.value;

              _e.setParent(_assertThisInitialized(_this22));
            }
          } catch (err) {
            _iterator45.e(err);
          } finally {
            _iterator45.f();
          }
        }
      }
    }

    _this22.addRule(_classPrivateMethodGet(_assertThisInitialized(_this22), _checkUnused15, _checkUnused16));

    return _this22;
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

      var _iterator46 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _elements)),
          _step46;

      try {
        for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
          var child = _step46.value;

          var _iterator47 = _createForOfIteratorHelper(child),
              _step47;

          try {
            for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
              var item = _step47.value;

              if (this.getEntity() !== _enums.ExpressionEntity.DictDefinition) {
                if (item.is(_enums.ExpressionEntity.VariableName)) {
                  variables.push(item);
                } else {
                  variables = variables.concat(item.getVariableExpressions());
                }
              } else {
                var _iterator48 = _createForOfIteratorHelper(item),
                    _step48;

                try {
                  for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
                    var element = _step48.value;

                    if (element.is(_enums.ExpressionEntity.VariableName)) {
                      variables.push(element);
                    } else {
                      variables = variables.concat(element.getVariableExpressions());
                    }
                  }
                } catch (err) {
                  _iterator48.e(err);
                } finally {
                  _iterator48.f();
                }
              }
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

      var _iterator49 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _elements)),
          _step49;

      try {
        for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
          var child = _step49.value;

          var _iterator50 = _createForOfIteratorHelper(child),
              _step50;

          try {
            for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
              var item = _step50.value;

              if (this.getEntity() !== _enums.ExpressionEntity.DictDefinition) {
                if (item.contains(expression)) {
                  return true;
                }
              } else {
                var _iterator51 = _createForOfIteratorHelper(item),
                    _step51;

                try {
                  for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
                    var element = _step51.value;

                    if (element.contains(expression)) {
                      return true;
                    }
                  }
                } catch (err) {
                  _iterator51.e(err);
                } finally {
                  _iterator51.f();
                }
              }
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

      var _iterator52 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _elements)),
          _step52;

      try {
        for (_iterator52.s(); !(_step52 = _iterator52.n()).done;) {
          var child = _step52.value;

          var _iterator53 = _createForOfIteratorHelper(child),
              _step53;

          try {
            for (_iterator53.s(); !(_step53 = _iterator53.n()).done;) {
              var item = _step53.value;

              if (this.getEntity() !== _enums.ExpressionEntity.DictDefinition) {
                if (item.is(entity)) {
                  matches.push(item);
                } else matches = matches.concat(item.getExpressionsOfKind(entity));
              } else {
                var _iterator54 = _createForOfIteratorHelper(item),
                    _step54;

                try {
                  for (_iterator54.s(); !(_step54 = _iterator54.n()).done;) {
                    var element = _step54.value;

                    if (element.is(entity)) {
                      matches.push(element);
                    } else matches = matches.concat(element.getExpressionsOfKind(entity));
                  }
                } catch (err) {
                  _iterator54.e(err);
                } finally {
                  _iterator54.f();
                }
              }
            }
          } catch (err) {
            _iterator53.e(err);
          } finally {
            _iterator53.f();
          }
        }
      } catch (err) {
        _iterator52.e(err);
      } finally {
        _iterator52.f();
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
        var _iterator55 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _elements)),
            _step55;

        try {
          for (_iterator55.s(); !(_step55 = _iterator55.n()).done;) {
            var elem = _step55.value;

            var _iterator56 = _createForOfIteratorHelper(elem),
                _step56;

            try {
              for (_iterator56.s(); !(_step56 = _iterator56.n()).done;) {
                var item = _step56.value;

                if (this.getEntity() !== _enums.ExpressionEntity.DictDefinition) {
                  if (item.isOneOf(entities)) return item;else {
                    match = item.getFirstExpressionOf(entities);
                    if (match !== undefined) return match;
                  }
                } else {
                  var _iterator57 = _createForOfIteratorHelper(item),
                      _step57;

                  try {
                    for (_iterator57.s(); !(_step57 = _iterator57.n()).done;) {
                      var keyValue = _step57.value;
                      if (keyValue.isOneOf(entities)) return keyValue;else {
                        match = keyValue.getFirstExpressionOf(entities);
                        if (match !== undefined) return match;
                      }
                    }
                  } catch (err) {
                    _iterator57.e(err);
                  } finally {
                    _iterator57.f();
                  }
                }
              }
            } catch (err) {
              _iterator56.e(err);
            } finally {
              _iterator56.f();
            }
          }
        } catch (err) {
          _iterator55.e(err);
        } finally {
          _iterator55.f();
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

      var _iterator58 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _elements)),
          _step58;

      try {
        for (_iterator58.s(); !(_step58 = _iterator58.n()).done;) {
          var e = _step58.value;

          var _iterator59 = _createForOfIteratorHelper(e),
              _step59;

          try {
            for (_iterator59.s(); !(_step59 = _iterator59.n()).done;) {
              var item = _step59.value;

              if (this.getEntity() !== _enums.ExpressionEntity.DictDefinition) {
                item.checkForSymptoms();
              } else {
                var _iterator60 = _createForOfIteratorHelper(item),
                    _step60;

                try {
                  for (_iterator60.s(); !(_step60 = _iterator60.n()).done;) {
                    var keyValue = _step60.value;
                    keyValue.checkForSymptoms();
                  }
                } catch (err) {
                  _iterator60.e(err);
                } finally {
                  _iterator60.f();
                }
              }
            }
          } catch (err) {
            _iterator59.e(err);
          } finally {
            _iterator59.f();
          }
        }
      } catch (err) {
        _iterator58.e(err);
      } finally {
        _iterator58.f();
      }
    }
    /**
     * @override
     */
    // setBlockId(id) {
    //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
    //     /*for (const exp of this.getChildren()) {
    //         exp.setBlockId(id);
    //     }*/
    //     /*for (const item of this.#elements) {
    //         for (const e of item) {
    //             if (this.getEntity() !== ExpressionEntity.DictDefinition) {
    //                 e.setBlockId(id);
    //             } else {
    //                 for (const keyValue of e) {
    //                     keyValue.setBlockId();
    //                 }
    //             }
    //         }
    //     }*/
    // }

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
  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(CompoundTypeExpression.prototype), "toJSON", this).call(this);

      try {
        // List, set, tuple
        ret.elements = _classPrivateFieldGet(this, _elements).map(function (eComponent) {
          return eComponent.map(function (e) {
            return e.toJSON();
          });
        });
      } catch (error) {
        // Must be a dict
        ret.elements = _classPrivateFieldGet(this, _elements).map(function (keyValue) {
          return keyValue.map(function (entry) {
            return entry.map(function (i) {
              return i.toJSON();
            });
          });
        });
      }

      return ret;
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

var BlockDefinitionStatement = /*#__PURE__*/function (_MultiPartExpressionN10) {
  _inherits(BlockDefinitionStatement, _MultiPartExpressionN10);

  var _super35 = _createSuper(BlockDefinitionStatement);

  /** @type {ExpressionNode[]} */

  /**
   * Creates a new BlockDefinitionStatement
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionEntity} entity
   * @throws Throws an error if the list of children is empty
   */
  function BlockDefinitionStatement(textValue, _children3, entity) {
    var _this23;

    _classCallCheck(this, BlockDefinitionStatement);

    _this23 = _super35.call(this, textValue, _children3, entity, _enums.ExpressionCategory.BlockDefinitionStatement, _enums.DataType.NA);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this23), _checkWhileTrue);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this23), _getColonIndex);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this23), _condition, {
      writable: true,
      value: []
    });

    if (_children3.length > 1) {
      var colonIndex = _classPrivateMethodGet(_assertThisInitialized(_this23), _getColonIndex, _getColonIndex2).call(_assertThisInitialized(_this23));

      var tree = _rawtextprocessing.StatementProcessor.createTree(_children3.slice(1, colonIndex));

      if (entity === _enums.ExpressionEntity.ForDefinitionStatement && tree.length > 0) {
        if (tree[0].is(_enums.ExpressionEntity.IteratorExpression)) {
          _classPrivateFieldSet(_assertThisInitialized(_this23), _condition, tree);
        } else if (tree[0].is(_enums.ExpressionEntity.ComparisonExpression)) {
          tree[0] = tree[0].convertToIterator();

          _classPrivateFieldSet(_assertThisInitialized(_this23), _condition, [tree[0]]);

          var rest = tree.slice(1).filter(function (exp) {
            return !exp.is(_enums.ExpressionEntity.Colon);
          });

          if (rest.length > 0) {
            _classPrivateFieldSet(_assertThisInitialized(_this23), _condition, _classPrivateFieldGet(_assertThisInitialized(_this23), _condition).concat(rest));
          }
        } else {
          tree = [new IteratorExpression(textValue, tree)];

          _classPrivateFieldSet(_assertThisInitialized(_this23), _condition, tree);
        }
      } else if (entity === _enums.ExpressionEntity.WithDefinitionStatement || entity === _enums.ExpressionEntity.ExceptDefinitionStatement) {
        if (tree.length === 3 && tree[1].is(_enums.ExpressionEntity.AsKeyword) && tree[2].is(_enums.ExpressionEntity.VariableName)) {
          _classPrivateFieldSet(_assertThisInitialized(_this23), _condition, [new AssignmentExpression(textValue, tree)]);
        }
      } else {
        _classPrivateFieldSet(_assertThisInitialized(_this23), _condition, tree);
      }

      var _iterator61 = _createForOfIteratorHelper(tree),
          _step61;

      try {
        for (_iterator61.s(); !(_step61 = _iterator61.n()).done;) {
          var e = _step61.value;
          e.setParent(_assertThisInitialized(_this23));
        }
      } catch (err) {
        _iterator61.e(err);
      } finally {
        _iterator61.f();
      }
    }

    if (entity === _enums.ExpressionEntity.WhileDefinitionStatement) {
      _this23.addRule(_classPrivateMethodGet(_assertThisInitialized(_this23), _checkWhileTrue, _checkWhileTrue2));
    }

    return _this23;
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

      var _iterator62 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _condition)),
          _step62;

      try {
        for (_iterator62.s(); !(_step62 = _iterator62.n()).done;) {
          var child = _step62.value;

          if (child.is(_enums.ExpressionEntity.VariableName)) {
            variables.push(child);
          } else {
            variables = variables.concat(child.getVariableExpressions());
          }
        }
      } catch (err) {
        _iterator62.e(err);
      } finally {
        _iterator62.f();
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

      var _iterator63 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _condition)),
          _step63;

      try {
        for (_iterator63.s(); !(_step63 = _iterator63.n()).done;) {
          var c = _step63.value;

          if (c.is(entity)) {
            matches.push(c);
          } else {
            matches = matches.concat(c.getExpressionsOfKind(entity));
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
     * @override
     */
    // setBlockId(id) {
    //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
    //     /*for (const exp of this.getChildren()) {
    //         exp.setBlockId(id);
    //     }*/
    //     /*for (const c of this.#condition) {
    //         c.setBlockId(id);
    //     }*/
    // }

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
        var _iterator64 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _condition)),
            _step64;

        try {
          for (_iterator64.s(); !(_step64 = _iterator64.n()).done;) {
            var c = _step64.value;

            if (c.isOneOf(entities)) {
              return c;
            } else {
              match = c.getFirstExpressionOf(entities);
              if (match !== undefined) return match;
            }
          }
        } catch (err) {
          _iterator64.e(err);
        } finally {
          _iterator64.f();
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

      var _iterator65 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _condition)),
          _step65;

      try {
        for (_iterator65.s(); !(_step65 = _iterator65.n()).done;) {
          var item = _step65.value;
          item.checkForSymptoms();
        }
      } catch (err) {
        _iterator65.e(err);
      } finally {
        _iterator65.f();
      }
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(BlockDefinitionStatement.prototype), "toJSON", this).call(this);

      ret.keyword = this.getChildren()[0].getTextValue();
      ret.condition = _classPrivateFieldGet(this, _condition).map(function (e) {
        return e.toJSON();
      });
      return ret;
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

var AssignmentExpression = /*#__PURE__*/function (_MultiPartExpressionN11) {
  _inherits(AssignmentExpression, _MultiPartExpressionN11);

  var _super36 = _createSuper(AssignmentExpression);

  /** @type {ExpressionNode[]} */

  /** @type {ExpressionNode[]} */

  /**
   * Creates a new AssignmentExpression
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function AssignmentExpression(textValue, _children4) {
    var _this24;

    _classCallCheck(this, AssignmentExpression);

    _this24 = _super36.call(this, textValue, _children4, _enums.ExpressionEntity.AssignmentStatement, _enums.ExpressionCategory.Assignment, _enums.DataType.NotParsed);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this24), _checkAssignsNone);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this24), _checkForUnexpectedColon);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this24), _checkAssignedReservedWord);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this24), _setTuple);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this24), _setUnknown);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this24), _setTupleVariables);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this24), _setValues);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this24), _processStandardAssignment);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this24), _processAsAssignment);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this24), _computeAssignments);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this24), _variables, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this24), _values2, {
      writable: true,
      value: []
    });

    _classPrivateMethodGet(_assertThisInitialized(_this24), _computeAssignments, _computeAssignments2).call(_assertThisInitialized(_this24));

    _this24.addRules([_classPrivateMethodGet(_assertThisInitialized(_this24), _checkAssignsNone, _checkAssignsNone2), _classPrivateMethodGet(_assertThisInitialized(_this24), _checkAssignedReservedWord, _checkAssignedReservedWord2), _classPrivateMethodGet(_assertThisInitialized(_this24), _checkForUnexpectedColon, _checkForUnexpectedColon2)]);

    return _this24;
  } //#region - overrides

  /**
   * @override
   */


  _createClass(AssignmentExpression, [{
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      var variables = [];

      var _iterator66 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _values2)),
          _step66;

      try {
        for (_iterator66.s(); !(_step66 = _iterator66.n()).done;) {
          var value = _step66.value;
          variables = variables.concat(value.getVariableExpressions());
        }
      } catch (err) {
        _iterator66.e(err);
      } finally {
        _iterator66.f();
      }

      var _iterator67 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _variables)),
          _step67;

      try {
        for (_iterator67.s(); !(_step67 = _iterator67.n()).done;) {
          var variable = _step67.value;
          variables = variables.concat(variable.getVariableExpressions());
        }
      } catch (err) {
        _iterator67.e(err);
      } finally {
        _iterator67.f();
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
    // setBlockId(id) {
    //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
    //     /*for (const exp of this.getChildren()) {
    //         exp.setBlockId(id);
    //     }*/
    //     /*for (const v of this.#values) {
    //         v.setBlockId(id);
    //     }*/
    // }

  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(AssignmentExpression.prototype), "toJSON", this).call(this);

      ret.targets = _classPrivateFieldGet(this, _variables).map(function (v) {
        return v.toJSON();
      });
      ret.values = _classPrivateFieldGet(this, _values2).map(function (v) {
        return v.toJSON();
      });
      return ret;
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
    var _iterator106 = _createForOfIteratorHelper(items[1]),
        _step106;

    try {
      for (_iterator106.s(); !(_step106 = _iterator106.n()).done;) {
        var variable = _step106.value;

        if (variable[0].is(_enums.ExpressionEntity.VariableName)) {
          variable[0].setAssignedOrChanged();
        } else if (variable[0].is(_enums.ExpressionEntity.PropertyCallExpression) && variable[0].getProperty().is(_enums.ExpressionEntity.PropertyName)) {
          variable[0].getProperty().setAssignedOrChanged();
        }

        _classPrivateFieldGet(this, _variables).push(variable[0]);
      }
    } catch (err) {
      _iterator106.e(err);
    } finally {
      _iterator106.f();
    }

    var _iterator107 = _createForOfIteratorHelper(items[0]),
        _step107;

    try {
      for (_iterator107.s(); !(_step107 = _iterator107.n()).done;) {
        var value = _step107.value;

        _classPrivateFieldGet(this, _values2).push(value[0]);
      }
    } catch (err) {
      _iterator107.e(err);
    } finally {
      _iterator107.f();
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
    var _iterator108 = _createForOfIteratorHelper(items[0]),
        _step108;

    try {
      for (_iterator108.s(); !(_step108 = _iterator108.n()).done;) {
        var variable = _step108.value;

        if (variable[0].is(_enums.ExpressionEntity.VariableName)) {
          variable[0].setAssignedOrChanged();
        } else if (variable[0].is(_enums.ExpressionEntity.SubscriptedExpression) && variable[0].getChildren()[0].is(_enums.ExpressionEntity.VariableName)) {
          variable[0].getChildren()[0].setAssignedOrChanged();
        } else if (variable[0].is(_enums.ExpressionEntity.PropertyCallExpression) && variable[0].getProperty().is(_enums.ExpressionEntity.PropertyName)) {
          variable[0].getProperty().setAssignedOrChanged();
        }

        _classPrivateFieldGet(this, _variables).push(variable[0]);
      }
    } catch (err) {
      _iterator108.e(err);
    } finally {
      _iterator108.f();
    }

    var _iterator109 = _createForOfIteratorHelper(items[1]),
        _step109;

    try {
      for (_iterator109.s(); !(_step109 = _iterator109.n()).done;) {
        var value = _step109.value;

        _classPrivateFieldGet(this, _values2).push(value[0]);
      }
    } catch (err) {
      _iterator109.e(err);
    } finally {
      _iterator109.f();
    }
  }

  if (_classPrivateFieldGet(this, _variables).length === _classPrivateFieldGet(this, _values2).length) {
    _classPrivateMethodGet(this, _setValues, _setValues2).call(this);
  } else if (_classPrivateFieldGet(this, _variables).length > _classPrivateFieldGet(this, _values2).length) {
    _classPrivateMethodGet(this, _setUnknown, _setUnknown2).call(this);
  } else {
    _classPrivateMethodGet(this, _setTuple, _setTuple2).call(this);
  }

  var _iterator110 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _variables)),
      _step110;

  try {
    for (_iterator110.s(); !(_step110 = _iterator110.n()).done;) {
      var v = _step110.value;
      v.addObserver(this);
    }
  } catch (err) {
    _iterator110.e(err);
  } finally {
    _iterator110.f();
  }

  this.setDataType((0, _utils.getAggregateType)(_classPrivateFieldGet(this, _variables).map(function (v) {
    return v.getDataType();
  })));
}

function _setValues2() {
  for (var i = 0; i < _classPrivateFieldGet(this, _variables).length; i++) {
    if (_classPrivateFieldGet(this, _variables)[i].isOneOf([_enums.ExpressionEntity.VariableName, _enums.ExpressionEntity.SubscriptedExpression, _enums.ExpressionEntity.PropertyCallExpression])) {
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
  var _iterator111 = _createForOfIteratorHelper(tuple.getElements()),
      _step111;

  try {
    for (_iterator111.s(); !(_step111 = _iterator111.n()).done;) {
      var i = _step111.value;
      if (i[0].isOneOf([_enums.ExpressionEntity.VariableName, _enums.ExpressionEntity.SubscriptedExpression])) i[0].setDataType(_enums.DataType.Unknown);
    }
  } catch (err) {
    _iterator111.e(err);
  } finally {
    _iterator111.f();
  }
}

function _setUnknown2() {
  var _iterator112 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _variables)),
      _step112;

  try {
    for (_iterator112.s(); !(_step112 = _iterator112.n()).done;) {
      var variable = _step112.value;

      if (!variable.isOneOf([_enums.ExpressionEntity.VariableName, _enums.ExpressionEntity.SubscriptedExpression])) {//console.log("stop");
      } else {
        variable.setDataType(_enums.DataType.Unknown);
      }
    }
  } catch (err) {
    _iterator112.e(err);
  } finally {
    _iterator112.f();
  }
}

function _setTuple2() {
  var _iterator113 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _variables)),
      _step113;

  try {
    for (_iterator113.s(); !(_step113 = _iterator113.n()).done;) {
      var variable = _step113.value;

      if (!variable.isOneOf([_enums.ExpressionEntity.VariableName, _enums.ExpressionEntity.SubscriptedExpression])) {
        console.log("stop!", variable.getTextValue());
      } else {
        variable.setDataType(_enums.DataType.Tuple);
      }
    }
  } catch (err) {
    _iterator113.e(err);
  } finally {
    _iterator113.f();
  }
}

function _checkAssignedReservedWord2(exp) {
  var symptoms = [];

  var _iterator114 = _createForOfIteratorHelper(exp.getTargetVariables()),
      _step114;

  try {
    for (_iterator114.s(); !(_step114 = _iterator114.n()).done;) {
      var v = _step114.value;
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
    _iterator114.e(err);
  } finally {
    _iterator114.f();
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

var ChangeExpression = /*#__PURE__*/function (_MultiPartExpressionN12) {
  _inherits(ChangeExpression, _MultiPartExpressionN12);

  var _super37 = _createSuper(ChangeExpression);

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
    var _this25;

    _classCallCheck(this, ChangeExpression);

    _this25 = _super37.call(this, textValue, _children5, _enums.ExpressionEntity.ChangeStatement, _enums.ExpressionCategory.Assignment, _enums.DataType.NA);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this25), _checkAssignsNone3);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this25), _findOperator);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this25), _findNonAugmentedOperator);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this25), _createPlaceholderCalculation);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this25), _computeAssignments3);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this25), _variables2, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this25), _operatorIndex, {
      writable: true,
      value: -1
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this25), _calculatedValues, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this25), _assignedValue, {
      writable: true,
      value: void 0
    });

    _classPrivateMethodGet(_assertThisInitialized(_this25), _computeAssignments3, _computeAssignments4).call(_assertThisInitialized(_this25));

    _this25.addRule(_classPrivateMethodGet(_assertThisInitialized(_this25), _checkAssignsNone3, _checkAssignsNone4));

    return _this25;
  } //#region - overrides

  /**
   * @override
   */


  _createClass(ChangeExpression, [{
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      var variables = [];

      var _iterator68 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _calculatedValues)),
          _step68;

      try {
        for (_iterator68.s(); !(_step68 = _iterator68.n()).done;) {
          var value = _step68.value;
          variables = variables.concat(value.getVariableExpressions());
        }
      } catch (err) {
        _iterator68.e(err);
      } finally {
        _iterator68.f();
      }

      var _iterator69 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _variables2)),
          _step69;

      try {
        for (_iterator69.s(); !(_step69 = _iterator69.n()).done;) {
          var variable = _step69.value;
          variables = variables.concat(variable.getVariableExpressions());
        }
      } catch (err) {
        _iterator69.e(err);
      } finally {
        _iterator69.f();
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
    key: "getTargetVariables",
    value:
    /**
     * @override
     */
    // setBlockId(id) {
    //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
    //     /*for (const exp of this.getChildren()) {
    //         exp.setBlockId(id);
    //     }*/
    //     //this.#assignedValue.setBlockId(id);
    // }
    //#endregion - overrides

    /**
     * The variables on the left side of the assignment.
     * @returns {ExpressionNode[]}
     */
    function getTargetVariables() {
      return _classPrivateFieldGet(this, _variables2);
    }
    /** 
     * Rule function. Checks if the expression calculates with something with no value and if so,
     * adds a new Symptom object.
     * @param {ChangeExpression} exp
     * @returns {Symptom[]}
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(ChangeExpression.prototype), "toJSON", this).call(this);

      ret.target = _classPrivateFieldGet(this, _variables2)[0].toJSON();
      ret.operator = this.getChildren()[_classPrivateFieldGet(this, _operatorIndex)].toJSON();
      ret.changeValue = _classPrivateFieldGet(this, _assignedValue).toJSON();
      return ret;
    }
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
    } else if (children[0].is(_enums.ExpressionEntity.PropertyCallExpression) && children[0].getProperty().is(_enums.ExpressionEntity.PropertyName)) {
      children[0].getProperty().setAssignedOrChanged();
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

    _classPrivateFieldSet(this, _assignedValue, children[_classPrivateFieldGet(this, _operatorIndex) - 1]);

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

var GroupElement = /*#__PURE__*/function (_MultiPartExpressionN13) {
  _inherits(GroupElement, _MultiPartExpressionN13);

  var _super38 = _createSuper(GroupElement);

  /** @type {ExpressionNode[]} */
  // The contents of the group (everything between the parentheses)

  /**
   * Creates a new GroupElement
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function GroupElement(textValue, children) {
    var _this26;

    _classCallCheck(this, GroupElement);

    _this26 = _super38.call(this, textValue, children, _enums.ExpressionEntity.GroupStatement, _enums.ExpressionCategory.Group, _enums.DataType.NotParsed);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this26), _checkForUnexpectedColon3);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this26), _contents, {
      writable: true,
      value: void 0
    });

    if (children.length > 2) {
      var slice = children.slice(1, children.length - 1);
      if (slice.length > 1) _classPrivateFieldSet(_assertThisInitialized(_this26), _contents, _rawtextprocessing.StatementProcessor.createTree(children.slice(1, children.length - 1)));else {
        _classPrivateFieldSet(_assertThisInitialized(_this26), _contents, [slice[0]]);
      }
    } else {
      _classPrivateFieldSet(_assertThisInitialized(_this26), _contents, []);
    }

    var _iterator70 = _createForOfIteratorHelper(_classPrivateFieldGet(_assertThisInitialized(_this26), _contents)),
        _step70;

    try {
      for (_iterator70.s(); !(_step70 = _iterator70.n()).done;) {
        var e = _step70.value;
        e.setParent(_assertThisInitialized(_this26));
      }
    } catch (err) {
      _iterator70.e(err);
    } finally {
      _iterator70.f();
    }

    _this26.setDataType(_classPrivateFieldGet(_assertThisInitialized(_this26), _contents).length === 1 ? _classPrivateFieldGet(_assertThisInitialized(_this26), _contents)[0].getDataType() : _enums.DataType.Unknown);

    if (_classPrivateFieldGet(_assertThisInitialized(_this26), _contents).length === 1) {
      _classPrivateFieldGet(_assertThisInitialized(_this26), _contents)[0].addObserver(_assertThisInitialized(_this26));
    } else {
      _this26.setDataType(_enums.DataType.Invalid); // Probably a larger issue

    }

    _this26.addRule(_classPrivateMethodGet(_assertThisInitialized(_this26), _checkForUnexpectedColon3, _checkForUnexpectedColon4));

    return _this26;
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     /*for (const c of this.#contents) {
  //         c.setBlockId(id);
  //     }*/
  // }
  //#region - extension

  /**
   * Gets the contents of the group.
   * @returns {ExpressionNode[]}
   */


  _createClass(GroupElement, [{
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

      var _iterator71 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _contents)),
          _step71;

      try {
        for (_iterator71.s(); !(_step71 = _iterator71.n()).done;) {
          var value = _step71.value;
          variables = variables.concat(value.getVariableExpressions());
        }
      } catch (err) {
        _iterator71.e(err);
      } finally {
        _iterator71.f();
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

      var _iterator72 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _contents)),
          _step72;

      try {
        for (_iterator72.s(); !(_step72 = _iterator72.n()).done;) {
          var c = _step72.value;

          if (c.is(entity)) {
            matches.push(c);
          } else matches = matches.concat(c.getExpressionsOfKind(entity));
        }
      } catch (err) {
        _iterator72.e(err);
      } finally {
        _iterator72.f();
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
        var _iterator73 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _contents)),
            _step73;

        try {
          for (_iterator73.s(); !(_step73 = _iterator73.n()).done;) {
            var c = _step73.value;

            if (c.isOneOf(entities)) {
              return c;
            } else {
              match = c.getFirstExpressionOf(entities);
              if (match !== undefined) return match;
            }
          }
        } catch (err) {
          _iterator73.e(err);
        } finally {
          _iterator73.f();
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

      var _iterator74 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _contents)),
          _step74;

      try {
        for (_iterator74.s(); !(_step74 = _iterator74.n()).done;) {
          var c = _step74.value;
          c.checkForSymptoms();
        }
      } catch (err) {
        _iterator74.e(err);
      } finally {
        _iterator74.f();
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

      var _iterator75 = _createForOfIteratorHelper(contents),
          _step75;

      try {
        for (_iterator75.s(); !(_step75 = _iterator75.n()).done;) {
          var c = _step75.value;
          if (!c.matchesPattern(node)) return false;
        }
      } catch (err) {
        _iterator75.e(err);
      } finally {
        _iterator75.f();
      }

      return true;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(GroupElement.prototype), "toJSON", this).call(this);

      ret.contents = _classPrivateFieldGet(this, _contents).map(function (e) {
        return e.toJSON();
      });
      return ret;
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

var SliceElement = /*#__PURE__*/function (_MultiPartExpressionN14) {
  _inherits(SliceElement, _MultiPartExpressionN14);

  var _super39 = _createSuper(SliceElement);

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
    var _this27;

    var indices = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, SliceElement);

    _this27 = _super39.call(this, textValue, children, _enums.ExpressionEntity.Slice, _enums.ExpressionCategory.Other, _enums.DataType.NA);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this27), _indices, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this27), _indices, indices); // convert each index to a tree


    for (var i = 0; i < _classPrivateFieldGet(_assertThisInitialized(_this27), _indices).length; i++) {
      if (_classPrivateFieldGet(_assertThisInitialized(_this27), _indices)[i].length > 1) {
        _classPrivateFieldGet(_assertThisInitialized(_this27), _indices)[i] = _rawtextprocessing.StatementProcessor.createTree(_classPrivateFieldGet(_assertThisInitialized(_this27), _indices)[i]);

        var _iterator76 = _createForOfIteratorHelper(_classPrivateFieldGet(_assertThisInitialized(_this27), _indices)[i]),
            _step76;

        try {
          for (_iterator76.s(); !(_step76 = _iterator76.n()).done;) {
            var e = _step76.value;
            e.setParent(_assertThisInitialized(_this27));
          }
        } catch (err) {
          _iterator76.e(err);
        } finally {
          _iterator76.f();
        }
      }
    }

    return _this27;
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

      var _iterator77 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _indices)),
          _step77;

      try {
        for (_iterator77.s(); !(_step77 = _iterator77.n()).done;) {
          var value = _step77.value;

          var _iterator78 = _createForOfIteratorHelper(value),
              _step78;

          try {
            for (_iterator78.s(); !(_step78 = _iterator78.n()).done;) {
              var item = _step78.value;
              variables = variables.concat(item.getVariableExpressions());
            }
          } catch (err) {
            _iterator78.e(err);
          } finally {
            _iterator78.f();
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
     * @override
     */

  }, {
    key: "checkForSymptoms",
    value: function checkForSymptoms() {
      this.checkRules(this);

      var _iterator79 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _indices)),
          _step79;

      try {
        for (_iterator79.s(); !(_step79 = _iterator79.n()).done;) {
          var i = _step79.value;

          var _iterator80 = _createForOfIteratorHelper(i),
              _step80;

          try {
            for (_iterator80.s(); !(_step80 = _iterator80.n()).done;) {
              var item = _step80.value;
              item.checkForSymptoms();
            }
          } catch (err) {
            _iterator80.e(err);
          } finally {
            _iterator80.f();
          }
        }
      } catch (err) {
        _iterator79.e(err);
      } finally {
        _iterator79.f();
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
    // setBlockId(id) {
    //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
    //     /*for (const exp of this.getChildren()) {
    //         exp.setBlockId(id);
    //     }*/
    //     /*for (const item of this.#indices) {
    //         for (const i of item) {
    //             i.setBlockId(id);
    //         }
    //     }*/
    // }

  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(SliceElement.prototype), "toJSON", this).call(this);

      ret.indices = _classPrivateFieldGet(this, _indices).map(function (iComponent) {
        return iComponent.map(function (i) {
          return i.toJSON();
        });
      });
      return ret;
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

var IndexKeyElement = /*#__PURE__*/function (_MultiPartExpressionN15) {
  _inherits(IndexKeyElement, _MultiPartExpressionN15);

  var _super40 = _createSuper(IndexKeyElement);

  /** @type {ExpressionNode[]} */

  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  function IndexKeyElement(textValue, children) {
    var _this28;

    _classCallCheck(this, IndexKeyElement);

    _this28 = _super40.call(this, textValue, children, _enums.ExpressionEntity.IndexKey, _enums.ExpressionCategory.Other, _enums.DataType.NA); // convert children contents to tree

    _classPrivateFieldInitSpec(_assertThisInitialized(_this28), _contents2, {
      writable: true,
      value: []
    });

    if (children.length > 2) {
      _classPrivateFieldSet(_assertThisInitialized(_this28), _contents2, _rawtextprocessing.StatementProcessor.createTree(children.slice(1, children.length - 1)));
    }

    var _iterator81 = _createForOfIteratorHelper(_classPrivateFieldGet(_assertThisInitialized(_this28), _contents2)),
        _step81;

    try {
      for (_iterator81.s(); !(_step81 = _iterator81.n()).done;) {
        var e = _step81.value;
        e.setParent(_assertThisInitialized(_this28));
      }
    } catch (err) {
      _iterator81.e(err);
    } finally {
      _iterator81.f();
    }

    return _this28;
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

      var _iterator82 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _contents2)),
          _step82;

      try {
        for (_iterator82.s(); !(_step82 = _iterator82.n()).done;) {
          var value = _step82.value;
          variables = variables.concat(value.getVariableExpressions());
        }
      } catch (err) {
        _iterator82.e(err);
      } finally {
        _iterator82.f();
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

      var _iterator83 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _contents2)),
          _step83;

      try {
        for (_iterator83.s(); !(_step83 = _iterator83.n()).done;) {
          var c = _step83.value;
          c.checkForSymptoms();
        }
      } catch (err) {
        _iterator83.e(err);
      } finally {
        _iterator83.f();
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
    // setBlockId(id) {
    //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
    //     /*for (const exp of this.getChildren()) {
    //         exp.setBlockId(id);
    //     }*/
    //     /*for (const i of this.#contents) {
    //         i.setBlockId(id)
    //     }*/
    // }

  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(IndexKeyElement.prototype), "toJSON", this).call(this);

      ret.index = _classPrivateFieldGet(this, _contents2).map(function (e) {
        return e.toJSON();
      });
      return ret;
    } //#endregion - overrides

  }]);

  return IndexKeyElement;
}(MultiPartExpressionNode);

exports.IndexKeyElement = IndexKeyElement;

var _checkUnused17 = /*#__PURE__*/new WeakSet();

var _checkSubscriptable = /*#__PURE__*/new WeakSet();

var SubscriptedElement = /*#__PURE__*/function (_MultiPartExpressionN16) {
  _inherits(SubscriptedElement, _MultiPartExpressionN16);

  var _super41 = _createSuper(SubscriptedElement);

  /**
   * Creates a new SubscriptedElement - an expression followed by an index, key, or slice
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain two nodex
   */
  function SubscriptedElement(textValue, children) {
    var _this29;

    _classCallCheck(this, SubscriptedElement);

    //if (children.length !== 2) throw new Error("A subscripted element must contain exactly two children")
    var dataType = _classStaticPrivateMethodGet(SubscriptedElement, SubscriptedElement, _findDataType).call(SubscriptedElement, children);

    _this29 = _super41.call(this, textValue, children, _enums.ExpressionEntity.SubscriptedExpression, _enums.ExpressionCategory.MultipartValue, dataType);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this29), _checkSubscriptable);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this29), _checkUnused17);

    children[0].addObserver(_assertThisInitialized(_this29));

    _this29.addRules([_classPrivateMethodGet(_assertThisInitialized(_this29), _checkSubscriptable, _checkSubscriptable2), _classPrivateMethodGet(_assertThisInitialized(_this29), _checkUnused17, _checkUnused18)]);

    return _this29;
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

  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(SubscriptedElement.prototype), "toJSON", this).call(this);

      ret.nodes = this.getChildren().map(function (c) {
        return c.toJSON();
      });
      return ret;
    } //#endregion - overrides
    //#region - extensions

    /**
     * Works out the data type of this subscripted element
     * @param {ExpressionNode[]} children 
     * @returns {DataType}
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

var CalculatedExpression = /*#__PURE__*/function (_MultiPartExpressionN17) {
  _inherits(CalculatedExpression, _MultiPartExpressionN17);

  var _super42 = _createSuper(CalculatedExpression);

  /**
   * Creates a new CalculatedExpression
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain exactly three elements
   */
  function CalculatedExpression(textValue, _children6) {
    var _classStaticPrivateMe;

    var _this30;

    _classCallCheck(this, CalculatedExpression);

    var dataType = _children6.length === 3 ? (_classStaticPrivateMe = _classStaticPrivateMethodGet(CalculatedExpression, CalculatedExpression, _findDataType3)).call.apply(_classStaticPrivateMe, [CalculatedExpression].concat(_toConsumableArray(_children6))) : _children6.length === 2 ? _classStaticPrivateMethodGet(CalculatedExpression, CalculatedExpression, _findPossibleNegativeNumber).call(CalculatedExpression, _children6[1]) : _enums.DataType.Unknown;
    _this30 = _super42.call(this, textValue, _children6, _enums.ExpressionEntity.CalculatedExpression, _enums.ExpressionCategory.MultipartValue, dataType);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this30), _checkCalculatesNone);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this30), _checkInvalid);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this30), _checkForUnexpectedColon5);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this30), _checkUnused19);

    if (_children6.length === 3) {
      _children6[0].addObserver(_assertThisInitialized(_this30));

      _children6[2].addObserver(_assertThisInitialized(_this30));
    } else {
      _children6[1].addObserver(_assertThisInitialized(_this30));
    }

    _this30.addRules([_classPrivateMethodGet(_assertThisInitialized(_this30), _checkCalculatesNone, _checkCalculatesNone2), _classPrivateMethodGet(_assertThisInitialized(_this30), _checkInvalid, _checkInvalid2), _classPrivateMethodGet(_assertThisInitialized(_this30), _checkForUnexpectedColon5, _checkForUnexpectedColon6), _classPrivateMethodGet(_assertThisInitialized(_this30), _checkUnused19, _checkUnused20)]);

    return _this30;
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

      var _iterator84 = _createForOfIteratorHelper(children),
          _step84;

      try {
        for (_iterator84.s(); !(_step84 = _iterator84.n()).done;) {
          var c = _step84.value;
          var found = false;

          var _iterator85 = _createForOfIteratorHelper(nodeChildren),
              _step85;

          try {
            for (_iterator85.s(); !(_step85 = _iterator85.n()).done;) {
              var n = _step85.value;

              if (c.matchesPattern(n)) {
                found = true;
                break;
              }
            }
          } catch (err) {
            _iterator85.e(err);
          } finally {
            _iterator85.f();
          }

          if (!found && !c.is(_enums.ExpressionEntity.VariableName)) {
            return false;
          } else if (c.is(_enums.ExpressionEntity.VariableName)) {
            variables.set(c.getTextValue(), found);
          }
        }
      } catch (err) {
        _iterator84.e(err);
      } finally {
        _iterator84.f();
      }

      if (variables.size === 0) return true;
      return Array.from(variables.values()).filter(function (v) {
        return v === true;
      }).length > 0;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(CalculatedExpression.prototype), "toJSON", this).call(this);

      ret.nodes = this.getChildren().map(function (e) {
        return e.toJSON();
      });
      return ret;
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

var ComparisonExpression = /*#__PURE__*/function (_MultiPartExpressionN18) {
  _inherits(ComparisonExpression, _MultiPartExpressionN18);

  var _super43 = _createSuper(ComparisonExpression);

  /**
   * Creates a new ComparisonExpression 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain exactly three elements
   */
  function ComparisonExpression(textValue, _children7) {
    var _classStaticPrivateMe3;

    var _this31;

    _classCallCheck(this, ComparisonExpression);

    //if (children.length !== 3 || !children[1].is(ExpressionCategory.ComparisonOperators)) 
    //    throw new Error("A comparison expression must contain exactly three children and the middle child must be a comparison operator");
    var dataType = _children7.length === 3 ? (_classStaticPrivateMe3 = _classStaticPrivateMethodGet(ComparisonExpression, ComparisonExpression, _findDataType5)).call.apply(_classStaticPrivateMe3, [ComparisonExpression].concat(_toConsumableArray(_children7))) : _enums.DataType.Unknown;
    _this31 = _super43.call(this, textValue, _children7, _enums.ExpressionEntity.ComparisonExpression, _enums.ExpressionCategory.MultipartValue, dataType);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this31), _checkComparesNone);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this31), _checkComparesLiteral);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this31), _checkForUnexpectedColon7);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this31), _checkUnused21);

    if (_children7.length === 3) {
      _children7[0].addObserver(_assertThisInitialized(_this31));

      _children7[2].addObserver(_assertThisInitialized(_this31));
    }

    _this31.addRules([_classPrivateMethodGet(_assertThisInitialized(_this31), _checkComparesNone, _checkComparesNone2), _classPrivateMethodGet(_assertThisInitialized(_this31), _checkComparesLiteral, _checkComparesLiteral2), _classPrivateMethodGet(_assertThisInitialized(_this31), _checkForUnexpectedColon7, _checkForUnexpectedColon8), _classPrivateMethodGet(_assertThisInitialized(_this31), _checkUnused21, _checkUnused22)]);

    return _this31;
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

        var _iterator86 = _createForOfIteratorHelper(nodeChildren),
            _step86;

        try {
          for (_iterator86.s(); !(_step86 = _iterator86.n()).done;) {
            var n = _step86.value;

            if (children[u].matchesPattern(n)) {
              found = true;
              break;
            }
          }
        } catch (err) {
          _iterator86.e(err);
        } finally {
          _iterator86.f();
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
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(ComparisonExpression.prototype), "toJSON", this).call(this);

      ret.nodes = this.getChildren().map(function (e) {
        return e.toJSON();
      });
      return ret;
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
      boolLiteral: children[2].getTextValue(),
      usedIn: comparison.getContextOfUse()
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

var BooleanExpression = /*#__PURE__*/function (_MultiPartExpressionN19) {
  _inherits(BooleanExpression, _MultiPartExpressionN19);

  var _super44 = _createSuper(BooleanExpression);

  /**
   * Creates a new BooleanExpression 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain multiple elements
   */
  function BooleanExpression(textValue, _children8) {
    var _this32;

    _classCallCheck(this, BooleanExpression);

    var dataType = _classStaticPrivateMethodGet(BooleanExpression, BooleanExpression, _findDataType7).call(BooleanExpression, _children8);

    _this32 = _super44.call(this, textValue, _children8, _enums.ExpressionEntity.BooleanExpression, _enums.ExpressionCategory.MultipartValue, dataType);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this32), _checkNaturalLanguage);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this32), _checkForUnexpectedColon9);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this32), _checkUnused23);

    if (_children8.length === 3 && _children8[1].is(_enums.ExpressionCategory.LogicalOperators)) {
      _children8[0].addObserver(_assertThisInitialized(_this32));

      _children8[2].addObserver(_assertThisInitialized(_this32));
    }

    _this32.addRules([_classPrivateMethodGet(_assertThisInitialized(_this32), _checkNaturalLanguage, _checkNaturalLanguage2), _classPrivateMethodGet(_assertThisInitialized(_this32), _checkForUnexpectedColon9, _checkForUnexpectedColon10), _classPrivateMethodGet(_assertThisInitialized(_this32), _checkUnused23, _checkUnused24)]);

    return _this32;
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

      var _iterator87 = _createForOfIteratorHelper(children),
          _step87;

      try {
        for (_iterator87.s(); !(_step87 = _iterator87.n()).done;) {
          var c = _step87.value;

          if (c.is(_enums.ExpressionEntity.NotOperator)) {
            continue; //return false;
          }

          var found = false;

          var _iterator88 = _createForOfIteratorHelper(nodeChildren),
              _step88;

          try {
            for (_iterator88.s(); !(_step88 = _iterator88.n()).done;) {
              var n = _step88.value;

              if (n.is(_enums.ExpressionEntity.NotOperator)) {
                continue;
              }

              if (c.matchesPattern(n)) {
                found = true;
                break;
              }
            }
          } catch (err) {
            _iterator88.e(err);
          } finally {
            _iterator88.f();
          }

          if (!found && !c.is(_enums.ExpressionEntity.VariableName)) {
            return false;
          } else if (c.is(_enums.ExpressionEntity.VariableName)) {
            variables.set(c.getTextValue(), found);
          }
        }
      } catch (err) {
        _iterator87.e(err);
      } finally {
        _iterator87.f();
      }

      if (variables.size === 0) return true;
      return Array.from(variables.values()).filter(function (v) {
        return v === true;
      }).length > 0;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(BooleanExpression.prototype), "toJSON", this).call(this);

      ret.nodes = this.getChildren().map(function (e) {
        return e.toJSON();
      });
      return ret;
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

var IteratorExpression = /*#__PURE__*/function (_MultiPartExpressionN20) {
  _inherits(IteratorExpression, _MultiPartExpressionN20);

  var _super45 = _createSuper(IteratorExpression);

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
    var _this33;

    _classCallCheck(this, IteratorExpression);

    _this33 = _super45.call(this, textValue, _children9, _enums.ExpressionEntity.IteratorExpression, _enums.ExpressionCategory.MultipartValue, _enums.DataType.NA);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this33), _checkForUnexpectedColon11);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this33), _checkForOverwrite);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this33), _setLoopVariableDataTypes);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this33), _setObservers);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this33), _setRoles);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this33), _inIndex, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this33), _iterable, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this33), _loopVariables, {
      writable: true,
      value: []
    });

    _classPrivateMethodGet(_assertThisInitialized(_this33), _setRoles, _setRoles2).call(_assertThisInitialized(_this33));

    _this33.addRules([_classPrivateMethodGet(_assertThisInitialized(_this33), _checkForUnexpectedColon11, _checkForUnexpectedColon12), _classPrivateMethodGet(_assertThisInitialized(_this33), _checkForOverwrite, _checkForOverwrite2)]);

    return _this33;
  }
  /**
   * @override
   */


  _createClass(IteratorExpression, [{
    key: "checkForSymptoms",
    value: function checkForSymptoms() {
      this.checkRules(this);

      _classPrivateFieldGet(this, _iterable).checkForSymptoms();

      var _iterator89 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _loopVariables)),
          _step89;

      try {
        for (_iterator89.s(); !(_step89 = _iterator89.n()).done;) {
          var v = _step89.value;
          v.checkForSymptoms();
        }
      } catch (err) {
        _iterator89.e(err);
      } finally {
        _iterator89.f();
      }
    } //#region - overrides

    /**
     * @override
     */

  }, {
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      var variables = _classPrivateFieldGet(this, _iterable).getVariableExpressions();

      var _iterator90 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _loopVariables)),
          _step90;

      try {
        for (_iterator90.s(); !(_step90 = _iterator90.n()).done;) {
          var i = _step90.value;
          variables = variables.concat(i.getVariableExpressions());
        }
      } catch (err) {
        _iterator90.e(err);
      } finally {
        _iterator90.f();
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
    // setBlockId(id) {
    //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
    //     /*for (const exp of this.getChildren()) {
    //         exp.setBlockId(id);
    //     }*/
    //     //this.#iterable.setBlockId(id);
    // }

  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(IteratorExpression.prototype), "toJSON", this).call(this);

      ret.loopVariables = _classPrivateFieldGet(this, _loopVariables).map(function (v) {
        return v.toJSON();
      });
      ret.iterable = _classPrivateFieldGet(this, _iterable).toJSON();
      return ret;
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

  var _iterator115 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _loopVariables)),
      _step115;

  try {
    for (_iterator115.s(); !(_step115 = _iterator115.n()).done;) {
      var v = _step115.value;
      v.setAssignedOrChanged();
    }
  } catch (err) {
    _iterator115.e(err);
  } finally {
    _iterator115.f();
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
        var _iterator116 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _loopVariables)),
            _step116;

        try {
          for (_iterator116.s(); !(_step116 = _iterator116.n()).done;) {
            var l = _step116.value;
            l.setDataType(_enums.DataType.Unknown);
          }
        } catch (err) {
          _iterator116.e(err);
        } finally {
          _iterator116.f();
        }
      }
    } else if (funcEntity === _enums.ExpressionEntity.RangeFunction && _classPrivateFieldGet(this, _loopVariables).length === 1) {
      _classPrivateFieldGet(this, _loopVariables)[0].setDataType(_enums.DataType.Int);
    } else if (_utils.builtInReturnLookup.get(funcEntity) === _enums.DataType.String && _classPrivateFieldGet(this, _loopVariables).length === 1) {
      _classPrivateFieldGet(this, _loopVariables)[0].setDataType(_enums.DataType.String);
    } else {
      var _iterator117 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _loopVariables)),
          _step117;

      try {
        for (_iterator117.s(); !(_step117 = _iterator117.n()).done;) {
          var _l = _step117.value;

          _l.setDataType(_enums.DataType.Unknown);
        }
      } catch (err) {
        _iterator117.e(err);
      } finally {
        _iterator117.f();
      }
    }
  } else {
    _classPrivateFieldGet(this, _iterable).addObserver(this);

    _classPrivateMethodGet(this, _setLoopVariableDataTypes, _setLoopVariableDataTypes2).call(this);
  }
}

function _setLoopVariableDataTypes2() {
  var iterType = _classPrivateFieldGet(this, _iterable).getDataType() === _enums.DataType.String || _classPrivateFieldGet(this, _iterable).getDataType() === _enums.DataType.File ? _enums.DataType.String : _enums.DataType.Unknown;

  var _iterator118 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _loopVariables)),
      _step118;

  try {
    for (_iterator118.s(); !(_step118 = _iterator118.n()).done;) {
      var v = _step118.value;
      v.setDataType(iterType);
    }
  } catch (err) {
    _iterator118.e(err);
  } finally {
    _iterator118.f();
  }
}

function _checkForOverwrite2(exp) {
  var symptoms = [];

  var iterableVars = _classPrivateFieldGet(exp, _iterable).getVariableExpressions();

  var _iterator119 = _createForOfIteratorHelper(_classPrivateFieldGet(exp, _loopVariables)),
      _step119;

  try {
    for (_iterator119.s(); !(_step119 = _iterator119.n()).done;) {
      var target = _step119.value;

      var _iterator120 = _createForOfIteratorHelper(iterableVars),
          _step120;

      try {
        for (_iterator120.s(); !(_step120 = _iterator120.n()).done;) {
          var i = _step120.value;

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
        _iterator120.e(err);
      } finally {
        _iterator120.f();
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
    _iterator119.e(err);
  } finally {
    _iterator119.f();
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

var LambdaExpression = /*#__PURE__*/function (_MultiPartExpressionN21) {
  _inherits(LambdaExpression, _MultiPartExpressionN21);

  var _super46 = _createSuper(LambdaExpression);

  /** @type {ExpressionNode[][]} */

  /** @type {ExpressionNode} */

  /**
   * Creates a new BooleanExpression 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain multiple elements
   */
  function LambdaExpression(textValue, children) {
    var _this34;

    _classCallCheck(this, LambdaExpression);

    if (children.length < 4) {
      throw new Error("A lambda expression must have a minimum of 4 children");
    } // Separate args and return


    var parts = _rawtextprocessing.StatementProcessor.split(children.slice(1), _enums.ExpressionEntity.Colon);

    if (parts.length !== 2) {
      throw new Error("Lambda expects at least one argument and a return value");
    }

    var args = _rawtextprocessing.StatementProcessor.split(parts[0], _enums.ExpressionEntity.Comma);

    var _iterator91 = _createForOfIteratorHelper(args),
        _step91;

    try {
      for (_iterator91.s(); !(_step91 = _iterator91.n()).done;) {
        var a = _step91.value;

        var _iterator92 = _createForOfIteratorHelper(a),
            _step92;

        try {
          for (_iterator92.s(); !(_step92 = _iterator92.n()).done;) {
            var item = _step92.value;

            if (item.is(_enums.ExpressionEntity.VariableName)) {
              item.setAssignedOrChanged();
              item.setDataType(_enums.DataType.Unknown);
            }
          }
        } catch (err) {
          _iterator92.e(err);
        } finally {
          _iterator92.f();
        }
      }
    } catch (err) {
      _iterator91.e(err);
    } finally {
      _iterator91.f();
    }

    var ret = _rawtextprocessing.StatementProcessor.createTree(parts[1]);

    if (ret.length !== 1) {
      throw new Error("Lambda can only have one return value");
    }

    _this34 = _super46.call(this, textValue, children, _enums.ExpressionEntity.LambdaDefinitionStatement, _enums.ExpressionCategory.BlockDefinitions, ret[0].getDataType());

    _classPrivateFieldInitSpec(_assertThisInitialized(_this34), _arguments3, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this34), _return, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this34), _arguments3, args);

    _classPrivateFieldSet(_assertThisInitialized(_this34), _return, ret[0]);

    ret[0].addObserver(_assertThisInitialized(_this34));
    return _this34;
  }
  /**
   * @override
   */


  _createClass(LambdaExpression, [{
    key: "getVariableExpressions",
    value: function getVariableExpressions() {
      var variables = [];

      var _iterator93 = _createForOfIteratorHelper(this.getChildren()),
          _step93;

      try {
        for (_iterator93.s(); !(_step93 = _iterator93.n()).done;) {
          var item = _step93.value;

          if (item.is(_enums.ExpressionEntity.VariableName)) {
            variables.push(item);
          } else {
            variables = variables.concat(item.getVariableExpressions());
          }
        }
      } catch (err) {
        _iterator93.e(err);
      } finally {
        _iterator93.f();
      }

      return variables;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(LambdaExpression.prototype), "toJSON", this).call(this);

      ret.arguments = _classPrivateFieldGet(this, _arguments3).map(function (argComp) {
        return argComp.map(function (a) {
          return a.toJSON();
        });
      });
      ret["return"] = _classPrivateFieldGet(this, _return).toJSON();
      return ret;
    }
  }]);

  return LambdaExpression;
}(MultiPartExpressionNode);

exports.LambdaExpression = LambdaExpression;

var _checkReturnsBool = /*#__PURE__*/new WeakSet();

var TernaryExpression = /*#__PURE__*/function (_MultiPartExpressionN22) {
  _inherits(TernaryExpression, _MultiPartExpressionN22);

  var _super47 = _createSuper(TernaryExpression);

  /**
   * Creates a new TernaryExpression 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain multiple elements
   */
  function TernaryExpression(textValue, _children10) {
    var _this35;

    _classCallCheck(this, TernaryExpression);

    if (_children10.length !== 5) {
      throw new Error("Ternary should contain 5 children");
    }

    var dataType = _classStaticPrivateMethodGet(TernaryExpression, TernaryExpression, _findDataType9).call(TernaryExpression, _children10);

    _this35 = _super47.call(this, textValue, _children10, _enums.ExpressionEntity.TernaryStatement, _enums.ExpressionCategory.BlockDefinitionStatement, dataType);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this35), _checkReturnsBool);

    _children10[0].addObserver(_assertThisInitialized(_this35));

    _children10[4].addObserver(_assertThisInitialized(_this35));

    _this35.addRule(_classPrivateMethodGet(_assertThisInitialized(_this35), _checkReturnsBool, _checkReturnsBool2));

    return _this35;
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
  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(TernaryExpression.prototype), "toJSON", this).call(this);

      ret.nodes = this.getChildren().map(function (e) {
        return e.toJSON();
      });
      return ret;
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

var ListComprehensionExpression = /*#__PURE__*/function (_MultiPartExpressionN23) {
  _inherits(ListComprehensionExpression, _MultiPartExpressionN23);

  var _super48 = _createSuper(ListComprehensionExpression);

  /**
   * Creates a new ListComprehensionExpression 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain multiple elements
   */
  function ListComprehensionExpression(textValue, _children11) {
    var _this36;

    _classCallCheck(this, ListComprehensionExpression);

    if (_children11.length < 3 || _children11.length > 5) {
      throw new Error("List comprehension should contain 3-5 children");
    }

    _this36 = _super48.call(this, textValue, _children11, _enums.ExpressionEntity.ListComprehension, _enums.ExpressionCategory.BlockDefinitionStatement, _enums.DataType.List);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this36), _processNestedListComp);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this36), _indexOfIterator);

    var blockId = "".concat(_children11[0].getStartLineNumber(), "-listComprehension-").concat(_children11[0].getDocumentStartIndex());

    _this36.setBlockId(blockId);

    _this36.setScopeId(blockId);
    /*for (const c of children) {
        c.setBlockId(blockId);
        c.setScopeId(blockId);
    }*/


    _classPrivateMethodGet(_assertThisInitialized(_this36), _processNestedListComp, _processNestedListComp2).call(_assertThisInitialized(_this36));

    return _this36;
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
  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(ListComprehensionExpression.prototype), "toJSON", this).call(this);

      ret.nodes = this.getChildren().map(function (e) {
        return e.toJSON();
      });
      return ret;
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

      var _iterator121 = _createForOfIteratorHelper(listCompLoopVars),
          _step121;

      try {
        for (_iterator121.s(); !(_step121 = _iterator121.n()).done;) {
          var loopVar = _step121.value;

          if (loopVar.getTextValue() === nestedIterator.getTextValue()) {
            loopVar.addObserver(nestedIterator);
            nestedIterator.setDataType(loopVar.getDataType());
            nestedIterator.setAssignedOrChanged();
          }
        }
      } catch (err) {
        _iterator121.e(err);
      } finally {
        _iterator121.f();
      }
    }
  }
}

var _checkReturnGroup = /*#__PURE__*/new WeakSet();

var _getSummaryOfContentInParentheses = /*#__PURE__*/new WeakSet();

var _checkForUnexpectedColon13 = /*#__PURE__*/new WeakSet();

var _checkReturnNone = /*#__PURE__*/new WeakSet();

var _checkAssignmentInReturn = /*#__PURE__*/new WeakSet();

var ReturnStatement = /*#__PURE__*/function (_MultiPartExpressionN24) {
  _inherits(ReturnStatement, _MultiPartExpressionN24);

  var _super49 = _createSuper(ReturnStatement);

  /**
   * Creates a new ReturnStatement 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain multiple elements
   */
  function ReturnStatement(textValue, children) {
    var _this37;

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

    _this37 = _super49.call(this, textValue, children, _enums.ExpressionEntity.ReturnStatement, _enums.ExpressionCategory.MultipartValue, dataType);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this37), _checkAssignmentInReturn);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this37), _checkReturnNone);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this37), _checkForUnexpectedColon13);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this37), _getSummaryOfContentInParentheses);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this37), _checkReturnGroup);

    if (children.length === 2) {
      children[1].addObserver(_assertThisInitialized(_this37));
    }

    _this37.addRules([_classPrivateMethodGet(_assertThisInitialized(_this37), _checkAssignmentInReturn, _checkAssignmentInReturn2), _classPrivateMethodGet(_assertThisInitialized(_this37), _checkReturnNone, _checkReturnNone2), _classPrivateMethodGet(_assertThisInitialized(_this37), _checkReturnGroup, _checkReturnGroup2), _classPrivateMethodGet(_assertThisInitialized(_this37), _checkForUnexpectedColon13, _checkForUnexpectedColon14)]);

    return _this37;
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

  }, {
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(ReturnStatement.prototype), "toJSON", this).call(this);

      ret.returnedValue = this.getReturnedValue().map(function (v) {
        return v.toJSON();
      });
      return ret;
    }
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

var ImportStatement = /*#__PURE__*/function (_MultiPartExpressionN25) {
  _inherits(ImportStatement, _MultiPartExpressionN25);

  var _super50 = _createSuper(ImportStatement);

  /** @type {ModuleExpression} */

  /** @type {ExpressionNode[]} */

  /**
   * Creates a new ImportStatement 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   */
  function ImportStatement(textValue, children) {
    var _this38;

    _classCallCheck(this, ImportStatement);

    _this38 = _super50.call(this, textValue, children, _enums.ExpressionEntity.ImportStatement, _enums.ExpressionCategory.KeywordStatement, _enums.DataType.NA);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this38), _sourceModule, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this38), _importedEntities, {
      writable: true,
      value: []
    });

    if (children.length > 1) {
      _classPrivateFieldSet(_assertThisInitialized(_this38), _sourceModule, children[1]);

      if (children[0].is(_enums.ExpressionEntity.FromKeyword)) {
        for (var i = 3; i < children.length; i++) {
          if (!children[i].is(_enums.ExpressionEntity.Comma)) {
            _classPrivateFieldGet(_assertThisInitialized(_this38), _importedEntities).push(children[i]);
          }
        }
      }
    }

    return _this38;
  }

  _createClass(ImportStatement, [{
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(ImportStatement.prototype), "toJSON", this).call(this);

      ret.importedEntities = _classPrivateFieldGet(this, _importedEntities).map(function (i) {
        return i.toJSON();
      });
      return ret;
    }
  }]);

  return ImportStatement;
}(MultiPartExpressionNode);

exports.ImportStatement = ImportStatement;

var _values3 = /*#__PURE__*/new WeakMap();

var KeywordStatement = /*#__PURE__*/function (_MultiPartExpressionN26) {
  _inherits(KeywordStatement, _MultiPartExpressionN26);

  var _super51 = _createSuper(KeywordStatement);

  /**
   * Creates a new KeywordStatement 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   */
  function KeywordStatement(textValue, children) {
    var _this39;

    _classCallCheck(this, KeywordStatement);

    if (children.length === 0) throw new Error("Not enough elements to make a statement");
    var entity = _enums.ExpressionEntity.Unknown;
    if (children[0].is(_enums.ExpressionEntity.AssertKeyword)) entity = _enums.ExpressionEntity.AssertStatement;else if (children[0].is(_enums.ExpressionEntity.GlobalKeyword)) entity = _enums.ExpressionEntity.GlobalStatement;else if (children[0].is(_enums.ExpressionEntity.RaiseKeyword)) entity = _enums.ExpressionEntity.ThrowStatement;else throw new Error("Unknown keyword");
    _this39 = _super51.call(this, textValue, children, entity, _enums.ExpressionCategory.KeywordStatement, _enums.DataType.NA);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this39), _values3, {
      writable: true,
      value: []
    });

    _classPrivateFieldSet(_assertThisInitialized(_this39), _values3, children.slice(1));

    return _this39;
  }

  _createClass(KeywordStatement, [{
    key: "toJSON",
    value: function toJSON() {
      var ret = _get(_getPrototypeOf(KeywordStatement.prototype), "toJSON", this).call(this);

      ret.keyword = this.getChildren()[0].toJSON();
      ret.values = _classPrivateFieldGet(this, _values3).map(function (v) {
        return v.toJSON();
      });
      return ret;
    }
  }]);

  return KeywordStatement;
}(MultiPartExpressionNode); //#endregion - other multipart


exports.KeywordStatement = KeywordStatement;