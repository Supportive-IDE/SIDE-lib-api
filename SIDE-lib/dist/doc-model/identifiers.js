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
/**
 * Information about a variable (or attribute) and its usages
 */
var _name = /*#__PURE__*/new WeakMap();
var _usages = /*#__PURE__*/new WeakMap();
var _definedInBlock = /*#__PURE__*/new WeakMap();
var _scope = /*#__PURE__*/new WeakMap();
var _isParameter = /*#__PURE__*/new WeakMap();
var _usedInChildScopes = /*#__PURE__*/new WeakMap();
var _childScopeUsages = /*#__PURE__*/new WeakMap();
var _attributesOfSameClass = /*#__PURE__*/new WeakSet();
var _processConditionalUsage = /*#__PURE__*/new WeakSet();
var _checkUnused = /*#__PURE__*/new WeakSet();
var _isNamedArgInCall = /*#__PURE__*/new WeakSet();
var _checkUndefined = /*#__PURE__*/new WeakSet();
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
   * @param {UsageInfo} firstUsage The first time the new variable or attribute is encountered
   * @param {Statement} containingStatement The statment that contains firstExpression
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
    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _attributesOfSameClass);
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
    if (!_firstUsage.getVariable().isOneOf([_enums.ExpressionEntity.VariableName, _enums.ExpressionEntity.PropertyName])) {
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
          var lastUsageVar = lastUsage.getVariable();
          // If usage is in a conditional branch definition and there is a usage already added from inside the branch, skip
          if (lastUsage.isInConditionalDefinition()) {
            // get the block that represents the body
            var conditionalBody = lastUsage.getBodyOfConditional();
            if (usageBlocksAdded.has(conditionalBody)) {
              i--;
              continue;
            }
          }
          // If the last usage is in the same block or a parent, or both are attributes of the same class - connect
          if (usage.isInSameBlock(lastUsage) || lastUsage.isInParentBlock(usage) || _classPrivateMethodGet(this, _attributesOfSameClass, _attributesOfSameClass2).call(this, lastUsageVar, newUsageVar)) {
            newUsageVar.addLastUsage(lastUsageVar);
            lastUsagesFound = true;
          }
          // If last in #usages in in branch that is child of current - add that and find last in same block, else set DataType to Unknown
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

    /**
     * Checks of the usages are the same attribute in the same class
     * @param {VariableExpression | PropertyExpression} usageVar1 
     * @param {VariableExpression | PropertyExpression} usageVar2 
     * @returns {boolean}
     */
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

    /**
     * Helper method. Checks if this variable is a named argument in a function / method call.
     * @param {VariableExpression} usageVar 
     * @returns {Boolean}
     */

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
function _attributesOfSameClass2(usageVar1, usageVar2) {
  if (usageVar1.is(_enums.ExpressionEntity.VariableName) || usageVar2.is(_enums.ExpressionEntity.VariableName)) return false;
  return usageVar1.getOwnerType().name === usageVar2.getOwnerType().name;
}
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
            }
            // Need to check if parent is other part of exhaustive conditional being traked
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
    var isClassVarInMethodDefinition = usageVar.getParent() && usageVar.getParent().is(_enums.ExpressionEntity.MethodDefinitionStatement) && usageVar.getParent().getClassVar().getTextValue() === usageVar.getTextValue();
    if (usages.length === 1 && usageVar.isAssignedOrChanged() && !isClassVarInMethodDefinition && !_classPrivateMethodGet(varInfo, _isNamedArgInCall, _isNamedArgInCall2).call(varInfo, usageVar) && usageVar.getDataType() !== _enums.DataType.Undefined) {
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
    var blockStatements = _block2.getStatements();
    // var expression has correct block (list comp) but as string if (varExpression.getBlockId())
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

    /**
     * 
     * @param {StatementBlock | undefined} block 
     * @returns {BranchBlock | undefined}
     */
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
      }
      //return false;
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