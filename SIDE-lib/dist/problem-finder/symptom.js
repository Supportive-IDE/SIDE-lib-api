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
/**
 * A class representing a symptom that may indicate a misconception
 */
var _id = /*#__PURE__*/new WeakMap();
var _line = /*#__PURE__*/new WeakMap();
var _docIndex = /*#__PURE__*/new WeakMap();
var _lineIndex = /*#__PURE__*/new WeakMap();
var _affectedText = /*#__PURE__*/new WeakMap();
var _additionalInfo = /*#__PURE__*/new WeakMap();
var _blockId = /*#__PURE__*/new WeakMap();
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
     * Creates a String representation of the symptom
     * @returns {String} A String representation of the symptom
     */
  }, {
    key: "toString",
    value: function toString() {
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
      if (additionalInfo.hasOwnProperty("usedIn")) obj.usedIn = additionalInfo.usedIn;
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
    }
  }, {
    key: "checkBooleanCompare",
    value: function checkBooleanCompare(expression) {
      var parent = expression.getParent();
      if (parent !== undefined) {
        if (parent.is(_enums.ExpressionEntity.AssignmentStatement)) {
          // check on value side... no, only if bool literal comparison
        } else if (parent.isOneOf([_enums.ExpressionEntity.BooleanExpression, _enums.ExpressionEntity.UserDefinedFunctionCall, _enums.ExpressionEntity.BuiltInFunctionCall, _enums.ExpressionEntity.IfDefinitionStatement, _enums.ExpressionEntity.ElifDefinitionStatement, _enums.ExpressionEntity.WhileDefinitionStatement, _enums.ExpressionEntity.ReturnStatement, _enums.ExpressionEntity.AssertStatement, _enums.ExpressionEntity.ComparisonExpression, _enums.ExpressionEntity.GroupStatement, _enums.ExpressionEntity.TernaryStatement, _enums.ExpressionEntity.BuiltInMethodCall, _enums.ExpressionEntity.UserDefinedMethodCall])) {
          //console.log("should be safe construct");
        } else {
          //    console.log("stop"); // leaving out compound types, global variable statements, calculated expression
        }
      }
    }
  }]);
  return SymptomFinder;
}();
exports.SymptomFinder = SymptomFinder;
_defineProperty(SymptomFinder, "symptoms", []);
_defineProperty(SymptomFinder, "constructs", []);
_defineProperty(SymptomFinder, "text", "");