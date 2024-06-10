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
var _interfaces = require("./interfaces.js");
var _asg = require("./asg.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
/**
 * A class storing information about a Python document, including the variables used, functions defined, and any detected symptoms and misconceptions.
 */
var _text = /*#__PURE__*/new WeakMap();
var _statements = /*#__PURE__*/new WeakMap();
var _documentRoot = /*#__PURE__*/new WeakMap();
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
var _processUnconnectedMethods = /*#__PURE__*/new WeakSet();
var _isImportedEntity = /*#__PURE__*/new WeakSet();
var _getVariableNamesMatchingTypeNames = /*#__PURE__*/new WeakSet();
var _updateBlock = /*#__PURE__*/new WeakSet();
var _processListComprehensions = /*#__PURE__*/new WeakSet();
var _connectMethodToClass = /*#__PURE__*/new WeakSet();
var _prepareListComprehensions = /*#__PURE__*/new WeakSet();
var _createNewBranchBlock = /*#__PURE__*/new WeakSet();
var _createNewFunctionBlock = /*#__PURE__*/new WeakSet();
var _createNewClassBlock = /*#__PURE__*/new WeakSet();
var _shiftCurrentBlock = /*#__PURE__*/new WeakSet();
var DocInfo = /*#__PURE__*/function () {
  /** @type {string} */
  // The raw text in the document

  /** @type {Statement} */

  /** @type {StatementBlock} */

  /** @type {Map<String, UserDefinedFunctionExpression>} */

  /** @type {Map<String, ClassNode} */

  /** @type {Map<string, ModuleInfo>} */

  /**
   * Creates a new DocInfo object from Python raw text
   * @param {string} text The raw text of the Python file
   */
  function DocInfo(_text2) {
    _classCallCheck(this, DocInfo);
    _classPrivateMethodInitSpec(this, _shiftCurrentBlock);
    _classPrivateMethodInitSpec(this, _createNewClassBlock);
    _classPrivateMethodInitSpec(this, _createNewFunctionBlock);
    _classPrivateMethodInitSpec(this, _createNewBranchBlock);
    _classPrivateMethodInitSpec(this, _prepareListComprehensions);
    _classPrivateMethodInitSpec(this, _connectMethodToClass);
    _classPrivateMethodInitSpec(this, _processListComprehensions);
    _classPrivateMethodInitSpec(this, _updateBlock);
    _classPrivateMethodInitSpec(this, _getVariableNamesMatchingTypeNames);
    _classPrivateMethodInitSpec(this, _isImportedEntity);
    _classPrivateMethodInitSpec(this, _processUnconnectedMethods);
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
    _defineProperty(this, "variables", void 0);
    _defineProperty(this, "userDefinedFunctions", void 0);
    _defineProperty(this, "userDefinedClasses", void 0);
    _defineProperty(this, "modules", void 0);
    _classPrivateFieldSet(this, _text, _text2);
    _classPrivateFieldSet(this, _documentRoot, new _block.ScopeBlock());
    this.variables = new Map();
    this.modules = new Map();
    _symptom.SymptomFinder.symptoms = [];
    _classPrivateMethodGet(this, _processSource, _processSource2).call(this, _text2);
  }

  //#region setup
  /**
   * Main processing method. Converts the raw source code to an AST
   * @param {String} text 
   */

  /**
   * Gets all the scope blocks in the document
   * @returns {ScopeBlock[]}
   */

  /**
   * Checks for a specific symptom - variables with the same name as a user defined function.
   * Can only be run after all variable and function processing is complete.
   */

  /**
   * Helper method to find user defined functions with the same name as built in functions
   * @returns {String[]} An array of the function names
   */

  /**
   * Converts any calls to built in functions that have the same name as a user defined function to
   * the user defined function call
   * @param {String[]} functionNames 
   */

  /**
   * Helper method. Finds all user defined functions in all scopes and returns a map.
   * @returns {Map<String, UserDefinedFunctionExpression>}
   */

  /**
   * Helper method to handle any calls to unknown functions
   */

  /**
   * Helper method to handle any calls to unknown functions
   */

  /**
   * Helper method to check if an unknown function is an imported entity
   * @param {String} funcName 
   * @param {ScopeBlock} scopeBlock 
   * @returns {Boolean}
   */

  /**
   * Gets the names of variables in the current block that have names matching Python
   * type classes.
   * @param {StatementBlock} currentBlock 
   * @returns {String[]}
   */

  /**
   * Adds the most recent statement to the current block or creates a new block as needed
   * @param {Statement} lastStatement
   * @param {StatementBlock} currentBlock
   * @returns {StatementBlock}
   */

  /**
   * Helper method to connect a method to its containing class
   * @param {FunctionBlock} methodBlock 
   * @param {MethodDefinitionStatement} methodDefinition
   */

  /**
   * Helper method that finds any list comprehensions within the statement. The list comprehensions
   * are copied and returned as an array to be added to a new block. The original expressions are converted
   * to placeholder data. This is to avoid variables within the list comprehension being counted twice.
   * @param {Statement} statement 
   * @returns {ListComprehensionExpression[]}
   */

  /**
   * Helper method. Creates a block for a new branch
   * @param {StatementBlock} currentBlock 
   * @param {Statement} lastStatement 
   * @param {Number} statementIndent 
   * @param {BlockStatement} blockStatementToUpdate
   * @returns {StatementBlock}
   */

  /**
   * Helper method. Creates a block for a new function
   * @param {StatementBlock} currentBlock 
   * @param {Statement} lastStatement 
   * @param {Number} statementIndent 
   * @returns {StatementBlock}
   */

  /**
   * Helper method. Creates a block for a new class
   * @param {StatementBlock} currentBlock 
   * @param {Statement} lastStatement 
   * @param {Number} statementIndent 
   * @returns {StatementBlock}
   */

  /**
   * 
   * @param {Number} statementIndent 
   * @param {StatementBlock} currentBlock 
   * @param {Number} statementStartLine 
   * @returns 
   */
  _createClass(DocInfo, [{
    key: "getUserDefinedFunctions",
    value:
    //#endregion

    /**
     * Gets all UserDefinedFunctions in the document.
     * @returns {Map<String, UserDefinedFunctionExpression>} A Map, where each key is the name of a function and each value is a UserDefinedFunction object
     */
    function getUserDefinedFunctions() {
      return this.userDefinedFunctions;
    }

    /**
     * Gets all user defined classes in the document
     * @returns {Map<string, DataType}
     */
  }, {
    key: "getUserDefinedClasses",
    value: function getUserDefinedClasses() {
      return this.userDefinedClasses;
    }

    /**
     * Gets all variables defined in the document.
     * @returns {Map<String, VariableInfo[]>}
     */
  }, {
    key: "getVariables",
    value: function getVariables() {
      return this.variables;
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
      return (0, _misconception.identifyMisconceptions)(_symptom.SymptomFinder.symptoms, this.variables);
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
    }

    /**
     * Returns the document as an Abstract Semantic Graph.
     * 
     *
     * A Graph object (to be implemented) containing: 
     * - An array all nodes in the graph (index = node ID, value = JSON attributes)
     * - A 2D array of all connections e.g. at index 0, there will be an array of the IDs of all nodes that node 0 connects to)
     */
  }, {
    key: "getGraph",
    value: function getGraph() {
      var allNodes = [];
      var _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(this, _statements)),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var statement = _step.value;
          var _iterator2 = _createForOfIteratorHelper(statement.getExpressions()),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var exp = _step2.value;
              var allExp = exp.getAllNestedExpressions();
              try {
                allNodes.push.apply(allNodes, _toConsumableArray(allExp.map(function (e) {
                  return new _asg.GraphNode(e);
                })));
              } catch (e) {
                console.log("Unable to get graph nodes:", e);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var graph = new _asg.Graph(allNodes, this.getMisconceptions());
      return graph;
    }

    //#endregion
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
    _classPrivateFieldGet(this, _statements).push(_statement.Statement.createFromSource(lastSourceLine));
    // Block processing
    if (!lastSourceLine.continuesOnNextLine()) {
      currentBlock = _classPrivateMethodGet(this, _updateBlock, _updateBlock2).call(this, _classPrivateFieldGet(this, _statements)[_classPrivateFieldGet(this, _statements).length - 1], currentBlock);
    }
    for (var i = 1; i < textLines.length; i++) {
      var varsWithTypeNames = currentBlock.isScopeBlock() ? _classPrivateMethodGet(this, _getVariableNamesMatchingTypeNames, _getVariableNamesMatchingTypeNames2).call(this, currentBlock) : _classPrivateMethodGet(this, _getVariableNamesMatchingTypeNames, _getVariableNamesMatchingTypeNames2).call(this, currentBlock.getScope());
      var moduleNames = Array.from(currentBlock.getScope().findAllModules().keys());
      var options = {
        varsWithTypeNames: varsWithTypeNames,
        moduleNames: moduleNames,
        classDefinitionInProgress: currentBlock.hasParentOfEntity(_enums.ExpressionEntity.ClassDefinition)
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
      }
      // Block processing
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
  var _iterator3 = _createForOfIteratorHelper(allScopeBlocks),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var block = _step3.value;
      var _iterator6 = _createForOfIteratorHelper(block.getStatements()),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var statement = _step6.value;
          var _iterator7 = _createForOfIteratorHelper(statement.getExpressions()),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var expression = _step7.value;
              expression.checkForSymptoms();
              expression.checkForConstructs(expression);
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          if (statement.isBlockStatement()) {
            statement.checkRules(statement);
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  var _iterator4 = _createForOfIteratorHelper(this.variables.values()),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var vInfoArr = _step4.value;
      var _iterator8 = _createForOfIteratorHelper(vInfoArr),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var vInfo = _step8.value;
          vInfo.checkRules(vInfo);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  var _iterator5 = _createForOfIteratorHelper(this.userDefinedFunctions.values()),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var exp = _step5.value;
      var funcDefinition = exp.getParent();
      if (funcDefinition !== undefined && funcDefinition.is(_enums.ExpressionEntity.FunctionDefinitionStatement)) {
        var minArgs = funcDefinition.getParameters().length - funcDefinition.getOptionalParameterCount();
        var maxArgs = funcDefinition.getParameters().length;
        var funcCalls = Array.from(exp.getObservers()).filter(function (e) {
          return e.is(_enums.ExpressionEntity.UserDefinedFunctionCall);
        });
        var _iterator9 = _createForOfIteratorHelper(funcCalls),
          _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var call = _step9.value;
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
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  _classPrivateFieldGet(this, _documentRoot).checkRules(_classPrivateFieldGet(this, _documentRoot));
}
function _summariseVariables2() {
  var allVariables = new Map();
  var allScopeBlocks = _classPrivateMethodGet(this, _findAllScopeBlocks, _findAllScopeBlocks2).call(this);
  var _iterator10 = _createForOfIteratorHelper(allScopeBlocks),
    _step10;
  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var block = _step10.value;
      var scopeVars = block.getVariableMap();
      var userFunctions = block.getUserDefinedFunctions();
      var _iterator11 = _createForOfIteratorHelper(scopeVars),
        _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var _step11$value = _slicedToArray(_step11.value, 2),
            name = _step11$value[0],
            vInfo = _step11$value[1];
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
  this.variables = allVariables;
}
function _summariseUserDefinedFunctions2() {
  this.userDefinedFunctions = _classPrivateMethodGet(this, _findAllFunctions, _findAllFunctions2).call(this);
  this.userDefinedClasses = _classPrivateFieldGet(this, _documentRoot).getUserDefinedClasses();
  var functions = _classPrivateFieldGet(this, _documentRoot).getChildBlocksOfKind(_enums.ExpressionEntity.FunctionDefinition);
  var _iterator12 = _createForOfIteratorHelper(functions),
    _step12;
  try {
    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
      var f = _step12.value;
      var lastLines = f.getLastExecutedStatements();
      var alwaysReturns = f.alwaysReturnsAValue();
      if (alwaysReturns) {
        lastLines = lastLines.filter(function (s) {
          return s.getFirstExpression().is(_enums.ExpressionEntity.ReturnStatement);
        });
      }
      // Add to function call expression
      if (f.getParentBlock().getBlockEntity() !== _enums.ExpressionEntity.ClassDefinition) {
        if (this.userDefinedFunctions.has(f.getFunctionName()) && this.userDefinedFunctions.get(f.getFunctionName()).is(_enums.ExpressionEntity.FunctionName)) this.userDefinedFunctions.get(f.getFunctionName()).addReturns(lastLines, !alwaysReturns);
      } else {
        var className = f.getParentBlock().getClassType().name;
        if (this.userDefinedClasses.has(className)) {
          var methodTracking = this.userDefinedClasses.get(className).methods;
          if (methodTracking.has(f.getFunctionName())) {
            methodTracking.get(f.getFunctionName()).addReturns(lastLines, !alwaysReturns);
          }
        }
      }
    }
  } catch (err) {
    _iterator12.e(err);
  } finally {
    _iterator12.f();
  }
  _classPrivateMethodGet(this, _processUnconnectedFunctions, _processUnconnectedFunctions2).call(this);
  var overriddenBuiltIns = _classPrivateMethodGet(this, _findFunctionWithSameNameAsBuiltIns, _findFunctionWithSameNameAsBuiltIns2).call(this);
  _classPrivateMethodGet(this, _convertBuiltIns, _convertBuiltIns2).call(this, overriddenBuiltIns);
  _classPrivateMethodGet(this, _checkVariablesWithSameNameAsUserDefinedFunctions, _checkVariablesWithSameNameAsUserDefinedFunctions2).call(this);
  _classPrivateMethodGet(this, _processUnconnectedMethods, _processUnconnectedMethods2).call(this);
}
function _checkVariablesWithSameNameAsUserDefinedFunctions2() {
  var _this = this;
  var funcNames = this.userDefinedFunctions.keys();
  var matchingVarNames = Array.from(funcNames).filter(function (name) {
    return _this.variables.has(name);
  });
  var _iterator13 = _createForOfIteratorHelper(matchingVarNames),
    _step13;
  try {
    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
      var name = _step13.value;
      var func = this.userDefinedFunctions.get(name).getParent();
      if (func !== undefined) {
        var _iterator14 = _createForOfIteratorHelper(this.variables.get(name)),
          _step14;
        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var vInfo = _step14.value;
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
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
      }
    }
  } catch (err) {
    _iterator13.e(err);
  } finally {
    _iterator13.f();
  }
}
function _findFunctionWithSameNameAsBuiltIns2() {
  var funcNames = this.userDefinedFunctions.keys();
  var overrides = [];
  var _iterator15 = _createForOfIteratorHelper(funcNames),
    _step15;
  try {
    for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
      var name = _step15.value;
      var knownEntity = (0, _utils.keywordLookup)(name);
      if (knownEntity.category === _enums.ExpressionCategory.BuiltInFunctions) {
        overrides.push(name);
      }
    }
  } catch (err) {
    _iterator15.e(err);
  } finally {
    _iterator15.f();
  }
  return overrides;
}
function _convertBuiltIns2(functionNames) {
  if (functionNames.length > 0) {
    var allScopeBlocks = _classPrivateMethodGet(this, _findAllScopeBlocks, _findAllScopeBlocks2).call(this);
    // find all calls, convert to userdefined function, change return type
    var _iterator16 = _createForOfIteratorHelper(allScopeBlocks),
      _step16;
    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
        var block = _step16.value;
        var statements = block.getStatements();
        var _iterator17 = _createForOfIteratorHelper(statements),
          _step17;
        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var s = _step17.value;
            var expressions = s.getExpressions();
            var funcCalls = expressions.flatMap(function (e) {
              return e.getExpressionsOfKind(_enums.ExpressionEntity.BuiltInFunctionCall);
            }).filter(function (f) {
              return functionNames.includes(f.getFunctionName());
            });
            var _iterator18 = _createForOfIteratorHelper(funcCalls),
              _step18;
            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var f = _step18.value;
                if (functionNames.includes(f.getFunctionName())) {
                  f.convertToUserDefinedFunction(this.userDefinedFunctions.get(f.getFunctionName()));
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
  }
}
function _findAllFunctions2() {
  var funcMap = new Map();
  var allScopeBlocks = _classPrivateMethodGet(this, _findAllScopeBlocks, _findAllScopeBlocks2).call(this);
  var _iterator19 = _createForOfIteratorHelper(allScopeBlocks),
    _step19;
  try {
    for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
      var block = _step19.value;
      var userFunctions = block.getUserDefinedFunctions();
      var _iterator20 = _createForOfIteratorHelper(userFunctions),
        _step20;
      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
          var _step20$value = _slicedToArray(_step20.value, 2),
            name = _step20$value[0],
            funcExp = _step20$value[1];
          funcMap.set(name, funcExp);
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
  return funcMap;
}
function _processUnconnectedFunctions2() {
  var allScopeBlocks = _classPrivateMethodGet(this, _findAllScopeBlocks, _findAllScopeBlocks2).call(this);
  var _iterator21 = _createForOfIteratorHelper(allScopeBlocks),
    _step21;
  try {
    for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
      var block = _step21.value;
      var unconnectedCalls = block.getUnconnectedFunctionCalls();
      var _iterator22 = _createForOfIteratorHelper(unconnectedCalls),
        _step22;
      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var func = _step22.value;
          var _iterator23 = _createForOfIteratorHelper(func[1]),
            _step23;
          try {
            for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
              var call = _step23.value;
              if (this.userDefinedFunctions.has(func[0])) {
                var f = this.userDefinedFunctions.get(func[0]);
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
  } catch (err) {
    _iterator21.e(err);
  } finally {
    _iterator21.f();
  }
}
function _processUnconnectedMethods2() {
  var allScopeBlocks = _classPrivateMethodGet(this, _findAllScopeBlocks, _findAllScopeBlocks2).call(this);
  var _iterator24 = _createForOfIteratorHelper(allScopeBlocks),
    _step24;
  try {
    for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
      var block = _step24.value;
      var unconnectedCalls = block.getUnconnectedMethodCalls();
      var _iterator25 = _createForOfIteratorHelper(unconnectedCalls),
        _step25;
      try {
        for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
          var func = _step25.value;
          var _iterator26 = _createForOfIteratorHelper(func[1]),
            _step26;
          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
              var call = _step26.value;
              var obj = call.getObject();
              var method = void 0;
              if (obj.getDataType().isCustom) {
                if (obj.getDataType().methods.has(func[0])) {
                  method = obj.getDataType().methods.get(func[0]);
                }
              } else {
                var _iterator27 = _createForOfIteratorHelper(this.userDefinedClasses.values()),
                  _step27;
                try {
                  for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                    var userClass = _step27.value;
                    if (userClass.methods.has(func[0])) {
                      method = userClass.methods.get(func[0]);
                      break;
                    }
                  }
                } catch (err) {
                  _iterator27.e(err);
                } finally {
                  _iterator27.f();
                }
              }
              if (method) {
                method.addObserver(call);
                call.setDataType(method.getReturnType());
              }
              /*if (this.userDefinedFunctions.has(func[0])) {
                  const f = this.userDefinedFunctions.get(func[0]);
                  f.addObserver(call);
                  call.setDataType(f.getReturnType());
              }
              else if (this.#isImportedEntity(func[0], block)) {
                  call.convertToImportedFunction();
              }
              else {
                  call.setDataType(DataType.Unknown);
                  SymptomFinder.symptoms.push(SymptomFinder.createStatementSymptom(SymptomType.UnknownFunction, [call], 0, 0))
              }*/
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
    }
  } catch (err) {
    _iterator24.e(err);
  } finally {
    _iterator24.f();
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
    var blockStatementToUpdate = undefined;
    // Need a way to get variables in list comprehensions (expressoinnode replaced with placeholder)
    var listComprehensions = _classPrivateMethodGet(this, _prepareListComprehensions, _prepareListComprehensions2).call(this, lastStatement);
    if (!currentBlock.isScopeBlock()) {
      var scopeBlock = currentBlock.getScope();
      // Ask scope block for the statement to update
      blockStatementToUpdate = scopeBlock.getStatementToUpdate(statementIndent, startLine);
    }
    if (firstExpression.isOneOf([_enums.ExpressionEntity.FunctionDefinitionStatement, _enums.ExpressionEntity.MethodDefinitionStatement])) {
      currentBlock = _classPrivateMethodGet(this, _createNewFunctionBlock, _createNewFunctionBlock2).call(this, currentBlock, lastStatement, statementIndent);
      if (firstExpression.is(_enums.ExpressionEntity.MethodDefinitionStatement)) {
        _classPrivateMethodGet(this, _connectMethodToClass, _connectMethodToClass2).call(this, currentBlock, firstExpression);
      }
    } else if (firstExpression.is(_enums.ExpressionEntity.ClassDefinitionStatement)) {
      currentBlock = _classPrivateMethodGet(this, _createNewClassBlock, _createNewClassBlock2).call(this, currentBlock, lastStatement, statementIndent);
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
  var _iterator28 = _createForOfIteratorHelper(listComprehensions),
    _step28;
  try {
    for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
      var comp = _step28.value;
      var compBlock = new _block.ListComprehensionBlock(currentBlock, comp);
      currentBlock.addChildBlock(compBlock);
    }
  } catch (err) {
    _iterator28.e(err);
  } finally {
    _iterator28.f();
  }
}
function _connectMethodToClass2(methodBlock, methodDefinition) {
  var parentBlock = methodBlock.getParentBlock();
  if (parentBlock && parentBlock.getBlockEntity() === _enums.ExpressionEntity.ClassDefinition) {
    var classType = parentBlock.getClassType();
    var methodExpression = methodDefinition.getMethodNameExpression();
    methodExpression.setContainingClass(classType);
    classType.methods.set(methodExpression.getTextValue(), methodExpression);
  }
}
function _prepareListComprehensions2(statement) {
  var expressions = statement.getExpressions();
  var comprehensions = [];
  var _iterator29 = _createForOfIteratorHelper(expressions),
    _step29;
  try {
    for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
      var e = _step29.value;
      var foundComps = e.getExpressionsOfKind(_enums.ExpressionEntity.ListComprehension);
      var _iterator30 = _createForOfIteratorHelper(foundComps),
        _step30;
      try {
        for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
          var found = _step30.value;
          comprehensions.push(found.copyAndConvertToPlaceholder());
        }
      } catch (err) {
        _iterator30.e(err);
      } finally {
        _iterator30.f();
      }
    }
  } catch (err) {
    _iterator29.e(err);
  } finally {
    _iterator29.f();
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
        var _iterator31 = _createForOfIteratorHelper(lastBlockSiblings),
          _step31;
        try {
          for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
            var existing = _step31.value;
            branchBlock.addSibling(existing);
            existing.addSibling(branchBlock);
          }
        } catch (err) {
          _iterator31.e(err);
        } finally {
          _iterator31.f();
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
  currentBlock.addChildBlock(functionBlock);
  //block = functionBlock;
  //functionBlock.addStatement(lastStatement);
  return functionBlock;
}
function _createNewClassBlock2(currentBlock, lastStatement, statementIndent) {
  currentBlock = _classPrivateMethodGet(this, _shiftCurrentBlock, _shiftCurrentBlock2).call(this, statementIndent, currentBlock, lastStatement.getFirstLineNumber());
  var classBlock = new _block.ClassBlock(currentBlock, lastStatement);
  currentBlock.addChildBlock(classBlock);
  return classBlock;
}
function _shiftCurrentBlock2(statementIndent, currentBlock, statementStartLine) {
  var currentIndent = currentBlock.getIndentation();
  var currentStatements = currentBlock.getStatements();
  // edge case where body is on same line as definition of block
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