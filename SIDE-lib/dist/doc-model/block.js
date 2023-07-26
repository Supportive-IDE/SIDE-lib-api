"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatementBlock = exports.ScopeBlock = exports.ListComprehensionBlock = exports.FunctionBlock = exports.ClassBlock = exports.BranchBlock = void 0;

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  }, {
    key: "toTree",
    value: function toTree() {
      return {
        id: this.getId(),
        statements: _classPrivateFieldGet(this, _statements).map(function (s) {
          return s.toJSON();
        }),
        children: _classPrivateFieldGet(this, _childBlocks).map(function (b) {
          return b.toTree();
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

  /** @type {Map<String, DataType} */

  /** @type {Map<String, UserDefinedMethodCall[]} */

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

    _defineProperty(_assertThisInitialized(_this2), "variableMap", new Map());

    _defineProperty(_assertThisInitialized(_this2), "globalVars", new Set());

    _defineProperty(_assertThisInitialized(_this2), "moduleMap", new Map());

    _defineProperty(_assertThisInitialized(_this2), "userDefinedFunctionMap", new Map());

    _defineProperty(_assertThisInitialized(_this2), "unconnectedFunctionCalls", new Map());

    _defineProperty(_assertThisInitialized(_this2), "userDefinedClassMap", new Map());

    _defineProperty(_assertThisInitialized(_this2), "unconnectedMethodCalls", new Map());

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

      _rawtextprocessing.StatementProcessor.connectUserDefinedMethods(statement, scope !== undefined ? scope : this);
    } //#endregion - overrides
    //#region - extensions

    /**
     * Gets the map of variables found in this block (just this block, not nested blocks)
     * @returns {Map<String, VariableInfo>}
     */

  }, {
    key: "getVariableMap",
    value: function getVariableMap() {
      return this.variableMap;
    }
    /**
     * Gets the map of modules found in this block
     * @returns {Map<String, ModuleInfo>}
     */

  }, {
    key: "getModuleMap",
    value: function getModuleMap() {
      return this.moduleMap;
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
      this.userDefinedFunctionMap.set(funcName, functionExp);

      if (this.unconnectedFunctionCalls.has(funcName)) {
        var _iterator8 = _createForOfIteratorHelper(this.unconnectedFunctionCalls.get(funcName)),
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

        this.unconnectedFunctionCalls["delete"](funcName);
      }
    }
    /**
     * Adds a user defined class to the tracking
     * @param {DataType} classType 
     */

  }, {
    key: "addUserDefinedClass",
    value: function addUserDefinedClass(classType) {
      this.userDefinedClassMap.set(classType.name, classType); // TODO: search unconnectedFunctionCalls for functions matching the classname
    }
    /**
     * Gets the user defined functions defined in this block
     * @returns {Map<String, UserDefinedFunctionExpression>}
     */

  }, {
    key: "getUserDefinedFunctions",
    value: function getUserDefinedFunctions() {
      return this.userDefinedFunctionMap;
    }
    /**
     * Gets the user defined classes defined in this block
     * @returns {Map<String, UserDefinedClassExpression}
     */

  }, {
    key: "getUserDefinedClasses",
    value: function getUserDefinedClasses() {
      return this.userDefinedClassMap;
    }
    /**
     * Get unconnected function calls
     * @returns {Map<String, UserDefinedFunctionCall[]>}
     */

  }, {
    key: "getUnconnectedFunctionCalls",
    value: function getUnconnectedFunctionCalls() {
      return this.unconnectedFunctionCalls;
    }
    /**
     * Get unconnected method calls
     * @returns {Map<String, UserDefinedMethodCall[]}
     */

  }, {
    key: "getUnconnectedMethodCalls",
    value: function getUnconnectedMethodCalls() {
      return this.unconnectedMethodCalls;
    }
    /**
     * Adds a call of a function that is not yet tracked to the unconnected function map
     * @param {UserDefinedFunctionCall} functionCallExp 
     */

  }, {
    key: "addUnconnectedFunctionCall",
    value: function addUnconnectedFunctionCall(functionCallExp) {
      var funcName = functionCallExp.getFunctionName();

      if (!this.unconnectedFunctionCalls.has(funcName)) {
        this.unconnectedFunctionCalls.set(funcName, []);
      }

      this.unconnectedFunctionCalls.get(funcName).push(functionCallExp);
    }
    /**
     * Adds a call of a method that is not yet tracked to the unconnected method map
     * @param {UserDefinedMethodCall} methodCallExp 
     */

  }, {
    key: "addUnconnectedMethodCall",
    value: function addUnconnectedMethodCall(methodCallExp) {
      var methodName = methodCallExp.getMethodName();

      if (!this.unconnectedMethodCalls.has(methodName)) {
        this.unconnectedMethodCalls.set(methodName, []);
      }

      this.unconnectedMethodCalls.get(methodName).push(methodCallExp);
    }
    /**
     * Adds tracking for a variable marked with the global keyword
     * @param {String} name 
     */

  }, {
    key: "addGlobalVar",
    value: function addGlobalVar(name) {
      this.globalVars.add(name);
    }
    /**
     * Gets the names of any global variables
     * @returns {Set<String>}
     */

  }, {
    key: "getGlobalVars",
    value: function getGlobalVars() {
      return this.globalVars;
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

var _classType = /*#__PURE__*/new WeakMap();

var ClassBlock = /*#__PURE__*/function (_ScopeBlock) {
  _inherits(ClassBlock, _ScopeBlock);

  var _super3 = _createSuper(ClassBlock);

  /** @type {DataType} */

  /**
   * Creates a new ClassBlock
   * @param {StatementBlock} parentBlock This block's parent, which will be undefined if this is the document root
   * @param {Statement} definitionStatement The definition line
   */
  function ClassBlock(parentBlock, definitionStatement) {
    var _this3;

    _classCallCheck(this, ClassBlock);

    _this3 = _super3.call(this, _enums.ExpressionEntity.ClassDefinition, parentBlock, definitionStatement.getIndentation());

    _classPrivateFieldInitSpec(_assertThisInitialized(_this3), _classType, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this3), _classType, definitionStatement.getFirstExpression().getDataType()); // CHANGE CLASS TRACKING TO USE DATATYPE


    parentBlock.getScope().addUserDefinedClass(_classPrivateFieldGet(_assertThisInitialized(_this3), _classType));

    _this3.addStatement(definitionStatement); //TODO: Class block symptoms this.addRules([this.#checkFunctionPrints]);


    return _this3;
  } //#region - overrides
  //#endregion - overrides
  //#region - extensions

  /**
   * Gets the data type of the class
   * @returns {DataType}
   */


  _createClass(ClassBlock, [{
    key: "getClassType",
    value: function getClassType() {
      return _classPrivateFieldGet(this, _classType);
    }
  }, {
    key: "toTree",
    value: function toTree() {
      var statements = this.getStatements();
      return {
        id: this.getId(),
        definition: statements.length > 0 ? statements[0].toJSON() : {},
        statements: statements.slice(1).map(function (s) {
          return s.toJSON();
        })
      };
    } //#endregion - extensions

  }]);

  return ClassBlock;
}(ScopeBlock);
/**
 * @extends ScopeBlock
 */


exports.ClassBlock = ClassBlock;

var _return = /*#__PURE__*/new WeakMap();

var _functionName = /*#__PURE__*/new WeakMap();

var _checkFunctionPrints = /*#__PURE__*/new WeakSet();

var FunctionBlock = /*#__PURE__*/function (_ScopeBlock2) {
  _inherits(FunctionBlock, _ScopeBlock2);

  var _super4 = _createSuper(FunctionBlock);

  /** @type {ReturnStatement | undefined} */
  // Top level return 

  /** @type {String} */

  /**
   * Creates a new FunctionBlock
   * @param {StatementBlock} parentBlock This block's parent, which will be undefined if this is the document root
   * @param {Statement} definitionStatement The definition line
   */
  function FunctionBlock(parentBlock, definitionStatement) {
    var _this4;

    _classCallCheck(this, FunctionBlock);

    _this4 = _super4.call(this, _enums.ExpressionEntity.FunctionDefinition, parentBlock, definitionStatement.getIndentation());

    _classPrivateMethodInitSpec(_assertThisInitialized(_this4), _checkFunctionPrints);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this4), _return, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this4), _functionName, {
      writable: true,
      value: void 0
    });

    var definition = definitionStatement.getFirstExpression(); //.getFunctionNameExpression();

    var firstExp = definition.getEntity() === _enums.ExpressionEntity.FunctionDefinitionStatement ? definition.getFunctionNameExpression() : definition.getMethodNameExpression();

    _classPrivateFieldSet(_assertThisInitialized(_this4), _functionName, firstExp.getTextValue());

    parentBlock.getScope().addUserDefinedFunction(firstExp);

    if (definition.is(_enums.ExpressionEntity.MethodDefinitionStatement) && definition.getClassVar() && parentBlock.getBlockEntity() === _enums.ExpressionEntity.ClassDefinition) {
      var classDefinition = parentBlock.getStatements()[0];
      var classDataType = classDefinition.getFirstExpression().getDataType();
      definition.getClassVar().setDataType(classDataType);
    }

    _this4.addStatement(definitionStatement);

    _this4.addRules([_classPrivateMethodGet(_assertThisInitialized(_this4), _checkFunctionPrints, _checkFunctionPrints2)]);

    return _this4;
  } //#region - overrides
  //#endregion - overrides
  //#region - extensions

  /**
   * Gets the aggregated return type of the function
   * @returns {DataType}
   */


  _createClass(FunctionBlock, [{
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
    }
  }, {
    key: "toTree",
    value: function toTree() {
      var statements = this.getStatements();
      return {
        id: this.getId(),
        definition: statements.length > 0 ? statements[0].toJSON() : {},
        statements: statements.slice(1).map(function (s) {
          return s.toJSON();
        })
      };
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

var ListComprehensionBlock = /*#__PURE__*/function (_ScopeBlock3) {
  _inherits(ListComprehensionBlock, _ScopeBlock3);

  var _super5 = _createSuper(ListComprehensionBlock);

  /**
   * Creates a new ListComprehensionBlock
   * @param {StatementBlock} parentBlock This block's parent, which will be undefined if this is the document root
   * @param {ListComprehensionExpression} listComprehensionExpression The definition line
   */
  function ListComprehensionBlock(parentBlock, listComprehensionExpression) {
    var _this5;

    _classCallCheck(this, ListComprehensionBlock);

    _this5 = _super5.call(this, _enums.ExpressionEntity.ListComprehension, parentBlock);
    var statement = new _statement.Statement(listComprehensionExpression.getTextValue(), listComprehensionExpression.getStartLineNumber(), new _indent.Indent(""), [listComprehensionExpression]);

    _this5.addStatement(statement);

    return _this5;
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

var _getInnerStatements = /*#__PURE__*/new WeakSet();

var _hasSiblingOfEntity = /*#__PURE__*/new WeakSet();

var _checkOneLineConditional3 = /*#__PURE__*/new WeakSet();

var _checkBranchExit = /*#__PURE__*/new WeakSet();

var _checkLoopVarAssignedIntLiteral = /*#__PURE__*/new WeakSet();

var _checkLoopVarModification = /*#__PURE__*/new WeakSet();

var _findBlocksOfVarMod = /*#__PURE__*/new WeakSet();

var BranchBlock = /*#__PURE__*/function (_StatementBlock2) {
  _inherits(BranchBlock, _StatementBlock2);

  var _super6 = _createSuper(BranchBlock);

  /** @type {Set<BranchBlock>} */
  // Stores the ids of conditional branch siblings if this is a conditional branch

  /**
  * Creates a new BranchBlock representing a block of Python code
  * @param {StatementBlock} parentBlock This block's parent, which will be undefined if this is the document root
  * @param {Statement} definitionStatement The definition line
  */
  function BranchBlock(parentBlock, definitionStatement) {
    var _this6;

    _classCallCheck(this, BranchBlock);

    var blockEntity = definitionStatement.getFirstExpression().getBlockEntity();
    if (blockEntity === _enums.ExpressionEntity.DocumentDefinition || blockEntity === _enums.ExpressionEntity.FunctionDefinition || blockEntity === _enums.ExpressionEntity.ClassDefinition || blockEntity === _enums.ExpressionEntity.ListComprehension) throw new Error("".concat(blockEntity.name, " is a scope block"));
    _this6 = _super6.call(this, blockEntity, parentBlock, definitionStatement.getIndentation());

    _classPrivateMethodInitSpec(_assertThisInitialized(_this6), _findBlocksOfVarMod);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this6), _checkLoopVarModification);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this6), _checkLoopVarAssignedIntLiteral);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this6), _checkBranchExit);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this6), _checkOneLineConditional3);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this6), _hasSiblingOfEntity);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this6), _getInnerStatements);

    _defineProperty(_assertThisInitialized(_this6), "conditionalSiblings", new Set());

    _this6.addStatement(definitionStatement);

    _this6.addRules([_classPrivateMethodGet(_assertThisInitialized(_this6), _checkBranchExit, _checkBranchExit2), _classPrivateMethodGet(_assertThisInitialized(_this6), _checkLoopVarModification, _checkLoopVarModification2), _classPrivateMethodGet(_assertThisInitialized(_this6), _checkOneLineConditional3, _checkOneLineConditional4), _classPrivateMethodGet(_assertThisInitialized(_this6), _checkLoopVarAssignedIntLiteral, _checkLoopVarAssignedIntLiteral2)]);

    return _this6;
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

        var _iterator14 = _createForOfIteratorHelper(this.conditionalSiblings),
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
      return this.conditionalSiblings;
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

      this.conditionalSiblings.add(branch);
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

  if (blockStatement.length !== 1) {//throw new Error("A branch block should only contain one statement, which should be a block statement")
  }

  return blockStatement[0].getStatements();
}

function _hasSiblingOfEntity2(entity) {
  var _iterator23 = _createForOfIteratorHelper(this.conditionalSiblings),
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