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
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
/**
 * A class representing a statement, which will most often be
 * a complete line of code, but may also be made up of multiple 
 * lines, such as when a long calculation is split over multiple
 * lines. The use of "statement" in this library does not quite
 * correspond to the technical definition of a statement in 
 * programming. For example, function declaration lines are treated
 * as statements.
 */
var _rawText = /*#__PURE__*/new WeakMap();
var _expressions = /*#__PURE__*/new WeakMap();
var _indentation = /*#__PURE__*/new WeakMap();
var _indent = /*#__PURE__*/new WeakMap();
var _expressionTree = /*#__PURE__*/new WeakMap();
var _completeProcessing = /*#__PURE__*/new WeakSet();
var _checkForSplitFunctionCalls = /*#__PURE__*/new WeakSet();
var _checkSymptoms = /*#__PURE__*/new WeakSet();
var _checkUnexpectedColon = /*#__PURE__*/new WeakSet();
var _checkAssignmentInBoolean = /*#__PURE__*/new WeakSet();
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
    _defineProperty(_assertThisInitialized(_this), "lineNumbers", new Set());
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
    _this.lineNumbers.add(firstLineNumber);
    _classPrivateFieldSet(_assertThisInitialized(_this), _indent, indent);
    _classPrivateFieldSet(_assertThisInitialized(_this), _indentation, indent.getSpaceCount() + indent.getTabCount());
    if (_expressions2.length > 0) {
      if (_expressions2[_expressions2.length - 1].is(_enums.ExpressionEntity.ContinuationLine)) {
        _expressions2.pop();
      }
      if (_expressions2.length > 0 && _expressions2[0].isOneOf([_enums.ExpressionEntity.IfDefinition, _enums.ExpressionEntity.ElifDefinition, _enums.ExpressionEntity.WhileDefinition])) {
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
      return this.lineNumbers;
    }

    /**
     * Gets the line number of the first line in the statement.
     * @returns {Number} The line number or -1 if there are no line numbers
     */
  }, {
    key: "getFirstLineNumber",
    value: function getFirstLineNumber() {
      return this.lineNumbers.size > 0 ? Math.min.apply(Math, _toConsumableArray(Array.from(this.lineNumbers))) : -1;
    }

    /**
     * Gets the line number of the last line in the statement.
     * @returns {Number} The line number or -1 if there are no line numbers
     */
  }, {
    key: "getLastLineNumber",
    value: function getLastLineNumber() {
      return this.lineNumbers.size > 0 ? Math.max.apply(Math, _toConsumableArray(Array.from(this.lineNumbers))) : -1;
    }

    /**
     * Adds a line number that the statement occurs on.
     * @param {Number} lineNum The line number to add
     */
  }, {
    key: "addLineNumber",
    value: function addLineNumber(lineNum) {
      this.lineNumbers.add(lineNum);
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
      if (_classPrivateFieldGet(this, _expressionTree) === undefined) {
        return _classPrivateFieldGet(this, _expressions);
      }
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

    /**
     * Helper method called when adding a continuation line. Addresses the edge case that the
     * parentheses in function call are on a separate line from the function name.
     * @param {ExpressionNode[]} continuingExpressions 
     */

    /**
     * Rule checker. Checks symptoms in the raw expressions
     */

    /**
     * 
     * @param {Statement} statement 
     * @returns 
     */

    /**
     * Rule checker. Checks if the statement contains the AssignedInBoolean symptom and if so,
     * adds a new Symptom object.
     * @param {Statement} statement
     */

    /**
     * Helper method. Checks if the expression at index i indicates the AndOr symptom.
     * @param {ExpressionNode[]} expressions 
     * @param {Number} i 
     * @returns {Boolean}
     */

    /**
     * Helper method. Checks for the presence of a split comparison operator.
     * @param {ExpressionNode[]} expressions 
     * @param {Number} i 
     * @returns {Boolean}
     */

    /**
     * Helper method. Checks if the expression at index i indicates the AndOr symptom.
     * @param {ExpressionNode[]} expressions 
     * @param {Number} i 
     * @returns {Boolean}
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        expressions: _classPrivateFieldGet(this, _expressionTree).map(function (e) {
          return e.toJSON();
        })
      };
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
      }));
      //symptoms.push(SymptomFinder.createStatementSymptom(SymptomType.AndOr, expressions, i, i+1));
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
  }

  //#region - overrides
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
    }

    //#endregion - overrides

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
      _rawtextprocessing.StatementProcessor.connectUserDefinedMethods(statement, scope);
      _rawtextprocessing.StatementProcessor.makeGraphConnections(_classPrivateFieldGet(this, _statements));
      /*let nonEmptyStatements = this.#statements.filter(s => !s.isBlank());
       if (nonEmptyStatements.length > 1 && !statement.isBlank()) {
          
          let lastStatement = nonEmptyStatements[nonEmptyStatements.length - 2];
          let lastStatementExpressions;
          if (lastStatement.isBlockStatement()) {
              lastStatementExpressions = lastStatement.getDefinitionStatement().getExpressions();
              let firstExpOfLastStatement = lastStatement.getFirstExpression();
              let firstExpOfNewStatement = statement.getFirstExpression();
              if (!(firstExpOfLastStatement.isOneOf([ExpressionEntity.IfDefinitionStatement, ExpressionEntity.ElifDefinitionStatement]) && firstExpOfNewStatement.isOneOf([ExpressionEntity.ElseDefinitionStatement, ExpressionEntity.ElifDefinitionStatement]))) {
                  const blockExpressions = lastStatement.getExpressions();
                  // connect last expression to statement first
                  blockExpressions[blockExpressions.length - 1].addConnection(statement.getFirstExpression());
                  // if the last statement in lastStatement is a block, connect its definition to statement first
                  const blockStatements = lastStatement.getStatements();
                  if (blockStatements.length > 1 && blockStatements[blockStatements.length - 1].isBlockStatement()) {
                      blockStatements[blockStatements.length - 1].getDefinitionStatement().getFirstExpression().addConnection(statement.getFirstExpression());
                  }
              }
              if (!firstExpOfNewStatement.isOneOf([ExpressionEntity.ElifDefinitionStatement, ExpressionEntity.ElseDefinitionStatement])
                  && firstExpOfLastStatement.isOneOf([ExpressionEntity.IfDefinitionStatement, ExpressionEntity.ElifDefinitionStatement, ExpressionEntity.ElseDefinitionStatement])) {
                  const allConditionalStatements = [];
                  for (let i = nonEmptyStatements.length - 2; i >= 0; i--) {
                      const firstOfNonEmpty = nonEmptyStatements[i].getFirstExpression();
                      if (firstOfNonEmpty.isOneOf([ExpressionEntity.IfDefinitionStatement, ExpressionEntity.ElifDefinitionStatement, ExpressionEntity.ElseDefinitionStatement])) {
                          allConditionalStatements.push(nonEmptyStatements[i]);
                          if (firstOfNonEmpty.is(ExpressionEntity.IfDefinitionStatement)) {
                              break;
                          }
                      }
                  }
                  for (const condStatement of allConditionalStatements) {
                      const allNestedStatements = condStatement.getStatements();
                      const firstExpOfLast = allNestedStatements[allNestedStatements.length - 1].getFirstExpression();
                      firstExpOfLast.addConnection(statement.getFirstExpression());
                  }
                  // MOVE STATEMENT CONNECTION TO STATEMENT PROCESSING and call from statement as well...check if identical first?
              }
          }
          else {
              lastStatementExpressions = lastStatement.getExpressions();
          }
          lastStatementExpressions[0].addConnection(statement.getFirstExpression());
      }*/
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
      }
      // check children
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
      }
      // check children
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
    }
    //#endregion - extensions

    //#region - symptoms

    /**
     * Rule function. If the block is an except statement, checks if the same exception is thrown in the block
     * @param {BlockStatement} statement 
     * @param {Statement} definition
     * @returns {Symptom[]}
     */

    /**
     * Rule function. If the block is a while loop, checks if it is infinite
     * @param {BlockStatement} statement 
     * @param {Statement} definition
     * @returns {Symptom[]}
     */

    /**
     * Rule function. If the block is a for loop, checks if an iterator variable is modified then not used
     * @param {BlockStatement} statement 
     * @param {Statement} definition
     * @returns {Symptom[]}
     */
  }, {
    key: "toJSON",
    value:
    //#endregion - symptoms

    function toJSON() {
      return {
        definition: this.getDefinitionStatement().toJSON(),
        statements: _classPrivateFieldGet(this, _statements).slice(1).map(function (s) {
          return s.toJSON();
        })
      };
    }
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
          if ((0, _utils.containsExit)(exp)) return symptoms;
          // Gets the names of all modified variables inside the loop
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